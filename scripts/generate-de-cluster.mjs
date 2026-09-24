#!/usr/bin/env node
/**
 * Renders the German cluster (/de/…) from the content definitions in
 * scripts/de-cluster.data.mjs.
 *
 * Mirrors scripts/generate-nl-cluster.mjs deliberately — same mechanism, same
 * guarantees, same reasons for generating rather than hand-writing eleven (here:
 * eleven, one of which is the homepage itself) pages. The brief for this branch
 * takes its header from the hand-authored /de/ homepage mega-nav (Portugal /
 * Spain / Private Clients), so a generated product page cannot drift into the
 * compact logo+CTA bar. It still does not import partials.mjs — the homepage
 * file is the source of truth, same as stamp-mega-nav.mjs.
 * Chrome-adjacent classes (nav, footer, cookie banner, lang switcher) come from
 * the already-shared public/css/ar-chrome.css; body content comes from
 * public/css/ar-de.css, this cluster's own stylesheet.
 *
 * September 2026: /de/ is the EN-parity homepage (hand-authored). The editorial hub now lives at /de/versicherung-portugal/. Historical note: the one structural difference from the Dutch cluster used to be that /de/ IS the hub (Part 4
 * of the brief lists it as one of the eleven pages, not a separate landing next
 * to the homepage the way /nl/verzekeringen-portugal/ sits apart from
 * /nl/index.html). So this script's PAGES array includes a page whose url is
 * "/de/" and this run replaces public/de/index.html itself.
 *
 * Run: node scripts/generate-de-cluster.mjs
 * Then: node scripts/generate-sitemap.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, LANG_POLICY_DE } from './de-cluster.data.mjs';
import {
  footerSelectorHtml,
  langSelectorHtml,
  selectorTargets,
  LANGSEL_CSS_LINK,
  LANGSEL_SCRIPT_TAG,
  LANG_BY_KEY,
} from './lib/lang-selector.mjs';
import { extractSiteNav, extractMobileNav, swapLangSwitcher, NAV_SCRIPT } from './lib/mega-nav.mjs';
import { livroLink, LIVRO_CSS, LIVRO_SCRIPT } from './lib/livro.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://adlerrochefort.com';

const deHomeHtml = await readFile(join(PUBLIC, 'de/index.html'), 'utf8');
const absDe = (h) => h && h.replace(/href="#([a-z0-9-]+)"/gi, 'href="/de/#$1"');
const DE_NAV = absDe(extractSiteNav(deHomeHtml));
const DE_MOBILE = absDe(extractMobileNav(deHomeHtml));
if (!DE_NAV || !DE_NAV.includes('nav-links-left')) throw new Error('public/de/index.html has no mega-nav — refusing to generate a compact header');


const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ─────────────── shared chrome ─────────────── */

function isSpainPage(page) {
  return page.formCountry === 'Spain' || page.formMarket === 'spain';
}

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
  knowsLanguage: ['de', 'en', 'pt'],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Algarve, Portugal' },
    { '@type': 'Country', name: 'Portugal' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'AdministrativeArea', name: 'Mallorca, Spain' },
    { '@type': 'AdministrativeArea', name: 'Costa del Sol, Spain' },
    { '@type': 'AdministrativeArea', name: 'Costa Blanca, Spain' },
    { '@type': 'AdministrativeArea', name: 'Madeira, Portugal' },
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

/**
 * The language switcher. Every page names its own equivalents through
 * `page.langLinks` rather than a shared rule, because the hub genuinely has
 * homepage counterparts in all four other languages (it IS /de/index.html)
 * while every product and local page does not — there is no /en/ page that
 * answers "Autoversicherung Portugal" the way /de/autoversicherung-portugal/
 * does, so pretending otherwise would send a visitor to an approximate page
 * instead of the one that answers what they asked. A language with no
 * counterpart is offered as a labelled fall-back to its own home page, which is
 * the convention the whole corpus now uses.
 *
 * September 2026: the control is the eight-language disclosure selector defined
 * in scripts/lib/lang-selector.mjs. Polish, Swedish and Danish joined the site
 * and five two-letter codes in a row was already tight at 375px; eight would
 * have wrapped the header. Rendering from the shared module is also what keeps
 * this generator from reverting scripts/lang-switcher.mjs, which remains the
 * canonical pass — both emit the same bytes for this file's nav template:
 * contents indented eight, wrapper closed at six.
 */
function langTargets(page) {
  const L = page.langLinks || {};
  const pairs = {};
  for (const key of ['pt', 'en', 'nl', 'fr', 'pl', 'se', 'dk', 'zh']) if (L[key]) pairs[key] = L[key];
  return selectorTargets({
    pageLang: 'de',
    pageUrl: page.url,
    pairs,
    fallbacks: { pt: '/', en: '/en/' },
  });
}

function langSwitcher(page) {
  const selector = langSelectorHtml({
    pageLang: 'de',
    targets: langTargets(page),
    indent: '        ',
  });
  return `<div class="lang-switcher">\n${selector}\n      </div>`;
}

/**
 * The footer's language column, which used to be five two-letter chips. Same
 * argument as the header above: emitting the shared control here means a
 * regenerated page already carries what scripts/lang-switcher.mjs would write,
 * so the two passes do not take turns rewriting it.
 */
