#!/usr/bin/env node
/**
 * Block 5 — article template (E-E-A-T).
 *
 * Every published article gets the same treatment, applied in place so the
 * hand-written prose is never touched:
 *
 *   1. an author block under the H1, naming the person who is accountable for
 *      the advice and the registration that licenses it;
 *   2. a visible published/updated line built from article:published_time and
 *      article:modified_time, so what the reader sees and what the crawler
 *      reads cannot drift apart;
 *   3. a table of contents for articles with more than five sections;
 *   4. an FAQ placeholder comment — the questions are for Hugo to write, not
 *      for this script to invent;
 *   5. JSON-LD with a Person author, a publisher logo, and a BreadcrumbList
 *      that matches the visible breadcrumb;
 *   6. related articles picked from the same cluster by date, plus a card for
 *      the cluster's commercial page.
 *
 * Re-runnable: each step checks for its own marker before acting.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const SITE = 'https://adlerrochefort.com';
const ASF = '425591790/3';

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));

// The English taxonomy has not been signed off, so no /en/blog/category/ page
// exists. The grouping is still the best available signal for "same subject",
// so it is used to pick related articles and nowhere else — no URL, no link,
// nothing a visitor or a crawler can see.
const enProposal = JSON.parse(
  await readFile(join(ROOT, 'data', 'en-categories-proposal.json'), 'utf8')
);
const enCluster = new Map();
for (const c of enProposal.categories) for (const slug of c.articles) enCluster.set(slug, c.slug);

const ptCategory = new Map(data.categories.pt.map((c) => [c.slug, c]));

// Commercial page for each cluster, highlighted alongside the related articles.
const CLUSTER_LANDING = {
  'seguros-auto-tvde': { url: '/seguros/tvde/', label: 'Seguro TVDE', tag: 'Pedir cotação' },
  'hotelaria-turismo': {
    url: '/seguros/alojamento-local/',
    label: 'Seguro de Alojamento Local',
    tag: 'Pedir cotação',
  },
  'seguros-empresariais': {
    url: '/seguros/empresarial/',
    label: 'Multirriscos Empresarial',
    tag: 'Pedir cotação',
  },
  'habitacao-particulares': {
    url: '/seguros/habitacao/',
    label: 'Seguro de Habitação',
    tag: 'Pedir cotação',
  },
  condominios: {
    url: '/seguros/condominios/',
    label: 'Seguro de Condomínio',
    tag: 'Pedir cotação',
  },
};
// English has one commercial page, /en/insurance/tvde/, and it answers a
// narrower question than the whole motor cluster does. Attaching it to every
// motor article would put a TVDE quote card under a piece about track days, so
// it is attached per article instead of per cluster.
const LANDING_BY_ARTICLE_EN = {
  'tvde-insurance-portugal': {
    url: '/en/insurance/tvde/',
    label: 'TVDE insurance',
    tag: 'Get a quote',
  },
  'fleet-insurance-common-mistakes': {
    url: '/en/insurance/tvde/',
    label: 'TVDE and ride-hailing fleet insurance',
    tag: 'Get a quote',
  },
};

const MONTHS_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];
const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const day = (iso) => iso.slice(0, 10);
const longDate = (iso, lang) => {
  const [y, m, d] = day(iso).split('-').map(Number);
  return lang === 'pt'
    ? `${d} de ${MONTHS_PT[m - 1]} de ${y}`
    : `${d} ${MONTHS_EN[m - 1]} ${y}`;
};

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Strips tags and entities so a heading can be used as link text and as an id. */
const plain = (html) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&middot;/g, '·')
    .replace(/&[a-z]+;/g, '')
    .trim();

const slugify = (text) => {
  const base = plain(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (base.length <= 60) return base;
  // Trim back to a word boundary rather than cutting a word in half.
  const cut = base.slice(0, 60);
  return cut.slice(0, Math.max(cut.lastIndexOf('-'), 20)).replace(/-+$/, '');
};

/**
 * Index ranges covered by a call-to-action box. Their headings are furniture,
 * not sections of the article, so they are kept out of the table of contents.
 */
function ctaRanges(body) {
  const ranges = [];
  const opener = /<div class="(?:cta-topo|cta-meio|blog-cta|blog-cta-box|article-cta)\b[^"]*"/g;
  for (const m of body.matchAll(opener)) {
    let depth = 0;
    const tags = /<div\b|<\/div>/g;
    tags.lastIndex = m.index;
    let t;
    while ((t = tags.exec(body))) {
      depth += t[0] === '</div>' ? -1 : 1;
      if (depth === 0) break;
    }
    ranges.push([m.index, t ? tags.lastIndex : body.length]);
  }
  return ranges;
}

