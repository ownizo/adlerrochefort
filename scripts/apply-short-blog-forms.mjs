#!/usr/bin/env node
/**
 * Short lead form on blog articles (PT + EN), October 2026.
 *
 * Why: on 21–22 September the PT blog articles lost their inline quote form
 * and every blog CTA was pointed at the pillar pages, whose forms ask for
 * 13 (health) to 22 (home) required fields. Organic traffic lands on the
 * articles; leads fell from 13–14 a week to 5–8 in the weeks that followed
 * (website_leads: cotacao-blog 2/1/2 a week -> 0). The full forms stay where
 * they are, as the second step once a conversation has started.
 *
 * What it does (idempotent, marker <!-- ar-short-form -->):
 *   - PT /blog/*: replaces the "Preencher formulário de cotação" button inside
 *     .cta-topo with a short `cotacao-blog` form; the pillar link stays as a
 *     secondary "formulário completo" link.
 *   - EN /en/blog/* that have no form at all: inserts a short `quote-blog`
 *     form before the article's second <h2>.
 *   - EN /en/blog/* inline forms that already exist: only name and email stay
 *     required (home/valuables/car forms asked for more).
 *   - TVDE articles are left untouched on purpose (not a market we want).
 *
 * Fields: name*, email*, phone (optional), type of insurance*, message
 * (optional), consent*. Native POST to the thank-you page, so it works without
 * JavaScript and records generate_lead there; /js/ar-attribution.js fills the
 * utm_* fields. Both form names are already in HANDLED_FORMS
 * (netlify/functions/submission-created.mjs) and classified per branch in
 * netlify/functions/lib/lead-classification.mjs.
 *
 * Run: node scripts/apply-short-blog-forms.mjs
 */
import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MARK = '<!-- ar-short-form -->';
const SKIP = /tvde|uber|bolt/i;

export const PT_BRANCHES = [
  'Saúde internacional (expatriados)', 'Saúde', 'Private Clients (casa de elevado valor, arte, automóveis)',
  'Habitação', 'Alojamento Local', 'Condomínio', 'Automóvel', 'Responsabilidade Civil Profissional',
  'Hotelaria e Restauração', 'Multirriscos Empresarial', 'Vida e Crédito Habitação', 'Outro',
];
export const EN_BRANCHES = [
  'International health insurance (IPMI)', 'Health', 'Private client (high-value home, art, cars)',
  'Home', 'Holiday let (Alojamento Local)', 'Car', 'Professional indemnity',
  'Business combined (multirriscos)', 'Life & mortgage protection', 'Other',
];

