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
 *  enabled before `values` tries to fill fields inside them. A page with no
 *  conditional groups just passes an empty/undefined list. */
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

for (const page of PAGES) {
  const html = await readFile(join(PUBLIC, page.path), 'utf8');
  const requiredNames = Object.keys(page.values);

  // ── Positive control: fully filled must actually reach fetch() ─────────
  {
    const dom = await domFor(html, page.url);
    const { document: doc, window: win } = dom.window;
    for (const src of await Promise.all(page.scripts.map(loadScript))) win.eval(src);
    const form = doc.querySelector(`form[name="${page.formName}"]`);
    if (!form) throw new Error(`${page.label}: form[name="${page.formName}"] not found`);
    activateConditionalGroups(doc, page.activateIds);
    applyValues(win, form, page.values, null);
    let fetched = false;
    win.fetch = () => {
      fetched = true;
      return Promise.reject(new Error('intercepted-for-test'));
    };
    driveWizardToSubmit(win, doc, form);
    if (!fetched) {
      failures++;
      console.log(`\n${page.label} — POSITIVE CONTROL FAILED`);
      console.log('  A fully-filled form never reached fetch() — the test harness itself is broken;');
      console.log('  every other result for this page is meaningless until this is fixed.');
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
    applyValues(win, form, page.values, name);
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
}

console.log(failures ? `${failures} failure(s)` : 'all checks passed');
process.exit(failures ? 1 : 0);
