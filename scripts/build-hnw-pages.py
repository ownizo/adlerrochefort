#!/usr/bin/env python3
"""Builds the private-client (HNW) answer pages and DE/ES articles defined in
scripts/hnw_content.py, using the language's IPMI hub as the chrome template
(head assets, navigation, footer, scripts), then links the answer pages from
the private-client pillar pages. Run scripts/add-author-box.py afterwards to
add the reviewer box, and scripts/generate-sitemap.mjs.

Idempotent. Run from the repository root: python3 scripts/build-hnw-pages.py
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from hnw_content import PAGES  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"
TEMPLATE = {"en": "en/international-health-insurance", "es": "es/seguro-medico-internacional", "de": "de/internationale-krankenversicherung"}
TOP_BAR = {
    "en": 'EU-regulated insurance broker · ASF n.º 425591790/3 — <a href="/en/private-clients/">Private client insurance, Portugal &amp; Spain</a>',
    "de": 'EU-regulierter Versicherungsmakler · ASF Nr. 425591790/3 — <a href="/de/private-clients/">Private Clients, Portugal &amp; Spanien</a>',
    "es": 'Corredor de seguros regulado en la UE · ASF n.º 425591790/3 — <a href="/es/seguro-hogar-alto-valor/">Hogar de alto valor, España y Portugal</a>',
}
UI = {
    "en": {"faq": "Frequently asked questions", "related": "Related reading", "more": "Read the full guide",
           "disc": "Adler &amp; Rochefort is the commercial brand of Ownizo, Unipessoal Lda., an insurance broker registered with the Autoridade de Supervisão de Seguros e Fundos de Pensões (ASF) under no. 425591790/3, not tied to any insurer. This page is general information, not advice on a specific case, and not an offer of insurance. Cover, limits, conditions and premium are set by the insurer and governed by the policy issued."},
    "de": {"faq": "Häufige Fragen", "related": "Weiterlesen", "more": "Zum ausführlichen Ratgeber",
           "disc": "Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., eines bei der Autoridade de Supervisão de Seguros e Fundos de Pensões (ASF) unter Nr. 425591790/3 registrierten Versicherungsmaklers, an keinen Versicherer gebunden. Diese Seite ist eine allgemeine Information, keine Beratung im Einzelfall und kein Versicherungsangebot. Leistungen, Grenzen, Bedingungen und Beitrag legt der Versicherer fest; maßgeblich ist die ausgestellte Police."},
    "es": {"faq": "Preguntas frecuentes", "related": "Lecturas relacionadas", "more": "Leer la guía completa",
           "disc": "Adler &amp; Rochefort es la marca comercial de Ownizo, Unipessoal Lda., corredor de seguros inscrito en la Autoridade de Supervisão de Seguros e Fundos de Pensões (ASF) con el n.º 425591790/3, sin vínculo con ninguna aseguradora. Esta página es información general, no asesoramiento sobre un caso concreto ni una oferta de seguro. Las coberturas, límites, condiciones y prima los fija la aseguradora y se rigen por la póliza emitida."},
}
STYLE = ('<style id="hnw-extras">.hnw-dest-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;margin-top:20px}'
         '.hnw-dest{display:block;background:#fff;border:1px solid #EBE9E8;border-radius:14px;padding:20px;text-decoration:none;color:#292929}'
         '.hnw-dest:hover{border-color:#FF6300}.hnw-more{font-weight:600}'
         '.lp-section h3{font-size:17px;margin:18px 0 6px}main .lp-section{padding-top:22px;padding-bottom:22px}main .lp-section h2{margin-bottom:10px}</style>')

QA_LINK = {
    "en": ("/en/private-client-insurance-questions/", "More answers: private client insurance, questions answered →",
           ["en/private-clients", "en/private-clients-spain", "en/home-insurance-quote", "en/family-office-insurance"]),
    "de": ("/de/private-client-versicherung-fragen/", "Weitere Antworten: Private-Client-Versicherung, Fragen und Antworten →",
           ["de/private-clients", "de/private-clients-portugal", "de/private-clients-spanien", "de/hausversicherung-portugal", "de/hausversicherung-spanien", "de/family-office-versicherung"]),
    "es": ("/es/seguro-alto-patrimonio-preguntas/", "Más respuestas: seguros para patrimonios altos, preguntas y respuestas →",
           ["es/seguro-hogar-alto-valor", "es/seguro-family-office"]),
}


def alternates(page):
    if page["kind"] == "qa":
        group = [p for p in PAGES if p["kind"] == "qa"]
        links = [f'<link rel="alternate" hreflang="{p["lang"]}" href="{BASE}{p["path"]}">' for p in group]
        links.append(f'<link rel="alternate" hreflang="x-default" href="{BASE}/en/private-client-insurance-questions/">')
        return "\n".join(links)
    return f'<link rel="alternate" hreflang="{page["lang"]}" href="{BASE}{page["path"]}">'


def breadcrumb(page):
    parts = []
    for name, url in page["crumbs"]:
        parts.append(f'<a href="{url or page["path"]}">{name}</a>')
    return '<nav class="breadcrumb" aria-label="Breadcrumb">' + "<span>&rsaquo;</span>".join(parts) + "</nav>"


def main_html(page):
    ui = UI[page["lang"]]
    hero = f"""<section class="lp-hero">
  <div class="lp-hero-inner">
    <div>
      <h1>{page['h1']}</h1>
      <p class="lp-hero-sub">{page['lead']}</p>
      <div class="lp-hero-actions">
        <a href="{page['cta'][1]}" class="btn-primary">{page['cta'][0]}</a>
        <a href="{page['cta2'][1]}" class="btn-ghost">{page['cta2'][0]}</a>
      </div>
    </div>
  </div>
