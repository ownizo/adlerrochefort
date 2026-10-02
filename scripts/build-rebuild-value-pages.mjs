#!/usr/bin/env node
/**
 * Writes the rebuild-value page for the hand-authored languages:
 *
 *   PT  /seguros/habitacao/valor-reconstrucao/            from /seguros/habitacao/
 *   EN  /en/rebuild-value-home-insurance-portugal/        from /en/home-insurance-quote/
 *   DE  /de/wiederaufbauwert-hausversicherung-portugal/   from /de/hausversicherung-portugal/
 *   NL  /nl/herbouwwaarde-woonverzekering-portugal/       from /nl/woonverzekering-portugal/
 *   FR  /fr/valeur-reconstruction-assurance-habitation-portugal/  from /fr/
 *
 *   node scripts/build-rebuild-value-pages.mjs
 *
 * Each page is a clone of that language's home-insurance page (the French one
 * of the French hub, which carries the only French form) so it keeps the
 * language's own chrome, scripts and — the point of the brief — its own home
 * form. Head metadata, hreflang (the twelve-language rebuild-value group),
 * JSON-LD, breadcrumb, hero and body content are replaced; the form block is
 * kept byte for byte apart from its heading. Content comes from
 * scripts/rebuild-value.data.mjs. Re-running is safe: templates are read from
 * their own URLs, never from the pages this script writes.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { REBUILD, REBUILD_URLS } from './rebuild-value.data.mjs';
import { LANGS } from './lib/lang-selector.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';
const read = (url) => readFileSync(join(PUBLIC, url, 'index.html'), 'utf8');
const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escText = (s) => s.replace(/&(?![a-z#0-9]+;)/g, '&amp;');

function cut(html, startMarker, endMarker, replacement, label) {
  const a = html.indexOf(startMarker);
  const b = html.indexOf(endMarker, a + 1);
  if (a < 0 || b < 0) throw new Error(`${label}: markers not found (${startMarker} … ${endMarker})`);
  return html.slice(0, a) + replacement + html.slice(b);
}
function sub(html, re, replacement, label) {
  if (!re.test(html)) throw new Error(`${label}: pattern not found ${re}`);
  return html.replace(re, replacement);
}

/* ─────────── head ─────────── */

