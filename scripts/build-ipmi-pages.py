#!/usr/bin/env python3
"""International health insurance (IPMI) cluster builder.

1. Adds to the three hubs (EN/ES/DE), idempotently via HTML markers:
   author box, destinations grid, Trustpilot reviews, real quote examples,
   and a Person entity in the structured data.
2. Generates the destination / profile pages defined in
   scripts/ipmi_pages_content.py, using each hub as the page template
   (same head assets, navigation, footer, form and scripts).
3. Prints the URLs for the sitemap (run scripts/generate-sitemap.mjs after).

Run from the repository root: python3 scripts/build-ipmi-pages.py
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ipmi_blocks as B  # noqa: E402
from ipmi_pages_content import PAGES  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"

HUBS = {
    "en": {"path": "/en/international-health-insurance/", "home": ("Home", "/en/"), "hub_label": "International health insurance",
           "process_id": "process", "why_id": "why-adler-rochefort", "faq_id": "faq"},
    "es": {"path": "/es/seguro-medico-internacional/", "home": ("Inicio", "/es/"), "hub_label": "Seguro médico internacional",
           "process_id": "como-funciona", "why_id": "por-que-nosotros", "faq_id": "preguntas-frecuentes"},
    "de": {"path": "/de/internationale-krankenversicherung/", "home": ("Startseite", "/de/"), "hub_label": "Internationale Krankenversicherung",
           "process_id": "ablauf", "why_id": "warum-wir", "faq_id": "haeufige-fragen"},
}

UI = {
    "en": {"cta": "Compare Allianz Care and Cigna Global", "ghost": "International health insurance guide",
           "trust": ["EU-regulated broker &middot; ASF 425591790/3", "Appointed by Allianz Care &amp; Cigna Global", "TrustScore 4.3/5 on Trustpilot"],
           "how_h2": "How we work", "how": [
               ("Both insurers, side by side", "Allianz Care and Cigna Global configured on the same terms, with our recommendation in writing."),
               ("One adviser, quote to claim", "The person who quotes your plan handles the application, the certificate, renewals and claims."),
               ("No fee to you", "We are paid by the insurer. Quotation, comparison and help with claims cost you nothing.")],
           "faq_h2": "Frequently asked questions", "related_h2": "Related reading", "aria_bc": "Breadcrumb"},
    "es": {"cta": "Comparar Allianz Care y Cigna Global", "ghost": "Guía del seguro médico internacional",
           "trust": ["Corredor regulado en la UE &middot; ASF 425591790/3", "Nombrados por Allianz Care y Cigna Global", "TrustScore 4,3/5 en Trustpilot"],
           "how_h2": "Cómo trabajamos", "how": [
               ("Las dos aseguradoras, lado a lado", "Allianz Care y Cigna Global configuradas en las mismas condiciones, con nuestra recomendación por escrito."),
               ("Un asesor de la cotización al siniestro", "Quien cotiza su plan le acompaña en la solicitud, el certificado, las renovaciones y los siniestros."),
               ("Sin coste para usted", "Nos paga la aseguradora. La cotización, la comparación y la ayuda con siniestros no le cuestan nada.")],
           "faq_h2": "Preguntas frecuentes", "related_h2": "Lecturas relacionadas", "aria_bc": "Ruta de navegación"},
    "de": {"cta": "Allianz Care und Cigna Global vergleichen", "ghost": "Ratgeber internationale Krankenversicherung",
           "trust": ["EU-regulierter Makler &middot; ASF 425591790/3", "Partner von Allianz Care und Cigna Global", "TrustScore 4,3/5 auf Trustpilot"],
           "how_h2": "So arbeiten wir", "how": [
               ("Beide Versicherer nebeneinander", "Allianz Care und Cigna Global zu gleichen Bedingungen, mit schriftlicher Empfehlung."),
               ("Ein Berater bis zum Leistungsfall", "Wer Ihr Angebot erstellt, begleitet Antrag, Bescheinigung, Verlängerung und Leistungsfall."),
               ("Für Sie kostenlos", "Wir werden vom Versicherer vergütet. Angebot, Vergleich und Hilfe im Leistungsfall kosten Sie nichts.")],
           "faq_h2": "Häufige Fragen", "related_h2": "Weiterlesen", "aria_bc": "Brotkrumen"},
}


def hub_file(lang):
    return PUBLIC / HUBS[lang]["path"].strip("/") / "index.html"


def insert_before(s, needle, block, marker):
    if marker in s:
        return s
    i = s.index(needle)
    return s[:i] + block.lstrip("\n") + "\n" + s[i:]


def enhance_hub(lang, dest_pages):
    f = hub_file(lang)
    s = f.read_text(encoding="utf-8")
    h = HUBS[lang]
    if 'id="ipmi-extras"' not in s:
        s = s.replace("</head>", B.CSS + "\n</head>", 1)
    if "<!-- IPMI-AUTHOR -->" not in s:
        i = s.index('<section class="lp-hero">')
        j = s.index("</section>", i) + len("</section>")
        s = s[:j] + "\n" + B.author(lang) + s[j:]
    if "<!-- IPMI-KEYFACTS -->" not in s:
        i = s.index("<!-- IPMI-AUTHOR -->")
        j = s.index("</div>\n</div>\n", i) + len("</div>\n</div>\n")
        s = s[:j] + B.key_facts(lang) + s[j:]
    why = f'<section class="lp-section" style="background:var(--cream2);max-width:none;" id="{h["why_id"]}">'
    s = insert_before(s, why, B.destinations(lang, dest_pages), "<!-- IPMI-DESTINATIONS -->")
    process = f'<section class="lp-section" id="{h["process_id"]}">'
    s = insert_before(s, process, B.reviews(lang) + B.prices(lang), "<!-- IPMI-REVIEWS -->")

    # Structured data: add Person and author/reviewer on the WebPage.
    m = re.search(r'<script type="application/ld\+json">\n(.*?)\n</script>', s, flags=re.S)
    data = json.loads(m.group(1))
    graph = data["@graph"]
    if not any(n.get("@type") == "Person" for n in graph):
        graph.append(B.person_ld())
    same_as = ["https://www.facebook.com/adlerrochefort", "https://www.instagram.com/adlerrochefort/",
               "https://www.linkedin.com/company/adler-rochefort", "https://www.trustpilot.com/review/adlerrochefort.com",
               "https://www.ncaportugal.pt/post/adler-rochefort"]
    for n in graph:
        if n.get("@type") == "InsuranceAgency":
            n["sameAs"] = sorted(set(n.get("sameAs", [])) | set(same_as))
        if n.get("@type") == "WebPage":
            n["author"] = {"@id": "https://adlerrochefort.com/#hugo-goncalves"}
            n["reviewedBy"] = {"@id": "https://adlerrochefort.com/#hugo-goncalves"}
            n["dateModified"] = "2026-10-14"
    new = '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2) + "\n</script>"
    s = s[:m.start()] + new + s[m.end():]
    f.write_text(s, encoding="utf-8")


def extract(s, start_marker, end_marker):
    i = s.index(start_marker)
    j = s.index(end_marker, i)
    return s[i:j]


def alternates(page):
    group = [p for p in PAGES if p["group"] == page["group"]]
    links = [f'<link rel="alternate" hreflang="{p["lang"]}" href="{BASE}{p["path"]}">' for p in group]
    xdef = next((p for p in group if p["lang"] == "en"), page)
    links.append(f'<link rel="alternate" hreflang="x-default" href="{BASE}{xdef["path"]}">')
    return "\n".join(links)


def page_main(page, hub_html):
    lang = page["lang"]
    ui = UI[lang]
    h = HUBS[lang]
    url = page["path"]
    form = extract(hub_html, '<div class="ar-cv ar-cta-form-wrap" id="ar-quote-form">', f'<section class="lp-section" id="{h["faq_id"]}">').rstrip()
    form = re.sub(r'data-endpoint="[^"]*"', f'data-endpoint="{url}"', form, count=1)
    form = re.sub(r'(<input type="hidden" name="source" value=")[^"]*(")', lambda m: m.group(1) + "page:" + url.strip("/").split("/")[-1] + m.group(2), form, count=1)
    disclaimer = re.findall(r'<section class="lp-section">\s*<div class="lp-card lp-card--muted">.*?</section>', hub_html, flags=re.S)[-1]

    trust = "\n".join(f"        <div>{t}</div>" for t in ui["trust"])
    tint = ' style="background:var(--cream2);max-width:none;"'
    parts = []
    for i, (h2, body) in enumerate(page["sections"]):
        if i % 2:
            parts.append(f'<section class="lp-section"{tint}>\n  <div style="max-width:1100px;margin:0 auto;">\n  <h2>{h2}</h2>\n  {body}\n  </div>\n</section>')
        else:
            parts.append(f'<section class="lp-section">\n  <h2>{h2}</h2>\n  {body}\n</section>')
    sections = "\n".join(parts)
    how = "\n".join(f'      <div class="lp-card"><h3>{t}</h3><p>{d}</p></div>' for t, d in ui["how"])
    faq = "\n".join(f"    <details><summary>{html.escape(q)}</summary><p>{html.escape(a)}</p></details>" for q, a in page["faq"])
    related = "\n".join(f'    <a class="ipmi-dest" href="{u}"><strong>{t}</strong></a>' for u, t in page["related"])
    return f"""<main id="main">
