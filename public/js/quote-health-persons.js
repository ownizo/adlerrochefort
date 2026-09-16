/**
 * The "pessoa segura" repeater for the Saúde wizard (Especificação v2,
 * Fase 2 C4) — the one ramo that needs more than a fixed set of fields,
 * because a health policy covers a household, not a single risk. Builds N
 * blocks (nome completo, data de nascimento, NIF), each one pushed into
 * public/js/quote-wizard.js's dados_dinamicos array via setDynamicBlocks()
 * — the mechanism that file already exposed in Fase 1, unused until now
 * (see its own top comment: "built and tested now so that phase doesn't
 * need to touch this file's submit-time serialisation at all").
 *
 * Deliberately no age minimum on a person block's own date of birth — the
 * ≥18 rule belongs to the tomador (see quote-validators.js's isAtLeast18,
 * applied to this page's own Passo 1 data_nascimento, not here) and never
 * to who is covered: a health policy insures children.
 *
 * Deliberately no clinical/medical field anywhere in this file. The medical
 * questionnaire is the insurer's own, at the adhesion step, through a
 * different channel — asking about pre-existing conditions in a lead-intake
 * form is exactly the kind of sensitive data this form has no business
 * collecting or storing.
 *
 * Person-block inputs carry NO `name` attribute on purpose: they must never
 * be picked up by `new FormData(form)` as ordinary same-named, multi-value
 * fields (which would collapse three people's NIFs into one indistinguishable
 * list) — they are read directly by this file and only ever leave the page
 * as the serialised blocks array in the hidden `dados_dinamicos` field.
 * public/js/ar-quote-form.js's validate() still finds and checks them
 * (it queries `input, select, textarea` inside the current step, not by
 * `name`), so `required`/`data-validate` on these fields works exactly like
 * everywhere else in the wizard.
 *
 * Markup contract:
 *   <div data-persons-repeater>
 *     <div data-persons-list></div>
 *     <button type="button" data-persons-add>…</button>
 *   </div>
 * One repeater per page. If a future ramo needs a second, independent
 * repeater on the same page, this file would need a container-to-wizard
 * mapping instead of always using instances[0] — not needed yet.
 */
