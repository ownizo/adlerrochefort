import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The German cluster's shared "de-angebot-anfrage" catch-all form (homepage +
// every page that has not yet had its own dedicated wizard carved out —
// Therapeuten & Wellness left this list when it got its own 48-72h wizard) — see
// scripts/generate-de-cluster.mjs and the comment next to "de-angebot-anfrage"
// in netlify/functions/submission-created.mjs. Deliberately shared across
// these pages, unlike the dedicated per-ramo wizards below — not a bug.
const SHARED_FORM_PATHS = [
  'public/de/versicherung-portugal/index.html',
  'public/de/anwartschaftsversicherung-portugal/index.html',
  'public/de/isv-befreiung-fahrzeugimport-portugal/index.html',
  'public/de/nicht-legalisierte-immobilie-versichern-portugal/index.html',
  'public/de/s1-formular-rentner-portugal/index.html',
  'public/de/umzug-deutschland-portugal-versicherung/index.html',
  'public/de/versicherung-algarve/index.html',
  'public/de/versicherung-carvoeiro/index.html',
  'public/de/versicherung-cascais/index.html',
  'public/de/versicherung-comporta/index.html',
  'public/de/versicherung-lagos/index.html',
  'public/de/versicherung-luz/index.html',
  'public/de/versicherung-burgau/index.html',
  'public/de/versicherung-vila-do-bispo/index.html',
  'public/de/versicherung-sagres/index.html',
  'public/de/versicherung-mallorca/index.html',
  'public/de/versicherung-lissabon/index.html',
  'public/de/versicherung-portimao/index.html',
  'public/de/versicherung-quinta-do-lago/index.html',
  'public/de/versicherung-vilamoura/index.html',
  'public/de/vorerkrankungen-krankenversicherung-portugal/index.html',
];

