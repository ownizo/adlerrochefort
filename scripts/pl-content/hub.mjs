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
  title: 'Ubezpieczenia w Portugalii dla Polaków | Adler & Rochefort',
  description:
    'Jak działają ubezpieczenia w Portugalii, gdy przyjeżdża się z Polski: dom, zdrowie, samochód i odpowiedzialność cywilna. Zarejestrowany agent ubezpieczeniowy w Algarve, ASF nr 425591790/3.',
  keywords:
    'ubezpieczenie Portugalia, ubezpieczenia dla Polaków w Portugalii, polisa mieszkaniowa Portugalia, ubezpieczenie zdrowotne Portugalia, ubezpieczenie samochodu Portugalia, agent ubezpieczeniowy Portugalia',
  eyebrow: 'Ubezpieczenia w Portugalii',
  h1: 'Ubezpieczenia w Portugalii dla Polaków mieszkających tutaj na stałe i na pół roku',
  standfirst:
    'Portugalski rynek ubezpieczeń nie jest polskim rynkiem przetłumaczonym na portugalski. Inaczej dzieli się ryzyka, inaczej rozumie odpowiedzialność cywilną i inaczej liczy sumy ubezpieczenia. Te strony wyjaśniają, co naprawdę się zmienia — i jak dobrać ochronę, która zadziała w dniu szkody.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [{ name: 'Strona główna', url: '/pl/' }],
  pullquote:
    'Najtańsza polisa staje się bardzo droga w dniu, w którym okazuje się, że akurat ta szkoda jest wyłączona.',
  schemaType: 'WebPage',
  formHeading: 'Porozmawiajmy o Państwa sytuacji',
  formBranch: '',
  formSubject: 'Zapytanie ogólne (PL)',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę napisać, co ma być objęte ochroną i od kiedy. Odpowiemy, jakie informacje będą potrzebne i co realnie da się ułożyć.',
  formPlaceholder:
    'Na przykład: przeprowadzam się do Porto w marcu, mam mieszkanie we wspólnocie i samochód na polskich tablicach.',
  sections: `
<section class="section plain" aria-labelledby="co-sie-zmienia">
  <div class="container narrow article-body">
    <h2 id="co-sie-zmienia">Co się zmienia, kiedy przyjeżdża się z polskiego rynku</h2>
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
    <h2 id="ubezpieczenia">Cztery ubezpieczenia, o które pytają najczęściej</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-domu-portugalia/">Ubezpieczenie domu i mieszkania</a></h3>
        <p>Mury i ruchomości domowe, wspólnota mieszkaniowa a <em>condomínio</em>, zalania, ryzyko sejsmiczne i dlaczego polisa z banku nie zawsze jest tą właściwą.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-zdrowotne-portugalia/">Ubezpieczenie zdrowotne</a></h3>
        <p>SNS i prywatna opieka obok siebie, sieci placówek, okresy karencji, ocena ryzyka i choroby istniejące przed zawarciem umowy.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-samochodu-portugalia/">Ubezpieczenie samochodu</a></h3>
        <p>Obowiązkowe OC po portugalsku, odpowiednik AC, przerejestrowanie i ISV, polskie prawo jazdy oraz historia szkodowa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">Odpowiedzialność cywilna</a></h3>
        <p>OC w życiu prywatnym i OC zawodowa — dla konsultantów, freelancerów, fizjoterapeutów, branży wellness i małych firm.</p>
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
    <p>Jesteśmy agencją ubezpieczeniową zarejestrowaną w Portugalii i doradzamy w ramach portfela ubezpieczycieli, z którymi współpracujemy. Nie jesteśmy porównywarką cen i nie budujemy oferty wokół najniższej składki. Nasza praca polega na czymś innym: na dopasowaniu zakresu do sytuacji, wyjaśnieniu portugalskich warunków po angielsku i pisemnie, oraz na tym, żeby przy szkodzie mieć po swojej stronie kogoś, kto zna akta sprawy.</p>
    <ol class="process-steps">
      <li><strong>Rozmowa o sytuacji.</strong> Co ma być chronione, jaka jest wartość, kto mieszka w nieruchomości, czy jest kredyt, czy prowadzona jest działalność.</li>
      <li><strong>Zakres przed ceną.</strong> Najpierw ustalamy, co polisa musi obejmować, a co może zostać pominięte świadomie. Dopiero potem porównujemy warianty.</li>
      <li><strong>Warunki po angielsku.</strong> Zanim cokolwiek zostanie podpisane, dostaje Pan lub Pani wyjaśnienie sumy ubezpieczenia, franszyz, wyłączeń i terminów — pisemnie.</li>
      <li><strong>Obsługa szkody.</strong> Zgłoszenie, kontakt z ubezpieczycielem, pilnowanie terminów. To ta część, dla której w ogóle warto mieć agenta.</li>
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
      a: '<p>Nie. Jesteśmy zarejestrowanym agentem ubezpieczeniowym i doradzamy w ramach portfela ubezpieczycieli, z którymi współpracujemy. Cena ma znaczenie i porównujemy warianty, ale punktem wyjścia jest zakres — bo obniżenie składki przez wycięcie ochrony, której ktoś naprawdę potrzebuje, nie jest oszczędnością.</p>',
    },
    {
      q: 'Jakie dokumenty będą potrzebne?',
      a: '<p>Zwykle: numer NIF, dokument tożsamości, adres w Portugalii, a dla nieruchomości — <em>caderneta predial</em> lub akt notarialny wraz z powierzchnią i rokiem budowy. Przy ubezpieczeniu samochodu dochodzi dowód rejestracyjny i zaświadczenie o historii szkodowej, a przy zdrowotnym — dane osób objętych ochroną. Pełną listę dla konkretnej sprawy podajemy w pierwszej odpowiedzi.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
  ],
};
