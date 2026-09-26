/**
 * /pl/ubezpieczenie-winnica-posiadlosc/
 *
 * Search intent: "ubezpieczenie winnicy", "ubezpieczenie posiadłości w
 * Portugalii / Hiszpanii" — a Polish owner (or buyer) of a quinta, herdade or
 * finca with a vineyard, olive grove or agrotourism side.
 *
 * The page's central point: one owner, four activities (residence, farm,
 * winery, hospitality), insured in separate policies that contradict each
 * other at the boundaries — which is exactly where the claims land.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const NICHE_ESTATE_PAGE = {
  slug: 'ubezpieczenie-winnica-posiadlosc',
  url: '/pl/ubezpieczenie-winnica-posiadlosc/',
  cluster: 'niche-estate',
  title: 'Ubezpieczenie winnicy i posiadłości | Adler & Rochefort',
  description:
    'Quinta, herdade, finca z winnicą w Portugalii i Hiszpanii: dom, budynki, zapasy wina, maszyny, pożar, OC enoturystyki i pracodawcy — w jednym programie.',
  keywords:
    'ubezpieczenie winnicy, ubezpieczenie posiadłości Portugalia, ubezpieczenie quinty, ubezpieczenie finca Hiszpania, ubezpieczenie zapasów wina, ubezpieczenie enoturystyki, ubezpieczenie herdade Alentejo, Douro, Rioja',
  eyebrow: 'Ochrona specjalistyczna · Posiadłości wiejskie i winnice',
  h1: 'Ubezpieczenie posiadłości wiejskiej i winnicy w Portugalii i Hiszpanii',
  standfirst:
    'Dom, gospodarstwo, winiarnia i goście — cztery działalności na jednej ziemi, zbyt często ubezpieczone czterema polisami, które nie wiedzą o sobie nawzajem. Układamy je w jeden spójny program, korzystając tam, gdzie to potrzebne, z rynków specjalistycznych i partnerów co-brokerage.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Posiadłości i winnice' }],
  pullquote:
    'Szkody na posiadłościach rzadko zdarzają się w środku jednej polisy. Zdarzają się na granicy między dwiema.',
  schemaType: 'Article',
  formHeading: 'Porozmawiajmy o Państwa posiadłości',
  formBranch: 'PL · Winnica i posiadłość',
  formSubject: 'Posiadłość wiejska / winnica',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę opisać posiadłość w kilku zdaniach albo przesłać obecne polisy. Odpowiemy pisemnie: gdzie widzimy luki, jakich informacji potrzebujemy i jak mógłby wyglądać program.',
  formPlaceholder:
    'Na przykład: quinta w Douro, 12 ha winnicy, własna winiarnia z degustacjami, dom główny i dwa domy gościnne wynajmowane latem.',
  sections: `
<section class="section plain" aria-labelledby="dla-kogo">
  <div class="container narrow article-body">
    <h2 id="dla-kogo">Dla kogo jest ta strona</h2>
    <p>Dla właścicieli, którzy kupili nie tylko dom, ale kawałek ziemi z historią i działalnością. W Portugalii to najczęściej <em>quinta</em> w dolinie Douro, <em>herdade</em> w Alentejo, posiadłość w okolicach Comporty albo w górach Sintry. W Hiszpanii — <em>finca</em> lub <em>bodega</em> w Rioja czy Ribera del Duero, <em>cortijo</em> w Andaluzji, <em>possessió</em> na Majorce, <em>mas</em> w Empordà.</p>
    <p>Wspólny mianownik: pod jednym właścicielem działają rezydencja rodziny, gospodarstwo rolne (winnica, gaj oliwny, korkowce, sad), często winiarnia lub tłocznia, a coraz częściej także goście — degustacje, pokoje, wesela, wydarzenia firmowe. Każda z tych działalności ma inne ryzyka i inny rynek ubezpieczeniowy.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ryzyka">
  <div class="container narrow article-body">
    <h2 id="ryzyka">Ryzyka i różnice między Portugalią a Hiszpanią</h2>
    <p>Największym ryzykiem obu krajów w głębi lądu jest <strong>pożar</strong>. Lato w Douro, Alentejo, Kastylii czy Andaluzji oznacza tygodnie wysokiego zagrożenia, a posiadłość otoczona roślinnością jest narażona na ogień przychodzący z zewnątrz. Ubezpieczyciele pytają o pasy przeciwpożarowe, odległość od lasu, zapasy wody i dostęp dla straży — w Portugalii dochodzi do tego ustawowy obowiązek utrzymywania pasów zabezpieczających wokół budynków na terenach wiejskich.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Porównanie ubezpieczenia posiadłości w Portugalii i w Hiszpanii</caption>
        <thead>
          <tr><th scope="col">Zagadnienie</th><th scope="col">Portugalia</th><th scope="col">Hiszpania</th></tr>
        </thead>
        <tbody>
          <tr><td>Uprawy</td><td>System ubezpieczeń upraw ze wsparciem państwa — osobna warstwa, zawierana na sezon.</td><td>System <em>seguros agrarios combinados</em> ze wsparciem państwa — również osobna warstwa.</td></tr>
          <tr><td>Wypadki pracowników</td><td><em>Seguro de acidentes de trabalho</em> jest obowiązkowe dla każdego pracodawcy, także sezonowego.</td><td>Wypadki przy pracy obsługuje system zabezpieczenia społecznego; układy zbiorowe często wymagają dodatkowego ubezpieczenia, a OC pracodawcy jest zalecane.</td></tr>
          <tr><td>Typowe ryzyka naturalne</td><td>Pożar, susza, grad w Douro, silne wiatry na wybrzeżu.</td><td>Pożar, grad, powódź błyskawiczna (<em>DANA</em>) na wschodzie i południu.</td></tr>
          <tr><td>Katastrofy naturalne</td><td>Ryzyko sejsmiczne jest rozszerzeniem polisy, o które trzeba zadbać.</td><td>Zdarzenia nadzwyczajne (powódź, trzęsienie ziemi) pokrywa państwowy system <em>Consorcio de Compensación de Seguros</em>, finansowany z dopłaty do polis.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="zakres">
  <div class="container narrow">
    <h2 id="zakres">Co obejmuje dobrze ułożony program</h2>
    <ul class="hub-list">
      <li class="hub-item"><h3>Dom i budynki</h3><p>Dom główny, domy gościnne, budynki gospodarcze, mury i ogrodzenia, a także infrastruktura wodna: odwierty, zbiorniki, małe zapory — według kosztu odbudowy.</p></li>
      <li class="hub-item"><h3>Wyposażenie, sztuka i kolekcje</h3><p>Ruchomości rodzinne, dzieła sztuki i kolekcje według wartości uzgodnionej, tak samo jak w domu miejskim.</p></li>
      <li class="hub-item"><h3>Zapasy wina</h3><p>Wino w beczkach i w butelkach; kluczowa jest podstawa wyceny — koszt wytworzenia czy wartość rynkowa. Przy rzadkich rocznikach — wartości uzgodnione.</p></li>
      <li class="hub-item"><h3>Winiarnia i piwnica</h3><p>Zbiorniki, prasy, instalacje chłodnicze, a także zepsucie wina po awarii urządzeń lub przerwie w dostawie prądu.</p></li>
      <li class="hub-item"><h3>Maszyny</h3><p>Ciągniki, opryskiwacze, kombajny do winogron — w ruchu i w postoju, z uwzględnieniem ryzyka pożaru w sezonie.</p></li>
      <li class="hub-item"><h3>OC gospodarstwa i gości</h3><p>Odpowiedzialność wobec osób trzecich, gości degustacji i wesel, uczestników wydarzeń, a także OC za produkt przy sprzedaży wina.</p></li>
      <li class="hub-item"><h3>Pracownicy</h3><p>Obowiązkowe ubezpieczenie wypadkowe w Portugalii, a w Hiszpanii — dopełnienie systemu publicznego i OC pracodawcy.</p></li>
      <li class="hub-item"><h3>Środowisko i przerwa w działalności</h3><p>Odpowiedzialność za szkody w środowisku (np. wyciek środków ochrony roślin) oraz utrata dochodu winiarni i części turystycznej po szkodzie.</p></li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="luki">
  <div class="container narrow article-body">
    <h2 id="luki">Co najczęściej idzie nie tak</h2>
    <ul>
      <li><strong>Polisa domowa na posiadłość z działalnością.</strong> Zwykła polisa mieszkaniowa wyłącza działalność zarobkową — degustacje, noclegi i sprzedaż wina pozostają bez ochrony OC.</li>
      <li><strong>Wino ubezpieczone po koszcie.</strong> Zapas o wartości rynkowej wielokrotnie wyższej od kosztu wytworzenia zostaje po szkodzie rozliczony według kosztu.</li>
      <li><strong>Budynki gospodarcze poza sumą.</strong> Stodoły, magazyny siana, mury i zbiorniki pominięte w opisie ryzyka — i poza ochroną przy pożarze.</li>
      <li><strong>Wydarzenia bez zgłoszenia.</strong> Wesele na 200 osób na polisie, która zakłada kameralne degustacje.</li>
      <li><strong>Sezonowi pracownicy przy zbiorach</strong> bez ubezpieczenia wypadkowego w Portugalii — obowiązek dotyczy każdego zatrudnienia, także krótkiego.</li>
      <li><strong>Brak ubezpieczenia upraw</strong> przy założeniu, że polisa majątkowa obejmuje grad na winnicy. Nie obejmuje — to osobny system.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="czego-potrzebujemy">
  <div class="container narrow article-body">
    <h2 id="czego-potrzebujemy">Czego potrzebujemy, żeby uzyskać warunki</h2>
    <ol class="process-steps">
      <li><div><strong>Opis posiadłości</strong><span> — lokalizacja, powierzchnia, lista budynków z powierzchnią i rokiem budowy lub remontu.</span></div></li>
      <li><div><strong>Działalności</strong><span> — co jest uprawiane, czy jest winiarnia, jaka jest produkcja i sprzedaż, czy przyjmowani są goście i w jakiej skali.</span></div></li>
      <li><div><strong>Zapasy wina</strong><span> — ilości, sposób przechowywania, wycena i ewentualne wyceny rzadkich roczników.</span></div></li>
      <li><div><strong>Zabezpieczenia</strong><span> — przeciwpożarowe (pasy, zbiorniki, hydranty), alarmowe, dozór.</span></div></li>
      <li><div><strong>Pracownicy</strong><span> — liczba stałych i sezonowych oraz zakres ich prac.</span></div></li>
      <li><div><strong>Obecne polisy</strong><span> i historia szkód z ostatnich lat.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="jak-pracujemy">
  <div class="container narrow article-body">
    <h2 id="jak-pracujemy">Jak pracujemy</h2>
    <p>Adler &amp; Rochefort to pośrednik ubezpieczeniowy dla klientów prywatnych o znacznym majątku, z biurami w Lizbonie i Lagos, zarejestrowany w ASF pod numerem 425591790/3, działający w Hiszpanii w ramach unijnej swobody świadczenia usług. Dom i kolekcje lokujemy w naszym portfelu ubezpieczycieli, a ryzyka winiarskie, rolne i turystyczne — tam, gdzie to potrzebne — <strong>na rynkach specjalistycznych i przez partnerów co-brokerage</strong>.</p>
    <ol class="process-steps">
      <li><div><strong>Pisemna ocena.</strong><span> Mapa ryzyk posiadłości: co jest objęte, gdzie polisy się dublują, a gdzie zostawiają luki.</span></div></li>
      <li><div><strong>Oględziny tam, gdzie to potrzebne.</strong><span> Przy dużych posiadłościach underwriter zwykle chce zobaczyć zabezpieczenia przeciwpożarowe i winiarnię.</span></div></li>
      <li><div><strong>Jeden program, jeden doradca.</strong><span> Spójne definicje, sumy i daty odnowienia — i jedna osoba, która zna całość.</span></div></li>
      <li><div><strong>Szkoda.</strong><span> Prowadzimy zgłoszenie od pierwszego dnia, pisemnie, aż do wypłaty.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="ocena">
  <div class="container narrow article-body">
    <h2 id="ocena">Pisemna ocena</h2>
    <p>Najlepszym punktem wyjścia są obecne polisy posiadłości. Przeczytamy je razem i odpowiemy pisemnie, co warto zmienić.</p>
    <p><a href="#oferta" class="btn-cta">Poproś o pisemną ocenę</a></p>
    <p class="legal-note">Ta strona ma charakter informacyjny. Ochrona zależy od oceny ryzyka dokonanej przez ubezpieczyciela oraz od warunków polisy faktycznie wystawionej. Ubezpieczenia upraw w obu krajach podlegają odrębnym zasadom i terminom.</p>
  </div>
</section>`,
  faqTitle: 'Posiadłości wiejskie i winnice — pytania',
  faq: [
    {
      q: 'Czy jedna polisa może objąć dom, winnicę i winiarnię?',
      a: '<p>Czasem tak, częściej jest to program kilku polis ułożonych tak, żeby miały spójne definicje, sumy i daty odnowienia. Ważne jest nie to, ile jest dokumentów, lecz to, żeby na granicach między nimi nie zostawały luki.</p>',
    },
    {
      q: 'Jak ubezpiecza się zapasy wina?',
      a: '<p>Kluczowa jest podstawa wyceny: koszt wytworzenia albo wartość rynkowa. Wino o wartości kolekcjonerskiej warto ubezpieczyć według wartości uzgodnionej, a do tego sprawdzić ochronę przed zepsuciem po awarii chłodzenia lub zasilania.</p>',
    },
    {
      q: 'Czy polisa majątkowa obejmuje grad lub suszę na winnicy?',
      a: '<p>Zwykle nie. Uprawy ubezpiecza się osobno, w systemach wspieranych przez państwo — w Portugalii i w Hiszpanii działają one według własnych zasad i terminów zawarcia. Traktujemy je jako osobną warstwę programu.</p>',
    },
    {
      q: 'Organizujemy degustacje i wesela. Czego wymaga to od ubezpieczenia?',
      a: '<p>Odpowiedzialności cywilnej za działalność, obejmującej gości i uczestników wydarzeń, a przy sprzedaży wina — także OC za produkt. Zwykła polisa mieszkaniowa wyłącza działalność zarobkową, dlatego skalę wydarzeń trzeba opisać ubezpieczycielowi dokładnie.</p>',
    },
    {
      q: 'Czy ubezpieczenie wypadkowe pracowników jest obowiązkowe?',
      a: '<p>W Portugalii tak — seguro de acidentes de trabalho dotyczy każdego zatrudnienia, także sezonowego przy zbiorach. W Hiszpanii wypadki przy pracy obsługuje system zabezpieczenia społecznego, a układy zbiorowe często przewidują dodatkowe ubezpieczenie; OC pracodawcy jest zalecane w obu krajach.</p>',
    },
  ],
  related: [
    { url: '/pl/', label: 'Klienci prywatni w Portugalii i Hiszpanii' },
    { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu o wysokiej wartości' },
    { url: '/pl/ubezpieczenie-koni/', label: 'Ubezpieczenie koni i obiektów jeździeckich' },
    { url: '/pl/ubezpieczenie-wynajem-willi/', label: 'Ubezpieczenie wynajmu luksusowej willi' },
  ],
};
