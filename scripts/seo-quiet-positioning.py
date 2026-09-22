#!/usr/bin/env python3
"""Quiet-wealth SEO for /en and /de commercial pages.

Signals the segment through place, household complexity and independent
written advice — never luxury / premium / exclusive / vermögend.
Does not touch /en/blog (those URLs already rank; renaming needs redirects).
"""
from __future__ import annotations

from html import unescape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
A = chr(38) + "amp;"
BRAND = f"Adler {A} Rochefort"


def t(s: str) -> str:
    return s.replace("Adler & Rochefort", BRAND).replace("& ", A + " ")


META: dict[str, dict[str, str]] = {}


def add(path, title, desc, keys=None):
    META[path] = {"title": t(title), "desc": t(desc)}
    if keys:
        META[path]["keys"] = keys


# ---------------------------------------------------------------------------
# EN
# ---------------------------------------------------------------------------
add(
    "en/index.html",
    "Insurance in Portugal and Spain | Adler & Rochefort",
    "Independent insurance advice for international households in Portugal and Spain. Health, home, car, life and private-client cover, in English, in writing.",
    "insurance Portugal, insurance Spain, insurance broker Algarve, private client insurance Portugal, international households Portugal Spain, home insurance Portugal, health insurance Portugal",
)
add(
    "en/about/index.html",
    "About Adler & Rochefort | Insurance in Portugal",
    "ASF-registered insurance intermediary in Lagos. Independent written advice for international households with interests in Portugal and Spain.",
)
add(
    "en/apartment-insurance-portugal/index.html",
    "Apartment Insurance in Portugal | Adler & Rochefort",
    "What the condominium policy actually covers, and what apartment owners in Portugal still need to arrange themselves. Independent written review.",
)
add(
    "en/business-insurance-portugal/index.html",
    "Business Insurance in Portugal | Adler & Rochefort",
    "Multi-risk cover for companies operating in Portugal: property, workplace accidents, public liability and cyber. Compared in writing, not as a price list.",
)
add(
    "en/car-insurance-portugal/index.html",
    "Car Insurance in Portugal | Adler & Rochefort",
    "Motor cover for international residents and imported vehicles in Portugal. Third-party, own-damage and documented driving history, arranged in English.",
)
add(
    "en/car-insurance-spain/index.html",
    "Car Insurance in Spain | Adler & Rochefort",
    "Motor cover in Spain for international residents and foreign drivers. Foreign licences, foreign plates and Spanish registration, confirmed in writing.",
)
add(
    "en/claims-support/index.html",
    "Insurance Claims Support | Adler & Rochefort",
    "What we do when a client needs to make a claim: notification, documents and correspondence with the insurer, in English, in writing.",
)
add(
    "en/condominium-insurance-algarve/index.html",
    "Condominium Insurance in the Algarve | Adler & Rochefort",
    "The legal fire minimum is not a building policy. We review sums, seismic cover and communal areas for Algarve condominiums, in writing.",
)
add(
    "en/earthquake-insurance-portugal/index.html",
    "Earthquake Insurance in Portugal | Adler & Rochefort",
    "Seismic cover is optional on most Portuguese home policies. How to check whether yours includes it, and what that means for coastal and older buildings.",
)
add(
    "en/expat-insurance-lagos-portugal/index.html",
    "Insurance in Lagos, Algarve | Adler & Rochefort",
    "Insurance for international residents and property owners in Lagos. Health, home, car and life, arranged from our registered office in the town.",
)
add(
    "en/expat-insurance-portugal/index.html",
    "Insurance in Portugal for International Clients | Adler & Rochefort",
    "Work out what health, home, landlord, car or life cover actually applies in Portugal. Independent written advice from an ASF-registered intermediary.",
    "insurance for expats Portugal, insurance Portugal international residents, insurance broker Algarve, home insurance Portugal, health insurance Portugal",
)
add(
    "en/expat-insurance-spain/index.html",
    "Insurance in Spain for International Clients | Adler & Rochefort",
    "Health, home, landlord, car and life cover in Spain, arranged from Portugal on a cross-border basis. Tell us the situation; we confirm what can be placed.",
    "insurance Spain international residents, insurance for expats Spain, home insurance Spain, health insurance Spain, insurance broker Spain",
)
add(
    "en/expat-visa-insurance-portugal/index.html",
    "Visa Health Insurance in Portugal | Adler & Rochefort",
    "Health-insurance proof for D7, D8, Golden Visa, Schengen and AIMA appointments. What each route actually asks for, confirmed before you apply.",
)
add(
    "en/fiscal-representation-portugal/index.html",
    "Fiscal Representation in Portugal | Adler & Rochefort",
    "A Portuguese tax representative once you have a tax relationship here. What the role covers, and what it does not, explained in English.",
)
add(
    "en/flood-insurance-portugal/index.html",
    "Flood Insurance in Portugal | Adler & Rochefort",
    "Burst pipes, storm water and river flood are different perils on Portuguese home wordings. Check which of them your policy actually responds to.",
)
add(
    "en/health-insurance-quote/index.html",
    "Private Health Insurance in Portugal | Adler & Rochefort",
    "Private medical cover for international residents in Portugal: visa proof, family plans and networks along the Algarve and in Lisbon, compared in writing.",
)
add(
    "en/health-insurance-spain/index.html",
    "Private Health Insurance in Spain | Adler & Rochefort",
    "Private medical cover in Spain for international residents. How it sits beside the public system, waiting periods, and what a visa file actually needs.",
)
add(
    "en/home-insurance-quote/index.html",
    "Home Insurance in Portugal | Adler & Rochefort",
    "Buildings, contents and family liability for homes in Portugal, including second homes and non-resident owners. Written comparison, not a single-insurer quote.",
)
add(
    "en/home-insurance-spain/index.html",
    "Home Insurance in Spain | Adler & Rochefort",
    "Buildings and contents for residences, second homes and non-resident owners in Spain. Occupancy, comunidad cover and rebuild values, confirmed in writing.",
)
add(
    "en/how-we-work/index.html",
    "How We Work | Adler & Rochefort",
    "From the first message to an in-force policy: what we ask for, what we do, and how correspondence, placement and claims stay with one point of contact.",
)
add(
    "en/insurance-for-americans-in-portugal/index.html",
    "Insurance for Americans in Portugal | Adler & Rochefort",
    "Cover for US citizens buying, moving to, or already living in Portugal. What does not carry over from a US policy, explained in English.",
)
add(
    "en/insurance-for-canadians-portugal/index.html",
    "Insurance for Canadians in Portugal | Adler & Rochefort",
    "Cover for Canadian citizens buying, moving to, or already living in Portugal. Health, home and car, explained in English and placed in writing.",
)
add(
    "en/insurance-for-irish-residents-portugal/index.html",
    "Insurance for Irish Residents in Portugal | Adler & Rochefort",
    "Cover for Irish citizens in Portugal, including VHI/Laya questions and the S1 route. Health, home and car, compared in writing.",
)
add(
    "en/insurance-review/index.html",
    "Insurance Review | Adler & Rochefort",
    "Several risks, one written review. For households with more than one property, vehicle or policy in Portugal or Spain, looked at together.",
)
add(
    "en/international-health-insurance-portugal/index.html",
    "International Health Insurance in Portugal | Adler & Rochefort",
    "IPMI for internationally mobile families in Portugal. When a domestic Portuguese plan is enough, and when a wider geographic area is the better fit.",
)
add(
    "en/landlord-insurance-portugal/index.html",
    "Landlord Insurance in Portugal | Adler & Rochefort",
    "Cover for owners who let property in Portugal — long-term or holiday — including non-resident landlords managing the let from abroad.",
)
add(
    "en/landlord-insurance-spain/index.html",
    "Landlord Insurance in Spain | Adler & Rochefort",
    "Cover for international owners who let property in Spain, long-term or as a holiday rental, resident or managing the let from abroad.",
)
add(
    "en/landlord-liability-insurance-portugal/index.html",
    "Landlord Liability in Portugal | Adler & Rochefort",
    "Liability to tenants, neighbours and visitors arising from a property you let in Portugal. Limits that still make sense against a serious injury claim.",
)
add(
    "en/life-insurance-spain/index.html",
    "Life Insurance in Spain | Adler & Rochefort",
    "Family and mortgage-linked life cover for international residents in Spain, and a review of policies already held in another country.",
)
add(
    "en/mortgage-protection-spain/index.html",
    "Mortgage Protection in Spain | Adler & Rochefort",
    "What a Spanish lender must require by law, what it merely offers, and how to protect the household beyond the outstanding loan.",
)
add(
    "en/non-resident-landlord-insurance-portugal/index.html",
    "Non-Resident Landlord Insurance Portugal | Adler & Rochefort",
    "Property and landlord cover for owners who live abroad and let in Portugal. Claims, keyholders and occupancy, handled in English.",
)
add(
    "en/private-clients/index.html",
    "Private Client Insurance in Portugal | Adler & Rochefort",
    "Homes, art, jewellery, collections, collector cars and boats reviewed together — not as disconnected retail policies. Agreed value where the risk needs it.",
    "private client insurance Portugal, art insurance Portugal, jewellery insurance Portugal, collections insurance Portugal, boat insurance Portugal, agreed value insurance Portugal, high value home insurance Portugal",
)
add(
    "en/private-clients-spain/index.html",
    "Private Client Insurance in Spain | Adler & Rochefort",
    "A coordinated review for households with more than one property, vehicle or policy in Spain — Mallorca, Costa del Sol and second homes included.",
    "private client insurance Spain, insurance Mallorca, insurance Costa del Sol, second home insurance Spain, international households Spain",
)
add(
    "en/professional-liability-insurance-portugal/index.html",
    "Professional Liability in Portugal | Adler & Rochefort",
    "Professional indemnity for consultants, lawyers, engineers and other liberal professions in Portugal. Contract terms and defence costs, compared in writing.",
)
add(
    "en/relocation-services/index.html",
    "Relocation Insurance in Portugal | Adler & Rochefort",
    "The insurance sequence when you move to Portugal: health, home, car and what can wait. Not a relocation agency — the cover, in the right order.",
)
add(
    "en/rental-property-insurance-portugal/index.html",
    "Rental Property Insurance in Portugal | Adler & Rochefort",
    "Alojamento Local and long-term lets need different cover to an owner-occupied home. What changes once someone else is paying to stay there.",
)
add(
    "en/second-home-insurance-portugal/index.html",
    "Second Home Insurance in Portugal | Adler & Rochefort",
    "Cover for a Portuguese property used part of the year. Unoccupancy, water shut-off and keyholders — the clauses that decide a winter claim.",
)
add(
    "en/unoccupied-home-insurance-portugal/index.html",
    "Unoccupied Home Insurance in Portugal | Adler & Rochefort",
    "A house that stands empty is a different risk to one lived in daily. How Portuguese wordings treat unoccupancy, and what to declare before a claim.",
)
add(
    "en/why-use-an-insurance-broker/index.html",
    "Why Use an Insurance Broker | Adler & Rochefort",
    "What an ASF-registered intermediary actually does: market access, a written comparison, and one point of contact when a claim is made.",
)

