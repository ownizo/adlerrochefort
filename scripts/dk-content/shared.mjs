/**
 * Constants shared by every page in the Danish cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure /de/ and /nl/ already carry,
 * written for a Danish reader.
 */
export const LANG_POLICY_DK = {
  heading: 'Vi arbejder på engelsk',
  body: [
    'Denne side er på dansk, fordi emnet handler om danskere i Portugal. Selve arbejdet foregår derimod på engelsk: tilbud, gennemgang af betingelser, korrespondance og skadesager — skriftligt, på engelsk. Vi siger det med vilje på forhånd, for en skadesanmeldelse er det forkerte tidspunkt at finde ud af det.',
    'Portugisiske forsikringsselskaber udsteder efter loven deres policer på portugisisk. Vi sørger for, at du forstår præcis, hvad der står i dem — skriftligt, på engelsk, før du skriver under.',
  ],
};

/** /dk/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Forside', url: '/dk/' }];
