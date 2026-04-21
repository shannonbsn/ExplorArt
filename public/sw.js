const CACHE_NAME = "my-pwa-cache-v1";
const OFFLINE_URL = "./offline.html";
const APP_SHELL = [
  "./",
  "/layout.html",
  "./globals.css",
  "/favicon.ico",
  OFFLINE_URL,
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => 
            cache.addAll(ASSET_TO_CACHE)
        ),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) => 
                Promise.all(
                    key
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key))),
            ),
            
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            return cacheResponse || fetch(event.request);
        }),
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() => caches.match("/offline.html")),
        );
        return;
    }
    event.respondWith(
        caches
        .match(request)
        .then((cacheResponse) => cacheResponse || fetch(request)),
    );
});