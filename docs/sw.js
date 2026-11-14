const VERSION="26a2449ecc93c017", CORE=["assets/boot-D_9Z4hK9.js","assets/build-6aqt7kez.js","assets/dist-BD91r3g6.js","assets/index-BZGkMHY8.js","assets/key-art-DZZ-i-36.png","assets/meshy-official-PSoWmfBZ.svg","assets/preload-helper-DclECHGd.js","assets/rolldown-runtime-XKyaHtl9.js","assets/runtime-BOyiYaqc.css","assets/runtime-BxN7supY.js","assets/web-app-DwfpWFT0.js","assets/web-aVJ0cWYX.js","assets.json","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","tuning.json"], FILES=["assets/boot-D_9Z4hK9.js","assets/build-6aqt7kez.js","assets/dist-BD91r3g6.js","assets/index-BZGkMHY8.js","assets/key-art-DZZ-i-36.png","assets/meshy-official-PSoWmfBZ.svg","assets/preload-helper-DclECHGd.js","assets/rolldown-runtime-XKyaHtl9.js","assets/runtime-BOyiYaqc.css","assets/runtime-BxN7supY.js","assets/web-app-DwfpWFT0.js","assets/web-aVJ0cWYX.js","assets.json","audio/ambience-rain-city.wav","audio/cryo-loop.wav","audio/dash.mp3","audio/elite-roar.mp3","audio/explosion.mp3","audio/flame-loop.wav","audio/footstep-wet.mp3","audio/freeze.mp3","audio/frenzy.mp3","audio/gib.mp3","audio/gun-arc.mp3","audio/gun-plasma.mp3","audio/gun-rail.mp3","audio/gun-shock.mp3","audio/helicopter-loop.wav","audio/hit-flesh.mp3","audio/kill-tick.mp3","audio/music-combat.mp3","audio/player-hurt.mp3","audio/reload-mag-in.mp3","audio/reload-mag-out.mp3","audio/reload-rack.mp3","audio/shatter.mp3","audio/shell-impact.mp3","audio/thunder-strike.mp3","audio/turret-deploy.mp3","audio/turret-gatling.mp3","audio/turret-howitzer.mp3","audio/upgrade-pick.mp3","audio/weapon-swap.mp3","audio/zombie-groan-1.mp3","audio/zombie-groan-2.mp3","audio/zombie-snarl.mp3","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","models/apc-proxy.glb","models/apc.glb","models/barricade.glb","models/bunker-proxy.glb","models/bunker.glb","models/elite-boomer-lod.glb","models/elite-butcher-lod.glb","models/elite-reaper-lod.glb","models/elite-tyrant-lod.glb","models/fp-arm.glb","models/gun-arc.glb","models/gun-cryo.glb","models/gun-plasma.glb","models/gun-rail.glb","models/gun-shock.glb","models/hachiko-statue.glb","models/hedgehog.glb","models/helicopter.glb","models/neon-block-proxy.glb","models/neon-block.glb","models/police-car-proxy.glb","models/police-car.glb","models/rail-overpass-proxy.glb","models/rail-overpass.glb","models/sandbag-wall.glb","models/station-screens-proxy.glb","models/station-screens.glb","models/subway-entrance-proxy.glb","models/subway-entrance.glb","models/tower-cylinder-proxy.glb","models/tower-cylinder.glb","models/turret-flamer.glb","models/turret-gatling.glb","models/turret-gravity.glb","models/turret-howitzer.glb","models/turret-laser.glb","models/turret-missile.glb","models/turret-tesla.glb","models/wrecked-bus-proxy.glb","models/wrecked-bus.glb","models/wrecked-car.glb","models/zombie-brute-lod.glb","models/zombie-cyber-punk-lod.glb","models/zombie-riot-police-lod.glb","models/zombie-salaryman-lod.glb","tuning.json"];
// VERSION, CORE and FILES are injected by build-mobile.mjs. Cache only this release's allowlisted files.
const scope = self.registration.scope;
const PREFIX = 'neo-tokyo-web-' + new URL(scope).pathname + '-', CACHE = PREFIX + VERSION;
const allowed = new Set(FILES.map((name) => new URL(name, scope).href));
const shell = new URL('index.html', scope).href;
let downloading = false, cancelled = false;

