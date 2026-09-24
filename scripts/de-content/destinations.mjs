import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * West-Algarve, Madeira and Spain destination pages for /de.
 *
 * Facts only from already-published EN material, plus — for Madeira — the
 * EN article this round adds at /en/blog/home-insurance-madeira/ (the German
 * page is a translation of that article, not a second set of facts):
 *   - Lagos office / concelho: scripts/de-content/local.mjs (LAGOS_PAGE)
 *   - Sagres, Vila do Bispo, Salema, Burgau: scripts/location-articles.data.mjs
 *     (home-insurance-sagres-vila-do-bispo) — wind vs storm, salt corrosion,
 *     isolation, off-grid declaration, rebuild cost west of Lagos
 *   - Praia da Luz: same concelho as Lagos; pool / beach-access liability
 *     from public/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/
 *   - Madeira: public/en/blog/home-insurance-madeira/ — aluvião vs rainwater
 *     flood, Porto Santo as a different island, optional earthquake. No
 *     invented premiums. No claim of a Funchal office.
 *   - Mallorca and Costa del Sol: public/en/private-clients-spain/ (second
 *     homes, seasonal occupancy, local boat on Mallorca; villas, rebuild,
 *     contents and vehicles left between visits on the Costa del Sol) and
 *     the Spain FoS position already on /de/
 *   - Costa Blanca: the Spain home-insurance facts already on
 *     /de/hausversicherung-spanien/ (comunidad, second home, non-resident,
 *     rebuild), at the coast our own Spain forms already name as
 *     "Alicante, Costa Blanca". No DANA narrative and no Consorcio detail
 *     that the published Spain pages do not carry.
 *   - Canaries and Catalonia: the same altitude. Name the island or the
 *     coast, second home versus let, comunidad where the building is one.
 *     No Consorcio mechanism and no storm the published Spain pages do not
 *     already describe.
 *
 * No invented premiums. showTeam + the shared branching form (health, home,
 * motor, professional liability) are rendered by generate-de-cluster.mjs.
 */

const META = 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lagos, Algarve';
const PUBLISHED = '2026-09-22T12:00:00+00:00';

