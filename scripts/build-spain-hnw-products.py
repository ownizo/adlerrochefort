#!/usr/bin/env python3
"""
Spain HNW product pages, November 2026.

  Luxury cars (new)    /en/luxury-car-insurance-spain/ · /de/luxusauto-versicherung-spanien/ · /es/seguro-coche-lujo-espana/
  Classic cars         /en/classic-car-insurance-spain/ · /de/oldtimerversicherung-spanien/ · /es/seguro-vehiculos-clasicos-espana/  (rewritten)
  Jewellery (new EN)   /en/jewellery-watch-insurance-spain/  (paired with /es/seguro-joyas-relojes-espana/)

Content: scripts/spain-hnw-products.data.py. Shells: the live classic-car page
of each language, so chrome, nav, forms and footer stay current. The classic
pages are their own shell, so this script can be re-run safely.

Run from anywhere: python3 scripts/build-spain-hnw-products.py
"""
import json, re, runpy
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
D = runpy.run_path(str(ROOT / 'scripts/spain-hnw-products.data.py'))
URLS = D['URLS']
SITE = 'https://adlerrochefort.com'
HREFLANG = {'pt': 'pt-PT', 'en': 'en-GB', 'de': 'de', 'nl': 'nl', 'fr': 'fr', 'es': 'es', 'it': 'it-IT', 'pl': 'pl-PL',
            'se': 'sv-SE', 'dk': 'da-DK', 'zh': 'zh-CN', 'il': 'he-IL'}
SEG = {'pt': 'pt', 'en': 'en', 'de': 'de', 'nl': 'nl', 'fr': 'fr', 'es': 'es', 'it': 'it', 'pl': 'pl', 'sv': 'se', 'da': 'dk', 'zh': 'zh', 'he': 'il'}
HOME = {'pt': '/', 'en': '/en/', 'nl': '/nl/', 'fr': '/fr/', 'de': '/de/', 'es': '/es/', 'it': '/it/',
        'pl': '/pl/', 'sv': '/se/', 'da': '/dk/', 'zh': '/zh/', 'he': '/il/'}
NOTE = {'en': 'home page', 'de': 'Startseite', 'es': 'página de inicio'}
HUB = {'en': ('/en/private-clients-spain/', 'Private clients in Spain'),
       'de': ('/de/private-clients-spanien/', 'Private Clients in Spanien'),
       'es': ('/es/seguros-espana/', 'España')}
T = {
    'en': dict(home='Home', cta='Request a written proposal', faq='Frequently asked questions', guides='Guides worth reading', related='Related cover',
               ask_h='What we will ask for your quote'),
    'de': dict(home='Startseite', cta='Schriftliches Angebot anfragen', faq='Häufige Fragen', guides='Weiterlesen', related='Passende weitere Deckung',
               ask_h='Welche Angaben wir für Ihr Angebot benötigen'),
    'es': dict(home='Inicio', faq='Preguntas frecuentes', related='Páginas relacionadas'),
}
SHELL = {lang: ROOT / 'public' / URLS['classic'][lang].strip('/') / 'index.html' for lang in ('en', 'de', 'es')}


def strip(s):
    s = re.sub(r'<[^>]+>', '', s)
    for a, b in (('&mdash;', '—'), ('&amp;', '&'), ('&rsquo;', '’'), ('&nbsp;', ' ')):
        s = s.replace(a, b)
    return s


def attr(s):
    return s.replace('&', '&amp;').replace('&amp;amp;', '&amp;').replace('"', '&quot;')


def one(pattern, repl, s, flags=re.S):
    out, n = re.subn(pattern, repl, s, count=1, flags=flags)
    if n != 1:
        raise SystemExit(f'pattern not found: {pattern[:80]}')
    return out


