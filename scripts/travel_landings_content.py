# -*- coding: utf-8 -*-
"""Travel insurance comparison landing pages, EN and DE (21 November 2026).

Each page targets one search intent and embeds the same quote tool as the
main travel page, preset with data-dest / data-intent / data-sports.
Built by scripts/build-travel-landings.py. Sections: list of (h2, html).
Adler & Rochefort acts only as a comparison service on these pages; the
"who does what" text is taken from the main page of the language.
"""

PAIRS = [  # (key, en slug, de slug)
    ("usa", "usa", "usa"),
    ("annual", "annual-multi-trip", "jahresreiseversicherung"),
    ("ski", "ski", "ski"),
    ("cruise", "cruise", "kreuzfahrt"),
]

P = {"en": {}, "de": {}}

# ---------------------------------------------------------------------------
P["en"]["usa"] = dict(
    preset=dict(dest="US", intent="forTourism"),
    title="Travel Insurance for the USA — Compare High Medical Limits | Adler & Rochefort",
    desc="Compare travel insurance for the United States by medical ceiling, repatriation and cancellation. Premium plans from several insurers, ranked by protection. Buy online in minutes.",
    crumb="USA",
    eyebrow="Travel insurance for the USA",
    h1="Travel insurance for the USA: compare the medical limits first",
    lead="The United States has the most expensive healthcare in the world for visitors, and a travel policy is the only thing standing between a hospital bill and your savings. Compare plans from several insurers, ranked by medical cover — the destination is already set.",
    sections=[
        ("Why the USA needs a different policy", "<p>There is no public system a tourist can fall back on in the United States. Hospitals bill at private rates and an emergency admission with surgery can reach six figures. That is why insurers price the USA separately: many “worldwide” plans exclude the USA and Canada unless you choose that zone.</p><p>An ESTA is required for visa-free visits; insurance is not. That is exactly why so many travellers buy too little of it.</p>"),
        ("What to compare", "<ul><li><strong>Medical expenses ceiling.</strong> High or unlimited is the sensible choice for the USA. Treat any plan below several hundred thousand euros with caution.</li><li><strong>Direct payment.</strong> The assistance company should guarantee payment to the hospital, so you do not have to put the bill on your card.</li><li><strong>Repatriation at actual cost</strong>, including air ambulance, and the return of a travelling companion.</li><li><strong>Personal liability.</strong> US damages awards are high — relevant if you drive, ski or play golf.</li><li><strong>Cancellation</strong> sized to the non-refundable cost of flights, hotels and event tickets.</li></ul>"),
        ("Stopovers, road trips and the World Cup", "<p>If you only transit through a US airport, most plans do not need the USA zone — but the moment you leave the airport, or add a few days in Miami or New York, they do. For long road trips, check the liability cover of your car rental and whether the travel policy tops it up. For trips around major events, cancellation and travel delay are worth sizing properly.</p>"),
    ],
    faq=[
        ("Is travel insurance mandatory for the USA?", "No. Visitors under the Visa Waiver Program need an approved ESTA, not insurance. Without insurance, however, you pay the full cost of any treatment."),
        ("How much medical cover do I need for the USA?", "As much as you can reasonably buy. A high or unlimited medical ceiling with direct payment is what protects you from a six-figure hospital bill."),
        ("Does my European or GHIC card work in the USA?", "No. The EHIC and the UK GHIC are not valid in the United States."),
    ],
    related=[("/en/blog/medicare-coverage-portugal-spain-travel-insurance/", "US travellers: does Medicare cover you in Portugal or Spain?")],
)

