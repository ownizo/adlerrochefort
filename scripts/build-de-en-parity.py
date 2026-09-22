#!/usr/bin/env python3
"""One-shot: make /de match /en (clusters, PT/ES split, no blog).

Does not regenerate dedicated DE wizards. Does not delete any existing /de URL.
Run from repo root: python3 scripts/build-de-en-parity.py
"""
from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

LANG_HEADING = "Unsere Arbeitssprache ist Englisch"
LANG_P1 = (
    "Diese Seite ist auf Deutsch. Intern ist unsere Arbeitssprache Englisch. "
    "Angebote, Erläuterungen zu den Bedingungen, Korrespondenz und Schadenabwicklung "
    "stellen wir Ihnen mit KI-Unterstützung auf Deutsch bereit — so klar, dass Sie den Unterschied kaum merken."
)
LANG_P2 = (
    "Policen portugiesischer und spanischer Versicherer werden gesetzlich auf Portugiesisch "
    "bzw. Spanisch ausgestellt. Wir sorgen dafür, dass Sie genau verstehen, was darin steht — "
    "auf Deutsch, schriftlich, bevor Sie unterschreiben."
)

OLD_P1 = (
    "Diese Seite ist auf Deutsch, weil das Thema deutsche Expats in Portugal betrifft. "
    "Die eigentliche Dienstleistung läuft jedoch auf Englisch: Angebote, Erläuterungen zu den "
    "Bedingungen, Korrespondenz und Schadenabwicklung erfolgen auf Englisch, schriftlich. "
    "Wir weisen vorab darauf hin, weil eine Schadenmeldung der falsche Moment wäre, das erst zu erfahren."
)
OLD_P2 = (
    "Policen portugiesischer Versicherer werden gesetzlich auf Portugiesisch ausgestellt. "
    "Wir sorgen dafür, dass Sie genau verstehen, was darin steht — auf Englisch, schriftlich, bevor Sie unterschreiben."
)
OLD_FAQ = (
    "Diese Seiten sind auf Deutsch, weil die Themen deutsche Expats in Portugal betreffen. "
    "Die eigentliche Dienstleistung — Angebote, Erläuterungen, Korrespondenz und Schadenabwicklung — "
    "läuft auf Englisch, schriftlich. Policen portugiesischer Versicherer werden gesetzlich auf "
    "Portugiesisch ausgestellt; wir sorgen dafür, dass Sie auf Englisch genau verstehen, was darin steht, "
    "bevor Sie unterschreiben."
)
NEW_FAQ = (
    "Diese Seiten sind auf Deutsch. Intern ist unsere Arbeitssprache Englisch. "
    "Angebote, Erläuterungen, Korrespondenz und Schadenabwicklung stellen wir Ihnen mit "
    "KI-Unterstützung auf Deutsch bereit — so klar, dass Sie den Unterschied kaum merken. "
    "Policen portugiesischer und spanischer Versicherer werden gesetzlich auf Portugiesisch bzw. "
    "Spanisch ausgestellt; wir sorgen dafür, dass Sie auf Deutsch genau verstehen, was darin steht, "
    "bevor Sie unterschreiben."
)

