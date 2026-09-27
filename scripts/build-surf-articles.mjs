/**
 * Builds the EN surf second-home series (pillar + five destinations) from
 * scripts/surf-articles.data.mjs.
 *
 * The page chrome (styles, nav, quote form, footer, sticky CTA, scripts) is
 * taken from the home-insurance-lagos article, the established EN blog
 * template with the `home-insurance-quote` form. The <head> is rebuilt here:
 * canonical, hreflang pair with the DE article (+ x-default = EN), og/twitter,
 * BlogPosting (author/publisher = the organisation), BreadcrumbList and a
 * FAQPage generated from the same data as the visible FAQ.
 *
 * Insurer names and price language in the template chrome are replaced with
 * insurer-neutral, written-assessment wording on these pages only.
 *
 * Run: node scripts/build-surf-articles.mjs [--only=<slug>] [--no-data]
 *   --no-data  do not touch data/articles.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES } from './surf-articles.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://adlerrochefort.com';
const TEMPLATE_SLUG = 'home-insurance-lagos';
const TEMPLATE = readFileSync(join(ROOT, 'public/en/blog', TEMPLATE_SLUG, 'index.html'), 'utf8');

const PUBLISHED = '2026-09-27';
const DATE_LABEL = 'Published 27 September 2026';
const OG_IMAGE = `${ORIGIN}/images/og-adlerrochefort-en.png`;

const ENTITIES = {
  amp: '&', mdash: '—', ndash: '–', euro: '€', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  middot: '·', ordm: 'º', aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  Aacute: 'Á', Eacute: 'É', Oacute: 'Ó', atilde: 'ã', otilde: 'õ', ccedil: 'ç', agrave: 'à',
  ecirc: 'ê', acirc: 'â', ocirc: 'ô', nbsp: ' ', hellip: '…', quot: '"',
};
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, n) => (n in ENTITIES ? ENTITIES[n] : m));
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');
/** Plain text of an HTML/entity string, suitable for attributes and JSON-LD. */
const plain = (s) => decode(s.replace(/<[^>]+>/g, ''));

function swap(haystack, needle, replacement, { all = true } = {}) {
  if (!haystack.includes(needle)) throw new Error(`template string not found: ${needle.slice(0, 80)}`);
  return all ? haystack.split(needle).join(replacement) : haystack.replace(needle, () => replacement);
}
function between(html, startMark, endMark, { includeEnd = false } = {}) {
  const s = html.indexOf(startMark);
  const e = html.indexOf(endMark, s + startMark.length);
  if (s === -1 || e === -1) throw new Error(`region not found: ${startMark.slice(0, 60)}`);
  return html.slice(s, includeEnd ? e + endMark.length : e);
}

const WA_OLD = "https://wa.me/351928226570?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20home%20insurance%20in%20Portugal.";
const WA_NEW = "https://wa.me/351928226570?text=Hello%2C%20I'd%20like%20a%20written%20assessment%20for%20a%20home%20in%20Portugal.";
const WA_SVG = between(TEMPLATE, '<svg viewBox="0 0 24 24"><path d="M17.472', '</svg>', { includeEnd: true });

// ---------------------------------------------------------------------------
// Template regions
// ---------------------------------------------------------------------------
const T_ASSETS = between(TEMPLATE, '<link href="https://fonts.googleapis.com/css2?family=Albert+Sans', '</head>', { includeEnd: true });
const T_BODY_TOP = between(TEMPLATE, '<body', '<div class="article-hero">');
const T_FORM = between(TEMPLATE, '<div class="ar-cv ar-cta-form-wrap"', '<section class="related-section">');
const T_TAIL = TEMPLATE.slice(TEMPLATE.indexOf('<footer>'));

