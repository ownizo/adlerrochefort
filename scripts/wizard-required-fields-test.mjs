#!/usr/bin/env node
/**
 * Regression test: no `required` field in a quote-wizard form (Especificação
 * dos Formulários de Cotação v2) may ever reach a real submission while
 * empty — in any ramo, on any step.
 *
 * Written after a production incident on /seguros/auto/: a real, recorded
 * Netlify Forms submission had several required fields blank (data de
 * nascimento, morada, localidade, nacionalidade, residente fiscal, data de
 * início, and an unticked RGPD checkbox). Root cause, confirmed by direct
 * testing against the live page: quote-wizard.js's goNext() treated a
 * missing window.ArQuoteForm as "nothing to validate" (`bad = []` when the
 * object is falsy) rather than "cannot validate, so refuse to advance" — if
 * ar-quote-form.js ever fails to finish wiring a form for any reason, every
 * required field on every step silently becomes optional. See
 * public/js/quote-wizard.js's own comments on goNext() and the submit guard
 * for the fix; this file is the regression test that should have caught it
 * and didn't, because no existing test drove the wizard's actual step/submit
 * event flow — form-payload-test.mjs proves a *filled* payload survives
 * serialisation, not that an *empty* one gets refused.
 *
 * Two things are checked per page in PAGES, against the real files (no
 * reimplementation of the logic under test):
 *
 *   1. Normal path — one required field at a time is left empty/unchecked,
 *      everything else is filled with known-good values, and the wizard is
 *      driven exactly as a visitor would (real clicks on the real
 *      data-wizard-next/submit buttons, dispatched as real DOM events, so
 *      whatever listeners actually attached are what run). Reaching a real
 *      fetch() call is a failure — every one of these must be refused
 *      somewhere along the way. A fully-filled run (no field withheld) is
 *      also driven as a positive control: if that one doesn't reach
 *      fetch(), the harness itself is broken and every other result here is
 *      meaningless.
 *
 *   2. Degraded path — the actual regression: ar-quote-form.js is not
 *      loaded at all, exactly the state a failed deferred <script> leaves
 *      behind (deleting window.ArQuoteForm after wire() already ran is not
 *      the same thing — its submit listener is a closure over its own
 *      `validate`, not a lookup of the global, so it keeps working fine
 *      regardless of what happens to the global afterward). A fully-filled
 *      form must still be refused (the submit guard's job), and clicking
 *      "Seguinte" on an empty first step must not advance past it
 *      (goNext()'s job).
 *
 * Covers every page with a quote-wizard form (Auto: Fase 1; Habitação:
 * Fase 2 B1 — the two conditional-field mechanisms that phase adds,
 * public/js/lead-branch-fields.js and public/js/quote-field-toggle.js, are
 * activated via each page's `activateIds` before values are applied, or
 * their own required fields would stay `disabled` and untestable).
 * Extensible by design — add a PAGES entry once Profissional/RC and Saúde
 * exist, rather than writing a new test file per ramo.
 *
 *   3. Reload mid-fill — the third bug the same incident surfaced: a
 *      visitor fills step 1 (PAGES' `firstBatch`), the page reloads (a
 *      fresh JSDOM instance with the same localStorage draft already
 *      present, since restoreDraft() runs at page-load time either way),
 *      they complete the rest, and submit. The hidden nationality ISO-code
 *      field — populated only by an input/change listener in
 *      quote-nationality.js, never by restoreDraft() setting .value
 *      directly — has to come out non-empty on both ends: right after
 *      restore, and in the final submitted payload.
 *
 * Requires jsdom, deliberately not a dependency of this repository — same
 * ad hoc install as scripts/form-payload-test.mjs:
 *   npm install --no-save jsdom
 *
 * Usage: node scripts/wizard-required-fields-test.mjs
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

let JSDOM;
try {
  const require = createRequire(import.meta.url);
  ({ JSDOM } = require('jsdom'));
} catch {
  try {
    ({ JSDOM } = await import('/tmp/domtest/node_modules/jsdom/lib/api.js'));
  } catch {
    console.error('jsdom not found. Run:  npm install --no-save jsdom');
    process.exit(2);
  }
}

const scriptCache = new Map();
async function loadScript(name) {
  if (!scriptCache.has(name)) {
    scriptCache.set(name, await readFile(join(PUBLIC, 'js', name), 'utf8'));
  }
  return scriptCache.get(name);
}

// Every page a wizard form currently ships on, the exact scripts it loads
// (in load order — kept explicit rather than parsed from the page's own
// <script> tags, so a page that forgets to load one fails this test loudly
// instead of silently testing less than it should), and a complete set of
// known-good values for every one of its required fields. `rgpd: true`
// means "tick the checkbox"; every other value is a literal .value.
const PAGES = [
  {
    label: 'PT /seguros/auto/',
    path: 'seguros/auto/index.html',
    url: 'https://adlerrochefort.com/seguros/auto/',
    formName: 'seguro-auto',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    // Step 1 (transversal) — the batch a visitor fills before the page
    // might get reloaded, used by the "reload mid-fill" scenario below.
    // Deliberately includes nacionalidade_nome, the field that exposed the
    // third production bug.
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hugo Teste',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+351 910000000',
      email: 'teste@example.com',
      nacionalidade_nome: 'Portugal',
      residente_fiscal: 'sim',
      matricula: 'AA-00-AA',
      data_carta: '2005-06-15',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    label: 'EN /en/car-insurance-portugal/',
    path: 'en/car-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/car-insurance-portugal/',
    formName: 'car-insurance-quote-wizard',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'name', 'email', 'phone', 'nif', 'date_of_birth',
      'postcode', 'address', 'town', 'nationality_name', 'tax_resident_pt',
    ],
    values: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+44 7700 900000',
      nif: '501442600',
      date_of_birth: '1985-03-15',
      postcode: '8600-100',
      address: '10 Example Street',
      town: 'Lagos',
      nationality_name: 'United Kingdom',
      tax_resident_pt: 'yes',
      matricula: 'AA-00-AA',
      data_carta: '2005-06-15',
      start_date: '2026-10-01',
      rgpd: true,
    },
  },
  // Especificação v2, "restantes línguas" Parte 2 — same shared field
  // names as PT/EN Auto above, first non-PT-non-EN wizard.
  {
    label: 'DE /de/autoversicherung-portugal/',
    path: 'de/autoversicherung-portugal/index.html',
    url: 'https://adlerrochefort.com/de/autoversicherung-portugal/',
    formName: 'de-autoversicherung-wizard',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hans Müller',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+49 30 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Deutschland',
      residente_fiscal: 'sim',
      matricula: 'AA-00-AA',
      data_carta: '2005-06-15',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    label: 'PT /seguros/habitacao/',
    path: 'seguros/habitacao/index.html',
    url: 'https://adlerrochefort.com/seguros/habitacao/',
    formName: 'cotacao-habitacao',
    scripts: [
      'quote-validators.js',
      'ar-quote-form.js',
      'quote-nationality.js',
      'lead-branch-fields.js',
      'quote-field-toggle.js',
      'quote-wizard.js',
    ],
    // Both conditional groups (regime → AL-only field, obras checkbox →
    // year+description) are activated by `activateIds` below before values
    // are applied, so al_regime/obras_ano/obras_descricao are enabled —
    // otherwise they'd be `disabled` and this test couldn't tell "correctly
    // exempt because inactive" apart from "wrongly exempt because broken".
    activateIds: ['hab-obras-check'],
    values: {
      nome: 'Hugo Teste',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+351 910000000',
      email: 'teste@example.com',
      nacionalidade_nome: 'Portugal',
      residente_fiscal: 'sim',
      regime_ocupacao: 'alojamento_local',
      al_regime: 'tempo_inteiro',
      ano_construcao: '1990',
      area_bruta: '150',
      casas_banho: '2',
      obras_ano: '2015',
      obras_descricao: 'Renovação completa da cozinha e casas de banho',
      capital_edificio: '200000',
      capital_conteudo: '40000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  // Especificação v2, "restantes línguas" Parte C — same shared field
  // names as PT/EN/NL Habitação above, first non-PT-non-EN Habitação
  // wizard.
  {
    label: 'DE /de/hausversicherung-portugal/',
    path: 'de/hausversicherung-portugal/index.html',
    url: 'https://adlerrochefort.com/de/hausversicherung-portugal/',
    formName: 'de-hausversicherung-wizard',
    scripts: [
      'quote-validators.js',
      'ar-quote-form.js',
      'quote-nationality.js',
      'lead-branch-fields.js',
      'quote-field-toggle.js',
      'quote-wizard.js',
    ],
    activateIds: ['de-hab-obras-check'],
    values: {
      nome: 'Hans Müller',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+49 30 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Deutschland',
      residente_fiscal: 'sim',
      regime_ocupacao: 'alojamento_local',
      al_regime: 'tempo_inteiro',
      ano_construcao: '1990',
      area_bruta: '150',
      casas_banho: '2',
      obras_ano: '2015',
      obras_descricao: 'Renovação completa da cozinha e casas de banho',
      capital_edificio: '200000',
      capital_conteudo: '40000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    label: 'EN /en/home-insurance-quote/',
    path: 'en/home-insurance-quote/index.html',
    url: 'https://adlerrochefort.com/en/home-insurance-quote/',
    formName: 'home-insurance-quote-wizard',
    scripts: [
      'quote-validators.js',
      'ar-quote-form.js',
      'quote-nationality.js',
      'lead-branch-fields.js',
      'quote-field-toggle.js',
      'quote-wizard.js',
    ],
    activateIds: ['q-renovation-check'],
    values: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+44 7700 900000',
      nif: '501442600',
      date_of_birth: '1985-03-15',
      postcode: '8600-100',
      address: '10 Example Street',
      town: 'Lagos',
      nationality_name: 'United Kingdom',
      tax_resident_pt: 'yes',
      regime_ocupacao: 'alojamento_local',
      al_regime: 'tempo_inteiro',
      ano_construcao: '1990',
      area_bruta: '150',
      casas_banho: '2',
      obras_ano: '2015',
      obras_descricao: 'Full kitchen and bathroom renovation',
      capital_edificio: '200000',
      capital_conteudo: '40000',
      start_date: '2026-10-01',
      rgpd: true,
    },
  },
  {
    // Especificação v2, Parte 2 continuação (NL) — first NL page converted
    // from the shared nl-offerte-aanvraag branch-select form to its own
    // exclusive wizard.
    label: 'NL /nl/woonverzekering-portugal/',
    path: 'nl/woonverzekering-portugal/index.html',
    url: 'https://adlerrochefort.com/nl/woonverzekering-portugal/',
    formName: 'nl-woonverzekering-wizard',
    scripts: [
      'lead-branch-fields.js',
      'quote-validators.js',
      'ar-quote-form.js',
      'quote-nationality.js',
      'quote-field-toggle.js',
      'quote-wizard.js',
    ],
    activateIds: ['nl-hab-obras-check'],
    values: {
      nome: 'Jan de Vries',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+31 6 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Nederland',
      residente_fiscal: 'sim',
      regime_ocupacao: 'alojamento_local',
      al_regime: 'tempo_inteiro',
      ano_construcao: '1998',
      area_bruta: '140',
      casas_banho: '2',
      obras_ano: '2020',
      obras_descricao: 'Nieuw dak en geïsoleerde ramen.',
      capital_edificio: '250000',
      capital_conteudo: '40000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    label: 'PT /seguros/responsabilidade-civil-profissional/',
    path: 'seguros/responsabilidade-civil-profissional/index.html',
    url: 'https://adlerrochefort.com/seguros/responsabilidade-civil-profissional/',
    formName: 'cotacao-rc-profissional',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hugo Teste',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+351 910000000',
      email: 'teste@example.com',
      nacionalidade_nome: 'Portugal',
      residente_fiscal: 'sim',
      faturacao_anual: '85000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    // Especificação v2, Fase 2 C2 — RC Profissional's dedicated EN page.
    // Same field set as the PT wizard above (no `empresa`/profession field,
    // no persons repeater), translated field names, matching the EN health
    // wizard's own naming convention (name/email/phone/nif/date_of_birth/...).
    label: 'EN /en/professional-liability-insurance-portugal/',
    path: 'en/professional-liability-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/professional-liability-insurance-portugal/',
    formName: 'professional-liability-quote-wizard',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'name', 'email', 'phone', 'nif', 'date_of_birth',
      'postcode', 'address', 'town', 'nationality_name', 'tax_resident_pt',
    ],
    values: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+44 7700 900000',
      nif: '501442600',
      date_of_birth: '1985-03-15',
      postcode: '8600-100',
      address: '10 Example Street',
      town: 'Lagos',
      nationality_name: 'United Kingdom',
      tax_resident_pt: 'yes',
      faturacao_anual: '85000',
      start_date: '2026-10-01',
      rgpd: true,
    },
  },
  {
    // Especificação v2, Parte C — RC Profissional's new dedicated DE page,
    // built from the generic "Unternehmen" branch (no dedicated DE page
    // existed for this ramo before). Same field set as the PT/EN wizards
    // above, shared field names like the other DE wizards.
    label: 'DE /de/berufshaftpflicht-freiberufler-portugal/',
    path: 'de/berufshaftpflicht-freiberufler-portugal/index.html',
    url: 'https://adlerrochefort.com/de/berufshaftpflicht-freiberufler-portugal/',
    formName: 'de-berufshaftpflicht-freiberufler-wizard',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hans Müller',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+49 30 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Deutschland',
      residente_fiscal: 'sim',
      faturacao_anual: '85000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    label: 'PT /seguros/saude/',
    path: 'seguros/saude/index.html',
    url: 'https://adlerrochefort.com/seguros/saude/',
    formName: 'cotacao-saude',
    expectPersonNameLabel: 'Nome completo',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js', 'quote-health-persons.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hugo Teste',
      nif: '501442600',
      // ≥18 required here (birth-date-adult, tomador-only) — deliberately
      // not the case for personValues.data_nascimento below.
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+351 910000000',
      email: 'teste@example.com',
      nacionalidade_nome: 'Portugal',
      residente_fiscal: 'sim',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
    // The one "pessoa segura" block quote-health-persons.js's own init()
    // already creates before this test ever touches the DOM — no minimum
    // age on purpose (a child's date of birth), unlike the tomador's field
    // above.
    personValues: {
      nome: 'Maria Teste',
      data_nascimento: '2015-06-01',
      nif: '200000012',
    },
  },
  {
    label: 'EN /en/health-insurance-quote/',
    path: 'en/health-insurance-quote/index.html',
    url: 'https://adlerrochefort.com/en/health-insurance-quote/',
    formName: 'health-insurance-quote-wizard',
    expectPersonNameLabel: 'Full name',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js', 'quote-health-persons.js'],
    firstBatch: [
      'name', 'email', 'phone', 'nif', 'date_of_birth',
      'postcode', 'address', 'town', 'nationality_name', 'tax_resident_pt',
    ],
    values: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+44 7700 900000',
      nif: '501442600',
      date_of_birth: '1985-03-15',
      postcode: '8600-100',
      address: '10 Example Street',
      town: 'Lagos',
      nationality_name: 'United Kingdom',
      tax_resident_pt: 'yes',
      start_date: '2026-10-01',
      rgpd: true,
    },
    personValues: {
      nome: 'Tom Smith',
      data_nascimento: '2015-06-01',
      nif: '200000012',
    },
  },
  // Especificação v2, "restantes línguas" Parte C — same shared field
  // names as PT/EN Saúde above, first non-PT-non-EN Saúde wizard. Also the
  // regression test for quote-health-persons.js's own language fix (found
  // while building this page — see that file's top comment): its repeater
  // labels are German here, not the hardcoded Portuguese every page,
  // including the EN one above, silently got before that fix.
  {
    label: 'DE /de/krankenversicherung-portugal/',
    path: 'de/krankenversicherung-portugal/index.html',
    url: 'https://adlerrochefort.com/de/krankenversicherung-portugal/',
    formName: 'de-krankenversicherung-wizard',
    expectPersonNameLabel: 'Vollständiger Name',
    scripts: ['quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js', 'quote-health-persons.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hans Müller',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+49 30 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Deutschland',
      residente_fiscal: 'sim',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
    personValues: {
      nome: 'Klara Müller',
      data_nascimento: '2015-06-01',
      nif: '200000012',
    },
  },
  // Especificação v2, Parte 2 continuação (NL) — second NL page converted
  // from the shared nl-offerte-aanvraag branch-select form to its own
  // exclusive wizard, with the "pessoa segura" repeater.
  {
    label: 'NL /nl/zorgverzekering-portugal/',
    path: 'nl/zorgverzekering-portugal/index.html',
    url: 'https://adlerrochefort.com/nl/zorgverzekering-portugal/',
    formName: 'nl-zorgverzekering-wizard',
    expectPersonNameLabel: 'Volledige naam',
    scripts: ['lead-branch-fields.js', 'quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js', 'quote-health-persons.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Jan de Vries',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+31 6 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Nederland',
      residente_fiscal: 'sim',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
    personValues: {
      nome: 'Klara de Vries',
      data_nascimento: '2015-06-01',
      nif: '200000012',
    },
  },
  {
    // Especificação v2, Parte 2 continuação (NL) — third and final
    // "existing dedicated page" NL conversion. Same field set as the
    // PT/EN/DE dedicated wizards above.
    label: 'NL /nl/zzp-beroepsaansprakelijkheid-portugal/',
    path: 'nl/zzp-beroepsaansprakelijkheid-portugal/index.html',
    url: 'https://adlerrochefort.com/nl/zzp-beroepsaansprakelijkheid-portugal/',
    formName: 'nl-zzp-beroepsaansprakelijkheid-wizard',
    scripts: ['lead-branch-fields.js', 'quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Jan de Vries',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+31 6 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Nederland',
      residente_fiscal: 'sim',
      faturacao_anual: '85000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    // Especificação v2, Parte D2 — Bedrijfsverzekering NL, built from
    // scratch (no dedicated NL page existed for this ramo before). First
    // page to use a `data-required-group` checkbox group ("at least one of
    // these three, not all three") — only one of the three ramo_* checkboxes
    // is listed in `values`, deliberately: withholding it must leave zero
    // checked and block advancement, which is exactly what the "one
    // required field withheld at a time" loop below tests. Listing more
    // than one would leave the group satisfied even with one withheld,
    // silently defeating that test.
    label: 'NL /nl/bedrijfsverzekering-portugal/',
    path: 'nl/bedrijfsverzekering-portugal/index.html',
    url: 'https://adlerrochefort.com/nl/bedrijfsverzekering-portugal/',
    formName: 'nl-bedrijfsverzekering-wizard',
    scripts: ['lead-branch-fields.js', 'quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Jan de Vries',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+31 6 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Nederland',
      residente_fiscal: 'sim',
      nome_empresa: 'De Vries Consultancy Lda.',
      nif_empresa: '501442600',
      ramo_multirriscos: true,
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
  {
    // Especificação v2, Parte D1 — Lebensversicherung DE, built from the
    // generic "Lebensversicherung" branch (page already existed, only the
    // form itself was dedicated).
    label: 'DE /de/lebensversicherung-portugal/',
    path: 'de/lebensversicherung-portugal/index.html',
    url: 'https://adlerrochefort.com/de/lebensversicherung-portugal/',
    formName: 'de-lebensversicherung-wizard',
    scripts: ['lead-branch-fields.js', 'quote-validators.js', 'ar-quote-form.js', 'quote-nationality.js', 'quote-wizard.js'],
    firstBatch: [
      'nome', 'nif', 'data_nascimento', 'morada', 'localidade',
      'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal',
    ],
    values: {
      nome: 'Hans Müller',
      nif: '501442600',
      data_nascimento: '1985-03-15',
      morada: 'Rua Teste 123',
      localidade: 'Lagos',
      codigo_postal: '8600-100',
      telefone: '+49 30 12345678',
      email: 'teste@example.com',
      nacionalidade_nome: 'Deutschland',
      residente_fiscal: 'sim',
      capital: '150000',
      data_inicio: '2026-10-01',
      rgpd: true,
    },
  },
];

async function domFor(html, url) {
  const dom = new JSDOM(html, { url, runScripts: 'outside-only' });
  if (dom.window.document.readyState !== 'complete') {
    await new Promise((resolve) => dom.window.addEventListener('load', resolve, { once: true }));
  }
  return dom;
}

/** Real clicks (not a synthetic .checked=true) on each id in `activateIds`
 *  — the checkboxes public/js/lead-branch-fields.js's <select> and
 *  public/js/quote-field-toggle.js key off of, so conditional groups are
 *  enabled before `values` tries to fill fields inside them. The Habitação
 *  (Fase 2, B1) entries below are the first PAGES config to use this —
 *  Fase 1 (Auto) has no conditional groups, so its entries just leave
 *  `activateIds` undefined. */
