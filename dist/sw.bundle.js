if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const a=e=>n(e,c),o={module:{uri:c},exports:s,require:a};i[c]=Promise.all(d.map((e=>o[e]||a(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3bd9af45"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"92fd7b71ec0e458492c741c436799474"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"14ae4e2b1486cc114d6889cdbb2b5bcc"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"dd0ad58ad442b334dbe948a9b6721c7d"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail/")),new e.StaleWhileRevalidate({cacheName:"restaurant-detail-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map