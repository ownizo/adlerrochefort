"""Build the Hiscox Spain product pages (EN, DE, ES) from existing Spain pages
used as shells. Run from the repo root:  python3 scripts/build-hiscox-spain-pages.py
Content lives in scripts/hiscox-spain.data.py."""
import json, os, re, runpy

D = runpy.run_path(os.path.join(os.path.dirname(__file__), "hiscox-spain.data.py"))
PRODUCTS = D["PRODUCTS"]
SITE = "https://adlerrochefort.com"
SHELL = {"en": "public/en/home-insurance-spain/index.html",
         "de": "public/de/hausversicherung-spanien/index.html",
         "es": "public/es/seguro-hogar-espana/index.html"}
HREFLANG = {"en": "en-GB", "de": "de", "es": "es"}
HOME = {"pt": "/", "en": "/en/", "nl": "/nl/", "fr": "/fr/", "de": "/de/", "es": "/es/", "it": "/it/",
        "pl": "/pl/", "sv": "/se/", "da": "/dk/", "zh": "/zh/", "he": "/il/"}
NOTE = {"en": "home page", "de": "Startseite", "es": "página de inicio"}
L = {
 "en": {"home": "Home", "hub": ("/en/expat-insurance-spain/", "Insurance for expats in Spain"), "cta": "Request a written proposal",
        "faq": "Frequently asked questions", "guides": "Guides worth reading", "related": "Related cover",
        "ask_h": "What we will ask for your quote",
        "ask_p": "After the first contact we ask for these details by email. If you have them to hand, you can send them now to <a href=\"mailto:insurance@adlerrochefort.com\">insurance@adlerrochefort.com</a>.",
        "disc": "Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., registered with Portugal's ASF under no. 425591790/3, operating in Spain on a cross-border basis from that registration. This page is general guidance, not a statement of what any specific policy covers. Cover, limits, excesses and exclusions are set by the insurer's policy wording, which we explain in writing before you commit."},
 "de": {"home": "Startseite", "hub": ("/de/versicherung-spanien/", "Versicherungen für Expats in Spanien"), "cta": "Schriftliches Angebot anfragen",
        "faq": "Häufige Fragen", "guides": "Weiterlesen", "related": "Passende weitere Deckung",
        "ask_h": "Welche Angaben wir für Ihr Angebot benötigen",
        "ask_p": "Nach dem ersten Kontakt fragen wir diese Angaben per E-Mail an. Wenn Sie sie zur Hand haben, können Sie sie gleich an <a href=\"mailto:insurance@adlerrochefort.com\">insurance@adlerrochefort.com</a> senden.",
        "disc": "Adler &amp; Rochefort ist die Handelsmarke der Ownizo, Unipessoal Lda., bei der ASF Portugals unter Nr. 425591790/3 registriert, in Spanien im Dienstleistungsverkehr von dieser Registrierung aus tätig. Diese Seite ist eine allgemeine Orientierung; Deckung, Summen, Selbstbehalte und Ausschlüsse regelt der Wortlaut der Police, den wir vor dem Abschluss schriftlich erklären."},
 "es": {"home": "Inicio", "hub": ("/es/seguros-espana/", "España"), "cta": "Solicitar una propuesta por escrito",
        "faq": "Preguntas frecuentes", "related": "Páginas relacionadas"},
}

def esc_attr(s): return s.replace('"', "&quot;")

def strip_tags(s): return re.sub(r"<[^>]+>", "", s).replace("&mdash;", "—").replace("&amp;", "&").replace("&rsquo;", "’").replace("&iacute;", "í").replace("&oacute;", "ó")

def page_url(lang, p): return f"/{lang}/{p[lang]['slug']}/"