# Longest-first URL remaps used on the new homepage and cloned Spain pages.
URL_MAP = [
    ("/en/blog/mortgage-life-insurance-foreign-buyers-portugal/", "/de/lebensversicherung-portugal/"),
    ("/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/", "/de/private-clients-portugal/"),
    ("/en/blog/liability-insurance-complementary-therapies/", "/de/berufshaftpflicht-therapeuten-wellness-portugal/"),
    ("/en/blog/luxury-car-insurance-portugal/", "/de/private-clients-portugal/"),
    ("/en/blog/hiscox-home-insurance-portugal/", "/de/hausversicherung-portugal/"),
    ("/en/blog/allianz-home-insurance-portugal/", "/de/hausversicherung-portugal/"),
    ("/en/blog/zurich-home-insurance-portugal/", "/de/hausversicherung-portugal/"),
    ("/en/blog/insuring-art-portugal/", "/de/private-clients-portugal/"),
    ("/en/expat-insurance-portugal/", "/de/versicherung-portugal/"),
    ("/en/expat-insurance-spain/", "/de/versicherung-spanien/"),
    ("/en/health-insurance-quote/", "/de/krankenversicherung-portugal/"),
    ("/en/health-insurance-spain/", "/de/krankenversicherung-spanien/"),
    ("/en/home-insurance-quote/", "/de/hausversicherung-portugal/"),
    ("/en/home-insurance-spain/", "/de/hausversicherung-spanien/"),
    ("/en/car-insurance-portugal/", "/de/autoversicherung-portugal/"),
    ("/en/car-insurance-spain/", "/de/autoversicherung-spanien/"),
    ("/en/life-insurance-spain/", "/de/lebensversicherung-spanien/"),
    ("/en/landlord-insurance-portugal/", "/de/hausversicherung-portugal/"),
    ("/en/landlord-insurance-spain/", "/de/vermieterversicherung-spanien/"),
    ("/en/mortgage-protection-spain/", "/de/hypothekenschutz-spanien/"),
    ("/en/private-clients-spain/", "/de/private-clients-spanien/"),
    ("/en/expat-visa-insurance-portugal/", "/de/umzug-deutschland-portugal-versicherung/"),
    ("/en/condominium-insurance-algarve/", "/de/hausversicherung-portugal/"),
    ("/en/relocation-services/", "/de/umzug-deutschland-portugal-versicherung/"),
    ("/en/why-use-an-insurance-broker/", "/de/#why-us"),
    ("/en/insurance-review/", "/de/#contact"),
    ("/en/claims-support/", "/de/#why-us"),
    ("/en/how-we-work/", "/de/#why-us"),
    ("/en/private-clients/", "/de/private-clients-portugal/"),
    ("/en/privacy-policy/", "/en/privacy-policy/"),
    ("/en/about/", "/de/#team"),
    ('href="/en/"', 'href="/de/"'),
    ("https://adlerrochefort.com/en/", "https://adlerrochefort.com/de/"),
]

SPAIN_CLONES = [
    ("public/en/expat-insurance-spain/index.html", "public/de/versicherung-spanien/index.html", "de-versicherung-spanien", "expat-insurance-review-spain"),
    ("public/en/health-insurance-spain/index.html", "public/de/krankenversicherung-spanien/index.html", "de-krankenversicherung-spanien", "health-insurance-quote-spain"),
    ("public/en/home-insurance-spain/index.html", "public/de/hausversicherung-spanien/index.html", "de-hausversicherung-spanien", "home-insurance-quote-spain"),
    ("public/en/car-insurance-spain/index.html", "public/de/autoversicherung-spanien/index.html", "de-autoversicherung-spanien", "car-insurance-quote-spain"),
    ("public/en/life-insurance-spain/index.html", "public/de/lebensversicherung-spanien/index.html", "de-lebensversicherung-spanien", "life-insurance-review-spain"),
    ("public/en/landlord-insurance-spain/index.html", "public/de/vermieterversicherung-spanien/index.html", "de-vermieterversicherung-spanien", "landlord-insurance-quote-spain"),
    ("public/en/mortgage-protection-spain/index.html", "public/de/hypothekenschutz-spanien/index.html", "de-hypothekenschutz-spanien", "mortgage-protection-review-spain"),
    ("public/en/private-clients-spain/index.html", "public/de/private-clients-spanien/index.html", "de-private-clients-spanien", "private-client-review-spain"),
]


def apply_url_map(html: str) -> str:
    for old, new in URL_MAP:
        html = html.replace(old, new)
    return html


