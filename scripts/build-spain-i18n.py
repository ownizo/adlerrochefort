#!/usr/bin/env python3
"""
Spain HNW lines in every language — November 2026.

New pages (PT, NL, FR, IT, PL, SV, DA, ZH, HE):
  luxury cars in Spain, classic cars in Spain, and jewellery & watches in
  Spain for PT and FR (the other languages already had one).
Existing pages updated in every language:
  holiday homes in Spain  -> "when nobody is in the house" section
  high-value homes Spain  -> from EUR 1 million (title, description, hero, FAQ)
  jewellery in Spain      -> habitual residence in Spain section
  therapists liability    -> non-conventional therapies + tai chi (title, H1, section)
Plus: one hreflang group of 12 languages per product, language selectors,
and the Spain product pages for EN/DE/ES re-rendered with the full groups
(scripts/build-spain-hnw-products.py).

Content: scripts/spain-i18n/<lang>.py. Shells: a live page of the same
language with a form (see SHELL). Idempotent: new pages are rebuilt from the
shells; updates to existing pages check for their own markers first.

Run: python3 scripts/build-spain-i18n.py
"""
import json, re, runpy
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'
SITE = 'https://adlerrochefort.com'
LANGS = ['pt', 'en', 'de', 'nl', 'fr', 'es', 'it', 'pl', 'se', 'dk', 'zh', 'il']
HREF = {'pt': 'pt-PT', 'en': 'en-GB', 'de': 'de', 'nl': 'nl', 'fr': 'fr', 'es': 'es', 'it': 'it-IT', 'pl': 'pl-PL',
        'se': 'sv-SE', 'dk': 'da-DK', 'zh': 'zh-CN', 'il': 'he-IL'}
LANGATTR2SEG = {'pt': 'pt', 'en': 'en', 'de': 'de', 'nl': 'nl', 'fr': 'fr', 'es': 'es', 'it': 'it', 'pl': 'pl', 'sv': 'se', 'da': 'dk', 'zh': 'zh', 'he': 'il'}
HOMEURL = {l: ('/' if l == 'pt' else f'/{l}/') for l in LANGS}
ROOTLABEL = {'pt': 'Início', 'en': 'Home', 'de': 'Startseite', 'nl': 'Home', 'fr': 'Accueil', 'es': 'Inicio', 'it': 'Home', 'pl': 'Strona główna',
             'se': 'Start', 'dk': 'Forside', 'zh': '首页', 'il': 'דף הבית'}

