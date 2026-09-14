/**
 * Step navigation for the quote-request wizard (Especificação dos
 * Formulários de Cotação v2). Adds step visibility, a progress indicator,
 * localStorage draft persistence, and dynamic-block serialisation on top of
 * public/js/ar-quote-form.js — it does not replace anything that file does.
 * The <form> is the same real Netlify form (data-netlify, data-quote-form,
 * a static <form> element already in the build's HTML — see that file's own
 * comment on why), and the actual POST, validation-on-submit, success
 * screen and Google Ads conversion are all still ar-quote-form.js's job.
 * This file only ever hides/shows step containers and validates the
 * currently-visible one before letting the visitor move to the next.
 *
 * Markup contract a page opts into by adding `data-wizard` to the <form>:
 *   <div data-wizard-step>…fields…
 *     <button type="button" data-wizard-back>…</button>
 *     <button type="button" data-wizard-next>…</button>   (omitted on the
 *       last step, which carries the real type="submit" button instead)
 *   </div>  — one per step, in document order
 *   <div data-wizard-progress aria-valuemin="1" aria-valuemax="N">
 *     <div class="wizard-progress-bar"></div>
 *     <li data-wizard-progress-item>…</li>  (one per step, any container)
 *   </div>
 *   <input type="hidden" name="dados_dinamicos">  — present even when no
 *     dynamic block is ever registered (Auto, Fase 1); the field only
 *     carries a value once a later phase's repeater actually calls
 *     registerDynamicBlock(). Never removed from the DOM, so Netlify still
 *     registers it as a real field of the form at build time.
 *
 * Dynamic blocks exist for Fase 2 (saúde's "pessoa segura" repeater) — Auto
 * has none, but the mechanism is built and tested now so that phase doesn't
 * need to touch this file's submit-time serialisation at all, only call the
 * API it already exposes.
 */
