#!/usr/bin/env node
/**
 * End-to-end payload test for the lead forms.
 *
 * The failure this guards against is silent: a conditional field that is
 * revealed to the visitor but left `disabled` is filled in, looks submitted,
 * and is then dropped by the browser before the request leaves the page. No
 * error surfaces anywhere. The only way to know is to build the payload the
 * way a browser builds it and look at what is actually in it.
 *
 * So this loads the real published HTML, runs the real /js/lead-branch-fields.js
 * against it, drives the branch selector, types into every visible field, and
 * then serialises the form exactly as a browser would — skipping disabled
 * controls, skipping unnamed controls, keeping the hidden ones.
 *
 * Requires jsdom, which is deliberately not a dependency of this repository:
 *   npm install --no-save jsdom
 *
 * Usage: node scripts/form-payload-test.mjs
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

let JSDOM;
try {
  // Resolve from wherever it was installed, including a --no-save install into
  // a scratch prefix, so this never forces jsdom into the deploy bundle.
  const require = createRequire(import.meta.url);
  ({ JSDOM } = require('jsdom'));
} catch {
  try {
    ({ JSDOM } = await import('/tmp/domtest/node_modules/jsdom/lib/api.js'));
  } catch {
    console.error('jsdom not found. Run:  npm install --no-save jsdom');
    process.exit(2);
  }
}

const script = await readFile(join(PUBLIC, 'js', 'lead-branch-fields.js'), 'utf8');

/**
 * Some pages carry the branch-switching script, some carry the quote-form
 * script that stamps source_url at wire time, and the /en/ property cluster
 * carries only the latter. Each case names the scripts its page actually
 * loads, so the payload is built with the same code the browser would run.
 */
const scriptCache = new Map([['lead-branch-fields.js', script]]);
async function scriptsFor(names) {
  const out = [];
  for (const name of names) {
    if (!scriptCache.has(name)) {
      scriptCache.set(name, await readFile(join(PUBLIC, 'js', name), 'utf8'));
    }
    out.push(scriptCache.get(name));
  }
  return out;
}

/**
 * Builds the DOM and waits for it to finish parsing before returning. Without
 * the wait, readyState is still "loading" and the page script defers itself to
 * a DOMContentLoaded that has not fired yet — every field then looks dropped,
 * which is a bug in the test rather than in the site.
 */
async function domFor(html, url) {
  const dom = new JSDOM(html, { url, runScripts: 'outside-only' });
  if (dom.window.document.readyState !== 'complete') {
    await new Promise((resolve) => dom.window.addEventListener('load', resolve, { once: true }));
  }
  return dom;
}

/**
 * Serialises a form the way a browser does for a urlencoded POST: named,
 * non-disabled, successful controls only.
 */
function serialise(form) {
  const out = [];
  for (const el of form.querySelectorAll('input, select, textarea')) {
    if (!el.name || el.disabled) continue;
    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) continue;
    if (el.type === 'submit' || el.type === 'button') continue;
    out.push([el.name, el.value]);
  }
  return out;
}

/** Fills every enabled, empty, visible control so the payload shows real values. */
function fillVisible(form, doc) {
  for (const el of form.querySelectorAll('input, select, textarea')) {
    if (!el.name || el.disabled || el.type === 'hidden') continue;
    if (el.name === 'bot-field') continue; // the honeypot stays empty, as a human leaves it
    if (el.closest('[hidden]')) continue; // the visitor cannot type into a hidden group
    if (el.tagName === 'SELECT') {
      if (!el.value && el.options.length > 1) el.value = el.options[1].value;
      continue;
    }
    if (el.type === 'radio' || el.type === 'checkbox') {
      if (!form.querySelector(`[name="${el.name}"]:checked`)) el.checked = true;
      continue;
    }
    if (el.value) continue;
    el.value =
      el.type === 'email'
        ? 'teste@exemplo.pt'
        : el.type === 'tel'
          ? '+351 900 000 000'
          : el.type === 'number'
            ? '3'
            : el.type === 'date'
              ? '1980-01-01'
              : `TESTE ${el.name}`;
  }
}

