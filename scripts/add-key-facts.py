#!/usr/bin/env python3
"""Adds a short "key facts" list right after the author box of the main
private-client (HNW), family-office and health pillar pages.

Two goals:
- give AI assistants and search engines short, self-contained, verifiable
  statements they can quote;
- qualify private-client visitors: the first fact states who specialist
  home cover is written for (contents and valuables from EUR 150,000, the
  minimum the specialist insurers ask for a permanent residence), so
  smaller risks self-select out and high-net-worth households recognise
  themselves.

Facts come from insurer terms the broker works with and from the pages
themselves. No insurer prices on private-client pages; Chubb is not named.
Idempotent (marker: <!-- AR-KEYFACTS -->). Run: python3 scripts/add-key-facts.py
"""
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent.parent / "public"

STYLE = ('<style id="ar-keyfacts-style">.ar-keyfacts{max-width:1100px;margin:20px auto 0;padding:0 24px}'
         '.ar-keyfacts-inner{background:#fff;border:1px solid #EBE9E8;border-left:4px solid #FF6300;border-radius:16px;padding:22px 26px}'
         '.ar-keyfacts h2{font-size:20px;line-height:1.3;margin:0 0 12px;color:#292929}'
         '.ar-keyfacts ul{margin:0;padding-left:20px}'
         '.ar-keyfacts li{font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 8px}'
         '.ar-keyfacts li strong{color:#292929}</style>')

HNW = {
    "en": ("Key facts", [
        "<strong>Who it is for:</strong> homes with contents and valuables from €150,000, the minimum our specialist insurers ask for a permanent residence. Below that, a well-built standard policy is usually the better answer, and we say so in writing.",
        "<strong>No proportional reduction</strong> once the recommended sums are accepted; after a total loss the house is rebuilt even above the buildings sum insured.",
        "Art, jewellery, watches and collections on <strong>agreed value</strong>, with worldwide all-risks cover for personal possessions.",
        "Individually underwritten with specialist capacity — Hiscox, Liberty, Zurich and Allianz — with the conditions agreed in writing before any claim.",
        "Portugal and Spain with one adviser; where the insurer writes both countries, on one policy.",
        "Written opinion in 24–72 working hours. ASF-registered broker no. 425591790/3, not tied to any insurer. We never ask for your total net worth.",
    ]),
    "pt": ("Factos essenciais", [
        "<strong>Para quem:</strong> residências com recheio e objetos de valor a partir de 150.000 €, o capital mínimo que as nossas seguradoras especializadas pedem para habitação permanente. Abaixo disso, uma boa apólice de mercado costuma ser a melhor resposta — e dizemo-lo por escrito.",
        "<strong>Sem regra proporcional</strong> aceites os capitais recomendados; em caso de perda total, a casa é reconstruída mesmo acima do capital seguro do edifício.",
        "Arte, joalharia, relógios e coleções em <strong>valor acordado</strong>, com cobertura «todos os riscos» em todo o mundo para objetos pessoais.",
        "Subscrição individual com capacidade especializada — Hiscox, Liberty, Zurich e Allianz — com as condições acordadas por escrito antes de qualquer sinistro.",
        "Portugal e Espanha com um único interlocutor; quando a seguradora subscreve os dois países, na mesma apólice.",
        "Parecer por escrito em 24–72 horas úteis. Agente de seguros registado na ASF com o n.º 425591790/3. Nunca pedimos o valor total do seu património.",
    ]),
    "es": ("Datos clave", [
        "<strong>Para quién:</strong> viviendas con contenido y objetos de valor desde 150.000 €, el mínimo que piden nuestras aseguradoras especializadas para una residencia habitual. Por debajo, una buena póliza estándar suele ser la mejor respuesta, y se lo decimos por escrito.",
        "<strong>Sin regla proporcional</strong> una vez aceptadas las sumas recomendadas; tras una pérdida total, la casa se reconstruye aunque supere la suma asegurada del continente.",
        "Arte, joyas, relojes y colecciones a <strong>valor convenido</strong>, con cobertura a todo riesgo en todo el mundo para los objetos personales.",
        "Suscripción individual con capacidad especializada — Hiscox, Liberty, Zurich y Allianz — con las condiciones acordadas por escrito antes de cualquier siniestro.",
        "Portugal y España con un solo asesor; cuando la aseguradora suscribe ambos países, en una sola póliza.",
        "Opinión por escrito en 24–72 horas hábiles. Corredor inscrito en la ASF con el n.º 425591790/3, sin vínculo con ninguna aseguradora. Nunca le pedimos el valor total de su patrimonio.",
    ]),
    "de": ("Das Wichtigste in Kürze", [
        "<strong>Für wen:</strong> Häuser mit Hausrat und Wertsachen ab 150.000 € — das Minimum, das unsere Spezialversicherer für einen Hauptwohnsitz verlangen. Darunter ist eine gut gebaute Standardpolice meist die bessere Lösung, und das sagen wir Ihnen schriftlich.",
        "<strong>Keine Unterversicherungskürzung</strong>, sobald die empfohlenen Summen angenommen sind; nach einem Totalschaden wird das Haus auch über der Gebäudeversicherungssumme wieder aufgebaut.",
        "Kunst, Schmuck, Uhren und Sammlungen zum <strong>vereinbarten Wert</strong>, mit weltweitem Allgefahrenschutz für persönliche Gegenstände.",
        "Individuell gezeichnet mit spezialisierter Kapazität — Hiscox, Liberty, Zurich und Allianz — mit schriftlich vereinbarten Bedingungen vor jedem Schaden.",
        "Portugal und Spanien mit einem Berater; wenn der Versicherer beide Länder zeichnet, in einer Police.",
        "Schriftliche Einschätzung in 24–72 Arbeitsstunden. Bei der ASF unter Nr. 425591790/3 registrierter Makler, an keinen Versicherer gebunden. Wir fragen nie nach Ihrem Gesamtvermögen.",
    ]),
    "nl": ("In het kort", [
        "<strong>Voor wie:</strong> woningen met inboedel en kostbaarheden vanaf € 150.000, het minimum dat onze gespecialiseerde verzekeraars voor een hoofdverblijf vragen. Daaronder is een goede standaardpolis meestal het betere antwoord, en dat zeggen we u schriftelijk.",
        "<strong>Geen onderverzekeringskorting</strong> zodra de aanbevolen bedragen zijn aanvaard; na totaal verlies wordt de woning herbouwd, ook boven het verzekerde bedrag voor de opstal.",
        "Kunst, sieraden, horloges en collecties tegen <strong>getaxeerde waarde</strong>, met wereldwijde all-risksdekking voor persoonlijke bezittingen.",
        "Individueel geaccepteerd met gespecialiseerde capaciteit — Hiscox, Liberty, Zurich en Allianz — met de voorwaarden schriftelijk vastgelegd vóór een schade.",
        "Portugal en Spanje met één adviseur; als de verzekeraar beide landen dekt, in één polis.",
        "Schriftelijk advies binnen 24–72 werkuren. Bij de ASF geregistreerde makelaar nr. 425591790/3, aan geen enkele verzekeraar gebonden. We vragen nooit naar uw totale vermogen.",
    ]),
}

