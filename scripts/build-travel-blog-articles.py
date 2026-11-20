#!/usr/bin/env python3
"""
Travel-insurance article series — EN and DE, November 2026.

  EN  /en/blog/<slug>/   10 articles, copy in scripts/travel_blog_en.py
  DE  /de/<slug>/         9 stand-alone pages, copy in scripts/travel_blog_de.py

Each article points to the online quote tool on the travel insurance page of
its language (/en/travel-insurance/#tq, /de/reiseversicherung/#tq) and, where
the topic leads there, to the health insurance or valuables pages.

Stand-alone pages (no translation pair; hreflang self only), like the other
November 2026 articles. The chrome is cloned from live pages of the same kind:
  EN  public/en/blog/uk-owners-spain-90-180-rule-holiday-home-insurance/
      (the Spain sub-navigation is dropped: these articles cover both markets)
  DE  public/de/finca-villa-mallorca-versichern/
      (property criteria, insurer list and property note are dropped)

Content rules followed (owner decisions): no insurer-specific wording claims,
no fixed response times, no offer of calls; APRIL International products are
not part of this series.

Run: python3 scripts/build-travel-blog-articles.py
Re-running overwrites the pages and refreshes their entries in
data/articles.json (EN only — DE stand-alone pages are not in that file).
Then run the listing, sitemap and llms generators (see README / commit).
"""
import json, re, html, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))
from travel_blog_en import ARTICLES as EN, TQ as EN_TQ  # noqa: E402
from travel_blog_de import ARTICLES as DE, TQ as DE_TQ  # noqa: E402

ORIGIN = 'https://adlerrochefort.com'
PUBLISHED = '2026-11-20'
EN_TEMPLATE = 'uk-owners-spain-90-180-rule-holiday-home-insurance'
DE_TEMPLATE = 'finca-villa-mallorca-versichern'

EN_CATEGORY = {
    'portugal-d7-d8-visa-travel-insurance-repatriation': 'moving-to-portugal',
    'schengen-visa-travel-insurance-portugal-spain': 'personal-family',
    'spain-digital-nomad-visa-insurance-requirements': 'spain-health',
    'insurance-gap-arrival-residence-permit-portugal-spain': 'moving-to-portugal',
    'travel-insurance-vs-international-health-insurance-frequent-travellers': 'health-insurance',
    'annual-multi-trip-travel-insurance-second-home-owners': 'personal-family',
    'travel-insurance-jewellery-watches-limits': 'valuables-collections',
    'golf-travel-insurance-portugal-spain': 'personal-family',
    'medicare-coverage-portugal-spain-travel-insurance': 'health-insurance',
    'ghic-vs-travel-insurance-spain-portugal': 'personal-family',
}


def swap(s, old, new, count=None):
    n = s.count(old)
    if n == 0 or (count is not None and n != count):
        raise SystemExit(f'template string found {n}x (expected {count}): {old[:90]}')
    return s.replace(old, new)


def between(s, start, end):
    i = s.index(start)
    j = s.index(end, i + len(start))
    return s[i:j + len(end)]


def plain(x):
    return html.unescape(re.sub(r'<[^>]+>', '', x))


def faq_ld(faq):
    return [{"@type": "Question", "name": plain(q),
             "acceptedAnswer": {"@type": "Answer", "text": plain(a)}} for q, a in faq]


def ld_block(obj):
    return '<script type="application/ld+json">\n' + json.dumps(obj, ensure_ascii=False, indent=2) + '\n</script>'


# ---------------------------------------------------------------------------
# EN
# ---------------------------------------------------------------------------
EN_SRC = (ROOT / 'public/en/blog' / EN_TEMPLATE / 'index.html').read_text(encoding='utf-8')


