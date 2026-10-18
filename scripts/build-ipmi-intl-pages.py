#!/usr/bin/env python3
"""International health insurance (IPMI) in every language of the site.

Builds, for the twelve language trees:
  * an Allianz Care page and a Cigna Global page under each language's IPMI hub;
  * the IPMI hub itself in the nine languages that did not have one
    (PT, NL, FR, IT, PL, SE, DK, IL, ZH). EN, DE and ES keep their hubs and only
    gain links to the two insurer pages.

Every page carries the short IPMI form (name, date of birth, nationality,
country where the client will live, email; US state for US nationals), with a
form-name per language handled by netlify/functions/submission-created.mjs.

Chrome (header, navigation, footer, cookie banner, language selector) comes from
an existing page in the same language (TEMPLATES); the <main> content, head
metadata, structured data, breadcrumb and hreflang are generated here. Content
lives in scripts/ipmi_intl/<lang>.py — only facts already published on the
site or stated by the owner (see scripts/ipmi_intl/README.md).

Idempotent. Run from the repository root:
    python3 scripts/build-ipmi-intl-pages.py
then node scripts/generate-sitemap.mjs
"""
import html
import importlib
import json
import re
import sys
import unicodedata
from pathlib import Path

from babel import Locale

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BASE = "https://adlerrochefort.com"
DATE = "2026-10-18"
sys.path.insert(0, str(ROOT / "scripts"))

# lang: (hreflang, babel locale, hub path, template page, form-name, existing hub?)
LANGS = {
    "pt": ("pt-PT", "pt_PT", "/seguros/saude-internacional/", "/seguros/saude/", "pt-international-health-quote", False),
    "en": ("en-GB", "en", "/en/international-health-insurance/", "/en/international-health-insurance/us-citizens-abroad/", "international-health-quote", True),
    "de": ("de", "de", "/de/internationale-krankenversicherung/", "/de/internationale-krankenversicherung/rentner-im-ausland/", "de-international-health-quote", True),
    "es": ("es", "es", "/es/seguro-medico-internacional/", "/es/seguro-medico-internacional/nomadas-digitales/", "es-international-health-quote", True),
    "nl": ("nl", "nl", "/nl/internationale-zorgverzekering/", "/nl/allianz-care-vs-cigna-global-portugal-spanje/", "nl-international-health-quote", False),
    "fr": ("fr", "fr", "/fr/assurance-sante-internationale/", "/fr/assurance-family-office/", "fr-international-health-quote", False),
    "it": ("it-IT", "it", "/it/assicurazione-medica-internazionale/", "/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/", "it-international-health-quote", False),
    "pl": ("pl-PL", "pl", "/pl/miedzynarodowe-ubezpieczenie-zdrowotne/", "/pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/", "pl-international-health-quote", False),
    "se": ("sv-SE", "sv", "/se/internationell-sjukvardsforsakring/", "/se/allianz-care-vs-cigna-global-sjukvardsforsakring/", "se-international-health-quote", False),
    "dk": ("da-DK", "da", "/dk/international-sundhedsforsikring/", "/dk/allianz-care-vs-cigna-global-sundhedsforsikring/", "dk-international-health-quote", False),
    "il": ("he-IL", "he", "/il/international-health-insurance/", "/il/allianz-care-vs-cigna-global/", "il-international-health-quote", False),
    "zh": ("zh-CN", "zh_Hans", "/zh/international-health-insurance/", "/zh/allianz-care-vs-cigna-global/", "zh-international-health-quote", False),
}
ORDER = ["pt", "en", "de", "es", "nl", "fr", "it", "pl", "se", "dk", "il", "zh"]
KINDS = {"hub": "", "allianz": "allianz-care/", "cigna": "cigna-global/"}
OG_LOCALE = {"pt": "pt_PT", "en": "en_GB", "de": "de_DE", "es": "es_ES", "nl": "nl_NL", "fr": "fr_FR", "it": "it_IT",
             "pl": "pl_PL", "se": "sv_SE", "dk": "da_DK", "il": "he_IL", "zh": "zh_CN"}
HOME = {"pt": "/", "en": "/en/", "de": "/de/", "es": "/es/", "nl": "/nl/", "fr": "/fr/", "it": "/it/", "pl": "/pl/",
        "se": "/se/", "dk": "/dk/", "il": "/il/", "zh": "/zh/"}

