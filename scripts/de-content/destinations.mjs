import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * West-Algarve and Mallorca destination pages for /de.
 *
 * Facts only from already-published EN material:
 *   - Lagos office / concelho: scripts/de-content/local.mjs (LAGOS_PAGE)
 *   - Sagres, Vila do Bispo, Salema, Burgau: scripts/location-articles.data.mjs
 *     (home-insurance-sagres-vila-do-bispo) — wind vs storm, salt corrosion,
 *     isolation, off-grid declaration, rebuild cost west of Lagos
 *   - Praia da Luz: same concelho as Lagos; pool / beach-access liability
 *     from public/en/blog/swimming-pools-jetties-private-access-liability-nobody-insures/
 *   - Mallorca: public/en/private-clients-spain/ (second homes, seasonal
 *     occupancy, local boat) and the Spain FoS position already on /de/
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
  title: 'Versicherung auf Mallorca | Adler & Rochefort',
  description:
    'Haus-, Kranken- und Autoversicherung auf Mallorca für internationale Mandanten. Zweitwohnsitz, saisonaler Leerstand, Boot — vom Sitz in Portugal im Dienstleistungsverkehr, schriftlich auf Deutsch.',
  keywords:
    'Versicherung Mallorca, Hausversicherung Mallorca, Zweitwohnsitz Mallorca Versicherung, Versicherungsmakler Mallorca Deutsche',
  eyebrow: 'Spanien · Mallorca',
  h1: 'Versicherung auf Mallorca',
  standfirst:
    'Internationale Haushalte auf der Insel sind häufig Zweitwohnsitz-Eigentümer. Immobilie, saisonales Leerstandsmuster und — wo vorhanden — ein örtlich liegendes Boot gehören in dieselbe Prüfung, nicht in drei getrennte Gespräche.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Dienstleistungsverkehr Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: { en: '/en/home-insurance-spain/' },
  langLinks: { en: '/en/home-insurance-spain/' },
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Mallorca' }],
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
    { url: '/de/private-clients-spanien/', label: 'Private Clients in Spanien' },
    { url: '/de/krankenversicherung-spanien/', label: 'Krankenversicherung in Spanien' },
  ],
};

export const DESTINATION_PAGES = [
  LUZ_PAGE,
  BURGAU_PAGE,
  VILA_DO_BISPO_PAGE,
  SAGRES_PAGE,
  MALLORCA_PAGE,
];