P["en"]["annual"] = dict(
    preset=dict(intent="annual"),
    title="Annual Multi-Trip Travel Insurance — Compare Premium Plans | Adler & Rochefort",
    desc="Compare annual multi-trip travel insurance by medical, repatriation and cancellation limits. One premium policy for every trip of the year, from several insurers. Buy online.",
    crumb="Annual multi-trip",
    eyebrow="Annual multi-trip travel insurance",
    h1="Annual multi-trip travel insurance: one premium policy for every trip",
    lead="If you travel three or more times a year — for work, to a second home, to family abroad or simply for pleasure — an annual plan covers every trip with one policy. Compare annual plans from several insurers, ranked by protection.",
    sections=[
        ("When an annual plan makes sense", "<ul><li><strong>Frequent business travel</strong>, often booked at short notice.</li><li><strong>Second-home owners</strong> travelling between their main home and a house in Portugal, Spain or elsewhere.</li><li><strong>Families</strong> who combine weekend breaks with one long-haul holiday a year.</li><li><strong>Anyone who would rather not think about insurance</strong> every time they book.</li></ul>"),
        ("What to check in an annual plan", "<ul><li><strong>Maximum days per trip.</strong> Each plan sets a limit per journey; a longer trip may not be covered beyond it. It is shown in each offer.</li><li><strong>Geographical zone.</strong> Choose it for the furthest trip you expect to make — a Europe-only plan will not cover a week in New York.</li><li><strong>Cancellation per trip.</strong> Check the amount and whether it applies per trip or per year.</li><li><strong>Age limits.</strong> Annual plans are often stricter than single-trip plans.</li><li><strong>Medical ceiling and repatriation.</strong> Exactly as for a single trip: protection first, price second.</li></ul>"),
        ("Annual travel insurance or international health insurance?", "<p>If you spend most of the year abroad, an annual travel plan is not the right tool: it covers trips, not a life outside your country of residence. In that case look at international health insurance.</p>"),
    ],
    faq=[
        ("How many trips does an annual plan cover?", "All the trips you make during the 12 months, as long as each one stays within the maximum number of days per trip set by the plan."),
        ("Is an annual plan cheaper than single-trip policies?", "Often, from about three trips a year. Compare the annual premium with the sum of single-trip policies for your usual travel."),
        ("Does it cover trips in my own country?", "Usually only under specific conditions, such as a minimum distance from home or overnight stays. Read the definition of a trip in the terms."),
    ],
    related=[("/en/blog/annual-multi-trip-travel-insurance-second-home-owners/", "Annual multi-trip insurance for second-home owners in Portugal and Spain"),
             ("/en/blog/travel-insurance-vs-international-health-insurance-frequent-travellers/", "Travel insurance or international health insurance?")],
)

P["en"]["ski"] = dict(
    preset=dict(intent="forTourism", sports=True),
    title="Ski Travel Insurance — Compare Mountain Rescue & Medical Cover | Adler & Rochefort",
    desc="Compare ski and snowboard travel insurance: mountain rescue, medical expenses, repatriation, liability and equipment. Premium plans from several insurers, ranked by protection.",
    crumb="Ski",
    eyebrow="Ski travel insurance",
    h1="Ski travel insurance: compare rescue, medical and liability cover",
    lead="Skiing and snowboarding are among the most frequent causes of travel claims, and many standard policies exclude them. Compare plans with the winter sports option already ticked, ranked by medical cover.",
    sections=[
        ("What a ski policy has to pay for", "<ul><li><strong>Mountain rescue and evacuation</strong> — by sled, snowmobile or helicopter — which is often billed separately and is not paid by public health systems.</li><li><strong>Medical expenses</strong> in mountain clinics, which are frequently private, even inside Europe.</li><li><strong>Repatriation</strong> when a fracture means you cannot fly home as planned, and the return of a companion.</li><li><strong>Personal liability</strong> if you collide with another skier and injure them.</li><li><strong>Equipment, lift pass and lessons</strong> — included in some plans or sports options.</li></ul>"),
        ("Off-piste: the exclusion that matters most", "<p>Many plans cover skiing only on marked, open pistes. Off-piste, ski touring and heli-skiing may be excluded or covered only with a certified guide. If your trip includes them, read that clause in the policy terms before you pay.</p>"),
        ("The Alps, North America and Japan", "<p>In France, Switzerland and Austria, rescue and private clinic costs add up quickly even with a European health card. In the USA, Canada and Japan, skiing combines with the highest medical costs in the world: there the medical ceiling has to be high.</p>"),
    ],
    faq=[
        ("Does normal travel insurance cover skiing?", "Often not, or only with a winter sports option. The comparison here is preset with that option ticked."),
        ("Is helicopter rescue covered?", "In many plans with the sports option, within the rescue or search limit. Check the amount in each offer's documents."),
        ("Does my European health card cover mountain rescue?", "No. The EHIC and GHIC give access to public healthcare on local terms; they do not pay for mountain rescue, private clinics or repatriation."),
    ],
    related=[("/en/blog/golf-travel-insurance-portugal-spain/", "Golf travel insurance for Portugal and Spain")],
)

