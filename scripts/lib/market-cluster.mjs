/**
 * The renderer shared by the Polish, Swedish and Danish clusters.
 *
 * The brief was explicit that three parallel component sets must not be
 * created if the existing localisation architecture can carry the markets
 * cleanly. It can: this site's "components" are generator functions, and the
 * German cluster's generator (scripts/generate-de-cluster.mjs) was already the
 * right shape — one market homepage that IS the hub, plus its product and
 * guide pages, one stylesheet, one form. So rather than copying that file three
 * times, everything in it that is not German lives here, and everything that
 * is Polish, Swedish or Danish lives in a market descriptor:
 *
 *   scripts/pl-cluster.data.mjs  ->  scripts/pl-content/*.mjs
 *   scripts/se-cluster.data.mjs  ->  scripts/se-content/*.mjs
 *   scripts/dk-cluster.data.mjs  ->  scripts/dk-content/*.mjs
 *
 * A market descriptor is language codes, interface copy, footer, form identity
 * and eight page objects. Nothing structural. Adding a fourth market is a
 * descriptor, not a generator.
 *
 * Design is not re-invented here. Chrome classes come from the shared
 * public/css/ar-chrome.css, the language selector from public/css/ar-langsel.css,
 * and the body design system from public/css/ar-cluster.css — which is the same
 * design system the German cluster uses, not a new one.
 *
 * Entry point: scripts/generate-market-clusters.mjs.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  LANGSEL_CSS_LINK,
  LANGSEL_SCRIPT_TAG,
  footerSelectorHtml,
  langSelectorHtml,
  selectorTargets,
  LANG_BY_KEY,
} from './lang-selector.mjs';
import { marketPairs } from './market-hreflang.mjs';
import { audienceBand, insurerPanel, nextBand } from './site-sections.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';

/** The Google Ads conversion the site already fires for a lead. Reused, not
 *  duplicated: the markets are distinguished by the parameters on the
 *  generate_lead event, so the conversion total stays comparable. */
const ADS_CONVERSION = 'AW-18361722533/HxH6CKqa1uEcEKXNxrNE';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ─────────────── bidirectional text ─────────────── */

/**
 * Isolate a left-to-right run inside a right-to-left page.
 *
 * Every market except Hebrew is left-to-right, so this returns its argument
 * untouched for them and the four existing clusters regenerate byte-identical.
 * On a Hebrew page it wraps the run in <bdi>, which carries
 * `unicode-bidi: isolate` from the HTML rendering rules: the run is ordered
 * internally as left-to-right and treated as a single neutral object by the
 * text around it.
 *
 * It is used for the strings that are Latin in every language and so cannot be
 * localised away — the trading name, the mailbox, the phone number, the Lagos
 * address, the ASF registration. Those are exactly the strings that break
 * without it: "+351 928 226 570" has its digit groups reordered by the
 * algorithm because the spaces between them take the paragraph's direction,
 * and "Varandas de São João 4" loses its house number to the far side of the
 * line. Nothing is reversed by hand anywhere; the isolate marks the boundary
 * and the Unicode algorithm does the ordering, which is the only correct way
 * to do this.
 */
const iso = (market, s) => (market.dir === 'rtl' ? `<bdi>${s}</bdi>` : s);

/**
 * `dir="ltr"` for an input whose content is never Hebrew.
 *
 * Email addresses, phone numbers and URLs are typed left-to-right whatever the
 * surrounding form is. Without this, a visitor typing +972… into a
 * right-to-left input watches the caret and the digit groups jump around. The
 * label, the help text and the error message stay right-to-left — only the
 * value's own direction changes, which is what the reader expects.
 */
const ltrInput = (market) => (market.dir === 'rtl' ? ' dir="ltr"' : '');

/* ─────────────── organisation schema ─────────────── */

/**
 * The organisation node, identical to the one the rest of the site publishes.
 * Every value here is already on the site: the ASF registration number, the
 * Lagos address, the founding year, the three social profiles. Nothing was
 * added for these markets — no partnerships, no awards, no customer counts,
 * and in particular no `knowsLanguage` entry for Polish, Swedish, Danish,
 * Chinese or Hebrew, because the working language is English and claiming
 * otherwise in structured data would be the same false claim as claiming it in
 * prose. There is no Israeli branch node either: the agency has one address,
 * in Lagos, and the /il/ cluster being in Hebrew does not give it a second.
 */
