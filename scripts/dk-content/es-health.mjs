/**
 * /dk/sundhedsforsikring-spanien/
 *
 * Search intent: "sundhedsforsikring Spanien" / "sygesikring Spanien
 * pensionist" — a Dane who is moving to, or already spends most of the year
 * in, Spain.
 *
 * The Danish angle: the yellow card stops when you deregister from the CPR
 * register, the blue EHIC card is for temporary stays only, and a Dane is an
 * EU citizen — so the relevant Spanish step is the EU registration
 * (certificado de registro), not the non-lucrative visa. The visa only
 * matters for non-EU family members. Legal points are kept general; the
 * requirements are "as generally applied", and the page sends the reader to
 * the authorities for their own case.
 */
import { BREADCRUMB_SPAIN, withSibling, toPortugal } from './shared.mjs';

export const ES_HEALTH_PAGE = {
  slug: 'sundhedsforsikring-spanien',
  url: '/dk/sundhedsforsikring-spanien/',
  cluster: 'es-health',
  title: 'Sundhedsforsikring i Spanien for danskere | Adler & Rochefort',
  description:
    'Sundhedsforsikring i Spanien for danskere: det offentlige system, S1 for pensionister, registrering som EU-borger og international privat dækning for familien.',
  keywords:
    'sundhedsforsikring Spanien, privat sundhedsforsikring Spanien, sygesikring Spanien dansker, S1 Spanien pensionist, EU-sygesikringskort Spanien, seguro médico sin copagos, certificado de registro sundhedsforsikring, international sundhedsforsikring familie Spanien',
  eyebrow: 'Spanien · International sundhedsforsikring',
  h1: 'Sundhedsforsikring i Spanien: offentligt, privat og det, der kræves',
  standfirst:
    'Når du frameldes Danmark, følger det gule sygesikringskort ikke med. I Spanien afhænger adgangen til det offentlige system af, om du arbejder, er pensionist eller lever af egne midler — og for mange er en privat police ikke bare et valg, men en forudsætning for registreringen.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_SPAIN, { name: 'Sundhedsforsikring' }],
  pullquote: 'Sundhedsforsikring tegnes, mens man er rask. Det gælder i Spanien præcis som alle andre steder.',
  schemaType: 'Article',
  formHeading: 'Forespørgsel om sundhedsforsikring i Spanien',
  formBranch: 'DK · Sundhed',
  formSubject: 'Sundhedsforsikring i Spanien',
  formCta: 'Send forespørgsel',
  formIntro:
    'Fortæl, hvem der skal dækkes, hvor I bor, og hvad policen skal bruges til — registrering, supplement til det offentlige eller international dækning. Helbredsoplysninger tager vi først senere, direkte i ansøgningen.',
  formPlaceholder:
    'For eksempel: to voksne (61 og 58), flytter til Alicante-provinsen til foråret, den ene får dansk folkepension om to år, vil gerne kunne behandles i Danmark.',
  sections: withSibling(`
<section class="section plain" aria-labelledby="udgangspunkt">
  <div class="container narrow article-body">
    <h2 id="udgangspunkt">Udgangspunktet: hvad der sker med den danske dækning</h2>
    <p>Når du flytter til Spanien og frameldes Folkeregisteret, ophører retten til den danske offentlige sygesikring som udgangspunkt. Det blå EU-sygesikringskort er beregnet til midlertidige ophold og er ikke en løsning for den, der har flyttet bopæl.</p>
    <p>Hvordan du i stedet får adgang til sundhedsvæsenet i Spanien, afhænger af din situation:</p>
    <ul>
      <li><strong>Du arbejder i Spanien</strong> — som ansat eller selvstændig — og er dermed omfattet af den spanske sociale sikring og det offentlige system (<em>SNS</em>, drevet af regionerne).</li>
      <li><strong>Du er pensionist med dansk pension</strong> og ingen spansk pension. Så kan Danmark som udgangspunkt udstede en S1-blanket, som registreres i Spanien og giver adgang til det offentlige system på Danmarks regning.</li>
      <li><strong>Du lever af egne midler</strong> — formue eller kapitalindkomst, uden arbejde i Spanien og uden S1. Så har du normalt ikke automatisk adgang, og en privat police bliver en del af registreringen som bosat.</li>
    </ul>
    <p>Reglerne afhænger af den enkelte sag. Få din egen situation bekræftet af de danske og spanske myndigheder, før du flytter.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="registrering">
  <div class="container narrow article-body">
    <h2 id="registrering">Registrering som EU-borger: kravet til policen</h2>
    <p>Som dansk statsborger skal du ikke have visum til Spanien. Bliver du i landet mere end tre måneder, registrerer du dig som bosat EU-borger (<em>certificado de registro de ciudadano de la Unión</em>). Arbejder du ikke i Spanien, skal du normalt dokumentere tilstrækkelige midler og en sygeforsikring — offentlig via S1 eller privat.</p>
    <p>Den private police skal i praksis svare til det offentlige system. Sådan som kravet generelt anvendes af myndighederne:</p>
    <ul>
      <li><strong>Fuld dækning</strong> i Spanien, svarende til det offentlige tilbud.</li>
      <li><strong>Ingen egenbetaling</strong> (<em>sin copagos</em>) pr. konsultation eller behandling.</li>
      <li><strong>Ingen karensperioder</strong> (<em>sin carencias</em>) fra policens start.</li>
      <li>Tegnet hos et selskab med tilladelse til at tegne i Spanien, og gyldig for hele perioden.</li>
    </ul>
    <p>Praksis kan variere fra kontor til kontor. Har du familiemedlemmer uden EU-statsborgerskab, gælder der andre regler — for eksempel for <em>visado de residencia no lucrativa</em>, hvor konsulaterne generelt stiller de samme krav til sundhedsforsikringen. Vi sørger for, at policen og dokumentationen opfylder de krav, der stilles i din sag.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="international">
  <div class="container narrow article-body">
    <h2 id="international">Spansk police eller international police?</h2>
    <p>Der er to slags private policer, og de løser forskellige opgaver:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Spansk privat sundhedsforsikring sammenlignet med international sundhedsforsikring</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Spansk privat police</th><th scope="col">International police</th></tr>
        </thead>
        <tbody>
          <tr><td>Geografi</td><td>Spanien, med akutdækning på rejse</td><td>Verden over eller verden ekskl. USA — også behandling i Danmark</td></tr>
          <tr><td>Læger og hospitaler</td><td>Selskabets netværk i Spanien</td><td>Frit valg, ofte med direkte afregning</td></tr>
          <tr><td>Registrering som bosat</td><td>Den typiske løsning, når den er uden egenbetaling og karens</td><td>Kan bruges, hvis den opfylder kravene og dokumentationen accepteres</td></tr>
          <tr><td>Passer til</td><td>Den, der bor fast i Spanien og bruger det spanske system</td><td>Familier, der lever mellem flere lande, og den, der vil kunne behandles i Danmark</td></tr>
        </tbody>
      </table>
    </div>
    <p>For mange danske husstande er svaret en kombination: den offentlige adgang via S1 eller arbejde, suppleret af en international police for valgfrihed og behandling uden for Spanien.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="helbred">
  <div class="container narrow article-body">
    <h2 id="helbred">Kendte lidelser og alder</h2>
    <p>Privat sundhedsforsikring vurderes individuelt. Selskabet spørger til helbredet ved tegningen, og kendte lidelser kan blive undtaget, dækket efter en periode eller dækket mod et tillæg. Nogle selskaber har en øvre alder for nytegning.</p>
    <p>To praktiske råd:</p>
    <ul>
      <li><strong>Tegn før flytningen, ikke efter.</strong> Hver måned, der går, er en måned, hvor noget kan blive en kendt lidelse.</li>
      <li><strong>Svar fuldstændigt på helbredsspørgsmålene.</strong> En ufuldstændig oplysning er den hyppigste grund til, at en skade afvises. Helbredsoplysningerne gives direkte i ansøgningen til selskabet — ikke i en formular på en hjemmeside.</li>
    </ul>
  </div>
</section>`, toPortugal.health),
  faqTitle: 'Sundhedsforsikring i Spanien — spørgsmål',
  faq: [
    {
      q: 'Kan jeg bruge det gule sygesikringskort i Spanien?',
      a: '<p>Ikke når du har flyttet bopæl. Frameldes du Folkeregisteret, ophører retten til dansk offentlig sygesikring som udgangspunkt. Det blå EU-sygesikringskort er til midlertidige ophold, ikke til den, der bor i Spanien.</p>',
    },
    {
      q: 'Jeg får dansk folkepension. Hvordan får jeg adgang til det spanske system?',
      a: '<p>Modtager du dansk pension og ingen spansk pension, kan Danmark som udgangspunkt udstede en S1-blanket, som du registrerer i Spanien. Den giver adgang til det offentlige system. Få det bekræftet af de danske myndigheder i din konkrete sag, før du flytter.</p>',
    },
    {
      q: 'Skal jeg have privat sundhedsforsikring for at blive registreret som bosat?',
      a: '<p>Arbejder du ikke i Spanien og har du ikke S1, skal du normalt dokumentere en sygeforsikring for at blive registreret som bosat EU-borger. Myndighederne kræver generelt, at den er fuldt dækkende, uden egenbetaling og uden karensperioder.</p>',
    },
    {
      q: 'Kan en international police bruges til registreringen?',
      a: '<p>Ofte, hvis den opfylder kravene og dokumentationen accepteres af det kontor, der behandler sagen. Praksis varierer. Vi afklarer, hvad der kræves i din sag, og sørger for, at attesten fra selskabet siger det, der skal stå.</p>',
    },
    {
      q: 'Dækker policen behandling i Danmark?',
      a: '<p>En spansk privat police normalt ikke, ud over akut behandling på rejse. En international police kan dække behandling i Danmark og andre lande, afhængigt af det valgte geografiske område.</p>',
    },
    {
      q: 'Hvad med kendte lidelser?',
      a: '<p>De vurderes individuelt ved tegningen og kan blive undtaget, dækket efter en periode eller dækket mod et tillæg. Jo tidligere policen tegnes, jo færre forhold er kendte. Helbredsoplysninger gives direkte til selskabet i ansøgningen.</p>',
    },
  ],
  related: [
    { url: '/dk/forsikring-spanien/', label: 'Forsikring i Spanien: overblik' },
    { url: '/dk/husforsikring-spanien/', label: 'Husforsikring i Spanien' },
  ],
};
