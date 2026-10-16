#!/usr/bin/env node
/**
 * One canonical analytics block for every page, tied to the cookie banner,
 * plus lead attribution fields on every form. Idempotent.
 *
 * Why (October 2026):
 *   - 336 of 775 pages loaded only the Google Ads tag, never GA4
 *     (G-Y31W0QJ9WH): 40 EN blog articles (Allianz, Médis…), nearly every
 *     non-PT/EN language tree and /obrigado/. GA4 was reporting well under
 *     half the real traffic.
 *   - Analytics and Ads fired whether the visitor pressed "Aceitar" or
 *     "Rejeitar". The banner only stored the choice.
 *   - No lead carried its source.
 *
 * What it does, on public/**\/*.html and on the generator sources that embed
 * the same markup (so regenerating a cluster does not undo it):
 *   1. Replaces any gtag.js loader + its inline config with CANONICAL:
 *      Google Consent Mode v2, everything denied by default, upgraded at load
 *      when cookie_consent === 'accepted'; then GA4 + Ads config.
 *   2. Makes respondCookies() push a consent update (granted / denied).
 *   3. Adds hidden utm_* inputs after every Netlify form-name input, filled by
 *      /js/ar-attribution.js, and includes that script on every page.
 *   4. On the thank-you pages native forms land on, records generate_lead once.
 *
 * Run: node scripts/apply-analytics-consent.mjs   (re-run after any generator)
 */
import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const GA4 = 'G-Y31W0QJ9WH';
const ADS = 'AW-18361722533';
const MARK = '<!-- ar-analytics: consent-mode v2 -->';

export const CANONICAL = `${MARK}
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500});
  try { if (localStorage.getItem('cookie_consent') === 'accepted') gtag('consent', 'update', {ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'}); } catch (e) {}
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4}"></script>
<script>
  gtag('js', new Date());
  gtag('config', '${GA4}');
  gtag('config', '${ADS}');
</script>`;

const OLD_BLOCK = /(?:<!-- Google tag \(gtag\.js\)[^\n]*-->\s*)?<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=[^"]+"><\/script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*function gtag\(\)\{dataLayer\.push\(arguments\);\}\s*gtag\('js', new Date\(\)\);\s*(?:gtag\('config', '[^']+'\);\s*)+<\/script>/g;

const CONSENT_LINE = "localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');";
const CONSENT_PUSH = " if (typeof gtag === 'function') { var arV = accepted ? 'granted' : 'denied'; gtag('consent', 'update', {ad_storage: arV, ad_user_data: arV, ad_personalization: arV, analytics_storage: arV}); }";

const UTM_INPUTS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  .map((n) => `<input type="hidden" name="${n}" value="">`).join('');
const FORM_NAME = /(<input type="hidden" name="form-name" value="[^"]*"\s*\/?>)(?!<input type="hidden" name="utm_source")/g;

const ATTR_SCRIPT = '<script defer src="/js/ar-attribution.js"></script>';

const THANK_YOU = new Set(['public/obrigado/index.html', 'public/en/thank-you/index.html', 'public/nl/bedankt/index.html']);
const LEAD_SNIPPET = `<script>
  (function () {
    try { if (sessionStorage.getItem('ar_lead_thankyou')) return; sessionStorage.setItem('ar_lead_thankyou', '1'); } catch (e) {}
    if (typeof gtag === 'function') gtag('event', 'generate_lead', { form_location: 'thank_you_page' });
  })();
</script>`;

const GENERATORS = [
  'scripts/lib/chrome.mjs', 'scripts/lib/market-cluster.mjs', 'scripts/build-spain-cluster.mjs',
  'scripts/build-spain-articles.mjs', 'scripts/generate-nl-cluster.mjs', 'scripts/generate-de-cluster.mjs',
  'scripts/build-property-cluster.mjs', 'scripts/build-expat-hub.mjs', 'scripts/build-insurance-review.mjs',
  'scripts/build-car-cluster.mjs',
];

function transform(s, { page }) {
  let out = s;
  if (!out.includes(MARK)) {
    let replaced = false;
    out = out.replace(OLD_BLOCK, () => (replaced ? '' : ((replaced = true), CANONICAL)));
    if (!replaced && page && out.includes('</head>')) out = out.replace('</head>', CANONICAL + '\n</head>');
  }
  if (out.includes(CONSENT_LINE) && !out.includes(CONSENT_LINE + CONSENT_PUSH)) {
    out = out.split(CONSENT_LINE).join(CONSENT_LINE + CONSENT_PUSH);
  }
  out = out.replace(FORM_NAME, `$1${UTM_INPUTS}`);
  if (page && !out.includes('/js/ar-attribution.js') && out.includes('</body>')) {
    out = out.replace(/<\/body>(?![\s\S]*<\/body>)/, ATTR_SCRIPT + '\n</body>');
  }
  return out;
}

let pages = 0, gens = 0;
for (const rel of globSync('public/**/*.html', { cwd: ROOT })) {
  if (rel.endsWith('email-signature.html')) continue;
  const f = join(ROOT, rel);
  const s = readFileSync(f, 'utf8');
  let out = transform(s, { page: true });
  if (THANK_YOU.has(rel) && !out.includes("form_location: 'thank_you_page'")) {
    out = out.replace(/<\/body>(?![\s\S]*<\/body>)/, LEAD_SNIPPET + '\n</body>');
  }
  if (out !== s) { writeFileSync(f, out); pages++; }
}
for (const rel of GENERATORS) {
  const f = join(ROOT, rel);
  const s = readFileSync(f, 'utf8');
  const out = transform(s, { page: false });
  if (out !== s) { writeFileSync(f, out); gens++; }
}
console.log(`pages updated: ${pages}; generator sources updated: ${gens}`);