const ORG_LD = {
  '@type': 'InsuranceAgency',
  '@id': `${ORIGIN}/#organization`,
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  alternateName: 'Ownizo, Unipessoal Lda.',
  telephone: '+351928226570',
  email: 'insurance@adlerrochefort.com',
  url: ORIGIN,
  logo: `${ORIGIN}/images/logo-adler-rochefort.png`,
  foundingDate: '2014',
  knowsLanguage: ['en', 'pt'],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Algarve, Portugal' },
    { '@type': 'Country', name: 'Portugal' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Varandas de São João 4',
    addressLocality: 'Lagos',
    addressRegion: 'Algarve',
    postalCode: '8600-324',
    addressCountry: 'PT',
  },
  sameAs: [
    'https://www.facebook.com/adlerrochefort',
    'https://www.instagram.com/adlerrochefort/',
    'https://www.linkedin.com/company/adler-rochefort',
  ],
  identifier: { '@type': 'PropertyValue', name: 'ASF registration', value: '425591790/3' },
};

/* ─────────────── head ─────────────── */

/**
 * hreflang. The set comes from scripts/lib/market-hreflang.mjs, the same module
 * scripts/hreflang.mjs reads, so the block written here is the block the
 * post-processor would write. Pages with no counterpart emit nothing beyond the
 * canonical, which is the rule the rest of the corpus follows.
 */
function hreflangTags(market, page) {
  const pairs = marketPairs(page.url);
  if (!pairs || !Object.keys(pairs).length) return '';
  const out = [];
  for (const [key, path] of Object.entries(pairs)) {
    out.push(`  <link rel="alternate" hreflang="${LANG_BY_KEY[key].hreflang}" href="${ORIGIN}${path}">`);
  }
  out.push(`  <link rel="alternate" hreflang="${market.hreflang}" href="${ORIGIN}${page.url}">`);
  if (page.isHub) out.push(`  <link rel="alternate" hreflang="x-default" href="${ORIGIN}/">`);
  return out.join('\n') + '\n';
}

function jsonLd(market, page) {
  const breadcrumb = page.breadcrumb?.length
    ? {
        '@type': 'BreadcrumbList',
        itemListElement: page.breadcrumb.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          item: `${ORIGIN}${c.url || page.url}`,
        })),
      }
    : null;

  // FAQPage only where the page genuinely answers questions a visitor asked —
  // every page in these clusters carries a real FAQ block, so the markup
  // describes what is on the page rather than decorating it.
  const faq = page.faq?.length
    ? {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((q) => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') },
        })),
      }
    : null;

  const webpage = {
    '@type': page.schemaType || 'WebPage',
    headline: page.h1,
    name: page.title,
    description: page.description,
    inLanguage: market.inLanguage,
    datePublished: page.published,
    dateModified: page.modified || page.published,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}${page.url}` },
    image: `${ORIGIN}/images/og-image-adlerrochefort.png`,
    publisher: { '@id': `${ORIGIN}/#organization` },
  };
  if (page.schemaType === 'Article') {
    webpage.author = {
      '@type': 'Person',
      name: 'Hugo Gonçalves',
      jobTitle: 'Agente de seguros (ASF 425591790/3)',
      worksFor: { '@id': `${ORIGIN}/#organization` },
    };
  }

  const graph = [ORG_LD, breadcrumb, faq, webpage].filter(Boolean);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

/* ─────────────── chrome ─────────────── */

/**
 * One routing helper for every instance of the selector on the page.
 *
 * The header, the mobile drawer and the footer all resolve their nine targets
 * through this function, so a language that has a counterpart for this page
 * links to it from all three and a language that does not falls back to its
 * home page in all three. Giving the footer its own routing would be a second
 * answer to the same question, and the two would eventually disagree.
 */
function langTargets(market, page) {
  return selectorTargets({
    pageLang: market.key,
    pageUrl: page.url,
    pairs: marketPairs(page.url) || {},
  });
}