P["en"]["cruise"] = dict(
    preset=dict(intent="cruise"),
    title="Cruise Travel Insurance — Compare Medical Evacuation Cover | Adler & Rochefort",
    desc="Compare cruise travel insurance: medical treatment on board, evacuation at sea, missed departures and cancellation. Premium plans from several insurers, ranked by protection.",
    crumb="Cruise",
    eyebrow="Cruise travel insurance",
    h1="Cruise travel insurance: compare evacuation and on-board medical cover",
    lead="A cruise feels like the safest holiday there is — until someone falls ill at sea. The ship's medical centre bills privately and an evacuation can cost more than the cruise itself. Compare cruise plans from several insurers, ranked by protection.",
    sections=[
        ("Where cruise policies differ", "<ul><li><strong>Medical treatment on board.</strong> The ship's medical centre charges like a private clinic, and public health cards are usually not accepted at sea.</li><li><strong>Evacuation and disembarkation.</strong> Helicopter or tender to the nearest suitable hospital, then a hotel for a companion and the journey home.</li><li><strong>Missed departure and missed ports.</strong> Getting back to the ship at the next port when a covered event makes you miss it.</li><li><strong>Cancellation</strong> sized to the full price of the cruise, which is often high and largely non-refundable close to departure.</li><li><strong>Baggage delay</strong> at the start of the cruise.</li></ul>"),
        ("Choose the right zone", "<p>A Mediterranean cruise may call in North Africa or Turkey; a Caribbean cruise departing from Miami needs a zone that includes the USA. Add every country on the itinerary, including the port of embarkation.</p>"),
        ("The cruise line's own insurance", "<p>Cruise lines sell their own cover. It is convenient, but compare its medical and repatriation limits with the offers here before choosing — they are sometimes modest.</p>"),
    ],
    faq=[
        ("Does travel insurance cover the ship's medical centre?", "Plans built for cruises usually do, within the medical expenses limit. Check the cruise-specific guarantees in each offer."),
        ("Is medical evacuation from a cruise ship covered?", "Repatriation and medical transport cover the evacuation in most plans; the limit and conditions are in the policy documents."),
        ("Do I need the USA zone for a Caribbean cruise?", "If the cruise departs from or calls at a US port and you leave the ship or airport, yes."),
    ],
    related=[],
)

# ---------------------------------------------------------------------------
P["de"]["usa"] = dict(
    preset=dict(dest="US", intent="forTourism"),
    title="Reiseversicherung USA — hohe Behandlungskosten vergleichen | Adler & Rochefort",
    desc="Reiseversicherung für die USA im Vergleich: Behandlungskosten, Rücktransport und Reiserücktritt. Premium-Tarife mehrerer Versicherer, nach Schutz sortiert. Online abschließen.",
    crumb="USA",
    eyebrow="Reiseversicherung USA",
    h1="Reiseversicherung für die USA: zuerst die Behandlungskosten vergleichen",
    lead="Die USA haben für Besucher die teuerste Gesundheitsversorgung der Welt, und die gesetzliche Krankenkasse zahlt dort nichts. Vergleichen Sie Tarife mehrerer Versicherer, sortiert nach der Deckung für Behandlungskosten — das Reiseziel ist bereits eingetragen.",
    sections=[
        ("Warum die USA eine eigene Absicherung brauchen", "<p>Ein öffentliches System, auf das Touristen zurückgreifen könnten, gibt es in den USA nicht. Krankenhäuser rechnen privat ab, eine Notaufnahme mit Operation kann sechsstellig werden. Deshalb kalkulieren Versicherer die USA gesondert: Viele „weltweite“ Tarife schließen USA und Kanada aus, wenn Sie diese Zone nicht wählen.</p><p>Die gesetzliche Krankenversicherung und die EHIC gelten in den USA nicht. Für die Einreise brauchen Sie eine ESTA-Genehmigung — eine Versicherung wird nicht verlangt. Genau deshalb sind viele Reisende unterversichert.</p>"),
        ("Was Sie vergleichen sollten", "<ul><li><strong>Höchstsumme für Behandlungskosten.</strong> Für die USA sind hohe oder unbegrenzte Summen sinnvoll.</li><li><strong>Direktabrechnung.</strong> Die Assistance sollte dem Krankenhaus die Kostenübernahme garantieren, damit Sie die Rechnung nicht mit Ihrer Kreditkarte vorstrecken.</li><li><strong>Rücktransport nach tatsächlichen Kosten</strong>, einschließlich Ambulanzflug, und Rückreise einer Begleitperson.</li><li><strong>Privathaftpflicht.</strong> Schadenersatzsummen in den USA sind hoch — wichtig beim Autofahren, Skifahren oder Golfen.</li><li><strong>Reiserücktritt</strong> in Höhe der nicht erstattbaren Kosten für Flüge, Hotels und Tickets.</li></ul>"),
        ("Umstieg, Roadtrip und Fußball-WM", "<p>Wer nur an einem US-Flughafen umsteigt, braucht die USA-Zone meist nicht — wer den Flughafen verlässt oder ein paar Tage in Miami oder New York anhängt, schon. Prüfen Sie bei Roadtrips die Haftpflicht des Mietwagens und ob die Reiseversicherung sie ergänzt.</p>"),
    ],
    faq=[
        ("Ist eine Reiseversicherung für die USA Pflicht?", "Nein. Für die visumfreie Einreise brauchen Sie eine genehmigte ESTA, keine Versicherung. Ohne Versicherung zahlen Sie jede Behandlung aber vollständig selbst."),
        ("Zahlt meine gesetzliche Krankenkasse in den USA?", "Nein. Die gesetzliche Krankenversicherung und die EHIC gelten in den USA nicht."),
        ("Wie hoch sollte die Deckung für Behandlungskosten sein?", "So hoch wie sinnvoll möglich. Eine hohe oder unbegrenzte Summe mit Direktabrechnung schützt vor einer sechsstelligen Krankenhausrechnung."),
    ],
    related=[],
)

