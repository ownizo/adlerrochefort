#!/usr/bin/env node
/**
 * Editorial compliance audit — home / property insurance.
 *
 * Rule (Hugo, Nov 2026): pages about homes and property never present,
 * describe or compare the individual home products of Hiscox, Liberty Mutual
 * or Chubb, and never present an insurer-specific condition (guaranteed
 * rebuild above the sum insured, no average, unlimited unoccupancy, a stated
 * liability limit, a minimum contents sum…) as something the client will get.
 * Insurers may be named only in the institutional "insurers and partners"
 * section, or on pages outside the property scope (health, family office…),
 * where other rules apply.
 *
 * Every occurrence is classified:
 *   PROIBIDA  — product / condition description in property content (blocks)
 *   REVISAO   — ambiguous, must be read by a person (blocks until listed in
 *               audit/home-insurers-reviewed.json with file, context, reason)
 *   PERMITIDA — institutional partner mention, or out of scope
 *
 * Usage:
 *   node scripts/home-insurer-audit.mjs                 # report + exit code
 *   node scripts/home-insurer-audit.mjs --manifest      # also writes audit/*.json|csv
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUB = join(ROOT, 'public');
const WRITE = process.argv.includes('--manifest');
const LANGS = ['en', 'es', 'de', 'fr', 'nl', 'it', 'pl', 'se', 'dk', 'zh', 'il', 'br'];

export const BRANDS = /\b(Hiscox|Liberty(?:\s+Mutual)?|Chubb|Masterpiece(?:\s+Signature)?|Home\s+Plus|Home Insurance Plus|MyHiscox\+?|Overseas\s*606)(?:s|'s|’s|'|’)?\b|\bHoliday Home\b(?! [Ii]nsurance)(?!s\b)(?= (?:policy|póliza|polizza|Police|police|polis|polisa|de Hiscox|von Hiscox|product|produto|producto))/g;
// Product conditions presented as promises (any brand or none) — reviewed in context.
export const CONDITIONS = new RegExp([
  'guaranteed (?:rebuild|rebuilding|replacement|reinstatement)', 'rebuil\\w* (?:even )?(?:above|beyond|over) the sum insured',
  'no (?:proportional rule|average|underinsurance penalty)', 'without (?:the )?(?:average|proportional) (?:rule|clause)',
  'reconstrução garantida', 'reconstru\\w*[^.]{0,40}acima do (?:valor de reconstrução|capital seguro)', 'sem regra (?:da )?proporcional', 'ausência de regra de proporcionalidade',
  'reconstrucción garantizada', 'reconstru\\w*[^.]{0,40}(?:por encima del capital|aunque supere la suma asegurada)', 'sin regla proporcional', 'sin aplicar la regla proporcional',
  'Wiederaufbaugarantie', 'Wiederaufb\\w*[^.]{0,60}(?:über die (?:Versicherungssumme|Gebäudesumme) hinaus|die Gebäudesumme übersteig)', 'ohne Unterversicherungs', 'Verzicht auf (?:den )?Unterversicherungseinwand',
  'reconstruction garantie', 'reconstru\\w*[^.]{0,40}au-delà du capital', 'sans règle proportionnelle', 'ricostruzione garantita', 'ricostru\\w*[^.]{0,40}oltre il capitale', 'senza regola proporzionale',
  'herbouwgarantie', 'herbouw\\w*[^.]{0,60}(?:boven|hoger (?:uitvallen )?dan) het verzekerde', 'gwarancja odbudowy', 'odbud\\w*[^.]{0,40}ponad sumę ubezpieczenia', 'garanterad återuppbyggnad', 'återuppbygg\\w*[^.]{0,40}över försäkringsbeloppet',
  'garanteret genopbygning', 'garanter\\w* genopf\\w*', 'gwarantowan\\w* odbudow\\w*', 'Wiederaufbau garantiert', 'garantierte[rn]? Wiederaufbau', 'gegarandeerde herbouw', 'garantisce la ricostruzione', 'garantiza(?:n)? la reconstrucción', 'garantir a reconstrução', 'garantee[sd]? the rebuild', 'extended replacement cost', 'genopf\\w*[^.]{0,40}ud over forsikringssummen', 'בנייה מחדש מובטחת', 'בנייה מחדש[^.]{0,40}מעבר לסכום', '保证重建', '重建[^。]{0,20}超过保额',
  '(?:€|EUR\\s?)\\s?7[.,]5\\s?(?:m|million|milhões|millones|Mio)', '7[.,]5 ?(?:M€|m€|million)', '150[.,]000 ?€? (?:of |de |minimum |mínimo )?(?:contents|recheio|contenido|Hausrat)',
  '(?:contents|recheio|contenido|Hausrat|inboedel|contenu)[^.]{0,40}(?:minimum|mínimo|Mindest)[^.]{0,20}150', 'no (?:limit on|maximum) (?:unoccupancy|vacancy|days empty)',
  '(?:contents|recheio|contenido|Hausrat|inboedel|contenu|contenuto|ruchomości|wyposażeni|lösöre|indbo|תכולה|室内财物)[^.]{0,60}150[.,\\s]?000', '150[.,\\s]?000\\s?€?[^.]{0,60}(?:contents|recheio|contenido|Hausrat|inboedel|mobilier|contenuto|ruchomo|lösöre|indbo|תכולה|家财|室内)',
  'sem limite de (?:dias|desocupação)', 'unbegrenzt (?:leer|unbewohnt)', '(?:free|gratuita?|kostenlose?) (?:valuation|avaliação|peritaje|Bewertung)',
  'worldwide (?:cover|coverage) (?:for|on) (?:jewellery|valuables) (?:as standard|automatically)',
].join('|'), 'gi');

// Property scope: what a page is about (path or content).
const PROPERTY_PATH = /(home|house|habitac|hogar|vivienda|casa|haus|immobil|woning|woon|maison|habitation|domu|dom-|hem|bolig|hus|property|propert|villa|second-home|holiday|ferias|vacacion|ferien|vakantie|secondaire|vacanze|wakacyj|fritidshus|feriehus|unoccupied|desocupad|leerstand|rebuild|reconstru|wiederaufbau|herbouw|odbudow|aterupp|genopf|destin|bestemm|destinaz|miejsc|resmal|destinations|golf|luxury|luxo|lujo|luxus|lusso|private-client|private-office|hnw|patrimon|valuables|art|joias|joyas|jewel|schmuck|kunst|smykker|smycken|sieraden|bizuter|gioiel|zegark|horlog|klock|earthquake|sismo|flood|inundac|storm|subseguro|underinsur|infraseguro|valores-segurados|insurance-review|seguros-private)/i;
// Out of the home/property scope: motor (classic and luxury cars) and professional liability.
// A brand there is allowed unless the surrounding text ties it to a home or a home policy.
const MOTOR_PATH = /(car-insurance|cars?-|-cars?\b|classic|klassiek|oldtimer|veteranbil|automoveis|automóveis|carros-classicos|coches|vehiculos|vehículos|samochod|auto-epoca|luxusauto|voitures)/i;
const PROF_PATH = /(therap|terapeut|terapist|yoga|pilates|wellness|massage|beroeps|berufshaft|professional-liab|professional-indemnity|responsabilite-civile-professionnelle|oc-zawod|oc-terapeut|rc-terapisti|rc-therapeutes|zzp|freiberufler|liability-insurance-complementary)/i;
const HOME_CTX = /(home insurance|home policy|household|recheio|habitação|habitacao|hogar|Hausrat|Hausversicherung|woonverzekering|assurance habitation|assicurazione casa|ubezpieczenie domu|hemförsäkring|husforsikring|ביטוח דירה|ביטוח בית|房屋保险|住宅保险|holiday home|casa de férias|casa de vacaciones|Ferienhaus|rebuild|reconstru)/i;
const HEALTH_PATH = /(saude|salud|health|kranken|zorg|sante|santé|sanit|zdrow|sjukv|sundhed|medic|ipmi|cancer|allianz-care|cigna|april|mgen|medis|bupa|axa)/i;

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) { if (!/^(node_modules|\.git|__pycache__)$/.test(n)) walk(p, out); }
    else out.push(p);
  }
  return out;
}
const langOf = (rel) => { const s = rel.split('/')[0]; return LANGS.includes(s) ? s : 'pt'; };
const strip = (h) => h.replace(/<script\b(?![^>]*ld\+json)[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ');
const text = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

// The only place property insurers may be named on a property page: the institutional block.
const INSTITUTIONAL = /<section[^>]*class="[^"]*(?:ar-partners-inst|partners-section)[^"]*"[\s\S]*?<\/section>/g;

function region(html, idx) {
  const before = html.slice(0, idx);
  if (/<title>[^<]*$/.test(before)) return 'title';
  if (/<meta [^>]*$/.test(before)) return 'meta';
  if (/<script[^>]*ld\+json[^>]*>(?:(?!<\/script>)[\s\S])*$/.test(before.slice(-20000))) return 'jsonld';
  if (/<nav\b(?:(?!<\/nav>)[\s\S])*$/.test(before.slice(-40000))) return 'nav';
  if (/class="faq[^"]*"(?:(?!<\/section>)[\s\S])*$/.test(before.slice(-20000))) return 'faq';
  return 'body';
}

export function classifyPage(rel, html) {
  const lang = langOf(rel);
  const url = '/' + rel.replace(/index\.html$/, '');
  const clean = strip(html).replace(INSTITUTIONAL, (m) => ' '.repeat(m.length));
  const health = HEALTH_PATH.test(rel) && !/home|habitac|casa|hogar|haus|woon/i.test(rel);
  const propertyByPath = PROPERTY_PATH.test(rel);
  const body = text(clean);
  const propertyByContent = /(rebuild|reconstru|reconstrucci|Wiederaufbau|herbouw|ricostruz|odbudow|återuppbygg|genopfør|בנייה מחדש|重建|sum insured|capital seguro|capital asegurado|Versicherungssumme|contents|recheio|contenido|Hausrat|inboedel|unoccup|desocupa|second home|casa de férias|segunda residencia|Ferienhaus)/i.test(body);
  const motor = MOTOR_PATH.test(rel), prof = PROF_PATH.test(rel);
  const scope = health ? 'health' : motor ? 'motor' : prof ? 'professional' : (propertyByPath || propertyByContent) ? 'property' : 'other';
  const hits = [];
  for (const re of [BRANDS, CONDITIONS]) {
    re.lastIndex = 0; let m;
    while ((m = re.exec(clean))) {
      const ctx = text(clean.slice(Math.max(0, m.index - 160), m.index + m[0].length + 160)).trim();
      const where = region(clean, m.index);
      // "Allianz Care" etc. never match; Liberty Seguros (motor) is out of scope too
      let cls;
      if (scope === 'health') cls = 'PERMITIDA';
      else if (scope === 'motor' || scope === 'professional') cls = HOME_CTX.test(ctx) ? 'PROIBIDA' : 'PERMITIDA';
      else if (re === CONDITIONS) cls = scope === 'property' ? 'PROIBIDA' : 'REVISAO';
      else if (scope === 'property') cls = 'PROIBIDA';
      else cls = 'REVISAO';
      const reason = cls === 'PERMITIDA' ? (scope === 'health' ? 'seguro de saúde — modelo editorial próprio, fora do âmbito' : scope === 'motor' ? 'automóvel (clássicos/luxo) — fora do âmbito habitação' : scope === 'professional' ? 'RC profissional — fora do âmbito habitação' : undefined) : undefined;
      hits.push({ term: m[0], kind: re === BRANDS ? 'brand' : 'condition', where, cls, ctx: ctx.slice(0, 360), ...(reason ? { reason } : {}) });
    }
  }
  return { file: 'public/' + rel, lang, url, scope, hits };
}

// Generator / data sources. Every file either produces compliant content or sits
// in one of the categories below, each with its reason; anything else is PROIBIDA.
const SRC_ALLOW = [
  [/^scripts\/(property_criteria_content|apply-property-criteria)\.py$/, 'texto da secção institucional «Seguradoras e parceiros especializados»'],
  [/^(data\/partners\.json|scripts\/apply-partner-list\.mjs|scripts\/lib\/site-sections\.mjs)$/, 'lista institucional de parceiros (logótipos), fonte única aprovada'],
  [/^scripts\/(add-home-insurers|add-valuables-insurers)\.py$/, 'gerador retirado: stub que termina sem escrever nada'],
  [/^scripts\/(motor_structure_content|add-motor-product-structure|hiscox-spain\.data|build-hiscox-spain-pages)\.py$/, 'automóvel (clássicos/luxo) — fora do âmbito habitação'],
  [/^scripts\/ipmi_intl\//, 'saúde internacional — modelo editorial próprio, fora do âmbito'],
  [/^(scripts\/lib\/terminology-rules\.mjs|data\/compliance-audit\.json|data\/phase2-terminology-audit\.json)$/, 'regras e registos de auditoria de terminologia (não geram conteúdo publicado)'],
  [/^scripts\/destinations\/home_build\.py$/, 'lista de nomes próprios que o gerador de homepages não traduz'],
  [/^scripts\/(hnw-home-(pt|en|de-nl)\.data\.mjs|[a-z]{2}-content\/hnw-home\.mjs)$/, 'ocorrências apenas nas entradas de páginas retiradas (301) — enforce-retired.mjs remove-as a cada deploy'],
];
const SRC_CTX_ALLOW = [
  [/therap|terapeut|yoga|pilates|תרפיסט|יוגה|治疗师|瑜伽|CyberClear/i, 'RC profissional / ciber empresarial — fora do âmbito habitação'],
  [/distribution agreements with Allianz, Zurich/i, 'declaração institucional dos acordos de distribuição'],
  [/Vehículos Clásicos|classic car|Oldtimer/i, 'automóvel — fora do âmbito habitação'],
];
function retiredUrls() {
  try { return new Set(Object.keys(JSON.parse(readFileSync(join(ROOT, 'data', 'retired-pages.json'), 'utf8')).retired)); } catch { return new Set(); }
}
function scanSources() {
  const files = walk(join(ROOT, 'scripts')).concat(walk(join(ROOT, 'data'))).filter((f) => /\.(mjs|js|py|json|txt|md)$/.test(f) && !/\.test\.mjs$|home-insurer-audit\.mjs$|home-insurer-second-audit\.py$/.test(f));
  const retired = retiredUrls();
  const out = [];
  for (const f of files) {
    let s = readFileSync(f, 'utf8');
    const rel = relative(ROOT, f);
    // Article metadata: entries of retired articles are kept only as a record (status "retired").
    if (/^data\/articles(\.extracted)?\.json$/.test(rel)) {
      const d = JSON.parse(s);
      const keep = (x) => x && typeof x === 'object' && !(x.status === 'retired' || retired.has(x.url) || retired.has(x.path));
      const live = [];
      const walkJ = (o) => { if (Array.isArray(o)) o.forEach(walkJ); else if (o && typeof o === 'object') { if ('url' in o || 'path' in o) { if (keep(o)) live.push(o); } else Object.values(o).forEach(walkJ); } };
      walkJ(d.articles || d);
      s = JSON.stringify(live, null, 1);
    }
    const allow = SRC_ALLOW.find(([re]) => re.test(rel));
    const health = HEALTH_PATH.test(rel) && !/home|habitac/i.test(rel);
    const hits = [];
    for (const re of [BRANDS, CONDITIONS]) {
      re.lastIndex = 0; let m;
      while ((m = re.exec(s))) {
        const line = s.slice(0, m.index).split('\n').length;
        const ctx = s.slice(Math.max(0, m.index - 120), m.index + 160).replace(/\s+/g, ' ');
        const byCtx = SRC_CTX_ALLOW.find(([r]) => r.test(ctx));
        let cls = 'PROIBIDA', reason;
        if (allow) { cls = 'PERMITIDA'; reason = allow[1]; }
        else if (health) { cls = 'PERMITIDA'; reason = 'saúde — fora do âmbito'; }
        else if (byCtx && !HOME_CTX.test(ctx.replace(byCtx[0], ''))) { cls = 'PERMITIDA'; reason = byCtx[1]; }
        hits.push({ term: m[0], kind: re === BRANDS ? 'brand' : 'condition', line, cls, ...(reason ? { reason } : {}), ctx });
      }
    }
    if (hits.length) out.push({ file: rel, hits });
  }
  return out;
}

export function audit() {
  const pages = walk(PUB).filter((f) => f.endsWith('.html')).map((f) => {
    const rel = relative(PUB, f);
    return classifyPage(rel, readFileSync(f, 'utf8'));
  });
  let reviewed = {};
  const rf = join(ROOT, 'audit', 'home-insurers-reviewed.json');
  if (existsSync(rf)) reviewed = JSON.parse(readFileSync(rf, 'utf8'));
  const key = (file, ctx) => file + '#' + createHash('sha1').update(ctx).digest('hex').slice(0, 12);
  for (const p of pages) for (const h of p.hits) {
    h.key = key(p.file, h.ctx);
    // A person's decision on a specific occurrence (file + context hash), with the reason recorded.
    if (h.cls !== 'PERMITIDA' && reviewed[h.key]) { h.cls = reviewed[h.key].decision; h.reason = reviewed[h.key].reason; h.reviewed = true; }
  }
  return { pages, sources: scanSources() };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const { pages, sources } = audit();
  const count = (c) => pages.reduce((n, p) => n + p.hits.filter((h) => h.cls === c).length, 0);
  const matrix = {};
  for (const p of pages) {
    const m = (matrix[p.lang] ||= { identificadas: 0, analisadas: 0, comOcorrencias: 0, proibidas: 0, revisao: 0 });
    if (p.scope === 'property') m.identificadas++;
    m.analisadas++;
    if (p.hits.length && p.scope === 'property') m.comOcorrencias++;
    m.proibidas += p.hits.filter((h) => h.cls === 'PROIBIDA').length;
    m.revisao += p.hits.filter((h) => h.cls === 'REVISAO').length;
  }
  console.log(`[home-insurer-audit] pages ${pages.length} · property ${pages.filter((p) => p.scope === 'property').length} · health ${pages.filter((p) => p.scope === 'health').length}`);
  console.log(`[home-insurer-audit] PROIBIDA ${count('PROIBIDA')} · REVISAO ${count('REVISAO')} · PERMITIDA ${count('PERMITIDA')}`);
  console.table(matrix);
  const srcHits = sources.reduce((n, s) => n + s.hits.length, 0);
  const srcCount = (c) => sources.reduce((n, x) => n + x.hits.filter((h) => h.cls === c).length, 0);
  console.log(`[home-insurer-audit] generator/source files with brand or condition references: ${sources.length} (${srcHits} occurrences) · PROIBIDA ${srcCount('PROIBIDA')} · PERMITIDA ${srcCount('PERMITIDA')}`);
  for (const x of sources) for (const h of x.hits) if (h.cls === 'PROIBIDA') console.log(`  PROIBIDA ${x.file}:${h.line} ${h.term} — ${h.ctx.slice(0, 140)}`);
  if (WRITE) {
    mkdirSync(join(ROOT, 'audit'), { recursive: true });
    writeFileSync(join(ROOT, 'audit', 'home-insurers-pages.json'), JSON.stringify(pages.filter((p) => p.hits.length || p.scope === 'property'), null, 1));
    writeFileSync(join(ROOT, 'audit', 'home-insurers-sources.json'), JSON.stringify(sources, null, 1));
    const csv = ['file,lang,url,scope,brand_refs,condition_refs,proibidas,revisao,permitidas'];
    for (const p of pages) if (p.scope === 'property' || p.hits.length)
      csv.push([p.file, p.lang, p.url, p.scope, p.hits.filter((h) => h.kind === 'brand').length, p.hits.filter((h) => h.kind === 'condition').length,
        p.hits.filter((h) => h.cls === 'PROIBIDA').length, p.hits.filter((h) => h.cls === 'REVISAO').length, p.hits.filter((h) => h.cls === 'PERMITIDA').length].join(','));
    writeFileSync(join(ROOT, 'audit', 'home-insurers-manifest.csv'), csv.join('\n') + '\n');
    writeFileSync(join(ROOT, 'audit', 'home-insurers-matrix.json'), JSON.stringify(matrix, null, 1));
  }
  if (count('PROIBIDA') + count('REVISAO') + srcCount('PROIBIDA')) process.exitCode = 1;
  else console.log('[home-insurer-audit] OK — zero PROIBIDA and zero REVISAO in pages and sources');
}
