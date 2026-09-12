import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Hausversicherung — built around the one contrast Part 6 asks for by name:
 * Germans know Unterversicherungsverzicht and will grasp the Portuguese
 * regra proporcional instantly once it sits next to it. The mandatory-fire-
 * insurance, seguro multirriscos and 1755-earthquake facts are translated
 * from scripts/nl-content/housing.mjs's woonverzekering-portugal entry, not
 * re-derived — same underlying facts as the Dutch cluster already carries.
 */
export const HOME_PAGE = {
  slug: 'hausversicherung-portugal',
  url: '/de/hausversicherung-portugal/',
  title: 'Hausversicherung in Portugal für deutsche Eigentümer | Adler & Rochefort',
  description:
    'Gebäude- und Hausratversicherung, die regra proporcional im Vergleich zum deutschen Unterversicherungsverzicht, Erdbebendeckung, Pool und Alojamento Local — was eine portugiesische Hausversicherung wirklich abdeckt.',
  keywords:
    'Hausversicherung Portugal, Hausversicherung Portugal Deutsche, Ferienhaus Versicherung Portugal, Hausversicherung Algarve, Wohngebäudeversicherung Portugal, Erdbebenversicherung Portugal, Alojamento Local Versicherung',
  eyebrow: 'Hausversicherung',
  h1: 'Hausversicherung in Portugal: was Sie versichern, und wofür',
  standfirst:
    'Ein Konzept entscheidet über die meisten Streitfälle bei der Schadenregulierung, und es wird selten vorher erklärt: die regra proporcional. Diese Seite erklärt, was in Portugal Pflicht ist, was ein seguro multirriscos üblicherweise abdeckt, wie Sie die richtige Versicherungssumme ermitteln, und wann Erdbebendeckung mehr als eine theoretische Frage ist.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Versicherung vergleichen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Hausversicherung' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  pullquote: 'Die regra proporcional kürzt jede Schadenzahlung, nicht nur den Totalschaden.',
  schemaType: 'WebPage',
  formHeading: 'Hausversicherung anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Hausversicherung Portugal',
  formCta: 'Versicherung vergleichen',
  formIntro:
    'Nennen Sie uns Lage, Typ und Baujahr der Immobilie — wir sagen Ihnen, worauf es bei der Versicherungssumme ankommt und ob Erdbebendeckung für Ihre Lage sinnvoll ist.',
  formPlaceholder:
    'Zum Beispiel: Lage, Immobilientyp, Baujahr, Wohnfläche, Pool vorhanden, Haupt- oder Zweitwohnsitz, geplante Vermietung.',
  sections: `
<section class="section plain" aria-labelledby="pflicht">
  <div class="container narrow article-body">
    <h2 id="pflicht">Was Pflicht ist: Brandversicherung bei propriedade horizontal</h2>
    <p>Portugal kennt eine einzige gesetzliche Versicherungspflicht für Wohneigentümer, und sie ist enger gefasst, als viele erwarten. Besitzen Sie eine Einheit in einem Gebäude, das als <em>propriedade horizontal</em> aufgeteilt ist — vergleichbar einer Eigentumswohnung innerhalb einer Wohnungseigentümergemeinschaft —, sind Sie verpflichtet, für Ihre eigene Einheit und anteilig für die Gemeinschaftsflächen eine <strong>Brandversicherung</strong> (<em>seguro de incêndio</em>) zu unterhalten.</p>
    <p>Zwei verbreitete Missverständnisse dazu:</p>
    <ul>
      <li><strong>"Die Eigentümergemeinschaft hat doch eine Police."</strong> Die deckt die Gemeinschaftsflächen. Ihre eigene Einheit fällt nicht automatisch darunter, der Hausrat schon gar nicht. Zudem ist die Police der Gemeinschaft in der Praxis oft auf einen veralteten Betrag versichert.</li>
      <li><strong>"Ich habe ein freistehendes Haus, also brauche ich nichts."</strong> Rechtlich korrekt — dort besteht keine gesetzliche Pflicht. Liegt eine Hypothek auf der Immobilie, verlangt die Bank praktisch immer eine Police, und diese Anforderung ist für Sie ebenso bindend wie das Gesetz.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="multirriscos">
  <div class="container narrow article-body">
    <h2 id="multirriscos">Seguro multirriscos: das Standardprodukt</h2>
    <p>Was so gut wie jeder abschließt, ist ein <em>seguro multirriscos habitação</em> — die portugiesische Gebäude- und Hausratversicherung in einer Police. Die Brandversicherung ist darin enthalten, ergänzt um die Deckungen, die das Produkt alltagstauglich machen:</p>
    <ul>
      <li>Feuer, Blitzschlag und Explosion</li>
      <li>Sturm, Hagel und Überschwemmung</li>
      <li>Wasserschaden durch Rohrbruch — in der Praxis der häufigste Schadenfall</li>
      <li>Diebstahl und Einbruch, mit einer Untergrenze für Wertgegenstände</li>
      <li>Haftpflicht als Gebäudeeigentümer gegenüber Dritten</li>
    </ul>
    <p>Pool, Garten, Umfassungsmauern, Garagen und Nebengebäude lassen sich in der Regel mitversichern — sie werden bei der Angabe der Versicherungssumme aber am häufigsten vergessen. Für Kunst, Schmuck und andere hochwertige Gegenstände gelten meist eigene Sublimits; darüber hinausgehende Werte müssen gesondert deklariert werden.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="regra-proporcional">
  <div class="container narrow article-body">
    <h2 id="regra-proporcional">Wiederaufbauwert statt Kaufpreis — der Fehler, der Geld kostet</h2>
    <p>Das ist der Kern dieser Seite. In Deutschland ist der <strong>Unterversicherungsverzicht</strong> bei vielen Wohngebäudeversicherungen üblich: Solange die Versicherungssumme nach den vorgegebenen Berechnungsmethoden ermittelt wurde, verzichtet der Versicherer im Schadenfall auf die Einrede der Unterversicherung. In Portugal gibt es dieses Konzept nicht. Stattdessen gilt die <strong>regra proporcional</strong>: Ist die Versicherungssumme zu niedrig angesetzt, wird <em>jede</em> Schadenzahlung anteilig gekürzt — nicht nur beim Totalschaden, sondern bei jedem einzelnen Schadenfall, auch einem kleinen Wasserschaden.</p>
    <div class="callout">
      <span class="callout-label">Wie die Kürzung funktioniert</span>
      Liegt Ihre Versicherungssumme bei 70&nbsp;% des tatsächlichen Wiederaufbauwerts, zahlt der Versicherer bei jedem Schaden ebenfalls nur rund 70&nbsp;% der Schadenhöhe — unabhängig davon, wie klein der Schaden ist. Der Unterschied zum deutschen Unterversicherungsverzicht ist genau dieser Automatismus: Es gibt in Portugal keinen Verzicht auf diese Kürzung, den man vertraglich vereinbaren könnte.
    </div>
    <p>Die Versicherungssumme muss dem entsprechen, was der Wiederaufbau der Immobilie kostet — nicht dem Kaufpreis und nicht der Einschätzung des Maklers. Der Unterschied entsteht, weil der Kaufpreis Grundstück und Lage einschließt, der Wiederaufbauwert aber nicht. Eine Faustregel: bewohnbare Fläche in m² × Baukosten pro m² für diese Bauart, zuzüglich Pool, Umfassungsmauer, Terrassenüberdachung, Garage und Photovoltaikanlage — genau die Posten, die am häufigsten vergessen werden.</p>
    <p>Ausführlich, mit Rechenbeispielen: <a href="/en/blog/outdated-insured-values/" hreflang="en">Underinsurance in Portugal: the Proportional Rule and Outdated Insured Values</a> und <a href="/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/" hreflang="en">Insuring to the Bank's Figure Is Not the Same as Insuring to Rebuild Cost</a> (beide Englisch). Kommt es trotzdem zum Streit über die Schadenhöhe, gibt es einen geregelten Weg zur Klärung: <a href="/en/blog/disputing-sum-insured-portugal/" hreflang="en">Disputing a Property Claim Settlement in Portugal</a> (Englisch).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="privathaftpflicht">
  <div class="container narrow article-body">
    <h2 id="privathaftpflicht">Privathaftpflicht: in Deutschland selbstverständlich, in Portugal nicht automatisch</h2>
    <p>Fast jeder deutsche Haushalt hat eine Privathaftpflichtversicherung, oft ohne aktiv darüber nachzudenken. In Portugal existiert kein direktes Äquivalent in derselben automatischen Form. Ein <em>seguro multirriscos</em> enthält meist eine Haftpflichtkomponente für Schäden, die von der Immobilie ausgehen (z. B. ein auslaufender Wasserschlauch, der die Wohnung des Nachbarn beschädigt) — das ist jedoch etwas anderes als eine umfassende private Haftpflichtdeckung für Schäden, die Sie oder Familienmitglieder im Alltag Dritten zufügen. Prüfen Sie den genauen Umfang Ihrer Police, statt anzunehmen, dass "das schon mitversichert ist".</p>
  </div>
</section>

<section class="section plain" aria-labelledby="erdbeben">
  <div class="container narrow article-body">
    <h2 id="erdbeben">Erdbeben: optional, und an der Algarve nicht theoretisch</h2>
    <p>Erdbebendeckung (<em>fenómenos sísmicos</em>) ist in Portugal <strong>nicht</strong> standardmäßig in einem <em>seguro multirriscos</em> enthalten. Es handelt sich um eine Zusatzdeckung, die gesondert gewählt und gesondert bepreist wird.</p>
    <p>Für den Südwesten Portugals ist das keine abstrakte Überlegung. Das Epizentrum des Erdbebens von 1755, das Lissabon zerstörte und die Algarve-Küste mit einem Tsunami traf, lag vor der Küste von Kap São Vicente — wenige Dutzend Kilometer von Lagos entfernt. Die Region liegt an einer aktiven Verwerfungszone, und die seismischen Gefährdungskarten weisen dem Süden eine höhere Klasse zu als dem Norden.</p>
    <p>Die Prämie für diese Deckung richtet sich nach Zone, Baujahr und Bauweise. Für einen modernen Bau nach aktuellen Erdbebennormen ist der Aufschlag meist überschaubar. Für ein altes Gebäude mit tragenden Steinmauern ohne Verstärkung liegt er höher — und genau dort ist auch das Schadenrisiko am größten.</p>
    <p>Unsere Haltung: An der Algarve ist das eine Deckung, die Sie bewusst ablehnen sollten, keine, die Ihnen zufällig entgeht, weil niemand sie erwähnt hat.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="besondere-faelle">
  <div class="container narrow article-body">
    <h2 id="besondere-faelle">Zweitwohnsitz, Leerstand und Alojamento Local</h2>
    <p>Drei Situationen, die bei deutschen Käufern häufig vorkommen und die eine Standardpolice nicht automatisch abdeckt:</p>
    <ul>
      <li><strong>Zweitwohnsitz oder Leerstand über längere Zeiträume.</strong> Manche Policen setzen eine maximale Leerstandsdauer voraus oder verlangen zusätzliche Sicherheitsmaßnahmen (z. B. regelmäßige Kontrolle, funktionierende Alarmanlage), damit die Deckung im Schadenfall greift. Melden Sie dem Versicherer, wenn die Immobilie über längere Zeit unbewohnt ist.</li>
      <li><strong>Saisonale Vermietung / Alojamento Local (AL).</strong> Eine Immobilie, in der Sie gegen Bezahlung Gäste empfangen, ist für den Versicherer keine reine Wohnimmobilie mehr. AL bringt eine eigene gesetzliche Haftpflichtpflicht mit sich, und eine gewöhnliche Wohnpolice deckt die gewerbliche Nutzung in der Regel nicht ab.</li>
      <li><strong>Renovierung und historische Bausubstanz.</strong> Bei einer Sanierung oder einem denkmalgeschützten Gebäude steigt der Wiederaufbauwert oft deutlich, weil in Originalmaterialien wiederaufgebaut werden muss — das muss in der Versicherungssumme berücksichtigt sein, bevor gebaut wird, nicht danach.</li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Hausversicherung Portugal — häufige Fragen',
  faq: [
    {
      q: 'Muss ich mein Haus versichern?',
      a: '<p>Gesetzlich verpflichtend ist nur die Brandversicherung, und auch nur für Wohnungen in propriedade horizontal — einer Eigentumswohnung innerhalb eines aufgeteilten Gebäudes. Für ein freistehendes Haus besteht keine gesetzliche Pflicht, aber bei einer Hypothek verlangt die Bank praktisch immer eine Police. In der Praxis schließt fast jeder ein seguro multirriscos ab, weil Feuer nicht der häufigste Schaden ist.</p>',
    },
    {
      q: 'Brauche ich Erdbebendeckung?',
      a: '<p>Sie ist optional, aber für die Algarve und den Großraum Lissabon eine ernsthafte Überlegung — die Region liegt an einer aktiven seismischen Zone. Die Prämie hängt von Zone, Baujahr und Bauweise ab und ist für moderne Gebäude meist überschaubar.</p>',
    },
    {
      q: 'Ist mein Pool versichert?',
      a: '<p>In der Regel lässt sich ein Pool im seguro multirriscos mitversichern, muss dafür aber bei der Versicherungssumme angegeben werden. Wird er vergessen, fließt sein Wiederaufbauwert nicht in die Berechnung ein — mit den entsprechenden Folgen für die regra proporcional im Schadenfall.</p>',
    },
    {
      q: 'Was passiert, wenn das Haus leer steht?',
      a: '<p>Manche Policen setzen eine maximale Leerstandsdauer voraus oder verlangen zusätzliche Sicherheitsmaßnahmen. Melden Sie einen längeren Leerstand dem Versicherer, statt es unerwähnt zu lassen — im Schadenfall wird genau das geprüft.</p>',
    },
    {
      q: 'Ist Ferienvermietung versichert?',
      a: '<p>Nicht durch eine gewöhnliche Wohnpolice. Wird die Immobilie als Alojamento Local vermietet, gilt eine eigene gesetzliche Haftpflichtpflicht, und die Police muss die gewerbliche Nutzung ausdrücklich abdecken.</p>',
    },
  ],
  related: [
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: Luxusimmobilien und komplexe Risiken' },
    { url: '/en/blog/outdated-insured-values/', label: 'Underinsurance in Portugal: the Proportional Rule and Outdated Insured Values (Englisch)', hreflang: 'en' },
    { url: '/en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal/', label: "Insuring to the Bank's Figure Is Not the Same as Insuring to Rebuild Cost (Englisch)", hreflang: 'en' },
    { url: '/en/blog/disputing-sum-insured-portugal/', label: 'Disputing a Property Claim Settlement in Portugal (Englisch)', hreflang: 'en' },
  ],
};
