#!/usr/bin/env python3
"""Online simulators for international health insurance (IPMI).

1. APRIL International product pages (every language): the same treatment the
   Cigna Global pages got from scripts/add-cigna-simulator.py — a second hero
   button and a "simulate now" card before the quote form, with the same three
   notes. Texts are derived from the Cigna texts in that script.
2. IPMI hub pages (every language): a block right after the "Allianz Care,
   Cigna Global or APRIL International" comparison, with one button per
   simulator (Cigna Global and APRIL International) and a link to the written
   quote form, which is the route for Allianz Care (no online simulator).

Links go through the /go/cigna and /go/april short links (302s in
netlify.toml), open in a new tab and carry rel="sponsored nofollow noopener".
Each click sends a GA4 event: cigna_quote_click or april_quote_click, with the
placement and the page language. No personal data.

Idempotent (markers). Re-run after regenerating any of these pages.
Usage: python3 scripts/add-ipmi-simulators.py
"""
import importlib.util
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent / "public"

spec = importlib.util.spec_from_file_location("cigna", HERE / "add-cigna-simulator.py")
cigna = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cigna)

REL = 'target="_blank" rel="sponsored nofollow noopener"'
ARROW = '<span aria-hidden="true"> &#8599;</span>'
MARK_APRIL = "<!-- april-simulator -->"
MARK_HUB = "<!-- ipmi-simulators-hub -->"

JS = """<script>
(function(){document.querySelectorAll('a[data-ar-sim]').forEach(function(a){a.addEventListener('click',function(){var v=(a.getAttribute('data-ar-sim')||'').split(':');if(typeof window.gtag==='function'){window.gtag('event',v[0]+'_quote_click',{placement:v[1]||'',language:document.documentElement.lang,page_path:location.pathname});}});});})();
</script>"""


def to_april(text):
    return (text.replace("APRIL International", "\x00")
                .replace("Cigna Global", "APRIL International")
                .replace("Cigna", "APRIL")
                .replace("\x00", "Cigna Global"))


def sim_link(cls, go, text, ev, newtab, style=""):
    st = f' style="{style}"' if style else ""
    return (f'<a class="{cls}" href="{go}" {REL} data-ar-sim="{ev}"{st} '
            f'aria-label="{text} ({newtab})">{text}{ARROW}</a>')


# ---------------------------------------------------------------- APRIL pages
def april_pages():
    n = 0
    for rel, t in cigna.T.items():
        rel = rel.replace("/cigna-global", "/april-international")
        a = {k: (to_april(v) if isinstance(v, str) else [to_april(x) for x in v]) for k, v in t.items()}
        a["newtab"] = t["newtab"]
        p = ROOT / rel / "index.html"
        s = p.read_text(encoding="utf-8")
        if MARK_APRIL in s:
            print("skip", rel); continue
        notes = "".join(f"<li>{x}</li>" for x in a["notes"])
        card = (f'{MARK_APRIL}\n  <section class="ipmi-sim" id="simulador-april" aria-labelledby="ipmi-sim-h">\n'
                f'    <h2 id="ipmi-sim-h">{a["h2"]}</h2>\n    <p>{a["lead"]}</p>\n    <ul>{notes}</ul>\n'
                f'    {sim_link("ipmi-sim-btn", "/go/april", a["btn"], "april:card", a["newtab"])}\n'
                f'    <p class="ipmi-sim-small">{a["small"]}</p>\n  </section>\n')
        s, n1 = re.subn(r'(<header class="ipmi-hero">.*?<a class="ipmi-btn" href="#ipmi-pedido">[^<]*</a>)',
                        lambda m: m.group(1) + "\n    " + sim_link("ipmi-btn-sim", "/go/april", a["hero"], "april:hero", a["newtab"]),
                        s, count=1, flags=re.S)
        s, n2 = re.subn(r'(\n\s*<div class="ipmi-formbox">)', lambda m: "\n  " + card + m.group(1).lstrip("\n"), s, count=1)
        s, n3 = re.subn(r"</head>", cigna.CSS + "\n</head>", s, count=1)
        s, n4 = re.subn(r"</body>", JS + "\n</body>", s, count=1)
        if (n1, n2, n3, n4) != (1, 1, 1, 1):
            raise SystemExit(f"anchor missing in {rel}: {(n1, n2, n3, n4)}")
        p.write_text(s, encoding="utf-8"); n += 1; print("ok  ", rel)
    return n


