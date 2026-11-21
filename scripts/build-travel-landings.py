#!/usr/bin/env python3
"""Builds the EN and DE travel insurance comparison landing pages
(USA, annual multi-trip, ski, cruise) — 21 November 2026.

Each page is cloned from the main travel page of its language (same nav,
footer, styles, quote tool and i18n), with head metadata, hreflang (EN/DE
pair), JSON-LD, breadcrumb and <main> replaced. The quote tool is preset with
data-dest / data-intent / data-sports. Also adds a "compare by trip" block to
the two main pages and the URLs to sitemap-pages.xml. Idempotent.

Run after scripts/build-travel-insurance-pages.py and
scripts/build-travel-blog-articles.py.

Usage: python3 scripts/build-travel-landings.py
"""
import html, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from travel_landings_content import PAIRS, P, UI  # noqa: E402
from travel_content import C as C1, URLS  # noqa: E402
from travel_content_4 import apply as reposition  # noqa: E402

C = reposition({k: v for k, v in C1.items() if k in ("en", "de")})
ROOT = os.path.join(HERE, "..", "public")
SITE = "https://adlerrochefort.com"
DATE = "2026-11-21"
LANGS = ("en", "de")
LOCALE = {"en": "en-GB", "de": "de-DE"}
HREFLANG = {"en": "en-GB", "de": "de"}
SLUG = {"en": {k: e for k, e, _ in PAIRS}, "de": {k: d for k, _, d in PAIRS}}


def esc(s):
    return html.escape(s, quote=True)


def url_of(lang, key):
    return URLS[lang] + SLUG[lang][key] + "/"


def read(p):
    with open(os.path.join(ROOT, p.lstrip("/")), encoding="utf-8") as f:
        return f.read()


def write(p, s):
    full = os.path.join(ROOT, p.lstrip("/"))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(s)


def sub1(pattern, repl, s, flags=0):
    new, n = re.subn(pattern, lambda m: repl, s, count=1, flags=flags)
    if n != 1:
        raise ValueError("pattern not found: " + pattern[:70])
    return new


