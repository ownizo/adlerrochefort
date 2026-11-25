# -*- coding: utf-8 -*-
"""PL travel insurance landings — 25 Nov 2026 (residents in Poland).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"pl": dict(home_crumb="Ubezpieczenie podróżne", others="Porównaj ubezpieczenie podróżne według rodzaju wyjazdu",
                 guides="Poradniki ubezpieczenia podróżnego", tool_h="Porównaj polisy na ten wyjazd",
                 tool_p="Ceny na żywo od kilku ubezpieczycieli, najpierw według kosztów leczenia. Dostosuj pola do swojej podróży.",
                 faq_h="Najczęstsze pytania", rel_h="Zobacz też", main_link="Wszystkie podróże: porównanie ubezpieczeń premium",
                 who_h="Kto za co odpowiada", cta="Porównaj polisy premium")}
P = {"pl": {}}
L = P["pl"]
IPMI = "/pl/miedzynarodowe-ubezpieczenie-zdrowotne/"

L["usa"] = dict(
    slug="usa", preset=dict(dest="US", intent="forTourism"),
    title="Ubezpieczenie Podróżne do USA — Wysokie Sumy KL | Adler & Rochefort",
    desc="Porównaj ubezpieczenia podróżne do USA: koszty leczenia, transport medyczny i rezygnacja. Polisy premium kilku ubezpieczycieli, posortowane według ochrony.",
    crumb="USA", eyebrow="Ubezpieczenie podróżne do USA",
    h1="Ubezpieczenie do USA: najpierw porównaj sumę kosztów leczenia",
    lead="Stany Zjednoczone mają najdroższą opiekę medyczną na świecie. Porównaj polisy kilku ubezpieczycieli, posortowane według kosztów leczenia, z ustawionym celem podróży.",
    sections=[
        ("Dlaczego USA wymaga innej polisy", "<p>Szpitale wystawiają rachunki według cen prywatnych, a hospitalizacja z operacją może kosztować setki tysięcy dolarów. Wiele polis „świat” wyłącza USA i Kanadę, jeśli nie wybierzesz tej strefy. EKUZ w USA nie działa.</p>"),
        ("Co porównać", "<ul><li><strong>Suma kosztów leczenia (KL)</strong>: wysoka lub bez limitu.</li><li><strong>Bezgotówkowa płatność</strong> przez centrum assistance.</li><li><strong>Transport medyczny</strong> do kraju po kosztach rzeczywistych.</li><li><strong>OC w życiu prywatnym</strong>.</li><li><strong>Rezygnacja z podróży</strong>.</li></ul>"),
        ("ESTA to nie ubezpieczenie", "<p>Do ruchu bezwizowego potrzebujesz ESTA, ale polisy nikt nie wymaga — dlatego tak wielu podróżnych jest niedoubezpieczonych.</p>"),
    ],
    faq=[
        ("Czy ubezpieczenie do USA jest obowiązkowe?", "Nie. Bez niego płacisz pełny koszt leczenia."),
        ("Jaka suma KL do USA?", "Jak najwyższa, z płatnością bezgotówkową."),
        ("Czy EKUZ działa w USA?", "Nie."),
    ],
)

L["annual"] = dict(
    slug="roczne-wielokrotne", preset=dict(intent="annual"),
    title="Roczne Ubezpieczenie Podróżne — Porównaj Polisy Premium | Adler & Rochefort",
    desc="Porównaj roczne ubezpieczenia podróżne na wiele wyjazdów: koszty leczenia, transport i rezygnacja. Jedna polisa premium na wszystkie podróże w roku.",
    crumb="Roczne", eyebrow="Roczne ubezpieczenie podróżne",
    h1="Roczne ubezpieczenie podróżne: jedna polisa premium na cały rok",
    lead="Trzy lub więcej wyjazdów w roku — służbowo, do domu za granicą, do rodziny — jedna roczna polisa obejmuje każdą podróż.",
    sections=[
        ("Kiedy się opłaca", "<ul><li><strong>Częste podróże służbowe</strong>.</li><li><strong>Właściciele domów za granicą</strong>.</li><li><strong>Rodziny</strong> z kilkoma wyjazdami w roku.</li></ul>"),
        ("Na co zwrócić uwagę", "<ul><li><strong>Maksymalna liczba dni jednego wyjazdu</strong>.</li><li><strong>Zakres terytorialny</strong>.</li><li><strong>Rezygnacja</strong> na wyjazd lub na rok.</li><li><strong>Limity wieku</strong>.</li></ul>"),
        ("Roczne czy międzynarodowe ubezpieczenie zdrowotne?", "<p>Jeśli większość roku spędzasz za granicą, zobacz <a href=\"" + IPMI + "\">międzynarodowe ubezpieczenie zdrowotne</a>.</p>"),
    ],
    faq=[
        ("Ile wyjazdów obejmuje?", "Wszystkie w ciągu 12 miesięcy, w limicie dni na wyjazd."),
        ("Czy jest tańsze?", "Często od około trzech wyjazdów rocznie."),
        ("Czy działa w Polsce?", "Zwykle nie lub tylko na określonych warunkach."),
    ],
)

L["ski"] = dict(
    slug="narty", preset=dict(intent="forTourism", sports=True),
    title="Ubezpieczenie na Narty — Ratownictwo i Koszty Leczenia | Adler & Rochefort",
    desc="Porównaj ubezpieczenia narciarskie: ratownictwo górskie, koszty leczenia, transport, OC i sprzęt. Polisy premium posortowane według ochrony.",
    crumb="Narty", eyebrow="Ubezpieczenie na narty",
    h1="Ubezpieczenie na narty: porównaj ratownictwo, leczenie i OC",
    lead="Narty i snowboard to jedna z najczęstszych przyczyn szkód w podróży, a wiele standardowych polis je wyłącza. Porównaj polisy z zaznaczoną opcją sportów zimowych.",
    sections=[
        ("Co musi pokryć polisa narciarska", "<ul><li><strong>Akcja ratunkowa</strong>, także śmigłowcem — w Alpach płatna.</li><li><strong>Leczenie</strong> w prywatnych klinikach górskich.</li><li><strong>Transport do Polski</strong> po złamaniu.</li><li><strong>OC</strong> przy zderzeniu na stoku.</li><li><strong>Sprzęt i karnet</strong>, zależnie od polisy.</li></ul>"),
        ("Jazda poza trasą", "<p>Wiele polis obejmuje tylko oznakowane, otwarte trasy. Freeride, skitury i heliski mogą być wyłączone.</p>"),
        ("Alpy, Ameryka Północna i Japonia", "<p>We Włoszech OC na stoku jest obowiązkowe. W Austrii i Szwajcarii ratownictwo i kliniki kosztują dużo także z EKUZ.</p>"),
    ],
    faq=[
        ("Czy zwykła polisa obejmuje narty?", "Często nie lub tylko z opcją sportów zimowych, tu zaznaczoną."),
        ("Czy akcja śmigłowcem jest pokryta?", "W wielu polisach z opcją sportową, w limicie kosztów ratownictwa."),
        ("Czy EKUZ pokrywa ratownictwo górskie?", "Nie."),
    ],
)

L["cruise"] = dict(
    slug="rejs", preset=dict(intent="cruise"),
    title="Ubezpieczenie na Rejs Wycieczkowy — Ewakuacja i Lekarz | Adler & Rochefort",
    desc="Porównaj ubezpieczenia na rejs: leczenie na statku, ewakuacja na morzu, spóźnienie na wypłynięcie i rezygnacja. Polisy premium kilku ubezpieczycieli.",
    crumb="Rejs", eyebrow="Ubezpieczenie na rejs",
    h1="Ubezpieczenie na rejs: porównaj ewakuację i leczenie na pokładzie",
    lead="Centrum medyczne na statku rozlicza się jak prywatna klinika, a ewakuacja może kosztować więcej niż rejs.",
    sections=[
        ("Czym różnią się polisy", "<ul><li><strong>Leczenie na statku</strong>: EKUZ na morzu zwykle nie działa.</li><li><strong>Ewakuacja medyczna</strong>.</li><li><strong>Spóźnienie na wypłynięcie</strong>.</li><li><strong>Rezygnacja</strong> na cenę rejsu.</li></ul>"),
        ("Właściwa strefa", "<p>Rejs po Karaibach z Miami wymaga strefy USA.</p>"),
        ("Ubezpieczenie armatora", "<p>Porównaj jego sumy z ofertami tutaj.</p>"),
    ],
    faq=[
        ("Czy polisa płaci lekarzowi okrętowemu?", "Polisy rejsowe zwykle tak, w limicie KL."),
        ("Czy ewakuacja jest pokryta?", "W większości polis w ramach transportu medycznego."),
        ("Czy potrzebuję strefy USA na Karaiby?", "Jeśli wypływasz z portu w USA lub tam schodzisz na ląd — tak."),
    ],
)

L["nomad"] = dict(
    slug="cyfrowi-nomadzi", preset=dict(intent="digitalNomad"),
    title="Ubezpieczenie dla Cyfrowych Nomadów — Porównaj | Adler & Rochefort",
    desc="Porównaj ubezpieczenia podróżne dla cyfrowych nomadów i pracowników zdalnych: koszty leczenia, transport i OC na miesiące za granicą.",
    crumb="Cyfrowi nomadzi", eyebrow="Ubezpieczenie dla cyfrowych nomadów",
    h1="Ubezpieczenie dla cyfrowych nomadów: miesiące za granicą, dobrze chronione",
    lead="Wiosna w Lizbonie, lato na Bali, zima w Meksyku — to styl życia, nie urlop.",
    sections=[
        ("Co musi zapewnić", "<ul><li><strong>Długie okresy</strong>, często odnawialne co miesiąc.</li><li><strong>Wiele krajów</strong>.</li><li><strong>Wysokie KL i transport</strong>.</li><li><strong>OC</strong>.</li><li><strong>Sprzęt</strong> z niskimi limitami.</li></ul>"),
        ("Wizy dla nomadów", "<p>Portugalska wiza D8 i hiszpańska wiza dla nomadów wymagają ochrony zdrowotnej; sprawdź dokładne wymagania konsulatu.</p>"),
        ("Kiedy potrzebne jest ubezpieczenie zdrowotne", "<p>Zobacz <a href=\"" + IPMI + "\">międzynarodowe ubezpieczenie zdrowotne</a>.</p>"),
    ],
    faq=[
        ("Czy mogę kupić polisę już za granicą?", "Niektóre polisy na to pozwalają, często z karencją."),
        ("Czy chroni w Polsce?", "Zwykle tylko podczas krótkich wizyt."),
        ("Czy laptop jest ubezpieczony?", "W ramach bagażu, z niskim limitem."),
    ],
)

L["longstay"] = dict(
    slug="dlugi-pobyt", preset=dict(intent="expat"),
    title="Ubezpieczenie na Długi Pobyt za Granicą — Porównaj | Adler & Rochefort",
    desc="Porównaj ubezpieczenia na długi pobyt: zima w Portugalii lub Hiszpanii, urlop sabbatical, miesiące przed przeprowadzką. Koszty leczenia i transport.",
    crumb="Długi pobyt", eyebrow="Ubezpieczenie na długi pobyt",
    h1="Ubezpieczenie na długi pobyt: od zimy w Algarve po miesiące przed przeprowadzką",
    lead="Sabbatical, zima na słońcu lub okres przejściowy przed przeprowadzką do Portugalii lub Hiszpanii.",
    sections=[
        ("Dla kogo", "<ul><li><strong>Zimujący</strong> za granicą.</li><li><strong>Sabbaticale</strong>.</li><li><strong>Nowi rezydenci</strong> przed lokalnym ubezpieczeniem.</li></ul>"),
        ("Co porównać", "<ul><li><strong>Maksymalny okres</strong>.</li><li><strong>KL</strong> i płatność bezgotówkowa.</li><li><strong>Transport do kraju</strong>.</li><li><strong>Choroby przewlekłe</strong>: zgłoś je.</li></ul>"),
        ("Granica polisy podróżnej", "<p>Gdy inny kraj staje się domem, potrzebne jest <a href=\"" + IPMI + "\">ubezpieczenie zdrowotne</a>.</p>"),
    ],
    faq=[
        ("Jak długo?", "Kilka miesięcy do roku, zależnie od polisy."),
        ("Czy mogę wracać do Polski?", "Często na krótkie wizyty."),
        ("Czy wystarczy do wizy?", "Czasem na pierwszy okres; sprawdź w konsulacie."),
    ],
)

L["cancel"] = dict(
    slug="rezygnacja", preset=dict(intent="cancellation"),
    title="Ubezpieczenie Kosztów Rezygnacji z Drogiej Podróży — Porównaj | Adler & Rochefort",
    desc="Porównaj ubezpieczenia kosztów rezygnacji z podróży: safari, wille, czarter jachtów, dalekie wyjazdy. Suma, przyczyny i przerwanie podróży.",
    crumb="Rezygnacja", eyebrow="Ubezpieczenie kosztów rezygnacji",
    h1="Ubezpieczenie rezygnacji z podróży, której nie chcesz stracić",
    lead="Safari, willa dla rodziny, czarter jachtu: bezzwrotne zaliczki szybko rosną.",
    sections=[
        ("Dopasuj sumę", "<p>Suma powinna pokryć cały bezzwrotny koszt dla wszystkich podróżnych.</p>"),
        ("Co porównać", "<ul><li><strong>Przyczyny</strong>: zamknięta lista lub każda uzasadniona.</li><li><strong>Przerwanie podróży</strong>.</li><li><strong>Termin zakupu</strong>: przy pierwszej wpłacie.</li><li><strong>Udział własny</strong>.</li></ul>"),
        ("Tylko rezygnacja czy pełny pakiet", "<p>Na USA i dalekie podróże porównaj pełne pakiety.</p>"),
    ],
    faq=[
        ("Kiedy kupić?", "Przy rezerwacji lub pierwszej wpłacie."),
        ("Czy obejmuje zmianę planów?", "Nie."),
        ("Czy obejmuje zaliczki na willę?", "Jeśli są bezzwrotnym kosztem podróży w limicie."),
    ],
)

L["group"] = dict(
    slug="grupy", preset=dict(intent="groupTravel"),
    title="Ubezpieczenie Podróży Grupowej — Wesela, Golf, Wyjazdy Firmowe | Adler & Rochefort",
    desc="Porównaj ubezpieczenia podróży grupowych: wesela za granicą, grupy golfowe, zjazdy rodzinne i wyjazdy firmowe. Jedno wyszukiwanie dla całej grupy.",
    crumb="Grupy", eyebrow="Ubezpieczenie podróży grupowej",
    h1="Ubezpieczenie podróży grupowej: jedno wyszukiwanie dla wszystkich",
    lead="Wesele na Majorce, tydzień golfa w Algarve, wyjazd integracyjny firmy.",
    sections=[
        ("Typowe wyjazdy", "<ul><li><strong>Wesela za granicą</strong>.</li><li><strong>Grupy golfowe</strong>.</li><li><strong>Wyjazdy wielopokoleniowe</strong>.</li><li><strong>Wyjazdy firmowe</strong>.</li></ul>"),
        ("Na co uważać", "<ul><li><strong>Wielkość grupy</strong>.</li><li><strong>Wiek</strong> uczestników.</li><li><strong>Rezygnacja</strong> jednej osoby.</li><li><strong>OC</strong>.</li></ul>"),
        ("Goście z innych krajów", "<p>Każdy porównuje z własnym krajem zamieszkania.</p>"),
    ],
    faq=[
        ("Ile osób na jedną ofertę?", "Do 12."),
        ("Czy wszyscy mają tę samą polisę?", "W jednej ofercie tak."),
        ("Czy goście z zagranicy mogą kupić?", "Tak, z własnym krajem zamieszkania."),
    ],
)

L["study"] = dict(
    slug="studenci", preset=dict(intent="studyInternship"),
    title="Ubezpieczenie dla Studentów za Granicą — Porównaj | Adler & Rochefort",
    desc="Porównaj ubezpieczenia na studia, staż lub au pair za granicą: koszty leczenia, transport i OC na cały rok akademicki.",
    crumb="Studenci", eyebrow="Ubezpieczenie studentów za granicą",
    h1="Ubezpieczenie dla studentów: rok za granicą, dobrze chroniony",
    lead="Semestr w Londynie, magisterka w USA, staż w Singapurze. Uczelnie ustalają minimum; rodzice chcą więcej.",
    sections=[
        ("Wymagania uczelni", "<ul><li><strong>Minimum</strong> to próg, nie cel.</li><li><strong>Wysokie KL</strong> w USA i Kanadzie.</li><li><strong>Transport</strong> i przyjazd członka rodziny.</li><li><strong>OC</strong>.</li></ul>"),
        ("USA", "<p>Wiele uczelni wymaga własnego planu lub formularza zwolnienia z minimalnymi sumami.</p>"),
        ("Staż i au pair", "<p>Porównanie obejmuje studia, staż i au pair.</p>"),
    ],
    faq=[
        ("Czy uczelnia zaakceptuje polisę?", "Porównaj sumy z pisemnymi wymaganiami."),
        ("Czy rodzice mogą kupić?", "Tak, z danymi studenta."),
        ("Czy obejmuje cały rok?", "Maksymalny okres podano w każdej ofercie."),
    ],
)