test('the shared de-angebot-anfrage form (homepage + 15 other pages) collects an optional "Firma" field, matching the PT/EN short-form pattern', () => {
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
  'public/de/berufshaftpflicht-therapeuten-wellness-portugal/index.html',
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

// /de/private-clients/'s single-page contact form ("de-private-clients") —
// deliberately not a wizard and deliberately without a date of birth, so it
// is checked on its own rather than folded into either list above.
const SINGLE_PAGE_FORM_PATHS = ['public/de/private-clients/index.html'];

test('the /de/private-clients/ page collects the five specified fields on its own single-page form', () => {
  const html = readFileSync('public/de/private-clients/index.html', 'utf8');
  assert.match(html, /<form name="de-private-clients"/, 'must carry its own exclusive form-name');
  assert.doesNotMatch(html, /data-wizard\b/, 'specified as a single-page form, not a three-step wizard');
  for (const [name, label] of [['nome', 'name'], ['nif', 'NIF'], ['telefone', 'phone'], ['morada', 'address'], ['localidade', 'town'], ['codigo_postal', 'postal code'], ['email', 'email']]) {
    assert.match(html, new RegExp(`name="${name}"[^>]*required`), `missing or optional "${name}" (${label})`);
  }
  // Every CTA on the page pointed at #kontakt while that anchor held only a
  // mailto and a WhatsApp link — the reason this form exists at all.
  assert.match(html, /id="kontakt"/, 'the CTAs\' target anchor must still exist');
  assert.match(html, /24 Arbeitsstunden/, 'must promise the specified 24 working hours');
});

test('the German cluster collects no clinical/health data on any form — health questions are deferred to the insurer directly', () => {
  const failures = [];
  const clinicalFieldRe = /name="[a-z_]*(krankheit|diagnose|medikament|gesundheit|erkrankung)[a-z_]*"/i;
  for (const path of [...SHARED_FORM_PATHS, ...DEDICATED_WIZARD_PATHS, ...SINGLE_PAGE_FORM_PATHS]) {
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
  for (const path of [...SHARED_FORM_PATHS, ...DEDICATED_WIZARD_PATHS, ...SINGLE_PAGE_FORM_PATHS]) {
    const html = readFileSync(path, 'utf8');
    if (!/type="checkbox"[^>]*name="(rgpd|einwilligung)"/.test(html)) failures.push(`${path}: consent checkbox missing or using an unrecognized field name`);
  }
  assert.deepEqual(failures, []);
});

// The reason Therapeuten & Wellness got its own form-name at all: slaHours in
// submission-created.mjs is keyed per form-name, never per branch, so a page
// sharing "de-angebot-anfrage" cannot promise anything other than that form's
// default 24h. The page promised 24h while its three PT counterparts for the
// same ramo promised 48-72h, and the notification email said 24h too.
test('the DE Therapeuten & Wellness page promises the same 48-72h SLA as its PT counterparts, on the page and in the backend', () => {
  const html = readFileSync('public/de/berufshaftpflicht-therapeuten-wellness-portugal/index.html', 'utf8');
  assert.match(html, /48 bis 72 Arbeitsstunden/, 'the page must promise 48-72 working hours');
  assert.doesNotMatch(html, /24 Stunden/, 'no 24h promise may survive anywhere on the page');

  const backend = readFileSync('netlify/functions/submission-created.mjs', 'utf8');
  const block = backend.match(/"de-berufshaftpflicht-therapeuten-wizard":\s*\{[\s\S]*?\n  \},/);
  assert.ok(block, 'the wizard must be registered in submission-created.mjs');
  assert.match(block[0], /slaHours:\s*"48 a 72"/, 'the backend must carry the same 48-72h SLA');

  // The three PT forms for this ramo, whose promise this now matches.
  for (const form of ['cotacao-rc-tnc', 'cotacao-rc-massagistas', 'cotacao-rc-yoga']) {
    const pt = backend.match(new RegExp(`"${form}":\\s*\\{[\\s\\S]*?\\n  \\},`));
    assert.match(pt[0], /slaHours:\s*"48 a 72"/, `${form} is the parity reference and must still be 48-72h`);
  }
});

// Running scripts/generate-de-cluster.mjs used to silently revert five pages to
// the shared form — exclusive form-names, the 18-year rule, Leben's `capital`
// and Private Clients' NIF/morada all gone, with nothing to catch it. Every
// page that carries a hand-authored form must declare dedicatedForm so the
// generator skips it instead.
test('every DE page with a hand-authored form is declared dedicatedForm, so the generator cannot overwrite it', async () => {
  const { PAGES } = await import('./de-cluster.data.mjs');
  const byUrl = new Map(PAGES.map((p) => [p.url, p]));
  const failures = [];

  for (const path of DEDICATED_WIZARD_PATHS) {
    const url = path.replace(/^public/, '').replace(/index\.html$/, '');
    const page = byUrl.get(url);
    if (!page) continue; // not generated by this generator at all (e.g. Freiberufler)
    const html = readFileSync(path, 'utf8');
    const formName = html.match(/<form name="([^"]+)"/)[1];
    if (page.dedicatedForm !== formName) {
      failures.push(`${url}: publishes "${formName}" but declares dedicatedForm ${JSON.stringify(page.dedicatedForm)}`);
    }
  }

  // The converse: nothing may claim dedicatedForm for a form it doesn't carry.
  for (const page of PAGES) {
    if (!page.dedicatedForm) continue;
    const html = readFileSync(`public${page.url}index.html`, 'utf8');
    if (!html.includes(`<form name="${page.dedicatedForm}"`)) {
      failures.push(`${page.url}: declares dedicatedForm "${page.dedicatedForm}" but does not publish it`);
    }
  }

  assert.deepEqual(failures, []);
});

test('no two DE forms anywhere in public/ share a form-name, apart from the deliberately shared catch-all', () => {
  const counts = new Map();
  for (const path of [...SHARED_FORM_PATHS, ...DEDICATED_WIZARD_PATHS, ...SINGLE_PAGE_FORM_PATHS]) {
    const html = readFileSync(path, 'utf8');
    for (const m of html.matchAll(/name="form-name" value="([^"]+)"/g)) {
      counts.set(m[1], (counts.get(m[1]) || 0) + 1);
    }
  }
  const shared = counts.get('de-angebot-anfrage');
  assert.equal(shared, SHARED_FORM_PATHS.length, 'the catch-all must appear on exactly the pages listed as sharing it');
  counts.delete('de-angebot-anfrage');
  const duplicated = [...counts].filter(([, n]) => n > 1);
  assert.deepEqual(duplicated, [], 'every other DE form-name must be exclusive to one page');
});
