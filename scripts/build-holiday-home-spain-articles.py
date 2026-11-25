#!/usr/bin/env python3
"""
Holiday homes in Spain — two articles, November 2026.

  EN  /en/blog/uk-owners-spain-90-180-rule-holiday-home-insurance/
      UK owners, the Schengen 90/180-day rule and the empty months it creates.
  DE  /de/finca-villa-mallorca-versichern/
      Fincas and villas on Mallorca owned by German-speaking families.

Both are stand-alone (no translation pair): hreflang is self only, as on
/de/leerstand-ferienhaus-versicherung-portugal-spanien/.

The chrome is cloned from a live page of the same kind, so the pages stay in
step with the current navigation, footer, logo and forms:
  EN  public/en/blog/second-home-insurance-spain/        (EN blog article)
  DE  public/de/leerstand-ferienhaus-versicherung-portugal-spanien/ (DE article)

Content rules followed (owner decisions): no insurer-specific wording claims,
no fixed response times, no offer of calls, rebuild value from €700,000.

Run: python3 scripts/build-holiday-home-spain-articles.py
Re-running overwrites the two pages and refreshes their entry in
data/articles.json (EN only — DE stand-alone pages are not in that file).
"""
import json, re, html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = 'https://adlerrochefort.com'
PUBLISHED = '2026-11-18'


def swap(s, old, new, count=None):
    n = s.count(old)
    if n == 0 or (count is not None and n != count):
        raise SystemExit(f'template string found {n}x (expected {count}): {old[:90]}')
    return s.replace(old, new)


def between(s, start, end, include_end=True):
    i = s.index(start)
    j = s.index(end, i + len(start))
    return s[i:j + (len(end) if include_end else 0)]


def plain(x):
    return html.unescape(re.sub(r'<[^>]+>', '', x))


def faq_html(faq, wrap):
    return '\n'.join(wrap(q, a) for q, a in faq)


def faq_ld(faq):
    return [{"@type": "Question", "name": plain(q),
             "acceptedAnswer": {"@type": "Answer", "text": plain(a)}} for q, a in faq]


# ---------------------------------------------------------------------------
# EN — UK owners and the 90/180-day rule
# ---------------------------------------------------------------------------
EN = dict(
    slug='uk-owners-spain-90-180-rule-holiday-home-insurance',
    title='The 90/180-Day Rule and Your Spanish Holiday Home: What UK Owners Should Check',
    meta_title='UK Owners in Spain: the 90/180 Rule and Holiday Home Insurance',
    desc='Since Brexit, UK owners without residence can spend only 90 days in any 180 in Spain and Schengen. A villa that stands empty for longer needs a policy written for it. What to check.',
    standfirst='Since 2021, a British family without Spanish residence can spend at most 90 days in any 180 in the Schengen area. The house in Marbella or Mallorca stands empty for longer than it used to — and most policies were never reviewed when that changed.',
    tag='UK owners',
    image='/images/blog/topics/1600585154340-be6161a56a0c.jpg',
)

EN_TOC = [
    ('why-it-matters', 'Why the rule changes the insurance'),
    ('uk-policy', 'A UK home policy does not travel to Spain'),
    ('wording', 'What to check in the wording'),
    ('empty-months', 'Plan the empty months, not only the stay'),
    ('residence', 'If you become resident in Spain'),
    ('letting', 'Letting the villa while you cannot be there'),
    ('faq', 'Frequently asked questions'),
]

EN_INTRO = '''<h2 id="why-it-matters">Why the rule changes the insurance</h2>
<p>Since 1 January 2021, UK nationals who do not hold Spanish residence can stay in the Schengen area for up to 90 days in any rolling 180-day period. The limit is for the whole area, not for Spain alone: a week in France or a long weekend in Italy comes out of the same 90 days. Since the EU Entry/Exit System became fully operational on 10 April 2026, every entry and exit is recorded digitally, so the count is no longer a matter of passport stamps.</p>
<p>For a family that used to spend May to October in the villa, the practical result is simple: the house is now empty more often, and for longer stretches. That matters because the single most important question an insurer asks about a holiday home is not how many weeks a year it is used, but how long it stands empty at a time — and many owners are still insured on an answer they gave before 2021.</p>
<p>This article is for owners of villas and second homes in Spain with a rebuild value from €700,000, the market we work in. If that is your situation, see also <a href="/en/holiday-home-insurance-spain/">holiday and second home insurance in Spain</a>.</p>
'''

