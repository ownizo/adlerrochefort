/**
 * /se/forsakring-spanien/ — the Spain landing page of the Swedish cluster
 * (cluster key es-guide).
 *
 * Search intent: "försäkring Spanien" / "svensk i Spanien försäkring" — a Swede
 * who owns, or is about to own, a home on the Costa del Sol, the Costa Blanca,
 * Mallorca or the Canaries and wants to understand how the Spanish market is
 * put together before buying anything.
 *
 * The Swedish angle: Spain is where Swedes have owned second homes for two
 * generations — Fuengirola and Marbella, Torrevieja and Alicante, Mallorca,
 * Gran Canaria and Tenerife — and many still carry a Swedish mental model of
 * insurance there. The Spanish seguro de hogar is actually closer to the
 * Swedish bundle than the Portuguese product is, but it has one institution a
 * Swede has never met (the Consorcio de Compensación de Seguros) and a
 * building/contents split driven by the comunidad de propietarios. Those two
 * ideas organise the page.
 *
 * Firm positioning: national and Iberian private-client intermediary, offices
 * in Lisbon and Lagos, Spain under the EU freedom to provide services. The
 * working language remains English (LANG_POLICY_SE).
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_GUIDE_PAGE = {
  slug: 'forsakring-spanien',
  url: '/se/forsakring-spanien/',
  cluster: 'es-guide',
  title: 'Försäkring i Spanien för svenskar | Adler & Rochefort',
  description:
    'Hem, sjukvård, bil och familjeansvar i Spanien — Costa del Sol, Costa Blanca, Mallorca och Kanarieöarna. Skriftlig rådgivning, en rådgivare hela vägen.',
  ogTitle: 'Försäkring i Spanien — för svenska hushåll med bostad där',
  keywords:
    'försäkring Spanien, svenskar i Spanien försäkring, hemförsäkring Spanien, sjukvårdsförsäkring Spanien, bilförsäkring Spanien, Consorcio de Compensación de Seguros, försäkring Marbella, försäkring Torrevieja, försäkring Mallorca, försäkring Kanarieöarna',
  eyebrow: 'Spanien',
  h1: 'Försäkring i Spanien för svenska hushåll',
  standfirst:
    'Från Fuengirola och Marbella till Torrevieja, Mallorca och Gran Canaria: hur den spanska marknaden är uppbyggd, var den skiljer sig från både den svenska och den portugisiska — och hur vi arbetar för dig där.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Försäkring i Spanien' }],
  pullquote:
    'I Spanien finns en statlig försäkringsinstitution i varje bostadsförsäkring. De flesta svenskar vet inte att den finns förrän vattnet står i vardagsrummet.',
  schemaType: 'Article',
  formHeading: 'Berätta om ditt hushåll i Spanien',
  formBranch: '',
  formSubject: 'Allmän förfrågan — Spanien',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Beskriv bostäderna, bilarna och vilka som ingår i hushållet — eller skicka dina nuvarande spanska försäkringar. Du får ett skriftligt svar om var skyddet slutar och vad som bör ordnas.',
  formPlaceholder:
    'Till exempel: vi har en villa i Marbella som vi bor i halva året, en lägenhet i Torrevieja som hyrs ut och en bil på spanska skyltar.',
  sections: `
<section class="section plain" aria-labelledby="marknaden">
  <div class="container narrow article-body">
    <h2 id="marknaden">Den spanska marknaden på en minut</h2>
    <p>Spanien är det land utanför Norden där flest svenskar äger bostad. Många har haft sitt hus eller sin lägenhet i årtionden, och försäkringen har ofta tecknats en gång — via banken, via mäklaren eller via grannen — och sedan förnyats automatiskt. Det är där de flesta glapp vi hittar har sitt ursprung: inte i dåliga produkter, utan i försäkringar som ingen har läst om sedan köpet.</p>
    <p>Fyra saker skiljer den spanska marknaden från det du är van vid:</p>
    <ul>
      <li><strong>Consorcio de Compensación de Seguros.</strong> En statlig institution som ersätter skador från naturkatastrofer och andra extraordinära händelser — översvämning, jordskalv, vulkanutbrott, extrem storm — genom en avgift i varje bostadsförsäkring. Den finns varken i Sverige eller i Portugal.</li>
      <li><strong>Comunidad de propietarios.</strong> Samfälligheten som försäkrar byggnaden och de gemensamma delarna — men inte ditt lösöre och ofta inte ytskikten i din lägenhet.</li>
      <li><strong>Seguro de hogar är ett bredare paket än i Portugal.</strong> Ansvar för familjen (<em>responsabilidad civil familiar</em>), assistans och ibland rättsskydd ingår ofta — men med belopp och villkor som behöver kontrolleras.</li>
      <li><strong>Regionerna betyder mycket.</strong> Regler för turistuthyrning, riskbilden för översvämning och brand och till och med sjukvården skiljer sig mellan Andalusien, Valencia-regionen, Balearerna och Kanarieöarna.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="fyra-forsakringar">
  <div class="container narrow">
    <h2 id="fyra-forsakringar">Fyra försäkringar i detalj</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/hemforsakring-spanien/">Hemförsäkring i Spanien för värdefulla hem</a></h3>
        <p>Consorcio, <em>comunidad</em>-försäkringen, tomma perioder, översvämningsrisk efter DANA, turistuthyrning och private client-villkor för hem med högt värde.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/sjukvardsforsakring-spanien/">Sjukvårdsförsäkring i Spanien</a></h3>
        <p>Offentlig vård och folkbokföring, S1 för pensionärer, EU-kortet, kraven vid registrering som bosatt och internationella planer för familjer.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/bilforsakring-spanien/">Bilförsäkring i Spanien</a></h3>
        <p>Obligatorisk trafikförsäkring, att föra in en svensk bil, spanska skyltar och ITV, ditt svenska körkort och din skadefria tid.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/ansvarsforsakring-spanien/">Ansvarsförsäkring för familjen i Spanien</a></h3>
        <p>Beloppen i hemförsäkringen, familjeansvar i miljonbelopp, pool, hushållsanställda, båt, hund och uthyrning.</p>
      </li>
    </ul>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/kopa-hus-i-spanien-forsakring/">Köpa hus i Spanien: försäkringen steg för steg</a></h3>
        <p><em>Arras</em>, notarie och <em>Registro de la Propiedad</em>, bankens försäkringskrav och varför skyddet ska gälla från dagen för <em>escritura</em>.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="svensk-spansk">
  <div class="container narrow article-body">
    <h2 id="svensk-spansk">Den svenska hemförsäkringen jämfört med den spanska</h2>
    <p>En svensk hemförsäkring innehåller lösöre, ansvarsskydd, rättsskydd, reseskydd och överfallsskydd i ett paket. Den spanska <em>seguro de hogar</em> ligger närmare det paketet än den portugisiska motsvarigheten — men inte hela vägen.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Den svenska hemförsäkringens delar och hur de normalt hanteras i Spanien</caption>
        <thead>
          <tr><th scope="col">I den svenska hemförsäkringen</th><th scope="col">Normalt i Spanien</th></tr>
        </thead>
        <tbody>
          <tr><td>Lösöre</td><td>Ingår som <em>contenido</em></td></tr>
          <tr><td>Byggnad (villaförsäkring)</td><td>Ingår som <em>continente</em>; i lägenheter delvis via <em>comunidad</em></td></tr>
          <tr><td>Ansvarsskydd</td><td>Ofta inkluderat som <em>responsabilidad civil familiar</em> — kontrollera beloppet</td></tr>
          <tr><td>Rättsskydd</td><td>Ibland inkluderat (<em>defensa jurídica</em>), ofta med låga belopp</td></tr>
          <tr><td>Reseskydd</td><td>Egen produkt</td></tr>
          <tr><td>Överfallsskydd</td><td>Ingen självklar motsvarighet; olycksfallsförsäkring eller private client-villkor</td></tr>
          <tr><td>Naturskador</td><td>Via Consorcio de Compensación de Seguros, finansierat genom en avgift i försäkringen</td></tr>
        </tbody>
      </table>
    </div>
    <p>Slutsatsen är inte att den spanska försäkringen är sämre. Den är uppbyggd på ett annat sätt, och de skillnader som betyder mest — beloppen för ansvar, gränsen mot <em>comunidad</em> och vad Consorcio faktiskt ersätter — syns bara i villkoren.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ordlista-es">
  <div class="container narrow article-body">
    <h2 id="ordlista-es">Sex spanska ord som återkommer i varje försäkringsbrev</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Grundläggande försäkringsbegrepp på svenska och spanska</caption>
        <thead>
          <tr><th scope="col">Svenska</th><th scope="col">Spanska</th><th scope="col">Att tänka på</th></tr>
        </thead>
        <tbody>
          <tr><td>Försäkringsbrev</td><td><em>póliza</em></td><td>Allmänna och särskilda villkor: <em>condiciones generales</em> och <em>particulares</em>.</td></tr>
          <tr><td>Premie</td><td><em>prima</em></td><td>Normalt årsvis och med automatisk förnyelse.</td></tr>
          <tr><td>Försäkringsbelopp</td><td><em>suma asegurada</em></td><td>Uppdelat på <em>continente</em> (byggnad) och <em>contenido</em> (lösöre).</td></tr>
          <tr><td>Självrisk</td><td><em>franquicia</em></td><td>Kan skilja sig mellan olika moment i samma försäkring.</td></tr>
          <tr><td>Skada</td><td><em>siniestro</em></td><td>Anmäls inom kort tid; lagens utgångspunkt är sju dagar från att du fått kännedom om skadan.</td></tr>
          <tr><td>Underförsäkring</td><td><em>infraseguro</em></td><td>Ersättningen kan sättas ned i proportion till hur mycket beloppet är för lågt.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <span class="callout-label">Förnyelse och uppsägning</span>
      Spanska försäkringar förnyas normalt automatiskt varje år. Vill du byta bolag ska uppsägningen som regel göras skriftligt minst en månad före förfallodagen. Det är lätt att missa när man inte bor i bostaden året runt — vi håller reda på datumen.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="regionerna">
  <div class="container narrow article-body">
    <h2 id="regionerna">Där svenskar bor i Spanien — och vad det betyder för försäkringen</h2>
    <h3>Costa del Sol — Marbella, Fuengirola, Estepona, Nerja</h3>
    <p>Villor med pool och trädgård, ofta i sluttande terräng och i <em>urbanizaciones</em> med gemensamma anläggningar. Här väger återuppbyggnadskostnaden, de yttre anläggningarna och ansvaret mot gäster och anställda tyngst. Kraftiga skyfall förekommer också här, och brand i skogsnära områden i inlandet.</p>
    <h3>Costa Blanca — Torrevieja, Alicante, Altea, Jávea</h3>
    <p>Många lägenheter och radhus i stora <em>comunidades</em>, ofta med långa perioder utan boende. Gränsen mot <em>comunidad</em>-försäkringen och villkoren för tomma perioder är det viktigaste — liksom översvämningsrisken i Valencia-regionen, som DANA-ovädret hösten 2024 gjorde smärtsamt tydlig.</p>
    <h3>Mallorca och Balearerna</h3>
    <p>Högre fastighetsvärden, äldre stenhus och <em>fincas</em> på landsbygden med egna brunnar, murar och annex. Reglerna för turistuthyrning är bland de striktaste i landet, och en bostad som hyrs ut utan rätt licens kan skapa problem även med försäkringen.</p>
    <h3>Kanarieöarna — Gran Canaria, Tenerife</h3>
    <p>Ett eget skattesystem (IGIC i stället för moms), ett eget regelverk för bilimport och vulkanisk risk, som hanteras av Consorcio. Många svenskar bor här under vintern, vilket gör frågan om frånvaroperioder central.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sa-arbetar-vi-es">
  <div class="container narrow article-body">
    <h2 id="sa-arbetar-vi-es">Hur vi arbetar i Spanien</h2>
    <p>Adler &amp; Rochefort är en försäkringsförmedlare för privatpersoner och familjer med betydande tillgångar, med kontor i Lissabon och Lagos. Vi är registrerade hos den portugisiska tillsynsmyndigheten ASF (nr 425591790/3) och arbetar i Spanien med stöd av EU:s frihet att tillhandahålla tjänster — samma registrering, samma ansvar och samma rådgivare som för familjens bostad i Portugal.</p>
    <ul>
      <li><strong>Spanska försäkringsbolag.</strong> Riskerna placeras hos bolag som är verksamma i Spanien och har kapacitet för den aktuella risken, med spansk skadehantering och spanska hantverkare.</li>
      <li><strong>Försäkringsbrev på spanska.</strong> Det är lagens huvudregel. Vi förklarar villkoren skriftligt på engelska — belopp, självrisker, undantag och frister — innan du skriver under.</li>
      <li><strong>En rådgivare för hela hushållet.</strong> Har du bostäder i både Portugal och Spanien gör vi en genomgång av helheten, så att skydden passar ihop i stället för att överlappa eller lämna glapp.</li>
      <li><strong>Skadehantering.</strong> Anmälan, kontakt med bolaget och med Consorcio när det är aktuellt, bevakning av frister.</li>
    </ul>
    <p class="legal-note">Sidan beskriver hur den spanska marknaden normalt fungerar och är inte juridisk eller skattemässig rådgivning. Vilket skydd som gäller beror på försäkringsbolag, vald variant och villkoren i den enskilda försäkringen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="portugal-ocksa">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Har du även en bostad i Portugal? Läs vår <a href="/se/forsakringsguide-portugal/">försäkringsguide för Portugal</a> — där fungerar bostadsförsäkringen på ett annat sätt, bland annat när det gäller jordskalv och ansvar.
    </div>
  </div>
</section>`,
  faqTitle: 'Försäkring i Spanien — svenskars frågor',
  faq: [
    {
      q: 'Kan min svenska hemförsäkring täcka bostaden i Spanien?',
      a: '<p>Normalt inte. En svensk hemförsäkring kan ha ett reseskydd som gäller när du vistas i Spanien, men själva bostaden där och lösöret i den försäkras med en spansk bostadsförsäkring. Det är också den som ger tillgång till Consorcio de Compensación de Seguros vid naturkatastrofer.</p>',
    },
    {
      q: 'Vad är Consorcio de Compensación de Seguros?',
      a: '<p>En statlig spansk institution som ersätter skador från extraordinära händelser — bland annat översvämning, jordskalv, vulkanutbrott, extrem storm och terrorism. Den finansieras genom en avgift som tas ut i bostadsförsäkringar och andra sakförsäkringar. Du har skyddet genom att ha en giltig försäkring; det behöver inte tecknas separat.</p>',
    },
    {
      q: 'Arbetar ni med spanska försäkringsbolag?',
      a: '<p>Ja. Vi arbetar i Spanien med stöd av EU:s frihet att tillhandahålla tjänster och placerar riskerna hos försäkringsbolag som är verksamma på den spanska marknaden. Försäkringsbreven utfärdas på spanska; vi förklarar dem skriftligt på engelska.</p>',
    },
    {
      q: 'Talar ni svenska?',
      a: '<p>Nej. Sidan är på svenska eftersom ämnet gäller svenskar, men arbetet sker på engelska och skriftligt — från offert via villkor till skadeanmälan.</p>',
    },
    {
      q: 'Kan ni hjälpa oss med bostäder i både Portugal och Spanien?',
      a: '<p>Ja, det är en vanlig situation bland våra kunder. Vi gör en genomgång av hela hushållet och ser till att skydden i de två länderna passar ihop — med samma rådgivare för båda.</p>',
    },
    {
      q: 'Hur säger jag upp en spansk försäkring?',
      a: '<p>Som regel skriftligt och minst en månad före förfallodagen; annars förnyas den automatiskt ett år till. Villkoren i ditt försäkringsbrev anger exakt hur. Vid byte ser vi till att den nya försäkringen börjar gälla samma dag som den gamla upphör.</p>',
    },
  ],
  related: [
    { url: '/se/hemforsakring-spanien/', label: 'Hemförsäkring i Spanien' },
    { url: '/se/kopa-hus-i-spanien-forsakring/', label: 'Köpa hus i Spanien: försäkringen steg för steg' },
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
  ],
};