function langSelector(market, page, { mobile = false, variant = '', id = '', indent = '      ' } = {}) {
  return langSelectorHtml({
    pageLang: market.key,
    targets: langTargets(market, page),
    mobile,
    variant,
    id,
    indent,
  });
}

function breadcrumbHtml(market, page) {
  const trail = page.breadcrumb;
  if (!trail || !trail.length) return '';
  const items = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<li><span aria-current="page">${c.name}</span></li>`
        : `<li><a href="${esc(c.url)}">${c.name}</a></li>`
    )
    .join('\n      ');
  return `<nav class="breadcrumb" aria-label="${esc(market.ui.breadcrumbAria)}">
    <ol>
      ${items}
    </ol>
  </nav>`;
}

/**
 * The working-language disclosure, on every page of every cluster.
 *
 * This is the block that keeps the rest of the cluster honest. The pages are
 * written in Polish, Swedish and Danish because that is the language the
 * question is asked in; the service runs in English, in writing, and a claim
 * hearing is the wrong moment to discover that. /nl/ and /de/ both carry the
 * same disclosure, so this is the site's existing convention rather than a new
 * hedge invented for these markets.
 */
function langPolicyHtml(market) {
  const paras = market.langPolicy.body.map((p) => `      <p>${p}</p>`).join('\n');
  return `<div class="lang-policy-band">
  <aside class="lang-policy" aria-labelledby="${market.ui.langPolicyId}">
    <h2 id="${market.ui.langPolicyId}">${market.langPolicy.heading}</h2>
${paras}
  </aside>
</div>`;
}

function faqHtml(market, page) {
  if (!page.faq?.length) return '';
  const items = page.faq
    .map(
      (q) => `      <div class="faq-item">
        <h3>${q.q}</h3>
        <div class="faq-answer">${q.a}</div>
      </div>`
    )
    .join('\n');
  return `<section class="section" aria-labelledby="faq-title" id="${market.ui.faqId}">
  <div class="container narrow">
    <span class="eyebrow">${market.ui.faqEyebrow}</span>
    <h2 id="faq-title">${page.faqTitle || market.ui.faqTitle}</h2>
    <div class="faq-list">
${items}
    </div>
  </div>
</section>`;
}

/* ─────────────── the quote form ─────────────── */

function branchGroupsHtml(market) {
  return market.branches
    .map((b) => {
      const fields = b.fields
        .map(
          (f) => `          <div class="field">
            <label for="f-${f.id}">${f.label}</label>
            <input type="${f.type || 'text'}" id="f-${f.id}" name="${f.id}" placeholder="${esc(f.placeholder)}" disabled>
          </div>`
        )
        .join('\n');
      return `        <div class="form-branch-fields" data-branch="${esc(b.value)}" hidden>
          <span class="form-branch-legend">${b.legend}</span>
${fields}
        </div>`;
    })
    .join('\n');
}

function selectOptions(options, selected) {
  return options
    .map(
      (o) =>
        `          <option value="${esc(o.v)}"${o.v === selected ? ' selected' : ''}>${esc(o.l)}</option>`
    )
    .join('\n');
}

/**
 * The lead form.
 *
 * Same architecture as every other form on the site — a plain Netlify Forms
 * POST with a honeypot, progressively enhanced with per-field validation and
 * AJAX — so nothing competing is introduced and existing processing is
 * untouched. What is new is attribution: `market`, `language`, `landing_page`,
 * `product_interest`, `source` and `source_url` travel with every submission,
 * which is what lets a Swedish car-insurance lead be told apart from a Danish
 * household one without a second analytics stack.
 *
 * The `insurance_type` values are market-tagged ("SE · Motor") because
 * netlify/functions/submission-created.mjs builds the notification subject from
 * that field. The visible option labels are in the visitor's language; the
 * value is the inbox's. The Spain cluster already uses this convention.
 */
function formHtml(market, page) {
  const ui = market.ui;
  const f = ui.f;
  const selected = page.formBranch;

  return `<section class="section form-section" aria-labelledby="lead-title" id="${ui.formId}">
  <div class="form-shell">
    <h2 id="lead-title">${page.formHeading || ui.formTitle}</h2>
    <p class="form-intro">${page.formIntro}</p>
    <p class="form-lang-note">${ui.formLangNote}</p>

    <form
      class="lead-form"
      id="leadForm"
      name="${market.formName}"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/${market.key}/#${ui.formId}"
      novalidate>

      <input type="hidden" name="form-name" value="${market.formName}">
      <input type="hidden" name="source" value="${esc(page.slug || market.key)}">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="landing_page" value="">
      <input type="hidden" name="subject" value="${esc(market.subjectPrefix)}${esc(page.formSubject)}">
      <input type="hidden" name="language" value="${market.languageValue}">
      <input type="hidden" name="market" value="${market.marketValue}">
      <input type="hidden" name="product_interest" value="${esc(selected || '')}">
      <p class="visually-hidden"><label>${esc(ui.honeypot)} <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>

      <div class="field">
        <label for="f-name">${f.name} <span class="req" aria-hidden="true">*</span></label>
        <input type="text" id="f-name" name="name" autocomplete="name"
               required aria-required="true" aria-describedby="err-name">
        <span class="field-error" id="err-name" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-email">${f.email} <span class="req" aria-hidden="true">*</span></label>
        <input type="email" id="f-email" name="email" autocomplete="email" inputmode="email"${ltrInput(market)}
               required aria-required="true" aria-describedby="err-email">
        <span class="field-error" id="err-email" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-phone">${f.phone} <span class="req" aria-hidden="true">*</span></label>
        <p class="field-help" id="help-phone">${f.phoneHelp}</p>
        <input type="tel" id="f-phone" name="phone" autocomplete="tel" inputmode="tel"${ltrInput(market)}
               pattern="[0-9+ ()-]{6,}"
               required aria-required="true" aria-describedby="help-phone err-phone">
        <span class="field-error" id="err-phone" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-localidade">${f.localidade}</label>
        <input type="text" id="f-localidade" name="localidade" placeholder="${esc(f.localidadePh)}">
      </div>

      <div class="field">
        <label for="f-country">${f.country}</label>
        <input type="text" id="f-country" name="country" autocomplete="country-name" placeholder="${esc(f.countryPh)}">
      </div>

      <div class="field">
        <label for="f-residence">${f.residence}</label>
        <select id="f-residence" name="residence_status">
          <option value="" selected>${esc(f.selectPlaceholder)}</option>
${selectOptions(f.residenceOptions)}
        </select>
      </div>

      <div class="field">
        <label for="f-type">${f.type} <span class="req" aria-hidden="true">*</span></label>
        <select id="f-type" name="insurance_type" data-branch-select required aria-required="true" aria-describedby="err-type">
          <option value="" disabled${selected ? '' : ' selected'}>${esc(f.selectPlaceholder)}</option>
${selectOptions(
  market.branches.map((b) => ({ v: b.value, l: b.label })).concat([{ v: market.otherValue, l: f.typeOther }]),
  selected
)}
        </select>
        <span class="field-error" id="err-type" aria-live="polite"></span>
      </div>

${branchGroupsHtml(market)}

      <div class="field">
        <label for="f-start">${f.startDate}</label>
        <input type="text" id="f-start" name="start_date" placeholder="${esc(f.startDatePh)}">
      </div>

      <div class="field">
        <label for="f-preflang">${f.prefLang}</label>
        <select id="f-preflang" name="preferred_language">
${selectOptions(f.prefLangOptions)}
        </select>
      </div>

      <div class="field">
        <label for="f-message">${f.message}</label>
        <textarea id="f-message" name="message" rows="6"
                  placeholder="${esc(page.formPlaceholder || f.messagePh)}"></textarea>
      </div>

      <div class="field consent-block">
        <div class="consent">
          <input type="checkbox" id="f-consent" name="consent" value="${esc(market.consentValue)}"
                 required aria-required="true" aria-describedby="err-consent">
          <label for="f-consent">${f.consent}</label>
        </div>
        <span class="field-error" id="err-consent" aria-live="polite"></span>
      </div>

      <button type="submit" class="form-submit" id="leadSubmit">${page.formCta || ui.formSubmit}</button>
      <p class="form-footnote">${ui.formFootnote}</p>
    </form>
    <div class="form-success" id="leadSuccess">
      <div class="tick">&#10003;</div>
      <h3>${ui.successHeading}</h3>
      <p>${ui.successBody}</p>
    </div>
  </div>
</section>`;
}

/* ─────────────── client script ─────────────── */

function formScript(market) {
  const v = market.ui.v;
  return `<script>
  /*
   * Validation and attribution for the ${market.name} lead form. The form works
   * without JavaScript — this replaces the browser's generic bubbles with
   * messages in the visitor's language next to the field that caused them, and
   * stamps the two attribution fields the rest of the site already uses
   * (source_url, landing_page; see /js/ar-analytics-tracker.js). No second
   * analytics stack, no extra conversion: one generate_lead event carrying the
   * market and language, plus the site's existing lead conversion.
   */
  (function () {
    "use strict";
    var form = document.getElementById("leadForm");
    if (!form) return;

    var submitBtn = document.getElementById("leadSubmit");
    var EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[a-z]{2,}$/i;
    var PHONE_RE = /^[+]?[0-9 ()-]{6,}$/;

    var RULES = [
      { id: "f-name", error: "err-name", validate: function (value) {
          if (!value) return ${JSON.stringify(v.name)};
          if (value.length < 2) return ${JSON.stringify(v.nameShort)};
          return null; } },
      { id: "f-email", error: "err-email", validate: function (value) {
          if (!value) return ${JSON.stringify(v.email)};
          if (!EMAIL_RE.test(value)) return ${JSON.stringify(v.emailBad)};
          return null; } },
      { id: "f-phone", error: "err-phone", validate: function (value) {
          if (!value) return ${JSON.stringify(v.phone)};
          if (!PHONE_RE.test(value)) return ${JSON.stringify(v.phoneBad)};
          return null; } },
      { id: "f-type", error: "err-type", validate: function (value) {
          if (!value) return ${JSON.stringify(v.type)};
          return null; } },
      { id: "f-consent", error: "err-consent", checkbox: true, validate: function (checked) {
          if (!checked) return ${JSON.stringify(v.consent)};
          return null; } }
    ];

    function valueOf(rule, field) {
      return rule.checkbox ? field.checked : String(field.value || "").trim();
    }

    function setError(rule, message) {
      var field = document.getElementById(rule.id);
      var box = document.getElementById(rule.error);
      if (!field || !box) return;
      if (message) {
        box.textContent = message;
        box.classList.add("show");
        field.setAttribute("aria-invalid", "true");
      } else {
        box.textContent = "";
        box.classList.remove("show");
        field.removeAttribute("aria-invalid");
      }
    }

    function check(rule) {
      var field = document.getElementById(rule.id);
      if (!field) return true;
      var message = rule.validate(valueOf(rule, field));
      setError(rule, message);
      return !message;
    }

    RULES.forEach(function (rule) {
      var field = document.getElementById(rule.id);
      if (!field) return;
      var revalidate = function () {
        if (field.getAttribute("aria-invalid") === "true") check(rule);
      };
      field.addEventListener("input", revalidate);
      field.addEventListener("change", revalidate);
      field.addEventListener("blur", function () {
        if (valueOf(rule, field)) check(rule);
      });
    });

    var typeSelect = document.getElementById("f-type");
    var productField = form.querySelector('input[name="product_interest"]');
    if (typeSelect && productField) {
      typeSelect.addEventListener("change", function () {
        productField.value = typeSelect.value;
      });
    }

    function stampAttribution() {
      var source = form.querySelector('input[name="source_url"]');
      if (source && !source.value) source.value = window.location.href;
      var landing = form.querySelector('input[name="landing_page"]');
      if (landing && !landing.value) {
        var stored = null;
        try { stored = window.sessionStorage.getItem("ar_landing_page"); } catch (err) {}
        landing.value = stored || window.location.href;
      }
    }
    stampAttribution();

    form.addEventListener("submit", function (event) {
      var firstInvalid = null;
      RULES.forEach(function (rule) {
        if (!check(rule) && !firstInvalid) firstInvalid = document.getElementById(rule.id);
      });
      if (firstInvalid) {
        event.preventDefault();
        firstInvalid.focus();
        return;
      }
      event.preventDefault();
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = ${JSON.stringify(market.ui.formSending)};
      var data = new URLSearchParams(new FormData(form)).toString();
      fetch("/${market.key}/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      }).then(function () {
        form.style.display = "none";
        var success = document.getElementById("leadSuccess");
        if (success) success.classList.add("show");
        if (window.gtag) {
          window.gtag("event", "generate_lead", {
            form_name: ${JSON.stringify(market.gtagName)},
            market: ${JSON.stringify(market.marketValue)},
            language: ${JSON.stringify(market.languageValue)},
            insurance_product: productField ? productField.value : "",
            landing_page: form.querySelector('input[name="landing_page"]').value
          });
          window.gtag("event", "conversion", { send_to: "${ADS_CONVERSION}", value: 1.0, currency: "EUR" });
        }
      }).catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        alert(${JSON.stringify(market.ui.submitError)});
      });
    });
  })();
