const CACHE = 'brits-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll([
  '/BRITS-ABROAD-2025/',
  '/BRITS-ABROAD-2025/index.html',
  '/BRITS-ABROAD-2025/manifest.json'
]))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
