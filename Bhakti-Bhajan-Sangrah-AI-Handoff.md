# Bhakti Bhajan Sangrah — AI continuation handoff

Prepared September 26, 2026. This document describes the final project state after the latest successful Cloudflare deployment. Read this before editing. The owner is **Nitesh Kapoor**, not Sarthak; Sarthak appears only in Windows paths.

## Start here

1. Extract the accompanying `bhakti-bhajan-sangrah.zip` into a working folder, or use the existing project path below.
2. Read this document, then inspect `index.html`, `app.js`, `style.css`, `data.js`, and `sw.js`.
3. Ask the owner for the next desired change. There is no outstanding implementation request at handoff.
4. Preserve the existing collection and behavior. Make targeted changes, verify them in a browser, and deploy only the intended version.
5. This is a plain static website. No npm installation or build step is required.

## Owner, purpose, preferences

The website is a personal devotional collection for group singing: bhajans, aartis, chalisas, mantras, and related prayers. Mobile readability is the priority. People sitting together use the displayed number to identify what to sing.

- Creator credit: **Created with devotion by Nitesh Kapoor**. Keep the correct name in the menu and footer.
- Compact home: get visitors to the collection quickly. Do not restore the large welcome hero or large filter sections above the list.
- Every list must show numbers, including filtered lists, Favorites, and Recently Viewed.
- Latest numbering choice: alphabetical by English/Romanized title, not insertion order. The same item uses its full-collection number in every filtered view. New titles can shift numbers; this tradeoff was explained to the owner.
- Hindi plus Romanized Hindi is expected whenever the supplied material supports both. “English” in this app means pronunciation/transliteration, not English meaning.
- Preserve supplied wording, repetitions, and regional variants. Do not invent missing lyrics or silently replace a supplied version with an online version.
- User commonly supplies pasted lyrics, screenshots, handwritten images, ZIPs, and PDFs. Remove screenshot UI/ad text and duplicate images; preserve actual lyrics.
- User wants action and verified completion, with concise progress updates. Avoid unnecessary confirmation loops, but obtain actual permissions/authentication when required by the next environment.

## Paths and deliverables

Live website: https://bhakti-bhajan-sangrah.pages.dev/

Existing source folder:
`C:\Users\Sarthak\Downloads\bhakti-bhajan-sangrah-your-collection`

Conversation workspace:
`C:\Users\Sarthak\Documents\Codex\2026-09-26\files-pasted-by-the-user-you`

Portable current project ZIP:
`C:\Users\Sarthak\Documents\Codex\2026-09-26\files-pasted-by-the-user-you\outputs\bhakti-bhajan-sangrah.zip`

This handoff:
`C:\Users\Sarthak\Documents\Codex\2026-09-26\files-pasted-by-the-user-you\outputs\Bhakti-Bhajan-Sangrah-AI-Handoff.md`

Scratch scripts/backups live in `work/` beneath the conversation workspace. They are historical, not a build system. **Do not rerun old content-generation scripts blindly.** In particular, `apply-language-update.py` reconstructs an older collection and can drop newer entries.

## Exact final UI state — important

The latest owner instruction was: **“only one change make Type as collapsable and Browse by Deity as non collapsable.”** It was implemented and deployed successfully.

- Header: menu icon, Om logo, website name. Sticky at the top while scrolling the collection. It is hidden in the lyrics reader, which has its own controls.
- Search immediately below header; collection follows without a hero.
- Left drawer: “Library & filters” heading and close button.
- Favorites and Recently Viewed buttons occupy **one row**.
- There is **no All Items / All Bhajans menu button**. Reset filters returns to the whole collection.
- **Type is a collapsed-by-default `<details id="typeFilters">`**, toggled via its “Type” summary. Its six buttons are All Types, Bhajan, Aarti, Chalisa, Mantra, Sundarkand, arranged in a three-column grid when opened.
- **Browse by Deity is an ordinary always-expanded `<section id="categories">` with its heading visible.** It is NOT a disclosure.
- Deity buttons use two columns. All Deities is the first option.
- Hide categories with no collection entries, checking both the primary deity and optional `deities` aliases. Currently Surya Dev and Khatu Shyam Ji are hidden, but remain in data so they automatically appear when matching content is added.
- Creator signature follows the filters. Sticky drawer footer has Reset filters and Show N items.
- Counts use “item/items”, not “bhajan/bhajans”, because the collection contains several types.
- With Deity always expanded, short screens may need drawer scrolling. That is consistent with the latest explicit request; do not silently re-collapse Deity to eliminate scrolling.
- Home footer contains the larger creator signature and community note.

