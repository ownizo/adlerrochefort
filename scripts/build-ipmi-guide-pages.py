#!/usr/bin/env python3
"""'Domestic or international?' guide under each language's IPMI hub (12 languages).

Reuses the chrome, form, breadcrumb, hreflang and language selector logic of
scripts/build-ipmi-intl-pages.py; content and rules live in
scripts/ipmi_intl/guide.py. The guide itself is not a <form>: it asks no health
question and sends nothing — the result is computed in the browser.

Also adds, idempotently, a link to the guide on every IPMI hub.

Run from the repository root:
    python3 scripts/build-ipmi-guide-pages.py
then node scripts/generate-sitemap.mjs
"""
import html
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
spec = importlib.util.spec_from_file_location("ipmi_build", ROOT / "scripts/build-ipmi-intl-pages.py")
B = importlib.util.module_from_spec(spec)
spec.loader.exec_module(B)

from ipmi_intl import guide as G  # noqa: E402

PUBLIC = B.PUBLIC
B.DATE = "2026-11-19"
KIND = "guide"
_orig_path_of = B.path_of


def path_of(lang, kind):
    if kind == KIND:
        return B.LANGS[lang][2] + G.SLUG[lang]
    return _orig_path_of(lang, kind)


B.path_of = path_of  # used by hreflang_block, set_switcher, crumbs, ld

TOOL_MARK = "<!-- ar-ipmi-guide -->"
HUB_MARK = "<!-- ar-ipmi-guide-link -->"

CSS = """<style id="ar-ipmi-guide-style">
.ipmi-x .ipmi-guide{border:1px solid var(--line);border-radius:20px;padding:24px;margin:0 0 28px;background:#fff}
.ipmi-x .ipmi-guide h2{font-family:'Ubuntu',Georgia,serif;font-weight:500;font-size:clamp(24px,3.4vw,30px);margin:0 0 6px}
.ipmi-x .ipmi-guide .g-intro{font-size:14.5px;color:var(--muted);margin:0 0 18px}
.ipmi-x .ipmi-guide fieldset{border:0;margin:0 0 16px;padding:0}
.ipmi-x .ipmi-guide legend{font-weight:600;font-size:16px;margin-bottom:8px;padding:0}
.ipmi-x .ipmi-guide .g-opts{display:flex;flex-wrap:wrap;gap:8px}
.ipmi-x .ipmi-guide .g-opts label{display:inline-flex;align-items:center;gap:8px;border:1px solid #d6d3d1;border-radius:999px;padding:8px 14px;font-size:15px;cursor:pointer;background:var(--cream)}
.ipmi-x .ipmi-guide .g-opts input{accent-color:#292929}
.ipmi-x .ipmi-guide .g-opts label:has(input:checked){border-color:#292929;background:#fff;font-weight:600}
.ipmi-x .ipmi-guide .g-actions{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-top:8px}
.ipmi-x .ipmi-guide button{border:0;border-radius:999px;padding:12px 22px;font-weight:600;font-size:15px;cursor:pointer;font-family:inherit}
.ipmi-x .ipmi-guide .g-go{background:#292929;color:#fff}
.ipmi-x .ipmi-guide .g-reset{background:transparent;color:#292929;text-decoration:underline}
.ipmi-x .ipmi-guide .g-missing{color:#a3361f;font-size:14px;margin:8px 0 0}
.ipmi-x .ipmi-guide .g-result{margin-top:20px;border-top:1px solid var(--line);padding-top:18px}
.ipmi-x .ipmi-guide .g-result h3{font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:0 0 8px;font-weight:600}
.ipmi-x .ipmi-guide .g-verdict{font-family:'Ubuntu',Georgia,serif;font-size:clamp(21px,3vw,25px);line-height:1.3;margin:0 0 12px}
.ipmi-x .ipmi-guide .g-result ul{padding-inline-start:20px;margin:6px 0 12px}
.ipmi-x .ipmi-guide .g-result li{margin-bottom:6px;line-height:1.6}
.ipmi-x .ipmi-guide .g-pre{background:var(--cream);border-radius:12px;padding:12px 14px;font-size:14.5px;line-height:1.6}
.ipmi-x .ipmi-guide .g-cta{margin-top:14px}
.ipmi-x .ipmi-guide [hidden]{display:none!important}
</style>"""

