#!/usr/bin/env python3
"""Builds the online travel insurance pages (quote & buy via HelloSafe Atlas),
one per site language (November 2026).

Each page is cloned from that language's short-term-stays page (same nav,
footer, styles and scripts); head metadata, hreflang, JSON-LD, breadcrumb and
<main> are replaced. Copy: scripts/travel_content*.py. The quote tool is
public/js/ar-travel-quote.js, served by netlify/functions/travel-quote.mjs.

Also links each page from that language's short-stay page and IPMI hub, and
adds the pages to sitemap-pages.xml and llms.txt. Idempotent.

Usage: python3 scripts/build-travel-insurance-pages.py
"""
import html, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from travel_content import C as C1, URLS, RESIDENCE  # noqa: E402
from travel_content_2 import C as C2  # noqa: E402
from travel_content_3 import C as C3  # noqa: E402
from april_short_stay_content import CLUSTERS, SLUGS, DOM, HREFLANG  # noqa: E402

C = {**C1, **C2, **C3}
ROOT = os.path.join(HERE, "..", "public")
SITE = "https://adlerrochefort.com"
DATE = "2026-11-20"
LANGS = ["pt", "en", "de", "es", "nl", "fr", "it", "pl", "se", "dk", "il", "zh"]
LOCALE = {"pt": "pt-PT", "en": "en-GB", "de": "de-DE", "es": "es-ES", "nl": "nl-NL", "fr": "fr-FR", "it": "it-IT",
          "pl": "pl-PL", "se": "sv-SE", "dk": "da-DK", "il": "he-IL", "zh": "zh-CN"}
# guarantee slugs (as published by Atlas, aliases included) -> copy key
G_SLUGS = {"med": ["hospitalFeesAbroad", "expatMedicalFees", "expatHospitalFees"],
           "rep": ["repatriationAssistance", "rapatriationAssistance", "expatRepatriation"],
           "cancel": ["cancelTrip"], "liab": ["privateRC", "privateLiability", "expatCivilLiability"],
           "bag": ["suitcaseInsurance"], "assist": ["assistance247"]}


def esc(s):
    return html.escape(s, quote=True)


def short_url(lang):
    return CLUSTERS[lang] + SLUGS[lang] + "/"


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


