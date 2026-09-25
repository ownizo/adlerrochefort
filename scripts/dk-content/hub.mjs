/**
 * /dk/ — the Danish market homepage, which is also the cluster hub.
 *
 * Search intent: "forsikring i Portugal" — a Dane who lives here, is moving
 * here, or owns a holiday home here and wants to know how the market works.
 *
 * The angle that makes this page Danish rather than translated: in Denmark the
 * split runs between indboforsikring (contents, and it carries ansvar and
 * retshjælp inside it) and husforsikring (the building). Portugal draws the
 * line in a completely different place — one multirriscos habitação covers
 * edifício and recheio, while ansvar and retshjælp sit outside as options.
 * A Dane who buys "the same as at home" therefore ends up with the property
 * covered and the liability missing, which is the reverse of what they expect.
 */
export const HUB_PAGE = {
  slug: 'dk',
  url: '/dk/',
  cluster: 'hub',
  isHub: true,
  title: 'Forsikring i Portugal for danskere | Adler & Rochefort',
  description:
    'Sådan fungerer forsikring i Portugal, når man kommer fra Danmark: bolig, sundhed, bil og ansvar. Registreret forsikringsformidler i Algarve, ASF nr. 425591790/3.',
  keywords:
    'forsikring Portugal, husforsikring Portugal, sundhedsforsikring Portugal, bilforsikring Portugal, danskere i Portugal forsikring, forsikringsformidler Portugal',
  eyebrow: 'Forsikring i Portugal',
  h1: 'Forsikring i Portugal for danskere — fastboende, halvårsophold eller feriebolig',
  standfirst:
    'I Danmark deler man forsikringerne op i indbo og hus, og ansvar følger med indboet. Portugal deler op et helt andet sted. Det er den vigtigste ting at forstå, før du tegner noget her.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [{ name: 'Forside', url: '/dk/' }],
  pullquote:
    'Den billigste police bliver dyr den dag, det viser sig, at netop den skade var undtaget.',
  schemaType: 'WebPage',
  formHeading: 'Fortæl om din situation',
  formBranch: '',
  formSubject: 'Generel forespørgsel (DK)',
  formCta: 'Send forespørgsel',
  formIntro:
    'Skriv, hvad der skal dækkes, og fra hvornår. Vi svarer med, hvilke oplysninger der skal til, og hvad der realistisk kan ordnes.',
  formPlaceholder:
    'For eksempel: vi flytter til Lissabon i marts, har en lejlighed i condomínio og en bil på danske nummerplader.',
  sections: `
<section class="section plain" aria-labelledby="opdelingen">
  <div class="container narrow article-body">
    <h2 id="opdelingen">Den danske opdeling findes ikke her</h2>
    <p>I Danmark er forsikringslandskabet delt på en måde, de fleste har haft hele livet uden at tænke over det: <strong>indboforsikringen</strong> dækker tingene i boligen — og har <em>ansvarsforsikring</em> og <em>retshjælp</em> indbygget — mens <strong>husforsikringen</strong> dækker selve bygningen, hvis man ejer et hus. Bor man i lejlighed, har man kun indbo; ejerforeningen tager bygningen.</p>
    <p>Portugal deler op et andet sted. Én police, <em>multirriscos habitação</em>, dækker både bygningen (<em>edifício</em>) og indboet (<em>recheio</em>) — man vælger, hvilke af de to dele man køber. Til gengæld ligger ansvar og retshjælp <strong>uden for</strong> policen som tilvalg.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Den danske opdeling af forsikringer og hvordan Portugal deler op</caption>
        <thead>
          <tr><th scope="col">I Danmark</th><th scope="col">I Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Indboforsikring — tingene i boligen</td><td><em>Recheio</em>, en del af <em>multirriscos habitação</em></td></tr>
          <tr><td>Husforsikring — bygningen</td><td><em>Edifício</em>, den anden del af samme police</td></tr>
          <tr><td>Ansvarsforsikring, indbygget i indboet</td><td>Tilvalg (<em>responsabilidade civil</em>), ofte begrænset til boligen</td></tr>
          <tr><td>Retshjælp, indbygget i indboet</td><td>Tilvalg (<em>proteção jurídica</em>), ikke standard</td></tr>
          <tr><td>Rejseforsikring, ofte via indbo eller kort</td><td>Egen produkt; ingen sammenhæng med boligpolicen</td></tr>
          <tr><td>Én selvrisiko for hele policen</td><td>Selvrisiko pr. dækning, ofte i procent</td></tr>
        </tbody>
      </table>
    </div>
    <p>Konsekvensen for en dansker, der køber "det samme som hjemme": bygningen og indboet er dækket, men ansvaret — den dækning man har haft i tredive år uden at købe den — er der ikke. Det er den omvendte overraskelse af, hvad man forventer.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ordbog">
  <div class="container narrow article-body">
    <h2 id="ordbog">Seks ord, der afgør din police</h2>
    <p>Policer udstedes på portugisisk. Disse seks ord er dem, der bestemmer, hvad du får udbetalt — resten kan man spørge om.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Portugisiske forsikringsbegreber og deres danske betydning</caption>
        <thead>
          <tr><th scope="col">Portugisisk</th><th scope="col">Dansk</th><th scope="col">Hvorfor det betyder noget</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Apólice</em></td><td>Police</td><td>Består af tre dokumenter, ikke ét. Det personlige blad er dit.</td></tr>
          <tr><td><em>Prémio</em></td><td>Præmie</td><td>Det du betaler. Ikke en bonus, selv om ordet ligner.</td></tr>
          <tr><td><em>Franquia</em></td><td>Selvrisiko</td><td>Ofte i procent af forsikringssummen, ikke et fast kronebeløb.</td></tr>
          <tr><td><em>Capital seguro</em></td><td>Forsikringssum</td><td>Det vigtigste tal i hele aftalen. Se afsnittet om genopførelsespris.</td></tr>
          <tr><td><em>Regra proporcional</em></td><td>Underforsikring</td><td>Halv sum giver halv erstatning — også ved en lille skade.</td></tr>
          <tr><td><em>Exclusões</em></td><td>Undtagelser</td><td>Læses før, ikke efter. Det er det eneste tidspunkt, de kan påvirkes.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="forsikringer">
  <div class="container narrow article-body">
    <h2 id="forsikringer">De fire forsikringer, vi arbejder med</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/dk/husforsikring-portugal/">Hus- og indboforsikring</a></h3>
        <p>Bygning og indbo i samme police, genopførelsespris, vandskade, jordskælvsdækning, <em>condomínio</em> versus ejerforening og feriebolig, der står tom.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/sundhedsforsikring-portugal/">Sundhedsforsikring</a></h3>
        <p>SNS og det offentlige, private behandlernetværk, kvalifikationsperioder, helbredsvurdering — og hvad der sker med det gule sundhedskort og sygesikringsgruppen.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/bilforsikring-portugal/">Bilforsikring</a></h3>
        <p>Ansvar og kasko, danske eller portugisiske nummerplader, ISV og importen via IMT, og hvordan din skadesattest behandles.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/ansvarsforsikring-portugal/">Ansvarsforsikring</a></h3>
        <p>Det privatansvar, der lå i din indboforsikring, og erhvervsansvar for konsulenter, behandlere og mindre virksomheder.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="guider">
  <div class="container narrow article-body">
    <h2 id="guider">Tre guider til situationen frem for produktet</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/dk/flytte-til-portugal-forsikring/">Flytte til Portugal</a></h3>
        <p>Rækkefølgen: hvad der skal ordnes før afrejsen, hvad der først kan ordnes med NIF i hånden, og hvor hullerne opstår.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/kobe-bolig-i-portugal-forsikring/">Købe bolig i Portugal</a></h3>
        <p>Hvad banken kræver, hvad der gælder fra dagen for <em>escritura</em>, og de tre tal for samme ejendom, som ikke er det samme.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/forsikringsguide-portugal/">Forsikringsguide til Portugal</a></h3>
        <p>Hvordan markedet fungerer: aktørerne, policens dele, skadesagens forløb, fornyelse og opsigelse.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="feriebolig">
  <div class="container narrow article-body">
    <h2 id="feriebolig">Feriebolig eller halvårsophold</h2>
    <p>Mange af vores danske kunder bor her ikke fast. Boligen bruges nogle måneder om året, ofte i vinterhalvåret, og står tom resten af tiden. Det er ikke en detalje for forsikringsselskabet — det er en anden risiko, og portugisiske betingelser behandler den særskilt.</p>
    <p>Hvad det betyder i praksis:</p>
    <ul>
      <li><strong>Perioder uden beboelse</strong> er defineret i betingelserne, typisk som et antal sammenhængende dage. Overskrides grænsen, kan visse dækninger være begrænset eller bortfalde.</li>
      <li><strong>Vandskade</strong> er den hyppigste skade i en tom bolig, og også den, der bliver dyrest, fordi den opdages sent. Nogle selskaber stiller krav om lukket hovedhane eller tilsyn.</li>
      <li><strong>Indbrud</strong> vurderes efter sikring og efter, hvor længe boligen står ubeboet.</li>
      <li><strong>Udlejning</strong>, også få uger om året, skal oplyses. En almindelig boligpolice er ikke skrevet til erhvervsmæssig udlejning.</li>
    </ul>
    <p>Oplys den faktiske brug fra starten. En police tegnet som helårsbolig, men brugt som feriebolig, er den slags uoverensstemmelse, der først dukker op i skadesagen — og på det tidspunkt er det for sent at rette.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="saadan">
  <div class="container narrow article-body">
    <h2 id="saadan">Sådan arbejder vi</h2>
    <ol class="process-steps">
      <li><div><strong>Vi starter med situationen, ikke med produktet.</strong><span> Hvor bor du, hvor længe, hvad ejer du, hvem skal dækkes, og hvad arbejder du med. Produktet følger af svarene.</span></div></li>
      <li><div><strong>Vi sætter summerne, før vi taler om præmie.</strong><span> Genopførelsespris på bygningen, gensalgsværdi på indboet. En forkert sum gør en billig police ubrugelig.</span></div></li>
      <li><div><strong>Vi læser undtagelserne højt.</strong><span> Skriftligt, på engelsk, før du skriver under — de tre vigtigste undtagelser i netop den police.</span></div></li>
      <li><div><strong>Vi indhenter tilbud inden for vores portefølje af selskaber</strong><span> og forklarer, hvad forskellen i dækning består i, ikke kun forskellen i pris.</span></div></li>
      <li><div><strong>Vi anmelder skaden for dig.</strong><span> På portugisisk, over for taksator, og vi følger sagen til den er afsluttet.</span></div></li>
      <li><div><strong>Vi gennemgår policerne én gang om året.</strong><span> Boligen, adressen og arbejdet ser sjældent ud, som planen gjorde.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="fejl">
  <div class="container narrow article-body">
    <h2 id="fejl">Fem fejl vi ser gentagne gange</h2>
    <ul>
      <li><strong>At antage, at ansvaret følger med boligpolicen.</strong> Det gør det i Danmark. Her er det et tilvalg.</li>
      <li><strong>At forsikre bygningen for købsprisen.</strong> Købsprisen indeholder grunden, beliggenheden og udsigten. Ingen af dem brænder. Summen skal være genopførelsesprisen.</li>
      <li><strong>At tage bankens police uden at læse den.</strong> Banken har en legitim interesse i, at boligen er forsikret. Den har ikke vurderet, om dækningen passer til dig.</li>
      <li><strong>At udskyde sundhedsforsikringen.</strong> Helbredsvurderingen sker ved tegningen. Hver måned, der går, er en måned, hvor noget kan blive en kendt lidelse.</li>
      <li><strong>At opsige den danske bilforsikring, før den portugisiske er på plads.</strong> Importen tager uger, og hullet imellem er ingen dækket i.</li>
    </ul>
  </div>
</section>`,
  // Portrætbåndet og forsikringsselskabsrækken nedenunder renderes af
  // scripts/lib/site-sections.mjs; kun den danske tekst bor her.
  audience: {
    heading: 'Hvem vi <em>er her for</em>',
    body:
      'Vi står for forsikringerne for danskere i Portugal: pensionister, boligkøbere, ejere af feriebolig, familier og erhvervsaktive. Uanset om du flyttede hertil i år eller har boet her i årtier, er det os, der tager den portugisiske forsikringsside — rådgivning, sammenligning af de dækninger, der passer, tegning, løbende service og hjælp ved skade, hos den samme person hele vejen.',
    alt: 'Forsikringsrådgiver for udlandsdanskere og andre udlændinge i Portugal',
  },
  insurers: {
    heading: 'Forsikringsselskaber og co-brokerage-partnere, <em>vi samarbejder med</em>',
    lead:
      'Som mægler er vi ikke bundet til ét selskab. Vi rådgiver inden for vores portefølje af forsikringsselskaber og finder den løsning, der passer til din situation — ikke blot den laveste præmie.',
  },
  faqTitle: 'Forsikring i Portugal — ofte stillede spørgsmål',
  faq: [
    {
      q: 'Taler I dansk?',
      a: '<p>Nej. Vi arbejder på engelsk, skriftligt, og læser og forhandler betingelserne på portugisisk over for selskaberne. Denne side er på dansk, fordi emnet er dansk — men vi har ikke dansktalende medarbejdere og intet kontor i Danmark. Vi er forsikringsformidler i Lagos i Algarve.</p>',
    },
    {
      q: 'Kan jeg beholde min danske forsikring på boligen i Portugal?',
      a: '<p>Som regel ikke. Tingforsikring tegnes normalt af et selskab med tilladelse i det land, hvor ejendommen ligger, og skadebehandlingen forudsætter lokal tilstedeværelse. Få et skriftligt svar fra dit danske selskab, før du går ud fra, at noget gælder hernede.</p>',
    },
    {
      q: 'Hvad koster det at bruge en formidler?',
      a: '<p>Ingenting ud over præmien. Formidlerens vederlag ligger i præmien og betales af selskabet, uanset om du tegner direkte eller gennem os. Forskellen er, at nogen læser betingelserne, sætter summerne med dig og fører skadesagen.</p>',
    },
    {
      q: 'Skal jeg have en portugisisk sundhedsforsikring, når jeg er registreret i SNS?',
      a: '<p>Det er ikke et enten-eller. SNS giver adgang til behandling, herunder akut. En privat police giver kortere ventetid til konsultation og udredning og mulighed for at vælge klinik. De fleste af vores kunder bruger begge dele. Se <a href="/dk/sundhedsforsikring-portugal/">sundhedsforsikring i Portugal</a>.</p>',
    },
    {
      q: 'Vi bruger boligen tre måneder om året. Ændrer det noget?',
      a: '<p>Ja, væsentligt. Perioder uden beboelse behandles særskilt i portugisiske betingelser, ofte med krav om tilsyn eller med begrænsninger for bestemte skadetyper. Oplys den faktiske brug fra starten i stedet for at beskrive boligen som helårsbolig.</p>',
    },
  ],
  related: [
    { url: '/dk/flytte-til-portugal-forsikring/', label: 'Flytte til Portugal: forsikringerne i rigtig rækkefølge' },
    { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide til Portugal' },
  ],
};
