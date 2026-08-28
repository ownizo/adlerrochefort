#!/usr/bin/env node
/**
 * Builds /en/insurance-review/ — the international multi-product review
 * entry point (Phase 5: conversion).
 *
 * This is deliberately NOT another commercial pillar competing for "insurance
 * Portugal" / "insurance Spain" / "health insurance Spain" — those keywords
 * stay owned by their existing pages (brief §14/§36). This page exists for
 * two situations: a visitor who already knows they need several products, or
 * one who does not know which product page to start from.
 *
 * The country choice reuses the exact same, already-tested mechanism as the
 * homepage's `insurance_type` branch-select and every Spain quote form's own
 * fields: a `select[data-branch-select]` whose value gates matching
 * `[data-branch]` groups, wired by the existing public/js/lead-branch-fields.js
 * — no new client-side framework, per the brief's own performance constraint
 * (§37). The select's own name IS the payload's `country` field, so the value
 * a visitor picks is never inferred and never duplicated into a second field.
 *
 * Country is asked first and is required; nothing about a visitor's market is
 * guessed from language, IP or browser locale (brief §10/§32).
 *
 * Run, in this order:
 *
 *   node scripts/build-insurance-review.mjs
 *   node scripts/generate-sitemap.mjs
 *
 * Not run: hreflang.mjs (this page has no translated counterpart) and
 * lang-switcher.mjs (this page's nav is deliberately country-neutral, not the
 * PT|EN|NL|FR|DE language switcher — see `nav` below).
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FOOTER, WHATSAPP_SVG, PROVIDER } from './lib/spain-chrome.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';
const OG_IMAGE = `${ORIGIN}/images/og-image-adlerrochefort.png`;
const SLUG = 'insurance-review';
const URL = `${ORIGIN}/en/${SLUG}/`;

const esc = (s) =>
  String(s)
    .replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const json = (obj) => JSON.stringify(obj, null, 2);

// --- market-specific content --------------------------------------------
// Real, existing destinations only — every href below was checked against
// the filesystem before being written in. Portugal's list mirrors exactly
// the "Moving to Portugal" mega-menu built in Phase 5 (public/en/index.html)
// rather than the homepage's broader business-insurance list, because this
// page is for expats/international residents, the same audience that menu
// serves. Spain's list mirrors SPAIN_PRODUCTS in spain-cluster.data.mjs.

const NEEDS = {
  Portugal: [
    'Health Insurance',
    'Home Insurance',
    'Car Insurance',
    'Landlord Insurance',
    'Life & Mortgage Protection',
    'Condominium Insurance',
    'Relocation & Visa Insurance',
  ],
  Spain: [
    'Health Insurance',
    'Home Insurance',
    'Car Insurance',
    'Life Insurance',
    'Landlord Insurance',
    'Mortgage Protection',
    'Private Client Review',
  ],
};

const SITUATIONS = [
  'Already living there',
  'Moving there',
  'Buying property',
  'Owning a second home',
  'Renting out property',
  'Other',
];

const needsFieldset = (market) => `        <fieldset class="contact-form-crosssell">
          <legend>What would you like help with?</legend>
          <div class="contact-form-checkbox-grid">
${NEEDS[market].map((n) => `            <label class="contact-form-checkbox"><input type="checkbox" name="insurance_needs" value="${esc(n)}" disabled> ${esc(n)}</label>`).join('\n')}
            <label class="contact-form-checkbox"><input type="checkbox" name="insurance_needs" value="Not sure" disabled> Not sure</label>
          </div>
        </fieldset>
        <fieldset class="contact-form-crosssell">
          <legend>Your situation (optional)</legend>
          <div class="contact-form-checkbox-grid">
${SITUATIONS.map((s, i) => `            <label class="contact-form-checkbox"><input type="radio" name="situation" value="${esc(s)}" disabled> ${esc(s)}</label>`).join('\n')}
          </div>
        </fieldset>`;

// --- nav / hero -----------------------------------------------------------
// Deliberately country-neutral: not the PT|EN|NL|FR|DE language switcher (the
// visitor has not chosen a market yet, so there is nothing for it to reflect
// here), and not either country-committed nav from the Spain cluster or the
// homepage's Portugal-first header. Reuses the shared .site-nav/.mobile-nav
// markup and CSS (ar-chrome.css) so it renders identically to every other
// page; only the link set differs.

const nav = `
<!-- NAV -->
<div class="asf-top-bar">Adler &amp; Rochefort is registered with Portugal's ASF, no. 425591790/3, and serves Spain on a cross-border basis — <a href="#review-form">Start your review</a></div>
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-links-left">
    <a href="/en/expat-insurance-portugal/">🇵🇹 Insurance in Portugal</a>
    <a href="/en/expat-insurance-spain/">🇪🇸 Insurance in Spain</a>
    <a href="#faq">FAQ</a>
  </div>
  <a href="/en/" class="nav-logo">
    <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" decoding="async" width="1000" height="354" loading="eager" onerror="this.remove();this.parentNode.classList.add('logo-fallback')">
    <span class="nav-logo-mark" aria-hidden="true">A&amp;R</span>
  </a>
  <div class="nav-links-right">
    <a href="#review-form" class="nav-cta">Start Your Review</a>
  </div>
  <button class="nav-burger" onclick="toggleMenu()" aria-label="Menu" aria-controls="mobileNav" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <a href="/en/expat-insurance-portugal/" onclick="toggleMenu()">🇵🇹 Insurance in Portugal</a>
  <a href="/en/expat-insurance-spain/" onclick="toggleMenu()">🇪🇸 Insurance in Spain</a>
  <a href="#faq" onclick="toggleMenu()">FAQ</a>
  <a href="#review-form" onclick="toggleMenu()">Start Your Review</a>
</div>`;

const FAQ = [
  {
    q: 'Is this different from a product page’s own form?',
    a: 'Yes. Each product page (health, home, car and so on) has its own quote form for when you already know what you need. This page is for when you need more than one, or are not yet sure which product page to start from — one form, one broker, instead of several separate submissions.',
  },
  {
    q: 'Do I need to fill in a separate form for each type of insurance?',
    a: 'No. Tick everything you would like help with in the checklist below and submit once — that single request covers all of it.',
  },
  {
    q: 'Do you treat Portugal and Spain the same way?',
    a: 'We are honest about the difference. Portugal is our home market, with several years of insurer relationships in place. Spain is newer for us — we tell you plainly what can currently be arranged rather than assume parity between the two.',
  },
];

function render() {
  const faqLd = json({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q.replace(/\\u2019/g, '’'),
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\\u2019/g, '’').replace(/\\u2014/g, '—') },
    })),
  });
  const serviceLd = json({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Multi-product insurance review for international clients',
    serviceType: 'Insurance intermediation — client qualification and referral',
    description:
      'A single review for international clients in Portugal or Spain who need help with more than one type of insurance, or are not sure which product to start from.',
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Spain' },
    ],
    availableLanguage: ['en'],
    provider: PROVIDER,
    offers: { '@type': 'Offer', description: 'Free written insurance review', price: '0', priceCurrency: 'EUR' },
  });
  const breadcrumbLd = json({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/en/` },
      { '@type': 'ListItem', position: 2, name: 'Insurance Review', item: URL },
    ],
  });

  return `<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#1C2B3A">
<title>Insurance Review for International Clients | Adler &amp; Rochefort</title>
<meta name="description" content="Need help with more than one type of insurance in Portugal or Spain, or not sure where to start? Tell us once, in English, and we will come back with a clear written answer.">
<meta name="keywords" content="insurance review, international insurance broker, insurance for expats, multiple insurance products">
<link rel="canonical" href="${URL}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Adler &amp; Rochefort">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="${URL}">
<meta property="og:title" content="Insurance Review for International Clients | Adler &amp; Rochefort">
<meta property="og:description" content="One review, one broker, for clients who need more than one type of insurance in Portugal or Spain.">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Adler &amp; Rochefort">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Insurance Review for International Clients | Adler &amp; Rochefort">
<meta name="twitter:description" content="One review, one broker, for clients who need more than one type of insurance in Portugal or Spain.">
<meta name="twitter:image" content="${OG_IMAGE}">

<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

<script type="application/ld+json">
${serviceLd}
</script>
<script type="application/ld+json">
${faqLd}
</script>
<script type="application/ld+json">
${breadcrumbLd}
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
  /* Country-choice cards: the one piece of UI unique to this page. Reuses the
     existing form-field visual language (labels, borders, focus colour)
     rather than inventing a second style for the same idea. */
  .market-choice { margin: 4px 0 18px; }
  .market-choice-hint { font-size: 13px; color: var(--muted); margin: 6px 0 0; }