</script>`;
}

function cookieBanner(market) {
  const c = market.ui.cookie;
  return `<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>${c.title}</strong>
      <p>${c.body}</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">${c.reject}</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">${c.accept}</button>
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
</script>`;
}

/* ─────────────── footer ─────────────── */

const SOCIAL_SVGS = `<div class="footer-social">
            <a href="https://www.facebook.com/adlerrochefort" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            </a>
            <a href="https://www.instagram.com/adlerrochefort/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/adler-rochefort" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            </a>
          </div>`;

/**
 * The footer language column.
 *
 * It used to be nine bordered chips in a `.footer-col-links` list, which the
 * footer's own `flex-direction: column` stacked into a tall ladder — one
 * language per line, most of the column's height spent on a control. It is now
 * the same selector the header carries, built by the same module and routed
 * through the same targets, so the column is one button deep and the two
 * controls cannot send a visitor to different places.
 */
function footerLangs(market, page) {
  return footerSelectorHtml({
    pageLang: market.key,
    targets: langTargets(market, page),
    indent: '      ',
  });
}

function footerHtml(market, page) {
  const ft = market.ui.footer;
  return `<footer class="on-dark">
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">${iso(market, 'Adler &amp; Rochefort')}</div>
      <p class="footer-brand-desc">${ft.desc}</p>
      <div class="footer-badge">
        <span class="footer-badge-dot" aria-hidden="true"></span>
        ${ft.badge}
      </div>
    </div>
    <div>
      <div class="footer-col-title">${ft.coverTitle}</div>
      <ul class="footer-col-links">
