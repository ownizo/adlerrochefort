#!/usr/bin/env node
// Scoped enforcement for EN/DE public sources and the source files that own
// their generated copy. This never opens a PT public page for writing.
import { globSync, readFileSync, writeFileSync } from 'node:fs';
import { PRIVATE_CLIENT_NAV_STYLE } from './private-client/navigation.mjs';
import { normalisePrivateClientLanguage } from './private-client/normalise.mjs';
let changed=0;
function update(file, lang) {
 const old=readFileSync(file,'utf8');
 let text=normalisePrivateClientLanguage(old,lang);
 if(lang==='de') {
   text=text.replace(/href="\/de\/private-clients-portugal\/">Private Clients<\/a>/g,'href="/de/private-clients/">Private Clients · Portugal &amp; Spanien</a>');
   if(file.endsWith('de/index.html')) text=text.replace('href="/de/private-clients-portugal/">Mehr erfahren','href="/de/private-clients/">Mehr erfahren');
   if(file.startsWith('public/de/') && text.includes('<div class="nav-right">') && !text.includes('class="pc-nav-link"')) text=text.replace('<div class="nav-right">','<div class="nav-right"><a class="pc-nav-link" href="/de/private-clients/">Private Clients · Portugal &amp; Spanien</a>');
 }
 if(lang==='de' && text.includes('class="pc-nav-link"')) {
   text=text.replace(' style="color:inherit;font-size:12px"','');
   if(!text.includes('id="private-client-navigation"'))text=text.replace('</head>',PRIVATE_CLIENT_NAV_STYLE+'\n</head>');
 }
 if(text!==old){writeFileSync(file,text);changed++;}
}
for(const lang of ['en','de'])for(const file of globSync(`public/${lang}/**/*.html`))update(file,lang);
// These are exclusively English-language source modules. Shared PT generators
// and mixed-language JSON are deliberately excluded.
for(const pattern of ['scripts/*-hub.data.mjs','scripts/*-cluster.data.mjs','scripts/*-articles.data.mjs','scripts/build-*-hub.mjs','scripts/build-*-cluster.mjs','scripts/build-*-articles.mjs','scripts/lib/spain-chrome.mjs','scripts/build-insurance-review.mjs']) {
 for(const file of globSync(pattern)) {
   if(/\/(?:de|nl|pl|se|dk|zh|il)-/.test(file))continue;
   update(file,'en');
 }
}
console.log(`EN/DE terminology/navigation: ${changed} sources updated`);
