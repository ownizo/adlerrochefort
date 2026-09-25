#!/usr/bin/env python3
"""Partner-strip heading: 'Insurers we work with' -> 'Insurers & co-brokerage partners we work with', all languages. Idempotent."""
import os
EN = 'Insurers &amp; co-brokerage partners <em>we work with</em>'
PT = 'Seguradoras e parceiros de co-mediação <em>com quem trabalhamos</em>'
DE = 'Versicherer &amp; Co-Brokerage-Partner, <em>mit denen wir arbeiten</em>'
MAP = [
    ('Insurers we <em>work with</em>', EN),
    ('We compare the <em>insurers we work with</em>', EN),
    ('Seguradoras com que <em>trabalhamos</em>', PT),
    ('Comparamos as <em>seguradoras com que trabalhamos</em>', PT),
    ('Versicherer, mit denen <em>wir arbeiten</em>', DE),
    ('Versicherer, mit denen wir <em>arbeiten</em>', DE),
    ('Wir vergleichen die <em>führenden Versicherer</em>', DE),
    ('Nous comparons les <em>grands assureurs</em>', 'Assureurs et partenaires de co-courtage <em>avec qui nous travaillons</em>'),
    ('Wij vergelijken de <em>toonaangevende verzekeraars</em>', 'Verzekeraars en co-brokeragepartners <em>met wie we werken</em>'),
    ('Porównujemy <em>wiodących ubezpieczycieli</em>', 'Ubezpieczyciele i partnerzy co-brokerage, <em>z którymi współpracujemy</em>'),
    ('Vi jämför <em>ledande försäkringsbolag</em>', 'Försäkringsbolag och co-brokingpartner <em>vi samarbetar med</em>'),
    ('Vi sammenligner <em>førende forsikringsselskaber</em>', 'Forsikringsselskaber og co-brokerage-partnere, <em>vi samarbejder med</em>'),
    ('אנחנו משווים בין <em>מבטחים מובילים</em>', 'מבטחים ושותפי תיווך משותף <em>שאנחנו עובדים איתם</em>'),
    ('我们比较<em>主要保险公司</em>', '我们合作的<em>保险公司与联合经纪伙伴</em>'),
]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
n = 0
for base in ('public', 'scripts'):
    for dp, dn, fn in os.walk(os.path.join(ROOT, base)):
        dn[:] = [d for d in dn if d != 'node_modules']
        for f in fn:
            if f == os.path.basename(__file__) or not f.endswith(('.html', '.mjs', '.js')):
                continue
            p = os.path.join(dp, f)
            s = open(p, encoding='utf-8').read(); o = s
            for a, b in MAP:
                s = s.replace(a, b)
            if s != o:
                open(p, 'w', encoding='utf-8').write(s); n += 1
print('changed', n, 'files')
