"""Standard homepage for every language, built from the English homepage (the PT/EN/DE model).

    python3 home_build.py strings        -> writes /home/claude/home/strings.json (what needs translating)
    python3 home_build.py build es fr .. -> writes public/<lang>/index.html from en/index.html + tr/<lang>.json
"""
import re, sys, json, os, html as H
sys.path.insert(0, '/home/claude/dest'); sys.path.insert(0, '/home/claude/tools')
import build as B, buildnav, catalog as C, ipmi_band, topics as TP
from catalog import CAT, label

PUB = B.PUB
EN = open(PUB + 'en/index.html', encoding='utf-8').read()
NATIVE = {'pt': 'Português', 'en': 'English', 'es': 'Español', 'de': 'Deutsch', 'fr': 'Français', 'it': 'Italiano', 'nl': 'Nederlands',
          'pl': 'Polski', 'se': 'Svenska', 'dk': 'Dansk', 'il': 'עברית', 'zh': '简体中文'}
HTMLLANG = {'es': 'es', 'fr': 'fr', 'it': 'it', 'nl': 'nl', 'pl': 'pl', 'se': 'sv', 'dk': 'da', 'il': 'he', 'zh': 'zh-CN'}
TRDIR = '/home/claude/home/tr/'


def e(s): return H.escape(s, quote=False)


def block(t, start_pat, tag):
    i = t.find(start_pat)
    if i < 0: raise ValueError(start_pat)
    return i, buildnav.block_end(t, i, tag)


def li(links):
    return ''.join(f'\n            <li><a href="{u}">{e(n)}</a></li>' for u, n in links) + '\n          '


def gen_parts(t, lang):
    X, S = C._extra()
    x = X[lang]; s = S[lang]
    lab = lambda k: label(lang, k)[0]
    dest = lambda c: [(B.url(lang, d), B.C[lang]['names'][d]) for d in B.DEST if B.COUNTRY[d] == c]
    # country router lists (4 <ul class="country-card-links">, in order)
    lists = [[(CAT[lang]['homes_pt'], lab('homes_pt').split(' — ')[0]), (x['hol_pt'], s['hol_pt'].split(' — ')[0]), (CAT[lang]['art'], lab('art')),
              (CAT[lang]['liability'], lab('liability')), (CAT[lang]['ipmi'], lab('ipmi')), (x['health'], s['health'])],
             dest('PT'),
             [(CAT[lang]['homes_es'], lab('homes_es').split(' — ')[0]), (x['hol_es'], s['hol_es'].split(' — ')[0]), (CAT[lang]['art'], lab('art')),
              (CAT[lang]['liability'], lab('liability'))],
             dest('ES')]
    out = []; pos = 0; k = 0
    for m in re.finditer(r'(<ul class="country-card-links">)(.*?)(</ul>)', t, re.S):
        out.append(t[pos:m.start()]); out.append(m.group(1) + li(lists[k]) + m.group(3)); pos = m.end(); k += 1
    out.append(t[pos:]); t = ''.join(out)
    # IPMI band
    i = t.find('<!-- IPMI-BAND -->'); j = t.find('</section>', i) + len('</section>\n')
    t = t[:i] + ipmi_band.band(lang) + t[j:]
    # catalogue block
    i, j = block(t, '<section class="ar-lines"', 'section')
    t = t[:i] + C.block_html2(lang).rstrip('\n') + t[j:]
    # blog section -> three guides (no blog in these languages)
    i, j = block(t, '<div class="blog-grid">', 'div')
    cards = [(B.url(lang), B.C[lang]['T']['hub_title'], B.C[lang]['T']['hub_intro']),
             (x['hol_pt'], s['hol_pt'], C.HOLDESC[lang]),
             (x['health'], s['health'], ipmi_band.B[lang][2])]
    g = '<div class="blog-grid">\n' + ''.join(
        f'    <a href="{u}" class="blog-card fade-up" style="text-decoration:none;color:inherit;">\n      <div class="blog-card-img">\n        <div class="blog-card-img-bg" style="background: linear-gradient(135deg, #292929 0%, #FF6300 100%);"></div>\n      </div>\n'
        f'      <div class="blog-card-body">\n        <h3 class="blog-card-title">{e(a)}</h3>\n        <p class="blog-card-excerpt">{e(b)}</p>\n      </div>\n    </a>\n' for u, a, b in cards) + '  </div>'
    t = t[:i] + g + t[j:]
    t = t.replace('<a href="/en/blog/" class="btn-primary">', f'<a href="{B.url(lang)}" class="btn-primary">', 1)
    # footer Portugal / Spain columns
    fc = [[(CAT[lang]['homes_pt'], lab('homes_pt').split(' — ')[0]), (x['hol_pt'], s['hol_pt'].split(' — ')[0]), (CAT[lang]['art'], lab('art')), (x['health'], s['health'])],
          [(CAT[lang]['homes_es'], lab('homes_es').split(' — ')[0]), (x['hol_es'], s['hol_es'].split(' — ')[0]), (CAT[lang]['ipmi'], lab('ipmi'))]]
    out = []; pos = 0; k = 0
    for m in re.finditer(r'(<div class="footer-col-title">(?:Portugal|Spain)</div>\s*<ul class="footer-col-links">)(.*?)(</ul>)', t, re.S):
        out.append(t[pos:m.start()]); out.append(m.group(1) + li(fc[k]).replace('            ', '        ') + m.group(3)); pos = m.end(); k += 1
    out.append(t[pos:]); t = ''.join(out)
    # nav panels
    buildnav.SPEC[lang] = C.nav_spec2(lang)
    t = buildnav.apply(t, lang)
    return t