P["de"]["annual"] = dict(
    preset=dict(intent="annual"),
    title="Jahresreiseversicherung Vergleich — Premium-Tarife | Adler & Rochefort",
    desc="Jahresreiseversicherungen im Vergleich: Behandlungskosten, Rücktransport und Reiserücktritt. Eine Premium-Police für alle Reisen des Jahres, mehrere Versicherer. Online abschließen.",
    crumb="Jahresreiseversicherung",
    eyebrow="Jahresreiseversicherung",
    h1="Jahresreiseversicherung: eine Premium-Police für alle Reisen des Jahres",
    lead="Wer drei oder mehr Reisen im Jahr macht — beruflich, ins Ferienhaus, zur Familie oder einfach zum Vergnügen —, ist mit einer Jahrespolice für alle Reisen abgesichert. Vergleichen Sie Jahrestarife mehrerer Versicherer, nach Schutz sortiert.",
    sections=[
        ("Wann sich ein Jahrestarif lohnt", "<ul><li><strong>Häufige Geschäftsreisen</strong>, oft kurzfristig gebucht.</li><li><strong>Ferienhausbesitzer</strong>, die zwischen Deutschland und ihrem Haus in Portugal, Spanien oder anderswo pendeln.</li><li><strong>Familien</strong> mit Städtetrips und einer großen Fernreise pro Jahr.</li><li><strong>Alle, die nicht bei jeder Buchung an die Versicherung denken wollen.</strong></li></ul>"),
        ("Worauf Sie achten sollten", "<ul><li><strong>Höchstdauer pro Reise.</strong> Jeder Tarif begrenzt die Tage pro Reise; längere Reisen sind darüber hinaus nicht versichert. Die Grenze steht im Angebot.</li><li><strong>Geltungsbereich.</strong> Wählen Sie ihn nach der weitesten geplanten Reise — ein Europa-Tarif deckt keine Woche in New York.</li><li><strong>Reiserücktritt.</strong> Summe pro Reise oder pro Jahr?</li><li><strong>Altersgrenzen.</strong> Jahrestarife sind oft strenger als Einzelreisetarife.</li><li><strong>Behandlungskosten und Rücktransport.</strong> Wie bei jeder Reise: erst der Schutz, dann der Preis.</li></ul>"),
        ("Jahresreiseversicherung oder internationale Krankenversicherung?", "<p>Wer den Großteil des Jahres im Ausland verbringt, ist mit einer Jahresreiseversicherung nicht richtig abgesichert: Sie deckt Reisen, nicht ein Leben außerhalb des Wohnsitzlandes. Dann ist eine internationale Krankenversicherung das passende Instrument.</p>"),
    ],
    faq=[
        ("Wie viele Reisen deckt eine Jahresreiseversicherung?", "Alle Reisen innerhalb der 12 Monate, solange jede Reise die im Tarif festgelegte Höchstdauer nicht überschreitet."),
        ("Ist ein Jahrestarif günstiger als Einzelpolicen?", "Oft schon ab etwa drei Reisen im Jahr. Vergleichen Sie die Jahresprämie mit der Summe der Einzelpolicen für Ihre üblichen Reisen."),
        ("Sind Reisen innerhalb Deutschlands versichert?", "Meist nur unter bestimmten Bedingungen, etwa ab einer Mindestentfernung oder mit Übernachtung. Lesen Sie die Definition der Reise in den Bedingungen."),
    ],
    related=[("/de/jahresreiseversicherung-ferienhausbesitzer-portugal-spanien/", "Jahresreiseversicherung für Ferienhausbesitzer in Portugal und Spanien"),
             ("/de/reiseversicherung-oder-internationale-krankenversicherung-vielreisende/", "Reiseversicherung oder internationale Krankenversicherung?")],
)

