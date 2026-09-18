import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { routes } from './lib/quotation-routes.mjs';
import { quoteStrings, correctQuotationHtml } from './lib/quotation-forms.mjs';
import { buildQuoteRequestRow } from '../netlify/functions/lib/quote-requests-sync.mjs';
import { buildCustomerAcknowledgement, buildIntakeEmail, HANDLED_FORMS } from '../netlify/functions/submission-created.mjs';
const { JSDOM }=createRequire(import.meta.url)('jsdom');
const runtime=['lead-branch-fields.js','quote-validators.js','ar-quote-form.js','quote-nationality.js','quote-wizard.js','quote-field-toggle.js','quote-health-persons.js'].map(f=>readFileSync('public/js/'+f,'utf8'));
function dom(html,seed){const d=new JSDOM(html,{url:'https://adlerrochefort.com/test/',runScripts:'outside-only'});d.window.HTMLElement.prototype.scrollIntoView=()=>{};d.window.fetch=async()=>({ok:true});if(seed)for(const [k,v]of Object.entries(seed))d.window.localStorage.setItem(k,v);runtime.forEach(s=>d.window.eval(s));d.window.document.dispatchEvent(new d.window.Event('DOMContentLoaded'));return d;}
for(const [lang,products]of Object.entries(routes))for(const [ramo,url]of Object.entries(products))test(`${lang}/${ramo}: complete existing pipeline contract`,()=>{
 const html=readFileSync('public'+url.split('#')[0]+'index.html','utf8');const d=dom(html);const doc=d.window.document;const f=doc.querySelector('form[data-wizard]');assert.ok(f,url);assert.equal(f.querySelectorAll('[data-wizard-step]').length,3);assert.ok(HANDLED_FORMS[f.name]);
 const name=n=>f.querySelector(`[name="${n}"]`);
 for(const group of [['nome','name'],['nif'],['data_nascimento','date_of_birth'],['morada','address'],['localidade','town'],['codigo_postal','postal_code','postcode'],['telefone','phone'],['email'],['residente_fiscal','tax_resident_pt'],['data_inicio','start_date'],['rgpd']])assert.ok(group.some(n=>name(n)?.required),`${url}: ${group}`);
 const dob=name('data_nascimento')||name('date_of_birth');assert.equal(dob.dataset.validate,'birth-date-adult');dob.value='2020-01-01';assert.equal(d.window.ArQuoteForm.validateField(dob,f),false);
 assert.equal(doc.querySelectorAll('#nationality-list option').length,249);
 if(ramo==='auto'){assert.ok(name('matricula').required);assert.ok(name('data_carta').required);}
 if(ramo==='habitacao')for(const n of ['regime_ocupacao','ano_construcao','area_bruta','casas_banho','capital_edificio','capital_conteudo'])assert.ok(name(n).required,n);
 if(ramo==='habitacao'){const area=name('area_bruta');area.value='125.5';assert.equal(d.window.ArQuoteForm.validateField(area,f),true);area.value='-1';assert.equal(d.window.ArQuoteForm.validateField(area,f),false);}
 if(ramo==='profissional')assert.ok(name('faturacao_anual').required);
 if(ramo==='saude'){
  const count=f.querySelector('[data-persons-count]');count.value='3';count.dispatchEvent(new d.window.Event('change',{bubbles:true}));assert.equal(f.querySelectorAll('[data-person-block]').length,3);
  const dates=f.querySelectorAll('[data-person-field="data_nascimento"]');dates.forEach(el=>{el.value='2020-01-01';assert.equal(d.window.ArQuoteForm.validateField(el,f),true);});
  dates[0].value='2999-01-01';assert.equal(d.window.ArQuoteForm.validateField(dates[0],f),false);
 }
 const row=buildQuoteRequestRow(f.name,{nome:'Quotation test',email:'test@example.com',lang,rgpd:'sim',matricula:'aa00aa',dados_dinamicos:ramo==='saude'?JSON.stringify([{nome:'Child',data_nascimento:'2020-01-01',nif:'501442600'}]):''});assert.equal(row.lingua,lang);assert.equal(row.ramo,ramo);assert.equal(row.consentimento.aceite,true);if(ramo==='saude')assert.equal(row.pessoas_seguras[0].data_nascimento,'2020-01-01');
 const ack=buildCustomerAcknowledgement(f.name,{email:'test@example.com',lang});assert.equal(ack.subject,quoteStrings[lang].common.acknowledgement.subject);assert.ok(ack.html.includes(`lang="${lang}"`));
 const email=buildIntakeEmail(HANDLED_FORMS[f.name],{nome:'Quotation test',email:'test@example.com',lang,custom_underwriting:'Complete risk details'},{});assert.ok(email.html.includes('Complete risk details'));
 assert.equal(correctQuotationHtml(html),html,'form source must be idempotent');d.window.close();
});
test('Home hides, clears and excludes AL and renovations; drafts restore active renovations',()=>{
 const html=readFileSync('public/en/home-insurance-quote/index.html','utf8');let d=dom(html),f=d.window.document.querySelector('form[data-wizard]');
 const change=el=>el.dispatchEvent(new d.window.Event('change',{bubbles:true}));
 const occupancy=f.elements.regime_ocupacao;occupancy.value='alojamento_local';change(occupancy);f.elements.al_regime.value='parcial';occupancy.value='permanente';change(occupancy);assert.equal(f.elements.al_regime.value,'');assert.equal(new d.window.FormData(f).has('al_regime'),false);
 const trigger=f.querySelector('[data-field-toggle]');trigger.checked=true;change(trigger);f.elements.obras_ano.value='2020';f.elements.obras_descricao.value='Electrical installation';change(f.elements.obras_descricao);
 const key='ar_quote_draft_'+f.name,seed={[key]:d.window.localStorage.getItem(key)};d.window.close();d=dom(html,seed);f=d.window.document.querySelector('form[data-wizard]');assert.equal(f.querySelector('[data-field-toggle]').checked,true);assert.equal(f.elements.obras_descricao.disabled,false);assert.equal(f.elements.obras_descricao.value,'Electrical installation');
 const restored=f.querySelector('[data-field-toggle]');restored.checked=false;change(restored);assert.equal(f.elements.obras_descricao.value,'');assert.equal(new d.window.FormData(f).has('obras_descricao'),false);d.window.close();
});
test('Health draft preserves children and number, and removed people cannot leak',()=>{
 const html=readFileSync('public/en/health-insurance-quote/index.html','utf8');let d=dom(html),f=d.window.document.querySelector('form[data-wizard]');const count=f.querySelector('[data-persons-count]');count.value='2';count.dispatchEvent(new d.window.Event('change',{bubbles:true}));const cards=f.querySelectorAll('[data-person-block]');cards.forEach((c,i)=>{for(const [k,v]of Object.entries({nome:'Person '+i,data_nascimento:'2020-01-01',nif:'501442600'}))c.querySelector(`[data-person-field="${k}"]`).value=v;});cards[1].dispatchEvent(new d.window.Event('input',{bubbles:true}));const key='ar_quote_draft_'+f.name,seed={[key]:d.window.localStorage.getItem(key)};d.window.close();d=dom(html,seed);f=d.window.document.querySelector('form[data-wizard]');assert.equal(f.querySelectorAll('[data-person-block]').length,2);assert.equal(f.querySelectorAll('[data-person-field="nome"]')[1].value,'Person 1');f.querySelectorAll('[data-person-remove]')[1].click();assert.equal(JSON.parse(f.elements.dados_dinamicos.value).length,1);d.window.close();
});
test('calendar dates reject impossible days; Portuguese validation independent of language',()=>{const d=dom('<html lang="en"><body></body></html>'),v=d.window.QuoteValidators;assert.equal(v.isNotFutureDate('2025-02-31'),false);assert.equal(v.isValidNif('501442600'),true);assert.equal(v.isValidNif('501442601'),false);for(const [raw,want]of [['aa0000','AA-00-00'],['00aa00','00-AA-00'],['0000aa','00-00-AA'],['aa00aa','AA-00-AA']])assert.equal(v.normalizePlate(raw),want);assert.equal(v.formatPostalCode('8600324'),'8600-324');assert.equal(v.isStartDateValid('2000-01-01'),false);d.window.close();});
test('Private Client consent is recorded by existing quote storage',()=>{const row=buildQuoteRequestRow('private-client-review-portugal',{name:'Test',privacy:'accepted'});assert.equal(row.consentimento.aceite,true);});

