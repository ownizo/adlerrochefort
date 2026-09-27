/**
 * /pl/ubezpieczenia-hiszpania-przewodnik/ — Spain cluster landing (es-guide).
 *
 * Search intent: "ubezpieczenia w Hiszpanii", "ubezpieczenie dla Polaków w
 * Hiszpanii" — a Polish family with a home on the Costa Blanca, the Costa del
 * Sol, the Canaries, or in Barcelona / Valencia, who wants one orientation
 * page before looking at any single cover.
 *
 * Written for a Polish reader in Spain, not translated from the Portugal
 * guide: the EU-citizen registration (certificado de registro) rather than a
 * visa, the Consorcio de Compensación de Seguros as the one structural
 * difference from both Poland and Portugal, and the plain statement of how we
 * work there — EU freedom to provide services, Spanish insurers, policies in
 * Spanish, explained in writing in English (the Polish language policy).
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_GUIDE_PAGE = {
  slug: 'ubezpieczenia-hiszpania-przewodnik',
  url: '/pl/ubezpieczenia-hiszpania-przewodnik/',
  cluster: 'es-guide',
  title: 'Ubezpieczenia w Hiszpanii: przewodnik | Adler & Rochefort',
  description:
    'Dom, zdrowie, samochód i OC rodziny w Hiszpanii: Consorcio, rejestracja obywatela UE, polisy po hiszpańsku objaśnione na piśmie. Costa Blanca, Costa del Sol.',
  keywords:
    'ubezpieczenia Hiszpania, ubezpieczenie dla Polaków w Hiszpanii, ubezpieczenie domu Hiszpania, ubezpieczenie zdrowotne Hiszpania, Consorcio de Compensación de Seguros, ubezpieczenie Costa Blanca, ubezpieczenie Costa del Sol, ubezpieczenie Wyspy Kanaryjskie',
  eyebrow: 'Hiszpania · Przewodnik',
  h1: 'Ubezpieczenia w Hiszpanii: przewodnik dla Polaków, którzy mają tam dom lub majątek',
  standfirst:
    'Alicante i Torrevieja, Marbella i Málaga, Teneryfa i Gran Canaria, Barcelona i Walencja — Polacy są w Hiszpanii obecni od dawna, a coraz częściej mają tam dom o znacznej wartości. Poniżej opisujemy, czym hiszpański rynek ubezpieczeń różni się od polskiego i portugalskiego, jak go czytać i jak pracujemy w Hiszpanii.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Ubezpieczenia w Hiszpanii' }],
  pullquote:
    'W Hiszpanii część ryzyk katastroficznych nie należy do ubezpieczyciela, tylko do Consorcio. Kto o tym wie, czyta polisę inaczej.',
  schemaType: 'Article',
  formHeading: 'Porozmawiajmy o Państwa majątku w Hiszpanii',
  formBranch: '',
  formSubject: 'Ubezpieczenia w Hiszpanii (przewodnik)',
  formCta: 'Wyślij zapytanie',
  formIntro:
    'Proszę opisać, co mają Państwo w Hiszpanii — albo przesłać obecne polisy, także te po hiszpańsku. Odpowiemy pisemnie, po angielsku.',
  formPlaceholder:
    'Na przykład: willa w Marbelli używana pół roku, mieszkanie w Walencji wynajmowane długoterminowo, dwa samochody na hiszpańskich tablicach.',
  sections: `
<section class="section plain" aria-labelledby="hiszpania-inaczej">
  <div class="container narrow article-body">
    <h2 id="hiszpania-inaczej">Trzy rzeczy, które w Hiszpanii działają inaczej</h2>
    <p>Hiszpański rynek ubezpieczeń jest dojrzały i konkurencyjny, a jego podstawowe produkty — <em>seguro de hogar</em>, <em>seguro de salud</em>, <em>seguro de coche</em> — wyglądają znajomo. Różnice kryją się w konstrukcji systemu, nie w nazwach.</p>
    <ul>
      <li><strong>Consorcio de Compensación de Seguros.</strong> Ryzyka nadzwyczajne — powódź, trzęsienie ziemi, erupcja wulkanu, nietypowa wichura o charakterze cyklonu, zdarzenia o charakterze terrorystycznym — pokrywa w Hiszpanii publiczna instytucja, finansowana dopłatą doliczaną do polis majątkowych. To zasadnicza różnica wobec Polski i Portugalii, gdzie na przykład ryzyko sejsmiczne jest zwykle opcją do wykupienia.</li>
      <li><strong>Obywatel UE rejestruje się, a nie ubiega się o wizę.</strong> Polak, który zamieszkuje w Hiszpanii dłużej niż trzy miesiące, uzyskuje <em>certificado de registro de ciudadano de la UE</em>. Przy tej rejestracji osoby, które nie pracują w Hiszpanii, wykazują zwykle ubezpieczenie zdrowotne i wystarczające środki — publiczne (np. na podstawie formularza S1) lub prywatne.</li>
      <li><strong>Polisa wspólnoty obejmuje budynek, nie Państwa wnętrze.</strong> <em>Comunidad de propietarios</em> ubezpiecza konstrukcję i części wspólne; wykończenie, ruchomości i odpowiedzialność cywilna właściciela to osobna polisa — podobnie jak w Portugalii, ale inaczej, niż przyzwyczaja polska wspólnota.</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="gdzie-mieszkaja">
  <div class="container narrow article-body">
    <h2 id="gdzie-mieszkaja">Region ma znaczenie dla polisy</h2>
    <p>Hiszpania to kilka bardzo różnych profili ryzyka. Ten sam dom kosztuje inaczej i wymaga innych warunków w zależności od tego, gdzie stoi.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Regiony Hiszpanii popularne wśród Polaków a główne kwestie ubezpieczeniowe</caption>
        <thead>
          <tr><th scope="col">Region</th><th scope="col">Typowa nieruchomość</th><th scope="col">Na co zwracamy uwagę</th></tr>
        </thead>
        <tbody>
          <tr><td>Costa Blanca (Alicante, Torrevieja, Altea, Jávea)</td><td>Wille z basenem, apartamenty w urbanizacjach</td><td>Gwałtowne ulewy (DANA), okresy pustostanu, wynajem turystyczny</td></tr>
          <tr><td>Costa del Sol (Marbella, Málaga, Estepona)</td><td>Rezydencje o wysokiej wartości, sztuka, personel domowy</td><td>Suma odbudowy, przedmioty wartościowe, OC rodziny i zatrudnienie personelu</td></tr>
          <tr><td>Wyspy Kanaryjskie (Teneryfa, Gran Canaria)</td><td>Domy całoroczne, apartamenty na wynajem</td><td>Ryzyko wulkaniczne (Consorcio), wiatr, licencje na wynajem wakacyjny</td></tr>
          <tr><td>Barcelona i Walencja</td><td>Mieszkania w kamienicach, domy podmiejskie</td><td>Polisa wspólnoty, zalania, zdrowie rodziny w prywatnej sieci</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="cztery-ochrony">
  <div class="container narrow">
    <h2 id="cztery-ochrony">Cztery ochrony i jeden moment przejścia</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-domu-hiszpania/">Dom i rezydencja w Hiszpanii</a></h3>
        <p>Koszt odbudowy, Consorcio, polisa wspólnoty, okresy nieobecności, sztuka i kolekcje, wynajem i licencje regionalne.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-zdrowotne-hiszpania/">Ubezpieczenie zdrowotne w Hiszpanii</a></h3>
        <p>Publiczna służba zdrowia i S1, prywatne plany krajowe i międzynarodowe dla rodziny, choroby przewlekłe i karencje.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-samochodu-hiszpania/">Samochód w Hiszpanii</a></h3>
        <p>Obowiązkowe OC, przerejestrowanie auta z Polski, prawo jazdy, historia szkodowa i samochody o wysokiej wartości.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania/">Odpowiedzialność cywilna rodziny w Hiszpanii</a></h3>
        <p>Limity z polisy domowej a program na miliony euro, basen, personel domowy, psy, łodzie i wynajem.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/pl/zakup-nieruchomosci-w-hiszpanii-ubezpieczenie/">Zakup nieruchomości w Hiszpanii</a></h3>
        <p>Umowa <em>arras</em>, notariusz i rejestr, ubezpieczenie przy kredycie, ochrona od dnia podpisania aktu.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="jak-w-hiszpanii">
  <div class="container narrow article-body">
    <h2 id="jak-w-hiszpanii">Jak pracujemy w Hiszpanii</h2>
    <p>Adler &amp; Rochefort (Ownizo, Unipessoal Lda.) jest agentem ubezpieczeniowym zarejestrowanym w portugalskim nadzorze ASF pod nr 425591790/3, z biurami w Lizbonie i Lagos. W Hiszpanii działamy w ramach unijnej swobody świadczenia usług — pod tym samym wpisem — z ubezpieczycielami uprawnionymi do działania na hiszpańskim rynku.</p>
    <ul>
      <li><strong>Polisy hiszpańskie, po hiszpańsku.</strong> Umowę zawiera się z ubezpieczycielem działającym w Hiszpanii, a dokumenty są zwykle wystawiane po hiszpańsku.</li>
      <li><strong>Wyjaśnienie na piśmie, po angielsku.</strong> Zanim cokolwiek zostanie podpisane, otrzymują Państwo pisemne omówienie sum, franszyz (<em>franquicias</em>), wyłączeń (<em>exclusiones</em>) i terminów. Nie prowadzimy obsługi po polsku — mówimy to wprost.</li>
      <li><strong>Jeden doradca dla obu krajów.</strong> Rodziny, które mają dom w Portugalii i drugi w Hiszpanii, prowadzi ta sama osoba, według jednego standardu — tak, żeby odpowiedzialność cywilna, sztuka czy samochody nie były ubezpieczone dwa razy ani wcale.</li>
      <li><strong>Szkoda prowadzona do końca.</strong> Zgłoszenie, kontakt z ubezpieczycielem, rzeczoznawcą (<em>perito</em>) i w razie potrzeby z Consorcio — pisemnie, aż do wypłaty.</li>
    </ul>
    <p class="legal-note">Opisujemy, jak zwykle działa hiszpański rynek. Zakres zależy od ubezpieczyciela i wariantu polisy; kwestie pobytowe, podatkowe i prawne należy potwierdzić u właściwego urzędu, prawnika lub doradcy podatkowego.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="slownik-es">
  <div class="container narrow article-body">
    <h2 id="slownik-es">Sześć hiszpańskich słów z każdej polisy</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Podstawowe pojęcia ubezpieczeniowe po polsku i po hiszpańsku</caption>
        <thead>
          <tr><th scope="col">Po polsku</th><th scope="col">Po hiszpańsku</th><th scope="col">Na co zwrócić uwagę</th></tr>
        </thead>
        <tbody>
          <tr><td>Mury / budynek</td><td><em>continente</em></td><td>Suma powinna odpowiadać kosztowi odbudowy.</td></tr>
          <tr><td>Ruchomości domowe</td><td><em>contenido</em></td><td>Przedmioty wartościowe często mają limit na sztukę.</td></tr>
          <tr><td>Niedoubezpieczenie</td><td><em>infraseguro / regla proporcional</em></td><td>Obniża odszkodowanie także przy szkodzie częściowej.</td></tr>
          <tr><td>Udział własny</td><td><em>franquicia</em></td><td>Sprawdzić osobno dla zalań i ryzyk dodatkowych.</td></tr>
          <tr><td>Szkoda</td><td><em>siniestro</em></td><td>Termin zgłoszenia liczony od dnia, w którym się o niej dowiedziano.</td></tr>
          <tr><td>Ogólne / szczególne warunki</td><td><em>condiciones generales / particulares</em></td><td>Szczególne mają pierwszeństwo — to tam są Państwa sumy.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,
  faqTitle: 'Ubezpieczenia w Hiszpanii — pytania Polaków',
  faq: [
    {
      q: 'Czy jako obywatel Polski potrzebuję w Hiszpanii prywatnego ubezpieczenia zdrowotnego?',
      a: '<p>Zależy od sytuacji. Osoba zatrudniona lub prowadząca działalność w Hiszpanii jest objęta publicznym systemem przez tamtejsze ubezpieczenie społeczne. Emeryt z polską emeryturą może korzystać z publicznej opieki na podstawie formularza S1. Osoby, które nie pracują i nie mają S1, przy rejestracji pobytu zwykle wykazują prywatne ubezpieczenie o pełnym zakresie. Wymogi ustala administracja i warto je potwierdzić dla konkretnego przypadku.</p>',
    },
    {
      q: 'Czym jest Consorcio de Compensación de Seguros?',
      a: '<p>To hiszpańska instytucja publiczna, która wypłaca odszkodowania za tzw. ryzyka nadzwyczajne — m.in. powódź, trzęsienie ziemi, erupcję wulkanu, nietypową wichurę i zdarzenia o charakterze terrorystycznym. Finansuje ją dopłata doliczana do polis majątkowych. Warunkiem jest posiadanie ważnej polisy obejmującej dane mienie, dlatego suma ubezpieczenia w polisie ma znaczenie także dla świadczenia z Consorcio.</p>',
    },
    {
      q: 'Czy prowadzą Państwo obsługę po polsku?',
      a: '<p>Nie. Strony są po polsku, bo taki jest ich temat, ale obsługa prowadzona jest po angielsku i pisemnie. Hiszpańskie polisy są zwykle wystawiane po hiszpańsku; przed podpisaniem wyjaśniamy ich treść po angielsku.</p>',
    },
    {
      q: 'Mam dom w Portugalii i w Hiszpanii. Czy mogę mieć jednego doradcę?',
      a: '<p>Tak. Polisy są zawierane lokalnie — portugalska dla domu w Portugalii, hiszpańska dla domu w Hiszpanii — ale prowadzi je ten sam doradca, według jednego standardu. Pozwala to m.in. ułożyć odpowiedzialność cywilną rodziny i ochronę kolekcji tak, żeby obejmowały oba kraje bez luk i bez podwójnej ochrony.</p>',
    },
    {
      q: 'Czy mogę zachować polskie ubezpieczenia po przeprowadzce do Hiszpanii?',
      a: '<p>Polskie polisy majątkowe i komunikacyjne są zwykle związane z nieruchomością lub rejestracją w Polsce. Dom w Hiszpanii wymaga polisy obejmującej ryzyko położone w Hiszpanii, a samochód po przerejestrowaniu — hiszpańskiego OC. Warto pisemnie potwierdzić u polskiego ubezpieczyciela, co dzieje się z ochroną po zmianie miejsca zamieszkania.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenia-portugalia-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Portugalii' },
    { url: '/pl/', label: 'Ubezpieczenia majątku w Portugalii i Hiszpanii' },
  ],
};

withSibling(ES_GUIDE_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Mają Państwo także dom w Portugalii?',
  body: 'Portugalski rynek dzieli ryzyka inaczej: ryzyko sejsmiczne jest opcją, polisa <em>condomínio</em> kończy się na częściach wspólnych, a „OC” oznacza trzy różne polisy. Wszystko w jednym przewodniku.',
  url: '/pl/ubezpieczenia-portugalia-przewodnik/',
  cta: 'Przewodnik po ubezpieczeniach w Portugalii',
});