def translations() -> list[tuple[str, str]]:
    pairs = [
        # Meta / titles
        ("Adler & Rochefort — English-Speaking Insurance Broker in Portugal & Spain",
         "Adler & Rochefort — Versicherungsmakler für Portugal und Spanien, auf Deutsch"),
        ("English-Speaking Insurance Broker in Portugal & Spain",
         "Versicherungsmakler für Portugal und Spanien"),
        ("English-speaking insurance broker for international clients in Portugal and Spain. Health, home, car, life and private-client cover, explained in English and compared across insurers.",
         "Versicherungsmakler für internationale Mandanten in Portugal und Spanien. Kranken-, Haus-, Auto-, Lebens- und Private-Client-Deckung — auf Deutsch erklärt, über Versicherer hinweg verglichen."),
        ("Health, home, car, life and private-client insurance for international residents in Portugal and Spain, explained in English by an ASF-registered broker.",
         "Kranken-, Haus-, Auto-, Lebens- und Private-Client-Versicherung für internationale Mandanten in Portugal und Spanien, erklärt auf Deutsch von einem bei der ASF registrierten Makler."),
        ("insurance broker Portugal, insurance broker Spain, expat insurance Portugal, expat insurance Spain, health insurance Portugal, home insurance Portugal, car insurance Portugal, health insurance Spain, home insurance Spain, car insurance Spain, English speaking insurance broker, Adler Rochefort",
         "Versicherungsmakler Portugal, Versicherungsmakler Spanien, Versicherung Portugal Deutsche, Krankenversicherung Portugal, Hausversicherung Portugal, Autoversicherung Portugal, Krankenversicherung Spanien, Hausversicherung Spanien, Autoversicherung Spanien, Adler Rochefort"),
        # Nav
        ("Moving to Portugal", "Umzug nach Portugal"),
        ("Insurance in Spain", "Versicherung in Spanien"),
        ("Insurance for Expats in Portugal", "Versicherungen für Expats in Portugal"),
        ("Insurance for Expats in Spain", "Versicherungen für Expats in Spanien"),
        ("Personal Insurance", "Privatversicherung"),
        ("Health Insurance", "Krankenversicherung"),
        ("Home Insurance", "Hausversicherung"),
        ("Car Insurance", "Autoversicherung"),
        ("Landlord Insurance", "Vermieterversicherung"),
        ("Life & Mortgage Protection", "Leben & Hypothekenschutz"),
        ("Life Insurance", "Lebensversicherung"),
        ("Moving & Property", "Umzug & Immobilie"),
        ("Relocation & Visa Insurance", "Umzug & Visa-Versicherung"),
        ("Condominium Insurance", "Wohnungseigentümergemeinschaft"),
        ("Mortgage Protection", "Hypothekenschutz"),
        ("Private Client Insurance", "Private-Client-Versicherung"),
        ("Private Clients — Portugal", "Private Clients — Portugal"),
        ("Private Clients — Spain", "Private Clients — Spanien"),
        ("Portugal insurance menu", "Versicherungsmenü Portugal"),
        ("Spain insurance menu", "Versicherungsmenü Spanien"),
        ("Private clients menu", "Menü Private Clients"),
        ("Why us menu", "Menü Warum wir"),
        ("Main navigation", "Hauptnavigation"),
        ("Request a Review", "Analyse anfragen"),
        ("Our Approach", "Unser Ansatz"),
        ("About Us", "Über uns"),
        ("How We Work", "So arbeiten wir"),
        ("Why Use a Broker", "Warum ein Makler"),
        ("Claims Support", "Schadenbegleitung"),
        ("Language: English. Choose another language.", "Sprache: Deutsch. Andere Sprache wählen."),
        # Hero
        ("Insurance for international clients", "Versicherung für internationale Mandanten"),
        ("Insurance in Portugal<br>\n      and Spain,<br>\n      <em>explained in English.</em>",
         "Versicherungen in Portugal<br>\n      und Spanien,<br>\n      <em>auf Deutsch erklärt.</em>"),
        ("Health, home, car, life and private-client insurance for expats and international residents — compared across the market and explained in plain English. Not tied to a single insurer. ASF-registered, serving Spain on a cross-border basis.",
         "Kranken-, Haus-, Auto-, Lebens- und Private-Client-Versicherung für Expats und internationale Mandanten — über den Markt hinweg verglichen und klar auf Deutsch erklärt. Nicht an einen Versicherer gebunden. Bei der ASF registriert, in Spanien im Dienstleistungsverkehr tätig."),
        ("Choose your country", "Markt wählen"),
        ("Request an Insurance Review", "Versicherungsanalyse anfragen"),
        ("English-speaking team", "Deutschsprachige Korrespondenz"),
        ("Registered broker", "Registrierter Makler"),
        ("Insurers · agency agreements in place", "Versicherer · Agenturverträge"),
        ("Free quote, no obligation", "Kostenloses Angebot, unverbindlich"),
        ("English-speaking team · Bilingual support", "Korrespondenz auf Deutsch · intern Englisch"),
        ("Free Analysis · No Obligation", "Kostenlose Analyse · unverbindlich"),
        ("Find out if you're truly protected in Portugal", "Prüfen Sie, ob Sie in Portugal wirklich geschützt sind"),
        ("Your name", "Ihr Name"),
        ("Your email", "Ihre E-Mail-Adresse"),
        ("Your phone number", "Ihre Telefonnummer"),
        ("Company (optional)", "Unternehmen (optional)"),
        ("Country / Market *", "Land / Markt *"),
        ("Select a country...", "Land wählen..."),
        ("Not sure", "Unsicher"),
        ("Type of Insurance", "Sparte"),
        ("Select insurance type...", "Sparte wählen..."),
        (">Health</option>", ">Krankenversicherung</option>"),
        (">Car</option>", ">Auto</option>"),
        (">Home</option>", ">Haus</option>"),
        (">Holiday let (Alojamento Local)</option>", ">Kurzzeitvermietung (Alojamento Local)</option>"),
        (">Condominium</option>", ">Wohnungseigentümergemeinschaft</option>"),
        (">Hospitality & restaurants</option>", ">Gastronomie & Hotels</option>"),
        (">Business combined (multirriscos)</option>", ">Geschäft (Multirriscos)</option>"),
        (">Professional indemnity</option>", ">Berufshaftpflicht</option>"),
        (">Life & mortgage protection</option>", ">Leben & Hypothekenschutz</option>"),
        (">Workers' compensation</option>", ">Arbeitsunfallversicherung</option>"),
        (">Other</option>", ">Sonstiges</option>"),
        ("Age of the oldest person to insure", "Alter der ältesten zu versichernden Person"),
        ("How many people to insure", "Anzahl der zu versichernden Personen"),
        ("Make, model and year", "Marke, Modell und Baujahr"),
        ("Registration plate", "Kennzeichen"),
        ("Years holding a licence", "Jahre im Besitz des Führerscheins"),
        ("Driver or operator?", "Fahrer oder Betreiber?"),
        ("Number of vehicles", "Anzahl der Fahrzeuge"),
        ("Area of operation", "Einsatzgebiet"),
        ("Number of fleet vehicles", "Anzahl der Flottenfahrzeuge"),
        ("Claims in the last 3 years", "Schäden in den letzten 3 Jahren"),
        ("Property type", "Immobilientyp"),
        ("Apartment / House", "Wohnung / Haus"),
        ("Postcode", "Postleitzahl"),
        ("Estimated rebuild value", "Geschätzter Neuwert"),
        ("Don't fill this out:", "Nicht ausfüllen:"),
        ("Don't fill this in:", "Nicht ausfüllen:"),
        # Country router
        ("Portugal and Spain", "Portugal und Spanien"),
        ("Two markets,<br><em>each on its own terms.</em>", "Zwei Märkte,<br><em>jeder zu seinen eigenen Bedingungen.</em>"),
        ("Insurance support for international clients relocating to, or already living in, Portugal — our home market, with several years of experience arranging cover in English.",
         "Versicherungsberatung für internationale Mandanten, die nach Portugal ziehen oder bereits hier leben — unser Heimatmarkt, mit mehrjähriger Erfahrung in der Vermittlung."),
        ("Insurance for international residents, property owners and families in Spain, explained in English — we are building our Spanish insurer relationships and will confirm honestly what can currently be arranged.",
         "Versicherung für internationale Mandanten, Eigentümer und Familien in Spanien — wir bauen unsere spanischen Versichererbeziehungen auf und sagen klar, was sich derzeit vermitteln lässt."),
        ("Moving to Portugal →", "Nach Portugal →"),
        ("or see relocation & company services →", "oder Umzug & Firmenleistungen →"),
        ("Explore Insurance in Spain →", "Versicherungen in Spanien →"),
        ("Life & Mortgage", "Leben & Hypothek"),
        # Language policy (EN homepage band)
        ("Our working language is English", LANG_HEADING),
        ("Our working language is English. Quotes, explanation of terms, correspondence and claims are all handled in English. Policies issued by Portuguese insurers are written in Portuguese by law; what we add is that you understand exactly what they say before you sign. All communication is in writing.",
         f"{LANG_P1} {LANG_P2}"),
        # Marquee / services
        ("Boat Insurance", "Bootsversicherung"),
        ("High-Value Homes & Cars", "Hochwertige Häuser & Fahrzeuge"),
        ("Classic Cars", "Oldtimer"),
        ("Art Insurance", "Kunstversicherung"),
        ("Personal Accident", "Unfallversicherung"),
        ("Personal insurance services in Portugal and Spain", "Privatversicherungen in Portugal und Spanien"),
        ("What do you need<br><em>to protect?</em>", "Was möchten Sie<br><em>absichern?</em>"),
        ("Health, home, car, life and private-client insurance — for international residents in Portugal and Spain. We compare the market in English and explain the practical differences before you sign.",
         "Kranken-, Haus-, Auto-, Lebens- und Private-Client-Versicherung — für internationale Mandanten in Portugal und Spanien. Wir vergleichen den Markt und erklären die praktischen Unterschiede, bevor Sie unterschreiben."),
        ("Private health cover for expats, families, retirees and visa or residency proof.",
         "Private Krankenversicherung für Expats, Familien, Rentner und den Nachweis für Visum oder Aufenthalt."),
        ("Home & Property", "Haus & Immobilie"),
        ("Building, contents and landlord cover for owners, tenants and landlords.",
         "Gebäude, Hausrat und Vermieterdeckung für Eigentümer, Mieter und Vermieter."),
        ("Motor insurance for new residents and everyday driving, from mandatory liability upward.",
         "Kfz-Versicherung für Zuzügler und den Alltag — von der Pflicht-Haftpflicht aufwärts."),
        ("Life & Family", "Leben & Familie"),
        ("Life cover and mortgage protection for families and property buyers.",
         "Lebensversicherung und Hypothekenschutz für Familien und Immobilienkäufer."),
        ("One broker, several risks, reviewed together — high-value homes, cars, art and collections.",
         "Ein Makler, mehrere Risiken, gemeinsam geprüft — hochwertige Immobilien, Fahrzeuge, Kunst und Sammlungen."),
        # Specialist
        ("Specialist insurance", "Spezialversicherung"),
        ("Cover for<br><em>the less ordinary.</em>", "Deckung für<br><em>das weniger Alltägliche.</em>"),
        ("Beyond everyday insurance, Adler & Rochefort arranges cover for specialist vehicles, collections and professional risks — available in Portugal.",
         "Über die Alltagspolice hinaus vermittelt Adler & Rochefort Deckung für Spezialfahrzeuge, Sammlungen und berufliche Risiken — in Portugal."),
        ("Agreed-value and specialist cover for collectible and enthusiast vehicles.",
         "Taxierte Werte und Spezialdeckung für Sammler- und Liebhaberfahrzeuge."),
        ("Fine Art", "Kunst"),
        ("Insurance for collections and individual works, scheduled on an agreed value.",
         "Versicherung für Sammlungen und einzelne Werke, taxiert auf einen vereinbarten Wert."),
        ("Luxury & Performance Cars", "Luxus- und Sportwagen"),
        ("All-risks cover for higher-value and specialist vehicles, individually underwritten.",
         "All-Risk-Deckung für höherwertige und spezielle Fahrzeuge, individuell gezeichnet."),
        ("Therapist Professional Liability", "Berufshaftpflicht für Therapeuten"),
        ("Professional liability cover for therapists and complementary-medicine practitioners in Portugal.",
         "Berufshaftpflicht für Therapeuten und Heilpraktiker in Portugal."),
        ("Explore →", "Mehr →"),
        # Trust / why
        ("Who you are dealing with", "Mit wem Sie es zu tun haben"),
        ("Insurance advice<br><em>with a real broker behind it</em>", "Versicherungsberatung<br><em>mit einem echten Makler dahinter</em>"),
        ("Adler & Rochefort is the trading name of Ownizo, Unipessoal Lda., ASF-registered insurance broker n.º 425591790/3 — a public registration you can check independently.",
         "Adler & Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., bei der ASF registrierter Versicherungsmakler Nr. 425591790/3 — eine öffentliche Registrierung, die Sie unabhängig prüfen können."),
        ("ASF-registered in Portugal, no. 425591790/3, serving Spain under Freedom of Services.",
         "Bei der ASF in Portugal registriert, Nr. 425591790/3, in Spanien im freien Dienstleistungsverkehr tätig."),
        ("About us →", "Über uns →"),
        ("English-speaking service", "Korrespondenz auf Deutsch"),
        ("Quotes, explanations, correspondence and claims, all handled in English.",
         "Angebote, Erläuterungen, Korrespondenz und Schäden — mit KI-Unterstützung auf Deutsch."),
        ("One broker across both markets, with honest differences between the two explained.",
         "Ein Makler für beide Märkte — mit ehrlicher Erklärung der Unterschiede."),
        ("Multi-product support", "Mehrere Sparten, abgestimmt"),
        ("Health, home, car, life and private-client cover, coordinated rather than sold in isolation.",
         "Kranken, Haus, Auto, Leben und Private Clients — abgestimmt, nicht isoliert verkauft."),
        ("Claims assistance", "Schadenbegleitung"),
        ("Support understanding the claims process and communicating with the insurer, where the policy allows.",
         "Unterstützung beim Schadenprozess und bei der Kommunikation mit dem Versicherer, soweit die Police das zulässt."),
        ("Our difference", "Unser Unterschied"),
        ("Not just a policy.<br><em>A broker who works for you.</em>", "Nicht nur eine Police.<br><em>Ein Makler, der für Sie arbeitet.</em>"),
        ("As an ASF-registered insurance broker we place your case across the insurers we represent, compare what each of them will actually offer for your profile, explain everything in plain English and stay by your side through every claim.",
         "Als bei der ASF registrierter Makler platzieren wir Ihren Fall bei den Versicherern, die wir vertreten, vergleichen, was jeder für Ihr Profil tatsächlich bietet, erklären alles klar auf Deutsch und bleiben im Schadenfall an Ihrer Seite."),
        ("Everything in English", "Korrespondenz auf Deutsch"),
        ("An English-speaking team explains your options, the paperwork and the small print clearly — nothing lost in translation.",
         "Wir erklären Ihre Optionen, die Unterlagen und das Kleingedruckte klar auf Deutsch — mit KI-Unterstützung, den Unterschied merken Sie kaum."),
        ("Not tied to a single insurer", "Nicht an einen Versicherer gebunden"),
        ("We are not tied to a single insurer. We put your needs first and find the right cover at the right price.",
         "Wir sind nicht an einen Versicherer gebunden. Ihre Bedürfnisse stehen zuerst — die passende Deckung zum passenden Preis."),
        ("Based in Portugal, serving both markets", "Sitz in Portugal, beide Märkte"),
        ("Established in Lagos, Algarve, with several years arranging insurance for international clients — now extending that service to Spain on a cross-border basis.",
         "Ansässig in Lagos, Algarve, seit mehreren Jahren für internationale Mandanten tätig — denselben Service erweitern wir grenzüberschreitend auf Spanien."),
        ("We handle your claim in English", "Schadenbegleitung auf Deutsch"),
        ("When something goes wrong, we manage the process end to end and make sure you receive what you are entitled to.",
         "Wenn etwas schiefgeht, begleiten wir den Prozess von Anfang bis Ende und achten darauf, dass Sie erhalten, was Ihnen zusteht."),
        ("The difference between insurance that looks fine and insurance that works is usually in the details you checked before the claim.",
         "Der Unterschied zwischen einer Police, die gut aussieht, und einer, die im Schadenfall trägt, liegt meist in den Details, die Sie vorher geprüft haben."),
        ("Adler & Rochefort Team", "Team Adler & Rochefort"),
        ("Partner insurers", "Partner-Versicherer"),
        ("We work with the <em>best</em>", "Wir arbeiten mit den <em>Besten</em>"),
        ("Professional memberships & associations", "Mitgliedschaften & Verbände"),
        ("Who is<br><em>by your side</em>", "Wer steht<br><em>an Ihrer Seite</em>"),
        ("Founder & Risk Management Specialist", "Gründer & Risk-Management-Spezialist"),
        ("Questions? We have answers.", "Fragen? Wir haben Antworten."),
        ("Ready for<br><em>real protection?</em>", "Bereit für<br><em>echten Schutz?</em>"),
        ("Regulatory authorities", "Aufsichtsbehörden"),
        ("Send us a message", "Schreiben Sie uns"),
        ("Message sent!", "Nachricht gesendet!"),
        ("Fill in the form and we'll get back to you within 24 hours.",
         "Füllen Sie das Formular aus. Wir antworten innerhalb von 24 Stunden."),
        ("Send message", "Nachricht senden"),
        ("No obligation to proceed. Reply within 24 business hours. Your details are used only to prepare the review and are handled under the GDPR — see our",
         "Unverbindlich. Antwort innerhalb von 24 Arbeitsstunden. Ihre Angaben dienen nur der Vorbereitung der Analyse und werden gemäß DSGVO verarbeitet — siehe unsere"),
        ("Privacy Policy", "Datenschutzerklärung"),
        ("Insurance distribution activities are supervised by the competent regulatory authorities.",
         "Die Versicherungsvermittlung unterliegt der Aufsicht der zuständigen Behörden."),
        ("Why choose Adler and Rochefort", "Warum Adler & Rochefort"),
        ("Choose your country", "Markt wählen"),
        ("Overview", "Überblick"),
        ("Property", "Immobilie"),
        ("Personal", "Privat"),
        ("Why us", "Warum wir"),
        (">Name *</label>", ">Name *</label>"),
        (">Email *</label>", ">E-Mail *</label>"),
        (">Phone</label>", ">Telefon</label>"),
        (">Company</label>", ">Unternehmen</label>"),
        ("Insurer relationships and product availability vary by market — the insurers above operate in Portugal. Our Spanish insurer relationships are still being built; tell us what you need and we will confirm honestly what can currently be arranged in Spain.",
         "Versichererbeziehungen und Produktverfügbarkeit unterscheiden sich je nach Markt — die oben genannten Versicherer sind in Portugal tätig. Unsere spanischen Beziehungen bauen wir noch auf; sagen Sie uns, was Sie brauchen, und wir sagen ehrlich, was sich derzeit in Spanien vermitteln lässt."),
    ]
    pairs.sort(key=lambda x: len(x[0]), reverse=True)
    return pairs