function langSwitch(html, a) {
  const de = `/de/blog/${a.de}/`;
  html = html.split(`/en/blog/${TEMPLATE_SLUG}/`).join(`/en/blog/${a.slug}/`);
  html = html.replace(
    /<a href="\/de\/" lang="de"( dir="ltr")? hreflang="de"><span>Deutsch<\/span><span class="ar-langsel-note">home page<\/span><\/a>/g,
    (m, dir) => `<a href="${de}" lang="de"${dir || ''} hreflang="de"><span>Deutsch</span></a>`
  );
  html = html.replace('<li><a href="/de/" lang="de">Deutsch</a></li>', `<li><a href="${de}" lang="de">Deutsch</a></li>`);
  return html;
}

function bodyTop(a) {
  let html = langSwitch(T_BODY_TOP, a);
  html = swap(
    html,
    '<div class="asf-top-bar">ASF-registered insurance broker n.&ordm; 425591790/3 &mdash; <a href="/en/home-insurance-quote/">Free home insurance quote in 24h</a></div>',
    '<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal&rsquo;s ASF, no. 425591790/3, with offices in Lisbon and Lagos &mdash; <a href="/en/home-insurance-quote/">Request a written assessment</a></div>'
  );
  return html;
}

function form(a) {
  let html = T_FORM.split(TEMPLATE_SLUG).join(a.slug);
  html = swap(html, '<h2>Get a free home insurance comparison</h2>', '<h2>Request a written assessment</h2>');
  html = swap(
    html,
    '<p class="ar-cta-form-lead">Tell us about the property and we&rsquo;ll compare multi-risk home insurance across the market &mdash; in English, within 24 hours.</p>',
    '<p class="ar-cta-form-lead">Tell us about the house and how you use it. We will come back with our view in writing &mdash; the cover you have, the gaps and the options &mdash; and we reply within 24 hours.</p>'
  );
  html = swap(html, '<span>Most of our clients reach us on WhatsApp:</span>', '<span>Prefer to talk first? Message us on WhatsApp:</span>');
  html = swap(html, '<button type="submit" class="ar-btn ar-btn-primary">Request my free quote</button>', '<button type="submit" class="ar-btn ar-btn-primary">Request my assessment</button>');
  html = swap(
    html,
    'to prepare and discuss your quote,',
    'to prepare and discuss your assessment,'
  );
  html = swap(html, '<span class="ar-trust-item">ASF-registered insurance broker</span>', '<span class="ar-trust-item">ASF-registered insurance intermediary</span>');
  html = swap(html, '<span class="ar-trust-item">English-speaking team</span>', '<span class="ar-trust-item">Offices in Lisbon and Lagos</span>');
  html = swap(html, '<span class="ar-trust-item">Not tied to one insurer — Zurich, Allianz, Hiscox &amp; Liberty Mutual</span>', '<span class="ar-trust-item">Advice given in writing</span>');
  html = swap(html, '<span class="ar-trust-item">We handle the claim for you</span>', '<span class="ar-trust-item">One adviser, from first contact to claim</span>');
  html = html.split(WA_OLD).join(WA_NEW);
  return html;
}

function tail(a) {
  let html = langSwitch(T_TAIL, a);
  html = swap(
    html,
    `<p class="footer-brand-desc">English-speaking insurance broker for international clients, registered with Portugal's ASF, no. 425591790/3, and serving Spain on a cross-border basis &mdash; home, health, car, life and private-client cover.</p>`,
    `<p class="footer-brand-desc">Private-client insurance intermediary registered with Portugal's ASF, no. 425591790/3, with offices in Lisbon and Lagos, advising households in Portugal and Spain &mdash; high-value homes, art and collections, liability and family protection.</p>`
  );
  html = swap(
    html,
    '<div class="ar-sticky-cta-label">Free quote in 24h<small>English-speaking, ASF-registered insurance broker</small></div>',
    '<div class="ar-sticky-cta-label">Written assessment<small>ASF-registered private-client intermediary</small></div>'
  );
  html = swap(html, '<a href="#ar-quote-form" class="ar-btn ar-btn-primary">Free quote</a>', '<a href="#ar-quote-form" class="ar-btn ar-btn-primary">Request assessment</a>');
  html = swap(html, 'data-topics="casa_geral,lagos"', `data-topics="${a.chatTopics}"`);
  html = html.split(WA_OLD).join(WA_NEW);
  return html;
}

