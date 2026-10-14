#!/usr/bin/env python3
"""Adds a visible author / reviewer box (Hugo Gonçalves) right after the hero
of every indexable page that does not show an author yet, in the page's own
language, plus Person / reviewedBy / dateModified structured data where the
page does not already carry them.

Why: AI assistants and Google weigh content more when the person responsible
for it is named on the page and in the structured data, consistently.

Idempotent (marker: <!-- AR-AUTHOR -->). Run: python3 scripts/add-author-box.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
TODAY = "2026-10-14"
PERSON_ID = "https://adlerrochefort.com/#hugo-goncalves"

TEXT = {
    "pt": "Revisto por <strong>Hugo Gonçalves</strong>, fundador e especialista em gestão de risco da Adler &amp; Rochefort · Licenciado em Gestão de Empresas (University of Hertfordshire) · Formação contínua no Chartered Insurance Institute (CII), Londres.",
    "en": "Reviewed by <strong>Hugo Gonçalves</strong>, Founder &amp; Risk Management Specialist at Adler &amp; Rochefort · Degree in Business Management (University of Hertfordshire) · Ongoing training at the Chartered Insurance Institute (CII), London.",
    "es": "Revisado por <strong>Hugo Gonçalves</strong>, fundador y especialista en gestión de riesgos de Adler &amp; Rochefort · Licenciado en Gestión de Empresas (University of Hertfordshire) · Formación continua en el Chartered Insurance Institute (CII), Londres.",
    "de": "Geprüft von <strong>Hugo Gonçalves</strong>, Gründer und Risikomanagement-Spezialist von Adler &amp; Rochefort · Abschluss in Business Management (University of Hertfordshire) · Laufende Weiterbildung am Chartered Insurance Institute (CII), London.",
    "nl": "Gecontroleerd door <strong>Hugo Gonçalves</strong>, oprichter en risicomanagementspecialist van Adler &amp; Rochefort · Bachelor Bedrijfskunde (University of Hertfordshire) · Doorlopende opleiding bij het Chartered Insurance Institute (CII), Londen.",
    "fr": "Relu par <strong>Hugo Gonçalves</strong>, fondateur et spécialiste en gestion des risques d’Adler &amp; Rochefort · Diplômé en gestion d’entreprise (University of Hertfordshire) · Formation continue au Chartered Insurance Institute (CII), Londres.",
    "it": "Revisionato da <strong>Hugo Gonçalves</strong>, fondatore e specialista in gestione del rischio di Adler &amp; Rochefort · Laurea in Business Management (University of Hertfordshire) · Formazione continua presso il Chartered Insurance Institute (CII), Londra.",
    "pl": "Zweryfikował <strong>Hugo Gonçalves</strong>, założyciel i specjalista ds. zarządzania ryzykiem w Adler &amp; Rochefort · Dyplom z zarządzania (University of Hertfordshire) · Stałe szkolenie w Chartered Insurance Institute (CII) w Londynie.",
    "sv": "Granskad av <strong>Hugo Gonçalves</strong>, grundare och riskhanteringsspecialist på Adler &amp; Rochefort · Examen i företagsekonomi (University of Hertfordshire) · Löpande utbildning vid Chartered Insurance Institute (CII), London.",
    "da": "Gennemgået af <strong>Hugo Gonçalves</strong>, stifter og specialist i risikostyring hos Adler &amp; Rochefort · Uddannet i virksomhedsledelse (University of Hertfordshire) · Løbende uddannelse ved Chartered Insurance Institute (CII), London.",
    "zh": "审阅：<strong>Hugo Gonçalves</strong>，Adler &amp; Rochefort 创始人兼风险管理专家 · 赫特福德大学（University of Hertfordshire）工商管理学位 · 在伦敦特许保险学会（CII）持续进修。",
    "he": "נבדק על ידי <strong>Hugo Gonçalves</strong>, מייסד ומומחה לניהול סיכונים ב-Adler &amp; Rochefort · תואר במנהל עסקים (University of Hertfordshire) · השתלמות מתמשכת ב-Chartered Insurance Institute (CII), לונדון.",
}

STYLE = ('<style id="ar-author-style">.ar-author{max-width:1100px;margin:24px auto 0;padding:0 24px}'
         '.ar-author-inner{display:flex;gap:14px;align-items:center;background:#fff;border:1px solid #EBE9E8;border-radius:16px;padding:14px 18px}'
         '.ar-author img{width:48px;height:48px;border-radius:50%;object-fit:cover;flex:0 0 48px}'
         '.ar-author-text{font-size:13px;line-height:1.6;color:#333332;margin:0}.ar-author-text strong{color:#292929}'
         '@media(max-width:760px){.ar-author-inner{align-items:flex-start}}</style>')

PERSON = {
    "@type": "Person", "@id": PERSON_ID, "name": "Hugo Gonçalves",
    "jobTitle": "Founder & Risk Management Specialist",
    "worksFor": {"@id": "https://adlerrochefort.com/#organization"},
    "image": "https://adlerrochefort.com/images/hugo-goncalves-640.jpg",
    "alumniOf": {"@type": "CollegeOrUniversity", "name": "University of Hertfordshire"},
}


def lang_of(html):
    m = re.search(r'<html[^>]*\blang="([^"]+)"', html)
    code = (m.group(1) if m else "en").lower()
    return code.split("-")[0] if code.split("-")[0] in TEXT else "en"


def hero_end(html):
    """Index right after the element (section/header) that contains the H1."""
    h1 = html.find("<h1")
    if h1 < 0:
        return None
    opener = None
    for m in re.finditer(r"<(section|header)\b", html[:h1]):
        opener = m
    if not opener:
        return None
    tag = opener.group(1)
    depth = 0
    for m in re.finditer(rf"<(/?){tag}\b[^>]*>", html[opener.start():]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            end = opener.start() + m.end()
            return end if end > h1 else None
    return None


def box(lang):
    rtl = ' dir="rtl"' if lang == "he" else ""
    return (f'\n<!-- AR-AUTHOR -->\n<div class="ar-author"{rtl}><div class="ar-author-inner">'
            '<picture><source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp">'
            '<img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" width="48" height="48" loading="lazy" decoding="async"></picture>'
            f'<p class="ar-author-text">{TEXT[lang]}</p></div></div>\n')


def schema(html):
    has_person = bool(re.search(r'"@type":\s*"Person"', html))
    has_date = "dateModified" in html
    if has_person and has_date:
        return ""
    canon = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    if not canon:
        return ""
    page = {"@type": "WebPage", "@id": canon.group(1), "url": canon.group(1)}
    graph = []
    if not has_person:
        graph.append(PERSON)
        page["reviewedBy"] = {"@id": PERSON_ID}
    if not has_date:
        page["dateModified"] = TODAY
    graph.append(page)
    return ('<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)
            + "</script>\n")


def main():
    done, skipped = 0, []
    for f in sorted(PUBLIC.rglob("index.html")):
        html = f.read_text(encoding="utf-8")
        if "<!-- AR-AUTHOR -->" in html or "article-author" in html or "ipmi-author" in html:
            continue
        if re.search(r'<meta name="robots" content="[^"]*noindex', html):
            continue
        end = hero_end(html)
        if end is None:
            skipped.append(str(f.relative_to(PUBLIC)))
            continue
        lang = lang_of(html)
        html = html[:end] + box(lang) + html[end:]
        html = html.replace("</head>", STYLE + "\n" + schema(html) + "</head>", 1)
        f.write_text(html, encoding="utf-8")
        done += 1
    print("author box added:", done)
    print("skipped (no hero section):", len(skipped), skipped[:20])


if __name__ == "__main__":
    main()
