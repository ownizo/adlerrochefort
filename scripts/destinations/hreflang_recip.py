import re,glob
O='https://adlerrochefort.com'
PAT=re.compile(r'[ \t]*<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"\s*/?>\n?')
def load():
    A={}
    for f in glob.glob('/home/claude/adlerrochefort/public/**/index.html',recursive=True):
        t=open(f).read(); m=re.search(r'<link rel="canonical" href="([^"]*)"',t)
        if m: A[m.group(1).replace(O,'')]=(f,{h.replace(O,'') for x,h in PAT.findall(t) if x!='x-default'})
    return A
total=0
for it in range(5):
    A=load(); fixes={}
    for me,(f,s) in A.items():
        for o in s:
            if o!=me and (o not in A or me not in A[o][1]): fixes.setdefault(f,set()).add(o)
    if not fixes: break
    for f,drop in fixes.items():
        t=open(f).read()
        def rep(m):
            h=m.group(2).replace(O,'')
            return '' if h in drop else m.group(0)
        t=PAT.sub(rep,t)
        rest=[(x,h) for x,h in PAT.findall(t) if x!='x-default']
        if len(rest)<=1: t=PAT.sub('',t)
        else:
            # x-default must point to a remaining alternate
            xs=re.search(r'hreflang="x-default" href="([^"]*)"',t)
            if xs and xs.group(1) not in [h for _,h in rest]:
                t=re.sub(r'[ \t]*<link rel="alternate" hreflang="x-default" href="[^"]*"\s*/?>\n?','',t)
        open(f,'w').write(t); total+=len(drop)
print('removed',total)