# English option values (what the notification e-mail shows) -> ISO region code.
ALIASES = {
    "Antigua and Barbuda": "AG", "Bonaire, Sint Eustatius and Saba": "BQ", "Bosnia and Herzegovina": "BA",
    "Brunei Darussalam": "BN", "Cabo Verde": "CV", "Congo": "CG", "Congo, Democratic Republic of the": "CD",
    "Côte d'Ivoire": "CI", "Heard Island and McDonald Islands": "HM", "Holy See": "VA", "Hong Kong": "HK",
    "Korea, North": "KP", "Korea, South": "KR", "Macao": "MO", "Myanmar": "MM", "Palestine, State of": "PS",
    "Pitcairn": "PN", "Russian Federation": "RU", "Saint Barthélemy": "BL",
    "Saint Helena, Ascension and Tristan da Cunha": "SH", "Saint Kitts and Nevis": "KN", "Saint Lucia": "LC",
    "Saint Martin (French part)": "MF", "Saint Pierre and Miquelon": "PM", "Saint Vincent and the Grenadines": "VC",
    "Sao Tome and Principe": "ST", "Sint Maarten (Dutch part)": "SX",
    "South Georgia and the South Sandwich Islands": "GS", "Svalbard and Jan Mayen": "SJ",
    "Syrian Arab Republic": "SY", "Trinidad and Tobago": "TT", "Turks and Caicos Islands": "TC",
    "United States Minor Outlying Islands": "UM", "United States of America": "US", "Viet Nam": "VN",
    "Virgin Islands (British)": "VG", "Virgin Islands (U.S.)": "VI", "Wallis and Futuna": "WF",
}

MARK = "<!-- ar-ipmi-intl -->"

CSS = """<style id="ar-ipmi-intl-style">
.ipmi-x{--ink:#292929;--muted:#5b5b5b;--line:#EBE9E8;--cream:#FAF9F7;color:var(--ink);font-family:Inter,system-ui,sans-serif}
.ipmi-x .ipmi-wrap{max-width:860px;margin:0 auto;padding:0 20px}
.ipmi-x .ipmi-hero{padding:48px 0 28px;text-align:start}
.ipmi-x .ipmi-eyebrow{display:inline-block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.ipmi-x h1{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(32px,5vw,46px);line-height:1.12;margin:0 0 16px}
.ipmi-x .ipmi-lead{font-size:18px;line-height:1.65;margin:0 0 14px;color:#333}
.ipmi-x .ipmi-meta{font-size:13px;color:var(--muted);margin:0 0 20px}
.ipmi-x .ipmi-btn{display:inline-block;background:var(--ink);color:#fff;border-radius:999px;padding:12px 24px;font-weight:600;text-decoration:none}
.ipmi-x .ipmi-author{display:flex;gap:14px;align-items:center;border:1px solid var(--line);border-radius:16px;padding:14px 18px;margin:8px 0 24px;background:#fff}
.ipmi-x .ipmi-author img{width:48px;height:48px;border-radius:50%;object-fit:cover;flex:0 0 48px}
.ipmi-x .ipmi-author p{font-size:13px;line-height:1.6;margin:0;color:#333}
.ipmi-x .ipmi-note{background:var(--cream);border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin:0 0 24px}
.ipmi-x .ipmi-note h2{font-size:18px;margin:0 0 8px;font-family:Inter,system-ui,sans-serif;font-weight:600}
.ipmi-x .ipmi-note p{margin:0 0 6px;font-size:15px;line-height:1.6}
.ipmi-x .ipmi-facts{background:var(--cream);border:1px solid var(--line);border-radius:16px;padding:20px 24px;margin:0 0 28px}
.ipmi-x .ipmi-facts h2{font-size:20px;margin:0 0 10px;font-family:Inter,system-ui,sans-serif;font-weight:600}
.ipmi-x .ipmi-facts ul{margin:0;padding-inline-start:20px}
.ipmi-x .ipmi-facts li{margin:0 0 6px;line-height:1.55;font-size:15.5px}
.ipmi-x .ipmi-sec{padding:20px 0;border-top:1px solid var(--line)}
.ipmi-x .ipmi-sec h2,.ipmi-x .ipmi-faq h2,.ipmi-x .ipmi-related h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(26px,3.6vw,32px);line-height:1.2;margin:8px 0 14px}
.ipmi-x .ipmi-sec p,.ipmi-x .ipmi-sec li{font-size:16.5px;line-height:1.7}
.ipmi-x .ipmi-sec ul,.ipmi-x .ipmi-sec ol{padding-inline-start:22px}
.ipmi-x .ipmi-sec li{margin-bottom:8px}
.ipmi-x a{color:var(--ink);text-underline-offset:3px}
.ipmi-x .ipmi-btn{color:#fff}
.ipmi-x .ipmi-table{overflow-x:auto;margin:16px 0}
.ipmi-x table{width:100%;border-collapse:collapse;font-size:15px;line-height:1.5}
.ipmi-x th,.ipmi-x td{text-align:start;vertical-align:top;padding:10px 12px;border-bottom:1px solid rgba(0,0,0,.1)}
.ipmi-x thead th{font-weight:700;border-bottom:2px solid rgba(0,0,0,.25)}
.ipmi-x tbody td:first-child{font-weight:600}
.ipmi-x .ipmi-small{font-size:13px;color:var(--muted)}
.ipmi-x .ipmi-faq{padding:20px 0;border-top:1px solid var(--line)}
.ipmi-x .ipmi-faq details{border-bottom:1px solid var(--line);padding:12px 0}
.ipmi-x .ipmi-faq summary{cursor:pointer;font-weight:600;font-size:16.5px}
.ipmi-x .ipmi-faq details p{margin:10px 0 0;line-height:1.65}
.ipmi-x .ipmi-related{padding:20px 0 40px;border-top:1px solid var(--line)}
.ipmi-x .ipmi-related ul{padding-inline-start:20px}
.ipmi-x .ipmi-related li{margin-bottom:8px}
.ipmi-x .ipmi-formbox{margin:8px 0 32px}
.ipmi-bc{max-width:860px;margin:16px auto 0;padding:0 20px;font-size:13px;color:#5b5b5b}
.ipmi-bc a{color:inherit}
.ipmi-bc span{margin:0 6px}
.ipmi-x .ar-cta-form-wrap{text-align:start}
.ipmi-x .ar-cta-form-wrap h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500}
</style>"""

