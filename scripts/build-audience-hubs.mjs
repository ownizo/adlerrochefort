#!/usr/bin/env node
/**
 * Builds the two audience clusters added in October 2026:
 *
 *   PT  /seguros/brasileiros-em-portugal/            + 4 articles in /blog/
 *   EN  /en/insurance-for-south-africans-portugal/   + 3 articles in /en/blog/
 *
 *   node scripts/build-audience-hubs.mjs
 *   node scripts/generate-blog.mjs && node scripts/generate-sitemap.mjs
 *
 * Hubs: landingPage() + quoteForm() from scripts/lib/landing.mjs, exactly as
 * the US, Canadian and Irish hubs. Articles: spliced from an established
 * article of the same language (head, title strings, breadcrumb, body, FAQ,
 * related block replaced; chrome, author block, styles and scripts kept), the
 * method build-import-article.mjs documents. Articles are registered in
 * data/articles.json directly — build-articles-data.mjs would rebuild that
 * file from scratch and must not be run.
 *
 * Content: scripts/brasileiros-hub.data.mjs, scripts/south-african-hub.data.mjs.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writePage } from './lib/chrome.mjs';
import { landingPage, quoteForm } from './lib/landing.mjs';
import { BR_HUB, BR_ARTICLES, GDPR as GDPR_PT } from './brasileiros-hub.data.mjs';
import { ZA_HUB, ZA_ARTICLES, GDPR as GDPR_EN } from './south-african-hub.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';
const PUBLISHED = '2026-10-02';
const STAMP = `${PUBLISHED}T09:00:00+00:00`;

const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escText = (s) => s.replace(/&(?![a-z#0-9]+;)/g, '&amp;');
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

function sub(html, re, rep, label) {
  if (!re.test(html)) throw new Error(`${label}: not found ${re}`);
  return html.replace(re, rep);
}

/* ─────────── hubs ─────────── */

const articleData = JSON.parse(readFileSync(join(ROOT, 'data/articles.json'), 'utf8'));

BR_HUB.form = quoteForm({
  formName: 'brasileiros-hub-pedido',
  branch: 'Seguros para brasileiros',
  title: 'Peça uma análise por escrito',
  subtitle: 'Preencha o essencial. Respondemos em 24 horas úteis.',
  submit: 'Pedir a minha análise →',
  micro: GDPR_PT,
  lang: 'pt',
  fields: [
    { name: 'name', label: 'Nome completo', required: true, placeholder: 'O seu nome completo' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'voce@email.com' },
    { name: 'phone', label: 'Telefone / WhatsApp', type: 'tel', placeholder: 'Opcional' },
    { name: 'situation', label: 'Em que fase está?', type: 'select', placeholder: 'Selecione', options: ['A comprar casa', 'A preparar a mudança / o visto', 'Já vivo em Portugal', 'Ainda não sei'] },
    { name: 'products', label: 'Em que podemos ajudar?', type: 'checkboxes', options: ['Seguro de saúde', 'Seguro de casa', 'Seguro automóvel', 'Seguro de vida / crédito habitação', 'Outro'] },
    { name: 'message', label: 'Mensagem', type: 'textarea', full: true, placeholder: 'O que devemos saber? (opcional)' },
  ],
});

ZA_HUB.form = quoteForm({
  formName: 'south-african-hub-review',
  branch: 'Insurance for South Africans',
  title: 'Get an Insurance Review',
  subtitle: 'Tell us the essentials. We reply within 24 working hours.',
  submit: 'Request my review →',
  micro: GDPR_EN,
  lang: 'en',
  fields: [
    { name: 'name', label: 'Full name', required: true, placeholder: 'Your full name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@email.com' },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: 'Optional' },
    { name: 'situation', label: 'What brings you to Portugal?', type: 'select', placeholder: 'Select an option', options: ['Buying property', 'Relocating / applying for residency', 'Already living here', 'Not sure yet'] },
    { name: 'products', label: 'What do you need help with?', type: 'checkboxes', options: ['Home insurance', 'Health insurance', 'Car insurance', 'Landlord insurance', 'Something else'] },
    { name: 'message', label: 'Message', type: 'textarea', full: true, placeholder: 'Anything else we should know? (optional)' },
  ],
});

/* ─────────── articles ─────────── */

