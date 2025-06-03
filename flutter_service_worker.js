'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/802.gif": "0efaf8d9a5334a81e5e82c99f32c5fc2",
"assets/AssetManifest.bin": "b1401177ea7a404e5f8c217b16429e41",
"assets/AssetManifest.bin.json": "f6a74fb287799db11a605816bf732f77",
"assets/AssetManifest.json": "d7e172d8679f3e74cf255706ee7e325c",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Inter-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/Inter-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/images/app_screen/C1.jpg": "6a83f977f445c17a183634f14eb190a2",
"assets/assets/images/app_screen/C10.jpg": "53ae1ded843ef2972504216e35b2512f",
"assets/assets/images/app_screen/C11.jpg": "87da5f45f16b1d8e050a347129ecc7d6",
"assets/assets/images/app_screen/C12.jpg": "92a55cf74eb9185cfa6c46ee08cfebe3",
"assets/assets/images/app_screen/C13.jpg": "f5f6f552ed6e2dcfaf7bb3cc32291ca2",
"assets/assets/images/app_screen/C14.jpg": "0fc87cde236ce94d9b6f63ec8d9ab961",
"assets/assets/images/app_screen/C15.jpg": "8c63025c6f25b4e9773b90372ac143ae",
"assets/assets/images/app_screen/C2.jpg": "dd18411bce56d17aef99bfc41582b88a",
"assets/assets/images/app_screen/C3.jpg": "080b485bfaba5453cddc4473c19e647a",
"assets/assets/images/app_screen/C4.jpg": "ca95d6dfc06192b42fe0185a462d39d4",
"assets/assets/images/app_screen/C5.jpg": "b91be7827851cbeba5fde75d966240ae",
"assets/assets/images/app_screen/C6.jpg": "4d568bb2d22c87932b42b54a548ebfa1",
"assets/assets/images/app_screen/C7.jpg": "77c1aa6d2455a497f346b026468a0bff",
"assets/assets/images/app_screen/C8.jpg": "f8d3f14eab98959e3be0b78efbb699e4",
"assets/assets/images/app_screen/C9.jpg": "8ac625e330d4cad64a5b8a2c12b40ce5",
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
"assets/fonts/MaterialIcons-Regular.otf": "e332a506cc1fb55e5dc42b9efd1ca999",
"assets/Logo.png": "222e868cf90f7c08de704800d8e83720",
"assets/logo2.png": "22688a7b5a4cdfc3deb9b59158dc7e60",
"assets/NOTICES": "1550eca5a76bd26424402b83682ce0b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "5c5768de8043153dfb063322b99116ff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3464bfc76fb19adab87baa1d29569d60",
"icons/Icon-192.png": "e8e6004874eefa63c9a264fd4ae67c92",
"icons/Icon-512.png": "5dc1a8e00cff2c27478ab497f84b9dd1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f3361e9f241df81011314f44c5dd34f",
"/": "5f3361e9f241df81011314f44c5dd34f",
"main.dart.js": "de5a4fac6dc70a564aca2b19f41209a9",
"manifest.json": "a8ef28b016d0c924a4c71152bee1bd9f",
"version.json": "1678bca3480a3b7f61d622c86f4904d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
