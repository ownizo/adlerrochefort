#!/usr/bin/env python3
"""Builds the travel insurance comparison landing pages and guides, every
site language (first version EN/DE 21 Nov 2026; all languages 25 Nov 2026).

Each page is cloned from the main travel page of its language (same nav,
footer, styles, quote tool and i18n), with head metadata, hreflang (every
language that has the same page key), JSON-LD, breadcrumb and <main>
replaced. The quote tool is preset with data-dest / data-intent /
data-sports / data-residence. Also adds a "compare by trip" and a "guides"
block to each main page, and the URLs to sitemap-pages.xml and llms.txt.
Idempotent.

Content:
  scripts/travel_landings_content.py   EN + DE: usa, annual, ski, cruise
  scripts/travel_landings_more_*.py    every language: the other trip types
                                        (nomad, longstay, cancel, group, study)
                                        and the guides (kind="guide")
Content rules (owner decisions): comparison service only, no mediation and
no advice on these policies; no insurer-specific wording claims; no fixed
response times; no offer of calls; protection first, not price.

Run after scripts/build-travel-insurance-pages.py.
Usage: python3 scripts/build-travel-landings.py
"""
import glob, html, importlib, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import travel_landings_content as base  # noqa: E402
from travel_content import C as C1, URLS  # noqa: E402
from travel_content_2 import C as C2  # noqa: E402
from travel_content_3 import C as C3  # noqa: E402
from travel_content_4 import apply as reposition  # noqa: E402

C = reposition({**C1, **C2, **C3})
ROOT = os.path.join(HERE, "..", "public")
SITE = "https://adlerrochefort.com"
DATE = "2026-11-25"
LANG_ORDER = ["en", "de", "pt", "es", "fr", "nl", "it", "pl", "se", "dk", "il", "zh"]
LOCALE = {"pt": "pt-PT", "en": "en-GB", "de": "de-DE", "es": "es-ES", "nl": "nl-NL", "fr": "fr-FR", "it": "it-IT",
          "pl": "pl-PL", "se": "sv-SE", "dk": "da-DK", "il": "he-IL", "zh": "zh-CN"}
HREFLANG = {"en": "en-GB", "de": "de", "pt": "pt-PT", "es": "es", "fr": "fr", "nl": "nl", "it": "it", "pl": "pl",
            "se": "sv", "dk": "da", "il": "he", "zh": "zh"}

# ---- merge content: P[lang][key] = page dict (with slug, kind), UI[lang]
P, UI = {}, {}
for lang in ("en", "de"):
    for key, en_slug, de_slug in base.PAIRS:
        d = dict(base.P[lang][key])
        d.setdefault("slug", en_slug if lang == "en" else de_slug)
        d.setdefault("kind", "trip")
        P.setdefault(lang, {})[key] = d
    UI[lang] = dict(base.UI[lang])
for f in sorted(glob.glob(os.path.join(HERE, "travel_landings_more_*.py"))):
    m = importlib.import_module(os.path.basename(f)[:-3])
    for lang, pages in m.P.items():
        for key, d in pages.items():
            d = dict(d)
            d.setdefault("kind", "trip")
            P.setdefault(lang, {})[key] = d
    for lang, u in getattr(m, "UI", {}).items():
        UI.setdefault(lang, {}).update(u)
for lang in P:
    UI[lang].setdefault("guides", UI[lang]["others"])

KEY_ORDER = ["usa", "annual", "ski", "cruise", "nomad", "longstay", "cancel", "group", "study"]


def keys_of(lang, kind):
    ks = [k for k in P[lang] if P[lang][k]["kind"] == kind]
    return sorted(ks, key=lambda k: (KEY_ORDER.index(k) if k in KEY_ORDER else 99, k))


def langs_with(key):
    return [l for l in LANG_ORDER if l in P and key in P[l]]


def esc(s):
    return html.escape(s, quote=True)


