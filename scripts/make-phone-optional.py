#!/usr/bin/env python3
"""Makes the phone field optional on the lead forms (October 2026).

Decision: every lead form asks only for what is needed to start (name and
email); anything else, the phone included, is asked for afterwards by email.
Until now the language-cluster forms (es-solicitud, it-richiesta,
pl-zapytanie-ofertowe, se-offertforfragan, dk-forespoergsel, zh-baojia-shenqing,
il-bakashat-hatzaa, de-angebot-anfrage) and the Spain commercial forms in
English and German refused to send without a phone number.

For each affected field this removes `required`/`aria-required`, the asterisk
on its label, and the "empty" branch of the page's inline validation rule. A
number that IS typed is still checked for format.

Idempotent. Usage: python3 scripts/make-phone-optional.py
"""
import glob
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
FORMS = {
    "es-solicitud", "it-richiesta", "pl-zapytanie-ofertowe", "se-offertforfragan",
    "dk-forespoergsel", "zh-baojia-shenqing", "il-bakashat-hatzaa", "de-angebot-anfrage",
    "expat-insurance-review-spain", "landlord-insurance-quote-spain",
    "life-insurance-review-spain", "mortgage-protection-review-spain",
    "de-versicherung-spanien", "de-vermieterversicherung-spanien",
    "de-lebensversicherung-spanien", "de-hypothekenschutz-spanien",
}
FIELD_IDS = ("f-phone", "f-telefon", "q-phone")


def patch(h):
    changed = False
    for fm in list(re.finditer(r"<form\b.*?</form>", h, re.S)):
        blk = fm.group(0)
        name = re.search(r'\bname="([^"]+)"', blk)
        if not name or name.group(1) not in FORMS:
            continue
        new = blk
        for fid in FIELD_IDS:
            # the input tag (may span several lines)
            def fix_input(m):
                tag = m.group(0)
                tag = re.sub(r'\s+aria-required="true"', "", tag)
                tag = re.sub(r'\s+required(?=[\s>/])', "", tag)
                return tag
            new = re.sub(r'<input\b[^>]*\bid="%s"[^>]*>' % fid, fix_input, new, flags=re.S)
            # the label
            def fix_label(m):
                lab = m.group(0)
                lab = re.sub(r'\s*<span class="req"[^>]*>\*</span>', "", lab)
                lab = re.sub(r"\s*\*\s*(</label>)", r"\1", lab)
                return lab
            new = re.sub(r'<label for="%s">.*?</label>' % fid, fix_label, new, flags=re.S)
        if new != blk:
            h = h.replace(blk, new)
            changed = True
    # inline validation rules: { id: "f-phone", ... validate: function (value) { if (!value) return "..."; ...
    for fid in FIELD_IDS:
        pat = re.compile(r'(\{\s*id:\s*"%s".*?validate:\s*function\s*\((\w+)\)\s*\{\s*)if \(!\2\) return (?:"[^"]*"|\'[^\']*\');' % fid, re.S)
        h2 = pat.sub(lambda m: m.group(1) + "if (!%s) return null;" % m.group(2), h)
        if h2 != h:
            h, changed = h2, True
    return h, changed


if __name__ == "__main__":
    n = 0
    for f in glob.glob(os.path.join(ROOT, "public", "**", "index.html"), recursive=True):
        h = open(f, encoding="utf-8").read()
        h2, changed = patch(h)
        if changed:
            open(f, "w", encoding="utf-8").write(h2)
            n += 1
    print("pages changed:", n)