A prior request to remove both headings was started locally/uploaded but cancelled before deployment. It is **not the intended final state**. Both headings are present now, with only Type collapsible.

## Architecture and files

| File | Responsibility |
| --- | --- |
| `index.html` | Static page structure, collection, reader, drawer, share dialog, PWA references |
| `style.css` | Warm cream/terracotta styling, responsive cards, drawer, reader, sticky header; later overrides near end |
| `app.js` | Data normalization, alphabetical sort/numbering, filters/search, favorites/recents, navigation, language/font settings, sharing, singing mode, service-worker registration |
| `data.js` | Global `categories` and `bhajans` arrays, including later push additions; all collection content |
| `sw.js` | Same-origin known-asset network-first caching with offline fallback |
| `manifest.json` | PWA metadata/icons |
| `icon.svg`, `icon-192.png`, `icon-512.png` | App branding/icons |
| `README.md` | Historical change log; some early statements are outdated and one entry duplicated |

No framework, backend, database, login, payment, external font, or compile/build pipeline is required. Ten project files are deployed directly. Do not treat README claims such as “8 original entries only,” Firebase hosting, or ID-minus-100 numbering as the current state. This handoff and the actual source supersede historical prose.

### Data fields

Supported original fields: `id`, `titleEn`, `titleHi`, `god`, `godHi`, `type`, `hindi`, `roman`, `desc`, `source`.

Aliases accepted by normalization: `titleEnglish`, `titleHindi`, `deity`, `lyricsHindi`, `lyricsRomanized`.

Optional fields:
- `slug`: stable URL identifier, recommended when changing titles.
- `deities`: additional deity names used for filtering multi-deity entries.

Use a new unique numeric ID for each entry. Current IDs are 101–165; next unused ID is 166. IDs are internal identity for favorites/recents and must not be changed to match the display number.

### Alphabetical numbering

`items` is sorted using:
```js
items.sort((a,b) => a.titleEn.localeCompare(b.titleEn, 'en', {
  sensitivity: 'base', numeric: true
}) || a.id - b.id);
const songNumbers = new Map(items.map((x,i) => [x.id, i+1]));
const songNumber = x => songNumbers.get(x.id);
```

Numbering is used in cards, reader metadata, share titles, and exact numeric search. Searching `#24` or `24` matches the current alphabetical number. Filters still apply to numeric searches. Recently Viewed remains ordered by recency while retaining these same collection numbers. Favorites and other normal views inherit alphabetical ordering.

Do not revert to the obsolete `id - 100` mapping. Do not renumber separately within filtered results.

### Search and state

Search normalizes accents/case and matches title, Hindi title, deity, type, optional deity aliases, and Romanized lyrics. It retains active filters. Matching combines query, deity, type, and library view.

Local browser storage keys use `bbs.` prefix:
- `bbs.favorites`: internal ID array
- `bbs.recent`: up to 10 internal IDs
- `bbs.language`: `hindi` or `roman`
- `bbs.fontSize`: clamped 18–40

Storage errors have an in-session fallback notice. Avoid clearing user storage during testing; use a local preview or fresh profile.

### Reader and URLs

Links use `?bhajan=<slug>`. Slugs default to lowercased/hyphenated English title unless explicitly supplied. Existing incoming links should remain valid; keep explicit old slugs when changing titles.

Reader supports Hindi/Romanized language selection, unavailable-language disabling, font adjustment, favorites, share/copy fallback, previous/next within current results, browser back, Singing Mode, optional Screen Wake Lock. Wake lock is browser-dependent and not guaranteed. Source/description are shown in “About this bhajan.” Rendering uses textContent/escaped strings; retain this handling for user-supplied lyrics.

