import re, sys
sys.path.insert(0,'/home/claude/dest')
import build as B
def set_alts(t, alts):
    t = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*/?>\n?', '', t)
    a = ''.join(f'<link rel="alternate" hreflang="{B.L[l]["hl"]}" href="{B.ORIGIN}{p}">\n' for l, p in alts)
    en = dict(alts).get('en')
    if en: a += f'<link rel="alternate" hreflang="x-default" href="{B.ORIGIN}{en}">\n'
    return re.sub(r'(<link rel="canonical" href="[^"]*"\s*/?>\n?)', lambda m: m.group(1) + ('' if m.group(1).endswith('\n') else '\n') + a, t, count=1)
def set_meta(t, title=None, desc=None):
    if title:
        t = re.sub(r'<title>.*?</title>', '<title>' + B.e(title) + '</title>', t, count=1, flags=re.S)
        for k in ('og:title','twitter:title'): t = re.sub(r'(<meta (?:property|name)="'+k+r'" content=")[^"]*(")', lambda m: m.group(1)+B.ea(title)+m.group(2), t)
    if desc:
        t = re.sub(r'<meta name="description" content="[^"]*"\s*/?>', '<meta name="description" content="' + B.ea(desc) + '">', t, count=1)
        for k in ('og:description','twitter:description'): t = re.sub(r'(<meta (?:property|name)="'+k+r'" content=")[^"]*(")', lambda m: m.group(1)+B.ea(desc)+m.group(2), t)
    return t