(function () {
  'use strict';

  var DRAFT_PREFIX = 'ar_quote_draft_';

  function serializableFields(form) {
    var out = [];
    var controls = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < controls.length; i++) {
      var el = controls[i];
      if (!el.name || el.type === 'hidden' || el.name === 'bot-field') continue;
      out.push(el);
    }
    return out;
  }

  function initWizard(form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll('[data-wizard-step]'));
    if (!steps.length) return null;

    var progress = form.querySelector('[data-wizard-progress]');
    var progressBar = progress && progress.querySelector('.wizard-progress-bar');
    var progressItems = progress ? progress.querySelectorAll('[data-wizard-progress-item]') : [];
    var current = 0;

    var draftKey = DRAFT_PREFIX + (form.getAttribute('name') || 'form');
    var dynamicField = form.querySelector('[name="dados_dinamicos"]');
    var blocks = [];

    function updateProgress() {
      if (progress) {
        progress.setAttribute('aria-valuenow', String(current + 1));
      }
      if (progressBar) {
        progressBar.style.width = Math.round(((current + 1) / steps.length) * 100) + '%';
      }
      for (var i = 0; i < progressItems.length; i++) {
        progressItems[i].classList.toggle('is-active', i === current);
        progressItems[i].classList.toggle('is-done', i < current);
      }
    }

    function showStep(index) {
      for (var i = 0; i < steps.length; i++) steps[i].hidden = i !== index;
      current = index;
      updateProgress();
      saveDraft();
      var firstField = steps[index].querySelector('input, select, textarea, button');
      if (firstField) {
        try {
          firstField.focus({ preventScroll: true });
        } catch (err) {
          /* focus with options unsupported — harmless to skip */
        }
      }
      if (steps[index].scrollIntoView) {
        steps[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function goNext() {
      var API = window.ArQuoteForm;
      var bad = API ? API.validate(form, steps[current]) : [];
      if (bad.length) {
        if (API) API.focusFirst(bad[0]);
        return;
      }
      if (current < steps.length - 1) showStep(current + 1);
    }

    function goBack() {
      if (current > 0) showStep(current - 1);
    }

    for (var s = 0; s < steps.length; s++) {
      var nextBtn = steps[s].querySelector('[data-wizard-next]');
      var backBtn = steps[s].querySelector('[data-wizard-back]');
      if (nextBtn) nextBtn.addEventListener('click', goNext);
      if (backBtn) backBtn.addEventListener('click', goBack);
    }

    // ── Draft persistence ────────────────────────────────────────────────
    // Best-effort: a private window, cleared site data, or a browser that
    // blocks storage access must never break the wizard — every read/write
    // is wrapped, and a failure just means no draft, not a broken form.
    function saveDraft() {
      try {
        var data = { __step: current };
        var fields = serializableFields(form);
        for (var i = 0; i < fields.length; i++) {
          var el = fields[i];
          if (el.type === 'checkbox' || el.type === 'radio') {
            if (el.checked) data[el.name] = el.value;
            continue;
          }
          if (el.value) data[el.name] = el.value;
        }
        window.localStorage.setItem(draftKey, JSON.stringify(data));
      } catch (err) {
        /* storage unavailable — nothing to persist, nothing to fix here */
      }
    }

    function restoreDraft() {
      var raw = null;
      try {
        raw = window.localStorage.getItem(draftKey);
      } catch (err) {
        return;
      }
      if (!raw) return;
      var data;
      try {
        data = JSON.parse(raw);
      } catch (err) {
        return; // corrupted draft — ignore it rather than throw
      }
      var names = Object.keys(data);
      for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (name === '__step') continue;
        var el = form.querySelector('[name="' + name + '"]');
        if (!el) continue;
        if (el.type === 'checkbox' || el.type === 'radio') {
          if (el.value === data[name]) el.checked = true;
        } else {
          el.value = data[name];
        }
      }
      if (typeof data.__step === 'number' && data.__step >= 0 && data.__step < steps.length) {
        current = data.__step;
      }
    }

    function clearDraft() {
      try {
        window.localStorage.removeItem(draftKey);
      } catch (err) {
        /* nothing to clear if storage was never reachable */
      }
    }

    form.addEventListener('input', saveDraft);
    form.addEventListener('change', saveDraft);
    // ar-quote-form.js dispatches this only after a real HTTP-ok response —
    // see its succeed(), not on submit alone — so the draft only clears on
    // a request that actually reached the server.
    form.addEventListener('ar-quote-form:success', clearDraft);

    // ── Dynamic blocks → dados_dinamicos ────────────────────────────────
    // Capture phase, deliberately: it has to run before ar-quote-form.js's
    // own (bubble-phase) submit listener reads FormData(form), the same
    // ordering concern lead-branch-fields.js documents for a field that is
    // visible but excluded from the payload — here the risk is the mirror
    // image, a block the visitor filled in that the payload never gets
    // because the hidden field was serialised too late.
    function serializeDynamicBlocks() {
      if (!dynamicField) return;
      try {
        dynamicField.value = blocks.length ? JSON.stringify(blocks) : '';
      } catch (err) {
        dynamicField.value = '';
      }
    }
    form.addEventListener('submit', serializeDynamicBlocks, true);

    restoreDraft();
    showStep(current);

    return {
      /** Adds one block's data (a plain object) to what dados_dinamicos will
       *  carry at submit time. Fase 2's saúde repeater calls this once per
       *  "pessoa segura" row; nothing in Fase 1 calls it. */
      registerDynamicBlock: function (block) {
        blocks.push(block);
        serializeDynamicBlocks();
      },
      /** Replaces the whole set at once — e.g. after the visitor removes a
       *  repeater row, the caller rebuilds the array and calls this instead
       *  of tracking individual removals here. */
      setDynamicBlocks: function (newBlocks) {
        blocks = newBlocks || [];
        serializeDynamicBlocks();
      },
      goToStep: showStep,
      currentStep: function () {
        return current;
      },
    };
  }

  var wizardForms = document.querySelectorAll('form[data-wizard]');
  var instances = [];
  for (var i = 0; i < wizardForms.length; i++) {
    var instance = initWizard(wizardForms[i]);
    if (instance) instances.push(instance);
  }

  window.QuoteWizard = { init: initWizard, instances: instances };
})();
