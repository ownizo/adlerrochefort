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
  var isReviewPage = path === '/en/insurance-review/';
  if (marketSelect) {
    marketSelect.addEventListener('change', function () {
      if (!marketSelect.value) return;
      send('market_selected', { market: marketSelect.value, source_page: path });
      // insurance_review_started — the same choice, but named for this one
      // page specifically, matching the funnel name the brief asks for
      // alongside insurance_review_submitted (dispatched from
      // ar-quote-form.js on a successful submission of this same form).
      if (isReviewPage) send('insurance_review_started', { market: marketSelect.value });
    });
  }

  // spain_situation_selected — the "What brings you to Spain?" situation grid
  // on the Spain hub (#situation). Reads the situation from its own card
  // heading rather than needing a data attribute on every generated link, so
  // this stays in step with spain-cluster.data.mjs without either file
  // having to know about the other's markup details beyond the section id.
  var situationSection = document.getElementById('situation');
  if (situationSection) {
    situationSection.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      var card = link.closest('.lp-grid-item');
      var heading = card ? card.querySelector('h3') : null;
      var situation = heading
        ? heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
        : '';
      send('spain_situation_selected', { situation: situation, destination: link.getAttribute('href') || '' });
    });
  }

  // spain_product_clicked — any link into a Spain product page, wherever it
  // is clicked from (the homepage's mega-menu, a Spain page's own nav or
  // footer, a cross-sell block). Scoped to navigation/footer chrome rather
  // than every in-copy link, so this stays a click signal on "where next"
  // rather than firing on every citation link inside an article.
  var navAreas = document.querySelectorAll('.nav-panel, .nav-links-left, .mobile-nav, footer');
  for (var n = 0; n < navAreas.length; n++) {
    (function (area) {
      area.addEventListener('click', function (e) {
        var link = e.target.closest('a[href*="-spain/"]');
        if (!link) return;
        var slug = (link.getAttribute('href') || '').replace(/^\/en\//, '').replace(/\/$/, '');
        send('spain_product_clicked', { product: slug, source_page: path });
      });
    })(navAreas[n]);
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
