import re, os, sys, json
sys.path.insert(0, '/home/claude/dest'); sys.path.insert(0, '/home/claude/tools')
import build as B
from lines_content import P, HEAD, PROF_LABEL
from buildnav import block_end
PUB = B.PUB
KEYS = ['homes_pt', 'homes_es', 'art', 'cars', 'yachts', 'liability', 'ipmi', 'prof', 'fo']
CAT = {
 'pt': ['/seguros/habitacao/', '/seguros/habitacao-espanha/', '/private-clients/arte-joias-relogios/', '/private-clients/automoveis-classicos/', '/blog/marinas-iates-portugal-espanha/', '/seguros/responsabilidade-civil-familiar/', '/seguros/saude-internacional/', '/seguros/responsabilidade-civil-profissional/', '/private-clients/family-offices/'],
 'en': ['/en/home-insurance-quote/', '/en/home-insurance-spain/', '/en/art-jewellery-watches-insurance/', '/en/blog/luxury-car-insurance-portugal/', '/en/blog/marinas-yachts-portugal-spain/', '/en/blog/family-liability-cover-portugal/', '/en/international-health-insurance/', '/en/professional-liability-insurance-portugal/', '/en/family-office-insurance/'],
 'de': ['/de/hausversicherung-portugal/', '/de/hausversicherung-spanien/', '/de/schmuck-uhren-versicherung-portugal-spanien/', '/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/', '/de/blog/marinas-yachten-portugal-spanien/', '/de/privathaftpflicht-spanien/', '/de/internationale-krankenversicherung/', '/de/berufshaftpflicht-freiberufler-portugal/', '/de/family-office-versicherung/'],
 'es': ['/es/seguro-hogar-alto-valor/', '/es/seguro-hogar-alto-valor-espana/', '/es/seguro-arte-joyas-mas-alla-valor-convenido/', '/es/seguro-coches-clasicos-alto-valor-portugal-espana/', '/es/puertos-deportivos-yates-portugal-espana/', '/es/seguro-responsabilidad-civil-familiar/', '/es/seguro-medico-internacional/', '/es/seguro-responsabilidad-profesional-portugal/', '/es/seguro-family-office/'],
 'nl': ['/nl/woonverzekering-portugal/', '/nl/woonverzekering-spanje/', '/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/', '/nl/klassieke-auto-verzekering-portugal-spanje/', '/nl/jachthavens-jachten-portugal-spanje/', '/nl/aansprakelijkheidsverzekering-spanje/', '/nl/internationale-zorgverzekering/', '/nl/zzp-beroepsaansprakelijkheid-portugal/', '/nl/family-office-verzekering/'],
 'fr': ['/fr/assurance-residence-grande-valeur-portugal/', '/fr/assurance-residence-grande-valeur-espagne/', '/fr/assurance-art-bijoux-montres/', '/fr/assurance-voitures-collection-prestige/', '/fr/ports-plaisance-yachts-portugal-espagne/', '/fr/responsabilite-civile-familiale/', '/fr/assurance-sante-internationale/', '/fr/responsabilite-civile-professionnelle/', '/fr/assurance-family-office/'],
 'it': ['/it/assicurazione-casa-alto-valore/', '/it/assicurazione-casa-alto-valore-spagna/', '/it/assicurazione-arte-gioielli-oltre-valore-concordato/', '/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/', '/it/marine-yacht-portogallo-spagna/', '/it/responsabilita-civile-famiglia/', '/it/assicurazione-sanitaria-internazionale/', '/it/responsabilita-civile-professionale/', '/it/assicurazione-family-office/'],
 'pl': ['/pl/ubezpieczenie-domu-portugalia/', '/pl/ubezpieczenie-domu-hiszpania/', '/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/', '/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/', '/pl/mariny-jachty-portugalia-hiszpania/', '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/', '/pl/miedzynarodowe-ubezpieczenie-zdrowotne/', '/pl/ubezpieczenie-oc-zawodowej/', '/pl/ubezpieczenie-family-office/'],
 'se': ['/se/hemforsakring-portugal/', '/se/hemforsakring-spanien/', '/se/konst-smycken-forsakring-utover-avtalat-varde/', '/se/veteranbil-forsakring-portugal-spanien/', '/se/marinor-yachter-portugal-spanien/', '/se/ansvarsforsakring-portugal/', '/se/internationell-sjukvardsforsakring/', '/se/ansvarsforsakring-yrkesverksamhet/', '/se/family-office-forsakring/'],
 'dk': ['/dk/husforsikring-portugal/', '/dk/husforsikring-spanien/', '/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/', '/dk/veteranbil-forsikring-portugal-spanien/', '/dk/lystbaadehavne-yachter-portugal-spanien/', '/dk/ansvarsforsikring-portugal/', '/dk/international-sundhedsforsikring/', '/dk/erhvervsansvarsforsikring/', '/dk/family-office-forsikring/'],
 'il': ['/il/home-insurance-portugal/', '/il/home-insurance-spain/', '/il/art-jewellery-beyond-agreed-value/', '/il/classic-car-insurance-portugal-spain/', '/il/marinas-yachts-portugal-spain/', '/il/liability-insurance-portugal/', '/il/international-health-insurance/', '/il/professional-liability-insurance/', '/il/family-office-insurance/'],
 'zh': ['/zh/home-insurance-portugal/', '/zh/home-insurance-spain/', '/zh/art-jewellery-beyond-agreed-value/', '/zh/classic-car-insurance-portugal-spain/', '/zh/marinas-yachts-portugal-spain/', '/zh/liability-insurance-portugal/', '/zh/international-health-insurance/', '/zh/professional-liability-insurance/', '/zh/family-office-insurance/'],
}
CAT = {l: dict(zip(KEYS, v)) for l, v in CAT.items()}
TITLES = {
 'en':('Homes','Valuables & vehicles','Health & liability','Destinations','Private Clients','Families & family offices','Health'),
 'pt':('Casas','Valores e veículos','Saúde e responsabilidade','Destinos','Private Clients','Famílias e family offices','Saúde'),
 'de':('Immobilien','Werte & Fahrzeuge','Gesundheit & Haftung','Destinationen','Private Clients','Familien & Family Offices','Gesundheit'),
 'es':('Viviendas','Bienes de valor y vehículos','Salud y responsabilidad','Destinos','Private Clients','Familias y family offices','Salud'),
 'nl':('Wonen','Waardevol','Gezondheid & aansprakelijkheid','Bestemmingen','Private Clients','Families & family offices','Gezondheid'),
 'fr':('Habitation','Biens de valeur et véhicules','Santé et responsabilité','Destinations','Private Clients','Familles et family offices','Santé'),
 'it':('Casa','Beni di valore e veicoli','Salute e responsabilità','Destinazioni','Private Clients','Famiglie e family office','Salute'),
 'pl':('Dom','Przedmioty wartościowe i pojazdy','Zdrowie i odpowiedzialność','Destynacje','Private Clients','Rodziny i family office','Zdrowie'),
 'se':('Hem','Värdeföremål och fordon','Hälsa och ansvar','Destinationer','Private Clients','Familjer och family offices','Hälsa'),
 'dk':('Bolig','Værdier og køretøjer','Sundhed og ansvar','Destinationer','Private Clients','Familier og family offices','Sundhed'),
 'il':('בתים','פריטי ערך ורכבים','בריאות ואחריות','יעדים','Private Clients','משפחות ומשרדי משפחה','בריאות'),
 'zh':('住宅','贵重物品与车辆','健康与责任','目的地','Private Clients','家族与家族办公室','健康'),
}
BLOCK = {
 'en':('What we insure','For private clients and their families, in Portugal and Spain.'),
 'pt':('O que seguramos','Para clientes privados e as suas famílias, em Portugal e Espanha.'),
 'de':('Was wir versichern','Für Private Clients und ihre Familien, in Portugal und Spanien.'),
 'es':('Lo que aseguramos','Para clientes privados y sus familias, en España y Portugal.'),
 'nl':('Wat wij verzekeren','Voor private clients en hun gezinnen, in Portugal en Spanje.'),
 'fr':('Ce que nous assurons','Pour les clients privés et leur famille, au Portugal et en Espagne.'),
 'it':('Che cosa assicuriamo','Per clienti privati e le loro famiglie, in Portogallo e Spagna.'),
 'pl':('Co ubezpieczamy','Dla klientów prywatnych i ich rodzin, w Portugalii i Hiszpanii.'),
 'se':('Det vi försäkrar','För privatkunder och deras familjer, i Portugal och Spanien.'),
 'dk':('Det, vi forsikrer','For private kunder og deres familier, i Portugal og Spanien.'),
 'il':('מה אנחנו מבטחים','ללקוחות פרטיים ולמשפחותיהם, בפורטוגל ובספרד.'),
 'zh':('我们承保的内容','为葡萄牙与西班牙的私人客户及其家庭提供保障。'),
}
LINEKEY = {'homes_pt':'homes','homes_es':'homes','art':'art','cars':'cars','yachts':'yachts','liability':'liability','ipmi':'ipmi','fo':'familyoffice'}
def label(lang, k):
    T = B.C[lang]['T']
    if k == 'prof': return PROF_LABEL[lang]
    a, b = T['lines'][LINEKEY[k]]
    if k == 'homes_pt': a = a + ' — ' + T['pt']
    if k == 'homes_es': a = a + ' — ' + T['es']
    return a, b