URLS = {
    'luxury': {'pt': '/seguros/carros-luxo-espanha/', 'en': '/en/luxury-car-insurance-spain/', 'de': '/de/luxusauto-versicherung-spanien/',
               'nl': '/nl/luxe-auto-verzekering-spanje/', 'fr': '/fr/assurance-voiture-luxe-espagne/', 'es': '/es/seguro-coche-lujo-espana/',
               'it': '/it/assicurazione-auto-lusso-spagna/', 'pl': '/pl/ubezpieczenie-samochodu-luksusowego-hiszpania/',
               'se': '/se/lyxbilsforsakring-spanien/', 'dk': '/dk/luksusbil-forsikring-spanien/', 'zh': '/zh/luxury-car-insurance-spain/',
               'il': '/il/luxury-car-insurance-spain/'},
    'classic': {'pt': '/seguros/carros-classicos-espanha/', 'en': '/en/classic-car-insurance-spain/', 'de': '/de/oldtimerversicherung-spanien/',
                'nl': '/nl/klassieke-auto-verzekering-spanje/', 'fr': '/fr/assurance-voitures-collection-espagne/', 'es': '/es/seguro-vehiculos-clasicos-espana/',
                'it': '/it/assicurazione-auto-epoca-spagna/', 'pl': '/pl/ubezpieczenie-samochodu-klasycznego-hiszpania/',
                'se': '/se/veteranbilsforsakring-spanien/', 'dk': '/dk/veteranbilforsikring-spanien/', 'zh': '/zh/classic-car-insurance-spain/',
                'il': '/il/classic-car-insurance-spain/'},
    'jewellery': {'pt': '/seguros/joias-relogios-espanha/', 'en': '/en/jewellery-watch-insurance-spain/', 'nl': '/nl/sieraden-horloges-verzekering-spanje/',
                  'fr': '/fr/assurance-bijoux-montres-espagne/', 'es': '/es/seguro-joyas-relojes-espana/', 'it': '/it/assicurazione-gioielli-orologi-spagna/',
                  'pl': '/pl/ubezpieczenie-bizuterii-zegarkow-hiszpania/', 'se': '/se/smycken-klockor-forsakring-spanien/',
                  'dk': '/dk/smykker-ure-forsikring-spanien/', 'zh': '/zh/jewellery-watch-insurance-spain/', 'il': '/il/jewellery-watch-insurance-spain/'},
    'home': {'pt': '/seguros/habitacao-espanha/', 'en': '/en/home-insurance-spain/', 'de': '/de/hausversicherung-spanien/', 'nl': '/nl/woonverzekering-spanje/',
             'fr': '/fr/assurance-residence-grande-valeur-espagne/', 'es': '/es/seguro-hogar-alto-valor-espana/', 'it': '/it/assicurazione-casa-alto-valore-spagna/',
             'pl': '/pl/ubezpieczenie-domu-hiszpania/', 'se': '/se/hemforsakring-spanien/', 'dk': '/dk/husforsikring-spanien/', 'zh': '/zh/home-insurance-spain/',
             'il': '/il/home-insurance-spain/'},
    'holiday': {'pt': '/seguros/casa-ferias-espanha/', 'en': '/en/holiday-home-insurance-spain/', 'de': '/de/ferienhausversicherung-spanien/',
                'nl': '/nl/vakantiewoning-verzekering-spanje/', 'fr': '/fr/assurance-residence-secondaire-espagne/', 'es': '/es/seguro-casa-vacaciones-espana/',
                'it': '/it/assicurazione-casa-vacanze-spagna/', 'pl': '/pl/ubezpieczenie-domu-wakacyjnego-hiszpania/', 'se': '/se/fritidshusforsakring-spanien/',
                'dk': '/dk/feriehusforsikring-spanien/', 'zh': '/zh/holiday-home-insurance-spain/', 'il': '/il/holiday-home-insurance-spain/'},
}
NEW_LANGS = ['pt', 'nl', 'fr', 'it', 'pl', 'se', 'dk', 'zh', 'il']
SHELL = {'pt': URLS['holiday']['pt'], 'fr': URLS['holiday']['fr'],
         **{l: URLS['jewellery'][l] for l in ('nl', 'it', 'pl', 'se', 'dk', 'zh', 'il')}}
FAMILY = {'pt': 'pt', 'fr': 'lp', 'en': 'lp', **{l: 'cluster' for l in ('de', 'nl', 'es', 'it', 'pl', 'se', 'dk', 'zh', 'il')}}
SEE_ALSO = {'pt': ('Ver também', 'Residências de elevado valor — Espanha'), 'nl': ('Zie ook', 'Hoogwaardige woningen in Spanje'),
            'fr': ('Voir aussi', 'Résidences de grande valeur — Espagne'), 'it': ('Vedi anche', 'Case di pregio in Spagna'),
            'pl': ('Zobacz też', 'Domy o wysokiej wartości w Hiszpanii'), 'se': ('Se även', 'Exklusiva bostäder i Spanien'),
            'dk': ('Se også', 'Eksklusive boliger i Spanien'), 'zh': ('另请参阅', '西班牙高价值住宅'), 'il': ('ראו גם', 'בתים יוקרתיים בספרד')}
FAQ_TITLE = {'nl': 'Veelgestelde vragen', 'it': 'Domande frequenti', 'pl': 'Najczęstsze pytania', 'se': 'Vanliga frågor',
             'dk': 'Ofte stillede spørgsmål', 'zh': '常见问题', 'il': 'שאלות נפוצות'}
LEAD = {  # form heading and intro on the new car pages (the shells are jewellery pages)
    'nl': ('Vraag een schriftelijk voorstel aan', 'Vertel ons welke auto, de waarde en wie hem rijdt. Wij antwoorden schriftelijk met een voorstel.'),
    'it': ('Richieda una proposta scritta', 'Ci indichi l’auto, il valore e chi la guida. Le rispondiamo per iscritto con una proposta.'),
    'pl': ('Poproś o pisemną propozycję', 'Prosimy podać samochód, jego wartość i kto nim jeździ. Odpowiemy na piśmie z propozycją.'),
    'se': ('Begär ett skriftligt förslag', 'Berätta vilken bil det gäller, värdet och vem som kör. Vi svarar skriftligt med ett förslag.'),
    'dk': ('Bed om et skriftligt forslag', 'Fortæl os om bilen, værdien og hvem der kører den. Vi svarer skriftligt med et forslag.'),
    'zh': ('申请书面方案', '请告诉我们车辆、价值以及由谁驾驶。我们将以书面形式回复方案。'),
    'il': ('בקשו הצעה בכתב', 'ספרו לנו על הרכב, שוויו ומי נוהג בו. נשיב בכתב עם הצעה.'),
}
PT_FORM_H2 = {'luxury': 'Falar sobre o seu automóvel', 'classic': 'Falar sobre o seu automóvel', 'jewellery': 'Falar sobre as suas joias'}

