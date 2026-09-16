#!/usr/bin/env node
/**
 * Structural regression test: a page that serves a quote-wizard form must
 * declare a form-name that (a) matches its own ramo and (b) is not shared
 * with any other page on the site, and every field the wizard treats as
 * required must actually live inside that specific <form> — not merely
 * exist somewhere on the page.
 *
 * Written after a production incident on /en/car-insurance-portugal/: the
 * page rendered the wizard correctly, but a real submission arrived shaped
 * like an old, pre-wizard form. Root cause: the wizard's form-name,
 * "car-insurance-quote", was also the form-name of a much simpler CTA
 * embedded at the bottom of five EN blog articles — a pre-existing site
 * convention (funnel a lighter lead into the same Netlify Forms bucket as
 * the page it promotes) that was harmless while both forms asked for a
 * similar handful of fields, and stopped being harmless the moment the
 * wizard's field set diverged from it. Nothing before this file checked
 * that a wizard page's form-name was actually exclusive to it — form-
 * payload-test.mjs and wizard-required-fields-test.mjs both load the
 * wizard page directly and would have shown the wizard's own fields either
 * way, blind to the fact that a *different* page could submit under the
 * same name.
 *
 * Two things are checked per entry in PAGES, using only string/DOM
 * inspection (no scripts are run — this is about the static markup, not
 * runtime behaviour, which the other two wizard-*-test.mjs files already
 * cover):
 *
 *   1. Form-name exclusivity and correctness — `expectedFormName` must
 *      match the <form>'s own `name` attribute (and its hidden `form-name`
 *      input) exactly, and grepping name="<expectedFormName>" across every
 *      other HTML file under public/ must turn up nothing. A mismatch here
 *      means either a typo in the page (wrong ramo's form-name) or a
 *      collision with something else on the site.
 *
 *   2. Required-field completeness — every name in `requiredFields` has to
 *      resolve to an element that is (a) present on the page and (b) a
 *      descendant of the one <form> matching `expectedFormName`, not of
 *      some other form or orphaned outside any form. Catches a field moved
 *      outside the form by a future edit, or a required field silently
 *      dropped from a page's wizard markup while PAGES's own list (which
 *      exists to catch exactly that) is left unchanged — either one would
 *      have this test crash with "field X not found in the expected
 *      form", not open a false-positive PASS.
 *
 * Requires jsdom, deliberately not a dependency of this repository — same
 * ad hoc install as scripts/form-payload-test.mjs:
 *   npm install --no-save jsdom
 *
 * Usage: node scripts/wizard-form-integrity-test.mjs
 */
import { readFile, readdir } from "node:fs/promises";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");

let JSDOM;
try {
  const require = createRequire(import.meta.url);
  ({ JSDOM } = require("jsdom"));
} catch {
  try {
    ({ JSDOM } = await import("/tmp/domtest/node_modules/jsdom/lib/api.js"));
  } catch {
    console.error("jsdom not found. Run:  npm install --no-save jsdom");
    process.exit(2);
  }
}