FORM_JS = """<script id="ar-ipmi-intl-js">
  (function () {
    var nat = document.getElementById('ihq-nationality');
    var dest = document.getElementById('ihq-country');
    var stateWrap = document.getElementById('ihq-state-wrap');
    var state = document.getElementById('ihq-state');
    var usNote = document.getElementById('ihq-us-note');
    var same = document.getElementById('ihq-same-country');
    if (!nat || !dest) return;
    var US = "United States of America";
    function update() {
      var isUS = nat.value === US;
      stateWrap.hidden = !isUS;
      usNote.hidden = !isUS;
      state.required = isUS;
      if (!isUS) state.value = '';
      same.hidden = !(nat.value && dest.value && nat.value === dest.value);
    }
    nat.addEventListener('change', update);
    dest.addEventListener('change', update);
    var dob = document.getElementById('ihq-dob');
    if (dob) dob.max = new Date().toISOString().slice(0, 10);
    update();
  })();
</script>"""


def esc(s):
    return html.escape(s, quote=True)


def strip(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s))).strip()


def country_values():
    src = (PUBLIC / "en/international-health-insurance/index.html").read_text(encoding="utf-8")
    i = src.index('id="ihq-nationality"')
    vals = [html.unescape(v) for v in re.findall(r'<option value="([^"]+)"', src[i:src.index("</select>", i)])]
    k = src.index('id="ihq-state"')
    states = [html.unescape(v) for v in re.findall(r'<option value="([^"]+)"', src[k:src.index("</select>", k)])]
    en = {v.lower(): c for c, v in Locale("en").territories.items() if len(c) == 2}
    codes = {}
    for v in vals:
        codes[v] = ALIASES.get(v) or en[v.lower()]
    return codes, states


COUNTRIES, US_STATES = country_values()


def sort_key(s):
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower() or s


def options(loc, placeholder):
    names = Locale.parse(loc).territories
    items = sorted(((names.get(code, v), v) for v, code in COUNTRIES.items()), key=lambda x: sort_key(x[0]))
    out = [f'<option value="">{esc(placeholder)}</option>']
    out += [f'<option value="{esc(v)}">{esc(label)}</option>' for label, v in items]
    return "\n        ".join(out)


def path_of(lang, kind):
    return LANGS[lang][2] + KINDS[kind]


def fill(s, lang):
    return s.replace("{HUB}", LANGS[lang][2])