function footerLangs(page) {
  return footerSelectorHtml({ pageLang: 'de', targets: langTargets(page), indent: '      ' });
}

/**
 * hreflang, matching the rule scripts/hreflang.mjs enforces on the rest of the
 * corpus: declare a set only where a confirmed counterpart exists, never a
 * self-only declaration. Only the hub has genuine counterparts (the other seven
 * homepages); every product and local page emits nothing beyond the canonical.
 *
 * The order below is the order scripts/hreflang.mjs uses for the homepage
 * cluster, self included in position, so a regenerated hub already carries the
 * block the post-processor would write rather than one it has to reorder. The
 * hreflang values come from LANG_BY_KEY so there is one record of them: `se`
 * and `dk` are URL segments and their hreflang values are sv-SE and da-DK.
 */
const HREFLANG_ORDER = ['pt', 'en', 'de', 'fr', 'nl', 'pl', 'se', 'dk', 'zh'];

function hreflangTags(page) {
  const h = { ...(page.hreflang || {}), de: page.url };
  if (!HREFLANG_ORDER.some((k) => k !== 'de' && h[k])) return '';
  const out = [];
  for (const k of HREFLANG_ORDER) {
    if (!h[k]) continue;
    out.push(`  <link rel="alternate" hreflang="${LANG_BY_KEY[k].hreflang}" href="${ORIGIN}${h[k]}">`);
  }
  if (h.xDefault) out.push(`  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${h.xDefault}">`);
  return out.join('\n') + '\n';
}

function breadcrumbHtml(page) {
  const trail = page.breadcrumb;
  if (!trail || !trail.length) return '';
  const items = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<li><span aria-current="page">${c.name}</span></li>`
        : `<li><a href="${esc(c.url)}">${c.name}</a></li>`
    )
    .join('\n      ');
  return `<nav class="breadcrumb" aria-label="Brotkrumen-Navigation">
    <ol>
      ${items}
    </ol>
  </nav>`;
}

function jsonLd(page) {
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

  const faq = {
    '@type': 'FAQPage',
    mainEntity: page.faq.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '') },
    })),
  };

  const webpage = {
    '@type': page.schemaType || 'WebPage',
    headline: page.h1,
    name: page.title,
    description: page.description,
    inLanguage: 'de-DE',
    datePublished: page.published,
    dateModified: page.modified || page.published,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}${page.url}` },
    image: `${ORIGIN}/images/og-image-adlerrochefort.png`,
    publisher: { '@id': `${ORIGIN}/#organization` },
  };
  if (page.areaServed) webpage.areaServed = page.areaServed;
  else if (isSpainPage(page)) webpage.areaServed = { '@type': 'Country', name: 'Spain' };
  if (page.schemaType === 'Article') {
    webpage.author = {
      '@type': 'Person',
      name: 'Hugo Gonçalves',
      jobTitle: 'Gründer und Risk Management Specialist',
      worksFor: { '@id': `${ORIGIN}/#organization` },
    };
  }

  const graph = [ORG_LD, breadcrumb, faq, webpage].filter(Boolean);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function teamHtml(page) {
  if (!page.showTeam) return '';
  return `<section class="section tint de-team" id="team" aria-labelledby="team-title">
  <div class="container narrow">
    <span class="eyebrow">Ihr Ansprechpartner</span>
    <h2 id="team-title">Hugo Gonçalves</h2>
    <p class="hero-meta" style="margin:0 0 20px;color:var(--muted)">Gründer &amp; Risk Management Specialist · ASF 425591790/3 · Lagos</p>
    <div class="de-team-grid">
      <picture>
        <source type="image/webp" srcset="/images/hugo-goncalves-640.webp">
        <img src="/images/hugo-goncalves-640.jpg" alt="Hugo Gonçalves, Gründer von Adler &amp; Rochefort" width="640" height="853" loading="lazy" decoding="async">
      </picture>
      <div class="article-body">
        <p>Hugo Gonçalves ist der Gründer von Adler &amp; Rochefort. Er verbindet internationale Erfahrung mit einer klaren Spezialisierung auf Versicherungsberatung für internationale Mandanten in Portugal und, im Dienstleistungsverkehr, in Spanien. Jeder Fall wird im Detail gelesen, bevor eine Police empfohlen wird — unter Aufsicht der ASF.</p>
        <p>Abschluss in Business Management der University of Hertfordshire, laufende Weiterbildung am Chartered Insurance Institute (CII). Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. <a class="text-link" href="/de/#team">Mehr zum Team</a>.</p>
      </div>
    </div>
  </div>
</section>`;
}

function langPolicyHtml() {
  const paras = LANG_POLICY_DE.body.map((p) => `      <p>${p}</p>`).join('\n');
  return `<div class="lang-policy-band">
  <aside class="lang-policy" aria-labelledby="sprachpolitik">
    <h2 id="sprachpolitik">${LANG_POLICY_DE.heading}</h2>
${paras}
  </aside>
</div>`;
}

