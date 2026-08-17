#!/usr/bin/env node
/**
 * Renders the Dutch cluster (/nl/…) from the content definitions in
 * scripts/nl-cluster.data.mjs.
 *
 * Every page in the cluster ships with the same structural guarantees, which is
 * the reason this is generated rather than hand-written eleven times:
 *
 *   - the language-policy block, placed directly after the introduction and
 *     before the first section heading;
 *   - the `nl-offerte-aanvraag` form, with a branch selector and per-branch
 *     qualification fields, posting to /nl/bedankt/;
 *   - BreadcrumbList, FAQPage (five questions) and BlogPosting/Article JSON-LD;
 *   - a language switcher that marks PT and EN as unavailable rather than
 *     linking to an approximate page, and hreflang alternates emitted only
 *     where a true equivalent exists.
 *
 * Run: node scripts/generate-nl-cluster.mjs
 * Then: node scripts/generate-sitemap.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, LANG_POLICY_NL } from './nl-cluster.data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';

/** Escapes text destined for an HTML attribute or a JSON-LD string. */
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ─────────────── shared chrome ─────────────── */

const ORG_LD = {
  '@type': 'InsuranceAgency',
  '@id': `${ORIGIN}/#organization`,
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  telephone: '+351928226570',
  email: 'insurance@adlerrochefort.com',
  url: ORIGIN,
  logo: `${ORIGIN}/images/logo-adler-rochefort.png`,
  areaServed: { '@type': 'Country', name: 'Portugal', identifier: 'PT' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Varandas de São João 4',
    addressLocality: 'Lagos',
    addressRegion: 'Algarve',
    postalCode: '8600-324',
    addressCountry: 'PT',
  },
  identifier: { '@type': 'PropertyValue', name: 'ASF registration', value: '425591790/3' },
};

/**
 * The language switcher. Convention: only a genuine equivalent is linked; the
 * other languages are shown as unavailable so nobody is sent to a page that
 * does not answer the question they arrived with.
 */
function langSwitcher(page) {
  const pt = page.hreflang?.pt
    ? `<a href="${esc(page.hreflang.pt)}" hreflang="pt-PT" lang="pt-PT">PT</a>`
    : `<span class="lang-na" lang="pt-PT" title="Deze pagina bestaat niet in het Portugees">PT</span>`;
  const en = page.hreflang?.en
    ? `<a href="${esc(page.hreflang.en)}" hreflang="en-GB" lang="en">EN</a>`
    : `<span class="lang-na" lang="en" title="This page is not available in English">EN</span>`;
  return `<div class="lang-switcher">
        ${pt}
        <span class="lang-switcher-sep" aria-hidden="true">|</span>
        ${en}
        <span class="lang-switcher-sep" aria-hidden="true">|</span>
        <a href="${esc(page.url)}" aria-current="page" lang="nl">NL</a>
      </div>`;
}

/**
 * hreflang, matching the rule scripts/hreflang.mjs enforces on the rest of the
 * corpus: declare a set only where a confirmed counterpart exists, and never a
 * self-only declaration — that tells a crawler to look for a pair that is not
 * there. Pages with no equivalent therefore emit nothing beyond the canonical.
 */
function hreflangTags(page) {
  if (!page.hreflang?.pt && !page.hreflang?.en) return '';
  // Order follows scripts/hreflang.mjs — pt, en, then self — so the two scripts
  // produce byte-identical blocks and neither rewrites the other's work.
  const out = [];
  if (page.hreflang?.pt) out.push(`  <link rel="alternate" hreflang="pt-PT" href="${ORIGIN}${page.hreflang.pt}">`);
  if (page.hreflang?.en) out.push(`  <link rel="alternate" hreflang="en-GB" href="${ORIGIN}${page.hreflang.en}">`);
  out.push(`  <link rel="alternate" hreflang="nl" href="${ORIGIN}${page.url}">`);
  return out.join('\n') + '\n';
}