def line_pages():
    tpls = {l: open(PUB + c['tpl'] + '/index.html', encoding='utf-8').read() for l, c in B.L.items()}
    out = []
    for (k, lang), D in P.items():
        k2 = 'liability' if k == 'liability' else k
        T = B.C[lang]['T']; path = '/' + D['slug'] + '/'
        assert CAT[lang][k2] == path, (lang, k2, path, CAT[lang][k2])
        M = dict(eyebrow='Private Clients', h1=D['h1'], sub=D['intro'], h_diff=HEAD[lang][0], points=D['points'],
                 h_lines=HEAD[lang][1], lines=[(CAT[lang][x],) + label(lang, x) for x in KEYS if x != k2],
                 h_how=T['h_how'], how=T['how'], h_faq=T['h_faq'], faq=D['faq'],
                 h_other=T['hub_title'], other=[(B.url(lang, d), B.C[lang]['names'][d]) for d in B.DEST] + [(B.url(lang), T['hub_title'])],
                 disclaimer=T['disclaimer'], cta=T['cta'], hero_meta=T['hero_meta'])
        crumbs = [(T['home'], B.L[lang]['home']), (D['h1'], path)]
        title = D['h1'] + ' | Adler & Rochefort'
        desc = D['intro'][:155].rsplit(' ', 1)[0] + '…'
        tpl = tpls[lang]; parts = B.parts_for(lang, tpl); sk = B.L[lang]['skin']
        if sk == 'cluster':
            i = tpl.find('<nav class="breadcrumb"'); j = tpl.find('</main>') + 7; body = B.cluster_main(lang, M, crumbs, parts)
        else:
            i = tpl.find('<main'); j = tpl.find('</main>') + 7; body = (B.lp_main if sk in ('en', 'fr') else B.pt_main)(lang, M, crumbs, parts)
        html = tpl[:i] + body + tpl[j:]
        alts = [(lang, path)] + ([('en', CAT['en'][k2])] if lang != 'en' else [])
        html = B.head_replace(html, lang, title, desc, path, alts, B.ld_for(lang, path, title, crumbs, D['faq']))
        html = B.fix_hidden(html, lang, None, path)
        p = PUB + D['slug'] + '/index.html'; os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'w', encoding='utf-8').write(html); out.append(path)
    return out