JS = r"""<script id="ar-ipmi-guide-js">
(function () {
  var box = document.getElementById('ipmi-guide');
  if (!box) return;
  var T = JSON.parse(box.getAttribute('data-t'));
  function val(n) { var c = box.querySelector('input[name="g-' + n + '"]:checked'); return c ? c.value : ''; }
  var papers = document.getElementById('g-papers-q');
  function sync() { papers.hidden = val('live') !== 'pt'; }
  box.addEventListener('change', sync);
  function li(t) { return '<li>' + t + '</li>'; }
  box.querySelector('.g-go').addEventListener('click', function () {
    var live = val('live'), nat = val('nat'), us = val('us'), age = val('age'), ppl = val('people'), care = val('care'), pap = val('papers');
    var miss = !live || !nat || !us || !age || !ppl || !care || (live === 'pt' && !pap);
    box.querySelector('.g-missing').hidden = !miss;
    if (miss) return;
    var verdict, why = [], kind = 'intl', insurers = true;
    if (nat === 'yes') {
      verdict = T.r_nat; why.push(T.w_nat); insurers = false;
      if (live === 'pt') { why.push(T.w_nat_pt); kind = 'dom'; } else { kind = 'none'; }
    } else if (live === 'es') {
      verdict = T.r_intl; why.push(T.w_es);
    } else if (live === 'other') {
      verdict = T.r_intl; why.push(T.w_other);
    } else {
      if (care !== 'local') why.push(T.w_care);
      if (pap === 'no') why.push(T.w_papers);
      var mgen = false;
      if (age === '65') {
        if (ppl === 'two' && pap === 'yes') mgen = true; else why.push(T.w_age);
      }
      if (why.length) { verdict = T.r_intl; }
      else if (mgen) { verdict = T.r_mgen; why.push(T.w_mgen); kind = 'dom'; insurers = false; }
      else { verdict = T.r_dom; why.push(T.w_dom); kind = 'dom'; insurers = false; }
    }
    var out = '<h3>' + T.res_h + '</h3><p class="g-verdict">' + verdict + '</p>';
    out += '<p><strong>' + T.why + '</strong></p><ul>' + why.map(li).join('') + '</ul>';
    if (insurers) {
      var ins = [];
      if (us === 'yes') ins.push(T.i_us);
      else { ins.push(T.i_all); if (live === 'es' && care === 'home') ins.push(T.i_close); }
      out += '<p><strong>' + T.ins + '</strong></p><ul>' + ins.map(li).join('') + '</ul>';
    }
    if (live === 'pt') out += '<p class="g-pre">' + T.pre + '</p>';
    if (kind === 'intl') out += '<p class="g-cta"><a class="ipmi-btn" href="#ipmi-pedido">' + T.cta_intl + '</a></p>';
    if (kind === 'dom') out += '<p class="g-cta"><a class="ipmi-btn" href="' + T.dom_url + '">' + T.cta_dom + '</a></p>';
    var r = box.querySelector('.g-result');
    r.innerHTML = out; r.hidden = false;
    box.querySelector('.g-reset').hidden = false;
    r.setAttribute('tabindex', '-1'); r.focus({ preventScroll: true });
    r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  box.querySelector('.g-reset').addEventListener('click', function () {
    box.querySelectorAll('input[type=radio]').forEach(function (i) { i.checked = false; });
    var r = box.querySelector('.g-result'); r.hidden = true; r.innerHTML = '';
    this.hidden = true; box.querySelector('.g-missing').hidden = true; sync();
  });
  sync();
})();
</script>"""


def esc(s):
    return html.escape(s, quote=True)


def tool_html(lang):
    t = G.TOOL[lang]

    def q(name, label, opts, qid=None, hidden=False):
        lab = "".join(f'<label><input type="radio" name="g-{name}" value="{v}"> {esc(t[k]) if "<" not in t[k] else t[k]}</label>' for v, k in opts)
        idattr = f' id="{qid}"' if qid else ""
        hid = " hidden" if hidden else ""
        return f'    <fieldset{idattr}{hid}><legend>{esc(t[label])}</legend><div class="g-opts">{lab}</div></fieldset>'

    data = dict(t)
    data["dom_url"] = G.DOMESTIC[lang]
    rows = [
        q("live", "q_live", [("pt", "o_pt"), ("es", "o_es"), ("other", "o_other")]),
        q("nat", "q_nat", [("yes", "o_yes"), ("no", "o_no")]),
        q("us", "q_us", [("yes", "o_yes"), ("no", "o_no")]),
        q("age", "q_age", [("u65", "o_u65"), ("65", "o_65")]),
        q("people", "q_people", [("one", "o_one"), ("two", "o_two")]),
        q("care", "q_care", [("local", "o_local"), ("home", "o_home"), ("world", "o_world")]),
        q("papers", "q_papers", [("yes", "o_yes"), ("no", "o_notyet")], qid="g-papers-q", hidden=True),
    ]
    return (f'{TOOL_MARK}\n  <section class="ipmi-guide" id="ipmi-guide" aria-labelledby="ipmi-guide-h" data-t="{esc(json.dumps(data, ensure_ascii=False))}">\n'
            f'    <h2 id="ipmi-guide-h">{esc(t["h2"])}</h2>\n    <p class="g-intro">{esc(t["intro"])}</p>\n'
            + "\n".join(rows) +
            f'\n    <div class="g-actions"><button type="button" class="g-go">{esc(t["go"])}</button>'
            f'<button type="button" class="g-reset" hidden>{esc(t["reset"])}</button></div>\n'
            f'    <p class="g-missing" role="alert" hidden>{esc(t["missing"])}</p>\n'
            f'    <div class="g-result" aria-live="polite" hidden></div>\n  </section>\n')


