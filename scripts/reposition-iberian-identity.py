#!/usr/bin/env python3
"""
Repositioning pass (September 2026): Adler & Rochefort presents itself as a
national and Iberian private-client firm — offices in Lisbon and Lagos,
ASF-registered, operating in Spain under the EU freedom to provide services —
instead of "an English-speaking broker in Lagos, Algarve".

What this script does, and only this:
  * rewrites self-descriptions that anchor the firm to Lagos or the Algarve;
  * converts informal German FAQ questions ("habt ihr", "seid ihr") to the
    formal "Sie" register expected by private clients;
  * replaces the "our Spanish insurer relationships are still being built"
    disclaimers with the current position;

Local guides whose *subject* is Lagos or the Algarve keep their subject —
only the sentences describing the firm change.

Scope: the PT root tree, /en/ and /de/ in public/, plus generator sources in
scripts/ and data/ so a re-run of a generator does not bring the old copy
back. Idempotent: running it twice changes nothing the second time.

    python3 scripts/reposition-iberian-identity.py          # apply
    python3 scripts/reposition-iberian-identity.py --dry-run
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY = '--dry-run' in sys.argv
OTHER_LANG_TREES = {'nl', 'fr', 'pl', 'se', 'dk', 'zh', 'il'}

# (old, new) literal replacements. Order matters where one string contains
# another: longer, more specific strings first.
R = [
    # ---- EN top bars / chrome ------------------------------------------
    ("English-speaking insurance broker in Lagos, Algarve, Portugal — registered with the ASF nº 425591790/3.",
     "Private-client insurance broker for Portugal and Spain — registered with the ASF nº 425591790/3."),
    ("English-speaking relocation &amp; insurance help in Lagos, Algarve, Portugal — registered with the ASF nº 425591790/3.",
     "Relocation &amp; insurance support in Portugal and Spain — registered with the ASF nº 425591790/3."),
    ("English-speaking fiscal representation &amp; insurance help in Lagos, Algarve, Portugal — registered with the ASF nº 425591790/3.",
     "Fiscal representation &amp; insurance support across Portugal — registered with the ASF nº 425591790/3."),
    ("English-speaking insurance broker for international clients, registered with Portugal's ASF, no. 425591790/3, and serving Spain on a cross-border basis — home, health, car, life and private-client cover.",
     "Private-client insurance broker for Portugal and Spain, registered with Portugal's ASF, no. 425591790/3, with offices in Lisbon and Lagos — high-value homes, collections, liability, health and cars."),
    ("English-speaking insurance broker for international clients in Portugal and Spain. Personal insurance for health, home, car, life and private clients, registered with Portugal's ASF and operating in Spain on a cross-border basis.",
     "Private-client insurance broker for high-net-worth households in Portugal and Spain: high-value homes, art and collections, family liability, international health and collector cars. Registered with Portugal's ASF (no. 425591790/3), offices in Lisbon and Lagos, operating in Spain under the EU freedom to provide services."),

    # ---- EN body --------------------------------------------------------
    ("<strong>English-speaking and not tied to a single insurer</strong>, based in Lagos, Algarve.",
     "<strong>Not tied to a single insurer</strong>, with offices in Lisbon and Lagos and clients across Portugal and Spain."),
    ("<strong>Independent and English-speaking</strong>, based in Lagos, Algarve.",
     "<strong>Not tied to a single insurer</strong>, with offices in Lisbon and Lagos and clients across Portugal and Spain."),
    ("An English-speaking broker based in Lagos explains", "An ASF-registered private-client broker explains"),
    ("from an Algarve broker", "from a private-client broker in Portugal and Spain"),
    ("English-speaking broker, Algarve", "private-client broker, Portugal &amp; Spain"),
    ("Our office is in Lagos; the property does not have to be", "We work from Lisbon and Lagos; the property can be anywhere in Portugal"),
    ("English-speaking, ASF-registered insurance broker in the Algarve", "ASF-registered private-client insurance broker in Portugal and Spain"),
    ("English-speaking broker in the Algarve", "private-client broker in Portugal and Spain"),
    ("How to insure your car when moving to Portugal. Adler &amp; Rochefort, Lagos.", "How to insure your car when moving to Portugal."),
    (" Adler &amp; Rochefort, Lagos.", ""),
    (" Adler & Rochefort, Lagos.", ""),
    ("Adler &amp; Rochefort · Lagos, Algarve", "Adler &amp; Rochefort · Lisboa · Lagos"),
    ("We are based in Lagos and know the Algarve especially well, but we arrange insurance for clients across Portugal",
     "We work from offices in Lisbon and Lagos and arrange insurance for clients across Portugal and Spain"),
    ("We serve clients across the Algarve and all of Portugal", "We serve clients across Portugal and Spain, from offices in Lisbon and Lagos"),
    ("We work with expats and international residents across Lagos, Luz, Portimão and the wider Algarve",
     "We work with international residents across Portugal and Spain, and our Lagos office knows Luz, Portimão and the wider Algarve at first hand"),
    ("We work in English from the Algarve", "We work in English from Lisbon and Lagos"),
    ("We are an English-speaking, ASF-registered insurance broker in the Algarve", "We are an ASF-registered private-client broker working across Portugal and Spain"),
    ("We are an ASF-registered, English-speaking insurance broker working across the Algarve", "We are an ASF-registered private-client broker working across Portugal and Spain"),
    ("We are an English-speaking, ASF-registered insurance broker based in Lagos, twenty minutes from Carvoeiro",
     "We are an ASF-registered private-client broker with offices in Lisbon and Lagos, and Carvoeiro is a coast we know at first hand"),
    ("We are an ASF-registered, English-speaking insurance broker based in Lagos, and",
     "We are an ASF-registered private-client broker with offices in Lisbon and Lagos, and"),
    ("Our office is in Lagos, on the mainland", "Our offices are in Lisbon and Lagos, on the mainland"),
    ("The registered office is in Lagos", "Our offices are in Lisbon and Lagos"),
    ("This page is about the Algarve, where our office is", "This page is about the Algarve, where one of our two offices is"),
    ("It is also the natural extension of our own patch: our office is in Lagos, half an hour up the road, and this is a coast we write regularly",
     "It is also a coast we write regularly from our Lagos office"),
    ("We run this service from Lagos, which is where most of our clients' Portuguese paperwork begins",
     "We run this service from Lisbon and Lagos, for clients anywhere in Portugal"),
    ("We are in Lagos, half an hour away, and we write a lot of this coast", "We write a lot of this coast from our Lagos office"),
    ("English-speaking, Algarve-based, and connected to everything else you'll need, including insurance",
     "English-speaking, working across Portugal from Lisbon and Lagos, and connected to everything else you'll need, including insurance"),
    ("425591790/3, based in Lagos in the Algarve and working with international clients across Portugal",
     "425591790/3, with offices in Lisbon and Lagos and working with private clients across Portugal and Spain"),
    (", based in Lagos, Algarve.", ", with offices in Lisbon and Lagos."),
    ("Established in Lagos, Algarve, with several years arranging insurance for international clients — now extending that service to Spain on a cross-border basis.",
     "Offices in Lisbon and Lagos, clients across Portugal and Spain, and one ASF registration that covers both markets."),
    ("insurance broker Algarve", "private client insurance broker Portugal Spain"),
    ("ASF-registered insurance intermediary in Lagos.", "ASF-registered insurance broker in Portugal and Spain."),

    # ---- EN: Spain "still being built" ----------------------------------
    ("Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what we can currently arrange than promise a panel that does not exist yet.",
     "Yes, once we know the risk. In Spain we place with insurers licensed there — Hiscox underwrites in both Portugal and Spain — and with specialist high-net-worth capacity distributed in Spain. The insurer we propose depends on the property and the household, and is named in writing with the proposal."),
    ("Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what can currently be arranged than name a panel we do not actually have.",
     "Yes, once we know the risk. In Spain we place with insurers licensed there — Hiscox underwrites in both Portugal and Spain — and with specialist high-net-worth capacity distributed in Spain. The insurer we propose depends on the risk, and is named in writing with the proposal."),
    ("Not yet, honestly — our Spanish insurer relationships are still being built. We ask about your property and situation and come back with a clear written answer on what can currently be arranged, rather than promise a panel we do not yet have.",
     "Yes, once we know the risk. In Spain we place with insurers licensed there — Hiscox underwrites in both Portugal and Spain — and with specialist high-net-worth capacity distributed in Spain. We ask about the property and the household first, and name the insurer in writing with the proposal."),
    ("Not yet, honestly. Our Spanish insurer relationships are still being built, and we would rather tell you clearly what can currently be arranged than promise a panel that does not exist yet.",
     "Yes, once we know the risk. In Spain we place with insurers licensed there — Hiscox underwrites in both Portugal and Spain — and with specialist high-net-worth capacity distributed in Spain. The insurer we propose depends on the risk, and is named in writing with the proposal."),
    ("Insurer relationships and product availability vary by market — the insurers above operate in Portugal. Our Spanish insurer relationships are still being built; tell us what you need and we will confirm honestly what can currently be arranged in Spain.",
     "Insurer relationships and product availability vary by market. In Spain we place with insurers licensed there and with specialist high-net-worth capacity; the insurer proposed is always named in writing with the proposal."),

    # ---- DE top bars / chrome -------------------------------------------
    ("Adler &amp; Rochefort — registrierter Versicherungsmakler bei der ASF Nr. 425591790/3 · Lagos, Algarve",
     "Adler &amp; Rochefort — registrierter Versicherungsmakler bei der ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien"),
    ("Versicherungsmakler für Expats und Unternehmen an der Algarve, Portugal — bei der ASF registriert unter Nr. 425591790/3. Klare Beratung, in unserem Versichererportfolio.",
     "Versicherungsmakler für Privatmandanten in Portugal und Spanien — bei der ASF registriert unter Nr. 425591790/3, Büros in Lissabon und Lagos."),
    ("Versicherungsmakler für Expats und Unternehmen an der Algarve, Portugal. Klare Beratung, in unserem Versichererportfolio.",
     "Versicherungsmakler für Privatmandanten in Portugal und Spanien, mit Büros in Lissabon und Lagos."),

    # ---- DE body --------------------------------------------------------
    ("Nein. Unser Sitz ist in Lagos, Portugal. ", "Nein. Unsere Büros sind in Lissabon und Lagos. "),
    ("Nein. Die registrierte Adresse ist in Lagos, Varandas de São João 4, 8600-324. Madeira wird als portugiesisches Risiko von dieser Registrierung aus schriftlich bearbeitet. Wir behaupten kein Büro und keinen örtlichen Bestand, den wir nicht haben.",
     "Nein. Unsere Büros sind in Lissabon und Lagos. Madeira ist ein portugiesisches Risiko und wird von dort aus schriftlich betreut — mit Besichtigung vor Ort, wenn der Versicherer sie verlangt."),
    ("Ja. Unsere registrierte Geschäftsadresse ist in Lagos, Varandas de São João 4, 8600-324 — wenige Minuten die Küste entlang.",
     "Ja. Eines unserer beiden Büros ist in Lagos, wenige Minuten die Küste entlang; das andere in Lissabon."),
    ("Nein. Unsere registrierte Adresse ist in Lagos, eine halbe Stunde entfernt. Die südwestlichen Concelhos schreiben wir regelmäßig — nah genug, ein Dach zu sehen, statt nur darüber zu lesen.",
     "Nein. Unser Büro in Lagos liegt eine halbe Stunde entfernt, das zweite ist in Lissabon. Die südwestlichen Concelhos schreiben wir regelmäßig — nah genug, ein Dach zu sehen, statt nur darüber zu lesen."),
    ("Unsere registrierte Geschäftsadresse ist in Lagos, Algarve. Wir betreuen Kunden in ganz Portugal, einschließlich Lissabon.",
     "Ja. Unser Büro in Lissabon ist an der Av. do Atlântico 16 (Parque das Nações); das zweite ist in Lagos. Wir betreuen Mandanten in ganz Portugal und in Spanien."),
    ("Ja — unsere registrierte Geschäftsadresse ist in Lagos, an der westlichen Algarve.",
     "Ja — eines unserer beiden Büros ist in Lagos, an der westlichen Algarve; das andere in Lissabon."),
    ("Ja, das ist unsere registrierte Geschäftsadresse (Varandas de São João 4, 8600-324 Lagos).",
     "Ja. Lagos ist einer unserer beiden Bürostandorte; der andere ist Lissabon."),
    ("Unser Sitz ist in Lagos, rund eine halbe Stunde entfernt. Die südwestlichen Concelhos schreiben wir regelmäßig.",
     "Unser Büro in Lagos liegt rund eine halbe Stunde entfernt. Die südwestlichen Concelhos schreiben wir regelmäßig."),
    ("Wir sitzen in Lagos und kennen die westliche Algarve am besten. Versichern können wir in ganz Portugal; bei Themen wie Krankenversicherung und Hausversicherung ist lokale Marktkenntnis besonders wertvoll.",
     "In ganz Portugal und in Spanien. Wir haben Büros in Lissabon und Lagos; Spanien betreuen wir im europäischen Dienstleistungsverkehr von unserer ASF-Registrierung aus."),
    ("Wir sitzen in Lagos, mitten in der Algarve — das ist keine Marketingaussage, sondern unsere registrierte Geschäftsadresse",
     "Mit einem Büro in Lagos kennen wir die Algarve aus der Praxis, nicht aus dem Prospekt"),
    ("Wir sitzen in Lagos und kennen die westliche Algarve am besten", "Unser Büro in Lagos kennt die westliche Algarve aus der Praxis"),
    ("Unser Sitz ist in Lagos, rund eine halbe Stunde entfernt", "Unser Büro in Lagos liegt rund eine halbe Stunde entfernt"),
    ("Sagen Sie uns, worum es geht — wir sitzen in Lagos und kennen die Stadt und ihre Versicherer direkt vor Ort",
     "Sagen Sie uns, worum es geht — wir haben ein Büro in Lagos und kennen die Stadt aus der Praxis"),
    ("Lagos ist nicht nur eine Stadt, die wir bedienen — es ist unsere registrierte Geschäftsadresse",
     "Lagos ist nicht nur eine Stadt, die wir bedienen — es ist einer unserer beiden Bürostandorte"),
    ("Ansässig in Lagos, Algarve, seit mehreren Jahren für internationale Mandanten tätig — denselben Service erweitern wir grenzüberschreitend auf Spanien.",
     "Büros in Lissabon und Lagos, Mandanten in Portugal und Spanien — eine ASF-Registrierung für beide Märkte."),
    ("An der Algarve ansässig, mit über 20 Jahren Erfahrung im Versicherungs- und Tourismussektor",
     "Büros in Lissabon und Lagos, Mandanten in Portugal und Spanien"),
    ("Wir sitzen in Lagos, wenige Minuten entfernt", "Unser Büro in Lagos liegt wenige Minuten entfernt"),
    ("Wir sitzen in Lagos und schreiben diese Küste regelmäßig — Dach, Salz und Leerstand inklusive",
     "Diese Küste schreiben wir regelmäßig aus unserem Büro in Lagos — Dach, Salz und Leerstand inklusive"),
    ("Wir sitzen in Lagos und kennen die westlichen Concelhos aus der Praxis, nicht nur von der Karte",
     "Unser Büro in Lagos kennt die westlichen Concelhos aus der Praxis, nicht nur von der Karte"),
    ("Wir schreiben diese Küste regelmäßig, vom Sitz in Lagos", "Wir schreiben diese Küste regelmäßig, aus unserem Büro in Lagos"),
    ("Sie ist auch die natürliche Verlängerung unseres eigenen Gebiets: der Sitz in Lagos liegt eine halbe Stunde die Straße hinauf, und diese Küste schreiben wir regelmäßig",
     "Diese Küste schreiben wir regelmäßig aus unserem Büro in Lagos"),
    ("und der Sitz unseres Maklerbüros vor Ort", "und eines unserer beiden Büros vor Ort"),
    ("Schriftlich erklärt, vom Sitz in Lagos — eine halbe Stunde entfernt", "Schriftlich erklärt, aus unserem Büro in Lagos"),
    ("Atlantikwind, Salzluft und Leerstand — vom Sitz in Lagos, eine halbe Stunde entfernt", "Atlantikwind, Salzluft und Leerstand — aus unserem Büro in Lagos betreut"),
    ("Villen und Zweitwohnsitze an der Bucht, Leerstand, Pool und der Sitz in Lagos — zehn Minuten entfernt",
     "Villen und Zweitwohnsitze an der Bucht, Leerstand und Pool — aus unserem Büro in Lagos betreut"),
    ("Schriftlich, vom Sitz in Lagos", "Schriftlich, aus Lissabon und Lagos"),
    ("Vom Sitz in Lagos — kein Büro in Funchal, keine erfundenen Prämien", "Aus Lissabon und Lagos betreut, schriftlich, ohne erfundene Prämien"),
    ("Sitz in Lagos", "Büros in Lissabon und Lagos"),

    # ---- DE: formal register in FAQ questions ---------------------------
    ("Wie weit seid ihr von Burgau?", "Wie weit ist Ihr Büro von Burgau entfernt?"),
    ("Was kostet die Beratung durch euch?", "Was kostet Ihre Beratung?"),
    ("Versichert ihr jedes Haus auf der Insel?", "Versichern Sie jedes Haus auf der Insel?"),
    ("Versichert ihr jede Villa an der Küste?", "Versichern Sie jede Villa an der Küste?"),
    ("Versichert ihr auch das Hinterland, nicht nur die Küste?", "Versichern Sie auch das Hinterland, nicht nur die Küste?"),
    ("Sitzt ihr wirklich in der Nähe von Luz?", "Ist Ihr Büro wirklich in der Nähe von Luz?"),
    ("Sitzt ihr in Sagres?", "Haben Sie ein Büro in Sagres?"),
    ("Seid ihr ein deutsches Versicherungsunternehmen?", "Sind Sie ein deutsches Versicherungsunternehmen?"),
    ("Ist euer Büro wirklich in Lagos?", "Ist Ihr Büro wirklich in Lagos?"),
    ("Habt ihr ein Büro", "Haben Sie ein Büro"),
    ("Arbeitet ihr in ganz Portugal oder nur an der Algarve?", "Arbeiten Sie in ganz Portugal oder nur an der Algarve?"),

    # ---- DE: Spain "im Aufbau" ------------------------------------------
    ("Nein. Wir sagen ehrlich, dass die spanischen Versichererbeziehungen noch im Aufbau sind. Schildern Sie die Lage — wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.",
     "Nicht jedes, und das sagen wir vorher. In Spanien platzieren wir bei dort zugelassenen Versicherern — Hiscox zeichnet in Portugal und Spanien — und über spezialisierte Kapazität für hochwertige Privatrisiken. Schildern Sie Lage, Bauweise und Nutzung; wir antworten schriftlich, auch wenn ein Fall nicht platzierbar ist."),
    ("Nein. Die spanischen Versichererbeziehungen sind noch im Aufbau. Schildern Sie die Lage — wir antworten schriftlich, auch wenn ein Fall derzeit nicht vermittelbar ist.",
     "Nicht jede, und das sagen wir vorher. In Spanien platzieren wir bei dort zugelassenen Versicherern — Hiscox zeichnet in Portugal und Spanien — und über spezialisierte Kapazität für hochwertige Privatrisiken. Schildern Sie Lage, Bauweise und Nutzung; wir antworten schriftlich, auch wenn ein Fall nicht platzierbar ist."),
    ("Versichererbeziehungen und Produktverfügbarkeit unterscheiden sich je nach Markt — die oben genannten Versicherer sind in Portugal tätig. Unsere spanischen Beziehungen bauen wir noch auf; sagen Sie uns, was Sie brauchen, und wir sagen ehrlich, was sich derzeit in Spanien vermitteln lässt.",
     "Versichererbeziehungen und Produktverfügbarkeit unterscheiden sich je nach Markt. In Spanien platzieren wir bei dort zugelassenen Versicherern und über spezialisierte Kapazität für hochwertige Privatrisiken; der vorgeschlagene Versicherer steht immer schriftlich im Angebot."),

    # ---- PT ---------------------------------------------------------------
    ("Trabalhamos em todo o Algarve e a nível nacional. Lagos, Luz e Portimão estão entre as zonas que acompanhamos mais de perto.",
     "Não. Trabalhamos em todo o país e em Espanha, a partir dos escritórios de Lisboa e de Lagos."),
    ("Mediador de seguros especializado em proteção empresarial e individual. Tecnologia proprietária com IA para gestão inteligente de apólices com a plataforma Os Meus Seguros — para empresas e particulares.",
     "Agente de seguros para clientes privados, patrimónios de elevado valor e riscos profissionais, em Portugal e Espanha. Escritórios em Lisboa e Lagos."),
]

# Partner lists are governed by data/partners.json and are not touched here.
PARTNER_RE = []


def in_scope(rel):
    parts = rel.split(os.sep)
    if parts[0] == 'public':
        if len(parts) > 1 and parts[1] in OTHER_LANG_TREES:
            return False
        return rel.endswith(('.html', '.xml', '.json'))
    if parts[0] in ('scripts', 'data'):
        return rel.endswith(('.mjs', '.js', '.json', '.py')) and 'reposition-iberian-identity' not in rel
    return False


def main():
    changed = 0
    for base in ('public', 'scripts', 'data'):
        for dp, dn, fn in os.walk(os.path.join(ROOT, base)):
            dn[:] = [d for d in dn if d != 'node_modules']
            for f in fn:
                p = os.path.join(dp, f)
                rel = os.path.relpath(p, ROOT)
                if not in_scope(rel):
                    continue
                try:
                    s = open(p, encoding='utf-8').read()
                except UnicodeDecodeError:
                    continue
                o = s
                for a, b in R:
                    s = s.replace(a, b)
                    # the same sentence inside JSON-LD, with a plain ampersand
                    if '&amp;' in a:
                        s = s.replace(a.replace('&amp;', '&'), b.replace('&amp;', '&'))
                for rx, b in PARTNER_RE:
                    s = rx.sub(b, s)
                if s != o:
                    changed += 1
                    if not DRY:
                        open(p, 'w', encoding='utf-8').write(s)
    print(('would change' if DRY else 'changed'), changed, 'files')


if __name__ == '__main__':
    main()
