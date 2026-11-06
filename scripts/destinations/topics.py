import os, re, sys, json
sys.path.insert(0, '/home/claude/dest'); sys.path.insert(0, '/home/claude/tools')
import build as B
from catalog import CAT, KEYS, label
import topics_a, topics_b, topics_c, topics_d
P = {}
for m in (topics_a, topics_b, topics_c, topics_d):
    P.update({k: v for k, v in m.P.items() if v})
P = {k: v for k, v in P.items() if not k[1].endswith('_patch')}
PUB = B.PUB
LANGS = list(B.L)
TOPICS = ['hol_pt', 'hol_es', 'health', 'wellness']

SHORT = {  # short labels used for sibling links and hidden form fields
 'en': {'hol_pt':'Holiday homes — Portugal','hol_es':'Holiday homes — Spain','health':'Health insurance — Portugal & Spain','wellness':'Therapists, yoga & Pilates','brazil':'Brazilian families'},
 'pt': {'hol_pt':'Casas de férias — Portugal','hol_es':'Casas de férias — Espanha','health':'Saúde — Portugal e Espanha','wellness':'Terapeutas, yoga e pilates','brazil':'Famílias brasileiras'},
 'es': {'hol_pt':'Casas de vacaciones — Portugal','hol_es':'Casas de vacaciones — España','health':'Salud — España y Portugal','wellness':'Terapeutas, yoga y pilates'},
 'de': {'hol_pt':'Ferienhäuser — Portugal','hol_es':'Ferienhäuser — Spanien','health':'Krankenversicherung — Portugal & Spanien','wellness':'Therapeuten, Yoga & Pilates'},
 'fr': {'hol_pt':'Résidences secondaires — Portugal','hol_es':'Résidences secondaires — Espagne','health':'Santé — Portugal et Espagne','wellness':'Thérapeutes, yoga et Pilates'},
 'it': {'hol_pt':'Case vacanze — Portogallo','hol_es':'Case vacanze — Spagna','health':'Salute — Portogallo e Spagna','wellness':'Terapisti, yoga e pilates'},
 'nl': {'hol_pt':'Vakantiewoningen — Portugal','hol_es':'Vakantiewoningen — Spanje','health':'Zorgverzekering — Portugal & Spanje','wellness':'Therapeuten, yoga & pilates'},
 'pl': {'hol_pt':'Domy wakacyjne — Portugalia','hol_es':'Domy wakacyjne — Hiszpania','health':'Zdrowie — Portugalia i Hiszpania','wellness':'Terapeuci, joga i pilates'},
 'se': {'hol_pt':'Fritidshus — Portugal','hol_es':'Fritidshus — Spanien','health':'Sjukvård — Portugal & Spanien','wellness':'Terapeuter, yoga & pilates'},
 'dk': {'hol_pt':'Feriehuse — Portugal','hol_es':'Feriehuse — Spanien','health':'Sundhed — Portugal & Spanien','wellness':'Terapeuter, yoga & pilates'},
 'il': {'hol_pt':'בתי נופש — פורטוגל','hol_es':'בתי נופש — ספרד','health':'בריאות — פורטוגל וספרד','wellness':'מטפלים, יוגה ופילאטיס'},
 'zh': {'hol_pt':'度假屋 — 葡萄牙','hol_es':'度假屋 — 西班牙','health':'健康保险 — 葡萄牙与西班牙','wellness':'治疗师、瑜伽与普拉提'},
}
SEE = {'en':'Also for international residents','pt':'Também para residentes internacionais','es':'También para residentes internacionales',
       'de':'Auch für internationale Residenten','fr':'Aussi pour les résidents internationaux','it':'Anche per i residenti internazionali',
       'nl':'Ook voor internationale bewoners','pl':'Także dla rezydentów z zagranicy','se':'Även för internationella invånare',
       'dk':'Også for internationale beboere','il':'גם לתושבים בינלאומיים','zh':'同样适用于国际居民'}

def path_of(topic, lang):
    d = P.get((topic, lang)); return '/' + d['slug'] + '/' if d else None

def alternates(topic):
    return [(l, path_of(topic, l)) for l in LANGS if path_of(topic, l)]

def set_hidden(t, name, val):
    return re.sub(r'(<input type="hidden" name="' + name + r'" value=")[^"]*(")', lambda m: m.group(1) + B.ea(val) + m.group(2), t)