function activateConditionalGroups(doc, activateIds) {
  for (const id of activateIds || []) {
    const el = doc.getElementById(id);
    if (!el) throw new Error(`activateIds: no element with id "${id}" — PAGES config is out of date`);
    el.click();
  }
}

/** Sets every field in `values` except `omit` (if given), dispatching real
 *  input/change events so every listener that would normally react (draft
 *  saving, nationality code sync, branch/toggle groups, the wizard's own
 *  has-error clearing) actually does. */
function applyValues(win, form, values, omit) {
  for (const [name, value] of Object.entries(values)) {
    if (name === omit) continue;
    const el = form.querySelector(`[name="${name}"]`);
    if (!el) throw new Error(`field "${name}" not found in the form — PAGES.values is out of date`);
    if (value === true) {
      el.checked = true;
    } else {
      el.value = value;
    }
    el.dispatchEvent(new win.Event('input', { bubbles: true }));
    el.dispatchEvent(new win.Event('change', { bubbles: true }));
  }
}

/** Fills the FIRST [data-person-block] of a public/js/quote-health-persons.js
 *  repeater (Saúde, Especificação v2 C4) — a page's own script already
 *  creates that one block at init, before this ever runs. Those fields
 *  carry no `name` attribute on purpose (see that file's own comment on
 *  why), so applyValues() above can never find or fill them; this is the
 *  dedicated equivalent, keyed by `data-person-field` instead. `omit`, when
 *  it names one of `personValues`' own keys, is what the withheld-field
 *  loop below uses to test that a person block's own required fields block
 *  submission exactly like any other required field — same contract as
 *  applyValues()' omit, just a separate namespace (PAGES.personValues,
 *  not PAGES.values) so the two never collide on a shared key name. A page
 *  with no repeater (everything but Saúde, today) passes no personValues
 *  at all, and this is a no-op. */