def page_data(mod, kind):
    return {"hub": mod.HUB, "allianz": mod.ALLIANZ, "cigna": mod.CIGNA}[kind]


def form_html(lang, mod, kind, page):
    ui = mod.UI["form"]
    path = path_of(lang, kind)
    fname = LANGS[lang][4]
    loc = LANGS[lang][1]
    utm = "".join(f'<input type="hidden" name="{n}" value="">' for n in ("utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"))
    states = "\n        ".join([f'<option value="">{esc(ui["state_ph"])}</option>'] + [f'<option value="{esc(s)}">{esc(s)}</option>' for s in US_STATES])
    src = {"hub": "hub:ipmi", "allianz": "page:allianz-care", "cigna": "page:cigna-global"}[kind]
    trust = "\n    ".join(f'<span class="ar-trust-item">{t}</span>' for t in ui["trust"])
    return f"""<div class="ar-cv ar-cta-form-wrap" id="ipmi-pedido">
  <h2>{page['form_h2']}</h2>
  <p class="ar-cta-form-lead">{page['form_lead']}</p>
  <form class="ar-cta-form" name="{fname}" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-endpoint="{path}" data-form-label="{fname.replace('-', '_')}">
    <input type="hidden" name="form-name" value="{fname}">{utm}
    <input type="hidden" name="source_url" value="">
    <input type="hidden" name="source" value="{src}">
    <input type="hidden" name="language" value="{lang}">
    <input type="hidden" name="product_interest" value="International health insurance (IPMI)">
    <p style="display:none"><label>{ui['hp']} <input name="bot-field"></label></p>
    <div class="ar-row">
      <div class="ar-field"><label for="ihq-name">{ui['name']}</label><input id="ihq-name" type="text" name="name" autocomplete="name" placeholder="{esc(ui['name_ph'])}" required></div>
      <div class="ar-field"><label for="ihq-dob">{ui['dob']}</label><input id="ihq-dob" type="date" name="date_of_birth" autocomplete="bday" min="1920-01-01" required></div>
    </div>
    <div class="ar-row">
      <div class="ar-field"><label for="ihq-nationality">{ui['nat']}</label><select id="ihq-nationality" name="nationality" required>
        {options(loc, ui['nat_ph'])}
      </select></div>
      <div class="ar-field"><label for="ihq-country">{ui['country']}</label><select id="ihq-country" name="destination_country" required>
        {options(loc, ui['country_ph'])}
      </select></div>
    </div>
    <div class="ar-field" id="ihq-state-wrap" hidden><label for="ihq-state">{ui['state']}</label><select id="ihq-state" name="us_state">
        {states}
      </select></div>
    <p class="ar-form-smallprint" id="ihq-us-note" hidden>{ui['us_note']}</p>
    <p class="ar-form-smallprint" id="ihq-same-country" hidden>{ui['same_note']}</p>
    <div class="ar-row">
      <div class="ar-field"><label for="ihq-email">{ui['email']}</label><input id="ihq-email" type="email" name="email" autocomplete="email" placeholder="{esc(ui['email_ph'])}" required></div>
      <div class="ar-field"><label for="ihq-phone">{ui['phone']}</label><input id="ihq-phone" type="tel" name="phone" autocomplete="tel" placeholder="{esc(ui['phone_ph'])}"></div>
    </div>
    <button type="submit" class="ar-btn ar-btn-primary">{ui['submit']}</button>
    <p class="ar-form-smallprint">{ui['small']}</p>
  </form>
  <div class="ar-trust-strip">
    {trust}
  </div>
  <div class="ar-cta-form-success">
    <div class="ar-cta-form-success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
    <h3>{ui['success_h']}</h3>
    <p>{ui['success_p']}</p>
  </div>
</div>"""


def crumbs(lang, mod, kind, page):
    ui = mod.UI
    items = [(ui["home"], HOME[lang]), (ui["hub"], LANGS[lang][2])]
    if kind != "hub":
        items.append((page["crumb"], path_of(lang, kind)))
    return items


