/**
 * Turns a beacon from public/js/ar-analytics-tracker.js into a site_visits
 * row (see supabase/migrations/20261018180000_add_site_visits.sql).
 *
 * Nothing personal is kept: no IP, no user-agent string. The user agent is
 * only read to drop bots and to classify the device; the country comes from
 * Netlify's geolocation and is stored as a two-letter code.
 */

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|python|curl|wget|httpclient|okhttp|java\/|go-http|axios|node-fetch|undici|phantom|puppeteer|playwright|selenium|preview|facebookexternalhit|whatsapp|telegram|semrush|ahrefs|mj12|petal|bytespider|yandex|baidu|gpt|claude|anthropic|perplexity|cohere|ccbot|scrapy|dataprovider|screenshot/i;

const SEARCH = ['google.', 'bing.', 'duckduckgo.', 'yahoo.', 'ecosia.', 'qwant.', 'yandex.', 'baidu.', 'search.brave.'];
const AI = {
  'chatgpt.com': 'chatgpt.com', 'chat.openai.com': 'chatgpt.com', 'openai.com': 'chatgpt.com', chatgpt: 'chatgpt.com',
  'perplexity.ai': 'perplexity', perplexity: 'perplexity',
  'gemini.google.com': 'gemini', gemini: 'gemini',
  'claude.ai': 'claude', claude: 'claude',
  'copilot.microsoft.com': 'copilot', 'copilot.com': 'copilot', copilot: 'copilot',
  'chat.deepseek.com': 'deepseek', 'chat.mistral.ai': 'mistral', 'grok.com': 'grok', 'meta.ai': 'meta-ai',
};
const SOCIAL = ['facebook.', 'instagram.', 'linkedin.', 'lnkd.in', 't.co', 'x.com', 'twitter.', 'pinterest.', 'youtube.', 'reddit.', 'whatsapp.'];
const LANGS = new Set(['en', 'de', 'es', 'nl', 'fr', 'it', 'pl', 'se', 'dk', 'il', 'zh']);

export function isBot(userAgent) {
  if (!userAgent || userAgent.length < 20) return true;
  return BOT_UA.test(userAgent);
}

export function deviceOf(userAgent = '') {
  if (/ipad|tablet/i.test(userAgent)) return 'tablet';
  if (/mobi|iphone|android/i.test(userAgent)) return 'mobile';
  return 'desktop';
}

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '').replace(/^(m|l|lm)\./, '');
  } catch {
    return '';
  }
}

function has(list, host) {
  return list.some((p) => host === p || host.startsWith(p) || host.includes('.' + p));
}

/** Same rules as public/js/ar-attribution.js, applied server side. */
export function classify(pageUrl, referrer) {
  let params;
  try {
    params = new URL(pageUrl).searchParams;
  } catch {
    params = new URLSearchParams();
  }
  const refHost = hostOf(referrer);
  const internal = refHost === 'adlerrochefort.com';
  const out = { referrer_host: internal ? null : refHost || null, is_landing: !internal, source: null, medium: null, campaign: null };
  if (internal) return out;
  if (params.get('utm_source')) {
    out.source = params.get('utm_source').slice(0, 80);
    out.medium = (params.get('utm_medium') || '').slice(0, 80) || null;
    // ChatGPT (and others) add ?utm_source=chatgpt.com with no utm_medium:
    // without this the visit was stored with medium null and never counted as AI.
    const ai = AI[out.source.toLowerCase().replace(/^www\./, '')];
    if (ai && (!out.medium || out.medium === 'referral')) {
      out.source = ai;
      out.medium = 'ai-assistant';
    }
    out.campaign = (params.get('utm_campaign') || '').slice(0, 120) || null;
    return out;
  }
  if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) {
    return { ...out, source: 'google', medium: 'cpc' };
  }
  if (!refHost) return { ...out, source: '(direct)', medium: '(none)' };
  if (AI[refHost]) return { ...out, source: AI[refHost], medium: 'ai-assistant' };
  if (has(SEARCH, refHost)) {
    const s = refHost.startsWith('search.') ? 'brave' : refHost.split('.')[0];
    return { ...out, source: s, medium: 'organic' };
  }
  if (has(SOCIAL, refHost)) return { ...out, source: refHost, medium: 'social' };
  return { ...out, source: refHost, medium: 'referral' };
}

export function langOf(path) {
  const seg = (path || '/').split('/')[1] || '';
  return LANGS.has(seg) ? seg : 'pt';
}

const clean = (v, n) => (typeof v === 'string' && v ? v.slice(0, n) : null);

/**
 * Returns { kind: 'start', row } | { kind: 'end', visitId, duration } | null.
 */
export function buildVisit(body, { userAgent, country } = {}) {
  if (!body || typeof body !== 'object') return null;
  if (isBot(userAgent)) return null;
  if (body.action === 'visit-end') {
    const visitId = clean(body.visitId, 80);
    const d = Number(body.durationSeconds);
    if (!visitId || !Number.isFinite(d) || d < 0) return null;
    return { kind: 'end', visitId, duration: Math.min(Math.round(d), 7200) };
  }
  if (body.action !== 'visit-start') return null;
  const visitId = clean(body.visitId, 80);
  const path = clean(body.path, 300);
  if (!visitId || !path || !path.startsWith('/')) return null;
  // Only the production host: deploy previews and copies of the site are not visits.
  if (hostOf(body.url) !== 'adlerrochefort.com') return null;
  const c = classify(body.url, body.referrer || '');
  return {
    kind: 'start',
    row: {
      visit_id: visitId,
      session_id: clean(body.sessionId, 80),
      path,
      lang: langOf(path),
      is_landing: c.is_landing,
      referrer_host: c.referrer_host,
      source: c.source,
      medium: c.medium,
      campaign: c.campaign,
      country: /^[A-Z]{2}$/.test(country || '') ? country : null,
      device: deviceOf(userAgent),
    },
  };
}