function applyPersonValues(win, form, personValues, omit) {
  if (!personValues) return;
  const block = form.querySelector('[data-person-block]');
  if (!block) throw new Error('applyPersonValues: PAGES.personValues is set but no [data-person-block] exists yet');
  for (const [field, value] of Object.entries(personValues)) {
    if (field === omit) continue;
    const el = block.querySelector(`[data-person-field="${field}"]`);
    if (!el) throw new Error(`person field "${field}" not found — PAGES.personValues is out of date`);
    el.value = value;
    el.dispatchEvent(new win.Event('input', { bubbles: true }));
    el.dispatchEvent(new win.Event('change', { bubbles: true }));
  }
}

/** Drives the wizard exactly as a visitor would: click whichever button is
 *  live on the currently-visible step, real DOM click events only — never
 *  calling goNext()/the submit handler directly, since what is under test
 *  is whether the *attached* listeners refuse correctly. Stops as soon as a
 *  step fails to advance (the expected outcome for an incomplete form) or
 *  once the submit button has been clicked. */
function driveWizardToSubmit(win, doc, form) {
  const steps = [...form.querySelectorAll('[data-wizard-step]')];
  const maxClicks = steps.length + 1;
  for (let i = 0; i < maxClicks; i++) {
    const visible = steps.find((s) => !s.hidden);
    if (!visible) return; // no step visible — nothing sane left to click
    const next = visible.querySelector('[data-wizard-next]');
    if (next) {
      const before = steps.map((s) => s.hidden).join(',');
      next.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
      const after = steps.map((s) => s.hidden).join(',');
      if (before === after) return; // did not advance — validation refused it, as expected
      continue;
    }
    const submit = visible.querySelector('button[type="submit"]');
    if (submit) {
      submit.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
      return;
    }
    return; // visible step has neither control — nothing left to drive
  }
}

