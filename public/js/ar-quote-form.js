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
    },
    pt: {
      required: 'Preencha este campo.',
      email: 'Introduza um email válido, por exemplo nome@email.com.',
      sending: 'A enviar…',
      failed:
        'Não foi possível enviar o seu pedido. Verifique a ligação e tente novamente — ' +
        'não perdeu nada do que escreveu.',
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

  /** Returns the offending controls, in document order. */
  function validate(form) {
    var bad = [];
    var controls = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < controls.length; i++) {
      var el = controls[i];
      if (el.type === 'hidden' || el.name === 'bot-field') continue;
      clearError(el);
      var value = (el.value || '').trim();
      if (el.hasAttribute('required') && !value) {
        showError(el, t.required);
        bad.push(el);
      } else if (el.type === 'email' && value && !EMAIL.test(value)) {
        showError(el, t.email);
        bad.push(el);
      }
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

  function track(form) {
    if (typeof window.gtag !== 'function') return;
    var params = { form_name: (form.getAttribute('name') || '').replace(/-/g, '_') };
    var extra = form.getAttribute('data-ga-field');
    if (extra) {
      var el = form.querySelector('[name="' + extra + '"]');
      var value = el && el.value;
      if (value) params['form_' + extra.replace(/-/g, '_')] = value;
    }
    window.gtag('event', 'generate_lead', params);
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
  }

  function wire(form) {
    form.setAttribute('novalidate', 'novalidate');

    var source = form.querySelector('input[name="source_url"]');
    if (source && !source.value) source.value = window.location.href;

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
          if (button) form.insertBefore(note, button);
          else form.appendChild(note);
          focusFirst(note);
        });
    });
  }

  var forms = document.querySelectorAll('form[data-quote-form]');
  for (var i = 0; i < forms.length; i++) wire(forms[i]);
})();