C = {l: runpy.run_path(str(ROOT / f'scripts/spain-i18n/{l}.py')) for l in NEW_LANGS}
X = runpy.run_path(str(ROOT / 'scripts/spain-i18n/en_de_es.py'))


# ---------------------------------------------------------------------------
def path(url):
    return PUB / url.strip('/') / 'index.html'


def rd(url):
    return path(url).read_text(encoding='utf-8')


def wr(url, s):
    p = path(url)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(s, encoding='utf-8')


def strip(s):
    s = re.sub(r'<[^>]+>', '', s)
    for a, b in (('&mdash;', '—'), ('&amp;', '&'), ('&rsquo;', '’'), ('&nbsp;', ' ')):
        s = s.replace(a, b)
    return s


def attr(s):
    return s.replace('&amp;', '&').replace('&', '&amp;').replace('"', '&quot;')


def sub1(pattern, repl, s, required=True):
    out, n = re.subn(pattern, repl, s, count=1, flags=re.S)
    if required and n != 1:
        raise SystemExit(f'not found: {pattern[:90]}')
    return out


def fill(html, lang):
    for k, prod in (('{LUX}', 'luxury'), ('{CLA}', 'classic'), ('{JEW}', 'jewellery'), ('{HOME}', 'home'), ('{HOL}', 'holiday')):
        html = html.replace(k, URLS[prod].get(lang, HOMEURL[lang]))
    return html


# ---------------------------------------------------------------------------
# head: title, meta, hreflang group, og/twitter, JSON-LD, language selector
def set_meta(s, c, url=None):
    s = sub1(r'<title>.*?</title>', lambda m: f'<title>{attr(c["title"])}</title>', s)
    s = sub1(r'<meta name="description" content="[^"]*">', lambda m: f'<meta name="description" content="{attr(c["desc"])}">', s)
    if c.get('kw'):
        s = sub1(r'<meta name="keywords" content="[^"]*">', lambda m: f'<meta name="keywords" content="{attr(c["kw"])}">', s, required=False)
    for k, v in (('og:title', c['title']), ('og:description', c['desc'])):
        s = sub1(rf'<meta property="{k}" content="[^"]*">', lambda m: f'<meta property="{k}" content="{attr(v)}">', s, required=False)
    for k, v in (('twitter:title', c['title']), ('twitter:description', c['desc'])):
        s = sub1(rf'<meta name="{k}" content="[^"]*">', lambda m: f'<meta name="{k}" content="{attr(v)}">', s, required=False)
    if url:
        s = sub1(r'<link rel="canonical" href="[^"]*">', lambda m: f'<link rel="canonical" href="{SITE}{url}">', s)
        s = sub1(r'<meta property="og:url" content="[^"]*">', lambda m: f'<meta property="og:url" content="{SITE}{url}">', s, required=False)
    return s


def set_hreflang(s, lang, group):
    url = group[lang]
    s = re.sub(r'\n[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">', '', s)
    alts = ''.join(f'\n<link rel="alternate" hreflang="{HREF[l]}" href="{SITE}{u}">' for l, u in group.items())
    alts += f'\n<link rel="alternate" hreflang="x-default" href="{SITE}{group.get("en", url)}">'
    return sub1(r'<link rel="canonical" href="[^"]*">', lambda m: m.group(0) + alts, s)


