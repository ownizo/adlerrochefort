#!/usr/bin/env python3
"""Apply PT homepage + private-clients copy. Run from repo root."""
from pathlib import Path

def sub(path, pairs):
    p = Path(path)
    t = p.read_text(encoding='utf-8')
    ok = 0
    for a, b in pairs:
        if a not in t:
            print('MISS in', path, ':', a[:90].replace('\n', ' '))
            continue
        t = t.replace(a, b, 1)
        ok += 1
    p.write_text(t, encoding='utf-8')
    print(path, ok, '/', len(pairs))
    return ok == len(pairs)

home = [
    ('<title>Adler & Rochefort | Private Clients, Riscos Profissionais e Empresas</title>',
     '<title>Adler & Rochefort \u2014 RC profissional e patrim\u00f3nio privado | Parecer por escrito</title>'),
    ('<meta name="description" content="Media\u00e7\u00e3o de seguros para patrim\u00f3nio privado, responsabilidade profissional e empresas. An\u00e1lise de risco, consulta ao mercado e acompanhamento de sinistros.">',
     '<meta name="description" content="Mediador ASF. Lemos a ap\u00f3lice da Ordem, do banco e do retalho e dizemos por escrito o que fica de fora \u2014 RC profissional e patrim\u00f3nio privado. Sem reuni\u00e3o obrigat\u00f3ria.">'),
    ('<meta property="og:title" content="Adler & Rochefort | Private Clients, Riscos Profissionais e Empresas">',
     '<meta property="og:title" content="Adler & Rochefort \u2014 RC profissional e patrim\u00f3nio privado">'),
    ('<meta property="og:description" content="Media\u00e7\u00e3o de seguros para patrim\u00f3nio privado, responsabilidade profissional e empresas. An\u00e1lise de risco, consulta ao mercado e acompanhamento de sinistros.">',
     '<meta property="og:description" content="O seguro da Ordem e o Multirriscos de retalho cumprem o m\u00ednimo. N\u00f3s tratamos do que fica de fora. Parecer por escrito, sem reuni\u00e3o obrigat\u00f3ria.">'),
    ('<meta name="twitter:description" content="Media\u00e7\u00e3o de seguros para patrim\u00f3nio privado, responsabilidade profissional e empresas.">',
     '<meta name="twitter:description" content="RC profissional e patrim\u00f3nio privado. Parecer por escrito a partir da ap\u00f3lice que j\u00e1 tem.">'),
    ('<div class="hero-eyebrow">Private Clients \u00b7 Riscos Profissionais \u00b7 Empresas</div>',
     '<div class="hero-eyebrow">Riscos Profissionais \u00b7 Patrim\u00f3nio Privado</div>'),
    ('H\u00e1 riscos que n\u00e3o cabem<br>\n      numa proposta <em>standard.</em>',
     'O maior risco \u00e9 achar<br>\n      que a ap\u00f3lice <em>chega.</em>'),
    ('Media\u00e7\u00e3o de seguros para patrim\u00f3nio privado, responsabilidade profissional e empresas. Analisamos o risco e constru\u00edmos a solu\u00e7\u00e3o a partir dos capitais, limites, franquias e exclus\u00f5es que a exposi\u00e7\u00e3o exige \u2014 n\u00e3o a partir do pr\u00e9mio.',
     'Lemos o que a Ordem, o banco e o Multirriscos de retalho deixam de fora \u2014 a responsabilidade profissional e o patrim\u00f3nio que j\u00e1 n\u00e3o cabe num produto-tipo. Independente. Resposta por escrito.'),
    ('<a href="#contacto" class="btn-primary">Pedir an\u00e1lise</a>',
     '<a href="#contacto" class="btn-primary">Enviar a ap\u00f3lice atual</a>'),
    ('<div class="hero-stat-num">20+</div>\n        <div class="hero-stat-label">Anos de experi\u00eancia do fundador em gest\u00e3o de risco e turismo</div>',
     '<div class="hero-stat-num">1</div>\n        <div class="hero-stat-label">Interlocutor. O mesmo nome no parecer e no sinistro.</div>'),
    ('<div class="hero-stat-num">24h</div>\n        <div class="hero-stat-label">Resposta em 24h \u00fateis</div>',
     '<div class="hero-stat-num">24\u201372h</div>\n        <div class="hero-stat-label">Parecer por escrito em dias \u00fateis</div>'),
    ('<div class="hero-stat-num">PT + EN</div>\n        <div class="hero-stat-label">Apoio bilingue</div>',
     '<div class="hero-stat-num">0</div>\n        <div class="hero-stat-label">Reuni\u00e3o obrigat\u00f3ria. Resolve-se por e-mail.</div>'),
    ('<div class="hero-card-eyebrow">An\u00e1lise Gratuita \u00b7 Sem Compromisso</div>',
     '<div class="hero-card-eyebrow">Parecer por escrito \u00b7 Sem compromisso</div>'),
    ('<div class="hero-card-title">Descubra se est\u00e1 verdadeiramente protegido \u2014 empresa ou particular</div>',
     '<div class="hero-card-title">Envie a ap\u00f3lice que j\u00e1 tem. Dizemos o que cobre \u2014 e o que n\u00e3o cobre.</div>'),
    ('<div class="section-eyebrow">Tr\u00eas \u00e1reas de especializa\u00e7\u00e3o</div>',
     '<div class="section-eyebrow">Duas portas. O resto fica em Seguros.</div>'),
    ('Quanto mais complexo o risco,<br><em>mais importante a an\u00e1lise.</em>',
     'A atividade numa.<br><em>O patrim\u00f3nio na outra.</em>'),
    ('N\u00e3o somos uma ag\u00eancia.<br><em>Somos media\u00e7\u00e3o de seguros com tecnologia.</em>',
     'N\u00e3o vendemos o seguro da Ordem.<br><em>Lemos o que ele n\u00e3o cobre.</em>'),
    ('Descubra o que est\u00e1<br><em>a deixar a descoberto</em>',
     'A ap\u00f3lice que tem<br><em>j\u00e1 diz o que falta.</em>'),
    ('Marque uma an\u00e1lise gratuita. Em 48 horas identificamos lacunas, comparamos alternativas e apresentamos um plano concreto \u2014 sem compromisso.',
     'Envie-a. Respondemos por escrito em 24 a 72 horas \u00fateis. Sem reuni\u00e3o obrigat\u00f3ria. Sem compromisso.'),
    ('openContactForm()">Enviar mensagem</a>',
     'openContactForm()">Pedir parecer por escrito</a>'),
]

pc = [
    ('<p class="lp-hero-sub">Prote\u00e7\u00e3o integrada do patrim\u00f3nio privado. Uma abordagem coordenada para patrim\u00f3nios que envolvem resid\u00eancias, autom\u00f3veis de valor, arte, cole\u00e7\u00f5es e embarca\u00e7\u00f5es \u2014 em vez de ap\u00f3lices avulsas cujos capitais, limites e exclus\u00f5es nunca foram comparados entre si.</p>',
     '<p class="lp-hero-sub">O Multirriscos de retalho foi feito para a casa m\u00e9dia. Quando a reconstru\u00e7\u00e3o, o recheio, a segunda casa ou o autom\u00f3vel j\u00e1 n\u00e3o cabem nesse produto, o risco passa a ser outro \u2014 e trata-se noutro mercado.</p>'),
    ('<a href="#pedido" class="btn-primary">Pedir an\u00e1lise</a>',
     '<a href="#pedido" class="btn-primary">Enviar as ap\u00f3lices atuais</a>'),
]

ok1 = sub('public/index.html', home)
ok2 = sub('public/private-clients/index.html', pc)
raise SystemExit(0 if ok1 and ok2 else 1)
