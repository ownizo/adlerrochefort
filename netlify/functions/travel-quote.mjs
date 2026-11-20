/**
 * /api/travel/quote and /api/travel/link — online travel insurance quote &
 * buy (November 2026), powered by the HelloSafe Atlas API.
 *
 *   POST /api/travel/quote  { trip, language, sessionId? }
 *        -> { mode, sessionId, offers[], labels{} }
 *   POST /api/travel/link   { sessionId, trip, offerId, language, clickRef? }
 *        -> { mode, url, orderRef }
 *
 * The browser never sees the Atlas key. With a sandbox key (ak_test_) the
 * function only answers requests carrying the team's preview token, so no
 * visitor is ever shown sample prices or a sandbox link. Without a live key
 * the page falls back to the written quote request form.
 * See netlify/functions/lib/atlas.mjs for the environment variables.
 */
import { atlasCall, atlasMode, cleanTrip, trimOffer, previewAllowed, originAllowed, LANG_MAP } from './lib/atlas.mjs';

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

let metaCache = null; // GET /meta (free, no quota): guarantee labels and the live trip-type codes
async function meta() {
  if (metaCache) return metaCache;
  const r = await atlasCall('GET', '/api/v1/travel/meta');
  const root = (r.json && (r.json.data || r.json)) || {};
  const labels = {};
  const g = root.guarantees;
  if (Array.isArray(g)) for (const x of g) if (x && x.slug) labels[x.slug] = x.label || x.slug;
  if (g && !Array.isArray(g) && typeof g === 'object') for (const [k, v] of Object.entries(g)) labels[k] = (v && v.label) || k;
  const intents = [];
  for (const key of ['intents', 'tripTypes', 'trip_types', 'types']) {
    const t = root[key];
    if (Array.isArray(t)) for (const x of t) {
      const code = typeof x === 'string' ? x : x && (x.intent || x.code || x.slug || x.id);
      if (typeof code === 'string') intents.push(code);
    }
  }
  const out = { labels, intents };
  if (Object.keys(labels).length || intents.length) metaCache = out;
  return out;
}

// Map our trip type to the exact code Atlas publishes (case and spelling may differ, e.g. auPair).
function liveIntent(intent, intents) {
  if (!intents.length) return intent;
  const norm = (x) => x.toLowerCase().replace(/[^a-z]/g, '');
  return intents.find((x) => norm(x) === norm(intent)) || intent;
}

async function withLangFallback(path, body) {
  let r = await atlasCall('POST', path, body);
  if (r.status === 400 && r.json && r.json.error === 'BAD_LANGUAGE' && body.language !== 'en') {
    r = await atlasCall('POST', path, { ...body, language: 'en' });
  }
  return r;
}

function upstreamError(r, intent) {
  const code = (r.json && (r.json.error || r.json.code)) || 'UPSTREAM_' + r.status;
  console.log(JSON.stringify({ event: 'atlas_error', status: r.status, code, intent }));
  const status = r.status === 429 ? 429 : r.status >= 500 ? 502 : r.status === 400 ? 400 : 502;
  return json(status, { error: code });
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'METHOD' });
  if (!originAllowed(req)) return json(403, { error: 'ORIGIN' });

  const mode = atlasMode();
  if (mode === 'none') return json(503, { error: 'NOT_LIVE' });
  if (mode === 'sandbox' && !previewAllowed(req)) return json(503, { error: 'NOT_LIVE' });

  let body;
  try {
    const raw = await req.text();
    if (raw.length > 8000) return json(413, { error: 'TOO_LARGE' });
    body = JSON.parse(raw);
  } catch {
    return json(400, { error: 'INVALID_JSON' });
  }
  const { trip, error } = cleanTrip(body.trip);
  if (error) return json(400, { error });
  const language = LANG_MAP[body.language] || 'en';
  const path = new URL(req.url).pathname;

  if (path.endsWith('/quote')) {
    const m = await meta();
    trip.intent = liveIntent(trip.intent, m.intents);
    const payload = { trip, language };
    if (typeof body.sessionId === 'string' && body.sessionId.length < 400) payload.sessionId = body.sessionId;
    const r = await withLangFallback('/api/v1/travel/quotes', payload);
    if (r.status !== 200 || !r.json) return upstreamError(r, trip.intent);
    const offers = (r.json.offers || []).map(trimOffer).filter(Boolean);
    console.log(JSON.stringify({ event: 'travel_quote', mode, intent: trip.intent, residence: trip.countryResidence, offers: offers.length }));
    return json(200, {
      mode: r.json.mode || mode,
      sessionId: r.json.sessionId,
      offers,
      unpricedCount: r.json.unpricedCount || 0,
      caveat: (r.json.meta && r.json.meta.priceCaveat) || null,
      labels: m.labels,
    });
  }

  if (path.endsWith('/link')) {
    if (typeof body.sessionId !== 'string' || !body.sessionId) return json(400, { error: 'MISSING_SESSION_ID' });
    const offerId = Number(body.offerId);
    if (!Number.isInteger(offerId) || offerId <= 0) return json(400, { error: 'BAD_OFFER_ID' });
    trip.intent = liveIntent(trip.intent, (await meta()).intents);
    const payload = { sessionId: body.sessionId, trip, language, offerId };
    if (typeof body.clickRef === 'string' && /^[A-Za-z0-9._~\-:/+=]{1,200}$/.test(body.clickRef)) payload.clickRef = body.clickRef;
    const r = await withLangFallback('/api/v1/travel/links', payload);
    if ((r.status !== 200 && r.status !== 201) || !r.json || !r.json.url) return upstreamError(r, trip.intent);
    console.log(JSON.stringify({ event: 'travel_link', mode, orderRef: r.json.orderRef || null }));
    return json(200, { mode: r.json.mode || mode, url: r.json.url, orderRef: r.json.orderRef || null });
  }

  return json(404, { error: 'NOT_FOUND' });
};

export const config = {
  path: ['/api/travel/quote', '/api/travel/link'],
};
