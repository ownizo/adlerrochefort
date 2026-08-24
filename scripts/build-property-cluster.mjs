#!/usr/bin/env node
/**
 * Builds the Home & Property commercial cluster under /en/.
 *
 * The cluster's pillar is the hand-written /en/home-insurance-quote/. Every
 * page written here is a sibling of it: same chrome, same design system, same
 * Netlify form plumbing, a different search intent each. They are generated
 * rather than hand-written because nine pages that differ only in their copy
 * drift apart the moment one of them is edited — a stale ASF number in the
 * small print, a form that lost its honeypot, a footer link that was fixed on
 * eight pages and not the ninth.
 *
 * The design system itself is /css/ar-property.css, which is the pillar's own
 * inline <style> lifted into a file. The pillar keeps its inline copy: nothing
 * here edits it.
 *
 * Content lives in property-cluster.data.mjs. Run:
 *
 *   node scripts/build-property-cluster.mjs
 *
 * then regenerate the sitemap:
 *
 *   node scripts/generate-sitemap.mjs
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, PILLAR } from './property-cluster.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';
const OG_IMAGE = `${ORIGIN}/images/og-image-adlerrochefort.png`;

/** Escapes for an HTML text node or a double-quoted attribute. */
const esc = (s) =>
  String(s)
    .replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Strips markup and resolves the handful of entities used in the copy, so a
 * sentence written once for the page can be reused verbatim inside JSON-LD.
 * JSON-LD is not HTML: an unresolved `&mdash;` there is literal text.
 */
