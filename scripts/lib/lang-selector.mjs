/**
 * The language selector — single source of markup for all ten languages.
 *
 * Two callers render it and they must not drift apart:
 *   * scripts/lang-switcher.mjs rewrites the selector into every page already
 *     in public/ (the post-processor that has always owned this control);
 *   * scripts/lib/market-cluster.mjs renders it straight into the Polish,
 *     Swedish and Danish pages as they are generated, so those pages are
 *     correct before any post-processing runs.
 *
 * The control it emits is a disclosure button plus a plain list of links:
 *
 *     [globe] Svenska [chevron]
 *       Português        startsida
 *       English          startsida
 *       …
 *       Svenska                        ← aria-current="true"
 *
 * Design notes that are decisions rather than taste:
 *
 *   * Chinese joined in September 2026 as /zh/. Here the segment and the
 *     language code do line up — `zh` is the language — but the written form
 *     still has to be declared: the pages are Simplified Chinese, so the HTML
 *     language and the hreflang are both `zh-CN`, never bare `zh` (which says
 *     nothing about script) and never `cn` (which is a country, not a
 *     language). The row's own label is 简体中文, the name of the written
 *     language rather than of a country.
 *   * Hebrew joined in September 2026 as /il/, and is the clearest case yet of
 *     why `key` is not a language code: the market is Israel (il) and the
 *     language is Hebrew (he). The HTML language is `he`, the hreflang is
 *     `he-IL`, and the URL segment is /il/ — three different strings for three
 *     different things. The row's label is עברית, the language's own name.
 *   * Hebrew is also the first right-to-left row, which is why every row
 *     carries an explicit `dir`. `lang` does not set direction — it describes
 *     the language, and nothing obliges a browser to infer one from the other.
 *     `dir` says it outright, in both directions: "Português" stays
 *     left-to-right when the menu is rendered on a Hebrew page, and עברית
 *     stays right-to-left in the nine left-to-right menus. The attribute is
 *     inert on every page that existed before Hebrew did, which is why it
 *     could be added to all ten rows rather than special-cased for one. The
 *     labels themselves are never touched: reversing a string by hand would be
 *     the bug, not the fix.
 *   * URL segment and language code are different things. Swedish is served
 *     from /se/ because that is the market, but its HTML language is `sv` and
 *     its hreflang is `sv-SE`; Danish is /dk/, `da`, `da-DK`. "se" and "dk"
 *     are country codes and are never used as language codes — a page that
 *     said lang="se" would be declaring Northern Sami. The `key` below is the
 *     URL segment; `html` and `hreflang` are the language codes.
 *   * Every language is always offered. Where this page has no counterpart the
 *     link goes to that language's home page and the row says so, in that
 *     language, rather than implying a translation exists. This is the rule the
 *     corpus already applied with .lang-unavailable, kept and made legible.
 *   * The button label is the language's own name, so the current language is
 *     identifiable without reading a code, and it is repeated in aria-label
 *     because the globe alone is not a label.
 */

/** The ten languages, in the order the control presents them. */
export const LANGS = [
  { key: 'pt', label: 'Português', html: 'pt-PT', hreflang: 'pt-PT', home: '/' },
  { key: 'en', label: 'English', html: 'en', hreflang: 'en-GB', home: '/en/' },
  { key: 'nl', label: 'Nederlands', html: 'nl', hreflang: 'nl', home: '/nl/' },
  { key: 'fr', label: 'Français', html: 'fr', hreflang: 'fr', home: '/fr/' },
  { key: 'de', label: 'Deutsch', html: 'de', hreflang: 'de', home: '/de/' },
  { key: 'pl', label: 'Polski', html: 'pl', hreflang: 'pl-PL', home: '/pl/' },
  { key: 'se', label: 'Svenska', html: 'sv', hreflang: 'sv-SE', home: '/se/' },
  { key: 'dk', label: 'Dansk', html: 'da', hreflang: 'da-DK', home: '/dk/' },
  { key: 'zh', label: '简体中文', html: 'zh-CN', hreflang: 'zh-CN', home: '/zh/' },
  { key: 'il', label: 'עברית', html: 'he', hreflang: 'he-IL', home: '/il/', dir: 'rtl' },
];

