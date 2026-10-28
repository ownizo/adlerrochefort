# -*- coding: utf-8 -*-
"""Content for the "jewellery and watch insurance in Spain" pages, October 2026.

One entry per language that had no dedicated jewellery page for Spain
(NL, PL, SV, DA, IT, ZH, HE). DE and ES already had one
(/de/schmuck-uhren-versicherung-portugal-spanien/,
/es/seguro-joyas-relojes-limite-por-objeto/) and EN has the commercial page
/en/art-jewellery-watches-insurance/.

Every factual statement is taken from the English commercial page and the
insurer summaries already published on the site (Chubb Masterpiece, Hiscox,
Liberty/Innovarisk). Nothing here adds a condition the site does not already
state. Built by scripts/build-jewellery-spain-pages.py.
"""

PAGES = {
    # ------------------------------------------------------------------ NL
    "nl": {
        "slug": "sieraden-horloges-verzekering-spanje",
        "template": "kunst-sieraden-verzekering-boven-getaxeerde-waarde",
        "hreflang": "nl",
        "title": "Sieraden en horloges verzekeren in Spanje",
        "description": "Sieraden en horloges in een woning in Spanje: de limiet per voorwerp, robo en hurto, kluis, tweede woning en dekking tegen getaxeerde waarde.",
        "eyebrow": "Private Clients · Sieraden &amp; horloges · Spanje",
        "h1": "Sieraden en horloges verzekeren in Spanje",
        "subtitle": "Een standaard Spaanse woonpolis betaalt een paar duizend euro per stuk. Wij specificeren de stukken die ertoe doen tegen getaxeerde waarde, voor een hoofdverblijf of een tweede woning in Spanje.",
        "meta": "Verzekeringsagent voor particuliere cliënten · ASF nr. 425591790/3 · Lissabon · Portugal en Spanje · Gepubliceerd: 28 oktober 2026",
        "sections": [
            ("limiet", "De limiet per voorwerp in een Spaanse woonpolis",
             "<p>Een Spaanse <em>seguro de hogar</em> noemt een totaalbedrag voor de inboedel en beperkt daarna wat hij betaalt voor sieraden en kostbaarheden (<em>joyas y objetos de valor</em>). De limiet per voorwerp ligt vaak tussen € 1.500 en € 5.000.</p>"
             "<p>Daarbovenop geldt vaak een maximum voor alle kostbaarheden samen van 20% tot 25% van de inboedelsom. Beide limieten gelden tegelijk en de laagste beslist. Boven die limiet is het stuk eenvoudigweg niet verzekerd, hoe hoog de inboedelsom ook is. De enige uitweg is het stuk te specificeren, met een eigen omschrijving en waarde.</p>"),
            ("robo-hurto", "Robo en hurto: diefstal met en zonder braak",
             "<p>Spaanse polissen maken een duidelijk onderscheid tussen <em>robo</em> (diefstal met braak of geweld) en <em>hurto</em> (diefstal zonder geweld, bijvoorbeeld een horloge uit een tas of een hotelkamer). De gewone inboedeldekking betaalt het eerste en beperkt of sluit het tweede uit, vooral buitenshuis.</p>"
             "<p>Een all-risks-sectie voor kostbaarheden dekt ook hurto, verlies en schade door een ongeval.</p>"),
            ("kluis", "Kluis, alarm en waar de stukken liggen",
             "<ul><li>Boven bepaalde waarden stellen verzekeraars beveiliging als voorwaarde: een kluis gecertificeerd volgens EN 1143-1, geklasseerd naar de waarde die hij bevat en verankerd aan de constructie, en een alarm dat is aangesloten op een meldkamer.</li>"
             "<li>Sommige voorwaarden bepalen wanneer sieraden in de kluis moeten liggen, bijvoorbeeld wanneer ze niet gedragen worden of wanneer het huis 's nachts leeg staat. Die voorwaarden worden vóór de ingangsdatum schriftelijk afgesproken.</li>"
             "<li>Het verzekerde bedrag wordt bewust verdeeld over de bankkluis, de woning en de wereld, omdat elke plaats een eigen limiet heeft. Een horloge dat u dagelijks draagt en een ring in een bankkluis staan op verschillende regels.</li></ul>"),
            ("tweede-woning", "Een tweede woning aan de Costa del Sol, op de Balearen of aan de Costa Blanca",
             "<p>Veel eigenaren bewaren een deel van hun sieraden en horloges in een tweede woning in Marbella, Sotogrande, Mallorca, Ibiza of Jávea. Polissen voor vakantiewoningen behandelen kostbaarheden vaak anders: de vakantiewoningpolis van Hiscox dekt sieraden en horloges helemaal niet.</p>"
             "<p>Kostbaarheden in een tweede woning hebben daarom een eigen regeling nodig, bijvoorbeeld een private-client polis waarbij de stukken wereldwijd gedekt zijn, in en buiten de kluis.</p>"),
            ("getaxeerde-waarde", "Getaxeerde waarde en de datum van de taxatie",
             "<p>Een stuk dat tegen getaxeerde waarde is gespecificeerd, heeft een waarde die bij het begin van het contract is vastgelegd. Na een totaalverlies (diefstal zonder terugvinden, vernietiging) wordt die waarde betaald, zonder discussie over afschrijving.</p>"
             "<p>Laat sieraden en horloges om de twee jaar opnieuw taxeren. Onder de voorwaarden van Chubb geldt: is een stuk dat in de laatste twee jaar is getaxeerd bij schade meer waard dan het verzekerde bedrag, dan wordt de marktwaarde betaald, tot het totaal van de categorie.</p>"),
            ("consorcio", "Aardbeving en overstroming: het Consorcio",
             "<p>In Spanje worden aardbeving, buitengewone overstroming en atypische storm vergoed door het <em>Consorcio de Compensación de Seguros</em>, op basis van de bedragen in de polis. Een te laag verzekerd bedrag betekent dus ook een te lage uitkering van het Consorcio.</p>"),
            ("portugal-spanje", "Portugal en Spanje op één polis",
             "<p>Chubb en Hiscox schrijven beide landen, zodat stukken in een woning in Portugal en een andere in Spanje vaak bij dezelfde adviseur en met op elkaar afgestemde voorwaarden kunnen worden verzekerd.</p>"),
            ("checklist", "Wat wij nodig hebben voor een schriftelijk advies",
             "<ul><li>Een lijst van de stukken die ertoe doen: merk, model, referentie en serienummer voor horloges; metaal, stenen en certificaten voor sieraden.</li>"
             "<li>Taxaties en facturen met hun datum, en een foto van elk stuk.</li>"
             "<li>Waar de stukken liggen: merk, model en certificering van de kluis, bankkluis, alarm en of het is aangesloten op een meldkamer.</li>"
             "<li>Welke stukken gedragen worden of meereizen, en hoe vaak.</li>"
             "<li>Uw huidige polis, als u die heeft.</li></ul>"),
        ],
        "faq_title": "Sieraden en horloges in Spanje — veelgestelde vragen",
        "faq": [
            ("Zijn mijn sieraden gedekt door mijn Spaanse woonpolis?",
             "Alleen tot de limiet per voorwerp en de limiet voor kostbaarheden in de polis, meestal enkele duizenden euro's per stuk. Daarboven moet een stuk afzonderlijk worden gespecificeerd, met een eigen waarde."),
            ("Is een horloge dat uit een hotelkamer wordt gestolen gedekt?",
             "Onder een standaardpolis meestal niet: het gaat om hurto buitenshuis. Een all-risks-sectie voor kostbaarheden met wereldwijde dekking betaalt het wel, binnen de limiet in de polis."),
            ("Zijn kostbaarheden in een vakantiewoning in Spanje gedekt?",
             "Niet altijd. De vakantiewoningpolis van Hiscox dekt bijvoorbeeld helemaal geen sieraden en horloges, dus kostbaarheden in een tweede woning moeten apart worden geregeld."),
            ("Hoe vaak moeten sieraden en horloges opnieuw worden getaxeerd?",
             "Om de twee jaar. Onder de voorwaarden die wij bemiddelen bepaalt de datum van de laatste taxatie of een stijging van de markt gedekt is."),
        ],
        "related": [
            ("/nl/woonverzekering-spanje/", "Woonverzekering in Spanje"),
            ("/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/", "Kunst en sieraden boven de getaxeerde waarde"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (Engels)"),
        ],
        "related_title": "Verder lezen",
        "breadcrumb_home": "Home",
    },
    # ------------------------------------------------------------------ PL
    "pl": {
        "slug": "ubezpieczenie-bizuterii-zegarkow-hiszpania",
        "template": "ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona",
        "hreflang": "pl-PL",
        "title": "Ubezpieczenie biżuterii i zegarków w Hiszpanii",
        "description": "Biżuteria i zegarki w domu w Hiszpanii: limit na przedmiot, robo i hurto, sejf, drugi dom i ochrona według wartości uzgodnionej.",
        "eyebrow": "Private Clients · Biżuteria i zegarki · Hiszpania",
        "h1": "Ubezpieczenie biżuterii i zegarków w Hiszpanii",
        "subtitle": "Standardowa hiszpańska polisa mieszkaniowa wypłaca kilka tysięcy euro za przedmiot. Ważne przedmioty wpisujemy imiennie według wartości uzgodnionej — dla domu stałego lub drugiego domu w Hiszpanii.",
        "meta": "Zarejestrowany agent ubezpieczeniowy · ASF nr 425591790/3 · Lizbona · Portugalia i Hiszpania",
        "sections": [
            ("limit", "Limit na jeden przedmiot w hiszpańskiej polisie",
             "<p>Hiszpańska polisa <em>seguro de hogar</em> określa łączną sumę ubezpieczenia mienia ruchomego, a następnie ogranicza wypłatę za biżuterię i przedmioty wartościowe (<em>joyas y objetos de valor</em>). Limit na jeden przedmiot wynosi często od 1500 do 5000 €.</p>"
             "<p>Do tego dochodzi często limit dla wszystkich przedmiotów wartościowych łącznie: 20–25% sumy mienia. Oba limity działają jednocześnie i decyduje niższy. Powyżej limitu przedmiot po prostu nie jest ubezpieczony, niezależnie od sumy mienia. Jedyne wyjście to wpisać go imiennie, z własnym opisem i wartością.</p>"),
            ("robo-hurto", "Robo i hurto: kradzież z włamaniem i bez",
             "<p>Hiszpańskie polisy wyraźnie odróżniają <em>robo</em> (kradzież z włamaniem lub z użyciem przemocy) od <em>hurto</em> (kradzież bez przemocy, np. zegarek zabrany z torby lub z pokoju hotelowego). Zwykła ochrona mienia obejmuje pierwszy przypadek, a drugi ogranicza lub wyłącza, zwłaszcza poza domem.</p>"
             "<p>Sekcja all-risks dla przedmiotów wartościowych obejmuje również hurto, zgubienie i przypadkowe uszkodzenie.</p>"),
            ("sejf", "Sejf, alarm i miejsce przechowywania",
             "<ul><li>Powyżej pewnych wartości ubezpieczyciele wymagają zabezpieczeń: sejfu certyfikowanego według EN 1143-1, dobranego klasą do przechowywanej wartości i zakotwiczonego w konstrukcji, oraz alarmu podłączonego do centrum monitorowania.</li>"
             "<li>Niektóre warunki określają, kiedy biżuteria musi być w sejfie, np. gdy nie jest noszona lub gdy dom stoi nocą pusty. Takie warunki uzgadnia się pisemnie przed rozpoczęciem ochrony.</li>"
             "<li>Sumę ubezpieczenia dzieli się świadomie między skrytkę bankową, dom i cały świat, bo każde miejsce ma własny limit. Zegarek noszony codziennie i pierścionek w skrytce bankowej to dwie różne pozycje.</li></ul>"),
            ("drugi-dom", "Drugi dom na Costa del Sol, Balearach lub Costa Blanca",
             "<p>Wielu właścicieli trzyma część biżuterii i zegarków w drugim domu w Marbelli, Sotogrande, na Majorce, Ibizie lub w Jávei. Polisy dla domów wakacyjnych często traktują przedmioty wartościowe inaczej: polisa Hiscox dla domów wakacyjnych w ogóle nie obejmuje biżuterii i zegarków.</p>"
             "<p>Przedmioty wartościowe w drugim domu wymagają więc osobnego rozwiązania, np. polisy private client, w której przedmioty są chronione na całym świecie, w sejfie i poza nim.</p>"),
            ("wartosc", "Wartość uzgodniona i data wyceny",
             "<p>Przedmiot wpisany według wartości uzgodnionej ma wartość ustaloną na początku umowy. Po szkodzie całkowitej (kradzież bez odzyskania, zniszczenie) wypłacana jest ta wartość, bez sporu o amortyzację.</p>"
             "<p>Biżuterię i zegarki warto wyceniać ponownie co dwa lata. Według warunków Chubb: jeśli przedmiot wyceniony w ostatnich dwóch latach jest w chwili szkody wart więcej niż suma ubezpieczenia, wypłacana jest wartość rynkowa, do sumy dla danej kategorii.</p>"),
            ("consorcio", "Trzęsienie ziemi i powódź: Consorcio",
             "<p>W Hiszpanii trzęsienie ziemi, nadzwyczajną powódź i nietypową burzę pokrywa <em>Consorcio de Compensación de Seguros</em>, na podstawie sum z polisy. Zbyt niska suma oznacza więc także zbyt niską wypłatę z Consorcio.</p>"),
            ("portugalia-hiszpania", "Portugalia i Hiszpania na jednej polisie",
             "<p>Chubb i Hiscox ubezpieczają w obu krajach, więc przedmioty w domu w Portugalii i w innym w Hiszpanii często można ubezpieczyć u jednego doradcy, na uzgodnionych warunkach.</p>"),
            ("lista", "Czego potrzebujemy do pisemnej opinii",
             "<ul><li>Listy ważnych przedmiotów: marka, model, referencja i numer seryjny zegarków; metal, kamienie i certyfikaty biżuterii.</li>"
             "<li>Wycen i faktur z datami oraz zdjęcia każdego przedmiotu.</li>"
             "<li>Informacji, gdzie przedmioty są przechowywane: marka, model i certyfikat sejfu, skrytka bankowa, alarm i czy jest monitorowany.</li>"
             "<li>Informacji, które przedmioty są noszone lub podróżują i jak często.</li>"
             "<li>Obecnej polisy, jeśli ją Państwo mają.</li></ul>"),
        ],
        "faq_title": "Biżuteria i zegarki w Hiszpanii — pytania",
        "faq": [
            ("Czy moja biżuteria jest objęta hiszpańską polisą mieszkaniową?",
             "Tylko do limitu na przedmiot i limitu dla przedmiotów wartościowych z polisy, zwykle kilku tysięcy euro za sztukę. Powyżej tego przedmiot trzeba wpisać imiennie, z własną wartością."),
            ("Czy zegarek skradziony z pokoju hotelowego jest objęty ochroną?",
             "W standardowej polisie zwykle nie: to hurto poza domem. Sekcja all-risks dla przedmiotów wartościowych z ochroną na całym świecie obejmuje taką szkodę, w granicach limitu z polisy."),
            ("Czy przedmioty wartościowe w domu wakacyjnym w Hiszpanii są chronione?",
             "Nie zawsze. Polisa Hiscox dla domów wakacyjnych w ogóle nie obejmuje biżuterii i zegarków, więc przedmioty wartościowe w drugim domu trzeba ubezpieczyć osobno."),
            ("Jak często wyceniać biżuterię i zegarki?",
             "Co dwa lata. W warunkach, które oferujemy, data ostatniej wyceny decyduje o tym, czy wzrost cen rynkowych jest objęty ochroną."),
        ],
        "related": [
            ("/pl/ubezpieczenie-domu-hiszpania/", "Ubezpieczenie domu i rezydencji w Hiszpanii"),
            ("/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/", "Sztuka i biżuteria ponad wartość uzgodnioną"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (po angielsku)"),
        ],
        "related_title": "Powiązane strony",
    },
    # ------------------------------------------------------------------ SE
    "se": {
        "slug": "smycken-klockor-forsakring-spanien",
        "template": "konst-smycken-forsakring-utover-avtalat-varde",
        "hreflang": "sv-SE",
        "title": "Försäkra smycken och klockor i Spanien",
        "description": "Smycken och klockor i en bostad i Spanien: gränsen per föremål, robo och hurto, kassaskåp, fritidshus och skydd till avtalat värde.",
        "eyebrow": "Private Clients · Smycken &amp; klockor · Spanien",
        "h1": "Försäkra smycken och klockor i Spanien",
        "subtitle": "En vanlig spansk hemförsäkring betalar några tusen euro per föremål. Vi förtecknar de föremål som betyder något till avtalat värde, för en permanent bostad eller ett fritidshus i Spanien.",
        "meta": "Registrerad försäkringsförmedlare · ASF nr 425591790/3 · Lissabon · Portugal och Spanien",
        "sections": [
            ("grans", "Gränsen per föremål i en spansk hemförsäkring",
             "<p>En spansk <em>seguro de hogar</em> anger ett totalbelopp för lösöret och begränsar sedan vad den betalar för smycken och värdeföremål (<em>joyas y objetos de valor</em>). Gränsen per föremål ligger ofta mellan 1 500 och 5 000 €.</p>"
             "<p>Därtill finns ofta ett tak för alla värdeföremål sammantaget på 20–25 % av lösörebeloppet. Båda gränserna gäller samtidigt och den lägsta avgör. Över gränsen är föremålet helt enkelt inte försäkrat, hur högt lösörebeloppet än är. Den enda vägen ut är att förteckna föremålet med egen beskrivning och eget värde.</p>"),
            ("robo-hurto", "Robo och hurto: stöld med och utan våld",
             "<p>Spanska försäkringar skiljer tydligt mellan <em>robo</em> (stöld genom inbrott eller våld) och <em>hurto</em> (stöld utan våld, till exempel en klocka som tas ur en väska eller ett hotellrum). Det vanliga lösöreskyddet ersätter det första och begränsar eller utesluter det andra, särskilt utanför bostaden.</p>"
             "<p>Ett allriskmoment för värdeföremål täcker även hurto, förlust och oavsiktlig skada.</p>"),
            ("kassaskap", "Kassaskåp, larm och var föremålen förvaras",
             "<ul><li>Över vissa värden ställer försäkringsgivarna krav på skydd: ett kassaskåp certifierat enligt EN 1143-1, klassat efter värdet det rymmer och förankrat i konstruktionen, samt ett larm kopplat till en larmcentral.</li>"
             "<li>Vissa villkor anger när smycken ska ligga i kassaskåpet, till exempel när de inte bärs eller när huset står tomt på natten. Sådana villkor avtalas skriftligt innan försäkringen börjar gälla.</li>"
             "<li>Försäkringsbeloppet delas medvetet upp mellan bankfack, bostad och hela världen, eftersom varje plats har sin egen gräns. En klocka som bärs dagligen och en ring i ett bankfack står på olika rader.</li></ul>"),
            ("fritidshus", "Fritidshus på Costa del Sol, Balearerna eller Costa Blanca",
             "<p>Många ägare förvarar en del av sina smycken och klockor i ett fritidshus i Marbella, Sotogrande, på Mallorca, Ibiza eller i Jávea. Fritidshusförsäkringar behandlar ofta värdeföremål annorlunda: Hiscox fritidshusförsäkring täcker inte smycken och klockor alls.</p>"
             "<p>Värdeföremål i ett fritidshus behöver därför en egen lösning, till exempel en private client-försäkring där föremålen är försäkrade i hela världen, i och utanför kassaskåpet.</p>"),
            ("avtalat-varde", "Avtalat värde och värderingens datum",
             "<p>Ett föremål som förtecknats till avtalat värde har ett värde som fastställs när avtalet ingås. Efter en totalskada (stöld utan återfinnande, förstörelse) betalas det värdet, utan diskussion om värdeminskning.</p>"
             "<p>Låt värdera smycken och klockor vartannat år. Enligt Chubbs villkor gäller: om ett föremål som värderats under de senaste två åren är värt mer än försäkringsbeloppet vid skadan betalas marknadsvärdet, upp till kategorins totalbelopp.</p>"),
            ("consorcio", "Jordbävning och översvämning: Consorcio",
             "<p>I Spanien ersätts jordbävning, extraordinär översvämning och atypisk storm av <em>Consorcio de Compensación de Seguros</em>, utifrån beloppen i försäkringen. Ett för lågt försäkringsbelopp innebär alltså också en för låg ersättning från Consorcio.</p>"),
            ("portugal-spanien", "Portugal och Spanien i en försäkring",
             "<p>Chubb och Hiscox försäkrar i båda länderna, så föremål i en bostad i Portugal och en annan i Spanien kan ofta försäkras hos samma rådgivare och med samordnade villkor.</p>"),
            ("checklista", "Vad vi behöver för ett skriftligt utlåtande",
             "<ul><li>En lista över de föremål som betyder något: märke, modell, referens och serienummer för klockor; metall, stenar och certifikat för smycken.</li>"
             "<li>Värderingar och kvitton med datum, och ett foto av varje föremål.</li>"
             "<li>Var föremålen förvaras: kassaskåpets märke, modell och certifiering, bankfack, larm och om det är kopplat till larmcentral.</li>"
             "<li>Vilka föremål som bärs eller följer med på resor, och hur ofta.</li>"
             "<li>Er nuvarande försäkring, om ni har en.</li></ul>"),
        ],
        "faq_title": "Smycken och klockor i Spanien — frågor",
        "faq": [
            ("Täcker min spanska hemförsäkring mina smycken?",
             "Bara upp till gränsen per föremål och gränsen för värdeföremål i försäkringen, oftast några tusen euro per föremål. Däröver måste föremålet förtecknas separat, med eget värde."),
            ("Är en klocka som stjäls från ett hotellrum försäkrad?",
             "Med en vanlig försäkring oftast inte: det är hurto utanför bostaden. Ett allriskmoment för värdeföremål med skydd i hela världen ersätter det, inom gränsen i försäkringen."),
            ("Är värdeföremål i ett fritidshus i Spanien försäkrade?",
             "Inte alltid. Hiscox fritidshusförsäkring täcker till exempel inte smycken och klockor alls, så värdeföremål i ett fritidshus måste ordnas separat."),
            ("Hur ofta ska smycken och klockor värderas om?",
             "Vartannat år. Enligt de villkor vi förmedlar avgör datumet för den senaste värderingen om en stigande marknad är täckt."),
        ],
        "related": [
            ("/se/hemforsakring-spanien/", "Hemförsäkring i Spanien för värdefulla hem"),
            ("/se/konst-smycken-forsakring-utover-avtalat-varde/", "Konst och smycken utöver avtalat värde"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (på engelska)"),
        ],
        "related_title": "Relaterade sidor",
    },
    # ------------------------------------------------------------------ DK
    "dk": {
        "slug": "smykker-ure-forsikring-spanien",
        "template": "kunst-smykker-forsikring-ud-over-aftalt-vaerdi",
        "hreflang": "da-DK",
        "title": "Forsikring af smykker og ure i Spanien",
        "description": "Smykker og ure i en bolig i Spanien: grænsen pr. genstand, robo og hurto, pengeskab, feriebolig og dækning til aftalt værdi.",
        "eyebrow": "Private Clients · Smykker &amp; ure · Spanien",
        "h1": "Forsikring af smykker og ure i Spanien",
        "subtitle": "En almindelig spansk husforsikring betaler nogle få tusind euro pr. genstand. Vi specificerer de genstande, der betyder noget, til aftalt værdi, for en fast bolig eller en feriebolig i Spanien.",
        "meta": "Registreret forsikringsformidler · ASF nr. 425591790/3 · Lissabon · Portugal og Spanien",
        "sections": [
            ("graense", "Grænsen pr. genstand i en spansk husforsikring",
             "<p>En spansk <em>seguro de hogar</em> angiver en samlet sum for indboet og begrænser derefter, hvad den betaler for smykker og værdigenstande (<em>joyas y objetos de valor</em>). Grænsen pr. genstand ligger ofte mellem 1.500 og 5.000 €.</p>"
             "<p>Oven i det er der ofte et loft for alle værdigenstande samlet på 20–25 % af indbosummen. Begge grænser gælder samtidig, og den laveste afgør. Over grænsen er genstanden simpelthen ikke forsikret, uanset hvor høj indbosummen er. Den eneste vej ud er at specificere genstanden med egen beskrivelse og værdi.</p>"),
            ("robo-hurto", "Robo og hurto: tyveri med og uden vold",
             "<p>Spanske forsikringer skelner tydeligt mellem <em>robo</em> (tyveri ved indbrud eller vold) og <em>hurto</em> (tyveri uden vold, for eksempel et ur taget fra en taske eller et hotelværelse). Den almindelige indbodækning betaler det første og begrænser eller udelukker det andet, især uden for boligen.</p>"
             "<p>En all risks-sektion for værdigenstande dækker også hurto, bortkomst og hændelig skade.</p>"),
            ("pengeskab", "Pengeskab, alarm og hvor genstandene opbevares",
             "<ul><li>Over visse værdier stiller forsikringsselskaberne krav om sikring: et pengeskab certificeret efter EN 1143-1, klassificeret efter den værdi, det rummer, og forankret i konstruktionen, samt en alarm tilsluttet en alarmcentral.</li>"
             "<li>Nogle vilkår fastsætter, hvornår smykker skal ligge i pengeskabet, for eksempel når de ikke bæres, eller når huset står tomt om natten. Sådanne vilkår aftales skriftligt, før forsikringen træder i kraft.</li>"
             "<li>Forsikringssummen fordeles bevidst mellem bankboks, bolig og hele verden, fordi hvert sted har sin egen grænse. Et ur, der bæres dagligt, og en ring i en bankboks står på forskellige linjer.</li></ul>"),
            ("feriebolig", "En feriebolig på Costa del Sol, De Baleariske Øer eller Costa Blanca",
             "<p>Mange ejere opbevarer en del af deres smykker og ure i en feriebolig i Marbella, Sotogrande, på Mallorca, Ibiza eller i Jávea. Forsikringer for ferieboliger behandler ofte værdigenstande anderledes: Hiscox' ferieboligforsikring dækker slet ikke smykker og ure.</p>"
             "<p>Værdigenstande i en feriebolig har derfor brug for en særskilt løsning, for eksempel en private client-forsikring, hvor genstandene er dækket i hele verden, i og uden for pengeskabet.</p>"),
            ("aftalt-vaerdi", "Aftalt værdi og vurderingens dato",
             "<p>En genstand, der er specificeret til aftalt værdi, har en værdi, som fastsættes ved aftalens start. Efter et totaltab (tyveri uden genfinding, ødelæggelse) betales den værdi uden diskussion om værdiforringelse.</p>"
             "<p>Få smykker og ure vurderet igen hvert andet år. Efter Chubbs vilkår gælder: Er en genstand, der er vurderet inden for de seneste to år, mere værd end forsikringssummen på skadestidspunktet, betales markedsværdien op til kategoriens samlede sum.</p>"),
            ("consorcio", "Jordskælv og oversvømmelse: Consorcio",
             "<p>I Spanien dækkes jordskælv, ekstraordinær oversvømmelse og atypisk storm af <em>Consorcio de Compensación de Seguros</em> på grundlag af summerne i forsikringen. En for lav forsikringssum betyder altså også en for lav erstatning fra Consorcio.</p>"),
            ("portugal-spanien", "Portugal og Spanien på én forsikring",
             "<p>Chubb og Hiscox tegner forsikringer i begge lande, så genstande i en bolig i Portugal og en anden i Spanien ofte kan forsikres hos den samme rådgiver og med afstemte vilkår.</p>"),
            ("tjekliste", "Det har vi brug for til en skriftlig vurdering",
             "<ul><li>En liste over de genstande, der betyder noget: mærke, model, reference og serienummer for ure; metal, sten og certifikater for smykker.</li>"
             "<li>Vurderinger og fakturaer med dato samt et foto af hver genstand.</li>"
             "<li>Hvor genstandene opbevares: pengeskabets mærke, model og certificering, bankboks, alarm og om den er tilsluttet en alarmcentral.</li>"
             "<li>Hvilke genstande der bæres eller rejser med, og hvor ofte.</li>"
             "<li>Jeres nuværende forsikring, hvis I har en.</li></ul>"),
        ],
        "faq_title": "Smykker og ure i Spanien — spørgsmål",
        "faq": [
            ("Dækker min spanske husforsikring mine smykker?",
             "Kun op til grænsen pr. genstand og grænsen for værdigenstande i forsikringen, typisk nogle få tusind euro pr. genstand. Derover skal genstanden specificeres særskilt med sin egen værdi."),
            ("Er et ur, der stjæles fra et hotelværelse, dækket?",
             "Med en almindelig forsikring som regel ikke: det er hurto uden for boligen. En all risks-sektion for værdigenstande med dækning i hele verden betaler det inden for grænsen i forsikringen."),
            ("Er værdigenstande i en feriebolig i Spanien dækket?",
             "Ikke altid. Hiscox' ferieboligforsikring dækker for eksempel slet ikke smykker og ure, så værdigenstande i en feriebolig skal ordnes særskilt."),
            ("Hvor ofte skal smykker og ure vurderes igen?",
             "Hvert andet år. Efter de vilkår, vi formidler, afgør datoen for den seneste vurdering, om en stigning i markedet er dækket."),
        ],
        "related": [
            ("/dk/husforsikring-spanien/", "Husforsikring i Spanien: boliger af høj værdi"),
            ("/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/", "Kunst og smykker ud over aftalt værdi"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (på engelsk)"),
        ],
        "related_title": "Relaterede sider",
    },
    # ------------------------------------------------------------------ IT
    "it": {
        "slug": "assicurazione-gioielli-orologi-spagna",
        "template": "assicurazione-arte-gioielli-oltre-valore-concordato",
        "hreflang": "it-IT",
        "title": "Assicurazione di gioielli e orologi in Spagna",
        "description": "Gioielli e orologi in una casa in Spagna: il limite per oggetto, robo e hurto, cassaforte, seconda casa e copertura a valore concordato.",
        "eyebrow": "Private Clients · Gioielli e orologi · Spagna",
        "h1": "Assicurazione di gioielli e orologi in Spagna",
        "subtitle": "Una normale polizza casa spagnola paga qualche migliaio di euro per oggetto. Elenchiamo a valore concordato i pezzi che contano, per una residenza principale o una seconda casa in Spagna.",
        "meta": "Intermediario assicurativo registrato · ASF n. 425591790/3 · Lisbona · Portogallo e Spagna",
        "sections": [
            ("limite", "Il limite per oggetto in una polizza casa spagnola",
             "<p>Un <em>seguro de hogar</em> spagnolo indica una somma complessiva per il contenuto e poi limita quanto paga per gioielli e oggetti di valore (<em>joyas y objetos de valor</em>). Il limite per singolo oggetto è spesso compreso tra 1.500 e 5.000 €.</p>"
             "<p>A questo si aggiunge spesso un tetto per tutti gli oggetti di valore insieme, pari al 20–25% della somma del contenuto. I due limiti valgono contemporaneamente e decide il più basso. Oltre il limite il pezzo semplicemente non è assicurato, per quanto alta sia la somma del contenuto. L'unica soluzione è elencarlo, con una descrizione e un valore propri.</p>"),
            ("robo-hurto", "Robo e hurto: furto con e senza violenza",
             "<p>Le polizze spagnole distinguono chiaramente il <em>robo</em> (furto con scasso o violenza) dall'<em>hurto</em> (furto senza violenza, per esempio un orologio sottratto da una borsa o da una camera d'albergo). La copertura ordinaria del contenuto paga il primo e limita o esclude il secondo, soprattutto fuori casa.</p>"
             "<p>Una sezione all risks per gli oggetti di valore copre anche l'hurto, lo smarrimento e il danno accidentale.</p>"),
            ("cassaforte", "Cassaforte, allarme e luogo di custodia",
             "<ul><li>Oltre certi valori gli assicuratori pongono la sicurezza come condizione: una cassaforte certificata EN 1143-1, di grado adeguato al valore custodito e ancorata alla struttura, e un allarme collegato a una centrale operativa.</li>"
             "<li>Alcune condizioni stabiliscono quando i gioielli devono stare in cassaforte, per esempio quando non sono indossati o quando la casa resta vuota di notte. Queste condizioni si concordano per iscritto prima dell'inizio della polizza.</li>"
             "<li>La somma assicurata va ripartita deliberatamente tra cassetta di sicurezza in banca, casa e mondo intero, perché ogni luogo ha il proprio limite. Un orologio portato ogni giorno e un anello in una cassetta in banca stanno su righe diverse.</li></ul>"),
            ("seconda-casa", "Una seconda casa sulla Costa del Sol, alle Baleari o sulla Costa Blanca",
             "<p>Molti proprietari tengono parte dei gioielli e degli orologi in una seconda casa a Marbella, Sotogrande, Maiorca, Ibiza o Jávea. Le polizze per case vacanza trattano spesso gli oggetti di valore in modo diverso: la polizza Hiscox per case vacanza non copre affatto gioielli e orologi.</p>"
             "<p>Gli oggetti di valore in una seconda casa richiedono quindi una soluzione propria, per esempio una polizza private client in cui i pezzi sono coperti in tutto il mondo, dentro e fuori la cassaforte.</p>"),
            ("valore-concordato", "Valore concordato e data della stima",
             "<p>Un pezzo elencato a valore concordato ha un valore fissato all'inizio del contratto. Dopo una perdita totale (furto senza ritrovamento, distruzione) si paga quel valore, senza discussioni sul degrado.</p>"
             "<p>Gioielli e orologi vanno fatti stimare di nuovo ogni due anni. Secondo le condizioni di Chubb, se un pezzo stimato negli ultimi due anni vale al momento del sinistro più della somma assicurata, si paga il valore di mercato, fino al totale della categoria.</p>"),
            ("consorcio", "Terremoto e alluvione: il Consorcio",
             "<p>In Spagna terremoto, alluvione straordinaria e tempesta atipica sono indennizzati dal <em>Consorcio de Compensación de Seguros</em>, in base alle somme indicate in polizza. Una somma assicurata troppo bassa significa quindi anche un indennizzo troppo basso dal Consorcio.</p>"),
            ("portogallo-spagna", "Portogallo e Spagna in un'unica polizza",
             "<p>Chubb e Hiscox assicurano in entrambi i paesi, quindi i pezzi custoditi in una casa in Portogallo e in un'altra in Spagna possono spesso essere assicurati con lo stesso consulente e con condizioni allineate.</p>"),
            ("checklist", "Cosa ci serve per un parere scritto",
             "<ul><li>Un elenco dei pezzi che contano: marca, modello, referenza e numero di serie per gli orologi; metallo, pietre e certificati per i gioielli.</li>"
             "<li>Stime e fatture con le relative date, e una fotografia di ogni pezzo.</li>"
             "<li>Dove sono custoditi: marca, modello e certificazione della cassaforte, cassetta in banca, allarme e se è collegato a una centrale.</li>"
             "<li>Quali pezzi sono indossati o viaggiano, e con quale frequenza.</li>"
             "<li>La polizza attuale, se ne ha una.</li></ul>"),
        ],
        "faq_title": "Gioielli e orologi in Spagna — domande",
        "faq": [
            ("I miei gioielli sono coperti dalla polizza casa spagnola?",
             "Solo fino al limite per oggetto e al limite per gli oggetti di valore indicati in polizza, di solito qualche migliaio di euro per pezzo. Oltre, il pezzo va elencato singolarmente, con un valore proprio."),
            ("Un orologio rubato da una camera d'albergo è coperto?",
             "Con una polizza standard di solito no: si tratta di hurto fuori casa. Una sezione all risks per gli oggetti di valore con copertura mondiale lo paga, entro il limite indicato in polizza."),
            ("Gli oggetti di valore in una casa vacanza in Spagna sono coperti?",
             "Non sempre. La polizza Hiscox per case vacanza, per esempio, non copre affatto gioielli e orologi, quindi gli oggetti di valore in una seconda casa vanno assicurati a parte."),
            ("Ogni quanto vanno stimati gioielli e orologi?",
             "Ogni due anni. Con le condizioni che intermediamo, la data dell'ultima stima decide se un aumento del mercato è coperto."),
        ],
        "related": [
            ("/it/comprare-casa-portogallo-spagna-assicurazione/", "Comprare casa in Portogallo o Spagna: le polizze"),
            ("/it/assicurazione-arte-gioielli-oltre-valore-concordato/", "Arte e gioielli oltre il valore concordato"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (in inglese)"),
        ],
        "related_title": "Pagine correlate",
    },
    # ------------------------------------------------------------------ ZH
    "zh": {
        "slug": "jewellery-watch-insurance-spain",
        "template": "art-jewellery-beyond-agreed-value",
        "hreflang": "zh-CN",
        "title": "西班牙珠宝与腕表保险",
        "description": "西班牙住宅中的珠宝与腕表：单件赔偿限额、robo 与 hurto、保险箱、度假屋，以及按约定价值承保。",
        "eyebrow": "Private Clients · 珠宝与腕表 · 西班牙",
        "h1": "西班牙珠宝与腕表保险",
        "subtitle": "西班牙标准家庭保险对每件物品只赔付几千欧元。我们将重要物品按约定价值逐件列明承保，适用于西班牙的主要住所或度假屋。",
        "meta": "葡萄牙注册保险代理人 · ASF 注册号 425591790/3 · 里斯本 · 葡萄牙与西班牙",
        "sections": [
            ("limit", "西班牙家庭保险的单件限额",
             "<p>西班牙的家庭保险（<em>seguro de hogar</em>）先规定室内财产的总保额，然后对珠宝和贵重物品（<em>joyas y objetos de valor</em>）设定赔付上限。单件限额通常在 1,500 至 5,000 欧元之间。</p>"
             "<p>此外，所有贵重物品合计通常还有一个上限，为室内财产保额的 20% 至 25%。两个限额同时适用，以较低者为准。超出限额的部分根本不在承保范围内，无论室内财产保额多高。唯一的办法是将该物品单独列明，写明其描述和价值。</p>"),
            ("robo-hurto", "Robo 与 hurto：暴力盗窃与非暴力盗窃",
             "<p>西班牙保单明确区分 <em>robo</em>（入室或使用暴力的盗窃）与 <em>hurto</em>（非暴力盗窃，例如从包中或酒店房间里被拿走的腕表）。普通的室内财产保障赔付前者，而对后者设限或不予承保，尤其是在住宅以外。</p>"
             "<p>贵重物品的一切险条款还承保 hurto、遗失和意外损坏。</p>"),
            ("safe", "保险箱、报警系统与存放地点",
             "<ul><li>超过一定价值时，保险公司会把安防作为承保条件：符合 EN 1143-1 认证、等级与所存价值相匹配并固定在建筑结构上的保险箱，以及连接监控中心的报警系统。</li>"
             "<li>部分条款会规定珠宝何时必须放入保险箱，例如未佩戴时，或夜间房屋无人时。这些条件须在保单生效前以书面形式约定。</li>"
             "<li>保额应有意识地在银行保险柜、住宅和全球范围之间分配，因为每个地点都有各自的限额。每天佩戴的腕表和存放在银行保险柜中的戒指，属于不同的承保项目。</li></ul>"),
            ("second-home", "太阳海岸、巴利阿里群岛或白色海岸的度假屋",
             "<p>许多业主会把部分珠宝和腕表存放在马贝拉、索托格兰德、马略卡、伊维萨或哈韦阿的度假屋中。度假屋保险对贵重物品的处理往往不同：Hiscox 的度假屋保险完全不承保珠宝和腕表。</p>"
             "<p>因此，度假屋中的贵重物品需要单独安排，例如采用私人客户保单，使物品在全球范围内、保险箱内外均获承保。</p>"),
            ("agreed-value", "约定价值与估值日期",
             "<p>按约定价值列明的物品，其价值在合同开始时即已确定。发生全损（被盗未寻回、损毁）后，按该价值赔付，不会就折旧产生争议。</p>"
             "<p>珠宝和腕表应每两年重新估值一次。根据 Chubb 的条款：如果在过去两年内估值的物品在出险时价值高于保额，则按市场价值赔付，以该类别总保额为限。</p>"),
            ("consorcio", "地震与洪水：Consorcio",
             "<p>在西班牙，地震、特大洪水和异常风暴由 <em>Consorcio de Compensación de Seguros</em> 根据保单中的保额进行赔付。因此，保额不足也意味着从 Consorcio 获得的赔款不足。</p>"),
            ("portugal-spain", "葡萄牙与西班牙合并于一张保单",
             "<p>Chubb 和 Hiscox 在两国均可承保，因此存放在葡萄牙住宅和西班牙另一处住宅中的物品，通常可以通过同一位顾问、按协调一致的条件投保。</p>"),
            ("checklist", "出具书面意见所需资料",
             "<ul><li>重要物品清单：腕表的品牌、型号、编号和序列号；珠宝的金属、宝石和证书。</li>"
             "<li>注明日期的估值报告和发票，以及每件物品的照片。</li>"
             "<li>存放地点：保险箱的品牌、型号和认证，银行保险柜，报警系统及是否连接监控中心。</li>"
             "<li>哪些物品会佩戴或随身旅行，以及频率。</li>"
             "<li>现有保单（如有）。</li></ul>"),
        ],
        "faq_title": "西班牙珠宝与腕表：常见问题",
        "faq": [
            ("我的珠宝在西班牙家庭保险中是否受保？",
             "仅限于保单中的单件限额和贵重物品限额，通常每件几千欧元。超过部分须将物品单独列明，并写明其价值。"),
            ("在酒店房间被盗的腕表是否受保？",
             "在标准保单下通常不受保：这属于住宅以外的 hurto。带有全球保障的贵重物品一切险条款会在保单限额内赔付。"),
            ("西班牙度假屋中的贵重物品是否受保？",
             "不一定。例如 Hiscox 的度假屋保险完全不承保珠宝和腕表，因此度假屋中的贵重物品需要另行安排。"),
            ("珠宝和腕表多久需要重新估值？",
             "每两年一次。在我们提供的条款下，最近一次估值的日期决定市场上涨是否获得保障。"),
        ],
        "related": [
            ("/zh/home-insurance-spain/", "西班牙高价值房屋保险"),
            ("/zh/art-jewellery-beyond-agreed-value/", "超越约定价值的艺术品与珠宝保障"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance（英文）"),
        ],
        "related_title": "相关页面",
    },
    # ------------------------------------------------------------------ HE
    "il": {
        "slug": "jewellery-watch-insurance-spain",
        "template": "art-jewellery-beyond-agreed-value",
        "hreflang": "he-IL",
        "title": "ביטוח תכשיטים ושעונים בספרד",
        "description": "תכשיטים ושעונים בבית בספרד: תקרת הפיצוי לפריט, robo ו-hurto, כספת, בית נופש וכיסוי לפי ערך מוסכם.",
        "eyebrow": "Private Clients · תכשיטים ושעונים · ספרד",
        "h1": "ביטוח תכשיטים ושעונים בספרד",
        "subtitle": "פוליסת דירה ספרדית רגילה משלמת כמה אלפי אירו לפריט. אנו מפרטים את הפריטים החשובים לפי ערך מוסכם, לבית קבע או לבית נופש בספרד.",
        "meta": "סוכנות ביטוח רשומה · ⁦ASF 425591790/3⁩ · ליסבון · פורטוגל וספרד",
        "sections": [
            ("limit", "תקרת הפיצוי לפריט בפוליסת דירה ספרדית",
             "<p>פוליסת <em>seguro de hogar</em> ספרדית קובעת סכום ביטוח כולל לתכולה, ולאחר מכן מגבילה את התשלום עבור תכשיטים ופריטי ערך (<em>joyas y objetos de valor</em>). התקרה לפריט בודד נעה לרוב בין 1,500 ל-5,000 אירו.</p>"
             "<p>מעבר לכך קיימת לעיתים קרובות תקרה לכל פריטי הערך יחד, בשיעור של 20% עד 25% מסכום התכולה. שתי התקרות חלות בו-זמנית, והנמוכה מביניהן קובעת. מעל התקרה הפריט פשוט אינו מבוטח, גבוה ככל שיהיה סכום התכולה. הדרך היחידה היא לפרט אותו בנפרד, עם תיאור וערך משלו.</p>"),
            ("robo-hurto", "Robo ו-hurto: גניבה באלימות וגניבה ללא אלימות",
             "<p>פוליסות ספרדיות מבחינות בבירור בין <em>robo</em> (גניבה בפריצה או באלימות) לבין <em>hurto</em> (גניבה ללא אלימות, למשל שעון שנלקח מתיק או מחדר במלון). כיסוי התכולה הרגיל משלם על הראשונה ומגביל או מחריג את השנייה, בעיקר מחוץ לבית.</p>"
             "<p>פרק כל הסיכונים לפריטי ערך מכסה גם hurto, אובדן ונזק בתאונה.</p>"),
            ("safe", "כספת, אזעקה ומקום השמירה",
             "<ul><li>מעל ערכים מסוימים, המבטחים מתנים את הכיסוי באמצעי מיגון: כספת בתקן EN 1143-1, בדרגה המתאימה לערך שהיא מכילה ומעוגנת למבנה, ואזעקה המחוברת למוקד.</li>"
             "<li>חלק מהתנאים קובעים מתי התכשיטים חייבים להיות בכספת, למשל כשאינם נענדים או כשהבית ריק בלילה. תנאים אלה מוסכמים בכתב לפני תחילת הפוליסה.</li>"
             "<li>סכום הביטוח מחולק במכוון בין כספת בבנק, הבית וכל העולם, משום שלכל מקום תקרה משלו. שעון שנענד מדי יום וטבעת בכספת בנק נרשמים בשורות שונות.</li></ul>"),
            ("second-home", "בית נופש בקוסטה דל סול, באיים הבלאריים או בקוסטה בלנקה",
             "<p>בעלי נכסים רבים מחזיקים חלק מהתכשיטים והשעונים בבית נופש במרבלה, בסוטוגרנדה, במיורקה, באיביסה או בחאבאה. פוליסות לבתי נופש מתייחסות לעיתים קרובות לפריטי ערך באופן שונה: פוליסת בית הנופש של Hiscox אינה מכסה תכשיטים ושעונים כלל.</p>"
             "<p>לכן פריטי ערך בבית נופש זקוקים להסדר נפרד, למשל פוליסת private client שבה הפריטים מכוסים בכל העולם, בתוך הכספת ומחוצה לה.</p>"),
            ("agreed-value", "ערך מוסכם ותאריך ההערכה",
             "<p>לפריט המפורט לפי ערך מוסכם נקבע ערך כבר בתחילת החוזה. לאחר אובדן מלא (גניבה ללא השבה, השמדה) משולם ערך זה, ללא ויכוח על פחת.</p>"
             "<p>מומלץ להעריך מחדש תכשיטים ושעונים כל שנתיים. לפי תנאי Chubb: אם פריט שהוערך בשנתיים האחרונות שווה בעת הנזק יותר מסכום הביטוח, משולם ערך השוק, עד לסכום הכולל של הקטגוריה.</p>"),
            ("consorcio", "רעידת אדמה והצפה: ה-Consorcio",
             "<p>בספרד, רעידת אדמה, הצפה חריגה וסערה לא שגרתית מפוצות על ידי <em>Consorcio de Compensación de Seguros</em>, על בסיס הסכומים שבפוליסה. סכום ביטוח נמוך מדי פירושו גם פיצוי נמוך מדי מה-Consorcio.</p>"),
            ("portugal-spain", "פורטוגל וספרד בפוליסה אחת",
             "<p>Chubb ו-Hiscox מבטחות בשתי המדינות, כך שפריטים בבית בפורטוגל ובבית אחר בספרד יכולים לעיתים קרובות להיות מבוטחים אצל אותו יועץ ובתנאים מתואמים.</p>"),
            ("checklist", "מה אנו צריכים לחוות דעת בכתב",
             "<ul><li>רשימת הפריטים החשובים: מותג, דגם, מק\"ט ומספר סידורי לשעונים; מתכת, אבנים ותעודות לתכשיטים.</li>"
             "<li>הערכות שווי וחשבוניות עם תאריכים, ותמונה של כל פריט.</li>"
             "<li>מקום השמירה: מותג, דגם ותקן הכספת, כספת בנק, אזעקה והאם היא מחוברת למוקד.</li>"
             "<li>אילו פריטים נענדים או נוסעים, ובאיזו תדירות.</li>"
             "<li>הפוליסה הנוכחית, אם יש.</li></ul>"),
        ],
        "faq_title": "תכשיטים ושעונים בספרד: שאלות נפוצות",
        "faq": [
            ("האם התכשיטים שלי מכוסים בפוליסת הדירה הספרדית?",
             "רק עד תקרת הפריט ותקרת פריטי הערך שבפוליסה, בדרך כלל כמה אלפי אירו לפריט. מעבר לכך יש לפרט את הפריט בנפרד, עם ערך משלו."),
            ("האם שעון שנגנב מחדר במלון מכוסה?",
             "בפוליסה רגילה בדרך כלל לא: זהו hurto מחוץ לבית. פרק כל הסיכונים לפריטי ערך עם כיסוי עולמי משלם עליו, בגבולות התקרה שבפוליסה."),
            ("האם פריטי ערך בבית נופש בספרד מכוסים?",
             "לא תמיד. פוליסת בית הנופש של Hiscox, למשל, אינה מכסה תכשיטים ושעונים כלל, ולכן יש להסדיר בנפרד פריטי ערך בבית נופש."),
            ("כל כמה זמן יש להעריך מחדש תכשיטים ושעונים?",
             "כל שנתיים. בתנאים שאנו משווקים, תאריך ההערכה האחרונה קובע אם עליית מחירים בשוק מכוסה."),
        ],
        "related": [
            ("/il/home-insurance-spain/", "ביטוח לבתים בעלי ערך גבוה בספרד"),
            ("/il/art-jewellery-beyond-agreed-value/", "אמנות ותכשיטים מעבר לערך המוסכם"),
            ("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance (באנגלית)"),
        ],
        "related_title": "דפים קשורים",
    },
}

# The whole "jewellery and watches" cluster, used for hreflang and the
# language selector on every member (new and existing).
CLUSTER = {
    "pt": ("/private-clients/arte-joias-relogios/", "pt-PT"),
    "en": ("/en/art-jewellery-watches-insurance/", "en-GB"),
    "de": ("/de/schmuck-uhren-versicherung-portugal-spanien/", "de"),
    "es": ("/es/seguro-joyas-relojes-limite-por-objeto/", "es"),
    "nl": ("/nl/sieraden-horloges-verzekering-spanje/", "nl"),
    "it": ("/it/assicurazione-gioielli-orologi-spagna/", "it-IT"),
    "pl": ("/pl/ubezpieczenie-bizuterii-zegarkow-hiszpania/", "pl-PL"),
    "se": ("/se/smycken-klockor-forsakring-spanien/", "sv-SE"),
    "dk": ("/dk/smykker-ure-forsikring-spanien/", "da-DK"),
    "zh": ("/zh/jewellery-watch-insurance-spain/", "zh-CN"),
    "il": ("/il/jewellery-watch-insurance-spain/", "he-IL"),
}