def build(lang):
    mod = B.load(lang)
    page = dict(G.PAGE[lang])
    B.page_data = lambda m, k: page if k == KIND else _orig_page_data(m, k)
    # live UI wording: no fixed response time, new review date
    ui = dict(mod.UI)
    ui["meta"] = G.META[lang]
    ui["form"] = dict(ui["form"], success_p=G.SUCCESS[lang])
    mod.UI = ui
    B.load = lambda l, _m=mod: _m
    # the form helper only knows the original kinds: build it as the hub's, then retarget
    orig_form = _orig_form_html

    def form_html(l, m, kind, p):
        out = orig_form(l, m, "hub", p)
        return (out.replace(f'data-endpoint="{B.LANGS[l][2]}"', f'data-endpoint="{path_of(l, KIND)}"', 1)
                   .replace('name="source" value="hub:ipmi"', 'name="source" value="page:ipmi-guide"', 1))

    B.form_html = form_html
    # chrome: the language's live Allianz Care page (current header, footer, selector)
    orig_langs = B.LANGS[lang]
    B.LANGS[lang] = orig_langs[:3] + (orig_langs[2] + "allianz-care/",) + orig_langs[4:]
    try:
        p = B.build(lang, KIND)
    finally:
        B.LANGS[lang] = orig_langs
        B.load = _orig_load
        B.form_html = _orig_form_html
    f = PUBLIC / p.strip("/") / "index.html"
    s = f.read_text(encoding="utf-8")
    # the template's Allianz Care badge styles serve no element here
    s = re.sub(r'<style id="ar-allianz-badge-style">.*?</style>\n?', "", s, flags=re.S)
    s = s.replace('  <section class="ipmi-facts"', tool_html(lang) + '  <section class="ipmi-facts"', 1)
    head_end = s.index("</head>")
    s = s[:head_end] + CSS + "\n" + s[head_end:]
    k = s.rindex("</body>")
    s = s[:k] + JS + "\n" + s[k:]
    f.write_text(s, encoding="utf-8")
    return p


_orig_page_data = B.page_data
_orig_load = B.load
_orig_form_html = B.form_html


def link_from_hubs():
    """A one-line pointer to the guide on each language's IPMI hub (idempotent)."""
    done = []
    for lang in B.ORDER:
        f = PUBLIC / B.LANGS[lang][2].strip("/") / "index.html"
        s = f.read_text(encoding="utf-8")
        if HUB_MARK in s:
            continue
        q, a = G.HUB_LINK[lang]
        block = (f'{HUB_MARK}<p class="ipmi-guide-link" style="margin:14px 0 0;font-size:15px;line-height:1.6">'
                 f'{esc(q)} <a href="{path_of(lang, KIND)}" style="font-weight:600;text-underline-offset:3px">{esc(a)} &rarr;</a></p>')
        # after the first H1's closing paragraph (lead) in the hero
        m = re.search(r"</h1>\s*(<p[^>]*>.*?</p>)", s, re.S)
        if not m:
            print("hub link: no H1 lead found in", f, file=sys.stderr)
            continue
        s = s[:m.end()] + "\n" + block + s[m.end():]
        f.write_text(s, encoding="utf-8")
        done.append(B.LANGS[lang][2])
    return done


def add_to_sitemap():
    """Add the twelve guide URLs, with hreflang alternates, to sitemap-pages.xml.

    Done here rather than with scripts/generate-sitemap.mjs, which rewrites the
    whole file and drops the hreflang alternates other generators maintain.
    """
    f = PUBLIC / "sitemap-pages.xml"
    s = f.read_text(encoding="utf-8")
    alts = "".join(f'    <xhtml:link rel="alternate" hreflang="{B.LANGS[l][0]}" href="{B.BASE}{path_of(l, KIND)}" />\n' for l in B.ORDER)
    alts += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{B.BASE}{path_of("en", KIND)}" />\n'
    added = []
    blocks = ""
    for l in B.ORDER:
        loc = B.BASE + path_of(l, KIND)
        if f"<loc>{loc}</loc>" in s:
            continue
        blocks += (f"  <url>\n    <loc>{loc}</loc>\n{alts}    <lastmod>{B.DATE}</lastmod>\n"
                   f"    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n")
        added.append(loc)
    if blocks:
        i = s.rindex("</urlset>")
        f.write_text(s[:i] + blocks + s[i:], encoding="utf-8")
    return added


def main():
    langs = sys.argv[1:] or B.ORDER
    for lang in langs:
        print(build(lang))
    if not sys.argv[1:]:
        for h in link_from_hubs():
            print(h, "(guide link added)")
        for u in add_to_sitemap():
            print(u, "(sitemap)")


if __name__ == "__main__":
    main()