# ------------------------------------------------------------------ IPMI hubs
H = {
    "seguros/saude-internacional": dict(
        h2="Prefere ver um valor de imediato?",
        lead="A Cigna Global e a APRIL International disponibilizam simuladores oficiais que apresentam um prémio em poucos minutos. Abrem num novo separador e a simulação fica associada à Adler &amp; Rochefort como seu mediador, sem qualquer custo adicional para si. A Allianz Care não tem simulador online: para incluir a Allianz Care, peça-nos a proposta por escrito.",
        notes=["O valor é indicativo: o prémio e as condições finais dependem da aceitação da seguradora, após as questões médicas.",
               "A nacionalidade e o país onde vai viver têm de ser diferentes."],
        cigna="Simular com a Cigna Global", april="Simular com a APRIL International",
        form="Pedir proposta por escrito, com a Allianz Care",
        small="Ferramentas oficiais da Cigna Global e da APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), mediador de seguros registado na ASF n.º 425591790/3."),
    "en/international-health-insurance": dict(
        h2="Would you rather see a figure now?",
        lead="Cigna Global and APRIL International both have official online quote tools that show a premium in a few minutes. They open in a new tab and your quote is linked to Adler &amp; Rochefort as your broker, at no extra cost to you. Allianz Care has no online quote tool: to include Allianz Care, ask us for a written quote.",
        notes=["The figure is indicative: the final premium and terms depend on the insurer&rsquo;s acceptance, after the medical questions.",
               "Your nationality and the country where you will live must be different."],
        cigna="Quote online with Cigna Global", april="Quote online with APRIL International",
        form="Ask for a written quote, including Allianz Care",
        small="Official tools of Cigna Global and APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-regulated insurance broker, ASF no. 425591790/3."),
    "es/seguro-medico-internacional": dict(
        h2="¿Prefiere ver una cifra ahora?",
        lead="Cigna Global y APRIL International tienen simuladores oficiales que muestran una prima en pocos minutos. Se abren en una nueva pestaña y la simulación queda asociada a Adler &amp; Rochefort como su corredor, sin ningún coste adicional para usted. Allianz Care no tiene simulador online: para incluir Allianz Care, pídanos la propuesta por escrito.",
        notes=["La cifra es orientativa: la prima y las condiciones finales dependen de la aceptación de la aseguradora, tras las preguntas médicas.",
               "Su nacionalidad y el país donde vivirá deben ser distintos."],
        cigna="Simular con Cigna Global", april="Simular con APRIL International",
        form="Pedir propuesta por escrito, con Allianz Care",
        small="Herramientas oficiales de Cigna Global y APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), corredor de seguros regulado en la UE, ASF n.º 425591790/3."),
    "de/internationale-krankenversicherung": dict(
        h2="Möchten Sie sofort eine Zahl sehen?",
        lead="Cigna Global und APRIL International bieten offizielle Online-Rechner, die in wenigen Minuten eine Prämie zeigen. Sie öffnen sich in einem neuen Tab, und Ihre Berechnung wird Adler &amp; Rochefort als Ihrem Makler zugeordnet – ohne Mehrkosten für Sie. Allianz Care hat keinen Online-Rechner: Wenn Allianz Care dabei sein soll, fordern Sie bei uns ein schriftliches Angebot an.",
        notes=["Die Zahl ist unverbindlich: Prämie und endgültige Bedingungen hängen von der Annahme durch den Versicherer nach den Gesundheitsfragen ab.",
               "Ihre Staatsangehörigkeit und das Land, in dem Sie leben werden, müssen verschieden sein."],
        cigna="Mit Cigna Global berechnen", april="Mit APRIL International berechnen",
        form="Schriftliches Angebot anfordern, mit Allianz Care",
        small="Offizielle Tools von Cigna Global und APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-regulierter Versicherungsmakler, ASF Nr. 425591790/3."),
    "fr/assurance-sante-internationale": dict(
        h2="Vous préférez voir un montant tout de suite ?",
        lead="Cigna Global et APRIL International proposent des simulateurs officiels qui indiquent une prime en quelques minutes. Ils s’ouvrent dans un nouvel onglet et votre simulation est rattachée à Adler &amp; Rochefort en tant que courtier, sans aucun coût supplémentaire pour vous. Allianz Care n’a pas de simulateur en ligne : pour inclure Allianz Care, demandez-nous une proposition écrite.",
        notes=["Le montant est indicatif : la prime et les conditions définitives dépendent de l’acceptation de l’assureur, après les questions médicales.",
               "Votre nationalité et le pays où vous allez vivre doivent être différents."],
        cigna="Simuler avec Cigna Global", april="Simuler avec APRIL International",
        form="Demander une proposition écrite, avec Allianz Care",
        small="Outils officiels de Cigna Global et d’APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), courtier en assurance réglementé dans l’UE, ASF n° 425591790/3."),
    "it/assicurazione-medica-internazionale": dict(
        h2="Preferisce vedere subito una cifra?",
        lead="Cigna Global e APRIL International offrono simulatori ufficiali che mostrano un premio in pochi minuti. Si aprono in una nuova scheda e la simulazione resta associata ad Adler &amp; Rochefort come suo broker, senza alcun costo aggiuntivo per lei. Allianz Care non ha un simulatore online: per includere Allianz Care, ci richieda un preventivo scritto.",
        notes=["La cifra è indicativa: il premio e le condizioni finali dipendono dall’accettazione dell’assicuratore, dopo le domande mediche.",
               "La nazionalità e il paese in cui vivrà devono essere diversi."],
        cigna="Simula con Cigna Global", april="Simula con APRIL International",
        form="Richiedi un preventivo scritto, con Allianz Care",
        small="Strumenti ufficiali di Cigna Global e APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), broker assicurativo regolamentato nell’UE, ASF n. 425591790/3."),
    "nl/internationale-zorgverzekering": dict(
        h2="Liever meteen een bedrag zien?",
        lead="Cigna Global en APRIL International hebben officiële premiecalculators die binnen enkele minuten een premie tonen. Ze openen in een nieuw tabblad en uw berekening wordt gekoppeld aan Adler &amp; Rochefort als uw makelaar, zonder extra kosten voor u. Allianz Care heeft geen online calculator: wilt u Allianz Care erbij, vraag ons dan een schriftelijke offerte.",
        notes=["Het bedrag is indicatief: de premie en de definitieve voorwaarden hangen af van de acceptatie door de verzekeraar, na de medische vragen.",
               "Uw nationaliteit en het land waar u gaat wonen moeten verschillend zijn."],
        cigna="Berekenen bij Cigna Global", april="Berekenen bij APRIL International",
        form="Schriftelijke offerte aanvragen, met Allianz Care",
        small="Officiële tools van Cigna Global en APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-gereguleerde verzekeringsmakelaar, ASF nr. 425591790/3."),
    "pl/miedzynarodowe-ubezpieczenie-zdrowotne": dict(
        h2="Wolą Państwo od razu zobaczyć kwotę?",
        lead="Cigna Global i APRIL International udostępniają oficjalne kalkulatory, które pokazują składkę w kilka minut. Otwierają się w nowej karcie, a kalkulacja zostaje przypisana do Adler &amp; Rochefort jako Państwa brokera, bez dodatkowych kosztów. Allianz Care nie ma kalkulatora online: aby uwzględnić Allianz Care, prosimy o zapytanie o ofertę pisemną.",
        notes=["Kwota jest orientacyjna: ostateczna składka i warunki zależą od akceptacji ubezpieczyciela po pytaniach medycznych.",
               "Obywatelstwo i kraj, w którym będą Państwo mieszkać, muszą być różne."],
        cigna="Oblicz z Cigna Global", april="Oblicz z APRIL International",
        form="Poproś o ofertę pisemną, z Allianz Care",
        small="Oficjalne narzędzia Cigna Global i APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), broker ubezpieczeniowy nadzorowany w UE, ASF nr 425591790/3."),
    "se/internationell-sjukvardsforsakring": dict(
        h2="Vill du se ett belopp direkt?",
        lead="Cigna Global och APRIL International har officiella premieberäknare som visar en premie på några minuter. De öppnas i en ny flik och din beräkning kopplas till Adler &amp; Rochefort som din mäklare, utan extra kostnad för dig. Allianz Care har ingen beräknare online: vill du ha med Allianz Care, be oss om en skriftlig offert.",
        notes=["Beloppet är vägledande: slutlig premie och villkor beror på försäkringsbolagets godkännande efter hälsofrågorna.",
               "Ditt medborgarskap och landet där du ska bo måste vara olika."],
        cigna="Beräkna hos Cigna Global", april="Beräkna hos APRIL International",
        form="Begär skriftlig offert, med Allianz Care",
        small="Officiella verktyg från Cigna Global och APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-reglerad försäkringsmäklare, ASF nr 425591790/3."),
    "dk/international-sundhedsforsikring": dict(
        h2="Vil du se et beløb med det samme?",
        lead="Cigna Global og APRIL International har officielle præmieberegnere, der viser en præmie på få minutter. De åbner i en ny fane, og din beregning knyttes til Adler &amp; Rochefort som din mægler, uden ekstra omkostninger for dig. Allianz Care har ingen beregner online: vil du have Allianz Care med, så bed os om et skriftligt tilbud.",
        notes=["Beløbet er vejledende: den endelige præmie og vilkårene afhænger af forsikringsselskabets accept efter helbredsspørgsmålene.",
               "Dit statsborgerskab og det land, du skal bo i, skal være forskellige."],
        cigna="Beregn hos Cigna Global", april="Beregn hos APRIL International",
        form="Bed om et skriftligt tilbud, med Allianz Care",
        small="Officielle værktøjer fra Cigna Global og APRIL International. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-reguleret forsikringsmægler, ASF nr. 425591790/3."),
    "zh/international-health-insurance": dict(
        h2="希望立即看到价格？",
        lead="Cigna Global 和 APRIL International 均提供官方在线报价工具，可在几分钟内显示保费。工具将在新标签页中打开，您的试算将关联至 Adler &amp; Rochefort 作为您的保险经纪，您无需支付任何额外费用。Allianz Care 没有在线报价工具：如需包含 Allianz Care，请向我们索取书面报价。",
        notes=["所示金额仅供参考：最终保费和条件取决于保险公司在健康问卷后的核保结果。",
               "您的国籍与您将居住的国家必须不同。"],
        cigna="通过 Cigna Global 试算", april="通过 APRIL International 试算",
        form="索取书面报价（含 Allianz Care）",
        small="Cigna Global 和 APRIL International 官方工具。Adler &amp; Rochefort（Ownizo, Unipessoal Lda.），受欧盟监管的保险经纪，ASF 注册号 425591790/3。"),
    "il/international-health-insurance": dict(
        h2="מעדיפים לראות סכום כבר עכשיו?",
        lead="ל־Cigna Global ול־APRIL International יש כלים רשמיים להצעת מחיר מקוונת, שמציגים פרמיה בתוך דקות ספורות. הכלים נפתחים בכרטיסייה חדשה, והחישוב משויך ל־Adler &amp; Rochefort כברוקר שלכם, ללא כל עלות נוספת עבורכם. ל־Allianz Care אין כלי מקוון: כדי לכלול את Allianz Care, בקשו מאיתנו הצעה בכתב.",
        notes=["הסכום הוא אינדיקטיבי: הפרמיה והתנאים הסופיים תלויים באישור חברת הביטוח לאחר השאלות הרפואיות.",
               "האזרחות שלכם והמדינה שבה תגורו חייבות להיות שונות."],
        cigna="חישוב ב־Cigna Global", april="חישוב ב־APRIL International",
        form="לבקשת הצעה בכתב, כולל Allianz Care",
        small="כלים רשמיים של Cigna Global ושל APRIL International. ‏Adler &amp; Rochefort ‏(Ownizo, Unipessoal Lda.), ברוקר ביטוח בפיקוח האיחוד האירופי, ASF מס׳ 425591790/3."),
}

