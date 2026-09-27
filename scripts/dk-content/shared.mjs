/**
 * Constants shared by every page in the Danish cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure /de/ and /nl/ already carry,
 * written for a Danish reader. Since September 2026 the cluster has a Spain
 * half as well as a Portugal half, so the disclosure names both countries and
 * both policy languages.
 */
export const LANG_POLICY_DK = {
  heading: 'Vi arbejder på engelsk',
  body: [
    'Denne side er på dansk, fordi emnet handler om danskere i Portugal og Spanien. Selve arbejdet foregår derimod på engelsk: tilbud, gennemgang af betingelser, korrespondance og skadesager — skriftligt, på engelsk. Vi siger det med vilje på forhånd, for en skadesanmeldelse er det forkerte tidspunkt at finde ud af det.',
    'Forsikringsselskaberne udsteder som udgangspunkt deres policer på landets sprog — portugisisk i Portugal, spansk i Spanien. Vi sørger for, at du forstår præcis, hvad der står i dem — skriftligt, på engelsk, før du skriver under.',
  ],
};

/** /dk/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Forside', url: '/dk/' }];

/** The Spain landing page is the parent of every Spain page. */
export const BREADCRUMB_SPAIN = [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/dk/forsikring-spanien/' }];

/**
 * The Portugal ↔ Spain sibling link. Rendered as a callout at the end of a
 * page's first section, so the reader who owns a home in the other country
 * sees it before the detail rather than only in "Relaterede sider".
 */
export function siblingCallout({ label, text, url, linkText }) {
  return `    <div class="callout">
      <span class="callout-label">${label}</span>
      ${text} <a href="${url}">${linkText} &rarr;</a>
    </div>`;
}

/** Inserts `html` just before the closing of the first section in `sections`. */
export function withSibling(sections, html) {
  const marker = '\n  </div>\n</section>';
  const i = sections.indexOf(marker);
  if (i === -1) throw new Error('withSibling: no section close found');
  return `${sections.slice(0, i)}\n${html}${sections.slice(i)}`;
}

/** Ready-made callouts: `toSpain.home` on the Portugal page, `toPortugal.home` on the Spain page. */
export const toSpain = {
  guide: siblingCallout({ label: 'Også bolig i Spanien?', text: 'Det spanske marked er skruet anderledes sammen — Consorcio, comunidad og policer på spansk.', url: '/dk/forsikring-spanien/', linkText: 'Forsikring i Spanien' }),
  home: siblingCallout({ label: 'Også bolig i Spanien?', text: 'I Spanien er naturkatastrofer dækket via Consorcio, og ejerforeningens police dækker kun bygningen.', url: '/dk/husforsikring-spanien/', linkText: 'Husforsikring i Spanien' }),
  health: siblingCallout({ label: 'Bor du i Spanien?', text: 'Registrering som EU-borger, S1 og kravet om en police uden egenbetaling fungerer anderledes der.', url: '/dk/sundhedsforsikring-spanien/', linkText: 'Sundhedsforsikring i Spanien' }),
  motor: siblingCallout({ label: 'Bilen i Spanien?', text: 'Spanske nummerplader, lovpligtig ansvarsforsikring og din danske skadesattest.', url: '/dk/bilforsikring-spanien/', linkText: 'Bilforsikring i Spanien' }),
  liability: siblingCallout({ label: 'Også bolig i Spanien?', text: 'Hunde, både, husstandsansatte og udlejning har deres egne spanske regler.', url: '/dk/ansvarsforsikring-spanien/', linkText: 'Ansvarsforsikring i Spanien' }),
  property: siblingCallout({ label: 'Køber du i Spanien?', text: 'Arras, notar, Registro de la Propiedad og bankens forsikringsforslag.', url: '/dk/kobe-bolig-i-spanien-forsikring/', linkText: 'Boligkøb i Spanien' }),
};

export const toPortugal = {
  guide: siblingCallout({ label: 'Også bolig i Portugal?', text: 'Det portugisiske marked har sin egen logik — multirriscos, condomínio og policer på portugisisk.', url: '/dk/forsikringsguide-portugal/', linkText: 'Forsikringsguide til Portugal' }),
  home: siblingCallout({ label: 'Også bolig i Portugal?', text: 'Der er jordskælv et tilvalg, og bygning og indbo samles i én police.', url: '/dk/husforsikring-portugal/', linkText: 'Husforsikring i Portugal' }),
  health: siblingCallout({ label: 'Bor du i Portugal?', text: 'SNS, udrejse fra Danmark og international dækning for familien.', url: '/dk/sundhedsforsikring-portugal/', linkText: 'Sundhedsforsikring i Portugal' }),
  motor: siblingCallout({ label: 'Bilen i Portugal?', text: 'ISV, import via IMT og din skadesattest på portugisisk.', url: '/dk/bilforsikring-portugal/', linkText: 'Bilforsikring i Portugal' }),
  liability: siblingCallout({ label: 'Også bolig i Portugal?', text: 'Familiens ansvar i millionklassen og erhvervsansvar i Portugal.', url: '/dk/ansvarsforsikring-portugal/', linkText: 'Ansvarsforsikring i Portugal' }),
  property: siblingCallout({ label: 'Køber du i Portugal?', text: 'CPCV, escritura og hvad banken kræver fra første dag.', url: '/dk/kobe-bolig-i-portugal-forsikring/', linkText: 'Boligkøb i Portugal' }),
};
