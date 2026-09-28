# Project context: Bhakti Bhajan Sangrah (bhajanhits.com)

Static devotional-song website (Hindi lyrics + Romanized Hindi) with AI-checked community submissions. `Bhakti-Bhajan-Sangrah-AI-Handoff.md` is the older Codex handoff: useful background on the original design, but its hosting, numbering and cache notes are out of date. This file is current.

## Owner and working style
- Owner: Nitesh Kapoor (Windows paths say "Sarthak"; that is not the owner). New to git, GitHub and Cloudflare: give exact PowerShell commands and click-by-click dashboard steps, one at a time, and ask for screenshots.
- Windows, project folder `C:\Nitesh\Bhajanhits.com`, PowerShell.
- Never ask the owner to paste secrets into chat or commit them. For local scripts use `$env:GEMINI_API_KEY = Read-Host "Gemini key"`.
- Cost-conscious; explain what can break before any production release.

## Hosting and release flow
- Live: https://bhajanhits.com (Cloudflare Pages project `bhakti-bhajan-sangrah`, custom domain). Preview: https://uat.bhakti-bhajan-sangrah.pages.dev
- Repo: https://github.com/nitesh-kapoor/bhajanhits. `uat` = testing, `main` = production.
- `.github/workflows/deploy.yml` syntax-checks the JS, copies only the public site files into `site/`, and runs `wrangler pages deploy site` (push to `main` -> Production, anything else -> Preview). `functions/` is picked up from the repo root. When adding a new static file, add it to the copy list there AND to `ASSETS` in `sw.js`.
- Release: push to `uat`, owner checks the preview, then a PR `uat` -> `main` merged in the GitHub web UI (`gh` CLI is not installed).
- The Cloudflare app `bhajanhits` (Workers, `*.workers.dev`, Git-connected) is an accidental duplicate, not the live site; the owner was advised to delete it. Its failing "Workers Builds" check on PRs can be ignored.
- GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. Pages settings (Production AND Preview): secret `GEMINI_API_KEY`, KV binding `BHAJAN_SUBMISSIONS`. Optional vars `GEMINI_MODEL` / `GEMINI_FALLBACK_MODEL`. `GITHUB_TOKEN` is unused (can be deleted).
- UAT and Production share ONE KV namespace: anything saved on uat is live after the next release. Never test bad content on uat.

## Files
- `index.html`, `style.css`: UI. CSS has many later overrides; new rules are appended at the end.
- `data.js`: `categories` and `bhajans` (65 built-in songs, ids 101-165), plus later `bhajans.push(...)` blocks and a `romanizedUpdates` map. UTF-8 with Devanagari and emoji; do not reformat.
- `app.js`: client logic (numbering, search, filters, favorites, reader, home extras, submit dialog). Plain script, no modules; check with `node --check app.js`.
- `sw.js`: network-first cache `bbs-static-vNN`. Bump NN whenever a cached asset changes.
- `functions/api/submit-bhajan.js`: POST /api/submit-bhajan (Gemini guardrail + formatting, then KV save).
- `functions/api/bhajans.js`: GET /api/bhajans (community songs from KV, `Cache-Control: public, max-age=30`).

## Community submissions
1. Pasted text is pre-checked before any AI call: duplicate lyrics, links, emails, phone numbers.
2. Gemini (`gemini-3.8-flash`, fallback `gemini-3.5-flash`, busy responses retried) gets the rules as `systemInstruction`; the submission is fenced in `<submission>` tags as untrusted content. It also checks contributor name/city (shown publicly).
3. Server-side checks on the AI output: allowed deity/type lists, length caps, no links/emails/phones, Hindi must be Devanagari, Romanized must be Latin, name/city letters only. Gemini safety blocks become polite rejections.
4. Duplicate check: title slug, Hindi title, and character-trigram similarity of the opening lyrics against data.js and saved submissions (calibrated: distinct songs <= 0.65, re-submissions >= 0.85). Side effect: a second genuine version of an existing song is rejected.
5. Saved to ONE KV key `submissions` (JSON array; one key because KV free tier limits list operations). Entry `id` = `Date.now()`, `community: true`, `submittedAt`, optional `youtubeUrl` (https YouTube only), `contributorName/Location`, and permanent number `no`.
6. Removing a bad entry: edit the `submissions` value in Cloudflare KV. Two submissions at the same instant can overwrite each other (acceptable at current traffic).
7. Gemini billing: paid Cloud Prepay, $5, auto-reload off (hard limit). When credit runs out, submissions fail with a friendly message; browsing is unaffected.
8. Live guardrail test (real Gemini, in-memory KV, saves nothing): `node C:\Nitesh\bhajan-guardrail-test\guardrail-live-test.mjs [case numbers]` (kept outside the repo). Re-run after changing the prompt or checks.

## Song numbers (important for group singing)
- Numbers are permanent. The original 65 keep their A-Z numbers 1-65 (`fixedNumbers` map in app.js). Each later song keeps its stored `no`; community numbers are assigned by the server as the next free number (`LAST_BUILTIN_NUMBER = 65` in submit-bhajan.js). The list is shown in number order, so new songs appear at the end with a "New" badge for 30 days.
- If a song is ever added to data.js by hand, give it an explicit `no:` above the current highest number. Never renumber existing songs.

## Home page
Compact by owner preference (no big hero): search, deity quick-pick chips, "Aaj ka Bhajan" (changes daily), "Newly added" strip (latest community songs with contributor), then the numbered list with deity-coloured cards. The extras only show on the unfiltered home view. Reader shows "Listen on YouTube" for songs with a link.

## Gotchas
- Git Bash: heredocs and `node -e` in this environment can drop backslashes; write files containing regexes with the editor tools, then verify. With `MSYS_NO_PATHCONV=1`, use `-o NUL` instead of `/dev/null` for curl.
- Line endings: index is LF, working copy CRLF (`core.autocrlf=true`); check `git diff -b` before assuming real changes.
- VS Code "content of the file is newer": the owner should Revert File, never Overwrite.
- Headless Chrome screenshots here have a 500px minimum layout width.
