/**
 * Builds the golf and nautical pillar articles for PT (root /blog/) and EN
 * (/en/blog/) from scripts/golf-nautical-pt.data.mjs and
 * scripts/golf-nautical-en.data.mjs.
 *
 * Chrome is cloned from established articles of each section:
 *   PT — /blog/seguros-private-clients-portugal/ (CTA to the /private-clients/
 *        pillar form with ?source=blog:<slug>#pedido)
 *   EN — /en/blog/home-insurance-lagos/ (same template as the surf series);
 *        golf keeps its `home-insurance-quote` form, nautical uses the
 *        `valuables-review` form cloned from /en/blog/yacht-insurance-algarve-marinas/.
 * The <head> is rebuilt: canonical, the full 12-language hreflang group
 * (x-default = EN), og/twitter, BlogPosting, BreadcrumbList and a FAQPage
 * generated from the same data as the visible FAQ.
 *
 * Run: node scripts/build-golf-nautical-pt-en.mjs [--no-data]
 *   --no-data  do not touch data/articles.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EN } from './golf-nautical-en.data.mjs';
import { PT } from './golf-nautical-pt.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://adlerrochefort.com';
const PUBLISHED = '2026-09-27';

// hreflang groups (brief: fixed slugs; x-default = EN)
const GROUPS = {
  golf: {
    'pt-PT': '/blog/golfe-casas-alto-valor-portugal-espanha/',
    'en-GB': '/en/blog/golf-homes-portugal-spain/',
    de: '/de/blog/golf-immobilien-portugal-spanien/',
    fr: '/fr/golf-residences-portugal-espagne/',
    nl: '/nl/golf-woningen-portugal-spanje/',
    'es-ES': '/es/golf-viviendas-lujo-portugal-espana/',
    'it-IT': '/it/golf-ville-lusso-portogallo-spagna/',
    'pl-PL': '/pl/golf-rezydencje-portugalia-hiszpania/',
    'da-DK': '/dk/golf-boliger-portugal-spanien/',
    'sv-SE': '/se/golf-bostader-portugal-spanien/',
    'he-IL': '/il/golf-homes-portugal-spain/',
    'zh-CN': '/zh/golf-homes-portugal-spain/',
  },
  nautical: {
    'pt-PT': '/blog/marinas-iates-portugal-espanha/',
    'en-GB': '/en/blog/marinas-yachts-portugal-spain/',
    de: '/de/blog/marinas-yachten-portugal-spanien/',
    fr: '/fr/ports-plaisance-yachts-portugal-espagne/',
    nl: '/nl/jachthavens-jachten-portugal-spanje/',
    'es-ES': '/es/puertos-deportivos-yates-portugal-espana/',
    'it-IT': '/it/marine-yacht-portogallo-spagna/',
    'pl-PL': '/pl/mariny-jachty-portugalia-hiszpania/',
    'da-DK': '/dk/lystbaadehavne-yachter-portugal-spanien/',
    'sv-SE': '/se/marinor-yachter-portugal-spanien/',
    'he-IL': '/il/marinas-yachts-portugal-spain/',
    'zh-CN': '/zh/marinas-yachts-portugal-spain/',
  },
};
// language-selector `lang` attribute -> hreflang code
const SEL_LANG = { 'pt-PT': 'pt-PT', en: 'en-GB', nl: 'nl', fr: 'fr', de: 'de', es: 'es-ES', it: 'it-IT', pl: 'pl-PL', sv: 'sv-SE', da: 'da-DK', 'zh-CN': 'zh-CN', he: 'he-IL' };

const ENTITIES = {
  amp: '&', mdash: '—', ndash: '–', euro: '€', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  middot: '·', ordm: 'º', aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  Aacute: 'Á', Eacute: 'É', Oacute: 'Ó', atilde: 'ã', otilde: 'õ', ccedil: 'ç', agrave: 'à',
  ecirc: 'ê', acirc: 'â', ocirc: 'ô', nbsp: ' ', hellip: '…', quot: '"', rsaquo: '›',
};
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, n) => (n in ENTITIES ? ENTITIES[n] : m));
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');
const plain = (s) => decode(s.replace(/<[^>]+>/g, ''));
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

/** Point every language-selector entry at its counterpart and drop the "home page" notes. */
function langSelect(html, key) {
  const group = GROUPS[key];
  html = html.replace(/<a href="[^"]*" lang="([^"]+)"/g, (m, lang) => {
    const code = SEL_LANG[lang];
    return code && group[code] ? `<a href="${group[code]}" lang="${lang}"` : m;
  });
  return html.replace(/<span class="ar-langsel-note">[^<]*<\/span>/g, '');
}

function hreflangLinks(key) {
  const g = GROUPS[key];
  return [...Object.entries(g).map(([code, p]) => `<link rel="alternate" hreflang="${code}" href="${ORIGIN}${p}">`),
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN}${g['en-GB']}">`].join('\n');
}

function countWords(a) {
  const parts = [a.intro, ...a.body.map(([h, b]) => `${h} ${b}`), ...a.checklist, a.closing, ...a.faq.flat()];
  return parts.map(plain).join(' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function faqLd(a) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })),
  };
}

// ===========================================================================
// EN
// ===========================================================================
const EN_TEMPLATE_SLUG = 'home-insurance-lagos';
const EN_T = readFileSync(join(ROOT, 'public/en/blog', EN_TEMPLATE_SLUG, 'index.html'), 'utf8');
const EN_YACHT_SLUG = 'yacht-insurance-algarve-marinas';
const EN_Y = readFileSync(join(ROOT, 'public/en/blog', EN_YACHT_SLUG, 'index.html'), 'utf8');
const EN_OG = `${ORIGIN}/images/og-adlerrochefort-en.png`;

const EN_ASSETS = between(EN_T, '<link href="https://fonts.googleapis.com/css2?family=Albert+Sans', '</head>', { includeEnd: true });
const EN_BODY_TOP = between(EN_T, '<body', '<div class="article-hero">');
const EN_FORM_HOME = between(EN_T, '<div class="ar-cv ar-cta-form-wrap"', '<section class="related-section">');
const EN_FORM_REVIEW = between(EN_Y, '<div class="ar-cv ar-cta-form-wrap"', '<section class="related-section">');
const EN_TAIL = EN_T.slice(EN_T.indexOf('<footer>'));

const WA_OLD = "https://wa.me/351928226570?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20home%20insurance%20in%20Portugal.";
const WA_Y_OLD = "https://wa.me/351928226570?text=Hi%2C%20I'd%20like%20a%20review%20of%20the%20cover%20on%20some%20items%20in%20Portugal.";
const WA_NEW = "https://wa.me/351928226570?text=Hello%2C%20I'd%20like%20a%20written%20assessment%20for%20a%20home%20in%20Portugal%20or%20Spain.";
const WA_NEW_BOAT = "https://wa.me/351928226570?text=Hello%2C%20I'd%20like%20a%20written%20assessment%20for%20a%20yacht%20and%20a%20home%20in%20Portugal%20or%20Spain.";
const WA_SVG = between(EN_T, '<svg viewBox="0 0 24 24"><path d="M17.472', '</svg>', { includeEnd: true });

const EN_ORG = {
  '@type': 'Organization',
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  url: `${ORIGIN}/en/`,
  logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/favicon-192.png` },
};

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
${hreflangLinks(a.key)}
<link rel="icon" href="/favicon.ico" sizes="any">
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
${ld(faqLd(a))}
${EN_ASSETS}
`;
}

function enBodyTop(a) {
  let html = langSelect(EN_BODY_TOP, a.key);
  html = swap(
    html,
    '<div class="asf-top-bar">ASF-registered insurance broker n.&ordm; 425591790/3 &mdash; <a href="/en/home-insurance-quote/">Free home insurance quote in 24h</a></div>',
    '<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal&rsquo;s ASF, no. 425591790/3, with offices in Lisbon and Lagos &mdash; <a href="/en/private-clients/">Request a written assessment</a></div>'
  );
  // breadcrumb names this article
  html = html.replace(/(<div class="breadcrumb">[\s\S]*?<a href="\/en\/blog\/">Insights<\/a><span>&rsaquo;<\/span>\n)\s*[^<\n]+\n/, `$1  ${a.tag}\n`);
  return html;
}

function enForm(a) {
  const wa = a.key === 'nautical' ? WA_NEW_BOAT : WA_NEW;
  if (a.key === 'nautical') {
    let html = EN_FORM_REVIEW.split(EN_YACHT_SLUG).join(a.slug);
    html = swap(html, '<h2>Ask us to review the cover</h2>', '<h2>Request a written assessment</h2>');
    html = swap(html, '<p class="ar-cta-form-lead">Tell us what you own and where it is kept. We reply in writing, in English, within 24 hours. No call is required at any stage.</p>',
      '<p class="ar-cta-form-lead">Tell us about the yacht, where it is berthed and the house by the water. We reply in writing within 24 hours &mdash; no call is required at any stage.</p>');
    html = swap(html, '<label><input type="checkbox" name="review" value="Boat"> Boat</label>', '<label><input type="checkbox" name="review" value="Boat" checked> Boat</label>');
    html = swap(html, '<span class="ar-trust-item">ASF-registered insurance broker</span>', '<span class="ar-trust-item">ASF-registered insurance intermediary</span>');
    html = swap(html, '<span class="ar-trust-item">English-speaking team</span>', '<span class="ar-trust-item">Offices in Lisbon and Lagos</span>');
    html = swap(html, '<span class="ar-trust-item">We handle the claim</span>', '<span class="ar-trust-item">One adviser, from first contact to claim</span>');
    return html.split(WA_Y_OLD).join(wa);
  }
  let html = EN_FORM_HOME.split(EN_TEMPLATE_SLUG).join(a.slug);
  html = swap(html, '<h2>Get a free home insurance comparison</h2>', '<h2>Request a written assessment</h2>');
  html = swap(html,
    '<p class="ar-cta-form-lead">Tell us about the property and we&rsquo;ll compare multi-risk home insurance across the market &mdash; in English, within 24 hours.</p>',
    '<p class="ar-cta-form-lead">Tell us about the house, its community and how you use it. We will come back with our view in writing &mdash; the cover you have, the gaps and the options &mdash; within 24 hours.</p>');
  html = swap(html, '<span>Most of our clients reach us on WhatsApp:</span>', '<span>Prefer to talk first? Message us on WhatsApp:</span>');
  html = swap(html, '<button type="submit" class="ar-btn ar-btn-primary">Request my free quote</button>', '<button type="submit" class="ar-btn ar-btn-primary">Request my assessment</button>');
  html = swap(html, 'to prepare and discuss your quote,', 'to prepare and discuss your assessment,');
  html = swap(html, '<span class="ar-trust-item">ASF-registered insurance broker</span>', '<span class="ar-trust-item">ASF-registered insurance intermediary</span>');
  html = swap(html, '<span class="ar-trust-item">English-speaking team</span>', '<span class="ar-trust-item">Offices in Lisbon and Lagos</span>');
  html = swap(html, '<span class="ar-trust-item">Not tied to one insurer — Zurich, Allianz, Hiscox &amp; Liberty Mutual</span>', '<span class="ar-trust-item">Advice given in writing</span>');
  html = swap(html, '<span class="ar-trust-item">We handle the claim for you</span>', '<span class="ar-trust-item">One adviser, from first contact to claim</span>');
  return html.split(WA_OLD).join(wa);
}

function enTail(a) {
  let html = langSelect(EN_TAIL, a.key);
  html = swap(html,
    `<p class="footer-brand-desc">English-speaking insurance broker for international clients, registered with Portugal's ASF, no. 425591790/3, and serving Spain on a cross-border basis &mdash; home, health, car, life and private-client cover.</p>`,
    `<p class="footer-brand-desc">Private-client insurance intermediary registered with Portugal's ASF, no. 425591790/3, with offices in Lisbon and Lagos, advising households in Portugal and Spain &mdash; high-value homes, art and collections, liability and family protection.</p>`);
  html = swap(html,
    '<div class="ar-sticky-cta-label">Free quote in 24h<small>English-speaking, ASF-registered insurance broker</small></div>',
    '<div class="ar-sticky-cta-label">Written assessment<small>ASF-registered private-client intermediary</small></div>');
  html = swap(html, '<a href="#ar-quote-form" class="ar-btn ar-btn-primary">Free quote</a>', '<a href="#ar-quote-form" class="ar-btn ar-btn-primary">Request assessment</a>');
  html = swap(html, 'data-topics="casa_geral,lagos"', `data-topics="${a.chatTopics}"`);
  return html.split(WA_OLD).join(a.key === 'nautical' ? WA_NEW_BOAT : WA_NEW);
}

function enArticle(a) {
  const wa = a.key === 'nautical' ? WA_NEW_BOAT : WA_NEW;
  const hero = `<div class="article-hero"><div class="article-hero-img" style="background:${a.gradient}"><span>${a.heroLabel}</span></div></div>
<article class="article-container"><div class="article-tag">${a.tag}</div><h1 class="article-title">${escText(plain(a.title))}</h1>  <div class="article-date"><time datetime="${PUBLISHED}">Published 27 September 2026</time> &middot; ${a.readingTime} min read</div>
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
    <a href="#ar-quote-form" class="ar-btn ar-btn-primary">Request a written assessment</a>
    <a href="${wa}" target="_blank" rel="noopener" class="ar-btn ar-btn-wa ">${WA_SVG}<span class="ar-sticky-wa-text">WhatsApp</span></a>
  </div>
</div>`;
  const body = `<div class="article-body">
${a.intro}
${a.body.map(([h2, html]) => `<h2>${h2}</h2>\n${html}`).join('\n')}
<h2>A short checklist</h2>
<ul>
${a.checklist.map((c) => `<li>${c}</li>`).join('\n')}
</ul>
${cta}
<h2>Talk to us</h2>
${a.closing}
<p><em>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3. General information from an insurance intermediary, not personalised advice; what a policy covers depends on its wording.</em></p>
</div>
`;
  const faq = `<section class="ar-cv ar-faq">
  <h2>Frequently asked questions</h2>
${a.faq.map(([q, ans]) => `  <details class="ar-faq-item">
    <summary>${escText(q)}</summary>
    <div class="ar-faq-answer">${escText(ans)}</div>
  </details>`).join('\n')}
</section>

`;
  const related = `<section class="related-section"><h2 class="related-title">Related reading</h2><div class="related-grid">
${a.related.map(([href, tag, t]) => `    <a href="${href}" class="related-card">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${escText(t)}</div>
    </a>`).join('\n')}
  </div>
</section>
`;
  return hero + body + faq + enForm(a) + related;
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
const PT_ASSETS = between(PT_T, '<link href="https://fonts.googleapis.com/css2?family=Albert+Sans', '</head>');
const PT_BODY_TOP = between(PT_T, '<body>', '<div class="breadcrumb">');
const PT_TAIL = PT_T.slice(PT_T.indexOf('<footer>'));
const PT_WA_SVG = between(PT_T, '<svg viewBox="0 0 24 24"><path d="M17.472', '</svg>', { includeEnd: true });
const PT_MONTHS = 'janeiro fevereiro março abril maio junho julho agosto setembro outubro novembro dezembro'.split(' ');

// Styles the private-clients template lacks: H2 in the body, ordered lists, the FAQ block.
const PT_EXTRA_CSS = `<style>
  .article-body h2 { font-family: 'Stolzl', 'Albert Sans', sans-serif; font-size: 28px; font-weight: 700; color: var(--ink); line-height: 1.25; margin: 44px 0 18px; }
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
    publisher: { '@type': 'Organization', name: 'Adler & Rochefort', logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/logo-adler-rochefort.png` } },
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
${hreflangLinks(a.key)}
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
${ld(faqLd(a))}