function breadcrumbHtml(page) {
  const trail = page.breadcrumb;
  const items = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<li><span aria-current="page">${c.name}</span></li>`
        : `<li><a href="${esc(c.url)}">${c.name}</a></li>`
    )
    .join('\n      ');
  return `<nav class="breadcrumb" aria-label="Kruimelpad">
    <ol>
      ${items}
    </ol>
  </nav>`;
}

function jsonLd(page) {
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: page.breadcrumb.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${ORIGIN}${c.url || page.url}`,
    })),
  };

  const faq = {
    '@type': 'FAQPage',
    mainEntity: page.faq.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') },
    })),
  };

  const article = {
    '@type': page.schemaType || 'BlogPosting',
    headline: page.h1,
    name: page.title,
    description: page.description,
    inLanguage: 'nl-NL',
    datePublished: page.published,
    dateModified: page.modified || page.published,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}${page.url}` },
    image: `${ORIGIN}/images/og-image-adlerrochefort.png`,
    author: {
      '@type': 'Person',
      name: 'Hugo Gonçalves',
      jobTitle: 'Agente de seguros (ASF 425591790/3)',
      worksFor: { '@id': `${ORIGIN}/#organization` },
    },
    publisher: { '@id': `${ORIGIN}/#organization` },
  };

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [ORG_LD, breadcrumb, faq, article] }, null, 2);
}

/** The language-policy block — identical wording on every page in the cluster. */
function langPolicyHtml() {
  const paras = LANG_POLICY_NL.body.map((p) => `      <p>${p}</p>`).join('\n');
  return `<div class="lang-policy-band">
  <aside class="lang-policy" aria-labelledby="taalbeleid">
    <h2 id="taalbeleid">${LANG_POLICY_NL.heading}</h2>
${paras}
  </aside>
</div>`;
}

function faqHtml(page) {
  const items = page.faq
    .map(
      (q) => `      <details class="faq-item">
        <summary>${q.q}</summary>
        <div class="faq-answer">${q.a}</div>
      </details>`
    )
    .join('\n');
  return `<section class="section tint" aria-labelledby="faq-title" id="veelgestelde-vragen">
  <div class="container narrow">
    <span class="eyebrow">Veelgestelde vragen</span>
    <h2 id="faq-title">${page.faqTitle || 'Veelgestelde vragen'}</h2>
    <div class="faq-list">
${items}
    </div>
  </div>
</section>`;
}

/* ─────────────── the quote form ─────────────── */

const BRANCHES = [
  {
    value: 'Zorgverzekering',
    legend: 'Over de te verzekeren personen',
    fields: [
      { id: 'zorg_leeftijd', label: 'Leeftijd van de oudste te verzekeren persoon', type: 'number', placeholder: 'Bijv.: 62' },
      { id: 'zorg_personen', label: 'Aantal te verzekeren personen', type: 'number', placeholder: 'Bijv.: 2' },
      { id: 'zorg_s1', label: 'Heeft u een S1 van het CAK?', type: 'text', placeholder: 'Ja / Nee / Aangevraagd' },
      { id: 'zorg_aandoeningen', label: 'Bestaande aandoeningen om te melden', type: 'text', placeholder: 'Ja / Nee' },
    ],
  },
  {
    value: 'Woonverzekering',
    legend: 'Over de woning',
    fields: [
      { id: 'woon_plaats', label: 'Plaats en gemeente van de woning', type: 'text', placeholder: 'Bijv.: Monchique, Faro' },
      { id: 'woon_type', label: 'Type woning', type: 'text', placeholder: 'Appartement / vrijstaand / quinta' },
      { id: 'woon_bouwjaar', label: 'Bouwjaar, bij benadering', type: 'text', placeholder: 'Bijv.: 1998' },
      { id: 'woon_oppervlakte', label: 'Woonoppervlak in m²', type: 'number', placeholder: 'Bijv.: 140' },
      { id: 'woon_legalisatie', label: 'Is alles gelegaliseerd en geregistreerd?', type: 'text', placeholder: 'Ja / Nee / Gedeeltelijk / Onbekend' },
    ],
  },
  {
    value: 'Autoverzekering',
    legend: 'Over het voertuig',
    fields: [
      { id: 'auto_voertuig', label: 'Merk, model en bouwjaar', type: 'text', placeholder: 'Bijv.: Volvo V60 2019' },
      { id: 'auto_kenteken', label: 'Kenteken', type: 'text', placeholder: 'NL of PT kenteken' },
      { id: 'auto_schadevrij', label: 'Aantal schadevrije jaren', type: 'number', placeholder: 'Bijv.: 12' },
      { id: 'auto_royement', label: 'Heeft u een royementsverklaring?', type: 'text', placeholder: 'Ja / Nee / Aan te vragen' },
    ],
  },
  {
    value: 'Alojamento Local',
    legend: 'Over de verhuur',
    fields: [
      { id: 'al_registratie', label: 'AL-registratienummer, indien reeds toegekend', type: 'text', placeholder: 'Bijv.: 12345/AL' },
      { id: 'al_type', label: 'Type accommodatie', type: 'text', placeholder: 'Appartement / moradia / B&B / glamping' },
      { id: 'al_capaciteit', label: 'Maximaal aantal gasten', type: 'number', placeholder: 'Bijv.: 6' },
      { id: 'al_zwembad', label: 'Zwembad aanwezig?', type: 'text', placeholder: 'Ja / Nee' },
    ],
  },
  {
    value: 'Beroepsaansprakelijkheid',
    legend: 'Over uw activiteit',
    fields: [
      { id: 'zzp_activiteit', label: 'Welke activiteit oefent u uit?', type: 'text', placeholder: 'Bijv.: IT-consultancy' },
      { id: 'zzp_omzet', label: 'Verwachte jaaromzet', type: 'text', placeholder: 'Bijv.: € 60.000' },
      { id: 'zzp_klanten', label: 'Waar zitten uw opdrachtgevers?', type: 'text', placeholder: 'NL / PT / EU / wereldwijd' },
      { id: 'zzp_eis', label: 'Wordt de dekking contractueel geëist?', type: 'text', placeholder: 'Ja / Nee / Onbekend' },
    ],
  },
  {
    value: 'Bedrijfsverzekering',
    legend: 'Over het bedrijf',
    fields: [
      { id: 'bedrijf_activiteit', label: 'Activiteit van het bedrijf', type: 'text', placeholder: 'Bijv.: restaurant, bouw, retail' },
      { id: 'bedrijf_medewerkers', label: 'Aantal medewerkers', type: 'number', placeholder: 'Bijv.: 4' },
      { id: 'bedrijf_locatie', label: 'Locatie van de vestiging', type: 'text', placeholder: 'Bijv.: Lagos' },
    ],
  },
];

