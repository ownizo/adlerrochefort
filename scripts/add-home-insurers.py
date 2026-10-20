#!/usr/bin/env python3
"""Adds insurer sections to the high-value home and holiday-home pages.

Two sections, copy in scripts/home_insurers_content.py:
- "Holiday homes: Hiscox and Liberty" on second-home, unoccupied-home and
  holiday-home pages (PT, EN, DE, ES). Hiscox Holiday Homes and Liberty Mutual
  Home Insurance are the products the firm places most for second homes.
- "High-value homes: Hiscox and Liberty" on high-value home, rebuild-value and
  what-to-declare pages (PT, EN, DE, ES, IT, NL, HE, ZH).
Chubb is not named on home pages (firm's rule).

Also removes Fidelidade from the "not one insurer's panel" line (the firm does
not place with Fidelidade), and bumps dateModified, sitemap lastmod and
data/articles.json for every page changed.

Idempotent (markers: <!-- AR-HOLIDAY-INSURERS --> and <!-- AR-HOME-INSURERS -->).
Run from the repository root: python3 scripts/add-home-insurers.py
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from home_insurers_content import HOLIDAY, HIGHVALUE, SECOND_HOME, HIGH_VALUE  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"
DATE = "2026-10-20"

HOLIDAY_PAGES = {
    "seguros/casa-desocupada": "pt",
    "en/second-home-insurance-portugal": "en",
    "en/unoccupied-home-insurance-portugal": "en",
    "en/blog/holiday-home-insurance-portugal": "en",
    "en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover": "en",
    "en/blog/second-home-rent-out-holiday-let-standard-home-cover": "en",
    "en/blog/irish-owners-algarve-holiday-home-insurance": "en",
    "en/blog/surfing-portugal-second-homes": "en",
    "en/blog/surfing-aljezur-second-home": "en",
    "en/blog/surfing-ericeira-second-home": "en",
    "en/blog/surfing-lagos-second-home": "en",
    "en/blog/surfing-nazare-second-home": "en",
    "en/blog/surfing-sagres-second-home": "en",
    "de/leerstand-ferienhaus-versicherung-portugal-spanien": "de",
    "de/blog/surfen-portugal-zweitwohnsitz": "de",
    "de/blog/surfen-aljezur-zweitwohnsitz": "de",
    "de/blog/surfen-ericeira-zweitwohnsitz": "de",
    "de/blog/surfen-lagos-zweitwohnsitz": "de",
    "de/blog/surfen-nazare-zweitwohnsitz": "de",
    "de/blog/surfen-sagres-zweitwohnsitz": "de",
    "es/vivienda-vacia-seguro-segunda-residencia": "es",
}
HIGH_PAGES = {
    "seguros/habitacao": "pt",
    "seguros/habitacao/valor-reconstrucao": "pt",
    "blog/seguro-casa-elevado-valor-condicoes": "pt",
    "blog/seguro-casa-elevado-valor-o-que-declarar": "pt",
    "blog/subseguro-portugal": "pt",
    "en/home-insurance-quote": "en",
    "en/rebuild-value-home-insurance-portugal": "en",
    "en/blog/high-value-home-insurance-conditions-clause-by-clause": "en",
    "en/blog/high-value-home-policy-what-to-declare": "en",
    "en/blog/luxury-home-insurance-portugal": "en",
    "en/blog/insuring-a-high-value-apartment-lisbon-cascais": "en",
    "en/blog/mortgage-sum-insured-vs-rebuild-cost-portugal": "en",
    "en/blog/setting-rebuild-value-portugal": "en",
    "de/hausversicherung-portugal": "de",
    "de/blog/hochwertige-immobilie-hausversicherung-bedingungen": "de",
    "de/unterversicherung-hausversicherung-portugal-spanien": "de",
    "es/seguro-hogar-alto-valor": "es",
    "es/seguro-hogar-alto-valor-condiciones": "es",
    "es/seguro-hogar-alto-valor-que-declarar": "es",
    "es/valor-reconstruccion-seguro-hogar": "es",
    "es/regla-proporcional-seguro-hogar-portugal-espana": "es",
    "it/assicurazione-casa-alto-valore": "it",
    "it/assicurazione-casa-alto-valore-condizioni": "it",
    "it/assicurazione-casa-alto-valore-cosa-dichiarare": "it",
    "nl/woonverzekering-portugal": "nl",
    "nl/woonverzekering-hoogwaardige-woning-voorwaarden": "nl",
    "nl/woonverzekering-hoogwaardige-woning-meldplicht": "nl",
    "nl/herbouwwaarde-woonverzekering-portugal": "nl",
    "il/high-value-home-insurance-conditions": "he",
    "il/high-value-home-what-to-declare": "he",
    "il/rebuild-value-home-insurance-portugal": "he",
    "zh/high-value-home-insurance-conditions": "zh",
    "zh/high-value-home-what-to-declare": "zh",
    "zh/rebuild-value-home-insurance-portugal": "zh",
}

SKIP_H2_IDS = {"idioma-de-trabajo", "taalbeleid", "lingua-di-lavoro", "jezyk-pracy",
               "arbejdssprog", "arbetssprak", "sfat-avoda", "gongzuo-yuyan"}

STYLE = (
    '<style id="ar-homeins-style">'
    '.ar-hins{max-width:1100px;margin:32px auto;padding:0 24px;box-sizing:border-box}'
    '.ar-hins-inner{background:#fff;border:1px solid #EBE9E8;border-inline-start:4px solid #FF6300;border-radius:16px;padding:26px 28px}'
    '.ar-hins h2{font-size:22px;line-height:1.3;margin:0 0 10px;color:#292929}'
    '.ar-hins h3{font-size:17px;line-height:1.35;margin:0 0 8px;color:#292929}'
    '.ar-hins p{font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 12px}'
    '.ar-hins .ar-hins-inner ul{list-style:disc;margin:0 0 4px;padding-inline-start:20px}'
    '.ar-hins .ar-hins-inner li{display:list-item;padding:0;border:0;gap:0;font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 6px}'
    '.ar-hins .ar-hins-inner li:before{content:none;display:none}'
    '.ar-hins-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin:16px 0 20px}'
    '.ar-hins-card{background:#FAF8F6;border:1px solid #EBE9E8;border-radius:12px;padding:18px 18px 12px}'
    '.ar-hins-by{font-size:13.5px;color:#5c5b5a}'
    '.ar-hins-watch{font-size:13.5px;background:#FFF4EC;border-radius:8px;padding:10px 12px;margin:8px 0 6px}'
    '.ar-hins-note{font-size:13px;color:#5c5b5a;margin:14px 0 0}'
    '.ar-hins-link{font-weight:600;color:#292929}'
    '@media (max-width:600px){.ar-hins{padding:0 16px}.ar-hins-inner{padding:20px 18px}}'
    '</style>'
)
OPEN_TAG_TAIL = re.compile(r"<(div|section)\b[^>]*>\s*$", re.S)


def ul(items):
    return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"


def card(c, k):
    return (f'<div class="ar-hins-card"><h3>{c[k + "_t"]}</h3><p class="ar-hins-by">{c[k + "_by"]}</p>{ul(c[k])}'
            f'<p class="ar-hins-watch"><strong>{c["watch"]}:</strong> {c[k + "_watch"]}</p></div>')


def section(kind, lang, route):
    c = (HOLIDAY if kind == "holiday" else HIGHVALUE)[lang]
    mark = "AR-HOLIDAY-INSURERS" if kind == "holiday" else "AR-HOME-INSURERS"
    sid = "ar-holiday-insurers" if kind == "holiday" else "ar-home-insurers"
    rtl = ' dir="rtl"' if lang == "he" else ""
    if kind == "holiday":
        target, label = SECOND_HOME.get(lang, SECOND_HOME["en"]), c["link"]
    else:
        target, label = SECOND_HOME.get(lang, SECOND_HOME["en"]), c["link2"]
    link = "" if target.strip("/") == route else f'<p><a class="ar-hins-link" href="{target}">{label} →</a></p>'
    return (f'<!-- {mark} -->\n<section class="ar-hins" id="{sid}"{rtl}><div class="ar-hins-inner">'
            f'<h2>{html.escape(c["title"])}</h2><p>{c["intro"]}</p>'
            f'<div class="ar-hins-grid">{card(c, "a")}{card(c, "b")}</div>'
            f'<h3>{c["need_t"]}</h3>{ul(c["need"])}<p class="ar-hins-note">{c["note"]}</p>{link}'
            f'</div></section>\n<!-- /{mark} -->\n')


def insertion_point(doc, route):
    starts = [i for i in (doc.find("<article"), doc.find("<main")) if i != -1]
    start = min(starts) if starts else 0
    k = doc.find("<!-- AR-KEYFACTS -->")
    if k != -1:
        start = max(start, doc.index("</section>", k) + len("</section>"))
    for m in re.finditer(r"<h2\b([^>]*)>(.*?)</h2>", doc[start:], re.S):
        pos = start + m.start()
        hid = re.search(r'id="([^"]+)"', m.group(1))
        if hid and hid.group(1) in SKIP_H2_IDS:
            continue
        before = doc[max(0, pos - 500):pos]
        if "lp-form-card" in before or "lang-policy" in before or "ar-hins" in before[-200:]:
            continue
        if doc.rfind("<aside", 0, pos) > doc.rfind("</aside>", 0, pos):
            continue  # heading inside an aside (e.g. the working-language note)
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
    doc = re.sub(r'<time datetime="\d{4}-\d{2}-\d{2}">Updated [^<]+</time>',
                 f'<time datetime="{DATE}">Updated 20 October 2026</time>', doc)
    return doc


def apply(doc, kind, lang, route):
    mark = "AR-HOLIDAY-INSURERS" if kind == "holiday" else "AR-HOME-INSURERS"
    doc = re.sub(rf"<!-- {mark} -->.*?<!-- /{mark} -->\n?", "", doc, flags=re.S)
    pos = insertion_point(doc, route)
    return doc[:pos] + section(kind, lang, route) + doc[pos:]


def main():
    changed = []
    jobs = [(r, "holiday", l) for r, l in HOLIDAY_PAGES.items()] + [(r, "high", l) for r, l in HIGH_PAGES.items()]
    for route, kind, lang in jobs:
        path = PUBLIC / route / "index.html"
        doc = path.read_text(encoding="utf-8")
        original = doc
        if 'id="ar-homeins-style"' in doc:
            doc = re.sub(r'<style id="ar-homeins-style">.*?</style>', STYLE, doc, flags=re.S)
        else:
            doc = doc.replace("</head>", STYLE + "\n</head>", 1)
        doc = apply(doc, kind, lang, route)
        doc = doc.replace("Zurich, Allianz, Fidelidade, Generali Tranquilidade, Liberty, Hiscox and others",
                          "Hiscox, Liberty Mutual, Zurich, Allianz, Generali Tranquilidade and others")
        doc = bump_dates(doc)
        if doc != original:
            path.write_text(doc, encoding="utf-8")
            changed.append(route)

    # The Fidelidade line also sits on pages outside these lists.
    for f in PUBLIC.rglob("index.html"):
        s = f.read_text(encoding="utf-8")
        if "Zurich, Allianz, Fidelidade, Generali Tranquilidade, Liberty, Hiscox and others" in s:
            f.write_text(s.replace("Zurich, Allianz, Fidelidade, Generali Tranquilidade, Liberty, Hiscox and others",
                                   "Hiscox, Liberty Mutual, Zurich, Allianz, Generali Tranquilidade and others"), encoding="utf-8")

    for f in sorted(PUBLIC.glob("sitemap-*.xml")):
        x = f.read_text(encoding="utf-8")
        new = x
        for route in changed:
            loc = f"{BASE}/{route}/"
            new = re.sub(r"(<loc>" + re.escape(loc) + r"</loc>(?:\s*<xhtml:link[^>]*>)*\s*<lastmod>)[^<]+(</lastmod>)",
                         r"\g<1>" + DATE + r"\g<2>", new)
        if new != x:
            f.write_text(new, encoding="utf-8")

    data_path = ROOT / "data/articles.json"
    data = json.loads(data_path.read_text(encoding="utf-8"))
    slugs = {r.split("/")[-1] for r in changed if "blog/" in r}
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
