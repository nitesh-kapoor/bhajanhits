// Cloudflare Pages Function: POST /api/report
// "Report a problem" from a song page. Reports are saved in the KV key "reports" (JSON array,
// newest last) and read by the owner in the Cloudflare dashboard. No email is sent and no AI is used.
// Spam protection: hidden trap field, length limits, no links, and only the newest MAX_REPORTS kept.
// Each report is one KV write (free tier: 1,000 writes a day, shared with song submissions).

const REASONS = ['Wrong or misspelled lyrics', 'Wrong video', 'Copyright concern', 'Inappropriate content', 'Other'];
const MAX_REPORTS = 300;

export async function onRequestPost(context) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };
  const reply = (status, body) => new Response(JSON.stringify(body), { status, headers });
  try {
    const body = await context.request.json().catch(() => ({}));
    // Bots fill every field; people never see this one. Pretend it worked.
    if (body.website) return reply(200, { status: 'ok' });

    const clean = (v, max) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : '');
    const no = Number.isInteger(body.no) && body.no > 0 && body.no < 100000 ? body.no : null;
    const title = clean(body.title, 150);
    const reason = REASONS.includes(body.reason) ? body.reason : null;
    const comment = typeof body.comment === 'string' ? body.comment.trim().slice(0, 1000) : '';
    const email = clean(body.email, 120);

    if (!no || !title || !reason) return reply(400, { status: 'error', error: 'Please choose what is wrong.' });
    if (comment.length < 5) return reply(400, { status: 'error', error: 'Please write a few words about the problem.' });
    if (/https?:\/\/|www\./i.test(comment + ' ' + title)) return reply(400, { status: 'error', error: 'Please describe the problem without links.' });
    if (email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) return reply(400, { status: 'error', error: 'That email address does not look right. You can leave it empty.' });

    const kv = context.env?.BHAJAN_SUBMISSIONS;
    if (!kv) return reply(503, { status: 'error', error: 'Reports cannot be saved right now. Please email bhajanhits.contact@gmail.com instead.' });

    const reports = await kv.get('reports', { type: 'json' }) || [];
    reports.push({ at: new Date().toISOString(), no, title, reason, comment, ...(email ? { email } : {}) });
    await kv.put('reports', JSON.stringify(reports.slice(-MAX_REPORTS)));
    return reply(200, { status: 'ok' });
  } catch (err) {
    console.error('Saving report failed:', err);
    return reply(500, { status: 'error', error: 'Something went wrong. Please email bhajanhits.contact@gmail.com instead.' });
  }
}