EN_BODY = '''<h2 id="uk-policy">A UK home policy does not travel to Spain</h2>
<p>A UK household policy is written for a property in the UK. A house in Spain is insured with a policy that covers a Spanish risk, and that policy carries the surcharge of the <em>Consorcio de Compensación de Seguros</em>, the public body that pays for extraordinary events in Spain — extraordinary flooding, storm surge, atypical cyclonic storms, earthquake. The Consorcio pays on the basis of the sums in your policy, so a house insured below its rebuild cost is under-compensated twice: by the insurer and by the Consorcio.</p>
<p>The sum that matters is the cost of rebuilding the house, not its market value. On the Costa del Sol or in the Balearics the land and the view are much of the price; natural stone, glazing, terraces, pools and garden walls are much of the rebuild cost. Under Spanish insurance law, if the sum insured is lower than the value at risk, the insurer pays in proportion — the <em>regla proporcional</em>.</p>

<h2 id="wording">What to check in the wording</h2>
<p>Holiday-home wordings differ from one insurer to the next, and the details below are exactly where they differ. These are the questions we answer in writing, for the specific wording we propose, before you commit:</p>
<ul>
<li><strong>When the house counts as unoccupied.</strong> Many policies attach conditions after a number of consecutive days without occupation. Check the number, and whether it counts consecutive days or a total across the year.</li>
<li><strong>What counts as occupation.</strong> Does a visit from the property manager or the cleaner reset the count, or must someone sleep in the house? The answer decides whether a winter with weekly inspections is "occupied" or not.</li>
<li><strong>What is restricted while it is empty.</strong> The restrictions, where they exist, usually concern theft, malicious damage and escape of water — the losses most likely to happen in a closed house.</li>
<li><strong>Conditions you must meet when you leave.</strong> Water turned off at the mains, the alarm set, shutters closed, valuables removed. If a condition applies, you should know it before you leave rather than read it in a claim letter.</li>
<li><strong>How the house is described.</strong> Main residence, second home or let: the description on the policy has to match the reality, including the empty months.</li>
</ul>
<p>For a closer look at the clause itself, read <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/">the unoccupancy clause that can void cover on an empty second home</a>.</p>

<h2 id="empty-months">Plan the empty months, not only the stay</h2>
<p>The 90/180 limit makes the empty periods predictable, which is an advantage: they can be organised. In practice, the owners whose claims go smoothly have four things in place.</p>
<ol>
<li><strong>A keyholder with a routine.</strong> A property manager who visits on a fixed schedule and records each visit — a short written report or dated photos. After a loss, the insurer will ask when the house was last checked.</li>
<li><strong>A monitored alarm.</strong> For a house of this value, insurers usually ask whether the alarm is connected to a monitoring centre and who responds to it.</li>
<li><strong>Water and heating settled before you go.</strong> A leak that would be noticed in an hour in a lived-in home can run for weeks in a closed villa.</li>
<li><strong>Valuables taken home or insured on their own.</strong> Holiday-home policies generally leave jewellery and watches out. If they stay in Spain, they need a separate policy: see <a href="/en/art-jewellery-watches-insurance/">art, jewellery and watch insurance</a>.</li>
</ol>

<h2 id="residence">If you become resident in Spain</h2>
<p>Owners who obtain Spanish residence — for example through a non-lucrative visa — are no longer bound by the 90-day limit, and the villa may become their main residence. That is a change the policy has to reflect: a main residence is described, rated and sometimes insured under a different wording from a holiday home. If that is your plan, see <a href="/en/home-insurance-spain/">high-value home insurance in Spain</a>. Residence and tax questions themselves are for a Spanish lawyer or tax adviser.</p>

<h2 id="letting">Letting the villa while you cannot be there</h2>
<p>Some owners let the villa in the months the rule keeps them away. In most Spanish regions that requires a tourist licence, and it must be declared to the insurer before the first guest arrives: liability towards guests, damage and theft by occupants and loss of rent are questions a policy for private use does not answer. Tell us how many weeks a year the house is let and through whom, and we set out in writing what the wording has to include.</p>

<div class="callout">
<div class="callout-title">Where this leads</div>
<p>Send us where the house is, its rebuild value, how the year really looks — the weeks you are there, the weeks it is empty, the weeks it is let — and your current policy. We reply in writing with what we recommend. See <a href="/en/holiday-home-insurance-spain/">holiday and second home insurance in Spain</a>.</p>
</div>
'''

