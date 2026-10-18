#!/usr/bin/env python3
"""Cancer cover in health insurance — one page in each of the twelve language trees.

How Portuguese domestic health insurance and international health insurance (IPMI)
deal with cancer: capitals, waiting periods, pre-existing conditions, where treatment
happens. MGEN (pre-existing conditions after 365 days), Médis (EUR 1,000,000 Serious
Illness cover in its top option) and the two international insurers (Allianz Care,
Cigna Global).

Reuses the chrome, short form, language selector and hreflang helpers of
scripts/build-ipmi-intl-pages.py: the template page, the per-language form-name
(handled by netlify/functions/submission-created.mjs) and the UI strings of
scripts/ipmi_intl/<lang>.py. Content lives in scripts/cancer_cover/<lang>.py —
facts only from the sources listed in scripts/cancer_cover/README.md.

Idempotent. Run from the repository root:
    python3 scripts/build-cancer-cover-pages.py
then node scripts/generate-sitemap.mjs
"""
import importlib
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
_spec = importlib.util.spec_from_file_location("ipmi_build", ROOT / "scripts" / "build-ipmi-intl-pages.py")
ib = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(ib)

PUBLIC, BASE, LANGS, ORDER, HOME = ib.PUBLIC, ib.BASE, ib.LANGS, ib.ORDER, ib.HOME
esc, strip = ib.esc, ib.strip
DATE = "2026-10-18"

PATHS = {
    "pt": "/seguros/saude/cobertura-cancro/",
    "en": "/en/cancer-cover-health-insurance-portugal/",
    "de": "/de/krebs-krankenversicherung-portugal/",
    "es": "/es/cancer-seguro-medico-portugal-espana/",
    "nl": "/nl/kanker-zorgverzekering-portugal/",
    "fr": "/fr/cancer-assurance-sante-portugal/",
    "it": "/it/cancro-assicurazione-sanitaria-portogallo/",
    "pl": "/pl/nowotwor-ubezpieczenie-zdrowotne-portugalia/",
    "se": "/se/cancer-sjukvardsforsakring-portugal/",
    "dk": "/dk/kraeft-sundhedsforsikring-portugal/",
    "il": "/il/cancer-health-insurance-portugal/",
    "zh": "/zh/cancer-health-insurance-portugal/",
}
KIND = "cancer"
MARK = "<!-- ar-cancer-cover -->"
LINK_MARK = "<!-- cancer-cover-link -->"

# The selector and hreflang helpers of the IPMI builder look pages up through path_of.
_orig_path_of = ib.path_of
ib.path_of = lambda lang, kind: PATHS[lang] if kind == KIND else _orig_path_of(lang, kind)

CSS_EXTRA = """<style id="ar-cancer-cover-style">
.ipmi-x .cc-table td:first-child{font-weight:600}
.ipmi-x .cc-table th:first-child{width:22%}
</style>"""


def form(lang, ui_mod, page):
    """The language's short IPMI form, relabelled for this page."""
    s = ib.form_html(lang, ui_mod, "hub", {"form_h2": page["form_h2"], "form_lead": page["form_lead"]})
    s = s.replace(f'data-endpoint="{LANGS[lang][2]}"', f'data-endpoint="{PATHS[lang]}"', 1)
    s = s.replace('name="source" value="hub:ipmi"', 'name="source" value="page:cancer-cover"', 1)
    s = s.replace('name="product_interest" value="International health insurance (IPMI)"',
                  'name="product_interest" value="Health insurance: cancer cover (domestic or international)"', 1)
    return s


def crumbs(lang, ui, page):
    return [(ui["home"], HOME[lang]), (page["crumb"], PATHS[lang])]


def breadcrumb(lang, ui, page, template_nav):
    items = crumbs(lang, ui, page)
    label = "Breadcrumb"
    if template_nav:
        m = re.search(r'aria-label="([^"]+)"', template_nav)
        if m:
            label = m.group(1)
    if template_nav and "<ol>" in template_nav:
        lis = [f'      <li><a href="{u}">{esc(t)}</a></li>' for t, u in items[:-1]]
        lis.append(f'      <li><span aria-current="page">{esc(items[-1][0])}</span></li>')
        return f'<nav class="breadcrumb" aria-label="{label}">\n    <ol>\n' + "\n".join(lis) + "\n    </ol>\n  </nav>"
    parts = [f'<a href="{u}">{esc(t)}</a>' for t, u in items]
    cls = "breadcrumb" if template_nav else "breadcrumb ipmi-bc"
    return f'<nav class="{cls}" aria-label="{label}">' + "<span>&rsaquo;</span>".join(parts) + "</nav>"


