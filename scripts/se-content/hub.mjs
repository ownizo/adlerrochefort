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
 */
export const HUB_PAGE = {
  slug: 'se',
  url: '/se/',
  cluster: 'hub',
  isHub: true,
  title: 'Försäkring i Portugal för svenskar | Adler & Rochefort',
  description:
    'Hur försäkring fungerar i Portugal när man kommer från Sverige: hem, sjukvård, bil och ansvar. Registrerad försäkringsförmedlare i Algarve, ASF nr 425591790/3.',
  keywords:
    'försäkring Portugal, hemförsäkring Portugal, sjukvårdsförsäkring Portugal, bilförsäkring Portugal, svenskar i Portugal försäkring, försäkringsförmedlare Portugal',
  eyebrow: 'Försäkring i Portugal',
  h1: 'Försäkring i Portugal för svenskar — permanent, halvår eller fritidshus',
  standfirst:
    'Den svenska hemförsäkringen är ett paket. Den portugisiska är det inte. Skillnaden är den enskilt viktigaste saken att förstå innan du tecknar något här — och den gäller inte bara bostaden.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [{ name: 'Startsida', url: '/se/' }],
  pullquote:
    'Den billigaste försäkringen blir mycket dyr den dagen det visar sig att just den skadan var undantagen.',
  schemaType: 'WebPage',
  formHeading: 'Berätta om din situation',
  formBranch: '',
  formSubject: 'Allmän förfrågan (SE)',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Skriv vad som ska skyddas och från när. Vi svarar med vilka uppgifter som behövs och vad som realistiskt går att ordna.',
  formPlaceholder:
    'Till exempel: vi flyttar till Cascais i mars, har en lägenhet i condomínio och en bil på svenska skyltar.',
  sections: `
<section class="section plain" aria-labelledby="paketet">
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
    <p>Det här är inte en sämre marknad — den är annorlunda uppdelad. Men den som tecknar en portugisisk bostadsförsäkring och antar att paketet följer med har fyra glapp och vet inte om något av dem. Det är den vanligaste saken vi rättar till hos svenska kunder.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ordlista">
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

<section class="section plain" aria-labelledby="forsakringar">
  <div class="container narrow">
    <h2 id="forsakringar">Fyra försäkringar vi får flest frågor om</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/hemforsakring-portugal/">Hemförsäkring och villaförsäkring</a></h3>
        <p>Byggnad och lösöre, <em>condomínio</em> jämfört med bostadsrättsförening, vattenskador, jordskalvsrisk, fritidshus och återuppbyggnadsvärde.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/sjukvardsforsakring-portugal/">Sjukvårdsförsäkring</a></h3>
        <p>SNS och privat vård parallellt, vårdnätverk, kvalificeringstider, hälsoprövning och befintliga besvär.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/bilforsakring-portugal/">Bilförsäkring</a></h3>
        <p>Trafik, halv och hel översatt till portugisiska moduler, import och ISV, svenskt körkort och din skadefria tid.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/ansvarsforsakring-portugal/">Ansvarsförsäkring</a></h3>
        <p>Privat ansvar och yrkesansvar — för konsulter, frilansare, fysioterapeuter, wellnessbranschen och små företag.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="guider">
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

<section class="section plain" aria-labelledby="fritidshus">
  <div class="container narrow article-body">
    <h2 id="fritidshus">Fritidshus och bostaden som står tom</h2>
    <p>Många av våra svenska kunder bor i Portugal delar av året — ett halvår i Algarve, vintern i Lissabon, eller några månader i ett hus som står tomt däremellan. För ett försäkringsbolag är det en helt annan risk än en permanentbostad, och den måste anmälas som sådan.</p>
    <p>Det som faktiskt får betydelse: stöldskyddet kan begränsas efter ett visst antal dagars frånvaro i följd, kraven på lås och larm blir hårdare, och vissa villkor kräver att huvudkranen är avstängd under frånvaro. Hyr du ut till turister (<em>alojamento local</em>) är det näringsverksamhet, och en vanlig bostadsförsäkring omfattar den inte.</p>
    <p>Det finns ingen anledning att göra en hemlighet av hur bostaden används. Anmäler du frånvaron korrekt kostar den premie; anmäler du den inte kostar den ersättningen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sa-arbetar-vi">
  <div class="container narrow article-body">
    <h2 id="sa-arbetar-vi">Så arbetar vi</h2>
    <p>Vi är en försäkringsagentur registrerad i Portugal och ger rådgivning inom vår portfölj av försäkringsbolag. Vi är inte en prisjämförelsesajt och bygger inte erbjudandet kring lägsta premie. Arbetet består av något annat: att anpassa omfattningen till situationen, förklara de portugisiska villkoren på engelska och skriftligt, och att ha någon på din sida som kan ärendet den dag en skada inträffar.</p>
    <ol class="process-steps">
      <li><div><strong>Samtal om situationen.</strong><span> Vad ska skyddas, vilket värde, vilka bor i bostaden, finns bolån, bedrivs verksamhet.</span></div></li>
      <li><div><strong>Omfattning före pris.</strong><span> Först avgör vi vad försäkringen måste täcka och vad som medvetet kan utelämnas. Sedan jämför vi alternativ.</span></div></li>
      <li><div><strong>Villkoren på engelska.</strong><span> Innan något skrivs under får du försäkringsbelopp, självrisker, undantag och tidsfrister förklarade skriftligt.</span></div></li>
      <li><div><strong>Skadehantering.</strong><span> Anmälan, kontakt med bolaget, bevakning av frister. Det är den delen som gör en förmedlare värd namnet.</span></div></li>
    </ol>
    <p class="legal-note">Vilket skydd som gäller beror på försäkringsbolag och vald variant. Sidan beskriver hur den portugisiska marknaden normalt fungerar och är inte en bekräftelse av villkoren i ett enskilt avtal.</p>
  </div>
</section>`,
  // Porträttbandet och försäkringsbolagsraden nedanför renderas av
  // scripts/lib/site-sections.mjs; bara den svenska texten bor här.
  audience: {
    heading: 'Vilka vi <em>finns här för</em>',
    body:
      'Vi sköter försäkringarna för svenskar i Portugal: pensionärer, familjer, bostadsköpare, fritidshusägare och yrkesverksamma. Oavsett om du flyttade hit i år eller har bott här i decennier är det vi som sköter den portugisiska försäkringssidan — rådgivning, jämförelse av de alternativ som passar, tecknande, löpande service och hjälp vid skada, hos samma person hela vägen.',
    alt: 'Försäkringsrådgivare för utlandsboende i Portugal',
  },
  insurers: {
    heading: 'Försäkringsbolag och co-brokingpartner <em>vi samarbetar med</em>',
    lead:
      'Som förmedlare är vi inte bundna till ett enda bolag. Vi ger råd inom vår portfölj av försäkringsbolag och letar efter den lösning som passar din situation — inte bara den lägsta premien.',
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
      q: 'Är ni en jämförelsesajt?',
      a: '<p>Nej. Vi är en registrerad försäkringsagentur och ger rådgivning inom vår portfölj av bolag. Priset spelar roll och vi jämför alternativ, men utgångspunkten är omfattningen — att sänka premien genom att ta bort skydd som faktiskt behövs är ingen besparing.</p>',
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
