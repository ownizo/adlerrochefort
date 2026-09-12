/**
 * /pl/ubezpieczenie-zdrowotne-portugalia/
 *
 * Search intent: "ubezpieczenie zdrowotne w Portugalii" — a Polish resident or
 * soon-to-be resident working out how healthcare access works here and whether
 * private cover is needed on top.
 *
 * The Polish-specific hooks: NFZ and the EKUZ card are the reader's mental
 * model, and neither survives a permanent move — the S1 route and
 * deregistration from NFZ are the part nobody explains. Everything about
 * underwriting and pre-existing conditions is hedged, because part 18 of the
 * brief is emphatic that cover for prior conditions must never be stated as a
 * general fact.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'ubezpieczenie-zdrowotne-portugalia',
  url: '/pl/ubezpieczenie-zdrowotne-portugalia/',
  cluster: 'health',
  title: 'Ubezpieczenie zdrowotne w Portugalii dla Polaków | Adler & Rochefort',
  description:
    'SNS a prywatne ubezpieczenie zdrowotne w Portugalii: rejestracja, sieci placówek, okresy karencji, ocena ryzyka i choroby istniejące przed umową. Co zmienia się po wypisaniu się z NFZ.',
  keywords:
    'ubezpieczenie zdrowotne Portugalia, prywatna opieka zdrowotna Portugalia, SNS Portugalia, NFZ a Portugalia, ubezpieczenie zdrowotne dla Polaków Portugalia, karencja ubezpieczenie zdrowotne Portugalia',
  eyebrow: 'Ubezpieczenie zdrowotne',
  h1: 'Ubezpieczenie zdrowotne w Portugalii: publiczny SNS, prywatna polisa i co dzieje się z NFZ',
  standfirst:
    'Prywatne ubezpieczenie zdrowotne w Portugalii nie zastępuje systemu publicznego — kupuje się je po to, by mieć drugą drogę dostępu. Ta strona wyjaśnia, jak te dwa światy działają obok siebie i o co ubezpieczyciel zapyta, zanim wystawi polisę.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ubezpieczenie zdrowotne' }],
  pullquote: 'Polisę zdrowotną kupuje się wtedy, gdy jest się zdrowym. Później kupuje się już tylko to, co ubezpieczyciel zechce zaproponować.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie zdrowotne',
  formBranch: 'PL · Zdrowie',
  formSubject: 'Ubezpieczenie zdrowotne w Portugalii',
  formCta: 'Zapytaj o ofertę',
  formIntro:
    'Wystarczy liczba osób i ich wiek. Szczegóły dotyczące zdrowia omawiamy indywidualnie i nigdy przez formularz.',
  formPlaceholder:
    'Na przykład: małżeństwo 44 i 42 lata, dwoje dzieci (9 i 12 lat), mieszkamy w Lizbonie od stycznia.',
  sections: `
<section class="section plain" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">SNS, czyli portugalski system publiczny</h2>
    <p><em>Serviço Nacional de Saúde</em> to publiczna opieka zdrowotna w Portugalii, dostępna dla osób legalnie zamieszkujących kraj. Dostęp uzyskuje się przez rejestrację w przychodni rejonowej (<em>centro de saúde</em>) właściwej dla adresu zamieszkania — zwykle na podstawie NIF, dokumentu tożsamości, potwierdzenia adresu i dokumentu pobytowego. Po rejestracji otrzymuje się <em>número de utente</em>, czyli numer pacjenta, i w miarę dostępności zostaje się przypisanym do lekarza rodzinnego (<em>médico de família</em>).</p>
    <p>Dla osoby przyzwyczajonej do NFZ logika jest znajoma: podstawowa opieka jest punktem wejścia, a do specjalisty prowadzi skierowanie. Praktyczna różnica polega na tym, że przypisanie do lekarza rodzinnego nie jest automatyczne i w niektórych rejonach trzeba na nie poczekać. Czasy oczekiwania na specjalistów i planowe zabiegi bywają długie i różnią się znacząco w zależności od regionu i dziedziny.</p>
    <p>Opieka nagła jest dostępna niezależnie od statusu, a struktura opłat w SNS jest niska, z szerokim katalogiem zwolnień (<em>taxas moderadoras</em>). To nie system, przed którym trzeba się ubezpieczać — to system, którego kolejki chce się móc pominąć, gdy sprawa jest pilna, ale nie ratunkowa.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="nfz-i-ekuz">
  <div class="container narrow article-body">
    <h2 id="nfz-i-ekuz">NFZ, EKUZ i formularz S1 — co przestaje działać</h2>
    <p>To najczęściej pomijany element całej przeprowadzki, bo wygląda na formalność, a bywa różnicą między dostępem do opieki i jego brakiem.</p>
    <h3>Karta EKUZ</h3>
    <p>Europejska Karta Ubezpieczenia Zdrowotnego jest przeznaczona dla <strong>pobytu czasowego</strong> — wakacji, podróży służbowej, krótkiego wyjazdu. Nie jest podstawą dostępu do opieki dla osoby, która przeniosła miejsce zamieszkania do innego państwa. Po przeprowadzce do Portugalii i wypisaniu się z polskiego systemu karta przestaje spełniać swoją funkcję, nawet jeśli fizycznie nadal jest w portfelu i ma odległą datę ważności.</p>
    <h3>Wypisanie się z NFZ</h3>
    <p>Ubezpieczenie w NFZ jest zwykle powiązane z tytułem do ubezpieczenia w Polsce — zatrudnieniem, działalnością, KRUS, świadczeniem. Przy przeniesieniu rezydencji tytuł najczęściej ustaje i podlega wyrejestrowaniu. Warto to załatwić świadomie i mieć potwierdzenie na piśmie, bo bywa potrzebne później, przy rejestracji w portugalskim systemie lub przy wyliczaniu okresów ubezpieczenia.</p>
    <h3>Formularz S1</h3>
    <p>Dla niektórych grup — przede wszystkim emerytów pobierających polskie świadczenie i osób oddelegowanych — istnieje unijny mechanizm przenoszenia prawa do świadczeń: dokument S1 wydawany przez instytucję państwa, które pozostaje właściwe. Zarejestrowany w Portugalii daje dostęp do SNS na zasadach obowiązujących miejscowych. To rozwiązanie z zakresu koordynacji systemów zabezpieczenia społecznego, nie ubezpieczenie prywatne — nie wydajemy tych dokumentów i nie doradzamy w postępowaniach przed ZUS czy NFZ. Wspominamy o nim, bo wielu naszych klientów nie wie o jego istnieniu, a zmienia on całą kalkulację.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="prywatna-polisa">
  <div class="container narrow article-body">
    <h2 id="prywatna-polisa">Co daje prywatna polisa zdrowotna</h2>
    <p>Portugalskie prywatne ubezpieczenie zdrowotne działa najczęściej na zasadzie <strong>sieci placówek</strong> (<em>rede convencionada</em>): w ramach sieci płaci się ustaloną, niską dopłatę za wizytę lub badanie, a poza siecią obowiązuje zwrot kosztów według tabeli, zwykle z wyższym udziałem własnym. Sieć jest więc pierwszym pytaniem, jakie zadajemy — nie cena. Polisa z doskonałym cennikiem i bez szpitala w promieniu stu kilometrów nie jest dobrą polisą.</p>
    <p>Typowy zakres obejmuje ambulatoryjne konsultacje i diagnostykę, hospitalizację i zabiegi, a w zależności od wariantu także stomatologię, opiekę położniczą, fizjoterapię, medycynę alternatywną, opiekę za granicą i drugą opinię medyczną. Każdy z tych modułów ma własne limity roczne i własne franszyzy.</p>
    <ul>
      <li><strong>Limit roczny (<em>capital</em>)</strong> — osobny dla ambulatoryjnej i dla szpitalnej części, często różnej wysokości.</li>
      <li><strong>Współpłacenie (<em>copagamento</em>)</strong> — kwota lub procent przy każdym świadczeniu; w sieci zwykle niewielka.</li>
      <li><strong>Okresy karencji (<em>períodos de carência</em>)</strong> — zob. poniżej.</li>
      <li><strong>Zakres terytorialny</strong> — czy polisa działa przy podróżach do Polski, i w jakim trybie.</li>
      <li><strong>Wiek wstąpienia i wiek maksymalny</strong> — górne granice różnią się między ubezpieczycielami i bywają decydujące.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="karencja-i-ocena">
  <div class="container narrow article-body">
    <h2 id="karencja-i-ocena">Karencje, ocena ryzyka i choroby istniejące przed umową</h2>
    <h3>Okresy karencji</h3>
    <p>Prawie każda portugalska polisa zdrowotna przewiduje karencje: okresy od zawarcia umowy, w których dane świadczenia nie są jeszcze dostępne. Typowo najkrótsze dla konsultacji, dłuższe dla zabiegów planowych, najdłuższe dla opieki położniczej. Konkretne długości zależą od ubezpieczyciela i wariantu i są wymienione w warunkach — podajemy je zawsze pisemnie przed zawarciem umowy, bo to informacja, która decyduje o tym, czy polisa ma sens w danym momencie życia.</p>
    <h3>Ocena ryzyka (<em>questionário clínico</em>)</h3>
    <p>Przy zawarciu umowy wypełnia się ankietę medyczną. Bywa też wymagana dokumentacja lub badania. Na tej podstawie ubezpieczyciel podejmuje decyzję: przyjęcie na standardowych warunkach, przyjęcie z wyłączeniem określonych schorzeń, przyjęcie z podwyższoną składką albo odmowa. Nie mamy na tę decyzję wpływu i nie obiecujemy jej wyniku.</p>
    <div class="callout">
      <span class="callout-label">Rzecz najważniejsza na tej stronie</span>
      Choroby i dolegliwości istniejące przed zawarciem umowy (<em>doenças pré-existentes</em>) są w portugalskich polisach zdrowotnych <strong>standardowo wyłączone</strong>. Zdarzają się warianty i rozwiązania grupowe, w których część z nich może zostać objęta ochroną po określonym czasie lub po indywidualnej ocenie — zależy to od ubezpieczyciela, wariantu i wyniku oceny ryzyka, i nigdy nie jest przesądzone z góry. Jednocześnie zatajenie informacji w ankiecie jest najszybszą drogą do odmowy wypłaty. Odpowiadamy zgodnie z prawdą i sprawdzamy, jaki zakres jest w tej sytuacji realny.
    </div>
    <h3>Dlaczego wiek ma tak duże znaczenie</h3>
    <p>Składki rosną z wiekiem, a powyżej pewnych progów część ubezpieczycieli nie przyjmuje nowych klientów. Do tego dochodzi rzecz prostsza: im później się ubezpiecza, tym większe prawdopodobieństwo, że coś już zostało zdiagnozowane, a więc stanie się schorzeniem istniejącym przed umową. Osoba pięćdziesięcioletnia w dobrym zdrowiu ma zwykle otwarty rynek. Ta sama osoba dwa lata i jedną diagnozę później — już niekoniecznie.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="rodzina">
  <div class="container narrow article-body">
    <h2 id="rodzina">Polisa rodzinna</h2>
    <p>Ubezpieczenie rodzinne obejmuje zwykle małżonków lub partnerów oraz dzieci do określonego wieku, często z rabatem za liczbę osób. Kilka rzeczy, które w praktyce mają największe znaczenie:</p>
    <ul>
      <li><strong>Każda osoba przechodzi ocenę ryzyka osobno.</strong> Możliwe, że jedna z nich zostanie przyjęta na standardowych warunkach, a druga z wyłączeniem konkretnego schorzenia.</li>
      <li><strong>Dzieci</strong> — warto sprawdzić, czy szczepienia, wizyty kontrolne i stomatologia są objęte, oraz do jakiego wieku dziecko pozostaje na polisie rodzinnej.</li>
      <li><strong>Opieka położnicza</strong> ma zwykle najdłuższą karencję. Planowanie rodziny jest jednym z niewielu momentów, w których termin zawarcia polisy trzeba liczyć naprawdę dokładnie.</li>
      <li><strong>Szkoła i przedszkole</strong> czasem wymagają dokumentu ubezpieczenia; polisa prywatna zwykle to zapewnia, ale wymogi ustala placówka.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="wizy-i-pobyt">
  <div class="container narrow article-body">
    <h2 id="wizy-i-pobyt">Ubezpieczenie a wnioski o pobyt</h2>
    <p>Bardzo częste pytanie, na które odpowiedź musi być ostrożna. <strong>Nie możemy potwierdzić, że dana polisa spełnia wymogi konkretnego postępowania pobytowego lub wizowego.</strong> Wymogi ustala administracja, zależą od rodzaju wniosku i sytuacji wnioskodawcy oraz mogą się zmieniać. Ocena należy do właściwego urzędu, a interpretacja przepisów — do prawnika.</p>
    <p>Co możemy zrobić: przygotować ubezpieczenie zdrowotne o określonym zakresie, sumach i terytorium oraz dostarczyć dokumentację polisy i potwierdzenie zawarcia umowy w formie pisemnej, w języku angielskim. Jeśli pełnomocnik prawny wskaże wymagany minimalny zakres, dopasujemy ofertę do tego wymogu i wyraźnie zaznaczymy, co polisa obejmuje, a czego nie.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="lista-kontrolna-zdrowie">
  <div class="container narrow article-body">
    <h2 id="lista-kontrolna-zdrowie">Lista kontrolna</h2>
    <ol class="process-steps">
      <li><div><strong>Rejestracja w SNS</strong><span> zrobiona lub zaplanowana: <em>centro de saúde</em>, <em>número de utente</em>.</span></div></li>
      <li><div><strong>Sprawa NFZ</strong><span> uporządkowana i potwierdzona na piśmie; sprawdzone, czy dotyczy Państwa dokument S1.</span></div></li>
      <li><div><strong>Sieć placówek</strong><span> prywatnego ubezpieczyciela obejmuje szpital i przychodnie w rozsądnej odległości od domu.</span></div></li>
      <li><div><strong>Karencje</strong><span> znane dla każdego istotnego świadczenia — zwłaszcza przy planach okołoporodowych lub zabiegach.</span></div></li>
      <li><div><strong>Ankieta medyczna</strong><span> wypełniona zgodnie z prawdą; decyzja ubezpieczyciela znana na piśmie przed startem polisy.</span></div></li>
      <li><div><strong>Limity roczne i współpłacenie</strong><span> zrozumiane osobno dla części ambulatoryjnej i szpitalnej.</span></div></li>
      <li><div><strong>Podróże do Polski</strong><span>: wiadomo, czy i w jakim trybie polisa działa poza Portugalią.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie zdrowotne w Portugalii — pytania',
  faq: [
    {
      q: 'Czy jako rezydent mam dostęp do publicznej opieki zdrowotnej?',
      a: '<p>Osoby legalnie zamieszkujące Portugalię mogą zarejestrować się w SNS w przychodni rejonowej właściwej dla adresu i otrzymać <em>número de utente</em>. Wymagane dokumenty i praktyka bywają różne w poszczególnych przychodniach; zwykle są to NIF, dokument tożsamości, potwierdzenie adresu i dokument pobytowy. Warunki dostępu ustala administracja, nie ubezpieczyciel.</p>',
    },
    {
      q: 'Czy prywatna polisa obejmie chorobę, którą mam już teraz?',
      a: '<p>Standardowo nie — schorzenia istniejące przed zawarciem umowy są w portugalskich polisach zdrowotnych zwykle wyłączone. W niektórych wariantach i rozwiązaniach grupowych część z nich może zostać objęta po określonym czasie lub po indywidualnej ocenie ryzyka, ale zależy to od ubezpieczyciela i wariantu i nigdy nie jest zagwarantowane. Zawsze odpowiadamy w ankiecie zgodnie z prawdą i na tej podstawie szukamy realnego zakresu.</p>',
    },
    {
      q: 'Czy karta EKUZ wystarczy po przeprowadzce?',
      a: '<p>Nie. EKUZ jest przeznaczona dla pobytu czasowego, nie dla osoby, która przeniosła miejsce zamieszkania. Po przeprowadzce podstawą dostępu jest rejestracja w SNS jako rezydent, a w niektórych przypadkach — na przykład emerytów z polskim świadczeniem — unijny dokument S1.</p>',
    },
    {
      q: 'Jak długie są okresy karencji?',
      a: '<p>Różnią się między ubezpieczycielami i wariantami: najkrótsze dotyczą konsultacji, dłuższe zabiegów planowych, najdłuższe opieki położniczej. Dokładne długości są zapisane w warunkach konkretnej oferty i przekazujemy je pisemnie przed zawarciem umowy.</p>',
    },
    {
      q: 'Czy potrzebuję prywatnej polisy, jeśli jestem zarejestrowany w SNS?',
      a: '<p>To nie jest wybór „albo–albo”. SNS zapewnia dostęp do opieki, w tym nagłej; prywatna polisa daje krótszy czas oczekiwania na konsultacje i diagnostykę oraz możliwość wyboru placówki. Większość naszych klientów korzysta z obu równolegle. Jeśli budżet jest ograniczony, warto zacząć od wariantu ambulatoryjnego z dobrą siecią, a nie od najszerszego zakresu za wszelką cenę.</p>',
    },
    {
      q: 'Czy polisa zadziała, gdy jadę do Polski?',
      a: '<p>Zależy od zakresu terytorialnego. Część portugalskich polis zdrowotnych obejmuje leczenie za granicą w trybie zwrotu kosztów, część ogranicza się do przypadków nagłych, a część działa tylko w Portugalii. To jedno z pytań, które zadajemy na samym początku, bo dla osób regularnie jeżdżących do Polski bywa decydujące.</p>',
    },
  ],
  related: [
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
  ],
};