export const LUZ_PAGE = {
  slug: 'versicherung-luz',
  url: '/de/versicherung-luz/',
  title: 'Versicherung in Praia da Luz | Adler & Rochefort',
  description:
    'Haus-, Kranken- und Autoversicherung in Praia da Luz. Villen und Zweitwohnsitze an der Bucht, Leerstand, Pool und der Sitz in Lagos — zehn Minuten entfernt.',
  keywords:
    'Versicherung Praia da Luz, Hausversicherung Luz Algarve, Versicherungsmakler Luz, Ferienhaus Versicherung Luz',
  eyebrow: 'Regional · Praia da Luz',
  h1: 'Versicherung in Praia da Luz',
  standfirst:
    'Praia da Luz liegt in derselben Gemeinde wie unser Büro in Lagos. Die Fragen hier sind andere als in der Altstadt: Villen und Zweitwohnsitze an der Bucht, saisonaler Leerstand, Pool und der Weg zum Strand.',
  heroMeta: META,
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Praia da Luz' }],
  published: PUBLISHED,
  modified: PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Praia da Luz anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Praia da Luz',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns, worum es geht — Villa, Zweitwohnsitz, Pool, Fahrzeug oder Krankenversicherung. Wir sitzen in Lagos, wenige Minuten entfernt.',
  formPlaceholder: 'Zum Beispiel: Villa oder Wohnung, Haupt- oder Zweitwohnsitz, Pool vorhanden, Leerstand über den Winter.',
  geo: { region: 'PT-08', placename: 'Praia da Luz, Lagos, Algarve' },
  sections: `
<section class="section plain" aria-labelledby="lage">
  <div class="container narrow article-body">
    <h2 id="lage">Dieselbe Gemeinde wie Lagos — ein anderes Risikoprofil</h2>
    <p>Praia da Luz gehört zum Kreis Lagos. Unser Sitz in der Stadt ist keine Marketingaussage, sondern die registrierte Geschäftsadresse, zehn Minuten die Küste entlang. Was sich ändert, ist die Bebauung: statt Altstadtwohnungen in <em>propriedade horizontal</em> überwiegen Villen, Reihenhäuser und Zweitwohnsitze an der Bucht. Die Police muss zur tatsächlichen Nutzung passen, nicht zum Ortsnamen auf dem Briefkopf. Den Überblick für die Stadt selbst gibt <a href="/de/versicherung-lagos/">Versicherung in Lagos</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="leerstand">
  <div class="container narrow article-body">
    <h2 id="leerstand">Zweitwohnsitz und Leerstand</h2>
    <p>Ein großer Teil der von internationalen Mandanten gehaltenen Häuser in Luz wird nur einen Teil des Jahres bewohnt. Versicherer fragen nach dem Leerstandsmuster — und eine genaue Antwort zählt mehr, als es wirkt. Die Klausel, wie lange eine Immobilie leer stehen darf, bevor die Deckung eingeschränkt wird, steht im Wortlaut, nicht auf dieser Seite. Details dazu auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="pool">
  <div class="container narrow article-body">
    <h2 id="pool">Pool, Poolhaus und Zugang zum Strand</h2>
    <p>Pools sind in Luz nahezu Standard und gehören in die Versicherungssumme, nicht unter eine kleine Außenanlagen-Grenze. Wo ein privater Weg oder eine Treppe zum Strand führt, ist das ein Haftpflichtrisiko gegenüber Gästen und Besuchern — getrennt von der Gebäudeversicherung. Ein Schaden auf nassen Stufen ist kein theoretischer Fall; er kommt an dieser Küste vor. Was die Gebäudepolice der Gemeinschaft nicht trägt, und was Sie selbst brauchen, steht auf der Seite zur Hausversicherung.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="gesundheit">
  <div class="container narrow article-body">
    <h2 id="gesundheit">Krankenversicherung vor Ort</h2>
    <p>Die private Versorgung der westlichen Algarve läuft über die CUF-Einheiten in Lagos, Alvor und Gambelas. Was das für den Tarif bedeutet, steht auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung in Portugal</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Praia da Luz — häufige Fragen',
  faq: [
    {
      q: 'Sitzt ihr wirklich in der Nähe von Luz?',
      a: '<p>Ja. Unsere registrierte Geschäftsadresse ist in Lagos, Varandas de São João 4, 8600-324 — wenige Minuten die Küste entlang.</p>',
    },
    {
      q: 'Ist ein Ferienhaus in Luz anders zu versichern als ein Hauptwohnsitz?',
      a: '<p>Ja. Saisonale Nutzung, Leerstand und Pool müssen dem Versicherer gemeldet werden, sonst greift die Police im Schadenfall oft nicht so, wie der Eigentümer annimmt.</p>',
    },
    {
      q: 'Deckt die Hausversicherung den Pool automatisch?',
      a: '<p>Meist nicht, oder nur unter einer kleinen Außenanlagen-Grenze, die ihn nicht ersetzt. Schale, Technikraum und Poolhaus gehören namentlich in die Summe.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-lagos/', label: 'Versicherung in Lagos' },
    { url: '/de/versicherung-burgau/', label: 'Versicherung in Burgau' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
  ],
};

export const BURGAU_PAGE = {
  slug: 'versicherung-burgau',
  url: '/de/versicherung-burgau/',
  title: 'Versicherung in Burgau | Adler & Rochefort',
  description:
    'Hausversicherung in Burgau an der Windküste. Atlantikwind, Salzluft und Leerstand — vom Sitz in Lagos, eine halbe Stunde entfernt.',
  keywords:
    'Versicherung Burgau, Hausversicherung Burgau Algarve, Ferienhaus Versicherung Burgau, Versicherungsmakler westliche Algarve',
  eyebrow: 'Regional · Burgau',
  h1: 'Versicherung in Burgau',
  standfirst:
    'Burgau sitzt an der windoffensten Küste des portugiesischen Festlands. Unser Büro ist in Lagos, eine halbe Stunde entfernt. Die Frage hier ist nicht, ob Sturm gedeckt ist — sondern was der gewöhnliche Atlantikwind mit Dach, Beschlägen und Technik macht.',
  heroMeta: META,
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  langLinks: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Burgau' }],
  published: PUBLISHED,
  modified: PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Burgau anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Burgau',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns, worum es geht — Wohnung, Villa, Zweitwohnsitz oder Vermietung. Wir schreiben diese Küste regelmäßig, vom Sitz in Lagos.',
  formPlaceholder: 'Zum Beispiel: Wohnung oder Villa, Haupt- oder Zweitwohnsitz, Abstand zur Küste, Pool vorhanden.',
  geo: { region: 'PT-08', placename: 'Burgau, Vila do Bispo, Algarve' },
  sections: `
<section class="section plain" aria-labelledby="wind">
  <div class="container narrow article-body">
    <h2 id="wind">Gewöhnlicher Wind, nicht nur Sturm</h2>
    <p>Eine Police zahlt für Sturm: ein abgegrenztes Ereignis, meist definiert über eine Windgeschwindigkeit oder eine amtliche Warnung. Was in Burgau Dächer, Fensterläden und Markisen tatsächlich abnutzt, ist der Atlantikwind, der den größten Teil des Jahres weht. Dachziegel lockern sich, Firste heben, Beschläge ermüden. Ein Anspruch nach einem benannten Sturm wird darauf geprüft, ob die Befestigung vorher in Ordnung war. Fotos des Daches im guten Zustand sind hier mehr wert als an einer windgeschützten Lage. Den ausführlichen englischen Leitfaden zu dieser Küste finden Sie unter <a href="/en/blog/home-insurance-sagres-vila-do-bispo/" hreflang="en">Home insurance in Sagres, Vila do Bispo, Salema and Burgau</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="salz">
  <div class="container narrow article-body">
    <h2 id="salz">Salzluft ist ausgeschlossen — und das muss man wissen</h2>
    <p>Salzhaltige Luft korrodiert Beschläge, Tore, Poolpumpen, Klimaanlagen und die Halterungen einer Photovoltaikanlage fortlaufend. Allmähliche Abnutzung, Korrosion und Verschleiß sind im portugiesischen Markt regelmäßig ausgeschlossen. Gedeckt ist der plötzliche, unfallartige Schaden — und der Streit, wenn er kommt, dreht sich darum, ob ein plötzlich versagtes Teil wegen jahrelanger Korrosion versagt hat. Ein realistischer Unterhalt für Beschläge, Motoren und Pumpen gehört zum Eigentum an dieser Küste, nicht zur Police.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="nutzung">
  <div class="container narrow article-body">
    <h2 id="nutzung">Wohnung, Villa, Vermietung</h2>
    <p>In Burgau und dem benachbarten Salema überwiegen Wohnungen und Reihenhäuser neben einzelnen Villen. Wird vermietet — auch nur saisonal — braucht die Police das als Nutzungsart, nicht als nachträgliche Erklärung nach einem Gastschaden. Leerstand und Schlüsselhalter sind hier, eine Stunde von manchen Handwerkern entfernt, keine Formalität. Siehe <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a> und <a href="/de/versicherung-vila-do-bispo/">Versicherung in Vila do Bispo</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Burgau — häufige Fragen',
  faq: [
    {
      q: 'Ist Windschaden in Burgau gedeckt?',
      a: '<p>Sturmschaden ja — ein abgegrenztes Ereignis. Fortschreitender Schaden durch den gewöhnlichen Wind des Jahres gilt als Unterhalt und ist nicht gedeckt. Das ist die wichtigste Unterscheidung an dieser Küste.</p>',
    },
    {
      q: 'Ist Korrosion durch Salzluft versichert?',
      a: '<p>Nein. Korrosion, Rost und allmähliche Abnutzung sind marktüblich ausgeschlossen. Plötzlicher unfallartiger Schaden ist gedeckt; versagt ein Teil nach Jahren der Korrosion, wertet der Versicherer meist die Korrosion als Ursache.</p>',
    },
    {
      q: 'Wie weit seid ihr von Burgau?',
      a: '<p>Unser Sitz ist in Lagos, rund eine halbe Stunde entfernt. Die südwestlichen Concelhos schreiben wir regelmäßig.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-sagres/', label: 'Versicherung in Sagres' },
    { url: '/de/versicherung-vila-do-bispo/', label: 'Versicherung in Vila do Bispo' },
    { url: '/de/versicherung-luz/', label: 'Versicherung in Praia da Luz' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/en/blog/home-insurance-sagres-vila-do-bispo/', label: 'Wind coast (Englisch)', hreflang: 'en' },
  ],
};

export const VILA_DO_BISPO_PAGE = {
  slug: 'versicherung-vila-do-bispo',
  url: '/de/versicherung-vila-do-bispo/',
  title: 'Versicherung in Vila do Bispo | Adler & Rochefort',
  description:
    'Hausversicherung in Vila do Bispo: Abgeschiedenheit, Assistance, Off-Grid-Anlagen und Wiederaufbau westlich von Lagos. Schriftlich, vom Sitz in Lagos.',
  keywords:
    'Versicherung Vila do Bispo, Hausversicherung Vila do Bispo, Off-Grid Versicherung Algarve, Ferienhaus Versicherung westliche Algarve',
  eyebrow: 'Regional · Vila do Bispo',
  h1: 'Versicherung in Vila do Bispo',
  standfirst:
    'Vila do Bispo ist weiter weg, als die Karte vermuten lässt. Assistance, Sachverständiger und die Pflicht, Folgeschäden zu begrenzen, hängen davon ab, wer in welcher Zeit vor Ort ist — und ob Solar, Batterie und Bohrung dem Versicherer gemeldet sind.',
  heroMeta: META,
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  langLinks: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Vila do Bispo' }],
  published: PUBLISHED,
  modified: PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Vila do Bispo anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Vila do Bispo',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns Lage, Bauweise und ob die Immobilie am Netz hängt. Wir sitzen in Lagos und kennen die westlichen Concelhos aus der Praxis, nicht nur von der Karte.',
  formPlaceholder: 'Zum Beispiel: Villa oder Quinta, Photovoltaik oder Batterie vorhanden, Bohrung, Leerstand, Schlüsselhalter vor Ort.',
  geo: { region: 'PT-08', placename: 'Vila do Bispo, Algarve' },
  sections: `
<section class="section plain" aria-labelledby="abgeschieden">
  <div class="container narrow article-body">
    <h2 id="abgeschieden">Abgeschiedenheit verlängert alles</h2>
    <p>Entfernung betrifft mehr als die Anfahrt der <em>bombeiros</em>. Sie betrifft den Besuch des Sachverständigen, ob nachts überhaupt ein Handwerker kommt, und wie lange eine beschädigte Immobilie unbeaufsichtigt bleibt. Zwei Klauseln werden dadurch lebendig. Die erste ist der Assistance-Dienst: jede Retail-Police enthält 24-Stunden-Hausassistance; nicht jede hat Anbieter, die um zwei Uhr nachts nach Vila do Bispo fahren. Das sollte man fragen, bevor man es braucht. Die zweite ist die Pflicht, nach einem Schaden angemessene Schritte gegen Folgeschäden zu unternehmen. Das ist schwer zu erfüllen aus einem anderen Land, mit einem Haus eine Stunde vom nächsten Gewerk. Ein Schlüsselhalter im Dorf ist eine andere Lage als einer in Lagos.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="offgrid">
  <div class="container narrow article-body">
    <h2 id="offgrid">Photovoltaik, Batterie, Generator, Bohrung — deklarieren</h2>
    <p>Ein spürbarer Teil der Immobilien westlich von Lagos hängt teilweise oder ganz vom Netz ab: Photovoltaik, Batteriespeicher, Generator, Bohrung und deren Steuerung, gelegentlich eine kleine Windanlage. Das ist ein Bewertungsproblem — eine solche Anlage liegt oft bei 15.000 bis 40.000 €, die nie in der Versicherungssumme ankamen — und ein Anzeigeproblem. Lithium-Speicher ist inzwischen eine eigene Zeichnungsfrage; ein Brand aus einer nicht gemeldeten Anlage stellt den ganzen Schaden in Frage, nicht nur das Gerät. Die Meldung selbst kostet in der Regel wenige Dutzend Euro im Jahr.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="summe">
  <div class="container narrow article-body">
    <h2 id="summe">Die Versicherungssumme, nicht der Tarif</h2>
    <p>Bauen ist hier nicht günstig. Die Lage verlangt schwerere Spezifikation — marinegerechte Befestigung, behandeltes Holz, besseres Glas, häufiger ersetzte Beschläge — und westlich von Lagos sind die Gewerke dünn. Eine Wiederaufbausumme nach Algarve-Durchschnitt liegt zu niedrig, und die <em>regra proporcional</em> kürzt dann jede Entschädigung, nicht nur den Totalschaden. Details zur Summe auf unserer Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung</a>.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Vila do Bispo — häufige Fragen',
  faq: [
    {
      q: 'Kommt die 24-Stunden-Assistance wirklich nach Vila do Bispo?',
      a: '<p>Nicht immer, und das sollte man vorab klären. Jede Retail-Police enthält Hausassistance, das Anbieternetz in den westlichen Concelhos ist aber dünner. Dieselbe Abgeschiedenheit betrifft, wie schnell ein Sachverständiger kommt.</p>',
    },
    {
      q: 'Muss ich Solar und Batterie angeben?',
      a: '<p>Ja, aus zwei Gründen. Die Anlage erhöht den Wiederaufbauwert und muss in der Summe stehen, und Lithium-Speicher ist eine eigene Zeichnungsfrage. Eine nicht gemeldete Anlage, die einen Brand auslöst, stellt den ganzen Anspruch in Frage.</p>',
    },
    {
      q: 'Ist ein Haus in Vila do Bispo teurer zu versichern als in Lagos?',
      a: '<p>Leicht, bei vergleichbarer Immobilie, vor allem wegen Lage und Distanz. Der größere Unterschied ist meist die Summe, nicht der Satz: die Spezifikation, die diese Küste verlangt, liegt über dem Algarve-Durchschnitt.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-sagres/', label: 'Versicherung in Sagres' },
    { url: '/de/versicherung-burgau/', label: 'Versicherung in Burgau' },
    { url: '/de/versicherung-lagos/', label: 'Versicherung in Lagos' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
  ],
};

export const SAGRES_PAGE = {
  slug: 'versicherung-sagres',
  url: '/de/versicherung-sagres/',
  title: 'Versicherung in Sagres | Adler & Rochefort',
  description:
    'Hausversicherung in Sagres: Atlantikwind gegen Sturmklausel, Salzluft, Isolation. Schriftlich erklärt, vom Sitz in Lagos — eine halbe Stunde entfernt.',
  keywords:
    'Versicherung Sagres, Hausversicherung Sagres Algarve, Ferienhaus Versicherung Sagres, Versicherungsmakler Sagres',
  eyebrow: 'Regional · Sagres',
  h1: 'Versicherung in Sagres',
  standfirst:
    'Sagres ist die windoffenste Wohnlage auf dem portugiesischen Festland. Unser Büro liegt in Lagos, eine halbe Stunde die Küste entlang. Die Versicherungsfrage hier ist nüchtern: der vorherrschende Schaden ist fortlaufend — und fortlaufend ist genau das, was eine Gebäudepolice nicht deckt.',
  heroMeta: META,
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  langLinks: { en: '/en/blog/home-insurance-sagres-vila-do-bispo/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Sagres' }],
  published: PUBLISHED,
  modified: PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Sagres anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Sagres',
  formCta: 'Angebot anfragen',
  formIntro:
    'Sagen Sie uns Lage, Bauweise und Nutzung. Wir sitzen in Lagos und schreiben diese Küste regelmäßig — Dach, Salz und Leerstand inklusive.',
  formPlaceholder: 'Zum Beispiel: Villa oder Wohnung, Abstand zur Klippe, Photovoltaik, Haupt- oder Zweitwohnsitz.',
  geo: { region: 'PT-08', placename: 'Sagres, Vila do Bispo, Algarve' },
  sections: `
<section class="section plain" aria-labelledby="kueste">
  <div class="container narrow article-body">
    <h2 id="kueste">Die Windküste, von Lagos aus</h2>
    <p>Die Südwestecke — Sagres, Vila do Bispo, Raposeira, Salema und Burgau — ist die windoffenste gefragte Wohnlage auf dem Festland. Sie ist auch die natürliche Verlängerung unseres eigenen Gebiets: der Sitz in Lagos liegt eine halbe Stunde die Straße hinauf, und diese Küste schreiben wir regelmäßig. Die Police hier kauft man für Feuer, Sturm, Wasser, Diebstahl und Haftpflicht — nicht in der Erwartung, dass der jährliche Salz- und Windverschleiß versichert sei. Den englischen Leitfaden zu genau dieser Küste: <a href="/en/blog/home-insurance-sagres-vila-do-bispo/" hreflang="en">Home insurance in Sagres, Vila do Bispo, Salema and Burgau</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sturm">
  <div class="container narrow article-body">
    <h2 id="sturm">Sturm ist gedeckt. Der Rest des Jahres nicht.</h2>
    <p>Ein Wortlaut zahlt für Sturm, sobald eine Schwelle oder eine Warnung erfüllt ist. Was in Sagres Ziegel löst, Firste hebt und Markisen reißt, ist der gewöhnliche Atlantikwind. Unterhaltsbedingungen im Wortlaut werden hier häufiger durchgesetzt als anderswo in der Region. Ein Anspruch nach einem benannten Sturm wird darauf geprüft, ob die Befestigung vorher in Ordnung war.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="klippe">
  <div class="container narrow article-body">
    <h2 id="klippe">Klippe, Erosion, Wiederaufbau</h2>
    <p>Wo die Immobilie an der Klippe sitzt, sind Setzung und Erosion eigene Fragen — nicht dasselbe wie Wind. Die Lage entscheidet mit, welche Versicherer überhaupt zeichnen. Bauen an dieser Küste liegt über dem Algarve-Durchschnitt; eine zu niedrige Summe kürzt über die <em>regra proporcional</em> jede Entschädigung. Siehe <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a> und <a href="/de/versicherung-vila-do-bispo/">Versicherung in Vila do Bispo</a> zur Off-Grid-Deklaration.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Sagres — häufige Fragen',
  faq: [
    {
      q: 'Ist Windschaden in Sagres gedeckt?',
      a: '<p>Sturmschaden ja. Fortschreitender Schaden durch den gewöhnlichen Wind des Jahres gilt als Unterhalt und ist nicht gedeckt. Das ist die zentrale Unterscheidung an dieser Küste.</p>',
    },
    {
      q: 'Sitzt ihr in Sagres?',
      a: '<p>Nein. Unsere registrierte Adresse ist in Lagos, eine halbe Stunde entfernt. Die südwestlichen Concelhos schreiben wir regelmäßig — nah genug, ein Dach zu sehen, statt nur darüber zu lesen.</p>',
    },
    {
      q: 'Was muss ich außer dem Haus angeben?',
      a: '<p>Pool, Photovoltaik, Batterie, Generator, Bohrung, und wie viele Wochen im Jahr die Immobilie leer steht. Nicht gemeldete Lithium-Speicher stellen im Brandfall den ganzen Anspruch in Frage.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-vila-do-bispo/', label: 'Versicherung in Vila do Bispo' },
    { url: '/de/versicherung-burgau/', label: 'Versicherung in Burgau' },
    { url: '/de/versicherung-lagos/', label: 'Versicherung in Lagos' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
  ],
};

export const MALLORCA_PAGE = {
  slug: 'versicherung-mallorca',
  url: '/de/versicherung-mallorca/',
  title: 'Versicherung auf Mallorca, Spanien | Adler & Rochefort',
  description:
    'Haus-, Kranken- und Autoversicherung auf Mallorca für internationale Mandanten. Zweitwohnsitz, saisonaler Leerstand, Boot — vom Sitz in Portugal im Dienstleistungsverkehr, schriftlich auf Deutsch.',
  keywords:
    'Versicherung Mallorca, Hausversicherung Mallorca, Zweitwohnsitz Mallorca Versicherung, Versicherungsmakler Mallorca Deutsche',
  eyebrow: 'Spanien · Mallorca',
  h1: 'Versicherung auf Mallorca, Spanien',
  standfirst:
    'Internationale Haushalte auf der Insel sind häufig Zweitwohnsitz-Eigentümer. Immobilie, saisonales Leerstandsmuster und — wo vorhanden — ein örtlich liegendes Boot gehören in dieselbe Prüfung, nicht in drei getrennte Gespräche.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/de/versicherung-spanien/' }, { name: 'Mallorca' }],
  published: PUBLISHED,
  modified: PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Mallorca anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Mallorca',
  formCountry: 'Spain',
  formMarket: 'spain',
  formCta: 'Angebot anfragen',
  formIntro:
    'Schildern Sie Immobilie, Nutzung und was sonst noch auf der Insel liegt — Fahrzeug, Boot, Kranken. Wir sagen schriftlich, was sich derzeit vermitteln lässt.',
  formPlaceholder: 'Zum Beispiel: Ort auf Mallorca, Villa oder Wohnung, Wochen Leerstand, Boot in der Marina, Resident oder nicht.',
  geo: { region: 'ES-PM', placename: 'Mallorca, Islas Baleares' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Mallorca, Spain' },
  sections: `
<section class="section plain" aria-labelledby="fos">
  <div class="container narrow article-body">
    <h2 id="fos">Von Portugal aus, im Dienstleistungsverkehr</h2>
    <p>Adler & Rochefort ist bei der portugiesischen Aufsicht ASF unter Nr. 425591790/3 registriert und in Spanien von dieser Registrierung aus tätig — nach dem EU-Rahmen, der einem in einem Mitgliedstaat zugelassenen Vermittler Leistungen in einem anderen erlaubt. Wir haben keine gesonderte spanische Zulassung und kein Büro auf Mallorca. Wir behaupten nicht, den ganzen balearischen Markt zu vergleichen — nur das, was wir nach einer kurzen Lagebeschreibung schriftlich bestätigen können. Den Cluster für Spanien insgesamt: <a href="/de/versicherung-spanien/">Versicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="zweit">
  <div class="container narrow article-body">
    <h2 id="zweit">Zweitwohnsitz, nicht Hauptwohnsitz</h2>
    <p>Internationale Haushalte auf der Insel nutzen die Immobilie häufig saisonal. Leerstand, Sicherheit und der Wiederaufbauwert — nicht der Kaufpreis — entscheiden, was ein Versicherer zeichnet. Eine als ganzjährig bewohnt gemeldete Police für ein Haus, das acht Monate leer steht, ist die Lücke, die im Schadenfall auffällt. Wie Wiederaufbauwert und Sicherheitsanforderungen bewertet werden: <a href="/de/hausversicherung-spanien/">Hausversicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="boot">
  <div class="container narrow article-body">
    <h2 id="boot">Boot, Fahrzeug, Kranken — dieselbe Prüfung</h2>
    <p>Wo ein Boot örtlich liegt, gehört der Liegeplatzvertrag und der geforderte Versicherungsnachweis in dieselbe Unterhaltung wie das Haus, nicht in eine spätere. Fahrzeuge, die zwischen den Besuchen auf der Insel bleiben, und private Krankenversicherung für Aufenthalte auf Mallorca sind eigene Sparten, aber derselbe Haushalt. Siehe <a href="/de/autoversicherung-spanien/">Autoversicherung in Spanien</a>, <a href="/de/krankenversicherung-spanien/">Krankenversicherung in Spanien</a> und <a href="/de/private-clients-spanien/">Private Clients in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ehrlichkeit">
  <div class="container narrow article-body">
    <h2 id="ehrlichkeit">Was wir aufbauen — und was wir nicht versprechen</h2>
    <p>Wir bauen unsere Versichererbeziehungen in Spanien auf. Statt zu raten, was sich platzieren lässt, stellen wir kurze Fragen zur Immobilie oder zur Lage und antworten schriftlich — einschließlich, wenn ein Fall derzeit außerhalb dessen liegt, was wir vermitteln können. Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. Spanische Policen werden gesetzlich auf Spanisch ausgestellt; wir sorgen dafür, dass Sie verstehen, was darin steht, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Mallorca — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro auf Mallorca?',
      a: '<p>Nein. Unser Sitz ist in Lagos, Portugal. Spanien betreuen wir im europäischen Dienstleistungsverkehr von der portugiesischen ASF-Registrierung aus.</p>',
    },
    {
      q: 'Versichert ihr jedes Haus auf der Insel?',
      a: '<p>Nein. Wir sagen ehrlich, dass die spanischen Versichererbeziehungen noch im Aufbau sind. Schildern Sie die Lage — wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.</p>',
    },
    {
      q: 'Muss ich Resident auf Mallorca sein?',
      a: '<p>Nein. Nicht-resident Eigentum ist üblich und in der Regel versicherbar. Was den Versicherer zählt, sind genaue Angaben zur Immobilie und zur Nutzung, nicht wo Sie persönlich leben.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-spanien/', label: 'Versicherung in Spanien' },
    { url: '/de/hausversicherung-spanien/', label: 'Hausversicherung in Spanien' },
    { url: '/de/versicherung-costa-del-sol/', label: 'Versicherung an der Costa del Sol' },
    { url: '/de/versicherung-costa-blanca/', label: 'Versicherung an der Costa Blanca' },
    { url: '/de/versicherung-kanaren/', label: 'Versicherung auf den Kanaren' },
    { url: '/de/versicherung-katalonien/', label: 'Versicherung in Katalonien' },
  ],
};

const MADEIRA_PUBLISHED = '2026-09-24T12:00:00+00:00';

export const MADEIRA_PAGE = {
  slug: 'versicherung-madeira',
  url: '/de/versicherung-madeira/',
  title: 'Hausversicherung auf Madeira | Adler & Rochefort',
  description:
    'Hausversicherung auf Madeira: Ribeiras, Aluvião, Sturm gegen Erdrutsch, Porto Santo als andere Insel. Vom Sitz in Lagos — kein Büro in Funchal, keine erfundenen Prämien.',
  keywords:
    'Hausversicherung Madeira, Versicherung Funchal, Versicherung Ribeira Brava, Porto Santo Versicherung, Aluvião Versicherung',
  eyebrow: 'Regional · Madeira',
  h1: 'Hausversicherung auf Madeira',
  standfirst:
    'Madeira ist kein Algarve-Ort mit anderem Namen. An der Südküste stehen die Orte am Ausgang steiler vulkanischer Einzugsgebiete. Die Frage an die Police ist, ob Sturm, Überschwemmung und Erdrutsch dasselbe Ereignis sind.',
  heroMeta: META,
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/blog/home-insurance-madeira/' },
  langLinks: { en: '/en/blog/home-insurance-madeira/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Madeira' }],
  published: MADEIRA_PUBLISHED,
  modified: MADEIRA_PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Madeira anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Hausversicherung Madeira',
  formCta: 'Angebot anfragen',
  formIntro:
    'Welche Insel, wie die Immobilie zu einer Ribeira oder einem Hang liegt, und ob sie vermietet wird. Wir antworten schriftlich auf Deutsch — auch wenn eine Deckung so nicht besteht.',
  formPlaceholder:
    'Zum Beispiel: Funchal oder Porto Santo, Wohnung oder Haus, Nähe zu einer Ribeira, Wochen Leerstand, Vermietung.',
  geo: { region: 'PT-30', placename: 'Madeira, Portugal' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Madeira, Portugal' },
  sections: `
<section class="section plain" aria-labelledby="aluviao">
  <div class="container narrow article-body">
    <h2 id="aluviao">Der 20. Februar 2010 ist das Referenzereignis</h2>
    <p>Am 20. Februar 2010 traf ein <em>Aluvião</em> die Insel — Sturzflut und Geröllstrom, keine langsame Flussflut. Dutzende Menschen starben. Funchal und Ribeira Brava waren am schwersten getroffen, Câmara de Lobos und Santa Cruz ebenfalls. Es war das schwerste Ereignis dieser Art auf der Insel seit 1803. Eine Klausel, die Regenwasser im Gebäude deckt, deckt nicht automatisch Geröll, mitgerissenes Erdreich oder eine Stützmauer, die deshalb versagt. Diese Zeilen liest man im Wortlaut, bevor man Prämien vergleicht. Der englische Artikel, aus dem diese Seite übersetzt ist: <a href="/en/blog/home-insurance-madeira/" hreflang="en">Home insurance in Madeira</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="gefahren">
  <div class="container narrow article-body">
    <h2 id="gefahren">Sturm, Überschwemmung, Erdrutsch, Meer</h2>
    <p>Sturmschaden am Dach ist das gewöhnlich gedeckte Ereignis. Fortschreitender Verschleiß durch Wind und Salzluft ist Unterhalt und nicht gedeckt — dieselbe Unterscheidung wie an der Westküste, ohne zu behaupten, die Exposition sei dieselbe. Wasser vom Meer ist ein Drittes: Formulierungen, die Regenwasser zahlen, schließen Seewasser oft aus oder begrenzen es gesondert. Erdrutsch ist, wo ein Versicherer ihn überhaupt anbietet, Wahldeckung mit eigener Selbstbeteiligung. Allmähliche Erosion ist nicht versichert. Die portugiesische Hausversicherung im Überblick: <a href="/de/hausversicherung-portugal/">Hausversicherung in Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="insel">
  <div class="container narrow article-body">
    <h2 id="insel">Die Insel benennen — und die Ribeira</h2>
    <p>Funchal, Câmara de Lobos, Ribeira Brava, Santa Cruz und Machico sind keine austauschbaren Postleitzahlen. Was zählt, ist die Lage zur Wasserrinne und zum Hang. <strong>Porto Santo ist nicht dieselbe Insel.</strong> Sie ist flacher, sandiger, ohne dieselben steilen Einzugsgebiete. Eine Police, die beide als ein Risiko behandelt, ist die falsche Police. Unser Sitz bleibt Lagos, Varandas de São João 4. Wir haben kein Büro in Funchal und behaupten keinen Bestand auf der Insel, den wir nicht haben. Die Police selbst ist eine portugiesische Police, schriftlich von dieser Registrierung aus.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="nutzung">
  <div class="container narrow article-body">
    <h2 id="nutzung">Leerstand, Vermietung, Gemeinschaft — und Erdbeben</h2>
    <p>Ein großer Teil des internationalen Eigentums wird nur einen Teil des Jahres genutzt. Steht die Wohnung als ständig bewohnt in der Police und von Oktober bis Mai leer, ist das die Lücke im Schadenfall. Vermietung, auch als <em>alojamento local</em>, ist eine andere Nutzung als Wohnen und muss so gemeldet werden. In Funchal sitzt die Wohnung meist in der <em>propriedade horizontal</em>: die Gemeinschaft deckt das gemeinsame Gebäude, nicht Innenausbau, Hausrat oder die Haftung gegenüber der Wohnung darunter. Die Versicherungssumme ist der Wiederaufbauwert, nicht der Kaufpreis.</p>
    <p>Das IPMA beschreibt die seismische Gefährdung des Archipels als geringer als auf dem Festland und auf den Azoren. Geringer heißt nicht keine. Am 7. März 2020 war ein Beben der Magnitude 5,2, etwa 35 km südlich von Funchal, auf Madeira und Porto Santo zu spüren — Intensität V in Funchal, Câmara de Lobos und Calheta, IV auf Porto Santo. Erdbebendeckung ist eine Wahlklausel mit eigener Selbstbeteiligung, nicht Bestandteil jeder <em>multirriscos</em>.</p>
  </div>
</section>`,
  faqTitle: 'Hausversicherung Madeira — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro in Funchal?',
      a: '<p>Nein. Die registrierte Adresse ist in Lagos, Varandas de São João 4, 8600-324. Madeira wird als portugiesisches Risiko von dieser Registrierung aus schriftlich bearbeitet. Wir behaupten kein Büro und keinen örtlichen Bestand, den wir nicht haben.</p>',
    },
    {
      q: 'Deckt eine normale Überschwemmungsklausel einen Aluvião wie 2010?',
      a: '<p>Nicht von selbst. Das Ereignis vom 20. Februar 2010 war Sturzflut und Geröllstrom, am schwersten in Funchal und Ribeira Brava. Regenwasser, Geröll, Erdrutsch und Wasser vom Meer sind verschiedene Zeilen. Jede einzeln im Wortlaut prüfen.</p>',
    },
    {
      q: 'Ist Porto Santo dasselbe Risiko wie Funchal?',
      a: '<p>Nein. Porto Santo ist flacher und sandiger, ohne dieselben steilen Ribeira-Einzugsgebiete. Die Anfrage muss die Insel nennen.</p>',
    },
    {
      q: 'Ist Erdbeben automatisch enthalten?',
      a: '<p>Nur wenn die besonderen Bedingungen es mit einer Summe ausweisen. Die Gefährdung ist nach IPMA geringer als auf dem Festland und den Azoren — und am 7. März 2020 trotzdem spürbar gewesen. Die Klausel ist optional und hat eine eigene Selbstbeteiligung.</p>',
    },
  ],
  related: [
    { url: '/en/blog/home-insurance-madeira/', label: 'Home insurance in Madeira', hreflang: 'en' },
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/de/versicherung-portugal/', label: 'Versicherung in Portugal' },
    { url: '/de/versicherung-lagos/', label: 'Sitz in Lagos' },
  ],
};

export const COSTA_DEL_SOL_PAGE = {
  slug: 'versicherung-costa-del-sol',
  url: '/de/versicherung-costa-del-sol/',
  title: 'Versicherung an der Costa del Sol, Spanien | Adler & Rochefort',
  description:
    'Haus-, Kranken- und Autoversicherung an der Costa del Sol für internationale Mandanten. Villa, Zweitwohnsitz, Fahrzeug zwischen den Besuchen — im Dienstleistungsverkehr, schriftlich auf Deutsch.',
  keywords:
    'Versicherung Costa del Sol, Hausversicherung Marbella, Zweitwohnsitz Costa del Sol, Versicherungsmakler Costa del Sol Deutsche',
  eyebrow: 'Spanien · Costa del Sol',
  h1: 'Versicherung an der Costa del Sol, Spanien',
  standfirst:
    'Villen und Zweitwohnsitze an dieser Küste werfen dieselben Fragen auf wie anderswo in Spanien: Wiederaufbauwert, Hausrat, der zum Inhalt passt, und Fahrzeuge, die zwischen den Besuchen in Spanien bleiben. Die Dichte internationaler Eigentümer macht daraus ein wiederkehrendes Muster, keine Sonderpolizei.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/de/versicherung-spanien/' }, { name: 'Costa del Sol' }],
  published: MADEIRA_PUBLISHED,
  modified: MADEIRA_PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für die Costa del Sol anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Costa del Sol',
  formCountry: 'Spain',
  formMarket: 'spain',
  formCta: 'Angebot anfragen',
  formIntro:
    'Schildern Sie Ort, Immobilie und Nutzung — und was zwischen den Besuchen in Spanien bleibt. Wir sagen schriftlich, was sich derzeit vermitteln lässt.',
  formPlaceholder: 'Zum Beispiel: Marbella oder Estepona, Villa oder Wohnung, Wochen Leerstand, Fahrzeug vor Ort, Resident oder nicht.',
  geo: { region: 'ES-MA', placename: 'Costa del Sol, Andalucía' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Costa del Sol, Spain' },
  sections: `
<section class="section plain" aria-labelledby="fos">
  <div class="container narrow article-body">
    <h2 id="fos">Von Portugal aus, im Dienstleistungsverkehr</h2>
    <p>Adler & Rochefort ist bei der portugiesischen Aufsicht ASF unter Nr. 425591790/3 registriert und in Spanien von dieser Registrierung aus tätig — nach dem EU-Rahmen, der einem in einem Mitgliedstaat zugelassenen Vermittler Leistungen in einem anderen erlaubt. Wir haben keine gesonderte spanische Zulassung und kein Büro an der Costa del Sol. Wir behaupten nicht, den andalusischen Markt zu vergleichen — nur das, was wir nach einer kurzen Lagebeschreibung schriftlich bestätigen können. Den Cluster für Spanien insgesamt: <a href="/de/versicherung-spanien/">Versicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="villa">
  <div class="container narrow article-body">
    <h2 id="villa">Villa, Zweitwohnsitz, Inhalt</h2>
    <p>Das steht bereits auf der Seite <a href="/de/private-clients-spanien/">Private Clients in Spanien</a>, im Abschnitt zur Costa del Sol, und wird hier nicht umgeschrieben: genauer Wiederaufbauwert, Hausrat, der abbildet, was tatsächlich in der Immobilie ist, und die Frage, wie Leerstand und Zweitwohnsitz gemeldet sind. Eine als ganzjährig bewohnt gemeldete Police für ein Haus, das den größeren Teil des Jahres leer steht, ist die Lücke, die im Schadenfall auffällt. Wie Wiederaufbauwert und Sicherheitsanforderungen bewertet werden: <a href="/de/hausversicherung-spanien/">Hausversicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fahrzeug">
  <div class="container narrow article-body">
    <h2 id="fahrzeug">Fahrzeug zwischen den Besuchen — und Vermietung</h2>
    <p>Fahrzeuge, die zwischen den Aufenthalten an der Küste bleiben, gehören in dieselbe Prüfung wie das Haus, nicht in eine spätere. Private Krankenversicherung für Aufenthalte ebenfalls. Wird vermietet, ist das eine andere Police als die des selbst genutzten Zweitwohnsitzes. Siehe <a href="/de/autoversicherung-spanien/">Autoversicherung in Spanien</a>, <a href="/de/krankenversicherung-spanien/">Krankenversicherung in Spanien</a> und <a href="/de/vermieterversicherung-spanien/">Vermieterversicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ehrlichkeit">
  <div class="container narrow article-body">
    <h2 id="ehrlichkeit">Was wir aufbauen — und was wir nicht versprechen</h2>
    <p>Wir bauen unsere Versichererbeziehungen in Spanien auf. Statt zu raten, was sich platzieren lässt, stellen wir kurze Fragen zur Immobilie oder zur Lage und antworten schriftlich — einschließlich, wenn ein Fall derzeit außerhalb dessen liegt, was wir vermitteln können. Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. Spanische Policen werden gesetzlich auf Spanisch ausgestellt; wir sorgen dafür, dass Sie verstehen, was darin steht, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Costa del Sol — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro in Marbella?',
      a: '<p>Nein. Unser Sitz ist in Lagos, Portugal. Spanien betreuen wir im europäischen Dienstleistungsverkehr von der portugiesischen ASF-Registrierung aus.</p>',
    },
    {
      q: 'Versichert ihr jede Villa an der Küste?',
      a: '<p>Nein. Die spanischen Versichererbeziehungen sind noch im Aufbau. Schildern Sie die Lage — wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.</p>',
    },
    {
      q: 'Muss ich in Spanien gemeldet sein?',
      a: '<p>Nein. Nicht-residentes Eigentum ist üblich und in der Regel versicherbar. Was zählt, sind genaue Angaben zur Immobilie und zur Nutzung, einschließlich eines Fahrzeugs, das zwischen den Besuchen bleibt.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-spanien/', label: 'Versicherung in Spanien' },
    { url: '/de/hausversicherung-spanien/', label: 'Hausversicherung in Spanien' },
    { url: '/de/versicherung-mallorca/', label: 'Versicherung auf Mallorca' },
    { url: '/de/versicherung-costa-blanca/', label: 'Versicherung an der Costa Blanca' },
    { url: '/de/versicherung-kanaren/', label: 'Versicherung auf den Kanaren' },
    { url: '/de/versicherung-katalonien/', label: 'Versicherung in Katalonien' },
  ],
};

