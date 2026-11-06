# International health band for all 12 homepages: Allianz Care, Cigna Global and APRIL International.
import sys
sys.path.insert(0, '/home/claude/dest')
from catalog import CAT

B = {
 'pt': ('Seguro de saúde internacional', 'Vive, ou vai viver, fora do seu país? Um seguro de saúde que o acompanha.',
        'Para famílias, profissionais deslocados e reformados que vivem fora do país da sua nacionalidade: comparamos por escrito a Allianz Care, a Cigna Global e a APRIL International, sem custos para si.',
        'Comparar as três seguradoras →'),
 'en': ('International health insurance', 'Living abroad, or about to? Health cover that moves with you.',
        'For families, relocated professionals and retirees living outside their country of nationality: Allianz Care, Cigna Global and APRIL International compared in writing, at no cost to you.',
        'Compare the three insurers →'),
 'es': ('Seguro médico internacional', '¿Vive, o va a vivir, fuera de su país? Un seguro médico que se muda con usted.',
        'Para familias, profesionales desplazados y jubilados que viven fuera de su país de nacionalidad, también desde América Latina: comparamos por escrito Allianz Care, Cigna Global y APRIL International, sin coste para usted.',
        'Comparar las tres aseguradoras →'),
 'de': ('Internationale Krankenversicherung', 'Sie leben im Ausland oder ziehen bald um? Ein Gesundheitsschutz, der mitzieht.',
        'Für Familien, entsandte Fachkräfte und Ruheständler, die außerhalb ihres Herkunftslandes leben: Allianz Care, Cigna Global und APRIL International schriftlich verglichen, ohne Kosten für Sie.',
        'Die drei Versicherer vergleichen →'),
 'fr': ('Assurance santé internationale', 'Vous vivez, ou allez vivre, hors de votre pays ? Une couverture santé qui vous suit.',
        'Pour les familles, les cadres expatriés et les retraités qui vivent hors de leur pays de nationalité : Allianz Care, Cigna Global et APRIL International comparés par écrit, sans frais pour vous.',
        'Comparer les trois assureurs →'),
 'it': ('Assicurazione sanitaria internazionale', 'Vive, o sta per vivere, fuori dal Suo Paese? Una copertura sanitaria che La segue.',
        'Per famiglie, professionisti trasferiti e pensionati che vivono fuori dal Paese di nazionalità: Allianz Care, Cigna Global e APRIL International confrontate per iscritto, senza costi per Lei.',
        'Confrontare le tre compagnie →'),
 'nl': ('Internationale zorgverzekering', 'Woont u in het buitenland, of gaat u verhuizen? Een zorgverzekering die met u meegaat.',
        'Voor gezinnen, uitgezonden professionals en gepensioneerden die buiten hun land van nationaliteit wonen: Allianz Care, Cigna Global en APRIL International schriftelijk vergeleken, zonder kosten voor u.',
        'Vergelijk de drie verzekeraars →'),
 'pl': ('Międzynarodowe ubezpieczenie zdrowotne', 'Mieszkają Państwo za granicą lub planują przeprowadzkę? Ochrona zdrowia, która jedzie z Państwem.',
        'Dla rodzin, oddelegowanych specjalistów i emerytów mieszkających poza krajem obywatelstwa: Allianz Care, Cigna Global i APRIL International porównane na piśmie, bez kosztów dla Państwa.',
        'Porównaj trzech ubezpieczycieli →'),
 'se': ('Internationell sjukvårdsförsäkring', 'Bor du utomlands, eller ska du flytta? Ett vårdskydd som följer med dig.',
        'För familjer, utsända yrkespersoner och pensionärer som bor utanför sitt medborgarskapsland: Allianz Care, Cigna Global och APRIL International jämförda skriftligt, utan kostnad för dig.',
        'Jämför de tre försäkringsgivarna →'),
 'dk': ('International sundhedsforsikring', 'Bor du i udlandet, eller skal du flytte? En sundhedsforsikring, der flytter med dig.',
        'For familier, udsendte medarbejdere og pensionister, der bor uden for deres statsborgerskabsland: Allianz Care, Cigna Global og APRIL International sammenlignet skriftligt, uden omkostninger for dig.',
        'Sammenlign de tre selskaber →'),
 'il': ('ביטוח בריאות בינלאומי', 'גרים בחו״ל, או עומדים לעבור? ביטוח בריאות שעובר איתכם.',
        'למשפחות, לאנשי מקצוע שעברו לחו״ל ולגמלאים שגרים מחוץ למדינת האזרחות שלהם: Allianz Care‏, Cigna Global ו־APRIL International בהשוואה כתובה, ללא עלות עבורכם.',
        'להשוואה בין שלושת המבטחים ←'),
 'zh': ('国际医疗保险', '在海外生活，或即将移居海外？一份随您同行的医疗保障。',
        '适用于居住在国籍国以外的家庭、外派专业人士和退休人士：我们以书面形式比较 Allianz Care、Cigna Global 和 APRIL International，您无需支付任何费用。',
        '比较三家保险公司 →'),
}
CSS = """<style>
.ipmi-band{padding:0 16px;margin:32px auto 8px;max-width:1248px}
.ipmi-band-inner{background:#292929;color:#fff;border-radius:24px;padding:36px 40px;display:flex;gap:32px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.ipmi-band-text{flex:1 1 460px;min-width:0}
.ipmi-band-eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#FF6300;margin-bottom:10px}
.ipmi-band h2{font-size:28px;line-height:1.2;font-weight:500;color:#fff;margin:0 0 10px}
.ipmi-band p{font-size:15px;line-height:1.65;color:rgba(255,255,255,.78);margin:0}
.ipmi-band-logos{margin-top:14px;font-size:13px;letter-spacing:.04em;color:rgba(255,255,255,.6)}
.ipmi-band-btn{display:inline-block;background:#FF6300;color:#1C1C1C;font-weight:700;font-size:14px;text-decoration:none;padding:14px 26px;border-radius:999px;white-space:nowrap}
.ipmi-band-btn:hover{background:#E05600}
@media(max-width:760px){.ipmi-band-inner{padding:28px 24px}.ipmi-band h2{font-size:23px}.ipmi-band-btn{white-space:normal}}
</style>"""

def band(lang):
    e, h, p, cta = B[lang]
    d = ' dir="rtl"' if lang == 'il' else ''
    return (f'<!-- IPMI-BAND -->\n<section class="ipmi-band" aria-label="{e}"{d}>\n{CSS}\n  <div class="ipmi-band-inner">\n'
            f'    <div class="ipmi-band-text">\n      <div class="ipmi-band-eyebrow">{e}</div>\n      <h2>{h}</h2>\n      <p>{p}</p>\n'
            f'      <div class="ipmi-band-logos">Allianz Care · Cigna Global · APRIL International</div>\n    </div>\n'
            f'    <div class="ipmi-band-actions">\n      <a class="ipmi-band-btn" href="{CAT[lang]["ipmi"]}">{cta}</a>\n    </div>\n  </div>\n</section>\n')