def nav_spec(lang):
    t = TITLES[lang]; T = B.C[lang]['T']
    lab = lambda k: label(lang, k)[0]
    dests = lambda c: [(B.url(lang, d), B.C[lang]['names'][d]) for d in B.DEST if B.COUNTRY[d] == c]
    common = [(t[1], [(CAT[lang]['art'], lab('art')), (CAT[lang]['cars'], lab('cars')), (CAT[lang]['yachts'], lab('yachts'))]),
              (t[2], [(CAT[lang]['ipmi'], lab('ipmi')), (CAT[lang]['liability'], lab('liability')), (CAT[lang]['prof'], lab('prof'))])]
    return {
     'PT': (T['pt'], '🇵🇹 ' + T['pt'], [(t[0], [(CAT[lang]['homes_pt'], T['lines']['homes'][0])])] + common + [(t[3], dests('PT'))]),
     'ES': (T['es'], '🇪🇸 ' + T['es'], [(t[0], [(CAT[lang]['homes_es'], T['lines']['homes'][0])])] + common + [(t[3], dests('ES'))]),
     'PC': ('Private Clients', 'Private Clients', [
        (t[4], [(CAT[lang]['homes_pt'], '🇵🇹 Private Clients — ' + T['pt']), (CAT[lang]['homes_es'], '🇪🇸 Private Clients — ' + T['es']), (B.url(lang), T['hub_title'])]),
        (t[5], [(CAT[lang]['fo'], lab('fo'))]),
        (t[6], [(CAT[lang]['ipmi'], lab('ipmi'))])]),
    }