function head(html, key) {
  const c = REBUILD[key];
  const url = ORIGIN + REBUILD_URLS[key];
  const title = escText(c.title);
  const desc = escAttr(c.description);
  html = sub(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, key);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);
  html = html.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${escAttr(c.keywords)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escAttr(c.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escAttr(c.title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${desc}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="article">');

  // hreflang: the twelve rebuild-value pages, x-default English.
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?/g, '');
  const alts = LANGS.map((l) => `  <link rel="alternate" hreflang="${l.hreflang}" href="${ORIGIN}${REBUILD_URLS[l.key]}">`)
    .concat(`  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${REBUILD_URLS.en}">`)
    .join('\n');
  html = html.replace(/(<link rel="canonical" href="[^"]*">)/, `$1\n${alts}`);

  // JSON-LD: one Article + BreadcrumbList + FAQPage, instead of the template's.
  html = html.replace(/[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: c.h1,
        name: c.title,
        description: c.description,
        inLanguage: LANGS.find((l) => l.key === key).hreflang,
        datePublished: '2026-10-02T09:00:00+00:00',
        dateModified: '2026-10-02T09:00:00+00:00',
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: 'Hugo Gonçalves', jobTitle: 'Agente de seguros (ASF 425591790/3)' },
        publisher: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };
  // The cloned templates style their own sections, not free-form lists and
  // paragraphs inside them; this keeps the rebuild-value copy readable in all five.
  const RV_CSS = '<style>.rv-body p{margin:0 0 14px;line-height:1.7}.rv-body ul{margin:0 0 18px;padding-left:1.25em;list-style:disc}.rv-body li{margin:0 0 8px;line-height:1.6}.rv-body .scrim-cta{margin:18px 0 22px}</style>';
  html = html.replace('</head>', `${RV_CSS}\n</head>`);
  html = html.replace('</head>', `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n</script>\n</head>`);
  return html;
}

/** Language selector: every row points at that language's rebuild-value page. */
function selector(html) {
  for (const l of LANGS) {
    const re = new RegExp(`<a href="[^"]*"( lang="${l.html}"[^>]*>)(<span>[^<]*</span>)(?:<span class="ar-langsel-note">[^<]*</span>)?`, 'g');
    html = html.replace(re, `<a href="${REBUILD_URLS[l.key]}"$1$2`);
    const re2 = new RegExp(`<a href="[^"]*"( lang="${l.html}"[^>]*>)([^<]+)</a>`, 'g');
    html = html.replace(re2, `<a href="${REBUILD_URLS[l.key]}"$1$2</a>`);
  }
  return html;
}

/* ─────────── body, per template ─────────── */

function pt(html) {
  const c = REBUILD.pt;
  html = sub(html, /<nav class="breadcrumb"[^>]*>[\s\S]*?<\/nav>/, `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Início</a><span>&rsaquo;</span><a href="/seguros/">Seguros</a><span>&rsaquo;</span><a href="/seguros/habitacao/">Seguro de habitação</a><span>&rsaquo;</span><a href="${REBUILD_URLS.pt}">${c.crumb}</a></nav>`, 'pt');
  html = sub(html, /<h1>[\s\S]*?<\/h1>/, `<h1>${c.h1}</h1>`, 'pt');
  html = sub(html, /<p class="lp-hero-sub">[\s\S]*?<\/p>/, `<p class="lp-hero-sub">${c.standfirst}</p>`, 'pt');
  html = sub(html, /(<div class="lp-form-card[^"]*">\s*<h2>)[^<]*(<\/h2>)/, `$1${c.formHeading}$2`, 'pt');
  const body = c.sections
    .map((s, i) =>
      i % 2
        ? `<section class="lp-section" id="${s.id}" style="background:var(--cream2);max-width:none;">\n  <div style="max-width:1400px;margin:0 auto;">\n    <h2>${s.h2}</h2>\n    <div class="rv-body">${s.html}</div>\n  </div>\n</section>\n\n`
        : `<section class="lp-section" id="${s.id}">\n  <h2>${s.h2}</h2>\n  <div class="rv-body">${s.html}</div>\n</section>\n\n`
    )
    .join('');
  html = cut(html, '<section class="lp-section" id="elevado-valor"', '<section class="partners-section">', body, 'pt');
  const faq = `<section class="lp-section" id="faq">\n  <h2>Perguntas frequentes</h2>\n  <div class="lp-faq">\n${c.faq.map((f) => `    <details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('\n')}\n  </div>\n</section>\n\n`;
  html = cut(html, '<section class="lp-section" id="faq">', '<section class="cta-strip"', faq, 'pt');
  return html;
}

function en(html) {
  const c = REBUILD.en;
  html = sub(html, /<div class="lp-eyebrow">[^<]*<\/div>/, `<div class="lp-eyebrow">${c.eyebrow}</div>`, 'en');
  html = sub(html, /<h1>[\s\S]*?<\/h1>/, `<h1>${c.h1}</h1>`, 'en');
  html = sub(html, /<p class="lp-hero-sub">[\s\S]*?<\/p>/, `<p class="lp-hero-sub">${c.standfirst}</p>`, 'en');
  html = sub(html, /(<section class="lp-form-section" id="quote-form">\s*<div class="lp-form-card">\s*<h2>)[^<]*(<\/h2>)/, `$1${c.formHeading}$2`, 'en');
  const body = `<!-- REBUILD VALUE -->\n<section class="lp-sections">\n  <div class="lp-sections-inner">\n${c.sections
    .map((s) => `    <div class="lp-card" id="${s.id}">\n      <h2>${s.h2}</h2>\n      <div class="rv-body">${s.html}</div>\n    </div>\n`)
    .join('\n')}  </div>\n</section>\n\n`;
  html = cut(html, '<!-- WHAT WE INSURE -->', '<!-- QUOTE FORM -->', body, 'en');
  const faq = `<!-- FAQ -->\n<section class="lp-faq-section">\n  <div class="lp-faq-inner">\n    <h2 class="lp-faq-title">Frequently asked questions</h2>\n${c.faq
    .map((f) => `    <div class="lp-faq-item">\n      <h3>${f.q}</h3>\n      <p>${f.a}</p>\n    </div>`)
    .join('\n')}\n  </div>\n</section>\n\n`;
  html = cut(html, '<!-- FAQ -->', '<!-- REGULATORY DISCLAIMER -->', faq, 'en');
  return html;
}

function deNl(html, key, { formMarker, faqTitle, faqEyebrow, details }) {
  const c = REBUILD[key];
  html = sub(html, /(<nav class="breadcrumb"[^>]*>\s*<ol>\s*<li>[\s\S]*?<\/li>)[\s\S]*?(<\/ol>)/, `$1\n      <li><span aria-current="page">${c.crumb}</span></li>\n    $2`, key);
  html = sub(html, /(<section class="hero"[\s\S]*?)<span class="eyebrow">[^<]*<\/span>/, `$1<span class="eyebrow">${c.eyebrow}</span>`, key);
  html = sub(html, /(<h1 id="hero-title">)[\s\S]*?(<\/h1>)/, `$1${c.h1}$2`, key);
  html = sub(html, /<p class="hero-subtitle">[\s\S]*?<\/p>/, `<p class="hero-subtitle">${c.standfirst}</p>`, key);
  html = sub(html, /(<section class="section form-section"[^>]*>\s*<div class="form-shell[^"]*">\s*<h2[^>]*>)[^<]*(<\/h2>)/, `$1${c.formHeading}$2`, key);
  const sections = c.sections
    .map((s, i) => `<section class="section ${i % 2 ? 'tint' : 'plain'}" aria-labelledby="${s.id}">\n  <div class="container narrow article-body">\n    <h2 id="${s.id}">${s.h2}</h2>\n    <div class="rv-body">${s.html}</div>\n  </div>\n</section>\n\n`)
    .join('');
  const items = c.faq
    .map((f) =>
      details
        ? `      <details class="faq-item">\n        <summary>${f.q}</summary>\n        <div class="faq-answer"><p>${f.a}</p></div>\n      </details>`
        : `      <div class="faq-item">\n        <h3>${f.q}</h3>\n        <div class="faq-answer"><p>${f.a}</p></div>\n      </div>`
    )
    .join('\n');
  const faq = `<section class="section" aria-labelledby="faq-title">\n  <div class="container narrow">\n    <span class="eyebrow">${faqEyebrow}</span>\n    <h2 id="faq-title">${faqTitle}</h2>\n    <div class="faq-list">\n${items}\n    </div>\n  </div>\n</section>\n\n`;
  // Everything between the language-policy band and the form becomes the new body.
  const policyEnd = html.indexOf('</div>', html.indexOf('<div class="lang-policy-band">')) + '</div>'.length;
  const formStart = html.indexOf(formMarker);
  if (policyEnd < 10 || formStart < 0) throw new Error(`${key}: body markers not found`);
  return html.slice(0, policyEnd) + '\n\n' + sections + faq + html.slice(formStart);
}

function fr(html) {
  const c = REBUILD.fr;
  html = sub(html, /<div class="hero-badge">[^<]*<\/div>/, `<div class="hero-badge">${c.eyebrow}</div>`, 'fr');
  html = sub(html, /(<section class="hero">[\s\S]*?)<h1>[\s\S]*?<\/h1>/, `$1<h1>${c.h1}</h1>`, 'fr');
  html = sub(html, /(<section class="hero">[\s\S]*?)<p class="hero-subtitle">[\s\S]*?<\/p>/, `$1<p class="hero-subtitle">${c.standfirst}</p>`, 'fr');
  const body = `<!-- REBUILD VALUE -->\n${c.sections
    .map((s, i) => `<section class="section${i % 2 ? ' alt' : ''}" id="${s.id}">\n  <div class="container narrow">\n    <h2>${s.h2}</h2>\n    <div class="rv-body">${s.html}</div>\n  </div>\n</section>\n`)
    .join('\n')}\n`;
  html = cut(html, '<!-- WHO WE ARE -->', '<!-- LEAD FORM -->', body, 'fr');
  html = sub(html, /(<div class="lead-copy">\s*<h2>)[\s\S]*?(<\/h2>)/, `$1${c.formHeading}$2`, 'fr');
  html = sub(html, /<option value="" disabled selected>/, '<option value="" disabled>', 'fr');
  html = sub(html, /<option value="Habitation">/, '<option value="Habitation" selected>', 'fr');
  const faq = `<!-- FAQ -->\n<section class="section">\n  <div class="container narrow">\n    <h2>Questions <em>fréquentes</em></h2>\n${c.faq
    .map((f) => `    <div class="faq-item">\n      <h3>${f.q}</h3>\n      <p>${f.a}</p>\n    </div>`)
    .join('\n')}\n  </div>\n</section>\n\n`;
  html = cut(html, '<!-- FAQ -->', '<!-- FINAL CTA -->', faq, 'fr');
  return html;
}

/* ─────────── run ─────────── */

const JOBS = [
  { key: 'pt', from: '/seguros/habitacao/', body: pt },
  { key: 'en', from: '/en/home-insurance-quote/', body: en },
  { key: 'de', from: '/de/hausversicherung-portugal/', body: (h) => deNl(h, 'de', { formMarker: '<section class="section form-section"', faqTitle: 'Wiederaufbauwert — häufige Fragen', faqEyebrow: 'Häufige Fragen', details: false }) },
  { key: 'nl', from: '/nl/woonverzekering-portugal/', body: (h) => deNl(h, 'nl', { formMarker: '<section class="section form-section"', faqTitle: 'Herbouwwaarde — veelgestelde vragen', faqEyebrow: 'Veelgestelde vragen', details: true }) },
  { key: 'fr', from: '/fr/', body: fr },
];

for (const job of JOBS) {
  let html = read(job.from);
  html = job.body(html);
  html = head(html, job.key);
  html = selector(html);
  const out = join(PUBLIC, REBUILD_URLS[job.key], 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`${REBUILD_URLS[job.key]}  (from ${job.from})`);
}