def url_of(lang, key):
    return URLS[lang] + P[lang][key]["slug"] + "/"


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
                     (r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{desc}">')]:
        out = sub1(pat, val, out)
    out = re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">', out, count=1)
    out = re.sub(r'<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?', "", out)
    ls = langs_with(key)
    alts = "".join(f'<link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{url_of(l, key)}">\n' for l in ls)
    xdef = "en" if "en" in ls else ls[0]
    alts += f'<link rel="alternate" hreflang="x-default" href="{SITE}{url_of(xdef, key)}">'
    out = sub1(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">\n{alts}', out)

    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S).group(1))
    crumbs = next(g for g in ld["@graph"] if g["@type"] == "BreadcrumbList")["itemListElement"]
    home_name, home_url = crumbs[0]["name"], crumbs[0]["item"]
    is_guide = d["kind"] == "guide"
    graph = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article" if is_guide else "WebPage", "@id": url + "#webpage", "url": url,
         ("headline" if is_guide else "name"): d["h1"] if is_guide else d["title"], "description": d["desc"],
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
    pre = d.get("preset", {})
    attrs = f' data-dest="{pre["dest"]}"' if pre.get("dest") else ""
    attrs += f' data-intent="{pre["intent"]}"' if pre.get("intent") else ""
    attrs += ' data-sports="1"' if pre.get("sports") else ""
    residence = pre.get("residence") or re.search(r'<div id="ar-tq"[^>]*data-residence="([A-Z]{2})"', src).group(1)
    secs = "\n".join(f'  <section class="ipmi-sec" aria-labelledby="tl-s{i}">\n    <h2 id="tl-s{i}">{esc(h)}</h2>\n    {body}\n  </section>'
                     for i, (h, body) in enumerate(d["sections"], 1))
    faq = "\n".join(f"      <details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in d["faq"])
    sib = "".join(f'<li><a href="{url_of(lang, k)}">{esc(P[lang][k]["eyebrow"])}</a></li>'
                  for k in keys_of(lang, "trip") if k != key)
    rel = "".join(f'<li><a href="{h}">{esc(x)}</a></li>' for h, x in d.get("related", []))
    tool = f"""  <section class="tq-box" id="tq" aria-labelledby="tq-h">
    <h2 id="tq-h">{esc(u['tool_h'])}</h2>
    <p>{esc(u['tool_p'])}</p>
    <div id="ar-tq" data-lang="{lang}" data-locale="{LOCALE[lang]}" data-residence="{residence}"{attrs}></div>
    <noscript><p><a href="#ipmi-pedido">{esc(t['btn_advice'])}</a></p></noscript>
  </section>"""
    # landings: tool right after the hero; guides: tool after the first section
    if is_guide:
        parts = secs.split("\n  <section", 1)
        body = parts[0] + "\n" + tool + ("\n  <section" + parts[1] if len(parts) > 1 else "")
    else:
        body = tool + "\n" + secs
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
{body}
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
    li = lambda ks: "".join(f'<li><a href="{url_of(lang, k)}">{esc(P[lang][k]["eyebrow"])}</a></li>' for k in ks)  # noqa: E731
    block = (f'  <!-- AR-TRAVEL-LANDINGS -->\n  <section class="ipmi-sec" aria-labelledby="tq-trips">\n'
             f'    <h2 id="tq-trips">{esc(UI[lang]["others"])}</h2>\n    <ul>{li(keys_of(lang, "trip"))}</ul>\n  </section>\n')
    guides = keys_of(lang, "guide")
    if guides:
        block += (f'  <section class="ipmi-sec" aria-labelledby="tq-guides">\n'
                  f'    <h2 id="tq-guides">{esc(UI[lang]["guides"])}</h2>\n    <ul>{li(guides)}</ul>\n  </section>\n')
    block += '  <!-- /AR-TRAVEL-LANDINGS -->\n'
    anchor = '  <section class="ipmi-sec" aria-labelledby="tq-s2">'
    if anchor not in s:
        raise ValueError("anchor not found in " + p)
    write(p, s.replace(anchor, block + anchor, 1))


def sitemap(pages):
    p = "sitemap-pages.xml"
    s = read(p)
    for lang, key in pages:  # drop old entries of these URLs, then add fresh ones
        loc = re.escape(SITE + url_of(lang, key))
        s = re.sub(r"  <url>\n    <loc>" + loc + r"</loc>\n.*?</url>\n", "", s, flags=re.S)
    block = ""
    for lang, key in pages:
        ls = langs_with(key)
        alts = "".join(f'    <xhtml:link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{url_of(l, key)}" />\n' for l in ls)
        xdef = "en" if "en" in ls else ls[0]
        alts += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{url_of(xdef, key)}" />\n'
        prio = "0.7" if P[lang][key]["kind"] == "guide" else "0.8"
        block += (f"  <url>\n    <loc>{SITE}{url_of(lang, key)}</loc>\n{alts}    <lastmod>{DATE}</lastmod>\n"
                  f"    <changefreq>weekly</changefreq>\n    <priority>{prio}</priority>\n  </url>\n")
    write(p, s.replace("</urlset>", block + "</urlset>", 1))


def llms():
    p = "llms.txt"
    s = read(p)
    s = re.sub(r"- Travel insurance comparison by trip and guides \(all languages\):[^\n]*\n", "", s)
    trips = " · ".join(f"[{P['en'][k]['eyebrow']}]({SITE}{url_of('en', k)})" for k in keys_of("en", "trip"))
    guides = " · ".join(f"[{P['en'][k]['eyebrow']}]({SITE}{url_of('en', k)})" for k in keys_of("en", "guide"))
    n = sum(len(P[l]) for l in P)
    line = (f"- Travel insurance comparison by trip and guides (all languages): {trips}. Guides: {guides}. "
            f"{n} pages in {len(P)} languages, each with the live comparison preset for that trip; "
            "comparison service only, policies sold by HelloSafe.\n")
    anchor = "- [Premium travel insurance comparison]"
    i = s.index(anchor)
    j = s.index("\n", i) + 1
    s = s[:j] + line + s[j:]
    s = s.replace("Landing pages: USA, annual multi-trip, ski, cruise (EN and DE).",
                  "Landing pages by trip and guides in every language (see next line).")
    write(p, s)


if __name__ == "__main__":
    built = []
    for lang in LANG_ORDER:
        if lang not in P:
            continue
        for key in P[lang]:
            build(lang, key)
            built.append((lang, key))
        link_block(lang)
        print("ok", lang, len(P[lang]))
    sitemap(built)
    llms()
    print("total", len(built))