async function run({ label, path, url, formName, branchSelect, branchValue, pageScripts = ['lead-branch-fields.js'], inlineScripts = false }) {
  const html = await readFile(join(PUBLIC, path), 'utf8');
  const dom = await domFor(html, url);
  const { document: doc, window: win } = { document: dom.window.document, window: dom.window };

  const form = doc.querySelector(`form[name="${formName}"]`);
  if (!form) throw new Error(`${label}: form[name="${formName}"] not found`);
  const inlineErrors = [];

  // The visitor picks a branch before the page script has anything to react to
  // only on the general form; the article form arrives preselected.
  const select = branchSelect ? form.querySelector(branchSelect) : null;

  for (const src of await scriptsFor(pageScripts)) dom.window.eval(src);

  // The Portuguese landings stamp source_url from a small inline script rather
  // than from a file in /js/, so a page that carries one has to have it run or
  // the field looks empty for reasons that have nothing to do with the form.
  if (inlineScripts) {
    for (const el of doc.querySelectorAll('script:not([src])')) {
      if (el.type && el.type !== 'text/javascript') continue;
      try {
        dom.window.eval(el.textContent);
      } catch (err) {
        // The same pages carry animation and sticky-bar scripts that reach for
        // browser APIs jsdom does not implement. Those are not what is under
        // test, and the source_url assertion below still fails loudly if the
        // script that does matter is the one that threw.
        inlineErrors.push(String(err.message || err));
      }
    }
  }

  if (select && branchValue) {
    select.value = branchValue;
    select.dispatchEvent(new win.Event('change', { bubbles: true }));
  }

  fillVisible(form, doc);

  const pairs = serialise(form);
  const names = pairs.map(([n]) => n);
  const branchGroups = [...form.querySelectorAll('[data-branch]')];
  const activeGroup = branchGroups.find(
    (g) => g.getAttribute('data-branch') === (select ? select.value : null)
  );
  const expected = activeGroup
    ? [...activeGroup.querySelectorAll('input,select,textarea')].map((e) => e.name)
    : [];
  const missing = expected.filter((n) => !names.includes(n));
  const leaked = branchGroups
    .filter((g) => g !== activeGroup)
    .flatMap((g) => [...g.querySelectorAll('input,select,textarea')].map((e) => e.name))
    .filter((n) => names.includes(n));

  const sourceUrl = pairs.find(([n]) => n === 'source_url')?.[1] ?? null;
  const honeypotPresent = !!form.querySelector('[name="bot-field"]');
  const honeypotDeclared = form.getAttribute('netlify-honeypot') === 'bot-field';

  return {
    label,
    url,
    formName,
    branch: select ? select.value : (form.querySelector('[name="ramo"]')?.value ?? '(fixed)'),
    payload: pairs,
    branchFieldsExpected: expected,
    branchFieldsMissing: missing,
    otherBranchFieldsLeaked: leaked,
    sourceUrl,
    sourceUrlOk: sourceUrl === url,
    honeypotPresent,
    honeypotDeclared,
    inlineErrors,
  };
}

