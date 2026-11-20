#!/usr/bin/env python3
"""Builds the APRIL International short-stay pages (stays under 12 months),
one per site language, inside the international health insurance cluster
(November 2026).

Each page is cloned from that language's APRIL International page, so nav,
footer, form, styles and scripts stay identical; head metadata, hreflang,
JSON-LD, breadcrumb and the <main> content are replaced. Copy lives in
scripts/april_short_stay_content.py. The quote buttons point at /go/april-temp
(netlify.toml), APRIL's MyTempoCover tool with intermediary reference I97537.

Also links the new pages from each language's APRIL page and IPMI hub, and
adds them to sitemap-pages.xml. Idempotent: safe to rerun.

Usage: python3 scripts/build-april-short-stay-pages.py
"""
import html, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from april_short_stay_content import C, CLUSTERS, SLUGS, DOM, HREFLANG  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public")
SITE = "https://adlerrochefort.com"
SIM = "/go/april-temp"
DATE = "2026-11-20"
LANGS = ["pt", "en", "de", "es", "nl", "fr", "it", "pl", "se", "dk", "il", "zh"]


def esc(s):
    return html.escape(s, quote=True)


def page_url(lang):
    return CLUSTERS[lang] + SLUGS[lang] + "/"


def links(lang):
    c = CLUSTERS[lang]
    return dict(hub=c, myhealth=c + "april-international/", allianz=c + "allianz-care/",
                cigna=c + "cigna-global/", dom=c + DOM[lang] + "/", page=page_url(lang))


def read(p):
    with open(os.path.join(ROOT, p.lstrip("/")), encoding="utf-8") as f:
        return f.read()


def write(p, s):
    full = os.path.join(ROOT, p.lstrip("/"))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(s)


def balanced_div(src, start_marker):
    """Return the full <div ...>...</div> starting at start_marker."""
    i = src.index(start_marker)
    depth, j = 0, i
    tag = re.compile(r"<(/?)div\b[^>]*>")
    for m in tag.finditer(src, i):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return src[i:m.end()]
    raise ValueError("unbalanced div at " + start_marker)


def sub1(pattern, repl, s, flags=0):
    new, n = re.subn(pattern, lambda m: repl, s, count=1, flags=flags)
    if n != 1:
        raise ValueError("pattern not found: " + pattern[:60])
    return new