${PT_ASSETS}${PT_EXTRA_CSS}</head>
`;
}

function ptBody(a) {
  const src = `/private-clients/?source=blog%3A${a.slug}#pedido`;
  const wa = `https://wa.me/351928226570?text=${encodeURIComponent(a.whatsapp)}`;
  const [y, m, d] = PUBLISHED.split('-').map(Number);
  const top = langSelect(PT_BODY_TOP, a.key);
  return `${top}<div class="breadcrumb">
  <a href="/">Início</a><span>&rsaquo;</span>
  <a href="/blog/">Insights</a><span>&rsaquo;</span>
  <a href="/blog/categoria/private-clients/">Private Clients</a><span>&rsaquo;</span>
  ${escText(plain(a.title))}
</div>

<article class="article-container">
  <div class="article-tag">${a.tag}</div>
  <h1 class="article-title">${escText(plain(a.title))}</h1>
  <div class="article-date"><time datetime="${PUBLISHED}">Publicado a ${d} de ${PT_MONTHS[m - 1]} de ${y}</time> &middot; ${a.readingTime} min de leitura</div>
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
    <div class="cta-topo-title">Peça um parecer por escrito sobre a proteção do seu património</div>
    <div class="cta-topo-subtitle">Análise por um mediador de seguros registado na ASF, com escritórios em Lisboa e Lagos. Sem compromisso.</div>
    <a class="cta-btn" href="${src}">Pedir análise →</a>
    <div class="cta-topo-micro">Resposta em 24h úteis. Os seus dados são tratados ao abrigo do RGPD.</div>
  </div>

  <div class="article-body">
${a.intro}
${a.body.map(([h2, html], i) => {
    const block = `<h2>${h2}</h2>\n${html}`;
    // WhatsApp strip after the Spain section, before the homes
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
<p><em>A Adler &amp; Rochefort é uma marca comercial da Ownizo, Unipessoal Lda., registada na ASF com o n.º 425591790/3. Informação geral prestada por um mediador de seguros, que não substitui aconselhamento personalizado; o âmbito de cada apólice depende das respetivas condições.</em></p>
  </div>

  <div class="blog-cta" style="margin:48px 0 0;background:#F5F1E8;border:1px solid #E8E5DF;border-left:4px solid #5A6610;border-radius:12px;padding:32px 36px;text-align:center;">
    <h3 style="font-family:'Stolzl', 'Albert Sans',sans-serif;font-size:22px;font-weight:700;color:#1A200C;margin:0 0 12px;line-height:1.3;">${a.ctaFinal.title}</h3>
    <p style="font-family:'Stolzl', 'Albert Sans',sans-serif;font-size:16px;color:#565F48;margin:0 0 24px;line-height:1.6;">${a.ctaFinal.text}</p>
    <a href="${src}" style="display:inline-block;background:#F3FF74;color:#283113;padding:14px 30px;font-family:'Stolzl', 'Albert Sans',sans-serif;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:8px;">Pedir análise →</a>
  </div>
</article>

<section class="article-faq">
  <h2>Perguntas frequentes</h2>
${a.faq.map(([q, ans]) => `  <div class="faq-item">
    <h3>${escText(q)}</h3>
    <p>${escText(ans)}</p>
  </div>`).join('\n')}
</section>

<section class="related-section">
  <h2 class="related-title">Artigos relacionados</h2>
  <div class="related-grid">
${a.related.map(([href, tag, t]) => `    <a href="${href}" class="related-card${href.startsWith('/private-clients/') ? ' related-card-landing' : ''}">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${escText(t)}</div>
    </a>`).join('\n')}
  </div>
</section>

`;
}

