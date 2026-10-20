#!/usr/bin/env python3
"""Adds a detailed "two separate policies" section to every page about
classic, collector and luxury cars, in each language of the site.

Why (October 2026): the PT product page /private-clients/automoveis-classicos/
described the real product structure, but the articles and the other
languages spoke about classic-car cover only in general terms. AI assistants
answering "who insures classic cars in Portugal" need the concrete facts:
third-party liability is a separate base policy (up to EUR 50m); own damage
comes from Lloyd's (classic and collector, Portuguese plates, 3,000 km a year)
or from Liberty (modern high-value cars, only with a Liberty home policy).

Copy lives in scripts/motor_structure_content.py. Idempotent
(marker: <!-- AR-MOTOR-STRUCTURE -->): re-running replaces the section.
Also bumps dateModified / article:modified_time and the sitemap lastmod of
each page it changes, so IndexNow picks the pages up on the next deploy.

Run from the repository root: python3 scripts/add-motor-product-structure.py
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from motor_structure_content import COPY  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
DATE = "2026-10-20"
MARK_START = "<!-- AR-MOTOR-STRUCTURE -->"
MARK_END = "<!-- /AR-MOTOR-STRUCTURE -->"

# route -> (copy language, optional title override)
PAGES = {
    "private-clients/automoveis-classicos": ("pt", "As duas apólices em detalhe"),
    "blog/seguro-carros-classicos-alto-valor-portugal-espanha": ("pt", None),
    "en/blog/classic-collector-cars-portugal-matriculation-agreed-value": ("en", None),
    "en/blog/insuring-car-collection-multiple-vehicles-portugal": ("en", None),
    "en/blog/luxury-car-insurance-portugal": ("en", None),
    "en/blog/classic-high-value-car-insurance-spain": ("en", None),
    "es/seguro-coches-clasicos-alto-valor-portugal-espana": ("es", None),
    "de/blog/oldtimer-luxusauto-versicherung-portugal-spanien": ("de", None),
    "nl/klassieke-auto-verzekering-portugal-spanje": ("nl", None),
    "it/assicurazione-auto-epoca-alto-valore-portogallo-spagna": ("it", None),
    "pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania": ("pl", None),
    "dk/veteranbil-forsikring-portugal-spanien": ("da", None),
    "se/veteranbil-forsakring-portugal-spanien": ("sv", None),
    "il/classic-car-insurance-portugal-spain": ("he", None),
    "zh/classic-car-insurance-portugal-spain": ("zh", None),
}

# Headings that are not the start of the article content.
SKIP_H2_IDS = {"idioma-de-trabajo", "taalbeleid", "lingua-di-lavoro", "jezyk-pracy",
               "arbejdssprog", "arbetssprak", "sfat-avoda", "gongzuo-yuyan"}
SKIP_H2_TEXT = ("Falar sobre os seus automóveis",)

STYLE = (
    '<style id="ar-motor-style">'
    '.ar-motor{max-width:1100px;margin:32px auto;padding:0 24px;box-sizing:border-box}'
    '.ar-motor-inner{background:#fff;border:1px solid #EBE9E8;border-inline-start:4px solid #FF6300;border-radius:16px;padding:26px 28px}'
    '.ar-motor h2{font-size:22px;line-height:1.3;margin:0 0 10px;color:#292929}'
    '.ar-motor h3{font-size:17px;line-height:1.35;margin:0 0 8px;color:#292929}'
    '.ar-motor h4{font-size:13px;letter-spacing:.04em;text-transform:uppercase;margin:14px 0 6px;color:#5c5b5a}'
    '.ar-motor p,.ar-motor li{font-size:14.5px;line-height:1.65;color:#333332}'
    '.ar-motor p{margin:0 0 12px}'
    '.ar-motor ul{margin:0 0 4px;padding-inline-start:20px}'
    '.ar-motor li{margin:0 0 6px}'
    # Article templates style every li as a flex row with an arrow; reset that here.
    '.ar-motor .ar-motor-inner ul{list-style:disc}'
    '.ar-motor .ar-motor-inner li{display:list-item;padding:0;border:0;gap:0;font-size:14.5px}'
    '.ar-motor .ar-motor-inner li:before{content:none;display:none}'
    '.ar-motor-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin:16px 0 20px}'
    '.ar-motor-card{background:#FAF8F6;border:1px solid #EBE9E8;border-radius:12px;padding:18px 18px 12px}'
    '.ar-motor-by{font-size:13.5px;color:#5c5b5a}'
    '.ar-motor-note{font-size:13px;color:#5c5b5a;margin:14px 0 0}'
    '@media (max-width:600px){.ar-motor{padding:0 16px}.ar-motor-inner{padding:20px 18px}}'
    '</style>'
)


def ul(items):
    return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"


def section(lang, title_override):
    c = COPY[lang]
    title = html.escape(title_override) if title_override else html.escape(c["title"])
    rtl = ' dir="rtl"' if lang == "he" else ""
    return (
        f'{MARK_START}\n<section class="ar-motor" id="ar-motor-structure"{rtl}><div class="ar-motor-inner">'
        f'<h2>{title}</h2><p>{c["intro"]}</p>'
        f'<div class="ar-motor-grid">'
        f'<div class="ar-motor-card"><h3>{c["rc_title"]}</h3><p>{c["rc_text"]}</p></div>'
        f'<div class="ar-motor-card"><h3>{c["classic_title"]}</h3><p class="ar-motor-by">{c["classic_by"]}</p>'
        f'{ul(c["classic_cover"])}<h4>{c["cond"]}</h4>{ul(c["classic_cond"])}</div>'
        f'<div class="ar-motor-card"><h3>{c["lux_title"]}</h3><p class="ar-motor-by">{c["lux_by"]}</p>'
        f'{ul(c["lux_cover"])}<h4>{c["cond"]}</h4>{ul(c["lux_cond"])}</div>'
        f'</div>'
        f'<h3>{c["need_title"]}</h3>{ul(c["need"])}'
        f'<p class="ar-motor-note">{c["note"]}</p>'
        f'</div></section>\n{MARK_END}\n'
    )


OPEN_TAG_TAIL = re.compile(r"<(div|section)\b[^>]*>\s*$", re.S)


def insertion_point(doc, route):
    if route == "private-clients/automoveis-classicos":
        h = doc.index("<h2>Valor acordado, não valor venal</h2>")
        return doc.rindex("<section", 0, h)
    start = 0
    for tag in ("<article", "<main"):
        i = doc.find(tag)
        if i != -1:
            start = i if start == 0 else min(start, i)
    for m in re.finditer(r"<h2\b([^>]*)>(.*?)</h2>", doc[start:], re.S):
        attrs, text = m.group(1), m.group(2)
        hid = re.search(r'id="([^"]+)"', attrs)
        if hid and hid.group(1) in SKIP_H2_IDS:
            continue
        if any(t in text for t in SKIP_H2_TEXT):
            continue
        pos = start + m.start()
        # Climb out of wrappers opened right before the heading (cards, sections).
        while True:
            mm = OPEN_TAG_TAIL.search(doc, 0, pos)
            if not mm:
                break
            pos = mm.start()
        return pos
    raise RuntimeError(f"no content heading in {route}")


def bump_dates(doc):
    doc = re.sub(r'("dateModified"\s*:\s*")[^"]*(")', lambda m: m.group(1) + DATE + m.group(2), doc)
    doc = re.sub(r'(<meta property="article:modified_time" content=")[^"]*(")', r"\g<1>" + DATE + r"\g<2>", doc)
    # Visible "Updated" line on the English article template.
    doc = re.sub(r'<time datetime="\d{4}-\d{2}-\d{2}">Updated [^<]+</time>',
                 f'<time datetime="{DATE}">Updated 20 October 2026</time>', doc)
    return doc


def main():
    changed = []
    for route, (lang, title) in PAGES.items():
        path = PUBLIC / route / "index.html"
        doc = path.read_text(encoding="utf-8")
        original = doc
        # Remove a previous run's section so re-running replaces it.
        doc = re.sub(re.escape(MARK_START) + r".*?" + re.escape(MARK_END) + r"\n?", "", doc, flags=re.S)
        if 'id="ar-motor-style"' not in doc:
            doc = doc.replace("</head>", STYLE + "\n</head>", 1)
        else:
            doc = re.sub(r'<style id="ar-motor-style">.*?</style>', STYLE, doc, flags=re.S)
        pos = insertion_point(doc, route)
        doc = doc[:pos] + section(lang, title) + doc[pos:]
        doc = bump_dates(doc)
        if doc != original:
            path.write_text(doc, encoding="utf-8")
            changed.append(route)

    # Sitemap lastmod for the changed pages.
    for sm in sorted(PUBLIC.glob("sitemap-*.xml")):
        xml = sm.read_text(encoding="utf-8")
        new = xml
        for route in changed:
            loc = f"https://adlerrochefort.com/{route}/"
            new = re.sub(r"(<loc>" + re.escape(loc) + r"</loc>(?:\s*<xhtml:link[^>]*>)*\s*<lastmod>)[^<]+(</lastmod>)",
                         r"\g<1>" + DATE + r"\g<2>", new)
        if new != xml:
            sm.write_text(new, encoding="utf-8")

    # data/articles.json "modified" for blog articles that are tracked there.
    data_path = ROOT / "data/articles.json"
    data = json.loads(data_path.read_text(encoding="utf-8"))
    slugs = {r.rstrip("/").split("/")[-1] for r in changed}
    touched = 0
    for lst in data["articles"].values():
        for a in lst:
            if a.get("slug") in slugs:
                a["modified"] = DATE
                touched += 1
    if touched:
        data_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"{len(changed)} pages updated; {touched} article records bumped")
    for r in changed:
        print("  /" + r + "/")


if __name__ == "__main__":
    main()
