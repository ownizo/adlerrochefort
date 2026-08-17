import { BREADCRUMB_ROOT } from './shared.mjs';

const CAT = { name: 'Zorg', url: '/nl/verzekeringen-portugal/#zorg' };

export const HEALTH_PAGES = [
  /* ─────────────────────────────────────────────────────────────────────────
   * 1. Uitschrijven uit Nederland — the deadline page. Built first because it
   *    is the one with a hard date attached and the most actionable advice in
   *    the cluster: do not let Dutch cover lapse before Portuguese cover runs.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'uitschrijven-nederland-zorgverzekering-portugal',
    url: '/nl/uitschrijven-nederland-zorgverzekering-portugal/',
    title: 'Uitschrijven uit Nederland: wat gebeurt er met uw zorgverzekering? | Adler & Rochefort',
    description:
      'Bij uitschrijving uit de BRP eindigt uw Nederlandse zorgverzekering. Wat precies stopt, op welke datum, en hoe u voorkomt dat u onverzekerd raakt of opnieuw wachttijden krijgt.',
    keywords:
      'uitschrijven BRP zorgverzekering, zorgverzekering opzeggen emigratie Portugal, onverzekerd na uitschrijving, zorgverzekering Portugal Nederlanders, wachttijden zorgverzekering Portugal',
    eyebrow: 'Uitschrijven en zorgverzekering',
    h1: 'Uitschrijven uit Nederland: wat gebeurt er met uw zorgverzekering?',
    standfirst:
      'Uw Nederlandse zorgverzekering eindigt bij uitschrijving uit de BRP. Niet bij aankomst in Portugal, niet bij het opzeggen van uw huurcontract — bij de uitschrijving. Tussen die datum en de dag dat uw Portugese dekking ingaat, zit bij veel mensen een gat dat niemand ze heeft aangewezen.',
    heroMeta:
      'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: {},
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Uitschrijven en zorgverzekering' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'Laat uw Nederlandse dekking niet aflopen voordat de Portugese loopt.',
    formBranch: 'Zorgverzekering',
    formSubject: 'uitschrijving en zorgverzekering',
    formIntro:
      'Weet u al wanneer u zich uitschrijft? Geef de datum door, dan rekenen wij terug wanneer de aanvraag in gang moet worden gezet om een gat te voorkomen.',
    formPlaceholder:
      'Bijvoorbeeld: geplande datum van uitschrijving, leeftijd van de te verzekeren personen, of u AOW of een Nederlands pensioen ontvangt, en of u al een NIF heeft.',
    sections: `
<section class="section plain" aria-labelledby="wat-eindigt">
  <div class="container narrow article-body">
    <h2 id="wat-eindigt">Wat er precies eindigt, en op welke datum</h2>
    <p>De Nederlandse zorgverzekeringsplicht hangt aan ingezetenschap, niet aan uw nationaliteit en niet aan waar u uw post laat bezorgen. Schrijft u zich uit uit de Basisregistratie Personen, dan bent u in beginsel geen verzekeringsplichtige meer voor de Zorgverzekeringswet. Uw zorgverzekeraar beëindigt de polis per de datum van uitschrijving.</p>
    <p>Drie dingen die daarbij misgaan, in volgorde van hoe vaak wij ze zien:</p>
    <ul>
      <li><strong>De einddatum is de uitschrijfdatum, niet het einde van de maand.</strong> Schrijft u zich op de 12e uit, dan loopt de dekking tot en met de 12e. Premie over de rest van de maand krijgt u terug — dekking niet.</li>
      <li><strong>De aanvullende verzekering en de tandartsdekking stoppen tegelijk.</strong> Dat is dezelfde overeenkomst. Wie ervan uitgaat dat de aanvullende polis los doorloopt, komt daar bij de eerste rekening achter.</li>
      <li><strong>Uw EHIC verliest zijn functie.</strong> De Europese kaart dekt tijdelijk verblijf buiten het land waar u verzekerd bent. Zodra u ingezetene van Portugal bent, is Portugal geen buitenland meer en is de kaart voor uw eigen woonland geen dekking.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Het punt waar het misgaat</span>
      Meld de emigratie bij uw zorgverzekeraar met de exacte uitschrijfdatum, en vraag om een schriftelijke bevestiging van de einddatum. Die bevestiging heeft u later nodig om bij een Portugese verzekeraar aan te tonen dat u aansluitend verzekerd was.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="volgorde">
  <div class="container narrow article-body">
    <h2 id="volgorde">De juiste volgorde</h2>
    <p>De stappen hebben een vaste afhankelijkheid: elke stap vraagt het bewijs van de vorige. Wie ze door elkaar doet, loopt vast bij een loket en verliest weken.</p>
    <ol>
      <li><strong>Registratie van verblijf.</strong> Bij de câmara municipal van uw gemeente, als EU-burger. U krijgt het <em>Certificado de Registo de Cidadão da União Europeia</em>. Dit is uw bewijs van verblijf en de basis voor alles wat volgt.</li>
      <li><strong>NIF — het fiscaal nummer.</strong> Zonder NIF kunt u in Portugal vrijwel niets: geen bankrekening, geen huurcontract op naam, en geen verzekeringspolis. Veel mensen hebben deze al vóór de verhuizing, via een fiscaal vertegenwoordiger.</li>
      <li><strong>Inschrijving bij het centro de saúde.</strong> Het gezondheidscentrum in uw woonplaats, met uw verblijfsregistratie en NIF.</li>
      <li><strong>Número de utente.</strong> Uw patiëntnummer binnen het SNS, dat bij die inschrijving wordt toegekend. Dit is wat u nodig heeft om een huisarts toegewezen te krijgen.</li>
      <li><strong>Particuliere polis.</strong> Deze staat bewust als laatste in het rijtje, maar moet als eerste worden aangevraagd — zie hieronder. De ingangsdatum plant u vooruit, de aanvraag niet.</li>
    </ol>
    <p>Ontvangt u AOW of een Nederlands pensioen, dan komt daar de route via het CAK bij: u betaalt een verdragsbijdrage en ontvangt een S1-formulier waarmee u zich inschrijft. Wat die route wel en niet oplevert, staat op onze pagina over het <a href="/nl/s1-formulier-cak-portugal/">S1-formulier en het CAK</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="continuiteit">
  <div class="container narrow article-body">
    <h2 id="continuiteit">Het advies dat het meeste geld scheelt: laat de dekking niet aflopen</h2>
    <p>Dit is het belangrijkste op deze pagina, en het is ook het makkelijkst te missen omdat niemand er een brief over stuurt.</p>
    <p>Portugese zorgverzekeraars hanteren wachttijden — <em>períodos de carência</em>. Een periode aan het begin van de polis waarin bepaalde zorg nog niet vergoed wordt. De duur verschilt per dekking en per verzekeraar: kort voor consulten, langer voor operaties, en aanzienlijk langer voor bevalling. Wie tijdens die periode zorg nodig heeft, betaalt zelf.</p>
    <p>Verzekeraars zijn onder voorwaarden bereid rekening te houden met aaneengesloten voorgaande dekking. Het bewijs dat u onafgebroken verzekerd bent geweest, is precies de reden waarom u die schriftelijke bevestiging van uw Nederlandse verzekeraar nodig heeft. Of er wordt meegeteld, hoeveel, en onder welke voorwaarden, verschilt sterk — dat is geen aanname die u zelf moet doen en ook geen belofte die wij hier in het algemeen kunnen geven. Wij vragen het per verzekeraar na en leggen het antwoord schriftelijk vast voordat u tekent.</p>
    <div class="callout">
      <span class="callout-label">Wat dit concreet betekent</span>
      Valt er een gat van twee maanden tussen uw Nederlandse einddatum en uw Portugese ingangsdatum, dan is de kans reëel dat u de wachttijden volledig opnieuw doorloopt. Sluit het gat en u houdt in het gunstigste geval uw opgebouwde positie. <strong>Begin de aanvraag daarom zes tot acht weken vóór de uitschrijving</strong>, niet erna: de medische acceptatie kost tijd, en een polis kan niet met terugwerkende kracht ingaan.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="reisverzekering">
  <div class="container narrow article-body">
    <h2 id="reisverzekering">Een reisverzekering is geen oplossing</h2>
    <p>De verleiding is begrijpelijk: een doorlopende reisverzekering is snel geregeld, goedkoop, en dekt medische kosten in het buitenland. Als overbrugging klinkt dat logisch. Het werkt alleen niet, om twee redenen.</p>
    <p><strong>Ten eerste dekt een reisverzekering tijdelijk verblijf.</strong> De voorwaarden gaan uit van een reis met een terugkeer. Zodra u ingezetene bent van het land waar u zich bevindt, is de grondslag van de polis weg. Een schade die zich voordoet nadat u zich heeft ingeschreven in Portugal, wordt bij de beoordeling niet als reis behandeld.</p>
    <p><strong>Ten tweede telt hij niet als bewijs van dekking voor verblijfsdoeleinden.</strong> Waar een instantie om bewijs van ziektekostendekking vraagt, wordt een reispolis met een looptijd van enkele weken en een uitsluiting voor ingezetenen niet geaccepteerd. Ook niet als de dekkingsbedragen hoog zijn.</p>
    <p>De overbrugging die wel werkt, is banaal: zorg dat de Portugese polis ingaat op of vóór de dag dat de Nederlandse eindigt. Dat vraagt planning, geen extra product.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="wat-wij-doen">
  <div class="container narrow article-body">
    <h2 id="wat-wij-doen">Wat wij hierin doen</h2>
    <p>Wij zijn verzekeringsagent in Lagos en niet gebonden aan één verzekeraar. Voor deze specifieke situatie betekent dat het volgende:</p>
    <ul>
      <li>Wij rekenen terug vanaf uw uitschrijfdatum wanneer de aanvraag moet lopen, zodat de ingangsdatum aansluit.</li>
      <li>Wij vragen per verzekeraar na hoe uw voorgaande Nederlandse dekking wordt behandeld en of dat de wachttijden beïnvloedt, en geven u het antwoord op schrift.</li>
      <li>Wij leggen de Portugese polisvoorwaarden in het Engels uit vóór ondertekening, inclusief de uitsluitingen die u niet wilt ontdekken bij de eerste claim.</li>
    </ul>
    <p>Wat verstandig is, hangt af van uw leeftijd, uw medische voorgeschiedenis en of de CAK-route voor u openstaat. Dat is per persoon anders, en daarom staat het antwoord niet op deze pagina maar in de vergelijking die u van ons krijgt.</p>
  </div>
</section>`,
    faqTitle: 'Uitschrijven en zorgverzekering — veelgestelde vragen',
    faq: [
      {
        q: 'Op welke datum stopt mijn Nederlandse zorgverzekering precies?',
        a: '<p>Op de datum van uw uitschrijving uit de BRP, niet aan het einde van die maand. Schrijft u zich op de 12e uit, dan bent u vanaf de 13e niet meer gedekt. Te veel betaalde premie krijgt u terug, maar de dekking loopt niet door. Vraag uw zorgverzekeraar altijd om een schriftelijke bevestiging van de einddatum — die heeft u later nodig als bewijs van aaneengesloten dekking.</p>',
      },
      {
        q: 'Kan ik mijn Nederlandse zorgverzekering aanhouden na emigratie?',
        a: '<p>In beginsel niet. De Zorgverzekeringswet knoopt aan bij ingezetenschap of het verrichten van arbeid in Nederland. Vervalt beide, dan vervalt de verzekeringsplicht en daarmee de polis. Blijft u wel in Nederland werken of houdt u een Nederlandse uitkering, dan kan de situatie anders liggen; dat is een vraag voor uw zorgverzekeraar of de SVB, niet iets om op aan te nemen.</p>',
      },
      {
        q: 'Krijg ik in Portugal opnieuw wachttijden?',
        a: '<p>Vaak wel, maar niet altijd volledig. Portugese verzekeraars hanteren wachttijden aan het begin van een polis, en zijn onder voorwaarden bereid aaneengesloten voorgaande dekking mee te wegen. Hoe dat uitpakt, verschilt per verzekeraar en per dekking. Een onderbreking tussen uw Nederlandse einddatum en uw Portugese ingangsdatum maakt de kans op een volledige herstart aanzienlijk groter. Wij vragen dit vooraf per verzekeraar na.</p>',
      },
      {
        q: 'Volstaat een doorlopende reisverzekering als overbrugging?',
        a: '<p>Nee. Een reisverzekering dekt tijdelijk verblijf met een voorziene terugkeer. Zodra u ingezetene van Portugal bent, valt de grondslag van die polis weg. Hij wordt ook niet geaccepteerd als bewijs van ziektekostendekking voor verblijfsdoeleinden. De werkbare overbrugging is de Portugese polis laten ingaan op of vóór de dag dat de Nederlandse eindigt.</p>',
      },
      {
        q: 'Hoe lang van tevoren moet ik de Portugese verzekering aanvragen?',
        a: '<p>Reken op zes tot acht weken vóór uw uitschrijving. De medische acceptatie — het gezondheidsformulier en eventuele navraag bij een arts — kost tijd, en een polis kan niet met terugwerkende kracht ingaan. Wie na de uitschrijving begint, heeft per definitie een gat.</p>',
      },
    ],
    related: [
      { url: '/nl/zorgverzekering-portugal/', label: 'Zorgverzekering in Portugal — het volledige overzicht' },
      { url: '/nl/s1-formulier-cak-portugal/', label: 'Het S1-formulier en het CAK: wat het wel en niet dekt' },
      { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
    ],
    article: {
      tag: 'Zorg',
      excerpt:
        'Uw Nederlandse zorgverzekering eindigt op de dag van uitschrijving uit de BRP. Wat er precies stopt, in welke volgorde u alles regelt, en waarom een gat in de dekking u de wachttijden opnieuw kost.',
      readingTime: 8,
      dateLabel: 'Augustus 2026',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 2. Zorgverzekering Portugal — the pillar. Pairs with the English expat
   *    health article, which covers the same ground for a wider audience.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'zorgverzekering-portugal',
    url: '/nl/zorgverzekering-portugal/',
    title: 'Zorgverzekering in Portugal voor Nederlanders | Adler & Rochefort',
    description:
      'Hoe het SNS werkt en waar het in de praktijk tekortschiet, welke particuliere verzekeraars relevant zijn, wachttijden en medische acceptatie, en de mutualistische route bij hogere leeftijd.',
    keywords:
      'zorgverzekering Portugal, particuliere zorgverzekering Portugal, SNS Portugal, Médis Allianz APRIL AdvanceCare, wachttijden zorgverzekering Portugal, zorgverzekering Algarve Nederlanders',
    eyebrow: 'Zorgverzekering Portugal',
    h1: 'Zorgverzekering in Portugal: wat u werkelijk nodig heeft',
    standfirst:
      'Portugal heeft een publiek zorgstelsel dat op papier compleet is en in de praktijk op één punt vastloopt: tijd. Deze pagina zet uiteen wat het SNS wel doet, waar een particuliere polis het verschil maakt, en welke keuzes u heeft als uw leeftijd of medische voorgeschiedenis de acceptatie lastig maakt.',
    heroMeta:
      'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: { en: '/en/blog/health-insurance-expats-portugal/' },
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Zorgverzekering Portugal' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'Het SNS is een vangnet, geen afspraak binnen een redelijke termijn.',
    formBranch: 'Zorgverzekering',
    formSubject: 'zorgverzekering Portugal',
    formIntro:
      'Vertel ons de leeftijden en of er iets medisch te melden is, dan leggen wij u meerdere verzekeraars naast elkaar — inclusief de mutualistische route als reguliere acceptatie lastig ligt.',
    formPlaceholder:
      'Bijvoorbeeld: leeftijd van de te verzekeren personen, bestaande aandoeningen, of u een S1 van het CAK heeft, en in welke gemeente u woont.',
    sections: `
<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">Het SNS, en waar het in de praktijk tekortschiet</h2>
    <p>Het <em>Serviço Nacional de Saúde</em> is het Portugese publieke stelsel. Als ingezetene met een verblijfsregistratie schrijft u zich in bij uw <em>centro de saúde</em>, krijgt u een <em>número de utente</em> en heeft u toegang op dezelfde voorwaarden als een Portugese ingezetene. Voor spoedeisende zorg is het stelsel solide en de kwaliteit van de behandeling is niet het probleem.</p>
    <p>Het probleem is de wachttijd voor alles wat niet acuut is. Een verwijzing naar een specialist, een MRI, een staaroperatie of een knievervanging: daar staan in delen van het land wachtlijsten voor die in maanden worden gerekend en soms in jaren. In de Algarve komt daar een tweede factor bij — de bevolkingsdichtheid schommelt met het seizoen, en de capaciteit is afgestemd op het jaargemiddelde, niet op augustus.</p>
    <p>Een derde punt dat zelden in brochures staat: continuïteit. Een vaste huisarts krijgen (<em>médico de família</em>) is in sommige gemeenten eenvoudig en in andere een kwestie van op een lijst staan. Zonder vaste huisarts wordt elk consult een nieuw begin.</p>
    <div class="callout">
      <span class="callout-label">De juiste framing</span>
      Een particuliere polis vervangt het SNS niet en hoeft dat ook niet te doen. Vrijwel iedereen die wij verzekeren houdt de SNS-inschrijving aan voor spoed en medicatie, en gebruikt de particuliere dekking voor alles waar anders een wachtlijst voor staat.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="netwerk">
  <div class="container narrow article-body">
    <h2 id="netwerk">Het particuliere netwerk in de Algarve</h2>
    <p>Een polis is precies zoveel waard als het netwerk bij u in de buurt. Landelijke dekking betekent niet automatisch dat de kliniek waar u naartoe zou gaan, gecontracteerd is.</p>
    <p>Voor de westelijke Algarve draait het in de praktijk om de CUF-eenheden in Alvor, Lagos en Gambelas (voorheen HPA), naast de particuliere klinieken in Lagos, Portimão en Faro. CUF heeft in januari 2026 75% van Grupo HPA Saúde overgenomen; sinds juni 2026 opereren die eenheden onder de merknaam CUF. De gebouwen, de teams en de locaties zijn dezelfde gebleven.</p>
    <div class="callout">
      <span class="callout-label">Waarom dit voor uw polis uitmaakt</span>
      Die eenheden werden vóór de overname door elke verzekeraar afzonderlijk gecontracteerd. Een afspraak die met HPA bestond, is daarmee niet automatisch dezelfde afspraak, tegen dezelfde eigen bijdrage, onder CUF. Wij bevestigen de actuele netwerkstatus en het vergoedingsniveau bij de verzekeraar voor úw postcode, in plaats van ervan uit te gaan dat de situatie van vóór de fusie nog geldt.
    </div>
    <p>Woont u in het binnenland — Monchique, Aljezur, of verder naar het noorden in de Alentejo — dan is de vraag niet welk ziekenhuis het beste is, maar hoe ver u rijdt en of dat gecontracteerd is. Dat verschuift het antwoord soms van een netwerkpolis naar een polis die op restitutiebasis werkt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="acceptatie">
  <div class="container narrow article-body">
    <h2 id="acceptatie">Wachttijden en medische acceptatie</h2>
    <p>Dit zijn de twee mechanismen die bepalen of u krijgt wat u denkt te kopen.</p>
    <h3>Wachttijden (períodos de carência)</h3>
    <p>Een periode aan het begin van de polis waarin bepaalde zorg nog niet vergoed wordt. Kort voor gewone consulten, langer voor operaties, en aanzienlijk langer voor bevalling. De duur verschilt per verzekeraar en per dekking, en spoedeisende zorg valt er doorgaans buiten. Kwam u aaneengesloten uit een eerdere verzekering, dan is er in sommige gevallen ruimte om die mee te laten wegen — reden te meer om <a href="/nl/uitschrijven-nederland-zorgverzekering-portugal/">geen gat te laten vallen bij uw uitschrijving</a>.</p>
    <h3>Medische acceptatie</h3>
    <p>U vult een gezondheidsverklaring in. Bestaande aandoeningen worden veelal uitgesloten, soms tegen een toeslag alsnog meeverzekerd, en bij enkele aandoeningen leidt het tot afwijzing. Twee dingen zijn hierbij hard:</p>
    <ul>
      <li><strong>Volledigheid is in uw eigen belang.</strong> Iets niet vermelden is geen truc die werkt. Het wordt zichtbaar bij de eerste claim die met de aandoening samenhangt, en dan staat niet die claim ter discussie maar de polis.</li>
      <li><strong>Leeftijd is het scherpste filter.</strong> De meeste Portugese verzekeraars hanteren een maximale toetredingsleeftijd voor nieuwe polissen. Wie boven die grens zit, komt er via de reguliere route niet meer in — hoe gezond ook.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="vergelijking">
  <div class="container narrow article-body">
    <h2 id="vergelijking">De partijen die er in de praktijk toe doen</h2>
    <p>Dit overzicht gaat over dekkingsmodel en bereik, niet over premies. Wat u betaalt hangt af van leeftijd, samenstelling van het gezin en gekozen dekking, en dat zetten wij voor uw profiel op papier in plaats van hier een getal te noemen dat voor niemand klopt.</p>
    <div class="table-wrap">
      <table class="nl-table">
        <thead>
          <tr><th scope="col">Verzekeraar</th><th scope="col">Model</th><th scope="col">Sterk voor</th></tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Verzekeraar">Allianz</td>
            <td data-label="Model">Combinatie van netwerktoegang en vrije keuze met restitutie</td>
            <td data-label="Sterk voor">Wie ook buiten Portugal behandeld wil kunnen worden</td>
          </tr>
          <tr>
            <td data-label="Verzekeraar">Médis</td>
            <td data-label="Model">Netwerkpolis met eigen bijdragen binnen het netwerk</td>
            <td data-label="Sterk voor">Wie langdurig in Portugal woont en gemak van het netwerk waardeert</td>
          </tr>
          <tr>
            <td data-label="Verzekeraar">APRIL</td>
            <td data-label="Model">Restitutie — u kiest de zorgverlener en declareert achteraf</td>
            <td data-label="Sterk voor">Internationaal mobiele expats en recente aankomers</td>
          </tr>
          <tr>
            <td data-label="Verzekeraar">AdvanceCare</td>
            <td data-label="Model">Netwerkbeheerder met een zeer groot aantal gecontracteerde zorgverleners</td>
            <td data-label="Sterk voor">Wie buiten de grote steden woont — Algarve, Alentejo, eilanden</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Het onderscheid dat er het meest toe doet is niet de merknaam maar het model: <strong>netwerk</strong> (lage eigen bijdrage, maar u gaat naar gecontracteerde zorgverleners) tegenover <strong>restitutie</strong> (vrije keuze, u schiet voor en declareert). Wie in het binnenland woont of vaak in Nederland is, komt met het tweede model vaak beter uit, ook als het bruto duurder oogt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mutualista">
  <div class="container narrow article-body">
    <h2 id="mutualista">De mutualistische route: als reguliere acceptatie niet lukt</h2>
    <p>Voor twee groepen loopt de reguliere weg dood: wie boven de maximale toetredingsleeftijd zit, en wie een medische voorgeschiedenis heeft die tot afwijzing leidt. Voor hen bestaat in Portugal een tweede spoor — de <em>associações mutualistas</em>, onderlinge waarborgmaatschappijen, waarvan MGEN de bekendste is voor niet-Portugese ingezetenen.</p>
    <p>Het wezenlijke verschil zit in de toelating. Een mutualistische aansluiting werkt op basis van lidmaatschap in plaats van individuele risicoselectie, waardoor de leeftijdsgrens die verzekeraars hanteren daar niet op dezelfde manier speelt. Voor iemand van in de zeventig die net in Portugal aankomt, is dit vaak de enige realistische route naar particuliere dekking.</p>
    <p>Daar staat tegenover dat het geen verzekering in dezelfde vorm is: de structuur, de opbouw van de bijdrage en de reikwijdte van de dekking verschillen wezenlijk van een polis van Allianz of Médis. Dat is geen bezwaar, maar het is wel iets wat u moet begrijpen vóór aansluiting en niet erna. Wij zetten beide routes naast elkaar wanneer uw situatie daarom vraagt.</p>
  </div>
</section>`,
    faqTitle: 'Zorgverzekering Portugal — veelgestelde vragen',
    faq: [
      {
        q: 'Heb ik een particuliere zorgverzekering nodig als ik toegang heb tot het SNS?',
        a: '<p>Nodig in juridische zin: nee. In de praktijk vult een particuliere polis het gat dat het SNS laat vallen bij niet-acute zorg — verwijzingen naar specialisten, diagnostiek en electieve operaties, waar de wachttijden in maanden lopen. Vrijwel iedereen die wij verzekeren houdt de SNS-inschrijving aan voor spoed en medicatie en gebruikt de particuliere dekking voor de rest.</p>',
      },
      {
        q: 'Zijn de HPA-ziekenhuizen in de Algarve nog verzekerd onder mijn polis?',
        a: '<p>Die eenheden bestaan nog, op dezelfde locaties in Alvor, Lagos en Gambelas, maar heten sinds juni 2026 CUF na de overname door CUF van 75% van Grupo HPA Saúde. Omdat elke verzekeraar die eenheden vóór de overname afzonderlijk contracteerde, is een afspraak die met HPA bestond niet automatisch dezelfde afspraak onder CUF. Wij bevestigen de actuele netwerkstatus en het vergoedingsniveau bij uw verzekeraar voordat wij een offerte uitbrengen.</p>',
      },
      {
        q: 'Wat gebeurt er met een aandoening die ik al heb?',
        a: '<p>U vult een gezondheidsverklaring in. Bestaande aandoeningen worden meestal uitgesloten, soms tegen een toeslag alsnog gedekt, en in enkele gevallen leidt het tot afwijzing. Vermeld alles volledig: iets weglaten komt bij de eerste gerelateerde claim aan het licht, en dan staat niet de claim ter discussie maar de polis zelf.</p>',
      },
      {
        q: 'Ik ben in de zeventig. Kan ik nog een polis krijgen?',
        a: '<p>Via de reguliere verzekeraars vaak niet — die hanteren een maximale toetredingsleeftijd voor nieuwe polissen, ongeacht uw gezondheid. De mutualistische route (zoals MGEN) werkt op basis van lidmaatschap in plaats van individuele risicoselectie en kent die grens niet op dezelfde manier. Voor wie op latere leeftijd naar Portugal komt is dat vaak de enige realistische weg naar particuliere dekking.</p>',
      },
      {
        q: 'Netwerkpolis of restitutiepolis — wat kan ik beter nemen?',
        a: '<p>Dat hangt van uw postcode af, niet van uw voorkeur. Woont u binnen bereik van gecontracteerde klinieken, dan is een netwerkpolis meestal gunstiger door de lage eigen bijdragen. Woont u in het binnenland, of bent u regelmatig in Nederland, dan levert een restitutiepolis met vrije keuze vaak meer op, ook als de brutopremie hoger lijkt.</p>',
      },
    ],
    related: [
      { url: '/nl/uitschrijven-nederland-zorgverzekering-portugal/', label: 'Uitschrijven uit Nederland: wat gebeurt er met uw zorgverzekering?' },
      { url: '/nl/s1-formulier-cak-portugal/', label: 'Het S1-formulier en het CAK' },
      { url: '/en/blog/health-insurance-expats-portugal/', label: 'Health insurance for expats in Portugal (Engels)' },
    ],
    article: {
      tag: 'Zorg',
      excerpt:
        'Het SNS, het particuliere netwerk in de Algarve na de overgang van HPA naar CUF, wachttijden en medische acceptatie, en de mutualistische route wanneer leeftijd of voorgeschiedenis de acceptatie blokkeert.',
      readingTime: 11,
      dateLabel: 'Augustus 2026',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 3. S1 / CAK — pensioners. A large share of the Dutch community on the
   *    Algarve, and the group most likely to assume the S1 is enough.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 's1-formulier-cak-portugal',
    url: '/nl/s1-formulier-cak-portugal/',
    title: 'Het S1-formulier en het CAK in Portugal: wat het wel en niet dekt | Adler & Rochefort',
    description:
      'Met AOW of Nederlands pensioen in Portugal: hoe de verdragsbijdrage en het S1-formulier werken, wat u er wel mee krijgt, wat niet, en waarom het een aanvulling is op een particuliere polis en geen vervanging.',
    keywords:
      'S1 formulier Portugal, CAK verdragsbijdrage, AOW Portugal zorgverzekering, gepensioneerd Portugal zorg, verdragsgerechtigde Portugal',
    eyebrow: 'S1 en CAK',
    h1: 'Het S1-formulier en het CAK: wat het wel en niet dekt',
    standfirst:
      'Ontvangt u AOW of een Nederlands pensioen en woont u in Portugal, dan blijft Nederland verantwoordelijk voor uw zorgkosten. U betaalt een verdragsbijdrage aan het CAK en krijgt toegang tot het Portugese stelsel. Dat is een reële aanspraak — en het is precies zoveel als het Portugese stelsel u kan geven, niet meer.',
    heroMeta:
      'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: {},
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'S1-formulier en CAK' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'Het S1 geeft u de wachtlijst van een Portugese ingezetene. Meer niet, en ook niet minder.',
    formBranch: 'Zorgverzekering',
    formSubject: 'S1 / CAK en aanvullende dekking',
    formIntro:
      'Heeft u een S1 en wilt u weten wat een aanvullende particuliere dekking daarbovenop kost? Geef uw leeftijd door en of er iets medisch te melden is.',
    formPlaceholder:
      'Bijvoorbeeld: uw leeftijd, of u al een S1 heeft of deze nog aanvraagt, of uw partner ook meeverzekerd moet worden, en in welke gemeente u woont.',
    sections: `
<section class="section plain" aria-labelledby="hoe-werkt">
  <div class="container narrow article-body">
    <h2 id="hoe-werkt">Hoe de regeling werkt</h2>
    <p>Binnen de Europese socialezekerheidscoördinatie geldt een eenvoudig principe: het land dat uw pensioen betaalt, draagt de kosten van uw zorg. Woont u in Portugal en ontvangt u uitsluitend een Nederlands wettelijk pensioen of een Nederlandse uitkering, dan blijft Nederland dat land.</p>
    <p>In de praktijk verloopt dat zo:</p>
    <ol>
      <li>U schrijft zich uit uit Nederland en meldt zich als verdragsgerechtigde bij het <strong>CAK</strong>, de instantie die deze regeling uitvoert.</li>
      <li>U betaalt een <strong>verdragsbijdrage</strong>, die op uw pensioen wordt ingehouden. De hoogte hangt samen met uw inkomen en met het zorgkostenniveau van uw woonland — voor Portugal ligt dat lager dan voor Nederland.</li>
      <li>U ontvangt een <strong>S1-formulier</strong> (voorheen E121).</li>
      <li>U registreert dat S1 bij de Portugese <em>Segurança Social</em>, en schrijft zich vervolgens in bij uw <em>centro de saúde</em>.</li>
    </ol>
    <p>Vanaf dat moment heeft u recht op zorg in Portugal op dezelfde voorwaarden als een Portugese ingezetene, op kosten van Nederland. Dat is een volwaardige aanspraak, geen gedoogsituatie.</p>
    <div class="callout">
      <span class="callout-label">Let op de volgorde</span>
      Het S1 registreren bij de Segurança Social en het inschrijven bij het centro de saúde zijn twee losse handelingen. Wie alleen het eerste doet, staat administratief goed geregistreerd en heeft nog steeds geen huisarts.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="wel-niet">
  <div class="container narrow article-body">
    <h2 id="wel-niet">Wat u ermee krijgt, en wat niet</h2>
    <p>Deze tegenstelling is de kern van de pagina. Het S1 geeft u toegang tot het SNS — met alle eigenschappen van het SNS, ook de minder prettige.</p>
    <div class="compare">
      <div class="compare-col">
        <h3 id="s1-wel">Wat het S1 u geeft</h3>
        <ul aria-labelledby="s1-wel">
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Toegang tot het SNS op gelijke voet met een Portugese ingezetene</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Spoedeisende zorg en ziekenhuisopname binnen het publieke stelsel</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Huisartsenzorg en gesubsidieerde medicatie</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Een verdragsbijdrage die doorgaans lager uitvalt dan een Nederlandse premie</span></li>
        </ul>
      </div>
      <div class="compare-col excluded">
        <h3 id="s1-niet">Wat het S1 niet geeft</h3>
        <ul aria-labelledby="s1-niet">
          <li><span class="mark" aria-hidden="true">&times;</span><span>Behandeling in particuliere klinieken en ziekenhuizen</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Vrije keuze van arts, specialist of instelling</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Een afspraak binnen een redelijke termijn voor niet-acute zorg</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Tandheelkundige zorg, op enkele uitzonderingen na</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Dekking voor gezinsleden die zelf geen verdragsrecht hebben</span></li>
        </ul>
      </div>
    </div>
    <p>Dat laatste punt verdient nadruk. Een partner die zelf geen Nederlands wettelijk pensioen ontvangt, is niet automatisch meeverzekerd. In sommige gevallen bestaat er een afgeleid recht als gezinslid; in andere gevallen niet. Dat is een vraag die u bij het CAK moet neerleggen vóór de verhuizing, niet erna.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="aanvulling">
  <div class="container narrow article-body">
    <h2 id="aanvulling">Het S1 is een aanvulling op een particuliere polis, geen vervanging</h2>
    <p>Wij zeggen dit expliciet omdat de omgekeerde aanname zo gangbaar is. Het S1 wordt vaak gepresenteerd als het sluitstuk van de emigratie: geregeld, klaar, verzekerd. Administratief klopt dat. Praktisch niet.</p>
    <p>Waar het op vastloopt is hetzelfde punt als voor iedere andere SNS-gebruiker: de wachttijd voor niet-acute zorg. Een staaroperatie, een heup, een MRI, een verwijzing naar een cardioloog. Precies de zorg die met het klimmen der jaren vaker aan de orde is, is de zorg waar het publieke stelsel het langste over doet. Het S1 verandert daar niets aan, want het geeft u dezelfde positie in dezelfde rij.</p>
    <p>De combinatie die in de praktijk werkt is dus: <strong>het S1 voor spoed, huisarts en medicatie — een particuliere polis voor snelheid en keuze.</strong> Omdat de zware kosten al bij het publieke stelsel liggen, hoeft die particuliere polis vaak minder ver te gaan dan wanneer u helemaal geen S1 zou hebben. Dat drukt de premie.</p>
    <div class="callout">
      <span class="callout-label">Waar wij naar kijken</span>
      Met een S1 op de achtergrond is de vraag niet welke polis het meeste dekt, maar welke polis dekt wat het SNS traag doet. Dat is een andere en meestal goedkopere polis dan het maximale pakket.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="leeftijd">
  <div class="container narrow article-body">
    <h2 id="leeftijd">De leeftijdsgrens, en waarom u niet moet wachten</h2>
    <p>Hier zit de klem die deze groep het hardst raakt. Portugese verzekeraars hanteren een maximale toetredingsleeftijd voor nieuwe polissen, met medische acceptatie. Wie boven die grens uitkomt, wordt niet meer geaccepteerd — ongeacht conditie, ongeacht dat u nooit een claim heeft ingediend.</p>
    <p>Het gevolg is dat het S1 vaak wordt gezien als de veilige keuze — u heeft immers dekking — terwijl juist die jaren van wachten de deur naar particuliere dekking sluiten. Wie op zijn 66e aankomt en denkt &ldquo;dat regel ik later wel&rdquo;, kan op zijn 72e ontdekken dat later niet meer bestaat.</p>
    <p>De mutualistische route (zoals MGEN) kent die leeftijdsgrens niet op dezelfde manier, omdat toelating daar op lidmaatschap berust in plaats van op individuele risicoselectie. Voor wie de reguliere grens al is gepasseerd, is dat vaak de enige realistische ingang naar particuliere zorg. Wij zetten die route naast de reguliere polissen wanneer uw leeftijd of voorgeschiedenis daarom vraagt — zie ook <a href="/nl/zorgverzekering-portugal/">onze pagina over de zorgverzekering in Portugal</a>.</p>
  </div>
</section>`,
    faqTitle: 'S1 en CAK — veelgestelde vragen',
    faq: [
      {
        q: 'Wie heeft recht op een S1 voor Portugal?',
        a: '<p>In hoofdlijn: wie in Portugal woont en uitsluitend een Nederlands wettelijk pensioen of een Nederlandse uitkering ontvangt, zonder in het woonland verzekeringsplichtig te zijn door werk of een lokaal pensioen. U meldt zich als verdragsgerechtigde bij het CAK, betaalt de verdragsbijdrage en ontvangt het S1. Werkt u in Portugal, of bouwt u daar pensioen op, dan kan de verantwoordelijkheid verschuiven naar Portugal — leg dat vooraf voor aan het CAK.</p>',
      },
      {
        q: 'Is mijn partner automatisch meeverzekerd?',
        a: '<p>Niet automatisch. Een partner die zelf geen Nederlands wettelijk pensioen ontvangt, kan onder omstandigheden een afgeleid recht als gezinslid hebben, maar dat is geen vanzelfsprekendheid. Dit is de vraag die het vaakst pas na de verhuizing wordt gesteld en het lastigst is om dan nog op te lossen. Leg hem vóór vertrek voor aan het CAK.</p>',
      },
      {
        q: 'Kan ik met een S1 naar een particuliere kliniek?',
        a: '<p>Niet op kosten van het S1. Het geeft u toegang tot het publieke stelsel op dezelfde voorwaarden als een Portugese ingezetene. Behandeling in een particuliere kliniek betaalt u zelf, tenzij u daarnaast een particuliere polis heeft die dat dekt.</p>',
      },
      {
        q: 'Waarom zou ik naast het S1 nog een particuliere verzekering nemen?',
        a: '<p>Voor snelheid en keuze. Het S1 zet u in dezelfde rij als iedere andere SNS-gebruiker, en die rij is voor niet-acute zorg lang — precies de zorg die met de jaren vaker nodig is. Omdat de zware kosten al bij het publieke stelsel liggen, kan de aanvullende polis vaak beperkter en dus goedkoper zijn dan een volledige dekking.</p>',
      },
      {
        q: 'Ik ben al boven de zeventig. Kan ik nog particulier bijverzekeren?',
        a: '<p>Bij reguliere verzekeraars waarschijnlijk niet: die hanteren een maximale toetredingsleeftijd voor nieuwe polissen met medische acceptatie. De mutualistische route kent die grens niet op dezelfde manier, omdat toelating daar op lidmaatschap berust. Voor wie de reguliere grens gepasseerd is, is dat meestal de enige realistische mogelijkheid.</p>',
      },
    ],
    related: [
      { url: '/nl/zorgverzekering-portugal/', label: 'Zorgverzekering in Portugal — het volledige overzicht' },
      { url: '/nl/uitschrijven-nederland-zorgverzekering-portugal/', label: 'Uitschrijven uit Nederland en uw zorgverzekering' },
      { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
    ],
    article: {
      tag: 'Zorg',
      excerpt:
        'Met AOW of Nederlands pensioen blijft Nederland uw zorgkosten dragen, via de verdragsbijdrage en het S1. Wat die aanspraak precies waard is, en waarom hij een particuliere polis aanvult in plaats van vervangt.',
      readingTime: 9,
      dateLabel: 'Augustus 2026',
    },
  },
];