HUB_CSS = """<style>
.ar-simhub{max-width:1100px;margin:28px auto;padding:0 20px;box-sizing:border-box}
.ipmi-wrap .ar-simhub{padding:0;margin:8px 0 28px}
.ar-simhub-in{background:#fff;border:1px solid #EBE9E8;border-inline-start:4px solid #FF6300;border-radius:16px;padding:24px 26px;color:#292929}
.ar-simhub h2{font-size:22px;line-height:1.3;margin:0 0 10px;font-family:Inter,system-ui,sans-serif;font-weight:600}
.ar-simhub p{font-size:15.5px;line-height:1.65;margin:0 0 12px;color:#333}
.ar-simhub ul{margin:0 0 18px;padding-inline-start:20px}
.ar-simhub li{margin:0 0 6px;line-height:1.55;font-size:15px}
.ar-simhub-btns{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 12px}
.ar-simhub-btn{display:inline-block;background:#FF6300;color:#fff !important;border-radius:999px;padding:13px 24px;font-weight:600;text-decoration:none}
.ar-simhub-btn:hover{background:#e65800}
.ar-simhub-form{display:inline-block;border:1.5px solid #292929;color:#292929 !important;border-radius:999px;padding:12px 22px;font-weight:600;text-decoration:none}
.ar-simhub-small{font-size:12.5px !important;color:#5b5b5b !important;margin:10px 0 0 !important}
</style>"""


