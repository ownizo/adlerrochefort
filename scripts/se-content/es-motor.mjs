/**
 * /se/bilforsakring-spanien/ (cluster key es-motor)
 *
 * Search intent: "bilförsäkring Spanien" / "ta med bilen till Spanien" — a
 * Swede who drives down with a Swedish-registered car, buys a car locally or
 * keeps a collector car at the Spanish house.
 *
 * Swedish hooks: trafik/halv/hel mapped onto terceros/terceros ampliado/todo
 * riesgo; Swedish plates are for visitors, not residents; the Swedish
 * skadefrihetsintyg and the EU rule on claims-history statements; the Swedish
 * licence as an EU licence. Practical, but without budget framing.
 *
 * Form: shared short form, SE · Bil preselected — no Portuguese plate wizard.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_MOTOR_PAGE = {
  slug: 'bilforsakring-spanien',
  url: '/se/bilforsakring-spanien/',
  cluster: 'es-motor',
  title: 'Bilförsäkring i Spanien, även samlarbilar | Adler & Rochefort',
  description:
    'Bilförsäkring i Spanien för svenskar: obligatorisk trafikförsäkring, svensk bil till spanska skyltar, körkort, skadefri tid och samlarbilar.',
  keywords:
    'bilförsäkring Spanien, seguro de coche, seguro obligatorio Spanien, svensk bil till Spanien, spanska skyltar, matricular coche extranjero, svenskt körkort Spanien, skadefrihetsintyg Spanien, samlarbil försäkring Spanien',
  eyebrow: 'Spanien · Bilar',
  h1: 'Bilförsäkring i Spanien — från vardagsbil till samling',
  standfirst:
    'Att köra ned med den svenska bilen är enkelt. Att bo i Spanien med den är en annan sak: skyltarna, besiktningen och försäkringen ska vara spanska inom kort tid — och skyddet får inte ha något glapp medan det sker.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Försäkring i Spanien', url: '/se/forsakring-spanien/' },
    { name: 'Bilförsäkring' },
  ],
  pullquote: 'Din skadefria tid i Sverige är värd något i Spanien — men bara om du har intyget med dig.',
  schemaType: 'Article',
  formHeading: 'Begär en genomgång av bilförsäkringen i Spanien',
  formBranch: 'SE · Bil',
  formSubject: 'Bilförsäkring i Spanien',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Berätta vilken bil det gäller, var den är registrerad i dag och hur länge du har kört skadefritt. Du får ett skriftligt svar om omfattning och nästa steg.',
  formPlaceholder:
    'Till exempel: Volvo XC90 2021 på svenska skyltar som ska registreras i Spanien, 15 år skadefritt, plus en Porsche 911 från 1973 i garaget i Marbella.',
  sections: `
<section class="section plain" aria-labelledby="obligatoriskt">
  <div class="container narrow article-body">
    <h2 id="obligatoriskt">Den obligatoriska försäkringen och de tre nivåerna</h2>
    <p>I Spanien måste varje registrerat fordon ha en obligatorisk ansvarsförsäkring (<em>seguro obligatorio</em>), som ersätter person- och sakskador du orsakar andra i trafiken. Kravet gäller även när bilen står still, så länge den är registrerad och inte tillfälligt avställd. Polisen kontrollerar försäkringen elektroniskt mot ett centralt register.</p>
    <p>Ovanpå det obligatoriska skyddet bygger bolagen nivåer som liknar de svenska:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Svenska och spanska nivåer för bilförsäkring</caption>
        <thead>
          <tr><th scope="col">I Sverige</th><th scope="col">I Spanien</th><th scope="col">Normalt innehåll</th></tr>
        </thead>
        <tbody>
          <tr><td>Trafikförsäkring</td><td><em>Terceros</em></td><td>Obligatoriskt ansvar, ofta med assistans och rättsskydd.</td></tr>
          <tr><td>Halvförsäkring</td><td><em>Terceros ampliado</em></td><td>Därtill glas, stöld och brand.</td></tr>
          <tr><td>Helförsäkring</td><td><em>Todo riesgo</em></td><td>Därtill skador på egen bil, med eller utan självrisk (<em>franquicia</em>).</td></tr>
        </tbody>
      </table>
    </div>
    <p>Begreppen är desamma, men innehållet i varje nivå varierar mer mellan spanska bolag än mellan svenska. Vi jämför villkoren, inte rubrikerna.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="svensk-bil">
  <div class="container narrow article-body">
    <h2 id="svensk-bil">Svensk bil i Spanien</h2>
    <p>Som besökare kan du köra din svenskregistrerade bil i Spanien under en begränsad tid, med den svenska försäkringen och dess gröna kort. När du blir bosatt i Spanien ska bilen i stället registreras där (<em>matricular</em>) inom kort tid. Att köra vidare på svenska skyltar som bosatt är en av de vanligaste källorna till böter — och till problem med försäkringen, eftersom den svenska försäkringen utgår från att bilen är hemmahörande i Sverige.</p>
    <p>Registreringen innebär normalt:</p>
    <ol class="process-steps">
      <li><div><strong>Teknisk dokumentation</strong><span> — intyg om överensstämmelse (COC) och i vissa fall ett tekniskt utlåtande.</span></div></li>
      <li><div><strong>Besiktning (ITV)</strong><span> för import, den spanska motsvarigheten till bilbesiktningen.</span></div></li>
      <li><div><strong>Registreringsskatt</strong><span> som beror på koldioxidutsläppen; vid flytt av bosättning finns under vissa villkor möjlighet till befrielse för en bil du har ägt en tid.</span></div></li>
      <li><div><strong>Registrering hos Tráfico (DGT)</strong><span> och nya spanska skyltar.</span></div></li>
      <li><div><strong>Spansk försäkring</strong><span> som börjar gälla senast när den svenska upphör — utan en enda dag emellan.</span></div></li>
    </ol>
    <p>Kanarieöarna har ett eget skattesystem och egna regler för import. Den praktiska hanteringen sköts ofta av en <em>gestoría</em>; vi samordnar försäkringen med den tidplanen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="korkort">
  <div class="container narrow article-body">
    <h2 id="korkort">Ditt svenska körkort</h2>
    <p>Ett svenskt körkort är ett EU-körkort och gäller i Spanien, även när du har blivit bosatt där. Någon skyldighet att byta det finns normalt inte så länge det är giltigt. När det går ut förnyas det dock i Spanien, eftersom förnyelse sker i det land där du är bosatt — och då får du ett spanskt körkort.</p>
    <p>För försäkringen spelar körkortet mindre roll än din skadehistorik. Bolagen frågar efter hur länge du har haft körkort och om du har orsakat skador, och det är där den svenska historiken kommer in.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="skadefri-tid">
  <div class="container narrow article-body">
    <h2 id="skadefri-tid">Din skadefria tid från Sverige</h2>
    <p>I Sverige bygger du bonus; i Spanien talar man om din <em>historial de siniestralidad</em>. Enligt EU:s regler har du rätt att få ett intyg om din skadehistorik från ditt svenska försäkringsbolag, och ett bolag i ett annat EU-land ska behandla ett sådant intyg på samma sätt som ett inhemskt när det sätter premien.</p>
    <p>I praktiken betyder det: begär ett skadefrihetsintyg från ditt svenska bolag innan du säger upp försäkringen, gärna på engelska, med antal år, eventuella skador och vilka förare som omfattades. Det tar tid att få fram efteråt, och utan det behandlas du som en ny förare.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="samlarbilar">
  <div class="container narrow article-body">
    <h2 id="samlarbilar">Bilar med högt värde och samlarbilar</h2>
    <p>För dyrare bilar och samlingar är frågan inte vilken nivå du väljer, utan hur värdet fastställs vid en skada. En vanlig spansk helförsäkring ersätter normalt marknadsvärdet, med regler för värdeminskning som slår hårt mot bilar som i själva verket stiger i värde.</p>
    <ul>
      <li><strong>Avtalat värde</strong>: värdet fastställs vid avtalets början mot värdering och är det belopp som betalas vid totalskada.</li>
      <li><strong>Veteranfordon</strong>: bilar som klassas som <em>vehículo histórico</em> i Spanien har egna regler för registrering och besiktning, och särskilda försäkringslösningar med begränsad körsträcka.</li>
      <li><strong>Förvaring och transport</strong>: skydd i garaget, under transport och vid bilträffar och banevenemang behöver anges uttryckligen.</li>
      <li><strong>Flera bilar och flera förare</strong>: familjer med bilar i både Spanien och Portugal kan ofta samla dem hos samma rådgivare, med samma principer för värdering.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="portugal-syskon">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Har du också bil i Portugal? → <a href="/se/bilforsakring-portugal/">Bilförsäkring i Portugal, även samlarbilar</a>.
    </div>
  </div>
</section>`,
  faqTitle: 'Bilförsäkring i Spanien — frågor',
  faq: [
    {
      q: 'Kan jag köra min svenska bil i Spanien med den svenska försäkringen?',
      a: '<p>Som besökare, ja, under en begränsad tid. När du blir bosatt i Spanien ska bilen registreras där inom kort tid, och då behövs en spansk försäkring. Den svenska försäkringen utgår från att bilen hör hemma i Sverige.</p>',
    },
    {
      q: 'Måste jag byta mitt svenska körkort mot ett spanskt?',
      a: '<p>Normalt inte så länge det är giltigt, eftersom det är ett EU-körkort. När det går ut förnyas det i Spanien om du är bosatt där, och du får då ett spanskt körkort.</p>',
    },
    {
      q: 'Räknas min skadefria tid i Sverige?',
      a: '<p>Den kan göra det. Du har rätt till ett intyg om din skadehistorik från ditt svenska bolag, och bolag i andra EU-länder ska behandla det som ett inhemskt intyg. Begär det innan du säger upp den svenska försäkringen.</p>',
    },
    {
      q: 'Måste bilen vara försäkrad när den står i garaget?',
      a: '<p>Ja, så länge den är registrerad i Spanien och inte tillfälligt avställd hos Tráfico. Den obligatoriska försäkringen gäller fordonet, inte bara körningen.</p>',
    },
    {
      q: 'Kan en samlarbil försäkras till avtalat värde?',
      a: '<p>Ja. Värdet fastställs vid avtalets början mot värdering och är det belopp som betalas vid totalskada, utan diskussion om värdeminskning. Villkoren för körsträcka, förvaring och evenemang anpassas efter hur bilen används.</p>',
    },
  ],
  related: [
    { url: '/se/bilforsakring-portugal/', label: 'Bilförsäkring i Portugal' },
    { url: '/se/forsakring-spanien/', label: 'Försäkring i Spanien — översikt' },
  ],
};
