#!/usr/bin/env python3
"""Private hospitals block on the 12 destination pages, in the 12 language trees.

Inserted before the "How we work" section of each destination page, in the
markup of that page's skin (PT lp-section, EN/FR lp-card, cluster section).
Idempotent: a page that already carries the marker is rebuilt in place.

Hospital names and towns were checked against the hospital groups' own sites
or official lists (CUF, Hospital da Luz, Lusíadas, Quirónsalud, HLA, HCB, IMED,
GOV.UK list of medical facilities in Portugal, IB-Salut centre list), November
2026. No statement is made about any insurer's network: direct billing is left
to the insurer's own network, as the text says.

Run from the repository root:
    python3 scripts/add-destination-hospitals.py
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
MARK_A, MARK_B = "<!-- ar-dest-hospitals -->", "<!-- /ar-dest-hospitals -->"

BASES = {
    "pt": "destinos", "en": "en/destinations", "fr": "fr/destinations", "de": "de/destinationen",
    "es": "es/destinos", "nl": "nl/bestemmingen", "it": "it/destinazioni", "pl": "pl/destynacje",
    "se": "se/destinationer", "dk": "dk/destinationer", "il": "il/destinations", "zh": "zh/destinations",
}
SKIN = {"pt": "pt", "en": "card", "fr": "card"}  # every other language: cluster

# "How we work" heading on each language's destination pages
HOW = {
    "pt": "Como trabalhamos", "en": "How we work", "fr": "Notre méthode", "de": "Wie wir arbeiten",
    "es": "Cómo trabajamos", "nl": "Hoe wij werken", "it": "Come lavoriamo", "pl": "Jak pracujemy",
    "se": "Så arbetar vi", "dk": "Sådan arbejder vi", "il": "איך אנחנו עובדים", "zh": "我们的工作方式",
}

IPMI = {
    "pt": "/seguros/saude-internacional/", "en": "/en/international-health-insurance/",
    "de": "/de/internationale-krankenversicherung/", "es": "/es/seguro-medico-internacional/",
    "nl": "/nl/internationale-zorgverzekering/", "fr": "/fr/assurance-sante-internationale/",
    "it": "/it/assicurazione-medica-internazionale/", "pl": "/pl/miedzynarodowe-ubezpieczenie-zdrowotne/",
    "se": "/se/internationell-sjukvardsforsakring/", "dk": "/dk/international-sundhedsforsikring/",
    "il": "/il/international-health-insurance/", "zh": "/zh/international-health-insurance/",
}
GUIDE = {
    "pt": "seguro-domestico-ou-internacional/", "en": "domestic-or-international/",
    "de": "inlaendisch-oder-international/", "es": "domestico-o-internacional/",
    "nl": "binnenlands-of-internationaal/", "fr": "local-ou-international/",
    "it": "locale-o-internazionale/", "pl": "krajowe-czy-miedzynarodowe/",
    "se": "lokal-eller-internationell/", "dk": "lokal-eller-international/",
    "il": "domestic-or-international/", "zh": "domestic-or-international/",
}

HOSPITALS = {
    "lisboa": [("Hospital CUF Descobertas", "Lisboa"), ("Hospital CUF Tejo", "Lisboa"), ("Hospital da Luz Lisboa", "Lisboa")],
    "cascais-sintra": [("Hospital CUF Cascais", "Cascais"), ("Hospital CUF Sintra", "Sintra")],
    "comporta-melides": [("Hospital da Luz Setúbal", "Setúbal")],
    "quinta-do-lago-vale-do-lobo-vilamoura": [("Hospital CUF Faro", "Faro"), ("Hospital Lusíadas Albufeira", "Albufeira")],
    "porto-douro": [("Hospital CUF Porto", "Porto"), ("Hospital da Luz Arrábida", "Vila Nova de Gaia"), ("Hospital Lusíadas Porto", "Porto")],
    "madeira": [("Hospital CUF Madeira", "Funchal"), ("Hospital da Luz Funchal", "Funchal")],
    "marbella-benahavis-sotogrande": [("Hospital Quirónsalud Marbella", "Marbella"), ("HC Marbella International Hospital", "Marbella"),
                                      ("Hospital Ochoa", "Marbella"), ("Hospital Quirónsalud Campo de Gibraltar", "")],
    "mallorca": [("Clínica Rotger", "Palma"), ("Hospital Quirónsalud Palmaplanas", "Palma"), ("Clínica Juaneda", "Palma")],
    "ibiza": [("Policlínica Nuestra Señora del Rosario", "Ibiza")],
    "madrid": [("Hospital Ruber Internacional", "Madrid"), ("Hospital Universitario Quirónsalud Pozuelo", "Pozuelo de Alarcón"),
               ("Hospital Universitario HM Sanchinarro", "Madrid")],
    "barcelona-costa-brava-sitges": [("Centro Médico Teknon", "Barcelona"), ("Hospital Universitari Dexeus", "Barcelona"),
                                     ("Hospital Quirónsalud Barcelona", "Barcelona")],
    "javea-moraira-altea": [("Hospital HLA San Carlos", "Dénia"), ("HCB Dénia", "Dénia"), ("Hospital IMED Levante", "Benidorm"),
                            ("Hospital Clínica Benidorm", "Benidorm")],
}

T = {
    "pt": dict(h2="Hospitais privados na zona",
               intro="Os hospitais privados a que os residentes internacionais mais recorrem nesta zona ou perto dela. O pagamento direto ao hospital depende da rede de cada seguradora — vale a pena confirmá-lo antes de escolher o plano.",
               comporta="Não há hospital privado na Comporta nem em Melides: o mais próximo fica em Setúbal, e os cuidados mais complexos fazem-se normalmente em Lisboa.",
               note="Um seguro de saúde internacional acompanha-o entre Portugal, Espanha e o seu país de origem.",
               ipmi="Seguro de saúde internacional", guide="Doméstico ou internacional? Guia de um minuto"),
    "en": dict(h2="Private hospitals in the area",
               intro="The private hospitals international residents use most in or near this area. Direct billing depends on each insurer’s network — worth checking before you choose a plan.",
               comporta="There is no private hospital in Comporta or Melides: the nearest is in Setúbal, and more complex care is usually in Lisbon.",
               note="International health insurance follows you between Portugal, Spain and your home country.",
               ipmi="International health insurance", guide="Domestic or international? One-minute guide"),
    "fr": dict(h2="Hôpitaux privés dans la région",
               intro="Les hôpitaux privés auxquels les résidents internationaux ont le plus recours dans la région ou à proximité. Le tiers payant dépend du réseau de chaque assureur — à vérifier avant de choisir une formule.",
               comporta="Il n’y a pas d’hôpital privé à Comporta ni à Melides : le plus proche se trouve à Setúbal, et les soins plus complexes se font généralement à Lisbonne.",
               note="Une assurance santé internationale vous suit entre le Portugal, l’Espagne et votre pays d’origine.",
               ipmi="Assurance santé internationale", guide="Local ou international ? Le guide en une minute"),
    "de": dict(h2="Privatkliniken in der Region",
               intro="Die Privatkliniken, die internationale Residenten in der Region oder in ihrer Nähe am häufigsten nutzen. Ob direkt mit dem Versicherer abgerechnet wird, hängt vom Netzwerk des jeweiligen Versicherers ab — prüfen Sie das, bevor Sie einen Tarif wählen.",
               comporta="In Comporta und Melides gibt es keine Privatklinik: Die nächste liegt in Setúbal, komplexere Behandlungen finden meist in Lissabon statt.",
               note="Eine internationale Krankenversicherung begleitet Sie zwischen Portugal, Spanien und Ihrem Heimatland.",
               ipmi="Internationale Krankenversicherung", guide="Inländisch oder international? Der Ein-Minuten-Leitfaden"),
    "es": dict(h2="Hospitales privados en la zona",
               intro="Los hospitales privados a los que más acuden los residentes internacionales en la zona o cerca de ella. El pago directo depende de la red de cada aseguradora: conviene comprobarlo antes de elegir el plan.",
               comporta="No hay hospital privado en Comporta ni en Melides: el más cercano está en Setúbal, y la atención más compleja suele hacerse en Lisboa.",
               note="Un seguro médico internacional le acompaña entre Portugal, España y su país de origen.",
               ipmi="Seguro médico internacional", guide="¿Local o internacional? La guía de un minuto"),
    "nl": dict(h2="Privéziekenhuizen in de regio",
               intro="De privéziekenhuizen waar internationale bewoners in of nabij deze regio het vaakst terechtkunnen. Directe facturering hangt af van het netwerk van elke verzekeraar — controleer dat voordat u een polis kiest.",
               comporta="In Comporta en Melides is geen privéziekenhuis: het dichtstbijzijnde ligt in Setúbal, en complexere zorg vindt meestal in Lissabon plaats.",
               note="Een internationale zorgverzekering gaat met u mee tussen Portugal, Spanje en uw land van herkomst.",
               ipmi="Internationale zorgverzekering", guide="Binnenlands of internationaal? De gids van één minuut"),
    "it": dict(h2="Ospedali privati nella zona",
               intro="Gli ospedali privati a cui i residenti internazionali si rivolgono più spesso nella zona o nelle vicinanze. Il pagamento diretto dipende dalla rete di ciascuna compagnia: conviene verificarlo prima di scegliere il piano.",
               comporta="A Comporta e a Melides non c’è un ospedale privato: il più vicino è a Setúbal, e le cure più complesse si fanno di solito a Lisbona.",
               note="Un’assicurazione sanitaria internazionale la segue tra Portogallo, Spagna e il suo paese d’origine.",
               ipmi="Assicurazione medica internazionale", guide="Locale o internazionale? La guida in un minuto"),
    "pl": dict(h2="Prywatne szpitale w okolicy",
               intro="Prywatne szpitale, z których mieszkający tu cudzoziemcy korzystają najczęściej w tej okolicy lub w jej pobliżu. Rozliczenie bezgotówkowe zależy od sieci danego ubezpieczyciela — warto to sprawdzić przed wyborem planu.",
               comporta="W Comporcie i Melides nie ma prywatnego szpitala: najbliższy jest w Setúbal, a bardziej złożone leczenie odbywa się zwykle w Lizbonie.",
               note="Międzynarodowe ubezpieczenie zdrowotne towarzyszy Ci między Portugalią, Hiszpanią i krajem pochodzenia.",
               ipmi="Międzynarodowe ubezpieczenie zdrowotne", guide="Krajowe czy międzynarodowe? Przewodnik w minutę"),
    "se": dict(h2="Privatsjukhus i området",
               intro="De privatsjukhus som internationella invånare oftast använder i eller nära området. Direktbetalning beror på varje försäkringsbolags nätverk — värt att kontrollera innan du väljer försäkring.",
               comporta="I Comporta och Melides finns inget privatsjukhus: det närmaste ligger i Setúbal, och mer komplex vård ges oftast i Lissabon.",
               note="En internationell sjukvårdsförsäkring följer med dig mellan Portugal, Spanien och ditt hemland.",
               ipmi="Internationell sjukvårdsförsäkring", guide="Inhemsk eller internationell? Guiden på en minut"),
    "dk": dict(h2="Privathospitaler i området",
               intro="De privathospitaler, som internationale beboere oftest bruger i eller nær området. Direkte afregning afhænger af det enkelte forsikringsselskabs netværk — værd at tjekke, før du vælger en forsikring.",
               comporta="Der er intet privathospital i Comporta eller Melides: det nærmeste ligger i Setúbal, og mere kompleks behandling foregår som regel i Lissabon.",
               note="En international sundhedsforsikring følger dig mellem Portugal, Spanien og dit hjemland.",
               ipmi="International sundhedsforsikring", guide="National eller international? Guiden på ét minut"),
    "il": dict(h2="בתי חולים פרטיים באזור",
               intro="בתי החולים הפרטיים שבהם תושבים בינלאומיים משתמשים בתדירות הגבוהה ביותר באזור או בסמוך לו. תשלום ישיר תלוי ברשת של כל חברת ביטוח — כדאי לבדוק זאת לפני בחירת התוכנית.",
               comporta="אין בית חולים פרטי בקומפורטה או במלידש: הקרוב ביותר נמצא בסטובל, וטיפול מורכב יותר ניתן בדרך כלל בליסבון.",
               note="ביטוח בריאות בינלאומי מלווה אתכם בין פורטוגל, ספרד ומדינת המוצא.",
               ipmi="ביטוח בריאות בינלאומי", guide="מקומי או בינלאומי? המדריך של דקה אחת"),
    "zh": dict(h2="该地区的私立医院",
               intro="国际居民在该地区或附近最常使用的私立医院。能否直接结算取决于各保险公司的医疗网络——建议在选择计划前确认。",
               comporta="Comporta 和 Melides 没有私立医院：最近的在 Setúbal，较复杂的治疗通常在里斯本进行。",
               note="国际医疗保险可在葡萄牙、西班牙和您的原籍国之间为您提供保障。",
               ipmi="国际医疗保险", guide="本地还是国际？一分钟指南"),
}


def esc(s):
    return html.escape(s, quote=False)


def items(dest):
    return [(n, t) for n, t in HOSPITALS[dest]]


def block(lang, dest):
    t = T[lang]
    paras = [t["intro"]] + ([t["comporta"]] if dest == "comporta-melides" else [])
    links = (f'{esc(t["note"])} <a href="{IPMI[lang]}">{esc(t["ipmi"])}</a> · '
             f'<a href="{IPMI[lang]}{GUIDE[lang]}">{esc(t["guide"])}</a>')
    skin = SKIN.get(lang, "cluster")
    if skin == "pt":
        lis = "".join(f'\n    <li><strong>{esc(n)}</strong>{" — " + esc(w) if w else ""}</li>' for n, w in items(dest))
        body = "".join(f"\n  <p>{esc(p)}</p>" for p in paras)
        return (f'{MARK_A}\n<section class="lp-section" id="hospitais">\n  <h2>{esc(t["h2"])}</h2>{body}\n'
                f'  <ul class="lp-list">{lis}\n  </ul>\n  <p>{links}</p>\n</section>\n{MARK_B}\n')
    if skin == "card":
        cells = "".join(f'\n        <div class="lp-grid-item"><h3>{esc(n)}</h3><p>{esc(w)}</p></div>' for n, w in items(dest))
        body = "".join(f"\n      <p>{esc(p)}</p>" for p in paras)
        return (f'{MARK_A}\n    <div class="lp-card" id="hospitals">\n      <h2>{esc(t["h2"])}</h2>{body}\n'
                f'      <div class="lp-grid">{cells}\n      </div>\n      <p style="margin-top:18px">{links}</p>\n    </div>\n    {MARK_B}\n    ')
    lis = "".join(f'\n      <li><strong>{esc(n)}</strong>{" — " + esc(w) if w else ""}</li>' for n, w in items(dest))
    body = "".join(f"\n    <p>{esc(p)}</p>" for p in paras)
    return (f'{MARK_A}\n<section class="section plain" aria-labelledby="hospitals">\n  <div class="container narrow article-body">\n'
            f'    <h2 id="hospitals">{esc(t["h2"])}</h2>{body}\n    <ul>{lis}\n    </ul>\n    <p>{links}</p>\n  </div>\n</section>\n{MARK_B}\n\n')


def apply(lang, dest):
    f = PUBLIC / BASES[lang] / dest / "index.html"
    s = f.read_text(encoding="utf-8")
    s = re.sub(re.escape(MARK_A) + r".*?" + re.escape(MARK_B) + r"\n*\s*", "", s, flags=re.S)
    m = re.search(r"<h2[^>]*>\s*" + re.escape(HOW[lang]) + r"\s*</h2>", s)
    if not m:
        raise SystemExit(f"{f}: '{HOW[lang]}' heading not found")
    anchor = '<div class="lp-card">' if SKIN.get(lang) == "card" else "<section"
    a = s.rfind(anchor, 0, m.start())
    s = s[:a] + block(lang, dest) + s[a:]
    f.write_text(s, encoding="utf-8")
    return f


def main():
    n = 0
    for lang in BASES:
        for dest in HOSPITALS:
            apply(lang, dest)
            n += 1
    print(f"{n} destination pages updated")


if __name__ == "__main__":
    main()
