/**
 * /dk/bilforsikring-portugal/
 *
 * Search intent: "bilforsikring Portugal" — someone who either brings a
 * Danish-registered car or buys one here.
 *
 * Danish-specific angles: registreringsafgiften is the reference point that
 * makes ISV feel familiar but behaves differently, ansvar/delkasko/kasko maps
 * onto a Portuguese split drawn elsewhere, bonustrin and skadesattest have to
 * be documented before the Danish policy ends, and the Danish car is usually
 * worth more at home than here — so selling before the move is often the
 * better arithmetic. Acceptance statements are hedged.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'bilforsikring-portugal',
  url: '/dk/bilforsikring-portugal/',
  cluster: 'motor',
  title: 'Bilforsikring i Portugal for danskere | Adler & Rochefort',
  description:
    'Bilforsikring i Portugal for danskere: ansvar og kasko, værdifulde biler, danske eller portugisiske nummerplader, ISV og import via IMT og din skadesattest.',
  keywords:
    'bilforsikring Portugal, ansvarsforsikring bil Portugal, tage bilen til Portugal, importere bil Portugal ISV, dansk kørekort Portugal, skadesattest Portugal, bonustrin udland',
  eyebrow: 'Bilforsikring',
  h1: 'Bilforsikring i Portugal: nummerplader, dækning og din skadeshistorik',
  standfirst:
    'Spørgsmålet er sjældent, om du må tage bilen med, men om det giver mening — og hvordan du undgår hullet mellem dansk og portugisisk indregistrering. Her er begge dele, uden løfter intet selskab kan give.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Bilforsikring' }],
  pullquote: 'Dækningen skal løbe videre, mens nummerpladen skifter — ikke bagefter.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form.
  wizard: {
    idPrefix: 'dk-auto',
    formName: 'dk-bilforsikring-wizard',
    ramo: 'Bilforsikring',
    heading: 'Forespørgsel om bilforsikring',
    intro: 'Udfyld det væsentligste. Vi svarer inden for 24 arbejdstimer.',
    stepLabel2: 'Bilen',
    submitLabel: 'Send forespørgsel',
    microNote:
      'Svar inden for 24 arbejdstimer. Dine oplysninger bruges udelukkende til at forberede tilbuddet og behandles i overensstemmelse med databeskyttelsesforordningen — se <a href="/en/privacy-policy" hreflang="en">privatlivspolitikken</a>.',
    fieldsHtml: `        <div class="contact-form-field"><label for="dk-auto-matricula">Nummerplade *</label><input type="text" id="dk-auto-matricula" name="matricula" placeholder="AA-00-AA" data-validate="plate" required></div>
        <div class="contact-form-field"><label for="dk-auto-carta">Kørekortets udstedelsesdato *</label><input type="date" id="dk-auto-carta" name="data_carta" data-validate="licence-date" data-validate-ref="data_nascimento" required></div>
        <p class="wizard-helper" id="dk-auto-carta-idade-info" hidden>Det er før forsikringstagerens 16-års fødselsdag — vi accepterer det alligevel, men kontrollér venligst, at datoen er korrekt.</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="daekning">
  <div class="container narrow article-body">
    <h2 id="daekning">Ansvar, delkasko, kasko — og hvordan Portugal deler op</h2>
    <p>Den danske trappe ansvar → delkasko → kasko findes ikke i samme form. Portugal har to grundblokke og sælger resten som tilvalg:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Danske bilforsikringsbegreber og deres portugisiske modstykker</caption>
        <thead>
          <tr><th scope="col">Dansk begreb</th><th scope="col">Portugisisk modstykke</th><th scope="col">Forskellen, man mærker</th></tr>
        </thead>
        <tbody>
          <tr><td>Ansvarsforsikring</td><td><em>Responsabilidade civil automóvel</em></td><td>Lovpligtig og reelt tilsvarende: skade du forvolder på andre.</td></tr>
          <tr><td>Delkasko</td><td>Intet tilsvarende samlet produkt</td><td>Delene — tyveri, brand, glas, vejhjælp — købes hver for sig som tilvalg.</td></tr>
          <tr><td>Kasko</td><td><em>Danos próprios</em></td><td>Skade på egen bil. Selvrisikoen angives ofte i procent af bilens værdi med et minimumsbeløb.</td></tr>
          <tr><td>Retshjælp i bilforsikringen</td><td><em>Proteção jurídica</em></td><td>Normalt et tilvalg, ikke automatisk med.</td></tr>
          <tr><td>Vejhjælp via selskabet</td><td><em>Assistência em viagem</em></td><td>Tilvalg med niveauer: bugsering, hjemtransport, lejebil, lånebil.</td></tr>
          <tr><td>Friskadedækning og førerulykke</td><td>Særskilte tilvalg</td><td><em>Ocupantes</em>-dækningen for personer i bilen skal vælges aktivt.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Konsekvensen: et portugisisk tilbud, der ligner den danske kaskoforsikring, kan dække det samme — eller mangle tre af de ting, der var med hjemme. Vi gennemgår tilvalgene ét for ét og giver sammenligningen skriftligt i stedet for at stille to slutbeløb op mod hinanden.</p>
    <p>To detaljer, der plejer at overraske: selvrisikoen på <em>danos próprios</em> er ofte procentvis og derfor større på en dyr bil end en fast dansk selvrisiko, og glasdækning er meget almindelig som særskilt tilvalg med sin egen, lave selvrisiko.</p>
    <p>Ved nyere og mere værdifulde biler er det især tre ting, der skal afklares skriftligt: hvilken værdi der lægges til grund ved totalskade, om reparation sker på autoriseret værksted med originale dele, og hvordan en procentvis selvrisiko slår igennem på netop den bil.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="nummerplader">
  <div class="container narrow article-body">
    <h2 id="nummerplader">Danske eller portugisiske nummerplader — og hullet imellem</h2>
    <p>Så længe bilen er dansk indregistreret, bygger din danske forsikring på dansk indregistrering og dansk bopæl. Når du er frameldt Folkeregisteret, passer det grundlag ikke længere til virkeligheden, selv om præmien fortsat trækkes. En portugisisk forsikring kan til gengæld normalt kun tegnes som almindelig police på en portugisisk <em>matrícula</em>.</p>
    <div class="callout">
      <span class="callout-label">Det, der faktisk fungerer</span>
      Meld flytningen til dit danske selskab med præcis dato, og spørg <strong>skriftligt</strong>, om og hvor længe dækningen består efter udrejsen. Er den periode kortere end importforløbet — hvilket den ofte er — sørger vi for dækning i mellemtiden og lægger den endelige portugisiske polices startdato på den dag, <em>matrículan</em> udstedes. Opsig aldrig den danske forsikring først og find ud af tilslutningen bagefter.
    </div>
    <p>Bemærk også, at den danske mulighed for at afmelde bilen midlertidigt ikke hjælper her: en bil, der er afmeldt i Danmark, er ikke et køretøj ude af trafik i Portugal, og forsikringspligten følger køretøjet på portugisisk jord. Den endelige afmelding i Motorregisteret sker først, når den portugisiske indregistrering er på plads.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="import">
  <div class="container narrow article-body">
    <h2 id="import">ISV og importen via IMT — overblik</h2>
    <p>Vi er forsikringsformidlere, ikke speditører. Dette er det overblik, du har brug for til beslutningen, ikke en vejledning. I praksis bruger næsten alle en <em>despachante</em> (toldagent) til at gennemføre det.</p>
    <h3>ISV — Imposto sobre Veículos</h3>
    <p>Den portugisiske registreringsafgift, som forfalder ved første indregistrering i Portugal. Den danske registreringsafgift beregnes af bilens værdi; ISV gør ikke. Beregningen hviler på to komponenter — <strong>slagvolumen</strong> og <strong>CO₂-udslip</strong> — og på resultatet anvendes et nedslag efter bilens alder.</p>
    <p>Det forklarer, hvorfor regnestykket ofte falder anderledes ud, end danskere forventer. En stor, nyere dieselbil kan udløse en betydelig ISV, mens en ældre, lille benzinbil slipper forholdsvis billigt — uanset hvad bilen kostede. Til gengæld er bilpriserne i Portugal ikke belastet af dansk registreringsafgift, så en dansk bil er som regel værd mere hjemme end her. For mange er det billigere at sælge i Danmark og købe lokalt.</p>
    <p>Flytter du permanent, kan en <strong>fritagelse ved flytning af bopæl</strong> være mulig. Betingelserne er strenge — blandt andet hvor længe du har ejet bilen før flytningen, og hvor længe du skal beholde den efter — og ansøgningen er bundet til frister, der begynder at løbe med din registrering her. Den, der kører først og læser op bagefter, er for sent ude.</p>
    <h3>Trinene hos IMT</h3>
    <ol>
      <li>Toldanmeldelse (<em>Alfândega</em>) og afregning af ISV, eller ansøgning om fritagelse.</li>
      <li>Teknisk kontrol: <em>inspeção técnica</em> for importerede biler, med kontrol af EU-overensstemmelse.</li>
      <li>Homologering hos IMT og tildeling af portugisisk nummerplade.</li>
      <li>Udstedelse af <em>Documento Único Automóvel</em>, bilens registreringsattest.</li>
    </ol>
    <p>Når <em>matrículan</em> er på plads, starter den portugisiske police. Det er der, dækningen bliver endelig.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skadeshistorik">
  <div class="container narrow article-body">
    <h2 id="skadeshistorik">Dit bonustrin og din skadesattest</h2>
    <p>Skadefri år i et dansk selskab er økonomisk værdifulde også her — men et portugisisk selskabs anerkendelse af dem er <strong>ikke garanteret</strong> og afhænger af selskabet. Vi kan ikke love, at alle selskaber regner dem fuldt med.</p>
    <p>Hvad du bør gøre: bed om en <strong>skadesattest fra dit danske selskab, før aftalen ophører</strong>, gerne på engelsk, med antal skadefri år, forsikringstager, køretøj og eventuelle skader. Bagefter er dokumentationen svær eller umulig at få, og uden den forhandler vi fra en klart svagere position.</p>
    <p>Skifter du i stedet til en bil købt her og mangler attesten, starter du normalt på selskabets indgangsniveau. Det er ikke en forhindring — men det kan mærkes på præmien de første år, og det er grund nok til at skaffe attesten i tid.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="koerekort">
  <div class="container narrow article-body">
    <h2 id="koerekort">Dit danske kørekort</h2>
    <p>Det danske kørekort er et EU-kørekort og gyldigt til at køre i Portugal; der skal ikke byttes for at måtte køre. Som bosat registrerer du dit EU-kørekort hos <strong>IMT</strong> — det er ikke et bytte, du beholder dit kort, men en registrering med en frist, der regnes fra din opholdsregistrering.</p>
    <p>Hvorfor det står på en forsikringsside: i en skadesag kontrolleres det, om føreren havde førerret. Et gyldigt men uregistreret kørekort er normalt ikke en hindring for erstatning, men det er præcis den slags administrative løse ende, der forsinker en skadesag, når det skal gå hurtigt. Udløber dit kørekort, mens du bor her, fornys det ikke længere i Danmark, men hos IMT.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skade">
  <div class="container narrow article-body">
    <h2 id="skade">Ved en ulykke: <em>Declaração Amigável</em></h2>
    <p>Portugals udgave af den europæiske skadesanmeldelsesblanket hedder <em>Declaração Amigável de Acidente Automóvel</em> og bør ligge i bilen. Opstillingen er flersproget, men den udfyldes på portugisisk, og den udfyldte blanket styrer i praksis, hvordan ansvaret vurderes.</p>
    <ol class="process-steps">
      <li><div><strong>Sikr stedet</strong><span> og tilkald myndighederne, hvis nogen er kommet til skade, eller parterne er uenige. Ved personskade: ring 112.</span></div></li>
      <li><div><strong>Udfyld blanketten sammen</strong><span> med modparten — skitse, afkrydsningsfelter, nummerplader, selskaber og begge underskrifter. Skriv kun under på det, du er indforstået med.</span></div></li>
      <li><div><strong>Fotografér</strong><span> bilernes placering før de flyttes, skaderne, nummerpladerne og skiltningen.</span></div></li>
      <li><div><strong>Anmeld inden for betingelsernes frist</strong><span>, normalt få dage. Ring til os — vi anmelder for dig og følger sagen.</span></div></li>
      <li><div><strong>Værksted:</strong><span> undersøg, om policen kræver værksted inden for selskabets netværk, før reparationen bestilles.</span></div></li>
    </ol>
    <p>Har du ikke blanketten i bilen: dokumentér alligevel alt med billeder og noter, og kontakt os samme dag.</p>
  </div>
</section>`,
  faqTitle: 'Bilforsikring i Portugal — spørgsmål',
  faq: [
    {
      q: 'Kan jeg forsikre min dansk indregistrerede bil i Portugal?',
      a: '<p>Mens bilen stadig har danske nummerplader, ordnes dækningen normalt gennem dit danske selskab, med skriftlig bekræftelse på, hvor længe den gælder efter udrejsen. En almindelig portugisisk police forudsætter som regel en portugisisk nummerplade.</p>',
    },
    {
      q: 'Skal jeg indregistrere bilen i Portugal?',
      a: '<p>Ikke med det samme, men ved fast bopæl normalt ja. Vejen går via toldanmeldelse og ISV (eller fritagelse ved flytning af bopæl), teknisk kontrol og homologering hos IMT. Regn i uger, ikke dage — og regn på ISV først. En dansk bil er ofte værd mere i Danmark end her.</p>',
    },
    {
      q: 'Tæller mine skadefri år fra Danmark?',
      a: '<p>Måske, men det er ikke garanteret — det afhænger af selskabet. Bed om en skadesattest fra dit danske selskab, <em>før</em> aftalen ophører, gerne på engelsk. Bagefter er den svær at få.</p>',
    },
    {
      q: 'Hvad svarer til delkasko hernede?',
      a: '<p>Intet enkelt produkt. Portugal har lovpligtig <em>responsabilidade civil</em> og kaskodækning (<em>danos próprios</em>), mens det, der i Danmark ligger i delkaskoen — tyveri, brand, glas, vejhjælp — købes som særskilte tilvalg. Derfor sammenligner vi tilvalg for tilvalg frem for slutbeløb.</p>',
    },
    {
      q: 'Hvilke dokumenter skal jeg have?',
      a: '<p>Blandt andet registreringsattest, skadesattest fra det danske selskab, din opholdsregistrering og NIF samt — ved import — told- og IMT-dokumenterne. Vi giver dig den fulde liste for din konkrete situation.</p>',
    },
    {
      q: 'Skal jeg bytte mit kørekort?',
      a: '<p>Nej, det danske EU-kørekort er gyldigt til at køre. Som bosat registrerer du det hos IMT inden for den frist, der regnes fra opholdsregistreringen; du beholder dit kort. Fornyelse sker derefter hos IMT, ikke i Danmark.</p>',
    },
  ],
  related: [
    { url: '/dk/flytte-til-portugal-forsikring/', label: 'Flytte til Portugal: forsikringerne i rigtig rækkefølge' },
    { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' },
  ],
};
