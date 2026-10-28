#!/usr/bin/env python3
"""Builds /en/english-speaking-insurance-broker-portugal-spain/ and
/de/deutschsprachiger-versicherungsmakler-portugal-spanien/ (October 2026)
from scripts/broker-language-pages.data.py.

Each page is cloned from an existing page in its language so it keeps that
language's chrome and its registered quick-contact form (quote-blog /
de-angebot-anfrage); the head metadata, structured data, hero and body are
replaced. Usage: python3 scripts/build-broker-language-pages.py
"""
import html, json, os, re, runpy

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
PAGES = runpy.run_path(os.path.join(HERE, "broker-language-pages.data.py"))["PAGES"]
SITE = "https://adlerrochefort.com"
TODAY = "2026-10-28"


def esc(s):
    return html.escape(s, quote=True)


def meta(h, attr, key, value):
    return re.sub(r'(<meta %s="%s" content=")[^"]*(")' % (attr, re.escape(key)),
                  lambda m: m.group(1) + esc(value) + m.group(2), h)


def head(h, lang, p, old_path):
    h = h.replace(SITE + old_path, SITE + p["path"]).replace(old_path, p["path"])
    h = re.sub(r"<title>[^<]*</title>", f'<title>{esc(p["title"])} | Adler &amp; Rochefort</title>', h, count=1)
    h = meta(h, "name", "description", p["description"])
    for a in ("property", "name"):
        h = meta(h, a, "og:title", p["title"])
        h = meta(h, a, "og:description", p["description"])
        h = meta(h, a, "twitter:title", p["title"])
        h = meta(h, a, "twitter:description", p["description"])
    h = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", h)
    # hreflang pair
    h = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n?', "", h)
    pair = [(PAGES["en"]["hreflang"], PAGES["en"]["path"]), (PAGES["de"]["hreflang"], PAGES["de"]["path"])]
    block = "".join(f'<link rel="alternate" hreflang="{c}" href="{SITE}{u}">\n' for c, u in pair)
    block += f'<link rel="alternate" hreflang="x-default" href="{SITE}{PAGES["en"]["path"]}">\n'
    canon = re.search(r'<link rel="canonical"[^>]*>\n?', h)
    h = h[:canon.end()] + block + h[canon.end():]

    url = SITE + p["path"]

    def fix_ld(m):
        try:
            d = json.loads(m.group(1))
        except ValueError:
            return m.group(0)
        nodes = d["@graph"] if isinstance(d, dict) and "@graph" in d else (d if isinstance(d, list) else [d])
        for n in nodes:
            t = n.get("@type")
            t = t if isinstance(t, list) else [t]
            if "FAQPage" in t:
                n["mainEntity"] = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]
            elif set(t) & {"WebPage", "Article", "BlogPosting", "AboutPage"}:
                for k in ("name", "headline"):
                    if k in n:
                        n[k] = p["title"]
                if "description" in n:
                    n["description"] = p["description"]
                if "url" in n:
                    n["url"] = url
                if "dateModified" in n:
                    n["dateModified"] = TODAY
                if "datePublished" in n:
                    n["datePublished"] = TODAY
            elif "BreadcrumbList" in t and n.get("itemListElement"):
                n["itemListElement"][-1]["name"] = p["breadcrumb"]
                n["itemListElement"][-1]["item"] = url
        return '<script type="application/ld+json">\n' + json.dumps(d, ensure_ascii=False, indent=2) + "\n</script>"

    h = re.sub(r'<script type="application/ld\+json">(.*?)</script>', fix_ld, h, flags=re.S)
    if "FAQPage" not in h:
        faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]}
        h = h.replace("</head>", '<script type="application/ld+json">\n' + json.dumps(faq, ensure_ascii=False, indent=2) + "\n</script>\n</head>", 1)
    return h


def switcher(h, p):
    def fix(m):
        a = m.group(0)
        code = re.search(r'hreflang="([^"]+)"', a).group(1).split("-")[0]
        if code in p["switch"]:
            a = re.sub(r'href="[^"]*"', f'href="{p["switch"][code]}"', a, count=1)
            a = re.sub(r'<span class="ar-langsel-note">[^<]*</span>', "", a)
        return a
    return re.sub(r'<li><a href="[^"]*"[^>]*hreflang="[^"]+"[^>]*>.*?</a></li>', fix, h)


