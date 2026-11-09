#!/usr/bin/env python3
"""Add the "Allianz Certified Health Solutions Advisor 2026" badge to the
pages that discuss Allianz Care: the international health insurance (IPMI)
hubs, the Allianz Care product pages, the IPMI country/segment pages and the
Allianz Care vs Cigna Global articles, in every language.

The badge is inserted directly after the author box (ipmi-author, ar-author or
article-author). Idempotent: pages that already carry the badge are skipped.
Re-run it after regenerating any of these pages with a build script.

Usage: python3 scripts/add-allianz-badge.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "public"
MARK = "<!-- allianz-badge -->"
IMG = "/images/allianz-certified-health-solutions-advisor-2026"
TITLE = "Allianz Certified Health Solutions Advisor 2026"

PAGES = """
blog/allianz-care-vs-cigna-global-seguro-saude-internacional
seguros/saude-internacional
seguros/saude-internacional/allianz-care
seguros/saude-internacional/brasileiros-no-exterior
en/blog/allianz-care-vs-cigna-global-portugal-spain
en/international-health-insurance-portugal
en/international-health-insurance
en/international-health-insurance/allianz-care
en/international-health-insurance/colombia
en/international-health-insurance/digital-nomads
en/international-health-insurance/malaysia
en/international-health-insurance/mexico
en/international-health-insurance/panama
en/international-health-insurance/philippines
en/international-health-insurance/retirees-abroad
en/international-health-insurance/singapore
en/international-health-insurance/thailand
en/international-health-insurance/us-citizens-abroad
en/international-health-insurance/vietnam
es/allianz-care-vs-cigna-global-seguro-salud-internacional
es/seguro-medico-internacional
es/seguro-medico-internacional/allianz-care
es/seguro-medico-internacional/colombia
es/seguro-medico-internacional/espana
es/seguro-medico-internacional/mexicanos-en-el-extranjero
es/seguro-medico-internacional/nomadas-digitales
es/seguro-medico-internacional/panama
de/blog/allianz-care-vs-cigna-global-portugal-spanien
de/internationale-krankenversicherung
de/internationale-krankenversicherung/allianz-care
de/internationale-krankenversicherung/digitale-nomaden
de/internationale-krankenversicherung/rentner-im-ausland
de/internationale-krankenversicherung/thailand
fr/assurance-sante-internationale
fr/assurance-sante-internationale/allianz-care
it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale
it/assicurazione-medica-internazionale
it/assicurazione-medica-internazionale/allianz-care
nl/allianz-care-vs-cigna-global-portugal-spanje
nl/internationale-zorgverzekering
nl/internationale-zorgverzekering/allianz-care
pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne
pl/miedzynarodowe-ubezpieczenie-zdrowotne
pl/miedzynarodowe-ubezpieczenie-zdrowotne/allianz-care
se/allianz-care-vs-cigna-global-sjukvardsforsakring
se/internationell-sjukvardsforsakring
se/internationell-sjukvardsforsakring/allianz-care
dk/allianz-care-vs-cigna-global-sundhedsforsikring
dk/international-sundhedsforsikring
dk/international-sundhedsforsikring/allianz-care
il/international-health-insurance
il/international-health-insurance/allianz-care
zh/international-health-insurance
zh/international-health-insurance/allianz-care
""".split()

S = f"<strong>{TITLE}</strong>"
TEXT = {
    "pt": f"Certificação Allianz: a Adler &amp; Rochefort é {S}.",
    "en": f"Certified by Allianz: Adler &amp; Rochefort is an {S}.",
    "es": f"Certificados por Allianz: Adler &amp; Rochefort es {S}.",
    "de": f"Von Allianz zertifiziert: Adler &amp; Rochefort ist {S}.",
    "fr": f"Certifiés par Allianz : Adler &amp; Rochefort est {S}.",
    "it": f"Certificati da Allianz: Adler &amp; Rochefort è {S}.",
    "nl": f"Gecertificeerd door Allianz: Adler &amp; Rochefort is {S}.",
    "pl": f"Certyfikat Allianz: Adler &amp; Rochefort posiada tytuł {S}.",
    "sv": f"Certifierade av Allianz: Adler &amp; Rochefort är {S}.",
    "da": f"Certificeret af Allianz: Adler &amp; Rochefort er {S}.",
    "he": f"<bdi>Adler &amp; Rochefort</bdi> מוסמכת על ידי Allianz ‏— <strong><bdi>{TITLE}</bdi></strong>.",
    "zh": f"安联认证：Adler &amp; Rochefort 是 {S}。",
}

STYLE = (
    '<style id="ar-allianz-badge-style">'
    ".ar-allianz-badge{max-width:1100px;margin:12px auto 0;padding:0 24px}"
    ".ar-allianz-badge-inner{display:flex;gap:16px;align-items:center;background:#fff;"
    "border:1px solid #EBE9E8;border-radius:16px;padding:12px 18px}"
    ".ar-allianz-badge img{width:84px;height:auto;flex:0 0 84px;display:block}"
    ".ar-allianz-badge p{margin:0;font-size:14px;line-height:1.5;color:#292929}"
    ".ar-allianz-badge--boxed{max-width:none;padding:0;margin:-12px 0 26px}"
    "@media(max-width:560px){.ar-allianz-badge img{width:64px;flex-basis:64px}}"
    "</style>"
)

AUTHOR_START = re.compile(r'<div class="(ipmi-author|ar-author|article-author)"')
DIV = re.compile(r"<div\b|</div>")


def end_of_div(html, start):
    depth = 0
    for m in DIV.finditer(html, start):
        depth += 1 if m.group() != "</div>" else -1
        if depth == 0:
            end = m.end()
            if html.startswith("<!-- /article-author -->", end):
                end += len("<!-- /article-author -->")
            return end
    raise ValueError("unbalanced author box")


def block(lang, boxed):
    text = TEXT[lang]
    cls = "ar-allianz-badge ar-allianz-badge--boxed" if boxed else "ar-allianz-badge"
    return (
        f'\n{MARK}<div class="{cls}"><div class="ar-allianz-badge-inner">'
        f'<picture><source srcset="{IMG}.webp" type="image/webp">'
        f'<img src="{IMG}.png" alt="{TITLE}" width="176" height="185" loading="lazy" decoding="async"></picture>'
        f"<p>{text}</p></div></div>\n"
    )


def main():
    done = skipped = 0
    for rel in PAGES:
        path = ROOT / rel / "index.html"
        html = path.read_text(encoding="utf-8")
        if MARK in html:
            skipped += 1
            continue
        lang = re.search(r'<html lang="([a-z]{2})', html).group(1)
        m = AUTHOR_START.search(html)
        if not m:
            raise SystemExit(f"no author box: {rel}")
        end = end_of_div(html, m.start())
        # Self-boxed author cards (article-author, or ipmi-author without an
        # -inner wrapper) sit inside the content column: align the badge to them.
        boxed = "-inner" not in html[m.start():end][:200]
        html = html[:end] + block(lang, boxed) + html[end:]
        html = html.replace("</head>", STYLE + "\n</head>", 1)
        path.write_text(html, encoding="utf-8")
        done += 1
    print(f"badge added: {done}, already present: {skipped}")


if __name__ == "__main__":
    main()