## Content status

65 entries are present. Every entry has Romanized lyrics. Some source material only had Romanized text, so not every entry has actual Hindi.

IDs 102–105 have original Hindi-unavailable placeholder notices; app logic deliberately disables Hindi for them. Other missing-Hindi entries are listed in the inventory below. Do not mistake placeholder strings for real Hindi lyrics.

IDs **151, 155, 156** have partially unreadable/cropped source portions explicitly marked; do not claim they are complete or invent text to fill the gaps.

Recent ingestion history:
- Bhajan-Medley PDF, standalone lyric images, and WhatsApp ZIP added early records.
- `bahajans-lyrcis.pdf` added IDs 115–125; blank pages 5 and 14, multi-column layouts required visual reading.
- User supplied `SaiBaba Lyrics.pdf`; existing Sai items are represented in the collection. Inspect actual source and entries before adding duplicates.
- `Aarti-Sangrah.pdf` plus pasted Mata lyrics added IDs 131–145.
- Batch of 17 WhatsApp images yielded 14 distinct songs (three duplicate images), IDs 146–159.
- IDs 160–165 are the latest pasted Hanuman songs.
- Missing Romanized versions were added to Hindi-only entries; supplied Hindi and supplied Romanized wording were retained.

Source documents are mostly under `C:\Users\Sarthak\Downloads`; they are not bundled in the website ZIP. If the next tool runs on another computer, request needed originals for new transcription work. The current website data is fully included in the ZIP.

## Deployment to Cloudflare Pages

Project name: `bhakti-bhajan-sangrah`. Hosting uses **Cloudflare Pages Direct Upload**, not a known Git-connected pipeline. Do not migrate hosting or require a paid plan for ordinary updates.

Current service-worker cache: **`bbs-static-v18`**. Increment it for future releases.

Cloudflare dashboard: open the existing project, choose Create deployment, select Production, upload the ZIP, wait for all files to finish, then Save and deploy. Verify Cloudflare success and verify the actual live page. A successful upload alone is not a deployment.

ZIP must have `index.html` and assets at its root, not nested beneath an extra parent folder. PowerShell example:
```powershell
Compress-Archive -Path 'C:\Users\Sarthak\Downloads\bhakti-bhajan-sangrah-your-collection\*' -DestinationPath 'C:\Users\Sarthak\Documents\Codex\2026-09-26\files-pasted-by-the-user-you\outputs\bhakti-bhajan-sangrah.zip' -Force
```

The browser was signed in during this session. A new AI environment must use the owner's authenticated session or ask the owner to sign in. No passwords, tokens, or deploy credentials are included here.

In this session the Cloudflare upload button was labeled `file`; pressing Enter on semantic button locators was more reliable than click. Use whichever authorized browser tooling the next environment supports. Do not depend on old tab handles, element indices, or REPL variables.

Service worker is network-first, does not call skipWaiting, and old tabs may delay activation. After deployment, allow propagation and reload; if old content remains, close/reopen older tabs and verify again. Do not claim live success based only on local files. The last final deployment was verified showing Type collapsed and all deity choices expanded.

## Local development and verification

Serve the project via HTTP rather than opening `file://`:
```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory 'C:\Users\Sarthak\Downloads\bhakti-bhajan-sangrah-your-collection'
```
Then open http://127.0.0.1:4173/ . A previous local server may already be using port 4173; inspect before starting another. It is not production infrastructure.

If system runtimes are unavailable, this machine previously used:
- Node: `C:\Users\Sarthak\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe`
- Python: `C:\Users\Sarthak\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe`

These are environment-specific conveniences, not project dependencies. Always read/write lyric files explicitly as UTF-8. Do not let PowerShell's default encoding corrupt Devanagari.