const ENTITIES = {
  mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  euro: '€', nbsp: ' ', middot: '·', hellip: '…', deg: '°', copy: '©',
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

// --- chrome ------------------------------------------------------------------

const nav = (page) => `
<!-- NAV -->
<div class="asf-top-bar">ASF-registered insurance broker n.º 425591790/3 — <a href="#quote-form">${esc(page.topBarCta)}</a></div>
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-links-left">
    <a href="/en/#services">Services</a>
    <a href="/en/#why-us">Why us</a>
    <a href="/en/home-insurance-quote/">Home insurance</a>
  </div>
  <a href="/en/" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager" onerror="this.remove();this.parentNode.classList.add('logo-fallback')">
    <span class="nav-logo-mark" aria-hidden="true">A&amp;R</span>
  </a>
  <div class="nav-links-right">
    <a href="/en/#adler-one">Individuals</a>
    <a href="/en/#blog">Insights</a>
    <a href="#quote-form" class="nav-cta">Free Quote</a>
    <div class="lang-switcher">
      <a href="/seguros/habitacao/" lang="pt-PT">PT</a>
      <span class="lang-switcher-sep">|</span>
      <a href="/en/${page.slug}/" class="active">EN</a>
      <span class="lang-switcher-sep">|</span>
      <a href="/nl/" class="lang-unavailable" lang="nl">NL</a>
      <span class="lang-switcher-sep">|</span>
      <a href="/fr/" class="lang-unavailable" lang="fr">FR</a>
      <span class="lang-switcher-sep">|</span>
      <a href="/de/" class="lang-unavailable" lang="de">DE</a>
    </div>
  </div>
  <button class="nav-burger" onclick="toggleMenu()" aria-label="Menu" aria-controls="mobileNav" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <a href="/en/#services" onclick="toggleMenu()">Services</a>
  <a href="/en/home-insurance-quote/" onclick="toggleMenu()">Home insurance</a>
  <a href="/en/#adler-one" onclick="toggleMenu()">Individuals</a>
  <a href="/en/#blog" onclick="toggleMenu()">Insights</a>
  <a href="#quote-form" onclick="toggleMenu()">Free Quote</a>
  <div class="mobile-lang-switcher">
    <a href="/seguros/habitacao/" lang="pt-PT">PT</a>
    <a href="/en/${page.slug}/" class="active">EN</a>
    <a href="/nl/" class="lang-unavailable" lang="nl">NL</a>
    <a href="/fr/" class="lang-unavailable" lang="fr">FR</a>
    <a href="/de/" class="lang-unavailable" lang="de">DE</a>
  </div>
</div>`;

const FOOTER = `
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Adler <em>&amp;</em> Rochefort</div>
      <p class="footer-brand-desc">English-speaking, ASF-registered insurance broker in the Algarve. We compare the market for international residents in Portugal &mdash; home, health, car and condominium cover.</p>
    </div>
    <div>
      <div class="footer-col-title">Home &amp; Property</div>
      <ul class="footer-col-links">
        <li><a href="/en/home-insurance-quote/">Home Insurance</a></li>
        <li><a href="/en/second-home-insurance-portugal/">Second Home Insurance</a></li>
        <li><a href="/en/apartment-insurance-portugal/">Apartment Insurance</a></li>
        <li><a href="/en/unoccupied-home-insurance-portugal/">Unoccupied Property</a></li>
        <li><a href="/en/landlord-insurance-portugal/">Landlord Insurance</a></li>
        <li><a href="/en/rental-property-insurance-portugal/">Rental Property Insurance</a></li>
        <li><a href="/en/condominium-insurance-algarve/">Condominium Insurance</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Services</div>
      <ul class="footer-col-links">
        <li><a href="/en/health-insurance-quote/">Health Insurance</a></li>
        <li><a href="/en/international-health-insurance-portugal/">International Health Insurance</a></li>
        <li><a href="/en/car-insurance-portugal/">Car Insurance</a></li>
        <li><a href="/en/private-clients/">Collections &amp; Valuables</a></li>
        <li><a href="/en/fiscal-representation-portugal/">Fiscal Representation</a></li>
        <li><a href="/en/relocation-services/">Relocation Services</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a></li>
        <li><a href="https://wa.me/351928226570" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        <li><a href="tel:+351928226570">+351 928 226 570</a></li>
        <li>Varandas de S&atilde;o Jo&atilde;o 4, 8600-324 Lagos</li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Languages</div>
      <ul class="footer-col-links footer-langs">
        <li><a href="/" lang="pt-PT">PT</a></li>
        <li><a href="/en/" aria-current="page">EN</a></li>
        <li><a href="/nl/" lang="nl">NL</a></li>
        <li><a href="/fr/" lang="fr">FR</a></li>
        <li><a href="/de/" lang="de">DE</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Adler &amp; Rochefort &middot; All rights reserved</div>
    <div class="footer-legal">
      <a href="/en/privacy-policy/">Privacy Policy</a>
      <a href="/en/terms-and-conditions/">Terms &amp; Conditions</a>
      <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">Complaints Book</a>
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">ASF Reporting Channel</a>
    </div>
  </div>
  <div class="footer-regulatory">
    <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda.</p>
    <p>Ownizo, Unipessoal Lda. is registered with the Portuguese Insurance and Pension Funds Supervisory Authority (ASF) under no. 425591790/3.</p>
  </div>
</footer>`;

const WHATSAPP_SVG =
  '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

// --- body blocks -------------------------------------------------------------

/** Renders one content block. Each `kind` maps to markup already in the pillar. */
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
${b.items.map((i) => `        <li><strong>${esc(i.title)}</strong>${i.body}</li>`).join('\n')}
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
${b.items.map((i) => `        <li><strong>${esc(i.title)}</strong> ${i.body}</li>`).join('\n')}
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

/** Pairs of fields become a two-column row; a lone field spans the width. */
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

const formSection = (page) => `
<!-- QUOTE FORM -->
<section class="lp-form-section" id="quote-form">
  <div class="lp-form-card">
    <h2>${esc(page.form.heading)}</h2>
    <p class="lp-form-sub">${page.form.sub}</p>
    <form class="contact-form" id="quoteForm" method="POST" name="${esc(page.form.name)}" data-netlify="true" netlify-honeypot="bot-field" data-quote-form data-ga-field="${esc(page.form.gaField)}">
      <input type="hidden" name="form-name" value="${esc(page.form.name)}">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="source" value="landing:${esc(page.slug)}">
      <p class="contact-form-honeypot" style="display:none" aria-hidden="true"><label>Don't fill this in: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
${fieldRows(page.form.fields)}
      <button type="submit" class="contact-form-submit">${esc(page.form.submit)} &rarr;</button>
    </form>
    <p class="lp-smallprint">By sending this form you agree to us using your details to prepare and discuss your quote, in line with our <a href="/en/privacy-policy/">privacy policy</a>. We never sell your data. Adler &amp; Rochefort is a trading name of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3.</p>
    <div class="lp-form-trust"><span>ASF-registered insurance broker</span><span>English-speaking team</span><span>Not tied to one insurer</span><span>We handle the claim for you</span><span>We reply within 24h</span></div>
    <div class="contact-form-success" id="quoteSuccess">
      <div class="contact-form-success-icon">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3>Thank you</h3>
      <p>Your request has been received. Our team will get back to you within 24 hours.</p>
    </div>
  </div>
</section>`;

// --- structured data ---------------------------------------------------------

const PROVIDER = {
  '@type': 'InsuranceAgency',
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  identifier: 'ASF 425591790/3',
  url: `${ORIGIN}/en/`,
  email: 'insurance@adlerrochefort.com',
  telephone: '+351928226570',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Varandas de São João 4',
    postalCode: '8600-324',
    addressLocality: 'Lagos',
    addressRegion: 'Algarve',
    addressCountry: 'PT',
  },
};