FAMILY_OFFICE = {
    "en": ("Key facts", [
        "One programme for the family, its holding and its people: D&amp;O for the holding, trustee and fiduciary liability, homes and yachts, fraud and cyber, kidnap and extortion, life and succession.",
        "Homes and collections on private-client terms: <strong>no proportional reduction</strong> once the recommended sums are accepted, and collections on <strong>agreed value</strong>.",
        "Portugal and Spain with one adviser, who reads every policy the family holds and is there when a claim is made.",
        "Confidential by design: we never ask for total net worth, only what each risk needs to be underwritten.",
        "Written assessment. ASF-registered broker no. 425591790/3, not tied to any insurer.",
    ]),
    "es": ("Datos clave", [
        "Un solo programa para la familia, su sociedad patrimonial y sus personas: D&amp;O de la holding, responsabilidad de administradores y fiduciarios, viviendas y yates, fraude y ciberriesgo, secuestro y extorsión, vida y sucesión.",
        "Viviendas y colecciones en condiciones private client: <strong>sin regla proporcional</strong> una vez aceptadas las sumas recomendadas, y colecciones a <strong>valor convenido</strong>.",
        "España y Portugal con un solo asesor, que lee cada póliza de la familia y está presente en el siniestro.",
        "Confidencialidad: nunca pedimos el patrimonio total, solo lo que cada riesgo necesita para suscribirse.",
        "Análisis por escrito. Corredor inscrito en la ASF con el n.º 425591790/3, sin vínculo con ninguna aseguradora.",
    ]),
    "de": ("Das Wichtigste in Kürze", [
        "Ein Programm für die Familie, ihre Holding und ihre Menschen: D&amp;O der Holding, Treuhänder- und Organhaftung, Häuser und Yachten, Betrug und Cyber, Entführung und Erpressung, Leben und Nachfolge.",
        "Häuser und Sammlungen zu Private-Client-Bedingungen: <strong>keine Unterversicherungskürzung</strong> nach Annahme der empfohlenen Summen, Sammlungen zum <strong>vereinbarten Wert</strong>.",
        "Portugal und Spanien mit einem Berater, der jede Police der Familie kennt und im Schadenfall da ist.",
        "Diskret: Wir fragen nie nach dem Gesamtvermögen, nur nach dem, was jedes Risiko für die Zeichnung braucht.",
        "Schriftliche Einschätzung. Bei der ASF unter Nr. 425591790/3 registrierter Makler, an keinen Versicherer gebunden.",
    ]),
}