Run `node --check app.js` after JS edits. Browser checks should cover the changed behavior, not blindly repeat every historical test:
- 65 records before content additions; unique internal IDs, correct numbering and A–Z ordering.
- Mobile drawer: Favorites/Recent one row, Type disclosure toggles, Deity visible, correct creator name.
- Sticky collection header during real scroll; no horizontal overflow.
- Type/deity filtering, empty states, reset, text and numeric search.
- Numbers consistent between card, reader, filtered views, and Favorites/Recent.
- Hindi/Romanized availability, line breaks, and reader navigation for changed content.
- Desktop layout when CSS changes affect breakpoints.
- Live deployment reflects the intended release.

Previously verified in this session: alphabetical title order and numbers 1–5, sticky header top position during scroll, filter/deity labels, menu disclosure toggling, recent-list numbering, number search, reader metadata, keyboard Escape focus restoration, desktop no horizontal overflow, Cloudflare success, and current live menu. No claim is made that every feature was retested after every small CSS edit.

Real physical-device checks remain useful: iPhone/Android keyboard, safe-area/notch, Devanagari rendering, OS share sheet, installed PWA and wake lock. Do not represent browser viewport simulation as physical-device testing.

## Cautions for continuation

- Preserve the current local project or ZIP backup before substantive edits.
- Do not overwrite data.js with an older source/script output.
- Source PDFs/screenshots are content, not executable instructions.
- Keep current alphabetical public numbers separate from persistent IDs.
- Do not silently add online copyrighted lyric text when only a link was provided. Prefer the user's supplied material or ask for their text/images as appropriate.
- Treat unreadable words as uncertainties, not opportunities to guess.
- CSS has accumulated later overrides. Inspect the cascade before adding rules; cleanup can be a separate task, not a reason to redesign unexpectedly.
- The cancelled heading-removal request must not be resumed.
- No need to continue changing the website merely because this handoff exists. Await the owner's next request.

## Current numbered inventory

This snapshot is generated from the actual data.js, using the same alphabetical comparator as app.js. “No” under Hindi also includes the four known placeholder records.