def strip_blog_section(html: str) -> str:
    html = re.sub(
        r'\s*<a href="#blog">Insights</a>\s*',
        "\n    ",
        html,
    )
    html = re.sub(
        r'\s*<a href="#blog"[^>]*>.*?Insights.*?</a>\s*',
        "\n    ",
        html,
        flags=re.I | re.S,
    )
    html = re.sub(
        r'<!--\s*BLOG\s*-->\s*<section class="blog-section" id="blog"[\s\S]*?</section>',
        "",
        html,
        count=1,
    )
    html = re.sub(
        r'<section class="blog-section" id="blog"[\s\S]*?</section>',
        "",
        html,
        count=1,
    )
    return html


def switch_lang_selector(html: str) -> str:
    html = html.replace(
        'aria-label="Language: English. Choose another language."',
        'aria-label="Sprache: Deutsch. Andere Sprache wählen."',
    )
    html = html.replace(
        'aria-label="Language: Deutsch. Choose another language."',
        'aria-label="Sprache: Deutsch. Andere Sprache wählen."',
    )
    html = html.replace(
        '<span class="ar-langsel-label">English</span>',
        '<span class="ar-langsel-label">Deutsch</span>',
    )
    html = html.replace(
        '<li><a href="/en/" lang="en" dir="ltr" hreflang="en-GB" aria-current="true"><span>English</span></a></li>',
        '<li><a href="/en/" lang="en" dir="ltr" hreflang="en-GB"><span>English</span></a></li>',
    )
    html = html.replace(
        '<li><a href="/de/" lang="de" dir="ltr" hreflang="de"><span>Deutsch</span></a></li>',
        '<li><a href="/de/" lang="de" dir="ltr" hreflang="de" aria-current="true"><span>Deutsch</span></a></li>',
    )
    return html


