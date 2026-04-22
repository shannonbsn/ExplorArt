const CACHE_NAME = "my-pwa-cache-v1.2";
const OFFLINE_URL = "/offline";
const APP_SHELL = [
  "/",
  "/icons/LOGO.png",
  OFFLINE_URL
];

self.addEventListener("install", (event) => {
    try {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => 
            Array.from(APP_SHELL).map((url) => cache.add(url))
        ),
    );
    } catch (error) {
        console.error("Failed to cache app shell:", error);
    }
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((key) => 
                Promise.all(
                    key
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key))),
            ),
            
    );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});