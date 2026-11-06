#!/usr/bin/env python3
"""Replace the insurer/product sections on property pages with brand-independent
analysis blocks, and add the single institutional "insurers and partners" section.

Supersedes scripts/add-home-insurers.py and scripts/add-valuables-insurers.py
(Nov 2026: no Hiscox / Liberty Mutual / Chubb product presentations on property
pages). Copy in scripts/property_criteria_content.py.

Idempotent. Markers:
  <!-- AR-PROPERTY-CRITERIA:<kind> --> ... <!-- /AR-PROPERTY-CRITERIA -->
  <section class="ar-partners-inst"> (one per page)
Run from the repository root: python3 scripts/apply-property-criteria.py [paths...]
"""
import html, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from property_criteria_content import C  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'
LANGS = {'en', 'es', 'de', 'fr', 'nl', 'it', 'pl', 'se', 'dk', 'zh', 'il', 'br'}
OLD = [('AR-HOME-INSURERS', 'home'), ('AR-HOLIDAY-INSURERS', 'holiday'), ('AR-VALUABLES-INSURERS', 'valuables')]
STYLE = ('<style id="ar-pcrit-style">'
 '.ar-pcrit{max-width:1100px;margin:32px auto;padding:0 24px;box-sizing:border-box}'
 '.ar-pcrit-inner{background:#fff;border:1px solid #EBE9E8;border-inline-start:4px solid #FF6300;border-radius:16px;padding:26px 28px}'
 '.ar-pcrit h2{font-size:22px;line-height:1.3;margin:0 0 10px;color:#292929}'
 '.ar-pcrit h3{font-size:16px;line-height:1.35;margin:0 0 6px;color:#292929}'
 '.ar-pcrit p{font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 12px}'
 '.ar-pcrit-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin:16px 0 20px}'
 '.ar-pcrit-card{background:#FAF8F6;border:1px solid #EBE9E8;border-radius:12px;padding:16px 18px}'
 '.ar-pcrit-card p{margin:0;font-size:14px}'
 '.ar-pcrit .ar-pcrit-inner ul{list-style:disc;margin:0 0 4px;padding-inline-start:20px}'
 '.ar-pcrit .ar-pcrit-inner li{display:list-item;padding:0;border:0;font-size:14.5px;line-height:1.65;color:#333332;margin:0 0 6px}'
 '.ar-pcrit .ar-pcrit-inner li:before{content:none;display:none}'
 '.ar-pcrit-note{font-size:13px;color:#5c5b5a;margin:14px 0 0}'
 '.ar-partners-inst{max-width:1100px;margin:24px auto 32px;padding:0 24px;box-sizing:border-box}'
 '.ar-partners-inst-inner{background:#F7F6F5;border:1px solid #EBE9E8;border-radius:16px;padding:22px 26px}'
 '.ar-partners-inst h2{font-size:18px;line-height:1.35;margin:0 0 8px;color:#292929}'
 '.ar-partners-inst p{font-size:14px;line-height:1.65;color:#333332;margin:0}'
 '@media (max-width:600px){.ar-pcrit,.ar-partners-inst{padding:0 16px}.ar-pcrit-inner{padding:20px 18px}}'
 '</style>')
e = lambda s: html.escape(s, quote=False)


def lang_of(rel):
    s = rel.split('/')[0]
    return s if s in LANGS else 'pt'


def criteria(kind, lang):
    c = C[lang][kind]
    rtl = ' dir="rtl"' if lang == 'il' else ''
    cards = ''.join(f'<div class="ar-pcrit-card"><h3>{e(h)}</h3><p>{e(p)}</p></div>' for h, p in c['items'])
    need = ''.join(f'<li>{e(x)}</li>' for x in c['need'])
    return (f'<!-- AR-PROPERTY-CRITERIA:{kind} -->\n<section class="ar-pcrit" id="ar-criteria-{kind}"{rtl}><div class="ar-pcrit-inner">'
            f'<h2>{e(c["title"])}</h2><p>{e(c["intro"])}</p><div class="ar-pcrit-grid">{cards}</div>'
            f'<h3>{e(c["need_t"])}</h3><ul>{need}</ul><p class="ar-pcrit-note">{e(c["note"])}</p></div></section>\n<!-- /AR-PROPERTY-CRITERIA -->')


def institutional(lang):
    c = C[lang]['inst']
    rtl = ' dir="rtl"' if lang == 'il' else ''
    return (f'<section class="ar-partners-inst" aria-labelledby="ar-partners-inst-h"{rtl}><div class="ar-partners-inst-inner">'
            f'<h2 id="ar-partners-inst-h">{e(c["title"])}</h2><p>{e(c["text"])}</p></div></section>')


def apply(doc, lang, add_inst=True):
    changed = False
    for mark, kind in OLD:
        pat = re.compile(r'<!-- ' + mark + r' -->.*?<!-- /' + mark + r' -->', re.S)
        if pat.search(doc):
            doc = pat.sub(lambda m: criteria(kind, lang), doc, count=1)
            doc = pat.sub('', doc)
            changed = True
    # refresh existing criteria blocks (copy edits)
    doc2 = re.sub(r'<!-- AR-PROPERTY-CRITERIA:(\w+) -->.*?<!-- /AR-PROPERTY-CRITERIA -->', lambda m: criteria(m.group(1), lang), doc, flags=re.S)
    changed |= doc2 != doc; doc = doc2
    if 'AR-PROPERTY-CRITERIA' in doc:
        if 'id="ar-pcrit-style"' not in doc:
            doc = doc.replace('</head>', STYLE + '\n</head>', 1)
        doc2 = re.sub(r'<section class="ar-partners-inst".*?</section>', institutional(lang), doc, flags=re.S)
        if add_inst and 'class="ar-partners-inst"' not in doc2:
            # once, after the last criteria block
            i = doc2.rfind('<!-- /AR-PROPERTY-CRITERIA -->') + len('<!-- /AR-PROPERTY-CRITERIA -->')
            doc2 = doc2[:i] + '\n' + institutional(lang) + doc2[i:]
        changed |= doc2 != doc; doc = doc2
    # old styles no longer used
    for sid, cls in (('ar-homeins-style', 'ar-hins'), ('ar-valuables-style', 'ar-vins')):
        if f'class="{cls}' not in doc:
            doc2 = re.sub(r'<style id="' + sid + r'">.*?</style>\n?', '', doc, flags=re.S)
            changed |= doc2 != doc; doc = doc2
    return doc, changed


def main(argv):
    files = [Path(a).resolve() for a in argv] or list(PUB.rglob('*.html'))
    n = 0
    for f in files:
        rel = str(f.relative_to(PUB))
        doc = f.read_text(encoding='utf-8')
        new, ch = apply(doc, lang_of(rel))
        if ch and new != doc:
            f.write_text(new, encoding='utf-8'); n += 1
    print('pages updated', n)


if __name__ == '__main__':
    main(sys.argv[1:])
