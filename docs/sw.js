const VERSION="07d83f1937ef20b9", CORE=["assets/boot-D_9Z4hK9.js","assets/build-6aqt7kez.js","assets/dist-BD91r3g6.js","assets/index-CNOo-Qxw.js","assets/key-art-DZZ-i-36.png","assets/meshy-official-PSoWmfBZ.svg","assets/preload-helper-DclECHGd.js","assets/rolldown-runtime-XKyaHtl9.js","assets/runtime-BOyiYaqc.css","assets/runtime-CdkAqwq7.js","assets/web-app-CRA6jVZB.js","assets/web-aVJ0cWYX.js","assets.json","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","tuning.json"], FILES=["assets/boot-D_9Z4hK9.js","assets/build-6aqt7kez.js","assets/dist-BD91r3g6.js","assets/index-CNOo-Qxw.js","assets/key-art-DZZ-i-36.png","assets/meshy-official-PSoWmfBZ.svg","assets/preload-helper-DclECHGd.js","assets/rolldown-runtime-XKyaHtl9.js","assets/runtime-BOyiYaqc.css","assets/runtime-CdkAqwq7.js","assets/web-app-CRA6jVZB.js","assets/web-aVJ0cWYX.js","assets.json","audio/ambience-rain-city.wav","audio/cryo-loop.wav","audio/dash.mp3","audio/elite-roar.mp3","audio/explosion.mp3","audio/flame-loop.wav","audio/footstep-wet.mp3","audio/freeze.mp3","audio/frenzy.mp3","audio/gib.mp3","audio/gun-arc.mp3","audio/gun-plasma.mp3","audio/gun-rail.mp3","audio/gun-shock.mp3","audio/helicopter-loop.wav","audio/hit-flesh.mp3","audio/kill-tick.mp3","audio/music-combat.mp3","audio/player-hurt.mp3","audio/reload-mag-in.mp3","audio/reload-mag-out.mp3","audio/reload-rack.mp3","audio/shatter.mp3","audio/shell-impact.mp3","audio/thunder-strike.mp3","audio/turret-deploy.mp3","audio/turret-gatling.mp3","audio/turret-howitzer.mp3","audio/upgrade-pick.mp3","audio/weapon-swap.mp3","audio/zombie-groan-1.mp3","audio/zombie-groan-2.mp3","audio/zombie-snarl.mp3","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","models/apc-proxy.glb","models/apc.glb","models/barricade.glb","models/bunker-proxy.glb","models/bunker.glb","models/elite-boomer-lod.glb","models/elite-butcher-lod.glb","models/elite-reaper-lod.glb","models/elite-tyrant-lod.glb","models/fp-arm.glb","models/gun-arc.glb","models/gun-cryo.glb","models/gun-plasma.glb","models/gun-rail.glb","models/gun-shock.glb","models/hachiko-statue.glb","models/hedgehog.glb","models/helicopter.glb","models/neon-block-proxy.glb","models/neon-block.glb","models/police-car-proxy.glb","models/police-car.glb","models/rail-overpass-proxy.glb","models/rail-overpass.glb","models/sandbag-wall.glb","models/station-screens-proxy.glb","models/station-screens.glb","models/subway-entrance-proxy.glb","models/subway-entrance.glb","models/tower-cylinder-proxy.glb","models/tower-cylinder.glb","models/turret-flamer.glb","models/turret-gatling.glb","models/turret-gravity.glb","models/turret-howitzer.glb","models/turret-laser.glb","models/turret-missile.glb","models/turret-tesla.glb","models/wrecked-bus-proxy.glb","models/wrecked-bus.glb","models/wrecked-car.glb","models/zombie-brute-lod.glb","models/zombie-cyber-punk-lod.glb","models/zombie-riot-police-lod.glb","models/zombie-salaryman-lod.glb","tuning.json"];
const HASHES={"assets/boot-D_9Z4hK9.js":"670a743850e8eb58","assets/build-6aqt7kez.js":"796fee296fe00943","assets/dist-BD91r3g6.js":"06cbbd1030ffe2da","assets/index-CNOo-Qxw.js":"0338bdc18d7dc3d9","assets/key-art-DZZ-i-36.png":"53c4f88d5e7f5a92","assets/meshy-official-PSoWmfBZ.svg":"edfb90d60218a5d9","assets/preload-helper-DclECHGd.js":"8674df70cbffd575","assets/rolldown-runtime-XKyaHtl9.js":"548d1dbf321e7d2a","assets/runtime-BOyiYaqc.css":"63a35a2f55078e72","assets/runtime-CdkAqwq7.js":"d83bb2cb4625d614","assets/web-app-CRA6jVZB.js":"a06ccd47408be036","assets/web-aVJ0cWYX.js":"54bfb4aab6a88db3","assets.json":"5a080427c82ce53b","audio/ambience-rain-city.wav":"62149a3f4f993026","audio/cryo-loop.wav":"5624f98fcb90a4cb","audio/dash.mp3":"80a3fa1d47be22a8","audio/elite-roar.mp3":"d065904eb3caa652","audio/explosion.mp3":"b8bc08dcf0795c3b","audio/flame-loop.wav":"b09c4d0fb8d68670","audio/footstep-wet.mp3":"d96da89dbe05221e","audio/freeze.mp3":"58d98d4dacc96e1b","audio/frenzy.mp3":"dd1a784ead46975d","audio/gib.mp3":"06fbea5a3d8a9797","audio/gun-arc.mp3":"e050da05c56cc017","audio/gun-plasma.mp3":"0dd18879a42700b6","audio/gun-rail.mp3":"15b00d9d59cdffa9","audio/gun-shock.mp3":"33a19cd6d5e62182","audio/helicopter-loop.wav":"100bca051ddeb9f1","audio/hit-flesh.mp3":"eaa462417c3dc54f","audio/kill-tick.mp3":"12d8ba3460a89adb","audio/music-combat.mp3":"94f074060ab6554d","audio/player-hurt.mp3":"2fcc27d88c6e3850","audio/reload-mag-in.mp3":"c1301d3c990cd6f3","audio/reload-mag-out.mp3":"1e517139019a8a18","audio/reload-rack.mp3":"45d734356caff084","audio/shatter.mp3":"f5e5d63b048365f2","audio/shell-impact.mp3":"2f853817049f38ea","audio/thunder-strike.mp3":"bedb7163541c910d","audio/turret-deploy.mp3":"8173b19fb85f1efc","audio/turret-gatling.mp3":"28c38d373b20acf4","audio/turret-howitzer.mp3":"2468c5756c0705a3","audio/upgrade-pick.mp3":"0ea3514979f9ee2f","audio/weapon-swap.mp3":"ac795f59f2785dfd","audio/zombie-groan-1.mp3":"3f069caffb031c5a","audio/zombie-groan-2.mp3":"4fda6d61ba3aebf7","audio/zombie-snarl.mp3":"49cafa8bc7916bbf","icon-180.png":"31276a621628f050","icon-192.png":"33c6a0607365f6a1","icon-512.png":"f5040066582c7b8d","index.html":"9a4cd319222db0dd","manifest.webmanifest":"ba378222cb742345","models/apc-proxy.glb":"9808a68996a10cc8","models/apc.glb":"3b781d2a4b1a9ce5","models/barricade.glb":"a1093215993b51d2","models/bunker-proxy.glb":"a1a07f3b2bad4ddf","models/bunker.glb":"bdf27766fc694793","models/elite-boomer-lod.glb":"cc13a2e186cc5a44","models/elite-butcher-lod.glb":"f8f147935ec52102","models/elite-reaper-lod.glb":"c3cfb150bf4f2943","models/elite-tyrant-lod.glb":"e99a0dd14958e438","models/fp-arm.glb":"8c66f56c897313a2","models/gun-arc.glb":"b7d9f8646040d1fa","models/gun-cryo.glb":"9acabaaddecc3917","models/gun-plasma.glb":"a8aa04bea5d1ff94","models/gun-rail.glb":"9ac67649118bc3aa","models/gun-shock.glb":"175970af9a4e9a17","models/hachiko-statue.glb":"a14b3375003d6fc7","models/hedgehog.glb":"7ecadb2bfa3d17c9","models/helicopter.glb":"3fcf6d4598969a0f","models/neon-block-proxy.glb":"e2c217eb6990e1ab","models/neon-block.glb":"9c8d7397c9d92776","models/police-car-proxy.glb":"415b2458ecfecb98","models/police-car.glb":"773b0716381fef33","models/rail-overpass-proxy.glb":"3cbed4803ae280ed","models/rail-overpass.glb":"27e5d0484ac61f7e","models/sandbag-wall.glb":"50891c2fa2acd9bf","models/station-screens-proxy.glb":"4cefb9415abf36fd","models/station-screens.glb":"947a3b7c31da6f56","models/subway-entrance-proxy.glb":"fd57f9414340cd2d","models/subway-entrance.glb":"1cd66e7ac3c5c1c2","models/tower-cylinder-proxy.glb":"a6bc6216a7892b10","models/tower-cylinder.glb":"638320a64ee8e3c1","models/turret-flamer.glb":"f228d741eb562804","models/turret-gatling.glb":"7e8b26e801b527b5","models/turret-gravity.glb":"514bda59b1adeb70","models/turret-howitzer.glb":"c854e96561f239b0","models/turret-laser.glb":"fd0f09f45f03f2a8","models/turret-missile.glb":"8641208381b6e7c0","models/turret-tesla.glb":"26753a7901691b4c","models/wrecked-bus-proxy.glb":"1ca28734ad742548","models/wrecked-bus.glb":"24edef62861d3cdf","models/wrecked-car.glb":"091c97b19880adc0","models/zombie-brute-lod.glb":"5abffd524f923e2c","models/zombie-cyber-punk-lod.glb":"ffa4bf55d2a75897","models/zombie-riot-police-lod.glb":"77920f1b012b2019","models/zombie-salaryman-lod.glb":"5307dc8f53d91a02","tuning.json":"369bdff533b608d2"};
// VERSION, CORE and FILES are injected by build-mobile.mjs. Cache only this release's allowlisted files.
const scope = self.registration.scope;
const PREFIX = 'neo-tokyo-web-' + new URL(scope).pathname + '-', CACHE = PREFIX + VERSION;
const allowed = new Set(FILES.map((name) => new URL(name, scope).href));
const shell = new URL('index.html', scope).href;
const indexKey = new URL('__offline_index__', scope).href;
let previous;
let downloading = false, cancelled = false;

