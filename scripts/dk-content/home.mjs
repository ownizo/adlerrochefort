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
  title: 'Husforsikring i Portugal: boliger af høj værdi | Adler & Rochefort',
  description:
    'Villaer og boliger af høj værdi i Portugal: besigtigelse, ingen underforsikring, garanteret genopførelse, indbo verden over og kunst til aftalt værdi.',
  keywords:
    'husforsikring Portugal, villa forsikring Portugal, forsikring bolig høj værdi Portugal, kunstforsikring Portugal, indboforsikring Portugal, multirriscos habitação, genopførelsespris Portugal, condomínio forsikring, feriebolig Portugal forsikring, jordskælv Portugal forsikring',
  eyebrow: 'Boliger af høj værdi',
  h1: 'Husforsikring i Portugal for boliger af høj værdi',
  standfirst:
    'En villa eller et byhus af høj værdi skal forsikres på betingelser, der er skrevet til netop den slags bolig: besigtigelse, genopførelse uden loft, indbo og kunst til aftalt værdi og ansvar i millionklassen. Her er, hvad vi lægger vægt på — og det portugisiske grundlag, det hviler på.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Husforsikring' }],
  pullquote: 'Forsikringssummen afgør erstatningen. Derfor fastlægges den først — og skriftligt.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared dk-forespoergsel branch-select form.
  wizard: {
    idPrefix: 'dk-hab',
    formName: 'dk-husforsikring-wizard',
    ramo: 'Husforsikring',
    heading: 'Bed om en skriftlig vurdering af boligen',
    intro: 'Udfyld det væsentligste, eller vedlæg jeres nuværende police i den efterfølgende korrespondance. Vi svarer inden for 24 arbejdstimer.',
    stepLabel2: 'Boligen',
    submitLabel: 'Send forespørgsel',
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

<section class="section tint" aria-labelledby="hoej-vaerdi">
  <div class="container">
    <div class="article-body" style="max-width:760px;">
      <h2 id="hoej-vaerdi">Betingelserne, vi placerer for boliger af høj værdi</h2>
      <p>En villa, et byhus eller en ejendom med pool og gæstehus har brug for andre betingelser end en almindelig <em>multirriscos habitação</em>. Nedenfor er referencebetingelserne i de private client-policer, vi placerer. Før vi anbefaler en police, holder vi den skriftligt op mod dem — og forklarer præcist, hvor et tilbud ikke lever op til dem.</p>
    </div>
    <div class="article-body"><h3>Huset</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Besigtigelse og genopførelsespris</h3>
        <p>Ved boliger af højere værdi besigtiger forsikringsselskabet ejendommen uden omkostning for dig, bekræfter genopførelsesprisen, rådgiver om forsikringssummerne for indbo og værdigenstande og anbefaler skadeforebyggende tiltag.</p>
      </div>
      <div class="feature-card">
        <h3>Ingen underforsikringsregel</h3>
        <p>Når de anbefalede summer er accepteret, giver selskabet afkald på forholdsmæssig nedsættelse: en delskade betales fuldt ud, også selv om byggepriserne siden er steget.</p>
      </div>
      <div class="feature-card">
        <h3>Garanteret genopførelse</h3>
        <p>Efter en totalskade genopføres huset, også hvis udgiften overstiger bygningssummen — forudsat at de summer, besigtigelsen anbefalede, er accepteret.</p>
      </div>
      <div class="feature-card">
        <h3>Tilsvarende genhusning</h3>
        <p>Midlertidig bolig af tilsvarende standard, også for kæledyr og heste, så længe huset ikke kan bebos — ikke de få måneder, der er typiske for standardpolicer.</p>
      </div>
      <div class="feature-card">
        <h3>Have, mure og udhuse</h3>
        <p>Træer, buske og græsplæner, skel- og støttemure, pools, annekser og gæstehuse med egne forsikringssummer — ikke begrænset til et symbolsk beløb.</p>
      </div>
      <div class="feature-card">
        <h3>Vand, gas og lækagesøgning</h3>
        <p>Lokalisering og reparation af udslip fra vand-, gas- eller olieinstallationer uden særskilt sublimit, samt det vand eller den olie, der går tabt.</p>
      </div>
      <div class="feature-card">
        <h3>Erstatning efter dit valg</h3>
        <p>Kontant erstatning eller reparation ved de leverandører, håndværkere og konservatorer, du selv vælger, uden fradrag for det ene eller det andet.</p>
      </div>
      <div class="feature-card">
        <h3>Ingen selvrisiko ved store skader</h3>
        <p>Over en fastsat skadestørrelse bortfalder selvrisikoen helt — netop dér, hvor den ellers ville veje tungest.</p>
      </div>
      <div class="feature-card">
        <h3>Det moderne hus</h3>
        <p>Solceller, batterier og nødstrømsanlæg, miljømæssig opgradering ved genopførelse og udskiftning af låse, hvis nøglerne bliver væk eller stjålet.</p>
      </div>
      <div class="feature-card">
        <h3>Ombygning ved invaliditet</h3>
        <p>Tilpasning af boligen, hvis et familiemedlem får varigt mén efter en ulykke eller sygdom.</p>
      </div>
    </div>
    <div class="article-body"><h3>Indboet</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Alle risici, verden over</h3>
        <p>Personlige ejendele er dækket mod alle risici — hjemme, på rejse og i en anden bolig — uden særskilt sublimit for det, du har med dig.</p>
      </div>
      <div class="feature-card">
        <h3>Indbo ud over forsikringssummen</h3>
        <p>Når de anbefalede summer er accepteret, kan erstatningen overstige indbosummen med en på forhånd aftalt margin, hvis den reelle værdi viser sig at være højere.</p>
      </div>
      <div class="feature-card">
        <h3>Ingen sublimits, hvor det betyder noget</h3>
        <p>Hændelig skade og bortkomst, tyveri fra kældre og udhuse samt havemøbler — uden de sublimits, der udhuler en standarddækning.</p>
      </div>
      <div class="feature-card">
        <h3>Gæsters ejendele og nye anskaffelser</h3>
        <p>Dine gæsters ejendele er beskyttet, og nyanskaffede genstande er automatisk dækket i en anmeldelsesperiode.</p>
      </div>
      <div class="feature-card">
        <h3>Arrangementer i hjemmet</h3>
        <p>Aflysning af arrangementer og midlertidige konstruktioner — telte, scener — ved fester, der holdes i hjemmet.</p>
      </div>
    </div>
    <div class="article-body"><h3>Værdigenstande og samlinger</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Aftalt værdi</h3>
        <p>Kunst, smykker, ure og samlinger opført til en værdi, der fastsættes ved policens start på grundlag af en vurdering — det er det beløb, der udbetales ved totalskade, uden diskussion om værdiforringelse.</p>
      </div>
      <div class="feature-card">
        <h3>Ingen selvrisiko</h3>
        <p>Værdigenstande, der er forsikret til aftalt eller oplyst værdi, har ingen selvrisiko.</p>
      </div>
      <div class="feature-card">
        <h3>Værditab efter restaurering</h3>
        <p>Bliver en genstand restaureret, men mister den markedsværdi, erstattes forskellen — og reparationer har intet omkostningsloft.</p>
      </div>
      <div class="feature-card">
        <h3>Beskyttelse mod undervurdering</h3>
        <p>Viser en professionelt vurderet genstand sig at være mere værd end forsikringssummen på skadedagen, betaler policen ud over den aftalte værdi inden for en fastsat margin.</p>
      </div>
      <div class="feature-card">
        <h3>Nye anskaffelser og vinkældre</h3>
        <p>Nye genstande dækkes automatisk i en periode, og vin- og spiritussamlinger har deres egne opbevaringsbetingelser.</p>
      </div>
    </div>
    <div class="article-body"><h3>Ansvar</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Summer, der passer til husstanden</h3>
        <p>Familiens ansvarsforsikring med summer på flere millioner euro, verden over.</p>
      </div>
      <div class="feature-card">
        <h3>Forsvarsomkostninger ud over summen</h3>
        <p>Udgifter til juridisk forsvar betales ud over forsikringssummen og trækkes ikke fra den.</p>
      </div>
      <div class="feature-card">
        <h3>Hvem er dækket</h3>
        <p>Husstanden, herunder børn, der studerer ude, og personer, der lejlighedsvis passer dine dyr; gæster og husstandsansatte i forbindelse med boligen.</p>
      </div>
      <div class="feature-card">
        <h3>Alle boliger</h3>
        <p>Som ejer, lejer eller bruger — i Portugal, i Spanien eller hvor familien ellers har bolig.</p>
      </div>
    </div>
    <div class="article-body"><h3>Familien</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Kidnapning og afpresning</h3>
        <p>Udgifter ved kidnapning af og løsesum for et familiemedlem, herunder specialiserede rådgivere og dusør for oplysninger.</p>
      </div>
      <div class="feature-card">
        <h3>Carjacking og røveri i hjemmet</h3>
        <p>Støtte og erstatning efter carjacking, groft røveri i boligen, overfald, road rage eller air rage.</p>
      </div>
      <div class="feature-card">
        <h3>Trusler og stalking</h3>
        <p>Sikkerhedsrådgivning, midlertidig flytning og juridisk bistand, når et familiemedlem bliver truet eller forfulgt.</p>
      </div>
      <div class="feature-card">
        <h3>Cybermobning og omdømme</h3>
        <p>Psykolog, it-sikkerhedsrådgiver, advokat og om nødvendigt udgiften til skoleskift efter gentagen cybermobning.</p>
      </div>
      <div class="feature-card">
        <h3>Psykologisk støtte</h3>
        <p>Professionel støtte til familien efter enhver af disse hændelser.</p>
      </div>
    </div>
    <p class="article-body" style="max-width:760px;margin:8px 0 0;font-size:14px;color:var(--muted);">Dette er referencebetingelserne i de private client-policer, vi placerer. Dækning, summer, selvrisici og undtagelser varierer efter forsikringsselskab og risiko og er først bekræftet i de policedokumenter, der udstedes til dig.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ansvar">
  <div class="container narrow article-body">
    <h2 id="ansvar">De to dækninger, der ikke følger med</h2>
    <p>Din danske indboforsikring indeholdt to ting ud over tingene: <strong>ansvarsforsikring</strong> og <strong>retshjælpsdækning</strong>. De har været der hele tiden, uden at du købte dem separat, og de er sandsynligvis grunden til, at du aldrig har tænkt over dem.</p>
    <p>I en portugisisk <em>multirriscos habitação</em> er billedet anderledes:</p>
    <ul>
      <li><strong>Ansvar (<em>responsabilidade civil</em>)</strong> forekommer som tilvalg, eller med en grundsum, der dækker ansvar knyttet til boligen — typisk skade på naboer i samme bygning. Det er noget andet end et privatansvar, der følger dig og familien uden for boligen.</li>
      <li><strong>Retshjælp (<em>proteção jurídica</em>)</strong> er normalt et selvstændigt tilvalg og sjældent inkluderet som standard.</li>
    </ul>
    <p>Vi tager det op her og ikke kun på <a href="/dk/ansvarsforsikring-portugal/">ansvarssiden</a>, fordi det er i boligpolicen, danskere forventer at finde det. Er dækningen vigtig for dig, skal den bestilles — den kommer ikke af sig selv.</p>
    <p>I de private client-policer, vi placerer for boliger af høj værdi, er familiens ansvar derimod en fast del: summer på flere millioner euro, verden over, med forsvarsomkostninger ud over summen. Det er en af de tydeligste forskelle i forhold til en standardpolice.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="genopfoerelse">
  <div class="container narrow article-body">
    <h2 id="genopfoerelse">Genopførelsesprisen: det tal, alt andet hænger på</h2>
    <p>Forsikringssummen på bygningen skal være <strong>genopførelsesprisen</strong>: hvad det koster at bygge den samme bygning op igen på samme sted, til dagens byggepriser, inklusive nedrivning, oprydning og rådgivning. Det er ikke købsprisen, og det er ikke ejendomsvurderingen.</p>
    <div class="callout">
      <span class="callout-label">Hvorfor det ikke er en detalje</span>
      Er summen sat for lavt, anvender selskabet <em>regra proporcional</em> — underforsikringsreglen. Er bygningen forsikret for det halve af genopførelsesprisen, får du halv erstatning, også ved en mindre skade, der ligger langt under summen. Ingen dispensation, ingen forhandling: en formel. Er summen sat for højt, betaler du præmie for noget, du aldrig kan få udbetalt, for erstatningen overstiger aldrig den faktiske udgift.
    </div>
    <p>Købsprisen indeholder grunden, beliggenheden, udsigten og markedet. Ingen af de fire brænder. Et hus i Cascais og et tilsvarende hus i indlandet kan koste vidt forskelligt at købe og næsten det samme at bygge op igen.</p>
    <p>På indboet er princippet gensalgsværdi — hvad det koster at købe det hele igen som nyt. Den øvelse, der virker: gå rum for rum og skriv beløbene ned. Summen bliver næsten altid højere end det gæt, man startede med.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="condominio">
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

<section class="section tint" aria-labelledby="skader">
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

<section class="section plain" aria-labelledby="feriebolig">
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

<section class="section tint" aria-labelledby="bank">
  <div class="container narrow article-body">
    <h2 id="bank">Bankens police</h2>
    <p>Har du lån i en portugisisk bank, kræver banken en boligforsikring med sig selv som begunstiget for lånets del. Det er sagligt begrundet: ejendommen er sikkerheden.</p>
    <p>Kravet er, at en forsikring findes — ikke at den købes af banken. En police, der tegnes i banken i samme møde som lånet, er valgt, fordi den passer bankens proces. Det gør den ikke uegnet, men ingen har prøvet dækningen mod din bolig: er genopførelsesprisen sat rigtigt, er vandskade med i den form, der betyder noget for netop denne bygning, er jordskælv med, hvordan behandles perioder uden beboelse, og er der en ansvarsdel?</p>
    <p>Vi ordner gerne en police, der opfylder bankens krav, og som samtidig er sat sammen efter boligen. Insisterer banken, læser vi det, de tilbyder, igennem med dig.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="checkliste">
  <div class="container narrow article-body">
    <h2 id="checkliste">Checkliste før du skriver under</h2>
    <ol class="process-steps">
      <li><div><strong>Genopførelsesprisen</strong><span> er beregnet ud fra byggeomkostninger, ikke købsprisen eller ejendomsvurderingen.</span></div></li>
      <li><div><strong>Indbosummen</strong><span> er opgjort rum for rum, ikke gættet.</span></div></li>
      <li><div><strong>Kunst, smykker og ure</strong><span> er opført enkeltvis til aftalt værdi på grundlag af en aktuel vurdering.</span></div></li>
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
      q: 'Hvad adskiller en police til en bolig af høj værdi fra en almindelig boligpolice?',
      a: '<p>Betingelserne. Selskabet besigtiger ejendommen og fastlægger genopførelsesprisen, giver afkald på underforsikringsreglen, når de anbefalede summer er accepteret, og garanterer genopførelse efter en totalskade. Indboet er dækket mod alle risici verden over, kunst og smykker til aftalt værdi uden selvrisiko, og familiens ansvar med summer på flere millioner euro. Det præcise indhold afhænger af selskab og risiko og bekræftes først i den udstedte police.</p>',
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
