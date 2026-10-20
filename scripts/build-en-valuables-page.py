#!/usr/bin/env python3
"""Builds /en/art-jewellery-watches-insurance/, the English commercial page for
art, jewellery and watches (the PT counterpart is
/private-clients/arte-joias-relogios/).

Why (October 2026): HubSpot AEO showed 0% visibility on "how do I insure art,
jewellery and watches as an expat in Portugal" while English content on the
subject existed only as blog articles. Assistants recommending a provider
cite service pages, so the topic gets one, with the insurers named.

Reuses the chrome and builder of scripts/build-hnw-pages.py (English IPMI hub
as template). Then run, in order:
  python3 scripts/add-author-box.py
  python3 scripts/add-valuables-insurers.py
Idempotent: an existing page carrying the author box is left untouched.
"""
import importlib.util
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("hnw", ROOT / "scripts/build-hnw-pages.py")
hnw = importlib.util.module_from_spec(spec)
spec.loader.exec_module(hnw)

BASE = "https://adlerrochefort.com"
DATE = "2026-10-20"
PT = "/private-clients/arte-joias-relogios/"

PAGE = {
    "lang": "en",
    "kind": "article",
    "path": "/en/art-jewellery-watches-insurance/",
    "crumbs": [("Home", "/en/"), ("Private clients", "/en/private-clients/"), ("Art, jewellery and watches", None)],
    "title": "Art, Jewellery & Watch Insurance in Portugal and Spain",
    "desc": "Art, jewellery and watches insured on agreed value, all risks and worldwide, with Chubb, Hiscox or Liberty. Written opinion from an ASF-registered broker.",
    "h1": "Art, jewellery and watch insurance in Portugal and Spain",
    "lead": "Art, jewellery and watches insured on agreed value, on an all-risks basis and anywhere in the world, with Chubb, Hiscox or Liberty, for homes in Portugal and Spain. A standard contents policy caps what it pays for any one piece; above that cap the piece is simply not insured. We schedule the pieces that matter and tell you in writing what your current policy would pay today.",
    "cta": ("Ask for a written review of your collection", "/en/private-clients/#ar-quote-form"),
    "cta2": ("Private client insurance", "/en/private-clients/"),
    "sections": [
        ("The single-article limit decides everything",
         "<p>A Portuguese or Spanish home policy states a total contents sum and then, in the schedule, limits what it pays for any one item. That limit is often between <strong>€1,500 and €5,000</strong>. Above it the piece is not insured, however large the contents sum.</p>\n"
         "  <p>A second limit sits on top: valuables as a whole are often capped at <strong>20% to 25% of the contents sum</strong>. Both limits apply at the same time, and the lower one wins. The only way out of both is to schedule the piece, with its own description and value.</p>"),
        ("Agreed value, not a value argued after the loss",
         "<p>A piece scheduled on <strong>agreed value</strong> has its value fixed at the start of the contract, against a valuation. After a total loss (theft without recovery, destruction) that value is paid, with no argument about depreciation.</p>\n"
         "  <p>The date on the valuation certificate is part of the cover. Under the best wordings it decides whether you are protected when the market has risen, so art should be revalued at least every five years, and jewellery and watches every two.</p>"),
        ("Partial loss: restoration and the loss of value",
         "<p>A damaged painting can often be restored, but it rarely recovers its full market value. A well-built art section pays the restoration by a conservator both parties accept, and also the <strong>loss of value that remains afterwards</strong>.</p>\n"
         "  <p>Pairs and sets need the same attention. If one earring of a pair or one of two vases is lost, the piece that remains is worth far less on its own, and the wording should take the value of the whole set into account.</p>"),
        ("Theft, loss and accidental damage, at home and abroad",
         "<p>Ordinary contents cover responds to burglary with forced entry and limits or excludes theft without violence, above all outside the home. Spanish policies make the same distinction between <em>robo</em> and <em>hurto</em>. An all-risks section also covers loss and accidental damage.</p>\n"
         "  <p>For pieces that are worn or travel, the sum insured has to be split deliberately between the safe, the home and worldwide, because each location carries its own limit. A watch worn every day and a ring kept in a bank vault are insured on different lines.</p>"),
        ("Safes, alarms and where the pieces are kept",
         "<p>Above certain values, insurers make security a condition of acceptance. A safe certified to <strong>EN 1143-1</strong>, graded to the value it holds and anchored to the structure, and an alarm connected to a monitoring centre are common requirements.</p>\n"
         "  <p>Some wordings also say when jewellery must be in the safe, for example whenever it is not being worn or whenever the house is empty at night. Those conditions are agreed before the policy starts, in writing, so that they cannot be raised for the first time after a theft.</p>"),
        ("Portugal and Spain",
         "<p>Scheduling, agreed value and all-risks cover work the same way in both countries. Three differences matter:</p>\n"
         "  <ul class=\"lp-list\">\n"
         "    <li><strong>Catastrophes:</strong> in Spain, earthquake, extraordinary flood and atypical storm are paid by the <em>Consorcio de Compensación de Seguros</em>, based on the sums in the policy. In Portugal, earthquake is an optional cover that a collection should carry.</li>\n"
         "    <li><strong>Theft without violence:</strong> both markets distinguish robbery from theft, and ordinary cover answers the first while limiting or excluding the second.</li>\n"
         "    <li><strong>Moving works:</strong> older works can need an export authorisation under heritage law, in Portugal as in Spain, before they go to a restorer or another house. The waiting time has to be covered.</li>\n"
         "  </ul>"),
    ],
    "faq": [
        ("Is my jewellery covered by my home insurance?",
         "Only up to the single-article limit and the valuables limit in the schedule, which are usually a few thousand euros per item. Above that, a piece needs to be scheduled individually, with its own value."),
        ("Are watches insured as art?",
         "No. Wristwatches are insured as valuables, together with jewellery, while clocks can fall under fine art. The difference matters because settlement options and new-acquisition cover can differ between the two sections."),
        ("How often should a collection be revalued?",
         "Art at least every five years, jewellery and watches every two. Under the wordings we place, the date of the last valuation decides whether a rise in the market is covered."),
        ("Can pieces in Portugal and in Spain be on one policy?",
         "Often, yes. Chubb and Hiscox write both countries, so pieces kept in either can be insured with the same adviser and aligned conditions."),
        ("Are valuables in a holiday home covered?",
         "Not always. Hiscox's holiday-home policy, for example, does not cover jewellery and watches at all, so valuables kept in a second home need to be arranged separately."),
    ],
    "related": [
        ("/en/blog/insuring-jewellery-watches-portugal/", "Jewellery and watches: the single-article limit"),
        ("/en/blog/insuring-art-portugal-spain/", "Insuring art in Portugal and Spain"),
        ("/en/blog/art-jewellery-cover-beyond-agreed-value/", "Art and jewellery cover beyond the agreed value"),
        ("/en/blog/watches-jewellery-travelling-worldwide-all-risks/", "Watches and jewellery abroad"),
        ("/en/blog/valuations-portugal-who-what-how-often/", "Insurance valuations: who, what and how often"),
        ("/en/private-clients/", "Private client insurance in Portugal"),
    ],
}


