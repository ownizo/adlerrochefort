/**
 * /dk/forsikring-spanien/ — the Spain landing page of the Danish cluster.
 *
 * Search intent: "forsikring Spanien" / "forsikring i Spanien dansker" — a
 * Dane with a home on the Costa del Sol, the Costa Blanca, Mallorca or the
 * Canaries who wants to know how the Spanish market is put together and who
 * can explain it.
 *
 * The Danish angle: Denmark already has a public natural-hazard scheme funded
 * by a levy on fire insurance (Naturskadeordningen). Spain's Consorcio de
 * Compensación de Seguros is the closest thing a Dane has seen, but broader —
 * so that is the bridge into the Spanish system. The page also says plainly
 * how we work in Spain: a Portuguese intermediary under the EU freedom to
 * provide services, Spanish insurers, policies in Spanish, explained in
 * English (the cluster's language policy).
 */
import { BREADCRUMB_ROOT, withSibling, toPortugal } from './shared.mjs';

export const ES_GUIDE_PAGE = {
  slug: 'forsikring-spanien',
  url: '/dk/forsikring-spanien/',
  cluster: 'es-guide',
  title: 'Forsikring i Spanien for danskere | Adler & Rochefort',
  description:
    'Forsikring i Spanien for danske husstande: bolig, sundhed, bil og familiens ansvar — Consorcio, comunidad og policer på spansk, forklaret skriftligt på engelsk.',
  keywords:
    'forsikring Spanien, forsikring i Spanien dansker, husforsikring Spanien, sundhedsforsikring Spanien, bilforsikring Spanien, ansvarsforsikring Spanien, Consorcio de Compensación de Seguros, feriebolig Spanien forsikring, Costa del Sol forsikring, Costa Blanca forsikring, Mallorca forsikring, Gran Canaria forsikring',
  eyebrow: 'Spanien · Overblik',
  h1: 'Forsikring i Spanien: sådan er markedet skruet sammen',
  standfirst:
    'Fra Costa del Sol og Costa Blanca til Mallorca og De Kanariske Øer: den spanske forsikringsverden ligner den danske mindre, end man tror. Her er de fire dækninger, der betyder noget for en dansk husstand, de begreber der afgør erstatningen — og hvordan vi arbejder i Spanien.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Spanien' }],
  pullquote: 'Den spanske police er skrevet på spansk. Vores opgave er, at du ved, hvad der står i den, før du skriver under.',
  schemaType: 'Article',
  formHeading: 'Stil et spørgsmål om forsikring i Spanien',
  formBranch: '',
  formSubject: 'Forsikring i Spanien — generelt spørgsmål',
  formCta: 'Send forespørgsel',
  formIntro:
    'Fortæl, hvor i Spanien boligen ligger, hvordan I bruger den, og hvad I har i dag — send gerne jeres nuværende policer med. Vi svarer skriftligt med, hvad de dækker, og hvad vi vil anbefale.',
  formPlaceholder:
    'For eksempel: villa i Marbella, brugt fra oktober til april, police tegnet gennem banken ved købet i 2019. Vi ved ikke, hvad den dækker.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="hvordan">
  <div class="container narrow article-body">
    <h2 id="hvordan">Hvordan vi arbejder i Spanien</h2>
    <p>Adler &amp; Rochefort er en portugisisk forsikringsformidler, registreret hos tilsynsmyndigheden ASF under nr. 425591790/3, med kontorer i Lissabon og Lagos. I Spanien formidler vi i henhold til EU’s frie udveksling af tjenesteydelser — den samme ordning, der lader en dansk bank eller et dansk selskab arbejde i et andet EU-land uden at etablere sig der.</p>
    <p>I praksis betyder det:</p>
    <ul>
      <li><strong>Spanske risici forsikres hos selskaber, der tegner i Spanien.</strong> Boligen i Estepona eller på Mallorca forsikres på spanske betingelser, med spansk skadebehandling og med adgang til <em>Consorcio de Compensación de Seguros</em>.</li>
      <li><strong>Policerne er på spansk.</strong> Det er udgangspunktet for spanske forsikringsaftaler. Vi gennemgår dem skriftligt på engelsk — dækninger, summer, selvrisici og undtagelser — før du skriver under.</li>
      <li><strong>Én rådgiver for begge lande.</strong> Mange danske husstande har bolig i både Portugal og Spanien, eller flytter mellem dem. At samme rådgiver ser begge sæt policer er den enkleste måde at undgå, at det samme hul opstår to steder.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">Consorcio: det, en dansker kender fra Naturskadeordningen</h2>
    <p>I Danmark dækker Naturskadeordningen stormflod og visse oversvømmelser gennem en afgift på brandforsikringen. Spanien har en lignende, men langt bredere konstruktion: <em>Consorcio de Compensación de Seguros</em>, et offentligt organ, der dækker de såkaldte <em>riesgos extraordinarios</em>.</p>
    <ul>
      <li><strong>Hvad Consorcio dækker:</strong> blandt andet ekstraordinær oversvømmelse, jordskælv og flodbølge, vulkanudbrud, atypisk cyklonstorm samt visse hændelser som terror og uroligheder.</li>
      <li><strong>Hvordan det finansieres:</strong> via et tillæg (<em>recargo</em>), der opkræves sammen med præmien på ejendomsforsikringer. Du vælger det ikke til; det følger med policen.</li>
      <li><strong>Hvad det forudsætter:</strong> at der findes en gyldig, betalt police på ejendommen. Consorcio erstatter efter policens summer — er boligen underforsikret, er den også underforsikret over for Consorcio.</li>
    </ul>
    <p>Det er en reel forskel fra Portugal, hvor jordskælvsdækning normalt er et tilvalg. Til gengæld dækker Consorcio ikke almindelig storm, kraftig regn eller vand, der trænger ind gennem et utæt tag. Det er forsikringsselskabets egen dækning, og der står betingelserne — ofte med tærskler for vindstyrke og krav til vedligeholdelse.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fire">
  <div class="container narrow article-body">
    <h2 id="fire">De fire dækninger, der betyder noget</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/dk/husforsikring-spanien/">Husforsikring i Spanien</a></h3>
        <p>Boliger af høj værdi, <em>comunidad de propietarios</em>, tomme perioder, udlejning og de regionale risici — fra oversvømmelser i Valencia og Andalusien til brand i baglandet og vulkanrisiko på De Kanariske Øer.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/sundhedsforsikring-spanien/">Sundhedsforsikring i Spanien</a></h3>
        <p>Registrering som EU-borger, S1 for pensionister, kravet om en police uden egenbetaling og international dækning for familier.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/bilforsikring-spanien/">Bilforsikring i Spanien</a></h3>
        <p>Spanske nummerplader, <em>seguro obligatorio</em>, import af den danske bil, kørekortet og din skadesattest.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/ansvarsforsikring-spanien/">Familiens ansvarsforsikring i Spanien</a></h3>
        <p>Ansvaret i boligpolicen og dets grænser, summer i millionklassen verden over, hunde, både, husstandsansatte og udlejning.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/dk/kobe-bolig-i-spanien-forsikring/">Købe bolig i Spanien</a></h3>
        <p>Arras, notar og Registro de la Propiedad — og hvad der skal være forsikret, når nøglerne skifter hænder.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="begreber">
  <div class="container narrow article-body">
    <h2 id="begreber">Seks spanske ord, der afgør din police</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Spanske forsikringsbegreber og deres danske betydning</caption>
        <thead>
          <tr><th scope="col">Spansk</th><th scope="col">Dansk</th><th scope="col">Hvorfor det betyder noget</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Condiciones particulares</em></td><td>Policens personlige del</td><td>Her står dine summer og tilvalg. De generelle betingelser gælder kun, hvor de ikke er ændret her.</td></tr>
          <tr><td><em>Continente / contenido</em></td><td>Bygning / indbo</td><td>To summer i samme police. Ejer du en lejlighed, er <em>continente</em> din enhed og det indbyggede.</td></tr>
          <tr><td><em>Franquicia</em></td><td>Selvrisiko</td><td>Kan være et fast beløb eller gælde pr. dækning. Læs den for vand og tyveri særskilt.</td></tr>
          <tr><td><em>Infraseguro</em></td><td>Underforsikring</td><td>Den forholdsmæssige regel: halv sum giver halv erstatning, også ved en lille skade.</td></tr>
          <tr><td><em>Carencia</em></td><td>Karensperiode</td><td>Især i sundhedsforsikring: den periode, hvor visse ydelser endnu ikke er dækket.</td></tr>
          <tr><td><em>Copago</em></td><td>Egenbetaling</td><td>Et beløb pr. konsultation eller behandling. Afgørende, når policen skal bruges til opholdsregistrering.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="aftalen">
  <div class="container narrow article-body">
    <h2 id="aftalen">Fornyelse, opsigelse og skadesanmeldelse</h2>
    <p>Tre praktiske regler i spansk forsikringsret, som danskere oftest bliver overrasket af:</p>
    <ul>
      <li><strong>Policen fornyes automatisk.</strong> De fleste spanske policer løber et år ad gangen og fornyes stiltiende.</li>
      <li><strong>Opsigelse skal ske i god tid.</strong> Som forsikringstager skal du som udgangspunkt give skriftligt varsel mindst en måned før udløbsdatoen. Ellers løber policen et år mere — også selv om du har tegnet en ny et andet sted.</li>
      <li><strong>Skader anmeldes hurtigt.</strong> Loven giver en kort frist, som udgangspunkt syv dage fra du fik kendskab til skaden. Ved tyveri og indbrud kræves normalt en politianmeldelse (<em>denuncia</em>).</li>
    </ul>
    <p>Det er netop den slags frister, der går tabt, når boligen står tom halvdelen af året. Vi holder styr på fornyelsesdatoerne for dig og anmelder skaden på spansk, når den sker.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="regioner">
  <div class="container narrow article-body">
    <h2 id="regioner">Hvor danskerne bor — og hvad det betyder for risikoen</h2>
    <ul>
      <li><strong>Costa del Sol</strong> (Marbella, Estepona, Mijas, Fuengirola, Benalmádena): boliger af høj værdi, mange med pool og have. Kraftige skybrud kan give oversvømmelse i lavtliggende områder og langs flodlejer, og brandrisikoen stiger i bjergene bag kysten.</li>
      <li><strong>Costa Blanca og Alicante-provinsen</strong> (Jávea, Altea, Alfaz del Pi, Torrevieja): udsat for <em>DANA</em> — de voldsomme efterårsregnskyl, der ramte Valencia-regionen hårdt i 2024. Her betyder Consorcio mest, og her skal bygningssummen være rigtig.</li>
      <li><strong>Mallorca</strong>: ejendomme af meget høj værdi, strenge regler for turistudlejning og en boligmasse med ældre natursten og nyere villaer side om side.</li>
      <li><strong>De Kanariske Øer</strong> (Gran Canaria, Tenerife): mange danskere i vinterhalvåret, lange tomme perioder resten af året, og en vulkansk risiko, som Consorcio dækker.</li>
    </ul>
  </div>