const CASES = [
  {
    label: '1. /seguros/tvde/ — dedicated landing form',
    path: 'seguros/tvde/index.html',
    url: 'https://adlerrochefort.com/seguros/tvde/',
    formName: 'cotacao-tvde',
  },
  {
    label: '2. /blog/seguro-tvde-portugal/ — injected article form, branch preselected',
    path: 'blog/seguro-tvde-portugal/index.html',
    url: 'https://adlerrochefort.com/blog/seguro-tvde-portugal/',
    formName: 'cotacao-blog',
    branchSelect: 'select[data-branch-select]',
  },
  {
    label: '3. Homepage — general form, branch chosen by hand',
    path: 'index.html',
    url: 'https://adlerrochefort.com/',
    formName: 'analise-gratuita',
    branchSelect: 'select[data-branch-select]',
    branchValue: 'TVDE (Uber, Bolt, Free Now)',
  },
  {
    label: '4. Homepage — branch switched mid-form (stale-data check)',
    path: 'index.html',
    url: 'https://adlerrochefort.com/',
    formName: 'analise-gratuita',
    branchSelect: 'select[data-branch-select]',
    branchValue: 'Condomínio',
    switchFrom: 'TVDE (Uber, Bolt, Free Now)',
  },
  {
    label: '5. /blog/seguro-condominio-obrigatorio-guia/ — Condomínio preselected',
    path: 'blog/seguro-condominio-obrigatorio-guia/index.html',
    url: 'https://adlerrochefort.com/blog/seguro-condominio-obrigatorio-guia/',
    formName: 'cotacao-blog',
    branchSelect: 'select[data-branch-select]',
  },
  {
    label: '6. /seguros/condominios/ — dedicated landing form',
    path: 'seguros/condominios/index.html',
    url: 'https://adlerrochefort.com/seguros/condominios/',
    formName: 'auditoria-condominio',
  },
  {
    label: '7. /en/second-home-insurance-portugal/ — Home & Property cluster',
    path: 'en/second-home-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/second-home-insurance-portugal/',
    formName: 'home-insurance-quote',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '8. /en/landlord-insurance-portugal/ — landlord subcluster hub',
    path: 'en/landlord-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/landlord-insurance-portugal/',
    formName: 'landlord-insurance-quote',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '9. /en/apartment-insurance-portugal/ — extra fields beyond the pillar set',
    path: 'en/apartment-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/apartment-insurance-portugal/',
    formName: 'home-insurance-quote',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '10. /en/landlord-liability-insurance-portugal/ — landlord form on a child page',
    path: 'en/landlord-liability-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/landlord-liability-insurance-portugal/',
    formName: 'landlord-insurance-quote',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    // The national expat hub has its own form name and three selects the other
    // pages do not have, so a dropped select here would lose the only
    // qualification we get from a visitor who does not yet know what they need.
    label: '11. /en/expat-insurance-portugal/ — national expat hub',
    path: 'en/expat-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/expat-insurance-portugal/',
    formName: 'expat-insurance-review',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    // The car pillar. Its registration-status and claims-history selects are
    // the two answers that decide which insurers can be approached at all, so
    // a dropped select here would cost the lead most of its value.
    label: '12. /en/car-insurance-portugal/ — car insurance pillar',
    path: 'en/car-insurance-portugal/index.html',
    url: 'https://adlerrochefort.com/en/car-insurance-portugal/',
    formName: 'car-insurance-quote',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    // An English car article, top form. This is the shared article form: one
    // form name for every branch, with the branch preselected per article and
    // the slug in `source`. The check that matters is that the branch it
    // arrives with is Car, not whatever the article next door preselects.
    label: '13. /en/blog/car-insurance-complete-guide/ — shared article form, Car preselected',
    path: 'en/blog/car-insurance-complete-guide/index.html',
    url: 'https://adlerrochefort.com/en/blog/car-insurance-complete-guide/',
    formName: 'quote-blog',
    branchSelect: 'select[data-branch-select]',
  },
  {
    // The same article, bottom form. This one posts under the car form name, so
    // the branch comes from the form rather than from a select: the regression
    // it guards against is the CTA reverting to a health form name, which is
    // how a car lead used to arrive as Expat Health.
    label: '14. /en/blog/car-insurance-complete-guide/ — bottom CTA, car form name',
    path: 'en/blog/car-insurance-complete-guide/index.html',
    url: 'https://adlerrochefort.com/en/blog/car-insurance-complete-guide/',
    formName: 'car-insurance-quote',
    pageScripts: ['ar-conversion.js'],
  },
  {
    // The Portuguese motor page. Its source_url is stamped inline rather than
    // by /js/, so this case runs the page's own inline scripts.
    label: '15. /seguros/auto/ — Portuguese motor landing',
    path: 'seguros/auto/index.html',
    url: 'https://adlerrochefort.com/seguros/auto/',
    formName: 'seguro-auto',
    pageScripts: [],
    inlineScripts: true,
  },
  {
    // Spain market layer (Phase 1). Same shape as the Portuguese/English
    // quote forms above, built by the same /js/ar-quote-form.js. The field
    // that matters here is the hidden `country` input — dropped, this would
    // let a Spain lead reach the inbox looking exactly like a Portugal one.
    label: '16. /en/expat-insurance-spain/ — Spain national expat hub',
    path: 'en/expat-insurance-spain/index.html',
    url: 'https://adlerrochefort.com/en/expat-insurance-spain/',
    formName: 'expat-insurance-review-spain',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '17. /en/home-insurance-spain/ — Spain home insurance pillar',
    path: 'en/home-insurance-spain/index.html',
    url: 'https://adlerrochefort.com/en/home-insurance-spain/',
    formName: 'home-insurance-quote-spain',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '18. /en/landlord-insurance-spain/ — Spain landlord insurance pillar',
    path: 'en/landlord-insurance-spain/index.html',
    url: 'https://adlerrochefort.com/en/landlord-insurance-spain/',
    formName: 'landlord-insurance-quote-spain',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '19. /en/health-insurance-spain/ — Spain health insurance pillar',
    path: 'en/health-insurance-spain/index.html',
    url: 'https://adlerrochefort.com/en/health-insurance-spain/',
    formName: 'health-insurance-quote-spain',
    pageScripts: ['ar-quote-form.js'],
  },
  {
    label: '20. /en/car-insurance-spain/ — Spain car insurance pillar',
    path: 'en/car-insurance-spain/index.html',
    url: 'https://adlerrochefort.com/en/car-insurance-spain/',
    formName: 'car-insurance-quote-spain',
    pageScripts: ['ar-quote-form.js'],
  },
];