def build_en(a):
    t = EN_SRC
    src = EN_TEMPLATE
    url = f'{ORIGIN}/en/blog/{a["slug"]}/'

    # Head
    old_title = re.search(r'<title>(.*?)</title>', t).group(1)
    t = swap(t, f'<title>{old_title}</title>', f'<title>{html.escape(a["meta_title"], quote=False)}</title>', 1)
    t = swap(t, f'content="{old_title}"', f'content="{html.escape(a["meta_title"])}"')
    old_desc = re.search(r'<meta name="description" content="([^"]*)"', t).group(1)
    t = swap(t, f'content="{old_desc}"', f'content="{html.escape(a["desc"])}"')
    t = re.sub(r'(<meta property="article:(?:published|modified)_time" content=")[^"]*',
               lambda m: m.group(1) + f'{PUBLISHED}T09:00:00+00:00', t)
    art_ld = between(t, '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Article"', '</script>')
    g = json.loads(art_ld[art_ld.index('{'):-len('</script>')])
    g.update({"headline": a['title'], "description": a['desc'],
              "datePublished": f'{PUBLISHED}T09:00:00+00:00', "dateModified": f'{PUBLISHED}T09:00:00+00:00'})
    t = swap(t, art_ld, ld_block(g), 1)
    faq_block = between(t, '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage"', '</script>')
    t = swap(t, faq_block, ld_block({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq_ld(a['faq'])}), 1)
    bc = between(t, '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "BreadcrumbList"', '</script>')
    b = json.loads(bc[bc.index('{'):-len('</script>')])
    b['itemListElement'][2]['name'] = a['title']
    t = swap(t, bc, ld_block(b), 1)
    t = t.replace(f'/en/blog/{src}/', f'/en/blog/{a["slug"]}/')
    t = t.replace(f'blog:{src}', f'blog:{a["slug"]}').replace(f'-{src}"', f'-{a["slug"]}"')

    # Spain sub-navigation: not for a two-market series
    sub = between(t, '<div class="spain-subnav" aria-label="Insurance in Spain">', '</div>\n')
    t = swap(t, sub, '', 1)

    # Breadcrumb
    t = re.sub(r'(<a href="/en/blog/">Insights</a><span aria-hidden="true">&rsaquo;</span>\n)\s*[^\n<]+\n',
               lambda m: m.group(1) + f'  {html.escape(a["title"], quote=False)}\n', t, count=1)

    # Article
    art = between(t, '<article class="article-container">', '</article>')
    form = between(art, '<!-- ar-short-form -->', '</form>\n') + between(art[art.index('</form>'):], '\n', '</div>')[1:]
    form = swap(form, '<select ', '<select ', 1)
    sel = re.search(r'(<select [^>]*name="tipo-seguro"[^>]*>)(.*?)(</select>)', form)
    opts = '<option value="Travel insurance">Travel insurance</option>' + sel.group(2)
    want = a['form']
    if f'<option value="{want}">' not in opts:
        raise SystemExit('form option not found: ' + want)
    opts = opts.replace(f'<option value="{want}">', f'<option value="{want}" selected>', 1)
    form = form.replace(sel.group(0), sel.group(1) + opts + sel.group(3))
    form = re.sub(r'placeholder="[^"]*"></textarea>',
                  'placeholder="E.g. destinations, dates, ages of travellers, country of residence…"></textarea>', form, count=1)
    toc = '\n'.join(f'<li><a href="#{i}">{h}</a></li>' for i, h in a['toc'])
    faq = '\n'.join(f'<h3>{q}</h3>\n<p>{ans}</p>\n' for q, ans in a['faq'])
    tail = between(art, '<p style="border-top:1px solid #D1CFCE', '</p>')
    author = between(art, '<div class="article-author">', '    </div>\n  </div>')
    body = a['body'].replace('{tq}', EN_TQ)
    intro = a['intro'].replace('{tq}', EN_TQ)
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

{intro}
    {form}
{body}
<h2 id="faq">Frequently asked questions</h2>

{faq}
{tail}

  </div>

  <div class="article-cta">
    <p>Compare travel insurance from several insurers by medical cover, repatriation and cancellation, with the policy documents shown before you pay.</p>
    <a href="{EN_TQ}">Compare travel insurance online &rarr;</a>
  </div>
</article>'''
    t = swap(t, art, new_art, 1)

    related = between(t, '<section class="related-section">', '</section>')
    cards = '\n'.join(f'''    <a href="{u}" class="related-card">
      <div class="related-card-tag">{tag}</div>
      <div class="related-card-title">{title}</div>
    </a>''' for u, tag, title in a['related'])
    t = swap(t, related, f'''<section class="related-section">
  <h2 class="related-title">Related reading</h2>
  <div class="related-grid">
{cards}
  </div>
</section>''', 1)
    assert src not in t.replace(f'href="/en/blog/{src}/"', ''), 'template slug left behind'
    out = ROOT / 'public/en/blog' / a['slug'] / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(t, encoding='utf-8')
    words = len(re.sub(r'<[^>]+>', ' ', a['intro'] + a['body']).split())
    return out, {
        "slug": a['slug'], "lang": "en", "status": "published", "url": f'/en/blog/{a["slug"]}/',
        "category": EN_CATEGORY[a['slug']], "tag": plain(a['tag']), "title": a['title'], "metaTitle": a['meta_title'],
        "description": a['desc'], "excerpt": plain(a['standfirst']), "image": a['image'], "imageGradient": None,
        "imageAlt": a['title'], "published": f'{PUBLISHED}T09:00:00+00:00', "modified": f'{PUBLISHED}T09:00:00+00:00',
        "dateLabel": "November 2026", "readingTime": max(3, round(words / 220)), "featured": False, "translationOf": None,
    }


# ---------------------------------------------------------------------------
# DE
# ---------------------------------------------------------------------------
DE_SRC = (ROOT / 'public/de' / DE_TEMPLATE / 'index.html').read_text(encoding='utf-8')


def build_de(a):
    t = DE_SRC
    src = DE_TEMPLATE
    url = f'{ORIGIN}/de/{a["slug"]}/'
    old_title = re.search(r'<title>(.*?)</title>', t).group(1)
    t = swap(t, old_title, html.escape(a['meta_title'], quote=False))
    old_desc = re.search(r'<meta name="description" content="([^"]*)"', t).group(1)
    t = swap(t, old_desc, html.escape(a['desc']))
    t = t.replace(f'/de/{src}/', f'/de/{a["slug"]}/').replace(f'page:de/{src}', f'page:de/{a["slug"]}')
    t = t.replace(f'-de-{src}-"', f'-de-{a["slug"]}-"')

    main = between(t, '<main id="main">', '</main>')
    author = between(main, '<!-- AR-AUTHOR -->', '</div></div>')
    form = between(main, '<!-- ar-quick-contact -->', '</form>\n  \n</div>')
    form = re.sub(r'\n  <p class="arsf-sub" data-ins-note>[^\n]*</p>', '', form, count=1)
    legal = between(main, '<section class="lp-section">\n  <div class="lp-card lp-card--muted">', '</section>')
    faq = '\n'.join(f'  <h3>{q}</h3>\n  <p>{ans}</p>' for q, ans in a['faq'])
    rel = '\n'.join(f'    <a class="hnw-dest" href="{u}"><strong>{html.escape(label, quote=False)}</strong></a>' for u, label in a['related'])
    hl, hl_text = a['hero_link']
    sections = a['sections'].replace('{tq}', DE_TQ)
    new_main = f'''<main id="main">
