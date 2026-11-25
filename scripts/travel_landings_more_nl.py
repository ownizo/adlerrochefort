# -*- coding: utf-8 -*-
"""NL travel insurance landings and guide — 25 Nov 2026 (residents in the Netherlands).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"nl": dict(home_crumb="Reisverzekering", others="Reisverzekering vergelijken per reis",
                 guides="Gidsen reisverzekering", tool_h="Vergelijk polissen voor deze reis",
                 tool_p="Live premies van meerdere verzekeraars, eerst gesorteerd op medische dekking. Pas de velden aan uw reis aan.",
                 faq_h="Veelgestelde vragen", rel_h="Lees ook", main_link="Alle reizen: premium reisverzekeringen vergelijken",
                 who_h="Wie doet wat", cta="Premium polissen vergelijken")}
P = {"nl": {}}
N = P["nl"]
IPMI = "/nl/internationale-zorgverzekering/"

N["usa"] = dict(
    slug="verenigde-staten", preset=dict(dest="US", intent="forTourism"),
    title="Reisverzekering Amerika — Vergelijk Hoge Medische Dekking | Adler & Rochefort",
    desc="Vergelijk reisverzekeringen voor de Verenigde Staten op medische kosten, repatriëring en annulering. Premium polissen van meerdere verzekeraars, gesorteerd op bescherming.",
    crumb="Verenigde Staten", eyebrow="Reisverzekering voor Amerika",
    h1="Reisverzekering voor Amerika: vergelijk eerst de medische dekking",
    lead="De VS heeft de duurste zorg ter wereld voor een bezoeker. Vergelijk polissen van meerdere verzekeraars, gesorteerd op medische dekking, met de bestemming al ingevuld.",
    sections=[
        ("Waarom de VS een andere polis vraagt", "<p>Ziekenhuizen rekenen privétarieven en een opname met operatie loopt snel in de honderdduizenden. De basisverzekering vergoedt spoedzorg in het buitenland maximaal tegen Nederlands tarief — een fractie van een Amerikaanse rekening. Veel ‘wereld’-polissen sluiten de VS en Canada uit tenzij u die zone kiest.</p>"),
        ("Wat u vergelijkt", "<ul><li><strong>Medische kosten</strong>: hoog of onbeperkt.</li><li><strong>Directe betaling</strong> aan het ziekenhuis.</li><li><strong>Repatriëring tegen werkelijke kosten</strong>, ambulancevliegtuig inbegrepen.</li><li><strong>Aansprakelijkheid</strong>: Amerikaanse schadevergoedingen zijn hoog.</li><li><strong>Annulering</strong> afgestemd op de niet-restitueerbare reiskosten.</li></ul>"),
        ("ESTA is verplicht, verzekering niet", "<p>Juist daarom zijn veel reizigers onderverzekerd. De EHIC geldt niet in de VS.</p>"),
    ],
    faq=[
        ("Is een reisverzekering verplicht voor de VS?", "Nee, wel een ESTA. Zonder verzekering betaalt u alle zorgkosten zelf."),
        ("Vergoedt mijn basisverzekering zorg in Amerika?", "Spoedzorg tot maximaal het Nederlandse tarief; het verschil met de Amerikaanse rekening betaalt u zelf."),
        ("Hoeveel medische dekking heb ik nodig?", "Zo hoog als redelijk mogelijk, met directe betaling."),
    ],
)

N["annual"] = dict(
    slug="doorlopende-reisverzekering", preset=dict(intent="annual"),
    title="Doorlopende Reisverzekering — Premium Jaarpolissen Vergelijken | Adler & Rochefort",
    desc="Vergelijk doorlopende reisverzekeringen op medische kosten, repatriëring en annulering. Eén premium polis voor alle reizen van het jaar, meerdere verzekeraars.",
    crumb="Doorlopend", eyebrow="Doorlopende reisverzekering",
    h1="Doorlopende reisverzekering: één premium polis voor alle reizen",
    lead="Drie of meer reizen per jaar — zakelijk, naar uw tweede huis in Portugal of Spanje, naar familie of voor plezier: een jaarpolis dekt elke reis.",
    sections=[
        ("Wanneer doorlopend loont", "<ul><li><strong>Vaak zakelijk op reis</strong>.</li><li><strong>Eigenaren van een tweede huis</strong> in het buitenland.</li><li><strong>Gezinnen</strong> met weekendjes weg en één verre reis.</li></ul>"),
        ("Waar u op let", "<ul><li><strong>Maximaal aantal dagen per reis</strong> — vaak beperkt.</li><li><strong>Dekkingsgebied</strong> voor uw verste reis.</li><li><strong>Annulering</strong> per reis of per jaar.</li><li><strong>Leeftijdsgrenzen</strong>.</li></ul>"),
        ("Doorlopend of internationale zorgverzekering?", "<p>Woont u het grootste deel van het jaar in het buitenland, kijk dan naar een <a href=\"" + IPMI + "\">internationale zorgverzekering</a>.</p>"),
    ],
    faq=[
        ("Hoeveel reizen zijn gedekt?", "Alle reizen binnen 12 maanden, binnen het maximum aantal dagen per reis."),
        ("Is het goedkoper dan losse polissen?", "Vaak vanaf ongeveer drie reizen per jaar."),
        ("Geldt het in Nederland?", "Meestal alleen onder voorwaarden, zoals overnachtingen."),
    ],
)

N["ski"] = dict(
    slug="wintersport", preset=dict(intent="forTourism", sports=True),
    title="Wintersportverzekering — Vergelijk Bergredding en Medische Kosten | Adler & Rochefort",
    desc="Vergelijk wintersportverzekeringen: bergredding, medische kosten, repatriëring, aansprakelijkheid en materiaal. Premium polissen, gesorteerd op bescherming.",
    crumb="Wintersport", eyebrow="Wintersportverzekering",
    h1="Wintersportverzekering: vergelijk redding, medische kosten en aansprakelijkheid",
    lead="Skiën en snowboarden zijn een van de grootste oorzaken van reisclaims, en veel standaardpolissen sluiten ze uit. Vergelijk polissen met de wintersportdekking al aangevinkt.",
    sections=[
        ("Wat een wintersportpolis moet betalen", "<ul><li><strong>Redding en evacuatie</strong> per slee, sneeuwscooter of helikopter.</li><li><strong>Medische kosten</strong> in bergklinieken, vaak privé.</li><li><strong>Repatriëring</strong> na een breuk.</li><li><strong>Aansprakelijkheid</strong> bij een botsing.</li><li><strong>Materiaal, skipas en lessen</strong>, afhankelijk van de polis.</li></ul>"),
        ("Off-piste: de uitsluiting die telt", "<p>Veel polissen dekken alleen gemarkeerde, geopende pistes. Off-piste, toerskiën en heliskiën kunnen zijn uitgesloten of een gids vereisen.</p>"),
        ("Oostenrijk, Zwitserland, Frankrijk en verder", "<p>In de Alpen lopen redding en privéklinieken snel op, ook met EHIC. In Noord-Amerika en Japan moet de medische dekking hoog zijn.</p>"),
    ],
    faq=[
        ("Dekt een gewone reisverzekering wintersport?", "Vaak niet of alleen met wintersportmodule, hier aangevinkt."),
        ("Is helikopterredding gedekt?", "In veel polissen met sportmodule, binnen het bedrag voor redding."),
        ("Vergoedt de basisverzekering bergredding?", "In de regel niet; de EHIC dekt alleen publieke zorg tegen lokale voorwaarden."),
    ],
)

N["cruise"] = dict(
    slug="cruise", preset=dict(intent="cruise"),
    title="Reisverzekering Cruise — Vergelijk Evacuatie en Scheepsarts | Adler & Rochefort",
    desc="Vergelijk reisverzekeringen voor cruises: zorg aan boord, evacuatie op zee, gemiste vertrek en annulering. Premium polissen van meerdere verzekeraars.",
    crumb="Cruise", eyebrow="Reisverzekering voor cruises",
    h1="Cruiseverzekering: vergelijk evacuatie en zorg aan boord",
    lead="Een cruise lijkt de veiligste vakantie, tot iemand op zee ziek wordt. Het medisch centrum aan boord rekent privétarieven en een evacuatie kan duurder zijn dan de reis.",
    sections=[
        ("Waar cruisepolissen verschillen", "<ul><li><strong>Zorg aan boord</strong>: de EHIC wordt op zee meestal niet geaccepteerd.</li><li><strong>Medische evacuatie</strong> per helikopter of schip.</li><li><strong>Gemist vertrek</strong> en nareizen naar de volgende haven.</li><li><strong>Annulering</strong> op de cruiseprijs.</li></ul>"),
        ("Het juiste dekkingsgebied", "<p>Een Middellandse Zee-cruise kan Noord-Afrika aandoen; een Caribische cruise vanuit Miami vraagt de VS-zone.</p>"),
        ("De verzekering van de rederij", "<p>Handig, maar vergelijk de medische en repatriëringsbedragen met de aanbiedingen hier.</p>"),
    ],
    faq=[
        ("Betaalt de reisverzekering de scheepsarts?", "Cruisepolissen meestal wel, binnen de medische dekking."),
        ("Is evacuatie van het schip gedekt?", "In de meeste polissen via repatriëring en medisch vervoer."),
        ("Heb ik de VS-zone nodig voor het Caribisch gebied?", "Als u vertrekt vanuit of aan land gaat in een Amerikaanse haven, ja."),
    ],
)

N["nomad"] = dict(
    slug="digitale-nomaden", preset=dict(intent="digitalNomad"),
    title="Reisverzekering Digitale Nomaden — Polissen Vergelijken | Adler & Rochefort",
    desc="Vergelijk reisverzekeringen voor digitale nomaden en remote workers: medische kosten, repatriëring en aansprakelijkheid voor maanden in het buitenland.",
    crumb="Digitale nomaden", eyebrow="Reisverzekering voor digitale nomaden",
    h1="Reisverzekering voor digitale nomaden: maanden weg, goed verzekerd",
    lead="Voorjaar in Lissabon, zomer op Bali, winter in Mexico-Stad: een levensstijl, geen vakantie. Vergelijk nomadenpolissen op medische dekking en repatriëring.",
    sections=[
        ("Wat een nomadenpolis moet doen", "<ul><li><strong>Lange periodes</strong>, vaak per maand verlengbaar.</li><li><strong>Meerdere landen</strong>, de VS inbegrepen indien nodig.</li><li><strong>Hoge medische dekking en repatriëring</strong>.</li><li><strong>Aansprakelijkheid</strong> in huurwoning en coworking.</li><li><strong>Apparatuur</strong>: lage limieten per voorwerp.</li></ul>"),
        ("Nomadenvisa", "<p>Het Portugese D8-visum en het Spaanse nomadenvisum vragen een zorgdekking; per consulaat verschilt wat wordt geaccepteerd. Controleer de exacte eis.</p>"),
        ("Wanneer een zorgverzekering nodig is", "<p>Woont u het grootste deel van het jaar in één land, kijk dan naar een <a href=\"" + IPMI + "\">internationale zorgverzekering</a>.</p>"),
    ],
    faq=[
        ("Kan ik afsluiten als ik al vertrokken ben?", "Sommige polissen staan dat toe, vaak met wachttijd."),
        ("Ben ik in Nederland gedekt?", "Meestal alleen bij korte bezoeken, als dat al zo is."),
        ("Is mijn laptop gedekt?", "Binnen de bagagedekking, met een lage limiet per voorwerp."),
    ],
)

N["longstay"] = dict(
    slug="lang-verblijf", preset=dict(intent="expat"),
    title="Reisverzekering Lang Verblijf — Overwinteren en Sabbatical | Adler & Rochefort",
    desc="Vergelijk reisverzekeringen voor een lang verblijf: overwinteren in Portugal of Spanje, sabbatical, de maanden voor een emigratie. Medische kosten, repatriëring en aansprakelijkheid.",
    crumb="Lang verblijf", eyebrow="Reisverzekering voor lang verblijf",
    h1="Reisverzekering voor een lang verblijf: van overwinteren tot de maanden voor emigratie",
    lead="Een sabbatical, een winter aan de Algarve, een seizoen aan de Costa del Sol of de overgang vóór emigratie. Vergelijk langverblijfpolissen op de bedragen die tellen.",
    sections=[
        ("Voor wie", "<ul><li><strong>Overwinteraars</strong> van drie tot zes maanden.</li><li><strong>Sabbaticals</strong> met meerdere landen.</li><li><strong>Emigranten</strong> vóór hun verblijfsvergunning en lokale verzekering.</li></ul>"),
        ("Wat u vergelijkt", "<ul><li><strong>Maximale duur</strong> en verlenging vanuit het buitenland.</li><li><strong>Medische kosten</strong> en directe betaling.</li><li><strong>Repatriëring</strong> tegen werkelijke kosten.</li><li><strong>Bezoeken aan Nederland</strong> tussendoor.</li><li><strong>Bestaande aandoeningen</strong>: altijd melden.</li></ul>"),
        ("Grens van een reisverzekering", "<p>Wordt Portugal of Spanje uw woonland, dan hebt u daar een zorgverzekering nodig — zie <a href=\"" + IPMI + "\">internationale zorgverzekering</a>.</p>"),
    ],
    faq=[
        ("Hoe lang kan het?", "Afhankelijk van de polis enkele maanden tot een jaar."),
        ("Mag ik tussendoor naar huis?", "Vaak voor korte bezoeken; controleer de voorwaarden."),
        ("Ben ik bij overwinteren via de basisverzekering gedekt?", "Zie onze gids over overwinteren: de basisverzekering vergoedt maximaal Nederlands tarief."),
    ],
)

N["cancel"] = dict(
    slug="annuleringsverzekering", preset=dict(intent="cancellation"),
    title="Annuleringsverzekering voor Dure Reizen — Vergelijken | Adler & Rochefort",
    desc="Vergelijk annuleringsverzekeringen voor safari's, villa's, jachtcharters en verre reizen: verzekerd bedrag, gedekte redenen en reisonderbreking. Meerdere verzekeraars.",
    crumb="Annulering", eyebrow="Annuleringsverzekering",
    h1="Annuleringsverzekering voor reizen die u niet wilt verliezen",
    lead="Een safarilodge, een villa voor de familie, een jachtcharter of een verre reis een jaar vooruit geboekt: niet-restitueerbare aanbetalingen tellen snel op.",
    sections=[
        ("Stem het bedrag af op de reis", "<p>Het verzekerde bedrag moet de volledige niet-restitueerbare reissom dekken voor alle reizigers.</p>"),
        ("Wat u vergelijkt", "<ul><li><strong>Gedekte redenen</strong>: vaste lijst of elke gegronde reden.</li><li><strong>Reisonderbreking</strong> en vervroegde terugkeer.</li><li><strong>Afsluittermijn</strong>: direct bij boeking.</li><li><strong>Eigen risico</strong>.</li><li><strong>Bestaande aandoeningen</strong> van reizigers en naasten.</li></ul>"),
        ("Alleen annulering of volledig pakket", "<p>Voor de VS en verre reizen loont een volledig pakket: daar telt de medische dekking het zwaarst.</p>"),
    ],
    faq=[
        ("Wanneer sluit ik de annuleringsverzekering af?", "Bij boeking of de eerste aanbetaling."),
        ("Dekt ze als ik geen zin meer heb?", "Nee, alleen de genoemde redenen."),
        ("Zijn aanbetalingen voor villa of charter gedekt?", "Als het niet-restitueerbare reiskosten zijn, binnen het bedrag."),
    ],
)

N["group"] = dict(
    slug="groepsreis", preset=dict(intent="groupTravel"),
    title="Reisverzekering Groepsreis — Bruiloften, Golf en Bedrijfsuitjes | Adler & Rochefort",
    desc="Vergelijk reisverzekeringen voor groepen: bruiloften in het buitenland, golfgroepen, familiereünies en bedrijfsreizen. Eén zoekopdracht voor de hele groep.",
    crumb="Groepsreis", eyebrow="Reisverzekering voor groepen",
    h1="Reisverzekering voor groepen: één zoekopdracht voor iedereen",
    lead="Een bruiloft in Comporta, een golfweek aan de Algarve, een familiereünie op Mallorca of een bedrijfsretraite. Vergelijk groepspolissen met alle reizigers in één offerte.",
    sections=[
        ("Typische groepsreizen", "<ul><li><strong>Bruiloften in het buitenland</strong>.</li><li><strong>Golfgroepen</strong>.</li><li><strong>Reizen met meerdere generaties</strong>.</li><li><strong>Bedrijfsretraites en incentives</strong>.</li></ul>"),
        ("Waar u op let", "<ul><li><strong>Groepsgrootte</strong> en gezamenlijk woonland.</li><li><strong>Leeftijden</strong>: één oudere reiziger verandert de premie.</li><li><strong>Annulering</strong> als één persoon uitvalt.</li><li><strong>Aansprakelijkheid</strong> bij golf, boot en sport.</li></ul>"),
        ("Gasten uit andere landen", "<p>Elke gast gebruikt deze vergelijking met zijn eigen woonland.</p>"),
    ],
    faq=[
        ("Hoeveel personen per offerte?", "Tot 12 reizigers per zoekopdracht."),
        ("Moet iedereen dezelfde polis hebben?", "Binnen één offerte wel."),
        ("Kunnen Belgische gasten afsluiten?", "Ja, met België als woonland."),
    ],
)

N["study"] = dict(
    slug="studenten", preset=dict(intent="studyInternship"),
    title="Reisverzekering Studeren in het Buitenland — Vergelijken | Adler & Rochefort",
    desc="Vergelijk verzekeringen voor studie, stage of au pair in het buitenland: medische kosten, repatriëring en aansprakelijkheid voor het hele studiejaar.",
    crumb="Studenten", eyebrow="Verzekering voor studeren in het buitenland",
    h1="Studeren in het buitenland: een jaar weg, goed verzekerd",
    lead="Een semester in Londen, een master in de VS, een stage in Singapore. Universiteiten stellen minimumeisen; ouders willen meestal meer.",
    sections=[
        ("Wat de universiteit vraagt — en wat ouders zouden moeten willen", "<ul><li><strong>Het minimum van de universiteit</strong> is een drempel, geen doel.</li><li><strong>Hoge medische dekking</strong>, essentieel in VS en Canada.</li><li><strong>Repatriëring</strong> en overkomst van een familielid.</li><li><strong>Aansprakelijkheid</strong> in studentenhuisvesting.</li></ul>"),
        ("VS en Verenigd Koninkrijk", "<p>Veel Amerikaanse universiteiten eisen hun eigen plan of een waiver met minimumbedragen.</p>"),
        ("Stage en au pair", "<p>De vergelijking omvat studie, stage en au pair.</p>"),
    ],
    faq=[
        ("Accepteert de universiteit deze polis?", "Vergelijk de bedragen met de schriftelijke eisen van de universiteit."),
        ("Kunnen ouders afsluiten?", "Ja, met de gegevens van de reizende student."),
        ("Is het hele studiejaar gedekt?", "Studiepolissen dekken lange periodes; de maximale duur staat in elk aanbod."),
    ],
)

N["winter"] = dict(
    slug="overwinteren-basisverzekering", kind="guide", preset=dict(dest="ES", intent="expat"),
    title="Overwinteren in Spanje of Portugal: Basisverzekering en Reisverzekering | Adler & Rochefort",
    desc="Overwinteren aan de Costa Blanca of de Algarve? Wat de basisverzekering en de EHIC vergoeden, waar de gaten zitten en hoe u een reisverzekering voor maanden vergelijkt.",
    crumb="Overwinteren", eyebrow="Overwinteren: basisverzekering of reisverzekering?",
    h1="Overwinteren in Spanje of Portugal: wat de basisverzekering vergoedt — en wat niet",
    lead="Elk jaar brengen tienduizenden Nederlanders de winter door in Spanje of Portugal. De basisverzekering gaat mee, maar niet onbeperkt. Waar u op moet letten.",
    sections=[
        ("Wat de basisverzekering doet", "<p>Spoedeisende zorg in het buitenland wordt vergoed tot maximaal het Nederlandse tarief; via de EHIC hebt u toegang tot publieke zorg tegen lokale voorwaarden. Voor een privékliniek in een kustplaats kan het verschil fors zijn.</p>"),
        ("De gaten bij een lang verblijf", "<ul><li><strong>Privéklinieken</strong> boven het Nederlandse tarief.</li><li><strong>Repatriëring</strong> naar Nederland valt niet onder de basisverzekering.</li><li><strong>Maximale reisduur</strong> van uw doorlopende reisverzekering is vaak korter dan een hele winter.</li><li><strong>Woonlandregels</strong>: wie te lang weg is, kan zijn status als ingezetene in gevaar brengen — controleer de regels voor uw situatie.</li></ul>"),
        ("Wat u vergelijkt voor een winter", "<p>Een langverblijfpolis voor de hele periode, met hoge medische dekking en repatriëring tegen werkelijke kosten. De vergelijking is ingesteld op Spanje als bestemming; wijzig naar Portugal of meerdere landen.</p>"),
    ],
    faq=[
        ("Dekt mijn doorlopende reisverzekering de hele winter?", "Vaak niet: veel polissen hebben een maximum aantal dagen per reis. Controleer dit vóór vertrek."),
        ("Vergoedt de basisverzekering een privékliniek in Spanje?", "Tot maximaal het Nederlandse tarief; het verschil is voor eigen rekening."),
        ("Is repatriëring gedekt?", "Niet door de basisverzekering; wel door reisverzekeringen, tegen de voorwaarden van de polis."),
    ],
)