function faqHtml(page) {
  const items = page.faq
    .map(
      (q) => `      <div class="faq-item">
        <h3>${q.q}</h3>
        <div class="faq-answer">${q.a}</div>
      </div>`
    )
    .join('\n');
  return `<section class="section" aria-labelledby="faq-title" id="haeufige-fragen">
  <div class="container narrow">
    <span class="eyebrow">Häufige Fragen</span>
    <h2 id="faq-title">${page.faqTitle || 'Häufige Fragen'}</h2>
    <div class="faq-list">
${items}
    </div>
  </div>
</section>`;
}

/* ─────────────── the quote form ─────────────── */

const BRANCHES = [
  {
    value: 'Krankenversicherung',
    label: 'Krankenversicherung',
    legend: 'Zu den zu versichernden Personen',
    fields: [
      { id: 'kv_geburtsdatum', label: 'Geburtsdatum der ältesten zu versichernden Person', type: 'text', placeholder: 'TT.MM.JJJJ' },
      { id: 'kv_familie', label: 'Familienzusammensetzung', type: 'text', placeholder: 'z. B.: Ehepaar, 2 Kinder' },
      { id: 'kv_wohnort', label: 'Wohnort', type: 'text', placeholder: 'z. B.: Lagos, Algarve / Palma, Mallorca' },
      { id: 'kv_termin', label: 'Gewünschter Versicherungsbeginn', type: 'text', placeholder: 'z. B.: 1. Januar 2027' },
      { id: 'kv_netzwerk', label: 'Präferenz: Netzwerk oder Kostenerstattung?', type: 'text', placeholder: 'Netzwerk / Erstattung / unbekannt' },
    ],
  },
  {
    value: 'Hausversicherung',
    label: 'Hausversicherung',
    legend: 'Zur Immobilie',
    fields: [
      { id: 'hv_lage', label: 'Lage der Immobilie', type: 'text', placeholder: 'z. B.: Loulé, Algarve' },
      { id: 'hv_typ', label: 'Immobilientyp', type: 'text', placeholder: 'Wohnung / Villa / Quinta' },
      { id: 'hv_nutzung', label: 'Haupt- oder Zweitwohnsitz?', type: 'text', placeholder: 'Hauptwohnsitz / Zweitwohnsitz / zeitweise vermietet' },
      { id: 'hv_baujahr', label: 'Baujahr, ungefähr', type: 'text', placeholder: 'z. B.: 2005' },
      { id: 'hv_flaeche', label: 'Wohnfläche in m²', type: 'number', placeholder: 'z. B.: 160' },
      { id: 'hv_summe_gebaeude', label: 'Versicherungssumme Gebäude', type: 'text', placeholder: 'z. B.: 320.000 €' },
      { id: 'hv_summe_hausrat', label: 'Versicherungssumme Hausrat', type: 'text', placeholder: 'z. B.: 60.000 €' },
      { id: 'hv_pool', label: 'Swimmingpool vorhanden?', type: 'text', placeholder: 'Ja / Nein' },
      { id: 'hv_erdbeben', label: 'Interesse an Erdbebendeckung?', type: 'text', placeholder: 'Ja / Nein / unsicher' },
      { id: 'hv_al', label: 'Wird die Immobilie als Alojamento Local vermietet?', type: 'text', placeholder: 'Ja / Nein / geplant' },
    ],
  },
  {
    value: 'Autoversicherung',
    label: 'Autoversicherung',
    legend: 'Zum Fahrzeug',
    fields: [
      { id: 'av_kennzeichen', label: 'Portugiesisches oder ausländisches Kennzeichen?', type: 'text', placeholder: 'Portugiesisch / Deutsch / anderes' },
      { id: 'av_fahrzeug', label: 'Marke, Modell und Baujahr', type: 'text', placeholder: 'z. B.: VW Golf 2020' },
      { id: 'av_fuehrerschein_datum', label: 'Datum der ersten Führerscheinausstellung', type: 'text', placeholder: 'TT.MM.JJJJ' },
      { id: 'av_fuehrerschein_land', label: 'Ausstellungsland des Führerscheins', type: 'text', placeholder: 'z. B.: Deutschland' },
      { id: 'av_schadenverlauf', label: 'Schadenfreie Jahre bzw. Schadenverlauf', type: 'text', placeholder: 'z. B.: 8 Jahre schadenfrei' },
      { id: 'av_deckung', label: 'Gewünschter Deckungsumfang', type: 'text', placeholder: 'Haftpflicht / Teilkasko / Vollkasko' },
    ],
  },
  {
    value: 'Lebensversicherung',
    label: 'Lebensversicherung',
    legend: 'Zur gewünschten Absicherung',
    fields: [
      { id: 'lv_geburtsdatum', label: 'Geburtsdatum der zu versichernden Person', type: 'text', placeholder: 'TT.MM.JJJJ' },
      { id: 'lv_zweck', label: 'Zweck der Absicherung', type: 'text', placeholder: 'Hypothek / Familienabsicherung / beides' },
      { id: 'lv_summe', label: 'Gewünschte Versicherungssumme', type: 'text', placeholder: 'z. B.: 200.000 €' },
      { id: 'lv_raucher', label: 'Raucherstatus', type: 'text', placeholder: 'Raucher / Nichtraucher' },
    ],
  },
  {
    value: 'Private Clients',
    label: 'Private Clients (komplexe Risiken)',
    legend: 'Zu den abzusichernden Werten',
    fields: [
      { id: 'pc_werte', label: 'Um welche Vermögenswerte geht es?', type: 'text', placeholder: 'z. B.: Zweitwohnsitz, Kunstsammlung, Oldtimer' },
      { id: 'pc_immobilien', label: 'Anzahl der Immobilien', type: 'number', placeholder: 'z. B.: 2' },
      { id: 'pc_gesamtwert', label: 'Ungefährer Gesamtwert', type: 'text', placeholder: 'z. B.: über 1.000.000 €' },
      { id: 'pc_anforderungen', label: 'Besondere Anforderungen', type: 'text', placeholder: 'z. B.: weltweite Deckung, Einzelanfertigungen' },
    ],
  },
  {
    value: 'Berufshaftpflicht',
    label: 'Berufshaftpflicht (RC)',
    legend: 'Zur beruflichen Haftung',
    fields: [
      { id: 'rc_taetigkeit', label: 'Art der Tätigkeit', type: 'text', placeholder: 'z. B.: Beratung, Therapie, Architektur' },
      { id: 'rc_ort', label: 'Wo üben Sie die Tätigkeit aus?', type: 'text', placeholder: 'z. B.: Lagos, Algarve, auch im Ausland' },
      { id: 'rc_summe', label: 'Gewünschte Deckungssumme', type: 'text', placeholder: 'z. B.: 150.000 € / 300.000 €' },
      { id: 'rc_cedula', label: 'Berufszulassung vorhanden?', type: 'text', placeholder: 'Ja / Nein / in Beantragung / nicht erforderlich' },
    ],
  },
  {
    value: 'Unternehmen',
    label: 'Unternehmen / Selbstständige',
    legend: 'Zum Unternehmen',
    fields: [
      { id: 'un_taetigkeit', label: 'Art der Tätigkeit', type: 'text', placeholder: 'z. B.: Gastronomie, Beratung, Handwerk' },
      { id: 'un_mitarbeiter', label: 'Anzahl der Mitarbeiter', type: 'number', placeholder: 'z. B.: 5' },
      { id: 'un_standort', label: 'Standort des Betriebs', type: 'text', placeholder: 'z. B.: Faro' },
    ],
  },
  {
    value: 'Therapeuten & Wellness',
    label: 'Therapeuten & Wellness-Instruktoren',
    legend: 'Zu Ihrer Tätigkeit',
    fields: [
      { id: 'tw_taetigkeit', label: 'Tätigkeit', type: 'text', placeholder: 'z. B.: Osteopathie, Akupunktur, Yoga, Pilates' },
      { id: 'tw_cedula', label: 'Besitzen Sie eine ACSS-Zulassung (cédula profissional)?', type: 'text', placeholder: 'Ja / Nein / in Beantragung' },
      { id: 'tw_ort', label: 'Wo üben Sie die Tätigkeit aus?', type: 'text', placeholder: 'z. B.: eigene Praxis, Studio, mobil, auch im Ausland' },
    ],
  },
];