async function reuse(name) {
  previous ||= (async () => {
    const list = [];
    for (const key of await caches.keys()) if (key.startsWith(PREFIX) && key !== CACHE) {
      const cache = await caches.open(key), index = await cache.match(indexKey);
      if (index) list.push({ cache, hashes: await index.json() });
    }
    return list;
  })();
  for (const old of await previous) if (old.hashes[name] === HASHES[name]) {
    const response = await old.cache.match(new URL(name, scope).href);
    if (response) return response;
  }
}

async function putFile(cache, name) {
  const url = new URL(name, scope).href;
  if (await cache.match(url)) return;
  const old = await reuse(name);
  if (old) { await cache.put(url, old); return; }
  const response = await fetch(new Request(url, { cache: 'reload', credentials: 'same-origin' }));
  if (!response.ok || response.status !== 200) throw new Error(`资源下载失败：${name}`);
  await cache.put(url, response);
}
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Small shell only; don't download another full model set while the game is loading.
    for (const name of CORE) await putFile(cache, name);
    // Carry forward unchanged resources locally instead of re-downloading every model after a code update.
    for (const name of FILES) if (!CORE.includes(name)) {
      const old = await reuse(name);
      if (old) { try { await cache.put(new URL(name,scope).href,old); } catch { break; } }
    }
    await cache.put(indexKey, new Response(JSON.stringify(HASHES)));
    // Activate the downloaded files, but never reload an active game automatically.
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const versions = (await caches.keys()).filter((name) => name.startsWith(PREFIX) && name !== CACHE);
    // Keep one previous release for an already open tab, bound disk usage to two releases.
    for (const name of versions.slice(0, -1)) await caches.delete(name);
    previous = undefined;
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

