#!/usr/bin/env python3
"""
Writes hreflang + language-selector links on the HAND-AUTHORED members (EN, DE,
NL) of the niche-* and es-* cross-language groups defined in
scripts/lib/market-hreflang.mjs. Generated markets get the same data from the
renderer. Idempotent.

    node -e "import('./scripts/lib/market-hreflang.mjs').then(m=>...)"  # groups
    python3 scripts/sync-cluster-hreflang.py
"""
import json, os, re, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGIN = 'https://adlerrochefort.com'
js = ("import('./scripts/lib/market-hreflang.mjs').then(m=>{const o={};"
      "for (const [k,v] of m.clusterGroups()) if(k.startsWith('es-')||k.startsWith('niche-')||k.startsWith('prof-')||k==='golf'||k==='nautical') o[k]=v;"
      "process.stdout.write(JSON.stringify({groups:o,xd:m.CLUSTER_X_DEFAULT}))})")
data = json.loads(subprocess.check_output(['node', '-e', js], cwd=ROOT))
HAND = ('/en/', '/de/', '/nl/', '/fr/', '/blog/', '/private-clients/', '/seguros/')
changed = 0
for key, group in data['groups'].items():
    xd = data['xd'].get(key)
    for path in group:
        if not path.startswith(HAND):
            continue
        f = os.path.join(ROOT, 'public', path.strip('/'), 'index.html')
        if not os.path.exists(f):
            print('missing', path); continue
        s = open(f, encoding='utf-8').read(); o = s
        s = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?', '', s)
        block = ''.join(f'  <link rel="alternate" hreflang="{h}" href="{ORIGIN}{u}">\n' for u, h in group.items())
        if xd:
            block += f'  <link rel="alternate" hreflang="x-default" href="{ORIGIN}{xd}">\n'
        s = re.sub(r'(<link rel="canonical"[^>]*>\n)', lambda m: m.group(1) + block, s, count=1)
        by_h = {h: u for u, h in group.items()}
        def fix(m):
            href, rest, h, tail, inner = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
            if h in by_h and by_h[h] != path:
                inner = re.sub(r'<span class="ar-langsel-note">[^<]*</span>', '', inner)
                return f'<li><a href="{by_h[h]}"{rest}hreflang="{h}"{tail}>{inner}</a></li>'
            return m.group(0)
        s = re.sub(r'<li><a href="([^"]*)"( lang="[^"]*" dir="[^"]*" )hreflang="([^"]*)"([^>]*)>(.*?)</a></li>', fix, s)
        if s != o:
            open(f, 'w', encoding='utf-8').write(s); changed += 1
print('changed', changed)