EN_FAQ = [
    ('Does the 90/180-day rule apply to Spain only?',
     'No. It applies to the Schengen area as a whole. Days spent in France, Portugal or Italy count towards the same 90 days as days in Spain.'),
    ('Does my insurer know when I am in Spain?',
     'Not in advance. After a claim, though, an insurer can ask when the house was last occupied or checked. Travel records, the property manager’s visit reports and utility bills are the usual evidence, so it pays to keep them.'),
    ('Can a British insurer cover my villa in Spain?',
     'A standard UK household policy covers property in the UK. A house in Spain needs a policy written for a Spanish risk, which also carries the Consorcio surcharge for extraordinary events.'),
    ('Is there a minimum value?',
     'We work with holiday homes in Spain with a rebuild value from €700,000. For smaller properties we are not the right adviser.'),
]

# ---------------------------------------------------------------------------
# DE — Finca oder Villa auf Mallorca
# ---------------------------------------------------------------------------
DE = dict(
    slug='finca-villa-mallorca-versichern',
    title='Finca oder Villa auf Mallorca versichern: Was Eigentümer prüfen sollten',
    meta_title='Finca auf Mallorca versichern: Was Eigentümer prüfen sollten',
    desc='Finca oder Villa auf Mallorca: Wiederaufbauwert statt Kaufpreis, Tramuntana-Stürme und Starkregen, Leerstand, Vermietung und Personal. Worauf es bei der Versicherung ankommt.',
    sub='Für viele Familien aus Deutschland, Österreich und der Schweiz ist die Finca auf Mallorca das zweite Zuhause. Versichert ist sie oft so, als wäre sie ein Haus in Deutschland — oder mit der Police, die beim Kauf über die Bank kam.',
    crumb='Mallorca',
)

