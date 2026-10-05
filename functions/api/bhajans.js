// Cloudflare Pages Function: GET /api/bhajans
// Returns community-submitted bhajans stored in the KV key "submissions".
// The static collection in data.js is served separately; app.js merges both.
//
// Songs numbered up to MOVED_TO_DATA_JS were copied into data.js (2026-10-04) and are not sent
// again; KV keeps them as the full-text record and so their numbers are never reused.
// Copyrighted songs ("lyrics": "partial") keep their full text in KV, but only the opening lines
// are published, the same as for the partial songs in data.js.
const MOVED_TO_DATA_JS = 98;

export async function onRequestGet(context) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=30'
  };

  const kv = context.env?.BHAJAN_SUBMISSIONS;
  if (!kv) {
    return new Response('[]', { status: 200, headers });
  }

  try {
    const list = await kv.get('submissions', { type: 'json' });
    const published = (Array.isArray(list) ? list : [])
      .filter(s => !(Number.isInteger(s.no) && s.no <= MOVED_TO_DATA_JS))
      .map(s => s.lyrics === 'full' ? s : { ...s, lyrics: 'partial', hindi: excerpt(s.hindi), roman: excerpt(s.roman) });
    return new Response(JSON.stringify(published), { status: 200, headers });
  } catch (err) {
    console.error('Reading submissions from KV failed:', err);
    return new Response('[]', { status: 200, headers: { ...headers, 'Cache-Control': 'no-store' } });
  }
}

// Opening lines of a copyrighted song: the first stanza, at most 4 lines (same rule as data.js).
function excerpt(text) {
  const out = [];
  for (const line of String(text || '').split('\n')) {
    if (!line.trim()) { if (out.length) break; continue; }
    out.push(line.trim());
    if (out.length === 4) break;
  }
  return out.join('\n');
}