function branchGroupsHtml() {
  return BRANCHES.map((b) => {
    const fields = b.fields
      .map(
        (f) => `          <div class="field">
            <label for="f-${f.id}">${f.label}</label>
            <input type="${f.type}" id="f-${f.id}" name="${f.id}" placeholder="${esc(f.placeholder)}" disabled>
          </div>`
      )
      .join('\n');
    return `        <div class="form-branch-fields" data-branch="${esc(b.value)}" hidden>
          <span class="form-branch-legend">${b.legend}</span>
${fields}
        </div>`;
  }).join('\n');
}

function formHtml(page) {
  const selected = page.formBranch;
  const options = BRANCHES.map(
    (b) => `          <option value="${esc(b.value)}"${b.value === selected ? ' selected' : ''}>${b.label || b.value}</option>`
  ).join('\n');

  return `<section class="section form-section" aria-labelledby="offerte-title" id="offerte">
  <div class="form-shell">
    <h2 id="offerte-title">Vraag een offerte aan</h2>
    <p class="form-intro">${page.formIntro}</p>
    <p class="form-lang-note">Wij antwoorden binnen 24 uur, in het Engels.</p>

    <form
      class="lead-form"
      id="offerteForm"
      name="nl-offerte-aanvraag"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/nl/bedankt/"
      novalidate>

      <input type="hidden" name="form-name" value="nl-offerte-aanvraag">
      <input type="hidden" name="source" value="${esc(page.slug)}">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="subject" value="Nieuwe offerteaanvraag (NL) — ${esc(page.formSubject)}">
      <input type="hidden" name="lang" value="nl">
      <p class="visually-hidden"><label>Niet invullen: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>

      <div class="field">
        <label for="f-naam">Naam <span class="req" aria-hidden="true">*</span></label>
        <input type="text" id="f-naam" name="naam" autocomplete="name"
               required aria-required="true" aria-describedby="err-naam">
        <span class="field-error" id="err-naam" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-email">E-mailadres <span class="req" aria-hidden="true">*</span></label>
        <input type="email" id="f-email" name="email" autocomplete="email" inputmode="email"
               required aria-required="true" aria-describedby="err-email">
        <span class="field-error" id="err-email" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-telefoon">Telefoonnummer <span class="req" aria-hidden="true">*</span></label>
        <p class="field-help" id="help-telefoon">Wij nemen schriftelijk contact met u op. Het telefoonnummer is nodig voor de verzekeraar bij het opmaken van de polis.</p>
        <input type="tel" id="f-telefoon" name="telefoon" autocomplete="tel" inputmode="tel"
               pattern="[0-9+ ()-]{6,}"
               required aria-required="true" aria-describedby="help-telefoon err-telefoon">
        <span class="field-error" id="err-telefoon" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-type">Type verzekering <span class="req" aria-hidden="true">*</span></label>
        <select id="f-type" name="type_verzekering" data-branch-select required aria-required="true" aria-describedby="err-type">
          <option value="" disabled${selected ? '' : ' selected'}>Maak een keuze</option>
${options}
          <option value="Anders of meerdere">Anders of meerdere</option>
        </select>
        <span class="field-error" id="err-type" aria-live="polite"></span>
      </div>

${branchGroupsHtml()}

      <div class="field">
        <label for="f-opmerkingen">Opmerkingen</label>
        <textarea id="f-opmerkingen" name="opmerkingen" rows="6"
                  placeholder="${esc(page.formPlaceholder)}"></textarea>
      </div>

      <div class="field consent-block">
        <div class="consent">
          <input type="checkbox" id="f-toestemming" name="toestemming" value="ja"
                 required aria-required="true" aria-describedby="err-toestemming">
          <label for="f-toestemming">Ik ga ermee akkoord dat Adler &amp; Rochefort mijn gegevens gebruikt om mijn aanvraag te behandelen, conform de AVG en het <a class="text-link" href="/en/privacy-policy" hreflang="en">privacybeleid</a>.</label>
        </div>
        <span class="field-error" id="err-toestemming" aria-live="polite"></span>
      </div>

      <button type="submit" class="form-submit" id="offerteSubmit">Verstuur aanvraag</button>
      <p class="form-footnote">Adler &amp; Rochefort is de handelsnaam van Ownizo, Unipessoal Lda., geregistreerd verzekeringsagent bij de ASF onder nr. 425591790/3.</p>
    </form>
  </div>
</section>`;
}