const TEMPLATES = {
  pt: { slug: 'subseguro-portugal', dir: 'blog', crumbLabel: 'Brasileiros em Portugal', hub: BR_HUB.url, faqTitle: 'Perguntas frequentes', relatedTitle: 'Artigos relacionados', contactTitle: 'Peça uma análise por escrito', contactText: 'Explicamos as apólices portuguesas com o vocabulário que conhece do Brasil — por escrito, antes de assinar.', contactCta: 'Pedir uma análise', waText: 'Olá, li o vosso artigo para brasileiros e gostaria de mais informação.', dateLabel: 'Publicado a 2 de outubro de 2026', minRead: 'min de leitura' },
  en: { slug: 'track-days-performance-driving-motor-policy-exclusion', dir: 'en/blog', crumbLabel: 'South Africans in Portugal', hub: ZA_HUB.url, faqTitle: 'Frequently asked questions', relatedTitle: 'Related articles', contactTitle: 'Get a written review', contactText: 'We explain Portuguese policies in English, in writing, before you sign — and tell you plainly what can be arranged.', contactCta: 'Get an Insurance Review', waText: "Hi, I read your article for South Africans and would like more information.", dateLabel: 'Published 2 October 2026', minRead: 'min read' },
};

function spliceArticle(lang, a, siblings) {
  const t = TEMPLATES[lang];
  const tplPath = join(PUBLIC, t.dir, t.slug, 'index.html');
  let html = readFileSync(tplPath, 'utf8');
  const path = `/${t.dir}/${a.slug}/`;
  const url = ORIGIN + path;

  // head
  html = sub(html, /<title>[^<]*<\/title>/, `<title>${escText(a.metaTitle)}</title>`, a.slug);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escAttr(a.description)}">`);
  html = html.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${escAttr(a.keywords)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?/g, '');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escAttr(a.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escAttr(a.description)}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escAttr(a.title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escAttr(a.description)}">`);
  html = html.replace(/<meta property="article:published_time" content="[^"]*">/, `<meta property="article:published_time" content="${STAMP}">`);
  html = html.replace(/<meta property="article:modified_time" content="[^"]*">/, `<meta property="article:modified_time" content="${STAMP}">`);
  html = html.replace(/[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.title,
        description: a.description,
        inLanguage: lang === 'pt' ? 'pt-PT' : 'en-GB',
        datePublished: STAMP,
        dateModified: STAMP,
        image: ORIGIN + a.image,
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: 'Hugo Gonçalves' },
        publisher: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'pt' ? 'Início' : 'Home', item: `${ORIGIN}${lang === 'pt' ? '/' : '/en/'}` },
          { '@type': 'ListItem', position: 2, name: t.crumbLabel, item: ORIGIN + t.hub },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
      { '@type': 'FAQPage', mainEntity: a.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })) },
    ],
  };
  html = html.replace('</head>', `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n</script>\n</head>`);

  // visible header
  html = sub(
    html,
    /<div class="breadcrumb">[\s\S]*?<\/div>/,
    `<div class="breadcrumb">\n  <a href="${lang === 'pt' ? '/' : '/en/'}">${lang === 'pt' ? 'Início' : 'Home'}</a><span>&rsaquo;</span>\n  <a href="${t.hub}">${t.crumbLabel}</a><span>&rsaquo;</span>\n  ${a.title}\n</div>`,
    a.slug
  );
  html = sub(html, /<div class="article-tag">[^<]*<\/div>/, `<div class="article-tag">${a.tag}</div>`, a.slug);
  html = sub(html, /<h1 class="article-title">[\s\S]*?<\/h1>/, `<h1 class="article-title">${a.title}</h1>`, a.slug);
  html = sub(html, /<div class="article-date">[\s\S]*?<\/div>/, `<div class="article-date"><time datetime="${PUBLISHED}">${t.dateLabel}</time> &middot; ${a.readingTime} ${t.minRead}</div>`, a.slug);
  html = html.replace(/<img src="[^"]*" alt="[^"]*" class="article-featured-image"/, `<img src="${a.image}" alt="${escAttr(a.title)}" class="article-featured-image"`);
  html = html.replace(/(<div class="cta-topo">[\s\S]*?<a class="cta-btn" href=")[^"]*(")/, `$1${t.hub}#pedido$2`);

  // body + FAQ + contact
  const wa = `https://wa.me/351928226570?text=${encodeURIComponent(t.waText)}`;
  const faq = `\n    <h2>${t.faqTitle}</h2>\n${a.faq.map((f) => `    <details class="ar-faq-item" style="margin:0 0 12px;"><summary style="font-weight:600;cursor:pointer;">${f.q}</summary><p>${f.a}</p></details>`).join('\n')}\n`;
  const contact = `\n    <div class="article-contact">\n      <h2>${t.contactTitle}</h2>\n      <p>${t.contactText}</p>\n      <div class="article-contact-actions" style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;">\n        <a href="${t.hub}#pedido" class="contact-link">${t.contactCta}</a>\n        <a href="${wa}" class="contact-link" rel="noopener" target="_blank" style="background:#25D366;">WhatsApp</a>\n      </div>\n    </div>\n`;
  const start = html.indexOf('<div class="article-body">');
  const end = html.indexOf('</article>', start);
  if (start < 0 || end < 0) throw new Error(`${a.slug}: article-body/article not found`);
  html = html.slice(0, start) + `<div class="article-body">\n${a.body}${faq}${contact}  </div>\n` + html.slice(end);

  // related
  const rel = siblings.filter((s) => s.slug !== a.slug).slice(0, 3);
  const relHtml = `<section class="related-section">\n  <h2 class="related-title">${t.relatedTitle}</h2>\n  <div class="related-grid">\n${rel
    .map((s) => `    <a href="/${t.dir}/${s.slug}/" class="related-card">\n      <div class="related-card-tag">${s.tag}</div>\n      <div class="related-card-title">${s.title}</div>\n    </a>`)
    .join('\n')}\n  </div>\n</section>\n`;
  const rs = html.indexOf('<section class="related-section">');
  if (rs >= 0) {
    const re = html.indexOf('</section>', rs) + '</section>\n'.length;
    html = html.slice(0, rs) + relHtml + html.slice(re);
  }

  // every WhatsApp prefill that quoted the template's title
  html = html.replace(/https:\/\/wa\.me\/351928226570\?text=[^"]*/g, wa);
  // own language row in the selector
  const tplPath2 = `/${t.dir}/${t.slug}/`;
  html = html.split(`href="${tplPath2}"`).join(`href="${path}"`);
  html = html.split(`${ORIGIN}${tplPath2}`).join(url);

  mkdirSync(join(PUBLIC, t.dir, a.slug), { recursive: true });
  writeFileSync(join(PUBLIC, t.dir, a.slug, 'index.html'), html);
  return path;
}

function register(lang, a, extra) {
  const list = articleData.articles[lang];
  const t = TEMPLATES[lang];
  const rec = {
    slug: a.slug,
    lang,
    status: 'published',
    url: `/${t.dir}/${a.slug}/`,
    category: extra.category ?? null,
    ...(lang === 'pt' ? { cluster: 'guias-de-seguros' } : {}),
    tag: a.tag,
    title: a.title,
    metaTitle: a.metaTitle,
    description: a.description,
    excerpt: a.description,
    image: a.image,
    imageGradient: null,
    imageAlt: a.title,
    published: STAMP,
    modified: STAMP,
    dateLabel: lang === 'pt' ? 'Outubro 2026' : 'October 2026',
    readingTime: a.readingTime,
    featured: false,
    translationOf: null,
  };
  const i = list.findIndex((x) => x.slug === a.slug);
  if (i === -1) list.push(rec);
  else list[i] = { ...list[i], ...rec };
}

for (const a of BR_ARTICLES) {
  console.log(spliceArticle('pt', a, BR_ARTICLES));
  register('pt', a, {});
}
for (const a of ZA_ARTICLES) {
  console.log(spliceArticle('en', a, ZA_ARTICLES));
  register('en', a, { category: a.category });
}
writeFileSync(join(ROOT, 'data/articles.json'), `${JSON.stringify(articleData, null, 2)}\n`);

const byUrl = (lang) => new Map(articleData.articles[lang].map((x) => [x.url, x]));
const ptMap = byUrl('pt');
const enMap = byUrl('en');
console.log(await writePage(BR_HUB.url.replace(/^\/|\/$/g, ''), landingPage(BR_HUB, BR_ARTICLES.map((a) => ptMap.get(`/blog/${a.slug}/`)).slice(0, 3))));
console.log(await writePage(ZA_HUB.url.replace(/^\/|\/$/g, ''), landingPage(ZA_HUB, ZA_ARTICLES.map((a) => enMap.get(`/en/blog/${a.slug}/`)))));
