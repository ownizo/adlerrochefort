"""Shared blocks for the international health insurance (IPMI) hubs and
their destination / profile pages: author box, Trustpilot reviews, real
quote examples and the destinations grid. Used by build-ipmi-pages.py."""

REVIEWED = {"en": "14 October 2026", "es": "14 de octubre de 2026", "de": "14. Oktober 2026"}

CSS = """<style id="ipmi-extras">
.ipmi-author{max-width:1100px;margin:28px auto 0;padding:0 24px}
.ipmi-author-inner{display:flex;gap:16px;align-items:center;background:#fff;border:1px solid #EBE9E8;border-radius:16px;padding:16px 20px}
.ipmi-author img{width:56px;height:56px;border-radius:50%;object-fit:cover;flex:0 0 56px}
.ipmi-author-text{font-size:13.5px;line-height:1.6;color:#333332}
.ipmi-author-text strong{color:#292929}
.ipmi-reviews-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-top:22px}
.ipmi-review{background:#fff;border:1px solid #EBE9E8;border-radius:12px;padding:22px;margin:0}
.ipmi-review .stars{color:#00B67A;letter-spacing:2px;font-size:17px;margin-bottom:10px}
.ipmi-review blockquote{margin:0;font-size:14.5px;line-height:1.65;color:#292929}
.ipmi-review figcaption{margin-top:12px;font-size:13px;color:#6B6763}
.ipmi-score{font-size:15px;color:#333332}
.ipmi-score a{color:#292929;font-weight:700}
.ipmi-dest-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;margin-top:20px}
.ipmi-dest{display:block;background:#fff;border:1px solid #EBE9E8;border-radius:14px;padding:20px;text-decoration:none;color:#292929}
.ipmi-dest:hover{border-color:#FF6300}
.ipmi-dest strong{display:block;font-size:16px;margin-bottom:6px}
.ipmi-dest span{font-size:13.5px;line-height:1.55;color:#6B6763}
@media(max-width:760px){.ipmi-author-inner{align-items:flex-start}.ipmi-author-text{font-size:13px}}
.ipmi-note{font-size:13px;line-height:1.7;color:#6B6763;margin-top:12px}
</style>"""


def author(lang):
    if lang == "en":
        txt = ("<strong>Written and reviewed by Hugo Gonçalves</strong>, Founder &amp; Risk Management Specialist at Adler &amp; Rochefort. "
               "Degree in Business Management (University of Hertfordshire) and ongoing training at the Chartered Insurance Institute (CII), London. "
               f"Hugo places Allianz Care and Cigna Global international plans personally. Last reviewed {REVIEWED['en']}.")
    elif lang == "es":
        txt = ("<strong>Redactado y revisado por Hugo Gonçalves</strong>, fundador y especialista en gestión de riesgos de Adler &amp; Rochefort. "
               "Licenciado en Gestión de Empresas (University of Hertfordshire) y en formación continua en el Chartered Insurance Institute (CII) de Londres. "
               f"Hugo gestiona personalmente los planes internacionales de Allianz Care y Cigna Global. Última revisión: {REVIEWED['es']}.")
    else:
        txt = ("<strong>Verfasst und geprüft von Hugo Gonçalves</strong>, Gründer und Risikomanagement-Spezialist von Adler &amp; Rochefort. "
               "Abschluss in Business Management (University of Hertfordshire), laufende Weiterbildung am Chartered Insurance Institute (CII), London. "
               f"Hugo betreut die internationalen Tarife von Allianz Care und Cigna Global persönlich. Zuletzt geprüft: {REVIEWED['de']}.")
    return f"""
<!-- IPMI-AUTHOR -->
<div class="ipmi-author">
  <div class="ipmi-author-inner">
    <picture><source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp"><img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" width="56" height="56" loading="lazy" decoding="async"></picture>
    <div class="ipmi-author-text">{txt}</div>
  </div>
</div>
"""


REVIEWS = [
    ("Great for this US expat with ‘vacation’ property awaiting my relocation",
     "I was drawn to Adler &amp; Rochefort because they were comfortable with English communication … and worked with second/vacation home owners. It was reassuring that I was asked for specific information about the property and my needs, with follow-up, before a quote was obtained. … Coverage is a clear match for my needs.",
     "Jim Gilkeson · US · 14.09.2026"),
    ("Hugo provided excellent detailed and…",
     "Hugo provided excellent detailed and thorough service in the transition from our old policy to a new and better policy that served our needs. We highly recommend him and Adler &amp; Rochefort for their professionalism and attentiveness.",
     "J M · US · 09.09.2026"),
    ("Amazing service - highly recommend",
     "Amazing service. Hugo was hugely knowledgeable and gave us quotes incredibly fast. He was always at the end of the phone answering questions and was very diligent in getting the right insurance for us. Highly recommend.",
     "Georgie · GB · 17.09.2026"),
]

TP = "https://www.trustpilot.com/review/adlerrochefort.com"