# ---------------------------------------------------------------------------
# DE
# ---------------------------------------------------------------------------
add(
    "de/index.html",
    "Versicherung in Portugal und Spanien | Adler & Rochefort",
    "Unabhängige Versicherungsberatung für internationale Mandanten in Portugal und Spanien. Kranken, Haus, Auto, Leben und Private Clients — auf Deutsch, schriftlich.",
    "Versicherungsmakler Portugal, Versicherungsmakler Spanien, Versicherung Algarve, Private Clients Portugal, Hausversicherung Portugal, Krankenversicherung Portugal",
)
add(
    "de/anwartschaftsversicherung-portugal/index.html",
    "Anwartschaftsversicherung Portugal | Adler & Rochefort",
    "Was eine Anwartschaft beim Umzug nach Portugal sichert — kleine oder große — und was sie ausdrücklich nicht ersetzt. Unabhängig, schriftlich erklärt.",
)
add(
    "de/autoversicherung-portugal/index.html",
    "Autoversicherung in Portugal | Adler & Rochefort",
    "Kfz-Haftpflicht und Kasko in Portugal: deutsches oder portugiesisches Kennzeichen, ISV, IMT und die Fahrhistorie, die der Versicherer tatsächlich sieht.",
)
add(
    "de/autoversicherung-spanien/index.html",
    "Autoversicherung in Spanien | Adler & Rochefort",
    "Kfz-Deckung in Spanien für internationale Mandanten. Ausländische Führerscheine, ausländische Kennzeichen und spanische Zulassung, schriftlich bestätigt.",
)
add(
    "de/berufshaftpflicht-freiberufler-portugal/index.html",
    "Berufshaftpflicht in Portugal | Adler & Rochefort",
    "Vermögensschadenhaftpflicht für Berater, Anwälte, Ingenieure und andere Freiberufler in Portugal. Vertrag und Verteidigungskosten, schriftlich verglichen.",
)
add(
    "de/berufshaftpflicht-therapeuten-wellness-portugal/index.html",
    "Berufshaftpflicht für Therapeuten in Portugal | Adler & Rochefort",
    "Pflichtversicherung für osteopathische und heilkundliche Tätigkeit mit ACSS-Zulassung, und Deckung für Yoga, Pilates und Wellness ohne Heilkundeanspruch.",
)
add(
    "de/hausversicherung-portugal/index.html",
    "Hausversicherung in Portugal | Adler & Rochefort",
    "Gebäude und Hausrat in Portugal, einschließlich Zweitwohnsitz und nicht-residenter Eigentümer. Wiederaufbauwert und regra proporcional, schriftlich erklärt.",
)
add(
    "de/hausversicherung-spanien/index.html",
    "Hausversicherung in Spanien | Adler & Rochefort",
    "Gebäude und Hausrat für Wohnsitz, Zweitwohnsitz und nicht-residente Eigentümer in Spanien. Leerstand, Comunidad und Wiederaufbauwert, schriftlich bestätigt.",
)
add(
    "de/hypothekenschutz-spanien/index.html",
    "Hypothekenschutz in Spanien | Adler & Rochefort",
    "Was eine spanische Bank gesetzlich verlangen muss, was sie nur anbietet, und wie die Familie über die Restschuld hinaus geschützt wird.",
)
add(
    "de/isv-befreiung-fahrzeugimport-portugal/index.html",
    "ISV-Befreiung Fahrzeugimport Portugal | Adler & Rochefort",
    "Die Befreiung von der portugiesischen Zulassungssteuer bei Wohnsitzverlegung: Voraussetzungen, Fristen und was das für die Kfz-Versicherung bedeutet.",
)
add(
    "de/krankenversicherung-portugal/index.html",
    "Krankenversicherung in Portugal | Adler & Rochefort",
    "Private Krankenversicherung für internationale Mandanten in Portugal. SNS-Grenzen, Algarve-Netz, Wartezeiten und der Nachweis für Visum oder Aufenthalt.",
)
add(
    "de/krankenversicherung-spanien/index.html",
    "Krankenversicherung in Spanien | Adler & Rochefort",
    "Private Krankenversicherung in Spanien für internationale Mandanten. Öffentliches System, Wartezeiten, Vorerkrankungen und was ein Visumfile wirklich braucht.",
)
add(
    "de/lebensversicherung-portugal/index.html",
    "Lebensversicherung in Portugal | Adler & Rochefort",
    "Risikoleben, Hypothekenschutz und Familienabsicherung in Portugal. Was die Bank verlangt, und was die Familie tatsächlich braucht.",
)
add(
    "de/lebensversicherung-spanien/index.html",
    "Lebensversicherung in Spanien | Adler & Rochefort",
    "Familien- und hypothekengekoppelte Lebensversicherung für internationale Mandanten in Spanien, einschließlich Policen, die bereits im Ausland bestehen.",
)
add(
    "de/nicht-legalisierte-immobilie-versichern-portugal/index.html",
    "Nicht legalisierte Immobilie in Portugal | Adler & Rochefort",
    "Rústico mit bestehender Bebauung: was versicherbar ist, was im Schadenfall passiert, und welche Angaben der Versicherer vor der Annahme braucht.",
)
add(
    "de/private-clients/index.html",
    "Private Clients in Portugal und Spanien | Adler & Rochefort",
    "Koordinierte Prüfung für Haushalte mit Wohnsitzen, Immobilien, Fahrzeugen und Sammlungen in Portugal und Spanien. Wir beginnen mit dem Risiko, nicht mit dem Preis.",
    "Private Clients Versicherung Portugal, Private Clients Spanien, Kunstversicherung Portugal, Sammlungen Versicherung, Bootsversicherung Algarve, Zweitwohnsitz Versicherung",
)
add(
    "de/private-clients-portugal/index.html",
    "Private Clients in Portugal | Adler & Rochefort",
    "Immobilien, Kunst, Schmuck, Sammlungen, Oldtimer und Boote gemeinsam geprüft — nicht als einzelne Retail-Policen. Taxierte Werte, wo das Risiko es braucht.",
    "Private Clients Versicherung Portugal, Kunstversicherung Portugal, Schmuckversicherung Portugal, Oldtimer Versicherung Portugal, Bootsversicherung Portugal",
)
add(
    "de/private-clients-spanien/index.html",
    "Private Clients in Spanien | Adler & Rochefort",
    "Eine abgestimmte Prüfung für Haushalte mit mehr als einer Immobilie, einem Fahrzeug oder einer Police in Spanien — Mallorca, Costa del Sol, Zweitwohnsitze.",
    "Private Clients Spanien, Versicherung Mallorca, Versicherung Costa del Sol, Zweitwohnsitz Spanien, internationale Mandanten Spanien",
)
add(
    "de/s1-formular-rentner-portugal/index.html",
    "S1-Formular für Rentner in Portugal | Adler & Rochefort",
    "Deutsche Rente in Portugal: wie S1 und DVKA zusammenarbeiten, was der SNS übernimmt, und wo private Krankenversicherung trotzdem sinnvoll bleibt.",
)
add(
    "de/umzug-deutschland-portugal-versicherung/index.html",
    "Umzug nach Portugal: Versicherungen | Adler & Rochefort",
    "Abmeldung, GKV oder PKV, Anwartschaft, S1 und Schadenfreiheitsklasse: die Reihenfolge, die beim Umzug von Deutschland nach Portugal tatsächlich zählt.",
)
add(
    "de/vermieterversicherung-spanien/index.html",
    "Vermieterversicherung in Spanien | Adler & Rochefort",
    "Deckung für internationale Eigentümer, die in Spanien vermieten — Langzeit oder Ferien, resident oder aus der Ferne verwaltet.",
)
add(
    "de/versicherung-algarve/index.html",
    "Versicherung an der Algarve | Adler & Rochefort",
    "Haus, Kranken und Auto für internationale Eigentümer an der Algarve. Küste, Leerstand, Pools und das private Kliniknetz — von unserem Sitz in Lagos.",
)
add(
    "de/versicherung-carvoeiro/index.html",
    "Versicherung in Carvoeiro | Adler & Rochefort",
    "Hausversicherung in Carvoeiro: Leerstand über den Winter, Klippenlage am Barlavento und was der Versicherer zur Lage der Immobilie wissen muss.",
)
add(
    "de/versicherung-cascais/index.html",
    "Versicherung in Cascais | Adler & Rochefort",
    "Hausversicherung für Villen und Eigentumswohnungen in Cascais. Erdbeben an der Costa do Estoril, und Kranken- und Kfz-Deckung für Mandanten vor Ort.",
)
add(
    "de/versicherung-comporta/index.html",
    "Versicherung in Comporta | Adler & Rochefort",
    "Hausversicherung in Comporta: Reetdach und Holzbauweise, Anfahrtszeiten der Feuerwehr und warum Standardtarife diese Bauweise oft nicht zeichnen.",
)
add(
    "de/versicherung-lagos/index.html",
    "Versicherung in Lagos | Adler & Rochefort",
    "Haus, Kranken und Auto in Lagos, Algarve. Altstadtwohnungen, propriedad horizontal und unser registrierter Sitz in der Stadt.",
)
add(
    "de/versicherung-lissabon/index.html",
    "Versicherung in Lissabon | Adler & Rochefort",
    "Eigentumswohnungen in Lissabon: wo die Police der Eigentümergemeinschaft endet, und welche Gebäude- und Hausratdeckung Sie selbst brauchen.",
)
add(
    "de/versicherung-portimao/index.html",
    "Versicherung in Portimão | Adler & Rochefort",
    "Hausversicherung in Portimão: Baujahr und Erdbebendeckung, Eigentümergemeinschaft, und was eine von der Bank eingerichtete Police oft auslässt.",
)
add(
    "de/versicherung-portugal/index.html",
    "Versicherung in Portugal | Adler & Rochefort",
    "Unabhängige Beratung für internationale Mandanten, Familien und Eigentümer in Portugal. Kranken, Haus, Auto und Leben — wir beginnen mit dem Risiko.",
)
add(
    "de/versicherung-quinta-do-lago/index.html",
    "Versicherung in Quinta do Lago | Adler & Rochefort",
    "Hausversicherung in Quinta do Lago: Wiederaufbauwert, Hausangestellte und was in der Versicherungssumme typischerweise nicht steckt. Schriftlich geprüft.",
    "Versicherung Quinta do Lago, Hausversicherung Quinta do Lago, Versicherung Vale do Lobo, Hausangestellte Versicherung Portugal, Versicherungsmakler Algarve",
)
add(
    "de/versicherung-spanien/index.html",
    "Versicherung in Spanien | Adler & Rochefort",
    "Kranken, Haus, Vermieter, Auto und Leben in Spanien, vom Sitz in Portugal im Dienstleistungsverkehr. Schildern Sie die Lage — wir sagen, was sich vermitteln lässt.",
)
add(
    "de/versicherung-vilamoura/index.html",
    "Versicherung in Vilamoura | Adler & Rochefort",
    "Haus- und Bootsversicherung in Vilamoura: was der Liegeplatzvertrag der Marina verlangt, und wo die Police der Anlage aufhört und Ihre eigene beginnt.",
)
add(
    "de/vorerkrankungen-krankenversicherung-portugal/index.html",
    "Krankenversicherung mit Vorerkrankungen | Adler & Rochefort",
    "Was eine Vorerkrankung für die portugiesische Krankenversicherung bedeutet: Gesundheitsprüfung, Ausschluss, Zuschlag oder Wartezeit — ehrlich, vor dem Antrag.",
)


