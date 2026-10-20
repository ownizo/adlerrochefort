#!/usr/bin/env python3
"""Build the IPMI destination pages added on 2026-10-20 without rebuilding the older ones.

- EN: Panama, Colombia, Malaysia, Singapore, Vietnam; ES: Panamá, Colombia
  (content in ipmi_destinations_2026_10.py, rendered with build-ipmi-pages.py:build_page)
- PT: /seguros/saude-internacional/brasileiros-no-exterior/ (rendered with build-ipmi-intl-pages.py)
- Refreshes the destinations grid on the EN and ES hubs and links the PT page from the PT hub.

Idempotent: run it again after editing the content.
"""
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
sys.path.insert(0, str(ROOT / "scripts"))
DATE = "2026-10-20"

import ipmi_blocks as B  # noqa: E402
import ipmi_pages_content as C  # noqa: E402
from ipmi_destinations_2026_10 import NEW_PAGES  # noqa: E402

for p in NEW_PAGES:
    if p["path"] not in {q["path"] for q in C.PAGES}:
        C.PAGES.append(p)


def load(name, file):
    spec = importlib.util.spec_from_file_location(name, ROOT / "scripts" / file)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


EN = load("build_ipmi_pages", "build-ipmi-pages.py")
INTL = load("build_ipmi_intl_pages", "build-ipmi-intl-pages.py")


def bump_ld_date(s):
    return s.replace('"dateModified": "2026-10-14"', f'"dateModified": "{DATE}"')


# ---------------------------------------------------------------- EN / ES pages
built = []
for p in NEW_PAGES:
    out = EN.build_page(p)
    out.write_text(bump_ld_date(out.read_text(encoding="utf-8")), encoding="utf-8")
    built.append(p["path"])

# ---------------------------------------------------------------- EN / ES hub grids
# Portugal and Spain have their own (non-IPMI-template) guides; list them in the grids too.
EXTRA = {
    "en": [("/en/international-health-insurance-portugal/", "Portugal", "When an international plan is worth it in Portugal, and when a Portuguese plan is better."),
           ("/en/health-insurance-spain/", "Spain", "Expat health insurance in Spain, including visa-compliant cover.")],
    "es": [("/es/seguro-medico-visado-portugal/", "Portugal", "Seguro médico para los visados D7 y D8 y para vivir en Portugal."),
           ("/es/seguro-salud-espana/", "Seguro de salud en España", "Planes españoles para quien vive en España, comparados con un plan internacional.")],
    "de": [("/de/krankenversicherung-portugal/", "Portugal", "Private Krankenversicherung für Residenten in Portugal."),
           ("/de/krankenversicherung-spanien/", "Spanien", "Private Krankenversicherung für Residenten in Spanien.")],
}
for lang in ("en", "es", "de"):
    f = EN.hub_file(lang)
    s = f.read_text(encoding="utf-8")
    dests = [(p["path"], p["card"][0], p["card"][1]) for p in C.PAGES if p["lang"] == lang] + EXTRA[lang]
    block = B.destinations(lang, dests).strip("\n")
    i = s.index("<!-- IPMI-DESTINATIONS -->")
    j = s.index("</section>", i) + len("</section>")
    s = s[:i] + block + s[j:]
    s = re.sub(r'("@type": "WebPage".*?"dateModified": ")\d{4}-\d{2}-\d{2}', lambda m: m.group(1) + DATE, s, count=1, flags=re.S)
    f.write_text(s, encoding="utf-8")
    built.append(EN.HUBS[lang]["path"] + " (destinations grid)")

