/**
 * /pl/zakup-nieruchomosci-w-hiszpanii-ubezpieczenie/ (es-property)
 *
 * Search intent: "zakup nieruchomości w Hiszpanii" with the insurance
 * question — a Polish buyer between the contrato de arras and the escritura,
 * typically on the Costa Blanca or Costa del Sol, often with a Spanish
 * mortgage offer that bundles the bank's own home policy.
 *
 * Distinct from the Spain home page: that one explains the cover, this one
 * the transaction — arras, notary, Registro de la Propiedad, what the lender
 * may and may not require, rebuild cost vs purchase price, cover from
 * completion, the comunidad's policy, and a general note on non-resident tax
 * obligations. Legal and tax points kept general.
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_PROPERTY_PAGE = {
  slug: 'zakup-nieruchomosci-w-hiszpanii-ubezpieczenie',
  url: '/pl/zakup-nieruchomosci-w-hiszpanii-ubezpieczenie/',
  cluster: 'es-property',
  title: 'Ubezpieczenie przy zakupie domu w Hiszpanii | Adler & Rochefort',
  description:
    'Zakup w Hiszpanii: umowa arras, notariusz i rejestr, czego może wymagać bank, koszt odbudowy zamiast ceny i ochrona od dnia podpisania aktu.',
  keywords:
    'zakup nieruchomości Hiszpania, kupno domu Hiszpania ubezpieczenie, contrato de arras, escritura Hiszpania, kredyt hipoteczny Hiszpania ubezpieczenie, Registro de la Propiedad, NIE Hiszpania',
  eyebrow: 'Hiszpania · Zakup nieruchomości',
  h1: 'Zakup nieruchomości w Hiszpanii: kiedy i jak ubezpieczyć dom, który Państwo kupują',
  standfirst:
    'Kupno domu w Hiszpanii ma swój rytm: rezerwacja, umowa <em>arras</em>, akt u notariusza, wpis do rejestru. Ubezpieczenie ma w nim jeden stały punkt — dzień podpisania aktu — i kilka decyzji, które lepiej podjąć wcześniej, zwłaszcza gdy bank proponuje własną polisę.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Hiszpania', url: '/pl/ubezpieczenia-hiszpania-przewodnik/' },
    { name: 'Zakup nieruchomości' },
  ],
  pullquote:
    'Klucze dostają Państwo u notariusza. Ryzyko — w tej samej chwili.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o ubezpieczenie domu kupowanego w Hiszpanii',
  formBranch: 'PL · Dom',
  formSubject: 'Zakup nieruchomości w Hiszpanii',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Jeśli znana jest już data podpisania aktu, proszę ją podać — ustawimy początek ochrony dokładnie na ten dzień.',
  formPlaceholder:
    'Na przykład: willa w Jávea, 280 m², basen, akt notarialny 20 listopada, bank proponuje własne ubezpieczenie domu.',
  sections: `
<section class="section plain" aria-labelledby="etapy-es">
  <div class="container narrow article-body">
    <h2 id="etapy-es">Etapy transakcji a ubezpieczenie</h2>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Etapy zakupu nieruchomości w Hiszpanii a ubezpieczenie</caption>
        <thead>
          <tr><th scope="col">Etap</th><th scope="col">Co to jest</th><th scope="col">Ubezpieczenie</th></tr>
        </thead>
        <tbody>
          <tr><td>NIE i konto bankowe</td><td>Numer identyfikacyjny cudzoziemca, potrzebny do transakcji</td><td>Nic jeszcze nie trzeba</td></tr>
          <tr><td>Rezerwacja</td><td>Niewielki zadatek, zdjęcie oferty z rynku</td><td>Nic jeszcze nie trzeba</td></tr>
          <tr><td><em>Contrato de arras</em></td><td>Umowa przedwstępna z zadatkiem, często ok. 10% ceny</td><td>Czas na zebranie ofert i wymogów banku</td></tr>
          <tr><td>Decyzja kredytowa</td><td>Bank określa wymogi dotyczące polisy</td><td>Znane wymagane sumy i zakres</td></tr>
          <tr><td><em>Escritura</em> u notariusza</td><td>Akt przeniesienia własności, wydanie kluczy</td><td><strong>Polisa musi obowiązywać od tego dnia</strong></td></tr>
          <tr><td>Wpis do <em>Registro de la Propiedad</em></td><td>Rejestracja własności i ewentualnej hipoteki</td><td>Bez zmian — ochrona już trwa</td></tr>
        </tbody>
      </table>
    </div>
    <p>W dniu podpisania aktu ryzyko przechodzi na nabywcę. Pożar czy zalanie tej samej nocy to już Państwa szkoda — dlatego datę początku ochrony ustawiamy na dzień <em>escritura</em>, a jeśli akt zostanie przesunięty, przesuwamy ją razem z nim.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="bank-es">
  <div class="container narrow article-body">
    <h2 id="bank-es">Kredyt hipoteczny: czego bank może wymagać</h2>
    <p>Przy kredycie hipotecznym hiszpański bank może wymagać ubezpieczenia nieruchomości od ognia i innych szkód, z bankiem wskazanym jako uprawniony do odszkodowania. <strong>Nie może jednak narzucić polisy, którą sam sprzedaje</strong> — przepisy o kredycie hipotecznym zobowiązują go do przyjęcia polisy z innego źródła, jeśli zapewnia równoważne warunki.</p>
    <div class="callout">
      <span class="callout-label">Oprocentowanie a produkty banku</span>
      Banki często obniżają marżę w zamian za zakup swoich produktów — ubezpieczenia domu, na życie, konta. Porównanie samych składek bywa wtedy mylące. Liczymy razem z Państwem różnicę w oprocentowaniu przez cały okres kredytu wobec różnicy w składce i zakresie — i mówimy wprost, jeśli w danym przypadku oferta banku wypada korzystniej.
    </div>
    <p>Warto też sprawdzić, na jaką sumę bank proponuje polisę. Często jest to kwota kredytu albo wartość z wyceny (<em>tasación</em>) — żadna z nich nie jest kosztem odbudowy.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="trzy-liczby">
  <div class="container narrow article-body">
    <h2 id="trzy-liczby">Cena, wycena, koszt odbudowy</h2>
    <ul>
      <li><strong>Cena zakupu</strong> — zawiera działkę, lokalizację, widok na morze. Pożar nie niszczy żadnego z tych elementów.</li>
      <li><strong>Wycena bankowa i wartość katastralna</strong> — służą kredytowi i podatkom, nie odbudowie.</li>
      <li><strong>Koszt odbudowy</strong> — jedyna właściwa podstawa sumy <em>continente</em>: postawienie tego samego domu od nowa, przy dzisiejszych stawkach i przepisach. Przy domach o wysokiej wartości ubezpieczyciel potwierdza go zwykle podczas bezpłatnych oględzin.</li>
    </ul>
    <p>Zbyt niska suma oznacza <em>regla proporcional</em> — odszkodowanie obniżone proporcjonalnie, także przy szkodzie częściowej, i także przy świadczeniu z Consorcio. Więcej na stronie <a href="/pl/ubezpieczenie-domu-hiszpania/">o ubezpieczeniu domu w Hiszpanii</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="przed-aktem">
  <div class="container narrow article-body">
    <h2 id="przed-aktem">Przed podpisaniem aktu</h2>
    <ul>
      <li><strong>Polisa wspólnoty.</strong> W urbanizacji lub budynku warto poprosić administratora o kopię polisy <em>comunidad de propietarios</em> i sprawdzić jej sumę oraz ważność. Obejmuje budynek i części wspólne, nie Państwa wnętrze.</li>
      <li><strong>Stan techniczny.</strong> Ubezpieczenie nie obejmuje wad istniejących w dniu zakupu. Przegląd techniczny (np. dachu, tarasów, instalacji) to decyzja przed <em>arras</em>, nie po akcie.</li>
      <li><strong>Legalność zabudowy.</strong> Rozbudowy bez pozwolenia i niezgodność z rejestrem mogą wpłynąć na wypłatę przy szkodzie. Ich sprawdzenie należy do prawnika prowadzącego zakup.</li>
      <li><strong>Plan wynajmu.</strong> Jeśli dom ma być wynajmowany turystycznie, licencja i jej regionalne zasady to temat przed zakupem — a polisa musi uwzględniać wynajem od pierwszego dnia.</li>
    </ul>
    <p class="legal-note">Nie prowadzimy obsługi prawnej ani podatkowej transakcji. Właściciele niebędący rezydentami podatkowymi Hiszpanii mają tam odrębne obowiązki podatkowe, a w niektórych sytuacjach muszą wyznaczyć przedstawiciela — to temat dla doradcy podatkowego lub prawnika.</p>
  </div>
</section>`,
  faqTitle: 'Zakup nieruchomości w Hiszpanii — pytania o ubezpieczenie',
  faq: [
    {
      q: 'Od kiedy powinna obowiązywać polisa?',
      a: '<p>Od dnia podpisania aktu notarialnego (<em>escritura</em>). Z tą chwilą ryzyko przechodzi na nabywcę. Ustawiamy początek ochrony dokładnie na ten dzień i przesuwamy go, jeśli przesunie się akt.</p>',
    },
    {
      q: 'Czy muszę kupić ubezpieczenie domu w banku, który udziela kredytu?',
      a: '<p>Nie. Bank może wymagać ubezpieczenia nieruchomości i wskazania go jako uprawnionego, ale musi przyjąć polisę z innego źródła o równoważnych warunkach. Jeśli marża kredytu zależy od zakupu produktów banku, liczymy rachunek całościowo.</p>',
    },
    {
      q: 'Jaką sumę ubezpieczenia wybrać?',
      a: '<p>Koszt odbudowy budynku, a nie cenę zakupu ani wycenę bankową. Do tego osobno sumę ruchomości i — przy dziełach sztuki czy biżuterii — wartości uzgodnione na podstawie wycen.</p>',
    },
    {
      q: 'Kupuję apartament w urbanizacji. Czy wystarczy polisa wspólnoty?',
      a: '<p>Zwykle nie. Polisa <em>comunidad de propietarios</em> obejmuje konstrukcję i części wspólne. Wykończenie lokalu, ruchomości i Państwa odpowiedzialność wobec sąsiadów wymagają własnej polisy.</p>',
    },
    {
      q: 'Czy mogę przejąć polisę sprzedającego?',
      a: '<p>W praktyce rzadko ma to sens. Polisa odpowiada sytuacji poprzedniego właściciela — jego sumom, sposobowi użytkowania i bankowi. Zawieramy nową umowę od dnia aktu, a sprzedający rozwiązuje swoją.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenie-domu-hiszpania/', label: 'Ubezpieczenie domu w Hiszpanii' },
    { url: '/pl/ubezpieczenia-hiszpania-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Hiszpanii' },
  ],
};

withSibling(ES_PROPERTY_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Kupują Państwo także w Portugalii?',
  body: 'W Portugalii transakcja przebiega przez CPCV i <em>escritura</em>, a bank może wymagać włączenia ryzyka sejsmicznego. Opisujemy to na osobnej stronie.',
  url: '/pl/zakup-nieruchomosci-w-portugalii-ubezpieczenie/',
  cta: 'Zakup nieruchomości w Portugalii: ubezpieczenie',
});
