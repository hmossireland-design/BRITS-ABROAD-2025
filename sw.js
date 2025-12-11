const CACHE_NAME = 'brits-abroad-v1';
const FILES_TO_CACHE = [
  '/BRITS-ABROAD-2025/',
  '/BRITS-ABROAD-2025/index.html',
  '/BRITS-ABROAD-2025/manifest.json',
  '/BRITS-ABROAD-2025/sw.js',
  '/BRITS-ABROAD-2025/icons/icon-192.svg',
  '/BRITS-ABROAD-2025/icons/icon-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
