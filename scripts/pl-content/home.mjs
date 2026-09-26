/**
 * /pl/ubezpieczenie-domu-portugalia/
 *
 * Search intent: "ubezpieczenie domu w Portugalii" / "ubezpieczenie mieszkania
 * Portugalia" — a Polish owner or tenant who needs household cover and wants
 * to know what the Portuguese version of it actually contains.
 *
 * The Polish-specific hooks: mury vs ruchomości domowe maps onto
 * edifício/recheio but the boundary sits elsewhere; wspólnota mieszkaniowa is
 * not condomínio in what its policy covers; and private liability, which
 * Polish household policies bundle in as a matter of course, cannot be assumed
 * here. Water damage and seismic cover are treated as the two exclusions worth
 * reading properly, because they are the two that produce the most surprised
 * claimants in Portugal.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'ubezpieczenie-domu-portugalia',
  url: '/pl/ubezpieczenie-domu-portugalia/',
  cluster: 'home',
  title: 'Ubezpieczenie domu i rezydencji w Portugalii | Adler & Rochefort',
  description:
    'Domy o wysokiej wartości w Portugalii: oględziny, bez zasady proporcji, gwarantowana odbudowa, sztuka i kolekcje według wartości uzgodnionej. Na piśmie.',
  keywords:
    'ubezpieczenie domu Portugalia, ubezpieczenie domu o wysokiej wartości Portugalia, ubezpieczenie rezydencji Portugalia, ubezpieczenie dzieł sztuki Portugalia, multirriscos habitação, wartość odbudowy Portugalia, ubezpieczenie domu wakacyjnego Portugalia',
  eyebrow: 'Domy o wysokiej wartości',
  h1: 'Ubezpieczenie domu o wysokiej wartości w Portugalii: warunki, które decydują przy szkodzie',
  standfirst:
    'Przy nieruchomości o wysokiej wartości pytania są inne niż przy typowym mieszkaniu: oględziny i koszt odbudowy, rezygnacja z zasady proporcji, sztuka i kolekcje według wartości uzgodnionej, odpowiedzialność cywilna liczona w milionach. Poniżej opisujemy warunki, które sprawdzamy na piśmie w każdej propozycji — oraz portugalskie realia, które obowiązują niezależnie od wartości domu.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ubezpieczenie domu' }],
  pullquote: 'Suma ubezpieczenia to nie cena, jaką Państwo zapłacili. To koszt odbudowy tego, co zostanie zniszczone.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared pl-zapytanie-ofertowe branch-select form; the formHeading/
  // formBranch/formSubject/formCta/formIntro/formPlaceholder fields the
  // old shared form read are gone, not just unused, since scripts/lib/
  // market-cluster.mjs never calls formHtml() for a page with `wizard` set.
  wizard: {
    idPrefix: 'pl-hab',
    formName: 'pl-ubezpieczenie-domu-wizard',
    ramo: 'Ubezpieczenie domu',
    heading: 'Zapytaj o ubezpieczenie nieruchomości',
    intro: 'Proszę podać najważniejsze informacje. Odpowiadamy w ciągu 24 godzin roboczych.',
    stepLabel2: 'Nieruchomość',
    submitLabel: 'Zapytaj o ofertę',
    microNote:
      'Odpowiedź w ciągu 24 godzin roboczych. Dane są wykorzystywane wyłącznie do przygotowania oferty i przetwarzane zgodnie z RODO — patrz <a href="/en/privacy-policy" hreflang="en">polityka prywatności</a>.',
    scripts: ['quote-field-toggle.js'],
    fieldsHtml: `        <div class="contact-form-field">
          <label for="pl-hab-regime">Sposób użytkowania nieruchomości *</label>
          <select id="pl-hab-regime" name="regime_ocupacao" data-branch-select required>
            <option value="">Proszę wybrać</option>
            <option value="permanente">Główne miejsce zamieszkania</option>
            <option value="holiday_home">Dom wakacyjny / druga nieruchomość</option>
            <option value="alojamento_local">Alojamento Local (wynajem krótkoterminowy)</option>
          </select>
        </div>
        <div data-branch="alojamento_local" hidden>
          <div class="contact-form-field">
            <label for="pl-hab-al-regime">Rodzaj wynajmu krótkoterminowego *</label>
            <select id="pl-hab-al-regime" name="al_regime" required disabled>
              <option value="">Proszę wybrać</option>
              <option value="tempo_inteiro">Całkowity</option>
              <option value="parcial">Częściowy (współdzielone użytkowanie mieszkania)</option>
            </select>
          </div>
        </div>
        <div class="contact-form-field"><label for="pl-hab-ano-construcao">Rok budowy *</label><input type="number" id="pl-hab-ano-construcao" name="ano_construcao" min="1800" required></div>
        <div class="contact-form-field"><label for="pl-hab-area">Powierzchnia brutto (m²) *</label><input type="number" id="pl-hab-area" name="area_bruta" min="1" required></div>
        <div class="contact-form-field"><label for="pl-hab-wc">Liczba łazienek *</label><input type="number" id="pl-hab-wc" name="casas_banho" min="0" required></div>
        <div class="contact-form-field">
          <label class="contact-form-checkbox" for="pl-hab-obras-check"><input type="checkbox" id="pl-hab-obras-check" data-field-toggle="pl-hab-obras-group"> Czy w ostatnich latach przeprowadzono remont?</label>
        </div>
        <div id="pl-hab-obras-group" hidden>
          <div class="contact-form-field"><label for="pl-hab-obras-ano">Rok remontu *</label><input type="number" id="pl-hab-obras-ano" name="obras_ano" data-validate="renovation-year" data-validate-ref="ano_construcao" required disabled></div>
          <div class="contact-form-field"><label for="pl-hab-obras-desc">Proszę opisać wykonane prace *</label><textarea id="pl-hab-obras-desc" name="obras_descricao" minlength="10" required disabled></textarea></div>
        </div>
        <div class="contact-form-field"><label for="pl-hab-capital-edificio">Suma ubezpieczenia budynku (€) *</label><input type="number" id="pl-hab-capital-edificio" name="capital_edificio" min="0" step="1000" required></div>
        <div class="contact-form-field"><label for="pl-hab-capital-conteudo">Suma ubezpieczenia ruchomości (€) *</label><input type="number" id="pl-hab-capital-conteudo" name="capital_conteudo" min="0" step="500" required></div>`,
  },
  sections: `
<section class="section plain" aria-labelledby="warunki-dom">
  <div class="container narrow article-body">
    <h2 id="warunki-dom">Dom: warunki, które lokujemy</h2>
    <p>Powyżej pewnego kosztu odbudowy pytania się zmieniają. Poniżej opisujemy warunki referencyjne polis dla majątków o wysokiej wartości, które lokujemy u ubezpieczycieli — i z którymi porównujemy na piśmie każdą propozycję.</p>
    <ul class="hub-list">
      <li class="hub-item"><h3>Oględziny i koszt odbudowy</h3><p>Przy nieruchomościach o wyższej wartości ubezpieczyciel przeprowadza bezpłatne oględziny na miejscu, aby potwierdzić koszt odbudowy, doradzić w sprawie sum ubezpieczenia ruchomości i przedmiotów wartościowych oraz zarekomendować środki zapobiegawcze.</p></li>
      <li class="hub-item"><h3>Bez zasady proporcji</h3><p>Po przyjęciu rekomendowanych sum ubezpieczyciel rezygnuje ze stosowania zasady proporcji: szkoda częściowa jest wypłacana w całości, nawet jeśli koszty budowy w międzyczasie wzrosły.</p></li>
      <li class="hub-item"><h3>Gwarantowana odbudowa</h3><p>Po szkodzie całkowitej dom zostaje odbudowany, nawet jeśli koszt przekroczy sumę ubezpieczenia budynku — pod warunkiem przyjęcia sum zarekomendowanych po oględzinach.</p></li>
      <li class="hub-item"><h3>Zakwaterowanie o porównywalnym standardzie</h3><p>Zakwaterowanie zastępcze o porównywalnym standardzie, również dla zwierząt domowych i koni, przez cały czas, gdy dom nie nadaje się do zamieszkania — bez limitu kilku miesięcy typowego dla rynku masowego.</p></li>
      <li class="hub-item"><h3>Ogród, mury i budynki gospodarcze</h3><p>Drzewa, krzewy i trawniki, ogrodzenia i mury oporowe, baseny, budynki gospodarcze i domy gościnne z własnymi sumami ubezpieczenia — a nie z symbolicznym limitem.</p></li>
      <li class="hub-item"><h3>Woda, gaz i lokalizacja awarii</h3><p>Zlokalizowanie i naprawa wycieków wody, gazu lub oleju opałowego bez odrębnego podlimitu, wraz z utraconą wodą lub paliwem.</p></li>
      <li class="hub-item"><h3>Odszkodowanie według Państwa wyboru</h3><p>Wypłata pieniężna albo naprawa przez wybranych przez Państwa wykonawców, rzemieślników i konserwatorów — bez potrąceń przy żadnym z wariantów.</p></li>
      <li class="hub-item"><h3>Bez franszyzy przy dużych szkodach</h3><p>Powyżej określonej wysokości szkody franszyza przestaje obowiązywać — dokładnie tam, gdzie ważyłaby najwięcej.</p></li>
      <li class="hub-item"><h3>Nowoczesny dom</h3><p>Panele fotowoltaiczne, magazyny energii i agregaty prądotwórcze, ekologiczna modernizacja przy odbudowie oraz wymiana zamków po utracie lub kradzieży kluczy.</p></li>
      <li class="hub-item"><h3>Przystosowanie domu po inwalidztwie</h3><p>Prace dostosowujące dom, gdy członek rodziny dozna trwałego inwalidztwa w wyniku wypadku lub choroby.</p></li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="warunki-ruchomosci">
  <div class="container narrow article-body">
    <h2 id="warunki-ruchomosci">Ruchomości, kolekcje, odpowiedzialność cywilna i rodzina</h2>
    <h3>Ruchomości domowe</h3>
    <ul>
      <li><strong>Ochrona od wszystkich ryzyk, na całym świecie.</strong> Rzeczy osobiste chronione od wszystkich ryzyk — w domu, w podróży i w drugiej nieruchomości — bez odrębnego podlimitu dla tego, co mają Państwo przy sobie.</li>
      <li><strong>Ruchomości ponad sumę ubezpieczenia.</strong> Po przyjęciu rekomendowanych sum odszkodowanie może przekroczyć sumę ubezpieczenia ruchomości o uzgodniony z góry margines, jeśli ich rzeczywista wartość okaże się wyższa.</li>
      <li><strong>Bez podlimitów tam, gdzie to ważne.</strong> Przypadkowe uszkodzenie i utrata, kradzież z piwnic i budynków gospodarczych oraz meble ogrodowe — bez podlimitów, które w standardowych polisach odbierają ochronie realną treść.</li>
      <li><strong>Rzeczy gości i nowe zakupy.</strong> Rzeczy Państwa gości są chronione, a nowo nabyte przedmioty objęte automatycznie przez okres przewidziany na ich zgłoszenie.</li>
      <li><strong>Wydarzenia w domu.</strong> Odwołanie wydarzenia oraz konstrukcje tymczasowe — namioty, sceny — przy uroczystościach organizowanych w domu.</li>
    </ul>
    <h3 id="kolekcje">Sztuka, biżuteria i kolekcje</h3>
    <ul>
      <li><strong>Wartość uzgodniona.</strong> Dzieła sztuki, biżuteria, zegarki i kolekcje wpisane do polisy według wartości ustalonej na początku umowy na podstawie wyceny — tę kwotę wypłaca się przy szkodzie całkowitej, bez sporu o amortyzację.</li>
      <li><strong>Bez franszyzy.</strong> Przedmioty wartościowe ubezpieczone według wartości uzgodnionej lub zadeklarowanej nie są obciążone franszyzą.</li>
      <li><strong>Utrata wartości po renowacji.</strong> Jeśli przedmiot zostanie odrestaurowany, ale straci wartość rynkową, różnica jest wypłacana — a koszt naprawy nie ma górnego limitu.</li>
      <li><strong>Ochrona przed niedoszacowaniem.</strong> Jeśli przedmiot z aktualną profesjonalną wyceną okaże się w dniu szkody wart więcej niż jego suma ubezpieczenia, polisa wypłaca ponad wartość uzgodnioną, w określonym marginesie.</li>
      <li><strong>Nowe nabytki i kolekcje win.</strong> Nowe przedmioty objęte automatycznie przez określony czas, a kolekcje win i alkoholi — z własnymi warunkami przechowywania.</li>
    </ul>
    <h3>Odpowiedzialność cywilna</h3>
    <ul>
      <li><strong>Sumy dopasowane do majątku.</strong> Odpowiedzialność cywilna rodziny z sumami gwarancyjnymi rzędu kilku milionów euro, o zasięgu światowym.</li>
      <li><strong>Koszty obrony ponad sumę.</strong> Koszty obrony prawnej są pokrywane ponad sumę gwarancyjną, a nie z niej potrącane.</li>
      <li><strong>Kto jest chroniony.</strong> Domownicy, w tym dzieci studiujące poza domem, oraz osoby okazjonalnie opiekujące się Państwa zwierzętami; goście i personel domowy w związku z rezydencją.</li>
      <li><strong>Wszystkie rezydencje.</strong> Jako właściciel, najemca lub użytkownik — w Portugalii, w Hiszpanii albo wszędzie tam, gdzie rodzina ma dom.</li>
    </ul>
    <p>Więcej na <a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">stronie o odpowiedzialności cywilnej rodziny</a>.</p>
    <h3>Ochrona rodziny</h3>
    <ul>
      <li><strong>Porwanie i wymuszenie.</strong> Koszty związane z porwaniem i okupem członka rodziny, w tym wyspecjalizowani konsultanci i nagrody za informacje.</li>
      <li><strong>Carjacking i napad na dom.</strong> Wsparcie i odszkodowanie po carjackingu, napadzie na dom, pobiciu, agresji na drodze lub na pokładzie samolotu.</li>
      <li><strong>Groźby i nękanie.</strong> Konsultanci ds. bezpieczeństwa, tymczasowa relokacja i pomoc prawna, gdy członkowi rodziny się grozi lub gdy jest on uporczywie nękany.</li>
      <li><strong>Cyberprzemoc i reputacja.</strong> Psycholog, konsultant ds. cyberbezpieczeństwa, prawnik oraz — w razie potrzeby — koszty zmiany szkoły po powtarzających się aktach cyberprzemocy.</li>
      <li><strong>Wsparcie psychologiczne.</strong> Profesjonalna pomoc dla rodziny po każdym z tych zdarzeń.</li>
    </ul>
    <p class="legal-note">To są warunki referencyjne polis dla majątków o wysokiej wartości, które lokujemy u ubezpieczycieli. Zakres, limity, franszyzy i wyłączenia różnią się w zależności od ubezpieczyciela i ryzyka i są potwierdzane wyłącznie w dokumentacji wystawionej polisy.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mury-i-ruchomosci">
  <div class="container narrow article-body">
    <h2 id="mury-i-ruchomosci">Mury i ruchomości domowe — gdzie przebiega granica</h2>
    <p>Polska polisa mieszkaniowa dzieli ryzyko na <strong>mury</strong> (konstrukcja i elementy stałe) oraz <strong>ruchomości domowe</strong> (wszystko, co da się wynieść). Portugalskie <em>multirriscos habitação</em> robi to samo, używając pojęć <em>edifício</em> i <em>recheio</em> — ale granica między nimi nie zawsze biegnie tam, gdzie by się tego oczekiwało.</p>
    <p>Do <em>edifício</em> należą zwykle konstrukcja, dach, posadzki, instalacje, zabudowa kuchenna wykonana na stałe, armatura sanitarna. Do <em>recheio</em> — meble, sprzęt AGD wolnostojący, elektronika, odzież, sprzęt sportowy. Problematyczne są elementy pośrednie: <strong>klimatyzacja typu split</strong>, <strong>panele fotowoltaiczne</strong>, <strong>pergole i zabudowy tarasów</strong>, <strong>ogrodzenia i mury oporowe</strong>, <strong>baseny</strong>. Każdy ubezpieczyciel przypisuje je inaczej, a niektórzy wymagają zgłoszenia ich osobno, z podaniem wartości.</p>
    <div class="callout">
      <span class="callout-label">Co robimy w praktyce</span>
      Przechodzimy listę pozycji nietypowych zanim polisa zostanie wystawiona i zapisujemy w niej to, co ma być objęte ochroną. Basen wpisany do polisy jest ubezpieczony. Basen, o którym nikt nie wspomniał, jest tematem do dyskusji w dniu szkody — a to zawsze zła pora na dyskusję.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="wartosc-odbudowy">
  <div class="container narrow article-body">
    <h2 id="wartosc-odbudowy">Wartość odbudowy, czyli najczęstszy kosztowny błąd</h2>
    <p>Suma ubezpieczenia budynku powinna odpowiadać <strong>kosztowi odbudowy</strong>, a nie cenie transakcyjnej. W Portugalii różnica jest szczególnie duża w dwóch kierunkach. W Lizbonie czy Cascais cena zakupu zawiera wartość działki i lokalizacji, których pożar nie niszczy — więc suma równa cenie zakupu jest zawyżona i rok po roku opłacana zbyt wysoką składką. Na terenach o niskich cenach nieruchomości oraz w starym budownictwie bywa odwrotnie: odbudowa wychodzi drożej niż wartość rynkowa, zwłaszcza przy budynkach objętych wymogami konserwatorskimi lub o nietypowej konstrukcji.</p>
    <p>Znaczenie tej liczby wykracza poza szkody całkowite. Przy <em>regra proporcional</em> (zasadzie proporcji) niedoubezpieczenie obniża odszkodowanie także przy szkodzie częściowej — jeśli suma jest o 30% za niska, świadczenie za zniszczoną łazienkę może zostać obniżone o te same 30%. Mechanizm jest ten sam, który w Polsce nazywa się niedoubezpieczeniem; tu bywa stosowany bardziej konsekwentnie. Dlatego przy domach o wysokiej wartości tak duże znaczenie mają oględziny: po przyjęciu zarekomendowanych sum ubezpieczyciel może zrezygnować z tej zasady.</p>
    <h3>Co bierzemy pod uwagę przy ustalaniu sumy</h3>
    <ul>
      <li>Powierzchnię użytkową z <em>caderneta predial</em> oraz liczbę kondygnacji.</li>
      <li>Rok budowy i standard wykończenia — kamień naturalny, marmur, stolarka na wymiar realnie podnoszą koszt odbudowy.</li>
      <li>Elementy zewnętrzne: taras, basen, mur, brama, instalacja fotowoltaiczna.</li>
      <li>Dostępność działki dla ekipy budowlanej; na wąskich ulicach w starej zabudowie koszty rosną.</li>
      <li>Aktualne stawki za metr kwadratowy w regionie, nie sprzed pięciu lat.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="wspolnota">
  <div class="container narrow article-body">
    <h2 id="wspolnota">Wspólnota mieszkaniowa a <em>condomínio</em></h2>
    <p>Mieszkanie w Portugalii to <em>fração autónoma</em> w budynku zarządzanym przez <em>condomínio</em> — instytucja bardzo podobna do polskiej wspólnoty mieszkaniowej. Podobieństwo bywa jednak mylące, bo polisa <em>condomínio</em> zwykle kończy się tam, gdzie zaczyna się mieszkanie.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Podział ochrony między polisą condomínio a polisą własną</caption>
        <thead>
          <tr><th scope="col">Element</th><th scope="col">Zwykle polisa condomínio</th><th scope="col">Zwykle polisa własna</th></tr>
        </thead>
        <tbody>
          <tr><td>Konstrukcja, dach, klatka schodowa</td><td>Tak</td><td>—</td></tr>
          <tr><td>Elewacja, winda, części wspólne</td><td>Tak</td><td>—</td></tr>
          <tr><td>Wykończenie wnętrza mieszkania</td><td>Rzadko</td><td>Tak</td></tr>
          <tr><td>Ruchomości domowe</td><td>Nie</td><td>Tak</td></tr>
          <tr><td>Szkoda wyrządzona sąsiadowi (zalanie)</td><td>Tylko z części wspólnych</td><td>Tak, jeśli OC jest w zakresie</td></tr>
          <tr><td>Udział własny w szkodzie z części wspólnych</td><td>Dzielony między współwłaścicieli</td><td>—</td></tr>
        </tbody>
      </table>
    </div>
    <p>Warto poprosić zarząd <em>condomínio</em> o kopię polisy i sprawdzić dwie rzeczy: sumę ubezpieczenia budynku oraz to, czy w ogóle jest aktualna. Zdarzają się budynki, w których ubezpieczenie części wspólnych wygasło i nikt tego nie zauważył, dopóki nie przeciekł dach.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="zalania-i-sejsmika">
  <div class="container narrow article-body">
    <h2 id="zalania-i-sejsmika">Zalania i ryzyko sejsmiczne — dwa rozdziały, które trzeba przeczytać</h2>
    <h3>Zalania (<em>danos por água</em>)</h3>
    <p>To najczęstsza szkoda w portugalskich mieszkaniach i jednocześnie ta, w której najczęściej dochodzi do nieporozumień. Typowa polisa pokrywa skutki nagłego pęknięcia instalacji, ale wiele wariantów wyłącza <strong>stopniowe przecieki</strong>, <strong>zawilgocenie i pleśń</strong> oraz szkody wynikłe z <strong>braku konserwacji</strong>. Osobno traktowane jest <em>procura de avaria</em> — koszt zlokalizowania i odsłonięcia usterki, czyli skucia posadzki, żeby dojść do rury. W polisach bez tej pozycji sama naprawa bywa objęta, a droga do niej nie.</p>
    <p>Drugi element to <strong>przeciekanie przez taras lub dach</strong>, bardzo typowe w portugalskim budownictwie z płaskimi tarasami. Niektórzy ubezpieczyciele obejmują je, inni wyłączają albo obejmują tylko przy odpowiednim stanie hydroizolacji. To pytanie, które zadajemy przed wystawieniem polisy, nie po.</p>
    <h3>Ryzyko sejsmiczne (<em>risco sísmico</em>)</h3>
    <p>Portugalia leży w strefie aktywnej sejsmicznie — Lizbona i część południa kraju mają realne, choć rzadkie, ryzyko trzęsienia ziemi. Dla osoby przyjeżdżającej z Polski jest to nowa kategoria, o której wcześniej nie trzeba było myśleć.</p>
    <p>Ochrona sejsmiczna <strong>w większości portugalskich polis mieszkaniowych jest opcją dodatkową</strong>, a nie elementem standardowym. Jeśli jest wykupiona, ma zwykle własną, wyższą franszyzę, często określoną procentowo od sumy ubezpieczenia. Przy kredycie hipotecznym bank może wymagać jej włączenia — wymagania różnią się między bankami. Czy dana polisa obejmuje to ryzyko, wynika wyłącznie z jej warunków; sprawdzamy to wprost i informujemy pisemnie, zamiast zakładać.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="dom-letniskowy">
  <div class="container narrow article-body">
    <h2 id="dom-letniskowy">Dom letniskowy i nieruchomość stojąca puste</h2>
    <p>Wiele polskich rodzin kupuje w Portugalii nieruchomość używaną częściowo — kilka miesięcy w roku, czasem z krótkoterminowym wynajmem między pobytami. Dla ubezpieczyciela to zupełnie inne ryzyko niż mieszkanie zamieszkane na stałe i musi być zgłoszone jako takie.</p>
    <ul>
      <li><strong>Status „niezamieszkana” lub „druga nieruchomość”</strong> wpływa na składkę, ale przede wszystkim na zakres. Część polis ogranicza ochronę od kradzieży przy nieobecności powyżej określonej liczby dni z rzędu — typowo między 30 a 90, w zależności od ubezpieczyciela.</li>
      <li><strong>Wymogi zabezpieczeń</strong> bywają twardsze: zamki określonej klasy, rolety antywłamaniowe, czasem alarm z monitoringiem.</li>
      <li><strong>Zalanie w puste nieruchomości</strong> to klasyk. Niektóre polisy wymagają zakręcenia głównego zaworu wody na czas nieobecności — niespełnienie tego warunku może być podstawą odmowy.</li>
      <li><strong>Wynajem krótkoterminowy (<em>alojamento local</em>)</strong> to działalność gospodarcza i zwykła polisa mieszkaniowa go nie obejmuje. Potrzebny jest wariant uwzględniający wynajem, zwykle z OC wobec gości.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="polisa-z-banku">
  <div class="container narrow article-body">
    <h2 id="polisa-z-banku">Dlaczego polisa z banku nie zawsze jest tą najlepszą</h2>
    <p>Przy kredycie hipotecznym w Portugalii bank wymaga ubezpieczenia nieruchomości i zwykle proponuje własną polisę przy podpisywaniu umowy. To wygodne i całkowicie legalne — ale warto rozdzielić dwie rzeczy.</p>
    <p>Bank ma prawo wymagać, żeby nieruchomość stanowiąca zabezpieczenie kredytu była ubezpieczona, żeby suma odpowiadała jego wymogom i żeby bank był wskazany jako uprawniony z polisy. <strong>Nie ma natomiast prawa wymagać, by polisa została kupiona właśnie u niego</strong> — dopuszczalne jest przedstawienie polisy z innego źródła, o ile spełnia warunki umowy kredytowej. Praktyka pokazuje, że polisy sprzedawane przy okazji kredytu mają często sumę ustawioną pod wartość kredytu, a nie pod koszt odbudowy, oraz ograniczony zakres w pozycjach opisanych wyżej — zalania, ryzyka dodatkowe, OC.</p>
    <div class="callout">
      <span class="callout-label">Uwaga o kosztach</span>
      Banki czasem powiązują oprocentowanie kredytu z zakupem swoich produktów, w tym ubezpieczeń. Wtedy rachunek trzeba zrobić całościowo: różnica w marży kontra różnica w składce i zakresie. Liczymy to razem z Państwem, bez zakładania z góry, że nasza polisa wygra.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="lista-kontrolna">
  <div class="container narrow article-body">
    <h2 id="lista-kontrolna">Lista kontrolna przed podpisaniem polisy</h2>
    <ol class="process-steps">
      <li><div><strong>Suma ubezpieczenia budynku</strong><span> odpowiada kosztowi odbudowy, nie cenie zakupu ani kwocie kredytu.</span></div></li>
      <li><div><strong>Suma ruchomości</strong><span> była policzona, a nie przyjęta z domysłu. Wystarczy przejść mieszkanie pokój po pokoju.</span></div></li>
      <li><div><strong>Zalania</strong><span>: wiadomo, czy objęte jest <em>procura de avaria</em> i przeciekanie przez taras.</span></div></li>
      <li><div><strong>Ryzyko sejsmiczne</strong><span>: wiadomo, czy jest w zakresie, z jaką franszyzą i czy bank tego wymaga.</span></div></li>
      <li><div><strong>Odpowiedzialność cywilna</strong><span>: wiadomo, czy polisa obejmuje szkody wyrządzone sąsiadom i osobom trzecim, i do jakiej kwoty.</span></div></li>
      <li><div><strong>Status zamieszkania</strong><span> zgłoszony zgodnie z rzeczywistością, wraz z okresami nieobecności.</span></div></li>
      <li><div><strong>Elementy nietypowe</strong><span> — basen, panele, pergola, mur — wymienione w polisie z wartościami.</span></div></li>
      <li><div><strong>Franszyzy</strong><span> znane kwotowo dla każdego głównego ryzyka.</span></div></li>
      <li><div><strong>Termin zgłoszenia szkody</strong><span> i numer kontaktowy zapisane tam, gdzie będą pod ręką.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie nieruchomości w Portugalii — pytania',
  faq: [
    {
      q: 'Od jakiej wartości domu mają zastosowanie warunki dla majątków o wysokiej wartości?',
      a: '<p>Nie ma jednego progu dla całego rynku — każdy ubezpieczyciel ustala go sam, zwykle na podstawie kosztu odbudowy oraz wartości ruchomości, dzieł sztuki i kolekcji. Na podstawie kilku danych o nieruchomości mówimy, czy dany dom kwalifikuje się do takich warunków, i przedstawiamy rekomendację na piśmie.</p>',
    },
    {
      q: 'Czy ubezpieczenie domu w Portugalii jest obowiązkowe?',
      a: '<p>Dla mieszkania w budynku wielolokalowym ubezpieczenie od ryzyka pożaru jest wymagane w odniesieniu do części wspólnych i lokali — obowiązek wynika z przepisów o współwłasności. Przy kredycie hipotecznym ubezpieczenie nieruchomości wymaga dodatkowo bank, w zakresie wynikającym z umowy kredytowej. Dla domu wolnostojącego bez kredytu nie ma powszechnego obowiązku, choć praktycznie każdy właściciel taką polisę posiada.</p>',
    },
    {
      q: 'Czy trzęsienie ziemi jest objęte ochroną?',
      a: '<p>Tylko wtedy, gdy zostało wykupione. W większości portugalskich polis mieszkaniowych ryzyko sejsmiczne jest opcją dodatkową, zwykle z odrębną i wyższą franszyzą. Sprawdzamy to w warunkach konkretnej oferty i informujemy pisemnie — nie zakładamy obecności tej ochrony ani jej braku.</p>',
    },
    {
      q: 'Polisa wspólnoty już istnieje. Czy potrzebuję własnej?',
      a: '<p>Zwykle tak. Polisa <em>condomínio</em> obejmuje przede wszystkim konstrukcję i części wspólne; wykończenie mieszkania, ruchomości domowe i odpowiedzialność cywilna właściciela pozostają po Państwa stronie. Warto poprosić zarząd o kopię polisy — wtedy widać dokładnie, gdzie kończy się jedna ochrona i powinna zaczynać druga.</p>',
    },
    {
      q: 'Jak liczyć wartość ruchomości domowych?',
      a: '<p>Najprościej pokój po pokoju: meble, sprzęt AGD, elektronika, odzież, sprzęt sportowy i rowery, narzędzia. Suma zwykle wychodzi wyżej, niż podpowiada intuicja. Przedmioty o dużej wartości jednostkowej — biżuteria, instrumenty, sprzęt fotograficzny, dzieła sztuki — bywają objęte limitem na pozycję i często muszą być zgłoszone osobno.</p>',
    },
    {
      q: 'Mam dom, w którym mieszkam trzy miesiące w roku. Co zgłosić?',
      a: '<p>Rzeczywisty sposób użytkowania, wraz z długością okresów nieobecności. Ubezpieczyciel ustala na tej podstawie składkę i warunki, a niektóre polisy ograniczają ochronę od kradzieży po przekroczeniu określonej liczby dni pustostanu. Rozbieżność między zgłoszeniem a rzeczywistością wychodzi dokładnie w momencie szkody i może kosztować odszkodowanie.</p>',
    },
    {
      q: 'Czy mogę zrezygnować z polisy zaproponowanej przez bank?',
      a: '<p>Bank może wymagać ubezpieczenia nieruchomości o określonym zakresie i wskazania go jako uprawnionego z polisy, ale nie może wymagać zakupu właśnie swojego produktu. Warto jednak sprawdzić, czy oprocentowanie kredytu nie jest powiązane z zakupem produktów banku — jeśli tak, rachunek robimy całościowo, porównując marżę ze składką i zakresem.</p>',
    },
  ],
  related: [
    { url: '/pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/', label: 'Zakup nieruchomości w Portugalii: ubezpieczenie krok po kroku' },
    { url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/', label: 'Odpowiedzialność cywilna w Portugalii' },
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
  ],
};