${ft.coverLinks.map((l) => `        <li><a href="${l.url}">${l.label}</a></li>`).join('\n')}
      </ul>
    </div>
    <div>
      <div class="footer-col-title">${ft.langsTitle}</div>
${footerLangs(market, page)}
    </div>
    <div>
      <div class="footer-col-title">${ft.contactTitle}</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">${iso(market, 'insurance@adlerrochefort.com')}</a></li>
        <li><a href="tel:+351928226570">${iso(market, '+351 928 226 570')}</a></li>
        <li><span>${iso(market, 'Varandas de São João 4<br>8600-324 Lagos, Algarve, Portugal')}</span></li>
        <li><a href="#${market.ui.formId}">${ft.contactCta}</a></li>
        <li>
          ${SOCIAL_SVGS}
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">${iso(market, '&copy; 2026 Adler &amp; Rochefort')} · ${ft.copy}</div>
    <div class="footer-platforms">
      <a href="https://mycovervault.com" class="footer-platform-link" target="_blank" rel="noopener noreferrer">${ft.vault}</a>
    </div>
    <div class="footer-legal">
      <a href="/en/privacy-policy" hreflang="en">${ft.privacy}</a>
      <a href="/en/terms-and-conditions" hreflang="en">${ft.terms}</a>
      <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">${ft.complaints}</a>
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">${ft.asfChannel}</a>
    </div>
  </div>
  <div class="footer-regulatory">
