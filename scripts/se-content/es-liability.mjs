/**
 * /se/ansvarsforsakring-spanien/ (cluster key es-liability)
 *
 * Search intent: "ansvarsförsäkring Spanien" / "privatansvar Spanien" — a
 * Swedish household with a villa, pool, staff, perhaps a boat and a dog on the
 * Costa del Sol or Mallorca.
 *
 * Swedish hooks: in Sweden ansvarsskydd comes inside the hemförsäkring, usually
 * with a limit of a few million kronor; in Spain responsabilidad civil familiar
 * is often inside the seguro de hogar too, but the limit needs checking against
 * what the household actually owns. HNW framing: worldwide family liability in
 * the millions, defence costs on top. Spanish specifics: registration of
 * household staff with Social Security, the licence and compulsory liability
 * cover for potentially dangerous dogs, compulsory liability cover for
 * recreational boats, tourist letting. Professional liability is separate.
 *
 * Form: shared short form, SE · Ansvar preselected.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ES_LIABILITY_PAGE = {
  slug: 'ansvarsforsakring-spanien',
  url: '/se/ansvarsforsakring-spanien/',
  cluster: 'es-liability',
  title: 'Ansvarsförsäkring för familjen i Spanien | Adler & Rochefort',
  description:
    'Familjeansvar i Spanien: beloppen i hemförsäkringen, ansvar i miljonbelopp i hela världen, pool, hushållsanställda, båt, hund och uthyrning.',
  keywords:
    'ansvarsförsäkring Spanien, privatansvar Spanien, responsabilidad civil familiar, familjeansvar miljonbelopp, ansvarsförsäkring hund Spanien, perros potencialmente peligrosos försäkring, båtförsäkring Spanien, empleada de hogar Spanien',
  eyebrow: 'Spanien · Ansvar',
  h1: 'Ansvarsförsäkring för familjen i Spanien',
  standfirst:
    'Ansvarsskyddet i en spansk hemförsäkring är ofta skrivet för en genomsnittlig lägenhet. Ett hushåll med villa, pool, anställda och båt behöver ett belopp som motsvarar det som faktiskt står på spel.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Försäkring i Spanien', url: '/se/forsakring-spanien/' },
    { name: 'Ansvarsförsäkring' },
  ],
  pullquote: 'En personskada vid poolen kan kosta mer än huset. Ansvarsbeloppet ska räknas mot hela förmögenheten, inte mot bostaden.',
  schemaType: 'Article',
  formHeading: 'Begär en genomgång av familjens ansvarsskydd i Spanien',
  formBranch: 'SE · Ansvar',
  formSubject: 'Ansvarsförsäkring i Spanien',
  formCta: 'Skicka förfrågan',
  formIntro:
    'Berätta om bostäderna, vilka som ingår i hushållet, eventuella anställda, båt, hund och uthyrning. Du får ett skriftligt svar om vilket belopp som motsvarar risken.',
  formPlaceholder:
    'Till exempel: villa med pool i Benahavís, en anställd på deltid, en segelbåt i Puerto Banús och en labrador. Huset hyrs ut några veckor på sommaren.',
  sections: `
<section class="section plain" aria-labelledby="i-hemforsakringen">
  <div class="container narrow article-body">
    <h2 id="i-hemforsakringen">Vad som redan finns i din spanska hemförsäkring</h2>
    <p>Till skillnad från i Portugal innehåller en spansk <em>seguro de hogar</em> ofta ett ansvarsskydd för hela familjen — <em>responsabilidad civil familiar</em> — utöver ansvaret som ägare av bostaden. Det liknar det svenska ansvarsskyddet i hemförsäkringen, och därför antar många svenskar att frågan är löst.</p>
    <p>Två saker behöver ändå kontrolleras. Det första är <strong>beloppet</strong>: i standardförsäkringar är det ofta några hundra tusen euro, vilket räcker för en vattenskada hos grannen men inte för en allvarlig personskada. Det andra är <strong>omfattningen</strong>: gäller skyddet i hela världen eller bara i Spanien, omfattar det alla bostäder, barn som studerar utomlands, anställda och gäster?</p>
    <div class="callout">
      <span class="callout-label">En jämförelse</span>
      En allvarlig personskada — en gäst som skadas vid poolen, en cyklist som körs på av ditt barn på elsparkcykel, en besökare som faller från en terrass — kan leda till krav som vida överstiger ett standardbelopp. Skadeståndet gäller livslång förlorad inkomst och vård, och den som orsakat skadan svarar med hela sin förmögenhet för det som försäkringen inte täcker.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="miljonbelopp">
  <div class="container narrow article-body">
    <h2 id="miljonbelopp">Familjeansvar i miljonbelopp</h2>
    <p>För hushåll med betydande tillgångar förmedlar vi ansvarsförsäkringar som är byggda på ett annat sätt än standardskyddet:</p>
    <div class="feature-grid">
      <div class="feature-card"><h3>Belopp som motsvarar tillgångarna</h3><p>Privat ansvar för hela familjen med försäkringsbelopp på flera miljoner euro.</p></div>
      <div class="feature-card"><h3>Hela världen</h3><p>Samma skydd i Spanien, i Portugal, i Sverige och på resa — inte bara vid den försäkrade bostaden.</p></div>
      <div class="feature-card"><h3>Försvarskostnader utöver beloppet</h3><p>Kostnaderna för rättsligt försvar betalas utöver försäkringsbeloppet och dras inte av från det.</p></div>
      <div class="feature-card"><h3>Hela hushållet</h3><p>Makar, barn — även de som studerar på annan ort — gäster och den som tillfälligt tar hand om dina djur.</p></div>
      <div class="feature-card wide"><h3>Alla bostäder</h3><p>Som ägare, hyresgäst eller brukare, var familjen än har ett hem, samlat under en och samma försäkring.</p></div>
    </div>
    <p class="legal-note">Omfattning, belopp och undantag varierar mellan försäkringsbolag och bekräftas i villkoren i den försäkring som utfärdas.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="situationer">
  <div class="container narrow article-body">
    <h2 id="situationer">Situationer som kräver särskild uppmärksamhet i Spanien</h2>
    <h3>Pool och trädgård</h3>
    <p>Poolen är den vanligaste platsen för allvarliga personskador i privata hem. Kontrollera att ansvaret omfattar gäster och barn som besöker, och tänk på att vissa regioner och <em>comunidades</em> har egna säkerhetskrav för pooler.</p>
    <h3>Hushållsanställda</h3>
    <p>Städhjälp, trädgårdsmästare eller barnflicka som arbetar i hemmet ska enligt spansk lag vara anmälda till socialförsäkringen (<em>Seguridad Social</em>) av arbetsgivaren — det vill säga av dig. Det är den första förutsättningen. Därutöver bör ansvarsförsäkringen omfatta skador som den anställde orsakar andra i tjänsten, och i vissa fall ditt ansvar som arbetsgivare vid en arbetsolycka.</p>
    <h3>Hund</h3>
    <p>Den som äger en hund av en ras som klassas som potentiellt farlig (<em>perro potencialmente peligroso</em>) behöver i Spanien en särskild licens och en ansvarsförsäkring med ett lagstadgat minimibelopp, som vissa regioner höjer. Djurskyddslagen från 2023 innehåller dessutom ett krav på ansvarsförsäkring för alla hundägare, vars praktiska tillämpning har varit beroende av kompletterande föreskrifter. Vi kontrollerar det aktuella läget och att ditt ansvarsskydd omfattar hunden uttryckligen.</p>
    <h3>Båt</h3>
    <p>Fritidsbåtar i Spanien omfattas av en obligatorisk ansvarsförsäkring. Den obligatoriska nivån är dock låg i förhållande till vad en kollision i en fullsatt hamn kan kosta, och familjeansvaret undantar ofta båtar över en viss storlek. Båten behöver normalt en egen försäkring med ett ansvarsbelopp som motsvarar risken.</p>
    <h3>Uthyrning</h3>
    <p>Hyr du ut bostaden till turister blir ansvaret mot gästerna ett ansvar i en verksamhet. Det ska vara anmält och försäkrat, och bostaden ska ha den registrering som regionen kräver.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="yrkesansvar">
  <div class="container narrow article-body">
    <h2 id="yrkesansvar">Vad familjeansvaret inte täcker</h2>
    <ul>
      <li><strong>Yrkesverksamhet.</strong> Arbetar du som konsult, läkare, arkitekt eller styrelseledamot behövs en yrkesansvars- eller styrelseansvarsförsäkring. Privat ansvar undantar yrkesutövning.</li>
      <li><strong>Motorfordon.</strong> Skador i trafiken hör till bilens obligatoriska försäkring.</li>
      <li><strong>Avsiktliga handlingar</strong> och skador på egen egendom.</li>
      <li><strong>Avtalat ansvar</strong> som går utöver det lagen föreskriver.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="portugal-syskon">
  <div class="container narrow article-body">
    <div class="callout">
      <span class="callout-label">Portugal</span>
      Har ni också en bostad i Portugal? → <a href="/se/ansvarsforsakring-portugal/">Ansvarsförsäkring för familjen i Portugal</a>. Ett världsomfattande familjeansvar kan täcka båda länderna.
    </div>
  </div>
</section>`,
  faqTitle: 'Ansvarsförsäkring i Spanien — frågor',
  faq: [
    {
      q: 'Ingår ansvarsskydd i en spansk hemförsäkring?',
      a: '<p>Ofta, som <em>responsabilidad civil familiar</em>. Beloppet är i standardförsäkringar ofta några hundra tusen euro och omfattningen kan vara begränsad till Spanien. För ett hushåll med stora tillgångar räcker det sällan.</p>',
    },
    {
      q: 'Hur högt bör ansvarsbeloppet vara?',
      a: '<p>Det bör räknas mot vad hushållet har att förlora och vilka risker det har — pool, anställda, båt, uthyrning — inte mot bostadens värde. För hushåll med betydande tillgångar handlar det om flera miljoner euro, med försvarskostnaderna utöver beloppet.</p>',
    },
    {
      q: 'Måste min städhjälp vara anmäld?',
      a: '<p>Ja. Hushållsanställda ska i Spanien anmälas till socialförsäkringen av arbetsgivaren. Det är en förutsättning i sig, och en anställd som inte är anmäld kan skapa problem också vid en skada.</p>',
    },
    {
      q: 'Behöver min hund ansvarsförsäkring i Spanien?',
      a: '<p>För hundar som klassas som potentiellt farliga krävs både licens och ansvarsförsäkring. Djurskyddslagen från 2023 innehåller också ett krav för alla hundägare, vars tillämpning har berott på kompletterande föreskrifter. Vi kontrollerar att hunden omfattas uttryckligen.</p>',
    },
    {
      q: 'Täcker familjeansvaret min båt?',
      a: '<p>Oftast bara mindre båtar, om alls. Fritidsbåtar i Spanien har en obligatorisk ansvarsförsäkring, och större båtar behöver normalt en egen försäkring med ett högre ansvarsbelopp.</p>',
    },
    {
      q: 'Täcker familjeansvaret mitt arbete som konsult?',
      a: '<p>Nej. Privat ansvar undantar yrkesverksamhet. Det krävs en yrkesansvarsförsäkring, och vad som går att teckna beror på verksamhet, omsättning och var kunderna finns.</p>',
    },
  ],
  related: [
    { url: '/se/ansvarsforsakring-portugal/', label: 'Ansvarsförsäkring för familjen i Portugal' },
    { url: '/se/hemforsakring-spanien/', label: 'Hemförsäkring i Spanien' },
    { url: '/se/forsakring-spanien/', label: 'Försäkring i Spanien — översikt' },
  ],
};
