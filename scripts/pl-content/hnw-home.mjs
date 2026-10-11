/**
 * High-value home conditions (October 2026), Polish — four pages.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'pl-PL';
const base = (key, crumb) => ({
  slug: homeSlug(key, C), url: homeUrl(key, C), cluster: key,
  published: PUBLISHED_OCT, modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article', formBranch: 'PL · Dom', formCta: 'Poproś o pisemną ocenę',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const NOTE = sec('plain', 'uwaga', 'Ważna informacja', p('Informacja ogólna pośrednika ubezpieczeniowego, nie porada indywidualna. Ochrona zależy od akceptacji ryzyka przez ubezpieczyciela i warunków wystawionej polisy.'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', 'Dom wysokiej wartości: warunki'),
    title: 'Ubezpieczenie domu wysokiej wartości: warunki | Adler & Rochefort',
    description: 'Co zmienia ubezpieczenie domu dla zamożnych klientów w Portugalii i Hiszpanii: gwarantowana odbudowa, brak zasady proporcji, brak udziału własnego przy dużych szkodach.',
    keywords: 'ubezpieczenie willi Portugalia, ubezpieczenie domu luksusowego Hiszpania, brak zasady proporcji, gwarantowana odbudowa, zakwaterowanie zastępcze, ubezpieczenie private client',
    eyebrow: 'Private Clients · Dom',
    h1: 'Ubezpieczenie domu wysokiej wartości w Portugalii i Hiszpanii — warunki, klauzula po klauzuli',
    standfirst: 'Zwykła polisa domu jest pisana dla przeciętnego domu. Przy willi w Algarve czy w Marbelli pokazuje swoje granice dokładnie wtedy, gdy szkoda jest duża. Warunki Private Clients, w których pośredniczymy, są zbudowane odwrotnie.',
    pullquote: 'Zasadę proporcji eliminuje się przed szkodą, nie w dniu szkody.',
    formHeading: 'Poproś o pisemną ocenę polisy domu',
    formSubject: 'Dom wysokiej wartości — warunki',
    formIntro: 'Prześlij obecną polisę. Odpowiemy pisemnie, klauzula po klauzuli: co masz, czego brakuje i co to oznacza przy szkodzie.',
    formPlaceholder: 'Na przykład: willa w Algarve z domkiem gościnnym i basenem, polisa z banku, nieskatalogowane obrazy i zegarki.',
    sections: [
      sec('plain', 'suma', 'Suma ubezpieczenia: inspekcja i gwarantowana odbudowa', ul([
        '<strong>Bezpłatna inspekcja</strong> doradcy ubezpieczyciela: koszt odbudowy, sumy dla mienia ruchomego i przedmiotów wartościowych, zalecenia prewencyjne.',
        '<strong>Gwarantowana odbudowa:</strong> po przyjęciu zaleceń dom zostaje odbudowany po szkodzie całkowitej, nawet jeśli koszt przekroczy sumę.',
        '<strong>Brak zasady proporcji:</strong> szkoda częściowa jest płacona w całości, bez redukcji za niedoubezpieczenie.',
        '<strong>Rzeczywisty koszt odbudowy</strong> — ten sam projekt i jakość materiałów, honoraria, nowe przepisy, wywóz gruzu — z coroczną indeksacją.',
      ])),
      sec('tint', 'teren', 'Dom, budynki i teren', ul([
        '<strong>Inne budowle</strong> — domek gościnny, garaż, mury — dodatkowe 20 % sumy domu, bez osobnego limitu dla murów oporowych.',
        '<strong>Drzewa, krzewy i trawniki</strong> do 10 %; <strong>stabilizacja gruntu</strong> — kolejne 10 % szkody.',
        '<strong>Lokalizacja wycieków bez limitu</strong> — woda, gaz, olej opałowy — plus utracona woda lub olej.',
        '<strong>Nowoczesny dom:</strong> dopłata do systemu wykrywania wycieków, fotowoltaiki lub geotermii przy odbudowie i agregatu po burzy; zamki bez limitu i bez udziału własnego; przystosowanie domu przy trwałej niepełnosprawności.',
      ])),
      sec('plain', 'zakwaterowanie', 'Gdy w domu nie da się mieszkać', ul([
        '<strong>Równorzędne zakwaterowanie</strong>, także dla zwierząt i koni, przez cały potrzebny czas, bez udziału własnego i bez sztywnego limitu czasu dla domu.',
        '<strong>Utrata czynszu</strong> i <strong>ewakuacja</strong> nakazana przez władze z powodu szkody u sąsiada.',
      ])),
      sec('tint', 'mienie', 'Mienie ruchome w domu i poza nim', `${ul([
        '<strong>Ochrona od wszystkich ryzyk na całym świecie</strong> — bez osobnej polisy bagażowej.',
        '<strong>Do 25 % ponad sumę mienia</strong>; wartość odtworzeniowa bez potrąceń; rzeczy gości i personelu; nowe zakupy przez 90 dni; odwołanie przyjęć i namioty.',
      ])}
${p('Uwaga: niewyszczególnione mienie ma specjalne limity na gotówkę, biżuterię i zegarki, srebro, kolekcje i wino. To, co cenne, powinno być wpisane jako przedmiot wartościowy, według wartości uzgodnionej.')}`),
      sec('plain', 'szkoda', 'Likwidacja szkody', ul([
        '<strong>Brak udziału własnego przy dużych szkodach</strong> — powyżej 10 000 € podstawowy udział własny nie obowiązuje.',
        '<strong>Wybór:</strong> wypłata gotówkowa lub naprawa przez wybranych wykonawców, bez potrąceń.',
        '<strong>Naprawy pilne</strong> ponad sumę i likwidacja przez samego ubezpieczyciela.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Dom wysokiej wartości — pytania',
    faq: [
      { q: 'Czy obowiązuje zasada proporcji?', a: '<p>Nie w warunkach Private Clients, w których pośredniczymy: szkoda częściowa jest płacona w całości.</p>' },
      { q: 'Jak długo płacone jest zakwaterowanie zastępcze?', a: '<p>Dla domu — przez cały czas potrzebny do przywrócenia go do użytku, bez udziału własnego.</p>' },
    ],
    related: [rel('art-beyond', 'Sztuka i biżuteria ponad wartość uzgodnioną'), rel('family-protection', 'Ochrona rodziny w polisie domu'), rel('home-declare', 'Co zgłosić ubezpieczycielowi'), { url: '/pl/ubezpieczenie-domu-portugalia/', label: 'Ubezpieczenie domu w Portugalii' }],
  },
  {
    ...base('art-beyond', 'Sztuka i biżuteria'),
    title: 'Sztuka i biżuteria ponad wartość uzgodnioną | Adler & Rochefort',
    description: 'Wartość uzgodniona to dopiero początek: niedoszacowanie, wada tytułu prawnego, dzieła zamówione, wypożyczenia i nowe zakupy w polisie Private Clients.',
    keywords: 'ubezpieczenie dzieł sztuki Portugalia, ubezpieczenie sztuki Hiszpania, wartość uzgodniona sztuka, wada tytułu prawnego, wypożyczenie do muzeum ubezpieczenie, ubezpieczenie biżuterii',
    eyebrow: 'Private Clients · Sztuka i kolekcje',
    h1: 'Sztuka i biżuteria ponad wartość uzgodnioną — niedoszacowanie, proweniencja, zamówienia i wypożyczenia',
    standfirst: 'Ubezpieczenie ważnych przedmiotów według wartości uzgodnionej to pierwsza zasada. Warunki Private Clients idą dalej.',
    pullquote: 'Data wyceny jest częścią Twojej ochrony.',
    formHeading: 'Poproś o pisemną ocenę ochrony kolekcji',
    formSubject: 'Sztuka i biżuteria',
    formIntro: 'Prześlij listę, daty wycen i obecną polisę. Odpowiemy pisemnie, ile zostałoby wypłacone dziś.',
    formPlaceholder: 'Na przykład: obrazy polskich malarzy wycenione w 2019 r., zegarki bez wyceny, obraz wypożyczony na wystawę.',
    sections: [
      sec('plain', 'rynek', 'Gdy rynek poszedł w górę', ul([
        '<strong>Sztuka:</strong> jeśli dzieło jest warte więcej niż suma i zostało profesjonalnie wycenione w ciągu pięciu lat przed szkodą, polisa płaci wartość rynkową do dwukrotności sumy, maksymalnie 5 mln € więcej.',
        '<strong>Biżuteria, zegarki i inne:</strong> ta sama zasada z dwuletnim oknem wyceny, do łącznej sumy kategorii.',
      ])),
      sec('tint', 'czesciowa', 'Szkoda częściowa i utrata wartości', p('Płacona jest renowacja bez potrąceń oraz utrata wartości, która pozostaje. Przy parach i kompletach sztuki lub biżuterii można oddać ocalały element i otrzymać zwrot za cały komplet.')),
      sec('plain', 'tytul', 'Wada tytułu prawnego', p('Jeśli ktoś twierdzi, że dzieło kupione w okresie ubezpieczenia zostało skradzione lub nigdy legalnie sprzedane, polisa pokrywa koszty obrony, a jeśli roszczenie się powiedzie — utratę dzieła, do rocznego limitu i pod warunkiem rozsądnego sprawdzenia proweniencji.')),
      sec('tint', 'zamowienia', 'Zamówienia, wypożyczenia i nowe zakupy', ul([
        '<strong>Dzieła w trakcie powstawania</strong> uszkodzone przed ukończeniem lub niedokończone z powodu śmierci artysty: materiały i umówiona praca.',
        '<strong>Dzieła wypożyczone Tobie</strong> — pierwsze siedem dni; <strong>Twoje wypożyczenia</strong> do muzeów — jeśli zgłoszone wcześniej.',
        '<strong>Nowe zakupy</strong> automatycznie przez 90 dni, do jednej czwartej sumy kategorii; <strong>kradzież przez personel domowy</strong> objęta ochroną.',
      ])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Sztuka i biżuteria — pytania',
    faq: [
      { q: 'A jeśli obraz jest wart więcej niż suma ubezpieczenia?', a: '<p>Przy wycenie młodszej niż pięć lat polisa płaci wartość rynkową do dwukrotności sumy, maksymalnie 5 mln € więcej.</p>' },
    ],
    related: [rel('home-conditions', 'Dom wysokiej wartości: warunki')],
  },
  {
    ...base('family-protection', 'Ochrona rodziny'),
    title: 'Ochrona rodziny w ubezpieczeniu domu | Adler & Rochefort',
    description: 'Carjacking, napad w domu, stalking, uprowadzenie dziecka, cyberprzemoc i koszty porwania: ochrona rodziny w polisie domu Private Clients.',
    keywords: 'ochrona rodziny ubezpieczenie, ubezpieczenie carjacking, napad w domu ubezpieczenie, stalking ubezpieczenie, koszty porwania ubezpieczenie, cyberprzemoc ubezpieczenie',
    eyebrow: 'Private Clients · Rodzina',
    h1: 'Ochrona rodziny w ubezpieczeniu domu — carjacking, napad, stalking i koszty porwania',
    standfirst: 'Niektóre ryzyka zamożnej rodziny nie mają nic wspólnego z budynkiem. Najlepsze polisy domu i tak je obejmują.',
    pullquote: 'Czy ubezpieczona jest Twoja rodzina, czy tylko dom?',
    formHeading: 'Poproś o dyskretną, pisemną ocenę',
    formSubject: 'Ochrona rodziny',
    formIntro: 'Prześlij polisy domu i OC. Dyskretnie i pisemnie powiemy, czego brakuje.',
    formPlaceholder: 'Na przykład: czteroosobowa rodzina w Lizbonie, częste podróże służbowe, kierowca i pomoc domowa.',
    sections: [
      sec('plain', 'zakres', 'Co obejmuje ochrona rodziny', `${ul([
        '<strong>Carjacking</strong> — siłowe usunięcie lub przetrzymanie członka rodziny podczas kradzieży auta.',
        '<strong>Napad w domu</strong> — przemoc lub groźba ze strony intruza w domu, tymczasowej rezydencji, na łodzi lub w kamperze, gdy obecna jest rodzina lub goście.',
        '<strong>Rozbój</strong> poza domem; <strong>stalking</strong> przez osobę objętą już sądowym zakazem.',
        '<strong>Uprowadzenie dziecka</strong> poniżej 13 lat; <strong>porwanie</strong> na ponad cztery godziny w środku transportu publicznego; <strong>air rage i road rage</strong>.',
      ])}
${p('W zależności od zdarzenia: koszty leczenia, pomoc psychologiczna, rekonwalescencja, doradcy i ochrona, wzmocnienie zabezpieczeń domu, tymczasowa przeprowadzka i świadczenie z tytułu trwałego uszczerbku lub śmierci. Na całym świecie, poza krajami z oficjalnym ostrzeżeniem.')}`),
      sec('tint', 'porwanie', 'Porwanie: co pozwala prawo', p('Prawo portugalskie (art. 14 Decreto-Lei 72/2008) zabrania ubezpieczania samego ryzyka porwania. Można natomiast pokryć <strong>koszty</strong>: negocjatora, doradców ds. bezpieczeństwa i komunikacji, podróże rodziny, prawników, opiekę medyczną i psychologiczną, utracone dochody i nagrodę za informacje. Dla rodzin realnie narażonych — osobna <a href="/pl/ubezpieczenie-porwanie-okup/">polisa od porwania i okupu</a>.')),
      sec('plain', 'cyber', 'Cyberprzemoc i reputacja', p('Przy powtarzającym się nękaniu w sieci, które prowadzi do utraty pracy, kary szkolnej lub ponad tygodniowej nieobecności: doradca PR, informatyk śledczy, ekspert cyberbezpieczeństwa, zarządzanie reputacją, utracone wynagrodzenie i tymczasowa przeprowadzka.')),
      sec('tint', 'oc', 'Odpowiedzialność cywilna wokół', `${ul(['OC rodziny na całym świecie do 10 mln €, koszty obrony ponad sumę.', 'Golf, trampoliny i dmuchańce, wózki golfowe i quady na posesji, personel domowy przy winie pracodawcy, oszustwa kartowe i czekowe.'])}
${p('Wyłączenia: łodzie od 26 stóp lub powyżej 50 KM, płatne funkcje w zarządach (D&amp;O), działalność zawodowa i psy niebezpieczne.')}`),
      NOTE,
    ].join('\n'),
    faqTitle: 'Ochrona rodziny — pytania',
    faq: [
      { q: 'Czy polisa domu naprawdę obejmuje carjacking?', a: '<p>W warunkach Private Clients, w których pośredniczymy — tak: koszty leczenia, pomoc psychologiczna i świadczenie z tytułu trwałego uszczerbku.</p>' },
      { q: 'Czy można ubezpieczyć porwanie?', a: '<p>W Portugalii samego ryzyka — nie; kosztów, które po nim następują — tak.</p>' },
    ],
    related: [rel('home-conditions', 'Dom wysokiej wartości: warunki'), { url: '/pl/ubezpieczenie-porwanie-okup/', label: 'Porwanie i okup' }],
  },
  {
    ...base('home-declare', 'Co zgłosić'),
    title: 'Co zgłosić ubezpieczycielowi | Adler & Rochefort',
    description: 'Wynajem, remont, puste miesiące, wypożyczenia sztuki, zabezpieczenia: co trzeba zgłosić w polisie domu wysokiej wartości i co zrobić po szkodzie.',
    keywords: 'obowiązek zgłoszenia ubezpieczenie domu Portugalia, pusty dom ubezpieczenie, remont zgłoszenie ubezpieczyciel, wynajem domu wakacyjnego ubezpieczenie',
    eyebrow: 'Private Clients · Dom',
    h1: 'Co zgłosić ubezpieczycielowi — obowiązki za polisą domu wysokiej wartości',
    standfirst: 'Większość odrzuconych lub obniżonych odszkodowań w tym segmencie nie wynika z wyłączeń, lecz z czegoś, co się zmieniło i nie zostało zgłoszone. Praktyczna lista.',
    pullquote: 'Najlepsza polisa może zawieść przez to, czego nie zgłoszono.',
    formHeading: 'Zajmiemy się zgłoszeniami',
    formSubject: 'Zgłoszenia do ubezpieczyciela',
    formIntro: 'Powiedz nam, co się zmieni — remont, wynajem, długa nieobecność. Zgłosimy to pisemnie i potwierdzimy warunki.',
    formPlaceholder: 'Na przykład: wiosną remontujemy kuchnię i łazienki, a dom będzie zamknięty od stycznia do marca.',
    sections: [
      sec('plain', 'przed', 'Zgłosić z wyprzedzeniem', ul(['Zmiana sposobu zamieszkiwania — wynajem, także krótkoterminowy.', 'Zmiana użytkowania — działalność lub płatni goście.', 'Prace budowlane powyżej 250 000 €.', 'Wypożyczenie sztuki lub przedmiotów wartościowych galeriom, muzeom, targom.'])),
      sec('tint', 'od-razu', 'Zgłosić od razu', `${ul(['Pogorszenie stanu budynku, w tym oznaki osiadania lub osuwania gruntu.', 'Każda zmiana zabezpieczeń — wyłączony alarm, wypowiedziana umowa z centrum monitoringu, usunięty sejf.', 'Istotna zmiana zawodu, oskarżenie lub skazanie (poza drogowym) albo upadłość członka rodziny.'])}
${p('Zwiększenie ryzyka należy zgłosić w ciągu 14 dni.')}`),
      sec('plain', 'puste', 'Puste miesiące', ul(['<strong>Pusty dom:</strong> jeśli przez ponad 30 dni dom był w dużej mierze opróżniony, a ubezpieczyciel nie został powiadomiony, udział własny rośnie do 5 % sumy.', '<strong>Mróz:</strong> szkody od zamarzniętych rur są wyłączone po ponad 60 dniach bez mieszkańców, chyba że dom był ogrzewany lub instalacja opróżniona.'])),
      sec('tint', 'po-szkodzie', 'Po szkodzie', ul(['Zgłoś szybko — przy kradzieży lub zdarzeniu z zakresu ochrony rodziny także policji.', 'Chroń mienie, zachowaj faktury napraw pilnych; inne naprawy po akceptacji.', 'Zachowaj uszkodzone rzeczy, przygotuj inwentarz z fakturami i podpisane zestawienie strat w 60 dni od wezwania.', 'Rozpocznij naprawę szkody częściowej w ciągu 180 dni, inaczej wypłata obejmie koszt odbudowy minus amortyzację.', 'Nie uznawaj odpowiedzialności wobec osób trzecich bez pisemnej zgody.'])),
      NOTE,
    ].join('\n'),
    faqTitle: 'Zgłoszenia — pytania',
    faq: [
      { q: 'Czy muszę zgłosić wynajem domu?', a: '<p>Tak, z wyprzedzeniem — także krótkoterminowy. Ubezpieczyciel może zmienić warunki lub składkę.</p>' },
      { q: 'Co, jeśli dom stoi pusty kilka miesięcy?', a: '<p>Po ponad 30 dniach bez zgłoszenia udział własny rośnie do 5 % sumy; szkody mrozowe są wyłączone po 60 dniach bez ogrzewania lub opróżnienia instalacji.</p>' },
    ],
    related: [rel('home-conditions', 'Dom wysokiej wartości: warunki'), { url: '/pl/ubezpieczenie-wynajem-willi/', label: 'Wynajem luksusowej willi' }],
  },
];
