/**
 * /se/kopa-hus-i-spanien-forsakring/ (cluster key es-property)
 *
 * Search intent: "köpa hus i Spanien" / "köpa bostad Spanien försäkring" — a
 * Swede buying on the Costa del Sol, Costa Blanca, Mallorca or the Canaries.
 *
 * Swedish hooks: in Sweden the mäklare runs the whole process and the deal is
 * binding at the köpekontrakt; in Spain the steps are arras, notary and
 * registration, each with its own consequence. Bostadsrätt vs comunidad again.
 * The bank-insurance point is Spanish law: the bank may require home cover
 * but must accept an equivalent policy from elsewhere. Sum insured = rebuild
 * cost, not purchase price or tasación. Tax representation is a general note
 * only.
 *
 * Form: shared short form, SE · Hem preselected.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_PROPERTY_PAGE = {
  slug: 'kopa-hus-i-spanien-forsakring',
  url: '/se/kopa-hus-i-spanien-forsakring/',
  cluster: 'es-property',
  title: 'Köpa hus i Spanien: försäkring steg för steg | Adler & Rochefort',
  description:
    'Köpa bostad i Spanien: arras, notarie och Registro de la Propiedad, bankens försäkringskrav, återuppbyggnadskostnad och skydd från dagen för escritura.',
  keywords:
    'köpa hus i Spanien, köpa bostad Spanien försäkring, contrato de arras, escritura notarie Spanien, Registro de la Propiedad, bolån Spanien hemförsäkring, återuppbyggnadskostnad Spanien, köpa lägenhet Costa del Sol',
  eyebrow: 'Spanien · Bostadsköp',
  h1: 'Köpa hus i Spanien — försäkringen steg för steg',
  standfirst:
    'I Sverige leder mäklaren dig genom hela affären. I Spanien har köpet flera steg med egna följder — och försäkringen ska vara på plats vid ett av dem, inte veckor efteråt.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Försäkring i Spanien', url: '/se/forsakring-spanien/' },
    { name: 'Köpa hus' },
  ],
  pullquote: 'Risken går över till dig när du skriver under hos notarien. Försäkringen ska börja gälla samma dag.',
  schemaType: 'Article',
  formHeading: 'Försäkring till ditt bostadsköp i Spanien',
  formBranch: 'SE · Hem',
  formSubject: 'Bostadsköp i Spanien — försäkring',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Berätta var bostaden ligger, när du planerar att skriva under och om du finansierar köpet med lån. Du får ett skriftligt förslag på försäkringsbelopp och omfattning i god tid före <em>escritura</em>.',
  formPlaceholder:
    'Till exempel: vi köper en villa i Altea, escritura i maj, lån hos en spansk bank. Vi vill veta vilket belopp som är rätt och om vi måste ta bankens försäkring.',
  sections: `
<section class="section plain" aria-labelledby="stegen">
  <div class="container narrow article-body">
    <h2 id="stegen">Köpets steg — och var försäkringen kommer in</h2>
    <ol class="process-steps">
      <li><div><strong>NIE och spanskt bankkonto.</strong><span> Ett utlänningsnummer (<em>NIE</em>) behövs för köpet, för lån och för att teckna försäkring.</span></div></li>
      <li><div><strong>Reservation och kontroller.</strong><span> Ett utdrag ur fastighetsregistret (<em>nota simple</em>) visar ägare, inteckningar och belastningar. Din advokat kontrollerar också bygglov, skulder till <em>comunidad</em> och kommunala skatter.</span></div></li>
      <li><div><strong>Arras-kontraktet.</strong><span> Ett förhandskontrakt med handpenning, ofta omkring tio procent. I den vanligaste formen förlorar köparen handpenningen om hen drar sig ur, och säljaren betalar tillbaka det dubbla om hen gör det.</span></div></li>
      <li><div><strong>Escritura hos notarien.</strong><span> Köpet fullbordas genom ett offentligt köpebrev inför notarie. Här betalas köpeskillingen, nycklarna lämnas över — och risken för bostaden går över till dig.</span></div></li>
      <li><div><strong>Registrering.</strong><span> Köpebrevet registreras i <em>Registro de la Propiedad</em>, vilket ger skydd mot tredje man.</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">Tidpunkten</span>
      Försäkringen ska börja gälla <strong>på dagen för escritura</strong>. Säljarens försäkring upphör normalt när hen inte längre äger bostaden, och vid lån kräver banken ofta bevis på försäkring vid undertecknandet. Vi förbereder försäkringen under arras-perioden, så att den kan aktiveras samma dag.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="banken">
  <div class="container narrow article-body">
    <h2 id="banken">Bolån: du behöver inte ta bankens försäkring</h2>
    <p>En spansk bank som lämnar bolån kan kräva att bostaden är försäkrad under lånetiden, ofta med banken som förmånstagare. Men enligt den spanska lagen om bostadskrediter kan banken <strong>inte tvinga dig att teckna försäkringen hos banken själv</strong> eller hos ett bolag den väljer. Du har rätt att visa en annan försäkring med likvärdigt skydd.</p>
    <p>Bankerna får däremot erbjuda en lägre ränta om du köper deras försäkringar — så kallade <em>bonificaciones</em>. Det kan vara ett rimligt val, men det bör jämföras med helheten: räntesänkningen mot premien och, framför allt, mot omfattningen. Bankens standardförsäkring är skriven för att skydda lånet, inte för att täcka konst, samlingar eller ansvar i miljonbelopp.</p>
    <p>Kontrollera också om låneavtalet innehåller en livförsäkring kopplad till lånet; samma princip gäller där.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="beloppet">
  <div class="container narrow article-body">
    <h2 id="beloppet">Försäkringsbeloppet: återuppbyggnad, inte köpeskilling</h2>
    <p>Byggnadens försäkringsbelopp (<em>continente</em>) ska motsvara vad det kostar att bygga upp den igen — inte vad du betalade. På Costa del Sol och Mallorca är köpeskillingen ofta långt högre än återuppbyggnadskostnaden, eftersom den innehåller tomt, utsikt och läge. I äldre stenhus och <em>fincas</em> kan det vara omvänt.</p>
    <p>Bankens värdering (<em>tasación</em>) anger ofta ett särskilt värde för försäkringsändamål. Det är ett minimum för banken, inte nödvändigtvis rätt belopp för dig. För bostäder med högt värde gör försäkringsbolaget i stället en besiktning och fastställer återuppbyggnadskostnaden; accepteras de rekommenderade beloppen avstår bolaget från nedsättning för underförsäkring.</p>
    <p>Kom ihåg att Consorcio de Compensación de Seguros, som ersätter översvämning och jordskalv, räknar på samma belopp. Ett för lågt belopp slår igenom även där.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="comunidad-kop">
  <div class="container narrow article-body">
    <h2 id="comunidad-kop">Comunidad de propietarios — kontrollera innan du köper</h2>
    <p>Köper du en lägenhet eller ett radhus i en <em>urbanización</em> blir du medlem i en <em>comunidad de propietarios</em>. Den liknar inte en svensk bostadsrättsförening: du äger din bostad direkt, och <em>comunidad</em> förvaltar och försäkrar de gemensamma delarna.</p>
    <ul>
      <li>Be om ett intyg om att säljaren inte har skulder till <em>comunidad</em>.</li>
      <li>Be om en kopia av <em>comunidad</em>-försäkringen och kontrollera belopp, betalning och vad den omfattar.</li>
      <li>Läs protokollen från de senaste årsstämmorna: beslutade renoveringar och tvister syns där.</li>
      <li>Kontrollera stadgarna om du planerar att hyra ut — vissa <em>comunidades</em> begränsar turistuthyrning.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="skatt-representant">
  <div class="container narrow article-body">
    <h2 id="skatt-representant">Skatt och representation — en allmän anmärkning</h2>
    <p>Som ägare till en bostad i Spanien har du årliga skatter och deklarationer, även om du inte bor där: kommunal fastighetsskatt och, för den som inte är bosatt i Spanien, en deklaration för den bostad du äger. Beroende på din situation kan det också krävas en skatterepresentant i Spanien. Reglerna beror på var du är bosatt och ändras över tid; tala med en skatterådgivare eller <em>gestoría</em> om just din situation.</p>
    <p class="legal-note">Den här sidan ger en allmän beskrivning av hur ett bostadsköp i Spanien brukar gå till och är inte juridisk eller skattemässig rådgivning. Anlita en oberoende advokat för köpet.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="portugal-syskon">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Funderar du också på Portugal? → <a href="/se/kopa-hus-i-portugal-forsakring/">Köpa hus i Portugal: försäkringen steg för steg</a>.
    </div>
  </div>
</section>`,
  faqTitle: 'Köpa hus i Spanien — frågor om försäkring',
  faq: [
    {
      q: 'När ska hemförsäkringen börja gälla?',
      a: '<p>På dagen för <em>escritura</em>, när du skriver under köpebrevet hos notarien. Då går risken över till dig och säljarens försäkring upphör normalt. Vi förbereder försäkringen i förväg så att den kan aktiveras samma dag.</p>',
    },
    {
      q: 'Måste jag ta bankens hemförsäkring när jag tar bolån?',
      a: '<p>Nej. Banken kan kräva att bostaden är försäkrad, men du har rätt att välja en annan försäkring med likvärdigt skydd. Banken får erbjuda en lägre ränta om du tar dess produkter; jämför helheten innan du bestämmer dig.</p>',
    },
    {
      q: 'Ska jag försäkra bostaden till köpeskillingen?',
      a: '<p>Nej. Byggnaden ska försäkras till återuppbyggnadskostnaden. Köpeskillingen innehåller tomt och läge, som inte förstörs vid en brand. För bostäder med högt värde fastställs beloppet vid en besiktning.</p>',
    },
    {
      q: 'Vad är ett arras-kontrakt?',
      a: '<p>Ett förhandskontrakt med handpenning som binder parterna fram till köpet. I den vanligaste formen förlorar köparen handpenningen om hen drar sig ur, och säljaren betalar tillbaka det dubbla om hen gör det. Låt din advokat granska det innan du skriver under.</p>',
    },
    {
      q: 'Täcker comunidad-försäkringen min lägenhet?',
      a: '<p>Den täcker främst de gemensamma delarna och byggnadens stomme. Lösöret, ofta ytskikten inne i lägenheten och ditt eget ansvar behöver en egen försäkring.</p>',
    },
  ],
  related: [
    { url: '/se/kopa-hus-i-portugal-forsakring/', label: 'Köpa hus i Portugal: försäkringen steg för steg' },
    { url: '/se/hemforsakring-spanien/', label: 'Hemförsäkring i Spanien' },
    { url: '/se/forsakring-spanien/', label: 'Försäkring i Spanien — översikt' },
  ],
};
