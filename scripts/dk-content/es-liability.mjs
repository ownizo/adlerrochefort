/**
 * /dk/ansvarsforsikring-spanien/
 *
 * Search intent: "ansvarsforsikring Spanien" / "hundeforsikring Spanien" — a
 * Danish household with a home in Spain, often with a pool, a dog, household
 * staff or a boat.
 *
 * The Danish angle: in Denmark liability sits inside the indboforsikring, and
 * in Spain it is often inside the seguro de hogar too (responsabilidad civil
 * familiar) — which is exactly why nobody checks the limit. The page is about
 * the limit, the geography and the Spanish rules around dogs, staff, boats
 * and letting. Legal points are kept general.
 *
 * Form: the shared short form with the liability branch preselected — the
 * Portuguese liability wizard asks for annual turnover and is written for
 * professional liability, which this page is not about.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_LIABILITY_PAGE = {
  slug: 'ansvarsforsikring-spanien',
  url: '/dk/ansvarsforsikring-spanien/',
  cluster: 'es-liability',
  title: 'Ansvarsforsikring for familien i Spanien | Adler & Rochefort',
  description:
    'Familiens ansvarsforsikring i Spanien: ansvaret i boligpolicen og dets grænser, summer i millionklassen verden over, hunde, både, husstandsansatte og udlejning.',
  keywords:
    'ansvarsforsikring Spanien, familieansvar Spanien, responsabilidad civil familiar, privatansvar Spanien, hundeforsikring Spanien, ansvarsforsikring båd Spanien, empleada de hogar forsikring, ansvar pool Spanien',
  eyebrow: 'Spanien · Familiens ansvar',
  h1: 'Ansvarsforsikring i Spanien: familiens ansvar i millionklassen',
  standfirst:
    'Ansvaret ligger ofte allerede i den spanske boligpolice — og netop derfor er der ingen, der ser på summen. For en husstand med betydelige formuer, en pool, en hund og en båd er det summen og geografien, der afgør, om dækningen holder.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Ansvarsforsikring' }],
  pullquote: 'Ansvaret er den eneste del af policen, der ikke er begrænset af, hvad du ejer — kun af den sum, du har valgt.',
  schemaType: 'Article',
  formHeading: 'Forespørgsel om ansvarsforsikring i Spanien',
  formBranch: 'DK · Ansvar',
  formSubject: 'Familiens ansvarsforsikring i Spanien',
  formCta: 'Send forespørgsel',
  formIntro:
    'Fortæl om husstanden, boligerne og det, der giver ansvar — pool, dyr, ansatte, båd, udlejning. Send gerne den nuværende boligpolice med, så svarer vi skriftligt med den sum, den faktisk har.',
  formPlaceholder:
    'For eksempel: villa med pool i Altea, to hunde, fast husassistent, en 9 meter motorbåd i Dénia, børn der studerer i London.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="boligpolicen">
  <div class="container narrow article-body">
    <h2 id="boligpolicen">Ansvaret i boligpolicen — og dets grænser</h2>
    <p>Mange spanske boligpolicer indeholder <em>responsabilidad civil familiar</em>: familiens ansvar for skade på andre personer og andres ting. Det minder om det, en dansker kender fra indboforsikringen. Forskellen ligger i detaljerne:</p>
    <ul>
      <li><strong>Summen</strong> er ofte i størrelsesordenen nogle hundrede tusinde euro. Over for et krav efter en alvorlig personskade — tabt arbejdsevne, pleje og ombygning gennem et helt liv — er det ikke meget.</li>
      <li><strong>Geografien</strong> kan være begrænset til Spanien, eller til ansvar som ejer af netop den bolig.</li>
      <li><strong>Aktiviteterne</strong> — hunde af visse racer, både, udlejning — er ofte undtaget eller skal oplyses særskilt.</li>
    </ul>
    <p>I de private client-policer, vi placerer, er familiens ansvar tegnet anderledes: <strong>summer på flere millioner euro, verden over, med forsvarsomkostninger ud over summen</strong>, for hele husstanden og alle boliger — i Spanien, i Portugal, i Danmark og hvor familien ellers opholder sig.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="situationer">
  <div class="container narrow article-body">
    <h2 id="situationer">De spanske situationer, der giver krav</h2>
    <ul>
      <li><strong>Pool.</strong> En ulykke i poolen vurderes ud fra, hvad en fornuftig ejer ville have gjort: hegn, overdækning, opsyn. Ligger poolen i en <em>comunidad</em>, er ejerforeningens ansvar og dit eget to forskellige ting.</li>
      <li><strong>Hunde.</strong> Hunde, der i Spanien regnes som potentielt farlige (<em>perros potencialmente peligrosos</em>), kræver kommunal licens og ansvarsforsikring. Dyrevelfærdsloven fra 2023 lægger op til, at alle hundeejere skal have en ansvarsforsikring; hvordan kravet gennemføres i praksis, har afhængt af supplerende regler. Kontrollér, at din police dækker din hund — og at racen ikke er undtaget.</li>
      <li><strong>Husstandsansatte.</strong> En husassistent (<em>empleada de hogar</em>) skal være tilmeldt den spanske sociale sikring fra første arbejdstime, og hendes arbejdsulykker håndteres dér. Skade, hun forvolder hos andre i arbejdet, kan dækkes af familiens ansvar afhængigt af betingelserne.</li>
      <li><strong>Både og jetski.</strong> Fritidsfartøjer med motor skal som udgangspunkt have en lovpligtig ansvarsforsikring. Den lovpligtige sum er et minimum; familiens ansvar kan supplere, men større både kræver normalt deres egen police.</li>
      <li><strong>Udlejning.</strong> Lejerne er tredjemand. En gæst, der falder på terrassen, et barn i poolen, en brand forårsaget af en lejer — udlejning skal oplyses, og ansvaret skal passe til den.</li>
      <li><strong>Vand i etagebyggeri.</strong> Den hyppigste ansvarsskade i lejligheder: vand fra din enhed hos naboen nedenunder.</li>
      <li><strong>Brand fra grunden.</strong> I baglandet kan en grund, der ikke er ryddet, eller en afbrænding give ansvar for brand hos naboerne.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="hvorfor-millioner">
  <div class="container narrow article-body">
    <h2 id="hvorfor-millioner">Hvorfor summer i millionklassen</h2>
    <p>En tingskade har et loft: værdien af det, der er gået tabt. Et erstatningskrav efter en personskade har ikke. Beløbet afhænger af skadelidtes alder, indkomst og behov for pleje — og kravet kan rejses i det land, hvor skadelidte bor, efter de regler, der gælder dér.</p>
    <p>For en husstand, der rejser, har børn på studie i udlandet og gæster fra flere lande, er det netop geografien og summen, der gør forskellen. Forsvarsomkostninger — advokater, sagkyndige, retsafgifter — kan i en omstridt sag løbe op, før der er afsagt en dom. I de policer, vi placerer, betales de ud over summen.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="erhverv">
  <div class="container narrow article-body">
    <h2 id="erhverv">Det, familiens ansvar ikke dækker</h2>
    <ul>
      <li>Skade forvoldt med vilje.</li>
      <li>Skade på din egen ejendom — det er tingforsikringen.</li>
      <li>Erhvervsaktivitet: rådgivning, konsulentarbejde, behandling eller udlejning i større omfang hører under erhvervs- eller professionsansvar, som tegnes særskilt.</li>
      <li>Bøder og strafferetlige følger.</li>
      <li>Aktiviteter, der ikke er oplyst, eller som betingelserne udtrykkeligt undtager.</li>
    </ul>
    <p>Om dækningen findes, med hvilken sum og med hvilke undtagelser, står i den enkelte police. Det er det spørgsmål, vi besvarer skriftligt, før du tegner.</p>
  </div>
</section>`, toPortugal.liability),
  faqTitle: 'Ansvarsforsikring i Spanien — spørgsmål',
  faq: [
    {
      q: 'Har jeg allerede ansvarsforsikring i min spanske husforsikring?',
      a: '<p>Ofte ja — <em>responsabilidad civil familiar</em> er med i mange spanske boligpolicer. Spørgsmålet er summen, geografien og undtagelserne. Summen er ofte nogle hundrede tusinde euro og kan være begrænset til Spanien eller til boligen. Send os policen, så svarer vi skriftligt.</p>',
    },
    {
      q: 'Skal min hund have ansvarsforsikring i Spanien?',
      a: '<p>Hunde, der regnes som potentielt farlige, kræver kommunal licens og ansvarsforsikring. Dyrevelfærdsloven fra 2023 lægger op til et krav for alle hundeejere, men gennemførelsen har afhængt af supplerende regler. Uanset kravet: kontrollér, at din police dækker din hund, og at racen ikke er undtaget.</p>',
    },
    {
      q: 'Vi har en fast husassistent. Hvad skal vi være opmærksomme på?',
      a: '<p>Hun skal være tilmeldt den spanske sociale sikring fra første arbejdstime, og hendes arbejdsulykker håndteres dér. Skade, hun forvolder hos andre i arbejdet, kan dækkes af familiens ansvar afhængigt af betingelserne. Tilmeldingen er et arbejdsgiverspørgsmål, som vi ikke rådgiver om.</p>',
    },
    {
      q: 'Dækker familiens ansvar vores båd?',
      a: '<p>Fritidsfartøjer med motor skal som udgangspunkt have deres egen lovpligtige ansvarsforsikring. Familiens ansvar kan supplere for mindre fartøjer, men større både kræver normalt en særskilt police med passende sum.</p>',
    },
    {
      q: 'Hvilken sum bør vi have?',
      a: '<p>En sum, der svarer til det værste realistiske krav, ikke til boligens værdi. De private client-policer, vi placerer, har summer på flere millioner euro, verden over, og forsvarsomkostningerne betales ud over summen.</p>',
    },
  ],
  related: [
    { url: '/dk/husforsikring-spanien/', label: 'Husforsikring i Spanien' },
    { url: '/dk/forsikring-spanien/', label: 'Forsikring i Spanien: overblik' },
  ],
};
