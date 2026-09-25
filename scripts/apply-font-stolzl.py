#!/usr/bin/env python3
"""
Typeface change, September 2026: Montserrat -> Stolzl.

Stolzl (The Northern Block) is a commercial typeface: it cannot be served from
Google Fonts or bundled without a licence. The site therefore uses the stack

    'Stolzl', 'Albert Sans', sans-serif

- Stolzl is used as soon as a licensed source is loaded (Adobe Fonts kit or
  self-hosted woff2 files with an @font-face named 'Stolzl').
- Until then, Albert Sans (Google Fonts, OFL) stands in: a geometric grotesque
  close to Stolzl in proportions and weight.

Usage
    python3 scripts/apply-font-stolzl.py                  # swap Montserrat -> stack
    python3 scripts/apply-font-stolzl.py --typekit abc1234
        also adds <link rel="stylesheet" href="https://use.typekit.net/abc1234.css">
        after the Google Fonts link on every page (Adobe Fonts web project).

Only fonts change; colours are untouched. Idempotent. The country 'Montserrat'
in phone-prefix <option> lists is left alone.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STACK = "'Stolzl', 'Albert Sans'"
GF_OLD = 'family=Montserrat:wght@400;500;600;700'
GF_NEW = 'family=Albert+Sans:wght@400;500;600;700;800'

# 'Montserrat' / "Montserrat" / Montserrat as the first family in a font-family value
FF_RE = re.compile(r"""(font-family\s*:\s*)(?:'Montserrat'|"Montserrat"|Montserrat)(?=\s*[,;"'}\n])""", re.I)
# JS / JSON style: fontFamily: 'Montserrat, sans-serif' or "Montserrat", ...
JS_RE = re.compile(r"""(fontFamily\s*[:=]\s*['"`])Montserrat""")


def process(s, typekit=None):
    s = s.replace(GF_OLD, GF_NEW)
    s = FF_RE.sub(lambda m: m.group(1) + STACK, s)
    s = JS_RE.sub(lambda m: m.group(1) + "Stolzl, 'Albert Sans'", s)
    if typekit:
        tag = f'<link rel="stylesheet" href="https://use.typekit.net/{typekit}.css">'
        if 'use.typekit.net/' not in s:
            s = re.sub(r'(<link[^>]*' + re.escape(GF_NEW) + r'[^>]*>)', lambda m: m.group(1) + '\n  ' + tag, s, count=1)
    return s


def main():
    typekit = None
    if '--typekit' in sys.argv:
        typekit = sys.argv[sys.argv.index('--typekit') + 1]
    n = 0
    for base in ('public', 'scripts'):
        for dp, dn, fn in os.walk(os.path.join(ROOT, base)):
            dn[:] = [d for d in dn if d != 'node_modules']
            for f in fn:
                if f == os.path.basename(__file__) or not f.endswith(('.html', '.css', '.mjs', '.js')):
                    continue
                p = os.path.join(dp, f)
                try:
                    s = open(p, encoding='utf-8').read()
                except UnicodeDecodeError:
                    continue
                o = process(s, typekit)
                if o != s:
                    open(p, 'w', encoding='utf-8').write(o)
                    n += 1
    print('changed', n, 'files')


if __name__ == '__main__':
    main()
