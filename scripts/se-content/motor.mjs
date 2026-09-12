/**
 * /se/bilforsakring-portugal/
 *
 * Search intent: "bilförsäkring Portugal" — someone who either brings a
 * Swedish-registered car or buys one here.
 *
 * Swedish-specific angles: trafik/halv/helförsäkring maps onto a Portuguese
 * split that is drawn differently, the Swedish car is right-hand-traffic and
 * left-hand-drive so importing is genuinely practical (unlike for UK readers),
 * Transportstyrelsen's avregistrering and the påställning/avställning concept
 * have no Portuguese equivalent, and skadefrihetsrabatt has to be documented
 * before the Swedish policy ends. Every acceptance statement is hedged.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'bilforsakring-portugal',
  url: '/se/bilforsakring-portugal/',
  cluster: 'motor',
  title: 'Bilförsäkring i Portugal för svenskar | Adler & Rochefort',
  description:
    'Trafikförsäkring och helförsäkring i Portugal, svensk eller portugisisk registrering, ISV och importen via IMT, svenskt körkort och hur skadefrihetsrabatten behandlas.',
  keywords:
    'bilförsäkring Portugal, trafikförsäkring Portugal, ta med bilen till Portugal, importera bil Portugal ISV, svenskt körkort Portugal, skadefrihetsrabatt Portugal',
  eyebrow: 'Bilförsäkring',
  h1: 'Bilförsäkring i Portugal: registrering, omfattning och din skadehistorik',
  standfirst:
    'Frågan är sällan om du får ta med bilen, utan om det är värt det — och hur du undviker glappet mellan svensk och portugisisk registrering. Här är båda delarna, utan löften som inget bolag kan ge.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Bilförsäkring' }],
  pullquote: 'Skyddet måste löpa vidare medan registreringsskylten byts — inte efteråt.',
  schemaType: 'Article',
  formHeading: 'Begär offert på bilförsäkring',
  formBranch: 'SE · Bil',
  formSubject: 'Bilförsäkring i Portugal',
  formCta: 'Begär offert',
  formIntro:
    'Berätta om fordonet, nuvarande registrering och din tidplan — vi ordnar skyddet så att det inte uppstår något glapp.',
  formPlaceholder:
    'Till exempel: Volvo XC60 2019, svenska skyltar, planerad import i november, sju skadefria år hos svenskt bolag.',
  sections: `
<section class="section plain" aria-labelledby="omfattning">
  <div class="container narrow article-body">
    <h2 id="omfattning">Trafik, halv, hel — och hur Portugal delar upp det</h2>
    <p>Den svenska trappan trafikförsäkring → halvförsäkring → helförsäkring finns inte i samma form här. Portugal delar i stället i två grundblock och säljer resten som tillägg:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <thead><tr><th>Svensk term</th><th>Portugisisk motsvarighet</th><th>Skillnaden som märks</th></tr></thead>
        <tbody>
          <tr><td>Trafikförsäkring</td><td><em>Responsabilidade civil automóvel</em></td><td>Lagstadgad och i praktiken likvärdig: skador du orsakar på andra.</td></tr>
          <tr><td>Halvförsäkring</td><td>Inget motsvarande paket</td><td>Delarna — stöld, brand, glas, maskinskada, vägassistans — köps var för sig som tillägg.</td></tr>
          <tr><td>Helförsäkring</td><td><em>Danos próprios</em></td><td>Vagnskada på egen bil. Självrisken anges ofta som procent av fordonets värde med ett minimibelopp.</td></tr>
          <tr><td>Rättsskydd i bilförsäkringen</td><td><em>Proteção jurídica</em></td><td>Normalt ett tillval, inte automatiskt inkluderat.</td></tr>
          <tr><td>Assistans via bolaget</td><td><em>Assistência em viagem</em></td><td>Tillval med nivåer: bogsering, hemtransport, hyrbil, lånebil.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Konsekvensen: en portugisisk offert som ser billigare ut än den svenska helförsäkringen kan vara det helt riktigt — eller bara sakna tre av de saker som fanns i den svenska. Vi går igenom tilläggen ett i taget i stället för att jämföra två slutsummor.</p>
    <p>Ett par detaljer som brukar överraska: självrisken på <em>danos próprios</em> är ofta procentuell och därför högre på en dyr bil än en svensk fast självrisk, och glasruteskydd är mycket vanligt som separat tillägg med egen, låg självrisk.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skyltar">
  <div class="container narrow article-body">
    <h2 id="skyltar">Svenska eller portugisiska skyltar — och glappet mellan dem</h2>
    <p>Så länge bilen är svenskregistrerad bygger din svenska försäkring på svensk registrering och svensk bosättning. När du gjort utflyttningsanmälan stämmer inte den grunden längre med verkligheten, även om premien fortsätter dras. En portugisisk försäkring kan i sin tur normalt bara skriva en ordinarie försäkring på en portugisisk <em>matrícula</em>.</p>
    <div class="callout">
      <span class="callout-label">Det som faktiskt fungerar</span>
      Meddela ditt svenska bolag flytten med exakt datum och fråga <strong>skriftligt</strong> om och hur länge skyddet gäller efter utflyttningen. Är den tiden kortare än importprocessen — vilket den ofta är — ordnar vi skydd för mellanperioden och lägger den slutliga portugisiska försäkringens startdatum på den dag <em>matrículan</em> utfärdas. Säg aldrig upp den svenska försäkringen först och lös anslutningen sedan.
    </div>
    <p>Notera också att den svenska mekanismen med att ställa av bilen (<em>avställning</em>) inte hjälper här: en avställd bil i Sverige är inte ett fordon i trafik i Portugal, och trafikförsäkringsplikten här följer fordonet på portugisisk mark. Den formella avregistreringen hos Transportstyrelsen sker först när den portugisiska registreringen är klar.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="import">
  <div class="container narrow article-body">
    <h2 id="import">ISV och importen via IMT — översikt</h2>
    <p>Vi är försäkringsförmedlare, inte tullombud. Det här är den överblick du behöver för ditt beslut, inte en handledning. I praktiken anlitar nästan alla en <em>despachante</em> (tullombud) för genomförandet.</p>
    <h3>ISV — Imposto sobre Veículos</h3>
    <p>Den portugisiska registreringsskatten, som utgår vid första registrering i Portugal. Beräkningen vilar på två komponenter — <strong>motorvolym</strong> och <strong>koldioxidutslägg</strong> — och på resultatet tillämpas ett avdrag efter fordonets ålder. Det förklarar spännvidden: en ny, tung dieselbil kan utlösa en betydande skatt, medan en äldre bensinbil i mindre klass blir jämförelsevis billig.</p>
    <p>Vid permanent flytt kan en <strong>befrielse vid bostadsbyte</strong> vara möjlig. Villkoren är strikta — bland annat hur länge du ägt fordonet före flytten och hur länge du måste behålla det efteråt — och ansökan är bunden till frister som börjar löpa med din registrering här. Den som kör först och läser på sedan är för sen. Räkna på ISV innan du bestämmer dig: för äldre bilar av vanliga modeller är det ofta billigare att sälja i Sverige och köpa här.</p>
    <h3>Stegen hos IMT</h3>
    <ol>
      <li>Tullanmälan (<em>Alfândega</em>) och avräkning av ISV, eller ansökan om befrielse.</li>
      <li>Teknisk kontroll: <em>inspeção técnica</em> för importfordon, med kontroll av EU-överensstämmelse.</li>
      <li>Homologering hos IMT och tilldelning av portugisisk registreringsskylt.</li>
      <li>Utfärdande av <em>Documento Único Automóvel</em>, fordonets registreringsbevis.</li>
    </ol>
    <p>När <em>matrículan</em> är klar startar den portugisiska försäkringen. Det är där skyddet blir definitivt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skadehistorik">
  <div class="container narrow article-body">
    <h2 id="skadehistorik">Din svenska skadefrihetsrabatt</h2>
    <p>Skadefria år hos ett svenskt bolag är ekonomiskt värdefulla även här — men ett portugisiskt bolags erkännande av dem är <strong>inte garanterat</strong> och beror på bolaget. Vi kan inte utfästa att varje bolag räknar dem fullt ut.</p>
    <p>Vad du bör göra: begär ett <strong>skriftligt intyg om skadefria år från ditt svenska bolag innan avtalet upphör</strong>, helst på engelska, med antal år, försäkringstagare, fordon och eventuella skador. I efterhand är underlaget svårt eller omöjligt att få fram, och utan det förhandlar vi från en klart svagare position.</p>
    <p>Byter du i stället till en nyköpt bil här och saknar intyg börjar du normalt på bolagets ingångsnivå. Det är inget hinder — men det märks på premien de första åren, vilket är ett skäl att ordna intyget i tid.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="korkort">
  <div class="container narrow article-body">
    <h2 id="korkort">Ditt svenska körkort</h2>
    <p>Det svenska körkortet är ett EU-körkort och giltigt för att köra i Portugal; något byte behövs inte för själva körningen. Som bosatt registrerar du ditt EU-körkort hos <strong>IMT</strong> — det är inte ett byte, du behåller ditt kort, utan en registrering med en frist som räknas från din uppehållsregistrering.</p>
    <p>Varför detta står på en försäkringssida: vid skada kontrolleras om föraren var behörig. Ett giltigt men oregistrerat körkort är normalt inget hinder för ersättning, men det är precis den sorts administrativa lösa ände som fördröjer en skadereglering när det brådskar. Går ditt körkort ut medan du bor här förnyas det inte längre i Sverige utan hos IMT.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skada">
  <div class="container narrow article-body">
    <h2 id="skada">Vid en olycka: <em>Declaração Amigável</em></h2>
    <p>Portugals motsvarighet till den europeiska skadeanmälan heter <em>Declaração Amigável de Acidente Automóvel</em> och ska ligga i bilen. Den är tvåspråkig i sin uppställning men ifylls på portugisiska, och den ifyllda blanketten styr i praktiken hur ansvaret bedöms.</p>
    <ol class="process-steps">
      <li><div><strong>Säkra platsen</strong><span> och tillkalla myndighet om någon skadats eller parterna är oense. Vid personskada, ring 112.</span></div></li>
      <li><div><strong>Fyll i blanketten tillsammans</strong><span> med motparten — skiss, kryssrutor, registreringsnummer, försäkringsbolag och båda underskrifterna. Skriv under bara det du är införstådd med.</span></div></li>
      <li><div><strong>Fotografera</strong><span> fordonens placering före flytt, skadorna, skyltarna och vägmärkena.</span></div></li>
      <li><div><strong>Anmäl inom den tid villkoren anger</strong><span>, normalt några få dagar. Ring oss — vi anmäler åt dig och följer ärendet.</span></div></li>
      <li><div><strong>Verkstad:</strong><span> kontrollera om försäkringen kräver verkstad inom bolagets nätverk innan reparationen beställs.</span></div></li>
    </ol>
    <p>Har du inte blanketten i bilen: dokumentera ändå allt med bilder och anteckningar och kontakta oss samma dag.</p>
  </div>
</section>`,
  faqTitle: 'Bilförsäkring i Portugal — frågor',
  faq: [
    {
      q: 'Kan jag försäkra min svenskregistrerade bil i Portugal?',
      a: '<p>Medan bilen fortfarande har svenska skyltar ordnas skyddet normalt via ditt svenska bolag, med skriftlig bekräftelse på hur länge det gäller efter utflyttningen. En ordinarie portugisisk försäkring förutsätter i regel en portugisisk registreringsskylt.</p>',
    },
    {
      q: 'Måste jag registrera om bilen?',
      a: '<p>Inte omedelbart, men vid permanent bosättning normalt ja. Vägen går via tullanmälan och ISV (eller befrielse vid bostadsbyte), teknisk kontroll och homologering hos IMT. Räkna i veckor, inte dagar, och räkna på ISV innan du bestämmer dig — för äldre bilar är det ofta billigare att sälja i Sverige.</p>',
    },
    {
      q: 'Räknas mina skadefria år från Sverige?',
      a: '<p>Möjligen, men inte garanterat — det beror på bolaget. Begär ett skriftligt intyg om skadefria år från ditt svenska bolag <em>innan</em> avtalet upphör, gärna på engelska. I efterhand är det svårt att få fram.</p>',
    },
    {
      q: 'Vad motsvarar halvförsäkring här?',
      a: '<p>Inget enskilt paket. Portugal har lagstadgad <em>responsabilidade civil</em> och vagnskadeskydd (<em>danos próprios</em>), och det som i Sverige ligger i halvförsäkringen — stöld, brand, glas, maskinskada, assistans — köps som separata tillägg. Därför jämför vi tillägg för tillägg i stället för slutsummor.</p>',
    },
    {
      q: 'Vilka handlingar behövs?',
      a: '<p>Bland annat registreringsbevis, skriftligt intyg om skadefria år från det svenska bolaget, din uppehållsregistrering och NIF samt — vid import — tull- och IMT-handlingarna. Vi ger dig den fullständiga listan för ditt fall.</p>',
    },
    {
      q: 'Behöver jag byta mitt körkort?',
      a: '<p>Nej, det svenska EU-körkortet är giltigt för att köra. Som bosatt registrerar du det hos IMT inom den frist som räknas från uppehållsregistreringen; du behåller ditt kort. Förnyelse sker därefter hos IMT, inte i Sverige.</p>',
    },
  ],
  related: [
    { url: '/se/flytta-till-portugal-forsakring/', label: 'Flytta till Portugal: försäkringar i rätt ordning' },
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
  ],
};
