/**
 * /dk/bilforsikring-spanien/
 *
 * Search intent: "bilforsikring Spanien" / "tage bilen med til Spanien" — a
 * Dane deciding whether to bring the car, register it in Spain, or buy one
 * there.
 *
 * The Danish angle: Denmark's registration tax is the highest in Europe, so
 * the export question (a partial refund may be available from Motorstyrelsen)
 * comes before the Spanish one. Legal points are kept general: deadlines and
 * exemptions depend on the individual case and are for the DGT, a gestor or
 * Motorstyrelsen to confirm.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_MOTOR_PAGE = {
  slug: 'bilforsikring-spanien',
  url: '/dk/bilforsikring-spanien/',
  cluster: 'es-motor',
  title: 'Bilforsikring i Spanien for danskere | Adler & Rochefort',
  description:
    'Bilforsikring i Spanien for danskere: lovpligtig ansvar og kasko, spanske nummerplader, import af den danske bil, kørekortet og din skadesattest.',
  keywords:
    'bilforsikring Spanien, tage bilen med til Spanien, importere bil Spanien, spanske nummerplader, seguro obligatorio coche, dansk kørekort Spanien, skadesattest Spanien, bilforsikring Costa del Sol, bilforsikring Alicante',
  eyebrow: 'Spanien · Bilforsikring',
  h1: 'Bilforsikring i Spanien: nummerplader, dækning og skadeshistorik',
  standfirst:
    'Skal bilen med til Spanien, skal den før eller siden have spanske nummerplader — og forsikringen skal følge med gennem skiftet. Her er, hvad der gælder, fra den lovpligtige ansvarsdel til den værdifulde bil i garagen i Marbella.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Bilforsikring' }],
  pullquote: 'Den danske skadesattest er noget værd i Spanien — men kun hvis den er bestilt, før den danske police ophører.',
  schemaType: 'Article',
  formHeading: 'Forespørgsel om bilforsikring i Spanien',
  formBranch: 'DK · Bil',
  formSubject: 'Bilforsikring i Spanien',
  formCta: 'Send forespørgsel',
  formIntro:
    'Fortæl, hvilken bil det drejer sig om, hvor den er indregistreret i dag, og hvor mange skadefri år du har. Vi svarer skriftligt med, hvad der kan tegnes, og hvad der skal ordnes først.',
  formPlaceholder:
    'For eksempel: Volvo XC90 2022 på danske plader, skal indregistreres i Spanien, 20 år uden skader, bor i Mijas.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="lovpligtig">
  <div class="container narrow article-body">
    <h2 id="lovpligtig">Den lovpligtige del og resten</h2>
    <p>Som i Danmark er ansvarsforsikring på bilen lovpligtig i Spanien (<em>seguro obligatorio</em>). Den dækker skade, du forvolder på andre, op til lovens minimum. Oven på den bygges resten:</p>
    <ul>
      <li><strong>Udvidet ansvar</strong> (<em>responsabilidad civil voluntaria</em>) med højere summer end minimum — et lille tillæg for en stor forskel ved en alvorlig personskade.</li>
      <li><strong>Brand, tyveri og glas</strong> som mellemtrin, ofte kaldet <em>terceros ampliado</em>.</li>
      <li><strong>Kasko</strong> (<em>todo riesgo</em>), med eller uden selvrisiko (<em>franquicia</em>).</li>
      <li><strong>Vejhjælp og erstatningsbil</strong> — værd at kontrollere, hvor langt væk fra bopælen og hvor længe.</li>
    </ul>
    <p>For nyere og mere værdifulde biler er det aftalt værdi, originale reservedele, mærkeværksted og dækning af klassiske eller samlerbiler efter særskilte betingelser, der skal på plads — ikke kun den laveste præmie.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="plader">
  <div class="container narrow article-body">
    <h2 id="plader">Danske plader eller spanske plader</h2>
    <p>Som besøgende kan du som hovedregel køre i Spanien på danske plader i en begrænset periode. Bliver du fast bosat, skal bilen som hovedregel indregistreres i Spanien, og det skal ske inden for en frist. En dansk bilforsikring forudsætter normalt dansk bopæl og dansk indregistrering.</p>
    <p>Rækkefølgen, der undgår huller:</p>
    <ol class="process-steps">
      <li><div><strong>Afklar den danske side først.</strong><span> Ved eksport kan der være ret til godtgørelse af en del af registreringsafgiften. Det skal afklares med Motorstyrelsen, før bilen forlader landet.</span></div></li>
      <li><div><strong>Bestil skadesattesten</strong><span> hos dit danske selskab, mens policen stadig løber — med antal skadefri år og eventuelle skader.</span></div></li>
      <li><div><strong>Indregistrering i Spanien</strong><span> via trafikmyndigheden (<em>DGT</em>), typisk med hjælp fra en <em>gestor</em>: teknisk godkendelse (<em>ITV</em>), registreringsafgift efter CO₂-udslip — med mulig fritagelse ved flytning af bopæl, hvis betingelserne er opfyldt — og spanske plader.</span></div></li>
      <li><div><strong>Spansk police fra den dag, pladerne skifter.</strong><span> Vi sørger for, at den nye police starter, før den gamle ophører.</span></div></li>
    </ol>
    <p>Frister og fritagelser afhænger af den enkelte sag. Vi rådgiver om forsikringen; indregistreringen og afgiften afklares med DGT, en <em>gestor</em> og Motorstyrelsen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="skadesattest">
  <div class="container narrow article-body">
    <h2 id="skadesattest">Din skadesattest og dit kørekort</h2>
    <p>Spanske selskaber har deres egne bonussystemer, og de er ikke forpligtet til at overtage en dansk bonus én til én. Mange selskaber tager dog en udenlandsk skadesattest i betragtning, hvis den er nylig og viser antal skadefri år. Uden den starter du reelt forfra.</p>
    <ul>
      <li><strong>Attesten skal være skriftlig</strong>, helst på engelsk, og vise policens periode, antal skadefri år og eventuelle skader.</li>
      <li><strong>Den må ikke være for gammel.</strong> Mange selskaber accepterer kun en attest for en police, der er ophørt inden for en kortere periode.</li>
      <li><strong>Kørekortet:</strong> et dansk kørekort er gyldigt i Spanien. Bliver du fast bosat, fornyes det efter spanske regler, når det udløber, og det kan ombyttes til et spansk. Familiemedlemmer med kørekort fra et land uden for EU skal være opmærksomme på andre regler og frister.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="koebe">
  <div class="container narrow article-body">
    <h2 id="koebe">Tage bilen med eller købe i Spanien?</h2>
    <p>Et regnestykke, der ikke handler om forsikring alene: den danske registreringsafgift, en mulig godtgørelse ved eksport, den spanske afgift og en eventuel fritagelse, og hvad bilen er værd på det spanske brugtmarked. For mange danskere bliver svaret at sælge i Danmark og købe i Spanien.</p>
    <p>Vælger du at købe i Spanien, skal forsikringen være på plads, før du kører fra forhandleren. Det kan vi ordne med din danske skadesattest i hånden.</p>
  </div>
</section>`, toPortugal.motor),
  faqTitle: 'Bilforsikring i Spanien — spørgsmål',
  faq: [
    {
      q: 'Må jeg køre på danske plader i Spanien?',
      a: '<p>Som besøgende i en begrænset periode som hovedregel ja. Bliver du fast bosat, skal bilen som hovedregel indregistreres i Spanien inden for en frist. Få fristen for din situation bekræftet af DGT eller en gestor.</p>',
    },
    {
      q: 'Kan jeg beholde min danske bilforsikring, når jeg bor i Spanien?',
      a: '<p>Normalt ikke. En dansk bilforsikring forudsætter som regel dansk bopæl og dansk indregistrering. Når bilen får spanske plader, skal den forsikres i Spanien fra samme dag.</p>',
    },
    {
      q: 'Overtager et spansk selskab min danske bonus?',
      a: '<p>Ikke automatisk. Mange selskaber tager en nylig udenlandsk skadesattest i betragtning, men de er ikke forpligtet til at overtage en bestemt bonus. Bestil attesten, mens den danske police løber, så den viser dine skadefri år.</p>',
    },
    {
      q: 'Skal jeg ombytte mit danske kørekort?',
      a: '<p>Et dansk kørekort er gyldigt i Spanien. Bliver du fast bosat, fornyes det efter spanske regler, når det udløber, og det kan ombyttes til et spansk. Kørekort fra lande uden for EU følger andre regler.</p>',
    },
    {
      q: 'Kan I forsikre en klassisk eller værdifuld bil i Spanien?',
      a: '<p>Ja, efter særskilte betingelser: aftalt værdi, begrænset kørsel, krav til opbevaring og værksted. Oplys bilen, dens værdi og hvordan den bruges, så finder vi de betingelser, der passer.</p>',
    },
  ],
  related: [
    { url: '/dk/forsikring-spanien/', label: 'Forsikring i Spanien: overblik' },
    { url: '/dk/ansvarsforsikring-spanien/', label: 'Ansvarsforsikring i Spanien' },
  ],
};