const RULES_PT = [
  [/internacional|expatriad|cigna|allianz-care|brasileiro.*saude|plano-de-saude/, 0],
  [/saude|medis|mgen|doencas/, 1],
  [/arte|joias|classico|elevado-valor|private|golfe|iate|marina|family-office|patrimon|holding|trustees|rapto|consolidado|valores-segurados|investimento-americano|titulo/, 2],
  [/alojamento-local/, 4],
  [/condominio/, 5],
  [/automovel|auto-|carta-conducao|frota/, 6],
  [/rc-|responsabilidade|terapeut|massag|acupunt|naturopat|medicina|administradores/, 7],
  [/hotel|restaura|bares|turismo|rural/, 8],
  [/empresa|ciber|ransomware|distribuicao|obra|apolice-empresarial|acidentes-pessoais/, 9],
  [/vida|sucessao/, 10],
  [/habitacao|casa|multirriscos|subseguro|imovel/, 3],
];
const RULES_EN = [
  [/international|ipmi|cigna|allianz-care|usa|evacuation|repatriation|visa|south-african-medical|portuguese-vs-international|moving-to-spain/, 0],
  [/health|medis|mgen|april|allianz/, 1],
  [/art|jewel|watch|classic|collector|high-value|luxury|private|golf|yacht|marina|family-office|fiduciary|kidnap|appreciating|consolidated|staff|nanny|bicycle|d-and-o|do-exposure|key-person/, 2],
  [/alojamento|holiday-let|renting-out/, 4],
  [/car|driving|motor|track-days|licence/, 5],
  [/liability|indemnity|yoga|therap/, 6],
  [/business|company|restaurant|bars|hotel|cyber|construction|distribution/, 7],
  [/life|mortgage|succession/, 8],
  [/home|property|house|apartment|community|condo|flood|earthquake|rebuild|second-home|buying/, 3],
];
function pick(slug, rules) { for (const [re, i] of rules) if (re.test(slug)) return i; return -1; }

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const STYLE = `<style id="ar-short-form-style">
.arsf{background:#fff;border:1px solid #EBE9E8;border-radius:16px;padding:22px 22px 18px;margin:24px 0;text-align:left;color:#292929}
.arsf h3{margin:0 0 4px;font-size:19px;line-height:1.3}
.arsf p.arsf-sub{margin:0 0 14px;font-size:14px;color:#555}
.arsf-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 12px}
.arsf-f{display:flex;flex-direction:column;gap:4px;min-width:0}
.arsf-f.full{grid-column:1/-1}
.arsf label{font-size:12.5px;font-weight:600;color:#333}
.arsf input,.arsf select,.arsf textarea{font:inherit;font-size:15px;padding:10px 12px;border:1px solid #D9D6D3;border-radius:10px;background:#fff;color:#292929;width:100%;box-sizing:border-box}
.arsf textarea{min-height:70px;resize:vertical}
.arsf .arsf-ok{display:flex;gap:8px;align-items:flex-start;font-size:12.5px;font-weight:400;color:#444;margin-top:4px}
.arsf .arsf-ok input{width:auto;margin-top:2px}
.arsf button{margin-top:12px;border:0;border-radius:999px;padding:12px 22px;font:inherit;font-weight:600;font-size:15px;background:#292929;color:#fff;cursor:pointer}
.arsf .arsf-alt{display:block;margin-top:10px;font-size:13px;color:#555}
@media(max-width:640px){.arsf-grid{grid-template-columns:1fr}}
</style>`;

function form({ lang, slug, branchIdx, fullHref, fullText }) {
  const pt = lang === 'pt';
  const branches = pt ? PT_BRANCHES : EN_BRANCHES;
  const name = pt ? 'cotacao-blog' : 'quote-blog';
  const id = (k) => `arsf-${k}-${slug}`.slice(0, 80);
  const opts = branches.map((b, i) => `<option value="${esc(b)}"${i === branchIdx ? ' selected' : ''}>${esc(b)}</option>`).join('');
  const T = pt ? {
    h: 'Peça uma proposta — leva menos de um minuto',
    sub: 'Diga-nos o essencial. Respondemos por escrito em 24 horas úteis e pedimos o resto só se for preciso.',
    name: 'Nome *', email: 'Email *', phone: 'Telefone / WhatsApp', type: 'Tipo de seguro *', choose: 'Selecionar',
    msg: 'O que precisa? (opcional)', msgPh: 'Ex.: casa no Algarve, família de 4, mudança para Portugal em janeiro…',
    ok: 'Aceito que os meus dados sejam usados para preparar esta proposta, ao abrigo do RGPD. *',
    btn: 'Pedir proposta →', alt: 'Prefere enviar já todos os dados? Formulário completo →', action: '/obrigado/',
  } : {
    h: 'Ask for a quote — it takes under a minute',
    sub: 'Tell us the essentials. We reply in writing within 24 working hours and only ask for more if we need it.',
    name: 'Full name *', email: 'Email *', phone: 'Phone / WhatsApp', type: 'Type of insurance *', choose: 'Select',
    msg: 'What do you need? (optional)', msgPh: 'E.g. villa in the Algarve, family of four, moving to Portugal in January…',
    ok: 'I agree to my details being used to prepare this quote, under the GDPR. *',
    btn: 'Request my quote →', alt: 'Prefer to send everything now? Full quote form →', action: '/en/thank-you/',
  };
  const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].map((n) => `<input type="hidden" name="${n}" value="">`).join('');
  return `${MARK}
<div class="arsf" id="pedido-rapido">
  <h3>${T.h}</h3>
  <p class="arsf-sub">${T.sub}</p>
  <form name="${name}" method="POST" action="${T.action}" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="${name}">${utm}
    <input type="hidden" name="source" value="blog:${esc(slug)}">
    <input type="hidden" name="source_url" value="https://adlerrochefort.com${pt ? '/blog/' : '/en/blog/'}${esc(slug)}/">
    <p style="display:none"><label>Bot: <input name="bot-field"></label></p>
    <div class="arsf-grid">
      <div class="arsf-f"><label for="${id('n')}">${T.name}</label><input id="${id('n')}" type="text" name="${pt ? 'nome' : 'name'}" autocomplete="name" required></div>
      <div class="arsf-f"><label for="${id('e')}">${T.email}</label><input id="${id('e')}" type="email" name="email" autocomplete="email" required></div>
      <div class="arsf-f"><label for="${id('p')}">${T.phone}</label><input id="${id('p')}" type="tel" name="${pt ? 'telefone' : 'phone'}" autocomplete="tel"></div>
      <div class="arsf-f"><label for="${id('t')}">${T.type}</label><select id="${id('t')}" name="tipo-seguro" required>${branchIdx < 0 ? `<option value="">${T.choose}</option>` : ''}${opts}</select></div>
      <div class="arsf-f full"><label for="${id('m')}">${T.msg}</label><textarea id="${id('m')}" name="${pt ? 'mensagem' : 'message'}" placeholder="${esc(T.msgPh)}"></textarea></div>
    </div>
    <label class="arsf-ok"><input type="checkbox" name="rgpd" value="sim" required> ${T.ok}</label>
    <button type="submit">${T.btn}</button>
  </form>
  ${fullHref ? `<a class="arsf-alt" href="${fullHref}">${pt ? 'Prefere enviar já todos os dados?' : 'Prefer to send everything now?'} ${fullText || T.alt}</a>` : ''}
</div>`;
}

