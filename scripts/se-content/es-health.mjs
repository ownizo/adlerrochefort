/**
 * /se/sjukvardsforsakring-spanien/ (cluster key es-health)
 *
 * Search intent: "sjukvårdsförsäkring Spanien" / "sjukförsäkring Spanien
 * pensionär" — a Swede moving to, or wintering in, Spain.
 *
 * The Swedish hooks: folkbokföring decides access to Swedish care, and moving
 * out ends it; Försäkringskassan issues the S1 for pensioners whose pension
 * comes only from Sweden; the EU card (europeiska sjukförsäkringskortet) is for
 * temporary stays, not residence; and a non-working EU citizen registering in
 * Spain must show comprehensive health cover. The non-lucrative visa matters
 * only for a non-EU family member. Requirements are stated as generally
 * applied and never as a guarantee for an individual application.
 *
 * Form: shared short form, SE · Sjukvård preselected. No health questions.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_HEALTH_PAGE = {
  slug: 'sjukvardsforsakring-spanien',
  url: '/se/sjukvardsforsakring-spanien/',
  cluster: 'es-health',
  title: 'Privat sjukvårdsförsäkring i Spanien | Adler & Rochefort',
  description:
    'Sjukvård i Spanien för svenskar: offentlig vård, S1 för pensionärer, EU-kortet, kraven vid registrering som bosatt och internationella planer för familjer.',
  keywords:
    'sjukvårdsförsäkring Spanien, sjukförsäkring Spanien, privat sjukvård Spanien, S1 Spanien pensionär, EU-kort Spanien, seguro médico privado, internationell sjukvårdsförsäkring familj, svensk pensionär Spanien sjukvård',
  eyebrow: 'Spanien · Sjukvård',
  h1: 'Sjukvårdsförsäkring i Spanien för svenska familjer',
  standfirst:
    'När folkbokföringen flyttar från Sverige flyttar rätten till svensk vård med den. Vad som ersätter den i Spanien beror på om du arbetar, är pensionär eller lever på egna medel — och på hur familjen rör sig mellan länderna.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Försäkring i Spanien', url: '/se/forsakring-spanien/' },
    { name: 'Sjukvårdsförsäkring' },
  ],
  pullquote: 'EU-kortet är för semestern. Den som bor i Spanien behöver en lösning som är byggd för att bo där.',
  schemaType: 'Article',
  formHeading: 'Begär en genomgång av sjukvårdsskyddet i Spanien',
  formBranch: 'SE · Sjukvård',
  formSubject: 'Sjukvårdsförsäkring i Spanien',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Berätta vilka som ska omfattas, var ni bor och hur ni delar året mellan länderna. Skriv inga medicinska uppgifter här — hälsodeklarationen görs direkt med försäkringsbolaget.',
  formPlaceholder:
    'Till exempel: två vuxna (58 och 55) som flyttar till Mijas i januari, vi behåller en bostad i Sverige och vill ha vård i båda länderna.',
  sections: `
<section class="section plain" aria-labelledby="utgangslaget">
  <div class="container narrow article-body">
    <h2 id="utgangslaget">Utgångsläget: vad som händer med den svenska vården</h2>
    <p>Rätten till svensk offentlig vård på samma villkor som i dag hänger i hög grad ihop med att du är bosatt och folkbokförd i Sverige. När du flyttar till Spanien och avregistreras förändras den rätten, och vilken rätt du får i stället beror på varifrån din inkomst kommer. Det finns i praktiken tre situationer:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Svenskars tillgång till vård i Spanien beroende på situation</caption>
        <thead>
          <tr><th scope="col">Situation</th><th scope="col">Offentlig vård i Spanien</th><th scope="col">Privat försäkring</th></tr>
        </thead>
        <tbody>
          <tr><td>Arbetar i Spanien (anställd eller egenföretagare)</td><td>Ja, via den spanska socialförsäkringen</td><td>Frivillig — för väntetider, fritt val och vård utomlands</td></tr>
          <tr><td>Pensionär med pension enbart från Sverige</td><td>Normalt via intyg S1 från Försäkringskassan</td><td>Frivillig, men vanlig som komplement</td></tr>
          <tr><td>Lever på egna medel, arbetar inte i Spanien</td><td>Normalt inte automatiskt</td><td>I praktiken nödvändig — också för registrering som bosatt</td></tr>
        </tbody>
      </table>
    </div>
    <p class="legal-note">Tabellen beskriver huvudreglerna i EU-samordningen. Din egen rätt beror på din historik och bör bekräftas med Försäkringskassan och de spanska myndigheterna.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="offentlig-vard">
  <div class="container narrow article-body">
    <h2 id="offentlig-vard">Den offentliga vården i Spanien</h2>
    <p>Spanien har ett offentligt sjukvårdssystem av god kvalitet, men det drivs av regionerna: <em>Servicio Andaluz de Salud</em> på Costa del Sol, <em>Conselleria de Sanitat</em> i Valencia-regionen, <em>IB-Salut</em> på Mallorca och <em>Servicio Canario de la Salud</em> på Kanarieöarna. Du får en vårdcentral och en läkare via ditt <em>empadronamiento</em> — registreringen i kommunen där du bor.</p>
    <p>Det du som svensk kan behöva vänja dig vid: vården sker på spanska, köerna till specialister och planerade ingrepp kan vara långa, och i turistområden är trycket högt under vintern. Det är skälen till att många som har rätt till offentlig vård ändå väljer en privat försäkring — för tillgången, inte för att den offentliga vården saknas.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="s1-eukort">
  <div class="container narrow article-body">
    <h2 id="s1-eukort">S1 och EU-kortet — två olika saker</h2>
    <h3>Intyg S1 för pensionärer</h3>
    <p>Har du pension enbart från Sverige och flyttar till Spanien kan Försäkringskassan normalt utfärda ett intyg S1. Det registreras hos den spanska socialförsäkringen (<em>INSS</em>) och ger dig tillgång till offentlig vård i Spanien på samma villkor som spanska pensionärer — med Sverige som betalare. Det är den vanligaste vägen för svenska pensionärer som bosätter sig i Spanien.</p>
    <h3>Det europeiska sjukförsäkringskortet</h3>
    <p>EU-kortet gäller för nödvändig vård under <strong>tillfällig vistelse</strong>. Det är inte avsett för den som har flyttat till Spanien, och det ersätter varken planerad vård, hemtransport eller privat vård. Många svenskar som tillbringar vintern i Spanien utan att ha flyttat använder kortet tillsammans med en reseförsäkring — men den som blir bosatt behöver en annan lösning.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="registrering">
  <div class="container narrow article-body">
    <h2 id="registrering">Registrering som bosatt — och kravet på sjukvårdsskydd</h2>
    <p>Som EU-medborgare behöver du inget visum, men den som ska bo i Spanien längre än tre månader registrerar sig i <em>Registro Central de Extranjeros</em> och får ett registreringsbevis med sitt NIE. Den som inte arbetar i Spanien måste då normalt visa att hen har tillräckliga medel och ett <strong>heltäckande sjukvårdsskydd</strong> — antingen genom S1 eller genom en privat sjukvårdsförsäkring.</p>
    <p>Hur kravet på den privata försäkringen tillämpas skiljer sig mellan kontor, men de villkor som ofta efterfrågas är att försäkringen är tecknad hos ett bolag som är verksamt i Spanien, omfattar motsvarande det offentliga systemet, saknar egenavgifter (<em>copagos</em>) och kvalificeringstider (<em>carencias</em>). Vi ordnar försäkringar med den omfattningen och lämnar intyg på villkoren; bedömningen i det enskilda ärendet görs av myndigheten.</p>
    <div class="callout">
      <span class="callout-label">Familjemedlem utanför EU</span>
      Har du en make, maka eller partner som inte är EU-medborgare kan andra regler gälla — och den som söker det icke-förvärvsmässiga uppehållstillståndet (<em>visado de residencia no lucrativa</em>) ska enligt konsulaten normalt visa en privat sjukvårdsförsäkring utan egenavgifter och utan kvalificeringstider. Kontrollera kraven med konsulatet eller ett juridiskt ombud.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="internationella-planer">
  <div class="container narrow article-body">
    <h2 id="internationella-planer">Spansk plan eller internationell plan?</h2>
    <p>Det spanska utbudet av privata sjukvårdsförsäkringar (<em>seguro médico privado</em>) är stort och väl utbyggt, med nätverk av kliniker och specialister i hela landet. För en familj som bor i Spanien och vill ha snabb tillgång till vård där är en spansk plan ofta rätt val.</p>
    <p>En <strong>internationell plan</strong> är byggd för en annan livssituation: familjer som delar året mellan Spanien, Sverige och andra länder, som vill kunna söka vård i Sverige eller vid ett visst sjukhus utomlands, eller som har barn som studerar i ett tredje land. Den har normalt högre årstak, fritt val av sjukhus i flera länder och skydd som följer med över gränserna.</p>
    <ul>
      <li><strong>Geografiskt område</strong>: Europa, hela världen utom USA, eller hela världen.</li>
      <li><strong>Vård i Sverige</strong>: kontrollera uttryckligen att den ingår, och på vilka villkor.</li>
      <li><strong>Öppenvård, tandvård och förlossning</strong>: ofta moduler som väljs till.</li>
      <li><strong>Hemtransport och evakuering</strong>: viktigt för den som bor på öarna.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="befintliga-besvar">
  <div class="container narrow article-body">
    <h2 id="befintliga-besvar">Hälsodeklaration och befintliga besvär</h2>
    <p>Privata sjukvårdsförsäkringar prövas individuellt. Bolaget ställer frågor om hälsan när försäkringen tecknas och kan undanta besvär som fanns före avtalet, ta ut en tilläggspremie eller avstå från att erbjuda försäkring. Vissa bolag har också övre åldersgränser för att teckna en ny försäkring.</p>
    <p>Det betyder två saker i praktiken. Teckna försäkringen medan hälsan är god — gärna innan flytten. Och svara fullständigt på hälsodeklarationen; ett ofullständigt svar kan leda till att försäkringen inte gäller när den behövs. Vi ställer inga medicinska frågor i våra formulär — deklarationen görs direkt med försäkringsbolaget.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="portugal-syskon">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Bor familjen delvis i Portugal? → <a href="/se/sjukvardsforsakring-portugal/">Internationell sjukvårdsförsäkring i Portugal</a>. En internationell plan kan täcka båda länderna.
    </div>
  </div>
</section>`,
  faqTitle: 'Sjukvårdsförsäkring i Spanien — frågor',
  faq: [
    {
      q: 'Behåller jag rätten till svensk vård om jag flyttar till Spanien?',
      a: '<p>Inte på samma sätt som tidigare. Rätten till svensk offentlig vård hänger i hög grad ihop med bosättning i Sverige. Pensionärer med intyg S1 har vissa rättigheter kvar, men detaljerna beror på din situation — bekräfta dem med Försäkringskassan innan du flyttar.</p>',
    },
    {
      q: 'Räcker EU-kortet om jag bor i Spanien på vintern?',
      a: '<p>Om du fortfarande är bosatt i Sverige och vistas tillfälligt i Spanien täcker EU-kortet nödvändig vård, men inte planerad vård eller hemtransport. Blir du bosatt i Spanien är kortet inte längre rätt lösning.</p>',
    },
    {
      q: 'Vad är ett intyg S1?',
      a: '<p>Ett EU-intyg som visar att ett annat land, här Sverige, står för din sjukvård. För pensionärer med pension enbart från Sverige utfärdas det normalt av Försäkringskassan och registreras sedan hos den spanska socialförsäkringen.</p>',
    },
    {
      q: 'Kräver Spanien privat sjukvårdsförsäkring för att jag ska få bo där?',
      a: '<p>Om du är EU-medborgare och inte arbetar i Spanien måste du normalt visa ett heltäckande sjukvårdsskydd när du registrerar dig som bosatt — antingen via S1 eller via en privat försäkring. Hur kravet tillämpas varierar mellan kontor; vi ordnar försäkringar med den omfattning som brukar efterfrågas och lämnar intyg på villkoren.</p>',
    },
    {
      q: 'Kan vi få vård i Sverige med en privat försäkring?',
      a: '<p>Med en internationell plan är det ofta möjligt, beroende på valt geografiskt område och villkor. Spanska planer omfattar normalt vård i Spanien och akut vård utomlands. Vi kontrollerar det uttryckligen i villkoren för den plan vi föreslår.</p>',
    },
    {
      q: 'Täcks sjukdomar jag redan har?',
      a: '<p>Det avgörs av försäkringsbolaget vid hälsodeklarationen. Befintliga besvär kan undantas, omfattas mot tilläggspremie eller omfattas efter en viss tid. Därför ställer vi inga medicinska frågor i formuläret — den bedömningen görs direkt med bolaget.</p>',
    },
  ],
  related: [
    { url: '/se/sjukvardsforsakring-portugal/', label: 'Internationell sjukvårdsförsäkring i Portugal' },
    { url: '/se/forsakring-spanien/', label: 'Försäkring i Spanien — översikt' },
  ],
};
