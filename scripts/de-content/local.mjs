import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * The local pages. The first four (Part 4/6 of the original brief) cover
 * Algarve, Lagos, Lissabon and Cascais. content/de-phase3 adds five more —
 * Portimão, Carvoeiro, Vilamoura, Quinta do Lago, Comporta — chosen from a
 * nine-town list because these five have both a real German buyer presence
 * and a distinct risk story; Albufeira, Tavira, Porto and Madeira were
 * dropped rather than padded with a page that would have been a location
 * matrix by another name.
 *
 * Every fact on every page here is translated from an already-published EN
 * article, not invented for this page: the Portimão worked example (bank-
 * arranged policy, 1970s apartment, missing fenómenos sísmicos) and the
 * seismic construction-date table are from
 * public/en/blog/earthquake-cover-algarve-buildings/; the Carvoeiro
 * unoccupancy clause, cliff-edge underwriting factors and the "forty metres
 * back from the cliff edge" worked example are from
 * public/en/blog/home-insurance-lagoa-carvoeiro/ and
 * public/en/blog/coastal-clifftop-properties-algarve-subsidence-erosion-flood/;
 * the Vilamoura marina/berth-contract material is from
 * public/en/blog/yacht-insurance-algarve-marinas/, and its resort/HOA
 * boundary from public/en/blog/golf-resort-properties-insurance-portugal/;
 * the Quinta do Lago undeclared-value list, the €150,000–€400,000 figure
 * and the domestic-staff workers'-comp point are from
 * public/en/blog/home-insurance-quinta-do-lago-vale-do-lobo/; the Comporta
 * thatch/timber underwriting conditions, fire-station distance and seismic-
 * zone comparison are from public/en/blog/home-insurance-comporta-melides/.
 * None invents a fact not already established elsewhere on the site
 * (CUF/HPA network, the 1755-earthquake seismic zoning, Monchique's 2018
 * wildfire, and now these five). "Wir betreuen Kunden in…" for all nine
 * except Algarve/Lagos, where the registered address is real and the
 * stronger claim is true.
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
    { url: '/de/versicherung-portimao/', label: 'Versicherung in Portimão' },
    { url: '/de/versicherung-carvoeiro/', label: 'Versicherung in Carvoeiro' },
    { url: '/de/versicherung-vilamoura/', label: 'Versicherung in Vilamoura' },
    { url: '/de/versicherung-quinta-do-lago/', label: 'Versicherung in Quinta do Lago' },
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
    { url: '/de/versicherung-comporta/', label: 'Versicherung in Comporta' },
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