def build(lang):
    t = C[lang]
    L = links(lang)
    tpl_path = CLUSTERS[lang] + "april-international/index.html"
    src = read(tpl_path)

    # breadcrumb names from the template's JSON-LD
    ld_m = re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S)
    ld = json.loads(ld_m.group(1))
    crumbs = next(g for g in ld["@graph"] if g["@type"] == "BreadcrumbList")["itemListElement"]
    home_name, home_url = crumbs[0]["name"], crumbs[0]["item"]
    hub_name = crumbs[1]["name"]

    # pieces reused from the template (already localised)
    author = balanced_div(src, '<div class="ipmi-author">')
    form = balanced_div(src, '<div class="ar-cv ar-cta-form-wrap" id="ipmi-pedido">')
    rel_m = re.search(r'<section class="ipmi-related"[^>]*>\s*<h2 id="ipmi-rel">(.*?)</h2>\s*<ul>(.*?)</ul>', src, re.S)
    rel_h, rel_items = rel_m.group(1), rel_m.group(2).rstrip()

    # 1. every language URL of the APRIL page -> the short-stay URL
    out = src
    for l2 in LANGS:
        out = out.replace(CLUSTERS[l2] + "april-international/", page_url(l2))

    # 2. head metadata
    title, desc = esc(t["title"]), esc(t["desc"])
    out = sub1(r"<title>.*?</title>", f"<title>{title}</title>", out, re.S)
    out = sub1(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', out)
    out = sub1(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">', out)
    out = sub1(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{desc}">', out)
    out = sub1(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{title}">', out)
    out = sub1(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{desc}">', out)

    # 3. JSON-LD
    url = SITE + page_url(lang)
    graph = {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": t["title"],
             "description": t["desc"], "inLanguage": HREFLANG[lang], "dateModified": DATE,
             "about": {"@type": "Thing", "name": "Short-term international health insurance"},
             "author": {"@type": "Person", "name": "Hugo Gonçalves", "jobTitle": "Founder & Risk Management Specialist",
                        "worksFor": {"@id": SITE + "/#organization"}},
             "publisher": {"@id": SITE + "/#organization"}},
            {"@type": "InsuranceAgency", "@id": SITE + "/#organization", "name": "Adler & Rochefort",
             "legalName": "Ownizo, Unipessoal Lda.", "url": SITE + "/", "telephone": "+351928226570",
             "email": "insurance@adlerrochefort.com", "areaServed": "Worldwide"},
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": home_name, "item": home_url},
                {"@type": "ListItem", "position": 2, "name": hub_name, "item": SITE + CLUSTERS[lang]},
                {"@type": "ListItem", "position": 3, "name": t["crumb"], "item": url}]},
            {"@type": "FAQPage", "mainEntity": [
                {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in t["faq"]]},
        ],
    }
    ld_new = '<script type="application/ld+json">\n' + json.dumps(graph, ensure_ascii=False, indent=1) + "\n</script>"
    out = out[:out.index('<script type="application/ld+json">')] + ld_new + \
        out[out.index("</script>", out.index('<script type="application/ld+json">')) + len("</script>"):]

    # 4. breadcrumb label
    out, n = re.subn(
        r'(<nav class="breadcrumb"[^>]*>.*?<a href="' + re.escape(page_url(lang)) + r'">)APRIL International(</a></nav>)',
        lambda m: m.group(1) + esc(t["crumb"]) + m.group(2), out, count=1, flags=re.S)
    if not n:  # list-style breadcrumb
        out, n = re.subn(r'(<nav class="breadcrumb".*?<span aria-current="page">)APRIL International(</span>)',
                         lambda m: m.group(1) + esc(t["crumb"]) + m.group(2), out, count=1, flags=re.S)
    assert n == 1 or 'class="breadcrumb"' not in src, lang + ": breadcrumb"

    # 5. form: own heading, lead and tracking values
    form_new = form
    for l2 in LANGS:
        form_new = form_new.replace(CLUSTERS[l2] + "april-international/", page_url(l2))
    form_new = sub1(r"<h2>.*?</h2>", f"<h2>{esc(t['form_h'])}</h2>", form_new, re.S)
    form_new = sub1(r'<p class="ar-cta-form-lead">.*?</p>', f'<p class="ar-cta-form-lead">{esc(t["form_lead"])}</p>', form_new, re.S)
    form_new = sub1(r'name="source" value="[^"]*"', 'name="source" value="page:april-short-stay"', form_new)
    form_new = sub1(r'name="product_interest" value="[^"]*"',
                    'name="product_interest" value="Short-term international health insurance (under 12 months)"', form_new)

    # 6. main content
    f = lambda s: s.format(**L)  # noqa: E731
    facts = "".join(f"<li>{esc(x)}</li>" for x in t["facts"])
    sim_list = "".join(f"<li>{esc(x)}</li>" for x in t["sim_list"])
    th = "".join(f"<th>{esc(x)}</th>" for x in t["s1_th"])
    rows = "".join("<tr>" + "".join(f"<td>{esc(c)}</td>" for c in r) + "</tr>" for r in t["s1_rows"])
    s2 = "".join(f"<li>{x}</li>" for x in t["s2_list"])
    s3 = "".join(f"<li>{esc(x)}</li>" for x in t["s3_list"])
    s5 = "".join(f"<li>{esc(x)}</li>" for x in t["s5_list"])
    faq = "\n".join(f"      <details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in t["faq"])
    sim_attr = 'target="_blank" rel="sponsored nofollow noopener"'
    main = f"""<main id="main">
<!-- ar-ipmi-intl --><!-- april-short-stay -->
<article class="ipmi-x">
<div class="ipmi-wrap">
  <header class="ipmi-hero">
    <span class="ipmi-eyebrow">{esc(t['eyebrow'])}</span>
    <h1>{esc(t['h1'])}</h1>
    <p class="ipmi-lead">{esc(t['lead'])}</p>
    <p class="ipmi-meta">{esc(t['meta'])}</p>
    <a class="ipmi-btn-sim" href="{SIM}" {sim_attr} data-ar-sim="april_temp:hero">{esc(t['btn_sim'])}<span aria-hidden="true"> &#8599;</span></a>
    <a class="ipmi-btn" href="#ipmi-pedido">{esc(t['btn_quote'])}</a>
  </header>
  {author}
  <section class="ipmi-facts" aria-labelledby="ipmi-facts">
    <h2 id="ipmi-facts">{esc(t['facts_h'])}</h2>
    <ul>{facts}</ul>
  </section>
  <section class="ipmi-sim" id="simulador-april" aria-labelledby="ipmi-sim-h">
    <h2 id="ipmi-sim-h">{esc(t['sim_h'])}</h2>
    <p>{esc(t['sim_p'])}</p>
    <ul>{sim_list}</ul>
    <a class="ipmi-sim-btn" href="{SIM}" {sim_attr} data-ar-sim="april_temp:card">{esc(t['sim_btn'])}<span aria-hidden="true"> &#8599;</span></a>
    <p class="ipmi-sim-small">{esc(t['sim_small'])}</p>
  </section>
  <section class="ipmi-sec" aria-labelledby="ipmi-s1">
    <h2 id="ipmi-s1">{esc(t['s1_h'])}</h2>
    <p>{esc(t['s1_p'])}</p>
    <div class="ipmi-table"><table><thead><tr>{th}</tr></thead><tbody>{rows}</tbody></table></div>
  </section>
  <section class="ipmi-sec" aria-labelledby="ipmi-s2">
    <h2 id="ipmi-s2">{esc(t['s2_h'])}</h2>
    <p>{esc(t['s2_p'])}</p>
    <ul>{s2}</ul>
    <p class="ipmi-small">{esc(t['s2_note'])}</p>
  </section>
  <section class="ipmi-sec" aria-labelledby="ipmi-s3">
    <h2 id="ipmi-s3">{esc(t['s3_h'])}</h2>
    <p>{esc(t['s3_p'])}</p>
    <ul>{s3}</ul>
    <p>{f(t['s3_p2'])}</p>
  </section>
  <section class="ipmi-sec" aria-labelledby="ipmi-s4">
    <h2 id="ipmi-s4">{esc(t['s4_h'])}</h2>
    <p>{esc(t['s4_p'])}</p>
  </section>
  <section class="ipmi-sec" aria-labelledby="ipmi-s5">
    <h2 id="ipmi-s5">{esc(t['s5_h'])}</h2>
    <ol>{s5}</ol>
    <p><a class="ipmi-btn-sim" href="{SIM}" {sim_attr} data-ar-sim="april_temp:steps">{esc(t['btn_sim'])}<span aria-hidden="true"> &#8599;</span></a></p>
  </section>
  <div class="ipmi-formbox">
{form_new}
  </div>
  <section class="ipmi-faq" aria-labelledby="ipmi-faq">
    <h2 id="ipmi-faq">{esc(t['faq_h'])}</h2>
{faq}
  </section>
  <section class="ipmi-related" aria-labelledby="ipmi-rel">
    <h2 id="ipmi-rel">{rel_h}</h2>
    <ul>
      <li><a href="{L['myhealth']}">{esc(t['rel_myhealth'])}</a></li>
      <li><a href="{L['dom']}">{esc(t['rel_dom'])}</a></li>{rel_items}
    </ul>
  </section>
</div>
</article>
</main>"""
    a, b = out.index('<main id="main">'), out.index("</main>") + len("</main>")
    out = out[:a] + main + out[b:]

    # hero CTA styles: the simulator button also used outside the hero
    css = ('<style id="april-short-stay-css">.ipmi-x .ipmi-sec .ipmi-btn-sim{display:inline-block;background:#FF6300;'
           'color:#fff;border-radius:999px;padding:12px 24px;font-weight:600;text-decoration:none}'
           '.ipmi-x .ipmi-sec .ipmi-btn-sim:hover{background:#e65800}.ipmi-x .ipmi-hero .ipmi-btn-sim{margin:0 10px 10px 0}'
           '[dir=rtl] .ipmi-x .ipmi-hero .ipmi-btn-sim{margin:0 0 10px 10px}</style>\n</head>')
    out = out.replace("</head>", css, 1)
    # analytics: the page's click handler sends "april_temp_quote_click"
    write(page_url(lang) + "index.html", out)
    return out


def link_from_april_page(lang):
    t, L = C[lang], links(lang)
    p = L["myhealth"] + "index.html"
    s = read(p)
    if "april-short-stay-link" in s:
        return
    note = (f'<!-- april-short-stay-link --><section class="ipmi-note" aria-labelledby="ipmi-short-h">'
            f'<h2 id="ipmi-short-h">{esc(t["note_h"])}</h2><p>{t["note_p"].format(**L)}</p></section>\n  ')
    s = s.replace("<!-- april-simulator -->", note + "<!-- april-simulator -->", 1)
    li = f'\n      <li><a href="{L["page"]}">{esc(t["hub_link"])}</a></li>'
    s = re.sub(r'(<section class="ipmi-related"[^>]*>\s*<h2 id="ipmi-rel">.*?</h2>\s*<ul>)', lambda m: m.group(1) + li, s, count=1, flags=re.S)
    assert "april-short-stay-link" in s, lang + ": april page marker"
    write(p, s)


def link_from_hub(lang):
    t, L = C[lang], links(lang)
    p = L["hub"] + "index.html"
    s = read(p)
    if f'<a href="{L["page"]}">' in s:
        return
    li = f'<li><a href="{L["page"]}">{esc(t["hub_link"])}</a></li>'
    m = re.search(r'(\s*)<li><a href="' + re.escape(L["myhealth"]) + r'">[^<]*</a></li>', s)
    if m:
        s = s[:m.end()] + m.group(1) + li + s[m.end():]
    else:
        m = re.search(r"<!-- ipmi-insurer-links --><p[^>]*>.*?</p>", s, re.S)
        assert m, lang + ": no hub insertion point"
        s = s[:m.end()] + f'\n    <p class="lp-form-micro"><a href="{L["page"]}">{esc(t["hub_link"])}</a></p>' + s[m.end():]
    write(p, s)


def sitemap():
    p = "sitemap-pages.xml"
    s = read(p)
    if page_url("en") in s:
        return
    alts = "".join(f'    <xhtml:link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{page_url(l)}" />\n' for l in LANGS)
    alts += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{page_url("en")}" />\n'
    block = "".join(f"  <url>\n    <loc>{SITE}{page_url(l)}</loc>\n{alts}    <lastmod>{DATE}</lastmod>\n"
                    f"    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n" for l in LANGS)
    s = s.replace("</urlset>", block + "</urlset>", 1)
    write(p, s)


if __name__ == "__main__":
    for lang in LANGS:
        build(lang)
        link_from_april_page(lang)
        link_from_hub(lang)
        print("ok", page_url(lang))
    sitemap()
