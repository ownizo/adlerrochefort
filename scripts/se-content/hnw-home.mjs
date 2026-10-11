/**
 * High-value home conditions (October 2026), Swedish — four pages.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'sv-SE';
const base = (key, crumb) => ({
  slug: homeSlug(key, C), url: homeUrl(key, C), cluster: key,
  published: PUBLISHED_OCT, modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article', formBranch: 'SE · Hem', formCta: 'Be om bedömning',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const NOTE = sec('plain', 'viktigt', 'Viktigt', p('Allmän information från en försäkringsförmedlare, inte personlig rådgivning. Skyddet beror på försäkringsgivarens riskbedömning och villkoren i den utfärdade försäkringen.'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', 'Exklusiv bostad: villkoren'),
    title: 'Hemförsäkring för exklusiv bostad: villkoren | Adler & Rochefort',
    description: 'Vad en private client-hemförsäkring i Portugal och Spanien ändrar: garanterad återuppbyggnad, ingen underförsäkring, ingen självrisk vid stora skador.',
    keywords: 'hemförsäkring villa Portugal, villaförsäkring Spanien lyx, ingen underförsäkring, garanterad återuppbyggnad, ersättningsbostad, private client försäkring',
    eyebrow: 'Private Clients · Bostad',
    h1: 'Hemförsäkring för en exklusiv bostad i Portugal och Spanien — villkoren, klausul för klausul',
    standfirst: 'En vanlig portugisisk eller spansk hemförsäkring är skriven för genomsnittshuset. För en villa i Algarve eller på Costa del Sol visar den sina gränser just när skadan är stor. De private client-villkor vi förmedlar är byggda tvärtom.',
    pullquote: 'Underförsäkringsregeln förhandlas inte på skadedagen. Den tas bort i förväg.',
    formHeading: 'Be om en skriftlig bedömning av er försäkring',
    formSubject: 'Exklusiv bostad — villkor',
    formIntro: 'Skicka den nuvarande försäkringen. Vi svarar skriftligt, på engelska, klausul för klausul.',
    formPlaceholder: 'Till exempel: villa i Algarve med gästhus och pool, försäkring via banken, konst och klockor utan specifikation.',
    sections: [
      sec('plain', 'belopp', 'Försäkringsbeloppet: besiktning och garanterad återuppbyggnad', ul([
        '<strong>Kostnadsfri besiktning</strong> av försäkringsgivarens riskkonsult: återuppbyggnadskostnad, belopp för lösöre och värdeföremål, förebyggande råd.',
        '<strong>Garanterad återuppbyggnad:</strong> följs rekommendationerna byggs huset upp igen efter totalskada även om kostnaden överstiger beloppet.',
        '<strong>Ingen underförsäkringsregel:</strong> en delskada betalas fullt ut.',
        '<strong>Verklig kostnad</strong> — samma utförande och materialkvalitet, arvoden, nya byggregler, röjning — med årlig indexering.',
      ])),
      sec('tint', 'tomt', 'Huset, byggnaderna och tomten', ul([
        '<strong>Andra byggnader</strong> — gästhus, garage, murar — ytterligare 20 % av husets belopp, utan eget tak för stöd- och gränsmurar.',
        '<strong>Träd, buskar och gräsmattor</strong> upp till 10 %; <strong>markstabilisering</strong> med ytterligare 10 % av skadan.',
        '<strong>Läcksökning utan tak</strong> för vatten, gas eller eldningsolja, plus förlorat vatten eller olja.',
        '<strong>Det moderna huset:</strong> bidrag till läckagelarm, solceller eller bergvärme vid återuppbyggnad och reservkraft efter storm; lås utan tak och utan självrisk; anpassning av huset vid bestående funktionsnedsättning.',
      ])),
      sec('plain', 'boende', 'När huset inte går att bo i', ul([
        '<strong>Likvärdigt ersättningsboende</strong>, även för husdjur och hästar, så länge det behövs — utan självrisk och utan fast tidsgräns för huset.',
        '<strong>Förlorad hyra</strong> och <strong>evakuering</strong> beordrad av myndighet på grund av skada hos grannen.',
      ])),
      sec('tint', 'losore', 'Lösöret, hemma och borta', `${ul([
        '<strong>Allrisk i hela världen</strong> — ingen separat reseförsäkring för bagage.',
        '<strong>Upp till 25 % över lösörebeloppet</strong>; nyvärde utan avdrag; gästers och personalens saker; nyförvärv i 90 dagar; inställda fester och tält.',
      ])}
${p('Obs: ospecificerat lösöre har särskilda tak för kontanter, smycken och klockor, silver, samlingar och vin. Det som är värdefullt bör listas som värdeföremål till avtalat värde.')}`),
      sec('plain', 'skada', 'Vid skada', ul([
        '<strong>Ingen självrisk vid stora skador</strong> — grundsjälvrisken gäller inte för skador över 10 000 €.',
        '<strong>Valfrihet:</strong> kontant ersättning eller reparation av hantverkare ni väljer, utan avdrag.',
        '<strong>Akuta reparationer</strong> utöver beloppet och skadehantering av försäkringsgivaren själv.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Exklusiv bostad — frågor',
    faq: [
      { q: 'Gäller underförsäkringsregeln?', a: '<p>Inte i de private client-villkor vi förmedlar: en delskada betalas fullt ut.</p>' },
      { q: 'Hur länge betalas ersättningsboende?', a: '<p>För huset så länge det tar att göra det beboeligt igen, utan självrisk.</p>' },
    ],
    related: [rel('art-beyond', 'Konst och smycken utöver avtalat värde'), rel('family-protection', 'Familjeskydd i hemförsäkringen'), rel('home-declare', 'Vad ni måste anmäla'), { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' }],
  },
  {
    ...base('art-beyond', 'Konst och smycken'),
    title: 'Konst och smycken utöver avtalat värde | Adler & Rochefort',
    description: 'Avtalat värde är bara början: undervärdering, bristande äganderätt, beställda verk, lån och nyförvärv i en private client-försäkring.',
    keywords: 'konstförsäkring Portugal, konstförsäkring Spanien, avtalat värde konst, proveniens försäkring, utlåning museum försäkring, smyckesförsäkring',
    eyebrow: 'Private Clients · Konst och samlingar',
    h1: 'Konst och smycken utöver avtalat värde — undervärdering, proveniens, beställningar och lån',
    standfirst: 'Att försäkra viktiga föremål till avtalat värde är första regeln. De private client-villkor vi förmedlar går längre.',
    pullquote: 'Datumet på värderingen är en del av ert skydd.',
    formHeading: 'Be om en skriftlig bedömning av samlingen',
    formSubject: 'Konst och smycken',
    formIntro: 'Skicka listan, värderingsdatumen och försäkringen. Vi svarar skriftligt om vad som skulle betalas i dag.',
    formPlaceholder: 'Till exempel: nordisk konst värderad 2019, klockor utan värdering, ett verk utlånat till en utställning.',
    sections: [
      sec('plain', 'marknad', 'När marknaden har stigit', ul([
        '<strong>Konst:</strong> är ett specificerat verk värt mer än beloppet och värderat av fackman inom fem år före skadan, betalas marknadsvärdet upp till dubbla beloppet, högst 5 miljoner € extra.',
        '<strong>Smycken, klockor och annat:</strong> samma princip med ett tvåårsfönster, upp till kategorins totalbelopp.',
      ])),
      sec('tint', 'delskada', 'Delskada och värdeminskning', p('Ersättning lämnas för konservering utan avdrag och för den värdeminskning som återstår. För par och set av konst eller smycken kan ni lämna in den kvarvarande delen och få hela setet ersatt.')),
      sec('plain', 'aganderatt', 'Bristande äganderätt', p('Hävdar någon att ett verk köpt under försäkringstiden var stulet eller aldrig lagligt sålt, betalas kostnaderna för försvaret och, om kravet går igenom, förlusten av verket — upp till ett årligt tak och om proveniensen rimligen kontrollerats före köpet.')),
      sec('tint', 'bestallning', 'Beställningar, lån och nyförvärv', ul([
        '<strong>Verk under arbete</strong> som skadas före färdigställande eller förblir ofärdiga när konstnären avlider: material och avtalat arbete.',
        '<strong>Lånade verk</strong> de första sju dagarna; <strong>era utlån</strong> till museer om de anmälts i förväg.',
        '<strong>Nyförvärv</strong> automatiskt i 90 dagar, upp till en fjärdedel av kategorins belopp; <strong>stöld av hushållspersonal</strong> omfattas.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Konst och smycken — frågor',
    faq: [{ q: 'Om målningen är värd mer än försäkringsbeloppet?', a: '<p>Med en värdering yngre än fem år betalas marknadsvärdet upp till dubbla beloppet, högst 5 miljoner € extra.</p>' }],
    related: [rel('home-conditions', 'Exklusiv bostad: villkoren')],
  },
  {
    ...base('family-protection', 'Familjeskydd'),
    title: 'Familjeskydd i hemförsäkringen | Adler & Rochefort',
    description: 'Carjacking, överfall i hemmet, stalkning, bortförande av barn, nätmobbning och kostnader vid kidnappning: familjeskyddet i en private client-hemförsäkring.',
    keywords: 'familjeskydd försäkring, carjacking försäkring, hemfridsbrott försäkring, stalkning försäkring, kidnappning kostnader försäkring, nätmobbning försäkring',
    eyebrow: 'Private Clients · Familj',
    h1: 'Familjeskydd i hemförsäkringen — carjacking, överfall, stalkning och kostnader vid kidnappning',
    standfirst: 'Vissa risker för en förmögen familj har inget med byggnaden att göra. De bästa hemförsäkringarna täcker dem ändå.',
    pullquote: 'Är er familj försäkrad, eller bara ert hus?',
    formHeading: 'Be om en diskret, skriftlig bedömning',
    formSubject: 'Familjeskydd',
    formIntro: 'Skicka hem- och ansvarsförsäkringarna. Vi svarar diskret och skriftligt om vad som saknas.',
    formPlaceholder: 'Till exempel: familj på fyra i Cascais, ofta på resande fot, chaufför och hushållshjälp.',
    sections: [
      sec('plain', 'omfattning', 'Vad familjeskyddet omfattar', `${ul([
        '<strong>Carjacking</strong> — en familjemedlem tvingas ut ur eller hålls kvar i bilen vid bilstöld.',
        '<strong>Grovt inbrott</strong> — våld eller hot från en inkräktare i hemmet, en tillfällig bostad, på båten eller i husbilen, när familj eller gäster är där.',
        '<strong>Rån</strong> utanför hemmet; <strong>stalkning</strong> av någon som redan har ett kontaktförbud.',
        '<strong>Bortförande av barn</strong> under 13 år; <strong>kapning</strong> i över fyra timmar i kollektivtrafik; <strong>air rage och road rage</strong>.',
      ])}
${p('Beroende på händelsen: vårdkostnader, psykologiskt stöd, återhämtning, säkerhetskonsulter och vakter, förstärkt skydd av hemmet, tillfällig flytt och ett belopp vid bestående skada eller dödsfall. Hela världen utom länder med officiell reseavrådan.')}`),
      sec('tint', 'kidnappning', 'Kidnappning: vad lagen tillåter', p('Enligt portugisisk lag (art. 14 Decreto-Lei 72/2008) får själva kidnappningsrisken inte försäkras. <strong>Kostnaderna</strong> får däremot försäkras: förhandlare, säkerhets- och PR-konsulter, familjens resor, advokat, vård och psykologiskt stöd, förlorad inkomst och belöning för tips.')),
      sec('plain', 'natmobbning', 'Nätmobbning och rykte', p('Vid upprepade trakasserier på nätet som leder till uppsägning, skolavstängning eller mer än en veckas frånvaro: PR-konsult, IT-forensiker, cybersäkerhetskonsult, ryktesförvaltning, förlorad lön och tillfällig flytt.')),
      sec('tint', 'ansvar', 'Ansvarsförsäkringen runt omkring', `${ul(['Familjens ansvar i hela världen upp till 10 miljoner €, rättegångskostnader därutöver.', 'Golf, studsmattor och hoppborgar, golfbilar och fyrhjulingar på tomten, hushållspersonal vid arbetsgivarens fel, kort- och checkbedrägeri.'])}
${p('Undantag: båtar från 26 fot eller över 50 hk, arvoderade styrelseuppdrag (D&amp;O), yrkesverksamhet och farliga hundar.')}`),
      NOTE,
    ].join('\n'),
    faqTitle: 'Familjeskydd — frågor',
    faq: [{ q: 'Täcker en hemförsäkring verkligen carjacking?', a: '<p>I de private client-villkor vi förmedlar, ja: vårdkostnader, psykologiskt stöd och ett belopp vid bestående skada, bland annat.</p>' }],
    related: [rel('home-conditions', 'Exklusiv bostad: villkoren'), { url: '/se/ansvarsforsakring-portugal/', label: 'Ansvarsförsäkring i Portugal' }],
  },
  {
    ...base('home-declare', 'Anmälningsplikt'),
    title: 'Vad ni måste anmäla till försäkringsgivaren | Adler & Rochefort',
    description: 'Uthyrning, renovering, tomma månader, utlån av konst, säkerhet: vad en exklusiv hemförsäkring i Portugal kräver att ni anmäler, och vad ni gör efter en skada.',
    keywords: 'anmälningsplikt hemförsäkring Portugal, tomt hus försäkring, renovering anmäla försäkring, uthyrning fritidshus försäkring',
    eyebrow: 'Private Clients · Bostad',
    h1: 'Vad ni måste anmäla — skyldigheterna bakom en exklusiv hemförsäkring',
    standfirst: 'De flesta avslagna eller nedsatta skador i detta segment beror inte på undantag, utan på något som ändrats och aldrig anmälts. Den praktiska listan.',
    pullquote: 'Den bästa försäkringen kan falla på det som inte anmäldes.',
    formHeading: 'Vi sköter anmälningarna',
    formSubject: 'Anmälan till försäkringsgivaren',
    formIntro: 'Berätta vad som ändras. Vi anmäler skriftligt och bekräftar villkoren.',
    formPlaceholder: 'Till exempel: vi renoverar kök och badrum i vår och huset står stängt januari till mars.',
    sections: [
      sec('plain', 'fore', 'Anmäl i förväg', ul(['Ändrad användning — uthyrning, även korttid.', 'Verksamhet i huset eller betalande gäster.', 'Byggarbeten över 250 000 €.', 'Utlån av konst eller värdeföremål till gallerier, museer eller mässor.'])),
      sec('tint', 'direkt', 'Anmäl direkt', `${ul(['Försämring av byggnaden, även tecken på sättningar.', 'Ändrade säkerhetsåtgärder — larm avstängt, larmcentral uppsagd, kassaskåp borttaget.', 'Väsentligt byte av yrke, åtal eller dom (utom trafik) eller konkurs för en familjemedlem.'])}
${p('Riskökning ska anmälas inom 14 dagar.')}`),
      sec('plain', 'tomt', 'Tomma månader', ul(['<strong>Tomt hus:</strong> står huset i stort sett tomt i mer än 30 dagar utan anmälan höjs självrisken till 5 % av beloppet.', '<strong>Frost:</strong> frysskador på rör undantas efter mer än 60 dagar obebott, om huset inte hållits uppvärmt eller tömts.'])),
      sec('tint', 'efter', 'Efter en skada', ul(['Anmäl snabbt — vid stöld eller familjeskyddshändelse även till polisen.', 'Skydda egendomen, spara kvitton på akuta reparationer; övriga först efter godkännande.', 'Spara skadade föremål, gör en inventering med kvitton och en undertecknad förlustanmälan inom 60 dagar.', 'Påbörja reparation av delskada inom 180 dagar, annars ersätts kostnaden med avdrag för värdeminskning.', 'Erkänn inte ansvar mot tredje part utan skriftligt godkännande.'])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Anmälningsplikt — frågor',
    faq: [{ q: 'Måste jag anmäla uthyrning?', a: '<p>Ja, i förväg — även korttidsuthyrning. Försäkringsgivaren kan ändra villkor eller premie.</p>' }],
    related: [rel('home-conditions', 'Exklusiv bostad: villkoren'), { url: '/se/hemforsakring-spanien/', label: 'Hemförsäkring i Spanien' }],
  },
];