DE_SECTIONS = '''<section class="lp-section">
  <h2>Eine deutsche Gebäudeversicherung reicht nicht</h2>
  <p>Eine Wohngebäudeversicherung aus Deutschland ist für ein Haus in Deutschland geschrieben. Eine Immobilie auf Mallorca wird mit einer Police versichert, die ein spanisches Risiko deckt — und diese Police enthält den Zuschlag des <em>Consorcio de Compensación de Seguros</em>. Das Consorcio ist die öffentliche Einrichtung, die in Spanien außergewöhnliche Ereignisse bezahlt: außergewöhnliche Überschwemmung, Sturmflut, atypischer Zyklonsturm (Wind über 120 km/h), Erdbeben. Es leistet auf Basis der Summen Ihrer Police.</p>
  <p>Auch die Police, die die Bank mit der Hypothek angeboten hat, muss nicht bleiben: Nach dem spanischen Hypothekenkreditgesetz (Ley 5/2019) kann die Bank eine Gebäudeversicherung verlangen, muss aber die Police eines anderen Versicherers mit gleichwertiger Deckung akzeptieren. Eine mit dem Kredit abgeschlossene Police ist selten für eine hochwertige Finca geschrieben.</p>
</section>

<section class="lp-section">
  <h2>Wiederaufbauwert statt Kaufpreis</h2>
  <p>Auf Mallorca bezahlen Sie beim Kauf vor allem Lage, Grundstück und Blick. Versichert wird aber, was der Wiederaufbau des Hauses kosten würde: Natursteinmauern, alte Holzbalken, Ziegeldächer, Terrassen, Pool, Trockenmauern und Nebengebäude. Bei einer restaurierten Finca liegen diese Kosten oft deutlich über dem, was ein Standardsatz pro Quadratmeter ergibt — handwerkliche Arbeit mit traditionellen Materialien ist auf der Insel teuer und knapp.</p>
  <p>Liegt die Versicherungssumme unter dem tatsächlichen Wert, zahlt der Versicherer nach spanischem Versicherungsrecht nur anteilig (<em>regla proporcional</em>) — und das Consorcio ebenso. Mehr dazu: <a href="/de/unterversicherung-hausversicherung-portugal-spanien/">Unterversicherung in Portugal und Spanien</a>.</p>
</section>

<section class="lp-section">
  <h2>Wetter auf der Insel</h2>
  <p>Mallorca kennt zwei Arten von Unwetter, und sie werden unterschiedlich bezahlt. Die gewöhnlichen Herbst- und Winterstürme aus Norden, die über die Serra de Tramuntana ziehen, beschädigen Dächer, Verglasungen, Markisen, Bäume und Gartenmauern; sie fallen unter die Police, mit deren Grenzen und Selbstbehalten. Starkregen im Herbst (<em>gota fría</em> oder DANA) kann die sonst trockenen Sturzbäche, die <em>torrentes</em>, in wenigen Stunden füllen; erreicht ein Ereignis die gesetzliche Definition einer außergewöhnlichen Überschwemmung, zahlt das Consorcio.</p>
  <p>Für ein Haus an der Küste oder in der Nähe eines Torrente lohnt es sich, vor der Wahl der Police zu klären, welche Schäden über die Police und welche über das Consorcio laufen — und ob die Summen für beide stimmen.</p>
</section>

<section class="lp-section">
  <h2>Abgelegen und lange leer</h2>
  <p>Eine Finca im Inselinneren ist oft weit vom nächsten Nachbarn entfernt und steht zwischen den Aufenthalten wochenlang leer. Viele Ferienhaus-Bedingungswerke knüpfen an längere Zeiten ohne Bewohnung Bedingungen, meist bei Diebstahl und Leitungswasser; wie viele Tage, und ob der Besuch des Hausverwalters als Bewohnung gilt, ist je nach Versicherer verschieden. Lesen Sie dazu <a href="/de/leerstand-ferienhaus-versicherung-portugal-spanien/">die Leerstandsklausel im Ferienhaus</a>.</p>
  <ul class="lp-list">
    <li><strong>Alarmanlage:</strong> aufgeschaltet auf eine Notrufzentrale, mit klarer Regelung, wer im Alarmfall hinfährt.</li>
    <li><strong>Hausverwalter:</strong> feste Kontrollen, jeweils dokumentiert — nach einem Schaden fragt der Versicherer, wann zuletzt jemand im Haus war.</li>
    <li><strong>Wasser:</strong> Zisterne, Brunnen, Pumpen und Bewässerung vor der Abreise geregelt; ein Leck läuft in einem leeren Haus wochenlang.</li>
    <li><strong>Schlüssel:</strong> wer sie hat — Verwaltung, Reinigung, Gärtner, Poolservice.</li>
  </ul>
</section>

<section class="lp-section">
  <h2>Vermietung</h2>
  <p>Wer die Finca in den Wochen vermietet, in denen die Familie nicht da ist, braucht auf den Balearen eine touristische Registrierung, und die Regeln sind in den letzten Jahren strenger geworden. Die Vermietung muss dem Versicherer gemeldet werden, bevor der erste Gast kommt: Haftung gegenüber Gästen, Schäden und Diebstahl durch Mieter und Mietausfall sind Fragen, die eine Police für die private Nutzung nicht beantwortet.</p>
</section>

<section class="lp-section">
  <h2>Pool, Gäste und Personal</h2>
  <p>Freunde und Familie, die die Finca in Ihrer Abwesenheit nutzen, eine Haushaltshilfe, ein Gärtner, ein Pool: Ein Ferienhaus schafft Haftung, auch wenn Sie nicht da sind. Die Deckungssumme sollte zum Vermögen der Familie passen und kann in einer <a href="/de/privathaftpflicht-spanien/">Privathaftpflicht</a> liegen, die alle Häuser der Familie umfasst. Schmuck, Uhren und Kunst sind in Ferienhaus-Policen meist ausgeschlossen oder begrenzt und gehören in eine eigene Police: <a href="/de/schmuck-uhren-versicherung-portugal-spanien/">Kunst, Schmuck und Uhren</a>.</p>
</section>

<section class="lp-section">
  <h2>Checkliste vor der Wahl der Police</h2>
  <ol class="lp-steps">
    <li><strong>Wiederaufbauwert</strong> ermitteln, nicht den Kaufpreis übernehmen.</li>
    <li><strong>Nutzung korrekt angeben:</strong> Wochen mit Familie, Wochen leer, Wochen vermietet.</li>
    <li><strong>Sicherheit beschreiben:</strong> Alarmanlage, Aufschaltung, Schlüsselverwalter, Kontrollen.</li>
    <li><strong>Lage prüfen:</strong> Küste, Torrente, Hanglage, Zufahrt.</li>
    <li><strong>Bestehende Policen vorlegen</strong>, auch die der Bank und die der Eigentümergemeinschaft bei Wohnungen.</li>
  </ol>
  <p>Wir arbeiten mit Ferienhäusern ab 700.000 € Wiederaufbauwert und legen die Punkte oben für jedes vorgeschlagene Bedingungswerk schriftlich dar. Mehr dazu: <a href="/de/ferienhausversicherung-spanien/">Ferienhausversicherung in Spanien</a> und <a href="/de/destinationen/mallorca/">Mallorca</a>.</p>
</section>
'''

