import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// public/fr/index.html is the whole French cluster: one hand-authored page, no
// generator. The standing instruction through the Especificação v2 rounds was
// to leave French alone entirely, which is why its form kept the shape the
// Dutch hub had before it was corrected. Hugo lifted that for RGPD compliance
// specifically — consent and the optional company field, nothing else — so
// this file guards exactly those two things and deliberately asserts nothing
// about the page's content.
const html = readFileSync('public/fr/index.html', 'utf8');
const form = html.match(/<form[^>]*name="lead-fr"[\s\S]*?<\/form>/)?.[0];

test('the /fr/ form exists and keeps its own form-name', () => {
  assert.ok(form, 'no lead-fr form found');
  assert.match(form, /name="form-name" value="lead-fr"/);
});

test('consent is an explicit required checkbox, not implied by the act of submitting', () => {
  assert.match(form, /type="checkbox"[^>]*name="consentement"[^>]*required/);
  assert.doesNotMatch(form, /En envoyant ce formulaire, vous acceptez/);
});

test('the optional company field is present and stays optional', () => {
  const field = form.match(/<input[^>]*name="company"[^>]*>/);
  assert.ok(field, 'no company field');
  assert.doesNotMatch(field[0], /\brequired\b/);
});