test('existing handler sends both translated acknowledgements and full internal data, then inserts through the existing table',async()=>{
 const {default:handler}=await import('../netlify/functions/submission-created.mjs');
 const originalFetch=globalThis.fetch;const env={...process.env};const requests=[];
 process.env.RESEND_API_KEY='re_test_dummy';process.env.SUPABASE_URL='https://quotation-test.invalid';process.env.SUPABASE_SERVICE_ROLE_KEY='test-only';delete process.env.ADLERPRO_CRM_SYNC_URL;
 globalThis.fetch=async(url,options={})=>{requests.push({url:String(url),body:options.body?JSON.parse(options.body):null});return new Response(JSON.stringify({id:'test-message'}),{status:200,headers:{'content-type':'application/json'}});};
 try{
  const response=await handler(new Request('https://test.invalid',{method:'POST',body:JSON.stringify({payload:{id:'test-local-submission',form_name:'fr-quote-saude',data:{nome:'Synthetic example',email:'example@example.invalid',lang:'fr',rgpd:'sim',dados_dinamicos:JSON.stringify([{nome:'Child',data_nascimento:'2020-01-01',nif:'501442600'}])}}})}));
  assert.equal(response.status,200);const emails=requests.filter(r=>r.url.includes('api.resend.com'));assert.equal(emails.length,2);assert.ok(emails.some(r=>r.body.to.includes('example@example.invalid')&&r.body.html.includes('lang="fr"')));assert.ok(emails.some(r=>r.body.to.includes('insurance@adlerrochefort.com')&&r.body.html.includes('Child')));const insert=requests.find(r=>r.url.endsWith('/rest/v1/quote_requests'));assert.equal(insert.body.lingua,'fr');assert.equal(insert.body.pessoas_seguras[0].nome,'Child');assert.equal(insert.body.consentimento.aceite,true);
 }finally{globalThis.fetch=originalFetch;for(const k of Object.keys(process.env))if(!(k in env))delete process.env[k];Object.assign(process.env,env);}
});

