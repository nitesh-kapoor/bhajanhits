const CACHE='bbs-static-v23';
const ASSETS=['./','index.html','style.css','app.js','data.js','manifest.json','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('bbs-static-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
 const known=ASSETS.some(asset=>new URL(asset,self.registration.scope).pathname===url.pathname);
 if(!known&&event.request.mode!=='navigate')return;
 event.respondWith(fetch(event.request).then(response=>{
 if(response.ok&&known){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}
 return response;
 }).catch(async()=>{const cached=await caches.match(event.request,{ignoreSearch:true});return cached||(event.request.mode==='navigate'?await caches.match(new URL('index.html',self.registration.scope).href):Response.error());}));
});