def set_attr(html: str, attr_pat: str, value: str) -> str:
    def repl(m):
        return f'{m.group(1)}{value}{m.group(3)}'

    new, n = re.subn(attr_pat, repl, html, count=1)
    return new if n else html


def apply_meta(html: str, rec: dict) -> str:
    title, desc = rec["title"], rec["desc"]
    html = re.sub(r"<title>[\s\S]*?</title>", f"<title>{title}</title>", html, count=1)
    html = set_attr(
        html,
        r'(<meta name="description" content=")([^"]*)(")',
        desc,
    )
    if "keys" in rec:
        if re.search(r'<meta name="keywords" content="', html):
            html = set_attr(html, r'(<meta name="keywords" content=")([^"]*)(")', rec["keys"])
        else:
            html = html.replace(
                '<meta name="description"',
                f'<meta name="keywords" content="{rec["keys"]}">\n<meta name="description"',
                1,
            )
    html = set_attr(html, r'(<meta property="og:title" content=")([^"]*)(")', title)
    html = set_attr(html, r'(<meta property="og:description" content=")([^"]*)(")', desc)
    html = set_attr(html, r'(<meta name="twitter:title" content=")([^"]*)(")', title)
    html = set_attr(html, r'(<meta name="twitter:description" content=")([^"]*)(")', desc)
    return html


