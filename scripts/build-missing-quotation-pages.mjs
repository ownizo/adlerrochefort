#!/usr/bin/env node
// French had only a short homepage enquiry; Dutch Auto had no dedicated wizard.
// Reuse the existing market wizard and the same Netlify -> Resend/CRM/Supabase flow.
import { mkdir, writeFile } from 'node:fs/promises';
import { wizardFormHtml, esc } from './lib/market-cluster.mjs';
import { correctQuotationHtml, quoteStrings } from './lib/quotation-forms.mjs';
import { quotationRoutes, routes } from './lib/quotation-routes.mjs';
export function riskFields(t,ramo) {
 const r=t.ramos[ramo];
 const field=(name,label,type='text',attrs='')=>`<div class="contact-form-field"><label for="risk-${name}">${esc(label)} *</label><input id="risk-${name}" name="${name}" type="${type}" ${attrs} required></div>`;
 const select=(name,label,options,attrs='')=>`<div class="contact-form-field"><label for="risk-${name}">${esc(label)} *</label><select id="risk-${name}" name="${name}" ${attrs} required><option value="">${esc(t.common.select)}</option>${options.map(([v,l])=>`<option value="${v}">${esc(l)}</option>`).join('')}</select></div>`;
 if(ramo==='auto')return field('matricula',r.matricula,'text','data-validate="plate" dir="ltr" placeholder="AA-00-AA"')+field('data_carta',r.data_carta,'date','data-validate="licence-date" data-validate-ref="data_nascimento"');
 if(ramo==='profissional')return field('faturacao_anual',r.faturacao_anual,'number','min="0" step="0.01"');
 if(ramo==='saude')return `<p>${esc(r.pessoas_aviso_nif)}</p><div data-persons-repeater><div data-persons-list></div><button type="button" data-persons-add>${esc(r.pessoa_adicionar)}</button></div>`;
 return select('regime_ocupacao',r.regime_ocupacao,[['permanente',r.regime_ocupacao_permanente],['holiday_home',r.regime_ocupacao_holiday_home],['alojamento_local',r.regime_ocupacao_al]],'data-branch-select')+`<div data-branch="alojamento_local" hidden>${select('al_regime',r.al_regime,[['tempo_inteiro',r.al_regime_tempo_inteiro],['parcial',r.al_regime_parcial]],'disabled')}</div>`+field('ano_construcao',r.ano_construcao,'number','min="1"')+field('area_bruta',r.area_bruta,'number','min="1" step="0.01"')+field('casas_banho',r.casas_banho,'number','min="0"')+`<div class="contact-form-field"><label class="contact-form-checkbox"><input type="checkbox" data-field-toggle="renovations"> ${esc(r.obras_renovacao_check)}</label></div><div id="renovations" hidden>${field('obras_ano',r.obras_ano,'number','data-validate="renovation-year" data-validate-ref="ano_construcao" disabled')}<div class="contact-form-field"><label for="risk-obras_descricao">${esc(r.obras_descricao)} *</label><textarea id="risk-obras_descricao" name="obras_descricao" minlength="10" required disabled></textarea></div></div>`+field('capital_edificio',r.capital_edificio,'number','min="1" step="0.01"')+field('capital_conteudo',r.capital_conteudo,'number','min="0" step="0.01"');
}
for(const lang of ['fr','nl'])for(const ramo of (lang==='fr'?['auto','habitacao','saude','profissional']:['auto'])) {
 const t=quoteStrings[lang],url=routes[lang][ramo].split('#')[0];
 const market={key:lang,htmlLang:lang,ui:{formId:'quote-form',formSubmit:t.common.submit,honeypot:'',f:{selectPlaceholder:t.common.select}}};
 const page={wizard:{idPrefix:lang+'-'+ramo,formName:lang+'-quote-'+ramo,ramo,adultBirthDate:true,heading:t.ramos[ramo].titulo,intro:t.ramos[ramo].subtitulo,stepLabel2:t.common.wizard.passo_2,fieldsHtml:riskFields(t,ramo),microNote:`<a href="/en/privacy-policy/">${esc(t.common.privacy)}</a>`}};
 const html=correctQuotationHtml(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(t.ramos[ramo].titulo)} | Adler &amp; Rochefort</title><link rel="canonical" href="https://adlerrochefort.com${url}"><link rel="stylesheet" href="/css/ar-property.css"><link rel="stylesheet" href="/css/ar-quote-wizard.css"></head><body><main class="quotation-page" style="max-width:900px;margin:auto;padding:24px"><a href="/${lang}/">Adler &amp; Rochefort</a><h1>${esc(t.ramos[ramo].titulo)}</h1>${quotationRoutes(lang)}${wizardFormHtml(market,page)}</main>${['lead-branch-fields.js','quote-validators.js','ar-quote-form.js','quote-nationality.js','quote-wizard.js','quote-field-toggle.js','quote-health-persons.js'].map(f=>`<script defer src="/js/${f}"></script>`).join('')}</body></html>`);
 const dir='public'+url;await mkdir(dir,{recursive:true});await writeFile(dir+'index.html',html);
}
