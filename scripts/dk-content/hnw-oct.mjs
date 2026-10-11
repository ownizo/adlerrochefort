/**
 * October 2026 HNW pages, Danish.
 *   IPMI_PAGE          /dk/allianz-care-vs-cigna-global-sundhedsforsikring/  (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /dk/veteranbil-forsikring-portugal-spanien/           (cluster: classic-cars)
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

const cta = (text, label) => `${p(text)}
    <p><a href="#tilbud" class="btn-cta">${label}</a></p>
    <p class="legal-note">Siden er generel information. Dækningen afhænger af forsikringsselskabets vurdering af risikoen og af vilkårene i den police, der faktisk udstedes.</p>`;

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global-sundhedsforsikring',
  url: '/dk/allianz-care-vs-cigna-global-sundhedsforsikring/',
  cluster: 'ipmi',
  title: 'Allianz Care eller Cigna Global? En sammenligning | Adler & Rochefort',
  description:
    'Allianz Care eller Cigna Global? Sådan adskiller de to internationale sundhedsforsikringer sig for familier i Portugal og Spanien: niveauer, USA og moduler.',
  keywords:
    'Allianz Care Cigna Global sammenligning, international sundhedsforsikring Portugal, international sundhedsforsikring Spanien, expat sygeforsikring, Cigna Global Portugal, Allianz Care Spanien',
  eyebrow: 'Sundhed · Portugal og Spanien',
  h1: 'Allianz Care eller Cigna Global — international sundhedsforsikring for familier i Portugal og Spanien',
  standfirst:
    'For mange familier er en portugisisk eller spansk police nok. Men den, der lever mellem Lissabon, København og New York, eller vil kunne behandles på det bedste hospital for hver sygdom, har brug for en international forsikring. Vi sammenligner to af de planer, vi oftest bliver spurgt om.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care eller Cigna Global' }],
  pullquote: 'Spørgsmålet er ikke, hvilken forsikring der er bedst. Det er, hvor I vil kunne blive behandlet.',
  schemaType: 'Article',
  formHeading: 'Bed om en skriftlig sammenligning',
  formBranch: 'DK · Sundhed',
  formSubject: 'Allianz Care eller Cigna Global',
  formCta: 'Bed om sammenligning',
  formIntro:
    'Fortæl os, hvem der skal forsikres, hvor familien bor, og hvor I vil kunne behandles — også i Danmark eller USA. Vi svarer skriftligt, på engelsk, med begge planer tilpasset jer.',
  formPlaceholder:
    'For eksempel: par på 61 og 59 år, bor i Algarve om vinteren og i Danmark om sommeren, ønsker dækning også uden for Europa.',
  sections: [
    sec('plain', 'lokal-eller-international', 'Lokal police eller international forsikring?', `${p('Private sundhedsforsikringer i Portugal og Spanien er bygget op omkring et nationalt netværk af hospitaler og klinikker. De fungerer godt for den, der behandles, hvor man bor, men har begrænsninger, der betyder noget for internationalt levende familier:')}
${ul([
      '<strong>Årlige lofter</strong> per dækning — nok til hverdagen, men nogle gange snævre ved en lang kræftbehandling.',
      '<strong>Dækning i udlandet</strong> normalt kun ved akut sygdom på rejse; planlagt behandling i et andet land er som regel udelukket.',
      '<strong>Optagelsesvilkår:</strong> i Portugal kræver selskaberne portugisisk skattenummer (NIF) og adresse for hver forsikret, og mange planer har en øvre optagelsesalder.',
    ])}
${p('En international forsikring (IPMI) virker omvendt: lofter i millioner, planlagt behandling inden for et valgt område — Europa (med Danmark), verden uden USA eller hele verden — og en police, der følger familien ved næste flytning. Hjemtransport og evakuering er en del af konstruktionen.')}`),
    sec('tint', 'allianz-care', 'Allianz Care: den nye serie', `${p('Allianz Care er Allianz Partners’ mærke for international sundhedsforsikring. I november 2025 kom en ny serie for privatpersoner og familier, der har boet i udlandet i mindst tolv måneder, primært i EU og Storbritannien.')}
${ul([
      '<strong>Tre grundplaner: Base, Enhanced og Signature</strong> — alle med indlæggelse, enestue og medicinsk hjemtransport.',
      '<strong>Graviditet og fødsel</strong> i Enhanced og Signature, efter tolv måneders karens.',
      '<strong>Ambulant behandling og tandbehandling</strong> som tilvalg.',
      '<strong>Kræftscreening, helbredstjek og hormonbehandling</strong> i hele serien; ambulant psykiatri og psykoterapi uden karens.',
      '<strong>Et område kun for Europa</strong> ved siden af de globale muligheder.',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global: en modulopbygget plan', ul([
      '<strong>Tre niveauer af grunddækning: Silver, Gold og Platinum</strong> — indlæggelse, specialistbehandling på hospital, kræftbehandling og psykiatrisk indlæggelse. Platinum har det højeste årlige loft, uden fast maksimum.',
      '<strong>Fire tilvalgsmoduler:</strong> ambulant behandling, medicinsk evakuering, sundhed og trivsel samt syn og tænder.',
      '<strong>Område:</strong> verden uden USA eller verden med USA.',
      '<strong>Selvrisiko og egenbetaling</strong> efter valg, med et årligt loft — det vigtigste greb om præmien.',
      '<strong>Graviditet og fødsel</strong> i Gold og Platinum, efter tolv måneders forsikring.',
    ])),
    sec('tint', 'sammenligning', 'Side om side', `${table('Allianz Care og Cigna Global sammenlignet', ['', 'Allianz Care', 'Cigna Global'], [
      ['Grundniveauer', 'Base, Enhanced, Signature', 'Silver, Gold, Platinum'],
      ['Indlæggelse, enestue', 'I alle planer', 'I grunddækningen'],
      ['Hjemtransport / evakuering', 'Hjemtransport i alle planer', 'Tilvalgsmodul for evakuering'],
      ['Ambulant', 'Tilvalg', 'Tilvalgsmodul'],
      ['Tænder', 'Tilvalg', 'Tilvalgsmodul (med syn)'],
      ['Fødsel', 'Enhanced, Signature — efter 12 mdr.', 'Gold, Platinum — efter 12 mdr.'],
      ['Område', 'Også kun Europa, plus globale muligheder', 'Verden uden USA eller med USA'],
      ['Præmiegreb', 'Niveau, område, tilvalg', 'Selvrisiko, egenbetaling, område, moduler'],
    ])}
${p('Lofter, karenstider og undtagelser afhænger af niveauet og fremgår af hvert selskabs ydelsestabel. Vi sender dem med hver sammenligning.')}`),
    sec('plain', 'hvem', 'Hvilken plan passer til hvilken familie', ul([
      '<strong>Et liv i Europa</strong> — hus i Portugal eller Spanien, somre i Danmark: ofte Allianz Care med område Europa eller verden uden USA, med hjemtransport inkluderet.',
      '<strong>Tilknytning til USA</strong> — børn, der studerer der, et hus i Florida: så kræves global dækning med USA, og her adskiller præmierne sig mest. Det betaler sig at sammenligne begge.',
      '<strong>Kun dækning for de store hændelser:</strong> Cigna Global med høj selvrisiko og egenbetaling.',
      '<strong>Helbredshistorik:</strong> begge selskaber vurderer en helbredserklæring og kan udelukke en sygdom eller kræve et tillæg — resultatet kan være forskelligt.',
    ])),
    sec('tint', 'udrejst', 'Udrejst fra Danmark', p(
      'Den, der flytter til Portugal eller Spanien og melder flytning til udlandet, mister som regel retten til det offentlige danske sundhedskort, og danske private sundhedsforsikringer forudsætter ofte bopæl i Danmark. Derfor er spørgsmålet om, hvor I vil behandles — i det nye land, i Danmark eller andetsteds — centralt, når forsikringen vælges.'
    )),
    sec('plain', 'kontakt', 'Begge planer til jeres familie', cta('Adler &amp; Rochefort formidler både Allianz Care og Cigna Global. Vi tilpasser begge til jeres familie og beskriver forskellene skriftligt, med ydelsestabellerne.', 'Bed om sammenligning')),
  ].join('\n'),
  faqTitle: 'Allianz Care og Cigna Global — spørgsmål',
  faq: [
    { q: 'Er Allianz Care eller Cigna Global bedst?', a: '<p>Ingen af dem er bedst generelt. Allianz Care har indlæggelse og hjemtransport i alle planer og et område kun for Europa; Cigna Global er modulopbygget, med fleksibel selvrisiko og valg mellem dækning med eller uden USA. Afgørende er, hvor familien bor, rejser og vil behandles, og hvilke vilkår hvert selskab tilbyder for helbredshistorikken.</p>' },
    { q: 'Har jeg brug for dækning i USA?', a: '<p>Kun hvis I vil kunne få planlagt behandling der. Området med USA er det dyreste i begge planer.</p>' },
    { q: 'Er behandling i Danmark dækket?', a: '<p>Ja, med område Europa eller verden er planlagt behandling i Danmark omfattet, efter planens vilkår.</p>' },
    { q: 'Er fødsel dækket fra starten?', a: '<p>Nej. Kun på de højere niveauer — Enhanced og Signature hos Allianz Care, Gold og Platinum hos Cigna Global — og efter tolv måneder.</p>' },
  ],
  related: [
    { url: '/dk/sundhedsforsikring-portugal/', label: 'Sundhedsforsikring i Portugal' },
    { url: '/dk/sundhedsforsikring-spanien/', label: 'Sundhedsforsikring i Spanien' },
    { url: '/dk/veteranbil-forsikring-portugal-spanien/', label: 'Veteranbiler og eksklusive biler' },
    { url: '/dk/flytte-til-portugal-forsikring/', label: 'Flytte til Portugal' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'veteranbil-forsikring-portugal-spanien',
  url: '/dk/veteranbil-forsikring-portugal-spanien/',
  cluster: 'classic-cars',
  title: 'Veteranbiler og eksklusive biler i Portugal og Spanien | Adler & Rochefort',
  description:
    'Forsikring af veteranbil eller eksklusiv bil i Portugal og Spanien: historisk køretøj, aftalt værdi, samlinger, banedage og danske nummerplader.',
  keywords:
    'veteranbilforsikring Portugal, veteranbil Spanien, aftalt værdi bil, samlingsforsikring biler, superbil forsikring Marbella, dansk indregistreret bil Portugal',
  eyebrow: 'Private Clients · Biler',
  h1: 'Veteranbiler og eksklusive biler i Portugal og Spanien — historisk status, aftalt værdi og samlinger',
  standfirst:
    'Klimaet skåner pladen, bjergvejene ser ud til at være tegnet til en sportsvogn fra tresserne, og langs Costa del Sol kører flere superbiler end næsten noget andet sted i Europa. En almindelig bilforsikring er ikke skrevet til nogen af dem.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Veteranbiler og eksklusive biler' }],
  pullquote: 'Ved totalskade betaler en almindelig police, hvad en gammel bil er værd. En veteranbilforsikring betaler, hvad jeres bil er værd.',
  schemaType: 'Article',
  formHeading: 'Bed om en skriftlig vurdering af jeres biler',
  formBranch: 'DK · Bil',
  formSubject: 'Veteranbiler og eksklusive biler',
  formCta: 'Bed om vurdering',
  formIntro:
    'Send os en liste over bilerne — mærke, model, årgang, hvor de står, og hvordan de bruges — og de vurderinger, I har. Vi svarer skriftligt, på engelsk: hvad policen ville betale i dag ved totalskade, og hvad den burde betale.',
  formPlaceholder:
    'For eksempel: Jaguar E-Type fra 1968 på danske plader, en moderne sportsvogn, aflåst garage i Algarve, klubtræf et par gange om året.',
  sections: [
    sec('plain', 'portugal', 'Portugal: køretøjer af historisk interesse', p(
      'I Portugal kan en bil, der er mindst tredive år gammel, ikke længere produceres, er i god stand og stort set original, certificeres som <em>veículo de interesse histórico</em> af anerkendte organer — blandt andre ACP Clássicos, Clube Português de Automóveis Antigos og Museu do Caramulo. Certificerede køretøjer over tredive år er siden 2018 fritaget for periodisk syn og kan under visse betingelser fritages for vægtafgiften (IUC), hvilket skal bekræftes i det enkelte tilfælde. For forsikringen er certifikatet især et bevis på originalitet og stand.'
    )),
    sec('tint', 'spanien', 'Spanien: de nye regler for historiske køretøjer', ul([
      'Siden 1. oktober 2024 gælder et nyt <em>Reglamento de Vehículos Históricos</em>.',
      'Historisk kan et køretøj være, hvis det er fremstillet eller første gang registreret for mindst tredive år siden, ikke længere produceres og er bevaret original.',
      'Mange biler beholder deres almindelige nummerplader og bærer et gult mærke med et ”H” i forruden; andre registreres som historiske hos Jefatura de Tráfico efter en teknisk rapport.',
      'ITV-syn sjældnere: hvert andet år mellem 30 og 40 år, hvert tredje mellem 40 og 45, hvert fjerde over 45; over 60 år kræves intet syn.',
    ])),
    sec('plain', 'vaerdi', 'Aftalt værdi, ikke handelsværdi', p(
      'Den vigtigste klausul i en police for en veteranbil er erstatningsgrundlaget. En almindelig police betaler <strong>handelsværdien</strong> ved totalskade, fastsat af selskabet efter skaden — for en veteranbil næsten altid for lav. En <strong>aftalt værdi</strong> fastsættes fra starten på grundlag af en aktuel vurdering, fotos og dokumenter, og udbetales ved totalskade. Værdien bør gennemgås med få års mellemrum og efter hver restaurering. For moderne superbiler handler spørgsmålene om nyværdi de første år, ekstraudstyr, originale reservedele og autoriseret værksted.'
    )),
    sec('tint', 'samling', 'En samling, ikke en liste over biler', p(
      'En samlingsforsikring behandler garagen som en helhed: én police med aftalte værdier, afmeldte biler og biler under restaurering dækket mod brand, tyveri og skade uden at betale for kørsel, de ikke bruges til, navngivne førere, transport på trailer eller med specialiseret transportør, og selve garagen — brandsikring og sikring — som en del af risikoen. Visse forsikringer til eksklusive biler tegnes desuden kun sammen med husforsikringen.'
    )),
    sec('plain', 'brug', 'Hvordan bilen bruges', ul([
      '<strong>Kilometertal og formål:</strong> veteranbilpolicer forudsætter begrænset årligt kilometertal og fritidsbrug.',
      '<strong>Orienteringsløb, udstillinger og klubtræf</strong> på offentlig vej kan normalt forsikres; løb på tid og bane kan ikke.',
      '<strong>Banedage</strong> — Autódromo do Algarve, Estoril, Ascari — er undtaget i næsten alle vejpolicer.',
      '<strong>Nøglefrit tyveri:</strong> selskaberne spørger til garage, sporing og opbevaring af nøglerne.',
    ])),
    sec('tint', 'plader', 'Danske nummerplader og flytning', p(
      'Mange biler kommer med ejeren på danske plader. I Portugal og Spanien skal den, der bliver fastboende, omregistrere bilen inden for bestemte frister — i Portugal med importprocedure og ISV, i Spanien hos DGT. Indtil da skal det være afklaret, hvad den danske police tillader, hvor længe og hvad der gælder efter en skade. For en veteranbil er flytningen ofte det rigtige tidspunkt til at ordne registrering og historisk status samtidig.'
    )),
    sec('plain', 'kontakt', 'En skriftlig vurdering', cta('Send listen over bilerne, vurderingerne og den nuværende police. Vi svarer skriftligt om, hvad der er dækket, hvad der mangler, og hvilke muligheder der er.', 'Bed om vurdering')),
  ].join('\n'),
  faqTitle: 'Veteranbiler og eksklusive biler — spørgsmål',
  faq: [
    { q: 'Har en veteranbil brug for en særlig forsikring?', a: '<p>Lovpligtig ansvarsforsikring gælder for alle køretøjer i trafikken. Forskellen ligger i resten: en veteranbilforsikring dækker til aftalt værdi, forudsætter begrænset fritidsbrug og omfatter klubarrangementer.</p>' },
    { q: 'Hvad er forskellen på aftalt værdi og handelsværdi?', a: '<p>Den aftalte værdi fastsættes ved tegning på grundlag af en vurdering og udbetales ved totalskade. Handelsværdien fastsættes af selskabet efter skaden og er for en veteranbil oftest væsentligt lavere.</p>' },
    { q: 'Er banedage dækket?', a: '<p>Næsten aldrig af en vejpolice. Det kræver en særskilt forsikring for dagen på banen.</p>' },
  ],
  related: [
    { url: '/dk/bilforsikring-portugal/', label: 'Bilforsikring i Portugal' },
    { url: '/dk/bilforsikring-spanien/', label: 'Bilforsikring i Spanien' },
    { url: '/dk/allianz-care-vs-cigna-global-sundhedsforsikring/', label: 'Allianz Care eller Cigna Global' },
    { url: '/dk/golf-boliger-portugal-spanien/', label: 'Golf i Portugal og Spanien' },
  ],
};
