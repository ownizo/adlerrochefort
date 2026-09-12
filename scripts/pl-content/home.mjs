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
  title: 'Ubezpieczenie domu i mieszkania w Portugalii | Adler & Rochefort',
  description:
    'Mury i ruchomości domowe, condomínio a wspólnota mieszkaniowa, zalania, ryzyko sejsmiczne i wartość odbudowy. Jak ubezpieczyć nieruchomość w Portugalii, gdy przyjeżdża się z Polski.',
  keywords:
    'ubezpieczenie domu Portugalia, ubezpieczenie mieszkania Portugalia, multirriscos habitação, ubezpieczenie nieruchomości Portugalia Polacy, ubezpieczenie domu letniskowego Portugalia, wartość odbudowy Portugalia',
  eyebrow: 'Ubezpieczenie nieruchomości',
  h1: 'Ubezpieczenie domu i mieszkania w Portugalii: co naprawdę jest objęte ochroną',
  standfirst:
    'Portugalskie <em>multirriscos habitação</em> wygląda jak polska polisa mieszkaniowa i w dużej części nią jest. Różnice są jednak dokładnie w tych miejscach, w których rozstrzyga się szkoda: w sumie ubezpieczenia, w zalaniach i w tym, co należy do wspólnoty, a co do Państwa.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ubezpieczenie domu' }],
  pullquote: 'Suma ubezpieczenia to nie cena, jaką Państwo zapłacili. To koszt odbudowy tego, co zostanie zniszczone.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie nieruchomości',
  formBranch: 'PL · Dom',
  formSubject: 'Ubezpieczenie domu w Portugalii',
  formCta: 'Zapytaj o ofertę',
  formIntro:
    'Potrzebujemy kilku informacji o nieruchomości: rodzaj, powierzchnia, rok budowy, czy jest zamieszkana na stałe i czy jest kredyt hipoteczny.',
  formPlaceholder:
    'Na przykład: mieszkanie 95 m² w Cascais, budynek z 2004 roku, wspólnota, kredyt w Millennium, mieszkamy na stałe.',
  sections: `
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
    <p>Znaczenie tej liczby wykracza poza szkody całkowite. Przy <em>regra proporcional</em> (zasadzie proporcji) niedoubezpieczenie obniża odszkodowanie także przy szkodzie częściowej — jeśli suma jest o 30% za niska, świadczenie za zniszczoną łazienkę może zostać obniżone o te same 30%. Mechanizm jest ten sam, który w Polsce nazywa się niedoubezpieczeniem; tu bywa stosowany bardziej konsekwentnie.</p>
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
      <li><strong>Suma ubezpieczenia budynku</strong> odpowiada kosztowi odbudowy, nie cenie zakupu ani kwocie kredytu.</li>
      <li><strong>Suma ruchomości</strong> była policzona, a nie przyjęta z domysłu. Wystarczy przejść mieszkanie pokój po pokoju.</li>
      <li><strong>Zalania</strong>: wiadomo, czy objęte jest <em>procura de avaria</em> i przeciekanie przez taras.</li>
      <li><strong>Ryzyko sejsmiczne</strong>: wiadomo, czy jest w zakresie, z jaką franszyzą i czy bank tego wymaga.</li>
      <li><strong>Odpowiedzialność cywilna</strong>: wiadomo, czy polisa obejmuje szkody wyrządzone sąsiadom i osobom trzecim, i do jakiej kwoty.</li>
      <li><strong>Status zamieszkania</strong> zgłoszony zgodnie z rzeczywistością, wraz z okresami nieobecności.</li>
      <li><strong>Elementy nietypowe</strong> — basen, panele, pergola, mur — wymienione w polisie z wartościami.</li>
      <li><strong>Franszyzy</strong> znane kwotowo dla każdego głównego ryzyka.</li>
      <li><strong>Termin zgłoszenia szkody</strong> i numer kontaktowy zapisane tam, gdzie będą pod ręką.</li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie nieruchomości w Portugalii — pytania',
  faq: [
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
