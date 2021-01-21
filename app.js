//ServiceWorker registration begin

if ("serviceWorker" in navigator) {
  console.log("Service worker supported!");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service Worker Registered!"))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