// Every page a wizard form currently ships on, its expected (ramo-correct)
// form-name, and the full list of field names the wizard treats as
// required — kept in sync by hand with each page's own markup on purpose:
// a mismatch here is exactly what this test exists to surface, not
// something to paper over by deriving the list from the page itself.
const PAGES = [
  {
    label: "PT /seguros/auto/",
    path: "seguros/auto/index.html",
    expectedFormName: "seguro-auto",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "matricula", "data_carta", "data_inicio", "rgpd",
    ],
  },
  {
    label: "EN /en/car-insurance-portugal/",
    path: "en/car-insurance-portugal/index.html",
    expectedFormName: "car-insurance-quote-wizard",
    requiredFields: [
      "name", "email", "phone", "nif", "date_of_birth", "postcode", "address", "town",
      "nationality_name", "tax_resident_pt", "matricula", "data_carta", "start_date", "rgpd",
    ],
  },
  // Especificação v2, "restantes línguas" Parte 2 — same shared field
  // names as PT/EN Auto (nome/nif/matricula/data_carta/…), labels in
  // German.
  {
    label: "DE /de/autoversicherung-portugal/",
    path: "de/autoversicherung-portugal/index.html",
    expectedFormName: "de-autoversicherung-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "matricula", "data_carta", "data_inicio", "rgpd",
    ],
  },
  {
    label: "PT /seguros/habitacao/",
    path: "seguros/habitacao/index.html",
    expectedFormName: "cotacao-habitacao",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal", "regime_ocupacao",
      "al_regime", "ano_construcao", "area_bruta", "casas_banho", "obras_ano",
      "obras_descricao", "capital_edificio", "capital_conteudo", "data_inicio", "rgpd",
    ],
  },
  // Especificação v2, "restantes línguas" Parte C — same shared field
  // names as PT/EN/NL Habitação above, labels in German.
  {
    label: "DE /de/hausversicherung-portugal/",
    path: "de/hausversicherung-portugal/index.html",
    expectedFormName: "de-hausversicherung-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal", "regime_ocupacao",
      "al_regime", "ano_construcao", "area_bruta", "casas_banho", "obras_ano",
      "obras_descricao", "capital_edificio", "capital_conteudo", "data_inicio", "rgpd",
    ],
  },
  {
    label: "EN /en/home-insurance-quote/",
    path: "en/home-insurance-quote/index.html",
    expectedFormName: "home-insurance-quote-wizard",
    requiredFields: [
      "name", "email", "phone", "nif", "date_of_birth", "postcode", "address", "town",
      "nationality_name", "tax_resident_pt", "regime_ocupacao", "al_regime", "ano_construcao",
      "area_bruta", "casas_banho", "obras_ano", "obras_descricao", "capital_edificio",
      "capital_conteudo", "start_date", "rgpd",
    ],
  },
  {
    label: "PT /seguros/responsabilidade-civil-profissional/",
    path: "seguros/responsabilidade-civil-profissional/index.html",
    expectedFormName: "cotacao-rc-profissional",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "faturacao_anual", "data_inicio", "rgpd",
    ],
  },
  // Saúde (Especificação v2, Fase 2 C4) — only the static, named fields go
  // here. The "pessoa segura" repeater's own fields (nome/data_nascimento/
  // nif per block) carry no `name` attribute on purpose (public/js/
  // quote-health-persons.js's own comment explains why) and don't exist in
  // the markup at all until that script runs — this file never runs
  // scripts (see the top comment), so they can't be listed or checked here.
  // scripts/wizard-required-fields-test.mjs covers them instead, at
  // runtime, including that each one blocks submission when left empty.
  {
    label: "PT /seguros/saude/",
    path: "seguros/saude/index.html",
    expectedFormName: "cotacao-saude",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "data_inicio", "rgpd",
    ],
  },
  {
    label: "EN /en/health-insurance-quote/",
    path: "en/health-insurance-quote/index.html",
    expectedFormName: "health-insurance-quote-wizard",
    requiredFields: [
      "name", "email", "phone", "nif", "date_of_birth", "postcode", "address", "town",
      "nationality_name", "tax_resident_pt", "start_date", "rgpd",
    ],
  },
  // Especificação v2, "restantes línguas" Parte C — same shared field
  // names as PT/EN Saúde above (the "pessoa segura" repeater's own fields
  // carry no `name` attribute — see the comment on the PT/EN entries'
  // equivalent, not repeated here).
  {
    label: "DE /de/krankenversicherung-portugal/",
    path: "de/krankenversicherung-portugal/index.html",
    expectedFormName: "de-krankenversicherung-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "data_inicio", "rgpd",
    ],
  },
  // RC Profissional's dedicated EN page (Especificação v2, Fase 2 C2) — same
  // field set as the PT wizard above, no persons repeater.
  {
    label: "EN /en/professional-liability-insurance-portugal/",
    path: "en/professional-liability-insurance-portugal/index.html",
    expectedFormName: "professional-liability-quote-wizard",
    requiredFields: [
      "name", "email", "phone", "nif", "date_of_birth", "postcode", "address", "town",
      "nationality_name", "tax_resident_pt", "faturacao_anual", "start_date", "rgpd",
    ],
  },
  // Especificação v2, Parte C — RC Profissional's new dedicated DE page, built
  // from the generic "Unternehmen" branch (no dedicated DE page existed for
  // this ramo before). Same shared field names as PT's dedicated wizard.
  {
    label: "DE /de/berufshaftpflicht-freiberufler-portugal/",
    path: "de/berufshaftpflicht-freiberufler-portugal/index.html",
    expectedFormName: "de-berufshaftpflicht-freiberufler-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "faturacao_anual", "data_inicio", "rgpd",
    ],
  },
  // Especificação v2, Parte 2 continuação (NL) — first NL page converted
  // from the shared nl-offerte-aanvraag branch-select form to its own
  // exclusive wizard. Same shared field names as the other Habitação pages.
  {
    label: "NL /nl/woonverzekering-portugal/",
    path: "nl/woonverzekering-portugal/index.html",
    expectedFormName: "nl-woonverzekering-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal", "regime_ocupacao",
      "al_regime", "ano_construcao", "area_bruta", "casas_banho", "obras_ano",
      "obras_descricao", "capital_edificio", "capital_conteudo", "data_inicio", "rgpd",
    ],
  },
  // Especificação v2, Parte 2 continuação (NL) — same field set as PT/EN/DE
  // Saúde above (the "pessoa segura" repeater's own fields carry no `name`
  // attribute — see the comment on those entries, not repeated here).
  {
    label: "NL /nl/zorgverzekering-portugal/",
    path: "nl/zorgverzekering-portugal/index.html",
    expectedFormName: "nl-zorgverzekering-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "data_inicio", "rgpd",
    ],
  },
  // Especificação v2, Parte 2 continuação (NL) — third and final "existing
  // dedicated page" NL conversion (Auto has no dedicated NL page, out of
  // scope by design).
  {
    label: "NL /nl/zzp-beroepsaansprakelijkheid-portugal/",
    path: "nl/zzp-beroepsaansprakelijkheid-portugal/index.html",
    expectedFormName: "nl-zzp-beroepsaansprakelijkheid-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "faturacao_anual", "data_inicio", "rgpd",
    ],
  },
  // Especificação v2, Parte D2 — Bedrijfsverzekering NL, built from
  // scratch. nome_empresa/nif_empresa carry a real HTML `required`
  // attribute (checked here); the three ramo_* checkboxes deliberately do
  // not (their "at least one" rule is a data-required-group, not a plain
  // required — see wizard-required-fields-test.mjs for the runtime check).
  {
    label: "NL /nl/bedrijfsverzekering-portugal/",
    path: "nl/bedrijfsverzekering-portugal/index.html",
    expectedFormName: "nl-bedrijfsverzekering-wizard",
    requiredFields: [
      "nome", "nif", "data_nascimento", "morada", "localidade", "codigo_postal",
      "telefone", "email", "nacionalidade_nome", "residente_fiscal",
      "nome_empresa", "nif_empresa", "data_inicio", "rgpd",
    ],
  },
];