${ft.regulatory.map((p) => `    <p>${p}</p>`).join('\n')}
  </div>
</footer>`;
}

/* ─────────────── page assembly ─────────────── */

export function renderPage(market, page) {
  const ui = market.ui;

  const related = page.related?.length
    ? `<section class="section plain" aria-labelledby="related-title">
  <div class="container narrow">
    <h2 id="related-title">${ui.relatedTitle}</h2>
    <ul class="related">
${page.related.map((r) => `      <li><a class="text-link" href="${esc(r.url)}">${r.label}</a></li>`).join('\n')}
    </ul>
  </div>
</section>`
    : '';

  /*
   * The portrait band and the insurer row. Both are shared components
   * (scripts/lib/site-sections.mjs) and both are opt-in per page: only the
   * homepages carry the copy for them, so the seven cluster articles are
   * unchanged. The bands continue the page's own cream/white alternation
   * rather than a fixed pair, so each market keeps its rhythm.
   */
  const audienceHtml = page.audience
    ? audienceBand({ ...page.audience, id: 'audience-title', band: nextBand(page.sections) })
    : '';
  const insurersHtml = page.insurers
    ? insurerPanel({ ...page.insurers, id: 'insurers-title', band: nextBand(page.sections + audienceHtml) })
    : '';

  // Joined here rather than interpolated one per line so that a page without
  // these sections keeps exactly the blank-line rhythm it had before.
  const extraSections = [audienceHtml, insurersHtml].filter(Boolean).map((h) => `\n${h}\n`).join('');

  const quote = page.pullquote
    ? `<section class="pullquote-band" aria-label="${esc(ui.pullquoteAria)}">
  <blockquote class="pullquote">
    ${page.pullquote}
    <cite>${iso(market, 'Adler &amp; Rochefort · Lagos, Algarve')}</cite>
  </blockquote>