// --- styles -------------------------------------------------------------------
// Only tokens already declared in :root are used, so nothing here can shift the
// palette or the type scale.
const STYLES = `<style id="eeat-styles">
  .article-author {
    display: flex; align-items: center; gap: 14px;
    margin: 4px 0 26px; padding: 16px 18px;
    background: var(--white, #FFFFFF);
    border: 1px solid var(--border, #DAD5C8);
    border-left: 3px solid var(--primary, #17243D);
    border-radius: 10px;
  }
  .article-author-photo { border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .article-author-name { font-size: 15px; font-weight: 700; color: var(--ink, #111927); line-height: 1.35; }
  .article-author-name a { color: inherit; text-decoration: none; }
  .article-author-name a:hover { color: var(--primary, #17243D); }
  .article-author-role { font-size: 13px; color: var(--ink2, #526984); line-height: 1.5; margin-top: 2px; }
  .article-author-creds { font-size: 12px; color: var(--muted, #516F94); line-height: 1.5; margin-top: 4px; }
  .article-toc {
    margin: 8px 0 32px; padding: 20px 24px;
    background: var(--cream2, #E8E5DF);
    border-radius: 10px;
  }
  .article-toc-title {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--ink, #111927); margin-bottom: 12px;
  }
  .article-toc ol { margin: 0; padding-left: 20px; }
  .article-toc li { font-size: 14px; line-height: 1.7; color: var(--ink2, #526984); }
  .article-toc a { color: var(--ink2, #526984); text-decoration: none; }
  .article-toc a:hover { color: var(--primary, #17243D); text-decoration: underline; }
  .related-card.related-card-landing {
    background: var(--cream2, #E8E5DF);
    border-color: var(--accent, #B8323E);
  }
  .related-card-landing .related-card-tag { color: var(--accent, #B8323E); }
  @media (max-width: 768px) {
    .article-author { flex-direction: column; align-items: flex-start; }
  }
</style>
`;

// --- building blocks ----------------------------------------------------------
// Closing sentinel for the author block. Counting nested </div> to find the end
// of the block is what broke the first attempt at re-running this script, so the
// end is marked explicitly instead.
const AUTHOR_END = '<!-- /article-author -->';

// A 112px avatar cropped from the existing headshot: 1.4 KB as WebP against the
// 5.7 MB original, which sits above the fold on 165 pages and would otherwise
// have dominated the LCP measured in block 7.
// loading="eager": the LCP concern this comment above documents was about the
// original 5.7 MB photo, already solved by cropping to this 1.4 KB avatar —
// not by lazy-loading it. In practice loading="lazy" on an avatar that always
// sits above the fold (it never has a viewport to defer until) made Chrome
// fail to schedule the fetch at all in some contexts, rendering as a broken
// image with the alt text showing instead of the photo. The avatar is small
// enough that eager-loading it costs nothing worth trading for that risk.
const AVATAR = `<picture>
      <source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">
      <img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" class="article-author-photo" width="56" height="56" loading="eager" decoding="async">
    </picture>`;

// The ASF registration number is already stated in the top strip and the
// footer of every article; repeating it a third time in every author card
// was the "too dominant" complaint. Name, role and brand are enough here.
function authorBlock(lang) {
  if (lang === 'pt') {
    return `<div class="article-author">
    ${AVATAR}
    <div>
      <div class="article-author-name"><a href="/#equipa">Hugo Gonçalves</a></div>
      <div class="article-author-role">Fundador &amp; Especialista em Gestão de Risco &middot; Adler &amp; Rochefort</div>
    </div>
  </div>${AUTHOR_END}`;
  }
  return `<div class="article-author">
    ${AVATAR}
    <div>
      <div class="article-author-name"><a href="/en/#team">Hugo Gonçalves</a></div>
      <div class="article-author-role">Founder &amp; Risk Management Specialist &middot; Adler &amp; Rochefort</div>
    </div>
  </div>${AUTHOR_END}`;
}

function dateLine(lang, published, modified, readingTime) {
  const updated = day(modified) !== day(published);
  const parts = [];
  if (lang === 'pt') {
    parts.push(
      `<time datetime="${day(published)}">Publicado a ${longDate(published, 'pt')}</time>`
    );
    if (updated) {
      parts.push(
        `<time datetime="${day(modified)}">Atualizado a ${longDate(modified, 'pt')}</time>`
      );
    }
    if (readingTime) parts.push(`${readingTime} min de leitura`);
  } else {
    parts.push(`<time datetime="${day(published)}">Published ${longDate(published, 'en')}</time>`);
    if (updated) {
      parts.push(`<time datetime="${day(modified)}">Updated ${longDate(modified, 'en')}</time>`);
    }
    if (readingTime) parts.push(`${readingTime} min read`);
  }
  return `<div class="article-date">${parts.join(' &middot; ')}</div>`;
}

