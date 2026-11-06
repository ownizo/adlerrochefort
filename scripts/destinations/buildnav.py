import re,sys
sys.path.insert(0,'/home/claude/tools')
from navspec import SPEC
def block_end(t,start,tag='div'):
    i=start; depth=0
    for m in re.finditer(r'<(/?)'+tag+r'\b[^>]*>',t[start:]):
        depth+= -1 if m.group(1) else 1
        if depth==0: return start+m.end()
    raise ValueError
def esc(s): return s.replace('&','&amp;') if '&amp;' not in s else s
def desktop(cols):
    n=len(cols); cls='nav-panel-cols'+(' nav-panel-cols--4' if n>=4 else '')
    out=[f'<div class="{cls}">']
    for title,links in cols:
        out.append('          <div class="nav-panel-col">')
        out.append(f'            <div class="nav-panel-col-title">{esc(title)}</div>')
        for h,lab in links: out.append(f'            <a href="{h}" role="menuitem">{esc(lab)}</a>')
        out.append('          </div>')
    out.append('        </div>')
    return '\n'.join(out)
def mobile(cols):
    seen=[];out=[]
    for title,links in cols:
        for h,lab in links:
            if h in seen: continue
            seen.append(h); out.append(f'      <a href="{h}">{esc(lab)}</a>')
    return '\n'+'\n'.join(out)+'\n    '
def apply(t,lang):
    spec=SPEC[lang]
    for key,(dlabel,mlabel,cols) in spec.items():
        i=t.find(f'id="navPanel{key}"'); assert i>0,(lang,key)
        s=t.rfind('<div',0,i); e=block_end(t,s)
        panel=t[s:e]
        j=panel.find('<div class="nav-panel-cols')
        if j>=0:
            k=block_end(panel,j); panel=panel[:j]+desktop(cols)+panel[k:]
        else:
            h=panel.find('>')+1
            head=re.sub(r'\s*nav-panel--sm','',panel[:h])
            panel=head+'\n        '+desktop(cols)+'\n      </div>'
        t=t[:s]+panel+t[e:]
        # trigger label (desktop)
        t=re.sub(r'(aria-controls="navPanel'+key+r'">)\s*[^<]*?(\s*<svg)', lambda m: m.group(1)+'\n        '+dlabel+m.group(2), t, count=1)
        # mobile
        i=t.find(f'id="mobAcc{key}"'); s=t.rfind('<div',0,i); e=block_end(t,s)
        head=t[s:t.find('>',s)+1]
        t=t[:s]+head+mobile(cols)+'</div>'+t[e:]
        t=re.sub(r'(aria-controls="mobAcc'+key+r'">)\s*[^<]*?(\s*<svg)', lambda m: m.group(1)+'\n      '+mlabel+m.group(2), t, count=1)
    return t