<nav class="breadcrumb" aria-label="{ui['aria_bc']}"><a href="{h['home'][1]}">{h['home'][0]}</a><span>&rsaquo;</span><a href="{h['path']}">{h['hub_label']}</a><span>&rsaquo;</span><a href="{url}">{page['crumb']}</a></nav>

<section class="lp-hero">
  <div class="lp-hero-inner">
    <div>
      <h1>{page['h1']}</h1>
      <p class="lp-hero-sub">{page['lead']}</p>
      <div class="lp-hero-actions">
        <a href="#ar-quote-form" class="btn-primary">{ui['cta']}</a>
        <a href="{h['path']}" class="btn-ghost">{ui['ghost']}</a>
      </div>
      <div class="lp-trust">
{trust}
      </div>
    </div>
  </div>
</section>
{B.author(lang)}
{sections}

<section class="lp-section">
  <h2>{ui['how_h2']}</h2>
  <div class="lp-grid">
{how}
  </div>
</section>

{form}

<section class="lp-section" id="faq">
  <h2>{ui['faq_h2']}</h2>
  <div class="lp-faq">
{faq}
  </div>
</section>

<section class="lp-section">
  <h2>{ui['related_h2']}</h2>
  <div class="ipmi-dest-grid">
{related}
  </div>