VISIBLE = [
    (
        "High-value and luxury homes",
        "Homes with art, jewellery or collections",
    ),
    (
        "Estates, architect-designed villas and homes with art, jewellery or wine collections, placed with specialist underwriters on all-risks or agreed-value terms.",
        "Architect-designed villas and homes with art, jewellery or wine collections, placed with specialist underwriters on all-risks or agreed-value terms.",
    ),
    ("Luxusimmobilien & Zweitwohnsitze", "Immobilien und Zweitwohnsitze"),
    ("Luxusimmobilien, Kunst und Sammlungen", "Immobilien, Kunst und Sammlungen"),
    ("Private Clients: Luxusimmobilien und komplexe Risiken", "Private Clients: komplexe Risiken und Sammlungen"),
    ("mit Luxusimmobilien, Kunst, Sammlungen", "mit Immobilien, Kunst, Sammlungen"),
    ("für vermögende Privatkunden", "für internationale Privatkunden"),
    ("für vermögender Privatkunden", "für internationale Privatkunden"),
    ("Versicherung vermögender Privatkunden", "Private Clients Versicherung"),
    ("luxury car insurance Portugal", "collector car insurance Portugal"),
    ("high net worth insurance Portugal", "private client insurance Portugal"),
    ("high net worth insurance spain", "private client insurance spain"),
    ("insurance for wealthy expats spain", "insurance for international households spain"),
    (
        '"name": "Luxury Assets Insurance"',
        '"name": "Private Client Insurance"',
    ),
    (
        '"description": "Specialist cover for luxury homes, luxury cars, classic cars, boats, art and collections."',
        '"description": "Coordinated cover for homes, collector vehicles, boats, art and collections."',
    ),
    (
        '"name": "Mortgage Lebensversicherung"',
        '"name": "Lebensversicherung zur Hypothek"',
    ),
    (
        '"description": "Private health insurance for expats, families, visa applications and residency appointments."',
        '"description": "Private Krankenversicherung für internationale Mandanten, Familien, Visum und Aufenthalt."',
    ),
    (
        '"description": "Building, contents and family liability cover for properties in Portugal."',
        '"description": "Gebäude, Hausrat und Familienhaftpflicht für Immobilien in Portugal."',
    ),
    (
        '"description": "Motor insurance for residents, imported vehicles and everyday driving in Portugal."',
        '"description": "Kfz-Versicherung für Residenten, importierte Fahrzeuge und den Alltag in Portugal."',
    ),
    (
        '"description": "Independent life insurance comparison for Portuguese mortgages."',
        '"description": "Unabhängiger Vergleich der Lebensversicherung zur portugiesischen Hypothek."',
    ),
    (
        '"description": "Privat cyber protection for online fraud, identity theft and cyber extortion."',
        '"description": "Private Cyber-Deckung bei Online-Betrug, Identitätsdiebstahl und Erpressung."',
    ),
    ('"name": "Privat Cybersecurity Insurance"', '"name": "Private Cyberversicherung"'),
    ('"@type": "ImmobilieValue"', '"@type": "PropertyValue"'),
    (
        '"knowsLanguage": [\n    "pt",\n    "en"\n  ]',
        '"knowsLanguage": [\n    "pt",\n    "en",\n    "de"\n  ]',
    ),
]


