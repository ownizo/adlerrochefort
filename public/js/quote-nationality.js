/**
 * Nationality field: a free-text input backed by a <datalist> of country
 * names (Especificação v2 — "nome traduzido por língua, código ISO gravado
 * no valor do campo"), mirrored into a hidden field carrying the ISO
 * 3166-1 alpha-2 code.
 *
 * A plain `<input list>` can't do this alone: when a visitor picks a
 * <datalist> suggestion, the browser fills the input with that <option>'s
 * `value` attribute, not its text content — so an option shaped to make the
 * *input* show the country name ends up putting the country name, not the
 * code, into whatever the input's own `name` submits. Splitting into two
 * fields is what lets the visible box show "Portugal" while the value that
 * actually reaches the server (data/i18n/quote-form/{lang}.json's
 * `countries.<CODE>` → dados_comuns.nacionalidade) is "PT".
 *
 * Markup contract:
 *   <input list="nationality-list" data-code-target="ID_OF_HIDDEN_FIELD" …>
 *   <input type="hidden" id="ID_OF_HIDDEN_FIELD" name="nacionalidade">
 *   <datalist id="nationality-list">
 *     <option value="Portugal" data-code="PT"></option>
 *     …
 *   </datalist>
 *
 * Free text that doesn't exactly match a known country name (the visitor
 * ignored the suggestions, or typed something the list doesn't have) is
 * never discarded — it's copied through as-is, so a near-miss still reaches
 * dados_comuns as *something* a human can read, rather than an empty field
 * that looks like the question was skipped.
 */
(function () {
  'use strict';

  function wire(input) {
    var listId = input.getAttribute('list');
    var list = listId && document.getElementById(listId);
    var hidden = document.getElementById(input.getAttribute('data-code-target'));
    if (!list || !hidden) return;

    var codeByName = {};
    var options = list.querySelectorAll('option');
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      var name = (opt.getAttribute('value') || '').trim().toLowerCase();
      if (name) codeByName[name] = opt.getAttribute('data-code') || '';
    }

    function sync() {
      var typed = (input.value || '').trim();
      if (!typed) {
        hidden.value = '';
        return;
      }
      var code = codeByName[typed.toLowerCase()];
      hidden.value = code || typed;
    }

    input.addEventListener('input', sync);
    input.addEventListener('change', sync);
    // Covers a value already in the input at load time — restored from a
    // wizard draft (public/js/quote-wizard.js's restoreDraft sets .value
    // directly, without dispatching input/change) or filled by the browser's
    // own autofill before this script runs.
    sync();
  }

  var inputs = document.querySelectorAll('input[data-code-target]');
  for (var i = 0; i < inputs.length; i++) wire(inputs[i]);
})();
