/**
 * /dk/forsikringsguide-portugal/
 *
 * Search intent: "forsikring Portugal" in its broadest form — the pillar page
 * for readers who do not yet know which product they need. It explains how the
 * Portuguese market works as a system (actors, documents, concepts, claims,
 * renewal) and routes to the four product pages.
 *
 * Danish reference points (Finanstilsynet, Ankenævnet for Forsikring) are
 * named only to help the reader place ASF and livro de reclamações — not as
 * claims about how Danish bodies operate.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'forsikringsguide-portugal',
  url: '/dk/forsikringsguide-portugal/',
  cluster: 'guide',
  title: 'Forsikringsguide til Portugal: markedet | Adler & Rochefort',
  description:
    'Sådan fungerer det portugisiske forsikringsmarked: aktørerne, policens dele, begreberne, skadesagens forløb, fornyelse — og syv spørgsmål til enhver formidler.',
  keywords:
    'forsikring Portugal, forsikringsguide Portugal, portugisiske forsikringsselskaber, ASF Portugal, forsikringsformidler Portugal, apólice Portugal, skadesanmeldelse Portugal',
  eyebrow: 'Guide',
  h1: 'Forsikringsguide til Portugal: sådan fungerer markedet',
  standfirst:
    'Denne side forklarer ikke de enkelte produkter, men systemet de ligger i: hvem aktørerne er, hvad der står i en portugisisk police, hvilke begreber der afgør erstatningen, og hvordan en skadesag faktisk forløber.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Forsikringsguide' }],
  pullquote: 'En police bedømmes ikke den dag, den tegnes, men den dag, den skal betale.',
  schemaType: 'Article',
  formHeading: 'Stil et spørgsmål om forsikring i Portugal',
  formBranch: '',
  formSubject: 'Generelt spørgsmål — forsikring i Portugal',
  formCta: 'Stil dit spørgsmål',
  formIntro:
    'Ved du ikke, hvilket produkt spørgsmålet handler om, er det ingen ulempe. Beskriv situationen, og vi finder ud af, hvad der er relevant.',
  formPlaceholder:
    'For eksempel: vi har haft en police gennem en portugisisk bank i fire år og ved ikke, hvad den faktisk dækker.',
  sections: `
<section class="section plain" aria-labelledby="aktoerer">
  <div class="container narrow article-body">
    <h2 id="aktoerer">Aktørerne, og hvem der gør hvad</h2>
    <ul>
      <li><strong><em>Seguradora</em> — forsikringsselskabet.</strong> Bærer risikoen, skriver betingelserne, træffer afgørelsen i skadesagen. Markedet består af portugisiske selskaber og store internationale koncerner; et velkendt navn kan altså findes her, men produktet er et portugisisk produkt med portugisiske betingelser.</li>
      <li><strong><em>Agente de seguros</em> — forsikringsagent.</strong> Formidler for et eller flere selskaber, rådgiver kunden og bistår i skadesager. Det er vores rolle: Adler &amp; Rochefort er registreret <em>agente de seguros</em> hos ASF under nummer 425591790/3.</li>
      <li><strong><em>Corretor</em> — forsikringsmægler.</strong> En anden lovreguleret kategori af formidlere med en delvis anden stilling over for selskaberne.</li>
      <li><strong>Banker og ejendomsmæglere.</strong> Formidler forsikring ved siden af deres egen forretning. Det er lovligt og almindeligt, men udvalget er smalt, og produktet er valgt, fordi det passer deres proces.</li>
      <li><strong>ASF — <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>.</strong> Tilsynsmyndigheden for forsikring og pension, altså det portugisiske modstykke til Finanstilsynets forsikringstilsyn. Registret over formidlere er offentligt. Kontrollér altid, at den du bruger, står i det.</li>
    </ul>
    <p>En formidler koster dig ikke ekstra: vederlaget ligger i præmien og betales af selskabet, uanset om du tegner gennem en formidler eller direkte. Forskellen er, at nogen læser betingelserne for dig og bistår, når det gælder.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="apolice">
  <div class="container narrow article-body">
    <h2 id="apolice">Hvad en portugisisk police består af</h2>
    <p>En <em>apólice</em> er sjældent ét dokument, men tre, og de har forskellig rang:</p>
    <ol class="process-steps">
      <li><div><strong><em>Condições gerais</em> — de almindelige betingelser.</strong><span> Produktets trykte grundlag: definitioner, generelle undtagelser, pligter, skadesprocedure. Læses én gang og gælder hele aftaleperioden.</span></div></li>
      <li><div><strong><em>Condições especiais</em> — de særlige betingelser.</strong><span> Regler pr. dækning: hvad vandskadedækningen omfatter, hvordan tyveri defineres, hvilke undtagelser der gælder for ansvarsdelen.</span></div></li>
      <li><div><strong><em>Condições particulares</em> — dine oplysninger.</strong><span> Forsikringstager, genstand, forsikringssummer, selvrisici, valgte dækninger, præmie, periode. <strong>Det er det blad, der afgør din situation</strong>, og det eneste, der er unikt for dig.</span></div></li>
    </ol>
    <p>Ved uoverensstemmelse mellem dokumenterne går de særlige og de personlige betingelser normalt forud for de almindelige. Praktisk følge: har du kun læst det pæne produktblad, har du ikke læst din police. Vi gennemgår <em>condições particulares</em> linje for linje med dig, på engelsk, før du tegner.</p>
    <p>Policer udstedes på portugisisk. Det er et lovkrav og ikke noget, en formidler kan fravælge. Hvad vi kan, er at sikre, at du forstår præcis hvad der står — skriftligt, på engelsk, før underskrift.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="begreber">
  <div class="container narrow article-body">
    <h2 id="begreber">Fem begreber, der afgør erstatningen</h2>
    <h3><em>Capital seguro</em> — forsikringssum</h3>
    <p>Det højeste selskabet betaler for det forsikrede. På bygningen sættes den til genopførelsesprisen, på indboet til gensalgsværdien af det hele. Det er det enkeltvis vigtigste tal i hele aftalen.</p>
    <h3><em>Regra proporcional</em> — underforsikringsreglen</h3>
    <p>Den mekanisme, der overrasker flest. Er summen sat til halvdelen af den reelle værdi, erstattes også en lille skade med halvdelen. Ingen dispensation, ingen forhandling — en formel. Det er grunden til, at vi diskuterer summer frem for præmier.</p>
    <h3><em>Franquia</em> — selvrisiko</h3>
    <p>Din andel af hver skade. I portugisiske betingelser ofte angivet i procent af forsikringssummen eller af skaden, med et minimumsbeløb — i modsætning til den danske vane med et fast kronebeløb. En procentvis selvrisiko på en dyr genstand bliver et større tal, end det ser ud på papiret.</p>
    <h3><em>Período de carência</em> — kvalifikationsperiode</h3>
    <p>Tid fra tegningen, før en bestemt dækning kan bruges. Forekommer især i sundhedsforsikring, men også i visse andre produkter.</p>
    <h3><em>Exclusões</em> — undtagelser</h3>
    <p>Det, der ikke er omfattet. Delt i generelle undtagelser (i de almindelige betingelser) og undtagelser pr. dækning (i de særlige). De læses før tegningen, for det er det eneste tidspunkt, hvor de kan påvirkes gennem valg af produkt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skadesag">
  <div class="container narrow article-body">
    <h2 id="skadesag">Hvordan en skadesag forløber</h2>
    <ol class="process-steps">
      <li><div><strong>Anmeld inden for betingelsernes frist.</strong><span> Fristerne er korte og angives pr. dækning — ofte få dage, undertiden otte. Ved tyveri eller hærværk kræves normalt politianmeldelse (<em>participação</em>), og den skal ske straks.</span></div></li>
      <li><div><strong>Begræns skaden.</strong><span> Luk for vandet, sikr det, der ellers ødelægges yderligere. Det er en pligt i betingelserne, ikke en høflighed.</span></div></li>
      <li><div><strong>Dokumentér.</strong><span> Billeder før noget udbedres, kvitteringer, tilbud, journaler. Dokumentation skaffet bagefter er svagere dokumentation.</span></div></li>
      <li><div><strong>Taksator (<em>peritagem</em>).</strong><span> Selskabet sender normalt en taksator. Rapporten styrer udfaldet, og den er altid på portugisisk. Her bistår vi.</span></div></li>
      <li><div><strong>Afgørelse og erstatning.</strong><span> Kontant erstatning eller reparation gennem selskabets netværk, afhængigt af produkt og valg.</span></div></li>
      <li><div><strong>Ved afvisning eller for lav erstatning:</strong><span> bed om afgørelsen skriftligt med henvisning til betingelsernes punkt, og bed om en fornyet vurdering. Mange sager vender i det led, med den rette dokumentation.</span></div></li>
    </ol>
    <p>Kan sagen alligevel ikke løses, findes <em>livro de reclamações</em> — det nationale klageregister, i elektronisk form — og derefter klage til ASF. Det er en anden vej end den danske gennem Ankenævnet for Forsikring, og den fungerer kun på portugisisk. Vi opretter og følger den slags sager for vores kunder.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fornyelse">
  <div class="container narrow article-body">
    <h2 id="fornyelse">Fornyelse, indeksregulering og opsigelse</h2>
    <p>Portugisiske policer løber normalt ét år med automatisk fornyelse. Tre ting er værd at bemærke:</p>
    <ul>
      <li><strong>Indeksklausulen.</strong> Mange policer regulerer både summer og præmie årligt efter et indeks. Godt i princippet — men ligger reguleringen under den reelle udvikling i byggeomkostninger, glider man langsomt ind i underforsikring, uden at noget ser forkert ud.</li>
      <li><strong>Opsigelsesfristen.</strong> Opsigelse skal normalt ske skriftligt et bestemt stykke tid før fornyelsesdagen. Fristen står i betingelserne. En overskredet frist betyder i praksis endnu et år.</li>
      <li><strong>Præmiebetaling.</strong> Manglende betaling kan medføre, at dækningen ophører. Portugisiske selskaber sender sjældent flere rykkere, og <em>débito direto</em> — betalingsservice — er derfor praktisk snarere end bekvemt.</li>
    </ul>
    <p>Vores rutine med kunder: én årlig gennemgang af summer, selvrisici og ændringer i din situation. Ikke for at skifte selskab hvert år, men fordi en police, der var rigtig for tre år siden, sjældent er rigtig i dag.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="syv">
  <div class="container narrow article-body">
    <h2 id="syv">Syv spørgsmål til enhver formidler</h2>
    <p>Også til os. Får du ikke klare svar, bør du gå et andet sted hen.</p>
    <ol class="process-steps">
      <li><div><strong>Er du registreret hos ASF, og under hvilket nummer?</strong><span> Registret er offentligt og søgbart.</span></div></li>
      <li><div><strong>Hvilke selskaber kan du placere hos?</strong><span> Ét enkelt selskab er ikke diskvalificerende, men det bør siges ligeud.</span></div></li>
      <li><div><strong>Får jeg betingelserne før tegningen, og på et sprog jeg forstår?</strong><span> Vi udleverer en skriftlig gennemgang på engelsk.</span></div></li>
      <li><div><strong>Hvordan er forsikringssummen beregnet?</strong><span> Kommer tallet fra købsprisen, er det sandsynligvis forkert.</span></div></li>
      <li><div><strong>Hvad er de tre vigtigste undtagelser i netop denne police?</strong><span> Kan de ikke nævnes, er betingelserne ikke læst.</span></div></li>
      <li><div><strong>Hvad sker der, når jeg anmelder en skade — hvem taler jeg med?</strong><span> Svaret afgør, hvad rådgivningen er værd.</span></div></li>
      <li><div><strong>Hvordan følger du policen over tid?</strong><span> En aftale, ingen ser på, bliver forkert af sig selv.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="produkter">
  <div class="container narrow article-body">
    <h2 id="produkter">Videre til produktet</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/dk/husforsikring-portugal/">Husforsikring i Portugal</a></h3>
        <p>Boliger af høj værdi: besigtigelse, genopførelse, indbo og kunst til aftalt værdi — og det portugisiske grundlag med vandskade, jordskælv og feriebolig.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/sundhedsforsikring-portugal/">Sundhedsforsikring i Portugal</a></h3>
        <p>International privat dækning for familien, SNS, kvalifikationsperioder, helbredsvurdering og hvad der sker med den danske sygesikring.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/bilforsikring-portugal/">Bilforsikring i Portugal</a></h3>
        <p>Nummerplader, dækning, ISV og importen, og din skadesattest.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/ansvarsforsikring-portugal/">Ansvarsforsikring i Portugal</a></h3>
        <p>Familiens ansvar i millionklassen, verden over, og erhvervsansvar som særskilt police.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/flytte-til-portugal-forsikring/">Flytte til Portugal</a></h3>
        <p>Rækkefølgen, frameldingen og de tre huller, der opstår under en flytning.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/kobe-bolig-i-portugal-forsikring/">Købe bolig i Portugal</a></h3>
        <p>Hvad banken kræver, de tre tal, og hvorfor der ikke findes en ejerskifteforsikring.</p>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Forsikring i Portugal — generelle spørgsmål',
  faq: [
    {
      q: 'Koster det mere at gå gennem en formidler?',
      a: '<p>Nej. Vederlaget til formidleren ligger i præmien og betales af selskabet, uanset om du tegner direkte eller gennem en formidler. Forskellen er, at nogen læser betingelserne, sætter summerne med dig og bistår i skadesagen.</p>',
    },
    {
      q: 'Kan jeg få policen på dansk eller engelsk?',
      a: '<p>Policer fra portugisiske selskaber udstedes på portugisisk — det er et lovkrav. Vi arbejder på engelsk og udleverer en skriftlig gennemgang af dækning, summer, selvrisici og undtagelser på engelsk før underskrift. Vi taler ikke dansk.</p>',
    },
    {
      q: 'Hvordan kontrollerer jeg, at et selskab eller en formidler er i orden?',
      a: '<p>Gennem ASF’s offentlige register over forsikringsselskaber og formidlere. Der fremgår registrering, kategori og hvilke grene formidleren må arbejde med. Vores registrering: <em>agente de seguros</em> nr. 425591790/3.</p>',
    },
    {
      q: 'Hvad gør jeg, hvis selskabet afviser min skade?',
      a: '<p>Bed om afgørelsen skriftligt med henvisning til det punkt i betingelserne, den bygger på, og bed om en fornyet vurdering med supplerende dokumentation. Går det ikke, findes <em>livro de reclamações</em> og klage til ASF. Vi opretter og følger den slags sager for vores kunder.</p>',
    },
    {
      q: 'Hvorfor er portugisiske præmier undertiden lavere end danske?',
      a: '<p>Delvis lavere omkostningsniveau, delvis et andet skadebillede — men også fordi dækningen ofte er smallere. Den danske indboforsikring indeholder dækninger, der i Portugal sælges særskilt. Sammenlign derfor dækning mod dækning, ikke slutbeløb mod slutbeløb.</p>',
    },
    {
      q: 'Kan jeg beholde et dansk selskab til boligen i Portugal?',
      a: '<p>Som regel ikke. Tingforsikring tegnes normalt af et selskab med tilladelse i det land, hvor ejendommen ligger, og skadebehandlingen forudsætter lokal tilstedeværelse. Få et skriftligt svar fra dit danske selskab, før du går ud fra, at noget gælder hernede.</p>',
    },
  ],
  related: [
    { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' },
    { url: '/dk/flytte-til-portugal-forsikring/', label: 'Flytte til Portugal: forsikringerne i rigtig rækkefølge' },
  ],
};