def breadcrumb_html(lang, mod, kind, page, template_nav=None):
    """Same markup family as the template's own breadcrumb, so its CSS applies."""
    items = crumbs(lang, mod, kind, page)
    label = "Breadcrumb"
    if template_nav:
        m = re.search(r'aria-label="([^"]+)"', template_nav)
        if m:
            label = m.group(1)
    if template_nav and "<ol>" in template_nav:
        lis = []
        for n, (text, url) in enumerate(items):
            if n == len(items) - 1:
                lis.append(f'      <li><span aria-current="page">{esc(text)}</span></li>')
            else:
                lis.append(f'      <li><a href="{url}">{esc(text)}</a></li>')
        return f'<nav class="breadcrumb" aria-label="{label}">\n    <ol>\n' + "\n".join(lis) + "\n    </ol>\n  </nav>"
    parts = [f'<a href="{url}">{esc(text)}</a>' for text, url in items]
    cls = "breadcrumb" if template_nav else "breadcrumb ipmi-bc"
    return f'<nav class="{cls}" aria-label="{label}">' + "<span>&rsaquo;</span>".join(parts) + "</nav>"


def main_html(lang, mod, kind, page):
    ui = mod.UI
    facts = "\n".join(f"      <li>{fill(f, lang)}</li>" for f in page["facts"])
    secs = []
    for n, (h2, body) in enumerate(page["sections"]):
        secs.append(f'  <section class="ipmi-sec" aria-labelledby="ipmi-s{n}">\n    <h2 id="ipmi-s{n}">{h2}</h2>\n    {fill(body, lang)}\n  </section>')
        if "ipmi-table" in body and ("€" in body or "US$" in body):
            secs[-1] = secs[-1].replace("\n  </section>", f'\n    <p class="ipmi-small">{ui["table_note"]}</p>\n  </section>')
    faq = "\n".join(f"      <details><summary>{q}</summary><p>{fill(a, lang)}</p></details>" for q, a in page["faq"])
    rel = []
    for url, label in page["related"]:
        u = fill(url, lang)
        if (PUBLIC / u.strip("/") / "index.html").exists() or u in {path_of(lang, k) for k in KINDS}:
            rel.append(f'      <li><a href="{u}">{label}</a></li>')
    lp = ""
    if ui.get("lang_policy"):
        h2, paras = ui["lang_policy"]
        lp = '  <aside class="ipmi-note" aria-labelledby="ipmi-lang">\n    <h2 id="ipmi-lang">' + h2 + "</h2>\n    " + "".join(f"<p>{p}</p>" for p in paras) + "\n  </aside>\n"
    return f"""<main id="main">
{MARK}
<article class="ipmi-x">
<div class="ipmi-wrap">
  <header class="ipmi-hero">
    <span class="ipmi-eyebrow">{page['eyebrow']}</span>
    <h1>{page['h1']}</h1>
    <p class="ipmi-lead">{page['lead']}</p>
    <p class="ipmi-meta">{ui['meta']}</p>
    <a class="ipmi-btn" href="#ipmi-pedido">{ui['cta']}</a>
  </header>
  <div class="ipmi-author"><picture><source srcset="/images/hugo-goncalves-avatar.webp" type="image/webp"><img src="/images/hugo-goncalves-avatar.jpg" alt="Hugo Gonçalves" width="48" height="48" loading="lazy" decoding="async"></picture><p>{ui['author']}</p></div>
{lp}  <section class="ipmi-facts" aria-labelledby="ipmi-facts">
    <h2 id="ipmi-facts">{ui['facts_h2']}</h2>
    <ul>
{facts}
    </ul>
  </section>
  <div class="ipmi-formbox">
{form_html(lang, mod, kind, page)}
  </div>
{chr(10).join(secs)}
  <section class="ipmi-faq" aria-labelledby="ipmi-faq">
    <h2 id="ipmi-faq">{ui['faq_h2']}</h2>
{faq}
  </section>
  <section class="ipmi-related" aria-labelledby="ipmi-rel">
    <h2 id="ipmi-rel">{ui['related_h2']}</h2>
    <ul>
{chr(10).join(rel)}
    </ul>
  </section>
</div>
</article>
</main>"""


def ld(lang, mod, kind, page):
    url = BASE + path_of(lang, kind)
    items = crumbs(lang, mod, kind, page)
    hl = LANGS[lang][0]
    graph = [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": page["title"], "description": page["desc"],
         "inLanguage": hl, "dateModified": DATE,
         "about": {"@type": "Thing", "name": "International private medical insurance (IPMI)"},
         "author": {"@type": "Person", "name": "Hugo Gonçalves", "jobTitle": "Founder & Risk Management Specialist",
                    "worksFor": {"@id": BASE + "/#organization"}},
         "publisher": {"@id": BASE + "/#organization"}},
        {"@type": "InsuranceAgency", "@id": BASE + "/#organization", "name": "Adler & Rochefort",
         "legalName": "Ownizo, Unipessoal Lda.", "url": BASE + "/", "telephone": "+351928226570",
         "email": "insurance@adlerrochefort.com", "areaServed": "Worldwide"},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": n + 1, "name": label, "item": BASE + u} for n, (label, u) in enumerate(items)]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(fill(a, lang))}} for q, a in page["faq"]]},
    ]
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=1)