def block_html(lang):
    h, sub = BLOCK[lang]; T = B.C[lang]['T']
    d = ' dir="rtl"' if lang == 'il' else ''
    cards = ''.join(f'<a href="{CAT[lang][k]}" style="display:block;border:1px solid #E5E1DA;border-radius:14px;padding:18px 20px;text-decoration:none;color:inherit;background:#fff"><strong style="display:block;font-size:16px;margin-bottom:6px">{B.e(label(lang,k)[0])}</strong><span style="font-size:14px;line-height:1.55;opacity:.8">{B.e(label(lang,k)[1])}</span></a>' for k in KEYS)
    return (f'<section class="ar-lines" id="ar-lines" aria-labelledby="ar-lines-title"{d} style="padding:72px 24px">\n'
            f'  <div style="max-width:1120px;margin:0 auto">\n    <h2 id="ar-lines-title">{B.e(h)}</h2>\n    <p style="margin:8px 0 28px;opacity:.8">{B.e(sub)}</p>\n'
            f'    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px">{cards}</div>\n'
            f'    <p style="margin-top:24px"><a href="{B.url(lang)}" style="font-weight:600">{B.e(T["hub_title"])} →</a></p>\n  </div>\n</section>\n')

# ---- November 2026: holiday homes (PT/ES), health PT & ES, wellbeing liability ----
def _extra():
    import topics as TP
    X = {}
    for l in B.L:
        X[l] = {t: TP.path_of(t, l) for t in ('hol_pt', 'hol_es', 'health', 'wellness')}
    return X, TP.SHORT
HOLDESC = {
 'en':'Second homes from €500,000 of rebuild value, written for the weeks they stand empty.',
 'pt':'Segundas habitações a partir de 500.000 € de valor de reconstrução, pensadas para as semanas em que estão vazias.',
 'es':'Segundas residencias desde 500.000 € de valor de reconstrucción, pensadas para las semanas en que están vacías.',
 'de':'Zweitwohnsitze ab 500.000 € Wiederaufbauwert, versichert auch für die Wochen, in denen sie leer stehen.',
 'fr':'Résidences secondaires à partir de 500 000 € de valeur de reconstruction, pensées pour les semaines d’inoccupation.',
 'it':'Seconde case da 500.000 € di valore di ricostruzione, pensate per le settimane in cui restano vuote.',
 'nl':'Tweede woningen vanaf € 500.000 herbouwwaarde, ingericht op de weken dat ze leegstaan.',
 'pl':'Drugie domy od 500 000 € wartości odtworzeniowej, z ochroną na tygodnie, gdy stoją puste.',
 'se':'Andrahem från 500 000 € i återuppbyggnadsvärde, försäkrade även för veckorna de står tomma.',
 'dk':'Sommerboliger fra 500.000 € i genopførelsesværdi, forsikret også i de uger, de står tomme.',
 'il':'בתים שניים מ־500,000 € ערך בנייה מחדש, מבוטחים גם בשבועות שבהם הם עומדים ריקים.',
 'zh':'重建价值 50 万欧元起的第二居所，空置期间同样获得保障。',
}
def nav_spec2(lang):
    X, S = _extra(); x = X[lang]; s = S[lang]
    base = nav_spec(lang)
    nm = lambda t: s[t].split(' — ')[0]
    out = {}
    for key, (dl, ml, cols) in base.items():
        cols = [(h, list(links)) for h, links in cols]
        if key in ('PT', 'ES'):
            hk = 'hol_pt' if key == 'PT' else 'hol_es'
            cols[0][1].append((x[hk], nm(hk)))
            health = cols[2][1]
            i = [h for h, _ in health].index(CAT[lang]['ipmi'])
            health.insert(i + 1, (x['health'], s['health']))
            health.append((x['wellness'], s['wellness']))
        out[key] = (dl, ml, cols)
    return out
def block_html2(lang):
    X, S = _extra()
    h = block_html(lang)
    card = lambda href, a, b: f'<a href="{href}" style="display:block;border:1px solid #E5E1DA;border-radius:14px;padding:18px 20px;text-decoration:none;color:inherit;background:#fff"><strong style="display:block;font-size:16px;margin-bottom:6px">{B.e(a)}</strong><span style="font-size:14px;line-height:1.55;opacity:.8">{B.e(b)}</span></a>'
    extra = card(X[lang]['hol_pt'], S[lang]['hol_pt'], HOLDESC[lang]) + card(X[lang]['hol_es'], S[lang]['hol_es'], HOLDESC[lang])
    anchor = f'<a href="{CAT[lang]["art"]}" style='
    i = h.find(anchor); assert i > 0
    return h[:i] + extra + h[i:]
