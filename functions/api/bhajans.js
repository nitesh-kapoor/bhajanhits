// Cloudflare Pages Function: GET /api/bhajans
// Returns community-submitted bhajans stored in the KV key "submissions".
// The static collection in data.js is served separately; app.js merges both.

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
    return new Response(JSON.stringify(Array.isArray(list) ? list : []), { status: 200, headers });
  } catch (err) {
    console.error('Reading submissions from KV failed:', err);
    return new Response('[]', { status: 200, headers: { ...headers, 'Cache-Control': 'no-store' } });
  }
}
