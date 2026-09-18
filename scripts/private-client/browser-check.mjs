import { chromium } from 'playwright';
import fs from 'node:fs';
// Optional local QA: start an HTTP server for public/ first. No live submissions.
const base=process.env.PRIVATE_CLIENT_BASE_URL || 'http://localhost:8765';
const browser=await chromium.launch({headless:true});
const routes=['/en/private-clients/','/en/private-clients-spain/','/de/private-clients/','/de/private-clients-portugal/','/de/versicherung-tavira/'];
const results=[];
for(const width of [1440,390,320]){
 const page=await browser.newPage({viewport:{width,height:960}});
 for(const path of routes){
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+path);
  await page.evaluate(()=>document.fonts.ready);
  const overflow=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
  if(overflow.scroll>width)throw new Error(`${path} overflow ${JSON.stringify(overflow)}`);
  await page.screenshot({path:`/tmp/adler-pc-${path.split('/').filter(Boolean).join('-')}-${width}.png`,fullPage:true});
  let submitted;
  await page.route('**/*',async route=>{
    if(route.request().method()==='POST'){submitted=new URLSearchParams(route.request().postData());return route.fulfill({status:200,body:'ok'});}return route.continue();
  });
  const form=page.locator('form[data-private-client-form]');
  await form.locator('[name="name"]').fill('TESTE-AGENTE-NAO-PROCESSAR assistant');
  await form.locator('[name="email"]').fill('test@example.com');
  await form.locator('[name="role"]').selectOption('assistant');
  if(!await form.locator('[name="authority"]').evaluate(e=>e.required))throw new Error('authority must be required for representative');
  await form.locator('[name="authority"]').selectOption('yes');
  await form.locator('[name="country"]').selectOption('Portugal and Spain');
  await form.locator('[name="risks"][value="art-collections"]').check();
  await form.locator('[name="risks"][value="international-health"]').check();
  await form.locator('[name="privacy"]').check();
  await form.locator('button').click();
  await page.waitForFunction(()=>document.querySelector('[data-form-status]').textContent.match(/Thank you|Vielen Dank/));
  if(submitted.getAll('risks').join(',')!=='art-collections,international-health')throw new Error('checkbox values lost');
  if(submitted.get('country')!=='Portugal and Spain')throw new Error('country lost');
  if(submitted.get('authority')!=='yes')throw new Error('authority lost');
  // Error handling retains entered values and re-enables retry.
  await page.unroute('**/*');
  await page.route('**/*',r=>r.request().method()==='POST'?r.fulfill({status:500,body:'failed'}):r.continue());
  await form.locator('[name="name"]').fill('Retry Test');await form.locator('[name="email"]').fill('test@example.com');
  await form.locator('[name="role"]').selectOption('client');await form.locator('[name="privacy"]').check();await form.locator('button').click();
  await page.waitForFunction(()=>document.querySelector('[data-form-status]').textContent.match(/could not|konnte nicht/));
  if(await form.locator('[name="name"]').inputValue()!=='Retry Test')throw new Error('retry lost input');
  if(errors.length)throw new Error(errors.join(';'));
  results.push({path,width,overflow:false,checkboxes:submitted.getAll('risks'),formName:submitted.get('form-name'),successAndRetry:true});
  await page.unroute('**/*');
 }
 await page.close();
}
await browser.close();fs.writeFileSync('/tmp/adler-private-browser-results.json',JSON.stringify(results,null,2));console.log(`${results.length} responsive page/form checks passed`);
