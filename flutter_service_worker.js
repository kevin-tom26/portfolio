'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/802.gif": "0efaf8d9a5334a81e5e82c99f32c5fc2",
"assets/AssetManifest.bin": "b702da99e75f0cdb871295de5465506c",
"assets/AssetManifest.bin.json": "c0941fb3e9c3231054943d17dee840dd",
"assets/AssetManifest.json": "77158e1630a08b59f33865ca9a47889e",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Inter-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/Inter-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/images/app_screen/G1.jpg": "1ac34df815bb1e731130df9ccd7bd782",
"assets/assets/images/app_screen/G2.jpg": "58e77f12aa5e25ca9202727b7ec3adc8",
"assets/assets/images/app_screen/G3.jpg": "023b35f2d81d42228b58221fbf826db8",
"assets/assets/images/app_screen/G4.jpg": "9cffc7fb6bb499e0f9b76867b550a160",
"assets/assets/images/app_screen/G5.jpg": "9fe7986a6dfb2cce0ac6372a40be2544",
"assets/assets/images/app_screen/G6.jpg": "6ca7c07c5fd3cccf4aeac63eb2cccf01",
"assets/assets/images/app_screen/G7.jpg": "3b4530f6f7b8a1f26dbcc54cae08b0fb",
"assets/assets/images/app_screen/G8.jpg": "515bb2b03a10455fefcf7cad9189ec8c",
"assets/assets/images/app_screen/N1.jpg": "7add5758fc958b13dfa40e50bea4736f",
"assets/assets/images/app_screen/N2.jpg": "b8ec69949e49bae56f38dde1561d910b",
"assets/assets/images/app_screen/N3.jpg": "7b465c3c6da698fbab946f5e587132da",
"assets/assets/images/app_screen/N4.jpg": "aca6b1722b9f8b1b3662d65e3c532d97",
"assets/assets/images/app_screen/N5.jpg": "bc0eac55b48553e976dcf60873cbc53d",
"assets/assets/images/app_screen/N6.jpg": "b65462dbd983d82050c91b51592b2f05",
"assets/assets/images/app_screen/N7.jpg": "527d0212facc9d46e591423f376dee68",
"assets/assets/images/app_screen/N8.jpg": "c4e17e2b1207f4fb578c96b0b8a3a05a",
"assets/assets/images/app_screen/N9.jpg": "e147512ace9538a0400a142f201329c6",
"assets/assets/images/site_icons/contact_arrow.png": "cb8b9adbac40397c412843f65b316e70",
"assets/assets/images/site_icons/github-contact.png": "a2ff263bd0e655103e2ec79989e9035e",
"assets/assets/images/site_icons/github.png": "7f69a20e5c86e6bfd29040a9c6a5136d",
"assets/assets/images/site_icons/github_2.png": "96962f0da8d33ae5346e5e345db71ee3",
"assets/assets/images/site_icons/instagram-contact.png": "97f2f8477739e269fc2eeb27267a4388",
"assets/assets/images/site_icons/linkedIn-contact.png": "8731e12750450dc8f3eb277b25d35f94",
"assets/assets/images/site_icons/linkedIn.png": "41c984d6feba1cc6645b8b7dce812641",
"assets/assets/images/site_icons/profile_pic.png": "25c0e24e35923febd1a3369e20c4294e",
"assets/FontManifest.json": "d0d7235eed2f9747d27bf85d6d52da1c",
"assets/fonts/MaterialIcons-Regular.otf": "b87158dce7a47ba9ce9740515b2a5be7",
"assets/Logo.png": "222e868cf90f7c08de704800d8e83720",
"assets/logo2.png": "22688a7b5a4cdfc3deb9b59158dc7e60",
"assets/NOTICES": "ae57c2184396d62512a7b2f35f418459",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "5c5768de8043153dfb063322b99116ff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "e8e6004874eefa63c9a264fd4ae67c92",
"icons/Icon-512.png": "5dc1a8e00cff2c27478ab497f84b9dd1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8ae3e118b82efb3c6b98fbe417b11371",
"/": "8ae3e118b82efb3c6b98fbe417b11371",
"main.dart.js": "b6e1ca1b4b3a8e5451b3310b790b400f",
"manifest.json": "a8ef28b016d0c924a4c71152bee1bd9f",
"version.json": "1678bca3480a3b7f61d622c86f4904d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