DE_FAQ = [
    ('Gilt meine deutsche Wohngebäudeversicherung auch für die Finca auf Mallorca?',
     'In der Regel nein. Eine deutsche Wohngebäudeversicherung ist für Gebäude in Deutschland geschrieben. Die Finca braucht eine Police für ein spanisches Risiko, die auch den Consorcio-Zuschlag für außergewöhnliche Ereignisse enthält.'),
    ('Muss ich die Police der Bank behalten?',
     'Nein. Die Bank kann eine Gebäudeversicherung auf das belastete Haus verlangen, muss nach spanischem Hypothekenkreditrecht aber eine Police eines anderen Versicherers mit gleichwertiger Deckung akzeptieren.'),
    ('Wer zahlt nach einem Unwetter?',
     'Gewöhnliche Sturm- und Regenschäden zahlt der Versicherer im Rahmen der Police. Außergewöhnliche Ereignisse nach gesetzlicher Definition — etwa eine außergewöhnliche Überschwemmung oder ein atypischer Zyklonsturm — zahlt das Consorcio de Compensación de Seguros, auf Basis der Summen Ihrer Police.'),
    ('Gibt es einen Mindestwert?',
     'Ja: Wiederaufbauwert ab 700.000 €. Für kleinere Objekte sind wir nicht der richtige Makler.'),
]