</style>
</head>
<body data-page-type="conversion_utility">
${nav}

<main class="lp-main">

<div class="lp-crumb"><a href="/en/">Home</a><span>/</span>Insurance Review</div>

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-hero-inner">
    <div class="lp-eyebrow">For Portugal and Spain</div>
    <h1>Insurance Review for International Clients</h1>
    <p class="lp-hero-sub">Need help with more than one type of insurance — or not sure which page to start from? Tell us once, in English, and one broker will come back with a clear written answer on what applies to you.</p>
    <div class="lp-hero-ctas">
      <a href="#review-form" class="btn-primary">Request a Review</a>
      <a href="https://wa.me/351928226570?text=${encodeURIComponent('Hello, I would like an insurance review — I need help with more than one type of cover.')}" target="_blank" rel="noopener" class="lp-btn-wa">${WHATSAPP_SVG}WhatsApp</a>
    </div>
    <div class="lp-trust">
      <strong>English throughout</strong> · Registered with Portugal’s ASF (no. 425591790/3) · One submission, one broker
    </div>
  </div>
</section>

<section class="lp-sections">
  <div class="lp-sections-inner">
    <div class="lp-card">
      <h2>Already know exactly what you need?</h2>
      <p>Each product has its own dedicated page and quote form — go straight there instead: <a href="/en/expat-insurance-portugal/">insurance in Portugal</a> or <a href="/en/expat-insurance-spain/">insurance in Spain</a>. Come back here if that turns out to be more than one thing.</p>
    </div>
    <div class="lp-card">
      <h2>Who you are dealing with</h2>
      <p>Adler &amp; Rochefort is the trading name of Ownizo, Unipessoal Lda., an insurance intermediary registered with Portugal's ASF under no. 425591790/3 — a public registration you can check independently. See <a href="/en/about/">who we are</a>, <a href="/en/how-we-work/">how a review actually works</a>, or <a href="/en/why-use-an-insurance-broker/">why use a broker</a> before you send anything.</p>
    </div>
  </div>
