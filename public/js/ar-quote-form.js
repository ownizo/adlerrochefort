/**
 * Submit handler for the commercial quote forms.
 *
 * Each quote landing page carried its own copy of this, and every copy had the
 * same defect: fetch() only rejects on a network error, so a 404 or a 500 from
 * the form endpoint still ran the success branch. The visitor was shown "Thank
 * you — your request has been received" for a submission that was never stored,
 * and neither side had any way to notice. Everything here follows from that:
 * the response is checked before anything is called a success, a failure says
 * so and leaves the filled-in form on screen, and the button cannot be tapped a
 * second time while a request is in flight.
 *
 * Delivery is Netlify Forms. The form is registered at deploy time from the
 * static markup (name + data-netlify + the hidden form-name field), so the POST
 * goes to the page's own path, where Netlify's form handler intercepts it ahead
 * of the CDN. A verified submission then triggers netlify/functions/
 * submission-created, which emails the team.
 *
 * Validation is done here rather than left to the browser because the native
 * bubble appears at the top of the control, off-screen on a phone once the
 * keyboard is up. The form carries `novalidate` so this code owns the pass.
 */
(function () {
  'use strict';

  var COPY = {
    en: {
      required: 'Please complete this field.',
      email: 'Enter a valid email address, for example you@email.com.',
      sending: 'Sending…',
      failed:
        'Your request could not be sent. Please check your connection and try again — ' +
        'nothing you typed has been lost.',
      // Added for the quote-request wizard (Especificação v2) — mirrors
      // data/i18n/quote-form/en.json's common.errors.* wording exactly. That
      // JSON file is the source of truth checked by
      // scripts/check-i18n-parity.mjs; this object is the runtime copy, same
      // relationship the four messages above already have with the spec.
      nif: 'Enter a valid Portuguese tax number (NIF), 9 digits.',
      postalCode: 'Enter a postal code in the format 0000-000.',
      plate: 'Enter a valid Portuguese vehicle plate.',
      startDate: 'The start date cannot be before today.',
      licenceDate: "The licence date can't be earlier than the policyholder's 18th birthday.",
      renovationYear: "The renovation year can't be before construction or after the current year.",
      // `data-required-copy` overrides — mirrors data/i18n/quote-form/en.json's
      // common.errors.residente_fiscal_obrigatorio/rgpd_obrigatorio, for the
      // two required fields (Fase 1) whose generic "Please complete this
      // field." isn't specific enough to act on.
      residenteFiscal: "Let us know whether you're a tax resident in Portugal.",
      rgpd: 'You need to agree before we can prepare the quote.',
      birthDate: 'The date of birth cannot be in the future.',
      tooShort: 'Please write at least {min} characters.',
    },
    pt: {
      required: 'Preencha este campo.',
      email: 'Introduza um email válido, por exemplo nome@email.com.',
      sending: 'A enviar…',
      failed:
        'Não foi possível enviar o seu pedido. Verifique a ligação e tente novamente — ' +
        'não perdeu nada do que escreveu.',
      nif: 'Introduza um NIF válido, com 9 dígitos.',
      postalCode: 'Introduza um código postal no formato 0000-000.',
      plate: 'Introduza uma matrícula portuguesa válida.',
      startDate: 'A data de início não pode ser anterior a hoje.',
      licenceDate: 'A data da carta não pode ser anterior ao 18.º aniversário do tomador.',
      renovationYear: 'O ano das obras não pode ser anterior à construção nem posterior ao ano atual.',
      residenteFiscal: 'Indique se é residente fiscal em Portugal.',
      rgpd: 'Tem de aceitar para podermos preparar a cotação.',
      birthDate: 'A data de nascimento não pode ser no futuro.',
      tooShort: 'Escreva pelo menos {min} caracteres.',
    },
    nl: {
      required: 'Vul dit veld in.',
      email: 'Voer een geldig e-mailadres in, bijvoorbeeld naam@email.com.',
      sending: 'Versturen…',
      failed:
        'Uw aanvraag kon niet worden verzonden. Controleer uw verbinding en probeer het ' +
        'opnieuw — er is niets verloren gegaan.',
    },
  };

  var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
  var t = COPY[lang] || COPY.en;

  // Deliberately permissive: the address is verified by replying to it, so the
  // only job here is to catch the typo that would make a reply impossible.
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function fieldWrap(el) {
    return el.closest('.contact-form-field') || el.parentNode;
  }

  function clearError(el) {
    var wrap = fieldWrap(el);
    var msg = wrap.querySelector('.contact-form-error');
    if (msg) msg.parentNode.removeChild(msg);
    wrap.classList.remove('has-error');
    el.removeAttribute('aria-invalid');
  }

  function showError(el, text) {
    var wrap = fieldWrap(el);
    clearError(el);
    var msg = document.createElement('p');
    msg.className = 'contact-form-error';
    msg.textContent = text;
    if (el.id) {
      msg.id = el.id + '-error';
      el.setAttribute('aria-describedby', msg.id);
    }
    wrap.appendChild(msg);
    wrap.classList.add('has-error');
    el.setAttribute('aria-invalid', 'true');
  }

  /**
   * The message for one field, or null if it passes — required/email (the
   * original two checks) plus, when the field carries `data-validate`, the
   * matching public/js/quote-validators.js check. `data-validate` is opt-in
   * per field, so every one of the ~40 existing pages using this file keeps
   * behaving exactly as before: none of their fields carry the attribute.
   *
   * `licence-date` and `renovation-year` are cross-field (Especificação v2,
   * secção 8) — `data-validate-ref` names the other field to read, by
   * `name`, from the same form.
   */
  function requiredMessage(el) {
    var key = el.getAttribute('data-required-copy');
    return (key && t[key]) || t.required;
  }

  function fieldError(el, form) {
    if (el.type === 'hidden' || el.name === 'bot-field') return null;
    // A disabled control is excluded from the submission (native browser
    // behaviour for FormData, and the explicit contract public/js/
    // lead-branch-fields.js documents for its own branch groups) — so it
    // must be excluded from validation too, or a required field inside a
    // branch/conditional group the visitor didn't pick would block
    // navigation for an answer that will never actually be submitted. No
    // page combining data-quote-form with a branch group had a required
    // field inside one until Fase 2 (Habitação's AL-only fields), which is
    // what surfaced this.
    if (el.disabled) return null;

    // Checkboxes: `.value` is the static `value` attribute regardless of
    // `.checked` state, so the generic required/empty check below (which
    // reads `.value`) would silently accept an unticked required box — no
    // prior page using this file had a required checkbox, so this never
    // showed up until the wizard's RGPD consent field (Fase 1) needed one.
    if (el.type === 'checkbox') {
      if (el.hasAttribute('required') && !el.checked) return requiredMessage(el);
      return null;
    }

    var value = (el.value || '').trim();
    if (el.hasAttribute('required') && !value) return requiredMessage(el);
    if (!value) return null; // optional and empty: nothing further to check

    if (el.type === 'email' && !EMAIL.test(value)) return t.email;

    // Native `minlength` (Fase 2, Habitação: the free-text description that
    // "obras de renovação" reveals needs at least 10 characters to mean
    // anything) — a plain HTML attribute, not a data-validate kind, since
    // it's a generic rule rather than one of quote-validators.js's
    // Portugal-specific formats.
    var minLength = el.getAttribute('minlength');
    if (minLength && value.length < parseInt(minLength, 10)) return t.tooShort.replace('{min}', minLength);

    var kind = el.getAttribute('data-validate');
    var QV = window.QuoteValidators;
    if (kind && QV) {
      var ref = el.getAttribute('data-validate-ref');
      var refEl = ref && form ? form.querySelector('[name="' + ref + '"]') : null;
      var refValue = refEl ? (refEl.value || '').trim() : '';
      if (kind === 'nif' && !QV.isValidNif(value)) return t.nif;
      if (kind === 'postal-code' && !QV.isValidPostalCode(value)) return t.postalCode;
      if (kind === 'plate' && !QV.isValidPlate(value)) return t.plate;
      if (kind === 'start-date' && !QV.isStartDateValid(value)) return t.startDate;
      // Not the ≥18-years-old rule — that's enforced indirectly by
      // licence-date's cross-check against this same field (a licence dated
      // ≥18 years after birth implies an adult policyholder). This is only
      // the plain "not in the future" check, matching data/i18n/quote-form/
      // {lang}.json's common.errors.data_nascimento_invalida wording.
      if (kind === 'birth-date' && !QV.isNotFutureDate(value)) return t.birthDate;
      if (kind === 'licence-date' && (!refValue || !QV.isLicenceDateValid(value, refValue))) return t.licenceDate;
      if (kind === 'renovation-year' && (!refValue || !QV.isRenovationYearValid(value, refValue))) return t.renovationYear;
    }
    return null;
  }

  function validateOneField(el, form) {
    clearError(el);
    var message = fieldError(el, form || el.form);
    if (message) {
      showError(el, message);
      return false;
    }
    return true;
  }

  /** Returns the offending controls, in document order. `scope` defaults to
   *  the whole form — the wizard passes a single step's container so "Next"
   *  only validates the fields the visitor can currently see. */
  function validate(form, scope) {
    var bad = [];
    var controls = (scope || form).querySelectorAll('input, select, textarea');
    for (var i = 0; i < controls.length; i++) {
      if (!validateOneField(controls[i], form)) bad.push(controls[i]);
    }
    return bad;
  }

  function focusFirst(el) {
    // `center` rather than the default `start`: the header is sticky on a phone
    // and would otherwise sit on top of the field being complained about.
    if (el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    try {
      el.focus({ preventScroll: true });
    } catch (err) {
      el.focus();
    }
  }

  // Google Ads conversion for a submitted quote request. Deliberately fired
  // from succeed() only, i.e. after an HTTP-ok response: bidding must learn
  // from requests that actually reached us, not from page views or from the
  // 404s this file exists to catch.
  var ADS_SEND_TO = 'AW-18361722533/HxH6CKqa1uEcEKXNxrNE';

  // Phase 9 (SEO/conversion measurement): same page-context merge as
  // ar-conversion-events.js — page_type/market/product from the page's own
  // <body> attributes, only on events that already carry custom params
  // (not on the fixed-schema Google Ads `conversion` event below).
  function pageContext() {
    var ds = (document.body && document.body.dataset) || {};
    var ctx = {};
    if (ds.pageType) ctx.page_type = ds.pageType;
    if (ds.market) ctx.market = ds.market;
    if (ds.product) ctx.product = ds.product;
    return ctx;
  }

  function track(form) {
    if (typeof window.gtag !== 'function') return;
    var params = { form_name: (form.getAttribute('name') || '').replace(/-/g, '_') };
    var ctx = pageContext();
    for (var k in ctx) params[k] = ctx[k];
    var extra = form.getAttribute('data-ga-field');
    if (extra) {
      var el = form.querySelector('[name="' + extra + '"]');
      var value = el && el.value;
      if (value) params['form_' + extra.replace(/-/g, '_')] = value;
    }
    window.gtag('event', 'generate_lead', params);
    window.gtag('event', 'conversion', {
      send_to: ADS_SEND_TO,
      value: 1.0,
      currency: 'EUR',
    });
    // Phase 5 (conversion): a named event alongside the two above, distinct
    // from generate_lead so the conversion-journey funnel (market_selected →
    // product_selected → quote_started → quote_submitted, dispatched by
    // ar-conversion-events.js) can be built without redefining what
    // generate_lead already means for existing Ads/Analytics reporting.
    window.gtag('event', 'quote_submitted', params);
    // insurance_review_started/submitted name the same funnel specifically
    // for /en/insurance-review/, alongside the generic events above rather
    // than instead of them.
    if (form.getAttribute('name') === 'international-insurance-review') {
      window.gtag('event', 'insurance_review_submitted', params);
    }
  }

  function succeed(form) {
    var card = form.closest('.lp-form-card') || form.parentNode;
    var success = card.querySelector('.contact-form-success');
    var smallprint = card.querySelector('.lp-smallprint');
    form.style.display = 'none';
    if (smallprint) smallprint.style.display = 'none';
    if (success) {
      success.classList.add('show');
      success.setAttribute('tabindex', '-1');
      focusFirst(success);
    }
    // Retires the sticky mobile bar: there is nothing left to scroll down to.
    document.body.classList.add('quote-sent');
    track(form);
    // Additive: nothing currently listens for this on any of the ~40 pages
    // using this file, so dispatching it changes nothing for them. Added so
    // public/js/quote-wizard.js can clear its localStorage draft on a
    // genuine success — reaching in from outside this closure has no other
    // way to know the fetch actually succeeded, only that submit fired.
    form.dispatchEvent(new CustomEvent('ar-quote-form:success', { bubbles: true }));
  }

  function wire(form) {
    form.setAttribute('novalidate', 'novalidate');

    var source = form.querySelector('input[name="source_url"]');
    if (source && !source.value) source.value = window.location.href;

    // Phase 9 (brief §21/§22): landing_page — the first page of this
    // session, read back from the sessionStorage key ar-analytics-tracker.js
    // sets on first touch. Only stamped if the form actually carries the
    // hidden field (older pages that don't have it are untouched). Falls
    // back to the current page when sessionStorage is unavailable or this
    // is the first page of the session, so it always ends up either genuinely
    // useful or harmlessly identical to source_url — never empty.
    var landing = form.querySelector('input[name="landing_page"]');
    if (landing && !landing.value) {
      var stored = null;
      try { stored = window.sessionStorage.getItem('ar_landing_page'); } catch (err) {}
      landing.value = stored || window.location.href;
    }

    form.addEventListener('input', function (e) {
      if (fieldWrap(e.target).classList.contains('has-error')) clearError(e.target);
    });
    form.addEventListener(
      'change',
      function (e) {
        if (fieldWrap(e.target).classList.contains('has-error')) clearError(e.target);
      },
      true
    );

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.classList.contains('is-sending')) return;

      var bad = validate(form);
      if (bad.length) {
        focusFirst(bad[0]);
        return;
      }

      var button = form.querySelector('.contact-form-submit');
      var label = button ? button.innerHTML : '';
      if (button) {
        button.disabled = true;
        button.innerHTML = t.sending;
      }
      form.classList.add('is-sending');

      var failure = form.querySelector('.contact-form-failure');
      if (failure) failure.parentNode.removeChild(failure);

      fetch(form.getAttribute('action') || window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
        .then(function (response) {
          // The whole point of this file. A 404 from an unregistered form is a
          // resolved promise, not a rejected one.
          if (!response.ok) throw new Error('HTTP ' + response.status);
          succeed(form);
        })
        .catch(function () {
          form.classList.remove('is-sending');
          if (button) {
            button.disabled = false;
            button.innerHTML = label;
          }
          var note = document.createElement('p');
          note.className = 'contact-form-failure';
          note.setAttribute('role', 'alert');
          note.textContent = t.failed;
          // button.parentNode, not form: on the wizard (public/js/
          // quote-wizard.js) the submit button sits inside a
          // .wizard-nav wrapper on the last step, not directly under
          // <form>, and insertBefore requires the reference node to be a
          // direct child of the node it's called on. Falls back to the
          // form itself the same as when there's no button at all.
          if (button) button.parentNode.insertBefore(note, button);
          else form.appendChild(note);
          focusFirst(note);
        });
    });
  }

  // Small surface for public/js/quote-wizard.js to reuse this file's
  // validation/error-display/success/conversion-tracking instead of
  // duplicating any of it — see that file's own comment for why the wizard
  // only ever adds step navigation on top of what's here.
  //
  // Exposed BEFORE wiring any individual form, deliberately: quote-wizard.js
  // treats a missing window.ArQuoteForm as "cannot validate, so refuse to
  // advance or submit" (fail closed) rather than "nothing to check" (fail
  // open) — but that guard is only as good as this object actually being
  // here. If it were assigned after the wire() loop below and wire() threw
  // partway through for any one form (a markup issue on a page we haven't
  // seen yet, a future edit that assumes an element exists), every function
  // above this line still exists (they're hoisted declarations) but the
  // object that publishes them would never be built — silently disabling
  // the wizard's entire validation and step-gating on every page that
  // loads this file, not just the one whose markup triggered it. Assigning
  // first means that failure mode can only ever cost one form its
  // source_url/landing_page autofill and its own submit handler — never
  // the shared validator every other page's wizard depends on.
  window.ArQuoteForm = {
    validateField: validateOneField,
    validate: validate,
    clearError: clearError,
    showError: showError,
    fieldWrap: fieldWrap,
    focusFirst: focusFirst,
    succeed: succeed,
    t: t,
  };

  var forms = document.querySelectorAll('form[data-quote-form]');
  for (var i = 0; i < forms.length; i++) {
    try {
      wire(forms[i]);
    } catch (err) {
      // One form's markup issue must never take down every other quote
      // form on the same page (the /en/insurance-review/ page alone can
      // carry more than one). Loud in the console, since a form silently
      // missing its submit handler is exactly the kind of thing that
      // needs to surface fast, not disappear into "it seemed to work."
      if (window.console && console.error) console.error('[ar-quote-form] failed to wire a form:', err);
    }
  }
})();