export const LANG_KEYS = LANGS.map((l) => l.key);
export const LANG_BY_KEY = Object.fromEntries(LANGS.map((l) => [l.key, l]));

/**
 * Interface copy, in the language of the page the control is rendered on — a
 * Danish visitor should not meet an English aria-label on a Danish page.
 *
 * `aria(name)` names the current language and says the control changes it.
 * `home` is the note on a row whose language has no counterpart for this page.
 * `blog` is the same note when the fallback is that language's article index.
 */
export const SELECTOR_UI = {
  pt: { aria: (n) => `Idioma: ${n}. Escolher outro idioma.`, home: 'página inicial', blog: 'blog' },
  en: { aria: (n) => `Language: ${n}. Choose another language.`, home: 'home page', blog: 'blog' },
  nl: { aria: (n) => `Taal: ${n}. Kies een andere taal.`, home: 'startpagina', blog: 'blog' },
  fr: { aria: (n) => `Langue : ${n}. Choisir une autre langue.`, home: 'page d’accueil', blog: 'blog' },
  de: { aria: (n) => `Sprache: ${n}. Andere Sprache wählen.`, home: 'Startseite', blog: 'Blog' },
  pl: { aria: (n) => `Język: ${n}. Wybierz inny język.`, home: 'strona główna', blog: 'blog' },
  se: { aria: (n) => `Språk: ${n}. Välj ett annat språk.`, home: 'startsida', blog: 'blogg' },
  dk: { aria: (n) => `Sprog: ${n}. Vælg et andet sprog.`, home: 'forside', blog: 'blog' },
  // Chinese takes no space around the punctuation and no article before the
  // noun; the row note is 首页 (home page), not a translation of "home page".
  zh: { aria: (n) => `语言：${n}。选择其他语言。`, home: '首页', blog: '博客' },
  // Hebrew. Written for a reader of Hebrew, not transliterated from the
  // English row: `aria` uses the verbal noun (בחירת) the way Hebrew interface
  // copy does rather than an imperative addressed to one gender.
  il: { aria: (n) => `שפה: ${n}. בחירת שפה אחרת.`, home: 'דף הבית', blog: 'בלוג' },
};

/** Assets the control needs. Both callers inject exactly these two lines. */
export const LANGSEL_STYLESHEET = '/css/ar-langsel.css';
export const LANGSEL_SCRIPT = '/js/ar-langsel.js';
export const LANGSEL_CSS_LINK = `<link rel="stylesheet" href="${LANGSEL_STYLESHEET}">`;
export const LANGSEL_SCRIPT_TAG = `<script defer src="${LANGSEL_SCRIPT}"></script>`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const GLOBE = `<svg class="ar-langsel-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6M12 3c-2.6 2.6-2.6 15.4 0 18M12 3c2.6 2.6 2.6 15.4 0 18"/></svg>`;
const CHEVRON = `<svg class="ar-langsel-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true" focusable="false"><path d="M1 1.2 5 4.8 9 1.2"/></svg>`;

/**
 * Build the ten rows for one page.
 *
 * @param {string} pageLang   URL-segment key of the page's own language.
 * @param {string} pageUrl    The page's own path, for the "you are here" row.
 * @param {object} pairs      key -> path, for languages with a real counterpart.
 * @param {object} fallbacks  key -> path, overriding that language's home when
 *                            something better exists (an article index, say).
 *                            A path ending in /blog/ is noted as the blog.
 */
export function selectorTargets({ pageLang, pageUrl, pairs = {}, fallbacks = {} }) {
  return LANGS.map((l) => {
    if (l.key === pageLang) return { ...l, href: pageUrl, current: true, fallback: false };
    const paired = pairs[l.key];
    if (paired) return { ...l, href: paired, current: false, fallback: false };
    const href = fallbacks[l.key] || l.home;
    return { ...l, href, current: false, fallback: true, isBlog: /\/blog\/$/.test(href) };
  });
}