function addStyle(s) {
  return s.includes('id="ar-short-form-style"') ? s : s.replace('</head>', STYLE + '\n</head>');
}

let pt = 0, en = 0, relaxed = 0, skipped = [];

// PT articles
for (const rel of globSync('public/blog/*/index.html', { cwd: ROOT })) {
  const slug = basename(dirname(rel));
  if (slug === 'categoria' || slug === 'pagina') continue;
  const f = join(ROOT, rel);
  let s = readFileSync(f, 'utf8');
  if (s.includes(MARK)) continue;
  if (SKIP.test(slug)) { skipped.push(rel); continue; }
  const m = s.match(/<a class="cta-btn" href="([^"]*)">([^<]*)<\/a>/);
  if (!m) { skipped.push(rel); continue; }
  s = s.replace(m[0], form({ lang: 'pt', slug, branchIdx: pick(slug, RULES_PT), fullHref: m[1], fullText: m[2] }));
  writeFileSync(f, addStyle(s)); pt++;
}

// EN articles
for (const rel of globSync('public/en/blog/*/index.html', { cwd: ROOT })) {
  const slug = basename(dirname(rel));
  if (slug === 'category' || slug === 'page') continue;
  const f = join(ROOT, rel);
  let s = readFileSync(f, 'utf8');
  if (SKIP.test(slug)) { skipped.push(rel); continue; }
  if (/<form[\s>]/.test(s)) {
    // Existing inline CTA forms: keep only name/email (and consent) required.
    const out = s.replace(/<form class="ar-cta-form"[\s\S]*?<\/form>/g, (fm) =>
      fm.replace(/<(input|select|textarea)([^>]*?)\s+required([^>]*)>/g, (tag, t, a, b) =>
        /name="(name|email|nome|rgpd|gdpr_consent)"/.test(tag) ? tag : `<${t}${a}${b}>`)
        .replace(/\s+data-required-group="[^"]*"/g, ''));
    if (out !== s) { writeFileSync(f, out); relaxed++; }
    continue;
  }
  if (s.includes(MARK)) continue;
  const start = Math.max(s.indexOf('<article'), 0) || s.indexOf('<main');
  const re = /<h2[\s>]/g; re.lastIndex = start; let hit = 0, idx = -1, mm;
  while ((mm = re.exec(s))) { if (++hit === 2) { idx = mm.index; break; } }
  if (idx < 0) { skipped.push(rel); continue; }
  s = s.slice(0, idx) + form({ lang: 'en', slug, branchIdx: pick(slug, RULES_EN), fullHref: null }) + '\n' + s.slice(idx);
  writeFileSync(f, addStyle(s)); en++;
}

console.log(`PT short forms: ${pt}; EN short forms: ${en}; EN inline forms relaxed: ${relaxed}`);
console.log('skipped:', skipped.join(', ') || 'none');
