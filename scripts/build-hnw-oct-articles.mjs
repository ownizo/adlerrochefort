/**
 * October 2026 HNW articles — hand-authored languages (PT, EN, DE, NL).
 *
 *   ipmi          Allianz Care vs Cigna Global (all languages except FR)
 *   classic-cars  Classic & high-value cars in Portugal and Spain
 *                 (EN member = the existing /en/blog/luxury-car-insurance-portugal/;
 *                  EN also gets a Spain-only companion, not an hreflang member)
 *
 * The other languages (ES, IT, PL, SE, DK, ZH, HE) are generated pages:
 * scripts/<market>-content/{ipmi,classic-cars}.mjs, rendered by
 * scripts/generate-market-clusters.mjs and grouped by cluster key in
 * scripts/lib/market-hreflang.mjs (HNW_OCT_EXTERNAL).
 *
 * Chrome is cloned, never re-invented:
 *   EN — /en/blog/home-insurance-lagos/ (as build-golf-nautical-pt-en.mjs),
 *        form from /en/blog/medis-health-insurance-portugal/ (expat-health-quote)
 *        or /en/blog/luxury-car-insurance-portugal/ (valuables-review).
 *   PT — /blog/seguros-private-clients-portugal/.
 *   DE/NL — the published golf pillar of each language; head and <main> replaced.
 *
 * Run: node scripts/build-hnw-oct-articles.mjs [--no-data]
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EN } from './hnw-oct-en.data.mjs';
import { PT } from './hnw-oct-pt.data.mjs';
import { DE, NL } from './hnw-oct-de-nl.data.mjs';
import { EN_HOME } from './hnw-home-en.data.mjs';
import { PT_HOME } from './hnw-home-pt.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://adlerrochefort.com';
const PUBLISHED = '2026-10-11';

export const GROUPS = {
  ipmi: {
    'pt-PT': '/blog/allianz-care-vs-cigna-global-seguro-saude-internacional/',
    'en-GB': '/en/blog/allianz-care-vs-cigna-global-portugal-spain/',
    de: '/de/blog/allianz-care-vs-cigna-global-portugal-spanien/',
    nl: '/nl/allianz-care-vs-cigna-global-portugal-spanje/',
    es: '/es/allianz-care-vs-cigna-global-seguro-salud-internacional/',
    'it-IT': '/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/',
    'pl-PL': '/pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/',
    'da-DK': '/dk/allianz-care-vs-cigna-global-sundhedsforsikring/',
    'sv-SE': '/se/allianz-care-vs-cigna-global-sjukvardsforsakring/',
    'he-IL': '/il/allianz-care-vs-cigna-global/',
    'zh-CN': '/zh/allianz-care-vs-cigna-global/',
  },
  'classic-cars': {
    'pt-PT': '/blog/seguro-carros-classicos-alto-valor-portugal-espanha/',
    'en-GB': '/en/blog/luxury-car-insurance-portugal/',
    de: '/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/',
    nl: '/nl/klassieke-auto-verzekering-portugal-spanje/',
    es: '/es/seguro-coches-clasicos-alto-valor-portugal-espana/',
    'it-IT': '/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/',
    'pl-PL': '/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/',
    'da-DK': '/dk/veteranbil-forsikring-portugal-spanien/',
    'sv-SE': '/se/veteranbil-forsakring-portugal-spanien/',
    'he-IL': '/il/classic-car-insurance-portugal-spain/',
    'zh-CN': '/zh/classic-car-insurance-portugal-spain/',
  },
};
// High-value home conditions (October 2026): PT/EN pairs only.
for (const en of EN_HOME) {
  const pt = PT_HOME.find((x) => x.key === en.key);
  GROUPS[en.group] = { 'pt-PT': `/blog/${pt.slug}/`, 'en-GB': `/en/blog/${en.slug}/` };
}
// language-selector `lang` attribute -> hreflang code; FR has no member.
const SEL_LANG = { 'pt-PT': 'pt-PT', en: 'en-GB', nl: 'nl', fr: 'fr', de: 'de', es: 'es', it: 'it-IT', pl: 'pl-PL', sv: 'sv-SE', da: 'da-DK', 'zh-CN': 'zh-CN', he: 'he-IL' };
const LANG_HOME = { 'pt-PT': '/', 'en-GB': '/en/', nl: '/nl/', fr: '/fr/', de: '/de/', es: '/es/', 'it-IT': '/it/', 'pl-PL': '/pl/', 'sv-SE': '/se/', 'da-DK': '/dk/', 'zh-CN': '/zh/', 'he-IL': '/il/' };

const ENTITIES = {
  amp: '&', mdash: '—', ndash: '–', euro: '€', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  middot: '·', ordm: 'º', aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  Aacute: 'Á', Eacute: 'É', Oacute: 'Ó', atilde: 'ã', otilde: 'õ', ccedil: 'ç', agrave: 'à',
  ecirc: 'ê', acirc: 'â', ocirc: 'ô', nbsp: ' ', hellip: '…', quot: '"', rsaquo: '›',
};
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, n) => (n in ENTITIES ? ENTITIES[n] : m));
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');
const plain = (s) => decode(String(s).replace(/<[^>]+>/g, ''));
const ld = (obj) => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 1)}\n</script>`;

function swap(haystack, needle, replacement) {
  if (!haystack.includes(needle)) throw new Error(`template string not found: ${needle.slice(0, 80)}`);
  return haystack.split(needle).join(replacement);
}
function between(html, startMark, endMark, { includeEnd = false } = {}) {
  const s = html.indexOf(startMark);
  const e = html.indexOf(endMark, s + startMark.length);
  if (s === -1 || e === -1) throw new Error(`region not found: ${startMark.slice(0, 60)}`);
  return html.slice(s, includeEnd ? e + endMark.length : e);
}

/** Point every language-selector entry at its counterpart (or the language home) and drop "home page" notes. */
function langSelect(html, groupKey) {
  const group = groupKey ? GROUPS[groupKey] : null;
  html = html.replace(/<a href="[^"]*" lang="([^"]+)"/g, (m, lang) => {
    const code = SEL_LANG[lang];
    if (!code) return m;
    const target = (group && group[code]) || LANG_HOME[code];
    return `<a href="${target}" lang="${lang}"`;
  });
  return html.replace(/<span class="ar-langsel-note">[^<]*<\/span>/g, '');
}
/** For pages outside any group: keep the selector but send every other language to its home. */
function langSelectHomes(html, selfLang, selfUrl) {
  return html.replace(/<a href="[^"]*" lang="([^"]+)"/g, (m, lang) => {
    const code = SEL_LANG[lang];
    if (!code) return m;
    return `<a href="${code === selfLang ? selfUrl : LANG_HOME[code]}" lang="${lang}"`;
  });
}

function hreflangLinks(groupKey, indent = '') {
  const g = GROUPS[groupKey];
  return [...Object.entries(g).map(([code, p]) => `${indent}<link rel="alternate" hreflang="${code}" href="${ORIGIN}${p}">`),
    `${indent}<link rel="alternate" hreflang="x-default" href="${ORIGIN}${g['en-GB']}">`].join('\n');
}

function countWords(a) {
  const parts = [a.intro, ...a.body.map(([h, b]) => `${h} ${b}`), ...a.checklist, a.closing, ...a.faq.flat()];
  return parts.map(plain).join(' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}
const faqLd = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, ans]) => ({ '@type': 'Question', name: plain(q), acceptedAnswer: { '@type': 'Answer', text: plain(ans) } })),
});

