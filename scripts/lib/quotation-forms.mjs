import enquiryRoutes from '../../data/quotation-enquiry-routes.json' with { type: 'json' };
import routes from '../../data/quotation-routes.json' with { type: 'json' };
// Form-only corrections shared by authored pages and the existing page generators.
// Does not replace page chrome, editorial copy, form identity or submission handlers.
import { readFileSync } from 'node:fs';
const langs=['pt','en','nl','de','fr','pl','sv','da','zh','he'];
export const quoteStrings=Object.fromEntries(langs.map(lang=>[lang,JSON.parse(readFileSync(new URL(`../../data/i18n/quote-form/${lang}.json`,import.meta.url)))]));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function quotationRoutes(lang) {
 const t=quoteStrings[lang];
 return `<nav class="quotation-routes" aria-label="${t.common.chooseProduct}"><p>${t.common.chooseProduct}</p><ul>${Object.entries(routes[lang]||{}).map(([ramo,url])=>`<li><a href="${url}">${t.ramos[ramo].titulo}</a></li>`).join('')}</ul></nav>`;
}
export function correctQuotationHtml(html,{homepage=false}={}) {
 const lang=(html.match(/<html[^>]*lang="([^"]+)/)?.[1]||'pt').slice(0,2);
 const t=quoteStrings[lang];if(!t)return html;
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="https:\/\/adlerrochefort.com([^"?#]*)/)?.[1];
 const product=enquiryRoutes[canonical];
 // A null route preserves a specialist/claims enquiry: a standard household
 // product wizard would misclassify that risk. No underwriting fields are removed.
 if(Object.hasOwn(enquiryRoutes,canonical) && !html.includes('data-wizard')) {
  const target=product ? routes[lang][product] : null;
  if(target) html=html.replace(/href="#(?:quote-form|ar-quote-form|angebot|cotacao)"/g,`href="${target}"`);
  // Rebuild only our explanatory note so corrected route assignments converge.
  html=html.replace(/<p class="quotation-enquiry-note">[\s\S]*?<\/p>/g,'');
  html=html.replace(/<form\b[^>]*>[\s\S]*?<\/form>/g,form=>{
   if(!form.includes('data-netlify'))return form;
   const note=target ? `<p class="quotation-enquiry-note">${esc(t.common.enquiryIntro)} <a href="${target}">${esc(t.ramos[product].titulo)}</a></p>` : '';
   if(!form.includes('data-quotation-enquiry')) form=form.replace('<form','<form data-quotation-enquiry');
   return note+form.replace(/(<button[^>]*type="submit"[^>]*>)[\s\S]*?(<\/button>)/,'$1'+esc(t.common.enquirySubmit)+'$2');
  });
  // This local widget is now explicitly an enquiry, not the quotation intake.
  html=html.replace(/(<div[^>]*id="ar-quote-form"[^>]*>\s*<h2>)[\s\S]*?(<\/h2>)/,'$1'+esc(t.common.enquirySubmit)+'$2');
  if(!target) html=html.replace(/(<a[^>]*href="#ar-quote-form"[^>]*>)[^<]*(<\/a>)/g,'$1'+esc(t.common.enquirySubmit)+'$2');
 }


 html = html.replace(/<form\b[^>]*>[\s\S]*?<\/form>/g,form=>{
  if(homepage && !form.includes('data-private-client-form'))return shortForm(form,t,lang);
  if(!/\bdata-wizard\b/.test(form))return form;
  form=form.replace(/(<input\b[^>]*\bname="(?:data_nascimento|date_of_birth)"[^>]*data-validate=")birth-date("[^>]*>)/g,'$1birth-date-adult$2');
  if(!/name="lang"/.test(form))form=form.replace(/(<input[^>]*name="form-name"[^>]*>)/,'$1\n<input type="hidden" name="lang" value="'+lang+'">');
  form=form.replace(/(<select\b[^>]*name="al_regime"[^>]*>)([\s\S]*?)(<\/select>)/g,(_,a,b,c)=>a+b.replace(/(<option value="tempo_inteiro">)[\s\S]*?(<\/option>)/,'$1'+esc(t.ramos.habitacao.al_regime_tempo_inteiro)+'$2').replace(/(<option value="parcial">)[\s\S]*?(<\/option>)/,'$1'+esc(t.ramos.habitacao.al_regime_parcial)+'$2')+c);
  form=form.replace(/(<label\b[^>]*>\s*<input[^>]*data-field-toggle="[^"]+"[^>]*>)[\s\S]*?(<\/label>)/g,'$1 '+esc(t.ramos.habitacao.obras_renovacao_check)+'$2');
  form=form.replace(/<input\b[^>]*data-field-toggle="[^"]+"[^>]*>/g, input => /\bname=/.test(input) ? input : input.replace(/>$/, ' name="obras_renovacao" value="sim">'));
  if(form.includes('name="regime_ocupacao"')) {
   const address=form.match(/<input[^>]*name="(?:morada|address)"[^>]*>/)?.[0];
   const id=address?.match(/\bid="([^"]+)"/)?.[1];
   if(id)form=form.replace(new RegExp('(<label[^>]*for="'+id+'"[^>]*>)[\\s\\S]*?(<\\/label>)'),'$1'+esc(t.ramos.habitacao.morada_imovel)+' *$2');
  }
  form=form.replace(/<input\b[^>]*name="(?:area_bruta|capital_edificio|capital_conteudo|faturacao_anual)"[^>]*>/g, input => /\bstep=/.test(input) ? input : input.replace(/>$/, ' step="0.01">'));
  // Static registration matters: Netlify must see the count at build time.
  if(form.includes('data-persons-repeater')&&!form.includes('data-persons-count'))form=form.replace(/(<div[^>]*data-persons-repeater[^>]*>)/,'$1\n<div class="contact-form-field"><label for="quote-persons-count">'+esc(t.ramos.saude.pessoas_numero)+' *</label><input id="quote-persons-count" type="number" name="numero_pessoas" data-persons-count min="1" max="10" step="1" value="1" required></div>');
  form=form.replace(/<input\b[^>]*type="tel"[^>]*>/g, input => input.includes('placeholder=') ? input : input.replace(/>$/, ' placeholder="+351 …">'));
  return form;
 });
 // Existing inline validators must respect optional homepage phone fields.
 if (homepage) html = html.replaceAll('if (!field) return true;', 'if (!field || (!field.required && !field.value)) return true;');
 if (homepage && !html.includes("if (document.getElementById('charCount'))")) html=html.replace("document.getElementById('charCount').textContent = '0';", "if (document.getElementById('charCount')) document.getElementById('charCount').textContent = '0';");
 if (homepage) html=html.replace(/<nav class="quotation-routes"[\s\S]*?<\/nav>/g,quotationRoutes(lang));
 if (homepage && !html.includes('class="quotation-routes"')) html = html.replace(/(<form\b[^>]*data-netlify)/, quotationRoutes(lang)+'\n$1');
 if (lang === 'en') html=html.replace(/<div class="lp-form-trust">[\s\S]*?<\/div>/g, block => block.replaceAll('ASF-registered insurance intermediary', 'ASF-registered insurance broker'));
 return html;
}
function shortForm(form,t,lang) {
 if(!/data-netlify/.test(form))return form;
 const opening=form.match(/^<form[^>]*>/)[0].replace(/\snovalidate(?:="[^"]*")?/g,'');
 const inputs=[...form.matchAll(/<(?:input|select|textarea)\b[^>]*>/g)].map(m=>m[0]);
 const find=names=>inputs.find(s=>names.some(n=>s.includes(`name="${n}"`)));
 const field=(names,key,type,required)=>{
  const old=find(names);const name=old?.match(/name="([^"]+)"/)?.[1]||names[0];
  const id=old?.match(/\bid="([^"]+)"/)?.[1]||`${form.match(/\bname="([^"]+)"/)[1]}-${name}`;
  return `<div class="contact-form-field form-field field"><label for="${id}">${esc(t.common.fields[key])}${required?' *':''}</label><input type="${type}" id="${id}" name="${name}"${required?' required':''}${type==='tel'?' placeholder="+351 …"':''}></div>`;
 };
 const oldSelect=form.match(/<select\b[^>]*(?:name="(?:tipo_seguro|insurance_type|verzekering|insurance|ramo|sparte|type)"|data-branch-select)[^>]*>[\s\S]*?<\/select>/)?.[0]||form.match(/<select\b[^>]*>[\s\S]*?<\/select>/)?.[0];
 const select=oldSelect?oldSelect.replace(/\sdata-branch-select(?:="[^"]*")?/g,'').replace(/<select\b([^>]*)>/,(_,a)=>'<select'+a.replace(/\srequired(?:="[^"]*")?/g,'')+' required>'):`<select id="${lang}-insurance-type" name="insurance_type" required><option value="">${esc(t.common.select)}</option>${Object.entries({auto:'Automóvel',habitacao:'Habitação',saude:'Saúde',profissional:'Responsabilidade Civil Profissional'}).map(([r,v])=>`<option value="${v}">${esc(t.ramos[r].titulo)}</option>`).join('')}</select>`;
 const selectId=select.match(/\bid="([^"]+)"/)?.[1];
 const hidden=inputs.filter(s=>/type="hidden"/.test(s)).join('\n') + (find(['country']) ? '' : '<input type="hidden" name="country" value="Portugal">');
 const button=form.match(/<button\b[^>]*type="submit"[^>]*>[\s\S]*?<\/button>/)?.[0]||`<button type="submit" class="form-submit">${esc(t.common.submit)}</button>`;
 const consent=form.match(/<p[^>]*class="[^"]*(?:consent|gdpr|smallprint|micro)[^"]*"[^>]*>[\s\S]*?<\/p>/)?.[0]||'';
 return `${opening}\n${hidden}\n<p hidden><label>Leave empty<input name="bot-field" tabindex="-1" autocomplete="off"></label></p>\n${field(['nome','name','naam'],'nome_completo','text',true)}\n${field(['email'],'email','email',true)}\n${field(['telefone','phone','telefoon','telefon'],'telefone','tel',false)}\n${field(['empresa','company','bedrijf'],'empresa','text',false)}\n<div class="contact-form-field form-field field"><label${selectId?` for="${selectId}"`:''}>${esc(t.common.chooseProduct)} *</label>${select}</div>\n${button}\n${consent}\n</form>`;
}

// Legacy DE/NL/EN product generators predate their authored wizards. Refuse
// destructive regeneration, matching build-car-cluster's existing safeguard.
export function assertPreservesQuotationForms(path, next) {
 let current;try { current=readFileSync(path,'utf8'); } catch (err) { if(err.code==='ENOENT')return;throw err; }
 for(const form of current.match(/<form\b[^>]*>/g)||[]) {
  if(!form.includes('data-wizard'))continue;
  const name=form.match(/\bname="([^"]+)"/)?.[1];
  if(!(next.match(/<form\b[^>]*>/g)||[]).some(f=>f.includes('data-wizard')&&f.includes(`name="${name}"`)))throw new Error(`${path}: refusing to overwrite authored quotation wizard ${name}; update the generator's form source first.`);
 }
}
