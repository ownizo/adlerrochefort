import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * Dutch cluster, tweede fase (content/cluster-completion). Vijf nieuwe
 * pagina's, elk gebouwd op reeds geverifieerde feiten uit deze sessie in
 * plaats van nieuw onderzoek: de evenredigheidsregel-satelliet en de
 * schade-pagina hergebruiken wat dit rondje al voor de EN proportional-rule
 * cluster en het EN disputing-sum-insured-portugal-artikel is uitgezocht;
 * de VvE-pagina hergebruikt de feiten uit het EN artikel over Lissabon/
 * Cascais-appartementen; de zorgpagina hergebruikt de reeds bestaande
 * mutualista-sectie op zorgverzekering-portugal en verwijst naar de EN
 * MGEN-acceptatievergelijking voor verdere diepgang.
 *
 * De hub (verzekeringen-portugal, hub.mjs) wordt hier bewust niet
 * aangeraakt — geen nieuwe hub-secties, geen nieuwe ankers daar. Schade
 * melden en betwisten past bij geen van de vier bestaande hub-secties als
 * eigen categorie, maar het bronmateriaal (RJCS art. 50.º, perito de parte)
 * is in de EN-cluster onder "home-property" ingedeeld (disputing-sum-
 * insured-portugal) — dezelfde indeling wordt hier aangehouden: CAT Wonen,
 * net als bij de vier bestaande Wonen-pagina's.
 */

const CAT_WONEN = { name: 'Wonen', url: '/nl/verzekeringen-portugal/#wonen' };
const CAT_ZORG = { name: 'Zorg', url: '/nl/verzekeringen-portugal/#zorg' };

