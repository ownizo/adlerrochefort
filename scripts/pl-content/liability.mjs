/**
 * /pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/
 *
 * Search intent: "ubezpieczenie odpowiedzialności cywilnej w Portugalii" —
 * both the private householder and the freelancer who has been asked for
 * professional liability cover by a client.
 *
 * The slug says "odpowiedzialności cywilnej" rather than "OC" on purpose: in
 * Polish, OC reads as compulsory motor third-party cover, so an OC slug would
 * attract motor traffic to a page about professional indemnity. The page's
 * central original point is that Polish household policies bundle private
 * liability almost as a reflex, and Portuguese ones frequently do not — which
 * is the gap most Polish clients do not know they have.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const LIABILITY_PAGE = {
  slug: 'ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia',
  url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/',
  cluster: 'liability',
  title: 'Odpowiedzialność cywilna rodziny w Portugalii | Adler & Rochefort',
  description:
    'OC rodziny z sumami rzędu milionów euro, na całym świecie, z kosztami obrony ponad sumę: personel domowy, goście, basen, łódź. OC zawodowa — osobno.',
  keywords:
    'odpowiedzialność cywilna rodziny Portugalia, OC w życiu prywatnym Portugalia, responsabilidade civil familiar, OC prywatne wysoka suma gwarancyjna, OC zawodowa Portugalia, odpowiedzialność cywilna Hiszpania',
  eyebrow: 'Odpowiedzialność cywilna rodziny',
  h1: 'Odpowiedzialność cywilna rodziny w Portugalii: sumy w milionach, zasięg światowy',
  standfirst:
    'W polskich polisach mieszkaniowych OC w życiu prywatnym dokłada się niemal automatycznie, zwykle z niewielką sumą. W Portugalii <em>responsabilidade civil</em> trzeba kupić świadomie — a przy znacznym majątku suma liczona w dziesiątkach czy setkach tysięcy euro często nie wystarcza. OC zawodowa to osobna polisa i osobne pytania, opisane niżej.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Odpowiedzialność cywilna' }],
  pullquote: 'Odpowiedzialność cywilna to jedno z niewielu ryzyk bez górnej granicy. Dlatego kupuje się ją zanim się jej potrzebuje.',
  schemaType: 'Article',
  // Especificação v2, Parte B — this page's dedicated wizard replaces the
  // shared pl-zapytanie-ofertowe branch-select form. Same faturacao_anual
  // field as PT/EN/DE/NL RC Profissional, and the same 48-72h SLA.
  wizard: {
    idPrefix: 'pl-rcp',
    formName: 'pl-ubezpieczenie-odpowiedzialnosci-cywilnej-wizard',
    ramo: 'Odpowiedzialność cywilna',
    heading: 'Zapytaj o ubezpieczenie odpowiedzialności cywilnej',
    intro: 'Proszę podać najważniejsze informacje. Odpowiadamy w ciągu 48 do 72 godzin roboczych.',
    stepLabel2: 'Działalność',
    submitLabel: 'Zapytaj o ofertę',
    microNote:
      'Odpowiedź w ciągu 48 do 72 godzin roboczych. Dane są wykorzystywane wyłącznie do przygotowania oferty i przetwarzane zgodnie z RODO — patrz <a href="/en/privacy-policy" hreflang="en">polityka prywatności</a>.',
    fieldsHtml: `        <div class="contact-form-field"><label for="pl-rcp-faturacao">Roczny obrót *</label><input type="number" id="pl-rcp-faturacao" name="faturacao_anual" placeholder="Np. 85000" required></div>
        <p class="wizard-helper">Rodzaj działalności, pożądaną sumę ubezpieczenia oraz to, czy polisa jest wymagana umową lub przez izbę zawodową, ustalimy podczas kontaktu, który nastąpi później.</p>`,
  },
  sections: `
<section class="section plain" aria-labelledby="dwie-kategorie">
  <div class="container narrow article-body">
    <h2 id="dwie-kategorie">Dwie kategorie, jedno portugalskie słowo</h2>
    <p><em>Responsabilidade civil</em> obejmuje w Portugalii całą rodzinę odpowiedzialności cywilnej. Dla polskiego czytelnika to pierwsza rzecz do przestawienia w głowie, bo w Polsce „OC” oznacza przede wszystkim ubezpieczenie komunikacyjne. Tutaj trzeba rozróżniać trzy osobne produkty:</p>
    <ul>
      <li><strong><em>Responsabilidade civil automóvel</em></strong> — obowiązkowe OC komunikacyjne. Opisujemy je na <a href="/pl/ubezpieczenie-samochodu-portugalia/">stronie o ubezpieczeniu samochodu</a>.</li>
      <li><strong><em>Responsabilidade civil familiar</em></strong> — odpowiedzialność cywilna w życiu prywatnym: Państwo, domownicy, dzieci, często zwierzęta domowe.</li>
      <li><strong><em>Responsabilidade civil profissional</em></strong> — odpowiedzialność cywilna zawodowa, związana z wykonywaną pracą lub prowadzoną działalnością.</li>
    </ul>
    <p>Ta strona dotyczy przede wszystkim odpowiedzialności cywilnej rodziny, a w dalszej części — zawodowej, która pozostaje odrębnym produktem. Zakres każdej z nich zależy od ubezpieczyciela i wybranego wariantu — poniżej opisujemy, jak zwykle wygląda praktyka rynkowa.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="oc-rodziny">
  <div class="container narrow article-body">
    <h2 id="oc-rodziny">OC rodziny przy znacznym majątku</h2>
    <p>Odpowiedzialność cywilna to jedno z niewielu ryzyk, których wysokości nie wyznacza wartość tego, co się posiada, lecz rozmiar szkody wyrządzonej komuś innemu. Poważny wypadek z udziałem gościa, pracownika czy przypadkowego przechodnia może oznaczać roszczenie o koszty leczenia, utracone dochody i zadośćuczynienie liczone przez lata. A im większy majątek, tym bardziej oczywistym celem roszczenia staje się rodzina, która go posiada.</p>
    <p>Polisy dla majątków o wysokiej wartości, które lokujemy, mają zwykle następujące warunki referencyjne:</p>
    <ul class="hub-list">
      <li class="hub-item"><h3>Sumy dopasowane do majątku</h3><p>Odpowiedzialność cywilna rodziny z sumami gwarancyjnymi rzędu kilku milionów euro, o zasięgu światowym.</p></li>
      <li class="hub-item"><h3>Koszty obrony ponad sumę</h3><p>Koszty obrony prawnej są pokrywane ponad sumę gwarancyjną, a nie z niej potrącane.</p></li>
      <li class="hub-item"><h3>Kto jest chroniony</h3><p>Domownicy, w tym dzieci studiujące poza domem, oraz osoby okazjonalnie opiekujące się Państwa zwierzętami; goście i personel domowy w związku z rezydencją.</p></li>
      <li class="hub-item"><h3>Wszystkie rezydencje</h3><p>Jako właściciel, najemca lub użytkownik — w Portugalii, w Hiszpanii albo wszędzie tam, gdzie rodzina ma dom.</p></li>
    </ul>
    <h3>Sytuacje typowe dla domów o wysokiej wartości</h3>
    <ul>
      <li><strong>Personel domowy.</strong> Ogrodnik, pomoc domowa, opiekunka do dzieci, kierowca — szkoda wyrządzona przez nich osobom trzecim oraz szkoda, której sami doznają. Ta druga część ma w Portugalii odrębny reżim: pracodawca pomocy domowej ma ustawowy obowiązek zawarcia ubezpieczenia wypadkowego pracowników (<em>seguro de acidentes de trabalho</em>), którego OC nie zastępuje.</li>
      <li><strong>Goście i przyjęcia.</strong> Upadek na tarasie, wypadek przy basenie, szkoda podczas uroczystości organizowanej w domu.</li>
      <li><strong>Basen, korty, konie.</strong> Elementy, które podnoszą ryzyko szkody na osobie; warto sprawdzić, czy polisa nie wyłącza ich wprost i czy konie wymagają zgłoszenia.</li>
      <li><strong>Łodzie i skutery wodne.</strong> Małe jednostki bywają objęte polisą rodzinną do określonej długości lub mocy silnika. Większe wymagają odrębnej polisy jachtowej, a dla łodzi rekreacyjnych w Portugalii obowiązuje ustawowe ubezpieczenie OC.</li>
      <li><strong>Wynajem domu.</strong> Gdy rezydencja jest okresowo wynajmowana, odpowiedzialność wobec najemców i gości musi być zgłoszona — zwykła polisa rodzinna nie obejmuje działalności zarobkowej.</li>
      <li><strong>Dzieci za granicą.</strong> Studia, wymiana, praktyki — zasięg światowy i objęcie dzieci mieszkających poza domem sprawdzamy w definicji ubezpieczonego, a nie w ulotce.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Jaka suma jest właściwa</span>
      Punktem wyjścia jest to, co rodzina posiada i jak żyje: liczba domów i krajów, personel, basen, łódź, podróże, dzieci za granicą. Sumę rekomendujemy na piśmie, z uzasadnieniem — a jeśli podstawowa polisa nie oferuje wystarczającej sumy, wskazujemy, jak ją uzupełnić.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="oc-prywatne">
  <div class="container narrow article-body">
    <h2 id="oc-prywatne">OC w życiu prywatnym: luka, o której nikt nie wie</h2>
    <p>Polska polisa mieszkaniowa niemal zawsze zawiera OC w życiu prywatnym, często z sumą kilkuset tysięcy złotych, w cenie wtopionej w składkę. Przyzwyczajenie jest zatem takie, że ta ochrona po prostu jest.</p>
    <p>Portugalskie <em>multirriscos habitação</em> działa inaczej. Odpowiedzialność cywilna bywa elementem pakietu, ale w wielu wariantach jest <strong>ograniczona do szkód wyrządzonych sąsiadom w tym samym budynku</strong> — typowo zalania — z niskim limitem. Szersza odpowiedzialność cywilna w życiu prywatnym, obejmująca szkody wyrządzone osobom trzecim poza nieruchomością, jest wtedy osobnym rozszerzeniem albo osobną polisą. To zależy od ubezpieczyciela i wariantu, dlatego sprawdzamy ten punkt w warunkach, a nie w materiałach marketingowych.</p>
    <h3>Sytuacje, w których to ma znaczenie</h3>
    <ul>
      <li><strong>Pęknięta rura w mieszkaniu na piątym piętrze.</strong> Zalane sufity u dwóch sąsiadów, ich meble i elektronika. Najczęstszy scenariusz w portugalskim mieszkalnictwie i zwykle mieszczący się w zakresie — ale limit bywa niższy niż szkoda.</li>
      <li><strong>Rower elektryczny na ścieżce nadmorskiej.</strong> Potrącenie pieszego, złamanie, koszty leczenia i roszczenie o zadośćuczynienie. Poza nieruchomością, więc węższe warianty tego nie obejmą.</li>
      <li><strong>Pies, który ugryzł gościa.</strong> Ochrona zwykle wymaga zgłoszenia zwierzęcia, a rasy wymienione w przepisach o psach potencjalnie niebezpiecznych mają w Portugalii <strong>ustawowy obowiązek</strong> posiadania odrębnego ubezpieczenia OC.</li>
      <li><strong>Dziecko, które zbiło witrynę sklepu.</strong> W większości wariantów OC w życiu prywatnym obejmuje niepełnoletnich domowników.</li>
      <li><strong>Dachówka, która spadła z Państwa dachu na zaparkowany samochód.</strong> To odpowiedzialność właściciela nieruchomości i częsty punkt sporny przy szkodach z braku konserwacji.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Jedno pytanie, które warto zadać</span>
      „Czy moja polisa mieszkaniowa obejmuje odpowiedzialność cywilną poza nieruchomością, i z jakim limitem?” Jeśli odpowiedź nie pada w ciągu minuty, to zwykle znaczy, że nie obejmuje.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="oc-zawodowa">
  <div class="container narrow article-body">
    <h2 id="oc-zawodowa">Co pozostaje odrębne: OC zawodowa</h2>
    <p>Polisa rodzinna nie obejmuje odpowiedzialności związanej z pracą zawodową ani z prowadzeniem firmy — to zawsze osobna umowa. OC zawodowa chroni przed roszczeniami wynikającymi z wykonywanej pracy: błędu w usłudze, niedopatrzenia, szkody wyrządzonej klientowi lub jego mieniu, a w przypadku zawodów kontaktowych — szkody na osobie. Coraz więcej naszych polskich klientów potrzebuje jej z dwóch powodów jednocześnie: bo ryzyko jest realne i bo kontrahent wpisał ją do umowy.</p>
    <h3>Konsultanci i specjaliści IT pracujący zdalnie</h3>
    <p>Najczęstsza grupa. Polski lub międzynarodowy klient, praca z Portugalii, umowa B2B. Kontrakty korporacyjne regularnie wymagają <em>professional indemnity</em> z konkretną sumą, a czasem także <em>public liability</em>. Kluczowe pytania, które zadajemy: gdzie znajdują się klienci, jakiemu prawu podlega umowa, czy praca dotyczy systemów przetwarzających dane osobowe i czy wymagane jest rozszerzenie o szkody cybernetyczne. Zakres terytorialny i jurysdykcja to w tym przypadku pierwsza rzecz do sprawdzenia — nie suma.</p>
    <h3>Fizjoterapeuci, terapeuci, branża wellness</h3>
    <p>Praca polegająca na kontakcie z ciałem klienta oznacza ryzyko szkody na osobie. Ubezpieczyciele oceniają tu przede wszystkim <strong>zakres wykonywanych czynności</strong>, a nie nazwę zawodu: masaż, terapia manualna, zabiegi z użyciem urządzeń, nakłuwanie, zabiegi estetyczne i suplementacja to kategorie o bardzo różnym ryzyku i różnym traktowaniu. Część z nich jest wyłączona ze standardowych wariantów i wymaga indywidualnej oceny. Do tego dochodzą wymogi dotyczące uprawnień i rejestracji zawodowej w Portugalii — te ustala regulator branżowy, nie ubezpieczyciel, i nie wypowiadamy się o nich.</p>
    <h3>Małe firmy, warsztaty, lokale</h3>
    <p>Gdzie przyjmuje się klientów, tam potrzebna jest odpowiedzialność cywilna za miejsce prowadzenia działalności — od pośliźnięcia się na mokrej podłodze do szkody wyrządzonej przez pracownika. Przy zatrudnianiu dochodzi obowiązkowe ubezpieczenie wypadkowe pracowników (<em>seguro de acidentes de trabalho</em>), które w Portugalii jest wymagane ustawowo i stanowi odrębny produkt.</p>
    <h3>Wynajmujący nieruchomości</h3>
    <p>Przy wynajmie długoterminowym i przy <em>alojamento local</em> odpowiedzialność cywilna wobec najemców i gości jest osobnym tematem, a zwykła polisa mieszkaniowa zwykle nie obejmuje działalności zarobkowej.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="czego-nie-obejmuje">
  <div class="container narrow article-body">
    <h2 id="czego-nie-obejmuje">Czego OC zwykle nie obejmuje</h2>
    <p>Ta lista jest ważniejsza od listy tego, co jest objęte, bo właśnie tutaj rodzą się rozczarowania. Typowe wyłączenia w portugalskich polisach OC:</p>
    <ul>
      <li><strong>Szkody wyrządzone umyślnie</strong> oraz odpowiedzialność karna — ubezpieczenie dotyczy odpowiedzialności cywilnej.</li>
      <li><strong>Zobowiązania umowne przyjęte dobrowolnie</strong> ponad odpowiedzialność wynikającą z przepisów — na przykład kary umowne i gwarancje rezultatu.</li>
      <li><strong>Własne mienie</strong> i mienie powierzone, o ile nie dokupiono odpowiedniego rozszerzenia.</li>
      <li><strong>Szkody czysto majątkowe</strong> bez szkody rzeczowej lub osobowej — w wielu wariantach OC zawodowej to właśnie moduł, który trzeba włączyć świadomie.</li>
      <li><strong>Czynności poza zgłoszonym zakresem działalności.</strong> Jeśli polisa opisuje „doradztwo IT”, a szkoda powstała przy wdrożeniu instalacji elektrycznej, zakres jest co najmniej dyskusyjny.</li>
      <li><strong>Zdarzenia sprzed okresu ubezpieczenia</strong> — przy polisach zawarciowych (<em>claims made</em>) znaczenie ma moment zgłoszenia roszczenia i data retroaktywna.</li>
    </ul>
    <p>Dwa ostatnie punkty są najczęstszym powodem odmowy w OC zawodowej. Dlatego przy wystawianiu polisy opis działalności formułujemy razem z Państwem, słowo po słowie, i zapisujemy, co wchodzi w zakres.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="o-co-zapyta">
  <div class="container narrow article-body">
    <h2 id="o-co-zapyta">O co zapyta ubezpieczyciel przy OC zawodowej</h2>
    <ol class="process-steps">
      <li><div><strong>Dokładny opis działalności</strong><span> — nie nazwa zawodu, ale wykonywane czynności.</span></div></li>
      <li><div><strong>Roczne przychody</strong><span> lub ich prognoza; to zwykle podstawa taryfy.</span></div></li>
      <li><div><strong>Gdzie są klienci</strong><span> i jakiemu prawu podlegają umowy.</span></div></li>
      <li><div><strong>Wymagana suma gwarancyjna</strong><span>, jeśli wynika z kontraktu — warto przesłać odpowiedni fragment umowy.</span></div></li>
      <li><div><strong>Historia szkód i roszczeń</strong><span> z ostatnich lat, także tych zgłoszonych, a nieuznanych.</span></div></li>
      <li><div><strong>Kwalifikacje i rejestracje zawodowe</strong><span>, jeśli branża je przewiduje.</span></div></li>
      <li><div><strong>Liczba pracowników i podwykonawców</strong><span> oraz zakres ich prac.</span></div></li>
    </ol>
    <p class="legal-note">Przyjęcie ryzyka i ostateczny zakres zależą od decyzji ubezpieczyciela po ocenie ryzyka. Ta strona opisuje typową praktykę rynkową i nie stanowi potwierdzenia warunków konkretnej polisy ani porady prawnej co do obowiązków zawodowych.</p>
  </div>
</section>`,
  faqTitle: 'Odpowiedzialność cywilna w Portugalii — pytania',
  faq: [
    {
      q: 'Dlaczego suma gwarancyjna w milionach euro, a nie w setkach tysięcy?',
      a: '<p>Bo w odpowiedzialności cywilnej wysokość szkody wyznacza poszkodowany, a nie wartość Państwa majątku. Poważna szkoda na osobie — koszty leczenia, utracone dochody, zadośćuczynienie, koszty sądowe — potrafi przekroczyć typowe limity polis mieszkaniowych. Polisy dla majątków o wysokiej wartości oferują sumy rzędu kilku milionów euro, o zasięgu światowym, z kosztami obrony pokrywanymi ponad sumę gwarancyjną.</p>',
    },
    {
      q: 'Czy OC rodziny obejmuje personel domowy?',
      a: '<p>Szkody wyrządzone przez personel domowy osobom trzecim w związku z rezydencją są w polisach dla majątków o wysokiej wartości zwykle objęte. Wypadki, którym ulega sam pracownik, to osobny temat: w Portugalii pracodawca pomocy domowej ma ustawowy obowiązek zawarcia ubezpieczenia wypadkowego pracowników (<em>seguro de acidentes de trabalho</em>). Zajmujemy się obiema polisami razem.</p>',
    },
    {
      q: 'Czy moja polisa mieszkaniowa obejmuje OC w życiu prywatnym?',
      a: '<p>Może, ale nie w takim zakresie, jaki przywozi się z polskiego rynku. Wiele portugalskich polis mieszkaniowych ogranicza odpowiedzialność cywilną do szkód wyrządzonych sąsiadom w tym samym budynku i z niskim limitem. Szerszy zakres bywa osobnym rozszerzeniem. Sprawdzamy to w warunkach i podajemy limit kwotowo.</p>',
    },
    {
      q: 'Czy OC zawodowa jest w Portugalii obowiązkowa?',
      a: '<p>Dla części zawodów regulowanych obowiązek ubezpieczenia wynika z przepisów lub z zasad samorządu zawodowego, dla innych nie. Zakres tych obowiązków ustalają regulatorzy branżowi i nie wypowiadamy się o nim — to kwestia prawna. Niezależnie od przepisów coraz częściej wymaga jej kontrahent w umowie.</p>',
    },
    {
      q: 'Pracuję zdalnie z Portugalii dla klientów w Polsce. Czy portugalska polisa to obejmie?',
      a: '<p>To zależy od zakresu terytorialnego i jurysdykcji zapisanych w polisie, i jest pierwszą rzeczą, jaką sprawdzamy. Część wariantów obejmuje szkody i roszczenia w obrębie Unii Europejskiej, część ogranicza się do Portugalii, a roszczenia podlegające prawu spoza UE bywają wyłączone. Prosimy o przesłanie fragmentu umowy z wymogami ubezpieczeniowymi — wtedy dopasowujemy zakres do tego, co faktycznie trzeba spełnić.</p>',
    },
    {
      q: 'Jaka suma gwarancyjna jest odpowiednia?',
      a: '<p>Jeśli umowa z klientem wskazuje minimum, punktem wyjścia jest ta kwota. Poza tym patrzymy na największą realną szkodę, jaką praca może wywołać — w usługach informatycznych to zwykle skutki przestoju lub utraty danych, w zawodach kontaktowych szkoda na osobie. Sumy zaniżone do poziomu składki są najczęstszym błędem w tej kategorii.</p>',
    },
    {
      q: 'Prowadzę zabiegi kosmetyczne i wellness. Czy da się to ubezpieczyć?',
      a: '<p>Często tak, ale zakres zależy od tego, jakie dokładnie czynności są wykonywane. Zabiegi z naruszeniem ciągłości skóry, z użyciem urządzeń oraz zabiegi estetyczne o charakterze medycznym są traktowane odrębnie i część z nich jest wyłączona ze standardowych wariantów. Potrzebujemy szczegółowej listy czynności — to nie biurokracja, to jedyny sposób na polisę, która zadziała.</p>',
    },
    {
      q: 'Mam pracownika. Czy OC wystarczy?',
      a: '<p>Nie. Odpowiedzialność cywilna i ubezpieczenie wypadkowe pracowników (<em>seguro de acidentes de trabalho</em>) to dwie różne rzeczy, a to drugie jest w Portugalii wymagane ustawowo przy zatrudnianiu. Są to odrębne polisy i przy zgłoszeniu zatrudnienia zajmujemy się nimi łącznie.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu i mieszkania w Portugalii' },
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
  ],
};
