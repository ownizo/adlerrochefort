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
 assert.ok(!/\b(?:broker|Versicherungsmakler|Makler)\b/.test(html));
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
 assert.deepEqual(files.filter(f=>f.startsWith('public/')&&!/^public\/(en|de)\//.test(f)&&!/^public\/sitemap-(pages|blog)\.xml$/.test(f)),[]);
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
 for(const rules of [EN_BROKER,EN_INDEPENDENCE,EN_RELATIONSHIP,DE_INDEPENDENCE])for(const [,to] of rules) assert.ok(!/\b(?:broker|brokers|Versicherungsmakler|Makler)\b/.test(to),to);
});
test('language-scoped normalization is idempotent',()=>{
 for(const lang of ['en','de'])for(const file of globSync(`public/${lang}/**/*.html`)){
 const source=readFileSync(file,'utf8');
 const once=normalisePrivateClientLanguage(source,lang);
 assert.equal(normalisePrivateClientLanguage(once,lang),once,file);
 }
});
