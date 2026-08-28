#!/usr/bin/env node
/**
 * Builds the seven Spain informational articles — Phase 2 — under
 * /en/blog/. Content lives in spain-articles.data.mjs.
 *
 * Self-contained, matching build-spain-cluster.mjs's own reasoning: existing
 * blog articles are individually hand-authored (see README.md and
 * extract-articles.mjs's own docstring — "the curated data/articles.json is
 * hand-maintained"), not produced by a shared per-article generator, so there
 * is no existing "article builder" this script could extend without either
 * inventing one that doesn't exist or hand-typing seven near-identical
 * multi-hundred-line HTML documents directly, which is the higher-risk path.
 * What this script reuses instead is the *shape* of the existing article
 * template (public/en/blog/insurance-portugal-spain-international-residents/)
 * — same chrome classes, same TOC/author/about-us/related structure — with a
 * Spain-only nav/footer variant instead of the Portugal one, and the same
 * pre-write validation discipline as the rest of this branch.
 *
 * Run, in this order:
 *
 *   node scripts/build-spain-articles.mjs
 *   node scripts/extract-articles.mjs        (refreshes data/articles.extracted.json)
 *   node scripts/build-articles-data.mjs      (after adding the 7 slugs + 2
 *                                              categories to EN_CATEGORY_OF /
 *                                              EN_CATEGORIES in that file)
 *   node scripts/generate-blog.mjs            (regenerates listings/category
 *                                              pages, including the 2 new ones)
 *   node scripts/generate-sitemap.mjs
 *
 * hreflang.mjs and lang-switcher.mjs are deliberately not run — same reason
 * as build-spain-cluster.mjs: these articles carry no hreflang alternates,
 * and use their own market-context nav.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES } from './spain-articles.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';
const OG_IMAGE = `${ORIGIN}/images/og-image-adlerrochefort.png`;
const PT_HUB = '/en/expat-insurance-portugal/';

const esc = (s) =>
  String(s)
    .replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const json = (obj) => JSON.stringify(obj, null, 2);

const NAV = `
<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal's ASF, no. 425591790/3, and serves Spain on a cross-border basis. <a href="/en/expat-insurance-spain/">Insurance for expats in Spain</a></div>
<nav class="site-nav" role="navigation" aria-label="Article navigation">
  <a href="/en/" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager">
  </a>
  <div class="nav-right">
    <a href="/en/blog/" class="nav-back">Back to Insights</a>
    <div class="lang-switcher market-switch">
      <span class="market-current" aria-current="true">🇪🇸 Spain</span>
      <span class="lang-switcher-sep">|</span>
      <a href="${PT_HUB}">Looking for Portugal?</a>
    </div>
  </div>
</nav>`;

const footer = () => `
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Adler <em>&amp;</em> Rochefort</div>
      <p class="footer-brand-desc">English-speaking insurance broker, registered with Portugal's ASF. We help international residents and property owners in Portugal and Spain work out what cover they need, and arrange it in English.</p>
    </div>
    <div>
      <div class="footer-col-title">Spain</div>
      <ul class="footer-col-links">
        <li><a href="/en/expat-insurance-spain/">Insurance for expats in Spain</a></li>
        <li><a href="/en/health-insurance-spain/">Health Insurance</a></li>
        <li><a href="/en/home-insurance-spain/">Home Insurance</a></li>
        <li><a href="/en/landlord-insurance-spain/">Landlord Insurance</a></li>
        <li><a href="/en/car-insurance-spain/">Car Insurance</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Portugal</div>
      <ul class="footer-col-links">
        <li><a href="/en/expat-insurance-portugal/">Insurance for expats in Portugal</a></li>
        <li><a href="/en/home-insurance-quote/">Home Insurance</a></li>
        <li><a href="/en/car-insurance-portugal/">Car Insurance</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a></li>
        <li><a href="https://wa.me/351928226570" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        <li><a href="tel:+351928226570">+351 928 226 570</a></li>
        <li>Varandas de S&atilde;o Jo&atilde;o 4, 8600-324 Lagos, Portugal</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Adler &amp; Rochefort &middot; All rights reserved</div>
    <div class="footer-legal">
      <a href="/en/privacy-policy/">Privacy Policy</a>
      <a href="/en/terms-and-conditions/">Terms &amp; Conditions</a>
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">ASF Reporting Channel</a>
    </div>
  </div>
  <div class="footer-regulatory">
    <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda.</p>
    <p>Ownizo, Unipessoal Lda. is registered with the Portuguese Insurance and Pension Funds Supervisory Authority (ASF) under no. 425591790/3, and operates in Spain on a cross-border basis from that registration.</p>
  </div>
</footer>`;

const STYLE = `<style>:root{--primary:#2b4c7e;--primary-text:#1e3a63;--primary-hover:#4a6a9a;--accent:#a6303c;--cream:#F7F6F3;--cream2:#EFEDE7;--ink:#1B2027;--ink2:#4a5260;--muted:#68695C;--white:#fff;--border:#DFE0DB;--nav-bg:#1B2B4B;--footer-bg:#161B22;--navy:#1B2B4B}*{box-sizing:border-box;margin:0;padding:0}body{background:var(--cream);font-family:Montserrat,sans-serif;color:var(--ink)}html{scroll-behavior:smooth; scroll-padding-top: 96px}a:focus-visible,button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}.asf-top-bar{background:var(--nav-bg);color:#fff;font-size:12px;text-align:center;padding:7px 16px}.asf-top-bar a{color:#fff;text-decoration:underline}.site-nav{position:sticky;top:0;z-index:10;background:var(--nav-bg);padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between}.nav-logo{display:flex;align-items:center;gap:14px;text-decoration:none}.nav-logo-img{height:44px}.nav-right{display:flex;align-items:center;gap:20px}.nav-back{color:rgba(255,255,255,.8);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none}.nav-back:hover{color:var(--accent)}.market-switch{display:flex;align-items:center;gap:8px;font-size:12px}.market-switch .market-current{color:#fff;font-weight:700}.market-switch a{color:rgba(255,255,255,.75);text-decoration:none}.market-switch a:hover{color:var(--accent)}.lang-switcher-sep{color:rgba(255,255,255,.2);font-size:11px}.breadcrumb{padding:32px 80px 0;font-size:12px;color:var(--muted)}.breadcrumb a{color:var(--muted);text-decoration:none}.breadcrumb a:hover{color:var(--primary-text)}.breadcrumb span{margin:0 8px}.article-container{max-width:800px;margin:0 auto;padding:40px 80px 80px}.article-tag{display:inline-block;background:var(--primary-text);color:#fff;font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;padding:5px 12px;margin-bottom:20px}.article-title{font-size:clamp(28px,4.6vw,42px);font-weight:700;line-height:1.15;margin-bottom:16px}.article-standfirst{font-size:17px;line-height:1.75;color:var(--ink2);margin-bottom:20px}.article-date{font-size:13px;color:var(--muted);letter-spacing:.06em;margin-bottom:28px}.article-body p{font-size:16px;line-height:1.85;color:var(--ink2);margin-bottom:22px}.article-body h2{font-size:clamp(22px,3vw,29px);line-height:1.25;color:var(--ink);margin:48px 0 16px;padding-top:14px;border-top:1px solid var(--border)}.article-body h3{font-size:21px;line-height:1.3;color:var(--ink);margin:34px 0 14px}.article-body ul,.article-body ol{margin:0 0 22px}.article-body ul{list-style:none}.article-body ul li{font-size:15px;line-height:1.75;color:var(--ink2);padding:9px 0;border-bottom:1px solid var(--border);display:flex;gap:12px}.article-body ul li:before{content:'→';color:var(--primary);flex-shrink:0}.article-body a{color:var(--primary-text);font-weight:600}.article-body strong{color:var(--ink)}.article-toc{margin:8px 0 40px;padding:22px 26px;background:var(--cream2);border-radius:10px}.article-toc-title{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);margin-bottom:12px}.article-toc ol{margin:0;padding-left:20px}.article-toc li{font-size:14px;line-height:1.8;color:#5C6A6E}.article-toc a{color:#456;text-decoration:none}.article-toc a:hover{color:var(--primary-text);text-decoration:underline}.callout{background:var(--white);border:1px solid var(--border);border-left:4px solid var(--accent);padding:22px 26px;margin:0 0 26px}.callout p{font-size:15px;line-height:1.75;margin:0}.callout-title{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);margin-bottom:10px}.article-author{display:flex;align-items:center;gap:14px;margin:4px 0 30px;padding:16px 18px;background:var(--white);border:1px solid var(--border);border-left:3px solid var(--primary);border-radius:10px}.article-author-photo{border-radius:50%;object-fit:cover;flex-shrink:0}.article-author-name{font-size:15px;font-weight:700;color:var(--ink);line-height:1.35}.article-author-name a{color:inherit;text-decoration:none}.article-author-role{font-size:13px;color:var(--ink2);line-height:1.5;margin-top:2px}.article-author-creds{font-size:12px;color:#6E6F62;line-height:1.5;margin-top:4px}.about-us{background:var(--navy);color:rgba(255,255,255,.85);padding:34px 36px;margin:44px 0 0}.about-us h2{font-size:20px;color:#fff;margin:0 0 14px;border:0;padding:0}.about-us p{font-size:15px;line-height:1.8;color:rgba(255,255,255,.85);margin:0 0 12px}.about-us a{color:var(--accent);font-weight:600}.related-section{max-width:920px;margin:0 auto;padding:0 80px 70px}.related-title{font-size:22px;margin-bottom:18px}.related-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.related-card{background:#fff;border:1px solid var(--border);padding:22px;text-decoration:none;color:inherit}.related-card:hover{border-color:var(--primary)}.related-card-tag{font-size:10px;color:var(--primary-text);font-weight:700;text-transform:uppercase;letter-spacing:.12em;margin-bottom:10px}.related-card-title{font-size:15px;font-weight:700;line-height:1.45}footer{background:var(--footer-bg);color:rgba(255,255,255,.68);padding:56px 80px 32px}.footer-top{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.2fr;gap:48px}.footer-brand-name{font-size:22px;font-weight:600;color:#fff;margin-bottom:14px}.footer-brand-name em{color:var(--accent);font-style:normal}.footer-col-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:var(--accent);margin-bottom:16px}.footer-col-links{list-style:none}.footer-col-links li{margin-bottom:9px}.footer-col-links a{color:rgba(255,255,255,.68);text-decoration:none;font-size:13px}.footer-col-links a:hover{color:var(--accent)}.footer-bottom{max-width:1180px;margin:36px auto 0;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between}.footer-copy,.footer-legal a{font-size:12px;color:rgba(255,255,255,.55);text-decoration:none}.footer-legal{display:flex;gap:20px}.footer-legal a:hover{color:var(--accent)}.footer-regulatory{padding-top:24px;border-top:1px solid rgba(255,255,255,.12);margin-top:24px;text-align:center}.footer-regulatory p{font-size:11px;color:rgba(255,255,255,.65);margin:0;line-height:1.7}.footer-brand-desc{font-size:13px;line-height:1.7;color:rgba(255,255,255,.6)}@media(max-width:760px){.site-nav{padding:0 20px}.breadcrumb{padding:24px 24px 0}.article-container{padding:32px 24px 56px}.callout{padding:20px}.about-us{padding:26px 22px}.related-section{padding:0 24px 56px}.related-grid{grid-template-columns:1fr}footer{padding:44px 24px 28px}.footer-top{grid-template-columns:1fr}.footer-bottom{flex-direction:column;gap:14px}.article-author{flex-direction:column;align-items:flex-start}}</style>`;

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const dateLabel = (iso) => {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
};

function tocHtml(toc) {
  return `<nav class="article-toc" aria-labelledby="toc-title">
    <div class="article-toc-title" id="toc-title">On this page</div>
    <ol>
${toc.map((t) => `      <li><a href="${esc(t.href)}">${esc(t.label)}</a></li>`).join('\n')}
    </ol>
  </nav>`;
}

function relatedHtml(items) {
  return `<section class="related-section">
  <h2 class="related-title">Related reading</h2>
  <div class="related-grid">
${items
  .map(
    (r) => `    <a href="${esc(r.href)}" class="related-card">
      <div class="related-card-tag">${esc(r.tag)}</div>
      <div class="related-card-title">${esc(r.title)}</div>
    </a>`
  )
  .join('\n')}
  </div>
</section>`;
}

function faqLd(faq, articleUrl) {
  return json({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  });
}

function articleLd(a, url) {
  return json({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.h1,
    description: a.description,
    image: OG_IMAGE,
    datePublished: a.published,
    dateModified: a.published,
    inLanguage: 'en-GB',
    author: {
      '@type': 'Person',
      name: 'Hugo Gonçalves',
      jobTitle: 'Founder & Risk Management Specialist',
      url: `${ORIGIN}/en/about/`,
      worksFor: { '@type': 'Organization', name: 'Adler & Rochefort' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adler & Rochefort',
      logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/logo-adler-rochefort.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  });
}

function breadcrumbLd(a, url) {
  return json({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${ORIGIN}/en/blog/` },
      { '@type': 'ListItem', position: 3, name: a.h1 },
    ],
  });
}

function render(a) {
  const url = `${ORIGIN}/en/blog/${a.slug}/`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(a.title)}</title>
<meta name="description" content="${esc(a.description)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta property="article:published_time" content="${a.published}">
<meta property="article:modified_time" content="${a.published}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(a.title)}">
<meta name="twitter:description" content="${esc(a.description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<script type="application/ld+json">
${articleLd(a, url)}
</script>
<script type="application/ld+json">
${faqLd(a.faq, url)}
</script>
<script type="application/ld+json">
${breadcrumbLd(a, url)}
</script>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
${STYLE}
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y31W0QJ9WH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y31W0QJ9WH');
</script>
</head>
<body>
${NAV}

<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/en/">Home</a><span aria-hidden="true">&rsaquo;</span>
  <a href="/en/blog/">Insights</a><span aria-hidden="true">&rsaquo;</span>
  ${esc(a.h1)}
</nav>

<article class="article-container">
  <div class="article-tag">${esc(a.tag)}</div>
  <h1 class="article-title">${esc(a.h1)}</h1>
  <p class="article-standfirst">${a.standfirst}</p>
  <div class="article-date"><time datetime="${a.published}">${dateLabel(a.published)}</time></div>

  <div class="article-author">
    <picture>
      <source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">
      <img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" class="article-author-photo" width="56" height="56" loading="lazy" decoding="async">
    </picture>
    <div>
      <div class="article-author-name"><a href="/en/about/">Hugo Gonçalves</a></div>
      <div class="article-author-role">Founder &amp; Risk Management Specialist &middot; Adler &amp; Rochefort</div>
      <div class="article-author-creds">Insurance broker registered with the ASF under no. 425591790/3</div>
    </div>
  </div>

  ${tocHtml(a.toc)}

  <div class="article-body">
${a.bodyHtml}
  </div>
</article>

${relatedHtml(a.related)}

${footer()}

<script defer src="/js/ar-analytics-tracker.js"></script>
<script defer src="/js/lang-pref.js"></script>
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>This site uses cookies</strong>
      <p>We use cookies to improve your browsing experience. By continuing, you agree to our <a href="/en/privacy-policy/">Privacy Policy</a>.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">Reject</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">Accept</button>
    </div>
  </div>
</div>
<script>
  (function () {
    var b = document.getElementById('cookieBanner');
    if (b && !localStorage.getItem('cookie_consent')) b.classList.add('show');
  })();
  function respondCookies(accepted) {
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');
    document.getElementById('cookieBanner').classList.remove('show');
  }
</script>
</body>
</html>
`;
}

// --- validation --------------------------------------------------------------

const resolves = (path, pending) => {
  const clean = path.replace(/[?#].*$/, '');
  if (!clean) return true;
  if (pending.has(clean)) return true;
  return (
    existsSync(join(PUBLIC, clean, 'index.html')) ||
    existsSync(join(PUBLIC, clean)) ||
    existsSync(join(PUBLIC, `${clean}.html`))
  );
};

const FORBIDDEN = ['Decreto-Lei', 'DGSFP', 'IMT', 'bónus-malus', 'Cartão de Cidadão', 'AIMA', 'D7 visa', 'D8 visa'];

function validate(a, html, pending) {
  const errs = [];
  if (!/<h1[^>]*>[^<]+<\/h1>/.test(html)) errs.push('no H1');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errs.push('expected exactly one H1');
  if (!html.includes(`<link rel="canonical" href="${ORIGIN}/en/blog/${a.slug}/">`)) errs.push('canonical missing or wrong');
  if (/name="robots"[^>]*noindex/i.test(html)) errs.push('page is noindex');
  if (/hreflang=/.test(html)) errs.push('unexpected hreflang tag on a Spain article');

  for (const m of html.matchAll(/<script type="application\/ld\+json">\n([\s\S]*?)\n<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      errs.push(`JSON-LD does not parse: ${e.message}`);
    }
  }

  for (const f of a.faq) {
    if (!html.includes(`<h3>${esc(f.q)}</h3>`)) errs.push(`FAQ not visible in body: ${f.q}`);
  }

  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) {
    const href = m[1];
    const [path] = href.split('#');
    if (!resolves(path, pending)) errs.push(`broken internal link: ${href}`);
  }

  for (const term of FORBIDDEN) {
    if (html.includes(term)) errs.push(`forbidden term leaked onto a Spain article: ${term}`);
  }

  if (errs.length) throw new Error(`/en/blog/${a.slug}/ failed validation:\n  - ${errs.join('\n  - ')}`);
}

// --- write -------------------------------------------------------------------

// The Spain commercial pages (built by build-spain-cluster.mjs) are treated
// as pending too: these articles are published together with them as part of
// the same Phase 2 rollout, and by the time both builders have run the
// commercial pages exist on disk. If they don't yet — run
// build-spain-cluster.mjs first.
const pending = new Set([
  ...ARTICLES.map((a) => `/en/blog/${a.slug}/`),
  '/en/expat-insurance-spain/',
  '/en/home-insurance-spain/',
  '/en/landlord-insurance-spain/',
  '/en/health-insurance-spain/',
  '/en/car-insurance-spain/',
]);
const seenTitle = new Map();
const seenH1 = new Map();
const rendered = [];

for (const a of ARTICLES) {
  for (const [map, value, what] of [
    [seenTitle, a.title, 'title'],
    [seenH1, a.h1, 'H1'],
  ]) {
    if (map.has(value)) throw new Error(`duplicate ${what} on /en/blog/${a.slug}/ and /en/blog/${map.get(value)}/`);
    map.set(value, a.slug);
  }
  const html = render(a);
  validate(a, html, pending);
  rendered.push([a, html]);
}

for (const [a, html] of rendered) {
  const dir = join(PUBLIC, 'en', 'blog', a.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html);
  console.log(`wrote /en/blog/${a.slug}/`);
}
console.log(
  `\n${ARTICLES.length} article(s) written. Next:\n` +
    `  node scripts/extract-articles.mjs\n` +
    `  node scripts/build-articles-data.mjs   (after registering the 2 new categories + 7 slugs)\n` +
    `  node scripts/generate-blog.mjs\n` +
    `  node scripts/generate-sitemap.mjs`
);
