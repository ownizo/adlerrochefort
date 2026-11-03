#!/usr/bin/env python3
"""Refocuses the /es/ cluster on Spain, in Spanish (November 2026).

1. Builds three Spain-native commercial pages from scripts/es-spain-focus.data.py,
   cloned from /es/seguro-responsabilidad-profesional-portugal/ so they keep the
   cluster's chrome, author box and the registered "es-solicitud" form:
     /es/seguro-responsabilidad-civil-terapeutas-yoga-pilates/
     /es/seguro-joyas-relojes-espana/
     /es/seguro-hogar-alto-valor-espana/
2. Patches the published /es/ pages in place (not via generate-market-clusters,
   which would drop the post-processing other scripts applied since):
   - España menu (desktop + mobile): the three pages; "Private Clients — España"
     points to the high-value home page.
   - Form: the two new enquiry types; Spanish phone example instead of Mexican.
   - Language band: Spanish cities first.
   - /es/ hub: Spain-first title, description and hero; a "En España" block
     with the three pages; the Latin-American section kept, but as secondary.
   - Call-outs from the existing Spain pages to the new ones.

Idempotent: re-running it changes nothing the second time.
Usage: python3 scripts/build-es-spain-focus.py
"""
import html
import json
import os
import re
import runpy

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
ES = os.path.join(PUBLIC, "es")
SITE = "https://adlerrochefort.com"
TODAY = "2026-11-03"
TEMPLATE = "seguro-responsabilidad-profesional-portugal"
PAGES = runpy.run_path(os.path.join(HERE, "es-spain-focus.data.py"))["PAGES"]

RC, JOYAS, HOGAR = (f"/es/{p['slug']}/" for p in PAGES)


def esc(s):
    return html.escape(s, quote=True)


def sub1(pat, repl, s, flags=re.S):
    out, n = re.subn(pat, repl, s, count=1, flags=flags)
    if n != 1:
        raise SystemExit(f"pattern not found: {pat[:80]}")
    return out


def meta(h, attr, key, value):
    pat = re.compile(r'(<meta %s="%s" content=")[^"]*(")' % (attr, re.escape(key)))
    return pat.sub(lambda m: m.group(1) + esc(value) + m.group(2), h)