def exists(url):
    return url in PATHS.values() or (PUBLIC / url.strip("/") / "index.html").exists()


def main_html(lang, ui_mod, page):
    ui = ui_mod.UI
    facts = "\n".join(f"      <li>{f}</li>" for f in page["facts"])
    secs = "\n".join(
        f'  <section class="ipmi-sec" aria-labelledby="cc-s{n}">\n    <h2 id="cc-s{n}">{h2}</h2>\n    {body}\n  </section>'
        for n, (h2, body) in enumerate(page["sections"]))
    faq = "\n".join(f"      <details><summary>{q}</summary><p>{a}</p></details>" for q, a in page["faq"])
    rel = "\n".join(f'      <li><a href="{u}">{t}</a></li>' for u, t in page["related"] if exists(u))
    lp = ""
    if ui.get("lang_policy"):
        h2, paras = ui["lang_policy"]
        lp = '  <aside class="ipmi-note" aria-labelledby="cc-lang">\n    <h2 id="cc-lang">' + h2 + "</h2>\n    " + "".join(f"<p>{p}</p>" for p in paras) + "\n  </aside>\n"
    src = "".join(f'<li><a href="{u}" rel="nofollow noopener" target="_blank">{t}</a></li>' for t, u in page["sources"])
    return f"""<main id="main">
{MARK}
<article class="ipmi-x">
<div class="ipmi-wrap">
  <header class="ipmi-hero">
    <span class="ipmi-eyebrow">{page['eyebrow']}</span>
    <h1>{page['h1']}</h1>
    <p class="ipmi-lead">{page['lead']}</p>
    <p class="ipmi-meta">{ui['meta']}</p>
    <a class="ipmi-btn" href="#ipmi-pedido">{ui['cta']}</a>
  </header>
  <div class="ipmi-author"><picture><source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp"><img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" width="48" height="48" loading="lazy" decoding="async"></picture><p>{ui['author']}</p></div>
{lp}  <section class="ipmi-facts" aria-labelledby="cc-facts">
    <h2 id="cc-facts">{ui['facts_h2']}</h2>
    <ul>
{facts}
    </ul>
  </section>
{secs}
  <div class="ipmi-formbox">
{form(lang, ui_mod, page)}
  </div>
  <section class="ipmi-faq" aria-labelledby="cc-faq">
    <h2 id="cc-faq">{ui['faq_h2']}</h2>
{faq}
  </section>
  <section class="ipmi-related" aria-labelledby="cc-rel">
    <h2 id="cc-rel">{ui['related_h2']}</h2>
    <ul>
{rel}
    </ul>
    <p class="ipmi-small">{page['sources_label']}</p>
    <ul class="ipmi-small">{src}</ul>
  </section>
</div>
</article>
</main>"""


def ld(lang, ui, page):
    url = BASE + PATHS[lang]
    hl = LANGS[lang][0]
    graph = [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": page["title"], "description": page["desc"],
         "inLanguage": hl, "dateModified": DATE,
         "about": {"@type": "Thing", "name": "Cancer cover in health insurance"},
         "author": {"@type": "Person", "name": "Hugo Gonçalves", "jobTitle": "Founder & Risk Management Specialist",
                    "worksFor": {"@id": BASE + "/#organization"}},
         "publisher": {"@id": BASE + "/#organization"}},
        {"@type": "InsuranceAgency", "@id": BASE + "/#organization", "name": "Adler & Rochefort",
         "legalName": "Ownizo, Unipessoal Lda.", "url": BASE + "/", "telephone": "+351928226570",
         "email": "insurance@adlerrochefort.com", "areaServed": ["PT", "ES"]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": n + 1, "name": t, "item": BASE + u} for n, (t, u) in enumerate(crumbs(lang, ui, page))]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}} for q, a in page["faq"]]},
    ]
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=1)


