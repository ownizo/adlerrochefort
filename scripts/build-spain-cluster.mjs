#!/usr/bin/env node
/**
 * Builds the Spain market layer — Phase 1 — under /en/.
 *
 * Three pages: the national expat hub (/en/expat-insurance-spain/) and two
 * commercial pillars underneath it (/en/home-insurance-spain/,
 * /en/landlord-insurance-spain/). Content lives in spain-cluster.data.mjs.
 *
 * This generator is deliberately self-contained rather than built on top of
 * build-car-cluster.mjs or build-expat-hub.mjs: those two files render the
 * Portugal chrome (the PT|EN|NL|FR|DE language switcher, the ASF-registered
 * top bar copy, footer links into Portugal-only product pages) baked directly
 * into their markup, and reusing them as-is would either (a) leak that
 * Portugal chrome onto Spain pages, or (b) require editing those files to
 * branch on country — which risks the one thing this task must not risk,
 * a Portugal regression. Neither file is touched by this script.
 *
 * What genuinely is shared with the car cluster: the section-`kind` markup
 * vocabulary (p / note / grid / covers / compare / steps / cluster / guides),
 * the JSON-LD shape, and the pre-write validation gate (unique H1/title
 * across the cluster, valid JSON-LD, every internal link resolved, every FAQ
 * visible and in schema). That is the pattern being reused; the copy, the
 * navigation, the footer and the regulatory wording are Spain's own.
 *
 * Run, in this order:
 *
 *   node scripts/build-spain-cluster.mjs
 *   node scripts/generate-sitemap.mjs
 *
 * Deliberately NOT run: scripts/hreflang.mjs and scripts/lang-switcher.mjs.
 * Spain pages carry no hreflang alternates at all — they are country
 * variants of an English-language intent, not language translations of a
 * Portuguese page, and the site's own hreflang.mjs already enforces that a
 * page declares hreflang only when a real translated counterpart exists on
 * disk. None does for Spain yet. Running lang-switcher.mjs would try to
 * rebuild the PT|EN|NL|FR|DE selector this cluster deliberately does not use
 * (see `marketSwitch` below) and could touch unrelated Portugal files for no
 * reason connected to this task.
 *
 * Before anything is written, every page is rendered and validated: unique H1
 * and title within this cluster, valid JSON-LD, every visible FAQ present in
 * the FAQPage schema and vice versa, and every internal link resolved either
 * to a file already on disk or to another page in this same run. Any failure
 * throws before a single file is written.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, SPAIN_PRODUCTS, SPAIN_CROSS_SELL, SPAIN_CROSS_SELL_PROMPT, HUB_SLUG } from './spain-cluster.data.mjs';
import { FOOTER, WHATSAPP_SVG, PROVIDER } from './lib/spain-chrome.mjs';

// Phase 5 (conversion): resolves a page's own product key from its slug, so
// the cross-sell layer never has to be told twice which product a page is —
// one lookup against the single source of truth in spain-cluster.data.mjs.
// Returns null for the hub, which has no single product identity.
const productKeyOf = (page) => SPAIN_PRODUCTS.find((p) => p.slug === page.slug)?.key ?? null;
const crossSellFor = (page) => {
  const key = productKeyOf(page);
  if (!key) return [];
  return (SPAIN_CROSS_SELL[key] ?? []).map((k) => SPAIN_PRODUCTS.find((p) => p.key === k));
};

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

const ENTITIES = {
  mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  euro: '€', nbsp: ' ', middot: '·', hellip: '…', deg: '°', copy: '©',
  ordm: 'º', ordf: 'ª', laquo: '«', raquo: '»', rarr: '→',
  aacute: 'á', agrave: 'à', atilde: 'ã', acirc: 'â', ccedil: 'ç',
  eacute: 'é', egrave: 'è', ecirc: 'ê', iacute: 'í', oacute: 'ó',
  ocirc: 'ô', otilde: 'õ', uacute: 'ú', uuml: 'ü', ouml: 'ö', auml: 'ä',
  lt: '<', gt: '>', quot: '"', amp: '&',
};

const plain = (s) =>
  String(s)
    .replace(/<[^>]+>/g, '')
    .replace(/&([a-zA-Z]+);/g, (m, name) => {
      if (!(name in ENTITIES)) throw new Error(`plain(): unmapped entity &${name}; in: ${s}`);
      return ENTITIES[name];
    })
    .replace(/\s+/g, ' ')
    .trim();

const json = (obj) => JSON.stringify(obj, null, 2);

// --- ancestry ------------------------------------------------------------
// Resolves each page's breadcrumb chain by walking `page.parent` against the
// other pages in this same cluster. Generic to any depth; today the chain is
// at most two levels (Landlord → Home → Hub).

const bySlug = new Map(PAGES.map((p) => [p.slug, p]));
function ancestorsOf(page) {
  const chain = [];
  let cur = page;
  while (cur.parent) {
    chain.unshift(cur.parent);
    const slug = cur.parent.href.replace(/^\/en\/|\/$/g, '');
    cur = bySlug.get(slug);
    if (!cur) break;
  }
  return chain;
}

// --- chrome ----------------------------------------------------------------
// Not the Portugal nav/footer. Spain pages state their market plainly instead
// of using the PT|EN|NL|FR|DE language switcher, which has no vocabulary for
// "same language, different country" — see the audit's navigation findings.

const HUB_URL = `/en/${bySlug.has('expat-insurance-spain') ? 'expat-insurance-spain' : ''}/`;

const nav = (page) => `
<!-- NAV -->
<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal's ASF, no. 425591790/3, and serves Spain on a cross-border basis — <a href="#quote-form">${esc(page.topBarCta)}</a></div>
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-links-left">
    <a href="${HUB_URL}">Insurance for expats in Spain</a>
    <a href="/en/health-insurance-spain/">Health insurance</a>
    <a href="/en/home-insurance-spain/">Home insurance</a>
    <a href="/en/landlord-insurance-spain/">Landlord insurance</a>
    <a href="/en/car-insurance-spain/">Car insurance</a>
    <a href="/en/life-insurance-spain/">Life insurance</a>
    <a href="/en/private-clients-spain/">Private clients</a>
  </div>
  <a href="/en/" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager" onerror="this.remove();this.parentNode.classList.add('logo-fallback')">
    <span class="nav-logo-mark" aria-hidden="true">A&amp;R</span>
  </a>
  <div class="nav-links-right">
    <a href="#faq">FAQ</a>
    <a href="#quote-form" class="nav-cta">${esc(page.topBarCta)}</a>
    <div class="lang-switcher market-switch">
      <span class="market-current" aria-current="true">🇪🇸 Spain</span>
      <span class="lang-switcher-sep">|</span>
      <a href="${PT_HUB}">Looking for Portugal?</a>
    </div>
  </div>
  <button class="nav-burger" onclick="toggleMenu()" aria-label="Menu" aria-controls="mobileNav" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <a href="${HUB_URL}" onclick="toggleMenu()">Insurance for expats in Spain</a>
  <a href="/en/health-insurance-spain/" onclick="toggleMenu()">Health insurance</a>
  <a href="/en/home-insurance-spain/" onclick="toggleMenu()">Home insurance</a>
  <a href="/en/landlord-insurance-spain/" onclick="toggleMenu()">Landlord insurance</a>
  <a href="/en/car-insurance-spain/" onclick="toggleMenu()">Car insurance</a>
  <a href="/en/life-insurance-spain/" onclick="toggleMenu()">Life insurance</a>
  <a href="/en/private-clients-spain/" onclick="toggleMenu()">Private clients</a>
  <a href="#faq" onclick="toggleMenu()">FAQ</a>
  <a href="#quote-form" onclick="toggleMenu()">${esc(page.topBarCta)}</a>
  <div class="mobile-lang-switcher market-switch">
    <span class="market-current" aria-current="true">🇪🇸 Spain</span>
    <a href="${PT_HUB}">Looking for Portugal instead?</a>
  </div>
</div>`;

// --- body blocks -------------------------------------------------------------

function block(b) {
  switch (b.kind) {
    case 'p':
      return `      <p>${b.html}</p>`;
    case 'note':
      return `      <p class="lp-note">${b.html}</p>`;
    case 'h3':
      return `      <h3>${esc(b.text)}</h3>`;
    case 'grid':
      return `      <div class="lp-grid">
${b.items.map((i) => `        <div class="lp-grid-item"><h3>${esc(i.title)}</h3><p>${i.body}</p></div>`).join('\n')}
      </div>`;
    case 'covers':
      return `      <ul class="lp-covers">
${b.items.map((i) => `        <li><strong>${i.title}</strong>${i.body}</li>`).join('\n')}
      </ul>`;
    case 'compare':
      return `      <div class="lp-compare">
${b.columns
  .map(
    (c) => `        <div><h3>${esc(c.title)}</h3><ul>
${c.points.map((p) => `          <li>${p}</li>`).join('\n')}
        </ul></div>`
  )
  .join('\n')}
      </div>`;
    case 'steps':
      return `      <ol class="lp-steps">
${b.items.map((i) => `        <li><strong>${i.title}</strong> ${i.body}</li>`).join('\n')}
      </ol>`;
    case 'guides':
      return `      <ul class="lp-guides">
${b.items.map((i) => `        <li><a href="${esc(i.href)}">${esc(i.text)}</a>${i.note ? ` &mdash; ${i.note}` : ''}</li>`).join('\n')}
      </ul>`;
    case 'cluster':
      return `      <div class="lp-cluster">
${b.items
  .map(
    (i) =>
      `        <a href="${esc(i.href)}"><strong>${esc(i.title)}</strong><span>${esc(i.blurb)}</span></a>`
  )
  .join('\n')}
      </div>`;
    default:
      throw new Error(`unknown block kind: ${b.kind}`);
  }
}

const card = (section) => `    <div class="lp-card">
      <h2${section.id ? ` id="${esc(section.id)}"` : ''}>${esc(section.h2)}</h2>
${section.blocks.map(block).join('\n')}
    </div>`;

// --- the form ----------------------------------------------------------------

function field(f) {
  const req = f.required ? ' required' : '';
  const label = `        <label for="q-${f.name}">${esc(f.label)}${f.required ? ' *' : ''}</label>`;
  if (f.type === 'select') {
    return `      <div class="contact-form-field">
${label}
        <select id="q-${f.name}" name="${f.name}"${req}>
          <option value="">${esc(f.placeholder || 'Select an option')}</option>
${f.options.map((o) => `          <option value="${esc(o)}">${esc(o)}</option>`).join('\n')}
        </select>
      </div>`;
  }
  if (f.type === 'textarea') {
    return `      <div class="contact-form-field">
${label}
        <textarea id="q-${f.name}" name="${f.name}" placeholder="${esc(f.placeholder || '')}"${req}></textarea>
      </div>`;
  }
  const attrs = [
    `type="${f.type || 'text'}"`,
    `id="q-${f.name}"`,
    `name="${f.name}"`,
    `placeholder="${esc(f.placeholder || '')}"`,
    f.autocomplete ? `autocomplete="${f.autocomplete}"` : '',
    f.inputmode ? `inputmode="${f.inputmode}"` : '',
  ]
    .filter(Boolean)
    .join(' ');
  return `      <div class="contact-form-field">
${label}
        <input ${attrs}${req}>
      </div>`;
}

function fieldRows(fields) {
  const out = [];
  for (const entry of fields) {
    if (Array.isArray(entry)) {
      out.push(`      <div class="lp-form-row">
${entry.map(field).join('\n')}
      </div>`);
    } else {
      out.push(field(entry));
    }
  }
  return out.join('\n');
}

// The "also need help with anything else?" checkbox group (brief §3). All
// Spain products except the page's own — never the current product, per the
// brief's own instruction — as native checkboxes sharing one field name.
// Netlify combines same-name fields into a comma-joined value on submission,
// so no JS is needed to serialise this; a plain <fieldset> also gets keyboard
// operation, visible focus and grouped labelling for free (brief §30).
const crossSellField = (page) => {
  const self = productKeyOf(page);
  if (!self) return '';
  const options = SPAIN_PRODUCTS.filter((p) => p.key !== self);
  if (!options.length) return '';
  return `      <fieldset class="contact-form-crosssell">
        <legend>Also need help with anything else?</legend>
        <div class="contact-form-checkbox-grid">
${options.map((p) => `          <label class="contact-form-checkbox"><input type="checkbox" name="additional_insurance_needs" value="${esc(p.label)}"> ${esc(p.label)}</label>`).join('\n')}
        </div>
      </fieldset>`;
};

// Post-submission "need help with another type of insurance?" links (brief
// §19) — further reading, not another form: the checkboxes above already
// captured any additional needs on the same submission.
const successCrossSell = (page) => {
  const items = crossSellFor(page);
  if (!items.length) return '';
  return `      <div class="quoteSuccess-crosssell">
        <p class="quoteSuccess-crosssell-label">Need help with another type of insurance?</p>
        <div class="quoteSuccess-crosssell-links">
${items.map((p) => `          <a href="/en/${p.slug}/">${esc(p.label.replace(' Review', ''))}</a>`).join('\n')}
        </div>
      </div>`;
};

// Restrained contextual cross-sell block (brief §20/§21/§22) — at most three
// links, drawn from the SPAIN_CROSS_SELL map, never a generic "other
// services" dump. Rendered directly above the form so it reads as "here is
// what's relevant" rather than a link farm bolted on somewhere unrelated.
// Private Clients has no entries and renders nothing, by design.
const crossSellSection = (page) => {
  const items = crossSellFor(page);
  if (!items.length) return '';
  const key = productKeyOf(page);
  const prompt = SPAIN_CROSS_SELL_PROMPT[key] || 'You may also need:';
  return `
<section class="lp-crosssell" aria-label="Related insurance in Spain">
  <div class="lp-crosssell-inner">
    <p class="lp-crosssell-label">${esc(prompt)}</p>
    <div class="lp-crosssell-links">
${items.map((p) => `      <a href="/en/${p.slug}/">${esc(p.label.replace(' Review', ''))}</a>`).join('\n')}
    </div>
  </div>
</section>`;
};

// Every Spain form carries country=Spain as an explicit field, not inferred
// from the form name — see the audit's forms/lead-routing findings. The
// notification branch is set per-form in submission-created.mjs's
// HANDLED_FORMS, not here.
const formSection = (page) => `
<!-- QUOTE FORM -->
<section class="lp-form-section" id="quote-form">
  <div class="lp-form-card">
    <h2>${esc(page.form.heading)}</h2>
    <p class="lp-form-sub">${page.form.sub}</p>
    <form class="contact-form" id="quoteForm" method="POST" name="${esc(page.form.name)}" data-netlify="true" netlify-honeypot="bot-field" data-quote-form data-ga-field="${esc(page.form.gaField)}">
      <input type="hidden" name="form-name" value="${esc(page.form.name)}">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="landing_page" value="">
      <input type="hidden" name="source" value="landing:${esc(page.slug)}">
      <input type="hidden" name="country" value="Spain">
      <p class="contact-form-honeypot" style="display:none" aria-hidden="true"><label>Don't fill this in: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
${fieldRows(page.form.fields)}
${crossSellField(page)}
      <button type="submit" class="contact-form-submit">${esc(page.form.submit)} &rarr;</button>
    </form>
    <p class="lp-smallprint">By sending this form you agree to us using your details to prepare and discuss your quote, in line with our <a href="/en/privacy-policy/">privacy policy</a>. We never sell your data. Adler &amp; Rochefort is a trading name of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3.</p>
    <p class="lp-smallprint">No obligation to proceed. We may contact you for additional information before obtaining terms, and insurer acceptance and pricing remain subject to underwriting.</p>
    <div class="lp-form-trust"><span>Registered with Portugal's ASF</span><span>English-speaking team</span><span>A straight answer on what we can arrange</span><span>We reply within a few working days</span></div>
    <div class="lp-next-steps">
      <div class="lp-next-steps-title">What happens next?</div>
      <ol>
        <li>We receive your request</li>
        <li>A broker reviews the information</li>
        <li>We may contact you for anything missing</li>
        <li>We explain the available options — you decide whether to proceed</li>
      </ol>
      <p class="lp-smallprint">See the full process: <a href="/en/how-we-work/">how we work</a>.</p>
    </div>
    <p class="lp-smallprint">Already insured with us and need help with an existing claim? <a href="/en/claims-support/">Claims support</a> — this form is for new requests.</p>
    <div class="contact-form-success" id="quoteSuccess">
      <div class="contact-form-success-icon">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3>Thank you</h3>
      <p>Your request has been received. We will come back to you with a written answer.</p>
${successCrossSell(page)}
    </div>
  </div>
</section>`;

// --- structured data ---------------------------------------------------------
// PROVIDER (the real, verified regulatory identity: Ownizo/ASF/Lagos) now
// lives in ./lib/spain-chrome.mjs, alongside FOOTER and WHATSAPP_SVG — see
// that file's header for why. No Spanish address, phone or registration
// number is invented — see the compliance note in spain-cluster.data.mjs.

const serviceLd = (page) =>
  json({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: plain(page.service.name),
    serviceType: plain(page.service.type),
    description: plain(page.service.description),
    areaServed: { '@type': 'Country', name: 'Spain' },
    availableLanguage: ['en'],
    provider: PROVIDER,
    offers: {
      '@type': 'Offer',
      description: 'Free written insurance review',
      price: '0',
      priceCurrency: 'EUR',
    },
  });

const faqLd = (page) =>
  json({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: plain(f.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  });

const breadcrumbLd = (page) => {
  const chain = ancestorsOf(page);
  return json({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      ...chain.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: plain(c.label),
        item: `${ORIGIN}${c.href}`,
      })),
      { '@type': 'ListItem', position: chain.length + 2, name: plain(page.crumb), item: `${ORIGIN}/en/${page.slug}/` },
    ],
  });
};

// --- the page ----------------------------------------------------------------

function render(page) {
  const url = `${ORIGIN}/en/${page.slug}/`;
  const chain = ancestorsOf(page);
  const crumbTrail = [
    '<a href="/en/">Home</a>',
    ...chain.map((c) => `<a href="${esc(c.href)}">${esc(c.label)}</a>`),
    esc(page.crumb),
  ].join('<span>/</span>');

  return `<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#1C2B3A">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="keywords" content="${esc(page.keywords)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Adler &amp; Rochefort">
<meta name="geo.region" content="ES">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Adler &amp; Rochefort">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${OG_IMAGE}">

<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

<script type="application/ld+json">
${serviceLd(page)}
</script>
<script type="application/ld+json">
${faqLd(page)}
</script>
<script type="application/ld+json">
${breadcrumbLd(page)}
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y31W0QJ9WH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y31W0QJ9WH');
  gtag('config', 'AW-18361722533');
</script>

<link rel="stylesheet" href="/css/ar-property.css">
<link rel="stylesheet" href="/css/ar-chrome.css">
<link rel="stylesheet" href="/css/ar-landing.css">
<style>
  /* Market-context indicator, replacing the PT|EN|NL|FR|DE language switcher
     on Spain pages — this is a country, not a language, so it does not belong
     in that control. See build-spain-cluster.mjs for the rationale. */
  .market-switch { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .market-switch .market-current { font-weight: 700; letter-spacing: .02em; }
  .market-switch a { white-space: nowrap; }
</style>
</head>
<body data-market="spain" data-page-type="${page.slug === HUB_SLUG ? 'market_hub' : 'commercial_product'}"${page.slug === HUB_SLUG ? '' : ` data-product="${page.slug.replace(/-spain$/, '').replace(/-/g, '_')}"`}>
${nav(page)}

<main class="lp-main">

<div class="lp-crumb">${crumbTrail}</div>

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-hero-inner">
    <div class="lp-eyebrow">${esc(page.eyebrow)}</div>
    <h1>${esc(page.h1)}</h1>
    <p class="lp-hero-sub">${page.heroSub}</p>
    <div class="lp-hero-ctas">
      <a href="#quote-form" class="btn-primary">${esc(page.heroCta)}</a>
      <a href="https://wa.me/351928226570?text=${encodeURIComponent(page.whatsapp)}" target="_blank" rel="noopener" class="lp-btn-wa">${WHATSAPP_SVG}WhatsApp</a>
    </div>
    <div class="lp-trust">
      ${page.heroTrust}
    </div>
  </div>
</section>

<div class="ar-langpolicy-band">
  <aside class="ar-langpolicy" aria-labelledby="ar-language-policy">
    <h2 id="ar-language-policy">We work in English</h2>
    <p>Our working language is English &mdash; the questions, the explanation of what a policy covers, and the correspondence. Where a Spanish insurer's policy wording is issued in Spanish, we make sure you understand what it says before you rely on it. All communication is in writing.</p>
  </aside>
</div>

<section class="lp-sections">
  <div class="lp-sections-inner">
${page.sections.map(card).join('\n\n')}
  </div>
</section>
${crossSellSection(page)}
${formSection(page)}

<!-- FAQ -->
<section class="lp-faq-section" id="faq">
  <div class="lp-faq-inner">
    <h2 class="lp-faq-title">Frequently asked questions</h2>
${page.faq
  .map(
    (f) => `    <div class="lp-faq-item">
      <h3>${esc(f.q)}</h3>
      <p>${f.a}</p>
    </div>`
  )
  .join('\n')}
  </div>
</section>

<!-- RELATED -->
<section class="lp-sections">
  <div class="lp-sections-inner">
${page.related.map(card).join('\n\n')}
  </div>
</section>

<!-- REGULATORY DISCLAIMER -->
<section class="lp-disclaimer">
  <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with Portugal's ASF under no. 425591790/3, operating in Spain on a cross-border basis from that registration. This page is general guidance, not a statement of what any specific policy covers, and not legal, tax or immigration advice. What can actually be arranged depends on the property, the situation and the insurer, and we confirm that honestly rather than assume it.</p>
</section>

</main>
${FOOTER}

<script>
  function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
  }
