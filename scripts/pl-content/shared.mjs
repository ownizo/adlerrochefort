/**
 * Constants shared by every page in the Polish cluster.
 *
 * This lives in its own module rather than in the market descriptor because
 * the descriptor imports the page modules and the page modules import the
 * breadcrumb root — putting both in one file would create an import cycle.
 * The German cluster splits it the same way (scripts/de-content/shared.mjs).
 *
 * LANG_POLICY is the working-language disclosure that /de/ and /nl/ already
 * carry, written for a Polish reader. It is not a disclaimer bolted on: it is
 * the single most important thing a Polish visitor needs to know before
 * deciding to work with us, and burying it would be the sort of pleasant
 * omission that turns into a problem at a claim.
 */
export const LANG_POLICY_PL = {
  heading: 'Pracujemy w języku angielskim',
  body: [
    'Ta strona jest po polsku, ponieważ dotyczy sytuacji, w której znajdują się Polacy mieszkający w Portugalii i w Hiszpanii. Sama obsługa prowadzona jest jednak w języku angielskim: oferty, wyjaśnienia warunków, korespondencja i zgłoszenia szkód — pisemnie, po angielsku. Mówimy o tym od razu, bo moment zgłoszenia szkody to najgorsza pora na takie odkrycie.',
    'Polisy portugalskich ubezpieczycieli są z mocy prawa wystawiane w języku portugalskim, a hiszpańskich — zwykle po hiszpańsku. Zadbamy o to, żeby przed podpisaniem dokładnie wiedział Pan lub Pani, co w nich napisano — pisemnie, po angielsku.',
  ],
};

/**
 * Breadcrumb root. /pl/ is itself the hub — the market homepage and the topic
 * hub are the same page, as on /de/ — so product pages sit one level below it
 * with no intermediate crumb.
 */
export const BREADCRUMB_ROOT = [{ name: 'Strona główna', url: '/pl/' }];

/**
 * Portugal ↔ Spain sibling band (September 2026). Every Portugal product page
 * points to its Spain counterpart and back, so a reader who owns in both
 * countries finds the other half in one click. Appended to `sections` with
 * the band class that continues the page's own plain/tint alternation (the
 * same rule scripts/lib/site-sections.mjs nextBand() applies), so the
 * portrait/insurer bands that follow still alternate correctly.
 */
export function withSibling(page, { id, label, heading, body, url, cta }) {
  const found = String(page.sections).match(/<section class="section (plain|tint)"/g);
  const last = found && found[found.length - 1];
  const band = last && last.includes('plain') ? 'tint' : 'plain';
  page.sections += `

<section class="section ${band}" aria-labelledby="${id}">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">${label}</span>
      <h2 id="${id}">${heading}</h2>
      <p>${body}</p>
      <p><a class="text-link" href="${url}">${cta} →</a></p>
    </div>
  </div>
</section>`;
  return page;
}
