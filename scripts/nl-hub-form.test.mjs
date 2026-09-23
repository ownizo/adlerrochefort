import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// public/nl/index.html is hand-authored — no generator emits "lead-nl", and
// unify-chrome.mjs treats this page as one of its three chrome *sources*, so
// it is never rewritten from a template either. That is why its form drifted
// away from every other cluster's and needs its own test.
const html = readFileSync('public/nl/index.html', 'utf8');
const form = html.match(/<form[^>]*name="lead-nl"[\s\S]*?<\/form>/)?.[0];

test('the /nl/ hub form exists and carries its own form-name', () => {
  assert.ok(form, 'no lead-nl form found');
  assert.match(form, /name="form-name" value="lead-nl"/);
});

// It used to have no consent control at all: a line of small print saying
// that submitting implied agreement. Every other form on the site — PT, EN,
// DE, the five market clusters, and NL's own nl-offerte-aanvraag — asks with
// a required checkbox, which is also the only version that produces a
// recorded `consentimento.aceite`.
test('consent is an explicit required checkbox, not implied by the act of submitting', () => {
  assert.match(form, /type="checkbox"[^>]*name="toestemming"[^>]*required/);
  assert.doesNotMatch(form, /Door te verzenden gaat u akkoord/);
});

test('the optional company field is present and stays optional', () => {
  const field = form.match(/<input[^>]*name="company"[^>]*>/);
  assert.ok(field, 'no company field');
  assert.doesNotMatch(field[0], /\brequired\b/);
});

test('source_url is stamped from the page URL so ?source=blog:<slug> survives the POST', () => {
  assert.match(html, /input\[name="source_url"\]/);
  assert.match(html, /source\.value = window\.location\.href/);
  const stampAt = html.indexOf('source.value = window.location.href');
  const formDataAt = html.indexOf('new FormData(form)');
  assert.ok(stampAt !== -1 && formDataAt !== -1 && stampAt < formDataAt, 'source_url must be set before FormData is read');
});

// fetch() only rejects on a network error, so without this check a 404 or a
// 500 from the form endpoint ran the success branch: the visitor was thanked
// for a submission that was never stored. Same defect and same fix as
// public/js/ar-quote-form.js, whose header comment records the original.
test('a submission is only called successful once the response is checked', () => {
  assert.match(html, /if \(!response\.ok\) throw new Error/);
});