function buildPt(a) {
  a.wordCount = countWords(a);
  a.readingTime = Math.max(5, Math.round(a.wordCount / 220));
  const tail = langSelect(PT_TAIL, a.key);
  return ptHead(a) + ptBody(a) + tail;
}

// ===========================================================================
const out = [];
for (const a of EN) {
  const dir = join(ROOT, 'public/en/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  const html = buildEn(a);
  writeFileSync(join(dir, 'index.html'), html);
  out.push({ lang: 'en', a });
  console.log(`wrote public/en/blog/${a.slug}/index.html (${a.wordCount} words)`);
}
for (const a of PT) {
  const dir = join(ROOT, 'public/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  const html = buildPt(a);
  writeFileSync(join(dir, 'index.html'), html);
  out.push({ lang: 'pt', a });
  console.log(`wrote public/blog/${a.slug}/index.html (${a.wordCount} words)`);
}

if (!process.argv.includes('--no-data')) {
  const dataPath = join(ROOT, 'data/articles.json');
  const data = JSON.parse(readFileSync(dataPath, 'utf8'));
  for (const { lang, a } of out) {
    const record = {
      slug: a.slug,
      lang,
      status: 'published',
      url: lang === 'en' ? `/en/blog/${a.slug}/` : `/blog/${a.slug}/`,
      category: lang === 'en' ? 'home-property' : null,
      ...(lang === 'pt' ? { cluster: 'private-clients' } : {}),
      tag: plain(a.tag),
      title: plain(a.title),
      metaTitle: plain(a.metaTitle),
      description: plain(a.description),
      excerpt: plain(a.excerpt),
      image: null,
      imageGradient: lang === 'en' ? a.gradient.replace('linear-gradient(135deg,', 'linear-gradient(135deg, ').replace(/,(?=#)/g, ', ') : 'linear-gradient(135deg, #283113 0%, #4B5A22 55%, #8C9A4E 100%)',
      imageAlt: plain(a.title),
      published: PUBLISHED,
      modified: PUBLISHED,
      dateLabel: lang === 'en' ? 'September 2026' : 'Setembro 2026',
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