HEALTH_PT = {
    "en": ("Key facts", [
        "Portuguese private health plans exclude pre-existing conditions. The exception we place is <strong>MGEN</strong>: no medical questionnaire, pre-existing conditions covered after a 365-day waiting period, and no age limit to join — but it needs at least two insured persons.",
        "Every insured person, including children, needs a Portuguese tax number (NIF), and the policy needs a residential address in Portugal.",
        "Without a Portuguese address yet, or to stay covered when you move again, the alternative is <a href=\"/en/international-health-insurance/\">international health insurance</a> with Allianz Care or Cigna Global.",
        "We choose plans by cover, assistance and claims service, never by the lowest premium — from Médis/Zurich, Allianz, MGEN and Asisa.",
        "Written comparison in English. ASF-registered broker no. 425591790/3, not tied to any insurer.",
    ]),
    "es": ("Datos clave", [
        "Las pólizas de salud portuguesas excluyen las enfermedades preexistentes. La excepción que contratamos es <strong>MGEN</strong>: sin cuestionario médico, preexistencias cubiertas tras una carencia de 365 días y sin límite de edad de entrada, pero exige al menos dos asegurados.",
        "Cada asegurado, incluidos los niños, necesita NIF portugués, y la póliza necesita una dirección de residencia en Portugal.",
        "Si aún no tiene dirección en Portugal, o quiere mantener la cobertura si vuelve a mudarse, la alternativa es el <a href=\"/es/seguro-medico-internacional/\">seguro médico internacional</a> con Allianz Care o Cigna Global.",
        "Elegimos por coberturas, asistencia y gestión de siniestros, nunca por la prima más baja — entre Médis/Zurich, Allianz, MGEN y Asisa.",
        "Comparación por escrito. Corredor inscrito en la ASF con el n.º 425591790/3, sin vínculo con ninguna aseguradora.",
    ]),
    "de": ("Das Wichtigste in Kürze", [
        "Portugiesische private Krankenversicherungen schließen Vorerkrankungen aus. Die Ausnahme, die wir vermitteln, ist <strong>MGEN</strong>: kein Gesundheitsfragebogen, Vorerkrankungen nach 365 Tagen Wartezeit versichert, kein Eintrittshöchstalter — aber mindestens zwei versicherte Personen.",
        "Jede versicherte Person, auch Kinder, braucht eine portugiesische Steuernummer (NIF), und die Police eine Wohnadresse in Portugal.",
        "Ohne portugiesische Adresse oder wenn Sie weiterziehen, ist die <a href=\"/de/internationale-krankenversicherung/\">internationale Krankenversicherung</a> mit Allianz Care oder Cigna Global die Alternative.",
        "Wir wählen nach Leistung, Assistance und Schadenservice, nie nach dem niedrigsten Beitrag — aus Médis/Zurich, Allianz, MGEN und Asisa.",
        "Schriftlicher Vergleich auf Deutsch. Bei der ASF unter Nr. 425591790/3 registrierter Makler, an keinen Versicherer gebunden.",
    ]),
}

