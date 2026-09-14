/**
 * A checkbox that reveals one named field group when checked, and hides +
 * clears + disables it when unchecked — Especificação v2's explicit rule
 * (Fase 2, Habitação: "obras de renovação") that a field whose condition
 * stops applying must never leave a stale value in the payload.
 *
 * Follows public/js/lead-branch-fields.js's exact discipline (clear, then
 * disable — never the other way round, so an abandoned answer can't survive
 * a moment as a disabled-but-still-valued control) but is a separate, small
 * file rather than an extension of that one: lead-branch-fields.js's apply()
 * re-evaluates every `[data-branch]` group in the form against ONE trigger's
 * value, which assumes a single trigger per form. Habitação's page needs a
 * second, independent trigger alongside "regime de ocupação" (which does
 * use lead-branch-fields.js, unmodified, for its own AL-only group) — two
 * triggers sharing that file's namespace would each blindly re-evaluate the
 * other's groups. This file uses its own attribute (`data-field-toggle`,
 * matched by element id) so the two mechanisms never see each other's
 * markup.
 *
 * Markup contract:
 *   <input type="checkbox" data-field-toggle="obras-group">
 *   <div id="obras-group" hidden>…fields, ideally already `disabled`…</div>
 */
(function () {
  'use strict';

  function clear(el) {
    if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
    else el.value = '';
  }

  function apply(trigger) {
    var group = document.getElementById(trigger.getAttribute('data-field-toggle'));
    if (!group) return;
    var controls = group.querySelectorAll('input, select, textarea');
    if (trigger.checked) {
      group.removeAttribute('hidden');
      for (var i = 0; i < controls.length; i++) controls[i].removeAttribute('disabled');
    } else {
      group.setAttribute('hidden', '');
      for (var i = 0; i < controls.length; i++) {
        // Clear before disabling — same order lead-branch-fields.js uses,
        // and for the same reason: an abandoned answer must not travel with
        // the submission, and must not reappear if the box is re-checked.
        clear(controls[i]);
        controls[i].setAttribute('disabled', '');
      }
    }
  }

  function init() {
    var triggers = document.querySelectorAll('[data-field-toggle]');
    for (var i = 0; i < triggers.length; i++) {
      (function (trigger) {
        apply(trigger);
        trigger.addEventListener('change', function () {
          apply(trigger);
        });
      })(triggers[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
