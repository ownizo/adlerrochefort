/**
 * Value validators for the quote-request forms — the date rules the spec
 * sets out (Especificação dos Formulários de Cotação, v2, secção 8).
 *
 * The tax number (NIF/NIE), postal code and vehicle plate are deliberately
 * NOT validated here any more: they are free text on every form, in every
 * language, so clients can enter Portuguese, Spanish or foreign values (an
 * owner decision that replaced the earlier NIF check-digit, 0000-000 and
 * Portuguese-plate rules). The server still tidies a Portuguese plate into
 * its hyphenated form for the CRM (netlify/functions/lib/plate.mjs) and
 * keeps any other value exactly as typed.
 *
 * This file only ever returns a boolean; it never renders or knows about
 * text — that keeps it testable without a DOM (see
 * scripts/quote-validators.test.mjs, which loads this file with node:vm
 * rather than jsdom, since there is nothing here that touches the
 * document).
 *
 * Exposed as `window.QuoteValidators` for pages to consume, same shape a
 * Node `vm` sandbox sees when the test file runs this source against a
 * plain `{ window: {} }` global.
 */
(function () {
  'use strict';

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
