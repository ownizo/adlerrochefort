#!/usr/bin/env python3
"""Defines the organisation node on pages that only refer to it (October 2026).

About a hundred pages point at {"@id": "https://adlerrochefort.com/#organization"}
(as publisher or provider) without the node being defined anywhere on the
page, so a crawler reading that page alone cannot resolve who the firm is.
This adds one compact InsuranceAgency node with that @id, plus the four legal
pages that had no structured data at all. Pages that already define it, or
embed the publisher inline, are left alone. Idempotent.

Usage: python3 scripts/add-org-node.py
"""
import glob, json, os, re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OID = "https://adlerrochefort.com/#organization"
NODE = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": OID,
    "name": "Adler & Rochefort",
    "legalName": "Ownizo, Unipessoal Lda.",
    "alternateName": "Ownizo, Unipessoal Lda.",
    "url": "https://adlerrochefort.com",
    "logo": "https://adlerrochefort.com/images/logo-adler-rochefort.svg",
    "description": "Private-client insurance broker for high-net-worth households in Portugal and Spain: high-value homes, art, jewellery and watches, family liability, international health and collector cars. Registered with Portugal's ASF (no. 425591790/3), head office in Lisbon, operating in Spain under the EU freedom to provide services.",
    "telephone": "+351928226570",
    "email": "insurance@adlerrochefort.com",
    "foundingDate": "2014",
    "founder": {"@type": "Person", "name": "Hugo Gonçalves"},
    "areaServed": [{"@type": "Country", "name": "Portugal"}, {"@type": "Country", "name": "Spain"}],
    "knowsLanguage": ["en", "pt", "es", "de"],
    "address": {"@type": "PostalAddress", "streetAddress": "Av. do Atlântico 16, Esc. 5.07",
                "addressLocality": "Lisboa", "postalCode": "1990-019", "addressCountry": "PT"},
    "identifier": {"@type": "PropertyValue", "name": "ASF registration", "value": "425591790/3"},
    "sameAs": ["https://www.facebook.com/adlerrochefort", "https://www.instagram.com/adlerrochefort/",
               "https://www.linkedin.com/company/adler-rochefort"],
}
BLOCK = '<script type="application/ld+json">\n' + json.dumps(NODE, ensure_ascii=False, indent=2) + "\n</script>\n"
ORG_TYPES = {"InsuranceAgency", "Organization", "FinancialService", "LocalBusiness", "InsuranceBroker"}


def defines_org(lds):
    def walk(x):
        if isinstance(x, dict):
            t = x.get("@type")
            ts = set(t if isinstance(t, list) else [t])
            if ts & ORG_TYPES and len(x) > 3:   # a real node, not a bare reference
                return True
            return any(walk(v) for v in x.values())
        if isinstance(x, list):
            return any(walk(v) for v in x)
        return False
    return any(walk(d) for d in lds)


changed = 0
for f in glob.glob(os.path.join(ROOT, "public", "**", "index.html"), recursive=True):
    h = open(f, encoding="utf-8").read()
    if re.search(r'<meta name="robots" content="[^"]*noindex', h) or "</head>" not in h:
        continue
    raw = re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S)
    lds = []
    for b in raw:
        try:
            lds.append(json.loads(b))
        except ValueError:
            pass
    if defines_org(lds):
        continue
    if raw and OID not in "".join(raw):
        continue   # publisher embedded some other way; leave it
    h = h.replace("</head>", BLOCK + "</head>", 1)
    open(f, "w", encoding="utf-8").write(h)
    changed += 1
print("pages changed:", changed)
