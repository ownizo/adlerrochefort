#!/usr/bin/env python3
"""Second, independent housing audit (Nov 2026).

Written separately from scripts/home-insurer-audit.mjs, with its own patterns and
its own scope rules, so that the two do not share blind spots:
  * scans every published file in public/ (HTML, XML sitemaps and feeds, llms
    files, JSON and JS), not only HTML, and reads text, attributes, URLs,
    link labels, alt/title text, meta tags and JSON-LD alike;
  * looks for insurer names, insurer product names and insurer-specific
    conditions in all 12 languages, case-insensitive, also inside slugs;
  * treats as allowed only: the institutional partners sections, health pages,
    motor and professional-liability pages (unless the sentence ties the insurer
    to a home policy), and the occurrences reviewed by a person in
    audit/home-insurers-reviewed.json (matched here by page and term).
Writes audit/home-insurers-second-audit.json. Exit 1 if anything remains.
Run: python3 scripts/home-insurer-second-audit.py
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'

NAMES = re.compile(r'hiscox|chubb|liberty[\s-]*(?:mutual|specialty|seguros)?|masterpiece|holiday[\s-]home(?:s)?\s+(?:policy|póliza|polizza|police|polis|polisa|de hiscox|da hiscox)|home\s+(?:insurance\s+)?plus|myhiscox', re.I)
COND = re.compile('|'.join([
    # guaranteed rebuild / rebuild beyond the sum insured
    r'guarantee[sd]?\s+(?:the\s+)?rebuild', r'rebuil[dt]\w*\s+(?:even\s+)?(?:if|where|when)\s+the\s+cost\s+exceeds', r'extended\s+replacement',
    r'reconstru\w+\s+garantid', r'garant\w+\s+(?:a\s+|la\s+)?reconstru', r'reconstru\w+[^.]{0,30}(?:mesmo\s+)?acima\s+do\s+capital', r'reconstruye\s+aunque\s+supere',
    r'Wiederaufbau\s+garantiert', r'garantiert\w*\s+(?:den\s+)?Wiederaufbau', r'Wiederaufbaugarantie', r'auch\s+wenn\s+die\s+Kosten\s+die\s+(?:Gebäude|Versicherungs)summe',
    r'herbouwgarantie', r'gegarandeerde\s+herbouw', r'herbouwd,?\s+ook\s+(?:als|boven)',
    r'ricostruzione\s+garantita', r'garantisce\s+la\s+ricostruzione', r'reconstruction\s+garantie', r'gwarantowan\w*\s+odbudow', r'gwarancj\w+\s+odbudow',
    r'garanterad\s+återuppbyggnad', r'garanter\w*\s+genop', r'בנייה\s+מחדש\s+מובטחת', r'מבטיח\s+בנייה\s+מחדש', r'保证重建',
    # waiver of the proportional rule presented as given
    r'no\s+(?:average|proportional)\s+(?:rule|clause|reduction)', r'carry\s+no\s+average', r'sem\s+regra\s+proporcional', r'sin\s+regla\s+proporcional',
    r'kein\w*\s+Unterversicherungsabzug', r'verzichtet\s+der\s+Versicherer\s+darauf', r'niente\s+regola\s+proporzionale', r'bez\s+zasady\s+proporcji',
    r'ingen\s+underforsikring', r'avstår\s+bolaget\s+från\s+proportionell', r'giver\s+afkald\s+på\s+underforsikring', r'מוותר\s+על\s+כלל\s+ביטוח\s+החסר', r'放弃比例赔付',
    # unlimited unoccupancy, fixed liability limit, contents minimum, free survey as a promise
    r'sem\s+limite\s+de\s+dias\s+de\s+desocupa', r'no\s+limit\s+on\s+(?:the\s+number\s+of\s+)?days', r'unoccupied\s+for\s+any\s+length',
    r'7[.,]5\s?(?:M€|m€|million|milhões|millones|Mio)', r'(?:contents|recheio|contenido|Hausrat|inboedel|mobilier|contenuto|ruchomo\w*|lösöre|indbo|תכולה|家财)[^.<]{0,60}150[.,\s  ]?000',
    r'150[.,\s  ]?000\s?€?[^.<]{0,40}(?:minimum|mínimo|Mindest|minimo|minst|mindst|最低)\w*[^.<]{0,30}(?:contents|recheio|contenido|Hausrat|residen|bostad|bolig)',
    r'(?:appraisal|survey|vistoria|tasaci[oó]n|inspecci[oó]n|Besichtigung|sopralluogo|taxatie|oględzin\w*|besiktning|besigtigelse)\s+(?:at\s+)?(?:no\s+cost|sem\s+custo|sin\s+coste|kostenlos|gratuit\w*|kosteloos|bezpłatn\w*|utan\s+kostnad|uden\s+omkostning)',
]), re.I)

HEALTH = re.compile(r'saude|salud|health|kranken|zorgverzek|sante|santé|sanit|zdrow|sjukv|sundhed|medic|ipmi|cancer|april|cigna|allianz-care|mgen|medis', re.I)
MOTOR = re.compile(r'car-insurance|cars?-|-cars?\b|classic|klassiek|oldtimer|veteranbil|automov|automóv|carros|coches|vehicul|vehícul|samochod|auto-epoca|luxusauto|voitures', re.I)
PROF = re.compile(r'therap|terapeut|terapist|yoga|pilates|wellness|massage|beroeps|berufshaft|professional-liab|professional-indemnity|professionnelle|oc-zawod|oc-terapeut|rc-terapisti|rc-therapeutes|zzp|freiberufler|complementary|ciberseguranca|cyber', re.I)
HOMEWORDS = re.compile(r'home\s+(?:insurance|policy)|household|habitação|multirriscos\s+habitação|hogar|Hausversicherung|woonverzekering|woonhuis|polizza\s+casa|ubezpieczeni\w+\s+domu|hemförsäkring|husforsikring|ביטוח\s+(?:דירה|בית)|房屋保险|住宅保险|holiday\s+home|casa\s+de\s+férias|casa\s+de\s+vacaciones|Ferienhaus|rebuild|reconstru', re.I)
INSTITUTIONAL = re.compile(r'<section[^>]*class="[^"]*(?:ar-partners-inst|partners-section)[^"]*".*?</section>', re.S)
PARTNER_LOGOS = re.compile(r'<div class="partners-logos".*?</div>\s*</div>', re.S)

def scope(rel):
    if HEALTH.search(rel) and not re.search(r'home|habitac|casa|hogar|haus|woon', rel, re.I): return 'health'
    if MOTOR.search(rel): return 'motor'
    if PROF.search(rel): return 'professional'
    return 'site'

def main():
    reviewed = json.loads((ROOT / 'audit' / 'home-insurers-reviewed.json').read_text(encoding='utf-8'))
    reviewed_pages = {(v['file'], v['term']) for v in reviewed.values()}
    findings, scanned, allowed = [], 0, {}
    for f in sorted(PUB.rglob('*')):
        if not f.is_file() or f.suffix not in ('.html', '.xml', '.txt', '.json', '.js'): continue
        rel = str(f.relative_to(PUB)); scanned += 1
        t = f.read_text(encoding='utf-8', errors='replace')
        t = INSTITUTIONAL.sub(' ', t); t = PARTNER_LOGOS.sub(' ', t)
        if f.suffix == '.js' and '/js/' in '/' + rel:
            # chrome scripts: language selector, analytics… only flag if they carry copy
            pass
        sc = scope(rel)
        for rx, kind in ((NAMES, 'name'), (COND, 'condition')):
            for m in rx.finditer(t):
                a, b = max(0, m.start() - 180), min(len(t), m.end() + 180)
                raw = t[a:b]
                ctx = re.sub(r'<[^>]+>', ' ', raw); ctx = re.sub(r'\s+', ' ', ctx).strip()
                why = None
                if sc == 'site' and f.suffix in ('.txt', '.xml', '.json'):
                    # mixed index files: judge the sentence, not the file
                    line = t[t.rfind('\n', 0, m.start()) + 1: t.find('\n', m.end()) if t.find('\n', m.end()) > 0 else len(t)]
                    sent = re.split(r'(?<=[.;])\s', line)
                    near = ' '.join(x for x in sent if m.group(0) in x) or line
                    if HEALTH.search(near) and not HOMEWORDS.search(near): why = 'saúde'
                    elif (MOTOR.search(near) or PROF.search(near) or re.search(r'\bcars?\b|vehicle', near, re.I)) and not HOMEWORDS.search(near.replace(m.group(0), '')): why = 'automóvel / RC profissional'
                if why: pass
                elif sc == 'health': why = 'saúde'
                elif sc in ('motor', 'professional') and not HOMEWORDS.search(ctx.replace(m.group(0), '')): why = sc
                elif ('public/' + rel, m.group(0)) in reviewed_pages: why = 'revisto (audit/home-insurers-reviewed.json)'
                elif rel.endswith('_redirects') or rel.startswith('_'): why = 'configuração'
                if why: allowed[why] = allowed.get(why, 0) + 1; continue
                findings.append({'file': 'public/' + rel, 'kind': kind, 'term': m.group(0), 'context': ctx[:360]})
    out = {'scanned_files': scanned, 'allowed': allowed, 'findings': findings}
    (ROOT / 'audit' / 'home-insurers-second-audit.json').write_text(json.dumps(out, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(f'[second-audit] files scanned {scanned} · allowed {allowed} · findings {len(findings)}')
    for x in findings[:80]: print(f"  {x['file']} [{x['kind']}] {x['term']} — {x['context'][:160]}")
    return 1 if findings else 0

if __name__ == '__main__':
    sys.exit(main())
