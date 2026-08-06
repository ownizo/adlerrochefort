/**
 * Progressive qualification fields for the lead forms.
 *
 * Every branch's fields are present in the HTML from the start so Netlify
 * registers them at deploy time; this only toggles visibility and the disabled
 * attribute, because disabled inputs are left out of the submission and would
 * otherwise fill the notification email with empty rows.
 */
(function () {
  function apply(select) {
    var form = select.form;
    if (!form) return;
    var value = select.value;
    var groups = form.querySelectorAll('[data-branch]');
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var active = group.getAttribute('data-branch') === value;
      group.hidden = !active;
      var inputs = group.querySelectorAll('input, select, textarea');
      for (var j = 0; j < inputs.length; j++) inputs[j].disabled = !active;
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
