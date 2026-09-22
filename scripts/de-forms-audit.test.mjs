import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The German cluster's shared "de-angebot-anfrage" catch-all form (homepage +
// every page that has not yet had its own dedicated wizard carved out) — see
// scripts/generate-de-cluster.mjs and the comment next to "de-angebot-anfrage"
// in netlify/functions/submission-created.mjs. Deliberately shared across
// these pages, unlike the dedicated per-ramo wizards below — not a bug.
const SHARED_FORM_PATHS = [
  'public/de/index.html',
  'public/de/anwartschaftsversicherung-portugal/index.html',
  'public/de/berufshaftpflicht-therapeuten-wellness-portugal/index.html',
  'public/de/isv-befreiung-fahrzeugimport-portugal/index.html',
  'public/de/nicht-legalisierte-immobilie-versichern-portugal/index.html',
  'public/de/s1-formular-rentner-portugal/index.html',
  'public/de/umzug-deutschland-portugal-versicherung/index.html',
  'public/de/versicherung-algarve/index.html',
  'public/de/versicherung-carvoeiro/index.html',
  'public/de/versicherung-cascais/index.html',
  'public/de/versicherung-comporta/index.html',
  'public/de/versicherung-lagos/index.html',
  'public/de/versicherung-lissabon/index.html',
  'public/de/versicherung-portimao/index.html',
  'public/de/versicherung-quinta-do-lago/index.html',
  'public/de/versicherung-vilamoura/index.html',
  'public/de/vorerkrankungen-krankenversicherung-portugal/index.html',
];

test('the shared de-angebot-anfrage form (homepage + 16 other pages) collects an optional "Firma" field, matching the PT/EN short-form pattern', () => {
  const failures = [];
  for (const path of SHARED_FORM_PATHS) {
    const html = readFileSync(path, 'utf8');
    if (!html.includes('name="de-angebot-anfrage"')) { failures.push(`${path}: does not embed the shared de-angebot-anfrage form`); continue; }
    if (!/id="f-firma" name="firma"/.test(html)) failures.push(`${path}: missing the optional "Firma" field`);
    if (/id="f-firma"[^>]*required/.test(html)) failures.push(`${path}: "Firma" must stay optional`);
  }
  assert.deepEqual(failures, []);
});

test('the backend renders the "firma" field with an English label in the notification email', () => {
  const html = readFileSync('netlify/functions/submission-created.mjs', 'utf8');
  assert.match(html, /firma:\s*"Company"/);
});

// Every dedicated German wizard (its own exclusive form-name, not the shared
// catch-all above) collects only the policyholder's own identification —
// there is no "pessoa segura" repeater on these six, so the 18-year-old rule
// belongs on this single data_nascimento field, same as every other
// single-applicant wizard on the site once it is required to carry the rule.
const DEDICATED_WIZARD_PATHS = [
  'public/de/autoversicherung-portugal/index.html',
  'public/de/berufshaftpflicht-freiberufler-portugal/index.html',
  'public/de/hausversicherung-portugal/index.html',
  'public/de/krankenversicherung-portugal/index.html',
  'public/de/lebensversicherung-portugal/index.html',
  'public/de/private-clients-portugal/index.html',
];

test('every dedicated DE wizard has an exclusive form-name and enforces the 18-year-old rule on the policyholder', () => {
  const failures = [];
  const seenFormNames = new Set();
  for (const path of DEDICATED_WIZARD_PATHS) {
    const html = readFileSync(path, 'utf8');
    const formNameMatch = html.match(/<form name="(de-[a-z-]+-wizard)"/);
    if (!formNameMatch) { failures.push(`${path}: no dedicated wizard <form> found`); continue; }
    const formName = formNameMatch[1];
    if (seenFormNames.has(formName)) failures.push(`${path}: form-name "${formName}" is not exclusive, already seen on another wizard`);
    seenFormNames.add(formName);

    const dobMatch = html.match(/name="data_nascimento" data-validate="([a-z-]+)"/);
    if (!dobMatch) { failures.push(`${path}: no data_nascimento field found`); continue; }
    if (dobMatch[1] !== 'birth-date-adult') failures.push(`${path}: data_nascimento uses data-validate="${dobMatch[1]}", expected "birth-date-adult" (18-year rule on the tomador)`);
  }
  assert.deepEqual(failures, []);
});

test('the German cluster collects no clinical/health data on any form — health questions are deferred to the insurer directly', () => {
  const failures = [];
  const clinicalFieldRe = /name="[a-z_]*(krankheit|diagnose|medikament|gesundheit|erkrankung)[a-z_]*"/i;
  for (const path of [...SHARED_FORM_PATHS, ...DEDICATED_WIZARD_PATHS]) {
    const html = readFileSync(path, 'utf8');
    if (clinicalFieldRe.test(html)) failures.push(`${path}: appears to collect a clinical/health field`);
  }
  assert.deepEqual(failures, []);
});

test('the DE life insurance and Private Clients wizards collect the fields the spec requires', () => {
  const lebens = readFileSync('public/de/lebensversicherung-portugal/index.html', 'utf8');
  assert.match(lebens, /id="de-vida-capital"[^>]*name="capital"/, 'Lebensversicherung must collect the desired capital');

  const pc = readFileSync('public/de/private-clients-portugal/index.html', 'utf8');
  for (const [name, label] of [['nome', 'name'], ['nif', 'NIF'], ['telefone', 'phone'], ['morada', 'address'], ['email', 'email']]) {
    assert.ok(pc.includes(`name="${name}"`), `Private Clients wizard missing "${name}" (${label})`);
  }
});

test('every DE form\'s consent checkbox uses a field name the backend recognizes (rgpd or einwilligung)', () => {
  const failures = [];
  for (const path of [...SHARED_FORM_PATHS, ...DEDICATED_WIZARD_PATHS]) {
    const html = readFileSync(path, 'utf8');
    if (!/type="checkbox"[^>]*name="(rgpd|einwilligung)"/.test(html)) failures.push(`${path}: consent checkbox missing or using an unrecognized field name`);
  }
  assert.deepEqual(failures, []);
});