const PORTIMAO_PAGE = {
  slug: 'versicherung-portimao',
  url: '/de/versicherung-portimao/',
  title: 'Versicherung Portimão für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung in Portimão: warum das Baujahr über die Erdbebendeckung entscheidet, wo die Police der Eigentümergemeinschaft endet, und was bei Vermietung zu beachten ist.',
  keywords: 'Versicherung Portimão, Hausversicherung Portimão, Erdbebenversicherung Algarve, Versicherungsmakler Portimão Deutsche, Eigentumswohnung Versicherung Portimão',
  eyebrow: 'Regional · Portimão',
  h1: 'Versicherung in Portimão',
  standfirst:
    'Wir betreuen Kunden in Portimão. Ein Teil des Wohnungsbestands der Stadt stammt aus den Jahrzehnten des touristischen Ausbaus — und genau das Baujahr ist bei einer portugiesischen Hausversicherung eine der ersten Fragen, die der Versicherer stellt.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Portimão' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Portimão anfragen',
  formBranch: '',
  formSubject: 'Versicherung Portimão',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns, worum es geht — Eigentumswohnung, Haus oder Vermietung — wir sagen Ihnen, worauf es beim Baujahr und bei der Erdbebendeckung ankommt.',
  formPlaceholder:
    'Zum Beispiel: Baujahr der Immobilie, Eigentumswohnung oder freistehendes Haus, ob vermietet, ob eine Hypothekenbank die bestehende Police vermittelt hat.',
  sections: `
<section class="section plain" aria-labelledby="baujahr">
  <div class="container narrow article-body">
    <h2 id="baujahr">Das Baujahr entscheidet über die Erdbebendeckung</h2>
    <p>Portugiesische Erdbebennormen gelten seit 1958 und wurden 1983 und erneut mit den Eurocodes deutlich verschärft — das Baujahr einer Immobilie ist deshalb bei der Erdbebendeckung das Erste, was ein Versicherer prüft: vor 1958 keine seismische Auslegung (Deckung erhältlich, aber gesondert bepreist, manche Versicherer lehnen ab), 1958 bis 1983 frühe Norm (meist erhältlich, höherer Selbstbehalt), 1983 bis 2010 RSA-Norm (Standardbedingungen), nach 2010 Eurocode 8 (Standardbedingungen, beste Einstufung).</p>
    <p>Ein Fall aus Portimão zeigt, wie das in der Praxis übersehen wird: Ein Käufer ließ die von der Bank im Rahmen der Hypothek vermittelte Police einer Wohnung aus den 1970er-Jahren prüfen. Das Gebäudekapital war mit 180.000 € angemessen bemessen — <em>fenómenos sísmicos</em> stand jedoch nirgendwo auf dem Deckblatt. Nicht abgelehnt, sondern schlicht nie hinzugefügt, weil das Bankprodukt nur das Minimum der Kreditbedingungen abdeckte. Die Ergänzung kostete 68 € im Jahr, mit 2 % Selbstbehalt auf das Gebäudekapital. Details zur Erdbebendeckung insgesamt auf unserer Seite zur <a href="/de/hausversicherung-portugal/#erdbeben">Hausversicherung</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="eigentuemergemeinschaft">
  <div class="container narrow article-body">
    <h2 id="eigentuemergemeinschaft">Eigentümergemeinschaft und Vermietung</h2>
    <p>Portimão hat sowohl Wohnungen im historischen Ortskern als auch neuere Anlagen, die als <em>propriedade horizontal</em> aufgeteilt sind. In beiden Fällen deckt die Police der Eigentümergemeinschaft nur die Bausubstanz und die Gemeinschaftsflächen, oft zu einer von der Versammlung festgelegten und mitunter veralteten Summe — mit der regra proporcional als Folge im Schadenfall. Innenausbau, Hausrat und Ihre persönliche Haftpflicht als Bewohner brauchen eine eigene Police.</p>
    <p>Wird die Immobilie gegen Bezahlung vermietet, etwa über Alojamento Local, ist das für den Versicherer keine reine Wohnnutzung mehr. Eine gewöhnliche Wohnpolice deckt die gewerbliche Nutzung in der Regel nicht ab — Details auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Portimão — häufige Fragen',
  faq: [
    {
      q: 'Meine Wohnung in Portimão ist über die Bank versichert — reicht das?',
      a: '<p>Nicht unbedingt. Bankvermittelte Policen decken oft nur das für den Kredit erforderliche Minimum ab, ohne Erdbebendeckung. Lassen Sie das Deckblatt prüfen, insbesondere bei älteren Gebäuden.</p>',
    },
    {
      q: 'Deckt die Police der Eigentümergemeinschaft meine Wohnung vollständig ab?',
      a: '<p>Nein. Sie deckt die Bausubstanz und die Gemeinschaftsflächen, oft zu einer veralteten Summe. Innenausbau, Hausrat und Ihre eigene Haftpflicht brauchen eine eigene Police.</p>',
    },
    {
      q: 'Kann ich meine Wohnung in Portimão vermieten, ohne die Versicherung zu ändern?',
      a: '<p>Nein. Vermietung, etwa über Alojamento Local, ist für den Versicherer eine gewerbliche Nutzung. Eine gewöhnliche Wohnpolice deckt das in der Regel nicht ab.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/versicherung-algarve/', label: 'Versicherung an der Algarve' },
    { url: '/de/versicherung-lagos/', label: 'Versicherung in Lagos' },
  ],
};

const CARVOEIRO_PAGE = {
  slug: 'versicherung-carvoeiro',
  url: '/de/versicherung-carvoeiro/',
  title: 'Versicherung Carvoeiro für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung in Carvoeiro: der Leerstand über den Winter, die Klippenlage am Barlavento-Küstenabschnitt, und was Ferienanlagen mit Eigentümergemeinschaft abdecken.',
  keywords: 'Versicherung Carvoeiro, Hausversicherung Carvoeiro, Klippenversicherung Algarve, Ferienhaus Versicherung Carvoeiro, Versicherungsmakler Carvoeiro Deutsche',
  eyebrow: 'Regional · Carvoeiro',
  h1: 'Versicherung in Carvoeiro',
  standfirst:
    'Wir betreuen Kunden in Carvoeiro. Der Concelho Lagoa hat einen der höchsten Zweitwohnsitz-Anteile, mit denen wir arbeiten, und die Klippenlage vieler Immobilien braucht eine Deckung, die genau das berücksichtigt.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Carvoeiro' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Carvoeiro anfragen',
  formBranch: '',
  formSubject: 'Versicherung Carvoeiro',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns, ob die Immobilie ganzjährig oder saisonal genutzt wird und ob sie an der Klippe liegt — beides verändert die Bedingungen erheblich.',
  formPlaceholder:
    'Zum Beispiel: Lage (Klippe, Ferienanlage, Ortszentrum), Nutzung (Hauptwohnsitz, Zweitwohnsitz, Vermietung), Baujahr, vorhandene geotechnische Gutachten.',
  sections: `
<section class="section plain" aria-labelledby="leerstand">
  <div class="container narrow article-body">
    <h2 id="leerstand">Zweitwohnsitz und der Leerstand über den Winter</h2>
    <p>Der Concelho Lagoa hat einen der höchsten Zweitwohnsitz-Anteile der Region, und viele Immobilien in Carvoeiro stehen acht oder neun Monate im Jahr leer. Die meisten Policen setzen den Diebstahlschutz aus und schränken die Wasserschadendeckung ein, sobald eine Immobilie 30, 60 oder 90 aufeinanderfolgende Tage unbewohnt war. Viele Wohnungen in Carvoeiro sind jedoch als Hauptwohnsitz versichert, was der Realität nicht entspricht — korrekt als Zweitwohnsitz deklariert ist der Aufschlag überschaubar, falsch deklariert deckt die Police ausgerechnet die beiden wahrscheinlichsten Ereignisse nicht mehr, wenn niemand vor Ort ist.</p>
    <p>Ein benannter Schlüsselhalter hilft in der Praxis doppelt: Manche Versicherer halten den Diebstahlschutz für eine saisonale Immobilie aufrecht, wenn jemand regelmäßig nach dem Rechten sehen kann, und genau das macht den 24-Stunden-Notdienst nutzbar, wenn im Februar der Boiler ausfällt und Sie nicht vor Ort sind.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="klippenlage">
  <div class="container narrow article-body">
    <h2 id="klippenlage">Klippenlage: was Versicherer tatsächlich prüfen</h2>
    <p>Die Villen oberhalb von Vale de Centeanes, Algar Seco und entlang des Küstenwegs von Carvoeiro teilen die Lage am Barlavento-Küstenabschnitt. Bei der Risikoprüfung zählen der Abstand zur Klippenkante, die Entwässerung, vorhandene Stützbauwerke und dokumentierte Bewegungen in der Umgebung. Erosion selbst ist ein allmählicher Vorgang und marktweit ausgeschlossen — versichert wird das plötzliche Ereignis. Eine Villa mit korrekt aufbereiteten Unterlagen (Fotos, gemessener Abstand, geotechnisches Gutachten) bekommt Bedingungen; dieselbe Immobilie, in einem einzigen Wort beschrieben, wird oft abgelehnt.</p>
    <p>Ein Beispiel aus unserer Praxis: Eine Villa rund vierzig Meter von der Klippenkante bei Carvoeiro war über eine Vergleichsplattform zweimal abgelehnt worden, nachdem sie lediglich als &bdquo;Klippenlage&ldquo; deklariert worden war. Neu vorgelegt mit Fotos, gemessenem Abstand, der amtlichen geotechnischen Einstufung und der Dokumentation der 2021 durchgeführten Entwässerungsarbeiten kamen innerhalb weniger Tage Bedingungen zurück: volle Deckung zum normalen Beitrag, Erosion ausgeschlossen wie überall am Markt, Senkungsschäden optional mit eigenem Selbstbehalt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ferienanlage">
  <div class="container narrow article-body">
    <h2 id="ferienanlage">Ferienanlagen mit Eigentümergemeinschaft</h2>
    <p>Ein großer Teil des Küstenbestands in Lagoa liegt in verwalteten Ferienanlagen mit einer Police der Eigentümergemeinschaft, die die Bausubstanz und die Gemeinschaftsflächen abdeckt. Eigentümer nehmen oft an, dass damit mehr abgedeckt ist, als tatsächlich der Fall ist: Innenausbau, Hausrat, die Einbauküche und Ihre Haftpflicht als Bewohner sind nicht mitversichert, und genau an dieser Grenze entstehen die meisten Streitfälle nach einem Wasserschaden. Prüfen Sie zudem, ob die Police der Anlage eine Erdbebendeckung enthält — überraschend viele tun das nicht.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Carvoeiro — häufige Fragen',
  faq: [
    {
      q: 'Ist meine Wohnung in Carvoeiro im Winter noch versichert, wenn sie leer steht?',
      a: '<p>Teilweise. Die meisten Policen setzen den Diebstahlschutz aus und schränken die Wasserschadendeckung ein, sobald die Immobilie 30, 60 oder 90 aufeinanderfolgende Tage unbewohnt war. Prüfen Sie die Belegungsgrundlage Ihrer Police.</p>',
    },
    {
      q: 'Bekomme ich für eine Klippenvilla überhaupt ein Angebot?',
      a: '<p>Meist ja, mit individueller Risikoprüfung: Fotos, gemessener Abstand zur Klippenkante, Entwässerung und ein geotechnisches Gutachten, falls vorhanden. Eine Immobilie, die nur als &bdquo;Klippenlage&ldquo; beschrieben wird, wird häufiger abgelehnt als dieselbe Immobilie mit vollständigen Unterlagen.</p>',
    },
    {
      q: 'Deckt die Police meiner Ferienanlage meine Wohnung vollständig ab?',
      a: '<p>Nein. Sie deckt die Bausubstanz und die Gemeinschaftsflächen. Innenausbau, Hausrat und Ihre eigene Haftpflicht als Bewohner brauchen eine eigene Police.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/versicherung-algarve/', label: 'Versicherung an der Algarve' },
    { url: '/de/versicherung-portimao/', label: 'Versicherung in Portimão' },
  ],
};