/* ─────────────── footer ─────────────── */

const FOOTER = `<footer class="on-dark">
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Adler &amp; Rochefort</div>
      <p class="footer-brand-desc">Verzekeringsagent in Lagos, Algarve. Wij vergelijken Portugese verzekeraars en leggen alles schriftelijk vast.</p>
      <div class="footer-badge">
        <span class="footer-badge-dot" aria-hidden="true"></span>
        Geregistreerd verzekeringsagent — ASF nr. 425591790/3
      </div>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a></li>
        <li><a href="tel:+351928226570">+351 928 226 570</a></li>
        <li><span>Varandas de São João 4<br>8600-324 Lagos, Algarve, Portugal</span></li>
        <li><a href="#offerte">Vraag een offerte aan</a></li>
        <li>
          <div class="footer-social">
            <a href="https://www.facebook.com/adlerrochefort" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            </a>
            <a href="https://www.instagram.com/adlerrochefort/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/adler-rochefort" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Talen</div>
      <ul class="footer-col-links footer-langs">
        <li><a href="/nl/verzekeringen-portugal/" lang="nl">NL</a></li>
        <li><a href="/de/" lang="de">DE</a></li>
        <li><a href="/fr/" lang="fr">FR</a></li>
        <li><a href="/en/" lang="en">EN</a></li>
        <li><a href="/" lang="pt-PT">PT</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Adler &amp; Rochefort · Alle rechten voorbehouden</div>
    <div class="footer-legal">
      <a href="/en/privacy-policy" hreflang="en">Privacybeleid</a>
      <a href="/en/terms-and-conditions" hreflang="en">Algemene voorwaarden</a>
      <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">Klachtenboek</a>
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">ASF-meldkanaal</a>
    </div>
  </div>
  <div class="footer-regulatory">
    <p>Adler &amp; Rochefort is de handelsnaam van Ownizo, Unipessoal Lda.</p>
    <p>Ownizo, Unipessoal Lda. is geregistreerd bij de Portugese toezichthouder voor verzekeringen en pensioenfondsen (ASF) als agente de seguros onder nr. 425591790/3.</p>
    <p>Deze pagina is algemene informatie, geen persoonlijk advies. Welke dekking voor u passend is, hangt af van uw situatie en van de voorwaarden van de betreffende polis.</p>
  </div>
</footer>`;