export const COSTA_BLANCA_PAGE = {
  slug: 'versicherung-costa-blanca',
  url: '/de/versicherung-costa-blanca/',
  title: 'Versicherung an der Costa Blanca, Spanien | Adler & Rochefort',
  description:
    'Hausversicherung an der Costa Blanca für nicht-residente Eigentümer. Comunidad, Zweitwohnsitz und Leerstand — Alicante ist das Beispiel unserer eigenen Formulare. Schriftlich auf Deutsch.',
  keywords:
    'Versicherung Costa Blanca, Hausversicherung Alicante, Zweitwohnsitz Costa Blanca, Comunidad Versicherung Alicante, Versicherungsmakler Costa Blanca',
  eyebrow: 'Spanien · Costa Blanca',
  h1: 'Versicherung an der Costa Blanca, Spanien',
  standfirst:
    'Alicante und die Costa Blanca sind das Beispiel, das unsere Formulare zur Hausversicherung in Spanien bereits nennen. Hier sitzt internationales Eigentum oft in einer Eigentümergemeinschaft. Die Gebäudepolice der Comunidad und die eigene Police sind zwei Verträge.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/de/versicherung-spanien/' }, { name: 'Costa Blanca' }],
  published: MADEIRA_PUBLISHED,
  modified: MADEIRA_PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für die Costa Blanca anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Costa Blanca',
  formCountry: 'Spain',
  formMarket: 'spain',
  formCta: 'Angebot anfragen',
  formIntro:
    'Ort, Wohnung oder Haus, und ob die Comunidad das Gebäude bereits versichert. Wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.',
  formPlaceholder: 'Zum Beispiel: Alicante, Torrevieja oder Dénia, Wohnung in der Comunidad, Wochen Leerstand, Resident oder nicht.',
  geo: { region: 'ES-A', placename: 'Costa Blanca, Alicante' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Costa Blanca, Spain' },
  sections: `
<section class="section plain" aria-labelledby="fos">
  <div class="container narrow article-body">
    <h2 id="fos">Von Portugal aus, im Dienstleistungsverkehr</h2>
    <p>Adler & Rochefort ist bei der portugiesischen Aufsicht ASF unter Nr. 425591790/3 registriert und in Spanien von dieser Registrierung aus tätig — nach dem EU-Rahmen, der einem in einem Mitgliedstaat zugelassenen Vermittler Leistungen in einem anderen erlaubt. Wir haben keine gesonderte spanische Zulassung und kein Büro an der Costa Blanca. Wir behaupten nicht, den valencianischen Markt zu vergleichen — nur das, was wir nach einer kurzen Lagebeschreibung schriftlich bestätigen können. Den Cluster für Spanien insgesamt: <a href="/de/versicherung-spanien/">Versicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="comunidad">
  <div class="container narrow article-body">
    <h2 id="comunidad">Comunidad und eigene Police</h2>
    <p>An dieser Küste — Alicante ist das Beispiel in unseren Formularen zur <a href="/de/hausversicherung-spanien/">Hausversicherung in Spanien</a> — ist die erste Frage oft nicht die Villa, sondern die Gemeinschaft. Häufig ist die äußere Bausubstanz bereits über die Police der <em>comunidad de propietarios</em> versichert. Die eigene Deckung betrifft dann Hausrat und Innenausbau. Das gilt nicht in jeder Gemeinschaft gleich, also nachlesen statt annehmen. Was die Gemeinschaft nicht trägt, bleibt beim Eigentümer, einschließlich der Haftung gegenüber dem Nachbarn.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="zweit">
  <div class="container narrow article-body">
    <h2 id="zweit">Zweitwohnsitz und nicht-residente Eigentümer</h2>
    <p>Internationale Eigentümer nutzen die Wohnung häufig nur einen Teil des Jahres und wohnen selbst nicht in Spanien. Leerstand, Sicherheit und der Wiederaufbauwert — nicht der Kaufpreis — entscheiden, was ein Versicherer zeichnet. Eine genaue Angabe zum Leerstandsmuster zählt mehr als der Ortsname. Fahrzeug und Krankenversicherung für die Aufenthalte sind eigene Sparten und derselbe Haushalt: <a href="/de/autoversicherung-spanien/">Autoversicherung in Spanien</a> und <a href="/de/krankenversicherung-spanien/">Krankenversicherung in Spanien</a>. Wird vermietet, gehört das auf die <a href="/de/vermieterversicherung-spanien/">Vermieterversicherung</a>, nicht stillschweigend in die Wohnpolice.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ehrlichkeit">
  <div class="container narrow article-body">
    <h2 id="ehrlichkeit">Was wir aufbauen — und was wir nicht versprechen</h2>
    <p>Wir bauen unsere Versichererbeziehungen in Spanien auf. Statt zu raten, was sich platzieren lässt, stellen wir kurze Fragen zur Immobilie oder zur Lage und antworten schriftlich — einschließlich, wenn ein Fall derzeit außerhalb dessen liegt, was wir vermitteln können. Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. Spanische Policen werden gesetzlich auf Spanisch ausgestellt; wir sorgen dafür, dass Sie verstehen, was darin steht, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Costa Blanca — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro in Alicante?',
      a: '<p>Nein. Unser Sitz ist in Lagos, Portugal. Spanien betreuen wir im europäischen Dienstleistungsverkehr von der portugiesischen ASF-Registrierung aus.</p>',
    },
    {
      q: 'Reicht die Versicherung der Comunidad?',
      a: '<p>Für die gemeinsame Bausubstanz oft ja, für Hausrat, Innenausbau und die Haftung gegenüber dem Nachbarn nein. Das steht in den Bedingungen der Gemeinschaft und ist von Haus zu Haus verschieden. Nachlesen, nicht annehmen.</p>',
    },
    {
      q: 'Muss ich Resident an der Costa Blanca sein?',
      a: '<p>Nein. Nicht-residentes Eigentum ist der Normalfall, den unsere Spanien-Seiten bereits beschreiben. Entscheidend sind Immobilie, Nutzung und Leerstand — nicht der Wohnsitz.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-spanien/', label: 'Versicherung in Spanien' },
    { url: '/de/hausversicherung-spanien/', label: 'Hausversicherung in Spanien' },
    { url: '/de/versicherung-costa-del-sol/', label: 'Versicherung an der Costa del Sol' },
    { url: '/de/versicherung-kanaren/', label: 'Versicherung auf den Kanaren' },
    { url: '/de/versicherung-katalonien/', label: 'Versicherung in Katalonien' },
  ],
};

export const KANAREN_PAGE = {
  slug: 'versicherung-kanaren',
  url: '/de/versicherung-kanaren/',
  title: 'Versicherung auf den Kanarischen Inseln | Adler & Rochefort',
  description:
    'Hausversicherung auf den Kanaren für internationale Mandanten. Die Insel nennen, Zweitwohnsitz und Leerstand — im Dienstleistungsverkehr, schriftlich auf Deutsch.',
  keywords:
    'Versicherung Kanaren, Hausversicherung Teneriffa, Versicherung Gran Canaria, Zweitwohnsitz Lanzarote, Versicherung La Palma',
  eyebrow: 'Spanien · Kanarische Inseln',
  h1: 'Versicherung auf den Kanarischen Inseln, Spanien',
  standfirst:
    'Teneriffa, Gran Canaria, Lanzarote, Fuerteventura und La Palma sind nicht ein Ort mit fünf Namen. Die Anfrage nennt die Insel. Leerstand und Vermietung entscheiden danach, nicht der Archipel als Etikett.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/de/versicherung-spanien/' }, { name: 'Kanaren' }],
  published: MADEIRA_PUBLISHED,
  modified: MADEIRA_PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für die Kanaren anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Kanaren',
  formCountry: 'Spain',
  formMarket: 'spain',
  formCta: 'Angebot anfragen',
  formIntro:
    'Insel, Ort, Wohnung oder Haus, und wie viele Monate es leer steht. Wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.',
  formPlaceholder: 'Zum Beispiel: Adeje auf Teneriffa, Puerto del Carmen, Corralejo oder Los Llanos, Wochen Leerstand, Vermietung.',
  geo: { region: 'ES-CN', placename: 'Islas Canarias' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Canary Islands, Spain' },
  sections: `
<section class="section plain" aria-labelledby="fos">
  <div class="container narrow article-body">
    <h2 id="fos">Von Portugal aus, im Dienstleistungsverkehr</h2>
    <p>Adler & Rochefort ist bei der portugiesischen Aufsicht ASF unter Nr. 425591790/3 registriert und in Spanien von dieser Registrierung aus tätig — nach dem EU-Rahmen, der einem in einem Mitgliedstaat zugelassenen Vermittler Leistungen in einem anderen erlaubt. Wir haben keine gesonderte spanische Zulassung und kein Büro auf den Kanaren. Wir behaupten nicht, den Markt des Archipels zu vergleichen — nur das, was wir nach einer kurzen Lagebeschreibung schriftlich bestätigen können. Den Cluster für Spanien insgesamt: <a href="/de/versicherung-spanien/">Versicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="insel">
  <div class="container narrow article-body">
    <h2 id="insel">Die Insel nennen</h2>
    <p>Eine Wohnung in Costa Adeje, ein Haus in Puerto del Carmen und eine Finca auf La Palma sind nicht dasselbe Risiko, nur weil alle drei „Kanaren“ heißen. La Palma ist nicht Teneriffa: der Ausbruch von 2021 hat Wohngebiete in Los Llanos de Aridane, El Paso und Tazacorte zerstört. Das ist ein Grund, die Insel in der Anfrage zu nennen, keine Aussage darüber, was eine konkrete Police zahlt. Wie Wiederaufbauwert und Leerstand bewertet werden: <a href="/de/hausversicherung-spanien/">Hausversicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="nutzung">
  <div class="container narrow article-body">
    <h2 id="nutzung">Zweitwohnsitz, Leerstand, Vermietung</h2>
    <p>Der größte Teil des internationalen Eigentums auf den Inseln ist nicht ganzjährig bewohnt. Eine als ständig bewohnt gemeldete Police für ein Haus, das den größeren Teil des Jahres leer steht, ist die Lücke, die im Schadenfall auffällt. Kurzzeitvermietung ist eine andere Nutzung als der selbst genutzte Zweitwohnsitz und muss so gemeldet werden — und die Satzung der Gemeinschaft erlaubt sie oft nicht, auch wenn das Inserat schon online steht. Fahrzeug und Krankenversicherung für die Aufenthalte: <a href="/de/autoversicherung-spanien/">Autoversicherung in Spanien</a> und <a href="/de/krankenversicherung-spanien/">Krankenversicherung in Spanien</a>. Wird vermietet, gehört das auf die <a href="/de/vermieterversicherung-spanien/">Vermieterversicherung</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ehrlichkeit">
  <div class="container narrow article-body">
    <h2 id="ehrlichkeit">Was wir aufbauen — und was wir nicht versprechen</h2>
    <p>Wir bauen unsere Versichererbeziehungen in Spanien auf. Statt zu raten, was sich platzieren lässt, stellen wir kurze Fragen zur Immobilie oder zur Lage und antworten schriftlich — einschließlich, wenn ein Fall derzeit außerhalb dessen liegt, was wir vermitteln können. Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. Spanische Policen werden gesetzlich auf Spanisch ausgestellt; wir sorgen dafür, dass Sie verstehen, was darin steht, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Kanaren — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro auf Teneriffa?',
      a: '<p>Nein. Unser Sitz ist in Lagos, Portugal. Spanien betreuen wir im europäischen Dienstleistungsverkehr von der portugiesischen ASF-Registrierung aus. Das gilt für jede Insel.</p>',
    },
    {
      q: 'Ist La Palma dasselbe Risiko wie Teneriffa?',
      a: '<p>Nein. Die Anfrage nennt die Insel und den Ort. Der Ausbruch von 2021 betraf Wohngebiete auf La Palma, nicht die Südküste von Teneriffa. Was eine Police dazu zahlt, steht in ihrem Wortlaut — wir erfinden keine Deckung.</p>',
    },
    {
      q: 'Muss ich auf den Inseln wohnen?',
      a: '<p>Nein. Nicht-residentes Eigentum ist üblich. Was zählt, sind Immobilie, Nutzung und Leerstand.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-spanien/', label: 'Versicherung in Spanien' },
    { url: '/de/hausversicherung-spanien/', label: 'Hausversicherung in Spanien' },
    { url: '/de/versicherung-costa-del-sol/', label: 'Versicherung an der Costa del Sol' },
    { url: '/de/versicherung-costa-blanca/', label: 'Versicherung an der Costa Blanca' },
    { url: '/de/versicherung-katalonien/', label: 'Versicherung in Katalonien' },
  ],
};

