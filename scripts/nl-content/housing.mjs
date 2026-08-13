import { BREADCRUMB_ROOT } from './shared.mjs';

const CAT = { name: 'Wonen', url: '/nl/verzekeringen-portugal/#wonen' };

export const HOUSING_PAGES = [
  /* ─────────────────────────────────────────────────────────────────────────
   * 6. Woonverzekering — pillar. Pairs both ways with the PT and EN home
   *    insurance pages, which are already paired with each other.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'woonverzekering-portugal',
    url: '/nl/woonverzekering-portugal/',
    title: 'Woonverzekering in Portugal: multirriscos, herbouwwaarde en onderverzekering | Adler & Rochefort',
    description:
      'Verplichte brandverzekering bij appartementen, multirriscos als standaardproduct, waarom u op herbouwwaarde verzekert en niet op aankoopprijs, de evenredigheidsregel en aardbevingsdekking.',
    keywords:
      'woonverzekering Portugal, multirriscos, seguro de incêndio verplicht, herbouwwaarde Portugal, onderverzekering evenredigheidsregel, aardbevingsdekking Portugal',
    eyebrow: 'Woonverzekering',
    h1: 'Woonverzekering in Portugal: wat u verzekert en waarvoor',
    standfirst:
      'Eén verplichting, één standaardproduct, en één rekenfout die de meeste schade aanricht. Wie in Portugal een huis koopt, moet weten waarom het verzekerde bedrag niets met de aankoopprijs te maken heeft.',
    heroMeta:
      'Onafhankelijk verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: { pt: '/seguros/habitacao/', en: '/en/home-insurance-quote/' },
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Woonverzekering Portugal' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'U verzekert wat herbouwen kost, niet wat u betaald heeft.',
    formBranch: 'Woonverzekering',
    formSubject: 'woonverzekering Portugal',
    formIntro:
      'Stuur ons het adres, het bouwjaar en de oppervlakte, dan berekenen wij de herbouwwaarde en leggen meerdere verzekeraars naast elkaar.',
    formPlaceholder:
      'Bijvoorbeeld: plaats, type woning (appartement of vrijstaand), bouwjaar, bewoonbare oppervlakte in m², of er een hypotheek op rust, en of er een zwembad of bijgebouwen zijn.',
    sections: `
<section class="section plain" aria-labelledby="verplicht">
  <div class="container narrow article-body">
    <h2 id="verplicht">Wat verplicht is: brandverzekering bij propriedade horizontal</h2>
    <p>Portugal kent één wettelijke verzekeringsplicht voor woningeigenaren, en die is smaller dan mensen denken. Bezit u een fractie in een gebouw dat is gesplitst in <em>propriedade horizontal</em> — in Nederlandse termen: een appartementsrecht binnen een VvE — dan bent u verplicht een <strong>brandverzekering</strong> (<em>seguro de incêndio</em>) te hebben op uw eigen fractie én naar rato op de gemeenschappelijke delen.</p>
    <p>Twee misverstanden die daaruit voortkomen:</p>
    <ul>
      <li><strong>&ldquo;Het condomínio heeft toch een polis?&rdquo;</strong> Die dekt de gemeenschappelijke delen. Uw eigen fractie valt daar niet zonder meer onder, en de inboedel zeker niet. In de praktijk is een polis van het condomínio bovendien vaak op een verouderd kapitaal verzekerd.</li>
      <li><strong>&ldquo;Ik heb een vrijstaand huis, dus ik hoef niets.&rdquo;</strong> Klopt juridisch — er is dan geen wettelijke plicht. Rust er een hypotheek op, dan eist de bank vrijwel altijd een polis, en die eis is voor u even bindend als de wet.</li>
    </ul>
    <p>De wettelijke plicht is dus het minimum en niet de norm. Vrijwel niemand verzekert alleen brand, om de simpele reden dat het gros van de schades in Portugese woningen geen brand is maar water, storm of diefstal.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="multirriscos">
  <div class="container narrow article-body">
    <h2 id="multirriscos">Multirriscos: het standaardproduct</h2>
    <p>Wat vrijwel iedereen sluit is een <em>seguro multirriscos habitação</em> — de Portugese opstal- en inboedelverzekering in één polis. De brandverzekering zit erin, met daarnaast de dekkingen die het product bruikbaar maken.</p>
    <p>Wat er standaard in zit, in wisselende vorm per verzekeraar:</p>
    <ul>
      <li>Brand, blikseminslag en ontploffing</li>
      <li>Storm, hagel en overstroming</li>
      <li>Waterschade door leidingbreuk — in de praktijk de meest voorkomende claim</li>
      <li>Diefstal en inbraak, met een submaximum voor waardevolle zaken</li>
      <li>Glasbreuk</li>
      <li>Aansprakelijkheid als eigenaar, voor schade die uw woning aan derden toebrengt</li>
      <li>Tijdelijke herhuisvesting als de woning onbewoonbaar is</li>
    </ul>
    <p>De polis kent twee kapitalen die u afzonderlijk vaststelt: het <strong>opstalkapitaal</strong> (de constructie) en het <strong>inboedelkapitaal</strong> (uw spullen). Op beide is de rekenfout hieronder van toepassing, en op beide wordt bij schade de evenredigheidsregel toegepast.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="herbouwwaarde">
  <div class="container narrow article-body">
    <h2 id="herbouwwaarde">Herbouwwaarde tegenover aankoopprijs — de fout die geld kost</h2>
    <p>Dit is de kern van de pagina. Het verzekerde opstalkapitaal moet gelijk zijn aan wat het kost om de woning opnieuw op te bouwen. Niet wat u ervoor betaald heeft, en niet wat de makelaar hem waard vindt.</p>
    <p>Het verschil ontstaat doordat de aankoopprijs de grond en de locatie omvat, en de herbouwwaarde niet. Een appartement in de historische kern van Lagos kan voor een prijs weggaan waarvan een groot deel het uitzicht en het adres betreft; de bakstenen zijn goedkoper. Andersom kan een oude quinta in het binnenland weinig hebben gekost terwijl de herbouw van dikke muren, een pannendak en gemetselde gewelven juist duur is.</p>
    <div class="callout">
      <span class="callout-label">De vuistregel, en waar hij ophoudt</span>
      Herbouwwaarde = bewoonbare oppervlakte in m² × de bouwkosten per m² voor dat type constructie. De uitkomst wordt hoger bij hoogwaardige afwerking, moeilijke bereikbaarheid van het perceel, en bij bouwkundig erfgoed waar in oorspronkelijke materialen moet worden herbouwd. En vergeet niet wat er buiten staat: <strong>zwembad, ommuring, terrasoverkapping, garage en zonnepanelen</strong> tellen mee, en worden bij het opgeven van het kapitaal het vaakst overgeslagen.
    </div>
    <h3>De evenredigheidsregel (regra proporcional)</h3>
    <p>Hier bijt de fout. Is uw woning voor een lager bedrag verzekerd dan de werkelijke herbouwwaarde, dan vergoedt de verzekeraar <strong>elke schade naar evenredigheid</strong> — ook een kleine.</p>
    <p>Een voorbeeld dat wij te vaak in het echt tegenkomen. De herbouwwaarde is € 250.000. De polis staat op € 150.000, omdat het kapitaal ooit is overgenomen van de vorige eigenaar en nooit is geactualiseerd. Er ontstaat waterschade van € 20.000. De dekkingsgraad is 60%, dus de uitkering is € 12.000 minus het eigen risico. De resterende € 8.000 betaalt u zelf — niet omdat de schade niet gedekt was, maar omdat het kapitaal te laag stond.</p>
    <p>Twee praktische gevolgen: <strong>controleer het kapitaal bij aankoop</strong> in plaats van de polis van de verkoper over te nemen, en <strong>laat het jaarlijks indexeren</strong>. De bouwkosten in de Algarve zijn de afgelopen jaren aanzienlijk gestegen; een kapitaal uit 2019 is vandaag zelden nog toereikend.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="aardbeving">
  <div class="container narrow article-body">
    <h2 id="aardbeving">Aardbeving: optioneel, en in de Algarve niet theoretisch</h2>
    <p>Aardbevingsdekking (<em>fenómenos sísmicos</em>) zit in Portugal <strong>niet</strong> standaard in een multirriscos. Het is een aanvullende dekking die u apart aanvinkt en waarvoor u apart betaalt.</p>
    <p>Voor het zuidwesten van Portugal is dat geen abstracte overweging. Het epicentrum van de aardbeving van 1755, die Lissabon verwoestte en de Algarve-kust met een tsunami trof, lag voor de kust van de Kaap Sint-Vincent — enkele tientallen kilometers van Lagos. De regio ligt op een actieve breukzone en de seismische risicokaarten geven het zuiden een hogere klasse dan het noorden.</p>
    <p>De premie voor deze dekking hangt af van de zone, het bouwjaar en het constructietype. Voor een moderne woning die volgens de huidige aardbevingsnormen is gebouwd, is het een relatief bescheiden opslag. Voor een oud pand met dragende steenmuren zonder verstevigingen ligt dat hoger — en juist daar is het risico op werkelijke schade het grootst.</p>
    <p>Onze positie: in de Algarve is dit een dekking die u bewust moet afwijzen, niet een die u per ongeluk mist omdat niemand hem noemde.</p>
  </div>
</section>`,
    faqTitle: 'Woonverzekering Portugal — veelgestelde vragen',
    faq: [
      {
        q: 'Is een woonverzekering verplicht in Portugal?',
        a: '<p>Alleen de brandverzekering, en alleen voor woningen in propriedade horizontal — een appartementsrecht binnen een gesplitst gebouw. Voor een vrijstaande woning bestaat geen wettelijke plicht, maar bij een hypotheek eist de bank vrijwel altijd een polis. In de praktijk sluit vrijwel iedereen een multirriscos, omdat brand niet de schade is die het vaakst voorkomt.</p>',
      },
      {
        q: 'Voor welk bedrag moet ik mijn woning verzekeren?',
        a: '<p>Voor de herbouwwaarde: wat het kost om de woning opnieuw op te bouwen. Niet de aankoopprijs, want daarin zitten grond en locatie die bij herbouw niet opnieuw gekocht hoeven worden. Reken met bewoonbare oppervlakte × bouwkosten per m², en tel zwembad, ommuring, overkappingen, garage en zonnepanelen mee.</p>',
      },
      {
        q: 'Wat is de evenredigheidsregel?',
        a: '<p>Staat uw woning verzekerd voor minder dan de werkelijke herbouwwaarde, dan vergoedt de verzekeraar elke schade in dezelfde verhouding. Bij een kapitaal van € 150.000 op een herbouwwaarde van € 250.000 wordt een waterschade van € 20.000 voor 60% uitgekeerd — € 12.000 — en betaalt u de rest zelf. De regel geldt ook bij kleine schades, niet alleen bij totaal verlies.</p>',
      },
      {
        q: 'Zit aardbevingsdekking standaard in de polis?',
        a: '<p>Nee. Aardbevingsdekking is in Portugal een aanvullende dekking met een aparte premie. Voor de Algarve is dat een reële afweging: de regio ligt bij een actieve breukzone en valt in een hogere seismische klasse dan het noorden. Voor een moderne woning is de opslag bescheiden; voor oude steenbouw hoger, en daar is het risico ook groter.</p>',
      },
      {
        q: 'Kan ik de polis van de vorige eigenaar overnemen?',
        a: '<p>Technisch soms wel, maar doe het niet zonder het kapitaal te controleren. Overgenomen polissen dragen bijna altijd een verouderde herbouwwaarde met zich mee, en de bouwkosten in de Algarve zijn de laatste jaren sterk gestegen. Een kapitaal uit 2019 leidt vandaag rechtstreeks tot onderverzekering en dus tot een evenredige uitkering.</p>',
      },
    ],
    related: [
      { url: '/nl/bosbrandrisico-woonverzekering-portugal/', label: 'Bosbrandrisico en uw woonverzekering' },
      { url: '/nl/niet-gelegaliseerde-woning-verzekeren-portugal/', label: 'Een niet-gelegaliseerde woning verzekeren' },
      { url: '/en/home-insurance-quote/', label: 'Home insurance in Portugal (Engels)' },
    ],
    article: {
      tag: 'Wonen',
      excerpt:
        'De verplichte brandverzekering bij appartementen, multirriscos als standaardproduct, en de rekenfout die het meeste geld kost: verzekeren op aankoopprijs in plaats van op herbouwwaarde.',
      readingTime: 10,
      dateLabel: 'Augustus 2026',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 7. Bosbrandrisico — the page that separates informative from useful:
   *    fuel management is a legal obligation that gets invoked at claim time.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'bosbrandrisico-woonverzekering-portugal',
    url: '/nl/bosbrandrisico-woonverzekering-portugal/',
    title: 'Bosbrandrisico en uw woonverzekering in Portugal | Adler & Rochefort',
    description:
      'De verplichte brandgang rond uw woning, wat niet-naleving bij een schade betekent, eucalyptus en pijnbomen op eigen grond, niet-aangegeven bijgebouwen, en herhuisvesting in het binnenland.',
    keywords:
      'bosbrand Portugal verzekering, faixa de gestão de combustível, brandgang woning Portugal, eucalyptus brandrisico, woonverzekering binnenland Portugal',
    eyebrow: 'Bosbrandrisico',
    h1: 'Bosbrandrisico en uw woonverzekering',
    standfirst:
      'Pedrógão Grande, Góis, Figueiró dos Vinhos. Nederlanders wonen onevenredig vaak precies daar waar de bossen dicht zijn en de huizen ver uit elkaar staan. De verzekering dekt bosbrand — mits u de brandgang rond uw huis heeft onderhouden, en dat wordt bij de schade gecontroleerd.',
    heroMeta:
      'Onafhankelijk verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: {},
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Bosbrandrisico' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'De brandgang is geen tuinadvies. Bij een schade is het een dekkingsvraag.',
    formBranch: 'Woonverzekering',
    formSubject: 'woonverzekering en bosbrandrisico',
    formIntro:
      'Woont u in of nabij bosgebied? Vertel ons waar het perceel ligt en wat eromheen staat, dan zoeken wij verzekeraars die het risico daadwerkelijk accepteren.',
    formPlaceholder:
      'Bijvoorbeeld: gemeente en freguesia, oppervlakte van het perceel, wat er direct rondom staat (eucalyptus, pijnbomen, kreupelhout), bouwjaar en constructietype, en of er bijgebouwen of houten constructies zijn.',
    sections: `
<section class="section plain" aria-labelledby="waar">
  <div class="container narrow article-body">
    <h2 id="waar">Waarom dit een Nederlandse pagina is</h2>
    <p>De branden van juni en oktober 2017 in Pedrógão Grande, Góis en Figueiró dos Vinhos zijn in Nederland uitvoerig gevolgd, omdat er Nederlandse gezinnen woonden. Dat is geen toeval. De <em>Centro</em>-regio biedt precies waar veel Nederlandse kopers naar op zoek gaan: een ruim perceel, groen, rust, en een prijs die in de Algarve niet bestaat. Dat landschap is het landschap dat brandt.</p>
    <p>Het geldt ook voor het achterland van de Algarve — de Serra de Monchique brandde in augustus 2018 over duizenden hectares — en voor delen van de Alentejo. Een verzekeraar kijkt hier anders naar dan een makelaar: waar de makelaar &ldquo;omringd door natuur&rdquo; schrijft, ziet de acceptant brandstofbelasting rond een gebouw.</p>
    <p>Dat heeft twee gevolgen die u vóór aankoop wilt weten. Sommige verzekeraars accepteren woningen in de zwaarst belaste zones niet, of alleen met een hoger eigen risico of een uitsluiting. En het perceel zelf — wat erop staat en hoe het onderhouden is — bepaalt mee of u een polis krijgt en tegen welke voorwaarden.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="brandgang">
  <div class="container narrow article-body">
    <h2 id="brandgang">De brandgang: een wettelijke plicht die bij de schade terugkomt</h2>
    <p>Portugal kent een stelsel van <em>gestão de combustível</em> — beheer van brandbaar materiaal. Rond gebouwen geldt een verplichte strook waarin de vegetatie moet worden teruggebracht: kreupelhout weg, de onderste takken van bomen gesnoeid, minimale afstand tussen boomkruinen, en geen brandbare opslag tegen de gevel. De breedte van die strook en de exacte eisen zijn vastgelegd in de nationale regelgeving en worden per gemeente uitgevoerd; de câmara publiceert jaarlijks de termijn waarbinnen het werk klaar moet zijn, doorgaans in het voorjaar, ruim vóór het brandseizoen.</p>
    <p>Het wordt gecontroleerd en er staat een boete op. Dat is de bekende kant.</p>
    <div class="callout">
      <span class="callout-label">Dit is het punt waar het om gaat</span>
      De minder bekende kant is de verzekeringskant. Bij een brandschade beoordeelt de expert de toestand van het perceel. Blijkt dat de wettelijke brandgang niet was onderhouden, dan kan de verzekeraar zich op het standpunt stellen dat u een verplichting heeft verzaakt die het risico direct heeft verzwaard — met een <strong>gekorte of geweigerde uitkering</strong> als gevolg. Het is dus geen tuinonderhoud dat u kunt uitstellen tot volgend jaar. Het is een voorwaarde die pas ter sprake komt op het moment dat u niets meer kunt herstellen.
    </div>
    <p>Wat wij aanraden en wat weinig moeite kost: <strong>fotografeer het perceel na het onderhoud</strong>, elk jaar, met een datum. Heeft de gemeente het gecontroleerd of heeft u een aannemer ingeschakeld, bewaar de bevestiging of de factuur. Bij een claim is dat het verschil tussen uw woord en een dossier.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="eucalyptus">
  <div class="container narrow article-body">
    <h2 id="eucalyptus">Eucalyptus en pijnbomen op eigen grond</h2>
    <p>Eucalyptus is in Portugal aangeplant voor de papierindustrie en beslaat een aanzienlijk deel van het bosareaal. De boom is snelgroeiend, olierijk en werpt bast en blad af dat zich als een brandstoflaag op de grond ophoopt. Bij een brand gedraagt hij zich navenant: hij brandt heet, en vonken worden over grote afstand meegevoerd. De <em>pinheiro-bravo</em>, de zeeden, doet in de praktijk niet veel onder.</p>
    <p>Voor de acceptatie van uw polis is de vraag daarom niet alleen of er bos in de buurt is, maar wat er op úw perceel en direct daarnaast staat, en op welke afstand van het huis. Dat kan de premie beïnvloeden, tot een aanvullende voorwaarde leiden, of in de zwaarste gevallen tot een afwijzing.</p>
    <p>Wat u eraan kunt doen:</p>
    <ul>
      <li><strong>Handhaaf de afstand rond de bebouwing.</strong> Bomen dicht op de gevel zijn het eerste waar een acceptant naar kijkt, en het eerste dat vlam vat.</li>
      <li><strong>Ruim de strooisellaag op.</strong> De bast en het blad onder eucalyptus zijn de aanmaak; het staande hout is het vuur.</li>
      <li><strong>Kijk naar het perceel van de buren.</strong> Uw brandgang stopt bij uw erfgrens, het vuur niet. Grenst u aan een verwaarloosd bosperceel, meld dat bij de câmara — de onderhoudsplicht rust op de eigenaar, en bij afwezige eigenaren kan de gemeente optreden.</li>
      <li><strong>Overweeg het materiaal van uw dak en luiken.</strong> Bij bestaande bouw is dat een verbouwing, maar bij een verbouwing die u toch al doet, is het een goedkope beslissing.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="bijgebouwen">
  <div class="container narrow article-body">
    <h2 id="bijgebouwen">Niet-aangegeven bijgebouwen, overkappingen en houtbouw</h2>
    <p>Bijna elke landelijke woning in Portugal heeft ze: een schuur die er al stond, een carport van staal en golfplaat, een pergola met riet, een houten tuinhuis, een omgebouwde stal. Ze zijn er, ze zijn in gebruik, en ze staan zelden in de polis.</p>
    <p>Bij een bosbrand doen deze constructies twee dingen tegelijk. Ze branden vaak als eerste — houtbouw en rieten overkappingen tegen of nabij het huis zijn de klassieke route waarlangs het vuur de woning bereikt. En ze zijn niet verzekerd, omdat ze niet zijn opgegeven bij het vaststellen van het kapitaal.</p>
    <p>Erger nog is de derde mogelijkheid: een aangebouwde constructie die niet is opgegeven, kan het oordeel over de gehele schade beïnvloeden als de expert vaststelt dat het risico wezenlijk anders was dan verzekerd. Dat raakt aan hetzelfde vraagstuk als bij <a href="/nl/niet-gelegaliseerde-woning-verzekeren-portugal/">een woning die niet volledig gelegaliseerd is</a>.</p>
    <div class="callout">
      <span class="callout-label">Wat wij vragen bij de aanvraag</span>
      Een opsomming van alles wat er op het perceel staat, ook wat u zelf niet als &ldquo;gebouw&rdquo; beschouwt: bijgebouwen, overkappingen, zwembadtechniek, zonnepanelen, ommuring, waterreservoirs en de poort. Het duurt vijf minuten en het is de goedkoopste zekerheid in het hele dossier.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="herhuisvesting">
  <div class="container narrow article-body">
    <h2 id="herhuisvesting">Herhuisvesting en de werkelijke duur van herbouw</h2>
    <p>Multirriscos-polissen dekken tijdelijke herhuisvesting als de woning onbewoonbaar is. Dat is een goede dekking, maar hij is bijna altijd op twee manieren begrensd: een <strong>maximum bedrag per maand</strong> en een <strong>maximale looptijd</strong>, vaak zes tot twaalf maanden.</p>
    <p>Zet dat naast de werkelijkheid van herbouwen in het binnenland. Na een grote brand is niet alleen uw huis getroffen, maar de hele streek. Aannemers zijn maandenlang volgeboekt, materiaal moet van ver komen, de vergunningverlening bij de câmara loopt vol met dezelfde aanvragen, en op een afgelegen perceel moeten soms eerst de toegangsweg en de nutsvoorzieningen worden hersteld. Twee jaar van brand tot oplevering is in die omstandigheden geen uitschieter.</p>
    <p>Loopt de herhuisvestingsdekking na twaalf maanden af terwijl de bouw nog een jaar duurt, dan betaalt u dat jaar zelf — bovenop een hypotheek die gewoon doorloopt. Bij percelen in bosrijk gebied kijken wij daarom expliciet naar de limiet en de looptijd van deze dekking, en niet alleen naar het opstalkapitaal. Het is de dekking die bij een grote brand het langst voelbaar is.</p>
  </div>
</section>`,
    faqTitle: 'Bosbrandrisico — veelgestelde vragen',
    faq: [
      {
        q: 'Dekt mijn woonverzekering schade door een bosbrand?',
        a: '<p>Brand is een standaarddekking in een multirriscos, en dat omvat bosbrand. De dekking is echter geen vrijbrief: bij de schadebeoordeling wordt gekeken of u de wettelijke verplichtingen rond brandstofbeheer op uw perceel bent nagekomen. Was de brandgang niet onderhouden, dan kan de uitkering worden gekort of geweigerd.</p>',
      },
      {
        q: 'Wat houdt de verplichte brandgang precies in?',
        a: '<p>Een strook rond gebouwen waarin de vegetatie moet worden beheerd: kreupelhout verwijderd, onderste takken gesnoeid, minimale afstand tussen boomkruinen en geen brandbare opslag tegen de gevel. De breedte en de eisen volgen uit de nationale regelgeving; uw câmara publiceert jaarlijks de uiterste datum, meestal in het voorjaar. Fotografeer het resultaat met datum en bewaar facturen — bij een claim is dat uw bewijs.</p>',
      },
      {
        q: 'Kan een verzekeraar mijn woning weigeren vanwege bosbrandrisico?',
        a: '<p>Ja. In de zwaarst belaste zones accepteren sommige verzekeraars niet, of alleen tegen een hogere premie, een verhoogd eigen risico of met aanvullende voorwaarden. Wat er op en direct naast uw perceel staat — eucalyptus en zeeden in het bijzonder — en de afstand tot de bebouwing weegt daarin mee. Als onafhankelijk agent leggen wij het risico voor aan meerdere maatschappijen in plaats van bij één afwijzing te stoppen.</p>',
      },
      {
        q: 'Zijn mijn schuur en overkapping meeverzekerd?',
        a: '<p>Alleen als u ze heeft opgegeven en ze in het verzekerde kapitaal zijn verwerkt. Niet-aangegeven bijgebouwen, carports, pergola\'s en houten constructies zijn niet gedekt — en dat zijn juist de constructies die bij een bosbrand als eerste vlam vatten. Geef alles op wat op het perceel staat, ook wat u zelf geen gebouw noemt.</p>',
      },
      {
        q: 'Hoe lang betaalt de verzekering vervangende woonruimte?',
        a: '<p>Doorgaans zes tot twaalf maanden, met een maximumbedrag per maand. Na een grote brand duurt herbouw in het binnenland vaak langer: aannemers zijn volgeboekt, materiaal is schaars en de vergunningverlening loopt vol. Loopt de dekking af voordat u terug kunt, dan komt de rest voor eigen rekening. Kijk bij percelen in bosgebied dus naar deze limiet en niet alleen naar het opstalkapitaal.</p>',
      },
    ],
    related: [
      { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal — het volledige overzicht' },
      { url: '/nl/niet-gelegaliseerde-woning-verzekeren-portugal/', label: 'Een niet-gelegaliseerde woning verzekeren' },
      { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
    ],
    article: {
      tag: 'Wonen',
      excerpt:
        'De verplichte brandgang rond uw woning is bij een schade een dekkingsvraag, niet een tuinkwestie. Plus eucalyptus op eigen grond, niet-aangegeven bijgebouwen en de werkelijke duur van herbouw in het binnenland.',
      readingTime: 10,
      dateLabel: 'Augustus 2026',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 8. Niet-gelegaliseerde woning. Pairs with the EN legalization article.
   * ───────────────────────────────────────────────────────────────────────── */
  {
    slug: 'niet-gelegaliseerde-woning-verzekeren-portugal',
    url: '/nl/niet-gelegaliseerde-woning-verzekeren-portugal/',
    title: 'Een niet-gelegaliseerde woning verzekeren in Portugal | Adler & Rochefort',
    description:
      'Rústico kopen met bestaande bebouwing: wat wel en niet verzekerbaar is, wat niet-legalisatie bij een schade betekent, hoe u de vergunning controleert en wat de bank eist bij een hypotheek.',
    keywords:
      'niet gelegaliseerde woning Portugal verzekeren, terreno rústico bebouwing, licença de utilização, caderneta predial, illegale bebouwing Portugal verzekering',
    eyebrow: 'Legalisatie',
    h1: 'Een niet-gelegaliseerde woning verzekeren',
    standfirst:
      'Er staat een huis op het perceel, u koopt het bij de notaris, en pas maanden later blijkt dat het gebouw formeel niet bestaat. Dat is in Portugal geen zeldzaamheid en het is ook geen ramp — maar het bepaalt wel wat u kunt verzekeren, en wat er gebeurt als er iets misgaat.',
    heroMeta:
      'Onafhankelijk verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: augustus 2026',
    hreflang: { en: '/en/blog/home-insurance-legalization/' },
    breadcrumb: [...BREADCRUMB_ROOT, CAT, { name: 'Niet-gelegaliseerde woning' }],
    published: '2026-08-13T09:00:00+00:00',
    modified: '2026-08-13T09:00:00+00:00',
    pullquote: 'Wat niet in de caderneta staat, bestaat voor de verzekeraar niet.',
    formBranch: 'Woonverzekering',
    formSubject: 'woning zonder volledige legalisatie',
    formIntro:
      'Twijfelt u of de bebouwing volledig geregistreerd is? Stuur ons wat u heeft — caderneta predial, certidão of het koopcontract — dan zeggen wij wat verzekerbaar is.',
    formPlaceholder:
      'Bijvoorbeeld: gemeente, of het perceel rústico of urbano is, of er een licença de utilização is, welke delen wel of niet geregistreerd zijn, en of er een hypotheek op rust of komt.',
    sections: `
<section class="section plain" aria-labelledby="hoe-ontstaat">
  <div class="container narrow article-body">
    <h2 id="hoe-ontstaat">Hoe deze situatie ontstaat</h2>
    <p>In het Portugese binnenland en in delen van de Algarve is de bebouwing decennialang meegegroeid met het gebruik. Een stal werd een schuur, de schuur kreeg een dak en een raam, er kwam een keuken bij, en op enig moment woonde er iemand. Bij de gemeente werd dat niet altijd bijgehouden. Vaak omdat het perceel <em>rústico</em> is — landbouwgrond, waarop bewoning formeel niet is toegestaan — en de bebouwing dus nooit had kunnen worden vergund zoals hij er staat.</p>
    <p>Dat leidt tot drie situaties die verschillen in ernst:</p>
    <ul>
      <li><strong>Volledig legaal.</strong> Het perceel is <em>urbano</em>, het gebouw staat in de caderneta predial urbana, en er is een <em>licença de utilização</em> — de gebruiksvergunning die zegt waarvoor het gebouw bestemd is.</li>
      <li><strong>Geregistreerd maar niet vergund.</strong> Het gebouw staat wel fiscaal geregistreerd, maar er is geen gebruiksvergunning, of de vergunning dekt een ander gebruik dan bewoning. Komt veel voor bij oudere bouw.</li>
      <li><strong>Niet geregistreerd.</strong> Het gebouw staat nergens. Voor de fiscus en voor het kadaster is het perceel onbebouwd — <em>rústico</em>, met een aanslag naar rato daarvan.</li>
    </ul>
    <p>Wat het lastig maakt: de notaris toetst bij de overdracht wat er in de akte staat, niet wat er op het terrein staat. U kunt volstrekt rechtsgeldig eigenaar worden van een perceel waarop een gebouw staat dat administratief niet bestaat.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="wat-verzekerbaar">
  <div class="container narrow article-body">
    <h2 id="wat-verzekerbaar">Wat wel en niet verzekerbaar is</h2>
    <p>De hoofdregel is eenvoudiger dan mensen hopen: <strong>een verzekeraar verzekert een gebouw dat aantoonbaar bestaat en waarvan het gebruik overeenkomt met wat is verklaard.</strong> Ontbreekt de registratie, dan ontbreekt de basis voor het verzekerde kapitaal.</p>
    <div class="compare">
      <div class="compare-col">
        <h3 id="wel-verzekerbaar">Doorgaans wel te verzekeren</h3>
        <ul aria-labelledby="wel-verzekerbaar">
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>De <strong>inboedel</strong> — uw eigendommen zijn van u, ongeacht de status van het gebouw</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span><strong>Aansprakelijkheid</strong> als eigenaar of bewoner</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Bebouwing die geregistreerd is maar waarvan de gebruiksvergunning ontbreekt, bij sommige verzekeraars en na beoordeling</span></li>
          <li><span class="mark" aria-hidden="true">&#10003;</span><span>Woningen waarvoor een legalisatietraject loopt, soms tijdelijk en op voorwaarde van afronding</span></li>
        </ul>
      </div>
      <div class="compare-col excluded">
        <h3 id="niet-verzekerbaar">Doorgaans niet</h3>
        <ul aria-labelledby="niet-verzekerbaar">
          <li><span class="mark" aria-hidden="true">&times;</span><span>Het <strong>opstalkapitaal</strong> van een gebouw dat nergens geregistreerd staat</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Bebouwing op <em>rústico</em> die formeel niet vergunbaar is</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Uitbreidingen en aanbouwen die na de registratie zijn gebouwd en nooit zijn bijgeschreven</span></li>
          <li><span class="mark" aria-hidden="true">&times;</span><span>Commercieel gebruik — verhuur — van een pand zonder de bijbehorende vergunning</span></li>
        </ul>
      </div>
    </div>
    <p>De middelste categorie is waar het interessant wordt. Verzekeraars verschillen aanzienlijk in wat zij accepteren bij een gebouw met registratie maar zonder gebruiksvergunning, en dat is opnieuw een reden om het dossier bij meerdere maatschappijen voor te leggen in plaats van na één &ldquo;nee&rdquo; te concluderen dat het niet kan.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="bij-schade">
  <div class="container narrow article-body">
    <h2 id="bij-schade">Wat er bij een schade gebeurt</h2>
    <p>De polis afsluiten is zelden het probleem. Portugese verzekeraars sturen bij een gewone woonverzekering geen inspecteur langs vóór acceptatie; zij gaan uit van wat u verklaart. Het probleem ontstaat bij de <strong>schade</strong>, want dan komt er wel iemand kijken.</p>
    <p>De expert stelt vast wat er staat, en vergelijkt dat met wat verzekerd is. Loopt dat uiteen, dan zijn er drie uitkomsten, oplopend in ernst:</p>
    <ol>
      <li><strong>Het niet-geregistreerde deel valt buiten de uitkering.</strong> De aanbouw waar de brand begon wordt niet vergoed; de rest wel.</li>
      <li><strong>De evenredigheidsregel treft de hele schade.</strong> Het opgegeven kapitaal blijkt op een kleiner gebouw te slaan dan er in werkelijkheid staat, en de uitkering wordt naar rato gekort — ook op het deel dat wél geregistreerd is.</li>
      <li><strong>De verzekeraar beroept zich op een onjuiste risico-opgave.</strong> Als de werkelijke situatie wezenlijk afwijkt van wat is verklaard — een woonhuis waar een schuur is verzekerd, of bewoning op een perceel dat als onbebouwd te boek staat — kan de dekking als geheel ter discussie komen te staan.</li>
    </ol>
    <div class="callout">
      <span class="callout-label">De enige verstandige lijn</span>
      Geef de werkelijke situatie op, ook als die rommelig is. Een verzekeraar die vooraf weet dat de gebruiksvergunning ontbreekt en tóch een polis afgeeft, heeft dat risico geaccepteerd. Een verzekeraar die daar bij de schade achter komt, heeft dat niet. Het verschil tussen die twee is de hele uitkering.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="controle">
  <div class="container narrow article-body">
    <h2 id="controle">Hoe u het vóór aankoop controleert</h2>
    <p>Dit is een uur werk en het voorkomt het grootste deel van de problemen op deze pagina. Vraag deze documenten op, of laat uw advocaat ze opvragen:</p>
    <ul>
      <li><strong>Caderneta predial</strong> — het fiscale uittreksel bij de Finanças. Kijk of het perceel <em>urbano</em> of <em>rústico</em> is, en of de vermelde oppervlakte overeenkomt met wat u ziet. Staat er een gebouw van 60 m² geregistreerd en meet u er 140, dan is 80 m² administratief niet aanwezig.</li>
      <li><strong>Certidão permanente do registo predial</strong> — het kadastrale uittreksel. Dit toont eigendom, hypotheken en beslagen.</li>
      <li><strong>Licença de utilização</strong> — de gebruiksvergunning van de câmara, met de bestemming. Voor bouw van vóór 1951 bestaat deze vaak niet en volstaat een verklaring van de gemeente over de ouderdom.</li>
      <li><strong>Planta de localização</strong> en de goedgekeurde bouwtekeningen bij de câmara. Vergelijk die met de werkelijkheid: de aanbouw, het zwembad en de garage die er wel staan maar niet op de tekening.</li>
    </ul>
    <p>Vindt u een afwijking, dan is dat geen reden om af te haken. Het is een onderhandelingspunt over de prijs en een kwestie van wie het legalisatietraject betaalt. Een <em>legalização</em> via een architect en de câmara is bij bestaande bouw op urbano vaak haalbaar; op rústico is dat wezenlijk moeilijker en soms uitgesloten. Laat dat beoordelen vóór de <em>escritura</em>, niet erna.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="hypotheek">
  <div class="container narrow article-body">
    <h2 id="hypotheek">Met een hypotheek is de keuze al gemaakt</h2>
    <p>Financiert u met een Portugese bank, dan wordt het vraagstuk eenvoudig: de bank vereist een gelegaliseerde woning met een gebruiksvergunning, en een woonverzekering met de bank als begunstigde tot het bedrag van de lening. Zonder legalisatie komt de taxatie er niet doorheen en komt de financiering er niet.</p>
    <p>Dat maakt de hypotheekroute in dit opzicht veiliger: de bank doet een controle die u anders zelf had moeten doen. Het maakt hem ook onbuigzamer — een pand dat u contant zou kunnen kopen met een acceptabel risico, is met financiering simpelweg geen optie tot het traject is afgerond.</p>
    <p>Let daarbij op de verzekering die de bank aanbiedt. Die is bijna altijd van één maatschappij, het kapitaal wordt gekoppeld aan de hoogte van de lening in plaats van aan de herbouwwaarde, en dat is niet hetzelfde bedrag. U bent vrij om de polis elders te sluiten zolang de bank als begunstigde is opgenomen en de dekking aan de gestelde eisen voldoet. Zie ook onze pagina over de <a href="/nl/woonverzekering-portugal/">woonverzekering en de herbouwwaarde</a>.</p>
  </div>
</section>`,
    faqTitle: 'Niet-gelegaliseerde woning — veelgestelde vragen',
    faq: [
      {
        q: 'Kan ik een woning verzekeren die niet gelegaliseerd is?',
        a: '<p>Gedeeltelijk. Inboedel en aansprakelijkheid zijn doorgaans wel te verzekeren, want die hangen niet af van de status van het gebouw. Het opstalkapitaal van een gebouw dat nergens geregistreerd staat, is dat meestal niet. Staat het gebouw wel in de caderneta maar ontbreekt de gebruiksvergunning, dan verschilt het per verzekeraar — de moeite waard om het bij meerdere voor te leggen.</p>',
      },
      {
        q: 'Wat gebeurt er bij een schade als blijkt dat een deel niet geregistreerd is?',
        a: '<p>In het gunstigste geval valt alleen dat deel buiten de uitkering. Vaker wordt de evenredigheidsregel toegepast omdat het opgegeven kapitaal op een kleiner gebouw sloeg, en wordt de hele schade naar rato gekort. In het zwaarste geval beroept de verzekeraar zich op een onjuiste risico-opgave en staat de dekking als geheel ter discussie.</p>',
      },
      {
        q: 'Hoe controleer ik of de woning gelegaliseerd is?',
        a: '<p>Vraag de caderneta predial op bij de Finanças, de certidão permanente bij het kadaster, en de licença de utilização bij de câmara. Vergelijk de geregistreerde oppervlakte met de werkelijke, en de goedgekeurde bouwtekeningen met wat er staat. Doe dit vóór de escritura: daarna is het een probleem dat u heeft gekocht in plaats van een onderhandelingspunt.</p>',
      },
      {
        q: 'Moet ik het aan de verzekeraar vertellen?',
        a: '<p>Ja, en dat is niet alleen een morele kwestie. Een verzekeraar die vooraf weet dat de gebruiksvergunning ontbreekt en toch accepteert, heeft dat risico aanvaard. Een verzekeraar die er bij de schade achter komt, heeft dat niet en kan de dekking betwisten. Het verschil tussen die twee situaties is de volledige uitkering.</p>',
      },
      {
        q: 'Kan ik een niet-gelegaliseerde woning met een hypotheek kopen?',
        a: '<p>In de regel niet. Een Portugese bank vereist een gelegaliseerd pand met gebruiksvergunning en een woonverzekering met de bank als begunstigde. Zonder legalisatie komt de taxatie er niet doorheen. Let er daarbij op dat de bank het verzekerde kapitaal graag koppelt aan de lening; verzeker op herbouwwaarde, en u bent vrij die polis elders te sluiten.</p>',
      },
    ],
    related: [
      { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal' },
      { url: '/nl/bosbrandrisico-woonverzekering-portugal/', label: 'Bosbrandrisico en uw woonverzekering' },
      { url: '/en/blog/home-insurance-legalization/', label: 'Home insurance and legalization (Engels)' },
    ],
    article: {
      tag: 'Wonen',
      excerpt:
        'Rústico kopen met bestaande bebouwing: wat verzekerbaar is en wat niet, de drie manieren waarop het bij een schade misgaat, en de vier documenten die u vóór de escritura opvraagt.',
      readingTime: 10,
      dateLabel: 'Augustus 2026',
    },
  },
];