def reviews(lang):
    head = {
        "en": ("What our clients say", f'<a href="{TP}" rel="noopener" target="_blank">TrustScore 4.3/5 on Trustpilot</a> · 8 reviews, October 2026. Reviews of our service across all lines of insurance, as published.'),
        "es": ("Lo que dicen nuestros clientes", f'<a href="{TP}" rel="noopener" target="_blank">TrustScore 4,3/5 en Trustpilot</a> · 8 reseñas, octubre de 2026. Reseñas sobre nuestro servicio en todos los seguros, en el idioma original (inglés).'),
        "de": ("Was unsere Kunden sagen", f'<a href="{TP}" rel="noopener" target="_blank">TrustScore 4,3/5 auf Trustpilot</a> · 8 Bewertungen, Oktober 2026. Bewertungen unseres Service über alle Sparten, im Original (Englisch).'),
    }[lang]
    cards = "\n".join(
        f'      <figure class="ipmi-review" lang="en"><div class="stars" aria-label="5/5">★★★★★</div><blockquote><p><strong>{t}</strong></p><p>{b}</p></blockquote><figcaption>{c}</figcaption></figure>'
        for t, b, c in REVIEWS)
    return f"""
<!-- IPMI-REVIEWS -->
<section class="lp-section" id="reviews">
  <h2>{head[0]}</h2>
  <p class="ipmi-score">{head[1]}</p>
  <div class="ipmi-reviews-grid">
{cards}
  </div>
</section>
"""


# Real, anonymised quotes obtained for clients in September–October 2026.
# All with no deductible; all indicative before medical underwriting.
PRICES = {
    "en": {
        "h2": "What international health insurance costs: real quotes",
        "lead": "The premium depends on age, area of cover, plan level, options and medical underwriting, so there is no useful average. These are real quotes we obtained for clients in September and October 2026, anonymised. All have no deductible and are indicative until the insurer has underwritten the application.",
        "cols": ("Profile", "Area of cover", "Insurer", "Annual premium, entry to top level"),
        "rows": [
            ("One person, 64, living in Portugal", "Europe", "Allianz Care", "€5,241 (Base, hospital only) to €14,027 (Signature, with out-patient)"),
            ("One person, 43, living in Portugal", "Worldwide", "Allianz Care", "€8,818 (Base) to €16,641 (Signature), with out-patient and dental"),
            ("Couple, 55 and 59, living in Portugal", "Worldwide excl. USA", "Cigna Global", "€15,951 (Silver) to €31,904 (Platinum), all modules, monthly payment"),
            ("Family of five: two adults around 40, three children under 8", "Worldwide excl. USA", "Cigna Global", "€19,769 (Silver) to €39,634 (Platinum), all modules"),
            ("US couple, 67 and 68, moving to Portugal", "Worldwide excl. USA", "Cigna Global", "US$24,597 (Silver) to US$47,963 (Platinum)"),
        ],
        "levers": "<strong>How to bring the premium down.</strong> Leave the United States out of the area of cover, which is the single biggest saving. Add a deductible: Cigna Global offers hospital deductibles from €275 to €7,400 and out-patient deductibles from €110 to €1,100. Choose hospital-only cover, or a Europe-only area with Allianz Care. Pay annually: Cigna Global gives 10% off compared with monthly payment.",
        "note": "Examples only. Your premium is set by the insurer on your own details, after medical underwriting, and is confirmed in writing before you commit.",
    },
    "es": {
        "h2": "Cuánto cuesta un seguro médico internacional: cotizaciones reales",
        "lead": "La prima depende de la edad, la zona de cobertura, el nivel, las opciones y la suscripción médica, así que no hay un promedio útil. Estas son cotizaciones reales que obtuvimos para clientes en septiembre y octubre de 2026, anonimizadas. Todas sin deducible e indicativas hasta que la aseguradora evalúa la solicitud.",
        "cols": ("Perfil", "Zona de cobertura", "Aseguradora", "Prima anual, del nivel básico al superior"),
        "rows": [
            ("Una persona de 64 años que vive en Portugal", "Europa", "Allianz Care", "5.241 € (Base, solo hospitalización) a 14.027 € (Signature, con consultas externas)"),
            ("Una persona de 43 años que vive en Portugal", "Mundial", "Allianz Care", "8.818 € (Base) a 16.641 € (Signature), con consultas externas y dental"),
            ("Pareja de 55 y 59 años que vive en Portugal", "Mundial sin EE. UU.", "Cigna Global", "15.951 € (Silver) a 31.904 € (Platinum), todos los módulos, pago mensual"),
            ("Familia de cinco: dos adultos de unos 40 años y tres niños menores de 8", "Mundial sin EE. UU.", "Cigna Global", "19.769 € (Silver) a 39.634 € (Platinum), todos los módulos"),
            ("Pareja estadounidense de 67 y 68 años que se muda a Portugal", "Mundial sin EE. UU.", "Cigna Global", "24.597 US$ (Silver) a 47.963 US$ (Platinum)"),
        ],
        "levers": "<strong>Cómo bajar la prima.</strong> Deje Estados Unidos fuera de la zona de cobertura: es el mayor ahorro. Añada un deducible: Cigna Global ofrece deducibles hospitalarios de 275 € a 7.400 € y de consultas externas de 110 € a 1.100 €. Elija solo hospitalización, o la zona Europa con Allianz Care. Pague anualmente: Cigna Global descuenta un 10 % frente al pago mensual.",
        "note": "Solo ejemplos. Su prima la fija la aseguradora con sus datos, tras la suscripción médica, y se confirma por escrito antes de contratar.",
    },
    "de": {
        "h2": "Was eine internationale Krankenversicherung kostet: echte Angebote",
        "lead": "Der Beitrag hängt von Alter, Geltungsbereich, Tarifstufe, Bausteinen und Gesundheitsprüfung ab — einen sinnvollen Durchschnitt gibt es nicht. Dies sind echte Angebote, die wir im September und Oktober 2026 für Kunden eingeholt haben, anonymisiert. Alle ohne Selbstbehalt und unverbindlich bis zur Gesundheitsprüfung durch den Versicherer.",
        "cols": ("Profil", "Geltungsbereich", "Versicherer", "Jahresbeitrag, vom Einstiegs- bis zum Top-Tarif"),
        "rows": [
            ("Eine Person, 64, wohnhaft in Portugal", "Europa", "Allianz Care", "5.241 € (Base, nur stationär) bis 14.027 € (Signature, mit ambulant)"),
            ("Eine Person, 43, wohnhaft in Portugal", "Weltweit", "Allianz Care", "8.818 € (Base) bis 16.641 € (Signature), mit ambulant und Zahn"),
            ("Paar, 55 und 59, wohnhaft in Portugal", "Weltweit ohne USA", "Cigna Global", "15.951 € (Silver) bis 31.904 € (Platinum), alle Bausteine, monatliche Zahlung"),
            ("Familie mit fünf Personen: zwei Erwachsene um 40, drei Kinder unter 8", "Weltweit ohne USA", "Cigna Global", "19.769 € (Silver) bis 39.634 € (Platinum), alle Bausteine"),
            ("US-Paar, 67 und 68, Umzug nach Portugal", "Weltweit ohne USA", "Cigna Global", "24.597 US$ (Silver) bis 47.963 US$ (Platinum)"),
        ],
        "levers": "<strong>So senken Sie den Beitrag.</strong> Die USA aus dem Geltungsbereich lassen — die größte Einzelersparnis. Einen Selbstbehalt wählen: Cigna Global bietet stationäre Selbstbehalte von 275 € bis 7.400 € und ambulante von 110 € bis 1.100 €. Nur stationären Schutz oder bei Allianz Care den Geltungsbereich Europa wählen. Jährlich zahlen: Cigna Global gewährt 10 % gegenüber monatlicher Zahlung.",
        "note": "Nur Beispiele. Ihren Beitrag legt der Versicherer anhand Ihrer Daten nach der Gesundheitsprüfung fest; er wird Ihnen vor Abschluss schriftlich bestätigt.",
    },
}