def set_langsel(s, lang, group):
    note_m = re.search(r'class="ar-langsel-note">([^<]*)<', s)
    note = note_m.group(1) if note_m else ''
    pat = re.compile(r'<li><a href="[^"]*" lang="([^"]*)" dir="([^"]*)" hreflang="([^"]*)"(?: aria-current="true")?>(<span>[^<]*</span>)(?:<span class="ar-langsel-note">[^<]*</span>)?</a></li>')

    def rep(m):
        seg = LANGATTR2SEG.get(m.group(1).split('-')[0])
        if seg is None:
            return m.group(0)
        if seg in group:
            cur = ' aria-current="true"' if seg == lang else ''
            return f'<li><a href="{group[seg]}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}"{cur}>{m.group(4)}</a></li>'
        n = f'<span class="ar-langsel-note">{note}</span>' if note else ''
        return f'<li><a href="{HOMEURL[seg]}" lang="{m.group(1)}" dir="{m.group(2)}" hreflang="{m.group(3)}">{m.group(4)}{n}</a></li>'
    return pat.sub(rep, s)


DROP = {'BreadcrumbList', 'WebPage', 'FAQPage', 'Service', 'Article', 'BlogPosting', 'Product', 'ItemList'}


def set_jsonld(s, lang, url, c, brand=None):
    def clean(m):
        raw = m.group(1)
        try:
            d = json.loads(raw)
        except Exception:
            return m.group(0)
        if isinstance(d, dict) and d.get('@type') in DROP:
            return ''
        if isinstance(d, dict) and '@graph' in d:
            keep = [n for n in d['@graph'] if n.get('@type') not in DROP]
            if not keep:
                return ''
            d['@graph'] = keep
            return '<script type="application/ld+json">' + json.dumps(d, ensure_ascii=False) + '</script>'
        return m.group(0)
    s = re.sub(r'<script type="application/ld\+json">(.*?)</script>\n?', clean, s, flags=re.S)
    full = SITE + url
    svc = {"@type": "Service", "@id": full + "#service", "name": strip(c['h1']), "description": strip(c['desc']), "url": full,
           "areaServed": {"@type": "Country", "name": "Spain"}, "provider": {"@id": SITE + "/#organization"}}
    if brand:
        svc["brand"] = {"@type": "Brand", "name": brand}
    graph = {"@context": "https://schema.org", "@graph": [svc,
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(fill(a, lang))}} for q, a in c['faq']]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": ROOTLABEL[lang], "item": SITE + HOMEURL[lang]},
            {"@type": "ListItem", "position": 2, "name": strip(c['crumb']), "item": full}]}]}
    return s.replace('</head>', '<script type="application/ld+json">' + json.dumps(graph, ensure_ascii=False) + '</script>\n</head>', 1)


# ---------------------------------------------------------------------------
# section / FAQ markup per template family
def sec_html(family, i, h, body, lang):
    body = fill(body, lang)
    if family == 'cluster':
        return (f'<section class="section {"plain" if i % 2 == 0 else "tint"}" aria-labelledby="s{i+1}">\n  <div class="container narrow article-body">\n'
                f'    <h2 id="s{i+1}">{h}</h2>\n    {body}\n  </div>\n</section>')
    if family == 'pt':
        style = ' style="background:var(--cream2);max-width:none;"' if i % 2 else ''
        return f'<section class="lp-section"{style}>\n  <h2>{h}</h2>\n  {body}\n</section>'
    return f'    <div class="lp-card">\n      <h2>{h}</h2>\n      {body}\n    </div>'


def faq_html(family, faq, lang):
    if family == 'cluster':
        return '\n'.join(f'      <div class="faq-item">\n        <h3>{q}</h3>\n        <div class="faq-answer"><p>{fill(a, lang)}</p></div>\n      </div>' for q, a in faq)
    if family == 'pt':
        return '\n'.join(f'    <details><summary>{q}</summary><p>{fill(a, lang)}</p></details>' for q, a in faq)
    return '\n'.join(f'    <div class="lp-faq-item">\n      <h3>{q}</h3>\n      <p>{fill(a, lang)}</p>\n    </div>' for q, a in faq)


def related_body(lang, prod):
    nav = C[lang]['NAV']
    order = {'luxury': ['classic', 'jewellery', 'home'], 'classic': ['luxury', 'jewellery', 'home'], 'jewellery': ['home', 'luxury', 'classic']}[prod]
    label = {'luxury': nav['luxury'], 'classic': nav['classic'], 'jewellery': nav['jewel'], 'home': SEE_ALSO[lang][1]}
    items = ''.join(f'<li><a href="{URLS[p][lang]}">{label[p]}</a></li>' for p in order if lang in URLS[p])
    cls = ' class="lp-list"' if lang == 'pt' else ''
    return f'<ul{cls}>{items}</ul>'