// Spain-specific assertion: every Spain case must carry country=Spain in its
// payload, and none of them may be missing it silently.
for (const c of CASES) {
  if (c.formName && c.formName.endsWith('-spain')) c.requireCountry = 'Spain';
}

let failures = 0;
for (const c of CASES) {
  let r;
  if (c.switchFrom) {
    // Fill the first branch, then switch: nothing from the abandoned branch may
    // survive into the payload.
    const html = await readFile(join(PUBLIC, c.path), 'utf8');
    const dom = await domFor(html, c.url);
    const doc = dom.window.document;
    const form = doc.querySelector(`form[name="${c.formName}"]`);
    const select = form.querySelector(c.branchSelect);
    dom.window.eval(script);
    select.value = c.switchFrom;
    select.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    fillVisible(form, doc);
    const firstValues = [...form.querySelectorAll('[data-branch] input')].map((e) => [e.name, e.value]);
    select.value = c.branchValue;
    select.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    fillVisible(form, doc);
    const pairs = serialise(form);
    const names = pairs.map(([n]) => n);
    const stale = firstValues.filter(([n, v]) => v && names.includes(n) && n.startsWith('tvde_'));
    r = {
      label: c.label,
      url: c.url,
      formName: c.formName,
      branch: select.value,
      payload: pairs,
      branchFieldsExpected: [],
      branchFieldsMissing: [],
      otherBranchFieldsLeaked: stale.map(([n]) => n),
      sourceUrl: pairs.find(([n]) => n === 'source_url')?.[1] ?? null,
      sourceUrlOk: pairs.find(([n]) => n === 'source_url')?.[1] === c.url,
      honeypotPresent: !!form.querySelector('[name="bot-field"]'),
      honeypotDeclared: form.getAttribute('netlify-honeypot') === 'bot-field',
    };
  } else {
    r = await run(c);
  }

  const countryValue = r.payload?.find(([n]) => n === 'country')?.[1] ?? null;
  const countryOk = !c.requireCountry || countryValue === c.requireCountry;

  const ok =
    !r.branchFieldsMissing.length &&
    !r.otherBranchFieldsLeaked.length &&
    r.sourceUrlOk &&
    r.honeypotPresent &&
    r.honeypotDeclared &&
    countryOk;
  if (!ok) failures++;

  console.log(`\n${'='.repeat(78)}\n${r.label}\n${'='.repeat(78)}`);
  console.log(`form-name        : ${r.formName}`);
  console.log(`branch           : ${r.branch}`);
  console.log(`source_url       : ${r.sourceUrl}  ${r.sourceUrlOk ? 'OK' : 'WRONG'}`);
  console.log(
    `honeypot         : field ${r.honeypotPresent ? 'present' : 'MISSING'}, ` +
      `netlify-honeypot ${r.honeypotDeclared ? 'declared' : 'MISSING'}, empty in payload`
  );
  if (r.inlineErrors?.length)
    console.log(`inline scripts   : ${r.inlineErrors.length} threw on unimplemented browser APIs (ignored)`);
  console.log(`payload (${r.payload.length} fields):`);
  for (const [n, v] of r.payload) console.log(`  ${n.padEnd(28)} = ${v}`);
  if (r.branchFieldsExpected.length)
    console.log(`branch fields expected: ${r.branchFieldsExpected.join(', ')}`);
  if (r.branchFieldsMissing.length)
    console.log(`  !! DROPPED FROM PAYLOAD: ${r.branchFieldsMissing.join(', ')}`);
  if (r.otherBranchFieldsLeaked.length)
    console.log(`  !! LEAKED FROM ANOTHER BRANCH: ${r.otherBranchFieldsLeaked.join(', ')}`);
  if (c.requireCountry)
    console.log(`country          : ${countryValue}  ${countryOk ? 'OK' : `WRONG (expected ${c.requireCountry})`}`);
  console.log(ok ? 'RESULT: PASS' : 'RESULT: FAIL');
}

console.log(`\n${failures ? `${failures} case(s) failed` : 'all cases passed'}`);
process.exit(failures ? 1 : 0);