const FORM_SCRIPT = `<script>
  /*
   * Client-side validation for the NL quote form. The form is a plain Netlify
   * Forms POST (action="/nl/bedankt/") and works without JavaScript — the
   * browser's own constraint validation takes over when this does not run.
   * This handler only replaces the generic bubbles with Dutch messages placed
   * next to the offending field and announced through aria-live.
   */
  (function () {
    "use strict";
    var form = document.getElementById("offerteForm");
    if (!form) return;

    var submitBtn = document.getElementById("offerteSubmit");
    var EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[a-z]{2,}$/i;
    var PHONE_RE = /^[+]?[0-9 ()-]{6,}$/;

    var RULES = [
      { id: "f-naam", error: "err-naam", validate: function (v) {
          if (!v) return "Vul uw naam in.";
          if (v.length < 2) return "Vul uw volledige naam in.";
          return null; } },
      { id: "f-email", error: "err-email", validate: function (v) {
          if (!v) return "Vul uw e-mailadres in.";
          if (!EMAIL_RE.test(v)) return "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.";
          return null; } },
      { id: "f-telefoon", error: "err-telefoon", validate: function (v) {
          if (!v) return "Vul uw telefoonnummer in.";
          if (!PHONE_RE.test(v)) return "Vul een geldig telefoonnummer in. Cijfers, spaties en een + aan het begin zijn toegestaan.";
          return null; } },
      { id: "f-type", error: "err-type", validate: function (v) {
          if (!v) return "Kies welk type verzekering u nodig heeft.";
          return null; } },
      { id: "f-toestemming", error: "err-toestemming", checkbox: true, validate: function (checked) {
          if (!checked) return "Vink dit aan zodat wij uw aanvraag mogen behandelen.";
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
      submitBtn.disabled = true;
      submitBtn.textContent = "Bezig met versturen…";
    });
  })();
</script>`;

const COOKIE_BANNER = `<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>Deze site gebruikt cookies</strong>
      <p>We gebruiken cookies om uw surfervaring te verbeteren. Door verder te gaan, gaat u akkoord met ons <a href="/politica-de-privacidade/">privacybeleid</a>.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">Weigeren</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">Accepteren</button>
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

/* ─────────────── page assembly ─────────────── */

function renderPage(page) {
  const related = page.related?.length
    ? `<section class="section plain" aria-labelledby="verder-title">
  <div class="container narrow">
    <h2 id="verder-title">Verder lezen</h2>
    <ul class="related">
${page.related.map((r) => `      <li><a class="text-link" href="${esc(r.url)}">${r.label}</a></li>`).join('\n')}
    </ul>
  </div>
</section>`
    : '';

  const quote = page.pullquote
    ? `<section class="pullquote-band" aria-label="Citaat">
  <blockquote class="pullquote">
    ${page.pullquote}
    <cite>Adler &amp; Rochefort · Lagos, Algarve</cite>
  </blockquote>
</section>`
    : '';

  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#33402F">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="keywords" content="${esc(page.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Hugo Gonçalves">
<link rel="canonical" href="${ORIGIN}${page.url}">
${hreflangTags(page)}<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:url" content="${ORIGIN}${page.url}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="nl_NL">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">

<script type="application/ld+json">
${jsonLd(page)}
</script>

<link rel="stylesheet" href="/css/ar-nl.css">
<link rel="stylesheet" href="/css/ar-chrome.css">
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

<a class="skip-link" href="#main">Direct naar de inhoud</a>

<div class="asf-top-bar on-dark">Adler &amp; Rochefort — geregistreerd verzekeringsagent bij de ASF onder nr. 425591790/3 · Lagos, Algarve</div>

<header class="site-header">
  <nav class="site-nav on-dark" aria-label="Hoofdnavigatie">
    <a href="/nl/verzekeringen-portugal/" class="nav-logo">
      <img src="/images/logo-adler-rochefort.png" alt="Adler &amp; Rochefort" class="nav-logo-img" width="1000" height="354" loading="eager">
    </a>
    <div class="nav-right">
      ${langSwitcher(page)}
      <a href="#offerte" class="nav-cta">Vraag een offerte aan</a>
    </div>
  </nav>
</header>

${breadcrumbHtml(page)}

<main id="main">

<article>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <div class="hero-rule" aria-hidden="true"></div>
    <span class="eyebrow">${page.eyebrow}</span>
    <h1 id="hero-title">${page.h1}</h1>
    <p class="hero-subtitle">${page.standfirst}</p>
    <p class="hero-meta">${page.heroMeta}</p>
  </div>
</section>

${langPolicyHtml()}

${page.sections}

${quote}

${faqHtml(page)}

${related}

${formHtml(page)}
</article>

</main>

${FOOTER}

<div class="mobile-cta">
  <a href="#offerte">Vraag een offerte aan</a>
</div>

${FORM_SCRIPT}
<script defer src="/js/lead-branch-fields.js"></script>
<script defer src="/js/ar-analytics-tracker.js"></script>
${COOKIE_BANNER}
</body>
</html>
`;
}

/* ─────────────── write ─────────────── */

let written = 0;
for (const page of PAGES) {
  const dir = join(PUBLIC, page.url.replace(/^\/|\/$/g, ''));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), renderPage(page), 'utf8');
  written++;
  console.log(`  ✓ ${page.url}`);
}
console.log(`\n${written} Dutch pages written.`);