const serviceLd = (page) =>
  json({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: plain(page.service.name),
    serviceType: plain(page.service.type),
    description: plain(page.service.description),
    areaServed: { '@type': 'Country', name: 'Portugal' },
    availableLanguage: ['en', 'pt'],
    provider: PROVIDER,
    offers: {
      '@type': 'Offer',
      description: 'Free written insurance comparison within 24 hours',
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

const breadcrumbLd = (page) =>
  json({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Home insurance in Portugal',
        item: `${ORIGIN}${PILLAR}`,
      },
      ...(page.parent
        ? [{ '@type': 'ListItem', position: 3, name: plain(page.parent.label), item: `${ORIGIN}${page.parent.href}` }]
        : []),
      {
        '@type': 'ListItem',
        position: page.parent ? 4 : 3,
        name: plain(page.crumb),
        item: `${ORIGIN}/en/${page.slug}/`,
      },
    ],
  });

// --- the page ----------------------------------------------------------------

function render(page) {
  const url = `${ORIGIN}/en/${page.slug}/`;
  const crumbTrail = [
    '<a href="/en/">Home</a>',
    `<a href="${PILLAR}">Home insurance</a>`,
    ...(page.parent ? [`<a href="${esc(page.parent.href)}">${esc(page.parent.label)}</a>`] : []),
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
<meta name="geo.region" content="PT">

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

<!-- ar-property.css carries the landing design system; the two files after it
     are the site chrome and must win, exactly as they do on the pillar. -->
<link rel="stylesheet" href="/css/ar-property.css">
<link rel="stylesheet" href="/css/ar-chrome.css">
<link rel="stylesheet" href="/css/ar-landing.css">
</head>
<body>
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
      <strong>ASF-registered insurance broker</strong> &middot; Zurich &middot; Allianz &middot; Hiscox &middot; Liberty Mutual
    </div>
  </div>
</section>

<div class="ar-langpolicy-band">
  <aside class="ar-langpolicy" aria-labelledby="ar-language-policy">
    <h2 id="ar-language-policy">Our working language is English</h2>
    <p>Our working language is English. Quotes, explanation of terms, correspondence and claims are all handled in English. Policies issued by Portuguese insurers are written in Portuguese by law; what we add is that you understand exactly what they say before you sign. All communication is in writing.</p>
  </aside>
</div>

<!-- TRUST BAR -->
<section class="lp-trustbar">
  <div class="lp-trustbar-inner">
${page.trustbar.map((t) => `    <div class="lp-trustbar-item">${t}</div>`).join('\n')}
  </div>
</section>

<section class="lp-sections">
  <div class="lp-sections-inner">
${page.sections.map(card).join('\n\n')}
  </div>
</section>
${formSection(page)}

<!-- FAQ -->
<section class="lp-faq-section">
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
  <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3. General guidance only; conditions, premiums, sub-limits and exclusions vary by insurer, by policy wording and by property. Nothing on this page is a statement of what any particular policy covers, and nothing on it is legal or tax advice.</p>
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
<script defer src="/js/ar-analytics-tracker.js"></script>
<script defer src="/js/lang-pref.js"></script>
<script defer src="/js/insurance-chat-widget.js" data-lang="en" data-topics="${esc(page.chatTopics.join(','))}"></script>
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

// --- write -------------------------------------------------------------------

const seenTitle = new Map();
const seenH1 = new Map();
for (const page of PAGES) {
  for (const [map, value, what] of [
    [seenTitle, page.title, 'title'],
    [seenH1, page.h1, 'H1'],
  ]) {
    if (map.has(value)) throw new Error(`duplicate ${what} on /en/${page.slug}/ and /en/${map.get(value)}/`);
    map.set(value, page.slug);
  }
  const dir = join(PUBLIC, 'en', page.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), render(page));
  console.log(`wrote /en/${page.slug}/  (${page.title.length} char title)`);
}
console.log(`\n${PAGES.length} pages written. Next: node scripts/generate-sitemap.mjs`);