# ---------------------------------------------------------------------------
def render_new(lang, prod, c):
    group = URLS[prod]
    url = group[lang]
    family = FAMILY[lang]
    s = rd(SHELL[lang])
    s = set_meta(s, c, url)
    s = set_hreflang(s, lang, group)
    s = set_langsel(s, lang, group)
    s = set_jsonld(s, lang, url, c, brand='Hiscox' if prod == 'classic' else None)
    sections = list(c['sections']) + [(SEE_ALSO[lang][0], related_body(lang, prod))]
    car = prod in ('luxury', 'classic')

    if family == 'cluster':
        s = sub1(r'(<li><span aria-current="page">)[^<]*(</span></li>)', lambda m: m.group(1) + c['crumb'] + m.group(2), s)
        s = sub1(r'(<section class="hero"[^>]*>.*?<span class="eyebrow">)[^<]*(</span>)', lambda m: m.group(1) + c['eyebrow'] + m.group(2), s)
        s = sub1(r'(<h1 id="hero-title">).*?(</h1>)', lambda m: m.group(1) + c['h1'] + m.group(2), s)
        s = sub1(r'(<p class="hero-subtitle">).*?(</p>)', lambda m: m.group(1) + c['sub'] + m.group(2), s)
        hero_end = re.search(r'<section class="hero".*?</section>', s, re.S).end()
        faq_start = re.search(r'<section class="section[^"]*" aria-labelledby="faq-title"', s).start()
        region = s[hero_end:faq_start]
        # property/valuables blocks (criteria, insurer list) do not belong on these pages
        region = re.sub(r'<!-- /?AR-PROPERTY-CRITERIA[^>]*-->\n?|<section class="ar-(?:pcrit|partners-inst)".*?</section>\n?', '', region, flags=re.S)
        out, inserted = [], False
        pos = 0
        new = '\n\n'.join(sec_html(family, i, h, b, lang) for i, (h, b) in enumerate(sections))
        for m in re.finditer(r'<section\b.*?</section>\n?', region, re.S):
            out.append(region[pos:m.start()])
            if '<form' in m.group(0):
                out.append(m.group(0))
            elif not inserted:
                out.append(new + '\n\n')
                inserted = True
            pos = m.end()
        out.append(region[pos:])
        if not inserted:
            out.append('\n' + new + '\n\n')
        s = s[:hero_end] + ''.join(out) + s[faq_start:]
        s = sub1(r'(<h2 id="faq-title">)[^<]*(</h2>)', lambda m: m.group(1) + FAQ_TITLE[lang] + m.group(2), s)
        s = sub1(r'(<div class="faq-list">)(.*?)(</div>\s*</div>\s*</section>)', lambda m: m.group(1) + '\n' + faq_html(family, c['faq'], lang) + '\n    ' + m.group(3), s)
        s = sub1(r'(<ul class="related">).*?(</ul>)', lambda m: m.group(1) + '\n' + '\n'.join(
            f'      <li><a class="text-link" href="{u}">{t}</a></li>' for u, t in re.findall(r'<a href="([^"]+)">([^<]+)</a>', related_body(lang, prod))) + '\n    ' + m.group(2), s, required=False)
    elif family == 'lp':
        s = sub1(r'(<div class="lp-crumb">.*?<span>/</span>)[^<]*(</div>)', lambda m: m.group(1) + c['crumb'] + m.group(2), s)
        s = sub1(r'(<div class="lp-eyebrow">)[^<]*', lambda m: m.group(1) + c['eyebrow'], s)
        s = sub1(r'(<section class="lp-hero">.*?<h1>).*?(</h1>)', lambda m: m.group(1) + c['h1'] + m.group(2), s)
        s = sub1(r'(<p class="lp-hero-sub">).*?(</p>)', lambda m: m.group(1) + c['sub'] + m.group(2), s)
        blk = re.search(r'<section class="lp-sections">\s*<div class="lp-sections-inner">.*?\n</section>', s, re.S)
        form = re.search(r'    <div class="lp-card" id="devis-destination">.*?\n</div>\n    </div>', blk.group(0), re.S).group(0)
        cards = '\n'.join(sec_html(family, i, h, b, lang) for i, (h, b) in enumerate(sections))
        newblk = f'<section class="lp-sections">\n  <div class="lp-sections-inner">\n{cards}\n{form}\n  </div>\n</section>'
        s = s.replace(blk.group(0), newblk, 1)
        # drop any extra content blocks the shell carries between its main block and the FAQ
        a = s.index(newblk) + len(newblk)
        b = s.index('<section class="lp-faq-section"')
        s = s[:a] + re.sub(r'<section class="lp-sections">.*?\n</section>\n*', '', s[a:b], flags=re.S) + '\n\n' + s[b:]
        s = sub1(r'(<h2 class="lp-faq-title">[^<]*</h2>)(.*?)(\n  </div>\n</section>)', lambda m: m.group(1) + '\n' + faq_html(family, c['faq'], lang) + m.group(3), s)
    else:  # pt
        s = sub1(r'(<nav class="breadcrumb"[^>]*><a href="/">Início</a><span>&rsaquo;</span>)[^<]*(</nav>)', lambda m: m.group(1) + c['crumb'] + m.group(2), s)
        s = sub1(r'(<section class="lp-hero">.*?<h1>).*?(</h1>)', lambda m: m.group(1) + c['h1'] + m.group(2), s)
        s = sub1(r'(<p class="lp-hero-sub">).*?(</p>)', lambda m: m.group(1) + c['sub'] + m.group(2), s)
        s = sub1(r'(<div class="lp-trust">\s*<div>)[^<]*(</div>)', lambda m: m.group(1) + c['eyebrow'] + m.group(2), s)
        s = sub1(r'(<div class="lp-form-card[^"]*">\s*<h2>)[^<]*(</h2>)', lambda m: m.group(1) + PT_FORM_H2[prod] + m.group(2), s)
        a = s.index('<section class="lp-section"')
        b = s.index('<section class="lp-section" id="faq">')
        new = '\n'.join(sec_html(family, i, h, bd, lang) for i, (h, bd) in enumerate(sections))
        s = s[:a] + new + '\n' + s[b:]
        s = sub1(r'(<div class="lp-faq">)(.*?)(</div>\s*</section>)', lambda m: m.group(1) + '\n' + faq_html(family, c['faq'], lang) + '\n  ' + m.group(3), s)
        if c.get('ramo'):
            s = sub1(r'(<input type="hidden" name="ramo" value=")[^"]*(")', lambda m: m.group(1) + c['ramo'] + m.group(2), s, required=False)
        if c.get('placeholder'):
            s = sub1(r'(name="mensagem" rows="\d+" placeholder=")[^"]*(")', lambda m: m.group(1) + c['placeholder'] + m.group(2), s, required=False)

    if family == 'cluster' and car and lang in LEAD:
        s = sub1(r'(<h2 id="(?:lead|offerte)-title">)[^<]*(</h2>)', lambda m: m.group(1) + LEAD[lang][0] + m.group(2), s, required=False)
        s = sub1(r'(<p class="form-intro">)[^<]*(</p>)', lambda m: m.group(1) + LEAD[lang][1] + m.group(2), s, required=False)
    if lang == 'nl' and car:
        s = s.replace('<p>Dit artikel staat in het Nederlands omdat veel Nederlandse en Vlaamse verzamelaars kunst en sieraden in Portugal en Spanje bewaren.</p>',
                      '<p>Deze pagina staat in het Nederlands voor Nederlandse en Vlaamse eigenaars met een auto in Spanje.</p>')
    # form plumbing (all families)
    slug = url.strip('/')
    s = re.sub(r'(<input type="hidden" name="source" value=")[^"]*(")', lambda m: m.group(1) + f'page:{slug}' + m.group(2), s)
    s = re.sub(r'(<input type="hidden" name="source_url"[^>]*value=")[^"]*(")', lambda m: m.group(1) + SITE + url + m.group(2), s)
    if c.get('subject'):
        s = re.sub(r'(<input type="hidden" name="subject" value=")[^"]*(")', lambda m: m.group(1) + c['subject'] + m.group(2), s)
    if c.get('placeholder'):
        s = re.sub(r'(<textarea id="f-message"[^>]*\n?\s*placeholder=")[^"]*(")', lambda m: m.group(1) + c['placeholder'] + m.group(2), s)
    if c.get('ask'):
        s = re.sub(r'(<div class="arqi">.*?<ul>).*?(</ul>)', lambda m: m.group(1) + ''.join(f'<li>{x}</li>' for x in c['ask']) + m.group(2), s, count=1, flags=re.S)
    if car:
        s = re.sub(r'\s*<p class="[^"]*" data-ins-note>.*?</p>', '', s, flags=re.S)
    s = re.sub(r'(<option[^>]*) selected(>)', r'\1\2', s)
    old = SHELL[lang].strip('/')
    s = s.replace(f'-{lang}-{old.split("/")[-1]}-"', f'-{lang}-{slug.split("/")[-1]}-"')
    return s


