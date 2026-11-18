#!/usr/bin/env python3
"""
Fix the tax-number item in the "What we will ask for your quote" lists (Nov 2026).

scripts/apply-quote-info.mjs wrote the same list on every product page, with
"Portuguese tax number (NIF)", including pages about Spain. In Spain a foreign
owner identifies with the NIE (or the company's NIF when the property is held
through a Spanish company). Spain-only pages get the Spanish label; pages that
cover both countries get "NIF (Portugal) or NIE (Spain)". Portugal pages are
left as they are. Idempotent.
"""
import glob, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ES_URL = re.compile(r'spain|spanien|spanje|espana|espanha|hiszpania|mallorca|ibiza|marbella|madrid|barcelona|javea', re.I)
PT_URL = re.compile(r'portugal|lisboa|algarve|cascais|comporta|madeira|porto|quinta-do-lago|lagos|aljezur|sagres|ericeira|nazare', re.I)
ES_TITLE = re.compile(r'Spain|Spanien|Espanha|España', re.I)

OLD = {
    'en': 'Portuguese tax number (NIF)', 'de': 'Portugiesische Steuernummer (NIF)',
    'se': 'Portugisiskt skattenummer (NIF)', 'dk': 'Portugisisk skattenummer (NIF)', 'pt': 'NIF',
}
ES = {
    'en': 'Spanish NIE (or the company’s NIF, if the property is owned through a company)',
    'de': 'Spanische NIE (bzw. die NIF der Gesellschaft, wenn die Immobilie über eine Gesellschaft gehalten wird)',
    'se': 'Spanskt NIE-nummer (eller bolagets NIF, om bostaden ägs via ett bolag)',
    'dk': 'Spansk NIE-nummer (eller selskabets NIF, hvis boligen ejes via et selskab)',
}
BOTH = {
    'en': 'Tax number: NIF (Portugal) or NIE (Spain)', 'de': 'Steuernummer: NIF (Portugal) oder NIE (Spanien)',
    'se': 'Skattenummer: NIF (Portugal) eller NIE (Spanien)', 'dk': 'Skattenummer: NIF (Portugal) eller NIE (Spanien)',
    'pt': 'NIF (Portugal) ou NIE (Espanha)',
}

changed = []
for f in sorted(glob.glob(str(ROOT / 'public/**/index.html'), recursive=True)):
    url = f[len(str(ROOT / 'public')):-len('index.html')]
    seg = url.strip('/').split('/')[0]
    lang = seg if seg in ('en', 'de', 'se', 'dk') else 'pt'
    s = open(f, encoding='utf-8').read()
    m = re.search(r'<div class="arqi">[\s\S]*?</div>', s)
    if not m:
        continue
    block = m.group(0)
    old = f'<li>{OLD[lang]}</li>'
    if old not in block:
        continue
    es, pt = bool(ES_URL.search(url)), bool(PT_URL.search(url))
    title = re.search(r'<title>(.*?)</title>', s, re.S).group(1)
    if es and not pt:
        new = ES.get(lang)
    elif (es and pt) or (not pt and ES_TITLE.search(title)):
        new = BOTH.get(lang)
    else:
        continue
    if not new:
        continue
    s = s.replace(block, block.replace(old, f'<li>{new}</li>'))
    open(f, 'w', encoding='utf-8').write(s)
    changed.append(url)

print(f'{len(changed)} pages updated')
print('\n'.join(changed))