</section>

<!-- REVIEW FORM -->
<section class="lp-form-section" id="review-form">
  <div class="lp-form-card">
    <h2>Start your insurance review</h2>
    <p class="lp-form-sub">First, where do you need insurance? The questions below change to match.</p>
    <form class="contact-form" id="reviewForm" method="POST" name="international-insurance-review" data-netlify="true" netlify-honeypot="bot-field" data-quote-form data-ga-field="country">
      <input type="hidden" name="form-name" value="international-insurance-review">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="landing_page" value="">
      <input type="hidden" name="source" value="landing:${SLUG}">
      <input type="hidden" name="ramo" id="reviewRamo" value="">
      <input type="hidden" name="entry_situation" id="reviewSituation" value="">
      <p class="contact-form-honeypot" style="display:none" aria-hidden="true"><label>Don't fill this in: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>

      <div class="contact-form-field market-choice">
        <label for="q-country">Where do you need insurance? *</label>
        <select id="q-country" name="country" data-branch-select required>
          <option value="">Select one</option>
          <option value="Portugal">Portugal</option>
          <option value="Spain">Spain</option>
        </select>
        <p class="market-choice-hint">We ask this first because the products, and what we can currently arrange, genuinely differ between the two markets.</p>
      </div>

      <div class="lp-form-row">
        <div class="contact-form-field">
          <label for="q-name">Full name *</label>
          <input type="text" id="q-name" name="name" placeholder="Jane Smith" autocomplete="name" required>
        </div>
        <div class="contact-form-field">
          <label for="q-email">Email *</label>
          <input type="email" id="q-email" name="email" placeholder="you@example.com" autocomplete="email" required>
        </div>
      </div>
      <div class="lp-form-row">
        <div class="contact-form-field">
          <label for="q-phone">Phone / WhatsApp *</label>
          <input type="tel" id="q-phone" name="phone" placeholder="+44 000 000 000" autocomplete="tel" inputmode="tel" required>
        </div>
        <div class="contact-form-field">
          <label for="q-preferred_contact">Preferred contact method</label>
          <select id="q-preferred_contact" name="preferred_contact">
            <option value="">Select one</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div data-branch="Portugal" hidden>
