/**
 * October 2026 HNW pages, Swedish.
 *   IPMI_PAGE          /se/allianz-care-vs-cigna-global-sjukvardsforsakring/  (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /se/veteranbil-forsakring-portugal-spanien/            (cluster: classic-cars)
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

const cta = (text, label) => `${p(text)}
    <p><a href="#offert" class="btn-cta">${label}</a></p>
    <p class="legal-note">Sidan är allmän information. Skyddet beror på försäkringsgivarens riskbedömning och på villkoren i den försäkring som faktiskt utfärdas.</p>`;

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global-sjukvardsforsakring',
  url: '/se/allianz-care-vs-cigna-global-sjukvardsforsakring/',
  cluster: 'ipmi',
  title: 'Allianz Care eller Cigna Global? En jämförelse | Adler & Rochefort',
  description:
    'Allianz Care eller Cigna Global? Så skiljer sig de två internationella sjukvårdsförsäkringarna för familjer i Portugal och Spanien: nivåer, USA, moduler.',
  keywords:
    'Allianz Care Cigna Global jämförelse, internationell sjukvårdsförsäkring Portugal, internationell sjukvårdsförsäkring Spanien, utlandssvensk sjukförsäkring, Cigna Global Portugal, Allianz Care Spanien',
  eyebrow: 'Sjukvård · Portugal och Spanien',
  h1: 'Allianz Care eller Cigna Global — internationell sjukvårdsförsäkring för familjer i Portugal och Spanien',
  standfirst:
    'För många familjer räcker en portugisisk eller spansk försäkring. Den som lever mellan Lissabon, Stockholm och New York, eller vill kunna behandlas på det bästa sjukhuset för varje sjukdom, behöver en internationell försäkring. Vi jämför två av de planer vi oftast får frågor om.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care eller Cigna Global' }],
  pullquote: 'Frågan är inte vilken försäkring som är bäst. Frågan är var ni vill kunna få vård.',
  schemaType: 'Article',
  formHeading: 'Be om en skriftlig jämförelse',
  formBranch: 'SE · Sjukvård',
  formSubject: 'Allianz Care eller Cigna Global',
  formCta: 'Be om jämförelse',
  formIntro:
    'Berätta vem som ska försäkras, var familjen bor och var ni vill kunna få vård — även i Sverige eller USA. Vi svarar skriftligt, på engelska, med båda planerna anpassade efter er.',
  formPlaceholder:
    'Till exempel: par 58 och 55 år, bor i Algarve vintertid och i Sverige på sommaren, vill ha skydd även utanför Europa.',
  sections: [
    sec('plain', 'lokal-eller-internationell', 'Lokal försäkring eller internationell?', `${p('Privata sjukvårdsförsäkringar i Portugal och Spanien bygger på ett nationellt nätverk av sjukhus och kliniker. De fungerar bra för den som behandlas där man bor, men har begränsningar som spelar roll för familjer med ett internationellt liv:')}
${ul([
      '<strong>Årliga tak</strong> per moment — tillräckliga för vardagen, ibland snäva vid en lång cancerbehandling.',
      '<strong>Utlandsskydd</strong> oftast bara vid akuta fall på resa; planerad vård i ett annat land omfattas normalt inte.',
      '<strong>Anslutningsvillkor:</strong> i Portugal kräver försäkringsbolagen portugisiskt skattenummer (NIF) och adress för varje försäkrad, och många planer har en högsta inträdesålder.',
    ])}
${p('En internationell försäkring (IPMI) fungerar tvärtom: ersättningstak i miljoner, planerad vård inom ett valt område — Europa (med Sverige), världen utom USA eller hela världen — och en försäkring som följer med om familjen flyttar igen. Hemtransport och evakuering ingår i konstruktionen.')}`),
    sec('tint', 'allianz-care', 'Allianz Care: den nya serien', `${p('Allianz Care är Allianz Partners varumärke för internationell sjukvårdsförsäkring. I november 2025 lanserades en ny serie för privatpersoner och familjer som bott utomlands i minst tolv månader, främst i EU och Storbritannien.')}
${ul([
      '<strong>Tre grundplaner: Base, Enhanced och Signature</strong> — alla med slutenvård, enkelrum och medicinsk hemtransport.',
      '<strong>Graviditet och förlossning</strong> i Enhanced och Signature, efter tolv månaders karens.',
      '<strong>Öppenvård och tandvård</strong> som tillval.',
      '<strong>Cancerscreening, hälsokontroller och hormonbehandling</strong> i hela serien; psykiatri och psykoterapi i öppenvård utan karens.',
      '<strong>Ett område för bara Europa</strong>, vid sidan av de globala alternativen.',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global: en modulär plan', ul([
      '<strong>Tre nivåer av grundskydd: Silver, Gold och Platinum</strong> — slutenvård, specialistvård på sjukhus, cancervård och psykiatrisk slutenvård. Platinum har det högsta årliga taket, utan fast maximum.',
      '<strong>Fyra tillvalsmoduler:</strong> öppenvård, medicinsk evakuering, hälsa och välbefinnande samt syn och tandvård.',
      '<strong>Område:</strong> världen utom USA, eller världen inklusive USA.',
      '<strong>Självrisk och egen andel</strong> efter val, med ett årligt tak — den viktigaste spaken för premien.',
      '<strong>Graviditet och förlossning</strong> i Gold och Platinum, efter tolv månaders försäkringstid.',
    ])),
    sec('tint', 'jamforelse', 'Sida vid sida', `${table('Allianz Care och Cigna Global jämförda', ['', 'Allianz Care', 'Cigna Global'], [
      ['Grundnivåer', 'Base, Enhanced, Signature', 'Silver, Gold, Platinum'],
      ['Slutenvård, enkelrum', 'I alla planer', 'I grundskyddet'],
      ['Hemtransport / evakuering', 'Hemtransport i alla planer', 'Tillvalsmodul för evakuering'],
      ['Öppenvård', 'Tillval', 'Tillvalsmodul'],
      ['Tandvård', 'Tillval', 'Tillvalsmodul (med syn)'],
      ['Förlossning', 'Enhanced, Signature — efter 12 mån', 'Gold, Platinum — efter 12 mån'],
      ['Område', 'Även bara Europa, plus globala alternativ', 'Världen utom USA eller med USA'],
      ['Premiespakar', 'Nivå, område, tillval', 'Självrisk, egen andel, område, moduler'],
    ])}
${p('Tak, karenstider och undantag beror på nivån och framgår av respektive försäkringsgivares förmånstabell. Vi skickar med dem i varje jämförelse.')}`),
    sec('plain', 'vem', 'Vilken plan passar vilken familj', ul([
      '<strong>Ett liv i Europa</strong> — hus i Portugal eller Spanien, somrar i Sverige: ofta Allianz Care med område Europa eller världen utom USA, med hemtransport inkluderad.',
      '<strong>Kopplingar till USA</strong> — barn som studerar där, ett hus i Florida: då krävs världsomfattande skydd med USA, och där skiljer sig premierna mest. Det lönar sig att jämföra båda.',
      '<strong>Bara skydd för det stora:</strong> Cigna Global med hög självrisk och egen andel.',
      '<strong>Sjukdomshistorik:</strong> båda bolagen bedömer en hälsodeklaration och kan undanta ett tillstånd eller ta ut en tilläggspremie — utfallet kan skilja sig.',
    ])),
    sec('tint', 'utskriven', 'Utflyttad från Sverige', p(
      'Den som flyttar till Portugal eller Spanien och avregistreras från folkbokföringen lämnar i regel också det svenska vårdsystemet, och svenska privata sjukvårdsförsäkringar förutsätter ofta folkbokföring i Sverige. Därför är frågan om var ni vill få vård — i det nya landet, i Sverige eller någon annanstans — central när ni väljer försäkring.'
    )),
    sec('plain', 'kontakt', 'Båda planerna för er familj', cta('Adler &amp; Rochefort förmedlar både Allianz Care och Cigna Global. Vi anpassar båda efter er familj och beskriver skillnaderna skriftligt, med förmånstabellerna.', 'Be om jämförelse')),
  ].join('\n'),
  faqTitle: 'Allianz Care och Cigna Global — frågor',
  faq: [
    { q: 'Är Allianz Care eller Cigna Global bäst?', a: '<p>Ingen är bäst i allmänhet. Allianz Care har slutenvård och hemtransport i varje plan och ett område för bara Europa; Cigna Global är modulär, med flexibel självrisk och val mellan skydd med eller utan USA. Avgörande är var familjen bor, reser och vill få vård, och vilka villkor varje bolag erbjuder för sjukdomshistoriken.</p>' },
    { q: 'Behöver jag skydd i USA?', a: '<p>Bara om ni vill kunna få planerad vård där. Området med USA är dyrast i båda planerna.</p>' },
    { q: 'Täcks vård i Sverige?', a: '<p>Ja, med område Europa eller världen ingår planerad vård i Sverige, enligt planens villkor.</p>' },
    { q: 'Ingår förlossning från början?', a: '<p>Nej. Bara på de högre nivåerna — Enhanced och Signature hos Allianz Care, Gold och Platinum hos Cigna Global — och efter tolv månader.</p>' },
  ],
  related: [
    { url: '/se/sjukvardsforsakring-portugal/', label: 'Sjukvårdsförsäkring i Portugal' },
    { url: '/se/sjukvardsforsakring-spanien/', label: 'Sjukvårdsförsäkring i Spanien' },
    { url: '/se/veteranbil-forsakring-portugal-spanien/', label: 'Veteranbilar och exklusiva bilar' },
    { url: '/se/flytta-till-portugal-forsakring/', label: 'Flytta till Portugal' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'veteranbil-forsakring-portugal-spanien',
  url: '/se/veteranbil-forsakring-portugal-spanien/',
  cluster: 'classic-cars',
  title: 'Veteranbilar och exklusiva bilar i Portugal och Spanien | Adler & Rochefort',
  description:
    'Försäkra en veteranbil eller exklusiv bil i Portugal och Spanien: historiskt fordon, avtalat värde, samlingar, bana och svenska registreringsskyltar.',
  keywords:
    'veteranbilsförsäkring Portugal, veteranbil Spanien, avtalat värde bil, samlingsförsäkring bilar, superbil försäkring Marbella, svenskregistrerad bil Portugal',
  eyebrow: 'Private Clients · Bilar',
  h1: 'Veteranbilar och exklusiva bilar i Portugal och Spanien — historisk status, avtalat värde och samlingar',
  standfirst:
    'Klimatet skonar plåten, bergsvägarna verkar ritade för en sportbil från sextiotalet, och längs Costa del Sol rullar fler superbilar än nästan någon annanstans i Europa. En vanlig bilförsäkring är inte skriven för någon av dem.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Veteranbilar och exklusiva bilar' }],
  pullquote: 'Vid totalskada betalar en vanlig försäkring vad en gammal bil är värd. En veteranbilsförsäkring betalar vad er bil är värd.',
  schemaType: 'Article',
  formHeading: 'Be om en skriftlig bedömning av era bilar',
  formBranch: 'SE · Bil',
  formSubject: 'Veteranbilar och exklusiva bilar',
  formCta: 'Be om bedömning',
  formIntro:
    'Skicka en lista över bilarna — märke, modell, årsmodell, var de står och hur de används — och de värderingar ni har. Vi svarar skriftligt, på engelska: vad försäkringen skulle betala i dag vid totalskada och vad den borde betala.',
  formPlaceholder:
    'Till exempel: Volvo P1800 från 1966 på svenska skyltar, en modern sportbil, låst garage i Marbella, klubbträffar några gånger om året.',
  sections: [
    sec('plain', 'portugal', 'Portugal: fordon av historiskt intresse', p(
      'I Portugal kan en bil som är minst trettio år, inte längre tillverkas, är i gott skick och i stort sett original certifieras som <em>veículo de interesse histórico</em> av erkända organ — bland andra ACP Clássicos, Clube Português de Automóveis Antigos och Museu do Caramulo. Certifierade fordon äldre än trettio år är sedan 2018 undantagna från återkommande besiktning och kan under vissa villkor slippa fordonsskatten (IUC), vilket behöver bekräftas i varje enskilt fall. För försäkringen är certifikatet främst ett bevis på originalitet och skick.'
    )),
    sec('tint', 'spanien', 'Spanien: de nya reglerna för historiska fordon', ul([
      'Sedan den 1 oktober 2024 gäller ett nytt <em>Reglamento de Vehículos Históricos</em>.',
      'Historiskt kan ett fordon vara som tillverkats eller registrerats första gången för minst trettio år sedan, inte längre tillverkas och är bevarat i originalskick.',
      'Många bilar behåller sina vanliga skyltar och bär ett gult märke med ett ”H” på vindrutan; andra registreras som historiska hos Jefatura de Tráfico efter ett tekniskt utlåtande.',
      'ITV-besiktning glesare: vartannat år mellan 30 och 40 år, vart tredje mellan 40 och 45, vart fjärde över 45; över 60 år krävs ingen besiktning.',
    ])),
    sec('plain', 'varde', 'Avtalat värde, inte marknadsvärde', p(
      'Den viktigaste klausulen i en försäkring för en veteranbil är ersättningsgrunden. En vanlig försäkring betalar <strong>marknadsvärdet</strong> vid totalskada, fastställt av bolaget efter skadan — för en veteranbil nästan alltid för lågt. Ett <strong>avtalat värde</strong> fastställs från början utifrån en aktuell värdering, foton och dokument, och betalas ut vid totalskada. Värdet bör ses över med några års mellanrum och efter varje renovering. För moderna superbilar handlar frågorna om nyvärde de första åren, extrautrustning, originaldelar och auktoriserad verkstad.'
    )),
    sec('tint', 'samling', 'En samling, inte en lista med bilar', p(
      'En samlingsförsäkring behandlar garaget som en helhet: ett avtal med avtalade värden, avställda bilar och bilar under renovering skyddade mot brand, stöld och skada utan att betala för trafik de inte används i, namngivna förare, transport på släp eller med specialiserad transportör, och själva garaget — brandskydd och säkerhet — som en del av risken. Vissa försäkringar för exklusiva bilar tecknas dessutom bara tillsammans med hemförsäkringen.'
    )),
    sec('plain', 'anvandning', 'Hur bilen används', ul([
      '<strong>Körsträcka och syfte:</strong> veteranbilsförsäkringar förutsätter begränsad årlig körsträcka och fritidsbruk.',
      '<strong>Regularitetsrallyn, utställningar och klubbträffar</strong> på allmän väg kan normalt försäkras; tävling och bana inte.',
      '<strong>Bandagar</strong> — Autódromo do Algarve, Estoril, Ascari — är undantagna i nästan alla vägförsäkringar.',
      '<strong>Nyckelfri stöld:</strong> bolagen frågar om garage, spårning och hur nycklarna förvaras.',
    ])),
    sec('tint', 'skyltar', 'Svenska skyltar och flytt', p(
      'Många bilar kommer med ägaren på svenska skyltar. I Portugal och Spanien måste den som blir bosatt registrera om bilen inom bestämda tidsfrister — i Portugal med importförfarande och ISV, i Spanien hos DGT. Fram till dess behöver det vara klart vad den svenska försäkringen tillåter, hur länge och vad som gäller efter en skada. För en veteranbil är flytten ofta rätt tillfälle att samtidigt ordna registrering och historisk status.'
    )),
    sec('plain', 'kontakt', 'En skriftlig bedömning', cta('Skicka listan över bilarna, värderingarna och den nuvarande försäkringen. Vi svarar skriftligt om vad som omfattas, vad som saknas och vilka alternativ som finns.', 'Be om bedömning')),
  ].join('\n'),
  faqTitle: 'Veteranbilar och exklusiva bilar — frågor',
  faq: [
    { q: 'Behöver en veteranbil en särskild försäkring?', a: '<p>Trafikförsäkring krävs för alla fordon i trafik. Skillnaden ligger i resten: en veteranbilsförsäkring försäkrar till avtalat värde, förutsätter begränsat fritidsbruk och omfattar klubbevenemang.</p>' },
    { q: 'Vad är skillnaden mellan avtalat värde och marknadsvärde?', a: '<p>Det avtalade värdet bestäms när försäkringen tecknas, utifrån en värdering, och betalas ut vid totalskada. Marknadsvärdet bestäms av bolaget efter skadan och är för en veteranbil oftast betydligt lägre.</p>' },
    { q: 'Omfattas bandagar?', a: '<p>Nästan aldrig av en vägförsäkring. Det krävs en särskild försäkring för dagen på banan.</p>' },
  ],
  related: [
    { url: '/se/bilforsakring-portugal/', label: 'Bilförsäkring i Portugal' },
    { url: '/se/bilforsakring-spanien/', label: 'Bilförsäkring i Spanien' },
    { url: '/se/allianz-care-vs-cigna-global-sjukvardsforsakring/', label: 'Allianz Care eller Cigna Global' },
    { url: '/se/golf-bostader-portugal-spanien/', label: 'Golf i Portugal och Spanien' },
  ],
};
