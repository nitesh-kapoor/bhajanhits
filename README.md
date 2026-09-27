# Bhakti Bhajan Sangrah — mobile redesign

Updated in place: index.html, style.css, app.js.
Added: manifest.json, sw.js, icon.svg, icon-192.png, icon-512.png.
Preserved: data.js, byte-for-byte, with all 8 original bhajans and source notes.

Features: English-first mobile home; compact deity navigation (including original Surya Dev); title, deity, type and Romanized-lyrics search; favorites and 10 recent items; full-page bilingual reader; saved language and 18–40px font size; Singing Mode with optional wake lock; previous/next within the current results; browser back support; shareable query URLs; native sharing and copy/manual-copy fallbacks; static offline cache and PWA manifest.

Content assumptions: IDs 102–105 contain Hindi-unavailable notices in the original data. Those notices remain in data.js, but the Hindi button is disabled while the original Romanized lyrics display. No lyrics were invented. The collection currently contains only Bhajan entries; other deity/type filters intentionally show empty states. The collection is not labeled popular because no popularity data exists.

Adding content: Keep stable unique IDs. Existing fields remain supported (titleEn, titleHi, god, type, hindi, roman), as do titleEnglish, titleHindi, deity, lyricsHindi, lyricsRomanized. Use an empty string or omit unavailable lyrics. An optional stable slug preserves URLs when a title changes. No per-bhajan HTML is needed.

Hosting: Serve this folder through HTTPS on Firebase Hosting or another static host. No build step, framework, backend, account, or external font dependency. Query URLs work through index.html. Offline availability starts after the first successful online visit and service-worker installation. Increase the cache version in sw.js when releasing changes; an installed update activates after older tabs close.

Validation: Automated Edge/Chromium checks at 360, 390, 430, 768 and 1440px; screenshots reviewed; no horizontal page overflow; original data compared byte-for-byte; search, filters, language fallback, font/language persistence, favorites, recents, navigation, Singing Mode, direct URLs and offline reload tested. Browser console/page errors checked.

Real-device checks still needed: iPhone Safari and Android Chrome keyboard behavior, notch/safe-area layout, Devanagari font rendering, browser zoom, share sheet, installed PWA experience, and actual screen-awake behavior including app switching and low-power mode. Wake lock is optional and can be denied or released by the browser; Singing Mode remains usable. See https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API .
## Collection update — September 26, 2026
Added IDs 109–111: continuous Bhajan Medley (Romanized only), Mandir Mein Baithi Maiya Ji Aasan Lagai Ke (Hindi only), and Ganpati Ki Jai Jaikar (both supplied scripts). Total: 11 entries. The original 8 records are unchanged. Medley matches multiple deity filters. Source spelling, variants, and repetition cues preserved. Service worker cache upgraded to v2.


ZIP collection update: Added Hindi-only IDs 112–114. Total: 14 entries. All previous records unchanged. ID 113 omits a final repeated refrain partly obscured by Facebook controls; readable verses preserved. Poster spellings and abbreviated refrains retained. Offline cache v3.


PDF update: bahajans-lyrcis.pdf contributed 11 entries (IDs 115–125); pages 5 and 14 blank. Total 25. Three Romanized-only and eight Hindi-only records. Read multi-column pages column-by-column. Visually transcribed Hindi to avoid broken PDF font extraction. Retained printed wording and variants, including the separate Krishna and Sai Kripa versions. Added Guru & Family category. Existing 14 records unchanged. Cache v4. Tested all new readers at five widths.


Added ID 126: Mere Banke Bihari Lal, Hindi lyrics supplied directly by the user, with readable line breaks and original wording/repeats retained. Total 26; previous 25 unchanged. Cache v5.


Added IDs 127–130: Ambe Rani Ke Bhawan Mein Nache Languriya; Mere Kirtan Mein Rang Barsao; Ambe Tu Hai Jagdambe Kali (Aarti); Hanuman Ji Ki Aarti. Hindi only. Supplied wording/repetitions retained, citation markup removed. Total 30; original 26 unchanged. Cache v6.


Aarti Sangrah update: IDs 131-145, total 45. Added 13 PDF entries (11 aartis, Saraswati Prarthana with printed meanings, and Ramchandra stuti), plus two directly supplied Mata bhajans. Hanuman PDF variant labeled separately. Added Lord Vishnu and Santoshi Maa categories. Existing 30 records unchanged. Hindi/Sanskrit transcribed against page images; Email bhajan Romanized only. Cache v7. Verified record integrity, all 15 readers, Aarti/Santoshi filters, and mobile reader layout.


Image and language update: 61 entries. Added 14 distinct songs from 17 images (3 duplicates) plus Keejo Kesari Ke Lal and Duniya Rachne Wale Ko Bhagwan Kehte Hain. Added Romanized pronunciation for all 31 existing Hindi-only entries and all 16 new entries. Existing Hindi and supplied Romanized texts retained. Unreadable/cropped portions marked in IDs 151, 155, 156; no missing verses invented. Cache v8.

Image and language update: 61 entries. Added 14 distinct songs from 17 images (3 duplicates) plus Keejo Kesari Ke Lal and Duniya Rachne Wale Ko Bhagwan Kehte Hain. Added Romanized pronunciation for all 31 existing Hindi-only entries and all 16 new entries. Existing Hindi and supplied Romanized texts retained. Unreadable/cropped portions marked in IDs 151, 155, 156; no missing verses invented. Cache v8.
Latest addition ID 162: Paar Na Lagoge Shri Ram Ke Bina, including the supplied spoken passages. Final count 62; all have Romanized lyrics. Cache v9.

Added ID 163 Ram Bhi Milenge Tujhe Shyam Bhi Milenge, Hindi and Romanized. Total 63. Cache v10.

Added ID 164 Jhoom Jhoom Nache Dekho Bhakt Hanumana. Both scripts supplied by owner and preserved. Total 64. Cache v11.

Added ID 165 Shri Ram Ki Gali Mein Tum Jaana. Both supplied scripts preserved. Total 65. Cache v12.


## Compact library UI
Mobile home starts with search and numbered songs. The left menu contains library views, deity and type filters. Stable song numbers are shared across all views and the reader; search accepts numbers such as #24. Verified mobile layout, number search, reader numbering, deity/type filters, Recently Viewed numbering and Escape focus restoration.

## Community submission and AI pipeline — September 27, 2026 (v1.19.0)
Added end-to-end devotional crowdsourcing pipeline:
- Mobile-friendly submission modal allowing photo/screenshot upload (camera/file picker) or direct text pasting.
- Optional YouTube link input for rhythm, tune, and tempo reference.
- Optional contributor name and city/country attribution.
- Cloudflare Pages Function (`/api/submit-bhajan`) running Google Gemini AI:
  - Strict guardrails: rejects vulgarity, sexually explicit content, abuse, and non-devotional material.
  - Automatically structures Devanagari Hindi lyrics and Romanized singing pronunciation.
  - Classifies Deity and Type according to site taxonomy.
  - Automatically fetches `data.js`, assigns the next unique ID (166+), appends the song, bumps `sw.js` cache, and commits directly to GitHub repository.
- Upgraded offline service worker cache to `bbs-static-v19`.