P["de"]["ski"] = dict(
    preset=dict(intent="forTourism", sports=True),
    title="Reiseversicherung Skiurlaub — Bergung & Behandlungskosten vergleichen | Adler & Rochefort",
    desc="Reiseversicherung für den Skiurlaub im Vergleich: Bergungskosten, Behandlung, Rücktransport, Haftpflicht und Ausrüstung. Premium-Tarife mehrerer Versicherer, nach Schutz sortiert.",
    crumb="Skiurlaub",
    eyebrow="Reiseversicherung für den Skiurlaub",
    h1="Reiseversicherung für den Skiurlaub: Bergung, Behandlung und Haftpflicht vergleichen",
    lead="Ski- und Snowboardunfälle gehören zu den häufigsten Schadenfällen auf Reisen — und die gesetzliche Krankenkasse zahlt die Bergung von der Piste nicht. Vergleichen Sie Tarife mit bereits ausgewählter Wintersportoption, sortiert nach Schutz.",
    sections=[
        ("Was eine Skiversicherung zahlen muss", "<ul><li><strong>Bergung und Rettung</strong> — per Akja, Motorschlitten oder Hubschrauber. Diese Kosten werden oft gesondert abgerechnet und von der gesetzlichen Krankenversicherung nicht übernommen.</li><li><strong>Behandlungskosten</strong> in Kliniken der Skigebiete, die häufig privat abrechnen — auch in Österreich, der Schweiz und Frankreich.</li><li><strong>Rücktransport</strong>, wenn ein Bruch die geplante Heimreise verhindert, und Rückreise einer Begleitperson.</li><li><strong>Privathaftpflicht</strong>, wenn Sie mit einem anderen Skifahrer zusammenstoßen und ihn verletzen.</li><li><strong>Ausrüstung, Skipass und Skikurs</strong> — in manchen Tarifen oder Sportoptionen enthalten.</li></ul>"),
        ("Abseits der Piste: der wichtigste Ausschluss", "<p>Viele Tarife decken Skifahren nur auf markierten, geöffneten Pisten. Variantenfahren, Skitouren und Heliskiing können ausgeschlossen oder nur mit zertifiziertem Bergführer versichert sein. Lesen Sie diese Klausel vor dem Abschluss.</p>"),
        ("Alpen, Nordamerika und Japan", "<p>In den Alpen summieren sich Bergungs- und Privatklinikkosten schnell, auch mit EHIC. In den USA, Kanada und Japan trifft das Skifahren auf die höchsten Behandlungskosten der Welt — dort muss die Deckungssumme hoch sein.</p>"),
    ],
    faq=[
        ("Zahlt die gesetzliche Krankenkasse die Bergung im Skiurlaub?", "Nein. Bergungs- und Rettungskosten, etwa per Hubschrauber, übernimmt die gesetzliche Krankenversicherung in der Regel nicht — weder in Deutschland noch im Ausland."),
        ("Deckt eine normale Reiseversicherung Skifahren?", "Oft nicht oder nur mit Wintersportoption. Der Vergleich hier ist mit dieser Option voreingestellt."),
        ("Ist die Hubschrauberbergung versichert?", "In vielen Tarifen mit Sportoption, im Rahmen der Summe für Bergung und Suche. Die Höhe steht in den Unterlagen jedes Angebots."),
    ],
    related=[("/de/golfreise-versicherung-portugal-spanien/", "Golfreise nach Portugal und Spanien: Reiseversicherung")],
)

