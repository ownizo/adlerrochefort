/**
 * Constants shared by every page in the Dutch cluster.
 *
 * These live in their own module rather than in nl-cluster.data.mjs because the
 * content modules need them: importing them from the aggregator would create a
 * cycle and leave BREADCRUMB_ROOT in the temporal dead zone while the content
 * modules evaluate.
 */

/** The language-policy block. Final wording — do not paraphrase per page. */
export const LANG_POLICY_NL = {
  heading: 'Onze werktaal is Engels',
  body: [
    'De informatie op deze pagina staat in het Nederlands omdat het onderwerp specifiek Nederlanders in Portugal raakt en nergens anders behoorlijk wordt uitgelegd.',
    'De dienstverlening zelf verloopt in het Engels: offertes, toelichting op de voorwaarden, correspondentie en schadebehandeling. Wij vermelden dat hier vooraf, omdat een schademelding het verkeerde moment is om daar achter te komen.',
    'Polissen van Portugese verzekeraars worden wettelijk in het Portugees opgesteld. Wat wij toevoegen is dat u precies begrijpt wat er staat — in het Engels, op schrift, voordat u tekent.',
    'Alle communicatie verloopt schriftelijk, zodat u alles wat is afgesproken kunt teruglezen.',
  ],
};

/** Every page in the cluster hangs off the Dutch hub. */
export const BREADCRUMB_ROOT = [
  { name: 'Home', url: '/nl/' },
  { name: 'Verzekeringen Portugal', url: '/nl/verzekeringen-portugal/' },
];
