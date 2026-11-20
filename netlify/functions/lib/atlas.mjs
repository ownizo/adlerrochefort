/**
 * HelloSafe Atlas travel insurance API — shared helpers (November 2026).
 *
 * Atlas is server to server: every call carries three headers and an
 * HMAC-SHA256 signature over `${ts}.${METHOD}.${pathname}.${rawBody}`,
 * prefixed "v2=". The signing secret must never reach a browser, so the
 * travel insurance pages call our own /api/travel/* functions, which sign
 * here and return a trimmed answer.
 *
 * Credentials come from the Netlify environment only:
 *   ATLAS_KEY_ID          ak_test_... (sandbox) or ak_live_... (production)
 *   ATLAS_SIGNING_SECRET  shown once by HelloSafe when the key is created
 *   ATLAS_PREVIEW_TOKEN   optional: lets the team test the page against the
 *                         sandbox with ?preview=<token>. Without a live key
 *                         visitors are never shown sandbox prices or links
 *                         (HelloSafe forbids it, and a sandbox link opens
 *                         the real funnel).
 */
import { createHmac, timingSafeEqual } from 'node:crypto';

export const ATLAS_BASE = 'https://atlas.hellosafe.com';
export const TIMEOUT_MS = 26000; // Atlas cuts insurer calls at 25 s

export const INTENTS = [
  'forTourism', 'schengenArea', 'annual', 'studyInternship', 'whv', 'cruise',
  'digitalNomad', 'expat', 'groupTravel', 'humanitarian', 'aupair', 'cancellation',
];

// Site language -> HelloSafe funnel language. Unsupported ones fall back to en.
export const LANG_MAP = {
  pt: 'pt', en: 'en', de: 'de', es: 'es', nl: 'nl', fr: 'fr', it: 'it',
  pl: 'pl', se: 'sv', sv: 'sv', dk: 'da', da: 'da', il: 'he', he: 'he', zh: 'zh',
};

export function atlasMode(keyId = process.env.ATLAS_KEY_ID || '') {
  if (keyId.startsWith('ak_live_')) return 'live';
  if (keyId.startsWith('ak_test_')) return 'sandbox';
  return 'none';
}

export function sign(secret, ts, method, pathname, rawBody) {
  const msg = `${ts}.${method.toUpperCase()}.${pathname}.${rawBody}`;
  return 'v2=' + createHmac('sha256', secret).update(msg).digest('hex');
}

