/* ════════════════════════════════════════════════════════════════
   Adler & Rochefort — Conversion behaviour (EN blog)
   - Submits inline lead forms through Netlify Forms. Health pages use
     the "expat-health-quote" form and post to
     /en/health-insurance-quote/; home pages carry data-endpoint
     (and data-form-label) so they post to /en/home-insurance-quote/
     instead. No new backend.
   - Shows/hides the sticky mobile CTA bar on scroll.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ───────── Inline lead forms ─────────
  var forms = document.querySelectorAll('form.ar-cta-form');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var situation = (form.querySelector('[name="situation"]') || {}).value || '';
      var propertyUse = (form.querySelector('[name="property-use"]') || {}).value || '';
      var endpoint = form.getAttribute('data-endpoint') || '/en/health-insurance-quote/';
      var label = form.getAttribute('data-form-label') || 'expat_health_quote';
      var data = new FormData(form);
      var btn = form.querySelector('button[type="submit"]');
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
        }
      }).catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Request my free quote'; }
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