const VILAMOURA_PAGE = {
  slug: 'versicherung-vilamoura',
  url: '/de/versicherung-vilamoura/',
  title: 'Versicherung Vilamoura für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung und Bootsversicherung in Vilamoura: was der Liegeplatzvertrag der Marina verlangt, wo die Police der Ferienanlage endet, und was saisonale Nutzung bedeutet.',
  keywords: 'Versicherung Vilamoura, Hausversicherung Vilamoura, Bootsversicherung Vilamoura Marina, Versicherungsmakler Vilamoura Deutsche, Eigentumswohnung Versicherung Vilamoura',
  eyebrow: 'Regional · Vilamoura',
  h1: 'Versicherung in Vilamoura',
  standfirst:
    'Wir betreuen Kunden in Vilamoura. Zwischen Marina, Eigentumswohnungen in Ferienanlagen und saisonaler Nutzung braucht kaum eine Immobilie hier dieselbe Antwort wie die nebenan.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Vilamoura' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Vilamoura anfragen',
  formBranch: '',
  formSubject: 'Versicherung Vilamoura',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns, ob es um die Immobilie, das Boot oder beides geht — wir kennen die Anforderungen der Marina und der Ferienanlagen vor Ort.',
  formPlaceholder:
    'Zum Beispiel: Eigentumswohnung oder Villa, Liegeplatz vorhanden, Haupt- oder Zweitwohnsitz, ob vermietet.',
  sections: `
<section class="section plain" aria-labelledby="marina">
  <div class="container narrow article-body">
    <h2 id="marina">Marina-Nähe: der Liegeplatzvertrag ist ein Versicherungsdokument</h2>
    <p>Bevor ein Liegeplatz vergeben wird, verlangt die Marina eine Police, die ihre Bedingungen erfüllt — und prüft das bei jeder Verlängerung erneut. Üblich verlangt werden: eine Haftpflichtdeckung mit einem festgelegten Mindestbetrag, der deutlich über der gesetzlichen Mindestsumme liegt und sich nach der Bootslänge richtet, ein bei der Marina hinterlegter Nachweis der aktuellen Deckung, die Verantwortung für das Boot in unbeaufsichtigten Zeiten, die Haftung für Bergung und Verschmutzung sowie die Pflicht, Sinken, Ölaustritt oder Schäden an der Marina-Infrastruktur zu melden. Was die Verträge im Gegenzug nicht geben: Die Haftung der Marina Ihnen gegenüber ist auf einen niedrigen Betrag gedeckelt und schließt üblicherweise Wetterschäden, Diebstahl vom Boot, Schäden durch andere Boote und alles, was in unbeaufsichtigten Zeiten passiert, aus.</p>
    <p>Für Vilamoura kommt ein Punkt hinzu, den Versicherer gezielt abfragen: Das große, gut geschützte Hafenbecken mit kontrollierter Einfahrt zieht überdurchschnittlich viele größere Yachten an, und das erhöht den Wert dessen, was im Falle eines Brandes oder eines losgerissenen Bootes neben Ihrem eigenen Liegeplatz steht.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ferienanlage">
  <div class="container narrow article-body">
    <h2 id="ferienanlage">Eigentumswohnung in der Ferienanlage: die Gebäudepolice endet an Ihrer Wohnungstür</h2>
    <p>Die Police der Ferienanlage oder Eigentümergemeinschaft deckt die gemeinsame Bausubstanz und die Gemeinschaftsflächen — Straßen, Gärten, Pools, Tore, Clubhaus — und, bei Gebäuden in <em>propriedade horizontal</em>, die gesetzlich vorgeschriebene Brandversicherung für die Bausubstanz. Sie endet dort, wo die Gemeinschaftsflächen auf Ihre eigene Wohnung treffen: Innenausbau, Hausrat, Verbesserungen an der Wohnung und Ihre persönliche Haftpflicht als Eigentümer sind Ihre eigene Sache.</p>
    <p>Nehmen Sie nicht an, dass ein Vermietungsprogramm der Anlage diese Lücke schließt — lassen Sie sich schriftlich bestätigen, was es tatsächlich versichert. Wird die Wohnung vermietet, etwa über Alojamento Local, ist das eine gewerbliche Nutzung; eine für private Nutzung geschriebene Police reagiert unter Umständen nicht auf einen Schaden eines Gastes. Und bei hochwertigem Innenausbau lohnt sich ein Blick auf die Versicherungssumme: Eine zu niedrig angesetzte Summe kürzt über die regra proporcional jede Schadenzahlung, nicht nur bei Totalschaden.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Vilamoura — häufige Fragen',
  faq: [
    {
      q: 'Was verlangt die Marina in Vilamoura für einen Liegeplatz?',
      a: '<p>Üblicherweise eine Haftpflichtdeckung deutlich über dem gesetzlichen Minimum, gestaffelt nach Bootslänge, einen bei der Marina hinterlegten Nachweis der aktuellen Police, und die Meldung von Sinken, Ölaustritt oder Schäden an der Infrastruktur.</p>',
    },
    {
      q: 'Haftet die Marina, wenn mein Boot beschädigt wird?',
      a: '<p>Nur begrenzt. Die Haftung der Marina Ihnen gegenüber ist gedeckelt und schließt in der Regel Wetterschäden, Diebstahl, Schäden durch andere Boote und Schäden in unbeaufsichtigten Zeiten aus.</p>',
    },
    {
      q: 'Deckt die Police meiner Ferienanlage meine Wohnung vollständig ab?',
      a: '<p>Nein. Sie deckt die Bausubstanz und die Gemeinschaftsflächen. Innenausbau, Hausrat und Ihre eigene Haftpflicht als Bewohner brauchen eine eigene Police.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
    { url: '/de/versicherung-quinta-do-lago/', label: 'Versicherung in Quinta do Lago' },
  ],
};

const QUINTA_DO_LAGO_PAGE = {
  slug: 'versicherung-quinta-do-lago',
  url: '/de/versicherung-quinta-do-lago/',
  title: 'Versicherung Quinta do Lago für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung in Quinta do Lago: was typischerweise nicht in der Versicherungssumme steckt, warum Hausangestellte eine eigene Police brauchen, und wo Private Clients ansetzt.',
  keywords: 'Versicherung Quinta do Lago, Hausversicherung Quinta do Lago, Luxusimmobilie Versicherung Algarve, Hausangestellte Versicherung Portugal, Versicherungsmakler Quinta do Lago Deutsche',
  eyebrow: 'Regional · Quinta do Lago',
  h1: 'Versicherung in Quinta do Lago',
  standfirst:
    'Wir betreuen Kunden in Quinta do Lago. Bei hochwertigen Villen entscheidet selten die Hauptpolice über den Schaden — sondern das, was daneben steht und häufig gar nicht deklariert ist.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Quinta do Lago' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Quinta do Lago anfragen',
  formBranch: '',
  formSubject: 'Versicherung Quinta do Lago',
  formCta: 'Angebot anfragen',
  formIntro:
    'Schicken Sie uns die Grundstücksdaten, nicht nur die des Hauses — die meisten Lücken liegen außerhalb der Haustür.',
  formPlaceholder:
    'Zum Beispiel: Wohnfläche, Pool, Gästehaus oder Personalunterkunft vorhanden, Anzahl der Hausangestellten, ob vermietet.',
  sections: `
<section class="section plain" aria-labelledby="versicherungssumme">
  <div class="container narrow article-body">
    <h2 id="versicherungssumme">Was häufig nicht in der Versicherungssumme steckt</h2>
    <p>Portugiesische Policen definieren das versicherte Gebäude eng und behandeln fast alles, was nicht am Hauptgebäude angebaut ist, entweder als ausgeschlossen oder als unter einem kleinen Sublimit für Nebengebäude versichert. Auf Anwesen wie in Quinta do Lago betrifft das regelmäßig: den Pool samt Becken, Fliesen und Technikraum, das Gästehaus (<em>casa de hóspedes</em>), eine separate Personalunterkunft, Gartenbauten wie Pergolen, Außenküchen und Poolhäuser, Tennis- und Padelplätze, die gewachsene Bepflanzung und Landschaftsgestaltung, sowie Umfassungsmauern, Tore samt Antrieb und die Bewässerungsanlage. Auf einem typischen Anwesen im sogenannten Golden Triangle summiert sich das schnell auf 150.000 bis 400.000 € nicht deklarierten Wiederaufbauwert. Die Lösung: jede dieser Positionen einzeln benennen und beziffern, oder eine Police wählen, die das gesamte Grundstück versichert, nicht nur das Wohnhaus.</p>
    <p>Dazu kommt die Frage der hochwertigen Ausstattung: Standardtabellen für die Baukosten pro Quadratmeter bilden Natursteinböden, Maßschreinerei, importierte Sanitärausstattung und integrierte Haustechnik nicht ab. Wird die Versicherungssumme nach einer solchen Standardtabelle ermittelt, ist die Immobilie vom ersten Tag an unterversichert — und die regra proporcional kürzt dann jede Schadenzahlung anteilig, auch bei kleinen Schäden.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="hausangestellte">
  <div class="container narrow article-body">
    <h2 id="hausangestellte">Hausangestellte: die am häufigsten vergessene Police</h2>
    <p>Haushälterin, Gärtner, Poolpflege und Fahrer sind auf diesen Anwesen eher die Regel als die Ausnahme. Die Arbeitsunfallversicherung (<em>seguro de acidentes de trabalho</em>) ist in Portugal für Hausangestellte gesetzlich vorgeschrieben, auch bei Teilzeit- oder Stundenbeschäftigung, und sie gehört zu den am häufigsten fehlenden Policen im Haushalt ausländischer Eigentümer. Sie ist nicht Teil der Haftpflichtkomponente Ihrer Hausversicherung — diese deckt Ihre Haftung als Bewohner, nicht Ihre Pflichten als Arbeitgeber. Die Prämie ist gering, das Risiko bei Fehlen persönlich und unbegrenzt. Details auf unserer Seite zu <a href="/de/private-clients-portugal/">Private Clients</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="vermietung">
  <div class="container narrow article-body">
    <h2 id="vermietung">Vermietung ist hier eher die Regel</h2>
    <p>Ein großer Teil des Bestands in Quinta do Lago wird zeitweise vermietet, über ein Vermietungsprogramm der Anlage oder privat. Eine für private Nutzung geschriebene Police reagiert unter Umständen nicht auf einen Schaden eines Gastes, und das Vermietungsprogramm der Anlage versichert seinen eigenen Betrieb, nicht Ihr Gebäude. Wird die Immobilie vermietet, muss die Police das widerspiegeln.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Quinta do Lago — häufige Fragen',
  faq: [
    {
      q: 'Ist mein Pool über die normale Hausversicherung mitversichert?',
      a: '<p>Oft nur teilweise, unter einem eigenen Sublimit. Becken, Fliesen und Technikraum sollten separat benannt und beziffert werden, statt sich auf die pauschale Gebäudesumme zu verlassen.</p>',
    },
    {
      q: 'Brauche ich für meine Haushälterin eine eigene Versicherung?',
      a: '<p>Ja. Die Arbeitsunfallversicherung ist für Hausangestellte in Portugal gesetzlich vorgeschrieben, auch bei Teilzeitbeschäftigung, und ist nicht Teil der Haftpflichtkomponente Ihrer Hausversicherung.</p>',
    },
    {
      q: 'Was passiert, wenn ich meine Villa vermiete?',
      a: '<p>Eine für private Nutzung geschriebene Police reagiert unter Umständen nicht auf einen Schaden eines Gastes. Die Vermietung muss der Police gemeldet und in der Deckung berücksichtigt werden.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
    { url: '/de/versicherung-vilamoura/', label: 'Versicherung in Vilamoura' },
  ],
};

const COMPORTA_PAGE = {
  slug: 'versicherung-comporta',
  url: '/de/versicherung-comporta/',
  title: 'Versicherung Comporta für deutsche Expats und Eigentümer | Adler & Rochefort',
  description:
    'Hausversicherung in Comporta: warum Reetdach und Holzbauweise über die Platzierung entscheiden, die Anfahrtszeit der Feuerwehr, und eine der höchsten seismischen Zonen des Festlands.',
  keywords: 'Versicherung Comporta, Hausversicherung Comporta, Reetdach Versicherung Portugal, Erdbebenversicherung Comporta, Versicherungsmakler Comporta Deutsche',
  eyebrow: 'Regional · Comporta',
  h1: 'Versicherung in Comporta',
  standfirst:
    'Wir betreuen Kunden in Comporta und Melides. Die Architektur, die die Region prägt, liegt außerhalb dessen, wofür eine Standard-Multirriscos-Police geschrieben wurde — ein Haus hier wird platziert, nicht einfach quotiert.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Comporta' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Comporta anfragen',
  formBranch: '',
  formSubject: 'Versicherung Comporta',
  formCta: 'Angebot anfragen',
  formIntro:
    'Schicken Sie uns die Bauweise — Reetdach, Holz oder massiv — wir sagen Ihnen, welcher Versicherer Ihre Immobilie zu welchen Bedingungen zeichnet.',
  formPlaceholder:
    'Zum Beispiel: Reetdach vorhanden (Haupthaus oder nur Nebengebäude), Holz- oder Massivbauweise, Abstand zur nächsten Feuerwache, Haupt- oder Zweitwohnsitz.',
  sections: `
<section class="section plain" aria-labelledby="reetdach">
  <div class="container narrow article-body">
    <h2 id="reetdach">Reetdach (colmo) und Holzbauweise: die Linie, die über die Platzierung entscheidet</h2>
    <p>Das Reet- und Schilfdach (<em>colmo</em>), das die Region optisch prägt, ist die wichtigste Angabe auf einem Comporta-Antrag. Mehrere große portugiesische Versicherer zeichnen Reetdächer grundsätzlich nicht — das Risiko wird bei der Angabe abgelehnt, nicht mit einem Aufschlag belegt. Versicherer, die es zeichnen, knüpfen Bedingungen daran: eine Mindesthöhe des Schornsteins über dem First, ein ausgekleideter Rauchabzug, Funkenschutzgitter und eine jährlich von einem Fachbetrieb zertifizierte Kaminreinigung, Mindestabstände zwischen dem Reetdach und anderen Gebäuden, Grill oder Feuerstelle, ein Elektro-Prüfzertifikat, sowie eine Branddetektion und bei größeren Anwesen mitunter eine eigene Löschwasserversorgung. Das sind Obliegenheiten, keine Empfehlungen: Ein seit drei Saisons nicht gekehrter Schornstein kann eine formal gültige Police ohne Deckung für genau das Ereignis bedeuten, für das sie abgeschlossen wurde. Die zugehörige Falle: Viele Anwesen haben ein Hauptwohnhaus mit Ziegeldach und ein Reetdach-Nebengebäude als Poolhaus oder Essbereich — steht im Antrag nur &bdquo;konventionelle Bauweise&ldquo;, ist dieses Nebengebäude womöglich gar nicht mitversichert.</p>
    <p>Die zweite prägende Bauweise ist der Holzrahmenbau mit großflächiger Verglasung. Der Wiederaufbauwert liegt hier meist höher als bei Massivbau, weil die Ausführung individuell geplant ist und die großformatige Verglasung lange Lieferzeiten hat — eine Versicherungssumme aus einer Standardtabelle pro Quadratmeter beschreibt ein anderes Haus. Glas ist zugleich der am häufigsten gemeldete Schaden auf solchen Anwesen: Klären Sie das Sublimit für Verglasung, ob es pro Scheibe oder pro Schadenfall gilt, und ob Bruchschäden an fest verbauten Scheiben eingeschlossen oder optional sind.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="abgelegen">
  <div class="container narrow article-body">
    <h2 id="abgelegen">Abgelegen: Anfahrtszeit der Feuerwehr und die Umgebung</h2>
    <p>Fragen Sie nach der tatsächlichen Anfahrtszeit, nicht nach der Entfernung auf der Karte. Die zuständigen Feuerwehren sitzen in Grândola, Alcácer do Sal und Santiago do Cacém, die Siedlungen liegen verstreut, und die letzten Kilometer führen oft über Sandpisten. Versicherer fragen gezielt nach der Entfernung zur nächsten Feuerwache und zum nächsten Hydranten, und beide Angaben beeinflussen die Bedingungen. Auch die Umgebung zählt: Auf der einen Seite stehende Pinienwälder, auf der anderen Reisfelder — kein Buschland, aber in einem schlechten Sommer entscheidet der Unterschied zwischen fünfzehn und vierzig Minuten Anfahrtszeit zwischen einem beschädigten Dach und einem Totalschaden, und Versicherer bepreisen das entsprechend.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="erdbeben-leerstand">
  <div class="container narrow article-body">
    <h2 id="erdbeben-leerstand">Eine der höchsten seismischen Zonen des Festlands, und Leerstand über weite Teile des Jahres</h2>
    <p>Die Region um Setúbal und Alcácer do Sal liegt in einer der höchsten seismischen Klassen auf dem portugiesischen Festland — deutlich höher als das Algarve-Hinterland. <a href="/de/hausversicherung-portugal/#erdbeben">Erdbebendeckung</a> ist auch hier optional, trägt einen eigenen Selbstbehalt, meist als Prozentsatz der Versicherungssumme statt als fester Betrag, und wird ausgerechnet dort häufig zur Prämienersparnis weggelassen, wo das Risiko am größten ist.</p>
    <p>Die Nutzung ist zudem saisonal konzentriert — Juli, August, einzelne Wochenenden, Weihnachten. Dieses Muster überschreitet bei den meisten Policen die Schwelle für Leerstand, und ab diesem Punkt wird der Diebstahlschutz üblicherweise ausgesetzt und die Wasserschadendeckung eingeschränkt — genau die beiden Schäden, die in einem leeren Haus am wahrscheinlichsten sind.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Comporta — häufige Fragen',
  faq: [
    {
      q: 'Wird ein Reetdachhaus in Comporta überhaupt versichert?',
      a: '<p>Ja, aber individuell gezeichnet und an Bedingungen geknüpft: Schornsteinhöhe, zertifizierte Kaminreinigung, Mindestabstände und ein Elektro-Prüfzertifikat gehören meist dazu. Mehrere große Versicherer lehnen Reetdächer grundsätzlich ab.</p>',
    },
    {
      q: 'Was bedeutet &bdquo;abgelegen&ldquo; für die Versicherungsbedingungen?',
      a: '<p>Versicherer fragen nach der tatsächlichen Anfahrtszeit zur nächsten Feuerwache und zum nächsten Hydranten, nicht nach der Kartenentfernung. Sandpisten und die umgebende Vegetation fließen in die Bedingungen ein.</p>',
    },
    {
      q: 'Ist Erdbebendeckung in Comporta wichtig?',
      a: '<p>Ja. Die Region liegt in einer der höchsten seismischen Zonen des portugiesischen Festlands, wird aber gerade dort zur Prämienersparnis häufig weggelassen.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/#erdbeben', label: 'Hausversicherung in Portugal (Erdbebendeckung)' },
    { url: '/de/private-clients-portugal/', label: 'Private Clients: komplexe Risiken' },
    { url: '/de/versicherung-lissabon/', label: 'Versicherung in Lissabon' },
  ],
};

export const LOCAL_PAGES = [
  ALGARVE_PAGE,
  LAGOS_PAGE,
  LISSABON_PAGE,
  CASCAIS_PAGE,
  PORTIMAO_PAGE,
  CARVOEIRO_PAGE,
  VILAMOURA_PAGE,
  QUINTA_DO_LAGO_PAGE,
  COMPORTA_PAGE,
];
