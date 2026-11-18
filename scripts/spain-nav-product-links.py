#!/usr/bin/env python3
"""
Point the Spain menu at the Spain product pages (November 2026).

In the EN, DE and ES navigation, the Spain panel (desktop #navPanelES and
mobile #mobAccES) linked valuables and cars to Portugal-and-Spain guides.
This pass, applied only inside those two Spain blocks, links them to:

  EN  Jewellery & watches  -> /en/jewellery-watch-insurance-spain/
      Classic cars         -> /en/classic-car-insurance-spain/
      Luxury cars          -> /en/luxury-car-insurance-spain/
  DE  Oldtimer             -> /de/oldtimerversicherung-spanien/
      Luxusautos           -> /de/luxusauto-versicherung-spanien/
  ES  Joyas y relojes      -> /es/seguro-joyas-relojes-espana/
      Coches clásicos      -> /es/seguro-vehiculos-clasicos-espana/
      Coches de lujo       -> /es/seguro-coche-lujo-espana/

The homepages are edited too, so scripts/stamp-mega-nav.mjs keeps the change.
Idempotent.
"""
import glob, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

RULES = {
    'en': [
        ('/en/art-jewellery-watches-insurance/', 'Art, jewellery &amp; watches',
         [('/en/jewellery-watch-insurance-spain/', 'Jewellery &amp; watches')]),
        ('/en/blog/luxury-car-insurance-portugal/', 'Classic &amp; high-value cars',
         [('/en/classic-car-insurance-spain/', 'Classic cars'), ('/en/luxury-car-insurance-spain/', 'Luxury cars')]),
    ],
    'de': [
        ('/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/', 'Oldtimer &amp; Luxusautos',
         [('/de/oldtimerversicherung-spanien/', 'Oldtimer'), ('/de/luxusauto-versicherung-spanien/', 'Luxusautos')]),
    ],
    'es': [
        ('/es/seguro-arte-joyas-mas-alla-valor-convenido/', 'Arte, joyas y relojes',
         [('/es/seguro-joyas-relojes-espana/', 'Joyas y relojes')]),
        ('/es/seguro-coches-clasicos-alto-valor-portugal-espana/', 'Coches clásicos y de alto valor',
         [('/es/seguro-vehiculos-clasicos-espana/', 'Coches clásicos'), ('/es/seguro-coche-lujo-espana/', 'Coches de lujo')]),
    ],
}


def block(s, marker):
    """Return (start, end) of the Spain panel that starts at `marker`."""
    i = s.find(marker)
    if i == -1:
        return None
    # desktop panel ends where the next nav-panel starts or the nav closes; mobile panel at its first closing div
    if 'navPanelES' in marker:
        ends = [x for x in (s.find('class="nav-panel"', i + 10), s.find('</nav>', i)) if x != -1]
    else:
        ends = [s.find('</div>', i)]
    return i, min(ends)


def fix(s, lang):
    n = 0
    for marker in ('id="navPanelES"', 'id="mobAccES"'):
        b = block(s, marker)
        if not b:
            continue
        i, j = b
        seg = s[i:j]
        for old_href, old_label, new in RULES[lang]:
            for role in (' role="menuitem"', ''):
                old = f'<a href="{old_href}"{role}>{old_label}</a>'
                if old in seg:
                    sep = '\n' + re.search(r'\n([ \t]*)' + re.escape(old), seg).group(1)
                    rep = sep.join(f'<a href="{h}"{role}>{l}</a>' for h, l in new)
                    seg = seg.replace(old, rep)
                    n += 1
        s = s[:i] + seg + s[j:]
    return s, n


if __name__ == '__main__':
    total = files = 0
    for lang in RULES:
        for f in sorted(glob.glob(str(ROOT / 'public' / lang / '**/index.html'), recursive=True)):
            s = Path(f).read_text(encoding='utf-8')
            s2, n = fix(s, lang)
            if n:
                Path(f).write_text(s2, encoding='utf-8')
                total += n
                files += 1
    print(f'{files} pages, {total} menu links updated')
