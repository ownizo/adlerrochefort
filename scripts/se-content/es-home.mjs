/**
 * /se/hemforsakring-spanien/ (cluster key es-home)
 *
 * Search intent: "hemförsäkring Spanien" / "villaförsäkring Spanien" — a
 * Swedish owner of a villa on the Costa del Sol, an apartment in Torrevieja,
 * a finca on Mallorca or a winter home on Gran Canaria.
 *
 * Written for Spain, not translated from the Portuguese page. The organising
 * ideas are Spanish: the Consorcio de Compensación de Seguros (extraordinary
 * risks through a surcharge — the opposite of Portugal, where earthquake is an
 * optional extra), continente/contenido and the comunidad de propietarios,
 * empty periods for owners who winter elsewhere, the DANA flood exposure, and
 * regional tourist-letting licences. High-value homes get the same
 * insurer-neutral, price-free private-client framework as the Portuguese page,
 * condensed, with the full version linked.
 *
 * Form: the market's shared short form, product preselected — no Portuguese
 * wizard (NIF, postcode) that would block a Spanish resident.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_HOME_PAGE = {
  slug: 'hemforsakring-spanien',
  url: '/se/hemforsakring-spanien/',
  cluster: 'es-home',
  title: 'Hemförsäkring i Spanien för värdefulla hem | Adler & Rochefort',
  description:
    'Hemförsäkring i Spanien: Consorcio vid översvämning och jordskalv, comunidad-försäkringen, tomma perioder, uthyrning och private client-villkor.',
  keywords:
    'hemförsäkring Spanien, villaförsäkring Spanien, seguro de hogar, Consorcio de Compensación de Seguros, comunidad de propietarios försäkring, fritidshus Spanien försäkring, hemförsäkring Marbella, hemförsäkring Torrevieja, hemförsäkring Mallorca',
  eyebrow: 'Spanien · Värdefulla hem',
  h1: 'Hemförsäkring i Spanien för hem med högt värde',
  standfirst:
    'En <em>seguro de hogar</em> ser bekant ut för en svensk — tills man ser vad Consorcio ersätter, var <em>comunidad</em>-försäkringen slutar och vad som händer när huset står tomt i fyra månader.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Försäkring i Spanien', url: '/se/forsakring-spanien/' },
    { name: 'Hemförsäkring' },
  ],
  pullquote: 'Consorcio betalar efter samma försäkringsbelopp som din försäkring. Är beloppet för lågt, är det för lågt även där.',
  schemaType: 'Article',
  formHeading: 'Begär en genomgång av din bostadsförsäkring i Spanien',
  formBranch: 'SE · Hem',
  formSubject: 'Hemförsäkring i Spanien',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Berätta var bostaden ligger, hur den används och vad den innehåller — eller skicka din nuvarande <em>póliza</em>. Du får ett skriftligt svar om belopp, glapp och alternativ.',
  formPlaceholder:
    'Till exempel: villa i Nueva Andalucía från 2004, pool och gästhus, vi bor där oktober–april, konst och klockor som bör förtecknas.',
  sections: `
<section class="section plain" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">Consorcio de Compensación de Seguros — det svenskar inte känner till</h2>
    <p>I Sverige ingår naturskador i villaförsäkringen, och i Portugal är jordskalvsskydd ett tillval som många saknar. Spanien har löst frågan på ett tredje sätt: en statlig institution, <strong>Consorcio de Compensación de Seguros</strong>, ersätter skador från extraordinära händelser. Den finansieras genom en avgift (<em>recargo</em>) som tas ut i varje bostadsförsäkring, och du har skyddet så länge din försäkring är giltig och betald.</p>
    <p>Consorcio omfattar bland annat:</p>
    <ul>
      <li>Extraordinär översvämning, även från hav och vattendrag.</li>
      <li>Jordskalv och tsunami.</li>
      <li>Vulkanutbrott — aktuellt på Kanarieöarna, som La Palma visade 2021.</li>
      <li>Atypisk cyklonstorm och vind över en viss styrka.</li>
      <li>Terrorism, uppror och vissa former av upplopp.</li>
    </ul>
    <p>Tre saker är viktiga att förstå. För det första ersätter Consorcio efter <strong>din försäkrings belopp</strong> — är byggnaden underförsäkrad får du samma nedsättning där. För det andra har Consorcio egna regler och egen skadehantering; anmälan görs direkt dit, och vi hjälper till med den. För det tredje är inte allt oväder extraordinärt: storm under gränsvärdet, vanliga skyfall och brand hanteras av ditt eget försäkringsbolag enligt dess villkor, ofta med egna begränsningar.</p>
    <div class="callout">
      <span class="callout-label">Efter DANA</span>
      Ovädret i Valencia-regionen hösten 2024 gav Consorcio ett av de största skadeutfallen i dess historia. Den vanligaste frågan efteråt var inte om Consorcio betalade — utan om försäkringsbeloppen och förteckningen över lösöre stämde. Det är där förberedelsen gör skillnad.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="continente-contenido">
  <div class="container narrow article-body">
    <h2 id="continente-contenido">Continente, contenido och comunidad</h2>
    <p>Den spanska bostadsförsäkringen byggs av två belopp: <em>continente</em> (byggnaden och dess fasta delar) och <em>contenido</em> (lösöret). Äger du en villa försäkrar du hela byggnaden. Äger du en lägenhet i en <em>comunidad de propietarios</em> ser fördelningen normalt ut så här:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Fördelning mellan comunidad-försäkringen och ägarens egen försäkring i Spanien</caption>
        <thead>
          <tr><th scope="col">Del</th><th scope="col">Normalt comunidad</th><th scope="col">Normalt egen försäkring</th></tr>
        </thead>
        <tbody>
          <tr><td>Stomme, tak, fasad, trapphus</td><td>Ja</td><td>—</td></tr>
          <tr><td>Gemensam pool, trädgård, garage</td><td>Ja</td><td>—</td></tr>
          <tr><td>Ytskikt, kök och badrum inne i lägenheten</td><td>Varierar</td><td>Ofta</td></tr>
          <tr><td>Lösöre, konst, smycken</td><td>Nej</td><td>Ja</td></tr>
          <tr><td>Vattenskada från din lägenhet till grannen</td><td>Sällan</td><td>Ja, via ansvaret</td></tr>
          <tr><td>Ditt ansvar som privatperson</td><td>Nej</td><td>Ja</td></tr>
        </tbody>
      </table>
    </div>
    <p>Be administratören (<em>administrador de fincas</em>) om en kopia av <em>comunidad</em>-försäkringen. Kontrollera byggnadens försäkringsbelopp, om försäkringen är betald och om den omfattar ytskikten i lägenheterna. I äldre <em>urbanizaciones</em> på Costa Blanca och Costa del Sol ser vi ibland belopp som inte har justerats på många år.</p>
    <p>Gränsfallen mellan <em>continente</em> och <em>contenido</em> är desamma som överallt: luftvärmepump, solpaneler, markis och pergola, murar, staket och en privat pool. Vi skriver in dem med värde innan försäkringen tecknas.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ramverket-es">
  <div class="container narrow article-body">
    <h2 id="ramverket-es">Hem med högt värde: private client-villkoren</h2>
    <p>För villor och <em>fincas</em> med högt värde förmedlar vi samma typ av private client-villkor i Spanien som i Portugal. De skiljer sig från en vanlig <em>seguro de hogar</em> på de punkter där en stor skada faktiskt avgörs. I korthet, uppdelat på fem områden:</p>
    <div class="feature-grid">
      <div class="feature-card">
        <span class="fc-tag">Huset</span>
        <h3>Besiktning och garanterad återuppbyggnad</h3>
        <p>Återuppbyggnadskostnaden fastställs vid besiktning utan kostnad för dig. Accepteras de rekommenderade beloppen avstår bolaget från underförsäkringsregeln, och vid totalskada byggs huset upp igen även om kostnaden överstiger beloppet. Likvärdigt ersättningsboende, trädgård, murar, pool och annex med egna belopp.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Lösöret</span>
        <h3>Allrisk i hela världen</h3>
        <p>Personliga tillhörigheter mot alla risker — hemma, på resa och i andra bostäder — utan de delbelopp som urholkar ett standardskydd, med gästers tillhörigheter och nyförvärv inkluderade.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Värdeföremål</span>
        <h3>Konst, smycken och samlingar</h3>
        <p>Avtalat värde mot värdering, ingen självrisk, ersättning för värdeminskning efter konservering och skydd mot undervärdering inom en fastställd marginal.</p>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Ansvar</span>
        <h3>Familjeansvar i miljonbelopp</h3>
        <p>Privat ansvar för hela hushållet med belopp på flera miljoner euro, giltigt i hela världen, med försvarskostnaderna utöver beloppet. Se <a href="/se/ansvarsforsakring-spanien/">ansvarsförsäkring i Spanien</a>.</p>
      </div>
      <div class="feature-card wide">
        <span class="fc-tag">Familjen</span>
        <h3>Stöd vid hot, rån och kidnappning</h3>
        <p>Säkerhetskonsulter, tillfällig flytt, juridiskt stöd och krisstöd efter rån i hemmet, bilkapning, hot, förföljelse eller nätmobbning.</p>
      </div>
    </div>
    <p>Hela ramverket, punkt för punkt, finns på vår sida om <a href="/se/hemforsakring-portugal/#ramverket">hemförsäkring i Portugal</a>; referensvillkoren är desamma.</p>
    <p class="legal-note">Detta är referensvillkoren i de private client-försäkringar för bostäder med högt värde som vi förmedlar. Omfattning, belopp, självrisker och undantag varierar mellan försäkringsbolag och risker, och bekräftas först i de allmänna, särskilda och individuella villkoren i den försäkring som utfärdas.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="tomma-perioder">
  <div class="container narrow article-body">
    <h2 id="tomma-perioder">Vinterbostad, sommarbostad — och huset som står tomt</h2>
    <p>Många svenska ägare bor i Spanien under vinterhalvåret och i Sverige på sommaren, eller tvärtom. För försäkringsbolaget är en bostad som inte bebos permanent (<em>vivienda secundaria</em>) en annan risk, och den ska anmälas som sådan.</p>
    <ul>
      <li><strong>Stöldskyddet</strong> kan begränsas efter ett visst antal dagars frånvaro i följd, och kraven på lås, galler och larm blir strängare.</li>
      <li><strong>Vattenskador i tomma hus</strong> är den vanligaste stora skadan. Vissa villkor kräver att vattnet stängs av under frånvaro; läckage som pågått länge kan falla under undantag för långsam påverkan.</li>
      <li><strong>Tillsyn</strong> av huset är inget krav i sig, men ofta skillnaden mellan en skada som upptäcks efter en vecka och en som upptäcks efter tre månader.</li>
      <li><strong>Svensk hemförsäkring</strong> gäller inte för bostaden i Spanien. Reseskyddet i den svenska försäkringen kan täcka dina tillhörigheter under vistelsen, men inte huset.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="regional-risk">
  <div class="container narrow article-body">
    <h2 id="regional-risk">Regionala risker</h2>
    <h3>Översvämning och skyfall</h3>
    <p>Valencia-regionen, Murcia och delar av Andalusien drabbas av <em>DANA</em> — kraftiga höstoväder där stora regnmängder faller på kort tid. Extraordinär översvämning ersätts av Consorcio; vatten som tränger in genom tak och terrass vid kraftigt regn hanteras däremot av ditt bolag, och där skiljer sig villkoren mycket. Källare, souterrängvåningar och garage i låglänta områden förtjänar en särskild fråga.</p>
    <h3>Brand</h3>
    <p>Skogsbrand är ingen extraordinär risk i Consorcios mening; den täcks av det vanliga brandskyddet i din försäkring. Hus i skogsnära lägen på Costa del Sol, i Alicantes inland, på Mallorca och på Kanarieöarna bör ha ett korrekt försäkringsbelopp och en röjd zon runt huset — vissa kommuner kräver det.</p>
    <h3>Kanarieöarna</h3>
    <p>Vulkanisk risk hanteras av Consorcio. Salt luft och vind sliter på fasader, fönster och installationer, och skador som beror på slitage omfattas inte av någon försäkring — underhållet är en del av skyddet.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="uthyrning">
  <div class="container narrow article-body">
    <h2 id="uthyrning">Uthyrning till turister</h2>
    <p>Att hyra ut bostaden kortsiktigt (<em>vivienda de uso turístico</em>) kräver i de flesta regioner en registrering eller licens, och reglerna skiljer sig kraftigt mellan Andalusien, Valencia-regionen, Balearerna och Kanarieöarna — och ofta även mellan kommuner och <em>comunidades</em>. Balearerna och flera kommuner har strikta begränsningar.</p>
    <p>För försäkringen betyder uthyrning två saker. Bolaget måste veta om den, eftersom en vanlig bostadsförsäkring utgår från privat användning. Och ansvaret mot gästerna behöver ett belopp som motsvarar risken — en gäst som skadar sig vid poolen är den vanligaste stora ansvarsskadan vid uthyrning. Uthyrning utan licens där licens krävs kan dessutom försvåra en skadereglering.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="checklista-es">
  <div class="container narrow article-body">
    <h2 id="checklista-es">Checklista för din spanska bostadsförsäkring</h2>
    <ol class="process-steps">
      <li><div><strong>Continente</strong><span> motsvarar återuppbyggnadskostnaden, inte köpeskillingen eller bankens värdering.</span></div></li>
      <li><div><strong>Contenido</strong><span> är räknat rum för rum, med värdeföremål förtecknade separat.</span></div></li>
      <li><div><strong>Comunidad-försäkringen</strong><span> är kontrollerad: belopp, betalning och vad den omfattar inne i lägenheten.</span></div></li>
      <li><div><strong>Användningen</strong><span> är anmäld som den faktiskt är, med frånvaroperioder och eventuell uthyrning.</span></div></li>
      <li><div><strong>Ansvarsbeloppet</strong><span> är känt och motsvarar hushållets tillgångar.</span></div></li>
      <li><div><strong>Vatten</strong><span>: du vet hur läckage genom tak och terrass och långvarigt läckage hanteras.</span></div></li>
      <li><div><strong>Förfallodagen</strong><span> är känd, så att en uppsägning eller ett byte kan göras i tid.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="portugal-syskon">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Äger du också en bostad i Portugal? → <a href="/se/hemforsakring-portugal/">Hemförsäkring i Portugal för bostäder med högt värde</a>. Där är jordskalvsskydd ett tillval, inte något som följer med automatiskt.
    </div>
  </div>
</section>`,
  faqTitle: 'Hemförsäkring i Spanien — frågor',
  faq: [
    {
      q: 'Måste jag teckna särskilt skydd för översvämning och jordskalv i Spanien?',
      a: '<p>Nej. Extraordinära risker som översvämning, jordskalv och vulkanutbrott ersätts av Consorcio de Compensación de Seguros genom en avgift i din bostadsförsäkring. Förutsättningen är att försäkringen är giltig och betald, och ersättningen utgår från försäkringens belopp.</p>',
    },
    {
      q: 'Comunidad har en försäkring. Behöver jag en egen?',
      a: '<p>Normalt ja. <em>Comunidad</em>-försäkringen täcker främst stomme och gemensamma delar. Lösöret, ofta ytskikten inne i lägenheten och ditt eget ansvar — till exempel för en vattenskada hos grannen — ligger på dig.</p>',
    },
    {
      q: 'Ingår ansvarsskydd i en spansk hemförsäkring?',
      a: '<p>Ofta, som <em>responsabilidad civil familiar</em>. Beloppet varierar mellan bolag och varianter och är i standardförsäkringar ofta betydligt lägre än vad ett hushåll med stora tillgångar behöver. I private client-villkoren ingår familjeansvar med belopp på flera miljoner euro, i hela världen.</p>',
    },
    {
      q: 'Vi bor i huset från oktober till april. Vad ska vi anmäla?',
      a: '<p>Att bostaden inte bebos permanent och hur långa frånvaroperioderna är. Bolaget anpassar villkoren efter det, och flera försäkringar begränsar stöldskyddet vid längre frånvaro. Det som inte är anmält är det som ifrågasätts vid en skada.</p>',
    },
    {
      q: 'Banken kräver hemförsäkring för vårt lån. Måste vi ta bankens?',
      a: '<p>Nej. Banken kan kräva att bostaden är försäkrad, men du har rätt att välja en annan försäkring med likvärdigt skydd. Banken kan däremot erbjuda en lägre ränta om du tar dess produkter; det är värt att jämföra helheten. Se <a href="/se/kopa-hus-i-spanien-forsakring/">köpa hus i Spanien</a>.</p>',
    },
    {
      q: 'Hyr vi ut huset kan vi fortfarande ha en vanlig hemförsäkring?',
      a: '<p>Uthyrningen måste anmälas till bolaget, och för regelbunden turistuthyrning behövs normalt en variant som är skriven för det, med ansvar mot gäster. Kontrollera också att bostaden har den registrering eller licens som regionen kräver.</p>',
    },
  ],
  related: [
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
    { url: '/se/ansvarsforsakring-spanien/', label: 'Ansvarsförsäkring för familjen i Spanien' },
    { url: '/se/forsakring-spanien/', label: 'Försäkring i Spanien — översikt' },
  ],
};
