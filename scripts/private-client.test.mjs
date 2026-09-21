import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, globSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { PRIVATE_CLIENT_PAGES, renderPrivateClient } from './private-client/render.mjs';
import { normalisePrivateClientLanguage } from './private-client/normalise.mjs';
import { classifySubmission } from '../netlify/functions/lib/lead-classification.mjs';
import { buildCrmLeadPayload } from '../netlify/functions/lib/crm-sync.mjs';
import { HANDLED_FORMS, buildIntakeEmail } from '../netlify/functions/submission-created.mjs';
import { EN_BROKER, EN_INDEPENDENCE, EN_RELATIONSHIP, DE_INDEPENDENCE } from './lib/terminology-rules.mjs';
const origin='https://adlerrochefort.com';
for(const page of PRIVATE_CLIENT_PAGES) test(`${page.url}: generated source, canonical, JSON-LD, links and form registration`,()=>{
 const html=readFileSync(`public${page.url}index.html`,'utf8');
 assert.equal(html,renderPrivateClient(page),'generated source drift');
 assert.equal((html.match(/<h1>/g)||[]).length,1);
 assert.ok(html.includes(`<link rel="canonical" href="${origin+page.url}">`));
 assert.ok(!html.includes('hreflang='),'not exact translation equivalents');
 for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) assert.ok(JSON.parse(json)['@type']);
 for(const [,href] of html.matchAll(/href="([^"\s]+)"/g)) {
   if(!href.startsWith('/')&&!href.startsWith('#'))continue;
   const url=new URL(href,origin+page.url);
   const path=`public${url.pathname}${url.pathname.endsWith('/')?'index.html':''}`;
   assert.ok(existsSync(path),`missing link ${href}`);
   if(url.hash)assert.ok(readFileSync(path,'utf8').includes(`id="${url.hash.slice(1)}"`),`missing anchor ${href}`);
 }
 assert.ok(HANDLED_FORMS[page.formName]);
 assert.ok(html.includes(`name="form-name" value="${page.formName}"`));
 assert.ok(html.includes('data-netlify="true"'));
 assert.ok(!html.includes('type="checkboxes"'));
 assert.equal((html.match(/type="checkbox" name="risks"/g)||[]).length,15);
 for(const name of ['name','email','phone','contact_method','role','authority','country','property_count','locations','existing_insurance','renewal_approaching','valuations','requirements','privacy'])assert.ok(html.includes(`name="${name}"`));
 assert.ok(!/<input[^>]+name="(?:nif|dob|date_of_birth|address)"/.test(html));
 assert.ok(html.includes('agente de seguros') || html.includes('non-tied insurance agent'),'Portuguese regulatory disclosure retained');
 const designation=page.lang==='de'?'Versicherungsmakler · in Portugal bei der ASF als „agente de seguros não ligado“ registriert · Nr. 425591790/3':'Insurance broker · registered in Portugal with the ASF as a non-tied insurance agent · No. 425591790/3';
 assert.equal(html.match(/<div class="topline">([^<]+)<\/div>/)?.[1],designation,'visible commercial designation and regulatory category');
 assert.ok(html.match(/<footer>[\s\S]*?<\/footer>/)?.[0].includes(designation),'footer retains combined designation');
 assert.equal(normalisePrivateClientLanguage(designation,page.lang),designation,'normalizer must preserve combined designation');
 const service=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).find(s=>s['@type']==='Service');
 assert.equal(service.provider['@type'],'InsuranceAgency');
 assert.equal(service.provider.description,'Adler & Rochefort is an insurance broker. Ownizo, Unipessoal Lda. is registered in Portugal with the ASF as a non-tied insurance agent, no. 425591790/3.');
 const sitemap=readFileSync('public/sitemap-pages.xml','utf8');
 assert.ok(sitemap.includes(`<loc>${origin+page.url}</loc>`));
});
for(const name of ['private-client-review-portugal','private-client-review-spain','private-client-review-de'])for(const country of ['Portugal','Spain','Portugal and Spain'])test(`${name}: ${country} classification and representative payload`,()=>{
 const data={name:'Test Assistant',email:'test@example.com',country,role:'assistant',authority:'yes',risks:['art-collections','health'],requirements:'Sensitive household context',locations:'Private location',contact_method:'email',privacy:'accepted'};
 const classification=classifySubmission(name,data);
 assert.equal(classification.market,country==='Spain'?'ES':'PT');
 assert.equal(classification.language,name.endsWith('-de')?'DE':'EN');
 assert.equal(classification.product,'private-client');
 const {payload}=buildCrmLeadPayload(name,data);
 assert.deepEqual(payload.metadata.countries,country==='Portugal and Spain'?['PT','ES']:[classification.market]);
 assert.equal(payload.metadata.contactRole,'assistant');
 assert.equal(payload.metadata.authority,'yes');
 assert.ok(!JSON.stringify(payload).includes('Sensitive household context'));
 assert.ok(!JSON.stringify(payload).includes('Private location'));
 const email=buildIntakeEmail(HANDLED_FORMS[name],data,{created_at:'2026-09-18T12:00:00Z'});
 assert.ok(email.html.includes('Sensitive household context'));
 assert.ok(email.html.includes('art-collections'));
 assert.ok(email.html.includes('health'));
 assert.ok(email.html.includes('No underwriting or quotation deadline was promised'));
});
test('unchanged PT classification and source scope',()=>{
 assert.equal(classifySubmission('private-clients-review',{}).product,'private-clients');
 const files=execFileSync('git',['diff','HEAD','--name-only'],{encoding:'utf8'}).trim().split('\n');
 // Quotation corrections may change PT forms, but never surrounding PT copy.
 // The RC/wizard-css hotfix also adds the missing wizard stylesheet link to
 // <head> on pages that needed it — a chrome fix, not editorial copy.
 const outsideForms = html => html.replace(/<form\b[^>]*>[\s\S]*?<\/form>/g, '').replace(/<nav class="quotation-routes"[\s\S]*?<\/nav>/g, '').replace(/^.*charCount.*$/gm, '').replace(/<link rel="stylesheet" href="\/css\/ar-quote-wizard\.css">\n?/g, '').replace(/\s+/g, ' ');
 for (const file of files.filter(f => /^public\/(?:index.html|seguros\/.*\.html)$/.test(f))) {
   const before=execFileSync('git',['show',`HEAD:${file}`],{encoding:'utf8'});
   assert.equal(outsideForms(readFileSync(file,'utf8')),outsideForms(before),`${file}: unrelated PT content changed`);
 }
 for(const sitemap of ['pages','blog']){
 const file=`public/sitemap-${sitemap}.xml`;
 const before=execFileSync('git',['show',`HEAD:${file}`],{encoding:'utf8'});
 const after=readFileSync(file,'utf8');
 const protectedEntries=s=>(s.match(/<url>[\s\S]*?<\/url>/g)||[]).filter(e=>!/<loc>https:\/\/adlerrochefort.com\/(en|de)\//.test(e));
 assert.deepEqual(protectedEntries(after),protectedEntries(before));
 }
});
test('terminology keeps third parties, real-estate agents and URLs intact',()=>{
 const text='Your real-estate broker and a third-party broker. Makler für Immobilien. href="/en/why-use-an-insurance-broker/"';
 assert.equal(normalisePrivateClientLanguage(text,'en'),text);
 assert.ok(!/intermediaryage|vian intermediary/i.test(normalisePrivateClientLanguage('Insurance Brokerage services; insurance brokerage services; English explanation via broker','en')));
 assert.equal(normalisePrivateClientLanguage(text,'de'),text);
 const marketing='English-speaking insurance broker. One broker across both markets. Why Use an Insurance Broker';
 assert.equal(normalisePrivateClientLanguage(marketing,'en'),marketing);
 const german='Deutschsprachiger Versicherungsmakler. Als Makler sind wir nicht an einen einzigen Versicherer gebunden. Maklerwechsel';
 assert.equal(normalisePrivateClientLanguage(german,'de'),german);
 const legal='Ownizo, Unipessoal Lda., insurance intermediary registered with the Autoridade. Portuguese ASF-registered non-tied insurance agent. In Portugal als „agente de seguros“ registriert.';
 assert.equal(normalisePrivateClientLanguage(legal,'en'),legal);
 assert.equal(normalisePrivateClientLanguage(legal,'de'),legal);
});
test('language-scoped normalization is idempotent',()=>{
 for(const lang of ['en','de'])for(const file of globSync(`public/${lang}/**/*.html`)){
 const source=readFileSync(file,'utf8');
 assert.ok(!/\b(?:[Aa] insurance broker|[Aa]n broker)\b/.test(source),file+' grammatical article');
 const once=normalisePrivateClientLanguage(source,lang);
 assert.equal(normalisePrivateClientLanguage(once,lang),once,file);
 }
});