def finish(path):
    """Service schema, dates and the PT/EN hreflang pair on the new page."""
    s = path.read_text(encoding="utf-8")
    url = BASE + PAGE["path"]
    s = s.replace('"datePublished": "2026-10-14"', f'"datePublished": "{DATE}"').replace('"dateModified": "2026-10-14"', f'"dateModified": "{DATE}"')
    m = re.search(r'<script type="application/ld\+json">\n(.*?)\n</script>', s, flags=re.S)
    data = json.loads(m.group(1))
    if not any(n.get("@type") == "Service" for n in data["@graph"]):
        data["@graph"].append({
            "@type": "Service", "@id": url + "#service", "name": "Art, jewellery and watch insurance",
            "serviceType": "Insurance mediation", "description": PAGE["desc"], "url": url,
            "provider": {"@id": BASE + "/#organization"},
            "areaServed": [{"@type": "Country", "name": "Portugal"}, {"@type": "Country", "name": "Spain"}],
            "availableLanguage": ["en", "pt", "es", "de"],
        })
    s = s[:m.start()] + '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2) + "\n</script>" + s[m.end():]
    alts = (f'<link rel="alternate" hreflang="en-GB" href="{url}">\n'
            f'<link rel="alternate" hreflang="pt-PT" href="{BASE}{PT}">\n'
            f'<link rel="alternate" hreflang="x-default" href="{url}">')
    s = re.sub(r'(<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?)+', alts + "\n", s, count=1)
    s = swap_links(s, SWITCH_EN)
    path.write_text(s, encoding="utf-8")


