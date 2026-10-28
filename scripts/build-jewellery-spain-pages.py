#!/usr/bin/env python3
"""Builds the "jewellery and watch insurance in Spain" pages (October 2026).

For each language in scripts/jewellery-spain.data.py, the page is cloned from
that language's "art and jewellery beyond the agreed value" page, so it keeps
the language's own chrome, quick-contact form (already registered in Netlify
and in HANDLED_FORMS) and the translated insurer block, and only the
page-specific parts are replaced: head metadata, hreflang, language selector,
hero, body sections, FAQ, related links and JSON-LD.

Then the hreflang block and language selector of every member of the
jewellery cluster (new and existing pages) are rewritten from CLUSTER, so all
eleven versions point at each other.

Usage: python3 scripts/build-jewellery-spain-pages.py
"""
import html
import json
import os
import re
import runpy

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PUBLIC = os.path.join(ROOT, "public")
DATA = runpy.run_path(os.path.join(os.path.dirname(os.path.abspath(__file__)), "jewellery-spain.data.py"))
PAGES, CLUSTER = DATA["PAGES"], DATA["CLUSTER"]
SITE = "https://adlerrochefort.com"
TODAY = "2026-10-28"

HREFLANG_TO_LANG = {code: lang for lang, (_, code) in CLUSTER.items()}
HREFLANG_TO_LANG.update({"en": "en", "pt": "pt", "he": "il", "zh": "zh", "sv": "se", "da": "dk", "it": "it", "pl": "pl"})


def esc(s):
    return html.escape(s, quote=True)


def hreflang_block(indent=""):
    lines = [f'{indent}<link rel="alternate" hreflang="{code}" href="{SITE}{path}">' for path, code in CLUSTER.values()]
    lines.append(f'{indent}<link rel="alternate" hreflang="x-default" href="{SITE}{CLUSTER["en"][0]}">')
    return "\n".join(lines)