def hreflang_block(kind):
    out = []
    for l in ORDER:
        out.append(f'<link rel="alternate" hreflang="{LANGS[l][0]}" href="{BASE}{path_of(l, kind)}">')
    out.append(f'<link rel="alternate" hreflang="x-default" href="{BASE}{path_of("en", kind)}">')
    return "\n".join(out) + "\n"


def set_switcher(s, kind, lang):
    """Point every language-selector entry at this page's counterpart."""
    by_hl = {LANGS[l][0]: path_of(l, kind) for l in ORDER}
    by_prefix = {LANGS[l][0].split("-")[0]: path_of(l, kind) for l in ORDER}
    me = LANGS[lang][0]

    def rep(m):
        hl = m.group(2)
        target = by_hl.get(hl) or by_prefix.get(hl.split("-")[0])
        if not target:
            return m.group(0)
        tag = m.group(0)
        tag = re.sub(r'href="[^"]*"', f'href="{target}"', tag, count=1)
        tag = tag.replace(' aria-current="true"', "")
        if (by_hl.get(hl) or by_prefix.get(hl.split("-")[0])) == path_of(lang, kind):
            tag = tag[:-1] + ' aria-current="true">'
        return tag

    s = re.sub(r'<a href="([^"]*)" lang="[^"]*"(?: dir="(?:ltr|rtl)")? hreflang="([^"]+)"[^>]*>', rep, s)
    # the <noscript> fallback list carries only lang="", no hreflang
    lang_map = {"pt": path_of("pt", kind), "en": path_of("en", kind), "de": path_of("de", kind), "es": path_of("es", kind),
                "nl": path_of("nl", kind), "fr": path_of("fr", kind), "it": path_of("it", kind), "pl": path_of("pl", kind),
                "sv": path_of("se", kind), "da": path_of("dk", kind), "he": path_of("il", kind), "zh": path_of("zh", kind)}

    def fb(block):
        def one(m):
            target = lang_map.get(m.group(2).split("-")[0])
            if not target:
                return m.group(0)
            cur = ' aria-current="true"' if target == path_of(lang, kind) else ""
            return f'<a href="{target}" lang="{m.group(2)}"{m.group(3) or ""}{cur}>'
        return re.sub(r'<a href="([^"]*)" lang="([^"]+)"( dir="(?:ltr|rtl)")?(?: aria-current="true")?>', one, block.group(0))

    s = re.sub(r'<ul class="[^"]*ar-langsel-fallback[^"]*">.*?</ul>', fb, s, flags=re.S)
    # the "home page" note marked entries that fell back to a homepage; every entry now has a counterpart
    return re.sub(r'(<li><a href="[^"]*" lang="[^"]*"(?: dir="(?:ltr|rtl)")? hreflang="[^"]+"[^>]*><span>[^<]*</span>)<span class="ar-langsel-note">[^<]*</span>', r"\1", s)