def build_en(p):
    old = "/" + p["template"] + "/"
    h = open(os.path.join(PUBLIC, p["template"], "index.html"), encoding="utf-8").read()
    qc_start = h.index("<!-- ar-quick-contact -->")
    qc_end = h.index("</div>", h.index("</form>", qc_start)) + 6
    quick = h[qc_start:qc_end].replace("page:en/why-use-an-insurance-broker", "page:" + p["path"].strip("/"))
    h = head(h, "en", p, old)
    quick = quick.replace(old, p["path"]).replace("en-why-use-an-insurance-broker-", p["path"].strip("/").replace("/", "-") + "-")
    h = switcher(h, p)
    h = re.sub(r'(<nav class="breadcrumb"[^>]*>.*?<span aria-hidden="true">&rsaquo;</span>\s*)[^<]*?(\s*</nav>)',
               lambda m: m.group(1) + esc(p["breadcrumb"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<div class="hero-badge">)[^<]*(</div>)', lambda m: m.group(1) + esc(p["badge"]) + m.group(2), h, count=1)
    h = re.sub(r"(<header class=\"hero\">.*?<h1>).*?(</h1>)", lambda m: m.group(1) + p["h1"] + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<p class="hero-subtitle">).*?(</p>)', lambda m: m.group(1) + esc(p["subtitle"]) + m.group(2), h, count=1, flags=re.S)

    out = []
    for i, (sid, title, eyebrow, body) in enumerate(p["sections"]):
        cls = "section" if i % 2 == 0 else "section alt"
        eb = f'    <div class="section-eyebrow">{esc(eyebrow)}</div>\n' if eyebrow else ""
        extra = ("    " + quick + "\n") if i == 1 else ""
        out.append(f'<section class="{cls}" aria-labelledby="{sid}">\n  <div class="container narrow">\n{eb}{extra}'
                   f'    <h2 id="{sid}">{esc(title)}</h2>\n    {body}\n  </div>\n</section>\n')
    faq = "".join(f'    <details class="faq-item">\n      <summary>{esc(q)}</summary>\n      <p>{esc(a)}</p>\n    </details>\n' for q, a in p["faq"])
    out.append(f'<section class="section" aria-labelledby="faq">\n  <div class="container narrow">\n    <div class="section-eyebrow">Common questions</div>\n'
               f'    <h2 id="faq">{esc(p["faq_title"])}</h2>\n{faq}  </div>\n</section>\n')
    start = h.index('<section class="section" aria-labelledby="compare">')
    end = h.index('<section class="closing"')
    h = h[:start] + "\n".join(out) + "\n" + h[end:]
    return h


def build_de(p):
    old = "/" + p["template"] + "/"
    h = open(os.path.join(PUBLIC, p["template"], "index.html"), encoding="utf-8").read()
    h = head(h, "de", p, old)
    h = h.replace("quick-contact:de/private-clients-portugal", "quick-contact:" + p["path"].strip("/"))
    h = switcher(h, p)
    h = re.sub(r'(<nav class="breadcrumb".*?<span aria-current="page">)[^<]*(</span>)', lambda m: m.group(1) + esc(p["breadcrumb"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<section class="hero".*?<span class="eyebrow">)[^<]*(</span>)', lambda m: m.group(1) + esc(p["eyebrow"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<h1 id="hero-title">).*?(</h1>)', lambda m: m.group(1) + esc(p["h1"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<p class="hero-subtitle">).*?(</p>)', lambda m: m.group(1) + esc(p["subtitle"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<p class="hero-meta">).*?(</p>)', lambda m: m.group(1) + esc(p["meta"]) + m.group(2), h, count=1, flags=re.S)
    h = re.sub(r'(<a href="#angebot" class="btn-cta">)[^<]*', r"\1Anfrage senden ", h, count=1)
    h = re.sub(r'(<h2 id="angebot-title">)[^<]*(</h2>)', r"\1Anfrage senden\2", h, count=1)

    out = []
    for i, (sid, title, eyebrow, body) in enumerate(p["sections"]):
        tone = "plain" if i % 2 == 0 else "tint"
        eb = f'    <span class="eyebrow">{esc(eyebrow)}</span>\n' if eyebrow else ""
        out.append(f'<section class="section {tone}" aria-labelledby="{sid}">\n  <div class="container narrow article-body">\n{eb}'
                   f'    <h2 id="{sid}">{esc(title)}</h2>\n    {body}\n  </div>\n</section>\n')
    items = "".join(f'      <div class="faq-item">\n        <h3>{esc(q)}</h3>\n        <div class="faq-answer"><p>{esc(a)}</p></div>\n      </div>\n' for q, a in p["faq"])
    out.append(f'<section class="section" aria-labelledby="faq-title" id="haeufige-fragen">\n  <div class="container narrow">\n    <span class="eyebrow">Häufige Fragen</span>\n'
               f'    <h2 id="faq-title">{esc(p["faq_title"])}</h2>\n    <div class="faq-list">\n{items}    </div>\n  </div>\n</section>\n')
    start = h.index("<!-- AR-KEYFACTS -->")
    end = h.index('<section class="section form-section"')
    h = h[:start] + "\n".join(out) + "\n" + h[end:]
    return h


for lang, fn in (("en", build_en), ("de", build_de)):
    p = PAGES[lang]
    out_dir = os.path.join(PUBLIC, p["path"].strip("/"))
    os.makedirs(out_dir, exist_ok=True)
    open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8").write(fn(p))
    print("built", p["path"])
