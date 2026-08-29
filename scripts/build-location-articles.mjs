/**
 * Builds the five new geographic articles in the EN home-insurance cluster from
 * the home-insurance-lagos page, which is the established template for a
 * location article: same chrome, same schema blocks, same quote form.
 *
 * Everything specific to a location lives in location-articles.data.mjs. This
 * file only splices the generated regions into the template:
 *
 *   head  ..  <div class="article-hero">  ..  <section class="ar-cv ar-faq">
 *         ..  <div class="ar-cv ar-cta-form-wrap">  ..  <section class="related-section">
 *
 * Run: node scripts/build-location-articles.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES } from './location-articles.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE_SLUG = 'home-insurance-lagos';
const TEMPLATE = readFileSync(join(ROOT, 'public/en/blog', TEMPLATE_SLUG, 'index.html'), 'utf8');

const PUBLISHED = '2026-08-13';
const DATE_LABEL = 'Published 13 August 2026';

// Strings copied verbatim out of the template so the replacements are exact.
const T_TITLE_TAG =
  'Home Insurance in Lagos, Algarve: What Local Property Actually Needs | Adler &amp; Rochefort';
const T_HEADLINE = 'Home insurance in Lagos: what local property actually needs';
const T_OG_TITLE = 'Home insurance in Lagos, Algarve: what local property actually needs';
const T_DESC =
  'Lagos runs from the historic walled centre to the clifftop villas of Porto de M&oacute;s and the flatlands of Meia Praia. Each needs a different policy. An English-speaking broker based in Lagos explains.';
const T_KEYWORDS =
  'home insurance Lagos Portugal, seguro habitação Lagos, Meia Praia insurance, Porto de Mós villa insurance, Lagos expat insurance broker';
const T_TOPICS = 'casa_geral,lagos';

const ENTITIES = {
  amp: '&', mdash: '—', ndash: '–', euro: '€', rsquo: '’',
  lsquo: '‘', ldquo: '“', rdquo: '”', middot: '·', ordm: 'º',
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  atilde: 'ã', otilde: 'õ', ccedil: 'ç', agrave: 'à', ecirc: 'ê',
  acirc: 'â', ocirc: 'ô', nbsp: ' ', hellip: '…',
};

/** Entity-free version of a string, for use inside JSON-LD. */
const decode = (s) => s.replace(/&([a-z]+);/g, (m, name) => (name in ENTITIES ? ENTITIES[name] : m));

/** Literal replace that does not interpret `$` sequences in the replacement. */
function swap(haystack, needle, replacement) {
  if (!haystack.includes(needle)) throw new Error(`template string not found: ${needle.slice(0, 70)}`);
  return haystack.split(needle).join(replacement);
}

function region(html, startMark, endMark) {
  const start = html.indexOf(startMark);
  const end = html.indexOf(endMark, start + startMark.length);
  if (start === -1 || end === -1) throw new Error(`region not found: ${startMark}`);
  return { start, end };
}

// ---------------------------------------------------------------------------
// Cross-links between location articles, shown as a small line under the body.
// ---------------------------------------------------------------------------
const OTHER = {
  'home-insurance-comporta-melides': [
    ['/en/blog/home-insurance-troia-setubal/', 'Tr&oacute;ia &amp; Set&uacute;bal'],
    ['/en/blog/home-insurance-sintra-cascais-villas/', 'Sintra'],
    ['/en/blog/home-insurance-lagos/', 'Lagos'],
  ],
  'home-insurance-troia-setubal': [
    ['/en/blog/home-insurance-comporta-melides/', 'Comporta &amp; Melides'],
    ['/en/blog/home-insurance-sintra-cascais-villas/', 'Sintra'],
    ['/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', 'Lisbon &amp; Cascais'],
  ],
  'home-insurance-quinta-do-lago-vale-do-lobo': [
    ['/en/blog/home-insurance-loule-almancil/', 'Loul&eacute; &amp; Almancil'],
    ['/en/blog/home-insurance-tavira/', 'Tavira'],
    ['/en/blog/home-insurance-lagoa-carvoeiro/', 'Lagoa &amp; Carvoeiro'],
  ],
  'home-insurance-sagres-vila-do-bispo': [
    ['/en/blog/home-insurance-lagos/', 'Lagos'],
    ['/en/blog/home-insurance-lagoa-carvoeiro/', 'Lagoa &amp; Carvoeiro'],
    ['/en/blog/home-insurance-quinta-do-lago-vale-do-lobo/', 'Quinta do Lago'],
  ],
  'home-insurance-sintra-cascais-villas': [
    ['/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', 'Lisbon &amp; Cascais'],
    ['/en/blog/home-insurance-comporta-melides/', 'Comporta &amp; Melides'],
    ['/en/blog/home-insurance-troia-setubal/', 'Tr&oacute;ia'],
  ],
};

