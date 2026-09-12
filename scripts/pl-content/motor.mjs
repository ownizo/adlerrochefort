/**
 * /pl/ubezpieczenie-samochodu-portugalia/
 *
 * Search intent: "ubezpieczenie samochodu w Portugalii" — a Polish driver
 * either bringing a car or buying one here, and wanting to know what replaces
 * OC and AC.
 *
 * The Polish-specific hooks: the OC/AC vocabulary maps onto
 * responsabilidade civil / danos próprios but not one-to-one, the
 * zniżki-and-historia-szkodowa system is what the reader is trying to protect,
 * and the ISV/IMT import procedure is the same Portuguese process the German
 * and Dutch clusters describe — so the mechanics are consistent with those
 * pages rather than freshly asserted, and the claims-history section is hedged
 * because no insurer guarantees recognition.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'ubezpieczenie-samochodu-portugalia',
  url: '/pl/ubezpieczenie-samochodu-portugalia/',
  cluster: 'motor',
  title: 'Ubezpieczenie samochodu w Portugalii dla Polaków | Adler & Rochefort',
  description:
    'Obowiązkowe OC po portugalsku, odpowiednik AC, przerejestrowanie samochodu i ISV, polskie prawo jazdy oraz historia szkodowa i zniżki przy przeprowadzce do Portugalii.',
  keywords:
    'ubezpieczenie samochodu Portugalia, OC Portugalia, AC Portugalia, przerejestrowanie samochodu Portugalia ISV, polskie prawo jazdy Portugalia, historia szkodowa Portugalia, zniżki OC za granicą',
  eyebrow: 'Ubezpieczenie komunikacyjne',
  h1: 'Ubezpieczenie samochodu w Portugalii: tablice, zakres i Państwa historia szkodowa',
  standfirst:
    'Pytanie rzadko brzmi „czy mogę przywieźć samochód”. Brzmi „czy to się opłaca” i „jak nie zostać bez ochrony między polskimi i portugalskimi tablicami”. Ta strona porządkuje jedno i drugie — bez obietnic, których żaden ubezpieczyciel nie może dać.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ubezpieczenie samochodu' }],
  pullquote: 'Ochrona musi trwać nieprzerwanie w trakcie zmiany tablic — nie zacząć się po niej.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie samochodu',
  formBranch: 'PL · Samochód',
  formSubject: 'Ubezpieczenie samochodu w Portugalii',
  formCta: 'Zapytaj o ofertę',
  formIntro:
    'Proszę podać pojazd, aktualną rejestrację i planowany termin. Odpowiemy, jak ułożyć ochronę bez luki.',
  formPlaceholder:
    'Na przykład: Skoda Octavia 2019, polskie tablice, przerejestrowanie planowane na kwiecień, 9 lat bez szkody.',
  sections: `
<section class="section plain" aria-labelledby="oc-i-ac">
  <div class="container narrow article-body">
    <h2 id="oc-i-ac">OC i AC po portugalsku</h2>
    <p>Struktura jest znajoma, ale nazwy i granice zakresu inne. Obowiązkowe jest ubezpieczenie odpowiedzialności cywilnej posiadacza pojazdu — <em>responsabilidade civil automóvel</em> — czyli dokładny odpowiednik polskiego OC, z ustawowymi minimalnymi sumami gwarancyjnymi. Bez niego pojazd nie może być dopuszczony do ruchu.</p>
    <p>Powyżej tego poziomu portugalski rynek nie używa jednego pojęcia „AC”. Zamiast tego buduje się zakres z modułów, a <em>danos próprios</em> (szkody własne) to najbliższy odpowiednik autocasco. Typowe elementy, które dokłada się osobno:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Polskie pojęcia komunikacyjne i ich portugalskie odpowiedniki</caption>
        <thead>
          <tr><th scope="col">Po polsku</th><th scope="col">Po portugalsku</th><th scope="col">Uwagi</th></tr>
        </thead>
        <tbody>
          <tr><td>OC</td><td><em>responsabilidade civil automóvel</em></td><td>Obowiązkowe, minimalne sumy ustawowe.</td></tr>
          <tr><td>AC (autocasco)</td><td><em>danos próprios</em></td><td>Moduł opcjonalny, z własną franszyzą; często wymagany przy leasingu i kredycie.</td></tr>
          <tr><td>Kradzież</td><td><em>furto ou roubo</em></td><td>Bywa osobnym modułem, nie zawsze częścią <em>danos próprios</em>.</td></tr>
          <tr><td>Szyby</td><td><em>quebra isolada de vidros</em></td><td>Zwykle bez franszyzy lub z niską; tanie, a używane najczęściej.</td></tr>
          <tr><td>Assistance</td><td><em>assistência em viagem</em></td><td>Uwaga na limit kilometrów od miejsca zamieszkania i zakres holowania.</td></tr>
          <tr><td>NNW / kierowca</td><td><em>ocupantes</em> / <em>proteção do condutor</em></td><td>Kierowca sprawca nie jest chroniony z OC — to osobny moduł.</td></tr>
          <tr><td>Ochrona prawna</td><td><em>proteção jurídica</em></td><td>Przydatna w sporze o winę; w Polsce rzadziej kupowana.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Czy warto dokupować <em>danos próprios</em>, zależy od wartości i wieku pojazdu oraz od tego, czy finansowanie lub leasing wymaga określonego minimalnego zakresu. Przy pojazdach o niskiej wartości rynkowej sam rachunek bywa jednoznaczny; przy nowszych rzadko.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="tablice-i-luka">
  <div class="container narrow article-body">
    <h2 id="tablice-i-luka">Polskie tablice, portugalskie tablice i luka pomiędzy</h2>
    <p>Dopóki samochód pozostaje zarejestrowany w Polsce, polska polisa jest skonstruowana wokół rejestracji i miejsca zamieszkania w Polsce. Po wymeldowaniu i przeniesieniu rezydencji ta podstawa przestaje odpowiadać rzeczywistości, nawet jeśli umowa formalnie trwa. Z drugiej strony portugalski ubezpieczyciel zwykle może wystawić regularną polisę dopiero na <strong>portugalskie tablice</strong> (<em>matrícula</em>).</p>
    <div class="callout">
      <span class="callout-label">Co rzeczywiście działa</span>
      Proszę zgłosić polskiemu ubezpieczycielowi zmianę miejsca zamieszkania z dokładną datą i poprosić <strong>pisemnie</strong> o informację, czy i jak długo ochrona obowiązuje po tej zmianie. Jeśli ten okres jest krótszy niż czas potrzebny na przerejestrowanie — a zwykle jest — organizujemy rozwiązanie na czas przejściowy i ustawiamy start docelowej polisy portugalskiej na dzień wydania <em>matrícula</em>. Nigdy nie wypowiadamy polskiej umowy przed ustaleniem, co będzie dalej.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="przerejestrowanie">
  <div class="container narrow article-body">
    <h2 id="przerejestrowanie">Przerejestrowanie i ISV — przegląd</h2>
    <p>Jesteśmy agencją ubezpieczeniową, nie agencją celną. Poniżej przegląd wystarczający do podjęcia decyzji, a nie instrukcja: samą procedurę praktycznie wszyscy prowadzą z <em>despachante</em> (agentem celnym).</p>
    <h3>ISV — <em>Imposto sobre Veículos</em></h3>
    <p>Portugalski podatek od pojazdów, płatny przy pierwszej rejestracji w kraju. Podstawą wyliczenia są dwa składniki: <strong>pojemność silnika</strong> i <strong>emisja CO₂</strong>. Od wyniku stosuje się obniżkę zależną od wieku pojazdu. To wyjaśnia dwa skrajne przypadki: młody, mocny diesel potrafi wygenerować podatek rzędu kilku tysięcy euro, a starsze niewielkie auto benzynowe wychodzi relatywnie tanio.</p>
    <p>Przy trwałej przeprowadzce może mieć zastosowanie <strong>zwolnienie z tytułu przeniesienia miejsca zamieszkania</strong>. Warunki są ścisłe — dotyczą między innymi tego, jak długo pojazd był w Państwa posiadaniu przed przeprowadzką i jak długo musi pozostać po niej — a wniosek jest obwarowany terminami biegnącymi od momentu rejestracji pobytu. Kto najpierw jeździ, a potem czyta, jest zwykle po terminie.</p>
    <h3>Kolejność czynności</h3>
    <ol>
      <li>Zgłoszenie celne (<em>alfândega</em>) i rozliczenie ISV albo wniosek o zwolnienie.</li>
      <li>Badanie techniczne dla pojazdu importowanego, z kontrolą zgodności z wymogami UE.</li>
      <li>Homologacja w IMT i nadanie portugalskich tablic.</li>
      <li>Wydanie <em>Documento Único Automóvel</em>, czyli portugalskiego dowodu rejestracyjnego.</li>
    </ol>
    <p>Z chwilą, gdy znana jest <em>matrícula</em>, zaczyna działać portugalska polisa. To moment, w którym ochrona staje się docelowa.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="historia-szkodowa">
  <div class="container narrow article-body">
    <h2 id="historia-szkodowa">Historia szkodowa i zniżki wypracowane w Polsce</h2>
    <p>Wieloletnia bezszkodowa historia z polskiego ubezpieczyciela ma dla portugalskiego ubezpieczyciela realną wartość ekonomiczną — ale <strong>jej uznanie nie jest gwarantowane i zależy od konkretnego ubezpieczyciela</strong>. Nie możemy złożyć uniwersalnej obietnicy, że każdy przeniesie zniżki w całości; niektórzy uwzględniają je w pełni, inni częściowo, a jeszcze inni wyłącznie przy zaświadczeniu w określonej formie.</p>
    <p>Co warto zrobić: poprosić polskiego ubezpieczyciela o <strong>zaświadczenie o przebiegu ubezpieczenia</strong> (liczba lat, liczba i rodzaj szkód) <strong>jeszcze przed zakończeniem umowy</strong>. Po jej zakończeniu zdobycie dokumentu bywa trudne albo niemożliwe, a bez niego negocjujemy ze znacznie słabszej pozycji. Jeśli dokument jest po polsku, pomagamy przygotować jego wersję do przedstawienia ubezpieczycielowi.</p>
    <p>Warto też wiedzieć, że w Portugalii historia szkodowa jest zwykle przypisana do <strong>ubezpieczającego</strong>, a nie do pojazdu — więc sprzedaż samochodu nie kasuje dorobku, a kupno drugiego nie zaczyna go od zera.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="prawo-jazdy">
  <div class="container narrow article-body">
    <h2 id="prawo-jazdy">Polskie prawo jazdy w Portugalii</h2>
    <p>Polskie prawo jazdy jest dokumentem unijnym i zachowuje ważność w Portugalii — do samego kierowania pojazdem wymiana nie jest konieczna. Jako rezydent rejestruje się jednak unijne prawo jazdy w <strong>IMT</strong>. To nie wymiana dokumentu: zachowuje się swoje prawo jazdy, a rejestracja ma termin liczony od momentu zarejestrowania pobytu.</p>
    <p>Dlaczego ta informacja znalazła się na stronie o ubezpieczeniach: przy szkodzie badane jest, czy osoba kierująca miała do tego uprawnienia. Ważne, ale niezarejestrowane prawo jazdy zwykle nie stanowi problemu z zakresem ochrony, ale jest właśnie tym rodzajem administracyjnej luźnej nitki, która opóźnia likwidację szkody w momencie, gdy zależy nam na czasie. Jeśli termin ważności dokumentu wypada w trakcie zamieszkiwania w Portugalii, przedłuża się go już nie w Polsce, a w IMT.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="szkoda">
  <div class="container narrow article-body">
    <h2 id="szkoda">Co robić po stłuczce</h2>
    <ol class="process-steps">
      <li><div><strong>Wypełnić <em>Declaração Amigável</em></strong><span> — portugalski odpowiednik europejskiego oświadczenia o zdarzeniu drogowym. Formularz jest dwujęzyczny w standardzie europejskim i wystarcza w miejsce wzywania policji przy szkodach bez ofiar i bez sporu.</span></div></li>
      <li><div><strong>Zrobić zdjęcia</strong><span> — pozycji pojazdów przed ich przestawieniem, uszkodzeń, tablic, dokumentów drugiego uczestnika.</span></div></li>
      <li><div><strong>Wezwać policję</strong><span>, jeśli są osoby poszkodowane, jest spór o przebieg zdarzenia albo drugi uczestnik odmawia podpisania oświadczenia.</span></div></li>
      <li><div><strong>Zgłosić szkodę w terminie.</strong><span> Terminy są krótkie i liczone od dnia zdarzenia; są zapisane w warunkach polisy.</span></div></li>
      <li><div><strong>Nie oddawać pojazdu do naprawy przed uzgodnieniem trybu</strong><span> — przy <em>danos próprios</em> zwykle obowiązuje wskazanie warsztatu lub oględziny rzeczoznawcy.</span></div></li>
    </ol>
    <p>To ta część, w której obecność agenta ma największe znaczenie. Zgłoszenie, korespondencja, pilnowanie terminów i dopytywanie ubezpieczyciela prowadzimy za Państwa, po angielsku i pisemnie.</p>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie samochodu w Portugalii — pytania',
  faq: [
    {
      q: 'Czy mogę ubezpieczyć w Portugalii samochód na polskich tablicach?',
      a: '<p>Dopóki pojazd pozostaje zarejestrowany w Polsce, rozwiązaniem na czas przejściowy jest zwykle utrzymanie polskiej polisy z pisemnym potwierdzeniem, jak długo obowiązuje po zmianie miejsca zamieszkania. Regularna polisa portugalska zwykle wymaga portugalskich tablic. Zajmujemy się ułożeniem tego przejścia bez luki w ochronie.</p>',
    },
    {
      q: 'Czy muszę przerejestrować samochód?',
      a: '<p>Nie natychmiast, ale przy trwałym pobycie zwykle tak. Droga prowadzi przez zgłoszenie celne i ISV (albo wniosek o zwolnienie z tytułu przeniesienia miejsca zamieszkania), badanie techniczne i homologację w IMT. Warto zakładać tygodnie, nie dni.</p>',
    },
    {
      q: 'Czy moje zniżki z Polski zostaną uwzględnione?',
      a: '<p>Możliwe, ale niegwarantowane — zależy od ubezpieczyciela. Prosimy o zaświadczenie o przebiegu ubezpieczenia u polskiego ubezpieczyciela <em>przed</em> zakończeniem umowy; później jego uzyskanie bywa bardzo trudne, a bez niego pozycja negocjacyjna jest znacznie słabsza.</p>',
    },
    {
      q: 'Jakie dokumenty będą potrzebne do polisy?',
      a: '<p>Zwykle: dowód rejestracyjny pojazdu, dokument tożsamości i NIF, adres w Portugalii, prawo jazdy, zaświadczenie o przebiegu ubezpieczenia z Polski, a przy imporcie — dokumenty celne i IMT. Pełną listę dla konkretnej sprawy podajemy w pierwszej odpowiedzi.</p>',
    },
    {
      q: 'Czy potrzebuję odpowiednika AC?',
      a: '<p>OC jest obowiązkowe. Czy warto dokładać <em>danos próprios</em>, zależy od wartości i wieku pojazdu oraz od wymogów leasingu lub kredytu, jeśli takie istnieją. Przedstawiamy warianty dla konkretnego pojazdu, z franszyzami podanymi kwotowo, żeby rachunek był widoczny.</p>',
    },
    {
      q: 'Czy jest ważne, kto prowadzi samochód?',
      a: '<p>Tak. Polisy określają krąg osób uprawnionych do kierowania, a niektóre warianty przewidują ograniczenia lub podwyższoną franszyzę dla młodych kierowców albo kierowców z krótkim stażem. Jeśli samochodem będą jeździć inne osoby niż ubezpieczający, trzeba to zgłosić przy zawarciu umowy.</p>',
    },
  ],
  related: [
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku' },
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
  ],
};