export const KATALONIEN_PAGE = {
  slug: 'versicherung-katalonien',
  url: '/de/versicherung-katalonien/',
  title: 'Versicherung in Katalonien, Spanien | Adler & Rochefort',
  description:
    'Hausversicherung in Katalonien: Wohnung in Barcelona, Haus an der Costa Brava, Apartment an der Costa Daurada. Zweitwohnsitz und Comunidad — schriftlich auf Deutsch.',
  keywords:
    'Versicherung Katalonien, Hausversicherung Barcelona, Versicherung Costa Brava, Zweitwohnsitz Costa Daurada, Versicherungsmakler Katalonien Deutsche',
  eyebrow: 'Spanien · Katalonien',
  h1: 'Versicherung in Katalonien, Spanien',
  standfirst:
    'Katalonien ist nicht nur eine Ferienküste. Eine Wohnung in Barcelona, ein Haus an der Costa Brava und ein Apartment an der Costa Daurada werfen nicht dieselbe Frage an die Police auf.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien', url: '/de/versicherung-spanien/' }, { name: 'Katalonien' }],
  published: MADEIRA_PUBLISHED,
  modified: MADEIRA_PUBLISHED,
  schemaType: 'Article',
  showTeam: true,
  formHeading: 'Angebot für Katalonien anfragen',
  formBranch: 'Hausversicherung',
  formSubject: 'Versicherung Katalonien',
  formCountry: 'Spain',
  formMarket: 'spain',
  formCta: 'Angebot anfragen',
  formIntro:
    'Barcelona, Costa Brava oder Costa Daurada, Wohnung oder Haus, und ob die Gemeinschaft das Gebäude bereits versichert. Wir antworten schriftlich.',
  formPlaceholder: 'Zum Beispiel: Eixample, Begur oder Cambrils, Wohnung in der Comunidad, Wochen Leerstand, Vermietung.',
  geo: { region: 'ES-CT', placename: 'Catalunya' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Catalonia, Spain' },
  sections: `
<section class="section plain" aria-labelledby="fos">
  <div class="container narrow article-body">
    <h2 id="fos">Von Portugal aus, im Dienstleistungsverkehr</h2>
    <p>Adler & Rochefort ist bei der portugiesischen Aufsicht ASF unter Nr. 425591790/3 registriert und in Spanien von dieser Registrierung aus tätig — nach dem EU-Rahmen, der einem in einem Mitgliedstaat zugelassenen Vermittler Leistungen in einem anderen erlaubt. Wir haben keine gesonderte spanische Zulassung und kein Büro in Barcelona. Wir behaupten nicht, den katalanischen Markt zu vergleichen — nur das, was wir nach einer kurzen Lagebeschreibung schriftlich bestätigen können. Den Cluster für Spanien insgesamt: <a href="/de/versicherung-spanien/">Versicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="drei">
  <div class="container narrow article-body">
    <h2 id="drei">Barcelona, Costa Brava, Costa Daurada</h2>
    <p>In Barcelona sitzt die Wohnung meist in einer Eigentümergemeinschaft. Häufig ist die äußere Bausubstanz bereits über die Gemeinschaft versichert; Hausrat und Innenausbau sind die eigene Police. Das gilt nicht in jedem Haus gleich, also nachlesen statt annehmen — dieselbe Frage wie an der <a href="/de/versicherung-costa-blanca/">Costa Blanca</a>. An der Costa Brava ist es oft ein Haus, das den Winter leer steht. An der Costa Daurada, von Sitges bis Cambrils, wieder häufiger die Wohnung. Drei Lagen, nicht eine Police mit drei Ortsnamen. Wiederaufbauwert statt Kaufpreis: <a href="/de/hausversicherung-spanien/">Hausversicherung in Spanien</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="nutzung">
  <div class="container narrow article-body">
    <h2 id="nutzung">Leerstand und Vermietung</h2>
    <p>Ein Zweitwohnsitz, der von Oktober bis Ostern zu ist, wird als Zweitwohnsitz gemeldet, nicht als Hauptwohnsitz. Touristische Vermietung ist eine andere Nutzung und hängt daran, ob die Gemeinschaft und die Gemeinde sie erlauben. Die Police folgt dieser Angabe, sie ersetzt sie nicht. Wird vermietet: <a href="/de/vermieterversicherung-spanien/">Vermieterversicherung in Spanien</a>. Fahrzeug und Krankenversicherung für die Aufenthalte bleiben eigene Sparten desselben Haushalts: <a href="/de/autoversicherung-spanien/">Auto</a> und <a href="/de/krankenversicherung-spanien/">Kranken</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ehrlichkeit">
  <div class="container narrow article-body">
    <h2 id="ehrlichkeit">Was wir aufbauen — und was wir nicht versprechen</h2>
    <p>Wir bauen unsere Versichererbeziehungen in Spanien auf. Statt zu raten, was sich platzieren lässt, stellen wir kurze Fragen zur Immobilie oder zur Lage und antworten schriftlich — einschließlich, wenn ein Fall derzeit außerhalb dessen liegt, was wir vermitteln können. Korrespondenz mit Ihnen auf Deutsch; intern arbeiten wir auf Englisch. Spanische Policen werden gesetzlich auf Spanisch ausgestellt; wir sorgen dafür, dass Sie verstehen, was darin steht, bevor Sie unterschreiben.</p>
  </div>
</section>`,
  faqTitle: 'Versicherung Katalonien — häufige Fragen',
  faq: [
    {
      q: 'Habt ihr ein Büro in Barcelona?',
      a: '<p>Nein. Unser Sitz ist in Lagos, Portugal. Katalonien betreuen wir im europäischen Dienstleistungsverkehr von der portugiesischen ASF-Registrierung aus.</p>',
    },
    {
      q: 'Reicht die Versicherung der Gemeinschaft in Barcelona?',
      a: '<p>Für die gemeinsame Bausubstanz oft ja, für Hausrat, Innenausbau und die eigene Haftung nein. Das steht in den Bedingungen der Gemeinschaft und ist von Haus zu Haus verschieden.</p>',
    },
    {
      q: 'Muss ich in Katalonien wohnen?',
      a: '<p>Nein. Nicht-residentes Eigentum ist versicherbar. Entscheidend sind Ort, Immobilie, Nutzung und Leerstand.</p>',
    },
  ],
  related: [
    { url: '/de/versicherung-spanien/', label: 'Versicherung in Spanien' },
    { url: '/de/hausversicherung-spanien/', label: 'Hausversicherung in Spanien' },
    { url: '/de/versicherung-costa-blanca/', label: 'Versicherung an der Costa Blanca' },
    { url: '/de/versicherung-kanaren/', label: 'Versicherung auf den Kanaren' },
    { url: '/de/versicherung-mallorca/', label: 'Versicherung auf Mallorca' },
  ],
};

export const DESTINATION_PAGES = [
  LUZ_PAGE,
  BURGAU_PAGE,
  VILA_DO_BISPO_PAGE,
  SAGRES_PAGE,
  MADEIRA_PAGE,
  MALLORCA_PAGE,
  COSTA_DEL_SOL_PAGE,
  COSTA_BLANCA_PAGE,
  KANAREN_PAGE,
  KATALONIEN_PAGE,
];