CSS = """<style id="ar-travel-css">
.tq-box{background:#fff;border:1px solid var(--line,#EBE9E8);border-radius:20px;padding:24px;margin:8px 0 28px;box-shadow:0 10px 30px rgba(41,41,41,.06)}
.tq-box h2{margin-top:0}
.tq-box>p{margin:6px 0 18px;line-height:1.6}
.tq-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 18px}
.tq-wide{grid-column:1/-1}
.tq-field{display:flex;flex-direction:column;gap:6px;min-width:0}
.tq-field label,.tq-lab{font-size:13px;font-weight:600;color:#292929}
.tq-field input,.tq-field select{font:inherit;font-size:15px;padding:11px 12px;border:1px solid #D9D6D4;border-radius:12px;background:#fff;color:#292929;min-width:0}
.tq-field input:focus,.tq-field select:focus{outline:2px solid #FF6300;outline-offset:1px;border-color:#FF6300}
.tq-dim input{background:#F6F5F4;color:#666}
.tq-ages{display:flex;flex-wrap:wrap;gap:8px}.tq-ages input{width:84px}
.tq-checks{flex-direction:row;flex-wrap:wrap;gap:10px 22px}
.tq-check{display:flex;align-items:center;gap:8px;font-weight:500!important;cursor:pointer}
.tq-check input{width:18px;height:18px;accent-color:#FF6300}
.tq-hide{display:none!important}
.tq-chips{display:flex;flex-wrap:wrap;gap:8px;min-height:4px}
.tq-chip{border:1px solid #292929;background:#292929;color:#fff;border-radius:999px;padding:6px 12px;font-size:13px;cursor:pointer}
.tq-link{background:none;border:0;padding:2px 0;color:#FF6300;font-weight:600;font-size:13px;cursor:pointer;text-align:start}
.tq-submit,.tq-btn{display:inline-block;background:#FF6300;color:#fff!important;border:0;border-radius:999px;padding:14px 28px;font:inherit;font-weight:600;font-size:15px;text-decoration:none;cursor:pointer;margin-top:18px}
.tq-submit:hover,.tq-btn:hover{background:#e65800}.tq-submit[disabled],.tq-btn[disabled]{opacity:.6;cursor:wait}
.tq-msg{margin:12px 0 0;font-size:14px;color:#555}.tq-err{color:#B42318}
.tq-results:focus{outline:none}
.tq-rhead{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:26px 0 12px}
.tq-rhead h3{margin:0;font-size:20px}.tq-rhead select{font:inherit;padding:9px 12px;border-radius:12px;border:1px solid #D9D6D4}
.tq-card{border:1px solid #EBE9E8;border-radius:18px;padding:18px 20px;margin:0 0 14px;background:#FCFBFA}
.tq-ctop{display:flex;gap:14px;align-items:center}
.tq-ctop img{width:48px;height:48px;border-radius:12px;background:#fff;flex:0 0 48px;object-fit:contain}
.tq-ctop>div:nth-child(2){flex:1;min-width:0}.tq-ctop h4{margin:0;font-size:17px}
.tq-ins{margin:2px 0 0;font-size:13px;color:#666}
.tq-price{text-align:end}.tq-price strong{display:block;font-size:22px;color:#292929}.tq-price span{font-size:12px;color:#666}
.tq-gt{width:100%;border-collapse:collapse;margin:14px 0 6px;font-size:14px}
.tq-gt th{text-align:start;font-weight:500;color:#444;padding:7px 0;border-top:1px solid #EFEDEB;width:55%}
.tq-gt td{text-align:end;font-weight:600;padding:7px 0;border-top:1px solid #EFEDEB}
.tq-gt td small{display:block;font-weight:400;font-size:12px;color:#777;margin-top:2px}
.tq-gt tr.tq-no td{color:#999;font-weight:500}
.tq-hl ul{margin:8px 0;padding-inline-start:18px;font-size:13.5px;line-height:1.55}.tq-hl ul.tq-ex{color:#777}
.tq-docs{display:flex;gap:16px;flex-wrap:wrap;font-size:13px;margin:8px 0 0}.tq-docs a{color:#292929}
.tq-buy{margin-top:12px}
.tq-disc,.tq-sandbox{font-size:12.5px;color:#666;line-height:1.6;margin:14px 0 0}
.tq-sandbox{background:#FFF4E5;color:#8A4B00;border-radius:12px;padding:10px 14px;font-weight:600}
.tq-notlive{background:#F6F5F4;border-radius:16px;padding:18px 20px;margin-top:20px}.tq-notlive p{margin:0}
.ipmi-x .ipmi-sec ol{padding-inline-start:20px}.ipmi-x .ipmi-sec ol li{margin:0 0 8px;line-height:1.6}
.tq-form-ta{font:inherit;font-size:15px;padding:11px 12px;border:1px solid #D9D6D4;border-radius:12px;width:100%;min-height:110px;box-sizing:border-box}
@media(max-width:700px){.tq-grid{grid-template-columns:1fr}.tq-box{padding:18px}.tq-ctop{flex-wrap:wrap}.tq-price{text-align:start;width:100%}}
</style>
</head>"""