</section>`
    : '';

  return `<!DOCTYPE html>
<html lang="${market.htmlLang}"${market.dir ? ` dir="${market.dir}"` : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#17243D">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="keywords" content="${esc(page.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Hugo Gonçalves">
<link rel="canonical" href="${ORIGIN}${page.url}">
${hreflangTags(market, page)}<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="${page.isHub ? 'website' : 'article'}">
<meta property="og:url" content="${ORIGIN}${page.url}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.ogDescription || page.description)}">
<meta property="og:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${market.ogLocale}">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.ogDescription || page.description)}">
<meta name="twitter:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

<script type="application/ld+json">
${jsonLd(market, page)}
</script>

<link rel="stylesheet" href="/css/ar-cluster.css">
<link rel="stylesheet" href="/css/ar-chrome.css">
${LANGSEL_CSS_LINK}
<!-- Google tag (gtag.js) - Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18361722533"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18361722533');
</script>
</head>
<body>

<a class="skip-link" href="#main">${ui.skipLink}</a>

<div class="asf-top-bar on-dark">${ui.asfBar}</div>

<header class="site-header">
  <nav class="site-nav on-dark" aria-label="${esc(ui.navAria)}">
    <a href="/${market.key}/" class="nav-logo">
      <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" width="1000" height="354" loading="eager">
    </a>
    <div class="nav-right">
      <div class="lang-switcher">
${langSelector(market, page)}
      </div>
      <a href="#${ui.formId}" class="nav-cta">${ui.navCta}</a>
    </div>
  </nav>
</header>

${breadcrumbHtml(market, page)}

<main id="main">

<article>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <span class="eyebrow">${page.eyebrow}</span>
    <h1 id="hero-title">${page.h1}</h1>
    <p class="hero-subtitle">${page.standfirst}</p>
    <p class="hero-meta">${page.heroMeta || ui.heroMeta}</p>
    <a href="#${ui.formId}" class="btn-cta">${page.heroCta || ui.heroCta} <svg viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg></a>
  </div>
</section>

${langPolicyHtml(market)}

${page.sections}
${extraSections}
${quote}

${faqHtml(market, page)}

${related}

${formHtml(market, page)}
</article>

</main>

${footerHtml(market, page)}

<div class="mobile-cta">
  <a href="#${ui.formId}">${ui.mobileCta}</a>
</div>

${formScript(market)}
<script defer src="/js/lead-branch-fields.js"></script>
<script defer src="/js/ar-analytics-tracker.js"></script>
${LANGSEL_SCRIPT_TAG}
${cookieBanner(market)}
</body>
</html>
`;
}

/** Write one market's pages to public/. Returns the paths written. */
export async function writeMarket(market) {
  const written = [];
  for (const page of market.pages) {
    const dir = join(PUBLIC, page.url.replace(/^\/|\/$/g, ''));
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), renderPage(market, page), 'utf8');
    written.push(page.url);
  }
  return written;
}
