#!/usr/bin/env python3
"""Adds "Travel insurance" to the main navigation of every page (November 2026),
right after each link to that language's international health insurance hub
inside <nav class="site-nav">. Idempotent. Usage: python3 scripts/add-travel-nav-links.py [--dry]"""
import glob, html, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from travel_content import C as C1, URLS  # noqa: E402
from travel_content_2 import C as C2  # noqa: E402
from travel_content_3 import C as C3  # noqa: E402
C = {**C1, **C2, **C3}
HUBS = {"/en/international-health-insurance/": "en", "/seguros/saude-internacional/": "pt",
        "/de/internationale-krankenversicherung/": "de", "/es/seguro-medico-internacional/": "es",
        "/nl/internationale-zorgverzekering/": "nl", "/fr/assurance-sante-internationale/": "fr",
        "/it/assicurazione-sanitaria-internazionale/": "it", "/it/assicurazione-medica-internazionale/": "it",
        "/pl/miedzynarodowe-ubezpieczenie-zdrowotne/": "pl", "/se/internationell-sjukvardsforsakring/": "se",
        "/dk/international-sundhedsforsikring/": "dk", "/il/international-health-insurance/": "il",
        "/zh/international-health-insurance/": "zh"}
dry = "--dry" in sys.argv
changed = 0
pat = re.compile(r'<a href="(' + "|".join(map(re.escape, HUBS)) + r')"([^>]*)>[^<]*</a>')
for f in glob.glob(os.path.join(HERE, "..", "public", "**", "*.html"), recursive=True):
    s = open(f, encoding="utf-8").read()
    i = s.find('<nav class="site-nav"')
    if i < 0:
        continue
    j = s.find("</nav>", i)
    nav = s[i:j]
    if any(f'\n            <a href="{u}"' in nav for u in URLS.values()):
        continue
    def rep(m):
        lang = HUBS[m.group(1)]
        return m.group(0) + f'\n            <a href="{URLS[lang]}"{m.group(2)}>{html.escape(C[lang]["crumb"])}</a>'
    new, n = pat.subn(rep, nav)
    if n:
        changed += 1
        if not dry:
            open(f, "w", encoding="utf-8").write(s[:i] + new + s[j:])
print("pages updated:", changed, "(dry run)" if dry else "")
