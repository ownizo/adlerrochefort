/**
 * /pl/ubezpieczenie-domu-hiszpania/ (es-home)
 *
 * Search intent: "ubezpieczenie domu w Hiszpanii", "ubezpieczenie willi
 * Hiszpania" — a Polish owner of a villa on the Costa Blanca or Costa del Sol,
 * a home in the Canaries or a flat in Barcelona / Valencia.
 *
 * Original copy, not the Portugal page translated. The Spain-specific hooks:
 * the Consorcio de Compensación de Seguros (catastrophe cover built into every
 * property policy — the opposite of Portugal, where seismic is optional);
 * continente / contenido; comunidad de propietarios; empty periods and
 * okupación for non-resident owners; regional exposures (DANA, Canary
 * volcanic risk, wildfire); rental licensing by region. The high-value
 * framework (cov.py) is summarised insurer-neutral and price-free.
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_HOME_PAGE = {
  slug: 'ubezpieczenie-domu-hiszpania',
  url: '/pl/ubezpieczenie-domu-hiszpania/',
  cluster: 'es-home',
  title: 'Ubezpieczenie domu i rezydencji w Hiszpanii | Adler & Rochefort',
  description:
    'Wille i domy o wysokiej wartości w Hiszpanii: koszt odbudowy, Consorcio, polisa wspólnoty, pustostan, sztuka i kolekcje. Warunki wyjaśnione na piśmie.',
  keywords:
    'ubezpieczenie domu Hiszpania, ubezpieczenie willi Hiszpania, seguro de hogar, ubezpieczenie domu Costa Blanca, ubezpieczenie domu Costa del Sol, ubezpieczenie domu Teneryfa, Consorcio de Compensación de Seguros, comunidad de propietarios',
  eyebrow: 'Hiszpania · Domy o wysokiej wartości',
  h1: 'Ubezpieczenie domu w Hiszpanii: willa, apartament i to, co w nich jest',
  standfirst:
    'Hiszpańskie <em>seguro de hogar</em> wygląda znajomo — mury, ruchomości, OC. Różnice są gdzie indziej: ryzyka katastroficzne pokrywa Consorcio, polisa wspólnoty kończy się na budynku, a dom używany kilka miesięcy w roku to dla ubezpieczyciela inne ryzyko niż dom zamieszkany. Poniżej opisujemy, co sprawdzamy na piśmie przy każdej propozycji.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Hiszpania', url: '/pl/ubezpieczenia-hiszpania-przewodnik/' },
    { name: 'Ubezpieczenie domu' },
  ],
  pullquote:
    'Willa w Marbelli nie jest droższym mieszkaniem. Ma inny koszt odbudowy, inne przedmioty w środku i innych ludzi, za których Państwo odpowiadają.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie domu w Hiszpanii',
  formBranch: 'PL · Dom',
  formSubject: 'Ubezpieczenie domu w Hiszpanii',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Wystarczy lokalizacja, sposób użytkowania i przybliżona powierzchnia — albo obecna polisa, także po hiszpańsku. Odpowiemy pisemnie.',
  formPlaceholder:
    'Na przykład: willa w Altei, 320 m², basen, używana od kwietnia do października, obrazy i biżuteria do ubezpieczenia osobno.',
  sections: `
<section class="section plain" aria-labelledby="consorcio">
  <div class="container narrow article-body">
    <h2 id="consorcio">Consorcio: katastrofy poza polisą, ale nie poza systemem</h2>
    <p>Najważniejsza różnica w stosunku do Polski i do Portugalii. W Hiszpanii tzw. ryzyka nadzwyczajne — <strong>powódź, trzęsienie ziemi, fala sztormowa, erupcja wulkanu, nietypowa wichura</strong> i zdarzenia o charakterze terrorystycznym — pokrywa <em>Consorcio de Compensación de Seguros</em>, instytucja publiczna finansowana dopłatą doliczaną do każdej polisy majątkowej.</p>
    <p>W praktyce oznacza to, że dom ubezpieczony w Hiszpanii ma ochronę przed trzęsieniem ziemi czy powodzią nadzwyczajną niejako „wbudowaną” — w Portugalii ryzyko sejsmiczne trzeba zwykle wykupić osobno. Są jednak trzy rzeczy, o których warto pamiętać:</p>
    <ul>
      <li><strong>Consorcio wypłaca na podstawie Państwa polisy.</strong> Sumy ubezpieczenia są te same — jeśli dom jest niedoubezpieczony, świadczenie z Consorcio również zostanie obniżone.</li>
      <li><strong>Nie każda ulewa jest „nadzwyczajna”.</strong> Zalanie po gwałtownym deszczu może zostać zakwalifikowane jako ryzyko zwykłe — wtedy płaci ubezpieczyciel, według warunków polisy. Dlatego zakres dotyczący deszczu, gradu i wiatru w samej polisie wciąż ma znaczenie.</li>
      <li><strong>Po szkodzie katastroficznej liczy się szybkość.</strong> Po DANA w Walencji w 2024 roku Consorcio przyjęło setki tysięcy zgłoszeń. Kompletna dokumentacja — zdjęcia, faktury, inwentarz — skraca drogę do wypłaty.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="warunki-hiszpania">
  <div class="container narrow article-body">
    <h2 id="warunki-hiszpania">Dom o wysokiej wartości: warunki, o które pytamy</h2>
    <p>Powyżej pewnego kosztu odbudowy polisa masowa przestaje pasować. Dla rezydencji w Hiszpanii szukamy u ubezpieczycieli tych samych warunków referencyjnych, co w Portugalii:</p>
    <ul class="hub-list">
      <li class="hub-item"><h3>Oględziny i koszt odbudowy</h3><p>Bezpłatne oględziny na miejscu, potwierdzenie kosztu odbudowy i sum ubezpieczenia ruchomości oraz przedmiotów wartościowych.</p></li>
      <li class="hub-item"><h3>Bez zasady proporcji</h3><p>Po przyjęciu rekomendowanych sum ubezpieczyciel rezygnuje z <em>regla proporcional</em> — szkoda częściowa wypłacana w całości.</p></li>
      <li class="hub-item"><h3>Gwarantowana odbudowa</h3><p>Po szkodzie całkowitej dom zostaje odbudowany, nawet jeśli koszt przekroczy sumę — przy sumach zarekomendowanych po oględzinach.</p></li>
      <li class="hub-item"><h3>Zakwaterowanie porównywalnego standardu</h3><p>Przez cały czas, gdy dom nie nadaje się do zamieszkania, również dla zwierząt — bez kilkumiesięcznego limitu typowego dla rynku masowego.</p></li>
      <li class="hub-item"><h3>Ogród, mury, basen</h3><p>Ogrodzenia, mury oporowe, baseny, budynki gospodarcze i domy gościnne z własnymi sumami, a nie symbolicznym limitem.</p></li>
      <li class="hub-item"><h3>Sztuka, biżuteria i kolekcje</h3><p>Wartość uzgodniona na podstawie wyceny, bez franszyzy, z ochroną przed niedoszacowaniem i utratą wartości po renowacji.</p></li>
      <li class="hub-item"><h3>Ruchomości od wszystkich ryzyk</h3><p>W domu, w podróży i w drugiej nieruchomości — z automatyczną ochroną nowych nabytków i rzeczy gości.</p></li>
      <li class="hub-item"><h3>Odpowiedzialność cywilna i rodzina</h3><p>OC rodziny liczona w milionach euro, zasięg światowy, koszty obrony ponad sumę; do tego ochrona przed napadem, groźbami i cyberprzemocą.</p></li>
    </ul>
    <p class="legal-note">To warunki referencyjne polis dla majątków o wysokiej wartości, które lokujemy u ubezpieczycieli. Zakres, limity, franszyzy i wyłączenia różnią się w zależności od ubezpieczyciela i ryzyka i są potwierdzane wyłącznie w dokumentacji wystawionej polisy.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="continente">
  <div class="container narrow article-body">
    <h2 id="continente"><em>Continente</em>, <em>contenido</em> i polisa wspólnoty</h2>
    <p>Hiszpańska polisa dzieli ryzyko na <strong><em>continente</em></strong> (budynek i elementy stałe) oraz <strong><em>contenido</em></strong> (meble, sprzęt, rzeczy osobiste) — mniej więcej tak, jak polskie mury i ruchomości. Suma <em>continente</em> powinna odpowiadać kosztowi odbudowy, a nie cenie zakupu: na Costa del Sol cena zawiera wartość działki i widoku, których pożar nie niszczy.</p>
    <p>W apartamencie lub w urbanizacji z częściami wspólnymi działa <em>comunidad de propietarios</em>, która ma własną polisę. Obejmuje ona zwykle konstrukcję, dach, elewację, windy, baseny i ogrody wspólne. <strong>Nie obejmuje wykończenia Państwa lokalu, ruchomości ani Państwa odpowiedzialności wobec sąsiadów</strong> — na przykład za zalanie z Państwa łazienki. Warto poprosić administratora (<em>administrador de fincas</em>) o kopię polisy i sprawdzić sumę oraz jej aktualność.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="pustostan">
  <div class="container narrow article-body">
    <h2 id="pustostan">Dom używany część roku: nieobecność i zajęcie nieruchomości</h2>
    <p>Wiele polskich rodzin spędza w Hiszpanii zimę albo lato. Dla ubezpieczyciela to <em>vivienda secundaria</em> — i musi to być zgłoszone jako takie.</p>
    <ul>
      <li><strong>Okresy nieobecności.</strong> Część polis ogranicza ochronę od kradzieży lub zalania po określonej liczbie dni pustostanu z rzędu. Sprawdzamy ten próg i warunki, które trzeba spełnić — zamknięty zawór wody, aktywny alarm, zabezpieczone okna.</li>
      <li><strong>Zajęcie nieruchomości przez osoby nieuprawnione (<em>okupación</em>).</strong> Część hiszpańskich polis oferuje ochronę prawną i pomoc w odzyskaniu nieruchomości. To nie zastępuje dobrych zabezpieczeń, ale przy domu stojącym pustym przez miesiące warto wiedzieć, czy taka opcja jest w zakresie.</li>
      <li><strong>Opiekun nieruchomości.</strong> Regularne wizyty zaufanej osoby lub firmy często są warunkiem korzystniejszego zakresu — i pierwszą linią obrony przed szkodą, o której nikt nie wie przez tygodnie.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="regiony-ryzyka">
  <div class="container narrow article-body">
    <h2 id="regiony-ryzyka">Ryzyka regionalne</h2>
    <ul>
      <li><strong>Gwałtowne ulewy (DANA / <em>gota fría</em>)</strong> — Walencja, Murcja, Alicante i część Andaluzji. Zalania parterów, garaży i piwnic; znaczenie ma położenie domu względem koryt okresowych rzek (<em>ramblas</em>).</li>
      <li><strong>Wyspy Kanaryjskie</strong> — erupcja wulkanu jest ryzykiem Consorcio (jak pokazała La Palma w 2021 roku); do tego wiatr i sól, które przyspieszają zużycie instalacji.</li>
      <li><strong>Pożary lasów</strong> — domy na zboczach Costa del Sol, w głębi Costa Blanca i w Katalonii. Pas przeciwpożarowy wokół działki bywa wymogiem gminy i ma znaczenie przy szkodzie.</li>
      <li><strong>Zalania z instalacji</strong> — jak wszędzie, najczęstsza szkoda. Pytamy o lokalizację awarii (<em>búsqueda de fugas</em>) i o przecieki przez tarasy.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="wynajem-es">
  <div class="container narrow article-body">
    <h2 id="wynajem-es">Wynajem: licencja, polisa i OC wobec gości</h2>
    <p>Wynajem krótkoterminowy w Hiszpanii wymaga zwykle rejestracji lub licencji turystycznej, a zasady ustalają wspólnoty autonomiczne — inne w Andaluzji, inne w Walencji, na Kanarach czy w Katalonii — i coraz częściej także gminy. Zwykła polisa domowa nie obejmuje działalności wynajmu. Potrzebny jest wariant, który ją uwzględnia: szkody wyrządzone przez gości, OC wobec gości i ewentualnie utratę dochodu. Przy wynajmie długoterminowym dochodzi ochrona od niepłacenia czynszu, oferowana przez część ubezpieczycieli.</p>
    <p>Szerzej o wynajmie luksusowych willi piszemy na stronie <a href="/pl/ubezpieczenie-wynajem-willi/">o ubezpieczeniu wynajmu willi</a>.</p>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenie domu w Hiszpanii — pytania',
  faq: [
    {
      q: 'Czy ubezpieczenie domu w Hiszpanii jest obowiązkowe?',
      a: '<p>Dla właściciela domu bez kredytu nie ma powszechnego obowiązku. Przy kredycie hipotecznym bank wymaga ubezpieczenia nieruchomości od ognia i innych szkód, ale nie może narzucić swojej polisy — musi przyjąć polisę z innego źródła o równoważnych warunkach. Wspólnota mieszkaniowa ubezpiecza budynek; ochrona Państwa lokalu i ruchomości to osobna decyzja.</p>',
    },
    {
      q: 'Czy trzęsienie ziemi i powódź są objęte ochroną?',
      a: '<p>W Hiszpanii ryzyka nadzwyczajne, takie jak trzęsienie ziemi, powódź nadzwyczajna czy erupcja wulkanu, pokrywa Consorcio de Compensación de Seguros — pod warunkiem posiadania ważnej polisy majątkowej na dane mienie. Świadczenie liczone jest na podstawie sum z Państwa polisy, dlatego ich poprawne ustalenie ma znaczenie także tutaj.</p>',
    },
    {
      q: 'Dom stoi pusty przez pół roku. Czy to problem?',
      a: '<p>Nie, jeśli zostanie zgłoszony zgodnie z rzeczywistością. Ubezpieczyciel może postawić warunki — zamknięty zawór wody, alarm, regularne wizyty — i ograniczyć niektóre ochrony po określonej liczbie dni nieobecności. Rozbieżność między zgłoszeniem a rzeczywistością wychodzi przy szkodzie.</p>',
    },
    {
      q: 'Jak ubezpieczyć obrazy i biżuterię w domu w Hiszpanii?',
      a: '<p>Przy znacznej wartości — jako przedmioty wymienione w polisie, według wartości uzgodnionej na podstawie aktualnej wyceny, bez franszyzy. W polisie standardowej przedmioty wartościowe mają zwykle limit na sztukę i limit łączny, które przy kolekcji okazują się symboliczne.</p>',
    },
    {
      q: 'Czy polisa obejmuje wynajem turystyczny?',
      a: '<p>Standardowa polisa domowa zwykle nie. Wynajem krótkoterminowy wymaga wariantu, który uwzględnia działalność wynajmu i OC wobec gości, a sama działalność — rejestracji lub licencji zgodnej z przepisami danego regionu i gminy.</p>',
    },
  ],
  related: [
    { url: '/pl/zakup-nieruchomosci-w-hiszpanii-ubezpieczenie/', label: 'Zakup nieruchomości w Hiszpanii: ubezpieczenie' },
    { url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania/', label: 'Odpowiedzialność cywilna rodziny w Hiszpanii' },
    { url: '/pl/ubezpieczenia-hiszpania-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Hiszpanii' },
  ],
};

withSibling(ES_HOME_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Mają Państwo także dom w Portugalii?',
  body: 'W Portugalii ryzyko sejsmiczne jest zwykle opcją do wykupienia, a <em>multirriscos habitação</em> inaczej przypisuje baseny, pergole czy panele. Opisujemy to na osobnej stronie.',
  url: '/pl/ubezpieczenie-domu-portugalia/',
  cta: 'Ubezpieczenie domu w Portugalii',
});
