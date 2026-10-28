#!/usr/bin/env node
/**
 * Builds the Private Office page — Adler & Rochefort's general value
 * proposition — in six languages (October 2026):
 *
 *   /en/private-office/  (master)   /de/private-office/   /es/private-office/
 *   /zh/private-office/             /il/private-office/   /br/private-office/ (pt-BR)
 *
 * Content lives in scripts/private-office.data.mjs. The site chrome (head
 * assets, navigation, footer, scripts) is taken from an existing page in the
 * same language, so the new pages look exactly like their neighbours; only
 * the head metadata, the language selector targets and the page body are
 * replaced.
 *
 * After building, run (in this order):
 *   node scripts/apply-quick-contact.mjs      (adds the short contact form)
 *   node scripts/build-private-office.mjs --place-form
 *   node scripts/apply-analytics-consent.mjs
 *
 * Idempotent: re-running overwrites the six files.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './private-office.data.mjs';
import { selectorTargets, langSelectorHtml, LANGSEL_CSS_LINK, LANGSEL_SCRIPT_TAG, THEME_CSS_LINK } from './lib/lang-selector.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ldEsc = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

// ---------------------------------------------------------------------------
// --place-form: move the short form inserted by apply-quick-contact.mjs into
// the closing section, where it belongs on this page.
// ---------------------------------------------------------------------------
if (process.argv.includes('--place-form')) {
  for (const p of Object.values(PAGES)) {
    const f = join(PUBLIC, p.path, 'index.html');
    let s = readFileSync(f, 'utf8');
    const m = s.match(/<!-- ar-quick-contact -->\n<div class="arsf[\s\S]*?\n<\/div>\n?/);
    if (!m) { console.log('no form block in', p.path); continue; }
    if (s.indexOf(m[0]) > s.indexOf('<div class="po-form-slot">')) { console.log('already placed', p.path); continue; }
    s = s.replace(m[0], '');
    s = s.replace('<div class="po-form-slot"></div>', `<div class="po-form-slot">\n${m[0].trim()}\n</div>`);
    writeFileSync(f, s);
    console.log('form placed', p.path);
  }
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Alternates and selector pairs
// ---------------------------------------------------------------------------
const ALTERNATES = Object.values(PAGES).map((p) => ({ hreflang: p.hreflang, href: ORIGIN + p.path }));
const PAIRS = Object.fromEntries(Object.values(PAGES).filter((p) => p.key !== 'pt').map((p) => [p.key, p.path]));

const STYLE = `<style id="po-style">
main.po{display:block;padding-bottom:var(--ar-gutter,16px)}
main.po>section{background:var(--ar-block,#fff);color:var(--ar-ink,#161616);padding:clamp(32px,5vw,72px) clamp(20px,5vw,72px)}
main.po .po-wrap{max-width:1080px;margin:0 auto}
main.po h1,main.po h2,main.po h3{font-family:var(--ar-sans,'Inter',sans-serif);margin:0}
main.po p{margin:0}
main.po a{color:inherit}
.po-kicker{display:inline-block;font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ar-orange,#FF6300);margin-bottom:14px}
.po-h2{font-size:clamp(28px,3.6vw,44px);line-height:1.08;letter-spacing:-.025em;font-weight:600;max-width:820px}
main.po>section.po-hero,main.po>section.po-hero *{text-align:start!important}
main.po>section.po-hero .po-wrap>*{margin-inline-start:0!important;margin-inline-end:0!important}
.po-actions{justify-content:flex-start!important}
nav.breadcrumb.po-crumb{font-size:13px;padding-inline:clamp(20px,5vw,80px)}
nav.breadcrumb.po-crumb span{margin:0 8px}
main.po>section.po-hero{background:var(--ar-charcoal,#292929)!important;color:#fff!important;padding-top:clamp(48px,8vw,112px);padding-bottom:clamp(48px,8vw,104px)}
.po-hero .po-kicker{color:var(--ar-orange-hi,#FF8A3D)}
main.po .po-hero h1{font-size:clamp(40px,7vw,84px)!important;line-height:.98!important;letter-spacing:-.035em!important;font-weight:600!important;color:#fff!important;max-width:900px}
main.po .po-hero p.po-lead{font-family:'Playfair Display','Ubuntu',Georgia,serif;font-style:italic;font-size:clamp(21px,2.8vw,30px);line-height:1.3;color:rgba(255,255,255,.9)!important;margin:22px 0 0!important;max-width:780px}
main.po .po-hero:lang(zh) p.po-lead,main.po .po-hero:lang(he) p.po-lead{font-family:var(--ar-sans,'Inter',sans-serif);font-style:normal;font-weight:400}
.po-intro{margin-top:30px;display:grid;gap:16px;max-width:780px}
main.po .po-hero .po-intro p{font-size:17px;line-height:1.75;color:rgba(255,255,255,.8)!important;max-width:none;margin:0!important}
.po-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.po-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 26px;border-radius:999px;font-weight:600;font-size:15.5px;text-decoration:none!important;transition:transform .15s ease,background .15s ease}
.po-btn:hover{transform:translateY(-1px)}
.po-btn-primary{background:var(--ar-orange,#FF6300);color:#fff!important}
.po-btn-primary:hover{background:var(--ar-orange-hi,#FF8A3D)}
.po-btn-ghost{border:1px solid rgba(255,255,255,.32);color:#fff!important;background:rgba(255,255,255,.04)}
.po-btn-ghost:hover{background:rgba(255,255,255,.1)}
.po-facts{list-style:none;padding:0;margin:28px 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}
.po-facts li{background:var(--ar-page,#ECEBE9);border-radius:var(--ar-r-md,20px);padding:20px 22px;font-size:15.5px;line-height:1.6}
.po-principles{list-style:none;padding:0;margin:34px 0 0;display:grid;gap:0;border-top:1px solid var(--ar-line,rgba(0,0,0,.08))}
.po-principles li{display:grid;grid-template-columns:72px minmax(0,220px) minmax(0,1fr);gap:20px;padding:26px 0;border-bottom:1px solid var(--ar-line,rgba(0,0,0,.08));align-items:baseline}
.po-num{font-family:var(--ar-mono,monospace);font-size:13px;color:var(--ar-orange,#FF6300);letter-spacing:.06em}
.po-principles h3{font-size:20px;letter-spacing:-.015em;font-weight:600}
.po-principles p{font-size:16px;line-height:1.7;color:#3a3a3a}
@media (max-width:760px){.po-principles li{grid-template-columns:44px minmax(0,1fr);gap:6px 14px}.po-principles p{grid-column:2}}
.po-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px;margin-top:32px}
.po-card{background:var(--ar-page,#ECEBE9);border-radius:var(--ar-r-lg,28px);padding:28px 26px;display:flex;flex-direction:column;gap:14px}
.po-card h3{font-size:21px;letter-spacing:-.015em;font-weight:600}
.po-card p{font-size:15.5px;line-height:1.65;color:#3a3a3a}
.po-links{list-style:none;padding:0;margin:auto 0 0;display:flex;flex-wrap:wrap;gap:8px}
.po-links a{display:inline-block;font-size:13.5px;font-weight:600;padding:7px 13px;border-radius:999px;background:#fff;text-decoration:none!important;border:1px solid var(--ar-line,rgba(0,0,0,.08))}
.po-links a:hover{border-color:var(--ar-orange,#FF6300);color:var(--ar-orange,#FF6300)}
.po-steps{list-style:none;padding:0;margin:32px 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;counter-reset:po}
.po-steps li{counter-increment:po;border-top:2px solid var(--ar-charcoal,#292929);padding-top:18px}
.po-steps li::before{content:counter(po,decimal-leading-zero);display:block;font-family:var(--ar-mono,monospace);font-size:13px;color:var(--ar-orange,#FF6300);margin-bottom:10px}
.po-steps h3{font-size:18.5px;font-weight:600;letter-spacing:-.01em;margin-bottom:8px}
.po-steps p{font-size:15.5px;line-height:1.65;color:#3a3a3a}
.po-who{display:grid;grid-template-columns:96px minmax(0,1fr);gap:24px;align-items:start;margin-top:26px}
.po-who img{width:96px;height:96px;border-radius:50%;object-fit:cover}
.po-who p{font-size:16.5px;line-height:1.75;color:#3a3a3a;max-width:780px}
.po-who .po-links{margin-top:18px}
@media (max-width:600px){.po-who{grid-template-columns:1fr}}
.po-faq{margin-top:26px;border-top:1px solid var(--ar-line,rgba(0,0,0,.08))}
.po-faq details{border-bottom:1px solid var(--ar-line,rgba(0,0,0,.08))}
.po-faq summary{cursor:pointer;list-style:none;padding:22px 0;font-size:18px;font-weight:600;letter-spacing:-.01em;display:flex;justify-content:space-between;gap:16px}
.po-faq summary::-webkit-details-marker{display:none}
.po-faq summary::after{content:"+";color:var(--ar-orange,#FF6300);font-weight:400;font-size:24px;line-height:1}
.po-faq details[open] summary::after{content:"–"}
.po-faq details p{padding:0 0 22px;font-size:16px;line-height:1.75;color:#3a3a3a;max-width:820px}
main.po>section.po-close{background:var(--ar-charcoal,#292929)!important;color:#fff!important}
.po-close .po-h2{color:#fff}
main.po .po-close p.po-close-text{font-size:17px;line-height:1.7;color:rgba(255,255,255,.78);margin-top:14px!important;max-width:640px}
.po-close .po-kicker{color:var(--ar-orange-hi,#FF8A3D)}
.po-close-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:clamp(24px,4vw,56px);align-items:start}
@media (max-width:860px){.po-close-grid{grid-template-columns:1fr}}
.po-form-slot .arsf{margin:0!important;max-width:none!important}
main.po .po-close p.po-legal{font-size:13px;color:rgba(255,255,255,.55);margin-top:22px!important;line-height:1.6}
</style>`;

function body(p) {
  const wa = `https://wa.me/351928226570?text=${encodeURIComponent(p.waText)}`;
  const links = (arr) => (arr.length ? `<ul class="po-links">${arr.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>` : '');
  const crumb = `<nav class="breadcrumb po-crumb" aria-label="Breadcrumb"><a href="${p.home}">${esc(p.homeLabel)}</a><span>/</span>Private Office</nav>`;
  return `${crumb}
<main class="po" id="main">

<section class="lp-hero po-hero" aria-labelledby="po-title">
  <div class="po-wrap">
    <div class="po-kicker">${esc(p.eyebrow)}</div>
    <h1 id="po-title">Adler &amp; Rochefort Private Office</h1>
    <p class="po-lead">${esc(p.lead)}</p>
    <div class="po-intro">
${p.intro.map((t) => `      <p>${esc(t)}</p>`).join('\n')}
    </div>
    <div class="po-actions">
      <a class="po-btn po-btn-primary" href="#po-contact">${esc(p.cta)}</a>
      <a class="po-btn po-btn-ghost" href="${esc(wa)}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>
</section>

<section aria-labelledby="po-facts">
  <div class="po-wrap">
    <h2 class="po-h2" id="po-facts">${esc(p.factsTitle)}</h2>
    <ul class="po-facts">
${p.facts.map((t) => `      <li>${esc(t)}</li>`).join('\n')}
    </ul>
  </div>
</section>

<section aria-labelledby="po-principles">
  <div class="po-wrap">
    <div class="po-kicker">${esc(p.principlesKicker)}</div>
    <h2 class="po-h2" id="po-principles">${esc(p.principlesTitle)}</h2>
    <ol class="po-principles">
${p.principles.map(([h, t], i) => `      <li><span class="po-num">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(t)}</p></li>`).join('\n')}
    </ol>
  </div>
</section>

<section aria-labelledby="po-domains">
  <div class="po-wrap">
    <div class="po-kicker">${esc(p.domainsKicker)}</div>
    <h2 class="po-h2" id="po-domains">${esc(p.domainsTitle)}</h2>
    <div class="po-grid">
${p.domains.map(([h, t, l]) => `      <div class="po-card"><h3>${esc(h)}</h3><p>${esc(t)}</p>${links(l)}</div>`).join('\n')}
    </div>
  </div>
</section>

<section aria-labelledby="po-steps">
  <div class="po-wrap">
    <div class="po-kicker">${esc(p.stepsKicker)}</div>
    <h2 class="po-h2" id="po-steps">${esc(p.stepsTitle)}</h2>
    <ol class="po-steps">
${p.steps.map(([h, t]) => `      <li><h3>${esc(h)}</h3><p>${esc(t)}</p></li>`).join('\n')}
    </ol>
  </div>
</section>

<section aria-labelledby="po-who">
  <div class="po-wrap">
    <h2 class="po-h2" id="po-who">${esc(p.whoTitle)}</h2>
    <div class="po-who">
      <picture><source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp"><img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" width="96" height="96" loading="lazy" decoding="async"></picture>
      <div><p>${esc(p.who)}</p>${links(p.whoLinks)}</div>
    </div>
  </div>
</section>

<section aria-labelledby="po-faq">
  <div class="po-wrap">
    <h2 class="po-h2" id="po-faq">${esc(p.faqTitle)}</h2>
    <div class="po-faq">
${p.faq.map(([q, a], i) => `      <details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
    </div>
  </div>
</section>

<section class="closing po-close" id="po-contact" aria-labelledby="po-close-title">
  <div class="po-wrap po-close-grid">
    <div>
      <div class="po-kicker">Private Office</div>
      <h2 class="po-h2" id="po-close-title">${esc(p.closeTitle)}</h2>
      <p class="po-close-text">${esc(p.close)}</p>
      <div class="po-actions">
        <a class="po-btn po-btn-primary" href="mailto:insurance@adlerrochefort.com?subject=Private%20Office">${esc(p.emailLabel)}</a>
        <a class="po-btn po-btn-ghost" href="${esc(wa)}" target="_blank" rel="noopener">WhatsApp · +351 928 226 570</a>
      </div>
      <p class="po-legal">Adler &amp; Rochefort · Ownizo, Unipessoal Lda. · ASF 425591790/3 · insurance@adlerrochefort.com</p>
    </div>
    <div class="po-form-slot"></div>
  </div>
</section>

</main>
`;
}

function schema(p) {
  const url = ORIGIN + p.path;
  const org = {
    '@type': 'InsuranceAgency',
    '@id': `${ORIGIN}/#organization`,
    name: 'Adler & Rochefort',
    legalName: 'Ownizo, Unipessoal Lda.',
    url: `${ORIGIN}/`,
    logo: `${ORIGIN}/images/logo-adler-rochefort.svg`,
    telephone: '+351928226570',
    email: 'insurance@adlerrochefort.com',
    address: [
      { '@type': 'PostalAddress', streetAddress: 'Av. do Atlântico 16, Esc. 5.07', postalCode: '1990-019', addressLocality: 'Lisboa', addressCountry: 'PT' },
    ],
    areaServed: [{ '@type': 'Country', name: 'Portugal' }, { '@type': 'Country', name: 'Spain' }],
    knowsLanguage: ['en', 'pt', 'es', 'de'],
    identifier: { '@type': 'PropertyValue', name: 'ASF registration', value: '425591790/3' },
    founder: { '@type': 'Person', name: 'Hugo Gonçalves', jobTitle: 'Founder & Managing Director' },
    memberOf: [
      { '@type': 'Organization', name: 'afpop' },
      { '@type': 'Organization', name: 'NCA Portugal' },
      { '@type': 'Organization', name: 'British-Portuguese Chamber of Commerce' },
    ],
    sameAs: ['https://www.facebook.com/adlerrochefort', 'https://www.instagram.com/adlerrochefort/', 'https://www.linkedin.com/company/adler-rochefort'],
  };
  const graph = [
    org,
    { '@type': 'AboutPage', '@id': `${url}#webpage`, url, name: p.title, description: p.description, inLanguage: p.html, about: { '@id': `${ORIGIN}/#organization` }, isPartOf: { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: 'Adler & Rochefort' } },
    { '@type': 'Service', '@id': `${url}#service`, name: p.serviceName, serviceType: 'Insurance mediation', provider: { '@id': `${ORIGIN}/#organization` }, areaServed: [{ '@type': 'Country', name: 'Portugal' }, { '@type': 'Country', name: 'Spain' }], audience: { '@type': 'Audience', audienceType: 'International families, private clients and family offices' } },
    { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: p.html, mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: p.homeLabel, item: ORIGIN + p.home }, { '@type': 'ListItem', position: 2, name: 'Private Office', item: url }] },
  ];
  return `<script type="application/ld+json">${ldEsc({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

function build(p) {
  const tpl = readFileSync(join(PUBLIC, p.template), 'utf8');
  const bc = tpl.search(/<(nav|div)[^>]*class="breadcrumb"/);
  const mainAt = tpl.search(/<main[\s>]/);
  const footAt = tpl.search(/<footer[\s>]/);
  if (bc < 0 || footAt < 0) throw new Error(`template markers missing in ${p.template}`);
  const start = mainAt >= 0 && mainAt < bc ? mainAt : bc;
  let head = tpl.slice(0, start);
  const tail = tpl.slice(footAt);

  // --- <html> ---
  head = head.replace(/<html[^>]*>/, `<html lang="${p.html}"${p.dir === 'rtl' ? ' dir="rtl"' : ''}>`);

  // --- strip page-specific head metadata ---
  const headEnd = head.indexOf('</head>');
  let h = head.slice(0, headEnd);
  const rest = head.slice(headEnd);
  h = h
    .replace(/<title>[\s\S]*?<\/title>\n?/, '')
    .replace(/<meta\s+name="(description|keywords)"[^>]*>\n?/g, '')
    .replace(/<link\s+rel="canonical"[^>]*>\n?/g, '')
    .replace(/<link\s+rel="alternate"\s+hreflang[^>]*>\n?/g, '')
    .replace(/<link\s+rel="alternate"[^>]*hreflang[^>]*>\n?/g, '')
    .replace(/<meta\s+property="og:(url|title|description|locale|type)"[^>]*>\n?/g, '')
    .replace(/<meta\s+name="twitter:(title|description)"[^>]*>\n?/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '')
    .replace(/<meta\s+name="robots"[^>]*>\n?/g, '');

  const url = ORIGIN + p.path;
  const meta = [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<link rel="canonical" href="${url}">`,
    ...ALTERNATES.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`),
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN}${PAGES.en.path}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(p.title)}">`,
    `<meta property="og:description" content="${esc(p.description)}">`,
    `<meta property="og:locale" content="${p.locale}">`,
    `<meta name="twitter:title" content="${esc(p.title)}">`,
    `<meta name="twitter:description" content="${esc(p.description)}">`,
    schema(p),
    STYLE,
  ].join('\n');
  // insert right after the viewport meta (keeps charset first)
  h = h.replace(/(<meta name="viewport"[^>]*>\n?)/, `$1${meta}\n`);
  // selector + theme assets, for templates that predate them (theme last)
  if (!h.includes(LANGSEL_CSS_LINK)) h += LANGSEL_CSS_LINK + '\n';
  if (!h.includes(THEME_CSS_LINK)) h += THEME_CSS_LINK + '\n';
  else { h = h.replace(THEME_CSS_LINK + '\n', '').replace(THEME_CSS_LINK, ''); h += THEME_CSS_LINK + '\n'; }
  head = h + rest;

  // --- language selector: header, mobile and footer instances ---
  const targets = selectorTargets({ pageLang: p.key, pageUrl: p.path, pairs: p.key === 'pt' ? {} : PAIRS });
  if (p.key === 'pt') for (const t of targets) if (t.current) Object.assign(t, { html: 'pt-BR', hreflang: 'pt-BR' });
  const menuFor = (id) => {
    const html = langSelectorHtml({ pageLang: p.key, targets, id });
    return html.match(/<ul class="ar-langsel-menu"[\s\S]*?<\/ul>/)[0].trim();
  };
  const swapMenus = (s) => s.replace(/<ul class="ar-langsel-menu" id="(\w+?)Menu"[^>]*>[\s\S]*?<\/ul>/g, (_, id) => menuFor(id));
  head = swapMenus(head);
  // the template's own structured data (FAQ, breadcrumb…) sometimes sits after the footer
  let foot = swapMenus(tail).replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');
  foot = foot.replace(/(<ul class="footer-col-links footer-langs ar-langsel-fallback">)[\s\S]*?(<\/ul>)/, (_, a, b) =>
    `${a}\n${targets.map((t) => `          <li><a href="${esc(t.href)}" lang="${t.html}" dir="${t.dir || 'ltr'}"${t.current ? ' aria-current="true"' : ''}>${esc(t.label)}</a></li>`).join('\n')}\n        ${b}`);

  if (!foot.includes(LANGSEL_SCRIPT_TAG)) foot = foot.replace(/<\/body>(?![\s\S]*<\/body>)/, `${LANGSEL_SCRIPT_TAG}\n</body>`);
  const out = head + body(p) + foot;
  const dir = join(PUBLIC, p.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), out);
  console.log('built', p.path, `(${Math.round(out.length / 1024)} KB, template ${p.template})`);
}

for (const p of Object.values(PAGES)) build(p);