def balanced_div(src, start_marker):
    i = src.index(start_marker)
    depth = 0
    for m in re.finditer(r"<(/?)div\b[^>]*>", src[i:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return src[i:i + m.end()]
    raise ValueError("unbalanced div")


def build(lang, key):
    d, u, t = P[lang][key], UI[lang], C[lang]
    page = url_of(lang, key)
    url = SITE + page
    src = read(URLS[lang] + "index.html")
    out = src

    title, desc = esc(d["title"]), esc(d["desc"])
    out = sub1(r"<title>.*?</title>", f"<title>{title}</title>", out, re.S)
    for pat, val in [(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">'),
                     (r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">'),
                     (r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{desc}">'),
                     (r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{title}">'),
                     (r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{desc}">'),
                     (r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">')]:
        out = sub1(pat, val, out)
    out = re.sub(r'<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?', "", out)
    alts = "".join(f'<link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{url_of(l, key)}">\n' for l in LANGS)
    alts += f'<link rel="alternate" hreflang="x-default" href="{SITE}{url_of("en", key)}">'
    out = sub1(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">\n{alts}', out)

    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S).group(1))
    crumbs = next(g for g in ld["@graph"] if g["@type"] == "BreadcrumbList")["itemListElement"]
    home_name, home_url = crumbs[0]["name"], crumbs[0]["item"]
    graph = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": d["title"], "description": d["desc"],
         "inLanguage": LOCALE[lang], "dateModified": DATE, "about": {"@id": url + "#service"},
         "isPartOf": {"@id": SITE + URLS[lang] + "#webpage"},
         "author": {"@type": "Person", "name": "Hugo Gonçalves", "jobTitle": "Founder & Risk Management Specialist",
                    "worksFor": {"@id": SITE + "/#organization"}},
         "publisher": {"@id": SITE + "/#organization"}},
        {"@type": "Service", "@id": url + "#service", "name": d["eyebrow"], "serviceType": "Travel insurance comparison",
         "category": "Premium travel insurance comparison", "description": d["desc"],
         "provider": {"@id": SITE + "/#organization"}, "areaServed": "Worldwide",
         "availableChannel": {"@type": "ServiceChannel", "serviceUrl": url}},
        {"@type": "InsuranceAgency", "@id": SITE + "/#organization", "name": "Adler & Rochefort",
         "legalName": "Ownizo, Unipessoal Lda.", "url": SITE + "/"},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": home_name, "item": home_url},
            {"@type": "ListItem", "position": 2, "name": u["home_crumb"], "item": SITE + URLS[lang]},
            {"@type": "ListItem", "position": 3, "name": d["crumb"], "item": url}]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in d["faq"]]},
    ]}
    ld_new = '<script type="application/ld+json">\n' + json.dumps(graph, ensure_ascii=False, indent=1) + "\n</script>"
    a = out.index('<script type="application/ld+json">')
    out = out[:a] + ld_new + out[out.index("</script>", a) + len("</script>"):]

    nav = re.search(r'<nav (class="breadcrumb[^"]*"[^>]*)>.*?</nav>', out, re.S)
    if nav:
        out = out[:nav.start()] + (f'<nav {nav.group(1)}><a href="{esc(home_url.replace(SITE, ""))}">{esc(home_name)}</a>'
                                   f'<span>&rsaquo;</span><a href="{URLS[lang]}">{esc(u["home_crumb"])}</a>'
                                   f'<span>&rsaquo;</span><a href="{page}">{esc(d["crumb"])}</a></nav>') + out[nav.end():]

    author = balanced_div(src, '<div class="ipmi-author">')
    form = balanced_div(src, '<div class="ar-cv ar-cta-form-wrap" id="ipmi-pedido">')
    pre = d["preset"]
    attrs = f' data-dest="{pre["dest"]}"' if pre.get("dest") else ""
    attrs += f' data-intent="{pre["intent"]}"' if pre.get("intent") else ""
    attrs += ' data-sports="1"' if pre.get("sports") else ""
    residence = re.search(r'<div id="ar-tq"[^>]*data-residence="([A-Z]{2})"', src).group(1)
    secs = "\n".join(f'  <section class="ipmi-sec" aria-labelledby="tl-s{i}">\n    <h2 id="tl-s{i}">{esc(h)}</h2>\n    {body}\n  </section>'
                     for i, (h, body) in enumerate(d["sections"], 1))
    faq = "\n".join(f"      <details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in d["faq"])
    sib = "".join(f'<li><a href="{url_of(lang, k)}">{esc(P[lang][k]["eyebrow"])}</a></li>' for k, _, _ in PAIRS if k != key)
    rel = "".join(f'<li><a href="{h}">{esc(x)}</a></li>' for h, x in d["related"])
    main = f"""<main id="main">
<!-- ar-travel-landing -->
<article class="ipmi-x">
<div class="ipmi-wrap">
  <header class="ipmi-hero">
    <span class="ipmi-eyebrow">{esc(d['eyebrow'])}</span>
    <h1>{esc(d['h1'])}</h1>
    <p class="ipmi-lead">{esc(d['lead'])}</p>
    <p class="ipmi-meta">{esc(t['meta'])}</p>
    <a class="ipmi-btn-sim" href="#tq">{esc(u['cta'])}</a>
  </header>
  <section class="tq-box" id="tq" aria-labelledby="tq-h">
    <h2 id="tq-h">{esc(u['tool_h'])}</h2>
    <p>{esc(u['tool_p'])}</p>
    <div id="ar-tq" data-lang="{lang}" data-locale="{LOCALE[lang]}" data-residence="{residence}"{attrs}></div>
    <noscript><p><a href="#ipmi-pedido">{esc(t['btn_advice'])}</a></p></noscript>
  </section>
{secs}
  {author}
  <section class="ipmi-sec" aria-labelledby="tl-who">
    <h2 id="tl-who">{esc(u['who_h'])}</h2>
    <p>{esc(t['s5_p'])}</p>
  </section>
  <div class="ipmi-formbox">
{form}
  </div>
  <section class="ipmi-faq" aria-labelledby="ipmi-faq">
    <h2 id="ipmi-faq">{esc(u['faq_h'])}</h2>
{faq}
  </section>
  <section class="ipmi-related" aria-labelledby="ipmi-rel">
    <h2 id="ipmi-rel">{esc(u['others'])}</h2>
    <ul>
      <li><a href="{URLS[lang]}">{esc(u['main_link'])}</a></li>{sib}{rel}
    </ul>
  </section>
</div>
</article>
</main>"""
    a, b = out.index('<main id="main">'), out.index("</main>") + len("</main>")
    out = out[:a] + main + out[b:]
    write(page + "index.html", out)
    return page


def link_block(lang):
    p = URLS[lang] + "index.html"
    s = read(p)
    s = re.sub(r'  <!-- AR-TRAVEL-LANDINGS -->.*?<!-- /AR-TRAVEL-LANDINGS -->\n', "", s, flags=re.S)
    items = "".join(f'<li><a href="{url_of(lang, k)}">{esc(P[lang][k]["eyebrow"])}</a></li>' for k, _, _ in PAIRS)
    block = (f'  <!-- AR-TRAVEL-LANDINGS -->\n  <section class="ipmi-sec" aria-labelledby="tq-trips">\n'
             f'    <h2 id="tq-trips">{esc(UI[lang]["others"])}</h2>\n    <ul>{items}</ul>\n  </section>\n  <!-- /AR-TRAVEL-LANDINGS -->\n')
    anchor = '  <section class="ipmi-sec" aria-labelledby="tq-s2">'
    if anchor not in s:
        raise ValueError("anchor not found in " + p)
    write(p, s.replace(anchor, block + anchor, 1))


def sitemap():
    p = "sitemap-pages.xml"
    s = read(p)
    for key, _, _ in PAIRS:
        if SITE + url_of("en", key) + "</loc>" in s:
            continue
        alts = "".join(f'    <xhtml:link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{url_of(l, key)}" />\n' for l in LANGS)
        alts += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{url_of("en", key)}" />\n'
        block = "".join(f"  <url>\n    <loc>{SITE}{url_of(l, key)}</loc>\n{alts}    <lastmod>{DATE}</lastmod>\n"
                        f"    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n" for l in LANGS)
        s = s.replace("</urlset>", block + "</urlset>", 1)
    write(p, s)


if __name__ == "__main__":
    for lang in LANGS:
        for key, _, _ in PAIRS:
            print("ok", build(lang, key))
        link_block(lang)
    sitemap()
