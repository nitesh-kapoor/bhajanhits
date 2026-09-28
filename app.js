'use strict';
const $ = s => document.querySelector(s);
const all = s => [...document.querySelectorAll(s)];
const store = {
 get(key, fallback) { try { const v = JSON.parse(localStorage.getItem('bbs.' + key)); return v === null ? fallback : v; } catch { return fallback; } },
 set(key, value) { try { localStorage.setItem('bbs.' + key, JSON.stringify(value)); } catch { notify('Browser storage is unavailable. Changes last for this visit.'); } }
};
const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = x => x.slug || x.titleEn.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
// Keep the owner's original data intact; adapt field names for future additions.
const adapt = b => ({...b,titleEn:b.titleEnglish ?? b.titleEn,titleHi:b.titleHindi ?? b.titleHi,god:b.deity ?? b.god,hindi:b.lyricsHindi ?? b.hindi,roman:b.lyricsRomanized ?? b.roman});
const items = bhajans.map(adapt);
const songNumbers = new Map(), ids = new Set(), index = new Map();
const songNumber = x => songNumbers.get(x.id); // Permanent song numbers, shared by every view.
const normalized = s => String(s??'').normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase();
// Permanent numbers: the original 65 keep the A–Z numbers groups already use (id: number).
// Every later song keeps the number stored with it (`no`, assigned by the server for community songs);
// anything without one gets the next free number in id order. Numbers never shift when songs are added.
const fixedNumbers={142:1,150:2,115:3,117:4,157:5,127:6,129:7,148:8,109:9,158:10,102:11,161:12,111:13,130:14,135:15,104:16,159:17,134:18,137:19,132:20,146:21,164:22,120:23,145:24,160:25,113:26,156:27,131:28,121:29,153:30,155:31,154:32,151:33,110:34,149:35,108:36,116:37,126:38,123:39,105:40,128:41,147:42,107:43,106:44,152:45,141:46,133:47,136:48,139:49,140:50,143:51,162:52,114:53,163:54,118:55,125:56,119:57,124:58,103:59,165:60,144:61,138:62,112:63,122:64,101:65};
function rebuildIndex(){
 songNumbers.clear();ids.clear();index.clear();
 const taken=new Set(),pending=[];
 [...items].sort((a,b)=>a.id-b.id).forEach(x=>{const n=Number.isInteger(x.no)&&x.no>0?x.no:fixedNumbers[x.id];if(n&&!taken.has(n)){taken.add(n);songNumbers.set(x.id,n);}else pending.push(x);});
 let next=Math.max(0,...taken);pending.forEach(x=>songNumbers.set(x.id,++next));
 items.sort((a,b)=>songNumber(a)-songNumber(b));
 items.forEach(x=>{ids.add(x.id);index.set(x.id,normalized([x.titleEn,x.titleHi,x.god,x.godHi,...(x.deities||[]),x.type,x.roman].join(' ')));});
}
rebuildIndex();
// Community bhajans from /api/bhajans; skip anything malformed or clashing with an existing id or URL slug.
function mergeRemote(list){
 if(!Array.isArray(list))return 0;
 const slugs=new Set(items.map(slug));let added=0;
 list.forEach(b=>{if(!b||typeof b!=='object')return;const x=adapt(b);if(!Number.isFinite(x.id)||ids.has(x.id)||typeof x.titleEn!=='string'||!x.titleEn.trim()||slugs.has(slug(x)))return;items.push(x);ids.add(x.id);slugs.add(slug(x));added++;});
 if(added)rebuildIndex();
 return added;
}
// Saved ids are not filtered against the list, so favorites of community items survive until they load.
const savedList = key => { const v=store.get(key,[]); return Array.isArray(v)? [...new Set(v)].filter(Number.isFinite):[]; };
let favorites = new Set(savedList('favorites')), recent = savedList('recent').slice(0,10);
let language = store.get('language','hindi') === 'roman' ? 'roman':'hindi';
let size = Number(store.get('fontSize',24)); size=Number.isFinite(size)?Math.max(18,Math.min(40,size)):24;
let god='all', type='all', view='all', current=null, sequence=[], singing=false, wakeLock=null, wakePending=false, browseScroll=0, lastOpened=null, noticeTimer;
const unavailableHindi = new Set([102,103,104,105]); // Original PDF-unavailable notices, not lyrics.
const hasLyrics = (x,lang) => typeof x[lang]==='string' && x[lang].trim().length>0 && !(lang==='hindi' && unavailableHindi.has(x.id) && x[lang].includes('PDF में उपलब्ध नहीं'));
function notify(message){ $('#notice').textContent=message; $('#notice').hidden=false; clearTimeout(noticeTimer); noticeTimer=setTimeout(()=>$('#notice').hidden=true,4000); }
function matching(){
 const query=$('#search').value.trim();
 const numberQuery=/^#?\d+$/.test(query)?Number(query.replace('#','')):null;
 const terms=numberQuery===null?normalized(query).split(/\s+/).filter(Boolean):[];
 let list=items.filter(x=>(god==='all'||god===x.god||(x.deities||[]).includes(god))&&(type==='all'||type===x.type)&&(view!=='favorites'||favorites.has(x.id))&&(view!=='recent'||recent.includes(x.id))&&(numberQuery===null||songNumber(x)===numberQuery)&&terms.every(t=>index.get(x.id).includes(t)));
 if(view==='recent') list.sort((a,b)=>recent.indexOf(a.id)-recent.indexOf(b.id));
 return list;
}
function render(){
 const list=matching();
 $('#favoriteCount').textContent=[...favorites].filter(id=>ids.has(id)).length;
 $('#showResults').textContent='Show '+list.length+(list.length===1?' item':' items');
 const filters=[view==='favorites'?'Favorites':view==='recent'?'Recently viewed':'',god==='all'?'':god,type==='all'?'':type].filter(Boolean);
 $('#activeFilters').textContent=filters.join(' · ');$('#activeFilters').hidden=!filters.length;
 $('#collectionTitle').textContent=view==='favorites'?'My Favorites':view==='recent'?'Recently Viewed':god!=='all'?god:'The Collection';
 $('#resultCount').textContent=list.length+' '+(list.length===1?'item':'items')+(type!=='all'?' · '+type:'');
 $('#reset').hidden=god==='all'&&type==='all'&&!$('#search').value;
 all('[data-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===view));
 all('[data-god]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.god===god));
 all('[data-type]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.type===type));
 $('#cards').innerHTML=list.map(x=>`<li class="card" value="${songNumber(x)}" style="--deity:${deityColor(x.god)}"><button class="card-main" data-open="${x.id}"><span class="song-number" aria-label="Song ${songNumber(x)}">${songNumber(x)}</span><span class="song-info"><span class="meta"><span aria-hidden="true">${deityIcon(x.god)}</span> ${esc(x.god)} · ${esc(x.type)}${isNew(x)?' <span class="new-badge">New</span>':''}</span><h3>${esc(x.titleEn)}</h3><span class="hindi-title" lang="hi">${esc(x.titleHi)}</span></span></button><button class="heart" data-favorite="${x.id}" aria-pressed="${favorites.has(x.id)}" aria-label="${favorites.has(x.id)?'Remove from':'Add to'} favorites: ${esc(x.titleEn)}">${favorites.has(x.id)?'♥':'♡'}</button></li>`).join('') || '<li class="empty"><p>'+ (view==='favorites'?'Your favorite prayers will be here. Tap a heart to save one.':view==='recent'?'Items you open will appear here.':'No prayers match these filters. More devotional content can be added to the collection.')+'</p><button data-clear>Browse all items</button></li>';
 renderHome();
}
// Deity accents for cards; darker shades keep the number readable on its tinted badge.
const deityColors={'Lord Hanuman':'#c4541a','Lord Rama':'#5f7f24','Lord Krishna':'#2f5fa7','Radha Rani':'#b83f78','Lord Shiva':'#44657f','Durga Maa':'#b3302c','Lakshmi Maa':'#a0760c','Saraswati Maa':'#2f7f6c','Lord Ganesha':'#b5621a','Sai Baba':'#80623a','Surya Dev':'#a86f0a','Khatu Shyam Ji':'#1f6a86','Lord Vishnu':'#3a57a0','Santoshi Maa':'#a3437f','Guru & Family':'#6b5a8e'};
const deityColor=god=>deityColors[god]||'#853c29';
const deityIcon=god=>(categories.find(c=>c[1]===god)||['✧'])[0];
const isNew=x=>x.community&&Date.now()-Date.parse(x.submittedAt||0)<30*864e5; // community songs added in the last 30 days
// Home extras (Bhajan of the day, Newly added) only show on the plain, unfiltered home view.
function renderHome(){
 const home=view==='all'&&god==='all'&&type==='all'&&!$('#search').value.trim()&&items.length>0;
 $('#homeExtras').hidden=!home;if(!home)return;
 const now=new Date(),day=Math.floor(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())/864e5); // changes at local midnight
 const today=items[day%items.length];
 $('#todayCard').style.setProperty('--deity',deityColor(today.god));
 $('#todayCard').innerHTML=`<span class="eyebrow">Aaj ka Bhajan · Bhajan of the day</span><button class="today-main" data-open="${today.id}"><span class="song-number" aria-label="Song ${songNumber(today)}">${songNumber(today)}</span><span class="song-info"><span class="meta"><span aria-hidden="true">${deityIcon(today.god)}</span> ${esc(today.god)} · ${esc(today.type)}</span><h3>${esc(today.titleEn)}</h3><span class="hindi-title" lang="hi">${esc(today.titleHi)}</span></span><span class="today-go" aria-hidden="true">→</span></button>`;
 const fresh=items.filter(x=>x.community).sort((a,b)=>b.id-a.id).slice(0,8);
 $('#newlyAdded').hidden=!fresh.length;
 $('#newlyList').innerHTML=fresh.map(x=>`<li style="--deity:${deityColor(x.god)}"><button data-open="${x.id}"><span class="song-number">${songNumber(x)}</span><span class="song-info"><strong>${esc(x.titleEn)}</strong><small>${x.contributorName?'by '+esc(x.contributorName)+(x.contributorLocation?', '+esc(x.contributorLocation):''):'Community contribution'}</small></span></button></li>`).join('');
}
function renderCategories(){
 const used=[['','All Deities',''],...categories.filter(c=>items.some(x=>x.god===c[1]||(x.deities||[]).includes(c[1])))];
 $('#categoryGrid').innerHTML=used.map(c=>`<button class="category" data-god="${esc(c[1]==='All Deities'?'all':c[1])}"><span class="icon" aria-hidden="true">${c[0]||'✧'}</span><span>${esc(c[1])}</span></button>`).join('');
 // Home quick-pick row: same data-god buttons, so the shared click handler and pressed state apply.
 $('#deityChips').innerHTML=used.map(c=>`<button class="deity-chip" data-god="${esc(c[1]==='All Deities'?'all':c[1])}" style="--deity:${c[1]==='All Deities'?'#853c29':deityColor(c[1])}"><span aria-hidden="true">${c[0]||'✧'}</span>${esc(c[1]==='All Deities'?'All':c[1].replace(/^Lord /,''))}</button>`).join('');
}
renderCategories();
$('.filters').innerHTML=['all','Bhajan','Aarti','Chalisa','Mantra','Sundarkand'].map(t=>`<button data-type="${t}">${t==='all'?'All Types':t}</button>`).join('');
function clearFilters(){god=type='all';view='all';$('#search').value='';render();}
$('#reset').onclick=clearFilters;
$('#search').oninput=render;
document.addEventListener('click',e=>{
 const b=e.target.closest('button'); if(!b)return;
 if(b.dataset.god){god=b.dataset.god;render();}
 if(b.dataset.type){type=b.dataset.type;render();}
 if(b.dataset.view){view=b.dataset.view;god=type='all';$('#search').value='';render();}
 if(b.hasAttribute('data-clear'))clearFilters();
 if(b.dataset.favorite)toggleFavorite(Number(b.dataset.favorite));
 if(b.dataset.open)openItem(Number(b.dataset.open));
 if(b.dataset.lang && current && hasLyrics(current,b.dataset.lang)){language=b.dataset.lang;store.set('language',language);renderLyrics();}
});
function toggleFavorite(id){
 favorites.has(id)?favorites.delete(id):favorites.add(id);store.set('favorites',[...favorites]);render();if(current)renderFavorite();
}
function renderFavorite(){const saved=favorites.has(current.id);$('#readerFavorite').textContent=saved?'♥ Favorited':'♡ Favorite';$('#readerFavorite').setAttribute('aria-pressed',saved);}
function openItem(id,replace=false){
 const x=items.find(x=>x.id===id);if(!x)return;
 if(!current){browseScroll=window.scrollY;lastOpened=id;sequence=matching().map(x=>x.id);}
 const url=new URL(location.href);url.hash='';url.searchParams.set('bhajan',slug(x));
 history[replace?'replaceState':'pushState'](replace ? history.state : {bbsReader:true},'',url);showItem(x);
}
function showItem(x){
 current=x;recent=[x.id,...recent.filter(id=>id!==x.id)].slice(0,10);store.set('recent',recent);
 $('#browse').hidden=true;$('#reader').hidden=false;document.body.classList.add('reading');
 $('#readerMeta').textContent='Song #'+songNumber(x)+' · '+x.god+' · '+x.type;$('#readerTitle').textContent=x.titleEn;$('#readerHindi').textContent=x.titleHi||'';
 $('#description').textContent=x.desc||'';$('#source').textContent=x.source||'';
 const yt=youtubeUrl(x.youtubeUrl);$('#youtubeLink').hidden=!yt;if(yt)$('#youtubeLink').href=yt;else $('#youtubeLink').removeAttribute('href');
 document.title=x.titleEn+' | Bhakti Bhajan Sangrah';renderLyrics();renderFavorite();
 if(!sequence.includes(x.id))sequence=items.map(x=>x.id);
 const position=sequence.indexOf(x.id);$('#previous').disabled=position<=0;$('#next').disabled=position>=sequence.length-1;
 window.scrollTo(0,0);$('#readerTitle').focus({preventScroll:true});
}
// Only https YouTube links are shown (the server also filters these; community data is re-checked here).
function youtubeUrl(value){try{const u=new URL(String(value||''));const host=u.hostname.replace(/^(www\.|m\.|music\.)/,'');return u.protocol==='https:'&&(host==='youtube.com'||host==='youtu.be')?u.href:'';}catch{return '';}}
function renderLyrics(){
 const lang=hasLyrics(current,language)?language:hasLyrics(current,'hindi')?'hindi':'roman';
 all('[data-lang]').forEach(b=>{b.disabled=!hasLyrics(current,b.dataset.lang);b.setAttribute('aria-pressed',b.dataset.lang===lang);b.title=b.disabled?'This version is not available in the collection':'';});
 $('#lyricsText').textContent=hasLyrics(current,lang)?current[lang]:'Lyrics are not yet available for this item.';
 $('#lyricsText').lang=lang==='hindi'?'hi':'en';
 $('#languageNote').textContent=(lang==='roman'?'English = Romanized Hindi, not a translation.':'Hindi · Devanagari lyrics.')+(!hasLyrics(current,'hindi')?' Hindi lyrics are not available for this bhajan.':!hasLyrics(current,'roman')?' Romanized lyrics are not available for this bhajan.':'');
 applySize();
}
function applySize(){document.documentElement.style.setProperty('--lyrics-size',size+'px');$('#smaller').disabled=size<=18;$('#larger').disabled=size>=40;}
$('#smaller').onclick=()=>{size=Math.max(18,size-2);store.set('fontSize',size);applySize();};
$('#larger').onclick=()=>{size=Math.min(40,size+2);store.set('fontSize',size);applySize();};
$('#readerFavorite').onclick=()=>toggleFavorite(current.id);
function closeReader(){
 setSinging(false);current=null;$('#browse').hidden=false;$('#reader').hidden=true;document.body.classList.remove('reading');document.title='Bhakti Bhajan Sangrah';render();
 requestAnimationFrame(()=>{window.scrollTo(0,browseScroll);const b=document.querySelector('[data-open="'+lastOpened+'"]');if(b)b.focus({preventScroll:true});});
}
$('#back').onclick=()=>{if(history.state?.bbsReader)history.back();else{const url=new URL(location.href);url.searchParams.delete('bhajan');history.replaceState(null,'',url);closeReader();}};
let remoteLoaded=false;
function route(){const key=new URL(location.href).searchParams.get('bhajan');const x=items.find(x=>slug(x)===key||String(x.id)===key);if(x)showItem(x);else if(key&&!remoteLoaded&&!current)return;else{closeReader();if(key)notify('That bhajan was not found. Browse the collection below.');}} // Unknown links wait for community bhajans before reporting "not found".
window.addEventListener('popstate',route);
$('#previous').onclick=()=>{const p=sequence.indexOf(current.id);if(p>0)openItem(sequence[p-1],true);};
$('#next').onclick=()=>{const p=sequence.indexOf(current.id);if(p<sequence.length-1)openItem(sequence[p+1],true);};
async function releaseWake(){const lock=wakeLock;wakeLock=null;if(lock)try{await lock.release();}catch{}}
async function requestWake(){
 if(!singing||document.visibilityState!=='visible'||wakeLock||wakePending)return;
 if(!('wakeLock' in navigator)){$('#wakeStatus').textContent='Singing Mode is on. Your screen may still sleep.';return;}
 wakePending=true;
 try{const lock=await navigator.wakeLock.request('screen');if(!singing||document.visibilityState!=='visible'){await lock.release();return;}wakeLock=lock;$('#wakeStatus').textContent='Screen stays awake while this page is visible.';lock.addEventListener('release',()=>{if(wakeLock===lock){wakeLock=null;if(singing)$('#wakeStatus').textContent='Screen lock released. Your screen may sleep.';}});}
 catch{$('#wakeStatus').textContent='Singing Mode is on. Your screen may still sleep.';}finally{wakePending=false;}
}
function setSinging(value){singing=value;document.body.classList.toggle('singing',value);$('#singing').textContent=value?'Exit Singing Mode':'Singing Mode';$('#singing').setAttribute('aria-pressed',value);$('#wakeStatus').hidden=!value;if(value)requestWake();else releaseWake();}
$('#singing').onclick=()=>setSinging(!singing);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')requestWake();else releaseWake();});
window.addEventListener('pagehide',releaseWake);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#shareDialog').open&&!$('#libraryDrawer').open){if(singing)setSinging(false);else if(current)$('#back').click();}});
$('#share').onclick=async()=>{
 const data={title:'Song #'+songNumber(current)+' · '+current.titleEn+' | Bhakti Bhajan Sangrah',url:location.href};
 if(navigator.share){try{await navigator.share(data);return;}catch(e){if(e.name==='AbortError')return;}}
 try{await navigator.clipboard.writeText(data.url);notify('Link copied.');}catch{$('#shareLink').value=data.url;$('#shareDialog').showModal();$('#shareLink').select();}
};
$('#closeShare').onclick=()=>$('#shareDialog').close();
const drawer=$('#libraryDrawer');
$('#openMenu').onclick=()=>{drawer.showModal();$('#openMenu').setAttribute('aria-expanded','true');};
function closeMenu(){drawer.close();}
$('#closeMenu').onclick=closeMenu;$('#showResults').onclick=closeMenu;
$('#drawerReset').onclick=clearFilters;
drawer.addEventListener('close',()=>{$('#openMenu').setAttribute('aria-expanded','false');$('#openMenu').focus();});
// Bhajan Submission Dialog Controller
const submitDialog = $('#submitDialog');
let submitMode = 'photo';
let uploadedImageData = null;
let uploadedImageMime = 'image/jpeg';
let latestSubmittedItem = null;

function resetSubmitForm() {
  submitMode = 'photo';
  uploadedImageData = null;
  $('#tabPhoto')?.classList.add('active');
  $('#tabPhoto')?.setAttribute('aria-selected', 'true');
  $('#tabText')?.classList.remove('active');
  $('#tabText')?.setAttribute('aria-selected', 'false');
  $('#photoPanel').hidden = false;
  $('#textPanel').hidden = true;
  $('#photoFile').value = '';
  $('#photoPreview').src = '';
  $('#previewWrap').hidden = true;
  $('#fileDropzone').hidden = false;
  $('#submitLyrics').value = '';
  $('#youtubeUrl').value = '';
  $('#contributorName').value = '';
  $('#contributorLocation').value = '';
  $('#submitStatus').hidden = true;
  $('#submitNotice').hidden = true;
  $('#submitForm').hidden = false;
  $('#submitSuccess').hidden = true;
  $('#submitActionBtn').disabled = false;
}

function openSubmitModal() {
  if (drawer.open) closeMenu();
  resetSubmitForm();
  submitDialog.showModal();
}

$('#openSubmit')?.addEventListener('click', openSubmitModal);
$('#quickSubmit')?.addEventListener('click', openSubmitModal);
$('#closeSubmit')?.addEventListener('click', () => submitDialog.close());

submitDialog?.addEventListener('click', e => {
  if (e.target === submitDialog) {
    const r = submitDialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      submitDialog.close();
    }
  }
});

$('#tabPhoto')?.addEventListener('click', () => {
  submitMode = 'photo';
  $('#tabPhoto').classList.add('active');
  $('#tabPhoto').setAttribute('aria-selected', 'true');
  $('#tabText').classList.remove('active');
  $('#tabText').setAttribute('aria-selected', 'false');
  $('#photoPanel').hidden = false;
  $('#textPanel').hidden = true;
  $('#submitNotice').hidden = true;
});

$('#tabText')?.addEventListener('click', () => {
  submitMode = 'text';
  $('#tabText').classList.add('active');
  $('#tabText').setAttribute('aria-selected', 'true');
  $('#tabPhoto').classList.remove('active');
  $('#tabPhoto').setAttribute('aria-selected', 'false');
  $('#photoPanel').hidden = true;
  $('#textPanel').hidden = false;
  $('#submitNotice').hidden = true;
});

$('#photoFile')?.addEventListener('change', e => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showSubmitNotice('Please select an image file (JPG, PNG, WebP).');
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showSubmitNotice('Image size is too large (max 10MB). Please choose a smaller photo.');
    return;
  }
  uploadedImageMime = file.type;
  const reader = new FileReader();
  reader.onload = ev => {
    uploadedImageData = ev.target.result;
    $('#photoPreview').src = uploadedImageData;
    $('#previewWrap').hidden = false;
    $('#fileDropzone').hidden = true;
    $('#submitNotice').hidden = true;
  };
  reader.readAsDataURL(file);
});