def build(lang, kind):
    mod = importlib.import_module(f"ipmi_intl.{lang}")
    page = page_data(mod, kind)
    if page is None:
        return None
    hl, loc, hub, tpl, fname, _ = LANGS[lang]
    s = (PUBLIC / tpl.strip("/") / "index.html").read_text(encoding="utf-8")
    url = BASE + path_of(lang, kind)
    title, desc = esc(page["title"]), esc(page["desc"])
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    for prop, val in (("description", desc), ("og:title", title), ("twitter:title", title),
                      ("og:description", desc), ("twitter:description", desc), ("og:url", url)):
        s = re.sub(rf'<meta (property|name)="{re.escape(prop)}" content="[^"]*">',
                   lambda m, v=val, p=prop: f'<meta {m.group(1)}="{p}" content="{v}">', s, count=1)
    s = re.sub(r'<meta name="keywords" content="[^"]*">\n?', "", s, count=1)
    s = re.sub(r'<meta property="og:type" content="[^"]*">', '<meta property="og:type" content="website">', s, count=1)
    s = re.sub(r'<meta property="article:(published|modified)_time" content="[^"]*">\n?', "", s)
    s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
    s = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?', "", s)
    s = s.replace(f'<link rel="canonical" href="{url}">', f'<link rel="canonical" href="{url}">\n' + hreflang_block(kind).rstrip("\n"), 1)
    head_end = s.index("</head>")
    head = re.sub(r'<script type="application/ld\+json">.*?</script>\n?', "", s[:head_end], flags=re.S)
    head = re.sub(r'<style id="ar-ipmi-intl-style">.*?</style>\n?', "", head, flags=re.S)
    if "/css/ar-conversion.css" not in head:
        head += '<link rel="stylesheet" href="/css/ar-conversion.css">\n'
    head += '<script type="application/ld+json">\n' + ld(lang, mod, kind, page) + "\n</script>\n" + CSS + "\n"
    s = head + s[head_end:]
    # breadcrumb: replace the template's, or add one before <main>
    tnav = re.search(r'<nav class="breadcrumb"[^>]*>.*?</nav>', s, flags=re.S)
    bc = breadcrumb_html(lang, mod, kind, page, tnav.group(0) if tnav else None)
    if tnav:
        s = re.sub(r'<nav class="breadcrumb"[^>]*>.*?</nav>', lambda m: bc, s, count=1, flags=re.S)
    i = s.index("<main")
    j = s.index("</main>") + len("</main>")
    s = s[:i] + ("" if "breadcrumb" in s[:i] else bc + "\n\n") + main_html(lang, mod, kind, page) + s[j:]
    s = set_switcher(s, kind, lang)
    # in-page anchors whose target the template had (e.g. #offerte) now go to the form
    ids = set(re.findall(r'\bid="([^"]+)"', s))
    s = re.sub(r'href="#([^"]+)"', lambda m: m.group(0) if m.group(1) in ids else 'href="#ipmi-pedido"', s)
    # scripts: the form handler and the US-state toggle
    s = re.sub(r'<script id="ar-ipmi-intl-js">.*?</script>\n?', "", s, flags=re.S)
    tail = FORM_JS + "\n"
    if "/js/ar-conversion.js" not in s:
        tail += '<script defer src="/js/ar-conversion.js"></script>\n'
    k = s.rindex("</body>")
    s = s[:k] + tail + s[k:]
    out = PUBLIC / path_of(lang, kind).strip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s, encoding="utf-8")
    return path_of(lang, kind)


HUB_LINKS = {
    "en": ("Insurer guides", "Allianz Care international health insurance", "Cigna Global international health insurance"),
    "de": ("Je Versicherer im Detail", "Allianz Care: internationale Krankenversicherung", "Cigna Global: internationale Krankenversicherung"),
    "es": ("Guías por aseguradora", "Allianz Care: seguro médico internacional", "Cigna Global: seguro médico internacional"),
}


def update_existing_hubs():
    """EN, DE and ES hubs: twelve-language hreflang, selector, links to the insurer pages."""
    done = []
    for lang, (label, a_txt, c_txt) in HUB_LINKS.items():
        f = PUBLIC / LANGS[lang][2].strip("/") / "index.html"
        s = f.read_text(encoding="utf-8")
        orig = s
        url = BASE + LANGS[lang][2]
        s = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?', "", s)
        s = re.sub(r'<link rel="canonical" href="[^"]*">', lambda m: m.group(0) + "\n" + hreflang_block("hub").rstrip("\n"), s, count=1)
        s = set_switcher(s, "hub", lang)
        if "<!-- ipmi-insurer-links -->" not in s:
            t = s.index("</table>")
            m = re.compile(r'<p class="lp-form-micro">.*?</p>', re.S).search(s, t)
            hub = LANGS[lang][2]
            block = (f'\n    <!-- ipmi-insurer-links --><p class="lp-form-micro"><strong>{label}:</strong> '
                     f'<a href="{hub}allianz-care/">{a_txt}</a> · <a href="{hub}cigna-global/">{c_txt}</a></p>')
            s = s[:m.end()] + block + s[m.end():]
        if s != orig:
            f.write_text(s, encoding="utf-8")
            done.append(LANGS[lang][2])
    return done