${needsFieldset('Portugal')}
      </div>
      <div data-branch="Spain" hidden>
${needsFieldset('Spain')}
      </div>

      <div class="contact-form-field">
        <label for="q-notes">Anything else we should know?</label>
        <textarea id="q-notes" name="notes" placeholder="Short notes — we do not need medical details here; that stays with the insurer as part of underwriting."></textarea>
      </div>

      <button type="submit" class="contact-form-submit">Request My Review &rarr;</button>
    </form>
    <p class="lp-smallprint">By sending this form you agree to us using your details to prepare and discuss your review, in line with our <a href="/en/privacy-policy/">privacy policy</a>. We never sell your data. Adler &amp; Rochefort is a trading name of Ownizo, Unipessoal Lda., registered with the ASF under no. 425591790/3.</p>
    <p class="lp-smallprint">No obligation to proceed. We may contact you for additional information before obtaining terms, and insurer acceptance and pricing remain subject to underwriting.</p>
    <div class="lp-form-trust"><span>Registered with Portugal's ASF</span><span>English-speaking team</span><span>One submission, one broker</span><span>We reply within a few working days</span></div>
    <div class="lp-next-steps">
      <div class="lp-next-steps-title">What happens next?</div>
      <ol>
        <li>We receive your request</li>
        <li>A broker reviews the information</li>
        <li>We may contact you for anything missing</li>
        <li>We explain the available options — you decide whether to proceed</li>
      </ol>
    </div>
    <p class="lp-smallprint">Already insured with us and need help with an existing claim? <a href="/en/claims-support/">Claims support</a> — this form is for new requests.</p>
    <div class="contact-form-success" id="quoteSuccess">
      <div class="contact-form-success-icon">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3>Thank you</h3>
      <p>Your request has been received. An Adler &amp; Rochefort broker will review everything you have told us and come back to you with a written answer.</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="lp-faq-section" id="faq">
  <div class="lp-faq-inner">
    <h2 class="lp-faq-title">Frequently asked questions</h2>
${FAQ.map(
  (f) => `    <div class="lp-faq-item">
      <h3>${esc(f.q)}</h3>
      <p>${f.a}</p>
    </div>`
).join('\n')}
  </div>
</section>

<!-- REGULATORY DISCLAIMER -->
<section class="lp-disclaimer">
  <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with Portugal's ASF under no. 425591790/3, operating in Spain on a cross-border basis from that registration. This page is a conversion utility for reaching the right product, not a statement of what any specific policy covers, and not legal, tax or immigration advice.</p>
</section>

</main>
${FOOTER}

<script>
  function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
  }