const TABLE_CSS = `<style>
  .article-body .table-wrap, .lp-card .table-wrap, .article-body .table-wrap { overflow-x: auto; margin: 22px 0; }
  .article-body table, .lp-card table { width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.5; }
  .article-body th, .article-body td, .lp-card th, .lp-card td { text-align: left; vertical-align: top; padding: 10px 12px; border-bottom: 1px solid rgba(0,0,0,.1); }
  .article-body thead th, .lp-card thead th { font-weight: 700; border-bottom: 2px solid rgba(0,0,0,.25); }
  .article-body tbody td:first-child, .lp-card tbody td:first-child { font-weight: 600; }
</style>
`;

// ===========================================================================
// EN
// ===========================================================================
const EN_TEMPLATE_SLUG = 'home-insurance-lagos';
const EN_T = readFileSync(join(ROOT, 'public/en/blog', EN_TEMPLATE_SLUG, 'index.html'), 'utf8');
const EN_HEALTH_SLUG = 'medis-health-insurance-portugal';
const EN_H = readFileSync(join(ROOT, 'public/en/blog', EN_HEALTH_SLUG, 'index.html'), 'utf8');
const EN_LUX_SLUG = 'luxury-car-insurance-portugal';
const EN_L = readFileSync(join(ROOT, 'public/en/blog', EN_LUX_SLUG, 'index.html'), 'utf8');
const EN_OG = `${ORIGIN}/images/og-adlerrochefort-en.png`;

