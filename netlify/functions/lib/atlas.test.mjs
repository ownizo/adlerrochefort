import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { sign, cleanTrip, trimOffer, verifyWebhook, atlasMode, atlasCall } from './atlas.mjs';

test('sign follows the v2 scheme over ts.METHOD.path.body', () => {
  const body = '{"a":1}';
  const expected = 'v2=' + createHmac('sha256', 's3cret').update(`100.POST./api/v1/travel/quotes.${body}`).digest('hex');
  assert.equal(sign('s3cret', '100', 'post', '/api/v1/travel/quotes', body), expected);
  // GET with an empty body ends on the dot
  const g = 'v2=' + createHmac('sha256', 's3cret').update('100.GET./api/v1/travel/meta.').digest('hex');
  assert.equal(sign('s3cret', '100', 'GET', '/api/v1/travel/meta', ''), g);
});

test('atlasCall sends the exact bytes it signed', async () => {
  process.env.ATLAS_KEY_ID = 'ak_test_x';
  process.env.ATLAS_SIGNING_SECRET = 'sec';
  let seen;
  const fetchImpl = async (url, init) => { seen = { url, init }; return { status: 200, json: async () => ({ ok: true }) }; };
  const r = await atlasCall('POST', '/api/v1/travel/quotes', { trip: { a: 1 } }, { fetchImpl, now: () => 5000 });
  assert.equal(r.status, 200);
  assert.equal(seen.url, 'https://atlas.hellosafe.com/api/v1/travel/quotes');
  assert.equal(seen.init.headers['x-atlas-timestamp'], '5');
  assert.equal(seen.init.headers['x-atlas-signature'], sign('sec', '5', 'POST', '/api/v1/travel/quotes', seen.init.body));
});

test('atlasMode reads the key prefix', () => {
  assert.equal(atlasMode('ak_live_1'), 'live');
  assert.equal(atlasMode('ak_test_1'), 'sandbox');
  assert.equal(atlasMode(''), 'none');
});

test('cleanTrip validates and normalises', () => {
  const today = new Date('2026-11-20T10:00:00Z');
  const ok = cleanTrip({ intent: 'forTourism', startDate: '2026-12-01', endDate: '2026-12-10', countryResidence: 'pt',
    arrivalCountries: ['us', 'US', 'xx1'], travellers: [{ age: 44 }, { age: '9' }] }, today);
  assert.deepEqual(ok.trip, { intent: 'forTourism', startDate: '2026-12-01', endDate: '2026-12-10', countryResidence: 'PT',
    arrivalCountries: ['US'], travellers: [{ age: 44 }, { age: 9 }] });
  assert.equal(cleanTrip({ intent: 'nope' }, today).error, 'BAD_INTENT');
  assert.equal(cleanTrip({ intent: 'annual', startDate: '2026-11-01', endDate: '2027-10-31', countryResidence: 'PT', arrivalCountries: ['ES'], travellers: [{ age: 30 }] }, today).error, 'START_IN_PAST');
  assert.equal(cleanTrip({ intent: 'forTourism', startDate: '2026-12-01', endDate: '2026-12-10', countryResidence: 'PT', arrivalCountries: ['ES'], travellers: [{ age: 30 }], shouldCoverCancellation: true }, today).error, 'CANCELLATION_NEEDS_TRIP_PRICE');
});

test('trimOffer keeps insurer, price, guarantees and documents', () => {
  const o = trimOffer({ id: 7, rank: 1, insurer: { name: 'Chapka', logoUrl: 'https://x/1.svg', iconUrl: 'https://x/1.svg' },
    price: { amount: 30.12, amountInCents: 3012, currency: 'EUR', insurerAmount: 30.12 },
    guarantees: { hospitalFeesAbroad: { state: 'value', value: 100000 } }, documents: { cgvUrl: 'c', ipidUrl: null }, secret: 1 });
  assert.equal(o.insurer.name, 'Chapka');
  assert.equal(o.price.amount, 30.12);
  assert.equal(o.guarantees.hospitalFeesAbroad.value, 100000);
  assert.equal(o.secret, undefined);
});

test('verifyWebhook accepts v1 signatures, also during rotation', () => {
  const raw = '{"id":"evt_1"}';
  const sig = createHmac('sha256', 'wh').update(`1000.${raw}`).digest('hex');
  assert.equal(verifyWebhook(raw, '1000', `v1=${sig}`, 'wh', 1100), true);
  assert.equal(verifyWebhook(raw, '1000', `v1=deadbeef, v1=${sig}`, 'wh', 1100), true);
  assert.equal(verifyWebhook(raw, '1000', `v1=${sig}`, 'wh', 2000), false);
  assert.equal(verifyWebhook(raw + ' ', '1000', `v1=${sig}`, 'wh', 1100), false);
});
