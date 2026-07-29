/*
 * Language preference (Bloco C).
 *
 * Persists the visitor's language choice in the `nf_lang` cookie so the
 * homepage edge router (netlify/edge-functions/lang-router.ts) respects it:
 * an explicit choice always overrides the browser-language heuristic.
 *
 * This script is loaded ONLY on the English (/en/) pages. The PT pages are left
 * untouched on purpose. Because every PT|EN switcher that leads to a PT page is
 * reachable from an English page (and the English homepage is where non-PT
 * browsers are redirected), handling the cookie here is enough:
 *   - Clicking "PT" on an English page records nf_lang=pt before navigating,
 *     so the visitor is not bounced back to /en/ at the root.
 *   - Clicking "EN" records nf_lang=en.
 *   - First visit to any English page (no cookie yet) defaults the preference
 *     to the language actually being viewed: EN. An already-stored explicit
 *     choice is never overwritten on load.
 *
 * Cookies never affect indexing, so this is invisible to Googlebot.
 */
(function () {
  "use strict";

  var ONE_YEAR = 31536000;

  function setLang(value) {
    document.cookie =
      "nf_lang=" + value + ";path=/;max-age=" + ONE_YEAR + ";SameSite=Lax";
  }

  function getLang() {
    var m = document.cookie.match(/(?:^|;\s*)nf_lang=(pt|en)/i);
    return m ? m[1].toLowerCase() : null;
  }

  // Record an explicit choice whenever a language switcher link is clicked.
  document.addEventListener(
    "click",
    function (e) {
      var target = e.target;
      var link =
        target && target.closest
          ? target.closest(".lang-switcher a, .mobile-lang-switcher a")
          : null;
      if (!link) return;

      var href = link.getAttribute("href") || "";

      // Localized landings (NL / DE / FR) are outside the PT|EN preference the
      // homepage router understands — the cookie only stores "pt" or "en", so
      // recording anything here would pin the visitor to the wrong language.
      // Leave whatever preference is already stored untouched.
      if (/^\/(nl|de|fr)(\/|$|[?#])/.test(href)) return;

      if (/^\/en(\/|$|[?#])/.test(href)) {
        setLang("en");
      } else if (/^\//.test(href)) {
        setLang("pt");
      }
    },
    true
  );

  // First-touch default reflects the language being viewed (EN), without
  // overriding a previously stored explicit preference.
  if (!getLang()) {
    setLang("en");
  }
})();