def link_map(lang):
    M = {}
    for k in CAT['en']:
        M[CAT['en'][k]] = CAT[lang][k]
    for tp in TP.TOPICS:
        a, b = TP.path_of(tp, 'en'), TP.path_of(tp, lang)
        if a and b: M[a] = b
    for d in B.DEST: M[B.url('en', d)] = B.url(lang, d)
    M[B.url('en')] = B.url(lang)
    M.update({'/en/private-clients/': CAT[lang]['homes_pt'], '/en/private-clients-spain/': CAT[lang]['homes_es'],
              '/en/private-clients-spain/#where': CAT[lang]['homes_es'], '/en/international-health-insurance-portugal/': TP.path_of('health', lang),
              '/en/family-liability-insurance-spain/': CAT[lang]['liability'], '/en/blog/': B.url(lang)})
    home = B.L[lang]['home']
    for a in ('contact', 'faq', 'blog'): M[f'/en/#{a}'] = f'{home}#{a}'
    M['/en/'] = home
    M['/en/insurance-review/'] = f'{home}#contact'
    M['/en/blog/hiscox-home-insurance-portugal/'] = CAT[lang]['homes_pt']
    return M


TEXT = re.compile(r'>([^<>]+)<')
ATTR = re.compile(r'\b(placeholder|aria-label|alt|title|data-ok|data-err)="([^"]+)"')
SKIP = re.compile(r'(?s)<script\b.*?</script>|<style\b.*?</style>|<svg\b.*?</svg>|<!--.*?-->|<blockquote>.*?</blockquote>|<figcaption>.*?</figcaption>|<ul class="ar-langsel-menu".*?</ul>|<noscript>.*?</noscript>')
KEEP = re.compile(r'^[\d\s+·.,:/€%()–—\-★→←]+$|^[\w.+-]+@[\w.-]+$|^(Adler &amp; Rochefort|Hiscox|Chubb|MGEN|Asisa|Cigna|Hispania|Innovarisk|Liberty|Allianz Care|APRIL International|PT·ES|ASF|A&amp;R|Hugo Gonçalves|WhatsApp|Trustpilot|Portugal|España|IPMI|Allianz Care · Cigna Global · APRIL International|Ownizo, Unipessoal Lda\.)$')


def segments(t):
    """yield (start, end, kind) of translatable pieces in body, outside skipped regions"""
    b = t.find('<body')
    skips = [(m.start(), m.end()) for m in SKIP.finditer(t, b)]
    def skipped(p):
        for a, z in skips:
            if a <= p < z: return True
        return False
    for m in TEXT.finditer(t, b):
        if not skipped(m.start()): yield m.start(1), m.end(1), 'text'
    for m in ATTR.finditer(t, b):
        if not skipped(m.start()): yield m.start(2), m.end(2), 'attr'


def norm(s): return ' '.join(s.split())


def strings(t):
    seen = []; S = set()
    for a, z, k in segments(t):
        s = norm(t[a:z])
        if not s or not re.search(r'[A-Za-z]{2}', s) or KEEP.match(s): continue
        if s not in S: S.add(s); seen.append(s)
    return seen


