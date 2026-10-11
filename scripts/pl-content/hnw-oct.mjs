/**
 * October 2026 HNW pages, Polish.
 *   IPMI_PAGE          /pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/              (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/         (cluster: classic-cars)
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

const cta = (text, label) => `${p(text)}
    <p><a href="#oferta" class="btn-cta">${label}</a></p>
    <p class="legal-note">Ta strona ma charakter informacyjny. Ochrona zależy od oceny ryzyka dokonanej przez ubezpieczyciela oraz od warunków polisy faktycznie wystawionej.</p>`;

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne',
  url: '/pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/',
  cluster: 'ipmi',
  title: 'Allianz Care czy Cigna Global? Porównanie | Adler & Rochefort',
  description:
    'Allianz Care czy Cigna Global? Jak wypadają dwa międzynarodowe ubezpieczenia zdrowotne dla rodzin w Portugalii i Hiszpanii: poziomy, USA, moduły, ocena ryzyka.',
  keywords:
    'Allianz Care Cigna Global porównanie, międzynarodowe ubezpieczenie zdrowotne Portugalia, międzynarodowe ubezpieczenie zdrowotne Hiszpania, ubezpieczenie zdrowotne expat, Cigna Global Portugalia, Allianz Care Hiszpania, ubezpieczenie zdrowotne z USA',
  eyebrow: 'Zdrowie · Portugalia i Hiszpania',
  h1: 'Allianz Care czy Cigna Global — międzynarodowe ubezpieczenie zdrowotne dla rodzin w Portugalii i Hiszpanii',
  standfirst:
    'Wielu rodzinom wystarcza polisa portugalska lub hiszpańska. Kto jednak żyje między Lizboną, Warszawą i Nowym Jorkiem albo chce leczyć się w najlepszym szpitalu dla danej choroby, potrzebuje ubezpieczenia międzynarodowego. Porównujemy dwa plany, o które pytają nas najczęściej.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care czy Cigna Global' }],
  pullquote: 'Pytanie nie brzmi, która polisa jest lepsza. Pytanie brzmi, gdzie chcą się Państwo leczyć.',
  schemaType: 'Article',
  formHeading: 'Poproś o pisemne porównanie',
  formBranch: 'PL · Zdrowie',
  formSubject: 'Allianz Care czy Cigna Global',
  formCta: 'Poproś o porównanie',
  formIntro:
    'Proszę napisać, kto ma być ubezpieczony, gdzie mieszka rodzina i gdzie chcieliby się Państwo leczyć — także w Polsce czy w Stanach Zjednoczonych. Odpowiemy pisemnie, z oboma planami dopasowanymi do Państwa sytuacji.',
  formPlaceholder:
    'Na przykład: małżeństwo 45 i 43 lata, dwoje dzieci, mieszkamy w Cascais, często bywamy w Polsce, chcemy mieć ochronę także w USA.',
  sections: [
    sec('plain', 'lokalna-czy-miedzynarodowa', 'Polisa lokalna czy ubezpieczenie międzynarodowe?', `${p('Prywatne ubezpieczenia zdrowotne w Portugalii i Hiszpanii opierają się na krajowej sieci szpitali i klinik. Sprawdzają się u osób leczonych tam, gdzie mieszkają, ale mają ograniczenia ważne dla rodzin żyjących międzynarodowo:')}
${ul([
      '<strong>Roczne limity</strong> na poszczególne świadczenia — wystarczające na co dzień, czasem zbyt niskie przy długim leczeniu onkologicznym.',
      '<strong>Ochrona za granicą</strong> zwykle tylko w nagłych przypadkach w podróży; planowe leczenie w innym kraju jest wyłączone.',
      '<strong>Warunki przystąpienia:</strong> w Portugalii ubezpieczyciele wymagają portugalskiego numeru NIF i adresu od każdej ubezpieczonej osoby, a wiele planów ma maksymalny wiek przystąpienia.',
    ])}
${p('Ubezpieczenie międzynarodowe (IPMI) działa odwrotnie: limity liczone w milionach, planowe leczenie w wybranym obszarze — Europa (z Polską), świat bez USA lub cały świat — i polisa, która towarzyszy rodzinie przy kolejnej przeprowadzce. Ewakuacja i transport medyczny są częścią konstrukcji.')}`),
    sec('tint', 'allianz-care', 'Allianz Care: nowa linia planów', `${p('Allianz Care to marka międzynarodowych ubezpieczeń zdrowotnych Allianz Partners. W listopadzie 2025 roku wprowadziła nową linię dla osób i rodzin mieszkających za granicą od co najmniej dwunastu miesięcy, oferowaną głównie w UE i Wielkiej Brytanii.')}
${ul([
      '<strong>Trzy plany podstawowe: Base, Enhanced i Signature</strong> — każdy z hospitalizacją, pokojem jednoosobowym i transportem medycznym do kraju.',
      '<strong>Macierzyństwo</strong> w planach Enhanced i Signature, po dwunastu miesiącach karencji.',
      '<strong>Leczenie ambulatoryjne i stomatologia</strong> jako opcje dodatkowe.',
      '<strong>Badania przesiewowe, check-upy i hormonalna terapia zastępcza</strong> w całej linii; ambulatoryjna psychiatria i psychoterapia bez karencji.',
      '<strong>Obszar ochrony „tylko Europa”</strong> obok opcji światowych.',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global: plan modułowy', `${ul([
      '<strong>Trzy poziomy ochrony podstawowej: Silver, Gold i Platinum</strong> — hospitalizacja, leczenie specjalistyczne w szpitalu, onkologia i psychiatria stacjonarna. Platinum ma najwyższy roczny limit, bez stałego pułapu.',
      '<strong>Cztery moduły dodatkowe:</strong> leczenie ambulatoryjne, ewakuacja medyczna, zdrowie i profilaktyka oraz wzrok i stomatologia.',
      '<strong>Obszar ochrony:</strong> świat bez USA lub świat z USA.',
      '<strong>Udział własny i współpłacenie</strong> do wyboru, z rocznym limitem kosztów po stronie ubezpieczonego — główna dźwignia składki.',
      '<strong>Macierzyństwo</strong> w Gold i Platinum, po dwunastu miesiącach ubezpieczenia.',
    ])}`),
    sec('tint', 'porownanie', 'Porównanie', `${table('Allianz Care i Cigna Global — porównanie', ['', 'Allianz Care', 'Cigna Global'], [
      ['Poziomy podstawowe', 'Base, Enhanced, Signature', 'Silver, Gold, Platinum'],
      ['Hospitalizacja, pokój jednoosobowy', 'We wszystkich planach', 'W ochronie podstawowej'],
      ['Transport / ewakuacja', 'Transport do kraju we wszystkich planach', 'Dodatkowy moduł ewakuacji'],
      ['Ambulatoryjnie', 'Opcja dodatkowa', 'Moduł dodatkowy'],
      ['Stomatologia', 'Opcja dodatkowa', 'Moduł dodatkowy (ze wzrokiem)'],
      ['Macierzyństwo', 'Enhanced, Signature — po 12 mies.', 'Gold, Platinum — po 12 mies.'],
      ['Obszar', 'Także tylko Europa, plus opcje światowe', 'Świat bez USA lub z USA'],
      ['Dźwignie składki', 'Poziom, obszar, opcje', 'Udział własny, współpłacenie, obszar, moduły'],
    ])}
${p('Limity, karencje i wyłączenia zależą od poziomu i są podane w tabeli świadczeń każdego ubezpieczyciela. Dołączamy je do każdego porównania.')}`),
    sec('plain', 'dla-kogo', 'Który plan dla której rodziny', ul([
      '<strong>Życie w Europie</strong> — dom w Portugalii lub Hiszpanii, praca i szkoła w Europie, częste wizyty w Polsce: często Allianz Care z obszarem Europa lub świat bez USA, z transportem do kraju w cenie.',
      '<strong>Związek z USA</strong> — dom na Florydzie, dzieci na studiach w Ameryce: potrzebna ochrona światowa z USA, i tu składki obu planów różnią się najbardziej. Warto wycenić oba.',
      '<strong>Tylko duże ryzyko:</strong> Cigna Global z wysokim udziałem własnym, koszty bieżące z własnej kieszeni.',
      '<strong>Historia medyczna:</strong> obaj ubezpieczyciele oceniają ankietę medyczną i mogą wyłączyć chorobę lub naliczyć zwyżkę — odpowiedź może się różnić.',
    ])),
    sec('tint', 'wizy', 'Wizy i pobyt', p(
      'Obywatele Polski jako obywatele UE nie potrzebują wizy w Portugalii ani w Hiszpanii, ale rodziny z członkami spoza UE mogą jej potrzebować. W Portugalii ubezpieczenie międzynarodowe często służy jako dowód ochrony zdrowotnej przy wizach pobytowych D7 i D8. Dla hiszpańskiej wizy pobytowej bez działalności zarobkowej konsulaty zwykle wymagają ubezpieczyciela działającego w Hiszpanii, pełnej ochrony oraz braku współpłacenia i karencji — plan trzeba skonfigurować pod wizę.'
    )),
    sec('plain', 'kontakt', 'Porozmawiajmy o Państwa rodzinie', cta('Adler &amp; Rochefort pośredniczy w ubezpieczeniach Allianz Care i Cigna Global. Przygotujemy oba plany dla Państwa rodziny i opiszemy różnice na piśmie, z tabelami świadczeń.', 'Poproś o porównanie')),
  ].join('\n'),
  faqTitle: 'Allianz Care i Cigna Global — pytania',
  faq: [
    { q: 'Który plan jest lepszy: Allianz Care czy Cigna Global?', a: '<p>Żaden nie jest lepszy w oderwaniu od sytuacji. Allianz Care ma hospitalizację i transport do kraju w każdym planie oraz obszar tylko Europa; Cigna Global jest modułowa, z elastycznym udziałem własnym i wyborem ochrony z USA lub bez. Decyduje miejsce zamieszkania, podróże, oczekiwane miejsce leczenia i warunki, jakie każdy ubezpieczyciel zaproponuje dla historii medycznej.</p>' },
    { q: 'Czy potrzebuję ochrony w USA?', a: '<p>Tylko jeśli chcą się Państwo tam leczyć poza nagłym przypadkiem w podróży. Obszar z USA jest w obu planach najdroższy.</p>' },
    { q: 'Czy jestem ubezpieczony także w Polsce?', a: '<p>Tak, przy obszarze europejskim lub światowym planowe leczenie w Polsce mieści się w ochronie, na warunkach planu.</p>' },
    { q: 'Czy macierzyństwo jest objęte od początku?', a: '<p>Nie. Tylko na wyższych poziomach — Enhanced i Signature w Allianz Care, Gold i Platinum w Cigna Global — i po dwunastu miesiącach ubezpieczenia.</p>' },
  ],
  related: [
    { url: '/pl/ubezpieczenie-zdrowotne-portugalia/', label: 'Ubezpieczenie zdrowotne w Portugalii' },
    { url: '/pl/ubezpieczenie-zdrowotne-hiszpania/', label: 'Ubezpieczenie zdrowotne w Hiszpanii' },
    { url: '/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/', label: 'Samochody klasyczne i luksusowe' },
    { url: '/pl/przeprowadzka-do-portugalii-ubezpieczenia/', label: 'Przeprowadzka do Portugalii' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania',
  url: '/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/',
  cluster: 'classic-cars',
  title: 'Samochody klasyczne i luksusowe w Portugalii i Hiszpanii | Adler & Rochefort',
  description:
    'Ubezpieczenie samochodu klasycznego lub luksusowego w Portugalii i Hiszpanii: pojazd zabytkowy, wartość uzgodniona, kolekcje, tor i zagraniczne tablice.',
  keywords:
    'ubezpieczenie samochodu zabytkowego Portugalia, ubezpieczenie klasyka Hiszpania, wartość uzgodniona samochód, ubezpieczenie kolekcji samochodów, ubezpieczenie supersamochodu Marbella, polskie tablice Portugalia',
  eyebrow: 'Private Clients · Samochody',
  h1: 'Samochody klasyczne i luksusowe w Portugalii i Hiszpanii — status zabytkowy, wartość uzgodniona i kolekcje',
  standfirst:
    'Klimat oszczędza karoserię, górskie drogi wyglądają jak zaprojektowane dla sportowego auta z lat sześćdziesiątych, a na Costa del Sol jeździ więcej supersamochodów niż niemal gdziekolwiek w Europie. Zwykła polisa komunikacyjna nie powstała dla żadnego z nich.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Samochody klasyczne i luksusowe' }],
  pullquote: 'Po szkodzie całkowitej zwykła polisa płaci tyle, ile wart jest stary samochód. Polisa klasyka płaci tyle, ile wart jest Państwa samochód.',
  schemaType: 'Article',
  formHeading: 'Poproś o pisemną ocenę ubezpieczenia Twoich samochodów',
  formBranch: 'PL · Samochód',
  formSubject: 'Samochody klasyczne i luksusowe — pisemna ocena',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Proszę przesłać listę samochodów — markę, model, rok, miejsce garażowania i sposób użytkowania — oraz posiadane wyceny. Odpowiemy pisemnie, ile polisa zapłaciłaby dziś po szkodzie całkowitej, a ile powinna.',
  formPlaceholder:
    'Na przykład: Mercedes 190 SL z 1958 roku na polskich tablicach, Porsche 911 z 1995 roku, zamknięty garaż w Algarve, dwa zloty klubowe w roku.',
  sections: [
    sec('plain', 'portugalia', 'Portugalia: pojazdy o znaczeniu historycznym', p(
      'W Portugalii samochód mający co najmniej trzydzieści lat, niewytwarzany już, w dobrym stanie i bez istotnych zmian względem oryginału może uzyskać certyfikat <em>veículo de interesse histórico</em> od uznanych podmiotów — m.in. ACP Clássicos, Clube Português de Automóveis Antigos i Museu do Caramulo. Certyfikowane pojazdy starsze niż trzydzieści lat są od 2018 roku zwolnione z okresowego przeglądu, a pod pewnymi warunkami mogą być zwolnione z podatku drogowego (IUC) — to trzeba potwierdzić indywidualnie. Dla ubezpieczyciela certyfikat jest przede wszystkim dowodem oryginalności i stanu.'
    )),
    sec('tint', 'hiszpania', 'Hiszpania: nowe przepisy o pojazdach historycznych', ul([
      'Od 1 października 2024 roku obowiązuje nowe <em>Reglamento de Vehículos Históricos</em>.',
      'Historycznym może być pojazd wyprodukowany lub zarejestrowany po raz pierwszy co najmniej trzydzieści lat temu, niewytwarzany już i zachowany w stanie oryginalnym.',
      'Wiele aut zachowuje zwykłe tablice i nosi na szybie żółtą naklejkę z literą „H”; inne są rejestrowane jako historyczne w Jefatura de Tráfico po opinii technicznej.',
      'Przegląd ITV rzadziej: co dwa lata dla aut w wieku 30–40 lat, co trzy dla 40–45, co cztery powyżej 45; powyżej 60 lat przegląd nie jest wymagany.',
    ])),
    sec('plain', 'wartosc', 'Wartość uzgodniona, nie rynkowa', p(
      'Najważniejszą klauzulą polisy klasyka jest podstawa odszkodowania. Zwykła polisa po szkodzie całkowitej wypłaca <strong>wartość rynkową</strong>, ustalaną przez ubezpieczyciela po szkodzie — dla klasyka prawie zawsze za niską. <strong>Wartość uzgodniona</strong> ustalana jest na początku, na podstawie aktualnej wyceny, zdjęć i dokumentów, i to ona jest wypłacana. Wartość warto weryfikować co kilka lat i po każdej renowacji. W nowoczesnym supersamochodzie pytania dotyczą wartości nowego auta w pierwszych latach, wyposażenia dodatkowego, oryginalnych części i autoryzowanego serwisu.'
    )),
    sec('tint', 'kolekcja', 'Kolekcja, nie lista samochodów', p(
      'Polisa kolekcji traktuje garaż jako całość: jedna umowa z wartościami uzgodnionymi, auta odstawione lub w renowacji chronione od pożaru, kradzieży i uszkodzeń bez płacenia za ruch drogowy, wskazani kierowcy, transport na lawecie lub przez wyspecjalizowanego przewoźnika oraz sam garaż — ochrona przeciwpożarowa i zabezpieczenia — jako część ryzyka. Niektóre produkty dla aut luksusowych są oferowane wyłącznie razem z ubezpieczeniem domu.'
    )),
    sec('plain', 'uzytkowanie', 'Jak samochód jest użytkowany', ul([
      '<strong>Przebieg i cel:</strong> polisy klasyków zakładają ograniczony roczny przebieg i użytek rekreacyjny.',
      '<strong>Rajdy regularności, konkursy elegancji i zloty</strong> na drogach publicznych są zwykle ubezpieczalne; jazdy na czas i tor — nie.',
      '<strong>Track days</strong> — Autódromo do Algarve, Estoril, Ascari — są wyłączone z niemal każdej polisy drogowej.',
      '<strong>Kradzież bezkluczykowa:</strong> ubezpieczyciele pytają o garaż, lokalizator i przechowywanie kluczyków.',
    ])),
    sec('tint', 'tablice', 'Polskie tablice i przeprowadzka', p(
      'Wiele klasyków przyjeżdża z właścicielem na polskich tablicach. W Portugalii i w Hiszpanii nowy rezydent musi przerejestrować samochód w określonym terminie — w Portugalii z procedurą importu i podatkiem ISV, w Hiszpanii w DGT. Do tego czasu trzeba ustalić, na co pozwala polska polisa, jak długo i co dzieje się po szkodzie. Przy klasyku przeprowadzka to dobry moment, by jednocześnie załatwić rejestrację i status zabytkowy.'
    )),
    sec('plain', 'kontakt', 'Pisemna ocena', cta('Proszę przesłać listę samochodów, wyceny i obecną polisę. Odpowiemy pisemnie, co jest objęte ochroną, czego brakuje i jakie są opcje.', 'Poproś o pisemną ocenę')),
  ].join('\n'),
  faqTitle: 'Samochody klasyczne i luksusowe — pytania',
  faq: [
    { q: 'Czy samochód zabytkowy potrzebuje specjalnego ubezpieczenia?', a: '<p>Obowiązkowe OC dotyczy każdego pojazdu w ruchu. Różnica leży w reszcie polisy: polisa klasyka ubezpiecza według wartości uzgodnionej, zakłada ograniczony użytek rekreacyjny i uwzględnia imprezy klubowe.</p>' },
    { q: 'Czym różni się wartość uzgodniona od rynkowej?', a: '<p>Wartość uzgodnioną ustala się na początku umowy na podstawie wyceny i wypłaca po szkodzie całkowitej. Wartość rynkową ustala ubezpieczyciel po szkodzie — dla klasyka zwykle znacznie niższą.</p>' },
    { q: 'Czy track days są objęte ochroną?', a: '<p>Prawie nigdy w polisie drogowej. Potrzebne jest osobne ubezpieczenie na dany dzień na torze.</p>' },
  ],
  related: [
    { url: '/pl/ubezpieczenie-samochodu-portugalia/', label: 'Ubezpieczenie samochodu w Portugalii' },
    { url: '/pl/ubezpieczenie-samochodu-hiszpania/', label: 'Ubezpieczenie samochodu w Hiszpanii' },
    { url: '/pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/', label: 'Allianz Care czy Cigna Global' },
    { url: '/pl/golf-rezydencje-portugalia-hiszpania/', label: 'Golf w Portugalii i Hiszpanii' },
  ],
};