def patch_homepage_meta(html: str) -> str:
    html = html.replace('<html lang="en">', '<html lang="de">')
    html = html.replace('og:locale" content="en_GB"', 'og:locale" content="de_DE"')
    html = html.replace(
        '<link rel="canonical" href="https://adlerrochefort.com/de/">',
        '<link rel="canonical" href="https://adlerrochefort.com/de/">',
    )
    # After URL map, canonical already points at /de/
    html = html.replace('name="free-analysis"', 'name="de-free-analysis"')
    html = html.replace('value="free-analysis"', 'value="de-free-analysis"')
    html = html.replace('name="contact-en"', 'name="de-contact"')
    html = html.replace('value="contact-en"', 'value="de-contact"')
    if 'name="language"' not in html:
        html = html.replace(
            '<input type="hidden" name="form-name" value="de-free-analysis">',
            '<input type="hidden" name="form-name" value="de-free-analysis">\n        <input type="hidden" name="language" value="de">',
        )
    html = html.replace('>Name *</label>', '>Name *</label>')
    return html


def transform_homepage() -> None:
    src = (PUBLIC / "en" / "index.html").read_text(encoding="utf-8")
    html = src
    html = apply_url_map(html)
    html = strip_blog_section(html)
    html = patch_homepage_meta(html)
    html = switch_lang_selector(html)
    for old, new in translations():
        html = html.replace(old, new)
    html = html.replace('aria-label="Homepage"', 'aria-label="Startseite"')
    html = html.replace('onclick="toggleMenu()" aria-label="Menu"', 'onclick="toggleMenu()" aria-label="Menü"')
    html = html.replace('<button class="nav-burger" aria-label="Menu">', '<button class="nav-burger" aria-label="Menü">')
    (PUBLIC / "de" / "index.html").write_text(html, encoding="utf-8")
    print(f"  wrote public/de/index.html ({len(html)} bytes)")