# ---------------------------------------------------------------- PT page for Brazilians abroad
PT_SLUG = "brasileiros-no-exterior/"
EXT = 'rel="noopener" target="_blank"'
BR = {
    "title": "Seguro de Saúde Internacional para Brasileiros no Exterior",
    "desc": "Vai viver fora do Brasil? Seguro de saúde internacional Allianz Care ou Cigna Global para brasileiros em Portugal, Espanha, Europa e Ásia. PB4, vistos e regras.",
    "eyebrow": "Seguro de saúde internacional · Brasileiros no exterior",
    "crumb": "Brasileiros no exterior",
    "h1": "Seguro de saúde internacional para brasileiros que vivem fora do Brasil",
    "lead": "Portugal, Espanha, Itália, Irlanda, Singapura, Panamá: cada ano mais famílias brasileiras mudam-se para fora do país. Um seguro de saúde internacional acompanha-o de país em país, dá acesso a hospitais privados e pode cobrir as visitas à família no Brasil. A regra mais importante é simples: é para quem vive fora do Brasil.",
    "facts": [
        "Elegíveis: cidadãos brasileiros com residência principal fora do Brasil, e as suas famílias.",
        "Não elegíveis: residentes no Brasil, porque o país exige seguro de uma seguradora local.",
        "Seguradoras: Allianz Care e Cigna Global, comparadas nas mesmas condições.",
        "Visitas ao Brasil: com a Cigna Global, estadias temporárias no país da nacionalidade até 180 dias por ano, quando o Brasil está na área de cobertura.",
        "Resposta por escrito num dia útil, em português.",
    ],
    "sections": [
        ("Quem pode contratar",
         "<p>Os planos internacionais são desenhados para quem vive fora do país da sua nacionalidade. Um brasileiro que vive em Lisboa, Madrid, Dublin ou Singapura é elegível; um brasileiro que vive no Brasil não é, porque o Brasil exige que o seguro de saúde dos residentes seja feito com uma seguradora autorizada no país. O que conta é o país de residência principal, onde passa a maior parte do ano. Quem tem dupla nacionalidade, por exemplo brasileira e portuguesa ou italiana, deve indicar as duas: a elegibilidade é analisada com base em ambas.</p>"),
        ("O PB4 não substitui um seguro de saúde",
         "<p>O Certificado de Direito à Assistência Médica (CDAM, conhecido como PB4) resulta do acordo entre o Brasil e Portugal (também existem acordos com Itália e Cabo Verde). É emitido pelo governo brasileiro para quem está vinculado ao INSS, incluindo aposentados e pensionistas, e dá acesso ao Serviço Nacional de Saúde nas mesmas condições dos residentes, durante o período indicado no certificado (<a href=\"https://www.eurodicas.com.br/pb4-como-funciona-e-como-solicitar/\" " + EXT + ">Eurodicas</a>).</p><p>É útil, mas tem limites: é temporário, não cobre a rede privada, nem repatriação, e depende das listas de espera do SNS. Um seguro privado continua a ser o que garante acesso rápido a hospitais privados e cobertura fora de Portugal.</p>"),
        ("Portugal: seguro português ou internacional?",
         "<p>Para quem vai viver em Portugal há duas soluções. Um <a href=\"/seguros/saude/\">seguro de saúde português</a> é mais barato e pensado para tratamento em Portugal, mas exclui doenças pré-existentes, tem períodos de carência e exige NIF e morada em Portugal para cada pessoa segura. Um plano internacional custa mais, mas cobre-o em toda a área escolhida, incluindo o Brasil, e continua se mudar de país. Explicamos a escolha em detalhe no artigo sobre <a href=\"/blog/plano-de-saude-portugal-brasileiros/\">plano de saúde em Portugal para brasileiros</a>.</p>"),
        ("Vistos e autorizações de residência",
         "<p>Muitos consulados pedem prova de seguro de saúde ou de viagem no pedido de visto de residência, e alguns aceitam o PB4 para Portugal. As listas mudam com frequência e variam por consulado e tipo de visto, por isso confirme a lista do seu caso. Com um plano internacional emitimos o certificado de seguro em português ou inglês assim que a apólice entra em vigor.</p>"),
        ("Para onde vai: o que muda",
         "<ul><li><strong>Portugal, Espanha e o resto da Europa:</strong> a Allianz Care oferece uma área só Europa, mais económica; ambas oferecem área mundial sem os EUA, para quem quer ser tratado também fora da Europa.</li><li><strong>Ásia e América Latina:</strong> área mundial sem os EUA, com evacuação médica.</li><li><strong>Estados Unidos:</strong> quem reside nos EUA precisa de um seguro conforme as regras americanas, que analisamos caso a caso.</li><li><strong>Emirados Árabes Unidos, Arábia Saudita e China continental:</strong> exigem seguro de uma seguradora local, por isso um plano internacional não serve como seguro principal.</li></ul>"),
        ("Idade e historial médico",
         "<p>Os planos internacionais são subscritos individualmente: declara o seu historial clínico e a seguradora pode cobrir uma doença normalmente, excluí-la ou aplicar um agravamento. As idades de entrada variam entre seguradoras. Indique-nos a idade de cada pessoa do agregado e dizemos de imediato que planos estão abertos.</p>"),
    ],
    "faq": [
        ("Sou brasileiro e vou viver na Europa. Posso ter um seguro internacional?", "Sim, a partir do momento em que a sua residência principal passa a ser fora do Brasil. O que não é possível é ter um plano internacional como residente no Brasil, porque o país exige seguro de uma seguradora local."),
        ("O seguro cobre-me quando visito a família no Brasil?", "Com a Cigna Global, estadias temporárias no país da nacionalidade estão cobertas até 180 dias por ano de apólice, desde que o Brasil esteja na área de cobertura escolhida, como a área mundial sem os EUA."),
        ("Tenho PB4. Preciso de seguro?", "O PB4 dá acesso ao SNS em Portugal durante o período do certificado, mas não cobre hospitais privados nem repatriação e é temporário. Um seguro privado dá acesso rápido à rede privada e cobertura fora de Portugal."),
        ("Tenho dupla nacionalidade brasileira e portuguesa e vivo em Portugal. Sou elegível?", "Depende da seguradora, porque vive num país de que também é nacional. Indique as duas nacionalidades no pedido e confirmamos antes de cotar. Se o plano internacional não for possível, o seguro de saúde português é a alternativa."),
        ("Posso incluir a família?", "Sim. Um único contrato pode cobrir cônjuge e filhos, mesmo que vivam em países diferentes dentro da área de cobertura."),
    ],
    "form_h2": "Peça a sua proposta de seguro de saúde internacional",
    "form_lead": "Quatro dados chegam para começar. Respondemos por escrito num dia útil, com a Allianz Care e a Cigna Global configuradas para si.",
    "related": [
        ("{HUB}", "Seguro de saúde internacional"),
        ("{HUB}allianz-care/", "Allianz Care: seguro de saúde internacional"),
        ("{HUB}cigna-global/", "Cigna Global: seguro de saúde internacional"),
        ("/blog/plano-de-saude-portugal-brasileiros/", "Plano de saúde em Portugal para brasileiros"),
        ("/seguros/saude/", "Seguro de saúde em Portugal"),
        ("/es/seguro-medico-internacional/espana/", "Seguro médico internacional en España"),
    ],
}

