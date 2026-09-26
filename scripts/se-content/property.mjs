/**
 * /se/kopa-hus-i-portugal-forsakring/
 *
 * Search intent: "köpa hus i Portugal försäkring" — the transaction timeline.
 * Per the brief this is the page where the Swedish cluster's second-home and
 * relocation weight belongs, so the buyer's two profiles (permanent move and
 * fritidshus) are both carried through — without turning the page into an
 * Algarve page.
 *
 * Swedish hooks: bostadsrätt is not fração autónoma (you own the unit here,
 * not shares in a föreningen), there is no Swedish-style besiktningsman
 * requirement, no dold-fel-försäkring equivalent, and the bank's insurance
 * requirement is met by a policy the buyer chooses — not necessarily the
 * bank's own.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'kopa-hus-i-portugal-forsakring',
  url: '/se/kopa-hus-i-portugal-forsakring/',
  cluster: 'property',
  title: 'Köpa hus i Portugal: försäkring steg för steg | Adler & Rochefort',
  description:
    'Försäkring vid köp av en värdefull bostad i Portugal: vad banken kräver, vad som gäller från kontraktsdagen, återuppbyggnadskostnaden och condomínio.',
  keywords:
    'köpa hus i Portugal försäkring, fastighetsköp Portugal, bolån Portugal försäkring, condomínio Portugal, fritidshus Portugal försäkring, escritura Portugal',
  eyebrow: 'Guide',
  h1: 'Köpa hus i Portugal: försäkringen i varje steg av köpet',
  standfirst:
    'Vid ett portugisiskt fastighetsköp kommer försäkringsfrågan i regel sist, när allt annat är avgjort — och då står banken redan med ett förslag. Här är vad som gäller när, och vilka beslut som är dina.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Köpa hus i Portugal' }],
  pullquote: 'Banken har ett berättigat intresse i att huset är försäkrat. Vilket bolag som skriver försäkringen är en annan fråga.',
  schemaType: 'Article',
  formHeading: 'Försäkring till ditt husköp',
  formBranch: 'SE · Hem',
  formSubject: 'Fastighetsköp i Portugal — försäkring',
  formCta: 'Begär en skriftlig genomgång',
  formIntro:
    'Berätta var i köpet du står och vad det är för objekt. Vi återkommer skriftligt med vad som ska vara klart till kontraktsdagen.',
  formPlaceholder:
    'Till exempel: lägenhet i Cascais, kontrakt skrivet, escritura i november, bolån hos portugisisk bank.',
  sections: `
<section class="section plain" aria-labelledby="tidslinje">
  <div class="container narrow article-body">
    <h2 id="tidslinje">Vad som gäller när</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <thead><tr><th>Steg i köpet</th><th>Försäkringsfrågan</th><th>Vem beslutar</th></tr></thead>
        <tbody>
          <tr><td>Bud och förhandling</td><td>Inget krav ännu, men fastighetens skick och byggår avgör vad som senare går att teckna.</td><td>Du</td></tr>
          <tr><td>Handpenningsavtal (<em>CPCV</em>)</td><td>Banken anger normalt vilken försäkring som ska finnas vid utbetalning. Läs den klausulen nu, inte senare.</td><td>Bank + du</td></tr>
          <tr><td>Låneutredning</td><td>Multirriscos begärs, och nästan alltid en livförsäkring kopplad till lånet.</td><td>Banken ställer kravet</td></tr>
          <tr><td>Kontraktsdagen (<em>escritura</em>)</td><td>Försäkringen ska gälla från den dagen — risken går över när du blir ägare.</td><td>Du</td></tr>
          <tr><td>Efter köpet</td><td>Lösöre, ansvarsdel, uthyrning om det är planen, och kontroll mot <em>condomínio</em>-försäkringen.</td><td>Du</td></tr>
        </tbody>
      </table>
    </div>
    <p>Den vanligaste konsekvensen av att komma in sent: du tecknar det som går snabbast, inte det som passar bäst, och lever med det i flera år eftersom ingen ser över det igen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="banken">
  <div class="container narrow article-body">
    <h2 id="banken">Vad banken kräver — och vad den inte kan kräva</h2>
    <p>Har du bolån hos en portugisisk bank kommer den att kräva försäkring, och det är sakligt motiverat: fastigheten är säkerheten för lånet.</p>
    <h3>Vad banken normalt kräver</h3>
    <ul>
      <li><strong>Multirriscos habitação</strong> på byggnaden, med banken angiven som förmånstagare i den del som svarar mot lånet.</li>
      <li><strong>Livförsäkring</strong> kopplad till lånet, ofta med hälsodeklaration och åldersgränser.</li>
      <li><strong>Ett försäkringsbelopp</strong> som minst motsvarar lånet, eller byggnadens värde enligt bankens bedömning.</li>
      <li><strong>Bevis</strong> att försäkringen gäller från kontraktsdagen.</li>
    </ul>
    <h3>Vad som är ditt beslut</h3>
    <p>Kravet är att en försäkring finns — inte att den köps av banken. En försäkring som tecknas i bankens lokal, i samma möte som lånet, är en produkt som valts för att den passar bankens process. Det gör den inte olämplig, men det betyder att omfattningen aldrig prövats mot din situation.</p>
    <div class="callout">
      <span class="callout-label">Det här är hela poängen med sidan</span>
      Vi hävdar inte att bankens försäkring är dålig. Vi säger att den valdes utan att någon ställde frågorna: är återuppbyggnadsvärdet rätt satt, ingår vattenskada i den form som spelar roll för just den här byggnaden, hur hanteras perioder då huset står tomt, finns någon ansvarsdel, och vad händer med försäkringen när lånet är löst? Vi ordnar gärna en försäkring som uppfyller bankens krav och som samtidigt är prövad mot ditt hus. Kräver banken att den skrivs hos dem hjälper vi dig läsa vad de erbjuder.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="varden">
  <div class="container narrow article-body">
    <h2 id="varden">Tre värden, och bara ett av dem är rätt i försäkringen</h2>
    <p>Under köpet möter du tre olika belopp för samma fastighet, och de sammanblandas nästan alltid:</p>
    <ul>
      <li><strong>Köpeskillingen</strong> — vad du betalade. Innehåller läget, tomten, utsikten och marknadsläget. Ingenting av det brinner.</li>
      <li><strong><em>Valor patrimonial tributário</em> (VPT)</strong> — det taxerade värdet i <em>caderneta predial</em>, underlag för fastighetsskatten IMI. Normalt betydligt lägre än marknadsvärdet och inte avsett som försäkringsbelopp.</li>
      <li><strong>Återuppbyggnadskostnaden</strong> — vad det kostar att bygga upp byggnaden igen på samma plats, i dagens byggpriser, inklusive rivning och projektering. <strong>Detta är det tal försäkringen ska bygga på.</strong></li>
    </ul>
    <p>Fel i båda riktningarna kostar. Ett för lågt belopp ger proportionell nedsättning vid skada — halva beloppet, halva ersättningen, även vid en liten skada. Ett för högt belopp ger en premie du inte får något för, eftersom ersättningen aldrig överstiger den faktiska kostnaden. Sätt återuppbyggnadskostnaden till byggnadens verkliga byggkostnad, inte till köpeskillingen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Lägenhet: <em>condomínio</em> är inte en bostadsrättsförening</h2>
    <p>Den skillnaden är större än den ser ut och förklarar de flesta missförstånd bland svenska lägenhetsköpare.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <thead><tr><th></th><th>Bostadsrätt i Sverige</th><th><em>Fração autónoma</em> i Portugal</th></tr></thead>
        <tbody>
          <tr><td>Vad du äger</td><td>Andel i föreningen med nyttjanderätt till lägenheten</td><td>Själva enheten, som fast egendom, med andel i gemensamma delar</td></tr>
          <tr><td>Byggnadens försäkring</td><td>Föreningens fastighetsförsäkring, bred</td><td><em>Seguro de condomínio</em>, ofta på lagstadgad minsta nivå (brand)</td></tr>
          <tr><td>Ditt eget behov</td><td>Hemförsäkring plus bostadsrättstillägg</td><td>Multirriscos på din enhet, inklusive det du byggt in, plus lösöre och ansvar</td></tr>
          <tr><td>Beslut om underhåll</td><td>Styrelse och stämma</td><td><em>Assembleia de condóminos</em>, med <em>administrador</em> som verkställer</td></tr>
          <tr><td>Avgift</td><td>Månadsavgift som täcker drift och lån</td><td><em>Quota de condomínio</em>, normalt bara drift och underhåll</td></tr>
        </tbody>
      </table>
    </div>
    <p>Praktisk slutsats: begär <em>condomínio</em>-försäkringens villkor innan du tecknar din egen. Utan dem gissar du på vad som redan är täckt. I många byggnader är föreningens försäkring smalare än en svensk köpare förväntar sig, och gränsen mellan gemensamt och eget löper rakt genom de installationer som oftast orsakar vattenskador.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fore">
  <div class="container narrow article-body">
    <h2 id="fore">Före köpet: vad som avgör vad du senare kan teckna</h2>
    <p>Det finns ingen portugisisk motsvarighet till den svenska överlåtelsebesiktningen med besiktningsman, och inget försäkringsupplägg som motsvarar dolda-fel-försäkring vid överlåtelse. Undersökningen är i praktiken köparens ansvar, och det som framkommer påverkar både premien och vad som alls går att teckna.</p>
    <ul>
      <li><strong>Byggår och senaste renovering</strong> — tak, el och rör är de tre poster som styr både premie och undantag.</li>
      <li><strong>Tak och avvattning</strong> — spår av tidigare fuktskada är en av de vanligaste orsakerna till att en offert villkoras.</li>
      <li><strong>Pool, stödmurar och terrasser</strong> — ingår inte automatiskt i byggnadens försäkring och kan behöva anges särskilt.</li>
      <li><strong>Avstånd till skog och vegetation</strong> — relevant i delar av landet och kan påverka villkoren.</li>
      <li><strong>Tidigare skador på fastigheten</strong> — fråga säljaren, och begär svaret skriftligt.</li>
      <li><strong>Bygglov och <em>caderneta predial</em></strong> — oregistrerade tillbyggnader är ett återkommande problem vid skada, eftersom det som inte finns i handlingarna är svårt att få ersatt.</li>
      <li><strong>Hur ofta huset kommer att stå tomt</strong> — det avgörande beslutet om fastigheten ska vara fritidshus. Se <a href="/se/hemforsakring-portugal/">hemförsäkring i Portugal</a>.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="efter">
  <div class="container narrow article-body">
    <h2 id="efter">Efter <em>escritura</em>: de fem sakerna</h2>
    <ol class="process-steps">
      <li><div><strong>Kontrollera att försäkringen gäller från kontraktsdagen</strong><span>, inte från dagen den betalades.</span></div></li>
      <li><div><strong>Lägg till lösöret</strong><span> när inredningen är på plats. Möbler, vitvaror, elektronik, cyklar och verktyg summerar snabbare än man tror.</span></div></li>
      <li><div><strong>Kontrollera ansvarsdelen</strong><span> — den finns inte automatiskt så som i den svenska hemförsäkringen.</span></div></li>
      <li><div><strong>Anmäl uthyrning</strong><span> om det är planen. En oanmäld korttidsuthyrning är ett återkommande skäl till att en skada inte ersätts. Se <a href="/se/ansvarsforsakring-portugal/">ansvarsförsäkring i Portugal</a>.</span></div></li>
      <li><div><strong>Se över beloppet årligen</strong><span> — byggkostnaderna rör sig, och indexklausulen i försäkringen följer inte alltid med verkligheten.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Köpa hus i Portugal — frågor om försäkring',
  faq: [
    {
      q: 'Måste jag teckna försäkringen hos banken som ger lånet?',
      a: '<p>Banken kräver normalt att en försäkring finns, med banken som förmånstagare i den del som svarar mot lånet. Att den ska tecknas hos banken är en annan sak. Vi ordnar en försäkring som uppfyller kravet, och om banken ändå insisterar hjälper vi dig läsa vad de erbjuder innan du skriver under.</p>',
    },
    {
      q: 'Vilket belopp ska byggnaden försäkras för?',
      a: '<p>Återuppbyggnadskostnaden — vad det kostar att bygga upp byggnaden igen i dagens byggpriser — inte köpeskillingen och inte det taxerade värdet (VPT). Ett för lågt belopp ger proportionell nedsättning vid varje skada; ett för högt ger en premie du inte får något för.</p>',
    },
    {
      q: 'När måste försäkringen börja gälla?',
      a: '<p>Från kontraktsdagen (<em>escritura</em>), när äganderätten och därmed risken går över. Har du bolån kräver banken normalt bevis på detta före utbetalning, så försäkringen bör vara klar några dagar innan.</p>',
    },
    {
      q: 'Jag köper en lägenhet — räcker <em>condomínio</em>-försäkringen?',
      a: '<p>Normalt inte. Den täcker byggnadens gemensamma delar, ofta på en begränsad nivå. Din egen enhet, det du byggt in, ditt lösöre och ditt ansvar ligger utanför. Begär föreningens villkor innan du tecknar din egen försäkring så att du inte gissar på vad som redan är täckt.</p>',
    },
    {
      q: 'Behöver huset besiktigas som i Sverige?',
      a: '<p>Det finns inget motsvarande krav och ingen etablerad marknad för överlåtelsebesiktning i svensk mening. Många köpare anlitar ändå en byggnadsingenjör eller arkitekt, och för ett äldre hus är det oftast pengar väl använda — det som framkommer påverkar både premie och vad som alls går att teckna.</p>',
    },
    {
      q: 'Vi köper ett hus vi bara använder några månader om året. Ändrar det något?',
      a: '<p>Ja, väsentligt. Perioder då fastigheten står obebodd hanteras särskilt i portugisiska villkor, ofta med krav på tillsyn eller med begränsningar för vissa skadetyper. Ange den faktiska användningen från början i stället för att beskriva huset som permanentbostad.</p>',
    },
  ],
  related: [
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
    { url: '/se/forsakringsguide-portugal/', label: 'Försäkringsguide för Portugal' },
  ],
};
