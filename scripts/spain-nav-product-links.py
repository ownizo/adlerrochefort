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


# November 2026, second pass: the other languages.
RULES.update({
    'nl': [('/nl/kunst-sieraden-verzekering-boven-getaxeerde-waarde/', 'Kunst, sieraden &amp; horloges', [('/nl/sieraden-horloges-verzekering-spanje/', 'Sieraden &amp; horloges')]),
           ('/nl/klassieke-auto-verzekering-portugal-spanje/', "Klassieke &amp; waardevolle auto's", [('/nl/klassieke-auto-verzekering-spanje/', "Klassieke auto's"), ('/nl/luxe-auto-verzekering-spanje/', "Luxe auto's")])],
    'fr': [('/fr/assurance-art-bijoux-montres/', 'Œuvres, bijoux et montres', [('/fr/assurance-bijoux-montres-espagne/', 'Bijoux et montres')]),
           ('/fr/assurance-voitures-collection-prestige/', 'Voitures de collection et de prestige', [('/fr/assurance-voitures-collection-espagne/', 'Voitures de collection'), ('/fr/assurance-voiture-luxe-espagne/', 'Voitures de luxe')])],
    'it': [('/it/assicurazione-arte-gioielli-oltre-valore-concordato/', 'Arte, gioielli e orologi', [('/it/assicurazione-gioielli-orologi-spagna/', 'Gioielli e orologi')]),
           ('/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/', "Auto d'epoca e di pregio", [('/it/assicurazione-auto-epoca-spagna/', "Auto d'epoca"), ('/it/assicurazione-auto-lusso-spagna/', 'Auto di lusso')])],
    'pl': [('/pl/ubezpieczenie-sztuki-bizuterii-ponad-wartosc-uzgodniona/', 'Sztuka, biżuteria i zegarki', [('/pl/ubezpieczenie-bizuterii-zegarkow-hiszpania/', 'Biżuteria i zegarki')]),
           ('/pl/ubezpieczenie-samochodow-klasycznych-portugalia-hiszpania/', 'Samochody klasyczne i luksusowe', [('/pl/ubezpieczenie-samochodu-klasycznego-hiszpania/', 'Samochody klasyczne'), ('/pl/ubezpieczenie-samochodu-luksusowego-hiszpania/', 'Samochody luksusowe')])],
    'se': [('/se/konst-smycken-forsakring-utover-avtalat-varde/', 'Konst, smycken och klockor', [('/se/smycken-klockor-forsakring-spanien/', 'Smycken och klockor')]),
           ('/se/veteranbil-forsakring-portugal-spanien/', 'Veteran- och lyxbilar', [('/se/veteranbilsforsakring-spanien/', 'Veteranbilar'), ('/se/lyxbilsforsakring-spanien/', 'Lyxbilar')])],
    'dk': [('/dk/kunst-smykker-forsikring-ud-over-aftalt-vaerdi/', 'Kunst, smykker og ure', [('/dk/smykker-ure-forsikring-spanien/', 'Smykker og ure')]),
           ('/dk/veteranbil-forsikring-portugal-spanien/', 'Veteran- og luksusbiler', [('/dk/veteranbilforsikring-spanien/', 'Veteranbiler'), ('/dk/luksusbil-forsikring-spanien/', 'Luksusbiler')])],
    'zh': [('/zh/art-jewellery-beyond-agreed-value/', '艺术品、珠宝与腕表', [('/zh/jewellery-watch-insurance-spain/', '珠宝与腕表')]),
           ('/zh/classic-car-insurance-portugal-spain/', '经典车与高价值汽车', [('/zh/classic-car-insurance-spain/', '经典车'), ('/zh/luxury-car-insurance-spain/', '豪华车')])],
    'il': [('/il/art-jewellery-beyond-agreed-value/', 'אמנות, תכשיטים ושעונים', [('/il/jewellery-watch-insurance-spain/', 'תכשיטים ושעונים')]),
           ('/il/classic-car-insurance-portugal-spain/', 'רכבי אספנות ויוקרה', [('/il/classic-car-insurance-spain/', 'רכבים קלאסיים'), ('/il/luxury-car-insurance-spain/', 'רכבי יוקרה')])],
})

PT_AFTER = 'href="/private-clients/automoveis-classicos/"'
PT_NEW = [('/seguros/joias-relogios-espanha/', 'Joias e relógios — Espanha'), ('/seguros/carros-classicos-espanha/', 'Automóveis clássicos — Espanha'),
          ('/seguros/carros-luxo-espanha/', 'Automóveis de luxo — Espanha')]


def fix_pt(s):
    """PT nav has no Spain panel: add the three Spain lines after the classic-cars line (desktop and mobile)."""
    if 'href="/seguros/carros-luxo-espanha/"' in s.split('</nav>')[0] and 'id="macc-private"' not in s:
        return s, 0
    n = 0
    def rep(m):
        nonlocal n
        line, indent = m.group(0), m.group(1)
        role = ' role="menuitem"' if 'role="menuitem"' in line else ''
        n += 1
        return line + ''.join(f'\n{indent}<a href="{h}"{role}>{l}</a>' for h, l in PT_NEW)
    for block_id in ('id="nav-panel-private"', 'id="macc-private"'):
        i = s.find(block_id)
        if i == -1:
            continue
        j = s.find('</div>', i)
        seg = s[i:j]
        if 'carros-luxo-espanha' in seg:
            continue
        seg2 = re.sub(r'\n([ \t]*)<a href="/private-clients/automoveis-classicos/"[^>]*>[^<]*</a>', rep, seg, count=1)
        s = s[:i] + seg2 + s[j:]
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
    pt_files = 0
    for f in sorted(glob.glob(str(ROOT / 'public' / '**/index.html'), recursive=True)):
        rel = f[len(str(ROOT / 'public')) + 1:]
        if rel.split('/')[0] in ('en', 'de', 'es', 'nl', 'fr', 'it', 'pl', 'se', 'dk', 'zh', 'il', 'br'):
            continue
        s = Path(f).read_text(encoding='utf-8')
        s2, n = fix_pt(s)
        if n:
            Path(f).write_text(s2, encoding='utf-8')
            pt_files += 1
    print(f'{files} pages, {total} menu links updated; {pt_files} PT pages')
