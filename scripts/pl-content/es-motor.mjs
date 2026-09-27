/**
 * /pl/ubezpieczenie-samochodu-hiszpania/ (es-motor)
 *
 * Search intent: "ubezpieczenie samochodu w Hiszpanii", "przerejestrowanie
 * samochodu z Polski w Hiszpanii" — a Polish resident on the Costa Blanca,
 * Costa del Sol, the Canaries or in Barcelona / Valencia who drove down on
 * Polish plates or is buying a car locally.
 *
 * Polish hooks: OC maps onto seguro obligatorio, AC onto todo riesgo; the
 * zaświadczenie o przebiegu ubezpieczenia is the document that carries the
 * no-claims history; an EU licence is recognised (no compulsory exchange) but
 * falls under Spanish rules on renewal once resident. Higher-value and
 * collector cars close the page. Legal points kept general.
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_MOTOR_PAGE = {
  slug: 'ubezpieczenie-samochodu-hiszpania',
  url: '/pl/ubezpieczenie-samochodu-hiszpania/',
  cluster: 'es-motor',
  title: 'Ubezpieczenie samochodu w Hiszpanii | Adler & Rochefort',
  description:
    'Samochód w Hiszpanii: obowiązkowe OC, auto z polskimi tablicami i przerejestrowanie, prawo jazdy, historia szkodowa z Polski, auta o wysokiej wartości.',
  keywords:
    'ubezpieczenie samochodu Hiszpania, OC Hiszpania, seguro obligatorio, seguro a todo riesgo, przerejestrowanie samochodu Hiszpania, polskie prawo jazdy Hiszpania, zniżki za bezszkodową jazdę Hiszpania',
  eyebrow: 'Hiszpania · Samochody',
  h1: 'Ubezpieczenie samochodu w Hiszpanii: od polskich tablic do hiszpańskiej polisy',
  standfirst:
    'Wielu Polaków przyjeżdża do Hiszpanii własnym samochodem. Polskie OC działa w podróży, ale po zamieszkaniu na stałe auto powinno zostać przerejestrowane i ubezpieczone w Hiszpanii. Opisujemy kolejność działań, dokumenty, które warto zabrać z Polski, i to, jak czytać hiszpańską polisę.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Hiszpania', url: '/pl/ubezpieczenia-hiszpania-przewodnik/' },
    { name: 'Ubezpieczenie samochodu' },
  ],
  pullquote:
    'Zaświadczenie o przebiegu ubezpieczenia to najcenniejszy dokument, jaki można przywieźć z Polski. I najtrudniejszy do zdobycia po fakcie.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie samochodu w Hiszpanii',
  formBranch: 'PL · Samochód',
  formSubject: 'Ubezpieczenie samochodu w Hiszpanii',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Proszę podać markę, model i rok, obecną rejestrację (polska czy hiszpańska) oraz lata bezszkodowej jazdy. Odpowiemy pisemnie.',
  formPlaceholder:
    'Na przykład: Audi Q7 2022 na polskich tablicach, przerejestrowanie w Alicante w przyszłym miesiącu, 12 lat bez szkody.',
  sections: `
<section class="section plain" aria-labelledby="oc-ac">
  <div class="container narrow article-body">
    <h2 id="oc-ac">OC i AC po hiszpańsku</h2>
    <p>Struktura jest znajoma. Obowiązkowe jest ubezpieczenie odpowiedzialności cywilnej (<em>seguro obligatorio</em>), z minimalnymi sumami określonymi przepisami. Większość polis dodaje do niego <em>responsabilidad civil voluntaria</em> — wyższe sumy OC, co przy dzisiejszych kosztach szkód osobowych ma realne znaczenie.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Warianty hiszpańskiego ubezpieczenia samochodu a polskie odpowiedniki</caption>
        <thead>
          <tr><th scope="col">Po hiszpańsku</th><th scope="col">Polski odpowiednik</th><th scope="col">Co obejmuje</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Terceros básico</em></td><td>OC</td><td>Szkody wyrządzone innym</td></tr>
          <tr><td><em>Terceros ampliado</em></td><td>OC z pakietem</td><td>Plus szyby, kradzież, pożar, assistance</td></tr>
          <tr><td><em>Todo riesgo con franquicia</em></td><td>AC z udziałem własnym</td><td>Własne szkody, z franszyzą za każdą szkodę</td></tr>
          <tr><td><em>Todo riesgo sin franquicia</em></td><td>Pełne AC</td><td>Własne szkody bez udziału własnego</td></tr>
        </tbody>
      </table>
    </div>
    <p>W Hiszpanii ubezpieczenie jest przypisane do pojazdu, a jego istnienie można sprawdzić w centralnym rejestrze pojazdów ubezpieczonych. Jazda bez ważnego OC grozi wysoką karą i unieruchomieniem auta.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="przerejestrowanie">
  <div class="container narrow article-body">
    <h2 id="przerejestrowanie">Samochód z Polski: przerejestrowanie krok po kroku</h2>
    <p>Osoba, która zamieszkuje w Hiszpanii na stałe, powinna przerejestrować samochód w terminie określonym przepisami. Ogólna kolejność:</p>
    <ol class="process-steps">
      <li><div><strong>Dokumenty z Polski.</strong><span> Dowód rejestracyjny, umowa lub faktura zakupu, świadectwo zgodności (CoC) oraz zaświadczenie o przebiegu ubezpieczenia OC.</span></div></li>
      <li><div><strong>Przegląd techniczny (ITV).</strong><span> Hiszpańska stacja kontroli pojazdów sprawdza auto i dokumenty homologacyjne.</span></div></li>
      <li><div><strong>Podatek rejestracyjny.</strong><span> Zależny od emisji CO₂ i wartości pojazdu; możliwe zwolnienie przy przeprowadzce, jeśli spełnione są warunki. To pytanie do <em>gestor</em> lub doradcy podatkowego.</span></div></li>
      <li><div><strong>Rejestracja w DGT i hiszpańskie tablice.</strong><span> Od tego dnia auto potrzebuje hiszpańskiej polisy — ustawiamy jej początek dokładnie na tę datę, żeby nie było ani dnia przerwy.</span></div></li>
    </ol>
    <p>W praktyce wiele osób powierza formalności lokalnemu <em>gestor</em>. My zajmujemy się polisą: tak, żeby była gotowa na dzień rejestracji i żeby polska historia szkodowa została w niej uwzględniona.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="historia-prawo-jazdy">
  <div class="container narrow article-body">
    <h2 id="historia-prawo-jazdy">Historia szkodowa i prawo jazdy</h2>
    <h3>Zniżki z Polski</h3>
    <p>Hiszpańscy ubezpieczyciele nie mają dostępu do polskiej bazy szkód. Lata bezszkodowej jazdy trzeba udokumentować — zaświadczeniem o przebiegu ubezpieczenia od polskiego ubezpieczyciela, najlepiej z wyszczególnieniem okresów i szkód. Część ubezpieczycieli uwzględnia je w składce, część nie; to jedno z kryteriów, według których dobieramy propozycję. Zaświadczenie warto zamówić przed wyjazdem.</p>
    <h3>Polskie prawo jazdy</h3>
    <p>Prawo jazdy wydane w Polsce, jako państwie UE, jest w Hiszpanii uznawane i nie trzeba go obowiązkowo wymieniać. Po zamieszkaniu podlega jednak hiszpańskim zasadom dotyczącym okresu ważności i odnowienia; wymiana na hiszpańskie jest możliwa dobrowolnie. Szczegóły warto potwierdzić w DGT.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="wysoka-wartosc-auto">
  <div class="container narrow article-body">
    <h2 id="wysoka-wartosc-auto">Samochody o wysokiej wartości i kolekcje</h2>
    <ul>
      <li><strong>Wartość uzgodniona</strong> zamiast wartości rynkowej w dniu szkody — dla aut kolekcjonerskich i klasyków, na podstawie wyceny.</li>
      <li><strong>Nowe auto przez pierwsze lata</strong> — odszkodowanie według wartości nowego pojazdu, bez amortyzacji w określonym okresie.</li>
      <li><strong>Naprawa w autoryzowanym serwisie</strong> i oryginalne części, wymiana kluczy i zamków, auto zastępcze porównywalnej klasy.</li>
      <li><strong>Polisa flotowa rodziny</strong> — kilka samochodów, kilku kierowców, jedna data wznowienia; także auta w Portugalii i w Hiszpanii koordynowane przez jednego doradcę.</li>
      <li><strong>Kierowcy</strong> — młodzi kierowcy i kierowcy z krótkim stażem w Hiszpanii muszą być zgłoszeni; pominięcie ich może obniżyć odszkodowanie.</li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie samochodu w Hiszpanii — pytania',
  faq: [
    {
      q: 'Jak długo mogę jeździć w Hiszpanii na polskich tablicach?',
      a: '<p>Przy pobycie turystycznym — bez przeszkód, z ważnym polskim OC. Po zamieszkaniu na stałe samochód powinien zostać przerejestrowany w terminie określonym hiszpańskimi przepisami. Warto to zaplanować od razu, bo polskie OC jest skonstruowane wokół rejestracji w Polsce.</p>',
    },
    {
      q: 'Czy hiszpański ubezpieczyciel uwzględni moje zniżki z Polski?',
      a: '<p>Część ubezpieczycieli tak, na podstawie zaświadczenia o przebiegu ubezpieczenia od polskiego ubezpieczyciela. Nie jest to jednak reguła rynkowa. Uwzględnienie polskiej historii jest jednym z kryteriów, według których dobieramy propozycję.</p>',
    },
    {
      q: 'Czy muszę wymienić polskie prawo jazdy na hiszpańskie?',
      a: '<p>Nie ma takiego obowiązku — prawo jazdy wydane w UE jest w Hiszpanii uznawane. Po zamieszkaniu podlega jednak hiszpańskim zasadom dotyczącym ważności i odnowienia. Szczegóły dla konkretnej sytuacji warto potwierdzić w DGT.</p>',
    },
    {
      q: 'Czym różni się todo riesgo con franquicia od sin franquicia?',
      a: '<p>Oba warianty obejmują szkody we własnym samochodzie. W wariancie z franszyzą za każdą szkodę płacą Państwo udział własny, uzgodniony w polisie; w wariancie bez franszyzy — nie. Przy autach o wysokiej wartości porównujemy też inne warunki: sposób wyceny, auto zastępcze, wybór warsztatu.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenia-hiszpania-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Hiszpanii' },
    { url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania/', label: 'Odpowiedzialność cywilna rodziny w Hiszpanii' },
  ],
};

withSibling(ES_MOTOR_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Mają Państwo samochód także w Portugalii?',
  body: 'W Portugalii przerejestrowanie wiąże się z podatkiem ISV, a odpowiednik AC nazywa się <em>danos próprios</em>. Jak przejść z polskich tablic na portugalskie — na osobnej stronie.',
  url: '/pl/ubezpieczenie-samochodu-portugalia/',
  cta: 'Ubezpieczenie samochodu w Portugalii',
});
