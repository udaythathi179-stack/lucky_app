const CACHE_NAME = 'tuneus-music-v10';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/logo.png',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/screenshot-desktop.png',
  '/screenshot-mobile.png'
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
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio streams and API calls should bypass cache
  if (url.pathname.startsWith('/api/') || url.hostname.includes('saavncdn.com') || url.hostname.includes('apple.com')) {
    return;
  }

  // Network-First strategy: always fetch fresh from server, fallback to cache if offline
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});

// Background Sync capability
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-tuneus-library') {
    event.waitUntil(Promise.resolve());
  }
});

// Periodic Background Sync capability
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'sync-trending-songs') {
    event.waitUntil(Promise.resolve());
  }
});

// Push Notifications capability
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : 'Enjoy new songs on Tuneus!';
  event.waitUntil(
    self.registration.showNotification('Tuneus Music', {
      body: data,
      icon: '/icon-192.png',
      badge: '/icon-192.png'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