export async function atlasCall(method, pathname, bodyObj, { fetchImpl = fetch, now = Date.now } = {}) {
  const keyId = process.env.ATLAS_KEY_ID;
  const secret = process.env.ATLAS_SIGNING_SECRET;
  if (!keyId || !secret) return { status: 503, json: { error: 'NOT_CONFIGURED' } };
  const raw = bodyObj === undefined ? '' : JSON.stringify(bodyObj); // sign the exact bytes sent
  const ts = Math.floor(now() / 1000).toString();
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetchImpl(ATLAS_BASE + pathname, {
      method,
      headers: {
        'content-type': 'application/json',
        'x-atlas-key-id': keyId,
        'x-atlas-timestamp': ts,
        'x-atlas-signature': sign(secret, ts, method, pathname, raw),
      },
      body: method === 'GET' ? undefined : raw,
      signal: controller.signal,
    });
    let json = null;
    try { json = await res.json(); } catch { json = null; }
    return { status: res.status, json };
  } catch (err) {
    return { status: 504, json: { error: err?.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR' } };
  } finally {
    clearTimeout(t);
  }
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const CC_RE = /^[A-Z]{2}$/;
const US_STATES = new Set(('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC').split(' '));

/** Validate and normalise a trip coming from the browser. Returns { trip } or { error }. */
export function cleanTrip(input, today = new Date()) {
  if (!input || typeof input !== 'object') return { error: 'BAD_TRIP' };
  const intent = INTENTS.includes(input.intent) ? input.intent : null;
  if (!intent) return { error: 'BAD_INTENT' };
  const { startDate, endDate } = input;
  if (!DATE_RE.test(startDate || '') || !DATE_RE.test(endDate || '') || endDate < startDate) return { error: 'BAD_DATES' };
  const todayIso = today.toISOString().slice(0, 10);
  if (startDate < todayIso) return { error: 'START_IN_PAST' };
  const countryResidence = String(input.countryResidence || '').toUpperCase();
  if (!CC_RE.test(countryResidence)) return { error: 'BAD_RESIDENCE' };
  const arrivalCountries = [...new Set((Array.isArray(input.arrivalCountries) ? input.arrivalCountries : [])
    .map((c) => String(c).toUpperCase()).filter((c) => CC_RE.test(c)))];
  if (!arrivalCountries.length) return { error: 'NO_DESTINATIONS' };
  if (arrivalCountries.length > 20) return { error: 'TOO_MANY_DESTINATIONS' };
  const travellers = (Array.isArray(input.travellers) ? input.travellers : [])
    .map((t) => Number(t && t.age)).filter((a) => Number.isInteger(a) && a >= 0 && a <= 110)
    .map((age) => ({ age }));
  if (!travellers.length) return { error: 'NO_TRAVELLERS' };
  if (travellers.length > 12) return { error: 'TOO_MANY_TRAVELLERS' };
  const trip = { intent, startDate, endDate, countryResidence, arrivalCountries, travellers };
  if (countryResidence === 'US' && US_STATES.has(String(input.stateResidence || '').toUpperCase())) {
    trip.stateResidence = String(input.stateResidence).toUpperCase();
  }
  if (input.shouldCoverCancellation === true) {
    const price = Number(input.tripPrice);
    if (!(price > 0)) return { error: 'CANCELLATION_NEEDS_TRIP_PRICE' };
    trip.shouldCoverCancellation = true;
    trip.tripPrice = Math.round(price);
    if (DATE_RE.test(input.tripBoughtDate || '') && input.tripBoughtDate <= todayIso) trip.tripBoughtDate = input.tripBoughtDate;
  }
  if (input.shouldCoverExtremeSports === true) trip.shouldCoverExtremeSports = true;
  if (/^[A-Z]{3}$/.test(input.currency || '')) trip.currency = input.currency;
  return { trip };
}

/** Keep only what the page displays. Insurer name and documents stay attached to each offer (Atlas terms). */
export function trimOffer(o) {
  if (!o || typeof o !== 'object') return null;
  const ins = o.insurer || {};
  const guarantees = {};
  for (const [slug, g] of Object.entries(o.guarantees || {})) {
    if (!g || typeof g !== 'object') continue;
    guarantees[slug] = {
      state: g.state,
      ...(g.value !== undefined && g.value !== null ? { value: g.value } : {}),
      ...(typeof g.franchise === 'number' ? { franchise: g.franchise } : {}),
      ...(typeof g.franchiseDetails === 'string' ? { franchiseDetails: g.franchiseDetails } : {}),
    };
  }
  return {
    id: o.id,
    rank: o.rank,
    name: o.name || o.productName || o.plan || null,
    insurer: { name: ins.name || null, logoUrl: ins.logoUrl || null, ...(ins.iconUrl ? { iconUrl: ins.iconUrl } : {}) },
    price: o.price ? {
      amount: o.price.amount, currency: o.price.currency, isStartingPrice: !!o.price.isStartingPrice,
    } : null,
    guaranteeCurrency: o.guaranteeCurrency || (o.price && o.price.insurerCurrency) || null,
    guarantees,
    highlights: o.highlights && typeof o.highlights === 'object' ? {
      included: Array.isArray(o.highlights.included) ? o.highlights.included.slice(0, 8) : [],
      excluded: Array.isArray(o.highlights.excluded) ? o.highlights.excluded.slice(0, 6) : [],
    } : null,
    documents: o.documents ? { cgvUrl: o.documents.cgvUrl || null, ipidUrl: o.documents.ipidUrl || null } : null,
  };
}

export function previewAllowed(req) {
  const token = process.env.ATLAS_PREVIEW_TOKEN || '';
  const sent = req.headers.get('x-ar-preview') || '';
  if (!token || token.length < 12 || sent.length !== token.length) return false;
  return timingSafeEqual(Buffer.from(sent), Buffer.from(token));
}

export function originAllowed(req) {
  const o = req.headers.get('origin') || req.headers.get('referer') || '';
  let host = '';
  try { host = new URL(o).hostname; } catch { return false; }
  return host === 'adlerrochefort.com' || host.endsWith('.adlerrochefort.com') ||
    host.endsWith('--adlerrochefort.netlify.app') || host === 'adlerrochefort.netlify.app' || host === 'localhost';
}

/** Webhook: X-Atlas-Signature is "v1=" + hex HMAC of `${ts}.${rawBody}`; may carry two values during a rotation. */
export function verifyWebhook(rawBody, ts, header, secret, nowSec = Math.floor(Date.now() / 1000)) {
  if (!ts || !header || !secret || Math.abs(nowSec - Number(ts)) > 300) return false;
  const expected = createHmac('sha256', secret).update(`${ts}.${rawBody}`).digest('hex');
  return String(header).split(',').map((s) => s.trim().replace(/^v1=/, ''))
    .some((sig) => sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected)));
}
