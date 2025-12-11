const CACHE = 'brits-abroad-2025-v1';

const OFFLINE_URLS = [
  '/',
  '/BRITS-ABROAD-2025/',
  '/BRITS-ABROAD-2025/index.html',
  '/BRITS-ABROAD-2025/manifest.json',
  '/BRITS-ABROAD-2025/icons/icon-192.png',
  '/BRITS-ABROAD-2025/icons/icon-512.png',
  '/BRITS-ABROAD-2025/icons/icon-maskable.png'
];

// Install — cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

// Activate — take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch — network-first for navigation, cache-first for assets
self.addEventListener('fetch', event => {
  const request = event.request;

  // HTML pages: try network → fallback to cached index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/BRITS-ABROAD-2025/index.html'))
    );
    return;
  }

  // Everything else (icons, etc.): cache first, then network
  event.respondWith(
    caches.match(request).then(response => response || fetch(request))
  );
});