def head(s, lang, urls, c, brand=None):
    url = SITE + urls[lang]
    s = one(r'<title>.*?</title>', lambda m: f'<title>{attr(c["title"])}</title>', s)
    s = one(r'<meta name="description" content="[^"]*">', lambda m: f'<meta name="description" content="{attr(c["desc"])}">', s)
    s = re.sub(r'<meta name="keywords" content="[^"]*">', lambda m: f'<meta name="keywords" content="{attr(c["kw"])}">', s, count=1)
    s = one(r'<link rel="canonical" href="[^"]*">', lambda m: f'<link rel="canonical" href="{url}">', s)
    s = re.sub(r'\n\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">', '', s)
    alts = ''.join(f'\n  <link rel="alternate" hreflang="{HREFLANG[l]}" href="{SITE}{u}">' for l, u in urls.items())
    xd = urls.get('en') or urls[lang]
    alts += f'\n  <link rel="alternate" hreflang="x-default" href="{SITE}{xd}">'
    s = s.replace(f'<link rel="canonical" href="{url}">', f'<link rel="canonical" href="{url}">' + alts, 1)
    s = one(r'<meta property="og:url" content="[^"]*">', lambda m: f'<meta property="og:url" content="{url}">', s)
    for k in ('og:title', 'og:description'):
        v = c['title'] if k.endswith('title') else c['desc']
        s = one(rf'<meta property="{k}" content="[^"]*">', lambda m: f'<meta property="{k}" content="{attr(v)}">', s)
    for k in ('twitter:title', 'twitter:description'):
        v = c['title'] if k.endswith('title') else c['desc']
        s = one(rf'<meta name="{k}" content="[^"]*">', lambda m: f'<meta name="{k}" content="{attr(v)}">', s)
    s = re.sub(r'\{"@type": "WebPage", "@id": "[^"]*", "url": "[^"]*", "reviewedBy": (\{[^}]*\}), "dateModified": "[^"]*"\}',
               lambda m: f'{{"@type": "WebPage", "@id": "{url}", "url": "{url}", "reviewedBy": {m.group(1)}, "dateModified": "2026-11-18"}}', s, count=1)
    hub = HUB[lang]
    crumbs =[(T[lang]['home'], f'/{lang}/'), (hub[1], hub[0]), (c['crumb'], urls[lang])]
    svc = {"@type": "Service", "@id": url + "#service", "name": strip(c['h1']), "description": strip(c['desc']),
           "url": url, "areaServed": {"@type": "Country", "name": "Spain"}, "provider": {"@id": SITE + "/#organization"}}
    if brand:
        svc["brand"] = {"@type": "Brand", "name": brand}
    graph = {"@context": "https://schema.org", "@graph": [svc,
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}} for q, a in c['faq']]},
        {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": strip(n), "item": SITE + h} for i, (n, h) in enumerate(crumbs)]}]}
    s = one(r'<script type="application/ld\+json">\{"@context": "https://schema.org", "@graph": \[\{"@type": "Service".*?</script>',
            lambda m: '<script type="application/ld+json">' + json.dumps(graph, ensure_ascii=False) + '</script>', s)
    return s


def langsel(s, lang, urls):
    pat = re.compile(r'<li><a href="[^"]*" lang="([^"]*)" dir="([^"]*)" hreflang="([^"]*)"(?: aria-current="true")?>(<span>[^<]*</span>)(?:<span class="ar-langsel-note">[^<]*</span>)?</a></li>')

    def rep(m):
        code = m.group(1).split('-')[0]
        seg = SEG.get(code, code)
        if seg in urls:
            cur = ' aria-current="true"' if seg == lang else ''
            return f'<li><a href="{urls[seg]}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}"{cur}>{m.group(4)}</a></li>'
        return f'<li><a href="{HOME[code]}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}">{m.group(4)}<span class="ar-langsel-note">{NOTE[lang]}</span></a></li>'
    return pat.sub(rep, s)


def wa_text(s):
    return s.replace('%', '%25').replace(' ', '%20').replace(',', '%2C').replace("'", '%27')


def render_lp(lang, urls, c, slug, brand=None):
    t = T[lang]
    s = SHELL[lang].read_text(encoding='utf-8')
    old_url = URLS['classic'][lang]
    s = head(s, lang, urls, c, brand)
    s = langsel(s, lang, urls)
    main = re.search(r'<main class="lp-main">.*?</main>', s, re.S).group(0)
    author = re.search(r'<!-- AR-AUTHOR -->\n<div class="ar-author">.*?</p></div></div>', main, re.S).group(0)
    langpol = re.search(r'<div class="ar-langpolicy-band">.*?</div>', main, re.S).group(0)
    wa = re.search(r'<a href="https://wa\.me/351928226570\?text=[^"]*"( target="_blank" rel="noopener" class="lp-btn-wa">.*?</a>)', main, re.S)
    wa_btn = f'<a href="https://wa.me/351928226570?text={wa_text(c["wa"])}"{wa.group(1)}'
    form = re.search(r'<section class="lp-form-section" id="quote-form">.*?\n</section>', main, re.S).group(0)
    disc = re.search(r'<section class="lp-disclaimer">.*?</section>', main, re.S).group(0)
    old_slug = re.search(r'id="arqc-n-([a-z]+-[a-z0-9-]+?)-"', form).group(1)
    form = form.replace(old_slug, f'{lang}-{slug}')
    form = one(r'<h2>[^<]*</h2>', lambda m: f'<h2>{c["form_h2"]}</h2>', form)
    form = one(r'(</h2>\n\s*<p class="lp-form-sub">)[^<]*(</p>)', lambda m: m.group(1) + c['form_sub'] + m.group(2), form)
    form = one(r'(<p class="lp-form-sub" data-ins-note>)[^<]*(</p>)', lambda m: m.group(1) + c['note'] + m.group(2), form)
    form = one(r'name="source" value="[^"]*"', lambda m: f'name="source" value="quick-contact:{lang}/{slug}"', form)
    form = one(r'name="source_url" value="[^"]*"', lambda m: f'name="source_url" value="{SITE}{urls[lang]}"', form)
    form = re.sub(r'name="tipo-seguro" value="[^"]*"', lambda m: f'name="tipo-seguro" value="{c["tipo"]}"', form)
    form = re.sub(r'name="versicherungsart" value="[^"]*"', lambda m: f'name="versicherungsart" value="{c["tipo"]}"', form)
    form = one(r'(<div class="arqi">\s*<h3>)[^<]*(</h3>)', lambda m: m.group(1) + t['ask_h'] + m.group(2), form)
    form = one(r'<ul><li>.*?</li></ul>', lambda m: '<ul>' + ''.join(f'<li>{x}</li>' for x in c['ask']) + '</ul>', form)
    links = ''.join(f'\n          <a href="{h}">{n}</a>' for h, n in c['related'])
    form = one(r'(<div class="quoteSuccess-crosssell-links">).*?(\n        </div>)', lambda m: m.group(1) + links + m.group(2), form)

    cards = '\n'.join(f'    <div class="lp-card">\n      <h2 id="s{i+1}">{h}</h2>\n      {b}\n    </div>' for i, (h, b) in enumerate(c['sections']))
    faq = '\n'.join(f'    <div class="lp-faq-item">\n      <h3>{q}</h3>\n      <p>{a}</p>\n    </div>' for q, a in c['faq'])
    guides = ''
    if c.get('guides'):
        guides = (f'    <div class="lp-card">\n      <h2>{t["guides"]}</h2>\n      <ul class="lp-guides">\n'
                  + ''.join(f'        <li><a href="{h}">{n}</a></li>\n' for h, n in c['guides']) + '      </ul>\n    </div>\n')
    related = ''.join(f'        <a href="{h}"><strong>{n}</strong></a>\n' for h, n in c['related'])
    hub = HUB[lang]
    new_main = f'''<main class="lp-main">

<div class="lp-crumb"><a href="/{lang}/">{t['home']}</a><span>/</span><a href="{hub[0]}">{hub[1]}</a><span>/</span>{c['crumb']}</div>

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
      {c['trust']}</div>
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
{disc}

</main>'''
    s = s.replace(main, new_main, 1)
    if urls[lang] != old_url:
        assert old_url not in s.replace(f'href="{old_url}"', ''), f'{lang}: shell URL left behind'
    return s


def render_es(urls, c, slug, brand=None):
    s = SHELL['es'].read_text(encoding='utf-8')
    old_url = URLS['classic']['es']
    s = head(s, 'es', urls, c, brand)
    s = langsel(s, 'es', urls)
    s = one(r'(<li><span aria-current="page">)[^<]*(</span></li>)', lambda m: m.group(1) + c['crumb'] + m.group(2), s)
    s = one(r'(<span class="eyebrow">)[^<]*(</span>\n\s*<h1 id="hero-title">)[^<]*(</h1>)', lambda m: m.group(1) + c['eyebrow'] + m.group(2) + c['h1'] + m.group(3), s)
    s = one(r'(<p class="hero-subtitle">)[^<]*(</p>)', lambda m: m.group(1) + c['sub'] + m.group(2), s)
    s = one(r'(<p class="hero-meta">)[^<]*(</p>)', lambda m: m.group(1) + c['meta'] + m.group(2), s)
    # sections
    start = s.index('<section class="section plain" aria-labelledby="s1">')
    end = s.index('<section class="section" aria-labelledby="faq-title"')
    secs = '\n'.join(f'''<section class="section {'plain' if i % 2 == 0 else 'tint'}" aria-labelledby="s{i+1}">
  <div class="container narrow article-body">
    <h2 id="s{i+1}">{h}</h2>
    {b}
  </div>
</section>''' for i, (h, b) in enumerate(c['sections']))
    s = s[:start] + secs + '\n\n' + s[end:]
    s = one(r'(<h2 id="faq-title">)[^<]*(</h2>)', lambda m: m.group(1) + c['h1'] + ' — preguntas' + m.group(2), s)
    faq = '\n'.join(f'''      <div class="faq-item">
        <h3>{q}</h3>
        <div class="faq-answer"><p>{a}</p></div>
      </div>''' for q, a in c['faq'])
    s = one(r'(<div class="faq-list">\n).*?(\n    </div>\n  </div>\n</section>)', lambda m: m.group(1) + faq + m.group(2), s)
    rel = '\n'.join(f'      <li><a class="text-link" href="{h}">{n}</a></li>' for h, n in c['related'])
    s = one(r'(<ul class="related">\n).*?(\n    </ul>)', lambda m: m.group(1) + rel + m.group(2), s)
    s = one(r'(<h2 id="lead-title">[^<]*</h2>\n\s*<p class="form-intro">)[^<]*(</p>)', lambda m: m.group(1) + c['form_intro'] + m.group(2), s)
    s = one(r'(<p class="form-intro" data-ins-note>)[^<]*(</p>)', lambda m: m.group(1) + c['note'] + m.group(2), s)
    s = one(r'(<input type="hidden" name="source" value=")[^"]*(">)', lambda m: m.group(1) + slug + m.group(2), s)
    s = one(r'(<input type="hidden" name="subject" value=")[^"]*(">)', lambda m: m.group(1) + c['subject'] + m.group(2), s)
    s = one(r'(<textarea id="f-message"[^>]*\n\s*placeholder=")[^"]*(")', lambda m: m.group(1) + c['placeholder'] + m.group(2), s)
    # no fixed response times, no phone calls (owner decisions)
    s = s.replace('<p class="form-footnote">Respondemos en un día laborable. La solicitud no le compromete a nada.</p>',
                  '<p class="form-footnote">Al tratarse de propuestas específicas que requieren un análisis detallado del riesgo, los plazos de respuesta pueden variar. La solicitud no le compromete a nada.</p>')
    s = s.replace('<p>Le responderemos en un día laborable, por escrito y en español. Si es urgente, llame al +351 928 226 570.</p>',
                  '<p>Le responderemos por escrito y en español. Al tratarse de propuestas específicas que requieren un análisis detallado del riesgo, los plazos de respuesta pueden variar.</p>')
    if urls['es'] != old_url:
        assert old_url not in s.replace(f'href="{old_url}"', ''), 'es: shell URL left behind'
    return s


def write(url, html):
    p = ROOT / 'public' / url.strip('/') / 'index.html'
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(html, encoding='utf-8')
    print('wrote', url)


if __name__ == '__main__':
    # Build every page from the shells as they are BEFORE this run overwrites the classic pages.
    out = {}
    lux, cla = URLS['luxury'], URLS['classic']
    for lang in ('en', 'de'):
        out[lux[lang]] = render_lp(lang, lux, D['LUXURY'][lang], lux[lang].strip('/').split('/')[-1])
        out[cla[lang]] = render_lp(lang, cla, D['CLASSIC'][lang], cla[lang].strip('/').split('/')[-1], brand='Hiscox')
    out[lux['es']] = render_es(lux, D['LUXURY']['es'], 'seguro-coche-lujo-espana')
    out[cla['es']] = render_es(cla, D['CLASSIC']['es'], 'seguro-vehiculos-clasicos-espana', brand='Hiscox')
    jw = URLS['jewellery']
    out[jw['en']] = render_lp('en', jw, D['JEWELLERY_EN'], 'jewellery-watch-insurance-spain')
    for url, html in out.items():
        write(url, html)
