/**
 * High-value home conditions (October 2026), Danish — four pages.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'da-DK';
const base = (key, crumb) => ({
  slug: homeSlug(key, C), url: homeUrl(key, C), cluster: key,
  published: PUBLISHED_OCT, modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article', formBranch: 'DK · Bolig', formCta: 'Bed om vurdering',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const NOTE = sec('plain', 'vigtigt', 'Vigtigt', p('Generel information fra en forsikringsformidler, ikke personlig rådgivning. Dækningen afhænger af forsikringsselskabets risikovurdering og vilkårene i den udstedte police.'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', 'Eksklusiv bolig: vilkårene'),
    title: 'Husforsikring til eksklusiv bolig: vilkårene | Adler & Rochefort',
    description: 'Hvad en private client-husforsikring i Portugal og Spanien ændrer: garanteret genopførelse, ingen underforsikring, ingen selvrisiko ved store skader.',
    keywords: 'husforsikring villa Portugal, luksusbolig forsikring Spanien, ingen underforsikring, garanteret genopførelse, erstatningsbolig, private client forsikring',
    eyebrow: 'Private Clients · Bolig',
    h1: 'Husforsikring til en eksklusiv bolig i Portugal og Spanien — vilkårene, klausul for klausul',
    standfirst: 'En almindelig portugisisk eller spansk husforsikring er skrevet til gennemsnitshuset. For en villa i Algarve eller på Costa del Sol viser den sine grænser netop, når skaden er stor. De private client-vilkår, vi formidler, er bygget omvendt.',
    pullquote: 'Underforsikringsreglen forhandles ikke på skadesdagen. Den fjernes på forhånd.',
    formHeading: 'Bed om en skriftlig vurdering af jeres police',
    formSubject: 'Eksklusiv bolig — vilkår',
    formIntro: 'Send den nuværende police. Vi svarer skriftligt, på engelsk, klausul for klausul.',
    formPlaceholder: 'For eksempel: villa i Algarve med gæstehus og pool, police via banken, kunst og ure uden specifikation.',
    sections: [
      sec('plain', 'sum', 'Forsikringssummen: besigtigelse og garanteret genopførelse', ul([
        '<strong>Gratis besigtigelse</strong> ved selskabets risikokonsulent: genopførelsesværdi, summer for indbo og værdigenstande, forebyggende råd.',
        '<strong>Garanteret genopførelse:</strong> følges anbefalingerne, genopføres huset efter totalskade, også hvis prisen overstiger summen.',
        '<strong>Ingen underforsikringsregel:</strong> en delskade betales fuldt ud.',
        '<strong>Reel pris</strong> — samme udførelse og materialekvalitet, honorarer, nye byggeregler, oprydning — med årlig indeksering.',
      ])),
      sec('tint', 'grund', 'Huset, bygningerne og grunden', ul([
        '<strong>Andre bygninger</strong> — gæstehus, garage, mure — yderligere 20 % af husets sum, uden særskilt loft for støtte- og skelmure.',
        '<strong>Træer, buske og græsplæner</strong> op til 10 %; <strong>jordstabilisering</strong> med yderligere 10 % af skaden.',
        '<strong>Lækagesøgning uden loft</strong> for vand, gas eller fyringsolie, plus tabt vand eller olie.',
        '<strong>Det moderne hus:</strong> tilskud til lækagealarm, solceller eller jordvarme ved genopførelse og nødstrøm efter storm; låse uden loft og uden selvrisiko; tilpasning af huset ved varigt handicap.',
      ])),
      sec('plain', 'bolig', 'Når huset ikke kan bebos', ul([
        '<strong>Tilsvarende erstatningsbolig</strong>, også til kæledyr og heste, så længe det er nødvendigt — uden selvrisiko og uden fast tidsgrænse for huset.',
        '<strong>Tabt husleje</strong> og <strong>evakuering</strong> påbudt af myndighederne på grund af skade hos naboen.',
      ])),
      sec('tint', 'indbo', 'Indbo hjemme og ude', `${ul([
        '<strong>All risks i hele verden</strong> — ingen særskilt rejsegodsforsikring.',
        '<strong>Op til 25 % over indbosummen</strong>; nyværdi uden fradrag; gæsters og personalets ting; nyanskaffelser i 90 dage; aflyste fester og telte.',
      ])}
${p('Bemærk: uspecificeret indbo har særlige lofter for kontanter, smykker og ure, sølvtøj, samlinger og vin. Det værdifulde bør specificeres som værdigenstande til aftalt værdi.')}`),
      sec('plain', 'skade', 'Ved skade', ul([
        '<strong>Ingen selvrisiko ved store skader</strong> — grundselvrisikoen gælder ikke for skader over 10.000 €.',
        '<strong>Frit valg:</strong> kontant erstatning eller reparation ved håndværkere, I vælger, uden fradrag.',
        '<strong>Akutte reparationer</strong> ud over summen og skadebehandling ved selskabet selv.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Eksklusiv bolig — spørgsmål',
    faq: [
      { q: 'Gælder underforsikringsreglen?', a: '<p>Ikke i de private client-vilkår, vi formidler: en delskade betales fuldt ud.</p>' },
      { q: 'Hvor længe betales erstatningsbolig?', a: '<p>For huset, så længe det tager at gøre det beboeligt igen, uden selvrisiko.</p>' },
    ],
    related: [rel('art-beyond', 'Kunst og smykker ud over aftalt værdi'), rel('family-protection', 'Familiebeskyttelse i husforsikringen'), rel('home-declare', 'Hvad I skal oplyse'), { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' }],
  },
  {
    ...base('art-beyond', 'Kunst og smykker'),
    title: 'Kunst og smykker ud over aftalt værdi | Adler & Rochefort',
    description: 'Aftalt værdi er kun begyndelsen: undervurdering, mangelfuld adkomst, bestilte værker, udlån og nyanskaffelser i en private client-police.',
    keywords: 'kunstforsikring Portugal, kunstforsikring Spanien, aftalt værdi kunst, proveniens forsikring, udlån museum forsikring, smykkeforsikring',
    eyebrow: 'Private Clients · Kunst og samlinger',
    h1: 'Kunst og smykker ud over aftalt værdi — undervurdering, proveniens, bestillinger og udlån',
    standfirst: 'At forsikre vigtige genstande til aftalt værdi er første regel. De private client-vilkår, vi formidler, går videre.',
    pullquote: 'Datoen på vurderingen er en del af jeres dækning.',
    formHeading: 'Bed om en skriftlig vurdering af samlingen',
    formSubject: 'Kunst og smykker',
    formIntro: 'Send listen, vurderingsdatoerne og policen. Vi svarer skriftligt om, hvad der ville blive udbetalt i dag.',
    formPlaceholder: 'For eksempel: dansk kunst vurderet i 2019, ure uden vurdering, et værk udlånt til en udstilling.',
    sections: [
      sec('plain', 'marked', 'Når markedet er steget', ul([
        '<strong>Kunst:</strong> er et specificeret værk mere værd end summen og vurderet af en fagperson inden for fem år før skaden, betales markedsværdien op til det dobbelte af summen, højst 5 mio. € ekstra.',
        '<strong>Smykker, ure og andet:</strong> samme princip med et toårigt vindue, op til kategoriens samlede sum.',
      ])),
      sec('tint', 'delskade', 'Delskade og værditab', p('Der betales for konservering uden fradrag og for det værditab, der står tilbage. Ved par og sæt af kunst eller smykker kan I aflevere den tilbageværende del og få hele sættet erstattet.')),
      sec('plain', 'adkomst', 'Mangelfuld adkomst', p('Hævder en tredjepart, at et værk købt i forsikringstiden var stjålet eller aldrig lovligt solgt, betales forsvaret og, hvis kravet får medhold, tabet af værket — op til et årligt loft og forudsat rimelig kontrol af proveniensen før købet.')),
      sec('tint', 'bestilling', 'Bestillinger, udlån og nyanskaffelser', ul([
        '<strong>Værker under udførelse</strong>, der beskadiges før færdiggørelse eller forbliver ufærdige, fordi kunstneren dør: materialer og aftalt arbejde.',
        '<strong>Lånte værker</strong> de første syv dage; <strong>jeres udlån</strong> til museer, hvis de er oplyst på forhånd.',
        '<strong>Nyanskaffelser</strong> automatisk i 90 dage, op til en fjerdedel af kategoriens sum; <strong>tyveri ved husstandens personale</strong> er dækket.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Kunst og smykker — spørgsmål',
    faq: [{ q: 'Hvad hvis maleriet er mere værd end forsikringssummen?', a: '<p>Med en vurdering, der er under fem år gammel, betales markedsværdien op til det dobbelte af summen, højst 5 mio. € ekstra.</p>' }],
    related: [rel('home-conditions', 'Eksklusiv bolig: vilkårene')],
  },
  {
    ...base('family-protection', 'Familiebeskyttelse'),
    title: 'Familiebeskyttelse i husforsikringen | Adler & Rochefort',
    description: 'Carjacking, overfald i hjemmet, stalking, bortførelse af børn, digital chikane og udgifter ved kidnapning: familiebeskyttelsen i en private client-husforsikring.',
    keywords: 'familiebeskyttelse forsikring, carjacking forsikring, overfald i hjemmet forsikring, stalking forsikring, kidnapning udgifter forsikring, digital chikane forsikring',
    eyebrow: 'Private Clients · Familie',
    h1: 'Familiebeskyttelse i husforsikringen — carjacking, overfald, stalking og udgifter ved kidnapning',
    standfirst: 'Nogle risici for en formuende familie har intet med bygningen at gøre. De bedste husforsikringer dækker dem alligevel.',
    pullquote: 'Er jeres familie forsikret, eller kun jeres hus?',
    formHeading: 'Bed om en diskret, skriftlig vurdering',
    formSubject: 'Familiebeskyttelse',
    formIntro: 'Send hus- og ansvarsforsikringerne. Vi svarer diskret og skriftligt om, hvad der mangler.',
    formPlaceholder: 'For eksempel: familie på fire i Cascais, mange rejser, chauffør og husassistent.',
    sections: [
      sec('plain', 'omfang', 'Hvad familiebeskyttelsen dækker', `${ul([
        '<strong>Carjacking</strong> — et familiemedlem tvinges ud af eller tilbageholdes i bilen ved biltyveri.',
        '<strong>Groft indbrud</strong> — vold eller trusler fra en ubuden gæst i hjemmet, en midlertidig bolig, på båden eller i autocamperen, mens familie eller gæster er til stede.',
        '<strong>Røveri</strong> uden for hjemmet; <strong>stalking</strong> fra en person, der allerede har et tilhold.',
        '<strong>Bortførelse af børn</strong> under 13 år; <strong>kapring</strong> i over fire timer i offentlig transport; <strong>air rage og road rage</strong>.',
      ])}
${p('Afhængigt af hændelsen: behandlingsudgifter, psykologhjælp, rekreation, sikkerhedskonsulenter og vagter, forstærket sikring af hjemmet, midlertidig flytning og en sum ved varigt mén eller død. Hele verden undtagen lande med officiel rejsevejledning imod.')}`),
      sec('tint', 'kidnapning', 'Kidnapning: hvad loven tillader', p('Ifølge portugisisk lov (art. 14 Decreto-Lei 72/2008) må selve kidnapningsrisikoen ikke forsikres. <strong>Udgifterne</strong> må: forhandler, sikkerheds- og PR-konsulenter, familiens rejser, advokat, behandling og psykologhjælp, tabt indtægt og dusør for oplysninger.')),
      sec('plain', 'chikane', 'Digital chikane og omdømme', p('Ved gentagen chikane på nettet, der fører til afskedigelse, bortvisning fra skole eller mere end en uges fravær: PR-konsulent, it-kriminaltekniker, cybersikkerhedskonsulent, omdømmepleje, tabt løn og midlertidig flytning.')),
      sec('tint', 'ansvar', 'Ansvarsforsikringen omkring', `${ul(['Familiens ansvar i hele verden op til 10 mio. €, sagsomkostninger derudover.', 'Golf, trampoliner og hoppeborge, golfvogne og ATV’er på grunden, husstandens personale ved arbejdsgivers fejl, kort- og checksvindel.'])}
${p('Undtaget: både fra 26 fod eller over 50 hk, lønnede bestyrelsesposter (D&amp;O), erhvervsaktivitet og farlige hunde.')}`),
      NOTE,
    ].join('\n'),
    faqTitle: 'Familiebeskyttelse — spørgsmål',
    faq: [{ q: 'Dækker en husforsikring virkelig carjacking?', a: '<p>I de private client-vilkår, vi formidler, ja: behandlingsudgifter, psykologhjælp og en sum ved varigt mén, blandt andet.</p>' }],
    related: [rel('home-conditions', 'Eksklusiv bolig: vilkårene'), { url: '/dk/ansvarsforsikring-portugal/', label: 'Ansvarsforsikring i Portugal' }],
  },
  {
    ...base('home-declare', 'Oplysningspligt'),
    title: 'Hvad I skal oplyse forsikringsselskabet | Adler & Rochefort',
    description: 'Udlejning, ombygning, tomme måneder, udlån af kunst, sikring: hvad en eksklusiv husforsikring i Portugal kræver oplyst, og hvad I gør efter en skade.',
    keywords: 'oplysningspligt husforsikring Portugal, tomt hus forsikring, ombygning forsikring, udlejning feriebolig forsikring',
    eyebrow: 'Private Clients · Bolig',
    h1: 'Hvad I skal oplyse — pligterne bag en eksklusiv husforsikring',
    standfirst: 'De fleste afviste eller nedsatte skader i dette segment skyldes ikke undtagelser, men noget, der ændrede sig og aldrig blev oplyst. Den praktiske liste.',
    pullquote: 'Den bedste police kan falde på det, der ikke blev oplyst.',
    formHeading: 'Vi klarer oplysningerne',
    formSubject: 'Oplysninger til forsikringsselskabet',
    formIntro: 'Fortæl os, hvad der ændrer sig. Vi oplyser det skriftligt og bekræfter vilkårene.',
    formPlaceholder: 'For eksempel: vi renoverer køkken og bad til foråret, og huset står lukket fra januar til marts.',
    sections: [
      sec('plain', 'forud', 'Oplys på forhånd', ul(['Ændret beboelse — udlejning, også korttid.', 'Erhverv i huset eller betalende gæster.', 'Byggearbejder over 250.000 €.', 'Udlån af kunst eller værdigenstande til gallerier, museer eller messer.'])),
      sec('tint', 'straks', 'Oplys straks', `${ul(['Forringelse af bygningen, også tegn på sætningsskader.', 'Ændret sikring — alarm slukket, alarmcentral opsagt, pengeskab fjernet.', 'Væsentligt jobskifte, tiltale eller dom (undtagen færdsel) eller konkurs for et familiemedlem.'])}
${p('Risikoforøgelse skal oplyses inden for 14 dage.')}`),
      sec('plain', 'tomt', 'Tomme måneder', ul(['<strong>Tomt hus:</strong> står huset i det væsentlige tømt i mere end 30 dage uden besked, stiger selvrisikoen til 5 % af summen.', '<strong>Frost:</strong> frostsprængninger er undtaget efter mere end 60 dage ubeboet, medmindre huset er holdt opvarmet eller tømt for vand.'])),
      sec('tint', 'efter', 'Efter en skade', ul(['Anmeld hurtigt — ved tyveri eller en familiebeskyttelseshændelse også til politiet.', 'Beskyt ejendommen, gem kvitteringer for akutte reparationer; øvrige først efter godkendelse.', 'Gem beskadigede genstande, lav en opgørelse med kvitteringer og en underskrevet skadeopgørelse inden for 60 dage.', 'Påbegynd reparation af delskade inden for 180 dage, ellers erstattes med fradrag for værdiforringelse.', 'Anerkend ikke ansvar over for tredjemand uden skriftlig godkendelse.'])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Oplysningspligt — spørgsmål',
    faq: [{ q: 'Skal jeg oplyse udlejning?', a: '<p>Ja, på forhånd — også korttidsudlejning. Selskabet kan ændre vilkår eller præmie.</p>' }],
    related: [rel('home-conditions', 'Eksklusiv bolig: vilkårene'), { url: '/dk/husforsikring-spanien/', label: 'Husforsikring i Spanien' }],
  },
];
