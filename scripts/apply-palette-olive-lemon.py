#!/usr/bin/env python3
"""
Palette change, September 2026: navy / red  ->  Dark Olive / Fresh Lemon.

    Dark Olive   #283113   (was navy   #17243D)
    Fresh Lemon  #F3FF74   (was red    #B8323E and pink #E8919B)

Lemon is a light colour: it works as text on olive and as a button fill with
olive text, but it is unreadable as text on cream or white. So the change is
not a blind find-and-replace:

  1. Rules / inline styles whose BACKGROUND is the accent get olive text.
  2. Rules whose selector is known to sit on a light background and use the
     accent for text or borders get a deep olive-lime (#5A6610, 5.6:1 on
     cream) instead of lemon.
  3. Gradients ending in the accent end in olive-lime, so white text on the
     article hero tiles stays readable.
  4. Everything else is mapped hex-for-hex (navy family -> olive family,
     blue-grey text -> olive-grey text, red -> lemon).

Applies to public/ (HTML inline styles and css/*.css) and to the generators
in scripts/ so a re-run does not bring the old palette back. Idempotent.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OLIVE = '#283113'
LEMON = '#F3FF74'
LEMON_HOVER = '#E4F25C'
LIME_INK = '#5A6610'   # accent for text/borders on light backgrounds

ACCENT_RE = r'(?:#B8323E|#872733|#E8919B|var\(--accent\)|var\(--accent-hover\)|var\(--ar-accent\)|var\(--ar-accent-hover\))'

LIGHT_SELECTORS = [
    '.related-card-tag', '.article-body li:before', '.article-body ol li:before', '.article-body blockquote',
    '.cta-topo', '.cta-field input:focus', '.article-cta', '.callout', '.ar-langpolicy', '.lang-policy',
    '.feature-card .fc-tag', '.feature-card a.fc-link:hover', '.lp-trust strong', '.blog-cta-box', '.hero-form-note',
    '.fact-panel', '.who-card', '.packages .section-head .eyebrow', '.pkg-card.featured', '.info-card', '.cross-link a',
    '.gap-card .gap-num', '.managers-band .btn-secondary', '.form-card', '.form-field input:focus',
    '.lead-copy ul li::before', '.breadcrumb a:hover', '.article-body a:hover', '.hub-item a:hover', '.text-link:hover',
    '.field .req', '.field-error', '.service', '.lp-sec ul li:before', '.lp-card span', '.lp-uw div', '.lp-guides a b',
    '.protect-card-links a:hover', '.rc-timeline-point--accent', '.blog-cta', '.cta-topo-form', '.section-eyebrow',
    '.eyebrow', '.lp-eyebrow', '.specialist-arrow', '.universe-cta', '.especialidade-arrow', '.method-label',
]

HEX_MAP = [
    (r'#17243D', OLIVE), (r'#223553', '#3A4720'), (r'#2A3F66', '#4A5A28'), (r'#111927', '#1A200C'),
    (r'#1A3D5C', '#3A4720'),
    (r'rgba\(\s*23\s*,\s*36\s*,\s*61\s*,', 'rgba(40,49,19,'),
    (r'rgba\(\s*26\s*,\s*61\s*,\s*92\s*,', 'rgba(40,49,19,'),
    (r'#B8323E', LEMON), (r'#872733', LEMON_HOVER), (r'#E8919B', LEMON),
    (r'rgba\(\s*184\s*,\s*50\s*,\s*62\s*,', 'rgba(243,255,116,'),
    (r'#526984', '#565F48'), (r'#516F94', '#5E6650'),
]

WHITE_RE = r'(?:#FFFFFF|#FFF|#fff|#ffffff|white|var\(--white\))'


def is_light_selector(sel):
    s = ' '.join(sel.split())
    return any(x in s for x in LIGHT_SELECTORS) and '.hero ' not in s and not s.startswith('.hero')


def fix_decls(sel, body):
    decls = body
    has_accent_bg = re.search(r'background(?:-color)?\s*:\s*' + ACCENT_RE, decls, re.I)
    if has_accent_bg:
        # olive text on lemon fill
        decls = re.sub(r'(^|;|\s)(color\s*:\s*)' + WHITE_RE, lambda m: m.group(1) + m.group(2) + OLIVE, decls, flags=re.I)
        if not re.search(r'(^|;|\s)color\s*:', decls):
            decls = decls.rstrip().rstrip(';') + '; color: ' + OLIVE + ';' if decls.strip() else decls
        decls = re.sub(r'(fill\s*:\s*)' + WHITE_RE, lambda m: m.group(1) + OLIVE, decls, flags=re.I)
    elif is_light_selector(sel):
        decls = re.sub(r'((?:^|;|\s)(?:color|border(?:-left|-top|-color|-left-color|-top-color)?|outline|fill|stroke)\s*:[^;]*?)' + ACCENT_RE,
                       lambda m: m.group(1) + LIME_INK, decls, flags=re.I)
    return decls


def transform_css(css):
    def rule(m):
        sel, body = m.group(1), m.group(2)
        if '@' in sel and '{' not in body:
            pass
        return sel + '{' + fix_decls(sel, body) + '}'
    return re.sub(r'([^{}]+)\{([^{}]*)\}', rule, css)


def transform_inline_style(s):
    def st(m):
        v = m.group(2)
        if re.search(r'background(?:-color)?\s*:\s*' + ACCENT_RE, v, re.I):
            v = re.sub(r'((?:^|;)\s*color\s*:\s*)' + WHITE_RE, lambda k: k.group(1) + OLIVE, v, flags=re.I)
        # accent borders/text on inline light boxes
        if re.search(r'background\s*:\s*(#F5F1E8|#FFFFFF|#fff|#E8E5DF)', v, re.I):
            v = re.sub(r'(border(?:-left|-top)?\s*:[^;]*?)' + ACCENT_RE, lambda k: k.group(1) + LIME_INK, v, flags=re.I)
        # gradients ending in accent -> olive-lime end
        v = re.sub(r'(linear-gradient\([^)]*?)' + ACCENT_RE, lambda k: k.group(1) + LIME_INK, v, flags=re.I)
        return m.group(1) + v + m.group(3)
    return re.sub(r'(style=")([^"]*)(")', st, s)


def hexmap(s):
    for a, b in HEX_MAP:
        s = re.sub(a, b, s, flags=re.I)
    return s


def process_html(s):
    s = re.sub(r'(<style[^>]*>)(.*?)(</style>)', lambda m: m.group(1) + transform_css(m.group(2)) + m.group(3), s, flags=re.S)
    s = transform_inline_style(s)
    return hexmap(s)


def main():
    dry = '--dry-run' in sys.argv
    n = 0
    for base in ('public', 'scripts'):
        for dp, dn, fn in os.walk(os.path.join(ROOT, base)):
            dn[:] = [d for d in dn if d != 'node_modules']
            for f in fn:
                p = os.path.join(dp, f)
                if f == os.path.basename(__file__):
                    continue
                if not f.endswith(('.html', '.css', '.mjs', '.js', '.svg', '.webmanifest', '.json')):
                    continue
                try:
                    s = open(p, encoding='utf-8').read()
                except UnicodeDecodeError:
                    continue
                o = s
                if f.endswith('.html'):
                    s = process_html(s)
                elif f.endswith('.css'):
                    s = hexmap(transform_css(s))
                elif base == 'scripts' and f.endswith('.mjs'):
                    s = hexmap(transform_css(transform_inline_style(s)))
                else:
                    s = hexmap(s)
                if s != o:
                    n += 1
                    if not dry:
                        open(p, 'w', encoding='utf-8').write(s)
    print(('would change' if dry else 'changed'), n, 'files')


if __name__ == '__main__':
    main()