const EN_ASSETS = between(EN_T, '<link href="https://fonts.googleapis.com/css2?family=', '</head>', { includeEnd: true });
const EN_BODY_TOP = between(EN_T, '<body', '<div class="article-hero">');
const EN_FORM_HEALTH = between(EN_H, '<div class="ar-cv ar-cta-form-wrap"', '<section class="related-section">');
const EN_FORM_VALUABLES = between(EN_L, '<div class="ar-cv ar-cta-form-wrap"', '<section class="related-section">');
const EN_TAIL = EN_T.slice(EN_T.indexOf('<footer>'));
const WA_SVG = between(EN_T, '<svg viewBox="0 0 24 24"><path d="M17.472', '</svg>', { includeEnd: true });
const WA_ANY = /https:\/\/wa\.me\/351928226570\?text=[^"]*/g;
const WA_TEMPLATE = "https://wa.me/351928226570?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20home%20insurance%20in%20Portugal.";

const EN_ORG = {
  '@type': 'Organization', name: 'Adler & Rochefort', legalName: 'Ownizo, Unipessoal Lda.', url: `${ORIGIN}/en/`,
  logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/favicon-192.png` },
};
const waLink = (text) => `https://wa.me/351928226570?text=${encodeURIComponent(text)}`;

function enHead(a) {
  const url = `${ORIGIN}/en/blog/${a.slug}/`;
  const title = plain(a.title);
  const desc = plain(a.description);
  const blogPosting = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description: desc, image: EN_OG,
    datePublished: PUBLISHED, dateModified: PUBLISHED, inLanguage: 'en-GB',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, author: EN_ORG, publisher: EN_ORG,
    keywords: a.keywords, wordCount: a.wordCount,
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${ORIGIN}/en/blog/` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };
  const alternates = a.group ? `${hreflangLinks(a.group)}\n` : `<link rel="alternate" hreflang="en-GB" href="${url}">\n<link rel="alternate" hreflang="x-default" href="${url}">\n`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escText(plain(a.metaTitle))}</title>
<meta name="description" content="${escAttr(desc)}">
<meta name="keywords" content="${escAttr(a.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Adler &amp; Rochefort">
<link rel="canonical" href="${url}">
${alternates}<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escAttr(title)}">
<meta property="og:description" content="${escAttr(desc)}">
<meta property="og:image" content="${EN_OG}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta property="article:published_time" content="${PUBLISHED}">
<meta property="article:modified_time" content="${PUBLISHED}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escAttr(title)}">
<meta name="twitter:description" content="${escAttr(desc)}">
<meta name="twitter:image" content="${EN_OG}">
${ld(blogPosting)}
${ld(breadcrumb)}
${ld(faqLd(a.faq))}
${TABLE_CSS}${EN_ASSETS}
`;
}

function enBodyTop(a) {
  const url = `/en/blog/${a.slug}/`;
  let html = a.group ? langSelect(EN_BODY_TOP, a.group) : langSelectHomes(EN_BODY_TOP, 'en-GB', url).replace(/<span class="ar-langsel-note">[^<]*<\/span>/g, '');
  html = swap(
    html,
    '<div class="asf-top-bar">ASF-registered insurance broker n.&ordm; 425591790/3 &mdash; <a href="/en/home-insurance-quote/">Free home insurance quote in 24h</a></div>',
    `<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal&rsquo;s ASF, no. 425591790/3, with offices in Lisbon and Lagos &mdash; <a href="#ar-quote-form">${a.form === 'health' ? 'Request a written comparison' : 'Request a written review'}</a></div>`
  );
  html = html.replace(/(<div class="breadcrumb">[\s\S]*?<a href="\/en\/blog\/">Insights<\/a><span>&rsaquo;<\/span>\n)\s*[^<\n]+\n/, `$1  ${a.tag}\n`);
  return html;
}

function enForm(a) {
  const wa = waLink(a.whatsappText);
  const common = (html) => html
    .replace(/<p class="ar-cta-form-lead">[\s\S]*?<\/p>/, `<p class="ar-cta-form-lead">${a.formLead}</p>`)
    .replace(/<div class="ar-cv ar-cta-form-wrap" id="ar-quote-form">\s*<h2>[\s\S]*?<\/h2>/, `<div class="ar-cv ar-cta-form-wrap" id="ar-quote-form">\n<h2>${a.formTitle}</h2>`)
    .replace(WA_ANY, wa);
  if (a.form === 'health') {
    let html = EN_FORM_HEALTH.split(EN_HEALTH_SLUG).join(a.slug);
    html = common(html);
    html = swap(html, '<span>Most of our clients reach us on WhatsApp:</span>', '<span>You can also write to us on WhatsApp:</span>');
    html = swap(html, 'Not tied to one insurer — Allianz, Médis, APRIL &amp; AdvanceCare', 'We place both Allianz Care and Cigna Global');
    html = swap(html, '<span class="ar-trust-item">We guide you through the NIF and paperwork</span>', '<span class="ar-trust-item">Advice given in writing</span>');
    html = swap(html, '<span class="ar-trust-item">ASF-registered insurance broker</span>', '<span class="ar-trust-item">ASF-registered insurance intermediary</span>');
    html = swap(html, '<span class="ar-trust-item">English-speaking team</span>', '<span class="ar-trust-item">Offices in Lisbon and Lagos</span>');
    html = swap(html, '<button type="submit" class="ar-btn ar-btn-primary">Request my free quote</button>', '<button type="submit" class="ar-btn ar-btn-primary">Request my comparison</button>');
    html = html.replace('<option value="Insuring my family">Insuring my family</option>', '<option value="Insuring my family">Insuring my family</option>\n<option value="International cover (Allianz Care / Cigna Global)" selected>International cover (Allianz Care / Cigna Global)</option>');
    return html;
  }
  let html = EN_FORM_VALUABLES.split(EN_LUX_SLUG).join(a.slug);
  html = common(html);
  const review = a.review || 'Collector or high-value car';
  html = html.replace(new RegExp(`<label><input type="checkbox" name="review" value="${review}"( data-required-group="review")?> ${review}</label>`), (m, g = '') => `<label><input type="checkbox" name="review" value="${review}"${g} checked> ${review}</label>`);
  if (!html.includes(`value="${review}"`)) throw new Error(`review option not found: ${review}`);
  html = swap(html, '<span class="ar-trust-item">ASF-registered insurance broker</span>', '<span class="ar-trust-item">ASF-registered insurance intermediary</span>');
  html = swap(html, '<span class="ar-trust-item">English-speaking team</span>', '<span class="ar-trust-item">Offices in Lisbon and Lagos</span>');
  html = html.replace('placeholder="Optional &mdash; town, or marina"', 'placeholder="Optional &mdash; town and type of garage"');
  return html;
}

function enTail(a) {
  const url = `/en/blog/${a.slug}/`;
  let html = a.group ? langSelect(EN_TAIL, a.group) : langSelectHomes(EN_TAIL, 'en-GB', url).replace(/<span class="ar-langsel-note">[^<]*<\/span>/g, '');
  html = swap(html,
    `<p class="footer-brand-desc">English-speaking insurance broker for international clients, registered with Portugal's ASF, no. 425591790/3, and serving Spain on a cross-border basis &mdash; home, health, car, life and private-client cover.</p>`,
    `<p class="footer-brand-desc">Private-client insurance intermediary registered with Portugal's ASF, no. 425591790/3, with offices in Lisbon and Lagos, advising households in Portugal and Spain &mdash; health, high-value homes, cars, art and collections, liability and family protection.</p>`);
  html = swap(html,
    '<div class="ar-sticky-cta-label">Free quote in 24h<small>English-speaking, ASF-registered insurance broker</small></div>',
    `<div class="ar-sticky-cta-label">${a.form === 'health' ? 'Written comparison' : 'Written review'}<small>ASF-registered private-client intermediary</small></div>`);
  html = swap(html, '<a href="#ar-quote-form" class="ar-btn ar-btn-primary">Free quote</a>', `<a href="#ar-quote-form" class="ar-btn ar-btn-primary">${a.form === 'health' ? 'Compare plans' : 'Request review'}</a>`);
  html = swap(html, 'data-topics="casa_geral,lagos"', `data-topics="${a.chatTopics}"`);
  return html.split(WA_TEMPLATE).join(waLink(a.whatsappText));
}

function enArticle(a) {
  const hero = `<div class="article-hero"><div class="article-hero-img" style="background:${a.gradient}"><span>${a.heroLabel}</span></div></div>
<article class="article-container"><div class="article-tag">${a.tag}</div><h1 class="article-title">${escText(plain(a.title))}</h1>  <div class="article-date"><time datetime="${PUBLISHED}">Published 11 October 2026</time> &middot; ${a.readingTime} min read</div>
  <div class="article-author">
    <picture>
      <source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">
      <img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" class="article-author-photo" width="56" height="56" loading="eager" decoding="async">
    </picture>
    <div>
      <div class="article-author-name"><a href="/en/#team">Hugo Gonçalves</a></div>
      <div class="article-author-role">Founder &amp; Risk Management Specialist &middot; Adler &amp; Rochefort</div>
    </div>
  </div><!-- /article-author -->`;
  const cta = `<div class="ar-cv ar-cta-inline">
  <div class="ar-cta-inline-text">
    <p class="ar-cta-inline-title">${a.cta.title}</p>
    <p class="ar-cta-inline-sub">${a.cta.sub}</p>
  </div>
  <div class="ar-cta-inline-actions">
    <a href="#ar-quote-form" class="ar-btn ar-btn-primary">${a.form === 'health' ? 'Request a written comparison' : 'Request a written review'}</a>
    <a href="${waLink(a.whatsappText)}" target="_blank" rel="noopener" class="ar-btn ar-btn-wa ">${WA_SVG}<span class="ar-sticky-wa-text">WhatsApp</span></a>
  </div>
</div>`;
  const body = `<div class="article-body">
${a.intro}
${a.body.map(([h2, html], i) => `<h2>${h2}</h2>\n${html}${i === 2 ? `\n${cta}` : ''}`).join('\n')}
<h2>A short checklist</h2>
<ul>
${a.checklist.map((c) => `<li>${c}</li>`).join('\n')}
</ul>
<h2>Talk to us</h2>
${a.closing}
<p><em>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3. General information from an insurance intermediary, not personalised advice; what a policy covers depends on its wording and on the insurer&rsquo;s acceptance of the risk.</em></p>
</div>
`;
  const faq = `<section class="ar-cv ar-faq">
  <h2>Frequently asked questions</h2>
${a.faq.map(([q, ans]) => `  <details class="ar-faq-item">
    <summary>${escText(plain(q))}</summary>
    <div class="ar-faq-answer">${escText(plain(ans))}</div>
  </details>`).join('\n')}
</section>

`;
  const related = `<section class="related-section"><h2 class="related-title">Related reading</h2><div class="related-grid">
${a.related.map(([href, tag, t]) => `    <a href="${href}" class="related-card">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${escText(plain(t))}</div>
    </a>`).join('\n')}
  </div>
</section>
`;
  // The template styles .article-body li as a flex row; wrap the content so a
  // leading <strong> does not become its own column.
  return hero + body.replace(/<li>([\s\S]*?)<\/li>/g, '<li><span>$1</span></li>') + faq + enForm(a) + related;
}

function buildEn(a) {
  a.wordCount = countWords(a);
  a.readingTime = Math.max(5, Math.round(a.wordCount / 220));
  return enHead(a) + enBodyTop(a) + enArticle(a) + enTail(a);
}

// ===========================================================================
// PT
// ===========================================================================
const PT_TEMPLATE_SLUG = 'seguros-private-clients-portugal';
const PT_T = readFileSync(join(ROOT, 'public/blog', PT_TEMPLATE_SLUG, 'index.html'), 'utf8');
const PT_OG = `${ORIGIN}/images/og-adlerrochefort-pt.png`;
const PT_ASSETS = between(PT_T, '<link href="https://fonts.googleapis.com/css2?family=', '</head>');
const PT_BODY_TOP = between(PT_T, '<body>', '<div class="breadcrumb">');
const PT_TAIL = PT_T.slice(PT_T.indexOf('<footer>'));
const PT_WA_SVG = between(PT_T, '<svg viewBox="0 0 24 24"><path d="M17.472', '</svg>', { includeEnd: true });
const PT_EXTRA_CSS = `<style>
  .article-body h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; font-weight: 500; color: var(--ink); line-height: 1.25; margin: 44px 0 18px; }
  .article-body h3 { font-size: 20px; margin: 30px 0 14px; }
  .article-body a { color: var(--primary); font-weight: 600; }
  .article-faq { max-width: 780px; margin: 0 auto; padding: 0 80px 60px; }
  .article-faq h2 { font-size: 26px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
  .faq-item { border-bottom: 1px solid var(--border); padding: 22px 0; }
  .faq-item:first-of-type { border-top: 1px solid var(--border); margin-top: 20px; }
  .faq-item h3 { font-size: 17px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
  .faq-item p { font-size: 15px; line-height: 1.75; color: var(--ink2); }
  @media (max-width: 768px) {
    .article-body h2 { font-size: 23px; }
    .article-faq { padding: 0 24px 48px; }
  }
</style>
`;

function ptHead(a) {
  const url = `${ORIGIN}/blog/${a.slug}/`;
  const title = plain(a.title);
  const desc = plain(a.description);
  const blogPosting = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description: desc, image: PT_OG,
    datePublished: PUBLISHED, dateModified: PUBLISHED, inLanguage: 'pt-PT',
    author: { '@type': 'Person', name: 'Hugo Gonçalves', jobTitle: 'Fundador & Especialista em Gestão de Risco', url: `${ORIGIN}/#equipa`, worksFor: { '@type': 'Organization', name: 'Adler & Rochefort' } },
    publisher: { '@type': 'Organization', name: 'Adler & Rochefort', logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/logo-adler-rochefort.svg` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: a.keywords, wordCount: a.wordCount,
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${ORIGIN}/blog/` },
      { '@type': 'ListItem', position: 3, name: 'Private Clients', item: `${ORIGIN}/blog/categoria/private-clients/` },
      { '@type': 'ListItem', position: 4, name: title, item: url },
    ],
  };
  return `<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escText(plain(a.metaTitle))}</title>
<meta name="description" content="${escAttr(desc)}">
<meta name="keywords" content="${escAttr(a.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="${url}">
${hreflangLinks(a.group)}
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escAttr(title)}">
<meta property="og:description" content="${escAttr(desc)}">
<meta property="og:image" content="${PT_OG}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="pt_PT">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta property="article:published_time" content="${PUBLISHED}">
<meta property="article:modified_time" content="${PUBLISHED}">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escAttr(title)}">
<meta name="twitter:description" content="${escAttr(desc)}">
<meta name="twitter:image" content="${PT_OG}">

${ld(blogPosting)}
${ld(breadcrumb)}
${ld(faqLd(a.faq))}

${PT_ASSETS}${PT_EXTRA_CSS}${TABLE_CSS}</head>
`;
}