HEALTH_ES = {
    "en": ("Key facts", [
        "Spain’s non-lucrative and remote-work residence permits require public or private health insurance with an insurer <strong>authorised to operate in Spain</strong>; travel insurance is not accepted for remote work.",
        "EU and UK state pensioners may be entitled to public healthcare in Spain through an S1 form; private cover sits alongside it.",
        "For families who split their time between countries, <a href=\"/en/international-health-insurance/\">international health insurance</a> with Allianz Care or Cigna Global covers Spain and the rest of the area chosen.",
        "We choose plans by cover, assistance and claims service, never by the lowest premium, and confirm visa suitability before you apply.",
        "Written comparison in English. ASF-registered broker no. 425591790/3, operating in Spain under the EU freedom to provide services.",
    ]),
    "es": ("Datos clave", [
        "La residencia no lucrativa y la de teletrabajo internacional exigen un seguro público o privado con una entidad <strong>autorizada para operar en España</strong>; para el teletrabajo no se aceptan seguros de viaje.",
        "Los pensionistas de la UE y del Reino Unido pueden tener derecho a la sanidad pública española mediante el formulario S1; el seguro privado la complementa.",
        "Para familias que reparten su vida entre varios países, el <a href=\"/es/seguro-medico-internacional/\">seguro médico internacional</a> con Allianz Care o Cigna Global cubre España y el resto de la zona elegida.",
        "Elegimos por coberturas, asistencia y gestión de siniestros, nunca por la prima más baja, y confirmamos que encaja con su visado antes de solicitarlo.",
        "Comparación por escrito. Corredor inscrito en la ASF con el n.º 425591790/3, que opera en España en libre prestación de servicios.",
    ]),
    "de": ("Das Wichtigste in Kürze", [
        "Spaniens nicht erwerbstätige Aufenthaltserlaubnis und die Erlaubnis für Telearbeit verlangen eine Krankenversicherung bei einem <strong>in Spanien zugelassenen Versicherer</strong>; für Telearbeit werden keine Reisepolicen akzeptiert.",
        "Rentner aus der EU können über das Formular S1 Anspruch auf staatliche Versorgung in Spanien haben; der private Schutz ergänzt sie.",
        "Für Familien, die zwischen Ländern leben, deckt die <a href=\"/de/internationale-krankenversicherung/\">internationale Krankenversicherung</a> mit Allianz Care oder Cigna Global Spanien und den übrigen Geltungsbereich.",
        "Wir wählen nach Leistung, Assistance und Schadenservice, nie nach dem niedrigsten Beitrag, und prüfen die Visumstauglichkeit vor dem Antrag.",
        "Schriftlicher Vergleich auf Deutsch. Bei der ASF unter Nr. 425591790/3 registrierter Makler, in Spanien im Rahmen der EU-Dienstleistungsfreiheit tätig.",
    ]),
}

TARGETS = {
    "en/private-clients": HNW["en"], "en/private-clients-spain": HNW["en"], "en/home-insurance-quote": HNW["en"],
    "de/private-clients": HNW["de"], "de/private-clients-portugal": HNW["de"], "de/private-clients-spanien": HNW["de"],
    "de/hausversicherung-portugal": HNW["de"], "de/hausversicherung-spanien": HNW["de"],
    "es/seguro-hogar-alto-valor": HNW["es"], "private-clients": HNW["pt"],
    "nl/woonverzekering-hoogwaardige-woning-voorwaarden": HNW["nl"],
    "en/family-office-insurance": FAMILY_OFFICE["en"], "de/family-office-versicherung": FAMILY_OFFICE["de"], "es/seguro-family-office": FAMILY_OFFICE["es"],
    "en/health-insurance-quote": HEALTH_PT["en"], "de/krankenversicherung-portugal": HEALTH_PT["de"], "es/seguro-salud-internacional": HEALTH_PT["es"],
    "en/health-insurance-spain": HEALTH_ES["en"], "de/krankenversicherung-spanien": HEALTH_ES["de"], "es/seguro-salud-espana": HEALTH_ES["es"],
}


def block(title, items):
    lis = "".join(f"<li>{i}</li>" for i in items)
    return (f'<!-- AR-KEYFACTS -->\n<section class="ar-keyfacts" aria-label="{title}"><div class="ar-keyfacts-inner">'
            f"<h2>{title}</h2><ul>{lis}</ul></div></section>\n")


def main():
    for rel, (title, items) in TARGETS.items():
        f = PUBLIC / rel / "index.html"
        html = f.read_text(encoding="utf-8")
        if "<!-- AR-KEYFACTS -->" in html:
            continue
        i = html.index("<!-- AR-AUTHOR -->")
        j = html.index("</div></div>\n", i) + len("</div></div>\n")
        html = html[:j] + block(title, items) + html[j:]
        html = html.replace("</head>", STYLE + "\n</head>", 1)
        f.write_text(html, encoding="utf-8")
        print("key facts:", rel)


if __name__ == "__main__":
    main()