</section>

{disclaimer}
</main>"""


def page_ld(page):
    lang = page["lang"]
    h = HUBS[lang]
    url = BASE + page["path"]
    return {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "InsuranceAgency", "@id": BASE + "/#organization", "name": "Adler & Rochefort",
             "alternateName": "Ownizo, Unipessoal Lda.", "url": BASE + "/", "telephone": "+351928226570",
             "email": "insurance@adlerrochefort.com",
             "identifier": {"@type": "PropertyValue", "name": "Registo ASF", "value": "425591790/3"}},
            B.person_ld(),
            {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": page["title"], "description": page["desc"],
             "inLanguage": lang, "dateModified": "2026-10-14",
             "author": {"@id": BASE + "/#hugo-goncalves"}, "reviewedBy": {"@id": BASE + "/#hugo-goncalves"},
             "isPartOf": {"@id": BASE + h["path"] + "#webpage"}},
            {"@type": "Service", "@id": url + "#service", "name": page["h1"],
             "serviceType": "International private medical insurance (IPMI) mediation", "url": url,
             "provider": {"@id": BASE + "/#organization"},
             "brand": [{"@type": "Brand", "name": "Allianz Care"}, {"@type": "Brand", "name": "Cigna Global"}]},
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": h["home"][0], "item": BASE + h["home"][1]},
                {"@type": "ListItem", "position": 2, "name": h["hub_label"], "item": BASE + h["path"]},
                {"@type": "ListItem", "position": 3, "name": page["crumb"], "item": url}]},
            {"@type": "FAQPage", "mainEntity": [
                {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in page["faq"]]},
        ],
    }


def build_page(page):
    lang = page["lang"]
    hub_html = hub_file(lang).read_text(encoding="utf-8")
    s = hub_html
    url = BASE + page["path"]
    title = html.escape(page["title"], quote=True)
    desc = html.escape(page["desc"], quote=True)
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', s, count=1)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
    # replace the hub's hreflang block with this page's group
    s = re.sub(r'(<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?)+', alternates(page) + "\n", s, count=1)
    for prop in ("og:title", "twitter:title"):
        s = re.sub(rf'<meta (property|name)="{prop}" content="[^"]*">', lambda m: f'<meta {m.group(1)}="{prop}" content="{title}">', s, count=1)
    for prop in ("og:description", "twitter:description"):
        s = re.sub(rf'<meta (property|name)="{prop}" content="[^"]*">', lambda m: f'<meta {m.group(1)}="{prop}" content="{desc}">', s, count=1)
    s = re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">', s, count=1)
    i = s.index("<main")
    j = s.index("</main>") + len("</main>")
    s = s[:i] + page_main(page, hub_html) + s[j:]
    m = re.search(r'<script type="application/ld\+json">\n.*?\n</script>', s, flags=re.S)
    s = s[:m.start()] + '<script type="application/ld+json">\n' + json.dumps(page_ld(page), ensure_ascii=False, indent=2) + "\n</script>" + s[m.end():]
    out = PUBLIC / page["path"].strip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s, encoding="utf-8")
    return out


if __name__ == "__main__":
    for lang in HUBS:
        dests = [(p["path"], p["card"][0], p["card"][1]) for p in PAGES if p["lang"] == lang]
        enhance_hub(lang, dests)
    for p in PAGES:
        out = build_page(p)
        print("wrote", out.relative_to(ROOT))