</section>"""
    body = []
    if page["kind"] == "qa":
        for q, a, link in page["qa"]:
            more = f'\n  <p><a class="hnw-more" href="{link[0]}">{ui["more"]}: {link[1]} →</a></p>' if link else ""
            body.append(f'<section class="lp-section">\n  <h2>{q}</h2>\n  <p>{a}</p>{more}\n</section>')
    else:
        for h2, content in page["sections"]:
            body.append(f'<section class="lp-section">\n  <h2>{h2}</h2>\n  {content}\n</section>')
        faq = "\n".join(f"  <h3>{html.escape(q)}</h3>\n  <p>{html.escape(a)}</p>" for q, a in page["faq"])
        body.append(f'<section class="lp-section" id="faq">\n  <h2>{ui["faq"]}</h2>\n{faq}\n</section>')
        rel = "\n".join(f'    <a class="hnw-dest" href="{u}"><strong>{t}</strong></a>' for u, t in page["related"])
        body.append(f'<section class="lp-section">\n  <h2>{ui["related"]}</h2>\n  <div class="hnw-dest-grid">\n{rel}\n  </div>\n</section>')
    cta = f'<section class="lp-section"><p><a href="{page["cta"][1]}" class="btn-primary">{page["cta"][0]}</a></p></section>'
    disc = f'<section class="lp-section">\n  <div class="lp-card lp-card--muted"><p class="lp-form-micro">{ui["disc"]}</p></div>\n</section>'
    return "<main id=\"main\">\n" + breadcrumb(page) + "\n\n" + hero + "\n\n" + "\n\n".join(body) + "\n\n" + cta + "\n\n" + disc + "\n</main>"


def ld(page):
    url = BASE + page["path"]
    person = {"@type": "Person", "@id": BASE + "/#hugo-goncalves", "name": "Hugo Gonçalves",
              "jobTitle": "Founder & Risk Management Specialist", "worksFor": {"@id": BASE + "/#organization"}}
    org = {"@type": "InsuranceAgency", "@id": BASE + "/#organization", "name": "Adler & Rochefort", "url": BASE + "/",
           "identifier": {"@type": "PropertyValue", "name": "Registo ASF", "value": "425591790/3"}}
    crumbs = {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": BASE + (u or page["path"])} for i, (n, u) in enumerate(page["crumbs"])]}
    if page["kind"] == "qa":
        qa = [(q, a) for q, a, _ in page["qa"]]
        main = {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": page["title"], "description": page["desc"],
                "inLanguage": page["lang"], "dateModified": "2026-10-14", "author": {"@id": person["@id"]}, "reviewedBy": {"@id": person["@id"]}}
    else:
        qa = page["faq"]
        main = {"@type": "Article", "@id": url + "#article", "headline": page["h1"], "description": page["desc"], "url": url,
                "inLanguage": page["lang"], "datePublished": "2026-10-14", "dateModified": "2026-10-14",
                "author": {"@id": person["@id"]}, "publisher": {"@id": org["@id"]}, "mainEntityOfPage": url}
    faq = {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": re.sub("<[^>]+>", "", a)}} for q, a in qa]}
    return {"@context": "https://schema.org", "@graph": [org, person, main, crumbs, faq]}


def build(page):
    lang = page["lang"]
    s = (PUBLIC / TEMPLATE[lang] / "index.html").read_text(encoding="utf-8")
    url = BASE + page["path"]
    title = html.escape(page["title"], quote=True)
    desc = html.escape(page["desc"], quote=True)
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', s, count=1)
    s = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", s, count=1)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
    s = re.sub(r'(<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?)+', alternates(page) + "\n", s, count=1)
    for prop, val in (("og:title", title), ("twitter:title", title), ("og:description", desc), ("twitter:description", desc), ("og:url", url)):
        s = re.sub(rf'<meta (property|name)="{prop}" content="[^"]*">', lambda m, v=val, p=prop: f'<meta {m.group(1)}="{p}" content="{v}">', s, count=1)
    s = re.sub(r'<style id="ipmi-extras">.*?</style>', STYLE, s, count=1, flags=re.S)
    s = re.sub(r'(<div class="asf-top-bar[^"]*">).*?(</div>)', lambda m: m.group(1) + TOP_BAR[lang] + m.group(2), s, count=1, flags=re.S)
    i, j = s.index("<main"), s.index("</main>") + len("</main>")
    s = s[:i] + main_html(page) + s[j:]
    m = re.search(r'<script type="application/ld\+json">\n.*?\n</script>', s, flags=re.S)
    s = s[:m.start()] + '<script type="application/ld+json">\n' + json.dumps(ld(page), ensure_ascii=False, indent=2) + "\n</script>" + s[m.end():]
    out = PUBLIC / page["path"].strip("/") / "index.html"
    if out.exists() and "<!-- AR-AUTHOR -->" in out.read_text(encoding="utf-8"):
        return out  # already built and finished; do not overwrite
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s, encoding="utf-8")
    return out


def link_from_pillars():
    for lang, (url, label, pages) in QA_LINK.items():
        for rel in pages:
            f = PUBLIC / rel / "index.html"
            s = f.read_text(encoding="utf-8")
            if f'href="{url}"' in s:
                continue
            i = s.index("<!-- AR-KEYFACTS -->")
            j = s.index("</ul>", i) + len("</ul>")
            s = s[:j] + f'<p style="margin:14px 0 0;font-size:14.5px"><a href="{url}" style="color:#292929;font-weight:600">{label}</a></p>' + s[j:]
            f.write_text(s, encoding="utf-8")


if __name__ == "__main__":
    for p in PAGES:
        print("built", build(p).relative_to(ROOT))
    link_from_pillars()
