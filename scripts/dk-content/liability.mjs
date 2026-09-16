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
  title: 'Ansvarsforsikring i Portugal for danskere | Adler & Rochefort',
  description:
    'Responsabilidade civil i Portugal: privatansvaret, der lå i din danske indboforsikring, og erhvervsansvar for konsulenter, behandlere og mindre virksomheder.',
  keywords:
    'ansvarsforsikring Portugal, responsabilidade civil Portugal, privatansvar Portugal, erhvervsansvarsforsikring Portugal, konsulent forsikring Portugal, professionelt ansvar Portugal',
  eyebrow: 'Ansvarsforsikring',
  h1: 'Ansvarsforsikring i Portugal: den dækning du har haft uden at købe den',
  standfirst:
    'I Danmark ligger ansvarsforsikringen inde i indboforsikringen. I Portugal er <em>responsabilidade civil</em> ofte et tilvalg med sin egen sum — og for erhverv en helt selvstændig police. Her er forskellen, og hvad du har brug for.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ansvarsforsikring' }],
  pullquote: 'Ansvarsdækningen er den, man aldrig tænker på — indtil den dag den er den eneste, der betyder noget.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form. Same faturacao_anual field
  // as PT/EN/DE/NL RC Profissional, and the same 48-72h SLA.
  wizard: {
    idPrefix: 'dk-rcp',
    formName: 'dk-ansvarsforsikring-wizard',
    ramo: 'Ansvarsforsikring',
    heading: 'Få et tilbud på ansvarsforsikring',
    intro: 'Udfyld det væsentligste. Vi svarer inden for 48 til 72 arbejdstimer.',
    stepLabel2: 'Aktiviteten',
    submitLabel: 'Få et tilbud',
    microNote:
      'Svar inden for 48 til 72 arbejdstimer. Dine oplysninger bruges udelukkende til at forberede tilbuddet og behandles i overensstemmelse med databeskyttelsesforordningen — se <a href="/en/privacy-policy" hreflang="en">privatlivspolitikken</a>.',
    fieldsHtml: `        <div class="contact-form-field"><label for="dk-rcp-faturacao">Årlig omsætning *</label><input type="number" id="dk-rcp-faturacao" name="faturacao_anual" placeholder="F.eks. 85000" required></div>
        <p class="wizard-helper">Aktivitetstype, ønsket forsikringssum, og om policyen kræves i henhold til en kontrakt eller en brancheorganisation, gennemgår vi i den kontakt, der følger.</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="tre-slags">
  <div class="container narrow article-body">
    <h2 id="tre-slags">Tre slags ansvar, tre forskellige policer</h2>
    <p><em>Responsabilidade civil</em> betyder erstatningsansvar — pligten til at betale for skade, du har forvoldt over for andre. På det portugisiske marked møder du begrebet i tre sammenhænge, som købes hver for sig:</p>
    <ul>
      <li><strong>Privatansvar</strong> (<em>RC familiar</em> eller <em>vida privada</em>) — skade, du, din familie eller dit husdyr forvolder over for tredjemand i det daglige. I portugisiske boligpolicer optræder det som tilvalg eller med en grundsum, der dækker ansvar knyttet til boligen.</li>
      <li><strong>Erhvervs- og professionsansvar</strong> (<em>RC profissional</em> eller <em>RC de exploração</em>) — skade, der opstår i dit arbejde: en forkert rådgivning, en overskredet frist, et uheld i dine lokaler, skade på kundens ejendom.</li>
      <li><strong>Ansvar knyttet til køretøj og ejendom</strong> — bilforsikringens ansvarsdel er lovpligtig og selvstændig; ejerens ansvar for bygningen ligger i boligpolicen, og i etagebyggeri delvis hos <em>condomínio</em>.</li>
    </ul>
    <p>Ingen af dem erstatter en anden. Vi ser ofte den situation, at nogen har både bil- og boligforsikring og alligevel står helt uden dækning for det, de arbejder med.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="privat">
  <div class="container narrow article-body">
    <h2 id="privat">Det danske hul: ansvaret, der ikke følger med</h2>
    <p>Har du haft indboforsikring i Danmark, har du haft ansvarsforsikring — og sandsynligvis aldrig tænkt over den. Det er den danske indboforsikrings konstruktion: ansvar og retshjælp ligger inde i pakken.</p>
    <p>Den portugisiske <em>multirriscos habitação</em> er bygget op om tingskaden: bygning og indbo. Ansvarsdelen findes, men som tilvalg eller med en sum, der er knyttet til boligen frem for til dig som person. Resultatet er et hul, ingen gør opmærksom på, fordi ingen af parterne i handlen ser hele din situation — banken ser lånet, mægleren ser købet, selskabet ser huset.</p>
    <h3>Situationer, hvor det bliver konkret</h3>
    <ul>
      <li>Din hund bider en forbipasserende på en gåtur uden for grunden.</li>
      <li>Dit barn ødelægger en dyr ting hjemme hos nogen andre eller ridser en bil på en legeplads.</li>
      <li>Du vælter en gående på cykel eller løbetur på strandpromenaden.</li>
      <li>En urtepotte på din altan blæser ned på en bil på gaden.</li>
      <li>Grillen på terrassen forårsager en brand, der spreder sig til naboens terrasse.</li>
    </ul>
    <p>I hvert tilfælde står spørgsmålet om erstatning til tredjemand — reparation, behandlingsudgifter, tabt indtægt — og om udgiften til at forsvare sig mod et krav. Om dækningen findes, med hvilken sum og med hvilke undtagelser, afgøres af den enkelte police, og det er det spørgsmål, vi besvarer skriftligt, før du tegner.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="erhverv">
  <div class="container narrow article-body">
    <h2 id="erhverv">Erhvervsansvar: hvem har brug for det</h2>
    <p>Mange af vores danske kunder arbejder fra Portugal på en måde, der ikke var planen, da de flyttede hertil. Et udvalg af situationer, vi håndterer løbende — som illustration, ikke som en forsikring om, at enhver sådan aktivitet kan tegnes:</p>
    <ul>
      <li><strong>Konsulenter og freelancere inden for it, teknik og marketing</strong> — fakturerer danske eller andre udenlandske kunder fra Portugal. Risikoen er økonomisk: en anbefaling, der slår fejl, et driftsstop, en forsinket leverance. Kundens kontrakt kræver ofte et bestemt forsikringsniveau, og den klausul er værd at læse, før kontrakten skrives under.</li>
      <li><strong>Fysioterapeuter, kiropraktorer og massører</strong> — fysisk behandling af klienter, ofte i egne lokaler eller ved hjemmebesøg. Her mødes to risici: behandlingsskaden og skaden i lokalet.</li>
      <li><strong>Yoga-, pilates- og wellnessaktivitet</strong> — grupper, lejede lokaler, ofte i retreatform. Udlejeren beder rutinemæssigt om forsikringsdokumentation, og deltagernes egne ulykker er et andet spørgsmål end dit ansvar.</li>
      <li><strong>Mindre virksomheder med lokaler</strong> — café, butik, salon, lille kontor. Erhvervsansvaret (<em>RC de exploração</em>) dækker den klassiske situation, at en besøgende kommer til skade hos dig, og kombineres normalt med tingforsikring på lokaler og inventar.</li>
      <li><strong>Udlejning til turister (<em>alojamento local</em>)</strong> — en almindelig plan blandt danske boligkøbere. En sædvanlig boligpolice er normalt ikke skrevet til erhvervsmæssig udlejning; aktiviteten skal oplyses til selskabet, og undtagelser for udlejningsperioder er en tilbagevendende årsag til afvisning i skadesager.</li>
      <li><strong>Revision, jura, arkitektur og andre lovregulerede fag</strong> — for visse fag følger krav om professionsansvarsforsikring af reglerne eller af fagets organisation. Hvilke krav der gælder din situation, afgøres af regelværket og din faglige organisation, ikke af os.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Vigtig afgrænsning</span>
      Vi vurderer ikke, hvilken registrering, selskabsform eller tilladelse din aktivitet kræver i Portugal, og vi kan ikke bekræfte, at en police opfylder et lovkrav eller et krav i en kundekontrakt. Det er spørgsmål til revisor, advokat eller din faglige organisation. Vi skaffer forsikringen, forklarer dækningen skriftligt på engelsk og udleverer den dokumentation, en kunde eller udlejer kan have brug for.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="undtagelser">
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

<section class="section plain" aria-labelledby="spoergsmaal">
  <div class="container narrow article-body">
    <h2 id="spoergsmaal">Hvad selskabet vil spørge om</h2>
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
      q: 'Hvilken ansvarssum bør jeg vælge?',
      a: '<p>Det afhænger af aktiviteten og af kundekontrakterne. For privatansvar er det afgørende, hvad der realistisk kan opstå — behandlingsudgifter og tabt indtægt hos tredjemand kan blive betydelige. For erhvervsansvar sætter kundens kontrakt ofte en mindstesum. Vi gennemgår niveauerne og prisforskellen mellem dem.</p>',
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
