#!/usr/bin/env python3
"""Entry points to the global international health insurance (IPMI) hubs.

  /en/international-health-insurance/
  /es/seguro-medico-internacional/
  /de/internationale-krankenversicherung/

1. Navigation: adds the hub to the "Private Clients" menu (desktop panel and
   mobile accordion) of every EN, ES and DE page that carries that menu,
   right after the Family offices entry.
2. Homepages: adds a promotional band right after the hero of /, /en/, /es/
   and /de/ (the Portuguese homepage points to the EN hub, with links to ES
   and DE, because there is no Portuguese hub: Portuguese nationals living
   in Portugal are not eligible for international plans).
3. EN and DE homepages: adds the hub as a fifth row of the "cover for the
   family itself" list.

Idempotent: every insertion is skipped when the hub link is already there.
Run from the repository root: python3 scripts/add-ipmi-entry-points.py
"""
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent.parent / "public"

HUB = {
    "en": "/en/international-health-insurance/",
    "es": "/es/seguro-medico-internacional/",
    "de": "/de/internationale-krankenversicherung/",
}

NAV = {
    "en": {
        "desktop_anchor": '<a href="/en/family-office-insurance/" role="menuitem"><span class="nav-panel-flag">🏛️</span> Family offices</a>',
        "mobile_anchor": '<a href="/en/family-office-insurance/">🏛️ Family offices</a>',
        "label": "International health insurance",
    },
    "es": {
        "desktop_anchor": '<a href="/es/seguro-family-office/" role="menuitem"><span class="nav-panel-flag">🏛️</span> Family offices</a>',
        "mobile_anchor": '<a href="/es/seguro-family-office/">🏛️ Family offices</a>',
        "label": "Seguro médico internacional",
    },
    "de": {
        "desktop_anchor": '<a href="/de/family-office-versicherung/" role="menuitem"><span class="nav-panel-flag">🏛️</span> Family Offices</a>',
        "mobile_anchor": '<a href="/de/family-office-versicherung/">🏛️ Family Offices</a>',
        "label": "Internationale Krankenversicherung",
    },
}

BAND_CSS = """<style>
.ipmi-band{padding:0 16px;margin:32px auto 8px;max-width:1248px}
.ipmi-band-inner{background:#292929;color:#fff;border-radius:24px;padding:36px 40px;display:flex;gap:32px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.ipmi-band-text{flex:1 1 460px;min-width:0}
.ipmi-band-eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#FF6300;margin-bottom:10px}
.ipmi-band h2{font-size:28px;line-height:1.2;font-weight:500;color:#fff;margin:0 0 10px}
.ipmi-band p{font-size:15px;line-height:1.65;color:rgba(255,255,255,.78);margin:0}
.ipmi-band-actions{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.ipmi-band-btn{display:inline-block;background:#FF6300;color:#1C1C1C;font-weight:700;font-size:14px;text-decoration:none;padding:14px 26px;border-radius:999px;white-space:nowrap}
.ipmi-band-btn:hover{background:#E05600}
.ipmi-band-langs{font-size:13px;color:rgba(255,255,255,.6)}
.ipmi-band-langs a{color:#fff;text-decoration:underline;text-underline-offset:3px}
@media(max-width:760px){.ipmi-band-inner{padding:28px 24px}.ipmi-band h2{font-size:23px}.ipmi-band-btn{white-space:normal}}
</style>"""

BAND = {
    "pt": {
        "aria": "Seguro de saúde internacional",
        "eyebrow": "Novo · Seguro de saúde internacional",
        "title": "Vai viver para fora do seu país? Seguro de saúde em qualquer parte do mundo.",
        "text": "Para expatriados, nómadas digitais, reformados e famílias que vivem fora do país de nacionalidade: Allianz Care e Cigna Global comparados por escrito, num dia útil, sem custos.",
        "cta": "Pedir proposta (página em inglês)",
        "href": HUB["en"],
        "langs": 'Também em <a href="/es/seguro-medico-internacional/">español</a> e <a href="/de/internationale-krankenversicherung/">Deutsch</a>',
    },
    "en": {
        "aria": "International health insurance",
        "eyebrow": "New · International health insurance",
        "title": "Living abroad, anywhere in the world? Health cover that moves with you.",
        "text": "For expats, remote workers, retirees and families living outside their country of nationality: Allianz Care and Cigna Global compared in writing within one working day, at no cost to you.",
        "cta": "Compare Allianz Care and Cigna Global",
        "href": HUB["en"],
        "langs": 'Also in <a href="/es/seguro-medico-internacional/">Español</a> and <a href="/de/internationale-krankenversicherung/">Deutsch</a>',
    },
    "es": {
        "aria": "Seguro médico internacional",
        "eyebrow": "Nuevo · Seguro médico internacional",
        "title": "¿Vive o va a vivir fuera de su país? Un seguro médico que se muda con usted.",
        "text": "Para expatriados, profesionales trasladados, nómadas digitales, jubilados y familias que viven fuera de su país de nacionalidad: Allianz Care y Cigna Global comparados por escrito en un día hábil, sin coste.",
        "cta": "Comparar Allianz Care y Cigna Global",
        "href": HUB["es"],
        "langs": 'También en <a href="/en/international-health-insurance/">English</a> y <a href="/de/internationale-krankenversicherung/">Deutsch</a>',
    },
    "de": {
        "aria": "Internationale Krankenversicherung",
        "eyebrow": "Neu · Internationale Krankenversicherung",
        "title": "Sie leben im Ausland, irgendwo auf der Welt? Krankenversicherung, die mitzieht.",
        "text": "Für Auswanderer, Expats, digitale Nomaden, Ruheständler und Familien außerhalb ihres Heimatlandes: Allianz Care und Cigna Global schriftlich verglichen, innerhalb eines Werktags, für Sie kostenlos.",
        "cta": "Allianz Care und Cigna Global vergleichen",
        "href": HUB["de"],
        "langs": 'Auch auf <a href="/en/international-health-insurance/">English</a> und <a href="/es/seguro-medico-internacional/">Español</a>',
    },
}