def dlen(s: str) -> int:
    return len(unescape(s.replace(A, "&")))


def apply_file(rel: str, rec: dict) -> None:
    path = ROOT / "public" / rel
    if not path.exists():
        print("MISSING", rel)
        return
    html = path.read_text(encoding="utf-8")
    html = apply_meta(html, rec)
    for old, new in VISIBLE:
        html = html.replace(old, new)
    path.write_text(html, encoding="utf-8")
    print(f"{rel:52} t={dlen(rec['title']):2} d={dlen(rec['desc']):3}")


def patch_sources() -> None:
    """Keep generators in step with live meta so a rebuild does not revert it."""
    replacements = [
        (
            "scripts/de-content/private-clients.mjs",
            "Private Clients Portugal: Versicherung für komplexe Risiken | Adler & Rochefort",
            "Private Clients in Portugal | Adler & Rochefort",
        ),
        (
            "scripts/de-content/private-clients.mjs",
            "Für internationale Familien, Eigentümer und Unternehmer mit komplexeren Risiken: Luxusimmobilien, Kunst und Sammlungen, Schmuck und Uhren, Oldtimer und mehrere Wohnsitze — individuell zusammengestellt statt aus dem Standardprodukt.",
            "Immobilien, Kunst, Schmuck, Sammlungen, Oldtimer und Boote gemeinsam geprüft — nicht als einzelne Retail-Policen. Taxierte Werte, wo das Risiko es braucht.",
        ),
        (
            "scripts/de-content/private-clients.mjs",
            "Private Clients Versicherung Portugal, Luxusimmobilien Versicherung Portugal, Kunstversicherung Portugal, Oldtimer Versicherung Portugal, Versicherung Zweitwohnsitz Portugal",
            "Private Clients Versicherung Portugal, Kunstversicherung Portugal, Schmuckversicherung Portugal, Oldtimer Versicherung Portugal, Bootsversicherung Portugal",
        ),
        (
            "scripts/de-content/hub.mjs",
            "Versicherungen in Portugal für deutsche Expats | Adler & Rochefort",
            "Versicherung in Portugal | Adler & Rochefort",
        ),
        (
            "scripts/spain-cluster.data.mjs",
            "Insurance for Expats in Spain | English-Speaking Service",
            "Insurance in Spain for International Clients | Adler & Rochefort",
        ),
        (
            "scripts/spain-cluster.data.mjs",
            "Home Insurance in Spain for International Owners",
            "Home Insurance in Spain | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Algarve für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung an der Algarve | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Lagos für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Lagos | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Lissabon für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Lissabon | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Cascais für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Cascais | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Portimão für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Portimão | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Carvoeiro für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Carvoeiro | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Vilamoura für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Vilamoura | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Quinta do Lago für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Quinta do Lago | Adler & Rochefort",
        ),
        (
            "scripts/de-content/local.mjs",
            "Versicherung Comporta für deutsche Expats und Eigentümer | Adler & Rochefort",
            "Versicherung in Comporta | Adler & Rochefort",
        ),
        (
            "scripts/de-content/home.mjs",
            "Hausversicherung in Portugal für deutsche Eigentümer | Adler & Rochefort",
            "Hausversicherung in Portugal | Adler & Rochefort",
        ),
        (
            "scripts/de-content/health.mjs",
            "Krankenversicherung in Portugal für deutsche Expats | Adler & Rochefort",
            "Krankenversicherung in Portugal | Adler & Rochefort",
        ),
        (
            "scripts/de-content/motor.mjs",
            "Autoversicherung in Portugal für deutsche Expats | Adler & Rochefort",
            "Autoversicherung in Portugal | Adler & Rochefort",
        ),
        (
            "scripts/de-content/life.mjs",
            "Lebensversicherung in Portugal für deutsche Expats | Adler & Rochefort",
            "Lebensversicherung in Portugal | Adler & Rochefort",
        ),
    ]
    for rel, old, new in replacements:
        p = ROOT / rel
        txt = p.read_text(encoding="utf-8")
        if old not in txt:
            print("source miss", rel, old[:60])
            continue
        p.write_text(txt.replace(old, new), encoding="utf-8")
        print("source", rel)


def main():
    print("Applying quiet-wealth SEO meta")
    for rel, rec in META.items():
        apply_file(rel, rec)
    # leftover luxury words on commercial (non-blog) pages
    for loc in ("en", "de"):
        for p in (ROOT / "public" / loc).rglob("index.html"):
            if "/blog/" in str(p):
                continue
            html = p.read_text(encoding="utf-8")
            orig = html
            for old, new in VISIBLE:
                html = html.replace(old, new)
            if html != orig:
                p.write_text(html, encoding="utf-8")
    patch_sources()
    print("\nLength outliers (title>60 or desc>160, decoded):")
    for rel, rec in META.items():
        tl, dl = dlen(rec["title"]), dlen(rec["desc"])
        if tl > 60 or dl > 160 or tl < 35:
            print(f"  {rel:52} t={tl} d={dl}")


if __name__ == "__main__":
    main()
