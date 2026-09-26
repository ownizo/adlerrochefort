/**
 * /dk/sundhedsforsikring-portugal/
 *
 * Search intent: "sundhedsforsikring Portugal" — a Dane working out how
 * healthcare access works here and whether private cover is needed on top.
 *
 * Danish-specific hooks: the yellow health card and sygesikringsgruppe 1 with
 * its assigned GP are the reference frame, deregistration from Folkeregisteret
 * is the event that ends Danish coverage, the blue EU card is the thing people
 * wrongly rely on, and S1 matters for pensioners. Underwriting and
 * pre-existing conditions are hedged throughout.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'sundhedsforsikring-portugal',
  url: '/dk/sundhedsforsikring-portugal/',
  cluster: 'health',
  title: 'International sundhedsforsikring i Portugal | Adler & Rochefort',
  description:
    'International privat sundhedsforsikring for familier i Portugal og Spanien: frit valg af læge, behandling i udlandet, SNS og den danske sygesikring.',
  keywords:
    'sundhedsforsikring Portugal, international sundhedsforsikring, privat sundhedsforsikring familie Portugal, privat behandling Portugal, SNS Portugal, sygesikring udland, blåt EU-sygesikringskort Portugal, S1 Portugal, udrejse Danmark sygesikring',
  eyebrow: 'International sundhedsforsikring',
  h1: 'Sundhedsforsikring i Portugal: international privat dækning for familien',
  standfirst:
    'For en familie, der lever mellem Portugal, Spanien og Danmark, handler sundhedsforsikring om frit valg af læge og hospital — også uden for Portugal. Her er, hvordan en international police fungerer, hvordan den spiller sammen med SNS, og hvad selskabet spørger om, før det tegner.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Sundhedsforsikring' }],
  pullquote: 'Sundhedsforsikring tegnes, mens man er rask. Senere køber man kun det, selskabet vælger at tilbyde.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form.
  wizard: {
    idPrefix: 'dk-sau',
    formName: 'dk-sundhedsforsikring-wizard',
    ramo: 'Sundhedsforsikring',
    heading: 'Forespørgsel om sundhedsforsikring',
    intro: 'Udfyld det væsentligste. Vi svarer inden for 24 arbejdstimer.',
    stepLabel2: 'Personer der skal forsikres',
    submitLabel: 'Send forespørgsel',
    adultBirthDate: true,
    microNote:
      'Svar inden for 24 arbejdstimer. Dine oplysninger bruges udelukkende til at forberede tilbuddet og behandles i overensstemmelse med databeskyttelsesforordningen — se <a href="/en/privacy-policy" hreflang="en">privatlivspolitikken</a>.',
    scripts: ['quote-health-persons.js'],
    fieldsHtml: `        <p class="wizard-helper" style="margin-bottom:16px;">For hver person, der skal forsikres, kræves et portugisisk skattenummer (NIF), også for børn — uden det kan der ikke udarbejdes et tilbud. Vi spørger ikke om nogen form for medicinske oplysninger her: helbredserklæringen foregår direkte med forsikringsselskabet, ved tilmeldingen.</p>
        <div data-persons-repeater>
          <div data-persons-list></div>
          <button type="button" class="wizard-nav-back" data-persons-add>+ Tilføj person</button>
        </div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="international">
  <div class="container narrow article-body">
    <h2 id="international">International sundhedsforsikring til familier</h2>
    <p>En portugisisk sundhedsforsikring er som regel bygget til ét land og ét behandlernetværk. For en familie med bolig i flere lande, børn i skole eller på studie i udlandet og jævnlige ophold i Danmark rækker det sjældent. Her er en <strong>international privat sundhedsforsikring</strong> det naturlige udgangspunkt:</p>
    <ul>
      <li><strong>Frit valg af læge og hospital</strong> — i Portugal, i Spanien og i udlandet, ikke kun inden for et lokalt netværk.</li>
      <li><strong>Høje årlige maksimumsbeløb</strong> for indlæggelse, operation og alvorlig sygdom, så dækningen ikke slipper op midt i et behandlingsforløb.</li>
      <li><strong>Geografisk område efter behov</strong> — Europa eller hele verden, med eller uden USA.</li>
      <li><strong>Evakuering og hjemtransport</strong>, når den nødvendige behandling ikke findes der, hvor man er.</li>
      <li><strong>Én police for hele familien</strong>, der følger med ved flytning mellem lande.</li>
    </ul>
    <p>Hvilken løsning der passer — international eller portugisisk, bred eller mere målrettet — afhænger af, hvor familien bor og rejser, alder og helbredsvurdering. Vi sammenligner betingelserne og giver anbefalingen skriftligt. SNS og den danske sygesikring gennemgås nedenfor, fordi de afgør, hvad den private police skal supplere.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">SNS — det portugisiske offentlige sundhedsvæsen</h2>
    <p><em>Serviço Nacional de Saúde</em> er Portugals offentlige sundhedsvæsen, tilgængeligt for den, der er lovligt bosat i landet. Adgangen får man ved at lade sig registrere på sundhedscentret (<em>centro de saúde</em>) for sin adresse — normalt med NIF, legitimation, adressedokumentation og opholdspapirer. Efter registreringen får du et <em>número de utente</em>, et patientnummer, og bliver efter kapacitet tilknyttet en <em>médico de família</em>.</p>
    <p>Logikken er velkendt for en dansker fra sygesikringsgruppe 1: den praktiserende læge er indgangen, og henvisning fører videre til speciallæge. Den praktiske forskel er, at tilknytningen til en fast læge ikke sker automatisk, og at man i nogle områder venter på den. Ventetider til speciallæge og planlagte indgreb varierer betydeligt mellem regioner og specialer.</p>
    <p>Akut behandling er tilgængelig uanset status, og egenbetalingen i SNS (<em>taxas moderadoras</em>) er lav med brede fritagelser. Det er altså ikke et system, man forsikrer sig imod — det er et system, hvis køer man vil kunne gå omkring, når noget er væsentligt men ikke akut.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="udrejse">
  <div class="container narrow article-body">
    <h2 id="udrejse">Udrejse, det blå kort og S1</h2>
    <p>Dette er den del, der oftest springes over, fordi den ser ud som en formalitet. Den afgør, om du har adgang til behandling i de første måneder.</p>
    <h3>Frameldingen af Folkeregisteret</h3>
    <p>Ved flytning til udlandet frameldes man normalt Folkeregisteret, og retten til ydelser efter den danske sygesikringslovgivning er knyttet til at være registreret som bosat i Danmark. Ved udrejse ophører den tilknytning som regel. Det er værd at få sin egen situation oplyst skriftligt hos kommunen eller Udbetaling Danmark <em>før</em> flytningen. Vi er forsikringsformidlere og fortolker ikke dansk sygesikringslovgivning; vi nævner det, fordi tidspunktet bestemmer, hvor hullet lander.</p>
    <h3>Det blå EU-sygesikringskort</h3>
    <p>Det blå kort er beregnet til <strong>midlertidigt ophold</strong> — ferie, forretningsrejse, kortere besøg. Det er ikke et grundlag for behandling for den, der har flyttet sin bopæl til et andet land. Efter flytningen til Portugal, når du ikke længere er omfattet af den danske sygesikring, udfylder kortet ikke sin funktion, selv om det ligger i tasken med gyldighed tilbage.</p>
    <h3>Blanket S1</h3>
    <p>For visse grupper — især pensionister med dansk pension og udsendte medarbejdere — findes en EU-mekanisme, hvor retten til behandling følger med: attesten S1, udstedt af institutionen i det land, der fortsat er kompetent. Registreret i Portugal giver den adgang til SNS på samme vilkår som for bosatte. Det er koordinering af social sikring, ikke en privat forsikring — vi udsteder ikke sådanne attester og rådgiver ikke i sager hos danske myndigheder. Vi nævner det, fordi mange danske pensionister ikke kender muligheden, og fordi det ændrer hele regnestykket.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="privat">
  <div class="container narrow article-body">
    <h2 id="privat">Hvad en privat police består af</h2>
    <p>Portugisisk privat sundhedsforsikring bygger oftest på et <strong>behandlernetværk</strong> (<em>rede convencionada</em>): inden for netværket betaler du en lav fast egenbetaling pr. konsultation eller undersøgelse, uden for netværket gælder refusion efter takst, normalt med større egen andel. Netværket er derfor et af de første spørgsmål, vi stiller. En police med en udmærket takstliste og intet hospital inden for hundrede kilometer er ikke en god police.</p>
    <p>Dækningen omfatter typisk konsultationer og udredning, hospitalsindlæggelse og operation, og afhængigt af variant også tandbehandling, graviditet og fødsel, fysioterapi, alternativ behandling, behandling i udlandet og second opinion. Hvert modul har sit eget årsmaksimum og sin egen egenbetaling.</p>
    <ul>
      <li><strong>Årsmaksimum (<em>capital</em>)</strong> — adskilt for ambulant og for hospital, ofte med vidt forskellige beløb.</li>
      <li><strong>Egenbetaling (<em>copagamento</em>)</strong> — beløb eller procent pr. ydelse; inden for netværket normalt lille.</li>
      <li><strong>Kvalifikationsperioder (<em>períodos de carência</em>)</strong> — se nedenfor.</li>
      <li><strong>Geografisk dækning</strong> — om policen gælder ved ophold i Danmark, og i hvilken form.</li>
      <li><strong>Optagelses- og maksimalalder</strong> — grænserne varierer mellem selskaber og er ofte afgørende.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="karens">
  <div class="container narrow article-body">
    <h2 id="karens">Kvalifikationsperioder, helbredsvurdering og eksisterende lidelser</h2>
    <h3>Kvalifikationsperioder</h3>
    <p>Næsten enhver portugisisk sundhedsforsikring har kvalifikationsperioder: perioder fra tegningen, hvor bestemte dækninger endnu ikke kan bruges. Typisk kortest for konsultationer, længere for planlagte indgreb, længst for graviditet og fødsel. De præcise længder afhænger af selskab og variant og fremgår af betingelserne — vi oplyser dem altid skriftligt før tegning, for de afgør, om policen er meningsfuld netop nu.</p>
    <h3>Helbredsvurdering (<em>questionário clínico</em>)</h3>
    <p>Ved tegningen udfylder du en helbredserklæring. Nogle gange kræves journalmateriale eller en undersøgelse. På det grundlag træffer selskabet sin beslutning: optagelse på normale vilkår, optagelse med undtagelse for bestemte lidelser, optagelse med forhøjet præmie, eller afvisning. Vi påvirker ikke den beslutning og lover intet om udfaldet.</p>
    <div class="callout">
      <span class="callout-label">Det vigtigste på denne side</span>
      Lidelser og sygdomme, der findes, før policen tegnes (<em>doenças pré-existentes</em>), er i portugisiske sundhedsforsikringer <strong>normalt undtaget</strong>. Der findes varianter og firmaordninger, hvor noget af det kan blive omfattet efter en periode eller efter individuel vurdering — det afhænger af selskab, variant og vurderingens udfald og er aldrig afgjort på forhånd. Samtidig er udeladte oplysninger i helbredserklæringen den hurtigste vej til afvisning i en skadesag. Vi svarer sandt og finder den dækning, der faktisk er mulig.
    </div>
    <h3>Derfor betyder alderen så meget</h3>
    <p>Præmien stiger med alderen, og over visse grænser tegner nogle selskaber slet ikke nye policer. Dertil kommer noget enklere: jo senere man tegner, jo større er sandsynligheden for, at noget allerede er diagnosticeret og dermed bliver en eksisterende lidelse. En rask 60-årig har normalt et åbent marked. Samme person to år og én diagnose senere har det ikke nødvendigvis.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="familie">
  <div class="container narrow article-body">
    <h2 id="familie">Familiedækning</h2>
    <p>En familiepolice dækker normalt ægtefælle eller samlever samt børn op til en bestemt alder, ofte med rabat efter antal personer. Det, der får størst praktisk betydning:</p>
    <ul>
      <li><strong>Hver person vurderes særskilt.</strong> Det er helt muligt, at én optages på normale vilkår og en anden med undtagelse for en bestemt lidelse.</li>
      <li><strong>Børn</strong> — undersøg, om vaccinationer, kontroller og tandbehandling er med, og til hvilken alder barnet kan blive på familiepolicen.</li>
      <li><strong>Graviditet og fødsel</strong> har normalt den længste kvalifikationsperiode. Familieplanlægning er et af de få tilfælde, hvor tegningsdatoen skal regnes på for alvor.</li>
      <li><strong>Skole og børnehave</strong> beder undertiden om forsikringsdokumentation; en privat police rækker normalt, men kravene fastsættes af institutionen.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="opholdstillladelse">
  <div class="container narrow article-body">
    <h2 id="opholdstillladelse">Forsikring og opholdssager</h2>
    <p>Et meget almindeligt spørgsmål, hvor svaret skal være forsigtigt. <strong>Vi kan ikke bekræfte, at en police opfylder kravene i en konkret opholds- eller visumsag.</strong> Kravene fastsættes af myndighederne, varierer efter ansøgningstype og ansøgerens situation og kan ændres. Vurderingen foretages af myndigheden, og fortolkningen af reglerne af en juridisk rådgiver.</p>
    <p>Hvad vi kan: skaffe en sundhedsforsikring med en bestemt dækning, bestemte summer og et bestemt geografisk område, og udlevere dokumentation og bekræftelse skriftligt på engelsk. Angiver din rådgiver et mindstekrav til dækningen, tilpasser vi tilbuddet til det krav og gør tydeligt opmærksom på, hvad policen dækker og ikke dækker.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="checkliste">
  <div class="container narrow article-body">
    <h2 id="checkliste">Checkliste</h2>
    <ol class="process-steps">
      <li><div><strong>Registrering i SNS</strong><span> gennemført eller planlagt: <em>centro de saúde</em>, <em>número de utente</em>.</span></div></li>
      <li><div><strong>Din danske situation</strong><span> oplyst skriftligt, og undersøgt om S1 gælder dig.</span></div></li>
      <li><div><strong>Behandlernetværket</strong><span> indeholder hospital og klinikker i rimelig afstand fra boligen.</span></div></li>
      <li><div><strong>Kvalifikationsperioderne</strong><span> kendt for hver dækning, der betyder noget — særligt ved planlagte indgreb eller graviditet.</span></div></li>
      <li><div><strong>Helbredserklæringen</strong><span> udfyldt sandt, og selskabets beslutning på skrift, før policen starter.</span></div></li>
      <li><div><strong>Årsmaksimum og egenbetaling</strong><span> forstået adskilt for ambulant og for hospital.</span></div></li>
      <li><div><strong>Ophold i Danmark</strong><span>: du ved, om og hvordan policen dækker uden for Portugal.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Sundhedsforsikring i Portugal — spørgsmål',
  faq: [
    {
      q: 'Hvad er forskellen på en international og en portugisisk sundhedsforsikring?',
      a: '<p>En portugisisk police er typisk bygget op om et lokalt behandlernetværk og dækker primært i Portugal. En international police giver frit valg af læge og hospital i flere lande, højere årlige maksimumsbeløb og ofte evakuering og hjemtransport. For familier, der lever mellem flere lande, er det som regel den mest hensigtsmæssige løsning; hvad der kan tegnes, afhænger af alder og helbredsvurdering.</p>',
    },
    {
      q: 'Har jeg ret til offentlig behandling som bosat i Portugal?',
      a: '<p>Den, der er lovligt bosat, kan lade sig registrere i SNS på sundhedscentret for sin adresse og få et <em>número de utente</em>. Hvilke dokumenter der kræves, varierer en smule mellem sundhedscentre; normalt NIF, legitimation, adressedokumentation og opholdspapirer. Betingelserne for adgang fastsættes af myndighederne, ikke af forsikringsselskabet.</p>',
    },
    {
      q: 'Dækker en privat police en sygdom, jeg allerede har?',
      a: '<p>Normalt ikke — lidelser, der findes før tegningen, er oftest undtaget i portugisiske sundhedsforsikringer. I visse varianter og firmaordninger kan noget blive omfattet efter en periode eller efter individuel vurdering, men det afhænger af selskab og variant og er aldrig garanteret. Vi udfylder altid helbredserklæringen sandt og søger den dækning, der faktisk er mulig.</p>',
    },
    {
      q: 'Kan jeg bruge det blå EU-sygesikringskort, når jeg er flyttet?',
      a: '<p>Nej. Det blå kort gælder midlertidigt ophold, ikke den, der har flyttet sin bopæl. Efter flytningen er grundlaget registrering i SNS som bosat, og i visse tilfælde — for eksempel pensionister med dansk pension — EU-attesten S1.</p>',
    },
    {
      q: 'Hvor lange er kvalifikationsperioderne?',
      a: '<p>De varierer mellem selskaber og varianter: kortest for konsultationer, længere for planlagte indgreb, længst for graviditet og fødsel. De præcise længder fremgår af betingelserne for det konkrete tilbud, og vi oplyser dem skriftligt før tegning.</p>',
    },
    {
      q: 'Har jeg brug for en privat police, når jeg er registreret i SNS?',
      a: '<p>Det er ikke et enten-eller. SNS giver adgang til behandling, herunder akut. En privat police giver kortere ventetid til konsultation og udredning og mulighed for at vælge klinik. De fleste af vores kunder bruger begge dele. For familier, der også lever og rejser uden for Portugal, er en international police med frit valg af læge og hospital ofte den mest hensigtsmæssige løsning.</p>',
    },
    {
      q: 'Dækker policen, når jeg er i Danmark?',
      a: '<p>Det afhænger af den geografiske dækning. Nogle portugisiske sundhedsforsikringer dækker behandling i udlandet mod efterfølgende refusion, andre begrænser sig til akutte tilfælde, og nogle gælder kun i Portugal. Det er et af de første spørgsmål, vi stiller, for det er afgørende for den, der rejser til Danmark regelmæssigt.</p>',
    },
  ],
  related: [
    { url: '/dk/flytte-til-portugal-forsikring/', label: 'Flytte til Portugal: forsikringerne i rigtig rækkefølge' },
    { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide til Portugal' },
  ],
};
