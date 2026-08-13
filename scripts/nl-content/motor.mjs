import { BREADCRUMB_ROOT } from './shared.mjs';

const CAT = { name: 'Auto', url: '/nl/verzekeringen-portugal/#auto' };

export const MOTOR_PAGES = [
  /* ─────────────────────────────────────────────────────────────────────────
   * 4. Auto importeren — the gap between NL registration and PT registration
   *    is where people drive uninsured without realising it.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'auto-importeren-portugal-verzekering',
    url: '/nl/auto-importeren-portugal-verzekering/',
    title: 'Auto importeren naar Portugal: verzekering, ISV en kenteken | Adler & Rochefort',
    description:
      'Hoe u verzekerd blijft tussen Nederlands en Portugees kenteken, wat ISV en de IMT-procedure inhouden, wanneer importeren niet loont, en hoe het zit met uw rijbewijs.',
    keywords:
      'auto importeren Portugal, ISV Portugal, matrícula portuguesa, autoverzekering Portugal Nederlands kenteken, IMT legalisatie auto, rijbewijs omwisselen Portugal',
    eyebrow: 'Auto importeren',
    h1: 'Auto importeren naar Portugal: de verzekering tussen twee kentekens',
    standfirst:
      'De import zelf is een administratief traject met een begin en een eind. Het risico zit in het midden: de weken waarin uw auto nog Nederlands staat geregistreerd maar hier al rondrijdt, en uw Nederlandse polis daar strikt genomen niet meer voor bedoeld is.',
    heroMeta:
      'Onafhankelijk verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: {},
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Auto importeren' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'De dekking moet doorlopen terwijl het kenteken verandert — niet erna.',
    formBranch: 'Autoverzekering',
    formSubject: 'auto importeren en verzekeren',
    formIntro:
      'Weet u wanneer de auto de grens over gaat? Geef merk, model en bouwjaar door, dan regelen wij de dekking voor de overgangsperiode én de polis op het Portugese kenteken.',
    formPlaceholder:
      'Bijvoorbeeld: merk, model, bouwjaar, brandstof, huidige kilometerstand, geplande datum van invoer, en of u al een NIF en verblijfsregistratie heeft.',
    sections: `
<section class="section plain" aria-labelledby="tussenperiode">
  <div class="container narrow article-body">
    <h2 id="tussenperiode">De periode tussen twee kentekens</h2>
    <p>Dit is het stuk waar de meeste mensen zich verkijken. U rijdt de auto naar Portugal, meldt zich aan bij de gemeente, en begint aan de legalisatie. Die procedure duurt weken. In die weken staat de auto nog op Nederlands kenteken, en rijdt u er dagelijks mee rond in uw nieuwe woonland.</p>
    <p>Twee dingen lopen daar tegelijk mis:</p>
    <ul>
      <li><strong>Uw Nederlandse polis is gesloten op basis van ingezetenschap in Nederland.</strong> Zodra u zich uitschrijft, klopt de grondslag van die verzekering niet meer met de werkelijkheid. Verzekeraars hanteren daar verschillende termijnen en voorwaarden voor, maar &ldquo;het loopt nog wel even door&rdquo; is geen dekking waar u op moet bouwen.</li>
      <li><strong>De Portugese verzekeraar kan pas een reguliere polis afgeven op een Portugees kenteken.</strong> Het kenteken is het identificerende gegeven in het systeem. Zolang dat er niet is, is er ook geen normale polis.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Wat wel werkt</span>
      Meld de emigratie bij uw Nederlandse verzekeraar met de exacte datum, en vraag schriftelijk of en hoe lang de dekking na uitschrijving doorloopt. Is dat antwoord korter dan de doorlooptijd van de legalisatie — en dat is het vaak — dan regelen wij dekking voor het gat, en zetten de definitieve polis klaar op de dag dat de Portugese matrícula wordt afgegeven. De volgorde is essentieel: nooit eerst opzeggen en dan kijken.
    </div>
    <p>Vraag uw Nederlandse verzekeraar bij de beëindiging tegelijk om de <strong>royementsverklaring</strong>. Die heeft u nodig om uw schadevrije jaren mee te nemen, en het is aanzienlijk moeilijker om hem maanden later alsnog los te krijgen. Zie <a href="/nl/schadevrije-jaren-meenemen-portugal/">schadevrije jaren meenemen naar Portugal</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="isv">
  <div class="container narrow article-body">
    <h2 id="isv">ISV en de IMT-procedure in hoofdlijnen</h2>
    <p>Wij zijn verzekeringsagent en geen douane-expediteur, dus dit is de schets die u nodig heeft om te beslissen — niet de volledige handleiding. Voor de uitvoering werkt vrijwel iedereen met een <em>despachante</em>.</p>
    <h3>ISV — Imposto sobre Veículos</h3>
    <p>De Portugese registratiebelasting, te betalen bij de eerste registratie in Portugal. De berekening rust op twee componenten: <strong>cilinderinhoud</strong> en <strong>CO₂-uitstoot</strong>. Op de uitkomst wordt een aftrek toegepast naar rato van de leeftijd van het voertuig. Dat verklaart de twee uitersten die iedereen kent: een jonge zware diesel kan een aanslag opleveren die in de duizenden loopt, terwijl een oudere kleine benzineauto er relatief goedkoop doorheen komt.</p>
    <p>Verhuist u definitief naar Portugal, dan kan er een <strong>vrijstelling bij overbrenging van de gewone verblijfplaats</strong> gelden. Daar hangen strikte voorwaarden aan — onder meer hoe lang u het voertuig vóór de verhuizing op naam had, en hoe lang u het daarna moet houden — en de aanvraag is aan termijnen gebonden die beginnen te lopen zodra u zich registreert. Wie eerst gaat rijden en later informeert, is te laat.</p>
    <h3>Het traject bij het IMT</h3>
    <ol>
      <li>Aangifte bij de douane (<em>Alfândega</em>) en afhandeling van de ISV, of de aanvraag van de vrijstelling.</li>
      <li>Technische keuring: <em>Inspeção Técnica</em> gericht op import, met controle op de Europese conformiteit van het voertuig.</li>
      <li>Homologatie bij het IMT en toekenning van het Portugese kenteken.</li>
      <li>Afgifte van het <em>Documento Único Automóvel</em>.</li>
    </ol>
    <p>Zodra de matrícula bekend is, gaat de Portugese polis in. Dat is het moment waarop de dekking definitief wordt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="loont-het">
  <div class="container narrow article-body">
    <h2 id="loont-het">Wanneer importeren niet loont</h2>
    <p>Wij zien mensen aan de import beginnen uit gehechtheid aan de auto, en er halverwege achter komen dat de rekening niet uitkomt. De afweging is meestal binnen een uur te maken.</p>
    <p><strong>Importeren loont doorgaans niet als:</strong></p>
    <ul>
      <li>Het een relatief jonge auto is met een grote motor of een hoge CO₂-waarde. De ISV kan dan een substantieel deel van de waarde van de auto beslaan.</li>
      <li>U niet in aanmerking komt voor de vrijstelling bij verhuizing, bijvoorbeeld omdat u de auto te kort op naam had.</li>
      <li>Het model in Portugal weinig verkocht is. Onderdelen en gespecialiseerd onderhoud zijn dan duurder en trager, en dat blijft doorlopen zolang u de auto houdt.</li>
      <li>De auto zwaar en breed is. Wie in de westelijke Algarve in een dorpskern woont, of regelmatig het binnenland in moet, merkt dat dagelijks.</li>
    </ul>
    <p><strong>Importeren loont doorgaans wel als:</strong> de auto ouder is en de leeftijdsaftrek de ISV flink drukt, u de vrijstelling krijgt, of het een model betreft dat in Portugal juist relatief duur is. Reken het door vóór vertrek — een online ISV-simulatie kost tien minuten en heeft ons meer klanten van een verkeerde beslissing afgehouden dan enig ander advies op deze pagina.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="rijbewijs">
  <div class="container narrow article-body">
    <h2 id="rijbewijs">Uw rijbewijs</h2>
    <p>Uw Nederlandse rijbewijs is als EU-rijbewijs geldig in Portugal en u hoeft het niet om te wisselen om te mogen rijden. Er is wel een administratieve verplichting die daarnaast staat: als ingezetene registreert u uw EU-rijbewijs bij het <strong>IMT</strong>. Dat is geen omwisseling — u houdt uw document — maar een registratie, en er staat een termijn op die begint te lopen bij uw verblijfsregistratie.</p>
    <p>Waarom dit op een verzekeringspagina staat: bij een schade wordt gekeken of de bestuurder bevoegd was. Een geldig maar niet-geregistreerd rijbewijs levert in de regel geen dekkingsprobleem op, maar het is wel het soort administratieve losse eind dat een schadebehandeling vertraagt op het moment dat u haast heeft. Loopt uw rijbewijs af terwijl u hier woont, dan verlengt u het bovendien niet meer in Nederland maar bij het IMT, en dan is de registratie geen keuze meer.</p>
  </div>
</section>`,
    faqTitle: 'Auto importeren — veelgestelde vragen',
    faq: [
      {
        q: 'Ben ik verzekerd terwijl mijn auto nog op Nederlands kenteken staat?',
        a: '<p>Alleen zolang uw Nederlandse verzekeraar dat schriftelijk bevestigt. Die polis is gesloten op basis van ingezetenschap in Nederland; na uitschrijving uit de BRP klopt die grondslag niet meer. Termijnen verschillen per verzekeraar. Vraag het antwoord op schrift en, als het korter is dan de doorlooptijd van de legalisatie, laat de tussenperiode apart afdekken. Zeg nooit op voordat het vervolg vaststaat.</p>',
      },
      {
        q: 'Hoe wordt de ISV berekend?',
        a: '<p>Op basis van cilinderinhoud en CO₂-uitstoot, met een aftrek naar rato van de leeftijd van het voertuig. Daardoor lopen de bedragen ver uiteen: een jonge zware auto kan duizenden euro\'s kosten, een oudere kleine benzineauto aanzienlijk minder. Reken het vooraf door met een simulatie voordat u besluit de auto mee te nemen.</p>',
      },
      {
        q: 'Kan ik vrijstelling van ISV krijgen bij verhuizing?',
        a: '<p>Er bestaat een vrijstelling bij overbrenging van de gewone verblijfplaats naar Portugal, met strikte voorwaarden over hoe lang u het voertuig vóór de verhuizing op naam had en hoe lang u het daarna moet aanhouden. De aanvraag is aan termijnen gebonden die gaan lopen zodra u zich registreert. Informeer erna is te laat — regel dit vóór of direct bij aankomst, met een despachante.</p>',
      },
      {
        q: 'Hoe lang duurt de legalisatie?',
        a: '<p>Reken op weken, niet dagen, en houd rekening met uitloop als de conformiteitsdocumentatie van het voertuig moet worden opgevraagd. Plan uw verzekeringsdekking op de langere variant: een polis die te vroeg afloopt is een probleem, een dekking die iets te lang doorloopt niet.</p>',
      },
      {
        q: 'Moet ik mijn Nederlandse rijbewijs omwisselen?',
        a: '<p>Omwisselen hoeft niet — een EU-rijbewijs blijft geldig. Wel registreert u het als ingezetene bij het IMT, binnen de termijn die gaat lopen bij uw verblijfsregistratie. Verloopt uw rijbewijs terwijl u in Portugal woont, dan verlengt u het bij het IMT en niet meer in Nederland.</p>',
      },
    ],
    related: [
      { url: '/nl/schadevrije-jaren-meenemen-portugal/', label: 'Schadevrije jaren meenemen naar Portugal' },
      { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
      { url: '/nl/zorgverzekering-portugal/', label: 'Zorgverzekering in Portugal' },
    ],
    article: {
      tag: 'Auto',
      excerpt:
        'De dekking tussen Nederlands en Portugees kenteken, ISV en de IMT-procedure in hoofdlijnen, wanneer importeren niet loont, en de registratie van uw rijbewijs.',
      readingTime: 9,
      dateLabel: 'Augustus 2026',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 5. Schadevrije jaren — short page, specific demand, direct effect on the
   *    premium. Says bluntly where independent brokerage is worth money.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'schadevrije-jaren-meenemen-portugal',
    url: '/nl/schadevrije-jaren-meenemen-portugal/',
    title: 'Schadevrije jaren meenemen naar Portugal: de royementsverklaring | Adler & Rochefort',
    description:
      'Wat de royementsverklaring is, hoe u hem opvraagt en wat erin moet staan. Portugese verzekeraars gaan er verschillend mee om — precies daar zit het verschil in uw premie.',
    keywords:
      'schadevrije jaren Portugal, royementsverklaring, bonus malus Portugal, autoverzekering Portugal premie, schadeverleden meenemen buitenland',
    eyebrow: 'Schadevrije jaren',
    h1: 'Schadevrije jaren meenemen naar Portugal',
    standfirst:
      'Vijftien jaar zonder schade is in Nederland veel geld waard. In Portugal is het dat ook — maar alleen als u het kunt bewijzen, bij een verzekeraar die het accepteert. Beide voorwaarden zijn minder vanzelfsprekend dan ze klinken.',
    heroMeta:
      'Onafhankelijk verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: {},
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Schadevrije jaren meenemen' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'Vraag de royementsverklaring op vóór u opzegt. Achteraf is het aanzienlijk lastiger.',
    formBranch: 'Autoverzekering',
    formSubject: 'schadevrije jaren en autoverzekering',
    formIntro:
      'Heeft u een royementsverklaring, of kunt u die opvragen? Stuur ons het aantal schadevrije jaren, dan leggen wij de aanvraag voor bij de verzekeraars die het schadeverleden erkennen.',
    formPlaceholder:
      'Bijvoorbeeld: aantal schadevrije jaren, naam van uw Nederlandse verzekeraar, of u de royementsverklaring al heeft, merk en model van de auto.',
    sections: `
<section class="section plain" aria-labelledby="wat-is-het">
  <div class="container narrow article-body">
    <h2 id="wat-is-het">Wat de royementsverklaring is</h2>
    <p>Een royementsverklaring is het document waarmee uw Nederlandse verzekeraar bevestigt dat de polis is beëindigd en hoeveel schadevrije jaren u heeft opgebouwd. In Nederland gaat dat meestal automatisch tussen verzekeraars onderling via Roy-data. Naar het buitenland gaat het niet automatisch — daar moet u het papier zelf hebben.</p>
    <p>Wat er in moet staan, wil een Portugese verzekeraar er iets mee kunnen:</p>
    <ul>
      <li>Uw naam en geboortedatum, exact zoals in uw paspoort.</li>
      <li>De begin- en einddatum van de verzekering.</li>
      <li>Het <strong>aantal schadevrije jaren</strong>, uitgedrukt in jaren.</li>
      <li>Het aantal en de aard van de eventuele geclaimde schades, met datum.</li>
      <li>Het kenteken en de dekking (WA, WA-plus, allrisk).</li>
      <li>Bij voorkeur in het Engels, of anders met een vertaling.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Het moment waarop u hem opvraagt</span>
      Vraag de verklaring aan <strong>op het moment dat u de polis beëindigt</strong>, in dezelfde e-mail. Nederlandse verzekeraars geven hem dan zonder discussie af. Vraagt u er een jaar later om, vanuit Portugal, zonder Nederlands adres en zonder actieve relatie, dan wordt het een kwestie van klantenservice, doorverbinden en wachten. Het document is hetzelfde; de moeite is een veelvoud.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="acceptatie">
  <div class="container narrow article-body">
    <h2 id="acceptatie">Portugese verzekeraars gaan hier verschillend mee om</h2>
    <p>Dit is het punt van de pagina, en wij zeggen het zonder omhaal: <strong>er is geen uniforme regel, en het verschil tussen verzekeraars is in euro's uit te drukken.</strong></p>
    <p>Portugal kent geen centraal register van buitenlands schadeverleden. Elke verzekeraar bepaalt zijn eigen acceptatiebeleid, en dat valt grofweg in drie categorieën:</p>
    <div class="table-wrap">
      <table class="nl-table">
        <thead>
          <tr><th scope="col">Beleid</th><th scope="col">Wat dat in de praktijk betekent</th></tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Beleid">Volledige erkenning</td>
            <td data-label="Betekenis">Uw schadevrije jaren worden overgenomen en u begint op de bijbehorende trede. Het premieverschil met een startende bestuurder is aanzienlijk.</td>
          </tr>
          <tr>
            <td data-label="Beleid">Gedeeltelijke erkenning</td>
            <td data-label="Betekenis">Er wordt een korting toegekend, maar niet de volledige opbouw — bijvoorbeeld gemaximeerd op een aantal jaren, of als eenmalige instapkorting.</td>
          </tr>
          <tr>
            <td data-label="Beleid">Geen erkenning</td>
            <td data-label="Betekenis">U begint op de instaptrede alsof u nooit verzekerd bent geweest, en bouwt de korting hier opnieuw op.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Voor iemand met een lange schadevrije historie kan het verschil tussen de eerste en de derde categorie oplopen tot enkele honderden euro's per jaar, elk jaar, en cumulatief zolang u die auto rijdt.</p>
    <div class="callout">
      <span class="callout-label">Waarom een onafhankelijke agent hier geld waard is</span>
      Dit is precies het geval waarin het uitmaakt dat wij niet aan één maatschappij gebonden zijn. Wie rechtstreeks bij één verzekeraar aanklopt, krijgt het beleid van die ene verzekeraar en heeft geen idee wat de rest zou doen. Wij leggen dezelfde royementsverklaring voor aan meerdere maatschappijen en kiezen degene die uw historie het zwaarst laat meewegen. Dat is geen onderhandelingstruc, het is simpelweg weten wie wat accepteert — en dat is de nuchterste vorm van waarde die een tussenpersoon kan leveren.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="geen-historie">
  <div class="container narrow article-body">
    <h2 id="geen-historie">Als u geen verklaring kunt overleggen</h2>
    <p>Het komt voor: de polis is jaren geleden opgezegd, de verzekeraar is gefuseerd, of de auto stond op naam van een partner of van de zaak. Dan is de uitkomst voorspelbaar — u wordt behandeld als een bestuurder zonder historie en betaalt de instappremie.</p>
    <p>Wat u in die situatie wel kunt doen:</p>
    <ul>
      <li><strong>Kijk of er iets anders is.</strong> Een oude polisbladen, een verklaring van een leasemaatschappij, of een uittreksel van een werkgever met wagenpark kan soms als onderbouwing dienen. Niet elke verzekeraar accepteert het, maar het kost een e-mail.</li>
      <li><strong>Stond de auto op naam van uw partner?</strong> Dan staat het schadeverleden ook op die naam. Zet de Portugese polis op dezelfde naam en verzeker de ander mee als bestuurder — dan telt de opbouw wel.</li>
      <li><strong>Accepteer de eerste jaren en herzie daarna.</strong> Portugese verzekeraars bouwen hun eigen bonus-malus op. Na twee of drie schadevrije jaren hier is de premie opnieuw te vergelijken, en dan telt uw lokale historie wel volledig mee.</li>
    </ul>
  </div>
</section>`,
    faqTitle: 'Schadevrije jaren — veelgestelde vragen',
    faq: [
      {
        q: 'Hoe vraag ik een royementsverklaring aan?',
        a: '<p>Bij uw Nederlandse verzekeraar, bij voorkeur in dezelfde e-mail waarmee u de polis beëindigt wegens emigratie. Vraag expliciet om een verklaring met het aantal schadevrije jaren, de begin- en einddatum, het kenteken, de dekkingsvorm en een opgave van eventuele schades. Vraag hem in het Engels als dat kan.</p>',
      },
      {
        q: 'Erkennen Portugese verzekeraars mijn Nederlandse schadevrije jaren?',
        a: '<p>Sommige wel, sommige gedeeltelijk, sommige niet. Portugal kent geen centraal register van buitenlands schadeverleden, dus elke verzekeraar bepaalt zijn eigen beleid. Dat verschil is in geld uit te drukken en is de reden om dezelfde verklaring bij meerdere maatschappijen voor te leggen in plaats van bij één aan te kloppen.</p>',
      },
      {
        q: 'Hoeveel scheelt het in premie?',
        a: '<p>Voor iemand met een lange schadevrije historie kan het verschil tussen volledige erkenning en geen erkenning oplopen tot enkele honderden euro\'s per jaar — en dat elk jaar opnieuw, zolang u de auto rijdt. Het exacte bedrag hangt af van het voertuig, uw leeftijd en de gekozen dekking.</p>',
      },
      {
        q: 'Ik ben mijn royementsverklaring kwijt. Kan ik hem nog krijgen?',
        a: '<p>Meestal wel, maar het kost meer moeite: zonder Nederlands adres en zonder lopende relatie wordt het een kwestie van klantenservice en wachttijd. Verzekeraars bewaren de gegevens een aantal jaren. Fusies en overnames maken het lastiger — vraag dan bij de rechtsopvolger.</p>',
      },
      {
        q: 'De auto stond op naam van mijn partner. Wat nu?',
        a: '<p>Dan staat het schadeverleden op die naam. Zet de Portugese polis op dezelfde naam en neem de ander op als meeverzekerde bestuurder; dan telt de opgebouwde historie wel mee. Andersom werkt het niet — schadevrije jaren zijn persoonsgebonden, niet gebonden aan het huishouden.</p>',
      },
    ],
    related: [
      { url: '/nl/auto-importeren-portugal-verzekering/', label: 'Auto importeren naar Portugal' },
      { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
    ],
    article: {
      tag: 'Auto',
      excerpt:
        'De royementsverklaring: wat erin moet staan, wanneer u hem opvraagt, en waarom het per Portugese verzekeraar honderden euro\'s scheelt of uw historie wordt erkend.',
      readingTime: 6,
      dateLabel: 'Augustus 2026',
    },
  },
];
