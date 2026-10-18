import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildVisit, classify, isBot, langOf } from './site-visit.mjs';

const CHROME = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1';

test('bots and empty user agents are dropped', () => {
  assert.equal(isBot('Mozilla/5.0 (compatible; Googlebot/2.1)'), true);
  assert.equal(isBot('Mozilla/5.0 HeadlessChrome/120.0'), true);
  assert.equal(isBot(''), true);
  assert.equal(isBot(CHROME), false);
});

test('sources are classified like the client-side attribution', () => {
  assert.deepEqual(classify('https://adlerrochefort.com/en/', 'https://www.google.com/').source, 'google');
  assert.equal(classify('https://adlerrochefort.com/en/', 'https://www.google.com/').medium, 'organic');
  assert.equal(classify('https://adlerrochefort.com/en/', 'https://chatgpt.com/').medium, 'ai-assistant');
  assert.equal(classify('https://adlerrochefort.com/en/?gclid=x', '').medium, 'cpc');
  assert.equal(classify('https://adlerrochefort.com/en/', '').source, '(direct)');
  const internal = classify('https://adlerrochefort.com/en/', 'https://adlerrochefort.com/');
  assert.equal(internal.is_landing, false);
  assert.equal(internal.source, null);
});

test('language from the path', () => {
  assert.equal(langOf('/de/x/'), 'de');
  assert.equal(langOf('/seguros/saude/'), 'pt');
});

test('visit-start builds a row with no personal data; previews are ignored', () => {
  const v = buildVisit({ action: 'visit-start', visitId: 'v1', sessionId: 's1', path: '/en/', url: 'https://adlerrochefort.com/en/', referrer: 'https://www.bing.com/' },
    { userAgent: CHROME, country: 'PT' });
  assert.equal(v.kind, 'start');
  assert.equal(v.row.country, 'PT');
  assert.equal(v.row.device, 'mobile');
  assert.equal(v.row.source, 'bing');
  assert.ok(!('ip' in v.row) && !('user_agent' in v.row));
  assert.equal(buildVisit({ action: 'visit-start', visitId: 'v2', path: '/en/', url: 'https://abc--adlerrochefort.netlify.app/en/' }, { userAgent: CHROME }), null);
  assert.equal(buildVisit({ action: 'visit-start', visitId: 'v3', path: '/en/', url: 'https://adlerrochefort.com/en/' }, { userAgent: 'curl/8.0' }), null);
});

test('visit-end caps the duration', () => {
  assert.deepEqual(buildVisit({ action: 'visit-end', visitId: 'v1', durationSeconds: 99999 }, { userAgent: CHROME }), { kind: 'end', visitId: 'v1', duration: 7200 });
});