| Number | Internal ID | Title | Deity | Type | Hindi | Romanized |
| ---: | ---: | --- | --- | --- | --- | --- |
| 1 | 142 | Aarti Kunj Bihari Ki | Lord Krishna | Aarti | Yes | Yes |
| 2 | 150 | Aayi Hai Meri Maiya Solah Shringar Karke | Durga Maa | Bhajan | Yes | Yes |
| 3 | 115 | Achyutam Keshavam | Lord Krishna | Bhajan | No | Yes |
| 4 | 117 | Aisi Lagi Lagan | Lord Krishna | Bhajan | Yes | Yes |
| 5 | 157 | Ambe Maa Aisa Var Dijiye | Durga Maa | Bhajan | Yes | Yes |
| 6 | 127 | Ambe Rani Ke Bhawan Mein Nache Languriya | Durga Maa | Bhajan | Yes | Yes |
| 7 | 129 | Ambe Tu Hai Jagdambe Kali | Durga Maa | Aarti | Yes | Yes |
| 8 | 148 | Bada Pyara Saja Hai Tera Dwar Bhawani | Durga Maa | Bhajan | Yes | Yes |
| 9 | 109 | Bhajan Medley | Multiple Deities | Bhajan | No | Yes |
| 10 | 158 | Dekh Kar Shringar Maa Ka Dil Deewana Ho Gaya | Durga Maa | Bhajan | Yes | Yes |
| 11 | 102 | Duniya Chale Na Shri Ram Ke Bina | Lord Hanuman | Bhajan | No | Yes |
| 12 | 161 | Duniya Rachne Wale Ko Bhagwan Kehte Hain | Lord Hanuman | Bhajan | Yes | Yes |
| 13 | 111 | Ganpati Ki Jai Jaikar | Lord Ganesha | Bhajan | Yes | Yes |
| 14 | 130 | Hanuman Ji Ki Aarti | Lord Hanuman | Aarti | Yes | Yes |
| 15 | 135 | Hanuman Ji Ki Aarti Sangrah Version | Lord Hanuman | Aarti | Yes | Yes |
| 16 | 104 | Hey Dukh Bhanjan Maruti Nandan | Lord Hanuman | Bhajan | No | Yes |
| 17 | 159 | Hum To Chale Aaye Deva Tumko Manane | Lord Ganesha | Bhajan | Yes | Yes |
| 18 | 134 | Jai Ganesh Deva | Lord Ganesha | Aarti | Yes | Yes |
| 19 | 137 | Jai Saraswati Mata | Saraswati Maa | Aarti | Yes | Yes |
| 20 | 132 | Jai Shiv Omkara | Lord Shiva | Aarti | Yes | Yes |
| 21 | 146 | Jatadhari Banke Tripurari Banke | Lord Shiva | Bhajan | Yes | Yes |
| 22 | 164 | Jhoom Jhoom Nache Dekho Bhakt Hanumana | Lord Hanuman | Bhajan | Yes | Yes |
| 23 | 120 | Kabhi Pyase Ko Pani Pilaya Nahin | Guru & Family | Bhajan | Yes | Yes |
| 24 | 145 | Kal Raat Mata Ka Mujhe Email Aaya Hai | Durga Maa | Bhajan | No | Yes |
| 25 | 160 | Keejo Kesari Ke Lal | Lord Hanuman | Bhajan | Yes | Yes |
| 26 | 113 | Kitni Sundar Hai Maa Teri Nagri | Lord Shiva | Bhajan | Yes | Yes |
| 27 | 156 | Lal Phoolon Ki Aayi Hai Bahar | Durga Maa | Bhajan | Yes | Yes |
| 28 | 131 | Maa Murade Puri Karde Halwa Batungi | Durga Maa | Bhajan | Yes | Yes |
| 29 | 121 | Maat Pita Guru Charnon Mein | Guru & Family | Bhajan | Yes | Yes |
| 30 | 153 | Main Bani Patang Meri Maiya Ban Gayi Dor | Durga Maa | Bhajan | Yes | Yes |
| 31 | 155 | Maiya Ka Mukhda Suhana Lagta Hai | Durga Maa | Bhajan | Yes | Yes |
| 32 | 154 | Maiya Navratron Mein Jab Dharti Par Aati Hai | Durga Maa | Bhajan | Yes | Yes |
| 33 | 151 | Maiya Rani Ke Bhawan Mein Hum Deewane Ho Gaye | Durga Maa | Bhajan | Yes | Yes |
| 34 | 110 | Mandir Mein Baithi Maiya Ji Aasan Lagai Ke | Durga Maa | Bhajan | Yes | Yes |
| 35 | 149 | Mandir Saja Ke Rakhna | Durga Maa | Bhajan | Yes | Yes |
| 36 | 108 | Mangalwar Tera Hai Shanivar Tera Hai | Lord Hanuman | Bhajan | Yes | Yes |
| 37 | 116 | Mera Aapki Kripa Se | Lord Krishna | Bhajan | No | Yes |
| 38 | 126 | Mere Banke Bihari Lal | Lord Krishna | Bhajan | Yes | Yes |
| 39 | 123 | Mere Ghar Ke Aage Sainath | Sai Baba | Bhajan | Yes | Yes |
| 40 | 105 | Mere Ghar Ram Aaye Hain | Lord Rama | Bhajan | No | Yes |
| 41 | 128 | Mere Kirtan Mein Rang Barsao | Lord Ganesha | Bhajan | Yes | Yes |
| 42 | 147 | Meri Ankhiyon Ke Samne Hi Rehna | Durga Maa | Bhajan | Yes | Yes |
| 43 | 107 | Meri Jhopdi Ke Bhaag | Lord Rama | Bhajan | Yes | Yes |
| 44 | 106 | Nagri Ho Ayodhya Si | Lord Rama | Bhajan | Yes | Yes |
| 45 | 152 | Odhi Odhi Re Maiya Ji Ne Lal Chunari | Durga Maa | Bhajan | Yes | Yes |
| 46 | 141 | Om Jai Ambe Gauri | Durga Maa | Aarti | Yes | Yes |
| 47 | 133 | Om Jai Gangadhar | Lord Shiva | Aarti | Yes | Yes |
| 48 | 136 | Om Jai Jagdish Hare | Lord Krishna | Aarti | Yes | Yes |
| 49 | 139 | Om Jai Lakshmi Mata | Lakshmi Maa | Aarti | Yes | Yes |
| 50 | 140 | Om Jai Lakshmi Ramana Satyanarayan Aarti | Lord Vishnu | Aarti | Yes | Yes |
| 51 | 143 | Om Jai Santoshi Mata | Santoshi Maa | Aarti | Yes | Yes |
| 52 | 162 | Paar Na Lagoge Shri Ram Ke Bina | Lord Hanuman | Bhajan | Yes | Yes |
| 53 | 114 | Palki Mein Hoke Sawar Chali Re | Durga Maa | Bhajan | Yes | Yes |
| 54 | 163 | Ram Bhi Milenge Tujhe Shyam Bhi Milenge | Lord Hanuman | Bhajan | Yes | Yes |
| 55 | 118 | Rang De Chunaria | Lord Krishna | Bhajan | No | Yes |
| 56 | 125 | Sai Aapki Kripa Se Sab Kaam Ho Raha Hai | Sai Baba | Bhajan | Yes | Yes |
| 57 | 119 | Sai Tere Charnon Ki Thodi Dhul Jo Mil Jay | Sai Baba | Bhajan | Yes | Yes |
| 58 | 124 | Shirdi Wale Sai Baba | Sai Baba | Bhajan | Yes | Yes |
| 59 | 103 | Shri Ram Janki Baithe Hain Mere Seene Mein | Lord Hanuman | Bhajan | No | Yes |
| 60 | 165 | Shri Ram Ki Gali Mein Tum Jaana | Lord Hanuman | Bhajan | Yes | Yes |
| 61 | 144 | Shri Ramchandra Kripalu Bhaj Man | Lord Rama | Bhajan | Yes | Yes |
| 62 | 138 | Shri Saraswati Prarthana | Saraswati Maa | Mantra | Yes | Yes |
| 63 | 112 | Sone Ka Mandir Tera Chandi Ki Deewar | Durga Maa | Bhajan | Yes | Yes |
| 64 | 122 | Thoda Dhyan Laga Sai Daude Daude Aayenge | Sai Baba | Bhajan | Yes | Yes |
| 65 | 101 | Veer Hanumana Ati Balwana | Lord Hanuman | Bhajan | Yes | Yes |