const WA_SVG =
  '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

const WA_HREF =
  "https://wa.me/351928226570?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20home%20insurance%20in%20Portugal.";

// ---------------------------------------------------------------------------

function buildFaqSchema(a) {
  const entries = a.faq
    .map(
      ([q, ans]) => `    {
      "@type": "Question",
      "name": ${JSON.stringify(decode(q))},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ${JSON.stringify(decode(ans))}
      }
    }`
    )
    .join(',\n');
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
${entries}
  ]
}
</script>
`;
}

function buildHead(a) {
  let head = TEMPLATE.slice(0, region(TEMPLATE, '<div class="article-hero">', '</html>').start);

  head = swap(head, T_TITLE_TAG, a.metaTitle);
  head = swap(head, T_KEYWORDS, a.keywords);
  head = swap(head, T_OG_TITLE, a.title);
  head = swap(head, T_HEADLINE, a.title);
  head = swap(head, T_DESC, a.description);
  head = swap(head, '"datePublished":"2026-08-06","dateModified":"2026-08-06"', `"datePublished":"${PUBLISHED}","dateModified":"${PUBLISHED}"`);
  head = swap(head, '<meta property="article:published_time" content="2026-08-06">', `<meta property="article:published_time" content="${PUBLISHED}">`);
  head = swap(head, '<meta property="article:modified_time" content="2026-08-06">', `<meta property="article:modified_time" content="${PUBLISHED}">`);

  // JSON-LD is not HTML-parsed, so entity references have to be resolved there.
  head = swap(head, `"headline":"${a.title}"`, `"headline":${JSON.stringify(decode(a.title))}`);
  head = swap(head, `"description":"${a.description}"`, `"description":${JSON.stringify(decode(a.description))}`);
  head = swap(head, `"position": 3, "name": "${a.title}"`, `"position": 3, "name": ${JSON.stringify(decode(a.title))}`);

  // Replace the template's FAQPage block wholesale.
  const faqStart = head.lastIndexOf('<script type="application/ld+json">', head.indexOf('"@type": "FAQPage"'));
  const faqEnd = head.indexOf('</script>\n', faqStart) + '</script>\n'.length;
  head = head.slice(0, faqStart) + buildFaqSchema(a) + head.slice(faqEnd);

  return head;
}

function buildBody(a) {
  const sections = a.body.map(([h2, html]) => `<h2>${h2}</h2>\n${html}`);

  const ctaInline = `<div class="ar-cv ar-cta-inline">
  <div class="ar-cta-inline-text">
    <p class="ar-cta-inline-title">${a.cta.title}</p>
    <p class="ar-cta-inline-sub">${a.cta.sub}</p>
  </div>
  <div class="ar-cta-inline-actions">
    <a href="/en/home-insurance-quote/" class="ar-btn ar-btn-primary">Get my free quote</a>
    <a href="${WA_HREF}" target="_blank" rel="noopener" class="ar-btn ar-btn-wa ">${WA_SVG}<span class="ar-sticky-wa-text">WhatsApp</span></a>
  </div>