# ---------------------------------------------------------------------------
# updates to existing pages
FAQ_START = {'cluster': r'<section class="section[^"]*" aria-labelledby="faq-title"', 'lp': r'<section class="lp-faq-section"',
             'pt': r'<section class="lp-section" id="faq">'}


def insert_before_faq(s, family, h, body, lang, anchor_id):
    if f'>{h}</h2>' in s:
        return s
    if family == 'cluster':
        new = (f'<section class="section tint" aria-labelledby="{anchor_id}">\n  <div class="container narrow article-body">\n'
               f'    <h2 id="{anchor_id}">{h}</h2>\n    {fill(body, lang)}\n  </div>\n</section>\n\n')
    elif family == 'pt':
        new = f'<section class="lp-section">\n  <h2>{h}</h2>\n  {fill(body, lang).replace("<ul>", "<ul class=\"lp-list\">")}\n</section>\n'
    else:
        new = f'<section class="lp-sections">\n  <div class="lp-sections-inner">\n    <div class="lp-card">\n      <h2>{h}</h2>\n      {fill(body, lang)}\n    </div>\n  </div>\n</section>\n\n'
    m = re.search(FAQ_START[family], s)
    if not m:
        raise SystemExit(f'no FAQ section ({family})')
    return s[:m.start()] + new + s[m.start():]


