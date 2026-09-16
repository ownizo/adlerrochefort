/**
 * /dk/husforsikring-portugal/
 *
 * Search intent: "husforsikring Portugal" — a Dane insuring a Portuguese
 * home, whether owner-occupied, an apartment or a holiday property.
 *
 * Danish-specific angles: the indbo/hus split does not exist here, ansvar and
 * retshjælp were inside the Danish indboforsikring and are not inside the
 * Portuguese one, there is no equivalent of the Danish ejerskifteforsikring,
 * a condomínio is not an ejerforening (and its insurance is usually far
 * narrower than a Danish grundejerforening's), and seismic risk is a cover
 * decision Denmark never has to make.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'husforsikring-portugal',
  url: '/dk/husforsikring-portugal/',
  cluster: 'home',
  title: 'Husforsikring i Portugal for danskere | Adler & Rochefort',
  description:
    'Multirriscos habitação forklaret for danskere: bygning og indbo i samme police, genopførelsespris, vandskade, jordskælvsdækning, condomínio versus ejerforening og feriebolig.',
  keywords:
    'husforsikring Portugal, indboforsikring Portugal, multirriscos habitação, genopførelsespris Portugal, condomínio forsikring, feriebolig Portugal forsikring, jordskælv Portugal forsikring',
  eyebrow: 'Hus- og indboforsikring',
  h1: 'Husforsikring i Portugal: hvad der dækkes, og hvad der ikke gør',
  standfirst:
    'Én portugisisk police dækker både bygningen og indboet — men ansvaret og retshjælpen, som du havde inde i din danske indboforsikring, er ikke med. Her er, hvad policen består af, og hvad der afgør erstatningen.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Husforsikring' }],
  pullquote: 'Forsikringssummen afgør erstatningen. Præmien afgør kun, hvad du betaler for at have den forkert.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form.
  wizard: {
    idPrefix: 'dk-hab',
    formName: 'dk-husforsikring-wizard',
    ramo: 'Husforsikring',
    heading: 'Få et tilbud på husforsikring',
    intro: 'Udfyld det væsentligste. Vi svarer inden for 24 arbejdstimer.',
    stepLabel2: 'Boligen',
    submitLabel: 'Få et tilbud',
    microNote:
      'Svar inden for 24 arbejdstimer. Dine oplysninger bruges udelukkende til at forberede tilbuddet og behandles i overensstemmelse med databeskyttelsesforordningen — se <a href="/en/privacy-policy" hreflang="en">privatlivspolitikken</a>.',
    scripts: ['quote-field-toggle.js'],
    fieldsHtml: `        <div class="contact-form-field">
          <label for="dk-hab-regime">Boligens anvendelse *</label>
          <select id="dk-hab-regime" name="regime_ocupacao" data-branch-select required>
            <option value="">Vælg</option>
            <option value="permanente">Fast bopæl</option>
            <option value="holiday_home">Fritidsbolig / anden bolig</option>
            <option value="alojamento_local">Alojamento Local (korttidsudlejning)</option>
          </select>
        </div>
        <div data-branch="alojamento_local" hidden>
          <div class="contact-form-field">
            <label for="dk-hab-al-regime">Type korttidsudlejning *</label>
            <select id="dk-hab-al-regime" name="al_regime" required disabled>
              <option value="">Vælg</option>
              <option value="tempo_inteiro">Fuld tid</option>
              <option value="parcial">Delvis (delt brug af boligen)</option>
            </select>
          </div>
        </div>
        <div class="contact-form-field"><label for="dk-hab-ano-construcao">Byggeår *</label><input type="number" id="dk-hab-ano-construcao" name="ano_construcao" min="1800" required></div>
        <div class="contact-form-field"><label for="dk-hab-area">Bruttoareal (m²) *</label><input type="number" id="dk-hab-area" name="area_bruta" min="1" required></div>
        <div class="contact-form-field"><label for="dk-hab-wc">Antal badeværelser *</label><input type="number" id="dk-hab-wc" name="casas_banho" min="0" required></div>
        <div class="contact-form-field">
          <label class="contact-form-checkbox" for="dk-hab-obras-check"><input type="checkbox" id="dk-hab-obras-check" data-field-toggle="dk-hab-obras-group"> Har I renoveret inden for de seneste år?</label>
        </div>
        <div id="dk-hab-obras-group" hidden>
          <div class="contact-form-field"><label for="dk-hab-obras-ano">Renoveringsår *</label><input type="number" id="dk-hab-obras-ano" name="obras_ano" data-validate="renovation-year" data-validate-ref="ano_construcao" required disabled></div>
          <div class="contact-form-field"><label for="dk-hab-obras-desc">Beskriv det udførte arbejde *</label><textarea id="dk-hab-obras-desc" name="obras_descricao" minlength="10" required disabled></textarea></div>
        </div>
        <div class="contact-form-field"><label for="dk-hab-capital-edificio">Forsikringssum bygning (€) *</label><input type="number" id="dk-hab-capital-edificio" name="capital_edificio" min="0" step="1000" required></div>
        <div class="contact-form-field"><label for="dk-hab-capital-conteudo">Forsikringssum indbo (€) *</label><input type="number" id="dk-hab-capital-conteudo" name="capital_conteudo" min="0" step="500" required></div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="policen">
  <div class="container narrow article-body">
    <h2 id="policen">Én police, to dele</h2>
    <p>Den portugisiske boligpolice hedder <em>multirriscos habitação</em>, og den er bygget op om to dele, som købes hver for sig eller sammen:</p>
    <ul>
      <li><strong><em>Edifício</em> — bygningen.</strong> Murværk, tag, gulve, faste installationer, køkken og bad. Alt det, der bliver stående, hvis du vender huset på hovedet. Ejer du en lejlighed, er det din enhed og det, du har bygget ind.</li>
      <li><strong><em>Recheio</em> — indboet.</strong> Møbler, hvidevarer, elektronik, tøj, cykler, værktøj. Alt det, der falder ud.</li>
    </ul>
    <p>Den danske opdeling mellem husforsikring og indboforsikring findes altså ikke som to policer, men som to dele af én. Det er i praksis enklere — men det betyder også, at to summer skal sættes rigtigt i samme dokument, og at man ikke kan gå ud fra, at den ene automatisk er med, fordi den anden er.</p>
    <p>Lejer du boligen, er det kun <em>recheio</em>, du har brug for, plus ansvarsdelen. Udlejer forsikrer bygningen, ikke dine ting og ikke skader, du forvolder. Danske lejere hernede opdager ofte først det ved den første vandskade fra deres egen vaskemaskine.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ansvar">
  <div class="container narrow article-body">
    <h2 id="ansvar">De to dækninger, der ikke følger med</h2>
    <p>Din danske indboforsikring indeholdt to ting ud over tingene: <strong>ansvarsforsikring</strong> og <strong>retshjælpsdækning</strong>. De har været der hele tiden, uden at du købte dem separat, og de er sandsynligvis grunden til, at du aldrig har tænkt over dem.</p>
    <p>I en portugisisk <em>multirriscos habitação</em> er billedet anderledes:</p>
    <ul>
      <li><strong>Ansvar (<em>responsabilidade civil</em>)</strong> forekommer som tilvalg, eller med en grundsum, der dækker ansvar knyttet til boligen — typisk skade på naboer i samme bygning. Det er noget andet end et privatansvar, der følger dig og familien uden for boligen.</li>
      <li><strong>Retshjælp (<em>proteção jurídica</em>)</strong> er normalt et selvstændigt tilvalg og sjældent inkluderet som standard.</li>
    </ul>
    <p>Vi tager det op her og ikke kun på <a href="/dk/ansvarsforsikring-portugal/">ansvarssiden</a>, fordi det er i boligpolicen, danskere forventer at finde det. Er dækningen vigtig for dig, skal den bestilles — den kommer ikke af sig selv.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="genopfoerelse">
  <div class="container narrow article-body">
    <h2 id="genopfoerelse">Genopførelsesprisen: det tal, alt andet hænger på</h2>
    <p>Forsikringssummen på bygningen skal være <strong>genopførelsesprisen</strong>: hvad det koster at bygge den samme bygning op igen på samme sted, til dagens byggepriser, inklusive nedrivning, oprydning og rådgivning. Det er ikke købsprisen, og det er ikke ejendomsvurderingen.</p>
    <div class="callout">
      <span class="callout-label">Hvorfor det ikke er en detalje</span>
      Er summen sat for lavt, anvender selskabet <em>regra proporcional</em> — underforsikringsreglen. Er bygningen forsikret for det halve af genopførelsesprisen, får du halv erstatning, også ved en skade på 8.000 euro, som ligger langt under summen. Ingen dispensation, ingen forhandling: en formel. Er summen sat for højt, betaler du præmie for noget, du aldrig kan få udbetalt, for erstatningen overstiger aldrig den faktiske udgift.
    </div>
    <p>Købsprisen indeholder grunden, beliggenheden, udsigten og markedet. Ingen af de fire brænder. Et hus i Cascais og et tilsvarende hus i indlandet kan koste vidt forskelligt at købe og næsten det samme at bygge op igen.</p>
    <p>På indboet er princippet gensalgsværdi — hvad det koster at købe det hele igen som nyt. Den øvelse, der virker: gå rum for rum og skriv beløbene ned. Summen bliver næsten altid højere end det gæt, man startede med.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Lejlighed: <em>condomínio</em> er ikke en ejerforening</h2>
    <p>Ejer du en lejlighed, ejer du en <em>fração autónoma</em> — en selvstændig enhed i bygningen, som fast ejendom — og en andel i de fælles dele. Det ligner en dansk ejerlejlighed, og derfor er forskellene lette at overse.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Dansk ejerforening sammenlignet med portugisisk condomínio</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Ejerforening i Danmark</th><th scope="col"><em>Condomínio</em> i Portugal</th></tr>
        </thead>
        <tbody>
          <tr><td>Bygningens forsikring</td><td>Foreningens bygningsforsikring, typisk bred</td><td><em>Seguro de condomínio</em>, ofte på lovens minimum (brand)</td></tr>
          <tr><td>Omfang</td><td>Dækker normalt også skjulte rør og følgeskader</td><td>Varierer meget; bredere dækning er et valg, foreningen skal have truffet</td></tr>
          <tr><td>Dit eget behov</td><td>Indboforsikring, evt. udvidet rørskade</td><td><em>Multirriscos</em> på din enhed inkl. det indbyggede, plus indbo og ansvar</td></tr>
          <tr><td>Beslutninger</td><td>Bestyrelse og generalforsamling</td><td><em>Assembleia de condóminos</em> med en <em>administrador</em> som udførende</td></tr>
          <tr><td>Fællesudgift</td><td>Fællesudgifter, ofte inkl. henlæggelser</td><td><em>Quota de condomínio</em>, typisk kun drift og vedligehold</td></tr>
        </tbody>
      </table>
    </div>
    <p>Den praktiske pointe: bed om <em>condomínio</em>-policens betingelser, før du tegner din egen. Uden dem gætter du på, hvad der allerede er dækket. I mange bygninger er fællespolicen smallere, end en dansker forventer, og grænsen mellem fælles og eget løber netop gennem de installationer, der oftest laver vandskader.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="skader">
  <div class="container narrow article-body">
    <h2 id="skader">Vandskade og jordskælv — de to, der skal læses ordentligt</h2>
    <h3>Vandskade (<em>danos por água</em>)</h3>
    <p>Den hyppigste skade i portugisiske boliger, og den, hvor betingelserne er mest detaljerede. Betingelserne skelner normalt mellem:</p>
    <ul>
      <li><strong>Brud på faste rør</strong> — som regel dækket, men ofte med en aldersgrænse for installationen.</li>
      <li><strong>Utætheder og langsom nedsivning</strong> — ofte undtaget, netop fordi de udvikler sig over tid.</li>
      <li><strong>Indtrængende vand gennem tag eller facade</strong> — behandles særskilt og hænger sammen med bygningens vedligeholdelsesstand.</li>
      <li><strong>Selve udgiften til at finde og reparere røret</strong> — ikke altid en del af dækningen af følgeskaden. Spørg specifikt.</li>
      <li><strong>Skade på naboens enhed</strong> — det er ansvarsdelen, ikke tingdelen.</li>
    </ul>
    <h3>Jordskælvsdækning (<em>fenómenos sísmicos</em>)</h3>
    <p>En beslutning man ikke skal træffe i Danmark. Portugal har seismisk aktivitet, og Lissabon-regionen og Algarve ligger i de områder, hvor risikoen historisk har været til stede. Dækningen er <strong>normalt et tilvalg</strong>, ikke en standarddel, og er den ikke valgt, er skaden ikke dækket.</p>
    <p>Præmietillægget er sædvanligvis beskedent i forhold til bygningssummen. Om dækningen er relevant for netop din bygning afhænger af beliggenhed, byggeår og konstruktion — og af, om du ville kunne genopføre for egne midler. Vi oplyser tillægget, så du kan tage stilling på et tal frem for en fornemmelse. Har du optaget lån, kræver banken i visse tilfælde dækningen medtaget.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="feriebolig">
  <div class="container narrow article-body">
    <h2 id="feriebolig">Feriebolig og perioder uden beboelse</h2>
    <p>Bruges boligen nogle måneder om året, er det en anden risiko end en helårsbolig, og portugisiske betingelser behandler den særskilt.</p>
    <ul>
      <li><strong>Grænsen for uafbrudt tomgang</strong> står i betingelserne som et antal dage. Overskrides den, kan dækninger være begrænset eller bortfalde — typisk tyveri og vandskade.</li>
      <li><strong>Krav om tilsyn</strong> eller lukket hovedhane forekommer, og bliver dermed en betingelse for erstatning.</li>
      <li><strong>Sikring</strong> — låse, skodder, alarm — indgår i vurderingen af tyveridækningen.</li>
      <li><strong>Udlejning, også få uger,</strong> skal oplyses. Se <a href="/dk/ansvarsforsikring-portugal/">ansvarsforsikring</a> om <em>alojamento local</em>.</li>
    </ul>
    <p>Der findes ikke nogen portugisisk pendant til den danske ejerskifteforsikring, og ingen tilsvarende mekanisme ved salg. Tilstanden er købers eget ansvar at undersøge — og det, der kommer frem, påvirker både præmien og hvad der overhovedet kan tegnes. Se <a href="/dk/kobe-bolig-i-portugal-forsikring/">købe bolig i Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="bank">
  <div class="container narrow article-body">
    <h2 id="bank">Bankens police</h2>
    <p>Har du lån i en portugisisk bank, kræver banken en boligforsikring med sig selv som begunstiget for lånets del. Det er sagligt begrundet: ejendommen er sikkerheden.</p>
    <p>Kravet er, at en forsikring findes — ikke at den købes af banken. En police, der tegnes i banken i samme møde som lånet, er valgt, fordi den passer bankens proces. Det gør den ikke uegnet, men ingen har prøvet dækningen mod din bolig: er genopførelsesprisen sat rigtigt, er vandskade med i den form, der betyder noget for netop denne bygning, er jordskælv med, hvordan behandles perioder uden beboelse, og er der en ansvarsdel?</p>
    <p>Vi ordner gerne en police, der opfylder bankens krav, og som samtidig er sat sammen efter boligen. Insisterer banken, læser vi det, de tilbyder, igennem med dig.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="checkliste">
  <div class="container narrow article-body">
    <h2 id="checkliste">Checkliste før du skriver under</h2>
    <ol class="process-steps">
      <li><div><strong>Genopførelsesprisen</strong><span> er beregnet ud fra byggeomkostninger, ikke købsprisen eller ejendomsvurderingen.</span></div></li>
      <li><div><strong>Indbosummen</strong><span> er opgjort rum for rum, ikke gættet.</span></div></li>
      <li><div><strong>Ansvarsdækningen</strong><span> er valgt til, og du kender summen.</span></div></li>
      <li><div><strong>Retshjælp</strong><span> er taget med eller bevidst udeladt.</span></div></li>
      <li><div><strong>Vandskadeafsnittet</strong><span> er læst, inkl. aldersgrænser for installationer og udgiften til at finde utætheden.</span></div></li>
      <li><div><strong>Jordskælvsdækning</strong><span> er valgt til eller fra på grundlag af et konkret præmietillæg.</span></div></li>
      <li><div><strong>Perioder uden beboelse</strong><span> er oplyst, som boligen faktisk bruges.</span></div></li>
      <li><div><strong>Condomínio-policen</strong><span> er indhentet, hvis det er en lejlighed, så du ikke betaler dobbelt eller efterlader et hul.</span></div></li>
      <li><div><strong>Selvrisikoen</strong><span> er kendt pr. dækning — og du ved, om den er et beløb eller en procent.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Husforsikring i Portugal — spørgsmål',
  faq: [
    {
      q: 'Er husforsikring lovpligtig i Portugal?',
      a: '<p>For ejerlejligheder findes der et lovkrav om brandforsikring af bygningen, som <em>condomínio</em> normalt varetager. For fritliggende huse er der ikke et generelt krav, medmindre banken stiller det som betingelse for lån. De nærmere krav afhænger af ejendomstype og lånevilkår.</p>',
    },
    {
      q: 'Hvilket beløb skal bygningen forsikres for?',
      a: '<p>Genopførelsesprisen — hvad det koster at bygge bygningen op igen til dagens byggepriser — ikke købsprisen og ikke ejendomsvurderingen. En for lav sum medfører forholdsmæssig nedsættelse ved enhver skade; en for høj sum giver præmie uden modydelse.</p>',
    },
    {
      q: 'Er ansvarsforsikring med, som i min danske indboforsikring?',
      a: '<p>Ikke på samme selvfølgelige måde. I portugisiske boligpolicer er ansvar et tilvalg eller begrænset til ansvar knyttet til boligen. Vi kontrollerer, hvad der står i netop din police, og hvilken sum der gælder, før du går ud fra, at dækningen er der.</p>',
    },
    {
      q: 'Dækker policen jordskælv?',
      a: '<p>Kun hvis dækningen for <em>fenómenos sísmicos</em> er valgt til — det er normalt et tilvalg og ikke standard. Præmietillægget er sædvanligvis beskedent i forhold til bygningssummen, og vi oplyser det, så beslutningen kan træffes på et tal.</p>',
    },
    {
      q: 'Jeg lejer min bolig. Skal jeg have forsikring?',
      a: '<p>Ja, til dit indbo og dit ansvar. Udlejer forsikrer normalt bygningen, ikke dine ting og ikke skader, du forvolder — for eksempel en vandskade fra din vaskemaskine, der rammer naboen nedenunder. Lejekontrakter hernede indeholder ofte også et krav om egen forsikring.</p>',
    },
    {
      q: 'Vi bor her kun om vinteren. Er der noget særligt?',
      a: '<p>Ja. Perioder uden beboelse er defineret i betingelserne, og overskrides grænsen, kan tyveri- og vandskadedækning være begrænset. Nogle selskaber stiller krav om tilsyn eller lukket hovedhane. Oplys den faktiske brug fra starten — ellers er uoverensstemmelsen først synlig i skadesagen.</p>',
    },
  ],
  related: [
    { url: '/dk/kobe-bolig-i-portugal-forsikring/', label: 'Købe bolig i Portugal: forsikring trin for trin' },
    { url: '/dk/ansvarsforsikring-portugal/', label: 'Ansvarsforsikring i Portugal' },
  ],
};