// ---------------------------------------------------------------------------
// Head
// ---------------------------------------------------------------------------
const ORG = {
  '@type': 'Organization',
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  url: `${ORIGIN}/en/`,
  logo: { '@type': 'ImageObject', url: `${ORIGIN}/images/favicon-192.png` },
};

const ld = (obj) => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 1)}\n</script>`;

function head(a) {
  const url = `${ORIGIN}/en/blog/${a.slug}/`;
  const deUrl = `${ORIGIN}/de/blog/${a.de}/`;
  const title = plain(a.title);
  const metaTitle = plain(a.metaTitle);
  const desc = plain(a.description);

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: desc,
    image: OG_IMAGE,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    inLanguage: 'en-GB',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: ORG,
    publisher: ORG,
    keywords: a.keywords,
    wordCount: a.wordCount,
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${ORIGIN}/en/blog/` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map(([q, ans]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: ans },
    })),
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escText(metaTitle)}</title>
<meta name="description" content="${escAttr(desc)}">
<meta name="keywords" content="${escAttr(a.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Adler &amp; Rochefort">
<meta name="geo.region" content="PT">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en-GB" href="${url}">
<link rel="alternate" hreflang="de" href="${deUrl}">
<link rel="alternate" hreflang="x-default" href="${url}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escAttr(title)}">
<meta property="og:description" content="${escAttr(desc)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_GB">
<meta property="og:locale:alternate" content="de_DE">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta property="article:published_time" content="${PUBLISHED}">
<meta property="article:modified_time" content="${PUBLISHED}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escAttr(title)}">
<meta name="twitter:description" content="${escAttr(desc)}">
<meta name="twitter:image" content="${OG_IMAGE}">
${ld(blogPosting)}
${ld(breadcrumb)}
${ld(faq)}
${T_ASSETS}
`;
}

// ---------------------------------------------------------------------------
// Body
// ---------------------------------------------------------------------------
function inlineCta(a) {
  return `<div class="ar-cv ar-cta-inline">
  <div class="ar-cta-inline-text">
    <p class="ar-cta-inline-title">${a.cta.title}</p>
    <p class="ar-cta-inline-sub">${a.cta.sub}</p>
  </div>
  <div class="ar-cta-inline-actions">
    <a href="/en/home-insurance-quote/" class="ar-btn ar-btn-primary">Request a written assessment</a>
    <a href="${WA_NEW}" target="_blank" rel="noopener" class="ar-btn ar-btn-wa ">${WA_SVG}<span class="ar-sticky-wa-text">WhatsApp</span></a>
  </div>
</div>`;
}

function otherLine(a) {
  const others = ARTICLES.filter((x) => x.slug !== a.slug);
  return others.map((x) => `<a href="/en/blog/${x.slug}/">${x.slug === 'surfing-portugal-second-homes' ? 'The whole coast' : x.tag}</a>`).join(' &middot; ');
}

function articleBody(a) {
  const sections = a.body.map(([h2, html]) => `<h2>${h2}</h2>\n${html}`);
  const checklist = `<h2>Before the season: a short checklist</h2>
<ul class="surf-checklist">
${a.checklist.map((c) => `<li>${c}</li>`).join('\n')}
</ul>`;
  const spain = a.spain ? `<h2>And in Spain</h2>\n${a.spain}` : '';

  return `<div class="article-body">
