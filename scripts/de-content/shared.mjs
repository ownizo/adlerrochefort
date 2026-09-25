/**
 * Constants shared by every page in the German cluster.
 *
 * LANG_POLICY_DE carries the working-language disclosure verbatim from the
 * pre-existing #sprachpolitik block on /de/index.html (added earlier this
 * branch, before the cluster existed) so the hub keeps the wording it already
 * had and every other German page gets the identical block rather than a
 * drifted copy. See scripts/generate-de-cluster.mjs for why this lives here
 * instead of in generate-de-cluster.mjs itself: the module that renders pages
 * imports content, not the other way round, and centralising the wording is
 * what makes it provably identical on all eleven pages instead of eleven
 * copies that drift apart.
 */
export const LANG_POLICY_DE = {
  heading: 'Unsere Arbeitssprache ist Englisch',
  body: [
    'Diese Seite ist auf Deutsch. Angebote, Erläuterungen der Bedingungen, Korrespondenz und Schadenbegleitung erhalten Sie schriftlich auf Deutsch.',
    'Policen portugiesischer und spanischer Versicherer werden gesetzlich auf Portugiesisch bzw. Spanisch ausgestellt. Wir sorgen dafür, dass Sie genau verstehen, was darin steht — auf Deutsch, schriftlich, bevor Sie unterschreiben.',
  ],
};

/**
 * The breadcrumb root. Unlike the Dutch cluster, the German hub IS /de/ itself
 * (Part 4 of the brief lists "/de/ (hub)" as one of the eleven pages, not a
 * separate landing distinct from the homepage) — so there is no intermediate
 * "insurance in Portugal" crumb the way /nl/verzekeringen-portugal/ sits
 * between /nl/ and every Dutch article. Product pages sit one level below
 * Home directly.
 */
export const BREADCRUMB_ROOT = [{ name: 'Startseite', url: '/de/' }];