P["de"]["cruise"] = dict(
    preset=dict(intent="cruise"),
    title="Reiseversicherung Kreuzfahrt — Evakuierung & Bordarzt vergleichen | Adler & Rochefort",
    desc="Reiseversicherung für Kreuzfahrten im Vergleich: Behandlung an Bord, Evakuierung auf See, verpasste Abfahrt und Reiserücktritt. Premium-Tarife mehrerer Versicherer, nach Schutz sortiert.",
    crumb="Kreuzfahrt",
    eyebrow="Reiseversicherung für Kreuzfahrten",
    h1="Reiseversicherung für Kreuzfahrten: Evakuierung und Bordarzt vergleichen",
    lead="Eine Kreuzfahrt wirkt wie der sicherste Urlaub — bis jemand auf See krank wird. Das Bordhospital rechnet privat ab, und eine Evakuierung kann mehr kosten als die Reise selbst. Vergleichen Sie Kreuzfahrttarife mehrerer Versicherer, nach Schutz sortiert.",
    sections=[
        ("Wo sich Kreuzfahrt-Tarife unterscheiden", "<ul><li><strong>Behandlung an Bord.</strong> Das Bordhospital rechnet wie eine Privatklinik ab; die EHIC wird auf See in der Regel nicht akzeptiert.</li><li><strong>Evakuierung und Ausschiffung.</strong> Hubschrauber oder Tenderboot zum nächsten geeigneten Krankenhaus, danach Hotel für die Begleitperson und Heimreise.</li><li><strong>Verpasste Abfahrt.</strong> Nachreise zum nächsten Hafen, wenn ein versichertes Ereignis Sie das Schiff verpassen lässt.</li><li><strong>Reiserücktritt</strong> in Höhe des vollen Reisepreises, der kurz vor Abfahrt meist kaum erstattet wird.</li><li><strong>Gepäckverspätung</strong> zu Beginn der Kreuzfahrt.</li></ul>"),
        ("Den richtigen Geltungsbereich wählen", "<p>Eine Mittelmeer-Kreuzfahrt kann Häfen in Nordafrika oder der Türkei anlaufen; eine Karibik-Kreuzfahrt ab Miami braucht einen Geltungsbereich mit den USA. Tragen Sie alle Länder der Route ein, einschließlich des Einschiffungshafens.</p>"),
        ("Die Versicherung der Reederei", "<p>Reedereien verkaufen eigene Versicherungen. Das ist bequem, aber vergleichen Sie die Summen für Behandlung und Rücktransport mit den Angeboten hier — sie sind manchmal bescheiden.</p>"),
    ],
    faq=[
        ("Zahlt die Reiseversicherung das Bordhospital?", "Kreuzfahrttarife tun das in der Regel, im Rahmen der Summe für Behandlungskosten. Prüfen Sie die Kreuzfahrt-Leistungen im Angebot."),
        ("Ist die Evakuierung von einem Kreuzfahrtschiff versichert?", "In den meisten Tarifen über Rücktransport und medizinischen Transport; Summe und Bedingungen stehen in den Unterlagen."),
        ("Brauche ich die USA-Zone für eine Karibik-Kreuzfahrt?", "Wenn die Reise in einem US-Hafen beginnt oder dort anlegt und Sie Schiff oder Flughafen verlassen, ja."),
    ],
    related=[],
)

UI = {
    "en": dict(home_crumb="Travel insurance comparison", others="Compare travel insurance by trip", tool_h="Compare plans for this trip",
               tool_p="Live prices from several insurers, ranked by medical cover first. Change any field to match your trip.",
               faq_h="Frequently asked questions", rel_h="Related", main_link="All trips: premium travel insurance comparison",
               who_h="Who does what", cta="Compare premium plans"),
    "de": dict(home_crumb="Reiseversicherung im Vergleich", others="Reiseversicherung nach Reiseart vergleichen", tool_h="Tarife für diese Reise vergleichen",
               tool_p="Live-Preise mehrerer Versicherer, zuerst nach Behandlungskosten sortiert. Passen Sie die Felder an Ihre Reise an.",
               faq_h="Häufige Fragen", rel_h="Weiterlesen", main_link="Alle Reisen: Premium-Reiseversicherung im Vergleich",
               who_h="Wer macht was", cta="Premium-Tarife vergleichen"),
}
