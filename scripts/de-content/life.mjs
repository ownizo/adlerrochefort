import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Lebensversicherung. Deliberately the shortest of the eleven pages — Part 6
 * gives it a short, narrow brief and an explicit instruction to avoid
 * anything reading as unauthorised financial advice. The bank-linked-cover
 * mechanics (beneficiary up to loan balance, premiums rising with age, the
 * mortgage-spread discount trade-off, disability-definition variance) are
 * translated from the site's own EN mortgage-life-insurance article, not
 * invented — the facts, not the market, are what's being reused.
 */
export const LIFE_PAGE = {
  slug: 'lebensversicherung-portugal',
  // Hand-authored wizard, not regenerated from this file's formBranch/BRANCHES:
  // generate-de-cluster.mjs splices the published <section id="angebot">
  // back in verbatim. See publishedFormSection() there for why.
  dedicatedForm: 'de-lebensversicherung-wizard',
  url: '/de/lebensversicherung-portugal/',
  title: 'Lebensversicherung in Portugal für deutsche Expats | Adler & Rochefort',
  description:
    'Risikolebensversicherung, an eine Hypothek gekoppelte Deckung und Familienabsicherung in Portugal: was die Bankpolice abdeckt, wo Marktalternativen infrage kommen, und worauf Sie bei Begünstigten achten.',
  keywords: 'Lebensversicherung Portugal, Risikolebensversicherung Portugal, Hypothek Lebensversicherung Portugal, Familienabsicherung Portugal Deutsche',
  eyebrow: 'Lebensversicherung',
  h1: 'Lebensversicherung in Portugal: Hypothek und Familienabsicherung',
  standfirst:
    'Die Bank schlägt bei jeder Hypothek eine Lebensversicherung vor, oft ohne dass jemand nachfragt, ob es Alternativen gibt. Diese Seite erklärt, was diese Police tatsächlich abdeckt, wo Marktalternativen infrage kommen, und was Familienabsicherung darüber hinaus bedeutet.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Beratung anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Lebensversicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Beratung zur Lebensversicherung anfragen',
  formBranch: 'Lebensversicherung',
  formSubject: 'Lebensversicherung Portugal',
  formCta: 'Beratung anfragen',
  formIntro: 'Nennen Sie uns kurz, ob es um eine Hypothek oder um allgemeine Familienabsicherung geht — wir sagen Ihnen, welche Fragen vor einem Vertrag zu klären sind.',
  formPlaceholder: 'Zum Beispiel: Zweck (Hypothek / Familienabsicherung / beides), Alter, gewünschte Versicherungssumme, ob bereits eine Bankpolice besteht.',
  sections: `
<section class="section plain" aria-labelledby="hypothek">
  <div class="container narrow article-body">
    <h2 id="hypothek">Die an die Hypothek gekoppelte Police</h2>
    <p>Genehmigt eine portugiesische Bank eine Hypothek, schlägt sie fast immer im selben Zug eine Lebensversicherung vor. Diese Police soll die ausstehende Hypothekenschuld tilgen, falls der versicherte Kreditnehmer verstirbt, teils auch bei einer anspruchsberechtigten Invalidität. Begünstigte ist in der Regel die Bank, bis zur Höhe der Restschuld.</p>
    <p>Viele Käufer akzeptieren diese Police, weil sie sich wie ein Teil des Kredits anfühlt. Das muss sie nicht sein: In den meisten Fällen kann die Lebensversicherung unabhängig von der Bankpolice verglichen werden, und die Bankoption ist nicht immer die günstigste oder flexibelste.</p>
    <div class="callout">
      <span class="callout-label">Worauf dabei zu achten ist</span>
      <ul style="margin:0 0 0 20px;">
        <li>Die Prämie der Bankpolice steigt häufig mit dem Alter, was viele Kreditnehmer erst nach mehreren Verlängerungen bemerken.</li>
        <li>Die Definition von Invalidität ist nicht einheitlich — "absolute und dauerhafte Erwerbsunfähigkeit" ist etwas anderes als "vollständige, dauerhafte Invalidität". Klären Sie die genaue Definition, bevor Sie unterschreiben.</li>
        <li>Banken gewähren teils einen Zinsabschlag (Spread-Rabatt), wenn Sie die bankeigene Police behalten. Der Vergleich muss diesen Abschlag einschließen — nicht nur die Prämien der beiden Policen isoliert betrachten.</li>
      </ul>
    </div>
    <p>Eine Ersatzpolice muss die Mindestanforderungen der Bank erfüllen, aber sie muss nicht ungeprüft am Bankschalter akzeptiert werden. Ob die Bankpolice nach Abzug des Zinsvorteils trotzdem wettbewerbsfähig bleibt, lässt sich nur durch einen Vergleich über die erwartete Kreditlaufzeit zuverlässig beantworten.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="familie">
  <div class="container narrow article-body">
    <h2 id="familie">Familienabsicherung über die Hypothek hinaus</h2>
    <p>Unabhängig von einer Hypothek stellt sich für Residenten in Portugal dieselbe Frage wie überall: Was passiert finanziell mit der Familie, wenn ein Einkommen wegfällt? Eine eigenständige Risikolebensversicherung — nicht an eine Bankschuld, sondern an Ihre tatsächliche Versicherungssumme und Ihre benannten Begünstigten gekoppelt — deckt genau diese Lücke ab, unabhängig davon, ob eine Immobilie im Spiel ist.</p>
    <p>Für internationale Residenten und Expatriates kommt eine zusätzliche Ebene hinzu: Prüfen Sie, ob Ihre Begünstigten im Ausland ohne Weiteres über die Police verfügen können, und ob Ihr Testament und Ihre Begünstigtenbenennung zueinander konsistent sind. Das ist eine Frage, die Sie mit Ihrer Police und, wo nötig, mit rechtlichem Rat klären — wir vermitteln die Deckung, nicht die Nachlassplanung.</p>
  </div>
</section>`,
  faqTitle: 'Lebensversicherung Portugal — häufige Fragen',
  faq: [
    {
      q: 'Muss ich die Lebensversicherung der Bank nehmen?',
      a: '<p>In den meisten Fällen nein. Eine Ersatzpolice muss die Mindestanforderungen der Bank erfüllen, ist aber nicht verpflichtend an die Bank gebunden. Rechnen Sie einen möglichen Zinsabschlag (Spread-Rabatt) für die bankeigene Police in den Vergleich mit ein.</p>',
    },
    {
      q: 'Was deckt eine an die Hypothek gekoppelte Lebensversicherung ab?',
      a: '<p>Sie tilgt die ausstehende Restschuld bei Tod der versicherten Person, teils auch bei anspruchsberechtigter Invalidität. Begünstigte ist in der Regel die Bank, bis zur Höhe der Restschuld.</p>',
    },
    {
      q: 'Steigt die Prämie mit dem Alter?',
      a: '<p>Bei vielen Bankpolicen ja, oft unbemerkt über mehrere Verlängerungen hinweg. Das ist einer der Hauptgründe, eine Alternative rechnerisch zu prüfen, statt die Bankpolice automatisch zu verlängern.</p>',
    },
    {
      q: 'Kann ich Begünstigte frei bestimmen?',
      a: '<p>Bei einer eigenständigen, nicht an die Hypothek gekoppelten Police in der Regel ja. Bei einer hypothekengebundenen Police ist die Bank bis zur Höhe der Restschuld Begünstigte; ein darüber hinausgehender Betrag kann je nach Vertrag anderen Begünstigten zugewiesen werden.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
  ],
};
