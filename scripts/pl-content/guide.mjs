/**
 * /pl/ubezpieczenia-portugalia-przewodnik/
 *
 * The broad pillar page. Search intent: "ubezpieczenia w Portugalii" as a
 * general research query — someone who does not yet know which product they
 * need and wants the whole landscape in one place.
 *
 * It has to be a pillar without becoming a summary of the other seven pages,
 * so it covers what none of them own: the market's structure (agent, broker,
 * direct, bank), how a policy document is put together, the claims procedure,
 * renewal and cancellation rules, and the questions worth asking any
 * intermediary. It links to the product pages for the product detail.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'ubezpieczenia-portugalia-przewodnik',
  url: '/pl/ubezpieczenia-portugalia-przewodnik/',
  cluster: 'guide',
  title: 'Przewodnik po ubezpieczeniach w Portugalii | Adler & Rochefort',
  description:
    'Jak działa portugalski rynek ubezpieczeń: agent, broker i bank, budowa polisy, franszyzy, zgłaszanie szkody, wznowienia i wypowiedzenie. Przewodnik dla Polaków.',
  keywords:
    'ubezpieczenia Portugalia przewodnik, jak działają ubezpieczenia w Portugalii, agent ubezpieczeniowy Portugalia, zgłoszenie szkody Portugalia, wypowiedzenie polisy Portugalia, ASF Portugalia',
  eyebrow: 'Przewodnik',
  h1: 'Ubezpieczenia w Portugalii: przewodnik dla osób przyjeżdżających z Polski',
  standfirst:
    'Ta strona zbiera to, czego nie znajdzie się w żadnej ulotce: jak zbudowany jest portugalski rynek, jak czytać polisę, jak zgłosić szkodę, kiedy i jak można wypowiedzieć umowę oraz o co zapytać każdego agenta, zanim się coś podpisze.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Przewodnik po ubezpieczeniach' }],
  pullquote: 'Polisa to nie produkt, który się kupuje. To dokument, który ktoś kiedyś przeczyta bardzo uważnie — najlepiej, żeby to byli Państwo, a nie dopiero likwidator.',
  schemaType: 'Article',
  formHeading: 'Nie wiadomo, od czego zacząć?',
  formBranch: '',
  formSubject: 'Przewodnik po ubezpieczeniach (PL)',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę opisać sytuację własnymi słowami albo przesłać obecne polisy. Odpowiemy pisemnie, co w tej sytuacji ma sens, a co można spokojnie pominąć.',
  formPlaceholder:
    'Na przykład: mieszkamy w Portugalii od roku, mamy polisę domu z banku i kilka dzieł sztuki — nie wiemy, czy zakres jest odpowiedni.',
  sections: `
<section class="section plain" aria-labelledby="kto-jest-kim">
  <div class="container narrow article-body">
    <h2 id="kto-jest-kim">Kto jest kim na portugalskim rynku</h2>
    <p>Portugalski rynek ubezpieczeń jest nadzorowany przez <strong>ASF</strong> (<em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>) — odpowiednik polskiego nadzoru w zakresie ubezpieczeń. Każdy pośrednik musi być wpisany do rejestru ASF, a numer wpisu jest publiczny i można go sprawdzić. Warto to zrobić przy pierwszym kontakcie z kimkolwiek: to jedna minuta.</p>
    <ul>
      <li><strong>Ubezpieczyciel (<em>seguradora</em>)</strong> — podmiot, który ponosi ryzyko i wypłaca odszkodowanie. Sprzedaje również bezpośrednio, przez własne kanały.</li>
      <li><strong>Agent ubezpieczeniowy (<em>agente de seguros</em>)</strong> — pośrednik działający w oparciu o umowy z ubezpieczycielami i doradzający w ramach swojego portfela. Adler &amp; Rochefort jest zarejestrowanym agentem ubezpieczeniowym, ASF nr 425591790/3, bez umowy na wyłączność z żadnym ubezpieczycielem — z biurami w Lizbonie i Lagos oraz klientami w całej Portugalii i w Hiszpanii.</li>
      <li><strong>Broker (<em>corretor</em>)</strong> — pośrednik o szerszym mandacie, zwykle obsługujący większe ryzyka korporacyjne.</li>
      <li><strong>Bank</strong> — sprzedaje ubezpieczenia przy okazji kredytu, w kanale bancassurance. Wygodne, ale zakres bywa dopasowany do zabezpieczenia kredytu, nie do Państwa sytuacji.</li>
      <li><strong>Porównywarki</strong> — pokazują ceny. Nie odpowiadają na pytanie, czy porównywane polisy mają porównywalny zakres, a to zwykle jest pytanie ważniejsze.</li>
    </ul>
    <p>Ma to praktyczne znaczenie w jednym momencie: przy szkodzie. Kupując bezpośrednio lub przez porównywarkę, kontaktują się Państwo z likwidatorem ubezpieczyciela samodzielnie, w języku portugalskim. Mając agenta, mają Państwo kogoś, kto zna akta, zna terminy i prowadzi korespondencję.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="budowa-polisy">
  <div class="container narrow article-body">
    <h2 id="budowa-polisy">Jak zbudowana jest portugalska polisa</h2>
    <p>Polisa nie jest jednym dokumentem, a zestawem. Przy szkodzie czyta się je w określonej kolejności, a wygrywa zawsze ten bardziej szczegółowy.</p>
    <ol class="process-steps">
      <li><div><strong><em>Condições gerais</em></strong><span> — ogólne warunki ubezpieczenia. Definicje, zakres, wyłączenia, obowiązki stron. Dokument obszerny i podstawowy.</span></div></li>
      <li><div><strong><em>Condições especiais</em></strong><span> — warunki szczególne dla poszczególnych ryzyk lub modułów, modyfikujące warunki ogólne.</span></div></li>
      <li><div><strong><em>Condições particulares</em></strong><span> — warunki indywidualne Państwa umowy: dane, sumy, franszyzy, wykupione moduły. To jedyna kartka, na której widać, co konkretnie zostało kupione.</span></div></li>
      <li><div><strong><em>Ata adicional</em></strong><span> — aneks, który zmienia którykolwiek z powyższych dokumentów w trakcie trwania umowy.</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">Jak czytać to sensownie</span>
      Zaczynamy od <em>condições particulares</em>, bo tam są sumy i franszyzy. Potem od razu do rozdziału <em>exclusões</em> w warunkach ogólnych, bo tam mieszka rzeczywisty zakres. Reszta jest ważna, ale przy sprawdzaniu, czy polisa odpowiada potrzebom, te dwa miejsca rozstrzygają. Państwa wersję przygotowujemy po angielsku i pisemnie, przed podpisaniem.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="pojecia">
  <div class="container narrow article-body">
    <h2 id="pojecia">Pojęcia, które działają inaczej, niż podpowiada intuicja</h2>
    <h3>Franszyza (<em>franquia</em>)</h3>
    <p>Kwota, którą ponosi ubezpieczający przy każdej szkodzie. W Portugalii często podana <strong>jednocześnie kwotowo i procentowo</strong> — na przykład „10% szkody, minimum 250 EUR”. Przy małej szkodzie obowiązuje minimum, przy dużej procent. Przy ryzyku sejsmicznym franszyza jest zwykle liczona od sumy ubezpieczenia, a nie od szkody, i wtedy bywa znacznie wyższa, niż się wydaje.</p>
    <h3>Suma ubezpieczenia (<em>capital seguro</em>)</h3>
    <p>Górna granica odpowiedzialności, a jednocześnie podstawa do stosowania zasady proporcji. Zaniżenie sumy obniża odszkodowanie również przy szkodach częściowych.</p>
    <h3>Zasada proporcji (<em>regra proporcional</em>)</h3>
    <p>Mechanizm znany w Polsce jako niedoubezpieczenie: jeśli suma stanowi 70% wartości, odszkodowanie może zostać obniżone do 70%. Niektóre polisy wyłączają tę zasadę do określonego poziomu odchylenia — warto sprawdzić, czy dana oferta to przewiduje.</p>
    <h3>Okres karencji (<em>período de carência</em>)</h3>
    <p>Czas od zawarcia umowy, w którym określone świadczenia nie są jeszcze dostępne. Typowe w ubezpieczeniach zdrowotnych, spotykane także w innych produktach.</p>
    <h3>Obowiązek deklaracji ryzyka</h3>
    <p>Ubezpieczyciel podejmuje decyzję na podstawie tego, co zostało zgłoszone. Niezgodność między zgłoszeniem a rzeczywistością — nieruchomość opisana jako stale zamieszkana, a stojąca puste; działalność opisana zbyt wąsko — może prowadzić do obniżenia lub odmowy wypłaty. To najskuteczniejszy sposób na unieważnienie własnej ochrony i, niestety, nieszczególnie rzadki.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="szkoda">
  <div class="container narrow article-body">
    <h2 id="szkoda">Zgłoszenie szkody: procedura i terminy</h2>
    <ol class="process-steps">
      <li><div><strong>Zabezpieczyć sytuację.</strong><span> Zakręcić wodę, wyłączyć prąd, wezwać służby. Obowiązek minimalizowania szkody jest zapisany w warunkach.</span></div></li>
      <li><div><strong>Udokumentować.</strong><span> Zdjęcia przed sprzątaniem i przed naprawą, to najczęstszy błąd. Faktury, wycena szkody, dane świadków.</span></div></li>
      <li><div><strong>Zgłosić w terminie.</strong><span> Terminy są krótkie i liczone od dnia zdarzenia lub od dnia jego wykrycia; są wskazane w warunkach. Przy kradzieży wymagane jest zgłoszenie na policję, zwykle niezwłocznie.</span></div></li>
      <li><div><strong>Poczekać na oględziny.</strong><span> Przy szkodach powyżej pewnej wartości ubezpieczyciel wysyła rzeczoznawcę (<em>peritagem</em>). Naprawa przed oględzinami może być problemem, poza działaniami awaryjnymi.</span></div></li>
      <li><div><strong>Odpowiedź ubezpieczyciela.</strong><span> Jeśli decyzja jest niekorzystna, przysługuje reklamacja do ubezpieczyciela, a następnie droga przez ASF, <em>Livro de Reclamações</em> oraz alternatywne rozwiązywanie sporów. Prowadzimy tę korespondencję za klientów, także po niekorzystnej pierwszej decyzji — na tym polega obsługa szkody.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="wznowienia">
  <div class="container narrow article-body">
    <h2 id="wznowienia">Wznowienia, indeksacja i wypowiedzenie umowy</h2>
    <p>Portugalskie polisy majątkowe zawiera się zwykle na rok, z automatycznym przedłużeniem. Dwie rzeczy warto wiedzieć zawczasu.</p>
    <p><strong>Indeksacja.</strong> Wiele polis mieszkaniowych automatycznie podnosi sumę ubezpieczenia i składkę zgodnie ze wskaźnikiem — ma to sens, bo koszty odbudowy rosną. Nie zwalnia to jednak z okresowego sprawdzenia, czy suma odpowiada rzeczywistości, zwłaszcza po remoncie.</p>
    <p><strong>Wypowiedzenie.</strong> Rezygnacja z przedłużenia wymaga oświadczenia złożonego z odpowiednim wyprzedzeniem przed końcem okresu ubezpieczenia; termin wynika z warunków umowy i przepisów. Formę i termin sprawdzamy w konkretnej polisie, zanim cokolwiek zostanie wypowiedziane. Przy zmianie ubezpieczyciela zasada jest zawsze ta sama: <strong>najpierw potwierdzenie nowej ochrony na piśmie, potem wypowiedzenie starej</strong>. Dzień bez ochrony to dzień, w którym wszystko zależy od szczęścia.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="pytania-do-agenta">
  <div class="container narrow article-body">
    <h2 id="pytania-do-agenta">Siedem pytań, które warto zadać każdemu agentowi</h2>
    <p>Również nam. Jeśli któreś z nich nie znajduje szybkiej i konkretnej odpowiedzi, to sygnał ostrzegawczy.</p>
    <ol>
      <li><strong>Jaki jest Państwa numer rejestru ASF?</strong> Powinien być podany od razu i widoczny na stronie.</li>
      <li><strong>Z iloma ubezpieczycielami Państwo współpracują i czy doradztwo dotyczy tylko tego portfela?</strong> Uczciwa odpowiedź brzmi konkretnie, a nie „ze wszystkimi”.</li>
      <li><strong>Co dokładnie jest wyłączone z tej polisy?</strong> Dobry pośrednik odpowiada na to chętniej niż na pytanie o cenę.</li>
      <li><strong>Ile wynoszą franszyzy, kwotowo, dla każdego głównego ryzyka?</strong> Procenty bez kwot niczego nie mówią.</li>
      <li><strong>Kto prowadzi sprawę przy szkodzie i w jakim języku?</strong> To pytanie, dla którego w ogóle warto mieć agenta.</li>
      <li><strong>Czy dostanę wyjaśnienie warunków na piśmie przed podpisaniem?</strong> Ustne zapewnienia nie są częścią polisy.</li>
      <li><strong>Jak wyglądałby scenariusz, w którym ta polisa nie wypłaci odszkodowania?</strong> Najlepsze pytanie ze wszystkich i najrzadziej zadawane.</li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="produkty">
  <div class="container narrow">
    <h2 id="produkty">Szczegóły produktów</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-domu-portugalia/">Ubezpieczenie domu o wysokiej wartości</a></h3>
        <p>Oględziny i koszt odbudowy, sztuka i kolekcje według wartości uzgodnionej, <em>condomínio</em>, zalania, ryzyko sejsmiczne, nieruchomości używane sezonowo.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-zdrowotne-portugalia/">Ubezpieczenie zdrowotne dla rodzin</a></h3>
        <p>SNS, polisa portugalska i międzynarodowa, karencje, ocena ryzyka, sprawy NFZ i dokument S1.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-samochodu-portugalia/">Ubezpieczenie samochodu</a></h3>
        <p>Obowiązkowe OC, <em>danos próprios</em>, ISV i przerejestrowanie, historia szkodowa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">Odpowiedzialność cywilna rodziny</a></h3>
        <p>Sumy rzędu milionów euro, zasięg światowy, koszty obrony ponad sumę; OC zawodowa jako odrębna polisa.</p>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenia w Portugalii — pytania ogólne',
  faq: [
    {
      q: 'Jak sprawdzić, czy pośrednik jest uprawniony do sprzedaży ubezpieczeń?',
      a: '<p>Każdy pośrednik w Portugalii ma numer wpisu do rejestru ASF i powinien podawać go bez pytania. Rejestr ASF jest publiczny i można w nim zweryfikować wpis. Nasz numer to 425591790/3 i widnieje w stopce oraz na górze każdej strony tego serwisu.</p>',
    },
    {
      q: 'Czy da się dostać polisę w języku angielskim?',
      a: '<p>Samą polisę — zwykle nie: portugalscy ubezpieczyciele wystawiają dokumenty w języku portugalskim, bo tak wynika z przepisów. Natomiast wyjaśnienie zakresu, sum, franszyz i wyłączeń przekazujemy po angielsku i pisemnie przed podpisaniem. Niektórzy ubezpieczyciele udostępniają angielskie wersje warunków ogólnych, ale wersją wiążącą pozostaje portugalska.</p>',
    },
    {
      q: 'Czy mogę płacić składki z polskiego konta?',
      a: '<p>Zwykle tak — przelewy w euro z rachunku w Polsce są akceptowane. Polecenie zapłaty z portugalskiego IBAN bywa jednak warunkiem rabatu za płatność automatyczną i upraszcza sprawę przy wznowieniach. Praktyka zależy od ubezpieczyciela.</p>',
    },
    {
      q: 'Co zrobić, jeśli ubezpieczyciel odmawia wypłaty?',
      a: '<p>Najpierw reklamacja do ubezpieczyciela, na piśmie i z uzasadnieniem. Jeśli to nie wystarczy, dostępne są droga przez ASF, wpis do <em>Livro de Reclamações</em> oraz alternatywne rozwiązywanie sporów. Prowadzimy tę korespondencję za naszych klientów — obsługa szkody nie kończy się na pierwszej niekorzystnej decyzji.</p>',
    },
    {
      q: 'Ile kosztuje pomoc agenta?',
      a: '<p>Nie pobieramy od klientów opłat za doradztwo. Wynagrodzenie agenta jest zawarte w składce w formie prowizji od ubezpieczyciela — to standardowy model na tym rynku. W praktyce oznacza to, że polisa zawarta przez agenta nie jest z tego powodu droższa od tej samej polisy kupionej bezpośrednio.</p>',
    },
    {
      q: 'Jak wypowiedzieć polisę, której już nie potrzebuję?',
      a: '<p>Oświadczeniem złożonym z wyprzedzeniem przed końcem okresu ubezpieczenia; termin i forma wynikają z warunków umowy. Sprawdzamy je w konkretnej polisie, zanim cokolwiek zostanie złożone. Przy zmianie ubezpieczyciela nowa ochrona musi być potwierdzona na piśmie przed wypowiedzeniem starej.</p>',
    },
  ],
  related: [
    { url: '/pl/', label: 'Ubezpieczenia w Portugalii: strona główna' },
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
  ],
};
