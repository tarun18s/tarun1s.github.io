'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/fonts/TT%2520Commons%2520Medium.otf": "0c4e0d71a7fff703277f5fbb78116f2a",
"assets/assets/fonts/TT%2520Commons%2520Bold.otf": "94aaab70bb13ab450ff8b18f23a2feaf",
"assets/assets/fonts/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/fonts/TT%2520Commons%2520DemiBold.otf": "1fc777a023aa56fc4001c2f9ab6a0108",
"assets/assets/fonts/TT%2520Commons%2520Regular.otf": "6ba4b187e963c08d4e9d88ddaa78a401",
"assets/assets/images/contact-center/hangUp.svg": "c046bd3f0d1284763b709f73f4f2d673",
"assets/assets/images/contact-center/arrow_back.svg": "3c4a887e16cf48bc6ad677c4aa574e1b",
"assets/assets/images/contact-center/dual_User.svg": "37ff4aca6df34b6e7ae53415e6a4aa60",
"assets/assets/images/contact-center/cancel.svg": "092e40aef64dde395e2ad70e74baf049",
"assets/assets/images/contact-center/keyboard-arrow-up.svg": "71e2d2f1f9136b8d14c2439da5591357",
"assets/assets/images/contact-center/helmet_Logo.svg": "41444d7739c03ecdfd1e02ac9d7aaa80",
"assets/assets/images/contact-center/swap.svg": "bf4b0bc4b0a0d32807b2051a053a05b4",
"assets/assets/images/contact-center/green-tick-toast.svg": "bffb9e924cb2298a02ba94636e8f8f86",
"assets/assets/images/contact-center/user_Bordered.svg": "7d353b122f638eb787d27c8fc4cef31e",
"assets/assets/images/contact-center/message.svg": "0ea2933b4ffc3433f53ea08e6f481f5f",
"assets/assets/images/contact-center/outLined_User.svg": "36084b4c667bb915f5abfb10caa7a73f",
"assets/assets/images/contact-center/call.svg": "6e6e0904e720b0c799bd11695515e360",
"assets/assets/images/contact-center/loading-lottie.json": "d8ce3dac672ecd8433c71e20cdc7ad82",
"assets/assets/images/contact-center/mic.svg": "fdd85ea0b41d2140cfd7d1f2462fac23",
"assets/assets/images/contact-center/keyboard-arrow-down.svg": "ca979898aa3d1aa6ac65e3c166c1de2d",
"assets/assets/images/contact-center/history.svg": "b081ee8776c8b70736f946c32325ac5e",
"assets/assets/images/contact-center/micMute.svg": "1b344c014ae7364f6423f0d266ebccc5",
"assets/assets/images/contact-center/red-tick-toast.svg": "8d2903bfffd30d0fc04e6b3c6e13c325",
"assets/assets/images/log-in/street-view.svg": "4dc474dbd3a6a2dcf9f94ed6004bd934",
"assets/assets/images/log-in/eye-icon.svg": "5c9b84de1607b44e5906dae484a58b03",
"assets/assets/images/log-in/max-icon.svg": "7d741189eaea96a0fa3404c0ab3e2c73",
"assets/assets/images/home/vehicle.svg": "2314557dc4ed66691a5ebe9c9eb83786",
"assets/assets/images/home/helmet_logo.svg": "f9428f8021f9eb5bdf6845b7f9577d6d",
"assets/assets/images/home/helmet.svg": "c7f8d300492bfbc914cb51a952202959",
"assets/AssetManifest.json": "e27370465cf76c58996720ba2a061175",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "a3a5196fce0f43ee773672afac964249",
"assets/FontManifest.json": "09d2e10325710c83dfb8431d073a8c59",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"twilio.min.js": "e9b644bf01ca40e1ded52eb797446e93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "00e928b6add01b9b0828f7a2953b8c8f",
"main.dart.js": "415725d25e4c4d936efda43fd037c78d",
"index.html": "df863788d6a20b224d45e89a3bf048f1",
"/": "df863788d6a20b224d45e89a3bf048f1",
"manifest.json": "acf85784dee733de24cbf8e16d2c2f2e",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