/**
 * Render the control's markup.
 *
 * Returns the inner HTML of the switcher container, so the post-processor can
 * drop it inside the `<div class="lang-switcher">` / `<div
 * class="mobile-lang-switcher">` wrappers the corpus already has and the
 * generators can wrap it themselves.
 *
 * `variant` adds an `ar-langsel-<variant>` class for a placement that needs
 * different geometry — the footer instance opens upward, because a menu
 * hanging below a control near the bottom of the document would fall off it.
 * `id` overrides the element ids, which matters once a page carries three
 * instances: the button/menu pair is wired by id, so duplicates would point
 * every control at the first menu.
 */
export function langSelectorHtml({
  pageLang,
  targets,
  mobile = false,
  variant = '',
  id: idBase = '',
  indent = '      ',
}) {
  const ui = SELECTOR_UI[pageLang] || SELECTOR_UI.en;
  const self = targets.find((t) => t.current) || targets[0];
  const id = idBase || (mobile ? 'arLangselMobile' : 'arLangsel');
  const pad = indent;
  const p2 = `${pad}  `;
  const p3 = `${pad}    `;

  const rows = targets
    .map((t) => {
      const attrs = [
        `href="${esc(t.href)}"`,
        `lang="${t.html}"`,
        `dir="${t.dir || 'ltr'}"`,
        `hreflang="${t.hreflang}"`,
      ];
      if (t.current) attrs.push('aria-current="true"');
      const note = t.fallback
        ? `<span class="ar-langsel-note">${esc(t.isBlog ? ui.blog : ui.home)}</span>`
        : '';
      return `${p3}<li><a ${attrs.join(' ')}><span>${esc(t.label)}</span>${note}</a></li>`;
    })
    .join('\n');

  const classes = ['ar-langsel'];
  if (mobile) classes.push('ar-langsel-mobile');
  if (variant) classes.push(`ar-langsel-${variant}`);

  return `${pad}<div class="${classes.join(' ')}" data-ar-langsel>
${p2}<button type="button" class="ar-langsel-btn" id="${id}Btn" aria-expanded="false" aria-controls="${id}Menu" aria-label="${esc(ui.aria(self.label))}">${GLOBE}<span class="ar-langsel-label">${esc(self.label)}</span>${CHEVRON}</button>
${p2}<ul class="ar-langsel-menu" id="${id}Menu" aria-labelledby="${id}Btn" hidden>
${rows}
${p2}</ul>
${pad}</div>`;
}

/**
 * The footer instance: the control, plus a plain list behind <noscript>.
 *
 * The footer's language column used to be a flat row of bordered two-letter
 * chips — PT | EN | NL | FR | DE. Ten languages do not fit that shape: the row
 * wraps into a block, two-letter codes for Polish, Swedish, Danish, Chinese
 * and Hebrew are unrecognisable to the people they are for ("SE" is not a
 * language, "CN" is not one either, and "IL" names a country rather than
 * עברית), and on the pages whose footer column is a flex
 * column the chips stack one per line into a ladder taller than the column
 * beside it. So the footer gets the same control the header has, from the same
 * markup and the same targets.
 *
 * The <noscript> list is what the chips were actually good for: the menu only
 * opens with script, and a visitor dropped into a language they cannot read
 * needs a link out whether or not the script ran. It carries the same ten
 * targets, so the two routes agree.
 *
 * Both callers — scripts/lang-switcher.mjs for the existing corpus and
 * scripts/lib/market-cluster.mjs for the generated market pages — render this,
 * which is what makes the post-processing pass a no-op on a freshly generated
 * page.
 */
export function footerSelectorHtml({ pageLang, targets, indent = '      ' }) {
  const pad = indent;
  const rows = targets
    .map((t) => {
      const attrs = [`href="${esc(t.href)}"`, `lang="${t.html}"`, `dir="${t.dir || 'ltr'}"`];
      if (t.current) attrs.push('aria-current="true"');
      return `${pad}    <li><a ${attrs.join(' ')}>${esc(t.label)}</a></li>`;
    })
    .join('\n');

  return `${langSelectorHtml({
    pageLang,
    targets,
    variant: 'footer',
    id: 'arLangselFooter',
    indent: pad,
  })}
${pad}<noscript>
${pad}  <ul class="footer-col-links footer-langs ar-langsel-fallback">
${rows}
${pad}  </ul>
${pad}</noscript>`;
}
