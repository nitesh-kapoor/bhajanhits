// Cloudflare Pages Function: /api/submit-bhajan
// Handles bhajan submissions, runs Gemini AI guardrails & extraction,
// and saves verified devotional hymns to the BHAJAN_SUBMISSIONS KV namespace.

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
    const isImage = mode === 'photo' || mode === 'image'; // app.js sends 'photo'

    if (isImage && !imageData) {
      return new Response(JSON.stringify({ error: 'Image data is required.' }), { status: 400, headers: corsHeaders });
    }
    if (!isImage && (typeof lyricsText !== 'string' || lyricsText.trim().length < 15)) {
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

    if (isImage) {
      // Clean base64 if it has data URL prefix
      const cleanBase64 = imageData.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType: /^image\/[a-z0-9.+-]+$/i.test(imageMime) ? imageMime : 'image/jpeg',
          data: cleanBase64
        }
      });
      parts.push({ text: "Please read the devotional hymn from this image, verify safety, and format according to instructions." });
    } else {
      parts.push({ text: `Submitted lyrics text:\n${lyricsText}` });
    }

    contents.push({ parts });

    // 3. Call Gemini API. Models can be changed with GEMINI_MODEL / GEMINI_FALLBACK_MODEL env vars
    //    when Google retires one. Busy/overloaded responses are retried, then the fallback model is tried.
    const models = [...new Set([
      context.env?.GEMINI_MODEL || 'gemini-3.8-flash',
      context.env?.GEMINI_FALLBACK_MODEL || 'gemini-3.5-flash'
    ])];
    const requestBody = JSON.stringify({
      contents,
      generationConfig: {
        // No temperature override: Google advises the default for Gemini 3 models (low values can loop).
        responseMimeType: "application/json"
      }
    });
    const isBusy = status => status === 429 || status === 500 || status === 503 || status === 504;
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    let geminiRes = null;
    let lastErrText = '';
    attempts:
    for (const model of models) {
      for (let attempt = 0; attempt < 2; attempt++) {
        if (geminiRes) await sleep(1500 * attempt + 500);
        geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: requestBody
        });
        if (geminiRes.ok) break attempts;
        lastErrText = await geminiRes.text();
        console.error(`Gemini ${model} attempt ${attempt + 1} failed (${geminiRes.status}): ${lastErrText.slice(0, 300)}`);
        if (geminiRes.status === 404) continue attempts; // model retired or unknown: try the next one
        if (!isBusy(geminiRes.status)) break attempts;
      }
    }

    if (!geminiRes.ok) {
      const busy = isBusy(geminiRes.status);
      let googleReason = '';
      try { googleReason = JSON.parse(lastErrText)?.error?.status || ''; } catch (e) {}
      const detail = ` (${geminiRes.status}${googleReason ? ' ' + googleReason : ''})`;
      return new Response(JSON.stringify({
        status: 'error',
        error: geminiRes.status === 429
          ? 'The AI checking service has reached its usage limit. Please try again later. Nothing was saved.' + detail
          : busy
          ? 'The AI checking service is very busy right now. Please wait a minute and try again. Nothing was saved.' + detail
          : `AI verification failed (${geminiRes.status}): ${lastErrText.slice(0, 500)}`
      }), { status: busy ? 503 : 502, headers: corsHeaders });
    }

    const geminiJson = await geminiRes.json();
    // Join the answer's text parts, skipping any "thought" parts that thinking models may include.
    const rawAiOutput = (geminiJson?.candidates?.[0]?.content?.parts || [])
      .filter(p => typeof p.text === 'string' && !p.thought)
      .map(p => p.text).join('') || null;
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
    if (parsedResult.status !== 'approved') {
      return new Response(JSON.stringify({ status: 'error', error: 'AI returned an unexpected result. Please try again.' }), { status: 502, headers: corsHeaders });
    }

    // 4. Validate and normalise the AI output before storing it
    const clip = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
    const titleEn = clip(parsedResult.titleEn, 150);
    const god = ALLOWED_DEITIES.includes(parsedResult.god) ? parsedResult.god : 'Multiple Deities';
    const type = ALLOWED_TYPES.includes(parsedResult.type) ? parsedResult.type : 'Bhajan';
    const hindi = clip(parsedResult.hindi, 20000);
    const roman = clip(parsedResult.roman, 20000);
    if (!titleEn || (!hindi && !roman)) {
      return new Response(JSON.stringify({ status: 'error', error: 'AI could not extract a title and lyrics. Please try a clearer photo or paste the text.' }), { status: 422, headers: corsHeaders });
    }

    const name = clip(contributorName, 60);
    const location = clip(contributorLocation, 80);
    let sourceText = 'Contributed with devotion';
    if (name) {
      sourceText = `Contributed with devotion by ${name}`;
      if (location) sourceText += ` (${location})`;
    }

    const newEntry = {
      id: Date.now(),
      titleEn,
      titleHi: clip(parsedResult.titleHi, 150),
      god,
      godHi: clip(parsedResult.godHi, 60),
      type,
      hindi,
      roman,
      desc: clip(parsedResult.desc, 300),
      source: sourceText,
      community: true,
      submittedAt: new Date().toISOString()
    };
    const yt = cleanYoutubeUrl(youtubeUrl);
    if (yt) newEntry.youtubeUrl = yt;
    if (name) newEntry.contributorName = name;
    if (location) newEntry.contributorLocation = location;

    // 5. Save to Cloudflare KV (single "submissions" key holding a JSON array)
    const kv = context.env?.BHAJAN_SUBMISSIONS;
    if (!kv) {
      return new Response(JSON.stringify({
        status: 'preview_only',
        item: newEntry,
        message: 'Bhajan passed guardrails and was formatted, but it was not saved: the BHAJAN_SUBMISSIONS KV binding is not configured.'
      }), { status: 200, headers: corsHeaders });
    }

    const submissions = await kv.get('submissions', { type: 'json' }) || [];
    const titleKey = titleSlug(titleEn);
    const builtInTitles = await loadBuiltInTitleKeys(context);
    if (builtInTitles.has(titleKey) || submissions.some(s => titleSlug(s.titleEn || '') === titleKey)) {
      return new Response(JSON.stringify({
        status: 'rejected',
        reason: `"${titleEn}" is already in the collection. Thank you for your devotion!`
      }), { status: 200, headers: corsHeaders });
    }

    submissions.push(newEntry);
    await kv.put('submissions', JSON.stringify(submissions));

    return new Response(JSON.stringify({
      status: 'success',
      item: newEntry,
      assignedId: newEntry.id
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

const ALLOWED_DEITIES = ["Lord Krishna", "Lord Shiva", "Durga Maa", "Lord Rama", "Lord Hanuman", "Lord Ganesha", "Sai Baba", "Saraswati Maa", "Lakshmi Maa", "Santoshi Maa", "Lord Vishnu", "Surya Dev", "Khatu Shyam Ji", "Guru & Family", "Multiple Deities"];
const ALLOWED_TYPES = ["Bhajan", "Aarti", "Chalisa", "Mantra", "Sundarkand"];

// Same slug rule as app.js, so duplicate checks match the site's URLs.
function titleSlug(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Best-effort read of titles in the static data.js (handles both quoting styles used there).
async function loadBuiltInTitleKeys(context) {
  const keys = new Set();
  try {
    const res = await context.env.ASSETS.fetch(new URL('/data.js', context.request.url));
    if (!res.ok) return keys;
    const text = await res.text();
    for (const m of text.matchAll(/"?titleEn"?\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/g)) {
      keys.add(titleSlug(m[2].replace(/\\(.)/g, '$1')));
    }
  } catch (e) {
    console.error('Could not read data.js for duplicate check:', e);
  }
  return keys;
}

function cleanYoutubeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    const host = url.hostname.replace(/^(www\.|m\.|music\.)/, '');
    if (url.protocol === 'https:' && (host === 'youtube.com' || host === 'youtu.be')) return url.href.slice(0, 300);
  } catch (e) {}
  return null;
}