async function serve(request, event) {
  const url = new URL(request.url), canonical = new URL(url.pathname, url.origin).href;
  const cache = await caches.open(CACHE);
  if (request.mode === 'navigate' && url.origin === new URL(scope).origin && url.href.startsWith(scope)) {
    return (await cache.match(shell)) || fetch(request);
  }
  if (!allowed.has(canonical)) {
    // Already open tabs may still reference a hashed JS/CSS file from the previous release.
    if (canonical.startsWith(scope)) for (const key of await caches.keys()) if (key.startsWith(PREFIX)) {
      const old = await (await caches.open(key)).match(canonical); if (old) return old;
    }
    return fetch(request);
  }
  let cached = await cache.match(canonical);
  if (!cached) {
    cached = await reuse(canonical.slice(scope.length));
    if (cached) { const writing = cache.put(canonical,cached.clone()).catch(()=>{}); event?.waitUntil(writing); }
  }
  if (cached) return request.headers.has('Range') ? rangeResponse(cached, request.headers.get('Range')) : cached;
  if (request.headers.has('Range')) return fetch(request); // Never store partial media as a complete file.
  const response = await fetch(request);
  if (response.ok && response.status === 200) {
    const writing = cache.put(canonical, response.clone()).catch(() => {});
    event?.waitUntil(writing); // Stream to the player immediately; writing the cache must not delay progress.
  }
  return response;
}
self.addEventListener('fetch', (event) => { if (event.request.method === 'GET') event.respondWith(serve(event.request, event)); });

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