(function () {
  'use strict';

  // Especificação v2, "restantes línguas" — found while building the German
  // Saúde wizard: this file's visible text (labels, placeholder, "Pessoa N",
  // the remove button) was hardcoded Portuguese unconditionally, with no
  // language branch at all — unlike every other UI string in the wizard
  // (public/js/ar-quote-form.js's own COPY object). That meant the "pessoa
  // segura" repeater on the live, in-production /en/health-insurance-quote/
  // page has been showing "Nome completo"/"Data de nascimento"/"NIF"/
  // "Pessoa 1"/"Remover esta pessoa" in Portuguese to English-speaking
  // visitors since Fase 2 shipped it — nothing before this exercised the
  // repeater's own rendered text, only field values and validation
  // behaviour (wizard-required-fields-test.mjs), so it went uncaught.
  // Fixed here, for EN too, not just the new DE page — same lang-keyed
  // pattern as ar-quote-form.js, same default ('pt', matching what every
  // page silently got before this fix, so no currently-correct page's
  // behaviour changes).
  var COPY = {
    pt: { name: 'Nome completo', dob: 'Data de nascimento', nif: 'NIF', nifPlaceholder: 'Número de contribuinte', remove: 'Remover esta pessoa', person: 'Pessoa' },
    en: { name: 'Full name', dob: 'Date of birth', nif: 'Portuguese tax number (NIF)', nifPlaceholder: '9 digits', remove: 'Remove this person', person: 'Person' },
    de: { name: 'Vollständiger Name', dob: 'Geburtsdatum', nif: 'NIF (portugiesische Steuernummer)', nifPlaceholder: '9 Ziffern', remove: 'Diese Person entfernen', person: 'Person' },
    // Especificação v2, Parte A (NL) — NL Saúde (zorgverzekering) is the
    // first NL page to use this repeater.
    nl: { name: 'Volledige naam', dob: 'Geboortedatum', nif: 'NIF (Portugees fiscaal nummer)', nifPlaceholder: '9 cijfers', remove: 'Deze persoon verwijderen', person: 'Persoon' },
    // Especificação v2, Parte B — PL/SE/DK/ZH share one generator and are
    // converted together.
    pl: { name: 'Imię i nazwisko', dob: 'Data urodzenia', nif: 'NIF (portugalski numer podatkowy)', nifPlaceholder: '9 cyfr', remove: 'Usuń tę osobę', person: 'Osoba' },
    sv: { name: 'Fullständigt namn', dob: 'Födelsedatum', nif: 'NIF (portugisiskt skattenummer)', nifPlaceholder: '9 siffror', remove: 'Ta bort denna person', person: 'Person' },
    da: { name: 'Fulde navn', dob: 'Fødselsdato', nif: 'NIF (portugisisk skattenummer)', nifPlaceholder: '9 cifre', remove: 'Fjern denne person', person: 'Person' },
    zh: { name: '全名', dob: '出生日期', nif: 'NIF（葡萄牙税号）', nifPlaceholder: '9位数字', remove: '移除此人', person: '被保险人' },
    // Especificação v2, Parte C — Hebrew, Saúde ramo.
    he: { name: 'שם מלא', dob: 'תאריך לידה', nif: 'NIF (מספר זיהוי פורטוגזי)', nifPlaceholder: '9 ספרות', remove: 'הסרת מבוטח זה', person: 'מבוטח' },
  };
  var lang = (document.documentElement.getAttribute('lang') || 'pt').slice(0, 2);
  var t = COPY[lang] || COPY.pt;
  // Especificação v2, Parte C — this repeater builds its markup as a raw
  // innerHTML string, so unlike the wizard's own static fields (which get
  // ltrInput() per field in scripts/lib/market-cluster.mjs) nothing here
  // was ever direction-aware. On a right-to-left page both the date-of-
  // birth and NIF inputs need to stay left-to-right — a typed "15/03/1985"
  // or "501442600" should not have its digit groups reordered — the same
  // reasoning as the main wizard's own nif/codigo_postal/telefone/email
  // fields.
  var ltrAttr = document.documentElement.getAttribute('dir') === 'rtl' ? ' dir="ltr"' : '';

  var MAX_PERSONS = 10;
  var uid = 0;

  function buildBlock() {
    uid += 1;
    var n = uid;
    var card = document.createElement('div');
    card.className = 'lp-card person-block';
    card.setAttribute('data-person-block', '');
    card.style.marginBottom = '16px';
    card.innerHTML =
      '<p class="person-block-label" data-person-label style="font-weight:600;margin:0 0 12px;"></p>' +
      '<div class="contact-form-field">' +
      '<label for="pessoa-' + n + '-nome">' + t.name + ' *</label>' +
      '<input type="text" id="pessoa-' + n + '-nome" data-person-field="nome" required>' +
      '</div>' +
      '<div class="contact-form-field">' +
      '<label for="pessoa-' + n + '-nascimento">' + t.dob + ' *</label>' +
      '<input type="date" id="pessoa-' + n + '-nascimento" data-person-field="data_nascimento" data-validate="birth-date" required' + ltrAttr + '>' +
      '</div>' +
      '<div class="contact-form-field">' +
      '<label for="pessoa-' + n + '-nif">' + t.nif + ' *</label>' +
      '<input type="text" id="pessoa-' + n + '-nif" data-person-field="nif" inputmode="numeric" placeholder="' + t.nifPlaceholder + '" data-validate="nif" required' + ltrAttr + '>' +
      '</div>' +
      '<button type="button" class="wizard-nav-back" data-person-remove style="margin-top:4px;">' + t.remove + '</button>';
    return card;
  }

  function collectBlocks(list) {
    var cards = list.querySelectorAll('[data-person-block]');
    var blocks = [];
    for (var i = 0; i < cards.length; i++) {
      var nome = cards[i].querySelector('[data-person-field="nome"]');
      var nascimento = cards[i].querySelector('[data-person-field="data_nascimento"]');
      var nif = cards[i].querySelector('[data-person-field="nif"]');
      blocks.push({
        nome: nome ? nome.value.trim() : '',
        data_nascimento: nascimento ? nascimento.value : '',
        nif: nif ? nif.value.trim() : '',
      });
    }
    return blocks;
  }

  function renumber(list) {
    var cards = list.querySelectorAll('[data-person-block]');
    for (var i = 0; i < cards.length; i++) {
      var label = cards[i].querySelector('[data-person-label]');
      if (label) label.textContent = t.person + ' ' + (i + 1);
      var removeBtn = cards[i].querySelector('[data-person-remove]');
      if (removeBtn) removeBtn.hidden = cards.length <= 1;
    }
  }

  function initRepeater(container, wizard) {
    var list = container.querySelector('[data-persons-list]');
    var addBtn = container.querySelector('[data-persons-add]');
    if (!list || !addBtn) return;

    function sync() {
      wizard.setDynamicBlocks(collectBlocks(list));
    }

    function addPerson() {
      if (list.querySelectorAll('[data-person-block]').length >= MAX_PERSONS) return;
      list.appendChild(buildBlock());
      renumber(list);
      sync();
    }

    list.addEventListener('input', sync);
    list.addEventListener('change', sync);
    list.addEventListener('click', function (e) {
      var removeBtn = e.target.closest ? e.target.closest('[data-person-remove]') : null;
      if (!removeBtn) return;
      if (list.querySelectorAll('[data-person-block]').length <= 1) return;
      var card = removeBtn.closest('[data-person-block]');
      if (card) card.remove();
      renumber(list);
      sync();
    });
    addBtn.addEventListener('click', addPerson);

    // Every wizard page this mechanism serves starts with exactly one
    // person — the common case (insuring yourself, or yourself plus a
    // household you then add to), never zero: pessoas_seguras with nothing
    // in it is not a meaningful submission for this ramo.
    addPerson();
  }

  function init() {
    var containers = document.querySelectorAll('[data-persons-repeater]');
    if (!containers.length) return;
    var wizard = window.QuoteWizard && window.QuoteWizard.instances && window.QuoteWizard.instances[0];
    if (!wizard) return;
    for (var i = 0; i < containers.length; i++) initRepeater(containers[i], wizard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
