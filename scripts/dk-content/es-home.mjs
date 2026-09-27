/**
 * /dk/husforsikring-spanien/
 *
 * Search intent: "husforsikring Spanien" / "forsikring feriebolig Spanien" —
 * a Danish owner of a villa or apartment on the Costa del Sol, Costa Blanca,
 * Mallorca or the Canaries.
 *
 * The Danish angle: in Denmark the ejerforening's building policy is broad
 * and a Dane assumes the Spanish comunidad works the same way; it does not
 * cover what is inside the unit. And Consorcio is the Spanish counterpart to
 * Naturskadeordningen, but only pays through a valid, correctly insured
 * policy. The high-value framework is the same insurer-neutral, price-free
 * reference used on the Portugal page (cov.py), condensed.
 *
 * Form: the market's shared short form with the home branch preselected —
 * the Portuguese home wizard asks for Portuguese fields and would block a
 * Spain resident.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_HOME_PAGE = {
  slug: 'husforsikring-spanien',
  url: '/dk/husforsikring-spanien/',
  cluster: 'es-home',
  title: 'Husforsikring i Spanien: boliger af høj værdi | Adler & Rochefort',
  description:
    'Husforsikring i Spanien for danske ejere: Consorcio, comunidad de propietarios, tomme perioder, udlejning og boliger af høj værdi på individuelle betingelser.',
  keywords:
    'husforsikring Spanien, forsikring feriebolig Spanien, villa forsikring Spanien, seguro de hogar, Consorcio de Compensación de Seguros, comunidad de propietarios forsikring, indboforsikring Spanien, Costa del Sol husforsikring, Costa Blanca husforsikring, Mallorca villa forsikring',
  eyebrow: 'Spanien · Boliger af høj værdi',
  h1: 'Husforsikring i Spanien for boliger af høj værdi',
  standfirst:
    'En villa i Marbella, et hus i Jávea eller en finca på Mallorca skal forsikres til genopførelsesprisen, på betingelser skrevet til den slags bolig — og med blik for det, der er særligt spansk: Consorcio, ejerforeningens police og reglerne for tomme perioder og udlejning.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Husforsikring' }],
  pullquote: 'Consorcio betaler efter din police. Er summen for lav, er den også for lav over for staten.',
  schemaType: 'Article',
  formHeading: 'Bed om en skriftlig vurdering af boligen i Spanien',
  formBranch: 'DK · Bolig',
  formSubject: 'Husforsikring i Spanien',
  formCta: 'Bed om en skriftlig vurdering',
  formIntro:
    'Fortæl, hvor boligen ligger, hvordan I bruger den, og hvad den er forsikret for i dag — eller send os den nuværende police. Vi svarer skriftligt med, hvad den dækker, og hvor den ikke rækker.',
  formPlaceholder:
    'For eksempel: villa med pool i Benahavís, brugt seks måneder om året, udlejes enkelte uger om sommeren, kunst og møbler fra Danmark.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="policen">
  <div class="container narrow article-body">
    <h2 id="policen">Den spanske boligpolice: <em>continente</em> og <em>contenido</em></h2>
    <p>Den spanske boligpolice, <em>seguro de hogar</em>, dækker to ting, som sættes med hver sin sum:</p>
    <ul>
      <li><strong><em>Continente</em> — bygningen.</strong> Murværk, tag, gulve, faste installationer, køkken og bad, pool og mure. Ejer du en lejlighed, er det din enhed og det, du har bygget ind.</li>
      <li><strong><em>Contenido</em> — indboet.</strong> Møbler, elektronik, tøj og personlige ejendele. Kunst, smykker og ure over en vis værdi skal normalt opføres særskilt.</li>
    </ul>
    <p>Oven i det ligger to lag, som en dansker ikke har i sin husforsikring: <strong>Consorcio</strong>-dækningen af ekstraordinære naturkatastrofer, der følger automatisk med, og en <strong>ansvarsdel</strong>, som ofte er inkluderet — men med en sum, der sjældent passer til en husstand med betydelige formuer.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">Consorcio: naturkatastrofer uden tilvalg</h2>
    <p>I Spanien dækkes ekstraordinære risici — blandt andet ekstraordinær oversvømmelse, jordskælv, vulkanudbrud og atypisk cyklonstorm — af <em>Consorcio de Compensación de Seguros</em> gennem et tillæg på præmien. Det minder om den danske Naturskadeordning, men er langt bredere, og det er en tydelig forskel fra Portugal, hvor jordskælv normalt er et tilvalg.</p>
    <p>Tre ting er værd at vide:</p>
    <ul>
      <li><strong>Consorcio betaler efter policens summer.</strong> En underforsikret bolig er også underforsikret over for Consorcio. Genopførelsesprisen er derfor ikke mindre vigtig i Spanien — den er vigtigere.</li>
      <li><strong>Grænsen mellem Consorcio og selskabet er skarp.</strong> Ekstraordinær oversvømmelse er Consorcios; vand, der trænger ind gennem taget under et almindeligt skybrud, er selskabets — og der gælder betingelsernes krav til vedligeholdelse.</li>
      <li><strong>Regionale risici er reelle.</strong> <em>DANA</em>-regnskyllene i Valencia og Murcia, oversvømmelser langs flodlejerne i Andalusien, skovbrand i baglandet og vulkansk aktivitet på De Kanariske Øer. Beliggenheden afgør, hvor opmærksomt betingelserne skal læses.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="comunidad">
  <div class="container narrow article-body">
    <h2 id="comunidad">Lejlighed og urbanisation: <em>comunidad</em> er ikke en dansk ejerforening</h2>
    <p>Mange danske boliger i Spanien ligger i en <em>comunidad de propietarios</em> — en lejlighedsbygning eller en urbanisation med fælles pool, have og veje. Det ligner en dansk ejerforening, og derfor er forskellene lette at overse.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Hvad ejerforeningens police dækker, og hvad du selv skal forsikre</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col"><em>Seguro de comunidad</em></th><th scope="col">Din egen police</th></tr>
        </thead>
        <tbody>
          <tr><td>Bygningens struktur og facader</td><td>Ja</td><td>—</td></tr>
          <tr><td>Fællesarealer: pool, have, trapper, elevator</td><td>Ja, inkl. ansvar for fællesarealerne</td><td>—</td></tr>
          <tr><td>Dit køkken, bad, gulve og indbyggede forbedringer</td><td>Normalt ikke</td><td>Ja — som <em>continente</em> på din enhed</td></tr>
          <tr><td>Indbo, kunst og værdigenstande</td><td>Nej</td><td>Ja</td></tr>
          <tr><td>Vandskade fra din enhed hos naboen</td><td>Afhænger af hvor røret sidder</td><td>Ja, via din ansvarsdel</td></tr>
          <tr><td>Dit personlige ansvar uden for boligen</td><td>Nej</td><td>Kun hvis din police har det — med hvilken sum?</td></tr>
        </tbody>
      </table>
    </div>
    <p>Bed administratoren (<em>administrador de fincas</em>) om ejerforeningens betingelser, før du tegner din egen police. Uden dem gætter du på, hvor grænsen går.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="hoej-vaerdi">
  <div class="container">
    <div class="article-body" style="max-width:760px;">
      <h2 id="hoej-vaerdi">Betingelserne, vi placerer for boliger af høj værdi</h2>
      <p>En villa eller finca af høj værdi har brug for andre betingelser end en almindelig <em>seguro de hogar</em>. Det er de samme referencebetingelser, vi bruger i Portugal. Før vi anbefaler en police, holder vi den skriftligt op mod dem.</p>
    </div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Besigtigelse og genopførelsespris</h3>
        <p>Ved boliger af højere værdi besigtiger selskabet ejendommen uden omkostning for dig og bekræfter genopførelsesprisen og summerne for indbo og værdigenstande.</p>
      </div>
      <div class="feature-card">
        <h3>Ingen underforsikringsregel</h3>
        <p>Når de anbefalede summer er accepteret, giver selskabet afkald på forholdsmæssig nedsættelse: en delskade betales fuldt ud.</p>
      </div>
      <div class="feature-card">
        <h3>Garanteret genopførelse</h3>
        <p>Efter en totalskade genopføres huset, også hvis udgiften overstiger bygningssummen — forudsat at de anbefalede summer er accepteret.</p>
      </div>
      <div class="feature-card">
        <h3>Tilsvarende genhusning</h3>
        <p>Midlertidig bolig af tilsvarende standard, så længe huset ikke kan bebos — ikke de få måneder, der er typiske for standardpolicer.</p>
      </div>
      <div class="feature-card">
        <h3>Have, mure, pool og annekser</h3>
        <p>Træer, terrasser, støttemure, pools og gæstehuse med egne forsikringssummer, ikke et symbolsk beløb.</p>
      </div>
      <div class="feature-card">
        <h3>Indbo verden over</h3>
        <p>Personlige ejendele dækket mod alle risici — i Spanien, i Danmark, på rejse og i en anden bolig.</p>
      </div>
      <div class="feature-card">
        <h3>Værdigenstande til aftalt værdi</h3>
        <p>Kunst, smykker, ure og samlinger til en værdi fastsat ved policens start, uden selvrisiko og med dækning af værditab efter restaurering.</p>
      </div>
      <div class="feature-card">
        <h3>Familiens ansvar i millionklassen</h3>
        <p>Summer på flere millioner euro, verden over, med forsvarsomkostninger ud over summen — for husstanden, gæster og husstandsansatte.</p>
      </div>
    </div>
    <p class="article-body" style="max-width:760px;margin:8px 0 0;font-size:14px;color:var(--muted);">Dette er referencebetingelserne i de private client-policer, vi placerer. Dækning, summer, selvrisici og undtagelser varierer efter forsikringsselskab og risiko og er først bekræftet i de policedokumenter, der udstedes til dig.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="tom">
  <div class="container narrow article-body">
    <h2 id="tom">Tomme perioder og ejere, der ikke bor der fast</h2>
    <p>De fleste danske boliger i Spanien bruges en del af året — vinteren på Gran Canaria, foråret og efteråret på Costa del Sol — og står tomme resten af tiden. Spanske betingelser tager højde for det, og det skal oplyses:</p>
    <ul>
      <li><strong>Boligens anvendelse</strong> (<em>vivienda habitual</em> eller <em>secundaria</em>) står i policen og påvirker betingelserne. En fritidsbolig tegnet som helårsbolig er en uoverensstemmelse, der først opdages i skadesagen.</li>
      <li><strong>Tyveri og indbrud</strong> kan være begrænset, når boligen har været ubeboet ud over et antal sammenhængende dage, og der stilles ofte krav til låse, skodder og alarm.</li>
      <li><strong>Vandskade</strong> opdages sent i en tom bolig. Nogle selskaber kræver lukket hovedhane eller regelmæssigt tilsyn.</li>
      <li><strong>Uretmæssig besættelse</strong> (<em>ocupación</em>) er et særligt spansk emne. Visse policer tilbyder retshjælp og udgifter i den situation; omfanget varierer meget og skal læses.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="udlejning">
  <div class="container narrow article-body">
    <h2 id="udlejning">Udlejning: licens først, forsikring bagefter</h2>
    <p>Turistudlejning af en bolig kræver i Spanien registrering eller licens efter regionale regler, og reglerne er strammet flere steder — særligt på Mallorca og De Kanariske Øer, men også i dele af Andalusien og Valencia-regionen. En almindelig boligpolice er ikke skrevet til udlejning.</p>
    <p>Udlejer du — også få uger om året — skal det oplyses til selskabet, og policen skal kunne dække lejernes skader, dit ansvar over for gæsterne og tyveri begået af en lejer. Vi vurderer ikke, om din bolig opfylder licenskravene; det er et spørgsmål til kommunen eller en lokal rådgiver. Vi sørger for, at forsikringen passer til den udlejning, der faktisk finder sted.</p>
  </div>
</section>`, toPortugal.home),
  faqTitle: 'Husforsikring i Spanien — spørgsmål',
  faq: [
    {
      q: 'Er naturkatastrofer dækket af min spanske husforsikring?',
      a: '<p>De ekstraordinære risici — blandt andet ekstraordinær oversvømmelse, jordskælv, vulkanudbrud og atypisk cyklonstorm — dækkes af Consorcio de Compensación de Seguros via et tillæg på præmien, forudsat at der er en gyldig police. Almindelig storm og regn er selskabets egen dækning og følger betingelserne.</p>',
    },
    {
      q: 'Vores ejerforening har en forsikring. Er det ikke nok?',
      a: '<p>Normalt ikke. Ejerforeningens police dækker bygningens struktur og fællesarealerne. Dit køkken, bad, gulve, indbo, værdigenstande og dit personlige ansvar skal du selv forsikre. Bed administratoren om betingelserne, så vi kan se, hvor grænsen går.</p>',
    },
    {
      q: 'Hvilken sum skal bygningen forsikres for?',
      a: '<p>Genopførelsesprisen: hvad det koster at bygge boligen op igen til dagens priser, inklusive nedrivning og rådgivning. Ikke købsprisen og ikke den officielle vurdering. For boliger af høj værdi bekræftes summen typisk ved en besigtigelse.</p>',
    },
    {
      q: 'Vi bruger boligen fire måneder om året. Hvad betyder det?',
      a: '<p>Det skal fremgå af policen, at det er en fritidsbolig. Betingelserne for tyveri og vandskade kan være begrænset efter en periode uden beboelse, og der kan være krav om sikring eller tilsyn. Oplyst fra starten er det et spørgsmål om betingelser; opdaget i skadesagen er det et problem.</p>',
    },
    {
      q: 'Kan vi udleje boligen med en almindelig husforsikring?',
      a: '<p>Normalt ikke uden videre. Udlejningen skal oplyses, og policen skal være skrevet til den. Turistudlejning kræver desuden registrering eller licens efter regionale regler, som vi ikke rådgiver om — men vi sørger for, at forsikringen passer til udlejningen.</p>',
    },
    {
      q: 'Er vores kunst og smykker dækket af indboet?',
      a: '<p>Kun op til de grænser, policen sætter for enkeltgenstande og værdigenstande, og de er ofte lave. Kunst, smykker og ure af værdi bør opføres særskilt, til en aftalt værdi baseret på en vurdering, og gerne med dækning verden over.</p>',
    },
  ],
  related: [
    { url: '/dk/kobe-bolig-i-spanien-forsikring/', label: 'Købe bolig i Spanien: forsikring trin for trin' },
    { url: '/dk/ansvarsforsikring-spanien/', label: 'Ansvarsforsikring i Spanien' },
    { url: '/dk/forsikring-spanien/', label: 'Forsikring i Spanien: overblik' },
  ],
};
