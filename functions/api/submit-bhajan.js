// Cloudflare Pages Function: /api/submit-bhajan
// Handles bhajan submissions, runs Gemini AI guardrails & extraction,
// and commits verified devotional hymns directly to GitHub.

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8'
  };

  try {
    const body = await context.request.json();
    const {
      mode,
      imageData,
      imageMime = 'image/jpeg',
      lyricsText,
      youtubeUrl,
      contributorName,
      contributorLocation
    } = body;

    if (mode === 'image' && !imageData) {
      return new Response(JSON.stringify({ error: 'Image data is required.' }), { status: 400, headers: corsHeaders });
    }
    if (mode === 'text' && (!lyricsText || lyricsText.trim().length < 15)) {
      return new Response(JSON.stringify({ error: 'Please enter at least a few lines of lyrics.' }), { status: 400, headers: corsHeaders });
    }

    const apiKey = context.env?.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({
        status: 'error',
        error: 'GEMINI_API_KEY is not configured in Cloudflare environment variables.'
      }), { status: 500, headers: corsHeaders });
    }

    // 1. Build prompt for Gemini Guardrail & Extraction
    const systemPrompt = `You are a reverent devotional archivist for "Bhakti Bhajan Sangrah", a Hindu devotional website created with devotion by Nitesh Kapoor.

TASK:
1. GUARDRAILS & CONTENT SAFETY:
   - REJECT immediately if the input contains: sexually explicit content, pornography, vulgarity, profanity, abuse, hate speech, harassment, political commentary, commercial advertisements, spam, receipts, memes, or secular pop songs.
   - REJECT if the input is NOT a genuine Hindu devotional prayer, bhajan, aarti, chalisa, stuti, mantra, or sacred stotram.
   - If rejected, respond ONLY with JSON:
     {
       "status": "rejected",
       "reason": "A polite and clear explanation why this cannot be accepted into the devotional collection."
     }

2. EXTRACTION & FORMATTING (If approved):
   - Preserve original wording, chorus refrains, and regional devotional style.
   - Provide accurate Devanagari Hindi lyrics with clean stanza breaks.
   - Provide complete Romanized Hindi transliteration (pronunciation for singing, NOT an English translation).
   - Classify the deity strictly from one of these:
     ["Lord Krishna", "Lord Shiva", "Durga Maa", "Lord Rama", "Lord Hanuman", "Lord Ganesha", "Sai Baba", "Saraswati Maa", "Lakshmi Maa", "Santoshi Maa", "Lord Vishnu", "Surya Dev", "Khatu Shyam Ji", "Guru & Family", "Multiple Deities"]
   - Classify the type strictly from one of these:
     ["Bhajan", "Aarti", "Chalisa", "Mantra", "Sundarkand"]

   Return JSON format:
   {
     "status": "approved",
     "titleEn": "Title in English/Romanized Hindi (e.g. Achyutam Keshavam)",
     "titleHi": "Title in Devanagari (e.g. अच्युतम केशवम)",
     "god": "Deity name from the allowed list",
     "godHi": "Deity name in Hindi (e.g. श्री कृष्ण, माँ दुर्गा)",
     "type": "Type from allowed list",
     "hindi": "Complete lyrics in Devanagari Hindi with newline breaks between lines and stanzas",
     "roman": "Complete lyrics in Romanized Hindi with newline breaks between lines and stanzas",
     "desc": "Short 1-sentence devotional description"
   }

Respond ONLY with valid raw JSON. Do not include markdown code block formatting (no \`\`\`json).`;

    // 2. Prepare Gemini payload
    const contents = [];
    const parts = [{ text: systemPrompt }];

    if (mode === 'image') {
      // Clean base64 if it has data URL prefix
      const cleanBase64 = imageData.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType: imageMime,
          data: cleanBase64
        }
      });
      parts.push({ text: "Please read the devotional hymn from this image, verify safety, and format according to instructions." });
    } else {
      parts.push({ text: `Submitted lyrics text:\n${lyricsText}` });
    }

    contents.push({ parts });

    // 3. Call Gemini 2.5 Flash API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return new Response(JSON.stringify({
        status: 'error',
        error: `AI verification failed (${geminiRes.status}): ${errText}`
      }), { status: 502, headers: corsHeaders });
    }

    const geminiJson = await geminiRes.json();
    const rawAiOutput = geminiJson?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawAiOutput) {
      return new Response(JSON.stringify({ status: 'error', error: 'Empty response from AI.' }), { status: 502, headers: corsHeaders });
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(rawAiOutput.trim().replace(/^```json/i, '').replace(/```$/i, ''));
    } catch (e) {
      return new Response(JSON.stringify({ status: 'error', error: 'AI output format parsing failed.' }), { status: 500, headers: corsHeaders });
    }

    // Guardrail failure check
    if (parsedResult.status === 'rejected') {
      return new Response(JSON.stringify({
        status: 'rejected',
        reason: parsedResult.reason || 'This upload could not be verified as a devotional hymn.'
      }), { status: 200, headers: corsHeaders });
    }

    // 4. Construct Contributor Attribution & Source
    let sourceText = 'Contributed with devotion';
    if (contributorName && contributorName.trim()) {
      sourceText = `Contributed with devotion by ${contributorName.trim()}`;
      if (contributorLocation && contributorLocation.trim()) {
        sourceText += ` (${contributorLocation.trim()})`;
      }
    }

    // 5. GitHub Commit Pipeline
    const githubToken = context.env?.GITHUB_TOKEN;
    const githubRepo = context.env?.GITHUB_REPO || 'nitesh-kapoor/bhajanhits';

    if (!githubToken) {
      // Return approved preview if GitHub token is not yet configured
      return new Response(JSON.stringify({
        status: 'preview_only',
        item: {
          ...parsedResult,
          source: sourceText,
          youtubeUrl: youtubeUrl?.trim() || null,
          contributorName: contributorName?.trim() || null,
          contributorLocation: contributorLocation?.trim() || null
        },
        message: 'Bhajan passed guardrails and formatted! To enable automatic commit, please add GITHUB_TOKEN to Cloudflare Pages settings.'
      }), { status: 200, headers: corsHeaders });
    }

    // Fetch data.js from GitHub
    const ghHeaders = {
      'Authorization': `Bearer ${githubToken}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'BhaktiBhajanSangrah-App'
    };

    const dataJsRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/data.js`, { headers: ghHeaders });
    if (!dataJsRes.ok) {
      return new Response(JSON.stringify({
        status: 'error',
        error: `Could not fetch data.js from GitHub (${dataJsRes.status}). Check token permissions.`
      }), { status: 502, headers: corsHeaders });
    }

    const dataJsMeta = await dataJsRes.json();
    const dataJsContent = decodeUtf8Base64(dataJsMeta.content);

    // Find highest ID in data.js
    const idMatches = [...dataJsContent.matchAll(/id:\s*(\d+)/g)];
    const existingIds = idMatches.map(m => Number(m[1]));
    const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 166;

    // Create the new Bhajan record
    const newEntry = {
      id: nextId,
      titleEn: parsedResult.titleEn,
      titleHi: parsedResult.titleHi,
      god: parsedResult.god,
      godHi: parsedResult.godHi,
      type: parsedResult.type,
      hindi: parsedResult.hindi,
      roman: parsedResult.roman,
      desc: parsedResult.desc || '',
      source: sourceText
    };

    if (youtubeUrl && youtubeUrl.trim()) {
      newEntry.youtubeUrl = youtubeUrl.trim();
    }
    if (contributorName && contributorName.trim()) {
      newEntry.contributorName = contributorName.trim();
    }
    if (contributorLocation && contributorLocation.trim()) {
      newEntry.contributorLocation = contributorLocation.trim();
    }

    // Format new entry JSON
    const entryString = `,\n  ` + JSON.stringify(newEntry, null, 2).replace(/\n/g, '\n  ');

    // Insert before the last closing bracket of bhajans array
    const lastBracketIdx = dataJsContent.lastIndexOf('];');
    if (lastBracketIdx === -1) {
      return new Response(JSON.stringify({ status: 'error', error: 'Could not locate closing bhajans array in data.js.' }), { status: 500, headers: corsHeaders });
    }

    const updatedDataJs = dataJsContent.slice(0, lastBracketIdx).trimEnd() + entryString + '\n];\n';

    // Commit updated data.js to GitHub
    const putDataRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/data.js`, {
      method: 'PUT',
      headers: ghHeaders,
      body: JSON.stringify({
        message: `Add ${parsedResult.type}: ${parsedResult.titleEn} (ID ${nextId})`,
        content: encodeUtf8Base64(updatedDataJs),
        sha: dataJsMeta.sha
      })
    });

    if (!putDataRes.ok) {
      const err = await putDataRes.text();
      return new Response(JSON.stringify({ status: 'error', error: `GitHub commit for data.js failed: ${err}` }), { status: 502, headers: corsHeaders });
    }

    // Increment Service Worker Cache Version
    try {
      const swRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/sw.js`, { headers: ghHeaders });
      if (swRes.ok) {
        const swMeta = await swRes.json();
        const swContent = decodeUtf8Base64(swMeta.content);
        const versionMatch = swContent.match(/bbs-static-v(\d+)/);
        if (versionMatch) {
          const nextVersion = Number(versionMatch[1]) + 1;
          const updatedSw = swContent.replace(/bbs-static-v\d+/, `bbs-static-v${nextVersion}`);
          await fetch(`https://api.github.com/repos/${githubRepo}/contents/sw.js`, {
            method: 'PUT',
            headers: ghHeaders,
            body: JSON.stringify({
              message: `Bump service worker cache to v${nextVersion} for ${parsedResult.titleEn}`,
              content: encodeUtf8Base64(updatedSw),
              sha: swMeta.sha
            })
          });
        }
      }
    } catch (e) {
      // SW version bump is progressive enhancement; do not fail overall request if it fails
    }

    return new Response(JSON.stringify({
      status: 'success',
      item: newEntry,
      assignedId: nextId
    }), { status: 200, headers: corsHeaders });

  } catch (err) {
    return new Response(JSON.stringify({
      status: 'error',
      error: err.message || 'Internal server error'
    }), { status: 500, headers: corsHeaders });
  }
}

// OPTIONS handler for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

// UTF-8 aware Base64 helpers
function decodeUtf8Base64(base64) {
  const cleanBase64 = base64.replace(/\s/g, '');
  const binString = atob(cleanBase64);
  const bytes = Uint8Array.from(binString, c => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeUtf8Base64(str) {
  const bytes = new TextEncoder().encode(str);
  let binString = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binString += String.fromCharCode(bytes[i]);
  }
  return btoa(binString);
}
