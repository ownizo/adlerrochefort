import re,glob,sys
O='https://adlerrochefort.com'
PUB='/home/claude/adlerrochefort/public/'
HOME={'pt-PT':'/','en-GB':'/en/','nl':'/nl/','fr':'/fr/','de':'/de/','es':'/es/','it-IT':'/it/','pl-PL':'/pl/','sv-SE':'/se/','da-DK':'/dk/','he-IL':'/il/','zh-CN':'/zh/','pt-BR':'/br/'}
A=re.compile(r'<a href="([^"]*)"( lang="[^"]*" dir="[^"]*" hreflang="([^"]*)")([^>]*)>(.*?)</a>',re.S)
def page_lang(rel):
    seg=rel.split('/')[0]
    m={'en':'en-GB','nl':'nl','fr':'fr','de':'de','es':'es','it':'it-IT','pl':'pl-PL','se':'sv-SE','dk':'da-DK','il':'he-IL','zh':'zh-CN','br':'pt-BR'}
    return m.get(seg,'pt-PT')
def sync(t,rel):
    m=re.search(r'<link rel="canonical" href="([^"]*)"',t)
    if not m or 'ar-langsel-menu' not in t: return t
    me=m.group(1).replace(O,'')
    alts={hl:h.replace(O,'') for hl,h in re.findall(r'<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"',t) if hl!='x-default'}
    own=page_lang(rel); alts[own]=me
    notes=re.findall(r'<span class="ar-langsel-note">([^<]*)</span>',t); note=notes[0] if notes else None
    def fix_menu(menu):
        def rep(a):
            href,mid,hl,rest,inner=a.groups()
            rest=re.sub(r'\s*aria-current="true"','',rest)
            if hl in alts:
                href=alts[hl]; inner=re.sub(r'<span class="ar-langsel-note">[^<]*</span>','',inner)
                if hl==own: rest+=' aria-current="true"'
            elif href.rstrip('/') and href.strip('/').split('/')[0]!=HOME.get(hl,'/').strip('/') and HOME.get(hl,'/')!='/':
                href=HOME[hl]  # a counterpart link that is not in this page's hreflang set
                if note and 'ar-langsel-note' not in inner: inner+=f'<span class="ar-langsel-note">{note}</span>'
            return f'<a href="{href}"{mid}{rest}>{inner}</a>'
        return A.sub(rep,menu)
    out=[];pos=0
    for mm in re.finditer(r'<ul class="ar-langsel-menu"[^>]*>.*?</ul>',t,re.S):
        out.append(t[pos:mm.start()]); out.append(fix_menu(mm.group(0))); pos=mm.end()
    out.append(t[pos:]); return ''.join(out)
if __name__=='__main__':
    files=sys.argv[1:] or glob.glob(PUB+'**/index.html',recursive=True)
    n=0
    for f in files:
        t=open(f).read(); nt=sync(t,f[len(PUB):])
        if nt!=t: open(f,'w').write(nt); n+=1
    print('synced',n)
