import type { Context, Config } from "@netlify/edge-functions";

/**
 * Language router for the homepage only (Bloco A).
 *
 * Goal: visitors whose browser is NOT in Portuguese (English expats, but also
 * German/French/Dutch/etc. speakers) land on the English site at `/en/`, while
 * Portuguese-language visitors stay on the PT homepage at `/`.
 *
 * SEO safety:
 *  - Runs ONLY on the root `/`. Deep pages (/blog/..., /en/blog/..., landings)
 *    are never redirected.
 *  - Googlebot normally sends no `Accept-Language` header, so it falls through
 *    to the PT homepage (the x-default version). No cloaking, no bot detection.
 *  - All language redirects are 302 (temporary), never 301.
 *
 * User preference (Bloco C): an explicit `nf_lang` cookie set by the PT|EN
 * switcher always wins over the browser-language heuristic.
 */
export default async (request: Request, _context: Context) => {
  const url = new URL(request.url);

  // Safety net — this should only ever be invoked for "/" via the config path,
  // but guard explicitly so deep pages are never redirected.
  if (url.pathname !== "/") return;

  // Explicit user choice (PT|EN switcher) always prevails.
  const cookie = request.headers.get("cookie") || "";
  const pref = cookie.match(/(?:^|;\s*)nf_lang=(pt|en)/i);
  if (pref) {
    if (pref[1].toLowerCase() === "en") {
      return Response.redirect(new URL("/en/", url), 302);
    }
    return; // nf_lang=pt -> stay on the PT homepage.
  }

  // Primary browser language. No Accept-Language (e.g. Googlebot) -> stay on PT.
  const accept = request.headers.get("accept-language") || "";
  const primary = accept.split(",")[0].trim().toLowerCase(); // e.g. "en-gb", "de"
  const lang = primary.split("-")[0]; // e.g. "en", "de"

  // Localized expat landings. A visitor whose browser is in one of the nine
  // languages the site is actually written in gets that language's homepage;
  // every other non-PT language falls through to English.
  //
  // The keys are language codes, not market segments, which is why Swedish is
  // "sv" and Danish is "da" even though the pages live at /se/ and /dk/. A key
  // of "se" would match Northern Sami and never match a Stockholm browser.
  const landing: Record<string, string> = {
    de: "/de/",
    nl: "/nl/",
    fr: "/fr/",
    pl: "/pl/",
    sv: "/se/",
    da: "/dk/",
    // Chinese. The primary tag is matched on its language subtag, so zh-CN,
    // zh-Hans, zh-SG and zh-TW all land here. The pages are Simplified
    // Chinese; sending a Traditional-Chinese browser to them is still a better
    // answer than English, and the selector is one click away either way.
    zh: "/zh/",
    // Hebrew. The language subtag is "he", so he, he-IL and the legacy "iw"
    // that some older browsers still send would all need to be matched here —
    // "il" would never appear as a language tag at all, which is why the market
    // segment /il/ is on the value side of this pair and not the key side.
    he: "/il/",
    iw: "/il/",
    en: "/en/",
  };

  if (lang && lang !== "pt") {
    return Response.redirect(new URL(landing[lang] || "/en/", url), 302);
  }

  // Portuguese browser (or unknown) -> continue to the PT homepage (x-default).
};

export const config: Config = {
  path: "/",
};