$('#removePhoto')?.addEventListener('click', () => {
  uploadedImageData = null;
  $('#photoFile').value = '';
  $('#photoPreview').src = '';
  $('#previewWrap').hidden = true;
  $('#fileDropzone').hidden = false;
});

function showSubmitNotice(msg) {
  const n = $('#submitNotice');
  n.textContent = msg;
  n.hidden = false;
}

$('#submitActionBtn')?.addEventListener('click', async () => {
  $('#submitNotice').hidden = true;
  const lyricsText = $('#submitLyrics').value.trim();

  if (submitMode === 'photo' && !uploadedImageData) {
    showSubmitNotice('Please tap above to choose a photo or screenshot of the lyrics.');
    return;
  }
  if (submitMode === 'text' && lyricsText.length < 15) {
    showSubmitNotice('Please enter at least a few lines of the bhajan lyrics.');
    return;
  }

  const payload = {
    mode: submitMode,
    imageData: submitMode === 'photo' ? uploadedImageData : null,
    imageMime: uploadedImageMime,
    lyricsText: submitMode === 'text' ? lyricsText : null,
    youtubeUrl: $('#youtubeUrl').value.trim(),
    contributorName: $('#contributorName').value.trim(),
    contributorLocation: $('#contributorLocation').value.trim()
  };

  const btn = $('#submitActionBtn');
  btn.disabled = true;
  const statusBox = $('#submitStatus');
  const statusText = $('#submitStatusText');
  statusBox.hidden = false;

  let step = 0;
  const steps = [
    '🌸 Reading and verifying lyrics with AI...',
    '✨ Formatting Hindi and English pronunciation...',
    '📖 Adding to Bhakti Bhajan Sangrah...'
  ];
  statusText.textContent = steps[0];
  const stepTimer = setInterval(() => {
    step = (step + 1) % steps.length;
    statusText.textContent = steps[step];
  }, 3000);

  try {
    const res = await fetch('/api/submit-bhajan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    clearInterval(stepTimer);
    statusBox.hidden = true;
    btn.disabled = false;

    const data = await res.json().catch(() => ({}));

    if (data.status === 'rejected') {
      showSubmitNotice('⚠️ ' + (data.reason || 'This upload could not be verified as a devotional hymn.'));
      return;
    }

    if (data.status === 'success' || data.status === 'preview_only') {
      latestSubmittedItem = data.item;
      if (data.status === 'success' && mergeRemote([data.item])) { renderCategories(); render(); }
      $('#submitForm').hidden = true;
      $('#submitSuccess').hidden = false;
      const cardWrap = $('#successCardWrap');
      cardWrap.innerHTML = `
        <div class="card" style="border: 1px solid var(--accent);">
          <div class="card-main">
            <span class="meta">${esc(data.item.god)} · ${esc(data.item.type)}</span>
            <h3>${esc(data.item.titleEn)}</h3>
            <span class="hindi-title" lang="hi">${esc(data.item.titleHi)}</span>
          </div>
        </div>
        ${data.message ? `<p class="muted" style="margin-top:8px;font-size:12px;">ℹ️ ${esc(data.message)}</p>` : ''}
      `;
      return;
    }

    showSubmitNotice('⚠️ ' + (data.error || 'Submission could not be completed. Please try again later.'));
  } catch (err) {
    clearInterval(stepTimer);
    statusBox.hidden = true;
    btn.disabled = false;
    showSubmitNotice('⚠️ Network error connecting to the submission service. Please check your connection.');
  }
});

$('#successAnotherBtn')?.addEventListener('click', resetSubmitForm);
$('#successOpenBtn')?.addEventListener('click', () => {
  submitDialog.close();
  if (latestSubmittedItem) {
    const existing = items.find(x => x.id === latestSubmittedItem.id) || items.find(x => x.titleEn.toLowerCase() === latestSubmittedItem.titleEn?.toLowerCase());
    if (existing) {
      openItem(existing.id);
    } else {
      notify('This bhajan was checked but not saved, so it cannot be opened yet.');
    }
  }
});

render();route();
fetch('/api/bhajans').then(r=>r.ok?r.json():[]).catch(()=>[]).then(list=>{
 remoteLoaded=true;
 if(mergeRemote(list)){renderCategories();render();if(current)$('#readerMeta').textContent='Song #'+songNumber(current)+' · '+current.god+' · '+current.type;}
 if(!current&&new URL(location.href).searchParams.has('bhajan'))route();
});
if('serviceWorker' in navigator && /https?:/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});

