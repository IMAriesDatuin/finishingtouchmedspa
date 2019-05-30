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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "c8c96613fb259e966356db0d401cb33e"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b81c6e596635c8d395ad0165b9e7fd4"
  },
  {
    "url": "android-chrome-192x192.webp",
    "revision": "4b7bd055b2fbd82de0c81fbd695cdec0"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "b728e58731633f93e02945b2dd80c641"
  },
  {
    "url": "android-chrome-512x512.webp",
    "revision": "028b78b9f792a122d7a000f4865850cf"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2365d1a515607188d65c6b3d2812e5af"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "7608b2e6fb44da2abc9d92de402525e0"
  },
  {
    "url": "assets/backgrounds/noise.png",
    "revision": "2eb88572cd26ea42606923e50e615306"
  },
  {
    "url": "assets/backgrounds/noise.webp",
    "revision": "b60b7af74ff2fff1933185847591cef0"
  },
  {
    "url": "assets/backgrounds/pattern-floral.webp",
    "revision": "6a2bb79e5175139054e4d735a036ede6"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/cover.png",
    "revision": "b319bcbf74f93f79f15c376e562864e7"
  },
  {
    "url": "assets/cover.webp",
    "revision": "bd6ee1cf82234fe7034704fe4e0b5ca2"
  },
  {
    "url": "assets/error-static.gif",
    "revision": "e49fc1bd18b966580f4c6d0486adf97b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon.png",
    "revision": "da80b4a96d78bb3e4afd60e0c88ab902"
  },
  {
    "url": "assets/icon.webp",
    "revision": "f5127625978a370d056ad8ff25f5aed2"
  },
  {
    "url": "assets/mejs-controls.png",
    "revision": "c76c867d4c78fd55f4cfd86c0e1de0ef"
  },
  {
    "url": "assets/mejs-controls.svg",
    "revision": "f0849a5e79712b10e1531925e3edb879"
  },
  {
    "url": "assets/mejs-controls.webp",
    "revision": "2c791a6c0e99786f8d8e1cd2eee7ada0"
  },
  {
    "url": "assets/placeholder/background.png",
    "revision": "20f1c9847e54f4c7936fc52f2fddfa07"
  },
  {
    "url": "assets/placeholder/background.webp",
    "revision": "8c14ccd7bc00c59eb0c5147cf5a617ca"
  },
  {
    "url": "assets/placeholder/hydrafacial.jpg",
    "revision": "60afaf4460caeaaf894a46f1c85d5fce"
  },
  {
    "url": "assets/placeholder/hydrafacial.webp",
    "revision": "7cd216135d296b11a1df8334cff1ff99"
  },
  {
    "url": "assets/placeholder/john-hernried.jpg",
    "revision": "bca2ee279fdea995a7b83d17287b93c3"
  },
  {
    "url": "assets/placeholder/john-hernried.webp",
    "revision": "3ce34c900e5f7b60808e1a5a58f803f6"
  },
  {
    "url": "assets/placeholder/rachel-pumphrey.jpg",
    "revision": "88374c35997e41244ec65432c07f3136"
  },
  {
    "url": "assets/placeholder/rachel-pumphrey.webp",
    "revision": "93da5e38a3d40cee23fcc2b49f1b312b"
  },
  {
    "url": "assets/placeholder/shutterstock_101865508.jpg",
    "revision": "267f86fa96eb464305cb46140ba4958d"
  },
  {
    "url": "assets/placeholder/shutterstock_101865508.webp",
    "revision": "69e6cee8465af22b1dcab5aa9dbb2f3a"
  },
  {
    "url": "assets/placeholder/shutterstock_1025805082.jpg",
    "revision": "e514e765a99bd12f0fd09cfe67269f45"
  },
  {
    "url": "assets/placeholder/shutterstock_1025805082.webp",
    "revision": "9ea8a86a09c0e3fd5685449164d3e300"
  },
  {
    "url": "assets/placeholder/shutterstock_1028011084.jpg",
    "revision": "7d4c877c30c4ba1efbefad83fe1b59aa"
  },
  {
    "url": "assets/placeholder/shutterstock_1028011084.webp",
    "revision": "3136e65a5c8b0bc523931b44769b88bb"
  },
  {
    "url": "assets/placeholder/shutterstock_1032685408.jpg",
    "revision": "4f7fd643fb60c31064b97687dc5a712b"
  },
  {
    "url": "assets/placeholder/shutterstock_1032685408.webp",
    "revision": "a2cb75fbba4bcbffd9c31b1948712502"
  },
  {
    "url": "assets/placeholder/shutterstock_1064553980.jpg",
    "revision": "73485cf07452751ba8889b36663f651f"
  },
  {
    "url": "assets/placeholder/shutterstock_1064553980.webp",
    "revision": "798a7b2ad7045332de20bdb94c5ea78c"
  },
  {
    "url": "assets/placeholder/shutterstock_1166005936.jpg",
    "revision": "f0e3dfaee5008c958f687f1f927be1ee"
  },
  {
    "url": "assets/placeholder/shutterstock_1166005936.webp",
    "revision": "c89f286b70ce123b82a1da8faa3f4636"
  },
  {
    "url": "assets/placeholder/shutterstock_1242539569.jpg",
    "revision": "a80ce2b52cc16a01692c116ffd2ecf3b"
  },
  {
    "url": "assets/placeholder/shutterstock_1242539569.webp",
    "revision": "180f484d25e2751002a9af2e8f03d2d4"
  },
  {
    "url": "assets/placeholder/shutterstock_1337024621.jpg",
    "revision": "53a007402a4796d207c2940e91a76fd2"
  },
  {
    "url": "assets/placeholder/shutterstock_1337024621.webp",
    "revision": "348b0bb59bdc5f5ac68e9c6b4de2558d"
  },
  {
    "url": "assets/placeholder/shutterstock_1344960995.jpg",
    "revision": "ec4619cb8f1d90a0453648f02fd3eae8"
  },
  {
    "url": "assets/placeholder/shutterstock_1344960995.webp",
    "revision": "a2d8d62f2ec54de9d717aab08faa67cb"
  },
  {
    "url": "assets/placeholder/shutterstock_156914597.jpg",
    "revision": "b2ed73a001c9636e73af9f11021decdc"
  },
  {
    "url": "assets/placeholder/shutterstock_156914597.webp",
    "revision": "6ce2bab1a06a9b22ae6862b0f4af4b1c"
  },
  {
    "url": "assets/placeholder/shutterstock_191546813.jpg",
    "revision": "524a6d2438bb212661ea4b0ed25f500b"
  },
  {
    "url": "assets/placeholder/shutterstock_191546813.webp",
    "revision": "31ea4c4946390e35c0a7e778973c97b5"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.jpg",
    "revision": "d6c40d7f88dcc7ce6d37f5e3251c3183"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.webp",
    "revision": "3ba89b641087677e267da6f06cb6dfcc"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.jpg",
    "revision": "8f00f65230a7cfc76080aa5d3766651b"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.webp",
    "revision": "265b05a9e3a72aef3575cbdee3285e24"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.jpg",
    "revision": "deb7ca4faad2fd4a18d72890313c12f5"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.webp",
    "revision": "964ea856d893eeb63dd704a2c9384a8b"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.jpg",
    "revision": "f31c362f0554ede5777d47a6651314f7"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.webp",
    "revision": "ab5ba973a807973286b8a9d5cdca327b"
  },
  {
    "url": "assets/placeholder/shutterstock_330300263.jpg",
    "revision": "6044e2c8d35a2402feaa66cd640ad580"
  },
  {
    "url": "assets/placeholder/shutterstock_330300263.webp",
    "revision": "508ca1d55960e9bcb8a66b2fa240e2bd"
  },
  {
    "url": "assets/placeholder/shutterstock_380423032.jpg",
    "revision": "d889d3020506c11dfb9fbf4cf51804c3"
  },
  {
    "url": "assets/placeholder/shutterstock_380423032.webp",
    "revision": "73d34420aee74929868553775b48342c"
  },
  {
    "url": "assets/placeholder/shutterstock_394494271.jpg",
    "revision": "689c4081718e8ef2de4e67e408dbd8e7"
  },
  {
    "url": "assets/placeholder/shutterstock_394494271.webp",
    "revision": "c0741a85f93e39646dda4cfe74cd526d"
  },
  {
    "url": "assets/placeholder/shutterstock_415387804.jpg",
    "revision": "dcdffdd0cd5aadf8908410551369a8f3"
  },
  {
    "url": "assets/placeholder/shutterstock_415387804.webp",
    "revision": "9aa55592f61a327c6d5b327ddbe5f9dd"
  },
  {
    "url": "assets/placeholder/shutterstock_486776785.jpg",
    "revision": "1aa65dde921e182f1d5c9394cbf875c2"
  },
  {
    "url": "assets/placeholder/shutterstock_486776785.webp",
    "revision": "fd112c535d8683656bced910417952db"
  },
  {
    "url": "assets/placeholder/shutterstock_583329955.jpg",
    "revision": "d26d7c6136860a37b478de2ead4eeb0a"
  },
  {
    "url": "assets/placeholder/shutterstock_583329955.webp",
    "revision": "d2ce6ecb231d18e5bb8a76d1fd66fc2f"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.jpg",
    "revision": "7128c1b72eca6db71f9adbced171d1cb"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.webp",
    "revision": "6cc7988fe4b210584dc598f0b87d1e7f"
  },
  {
    "url": "blog/index.html",
    "revision": "5b3f25385a38b57b52451d7b9ead66f6"
  },
  {
    "url": "blog/template.html",
    "revision": "5ae8a5fee45a659749e1aec8d70dd43d"
  },
  {
    "url": "contact.html",
    "revision": "4e5e9f8565aa1725f4c23bb614cb921b"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "1b506be9bba2ac83aecd9621bfba4fc4"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "fa1e245f42aad3d6304b9ad45bcb1950"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "898ab66d47bea43facda7e21288cadf4"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "da04861ef057d48cab34492007cd7d38"
  },
  {
    "url": "index.html",
    "revision": "2b8239f22aa7fd4cbf6e41b278522701"
  },
  {
    "url": "legal.html",
    "revision": "bf19c400b8763ff4605ab80ee844bf8e"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "a2b67c90a59094e6f522ab6c8c6274df"
  },
  {
    "url": "mstile-144x144.webp",
    "revision": "74e64eda02c0e7b2e13b314a7153520c"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "ca022ee1b8612e447c19fa597a5e1c1e"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "33c048990c8b775214ecadd9491d5332"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "bdcd8115c00d2886afe044d275b957fb"
  },
  {
    "url": "mstile-310x150.webp",
    "revision": "da05fc5fb2214804d0aed0c16c3a4ec9"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "5f0f4c8cfa3f35069932737c30e95ce8"
  },
  {
    "url": "mstile-310x310.webp",
    "revision": "420bbec308f5d5807c5f5f08c9b04b95"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "8c89bd26440ff7b38b52451e7999473b"
  },
  {
    "url": "mstile-70x70.webp",
    "revision": "cfd2538b17bd5f69a5c7f2438b89f428"
  },
  {
    "url": "procedures/index.html",
    "revision": "80f6efadbad43b023e840efc72361a3d"
  },
  {
    "url": "procedures/template.html",
    "revision": "e270862bf33ed50c06b5d86de20f8cbe"
  },
  {
    "url": "reviews.html",
    "revision": "5302f9b48c3eedba46dbf0cfd69eac5d"
  },
  {
    "url": "safari-pinned-tab.png",
    "revision": "e6912497d32296024c18af3a0207d808"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "952fabb80a08221e3f32fb86642cf30d"
  },
  {
    "url": "scripts/app.3704b5ed3d.css",
    "revision": "43f789170f2b61dec560a97d28d3719e"
  },
  {
    "url": "scripts/app.4d55b82f25.js",
    "revision": "3672d9b9480f1d9959d3c53cd12c4dd2"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "72721167aea128f7ddac301c15dab835"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f77645622015337d638b8a3d6266fe43"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "29e1f75381d3efde65c48168ebe5c403"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "fb481cb3c3d44b2d16d38e93ef118f9a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "68c177c286c34e1b7b975807dd5d9ed0"
  },
  {
    "url": "webfonts/fa-light-300.eot",
    "revision": "a06baf702fb4e2a21830fa7dfa71c0dc"
  },
  {
    "url": "webfonts/fa-light-300.svg",
    "revision": "9969a9da0ab8636ad1a428b3838757d4"
  },
  {
    "url": "webfonts/fa-light-300.ttf",
    "revision": "7f384302d16d8bf29d1549de26d0153d"
  },
  {
    "url": "webfonts/fa-light-300.woff",
    "revision": "1008b6dd09c8b71b65e7c449bf881d90"
  },
  {
    "url": "webfonts/fa-light-300.woff2",
    "revision": "20bbccf14518922fa95a440f4c217d9e"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "df3024c0f2d296c59947567afffb0a3b"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "416d58293e221c2b4b8f34c1531d5dfd"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "bd86e53df8c36e22fbba9d4e60e3c632"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "239abe3e583864d4ab3d27c34ac37cc6"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "8cfe82e8c97df9ab3f52ac86af21230d"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "11823289c2cdeaf2415c76be9c5e4a09"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "506bcfeaad71580149d11c8fb36af219"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff4aabff5dc839470245d1e5043bdd51"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "6a9e75ccf66ab99b14f2873840cfc01d"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "e57324a466c24a207fd9ad0f5f5e3c9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