</script>
<script defer src="/js/ar-quote-form.js"></script>
<script defer src="/js/ar-quote-cta.js"></script>
<script defer src="/js/ar-conversion-events.js"></script>
<script defer src="/js/ar-analytics-tracker.js"></script>
<script defer src="/js/lang-pref.js"></script>
<script defer src="/js/insurance-chat-widget.js" data-lang="en" data-market="spain" data-topics="${esc(page.chatTopics.join(','))}"></script>
<!-- COOKIE CONSENT BANNER -->
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
<a class="lp-sticky-cta" href="#quote-form">${esc(page.stickyCta)}</a>
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

const anchorExists = (path, hash) => {
  const file = join(PUBLIC, path, 'index.html');
  if (!existsSync(file)) return true;
  return readFileSync(file, 'utf8').includes(`id="${hash}"`);
};

function validate(page, html, pending) {
  const errs = [];

  if (!/<h1>[^<]+<\/h1>/.test(html)) errs.push('no H1');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errs.push('expected exactly one H1');
  if (!html.includes(`<link rel="canonical" href="${ORIGIN}/en/${page.slug}/">`)) errs.push('canonical missing or wrong');
  if (/name="robots"[^>]*noindex/i.test(html)) errs.push('page is noindex');

  for (const m of html.matchAll(/<script type="application\/ld\+json">\n([\s\S]*?)\n<\/script>/g)) {
    try {
      const parsed = JSON.parse(m[1]);
      if (/<[a-z/]/i.test(JSON.stringify(parsed))) errs.push('JSON-LD contains raw HTML');
    } catch (e) {
      errs.push(`JSON-LD does not parse: ${e.message}`);
    }
  }

  const faqLdText = JSON.parse(
    [...html.matchAll(/<script type="application\/ld\+json">\n([\s\S]*?)\n<\/script>/g)]
      .map((m) => m[1])
      .find((t) => t.includes('"FAQPage"'))
  );
  for (const f of page.faq) {
    if (!faqLdText.mainEntity.some((q) => q.name === plain(f.q))) errs.push(`FAQ not in schema: ${f.q}`);
    if (!html.includes(`<h3>${esc(f.q)}</h3>`)) errs.push(`FAQ schema question not visible: ${f.q}`);
  }

  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) {
    const href = m[1];
    const [path, hash] = href.split('#');
    if (!resolves(path, pending)) errs.push(`broken internal link: ${href}`);
    else if (hash && path && !anchorExists(path, hash)) errs.push(`missing anchor: ${href}`);
    else if (hash && !path && !html.includes(`id="${hash}"`)) errs.push(`missing on-page anchor: ${href}`);
  }

  // Compliance gate specific to Spain: no Portuguese regulatory citation, no
  // fabricated Spanish licence, and no PT product URL that has nothing to do
  // with a Spain page should appear in the body copy of these three pages.
  const forbidden = ['Decreto-Lei', 'DGSFP', 'IMT', 'bónus-malus', 'Cartão de Cidadão'];
  for (const term of forbidden) {
    if (html.includes(term)) errs.push(`forbidden term leaked onto a Spain page: ${term}`);
  }

  if (errs.length) throw new Error(`/en/${page.slug}/ failed validation:\n  - ${errs.join('\n  - ')}`);
}

// --- write -------------------------------------------------------------------

const pending = new Set(PAGES.map((p) => `/en/${p.slug}/`));
const seenTitle = new Map();
const seenH1 = new Map();
const rendered = [];

for (const page of PAGES) {
  for (const [map, value, what] of [
    [seenTitle, page.title, 'title'],
    [seenH1, page.h1, 'H1'],
  ]) {
    if (map.has(value)) throw new Error(`duplicate ${what} on /en/${page.slug}/ and /en/${map.get(value)}/`);
    map.set(value, page.slug);
  }
  const html = render(page);
  validate(page, html, pending);
  rendered.push([page, html]);
}

for (const [page, html] of rendered) {
  const dir = join(PUBLIC, 'en', page.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html);
  console.log(`wrote /en/${page.slug}/  (${page.title.length} char title, ${page.faq.length} FAQs)`);
}
console.log(
  `\n${PAGES.length} page(s) written. Next:\n` +
    `  node scripts/generate-sitemap.mjs\n` +
    `(hreflang.mjs and lang-switcher.mjs are deliberately not run for this cluster — see the file header.)`
);