def prices(lang):
    p = PRICES[lang]
    rows = "\n".join(f"          <tr><td>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>" for a, b, c, d in p["rows"])
    c = p["cols"]
    return f"""
<!-- IPMI-PRICES -->
<section class="lp-section" style="background:var(--cream2);max-width:none;" id="prices">
  <div style="max-width:1100px;margin:0 auto;">
    <h2>{p['h2']}</h2>
    <p>{p['lead']}</p>
    <div class="ar-table-wrap">
      <table class="ar-table">
        <thead><tr><th>{c[0]}</th><th>{c[1]}</th><th>{c[2]}</th><th>{c[3]}</th></tr></thead>
        <tbody>
{rows}
        </tbody>
      </table>
    </div>
    <p>{p['levers']}</p>
    <p class="ipmi-note">{p['note']}</p>
  </div>
</section>
"""


def destinations(lang, pages):
    """pages: list of (url, title, blurb) for this language."""
    h2, lead = {
        "en": ("Destinations and profiles", "Guides for the situations we quote most often."),
        "es": ("Destinos y perfiles", "Guías para las situaciones que más cotizamos."),
        "de": ("Zielländer und Profile", "Ratgeber für die Situationen, die wir am häufigsten anbieten."),
    }[lang]
    cards = "\n".join(f'    <a class="ipmi-dest" href="{u}"><strong>{t}</strong><span>{b}</span></a>' for u, t, b in pages)
    return f"""
<!-- IPMI-DESTINATIONS -->
<section class="lp-section" id="destinations">
  <h2>{h2}</h2>
  <p>{lead}</p>
  <div class="ipmi-dest-grid">
{cards}
  </div>
</section>
"""


def person_ld():
    return {
        "@type": "Person",
        "@id": "https://adlerrochefort.com/#hugo-goncalves",
        "name": "Hugo Gonçalves",
        "jobTitle": "Founder & Risk Management Specialist",
        "worksFor": {"@id": "https://adlerrochefort.com/#organization"},
        "image": "https://adlerrochefort.com/images/hugo-goncalves-640.jpg",
        "alumniOf": {"@type": "CollegeOrUniversity", "name": "University of Hertfordshire"},
        "knowsAbout": ["International private medical insurance", "Expatriate health insurance", "Allianz Care", "Cigna Global"],
    }