let failures = 0;

// Splits one withheld-field "name" into the (values-omit, personValues-omit)
// pair applyValues()/applyPersonValues() each expect — see the `person:`
// prefix note next to requiredNames below for why this exists at all: a
// page's own `nome`/`data_nascimento`/`nif` (the tomador, Passo 1) and a
// person block's fields of the same name (Passo 2, a completely different
// person) would otherwise collide on one shared omit value.
function splitOmit(name) {
  if (name && name.startsWith('person:')) return { valuesOmit: null, personOmit: name.slice('person:'.length) };
  return { valuesOmit: name, personOmit: null };
}

for (const page of PAGES) {
  const html = await readFile(join(PUBLIC, page.path), 'utf8');
  // A person block's own required fields (Saúde's repeater, Especificação
  // v2 C4) share names with the page's own transversal fields — `nome`,
  // `data_nascimento`, `nif` all exist both as the tomador's own Passo 1
  // answer and inside every "pessoa segura" block. The `person:` prefix
  // keeps the two apart everywhere below (splitOmit, applyPersonValues),
  // rather than requiring PAGES.personValues to invent different field
  // names than the real markup uses just to avoid the collision.
  const requiredNames = Object.keys(page.values).concat(
    page.personValues ? Object.keys(page.personValues).map((k) => 'person:' + k) : []
  );

  // ── Positive control: fully filled must actually reach fetch() ─────────
  {
    const dom = await domFor(html, page.url);
    const { document: doc, window: win } = dom.window;
    for (const src of await Promise.all(page.scripts.map(loadScript))) win.eval(src);
    const form = doc.querySelector(`form[name="${page.formName}"]`);
    if (!form) throw new Error(`${page.label}: form[name="${page.formName}"] not found`);
    activateConditionalGroups(doc, page.activateIds);
    applyValues(win, form, page.values, null);
    applyPersonValues(win, form, page.personValues, null);
    let fetched = false;
    let body = null;
    win.fetch = (url, opts) => {
      fetched = true;
      body = opts && opts.body;
      return Promise.reject(new Error('intercepted-for-test'));
    };
    driveWizardToSubmit(win, doc, form);
    if (!fetched) {
      failures++;
      console.log(`\n${page.label} — POSITIVE CONTROL FAILED`);
      console.log('  A fully-filled form never reached fetch() — the test harness itself is broken;');
      console.log('  every other result for this page is meaningless until this is fixed.');
    } else if (page.personValues) {
      // The repeater's own end of the contract: dados_dinamicos must carry
      // the block quote-health-persons.js built, not just "something truthy"
      // — this is the payload netlify/functions/lib/dynamic-fields.mjs
      // parses into quote_requests.pessoas_seguras.
      const dinamicos = new URLSearchParams(body).get('dados_dinamicos');
      let blocks = null;
      try {
        blocks = dinamicos ? JSON.parse(dinamicos) : null;
      } catch {
        blocks = null;
      }
      const ok =
        Array.isArray(blocks) &&
        blocks.length === 1 &&
        blocks[0].nome === page.personValues.nome &&
        blocks[0].data_nascimento === page.personValues.data_nascimento &&
        blocks[0].nif === page.personValues.nif;
      if (!ok) {
        failures++;
        console.log(`\n${page.label} — POSITIVE CONTROL FAILED: dados_dinamicos in the submitted payload is not the expected pessoa segura block`);
        console.log(`  got: ${dinamicos}`);
      } else {
        console.log(`${page.label} — positive control OK (fully filled reaches submit, dados_dinamicos carries the pessoa segura block)`);
      }
      // Especificação v2, "restantes línguas" — quote-health-persons.js's
      // own regression: its repeater labels were hardcoded Portuguese with
      // no language branch at all, silently, on every page including the
      // EN one — found while building the German Saúde page. `nome`'s own
      // <label> text is enough to catch that class of bug reappearing on
      // any page in this list, without hand-checking every string.
      if (page.expectPersonNameLabel) {
        const nameField = doc.querySelector('[data-person-field="nome"]');
        const label = nameField && doc.querySelector(`label[for="${nameField.id}"]`);
        const text = label ? label.textContent : null;
        if (!text || !text.startsWith(page.expectPersonNameLabel)) {
          failures++;
          console.log(`\n${page.label} — FAILED: person block's own name label is "${text}", expected to start with "${page.expectPersonNameLabel}"`);
        } else {
          console.log(`${page.label} — person block labels are in the page's own language ("${text}")`);
        }
      }
    } else {
      console.log(`${page.label} — positive control OK (fully filled reaches submit)`);
    }
  }

  // ── One required field withheld at a time ───────────────────────────────
  for (const name of requiredNames) {
    const dom = await domFor(html, page.url);
    const { document: doc, window: win } = dom.window;
    for (const src of await Promise.all(page.scripts.map(loadScript))) win.eval(src);
    const form = doc.querySelector(`form[name="${page.formName}"]`);
    activateConditionalGroups(doc, page.activateIds);
    const { valuesOmit, personOmit } = splitOmit(name);
    applyValues(win, form, page.values, valuesOmit);
    applyPersonValues(win, form, page.personValues, personOmit);
    let fetched = false;
    win.fetch = () => {
      fetched = true;
      return Promise.reject(new Error('intercepted-for-test'));
    };
    driveWizardToSubmit(win, doc, form);
    if (fetched) {
      failures++;
      console.log(`\n${page.label} — FAILED: "${name}" left empty/unchecked still reached fetch()`);
    }
  }
  console.log(`${page.label} — ${requiredNames.length} required field(s) checked, each withheld in turn`);

  // ── Degraded path: ar-quote-form.js never wired this form ──────────────
  // Deleting window.ArQuoteForm after the real wire() call already ran
  // doesn't actually reproduce the failure: wire()'s own submit listener is
  // a closure over its own `validate`, not a lookup of the global on every
  // call, so it keeps working fine regardless. The real failure mode is
  // ar-quote-form.js never successfully wiring in the first place — so
  // this sub-test skips loading that file (and quote-nationality.js, which
  // has no reason to run without it) entirely, leaving only
  // quote-validators.js + quote-wizard.js, exactly the state a page is in
  // when the deferred <script src="ar-quote-form.js"> fails for any reason.
  const degradedScripts = page.scripts.filter((s) => s !== 'ar-quote-form.js' && s !== 'quote-nationality.js');
  const failuresBeforeDegraded = failures;
  {
    const dom = await domFor(html, page.url);
    const { document: doc, window: win } = dom.window;
    for (const src of await Promise.all(degradedScripts.map(loadScript))) win.eval(src);
    const form = doc.querySelector(`form[name="${page.formName}"]`);
    if (win.ArQuoteForm) throw new Error(`${page.label}: window.ArQuoteForm exists even without loading ar-quote-form.js — the degraded-path simulation is not isolated`);

    // goNext() must refuse to advance past an empty first step.
    const steps = [...form.querySelectorAll('[data-wizard-step]')];
    const firstNext = steps[0].querySelector('[data-wizard-next]');
    const beforeAdvance = steps.map((s) => s.hidden).join(',');
    firstNext.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
    const afterAdvance = steps.map((s) => s.hidden).join(',');
    if (beforeAdvance !== afterAdvance) {
      failures++;
      console.log(`\n${page.label} — DEGRADED PATH FAILED: goNext() advanced past step 1 while ar-quote-form.js never wired`);
    }
  }

  // The submit guard must refuse a fully-filled-but-unreachable submit too
  // — reset the DOM fresh so this doesn't depend on the click above. Fields
  // that only ar-quote-form.js's own listener would normally validate
  // (format rules) are irrelevant here: everything in `values` is filled,
  // so the only thing standing between this and a real fetch() call is
  // quote-wizard.js's own last-resort guard.
  {
    const dom2 = await domFor(html, page.url);
    const win2 = dom2.window;
    const doc2 = win2.document;
    for (const src of await Promise.all(degradedScripts.map(loadScript))) win2.eval(src);
    const form2 = doc2.querySelector(`form[name="${page.formName}"]`);
    activateConditionalGroups(doc2, page.activateIds);
    applyValues(win2, form2, page.values, null);
    applyPersonValues(win2, form2, page.personValues, null);
    let fetched2 = false;
    win2.fetch = () => {
      fetched2 = true;
      return Promise.reject(new Error('intercepted-for-test'));
    };
    // No submit button click can reach this step (goNext() already refuses
    // to advance without ar-quote-form.js) — dispatch 'submit' directly to
    // exercise the last-resort guard on its own, the same way a stray
    // Enter-key implicit submission would reach it regardless of step.
    form2.dispatchEvent(new win2.Event('submit', { bubbles: true, cancelable: true }));
    if (fetched2) {
      failures++;
      console.log(`\n${page.label} — DEGRADED PATH FAILED: a full submit event reached fetch() while ar-quote-form.js never wired`);
    }
  }
  if (failures === failuresBeforeDegraded) {
    console.log(`${page.label} — degraded path (ar-quote-form.js never wired) OK\n`);
  } else {
    console.log('');
  }

  // ── Reload mid-fill: hidden fields dependent on input/change must resync ──
  // The nationality-desync bug needs no field withheld — it needs a reload
  // between filling the search box and submitting. Neither the positive
  // control above (fills everything in one pass, never touches
  // restoreDraft()) nor the withheld-field loop would ever exercise it.
  if (page.firstBatch) {
    const draftKey = 'ar_quote_draft_' + page.formName;
    const firstValues = {};
    for (const name of page.firstBatch) firstValues[name] = page.values[name];
    const remainingValues = {};
    for (const [name, value] of Object.entries(page.values)) {
      if (!(name in firstValues)) remainingValues[name] = value;
    }

    // "First visit": fill step 1, capture the draft exactly as saveDraft()
    // would have written it to localStorage.
    const dom1 = await domFor(html, page.url);
    const win1 = dom1.window;
    const doc1 = win1.document;
    for (const src of await Promise.all(page.scripts.map(loadScript))) win1.eval(src);
    const form1 = doc1.querySelector(`form[name="${page.formName}"]`);
    activateConditionalGroups(doc1, page.activateIds);
    applyValues(win1, form1, firstValues, null);
    const draft = win1.localStorage.getItem(draftKey);
    if (!draft) {
      failures++;
      console.log(`${page.label} — RELOAD TEST FAILED: no draft was saved after filling step 1\n`);
    } else {
      // "Reload": a fresh page load, draft already in localStorage before
      // the scripts run — exactly what a real reload restores from.
      const dom2 = await domFor(html, page.url);
      const win2 = dom2.window;
      const doc2 = win2.document;
      win2.localStorage.setItem(draftKey, draft);
      for (const src of await Promise.all(page.scripts.map(loadScript))) win2.eval(src);
      const form2 = doc2.querySelector(`form[name="${page.formName}"]`);

      // The one field this scenario exists for: the hidden ISO code has to
      // already be correct right after restore, before anything else runs.
      const nameField = form2.querySelector('[data-code-target]');
      const codeField = nameField && doc2.getElementById(nameField.getAttribute('data-code-target'));
      if (!codeField || !codeField.value) {
        failures++;
        console.log(
          `${page.label} — RELOAD TEST FAILED: hidden nationality code is empty right after restore ` +
            `(visible field shows "${nameField ? nameField.value : '(field not found)'}")`
        );
      }

      // Complete the rest, exactly as a visitor resuming their draft would.
      // The person block (Saúde's repeater) is entirely Passo 2, never part
      // of firstBatch/remainingValues (those only ever cover Passo 1
      // transversal fields) — filled here unconditionally, same as every
      // other page's Passo 2/3 fields this step already completes.
      activateConditionalGroups(doc2, page.activateIds);
      applyValues(win2, form2, remainingValues, null);
      applyPersonValues(win2, form2, page.personValues, null);

      let fetched = false;
      let body = null;
      win2.fetch = (url, opts) => {
        fetched = true;
        body = opts && opts.body;
        return Promise.reject(new Error('intercepted-for-test'));
      };
      driveWizardToSubmit(win2, doc2, form2);

      if (!fetched) {
        failures++;
        console.log(`${page.label} — RELOAD TEST FAILED: completing the draft after reload never reached fetch()\n`);
      } else {
        const codeName = codeField ? codeField.name : null;
        const submittedCode = codeName ? new URLSearchParams(body).get(codeName) : null;
        if (!submittedCode) {
          failures++;
          console.log(`${page.label} — RELOAD TEST FAILED: submitted payload's "${codeName}" field is empty`);
        } else {
          console.log(`${page.label} — reload mid-fill OK (nationality code "${submittedCode}" survives restore + completion + submit)\n`);
        }
      }
    }
  }
}

console.log(failures ? `${failures} failure(s)` : 'all checks passed');
process.exit(failures ? 1 : 0);