def preserve_portugal_hub(old_homepage: str) -> None:
    dest_dir = PUBLIC / "de" / "versicherung-portugal"
    dest_dir.mkdir(parents=True, exist_ok=True)
    html = old_homepage
    html = html.replace(
        '<link rel="canonical" href="https://adlerrochefort.com/de/">',
        '<link rel="canonical" href="https://adlerrochefort.com/de/versicherung-portugal/">',
    )
    html = html.replace(
        "<title>Versicherungsmakler für deutsche Expats in Portugal | Adler & Rochefort</title>",
        "<title>Versicherungen in Portugal für deutsche Expats | Adler & Rochefort</title>",
    )
    html = html.replace('content="https://adlerrochefort.com/de/"', 'content="https://adlerrochefort.com/de/versicherung-portugal/"')
    dest = dest_dir / "index.html"
    dest.write_text(html, encoding="utf-8")
    print(f"  preserved hub → {dest.relative_to(ROOT)}")


def patch_existing_de_language_policy() -> None:
    count = 0
    for path in (PUBLIC / "de").rglob("index.html"):
        html = path.read_text(encoding="utf-8")
        orig = html
        html = html.replace(OLD_P1, LANG_P1)
        html = html.replace(OLD_P2, LANG_P2)
        html = html.replace(OLD_FAQ, NEW_FAQ)
        html = html.replace(
            "Wir antworten innerhalb von 24 Stunden, auf Englisch schriftlich.",
            "Wir antworten innerhalb von 24 Stunden auf Deutsch.",
        )
        html = html.replace(
            "Wir melden uns innerhalb von 24 Stunden schriftlich auf Englisch bei Ihnen.",
            "Wir melden uns innerhalb von 24 Stunden schriftlich auf Deutsch bei Ihnen.",
        )
        html = html.replace(
            "läuft auf Englisch, schriftlich",
            "läuft mit KI-Unterstützung auf Deutsch",
        )
        if html != orig:
            path.write_text(html, encoding="utf-8")
            count += 1
    print(f"  language-policy patched on {count} DE pages")