COMPARISONS = {
    "nl": "/nl/allianz-care-vs-cigna-global-portugal-spanje/",
    "es": "/es/allianz-care-vs-cigna-global-seguro-salud-internacional/",
    "it": "/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/",
    "pl": "/pl/allianz-care-vs-cigna-global-ubezpieczenie-zdrowotne/",
    "se": "/se/allianz-care-vs-cigna-global-sjukvardsforsakring/",
    "dk": "/dk/allianz-care-vs-cigna-global-sundhedsforsikring/",
    "il": "/il/allianz-care-vs-cigna-global/",
    "zh": "/zh/allianz-care-vs-cigna-global/",
}
XMARK = "<!-- ipmi-xlink -->"


def _labels(lang):
    mod = importlib.import_module(f"ipmi_intl.{lang}")
    hub = LANGS[lang][2]
    rel = dict((fill(u, lang), t) for u, t in (mod.ALLIANZ["related"] + mod.CIGNA["related"]))
    return [(hub, rel.get(hub, mod.UI["hub"])), (hub + "allianz-care/", rel[hub + "allianz-care/"]), (hub + "cigna-global/", rel[hub + "cigna-global/"])]


def link_from_existing():
    """Inbound links: each language's Allianz Care vs Cigna Global article, the PT and EN articles, PT health page."""
    done = []

    def write(rel, fn):
        f = PUBLIC / rel.strip("/") / "index.html"
        s = f.read_text(encoding="utf-8")
        if XMARK in s:
            return
        out = fn(s)
        if out != s:
            f.write_text(out, encoding="utf-8")
            done.append(rel)

    for lang, rel in COMPARISONS.items():
        lis = "".join(f'\n      <li><a class="text-link" href="{u}">{t}</a></li>' for u, t in _labels(lang))
        write(rel, lambda s, lis=lis: s.replace('<ul class="related">', '<ul class="related">' + XMARK + lis, 1))
    # PT article: one landing card per new page, before the existing health card
    pt = _labels("pt")
    cards = "".join(f'\n    <a href="{u}" class="related-card related-card-landing">\n      <div class="related-card-tag">Saúde internacional</div>\n      <div class="related-card-title">{t}</div>\n    </a>' for u, t in pt[1:])
    write("/blog/allianz-care-vs-cigna-global-seguro-saude-internacional/",
          lambda s: s.replace('    <a href="/seguros/saude/" class="related-card related-card-landing">', XMARK + cards.lstrip("\n") + '\n    <a href="/seguros/saude/" class="related-card related-card-landing">', 1))
    en = _labels("en")
    cards = "".join(f'\n    <a href="{u}" class="related-card">\n      <div class="related-card-tag">Insurer guide</div>\n      <div class="related-card-title">{t}</div>\n    </a>' for u, t in en[1:])
    write("/en/blog/allianz-care-vs-cigna-global-portugal-spain/",
          lambda s: s.replace('<div class="related-grid">', '<div class="related-grid">' + XMARK + cards, 1))
    de = _labels("de")
    lis = "".join(f'\n<li><a href="{u}">{t}</a></li>' for u, t in de[1:])
    write("/de/blog/allianz-care-vs-cigna-global-portugal-spanien/",
          lambda s: s.replace('<h2>Weiterlesen</h2>\n<ul class="lp-guides">', '<h2>Weiterlesen</h2>\n<ul class="lp-guides">' + XMARK + lis, 1))
    para = (XMARK + '\n  <p>Para quem tem doenças pré-existentes ou mais de 65 anos, a alternativa pode ser um '
            '<a href="/seguros/saude-internacional/">seguro de saúde internacional</a>, sujeito a análise clínica da seguradora '
            '(<a href="/seguros/saude-internacional/allianz-care/">Allianz Care</a> ou <a href="/seguros/saude-internacional/cigna-global/">Cigna Global</a>).</p>\n')
    write("/seguros/saude/", lambda s: re.sub(r'(<h2>Períodos de carência e doenças pré-existentes</h2>.*?)(</section>)', lambda m: m.group(1) + para + m.group(2), s, count=1, flags=re.S))
    return done


def main():
    langs = sys.argv[1:] or ORDER
    built = []
    for lang in langs:
        for kind in KINDS:
            p = build(lang, kind)
            if p:
                built.append(p)
    if not sys.argv[1:]:
        built += [p + " (hub updated)" for p in update_existing_hubs()]
        built += [p + " (links added)" for p in link_from_existing()]
    for p in built:
        print(p)


if __name__ == "__main__":
    main()
