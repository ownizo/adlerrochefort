import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, globSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { routes } from './lib/quotation-routes.mjs';
import { PRIVATE_CLIENT_PAGES } from './private-client/render.mjs';
const { JSDOM }=createRequire(import.meta.url)('jsdom');
const origin='https://adlerrochefort.com';
const doc=path=>new JSDOM(readFileSync(path,'utf8')).window.document;
const pageFile=url=>'public'+new URL(url,origin).pathname+'index.html';
const newUtilities=new Set(['/fr/devis-auto/','/fr/devis-habitacao/','/fr/devis-saude/','/fr/devis-profissional/','/nl/autoverzekering-portugal/']);
const sitemap=readFileSync('public/sitemap-pages.xml','utf8');
for(const [lang,products] of Object.entries(routes))for(const [product,path] of Object.entries(products))test(`${lang}/${product}: existing route or non-indexable form utility`,()=>{
 const url=new URL(path,origin),d=doc(pageFile(path));
 assert.equal(d.documentElement.lang.slice(0,2),lang);
 assert.ok(d.getElementById(url.hash.slice(1)),path);
 assert.equal(d.querySelectorAll('link[rel="canonical"]').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,origin+url.pathname);
 if(newUtilities.has(url.pathname)) {
  assert.match(d.querySelector('meta[name="robots"]').content,/noindex/);
  assert.ok(!sitemap.includes(`<loc>${origin+url.pathname}</loc>`));
 } else {
  assert.ok(!/noindex/.test(d.querySelector('meta[name="robots"]')?.content||''));
  assert.ok(sitemap.includes(`<loc>${origin+url.pathname}</loc>`));
 }
});
test('Portuguese homepage keeps only five visible fields and its original contextual block',()=>{
 const d=doc('public/index.html'),f=d.querySelector('form[name="analise-gratuita"]');
 const fields=[...f.querySelectorAll('input:not([type="hidden"]):not([name="bot-field"]),select,textarea')];
 assert.deepEqual(fields.map(e=>e.name),['nome','email','telefone','empresa','tipo_seguro']);
 assert.deepEqual(fields.map(e=>e.required),[true,true,false,false,true]);
 const block=d.querySelector('.hero-form-note');assert.equal(block.querySelector('h3').textContent,'Antes de preencher');
 assert.ok(block.compareDocumentPosition(f)&4,'context must precede fields');
 const before=execFileSync('git',['show','HEAD:public/index.html'],{encoding:'utf8'});
 assert.equal(block.outerHTML,new JSDOM(before).window.document.querySelector('.hero-form-note').outerHTML);
 assert.match(readFileSync('public/index.html','utf8'),/background: #F5F1E8;\s*border-left: 3px solid #B8323E;/);
 for(const tree of ['en','de','nl','fr','pl','se','dk','zh','il'])assert.ok(!readFileSync(`public/${tree}/index.html`,'utf8').includes('Antes de preencher'),tree);
});
test('Private Client editorial content, country navigation and representative journeys are preserved',()=>{
 // Permit only the three approved designation/description changes; preserve all other bytes.
 const withoutTerminologyCorrection=s=>s
  .replaceAll('Insurance broker · registered in Portugal with the ASF as a non-tied insurance agent · No. 425591790/3','ASF-registered non-tied insurance agent · No. 425591790/3')
  .replaceAll('Versicherungsmakler · in Portugal bei der ASF als „agente de seguros não ligado“ registriert · Nr. 425591790/3','Versicherungsvermittler · in Portugal als „agente de seguros“ registriert · ASF Nr. 425591790/3')
  .replaceAll('Adler & Rochefort is an insurance broker. Ownizo, Unipessoal Lda. is registered in Portugal with the ASF as a non-tied insurance agent, no. 425591790/3.','Portuguese ASF-registered non-tied insurance agent, no. 425591790/3')
 ;
 for(const page of PRIVATE_CLIENT_PAGES){
  const file=pageFile(page.url),before=execFileSync('git',['show',`HEAD:${file}`],{encoding:'utf8'});
  assert.equal(withoutTerminologyCorrection(readFileSync(file,'utf8')),withoutTerminologyCorrection(before),page.url);
 }
});
test('every sitemap entry exists, is indexable and has its own canonical',()=>{
 for(const file of globSync('public/sitemap-*.xml')){
  const xml=readFileSync(file,'utf8');const locs=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
  assert.equal(new Set(locs).size,locs.length,`${file}: duplicate sitemap URL`);
  for(const url of locs){const path=pageFile(url);assert.ok(existsSync(path),url);const html=readFileSync(path,'utf8');assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),url);assert.equal(html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],url);}
 }
});
test('marketing terminology is restored without removing Portuguese legal disclosures',()=>{
 assert.match(readFileSync('public/en/index.html','utf8'),/insurance broker/);
 assert.match(readFileSync('public/de/index.html','utf8'),/Versicherungsmakler/);
 assert.match(readFileSync('scripts/build-car-cluster.mjs','utf8'),/ASF-registered insurance broker/);
 for(const path of ['/en/private-clients/','/en/private-clients-spain/'])assert.match(readFileSync(pageFile(path),'utf8'),/non-tied insurance agent/);
 for(const path of ['/de/private-clients/','/de/private-clients-portugal/'])assert.match(readFileSync(pageFile(path),'utf8'),/agente de seguros/);
});
