/**
 * /se/sjukvardsforsakring-portugal/
 *
 * Search intent: "sjukvårdsförsäkring Portugal" — a Swede working out how
 * healthcare access works here and whether private cover is needed on top.
 *
 * The Swedish-specific hooks: Försäkringskassan and utflyttningsanmälan to
 * Skatteverket are what actually determine the reader's position, the EU card
 * is the thing everyone wrongly relies on, and the S1 route matters
 * disproportionately because a large share of Swedes here are pensioners.
 * Everything about underwriting and pre-existing conditions is hedged.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'sjukvardsforsakring-portugal',
  url: '/se/sjukvardsforsakring-portugal/',
  cluster: 'health',
  title: 'Internationell sjukvårdsförsäkring i Portugal | Adler & Rochefort',
  description:
    'Privat sjukvårdsförsäkring för familjer i Portugal och Spanien: internationellt skydd, SNS parallellt, kvalificeringstider, hälsoprövning och utflyttning.',
  keywords:
    'sjukvårdsförsäkring Portugal, internationell sjukvårdsförsäkring, privat vård Portugal, SNS Portugal, utflyttning Sverige sjukvård, EU-kort Portugal, Försäkringskassan utflyttning, S1 Portugal',
  eyebrow: 'Sjukvårdsförsäkring',
  h1: 'Sjukvårdsförsäkring för familjen i Portugal: internationellt skydd, SNS och privat vård',
  standfirst:
    'För en familj som lever i flera länder är frågan inte bara vilken vård som finns i Portugal, utan vilket skydd som följer med till Spanien, Sverige och vidare. Här är hur den offentliga vården, lokala privata försäkringar och internationella försäkringar förhåller sig till varandra — och vad bolaget frågar innan det tecknar.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Sjukvårdsförsäkring' }],
  pullquote: 'Sjukvårdsförsäkring tecknas när man är frisk. Senare köper man bara det bolaget väljer att erbjuda.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared se-forfragan branch-select form.
  wizard: {
    idPrefix: 'se-sau',
    formName: 'se-sjukvardsforsakring-wizard',
    ramo: 'Sjukvårdsförsäkring',
    heading: 'Begär offert på sjukvårdsförsäkring',
    intro: 'Fyll i det viktigaste. Vi svarar inom 24 arbetstimmar.',
    stepLabel2: 'Personer som ska försäkras',
    submitLabel: 'Begär offert',
    adultBirthDate: true,
    microNote:
      'Svar inom 24 arbetstimmar. Dina uppgifter används endast för att förbereda offerten och behandlas i enlighet med GDPR — se <a href="/en/privacy-policy" hreflang="en">integritetspolicyn</a>.',
    scripts: ['quote-health-persons.js'],
    fieldsHtml: `        <p class="wizard-helper" style="margin-bottom:16px;">För varje person som ska försäkras behövs ett portugisiskt skattenummer (NIF), även för barn — utan det kan ingen offert upprättas. Vi frågar inte efter några medicinska uppgifter här: hälsodeklarationen sker direkt med försäkringsbolaget, vid anslutningen.</p>
        <div data-persons-repeater>
          <div data-persons-list></div>
          <button type="button" class="wizard-nav-back" data-persons-add>+ Lägg till person</button>
        </div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">SNS — den portugisiska offentliga vården</h2>
    <p><em>Serviço Nacional de Saúde</em> är Portugals offentliga sjukvård, tillgänglig för den som är lagligt bosatt i landet. Du får tillgång genom att registrera dig på vårdcentralen (<em>centro de saúde</em>) för din adress — normalt med NIF, legitimation, adressbevis och uppehållshandling. Efter registrering får du ett <em>número de utente</em>, ett patientnummer, och tilldelas i mån av tillgång en husläkare (<em>médico de família</em>).</p>
    <p>Logiken är bekant för en svensk: primärvården är ingången och remiss leder vidare till specialist. Den praktiska skillnaden är att tilldelningen av husläkare inte är automatisk och att man i vissa områden får vänta på den. Väntetiderna till specialist och planerade ingrepp varierar kraftigt mellan regioner och specialiteter.</p>
    <p>Akut vård är tillgänglig oavsett status, och patientavgifterna i SNS (<em>taxas moderadoras</em>) är låga med breda undantag. Det är alltså inte ett system man försäkrar sig mot — det är ett system vars köer man vill kunna gå runt när något är angeläget men inte akut.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="utflyttning">
  <div class="container narrow article-body">
    <h2 id="utflyttning">Utflyttning, EU-kortet och S1</h2>
    <p>Detta är den del som oftast hoppas över, för att den ser ut som en formalitet. Den avgör om du har vård eller inte under de första månaderna.</p>
    <h3>Utflyttningsanmälan</h3>
    <p>Vid flytt utomlands för längre tid än ett år gör man en utflyttningsanmälan till Skatteverket. Rätten till förmåner från den svenska socialförsäkringen, inklusive den statliga sjukförsäkringen, är kopplad till att vara försäkrad i Sverige — och vid utflyttning upphör den kopplingen normalt. Det är värt att ta reda på sin egen situation hos Försäkringskassan, skriftligt, före flytten. Vi är försäkringsförmedlare och uttolkar inte svensk socialförsäkringsrätt; vi tar upp det eftersom tidpunkten avgör var glappet hamnar.</p>
    <h3>EU-kortet</h3>
    <p>Det europeiska sjukförsäkringskortet är avsett för <strong>tillfällig vistelse</strong> — semester, tjänsteresa, kortare besök. Det är inte en grund för vård för den som har flyttat sin bosättning till ett annat land. Efter flytten till Portugal, när du inte längre är försäkrad i Sverige, fyller kortet inte sin funktion, även om det ligger kvar i plånboken med giltighetstid kvar.</p>
    <h3>Blankett S1</h3>
    <p>För vissa grupper — framför allt pensionärer med svensk pension och utsända arbetstagare — finns en EU-mekanism för att flytta med rätten till vård: intyget S1, utfärdat av institutionen i det land som fortsätter vara behörigt. Registrerat i Portugal ger det tillgång till SNS på samma villkor som för bosatta. Det är socialförsäkringssamordning, inte en privat försäkring — vi utfärdar inte sådana intyg och ger inga råd i ärenden hos Försäkringskassan. Vi nämner det eftersom många av våra svenska kunder inte känner till det, och det ändrar hela kalkylen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="privat">
  <div class="container narrow article-body">
    <h2 id="privat">Vad en privat försäkring ger</h2>
    <p>Portugisisk privat sjukvårdsförsäkring bygger oftast på ett <strong>vårdnätverk</strong> (<em>rede convencionada</em>): inom nätverket betalar du en låg fast avgift per besök eller undersökning, utanför nätverket gäller ersättning enligt tabell, normalt med högre egen del. Nätverket är därför den första frågan vi ställer — inte priset. En försäkring med utmärkt prislista och inget sjukhus inom hundra kilometer är ingen bra försäkring.</p>
    <p>Omfattningen brukar innehålla öppenvård och diagnostik, sjukhusvård och operationer, och beroende på variant även tandvård, mödravård, fysioterapi, alternativmedicin, vård utomlands och andrahandsbedömning. Varje modul har eget årstak och egna självrisker.</p>
    <ul>
      <li><strong>Årstak (<em>capital</em>)</strong> — separat för öppenvård och sjukhusvård, ofta med olika belopp.</li>
      <li><strong>Egenavgift (<em>copagamento</em>)</strong> — belopp eller procent per besök; inom nätverket normalt litet.</li>
      <li><strong>Kvalificeringstider (<em>períodos de carência</em>)</strong> — se nedan.</li>
      <li><strong>Geografisk omfattning</strong> — om försäkringen gäller vid resor till Sverige, och i vilken form.</li>
      <li><strong>Inträdesålder och maxålder</strong> — gränserna varierar mellan bolag och är ofta avgörande.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="internationell">
  <div class="container narrow article-body">
    <h2 id="internationell">Lokal eller internationell försäkring</h2>
    <p>Den portugisiska nätverksförsäkringen är byggd för den som bor och får vård i Portugal. För familjer som delar året mellan flera länder, reser mycket eller vill kunna välja sjukhus fritt är en <strong>internationell privat sjukvårdsförsäkring</strong> ofta den mer naturliga lösningen. Skillnaderna som brukar avgöra:</p>
    <ul>
      <li><strong>Geografiskt område</strong> — Europa eller hela världen, med eller utan USA. Skyddet gäller i Portugal, i Spanien och i Sverige på samma villkor, inte bara vid akuta fall.</li>
      <li><strong>Fritt val av vårdgivare</strong> — privata sjukhus och specialister efter eget val, ofta med direktbetalning i stället för ersättning i efterhand.</li>
      <li><strong>Höga årstak</strong> — belopp som är dimensionerade för allvarlig sjukdom och kostsam behandling, inte bara för öppenvård.</li>
      <li><strong>Transport och evakuering</strong> — medicinsk transport till lämpligt sjukhus och hemtransport när det behövs.</li>
      <li><strong>Kontinuitet</strong> — försäkringen följer med om familjen flyttar vidare, utan ny hälsoprövning för varje land.</li>
    </ul>
    <p>Vilken lösning som passar beror på var familjen faktiskt lever, hur ofta ni reser och vilka vårdgivare ni vill ha tillgång till. Vi jämför omfattningen skriftligt och säger det rakt ut när en lokal försäkring räcker.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="karens">
  <div class="container narrow article-body">
    <h2 id="karens">Kvalificeringstider, hälsoprövning och befintliga besvär</h2>
    <h3>Kvalificeringstider</h3>
    <p>Nästan varje portugisisk sjukvårdsförsäkring har kvalificeringstider: perioder från tecknandet under vilka vissa förmåner ännu inte är tillgängliga. Typiskt kortast för konsultationer, längre för planerade ingrepp, längst för mödravård. De exakta längderna beror på bolag och variant och står i villkoren — vi lämnar dem alltid skriftligt före tecknandet, eftersom de avgör om försäkringen är meningsfull just nu.</p>
    <h3>Hälsoprövning (<em>questionário clínico</em>)</h3>
    <p>Vid tecknandet fyller du i en hälsodeklaration. Ibland krävs också journalunderlag eller undersökning. Utifrån det beslutar bolaget: antagande på normala villkor, antagande med undantag för vissa åkommor, antagande med förhöjd premie, eller avslag. Vi påverkar inte det beslutet och lovar inget om utfallet.</p>
    <div class="callout">
      <span class="callout-label">Det viktigaste på den här sidan</span>
      Besvär och sjukdomar som finns innan försäkringen tecknas (<em>doenças pré-existentes</em>) är i portugisiska sjukvårdsförsäkringar <strong>normalt undantagna</strong>. Det finns varianter och gruppupplägg där en del av dem kan komma att omfattas efter en viss tid eller efter individuell prövning — det beror på bolag, variant och prövningens utfall, och är aldrig avgjort på förhand. Samtidigt är utelämnade uppgifter i hälsodeklarationen den snabbaste vägen till avslag vid skada. Vi svarar sanningsenligt och tar reda på vilken omfattning som faktiskt är möjlig.
    </div>
    <h3>Därför spelar åldern så stor roll</h3>
    <p>Premien stiger med åldern, och över vissa gränser tecknar en del bolag inte nya försäkringar alls. Till det kommer något enklare: desto senare man tecknar, desto större är sannolikheten att något redan är diagnostiserat och därmed blir ett befintligt besvär. En 60-åring med god hälsa har normalt en öppen marknad. Samma person två år och en diagnos senare har det inte nödvändigtvis.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="familj">
  <div class="container narrow article-body">
    <h2 id="familj">Familjeförsäkring</h2>
    <p>En familjeförsäkring omfattar normalt makar eller partner samt barn upp till en viss ålder, ofta med rabatt för antalet personer. Det som får störst praktisk betydelse:</p>
    <ul>
      <li><strong>Varje person hälsoprövas separat.</strong> Det är fullt möjligt att en antas på normala villkor och en annan med undantag för en bestämd åkomma.</li>
      <li><strong>Barn</strong> — kontrollera om vaccinationer, kontroller och tandvård ingår, och till vilken ålder barnet står kvar på familjeförsäkringen.</li>
      <li><strong>Mödravård</strong> har normalt den längsta kvalificeringstiden. Familjeplanering är ett av få tillfällen där tecknandedatumet måste räknas på riktigt.</li>
      <li><strong>Skola och förskola</strong> begär ibland försäkringsbevis; en privat försäkring räcker normalt, men kraven sätts av verksamheten.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="uppehallstillstand">
  <div class="container narrow article-body">
    <h2 id="uppehallstillstand">Försäkring och uppehållsärenden</h2>
    <p>En mycket vanlig fråga, där svaret måste vara försiktigt. <strong>Vi kan inte bekräfta att en försäkring uppfyller kraven i ett enskilt uppehålls- eller visumärende.</strong> Kraven sätts av myndigheterna, varierar med ansökningstyp och sökandens situation, och kan ändras. Bedömningen görs av myndigheten, och tolkningen av regelverket av ett juridiskt ombud.</p>
    <p>Vad vi kan göra: ordna en sjukvårdsförsäkring med bestämd omfattning, belopp och geografiskt område, och lämna försäkringsdokumentation och bekräftelse skriftligt, på engelska. Anger ditt ombud en minsta omfattning anpassar vi offerten till det kravet och markerar tydligt vad försäkringen täcker och inte.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="checklista">
  <div class="container narrow article-body">
    <h2 id="checklista">Checklista</h2>
    <ol class="process-steps">
      <li><div><strong>Registrering i SNS</strong><span> gjord eller planerad: <em>centro de saúde</em>, <em>número de utente</em>.</span></div></li>
      <li><div><strong>Din svenska situation</strong><span> klarlagd skriftligt hos Försäkringskassan; kontrollerat om S1 gäller dig.</span></div></li>
      <li><div><strong>Vårdnätverket</strong><span> innehåller sjukhus och mottagningar på rimligt avstånd från hemmet.</span></div></li>
      <li><div><strong>Kvalificeringstiderna</strong><span> kända för varje förmån som betyder något — särskilt vid planerade ingrepp eller graviditet.</span></div></li>
      <li><div><strong>Hälsodeklarationen</strong><span> ifylld sanningsenligt; bolagets beslut skriftligt innan försäkringen startar.</span></div></li>
      <li><div><strong>Årstak och egenavgifter</strong><span> förstådda separat för öppenvård och sjukhusvård.</span></div></li>
      <li><div><strong>Resor till Sverige</strong><span>: du vet om och hur försäkringen gäller utanför Portugal.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Sjukvårdsförsäkring i Portugal — frågor',
  faq: [
    {
      q: 'Har jag rätt till offentlig vård som bosatt i Portugal?',
      a: '<p>Den som är lagligt bosatt kan registrera sig i SNS på vårdcentralen för sin adress och få ett <em>número de utente</em>. Vilka handlingar som krävs varierar något mellan vårdcentraler; normalt NIF, legitimation, adressbevis och uppehållshandling. Villkoren för tillgång sätts av myndigheterna, inte av försäkringsbolaget.</p>',
    },
    {
      q: 'Täcker en privat försäkring en sjukdom jag redan har?',
      a: '<p>Normalt inte — besvär som finns före tecknandet är oftast undantagna i portugisiska sjukvårdsförsäkringar. I vissa varianter och gruppupplägg kan en del omfattas efter en viss tid eller efter individuell prövning, men det beror på bolag och variant och är aldrig garanterat. Vi fyller alltid i hälsodeklarationen sanningsenligt och söker den omfattning som faktiskt är möjlig.</p>',
    },
    {
      q: 'Räcker EU-kortet efter flytten?',
      a: '<p>Nej. EU-kortet gäller tillfällig vistelse, inte den som har flyttat sin bosättning. Efter flytten är grunden registrering i SNS som bosatt, och i vissa fall — exempelvis pensionärer med svensk pension — EU-intyget S1.</p>',
    },
    {
      q: 'Hur långa är kvalificeringstiderna?',
      a: '<p>De varierar mellan bolag och varianter: kortast för konsultationer, längre för planerade ingrepp, längst för mödravård. De exakta längderna står i villkoren för den enskilda offerten och vi lämnar dem skriftligt före tecknandet.</p>',
    },
    {
      q: 'Behöver jag en privat försäkring om jag är registrerad i SNS?',
      a: '<p>Det är inget antingen-eller. SNS ger tillgång till vård, inklusive akut. En privat försäkring ger kortare väntetid till konsultation och diagnostik och möjlighet att välja mottagning. De flesta av våra kunder använder båda parallellt, och för familjer som lever i flera länder är det ofta en internationell försäkring som ger den största skillnaden.</p>',
    },
    {
      q: 'När är en internationell försäkring bättre än en portugisisk?',
      a: '<p>När familjen bor i flera länder, reser ofta, vill ha vård i Sverige eller Spanien på samma villkor som i Portugal eller vill välja sjukhus fritt. En portugisisk nätverksförsäkring är byggd för vård i Portugal; en internationell försäkring har ett bredare geografiskt område, högre årstak och följer med om ni flyttar vidare. Vi jämför de två skriftligt utifrån hur ni faktiskt lever.</p>',
    },
    {
      q: 'Gäller försäkringen när jag reser till Sverige?',
      a: '<p>Det beror på den geografiska omfattningen. En del portugisiska sjukvårdsförsäkringar täcker vård utomlands mot ersättning i efterhand, andra begränsar sig till akuta fall och några gäller bara i Portugal. Det är en av de första frågorna vi ställer, eftersom den är avgörande för den som reser till Sverige regelbundet.</p>',
    },
  ],
  related: [
    { url: '/se/flytta-till-portugal-forsakring/', label: 'Flytta till Portugal: försäkringar i rätt ordning' },
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
  ],
};
