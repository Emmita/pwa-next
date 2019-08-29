self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.5b25fefcfcc6ff632cd7.js",
    "revision": "9b79ad6b22e9b203f13a"
  },
  {
    "url": "/_next/static/runtime/main-3107d07e914702cee633.js",
    "revision": "6bbc614cbb2bde95ffcc"
  },
  {
    "url": "/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  },
  {
    "url": "/_next/static\\bqj5VKOKj5iJ6-VdD3pGO\\pages\\_app.js",
    "revision": "0542f8a684b17b910cc8"
  },
  {
    "url": "/_next/static\\bqj5VKOKj5iJ6-VdD3pGO\\pages\\_error.js",
    "revision": "11ba5d83f3cece52317b"
  },
  {
    "url": "/_next/static\\bqj5VKOKj5iJ6-VdD3pGO\\pages\\about.js",
    "revision": "6f13baeac054c8145b26"
  },
  {
    "url": "/_next/static\\bqj5VKOKj5iJ6-VdD3pGO\\pages\\index.js",
    "revision": "7f9e8e60490e0c45a071"
  },
  {
    "url": "/_next/static\\bqj5VKOKj5iJ6-VdD3pGO\\pages\\posts.js",
    "revision": "3f03b18e807f819ba90c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/i.png",
    "revision": "479c19f6da7646973582a3ec12edb8d7"
  },
  {
    "url": "static/icon.png",
    "revision": "bf86d5dad1a5345c54587dd793421caa"
  },
  {
    "url": "static/manifest.json",
    "revision": "6348ff4e7b03f4fc23e5d7c8a59656ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