function ptBody(a) {
  const src = a.ctaHref;
  const wa = waLink(a.whatsapp);
  const top = langSelect(PT_BODY_TOP, a.group);
  return `${top}<div class="breadcrumb">
  <a href="/">Início</a><span>&rsaquo;</span>
  <a href="/blog/">Insights</a><span>&rsaquo;</span>
  <a href="/blog/categoria/private-clients/">Private Clients</a><span>&rsaquo;</span>
  ${escText(plain(a.title))}
</div>

<article class="article-container">
  <div class="article-tag">${a.tag}</div>
  <h1 class="article-title">${escText(plain(a.title))}</h1>
  <div class="article-date"><time datetime="${PUBLISHED}">Publicado a 11 de outubro de 2026</time> &middot; ${a.readingTime} min de leitura</div>
  <div class="article-author">
    <picture>
      <source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">
      <img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" class="article-author-photo" width="56" height="56" loading="eager" decoding="async">
    </picture>
    <div>
      <div class="article-author-name"><a href="/#equipa">Hugo Gonçalves</a></div>
      <div class="article-author-role">Fundador &amp; Especialista em Gestão de Risco &middot; Adler &amp; Rochefort</div>
    </div>
  </div><!-- /article-author -->

  <div class="cta-topo">
    <div class="cta-topo-title">${a.ctaTop}</div>
    <div class="cta-topo-subtitle">Análise por um agente de seguros registado na ASF, com escritórios em Lisboa e Lagos. Sem compromisso.</div>
    <a class="cta-btn" href="${src}">Pedir análise →</a>
    <div class="cta-topo-micro">Resposta em 24h úteis. Os seus dados são tratados ao abrigo do RGPD.</div>
  </div>

  <div class="article-body">
${a.intro}
${a.body.map(([h2, html], i) => {
    const block = `<h2>${h2}</h2>\n${html}`;
    return i === 2 ? `${block}
    <div class="cta-meio">
    <div class="cta-meio-text">
      <div class="cta-meio-title">${a.ctaMeio.title}</div>
      <div class="cta-meio-desc">${a.ctaMeio.desc}</div>
    </div>
    <a href="${wa}" target="_blank" rel="noopener" class="cta-meio-btn">${PT_WA_SVG} Abrir WhatsApp</a>
  </div>` : block;
  }).join('\n')}
<h2>Uma lista de verificação breve</h2>
<ul>
${a.checklist.map((c) => `<li>${c}</li>`).join('\n')}
</ul>
<h2>Fale connosco</h2>
${a.closing}
<p><em>A Adler &amp; Rochefort é uma marca comercial da Ownizo, Unipessoal Lda., registada na ASF com o n.º 425591790/3. Informação geral prestada por um agente de seguros, que não substitui aconselhamento personalizado; o âmbito de cada apólice depende das respetivas condições e da aceitação do risco pela seguradora.</em></p>
  </div>

  <div class="blog-cta" style="margin:48px 0 0;background:#F7F6F5;border:1px solid #EBE9E8;border-left:4px solid #FF6300;border-radius:12px;padding:32px 36px;text-align:center;">
    <h3 style="font-family:'Inter',sans-serif;font-size:22px;font-weight:700;color:#292929;margin:0 0 12px;line-height:1.3;">${a.ctaFinal.title}</h3>
    <p style="font-family:'Inter',sans-serif;font-size:16px;color:#333332;margin:0 0 24px;line-height:1.6;">${a.ctaFinal.text}</p>
    <a href="${src}" style="display:inline-block;background:#FF6300;color:#292929;padding:14px 30px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:8px;">Pedir análise →</a>
  </div>
</article>

<section class="article-faq">
  <h2>Perguntas frequentes</h2>
${a.faq.map(([q, ans]) => `  <div class="faq-item">
    <h3>${escText(plain(q))}</h3>
    <p>${escText(plain(ans))}</p>
  </div>`).join('\n')}
</section>

<section class="related-section">
  <h2 class="related-title">Artigos relacionados</h2>
  <div class="related-grid">
${a.related.map(([href, tag, t]) => `    <a href="${href}" class="related-card${href.startsWith('/private-clients/') || href.startsWith('/seguros/') ? ' related-card-landing' : ''}">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${escText(plain(t))}</div>
    </a>`).join('\n')}
  </div>
</section>

`;
}

