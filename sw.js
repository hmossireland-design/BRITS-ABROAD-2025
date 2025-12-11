const CACHE = 'brits-abroad-v1';
const FILES = [
  '/BRITS-ABROAD-2025/',
  '/BRITS-ABROAD-2025/index.html',
  '/BRITS-ABROAD-2025/manifest.json',
  '/BRITS-ABROAD-2025/sw.js',
  '/BRITS-ABROAD-2025/icons/icon-192.svg',
  '/BRITS-ABROAD-2025/icons/icon-512.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
