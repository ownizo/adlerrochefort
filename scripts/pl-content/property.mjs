/**
 * /pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/
 *
 * Search intent: "zakup nieruchomości w Portugalii" with the insurance
 * question attached — someone mid-purchase, usually between the CPCV and the
 * escritura, who has been told by the bank that a policy is needed.
 *
 * Distinct from the home-insurance page: that one explains what the cover
 * contains, this one explains the transaction — when risk passes, what the
 * lender may and may not require, and what the escritura date does to the
 * start date. The two link to each other rather than repeating.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'zakup-nieruchomosci-w-portugalii-ubezpieczenie',
  url: '/pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/',
  cluster: 'property',
  title: 'Ubezpieczenie przy zakupie domu w Portugalii | Adler & Rochefort',
  description:
    'Kiedy ryzyko przechodzi na nabywcę, czego może wymagać bank, jak ustalić koszt odbudowy i dlaczego polisa musi obowiązywać od dnia escritura.',
  keywords:
    'zakup nieruchomości Portugalia, kredyt hipoteczny Portugalia ubezpieczenie, escritura Portugalia, CPCV Portugalia, ubezpieczenie przy zakupie domu Portugalia, caderneta predial',
  eyebrow: 'Zakup nieruchomości',
  h1: 'Zakup nieruchomości w Portugalii: ubezpieczenie na każdym etapie transakcji',
  standfirst:
    'Kupno nieruchomości w Portugalii ma dwa punkty, w których ubezpieczenie przestaje być formalnością: podpisanie umowy przedwstępnej i podpisanie aktu. Między nimi mija zwykle kilka tygodni, a po drugim z nich ryzyko jest już Państwa.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Zakup nieruchomości' }],
  pullquote: 'Polisa ma zaczynać się w dniu podpisania aktu. Nie tygodnie później, kiedy wszyscy odetchną.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie kupowanej nieruchomości',
  formBranch: 'PL · Dom',
  formSubject: 'Zakup nieruchomości w Portugalii',
  formCta: 'Zapytaj o ofertę',
  formIntro:
    'Jeśli znana jest już data <em>escritura</em>, proszę ją podać. Ustawiamy początek ochrony dokładnie na ten dzień.',
  formPlaceholder:
    'Na przykład: dom w Cascais, 380 m² z basenem, escritura 14 maja, kredyt w Novo Banco, bank wymaga ubezpieczenia z ryzykiem sejsmicznym.',
  sections: `
<section class="section plain" aria-labelledby="etapy">
  <div class="container narrow article-body">
    <h2 id="etapy">Etapy transakcji i co się w nich dzieje z ubezpieczeniem</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Etapy zakupu nieruchomości w Portugalii a ubezpieczenie</caption>
        <thead>
          <tr><th scope="col">Etap</th><th scope="col">Co to jest</th><th scope="col">Ubezpieczenie</th></tr>
        </thead>
        <tbody>
          <tr><td>Rezerwacja</td><td>Zadatek na wyłączność, zwykle niewielki</td><td>Nic jeszcze nie trzeba</td></tr>
          <tr><td><em>CPCV</em></td><td>Umowa przedwstępna z zadatkiem, często 10–20%</td><td>Moment na zebranie ofert i na wniosek kredytowy</td></tr>
          <tr><td>Decyzja kredytowa</td><td>Bank określa wymogi dotyczące polisy</td><td>Znane wymagane sumy i zakres</td></tr>
          <tr><td><em>Escritura</em></td><td>Akt notarialny, przeniesienie własności</td><td><strong>Polisa musi już obowiązywać tego dnia</strong></td></tr>
          <tr><td>Po zakupie</td><td>Rejestracja, media, ewentualny remont</td><td>Aktualizacja sumy po remoncie</td></tr>
        </tbody>
      </table>
    </div>
    <p>Najważniejszy wiersz to <em>escritura</em>. Z chwilą podpisania aktu ryzyko związane z nieruchomością przechodzi na nabywcę — pożar tej samej nocy jest już Państwa problemem, niezależnie od tego, czy ktokolwiek się tam wprowadził. Dlatego datę początku ochrony ustawiamy na dzień podpisania aktu, a nie na moment, w którym transakcja „się uspokoi”.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="bank">
  <div class="container narrow article-body">
    <h2 id="bank">Czego może wymagać bank, a czego nie</h2>
    <p>Przy kredycie hipotecznym w Portugalii bank ma wobec polisy dwa uzasadnione oczekiwania i jedno, które bywa przedstawiane jako wymóg, a nim nie jest.</p>
    <h3>Co bank może wymagać</h3>
    <ul>
      <li><strong>Ubezpieczenia nieruchomości</strong> stanowiącej zabezpieczenie kredytu, z sumą odpowiadającą jego wymogom — zwykle nie niższą niż wartość odbudowy lub kwota kredytu, zależnie od umowy.</li>
      <li><strong>Wskazania banku jako uprawnionego</strong> z polisy, żeby odszkodowanie było zabezpieczeniem jego wierzytelności.</li>
      <li><strong>Określonego zakresu</strong> — na przykład włączenia ryzyka sejsmicznego. Wymagania różnią się między bankami i wynikają z umowy kredytowej.</li>
      <li><strong>Ubezpieczenia życia</strong> (<em>seguro de vida</em>) powiązanego z kredytem, przy czym praktyka i zakres zależą od banku oraz od wieku i stanu zdrowia kredytobiorców.</li>
    </ul>
    <h3>Czego bank wymagać nie może</h3>
    <p><strong>Zakupu polisy właśnie u niego.</strong> Dopuszczalne jest przedstawienie polisy z innego źródła, o ile spełnia wymogi umowy kredytowej. W praktyce banki proszą wtedy o kopię polisy i potwierdzenie wskazania banku jako uprawnionego — dostarczamy jedno i drugie w formie, jakiej bank oczekuje.</p>
    <div class="callout">
      <span class="callout-label">Rachunek, który trzeba zrobić całościowo</span>
      Niektóre banki wiążą marżę kredytu z zakupem swoich produktów, w tym ubezpieczeń. Wtedy porównanie tylko składek jest mylące: liczy się różnica w marży przez cały okres kredytowania kontra różnica w składce i w zakresie. Liczymy to razem z Państwem i mówimy wprost, jeśli w danym przypadku produkt banku wypada korzystniej.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="suma">
  <div class="container narrow article-body">
    <h2 id="suma">Suma ubezpieczenia: trzy różne liczby</h2>
    <p>Przy zakupie w obiegu są trzy kwoty i łatwo je pomylić. Rozróżnienie ma bezpośredni skutek finansowy.</p>
    <ul>
      <li><strong>Cena zakupu</strong> — obejmuje działkę, lokalizację i sytuację rynkową. Pożar nie niszczy żadnego z tych elementów.</li>
      <li><strong>Wartość podatkowa (<em>valor patrimonial tributário</em>)</strong> z <em>caderneta predial</em> — służy do wyliczania podatków, zwykle jest niższa od ceny i nie jest właściwą podstawą sumy ubezpieczenia.</li>
      <li><strong>Koszt odbudowy</strong> — jedyna liczba, na której warto oprzeć sumę ubezpieczenia budynku. To koszt postawienia tego samego budynku od nowa, przy dzisiejszych stawkach i dzisiejszych przepisach budowlanych.</li>
    </ul>
    <p>Konsekwencja zbyt niskiej sumy to <em>regra proporcional</em>: odszkodowanie obniżone w proporcji do niedoubezpieczenia, również przy szkodzie częściowej. Konsekwencja zbyt wysokiej to składka płacona przez lata za ochronę, której nie da się wykorzystać, bo odszkodowanie nie przekroczy realnych kosztów odbudowy. Ustalenie tej liczby to jedna rozmowa i kilka danych z <em>caderneta predial</em>. Przy domach o wysokiej wartości ubezpieczyciel przeprowadza zwykle bezpłatne oględziny na miejscu, potwierdza koszt odbudowy, a po przyjęciu zarekomendowanych sum może zrezygnować z zasady proporcji — zob. <a href="/pl/ubezpieczenie-domu-portugalia/">stronę o ubezpieczeniu domu</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="czego-nie-obejmuje">
  <div class="container narrow article-body">
    <h2 id="czego-nie-obejmuje">Czego polisa nie załatwia, a o czym warto pomyśleć przy zakupie</h2>
    <p>Ubezpieczenie chroni przed zdarzeniami przyszłymi i nagłymi. Nie naprawia problemów, które nieruchomość ma już w dniu zakupu — dlatego kilka kwestii trzeba wyjaśnić przed podpisaniem aktu, nie po.</p>
    <ul>
      <li><strong>Stan hydroizolacji tarasu i dachu.</strong> Przeciekanie wynikające ze zużycia bywa wyłączone; poza tym to najczęstsza szkoda w portugalskich domach.</li>
      <li><strong>Legalność zabudowy.</strong> Rozbudowa bez pozwolenia, zabudowany taras, samowolnie zamieniona kondygnacja — to wychodzi przy szkodzie i może wpłynąć na wypłatę. Sprawdzenie zgodności stanu faktycznego z dokumentami to zadanie prawnika.</li>
      <li><strong>Instalacje.</strong> Stara instalacja elektryczna i wodna to podwyższone ryzyko pożaru i zalania; niektórzy ubezpieczyciele stawiają wymagania co do wieku instalacji.</li>
      <li><strong>Polisa <em>condomínio</em>.</strong> Warto poprosić zarząd o kopię i sprawdzić sumę oraz aktualność, zanim będzie Państwa własność w tym budynku.</li>
      <li><strong>Zaległości wspólnoty.</strong> Nie jest to kwestia ubezpieczeniowa, ale przechodzi wraz z lokalem — pytanie do prawnika prowadzącego transakcję.</li>
      <li><strong>Historia szkód w nieruchomości.</strong> Sprzedający zwykle wie o poprzednich zalaniach. Warto zapytać; to informacja użyteczna i dla wyceny, i dla polisy.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="po-zakupie">
  <div class="container narrow article-body">
    <h2 id="po-zakupie">Po zakupie: cztery rzeczy w pierwszych miesiącach</h2>
    <ol class="process-steps">
      <li><div><strong>Aktualizacja sumy po remoncie.</strong><span> Nowa kuchnia, klimatyzacja, panele fotowoltaiczne, basen — każda z tych pozycji zmienia koszt odbudowy i powinna trafić do polisy.</span></div></li>
      <li><div><strong>Ruchomości domowe policzone po wprowadzeniu.</strong><span> Przy zakupie zwykle podaje się szacunek; po wniesieniu rzeczy warto go poprawić.</span></div></li>
      <li><div><strong>Sposób użytkowania zgłoszony zgodnie z rzeczywistością.</strong><span> Jeśli nieruchomość ma stać puste przez część roku albo być wynajmowana krótkoterminowo, zmienia to zakres i musi być zgłoszone.</span></div></li>
      <li><div><strong>Odpowiedzialność cywilna sprawdzona.</strong><span> Właściciel nieruchomości odpowiada za szkody wyrządzone osobom trzecim przez jej stan — zob. <a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">stronę o odpowiedzialności cywilnej</a>.</span></div></li>
    </ol>
    <p class="legal-note">Nie prowadzimy obsługi prawnej transakcji ani doradztwa podatkowego. Ta strona opisuje, jak w tym procesie działa ubezpieczenie; kwestie własnościowe, podatkowe i administracyjne należy skonsultować z prawnikiem prowadzącym zakup.</p>
  </div>
</section>`,
  faqTitle: 'Zakup nieruchomości w Portugalii — pytania o ubezpieczenie',
  faq: [
    {
      q: 'Kiedy polisa ma zacząć obowiązywać?',
      a: '<p>W dniu podpisania <em>escritura</em>. Z tą chwilą ryzyko związane z nieruchomością przechodzi na nabywcę, niezależnie od tego, kiedy nastąpi wprowadzenie. Datę początku ochrony ustawiamy dokładnie na ten dzień, a jeśli akt zostanie przesunięty, przesuwamy ją razem z nim.</p>',
    },
    {
      q: 'Czy muszę kupić ubezpieczenie w banku, który udziela kredytu?',
      a: '<p>Nie. Bank może wymagać ubezpieczenia nieruchomości o określonym zakresie i wskazania go jako uprawnionego z polisy, ale nie może wymagać zakupu swojego produktu. Warto jednak sprawdzić, czy marża kredytu nie jest powiązana z zakupem produktów banku — wtedy rachunek robimy całościowo.</p>',
    },
    {
      q: 'Czy bank wymaga ubezpieczenia od trzęsienia ziemi?',
      a: '<p>Część banków tak, w zakresie wynikającym z umowy kredytowej; praktyka różni się między instytucjami. Ryzyko sejsmiczne jest w portugalskich polisach mieszkaniowych zwykle opcją dodatkową, z odrębną franszyzą. Sprawdzamy wymóg w Państwa umowie kredytowej i dopasowujemy polisę do niego, a nie na odwrót.</p>',
    },
    {
      q: 'Jak ustalić wartość odbudowy, jeśli nie znam rynku budowlanego?',
      a: '<p>Potrzebujemy powierzchni z <em>caderneta predial</em>, roku budowy, standardu wykończenia, liczby kondygnacji oraz informacji o elementach zewnętrznych — tarasie, basenie, murach, instalacji fotowoltaicznej. Na tej podstawie proponujemy kwotę i mówimy, na czym ją oparliśmy. Przy nieruchomościach nietypowych lub zabytkowych może mieć sens wycena rzeczoznawcy.</p>',
    },
    {
      q: 'Kupuję mieszkanie we wspólnocie. Czy wystarczy polisa condomínio?',
      a: '<p>Zwykle nie. Polisa <em>condomínio</em> obejmuje przede wszystkim konstrukcję i części wspólne; wykończenie mieszkania, ruchomości domowe i odpowiedzialność cywilną trzeba zapewnić samodzielnie. Warto poprosić zarząd o kopię polisy jeszcze przed podpisaniem aktu — bywa, że ubezpieczenie budynku jest zaniżone albo nieaktualne.</p>',
    },
    {
      q: 'Czy mogę przenieść ubezpieczenie sprzedającego?',
      a: '<p>W praktyce prawie nigdy nie ma to sensu. Polisa jest dopasowana do sytuacji poprzedniego właściciela: jego sumy, jego sposobu użytkowania, jego banku. Przy zakupie zawieramy nową umowę z datą początku na dzień <em>escritura</em>, a sprzedający rozwiązuje swoją.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu i mieszkania w Portugalii' },
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
  ],
};
