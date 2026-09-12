/**
 * /dk/flytte-til-portugal-forsikring/
 *
 * Search intent: "flytte til Portugal forsikring" — the sequencing question.
 * This is the cluster's anchor guide: it does not re-explain each product but
 * orders them in time and names the three gaps that open during a move.
 *
 * Danish-specific: the framelding of Folkeregisteret is the single event that
 * silently invalidates the Danish policies' premise, the CPR/NIF pairing is
 * the administrative spine, and Danish movers underestimate how long the car
 * import takes.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOVING_PAGE = {
  slug: 'flytte-til-portugal-forsikring',
  url: '/dk/flytte-til-portugal-forsikring/',
  cluster: 'moving',
  title: 'Flytte til Portugal: forsikringerne i rigtig rækkefølge | Adler & Rochefort',
  description:
    'Hvad der sker med danske forsikringer ved udrejse, de tre huller der opstår under flytningen, og i hvilken rækkefølge sundhed, bolig og bil bør ordnes i Portugal.',
  keywords:
    'flytte til Portugal forsikring, udrejse Danmark forsikringer, forsikring ved flytning til udlandet, danske forsikringer i udlandet, NIF Portugal, opholdsregistrering Portugal',
  eyebrow: 'Guide',
  h1: 'Flytte til Portugal: hvad der sker med dine forsikringer, og i hvilken rækkefølge',
  standfirst:
    'Det meste, der går galt ved en flytning, går galt på grund af rækkefølgen, ikke valget af selskab. Her er de tre huller, der opstår ved en flytning til Portugal, og hvordan du lukker dem.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Flytte til Portugal' }],
  pullquote: 'Ingen opsiger sine forsikringer. Man flytter blot — og en dag passer grundlaget ikke længere.',
  schemaType: 'Article',
  formHeading: 'Planlæg forsikringerne til flytningen',
  formBranch: '',
  formSubject: 'Flytning til Portugal — forsikringer',
  formCta: 'Book en samtale',
  formIntro:
    'Fortæl, hvor i flytningen du er, og hvilken dato du sigter efter. Vi svarer med, hvad der skal ordnes, i hvilken rækkefølge.',
  formPlaceholder:
    'For eksempel: flytter i februar til Lissabon, to voksne, lejer det første år, tager bilen med. Hvad ordner vi først?',
  sections: `
<section class="section plain" aria-labelledby="udrejsen">
  <div class="container narrow article-body">
    <h2 id="udrejsen">Begivenheden, der ændrer alt: frameldingen</h2>
    <p>Ved flytning til udlandet frameldes man normalt Folkeregisteret. Formelt er det en adresseoplysning. Forsikringsmæssigt er det den begivenhed, der trækker grundlaget væk under stort set alle de forsikringer, du har i Danmark — for de er skrevet på dansk bopæl.</p>
    <p>Det, der gør det besværligt, er, at intet går synligt i stykker. Præmien trækkes fortsat, policen ser uændret ud, appen virker. Forskellen viser sig først i skadesagen, i den vurdering der foretages dér.</p>
    <div class="callout">
      <span class="callout-label">Den ene regel, der betyder noget</span>
      Meld flytningen til hvert dansk selskab <strong>skriftligt</strong>, med præcis dato, og bed om et <strong>skriftligt svar</strong> på, hvad der gælder efter udrejsen: ophører dækningen, fortsætter den i en overgangsperiode, eller kan policen skrives om? Det svar, police for police, er grundlaget for hele tidsplanen. Opsig aldrig noget først og find ud af tilslutningen bagefter.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="huller">
  <div class="container narrow article-body">
    <h2 id="huller">De tre huller</h2>
    <h3>1. Sundhedshullet</h3>
    <p>Ved udrejsen ophører tilknytningen til den danske sygesikring normalt, og det blå EU-kort gælder midlertidigt ophold — ikke bopæl. Samtidig tager registreringen i SNS tid: NIF, opholdsregistrering, adressedokumentation, sundhedscenter. Mellem de to ligger en periode, hvor du reelt står uden vej ind i behandling ud over akut. Undersøg også, om EU-attesten S1 gælder dig — for pensionister med dansk pension ændrer det hele billedet. Se <a href="/dk/sundhedsforsikring-portugal/">sundhedsforsikring i Portugal</a>.</p>
    <h3>2. Bolighullet</h3>
    <p>Den danske indbo- og husforsikring dækker en bolig i Danmark og tingene der. Flyttegodset under transport er en tredje ting, som normalt hverken ligger i den danske police eller i den nye portugisiske — men i flyttefirmaets ansvar eller i en særskilt transportforsikring. Bed flyttefirmaet om skriftligt at oplyse, hvilket beløb deres ansvar er begrænset til; det er næsten altid lavere end godsets værdi. Se <a href="/dk/husforsikring-portugal/">husforsikring i Portugal</a>.</p>
    <h3>3. Bilhullet</h3>
    <p>Den danske bilforsikring hviler på dansk indregistrering og bopæl; en portugisisk police kan normalt kun tegnes på en portugisisk <em>matrícula</em>. Importen tager uger. Uden planlægning bliver mellemperioden en periode med kørsel på uklart grundlag. Se <a href="/dk/bilforsikring-portugal/">bilforsikring i Portugal</a>.</p>
    <p>Dertil kommer en fjerde ting, som ikke er et hul men en fraværende dækning: ansvaret og retshjælpen, du har haft inde i den danske indboforsikring, findes ikke automatisk i den portugisiske. Se <a href="/dk/ansvarsforsikring-portugal/">ansvarsforsikring i Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="raekkefoelge">
  <div class="container narrow article-body">
    <h2 id="raekkefoelge">Den rækkefølge, der fungerer</h2>
    <h3>Før flytningen — tre til seks måneder</h3>
    <ol class="process-steps">
      <li><div><strong>NIF</strong><span> (portugisisk skattenummer) — forudsætningen for næsten alt: lejekontrakt, bankkonto, ejendomskøb, forsikring.</span></div></li>
      <li><div><strong>Skriftlige svar</strong><span> fra hvert dansk selskab om, hvad der gælder efter udrejsen.</span></div></li>
      <li><div><strong>Skadesattest</strong><span> fra bilforsikringsselskabet, gerne på engelsk. Bed om den, mens aftalen løber.</span></div></li>
      <li><div><strong>Din situation i den danske sygesikring</strong><span> oplyst skriftligt, og undersøgt om S1 gælder dig.</span></div></li>
      <li><div><strong>Sundhedsforsikring</strong><span> tegnet, mens helbredet er uproblematisk — helbredsvurderingen bliver ikke lettere af at vente.</span></div></li>
      <li><div><strong>ISV-beregning</strong><span>, hvis bilen skal med. For mange er det billigere at sælge i Danmark og købe her.</span></div></li>
    </ol>
    <h3>Under flytningen</h3>
    <ol class="process-steps">
      <li><div><strong>Flyttefirmaets ansvar</strong><span> skriftligt, og særskilt transportforsikring, hvis beløbet er for lavt.</span></div></li>
      <li><div><strong>Boligforsikring på den portugisiske bolig</strong><span> fra indflytningsdagen — også ved leje, hvor udlejer forsikrer bygningen, men ikke dit indbo og ikke dit ansvar.</span></div></li>
      <li><div><strong>Bilen</strong><span>: dansk dækning bekræftet i mellemperioden, portugisisk police startet på <em>matrículans</em> dato.</span></div></li>
      <li><div><strong>Framelding</strong><span> af Folkeregisteret, med forsikringsspørgsmålene allerede afklaret.</span></div></li>
    </ol>
    <h3>Efter flytningen — de første måneder</h3>
    <ol class="process-steps">
      <li><div><strong>Opholdsregistrering</strong><span> hos den kompetente myndighed, og derefter registrering i SNS på sundhedscentret.</span></div></li>
      <li><div><strong>Kørekortet registreret</strong><span> hos IMT inden for den frist, der regnes fra opholdsregistreringen.</span></div></li>
      <li><div><strong>Bilimporten</strong><span> afsluttet: told, ISV eller fritagelse, teknisk kontrol, homologering.</span></div></li>
      <li><div><strong>Ansvarsdækning</strong><span> kontrolleret — privat, og erhverv hvis du arbejder herfra.</span></div></li>
      <li><div><strong>Gennemgang efter seks måneder</strong><span>: bolig, adresse og arbejde ser sjældent ud, som planen gjorde.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="dokumenter">
  <div class="container narrow article-body">
    <h2 id="dokumenter">Dokumenter, det er værd at have på engelsk</h2>
    <p>Portugisiske selskaber arbejder på portugisisk, vi arbejder på engelsk, og danske dokumenter er ubrugelige for begge. Det, der er svært eller umuligt at få bagefter:</p>
    <ul>
      <li><strong>Skadesattest</strong> fra bilforsikringsselskabet, med antal skadefri år og eventuelle skader.</li>
      <li><strong>Skadeshistorik</strong> fra indboforsikringen, hvis du har haft skader.</li>
      <li><strong>Vaccinationsoplysninger</strong> og relevante journaludskrifter for familiens medlemmer.</li>
      <li><strong>Skriftlig bekræftelse</strong> fra hvert selskab om, hvad der gælder efter udrejsen.</li>
      <li><strong>Registreringsattest</strong> og købsdokument for bilen.</li>
    </ul>
    <p>Praktisk fremgangsmåde: bed om det hele, mens aftalerne stadig løber, bed om engelsk hvor det er muligt, og gem det i en sky, du kan komme til hernede.</p>
  </div>
</section>`,
  faqTitle: 'Flytte til Portugal — spørgsmål om forsikring',
  faq: [
    {
      q: 'Kan jeg beholde mine danske forsikringer?',
      a: '<p>Nogle kan skrives om, andre ophører reelt, når dansk bopæl ikke længere foreligger. Svaret er forskelligt police for police og selskab for selskab, og det eneste pålidelige er et skriftligt svar fra selskabet med din præcise udrejsedato oplyst. Opsig ikke noget, før tilslutningen er på plads.</p>',
    },
    {
      q: 'Hvad ordner jeg først?',
      a: '<p>NIF, fordi næsten alt andet forudsætter det. Derefter sundhedsforsikringen — den er den eneste, der bliver vanskeligere af at vente, fordi helbredsvurderingen sker ved tegningen. Bolig og bil følger boligens og indregistreringens datoer.</p>',
    },
    {
      q: 'Dækker min indboforsikring flyttegodset under transporten?',
      a: '<p>Normalt ikke, og den nye portugisiske police gør det heller ikke. Godset under transport ligger i flyttefirmaets ansvar, som ofte er beløbsbegrænset, eller i en særskilt transportforsikring. Bed om firmaets ansvarsbeløb skriftligt og sammenlign med godsets værdi.</p>',
    },
    {
      q: 'Har jeg brug for boligforsikring, når jeg lejer?',
      a: '<p>Ja, til dit eget indbo og dit ansvar. Udlejer forsikrer normalt bygningen, ikke det du har inde i den, og ikke skade du forvolder. Lejekontrakter hernede indeholder desuden ofte et krav om egen forsikring.</p>',
    },
    {
      q: 'Gælder det blå EU-sygesikringskort under flytningen?',
      a: '<p>Det blå kort er beregnet til midlertidigt ophold, ikke til den der har flyttet sin bopæl. Netop derfor opstår hullet i perioden mellem udrejse og SNS-registrering, og det er en af grundene til at tegne sundhedsforsikringen før flytningen.</p>',
    },
  ],
  related: [
    { url: '/dk/sundhedsforsikring-portugal/', label: 'Sundhedsforsikring i Portugal' },
    { url: '/dk/bilforsikring-portugal/', label: 'Bilforsikring i Portugal' },
    { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' },
  ],
};