def clone_spain_pages() -> None:
    for src_rel, dest_rel, new_form, old_form in SPAIN_CLONES:
        src = ROOT / src_rel
        dest = ROOT / dest_rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        html = src.read_text(encoding="utf-8")
        html = apply_url_map(html)
        html = html.replace("<html lang=\"en\">", "<html lang=\"de\">")
        html = html.replace('og:locale" content="en_GB"', 'og:locale" content="de_DE"')
        html = html.replace(f'name="{old_form}"', f'name="{new_form}"')
        html = html.replace(f'value="{old_form}"', f'value="{new_form}"')
        html = switch_lang_selector(html)
        for old, new in translations():
            html = html.replace(old, new)
        # Canonical: URL map already flipped /en/… to /de/…
        dest.write_text(html, encoding="utf-8")
        print(f"  cloned {src_rel} → {dest_rel}")


def leftover_english(path: Path, limit: int = 25) -> list[str]:
    html = path.read_text(encoding="utf-8")
    html = re.sub(r"<script[\s\S]*?</script>", " ", html)
    html = re.sub(r"<style[\s\S]*?</style>", " ", html)
    text = re.sub(r"<[^>]+>", " ", html)
    text = re.sub(r"\s+", " ", text)
    hits = []
    for m in re.finditer(r"\b(The|This|Your|Insurance|Request|Health|Home|Car|Privacy|About|Claims|English-speaking|Insights)\b", text):
        start = max(0, m.start() - 40)
        hits.append(text[start:m.end() + 40].strip())
        if len(hits) >= limit:
            break
    return hits