# ---------------------------------------------------------------------------
# Builders
# ---------------------------------------------------------------------------
def build_en():
    src_slug = 'second-home-insurance-spain'
    t = (ROOT / 'public/en/blog' / src_slug / 'index.html').read_text(encoding='utf-8')
    a = EN
    url = f'{ORIGIN}/en/blog/{a["slug"]}/'

    # Head
    old_title = re.search(r'<title>(.*?)</title>', t).group(1)
    t = swap(t, f'<title>{old_title}</title>', f'<title>{html.escape(a["meta_title"], quote=False)}</title>', 1)
    t = swap(t, f'content="{old_title}"', f'content="{html.escape(a["meta_title"])}"')
    old_desc = re.search(r'<meta name="description" content="([^"]*)"', t).group(1)
    t = swap(t, old_desc, html.escape(a['desc']))
    t = re.sub(r'(<meta property="article:(?:published|modified)_time" content=")[^"]*',
               lambda m: m.group(1) + f'{PUBLISHED}T09:00:00+00:00', t)
    old_head = re.search(r'"headline": "([^"]*)"', t).group(1)
    t = swap(t, f'"headline": "{old_head}"', f'"headline": {json.dumps(a["title"], ensure_ascii=False)}', 1)
    t = re.sub(r'"date(Published|Modified)": "[^"]*"', lambda m: f'"date{m.group(1)}": "{PUBLISHED}T09:00:00+00:00"', t)
    faq_block = between(t, '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage"', '</script>')
    t = swap(t, faq_block, '<script type="application/ld+json">\n' + json.dumps(
        {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq_ld(EN_FAQ)},
        ensure_ascii=False, indent=2) + '\n</script>', 1)
    t = swap(t, f'"name": "{old_head}"', f'"name": {json.dumps(a["title"], ensure_ascii=False)}', 1)
    t = t.replace(f'/en/blog/{src_slug}/', f'/en/blog/{a["slug"]}/')
    t = t.replace(f'blog:{src_slug}', f'blog:{a["slug"]}').replace(f'-{src_slug}"', f'-{a["slug"]}"')

    # Breadcrumb
    t = re.sub(r'(<a href="/en/blog/">Insights</a><span aria-hidden="true">&rsaquo;</span>\n)\s*[^\n<]+\n',
               lambda m: m.group(1) + f'  {html.escape(a["title"], quote=False)}\n', t, count=1)

    # Article
    art = between(t, '<article class="article-container">', '</article>')
    form = between(art, '<!-- ar-short-form -->', '</form>\n') + between(art[art.index('</form>'):], '\n', '</div>')[1:]
    toc = '\n'.join(f'<li><a href="#{i}">{h}</a></li>' for i, h in EN_TOC)
    faq = faq_html(EN_FAQ, lambda q, a_: f'<h3>{q}</h3>\n<p>{a_}</p>\n')
    tail = between(art, '<p style="border-top:1px solid #D1CFCE', '</p>')
    cta = between(art, '<div class="article-cta">', '</div>')
    author = between(art, '<div class="article-author">', '    </div>\n  </div>')
    new_art = f'''<article class="article-container">
  <img src="{a["image"]}" alt="{html.escape(a["title"])}" class="article-featured-image" style="width:100%;height:auto;max-height:420px;object-fit:cover;border-radius:12px;margin:0 0 1.5rem;" width="1400" height="788">

  <div class="article-tag">{a["tag"]}</div>
  <h1 class="article-title">{html.escape(a["title"], quote=False)}</h1>
  <p class="article-standfirst">{a["standfirst"]}</p>
  <div class="article-date"><time datetime="{PUBLISHED}T09:00:00+00:00">November 2026</time></div>

  {author}

  <nav class="article-toc" aria-labelledby="toc-title">
    <div class="article-toc-title" id="toc-title">On this page</div>
    <ol>
{toc}
    </ol>
  </nav>

  <div class="article-body">

{EN_INTRO}
    {form}
{EN_BODY}
<h2 id="faq">Frequently asked questions</h2>

{faq}
{tail.replace('not immigration, legal or tax advice', 'not immigration, legal or tax advice. Cover, conditions, limits and exclusions depend on the insurer, the policy wording and the acceptance of the risk')}

  </div>

  {cta.replace('situation=second_home', 'situation=second_home')}
</article>'''
    t = swap(t, art, new_art, 1)

    related = between(t, '<section class="related-section">', '</section>')
    t = swap(t, related, '''<section class="related-section">
  <h2 class="related-title">Related reading</h2>
  <div class="related-grid">
    <a href="/en/holiday-home-insurance-spain/" class="related-card">
      <div class="related-card-tag">Holiday homes</div>
      <div class="related-card-title">Holiday and second home insurance in Spain</div>
    </a>
    <a href="/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/" class="related-card">
      <div class="related-card-tag">Second homes</div>
      <div class="related-card-title">The unoccupancy clause that can void cover</div>
    </a>
    <a href="/en/blog/second-home-insurance-spain/" class="related-card">
      <div class="related-card-tag">Second home</div>
      <div class="related-card-title">Second home insurance in Spain: what to check</div>
    </a>
  </div>
</section>''', 1)
    assert src_slug not in t.replace('/en/blog/second-home-insurance-spain/', ''), 'template slug left behind'
    t = t.replace('E.g. villa in the Algarve, family of four, moving to Portugal in January…', 'E.g. villa in Marbella, used in spring and autumn, empty in winter…')
    out = ROOT / 'public/en/blog' / a['slug'] / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(t, encoding='utf-8')

    # data/articles.json
    dpath = ROOT / 'data/articles.json'
    d = json.loads(dpath.read_text(encoding='utf-8'))
    en = [x for x in d['articles']['en'] if x['slug'] != a['slug']]
    words = len(re.sub(r'<[^>]+>', ' ', EN_INTRO + EN_BODY).split())
    en.append({
        "slug": a['slug'], "lang": "en", "status": "published", "url": f'/en/blog/{a["slug"]}/',
        "category": "spain-property", "tag": a['tag'], "title": a['title'], "metaTitle": a['meta_title'],
        "description": a['desc'], "excerpt": plain(a['standfirst']), "image": a['image'], "imageGradient": None,
        "imageAlt": a['title'], "published": f'{PUBLISHED}T09:00:00+00:00', "modified": f'{PUBLISHED}T09:00:00+00:00',
        "dateLabel": "November 2026", "readingTime": max(3, round(words / 220)), "featured": False, "translationOf": None,
    })
    d['articles']['en'] = en
    dpath.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return out


