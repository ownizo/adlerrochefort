// Local preview on port 8766; all POSTs are intercepted, never sent to production.
import {chromium} from 'playwright';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true});const routes=JSON.parse(fs.readFileSync(new URL('../data/quotation-routes.json',import.meta.url)));
const results=[];
for(const width of [1440,390,320]){
const page=await browser.newPage({viewport:{width,height:960}});
await page.route('**/*',route=>{const u=new URL(route.request().url());if(u.hostname!=='localhost')return route.abort();if(route.request().method()==='POST')return route.fulfill({status:200,body:'ok'});return route.continue();});
for(const lang of Object.keys(routes))for(const [product,url] of Object.entries(routes[lang])){
const errors=[];const listener=e=>errors.push(e.message);page.on('pageerror',listener);
await page.goto('http://localhost:8766'+url,{waitUntil:'load'});
const form=page.locator('form[data-wizard]');await form.scrollIntoViewIfNeeded();
const overflow=await page.evaluate(()=>({page:document.documentElement.scrollWidth,viewport:innerWidth,form:document.querySelector('form[data-wizard]').getBoundingClientRect().width}));
const formOverflow=await form.evaluate(f=>[...f.querySelectorAll('input,select,textarea,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left<0||r.right>innerWidth+1)}).map(e=>e.name||e.tagName));if(formOverflow.length)throw Error(`${lang} ${width}: form overflow ${formOverflow}`);
if(lang==='he'){const dirs=await form.locator('[name="nif"], [name="codigo_postal"]').evaluateAll(els=>els.map(e=>getComputedStyle(e).direction));if(dirs.some(x=>x!=='ltr'))throw Error('RTL numeric field');}
if(product==='habitacao'&&['he','zh','fr','en'].includes(lang))await page.screenshot({path:`/tmp/adler-quotation-${lang}-${width}.png`,fullPage:false});
if(product==='saude') {
 const minorsAccepted=await form.evaluate(f=>{const count=f.querySelector('[data-persons-count]');count.value='2';count.dispatchEvent(new Event('change',{bubbles:true}));const dates=[...f.querySelectorAll('[data-person-field="data_nascimento"]')];return dates.length===2&&dates.every(el=>{el.value='2020-01-01';return window.ArQuoteForm.validateField(el,f);});});
 if(!minorsAccepted)throw Error(`${lang}: insured children rejected`);
}
for(const step of [1,2]) {
 await page.evaluate(step=>window.QuoteWizard.instances[0].goToStep(step),step);
 const escaped=await form.evaluate(f=>[...f.querySelectorAll('input,select,textarea,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left<0||r.right>innerWidth+1)}).map(e=>e.name||e.tagName));
 if(escaped.length)throw Error(`${lang}/${step}/${width}: ${escaped}`);
}
if(errors.length)throw Error(`${url}: ${errors.join(';')}`);results.push({lang,product,width,overflow,errors});page.off('pageerror',listener);
}
for(const tree of ['','en','de','nl','fr','pl','se','dk','zh','il']){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://localhost:8766/'+(tree?tree+'/':''));
 const forms=page.locator('form[data-netlify]');const count=await forms.count();
 for(let i=0;i<count;i++){const f=forms.nth(i);const fieldCount=await f.locator('input:not([type="hidden"]):not([name="bot-field"]),select,textarea').count();if(fieldCount!==5)throw Error(`${tree} homepage ${i}: ${fieldCount} fields`);}
 const posted=page.waitForResponse(r=>r.request().method()==='POST',{timeout:5000});
 await forms.first().evaluate(f=>{for(const e of f.querySelectorAll('input[required],select[required]')){if(e.tagName==='SELECT'){e.value=[...e.options].find(o=>o.value&&!o.disabled).value;}else e.value=e.type==='email'?'test@example.invalid':'Quotation test';}f.requestSubmit();});
 await posted;
 if(errors.length)throw Error(`${tree} homepage errors: ${errors.join(';')}`);
}
await page.close();}
await browser.close();fs.writeFileSync('/tmp/adler-quotation-browser-results.json',JSON.stringify(results,null,2));console.log(`${results.length} language/product/viewport combinations passed across all three steps; 30 homepage submissions passed with phone/company empty.`);
