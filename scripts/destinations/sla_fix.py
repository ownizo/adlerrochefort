"""Replace promised response times (24 h, 48–72 h, one working day…) across the site with a
professional note: proposals are specific and need a detailed risk analysis, so response
times may vary.  python3 sla_fix.py [--dry] [files...]"""
import re, sys, glob, html as H, json, collections

PUB = '/home/claude/adlerrochefort/public/'
DISC = {
 'pt': 'Por se tratar de propostas específicas, que exigem uma análise detalhada do risco, os prazos de resposta podem variar.',
 'br': 'Por se tratar de propostas específicas, que exigem uma análise detalhada do risco, os prazos de resposta podem variar.',
 'en': 'As each proposal is specific and requires a detailed analysis of the risk, response times may vary.',
 'es': 'Al tratarse de propuestas específicas, que requieren un análisis detallado del riesgo, los plazos de respuesta pueden variar.',
 'de': 'Da es sich um individuelle Angebote handelt, die eine eingehende Risikoprüfung erfordern, können die Antwortzeiten variieren.',
 'fr': 'S’agissant de propositions spécifiques, qui exigent une analyse détaillée du risque, les délais de réponse peuvent varier.',
 'it': 'Trattandosi di proposte specifiche, che richiedono un’analisi dettagliata del rischio, i tempi di risposta possono variare.',
 'nl': 'Omdat het om specifieke voorstellen gaat, die een grondige analyse van het risico vereisen, kunnen de reactietijden variëren.',
 'pl': 'Ponieważ przygotowujemy indywidualne propozycje, wymagające szczegółowej analizy ryzyka, czas odpowiedzi może się różnić.',
 'se': 'Eftersom varje förslag är individuellt och kräver en noggrann analys av risken kan svarstiden variera.',
 'dk': 'Da hvert tilbud er individuelt og kræver en grundig analyse af risikoen, kan svartiden variere.',
 'il': 'מאחר שמדובר בהצעות ייעודיות, הדורשות ניתוח מפורט של הסיכון, זמני המענה עשויים להשתנות.',
 'zh': '由于每份方案均为量身定制，需要对风险进行详细分析，答复时间可能有所不同。',
}
N = r'(?:24|48)(?:\s*(?:to|–|-|&ndash;|a|à|bis|tot|do|till|til|עד|至|y|e)\s*72)?'
TIME = {
 'en': rf'(?:within|in|under)\s+{N}\s*(?:working\s+|business\s+)?(?:hours?|h)\b(?:\s+on working days)?|(?:within|in)\s+(?:one|a)\s+working day|\(\s*(?:24|48-72|48–72)\s*h\s*\)|\b24&ndash;72h\b',
 'pt': rf'(?:em|dentro de|no prazo de)\s+{N}\s*(?:horas|h)(?:\s+(?:úteis|&uacute;teis))?(?:,\s*em dias (?:úteis|&uacute;teis))?|(?:num|em um|no prazo de um)\s+dia útil',
 'es': rf'(?:en|dentro de)\s+(?:un plazo de\s+)?{N}\s*(?:horas|h)(?:\s+(?:hábiles|laborables))?|(?:normalmente\s+)?entre 48 y 72 horas laborables|en un día hábil',
 'de': rf'(?:innerhalb\s+(?:von\s+)?|in\s+){N}\s*(?:Arbeitsstunden|Stunden)|innerhalb eines Werktags|an einem Werktag',
 'fr': rf'(?:sous|en|dans les)\s+{N}\s*(?:heures|h)(?:\s+ouvrées)?|sous un jour ouvré|en un jour ouvré',
 'it': rf'(?:entro|in)\s+{N}\s*ore(?:\s+lavorative)?|(?:entro|in)\s+un giorno lavorativo',
 'nl': rf'binnen\s+{N}\s*(?:werkuren|uur)|binnen (?:één|een) werkdag',
 'pl': rf'(?:w ciągu|w)\s+{N}\s*godzin(?:y)?(?:\s+robocz(?:ych|e))?|w ciągu jednego dnia roboczego',
 'se': rf'inom\s+{N}\s*(?:arbetstimmar|timmar)|inom en arbetsdag',
 'dk': rf'inden for\s+{N}\s*(?:arbejdstimer|timer)|inden for en arbejdsdag',
 'il': rf'(?:בתוך|תוך)\s+{N}\s*שעות(?: עבודה)?|תוך יום עבודה אחד',
 'zh': rf'(?:在\s*)?{N}\s*个工作小时内|(?:在)?一个工作日内',
}
TIME['br'] = TIME['pt']
REPLY = {
 'en': r'\b(reply|replies|get back|come back|respond|response|back to you|quoted|quote)\b',
 'pt': r'(respond|resposta|contacto|cotação|proposta|parecer)', 'br': r'(respond|resposta|parecer)',
 'es': r'(respond|respuesta|propuesta|opinión)', 'de': r'(antwort|melden uns|Angebot|Einschätzung)',
 'fr': r'(répond|réponse|revenons|recontactons|devis)', 'it': r'(rispond|risposta|preventivo)', 'nl': r'(antwoord|reageren|advies|offerte)',
 'pl': r'(odpowi|oferta)', 'se': r'(svar|offert)', 'dk': r'(svar|tilbud)', 'il': r'(נשיב|משיבים|עונים|תשובה|נחזור|הצעה|חוות דעת)', 'zh': r'(回复|答复|报价|意见)',
}
# whole sentences or labels rewritten by hand (matched after whitespace normalisation, on the raw segment)
FULL = {
 'en': {
  'Free quote in 24h': 'Free written quote', 'Free quote in 24h.': 'Free written quote.', 'Free, in 24h.': 'Free, in writing.',
  'Free home insurance quote in 24h': 'Free written home insurance quote', 'Get a free home insurance comparison in 24h': 'Get a free written home insurance comparison',
  'Get my free quote (24h)': 'Get my free quote', 'Get my free quote (48-72h)': 'Get my free quote', 'Quote in 48-72 business hours': 'Written quote',
  'Written response in 24h': 'Written response', 'Written response within 24h': 'Written response', 'We reply within 24h': 'Written reply',
  'Written opinion in 24&ndash;72h': 'Written opinion', 'One working day': 'In writing', 'Within 24 hours of a description': 'From a short description',
  'A written comparison within 24 hours in almost every case.': 'A written comparison, in English.',
  'With those three we can normally come back within 24 hours.': 'With those three we can prepare the proposal.',
  'A straightforward household and valuables risk with valuations to hand is normally quoted within a week.': None,
  'A household with valuations to hand is normally quoted within a week; larger homes, collections or yachts take longer because the underwriter is pricing that specific risk.': 'Timing depends on the risk: larger homes, collections and yachts take longer, because the underwriter is pricing that specific risk.',
  'Within 24 hours.': None, '48 to 72 business hours.': None, 'request a quote in 24 hours': 'request a written quote',
  'Within 24–72 working hours of having the information: insurers approached, conditions obtained, what changes and why.': 'Once we have the information: insurers approached, conditions obtained, what changes and why.',
 },
 'pt': {
  'Cotação em 48 a 72 horas úteis — o cuidado na análise da sua exposição real demora mais do que um formulário genérico.': 'Cotação por escrito — o cuidado na análise da sua exposição real demora mais do que um formulário genérico.',
  'Cotação em 48 a 72h úteis': 'Cotação por escrito', 'Parecer por escrito em 24–72h úteis': 'Parecer por escrito', 'Parecer por escrito em 24–72 horas úteis': 'Parecer por escrito',
  'Resposta em 24 horas úteis.': None, 'Resposta em 24h úteis.': None, 'Resposta em 48 a 72 horas úteis.': None, 'Cotação em 48 a 72 horas úteis.': None,
  'Respondemos em 24 horas úteis.': None, 'Proposta em 48 a 72 horas úteis.': None,
  'Respondemos em 24 horas úteis, por escrito, com o que está disponível e as condições associadas à desocupação.': 'Respondemos por escrito, com o que está disponível e as condições associadas à desocupação.',
 },
 'br': {'Em 24 a 72 horas úteis após recebermos as informações: seguradoras consultadas, condições obtidas, o que muda e por quê.': 'Assim que recebermos as informações: seguradoras consultadas, condições obtidas, o que muda e por quê.'},
 'es': {'Respuesta en un día hábil.': None, 'En 24–72 horas hábiles tras recibir la información:': 'Una vez recibida la información:'},
 'de': {'Antwort innerhalb von 24 Arbeitsstunden': 'Schriftliche Antwort', 'Schriftliche Einschätzung in 24–72 Arbeitsstunden': 'Schriftliche Einschätzung',
        'Innerhalb von 24–72 Arbeitsstunden nach Eingang der Unterlagen:': 'Nach Eingang der Unterlagen:'},
 'fr': {'Réponse écrite sous 24 h': 'Réponse écrite', 'Réponse sous 24 heures.': None},
 'il': {'תוך 24–72 שעות עבודה מקבלת המידע:': 'לאחר קבלת המידע:'},
 'zh': {'收到资料后 24–72 个工作小时内：': '收到资料后：'},
}
PROTECT = re.compile(r'(?i)24 hours a day|24 horas por dia|24 h/24|24 ore su 24|24 horas, gratuita|respuesta especializada 24 horas|first 48 hours|The first 48 hours|primeiras 48 horas|24/7')