function branchGroupsHtml(page) {
  return branchesFor(page).map((b) => {
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

// A page that has since been given its own hand-authored, single-purpose
// wizard (its own exclusive form-name, its own fields, the 18-year rule on
// the tomador) is NOT regenerated by this script at all — page.dedicatedForm
// names the form that page is supposed to carry, and the page is skipped.
//
// Without this, running this generator silently reverted five pages
// (Kranken, Haus, Auto, Leben, Private Clients) to the shared
// "de-angebot-anfrage" form: exclusive form-names gone, the 18-year rule
// gone, Leben's `capital` and Private Clients' NIF/morada gone. Verified by
// running it — exactly the failure mode check 7 of
// scripts/check-generator-freshness.mjs was written for, but that check
// only ever covered the (now empty) car cluster, so nothing caught this one.
//
// Skipped rather than form-spliced: these pages have diverged from this
// generator in more than the <form>. They also link /css/ar-quote-wizard.css
// and carry the wizard's own script, while this generator emits neither and
// instead injects the shared form's inline validation keyed on
// "#angebotForm" — an element a wizard page does not have. Preserving only
// the form section still left the page with the wrong stylesheet and dead
// script, so the page as a whole is now hand-maintained, which is what it
// already was in practice.
//
// The consequence is deliberate and worth stating: editing these six pages'
// content in scripts/de-content/*.mjs has no effect until someone reconciles
// them. The skip message says so on every run, so that is visible rather
// than silent.
async function dedicatedFormSkipReason(page) {
  const file = join(PUBLIC, page.url.replace(/^\/|\/$/g, ''), 'index.html');
  const html = await readFile(file, 'utf8').catch(() => null);
  if (html === null) {
    throw new Error(
      `${page.url} declares dedicatedForm "${page.dedicatedForm}" but has no published index.html. ` +
        `Author the wizard first, or drop dedicatedForm to let this generator emit the shared form.`
    );
  }
  const nameMatch = html.match(/<form\b[^>]*\bname="([^"]+)"/);
  const actual = nameMatch ? nameMatch[1] : null;
  if (actual !== page.dedicatedForm) {
    throw new Error(
      `${page.url}'s published form is named "${actual ?? '(none)'}", but its data declares dedicatedForm ` +
        `"${page.dedicatedForm}". One of the two is wrong — fix that before running this generator.`
    );
  }
  return `hand-authored ${page.dedicatedForm}`;
}

function branchesFor(page) {
  if (!isSpainPage(page)) return BRANCHES;
  return BRANCHES.map((b) => {
    if (b.value === "Krankenversicherung") {
      return {
        ...b,
        fields: [
          { id: "kv_geburtsdatum", label: "Geburtsdatum der ältesten zu versichernden Person", type: "text", placeholder: "TT.MM.JJJJ" },
          { id: "kv_familie", label: "Familienzusammensetzung", type: "text", placeholder: "z. B.: Ehepaar, 2 Kinder" },
          { id: "kv_wohnort", label: "Wohnort in Spanien", type: "text", placeholder: "z. B.: Palma, Sóller, Andratx" },
          { id: "kv_termin", label: "Gewünschter Versicherungsbeginn", type: "text", placeholder: "z. B.: 1. Januar 2027" },
        ],
      };
    }
    if (b.value === "Hausversicherung") {
      return {
        ...b,
        fields: [
          { id: "hv_lage", label: "Lage der Immobilie", type: "text", placeholder: "z. B.: Palma, Andratx, Sóller, Alcúdia" },
          { id: "hv_typ", label: "Immobilientyp", type: "text", placeholder: "Wohnung / Villa / Finca" },
          { id: "hv_nutzung", label: "Haupt- oder Zweitwohnsitz?", type: "text", placeholder: "Hauptwohnsitz / Zweitwohnsitz / vermietet" },
          { id: "hv_comunidad", label: "Comunidad de propietarios?", type: "text", placeholder: "Ja / Nein / unsicher" },
          { id: "hv_leerstand", label: "Wochen Leerstand im Jahr", type: "text", placeholder: "z. B.: 30" },
          { id: "hv_summe_gebaeude", label: "Wiederaufbauwert Gebäude", type: "text", placeholder: "z. B.: 450.000 €" },
          { id: "hv_pool", label: "Swimmingpool vorhanden?", type: "text", placeholder: "Ja / Nein" },
          { id: "hv_vermietung", label: "Wird vermietet?", type: "text", placeholder: "Nein / Langzeit / Ferienvermietung" },
        ],
      };
    }
    if (b.value === "Autoversicherung") {
      return {
        ...b,
        fields: [
          { id: "av_kennzeichen", label: "Spanisches oder ausländisches Kennzeichen?", type: "text", placeholder: "Spanisch / Deutsch / anderes" },
          { id: "av_fahrzeug", label: "Marke, Modell und Baujahr", type: "text", placeholder: "z. B.: VW Golf 2020" },
          { id: "av_fuehrerschein_datum", label: "Datum der ersten Führerscheinausstellung", type: "text", placeholder: "TT.MM.JJJJ" },
          { id: "av_fuehrerschein_land", label: "Ausstellungsland des Führerscheins", type: "text", placeholder: "z. B.: Deutschland" },
          { id: "av_schadenverlauf", label: "Schadenfreie Jahre bzw. Schadenverlauf", type: "text", placeholder: "z. B.: 8 Jahre schadenfrei" },
          { id: "av_deckung", label: "Gewünschter Deckungsumfang", type: "text", placeholder: "Haftpflicht / Teilkasko / Vollkasko" },
        ],
      };
    }
    return b;
  });
}

function formHtml(page) {
  const selected = page.formBranch;
  const options = branchesFor(page).map(
    (b) => `          <option value="${esc(b.value)}"${b.value === selected ? ' selected' : ''}>${esc(b.label)}</option>`
  ).join('\n');

  return `<section class="section form-section" aria-labelledby="angebot-title" id="angebot">
  <div class="form-shell">
    <h2 id="angebot-title">${page.formHeading || 'Angebot anfragen'}</h2>
    <p class="form-intro">${page.formIntro}</p>
    <p class="form-lang-note">Wir antworten innerhalb von 24 Stunden auf Deutsch.</p>

    <form
      class="lead-form"
      id="angebotForm"
      name="de-angebot-anfrage"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/de/#angebot"
      novalidate>

      <input type="hidden" name="form-name" value="de-angebot-anfrage">
      <input type="hidden" name="source" value="${esc(page.slug)}">
      <input type="hidden" name="source_url" value="">
      <input type="hidden" name="landing_page" value="">
      <input type="hidden" name="subject" value="Neue Anfrage (DE) — ${esc(page.formSubject)}">
      <input type="hidden" name="language" value="de">
      <input type="hidden" name="market" value="${esc(page.formMarket || 'germany')}">
      <input type="hidden" name="country" value="${esc(page.formCountry || 'Portugal')}">
      <input type="hidden" name="product_interest" value="${esc(selected || '')}">
      <p class="visually-hidden"><label>Nicht ausfüllen: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>

      <div class="field">
        <label for="f-name">Name <span class="req" aria-hidden="true">*</span></label>
        <input type="text" id="f-name" name="name" autocomplete="name"
               required aria-required="true" aria-describedby="err-name">
        <span class="field-error" id="err-name" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-email">E-Mail-Adresse <span class="req" aria-hidden="true">*</span></label>
        <input type="email" id="f-email" name="email" autocomplete="email" inputmode="email"
               required aria-required="true" aria-describedby="err-email">
        <span class="field-error" id="err-email" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-telefon">Telefonnummer <span class="req" aria-hidden="true">*</span></label>
        <p class="field-help" id="help-telefon">Wir melden uns schriftlich. Die Telefonnummer benötigt der Versicherer bei der Ausstellung der Police.</p>
        <input type="tel" id="f-telefon" name="telefon" autocomplete="tel" inputmode="tel"
               pattern="[0-9+ ()-]{6,}"
               required aria-required="true" aria-describedby="help-telefon err-telefon">
        <span class="field-error" id="err-telefon" aria-live="polite"></span>
      </div>

      <div class="field">
        <label for="f-firma">Firma</label>
        <input type="text" id="f-firma" name="firma" autocomplete="organization" placeholder="Firma (optional)">
      </div>

      <div class="field">
        <label for="f-typ">Gewünschte Versicherung <span class="req" aria-hidden="true">*</span></label>
        <select id="f-typ" name="versicherungsart" data-branch-select required aria-required="true" aria-describedby="err-typ">
          <option value="" disabled${selected ? '' : ' selected'}>Bitte wählen</option>
${options}
          <option value="Sonstiges">Sonstiges / mehrere Bereiche</option>
        </select>
        <span class="field-error" id="err-typ" aria-live="polite"></span>
      </div>

${branchGroupsHtml(page)}

      <div class="field">
        <label for="f-nachricht">Ihre Nachricht</label>
        <textarea id="f-nachricht" name="nachricht" rows="6"
                  placeholder="${esc(page.formPlaceholder)}"></textarea>
      </div>

      <div class="field consent-block">
        <div class="consent">
          <input type="checkbox" id="f-einwilligung" name="einwilligung" value="ja"
                 required aria-required="true" aria-describedby="err-einwilligung">
          <label for="f-einwilligung">Ich bin damit einverstanden, dass Adler &amp; Rochefort meine Angaben zur Bearbeitung meiner Anfrage nutzt, gemäß der DSGVO und der <a class="text-link" href="/en/privacy-policy" hreflang="en">Datenschutzerklärung</a>.</label>
        </div>
        <span class="field-error" id="err-einwilligung" aria-live="polite"></span>
      </div>

      <button type="submit" class="form-submit" id="angebotSubmit">${page.formCta || 'Angebot anfragen'}</button>
      <p class="form-footnote">Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., registrierter Versicherungsmakler bei der ASF unter Nr. 425591790/3.</p>
    </form>
    <div class="form-success" id="angebotSuccess">
      <div class="tick">&#10003;</div>
      <h3>Vielen Dank!</h3>
      <p>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden schriftlich auf Deutsch bei Ihnen.</p>
    </div>
  </div>
</section>`;
}

/* ─────────────── footer ─────────────── */

const FOOTER = (page) => `<footer class="on-dark">
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Adler &amp; Rochefort</div>
      <p class="footer-brand-desc">${isSpainPage(page) ? "Versicherungsmakler für internationale Mandanten in Spanien — im Dienstleistungsverkehr von der portugiesischen ASF-Registrierung Nr. 425591790/3. Sitz in Lagos." : "Versicherungsmakler für internationale Mandanten an der Algarve, Portugal — bei der ASF registriert unter Nr. 425591790/3. Klare Beratung, in unserem Versichererportfolio."}</p>
      <div class="footer-badge">
        <span class="footer-badge-dot" aria-hidden="true"></span>
        Registrierter Versicherungsmakler — ASF Nr. 425591790/3
      </div>
    </div>
    <div>
      <div class="footer-col-title">Deckung</div>
      <ul class="footer-col-links">
${isSpainPage(page) ? `        <li><a href="/de/krankenversicherung-spanien/">Krankenversicherung</a></li>
        <li><a href="/de/hausversicherung-spanien/">Hausversicherung</a></li>
        <li><a href="/de/autoversicherung-spanien/">Autoversicherung</a></li>
        <li><a href="/de/lebensversicherung-spanien/">Lebensversicherung</a></li>
        <li><a href="/de/vermieterversicherung-spanien/">Vermieterversicherung</a></li>
        <li><a href="/de/private-clients-spanien/">Private Clients</a></li>` : `        <li><a href="/de/krankenversicherung-portugal/">Krankenversicherung</a></li>
        <li><a href="/de/hausversicherung-portugal/">Hausversicherung</a></li>
        <li><a href="/de/autoversicherung-portugal/">Autoversicherung</a></li>
        <li><a href="/de/lebensversicherung-portugal/">Lebensversicherung</a></li>
        <li><a href="/de/private-clients-portugal/">Private Clients</a></li>
        <li><a href="/de/berufshaftpflicht-therapeuten-wellness-portugal/">Therapeuten &amp; Wellness</a></li>`}
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Algarve</div>
      <ul class="footer-col-links">
        <li><a href="/de/versicherung-lagos/">Lagos</a></li>
        <li><a href="/de/versicherung-luz/">Praia da Luz</a></li>
        <li><a href="/de/versicherung-burgau/">Burgau</a></li>
        <li><a href="/de/versicherung-vila-do-bispo/">Vila do Bispo</a></li>
        <li><a href="/de/versicherung-sagres/">Sagres</a></li>
      </ul>
      <div class="footer-col-title" style="margin-top:22px">Madeira</div>
      <ul class="footer-col-links">
        <li><a href="/de/versicherung-madeira/">Madeira</a></li>
      </ul>
      <div class="footer-col-title" style="margin-top:22px">Spanien</div>
      <ul class="footer-col-links">
        <li><a href="/de/versicherung-spanien/">Spanien insgesamt</a></li>
        <li><a href="/de/versicherung-mallorca/">Mallorca</a></li>
        <li><a href="/de/versicherung-costa-del-sol/">Costa del Sol</a></li>
        <li><a href="/de/versicherung-costa-blanca/">Costa Blanca</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Sprachen</div>
${footerLangs(page)}
    </div>
    <div>
      <div class="footer-col-title">Kontakt</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a></li>
        <li><a href="tel:+351928226570">+351 928 226 570</a></li>
        <li><span>Varandas de São João 4<br>8600-324 Lagos, Algarve, Portugal</span></li>
        <li><a href="#angebot">Angebot anfragen</a></li>
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
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Adler &amp; Rochefort · Alle Rechte vorbehalten</div>
    <div class="footer-platforms">
      <a href="https://mycovervault.com" class="footer-platform-link" target="_blank" rel="noopener noreferrer">Zu MyCoverVault</a>
    </div>
    <div class="footer-legal">
      <a href="/en/privacy-policy" hreflang="en">Datenschutz</a>
      <a href="/en/terms-and-conditions" hreflang="en">AGB</a>
      ${livroLink('Beschwerdebuch')}
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">ASF-Hinweisgeberkanal</a>
    </div>
  </div>
  <div class="footer-regulatory">
    <p>Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda.</p>
    <p>Ownizo, Unipessoal Lda. ist bei der portugiesischen Aufsichtsbehörde für Versicherungen und Pensionsfonds (ASF) als Versicherungsmakler unter Nr. 425591790/3 registriert. Wir beraten innerhalb unseres Versichererportfolios.</p>
    <p>Diese Seite ist eine allgemeine Information, keine individuelle Beratung. Welche Deckung für Sie geeignet ist, hängt von Ihrer Situation und den Bedingungen der jeweiligen Police ab.</p>
  </div>
</footer>`;

const FORM_SCRIPT = `<script>
  /*
   * Client-side validation and attribution for the DE quote form. Plain
   * Netlify Forms POST — works without JavaScript, this only replaces the
   * generic browser bubbles with German messages next to the offending field,
   * and stamps the two attribution fields the rest of the site already uses
   * (source_url, landing_page — see ar-analytics-tracker.js / ar-quote-form.js)
   * without adding a second analytics stack.
   */
  (function () {
    "use strict";
    var form = document.getElementById("angebotForm");
    if (!form) return;

    var submitBtn = document.getElementById("angebotSubmit");
    var EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[a-z]{2,}$/i;
    var PHONE_RE = /^[+]?[0-9 ()-]{6,}$/;

    var RULES = [
      { id: "f-name", error: "err-name", validate: function (v) {
          if (!v) return "Bitte geben Sie Ihren Namen ein.";
          if (v.length < 2) return "Bitte geben Sie Ihren vollständigen Namen ein.";
          return null; } },
      { id: "f-email", error: "err-email", validate: function (v) {
          if (!v) return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
          if (!EMAIL_RE.test(v)) return "Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.";
          return null; } },
      { id: "f-telefon", error: "err-telefon", validate: function (v) {
          if (!v) return "Bitte geben Sie Ihre Telefonnummer ein.";
          if (!PHONE_RE.test(v)) return "Bitte geben Sie eine gültige Telefonnummer ein. Ziffern, Leerzeichen und ein + am Anfang sind erlaubt.";
          return null; } },
      { id: "f-typ", error: "err-typ", validate: function (v) {
          if (!v) return "Bitte wählen Sie die gewünschte Versicherung.";
          return null; } },
      { id: "f-einwilligung", error: "err-einwilligung", checkbox: true, validate: function (checked) {
          if (!checked) return "Bitte bestätigen Sie dies, damit wir Ihre Anfrage bearbeiten dürfen.";
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

    var typeSelect = document.getElementById("f-typ");
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
      submitBtn.textContent = "Wird gesendet…";
      var data = new URLSearchParams(new FormData(form)).toString();
      fetch("/de/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      }).then(function () {
        form.style.display = "none";
        var success = document.getElementById("angebotSuccess");
        if (success) success.classList.add("show");
        if (window.gtag) {
          window.gtag("event", "generate_lead", { form_name: "de_angebot_anfrage", market: "germany" });
          window.gtag("event", "conversion", { send_to: "AW-18361722533/HxH6CKqa1uEcEKXNxrNE", value: 1.0, currency: "EUR" });
        }
      }).catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        alert("Beim Senden ist ein Problem aufgetreten. Bitte rufen Sie uns an: +351 928 226 570");
      });
    });
  })();
</script>`;

const COOKIE_BANNER = `<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner-content">
    <div class="cookie-banner-text">
      <strong>Diese Website verwendet Cookies</strong>
      <p>Wir verwenden Cookies, um Ihr Nutzungserlebnis zu verbessern. Mit der weiteren Nutzung stimmen Sie unserer <a href="/en/privacy-policy">Datenschutzerklärung</a> zu.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="respondCookies(false)">Ablehnen</button>
      <button class="cookie-btn cookie-btn-accept" onclick="respondCookies(true)">Akzeptieren</button>
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

function renderPage(page, formSection) {
  const related = page.related?.length
    ? `<section class="section plain" aria-labelledby="weiterlesen-title">
  <div class="container narrow">
    <h2 id="weiterlesen-title">Weiterlesen</h2>
    <ul class="related">
${page.related.map((r) => `      <li><a class="text-link" href="${esc(r.url)}"${r.hreflang ? ` hreflang="${r.hreflang}"` : ''}>${r.label}</a></li>`).join('\n')}
    </ul>
  </div>
</section>`
    : '';

  const quote = page.pullquote
    ? `<section class="pullquote-band" aria-label="Zitat">
  <blockquote class="pullquote">
    ${page.pullquote}
    <cite>Adler &amp; Rochefort · Lagos, Algarve</cite>
  </blockquote>
</section>`
    : '';

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#17243D">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="keywords" content="${esc(page.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Hugo Gonçalves">
${page.geo ? `<meta name="geo.region" content="${esc(page.geo.region)}">
<meta name="geo.placename" content="${esc(page.geo.placename)}">
` : ''}<link rel="canonical" href="${ORIGIN}${page.url}">
${hreflangTags(page)}<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<meta property="og:type" content="${page.isHub ? 'website' : 'article'}">
<meta property="og:url" content="${ORIGIN}${page.url}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Adler &amp; Rochefort">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ORIGIN}/images/og-image-adlerrochefort.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

<script type="application/ld+json">
${jsonLd(page)}
</script>

<link rel="stylesheet" href="/css/ar-de.css">
<link rel="stylesheet" href="/css/ar-chrome.css">
${LIVRO_CSS}
<!-- Google tag (gtag.js) - Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18361722533"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18361722533');
</script>
${LANGSEL_CSS_LINK}
</head>
<body>

<a class="skip-link" href="#main">Direkt zum Inhalt</a>

<div class="asf-top-bar on-dark">Adler &amp; Rochefort — registrierter Versicherungsmakler bei der ASF Nr. 425591790/3 · ${isSpainPage(page) ? "Dienstleistungsverkehr Spanien" : "Lagos, Algarve"}</div>

<header class="site-header">
${swapLangSwitcher(DE_NAV, langSwitcher(page))}
</header>

${DE_MOBILE || ''}

${breadcrumbHtml(page)}

<main id="main">

<article>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <span class="eyebrow">${page.eyebrow}</span>
    <h1 id="hero-title">${page.h1}</h1>
    <p class="hero-subtitle">${page.standfirst}</p>
    <p class="hero-meta">${page.heroMeta}</p>
    <a href="#angebot" class="btn-cta">${page.heroCta || 'Angebot anfragen'} <svg viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg></a>${page.heroCtaSecondary ? `<a href="#angebot" class="btn-cta-secondary">${page.heroCtaSecondary}</a>` : ''}
  </div>
</section>

${langPolicyHtml()}

${page.sections}

${quote}

${faqHtml(page)}

${teamHtml(page)}

${related}

${formSection}
</article>

</main>

${FOOTER(page)}

<div class="mobile-cta">
  <a href="#angebot">Angebot anfragen</a>
</div>

${FORM_SCRIPT}
<script defer src="/js/lead-branch-fields.js"></script>
<script defer src="/js/ar-analytics-tracker.js"></script>
${COOKIE_BANNER}
${NAV_SCRIPT}
${LIVRO_SCRIPT}
${LANGSEL_SCRIPT_TAG}
</body>
</html>
`;
}

/* ─────────────── write ─────────────── */

let written = 0;
const skipped = [];
const only = process.argv.filter((a) => a.startsWith('--only=')).map((a) => a.slice(7));
for (const page of PAGES) {
  if (only.length && !only.includes(page.slug)) continue;
  // Checked before anything is written: a page that declares dedicatedForm
  // is never overwritten, and an inconsistent declaration throws rather
  // than letting the run continue past the page the guard protects.
  if (page.url === '/de/') {
    skipped.push(`${page.url} — hand-authored EN-parity homepage, not regenerated`);
    continue;
  }
  if (page.dedicatedForm) {
    skipped.push(`${page.url} — ${await dedicatedFormSkipReason(page)}`);
    continue;
  }
  const dir = join(PUBLIC, page.url.replace(/^\/|\/$/g, ''));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), renderPage(page, formHtml(page)), 'utf8');
  written++;
  console.log(`  ✓ ${page.url}`);
}
if (skipped.length) {
  console.log(`\nSkipped ${skipped.length} page(s) with a hand-authored form — not regenerated, content edits to their scripts/de-content/*.mjs entries will NOT appear until they are reconciled by hand:`);
  for (const line of skipped) console.log(`  – ${line}`);
}
console.log(`\n${written} German pages written.`);