</div>`;

  // The inline CTA sits after the second section, as it does on the template.
  sections.splice(2, 0, ctaInline);

  const [head, ...rows] = a.table;
  const table = `<div class="ar-table-wrap"><table class="ar-table"><thead><tr>${head
    .map((c) => `<th>${c}</th>`)
    .join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div>`;

  const other = OTHER[a.slug]
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join(' &middot; ');

  return `<div class="article-hero"><div class="article-hero-img" style="background:${a.gradient}"><span>${a.heroLabel}</span></div></div>
<article class="article-container"><div class="article-tag">${a.tag}</div><h1 class="article-title">${a.title}</h1>  <div class="article-date"><time datetime="${PUBLISHED}">${DATE_LABEL}</time> &middot; ${a.readingTime} min read</div>
  <div class="article-author">
    <picture>
      <source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">
      <img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" class="article-author-photo" width="56" height="56" loading="eager" decoding="async">
    </picture>
    <div>
      <div class="article-author-name"><a href="/en/#team">Hugo Gonçalves</a></div>
      <div class="article-author-role">Founder &amp; Risk Management Specialist &middot; Adler &amp; Rochefort</div>
    </div>
  </div><!-- /article-author --><div class="article-body">
<p style="background:#F0F4ED;border-left:4px solid #7A9A6B;padding:14px 18px;margin-bottom:28px;font-size:14px;line-height:1.6;color:#637060;border-radius:0 6px 6px 0;">Part of our complete guide to <a href="/en/blog/home-insurance-protect-property/">home insurance in Portugal for property owners</a>. For a free comparison across Zurich, Allianz, Hiscox and Liberty Mutual, <a href="/en/home-insurance-quote/">request a quote in 24 hours</a>.</p>
${a.intro}
${sections.join('\n')}
<h2>Indicative premiums &mdash; ${a.heroLabel}</h2>
${table}
<p>Market estimates, not offers &mdash; the figures move with the sum insured, the excess and how the property is used. The <a href="/en/blog/home-insurance-cost-algarve-price-drivers/">cost guide</a> explains what shifts them.</p>
<h2>Talk to us</h2>
${a.closing}
<p>If you would rather start from the property than from the article, our <a href="/en/home-insurance-quote/">home insurance comparison for owners in Portugal</a> takes the address, the rebuild figure and how the property is used, and comes back with the market priced side by side.</p>
<p style="font-size:13px;color:#8A8B7E;margin-top:34px;">Other locations: ${other}</p>
<p><em>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3. General guidance only; conditions, premiums and cover vary by insurer and profile.</em></p>
</div>
`;
}

function buildFaqSection(a) {
  const items = a.faq
    .map(
      ([q, ans]) => `  <details class="ar-faq-item">
    <summary>${decode(q)}</summary>
    <div class="ar-faq-answer">${decode(ans)}</div>
  </details>`
    )
    .join('\n');
  return `<section class="ar-cv ar-faq">
  <h2>Frequently asked questions</h2>
${items}
</section>

`;
}

function buildRelated(a) {
  const cards = a.related
    .map(
      ([href, tag, title]) => `    <a href="${href}" class="related-card">
      <div class="related-card-tag">${tag}</div>
      <div class="related-card-title">${title}</div>
    </a>`
    )
    .join('\n');
  return `<section class="related-section"><h2 class="related-title">Related articles</h2><div class="related-grid">
${cards}
  </div>
</section>
`;
}

function build(a) {
  // Slug-derived values first: canonical, og:url, JSON-LD @id, lang switcher,
  // the form's `source` field and every arf-* input id.
  let html = TEMPLATE.split(TEMPLATE_SLUG).join(a.slug);
  html = swap(html, `data-topics="${T_TOPICS}"`, `data-topics="${a.chatTopics}"`);

  const heroAt = html.indexOf('<div class="article-hero">');
  const faqAt = html.indexOf('<section class="ar-cv ar-faq">');
  const formAt = html.indexOf('<div class="ar-cv ar-cta-form-wrap"');
  const relStart = html.indexOf('<section class="related-section">');
  const relEnd = html.indexOf('<footer>', relStart);
  if ([heroAt, faqAt, formAt, relStart, relEnd].some((i) => i === -1)) {
    throw new Error(`could not locate all regions for ${a.slug}`);
  }

  const form = html.slice(formAt, relStart);
  const tail = html.slice(relEnd);

  return (
    buildHead(a).split(TEMPLATE_SLUG).join(a.slug) +
    buildBody(a) +
    buildFaqSection(a) +
    form +
    buildRelated(a) +
    tail
  );
}

// ---------------------------------------------------------------------------

for (const a of ARTICLES) {
  const dir = join(ROOT, 'public/en/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  const html = build(a);
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`wrote public/en/blog/${a.slug}/index.html (${html.length} bytes)`);
}

// ---------------------------------------------------------------------------
// data/articles.json — one record per new article, matching the shape used by
// the other location pages.
// ---------------------------------------------------------------------------
const dataPath = join(ROOT, 'data/articles.json');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));
const gradientOf = (a) => a.gradient.replace('linear-gradient(135deg,', 'linear-gradient(135deg, ').replace(/,(?=#)/g, ', ');

for (const a of ARTICLES) {
  if (data.articles.en.some((r) => r.slug === a.slug)) {
    console.log(`articles.json: ${a.slug} already present, skipped`);
    continue;
  }
  data.articles.en.push({
    slug: a.slug,
    lang: 'en',
    status: 'published',
    url: `/en/blog/${a.slug}/`,
    category: 'home-property',
    tag: decode(a.tag),
    title: decode(a.title),
    metaTitle: decode(a.metaTitle),
    description: decode(a.description),
    excerpt: decode(a.excerpt),
    image: null,
    imageGradient: gradientOf(a),
    imageAlt: decode(a.title),
    published: PUBLISHED,
    modified: PUBLISHED,
    dateLabel: 'August 2026',
    readingTime: a.readingTime,
    featured: false,
    translationOf: null,
  });
  console.log(`articles.json: added ${a.slug}`);
}

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