<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/de/">Startseite</a><span>&rsaquo;</span><a href="/de/reiseversicherung/">Reiseversicherung</a><span>&rsaquo;</span><a href="/de/{a["slug"]}/">{a["crumb"]}</a></nav>

<section class="lp-hero">
  <div class="lp-hero-inner">
    <div>
      <h1>{html.escape(a["title"], quote=False)}</h1>
      <p class="lp-hero-sub">{a["sub"]}</p>
      <div class="lp-hero-actions">
        <a href="{DE_TQ}" class="btn-primary">Reiseversicherung vergleichen</a>
        <a href="{hl}" class="btn-ghost">{html.escape(hl_text, quote=False)}</a>
      </div>
    </div>
  </div>
</section>
{author}

{sections}
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
{rel}
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
            node['itemListElement'][1].update({"name": "Reiseversicherung", "item": f'{ORIGIN}/de/reiseversicherung/'})
            node['itemListElement'][2].update({"name": a['crumb'], "item": url})
        elif node.get('@type') == 'FAQPage':
            node['mainEntity'] = faq_ld(a['faq'])
    t = swap(t, ld, ld_block(g), 1)
    assert src not in t, 'template slug left behind'
    out = ROOT / 'public/de' / a['slug'] / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(t, encoding='utf-8')
    return out


# ---------------------------------------------------------------------------
# Guides block on the travel insurance page of each language (internal links)
# Re-run this script after scripts/build-travel-insurance-pages.py, which
# rebuilds those pages without the block.
# ---------------------------------------------------------------------------
GUIDES = {
    'en': ('public/en/travel-insurance/index.html', 'Travel insurance guides',
           [(f'/en/blog/{a["slug"]}/', a['title']) for a in EN]),
    'de': ('public/de/reiseversicherung/index.html', 'Ratgeber Reiseversicherung',
           [(f'/de/{a["slug"]}/', a['title']) for a in DE]),
}


def add_guides(lang):
    path, heading, links = GUIDES[lang]
    p = ROOT / path
    t = p.read_text(encoding='utf-8')
    t = re.sub(r'  <!-- AR-TRAVEL-GUIDES -->.*?<!-- /AR-TRAVEL-GUIDES -->\n', '', t, flags=re.S)
    items = ''.join(f'<li><a href="{u}">{html.escape(ti, quote=False)}</a></li>' for u, ti in links)
    block = (f'  <!-- AR-TRAVEL-GUIDES -->\n  <section class="ipmi-sec" aria-labelledby="tq-guides">\n'
             f'    <h2 id="tq-guides">{heading}</h2>\n    <ul>{items}</ul>\n  </section>\n  <!-- /AR-TRAVEL-GUIDES -->\n')
    t = swap(t, '  <section class="ipmi-faq" aria-labelledby="ipmi-faq">', block + '  <section class="ipmi-faq" aria-labelledby="ipmi-faq">', 1)
    p.write_text(t, encoding='utf-8')
    return p


if __name__ == '__main__':
    entries = []
    for a in EN:
        p, e = build_en(a)
        entries.append(e)
        print('wrote', p.relative_to(ROOT))
    for a in DE:
        print('wrote', build_de(a).relative_to(ROOT))
    dpath = ROOT / 'data/articles.json'
    d = json.loads(dpath.read_text(encoding='utf-8'))
    slugs = {e['slug'] for e in entries}
    d['articles']['en'] = [x for x in d['articles']['en'] if x['slug'] not in slugs] + entries
    dpath.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('data/articles.json: +', len(entries), 'EN entries')
    for lang in GUIDES:
        print('guides block:', add_guides(lang).relative_to(ROOT))