def lang_of(rel):
    s = rel.split('/')[0]
    return s if s in TIME and s != 'pt' else 'pt'

def tidy(s):
    s = re.sub(r'\s+([.,;:!?])', r'\1', s)
    s = re.sub(r'\s*(?:—|&mdash;|–|&ndash;)\s*([.,;:])', r'\1', s)
    s = re.sub(r',\s*,', ',', s); s = re.sub(r';\s*;', ';', s)
    s = re.sub(r'\s*(?:—|&mdash;)\s*(?:—|&mdash;)\s*', ' — ', s)
    s = re.sub(r'\(\s*\)', '', s); s = re.sub(r'·\s*·', '·', s); s = re.sub(r'\s*·\s*$', '', s)
    s = re.sub(r'  +', ' ', s)
    s = re.sub(r',\s*\.', '.', s); s = re.sub(r'\s+$', '', s) if s.endswith(' ') else s
    return s

def fix_segment(seg, lang, stats):
    raw = seg
    norm = ' '.join(seg.split())
    lead = seg[:len(seg) - len(seg.lstrip())]; trail = seg[len(seg.rstrip()):]
    F = FULL.get(lang, {})
    disc = DISC[lang]
    if norm in F:
        v = F[norm]; stats['full'] += 1
        return lead + (disc if v is None else v) + trail
    protected = {}
    def prot(m):
        k = f'\x00{len(protected)}\x00'; protected[k] = m.group(0); return k
    s = PROTECT.sub(prot, seg)
    T = re.compile(r'(?:,\s*|\s+(?:—|&mdash;|–)\s*|\s+)?(?:' + TIME[lang] + r')', re.I)
    if not T.search(s):
        return raw
    # sentence-wise, so the note follows the sentence that made the promise
    parts = re.split(r'(?<=[.!?。])(\s+)', s)
    out = []; added = False
    for p in parts:
        if not T.search(p):
            out.append(p); continue
        for k, v in F.items():  # partial hand rewrites inside longer text
            if v is not None and k in p: p = p.replace(k, v)
        had_reply = re.search(REPLY[lang], p, re.I)
        q = T.sub('', p)
        # dangling "— answer" / "— resposta" fragments
        q = re.sub(r'\s*(?:—|&mdash;)\s*(?:resposta|réponse|respuesta|Antwort|risposta|antwoord|odpowiedź|svar)\s*(?=[.,;]|$)', '', q, flags=re.I)
        q = re.sub(r'\s*(?:—|&mdash;)?\s*and we reply(?=[.;,]|$)', '', q)
        q = tidy(q)
        bare = re.fullmatch(r'\s*(?:We reply in writing|We reply|Reply|Respondemos(?: por escrito)?|Resposta(?: por escrito)?|Respondemos por escrito|Le responderemos por escrito|Respuesta|Wir antworten(?: schriftlich)?|Antwort(?: schriftlich)?|Nous répondons par écrit|Réponse(?: écrite)?|Rispondiamo per iscritto|Risposta scritta|We antwoorden schriftelijk|Wij antwoorden|Schriftelijk antwoord|Odpowiadamy(?: na piśmie)?|Odpowiedź na piśmie|Vi svarar(?: skriftligt)?|Skriftligt svar|Vi svarer(?: skriftligt)?|אנחנו עונים בכתב|אנחנו משיבים בכתב|נשיב(?: בכתב)?|נשיב בתוך|תשובה בכתב|我们会?书面答复|书面答复|我们将回复|我们将书面回复)\s*[.。]?\s*', q)
        if bare:
            q = disc; added = True
        elif had_reply and q.rstrip().endswith(('.', '。')) and not added and disc not in s:
            q = q.rstrip() + ('' if lang == 'zh' else ' ') + disc; added = True
        out.append(q); stats['clause'] += 1
    s = ''.join(out)
    for k, v in protected.items(): s = s.replace(k, v)
    return s

