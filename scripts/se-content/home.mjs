/**
 * /se/hemforsakring-portugal/
 *
 * Search intent: "hemförsäkring Portugal" / "villaförsäkring Portugal" — a
 * Swedish owner or tenant who needs household cover here.
 *
 * The Swedish-specific hooks: hemförsäkring vs villaförsäkring is a
 * distinction Swedes carry with them and Portuguese multirriscos habitação
 * does not make in the same way; bostadsrätt is not fração autónoma, and the
 * bostadsrättsförening's insurance is not the condomínio's; and the unbundling
 * of ansvar, rättsskydd and reseskydd — set out on the hub — gets its
 * practical consequences here. Second homes get real weight because that is a
 * large share of Swedish ownership in Portugal, without turning the page into
 * an Algarve page.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'hemforsakring-portugal',
  url: '/se/hemforsakring-portugal/',
  cluster: 'home',
  title: 'Hemförsäkring i Portugal för svenskar | Adler & Rochefort',
  description:
    'Vad multirriscos habitação faktiskt täcker: byggnad och lösöre, condomínio, vattenskador, jordskalvsrisk och återuppbyggnadsvärde — och vad den svenska hemförsäkringens paket inte innehåller här.',
  keywords:
    'hemförsäkring Portugal, villaförsäkring Portugal, multirriscos habitação, fritidshusförsäkring Portugal, bostadsförsäkring Portugal svenskar, återuppbyggnadsvärde Portugal',
  eyebrow: 'Bostadsförsäkring',
  h1: 'Hemförsäkring i Portugal: vad som faktiskt omfattas',
  standfirst:
    'Portugisisk <em>multirriscos habitação</em> skyddar bostaden väl. Den innehåller däremot inte de fyra extra delar som följer med en svensk hemförsäkring — och skillnaderna sitter precis där en skada avgörs.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Hemförsäkring' }],
  pullquote: 'Försäkringsbeloppet är inte vad du betalade. Det är vad det kostar att bygga upp det som brann.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared se-forfragan branch-select form.
  wizard: {
    idPrefix: 'se-hab',
    formName: 'se-hemforsakring-wizard',
    ramo: 'Hemförsäkring',
    heading: 'Begär offert på bostadsförsäkring',
    intro: 'Fyll i det viktigaste. Vi svarar inom 24 arbetstimmar.',
    stepLabel2: 'Bostaden',
    submitLabel: 'Begär offert',
    microNote:
      'Svar inom 24 arbetstimmar. Dina uppgifter används endast för att förbereda offerten och behandlas i enlighet med GDPR — se <a href="/en/privacy-policy" hreflang="en">integritetspolicyn</a>.',
    scripts: ['quote-field-toggle.js'],
    fieldsHtml: `        <div class="contact-form-field">
          <label for="se-hab-regime">Bostadens användning *</label>
          <select id="se-hab-regime" name="regime_ocupacao" data-branch-select required>
            <option value="">Välj</option>
            <option value="permanente">Permanent bostad</option>
            <option value="holiday_home">Fritidshus / andrahandsbostad</option>
            <option value="alojamento_local">Alojamento Local (korttidsuthyrning)</option>
          </select>
        </div>
        <div data-branch="alojamento_local" hidden>
          <div class="contact-form-field">
            <label for="se-hab-al-regime">Typ av korttidsuthyrning *</label>
            <select id="se-hab-al-regime" name="al_regime" required disabled>
              <option value="">Välj</option>
              <option value="tempo_inteiro">Heltid</option>
              <option value="parcial">Deltid (delad användning av bostaden)</option>
            </select>
          </div>
        </div>
        <div class="contact-form-field"><label for="se-hab-ano-construcao">Byggår *</label><input type="number" id="se-hab-ano-construcao" name="ano_construcao" min="1800" required></div>
        <div class="contact-form-field"><label for="se-hab-area">Bruttoarea (m²) *</label><input type="number" id="se-hab-area" name="area_bruta" min="1" required></div>
        <div class="contact-form-field"><label for="se-hab-wc">Antal badrum *</label><input type="number" id="se-hab-wc" name="casas_banho" min="0" required></div>
        <div class="contact-form-field">
          <label class="contact-form-checkbox" for="se-hab-obras-check"><input type="checkbox" id="se-hab-obras-check" data-field-toggle="se-hab-obras-group"> Har ni renoverat under de senaste åren?</label>
        </div>
        <div id="se-hab-obras-group" hidden>
          <div class="contact-form-field"><label for="se-hab-obras-ano">Renoveringsår *</label><input type="number" id="se-hab-obras-ano" name="obras_ano" data-validate="renovation-year" data-validate-ref="ano_construcao" required disabled></div>
          <div class="contact-form-field"><label for="se-hab-obras-desc">Beskriv de utförda arbetena *</label><textarea id="se-hab-obras-desc" name="obras_descricao" minlength="10" required disabled></textarea></div>
        </div>
        <div class="contact-form-field"><label for="se-hab-capital-edificio">Försäkringsbelopp byggnad (€) *</label><input type="number" id="se-hab-capital-edificio" name="capital_edificio" min="0" step="1000" required></div>
        <div class="contact-form-field"><label for="se-hab-capital-conteudo">Försäkringsbelopp lösöre (€) *</label><input type="number" id="se-hab-capital-conteudo" name="capital_conteudo" min="0" step="500" required></div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="hem-eller-villa">
  <div class="container narrow article-body">
    <h2 id="hem-eller-villa">Hem eller villa — en svensk uppdelning som inte finns här</h2>
    <p>I Sverige avgör boendeformen produkten: <strong>hemförsäkring</strong> för lösöret i en lägenhet, <strong>villaförsäkring</strong> när du också äger byggnaden, <strong>bostadsrättstillägg</strong> för det du själv ansvarar för i en bostadsrätt.</p>
    <p>Portugisisk bostadsförsäkring gör inte den uppdelningen. Det finns en produkt — <em>multirriscos habitação</em> — och den byggs upp av två försäkringsbelopp: <em>edifício</em> (byggnaden) och <em>recheio</em> (lösöret). Äger du en lägenhet i ett flerbostadshus försäkrar du normalt din andel av byggnaden plus lösöret; äger du ett hus försäkrar du hela byggnaden. Hyr du din bostad försäkrar du bara lösöret och ditt ansvar.</p>
    <p>Gränsen mellan <em>edifício</em> och <em>recheio</em> går inte alltid där man väntar. Byggnaden omfattar normalt konstruktion, tak, golv, installationer, fast köksinredning och sanitetsporslin. Lösöret omfattar möbler, fristående vitvaror, elektronik, kläder, sportutrustning. Det som ofta hamnar mittemellan: <strong>luftvärmepump och split-AC</strong>, <strong>solpaneler</strong>, <strong>pergola och inglasad terrass</strong>, <strong>murar och staket</strong>, <strong>pool</strong>. Olika bolag placerar dem olika och flera kräver att de anmäls separat med värde.</p>
    <div class="callout">
      <span class="callout-label">Vad vi gör i praktiken</span>
      Vi går igenom listan med gränsfall innan försäkringen tecknas och skriver in det som ska omfattas. En pool som står i försäkringsbrevet är försäkrad. En pool ingen nämnde är ett diskussionsämne på skadedagen — och det är alltid fel dag att diskutera.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="det-som-saknas">
  <div class="container narrow article-body">
    <h2 id="det-som-saknas">De fyra delarna som inte följer med</h2>
    <p>Detta är sidans viktigaste avsnitt för en svensk läsare. Din svenska hemförsäkring innehöll fem saker. Här följer bara två med automatiskt.</p>
    <h3>Ansvarsskydd</h3>
    <p>Portugisiska bostadsförsäkringar innehåller ofta <em>responsabilidade civil</em>, men i många varianter är skyddet <strong>begränsat till skador på grannar i samma byggnad</strong> — typiskt vattenskador — med ett lågt belopp. Ett bredare privat ansvarsskydd, som gäller skador du orsakar tredje man utanför bostaden, är då ett tillägg eller en egen försäkring. Det beror på bolag och variant, och vi kontrollerar det i villkoren. Se <a href="/se/ansvarsforsakring-portugal/">sidan om ansvarsförsäkring</a>.</p>
    <h3>Rättsskydd</h3>
    <p><em>Proteção jurídica</em> finns som tillval hos de flesta bolag, men ingår sällan som standard. Det är billigt och används oftare än man tror — vid tvist med en entreprenör, med <em>condomínio</em> eller om vållandefrågan vid en skada.</p>
    <h3>Reseskydd</h3>
    <p>Finns inte i bostadsförsäkringen. Reseförsäkring är en egen produkt i Portugal. Har du kvar ett svenskt kort med reseskydd, kontrollera villkoren: många kortförsäkringar förutsätter att du är folkbokförd i Sverige.</p>
    <h3>Överfallsskydd</h3>
    <p>Ingen självklar motsvarighet. Personskada vid överfall hanteras i så fall genom olycksfallsförsäkring (<em>seguro de acidentes pessoais</em>), som tecknas separat.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="aterbyggnadsvarde">
  <div class="container narrow article-body">
    <h2 id="aterbyggnadsvarde">Återuppbyggnadskostnaden — det dyraste misstaget</h2>
    <p>Försäkringsbeloppet för byggnaden ska motsvara <strong>kostnaden att bygga upp den igen</strong>, inte köpeskillingen. I Portugal är skillnaden stor i båda riktningarna. I Lissabon och Cascais innehåller priset tomt och läge, som en brand inte förstör — då är beloppet för högt och premien betalas i onödan år efter år. I äldre bebyggelse och på orter med låga bostadspriser är det ofta omvänt: att bygga upp huset kostar mer än det är värt på marknaden, särskilt vid bevarandekrav eller ovanlig konstruktion.</p>
    <p>Siffran spelar roll långt utanför totalskador. Enligt <em>regra proporcional</em> sätts ersättningen ned i samma proportion som underförsäkringen — är beloppet 30 % för lågt kan ersättningen för det utbrunna badrummet minskas med 30 %. Mekanismen finns i svenska villkor också, men tillämpas mer konsekvent här.</p>
    <h3>Vad vi utgår från</h3>
    <ul>
      <li>Ytan enligt <em>caderneta predial</em> och antalet våningar.</li>
      <li>Byggår och standard — natursten, marmor och specialsnickerier höjer kostnaden verkligt.</li>
      <li>Det som står utanför huset: terrass, pool, mur, grind, solceller.</li>
      <li>Hur åtkomlig tomten är för en byggarbetsplats; smala gator i gammal bebyggelse kostar.</li>
      <li>Dagens kvadratmeterpriser i regionen, inte de från för fem år sedan.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Condomínio är inte en bostadsrättsförening</h2>
    <p>En lägenhet i Portugal är en <em>fração autónoma</em> — du äger den, till skillnad från en bostadsrätt där du äger en andel i en förening med nyttjanderätt till lägenheten. Skillnaden är juridisk, men den har en praktisk följd som svenska köpare ofta missar: <strong>det finns ingen förening som äger huset och försäkrar det som sin egendom.</strong> Det finns ett <em>condomínio</em>, en samfällighet av ägare, med en försäkring som normalt slutar där lägenheten börjar.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Fördelning mellan condomínio-försäkring och egen försäkring</caption>
        <thead>
          <tr><th scope="col">Del</th><th scope="col">Normalt condomínio</th><th scope="col">Normalt egen försäkring</th></tr>
        </thead>
        <tbody>
          <tr><td>Konstruktion, tak, trapphus</td><td>Ja</td><td>—</td></tr>
          <tr><td>Fasad, hiss, gemensamma ytor</td><td>Ja</td><td>—</td></tr>
          <tr><td>Ytskikt inne i lägenheten</td><td>Sällan</td><td>Ja</td></tr>
          <tr><td>Lösöret</td><td>Nej</td><td>Ja</td></tr>
          <tr><td>Vattenskada hos grannen</td><td>Bara från gemensamma delar</td><td>Ja, om ansvar ingår</td></tr>
          <tr><td>Självrisk vid gemensam skada</td><td>Fördelas mellan ägarna</td><td>—</td></tr>
        </tbody>
      </table>
    </div>
    <p>Be förvaltningen om en kopia av <em>condomínio</em>-försäkringen och kontrollera två saker: byggnadens försäkringsbelopp och om försäkringen är i kraft. Det förekommer hus där skyddet för de gemensamma delarna har upphört utan att någon märkt det, ända fram till att taket läcker.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="vatten-och-jordskalv">
  <div class="container narrow article-body">
    <h2 id="vatten-och-jordskalv">Vattenskador och jordskalvsrisk</h2>
    <h3>Vattenskador (<em>danos por água</em>)</h3>
    <p>Den vanligaste skadan i portugisiska bostäder och den som oftast leder till missförstånd. En normal försäkring täcker följderna av ett plötsligt rörbrott, men många varianter undantar <strong>långsamt läckage</strong>, <strong>fukt och mögel</strong> och skador till följd av <strong>bristande underhåll</strong>. Separat hanteras <em>procura de avaria</em> — kostnaden att hitta och frilägga felet, det vill säga att bila upp golvet för att komma åt röret. I försäkringar utan den posten kan själva reparationen vara täckt men inte vägen dit.</p>
    <p>Det andra är <strong>läckage genom terrass eller tak</strong>, mycket vanligt i portugisiskt byggande med platta terrasser. Några bolag täcker det, andra undantar det eller ställer krav på tätskiktets skick. Det är en fråga vi ställer innan försäkringen tecknas, inte efteråt.</p>
    <h3>Jordskalvsrisk (<em>risco sísmico</em>)</h3>
    <p>Portugal ligger i ett seismiskt aktivt område — Lissabon och delar av södra landet har en reell, om ovanlig, jordskalvsrisk. För en svensk är det en ny kategori att tänka på.</p>
    <p>Jordskalvsskydd är <strong>i de flesta portugisiska bostadsförsäkringar ett tillval</strong>, inte standard. När det ingår har det normalt en egen och högre självrisk, ofta angiven som procent av försäkringsbeloppet. Vid bolån kan banken kräva att det ingår; kraven varierar mellan banker. Om en försäkring täcker risken framgår bara av dess villkor — vi kontrollerar det uttryckligen och svarar skriftligt i stället för att anta.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="fritidshus">
  <div class="container narrow article-body">
    <h2 id="fritidshus">Fritidshus och bostad som står tom</h2>
    <p>En stor del av svenskt bostadsägande i Portugal är andrahandsbostäder som används några månader om året. Det är en annan risk än en permanentbostad, och den måste anmälas som sådan.</p>
    <ul>
      <li><strong>Status som andrahandsbostad eller ej permanentbebodd</strong> påverkar premien, men framför allt omfattningen. Flera försäkringar begränsar stöldskyddet vid frånvaro längre än ett visst antal dagar i följd — typiskt mellan 30 och 90 beroende på bolag.</li>
      <li><strong>Kraven på lås och larm</strong> blir hårdare: godkända lås, ibland larm med bevakning.</li>
      <li><strong>Vattenskada i tomt hus</strong> är en klassiker. Vissa villkor kräver att huvudkranen stängs av under frånvaro, och uppfylls inte det kan ersättningen ifrågasättas.</li>
      <li><strong>Korttidsuthyrning (<em>alojamento local</em>)</strong> är näringsverksamhet och omfattas inte av en vanlig bostadsförsäkring. Det krävs en variant som tar höjd för uthyrning, normalt med ansvar mot gäster.</li>
      <li><strong>Tillsyn.</strong> Att någon ser till huset regelbundet är inget försäkringskrav i sig, men det är skillnaden mellan en läcka som upptäcks i vecka ett och en som upptäcks i vecka tolv — och den senare hamnar ofta i undantaget för långsamt läckage.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="checklista">
  <div class="container narrow article-body">
    <h2 id="checklista">Checklista innan du skriver under</h2>
    <ol class="process-steps">
      <li><div><strong>Byggnadens försäkringsbelopp</strong><span> motsvarar återuppbyggnadskostnaden, inte köpeskillingen eller lånebeloppet.</span></div></li>
      <li><div><strong>Lösörets belopp</strong><span> är räknat, inte gissat. Gå rum för rum, det tar tjugo minuter.</span></div></li>
      <li><div><strong>Vattenskador</strong><span>: du vet om <em>procura de avaria</em> och läckage genom terrass ingår.</span></div></li>
      <li><div><strong>Jordskalv</strong><span>: du vet om det ingår, med vilken självrisk, och om banken kräver det.</span></div></li>
      <li><div><strong>Ansvar</strong><span>: du vet om försäkringen täcker skador utanför bostaden och med vilket belopp.</span></div></li>
      <li><div><strong>Rättsskydd</strong><span>: du har medvetet valt eller avstått, inte antagit.</span></div></li>
      <li><div><strong>Användningen</strong><span> är anmäld som den faktiskt är, med frånvaroperioder.</span></div></li>
      <li><div><strong>Gränsfallen</strong><span> — pool, solceller, pergola, mur — står i försäkringsbrevet med värde.</span></div></li>
      <li><div><strong>Självriskerna</strong><span> är kända i kronor och ören per moment.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Hemförsäkring i Portugal — frågor',
  faq: [
    {
      q: 'Ingår ansvarsskydd som i en svensk hemförsäkring?',
      a: '<p>Inte på samma sätt. Portugisiska bostadsförsäkringar innehåller ofta ansvar, men många varianter begränsar det till skador på grannar i samma byggnad och med lågt belopp. Ett bredare privat ansvarsskydd är då ett tillägg eller en egen försäkring. Vi kontrollerar villkoren och anger beloppet i kronor och euro.</p>',
    },
    {
      q: 'Är hemförsäkring obligatorisk i Portugal?',
      a: '<p>För en lägenhet i ett flerbostadshus krävs brandförsäkring enligt reglerna om samägande, både för gemensamma delar och för lägenheterna. Vid bolån kräver banken dessutom försäkring i den omfattning låneavtalet anger. För ett friliggande hus utan lån finns inget allmänt krav, men i praktiken har de flesta ägare försäkring.</p>',
    },
    {
      q: 'Täcks jordskalv?',
      a: '<p>Bara om det har valts till. I de flesta portugisiska bostadsförsäkringar är jordskalvsrisk ett tillval med egen och högre självrisk. Vi kontrollerar det i villkoren för den enskilda offerten och svarar skriftligt — vi antar varken att det ingår eller att det inte gör det.</p>',
    },
    {
      q: 'Condomínio har redan en försäkring. Behöver jag en egen?',
      a: '<p>Normalt ja. <em>Condomínio</em>-försäkringen täcker främst konstruktion och gemensamma delar; ytskikt inne i lägenheten, lösöre och ditt eget ansvar ligger kvar hos dig. Be förvaltningen om en kopia — då syns exakt var det ena skyddet slutar och det andra bör börja.</p>',
    },
    {
      q: 'Hur räknar jag lösörets värde?',
      a: '<p>Rum för rum: möbler, vitvaror, elektronik, kläder, sportutrustning och cyklar, verktyg. Summan brukar bli högre än man tror. Föremål med högt styckvärde — smycken, instrument, kameror, konst — har ofta ett tak per objekt och behöver anmälas separat.</p>',
    },
    {
      q: 'Jag bor i huset tre månader om året. Vad ska jag anmäla?',
      a: '<p>Den faktiska användningen, inklusive hur långa frånvaroperioderna är. Bolaget sätter premie och villkor utifrån det, och flera försäkringar begränsar stöldskyddet efter ett visst antal dagars frånvaro. Skillnaden mellan det anmälda och det verkliga visar sig just vid skada och kan kosta ersättningen.</p>',
    },
  ],
  related: [
    { url: '/se/kopa-hus-i-portugal-forsakring/', label: 'Köpa hus i Portugal: försäkringen steg för steg' },
    { url: '/se/ansvarsforsakring-portugal/', label: 'Ansvarsförsäkring i Portugal' },
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
  ],
};
