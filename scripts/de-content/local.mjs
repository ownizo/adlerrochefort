import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * The four local pages (Part 4/6). Each ties the region's actual risk
 * profile to the product pages already built rather than repeating their
 * content, and none invents a fact not already established elsewhere on the
 * site (CUF/HPA network, the 1755-earthquake seismic zoning, Monchique's
 * 2018 wildfire). "Wir betreuen Kunden in…" everywhere except Algarve/Lagos,
 * where the registered address is real and the stronger claim is true.
 */

const ALGARVE_PAGE = {
  slug: 'versicherung-algarve',
  url: '/de/versicherung-algarve/',
  title: 'Versicherung Algarve für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung, Krankenversicherung und Autoversicherung für deutsche Eigentümer und Expats an der Algarve — Küstenlage, Ferienimmobilien, Pools und das private Klinik-Netzwerk vor Ort.',
  keywords: 'Versicherung Algarve, Hausversicherung Algarve, Krankenversicherung Algarve, Ferienhaus Versicherung Algarve, Versicherungsmakler Algarve Deutsche',
  eyebrow: 'Regional · Algarve',
  h1: 'Versicherung an der Algarve',
  standfirst:
    'Wir sitzen in Lagos, mitten in der Algarve — das ist keine Marketingaussage, sondern unsere registrierte Geschäftsadresse. Diese Seite ordnet ein, welche Risiken für deutsche Eigentümer und Expats an der Algarve tatsächlich zählen.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Algarve' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für die Algarve anfragen',
  formBranch: '',
  formSubject: 'Versicherung Algarve',
  formCta: 'Angebot anfragen',
  formIntro: 'Sagen Sie uns, worum es geht — Ferienhaus, Hauptwohnsitz, Fahrzeug oder Krankenversicherung — wir kennen die Region und die Anbieter vor Ort.',
  formPlaceholder: 'Zum Beispiel: Gemeinde (Lagos, Portimão, Faro, Tavira, Monchique …), Immobilientyp, Pool vorhanden, Hauptwohnsitz oder saisonale Nutzung.',
  sections: `
<section class="section plain" aria-labelledby="profil">
  <div class="container narrow article-body">
    <h2 id="profil">Küste und Hinterland sind zwei unterschiedliche Risikoprofile</h2>
    <p>Die Algarve ist keine homogene Region. An der Küste — Lagos, Portimão, Albufeira, Faro, Tavira — dominieren Ferienimmobilien, saisonale Vermietung und Pools; das Risiko ist Wasser, Sturm und Diebstahl in der Nebensaison. Im Hinterland — Monchique, Aljezur, Silves — überwiegt dichter Wald, und genau dort brannte im August 2018 die Serra de Monchique über tausende Hektar. Beide Profile brauchen eine andere Gewichtung bei der Deckung, nicht dieselbe Police mit anderem Absender.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="haus">
  <div class="container narrow article-body">
    <h2 id="haus">Ferienimmobilie, Pool und Alojamento Local</h2>
    <p>Ein großer Teil der von Deutschen gehaltenen Immobilien an der Algarve wird zeitweise vermietet oder steht während eines Teils des Jahres leer — beides muss der Versicherer wissen, damit die Police im Schadenfall greift. Pools sind an der Algarve nahezu Standard und müssen bei der Versicherungssumme separat angegeben werden. Erdbebendeckung ist an der Algarve keine theoretische Frage — Details dazu auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="gesundheit">
  <div class="container narrow article-body">
    <h2 id="gesundheit">Gesundheitsversorgung vor Ort</h2>
    <p>An der westlichen Algarve dreht sich die private Versorgung um die CUF-Einheiten in Alvor, Lagos und Gambelas (vormals HPA) sowie private Kliniken in Lagos, Portimão und Faro. Was das für Ihre Police bedeutet, insbesondere seit der Übernahme durch CUF, steht auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="auto">
  <div class="container narrow article-body">
    <h2 id="auto">Fahrzeug und Saisonverkehr</h2>
    <p>Wer sein Fahrzeug aus Deutschland mitbringt, sollte die Übergangsdeckung und die Ummeldung frühzeitig planen — Details auf unserer Seite zur <a href="/de/autoversicherung-portugal/">Autoversicherung</a>. In der Hauptsaison steigt an der Algarve zudem das Verkehrsaufkommen spürbar, was sich in der Unfallstatistik der Sommermonate niederschlägt.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Algarve — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro an der Algarve?',
      a: '<p>Ja — unsere registrierte Geschäftsadresse ist in Lagos, an der westlichen Algarve.</p>',
    },
    {
      q: 'Versichert ihr auch das Hinterland, nicht nur die Küste?',
      a: '<p>Ja, ganz Portugal. An der Algarve kennen wir die westliche Region am besten — von Küstenorten bis zum bewaldeten Hinterland um Monchique, wo das Waldbrandrisiko eine andere Gewichtung braucht als an der Küste.</p>',
    },
    {
      q: 'Ist eine Ferienimmobilie an der Algarve anders zu versichern als ein Hauptwohnsitz?',
      a: '<p>Ja. Saisonale Vermietung, Leerstand und Pool müssen der Versicherung gemeldet werden — Details auf unserer Seite zur Hausversicherung.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
  ],
};

const LAGOS_PAGE = {
  slug: 'versicherung-lagos',
  url: '/de/versicherung-lagos/',
  title: 'Versicherung Lagos für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung, Krankenversicherung und Autoversicherung in Lagos, Algarve — Altstadtwohnungen in propriedade horizontal, Marina und Boote, und der Sitz unseres Maklerbüros vor Ort.',
  keywords: 'Versicherung Lagos, Hausversicherung Lagos Algarve, Versicherungsmakler Lagos, Wohnungsversicherung Lagos Altstadt',
  eyebrow: 'Regional · Lagos',
  h1: 'Versicherung in Lagos',
  standfirst:
    'Lagos ist nicht nur eine Stadt, die wir bedienen — es ist unsere registrierte Geschäftsadresse. Diese Seite behandelt die Themen, die in Lagos konkret vorkommen: Altstadtwohnungen, Marina und Boote, und die Übergänge zum westlichen Algarve-Hinterland.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Lagos' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Lagos anfragen',
  formBranch: '',
  formSubject: 'Versicherung Lagos',
  formCta: 'Angebot anfragen',
  formIntro: 'Sagen Sie uns, worum es geht — wir sitzen in Lagos und kennen die Stadt und ihre Versicherer direkt vor Ort.',
  formPlaceholder: 'Zum Beispiel: Altstadt oder Neubaugebiet, Wohnung oder Haus, Boot vorhanden, Haupt- oder Zweitwohnsitz.',
  sections: `
<section class="section plain" aria-labelledby="altstadt">
  <div class="container narrow article-body">
    <h2 id="altstadt">Altstadtwohnungen: propriedade horizontal in kleinem Maßstab</h2>
    <p>Viele Wohnungen in der historischen Altstadt von Lagos liegen in Gebäuden, die als <em>propriedade horizontal</em> aufgeteilt sind. Das Gesetz verlangt, dass die Eigentümergemeinschaft eine Brandversicherung für das Gebäude und die Gemeinschaftsflächen unterhält, mit einer von der Versammlung festgelegten Summe — oft nach einem alten Baukostenwert. Ist diese Summe veraltet, greift im Schadenfall die regra proporcional und kürzt die Zahlung anteilig für alle Eigentümer. Diese Gebäudepolice deckt zudem nichts, was nicht Teil der Bausubstanz ist — der Innenausbau, der Hausrat und Ihre Haftpflicht als Eigentümer brauchen eine eigene Police. Details dazu auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="marina">
  <div class="container narrow article-body">
    <h2 id="marina">Marina und Boote</h2>
    <p>Die Marina von Lagos ist einer der Ankerpunkte der westlichen Algarve für Boots- und Yachteigentümer. Die Anforderungen der Marina an den Versicherungsnachweis vor der Liegeplatzvergabe behandeln wir auf unserer Seite zu <a href="/de/private-clients-portugal/">Private Clients</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="uebergang">
  <div class="container narrow article-body">
    <h2 id="uebergang">Zwischen Küste und Hinterland</h2>
    <p>Lagos selbst liegt an der Küste, das umliegende Kreisgebiet reicht aber bis in bewaldete Zonen im Norden. Welche Einordnung für Ihre Immobilie gilt — Küstenrisiko oder Waldbrandrisiko —, hängt von der genauen Lage ab. Einen regionalen Überblick über beide Profile gibt unsere Seite zur <a href="/de/versicherung-algarve/">Versicherung an der Algarve</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Lagos — häufige Fragen',
  faq: [
    {
      q: 'Ist euer Büro wirklich in Lagos?',
      a: '<p>Ja, das ist unsere registrierte Geschäftsadresse (Varandas de São João 4, 8600-324 Lagos).</p>',
    },
    {
      q: 'Deckt die Police der Eigentümergemeinschaft meine Altstadtwohnung vollständig ab?',
      a: '<p>Nein. Sie deckt die Bausubstanz und die Gemeinschaftsflächen, oft zu einer veralteten Versicherungssumme. Innenausbau, Hausrat und Ihre eigene Haftpflicht brauchen eine eigene Police.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/versicherung-algarve/', label: 'Versicherung an der Algarve' },
    { url: '/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', label: 'Insuring a High-Value Apartment (Lisbon &amp; Cascais, Englisch)', hreflang: 'en' },
  ],
};