def head(s, lang, p, c):
    url = SITE + page_url(lang, p)
    s = re.sub(r"<title>.*?</title>", f"<title>{c['title']}</title>", s, 1, re.S)
    s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{esc_attr(c["desc"])}">', s, 1)
    s = re.sub(r'<meta name="keywords" content="[^"]*">', f'<meta name="keywords" content="{esc_attr(c["kw"])}">', s, 1)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, 1)
    s = re.sub(r'\n\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">', "", s)
    alts = "".join(f'\n  <link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{page_url(l, p)}">' for l in ("en", "de", "es"))
    alts += f'\n  <link rel="alternate" hreflang="x-default" href="{SITE}{page_url("en", p)}">'
    s = s.replace(f'<link rel="canonical" href="{url}">', f'<link rel="canonical" href="{url}">' + alts, 1)
    s = re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">', s, 1)
    for k, v in (("og:title", c["title"]), ("og:description", c["desc"])):
        s = re.sub(rf'<meta property="{k}" content="[^"]*">', f'<meta property="{k}" content="{esc_attr(v)}">', s, 1)
    for k, v in (("twitter:title", c["title"]), ("twitter:description", c["desc"])):
        s = re.sub(rf'<meta name="{k}" content="[^"]*">', f'<meta name="{k}" content="{esc_attr(v)}">', s, 1)
    # structured data: drop the shell's page-specific blocks, keep the Person graph
    hd, rest = s.split("</head>", 1)
    def keep(m): return m.group(0) if '"@type": "Person"' in m.group(0) and '"FAQPage"' not in m.group(0) and '"Service"' not in m.group(0) else ""
    hd = re.sub(r'<script type="application/ld\+json">.*?</script>\n?', keep, hd, flags=re.S)
    crumbs = [(L[lang]["home"], f"/{lang}/"), (L[lang]["hub"][1], L[lang]["hub"][0]), (c["crumb"], page_url(lang, p))]
    graph = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "@id": url + "#service", "name": strip_tags(c["h1"]), "description": strip_tags(c["desc"]),
         "url": url, "areaServed": {"@type": "Country", "name": "Spain"},
         "provider": {"@id": SITE + "/#organization"}, "brand": {"@type": "Brand", "name": "Hiscox"}},
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": strip_tags(q),
            "acceptedAnswer": {"@type": "Answer", "text": strip_tags(a)}} for q, a in c["faq"]]},
        {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": strip_tags(n), "item": SITE + h}
            for i, (n, h) in enumerate(crumbs)]}]}
    hd += '<script type="application/ld+json">' + json.dumps(graph, ensure_ascii=False) + "</script>\n"
    return hd + "</head>" + rest

def langsel(s, lang, p):
    pat = re.compile(r'<li><a href="[^"]*" lang="([^"]*)" dir="([^"]*)" hreflang="([^"]*)"(?: aria-current="true")?>(<span>[^<]*</span>)(?:<span class="ar-langsel-note">[^<]*</span>)?</a></li>')
    def rep(m):
        code = m.group(1).split("-")[0]
        if code in ("en", "de", "es"):
            cur = ' aria-current="true"' if code == lang else ""
            return f'<li><a href="{page_url(code, p)}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}"{cur}>{m.group(4)}</a></li>'
        return f'<li><a href="{HOME[code]}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}">{m.group(4)}<span class="ar-langsel-note">{NOTE[lang]}</span></a></li>'
    return pat.sub(rep, s)

