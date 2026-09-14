#!/usr/bin/env node
/**
 * Unit tests for public/js/quote-validators.js.
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

// ── NIF ─────────────────────────────────────────────────────────────────
test('isValidNif: accepts a well-formed NIF with a correct check digit', () => {
  // 501442600 is a commonly-cited valid test NIF (company category, but this
  // validator deliberately does not restrict by first-digit category).
  assert.equal(V.isValidNif('501442600'), true);
});

test('isValidNif: rejects a NIF with a wrong check digit', () => {
  assert.equal(V.isValidNif('501442601'), false);
});

test('isValidNif: rejects wrong length and non-numeric input', () => {
  assert.equal(V.isValidNif('12345678'), false);
  assert.equal(V.isValidNif('1234567890'), false);
  assert.equal(V.isValidNif('12345678A'), false);
  assert.equal(V.isValidNif(''), false);
  assert.equal(V.isValidNif(null), false);
});

// ── Postal code ─────────────────────────────────────────────────────────
test('formatPostalCode: inserts the hyphen after 4 digits as the visitor types', () => {
  assert.equal(V.formatPostalCode('8'), '8');
  assert.equal(V.formatPostalCode('8600'), '8600');
  assert.equal(V.formatPostalCode('8600324'), '8600-324');
  assert.equal(V.formatPostalCode('8600-324'), '8600-324');
});

test('formatPostalCode: strips non-digits and caps at 7 digits', () => {
  assert.equal(V.formatPostalCode('86-oo-324x'), '8632-4'); // letters/hyphens dropped, only the 7 digits kept
  assert.equal(V.formatPostalCode('86003249999'), '8600-324'); // extra digits beyond 7 ignored
});

test('isValidPostalCode: only accepts the finished 0000-000 shape', () => {
  assert.equal(V.isValidPostalCode('8600-324'), true);
  assert.equal(V.isValidPostalCode('8600324'), false);
  assert.equal(V.isValidPostalCode('8600-32'), false);
  assert.equal(V.isValidPostalCode(''), false);
});

// ── Plate ───────────────────────────────────────────────────────────────
test('normalizePlate: accepts all four current formats, with or without hyphens', () => {
  assert.equal(V.normalizePlate('AA0000'), 'AA-00-00');
  assert.equal(V.normalizePlate('aa-00-00'), 'AA-00-00');
  assert.equal(V.normalizePlate('00AA00'), '00-AA-00');
  assert.equal(V.normalizePlate('00-00-AA'), '00-00-AA');
  assert.equal(V.normalizePlate('AA00AA'), 'AA-00-AA');
});

test('normalizePlate: rejects the wrong length or an invalid segment-type sequence', () => {
  assert.equal(V.normalizePlate('AAA000'), null); // LLLNNN is not one of the four shapes
  assert.equal(V.normalizePlate('AA000'), null); // 5 chars
  assert.equal(V.normalizePlate('AA00000'), null); // 7 chars
  assert.equal(V.normalizePlate(''), null);
});

test('isValidPlate mirrors normalizePlate', () => {
  assert.equal(V.isValidPlate('AA-00-00'), true);
  assert.equal(V.isValidPlate('AAA-000'), false);
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

test('isLicenceDateValid: licence must not predate the 18th birthday', () => {
  assert.equal(V.isLicenceDateValid('2000-01-01', '1980-01-01'), true); // 20 years old, fine
  assert.equal(V.isLicenceDateValid('1995-01-01', '1980-01-01'), false); // licence at age 15
  assert.equal(V.isLicenceDateValid('1998-01-01', '1980-01-01'), true); // exactly 18th birthday
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