HOMEPAGES = {"pt": "index.html", "en": "en/index.html", "es": "es/index.html", "de": "de/index.html"}

SPECIALIST = {
    "en": ("en/index.html", "International health insurance",
           "Expat health cover that follows the family to any country — Allianz Care and Cigna Global, compared in writing."),
    "de": ("de/index.html", "Internationale Krankenversicherung",
           "Krankenversicherung für Expats, die mit der Familie in jedes Land zieht — Allianz Care und Cigna Global, schriftlich verglichen."),
}


def band_html(lang):
    b = BAND[lang]
    return f"""
<!-- IPMI-BAND -->
<section class="ipmi-band" aria-label="{b['aria']}">
{BAND_CSS}
  <div class="ipmi-band-inner">
    <div class="ipmi-band-text">
      <div class="ipmi-band-eyebrow">{b['eyebrow']}</div>
      <h2>{b['title']}</h2>
      <p>{b['text']}</p>
    </div>
    <div class="ipmi-band-actions">
      <a class="ipmi-band-btn" href="{b['href']}">{b['cta']} →</a>
      <div class="ipmi-band-langs">{b['langs']}</div>
    </div>
  </div>
</section>
"""


def add_nav():
    counts = {}
    for lang, cfg in NAV.items():
        hub = HUB[lang]
        desktop = f'\n        <a href="{hub}" role="menuitem"><span class="nav-panel-flag">🌍</span> {cfg["label"]}</a>'
        mobile = f'\n      <a href="{hub}">🌍 {cfg["label"]}</a>'
        n = 0
        for f in sorted((PUBLIC / lang).rglob("index.html")):
            s = f.read_text(encoding="utf-8")
            if f'<a href="{hub}" role="menuitem">' in s:
                continue
            new = s
            if cfg["desktop_anchor"] in new:
                new = new.replace(cfg["desktop_anchor"], cfg["desktop_anchor"] + desktop, 1)
            if cfg["mobile_anchor"] in new:
                new = new.replace(cfg["mobile_anchor"], cfg["mobile_anchor"] + mobile, 1)
            if new != s:
                f.write_text(new, encoding="utf-8")
                n += 1
        counts[lang] = n
    return counts


def add_bands():
    done = []
    for lang, rel in HOMEPAGES.items():
        f = PUBLIC / rel
        s = f.read_text(encoding="utf-8")
        if "<!-- IPMI-BAND -->" in s:
            continue
        start = s.index('<section class="hero"')
        end = s.index("</section>", start) + len("</section>")
        s = s[:end] + "\n" + band_html(lang) + s[end:]
        f.write_text(s, encoding="utf-8")
        done.append(rel)
    return done


def add_specialist_rows():
    done = []
    for lang, (rel, name, desc) in SPECIALIST.items():
        f = PUBLIC / rel
        s = f.read_text(encoding="utf-8")
        if f'class="specialist-row" href="{HUB[lang]}"' in s:
            continue
        start = s.index('<div class="specialist-right')
        end = s.index("\n  </div>\n</section>", start)
        explore = s[start:end].rsplit('<span class="specialist-arrow" aria-hidden="true">', 1)[1].split("</span>", 1)[0]
        row = f"""
    <a class="specialist-row" href="{HUB[lang]}">
      <span class="specialist-num" aria-hidden="true">05</span>
      <span class="specialist-body">
        <span class="specialist-name">{name}</span>
        <span class="specialist-desc">{desc}</span>
      </span>
      <span class="specialist-arrow" aria-hidden="true">{explore}</span>
    </a>"""
        s = s[:end] + row + s[end:]
        f.write_text(s, encoding="utf-8")
        done.append(rel)
    return done


if __name__ == "__main__":
    print("nav pages updated:", add_nav())
    print("homepage bands:", add_bands())
    print("specialist rows:", add_specialist_rows())