async function putFile(cache, name) {
  const url = new URL(name, scope).href;
  if (await cache.match(url)) return;
  const response = await fetch(new Request(url, { cache: 'reload', credentials: 'same-origin' }));
  if (!response.ok || response.status !== 200) throw new Error(`资源下载失败：${name}`);
  await cache.put(url, response);
}
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Small shell only; don't download another full model set while the game is loading.
    for (const name of CORE) await putFile(cache, name);
  })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const versions = (await caches.keys()).filter((name) => name.startsWith(PREFIX) && name !== CACHE);
    // Keep one previous release for an already open tab, bound disk usage to two releases.
    for (const name of versions.slice(0, -1)) await caches.delete(name);
    await self.clients.claim();
  })());
});

async function rangeResponse(response, range) {
  const data = await response.arrayBuffer(), length = data.byteLength;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  let start, end;
  if (match && (match[1] || match[2])) {
    if (!match[1]) { start = Math.max(0, length - Number(match[2])); end = length - 1; }
    else { start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), length - 1) : length - 1; }
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start >= length || end < start) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${length}` } });
  const headers = new Headers(response.headers);
  headers.delete('Content-Encoding'); headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${length}`); headers.set('Content-Length', String(end - start + 1));
  return new Response(data.slice(start, end + 1), { status: 206, headers });
}

async function serve(request) {
  const url = new URL(request.url), canonical = new URL(url.pathname, url.origin).href;
  const cache = await caches.open(CACHE);
  if (request.mode === 'navigate' && url.origin === new URL(scope).origin && url.href.startsWith(scope)) {
    return (await cache.match(shell)) || fetch(request);
  }
  if (!allowed.has(canonical)) return fetch(request);
  const cached = await cache.match(canonical);
  if (cached) return request.headers.has('Range') ? rangeResponse(cached, request.headers.get('Range')) : cached;
  if (request.headers.has('Range')) return fetch(request); // Never store partial media as a complete file.
  const response = await fetch(request);
  if (response.ok && response.status === 200) {
    try { await cache.put(canonical, response.clone()); } catch {} // Quota pressure must not stop online play.
  }
  return response;
}
self.addEventListener('fetch', (event) => { if (event.request.method === 'GET') event.respondWith(serve(event.request)); });

async function status(source, extra = {}) {
  const cache = await caches.open(CACHE);
  let complete = 0;
  for (const name of FILES) if (await cache.match(new URL(name, scope).href)) complete++;
  source?.postMessage({ type: 'OFFLINE_STATUS', complete, total: FILES.length, ready: complete === FILES.length, downloading, ...extra });
}
self.addEventListener('message', (event) => {
  const type = event.data?.type;
  if (type === 'SKIP_WAITING') { void self.skipWaiting(); return; }
  if (type === 'CANCEL_OFFLINE') { cancelled = true; return; }
  if (type === 'CACHE_STATUS') { event.waitUntil(status(event.source)); return; }
  if (type !== 'CACHE_OFFLINE' || downloading) return;
  downloading = true; cancelled = false;
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      for (let i = 0; i < FILES.length; i++) {
        if (cancelled) break;
        await putFile(cache, FILES[i]);
        event.source?.postMessage({ type: 'OFFLINE_STATUS', complete: i + 1, total: FILES.length, ready: false, downloading: true });
      }
      downloading = false;
      await status(event.source, { cancelled });
    } catch (error) {
      downloading = false;
      await status(event.source, { error: error.name === 'QuotaExceededError' ? '手机缓存空间不足，仍可联网游玩。' : '下载未完成，请联网后重试。' });
    }
  })());
});
