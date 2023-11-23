'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ccfdc62551dd7b59ff53f37d1677151b",
".git/config": "7a6622e3ae05b0fe1fd2bbaa890401b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5cc9ef8dba5919a877909d7a19f2cef9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "796d61dd7b92ce7f7620b91122116b15",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45f8a8328b4f7eadeced182d2e8cef5d",
".git/logs/refs/heads/main": "34187d74426ccd45dfb764829ac5a0c5",
".git/logs/refs/remotes/origin/main": "2bd55a0e3bf86cfc74726058ce92c249",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/0cdd3bc1362d1158ce594050de8f66536a615c": "a6bfa19efd0ebd091d71e3e20d0a0d85",
".git/objects/05/7915245f003fa6a6196c0f9a49e1c9b58c01c6": "9c659922f106e6a62b8a6ba170f18238",
".git/objects/0a/77b10c264a16903bbdca986a4b8ec3d4af3177": "4f055a091d481504b1ad0196e64b8944",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1c/fd55e945b7299af8af7b4b849a91293be1d9f2": "b3846c83e21b8eb67229821cacc6518b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/3754b0135bd8187500258cb9fcd9f64f4d99f7": "c3c62fc5cd31b8a22385673a3ecc2871",
".git/objects/28/bff858d594620f37b5259076d42f243ddefa3d": "2163650ad536e4bf5f79afc818abba86",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/d4bbef1adb7753d5055fc9aca681f6c4b4ed14": "ae3b020caba670c661f49ab201d18510",
".git/objects/3a/fa1fc04700b39286568c42b0260852e4a549a9": "d59b659cdf99411793aea1590d1a50ee",
".git/objects/3f/f51d39486564e811d5d37eb17ac3f6a76d801e": "d758c9396ffcc9186ff62da7cbacc1f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/064d498edcde27d3e40a93d1eb617b2b2df024": "6993145d04c355ef19b8be88ea9c28bf",
".git/objects/4c/b129724c605a2cc9217aeba5d0efe1fb22b0cb": "daccf78c0817431fe092abd21a00fba5",
".git/objects/4f/9a3313cce79f312bad10ae8658da68a91968d0": "2a96c2c5035034b74c2e0eae74b03c2b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5d/df75b2324ca5ad24057e05e093e56bb0473bde": "adb87a9c05973af35e77c6bec5052f1a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/67975c8f9c2dd66d9d30e285491bda16b5d0a3": "a4a77b6fc93e2a39494ca416ac8bcbcf",
".git/objects/72/b1fc1f1c64b318f1abd59943e8973f9d5593aa": "6fe691e3a899d5a6c080e7dc317ff88e",
".git/objects/83/d4ae6d5d5c4b95ca8d1e55bfcb46d4a3627f8a": "98334fc7991b1fdb79ce424928b04bf5",
".git/objects/83/e0d7e0418590b9dd5aa09f1d6dafb820e61abf": "9ce4eb6e4df39dab91fe5958b1e237a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/beb03e9dfcb0e0cb709d296a282ac0af718f4c": "43cb5e0dec32ac21a17629495d609f0f",
".git/objects/8e/0a06740c7c0d48c71950fd71ac886f58c87d37": "575d4f2fab7cc28f2deeb2e5a655bb30",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/99/8e4483d24a03097ac4e8864b3615680c3ba126": "3ddd7d1bb7fed6527622639357967efd",
".git/objects/a2/d71933e1f47d24f7472d26b31f6edec9473550": "ae51580cfa7c1bf2312d773043746121",
".git/objects/aa/f6aa528c7e805cf030862d23426d8471be3f21": "74aeb2b2f3b0fb8d67f2738dfc7984df",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/2a245d72361760cc0ae68319ab64dfba4b2ed0": "ab660e57724a129e6f05870cf0406a13",
".git/objects/b6/039a69a8e9eec33262ad788594115dd4ca2e80": "8ac596024d81dc93fc437d28d7a348a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b2c3a48daeba4825ca02af959e6abbc3a52d2b": "18638cbb305bda67feb11be40168a207",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c9/3c55ad2cf6de70f31ae60fa150dce1784ed060": "a796ac5b5e37f22bd45e9f8f2f1321b7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/85e3a34d8e2b77d0895827646405183e559e55": "ebfab309b9532639c14c10036eb328da",
".git/objects/e4/d81e896ba53cd114119d09516352f27877b40e": "063ebe36d5eb74ba8a51753c359f06f3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/70a7ec31280d685359b8a642dae73c46b72491": "865fdc82243d91d0ca58f66700245eb3",
".git/objects/f5/a3cf7262fe494912e5ac744a7d8c98a6adb8df": "7e7e2b72c9600e44c5b75512c5b8a046",
".git/objects/f7/0b2b49f08081ab1ec63cdd1a2ae625d2345e81": "b14a4d6d83eb8f073965ad07d986c0bc",
".git/ORIG_HEAD": "6894d620b3249816a69119b93598cc32",
".git/refs/heads/main": "6894d620b3249816a69119b93598cc32",
".git/refs/remotes/origin/main": "6894d620b3249816a69119b93598cc32",
"assets/AssetManifest.bin": "70d741018b0453e8b8d94f1d79755553",
"assets/AssetManifest.json": "5504690b1972e0cbc840ed6af6c4ec88",
"assets/assets/google.png": "fac13731f4de6e124475620fcb73e39c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f511cf51185f2ca8b7bfc2fc50940013",
"assets/NOTICES": "5d8cbf876b51dc97ded12870cb118962",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3c0ddd776f5587b37fbf7344b127f64d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf9100d5f343fc6c1b271d974911815c",
"/": "cf9100d5f343fc6c1b271d974911815c",
"main.dart.js": "73b403bfe6065e44f3deae9854c3bb3e",
"manifest.json": "4f0ee1d46d6883450c5d24dfa920638e",
"README.md": "d968cd61c888300d126e3987bdd4fef0",
"version.json": "c2daac824b2724f58dada9a3cecc32af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
