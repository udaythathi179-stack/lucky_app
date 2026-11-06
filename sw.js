const CACHE_NAME = 'tuneus-music-v48';
const IMAGE_CACHE_NAME = 'tuneus-artwork-v2';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/data/artistCuratedTracks.js',
  '/theme-bg.jpg',
  '/wave-theme.jpg',
  '/manifest.json',
  '/logo.png',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/images/avatar-uday.jpg',
  '/images/cover-agr.jpg',
  '/images/cover-boomboom.jpg',
  '/images/cover-vikramasimha.jpg',
  '/images/cover-chhaava.jpg',
  '/screenshot-desktop.png',
  '/screenshot-mobile.png',
  '/images/artists/alka-yagnik.jpg',
  '/images/artists/anurag-kulkarni.jpg',
  '/images/artists/arijit-singh.jpg',
  '/images/artists/armaan-malik.jpg',
  '/images/artists/asha-bhosle.jpg',
  '/images/artists/atif-aslam.jpg',
  '/images/artists/dsp.jpg',
  '/images/artists/geetha-madhuri.jpg',
  '/images/artists/haricharan.jpg',
  '/images/artists/hemachandra.jpg',
  '/images/artists/jubin-nautiyal.jpg',
  '/images/artists/karthik.jpg',
  '/images/artists/kishore-kumar.jpg',
  '/images/artists/kk.jpg',
  '/images/artists/ks-chithra.jpg',
  '/images/artists/kumar-sanu.jpg',
  '/images/artists/lata-mangeshkar.jpg',
  '/images/artists/madhu-priya.jpg',
  '/images/artists/mangli.jpg',
  '/images/artists/mika-singh.jpg',
  '/images/artists/mohammed-rafi.jpg',
  '/images/artists/mohit-chauhan.jpg',
  '/images/artists/neha-kakkar.jpg',
  '/images/artists/rahul-sipligunj.jpg',
  '/images/artists/ram-miriyala.jpg',
  '/images/artists/ramya-behara.jpg',
  '/images/artists/revanth.jpg',
  '/images/artists/saketh-komanduri.jpg',
  '/images/artists/shaan.jpg',
  '/images/artists/shankar-mahadevan.jpg',
  '/images/artists/shreya-ghoshal.jpg',
  '/images/artists/sid-sriram.jpg',
  '/images/artists/sonu-nigam.jpg',
  '/images/artists/sp-balasubrahmanyam.jpg',
  '/images/artists/sp-charan.jpg',
  '/images/artists/sunitha.jpg',
  '/images/artists/udit-narayan.jpg',
  '/images/artists/vijay-yesudas.jpg',
  '/images/artists/vishal-mishra.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME && key !== IMAGE_CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio streams and dynamic API calls bypass the service worker
  if (
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('aac.saavncdn.com') ||
    url.pathname.endsWith('.mp4') ||
    url.pathname.endsWith('.m4a') ||
    url.pathname.endsWith('.mp3')
  ) {
    return;
  }

  // Cache-First strategy for images: drastically cuts data usage and enables instant loading from disk
  const isImage = (
    url.hostname.includes('c.saavncdn.com') ||
    url.pathname.match(/\.(jpg|jpeg|png|webp|svg|ico)$/i)
  );

  if (isImage && event.request.method === 'GET') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
      )
    );
    return;
  }

  // Network-First strategy for local scripts/HTML/styles/assets: fresh when online, fallback to cache
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});

// Background Sync capability
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-user-playlists') {
    event.waitUntil(Promise.resolve());
  }
});