</script>
<script defer src="/js/ar-quote-form.js"></script>
<script defer src="/js/lead-branch-fields.js"></script>
<script defer src="/js/ar-conversion-events.js"></script>
<script defer src="/js/ar-analytics-tracker.js"></script>
<script defer src="/js/lang-pref.js"></script>
<script defer src="/js/insurance-chat-widget.js" data-lang="en" data-topics="spain_general,spain_health"></script>
<!-- Country to lead-branch tag. The visible country select already carries
     the payload's real "country" value (Portugal/Spain); this only mirrors
     that choice into the hidden "ramo" field so the notification email's
     subject reads "PT · Multi-product" / "ES · Multi-product" (brief §13),
     the same [LEAD branch] convention every other form already uses.
     Stamped inline, matching the one other page on the site that stamps a
     field this way (the Portuguese motor landing's source_url) rather than
     adding a new shared script for a single field on a single page. -->
<script>
  (function () {
    var select = document.getElementById('q-country');
    var ramo = document.getElementById('reviewRamo');
    if (!select || !ramo) return;

    // Optional preselect (brief §20/§21): a link into this page can carry
    // ?market=Spain or ?market=Portugal so a visitor who already told us
    // their market on the page they came from does not have to say it
    // again. This script runs before the deferred /js/lead-branch-fields.js
    // does (it is not itself deferred, and appears later in the document
    // than that script tag) — setting select.value here is picked up by
    // that script's own initial apply() call once it runs, so no manual
    // change-event dispatch is needed to reveal the right needs checklist.
    // entry_situation (brief §31/§32): carries which situational page a
    // visitor arrived from — e.g. ?situation=buying_property from the Spain
    // "buying a property" card, or the Portugal "buying property" article's
    // review CTA — as plain context on the lead, not a visible form field.
    // A short fixed vocabulary rather than free text, so the lead email and
    // any reporting built on it can rely on a known set of values.
    var situation = document.getElementById('reviewSituation');

    try {
      var params = new URLSearchParams(window.location.search);
      var market = params.get('market');
      if (market === 'Portugal' || market === 'Spain') select.value = market;
      var sit = params.get('situation');
      if (situation && sit) situation.value = sit;
    } catch (err) {}

    function sync() {
      var v = select.value;
      ramo.value = v === 'Spain' ? 'ES · Multi-product' : v === 'Portugal' ? 'PT · Multi-product' : '';
    }
    select.addEventListener('change', sync);
    sync();
  })();
</script>
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
</body>
</html>
`;
}

// --- validate + write -------------------------------------------------------
// Lighter than the cluster generator's validate(): this is a single page with
// no siblings to cross-check H1/title uniqueness against, so this only
// confirms what could actually break — H1 present, canonical correct, every
// JSON-LD block parses, and every internal link resolves to a file already on
// disk (this script is run after build-spain-cluster.mjs's own targets exist,
// and after any Portugal page it might reference).

function validate(html) {
  const errs = [];
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errs.push('expected exactly one H1');
  if (!html.includes(`<link rel="canonical" href="${URL}">`)) errs.push('canonical missing or wrong');
  for (const m of html.matchAll(/<script type="application\/ld\+json">\n([\s\S]*?)\n<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      errs.push(`JSON-LD does not parse: ${e.message}`);
    }
  }
  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) {
    const [path, hash] = m[1].split('#');
    const clean = path.replace(/[?#].*$/, '');
    if (clean && clean !== `/en/${SLUG}/` && !existsSync(join(PUBLIC, clean, 'index.html')) && !existsSync(join(PUBLIC, clean))) {
      errs.push(`broken internal link: ${m[1]}`);
    }
    if (hash && !path && !html.includes(`id="${hash}"`)) errs.push(`missing on-page anchor: ${m[1]}`);
  }
  if (errs.length) throw new Error(`/en/${SLUG}/ failed validation:\n  - ${errs.join('\n  - ')}`);
}

const html = render();
validate(html);
const dir = join(PUBLIC, 'en', SLUG);
await mkdir(dir, { recursive: true });
await writeFile(join(dir, 'index.html'), html);
console.log(`wrote /en/${SLUG}/  (${html.length} bytes)\n\nNext: node scripts/generate-sitemap.mjs`);