function personLd(lang) {
  const jobTitle =
    lang === 'pt'
      ? 'Fundador & Especialista em Gestão de Risco'
      : 'Founder & Risk Management Specialist';
  return (
    `"author": { "@type": "Person", "name": "Hugo Gonçalves", "jobTitle": ${JSON.stringify(jobTitle)}, ` +
    `"url": "${SITE}/${lang === 'pt' ? '#equipa' : 'en/#team'}", ` +
    `"worksFor": { "@type": "Organization", "name": "Adler & Rochefort" }, ` +
    `"knowsAbout": ["Seguros", "Gestão de risco", "Mediação de seguros"] }`
  );
}

function breadcrumbLd(crumbs) {
  const items = crumbs.map((c, i) => {
    const base = `{ "@type": "ListItem", "position": ${i + 1}, "name": ${JSON.stringify(c.name)}`;
    return c.url ? `${base}, "item": ${JSON.stringify(SITE + c.url)} }` : `${base} }`;
  });
  return `<!-- Schema.org BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    ${items.join(',\n    ')}
  ]
}
</script>`;
}

function breadcrumbHtml(crumbs) {
  const sep = '<span>&rsaquo;</span>';
  const parts = crumbs.map((c) =>
    c.url ? `<a href="${c.url}">${esc(c.name)}</a>` : esc(c.name)
  );
  return `<div class="breadcrumb">\n  ${parts.join(sep + '\n  ')}\n</div>`;
}

// --- per-article rewrite ------------------------------------------------------
const published = {
  pt: data.articles.pt.filter((a) => a.status === 'published'),
  en: data.articles.en.filter((a) => a.status === 'published'),
};

/**
 * Related articles: the three nearest neighbours in the cluster, walking the
 * date-ordered list as a ring from the current article.
 *
 * Taking the three newest in the cluster — the obvious reading of "same
 * category, date-ordered" — would have pointed all 165 articles at the same
 * handful of pages and left the tail of the archive with pagination as its only
 * inbound link. The ring keeps the ordering while distributing inbound links
 * evenly, and it pairs each article with what was published around it.
 */
function relatedFor(article) {
  const lang = article.lang;
  const key = (a) => (lang === 'pt' ? a.category : enCluster.get(a.slug));
  const cluster = key(article);
  if (!cluster) return [];
  const ring = published[lang]
    .filter((a) => key(a) === cluster)
    .sort((a, b) => (a.published < b.published ? 1 : -1));
  const at = ring.findIndex((a) => a.slug === article.slug);
  if (at === -1) return ring.slice(0, 3);
  const out = [];
  for (let step = 1; step < ring.length && out.length < 3; step += 1) {
    out.push(ring[(at + step) % ring.length]);
  }
  return out;
}

const report = {
  processed: 0,
  author: 0,
  dates: 0,
  toc: 0,
  faqPlaceholder: 0,
  faqExisting: 0,
  authorLd: 0,
  schemaImage: 0,
  breadcrumbLdRebuilt: 0,
  breadcrumbLdAdded: 0,
  breadcrumbHtml: 0,
  related: 0,
  relatedLanding: 0,
  noCluster: [],
  thinRelated: [],
};