def form_block(lang, t, src):
    """Short written-advice form, built from the template form's localised parts."""
    tf = balanced_div(src, '<div class="ar-cv ar-cta-form-wrap" id="ipmi-pedido">')
    hidden = re.search(r'<input type="hidden" name="utm_source".*?>(?:<input type="hidden"[^>]*>)*', tf).group(0)
    name_f = re.search(r'<div class="ar-field"><label for="ihq-name">.*?</div>', tf, re.S).group(0)
    contact = re.search(r'<div class="ar-row">\s*<div class="ar-field"><label for="ihq-email">.*?</div>\s*</div>', tf, re.S).group(0)
    button = re.search(r'<button type="submit"[^>]*>.*?</button>', tf, re.S).group(0)
    small = re.findall(r'<p class="ar-form-smallprint">.*?</p>', tf, re.S)[-1]
    success = balanced_div(tf, '<div class="ar-cta-form-success">')
    honeypot = re.search(r'<p style="display:none">.*?</p>', tf, re.S).group(0)
    trust = "".join(f'<span class="ar-trust-item">{esc(x)}</span>' for x in t["trust"])
    url = URLS[lang]
    return f"""<div class="ar-cv ar-cta-form-wrap" id="ipmi-pedido">
  <h2>{esc(t['form_h'])}</h2>
  <p class="ar-cta-form-lead">{esc(t['form_lead'])}</p>
  <form class="ar-cta-form" name="travel-insurance-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-endpoint="{url}" data-form-label="travel_insurance_quote">
    <input type="hidden" name="form-name" value="travel-insurance-quote">{hidden}
    <input type="hidden" name="source_url" value="">
    <input type="hidden" name="source" value="page:travel-insurance">
    <input type="hidden" name="language" value="{lang}">
    <input type="hidden" name="product_interest" value="Travel insurance">
    {honeypot}
    {name_f}
    {contact}
    <div class="ar-field"><label for="tqf-msg">{esc(t['msg_label'])} *</label><textarea id="tqf-msg" class="tq-form-ta" name="message" required placeholder="{esc(t['msg_ph'])}"></textarea></div>
    {button}
    {small}
  </form>
  <div class="ar-trust-strip">{trust}</div>
  {success}
</div>"""


def ui_json(lang, t):
    ui = json.loads(json.dumps(t["ui"]))
    g = {}
    for key, slugs in G_SLUGS.items():
        for s in slugs:
            g[s] = ui["g"][key]
    ui["g"] = g
    return json.dumps(ui, ensure_ascii=False).replace("</", "<\\/")