function buildPt(a) {
  a.wordCount = countWords(a);
  a.readingTime = Math.max(5, Math.round(a.wordCount / 220));
  return ptHead(a) + ptBody(a).replace(/<li>([\s\S]*?)<\/li>/g, '<li><span>$1</span></li>') + langSelect(PT_TAIL, a.group);
}

// ===========================================================================
// DE / NL — cloned from the golf pillar of each language
// ===========================================================================
function replaceHeadCommon(html, { url, title, description, keywords, groupKey }) {
  const abs = `${ORIGIN}${url}`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`);
  if (keywords) {
    html = /<meta name="keywords" content="[^"]*">/.test(html)
      ? html.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${escAttr(keywords)}">`)
      : html.replace(/(<meta name="description" content="[^"]*">)/, `$1\n<meta name="keywords" content="${escAttr(keywords)}">`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${abs}">`);
  html = html.replace(/\n\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '');
  html = html.replace(/(<link rel="canonical" href="[^"]*">)/, `$1\n${hreflangLinks(groupKey, '  ')}`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${abs}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`);
  html = html.replace(/<meta property="article:published_time" content="[^"]*">/, `<meta property="article:published_time" content="${PUBLISHED}T09:00:00+00:00">`);
  html = html.replace(/<meta property="article:modified_time" content="[^"]*">/, `<meta property="article:modified_time" content="${PUBLISHED}T09:00:00+00:00">`);
  return html;
}
function replaceLd(html, blocks) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');
  return html.replace('</head>', `${blocks.map(ld).join('\n')}\n${TABLE_CSS}</head>`);
}
function articleLd(p, lang, homeName, homeUrl) {
  const abs = `${ORIGIN}${p.url}`;
  return [
    {
      '@context': 'https://schema.org', '@type': 'Article', headline: plain(p.h1), description: plain(p.description), inLanguage: lang,
      datePublished: PUBLISHED, dateModified: PUBLISHED, mainEntityOfPage: { '@type': 'WebPage', '@id': abs },
      author: { '@type': 'Person', name: 'Hugo Gonçalves' },
      publisher: { '@type': 'Organization', name: 'Adler & Rochefort', logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/logo-adler-rochefort.svg` } },
    },
    faqLd(p.faq),
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: homeName, item: `${ORIGIN}${homeUrl}` },
        { '@type': 'ListItem', position: 2, name: plain(p.crumb || p.h1), item: abs },
      ],
    },
  ];
}

const DE_T = readFileSync(join(ROOT, 'public/de/blog/golf-immobilien-portugal-spanien/index.html'), 'utf8');
function buildDe(p) {
  let html = replaceHeadCommon(DE_T, { ...p, groupKey: p.key });
  html = replaceLd(html, articleLd(p, 'de', 'Start', '/de/'));
  html = langSelect(html, p.key);
  html = html.replace(/<div class="asf-top-bar">[\s\S]*?<\/div>/, `<div class="asf-top-bar">Adler &amp; Rochefort ist bei der ASF Portugals registriert, Nr. 425591790/3, mit Büros in Lissabon und Lagos — <a href="${p.ctaHref}">${p.ctaLabel}</a></div>`);
  const cards = p.sections.map(([id, h2, body]) => `<div class="lp-card"><h2 id="${id}">${h2}</h2>${body}</div>`).join('\n');
  const main = `<main class="lp-main">
<div class="lp-crumb"><a href="/de/">Start</a><span>/</span>${p.crumb}</div>
<section class="lp-hero"><div class="lp-hero-inner">
<div class="lp-eyebrow">${p.eyebrow} · 11. Oktober 2026</div>
<h1>${p.h1}</h1>
<p class="lp-hero-sub">${p.sub}</p>
<a href="#${p.firstId}" class="btn-primary">${p.heroCta}</a>
</div></section>
<section class="lp-sections"><div class="lp-sections-inner">
${cards}
<div class="lp-card"><h2 id="checkliste">Checkliste</h2><ul class="lp-list">${p.checklist.map((c) => `<li>${c}</li>`).join('')}</ul></div>
<div class="lp-card"><h2 id="${p.ctaId}">${p.ctaHeading}</h2><p>${p.ctaText}</p><p><a href="${p.ctaHref}" class="btn-primary">${p.ctaLabel}</a></p></div>
</div></section>
<section class="lp-faq-section" id="faq"><div class="lp-faq-inner">
<h2 class="lp-faq-title">Häufige Fragen</h2>
${p.faq.map(([q, a]) => `<div class="lp-faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n')}
</div></section>
<section class="lp-sections"><div class="lp-sections-inner"><div class="lp-card">
<h2>Weiterlesen</h2>
<ul class="lp-guides">
${p.related.map(([href, label, hl]) => `<li><a href="${href}"${hl ? ` hreflang="${hl}"` : ''}>${label}</a></li>`).join('\n')}
</ul>
<p class="lp-note">Allgemeine Information eines Versicherungsvermittlers, keine individuelle Beratung. Was eine Police zahlt, steht im Wortlaut und hängt von der Annahme des Risikos durch den Versicherer ab, nicht von dieser Seite. Adler &amp; Rochefort ist eine Marke der Ownizo, Unipessoal Lda., ASF Nr. 425591790/3.</p>
</div></div></section>
</main>`;
  html = html.replace(/<main class="lp-main">[\s\S]*?<\/main>/, main);
  return html;
}

const NL_T = readFileSync(join(ROOT, 'public/nl/golf-woningen-portugal-spanje/index.html'), 'utf8');
function buildNl(p) {
  let html = replaceHeadCommon(NL_T, { ...p, groupKey: p.key });
  html = replaceLd(html, articleLd(p, 'nl', 'Home', '/nl/'));
  html = langSelect(html, p.key);
  const secs = p.sections.map(([id, h2, body], i) => `<section class="section ${i % 2 ? 'tint' : 'plain'}" aria-labelledby="${id}">
  <div class="container narrow article-body">
    <h2 id="${id}">${h2}</h2>
    ${body}
  </div>
</section>`).join('\n\n');
  const main = `<main id="main">

<article>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <div class="hero-rule" aria-hidden="true"></div>
    <span class="eyebrow">${p.eyebrow}</span>
    <h1 id="hero-title">${p.h1}</h1>
    <p class="hero-subtitle">${p.sub}</p>
    <p class="hero-meta">Verzekeringsagent voor particuliere cliënten · ASF nr. 425591790/3 · Lissabon · Lagos · Gepubliceerd: 11 oktober 2026</p>
    <a href="#offerte-cta" class="btn-cta">Schriftelijke beoordeling aanvragen <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg></a>
  </div>
</section>

<div class="lang-policy-band">
  <aside class="lang-policy" aria-labelledby="taalbeleid">
    <h2 id="taalbeleid">Onze werktaal is Engels</h2>
      <p>${p.langPolicyLead}</p>
      <p>De dienstverlening zelf verloopt in het Engels: offertes, toelichting op de voorwaarden, correspondentie en schadebehandeling. Wij vermelden dat hier vooraf, omdat een schademelding het verkeerde moment is om daar achter te komen.</p>
      <p>Alle communicatie verloopt schriftelijk, zodat u alles wat is afgesproken kunt teruglezen.</p>
  </aside>
</div>

${secs}

<section class="section tint" aria-labelledby="checklist">
  <div class="container narrow article-body">
    <h2 id="checklist">Checklist</h2>
    <ul>
${p.checklist.map((c) => `      <li>${c}</li>`).join('\n')}
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="faq-title" id="veelgestelde-vragen">
  <div class="container narrow">
    <span class="eyebrow">Veelgestelde vragen</span>
    <h2 id="faq-title">${p.faqTitle}</h2>
    <div class="faq-list">
${p.faq.map(([q, a]) => `      <details class="faq-item">
        <summary>${q}</summary>
        <div class="faq-answer"><p>${a}</p></div>
      </details>`).join('\n')}
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="verder-title">
  <div class="container narrow">
    <h2 id="verder-title">Verder lezen</h2>
    <ul class="related">
${p.related.map(([href, label, hl]) => `      <li><a class="text-link" href="${href}"${hl ? ` hreflang="${hl}"` : ''}>${label}</a></li>`).join('\n')}
    </ul>
  </div>
</section>

<section class="section form-section" aria-labelledby="offerte-title" id="offerte-cta">
  <div class="form-shell lp-form-card" style="text-align:center;">
    <h2 id="offerte-title">${p.ctaHeading}</h2>
    <p class="form-intro">${p.ctaText}</p>
    <p class="form-lang-note">Wij antwoorden binnen 24 uur, in het Engels.</p>
    <p style="margin-top:24px;"><a class="btn-cta" href="${p.ctaHref}">Naar het aanvraagformulier →</a></p>
  </div>
</section>
</article>

</main>`;
  html = html.replace(/<main id="main">[\s\S]*?<\/main>/, main);
  return html;
}

// ===========================================================================
const out = [];
const write = (rel, html) => {
  const dir = join(ROOT, 'public', rel);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`wrote public/${rel}/index.html`);
};
for (const a of [...EN, ...EN_HOME]) { write(`en/blog/${a.slug}`, buildEn(a)); out.push({ lang: 'en', a }); }
for (const a of [...PT, ...PT_HOME]) { write(`blog/${a.slug}`, buildPt(a)); out.push({ lang: 'pt', a }); }
for (const p of DE) write(p.url.replace(/^\/|\/$/g, ''), buildDe(p));
for (const p of NL) write(p.url.replace(/^\/|\/$/g, ''), buildNl(p));

if (!process.argv.includes('--no-data')) {
  const dataPath = join(ROOT, 'data/articles.json');
  const data = JSON.parse(readFileSync(dataPath, 'utf8'));
  for (const { lang, a } of out) {
    const record = {
      slug: a.slug,
      lang,
      status: 'published',
      url: lang === 'en' ? `/en/blog/${a.slug}/` : `/blog/${a.slug}/`,
      category: lang === 'en' ? a.category : null,
      ...(lang === 'pt' ? { cluster: 'private-clients' } : {}),
      tag: plain(a.tag),
      title: plain(a.title),
      metaTitle: plain(a.metaTitle),
      description: plain(a.description),
      excerpt: plain(a.excerpt),
      image: null,
      imageGradient: lang === 'en'
        ? a.gradient.replace('linear-gradient(135deg,', 'linear-gradient(135deg, ').replace(/,(?=#)/g, ', ')
        : 'linear-gradient(135deg, #292929 0%, #4B5A22 55%, #8C9A4E 100%)',
      imageAlt: plain(a.title),
      published: PUBLISHED,
      modified: PUBLISHED,
      dateLabel: lang === 'en' ? 'October 2026' : 'Outubro 2026',
      readingTime: a.readingTime,
      featured: false,
      translationOf: null,
    };
    const list = data.articles[lang];
    const i = list.findIndex((r) => r.slug === a.slug);
    if (i === -1) list.push(record);
    else list[i] = record;
    console.log(`articles.json: ${i === -1 ? 'added' : 'updated'} ${lang}/${a.slug}`);
  }
  writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
}
