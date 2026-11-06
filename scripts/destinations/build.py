import re, json, os, sys, html as H
sys.path.insert(0, '/home/claude/dest')
sys.path.insert(0, '/home/claude/tools')
from buildnav import block_end
import content_en_pt as A, content_de_es as B, content_nl_fr_it as Cm, content_pl_se_dk as Dm, content_il_zh as Em
C = {}
for m in (A, B, Cm, Dm, Em): C.update(m.C)
DEST = A.DEST_ORDER; COUNTRY = A.COUNTRY; LINES = A.LINES
PUB = '/home/claude/adlerrochefort/public/'
ORIGIN = 'https://adlerrochefort.com'

L = {
 'pt': dict(base='destinos', tpl='seguros/casa-desocupada', skin='pt', hl='pt-PT', og='pt_PT', home='/', dir='ltr'),
 'en': dict(base='en/destinations', tpl='en/unoccupied-home-insurance-portugal', skin='en', hl='en-GB', og='en_GB', home='/en/', dir='ltr'),
 'fr': dict(base='fr/destinations', tpl='fr/golf-residences-portugal-espagne', skin='fr', hl='fr', og='fr_FR', home='/fr/', dir='ltr'),
 'de': dict(base='de/destinationen', tpl='de/bauversicherung-luxusimmobilie', skin='cluster', hl='de', og='de_DE', home='/de/', dir='ltr'),
 'es': dict(base='es/destinos', tpl='es/familias-alto-patrimonio-madrid-seguros', skin='cluster', hl='es', og='es_ES', home='/es/', dir='ltr'),
 'nl': dict(base='nl/bestemmingen', tpl='nl/aardbevingsdekking-portugal', skin='cluster', hl='nl', og='nl_NL', home='/nl/', dir='ltr'),
 'it': dict(base='it/destinazioni', tpl='it/assicurazione-affitto-villa-lusso', skin='cluster', hl='it-IT', og='it_IT', home='/it/', dir='ltr'),
 'pl': dict(base='pl/destynacje', tpl='pl/golf-rezydencje-portugalia-hiszpania', skin='cluster', hl='pl-PL', og='pl_PL', home='/pl/', dir='ltr'),
 'se': dict(base='se/destinationer', tpl='se/ansvarsforsakring-portugal', skin='cluster', hl='sv-SE', og='sv_SE', home='/se/', dir='ltr'),
 'dk': dict(base='dk/destinationer', tpl='dk/ansvarsforsikring-portugal', skin='cluster', hl='da-DK', og='da_DK', home='/dk/', dir='ltr'),
 'il': dict(base='il/destinations', tpl='il/art-jewellery-beyond-agreed-value', skin='cluster', hl='he-IL', og='he_IL', home='/il/', dir='rtl'),
 'zh': dict(base='zh/destinations', tpl='zh/art-jewellery-beyond-agreed-value', skin='cluster', hl='zh-CN', og='zh_CN', home='/zh/', dir='ltr'),
}
# product-line links per language; homes split by country
LINK = {
 'pt': dict(homes_PT='/seguros/habitacao/', homes_ES='/private-clients/', art='/private-clients/arte-joias-relogios/', cars='/private-clients/automoveis-classicos/', yachts='/blog/marinas-iates-portugal-espanha/', liability='/blog/protecao-familiar-seguro-habitacao/', ipmi='/seguros/saude-internacional/', rental='/seguros/casa-desocupada/', construction='/private-clients/', vineyard='/private-clients/', horses='/en/equine-horse-insurance/', familyoffice='/private-clients/family-offices/'),
 'en': dict(homes_PT='/en/home-insurance-quote/', homes_ES='/en/home-insurance-spain/', art='/en/art-jewellery-watches-insurance/', cars='/en/blog/luxury-car-insurance-portugal/', yachts='/en/blog/marinas-yachts-portugal-spain/', liability='/en/blog/family-liability-cover-portugal/', ipmi='/en/international-health-insurance/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
 'de': dict(homes_PT='/de/hausversicherung-portugal/', homes_ES='/de/hausversicherung-spanien/', art='/de/schmuck-uhren-versicherung-portugal-spanien/', cars='/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/', yachts='/de/blog/marinas-yachten-portugal-spanien/', liability='/de/privathaftpflicht-spanien/', ipmi='/de/internationale-krankenversicherung/', rental='/de/luxusvilla-vermietung-versicherung/', construction='/de/bauversicherung-luxusimmobilie/', vineyard='/de/weingut-landgut-versicherung/', horses='/de/pferdeversicherung/', familyoffice='/de/family-office-versicherung/'),
 'es': dict(homes_PT='/es/seguro-hogar-alto-valor/', homes_ES='/es/seguro-hogar-alto-valor-espana/', art='/es/seguro-joyas-relojes-espana/', cars='/es/seguro-coches-clasicos-alto-valor-portugal-espana/', yachts='/es/puertos-deportivos-yates-portugal-espana/', liability='/es/seguro-responsabilidad-civil-familiar/', ipmi='/es/seguro-medico-internacional/', rental='/es/seguro-alquiler-villa-lujo/', construction='/es/seguro-obra-vivienda-lujo/', vineyard='/es/seguro-finca-vinedo/', horses='/es/seguro-caballos/', familyoffice='/es/seguro-family-office/'),
 'nl': dict(homes_PT='/nl/woonverzekering-portugal/', homes_ES='/nl/woonverzekering-spanje/', art='/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/', cars='/nl/klassieke-auto-verzekering-portugal-spanje/', yachts='/nl/jachthavens-jachten-portugal-spanje/', liability='/nl/gezinsbescherming-woonverzekering/', ipmi='/nl/internationale-zorgverzekering/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
 'fr': dict(homes_PT='/en/home-insurance-quote/', homes_ES='/en/home-insurance-spain/', art='/en/art-jewellery-watches-insurance/', cars='/en/blog/luxury-car-insurance-portugal/', yachts='/fr/ports-plaisance-yachts-portugal-espagne/', liability='/en/blog/family-liability-cover-portugal/', ipmi='/fr/assurance-sante-internationale/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/fr/assurance-family-office/'),
 'it': dict(homes_PT='/it/assicurazione-casa-alto-valore/', homes_ES='/it/assicurazione-casa-alto-valore/', art='/it/assicurazione-arte-gioielli-oltre-valore-concordato/', cars='/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/', yachts='/it/marine-yacht-portogallo-spagna/', liability='/it/responsabilita-civile-famiglia/', ipmi='/it/assicurazione-sanitaria-internazionale/', rental='/it/assicurazione-affitto-villa-lusso/', construction='/it/assicurazione-costruzione-villa/', vineyard='/it/assicurazione-tenuta-vigneto/', horses='/it/assicurazione-cavalli/', familyoffice='/it/assicurazione-family-office/'),
 'pl': dict(homes_PT='/pl/ubezpieczenie-domu-portugalia/', homes_ES='/pl/ubezpieczenie-domu-hiszpania/', art='/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/', cars='/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/', yachts='/pl/mariny-jachty-portugalia-hiszpania/', liability='/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/', ipmi='/pl/miedzynarodowe-ubezpieczenie-zdrowotne/', rental='/pl/ubezpieczenie-wynajem-willi/', construction='/pl/ubezpieczenie-budowa-willi/', vineyard='/pl/ubezpieczenie-winnica-posiadlosc/', horses='/pl/ubezpieczenie-koni/', familyoffice='/en/family-office-insurance/'),
 'se': dict(homes_PT='/se/hemforsakring-portugal/', homes_ES='/se/hemforsakring-spanien/', art='/se/konst-smycken-forsakring-utover-avtalat-varde/', cars='/se/veteranbil-forsakring-portugal-spanien/', yachts='/se/marinor-yachter-portugal-spanien/', liability='/se/ansvarsforsakring-portugal/', ipmi='/se/internationell-sjukvardsforsakring/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
 'dk': dict(homes_PT='/dk/husforsikring-portugal/', homes_ES='/dk/husforsikring-spanien/', art='/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/', cars='/dk/veteranbil-forsikring-portugal-spanien/', yachts='/dk/lystbaadehavne-yachter-portugal-spanien/', liability='/dk/ansvarsforsikring-portugal/', ipmi='/dk/international-sundhedsforsikring/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
 'il': dict(homes_PT='/il/home-insurance-portugal/', homes_ES='/il/home-insurance-spain/', art='/il/art-jewellery-beyond-agreed-value/', cars='/il/classic-car-insurance-portugal-spain/', yachts='/il/marinas-yachts-portugal-spain/', liability='/il/liability-insurance-portugal/', ipmi='/il/international-health-insurance/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
 'zh': dict(homes_PT='/zh/home-insurance-portugal/', homes_ES='/zh/home-insurance-spain/', art='/zh/art-jewellery-beyond-agreed-value/', cars='/zh/classic-car-insurance-portugal-spain/', yachts='/zh/marinas-yachts-portugal-spain/', liability='/zh/liability-insurance-portugal/', ipmi='/zh/international-health-insurance/', rental='/en/luxury-villa-rental-insurance/', construction='/en/luxury-home-construction-insurance/', vineyard='/en/rural-estate-vineyard-insurance/', horses='/en/equine-horse-insurance/', familyoffice='/en/family-office-insurance/'),
}
for l, m in LINK.items():
    for k, v in m.items():
        assert os.path.exists(PUB + v.strip('/') + '/index.html'), (l, k, v)

def e(s): return H.escape(s, quote=False)
def ea(s): return H.escape(s, quote=True)
def url(lang, d=None): return '/' + L[lang]['base'] + '/' + (d + '/' if d else '')
def fmt(lang, key, d=None, **kw):
    T = C[lang]['T']; s = T[key]
    name = C[lang]['names'][d] if d else ''
    loc = C[lang].get('loc', {}).get(d, '')
    return s.format(name=name, loc=loc, country=kw.get('country', ''))
def faq_for(lang, d):
    out = []
    for q, a in C[lang]['T']['faq']:
        if q.startswith('PT:'):
            if COUNTRY[d] != 'PT': continue
            q = q[3:]
        if q.startswith('ES:'):
            if COUNTRY[d] != 'ES': continue
            q = q[3:]
        nm = C[lang]['names'][d]; loc = C[lang].get('loc', {}).get(d, '')
        out.append((q.format(name=nm, loc=loc), a.format(name=nm, loc=loc)))
    return out
def line_link(lang, k, d):
    if k == 'homes': return LINK[lang]['homes_' + COUNTRY[d]]
    return LINK[lang][k]

def extract_block(t, start_pat, tag='section'):
    i = t.find(start_pat)
    if i < 0: return ''
    return t[i:block_end(t, i, tag)]

def head_replace(t, lang, title, desc, path, alternates, ld):
    t = re.sub(r'<title>.*?</title>', '<title>' + e(title) + '</title>', t, count=1, flags=re.S)
    t = re.sub(r'<meta name="description" content="[^"]*"\s*/?>', '<meta name="description" content="' + ea(desc) + '">', t, count=1)
    full = ORIGIN + path
    t = re.sub(r'<link rel="canonical" href="[^"]*"\s*/?>', '<link rel="canonical" href="' + full + '">', t, count=1)
    for k, v in (('og:title', title), ('og:description', desc), ('og:url', full), ('twitter:title', title), ('twitter:description', desc)):
        t = re.sub(r'(<meta (?:property|name)="' + k + r'" content=")[^"]*(")', lambda m: m.group(1) + ea(v) + m.group(2), t)
    t = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*/?>\n?', '', t)
    alt = ''.join(f'<link rel="alternate" hreflang="{L[l]["hl"]}" href="{ORIGIN}{p}">\n' for l, p in alternates)
    alt += f'<link rel="alternate" hreflang="x-default" href="{ORIGIN}{dict(alternates)["en"]}">\n'
    t = re.sub(r'(<link rel="canonical" href="[^"]*">\n?)', lambda m: m.group(1) + ('' if m.group(1).endswith('\n') else '\n') + alt, t, count=1)
    t = re.sub(r'\s*<script type="application/ld\+json">.*?</script>', '', t, flags=re.S)
    t = t.replace('</head>', ''.join('<script type="application/ld+json">' + json.dumps(x, ensure_ascii=False) + '</script>\n' for x in ld) + '</head>', 1)
    return t

def ld_for(lang, path, title, crumbs, faq):
    out = [{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": ORIGIN + u} for i, (n, u) in enumerate(crumbs)]}]
    out.append({"@context": "https://schema.org", "@type": "WebPage", "name": title, "url": ORIGIN + path, "inLanguage": L[lang]['hl'],
                "publisher": {"@type": "InsuranceAgency", "name": "Adler & Rochefort", "url": ORIGIN + "/"}})
    if faq:
        out.append({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]})
    return out

# ---------------- content model -> HTML per skin -----------------
def model(lang, d):
    T = C[lang]['T']; ctry = T['pt'] if COUNTRY[d] == 'PT' else T['es']
    intro, points = C[lang]['dest'][d]
    return dict(
        eyebrow=fmt(lang, 'eyebrow', d, country=ctry), h1=fmt(lang, 'h1', d), sub=intro,
        h_diff=fmt(lang, 'h_diff', d), points=points,
        h_lines=fmt(lang, 'h_lines', d), lines=[(line_link(lang, k, d),) + T['lines'][k] for k in LINES[d]],
        h_how=T['h_how'], how=T['how'], h_faq=T['h_faq'], faq=faq_for(lang, d),
        h_other=T['h_other'], other=[(url(lang, x), C[lang]['names'][x]) for x in DEST if x != d] + [(url(lang), T['hub_title'])],
        disclaimer=T['disclaimer'], cta=T['cta'], hero_meta=T['hero_meta'])

def hub_model(lang):
    T = C[lang]['T']
    groups = []
    for ctry in ('PT', 'ES'):
        items = [(url(lang, d), C[lang]['names'][d], C[lang]['dest'][d][0].split('. ')[0].rstrip('.') + '.') for d in DEST if COUNTRY[d] == ctry]
        groups.append((T['pt'] if ctry == 'PT' else T['es'], items))
    return dict(eyebrow=T['hub_eyebrow'], h1=T['hub_title'], sub=T['hub_intro'], groups=groups, h_how=T['h_how'], how=T['how'],
                disclaimer=T['disclaimer'], cta=T['cta'], hero_meta=T['hero_meta'])

# cluster skin
def cluster_main(lang, M, crumbs, parts, hub=False):
    bc = '<nav class="breadcrumb" aria-label="Breadcrumb">\n    <ol>\n' + ''.join(
        f'      <li><a href="{u}">{e(n)}</a></li>\n' for n, u in crumbs[:-1]) + f'      <li><span aria-current="page">{e(crumbs[-1][0])}</span></li>\n    </ol>\n  </nav>\n\n'
    s = [bc, '<main id="main">\n\n<article>\n<section class="hero" aria-labelledby="hero-title">\n  <div class="hero-inner">\n',
         f'    <span class="eyebrow">{e(M["eyebrow"])}</span>\n    <h1 id="hero-title">{e(M["h1"])}</h1>\n',
         f'    <p class="hero-subtitle">{e(M["sub"])}</p>\n    <p class="hero-meta">{e(M["hero_meta"])}</p>\n',
         f'    <a href="#{parts["form_id"]}" class="btn-cta">{e(M["cta"])}</a>\n  </div>\n</section>\n', parts['author'], '\n', parts['langpolicy'], '\n']
    def sec(id_, h, body, tint):
        return f'<section class="section {"tint" if tint else "plain"}" aria-labelledby="{id_}">\n  <div class="container narrow article-body">\n    <h2 id="{id_}">{e(h)}</h2>\n{body}  </div>\n</section>\n\n'
    if hub:
        tint = False
        for i, (g, items) in enumerate(M['groups']):
            body = '    <ul class="related">\n' + ''.join(f'      <li><a class="text-link" href="{u}">{e(n)}</a> — {e(x)}</li>\n' for u, n, x in items) + '    </ul>\n'
            s.append(sec(f'grupo-{i+1}', g, body, tint)); tint = not tint
        s.append(sec('como', M['h_how'], ''.join(f'    <h3>{e(a)}</h3>\n    <p>{e(b)}</p>\n' for a, b in M['how']), tint))
    else:
        s.append(sec('diferente', M['h_diff'], ''.join(f'    <h3>{e(a)}</h3>\n    <p>{e(b)}</p>\n' for a, b in M['points']), False))
        s.append(sec('seguros', M['h_lines'], '    <ul class="related">\n' + ''.join(f'      <li><a class="text-link" href="{u}">{e(a)}</a> — {e(b)}</li>\n' for u, a, b in M['lines']) + '    </ul>\n', True))
        s.append(sec('como', M['h_how'], ''.join(f'    <h3>{e(a)}</h3>\n    <p>{e(b)}</p>\n' for a, b in M['how']), False))
        s.append('<section class="section" aria-labelledby="faq-title" id="faq">\n  <div class="container narrow">\n    <h2 id="faq-title">' + e(M['h_faq']) + '</h2>\n    <div class="faq-list">\n' +
                 ''.join(f'      <div class="faq-item">\n        <h3>{e(q)}</h3>\n        <div class="faq-answer"><p>{e(a)}</p></div>\n      </div>\n' for q, a in M['faq']) + '    </div>\n  </div>\n</section>\n\n')
        s.append(sec('destinos', M['h_other'], '    <ul class="related">\n' + ''.join(f'      <li><a class="text-link" href="{u}">{e(n)}</a></li>\n' for u, n in M['other']) + '    </ul>\n', False))
    s.append(f'<section class="section plain">\n  <div class="container narrow article-body">\n    <p><small>{e(M["disclaimer"])}</small></p>\n  </div>\n</section>\n\n')
    s.append(parts['form']); s.append('\n</article>\n</main>')
    return ''.join(s)

# EN / FR landing skin
def lp_main(lang, M, crumbs, parts, hub=False):
    crumb = '<div class="lp-crumb">' + '<span>/</span>'.join([f'<a href="{u}">{e(n)}</a>' for n, u in crumbs[:-1]] + [e(crumbs[-1][0])]) + '</div>\n\n'
    s = ['<main class="lp-main">\n\n', crumb, '<section class="lp-hero">\n  <div class="lp-hero-inner">\n',
         f'    <div class="lp-eyebrow">{e(M["eyebrow"])}</div>\n    <h1>{e(M["h1"])}</h1>\n    <p class="lp-hero-sub">{e(M["sub"])}</p>\n',
         f'    <div class="lp-hero-ctas">\n      <a href="#{parts["form_id"]}" class="btn-primary">{e(M["cta"])}</a>\n    </div>\n',
         f'    <div class="lp-trust">{e(M["hero_meta"])}</div>\n  </div>\n</section>\n', parts['author'], '\n', parts['langpolicy'], '\n',
         '<section class="lp-sections">\n  <div class="lp-sections-inner">\n']
    def card(h, body): return f'    <div class="lp-card">\n      <h2>{e(h)}</h2>\n{body}    </div>\n'
    def grid(items): return '      <div class="lp-grid">\n' + ''.join(f'        <div class="lp-grid-item"><h3>{a}</h3><p>{e(b)}</p></div>\n' for a, b in items) + '      </div>\n'
    if hub:
        for g, items in M['groups']:
            s.append(card(g, grid([(f'<a href="{u}">{e(n)}</a>', x) for u, n, x in items])))
        s.append(card(M['h_how'], grid([(e(a), b) for a, b in M['how']])))
    else:
        s.append(card(M['h_diff'], grid([(e(a), b) for a, b in M['points']])))
        s.append(card(M['h_lines'], grid([(f'<a href="{u}">{e(a)}</a>', b) for u, a, b in M['lines']])))
        s.append(card(M['h_how'], grid([(e(a), b) for a, b in M['how']])))
    if lang == 'fr': s.append(parts['form'])
    s.append('  </div>\n</section>\n\n')
    if lang != 'fr': s.append(parts['form'] + '\n\n')
    if not hub:
        s.append('<section class="lp-faq-section" id="faq">\n  <div class="lp-faq-inner">\n    <h2 class="lp-faq-title">' + e(M['h_faq']) + '</h2>\n' +
                 ''.join(f'    <div class="lp-faq-item">\n      <h3>{e(q)}</h3>\n      <p>{e(a)}</p>\n    </div>\n' for q, a in M['faq']) + '  </div>\n</section>\n\n')
        s.append('<section class="lp-sections">\n  <div class="lp-sections-inner">\n' + card(M['h_other'], '      <p>' + ' · '.join(f'<a href="{u}">{e(n)}</a>' for u, n in M['other']) + '</p>\n') + '  </div>\n</section>\n\n')
    s.append(f'<section class="lp-disclaimer">\n  <p>{e(M["disclaimer"])}</p>\n</section>\n\n</main>')
    return ''.join(s)

# PT skin
def pt_main(lang, M, crumbs, parts, hub=False):
    bc = '<nav class="breadcrumb" aria-label="Breadcrumb">' + '<span>&rsaquo;</span>'.join([f'<a href="{u}">{e(n)}</a>' for n, u in crumbs[:-1]] + [e(crumbs[-1][0])]) + '</nav>\n\n'
    s = ['<main>\n', bc, '<section class="lp-hero">\n  <div class="lp-hero-inner">\n    <div>\n',
         f'      <h1>{e(M["h1"])}</h1>\n      <p class="lp-hero-sub">{e(M["sub"])}</p>\n',
         f'      <div class="lp-hero-actions">\n        <a href="#pedido" class="btn-primary">{e(M["cta"])}</a>\n      </div>\n',
         f'      <div class="lp-trust">\n        <div>{e(M["eyebrow"])}</div>\n        <div>ASF n.º 425591790/3</div>\n        <div>Portugal e Espanha</div>\n      </div>\n    </div>\n',
         '    ' + parts['form'] + '\n  </div>\n</section>\n', parts['author'], '\n\n']
    def sec(h, body, alt): return f'<section class="lp-section"{" style=\"background:var(--cream2);max-width:none;\"" if alt else ""}>\n  <h2>{e(h)}</h2>\n{body}</section>\n'
    if hub:
        alt = False
        for g, items in M['groups']:
            s.append(sec(g, '  <ul class="lp-list">\n' + ''.join(f'    <li><strong><a href="{u}">{e(n)}</a>:</strong> {e(x)}</li>\n' for u, n, x in items) + '  </ul>\n', alt)); alt = not alt
        s.append(sec(M['h_how'], '  <ul class="lp-list">\n' + ''.join(f'    <li><strong>{e(a)}:</strong> {e(b)}</li>\n' for a, b in M['how']) + '  </ul>\n', alt))
    else:
        s.append(sec(M['h_diff'], '  <ul class="lp-list">\n' + ''.join(f'    <li><strong>{e(a)}:</strong> {e(b)}</li>\n' for a, b in M['points']) + '  </ul>\n', False))
        s.append(sec(M['h_lines'], '  <ul class="lp-list">\n' + ''.join(f'    <li><strong><a href="{u}">{e(a)}</a>:</strong> {e(b)}</li>\n' for u, a, b in M['lines']) + '  </ul>\n', True))
        s.append(sec(M['h_how'], '  <ul class="lp-list">\n' + ''.join(f'    <li><strong>{e(a)}:</strong> {e(b)}</li>\n' for a, b in M['how']) + '  </ul>\n', False))
        s.append('<section class="lp-section" id="faq">\n  <h2>' + e(M['h_faq']) + '</h2>\n  <div class="lp-faq">\n' + ''.join(f'    <details><summary>{e(q)}</summary><p>{e(a)}</p></details>\n' for q, a in M['faq']) + '  </div>\n</section>\n')
        s.append(sec(M['h_other'], '  <p>' + ' · '.join(f'<a href="{u}">{e(n)}</a>' for u, n in M['other']) + '</p>\n', True))
    s.append(f'<section class="lp-section">\n  <p><small>{e(M["disclaimer"])}</small></p>\n</section>\n</main>')
    return ''.join(s)

FORM_TXT = {
 'de':('Schriftliche Einschätzung anfragen','Sagen Sie uns, wo die Immobilie liegt, was versichert werden soll und welche Policen Sie heute haben. Wir antworten innerhalb von 24 Stunden auf Deutsch.'),
 'nl':('Vraag een schriftelijke beoordeling aan','Vertel ons waar de woning ligt, wat u wilt verzekeren en welke polissen u nu heeft. Wij antwoorden binnen 24 uur, in het Engels.'),
 'it':('Richieda una valutazione scritta','Ci dica dove si trova la proprietà, che cosa desidera assicurare e quali polizze ha oggi. Le rispondiamo per iscritto.'),
 'pl':('Prośba o pisemną opinię','Proszę napisać, gdzie znajduje się nieruchomość, co chcą Państwo ubezpieczyć i jakie polisy mają Państwo obecnie. Odpowiemy pisemnie.'),
 'se':('Be om ett skriftligt utlåtande','Berätta var fastigheten ligger, vad du vill försäkra och vilka försäkringar du har i dag. Vi svarar inom 48 till 72 arbetstimmar.'),
 'dk':('Bed om en skriftlig vurdering','Fortæl os, hvor ejendommen ligger, hvad der skal forsikres, og hvilke policer du har i dag. Vi svarer inden for 48 til 72 arbejdstimer.'),
 'il':('בקשה לחוות דעת בכתב','ספרו לנו היכן נמצא הנכס, מה תרצו לבטח ואילו פוליסות יש לכם היום. נחזור אליכם בכתב.'),
 'zh':('申请书面意见','请告诉我们物业所在地、需要投保的内容以及您现有的保单。我们会书面回复。'),
 'en':('Request a written opinion','Tell us where the property is, what you would like to insure and which policies you have today.'),
}
def retext(lang, form):
    if lang not in FORM_TXT: return form
    h, p = FORM_TXT[lang]
    form = re.sub(r'(<h2\b[^>]*>).*?(</h2>)', lambda m: m.group(1) + e(h) + m.group(2), form, count=1, flags=re.S)
    i = form.find('</h2>')
    m = re.compile(r'(<p\b[^>]*>).*?(</p>)', re.S).search(form, i)
    if m and m.start() - i < 400: form = form[:m.start()] + m.group(1) + e(p) + m.group(2) + form[m.end():]
    return form

def parts_for(lang, t):
    sk = L[lang]['skin']
    author = extract_block(t, '<div class="ar-author">', 'div')
    if sk == 'cluster':
        form = extract_block(t, '<section class="section form-section"', 'section')
        fid = re.search(r'id="([^"]+)"', form[:300]).group(1)
        lp = extract_block(t, '<div class="lang-policy-band">', 'div')
        return dict(author=author, langpolicy=lp, form=retext(lang, form), form_id=fid)
    if sk == 'en':
        form = extract_block(t, '<section class="lp-form-section"', 'section')
        lp = extract_block(t, '<div class="ar-langpolicy-band">', 'div')
        return dict(author=author, langpolicy=lp, form=retext(lang, form), form_id='quote-form')
    if sk == 'fr':
        arsf = extract_block(t, '<div class="arsf"', 'div')
        lpc = re.search(r'<div class="lp-card"><h2 id="langue">.*?</div>', t, re.S)
        form = '    <div class="lp-card" id="devis-destination">\n' + arsf + '\n    </div>\n'
        return dict(author=author, langpolicy=(lpc.group(0) if lpc else ''), form=form, form_id='devis-destination')
    if sk == 'pt':
        i = t.find('<div id="pedido">'); form = t[i:block_end(t, i, 'div')]
        return dict(author=author, langpolicy='', form=form, form_id='pedido')

def render(lang, d, tpl):
    T = C[lang]['T']
    path = url(lang, d)
    alternates = [(l, url(l, d)) for l in L]
    if d:
        M = model(lang, d); title = fmt(lang, 'title', d); desc = fmt(lang, 'meta', d)
        crumbs = [(T['home'], L[lang]['home']), (T['dest'], url(lang)), (C[lang]['names'][d], path)]
        faq = M['faq']
    else:
        M = hub_model(lang); title = T['hub_title'] + ' | Adler & Rochefort'; desc = T['hub_meta']
        crumbs = [(T['home'], L[lang]['home']), (T['dest'], path)]
        faq = None
    parts = parts_for(lang, tpl)
    sk = L[lang]['skin']
    if sk == 'cluster':
        i = tpl.find('<nav class="breadcrumb"'); j = tpl.find('</main>') + len('</main>')
        body = cluster_main(lang, M, crumbs, parts, hub=not d)
    else:
        i = tpl.find('<main'); j = tpl.find('</main>') + len('</main>')
        body = (lp_main if sk in ('en', 'fr') else pt_main)(lang, M, crumbs, parts, hub=not d)
    out = tpl[:i] + body + tpl[j:]
    out = head_replace(out, lang, title, desc, path, alternates, ld_for(lang, path, title, crumbs, faq))
    out = fix_hidden(out, lang, d, path)
    return out

HOME_OPT = {'se':'SE · Hem','dk':'DK · Bolig','il':'IL · Home','zh':'ZH · Home','it':'IT · Casa','pl':'PL · Dom','es':'Español · Hogar'}
def fix_hidden(t, lang, d, path):
    def sv(name, val):
        nonlocal t
        t = re.sub(r'(<input type="hidden" name="' + name + r'" value=")[^"]*(")', lambda m: m.group(1) + ea(val) + m.group(2), t)
    sv('source', 'destination:' + path.strip('/'))
    sv('source_url', ORIGIN + path)
    if lang in HOME_OPT:
        for nm in ('product_interest', 'insurance_type'):
            t = re.sub(r'(<input type="hidden" name="' + nm + r'" value=")[^"]*·[^"]*(")', lambda m: m.group(1) + HOME_OPT[lang] + m.group(2), t)
    if lang == 'de':
        nm = C['de']['names'][d] if d else 'Destinationen'
        sv('subject', 'Neue Anfrage (DE) — ' + nm)
        if d: sv('country', 'Portugal' if COUNTRY[d] == 'PT' else 'Spanien')
    return t

if __name__ == '__main__':
    tpls = {l: open(PUB + c['tpl'] + '/index.html', encoding='utf-8').read() for l, c in L.items()}
    n = 0
    for lang in L:
        for d in [None] + DEST:
            html = render(lang, d, tpls[lang])
            p = PUB + url(lang, d).strip('/') + '/index.html'
            os.makedirs(os.path.dirname(p), exist_ok=True)
            open(p, 'w', encoding='utf-8').write(html); n += 1
    print('pages written', n)
