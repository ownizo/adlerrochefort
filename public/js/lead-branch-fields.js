/**
 * Progressive qualification fields for the lead forms.
 *
 * Every branch's fields are present in the HTML from the start so Netlify
 * registers them at deploy time. They ship hidden *and* disabled, because a
 * disabled control is left out of the submission — that is what keeps the
 * notification email from filling with empty rows for the twelve branches the
 * visitor did not pick.
 *
 * The corollary is the dangerous half: a control that is shown to the visitor
 * but left disabled is filled in, looks submitted, and is dropped by the
 * browser before the request leaves the page, with no error anywhere. So
 * revealing a group and enabling it are the same operation here, and hiding a
 * group both disables it and empties it — the emptying is belt-and-braces
 * against a future change that reveals a group without going through apply().
 *
 * scripts/form-payload-test.mjs asserts the resulting payload for the three
 * code paths (landing form, article form, homepage form) plus a mid-form branch
 * switch. Run it after touching this file.
 */
(function () {
  /** Empties one control, whatever kind it is. */
  function clear(el) {
    if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
    else el.value = '';
  }

  function apply(select) {
    var form = select.form;
    if (!form) return;
    var value = select.value;
    var groups = form.querySelectorAll('[data-branch]');
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var active = group.getAttribute('data-branch') === value;
      var inputs = group.querySelectorAll('input, select, textarea');
      if (active) {
        group.removeAttribute('hidden');
        for (var j = 0; j < inputs.length; j++) inputs[j].removeAttribute('disabled');
      } else {
        group.setAttribute('hidden', '');
        for (var k = 0; k < inputs.length; k++) {
          // Clear before disabling: a branch abandoned half-filled must not
          // travel with the next one, and must not reappear if the visitor
          // switches back.
          clear(inputs[k]);
          inputs[k].setAttribute('disabled', '');
        }
      }
    }
  }

  function init() {
    var selects = document.querySelectorAll('select[data-branch-select]');
    for (var i = 0; i < selects.length; i++) {
      (function (select) {
        apply(select);
        select.addEventListener('change', function () {
          apply(select);
        });
      })(selects[i]);
    }

    // Record which page the lead came from, so the notification email says
    // where the visitor was rather than just which form fired.
    var sources = document.querySelectorAll('input[name="source_url"]');
    for (var k = 0; k < sources.length; k++) sources[k].value = window.location.href;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