def hubs():
    n = 0
    for rel, t in H.items():
        p = ROOT / rel / "index.html"
        s = p.read_text(encoding="utf-8")
        if MARK_HUB in s:
            print("skip", rel); continue
        form_id = "ipmi-pedido" if 'id="ipmi-pedido"' in s else "ar-quote-form"
        newtab = cigna.T[rel + "/cigna-global"]["newtab"]
        notes = "".join(f"<li>{x}</li>" for x in t["notes"])
        block = (f'\n{MARK_HUB}\n<section class="ar-simhub" id="simuladores" aria-labelledby="ar-simhub-h"><div class="ar-simhub-in">\n'
                 f'  <h2 id="ar-simhub-h">{t["h2"]}</h2>\n  <p>{t["lead"]}</p>\n  <ul>{notes}</ul>\n'
                 f'  <div class="ar-simhub-btns">{sim_link("ar-simhub-btn", "/go/cigna", t["cigna"], "cigna:hub", newtab)}'
                 f'{sim_link("ar-simhub-btn", "/go/april", t["april"], "april:hub", newtab)}'
                 f'<a class="ar-simhub-form" href="#{form_id}">{t["form"]}</a></div>\n'
                 f'  <p class="ar-simhub-small">{t["small"]}</p>\n</div></section>\n')
        m = re.search(r"<h2[^>]*>Allianz Care", s)
        if not m:
            raise SystemExit(f"comparison heading missing in {rel}")
        end = s.find("</section>", m.end())
        if end < 0:
            raise SystemExit(f"section end missing in {rel}")
        end += len("</section>")
        s = s[:end] + block + s[end:]
        s, n3 = re.subn(r"</head>", HUB_CSS + "\n</head>", s, count=1)
        s, n4 = re.subn(r"</body>", JS + "\n</body>", s, count=1)
        if (n3, n4) != (1, 1):
            raise SystemExit(f"head/body missing in {rel}")
        p.write_text(s, encoding="utf-8"); n += 1; print("ok  ", rel)
    return n


if __name__ == "__main__":
    a = april_pages()
    h = hubs()
    print(f"{a} APRIL page(s), {h} hub(s) updated")