def build(lang):
    ui_mod = importlib.import_module(f"ipmi_intl.{lang}")
    page = importlib.import_module(f"cancer_cover.{lang}").PAGE
    ui = ui_mod.UI
    tpl = LANGS[lang][3]
    s = (PUBLIC / tpl.strip("/") / "index.html").read_text(encoding="utf-8")
    url = BASE + PATHS[lang]
    title, desc = esc(page["title"]), esc(page["desc"])
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    for prop, val in (("description", desc), ("og:title", title), ("twitter:title", title),
                      ("og:description", desc), ("twitter:description", desc), ("og:url", url)):
        s = re.sub(rf'<meta (property|name)="{re.escape(prop)}" content="[^"]*">',
                   lambda m, v=val, p=prop: f'<meta {m.group(1)}="{p}" content="{v}">', s, count=1)
    s = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", s, count=1)
    s = re.sub(r'<meta property="og:type" content="[^"]*">', '<meta property="og:type" content="article">', s, count=1)
    s = re.sub(r'<meta property="article:(published|modified)_time" content="[^"]*">\n?', "", s)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
    s = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?', "", s)
    s = s.replace(f'<link rel="canonical" href="{url}">', f'<link rel="canonical" href="{url}">\n' + ib.hreflang_block(KIND).rstrip("\n"), 1)
    s = re.sub(r'<script type="application/ld\+json">.*?</script>\n?', "", s, flags=re.S)
    head_end = s.index("</head>")
    head = s[:head_end]
    head = re.sub(r'<style id="ar-ipmi-intl-style">.*?</style>\n?', "", head, flags=re.S)
    head = re.sub(r'<style id="ar-cancer-cover-style">.*?</style>\n?', "", head, flags=re.S)
    if "/css/ar-conversion.css" not in head:
        head += '<link rel="stylesheet" href="/css/ar-conversion.css">\n'
    head += '<script type="application/ld+json">\n' + ld(lang, ui, page) + "\n</script>\n" + ib.CSS + "\n" + CSS_EXTRA + "\n"
    s = head + s[head_end:]
    tnav = re.search(r'<nav class="breadcrumb"[^>]*>.*?</nav>', s, flags=re.S)
    bc = breadcrumb(lang, ui, page, tnav.group(0) if tnav else None)
    if tnav:
        s = re.sub(r'<nav class="breadcrumb"[^>]*>.*?</nav>', lambda m: bc, s, count=1, flags=re.S)
    i = s.index("<main")
    j = s.index("</main>") + len("</main>")
    s = s[:i] + ("" if "breadcrumb" in s[:i] else bc + "\n\n") + main_html(lang, ui_mod, page) + s[j:]
    s = ib.set_switcher(s, KIND, lang)
    ids = set(re.findall(r'\bid="([^"]+)"', s))
    s = re.sub(r'href="#([^"]+)"', lambda m: m.group(0) if m.group(1) in ids else 'href="#ipmi-pedido"', s)
    s = re.sub(r'<script id="ar-ipmi-intl-js">.*?</script>\n?', "", s, flags=re.S)
    tail = ib.FORM_JS + "\n"
    if "/js/ar-conversion.js" not in s:
        tail += '<script defer src="/js/ar-conversion.js"></script>\n'
    k = s.rindex("</body>")
    s = s[:k] + tail + s[k:]
    out = PUBLIC / PATHS[lang].strip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s, encoding="utf-8")
    return PATHS[lang]


# Inbound link from each language's main health page (manually authored pages).
INBOUND = {
    "pt": ("/seguros/saude/", "Cancro e seguro de saúde: como atuam a MGEN, a Médis e os seguros internacionais"),
}


def link_from_health_pages():
    done = []
    for lang, (rel, label) in INBOUND.items():
        f = PUBLIC / rel.strip("/") / "index.html"
        s = f.read_text(encoding="utf-8")
        if LINK_MARK in s:
            continue
        para = f'{LINK_MARK}\n  <p>Saiba como cada seguro trata o cancro: <a href="{PATHS[lang]}">{label}</a>.</p>\n'
        out = re.sub(r'(<h2>Períodos de carência e doenças pré-existentes</h2>.*?)(</section>)',
                     lambda m: m.group(1) + para + m.group(2), s, count=1, flags=re.S)
        if out != s:
            f.write_text(out, encoding="utf-8")
            done.append(rel)
    return done


def main():
    langs = sys.argv[1:] or ORDER
    built = [build(l) for l in langs]
    if not sys.argv[1:]:
        built += [p + " (link added)" for p in link_from_health_pages()]
    for p in built:
        print(p)


if __name__ == "__main__":
    main()