</section>`, toPortugal.guide),
  faqTitle: 'Forsikring i Spanien — ofte stillede spørgsmål',
  faq: [
    {
      q: 'Må I formidle forsikring i Spanien?',
      a: '<p>Ja. Vi er registreret i Portugal hos ASF under nr. 425591790/3 og formidler i Spanien i henhold til EU’s frie udveksling af tjenesteydelser. De spanske risici placeres hos selskaber, der tegner i Spanien.</p>',
    },
    {
      q: 'Taler I dansk eller spansk?',
      a: '<p>Vi arbejder på engelsk, skriftligt. Policerne udstedes på spansk, og vi gennemgår dem for dig på engelsk, før du skriver under. Denne side er på dansk, fordi emnet er dansk — vi har ikke dansktalende medarbejdere og intet kontor i Danmark.</p>',
    },
    {
      q: 'Hvad er Consorcio de Compensación de Seguros?',
      a: '<p>Et offentligt spansk organ, der dækker ekstraordinære risici som ekstraordinær oversvømmelse, jordskælv, vulkanudbrud og atypisk cyklonstorm. Dækningen finansieres via et tillæg på ejendomsforsikringer og forudsætter, at der er en gyldig police på ejendommen. Almindelig storm og regn er derimod forsikringsselskabets egen dækning.</p>',
    },
    {
      q: 'Kan jeg bruge min danske forsikring til boligen i Spanien?',
      a: '<p>Som regel ikke. En fast ejendom i Spanien forsikres normalt hos et selskab, der tegner i Spanien, og Consorcio-dækningen følger med den spanske police. Få et skriftligt svar fra dit danske selskab, før du går ud fra, at noget gælder dernede.</p>',
    },
    {
      q: 'Hvordan opsiger jeg en spansk police?',
      a: '<p>Skriftligt og i god tid — som udgangspunkt mindst en måned før udløbsdatoen. Opsiges den for sent, fornyes den for endnu et år. Vi håndterer opsigelsen for dig, når vi flytter en police.</p>',
    },
    {
      q: 'Vi har bolig i både Portugal og Spanien. Kan I samle det?',
      a: '<p>Ja, rådgivningen. Policerne tegnes i hvert land på lokale betingelser, men vi ser dem som én helhed: summer, ansvar, værdigenstande, der flytter mellem boligerne, og de perioder, hvor hver bolig står tom.</p>',
    },
  ],
  related: [
    { url: '/dk/husforsikring-spanien/', label: 'Husforsikring i Spanien' },
    { url: '/dk/sundhedsforsikring-spanien/', label: 'Sundhedsforsikring i Spanien' },
    { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide til Portugal' },
  ],
};