def lp_main(shell, lang, p, c, key):
    t = L[lang]
    wa = re.search(r'<a href="https://wa\.me/[^"]*" target="_blank" rel="noopener" class="lp-btn-wa">(<svg.*?</svg>)([^<]*)</a>', shell, re.S)
    wa_btn = f'<a href="{D["WA"]}{c["wa"].replace(" ", "%20").replace(",", "%2C")}" target="_blank" rel="noopener" class="lp-btn-wa">{wa.group(1)}{wa.group(2)}</a>'
    author = re.search(r"<!-- AR-AUTHOR -->\n<div class=\"ar-author\">.*?</p></div></div>", shell, re.S).group(0)
    langpol = re.search(r'<div class="ar-langpolicy-band">.*?</div>', shell, re.S).group(0)
    form = re.search(r'<section class="lp-form-section" id="quote-form">.*?\n</section>', shell, re.S).group(0)
    old_slug = re.search(r'id="arqc-n-([a-z]+-[a-z0-9-]+?)-"', form).group(1)
    new_slug = f"{lang}-{c['slug']}"
    form = form.replace(old_slug, new_slug)
    form = re.sub(r"<h2>[^<]*</h2>", f"<h2>{c['form_h2']}</h2>", form, 1)
    form = re.sub(r'(</h2>\n\s*<p class="lp-form-sub">)[^<]*(</p>)', rf"\g<1>{c['form_sub']}\g<2>", form, 1)
    form = re.sub(r'(<p class="lp-form-sub" data-ins-note>)[^<]*(</p>)', rf"\g<1>{c['note']}\g<2>", form, 1)
    form = re.sub(r'name="source" value="[^"]*"', f'name="source" value="quick-contact:{lang}/{c["slug"]}"', form)
    form = re.sub(r'name="source_url" value="[^"]*"', f'name="source_url" value="{SITE}{page_url(lang, p)}"', form)
    if "tipo" in c:
        form = re.sub(r'name="tipo-seguro" value="[^"]*"', f'name="tipo-seguro" value="{c["tipo"]}"', form)
    form = re.sub(r'(<div class="arqi">\s*<h3>)[^<]*(</h3>\s*<p>).*?(</p>)', rf'\g<1>{t["ask_h"]}\g<2>{t["ask_p"]}\g<3>', form, 1, re.S)
    form = re.sub(r"<ul><li>.*?</li></ul>", "<ul>" + "".join(f"<li>{x}</li>" for x in c["ask"]) + "</ul>", form, 1, re.S)
    links = "".join(f'\n          <a href="{h}">{n}</a>' for h, n in c["related"])
    form = re.sub(r'(<div class="quoteSuccess-crosssell-links">).*?(\n        </div>)', rf"\g<1>{links}\g<2>", form, 1, re.S)
    cards = "\n".join(f'    <div class="lp-card">\n      <h2 id="s{i+1}">{h}</h2>\n      {b}\n    </div>' for i, (h, b) in enumerate(c["sections"]))
    faq = "\n".join(f'    <div class="lp-faq-item">\n      <h3>{q}</h3>\n      <p>{a}</p>\n    </div>' for q, a in c["faq"])
    guides = ""
    if c.get("guides"):
        guides = (f'    <div class="lp-card">\n      <h2>{t["guides"]}</h2>\n      <ul class="lp-guides">\n'
                  + "".join(f'        <li><a href="{h}">{n}</a></li>\n' for h, n in c["guides"]) + "      </ul>\n    </div>\n")
    related = "".join(f'        <a href="{h}"><strong>{n}</strong></a>\n' for h, n in c["related"])
    return f"""<main class="lp-main">

<div class="lp-crumb"><a href="/{lang}/">{t['home']}</a><span>/</span><a href="{t['hub'][0]}">{t['hub'][1]}</a><span>/</span>{c['crumb']}</div>

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-hero-inner">
    <div class="lp-eyebrow">{c['eyebrow']}</div>
    <h1>{c['h1']}</h1>
    <p class="lp-hero-sub">{c['sub']}</p>
    <div class="lp-hero-ctas">
      <a href="#quote-form" class="btn-primary">{t['cta']}</a>
      {wa_btn}
    </div>
    <div class="lp-trust">
      {c['trust']}
    </div>
  </div>
</section>
{author}


{langpol}

<section class="lp-sections">
  <div class="lp-sections-inner">
{cards}
  </div>
</section>

<!-- QUOTE FORM -->
{form}

<!-- FAQ -->
<section class="lp-faq-section" id="faq">
  <div class="lp-faq-inner">
    <h2 class="lp-faq-title">{t['faq']}</h2>
{faq}
  </div>
</section>

<!-- RELATED -->
<section class="lp-sections">
  <div class="lp-sections-inner">
{guides}    <div class="lp-card">
      <h2>{t['related']}</h2>
      <div class="lp-cluster">
{related}      </div>
    </div>
  </div>
</section>

<!-- REGULATORY DISCLAIMER -->
<section class="lp-disclaimer">
  <p>{t['disc']}</p>
</section>

</main>"""