INTL.KINDS["brasil"] = PT_SLUG
_page_data, _form_html = INTL.page_data, INTL.form_html
INTL.page_data = lambda mod, kind: BR if kind == "brasil" else _page_data(mod, kind)


def form_html(lang, mod, kind, page):
    if kind != "brasil":
        return _form_html(lang, mod, kind, page)
    return _form_html(lang, mod, "hub", page).replace('value="hub:ipmi"', 'value="page:brasileiros-no-exterior"').replace(
        f'data-endpoint="{INTL.path_of(lang, "hub")}"', f'data-endpoint="{INTL.path_of(lang, "brasil")}"')


INTL.form_html = form_html
_hreflang, _switcher = INTL.hreflang_block, INTL.set_switcher
INTL.hreflang_block = lambda kind: (
    f'<link rel="alternate" hreflang="pt-PT" href="{INTL.BASE}{INTL.path_of("pt", "brasil")}">\n'
    f'<link rel="alternate" hreflang="x-default" href="{INTL.BASE}{INTL.path_of("pt", "brasil")}">\n'
) if kind == "brasil" else _hreflang(kind)
# the language selector keeps pointing at each language's hub
INTL.set_switcher = lambda s, kind, lang: _switcher(s, "hub", lang) if kind == "brasil" else _switcher(s, kind, lang)
INTL.DATE = DATE
built.append(INTL.build("pt", "brasil"))
_br = PUBLIC / "seguros/saude-internacional" / PT_SLUG / "index.html"
_br.write_text(_br.read_text(encoding="utf-8").replace("Revisto a 18 de outubro de 2026", "Revisto a 20 de outubro de 2026"), encoding="utf-8")
# KINDS was extended only for this run; the hub's related list skips paths it does not know
del INTL.KINDS["brasil"]

# ---------------------------------------------------------------- link from the PT hub
hub = PUBLIC / "seguros/saude-internacional/index.html"
s = hub.read_text(encoding="utf-8")
link = '<li><a href="/seguros/saude-internacional/brasileiros-no-exterior/">Brasileiros a viver fora do Brasil</a></li>'
if link not in s:
    i = s.index('<section class="ipmi-related"')
    j = s.index("<ul>", i) + len("<ul>")
    s = s[:j] + "\n      " + link + s[j:]
faq_old = "porque o país exige seguro de uma seguradora local.</p></details>"
faq_new = 'porque o país exige seguro de uma seguradora local. Veja o guia para <a href="/seguros/saude-internacional/brasileiros-no-exterior/">brasileiros no exterior</a>.</p></details>'
if faq_new not in s:
    s = s.replace(faq_old, faq_new, 1)
hub.write_text(s, encoding="utf-8")
built.append("/seguros/saude-internacional/ (link)")

# ---------------------------------------------------------------- sitemap
sm = PUBLIC / "sitemap-pages.xml"
x = sm.read_text(encoding="utf-8")
urls = [p["path"] for p in NEW_PAGES] + ["/seguros/saude-internacional/" + PT_SLUG]
for u in urls:
    loc = f"<loc>https://adlerrochefort.com{u}</loc>"
    if loc in x:
        x = re.sub(re.escape(loc) + r"\s*<lastmod>[^<]*</lastmod>", f"{loc}\n    <lastmod>{DATE}</lastmod>", x)
    else:
        entry = f"  <url>\n    {loc}\n    <lastmod>{DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n"
        x = x.replace("</urlset>", entry + "</urlset>")
for u in ("/en/international-health-insurance/", "/es/seguro-medico-internacional/", "/seguros/saude-internacional/"):
    loc = f"<loc>https://adlerrochefort.com{u}</loc>"
    x = re.sub(re.escape(loc) + r"\s*<lastmod>[^<]*</lastmod>", f"{loc}\n    <lastmod>{DATE}</lastmod>", x)
sm.write_text(x, encoding="utf-8")

for b in built:
    print(b)