# ------------------------------------------------------------------ new pages
def build(p):
    h = open(os.path.join(ES, TEMPLATE, "index.html"), encoding="utf-8").read()
    slug = p["slug"]
    url = f"{SITE}/es/{slug}/"
    h = h.replace(f"/es/{TEMPLATE}/", f"/es/{slug}/")

    full = f'{p["title"]} | Adler & Rochefort'
    h = sub1(r"<title>[^<]*</title>", f"<title>{esc(full)}</title>", h)
    h = meta(h, "name", "description", p["description"])
    h = meta(h, "name", "keywords", p["keywords"])
    for attr in ("property", "name"):
        h = meta(h, attr, "og:title", full)
        h = meta(h, attr, "og:description", p["description"])
        h = meta(h, attr, "twitter:title", full)
        h = meta(h, attr, "twitter:description", p["description"])

    # hreflang: Spanish only (no counterpart in other languages yet)
    h = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n', "", h)
    h = h.replace(f'<link rel="canonical" href="{url}">',
                  f'<link rel="canonical" href="{url}">\n  <link rel="alternate" hreflang="es" href="{url}">', 1)
    # language selector: the Portugal-RC counterparts do not apply here
    for old, new in (("/seguros/responsabilidade-civil-profissional/", "/"),
                     ("/en/professional-liability-insurance-portugal/", "/en/"),
                     ("/de/berufshaftpflicht-freiberufler-portugal/", "/de/")):
        h = h.replace(f'<li><a href="{old}"', f'<li><a href="{new}"')

    # breadcrumb
    h = h.replace('<li><a href="/es/seguros-portugal/">Portugal</a></li>',
                  '<li><a href="/es/seguros-espana/">España</a></li>', 1)
    h = sub1(r'(<nav class="breadcrumb".*?<span aria-current="page">)[^<]*(</span>)',
             lambda m: m.group(1) + esc(p["crumb"]) + m.group(2), h)

    # hero
    h = sub1(r'(<section class="hero".*?<span class="eyebrow">)[^<]*(</span>)',
             lambda m: m.group(1) + p["eyebrow"] + m.group(2), h)
    h = sub1(r'(<h1 id="hero-title">).*?(</h1>)', lambda m: m.group(1) + esc(p["h1"]) + m.group(2), h)
    h = sub1(r'(<p class="hero-subtitle">).*?(</p>)', lambda m: m.group(1) + esc(p["subtitle"]) + m.group(2), h)
    h = sub1(r'(<p class="hero-meta">).*?(</p>)',
             lambda m: m.group(1) + "Mediador de seguros registrado · ASF n.º 425591790/3 · "
             "Opera en España en libre prestación de servicios" + m.group(2), h)

    # language band, written for Spain
    band = ('<p>Le atendemos en español de principio a fin: propuestas, explicación de las condiciones, '
            'correspondencia y gestión de siniestros, siempre por escrito.</p>\n'
            '      <p>Las pólizas de riesgos situados en España se emiten en español y por aseguradoras '
            'autorizadas para operar en España. Antes de la firma le explicamos por escrito qué dice '
            'exactamente cada una: coberturas, sumas aseguradas, franquicias y exclusiones.</p>')
    h = sub1(r'(<h2 id="idioma-de-trabajo">[^<]*</h2>\s*).*?(\s*</aside>)',
             lambda m: m.group(1) + band + m.group(2), h)

    # body sections
    start = h.index('<section class="section plain" aria-labelledby="quien">')
    end = h.index('<section class="pullquote-band"')
    body = ""
    for i, (sid, head, content) in enumerate(p["sections"]):
        tone = "plain" if i % 2 == 0 else "tint"
        body += (f'<section class="section {tone}" aria-labelledby="{sid}">\n'
                 f'  <div class="container narrow article-body">\n'
                 f'    <h2 id="{sid}">{esc(head)}</h2>\n'
                 f'    {content}\n'
                 f'  </div>\n</section>\n\n')
    h = h[:start] + body + h[end:]
    h = sub1(r'(<blockquote class="pullquote">\s*).*?(\s*<cite>)[^<]*(</cite>)',
             lambda m: m.group(1) + esc(p["pullquote"]) + m.group(2) + "Adler &amp; Rochefort" + m.group(3), h)

    # FAQ
    h = sub1(r'(<h2 id="faq-title">)[^<]*(</h2>)', lambda m: m.group(1) + esc(p["faq_title"]) + m.group(2), h)
    items = "".join(f'      <div class="faq-item">\n        <h3>{esc(q)}</h3>\n'
                    f'        <div class="faq-answer"><p>{esc(a)}</p></div>\n      </div>\n'
                    for q, a in p["faq"])
    h = sub1(r'(<div class="faq-list">\n).*?(    </div>\n  </div>\n</section>)',
             lambda m: m.group(1) + items + m.group(2), h)

    # related
    rel = "".join(f'      <li><a class="text-link" href="{href}">{esc(t)}</a></li>\n' for href, t in p["related"])
    h = sub1(r'(<ul class="related">\n).*?(    </ul>)', lambda m: m.group(1) + rel + m.group(2), h)

    # form
    h = sub1(r'(<h2 id="lead-title">)[^<]*(</h2>)', lambda m: m.group(1) + esc(p["form_title"]) + m.group(2), h)
    h = sub1(r'(<p class="form-intro">).*?(</p>)', lambda m: m.group(1) + esc(p["form_intro"]) + m.group(2), h)
    h = h.replace('name="source" value="seguro-responsabilidad-profesional-portugal"', f'name="source" value="{slug}"')
    h = sub1(r'(name="subject" value=")[^"]*(")', lambda m: m.group(1) + esc(p["form_subject"]) + m.group(2), h)
    value, label = p["form_option"]
    h = sub1(r'(name="product_interest" value=")[^"]*(")', lambda m: m.group(1) + esc(value) + m.group(2), h)
    h = h.replace('value="Español · Responsabilidad civil" selected>', 'value="Español · Responsabilidad civil">')
    h = add_form_options(h)
    h = sub1(r'<option value="%s">' % re.escape(esc(value)), f'<option value="{esc(value)}" selected>', h)
    h = sub1(r'(<textarea id="f-message"[^>]*placeholder=")[^"]*(")', lambda m: m.group(1) + esc(p["placeholder"]) + m.group(2), h)
    h = sub1(r'(<button type="submit" class="form-submit" id="leadSubmit">)[^<]*(</button>)',
             lambda m: m.group(1) + esc(p["submit"]) + m.group(2), h)

    # JSON-LD
    def fix_ld(m):
        d = json.loads(m.group(1))
        for n in d.get("@graph", [d]):
            t = n.get("@type")
            if t == "BreadcrumbList":
                n["itemListElement"] = [
                    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": f"{SITE}/es/"},
                    {"@type": "ListItem", "position": 2, "name": "España", "item": f"{SITE}/es/seguros-espana/"},
                    {"@type": "ListItem", "position": 3, "name": p["crumb"], "item": url}]
            elif t == "FAQPage":
                n["mainEntity"] = [{"@type": "Question", "name": q,
                                    "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]
            elif t == "Article":
                n.update(headline=p["h1"], name=full, description=p["description"],
                         datePublished=f"{TODAY}T09:00:00+00:00", dateModified=f"{TODAY}T09:00:00+00:00")
                n["mainEntityOfPage"]["@id"] = url
        return '<script type="application/ld+json">\n' + json.dumps(d, ensure_ascii=False, indent=2) + "\n</script>"
    h = re.sub(r'<script type="application/ld\+json">(.*?)</script>', fix_ld, h, flags=re.S)

    out = os.path.join(ES, slug)
    os.makedirs(out, exist_ok=True)
    open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(h)
    return out


# --------------------------------------------------------- cluster-wide patches
NEW_OPTIONS = ('\n          <option value="Español · RC terapias, yoga y pilates">Responsabilidad civil: terapias, yoga, pilates y bienestar</option>'
               '\n          <option value="Español · Joyas y relojes">Joyas y relojes</option>')


def add_form_options(h):
    if '<option value="Español · Joyas y relojes"' in h:
        return h
    return re.sub(r'(<option value="Español · Responsabilidad civil"(?: selected)?>[^<]*</option>)',
                  lambda m: m.group(1) + NEW_OPTIONS, h, count=1)


def patch_nav(h):
    if f'href="{HOGAR}"' in h and "Hogar de alto valor</a>" in h:
        return h
    # desktop panel
    h = h.replace('<a href="/es/seguro-hogar-espana/" role="menuitem">Seguro de hogar</a>',
                  '<a href="/es/seguro-hogar-espana/" role="menuitem">Seguro de hogar</a>\n'
                  f'            <a href="{HOGAR}" role="menuitem">Hogar de alto valor</a>', 1)
    h = h.replace('<a href="/es/seguro-responsabilidad-civil-espana/" role="menuitem">Responsabilidad civil</a>',
                  '<a href="/es/seguro-responsabilidad-civil-espana/" role="menuitem">Responsabilidad civil</a>\n'
                  f'            <a href="{RC}" role="menuitem">RC terapeutas, yoga y pilates</a>', 1)
    h = h.replace('<a href="/es/seguro-colecciones-espana/" role="menuitem">Colecciones</a>',
                  f'<a href="{JOYAS}" role="menuitem">Joyas y relojes</a>\n'
                  '            <a href="/es/seguro-colecciones-espana/" role="menuitem">Colecciones</a>', 1)
    h = h.replace('<a href="/es/seguro-hogar-espana/" role="menuitem"><span class="nav-panel-flag">🇪🇸</span> Private Clients — España</a>',
                  f'<a href="{HOGAR}" role="menuitem"><span class="nav-panel-flag">🇪🇸</span> Private Clients — España</a>')
    # mobile menu (same links without role)
    h = h.replace('<a href="/es/seguro-hogar-espana/">Seguro de hogar</a>',
                  f'<a href="/es/seguro-hogar-espana/">Seguro de hogar</a>\n      <a href="{HOGAR}">Hogar de alto valor</a>', 1)
    h = h.replace('<a href="/es/seguro-responsabilidad-civil-espana/">Responsabilidad civil</a>',
                  f'<a href="/es/seguro-responsabilidad-civil-espana/">Responsabilidad civil</a>\n      <a href="{RC}">RC terapeutas, yoga y pilates</a>', 1)
    h = h.replace('<a href="/es/seguro-colecciones-espana/">Colecciones</a>',
                  f'<a href="{JOYAS}">Joyas y relojes</a>\n      <a href="/es/seguro-colecciones-espana/">Colecciones</a>', 1)
    return h


def patch_common(h):
    h = h.replace("p. ej., +52 55 1234 5678 o +351 912 345 678", "p. ej., +34 612 345 678 o +351 912 345 678")
    h = h.replace("esté usted en Lisboa, en Madrid, en Bogotá o en Ciudad de México",
                  "esté usted en Madrid, en Barcelona, en Marbella o en Lisboa")
    return add_form_options(patch_nav(h))


def callout(label, text, href, link):
    return (f'<div class="callout" data-es-focus><span class="callout-label">{label}</span>'
            f'{text} <a href="{href}">{link} &rarr;</a></div>')


CALLOUTS = {
    "seguros-espana": callout("Vive o trabaja en España",
                              "Hogar de alto valor, joyas y relojes en póliza independiente y responsabilidad civil para terapeutas, profesores de yoga y pilates:",
                              "/es/#en-espana", "lo que más nos piden en España"),
    "seguro-hogar-espana": callout("¿Una vivienda de alto valor?",
                                   "Villas, áticos y casas con arte o joyas, con Hiscox y Chubb:",
                                   HOGAR, "seguro de hogar de alto valor en España"),
    "seguro-responsabilidad-civil-espana": callout("¿Busca la responsabilidad civil de su profesión?",
                                                   "Terapeutas, profesores de yoga, pilates y tai chi, masajistas y centros:",
                                                   RC, "RC para terapeutas, yoga y pilates"),
    "seguro-joyas-relojes-limite-por-objeto": callout("En España, sin seguro de hogar",
                                                      "Si reside en España, puede asegurar joyas y relojes en una póliza propia de Hiscox:",
                                                      JOYAS, "seguro de joyas y relojes en España"),
    "seguro-casa-vacaciones-espana": callout("Joyas y relojes en la casa",
                                             "La póliza Holiday Home no los cubre. Si reside en España, tienen su propia póliza:",
                                             JOYAS, "seguro de joyas y relojes en España"),
}


def add_callout(slug, h):
    if "data-es-focus" in h:
        return h
    box = CALLOUTS[slug]
    # after the first body heading's first paragraph
    m = re.search(r'(<section class="section[^"]*"[^>]*>\s*<div class="container[^"]*article-body[^"]*">\s*<h2[^>]*>.*?</h2>\s*<p>.*?</p>)', h, re.S)
    if not m:
        m = re.search(r'(<h2[^>]*>(?:(?!</h2>).)*</h2>\s*<p>.*?</p>)', h[h.index("<main"):], re.S)
        pos = h.index("<main") + m.end()
    else:
        pos = m.end()
    return h[:pos] + "\n    " + box + h[pos:]


# ------------------------------------------------------------------- the hub
HUB_TITLE = "Seguros en España y Portugal · Hogar, joyas y RC profesional | Adler &amp; Rochefort"
HUB_DESC = ("Mediador de seguros en España y Portugal: hogar de alto valor con Hiscox y Chubb, joyas y relojes, "
            "responsabilidad civil para terapeutas, yoga y pilates, y salud internacional. En español, por escrito.")

HUB_HERO = (
    '<span class="eyebrow">España y Portugal · Mediador de seguros</span>\n'
    '    <h1 id="hero-title">Seguros para su casa,<br><em>sus joyas y su profesión.</em></h1>\n'
    '    <p class="hero-subtitle">Trabajamos con varias aseguradoras — Hiscox y Chubb, entre otras — y las elegimos por sus coberturas '
    'y por cómo gestionan los siniestros, no por el precio. Propuestas por escrito, en español, con un único interlocutor.</p>\n'
    '    <p class="hero-meta">Mediador de seguros registrado · ASF n.º 425591790/3 · Lisboa · Opera en España en libre prestación de servicios</p>')

HUB_SPAIN = """
<section class="section plain" aria-labelledby="en-espana" id="en-espana" data-es-focus>
  <div class="container">
    <span class="eyebrow">España</span>
    <h2 id="en-espana">Lo que más nos piden en España</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="%(hogar)s">Hogar de alto valor</a></h3>
        <p>Villas, áticos y casas con arte o joyas, con Hiscox y Chubb: suma de reconstrucción, vivienda vacía y el Consorcio.</p>
      </li>
      <li class="hub-item">
        <h3><a href="%(joyas)s">Joyas y relojes, sin seguro de hogar</a></h3>
        <p>Una póliza todo riesgo propia de Hiscox para residentes en España, independiente del seguro de su casa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="%(rc)s">RC para terapeutas, yoga y pilates</a></h3>
        <p>Terapias naturales, masaje, yoga, pilates y tai chi: la actividad bien descrita, desde 250.000 €, propuesta en 48–72 h laborables.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/es/seguro-casa-vacaciones-espana/">Casa de vacaciones</a></h3>
        <p>La póliza Holiday Home de Hiscox para propietarios que viven fuera de España.</p>
      </li>
    </ul>
  </div>
</section>
""" % {"hogar": HOGAR, "joyas": JOYAS, "rc": RC}

HUB_CARDS = """      <li class="hub-item">
        <h3><a href="%(hogar)s">Hogar de alto valor en España</a></h3>
        <p>Hiscox y Chubb: reconstrucción, arte y joyas, casa vacía y Consorcio.</p>
      </li>
      <li class="hub-item">
        <h3><a href="%(joyas)s">Joyas y relojes</a></h3>
        <p>Póliza todo riesgo de Hiscox, independiente del seguro de hogar, para residentes en España.</p>
      </li>
      <li class="hub-item">
        <h3><a href="%(rc)s">RC terapeutas, yoga y pilates</a></h3>
        <p>Responsabilidad civil de la actividad y profesional, desde 250.000 €.</p>
      </li>
""" % {"hogar": HOGAR, "joyas": JOYAS, "rc": RC}


def patch_hub(h):
    if 'id="en-espana"' in h:
        return h
    h = sub1(r"<title>[^<]*</title>", f"<title>{HUB_TITLE}</title>", h)
    plain_title = html.unescape(HUB_TITLE)
    h = meta(h, "name", "description", HUB_DESC)
    for attr in ("property", "name"):
        h = meta(h, attr, "og:title", plain_title)
        h = meta(h, attr, "og:description", HUB_DESC)
        h = meta(h, attr, "twitter:title", plain_title)
        h = meta(h, attr, "twitter:description", HUB_DESC)
    h = sub1(r'(<section class="hero"[^>]*>\s*<div class="hero-inner">\s*)<span class="eyebrow">.*?<p class="hero-meta">.*?</p>',
             lambda m: m.group(1) + HUB_HERO, h)
    # Spain block right after the author box
    m = re.search(r'<!-- AR-AUTHOR -->\n<div class="ar-author">.*?</div></div>\n', h, re.S)
    h = h[:m.end()] + HUB_SPAIN + h[m.end():]
    # Latin-American positioning stays, as the secondary audience
    h = h.replace('<h2 id="quienes">Un mediador para familias latinoamericanas en Portugal y España</h2>',
                  '<h2 id="quienes">También para familias que llegan de América Latina</h2>', 1)
    h = sub1(r'(<h3 id="espana"><a href="/es/seguros-espana/">España</a></h3>\s*<ul class="hub-list">\n)',
             lambda m: m.group(1) + HUB_CARDS, h)
    return h


def main():
    for p in PAGES:
        print("built", build(p))
    changed = 0
    files = sorted(os.path.join(r, "index.html") for r, _, fs in os.walk(ES) if "index.html" in fs)
    for f in files:
        if True:
            h = open(f, encoding="utf-8").read()
            h2 = patch_common(h)
            slug = os.path.basename(os.path.dirname(f))
            if f == os.path.join(ES, "index.html"):
                h2 = patch_hub(h2)
            elif slug in CALLOUTS and os.path.dirname(os.path.dirname(f)) == ES:
                h2 = add_callout(slug, h2)
            if h2 != h:
                open(f, "w", encoding="utf-8").write(h2)
                changed += 1
    print("patched", changed, "files")


if __name__ == "__main__":
    main()