def set_hreflang(h):
    """Replace every <link rel="alternate" hreflang> in <head> with the cluster block."""
    head_end = h.index("</head>")
    head, rest = h[:head_end], h[head_end:]
    pat = re.compile(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n?')
    m = pat.search(head)
    indent = re.match(r"[ \t]*", m.group(0)).group(0) if m else ""
    if m:
        pos = m.start()
        head = pat.sub("", head)
    else:
        canon = re.search(r'<link rel="canonical"[^>]*>\n?', head)
        pos = canon.end()
    head = head[:pos] + hreflang_block(indent) + "\n" + head[pos:]
    return head + rest


def set_switcher(h):
    """Point each language-selector entry at its cluster counterpart (FR stays as it is)."""
    def fix(m):
        a = m.group(0)
        code = re.search(r'hreflang="([^"]+)"', a).group(1)
        lang = HREFLANG_TO_LANG.get(code) or HREFLANG_TO_LANG.get(code.split("-")[0])
        if lang in CLUSTER:
            a = re.sub(r'href="[^"]*"', f'href="{CLUSTER[lang][0]}"', a, count=1)
            # a real counterpart now exists, so drop the "home page" note
            a = re.sub(r'<span class="ar-langsel-note">[^<]*</span>', "", a)
        return a
    return re.sub(r'<li><a href="[^"]*"[^>]*hreflang="[^"]+"[^>]*>.*?</a></li>', fix, h)


def replace_meta(h, attr, key, value):
    pat = re.compile(r'(<meta %s="%s" content=")[^"]*(")' % (attr, re.escape(key)))
    return pat.sub(lambda m: m.group(1) + esc(value) + m.group(2), h)


def section_html(i, sid, heading, body):
    tone = "plain" if i % 2 == 0 else "tint"
    return (f'<section class="section {tone}" aria-labelledby="{sid}">\n'
            f'  <div class="container narrow article-body">\n'
            f'    <h2 id="{sid}">{heading}</h2>\n'
            f'    {body}\n'
            f'  </div>\n'
            f'</section>\n')


def build(lang, p):
    tpl_path = os.path.join(PUBLIC, lang, p["template"], "index.html")
    h = open(tpl_path, encoding="utf-8").read()
    old_slug, new_slug = p["template"], p["slug"]
    h = h.replace(f"/{lang}/{old_slug}/", f"/{lang}/{new_slug}/").replace(f"{lang}/{old_slug}", f"{lang}/{new_slug}").replace(f"{lang}-{old_slug}", f"{lang}-{new_slug}")
    h = h.replace(f"blog%3A{old_slug}", f"blog%3A{new_slug}")

    # The template's keywords describe the art article, not this page.
    h = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", h)

    full_title = f'{p["title"]} | Adler &amp; Rochefort'
    h = re.sub(r"<title>[^<]*</title>", f"<title>{full_title}</title>", h, count=1)
    h = replace_meta(h, "name", "description", p["description"])
    for attr in ("property", "name"):
        h = replace_meta(h, attr, "og:title", html.unescape(full_title))
        h = replace_meta(h, attr, "og:description", p["description"])
        h = replace_meta(h, attr, "twitter:title", html.unescape(full_title))
        h = replace_meta(h, attr, "twitter:description", p["description"])

    h = set_hreflang(h)
    h = set_switcher(h)

    # Hero
    h = re.sub(r'(<section class="hero".*?<span class="eyebrow">)[^<]*(</span>)', lambda m: m.group(1) + p["eyebrow"] + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<h1 id="hero-title">).*?(</h1>)', lambda m: m.group(1) + esc(p["h1"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<p class="hero-subtitle">).*?(</p>)', lambda m: m.group(1) + esc(p["subtitle"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<p class="hero-meta">).*?(</p>)', lambda m: m.group(1) + p["meta"] + m.group(2), h, count=1, flags=re.S)

    # Body: everything between the insurer block and the FAQ section.
    marker = "<!-- /AR-VALUABLES-INSURERS -->"
    start = h.index(marker) + len(marker)
    faq_pos = h.index('class="faq-list"')
    faq_sec = h.rfind("<section", 0, faq_pos)
    before = h[h.index('<main'):start]
    before = re.sub(r'<section class="ar-vins".*?</section>', "", before, flags=re.S)
    open_sections = before.count("<section") - before.count("</section>")
    open_sections -= 0  # the <main>/<article> wrappers are not sections
    closing = ""
    if open_sections > 0:
        # NL template: the quick-contact form, the insurer block and the first
        # body heading share one section; close it before the new sections.
        closing = "\n  </div>\n</section>\n" * open_sections
        # that shared section was labelled by the heading we just removed
        sec_open = h.rfind("<section", 0, h.index(marker))
        while 'class="ar-vins"' in h[sec_open:sec_open + 40]:
            sec_open = h.rfind("<section", 0, sec_open)
        tag_end = h.index(">", sec_open)
        tag = re.sub(r' aria-labelledby="[^"]*"', "", h[sec_open:tag_end])
        h = h[:sec_open] + tag + h[tag_end:]
        start = h.index(marker) + len(marker)
        faq_sec = h.rfind("<section", 0, h.index('class="faq-list"'))
    body = "".join(section_html(i, sid, esc(head), b) for i, (sid, head, b) in enumerate(p["sections"]))
    h = h[:start] + closing + "\n" + body + "\n" + h[faq_sec:]

    # Visible breadcrumb: the template's last crumb names the art article.
    h = re.sub(r'(<nav class="breadcrumb".*?<span aria-current="page">)[^<]*(</span>)',
               lambda m: m.group(1) + esc(p["title"]) + m.group(2), h, count=1, flags=re.S)

    # FAQ
    h = re.sub(r'(<h2 id="faq-title">)[^<]*(</h2>)', lambda m: m.group(1) + esc(p["faq_title"]) + m.group(2), h, count=1)
    items = "".join(
        f'      <details class="faq-item">\n        <summary>{esc(q)}</summary>\n'
        f'        <div class="faq-answer"><p>{esc(a)}</p></div>\n      </details>\n'
        for q, a in p["faq"])
    i = h.index('<div class="faq-list">') + len('<div class="faq-list">')
    # find the matching </div> for faq-list
    depth, j = 1, i
    for m in re.finditer(r"<(/?)div\b", h[i:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            j = i + m.start()
            break
    h = h[:i] + "\n" + items + "    " + h[j:]

    # Related links
    def rel_li(href, text):
        extra = ' hreflang="en-GB"' if href.startswith("/en/") else ""
        return f'      <li><a class="text-link" href="{href}"{extra}>{esc(text)}</a></li>\n'
    rel = "".join(rel_li(href, text) for href, text in p["related"])
    h = re.sub(r'(<ul class="related">).*?(</ul>)', lambda m: m.group(1) + "\n" + rel + "    " + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<ul class="related">)', r"\1", h)
    rel_h2 = re.search(r'<h2 id="(related-title|verder-title)">[^<]*</h2>', h)
    if rel_h2:
        h = h.replace(rel_h2.group(0), f'<h2 id="{rel_h2.group(1)}">{esc(p["related_title"])}</h2>', 1)

    # JSON-LD
    url = f"{SITE}/{lang}/{new_slug}/"

    def fix_ld(m):
        d = json.loads(m.group(1))
        nodes = d["@graph"] if "@graph" in d else [d]
        for n in nodes:
            t = n.get("@type")
            if t in ("Article", "BlogPosting"):
                n["headline"] = p["h1"]
                n["description"] = p["description"]
                n["datePublished"] = TODAY
                n["dateModified"] = TODAY
                if "url" in n:
                    n["url"] = url
                if isinstance(n.get("mainEntityOfPage"), dict):
                    n["mainEntityOfPage"]["@id"] = url
                elif "mainEntityOfPage" in n:
                    n["mainEntityOfPage"] = url
                if "inLanguage" not in n:
                    pass
            elif t == "FAQPage":
                n["mainEntity"] = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]
            elif t == "BreadcrumbList":
                items_ = n.get("itemListElement", [])
                if items_:
                    items_[-1]["name"] = p["title"]
                    items_[-1]["item"] = url
        return '<script type="application/ld+json">\n' + json.dumps(d, ensure_ascii=False, indent=2) + "\n</script>"

    h = re.sub(r'<script type="application/ld\+json">(.*?)</script>', fix_ld, h, flags=re.S)
    h = h.replace("Gepubliceerd: 11 oktober 2026", "Gepubliceerd: 28 oktober 2026")

    out_dir = os.path.join(PUBLIC, lang, new_slug)
    os.makedirs(out_dir, exist_ok=True)
    open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8").write(h)
    return out_dir


def refresh_existing():
    """hreflang + selector on the four existing cluster members."""
    for lang in ("pt", "en", "de", "es"):
        path = os.path.join(PUBLIC, CLUSTER[lang][0].strip("/"), "index.html")
        h = open(path, encoding="utf-8").read()
        h2 = set_switcher(set_hreflang(h))
        if h2 != h:
            open(path, "w", encoding="utf-8").write(h2)
            print("updated", path)


if __name__ == "__main__":
    for lang, p in PAGES.items():
        print("built", build(lang, p))
    refresh_existing()
