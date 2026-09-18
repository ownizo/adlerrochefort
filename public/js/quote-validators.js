/**
 * Format/value validators for the quote-request forms — NIF check digit,
 * Portuguese postal code, vehicle plate, and the date rules the spec sets out
 * (Especificação dos Formulários de Cotação, v2, secção 8).
 *
 * These apply everywhere, regardless of the page's language: the spec is
 * explicit that NIF, postal code and plate always follow the Portuguese
 * format, whatever language the form is rendered in — only the error message
 * text is translated (see data/i18n/quote-form/{lang}.json, added in a later
 * phase). This file only ever returns a boolean or a formatted value; it
 * never renders or knows about text — that keeps it testable without a DOM
 * (see scripts/quote-validators.test.mjs, which loads this file with
 * node:vm rather than jsdom, since there is nothing here that touches the
 * document).
 *
 * Exposed as `window.QuoteValidators` for pages to consume, same shape a
 * Node `vm` sandbox sees when the test file runs this source against a
 * plain `{ window: {} }` global.
 */
(function () {
  'use strict';

  /**
   * NIF (Número de Identificação Fiscal) check-digit validation — modulus 11
   * over the first 8 digits, compared against the 9th. Does not restrict the
   * first digit to a category (individual vs. other): several valid
   * first-digit ranges exist and are not required to accept a well-formed
   * NIF, so this checks the one rule that is actually mandatory — the check
   * digit — rather than a category list that would reject legitimate NIFs.
   */
  function nifCheckDigit(firstEightDigits) {
    var sum = 0;
    for (var i = 0; i < 8; i++) {
      sum += firstEightDigits[i] * (9 - i);
    }
    var remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  function isValidNif(value) {
    var digits = String(value || '').replace(/\s/g, '');
    if (!/^\d{9}$/.test(digits)) return false;
    var nums = digits.split('').map(function (d) { return parseInt(d, 10); });
    return nifCheckDigit(nums.slice(0, 8)) === nums[8];
  }

  /**
   * Portuguese postal code: `0000-000`. Formats as the visitor types (keeps
   * only digits, inserts the hyphen after the 4th), and separately validates
   * a value that's already been typed/pasted in full.
   */
  function formatPostalCode(value) {
    var digits = String(value || '').replace(/\D/g, '').slice(0, 7);
    if (digits.length <= 4) return digits;
    return digits.slice(0, 4) + '-' + digits.slice(4);
  }

  function isValidPostalCode(value) {
    return /^\d{4}-\d{3}$/.test(String(value || '').trim());
  }

  /**
   * Portuguese vehicle plate. Accepts input with or without hyphens,
   * normalises to uppercase with hyphens, and checks it against the four
   * formats currently in use: AA-00-00, 00-AA-00, 00-00-AA, AA-00-AA (each
   * segment is two characters, either both letters or both digits — the
   * sequence of segment types is what distinguishes the four formats).
   */
  var PLATE_SHAPES = ['LLNNNN', 'NNLLNN', 'NNNNLL', 'LLNNLL'];

  function plateShape(sixChars) {
    var out = '';
    for (var i = 0; i < 6; i++) {
      out += /[A-Z]/.test(sixChars[i]) ? 'L' : /[0-9]/.test(sixChars[i]) ? 'N' : '?';
    }
    return out;
  }

  function normalizePlate(value) {
    var clean = String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (clean.length !== 6) return null;
    if (PLATE_SHAPES.indexOf(plateShape(clean)) === -1) return null;
    return clean.slice(0, 2) + '-' + clean.slice(2, 4) + '-' + clean.slice(4, 6);
  }

  function isValidPlate(value) {
    return normalizePlate(value) !== null;
  }

  // ── Dates ──────────────────────────────────────────────────────────────
  // All comparisons are on calendar dates (UTC midnight), not on time, so a
  // browser's local timezone offset never puts "today" one day off.

  function parseISODate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return null;
    var d = new Date(value + 'T00:00:00Z');
    return isNaN(d.getTime()) ? null : d;
  }

  function todayUTC() {
    var now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }

  function addYears(date, years) {
    var d = new Date(date.getTime());
    d.setUTCFullYear(d.getUTCFullYear() + years);
    return d;
  }

  /** Birth date implies the subscriber is at least 18 today. Never apply this
   *  to an insured-person block on the health form — the spec is explicit
   *  that the 18-year rule is about the policyholder only; a household health
   *  policy covers children, and their date of birth only has to not be in
   *  the future (see isNotFutureDate below). */
  function isAtLeast18(birthDateISO) {
    var birth = parseISODate(birthDateISO);
    if (!birth) return false;
    return addYears(birth, 18).getTime() <= todayUTC().getTime();
  }

  function isNotFutureDate(dateISO) {
    var d = parseISODate(dateISO);
    if (!d) return false;
    return d.getTime() <= todayUTC().getTime();
  }

  /** Driving licence date must be on or after the subscriber's own date of
   *  birth, and not in the future. Deliberately NOT tied to age 18 — an
   *  earlier version of this rule required the licence date to be at least
   *  18 years after birth, which rejected genuine licences: several
   *  countries outside Europe issue a driving licence at 16 or younger, and
   *  clients moving to Portugal from those countries hold one legitimately.
   *  A licence dated before birth, or in the future, is what's actually
   *  impossible — see isLicenceBeforeAge16 below for the non-blocking case
   *  this leaves open (a genuinely early licence, flagged for a human to
   *  see, never refused by this check). */
  function isLicenceDateValid(licenceDateISO, birthDateISO) {
    var licence = parseISODate(licenceDateISO);
    var birth = parseISODate(birthDateISO);
    if (!licence || !birth) return false;
    return licence.getTime() >= birth.getTime() && licence.getTime() <= todayUTC().getTime();
  }

  /** True when the licence date implies the subscriber was under 16 at the
   *  time — unusual, but not invalid (see isLicenceDateValid above). Used to
   *  show an informational note, never to block submission. */
  function isLicenceBeforeAge16(licenceDateISO, birthDateISO) {
    var licence = parseISODate(licenceDateISO);
    var birth = parseISODate(birthDateISO);
    if (!licence || !birth) return false;
    return licence.getTime() < addYears(birth, 16).getTime();
  }

  /** Policy start date must not be before today. */
  function isStartDateValid(startDateISO) {
    var start = parseISODate(startDateISO);
    if (!start) return false;
    return start.getTime() >= todayUTC().getTime();
  }

  /** Renovation year: not before the construction year, not after the
   *  current year. Both are plain 4-digit years, not ISO dates. */
  function isRenovationYearValid(renovationYear, constructionYear) {
    var renov = parseInt(renovationYear, 10);
    var built = parseInt(constructionYear, 10);
    var current = todayUTC().getUTCFullYear();
    if (!renov || !built) return false;
    return renov >= built && renov <= current;
  }

  var QuoteValidators = {
    isValidNif: isValidNif,
    formatPostalCode: formatPostalCode,
    isValidPostalCode: isValidPostalCode,
    normalizePlate: normalizePlate,
    isValidPlate: isValidPlate,
    isAtLeast18: isAtLeast18,
    isNotFutureDate: isNotFutureDate,
    isLicenceDateValid: isLicenceDateValid,
    isLicenceBeforeAge16: isLicenceBeforeAge16,
    isStartDateValid: isStartDateValid,
    isRenovationYearValid: isRenovationYearValid,
  };

  if (typeof window !== 'undefined') {
    window.QuoteValidators = QuoteValidators;
  }
  // Node (node:vm sandbox in scripts/quote-validators.test.mjs, or a future
  // server-side reuse) sees the same object on `module.exports` when present.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuoteValidators;
  }
})();