SEG = re.compile(r'(>)([^<]+)(<)|(\s(?:content|placeholder|title|aria-label|alt|data-[\w-]+|value)=")([^"]*)(")')
LDS = re.compile(r'("(?:text|name|description|headline|abstract)"\s*:\s*")((?:[^"\\]|\\.)*)(")')

def fix_html(t, lang, stats):
    out = []; pos = 0
    for m in re.finditer(r'(?s)<style\b.*?</style>|<script\b(?![^>]*application/ld\+json).*?</script>|<script[^>]*application/ld\+json[^>]*>.*?</script>', t):
        out.append(fix_plain(t[pos:m.start()], lang, stats))
        blk = m.group(0)
        if 'application/ld+json' in blk[:80]:
            blk = LDS.sub(lambda x: x.group(1) + json.dumps(fix_segment(json.loads('"' + x.group(2) + '"'), lang, stats), ensure_ascii=False)[1:-1] + x.group(3), blk)
        out.append(blk); pos = m.end()
    out.append(fix_plain(t[pos:], lang, stats))
    return ''.join(out)

def fix_plain(t, lang, stats):
    def rep(m):
        if m.group(1): return m.group(1) + fix_segment(m.group(2), lang, stats) + m.group(3)
        v = fix_segment(m.group(5), lang, stats).replace('"', '&quot;')
        return m.group(4) + v + m.group(6)
    return SEG.sub(rep, t)

if __name__ == '__main__':
    dry = '--dry' in sys.argv
    files = [a for a in sys.argv[1:] if not a.startswith('--')] or glob.glob(PUB + '**/*.html', recursive=True)
    stats = collections.Counter(); changed = 0
    for f in files:
        rel = f[len(PUB):] if f.startswith(PUB) else f
        t = open(f, encoding='utf-8').read()
        n = fix_html(t, lang_of(rel), stats)
        if n != t:
            changed += 1
            if not dry: open(f, 'w', encoding='utf-8').write(n)
    print('files', changed, dict(stats))
