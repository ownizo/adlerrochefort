#!/usr/bin/env python3
"""Add the Cigna Global online simulator (affiliate quote tool) to the Cigna
Global product pages in every language, and a pointer to it on the EN page for
US citizens abroad.

What it inserts on each Cigna Global page:
  1. A second hero button, next to "Get a written quote", that opens the
     simulator in a new tab.
  2. A "simulate now" card directly before the quote form (ipmi-formbox), with
     three short notes, the simulator button and an invitation to send the
     result for a written review and comparison.
  3. One small inline script that sends a GA4 event (cigna_quote_click) with
     the placement and the page language. No personal data.

The link goes through the /go/cigna short link (302 in netlify.toml), so the
affiliate URL lives in one place only. Links carry rel="sponsored nofollow
noopener", as Google asks for affiliate links.

Idempotent: pages that already carry the marker are skipped. Re-run it after
regenerating any of these pages with scripts/build-ipmi-intl-pages.py.

Usage: python3 scripts/add-cigna-simulator.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "public"
MARK = "<!-- cigna-simulator -->"
GO = "/go/cigna"
REL = 'target="_blank" rel="sponsored nofollow noopener"'

T = {
    "seguros/saude-internacional/cigna-global": dict(
        hero="Simular já com a Cigna",
        h2="Simulação imediata com a Cigna Global",
        lead="Se preferir ver um valor de imediato, o simulador oficial da Cigna Global apresenta um prémio em poucos minutos. Abre num novo separador e a simulação fica associada à Adler &amp; Rochefort como seu mediador, sem qualquer custo adicional para si.",
        notes=["O valor é indicativo: o prémio e as condições finais dependem da aceitação da Cigna, após as questões médicas.",
               "A nacionalidade e o país onde vai viver têm de ser diferentes.",
               "Se já tem um valor, pode enviá-lo através do formulário abaixo: analisamos as coberturas e comparamos, por escrito, com a Allianz Care e a APRIL International, quando for elegível."],
        btn="Abrir o simulador Cigna Global",
        small="Ferramenta oficial da Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), mediador de seguros registado na ASF n.º 425591790/3.",
        newtab="abre num novo separador"),
    "en/international-health-insurance/cigna-global": dict(
        hero="Simulate now with Cigna",
        h2="Instant online quote with Cigna Global",
        lead="If you would rather see a figure straight away, Cigna Global&rsquo;s official quote tool shows a premium in a few minutes. It opens in a new tab and your quote is linked to Adler &amp; Rochefort as your broker, at no extra cost to you.",
        notes=["The figure is indicative: the final premium and terms depend on Cigna&rsquo;s acceptance, after the medical questions.",
               "Your nationality and the country where you will live must be different.",
               "Already have a figure? Send it to us with the form below: we review the cover and compare it in writing with Allianz Care and APRIL International, where you are eligible."],
        btn="Open the Cigna Global quote tool",
        small="Official Cigna Global tool. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-regulated insurance broker, ASF no. 425591790/3.",
        newtab="opens in a new tab"),
    "es/seguro-medico-internacional/cigna-global": dict(
        hero="Simular ahora con Cigna",
        h2="Simulación inmediata con Cigna Global",
        lead="Si prefiere ver una cifra de inmediato, el simulador oficial de Cigna Global le muestra una prima en pocos minutos. Se abre en una nueva pestaña y la simulación queda asociada a Adler &amp; Rochefort como su corredor, sin ningún coste adicional para usted.",
        notes=["La cifra es orientativa: la prima y las condiciones finales dependen de la aceptación de Cigna, tras las preguntas médicas.",
               "Su nacionalidad y el país donde vivirá deben ser distintos.",
               "¿Ya tiene una cifra? Envíenosla con el formulario de abajo: analizamos las coberturas y las comparamos por escrito con Allianz Care y APRIL International, cuando sea elegible."],
        btn="Abrir el simulador de Cigna Global",
        small="Herramienta oficial de Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), corredor de seguros regulado en la UE, ASF n.º 425591790/3.",
        newtab="se abre en una nueva pestaña"),
    "de/internationale-krankenversicherung/cigna-global": dict(
        hero="Jetzt bei Cigna berechnen",
        h2="Sofortige Online-Berechnung mit Cigna Global",
        lead="Wenn Sie sofort eine Zahl sehen möchten, zeigt Ihnen der offizielle Tarifrechner von Cigna Global in wenigen Minuten eine Prämie. Er öffnet sich in einem neuen Tab, und Ihre Berechnung wird Adler &amp; Rochefort als Ihrem Makler zugeordnet – ohne Mehrkosten für Sie.",
        notes=["Die Zahl ist unverbindlich: Prämie und endgültige Bedingungen hängen von der Annahme durch Cigna nach den Gesundheitsfragen ab.",
               "Ihre Staatsangehörigkeit und das Land, in dem Sie leben werden, müssen verschieden sein.",
               "Sie haben bereits eine Zahl? Senden Sie sie uns über das Formular unten: Wir prüfen den Deckungsumfang und vergleichen schriftlich mit Allianz Care und APRIL International, sofern Sie berechtigt sind."],
        btn="Tarifrechner von Cigna Global öffnen",
        small="Offizielles Tool von Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-regulierter Versicherungsmakler, ASF Nr. 425591790/3.",
        newtab="öffnet sich in einem neuen Tab"),
    "fr/assurance-sante-internationale/cigna-global": dict(
        hero="Simuler maintenant avec Cigna",
        h2="Simulation immédiate avec Cigna Global",
        lead="Si vous préférez voir un montant tout de suite, le simulateur officiel de Cigna Global vous indique une prime en quelques minutes. Il s’ouvre dans un nouvel onglet et votre simulation est rattachée à Adler &amp; Rochefort en tant que courtier, sans aucun coût supplémentaire pour vous.",
        notes=["Le montant est indicatif : la prime et les conditions définitives dépendent de l’acceptation de Cigna, après les questions médicales.",
               "Votre nationalité et le pays où vous allez vivre doivent être différents.",
               "Vous avez déjà un montant ? Envoyez-le-nous avec le formulaire ci-dessous : nous analysons les garanties et les comparons par écrit avec Allianz Care et APRIL International, si vous êtes éligible."],
        btn="Ouvrir le simulateur Cigna Global",
        small="Outil officiel de Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), courtier en assurance réglementé dans l’UE, ASF n° 425591790/3.",
        newtab="s’ouvre dans un nouvel onglet"),
    "it/assicurazione-medica-internazionale/cigna-global": dict(
        hero="Simula ora con Cigna",
        h2="Simulazione immediata con Cigna Global",
        lead="Se preferisce vedere subito una cifra, il simulatore ufficiale di Cigna Global le mostra un premio in pochi minuti. Si apre in una nuova scheda e la simulazione resta associata ad Adler &amp; Rochefort come suo broker, senza alcun costo aggiuntivo per lei.",
        notes=["La cifra è indicativa: il premio e le condizioni finali dipendono dall’accettazione di Cigna, dopo le domande mediche.",
               "La nazionalità e il paese in cui vivrà devono essere diversi.",
               "Ha già una cifra? Ce la invii con il modulo qui sotto: analizziamo le coperture e le confrontiamo per iscritto con Allianz Care e APRIL International, se ne ha i requisiti."],
        btn="Apri il simulatore di Cigna Global",
        small="Strumento ufficiale di Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), broker assicurativo regolamentato nell’UE, ASF n. 425591790/3.",
        newtab="si apre in una nuova scheda"),
    "nl/internationale-zorgverzekering/cigna-global": dict(
        hero="Nu berekenen bij Cigna",
        h2="Direct online berekenen met Cigna Global",
        lead="Wilt u meteen een bedrag zien, dan toont de officiële premiecalculator van Cigna Global u binnen enkele minuten een premie. Hij opent in een nieuw tabblad en uw berekening wordt gekoppeld aan Adler &amp; Rochefort als uw makelaar, zonder extra kosten voor u.",
        notes=["Het bedrag is indicatief: de premie en de definitieve voorwaarden hangen af van de acceptatie door Cigna, na de medische vragen.",
               "Uw nationaliteit en het land waar u gaat wonen moeten verschillend zijn.",
               "Heeft u al een bedrag? Stuur het ons via het formulier hieronder: wij bekijken de dekking en vergelijken die schriftelijk met Allianz Care en APRIL International, als u in aanmerking komt."],
        btn="Open de premiecalculator van Cigna Global",
        small="Officiële tool van Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-gereguleerde verzekeringsmakelaar, ASF nr. 425591790/3.",
        newtab="opent in een nieuw tabblad"),
    "pl/miedzynarodowe-ubezpieczenie-zdrowotne/cigna-global": dict(
        hero="Oblicz teraz z Cigna",
        h2="Natychmiastowa kalkulacja online z Cigna Global",
        lead="Jeśli wolą Państwo od razu zobaczyć kwotę, oficjalny kalkulator Cigna Global pokaże składkę w kilka minut. Otwiera się w nowej karcie, a kalkulacja zostaje przypisana do Adler &amp; Rochefort jako Państwa brokera, bez dodatkowych kosztów.",
        notes=["Kwota jest orientacyjna: ostateczna składka i warunki zależą od akceptacji Cigna po pytaniach medycznych.",
               "Obywatelstwo i kraj, w którym będą Państwo mieszkać, muszą być różne.",
               "Mają już Państwo kwotę? Prosimy przesłać ją przez formularz poniżej: przeanalizujemy zakres ochrony i porównamy go na piśmie z Allianz Care i APRIL International, jeśli spełniają Państwo warunki."],
        btn="Otwórz kalkulator Cigna Global",
        small="Oficjalne narzędzie Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), broker ubezpieczeniowy nadzorowany w UE, ASF nr 425591790/3.",
        newtab="otwiera się w nowej karcie"),
    "se/internationell-sjukvardsforsakring/cigna-global": dict(
        hero="Beräkna nu hos Cigna",
        h2="Direkt beräkning online med Cigna Global",
        lead="Vill du se ett belopp direkt visar Cigna Globals officiella premieberäknare en premie på några minuter. Den öppnas i en ny flik och din beräkning kopplas till Adler &amp; Rochefort som din mäklare, utan extra kostnad för dig.",
        notes=["Beloppet är vägledande: slutlig premie och villkor beror på Cignas godkännande efter hälsofrågorna.",
               "Ditt medborgarskap och landet där du ska bo måste vara olika.",
               "Har du redan ett belopp? Skicka det till oss via formuläret nedan: vi går igenom skyddet och jämför skriftligt med Allianz Care och APRIL International, om du uppfyller villkoren."],
        btn="Öppna Cigna Globals premieberäknare",
        small="Officiellt verktyg från Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-reglerad försäkringsmäklare, ASF nr 425591790/3.",
        newtab="öppnas i en ny flik"),
    "dk/international-sundhedsforsikring/cigna-global": dict(
        hero="Beregn nu hos Cigna",
        h2="Øjeblikkelig beregning online med Cigna Global",
        lead="Vil du gerne se et beløb med det samme, viser Cigna Globals officielle præmieberegner en præmie på få minutter. Den åbner i en ny fane, og din beregning knyttes til Adler &amp; Rochefort som din mægler, uden ekstra omkostninger for dig.",
        notes=["Beløbet er vejledende: den endelige præmie og vilkårene afhænger af Cignas accept efter helbredsspørgsmålene.",
               "Dit statsborgerskab og det land, du skal bo i, skal være forskellige.",
               "Har du allerede et beløb? Send det til os via formularen nedenfor: vi gennemgår dækningen og sammenligner skriftligt med Allianz Care og APRIL International, hvis du er berettiget."],
        btn="Åbn Cigna Globals præmieberegner",
        small="Officielt værktøj fra Cigna Global. Adler &amp; Rochefort (Ownizo, Unipessoal Lda.), EU-reguleret forsikringsmægler, ASF nr. 425591790/3.",
        newtab="åbner i en ny fane"),
    "zh/international-health-insurance/cigna-global": dict(
        hero="立即通过 Cigna 试算",
        h2="通过 Cigna Global 即时在线试算",
        lead="如果您希望立即看到价格，Cigna Global 官方报价工具可在几分钟内显示保费。工具将在新标签页中打开，您的试算将关联至 Adler &amp; Rochefort 作为您的保险经纪，您无需支付任何额外费用。",
        notes=["所示金额仅供参考：最终保费和条件取决于 Cigna 在健康问卷后的核保结果。",
               "您的国籍与您将居住的国家必须不同。",
               "已经有试算结果？请通过下方表格发送给我们：我们将审核保障内容，并在您符合条件时，以书面形式与 Allianz Care 和 APRIL International 进行比较。"],
        btn="打开 Cigna Global 报价工具",
        small="Cigna Global 官方工具。Adler &amp; Rochefort（Ownizo, Unipessoal Lda.），受欧盟监管的保险经纪，ASF 注册号 425591790/3。",
        newtab="在新标签页中打开"),
    "il/international-health-insurance/cigna-global": dict(
        hero="לחישוב מיידי ב־Cigna",
        h2="חישוב מקוון מיידי עם Cigna Global",
        lead="אם אתם מעדיפים לראות סכום מיד, כלי הצעת המחיר הרשמי של Cigna Global מציג פרמיה בתוך דקות ספורות. הכלי נפתח בכרטיסייה חדשה, והחישוב משויך ל־Adler &amp; Rochefort כברוקר שלכם, ללא כל עלות נוספת עבורכם.",
        notes=["הסכום הוא אינדיקטיבי: הפרמיה והתנאים הסופיים תלויים באישור של Cigna לאחר השאלות הרפואיות.",
               "האזרחות שלכם והמדינה שבה תגורו חייבות להיות שונות.",
               "כבר יש לכם סכום? שלחו אותו אלינו בטופס שלמטה: נבדוק את הכיסויים ונשווה בכתב מול Allianz Care ו־APRIL International, אם אתם עומדים בתנאים."],
        btn="לפתיחת כלי הצעת המחיר של Cigna Global",
        small="כלי רשמי של Cigna Global. ‏Adler &amp; Rochefort ‏(Ownizo, Unipessoal Lda.), ברוקר ביטוח בפיקוח האיחוד האירופי, ASF מס׳ 425591790/3.",
        newtab="נפתח בכרטיסייה חדשה"),
}

CSS = """<style>
.ipmi-x .ipmi-hero .ipmi-btn{margin:0 10px 10px 0}
.ipmi-x .ipmi-hero .ipmi-btn-sim{display:inline-block;background:#FF6300;color:#fff;border-radius:999px;padding:12px 24px;font-weight:600;text-decoration:none;margin:0 0 10px}
.ipmi-x .ipmi-hero .ipmi-btn-sim:hover,.ipmi-x .ipmi-sim .ipmi-sim-btn:hover{background:#e65800}
[dir=rtl] .ipmi-x .ipmi-hero .ipmi-btn{margin:0 0 10px 10px}
.ipmi-x .ipmi-sim{background:#fff;border:1px solid var(--line);border-inline-start:4px solid #FF6300;border-radius:16px;padding:22px 24px;margin:0 0 28px}
.ipmi-x .ipmi-sim h2{font-size:21px;margin:0 0 10px;font-family:Inter,system-ui,sans-serif;font-weight:600}
.ipmi-x .ipmi-sim p{font-size:15.5px;line-height:1.65;margin:0 0 12px;color:#333}
.ipmi-x .ipmi-sim ul{margin:0 0 18px;padding-inline-start:20px}
.ipmi-x .ipmi-sim li{margin:0 0 6px;line-height:1.55;font-size:15px}
.ipmi-x .ipmi-sim .ipmi-sim-btn{display:inline-block;background:#FF6300;color:#fff;border-radius:999px;padding:13px 26px;font-weight:600;text-decoration:none}
.ipmi-x .ipmi-sim .ipmi-sim-small{font-size:12.5px;color:var(--muted);margin:14px 0 0}
</style>"""

JS = """<script>
(function(){document.querySelectorAll('a[data-ar-cigna]').forEach(function(a){a.addEventListener('click',function(){if(typeof window.gtag==='function'){window.gtag('event','cigna_quote_click',{placement:a.getAttribute('data-ar-cigna'),language:document.documentElement.lang,page_path:location.pathname});}});});})();
</script>"""

ARROW = '<span aria-hidden="true"> &#8599;</span>'


def link(cls, text, placement, newtab):
    return (f'<a class="{cls}" href="{GO}" {REL} data-ar-cigna="{placement}" '
            f'aria-label="{text} ({newtab})">{text}{ARROW}</a>')


def card(t):
    notes = "".join(f"<li>{n}</li>" for n in t["notes"])
    return (f'{MARK}\n  <section class="ipmi-sim" id="simulador-cigna" aria-labelledby="ipmi-sim-h">\n'
            f'    <h2 id="ipmi-sim-h">{t["h2"]}</h2>\n'
            f'    <p>{t["lead"]}</p>\n'
            f'    <ul>{notes}</ul>\n'
            f'    {link("ipmi-sim-btn", t["btn"], "card", t["newtab"])}\n'
            f'    <p class="ipmi-sim-small">{t["small"]}</p>\n'
            f'  </section>\n')


def main():
    done = 0
    for rel, t in T.items():
        p = ROOT / rel / "index.html"
        s = p.read_text(encoding="utf-8")
        if MARK in s:
            print("skip", rel)
            continue
        # 1. hero button, right after the existing written-quote button
        s, n1 = re.subn(r'(<header class="ipmi-hero">.*?<a class="ipmi-btn" href="#ipmi-pedido">[^<]*</a>)',
                        lambda m: m.group(1) + "\n    " + link("ipmi-btn-sim", t["hero"], "hero", t["newtab"]),
                        s, count=1, flags=re.S)
        # 2. card before the quote form
        s, n2 = re.subn(r'(\n\s*<div class="ipmi-formbox">)', lambda m: "\n  " + card(t) + m.group(1).lstrip("\n"), s, count=1)
        # 3. CSS in head, JS before </body>
        s, n3 = re.subn(r"</head>", CSS + "\n</head>", s, count=1)
        s, n4 = re.subn(r"</body>", JS + "\n</body>", s, count=1)
        if (n1, n2, n3, n4) != (1, 1, 1, 1):
            raise SystemExit(f"anchor missing in {rel}: {(n1, n2, n3, n4)}")
        p.write_text(s, encoding="utf-8")
        done += 1
        print("ok  ", rel)
    print(f"{done} page(s) updated")


if __name__ == "__main__":
    main()