def family_of(s):
    if re.search(FAQ_START['cluster'], s):
        return 'cluster'
    if re.search(FAQ_START['pt'], s):
        return 'pt'
    return 'lp'


def faq_prepend(s, family, q, a):
    if f'>{q}<' in s:
        return s
    if family == 'cluster':
        s = sub1(r'(<div class="faq-list">\n?)', lambda m: m.group(1) + f'      <div class="faq-item">\n        <h3>{q}</h3>\n        <div class="faq-answer"><p>{a}</p></div>\n      </div>\n', s)
    elif family == 'pt':
        s = sub1(r'(<div class="lp-faq">\n?)', lambda m: m.group(1) + f'    <details><summary>{q}</summary><p>{a}</p></details>\n', s)
    else:
        s = sub1(r'(<h2 class="lp-faq-title">[^<]*</h2>\n)', lambda m: m.group(1) + f'    <div class="lp-faq-item">\n      <h3>{q}</h3>\n      <p>{a}</p>\n    </div>\n', s)

    def addld(m):
        raw = m.group(1)
        try:
            d = json.loads(raw)
        except Exception:
            return m.group(0)
        nodes = [d] if d.get('@type') == 'FAQPage' else [n for n in d.get('@graph', []) if n.get('@type') == 'FAQPage']
        if not nodes:
            return m.group(0)
        nodes[0]['mainEntity'].insert(0, {"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}})
        return '<script type="application/ld+json">' + json.dumps(d, ensure_ascii=False) + '</script>'
    return re.sub(r'<script type="application/ld\+json">(.*?)</script>', addld, s, flags=re.S)


def update_existing():
    # holiday homes: section in every language without it
    for lang in ['pt', 'nl', 'fr', 'es', 'it', 'pl', 'se', 'dk', 'zh', 'il']:
        url = URLS['holiday'][lang]
        h, body = X['ES_HOL'] if lang == 'es' else C[lang]['HOL']
        s = rd(url)
        wr(url, insert_before_faq(s, family_of(s), h, body, lang, 'casa-vazia'))
    # high-value homes from EUR 1 million
    for lang in NEW_LANGS:
        url = URLS['home'][lang]
        hm = C[lang]['HOME']
        s = rd(url)
        s = set_meta(s, {'title': hm['title'], 'desc': hm['desc']})
        if hm['sub_add'].strip() not in s:
            s = sub1(r'(<p class="(?:hero-subtitle|lp-hero-sub)">.*?)(</p>)', lambda m: m.group(1) + hm['sub_add'] + m.group(2), s)
        q, a = hm['faq']
        a = a + '' if lang else a
        s = faq_prepend(s, family_of(s), q, a)
        wr(url, s)
    # jewellery: residence section + group hreflang/selector on existing pages
    for lang in ('nl', 'it', 'pl', 'se', 'dk', 'zh', 'il'):
        url = URLS['jewellery'][lang]
        s = rd(url)
        h, body = C[lang]['JEW_RES']
        s = insert_before_faq(s, family_of(s), h, body, lang, 'residencia')
        s = set_hreflang(s, lang, URLS['jewellery'])
        s = set_langsel(s, lang, URLS['jewellery'])
        wr(url, s)
    s = rd(URLS['jewellery']['es'])
    wr(URLS['jewellery']['es'], set_langsel(set_hreflang(s, 'es', URLS['jewellery']), 'es', URLS['jewellery']))
    # therapists liability: non-conventional therapies + tai chi
    rc = [(l, d) for l in NEW_LANGS for d in C[l]['RC']] + [(l, X['RC'][l]) for l in ('en', 'de', 'es')]
    for lang, d in rc:
        s = rd(d['page'])
        s = set_meta(s, {'title': d['title'], 'desc': d['desc']})
        if d.get('h1'):
            s = sub1(r'(<h1[^>]*>).*?(</h1>)', lambda m: m.group(1) + d['h1'] + m.group(2), s)
        h, body = d['section']
        s = insert_before_faq(s, family_of(s), h, body, lang, 'para-quem')
        wr(d['page'], s)


IN_SPAIN = {'pt': 'Em Espanha', 'nl': 'In Spanje', 'fr': 'En Espagne', 'it': 'In Spagna', 'pl': 'W Hiszpanii', 'se': 'I Spanien',
            'dk': 'I Spanien', 'zh': '在西班牙', 'il': 'בספרד'}
COMBINED = {  # Portugal-and-Spain pages that should point to the Spain product pages
    'classic': {'pt': '/private-clients/automoveis-classicos/', 'nl': '/nl/klassieke-auto-verzekering-portugal-spanje/', 'fr': '/fr/assurance-voitures-collection-prestige/',
                'it': '/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/', 'pl': '/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/',
                'se': '/se/veteranbil-forsakring-portugal-spanien/', 'dk': '/dk/veteranbil-forsikring-portugal-spanien/',
                'zh': '/zh/classic-car-insurance-portugal-spain/', 'il': '/il/classic-car-insurance-portugal-spain/'},
    'art': {'pt': '/private-clients/arte-joias-relogios/', 'nl': '/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/', 'fr': '/fr/assurance-art-bijoux-montres/',
            'it': '/it/assicurazione-arte-gioielli-oltre-valore-concordato/', 'pl': '/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/',
            'se': '/se/konst-smycken-forsakring-utover-avtalat-varde/', 'dk': '/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/',
            'zh': '/zh/art-jewellery-beyond-agreed-value/', 'il': '/il/art-jewellery-beyond-agreed-value/'},
}


def link_combined():
    for lang in NEW_LANGS:
        nav = C[lang]['NAV']
        for kind, url in ((k, COMBINED[k][lang]) for k in COMBINED):
            s = rd(url)
            if kind == 'classic':
                items = [(URLS['classic'][lang], nav['classic']), (URLS['luxury'][lang], nav['luxury'])]
            else:
                items = [(URLS['jewellery'][lang], nav['jewel'])]
            body = '<ul>' + ''.join(f'<li><a href="{u}">{t}</a></li>' for u, t in items) + '</ul>'
            fam = family_of(s)
            try:
                s = insert_before_faq(s, fam, IN_SPAIN[lang], body, lang, 'em-espanha')
            except SystemExit:
                print('no FAQ anchor on', url)
                continue
            wr(url, s)


def main():
    out = {}
    for lang in NEW_LANGS:
        out[URLS['luxury'][lang]] = render_new(lang, 'luxury', C[lang]['LUX'])
        out[URLS['classic'][lang]] = render_new(lang, 'classic', C[lang]['CLA'])
        if lang in ('pt', 'fr'):
            out[URLS['jewellery'][lang]] = render_new(lang, 'jewellery', C[lang]['JEW'])
    for url, html in out.items():
        wr(url, html)
        print('wrote', url)
    update_existing()
    link_combined()
    print('updated existing pages')


if __name__ == '__main__':
    main()
