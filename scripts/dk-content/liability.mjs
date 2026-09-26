/**
 * /dk/ansvarsforsikring-portugal/
 *
 * Search intent: "ansvarsforsikring Portugal" — both the private liability a
 * Dane assumes is automatic (because in Denmark it sits inside the
 * indboforsikring, alongside retshjælp) and professional liability for the
 * consultant/therapist/small-business readers the brief names.
 *
 * Examples are illustrative of situations we handle, not coverage promises,
 * and the page says plainly that we do not advise on Portuguese company
 * registration or on whether a policy satisfies a legal requirement.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const LIABILITY_PAGE = {
  slug: 'ansvarsforsikring-portugal',
  url: '/dk/ansvarsforsikring-portugal/',
  cluster: 'liability',
  title: 'Ansvarsforsikring for familien i Portugal | Adler & Rochefort',
  description:
    'Familiens ansvarsforsikring i Portugal og Spanien: summer i millionklassen, verden over, med forsvarsomkostninger ud over summen. Erhvervsansvar tegnes særskilt.',
  keywords:
    'ansvarsforsikring Portugal, familieansvar Portugal, responsabilidade civil familiar, privatansvar Portugal, ansvarsforsikring Spanien, erhvervsansvarsforsikring Portugal, konsulent forsikring Portugal, professionelt ansvar Portugal',
  eyebrow: 'Familiens ansvar',
  h1: 'Ansvarsforsikring i Portugal: familiens ansvar i millionklassen',
  standfirst:
    'En tingskade har et loft — værdien af det, du ejer. Et erstatningskrav har ikke. I Danmark lå ansvarsforsikringen inde i indboet; i Portugal skal den vælges, og summen skal passe til husstanden. Erhvervsansvar er en helt selvstændig police.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ansvarsforsikring' }],
  pullquote: 'Alle andre dele af policen er begrænset af værdien af noget, du ejer. Ansvaret er kun begrænset af den sum, du har valgt.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form. Same faturacao_anual field
  // as PT/EN/DE/NL RC Profissional, and the same 48-72h SLA.
  wizard: {
    idPrefix: 'dk-rcp',
    formName: 'dk-ansvarsforsikring-wizard',
    ramo: 'Ansvarsforsikring',
    heading: 'Forespørgsel om ansvarsforsikring',
    intro: 'Udfyld det væsentligste. Vi svarer inden for 48 til 72 arbejdstimer.',
    stepLabel2: 'Aktiviteten',
    submitLabel: 'Send forespørgsel',
    microNote:
      'Svar inden for 48 til 72 arbejdstimer. Dine oplysninger bruges udelukkende til at forberede tilbuddet og behandles i overensstemmelse med databeskyttelsesforordningen — se <a href="/en/privacy-policy" hreflang="en">privatlivspolitikken</a>.',
    fieldsHtml: `        <div class="contact-form-field"><label for="dk-rcp-faturacao">Årlig omsætning *</label><input type="number" id="dk-rcp-faturacao" name="faturacao_anual" placeholder="F.eks. 85000" required></div>
        <p class="wizard-helper">Aktivitetstype, ønsket forsikringssum, og om policen kræves i henhold til en kontrakt eller en brancheorganisation, gennemgår vi i den kontakt, der følger. Gælder forespørgslen kun familiens privatansvar, kan du angive 0 og beskrive husstanden i korrespondancen.</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="familie">
  <div class="container narrow article-body">
    <h2 id="familie">Familiens ansvar: det, policen skal kunne</h2>
    <p><em>Responsabilidade civil familiar</em> dækker, når et medlem af husstanden bliver erstatningsansvarligt for personskade eller tingskade hos andre. Policen betaler erstatningen — og udgiften til at forsvare sig mod kravet, som i en omstridt sag ofte er det største beløb i de første år.</p>
    <p>For en husstand med betydelige formuer er det de samme fire punkter, der afgør, om dækningen holder:</p>
    <ul>
      <li><strong>Summer i millionklassen.</strong> Standardpolicer i Portugal har ofte en ansvarssum i de lave hundredtusinder af euro. Over for et krav efter en alvorlig personskade — tabt arbejdsevne, pleje og ombygning gennem et helt liv — er det ikke meget. De private client-policer, vi placerer, har summer på flere millioner euro.</li>
      <li><strong>Verden over.</strong> Dækningen følger familien — på rejse, i en anden bolig, i skole eller på studie i udlandet — ikke kun inden for matriklen.</li>
      <li><strong>Forsvarsomkostninger ud over summen.</strong> Advokat, sagkyndige og retsomkostninger betales ud over forsikringssummen og trækkes ikke fra den.</li>
      <li><strong>Alle boliger og hele husstanden.</strong> Som ejer, lejer eller bruger, i Portugal, i Spanien eller hvor familien ellers har bolig — og for ægtefælle eller samlever, børn, herunder børn der studerer ude, og personer, der lejlighedsvis passer jeres dyr.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="privat">
  <div class="container narrow article-body">
    <h2 id="privat">Det danske hul: ansvaret, der ikke følger med</h2>
    <p>Har du haft indboforsikring i Danmark, har du haft ansvarsforsikring — og sandsynligvis aldrig tænkt over den. Det er den danske indboforsikrings konstruktion: ansvar og retshjælp ligger inde i pakken.</p>
    <p>Den portugisiske <em>multirriscos habitação</em> er bygget op om tingskaden: bygning og indbo. Ansvarsdelen findes, men som tilvalg eller med en sum, der er knyttet til boligen frem for til dig som person. Resultatet er et hul, ingen gør opmærksom på, fordi ingen af parterne i handlen ser hele din situation — banken ser lånet, ejendomsmægleren ser købet, selskabet ser huset.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="hvor">
  <div class="container narrow article-body">
    <h2 id="hvor">Hvor store husstande får krav</h2>
    <p>Situationerne er almindelige, og det er netop pointen. Næsten ingen af dem kræver, at noget usædvanligt sker:</p>
    <ul>
      <li><strong>Pool og vandanlæg.</strong> En ulykke i poolen vurderes ud fra, hvad en fornuftig ejer ville have gjort: hegn, overdækning, opsyn og skiltning.</li>
      <li><strong>Gæster.</strong> En gæst, der falder på en terrasse eller en trappe, eller et barn, der kommer til skade under et besøg.</li>
      <li><strong>Husstandsansatte.</strong> Rengøring, gartner, chauffør eller barnepige kan forvolde skade hos tredjemand i arbejdet, og det kan ansvarsdelen dække afhængigt af betingelserne. Deres egne arbejdsskader er noget andet: i Portugal skal husstandsansatte være omfattet af den lovpligtige arbejdsskadeforsikring (<em>acidentes de trabalho</em>), en særskilt police.</li>
      <li><strong>Både, jetski og fritid.</strong> Mindre fartøjer kan være omfattet af familiens ansvar; større både kræver normalt egen ansvarsforsikring. Golf, cykling, ridning, sejlads og ski giver også krav, og nogle aktiviteter skal oplyses.</li>
      <li><strong>Vand i etagebyggeri.</strong> Den hyppigste ansvarsskade, og i en renoveret bygning er beløbene betydelige.</li>
      <li><strong>Træer, mure og skel.</strong> Væltede træer og sammenstyrtede støttemure er ejerens ansvar — og i indlandet også brand fra en grund, der ikke er ryddet.</li>
      <li><strong>Hunde og heste.</strong> Dyreholderens ansvar er strengt, og visse hunderacer er undtaget i nogle betingelser.</li>
      <li><strong>Byggearbejder.</strong> Ejeren kan blive ansvarlig for skade hos naboen fra arbejder på egen grund. Entreprenørens egen forsikring skal kontrolleres, ikke antages.</li>
    </ul>
    <p>Om dækningen findes, med hvilken sum og med hvilke undtagelser, afgøres af den enkelte police — og det er det spørgsmål, vi besvarer skriftligt, før du tegner. Send os gerne jeres nuværende police, så får I sum, undtagelser og vores anbefaling på skrift.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="erhverv">
  <div class="container narrow article-body">
    <h2 id="erhverv">Erhvervsansvar er en særskilt police</h2>
    <p>Familiens ansvarsforsikring dækker privatlivet, ikke arbejdet. Skade, der opstår i en erhvervsaktivitet — en forkert rådgivning, en overskredet frist, et uheld i dine lokaler — hører under erhvervs- eller professionsansvar (<em>RC profissional</em> eller <em>RC de exploração</em>), som tegnes for sig. Situationer, vi jævnligt håndterer — som illustration, ikke som en forsikring om, at enhver aktivitet kan tegnes:</p>
    <ul>
      <li><strong>Konsulenter, bestyrelsesmedlemmer og rådgivere</strong>, der arbejder for danske eller andre udenlandske kunder fra Portugal. Kundens kontrakt kræver ofte et bestemt forsikringsniveau.</li>
      <li><strong>Behandlere og undervisere</strong> — fysioterapi, yoga, wellness og retreats — hvor behandlingsskaden og skaden i lokalet er to forskellige risici.</li>
      <li><strong>Mindre virksomheder med lokaler</strong>, hvor erhvervsansvaret dækker den besøgende, der kommer til skade, og normalt kombineres med tingforsikring.</li>
      <li><strong>Udlejning (<em>alojamento local</em>)</strong>. En sædvanlig boligpolice er ikke skrevet til erhvervsmæssig udlejning; aktiviteten skal oplyses, og undtagelser for udlejningsperioder er en tilbagevendende årsag til afvisning.</li>
      <li><strong>Lovregulerede fag</strong>, hvor krav om professionsansvar kan følge af reglerne eller af fagets organisation.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Vigtig afgrænsning</span>
      Vi vurderer ikke, hvilken registrering, selskabsform eller tilladelse din aktivitet kræver i Portugal, og vi kan ikke bekræfte, at en police opfylder et lovkrav eller et krav i en kundekontrakt. Det er spørgsmål til revisor, advokat eller din faglige organisation. Vi skaffer forsikringen, forklarer dækningen skriftligt på engelsk og udleverer den dokumentation, en kunde eller udlejer kan have brug for.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="undtagelser">
  <div class="container narrow article-body">
    <h2 id="undtagelser">Hvad der normalt ikke er dækket</h2>
    <p>Undtagelserne varierer mellem selskaber og betingelser, men mønstrene gentager sig. En ansvarsforsikring er normalt ikke beregnet til:</p>
    <ul>
      <li>Forsætlige handlinger og skade forvoldt med vilje.</li>
      <li>Kontraktbøder, tilbagebetaling af honorar og rent kontraktuelle forpligtelser ud over erstatningsansvaret.</li>
      <li>Skade på din egen ejendom — det ligger i tingforsikringen, ikke i ansvarsdelen.</li>
      <li>Aktivitet, der ikke er oplyst til selskabet, eller som ligger uden for den beskrevne virksomhed i policen.</li>
      <li>Krav, der stammer fra forhold før policens start eller efter dens ophør — hvordan det afgrænses, afhænger af, om policen følger anmeldelses- eller skadesprincippet, og det er en af de detaljer, vi gennemgår.</li>
      <li>Bøder, administrative sanktioner og strafferetlige følger.</li>
    </ul>
    <p>At læse undtagelserne før tegningen er hele pointen med at gå gennem en formidler. Det er også det eneste tidspunkt, hvor de kan påvirkes.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="erhverv-spoergsmaal">
  <div class="container narrow article-body">
    <h2 id="erhverv-spoergsmaal">Erhvervsansvar: hvad selskabet vil spørge om</h2>
    <p>Så du kan forberede svarene i stedet for at gætte:</p>
    <ol class="process-steps">
      <li><div><strong>Beskrivelse af aktiviteten</strong><span> — hvad du faktisk gør, med dine egne ord. Grundlaget for hele vurderingen.</span></div></li>
      <li><div><strong>Omsætning</strong><span> og fordelingen mellem kundetyper og lande.</span></div></li>
      <li><div><strong>Hvor arbejdet udføres</strong><span> — hjemme, i egne lokaler, hos kunden, på afstand.</span></div></li>
      <li><div><strong>Kundernes geografi</strong><span> — især om nogen kunde er i USA eller Canada, hvilket ofte påvirker både præmie og mulighed.</span></div></li>
      <li><div><strong>Ansatte eller underleverandører</strong><span>, og hvordan de er tilknyttet virksomheden.</span></div></li>
      <li><div><strong>Faglige kvalifikationer og registrering</strong><span>, hvor aktiviteten er lovreguleret.</span></div></li>
      <li><div><strong>Skadeshistorik</strong><span> — tidligere krav eller kendte forhold, der kan føre til krav.</span></div></li>
      <li><div><strong>Ønsket ansvarssum</strong><span>, ofte styret af, hvad kundekontrakterne kræver.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Ansvarsforsikring i Portugal — spørgsmål',
  faq: [
    {
      q: 'Er ansvarsforsikringen med i boligpolicen, som i min danske indboforsikring?',
      a: '<p>Ikke på samme selvfølgelige måde. Den portugisiske <em>multirriscos habitação</em> er bygget op om bygning og indbo; ansvarsdelen findes som tilvalg eller med en sum knyttet til boligen. Vi kontrollerer, hvad der står i netop din police, og hvilken sum der gælder, før du går ud fra, at dækningen er der.</p>',
    },
    {
      q: 'Hvilken ansvarssum bør familien have?',
      a: '<p>En sum, der svarer til det værste realistiske krav, ikke til boligens værdi. Et krav efter en alvorlig personskade — tabt arbejdsevne, pleje og ombygning gennem et helt liv — kan løbe op i millioner. De private client-policer, vi placerer, har summer på flere millioner euro, verden over, og forsvarsomkostningerne betales ud over summen. For erhvervsansvar sætter kundens kontrakt ofte en mindstesum.</p>',
    },
    {
      q: 'Er vores husstandsansatte dækket?',
      a: '<p>Det er to forskellige spørgsmål. Forvolder en ansat skade hos tredjemand i arbejdet, kan familiens ansvarsdækning træde til afhængigt af betingelserne. Den ansattes egne arbejdsskader dækkes af den lovpligtige arbejdsskadeforsikring (<em>acidentes de trabalho</em>), som er en særskilt police, arbejdsgiveren skal have.</p>',
    },
    {
      q: 'Dækker familiens ansvar vores båd?',
      a: '<p>Mindre fartøjer kan være omfattet, afhængigt af betingelserne; større både og fartøjer med motor over en vis størrelse kræver normalt deres egen ansvarsforsikring. Oplys, hvad I har, så vi kan kontrollere, hvor grænsen går i netop jeres police.</p>',
    },
    {
      q: 'Jeg er it-konsulent og fakturerer fra Portugal. Hvilken forsikring er det?',
      a: '<p>Professionsansvar (<em>RC profissional</em>), der dækker økonomisk skade hos kunden som følge af dit arbejde. Bruger du underleverandører eller har ansatte, kommer erhvervsansvar normalt til. Hvad der kan tegnes, afhænger af aktivitetsbeskrivelse, omsætning og kundernes geografi.</p>',
    },
    {
      q: 'Jeg udlejer min bolig til turister. Rækker boligpolicen?',
      a: '<p>Normalt ikke uden videre. En sædvanlig boligpolice er ikke skrevet til erhvervsmæssig udlejning, og udlejningen bør oplyses til selskabet. Hvilken løsning der er mulig, afhænger af selskab, ejendom og udlejningens omfang — men gæt ikke: en uoplyst udlejning er en tilbagevendende årsag til, at en skade ikke erstattes.</p>',
    },
    {
      q: 'Er erhvervsansvarsforsikring lovpligtig i Portugal?',
      a: '<p>For visse lovregulerede fag følger kravet af reglerne eller af fagets organisation; for andre kommer kravet fra kundekontrakterne. Vi giver ikke juridisk rådgivning om, hvad der gælder din virksomhed — afklar det med revisor, advokat eller din faglige organisation, og fortæl os, hvilken sum og hvilken dækning der kræves.</p>',
    },
    {
      q: 'Dækker policen kunder i andre lande?',
      a: '<p>Den geografiske dækning står i policen. Europæisk aktivitet er oftest uproblematisk; kunder i USA og Canada behandles normalt særskilt og kan påvirke både præmie og muligheden for at tegne. Oplys kundernes lande fra starten, så dækningen svarer til virkeligheden.</p>',
    },
  ],
  related: [
    { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide til Portugal' },
    { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' },
  ],
};
