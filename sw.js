if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CcoTArsn.css",revision:null},{url:"assets/index-D6FwAtA9.js",revision:null},{url:"index.html",revision:"e71cde1499d98fa73c142e592d93d8d1"},{url:"registerSW.js",revision:"1331e702da3fdcb179b66aac940e2f96"},{url:"logo.svg",revision:"b382925b7d82ff25fdbd85e7b9bdbdd5"},{url:"manifest.webmanifest",revision:"669ee0752184387cb0ca9f078173c0c3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