def build_de():
    src_slug = 'leerstand-ferienhaus-versicherung-portugal-spanien'
    t = (ROOT / 'public/de' / src_slug / 'index.html').read_text(encoding='utf-8')
    a = DE
    url = f'{ORIGIN}/de/{a["slug"]}/'
    old_title = re.search(r'<title>(.*?)</title>', t).group(1)
    t = swap(t, old_title, html.escape(a['meta_title'], quote=False))
    old_desc = re.search(r'<meta name="description" content="([^"]*)"', t).group(1)
    t = swap(t, old_desc, html.escape(a['desc']))
    t = t.replace('og-adlerrochefort-en.png', 'og-adlerrochefort-de.png')
    t = t.replace('<meta property="og:type" content="website">', '<meta property="og:type" content="article">')

    t = t.replace(f'/de/{src_slug}/', f'/de/{a["slug"]}/').replace(f'page:de/{src_slug}', f'page:de/{a["slug"]}')
    t = t.replace(f'-de-{src_slug}-"', f'-de-{a["slug"]}-"')
    main = between(t, '<main id="main">', '</main>')
    hero_old = between(main, '<section class="lp-hero">', '</section>')
    author = between(main, '<!-- AR-AUTHOR -->', '</div></div>')
    criteria = between(main, '<!-- AR-PROPERTY-CRITERIA:holiday -->', '<!-- /AR-PROPERTY-CRITERIA -->')
    partners = between(main, '<section class="ar-partners-inst"', '</section>')
    form = between(main, '<!-- ar-quick-contact -->', '</form>\n  \n</div>')
    legal = between(main, '<section class="lp-section">\n  <div class="lp-card lp-card--muted">', '</section>')
    faq = faq_html(DE_FAQ, lambda q, a_: f'  <h3>{q}</h3>\n  <p>{a_}</p>')
    new_main = f'''<main id="main">
<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/de/">Startseite</a><span>&rsaquo;</span><a href="/de/private-clients/">Private Clients</a><span>&rsaquo;</span><a href="/de/{a["slug"]}/">{a["crumb"]}</a></nav>

<section class="lp-hero">
  <div class="lp-hero-inner">
    <div>
      <h1>{html.escape(a["title"], quote=False)}</h1>
      <p class="lp-hero-sub">{a["sub"]}</p>
      <div class="lp-hero-actions">
        <a href="#anfrage" class="btn-primary">Schriftliche Einschätzung anfragen</a>
        <a href="/de/ferienhausversicherung-spanien/" class="btn-ghost">Ferienhaus in Spanien</a>
      </div>
    </div>
  </div>
</section>
{author}


{criteria}
{partners}
{DE_SECTIONS}
<section class="lp-section" id="anfrage">
  {form}
</section>

<section class="lp-section" id="faq">
  <h2>Häufige Fragen</h2>
{faq}
</section>

<section class="lp-section">
  <h2>Weiterlesen</h2>
  <div class="hnw-dest-grid">
    <a class="hnw-dest" href="/de/ferienhausversicherung-spanien/"><strong>Ferienhausversicherung Spanien</strong></a>
    <a class="hnw-dest" href="/de/leerstand-ferienhaus-versicherung-portugal-spanien/"><strong>Die Leerstandsklausel</strong></a>
    <a class="hnw-dest" href="/de/destinationen/mallorca/"><strong>Mallorca</strong></a>
  </div>
</section>

{legal}
</main>'''
    t = swap(t, main, new_main, 1)

    ld = between(t, '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@graph"', '</script>')
    g = json.loads(ld[ld.index('{'):-len('</script>')])
    for node in g['@graph']:
        if node.get('@type') == 'Article':
            node.update({"@id": url + '#article', "headline": a['title'], "description": a['desc'], "url": url,
                         "datePublished": PUBLISHED, "dateModified": PUBLISHED, "mainEntityOfPage": url})
        elif node.get('@type') == 'BreadcrumbList':
            node['itemListElement'][2].update({"name": a['crumb'], "item": url})
        elif node.get('@type') == 'FAQPage':
            node['mainEntity'] = faq_ld(DE_FAQ)
    t = swap(t, ld, '<script type="application/ld+json">\n' + json.dumps(g, ensure_ascii=False, indent=2) + '\n</script>', 1)
    assert src_slug not in t.replace(f'/de/{src_slug}/', ''), 'template slug left behind'
    out = ROOT / 'public/de' / a['slug'] / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(t, encoding='utf-8')
    return out


if __name__ == '__main__':
    for p in (build_en(), build_de()):
        print('wrote', p.relative_to(ROOT))
