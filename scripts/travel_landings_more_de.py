# -*- coding: utf-8 -*-
"""DE travel insurance landings (other trip types) and guides — 25 Nov 2026.
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"de": dict(guides="Ratgeber nach Reisesituation")}
P = {"de": {}}
D = P["de"]

D["nomad"] = dict(
    slug="digitale-nomaden", preset=dict(intent="digitalNomad"),
    title="Reiseversicherung für digitale Nomaden — Premium-Tarife vergleichen | Adler & Rochefort",
    desc="Reiseversicherung für digitale Nomaden und Remote Worker im Vergleich: Behandlungskosten, Rücktransport und Haftpflicht für Monate im Ausland. Mehrere Versicherer, nach Schutz sortiert.",
    crumb="Digitale Nomaden", eyebrow="Reiseversicherung für digitale Nomaden",
    h1="Reiseversicherung für digitale Nomaden: Monate im Ausland, richtig abgesichert",
    lead="Frühling in Lissabon, Sommer auf Bali, Winter in Mexiko-Stadt: Das ist ein Lebensstil, kein Urlaub — und eine normale Urlaubspolice ist dafür nicht gemacht. Vergleichen Sie Nomaden-Tarife mehrerer Versicherer, nach Behandlungskosten und Rücktransport sortiert.",
    sections=[
        ("Was eine Nomaden-Police leisten muss", "<ul><li><strong>Lange Zeiträume</strong>, oft monatlich verlängerbar, ohne festes Rückreisedatum.</li><li><strong>Mehrere Länder</strong> in einer Police — inklusive USA, wenn Sie dort Station machen.</li><li><strong>Hohe Behandlungskosten und Rücktransport</strong> zu tatsächlichen Kosten, mit 24/7-Assistance.</li><li><strong>Haftpflicht</strong> für Schäden in der Mietwohnung oder im Coworking.</li><li><strong>Technik.</strong> Laptops und Kameras sind meist nur mit niedrigen Summen pro Gegenstand versichert.</li></ul>"),
        ("Nomaden-Visa: was das Konsulat verlangt", "<p>Portugals D8 und Spaniens Visum für digitale Nomaden verlangen einen Krankenversicherungsschutz. Je nach Konsulat und Verfahrensstand wird für die erste Zeit eine Reiseversicherung akzeptiert oder eine Jahres-Krankenversicherung verlangt. Prüfen Sie den genauen Wortlaut — siehe <a href=\"/de/digitale-nomaden-visum-spanien-versicherung/\">Digital-Nomad-Visum Spanien</a> und <a href=\"/de/reiseversicherung-visum-d7-d8-portugal/\">Visum D7 und D8 Portugal</a>.</p>"),
        ("Wann eine Krankenversicherung nötig wird", "<p>Wer sich den Großteil des Jahres in einem Land niederlässt, braucht keine Reise-, sondern eine <a href=\"/de/internationale-krankenversicherung/\">internationale Krankenversicherung</a>.</p>"),
    ],
    faq=[
        ("Kann ich die Versicherung abschließen, wenn ich schon unterwegs bin?", "Manche Tarife erlauben das, oft mit Wartezeit; andere nur vor der Abreise. Die Bedingungen stehen in den Unterlagen jedes Angebots."),
        ("Bin ich im Heimatland versichert?", "Meist nur bei kurzen Besuchen, wenn überhaupt. Lesen Sie den Geltungsbereich."),
        ("Ist mein Laptop versichert?", "Meist im Rahmen der Reisegepäckversicherung mit niedriger Summe pro Gegenstand."),
    ],
    related=[],
)

D["longstay"] = dict(
    slug="langzeitreise", preset=dict(intent="expat"),
    title="Langzeit-Reiseversicherung — Überwintern & Sabbatical vergleichen | Adler & Rochefort",
    desc="Langzeit-Reiseversicherung für Sabbaticals, Überwintern in Portugal oder Spanien und die Monate vor dem Umzug: Behandlungskosten, Rücktransport, Haftpflicht. Mehrere Versicherer.",
    crumb="Langzeitreise", eyebrow="Langzeit-Reiseversicherung",
    h1="Langzeit-Reiseversicherung: vom Winter an der Algarve bis zu den Monaten vor dem Umzug",
    lead="Ein Sabbatical, ein Winter an der Algarve, eine Saison an der Costa del Sol oder die Monate zwischen Ankunft in Portugal oder Spanien und Aufenthaltstitel. Vergleichen Sie Langzeit-Tarife nach den Summen, auf die es bei Monaten im Ausland ankommt.",
    sections=[
        ("Für wen Langzeitschutz gedacht ist", "<ul><li><strong>Überwinterer</strong> mit drei bis sechs Monaten in Portugal oder Spanien.</li><li><strong>Sabbaticals und Auszeiten</strong> mit mehreren Ländern.</li><li><strong>Neuankömmlinge</strong> vor dem Aufenthaltstitel — siehe <a href=\"/de/versicherungsluecke-ankunft-aufenthaltstitel-portugal-spanien/\">Versicherungslücke bis zum Aufenthaltstitel</a>.</li><li><strong>Familien</strong>, deren Kinder ein Trimester vor Ort zur Schule gehen.</li></ul>"),
        ("Worauf Sie achten sollten", "<ul><li><strong>Höchstdauer</strong> und Verlängerung aus dem Ausland.</li><li><strong>Behandlungskosten</strong> pro Person und Direktabrechnung.</li><li><strong>Rücktransport</strong> zu tatsächlichen Kosten.</li><li><strong>Heimatbesuche</strong> während der Reise.</li><li><strong>Vorerkrankungen</strong>: jeder Versicherer behandelt sie anders — angeben.</li></ul>"),
        ("Die Grenze der Reiseversicherung", "<p>Sobald Portugal oder Spanien Ihr Wohnsitz wird, brauchen Sie dort eine Krankenversicherung — <a href=\"/de/internationale-krankenversicherung/\">international</a> oder lokal.</p>"),
    ],
    faq=[
        ("Wie lange kann eine Langzeitreise versichert werden?", "Je nach Tarif mehrere Monate bis zu einem Jahr; die Höchstdauer steht in jedem Angebot."),
        ("Darf ich zwischendurch nach Hause?", "Viele Tarife erlauben kurze Heimatbesuche. Prüfen Sie die Bedingungen."),
        ("Reicht die GKV beim Überwintern?", "In der EU nur über die EHIC zu lokalen Bedingungen, ohne Privatklinik und Rücktransport."),
    ],
    related=[("/de/gkv-ehic-ausland-portugal-spanien-reiseversicherung/", "GKV und EHIC in Portugal und Spanien: reicht das?")],
)

D["cancel"] = dict(
    slug="reiseruecktritt", preset=dict(intent="cancellation"),
    title="Reiserücktrittsversicherung für hochwertige Reisen vergleichen | Adler & Rochefort",
    desc="Reiserücktrittsversicherung für Safaris, Fincas, Yachtcharter und Fernreisen im Vergleich: Versicherungssumme, versicherte Gründe, Reiseabbruch. Mehrere Versicherer, online abschließen.",
    crumb="Reiserücktritt", eyebrow="Reiserücktrittsversicherung",
    h1="Reiserücktrittsversicherung für Reisen, deren Verlust weh tun würde",
    lead="Eine Safari-Lodge, eine Finca für die Familie, ein Yachtcharter oder eine Fernreise, ein Jahr im Voraus gebucht: Nicht erstattbare Anzahlungen summieren sich schnell. Vergleichen Sie Rücktrittstarife danach, was sie wirklich zahlen.",
    sections=[
        ("Die Summe an der Reise ausrichten", "<p>Die Rücktrittssumme sollte den gesamten nicht erstattbaren Reisepreis decken: Flüge, Unterkunft, Charter, Guides, Tickets — für alle Reisenden. Ein Tarif mit wenigen Tausend Euro schützt keine sechsstellige Buchung.</p>"),
        ("Worauf Sie achten sollten", "<ul><li><strong>Versicherte Gründe</strong>: feste Liste (Krankheit, Tod eines Angehörigen, Schaden am Zuhause) oder jeder begründete Anlass.</li><li><strong>Reiseabbruch</strong>: nicht genutzte Leistungen und Mehrkosten der Rückreise.</li><li><strong>Abschlussfrist</strong>: am besten direkt bei Buchung.</li><li><strong>Selbstbehalt</strong> pro Fall und Person.</li><li><strong>Vorerkrankungen</strong> der Reisenden und naher Angehöriger.</li></ul>"),
        ("Nur Rücktritt oder Komplettschutz", "<p>Wer bereits starken Krankenschutz hat, kommt mit einem reinen Rücktrittstarif aus. Für Fernreisen und die USA lohnt der Vergleich von Komplettpaketen.</p>"),
    ],
    faq=[
        ("Wann sollte ich die Reiserücktrittsversicherung abschließen?", "Direkt bei Buchung oder Anzahlung; Gründe vor Abschluss sind meist nicht versichert."),
        ("Zahlt sie, wenn ich keine Lust mehr habe?", "Nein. Nur die in der Police genannten Gründe oder, wo angeboten, jeder begründete Anlass."),
        ("Sind Anzahlungen für Finca und Yacht versichert?", "Wenn es nicht erstattbare Reisekosten innerhalb der Summe sind. Buchungsbedingungen und Belege aufbewahren."),
    ],
    related=[],
)

D["group"] = dict(
    slug="gruppenreise", preset=dict(intent="groupTravel"),
    title="Gruppenreiseversicherung — Hochzeiten, Golfgruppen & Firmenreisen | Adler & Rochefort",
    desc="Gruppenreiseversicherung im Vergleich für Hochzeiten im Ausland, Golfgruppen, Familientreffen und Firmen-Retreats in Portugal, Spanien und weltweit. Eine Suche für die ganze Gruppe.",
    crumb="Gruppenreise", eyebrow="Gruppenreiseversicherung",
    h1="Gruppenreiseversicherung: eine Suche für die ganze Gruppe",
    lead="Eine Hochzeit in Comporta, eine Golfwoche an der Algarve, ein Familientreffen auf Mallorca oder ein Führungskräfte-Retreat in Madrid. Vergleichen Sie Gruppentarife mit allen Reisenden in einem Angebot.",
    sections=[
        ("Typische Gruppenreisen", "<ul><li><strong>Hochzeiten im Ausland</strong> mit Gästen aus mehreren Ländern.</li><li><strong>Golfgruppen</strong> — siehe <a href=\"/de/golfreise-versicherung-portugal-spanien/\">Golfreise Portugal und Spanien</a>.</li><li><strong>Mehrgenerationen-Reisen</strong>, bei denen Altersgrenzen zählen.</li><li><strong>Firmen-Retreats und Incentives</strong>.</li></ul>"),
        ("Worauf Sie bei Gruppen achten sollten", "<ul><li><strong>Gruppengröße</strong> und ob alle im selben Land wohnen müssen.</li><li><strong>Alter</strong>: ein älterer Reisender kann Preis oder Annahme verändern.</li><li><strong>Rücktritt</strong>, wenn eine Person ausfällt.</li><li><strong>Haftpflicht</strong> bei Golf, Boot und Sport.</li></ul>"),
        ("Gäste aus verschiedenen Ländern", "<p>Reiseversicherungen richten sich nach dem Wohnsitzland. Gäste aus anderen Ländern nutzen denselben Vergleich mit ihrem eigenen Wohnsitz.</p>"),
    ],
    faq=[
        ("Wie viele Personen passen in ein Angebot?", "Bis zu 12 Reisende pro Suche; größere Gruppen führen mehrere Suchen durch."),
        ("Brauchen alle denselben Tarif?", "In einem Angebot ja. Reisende mit anderem Bedarf können separat verglichen werden."),
        ("Sind Hochzeitsgäste aus der Schweiz versichert?", "Wenn sie mit der Schweiz als Wohnsitzland abschließen, ja."),
    ],
    related=[],
)

D["study"] = dict(
    slug="studenten", preset=dict(intent="studyInternship"),
    title="Auslandsversicherung für Studenten — Premium-Tarife vergleichen | Adler & Rochefort",
    desc="Reiseversicherung für Studium, Praktikum und Au-pair im Ausland: Behandlungskosten, Rücktransport, Haftpflicht für das ganze Studienjahr. Mehrere Versicherer, online abschließen.",
    crumb="Studenten", eyebrow="Auslandsversicherung für Studenten",
    h1="Auslandsversicherung für Studenten: ein Jahr im Ausland, richtig abgesichert",
    lead="Ein Semester in London, ein Master in den USA, ein Praktikum in Singapur. Universitäten setzen Mindestsummen; Eltern wollen meist mehr. Vergleichen Sie Tarife nach Behandlungskosten und Rücktransport.",
    sections=[
        ("Was Universitäten verlangen — und was Eltern wollen sollten", "<ul><li><strong>Die Mindestanforderung</strong> der Universität ist eine Schwelle, kein Ziel.</li><li><strong>Hohe Behandlungskosten</strong>, unverzichtbar in USA und Kanada.</li><li><strong>Rücktransport</strong> und Besuch eines Angehörigen am Krankenbett.</li><li><strong>Haftpflicht</strong> im Wohnheim.</li></ul>"),
        ("USA, Großbritannien und der Rest der Welt", "<p>US-Universitäten verlangen oft einen eigenen Tarif oder ein Waiver-Formular mit Mindestsummen — vor dem Abschluss prüfen.</p>"),
        ("Praktikum und Au-pair", "<p>Praktika bei einem Arbeitgeber im Ausland können Haftpflicht und arbeitsbezogenen Schutz erfordern. Der Vergleich enthält Studium, Praktikum und Au-pair.</p>"),
    ],
    faq=[
        ("Akzeptiert die Universität diese Police?", "Vergleichen Sie die Summen mit den schriftlichen Anforderungen der Universität."),
        ("Können Eltern für ein volljähriges Kind abschließen?", "Ja. Reisedaten und Alter werden für die reisende Person eingegeben."),
        ("Ist das ganze Studienjahr versichert?", "Studententarife decken meist lange Zeiträume; die Höchstdauer steht im Angebot."),
    ],
    related=[],
)

# ------------------------------------------------------------------ guides
D["swiss"] = dict(
    slug="schweiz-grundversicherung-ausland", kind="guide", preset=dict(residence="CH", intent="forTourism"),
    title="Schweizer Grundversicherung im Ausland: reicht sie in Portugal & Spanien? | Adler & Rochefort",
    desc="Was die Schweizer Grundversicherung bei Reisen nach Portugal und Spanien zahlt, wo die Lücken sind — Privatklinik, Rücktransport, Bergung — und wie Sie Reiseversicherungen vergleichen.",
    crumb="Schweiz: Grundversicherung", eyebrow="Aus der Schweiz: Grundversicherung oder Reiseversicherung?",
    h1="Aus der Schweiz nach Portugal und Spanien: was die Grundversicherung zahlt — und was nicht",
    lead="Schweizer Ferienhausbesitzer an der Algarve oder auf Mallorca gehen oft davon aus, gut versichert zu sein. Die Grundversicherung reist mit, aber nur begrenzt.",
    sections=[
        ("Was die Grundversicherung im Ausland leistet", "<p>Für Notfallbehandlungen im Ausland vergütet die obligatorische Krankenpflegeversicherung in der Regel höchstens das Doppelte dessen, was die gleiche Behandlung im Wohnkanton gekostet hätte. In EU- und EFTA-Staaten gilt zusätzlich die Europäische Krankenversicherungskarte für öffentliche Behandlung zu lokalen Bedingungen.</p>"),
        ("Die Lücken", "<ul><li><strong>Privatkliniken</strong>, in Feriengebieten oft die erste Anlaufstelle, rechnen über diesen Beträgen ab.</li><li><strong>Rücktransport in die Schweiz</strong> ist in der Grundversicherung nicht oder nur sehr begrenzt gedeckt.</li><li><strong>Bergung und Rettung</strong> nur mit kleinen Beiträgen.</li><li><strong>Annullierung, Gepäck und Haftpflicht</strong> gehören nicht dazu.</li></ul>"),
        ("Zusatzversicherung oder Reiseversicherung?", "<p>Viele Zusatzversicherungen enthalten eine Reisedeckung — mit eigenen Summen und Höchstdauern. Vergleichen Sie diese mit den Angeboten hier. Der Vergleich ist mit der Schweiz als Wohnsitzland voreingestellt.</p>"),
    ],
    faq=[
        ("Zahlt die Grundversicherung in Portugal?", "Notfälle bis zu den gesetzlichen Höchstbeträgen; Privatklinik, Rücktransport und Annullierung bleiben offen."),
        ("Kann ich als Schweizer hier abschließen?", "Ja. Die Schweiz ist als Wohnsitzland voreingestellt."),
        ("Brauche ich das für das Ferienhaus jedes Jahr neu?", "Wer mehrmals pro Jahr reist, vergleicht eine Jahresreiseversicherung."),
    ],
    related=[("/de/reiseversicherung/jahresreiseversicherung/", "Jahresreiseversicherung im Vergleich")],
)

D["seniors"] = dict(
    slug="senioren", kind="guide", preset=dict(intent="forTourism"),
    title="Reiseversicherung für Senioren ab 75 — Tarife vergleichen | Adler & Rochefort",
    desc="Reiseversicherung ab 75 und für Mehrgenerationen-Reisen: Altersgrenzen, Vorerkrankungen, Behandlungskosten und Rücktransport. Mehrere Versicherer im Vergleich.",
    crumb="Senioren", eyebrow="Reiseversicherung ab 75",
    h1="Reiseversicherung ab 75: worauf es bei Altersgrenzen ankommt",
    lead="Großeltern im Familienurlaub, eine Fernreise zum Hochzeitstag, ein Winter in der Sonne. Ab 75 wird die Auswahl kleiner und das Kleingedruckte wichtiger. Geben Sie das tatsächliche Alter jedes Reisenden ein.",
    sections=[
        ("Wo das Alter zählt", "<ul><li><strong>Höchstalter</strong> beim Abschluss — je nach Versicherer und Tarif; Jahrestarife sind oft strenger.</li><li><strong>Prämien nach Altersstufe</strong>.</li><li><strong>Behandlungskosten und Rücktransport</strong> — in diesem Alter das Wichtigste.</li></ul>"),
        ("Vorerkrankungen", "<p>Jeder Versicherer behandelt bestehende Erkrankungen anders: Ausschluss, Deckung bei stabilem Verlauf oder Erklärung. Geben Sie sie korrekt an — Verschweigen ist der häufigste Grund für Ablehnungen.</p>"),
        ("Mehrgenerationen-Reisen", "<p>Vergleichen Sie zuerst die ganze Familie; schränkt ein älterer Reisender die Auswahl ein, vergleichen Sie ihn separat.</p>"),
    ],
    faq=[
        ("Gibt es ein Höchstalter?", "Bei den meisten Tarifen ja, je nach Versicherer unterschiedlich. Der Vergleich zeigt nur Tarife für die eingegebenen Alter."),
        ("Sind Vorerkrankungen versichert?", "Je nach Tarif und Erkrankung. Bedingungen lesen und angeben."),
        ("Ist eine Jahrespolice ab 75 möglich?", "Manchmal, Jahrestarife sind aber beim Alter oft strenger."),
    ],
    related=[],
)

D["remote"] = dict(
    slug="expeditionen-fernreisen", kind="guide", preset=dict(intent="forTourism"),
    title="Reiseversicherung für Safari, Antarktis & Expeditionen | Adler & Rochefort",
    desc="Safari, Antarktis- und Arktis-Expeditionen, Patagonien, Himalaya: was eine Reiseversicherung bei Evakuierung aus abgelegenen Regionen zahlen muss und wie Sie Tarife vergleichen.",
    crumb="Expeditionen", eyebrow="Safari, Polarreisen und Expeditionen",
    h1="Safari, Polarreise und Expedition: Versicherung, wenn Hilfe weit weg ist",
    lead="Auf Safari in Botswana, auf einem Schiff vor der Antarktischen Halbinsel oder beim Trekking in Patagonien ist das nächste gute Krankenhaus oft einen Flug entfernt. Die Evakuierung ist das teuerste Risiko.",
    sections=[
        ("Evakuierung ist der Kern der Police", "<p>Eine medizinische Evakuierung per Kleinflugzeug, Hubschrauber oder Schiff kann mehr kosten als die Reise. Achten Sie auf Evakuierung und Rücktransport <strong>zu tatsächlichen Kosten</strong>, organisiert durch eine 24/7-Assistance.</p>"),
        ("Worauf Sie bei Expeditionen achten sollten", "<ul><li><strong>Polarreisen</strong>: Veranstalter verlangen oft eine Mindestsumme für Evakuierung.</li><li><strong>Höhe</strong>: Trekking über einer bestimmten Höhe kann die Sportoption erfordern.</li><li><strong>Aktivitäten</strong>: Kajak, Tauchen, Gletscher.</li><li><strong>Rücktritt</strong> passend zum Expeditionspreis.</li></ul>"),
        ("Wertsachen unterwegs", "<p>Kameras, Ferngläser und Uhren sind in Reisetarifen nur niedrig versichert. Für wertvolle Stücke siehe <a href=\"/de/reiseversicherung-schmuck-uhren-grenzen/\">Schmuck und Uhren auf Reisen</a>.</p>"),
    ],
    faq=[
        ("Ist eine Hubschrauber-Evakuierung versichert?", "In vielen Tarifen über Rücktransport und medizinischen Transport; Summe und Bedingungen stehen im Angebot."),
        ("Erfüllt der Tarif die Mindestanforderung meines Veranstalters?", "Vergleichen Sie die schriftliche Anforderung mit den Summen des Tarifs vor dem Abschluss."),
        ("Ist Trekking in großer Höhe versichert?", "Oft bis zu einer angegebenen Höhe oder mit Sportoption."),
    ],
    related=[],
)

D["sports"] = dict(
    slug="sport-abenteuer", kind="guide", preset=dict(intent="forTourism", sports=True),
    title="Reiseversicherung für Sport: Tauchen, Segeln, Jagd, Polo | Adler & Rochefort",
    desc="Tauchen, Segeln und Regatten, Jagd in Spanien, Polo, Reiten, Marathon, Kitesurfen: wie Sport eine Reiseversicherung verändert und wie Sie Tarife mit Sportoption vergleichen.",
    crumb="Sportreisen", eyebrow="Reiseversicherung für Sport und Abenteuer",
    h1="Reiseversicherung für Sport: Tauchen, Segeln, Jagd, Polo und mehr",
    lead="Eine Regatta vor Palma, ein Jagdwochenende bei Toledo, Tauchen im Roten Meer, Polo in Sotogrande, ein Marathon in New York. Viele Standardtarife schließen Sport aus. Vergleichen Sie Tarife mit bereits aktivierter Sportoption.",
    sections=[
        ("Warum Sport die Police verändert", "<p>Sport erhöht das Verletzungsrisiko und erfordert oft Bergung. Die meisten Versicherer teilen Aktivitäten in Kategorien ein: eingeschlossen, mit Sportoption oder ausgeschlossen. Die Liste steht in den Bedingungen.</p>"),
        ("Aktivität für Aktivität", "<ul><li><strong>Tauchen</strong>: maximale Tiefe, Brevet, Druckkammer.</li><li><strong>Segeln und Regatten</strong>: Küstenentfernung, Crew, Wettfahrten.</li><li><strong>Jagd</strong>: Haftpflicht so wichtig wie Behandlungskosten — Ausschlüsse für Schusswaffen prüfen.</li><li><strong>Reiten und Polo</strong>: oft höhere Risikokategorie.</li><li><strong>Marathon und Triathlon</strong>: Wettkämpfe werden anders behandelt als Training.</li><li><strong>Kite und Surf</strong>: siehe auch <a href=\"/de/reiseversicherung/ski/\">Skiurlaub</a> für Wintersport.</li></ul>"),
        ("Haftpflicht auf dem Platz", "<p>Bei Sport mit Pferden, Booten oder Waffen sollten Sie die Haftpflichtsumme genau vergleichen.</p>"),
    ],
    faq=[
        ("Ist meine Sportart versichert?", "Prüfen Sie die Aktivitätenliste; die hier aktivierte Sportoption erweitert den Schutz."),
        ("Sind Wettkämpfe versichert?", "Oft nicht oder nur Amateurveranstaltungen."),
        ("Ist meine Ausrüstung versichert?", "Manche Sportoptionen enthalten Ausrüstung bis zu einer Summe."),
    ],
    related=[("/de/golfreise-versicherung-portugal-spanien/", "Golfreise nach Portugal und Spanien")],
)
