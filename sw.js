const staticCacheName = "breakoutgame-static";
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/js/phaser.min.js",
  "/js/main.js",
  "/scenes/Level1.js",
  "/scenes/LoseScreen.js.js",
  "/scenes/WinScreen.js.js",
  "/scenes/Menu.js.js",
  "/app.js",
  "/styles.css",
  "/assets/ball.png",
  "/assets/brick.png",
  "/assets/paddle.png",
  "/assets/icon_192.png",
  "/assets/icon_512.png",
  "/manifest.json",
];

//Install service worker
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed!");
  e.waituntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching core assets...");
      cache.addAll(assets);
    })
  );
});

//Activate service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated!");
});

//Fetch event
self.addEventListener("fetch", (fetchEvent) => {
  console.log("Fetch event detected");
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
