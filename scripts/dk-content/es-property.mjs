/**
 * /dk/kobe-bolig-i-spanien-forsikring/
 *
 * Search intent: "købe bolig i Spanien" / "købe hus i Spanien forsikring" —
 * a Dane in the middle of a Spanish purchase.
 *
 * The Danish angle: a Danish buyer expects a tilstandsrapport, an
 * elinstallationsrapport and an ejerskifteforsikring. None of them exists in
 * Spain; hidden-defect claims against the seller have a short window. That is
 * the gap this page opens with. Legal and tax points are general and send the
 * reader to their Spanish lawyer (abogado) or tax adviser.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_PROPERTY_PAGE = {
  slug: 'kobe-bolig-i-spanien-forsikring',
  url: '/dk/kobe-bolig-i-spanien-forsikring/',
  cluster: 'es-property',
  title: 'Boligkøb i Spanien: forsikring trin for trin | Adler & Rochefort',
  description:
    'Forsikring ved boligkøb i Spanien: arras, notar og Registro de la Propiedad, bankens forsikringsforslag, genopførelsespris og dækning fra dagen for escritura.',
  keywords:
    'købe bolig i Spanien, købe hus i Spanien forsikring, boligkøb Spanien, arras kontrakt, notar Spanien, Registro de la Propiedad, boliglån Spanien forsikring, ejerskifteforsikring Spanien, feriebolig Spanien køb',
  eyebrow: 'Spanien · Guide',
  h1: 'Købe bolig i Spanien: forsikringen i hvert trin af handlen',
  standfirst:
    'Ved et spansk boligkøb er der ingen tilstandsrapport og ingen ejerskifteforsikring — og banken har som regel en husforsikring klar til underskrift ved notaren. Her er, hvad der gælder hvornår, og hvilke beslutninger der er dine.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Købe bolig i Spanien' }],
  pullquote: 'Banken må kræve, at boligen er forsikret. Den må ikke kræve, at den selv skriver policen.',
  schemaType: 'Article',
  formHeading: 'Forsikring til dit boligkøb i Spanien',
  formBranch: 'DK · Bolig',
  formSubject: 'Boligkøb i Spanien — forsikring',
  formCta: 'Bed om en skriftlig vurdering',
  formIntro:
    'Fortæl, hvor i handlen du er, og hvad det er for en ejendom. Vi vender skriftligt tilbage med, hvad der skal være klar til dagen hos notaren.',
  formPlaceholder:
    'For eksempel: villa i Jávea, arras underskrevet, escritura i januar, lån i spansk bank, møbler og kunst flyttes fra Danmark.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="dansk-hul">
  <div class="container narrow article-body">
    <h2 id="dansk-hul">Det, en dansk køber savner</h2>
    <p>I Danmark er en boligkøber vant til tilstandsrapport, elinstallationsrapport og tilbuddet om en ejerskifteforsikring. Intet af det findes i Spanien. Sælger hæfter for skjulte fejl, men fristen for at gøre det gældende er kort — som udgangspunkt seks måneder fra overtagelsen — og kravet skal rettes mod sælger, ikke mod et forsikringsselskab.</p>
    <p>Det betyder to ting. En uafhængig bygningsgennemgang (<em>perito</em> eller <em>arquitecto técnico</em>) før arras er det nærmeste, du kommer en tilstandsrapport. Og husforsikringen, du tegner fra overtagelsen, dækker fremtidige skader — ikke fejl, der var der i forvejen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="tidslinje">
  <div class="container narrow article-body">
    <h2 id="tidslinje">Hvad der gælder hvornår</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Trinene i et spansk boligkøb og hvad forsikringen skal kunne i hvert trin</caption>
        <thead>
          <tr><th scope="col">Trin</th><th scope="col">Forsikringsspørgsmålet</th><th scope="col">Hvem</th></tr>
        </thead>
        <tbody>
          <tr><td>NIE og <em>nota simple</em> fra Registro de la Propiedad</td><td>Ingen forsikring endnu — men se, om ejendommen ligger i en <em>comunidad</em>, og bed om dens police.</td><td>Din advokat</td></tr>
          <tr><td>Reservation og <em>contrato de arras</em></td><td>Depositum, typisk omkring 10 %. Træder du tilbage, mister du det; træder sælger tilbage, betaler sælger det dobbelte. Ingen forsikring dækker det.</td><td>Dig + advokat</td></tr>
          <tr><td>Lånetilbud fra banken</td><td>Banken angiver, at boligen skal være forsikret — og tilbyder sin egen police, ofte mod en lavere rente.</td><td>Bank + dig</td></tr>
          <tr><td><em>Escritura</em> hos notaren</td><td>Risikoen går over til dig. Husforsikringen skal gælde fra denne dag.</td><td>Dig + os</td></tr>
          <tr><td>Indskrivning i Registro de la Propiedad</td><td>Ingen ændring for forsikringen, men policen bør stå i den registrerede ejers navn.</td><td>Notar / advokat</td></tr>
          <tr><td>Indflytning og møbler fra Danmark</td><td>Indbo og værdigenstande — også under transporten, som er flyttefirmaets eller en særskilt transportforsikrings ansvar.</td><td>Dig + os</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="banken">
  <div class="container narrow article-body">
    <h2 id="banken">Bankens forsikring: dit valg, ikke bankens</h2>
    <p>Spansk lovgivning om boliglån giver banken ret til at kræve, at boligen er forsikret. Banken må også tilbyde en bedre rente, hvis du tegner dens egne produkter — husforsikring, livsforsikring, betalingskort. Men den skal acceptere en tilsvarende husforsikring fra et andet selskab. Vælger du det, kan rabatten bortfalde; det er en afvejning, ikke et forbud.</p>
    <div class="callout">
      <span class="callout-label">Det, vi ser efter</span>
      Er bygningssummen genopførelsesprisen eller lånebeløbet? Er policen tegnet som fritidsbolig, hvis den er det? Dækker den kunst og værdigenstande? Hvilken ansvarssum har den, og gælder den uden for Spanien? Bankens police er ikke dårlig i sig selv — den er valgt, uden at nogen stillede spørgsmålene.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="summen">
  <div class="container narrow article-body">
    <h2 id="summen">Tre tal for samme ejendom</h2>
    <ul>
      <li><strong>Købsprisen</strong> — indeholder grunden, beliggenheden og udsigten over Middelhavet. Ingen af dem brænder.</li>
      <li><strong>Lånebeløbet</strong> — det, banken vil have sikret. Ofte det tal, bankens police bygger på.</li>
      <li><strong>Genopførelsesprisen</strong> — hvad det koster at bygge boligen op igen til dagens priser, inklusive nedrivning og rådgivning. Det er det eneste tal, bygningssummen skal bygge på.</li>
    </ul>
    <p>Er summen for lav, nedsættes erstatningen forholdsmæssigt — og det gælder også, når det er Consorcio, der betaler for en naturkatastrofe. Ligger boligen i en <em>comunidad</em>, dækker ejerforeningens police bygningens struktur og fællesarealerne; du forsikrer din enhed indvendigt, dit indbo og dit ansvar.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="skat">
  <div class="container narrow article-body">
    <h2 id="skat">Ikke-bosatte ejere: en bemærkning om skat</h2>
    <p>Er du ikke skattemæssigt bosat i Spanien, har en spansk ejendom sine egne årlige skatteforpligtelser, og for visse ejere kræves en skatterepræsentant i Spanien. Det er et spørgsmål til en spansk skatterådgiver, ikke til os. Vi nævner det, fordi det hører til samme tjekliste som forsikringen — og fordi den, der glemmer det ene, ofte har glemt det andet.</p>
  </div>
</section>`, toPortugal.property),
  faqTitle: 'Boligkøb i Spanien — spørgsmål',
  faq: [
    {
      q: 'Findes der ejerskifteforsikring i Spanien?',
      a: '<p>Nej, ikke i den danske form. Sælger hæfter for skjulte fejl, men fristen er kort — som udgangspunkt seks måneder fra overtagelsen. En uafhængig bygningsgennemgang før arras er det nærmeste, du kommer en tilstandsrapport.</p>',
    },
    {
      q: 'Skal jeg tage bankens husforsikring?',
      a: '<p>Nej. Banken må kræve, at boligen er forsikret, og må tilbyde en bedre rente, hvis du tager dens produkter, men den skal acceptere en tilsvarende police fra et andet selskab. Vi læser bankens tilbud igennem med dig og sammenligner.</p>',
    },
    {
      q: 'Hvornår skal forsikringen gælde fra?',
      a: '<p>Fra dagen for escritura hos notaren, hvor risikoen går over til dig. Har du lån, vil banken normalt se policen før underskriften.</p>',
    },
    {
      q: 'Hvilken sum skal boligen forsikres for?',
      a: '<p>Genopførelsesprisen — ikke købsprisen og ikke lånebeløbet. Er summen for lav, nedsættes erstatningen forholdsmæssigt, også når Consorcio betaler for en naturkatastrofe.</p>',
    },
    {
      q: 'Hvad er arras?',
      a: '<p>Den private købsaftale før escritura, med et depositum på typisk omkring 10 %. Træder køber tilbage, mister køber depositummet; træder sælger tilbage, betaler sælger det dobbelte. Det er et juridisk spørgsmål for din advokat, ikke et forsikringsspørgsmål.</p>',
    },
  ],
  related: [
    { url: '/dk/husforsikring-spanien/', label: 'Husforsikring i Spanien' },
    { url: '/dk/forsikring-spanien/', label: 'Forsikring i Spanien: overblik' },
  ],
};
