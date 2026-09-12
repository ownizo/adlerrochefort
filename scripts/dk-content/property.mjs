/**
 * /dk/kobe-bolig-i-portugal-forsikring/
 *
 * Search intent: "købe bolig i Portugal forsikring" — the transaction
 * timeline, for both the permanent buyer and the holiday-home buyer.
 *
 * Danish hooks: there is no Portuguese ejerskifteforsikring and no
 * tilstandsrapport requirement, so the condition survey is entirely the
 * buyer's own affair; a condomínio is not an ejerforening; and the bank's
 * insurance requirement is met by a policy the buyer chooses — not
 * necessarily the bank's own.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'kobe-bolig-i-portugal-forsikring',
  url: '/dk/kobe-bolig-i-portugal-forsikring/',
  cluster: 'property',
  title: 'Købe bolig i Portugal: forsikring trin for trin | Adler & Rochefort',
  description:
    'Forsikring ved ejendomskøb i Portugal: hvad banken kræver, hvad der gælder fra dagen for escritura, de tre tal der ikke er det samme, og hvorfor der ikke findes en ejerskifteforsikring.',
  keywords:
    'købe bolig i Portugal forsikring, ejendomskøb Portugal, boliglån Portugal forsikring, condomínio Portugal, escritura Portugal, feriebolig Portugal forsikring',
  eyebrow: 'Guide',
  h1: 'Købe bolig i Portugal: forsikringen i hvert trin af handlen',
  standfirst:
    'Ved et portugisisk boligkøb kommer forsikringsspørgsmålet som regel til sidst, når alt andet er afgjort — og på det tidspunkt står banken allerede med et forslag. Her er, hvad der gælder hvornår, og hvilke beslutninger der er dine.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Købe bolig i Portugal' }],
  pullquote: 'Banken har en legitim interesse i, at boligen er forsikret. Hvilket selskab der skriver policen, er et andet spørgsmål.',
  schemaType: 'Article',
  formHeading: 'Forsikring til dit boligkøb',
  formBranch: 'DK · Bolig',
  formSubject: 'Ejendomskøb i Portugal — forsikring',
  formCta: 'Få et tilbud',
  formIntro:
    'Fortæl, hvor i handlen du er, og hvad det er for en ejendom. Vi vender tilbage med, hvad der skal være klar til dagen for escritura.',
  formPlaceholder:
    'For eksempel: lejlighed i Cascais, kontrakt underskrevet, escritura i november, boliglån i portugisisk bank.',
  sections: `
<section class="section plain" aria-labelledby="tidslinje">
  <div class="container narrow article-body">
    <h2 id="tidslinje">Hvad der gælder hvornår</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Forsikringsspørgsmålet i hvert trin af et portugisisk boligkøb</caption>
        <thead>
          <tr><th scope="col">Trin i handlen</th><th scope="col">Forsikringsspørgsmålet</th><th scope="col">Hvem beslutter</th></tr>
        </thead>
        <tbody>
          <tr><td>Bud og forhandling</td><td>Intet krav endnu, men ejendommens stand og byggeår afgør, hvad der senere kan tegnes.</td><td>Dig</td></tr>
          <tr><td>Reservationsaftale (<em>CPCV</em>)</td><td>Banken angiver normalt, hvilken forsikring der skal foreligge ved udbetaling. Læs den klausul nu, ikke senere.</td><td>Bank + dig</td></tr>
          <tr><td>Låneansøgning</td><td>Multirriscos kræves, og næsten altid en livsforsikring knyttet til lånet.</td><td>Banken stiller kravet</td></tr>
          <tr><td>Dagen for <em>escritura</em></td><td>Policen skal gælde fra den dag — risikoen overgår, når du bliver ejer.</td><td>Dig</td></tr>
          <tr><td>Efter handlen</td><td>Indbo, ansvarsdel, udlejning hvis det er planen, og kontrol mod <em>condomínio</em>-policen.</td><td>Dig</td></tr>
        </tbody>
      </table>
    </div>
    <p>Den hyppigste konsekvens af at komme sent ind: man tegner det, der går hurtigst, ikke det der passer bedst, og lever med det i flere år, fordi ingen ser på det igen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="banken">
  <div class="container narrow article-body">
    <h2 id="banken">Hvad banken kræver — og hvad den ikke kan kræve</h2>
    <p>Har du boliglån i en portugisisk bank, vil den kræve forsikring, og det er sagligt begrundet: ejendommen er sikkerheden for lånet.</p>
    <h3>Hvad banken normalt kræver</h3>
    <ul>
      <li><strong>Multirriscos habitação</strong> på bygningen, med banken angivet som begunstiget for lånets del.</li>
      <li><strong>Livsforsikring</strong> knyttet til lånet, ofte med helbredserklæring og aldersgrænser.</li>
      <li><strong>En forsikringssum</strong>, der mindst svarer til lånet eller til bygningens værdi efter bankens vurdering.</li>
      <li><strong>Dokumentation</strong> for, at policen gælder fra dagen for <em>escritura</em>.</li>
    </ul>
    <h3>Hvad der er din beslutning</h3>
    <p>Kravet er, at en forsikring findes — ikke at den købes af banken. En police, der tegnes i banken i samme møde som lånet, er valgt, fordi den passer bankens proces. Det gør den ikke uegnet, men det betyder, at dækningen aldrig er blevet prøvet mod din situation.</p>
    <div class="callout">
      <span class="callout-label">Det er hele pointen med denne side</span>
      Vi hævder ikke, at bankens police er dårlig. Vi siger, at den blev valgt, uden at nogen stillede spørgsmålene: er genopførelsesprisen sat rigtigt, er vandskade med i den form, der betyder noget for netop denne bygning, er jordskælvsdækning med, hvordan behandles perioder uden beboelse, er der en ansvarsdel, og hvad sker der med policen, når lånet er indfriet? Vi ordner gerne en police, der opfylder bankens krav, og som samtidig er prøvet mod din bolig. Kræver banken, at den skrives hos dem, læser vi det, de tilbyder, igennem med dig.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="tal">
  <div class="container narrow article-body">
    <h2 id="tal">Tre tal, og kun ét af dem hører i policen</h2>
    <p>Under handlen møder du tre forskellige beløb for samme ejendom, og de bliver næsten altid forvekslet:</p>
    <ul>
      <li><strong>Købsprisen</strong> — hvad du betalte. Indeholder beliggenheden, grunden, udsigten og markedet. Ingen af dem brænder.</li>
      <li><strong><em>Valor patrimonial tributário</em> (VPT)</strong> — den offentlige vurdering i <em>caderneta predial</em>, grundlag for ejendomsskatten IMI. Normalt betydeligt lavere end markedsværdien og ikke beregnet som forsikringssum.</li>
      <li><strong>Genopførelsesprisen</strong> — hvad det koster at bygge bygningen op igen på samme sted, til dagens byggepriser, inklusive nedrivning og rådgivning. <strong>Det er det tal, policen skal bygge på.</strong></li>
    </ul>
    <p>Fejl i begge retninger koster. En for lav sum medfører forholdsmæssig nedsættelse ved skade — halv sum, halv erstatning, også ved en lille skade. En for høj sum giver præmie, du intet får for, fordi erstatningen aldrig overstiger den faktiske udgift. Sæt genopførelsesprisen efter bygningens reelle byggeomkostning, ikke efter købsprisen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Lejlighed: <em>condomínio</em> er ikke en ejerforening</h2>
    <p>Forskellen er større, end den ser ud, og forklarer de fleste misforståelser blandt danske lejlighedskøbere. Bed om <em>condomínio</em>-policens betingelser, før du tegner din egen — uden dem gætter du på, hvad der allerede er dækket.</p>
    <ul>
      <li><strong>Fællespolicen er ofte smallere</strong> end en dansk ejerforenings bygningsforsikring. Lovens minimum er brand; bredere dækning er et valg, foreningen skal have truffet.</li>
      <li><strong>Grænsen mellem fælles og eget</strong> løber gennem de installationer, der oftest laver vandskader. Stigstrenge kan være fælles, mens rørene inde i din enhed er dine.</li>
      <li><strong>Din enhed er fast ejendom</strong>, en <em>fração autónoma</em>, ikke en andel. Det du har bygget ind — køkken, bad, gulve — er dit at forsikre.</li>
      <li><strong>Beslutningerne træffes i <em>assembleia de condóminos</em></strong>, hvor en <em>administrador</em> udfører dem. Referaterne er værd at bede om før købet; de viser, hvad bygningen har af kendte problemer.</li>
      <li><strong><em>Quota de condomínio</em></strong> dækker typisk kun drift og vedligehold, ikke henlæggelser i dansk forstand. En større tagreparation kan derfor komme som en særskilt opkrævning.</li>
    </ul>
    <p>Se <a href="/dk/husforsikring-portugal/">husforsikring i Portugal</a> for sammenligningen i tabelform og for vandskadeafsnittet.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="foer">
  <div class="container narrow article-body">
    <h2 id="foer">Før købet: der findes ingen ejerskifteforsikring</h2>
    <p>Det er værd at sige tydeligt, fordi den danske ramme er så indgroet: Portugal har <strong>ingen tilstandsrapport, ingen elinstallationsrapport og ingen ejerskifteforsikring</strong>. Der er ingen ordning, hvor sælger kan frigøre sig for ansvaret for skjulte fejl ved at fremlægge en rapport, og ingen forsikring, køber kan tegne mod dem. Undersøgelsen er reelt købers eget ansvar, og det der kommer frem, påvirker både præmien og hvad der overhovedet kan tegnes.</p>
    <ul>
      <li><strong>Byggeår og seneste renovering</strong> — tag, el og rør er de tre poster, der styrer både præmie og undtagelser.</li>
      <li><strong>Tag og afvanding</strong> — spor af tidligere fugtskade er en af de hyppigste årsager til, at et tilbud bliver betinget.</li>
      <li><strong>Pool, støttemure og terrasser</strong> — er ikke automatisk en del af bygningsdækningen og kan skulle angives særskilt.</li>
      <li><strong>Afstand til skov og bevoksning</strong> — relevant i dele af landet og kan påvirke betingelserne.</li>
      <li><strong>Tidligere skader på ejendommen</strong> — spørg sælger, og bed om svaret skriftligt.</li>
      <li><strong>Byggetilladelser og <em>caderneta predial</em></strong> — uregistrerede tilbygninger er et tilbagevendende problem i skadesager, for det der ikke står i papirerne, er svært at få erstattet.</li>
      <li><strong>Hvor ofte boligen vil stå tom</strong> — den afgørende oplysning, hvis ejendommen skal være feriebolig.</li>
    </ul>
    <p>Mange danske købere hyrer en bygningsingeniør eller arkitekt til en gennemgang. For et ældre hus er det som regel penge godt brugt — ikke mindst fordi det er dig selv, der bærer risikoen for det, ingen så efter.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="efter">
  <div class="container narrow article-body">
    <h2 id="efter">Efter <em>escritura</em>: de fem ting</h2>
    <ol class="process-steps">
      <li><div><strong>Kontrollér, at policen gælder fra dagen for <em>escritura</em></strong><span>, ikke fra den dag den blev betalt.</span></div></li>
      <li><div><strong>Tilføj indboet</strong><span>, når boligen er indrettet. Møbler, hvidevarer, elektronik, cykler og værktøj lægger sig hurtigere sammen, end man tror.</span></div></li>
      <li><div><strong>Kontrollér ansvarsdelen</strong><span> — den er ikke automatisk med, som i den danske indboforsikring.</span></div></li>
      <li><div><strong>Oplys udlejning</strong><span>, hvis det er planen. En uoplyst korttidsudlejning er en tilbagevendende årsag til, at en skade ikke erstattes. Se <a href="/dk/ansvarsforsikring-portugal/">ansvarsforsikring i Portugal</a>.</span></div></li>
      <li><div><strong>Se summen efter én gang om året</strong><span> — byggeomkostningerne flytter sig, og indeksklausulen i policen følger ikke altid virkeligheden.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Købe bolig i Portugal — spørgsmål om forsikring',
  faq: [
    {
      q: 'Skal jeg tegne forsikringen i den bank, der giver lånet?',
      a: '<p>Banken kræver normalt, at en forsikring findes, med banken som begunstiget for lånets del. At den skal tegnes hos banken, er en anden sag. Vi ordner en police, der opfylder kravet, og hvis banken alligevel insisterer, læser vi det, de tilbyder, igennem med dig, før du skriver under.</p>',
    },
    {
      q: 'Hvilket beløb skal bygningen forsikres for?',
      a: '<p>Genopførelsesprisen — hvad det koster at bygge bygningen op igen til dagens byggepriser — ikke købsprisen og ikke den offentlige vurdering (VPT). En for lav sum medfører forholdsmæssig nedsættelse ved enhver skade; en for høj sum giver præmie uden modydelse.</p>',
    },
    {
      q: 'Hvornår skal policen begynde at gælde?',
      a: '<p>Fra dagen for <em>escritura</em>, hvor ejendomsretten og dermed risikoen overgår. Har du boliglån, kræver banken normalt dokumentation for det før udbetaling, så policen bør være på plads nogle dage før.</p>',
    },
    {
      q: 'Jeg køber en lejlighed — rækker <em>condomínio</em>-policen?',
      a: '<p>Normalt ikke. Den dækker bygningens fælles dele, ofte på et begrænset niveau. Din egen enhed, det du har bygget ind, dit indbo og dit ansvar ligger uden for. Bed om foreningens betingelser, før du tegner din egen police, så du ikke gætter på, hvad der allerede er dækket.</p>',
    },
    {
      q: 'Findes der en ejerskifteforsikring i Portugal?',
      a: '<p>Nej. Der er hverken tilstandsrapport, elinstallationsrapport eller ejerskifteforsikring i dansk forstand, og ingen ordning hvor sælger kan frigøre sig for ansvaret for skjulte fejl. Undersøgelsen er købers eget ansvar, og en bygningsgennemgang ved en ingeniør eller arkitekt er derfor som regel pengene værd på et ældre hus.</p>',
    },
    {
      q: 'Vi køber en bolig, vi kun bruger nogle måneder om året. Ændrer det noget?',
      a: '<p>Ja, væsentligt. Perioder uden beboelse behandles særskilt i portugisiske betingelser, ofte med krav om tilsyn eller med begrænsninger for bestemte skadetyper. Oplys den faktiske brug fra starten i stedet for at beskrive boligen som helårsbolig.</p>',
    },
  ],
  related: [
    { url: '/dk/husforsikring-portugal/', label: 'Husforsikring i Portugal' },
    { url: '/dk/forsikringsguide-portugal/', label: 'Forsikringsguide til Portugal' },
  ],
};