// ---------------------------------------------------------------------------
// 1. Evenredigheidsregel bij totaal verlies
// ---------------------------------------------------------------------------
const EVENREDIGHEID_TOTAAL_VERLIES = {
  slug: 'evenredigheidsregel-totaal-verlies-portugal',
  url: '/nl/evenredigheidsregel-totaal-verlies-portugal/',
  title: 'De evenredigheidsregel bij totaal verlies in Portugal | Adler & Rochefort',
  description:
    'Wat een Portugese verzekeraar precies uitkeert na een totaal verlies: sloop, bijkomende kosten, btw en tijdelijke huisvesting, de volgorde waarin de expert dit doorrekent, en hoe de evenredigheidsregel daarop ingrijpt.',
  keywords:
    'evenredigheidsregel totaal verlies Portugal, regra proporcional totaalschade, herbouwwaarde berekenen Portugal, onderverzekering totaalschade, woonverzekering sloopkosten Portugal',
  eyebrow: 'Evenredigheidsregel',
  h1: 'De evenredigheidsregel bij totaal verlies',
  standfirst:
    'Onze pagina over <a href="/nl/woonverzekering-portugal/">de woonverzekering</a> legt de evenredigheidsregel in algemene termen uit. Deze pagina gaat specifiek over een totaal verlies: wat een uitkering dan werkelijk omvat, in welke volgorde de expert dat doorrekent, en waarom onderverzekering bij een totaalschade harder aankomt dan bij een kleine schade.',
  heroMeta: 'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: september 2026',
  hreflang: {},
  breadcrumb: [...BREADCRUMB_ROOT, CAT_WONEN, { name: 'Evenredigheidsregel bij totaal verlies' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'Onderverzekering bij aanvang treft niet alleen de sloop en de kosten — het treft de hele uitkering, evenredig.',
  formBranch: 'Woonverzekering',
  formSubject: 'evenredigheidsregel en totaal verlies',
  formIntro:
    'Twijfelt u of uw verzekerd bedrag klopt? Geef ons het type woning, bouwjaar en oppervlakte door, dan rekenen wij mee wat een realistische herbouwwaarde is.',
  formPlaceholder:
    'Bijvoorbeeld: type woning, bouwjaar, oppervlakte, of er een zwembad of bijgebouwen zijn, en het huidige verzekerde bedrag.',
  sections: `
<section class="section plain" aria-labelledby="volgorde">
  <div class="container narrow article-body">
    <h2 id="volgorde">De volgorde waarin de expert een totaalschade doorrekent</h2>
    <p>Bij een totaal verlies is "het huis herbouwen" geen los bedrag maar een optelsom, en de expert rekent die in een vaste volgorde door:</p>
    <ol>
      <li>Vaststellen dat de oorzaak gedekt is, en of er een specifieke uitsluiting van toepassing is.</li>
      <li>Classificeren of het om een totaal of gedeeltelijk verlies gaat — op basis van of herstel technisch en economisch nog zinvol is, niet op basis van hoe erg de schade eruitziet.</li>
      <li>Het verzekerde bedrag vergelijken met de werkelijke herbouwwaarde. Is dat bedrag te laag, dan treft de <strong>evenredigheidsregel</strong> de hele berekening die volgt, niet alleen een deel ervan.</li>
      <li>De herbouw zelf prijzen: de kosten om het gebouw terug te brengen naar de staat van vóór het verlies, niet om het te verbeteren.</li>
      <li>Sloop- en opruimkosten optellen.</li>
      <li>Bijkomende kosten optellen — architect, constructeur, projectbegeleiding — die een herbouw van deze omvang daadwerkelijk vereist.</li>
      <li>Btw toepassen op de herbouwcomponenten, als de grondslag van het verzekerde bedrag btw-inclusief is.</li>
      <li>Het eigen risico toepassen.</li>
      <li>Los daarvan: tijdelijke huisvesting beoordelen voor de periode die een herbouw van deze omvang redelijkerwijs vergt.</li>
    </ol>
    <p>Stappen 3 tot en met 8 zijn één rekenketen, geen gescheiden potjes. Onderverzekering die bij stap 3 wordt vastgesteld, verlaagt elke euro die daarna volgt — inclusief de bijkomende kosten en de sloop. Dat is het punt dat mensen het lastigst te geloven vinden, totdat het hun eigen schade is.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sloop">
  <div class="container narrow article-body">
    <h2 id="sloop">Sloop- en opruimkosten</h2>
    <p>Voordat er iets herbouwd kan worden, moet wat er nog staat doorgaans worden gesloopt en afgevoerd. De meeste Portugese multirriscos-polissen dekken dit, maar controleer of het <strong>binnen</strong> het verzekerde opstalkapitaal valt — en dus concurreert met het geld dat overblijft om te herbouwen — of als <strong>apart sublimiet</strong> daarbovenop. Dat laatste is voor u aanzienlijk gunstiger en de moeite waard om expliciet na te vragen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="bijkomende-kosten">
  <div class="container narrow article-body">
    <h2 id="bijkomende-kosten">Bijkomende kosten en btw</h2>
    <p>Een herbouw van enige omvang vereist een architect, mogelijk een constructeur, en vergunningen bij de câmara municipal. Deze kosten zijn geen bijzaak — bij een volledige herbouw vormen ze doorgaans een substantieel deel van de bouwkosten zelf, en een verzekerd bedrag dat puur op een €/m&sup2;-bouwkostencijfer is gebaseerd, zonder marge voor deze kosten, is al onderverzekerd voordat er iets is gebeurd.</p>
    <p>Btw op bouwwerkzaamheden in Portugal loopt mee tegen het standaardtarief. Wat voor uw polis telt, is smaller en specifieker: of het verzekerde bedrag dat u heeft opgegeven en het bedrag waarop de verzekeraar afrekent, op dezelfde btw-grondslag staan. Een verzekerd bedrag op netto bouwkosten, uitbetaald tegen een herbouwfactuur inclusief btw, schiet tekort met precies dat belastingbedrag — los van en bovenop een eventuele onderverzekering.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="herbouwwaarde">
  <div class="container narrow article-body">
    <h2 id="herbouwwaarde">De herbouwwaarde correct vaststellen</h2>
    <p>De basis van de hele berekening is de herbouwwaarde: bewoonbare oppervlakte in m² vermenigvuldigd met de bouwkosten per m² voor dat type constructie, plus zwembad, ommuring, bijgebouwen en bijzondere afwerkingen als aparte posten — niet in het gemiddelde meegerekend. Zie <a href="/nl/woonverzekering-portugal/">onze pagina over de woonverzekering</a> voor de volledige toelichting en de vuistregel.</p>
    <p>Vertiefend, met rekenvoorbeelden en een uitgewerkte vergelijking tussen aankoopprijs en herbouwwaarde: <a href="/en/blog/outdated-insured-values/" hreflang="en">Underinsurance in Portugal: the Proportional Rule and Outdated Insured Values</a> en <a href="/en/blog/setting-rebuild-value-portugal/" hreflang="en">Setting the Rebuild Value: Getting to a Number That Holds Up</a> (beide Engels).</p>
  </div>
</section>

<section class="section plain" aria-labelledby="afwijking">
  <div class="container narrow article-body">
    <h2 id="afwijking">Waar u de evenredigheidsregel kunt afwenden</h2>
    <p>Sommige polisvoorwaarden bevatten een tolerantiemarge — de regel treedt pas in werking boven een bepaald percentage onderverzekering, vaak 10 of 15 procent — of, bij enkele specialistische voorwaarden, een volledige afstand van de evenredigheidsregel. Dat laatste is doorgaans duurder en gebonden aan voorwaarden, zoals een periodieke herwaardering van het verzekerde bedrag. Vraag dit expliciet en schriftelijk na vóór het afsluiten van de polis, niet na een schade.</p>
  </div>
</section>`,
  faqTitle: 'Evenredigheidsregel bij totaal verlies — veelgestelde vragen',
  faq: [
    {
      q: 'Geldt de evenredigheidsregel ook bij een totaal verlies, niet alleen bij een kleine schade?',
      a: '<p>Ja, en juist dan is het effect het grootst: de regel treft de gehele rekenketen — herbouw, sloop, bijkomende kosten — niet alleen een deel van de schade.</p>',
    },
    {
      q: 'Zijn sloopkosten standaard gedekt?',
      a: '<p>Meestal wel, maar controleer of dit binnen het verzekerde opstalkapitaal valt of als apart sublimiet daarbovenop — dat laatste is voor u aanzienlijk gunstiger.</p>',
    },
    {
      q: 'Moet het verzekerde bedrag btw-inclusief zijn?',
      a: '<p>Bevestig dit schriftelijk bij uw verzekeraar. Een verzekerd bedrag op netto bouwkosten, uitbetaald tegen een btw-inclusieve herbouwfactuur, schiet tekort met precies het belastingbedrag.</p>',
    },
    {
      q: 'Kan ik de evenredigheidsregel laten afwenden?',
      a: '<p>Bij sommige voorwaarden wel, via een tolerantiemarge of een volledige afstand van de regel — doorgaans tegen een hogere premie en onder voorwaarden zoals periodieke herwaardering. Vraag dit expliciet na.</p>',
    },
  ],
  related: [
    { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal' },
    { url: '/en/blog/outdated-insured-values/', label: 'Underinsurance in Portugal: the Proportional Rule and Outdated Insured Values (Engels)' },
    { url: '/en/blog/total-loss-settlement-portugal/', label: "What a Total-Loss Settlement Actually Covers (Engels)" },
  ],
  article: {
    tag: 'Wonen',
    excerpt: 'Sloop, bijkomende kosten, btw en tijdelijke huisvesting: wat een totaalschade-uitkering werkelijk omvat, en hoe de evenredigheidsregel daarop ingrijpt.',
    readingTime: 8,
    dateLabel: 'September 2026',
  },
};

// ---------------------------------------------------------------------------
// 2. Aardbevingsdekking in Portugal
// ---------------------------------------------------------------------------
const AARDBEVING = {
  slug: 'aardbevingsdekking-portugal',
  url: '/nl/aardbevingsdekking-portugal/',
  title: 'Aardbevingsdekking in Portugal: wat het dekt en waarom het in de Algarve telt | Adler & Rochefort',
  description:
    'Aardbevingsdekking zit in Portugal niet standaard in een multirriscos. Wat de dekking omvat, hoe de premie wordt bepaald, en waarom het zuidwesten van Portugal — met de aardbeving van 1755 als referentiepunt — deze dekking serieus moet overwegen.',
  keywords:
    'aardbevingsdekking Portugal, fenómenos sísmicos verzekering, aardbeving Algarve verzekering, seismisch risico Portugal woning, aardbeving 1755 Lissabon',
  eyebrow: 'Aardbeving',
  h1: 'Aardbevingsdekking in Portugal',
  standfirst:
    'Onze pagina over de woonverzekering noemt aardbevingsdekking kort. Deze pagina gaat dieper: wat de dekking precies omvat, hoe de premie wordt opgebouwd, en waarom dit voor het zuidwesten van Portugal geen theoretische vraag is.',
  heroMeta: 'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: september 2026',
  hreflang: {},
  breadcrumb: [...BREADCRUMB_ROOT, CAT_WONEN, { name: 'Aardbevingsdekking' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'In de Algarve is aardbevingsdekking een keuze die u bewust maakt, niet een die u per ongeluk mist.',
  formBranch: 'Woonverzekering',
  formSubject: 'aardbevingsdekking',
  formIntro:
    'Wilt u weten of aardbevingsdekking voor uw woning zinvol is? Geef ons de locatie, het bouwjaar en het constructietype door.',
  formPlaceholder:
    'Bijvoorbeeld: gemeente, bouwjaar, constructietype (beton, traditioneel steen), en of u al aardbevingsdekking heeft.',
  sections: `
<section class="section plain" aria-labelledby="niet-standaard">
  <div class="container narrow article-body">
    <h2 id="niet-standaard">Niet standaard, en dat is geen toeval</h2>
    <p>Aardbevingsdekking (<em>fenómenos sísmicos</em>) zit in Portugal <strong>niet</strong> standaard in een <em>seguro multirriscos</em>. Het is een aanvullende dekking die u apart aanvinkt en waarvoor u apart betaalt — een bewuste keuze van de markt, omdat het risico regionaal sterk verschilt en een uniforme premie voor heel Portugal voor de meeste polishouders onnodig duur zou zijn.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="1755">
  <div class="container narrow article-body">
    <h2 id="1755">Waarom dit voor het zuidwesten geen theoretische vraag is</h2>
    <p>Het epicentrum van de aardbeving van 1755, die Lissabon verwoestte en de Algarve-kust met een tsunami trof, lag voor de kust van Kaap Sint-Vincent — enkele tientallen kilometers van Lagos. De regio ligt op een actieve breukzone, en de seismische risicokaarten geven het zuiden van Portugal een hogere klasse dan het noorden. Dat is geen historische curiositeit maar de reden waarom verzekeraars het zuidwesten anders beprijzen dan het binnenland in het noorden.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="premie">
  <div class="container narrow article-body">
    <h2 id="premie">Hoe de premie wordt bepaald</h2>
    <p>De premie voor aardbevingsdekking hangt af van drie factoren:</p>
    <ul>
      <li><strong>Zone.</strong> Het zuidwesten van Portugal valt in een hogere seismische klasse dan het noorden.</li>
      <li><strong>Bouwjaar.</strong> Nieuwere woningen, gebouwd volgens actuele aardbevingsnormen, krijgen doorgaans een bescheiden opslag.</li>
      <li><strong>Constructietype.</strong> Een oud pand met dragende steenmuren zonder verstevigingen krijgt een hogere opslag — en juist daar is het risico op werkelijke schade ook het grootst.</li>
    </ul>
    <p>Wat de dekking doorgaans omvat: schade aan het gebouw zelf door de trilling, en bij de meeste voorwaarden ook gevolgschade zoals brand die door de aardbeving is veroorzaakt. Controleer specifiek of tsunamigevolgschade voor een kustwoning is meegedekt, aangezien dit per polis kan verschillen.</p>
    <div class="callout">
      <span class="callout-label">Onze positie</span>
      In de Algarve is dit een dekking die u bewust moet afwijzen, niet een die u per ongeluk mist omdat niemand hem noemde.
    </div>
  </div>
</section>`,
  faqTitle: 'Aardbevingsdekking — veelgestelde vragen',
  faq: [
    {
      q: 'Zit aardbevingsdekking standaard in mijn woonverzekering?',
      a: '<p>Nee. Het is in Portugal een aanvullende dekking met een aparte premie, die u expliciet moet aanvinken.</p>',
    },
    {
      q: 'Is dit risico in de Algarve reëel?',
      a: '<p>Ja. De regio ligt bij een actieve breukzone — het epicentrum van de aardbeving van 1755 lag voor de kust van Kaap Sint-Vincent, enkele tientallen kilometers van Lagos — en valt in een hogere seismische klasse dan het noorden van Portugal.</p>',
    },
    {
      q: 'Hoe wordt de premie bepaald?',
      a: '<p>Op basis van zone, bouwjaar en constructietype. Voor een moderne woning is de opslag meestal bescheiden; voor oude steenbouw zonder verstevigingen ligt hij hoger.</p>',
    },
    {
      q: 'Dekt aardbevingsdekking ook een tsunami?',
      a: '<p>Dit verschilt per polis — controleer specifiek of gevolgschade zoals een tsunami is meegedekt, vooral bij een woning dicht bij de kust.</p>',
    },
  ],
  related: [
    { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal' },
    { url: '/nl/bosbrandrisico-woonverzekering-portugal/', label: 'Bosbrandrisico en uw woonverzekering' },
  ],
  article: {
    tag: 'Wonen',
    excerpt: 'Waarom aardbevingsdekking in Portugal geen standaardonderdeel is, hoe de premie wordt bepaald, en waarom het zuidwesten van Portugal dit serieus moet overwegen.',
    readingTime: 6,
    dateLabel: 'September 2026',
  },
};

// ---------------------------------------------------------------------------
// 3. Zorgverzekering met een bestaande aandoening
// ---------------------------------------------------------------------------
const BESTAANDE_AANDOENING = {
  slug: 'zorgverzekering-bestaande-aandoening-portugal',
  url: '/nl/zorgverzekering-bestaande-aandoening-portugal/',
  title: 'Zorgverzekering met een bestaande aandoening in Portugal | Adler & Rochefort',
  description:
    'Een bestaande aandoening sluit een particuliere zorgverzekering in Portugal niet automatisch uit. Wat de medische acceptatie ermee doet, het verschil tussen uitsluiting en afwijzing, en de mutualistische route als de reguliere aanvraag niet lukt.',
  keywords:
    'zorgverzekering bestaande aandoening Portugal, medische acceptatie zorgverzekering Portugal, voorgeschiedenis zorgverzekering Portugal, MGEN bestaande aandoening, mutualistische zorgverzekering Portugal',
  eyebrow: 'Zorgverzekering',
  h1: 'Zorgverzekering met een bestaande aandoening',
  standfirst:
    'Een bestaande aandoening betekent niet automatisch geen particuliere zorgverzekering in Portugal. Het verandert hoe de medische acceptatie verloopt en wat een realistische uitkomst is — en soms welke route nog openstaat.',
  heroMeta: 'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: september 2026',
  hreflang: {},
  breadcrumb: [...BREADCRUMB_ROOT, CAT_ZORG, { name: 'Bestaande aandoening' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  formBranch: 'Zorgverzekering',
  formSubject: 'zorgverzekering met bestaande aandoening',
  // Both strings below were corrected on the published page in the
  // Especificação v2 A1 sweep — the fifth clinical-data instance listed in
  // the header of scripts/check-clinical-data-guard.mjs, and the one that
  // was "not driven by any generator at all" as far as that sweep could
  // tell — but the correction never reached this file, so the old wording
  // sat here ready to be re-published. Found exactly that way: running the
  // generator to add the optional `bedrijf` field put both back and the
  // guard failed. The page's whole subject is pre-existing conditions, so
  // it has to name the concept; what it must not do is invite the visitor
  // to type the condition and its treatment into a public form. The live
  // wording, restored here, asks for age and prior refusal instead and
  // says the condition itself is discussed separately — which is also the
  // "nooit via het formulier" phrasing the guard recognises as the
  // reassurance pattern rather than a solicitation.
  formIntro:
    'Vertel ons uw leeftijd en of u al een afwijzing van een verzekeraar heeft ontvangen — de aandoening zelf bespreken wij apart, nooit via het formulier.',
  formPlaceholder:
    'Bijvoorbeeld: uw leeftijd, of u al een afwijzing van een verzekeraar heeft ontvangen, en of een overstap van uw huidige verzekering een optie is.',
  sections: `
<section class="section plain" aria-labelledby="acceptatie">
  <div class="container narrow article-body">
    <h2 id="acceptatie">De medische acceptatie, en wat een bestaande aandoening daarmee doet</h2>
    <p>Bij een reguliere Portugese zorgverzekering vult u een gezondheidsverklaring in. Een bestaande aandoening leidt daarbij tot een van drie uitkomsten: uitsluiting van de aandoening zelf bij verder normale dekking, meeverzekering tegen een premietoeslag, of — bij zwaardere gevallen — afwijzing van de volledige aanvraag. Welke van de drie van toepassing is, bepaalt de individuele verzekeraar op basis van eigen risicobeoordeling, niet een uniforme marktstandaard.</p>
    <p>Volledigheid is daarbij niet onderhandelbaar: een aandoening verzwijgen wordt zichtbaar bij de eerste daarmee samenhangende claim — en dan staat niet die claim ter discussie, maar de polis als geheel.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="uitsluiting">
  <div class="container narrow article-body">
    <h2 id="uitsluiting">Uitsluiting is iets anders dan afwijzing</h2>
    <p>Een uitsluiting van de specifieke aandoening betekent: de polis dekt u normaal voor al het overige, alleen de genoemde aandoening valt eruit. Dat is een wezenlijk andere uitkomst dan een volledige afwijzing, en de twee worden in de praktijk vaak door elkaar gehaald. Voordat u een aanbod met uitsluiting afwijst, is het de moeite waard te controleren hoe nauw de uitsluiting daadwerkelijk is geformuleerd.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mutualista">
  <div class="container narrow article-body">
    <h2 id="mutualista">Als de reguliere aanvraag niet lukt: de mutualistische route</h2>
    <p>Leidt de gezondheidsverklaring tot afwijzing of een onacceptabele uitsluiting, dan is de mutualistische route — zoals bij <strong>MGEN</strong> — vaak de volgende realistische stap. Toelating verloopt daar via lidmaatschap in plaats van individuele risicoselectie: geen gezondheidsvragen, geen maximale toetredingsleeftijd. De tegenprestatie is een wachttijd van 365 dagen voordat een reeds bestaande aandoening wordt gedekt. Details over dit mechanisme staan op onze pagina over de <a href="/nl/zorgverzekering-portugal/">zorgverzekering in Portugal</a>.</p>
    <p>Voor een uitgebreide, Engelstalige vergelijking van MGEN, Médis, Allianz en APRIL op basis van acceptatiecriteria in plaats van prijs: <a href="/en/blog/mgen-medis-allianz-april-acceptance-comparison/" hreflang="en">MGEN, Médis, Allianz and APRIL: Compared on Acceptance, Not Price</a> (Engels).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="aanpak">
  <div class="container narrow article-body">
    <h2 id="aanpak">De praktische aanpak</h2>
    <p>Stel een klinische samenvatting van de aandoening op — diagnose, behandelgeschiedenis, huidige medicatie — en laat eerst onderzoeken hoe een reguliere verzekeraar hiermee omgaat: volledige afwijzing, uitsluiting van de aandoening, of acceptatie tegen toeslag. Pas als die toetsing geen acceptabel resultaat oplevert, wordt de mutualistische route de eigenlijke optie — met de kanttekening dat de wachttijd van 365 dagen loopt vanaf de daadwerkelijke ingangsdatum, en dus zo vroeg mogelijk moet starten.</p>
  </div>
</section>`,
  faqTitle: 'Zorgverzekering met bestaande aandoening — veelgestelde vragen',
  faq: [
    {
      q: 'Sluit een bestaande aandoening een zorgverzekering in Portugal uit?',
      a: '<p>Niet automatisch. Afhankelijk van verzekeraar en aandoening leidt de gezondheidsverklaring tot uitsluiting van de aandoening, een premietoeslag, of in zwaardere gevallen afwijzing.</p>',
    },
    {
      q: 'Wat betekent een uitsluiting concreet?',
      a: '<p>De polis dekt u normaal voor alles behalve de uitgesloten aandoening zelf. Controleer hoe nauw de uitsluiting is geformuleerd voordat u het aanbod afwijst.</p>',
    },
    {
      q: 'Wat als ik word afgewezen?',
      a: '<p>Dan is de mutualistische route (zoals MGEN) meestal de volgende stap — toelating via lidmaatschap in plaats van gezondheidsverklaring, met een wachttijd van 365 dagen voor de bestaande aandoening.</p>',
    },
    {
      q: 'Kan ik beter niets vermelden over de aandoening?',
      a: '<p>Nee. Onvolledige opgave wordt zichtbaar bij de eerste daarmee samenhangende claim, en dan staat de hele polis ter discussie, niet alleen de individuele claim.</p>',
    },
  ],
  related: [
    { url: '/nl/zorgverzekering-portugal/', label: 'Zorgverzekering in Portugal' },
    { url: '/nl/s1-formulier-cak-portugal/', label: 'Het S1-formulier en het CAK' },
    { url: '/en/blog/mgen-medis-allianz-april-acceptance-comparison/', label: 'MGEN, Médis, Allianz and APRIL: Compared on Acceptance, Not Price (Engels)' },
  ],
  article: {
    tag: 'Zorg',
    excerpt: 'Wat een bestaande aandoening met de medische acceptatie doet, het verschil tussen uitsluiting en afwijzing, en de mutualistische route.',
    readingTime: 7,
    dateLabel: 'September 2026',
  },
};

// ---------------------------------------------------------------------------
// 4. Schade melden en betwisten
// ---------------------------------------------------------------------------
const SCHADE_BETWISTEN = {
  slug: 'schade-melden-en-betwisten-portugal',
  url: '/nl/schade-melden-en-betwisten-portugal/',
  title: 'Schade melden en betwisten in Portugal: perito de parte, CIMPAS, Livro de Reclamações en ASF | Adler & Rochefort',
  description:
    'Wat te doen als u het niet eens bent met de beoordeling van een schade door een Portugese verzekeraar: uw eigen perito de parte inschakelen, de arbitrageclausule die daarop volgt, en waar CIMPAS, het Livro de Reclamações en de ASF passen.',
  keywords:
    'schade betwisten Portugal verzekering, perito de parte Portugal, CIMPAS Portugal, Livro de Reclamações verzekering, ASF klacht verzekering, schaderegeling betwisten Portugal',
  eyebrow: 'Schadeafhandeling',
  h1: 'Schade melden en betwisten in Portugal',
  standfirst:
    'De beoordeling van een verzekeraar is niet het laatste woord. Portugees verzekeringsrecht voorziet expliciet in een manier om die te betwisten — en er zijn twee onafhankelijke routes daarnaast.',
  heroMeta: 'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: september 2026',
  hreflang: {},
  breadcrumb: [...BREADCRUMB_ROOT, CAT_WONEN, { name: 'Schade melden en betwisten' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'Het cijfer van de expert van de verzekeraar is een beoordeling, geen vonnis.',
  formBranch: 'Woonverzekering',
  formSubject: 'schade betwisten',
  formIntro:
    'Bent u het niet eens met een schadebeoordeling? Stuur ons wat u heeft — de beoordeling van de verzekeraar en de polisvoorwaarden — dan zeggen wij wat de arbitrageclausule voor uw polis daadwerkelijk inhoudt.',
  formPlaceholder:
    'Bijvoorbeeld: welke verzekeraar, wat er is geclaimd, wat de verzekeraar heeft aangeboden, en waar het proces nu staat.',
  sections: `
<section class="section plain" aria-labelledby="schriftelijk">
  <div class="container narrow article-body">
    <h2 id="schriftelijk">Begin met een schriftelijke betwisting</h2>
    <p>Het eerste cijfer van de verzekeraar komt van een expert die de verzekeraar zelf heeft aangesteld en betaalt. Vraag schriftelijk om de onderbouwing: wat is er gemeten, welk bewijs is gebruikt, en welke polisclausule of uitsluiting tot de vermindering heeft geleid. Veel geschillen worden al op dit punt opgelost, zodra de daadwerkelijke redenering op papier staat in plaats van een totaalbedrag in een e-mail.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="perito">
  <div class="container narrow article-body">
    <h2 id="perito">De perito de parte: uw eigen expert aanstellen</h2>
    <p>Lost de schriftelijke toelichting het niet op, dan voorziet het Portugese verzekeringsrecht zelf precies in deze situatie. Artikel 50.&ordm; van het Regime Jurídico do Contrato de Seguro (RJCS, Decreto-Lei n.&ordm; 72/2008) — <em>perícia arbitral</em> — bepaalt dat het vaststellen van oorzaken, omstandigheden en gevolgen van een schade kan worden opgedragen aan arbitrale experts die door de partijen worden benoemd, op de voorwaarden die in de polis zijn vastgelegd of nadien zijn overeengekomen; tenzij anders overeengekomen, bindt die vaststelling verzekeraar, verzekeringnemer en verzekerde gezamenlijk. In de praktijk betekent "peritagem" op een Portugese woonpolis dit: elke partij benoemt een expert — de eigen schade-expert van de verzekeraar, en uw <strong>perito de parte</strong>, een onafhankelijke expert die u zelf aanstelt en betaalt — en bij onenigheid tussen beide bepaalt de polisvoorwaarde hoe een derde arbiter wordt ingeschakeld.</p>
    <p>Bevestig twee dingen schriftelijk voordat u iemand inschakelt: wat de specifieke polisvoorwaarde zegt over hoe de derde arbiter wordt gekozen en betaald, en of er een termijn staat op het inroepen van dit mechanisme na het uitbrengen van het cijfer van de verzekeraar. Artikel 50.&ordm; legt de wettelijke basis vast; de uitvoering laat het over aan het contract, dus de bepalende clausule in uw eigen polis is wat het daadwerkelijk regelt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="cimpas">
  <div class="container narrow article-body">
    <h2 id="cimpas">Waar CIMPAS past</h2>
    <p>CIMPAS — het Centro de Informação, Mediação e Arbitragem de Seguros — is een particuliere, non-profit instantie voor alternatieve geschillenbeslechting, erkend door het Ministerie van Justitie, specifiek voor geschillen die voortvloeien uit verzekeringscontracten. Het werkt in drie fasen: informatie, mediatie en, als dat niet tot een oplossing leidt, arbitrage. Het staat rechtstreeks open voor polishouders, naast de interne klachtenprocedure van de verzekeraar en de rechtbank — geen vervanging van beide — en is een wezenlijk andere route dan de perito de parte hierboven: de arbitrale experts bij peritagem worden onder de polis zelf benoemd om een feitelijk geschil over de schade te beslechten; CIMPAS is een onafhankelijke instantie waar een polishouder het bredere geschil aan kan voorleggen.</p>
    <div class="callout">
      <span class="callout-label">Wat nog niet is bevestigd</span>
      Of de arbitragefase van CIMPAS specifiek en structureel geschillen over een schadebedrag behandelt (in tegenstelling tot dekkingsgeschillen of contractinterpretatie in het algemeen), wat gebruik een consument kost, en of gebruik een voorwaarde is voor of een alternatief voor een gang naar de rechter, is niet tot in detail bevestigd. Wij noemen dit hier als bestaande route, niet als specifiek aanbevolen stap voor een bedragengeschil.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="livro-asf">
  <div class="container narrow article-body">
    <h2 id="livro-asf">Livro de Reclamações en de ASF</h2>
    <p>Twee routes bestaan buiten het contract zelf. Elk bedrijf in Portugal dat met consumenten werkt, verzekeraars inbegrepen, moet toegang bieden tot een <strong>Livro de Reclamações</strong> — fysiek of digitaal — en een daar ingediende klacht wordt doorgestuurd naar de betreffende toezichthouder. Het creëert een gedateerd, officieel dossier; het beslecht het geschil niet zelf en stelt geen schadebedrag vast.</p>
    <p>De <strong>ASF</strong>, de Portugese verzekeringstoezichthouder, houdt toezicht op het gedrag van verzekeraars en neemt klachten rechtstreeks in behandeling via het eigen <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">meldkanaal</a>. Dit is de juiste route zodra u het geschil schriftelijk bij de verzekeraar heeft aangekaart en het onopgelost blijft, of wanneer de klacht gaat over hoe u bent behandeld in plaats van een bedrag dat een tweede beoordeling zou kunnen oplossen. Het vervangt de peritagem niet als manier om een specifieke schade te waarderen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="wat-wij-doen">
  <div class="container narrow article-body">
    <h2 id="wat-wij-doen">Wat een tussenpersoon in dit proces daadwerkelijk doet</h2>
    <p>Adler &amp; Rochefort is niet de verzekeraar, beslecht het geschil niet en bepaalt het schadebedrag niet. Wat wij doen: de correspondentie ordenen zodat de volgorde van wat wanneer is gezegd niet verloren gaat, vooraf bevestigen wat de specifieke polisvoorwaarde over de arbitrageclausule zegt voordat u een expert inschakelt, en helpen de schriftelijke betwisting zo te formuleren dat direct de juiste vraag wordt gesteld. Het aanstellen en betalen van uw eigen perito de parte, en een eventuele escalatie naar het Livro de Reclamações of de ASF, blijft aan u om te instrueren.</p>
  </div>
</section>`,
  faqTitle: 'Schade melden en betwisten — veelgestelde vragen',
  faq: [
    {
      q: 'Is het cijfer van de expert van de verzekeraar definitief?',
      a: '<p>Nee. Het is de eigen beoordeling van de verzekeraar, door iemand die de verzekeraar zelf heeft aangesteld en betaalt. U heeft het recht dit schriftelijk te betwisten en zelf, op eigen kosten, een tegenexpert aan te stellen.</p>',
    },
    {
      q: 'Wie betaalt de perito de parte?',
      a: '<p>Elke partij betaalt de eigen expert. Moet er een derde, onafhankelijke arbiter worden ingeschakeld om een geschil tussen beide te beslechten, dan bepaalt de polisvoorwaarde hoe die kosten worden verdeeld — controleer de voorwaarde, want dit verschilt per verzekeraar.</p>',
    },
    {
      q: 'Wat doet het Livro de Reclamações precies?',
      a: '<p>Het creëert een officieel, gedateerd dossier van de klacht en stuurt een kopie naar de betreffende toezichthouder. Het beslecht het geschil niet zelf en verplicht geen specifiek schadebedrag; de waarde zit in het papieren spoor en het feit dat een toezichthouder het ziet.</p>',
    },
    {
      q: 'Wanneer is het de moeite waard om direct naar de ASF te gaan?',
      a: '<p>Zodra u het geschil schriftelijk bij de verzekeraar heeft aangekaart en het onopgelost blijft, of wanneer de klacht gaat over het gedrag van de verzekeraar in plaats van een bedrag dat een tweede beoordeling zou kunnen oplossen.</p>',
    },
  ],
  related: [
    { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal' },
    { url: '/nl/verzekeringen-portugal/', label: 'Alle verzekeringen in Portugal voor Nederlanders' },
    { url: '/en/blog/disputing-sum-insured-portugal/', label: 'Disputing a Property Claim Settlement in Portugal (Engels)' },
  ],
  article: {
    tag: 'Wonen',
    excerpt: 'De schriftelijke betwisting, de perito de parte arbitrageclausule, en waar CIMPAS, het Livro de Reclamações en de ASF daadwerkelijk passen.',
    readingTime: 8,
    dateLabel: 'September 2026',
  },
};

// ---------------------------------------------------------------------------
// 5. VvE / condominium-verzekering
// ---------------------------------------------------------------------------
const VVE = {
  slug: 'vve-verzekering-portugal',
  url: '/nl/vve-verzekering-portugal/',
  title: 'VvE-verzekering in Portugal: waar de gebouwenpolis eindigt en u begint | Adler & Rochefort',
  description:
    'De polis van uw Portugese VvE (condomínio) dekt het gebouw en de gemeenschappelijke delen — vaak tegen een verouderd bedrag. Wat daarbuiten valt: uw interieur, uw inboedel en uw eigen aansprakelijkheid als bewoner.',
  keywords:
    'VvE verzekering Portugal, condomínio verzekering, propriedade horizontal verzekering, appartement verzekering Portugal, gebouwenpolis condominium Portugal',
  eyebrow: 'VvE / condomínio',
  h1: 'VvE-verzekering: waar de gebouwenpolis eindigt en u begint',
  standfirst:
    'Voor hoogwaardige appartementen in propriedade horizontal komt dezelfde vraag steeds terug: wat dekt de polis van de VvE eigenlijk, en waar begint uw eigen verantwoordelijkheid?',
  heroMeta: 'Verzekeringsagent in Lagos, Algarve · ASF nr. 425591790/3 · Laatst bijgewerkt: september 2026',
  hreflang: {},
  breadcrumb: [...BREADCRUMB_ROOT, CAT_WONEN, { name: 'VvE-verzekering' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'De VvE verzekert een gebouw. U bewoont een interieur — en daar zit bij een gerenoveerd appartement vrijwel de hele waarde.',
  formBranch: 'Woonverzekering',
  formSubject: 'VvE-verzekering en aanvullende dekking',
  formIntro:
    'Weet u niet zeker wat uw VvE-polis dekt? Stuur ons de polisvoorwaarden of vertel wat u weet, dan zeggen wij wat u zelf nog moet regelen.',
  formPlaceholder:
    'Bijvoorbeeld: gemeente, bouwjaar van het gebouw, of het appartement gerenoveerd is, en of u de VvE-polisvoorwaarden heeft.',
  sections: `
<section class="section plain" aria-labelledby="wat-de-vve-dekt">
  <div class="container narrow article-body">
    <h2 id="wat-de-vve-dekt">Wat de polis van de VvE daadwerkelijk doet</h2>
    <p>De Portugese wet verplicht de VvE (<em>condomínio</em>) om brandverzekering te hebben op het gebouw, de gemeenschappelijke delen en de individuele fracties, met een door de vergadering vastgesteld bedrag. Beter beheerde gebouwen breiden dit uit tot een multirriscos-dekking met waterschade, storm en aansprakelijkheid voor de gemeenschappelijke delen. De grenzen ervan zijn consistent: het is een <strong>gebouwenpolis</strong> — niets in uw appartement dat geen deel is van de bouwconstructie valt eronder. Het bedrag is vastgesteld door de vergadering, vaak op basis van een verouderde bouwkostenwaarde, en waar dat bedrag is achtergebleven, kort de evenredigheidsregel elke schade en verdeelt het tekort over de eigenaren. En de polis verzekert de aansprakelijkheid van de VvE — niet die van u.</p>
    <p>De VvE verzekert een gebouw. U bewoont een interieur, en juist daar zit bij een gerenoveerd appartement vrijwel de hele waarde.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="wat-u-zelf-regelt">
  <div class="container narrow article-body">
    <h2 id="wat-u-zelf-regelt">Wat u zelf moet regelen</h2>
    <ul>
      <li><strong>Interieur en afwerking.</strong> Vloeren, keuken, badkamer, ingebouwde kasten — alles wat na oplevering is toegevoegd of vervangen, valt buiten de gebouwenpolis van de VvE.</li>
      <li><strong>Inboedel.</strong> Meubels, elektronica, persoonlijke eigendommen — nooit gedekt door een VvE-polis, ongeacht hoe uitgebreid die is.</li>
      <li><strong>Uw eigen aansprakelijkheid als bewoner.</strong> De VvE-polis dekt de aansprakelijkheid van de vereniging voor de gemeenschappelijke delen, niet uw aansprakelijkheid tegenover de buren als er bijvoorbeeld water vanuit uw appartement naar beneden lekt.</li>
    </ul>
    <p>Vertiefend, in het Engels: <a href="/en/blog/insuring-a-high-value-apartment-lisbon-cascais/" hreflang="en">Insuring a High-Value Apartment in Lisbon or Cascais</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="waterschade">
  <div class="container narrow article-body">
    <h2 id="waterschade">Waterschade: waar de meeste appartementsclaims vandaan komen</h2>
    <p>In de praktijk is waterschade door een leidingbreuk de meest voorkomende schadeoorzaak in appartementen — vaker dan brand, vaker dan inbraak. Bepaal daarom bij het afsluiten van uw eigen polis expliciet of waterschade aan uw interieur, en aansprakelijkheid voor waterschade bij de buren, is meegedekt. Dit is precies het gat dat het vaakst wordt ontdekt op het moment dat het al te laat is.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="verhuur">
  <div class="container narrow article-body">
    <h2 id="verhuur">Bij verhuur: nog een reden om zelf te controleren</h2>
    <p>Verhuurt u het appartement, kort of lang, dan is de VvE-polis nog minder relevant voor uw situatie: die verzekert het gebouw, niet uw huurder en niet uw aansprakelijkheid als verhuurder. Zie <a href="/nl/alojamento-local-verzekering-portugal/">Alojamento Local verzekeren</a> als de verhuur kortdurend en toeristisch is.</p>
  </div>
</section>`,
  faqTitle: 'VvE-verzekering — veelgestelde vragen',
  faq: [
    {
      q: 'Ben ik voldoende verzekerd met alleen de polis van de VvE?',
      a: '<p>Nee. Die dekt alleen het gebouw en de gemeenschappelijke delen, vaak tegen een verouderd bedrag. Interieur, inboedel en uw eigen aansprakelijkheid als bewoner heeft u zelf nodig.</p>',
    },
    {
      q: 'Dekt de VvE-polis waterschade aan mijn interieur?',
      a: '<p>Nee, alleen aan de bouwconstructie zelf en de gemeenschappelijke delen. Waterschade aan uw interieur en uw aansprakelijkheid richting de buren regelt u met een eigen polis.</p>',
    },
    {
      q: 'Wat gebeurt er als het bedrag van de VvE-polis achterloopt?',
      a: '<p>Dan kort de evenredigheidsregel elke schade, en wordt het tekort verdeeld over alle eigenaren — niet alleen degene met schade.</p>',
    },
    {
      q: 'Heb ik bij verhuur andere dekking nodig?',
      a: '<p>Ja. De VvE-polis verzekert het gebouw, niet uw huurder of uw aansprakelijkheid als verhuurder. Bij kortdurende, toeristische verhuur geldt bovendien de Alojamento Local-verplichting.</p>',
    },
  ],
  related: [
    { url: '/nl/woonverzekering-portugal/', label: 'Woonverzekering in Portugal' },
    { url: '/nl/alojamento-local-verzekering-portugal/', label: 'Alojamento Local verzekeren' },
    { url: '/en/blog/insuring-a-high-value-apartment-lisbon-cascais/', label: 'Insuring a High-Value Apartment in Lisbon or Cascais (Engels)' },
  ],
  article: {
    tag: 'Wonen',
    excerpt: 'Wat de VvE-polis dekt en wat niet: interieur, inboedel en uw eigen aansprakelijkheid als bewoner blijven uw eigen verantwoordelijkheid.',
    readingTime: 7,
    dateLabel: 'September 2026',
  },
};

export const PHASE2_NL_PAGES = [
  EVENREDIGHEID_TOTAAL_VERLIES,
  AARDBEVING,
  BESTAANDE_AANDOENING,
  SCHADE_BETWISTEN,
  VVE,
];
