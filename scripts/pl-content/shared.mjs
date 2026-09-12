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
    'Ta strona jest po polsku, ponieważ dotyczy sytuacji, w której znajdują się Polacy mieszkający w Portugalii. Sama obsługa prowadzona jest jednak w języku angielskim: oferty, wyjaśnienia warunków, korespondencja i zgłoszenia szkód — pisemnie, po angielsku. Mówimy o tym od razu, bo moment zgłoszenia szkody to najgorsza pora na takie odkrycie.',
    'Polisy portugalskich ubezpieczycieli są z mocy prawa wystawiane w języku portugalskim. Zadbamy o to, żeby przed podpisaniem dokładnie wiedział Pan lub Pani, co w nich napisano — pisemnie, po angielsku.',
  ],
};

/**
 * Breadcrumb root. /pl/ is itself the hub — the market homepage and the topic
 * hub are the same page, as on /de/ — so product pages sit one level below it
 * with no intermediate crumb.
 */
export const BREADCRUMB_ROOT = [{ name: 'Strona główna', url: '/pl/' }];
