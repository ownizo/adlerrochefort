/**
 * Page shell for the generated sections (/blog/, /seguros/, the feeds).
 *
 * The chrome fragments themselves live in lib/partials.mjs — the single
 * definition shared with scripts/unify-chrome.mjs, which pushes the same
 * markup into the hand-written pages. This module adds what only generated
 * pages need: the shared stylesheet, the JSON-LD helpers and the page
 * skeleton.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHROME } from './partials.mjs';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const PUBLIC = join(ROOT, 'public');
export const ORIGIN = 'https://adlerrochefort.com';

function between(html, startMarker, endMarker, { inclusive = true } = {}) {
  const s = html.indexOf(startMarker);
  if (s === -1) throw new Error(`marker not found: ${startMarker}`);
  const e = html.indexOf(endMarker, s);
  if (e === -1) throw new Error(`end marker not found: ${endMarker}`);
  return inclusive ? html.slice(s, e + endMarker.length) : html.slice(s + startMarker.length, e);
}

const home = await readFile(join(PUBLIC, 'index.html'), 'utf8');

// --- Shared stylesheet ------------------------------------------------------
const styleBlocks = [...home.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]);

const EXTRA_CSS = `
/* ---------------------------------------------------------------------------
   Components introduced by the /blog/ and /seguros/ sections. Built from the
   same custom properties as everything above — no existing rule is redefined.
   --------------------------------------------------------------------------- */
