/**
 * /pl/ubezpieczenie-zdrowotne-hiszpania/ (es-health)
 *
 * Search intent: "ubezpieczenie zdrowotne w Hiszpanii", "prywatne
 * ubezpieczenie zdrowotne Hiszpania dla Polaków" — a Polish family, retiree
 * or entrepreneur living in Spain part- or full-time.
 *
 * The Polish angle: an EU citizen does not need the non-lucrative visa — the
 * question is the certificado de registro, S1 for pensioners (issued via NFZ)
 * and the EHIC's limits. The visa rule (no copays, no waiting periods, as
 * consulates generally state it) is still relevant for non-EU family members.
 * International family plans and pre-existing conditions close the page.
 * No clinical questions in the form.
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_HEALTH_PAGE = {
  slug: 'ubezpieczenie-zdrowotne-hiszpania',
  url: '/pl/ubezpieczenie-zdrowotne-hiszpania/',
  cluster: 'es-health',
  title: 'Ubezpieczenie zdrowotne rodziny w Hiszpanii | Adler & Rochefort',
  description:
    'Prywatne i międzynarodowe ubezpieczenie zdrowotne w Hiszpanii dla polskich rodzin: publiczna opieka, S1 i EKUZ, rejestracja pobytu, karencje i choroby.',
  keywords:
    'ubezpieczenie zdrowotne Hiszpania, prywatne ubezpieczenie zdrowotne Hiszpania, seguro de salud, S1 Hiszpania emeryt, EKUZ Hiszpania, międzynarodowe ubezpieczenie zdrowotne rodzina, certificado de registro ubezpieczenie zdrowotne',
  eyebrow: 'Hiszpania · Zdrowie rodziny',
  h1: 'Ubezpieczenie zdrowotne w Hiszpanii: publiczna opieka, prywatna sieć i plan dla całej rodziny',
  standfirst:
    'Hiszpańska publiczna służba zdrowia ma dobrą opinię, ale dostęp do niej zależy od statusu: pracy, emerytury, rejestracji. Prywatne ubezpieczenie daje drugą drogę — szybszą, z wyborem lekarza — a plan międzynarodowy obejmuje także leczenie w Polsce i na świecie. Wyjaśniamy, co jest potrzebne w Państwa sytuacji.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Hiszpania', url: '/pl/ubezpieczenia-hiszpania-przewodnik/' },
    { name: 'Ubezpieczenie zdrowotne' },
  ],
  pullquote:
    'EKUZ jest na wakacje. Kto mieszka w Hiszpanii, potrzebuje odpowiedzi na inne pytanie: kto płaci za leczenie tutaj, na stałe.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie zdrowotne w Hiszpanii',
  formBranch: 'PL · Zdrowie',
  formSubject: 'Ubezpieczenie zdrowotne w Hiszpanii',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Proszę podać, kogo ma objąć ochrona (liczba osób i wiek) i gdzie w Hiszpanii Państwo mieszkają. Kwestie medyczne omawiamy osobno, nigdy przez formularz — przekazuje się je bezpośrednio ubezpieczycielowi.',
  formPlaceholder:
    'Na przykład: dwoje dorosłych (52 i 49 lat) i dziecko (12 lat), Benidorm, chcielibyśmy mieć też dostęp do szpitali w Polsce.',
  sections: `
<section class="section plain" aria-labelledby="status">
  <div class="container narrow article-body">
    <h2 id="status">Punkt wyjścia: Państwa status w Hiszpanii</h2>
    <p>Publiczna opieka zdrowotna w Hiszpanii (<em>Sistema Nacional de Salud</em>, prowadzona przez służby regionalne — np. SAS w Andaluzji, sanidad valenciana, SCS na Kanarach) przysługuje na różnych podstawach. Dla Polaka najczęstsze są trzy sytuacje:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Dostęp do publicznej opieki zdrowotnej w Hiszpanii według sytuacji</caption>
        <thead>
          <tr><th scope="col">Sytuacja</th><th scope="col">Publiczna opieka</th><th scope="col">Rola prywatnej polisy</th></tr>
        </thead>
        <tbody>
          <tr><td>Praca lub działalność w Hiszpanii</td><td>Tak, przez hiszpańskie ubezpieczenie społeczne</td><td>Druga droga: szybszy dostęp, wybór specjalisty i szpitala</td></tr>
          <tr><td>Emerytura z Polski, formularz S1</td><td>Tak, na podstawie S1 zarejestrowanego w Hiszpanii</td><td>Uzupełnienie: prywatne szpitale, krótsze terminy</td></tr>
          <tr><td>Bez pracy w Hiszpanii i bez S1</td><td>Zwykle nie na zasadach ogólnych</td><td>Często podstawa — także przy rejestracji pobytu</td></tr>
        </tbody>
      </table>
    </div>
    <p>Europejska Karta Ubezpieczenia Zdrowotnego (EKUZ) dotyczy pobytu czasowego. Nie jest rozwiązaniem dla osoby, która w Hiszpanii mieszka — i nie obejmuje prywatnych placówek.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="rejestracja">
  <div class="container narrow article-body">
    <h2 id="rejestracja">Rejestracja pobytu i wiza — dwie różne ścieżki</h2>
    <p>Obywatel Polski nie potrzebuje wizy, żeby zamieszkać w Hiszpanii. Po trzech miesiącach rejestruje się jako obywatel UE i otrzymuje <em>certificado de registro</em>. Osoby, które nie pracują w Hiszpanii, wykazują przy tym zwykle ubezpieczenie zdrowotne — publiczne (np. S1) lub prywatne o pełnym zakresie — oraz wystarczające środki. Szczegóły praktyki różnią się między biurami i warto je potwierdzić lokalnie.</p>
    <p>Inaczej jest z członkami rodziny spoza UE lub z osobami, które przyjeżdżają na podstawie wizy pobytowej bez prawa do pracy (<em>residencia no lucrativa</em>). Konsulaty wymagają wtedy zazwyczaj prywatnego ubezpieczenia zdrowotnego od ubezpieczyciela działającego w Hiszpanii, o zakresie porównywalnym z publiczną opieką, <strong>bez współpłacenia (<em>copagos</em>) i bez karencji</strong>. Możemy przygotować taką polisę i dokumentację z jej warunkami; ocena, czy spełnia wymogi konkretnego wniosku, należy do urzędu lub prawnika.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="plany">
  <div class="container narrow article-body">
    <h2 id="plany">Plan krajowy czy międzynarodowy</h2>
    <ul>
      <li><strong>Hiszpański plan prywatny</strong> (<em>seguro de salud</em>) — sieć lekarzy i szpitali ubezpieczyciela w Hiszpanii, czasem z niewielkimi opłatami za wizytę. Dobrze sprawdza się, gdy życie rodziny toczy się w jednym regionie.</li>
      <li><strong>Plan z refundacją kosztów</strong> (<em>reembolso</em>) — swobodny wybór lekarza poza siecią, z częściowym zwrotem kosztów. Przydatny, gdy mają Państwo zaufanych specjalistów.</li>
      <li><strong>Międzynarodowy plan rodzinny</strong> — leczenie w Hiszpanii, w Polsce i w innych krajach, wyższe sumy, szpitale najwyższej klasy, opcjonalnie ewakuacja medyczna. Dla rodzin, które żyją między krajami, i dla dzieci studiujących za granicą.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">Leczenie w Polsce</span>
      Wiele osób chce zachować możliwość leczenia w Polsce u znanych sobie lekarzy. Plan hiszpański zwykle tego nie obejmuje poza nagłymi przypadkami w podróży; plan międzynarodowy może — z określonym zasięgiem terytorialnym. To pytanie zadajemy na początku, bo zmienia wybór produktu.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="karencje-es">
  <div class="container narrow article-body">
    <h2 id="karencje-es">Karencje, choroby przewlekłe i wiek</h2>
    <p>Prywatne ubezpieczenie zdrowotne jest oceniane indywidualnie. Przy przystąpieniu wypełnia się kwestionariusz medyczny, a ubezpieczyciel może przyjąć ryzyko bez zmian, z wyłączeniem określonych schorzeń albo z okresem karencji (<em>carencia</em>) — na przykład dla porodu czy zabiegów planowych. Część ubezpieczycieli ma też górną granicę wieku przystąpienia.</p>
    <ul>
      <li><strong>Szczerość kwestionariusza</strong> ma bezpośredni wpływ na wypłatę. Pominięcie choroby, o której się wiedziało, może stać się podstawą odmowy.</li>
      <li><strong>Kontynuacja ochrony</strong> — przy przejściu z innej polisy prywatnej część ubezpieczycieli skraca lub znosi karencje. Warto mieć dokumenty dotychczasowego ubezpieczenia.</li>
      <li><strong>Emeryci</strong> — im wcześniej zawarta polisa, tym szerszy wybór; po pewnym wieku lista ubezpieczycieli wyraźnie się zawęża.</li>
    </ul>
    <p class="legal-note">Informacji o stanie zdrowia nie zbieramy w formularzu na stronie. Przekazuje się je bezpośrednio ubezpieczycielowi w jego kwestionariuszu.</p>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie zdrowotne w Hiszpanii — pytania',
  faq: [
    {
      q: 'Czy EKUZ wystarczy, jeśli mieszkam w Hiszpanii?',
      a: '<p>Nie. EKUZ dotyczy pobytu czasowego i daje dostęp do publicznej opieki na zasadach obowiązujących osoby ubezpieczone w danym kraju. Osoba, która w Hiszpanii mieszka, potrzebuje podstawy stałej — hiszpańskiego ubezpieczenia społecznego, formularza S1 albo prywatnej polisy.</p>',
    },
    {
      q: 'Jestem emerytem z polską emeryturą. Czy mam prawo do publicznej opieki w Hiszpanii?',
      a: '<p>Zwykle tak, na podstawie formularza S1 wydawanego przez polską instytucję i zarejestrowanego w hiszpańskim ubezpieczeniu społecznym. Prywatna polisa jest wtedy uzupełnieniem — daje szybszy dostęp do specjalistów i prywatnych szpitali.</p>',
    },
    {
      q: 'Jakie ubezpieczenie jest potrzebne do wizy pobytowej bez prawa do pracy?',
      a: '<p>Konsulaty wymagają zazwyczaj polisy od ubezpieczyciela działającego w Hiszpanii, o zakresie porównywalnym z publiczną opieką, bez współpłacenia i bez karencji. Dotyczy to przede wszystkim osób spoza UE, np. członków rodziny. Wymogi ustala administracja; przygotowujemy polisę i dokumentację, a ich ocena należy do urzędu lub prawnika.</p>',
    },
    {
      q: 'Czy prywatna polisa obejmie chorobę, którą już mam?',
      a: '<p>To zależy od ubezpieczyciela i od samej choroby. Może zostać przyjęta bez zmian, wyłączona albo objęta po okresie karencji. Decyzję podejmuje ubezpieczyciel na podstawie kwestionariusza medycznego, który wypełnia się bezpośrednio u niego.</p>',
    },
    {
      q: 'Czy międzynarodowa polisa obejmie leczenie w Polsce?',
      a: '<p>Może — zależy od wybranego zasięgu terytorialnego. Plany międzynarodowe zwykle pozwalają wybrać obszar, np. Europa albo cały świat z wyłączeniem USA. Plan krajowy hiszpański obejmuje leczenie w Polsce najczęściej tylko w nagłych przypadkach w podróży.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenia-hiszpania-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Hiszpanii' },
    { url: '/pl/ubezpieczenie-domu-hiszpania/', label: 'Ubezpieczenie domu w Hiszpanii' },
  ],
};

withSibling(ES_HEALTH_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Mieszkają Państwo także w Portugalii?',
  body: 'W Portugalii publiczny SNS działa na innej logice: lekarz rodzinny w przychodni rejonowej i kolejki do specjalistów. Jak ułożyć prywatną ochronę dla rodziny — na osobnej stronie.',
  url: '/pl/ubezpieczenie-zdrowotne-portugalia/',
  cta: 'Ubezpieczenie zdrowotne w Portugalii',
});
