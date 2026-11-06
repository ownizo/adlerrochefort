import re,glob,sys,html
def end_div(t,i):
    d=0
    for m in re.compile(r'<div\b|</div>').finditer(t,i):
        d+=1 if m.group(0)=='<div' else -1
        if d==0: return m.end()
    raise ValueError
def clean(t):
    opts={html.unescape(v) for v in re.findall(r'<option value="([^"]*)"',t)}
    out=[];rem=[]
    while True:
        found=False
        for m in re.finditer(r'[ \t]*<div class="form-branch-fields" data-branch="([^"]*)"[^>]*>',t):
            if html.unescape(m.group(1)) not in opts:
                e=end_div(t,m.start()+len(m.group(0))-len(m.group(0).lstrip()))
                if t[e:e+1]=='\n': e+=1
                rem.append(m.group(1)); t=t[:m.start()]+t[e:]; found=True; break
        if not found: break
    return t,rem
if __name__=='__main__':
    tot=0
    for f in glob.glob('/home/claude/adlerrochefort/public/**/*.html',recursive=True):
        t=open(f).read()
        if 'form-branch-fields' not in t: continue
        n,rem=clean(t)
        if rem:
            tot+=len(rem); open(f,'w').write(n)
            if '-v' in sys.argv: print(f.split('public/')[1],rem)
    print('removed',tot)
