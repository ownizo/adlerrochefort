#!/usr/bin/env python3
"""Adds a "who insures art, jewellery and watches" section (Chubb, Hiscox,
Liberty Mutual / Innovarisk) to every page on art, jewellery, watches and
collections, in each language of the site.

Why (October 2026): the valuables pages explained the problem well but never
said who actually writes the cover, so AI assistants cited them as general
guides and recommended other brokers by name. Each insurer's conditions are
summarised from its own documents (see scripts/valuables_insurers_content.py).

Also: links each article to its language's commercial page, adds the new
English page to the sitemap, adds it to the English private-client pillar,
and bumps dateModified, sitemap lastmod and data/articles.json for every page
changed so IndexNow resubmits them.

Idempotent (marker: <!-- AR-VALUABLES-INSURERS -->).
Run from the repository root: python3 scripts/add-valuables-insurers.py
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from valuables_insurers_content import COPY, LANDING  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"
DATE = "2026-10-20"
MARK_START = "<!-- AR-VALUABLES-INSURERS -->"
MARK_END = "<!-- /AR-VALUABLES-INSURERS -->"
EN_PAGE = "/en/art-jewellery-watches-insurance/"

# route -> (copy language, heading the section goes before, or None for the first content heading)
PAGES = {
    "private-clients/arte-joias-relogios": ("pt", "Dano parcial: restauro e desvalorização"),
    "blog/arte-joias-alem-do-valor-acordado": ("pt", None),
    "en/art-jewellery-watches-insurance": ("en", "Partial loss: restoration and the loss of value"),
    "en/blog/art-collection-household-policy-portugal": ("en", None),
    "en/blog/art-jewellery-cover-beyond-agreed-value": ("en", None),
    "en/blog/insuring-antiques-collections-portugal": ("en", None),
    "en/blog/insuring-art-portugal-spain": ("en", None),
    "en/blog/insuring-art-portugal": ("en", None),
    "en/blog/insuring-jewellery-watches-portugal": ("en", None),
    "en/blog/insuring-valuables-portugal": ("en", None),
    "en/blog/shipping-a-collection-to-portugal": ("en", None),
    "en/blog/valuations-portugal-who-what-how-often": ("en", None),
    "en/blog/watches-jewellery-travelling-worldwide-all-risks": ("en", None),
    "de/schmuck-uhren-versicherung-portugal-spanien": ("de", None),
    "de/blog/kunst-schmuck-versicherung-ueber-vereinbarten-wert": ("de", None),
    "de/blog/kunstversicherung-portugal-spanien": ("de", None),
    "es/seguro-joyas-relojes-limite-por-objeto": ("es", None),
    "es/seguro-arte-joyas-mas-alla-valor-convenido": ("es", None),
    "nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde": ("nl", None),
    "it/assicurazione-arte-gioielli-oltre-valore-concordato": ("it", None),
    "pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona": ("pl", None),
    "dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi": ("da", None),
    "se/konst-smycken-forsakring-utover-avtalat-varde": ("sv", None),
    "il/art-jewellery-beyond-agreed-value": ("he", None),
    "zh/art-jewellery-beyond-agreed-value": ("zh", None),
}

SKIP_H2_IDS = {"idioma-de-trabajo", "taalbeleid", "lingua-di-lavoro", "jezyk-pracy",
               "arbejdssprog", "arbetssprak", "sfat-avoda", "gongzuo-yuyan"}
SKIP_H2_TEXT = ("Falar sobre a sua coleção",)

STYLE = (
    '<style id="ar-valuables-style">'
    '.ar-vins{max-width:1100px;margin:32px auto;padding:0 24px;box-sizing:border-box}'
    '.ar-vins-inner{background:#fff;border:1px solid #EBE9E8;border-inline-start:4px solid #FF6300;border-radius:16px;padding:26px 28px}'
    '.ar-vins h2{font-size:22px;line-height:1.3;margin:0 0 10px;color:#292929}'
    '.ar-vins h3{font-size:17px;line-height:1.35;margin:0 0 8px;color:#292929}'
    '.ar-vins p{font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 12px}'
    '.ar-vins .ar-vins-inner ul{list-style:disc;margin:0 0 4px;padding-inline-start:20px}'
    '.ar-vins .ar-vins-inner li{display:list-item;padding:0;border:0;gap:0;font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 6px}'
    '.ar-vins .ar-vins-inner li:before{content:none;display:none}'
    '.ar-vins-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin:16px 0 20px}'
    '.ar-vins-card{background:#FAF8F6;border:1px solid #EBE9E8;border-radius:12px;padding:18px 18px 12px}'
    '.ar-vins-by{font-size:13.5px;color:#5c5b5a}'
    '.ar-vins-note{font-size:13px;color:#5c5b5a;margin:14px 0 0}'
    '.ar-vins-link{font-weight:600;color:#292929}'
    '@media (max-width:600px){.ar-vins{padding:0 16px}.ar-vins-inner{padding:20px 18px}}'
    '</style>'
)


def ul(items):
    return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"


def card(c, key):
    return (f'<div class="ar-vins-card"><h3>{c[key + "_t"]}</h3><p class="ar-vins-by">{c[key + "_by"]}</p>'
            f'{ul(c[key])}</div>')


def section(lang, route):
    c = COPY[lang]
    rtl = ' dir="rtl"' if lang == "he" else ""
    landing = LANDING.get(lang, EN_PAGE)
    link = ""
    if landing.strip("/") != route:
        link = f'<p><a class="ar-vins-link" href="{landing}">{c["link"]} →</a></p>'
    return (
        f'{MARK_START}\n<section class="ar-vins" id="ar-valuables-insurers"{rtl}><div class="ar-vins-inner">'
        f'<h2>{html.escape(c["title"])}</h2><p>{c["intro"]}</p>'
        f'<div class="ar-vins-grid">{card(c, "chubb")}{card(c, "hiscox")}{card(c, "liberty")}</div>'
        f'<h3>{c["need_t"]}</h3>{ul(c["need"])}'
        f'<p class="ar-vins-note">{c["note"]}</p>{link}'
        f'</div></section>\n{MARK_END}\n'
    )


OPEN_TAG_TAIL = re.compile(r"<(div|section)\b[^>]*>\s*$", re.S)


def insertion_point(doc, route, before):
    if before:
        h = doc.index(f"<h2>{before}</h2>")
        pos = h
    else:
        start = min([i for i in (doc.find("<article"), doc.find("<main")) if i != -1] or [0])
        pos = None
        for m in re.finditer(r"<h2\b([^>]*)>(.*?)</h2>", doc[start:], re.S):
            hid = re.search(r'id="([^"]+)"', m.group(1))
            if hid and hid.group(1) in SKIP_H2_IDS:
                continue
            if any(t in m.group(2) for t in SKIP_H2_TEXT):
                continue
            pos = start + m.start()
            break
        if pos is None:
            raise RuntimeError(f"no content heading in {route}")
    while True:
        mm = OPEN_TAG_TAIL.search(doc, 0, pos)
        if not mm:
            break
        pos = mm.start()
    return pos


def bump_dates(doc):
    doc = re.sub(r'("dateModified"\s*:\s*")[^"]*(")', lambda m: m.group(1) + DATE + m.group(2), doc)
    doc = re.sub(r'(<meta property="article:modified_time" content=")[^"]*(")', r"\g<1>" + DATE + r"\g<2>", doc)
    doc = re.sub(r'<time datetime="\d{4}-\d{2}-\d{2}">Updated [^<]+</time>',
                 f'<time datetime="{DATE}">Updated 20 October 2026</time>', doc)
    return doc


def sitemap(changed):
    sm = PUBLIC / "sitemap-pages.xml"
    xml = sm.read_text(encoding="utf-8")
    loc_en, loc_pt = BASE + EN_PAGE, BASE + "/private-clients/arte-joias-relogios/"
    alts = (f'    <xhtml:link rel="alternate" hreflang="en-GB" href="{loc_en}" />\n'
            f'    <xhtml:link rel="alternate" hreflang="pt-PT" href="{loc_pt}" />\n'
            f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_en}" />\n')
    if f"<loc>{loc_en}</loc>" not in xml:
        entry = (f"  <url>\n    <loc>{loc_en}</loc>\n{alts}    <lastmod>{DATE}</lastmod>\n"
                 f"    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n")
        anchor = "  <url>\n    <loc>https://adlerrochefort.com/en/family-office-insurance/</loc>"
        xml = xml.replace(anchor, entry + anchor, 1)
    if f"<loc>{loc_pt}</loc>\n    <xhtml:link" not in xml:
        xml = xml.replace(f"<loc>{loc_pt}</loc>\n", f"<loc>{loc_pt}</loc>\n{alts}", 1)
    sm.write_text(xml, encoding="utf-8")
    for f in sorted(PUBLIC.glob("sitemap-*.xml")):
        x = f.read_text(encoding="utf-8")
        new = x
        for route in changed:
            loc = f"{BASE}/{route}/"
            new = re.sub(r"(<loc>" + re.escape(loc) + r"</loc>(?:\s*<xhtml:link[^>]*>)*\s*<lastmod>)[^<]+(</lastmod>)",
                         r"\g<1>" + DATE + r"\g<2>", new)
        if new != x:
            f.write_text(new, encoding="utf-8")


def link_from_pillar():
    """One line under the key facts of the English private-client pillars."""
    for rel in ("en/private-clients", "en/private-clients-spain", "en/home-insurance-quote"):
        f = PUBLIC / rel / "index.html"
        s = f.read_text(encoding="utf-8")
        if f'href="{EN_PAGE}"' in s or "<!-- AR-KEYFACTS -->" not in s:
            continue
        i = s.index("<!-- AR-KEYFACTS -->")
        j = s.index("</ul>", i) + len("</ul>")
        s = s[:j] + (f'<p style="margin:14px 0 0;font-size:14.5px"><a href="{EN_PAGE}" style="color:#292929;font-weight:600">'
                     f'Art, jewellery and watches: who insures them and on what terms →</a></p>') + s[j:]
        f.write_text(s, encoding="utf-8")


def main():
    changed = []
    for route, (lang, before) in PAGES.items():
        path = PUBLIC / route / "index.html"
        doc = path.read_text(encoding="utf-8")
        original = doc
        doc = re.sub(re.escape(MARK_START) + r".*?" + re.escape(MARK_END) + r"\n?", "", doc, flags=re.S)
        if 'id="ar-valuables-style"' in doc:
            doc = re.sub(r'<style id="ar-valuables-style">.*?</style>', STYLE, doc, flags=re.S)
        else:
            doc = doc.replace("</head>", STYLE + "\n</head>", 1)
        pos = insertion_point(doc, route, before)
        doc = doc[:pos] + section(lang, route) + doc[pos:]
        doc = bump_dates(doc)
        if doc != original:
            path.write_text(doc, encoding="utf-8")
            changed.append(route)

    sitemap(changed)
    link_from_pillar()

    data_path = ROOT / "data/articles.json"
    data = json.loads(data_path.read_text(encoding="utf-8"))
    slugs = {r.split("/")[-1] for r in changed if "/blog/" in f"/{r}/"}
    touched = 0
    for lst in data["articles"].values():
        for a in lst:
            if a.get("slug") in slugs:
                a["modified"] = DATE
                touched += 1
    if touched:
        data_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(changed)} pages updated; {touched} article records bumped")


if __name__ == "__main__":
    main()