def build(lang):
    t = C[lang]
    url, page = SITE + URLS[lang], URLS[lang]
    src = read(short_url(lang) + "index.html")
    L = dict(short=short_url(lang), ipmi=CLUSTERS[lang], dom=CLUSTERS[lang] + DOM[lang] + "/")

    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S).group(1))
    crumbs = next(g for g in ld["@graph"] if g["@type"] == "BreadcrumbList")["itemListElement"]
    home_name, home_url = crumbs[0]["name"], crumbs[0]["item"]

    out = src
    for l2 in LANGS:  # every language URL of the template -> the travel page
        out = out.replace(short_url(l2), URLS[l2])

    title, desc = esc(t["title"]), esc(t["desc"])
    out = sub1(r"<title>.*?</title>", f"<title>{title}</title>", out, re.S)
    out = sub1(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', out)
    out = sub1(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">', out)
    out = sub1(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{desc}">', out)
    out = sub1(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{title}">', out)
    out = sub1(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{desc}">', out)

    graph = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": t["title"], "description": t["desc"],
         "inLanguage": HREFLANG[lang], "dateModified": DATE, "about": {"@id": url + "#service"},
         "author": {"@type": "Person", "name": "Hugo Gonçalves", "jobTitle": "Founder & Risk Management Specialist",
                    "worksFor": {"@id": SITE + "/#organization"}},
         "publisher": {"@id": SITE + "/#organization"}},
        {"@type": "Service", "@id": url + "#service", "name": t["crumb"], "serviceType": "Travel insurance",
         "description": t["desc"], "provider": {"@id": SITE + "/#organization"}, "areaServed": "Worldwide",
         "availableChannel": {"@type": "ServiceChannel", "serviceUrl": url}},
        {"@type": "InsuranceAgency", "@id": SITE + "/#organization", "name": "Adler & Rochefort",
         "legalName": "Ownizo, Unipessoal Lda.", "url": SITE + "/", "telephone": "+351928226570",
         "email": "insurance@adlerrochefort.com", "areaServed": "Worldwide"},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": home_name, "item": home_url},
            {"@type": "ListItem", "position": 2, "name": t["crumb"], "item": url}]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in t["faq"]]},
    ]}
    ld_new = '<script type="application/ld+json">\n' + json.dumps(graph, ensure_ascii=False, indent=1) + "\n</script>"
    a = out.index('<script type="application/ld+json">')
    out = out[:a] + ld_new + out[out.index("</script>", a) + len("</script>"):]

    # breadcrumb: Home > Travel insurance
    nav = re.search(r'<nav (class="breadcrumb[^"]*"[^>]*)>.*?</nav>', out, re.S)
    if nav:
        out = out[:nav.start()] + (f'<nav {nav.group(1)}><a href="{esc(home_url.replace(SITE, ""))}">{esc(home_name)}</a>'
                                   f'<span>&rsaquo;</span><a href="{page}">{esc(t["crumb"])}</a></nav>') + out[nav.end():]
    # top bar link
    out = re.sub(r'(<div class="asf-top-bar">.*?<a href=")#ipmi-pedido(">).*?(</a>)',
               lambda m: m.group(1) + "#tq" + m.group(2) + esc(t["bar"]) + m.group(3), out, count=1, flags=re.S)

    author = balanced_div(src, '<div class="ipmi-author">')
    f = lambda s: s.format(**L)  # noqa: E731
    li = lambda xs: "".join(f"<li>{f(x)}</li>" for x in xs)  # noqa: E731
    facts = "".join(f"<li>{esc(x)}</li>" for x in t["facts"])
    faq = "\n".join(f"      <details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in t["faq"])
    main = f"""<main id="main">
<!-- ar-travel-insurance -->
<article class="ipmi-x">
<div class="ipmi-wrap">
  <header class="ipmi-hero">
    <span class="ipmi-eyebrow">{esc(t['eyebrow'])}</span>
    <h1>{esc(t['h1'])}</h1>
    <p class="ipmi-lead">{esc(t['lead'])}</p>
    <p class="ipmi-meta">{esc(t['meta'])}</p>
    <a class="ipmi-btn-sim" href="#tq">{esc(t['btn_quote'])}</a>
    <a class="ipmi-btn" href="#ipmi-pedido">{esc(t['btn_advice'])}</a>
  </header>
  {author}
  <section class="tq-box" id="tq" aria-labelledby="tq-h">
    <h2 id="tq-h">{esc(t['tool_h'])}</h2>
    <p>{esc(t['tool_p'])}</p>
    <div id="ar-tq" data-lang="{lang}" data-locale="{LOCALE[lang]}" data-residence="{RESIDENCE[lang]}"></div>
    <noscript><p><a href="#ipmi-pedido">{esc(t['btn_advice'])}</a></p></noscript>
  </section>
  <section class="ipmi-facts" aria-labelledby="ipmi-facts">
    <h2 id="ipmi-facts">{esc(t['facts_h'])}</h2>
    <ul>{facts}</ul>
  </section>
  <section class="ipmi-sec" aria-labelledby="tq-s1">
    <h2 id="tq-s1">{esc(t['s1_h'])}</h2>
    <p>{esc(t['s1_p'])}</p>
    <ul>{li(t['s1_list'])}</ul>
  </section>
  <section class="ipmi-sec" aria-labelledby="tq-s2">
    <h2 id="tq-s2">{esc(t['s2_h'])}</h2>
    <p>{esc(t['s2_p'])}</p>
    <ul>{li(t['s2_list'])}</ul>
  </section>
  <section class="ipmi-sec" aria-labelledby="tq-s3">
    <h2 id="tq-s3">{esc(t['s3_h'])}</h2>
    <p>{esc(t['s3_p'])}</p>
    <ul>{li(t['s3_list'])}</ul>
  </section>
  <section class="ipmi-sec" aria-labelledby="tq-s4">
    <h2 id="tq-s4">{esc(t['s4_h'])}</h2>
    <ol>{"".join(f"<li>{esc(x)}</li>" for x in t['s4_list'])}</ol>
    <p><a class="ipmi-btn-sim" href="#tq">{esc(t['btn_quote'])}</a></p>
  </section>
  <section class="ipmi-sec" aria-labelledby="tq-s5">
    <h2 id="tq-s5">{esc(t['s5_h'])}</h2>
    <p>{esc(t['s5_p'])}</p>
  </section>
  <div class="ipmi-formbox">
{form_block(lang, t, src)}
  </div>
  <section class="ipmi-faq" aria-labelledby="ipmi-faq">
    <h2 id="ipmi-faq">{esc(t['faq_h'])}</h2>
{faq}
  </section>
  <section class="ipmi-related" aria-labelledby="ipmi-rel">
    <h2 id="ipmi-rel">{esc(t['rel_h'])}</h2>
    <ul>
      <li><a href="{L['short']}">{esc(t['rel_short'])}</a></li>
      <li><a href="{L['ipmi']}">{esc(t['rel_ipmi'])}</a></li>
      <li><a href="{L['dom']}">{esc(t['rel_dom'])}</a></li>
    </ul>
  </section>
</div>
</article>
</main>"""
    a, b = out.index('<main id="main">'), out.index("</main>") + len("</main>")
    out = out[:a] + main + out[b:]

    # drop the template's IPMI form helper (its fields are gone) and add ours
    out = re.sub(r'<script id="ar-ipmi-intl-js">.*?</script>\n?', "", out, count=1, flags=re.S)
    out = re.sub(r'<style id="ar-travel-css">.*?</style>\n?', "", out, flags=re.S)
    out = out.replace("</head>", CSS, 1)
    js = (f'<script type="application/json" id="ar-tq-i18n">{ui_json(lang, t)}</script>\n'
          '<script defer src="/js/ar-travel-quote.js?v=20261120"></script>\n</body>')
    out = out.replace("</body>", js, 1)
    write(page + "index.html", out)


def link_from(path, lang):
    t = C[lang]
    p = path + "index.html"
    s = read(p)
    if f'<a href="{URLS[lang]}">' in s:
        return
    item = f'\n      <li><a href="{URLS[lang]}">{esc(t["hub_link"])}</a></li>'
    s2 = re.sub(r'(<section class="ipmi-related"[^>]*>\s*<h2 id="ipmi-rel">.*?</h2>\s*<ul>)', lambda m: m.group(1) + item, s, count=1, flags=re.S)
    if s2 == s:  # hub without a related list: add after the short-stay link
        m = re.search(r'(\s*)<li><a href="' + re.escape(short_url(lang)) + r'">[^<]*</a></li>', s)
        if m:
            s2 = s[:m.end()] + m.group(1) + f'<li><a href="{URLS[lang]}">{esc(t["hub_link"])}</a></li>' + s[m.end():]
        else:
            m = re.search(r'<p class="lp-form-micro"><a href="' + re.escape(short_url(lang)) + r'">[^<]*</a></p>', s)
            if not m:
                print("  no link point in", p)
                return
            s2 = s[:m.end()] + f'\n    <p class="lp-form-micro"><a href="{URLS[lang]}">{esc(t["hub_link"])}</a></p>' + s[m.end():]
    write(p, s2)


def sitemap():
    p = "sitemap-pages.xml"
    s = read(p)
    if URLS["en"] in s:
        return
    alts = "".join(f'    <xhtml:link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{URLS[l]}" />\n' for l in LANGS)
    alts += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{URLS["en"]}" />\n'
    block = "".join(f"  <url>\n    <loc>{SITE}{URLS[l]}</loc>\n{alts}    <lastmod>{DATE}</lastmod>\n"
                    f"    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n" for l in LANGS)
    write(p, s.replace("</urlset>", block + "</urlset>", 1))


def llms():
    p = "llms.txt"
    s = read(p)
    if URLS["en"] in s:
        return
    others = " · ".join(f"[{l.upper()}]({SITE}{URLS[l]})" for l in LANGS if l != "en")
    line = (f"- [Travel insurance online, compare and buy]({SITE}{URLS['en']}): live prices from several insurers for single trips, "
            "annual multi-trip, Schengen visa applications, digital nomads, studies, au pair and cruises, ranked by medical cover; "
            "purchase completed on the secure form of HelloSafe, our distribution partner. Other languages: " + others + "\n")
    anchor = "- [Short-term international health insurance, stays under 12 months]"
    i = s.index(anchor)
    j = s.index("\n", i) + 1
    write(p, s[:j] + line + s[j:])


if __name__ == "__main__":
    for lang in LANGS:
        build(lang)
        link_from(short_url(lang), lang)
        link_from(CLUSTERS[lang], lang)
        print("ok", URLS[lang])
    sitemap()
    llms()