${a.intro}
${sections.join('\n')}
${checklist}
${inlineCta(a)}
${spain}
<h2>Talk to us</h2>
${a.closing}
<p style="font-size:13px;color:#5E6650;margin-top:34px;">More from the surf coast: ${otherLine(a)}</p>
<p><em>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3. General information from an insurance intermediary, not personalised advice; what a policy covers depends on its wording.</em></p>
</div>
`;
}

function hero(a) {
  return `<div class="article-hero"><div class="article-hero-img" style="background:${a.gradient}"><span>${a.heroLabel}</span></div></div>
<article class="article-container"><div class="article-tag">${a.tag}</div><h1 class="article-title">${escText(a.title)}</h1>  <div class="article-date"><time datetime="${PUBLISHED}">${DATE_LABEL}</time> &middot; ${a.readingTime} min read</div>
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
}

function faqSection(a) {
  const items = a.faq
    .map(([q, ans]) => `  <details class="ar-faq-item">
    <summary>${escText(q)}</summary>
    <div class="ar-faq-answer">${escText(ans)}</div>
  </details>`)
    .join('\n');
  return `<section class="ar-cv ar-faq">
  <h2>Frequently asked questions</h2>
${items}
</section>

`;
}

function related(a) {
  const cards = a.related
    .map(([href, tag, title]) => `    <a href="${href}" class="related-card">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${escText(title)}</div>
    </a>`)
    .join('\n');
  return `<section class="related-section"><h2 class="related-title">Related articles</h2><div class="related-grid">
${cards}
  </div>
</section>
`;
}

function countWords(a) {
  const text = [a.intro, ...a.body.map(([h, b]) => `${h} ${b}`), ...a.checklist, a.spain || '', a.closing, ...a.faq.flat()]
    .map(plain)
    .join(' ');
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function build(a) {
  a.wordCount = countWords(a);
  a.readingTime = Math.max(5, Math.round(a.wordCount / 220));
  const html = head(a) + bodyTop(a) + hero(a) + articleBody(a) + faqSection(a) + form(a) + related(a) + tail(a);
  // The cloned template's breadcrumb still names the Lagos article; name this one.
  return html.replace(/(<div class="breadcrumb">[\s\S]*?<a href="\/en\/blog\/">Insights<\/a><span>&rsaquo;<\/span>\n)\s*[^<\n]+\n/, `$1  ${a.tag}\n`);
}

// ---------------------------------------------------------------------------
const only = process.argv.filter((x) => x.startsWith('--only=')).map((x) => x.slice(7));
const selected = only.length ? ARTICLES.filter((a) => only.includes(a.slug)) : ARTICLES;

for (const a of selected) {
  const dir = join(ROOT, 'public/en/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  const html = build(a);
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`wrote public/en/blog/${a.slug}/index.html (${a.wordCount} words, ${html.length} bytes)`);
}

if (!process.argv.includes('--no-data')) {
  const dataPath = join(ROOT, 'data/articles.json');
  const data = JSON.parse(readFileSync(dataPath, 'utf8'));
  const gradientOf = (a) => a.gradient.replace('linear-gradient(135deg,', 'linear-gradient(135deg, ').replace(/,(?=#)/g, ', ');
  for (const a of selected) {
    const record = {
      slug: a.slug,
      lang: 'en',
      status: 'published',
      url: `/en/blog/${a.slug}/`,
      category: 'home-property',
      tag: plain(a.tag),
      title: plain(a.title),
      metaTitle: plain(a.metaTitle),
      description: plain(a.description),
      excerpt: plain(a.excerpt),
      image: null,
      imageGradient: gradientOf(a),
      imageAlt: plain(a.title),
      published: PUBLISHED,
      modified: PUBLISHED,
      dateLabel: 'September 2026',
      readingTime: a.readingTime,
      featured: false,
      translationOf: null,
    };
    const i = data.articles.en.findIndex((r) => r.slug === a.slug);
    if (i === -1) data.articles.en.push(record);
    else data.articles.en[i] = record;
    console.log(`articles.json: ${i === -1 ? 'added' : 'updated'} ${a.slug}`);
  }
  writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
}
