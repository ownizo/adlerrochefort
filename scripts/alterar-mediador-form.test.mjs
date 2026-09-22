import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// /alterarmediador/ collects NIF, address, insurer, policy numbers and
// identity documents. Until this change the only notice was a sentence under
// the button ("Ao enviar, os seus dados…"), so submitting was treated as
// consent. The checkbox is name="rgpd" value="sim" because that is the pair
// quote-requests-sync.mjs already records as aceite: true.
const html = readFileSync('public/alterarmediador/index.html', 'utf8');
const form = html.match(/<form[^>]*name="alterar-mediador"[\s\S]*?<\/form>/)?.[0];

test('the mediator-change form keeps its own form-name', () => {
  assert.ok(form, 'no alterar-mediador form found');
  assert.match(form, /name="form-name" value="alterar-mediador"/);
});

test('consent is an explicit required checkbox, read by the quote sync', () => {
  assert.match(form, /type="checkbox"[^>]*id="rgpd"[^>]*name="rgpd"[^>]*value="sim"[^>]*required/);
  assert.doesNotMatch(form, /Ao enviar, os seus dados/);
});

test('the consent sentence sits above the submit button and is not styled as a field label', () => {
  const consentAt = form.indexOf('name="rgpd"');
  const submitAt = form.indexOf('type="submit"');
  assert.ok(consentAt > 0 && submitAt > consentAt, 'consent must precede the submit button');
  assert.match(html, /\.field-block > label\.consent-opt\s*\{[^}]*text-transform:\s*none/);
});

test('generating the letter does not require consent; sending the documents does', () => {
  const fn = html.match(/function validate\(forPdf\) \{[\s\S]*?\n  \}/)?.[0];
  assert.ok(fn, 'validate() not found');
  const gate = fn.indexOf('if (!forPdf)');
  const check = fn.indexOf("setError('rgpd'");
  assert.ok(gate > 0 && check > gate, 'rgpd check must live inside the submission-only branch');
});

test('a failed POST does not show the success panel', () => {
  assert.match(html, /if \(!res\.ok\) throw new Error/);
});