.page-head {
  max-width: 1400px; margin: 0 auto; padding: 60px 60px 0;
}
.page-intro {
  max-width: 820px; color: var(--ink2); font-size: 16px; line-height: 1.8;
}
.page-intro p { margin: 0 0 16px; }
.page-intro a { color: var(--primary); }
.breadcrumb {
  max-width: 1400px; margin: 0 auto; padding: 24px 60px 0;
  font-size: 13px; color: var(--muted);
}
.breadcrumb a { color: var(--muted); text-decoration: none; }
.breadcrumb a:hover { color: var(--primary); }
.breadcrumb span { margin: 0 8px; }
.category-nav {
  max-width: 1400px; margin: 0 auto; padding: 32px 60px 0;
  display: flex; flex-wrap: wrap; gap: 10px;
}
.category-chip {
  display: inline-block; padding: 8px 18px; border: 1px solid var(--border);
  background: var(--white); color: var(--ink2); text-decoration: none;
  font-size: 12px; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; transition: all 0.2s;
}
.category-chip:hover { border-color: var(--primary); color: var(--primary); }
.category-chip.active { background: var(--primary); border-color: var(--primary); color: var(--white); }
.category-chip-count { opacity: 0.6; margin-left: 6px; font-weight: 500; }
.pagination {
  max-width: 1400px; margin: 0 auto; padding: 0 60px 80px;
  display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
}
.pagination a, .pagination span {
  min-width: 40px; height: 40px; display: inline-flex; align-items: center;
  justify-content: center; padding: 0 12px; border: 1px solid var(--border);
  background: var(--white); color: var(--ink2); text-decoration: none;
  font-size: 13px; font-weight: 600;
}
.pagination a:hover { border-color: var(--primary); color: var(--primary); }
.pagination .current { background: var(--primary); border-color: var(--primary); color: var(--white); }
.lp-section {
  max-width: 1400px; margin: 0 auto; padding: 60px;
}
.lp-section h2 {
  font-size: clamp(26px, 3vw, 36px); font-weight: 400; color: var(--ink);
  letter-spacing: -0.02em; margin: 0 0 24px;
}
.lp-section h3 { font-size: 18px; font-weight: 600; color: var(--ink); margin: 0 0 8px; }
.lp-section p { color: var(--ink2); font-size: 16px; line-height: 1.8; margin: 0 0 16px; }
.lp-section a { color: var(--primary); }
.lp-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;
}
.lp-card {
  background: var(--white); border: 1px solid var(--border); padding: 28px;
}
.lp-card p { font-size: 14px; margin: 0; }
.lp-card--muted { background: var(--cream2); }
.lp-list { color: var(--ink2); font-size: 16px; line-height: 1.9; padding-left: 20px; margin: 0 0 16px; }
.lp-list li { margin-bottom: 10px; }
.lp-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
.lp-step-num {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em; color: var(--accent);
  text-transform: uppercase; margin-bottom: 10px;
}
.lp-hero {
  background: var(--hero-bg); color: var(--white); padding: 56px 60px 80px;
}
.lp-hero-inner {
  max-width: 1400px; margin: 0 auto;
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: start;
}
.lp-hero h1 {
  font-size: clamp(32px, 4.4vw, 54px); font-weight: 400; line-height: 1.1;
  letter-spacing: -0.03em; margin: 0 0 20px; color: var(--white);
}
.lp-hero h1 em { font-style: italic; color: var(--accent); }
.lp-hero-sub { font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.75); margin: 0 0 28px; max-width: 620px; }
.lp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.lp-trust { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 32px; }
.lp-trust div { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
.lp-form-card { background: var(--white); padding: 32px; }
.lp-form-card h2 { font-size: 20px; font-weight: 600; color: var(--ink); margin: 0 0 6px; }
.lp-form-card .lp-form-sub { font-size: 13px; color: var(--muted); margin: 0 0 20px; }
.lp-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.lp-form-grid .full { grid-column: 1 / -1; }
.lp-form-card label {
  display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 6px;
}
.lp-form-card input, .lp-form-card select, .lp-form-card textarea {
  width: 100%; padding: 11px 12px; border: 1px solid var(--border);
  background: var(--cream); font-family: inherit; font-size: 14px; color: var(--ink);
}
.lp-form-card input:focus, .lp-form-card select:focus, .lp-form-card textarea:focus {
  outline: none; border-color: var(--primary);
}
.lp-form-card .radio-row { display: flex; gap: 18px; }
.lp-form-card .radio-row label {
  display: flex; align-items: center; gap: 7px; text-transform: none;
  letter-spacing: 0; font-size: 14px; font-weight: 500; color: var(--ink2); margin: 0;
}
.lp-form-card .radio-row input { width: auto; }
.lp-check-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; }
.lp-check-grid label {
  display: flex; align-items: center; gap: 7px; text-transform: none;
  letter-spacing: 0; font-size: 14px; font-weight: 500; color: var(--ink2); margin: 0;
}
.lp-check-grid input { width: auto; }
.lp-form-submit {
  width: 100%; margin-top: 18px; padding: 14px; background: var(--primary);
  color: var(--white); border: none; font-family: inherit; font-size: 13px;
  font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
  transition: background 0.2s;
}
.lp-form-submit:hover { background: var(--primary-hover); }
.lp-form-micro { font-size: 11px; color: var(--muted); margin-top: 12px; line-height: 1.6; }
.lp-faq { max-width: 900px; }
.lp-faq details {
  border-bottom: 1px solid var(--border); padding: 20px 0;
}
.lp-faq summary {
  cursor: pointer; font-size: 16px; font-weight: 600; color: var(--ink); list-style: none;
}
.lp-faq summary::-webkit-details-marker { display: none; }
.lp-faq summary::after { content: '+'; float: right; color: var(--primary); font-size: 20px; line-height: 1; }
.lp-faq details[open] summary::after { content: '−'; }
.lp-faq p { margin: 14px 0 0; font-size: 15px; }
.lp-related-landing {
  background: var(--primary-dim); border: 1px solid var(--primary);
}
.lp-related-landing .related-card-tag { color: var(--primary); }
.article-author {
  display: flex; gap: 14px; align-items: center; margin: 0 0 24px;
  padding: 16px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.article-author-photo {
  width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
  background: var(--cream2);
}
.article-author-name { font-size: 15px; font-weight: 600; color: var(--ink); }
.article-author-name a { color: inherit; text-decoration: none; }
.article-author-name a:hover { color: var(--primary); }
.article-author-meta { font-size: 12px; color: var(--muted); line-height: 1.6; margin-top: 2px; }
.article-toc {
  background: var(--cream2); border-left: 3px solid var(--primary);
  padding: 22px 26px; margin: 0 0 32px;
}
.article-toc-title {
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 12px;
}
.article-toc ol { margin: 0; padding-left: 20px; }
.article-toc li { margin-bottom: 7px; font-size: 15px; line-height: 1.5; }
.article-toc a { color: var(--ink2); text-decoration: none; }
.article-toc a:hover { color: var(--primary); text-decoration: underline; }
.article-faq { margin-top: 48px; }
.lang-unavailable { opacity: 0.55; }
@media (max-width: 1024px) {
  .lp-hero-inner { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .page-head, .breadcrumb, .category-nav, .pagination, .lp-section { padding-left: 24px; padding-right: 24px; }
  .lp-hero { padding: 70px 24px 50px; }
  .lp-form-grid { grid-template-columns: 1fr; }
}
`;

export async function writeSharedStylesheet() {
  await mkdir(join(PUBLIC, 'css'), { recursive: true });
  const css =
    '/* Generated by scripts/generate-pages.mjs from public/index.html — do not edit by hand. */\n' +
    styleBlocks.join('\n') +
    EXTRA_CSS;
  await writeFile(join(PUBLIC, 'css', 'ar-site.css'), css);
  return css.length;
}

// --- Chrome fragments -------------------------------------------------------
// These used to be scraped out of the homepages here, with a second copy of the
// same markers and the same anchor-absolutising logic. They now come from
// lib/partials.mjs, which is the single definition the whole site is built
// from — the generators below and scripts/unify-chrome.mjs therefore emit
// byte-identical chrome by construction rather than by coincidence.
export const TOP_BAR = CHROME.pt.topBar;
export const NAV = CHROME.pt.nav;
export const MOBILE_NAV = CHROME.pt.mobileNav;
export const FOOTER = CHROME.pt.footer;
export const COOKIE_BANNER = CHROME.pt.cookie;

// --- English chrome ---------------------------------------------------------
// The English site is not a translation of the Portuguese one: it has its own
// navigation, its own service links and its own footer. Generated English
// pages take their chrome from /en/index.html so they sit inside that site
// rather than inside the Portuguese one.
export const TOP_BAR_EN = CHROME.en.topBar;
export const NAV_EN = CHROME.en.nav;
export const MOBILE_NAV_EN = CHROME.en.mobileNav;
export const FOOTER_EN = CHROME.en.footer;

// The English homepage carries no cookie notice of its own; partials.mjs
// supplies the translated one.
export const COOKIE_BANNER_EN = CHROME.en.cookie;

export const GA = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y31W0QJ9WH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y31W0QJ9WH');
  gtag('config', 'AW-18361722533');
</script>`;

export const PAGE_SCRIPTS = `<script>
  function toggleMenu() { document.getElementById('mobileNav').classList.toggle('open'); }
  (function () {
    if (!localStorage.getItem('cookie_consent')) {
      document.getElementById('cookieBanner').classList.add('show');
    }
  })();
  function respondCookies(accepted) {
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');
    document.getElementById('cookieBanner').classList.remove('show');
  }
  (function () {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade-up').forEach(function (el) { io.observe(el); });
  })();
</script>
<script defer src="/js/ar-analytics-tracker.js"></script>`;

export const esc = (s) =>
  String(s ?? '')
    .replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const jsonLd = (obj) =>
  `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`;

export const ORGANIZATION = {
  '@type': 'InsuranceAgency',
  '@id': `${ORIGIN}/#organization`,
  name: 'Adler & Rochefort',
  alternateName: 'Ownizo, Unipessoal Lda.',
  url: `${ORIGIN}/`,
  logo: `${ORIGIN}/images/logo-adler-rochefort.png`,
  image: `${ORIGIN}/images/og-image-adlerrochefort.png`,
  telephone: '+351928226570',
  email: 'insurance@adlerrochefort.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Av. do Atlântico 16, Esc. 5.07',
      postalCode: '1990-019',
      addressLocality: 'Lisboa',
      addressCountry: 'PT',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Varandas de São João 4',
      postalCode: '8600-324',
      addressLocality: 'Lagos',
      addressCountry: 'PT',
    },
  ],
  areaServed: { '@type': 'Country', name: 'Portugal' },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Registo ASF',
    value: '425591790/3',
  },
  sameAs: [
    'https://www.facebook.com/adlerrochefort',
    'https://www.instagram.com/adlerrochefort/',
    'https://www.linkedin.com/company/adler-rochefort',
  ],
};

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: ORIGIN + it.url } : {}),
    })),
  };
}

/**
 * Assembles a complete page from the shared chrome. `head` carries the
 * page-specific metadata; `body` the page-specific markup.
 */
export function page({ lang = 'pt-PT', head, body, bodyEnd = '' }) {
  const en = lang.startsWith('en');
  const topBar = en ? TOP_BAR_EN : TOP_BAR;
  const nav = en ? NAV_EN : NAV;
  const mobileNav = en ? MOBILE_NAV_EN : MOBILE_NAV;
  const footer = en ? FOOTER_EN : FOOTER;
  const cookie = en ? COOKIE_BANNER_EN : COOKIE_BANNER;
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#1C2B3A">
${head}
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/ar-site.css">
${GA}
</head>
<body>

${topBar}
${nav}
${mobileNav}

<main>
${body}
</main>

${footer}

${cookie}

${PAGE_SCRIPTS}
${bodyEnd}
</body>
</html>
`;
}

export async function writePage(relPath, html) {
  const target = join(PUBLIC, relPath, 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
  return `public/${relPath}/index.html`;
}