for (const lang of ['pt', 'en']) {
  for (const article of published[lang]) {
    const path = join(PUBLIC, article.url, 'index.html');
    let html = await readFile(path, 'utf8');
    const original = html;
    report.processed += 1;

    // 1 + 2. date line and author block, replaced as one unit — an author block
    // already present is swallowed by the match rather than duplicated, so the
    // script can be re-run against its own output.
    const dateMatch = html.match(
      new RegExp(
        `[ \\t]*<div class="article-date">[\\s\\S]*?</div>(\\s*<div class="article-author">[\\s\\S]*?${AUTHOR_END})?`
      )
    );
    if (dateMatch) {
      const replacement =
        dateLine(lang, article.published, article.modified, article.readingTime) +
        '\n  ' +
        authorBlock(lang);
      html = html.replace(dateMatch[0], '  ' + replacement);
      report.dates += 1;
      if (!original.includes('class="article-author"')) report.author += 1;
    }

    // 3. table of contents for long articles.
    const bodyStart = html.indexOf('<div class="article-body">');
    if (bodyStart !== -1) {
      const bodyEndMarkers = ['<section class="related-section">', '</article>'];
      const bodyEnd = Math.min(
        ...bodyEndMarkers.map((m) => html.indexOf(m, bodyStart)).filter((i) => i !== -1)
      );
      let body = html.slice(bodyStart, bodyEnd);

      if (!body.includes('class="article-toc"')) {
        const cta = ctaRanges(body);
        const inCta = (i) => cta.some(([a, b]) => i >= a && i < b);
        const sections = [...body.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].filter(
          (m) => !inCta(m.index)
        );

        if (sections.length > 5) {
          // Give every section heading a stable id, from the last one backwards
          // so the earlier match offsets stay valid as the string grows.
          const used = new Set(
            [...body.matchAll(/<h3[^>]*\bid="([^"]+)"/g)].map((m) => m[1])
          );
          const entries = [];
          for (const m of sections) {
            const already = m[0].match(/\bid="([^"]+)"/);
            let id = already ? already[1] : slugify(m[1]) || 'seccao';
            if (!already) {
              let n = 2;
              const stem = id;
              while (used.has(id)) id = `${stem}-${n++}`;
              used.add(id);
            }
            entries.push({ id, text: plain(m[1]), index: m.index, tag: m[0], already });
          }
          for (const e of [...entries].reverse()) {
            if (e.already) continue;
            const withId = e.tag.replace(/^<h3/, `<h3 id="${e.id}"`);
            body = body.slice(0, e.index) + withId + body.slice(e.index + e.tag.length);
          }

          const items = entries
            .map((e) => `<li><a href="#${e.id}">${esc(e.text)}</a></li>`)
            .join('\n      ');
          const toc = `<nav class="article-toc" aria-label="${
            lang === 'pt' ? 'Índice do artigo' : 'Table of contents'
          }">
      <div class="article-toc-title">${lang === 'pt' ? 'Neste artigo' : 'In this article'}</div>
      <ol>
      ${items}
      </ol>
    </nav>\n\n    `;
          // Anchored on the heading itself rather than the start of its line:
          // several English articles ship as a single line, where a line-start
          // insert would land before the opening <div class="article-body">.
          const firstH3 = body.indexOf(`<h3 id="${entries[0].id}"`);
          if (firstH3 !== -1) {
            body = body.slice(0, firstH3) + toc + body.slice(firstH3);
            report.toc += 1;
          }
        }
      }

      html = html.slice(0, bodyStart) + body + html.slice(bodyEnd);
    }

    // 4. FAQ. Articles that already carry a real FAQ keep it; the rest get a
    // placeholder, because inventing questions and answers about what a policy
    // covers is exactly the kind of thing that must not be guessed.
    if (/"@type"\s*:\s*"FAQPage"/.test(html)) {
      report.faqExisting += 1;
    } else if (!html.includes('TODO: FAQ')) {
      const anchor = html.indexOf('<section class="related-section">');
      if (anchor !== -1) {
        const note =
          lang === 'pt'
            ? `<!-- TODO: FAQ a redigir — 4 a 6 perguntas frequentes sobre "${plain(
                article.title
              )}", com resposta curta e factual. Ao publicar, acrescentar também o bloco FAQPage em JSON-LD. -->\n\n`
            : `<!-- TODO: FAQ a redigir — 4 to 6 frequently asked questions about "${plain(
                article.title
              )}", each with a short factual answer. When published, add the matching FAQPage JSON-LD block. -->\n\n`;
        html = html.slice(0, anchor) + note + html.slice(anchor);
        report.faqPlaceholder += 1;
      }
    }

    // 5a. the article's author becomes the person who is accountable for it.
    const authorRe = /"author"\s*:\s*\{\s*"@type"\s*:\s*"Organization"\s*,\s*"name"\s*:\s*"Adler & Rochefort"\s*\}/g;
    if (authorRe.test(html)) {
      html = html.replace(authorRe, personLd(lang));
      report.authorLd += 1;
    }

    // 5a-bis. An Article or BlogPosting node with no image is ineligible for the
    // richer search result. The article's own illustration is used where it has
    // one; the twenty-three English articles that have none fall back to the
    // image the page already declares to crawlers — its og:image — rather than
    // having a picture invented for them.
    const postingRe = /"@type"\s*:\s*"(Article|BlogPosting)"\s*,/;
    if (postingRe.test(html) && !/"image"\s*:/.test(html)) {
      const og = html.match(/property="og:image" content="([^"]+)"/);
      const src = article.image ? SITE + article.image : og && og[1];
      if (src) {
        html = html.replace(postingRe, (m) => `${m}\n  "image": ${JSON.stringify(src)},`);
        report.schemaImage += 1;
      }
    }

    // 5b. breadcrumbs, visible and structured, from one definition.
    const crumbs =
      lang === 'pt'
        ? [
            { name: 'Início', url: '/' },
            { name: 'Insights', url: '/blog/' },
            ...(ptCategory.has(article.category)
              ? [
                  {
                    name: ptCategory.get(article.category).short,
                    url: `/blog/categoria/${article.category}/`,
                  },
                ]
              : []),
            { name: plain(article.title) },
          ]
        : [
            { name: 'Home', url: '/en/' },
            { name: 'Insights', url: '/en/blog/' },
            { name: plain(article.title) },
          ];

    const visible = html.match(/[ \t]*<div class="breadcrumb">[\s\S]*?<\/div>/);
    if (visible) {
      html = html.replace(visible[0], breadcrumbHtml(crumbs));
      report.breadcrumbHtml += 1;
    }

    const ldBlocks = [...html.matchAll(/(<!-- Schema\.org BreadcrumbList -->\n)?<script type="application\/ld\+json">[\s\S]*?<\/script>/g)];
    const bcBlock = ldBlocks.find((m) => m[0].includes('BreadcrumbList'));
    if (bcBlock) {
      html = html.replace(bcBlock[0], breadcrumbLd(crumbs));
      report.breadcrumbLdRebuilt += 1;
    } else {
      html = html.replace('</head>', breadcrumbLd(crumbs) + '\n\n</head>');
      report.breadcrumbLdAdded += 1;
    }

    // 6. related articles, chosen rather than hand-picked.
    const related = relatedFor(article);
    const cluster = lang === 'pt' ? article.category : enCluster.get(article.slug);
    const landing =
      lang === 'pt' ? CLUSTER_LANDING[cluster] : LANDING_BY_ARTICLE_EN[article.slug];

    if (!cluster) report.noCluster.push(`${lang}:${article.slug}`);
    if (related.length < 3) {
      report.thinRelated.push(`${lang}:${article.slug} (${related.length})`);
    }

    if (related.length || landing) {
      const cards = related.map(
        (a) => `<a href="${a.url}" class="related-card">
      <div class="related-card-tag">${esc(a.tag || '')}</div>
      <div class="related-card-title">${esc(plain(a.title))}</div>
    </a>`
      );
      if (landing) {
        cards.push(`<a href="${landing.url}" class="related-card related-card-landing">
      <div class="related-card-tag">${esc(landing.tag)}</div>
      <div class="related-card-title">${esc(landing.label)}</div>
    </a>`);
        report.relatedLanding += 1;
      }
      const grid = `<div class="related-grid">
    ${cards.join('\n    ')}
  </div>`;
      const gridMatch = html.match(/<div class="related-grid">[\s\S]*?<\/div>\s*<\/section>/);
      if (gridMatch) {
        html = html.replace(gridMatch[0], grid + '\n</section>');
        report.related += 1;
      }
    }

    // styles last, so the marker check sees the finished document.
    if (!html.includes('id="eeat-styles"')) {
      html = html.replace('</head>', STYLES + '</head>');
    }

    if (html !== original) await writeFile(path, html);
  }
}

console.log(`articles processed:        ${report.processed}`);
console.log(`author block added:        ${report.author}`);
console.log(`date lines rewritten:      ${report.dates}`);
console.log(`tables of contents added:  ${report.toc}`);
console.log(`FAQ already present:       ${report.faqExisting}`);
console.log(`FAQ placeholders inserted: ${report.faqPlaceholder}`);
console.log(`author JSON-LD -> Person:  ${report.authorLd}`);
console.log(`Article image from og:image: ${report.schemaImage}`);
console.log(`BreadcrumbList rebuilt:    ${report.breadcrumbLdRebuilt}`);
console.log(`BreadcrumbList added:      ${report.breadcrumbLdAdded}`);
console.log(`visible breadcrumbs:       ${report.breadcrumbHtml}`);
console.log(`related grids rebuilt:     ${report.related}`);
console.log(`  of which with a landing: ${report.relatedLanding}`);
console.log(`\narticles with no cluster (${report.noCluster.length}):`);
report.noCluster.slice(0, 20).forEach((s) => console.log('  ' + s));
console.log(`\narticles with fewer than 3 related (${report.thinRelated.length}):`);
report.thinRelated.slice(0, 30).forEach((s) => console.log('  ' + s));
