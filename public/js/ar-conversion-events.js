/**
 * Conversion-journey analytics events (Phase 5: conversion).
 *
 * Uses window.gtag() — already loaded on every page that loads this file, and
 * already the mechanism ar-quote-form.js uses for its own generate_lead /
 * conversion events — rather than introducing a second analytics vendor or a
 * new custom event backend. Every call is guarded by
 * `typeof window.gtag === 'function'` exactly as ar-quote-form.js's own
 * track() does, so this is a silent no-op if gtag has not loaded (an ad
 * blocker, a slow connection) rather than a thrown error.
 *
 * No personal data is ever sent: only market/product/page-level properties,
 * never a name, email, phone number or anything typed into a message or
 * notes field.
 *
 * Deliberately a separate file rather than an addition to ar-quote-form.js
 * or lead-branch-fields.js: those two are covered by
 * scripts/form-payload-test.mjs's exact-payload assertions, and adding
 * unrelated event-tracking code to either risked changing something that
 * test suite depends on for reasons that have nothing to do with analytics.
 */
(function () {
  'use strict';

  function send(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  var path = window.location.pathname || '';

  // market_selected — the country/market choice, wherever it appears: the
  // homepage's Country/Market field, the review page's country select, and
  // (structurally, though it never changes) the Spain pages' own fixed
  // country value is not a user choice so is not tracked here.
  var marketSelect = document.querySelector('select[name="country"]');
  if (marketSelect) {
    marketSelect.addEventListener('change', function () {
      if (!marketSelect.value) return;
      send('market_selected', { market: marketSelect.value, source_page: path });
    });
  }

  // product_selected — any branch-select that is not the market/country
  // select itself (the homepage's insurance_type, and similar).
  var productSelects = document.querySelectorAll('select[data-branch-select]');
  for (var i = 0; i < productSelects.length; i++) {
    (function (select) {
      if (select === marketSelect) return;
      select.addEventListener('change', function () {
        if (!select.value) return;
        send('product_selected', { product: select.value, source_page: path });
      });
    })(productSelects[i]);
  }

  // quote_started — first interaction with any quote/review form on the
  // page, fired once. A signal that a visitor engaged with the form at all,
  // independent of whether they go on to submit it.
  var startedForms = new WeakSet();
  var quoteForms = document.querySelectorAll('form[data-quote-form]');
  for (var j = 0; j < quoteForms.length; j++) {
    (function (form) {
      form.addEventListener(
        'focusin',
        function () {
          if (startedForms.has(form)) return;
          startedForms.add(form);
          send('quote_started', { form_name: form.getAttribute('name') || '', source_page: path });
        },
        { once: true }
      );
    })(quoteForms[j]);
  }

  // multi_product_selected — fires once per form the moment a visitor has
  // ticked two or more boxes in a cross-sell / needs checklist
  // (additional_insurance_needs on product pages, insurance_needs on the
  // review page), whichever comes first.
  var multiFired = new WeakSet();
  var checkboxGroups = document.querySelectorAll(
    'input[type="checkbox"][name="additional_insurance_needs"], input[type="checkbox"][name="insurance_needs"]'
  );
  for (var k = 0; k < checkboxGroups.length; k++) {
    (function (box) {
      box.addEventListener('change', function () {
        var form = box.form;
        if (!form || multiFired.has(form)) return;
        var checked = form.querySelectorAll(
          'input[type="checkbox"][name="' + box.name + '"]:checked:not(:disabled)'
        );
        if (checked.length >= 2) {
          multiFired.add(form);
          send('multi_product_selected', { field: box.name, count: checked.length, source_page: path });
        }
      });
    })(checkboxGroups[k]);
  }

  // cross_sell_clicked — the contextual "you may also need" block and the
  // post-submission "need help with another type of insurance?" links.
  var crossSellLinks = document.querySelectorAll('.lp-crosssell-links a, .quoteSuccess-crosssell-links a');
  for (var m = 0; m < crossSellLinks.length; m++) {
    (function (link) {
      link.addEventListener('click', function () {
        send('cross_sell_clicked', {
          destination: link.getAttribute('href') || '',
          source_page: path,
        });
      });
    })(crossSellLinks[m]);
  }
})();