def fix_form(t, lang, topic, path, h1):
    t = set_hidden(t, 'source', 'page:' + path.strip('/'))
    t = set_hidden(t, 'source_url', B.ORIGIN + path)
    m = re.search(r'<input type="hidden" name="subject" value="([^"]*)"', t)
    if m:
        pre = m.group(1).split(' — ')[0]
        t = set_hidden(t, 'subject', (pre + ' — ' + h1)[:120])
    for nm in ('product_interest', 'insurance_type'):
        m = re.search(r'<input type="hidden" name="' + nm + r'" value="([^"]*)"', t)
        if m:
            code = m.group(1).split(' · ')[0] if ' · ' in m.group(1) else lang.upper()
            t = set_hidden(t, nm, code + ' · ' + SHORT[lang].get(topic, topic))
    if lang == 'de':
        t = set_hidden(t, 'versicherungsart', SHORT['de'].get(topic, topic))
    return t

def render(topic, lang, D, tpls):
    T = B.C[lang]['T']; path = '/' + D['slug'] + '/'
    if topic == 'hol_pt': other = [(B.url(lang, d), B.C[lang]['names'][d]) for d in B.DEST if B.COUNTRY[d] == 'PT']; h_other = T['hub_title']
    elif topic == 'hol_es': other = [(B.url(lang, d), B.C[lang]['names'][d]) for d in B.DEST if B.COUNTRY[d] == 'ES']; h_other = T['hub_title']
    else:
        other = [(path_of(x, lang), SHORT[lang][x]) for x in TOPICS if x != topic and path_of(x, lang)]; h_other = SEE[lang]
    if topic in ('hol_pt', 'hol_es'):
        other = [(path_of(x, lang), SHORT[lang][x]) for x in ('hol_pt', 'hol_es') if x != topic and path_of(x, lang)] + other + [(B.url(lang), T['hub_title'])]
    skip = {'hol_pt': ('homes_pt',), 'hol_es': ('homes_es',), 'health': ('ipmi',), 'wellness': ('prof',), 'brazil': ()}[topic]
    first = {'hol_pt': ['homes_pt', 'art', 'liability'], 'hol_es': ['homes_es', 'art', 'liability'], 'health': ['ipmi', 'liability', 'homes_pt', 'homes_es'],
             'wellness': ['prof', 'liability', 'ipmi'], 'brazil': ['homes_pt', 'homes_es', 'ipmi', 'art', 'liability', 'fo']}[topic]
    order = first + [k for k in KEYS if k not in first]
    lines = [(CAT[lang][k],) + label(lang, k) for k in order]
    M = dict(eyebrow=D['eyebrow'], h1=D['h1'], sub=D['intro'], h_diff=D['h_diff'], points=D['points'],
             h_lines=__import__('lines_content').HEAD[lang][1], lines=lines, h_how=T['h_how'], how=T['how'], h_faq=T['h_faq'], faq=D['faq'],
             h_other=h_other, other=other, disclaimer=T['disclaimer'], cta=T['cta'], hero_meta=T['hero_meta'])
    crumbs = [(T['home'], B.L[lang]['home']), (D['h1'], path)]
    tpl = tpls[lang]; parts = B.parts_for(lang, tpl); sk = B.L[lang]['skin']
    if sk == 'cluster':
        i = tpl.find('<nav class="breadcrumb"'); j = tpl.find('</main>') + 7; body = B.cluster_main(lang, M, crumbs, parts)
    else:
        i = tpl.find('<main'); j = tpl.find('</main>') + 7; body = (B.lp_main if sk in ('en', 'fr') else B.pt_main)(lang, M, crumbs, parts)
    html = tpl[:i] + body + tpl[j:]
    alts = alternates(topic) if topic != 'brazil' else [('pt', path)]
    if not any(l == 'en' for l, _ in alts): alts = alts + [('en', path)] if False else alts
    html = head_replace(html, lang, D['title'] + ' | Adler & Rochefort' if len(D['title']) < 50 else D['title'], D['desc'], path, alts,
                        B.ld_for(lang, path, D['title'], crumbs, D['faq']))
    html = fix_form(html, lang, topic, path, D['h1'])
    return html

def head_replace(t, lang, title, desc, path, alts, ld):
    if not any(l == 'en' for l, _ in alts):
        # B.head_replace needs an 'en' entry for x-default; brazil page is PT only
        t = B.head_replace(t, lang, title, desc, path, alts + [('en', path)], ld)
        return re.sub(r'<link rel="alternate" hreflang="(en-GB|x-default)" href="[^"]*">\n', '', t)
    return B.head_replace(t, lang, title, desc, path, alts, ld)

if __name__ == '__main__':
    tpls = {l: open(PUB + c['tpl'] + '/index.html', encoding='utf-8').read() for l, c in B.L.items()}
    out = []
    for (topic, lang), D in sorted(P.items()):
        if D.get('keep'): continue
        html = render(topic, lang, D, tpls)
        p = PUB + D['slug'] + '/index.html'; os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'w', encoding='utf-8').write(html); out.append('/' + D['slug'] + '/')
    json.dump(out, open('/home/claude/topics-written.json', 'w'), indent=1)
    print('written', len(out))
