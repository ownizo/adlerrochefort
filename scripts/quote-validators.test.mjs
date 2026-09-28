#!/usr/bin/env node
/**
 * Unit tests for public/js/quote-validators.js, plus the free-text rule for
 * NIF/NIE, postcode and plate in public/js/ar-quote-form.js.
 *
 * The file under test is a plain browser script (no ES module syntax, house
 * style — see public/js/ar-quote-form.js), and it has no DOM dependency at
 * all: no document, no window API beyond the assignment at the bottom. So
 * rather than pull in jsdom (deliberately not a dependency of this repo —
 * see scripts/form-payload-test.mjs's own comment on that), this loads the
 * source into a minimal node:vm sandbox and reads QuoteValidators back off
 * the sandboxed `window`.
 *
 * Run directly via `node --test` (matches netlify/functions/**\/*.test.mjs's
 * convention) — not picked up by `npm test`'s glob, which only covers
 * netlify/functions/; run this one explicitly or via a future package.json
 * script if it needs to join CI.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(join(ROOT, 'public', 'js', 'quote-validators.js'), 'utf8');

function load() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.QuoteValidators;
}

const V = load();

// ── NIF/NIE, postcode, plate: free text ────────────────────────────────
// Owner decision: the tax number (NIF/NIE), postcode and number plate are
// free text on every form, in every language, so clients can enter
// Portuguese, Spanish or foreign values. The Portuguese-only rules (NIF
// check digit, 0000-000, the four Portuguese plate shapes) were removed
// from this file and from public/js/ar-quote-form.js; these tests keep them
// from coming back. Required-ness is untouched: an empty required field is
// still refused (last test in this block).
test('QuoteValidators no longer exposes the Portuguese NIF / postcode / plate format rules', () => {
  for (const name of ['isValidNif', 'formatPostalCode', 'isValidPostalCode', 'normalizePlate', 'isValidPlate']) {
    assert.equal(V[name], undefined, `${name} should be gone — these fields are free text`);
  }
});

// A minimal DOM stand-in, just enough for ar-quote-form.js to load and for
// ArQuoteForm.validateField() to run against one field: the file reads
// <html lang>, looks for forms to wire (none here), and on an error builds
// a <p> inside the field's wrapper.
function fakeDocument(lang) {
  const makeEl = () => ({
    attrs: {}, children: [], className: '', textContent: '',
    classList: { add() {}, remove() {} },
    setAttribute(k, v) { this.attrs[k] = String(v); },
    getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; },
    removeAttribute(k) { delete this.attrs[k]; },
    hasAttribute(k) { return k in this.attrs; },
    appendChild(c) { this.children.push(c); c.parentNode = this; },
    removeChild(c) { this.children = this.children.filter((x) => x !== c); },
    querySelector(sel) { return sel === '.contact-form-error' ? this.children.find((c) => c.className === 'contact-form-error') || null : null; },
  });
  return {
    documentElement: { getAttribute: (k) => (k === 'lang' ? lang : null) },
    body: { dataset: {}, classList: { add() {} } },
    createElement: makeEl,
    querySelectorAll: () => [],
    makeEl,
  };
}

function loadQuoteForm(lang) {
  const document = fakeDocument(lang);
  const sandbox = { window: {}, document, console };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  vm.runInContext(readFileSync(join(ROOT, 'public', 'js', 'ar-quote-form.js'), 'utf8'), sandbox);
  const field = (attrs, value) => {
    const wrap = document.makeEl();
    const el = document.makeEl();
    Object.assign(el, { type: 'text', name: attrs.name, value, disabled: false, form: null, id: '' });
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    el.closest = () => wrap;
    el.parentNode = wrap;
    return el;
  };
  return { api: sandbox.window.ArQuoteForm, field };
}

const FREE_TEXT_CASES = [
  // [field attributes, Spanish/foreign value]. data-validate is included
  // deliberately: a stale cached page may still carry it, and must not block.
  [{ name: 'nif', 'data-validate': 'nif', required: '' }, 'X1234567L'],
  [{ name: 'nif', required: '' }, 'B12345678'],
  [{ name: 'codigo_postal', 'data-validate': 'postal-code', required: '' }, '29602'],
  [{ name: 'postcode', required: '' }, 'SW1A 1AA'],
  [{ name: 'matricula', 'data-validate': 'plate', required: '' }, '1234 BCD'],
];

for (const lang of ['pt', 'en', 'de', 'nl', 'pl', 'sv', 'da', 'zh', 'he']) {
  test(`ar-quote-form (${lang}): Spanish/foreign NIF/NIE, postcode and plate pass client-side validation`, () => {
    const { api, field } = loadQuoteForm(lang);
    assert.ok(api && typeof api.validateField === 'function', 'ArQuoteForm.validateField not published');
    for (const [attrs, value] of FREE_TEXT_CASES) {
      assert.equal(api.validateField(field(attrs, value), null), true, `${attrs.name}="${value}" was refused`);
    }
  });
}

test('ar-quote-form: an empty REQUIRED NIF/postcode/plate is still refused (required-ness unchanged)', () => {
  const { api, field } = loadQuoteForm('pt');
  for (const name of ['nif', 'codigo_postal', 'postcode', 'matricula']) {
    assert.equal(api.validateField(field({ name, required: '' }, '   '), null), false, `empty required ${name} was accepted`);
  }
  assert.equal(api.validateField(field({ name: 'nif' }, ''), null), true, 'an empty OPTIONAL nif must still pass');
});

// ── Dates ───────────────────────────────────────────────────────────────
test('isAtLeast18: true exactly on and after the 18th birthday, false the day before', () => {
  const now = new Date();
  const turns18Today = `${now.getUTCFullYear() - 18}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;
  assert.equal(V.isAtLeast18(turns18Today), true);

  const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  const turns18Tomorrow = `${tomorrow.getUTCFullYear() - 18}-${String(tomorrow.getUTCMonth() + 1).padStart(2, '0')}-${String(tomorrow.getUTCDate()).padStart(2, '0')}`;
  assert.equal(V.isAtLeast18(turns18Tomorrow), false);
});

test('isAtLeast18: rejects malformed input rather than throwing', () => {
  assert.equal(V.isAtLeast18('not-a-date'), false);
  assert.equal(V.isAtLeast18(''), false);
});

test('isNotFutureDate: today is fine, tomorrow is not — used for insured-person dates of birth, no 18y rule', () => {
  const now = new Date();
  const todayISO = now.toISOString().slice(0, 10);
  assert.equal(V.isNotFutureDate(todayISO), true);

  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  assert.equal(V.isNotFutureDate(tomorrow.toISOString().slice(0, 10)), false);
});

// Rewritten: the rule used to require the licence date to be at least 18
// years after birth, which rejected genuine licences — several countries
// outside Europe issue one at 16 or younger, and clients moving to Portugal
// from those countries hold one legitimately. The only things actually
// impossible are a licence dated before birth, or in the future.
test('isLicenceDateValid: on or after birth, not in the future — no age floor', () => {
  assert.equal(V.isLicenceDateValid('2000-01-01', '1980-01-01'), true); // age 20, fine
  assert.equal(V.isLicenceDateValid('1995-01-01', '1980-01-01'), true); // age 15 — no longer rejected
  assert.equal(V.isLicenceDateValid('1998-01-01', '1980-01-01'), true); // exactly 18th birthday
  assert.equal(V.isLicenceDateValid('1980-01-01', '1980-01-01'), true); // same day as birth — edge, still valid
  assert.equal(V.isLicenceDateValid('1979-12-31', '1980-01-01'), false); // one day before birth
});

test('isLicenceDateValid: rejects a licence date in the future', () => {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  assert.equal(V.isLicenceDateValid(tomorrow.toISOString().slice(0, 10), '1980-01-01'), false);
});

test('isLicenceDateValid: rejects malformed input rather than throwing', () => {
  assert.equal(V.isLicenceDateValid('not-a-date', '1980-01-01'), false);
  assert.equal(V.isLicenceDateValid('2000-01-01', 'not-a-date'), false);
});

// Non-blocking: this never feeds into isLicenceDateValid's result, only
// into a separate, informational UI note (Especificação v2 hotfix).
test('isLicenceBeforeAge16: flags a licence dated before the 16th birthday, without invalidating it', () => {
  assert.equal(V.isLicenceBeforeAge16('1995-01-01', '1980-01-01'), true); // age 15
  assert.equal(V.isLicenceBeforeAge16('1996-01-01', '1980-01-01'), false); // exactly 16th birthday
  assert.equal(V.isLicenceBeforeAge16('2000-01-01', '1980-01-01'), false); // age 20
  // Still a valid licence date by isLicenceDateValid's own rule — the two
  // functions are independent, and a "before 16" flag never means "invalid".
  assert.equal(V.isLicenceDateValid('1995-01-01', '1980-01-01'), true);
});

test('isLicenceBeforeAge16: rejects malformed input rather than throwing', () => {
  assert.equal(V.isLicenceBeforeAge16('not-a-date', '1980-01-01'), false);
  assert.equal(V.isLicenceBeforeAge16('2000-01-01', 'not-a-date'), false);
});

test('isStartDateValid: rejects a start date in the past', () => {
  assert.equal(V.isStartDateValid('2000-01-01'), false);
  const now = new Date();
  const todayISO = now.toISOString().slice(0, 10);
  assert.equal(V.isStartDateValid(todayISO), true);
});

test('isRenovationYearValid: between construction year and the current year, inclusive', () => {
  const currentYear = new Date().getUTCFullYear();
  assert.equal(V.isRenovationYearValid(2010, 2005), true);
  assert.equal(V.isRenovationYearValid(2000, 2005), false); // before construction
  assert.equal(V.isRenovationYearValid(currentYear + 1, 2005), false); // in the future
  assert.equal(V.isRenovationYearValid(currentYear, 2005), true);
});

// ── Markup: no page brings the old format rules back ────────────────────
test('no form field for NIF/NIE, postcode or plate carries a format rule (data-validate, pattern, numeric inputmode)', async () => {
  const { readdirSync } = await import('node:fs');
  const FIELD = /^(nif|nif_empresa|condominio_nif|postcode|codigo_postal|home_postcode|condo_postcode|habitacao_cp|matricula|car_plate|auto_matricula)$/;
  const offenders = [];
  const walk = (dir) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith('.html')) {
        const html = readFileSync(p, 'utf8');
        if (/data-validate="(nif|postal-code|plate)"/.test(html)) offenders.push(`${p}: data-validate nif/postal-code/plate`);
        for (const m of html.matchAll(/<input\b[^>]*>/g)) {
          const name = (m[0].match(/\bname="([^"]*)"/) || [])[1];
          if (!name || !FIELD.test(name)) continue;
          if (/\s(pattern|maxlength)=/.test(m[0]) || /inputmode="numeric"/.test(m[0])) offenders.push(`${p}: ${m[0]}`);
        }
      }
    }
  };
  walk(join(ROOT, 'public'));
  assert.deepEqual(offenders, []);
});
