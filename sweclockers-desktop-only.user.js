// ==UserScript==
// @name        SweClockers Desktop Only
// @version     1.0.0
// @match       *://m.sweclockers.com/*
// @run_at      document-start
// @downloadURL https://simonalling.github.io/userscripts/sweclockers-desktop-only.user.js
// ==/UserScript==

document.location.href = document.location.href.replace("m.", "www.") + "#requestDesktop";