def es_main(shell, p, c):
    t = L["es"]
    author = re.search(r"<!-- AR-AUTHOR -->\n<div class=\"ar-author\">.*?</p></div></div>", shell, re.S).group(0)
    langpol = re.search(r'<div class="lang-policy-band">.*?</div>', shell, re.S).group(0)
    form = re.search(r'<section class="section form-section".*?\n</section>', shell, re.S).group(0)
    form = re.sub(r'(<h2 id="lead-title">)[^<]*(</h2>)', rf"\g<1>Solicite una propuesta por escrito\g<2>", form, 1)
    form = re.sub(r'(<p class="form-intro">)[^<]*(</p>)', rf"\g<1>{c['intro']}\g<2>", form, 1)
    form = re.sub(r'(<p class="form-intro" data-ins-note>)[^<]*(</p>)', rf"\g<1>{c['note']}\g<2>", form, 1)
    form = re.sub(r'name="source" value="[^"]*"', f'name="source" value="{c["slug"]}"', form)
    form = re.sub(r'name="subject" value="[^"]*"', f'name="subject" value="Nueva solicitud (ES) — {strip_tags(c["h1"])}"', form)
    form = re.sub(r'name="product_interest" value="[^"]*"', f'name="product_interest" value="{c["option"]}"', form)
    form = form.replace(' selected>', '>')
    form = form.replace(f'<option value="{c["option"]}">', f'<option value="{c["option"]}" selected>', 1)
    form = re.sub(r'placeholder="Por ejemplo:[^"]*"', f'placeholder="{esc_attr(c["placeholder"])}"', form, 1)
    secs = []
    for i, (h, b) in enumerate(c["sections"]):
        cls = "plain" if i % 2 == 0 else "tint"
        secs.append(f'<section class="section {cls}" aria-labelledby="s{i+1}">\n  <div class="container narrow article-body">\n    <h2 id="s{i+1}">{h}</h2>\n    {b}\n  </div>\n</section>')
    faq = "\n".join(f'      <div class="faq-item">\n        <h3>{q}</h3>\n        <div class="faq-answer"><p>{a}</p></div>\n      </div>' for q, a in c["faq"])
    rel = "".join(f'      <li><a class="text-link" href="{h}">{n}</a></li>\n' for h, n in c["related"])
    return f"""<nav class="breadcrumb" aria-label="Ruta de navegación">
    <ol>
      <li><a href="/es/">Inicio</a></li>
      <li><a href="/es/seguros-espana/">España</a></li>
      <li><span aria-current="page">{c['crumb']}</span></li>
    </ol>
  </nav>

<main id="main">

<article>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <span class="eyebrow">{c['eyebrow']}</span>
    <h1 id="hero-title">{c['h1']}</h1>
    <p class="hero-subtitle">{c['sub']}</p>
    <p class="hero-meta">Mediador de seguros registrado · ASF n.º 425591790/3 · Colocado con Hiscox en España</p>
    <a href="#solicitud" class="btn-cta">{t['cta']} <svg viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg></a>
  </div>
</section>
{author}


{langpol}


{chr(10).join(secs)}

<section class="section" aria-labelledby="faq-title" id="preguntas">
  <div class="container narrow">
    <span class="eyebrow">{t['faq']}</span>
    <h2 id="faq-title">{strip_tags(c['h1'])} — preguntas</h2>
    <div class="faq-list">
{faq}
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="related-title">
  <div class="container narrow">
    <h2 id="related-title">{t['related']}</h2>
    <ul class="related">
{rel}    </ul>
  </div>
</section>

{form}
</article>
</main>"""

for key, p in PRODUCTS.items():
    for lang in ("en", "de", "es"):
        c = p[lang]
        shell = open(SHELL[lang], encoding="utf-8").read()
        s = head(shell, lang, p, c)
        s = langsel(s, lang, p)
        s = re.sub(r'data-product="[^"]*"', f'data-product="{p["product"]}"', s, 1)
        if lang == "es":
            s = re.sub(r'<nav class="breadcrumb".*?</main>', lambda m: es_main(shell, p, c), s, 1, re.S)
        else:
            s = re.sub(r'<main class="lp-main">.*?</main>', lambda m: lp_main(shell, lang, p, c, key), s, 1, re.S)
        out = f"public/{lang}/{c['slug']}/index.html"
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, "w", encoding="utf-8").write(s)
        print("wrote", out)