const LISSABON_PAGE = {
  slug: 'versicherung-lissabon',
  url: '/de/versicherung-lissabon/',
  title: 'Versicherung Lissabon für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung für Eigentumswohnungen in Lissabon: wo die Police der Eigentümergemeinschaft endet und Ihre eigene beginnt, plus Kranken- und Autoversicherung für deutsche Residenten.',
  keywords: 'Versicherung Lissabon, Hausversicherung Lissabon, Eigentumswohnung Versicherung Lissabon, Versicherungsmakler Lissabon Deutsche',
  eyebrow: 'Regional · Lissabon',
  h1: 'Versicherung in Lissabon',
  standfirst:
    'Wir betreuen Kunden in Lissabon. Die Stadt bringt ein Thema besonders oft mit sich: hochwertige Eigentumswohnungen, deren Bausubstanz kollektiv über die Eigentümergemeinschaft versichert ist — und die Frage, wo diese Police endet.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Lissabon' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Lissabon anfragen',
  formBranch: '',
  formSubject: 'Versicherung Lissabon',
  formCta: 'Angebot anfragen',
  formIntro: 'Sagen Sie uns, um welche Immobilie oder welches Thema es geht — wir sagen Ihnen, was die Police der Eigentümergemeinschaft abdeckt und was nicht.',
  formPlaceholder: 'Zum Beispiel: Stadtteil, Wohnungsgröße, Baujahr des Gebäudes, ob renoviert, ob vermietet.',
  sections: `
<section class="section plain" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Wo die Police der Eigentümergemeinschaft endet</h2>
    <p>Das portugiesische Recht verpflichtet die Eigentümergemeinschaft, eine Brandversicherung für Gebäude, Gemeinschaftsflächen und die einzelnen Einheiten zu unterhalten, mit einer von der Versammlung festgelegten Summe. Gut geführte Gebäude erweitern das auf eine Multirriscos-Deckung mit Wasserschaden, Sturm und Haftpflicht für die Gemeinschaftsflächen. Ihre Grenzen sind klar: Es ist eine Gebäudepolice — nichts im Inneren Ihrer Wohnung, das nicht Teil der Bausubstanz ist, ist mitversichert. Die Summe wird von der Versammlung festgelegt, oft anhand eines alten Baukostenwerts; ist dieser veraltet, kürzt die regra proporcional jede Schadenzahlung und verteilt den Fehlbetrag auf alle Eigentümer. Und sie versichert die Haftpflicht der Gemeinschaft — nicht Ihre eigene.</p>
    <p>Die Eigentümergemeinschaft versichert ein Gebäude. Sie bewohnen ein Interieur, und genau dort steckt bei einer renovierten Wohnung fast der gesamte Wert — Innenausbau, Hausrat und Ihre persönliche Haftpflicht als Bewohner. Ausführlich: <a href="/en/blog/insuring-a-high-value-apartment-lisbon-cascais/" hreflang="en">Insuring a High-Value Apartment in Lisbon or Cascais</a> (Englisch).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="weiteres">
  <div class="container narrow article-body">
    <h2 id="weiteres">Krankenversicherung und Autoversicherung</h2>
    <p>Die Grundsätze zu SNS, privater Krankenversicherung und Autoversicherung gelten in Lissabon wie im Rest des Landes — Details auf unseren Seiten zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung</a> und zur <a href="/de/autoversicherung-portugal/">Autoversicherung</a>. Auch für Lissabon gilt: Erdbebendeckung ist optional und keine rein akademische Frage.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Lissabon — häufige Fragen',
  faq: [
    {
      q: 'Reicht die Police meiner Eigentümergemeinschaft aus?',
      a: '<p>Nein. Sie deckt die Bausubstanz und die Gemeinschaftsflächen, oft zu einer veralteten Summe. Innenausbau, Hausrat und Ihre eigene Haftpflicht als Bewohner brauchen eine eigene Police.</p>',
    },
    {
      q: 'Habt ihr ein Büro in Lissabon?',
      a: '<p>Unsere registrierte Geschäftsadresse ist in Lagos, Algarve. Wir betreuen Kunden in ganz Portugal, einschließlich Lissabon.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
    { url: '/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', label: 'Insuring a High-Value Apartment (Lisbon &amp; Cascais, Englisch)', hreflang: 'en' },
  ],
};

const CASCAIS_PAGE = {
  slug: 'versicherung-cascais',
  url: '/de/versicherung-cascais/',
  title: 'Versicherung Cascais für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung für Villen und Eigentumswohnungen in Cascais, Erdbebendeckung an der Costa do Estoril, sowie Kranken- und Autoversicherung für deutsche Residenten.',
  keywords: 'Versicherung Cascais, Hausversicherung Cascais, Versicherungsmakler Cascais Deutsche, Erdbebenversicherung Cascais',
  eyebrow: 'Regional · Cascais',
  h1: 'Versicherung in Cascais',
  standfirst:
    'Wir betreuen Kunden in Cascais und an der Costa do Estoril. Zwischen hochwertigen Eigentumswohnungen und freistehenden Villen braucht jede Immobilie eine andere Antwort auf dieselbe Frage: Was deckt die Gebäudepolice, und was nicht?',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Cascais' }],
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Cascais anfragen',
  formBranch: '',
  formSubject: 'Versicherung Cascais',
  formCta: 'Angebot anfragen',
  formIntro: 'Sagen Sie uns, ob es um eine Eigentumswohnung oder eine freistehende Villa geht — die richtige Deckung unterscheidet sich deutlich.',
  formPlaceholder: 'Zum Beispiel: Wohnung oder Villa, Baujahr, Pool vorhanden, Haupt- oder Zweitwohnsitz.',
  sections: `
<section class="section plain" aria-labelledby="wohnungen">
  <div class="container narrow article-body">
    <h2 id="wohnungen">Eigentumswohnungen: dieselbe Grenze wie in Lissabon</h2>
    <p>Für hochwertige Eigentumswohnungen in Cascais gilt dieselbe Abgrenzung wie in Lissabon: Die Police der Eigentümergemeinschaft deckt Gebäude und Gemeinschaftsflächen, oft zu einer von der Versammlung festgelegten und mitunter veralteten Summe — mit der regra proporcional als Folge im Schadenfall. Innenausbau, Hausrat und Ihre persönliche Haftpflicht als Bewohner brauchen eine eigene Police. Ausführlich: <a href="/en/blog/insuring-a-high-value-apartment-lisbon-cascais/" hreflang="en">Insuring a High-Value Apartment in Lisbon or Cascais</a> (Englisch).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="villen">
  <div class="container narrow article-body">
    <h2 id="villen">Freistehende Villen: Wiederaufbauwert und Erdbeben</h2>
    <p>Für freistehende Villen entlang der Costa do Estoril gelten dieselben Grundsätze wie andernorts in Portugal: Die Versicherungssumme muss dem Wiederaufbauwert entsprechen, nicht dem Kaufpreis, und Pool sowie Umfassungsmauern müssen separat angegeben werden. Erdbebendeckung ist in der gesamten Region um Lissabon und die Costa do Estoril keine rein theoretische Frage — Details und die Hintergründe zum Erdbeben von 1755 auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Cascais — häufige Fragen',
  faq: [
    {
      q: 'Was ist der Unterschied zwischen einer Eigentumswohnung und einer Villa bei der Versicherung?',
      a: '<p>Bei einer Eigentumswohnung deckt die Police der Eigentümergemeinschaft nur die Bausubstanz; Innenausbau, Hausrat und Ihre Haftpflicht brauchen eine eigene Police. Bei einer freistehenden Villa versichern Sie das gesamte Gebäude selbst, mit korrekt ermitteltem Wiederaufbauwert.</p>',
    },
    {
      q: 'Ist Erdbebendeckung in Cascais sinnvoll?',
      a: '<p>Ja. Die Region um Lissabon und die Costa do Estoril liegt in einer höheren seismischen Klasse; Erdbebendeckung ist optional, aber keine rein akademische Frage.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/versicherung-lissabon/', label: 'Versicherung in Lissabon' },
    { url: '/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', label: 'Insuring a High-Value Apartment (Lisbon &amp; Cascais, Englisch)', hreflang: 'en' },
  ],
};

export const LOCAL_PAGES = [ALGARVE_PAGE, LAGOS_PAGE, LISSABON_PAGE, CASCAIS_PAGE];
