/**
 * /se/ansvarsforsakring-portugal/
 *
 * Search intent: "ansvarsförsäkring Portugal" — both the private liability a
 * Swede assumes is automatic (because in Sweden it sits inside hemförsäkringen)
 * and professional liability for the consultant/therapist/small-business
 * readers the brief names.
 *
 * The Swedish hook is the strongest of the three markets: ansvarsskydd is a
 * standard part of the Swedish home policy, so the reader has had it for
 * decades without ever buying it, and will assume the Portuguese multirriscos
 * behaves the same way. Examples are illustrative, not coverage promises.
 *
 * Positioning: family/personal liability first — limits in the millions,
 * worldwide, defence costs on top — with professional liability kept as the
 * separate product it is (the wizard below is the RC profissional form and
 * stays unchanged).
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const LIABILITY_PAGE = {
  slug: 'ansvarsforsakring-portugal',
  url: '/se/ansvarsforsakring-portugal/',
  cluster: 'liability',
  title: 'Ansvarsförsäkring för familjen i Portugal | Adler & Rochefort',
  description:
    'Privat ansvar för familjen med belopp i miljoner euro, giltigt i hela världen och med försvarskostnader utöver beloppet — i Portugal och Spanien.',
  keywords:
    'ansvarsförsäkring Portugal, privat ansvarsförsäkring familj, responsabilidade civil familiar, ansvarsskydd miljonbelopp, ansvarsförsäkring Spanien, yrkesansvarsförsäkring Portugal',
  eyebrow: 'Familjeansvar',
  h1: 'Ansvarsförsäkring för familjen: miljonbelopp, i hela världen',
  standfirst:
    'I Sverige låg ansvarsskyddet inne i hemförsäkringen. I en vanlig portugisisk bostadsförsäkring är <em>responsabilidade civil</em> ofta begränsad till skador på grannar och till ett lågt belopp. För ett hushåll med betydande tillgångar är ansvaret den del av försäkringen där beloppet betyder mest.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ansvarsförsäkring' }],
  pullquote: 'Allt annat i försäkringen begränsas av värdet på något du äger. Ansvaret begränsas bara av det belopp du valt.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared se-forfragan branch-select form. Same faturacao_anual field as
  // PT/EN/DE/NL RC Profissional, and the same 48-72h SLA.
  wizard: {
    idPrefix: 'se-rcp',
    formName: 'se-ansvarsforsakring-wizard',
    ramo: 'Ansvarsförsäkring',
    heading: 'Begär offert på ansvarsförsäkring',
    intro: 'Fyll i det viktigaste. Vi svarar inom 48 till 72 arbetstimmar.',
    stepLabel2: 'Verksamheten',
    submitLabel: 'Begär offert',
    microNote:
      'Svar inom 48 till 72 arbetstimmar. Dina uppgifter används endast för att förbereda offerten och behandlas i enlighet med GDPR — se <a href="/en/privacy-policy" hreflang="en">integritetspolicyn</a>.',
    fieldsHtml: `        <div class="contact-form-field"><label for="se-rcp-faturacao">Årsomsättning *</label><input type="number" id="se-rcp-faturacao" name="faturacao_anual" placeholder="T.ex. 85000" required></div>
        <p class="wizard-helper">Verksamhetstyp, önskat försäkringsbelopp och om policyn krävs enligt avtal eller av en branschorganisation går vi igenom i kontakten som följer.</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="beloppet">
  <div class="container narrow article-body">
    <h2 id="beloppet">Varför beloppet är det viktigaste valet</h2>
    <p>Sakförsäkringen har ett naturligt tak: byggnaden, lösöret, förteckningen över värdeföremål. Ansvaret har inget. Ett skadeståndsanspråk för en allvarlig personskada hos tredje man — inkomstförlust under många år, vård, anpassning av bostad — bestäms av vad domstolen dömer ut och av den skadades förluster, och ingen av dem har något att göra med vad ditt hus är värt.</p>
    <p>Vanliga portugisiska bostadsförsäkringar har ofta ett ansvarsbelopp som räcker för en vattenskada hos grannen men inte för en allvarlig personskada. För ett hushåll med betydande tillgångar är det också frågan om vad en motpart kan rikta anspråk mot. Därför bygger vi familjeansvaret på fyra principer:</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>Belopp som motsvarar tillgångarna</h3><p>Privat ansvar för hela familjen med försäkringsbelopp på flera miljoner euro, med giltighet i hela världen.</p></div>
      <div class="feature-card"><h3>Försvarskostnader utöver beloppet</h3><p>Kostnaderna för rättsligt försvar betalas utöver försäkringsbeloppet och dras inte av från det — i en tvistig sak ofta den största posten de första åren.</p></div>
      <div class="feature-card"><h3>Vilka som omfattas</h3><p>Hushållet, även barn som studerar på annan ort, och den som tillfälligt tar hand om dina djur; gäster och hushållsanställda i anslutning till bostaden.</p></div>
      <div class="feature-card"><h3>Alla bostäder</h3><p>Som ägare, hyresgäst eller brukare — i Portugal, i Spanien eller var familjen än har ett hem.</p></div>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="privat">
  <div class="container narrow article-body">
    <h2 id="privat">Det svenska glappet: ansvarsskyddet som inte följer med</h2>
    <p>Har du haft hemförsäkring i Sverige har du haft ansvarsskydd — och sannolikt aldrig behövt fundera på det. Det är den svenska hemförsäkringens konstruktion: ansvar, rättsskydd, reseskydd och överfallsskydd ligger inne i paketet.</p>
    <p>Den portugisiska <em>multirriscos habitação</em> är byggd kring sakskadan: byggnad och lösöre. Ansvarsdelen finns, men som tillval eller med ett belopp som är kopplat till bostaden snarare än till dig och din familj. Resultatet är ett glapp som ingen påpekar, eftersom ingen part i affären ser hela din situation — banken ser lånet, fastighetsmäklaren ser köpet, bolaget ser huset.</p>
    <h3>Vem räknas som försäkrad?</h3>
    <p>Definitionen av försäkrad person avgör om skyddet alls gäller, och villkoren skiljer sig mer här än någon annanstans. Räkna med försäkringstagaren, make eller maka och hemmavarande barn. Kontrollera sedan fyra fall särskilt: vuxna barn som studerar på annan ort, sambo, andra släktingar som bor permanent i hushållet och gäster som använder bostaden med ditt tillstånd.</p>
    <p>Hushållsanställdas egna skador i arbetet omfattas inte av ansvarsförsäkringen. Den som anställer personal i ett hushåll i Portugal ska ha en lagstadgad arbetsskadeförsäkring (<em>seguro de acidentes de trabalho</em>), som är en egen försäkring med egna skyldigheter. Familjeansvaret kan däremot gälla när en anställd i tjänsten orsakar skada hos tredje man — det beror på villkoren.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="dar-anspraken-uppstar">
  <div class="container narrow article-body">
    <h2 id="dar-anspraken-uppstar">Där anspråken uppstår</h2>
    <p>Riskerna är vardagliga, och det är just poängen. Nästan inget av detta kräver att något ovanligt händer:</p>
    <ul>
      <li><strong>Pool och vatten.</strong> En privat pool bedöms mot vad en rimlig ägare borde ha gjort: staket, överdrag, tillsyn, skyltning. En gäst eller ett grannbarn som skadas är det klassiska anspråket.</li>
      <li><strong>Vattenskador i flerbostadshus.</strong> Det vanligaste ansvarsanspråket av alla, och i en renoverad byggnad med påkostade ytskikt blir beloppen betydande.</li>
      <li><strong>Träd, murar och tomtgränser.</strong> Ett träd som faller eller en stödmur som rasar är ägarens ansvar — liksom en brand som sprider sig från en tomt som inte röjts enligt reglerna.</li>
      <li><strong>Hundar och andra djur.</strong> Djurhållaransvaret är strikt till sin karaktär, och vissa hundraser har särskilda krav på registrering, munkorg och försäkring. Villkoren kan undanta vissa raser.</li>
      <li><strong>Byggarbeten.</strong> Att anlita en entreprenör flyttar inte över allt ansvar: en ägare kan bli ansvarig för skador hos grannen till följd av arbeten på den egna fastigheten. Entreprenörens egen försäkring ska kontrolleras, inte antas.</li>
      <li><strong>Båt, sport och fritid.</strong> Golf, cykling, segling, skidåkning och vattensporter ger upphov till anspråk från tredje man. Mindre båtar kan ibland ingå i familjeansvaret; större båtar och vattenskotrar kräver normalt en egen försäkring och ska alltid anmälas.</li>
      <li><strong>Barnen.</strong> Ett barn som skadar något dyrt hemma hos någon annan, eller en annan elev i skolan — de situationer den svenska hemförsäkringen alltid tog hand om utan att någon märkte det.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Osäker på vilket belopp du har i dag?</span>
      Skicka oss försäkringsbrevet. Vi svarar skriftligt med ansvarsbeloppet, undantagen och vad det skulle innebära att höja det.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="separat">
  <div class="container narrow article-body">
    <h2 id="separat">Det som förblir separat</h2>
    <p><em>Responsabilidade civil</em> betyder skadeståndsansvar, och på den portugisiska marknaden möter du begreppet i flera sammanhang som köps var för sig. Familjeansvaret ersätter inte de andra:</p>
    <ul>
      <li><strong>Yrkes- och verksamhetsansvar</strong> (<em>RC profissional</em> eller <em>RC de exploração</em>) — skada som uppstår i ditt arbete: felaktigt råd, missad tidsfrist, olycka i din lokal, skada på kundens egendom. Privat ansvar undantar alltid yrkesverksamhet.</li>
      <li><strong>Fordon</strong> — trafikförsäkringens ansvarsdel är lagstadgad och ligger i bilförsäkringen.</li>
      <li><strong>Uthyrning till turister</strong> (<em>alojamento local</em>) — är näringsverksamhet. Den ska anmälas till bolaget och kräver normalt ett eget ansvarsskydd mot gäster.</li>
      <li><strong>Uppdrag i styrelser och bolag</strong> — hanteras genom bolagets egna försäkringar, inte genom familjens.</li>
    </ul>
    <h3>Yrkesansvar: vem behöver det</h3>
    <p>Många av våra svenska kunder arbetar från Portugal — som konsulter, rådgivare eller med en egen verksamhet. Några situationer vi hanterar, som illustration och inte som en utfästelse om att varje verksamhet går att försäkra:</p>
    <ul>
      <li><strong>Konsulter och rådgivare</strong> som fakturerar svenska eller andra utländska kunder från Portugal. Risken är ekonomisk, och beställarens avtal kräver ofta en minsta försäkringsnivå — läs den klausulen innan avtalet skrivs på.</li>
      <li><strong>Terapeuter och wellnessverksamhet</strong> — behandlingsskada och skada i lokalen är två olika risker som ska täckas båda.</li>
      <li><strong>Reglerade yrken</strong> — för vissa följer krav på yrkesansvarsförsäkring av regelverket eller yrkesorganisationen. Vilka krav som gäller avgörs av dem, inte av oss.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Viktig avgränsning</span>
      Vi bedömer inte vilken registrering, bolagsform eller vilket tillstånd din verksamhet behöver i Portugal, och vi kan inte bekräfta att en försäkring uppfyller ett lagkrav eller ett kundavtals krav. Det är frågor för revisor, jurist eller din yrkesorganisation. Vi ordnar försäkringen, förklarar omfattningen skriftligt på engelska och lämnar det försäkringsbevis en beställare kan behöva.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="undantag">
  <div class="container narrow article-body">
    <h2 id="undantag">Vad som normalt inte täcks</h2>
    <p>Undantagen varierar mellan bolag och villkor, men mönstren återkommer. En ansvarsförsäkring är normalt inte avsedd för:</p>
    <ul>
      <li>Uppsåtliga handlingar och skada orsakad avsiktligt.</li>
      <li>Skada på din egen egendom — det ligger i sakförsäkringen, inte i ansvarsdelen.</li>
      <li>Skador mellan medlemmar i samma hushåll.</li>
      <li>Yrkesverksamhet och uthyrning som inte anmälts och försäkrats för sig.</li>
      <li>Avtalsviten och rent kontraktuella åtaganden utöver skadeståndsansvaret.</li>
      <li>Böter, sanktionsavgifter och straffrättsliga påföljder.</li>
    </ul>
    <p>Att läsa undantagen före tecknandet är hela poängen med att gå via en förmedlare. Det är också den enda tidpunkt då de går att påverka.</p>
  </div>
</section>`,
  faqTitle: 'Ansvarsförsäkring i Portugal — frågor',
  faq: [
    {
      q: 'Ingår ansvarsskyddet i hemförsäkringen som i Sverige?',
      a: '<p>Inte på samma självklara sätt. En vanlig portugisisk <em>multirriscos habitação</em> är byggd kring byggnad och lösöre; ansvarsdelen finns som tillval eller med ett belopp knutet till bostaden. I private client-villkoren för värdefulla hem ingår familjeansvar med belopp på flera miljoner euro. Vi kontrollerar vad som står i just din försäkring innan du utgår från att skyddet finns.</p>',
    },
    {
      q: 'Vilket ansvarsbelopp bör familjen ha?',
      a: '<p>Ett belopp som står i proportion till vad ett allvarligt personskadeanspråk kan kosta och till vad familjen har att förlora — för hushåll med betydande tillgångar normalt flera miljoner euro. Ett lågt belopp är den del av försäkringen där konsekvensen av ett felaktigt val saknar övre gräns. Vi går igenom nivåerna skriftligt.</p>',
    },
    {
      q: 'Ingår försvarskostnaderna i försäkringsbeloppet?',
      a: '<p>I de private client-villkor vi förmedlar betalas kostnaderna för rättsligt försvar utöver försäkringsbeloppet, inte inom det. I andra villkor räknas de ofta in i beloppet, så att en utdragen tvist äter upp det som skulle ha gått till ersättning. Det är en av de första punkterna vi kontrollerar.</p>',
    },
    {
      q: 'Omfattas gäster och hushållsanställda?',
      a: '<p>Gäster och hushållsanställda omfattas i anslutning till bostaden, enligt villkoren. De anställdas egna skador i arbetet är däremot en fråga för den lagstadgade arbetsskadeförsäkringen (<em>seguro de acidentes de trabalho</em>), som tecknas separat.</p>',
    },
    {
      q: 'Gäller skyddet i Spanien och på resor?',
      a: '<p>Ja, familjeansvaret i private client-villkoren gäller i hela världen, och som ägare, hyresgäst eller brukare av bostäder i Portugal, i Spanien eller var familjen än har ett hem. Den geografiska omfattningen framgår alltid av försäkringsbrevet, och vi bekräftar den skriftligt.</p>',
    },
    {
      q: 'Jag är konsult och fakturerar från Portugal. Täcks det?',
      a: '<p>Nej, inte av familjeansvaret — privat ansvar undantar yrkesverksamhet. Det krävs en yrkesansvarsförsäkring (<em>RC profissional</em>), som täcker ekonomisk skada hos kunden till följd av ditt arbete. Vad som går att teckna beror på verksamhetsbeskrivning, omsättning och kundernas geografi.</p>',
    },
    {
      q: 'Jag hyr ut mitt hus till turister. Räcker hemförsäkringen?',
      a: '<p>Normalt inte utan vidare. En vanlig hemförsäkring är inte skriven för kommersiell uthyrning, och uthyrningen bör anmälas till bolaget. Vilken lösning som är möjlig beror på bolag, fastighet och uthyrningens omfattning — men gissa inte: en oanmäld uthyrning är ett återkommande skäl till att en skada inte ersätts.</p>',
    },
  ],
  related: [
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
  ],
};
