/**
 * /pl/przeprowadzka-do-portugalii-ubezpieczenia/
 *
 * Search intent: "przeprowadzka do Portugalii" with an insurance angle — the
 * sequencing question. Someone has decided to move and needs to know what to
 * arrange in which order, and where the gaps open.
 *
 * This is the page that links out to all four product pages, so it stays a
 * timeline rather than repeating their content: the value it adds is the order
 * of operations and the three moments where cover lapses without anyone
 * noticing.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOVING_PAGE = {
  slug: 'przeprowadzka-do-portugalii-ubezpieczenia',
  url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/',
  cluster: 'moving',
  title: 'Przeprowadzka do Portugalii: ubezpieczenia krok po kroku | Adler & Rochefort',
  description:
    'Co ustawić przed wyjazdem z Polski, co po uzyskaniu NIF, a co dopiero po rejestracji pobytu. Zdrowie, mieszkanie, samochód i odpowiedzialność cywilna w odpowiedniej kolejności.',
  keywords:
    'przeprowadzka do Portugalii, ubezpieczenia przy przeprowadzce do Portugalii, NIF Portugalia, rejestracja pobytu Portugalia, wyprowadzka z Polski ubezpieczenie, przeprowadzka Portugalia formalności',
  eyebrow: 'Przeprowadzka',
  h1: 'Przeprowadzka do Portugalii: ubezpieczenia w odpowiedniej kolejności',
  standfirst:
    'Przy przeprowadzce nie chodzi o to, żeby kupić wszystko naraz. Chodzi o kolejność — bo luki w ochronie powstają dokładnie na stykach: między polskim a portugalskim systemem zdrowotnym, między polskimi a portugalskimi tablicami i między zakupem nieruchomości a jej ubezpieczeniem.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Przeprowadzka do Portugalii' }],
  pullquote: 'Luki nie powstają wtedy, gdy się o czymś zapomni. Powstają wtedy, gdy dwie rzeczy zrobi się w złej kolejności.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenia na czas przeprowadzki',
  formBranch: '',
  formSubject: 'Przeprowadzka do Portugalii (PL)',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę napisać, kiedy planowana jest przeprowadzka i co zabieracie Państwo ze sobą. Odpowiemy, co i kiedy trzeba ustawić.',
  formPlaceholder:
    'Na przykład: przeprowadzka we wrześniu, dwie osoby dorosłe i dziecko, samochód na polskich tablicach, wynajmujemy mieszkanie w Porto.',
  sections: `
<section class="section plain" aria-labelledby="trzy-luki">
  <div class="container narrow article-body">
    <h2 id="trzy-luki">Trzy luki, które widzimy najczęściej</h2>
    <p>Zanim przejdziemy do kalendarza, warto nazwać trzy momenty, w których ochrona urywa się niepostrzeżenie. Każdy z nich wynika z tego samego mechanizmu: polski produkt zakłada zamieszkanie w Polsce, a portugalski wymaga czegoś, czego jeszcze nie ma.</p>
    <ul>
      <li><strong>Zdrowie.</strong> Wypisanie się z NFZ następuje z dniem ustania tytułu do ubezpieczenia, a rejestracja w portugalskim SNS wymaga adresu i dokumentu pobytowego. Między tymi dwiema datami mija zwykle kilka tygodni, a karta EKUZ nie jest przeznaczona do sytuacji zmiany miejsca zamieszkania.</li>
      <li><strong>Samochód.</strong> Polska polisa jest zbudowana wokół rejestracji w Polsce, a portugalski ubezpieczyciel zwykle wymaga portugalskich tablic. Przerejestrowanie zajmuje tygodnie.</li>
      <li><strong>Nieruchomość.</strong> Ryzyko przechodzi na nabywcę z chwilą podpisania <em>escritura</em>, a nie w dniu przeprowadzki. Polisa musi zaczynać się w dniu podpisania aktu.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="przed-wyjazdem">
  <div class="container narrow article-body">
    <h2 id="przed-wyjazdem">Etap 1: przed wyjazdem z Polski</h2>
    <p>Tu wykonuje się wszystko, co po wyjeździe staje się trudne lub niemożliwe. To najważniejszy etap, choć wydaje się najmniej pilny.</p>
    <ol class="process-steps">
      <li><strong>Zaświadczenie o przebiegu ubezpieczenia komunikacyjnego.</strong> Proszę poprosić polskiego ubezpieczyciela o dokument z liczbą lat bezszkodowych i historią szkód, <em>przed</em> zakończeniem umowy. Po jej zakończeniu bywa to bardzo trudne.</li>
      <li><strong>Pisemna informacja o działaniu polis po zmianie miejsca zamieszkania.</strong> Dotyczy polis komunikacyjnych, mieszkaniowych i zdrowotnych — proszę pytać na piśmie i zachować odpowiedź. To jest podstawa do zaplanowania przejścia.</li>
      <li><strong>Dokumentacja medyczna.</strong> Historia leczenia, aktualne rozpoznania, lista przyjmowanych leków. Przydaje się przy ankiecie medycznej i u portugalskiego lekarza.</li>
      <li><strong>Sprawdzenie, czy dotyczy Państwa dokument S1.</strong> Przy polskiej emeryturze lub oddelegowaniu zmienia on całą kalkulację dotyczącą zdrowia.</li>
      <li><strong>Decyzja o samochodzie.</strong> Rachunek ISV plus koszt procedury kontra wartość pojazdu. Bywa, że sprzedaż w Polsce i zakup na miejscu wychodzi taniej — i wtedy nie trzeba się zajmować niczym z sekcji o przerejestrowaniu.</li>
      <li><strong>Ubezpieczenie przewozu rzeczy.</strong> Firma przeprowadzkowa ma własną odpowiedzialność, zwykle ograniczoną wagowo i dużo niższą niż wartość przewożonych rzeczy. Warto sprawdzić jej limit i rozważyć osobne ubezpieczenie transportu, zwłaszcza przy przedmiotach o dużej wartości.</li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="pierwsze-tygodnie">
  <div class="container narrow article-body">
    <h2 id="pierwsze-tygodnie">Etap 2: pierwsze tygodnie w Portugalii</h2>
    <p>Kolejność jest tu wymuszona przez administrację: prawie nic nie da się zrobić bez NIF, a wiele rzeczy dodatkowo wymaga adresu.</p>
    <ol class="process-steps">
      <li><strong>NIF</strong> (<em>número de identificação fiscal</em>) — numer identyfikacji podatkowej. Bez niego nie da się zawrzeć umowy ubezpieczenia, wynająć mieszkania ani otworzyć konta.</li>
      <li><strong>Adres i umowa najmu lub akt nabycia.</strong> Punkt odniesienia dla rejestracji pobytu, rejestracji w SNS i dla polisy mieszkaniowej.</li>
      <li><strong>Rachunek bankowy w Portugalii.</strong> Większość ubezpieczycieli pobiera składki polskim przelewem bez problemu, ale polecenie zapłaty z portugalskiego IBAN upraszcza życie i bywa warunkiem rabatu.</li>
      <li><strong>Rejestracja pobytu</strong> we właściwym urzędzie. Od tej daty biegną terminy dotyczące prawa jazdy i ewentualnego zwolnienia z ISV.</li>
      <li><strong>Ubezpieczenie zdrowotne.</strong> Jeśli rejestracja w SNS jeszcze nie doszła do skutku, jest to moment, w którym prywatna polisa zamyka lukę. Proszę pamiętać o okresach karencji — polisa zawarta dzisiaj nie daje natychmiastowego dostępu do wszystkiego.</li>
      <li><strong>Polisa mieszkaniowa</strong> — przy najmie ubezpiecza się ruchomości domowe i odpowiedzialność cywilną, bo mury ubezpiecza właściciel. Przy zakupie zob. <a href="/pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/">stronę o zakupie nieruchomości</a>.</li>
    </ol>
    <div class="callout">
      <span class="callout-label">Najczęstsze pytanie w tym momencie</span>
      „Czy mogę załatwić ubezpieczenie przed przyjazdem?” Częściowo. Zebranie informacji, porównanie wariantów i przygotowanie oferty — tak, i warto to zrobić wcześniej. Samo zawarcie umowy zwykle wymaga NIF, a przy nieruchomości także jej danych z <em>caderneta predial</em>.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="pierwsze-miesiace">
  <div class="container narrow article-body">
    <h2 id="pierwsze-miesiace">Etap 3: pierwsze miesiące</h2>
    <ol class="process-steps">
      <li><strong>Rejestracja w SNS</strong> w przychodni rejonowej i uzyskanie <em>número de utente</em>.</li>
      <li><strong>Rejestracja prawa jazdy w IMT.</strong> Dokumentu unijnego się nie wymienia, ale rezydent go rejestruje, w terminie liczonym od rejestracji pobytu.</li>
      <li><strong>Przerejestrowanie samochodu</strong>, jeśli została podjęta taka decyzja: zgłoszenie celne i ISV lub wniosek o zwolnienie, badanie techniczne, homologacja w IMT. Szczegóły na <a href="/pl/ubezpieczenie-samochodu-portugalia/">stronie o ubezpieczeniu samochodu</a>.</li>
      <li><strong>Uporządkowanie spraw w Polsce.</strong> Wypowiedzenie polis, które przestały mieć podstawę, wyrejestrowanie z NFZ, aktualizacja adresu do korespondencji. Zawsze po ustaleniu, co przejmuje ochronę — nigdy przed.</li>
      <li><strong>Odpowiedzialność cywilna.</strong> Jeśli rozpoczynają Państwo w Portugalii działalność zawodową, to moment na <a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/">OC zawodową</a>; jeśli nie, warto sprawdzić, czy OC w życiu prywatnym rzeczywiście jest w polisie mieszkaniowej.</li>
      <li><strong>Weryfikacja po roku.</strong> Sumy ubezpieczenia, zmiana wartości nieruchomości, nowy sprzęt, zmiana sposobu użytkowania. Pół godziny raz w roku wystarcza.</li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="dokumenty">
  <div class="container narrow article-body">
    <h2 id="dokumenty">Dokumenty, o które zwykle prosimy</h2>
    <p>Nie wszystkie naraz i nie do każdej polisy — ale warto wiedzieć, co będzie potrzebne:</p>
    <ul>
      <li><strong>Do każdej polisy:</strong> NIF, dokument tożsamości, adres w Portugalii, dane kontaktowe.</li>
      <li><strong>Nieruchomość:</strong> <em>caderneta predial</em> albo akt notarialny, powierzchnia, rok budowy, informacja o kredycie i o sposobie użytkowania.</li>
      <li><strong>Samochód:</strong> dowód rejestracyjny, prawo jazdy, zaświadczenie o przebiegu ubezpieczenia z Polski, a przy imporcie dokumenty celne i IMT.</li>
      <li><strong>Zdrowie:</strong> dane osób objętych ochroną, wiek, wypełniona ankieta medyczna, ewentualnie dokumentacja medyczna.</li>
      <li><strong>Działalność:</strong> opis czynności, prognoza przychodów, wymogi ubezpieczeniowe z umów z klientami, historia roszczeń.</li>
    </ul>
    <p class="legal-note">Wymogi administracyjne dotyczące pobytu, rejestracji i podatków ustala portugalska administracja i mogą się zmieniać. Zajmujemy się ubezpieczeniami — kwestie pobytowe i podatkowe warto skonsultować z prawnikiem lub doradcą podatkowym.</p>
  </div>
</section>`,
  faqTitle: 'Przeprowadzka do Portugalii — pytania o ubezpieczenia',
  faq: [
    {
      q: 'Od czego zacząć, jeśli przeprowadzka jest za trzy miesiące?',
      a: '<p>Od dokumentów, które trudno zdobyć po wyjeździe: zaświadczenia o przebiegu ubezpieczenia komunikacyjnego, pisemnej informacji od polskich ubezpieczycieli o działaniu polis po zmianie miejsca zamieszkania oraz dokumentacji medycznej. Równolegle warto policzyć ISV dla samochodu, bo od tego zależy, czy go zabierać.</p>',
    },
    {
      q: 'Czy mogę zawrzeć portugalską polisę przed przyjazdem?',
      a: '<p>Przygotowanie i porównanie ofert — tak, i warto zrobić to wcześniej. Samo zawarcie umowy zwykle wymaga NIF, a w przypadku nieruchomości także jej danych rejestrowych. Datę początku ochrony ustawiamy na dzień, w którym ryzyko faktycznie przechodzi na Państwa.</p>',
    },
    {
      q: 'Czy karta EKUZ wystarczy na pierwsze tygodnie?',
      a: '<p>EKUZ jest przeznaczona dla pobytu czasowego, a nie dla osoby przenoszącej miejsce zamieszkania. Na okres między ustaniem tytułu w NFZ a rejestracją w SNS zwykle proponujemy prywatne ubezpieczenie zdrowotne, pamiętając, że polisy mają okresy karencji i nie dają natychmiastowego dostępu do pełnego zakresu.</p>',
    },
    {
      q: 'Co z ubezpieczeniem rzeczy w transporcie?',
      a: '<p>Firma przeprowadzkowa odpowiada zwykle w ograniczonym zakresie, często wyliczanym od wagi, co przy elektronice i meblach bywa znacznie poniżej wartości. Warto poprosić o limit odpowiedzialności na piśmie i rozważyć osobne ubezpieczenie transportu, zwłaszcza jeśli w transporcie znajdują się przedmioty o dużej wartości.</p>',
    },
    {
      q: 'Kiedy wypowiedzieć polskie polisy?',
      a: '<p>Dopiero wtedy, gdy wiadomo, co i od kiedy przejmuje ochronę. Najczęstszy błąd polega na wypowiedzeniu polskiej polisy komunikacyjnej przed ustaleniem rozwiązania przejściowego. Kolejność jest zawsze taka: najpierw potwierdzenie nowej ochrony na piśmie, potem wypowiedzenie starej.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenie-zdrowotne-portugalia/', label: 'Ubezpieczenie zdrowotne w Portugalii' },
    { url: '/pl/ubezpieczenie-samochodu-portugalia/', label: 'Ubezpieczenie samochodu w Portugalii' },
    { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu i mieszkania w Portugalii' },
  ],
};