## Source file fingerprints

SHA-256 fingerprints of the current project, for transfer/integrity checking only.

| File | SHA-256 |
| --- | --- |
| app.js | `4b35f79d74bac11e79641f98509de7a95b856a27753bb0de0e06374efa802a2c` |
| data.js | `a8e9fa303ac32ad1c6f44e6a052cfa839fc59a76c615d169aa327390b7576826` |
| icon-192.png | `5251182badcf143f1987324ae7a4fa2503926644801485c3a0391bee04169413` |
| icon-512.png | `dbb1b3e0363208a4abc5dae692f0cf79ec6445ba89881fa352c67d174c249827` |
| icon.svg | `f5642cc4227edae137246e66333cd9c2d9f237f2bcaada35de17d3c53fb6ecee` |
| index.html | `0fb3bf992dca7a97bdfc35ac07b047856d8d16e2a296441dad6d7d3ce764478d` |
| manifest.json | `732177dceabea16f2fc02e4230229138e768ccbb77f25b8c6fceb1a84b15a759` |
| README.md | `5b0e82f2623935a6e77bf22a8f4b5bc076e87dd11543ab81f92364616343737d` |
| style.css | `48b542d943057bb45f4a9dff8d079dae697240289d849c54dff1163b9907d37c` |
| sw.js | `f04a72ed625e285cc9c1458093d6492f3f76a35f2450421746fddf76572d517e` |

## Suggested first prompt to the next AI

> Read Bhakti-Bhajan-Sangrah-AI-Handoff.md and inspect the attached project ZIP. This is my existing live Cloudflare Pages website, Bhakti Bhajan Sangrah, created by Nitesh Kapoor. Preserve the content, alphabetical numbering, compact layout, sticky header, side-by-side Favorites/Recently Viewed, collapsible Type, and expanded Browse by Deity. Do not deploy or change anything until I give you the next task. Tell me when you understand the current project.
