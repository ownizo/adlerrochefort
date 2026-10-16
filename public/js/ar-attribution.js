/**
 * Lead attribution: where did this visit come from?
 *
 * Until October 2026 no lead in the back office carried a source — every
 * website_leads row had utm_source empty — so there was no way to tell a
 * Google lead from a ChatGPT one or a Google Ads one. The intake already had
 * the columns (netlify/functions/lib/crm-sync.mjs forwards data.utm_*); the
 * forms simply never sent them.
 *
 * What this does:
 *   1. On the first page of a session, works out the source once and keeps it
 *      in sessionStorage (first touch, the same model ar-analytics-tracker.js
 *      uses for landing_page):
 *        - explicit utm_* parameters win;
 *        - otherwise gclid / gbraid / wbraid  -> google / cpc;
 *        - otherwise the referrer host, classified as organic search,
 *          AI assistant, social or referral;
 *        - otherwise (direct) / (none).
 *   2. Writes those values into the hidden utm_* inputs that every Netlify
 *      form carries (added by scripts/apply-analytics-consent.mjs), on load and
 *      again just before submit, so both native posts and the fetch()-based
 *      handlers (ar-quote-form.js, ar-conversion.js) send them.
 *
 * No cookies, nothing sent anywhere by this file: the values only travel with
 * a form the visitor chooses to submit.
 */
(function () {
  'use strict';
  var KEY = 'ar_attribution';
  var FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  var SEARCH = ['google.', 'bing.', 'duckduckgo.', 'yahoo.', 'ecosia.', 'qwant.', 'yandex.', 'baidu.', 'search.brave.'];
  var AI = { 'chatgpt.com': 'chatgpt.com', 'chat.openai.com': 'chatgpt.com', 'perplexity.ai': 'perplexity',
             'gemini.google.com': 'gemini', 'claude.ai': 'claude', 'copilot.microsoft.com': 'copilot' };
  var SOCIAL = ['facebook.', 'instagram.', 'linkedin.', 'lnkd.in', 't.co', 'x.com', 'twitter.', 'pinterest.', 'youtube.', 'reddit.', 'whatsapp.'];

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, '').replace(/^m\./, '').replace(/^l\./, '').replace(/^lm\./, ''); }
    catch (e) { return ''; }
  }
  function has(list, host) {
    for (var i = 0; i < list.length; i++) if (host.indexOf(list[i]) === 0 || host.indexOf('.' + list[i]) > -1 || host === list[i]) return true;
    return false;
  }

  function detect() {
    var q = new URLSearchParams(window.location.search);
    var out = {};
    if (q.get('utm_source')) {
      FIELDS.forEach(function (f) { if (q.get(f)) out[f] = q.get(f).slice(0, 120); });
      return out;
    }
    if (q.get('gclid') || q.get('gbraid') || q.get('wbraid')) return { utm_source: 'google', utm_medium: 'cpc' };
    var ref = document.referrer || '';
    var host = hostOf(ref);
    if (!host || host === window.location.hostname.replace(/^www\./, '')) return { utm_source: '(direct)', utm_medium: '(none)' };
    if (AI[host]) return { utm_source: AI[host], utm_medium: 'ai-assistant' };
    if (has(SEARCH, host)) return { utm_source: host.split('.')[0] === 'search' ? 'brave' : host.split('.')[0], utm_medium: 'organic' };
    if (has(SOCIAL, host)) return { utm_source: host, utm_medium: 'social' };
    return { utm_source: host, utm_medium: 'referral' };
  }

  var attr = null;
  try { attr = JSON.parse(window.sessionStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (!attr) {
    attr = detect();
    try { window.sessionStorage.setItem(KEY, JSON.stringify(attr)); } catch (e) {}
  }

  function fill(root) {
    FIELDS.forEach(function (f) {
      var inputs = (root || document).querySelectorAll('input[name="' + f + '"]');
      for (var i = 0; i < inputs.length; i++) if (!inputs[i].value && attr[f]) inputs[i].value = attr[f];
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { fill(); });
  else fill();
  // Capture phase: runs before the forms' own submit handlers serialise them.
  document.addEventListener('submit', function (e) { if (e.target && e.target.querySelectorAll) fill(e.target); }, true);
  window.ArAttribution = { get: function () { return attr; }, fill: fill };
})();
