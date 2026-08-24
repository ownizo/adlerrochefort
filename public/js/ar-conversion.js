/* ════════════════════════════════════════════════════════════════
   Adler & Rochefort — Conversion behaviour (EN blog)
   - Submits inline lead forms through Netlify Forms. Health pages use
     the "expat-health-quote" form and post to
     /en/health-insurance-quote/; home pages carry data-endpoint
     (and data-form-label) so they post to /en/home-insurance-quote/
     instead; the Collections & Valuables cluster uses
     "valuables-review" and posts to /en/private-clients/; the motor
     cluster uses "car-insurance-quote" and posts to
     /en/car-insurance-portugal/. No new backend.
   - Stamps source_url with the article's own URL before posting, so a
     lead names the page it came from and not the endpoint it was sent
     to. The hidden field is left empty in the markup on purpose: it is
     the same mechanism ar-quote-form.js uses on the landing pages.
   - Shows/hides the sticky mobile CTA bar on scroll.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ───────── Inline lead forms ─────────

  // A checkbox group is required when its first box carries
  // data-required-group="<name>" (the valuables form uses this for
  // "What would you like to review?"). Native `required` on a checkbox
  // demands that box specifically, so the check is done here instead and
  // reported through the same browser bubble.
  function groupsSatisfied(form) {
    var anchors = form.querySelectorAll('[data-required-group]');
    var ok = true;
    Array.prototype.forEach.call(anchors, function (anchor) {
      var group = anchor.getAttribute('data-required-group');
      var boxes = form.querySelectorAll('[name="' + group + '"]');
      var checked = Array.prototype.some.call(boxes, function (b) { return b.checked; });
      anchor.setCustomValidity(checked ? '' : 'Please choose at least one.');
      if (!checked && ok) { anchor.reportValidity(); ok = false; }
    });
    return ok;
  }

  var forms = document.querySelectorAll('form.ar-cta-form');
  Array.prototype.forEach.call(forms, function (form) {
    var sourceUrl = form.querySelector('input[name="source_url"]');
    if (sourceUrl && !sourceUrl.value) sourceUrl.value = window.location.href;

    // Clear the group message as soon as the visitor ticks anything.
    Array.prototype.forEach.call(form.querySelectorAll('[data-required-group]'), function (anchor) {
      var group = anchor.getAttribute('data-required-group');
      Array.prototype.forEach.call(form.querySelectorAll('[name="' + group + '"]'), function (b) {
        b.addEventListener('change', function () { anchor.setCustomValidity(''); });
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!groupsSatisfied(form)) return;
      var situation = (form.querySelector('[name="situation"]') || {}).value || '';
      var propertyUse = (form.querySelector('[name="property-use"]') || {}).value || '';
      var endpoint = form.getAttribute('data-endpoint') || '/en/health-insurance-quote/';
      var label = form.getAttribute('data-form-label') || 'expat_health_quote';
      var data = new FormData(form);
      var btn = form.querySelector('button[type="submit"]');
      var btnLabel = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      }).then(function () {
        var wrap = form.closest('.ar-cta-form-wrap') || form.parentNode;
        form.style.display = 'none';
        var sp = wrap.querySelector('.ar-form-smallprint');
        if (sp) sp.style.display = 'none';
        var success = wrap.querySelector('.ar-cta-form-success');
        if (success) success.classList.add('show');
        if (typeof gtag === 'function') {
          var params = { form_name: label, form_location: 'blog_inline' };
          if (situation) params.form_situation = situation;
          if (propertyUse) params.form_property_use = propertyUse;
          gtag('event', 'generate_lead', params);
          // Same Google Ads conversion as the landing-page quote forms, so
          // bidding counts one submitted request wherever it came from.
          gtag('event', 'conversion', {
            send_to: 'AW-18361722533/HxH6CKqa1uEcEKXNxrNE',
            value: 1.0,
            currency: 'EUR',
          });
        }
      }).catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
        alert('An error occurred while sending your request. Please try again, or message us on WhatsApp.');
      });
    });
  });

  // ───────── Sticky mobile CTA bar ─────────
  var bar = document.querySelector('.ar-sticky-cta');
  if (bar) {
    var dismissed = false;
    try { dismissed = sessionStorage.getItem('arStickyClosed') === '1'; } catch (err) {}

    var closeBtn = bar.querySelector('.ar-sticky-cta-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        bar.classList.remove('show');
        dismissed = true;
        try { sessionStorage.setItem('arStickyClosed', '1'); } catch (err) {}
      });
    }

    var onScroll = function () {
      if (dismissed) return;
      if (window.pageYOffset > 600) {
        bar.classList.add('show');
      } else {
        bar.classList.remove('show');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ───────── Smooth scroll to the inline form ─────────
  Array.prototype.forEach.call(document.querySelectorAll('a[href="#ar-quote-form"]'), function (a) {
    a.addEventListener('click', function (e) {
      var target = document.getElementById('ar-quote-form');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