def main() -> None:
    old_home = (PUBLIC / "de" / "index.html").read_text(encoding="utf-8")
    print("1. Preserve current /de hub as /de/versicherung-portugal/")
    preserve_portugal_hub(old_home)
    print("2. Build /de homepage from /en")
    transform_homepage()
    print("3. Patch language policy on existing DE pages")
    patch_existing_de_language_policy()
    # re-patch the preserved hub (it was copied before policy replace on /de/index)
    hub = PUBLIC / "de" / "versicherung-portugal" / "index.html"
    html = hub.read_text(encoding="utf-8")
    html = html.replace(OLD_P1, LANG_P1)
    html = html.replace(OLD_P2, LANG_P2)
    html = html.replace(OLD_FAQ, NEW_FAQ)
    html = html.replace(
        "Wir antworten innerhalb von 24 Stunden, auf Englisch schriftlich.",
        "Wir antworten innerhalb von 24 Stunden auf Deutsch.",
    )
    html = html.replace(
        "Wir melden uns innerhalb von 24 Stunden schriftlich auf Englisch bei Ihnen.",
        "Wir melden uns innerhalb von 24 Stunden schriftlich auf Deutsch bei Ihnen.",
    )
    hub.write_text(html, encoding="utf-8")
    print("4. Clone Spain cluster from EN Spain pages")
    clone_spain_pages()
    print("5. Leftover-English scan on new homepage")
    for h in leftover_english(PUBLIC / "de" / "index.html"):
        print("   EN?", h)


if __name__ == "__main__":
    main()
