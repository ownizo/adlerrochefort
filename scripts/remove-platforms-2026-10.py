#!/usr/bin/env python3
"""Remove the discontinued client platforms from the public site (2026-10-20).

Os Meus Seguros (osmeusseguros.com, formerly Adler Pro / Adler One) and
MyCoverVault (mycovervault.com) no longer exist. This removes:
- homepage sections id="adler-pro" / id="adler-one" (and their scroll scripts),
- menu, mobile-menu and footer links to them,
- footer "platform" buttons,
- the SaaS blog article (PT + EN) cards and related links.
Idempotent.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

PLATFORM_HOSTS = r"(?:https?://)?(?:www\.)?(?:mycovervault\.com|osmeusseguros\.com|one\.adlerrochefort\.com|pro\.adlerrochefort\.com)[^\"]*"
ARTICLES = ("/blog/adler-pro-plataforma-saas/", "/en/blog/adler-pro-saas-platform/")
ART = "|".join(re.escape(a) for a in ARTICLES)

rules = [
    # homepage sections
    (re.compile(r'\n?<!--[^>]*(?:ADLER[ -]?(?:PRO|ONE)|MYCOVERVAULT|OS MEUS SEGUROS)[^>]*-->\s*(?=<section)', re.I), "\n"),
    (re.compile(r'\n?<section class="tech-section[^"]*"[^>]*>.*?</section>\n?', re.S), "\n"),
    # nav / mobile nav / footer links to the in-page anchors
    (re.compile(r'[ \t]*<li><a href="[^"]*#adler-(?:pro|one)"[^>]*>[^<]*</a></li>\n?'), ""),
    (re.compile(r'[ \t]*<a href="[^"]*#adler-(?:pro|one)"[^>]*>[^<]*</a>\n?'), ""),
    # external platform links
    (re.compile(r'[ \t]*<li><a href="' + PLATFORM_HOSTS + r'"[^>]*>[^<]*</a></li>\n?'), ""),
    (re.compile(r'[ \t]*<a href="' + PLATFORM_HOSTS + r'"[^>]*class="footer-platform-link"[^>]*>[^<]*</a>\n?'), ""),
    (re.compile(r'[ \t]*<a href="' + PLATFORM_HOSTS + r'"[^>]*>[^<]*</a>\n?'), ""),
    # emptied containers
    (re.compile(r'[ \t]*<div class="footer-platforms">\s*</div>\n?'), ""),
    (re.compile(r'[ \t]*<div>\s*<div class="footer-col-title">[^<]*</div>\s*<ul class="footer-col-links">\s*</ul>\s*</div>\n?'), ""),
    # SaaS article: related cards, blog cards, inline links
    (re.compile(r'[ \t]*<a href="(?:https://adlerrochefort\.com)?(?:' + ART + r')" class="related-card">.*?</a>\n?', re.S), ""),
    (re.compile(r'[ \t]*<(article|div) class="blog-card[^"]*"[^>]*>(?:(?!</?\1[ >]).)*?(?:' + ART + r').*?</\1>\n?', re.S), ""),
    (re.compile(r'[ \t]*<a [^>]*href="(?:' + ART + r')"[^>]*class="blog-card[^"]*"[^>]*>.*?</a>\n?', re.S), ""),
    (re.compile(r'[ \t]*<a class="blog-card[^"]*" href="(?:' + ART + r')"[^>]*>.*?</a>\n?', re.S), ""),
    (re.compile(r' ?&middot; <a href="(?:' + ART + r')"[^>]*>[^<]*</a>'), ""),
]


def clean(s):
    for rx, rep in rules:
        s = rx.sub(rep, s)
    return s


def main():
    changed = []
    for f in PUBLIC.rglob("*.html"):
        rel = "/" + str(f.relative_to(PUBLIC)).replace("index.html", "")
        if rel in ARTICLES:
            continue
        s = f.read_text(encoding="utf-8")
        t = clean(s)
        if t != s:
            f.write_text(t, encoding="utf-8")
            changed.append(rel)
    for c in sorted(changed):
        print(c)
    print(len(changed), "files changed", file=sys.stderr)


if __name__ == "__main__":
    main()