test('all corrected enquiry quotation links reach complete product forms',async()=>{
 const {default:mapping}=await import('../data/quotation-enquiry-routes.json',{with:{type:'json'}});
 for(const [url,product]of Object.entries(mapping)){
  const html=readFileSync('public'+url+'index.html','utf8');const lang=url.split('/')[1];if(product) {assert.ok(html.includes(`href="${routes[lang][product]}"`),url);assert.ok(!/href="#(?:ar-quote-form|quote-form)"/.test(html),url);} else {assert.ok(!html.includes('quotation-enquiry-note'),url);assert.ok(!html.includes('<h2>Get a free, no-obligation quote</h2>'),url);}assert.ok(html.includes('data-quotation-enquiry'),url);assert.ok(html.includes(quoteStrings[lang].common.enquirySubmit),url);assert.equal(correctQuotationHtml(html),html,url);
 }
});


test('PT RC and TVDE editorial entry points cannot submit reduced quotation payloads',()=>{
 const routes={
  '/blog/responsabilidade-civil-massagistas/':'/seguros/rc-massagistas/',
  '/blog/responsabilidade-civil-medicina-tradicional-chinesa/':'/seguros/rc-terapeuticas-nao-convencionais/',
  '/blog/responsabilidade-civil-num-evento-portugal/':'/seguros/responsabilidade-civil-eventos/',
  '/blog/responsabilidade-civil-profissional/':'/seguros/responsabilidade-civil-profissional/',
  '/blog/seguro-responsabilidade-civil-acupuntores/':'/seguros/rc-terapeuticas-nao-convencionais/',
  '/blog/seguro-responsabilidade-civil-naturopatas/':'/seguros/rc-terapeuticas-nao-convencionais/',
  '/blog/seguro-responsabilidade-civil-terapeuticas-nao-convencionais/':'/seguros/rc-terapeuticas-nao-convencionais/',
  '/blog/seguro-tvde-portugal/':'/seguros/tvde/',
 };
 for(const [url,target] of Object.entries(routes)){
  const html=readFileSync('public'+url+'index.html','utf8');
  assert.ok(html.includes('Antes de preencher'),url);
  assert.ok(html.includes(target),url);
  assert.ok(!html.includes('name="cotacao-blog"'),url);
  assert.ok(!html.includes('name="rcp_capital"'),url);
  assert.ok(!/<label[^>]*>Capital pretendido/.test(html),url);
 }
});

test('PT canonical RC form follows the approved v2 data model and PT qualification blocks remain',()=>{
 const html=readFileSync('public/seguros/responsabilidade-civil-profissional/index.html','utf8');
 const d=dom(html),f=d.window.document.querySelector('form[name="cotacao-rc-profissional"]');
 for(const n of ['nome','nif','data_nascimento','morada','localidade','codigo_postal','telefone','email','nacionalidade_nome','residente_fiscal','faturacao_anual','data_inicio','rgpd']) assert.ok(f.elements[n],n);
 for(const n of ['rcp_profissao','rcp_capital','rcp_obrigatorio']) assert.equal(f.elements[n],undefined,n);
 assert.ok(html.includes('Antes de preencher'));
 d.window.close();

 const pages=[
  'public/index.html',
  'public/seguros/tvde/index.html',
  'public/seguros/rc-massagistas/index.html',
  'public/seguros/rc-terapeuticas-nao-convencionais/index.html',
  'public/seguros/responsabilidade-civil-profissional/index.html',
  'public/seguros/responsabilidade-civil-eventos/index.html',
 ];
 for(const path of pages) assert.ok(readFileSync(path,'utf8').includes('Antes de preencher'),path);
 const events=readFileSync('public/seguros/responsabilidade-civil-eventos/index.html','utf8');
 assert.ok(!events.includes('name="ev_capital"'));
 assert.ok(!events.includes('Capital pretendido (se souber)'));
});
