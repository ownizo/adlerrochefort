#!/usr/bin/env python3
"""Writes public/llms-full.txt: every public, self-canonical, indexable page
of the site, by language, with its title and meta description (October 2026).
Category and pagination pages are left out. llms.txt stays the short,
curated overview and links here. Rerun after adding pages.

Usage: python3 scripts/build-llms-full.py
"""
import collections, glob, html, os, re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public")
SITE = "https://adlerrochefort.com"
NAMES = {"pt": "Português (Portugal)", "br": "Português (Brasil)", "en": "English", "de": "Deutsch", "es": "Español",
         "nl": "Nederlands", "fr": "Français", "it": "Italiano", "pl": "Polski", "se": "Svenska", "dk": "Dansk",
         "zh": "简体中文", "il": "עברית"}
ORDER = ["en", "pt", "es", "de", "nl", "fr", "it", "pl", "se", "dk", "zh", "il", "br"]

groups = collections.defaultdict(lambda: {"pages": [], "blog": []})
os.chdir(ROOT)
for f in sorted(glob.glob("**/index.html", recursive=True)):
    h = open(f, encoding="utf-8").read()
    if re.search(r'<meta name="robots" content="[^"]*noindex', h):
        continue
    path = "/" + f[:-10]
    if path in ("/alterarmediador/", "/descarregar/") or re.search(r"/(categoria|category)/|/pagina/|/page/\d", path):
        continue
    canon = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    if canon and canon.group(1) != SITE + path:
        continue
    seg = path.strip("/").split("/")[0] if path != "/" else ""
    lang = seg if seg in NAMES else "pt"
    t = html.unescape(re.search(r"<title>(.*?)</title>", h, re.S).group(1)).strip()
    t = re.sub(r"\s*[|·–]\s*Adler\s*&\s*Rochefort.*$", "", t).strip()
    d = re.search(r'<meta name="description" content="([^"]*)"', h)
    d = html.unescape(d.group(1)).strip() if d else ""
    groups[lang]["blog" if "/blog/" in path else "pages"].append((path, t, d))

lines = ["# Adler & Rochefort — full page index", "",
         "> Complete list of the public pages of adlerrochefort.com, by language, each with its own one-line description. "
         "For the short overview, read https://adlerrochefort.com/llms.txt. Adler & Rochefort is the trading name of Ownizo, "
         "Unipessoal Lda., an insurance intermediary registered with Portugal's ASF (no. 425591790/3), head office in Lisbon, "
         "advising private clients, expatriates and international families on insurance in Portugal and Spain, and on "
         "international health insurance worldwide.", ""]
total = 0
for l in ORDER:
    g = groups.get(l)
    if not g:
        continue
    lines += [f"## {NAMES[l]}", ""]
    for kind, label in (("pages", "Pages"), ("blog", "Articles")):
        if not g[kind]:
            continue
        lines.append(f"### {label}")
        for p, t, d in g[kind]:
            lines.append(f"- [{t}]({SITE}{p})" + (f": {d}" if d else ""))
            total += 1
        lines.append("")
open("llms-full.txt", "w", encoding="utf-8").write("\n".join(lines))
print("pages listed:", total)
