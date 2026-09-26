/**
 * /se/ — the Swedish market homepage, which is also the cluster hub.
 *
 * Search intent: "försäkring i Portugal" — a Swede who lives here, is moving
 * here, or owns a second home here and wants to know how the market works.
 *
 * The angle that makes this page Swedish rather than translated: the Swedish
 * hemförsäkring is one of Europe's most bundled products — contents, ansvar,
 * rättsskydd, reseskydd and överfallsskydd in a single policy — and the
 * Portuguese multirriscos habitação unbundles almost all of it. A Swede who
 * assumes the bundle is intact has four separate gaps and no idea they exist.
 * That is the organising idea of the entire cluster, and it belongs on the hub.
 *
 * Positioning (aligned with the PT/EN/DE hubs): a national and Iberian
 * private-client intermediary for households with significant assets —
 * offices in Lisbon and Lagos, clients across Portugal and Spain. The page
 * never describes the firm as a Lagos/Algarve broker.
 */
export const HUB_PAGE = {
  slug: 'se',
  url: '/se/',
  cluster: 'hub',
  isHub: true,
  title: 'Private client-försäkring i Portugal & Spanien | Adler & Rochefort',
  description:
    'Värdefulla hem, konst och samlingar, familjeansvar och internationell sjukvård i Portugal och Spanien. Skriftlig rådgivning. Kontor i Lissabon och Lagos.',
  ogTitle: 'Försäkring för stora privata förmögenheter — Portugal och Spanien',
  keywords:
    'försäkring Portugal, private client försäkring, hemförsäkring värdefull bostad Portugal, konstförsäkring Portugal, ansvarsförsäkring familj, internationell sjukvårdsförsäkring, försäkring Spanien, svenskar i Portugal försäkring',
  eyebrow: 'Private clients · Portugal och Spanien',
  h1: 'Försäkring för<br><em>stora privata förmögenheter.</em>',
  standfirst:
    'Bostäder, konst och samlingar, ansvar och familjens skydd — i Portugal och Spanien. Individuell riskbedömning, skriftlig rådgivning och en och samma rådgivare, från första kontakt till skadereglering.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [{ name: 'Startsida', url: '/se/' }],
  pullquote:
    'Ett värdefullt hem behöver villkor som är skrivna för det — inte en standardprodukt med ett högre belopp.',
  schemaType: 'WebPage',
  formHeading: 'Berätta om din situation',
  formBranch: '',
  formSubject: 'Allmän förfrågan (SE)',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Beskriv vad som ska skyddas, eller skicka oss dina nuvarande försäkringar. Du får ett skriftligt svar om var skyddet slutar och vad som bör ordnas — utan förpliktelse.',
  formPlaceholder:
    'Till exempel: vi flyttar till Cascais i mars, har en villa i Comporta med konst och en bil på svenska skyltar, och en lägenhet i Marbella.',
  sections: `
<section class="section plain" aria-labelledby="vad-vi-forsakrar">
  <div class="container narrow article-body">
    <h2 id="vad-vi-forsakrar">Vad hushållet behöver skydda</h2>
    <p>En genomgång av allt hushållet äger och överallt där det bor — i Portugal, i Spanien och däremellan. Där en risk kräver individuell prövning placerar vi den hos försäkringsbolag med kapacitet för private client-risker; där en välbyggd standardförsäkring räcker säger vi det, skriftligt.</p>
    <div class="feature-grid">
      <div class="feature-card">
        <span class="fc-tag">Bostäder</span>
        <h3>Värdefulla hem</h3>
        <p>Återuppbyggnadskostnaden fastställd vid besiktning, ingen proportionell nedsättning, garanterad återuppbyggnad vid totalskada och likvärdigt ersättningsboende.</p>
        <a class="fc-link" href="/se/hemforsakring-portugal/">Hemförsäkring</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Värdeföremål</span>
        <h3>Konst, smycken och samlingar</h3>
        <p>Avtalat värde för förtecknade föremål, allrisk i hela världen, ingen självrisk på värdeföremål och ersättning för värdeminskning efter konservering.</p>
        <a class="fc-link" href="/se/hemforsakring-portugal/#ramverket">Värdeföremål</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Ansvar</span>
        <h3>Ansvar för hela familjen</h3>
        <p>Privat ansvar med belopp i miljoner euro, giltigt i hela världen, med försvarskostnaderna betalda utöver försäkringsbeloppet.</p>
        <a class="fc-link" href="/se/ansvarsforsakring-portugal/">Ansvarsförsäkring</a>
      </div>
      <div class="feature-card">
        <span class="fc-tag">Sjukvård</span>
        <h3>Internationell sjukvård</h3>
        <p>Privat sjukvårdsförsäkring för familjer som lever i flera länder: fritt val av sjukhus, höga årstak och skydd som följer med över gränserna.</p>
        <a class="fc-link" href="/se/sjukvardsforsakring-portugal/">Sjukvårdsförsäkring</a>
      </div>
      <div class="feature-card wide">
        <span class="fc-tag">Bilar</span>
        <h3>Bilar, även samlarbilar</h3>
        <p>Från vardagsbilen till samlingen i garaget: rätt omfattning, avtalat värde där det behövs och en plan för övergången från svenska till portugisiska skyltar.</p>
        <a class="fc-link" href="/se/bilforsakring-portugal/">Bilförsäkring</a>
      </div>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="paketet">
  <div class="container narrow article-body">
    <h2 id="paketet">Den svenska hemförsäkringen är ett paket. Här är det fyra produkter.</h2>
    <p>En svensk hemförsäkring innehåller normalt fem saker samtidigt: skydd för lösöret, <strong>ansvarsskydd</strong>, <strong>rättsskydd</strong>, <strong>reseskydd</strong> och <strong>överfallsskydd</strong>. Man tecknar en försäkring och får alla fem. Det är så vanligt i Sverige att nästan ingen tänker på det som ett paket — det är bara vad en hemförsäkring <em>är</em>.</p>
    <p>Den portugisiska motsvarigheten, <em>multirriscos habitação</em>, är byggd på ett annat sätt. Den täcker byggnaden och lösöret väl, men de fyra andra delarna behandlas separat:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Den svenska hemförsäkringens delar och hur de hanteras i Portugal</caption>
        <thead>
          <tr><th scope="col">I den svenska hemförsäkringen</th><th scope="col">I Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Lösöret</td><td>Ingår i <em>multirriscos habitação</em> som <em>recheio</em></td></tr>
          <tr><td>Ansvarsskydd</td><td>Ofta begränsat till skador på grannar i huset, eller helt utanför — beror på bolag och variant</td></tr>
          <tr><td>Rättsskydd</td><td>Normalt ett tillval (<em>proteção jurídica</em>), inte standard</td></tr>
          <tr><td>Reseskydd</td><td>Egen produkt; ingår inte i bostadsförsäkringen</td></tr>
          <tr><td>Överfallsskydd</td><td>Finns inte som självklar del; hanteras via olycksfallsförsäkring om alls</td></tr>
          <tr><td>Självrisk, ett belopp</td><td>Egen självrisk per moment, ibland i både belopp och procent</td></tr>
        </tbody>
      </table>
    </div>
    <p>Det här är inte en sämre marknad — den är annorlunda uppdelad. Men den som tecknar en portugisisk bostadsförsäkring och antar att paketet följer med har fyra glapp och vet inte om något av dem. Det är den vanligaste saken vi rättar till hos svenska kunder. För hushåll med betydande tillgångar finns private client-villkor där ansvar i miljonbelopp och stöd till familjen vid hot och överfall ingår — men de måste väljas medvetet.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ordlista">
  <div class="container narrow article-body">
    <h2 id="ordlista">Sex ord som sparar mest tid</h2>
    <p>Försäkringsbrevet kommer på portugisiska — så säger lagen. Dessa sex ord återkommer i varje dokument:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Grundläggande försäkringsbegrepp på svenska och portugisiska</caption>
        <thead>
          <tr><th scope="col">Svenska</th><th scope="col">Portugisiska</th><th scope="col">Att tänka på</th></tr>
        </thead>
        <tbody>
          <tr><td>Premie</td><td><em>prémio</em></td><td>Normalt årsvis; delbetalning kostar ofta extra.</td></tr>
          <tr><td>Försäkringsbelopp</td><td><em>capital seguro</em></td><td>Den siffra som avgör mest vid skada.</td></tr>
          <tr><td>Självrisk</td><td><em>franquia</em></td><td>Anges ofta i både belopp och procent; det sämre alternativet gäller.</td></tr>
          <tr><td>Undantag</td><td><em>exclusões</em></td><td>Här bor försäkringens verkliga innehåll.</td></tr>
          <tr><td>Skada</td><td><em>sinistro</em></td><td>Anmälningstiden är kort och räknas från skadedagen.</td></tr>
          <tr><td>Allmänna villkor</td><td><em>condições gerais</em></td><td>Grunddokumentet; <em>condições particulares</em> ändrar det.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <span class="callout-label">En praktisk regel</span>
      Underförsäkring (<em>regra proporcional</em>) tillämpas konsekvent i Portugal: är försäkringsbeloppet 40 % för lågt kan ersättningen sättas ned i samma proportion — även vid en delskada. Därför pratar vi om återuppbyggnadskostnad, inte om vad du betalade för bostaden.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="forsakringar">
  <div class="container narrow">
    <h2 id="forsakringar">Fyra försäkringar i detalj</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/hemforsakring-portugal/">Hemförsäkring för värdefulla bostäder</a></h3>
        <p>Villkoren för hem med högt värde, besiktning och återuppbyggnadskostnad, konst och samlingar, <em>condomínio</em>, vattenskador, jordskalvsrisk och fritidshus.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/sjukvardsforsakring-portugal/">Internationell sjukvårdsförsäkring</a></h3>
        <p>Privat vård för familjen i Portugal, Spanien och Sverige, SNS parallellt, kvalificeringstider, hälsoprövning och befintliga besvär.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/bilforsakring-portugal/">Bilförsäkring</a></h3>
        <p>Trafik, halv och hel översatt till portugisiska moduler, import och ISV, samlarbilar, svenskt körkort och din skadefria tid.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/ansvarsforsakring-portugal/">Ansvarsförsäkring för familjen</a></h3>
        <p>Privat ansvar i miljonbelopp, gäster, hushållsanställda, pool och båt — och varför yrkesansvar är en egen försäkring.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="guider">
  <div class="container narrow">
    <h2 id="guider">Guider för tre vanliga situationer</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/flytta-till-portugal-forsakring/">Flytta till Portugal</a></h3>
        <p>Ordningen: vad som ska ordnas före utflyttningen, vad som kräver NIF och var glappen uppstår.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/kopa-hus-i-portugal-forsakring/">Köpa hus eller lägenhet</a></h3>
        <p>Vad banken kan kräva vid bolån, hur återuppbyggnadskostnaden räknas och varför försäkringen börjar på dagen för <em>escritura</em>.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/forsakringsguide-portugal/">Försäkringsguide för Portugal</a></h3>
        <p>Marknadens uppbyggnad, försäkringsbrevets delar, skadeanmälan, förnyelse och uppsägning — och frågorna att ställa varje förmedlare.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="fritidshus">
  <div class="container narrow article-body">
    <h2 id="fritidshus">Flera bostäder och huset som står tomt</h2>
    <p>Många av våra svenska kunder har mer än en bostad — ett hus i Portugal, en lägenhet i Spanien, kvar ett hem i Sverige — och bor i var och en delar av året. För ett försäkringsbolag är det en helt annan risk än en permanentbostad, och den måste anmälas som sådan.</p>
    <p>Det som faktiskt får betydelse: stöldskyddet kan begränsas efter ett visst antal dagars frånvaro i följd, kraven på lås och larm blir hårdare, och vissa villkor kräver att huvudkranen är avstängd under frånvaro. Hyr du ut till turister (<em>alojamento local</em>) är det näringsverksamhet, och en vanlig bostadsförsäkring omfattar den inte.</p>
    <p>Det finns ingen anledning att göra en hemlighet av hur bostaden används. Anmäld frånvaro är en fråga om villkor; oanmäld frånvaro är en fråga om ersättningen. Med private client-villkor kan flera bostäder i Portugal och Spanien samlas under en och samma försäkring, med samma omfattning överallt.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="sa-arbetar-vi">
  <div class="container narrow article-body">
    <h2 id="sa-arbetar-vi">Vilka vi är och hur vi arbetar</h2>
    <p>Adler &amp; Rochefort är en försäkringsförmedlare för privatpersoner och familjer med betydande tillgångar, med kontor i Lissabon och Lagos och kunder i hela Portugal och i Spanien. Vi är registrerade hos den portugisiska tillsynsmyndigheten ASF (nr 425591790/3) och arbetar i Spanien med stöd av EU:s frihet att tillhandahålla tjänster.</p>
    <p>Arbetet handlar inte om att hitta den lägsta premien. Det handlar om att varje risk prövas individuellt, att rådet lämnas skriftligt och att samma rådgivare följer dig från första kontakt till skadereglering — någon som kan ditt ärende den dag det verkligen behövs.</p>
    <ol class="process-steps">
      <li><div><strong>Genomgång av situationen.</strong><span> Bostäder, värdeföremål, bilar, vilka som ingår i hushållet, var ni bor och hur. Skicka gärna de försäkringar ni har i dag.</span></div></li>
      <li><div><strong>Omfattningen först.</strong><span> Först avgör vi vad försäkringen måste täcka och vad som medvetet kan utelämnas. Sedan placerar vi risken hos de bolag som passar den.</span></div></li>
      <li><div><strong>Villkoren på engelska.</strong><span> Innan något skrivs under får du försäkringsbelopp, självrisker, undantag och tidsfrister förklarade skriftligt.</span></div></li>
      <li><div><strong>Skadehantering.</strong><span> Anmälan, kontakt med bolaget, bevakning av frister. Det är den delen som gör en förmedlare värd namnet.</span></div></li>
    </ol>
    <p class="legal-note">Vilket skydd som gäller beror på försäkringsbolag och vald variant. Sidan beskriver hur marknaden normalt fungerar och är inte en bekräftelse av villkoren i ett enskilt avtal.</p>
  </div>
</section>`,
  // Porträttbandet och försäkringsbolagsraden nedanför renderas av
  // scripts/lib/site-sections.mjs; bara den svenska texten bor här.
  audience: {
    heading: 'Vilka vi <em>arbetar för</em>',
    body:
      'Svenska familjer och privatpersoner med betydande tillgångar i Portugal och Spanien — permanent bosatta, de som delar året mellan flera länder och ägare av andra bostäder. Vi ser hushållet som en helhet: bostäder, konst och samlingar, bilar, ansvar och sjukvård, med skriftlig rådgivning och samma rådgivare från första genomgång till skadereglering.',
    alt: 'Försäkringsrådgivare för privatpersoner i Portugal och Spanien',
  },
  insurers: {
    heading: 'Försäkringsbolag och co-brokingpartner <em>vi samarbetar med</em>',
    lead:
      'Som förmedlare är vi inte bundna till ett enda bolag. Vi ger råd inom vår portfölj av försäkringsbolag och placerar varje risk där villkoren passar den.',
  },
  faqTitle: 'Försäkring i Portugal — svenskars frågor',
  faq: [
    {
      q: 'Kan jag behålla min svenska hemförsäkring när jag flyttar till Portugal?',
      a: '<p>Normalt inte som lösning för bostaden i Portugal. Svenska hemförsäkringar är byggda kring en bostad i Sverige, och när folkbokföringen ändras stämmer den grunden inte längre — även om avtalet formellt löper vidare. Vi rekommenderar att du ber ditt svenska bolag om ett skriftligt svar på om och hur länge skyddet gäller efter utflyttning, och planerar övergången utifrån det.</p>',
    },
    {
      q: 'Räcker en portugisisk försäkring för uppehållstillstånd?',
      a: '<p>Det kan vi inte bekräfta som en generell regel. Kraven bestäms av myndigheterna, varierar med ansökningstyp och kan ändras. Vad vi kan göra är att ordna en sjukvårdsförsäkring med en bestämd omfattning och lämna dokumentation på villkoren. Bedömningen av om den uppfyller kraven i ett enskilt ärende görs av myndigheten eller ditt juridiska ombud.</p>',
    },
    {
      q: 'Talar ni svenska?',
      a: '<p>Nej. Sidorna är på svenska eftersom ämnet är det, men arbetet sker på engelska och skriftligt — från offert via villkor till skadeanmälan. Vi tycker det är bättre att säga det här än att låta någon upptäcka det mitt i ett skadeärende.</p>',
    },
    {
      q: 'Var finns ni, och arbetar ni även i Spanien?',
      a: '<p>Vi har kontor i Lissabon och Lagos och kunder i hela Portugal. I Spanien arbetar vi med stöd av EU:s frihet att tillhandahålla tjänster, under samma registrering hos ASF (nr 425591790/3). För familjer med bostäder i båda länderna innebär det en rådgivare och en genomgång för hela hushållet.</p>',
    },
    {
      q: 'Vilka kunder arbetar ni med?',
      a: '<p>Privatpersoner och familjer med betydande tillgångar: värdefulla hem, konst och samlingar, flera bostäder eller en livssituation som sträcker sig över flera länder. Vi är ingen jämförelsesajt — varje risk prövas individuellt och rådet lämnas skriftligt.</p>',
    },
    {
      q: 'Vilka handlingar behövs?',
      a: '<p>Normalt: NIF, legitimation och adress i Portugal. För bostad även <em>caderneta predial</em> eller köpehandling med yta och byggår. För bil registreringsbevis och intyg om skadefri tid, för sjukvård uppgifter om vilka som ska omfattas. Den fullständiga listan för just ditt fall får du i vårt första svar.</p>',
    },
  ],
  related: [
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
    { url: '/se/flytta-till-portugal-forsakring/', label: 'Flytta till Portugal: försäkringar i rätt ordning' },
  ],
};