/** Every .html file under public/, as a path relative to public/ — walked
 *  once and cached, since the exclusivity check below runs it once per
 *  PAGES entry. */
async function allHtmlFiles() {
  const out = [];
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".html")) out.push(full);
    }
  }
  await walk(PUBLIC);
  return out;
}

let failures = 0;
const files = await allHtmlFiles();

for (const page of PAGES) {
  const fullPath = join(PUBLIC, page.path);
  const html = await readFile(fullPath, "utf8");
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const form = doc.querySelector(`form[name="${page.expectedFormName}"]`);
  if (!form) {
    failures++;
    const anyWizardForm = doc.querySelector("form[data-wizard]");
    console.log(
      `\n${page.label} — FAILED: no <form name="${page.expectedFormName}">` +
        (anyWizardForm ? ` (the page's wizard form is actually named "${anyWizardForm.getAttribute("name")}")` : " (no wizard form found on the page at all)")
    );
    continue;
  }

  const hiddenFormName = form.querySelector('input[name="form-name"]');
  if (!hiddenFormName || hiddenFormName.value !== page.expectedFormName) {
    failures++;
    console.log(
      `\n${page.label} — FAILED: hidden form-name input is "${hiddenFormName ? hiddenFormName.value : "(missing)"}", expected "${page.expectedFormName}" — Netlify registers the form under the <form> tag's own name attribute, but the two have to agree or the wrong value ends up in every submission's own "form-name" field.`
    );
  }

  // Exclusivity: no OTHER file on the site may declare the same form-name.
  // A plain string search is enough and much faster than parsing every one
  // of ~450 files — this only needs to know whether the literal name
  // attribute value appears, not where.
  const needle = `name="${page.expectedFormName}"`;
  const collisions = [];
  for (const file of files) {
    if (file === fullPath) continue;
    const contents = await readFile(file, "utf8");
    if (contents.includes(needle)) collisions.push(relative(PUBLIC, file));
  }
  if (collisions.length) {
    failures++;
    console.log(
      `\n${page.label} — FAILED: "${page.expectedFormName}" is not exclusive to this page — also declared in:\n` +
        collisions.map((f) => `    /${f}`).join("\n")
    );
  }

  // Every required field must be inside THIS form, not merely on the page.
  const missing = [];
  const misplaced = [];
  for (const name of page.requiredFields) {
    const onPage = doc.querySelector(`[name="${name}"]`);
    if (!onPage) {
      missing.push(name);
      continue;
    }
    if (!form.contains(onPage)) misplaced.push(name);
  }
  if (missing.length) {
    failures++;
    console.log(`\n${page.label} — FAILED: required field(s) not found anywhere on the page: ${missing.join(", ")}`);
  }
  if (misplaced.length) {
    failures++;
    console.log(
      `\n${page.label} — FAILED: required field(s) exist on the page but outside <form name="${page.expectedFormName}">: ${misplaced.join(", ")}`
    );
  }

  if (form && (!hiddenFormName || hiddenFormName.value === page.expectedFormName) && !collisions.length && !missing.length && !misplaced.length) {
    console.log(`${page.label} — OK ("${page.expectedFormName}" exclusive sitewide, ${page.requiredFields.length} required field(s) all inside the right form)`);
  }
}

console.log(`\n${failures ? `${failures} failure(s)` : "all checks passed"}`);
process.exit(failures ? 1 : 0);
