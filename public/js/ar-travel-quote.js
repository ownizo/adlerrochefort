/*
 * Adler & Rochefort — online travel insurance quote & buy (November 2026).
 * Prices come from HelloSafe Atlas through /api/travel/quote (signed server
 * side); "Choose" mints a tracked subscription link through /api/travel/link
 * and sends the traveller to the HelloSafe subscription form to pay.
 * Copy for each language lives in <script type="application/json" id="ar-tq-i18n">.
 * Without a live key the API answers NOT_LIVE and the page points to the
 * trip-details form instead. data-intent / data-sports preset the form on landing pages. ?preview=<token> lets the team test the sandbox.
 */
(function () {
  'use strict';
  var root = document.getElementById('ar-tq');
  var dataEl = document.getElementById('ar-tq-i18n');
  if (!root || !dataEl) return;
  var T;
  try { T = JSON.parse(dataEl.textContent); } catch (e) { return; }
  var lang = root.getAttribute('data-lang') || 'en';
  var locale = root.getAttribute('data-locale') || 'en-GB';
  var CODES = 'AF AX AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW'.split(' ');
  var SCHENGEN = 'AT BE BG HR CZ DK EE FI FR DE GR HU IS IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE CH'.split(' ');
  var dn = null;
  try { dn = new Intl.DisplayNames([locale, 'en'], { type: 'region' }); } catch (e) {}
  function cname(c) { try { return (dn && dn.of(c)) || c; } catch (e) { return c; } }
  var countries = CODES.map(function (c) { return { c: c, n: cname(c) }; })
    .sort(function (a, b) { return a.n.localeCompare(b.n, locale); });
  var preview = '';
  try { preview = new URLSearchParams(location.search).get('preview') || ''; } catch (e) {}

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (x) { if (x) n.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); });
    return n;
  }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function addDays(s, n) { var d = new Date(s + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return iso(d); }
  function track(name, params) { try { if (window.gtag) window.gtag('event', name, params || {}); } catch (e) {} }

  // ---------- form ----------
  var today = iso(new Date());
  var state = { dest: [], sessionId: null, trip: null, offers: [], sort: 'cover' };

  var intentSel = el('select', { id: 'tq-intent', name: 'intent', required: 'required' });
  T.intents.forEach(function (x) { intentSel.appendChild(el('option', { value: x[0], text: x[1] })); });

  var resSel = el('select', { id: 'tq-res', name: 'residence', required: 'required' });
  countries.forEach(function (x) { resSel.appendChild(el('option', { value: x.c, text: x.n })); });
  resSel.value = root.getAttribute('data-residence') || 'PT';

  var dl = el('datalist', { id: 'tq-countries' });
  countries.forEach(function (x) { dl.appendChild(el('option', { value: x.n })); });
  var destIn = el('input', { id: 'tq-dest', type: 'text', list: 'tq-countries', autocomplete: 'off', placeholder: T.f.destPh });
  var chips = el('div', { class: 'tq-chips', 'aria-live': 'polite' });
  var schBtn = el('button', { type: 'button', class: 'tq-link', text: T.f.schengen });

  var start = el('input', { id: 'tq-start', type: 'date', min: today, required: 'required', value: addDays(today, 14) });
  var end = el('input', { id: 'tq-end', type: 'date', min: today, required: 'required', value: addDays(today, 24) });
  var endWrap;

  var count = el('select', { id: 'tq-count' });
  for (var i = 1; i <= 8; i++) count.appendChild(el('option', { value: String(i), text: String(i) }));
  var ages = el('div', { class: 'tq-ages' });

  var cancel = el('input', { id: 'tq-cancel', type: 'checkbox' });
  var tripPrice = el('input', { id: 'tq-price', type: 'number', min: '1', step: '1', inputmode: 'numeric', placeholder: T.f.tripPricePh });
  var priceWrap = el('div', { class: 'tq-field tq-hide' }, [el('label', { for: 'tq-price', text: T.f.tripPrice }), tripPrice]);
  var sports = el('input', { id: 'tq-sports', type: 'checkbox' });

  var submit = el('button', { type: 'submit', class: 'tq-submit', text: T.f.submit });
  var msg = el('p', { class: 'tq-msg', role: 'status' });
  var results = el('div', { class: 'tq-results', id: 'tq-results', tabindex: '-1' });

  function field(label, input, id, extra) {
    return el('div', { class: 'tq-field' + (extra ? ' ' + extra : '') }, [el('label', { for: id, text: label }), input]);
  }
  function renderAges() {
    var n = Number(count.value), old = [].slice.call(ages.querySelectorAll('input')).map(function (x) { return x.value; });
    ages.innerHTML = '';
    for (var k = 0; k < n; k++) {
      var a = el('input', { type: 'number', min: '0', max: '110', step: '1', inputmode: 'numeric', required: 'required',
        'aria-label': T.f.ageOf.replace('{n}', k + 1), placeholder: T.f.agePh, value: old[k] || (k === 0 ? '' : '') });
      ages.appendChild(a);
    }
  }
  function renderChips() {
    chips.innerHTML = '';
    state.dest.forEach(function (c) {
      var b = el('button', { type: 'button', class: 'tq-chip', 'aria-label': T.f.remove + ' ' + cname(c) }, [cname(c) + ' ×']);
      b.addEventListener('click', function () { state.dest = state.dest.filter(function (x) { return x !== c; }); renderChips(); });
      chips.appendChild(b);
    });
  }
  function addDest(code) {
    if (code && state.dest.indexOf(code) < 0 && state.dest.length < 20) state.dest.push(code);
    renderChips();
  }
  function resolve(loose) {
    var v = destIn.value.trim().toLowerCase();
    if (!v) return false;
    var hit = countries.filter(function (x) { return x.n.toLowerCase() === v || x.c.toLowerCase() === v; })[0];
    if (!hit && loose) hit = countries.filter(function (x) { return x.n.toLowerCase().indexOf(v) === 0; })[0];
    if (hit) { addDest(hit.c); destIn.value = ''; return true; }
    return false;
  }
  destIn.addEventListener('change', function () { resolve(false); });
  destIn.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    resolve(true);
  });
  schBtn.addEventListener('click', function () { SCHENGEN.forEach(function (c) { if (state.dest.length < 20) addDest(c); }); });
  count.addEventListener('change', renderAges);
  cancel.addEventListener('change', function () { priceWrap.classList.toggle('tq-hide', !cancel.checked); });
  function syncIntent() {
    var annual = intentSel.value === 'annual' || intentSel.value === 'expat';
    if (annual) end.value = addDays(start.value, 364);
    endWrap.classList.toggle('tq-dim', annual);
    end.readOnly = annual;
    if (intentSel.value === 'cancellation') { cancel.checked = true; priceWrap.classList.remove('tq-hide'); }
  }
  intentSel.addEventListener('change', syncIntent);
  start.addEventListener('change', function () {
    end.min = start.value;
    if (end.value < start.value) end.value = addDays(start.value, 7);
    syncIntent();
  });

  endWrap = field(T.f.end, end, 'tq-end');
  var form = el('form', { class: 'tq-form', novalidate: 'novalidate' }, [
    el('div', { class: 'tq-grid' }, [
      field(T.f.intent, intentSel, 'tq-intent', 'tq-wide'),
      field(T.f.residence, resSel, 'tq-res'),
      el('div', { class: 'tq-field' }, [el('label', { for: 'tq-dest', text: T.f.dest }), destIn, dl, schBtn]),
      el('div', { class: 'tq-wide' }, [chips]),
      field(T.f.start, start, 'tq-start'),
      endWrap,
      field(T.f.count, count, 'tq-count'),
      el('div', { class: 'tq-field' }, [el('span', { class: 'tq-lab', text: T.f.ages }), ages]),
      el('div', { class: 'tq-field tq-wide tq-checks' }, [
        el('label', { class: 'tq-check' }, [cancel, ' ' + T.f.cancel]),
        el('label', { class: 'tq-check' }, [sports, ' ' + T.f.sports]),
      ]),
      priceWrap,
    ]),
    submit, msg,
  ]);
  root.appendChild(form);
  root.appendChild(results);
  renderAges();
  // sensible default destination per page
  (root.getAttribute('data-dest') || '').split(',').filter(Boolean).forEach(addDest);
  // landing-page presets: trip type and sports option
  var presetIntent = root.getAttribute('data-intent');
  if (presetIntent && T.intents.some(function (x) { return x[0] === presetIntent; })) { intentSel.value = presetIntent; syncIntent(); }
  if (root.getAttribute('data-sports') === '1') sports.checked = true;

  function api(path, body) {
    var h = { 'content-type': 'application/json' };
    if (preview) h['x-ar-preview'] = preview;
    return fetch(path, { method: 'POST', headers: h, body: JSON.stringify(body) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); });
  }
  function err(code) {
    var e = T.err[code] || T.err.generic;
    msg.textContent = e;
    msg.className = 'tq-msg tq-err';
  }
  function notLive() {
    results.innerHTML = '';
    results.appendChild(el('div', { class: 'tq-notlive' }, [
      el('p', { text: T.err.NOT_LIVE }),
      el('a', { class: 'tq-btn', href: '#ipmi-pedido', text: T.f.writeUs }),
    ]));
    msg.textContent = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.className = 'tq-msg';
    var trav = [].slice.call(ages.querySelectorAll('input')).map(function (x) { return { age: parseInt(x.value, 10) }; });
    if (destIn.value) resolve(true);
    if (!state.dest.length) return err('NO_DESTINATIONS');
    if (trav.some(function (t) { return !(t.age >= 0 && t.age <= 110); })) return err('NO_TRAVELLERS');
    if (!start.value || !end.value || end.value < start.value) return err('BAD_DATES');
    var trip = {
      intent: intentSel.value, startDate: start.value, endDate: end.value,
      countryResidence: resSel.value, arrivalCountries: state.dest.slice(), travellers: trav,
      currency: 'EUR',
    };
    if (cancel.checked) { trip.shouldCoverCancellation = true; trip.tripPrice = Number(tripPrice.value); }
    if (sports.checked) trip.shouldCoverExtremeSports = true;
    var sameTraveller = state.sessionId ? { sessionId: state.sessionId } : {};
    submit.disabled = true;
    msg.textContent = T.f.loading;
    results.innerHTML = '';
    track('travel_quote_request', { intent: trip.intent, residence: trip.countryResidence, travellers: trav.length });
    api('/api/travel/quote', Object.assign({ trip: trip, language: lang }, sameTraveller)).then(function (j) {
      submit.disabled = false;
      if (j._status === 503) return notLive();
      if (j._status !== 200) return err(j.error);
      state.sessionId = j.sessionId; state.trip = trip; state.offers = j.offers || []; state.labels = j.labels || {}; state.mode = j.mode;
      msg.textContent = '';
      renderResults();
      track('travel_quote_shown', { offers: state.offers.length, mode: j.mode });
    }).catch(function () { submit.disabled = false; err('generic'); });
  });

  // ---------- results ----------
  var KEY = [
    ['hospitalFeesAbroad', 'expatMedicalFees', 'expatHospitalFees'],
    ['repatriationAssistance', 'rapatriationAssistance', 'expatRepatriation'],
    ['cancelTrip'],
    ['privateRC', 'privateLiability', 'expatCivilLiability'],
    ['suitcaseInsurance'],
    ['assistance247'],
  ];
  function g(offer, slugs) {
    for (var k = 0; k < slugs.length; k++) if (offer.guarantees && offer.guarantees[slugs[k]]) return [slugs[k], offer.guarantees[slugs[k]]];
    return null;
  }
  function fmtMoney(v, cur) {
    try { return new Intl.NumberFormat(locale, { style: 'currency', currency: cur || 'EUR', maximumFractionDigits: v % 1 ? 2 : 0 }).format(v); }
    catch (e) { return v + ' ' + (cur || ''); }
  }
  function fmtG(x, cur) {
    var s = x.state, v = x.value;
    switch (s) {
      case 'value': return fmtMoney(v, cur);
      case 'per_day': return fmtMoney(v, cur) + T.st.perDay;
      case 'number': return String(v);
      case 'percentage': return v + '%';
      case 'trip_price': return T.st.trip_price;
      case 'studies_amount': return T.st.studies_amount;
      case 'included': case 'unlimited': case 'actual_costs': case 'return_ticket':
      case 'many_reasons': case 'any_justified_reason': case 'see_conditions': case 'not_available':
        return T.st[s];
      default: return null; // unknown state: never shown as covered
    }
  }
  function medical(o) {
    var x = g(o, KEY[0]); if (!x) return 0;
    var s = x[1].state; if (s === 'unlimited' || s === 'actual_costs') return 1e12;
    return s === 'value' ? Number(x[1].value) || 0 : 0;
  }
  function label(slug) { return T.g[slug] || (state.labels && state.labels[slug]) || slug; }

  function renderResults() {
    results.innerHTML = '';
    if (state.mode === 'sandbox') results.appendChild(el('p', { class: 'tq-sandbox', text: T.f.sandbox }));
    if (!state.offers.length) {
      results.appendChild(el('div', { class: 'tq-notlive' }, [el('p', { text: T.err.NO_OFFERS }),
        el('a', { class: 'tq-btn', href: '#ipmi-pedido', text: T.f.writeUs })]));
      results.focus();
      return;
    }
    var head = el('div', { class: 'tq-rhead' }, [
      el('h3', { text: T.f.found.replace('{n}', state.offers.length) }),
      (function () {
        var s = el('select', { 'aria-label': T.f.sortBy });
        s.appendChild(el('option', { value: 'cover', text: T.f.sortCover }));
        s.appendChild(el('option', { value: 'price', text: T.f.sortPrice }));
        s.value = state.sort;
        s.addEventListener('change', function () { state.sort = s.value; renderResults(); });
        return s;
      })(),
    ]);
    results.appendChild(head);
    var list = state.offers.slice().sort(function (a, b) {
      if (state.sort === 'price') return (a.price ? a.price.amount : 1e9) - (b.price ? b.price.amount : 1e9);
      return medical(b) - medical(a) || (a.price ? a.price.amount : 0) - (b.price ? b.price.amount : 0);
    });
    list.forEach(function (o) { results.appendChild(card(o)); });
    results.appendChild(el('p', { class: 'tq-disc', text: T.f.disclosure }));
    results.focus();
  }

  function card(o) {
    var cur = o.guaranteeCurrency || (o.price && o.price.currency) || 'EUR';
    var rows = KEY.map(function (slugs) {
      var x = g(o, slugs); if (!x) return null;
      var v = fmtG(x[1], cur); if (v === null) return null;
      var cell = el('td', { text: v });
      if (x[1].franchiseDetails) cell.appendChild(el('small', { text: x[1].franchiseDetails }));
      return el('tr', { class: x[1].state === 'not_available' ? 'tq-no' : '' }, [el('th', { scope: 'row', text: label(x[0]) }), cell]);
    }).filter(Boolean);
    var img = o.insurer.iconUrl || o.insurer.logoUrl;
    var price = o.price ? (o.price.isStartingPrice ? T.f.from + ' ' : '') + fmtMoney(o.price.amount, o.price.currency) : '—';
    var btn = el('button', { type: 'button', class: 'tq-btn tq-buy', text: T.f.choose });
    btn.addEventListener('click', function () { buy(o, btn); });
    var docs = el('p', { class: 'tq-docs' });
    if (o.documents && o.documents.ipidUrl) docs.appendChild(el('a', { href: o.documents.ipidUrl, target: '_blank', rel: 'noopener nofollow', text: T.f.ipid }));
    if (o.documents && o.documents.cgvUrl) docs.appendChild(el('a', { href: o.documents.cgvUrl, target: '_blank', rel: 'noopener nofollow', text: T.f.terms }));
    var hl = el('div', { class: 'tq-hl' });
    if (o.highlights && o.highlights.included && o.highlights.included.length) {
      hl.appendChild(el('ul', null, o.highlights.included.slice(0, 4).map(function (t) { return el('li', { text: t }); })));
    }
    if (o.highlights && o.highlights.excluded && o.highlights.excluded.length) {
      hl.appendChild(el('ul', { class: 'tq-ex' }, o.highlights.excluded.slice(0, 3).map(function (t) { return el('li', { text: t }); })));
    }
    return el('article', { class: 'tq-card' }, [
      el('div', { class: 'tq-ctop' }, [
        img ? el('img', { src: img, alt: '', width: '48', height: '48', loading: 'lazy' }) : null,
        el('div', null, [el('h4', { text: o.name || o.insurer.name || '' }),
          el('p', { class: 'tq-ins', text: T.f.underwritten.replace('{insurer}', o.insurer.name || '—') })]),
        el('div', { class: 'tq-price' }, [el('strong', { text: price }), el('span', { text: T.f.total })]),
      ]),
      rows.length ? el('table', { class: 'tq-gt' }, [el('tbody', null, rows)]) : null,
      hl, docs, btn,
    ]);
  }

  function buy(o, btn) {
    btn.disabled = true;
    var old = btn.textContent;
    btn.textContent = T.f.opening;
    var clickRef = null;
    try { var q = new URLSearchParams(location.search); clickRef = q.get('gclid') || q.get('gbraid') || q.get('wbraid'); } catch (e) {}
    track('travel_offer_click', { insurer: o.insurer.name, value: o.price && o.price.amount, currency: o.price && o.price.currency });
    var body = { sessionId: state.sessionId, trip: state.trip, offerId: o.id, language: lang };
    if (clickRef) body.clickRef = clickRef;
    api('/api/travel/link', body).then(function (j) {
      if (j._status === 200 && j.url) {
        track('begin_checkout', { currency: o.price && o.price.currency, value: o.price && o.price.amount, items: [{ item_name: o.name || o.insurer.name, item_brand: o.insurer.name }] });
        if (j.mode === 'sandbox') { btn.disabled = false; btn.textContent = old; window.open(j.url, '_blank', 'noopener'); return; }
        window.location.assign(j.url);
      } else { btn.disabled = false; btn.textContent = old; err(j._status === 503 ? 'NOT_LIVE' : j.error); }
    }).catch(function () { btn.disabled = false; btn.textContent = old; err('generic'); });
  }
})();