# Language selector targets: the template's IPMI hubs become the closest page
# on art, jewellery and watches in each language.
SWITCH_EN = {
    "/seguros/saude-internacional/": PT,
    "/en/international-health-insurance/": "/en/art-jewellery-watches-insurance/",
    "/de/internationale-krankenversicherung/": "/de/schmuck-uhren-versicherung-portugal-spanien/",
    "/es/seguro-medico-internacional/": "/es/seguro-joyas-relojes-limite-por-objeto/",
    "/fr/assurance-sante-internationale/": "/fr/",
    "/it/assicurazione-medica-internazionale/": "/it/assicurazione-arte-gioielli-oltre-valore-concordato/",
    "/nl/internationale-zorgverzekering/": "/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/",
    "/pl/miedzynarodowe-ubezpieczenie-zdrowotne/": "/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/",
    "/se/internationell-sjukvardsforsakring/": "/se/konst-smycken-forsakring-utover-avtalat-varde/",
    "/dk/international-sundhedsforsikring/": "/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/",
    "/il/international-health-insurance/": "/il/art-jewellery-beyond-agreed-value/",
    "/zh/international-health-insurance/": "/zh/art-jewellery-beyond-agreed-value/",
}
SWITCH_PT = {
    "/en/blog/insuring-art-portugal-spain/": "/en/art-jewellery-watches-insurance/",
    "/es/": "/es/seguro-joyas-relojes-limite-por-objeto/",
    "/de/blog/kunstversicherung-portugal-spanien/": "/de/schmuck-uhren-versicherung-portugal-spanien/",
    "/it/": "/it/assicurazione-arte-gioielli-oltre-valore-concordato/",
    "/nl/": "/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/",
    "/pl/": "/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/",
    "/se/": "/se/konst-smycken-forsakring-utover-avtalat-varde/",
    "/dk/": "/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/",
    "/il/": "/il/art-jewellery-beyond-agreed-value/",
    "/zh/": "/zh/art-jewellery-beyond-agreed-value/",
}


def swap_links(s, mapping):
    def fix(m):
        block = m.group(0)
        for a, b in mapping.items():
            block = block.replace(f'href="{a}"', f'href="{b}"')
        return block
    return re.sub(r'<li><a href="[^"]*" lang="[^"]*"[^>]*><span>[^<]*</span></a></li>', fix, s)


def link_pt_page():
    """Pair the PT product page with the new EN page (hreflang + language selector)."""
    f = hnw.PUBLIC / PT.strip("/") / "index.html"
    s = f.read_text(encoding="utf-8")
    url_pt, url_en = BASE + PT, BASE + PAGE["path"]
    alts = (f'  <link rel="alternate" hreflang="pt-PT" href="{url_pt}">\n'
            f'  <link rel="alternate" hreflang="en-GB" href="{url_en}">\n'
            f'  <link rel="alternate" hreflang="x-default" href="{url_en}">\n')
    s = re.sub(r'([ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n?)+', alts, s, count=1)
    s = swap_links(s, SWITCH_PT)
    f.write_text(s, encoding="utf-8")


if __name__ == "__main__":
    out = hnw.build(PAGE)
    finish(out)
    link_pt_page()
    print("built", out.relative_to(ROOT))
