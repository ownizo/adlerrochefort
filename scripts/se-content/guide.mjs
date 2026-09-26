/**
 * /se/forsakringsguide-portugal/
 *
 * Search intent: "försäkring Portugal" in its broadest form — the pillar page
 * for readers who do not yet know which product they need. It explains how the
 * Portuguese market works as a system (actors, documents, concepts, claims,
 * renewal) and routes to the four product pages.
 *
 * Deliberately not a summary of the other seven pages: the material here is
 * the market mechanics none of them cover, with the Swedish reference points
 * (Finansinspektionen/Konsumenternas, ARN, Försäkringsbolagens roll) named
 * where they help the reader place ASF and livro de reclamações.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'forsakringsguide-portugal',
  url: '/se/forsakringsguide-portugal/',
  cluster: 'guide',
  title: 'Försäkringsguide för Portugal | Adler & Rochefort',
  description:
    'Så fungerar försäkringsmarknaden i Portugal: aktörerna, försäkringsbrevet, begreppen, skadeanmälan och förnyelse — och sju frågor till varje förmedlare.',
  keywords:
    'försäkring Portugal, försäkringsguide Portugal, portugisiska försäkringsbolag, ASF Portugal, försäkringsförmedlare Portugal, apólice Portugal, skadeanmälan Portugal',
  eyebrow: 'Guide',
  h1: 'Försäkringsguide för Portugal: så fungerar marknaden',
  standfirst:
    'Den här sidan förklarar inte enskilda produkter utan systemet de ligger i: vem aktörerna är, vad som står i ett portugisiskt försäkringsbrev, vilka begrepp som avgör ersättningen och hur en skada faktiskt hanteras.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Försäkringsguide' }],
  pullquote: 'En försäkring prövas inte när den tecknas, utan den dag skadan inträffar — och då är det villkoren som gäller, inte broschyren.',
  schemaType: 'Article',
  formHeading: 'Ställ en fråga om försäkring i Portugal',
  formBranch: '',
  formSubject: 'Allmän fråga — försäkring i Portugal',
  formCta: 'Ställ din fråga',
  formIntro:
    'Vet du inte vilken produkt frågan handlar om är det ingen nackdel. Beskriv situationen och vi reder ut vad som är relevant.',
  formPlaceholder:
    'Till exempel: vi har haft försäkring hos en portugisisk bank i fyra år och vet inte vad den faktiskt täcker.',
  sections: `
<section class="section plain" aria-labelledby="aktorer">
  <div class="container narrow article-body">
    <h2 id="aktorer">Aktörerna, och vem som gör vad</h2>
    <ul>
      <li><strong><em>Seguradora</em> — försäkringsbolaget.</strong> Bär risken, skriver villkoren, beslutar i skadeärendet. Marknaden består av portugisiska bolag och stora internationella koncerner; ett bekant varumärke kan alltså finnas här, men produkten är en portugisisk produkt med portugisiska villkor.</li>
      <li><strong><em>Agente de seguros</em> — försäkringsagent.</strong> Förmedlar för ett eller flera bolags räkning, rådger kunden och biträder vid skada. Det är vår roll: Adler &amp; Rochefort är registrerad <em>agente de seguros</em> hos ASF under nummer 425591790/3.</li>
      <li><strong><em>Corretor</em> — försäkringsmäklare.</strong> En annan reglerad kategori av förmedlare, med en delvis annan ställning i förhållande till bolagen.</li>
      <li><strong>Banker och mäklarkontor.</strong> Förmedlar försäkring vid sidan av sin egen affär. Det är lagligt och vanligt, men urvalet är smalt och produkten är vald för att passa deras process.</li>
      <li><strong>ASF — <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>.</strong> Tillsynsmyndigheten för försäkring och pensioner, alltså den portugisiska motsvarigheten till Finansinspektionens försäkringstillsyn. Dess register över förmedlare är offentligt. Kontrollera alltid att den du anlitar finns där.</li>
    </ul>
    <p>En förmedlare kostar dig inget extra: ersättningen ligger i premien och betalas av bolaget, oavsett om du går via en förmedlare eller tecknar direkt. Skillnaden är att någon läser villkoren åt dig och biträder när det gäller.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="apolice">
  <div class="container narrow article-body">
    <h2 id="apolice">Vad ett portugisiskt försäkringsbrev består av</h2>
    <p>En <em>apólice</em> är sällan ett dokument utan tre, och de har olika rang:</p>
    <ol class="process-steps">
      <li><div><strong><em>Condições gerais</em> — allmänna villkor.</strong><span> Den tryckta grunden för produkten: definitioner, generella undantag, skyldigheter, skadeförfarande. Läses en gång, gäller hela avtalstiden.</span></div></li>
      <li><div><strong><em>Condições especiais</em> — särskilda villkor.</strong><span> Regler per moment: vad vattenskadeskyddet omfattar, hur stöld definieras, vilka undantag som gäller ansvarsdelen.</span></div></li>
      <li><div><strong><em>Condições particulares</em> — dina uppgifter.</strong><span> Försäkringstagare, objekt, försäkringsbelopp, självrisker, valda moment, premie, avtalstid. <strong>Detta är det blad som avgör din situation</strong>, och det enda som är unikt för dig.</span></div></li>
    </ol>
    <p>Vid en avvikelse mellan dokumenten går de särskilda och de personliga villkoren normalt före de allmänna. Praktisk följd: läser du bara det snygga produktbladet har du inte läst din försäkring. Vi går igenom <em>condições particulares</em> rad för rad med dig, på engelska, innan du tecknar.</p>
    <p>Försäkringsbrev utfärdas på portugisiska. Det är ett lagkrav och inte något en förmedlare kan välja bort. Vad vi kan göra är att se till att du förstår exakt vad som står — skriftligt, på engelska, före underskrift.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="begrepp">
  <div class="container narrow article-body">
    <h2 id="begrepp">Fem begrepp som avgör ersättningen</h2>
    <h3><em>Capital seguro</em> — försäkringsbelopp</h3>
    <p>Det högsta bolaget betalar för det försäkrade. På byggnad sätts det till återuppbyggnadskostnaden, på lösöre till återanskaffningsvärdet av allt du äger. Det är den enskilt viktigaste siffran i hela avtalet.</p>
    <h3><em>Regra proporcional</em> — proportionell nedsättning</h3>
    <p>Underförsäkringsregeln, och den mekanism som överraskar flest. Är beloppet satt till hälften av det verkliga värdet ersätts även en liten skada med hälften. Ingen dispens, ingen förhandling — en formel. Detta är skälet att vi bråkar om belopp i stället för om premier.</p>
    <h3><em>Franquia</em> — självrisk</h3>
    <p>Din del av varje skada. I portugisiska villkor ofta angiven i procent av försäkringsbeloppet eller av skadan, med ett minimibelopp — till skillnad från den svenska vanan med ett fast kronbelopp. En procentuell självrisk på ett dyrt objekt blir ett större tal än det ser ut på papperet.</p>
    <h3><em>Período de carência</em> — kvalificeringstid</h3>
    <p>Tid från tecknandet innan ett visst moment kan användas. Förekommer framför allt i sjukvårdsförsäkring, men även i vissa andra produkter.</p>
    <h3><em>Exclusões</em> — undantag</h3>
    <p>Det som inte omfattas. Delade i generella undantag (i de allmänna villkoren) och undantag per moment (i de särskilda). De läses före tecknandet, eftersom det är den enda tidpunkt då de går att påverka genom val av produkt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skada">
  <div class="container narrow article-body">
    <h2 id="skada">Hur ett skadeärende går</h2>
    <ol class="process-steps">
      <li><div><strong>Anmäl inom villkorens tid.</strong><span> Fristerna är korta och anges per moment — ofta några dagar, ibland åtta. Vid stöld eller skadegörelse krävs normalt polisanmälan (<em>participação</em>), och den ska göras omedelbart.</span></div></li>
      <li><div><strong>Begränsa skadan.</strong><span> Stäng av vattnet, säkra det som kan förstöras ytterligare. Det är en skyldighet i villkoren, inte en artighet.</span></div></li>
      <li><div><strong>Dokumentera.</strong><span> Bilder före något åtgärdas, kvitton, offerter, journaler. Underlag som tas fram senare är svagare underlag.</span></div></li>
      <li><div><strong>Skadereglerare (<em>peritagem</em>).</strong><span> Bolaget skickar normalt en besiktningsman. Rapporten styr utfallet, och den är alltid på portugisiska. Här biträder vi.</span></div></li>
      <li><div><strong>Beslut och ersättning.</strong><span> Ersättning i pengar eller reparation via bolagets nätverk, beroende på produkt och val.</span></div></li>
      <li><div><strong>Vid avslag eller för lågt belopp:</strong><span> begär beslutet skriftligt med hänvisning till villkorspunkt, och begär omprövning. Många ärenden vänder i det ledet, med rätt underlag.</span></div></li>
    </ol>
    <p>Går ärendet ändå inte att lösa finns <em>livro de reclamações</em> — det nationella klagomålsregistret, i elektronisk form — och därefter klagomål till ASF. Det är en annan väg än den svenska via ARN eller Konsumenternas försäkringsbyrå, och den fungerar bara på portugisiska. Vi upprättar och följer sådana ärenden åt våra kunder.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="fornyelse">
  <div class="container narrow article-body">
    <h2 id="fornyelse">Förnyelse, indexuppräkning och uppsägning</h2>
    <p>Portugisiska försäkringar löper normalt på ett år med automatisk förnyelse. Tre saker är värda uppmärksamhet:</p>
    <ul>
      <li><strong>Indexklausulen.</strong> Många försäkringar räknar upp både belopp och premie årligen enligt ett index. Bra i princip — men om uppräkningen ligger under den verkliga byggkostnadsutvecklingen glider du långsamt in i underförsäkring utan att något ser fel ut.</li>
      <li><strong>Uppsägningstiden.</strong> Uppsägning ska normalt ske skriftligt en viss tid före förnyelsedagen. Den tiden anges i villkoren. En försummad frist innebär i praktiken ett år till.</li>
      <li><strong>Premiebetalning.</strong> Uteblivet betalning kan leda till att skyddet upphör. Portugisiska bolag skickar sällan flera påminnelser, och autogiro (<em>débito direto</em>) är därför praktiskt snarare än bekvämt.</li>
    </ul>
    <p>Vår rutin med kunder: en genomgång per år av belopp, självrisker och förändringar i din situation. Inte för att byta bolag varje år, utan för att en försäkring som var rätt för tre år sedan sällan är rätt idag.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="fragor">
  <div class="container narrow article-body">
    <h2 id="fragor">Sju frågor att ställa varje förmedlare</h2>
    <p>Också oss. Får du inte klara svar bör du gå någon annanstans.</p>
    <ol class="process-steps">
      <li><div><strong>Är du registrerad hos ASF, och under vilket nummer?</strong><span> Registret är offentligt och sökbart.</span></div></li>
      <li><div><strong>Vilka bolag kan du placera hos?</strong><span> Ett enda bolag är inte diskvalificerande, men det bör sägas rakt ut.</span></div></li>
      <li><div><strong>Får jag villkoren före tecknandet, och på ett språk jag förstår?</strong><span> Vi lämnar en skriftlig genomgång på engelska.</span></div></li>
      <li><div><strong>Hur är försäkringsbeloppet beräknat?</strong><span> Kommer talet från köpeskillingen är det troligen fel.</span></div></li>
      <li><div><strong>Vilka är de tre viktigaste undantagen i just den här försäkringen?</strong><span> Kan de inte nämnas har villkoren inte lästs.</span></div></li>
      <li><div><strong>Vad händer när jag anmäler en skada — vem talar jag med?</strong><span> Svaret avgör vad rådgivningen är värd.</span></div></li>
      <li><div><strong>Hur ser du över försäkringen över tiden?</strong><span> Ett avtal som aldrig granskas blir fel av sig självt.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="produkter">
  <div class="container narrow article-body">
    <h2 id="produkter">Vidare till produkten</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/se/hemforsakring-portugal/">Hemförsäkring i Portugal</a></h3>
        <p>Byggnad och lösöre, vattenskada, seismiskt skydd, fritidshus — och det svenska paketet som inte följer med.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/sjukvardsforsakring-portugal/">Sjukvårdsförsäkring i Portugal</a></h3>
        <p>SNS, privata vårdnätverk, kvalificeringstider, hälsoprövning och vad som händer med Försäkringskassan.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/bilforsakring-portugal/">Bilförsäkring i Portugal</a></h3>
        <p>Trafik- och vagnskadeskydd, registrering, ISV och importen, samt dina skadefria år.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/ansvarsforsakring-portugal/">Ansvarsförsäkring i Portugal</a></h3>
        <p>Privat ansvar och yrkesansvar för konsulter, terapeuter och egna företagare.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/flytta-till-portugal-forsakring/">Flytta till Portugal</a></h3>
        <p>Tidsordningen, utflyttningsanmälan och de tre glappen som uppstår under en flytt.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/se/kopa-hus-i-portugal-forsakring/">Köpa hus i Portugal</a></h3>
        <p>Vad banken kräver, de tre värdena, och vad som skiljer condomínio från en bostadsrättsförening.</p>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Försäkring i Portugal — allmänna frågor',
  faq: [
    {
      q: 'Kostar det mer att gå via en förmedlare?',
      a: '<p>Nej. Ersättningen till förmedlaren ligger i premien och betalas av bolaget, oavsett om du tecknar direkt eller via förmedlare. Skillnaden är att någon läser villkoren, sätter beloppen med dig och biträder vid skada.</p>',
    },
    {
      q: 'Kan jag få försäkringsbrevet på svenska eller engelska?',
      a: '<p>Försäkringsbrev från portugisiska bolag utfärdas på portugisiska — det är ett lagkrav. Vi arbetar på engelska och lämnar en skriftlig genomgång av omfattning, belopp, självrisker och undantag på engelska före underskrift. Vi talar inte svenska.</p>',
    },
    {
      q: 'Hur kontrollerar jag att ett bolag eller en förmedlare är seriös?',
      a: '<p>Via ASF:s offentliga register över försäkringsbolag och förmedlare. Där framgår registrering, kategori och vilka grenar förmedlaren får arbeta med. Vår registrering: <em>agente de seguros</em> nr. 425591790/3.</p>',
    },
    {
      q: 'Vad gör jag om bolaget avslår min skada?',
      a: '<p>Begär beslutet skriftligt med hänvisning till den villkorspunkt det bygger på, och begär omprövning med kompletterande underlag. Går det inte finns <em>livro de reclamações</em> och klagomål till ASF. Vi upprättar och följer sådana ärenden för våra kunder.</p>',
    },
    {
      q: 'Varför är portugisiska premier ibland lägre än svenska?',
      a: '<p>Delvis lägre kostnadsnivåer, delvis en annan skadebild — men också för att omfattningen ofta är smalare. Det svenska hemförsäkringspaketet innehåller moment som i Portugal säljs separat. Jämför därför omfattning mot omfattning, inte slutsumma mot slutsumma.</p>',
    },
    {
      q: 'Kan jag behålla ett svenskt bolag för min bostad i Portugal?',
      a: '<p>I regel inte. Egendomsförsäkring skrivs normalt av ett bolag med tillstånd i det land där egendomen finns, och skaderegleringen förutsätter lokal närvaro. Ta ett skriftligt svar från ditt svenska bolag innan du utgår från att något gäller här.</p>',
    },
  ],
  related: [
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
    { url: '/se/flytta-till-portugal-forsakring/', label: 'Flytta till Portugal: försäkringar i rätt ordning' },
  ],
};
