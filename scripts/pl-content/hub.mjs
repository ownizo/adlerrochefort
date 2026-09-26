/**
 * /pl/ — the Polish market homepage, which is also the cluster hub.
 *
 * Search intent: "ubezpieczenie w Portugalii" — someone Polish who lives in,
 * or is moving to, Portugal and wants to know how insurance works here and who
 * can arrange it. So the page's job is orientation plus routing to the seven
 * supporting pages, not an exhaustive treatment of any one product.
 *
 * The angle that makes this page Polish rather than translated: the reader is
 * fluent in a system where OC is compulsory motor cover, where private
 * liability rides along inside a home policy, and where NFZ is a given. Every
 * one of those assumptions is wrong in Portugal, and naming them is more
 * useful than a generic "welcome to insurance in Portugal" introduction.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HUB_PAGE = {
  slug: 'pl',
  url: '/pl/',
  cluster: 'hub',
  isHub: true,
  title: 'Ubezpieczenia majątku · Portugalia i Hiszpania | Adler & Rochefort',
  description:
    'Domy o wysokiej wartości, sztuka i kolekcje, OC rodziny i międzynarodowe ubezpieczenie zdrowotne w Portugalii i Hiszpanii. Indywidualnie, na piśmie.',
  ogTitle: 'Ubezpieczenia majątków o wysokiej wartości w Portugalii i Hiszpanii',
  keywords:
    'ubezpieczenie Portugalia, ubezpieczenie majątku Portugalia, ubezpieczenie domu o wysokiej wartości Portugalia, ubezpieczenie dzieł sztuki Portugalia, odpowiedzialność cywilna rodziny Portugalia, ubezpieczenia Hiszpania, ubezpieczenia dla Polaków w Portugalii',
  eyebrow: 'Klienci prywatni · Portugalia i Hiszpania',
  h1: 'Ubezpieczenia majątków<br><em>o wysokiej wartości.</em>',
  standfirst:
    'Rezydencje, sztuka i kolekcje, odpowiedzialność cywilna i ochrona rodziny — w Portugalii i Hiszpanii. Indywidualna ocena ryzyka, rekomendacja na piśmie i jeden doradca — od pierwszego kontaktu do likwidacji szkody.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [{ name: 'Strona główna', url: '/pl/' }],
  pullquote:
    'Powyżej pewnej wartości pytanie nie brzmi już, czy jest się ubezpieczonym. Brzmi: czy polisa została napisana dla tego, co Państwo posiadają.',
  schemaType: 'WebPage',
  formHeading: 'Porozmawiajmy o Państwa sytuacji',
  formBranch: '',
  formSubject: 'Zapytanie ogólne (PL)',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę napisać, co ma być objęte ochroną, albo przesłać nam obecną polisę. Odpowiemy pisemnie: co warto zmienić, jakie informacje będą potrzebne i jak mógłby wyglądać zakres.',
  formPlaceholder:
    'Na przykład: dom w Cascais i apartament w Marbelli, kolekcja obrazów i dwa samochody — chcielibyśmy przejrzeć obecne polisy.',
  sections: `
<section class="section plain" aria-labelledby="co-sie-zmienia">
  <div class="container narrow article-body">
    <h2 id="co-sie-zmienia">Co się zmienia, kiedy przyjeżdża się z polskiego rynku</h2>
    <p>Portugalski rynek ubezpieczeń nie jest polskim rynkiem przetłumaczonym na portugalski. Inaczej dzieli się ryzyka, inaczej rozumie odpowiedzialność cywilną i inaczej liczy sumy ubezpieczenia — a przy majątku o wysokiej wartości każda z tych różnic waży więcej.</p>
    <p>Osoba, która ubezpieczała się w Polsce, przywozi do Portugalii zestaw bardzo rozsądnych nawyków — i kilka założeń, które tu po prostu nie obowiązują. To nie kwestia lepszego czy gorszego rynku. Ryzyka są inaczej pogrupowane, a granice między polisami przebiegają w innych miejscach.</p>
    <p>Trzy różnice powodują najwięcej nieporozumień:</p>
    <ul>
      <li><strong>„OC” to w Polsce przede wszystkim ubezpieczenie komunikacyjne.</strong> W Portugalii <em>responsabilidade civil</em> obejmuje całą rodzinę odpowiedzialności cywilnej: komunikacyjną, prywatną i zawodową. Gdy ktoś pyta o „OC”, zawsze dopytujemy, którą z nich ma na myśli — bo to trzy różne polisy.</li>
      <li><strong>Odpowiedzialność cywilna w życiu prywatnym</strong> jest w polskich polisach mieszkaniowych zwykle dołączana niemal automatycznie. W portugalskim <em>multirriscos habitação</em> może być elementem pakietu, ale w wielu wariantach jest ograniczona do szkód wyrządzonych sąsiadom w budynku lub całkowicie pominięta. Zależy to od ubezpieczyciela i wybranego wariantu — dlatego sprawdzamy to w warunkach, a nie w ulotce.</li>
      <li><strong>NFZ nie ma portugalskiego odpowiednika w sensie, w jakim się go używa.</strong> Publiczny SNS działa na innej logice: rejestracja w przychodni rejonowej, lekarz rodzinny, kolejki do specjalistów. Prywatne ubezpieczenie zdrowotne nie zastępuje SNS — kupuje się je po to, żeby mieć drugą drogę dostępu.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="slownik">
  <div class="container narrow article-body">
    <h2 id="slownik">Słownik, który oszczędza najwięcej czasu</h2>
    <p>Polisę i tak dostanie Pan lub Pani po portugalsku — takie są przepisy. Warto więc znać sześć słów, które pojawiają się w każdym dokumencie:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Podstawowe pojęcia ubezpieczeniowe po polsku i po portugalsku</caption>
        <thead>
          <tr><th scope="col">Po polsku</th><th scope="col">Po portugalsku</th><th scope="col">Na co zwrócić uwagę</th></tr>
        </thead>
        <tbody>
          <tr><td>Składka</td><td><em>prémio</em></td><td>Zwykle płatna rocznie; rozłożenie na raty często kosztuje dodatkowo.</td></tr>
          <tr><td>Suma ubezpieczenia</td><td><em>capital seguro</em></td><td>Najczęstsze źródło problemów przy szkodzie — patrz niedoubezpieczenie.</td></tr>
          <tr><td>Udział własny / franszyza</td><td><em>franquia</em></td><td>Bywa podana kwotowo <em>i</em> procentowo; liczy się ta mniej korzystna.</td></tr>
          <tr><td>Wyłączenia</td><td><em>exclusões</em></td><td>Tu naprawdę mieszka treść polisy. Czytamy ten rozdział pierwszy.</td></tr>
          <tr><td>Szkoda</td><td><em>sinistro</em></td><td>Termin zgłoszenia jest krótki i liczy się od dnia zdarzenia.</td></tr>
          <tr><td>Ogólne warunki</td><td><em>condições gerais</em></td><td>Dokument nadrzędny; <em>condições particulares</em> go modyfikują.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <span class="callout-label">Praktyczna zasada</span>
      Niedoubezpieczenie (<em>regra proporcional</em>) działa w Portugalii tak samo bezlitośnie jak w Polsce: jeśli suma ubezpieczenia jest o 40% za niska, odszkodowanie może zostać obniżone w tej samej proporcji — również przy szkodzie częściowej. Dlatego przy nieruchomości rozmawiamy o wartości odbudowy, a nie o cenie zakupu.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="ubezpieczenia">
  <div class="container narrow">
    <h2 id="ubezpieczenia">Co chronimy</h2>
    <p>Każde ryzyko oceniane indywidualnie, a cały majątek gospodarstwa domowego — domy, kolekcje, samochody, odpowiedzialność cywilna i zdrowie — przeglądany razem, żeby luka w jednej polisie nie ukryła się za datą innej.</p>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-domu-portugalia/">Domy i rezydencje o wysokiej wartości</a></h3>
        <p>Oględziny i koszt odbudowy, rezygnacja z zasady proporcji, gwarantowana odbudowa, zakwaterowanie o porównywalnym standardzie — oraz portugalskie realia: <em>condomínio</em>, zalania i ryzyko sejsmiczne.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-domu-portugalia/#kolekcje">Sztuka, biżuteria i kolekcje</a></h3>
        <p>Wartość uzgodniona na podstawie wyceny, bez franszyzy, z ochroną przed niedoszacowaniem i utratą wartości po renowacji.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">Odpowiedzialność cywilna rodziny</a></h3>
        <p>Sumy gwarancyjne rzędu kilku milionów euro, zasięg światowy, koszty obrony ponad sumę — personel domowy, goście, basen, łódź. OC zawodowa — osobno.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-zdrowotne-portugalia/">Międzynarodowe ubezpieczenie zdrowotne</a></h3>
        <p>Dla całej rodziny: wybór szpitali w Portugalii, w Polsce i na świecie, obok publicznego SNS, z karencjami i oceną ryzyka wyjaśnionymi na piśmie.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-samochodu-portugalia/">Samochody</a></h3>
        <p>Obowiązkowe OC po portugalsku, odpowiednik AC, samochody o wysokiej wartości, przerejestrowanie i ISV oraz historia szkodowa z Polski.</p>
      </li>
    </ul>
    <h3 id="ochrona-specjalistyczna">Ochrona specjalistyczna</h3>
    <p>Ryzyka, których nie obejmie żadna polisa domowa — w Portugalii i w Hiszpanii, lokowane na rynkach specjalistycznych i przez partnerów co-brokerage.</p>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-porwanie-okup/">Porwanie, okup i wymuszenie</a></h3>
        <p>Konsultanci kryzysowi 24/7, zwrot okupu, porwanie ekspresowe i cyberwymuszenie — z pełną poufnością.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-winnica-posiadlosc/">Posiadłości wiejskie i winnice</a></h3>
        <p>Quinta, herdade, finca: dom, winiarnia, zapasy wina, pożar i OC enoturystyki w jednym programie.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-budowa-willi/">Budowa i remont willi</a></h3>
        <p>Ubezpieczenie robót, OC inwestora, istniejący budynek, seguro decenal i odbiór bez luki w ochronie.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-wynajem-willi/">Wynajem luksusowej willi</a></h3>
        <p>Alojamento Local i licencje regionalne, szkody wyrządzone przez gości, utrata dochodu, personel.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-koni/">Konie i stajnie</a></h3>
        <p>Śmierć i kradzież, leczenie, utrata użyteczności, stajnie oraz OC posiadacza konia.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-lotnictwo-prywatne/">Lotnictwo prywatne</a></h3>
        <p>Samoloty, śmigłowce i drony: casco, OC wobec osób trzecich i pasażerów, załoga, hangar.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-cyber-oszustwa-rodzina/">Cyberochrona i oszustwa</a></h3>
        <p>Przekierowane przelewy przy zakupie domu, kradzież tożsamości, cyberwymuszenie, pomoc 24/7.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="przewodniki">
  <div class="container narrow">
    <h2 id="przewodniki">Przewodniki na trzy najczęstsze momenty</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/przeprowadzka-do-portugalii-ubezpieczenia/">Przeprowadzka do Portugalii</a></h3>
        <p>Kolejność działań: co ustawić przed wyjazdem, co dopiero po uzyskaniu NIF, i gdzie najczęściej powstaje luka w ochronie.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/">Zakup nieruchomości</a></h3>
        <p>Czego wymaga bank przy kredycie hipotecznym, jak ustalić wartość odbudowy i dlaczego data rozpoczęcia ochrony to dzień <em>escritura</em>.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenia-portugalia-przewodnik/">Przewodnik po ubezpieczeniach w Portugalii</a></h3>
        <p>Całość w jednym miejscu: pojęcia, dokumenty, terminy, zgłaszanie szkody i pytania, które warto zadać każdemu agentowi.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="jak-pracujemy">
  <div class="container narrow article-body">
    <h2 id="jak-pracujemy">Jak pracujemy</h2>
    <p>Adler &amp; Rochefort to marka handlowa spółki Ownizo, Unipessoal Lda. — pośrednika ubezpieczeniowego dla klientów prywatnych o znacznym majątku. Mamy biura w Lizbonie i Lagos, a klientów w całej Portugalii i w Hiszpanii, gdzie działamy w ramach unijnej swobody świadczenia usług, pod jednym wpisem ASF nr 425591790/3. Nie mamy umowy na wyłączność z żadnym ubezpieczycielem i doradzamy w ramach portfela ubezpieczycieli, z którymi współpracujemy.</p>
    <p>Nie jesteśmy porównywarką cen. Składka jest wynikiem analizy, a nie jej punktem wyjścia. Nasza praca polega na dopasowaniu zakresu do majątku, wyjaśnieniu warunków po angielsku i pisemnie oraz na tym, żeby przy szkodzie mieć po swojej stronie tę samą osobę, która polisę ułożyła. Dyskrecja jest częścią tej pracy: informacje o tym, co Państwo posiadają, trafiają wyłącznie do ubezpieczycieli, do których zwrócimy się za Państwa zgodą.</p>
    <ol class="process-steps">
      <li><div><strong>Przegląd sytuacji.</strong><span> Co ma być chronione i gdzie, jaka jest wartość domów, kolekcji i samochodów, kto należy do gospodarstwa domowego, jakie polisy już istnieją.</span></div></li>
      <li><div><strong>Zakres przed ceną.</strong><span> Najpierw ustalamy, co polisa musi obejmować, a co może zostać pominięte świadomie. Tam, gdzie ryzyko tego wymaga, dokumentację — oględziny, wyceny, zabezpieczenia — ocenia underwriter ubezpieczyciela.</span></div></li>
      <li><div><strong>Warunki po angielsku.</strong><span> Zanim cokolwiek zostanie podpisane, dostaje Pan lub Pani wyjaśnienie sumy ubezpieczenia, franszyz, wyłączeń i terminów — pisemnie.</span></div></li>
      <li><div><strong>Jeden doradca, aż do szkody.</strong><span> Ta sama osoba od pierwszego przeglądu przez wznowienia po zgłoszenie szkody, kontakt z ubezpieczycielem i likwidatorem oraz pilnowanie terminów — pisemnie, aż do wypłaty.</span></div></li>
    </ol>
    <p class="legal-note">Zakres ochrony zależy od ubezpieczyciela i wybranego wariantu polisy. Na tej stronie opisujemy, jak zwykle działa portugalski rynek — nie jest to potwierdzenie warunków konkretnej umowy.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="bledy">
  <div class="container narrow article-body">
    <h2 id="bledy">Pięć błędów, które widzimy najczęściej</h2>
    <ul>
      <li><strong>Suma ubezpieczenia ustawiona na cenę zakupu.</strong> Do wyliczenia odszkodowania liczy się koszt odbudowy, a w Portugalii ostatnie lata mocno go podniosły.</li>
      <li><strong>Założenie, że polisa wspólnoty (<em>condomínio</em>) obejmuje wnętrze mieszkania.</strong> Zwykle kończy się na częściach wspólnych i konstrukcji.</li>
      <li><strong>Podpisanie polisy z banku bez sprawdzenia zakresu.</strong> Bank ma prawo wymagać ubezpieczenia jako zabezpieczenia kredytu, ale nie ma prawa wymagać, żeby to była jego polisa.</li>
      <li><strong>Brak zaświadczenia o historii szkodowej z Polski.</strong> Po zakończeniu umowy zdobycie go bywa bardzo trudne. Warto poprosić o nie zawczasu.</li>
      <li><strong>Podanie nieruchomości jako stale zamieszkanej, gdy stoi puste przez pół roku.</strong> Ubezpieczyciel ustala składkę i zakres na podstawie tej informacji; rozbieżność wychodzi dokładnie przy szkodzie.</li>
    </ul>
  </div>
</section>`,
  // The portrait band and the insurer row below it are rendered by
  // scripts/lib/site-sections.mjs; only the Polish copy lives here.
  audience: {
    heading: 'Dla kogo <em>pracujemy</em>',
    body:
      'Doradzamy polskim rodzinom i przedsiębiorcom, którzy mają w Portugalii lub w Hiszpanii dom, drugą nieruchomość albo znaczną część majątku: rezydencje, dzieła sztuki i kolekcje, samochody, a do tego odpowiedzialność cywilną i zdrowie całej rodziny. Jeden doradca prowadzi całość — od przeglądu obecnych polis przez propozycję i zawarcie umowy po obsługę szkody — pisemnie, po angielsku i z pełną dyskrecją.',
    alt: 'Doradca ubezpieczeniowy dla klientów prywatnych w Portugalii i Hiszpanii',
  },
  insurers: {
    heading: 'Ubezpieczyciele i partnerzy co-brokerage, <em>z którymi współpracujemy</em>',
    lead:
      'Nie mamy umowy na wyłączność z żadnym ubezpieczycielem. Propozycje dobieramy w ramach naszego portfela ze względu na treść warunków, jakość obsługi i sposób likwidacji szkód — a nie ze względu na najniższą składkę.',
  },
  faqTitle: 'Ubezpieczenia w Portugalii — pytania Polaków',
  faq: [
    {
      q: 'Czy mogę zostawić moje polskie ubezpieczenia po przeprowadzce do Portugalii?',
      a: '<p>Zależy od polisy. Większość polskich ubezpieczeń majątkowych i komunikacyjnych jest skonstruowana wokół miejsca zamieszkania i rejestracji w Polsce, więc po wyprowadzce ta podstawa przestaje odpowiadać rzeczywistości — nawet jeśli formalnie umowa nadal trwa. Zalecamy pisemne potwierdzenie u polskiego ubezpieczyciela, czy i jak długo ochrona obowiązuje po zmianie miejsca zamieszkania, i dopiero na tej podstawie planowanie przejścia.</p>',
    },
    {
      q: 'Czy polisa zawarta w Portugalii wystarcza do uzyskania pobytu?',
      a: '<p>Nie możemy tego potwierdzić jako reguły ogólnej. Wymogi dotyczące pobytu ustala administracja, zależą od rodzaju wniosku i mogą się zmieniać. Możemy natomiast przygotować ubezpieczenie zdrowotne o określonym zakresie i dostarczyć dokumentację z jego warunkami. Ocena, czy spełnia ona wymogi danego wniosku, należy do właściwego urzędu lub do prawnika.</p>',
    },
    {
      q: 'Mówią Państwo po polsku?',
      a: '<p>Nie. Te strony są po polsku, bo taki jest temat, ale obsługa prowadzona jest po angielsku i pisemnie — od oferty przez warunki po zgłoszenie szkody. Uznaliśmy, że lepiej powiedzieć to wprost, niż pozwolić komuś zorientować się w trakcie zgłaszania szkody.</p>',
    },
    {
      q: 'Czy jesteście porównywarką ubezpieczeń?',
      a: '<p>Nie. Jesteśmy zarejestrowanym agentem ubezpieczeniowym i doradzamy w ramach portfela ubezpieczycieli, z którymi współpracujemy. Porównujemy warianty, ale punktem wyjścia jest zakres, a rekomendację przekazujemy na piśmie — bo obniżenie składki przez wycięcie ochrony, której ktoś naprawdę potrzebuje, nie jest żadną korzyścią.</p>',
    },
    {
      q: 'Czy obsługują Państwo także nieruchomości w Hiszpanii?',
      a: '<p>Tak. W Hiszpanii działamy w ramach unijnej swobody świadczenia usług, pod tym samym wpisem ASF nr 425591790/3, z ubezpieczycielami uprawnionymi do działania na tamtejszym rynku. Rodziny, które mają domy po obu stronach granicy, prowadzi jeden doradca, według jednego standardu.</p>',
    },
    {
      q: 'Jakie dokumenty będą potrzebne?',
      a: '<p>Zwykle: numer NIF, dokument tożsamości, adres w Portugalii, a dla nieruchomości — <em>caderneta predial</em> lub akt notarialny wraz z powierzchnią i rokiem budowy, a przy dziełach sztuki, biżuterii i kolekcjach — aktualne wyceny. Przy ubezpieczeniu samochodu dochodzi dowód rejestracyjny i zaświadczenie o historii szkodowej, a przy zdrowotnym — dane osób objętych ochroną. Pełną listę dla konkretnej sprawy podajemy w pierwszej odpowiedzi.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
  ],
};