def translate(t, tr, misses):
    segs = sorted(segments(t), key=lambda x: x[0])
    out = []; pos = 0
    for a, z, k in segs:
        if a < pos: continue
        raw = t[a:z]; s = norm(raw)
        if s in tr:
            lead = raw[:len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
            v = tr[s]
            if k == 'attr': v = v.replace('"', '&quot;')
            out.append(t[pos:a]); out.append(lead + v + trail); pos = z
        elif s and re.search(r'[A-Za-z]{2}', s) and not KEEP.match(s):
            misses.add(s)
    out.append(t[pos:])
    return ''.join(out)


def head_from(target, t, lang):
    """take SEO head pieces from the current page of that language"""
    def grab(p, s, flags=0):
        m = re.search(p, s, flags); return m.group(0) if m else None
    for p in [r'<title>.*?</title>', r'<meta name="description" content="[^"]*"\s*/?>', r'<link rel="canonical" href="[^"]*"\s*/?>',
              r'<meta property="og:title" content="[^"]*"\s*/?>', r'<meta property="og:description" content="[^"]*"\s*/?>',
              r'<meta property="og:url" content="[^"]*"\s*/?>', r'<meta property="og:locale" content="[^"]*"\s*/?>',
              r'<meta name="twitter:title" content="[^"]*"\s*/?>', r'<meta name="twitter:description" content="[^"]*"\s*/?>']:
        new = grab(p, target, re.S); old = grab(p, t, re.S)
        if new and old: t = t.replace(old, new, 1)
    # hreflang alternates: the target's
    alts = re.findall(r'[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*/?>\n?', target)
    t = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*/?>\n?', '', t)
    t = re.sub(r'(<link rel="canonical" href="[^"]*"\s*/?>\n?)', lambda m: m.group(1) + ('' if m.group(1).endswith('\n') else '\n') + ''.join(a if a.endswith('\n') else a + '\n' for a in alts), t, count=1)
    # JSON-LD: target's, minus its FAQPage (rebuilt from the visible FAQ)
    t = re.sub(r'[ \t]*<script type="application/ld\+json">.*?</script>\n?', '', t, flags=re.S)
    keep = [j for j in re.findall(r'<script type="application/ld\+json">(.*?)</script>', target, re.S) if '"FAQPage"' not in j]
    t = t.replace('</head>', ''.join('<script type="application/ld+json">' + j.strip() + '</script>\n' for j in keep) + '</head>', 1)
    hl = HTMLLANG[lang]
    t = re.sub(r'<html lang="[^"]*"[^>]*>', f'<html lang="{hl}"' + (' dir="rtl"' if lang == 'il' else '') + '>', t, count=1)
    return t


def faq_ld(t, lang):
    qs = []
    for m in re.finditer(r'<button class="faq-question"[^>]*>(.*?)<span class="faq-question-icon">.*?<div class="faq-answer-inner">(.*?)</div>', t, re.S):
        q = norm(H.unescape(re.sub('<[^>]+>', '', m.group(1)))); a = norm(H.unescape(re.sub('<[^>]+>', '', m.group(2))))
        qs.append({"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}})
    ld = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": qs}
    return t.replace('</head>', '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>\n</head>', 1)


def build(lang):
    target = open(PUB + lang + '/index.html', encoding='utf-8').read()
    t = gen_parts(EN, lang)
    tr = json.load(open(TRDIR + lang + '.json', encoding='utf-8'))
    sys.path.insert(0, '/home/claude/home'); import extra
    c, ct, e1, e2 = extra.X[lang]; tr[c] = ct; tr[extra.E1] = e1; tr[extra.E2] = e2
    misses = set()
    t = translate(t, tr, misses)
    # links
    M = link_map(lang)
    t = re.sub(r'href="(/en/[^"]*)"', lambda m: f'href="{M.get(m.group(1), m.group(1))}"', t)
    # forms
    hero = {'fr': 'lead-fr', 'nl': 'lead-nl'}.get(lang, f'{lang}-free-analysis')
    t = t.replace('name="free-analysis"', f'name="{hero}"').replace('value="free-analysis"', f'value="{hero}"')
    cons = {'fr': 'consentement', 'nl': 'toestemming'}.get(lang)
    if cons: t = t.replace('name="rgpd" value="yes" required', f'name="{cons}" value="yes" required')
    t = t.replace('name="contact-en"', f'name="{lang}-contact"').replace('value="contact-en"', f'value="{lang}-contact"')
    t = t.replace(f'<input type="hidden" name="form-name" value="{hero}">', f'<input type="hidden" name="form-name" value="{hero}"><input type="hidden" name="language" value="{HTMLLANG[lang]}">', 1)
    # language selector button label, EN-only preference script
    t = re.sub(r'<span class="ar-langsel-label">English</span>', f'<span class="ar-langsel-label">{NATIVE[lang]}</span>', t)
    t = re.sub(r'\s*<script[^>]*src="/js/lang-pref\.js"[^>]*></script>', '', t)
    PTN = {'it': 'Portogallo', 'pl': 'Portugalia', 'il': 'פורטוגל', 'zh': '葡萄牙'}
    if lang in PTN: t = t.replace('<div class="country-card-title">Portugal</div>', f'<div class="country-card-title">{PTN[lang]}</div>')
    t = head_from(target, t, lang)
    t = faq_ld(t, lang)
    return t, misses


if __name__ == '__main__':
    if sys.argv[1] == 'strings':
        t = gen_parts(EN, 'en')
        json.dump(strings(t), open('/home/claude/home/strings.json', 'w'), indent=1, ensure_ascii=False)
        print(len(strings(t)))
    elif sys.argv[1] == 'build':
        for lang in sys.argv[2:]:
            t, misses = build(lang)
            open(PUB + lang + '/index.html', 'w', encoding='utf-8').write(t)
            ens = set(json.load(open('/home/claude/home/strings.json')))
            misses = {m for m in misses if m in ens}
            print(lang, 'untranslated:', len(misses))
            for m in sorted(misses)[:40]: print('   ', m[:120])
