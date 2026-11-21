# -*- coding: utf-8 -*-
"""Travel insurance pages, November 2026 (21 Nov) — repositioning.

On the travel insurance pages Adler & Rochefort does NOT act as an insurance
mediator: the pages are a comparison / marketing tool. Policies are
distributed by HelloSafe (HELLO SAFE SAS, ORIAS 21008038), which handles
pricing, subscription, payment and after-sales; each policy is underwritten by
the insurer named on the offer. Adler & Rochefort receives a fee from HelloSafe.

Positioning: a premium travel insurance comparison for travellers who buy
protection (high medical and repatriation limits), not the minimum a visa or
a booking requires.

EN and DE are rewritten in full (priority markets). For the other languages
only the fields that described the mediation role, the written-advice form
and the fallbacks are overridden. Merged over travel_content*.py by
scripts/build-travel-insurance-pages.py (deep merge for "ui").
"""

HS = "HelloSafe (HELLO SAFE SAS, ORIAS 21008038)"

O = {}

# ---------------------------------------------------------------------------
# ENGLISH — full rewrite
# ---------------------------------------------------------------------------
O["en"] = dict(
    bar="Premium travel insurance comparison — ranked by protection",
    title="Premium Travel Insurance Comparison — High Medical Limits | Adler & Rochefort",
    desc="Compare premium travel insurance from several insurers, ranked by medical, repatriation and cancellation limits — not by price. Single trips, annual multi-trip, USA, ski, cruises. Buy online.",
    crumb="Travel insurance comparison",
    eyebrow="Premium travel insurance comparison",
    h1="Compare travel insurance by the protection, not the price",
    lead="A travel insurance comparison for people who travel well and want to be covered properly. Describe your trip once and see live offers from several insurers side by side, ranked by the limits that matter when something goes wrong abroad: medical expenses, repatriation, cancellation and liability. Choose the plan and buy it online in minutes.",
    meta="Comparison service · Policies sold by HelloSafe (ORIAS 21008038) · Reviewed 21 November 2026",
    btn_quote="Compare premium plans",
    btn_advice="Trip not covered online?",
    tool_h="Compare travel insurance — live prices",
    tool_p="Prices are live, per trip, for everyone travelling. Offers are ranked by medical cover first — the highest protection at the top. You can switch to lowest price, but we would not.",
    facts_h="Why compare here",
    facts=[
        "Ranked by protection by default: the plans with the highest medical and repatriation limits come first.",
        "Several insurers in one search, with every limit shown before you buy — no surprises in the small print.",
        "Single trip, annual multi-trip, long-haul and USA, ski and sports, cruises, long stays and remote work.",
        "Policy documents (IPID and terms) are linked on every offer, so you can read the exclusions before paying.",
        "You buy and pay online on the secure form of HelloSafe, the registered intermediary that distributes these policies. The price shown is the price you pay.",
    ],
    s1_h="Built for travellers who want real cover",
    s1_p="Most comparison sites sort by the cheapest premium. That is how people end up with a policy that pays €30,000 for a hospital bill of €150,000. This comparison starts from the other end:",
    s1_list=[
        "<strong>Long-haul and the United States.</strong> A hospital stay in the US, Canada, the Caribbean or Japan can run into six figures. Look for a high or unlimited medical ceiling and medical repatriation by air ambulance — see <a href=\"/en/travel-insurance/usa/\">travel insurance for the USA</a>.",
        "<strong>Frequent travellers and second-home owners.</strong> One <a href=\"/en/travel-insurance/annual-multi-trip/\">annual multi-trip plan</a> for every trip of the year, instead of a policy each time.",
        "<strong>Families.</strong> One policy for everyone travelling, with cancellation sized to the real cost of the holiday.",
        "<strong>Ski, golf and active holidays.</strong> Mountain rescue, equipment and the sports option — see <a href=\"/en/travel-insurance/ski/\">ski travel insurance</a>.",
        "<strong>Cruises.</strong> Medical evacuation at sea, missed departures and the ship's medical centre, which bills privately — see <a href=\"/en/travel-insurance/cruise/\">cruise travel insurance</a>.",
        "<strong>Long stays and remote work.</strong> Months away from home, with medical and repatriation cover for the whole period.",
    ],
    s2_h="What premium travel insurance looks like",
    s2_p="Two plans at a similar price can protect very differently. Read these lines in each offer — they are what separates a premium policy from one that only ticks a box:",
    s2_list=[
        "<strong>Medical expenses abroad.</strong> The ceiling per person. For the United States and Canada, a high or unlimited ceiling is the sensible choice; a visa minimum is not a target.",
        "<strong>Repatriation and 24/7 assistance.</strong> The assistance team organises and pays for getting you to the right hospital — or home. Look for repatriation at actual cost.",
        "<strong>Cancellation.</strong> Up to what amount, and for which reasons: a defined list or any justified reason. Size it to the non-refundable cost of the trip.",
        "<strong>Personal liability abroad.</strong> Damage or injury you cause to others — on the slopes, on a golf course, behind the wheel.",
        "<strong>Baggage and valuables.</strong> Limits per item are usually low. Fine jewellery and watches need their own all-risks insurance; see <a href=\"/en/art-jewellery-watches-insurance/\">art, jewellery and watches</a>.",
        "<strong>Sports and pre-existing conditions.</strong> Skiing, diving and other activities may need the sports option. Medical conditions you already have are treated differently by each insurer: read the terms and declare them.",
    ],
    s3_h="Travel insurance, health insurance or your premium card?",
    s3_p="They are not interchangeable:",
    s3_list=[
        "<strong>Travel insurance</strong> covers a trip away from your country of residence, for a fixed period, with repatriation. It is not ongoing health insurance.",
        "<strong>If you live in Portugal or Spain</strong>, or spend most of the year travelling, you need annual health insurance where you live. See <a href=\"{ipmi}\">international health insurance</a> and <a href=\"{dom}\">domestic or international health insurance</a>.",
        "<strong>Premium bank card cover</strong> usually depends on paying the trip with that card, often covers only the cardholder's family, and comes with lower medical limits. Compare its limits with the offers here before relying on it.",
        "<strong>The GHIC / European Health Insurance Card</strong> gives access to public healthcare on local terms. It does not pay for private treatment, mountain rescue or repatriation.",
    ],
    s4_h="How it works",
    s4_list=[
        "Enter the trip type, your country of residence, the destinations, the dates and the age of each traveller.",
        "Compare the offers: insurer, price for the whole party, medical, repatriation, cancellation and liability limits, and the policy documents.",
        "Choose a plan. You go to the secure subscription form of HelloSafe with that offer selected and the premium confirmed.",
        "Enter the travellers' details and pay online. The policy is issued in your name by the insurer.",
        "For questions about the cover, the subscription or a claim, contact HelloSafe or the insurer named on your policy.",
    ],
    s5_h="Who does what",
    s5_p="On this page Adler & Rochefort provides a comparison and information service only. For these travel policies Adler & Rochefort does not act as an insurance mediator: it does not advise on, arrange or conclude travel insurance contracts. Pricing, subscription, payment and customer service are provided by " + HS + ", the registered intermediary that distributes the policies, and each policy is underwritten by the insurer named on the offer. Adler & Rochefort receives a fee from HelloSafe for each policy bought through this page; the price shown is the price charged at payment.",
    faq_h="Frequently asked questions",
    faq=[
        ("What makes this a premium travel insurance comparison?", "The ranking. Offers are sorted by the medical expenses ceiling first, so the plans with the highest protection appear at the top, with repatriation, cancellation and liability limits shown side by side. You can sort by price, but the default is protection."),
        ("Which travel insurance has the highest medical cover?", "It depends on your trip, residence and ages, and on what each insurer offers on the day. Run the comparison: the first offers listed are the ones with the highest medical ceiling for your trip."),
        ("Does it cover the United States?", "Add the United States as a destination and the offers priced will include it. Medical costs there are among the highest in the world, so look first at the medical ceiling and at repatriation."),
        ("Can I buy if I live in Portugal, Spain or the UK?", "Yes. Select your country of residence in the form: the offers shown are the ones available for that residence."),
        ("Can I cover every trip of the year?", "Yes. Choose annual multi-trip cover. Each plan sets a maximum number of days per trip, shown in the offer."),
        ("Is the insurance valid for a Schengen or D7/D8 visa application?", "The Schengen visa trip type returns plans that meet the €30,000 minimum. A minimum is not the same as good cover: for real protection, compare the plans with higher medical and repatriation limits. Check the consulate's current requirements before you apply."),
        ("Are pre-existing medical conditions covered?", "It depends on the insurer and the plan. Read the policy terms linked on each offer and declare any condition when you subscribe."),
        ("Who sells the policy and who handles claims?", "The policy is distributed by HelloSafe (ORIAS 21008038) and underwritten by the insurer named on the offer. Claims are handled by that insurer and its assistance company, using the contacts in your policy documents."),
        ("Do I pay more by comparing here?", "No. The price shown on each offer is the price charged by HelloSafe at payment. Adler & Rochefort receives a fee from HelloSafe."),
    ],
    form_h="Trip not covered online?",
    form_lead="If no online offer matches your trip yet, leave your email and the trip details: we will let you know by email when offers are available for it. Adler & Rochefort does not advise on or arrange travel insurance — every policy is compared and bought online.",
    msg_label="Your trip",
    msg_ph="Destinations, dates, ages of travellers, country of residence and anything specific (sports, cruise, cancellation)",
    trust=["Ranked by protection", "Several insurers compared", "Policy documents before you pay"],
    rel_h="Also from Adler & Rochefort",
    rel_short="Short-term international health insurance, stays under 12 months",
    rel_ipmi="International health insurance for expats",
    rel_dom="Domestic or international health insurance?",
    hub_link="Premium travel insurance comparison",
    ui=dict(
        intents=[["forTourism", "Holiday / single trip"], ["annual", "Annual multi-trip"], ["cruise", "Cruise"],
                 ["digitalNomad", "Digital nomad / remote work"], ["expat", "Expatriation (1 year)"], ["studyInternship", "Studies or internship"],
                 ["groupTravel", "Group trip"], ["cancellation", "Cancellation cover only"], ["schengenArea", "Schengen visa application"],
                 ["aupair", "Au pair"], ["whv", "Working holiday visa"]],
        f=dict(writeUs="Leave your trip details",
               disclosure="You buy and pay on the secure form of HelloSafe (ORIAS 21008038), which distributes these policies. The insurer named on each offer underwrites the policy. Adler & Rochefort only provides this comparison, does not act as mediator for these policies and receives a fee from HelloSafe."),
        err=dict(generic="Pricing is not available right now. Please try again in a moment.",
                 NOT_LIVE="Online prices will be available here shortly. Leave your trip details below and we will let you know by email.",
                 NO_OFFERS="No online offer matches this trip yet. Leave your trip details below and we will let you know by email if one becomes available.",
                 QUOTA_EXCEEDED="Online pricing has reached its limit for today. Please try again tomorrow, or leave your trip details below."),
    ),
)

# ---------------------------------------------------------------------------
# DEUTSCH — vollständig neu
# ---------------------------------------------------------------------------
O["de"] = dict(
    bar="Premium-Reiseversicherungen im Vergleich — sortiert nach Schutz",
    title="Reiseversicherung Vergleich Premium — hohe Deckungssummen | Adler & Rochefort",
    desc="Premium-Reiseversicherungen mehrerer Versicherer im Vergleich, sortiert nach Auslandskranken-, Rücktransport- und Rücktrittsschutz statt nach Preis. Einzelreise, Jahresreiseversicherung, USA, Ski, Kreuzfahrt.",
    crumb="Reiseversicherung im Vergleich",
    eyebrow="Premium-Reiseversicherung im Vergleich",
    h1="Reiseversicherungen nach Leistung vergleichen, nicht nach Preis",
    lead="Ein Reiseversicherungsvergleich für Menschen, die gut reisen und richtig abgesichert sein wollen. Beschreiben Sie Ihre Reise einmal und sehen Sie Live-Angebote mehrerer Versicherer nebeneinander — sortiert nach den Summen, die im Ernstfall zählen: Behandlungskosten im Ausland, Rücktransport, Reiserücktritt und Haftpflicht. Tarif wählen und in wenigen Minuten online abschließen.",
    meta="Vergleichsportal · Vertrieb der Policen durch HelloSafe (ORIAS 21008038) · Geprüft am 21. November 2026",
    btn_quote="Premium-Tarife vergleichen",
    btn_advice="Reise online nicht versicherbar?",
    tool_h="Reiseversicherung vergleichen — Live-Preise",
    tool_p="Die Preise sind live, pro Reise, für alle Reisenden. Die Angebote sind zuerst nach der Deckung für Behandlungskosten sortiert — der höchste Schutz steht oben. Sie können nach Preis sortieren, wir würden es nicht tun.",
    facts_h="Warum hier vergleichen",
    facts=[
        "Standardmäßig nach Schutz sortiert: Tarife mit den höchsten Summen für Behandlungskosten und Rücktransport stehen oben.",
        "Mehrere Versicherer in einer Suche, alle Summen vor dem Abschluss sichtbar — keine Überraschungen im Kleingedruckten.",
        "Einzelreise, Jahresreiseversicherung, Fernreisen und USA, Ski und Sport, Kreuzfahrten, Langzeitaufenthalte und Remote Work.",
        "Produktinformationen (IPID) und Bedingungen sind bei jedem Angebot verlinkt — lesen Sie die Ausschlüsse vor der Zahlung.",
        "Abschluss und Zahlung erfolgen online im sicheren Formular von HelloSafe, dem registrierten Vermittler, der diese Policen vertreibt. Der angezeigte Preis ist der Preis, den Sie zahlen.",
    ],
    s1_h="Für Reisende, die echten Schutz wollen",
    s1_p="Die meisten Vergleichsportale sortieren nach der günstigsten Prämie. So entstehen Policen, die 30.000 € für eine Krankenhausrechnung von 150.000 € zahlen. Dieser Vergleich beginnt am anderen Ende:",
    s1_list=[
        "<strong>Fernreisen und USA.</strong> Ein Krankenhausaufenthalt in den USA, Kanada, der Karibik oder Japan kann sechsstellig werden. Achten Sie auf hohe oder unbegrenzte Behandlungskosten und Rücktransport per Ambulanzflug — siehe <a href=\"/de/reiseversicherung/usa/\">Reiseversicherung USA</a>.",
        "<strong>Vielreisende und Ferienhausbesitzer.</strong> Eine <a href=\"/de/reiseversicherung/jahresreiseversicherung/\">Jahresreiseversicherung</a> für alle Reisen des Jahres statt jedes Mal einer neuen Police.",
        "<strong>Familien.</strong> Eine Police für alle Mitreisenden, mit Reiserücktritt in Höhe der tatsächlichen Reisekosten.",
        "<strong>Ski, Golf und Aktivurlaub.</strong> Bergung, Ausrüstung und Sportoption — siehe <a href=\"/de/reiseversicherung/ski/\">Reiseversicherung für den Skiurlaub</a>.",
        "<strong>Kreuzfahrten.</strong> Evakuierung auf See, verpasste Abfahrten und das Bordhospital, das privat abrechnet — siehe <a href=\"/de/reiseversicherung/kreuzfahrt/\">Reiseversicherung für Kreuzfahrten</a>.",
        "<strong>Langzeitaufenthalte und Remote Work.</strong> Monate im Ausland, mit Kranken- und Rücktransportschutz für den gesamten Zeitraum.",
    ],
    s2_h="Woran Sie eine Premium-Reiseversicherung erkennen",
    s2_p="Zwei Tarife zum ähnlichen Preis können sehr unterschiedlich schützen. Prüfen Sie in jedem Angebot diese Punkte — sie unterscheiden eine Premium-Police von einer, die nur ein Formular erfüllt:",
    s2_list=[
        "<strong>Behandlungskosten im Ausland.</strong> Die Höchstsumme pro Person. Für die USA und Kanada sind hohe oder unbegrenzte Summen sinnvoll; ein Visum-Minimum ist kein Ziel.",
        "<strong>Rücktransport und 24/7-Assistance.</strong> Die Assistance organisiert und bezahlt den Transport ins richtige Krankenhaus — oder nach Hause. Ideal: Rücktransport ohne Summenbegrenzung.",
        "<strong>Reiserücktritt.</strong> Bis zu welcher Summe und aus welchen Gründen: feste Liste oder jeder triftige Grund. Orientieren Sie sich an den nicht erstattbaren Reisekosten.",
        "<strong>Privathaftpflicht im Ausland.</strong> Schäden, die Sie anderen zufügen — auf der Piste, auf dem Golfplatz, am Steuer.",
        "<strong>Gepäck und Wertsachen.</strong> Die Grenzen pro Gegenstand sind meist niedrig. Wertvoller Schmuck und Uhren brauchen eine eigene Allgefahrenversicherung.",
        "<strong>Sport und Vorerkrankungen.</strong> Ski, Tauchen und andere Aktivitäten können die Sportoption erfordern. Bestehende Erkrankungen behandelt jeder Versicherer anders: Bedingungen lesen und angeben.",
    ],
    s3_h="Reiseversicherung, gesetzliche Krankenkasse oder Kreditkarte?",
    s3_p="Sie sind nicht austauschbar:",
    s3_list=[
        "<strong>Die Reiseversicherung</strong> deckt eine Reise außerhalb Ihres Wohnsitzlandes für einen festen Zeitraum, mit Rücktransport. Sie ist keine dauerhafte Krankenversicherung.",
        "<strong>Die gesetzliche Krankenversicherung und die EHIC</strong> geben in Europa Zugang zur öffentlichen Versorgung zu lokalen Bedingungen. Private Behandlung, Bergungskosten und der Rücktransport nach Deutschland sind in der Regel nicht gedeckt; außerhalb Europas gilt die Karte meist gar nicht.",
        "<strong>Kreditkarten-Versicherungen</strong> setzen meist voraus, dass die Reise mit der Karte bezahlt wurde, und haben niedrigere Summen. Vergleichen Sie die Grenzen mit den Angeboten hier.",
        "<strong>Wenn Sie in Portugal oder Spanien leben</strong> oder den Großteil des Jahres reisen, brauchen Sie eine Jahres-Krankenversicherung am Wohnort. Siehe <a href=\"{ipmi}\">internationale Krankenversicherung</a> und <a href=\"{dom}\">nationale oder internationale Krankenversicherung</a>.",
    ],
    s4_h="So funktioniert es",
    s4_list=[
        "Reiseart, Wohnsitzland, Reiseziele, Daten und das Alter jedes Reisenden eingeben.",
        "Angebote vergleichen: Versicherer, Preis für alle Reisenden, Summen für Behandlungskosten, Rücktransport, Rücktritt und Haftpflicht sowie die Vertragsunterlagen.",
        "Tarif wählen. Sie gelangen zum sicheren Antragsformular von HelloSafe, mit dem gewählten Angebot und bestätigter Prämie.",
        "Daten der Reisenden eingeben und online bezahlen. Die Police wird vom Versicherer auf Ihren Namen ausgestellt.",
        "Bei Fragen zur Deckung, zum Abschluss oder im Schadenfall wenden Sie sich an HelloSafe oder an den in Ihrer Police genannten Versicherer.",
    ],
    s5_h="Wer macht was",
    s5_p="Auf dieser Seite bietet Adler & Rochefort ausschließlich einen Vergleichs- und Informationsdienst an. Für diese Reiseversicherungen ist Adler & Rochefort nicht als Versicherungsvermittler tätig: Es berät nicht, vermittelt nicht und schließt keine Reiseversicherungsverträge ab. Preisberechnung, Abschluss, Zahlung und Kundenservice erfolgen durch " + HS + ", den registrierten Vermittler, der die Policen vertreibt; jede Police wird von dem im Angebot genannten Versicherer gezeichnet. Adler & Rochefort erhält von HelloSafe eine Vergütung für jede über diese Seite abgeschlossene Police; der angezeigte Preis ist der bei der Zahlung berechnete Preis.",
    faq_h="Häufige Fragen",
    faq=[
        ("Was macht diesen Vergleich zu einem Premium-Reiseversicherungsvergleich?", "Die Sortierung. Die Angebote sind zuerst nach der Höchstsumme für Behandlungskosten sortiert, sodass die Tarife mit dem höchsten Schutz oben stehen — Rücktransport, Rücktritt und Haftpflicht nebeneinander. Sie können nach Preis sortieren, voreingestellt ist aber der Schutz."),
        ("Welche Reiseversicherung hat die höchste Deckung für Behandlungskosten?", "Das hängt von Reise, Wohnsitz, Alter und dem aktuellen Angebot der Versicherer ab. Starten Sie den Vergleich: Die ersten Angebote sind die mit der höchsten Behandlungskostensumme für Ihre Reise."),
        ("Gilt die Versicherung in den USA?", "Fügen Sie die USA als Reiseziel hinzu, dann schließen die berechneten Angebote sie ein. Die Behandlungskosten dort gehören zu den höchsten der Welt — prüfen Sie zuerst die Höchstsumme und den Rücktransport."),
        ("Kann ich abschließen, wenn ich in Deutschland, Österreich, der Schweiz, Portugal oder Spanien wohne?", "Wählen Sie im Formular Ihr Wohnsitzland: Angezeigt werden die Angebote, die für diesen Wohnsitz verfügbar sind."),
        ("Kann ich alle Reisen eines Jahres versichern?", "Ja, mit einer Jahresreiseversicherung. Jeder Tarif legt eine Höchstdauer pro Reise fest, die im Angebot angegeben ist."),
        ("Brauche ich eine Auslandsreisekrankenversicherung, wenn ich gesetzlich versichert bin?", "Ja, in den meisten Fällen. Die gesetzliche Krankenkasse übernimmt im Ausland nur Leistungen nach den Regeln des Gastlandes, keine privaten Behandlungen und keinen Rücktransport nach Deutschland. Außerhalb Europas besteht oft gar kein Schutz."),
        ("Sind Vorerkrankungen versichert?", "Das hängt vom Versicherer und vom Tarif ab. Lesen Sie die verlinkten Bedingungen und geben Sie bestehende Erkrankungen beim Abschluss an."),
        ("Wer verkauft die Police und wer reguliert Schäden?", "Die Police wird von HelloSafe (ORIAS 21008038) vertrieben und von dem im Angebot genannten Versicherer gezeichnet. Schäden reguliert dieser Versicherer mit seiner Assistance, über die Kontakte in Ihren Vertragsunterlagen."),
        ("Zahle ich mehr, wenn ich hier vergleiche?", "Nein. Der angezeigte Preis ist der Preis, den HelloSafe bei der Zahlung berechnet. Adler & Rochefort erhält von HelloSafe eine Vergütung."),
    ],
    form_h="Reise online nicht versicherbar?",
    form_lead="Wenn noch kein Online-Angebot zu Ihrer Reise passt, hinterlassen Sie Ihre E-Mail-Adresse und die Reisedaten: Wir benachrichtigen Sie per E-Mail, sobald Angebote verfügbar sind. Adler & Rochefort berät nicht zu Reiseversicherungen und vermittelt sie nicht — jede Police wird online verglichen und abgeschlossen.",
    msg_label="Ihre Reise",
    msg_ph="Reiseziele, Daten, Alter der Reisenden, Wohnsitzland und Besonderheiten (Sport, Kreuzfahrt, Rücktritt)",
    trust=["Nach Schutz sortiert", "Mehrere Versicherer im Vergleich", "Vertragsunterlagen vor der Zahlung"],
    rel_h="Ebenfalls von Adler & Rochefort",
    rel_short="Kurzzeit-Auslandskrankenversicherung, Aufenthalte unter 12 Monaten",
    rel_ipmi="Internationale Krankenversicherung für Expats",
    rel_dom="Nationale oder internationale Krankenversicherung?",
    hub_link="Premium-Reiseversicherung im Vergleich",
    ui=dict(
        intents=[["forTourism", "Urlaub / Einzelreise"], ["annual", "Jahresreiseversicherung"], ["cruise", "Kreuzfahrt"],
                 ["digitalNomad", "Digitale Nomaden / Remote Work"], ["expat", "Auslandsaufenthalt (1 Jahr)"], ["studyInternship", "Studium oder Praktikum"],
                 ["groupTravel", "Gruppenreise"], ["cancellation", "Nur Reiserücktritt"], ["schengenArea", "Schengen-Visumantrag"],
                 ["aupair", "Au-pair"], ["whv", "Working-Holiday-Visum"]],
        f=dict(writeUs="Reisedaten hinterlassen",
               disclosure="Sie schließen ab und zahlen im sicheren Formular von HelloSafe (ORIAS 21008038), das diese Policen vertreibt. Der im Angebot genannte Versicherer zeichnet die Police. Adler & Rochefort stellt nur diesen Vergleich bereit, ist für diese Policen nicht als Vermittler tätig und erhält von HelloSafe eine Vergütung."),
        err=dict(generic="Die Preisberechnung ist gerade nicht verfügbar. Bitte versuchen Sie es gleich noch einmal.",
                 NOT_LIVE="Online-Preise sind hier in Kürze verfügbar. Hinterlassen Sie unten Ihre Reisedaten, wir benachrichtigen Sie per E-Mail.",
                 NO_OFFERS="Für diese Reise gibt es noch kein Online-Angebot. Hinterlassen Sie unten Ihre Reisedaten, wir benachrichtigen Sie per E-Mail, sobald eines verfügbar ist.",
                 QUOTA_EXCEEDED="Die Online-Preisberechnung hat ihr Tageslimit erreicht. Bitte versuchen Sie es morgen erneut oder hinterlassen Sie unten Ihre Reisedaten."),
    ),
)

# ---------------------------------------------------------------------------
# Other languages — role, form and fallbacks only
# keys: meta, s5_p, disclosure, trust0, form_h, form_lead, btn_advice, writeUs,
#       NOT_LIVE, NO_OFFERS, QUOTA, generic, s4_last, faq0_a, faq_last (q, a)
# ---------------------------------------------------------------------------
L = {}

L["pt"] = dict(
    meta="Serviço de comparação · Seguros comercializados pela HelloSafe (ORIAS 21008038) · Revisto a 21 de novembro de 2026",
    s5_p="Nesta página, a Adler & Rochefort presta apenas um serviço de comparação e informação. Nestes seguros de viagem, a Adler & Rochefort não atua como mediador de seguros: não aconselha, não intermedeia nem celebra contratos de seguro de viagem. A cotação, a subscrição, o pagamento e o apoio ao cliente são assegurados pela " + HS + ", o intermediário registado que comercializa as apólices, e cada apólice é subscrita pela seguradora indicada na proposta. A Adler & Rochefort recebe da HelloSafe uma remuneração por cada apólice contratada através desta página; o preço apresentado é o preço cobrado no pagamento.",
    disclosure="Conclui a compra e paga no formulário seguro da HelloSafe (ORIAS 21008038), que comercializa estes seguros. A seguradora indicada em cada proposta subscreve a apólice. A Adler & Rochefort apenas disponibiliza esta comparação, não atua como mediador nestes seguros e recebe uma remuneração da HelloSafe.",
    trust0="Ordenado pela proteção",
    form_h="Não encontra a sua viagem online?",
    form_lead="Se ainda não houver proposta online para a sua viagem, deixe o seu email e os dados da viagem: avisamos por email quando houver propostas disponíveis. A Adler & Rochefort não aconselha nem intermedeia seguros de viagem — todas as apólices são comparadas e contratadas online.",
    btn_advice="Viagem sem proposta online?",
    writeUs="Deixar os dados da viagem",
    NOT_LIVE="Os preços online estarão disponíveis aqui em breve. Deixe abaixo os dados da viagem e avisamos por email.",
    NO_OFFERS="Ainda não há proposta online para esta viagem. Deixe abaixo os dados da viagem e avisamos por email se houver.",
    QUOTA="A cotação online atingiu o limite diário. Tente novamente amanhã ou deixe abaixo os dados da viagem.",
    generic="A cotação não está disponível neste momento. Tente novamente dentro de instantes.",
    s4_last="Para questões sobre a cobertura, a subscrição ou um sinistro, contacte a HelloSafe ou a seguradora indicada na sua apólice.",
    faq0_a="Selecione o seu país de residência no formulário. As propostas apresentadas são as disponíveis para essa residência.",
    faq_last=("Pago mais por comparar aqui?", "Não. O preço apresentado em cada proposta é o preço cobrado pela HelloSafe no pagamento. A Adler & Rochefort recebe uma remuneração da HelloSafe."),
)

L["es"] = dict(
    meta="Servicio de comparación · Pólizas comercializadas por HelloSafe (ORIAS 21008038) · Revisado el 21 de noviembre de 2026",
    s5_p="En esta página, Adler & Rochefort presta únicamente un servicio de comparación e información. En estos seguros de viaje, Adler & Rochefort no actúa como mediador de seguros: no asesora, no intermedia ni celebra contratos de seguro de viaje. La tarificación, la contratación, el pago y la atención al cliente corren a cargo de " + HS + ", el intermediario registrado que comercializa las pólizas, y cada póliza la suscribe la aseguradora indicada en la oferta. Adler & Rochefort recibe de HelloSafe una remuneración por cada póliza contratada a través de esta página; el precio mostrado es el precio cobrado en el pago.",
    disclosure="Termina la compra y paga en el formulario seguro de HelloSafe (ORIAS 21008038), que comercializa estas pólizas. La aseguradora indicada en cada oferta suscribe la póliza. Adler & Rochefort solo ofrece esta comparación, no actúa como mediador en estas pólizas y recibe una remuneración de HelloSafe.",
    trust0="Ordenado por protección",
    form_h="¿Su viaje no aparece online?",
    form_lead="Si todavía no hay oferta online para su viaje, déjenos su email y los datos del viaje: le avisaremos por email cuando haya ofertas disponibles. Adler & Rochefort no asesora ni intermedia seguros de viaje — todas las pólizas se comparan y contratan online.",
    btn_advice="¿Viaje sin oferta online?",
    writeUs="Dejar los datos del viaje",
    NOT_LIVE="Los precios online estarán disponibles aquí en breve. Deje abajo los datos del viaje y le avisaremos por email.",
    NO_OFFERS="Todavía no hay oferta online para este viaje. Deje abajo los datos del viaje y le avisaremos por email si la hay.",
    QUOTA="La tarificación online ha alcanzado su límite diario. Inténtelo mañana o deje abajo los datos del viaje.",
    generic="La tarificación no está disponible en este momento. Inténtelo de nuevo en unos instantes.",
    s4_last="Para dudas sobre la cobertura, la contratación o un siniestro, contacte con HelloSafe o con la aseguradora indicada en su póliza.",
    faq0_a="Seleccione su país de residencia en el formulario. Las ofertas mostradas son las disponibles para esa residencia.",
    faq_last=("¿Pago más por comparar aquí?", "No. El precio de cada oferta es el que cobra HelloSafe en el pago. Adler & Rochefort recibe una remuneración de HelloSafe."),
)

L["nl"] = dict(
    meta="Vergelijkingsdienst · Polissen verkocht door HelloSafe (ORIAS 21008038) · Herzien op 21 november 2026",
    s5_p="Op deze pagina biedt Adler & Rochefort uitsluitend een vergelijkings- en informatiedienst. Voor deze reisverzekeringen treedt Adler & Rochefort niet op als verzekeringsbemiddelaar: het adviseert niet, bemiddelt niet en sluit geen reisverzekeringen af. Premieberekening, afsluiten, betaling en klantenservice worden verzorgd door " + HS + ", de geregistreerde tussenpersoon die de polissen verkoopt; elke polis wordt gedragen door de verzekeraar die in de aanbieding staat. Adler & Rochefort ontvangt van HelloSafe een vergoeding voor elke polis die via deze pagina wordt afgesloten; de getoonde prijs is de prijs die bij betaling wordt gerekend.",
    disclosure="U rondt de aankoop af en betaalt in het beveiligde formulier van HelloSafe (ORIAS 21008038), dat deze polissen verkoopt. De verzekeraar in elke aanbieding draagt de polis. Adler & Rochefort biedt alleen deze vergelijking, treedt voor deze polissen niet op als bemiddelaar en ontvangt een vergoeding van HelloSafe.",
    trust0="Gerangschikt op dekking",
    form_h="Uw reis niet online te verzekeren?",
    form_lead="Is er nog geen online aanbieding voor uw reis, laat dan uw e-mailadres en de reisgegevens achter: wij laten het u per e-mail weten zodra er aanbiedingen zijn. Adler & Rochefort adviseert niet over en bemiddelt niet in reisverzekeringen — elke polis wordt online vergeleken en afgesloten.",
    btn_advice="Reis zonder online aanbieding?",
    writeUs="Reisgegevens achterlaten",
    NOT_LIVE="Online prijzen zijn hier binnenkort beschikbaar. Laat hieronder uw reisgegevens achter, dan laten wij het u per e-mail weten.",
    NO_OFFERS="Er is nog geen online aanbieding voor deze reis. Laat hieronder uw reisgegevens achter, dan laten wij het u per e-mail weten.",
    QUOTA="De online premieberekening heeft haar daglimiet bereikt. Probeer het morgen opnieuw of laat hieronder uw reisgegevens achter.",
    generic="De premieberekening is nu niet beschikbaar. Probeer het zo meteen opnieuw.",
    s4_last="Voor vragen over de dekking, het afsluiten of een schade neemt u contact op met HelloSafe of met de verzekeraar op uw polis.",
    faq0_a="Kies uw woonland in het formulier. De getoonde aanbiedingen zijn de aanbiedingen die voor dat woonland beschikbaar zijn.",
    faq_last=("Betaal ik meer als ik hier vergelijk?", "Nee. De prijs in elke aanbieding is de prijs die HelloSafe bij betaling rekent. Adler & Rochefort ontvangt een vergoeding van HelloSafe."),
)

L["fr"] = dict(
    meta="Service de comparaison · Contrats commercialisés par HelloSafe (ORIAS 21008038) · Mis à jour le 21 novembre 2026",
    s5_p="Sur cette page, Adler & Rochefort fournit uniquement un service de comparaison et d'information. Pour ces assurances voyage, Adler & Rochefort n'agit pas en qualité d'intermédiaire en assurance : il ne conseille pas, n'intermédie pas et ne conclut pas de contrats d'assurance voyage. La tarification, la souscription, le paiement et le service client sont assurés par " + HS + ", l'intermédiaire immatriculé qui distribue les contrats ; chaque contrat est porté par l'assureur indiqué sur l'offre. Adler & Rochefort perçoit de HelloSafe une rémunération pour chaque contrat souscrit via cette page ; le prix affiché est le prix facturé au paiement.",
    disclosure="Vous finalisez l'achat et payez sur le formulaire sécurisé de HelloSafe (ORIAS 21008038), qui distribue ces contrats. L'assureur indiqué sur chaque offre porte le contrat. Adler & Rochefort fournit uniquement cette comparaison, n'agit pas comme intermédiaire pour ces contrats et perçoit une rémunération de HelloSafe.",
    trust0="Classé par niveau de protection",
    form_h="Votre voyage n'est pas couvert en ligne ?",
    form_lead="Si aucune offre en ligne ne correspond encore à votre voyage, laissez votre e-mail et les détails du voyage : nous vous préviendrons par e-mail dès que des offres seront disponibles. Adler & Rochefort ne conseille pas et n'intermédie pas d'assurance voyage — chaque contrat est comparé et souscrit en ligne.",
    btn_advice="Voyage sans offre en ligne ?",
    writeUs="Laisser les détails du voyage",
    NOT_LIVE="Les prix en ligne seront bientôt disponibles ici. Laissez ci-dessous les détails du voyage et nous vous préviendrons par e-mail.",
    NO_OFFERS="Aucune offre en ligne ne correspond encore à ce voyage. Laissez ci-dessous les détails et nous vous préviendrons par e-mail.",
    QUOTA="La tarification en ligne a atteint sa limite du jour. Réessayez demain ou laissez ci-dessous les détails du voyage.",
    generic="La tarification n'est pas disponible pour le moment. Réessayez dans un instant.",
    s4_last="Pour toute question sur la couverture, la souscription ou un sinistre, contactez HelloSafe ou l'assureur indiqué sur votre contrat.",
    faq0_a="Sélectionnez votre pays de résidence dans le formulaire. Les offres affichées sont celles disponibles pour cette résidence.",
    faq_last=("Est-ce que je paie plus en comparant ici ?", "Non. Le prix affiché sur chaque offre est le prix facturé par HelloSafe au paiement. Adler & Rochefort perçoit une rémunération de HelloSafe."),
)

L["it"] = dict(
    meta="Servizio di confronto · Polizze distribuite da HelloSafe (ORIAS 21008038) · Aggiornato il 21 novembre 2026",
    s5_p="In questa pagina Adler & Rochefort fornisce esclusivamente un servizio di confronto e informazione. Per queste assicurazioni viaggio Adler & Rochefort non agisce come intermediario assicurativo: non fornisce consulenza, non intermedia e non conclude contratti di assicurazione viaggio. Preventivo, sottoscrizione, pagamento e assistenza clienti sono forniti da " + HS + ", l'intermediario registrato che distribuisce le polizze; ogni polizza è assunta dalla compagnia indicata nell'offerta. Adler & Rochefort riceve da HelloSafe un compenso per ogni polizza sottoscritta tramite questa pagina; il prezzo mostrato è quello addebitato al pagamento.",
    disclosure="Completi l'acquisto e paghi nel modulo sicuro di HelloSafe (ORIAS 21008038), che distribuisce queste polizze. La compagnia indicata in ogni offerta assicura la polizza. Adler & Rochefort fornisce solo questo confronto, non agisce come intermediario per queste polizze e riceve un compenso da HelloSafe.",
    trust0="Ordinato per protezione",
    form_h="Il tuo viaggio non è assicurabile online?",
    form_lead="Se non c'è ancora un'offerta online per il tuo viaggio, lascia la tua email e i dettagli del viaggio: ti avviseremo via email quando ci saranno offerte disponibili. Adler & Rochefort non fornisce consulenza né intermedia assicurazioni viaggio — ogni polizza si confronta e si sottoscrive online.",
    btn_advice="Viaggio senza offerta online?",
    writeUs="Lascia i dettagli del viaggio",
    NOT_LIVE="I prezzi online saranno disponibili qui a breve. Lascia qui sotto i dettagli del viaggio e ti avviseremo via email.",
    NO_OFFERS="Non c'è ancora un'offerta online per questo viaggio. Lascia qui sotto i dettagli e ti avviseremo via email.",
    QUOTA="Il preventivo online ha raggiunto il limite giornaliero. Riprova domani o lascia qui sotto i dettagli del viaggio.",
    generic="Il preventivo non è disponibile in questo momento. Riprova tra poco.",
    s4_last="Per domande su copertura, sottoscrizione o sinistri, contatta HelloSafe o la compagnia indicata nella tua polizza.",
    faq0_a="Seleziona il tuo paese di residenza nel modulo. Le offerte mostrate sono quelle disponibili per quella residenza.",
    faq_last=("Pago di più confrontando qui?", "No. Il prezzo di ogni offerta è quello addebitato da HelloSafe al pagamento. Adler & Rochefort riceve un compenso da HelloSafe."),
)

L["pl"] = dict(
    meta="Porównywarka · Polisy sprzedaje HelloSafe (ORIAS 21008038) · Aktualizacja: 21 listopada 2026",
    s5_p="Na tej stronie Adler & Rochefort świadczy wyłącznie usługę porównania i informacji. W zakresie tych ubezpieczeń podróżnych Adler & Rochefort nie działa jako pośrednik ubezpieczeniowy: nie doradza, nie pośredniczy i nie zawiera umów ubezpieczenia podróżnego. Wycenę, zawarcie umowy, płatność i obsługę klienta zapewnia " + HS + ", zarejestrowany pośrednik, który dystrybuuje polisy; każdej polisy udziela ubezpieczyciel wskazany w ofercie. Adler & Rochefort otrzymuje od HelloSafe wynagrodzenie za każdą polisę zawartą przez tę stronę; pokazana cena jest ceną pobieraną przy płatności.",
    disclosure="Zakup kończysz i płacisz w bezpiecznym formularzu HelloSafe (ORIAS 21008038), który dystrybuuje te polisy. Polisy udziela ubezpieczyciel wskazany w ofercie. Adler & Rochefort udostępnia jedynie to porównanie, nie działa jako pośrednik dla tych polis i otrzymuje wynagrodzenie od HelloSafe.",
    trust0="Sortowane według ochrony",
    form_h="Twojej podróży nie da się ubezpieczyć online?",
    form_lead="Jeśli dla Twojej podróży nie ma jeszcze oferty online, zostaw e-mail i szczegóły podróży: powiadomimy Cię e-mailem, gdy pojawią się oferty. Adler & Rochefort nie doradza i nie pośredniczy w ubezpieczeniach podróżnych — każdą polisę porównujesz i kupujesz online.",
    btn_advice="Podróż bez oferty online?",
    writeUs="Zostaw szczegóły podróży",
    NOT_LIVE="Ceny online będą tu wkrótce dostępne. Zostaw poniżej szczegóły podróży, a powiadomimy Cię e-mailem.",
    NO_OFFERS="Dla tej podróży nie ma jeszcze oferty online. Zostaw poniżej szczegóły, a powiadomimy Cię e-mailem.",
    QUOTA="Wycena online osiągnęła dzienny limit. Spróbuj jutro lub zostaw poniżej szczegóły podróży.",
    generic="Wycena jest teraz niedostępna. Spróbuj ponownie za chwilę.",
    s4_last="W sprawie zakresu ochrony, zawarcia umowy lub szkody kontaktuj się z HelloSafe lub z ubezpieczycielem wskazanym w polisie.",
    faq0_a="Wybierz w formularzu kraj zamieszkania. Pokazane oferty to te dostępne dla tego kraju.",
    faq_last=("Czy płacę więcej, porównując tutaj?", "Nie. Cena w każdej ofercie to cena pobierana przez HelloSafe przy płatności. Adler & Rochefort otrzymuje wynagrodzenie od HelloSafe."),
)

L["se"] = dict(
    meta="Jämförelsetjänst · Försäkringarna säljs av HelloSafe (ORIAS 21008038) · Uppdaterad 21 november 2026",
    s5_p="På den här sidan tillhandahåller Adler & Rochefort endast en jämförelse- och informationstjänst. För dessa reseförsäkringar agerar Adler & Rochefort inte som försäkringsförmedlare: företaget ger inga råd, förmedlar inte och ingår inga reseförsäkringsavtal. Prissättning, tecknande, betalning och kundtjänst sköts av " + HS + ", den registrerade förmedlare som säljer försäkringarna; varje försäkring meddelas av det bolag som anges i erbjudandet. Adler & Rochefort får ersättning från HelloSafe för varje försäkring som tecknas via sidan; det visade priset är det pris som debiteras vid betalning.",
    disclosure="Du slutför köpet och betalar i det säkra formuläret hos HelloSafe (ORIAS 21008038), som säljer dessa försäkringar. Bolaget i varje erbjudande meddelar försäkringen. Adler & Rochefort tillhandahåller endast jämförelsen, förmedlar inte dessa försäkringar och får ersättning från HelloSafe.",
    trust0="Sorterat efter skydd",
    form_h="Går resan inte att försäkra online?",
    form_lead="Om inget onlineerbjudande passar din resa ännu, lämna din e-post och reseuppgifterna: vi meddelar dig via e-post när erbjudanden finns. Adler & Rochefort ger inga råd om och förmedlar inte reseförsäkringar — varje försäkring jämförs och tecknas online.",
    btn_advice="Resa utan onlineerbjudande?",
    writeUs="Lämna reseuppgifter",
    NOT_LIVE="Onlinepriser blir snart tillgängliga här. Lämna dina reseuppgifter nedan så meddelar vi dig via e-post.",
    NO_OFFERS="Det finns ännu inget onlineerbjudande för resan. Lämna uppgifterna nedan så meddelar vi dig via e-post.",
    QUOTA="Onlineprissättningen har nått dagens gräns. Försök igen i morgon eller lämna reseuppgifterna nedan.",
    generic="Prissättningen är inte tillgänglig just nu. Försök igen om en stund.",
    s4_last="Vid frågor om skyddet, tecknandet eller en skada kontaktar du HelloSafe eller bolaget som anges i din försäkring.",
    faq0_a="Välj ditt bosättningsland i formuläret. De erbjudanden som visas är de som finns för det landet.",
    faq_last=("Betalar jag mer om jag jämför här?", "Nej. Priset i varje erbjudande är det pris HelloSafe debiterar vid betalning. Adler & Rochefort får ersättning från HelloSafe."),
)

L["dk"] = dict(
    meta="Sammenligningstjeneste · Forsikringerne sælges af HelloSafe (ORIAS 21008038) · Opdateret 21. november 2026",
    s5_p="På denne side leverer Adler & Rochefort udelukkende en sammenlignings- og informationstjeneste. For disse rejseforsikringer optræder Adler & Rochefort ikke som forsikringsformidler: virksomheden rådgiver ikke, formidler ikke og indgår ikke rejseforsikringsaftaler. Prisberegning, tegning, betaling og kundeservice varetages af " + HS + ", den registrerede formidler, der sælger forsikringerne; hver police tegnes af det selskab, der står i tilbuddet. Adler & Rochefort modtager et vederlag fra HelloSafe for hver police tegnet via siden; den viste pris er den pris, der opkræves ved betaling.",
    disclosure="Du gennemfører købet og betaler i den sikre formular hos HelloSafe (ORIAS 21008038), som sælger disse forsikringer. Selskabet i hvert tilbud tegner policen. Adler & Rochefort leverer kun sammenligningen, formidler ikke disse forsikringer og modtager et vederlag fra HelloSafe.",
    trust0="Sorteret efter dækning",
    form_h="Kan rejsen ikke forsikres online?",
    form_lead="Hvis intet onlinetilbud passer til din rejse endnu, så efterlad din e-mail og rejseoplysningerne: vi giver dig besked på e-mail, når der er tilbud. Adler & Rochefort rådgiver ikke om og formidler ikke rejseforsikringer — hver police sammenlignes og tegnes online.",
    btn_advice="Rejse uden onlinetilbud?",
    writeUs="Efterlad rejseoplysninger",
    NOT_LIVE="Onlinepriser bliver snart tilgængelige her. Efterlad dine rejseoplysninger nedenfor, så giver vi besked på e-mail.",
    NO_OFFERS="Der er endnu intet onlinetilbud til denne rejse. Efterlad oplysningerne nedenfor, så giver vi besked på e-mail.",
    QUOTA="Onlineprisberegningen har nået dagens grænse. Prøv igen i morgen, eller efterlad rejseoplysningerne nedenfor.",
    generic="Prisberegningen er ikke tilgængelig lige nu. Prøv igen om lidt.",
    s4_last="Ved spørgsmål om dækningen, tegningen eller en skade kontakter du HelloSafe eller selskabet på din police.",
    faq0_a="Vælg dit bopælsland i formularen. De viste tilbud er dem, der findes for det land.",
    faq_last=("Betaler jeg mere ved at sammenligne her?", "Nej. Prisen i hvert tilbud er den pris, HelloSafe opkræver ved betaling. Adler & Rochefort modtager et vederlag fra HelloSafe."),
)

L["il"] = dict(
    meta="שירות השוואה · הפוליסות משווקות על ידי HelloSafe (ORIAS 21008038) · עודכן ב־21 בנובמבר 2026",
    s5_p="בעמוד זה Adler & Rochefort מספקת שירות השוואה ומידע בלבד. בביטוחי נסיעות אלה Adler & Rochefort אינה פועלת כמתווכת ביטוח: היא אינה מייעצת, אינה מתווכת ואינה מתקשרת בחוזי ביטוח נסיעות. התמחור, ההצטרפות, התשלום ושירות הלקוחות ניתנים על ידי " + HS + ", המתווך הרשום שמשווק את הפוליסות; כל פוליסה מונפקת על ידי חברת הביטוח המצוינת בהצעה. Adler & Rochefort מקבלת מ־HelloSafe תגמול על כל פוליסה שנרכשת דרך עמוד זה; המחיר המוצג הוא המחיר שנגבה בתשלום.",
    disclosure="משלימים את הרכישה ומשלמים בטופס המאובטח של HelloSafe (ORIAS 21008038), שמשווקת פוליסות אלה. חברת הביטוח המצוינת בכל הצעה מנפיקה את הפוליסה. Adler & Rochefort מספקת את ההשוואה בלבד, אינה פועלת כמתווכת בפוליסות אלה ומקבלת תגמול מ־HelloSafe.",
    trust0="מדורג לפי רמת ההגנה",
    form_h="לא נמצאה הצעה מקוונת לנסיעה שלכם?",
    form_lead="אם עדיין אין הצעה מקוונת שמתאימה לנסיעה, השאירו כתובת דוא״ל ופרטי נסיעה ונעדכן אתכם בדוא״ל כשיהיו הצעות. Adler & Rochefort אינה מייעצת ואינה מתווכת בביטוחי נסיעות — כל פוליסה מושווית ונרכשת באופן מקוון.",
    btn_advice="אין הצעה מקוונת לנסיעה?",
    writeUs="השאירו פרטי נסיעה",
    NOT_LIVE="מחירים מקוונים יהיו זמינים כאן בקרוב. השאירו למטה את פרטי הנסיעה ונעדכן אתכם בדוא״ל.",
    NO_OFFERS="עדיין אין הצעה מקוונת לנסיעה זו. השאירו למטה את הפרטים ונעדכן אתכם בדוא״ל.",
    QUOTA="התמחור המקוון הגיע למגבלה היומית. נסו שוב מחר או השאירו למטה את פרטי הנסיעה.",
    generic="התמחור אינו זמין כרגע. נסו שוב בעוד רגע.",
    s4_last="לשאלות על הכיסוי, ההצטרפות או תביעה, פנו ל־HelloSafe או לחברת הביטוח המצוינת בפוליסה.",
    faq0_a="בחרו בטופס את מדינת המגורים. ההצעות המוצגות הן אלה הזמינות למדינה זו.",
    faq_last=("האם אשלם יותר אם אשווה כאן?", "לא. המחיר בכל הצעה הוא המחיר ש־HelloSafe גובה בתשלום. Adler & Rochefort מקבלת תגמול מ־HelloSafe."),
)

L["zh"] = dict(
    meta="比价服务 · 保单由 HelloSafe 销售（ORIAS 21008038）· 更新于 2026 年 11 月 21 日",
    s5_p="在本页面，Adler & Rochefort 仅提供比价和信息服务。就这些旅行保险而言，Adler & Rochefort 不以保险中介身份行事：不提供建议、不进行中介、也不订立旅行保险合同。报价、投保、付款和客户服务由 " + HS + " 提供，即销售这些保单的注册中介；每份保单由报价中注明的保险公司承保。每通过本页面购买一份保单，Adler & Rochefort 会从 HelloSafe 获得报酬；显示的价格即付款时收取的价格。",
    disclosure="您将在 HelloSafe（ORIAS 21008038）的安全表单上完成购买并付款，HelloSafe 负责销售这些保单。每个报价中注明的保险公司承保该保单。Adler & Rochefort 仅提供本比价服务，不担任这些保单的中介，并从 HelloSafe 获得报酬。",
    trust0="按保障水平排序",
    form_h="您的行程暂无在线报价？",
    form_lead="如果您的行程暂时没有匹配的在线报价，请留下电子邮箱和行程信息：有报价时我们会通过电子邮件通知您。Adler & Rochefort 不提供旅行保险建议，也不进行中介——所有保单均在线比较和购买。",
    btn_advice="行程暂无在线报价？",
    writeUs="留下行程信息",
    NOT_LIVE="在线价格即将在此提供。请在下方留下行程信息，我们会通过电子邮件通知您。",
    NO_OFFERS="此行程暂无在线报价。请在下方留下行程信息，有报价时我们会通过电子邮件通知您。",
    QUOTA="今日在线报价次数已达上限。请明天再试，或在下方留下行程信息。",
    generic="报价暂时不可用，请稍后再试。",
    s4_last="如对保障、投保或理赔有疑问，请联系 HelloSafe 或保单上注明的保险公司。",
    faq0_a="请在表单中选择您的居住国。显示的报价即该居住国可购买的报价。",
    faq_last=("在这里比价会多付钱吗？", "不会。每个报价显示的价格即 HelloSafe 付款时收取的价格。Adler & Rochefort 从 HelloSafe 获得报酬。"),
)


# form success message (replaces the template's "we reply in writing")
OK_MSG = {'en': 'We have your trip details. We will let you know by email when online offers are available for it.', 'de': 'Wir haben Ihre Reisedaten erhalten und benachrichtigen Sie per E-Mail, sobald Online-Angebote verfügbar sind.', 'pt': 'Recebemos os dados da sua viagem. Avisamos por email quando houver propostas online disponíveis.', 'es': 'Hemos recibido los datos de su viaje. Le avisaremos por email cuando haya ofertas online disponibles.', 'nl': 'Wij hebben uw reisgegevens ontvangen en laten het u per e-mail weten zodra er online aanbiedingen zijn.', 'fr': 'Nous avons bien reçu les détails de votre voyage. Nous vous préviendrons par e-mail dès que des offres en ligne seront disponibles.', 'it': 'Abbiamo ricevuto i dettagli del viaggio. Ti avviseremo via email quando ci saranno offerte online disponibili.', 'pl': 'Otrzymaliśmy szczegóły podróży. Powiadomimy Cię e-mailem, gdy pojawią się oferty online.', 'se': 'Vi har tagit emot dina reseuppgifter och meddelar dig via e-post när onlineerbjudanden finns.', 'dk': 'Vi har modtaget dine rejseoplysninger og giver dig besked på e-mail, når der er onlinetilbud.', 'il': 'קיבלנו את פרטי הנסיעה. נעדכן אתכם בדוא״ל כשיהיו הצעות מקוונות.', 'zh': '我们已收到您的行程信息。有在线报价时，我们会通过电子邮件通知您。'}


# GDPR smallprint of the trip-details form: (template text, replacement)
SMALLPRINT = {'en': ('Your details are used only to prepare your quotation, under the GDPR.', 'Your details are used only to let you know about online offers for this trip, under the GDPR.'), 'de': ('Ihre Angaben werden nur zur Erstellung Ihres Angebots verwendet, gemäß DSGVO.', 'Ihre Angaben werden nur verwendet, um Sie über Online-Angebote für diese Reise zu informieren, gemäß DSGVO.'), 'pt': ('Os seus dados servem apenas para preparar a proposta, nos termos do RGPD.', 'Os seus dados servem apenas para o avisar de propostas online para esta viagem, nos termos do RGPD.'), 'es': ('Sus datos solo se usan para preparar la propuesta, conforme al RGPD.', 'Sus datos solo se usan para avisarle de ofertas online para este viaje, conforme al RGPD.'), 'nl': ('Uw gegevens worden alleen gebruikt om uw offerte voor te bereiden, volgens de AVG.', 'Uw gegevens worden alleen gebruikt om u te informeren over online aanbiedingen voor deze reis, volgens de AVG.'), 'fr': ('Vos données servent uniquement à préparer votre proposition, conformément au RGPD.', 'Vos données servent uniquement à vous prévenir des offres en ligne pour ce voyage, conformément au RGPD.'), 'it': ('I suoi dati servono solo a preparare il preventivo, ai sensi del GDPR.', 'I suoi dati servono solo ad avvisarla delle offerte online per questo viaggio, ai sensi del GDPR.'), 'pl': ('Twoje dane służą wyłącznie do przygotowania oferty, zgodnie z RODO.', 'Twoje dane służą wyłącznie do powiadomienia Cię o ofertach online dla tej podróży, zgodnie z RODO.'), 'se': ('Dina uppgifter används bara för att ta fram offerten, enligt GDPR.', 'Dina uppgifter används bara för att meddela dig om onlineerbjudanden för resan, enligt GDPR.'), 'dk': ('Dine oplysninger bruges kun til at udarbejde tilbuddet, i henhold til GDPR.', 'Dine oplysninger bruges kun til at give dig besked om onlinetilbud til rejsen, i henhold til GDPR.'), 'il': ('הפרטים משמשים רק להכנת ההצעה, בהתאם ל־GDPR.', 'הפרטים משמשים רק כדי לעדכן אתכם על הצעות מקוונות לנסיעה זו, בהתאם ל־GDPR.'), 'zh': ('您的信息仅用于准备报价，符合 GDPR 规定。', '您的信息仅用于通知您此行程的在线报价，符合 GDPR 规定。')}


def _deep(base, over):
    out = dict(base)
    for k, v in over.items():
        if isinstance(v, dict) and isinstance(base.get(k), dict):
            out[k] = _deep(base[k], v)
        else:
            out[k] = v
    return out


def apply(C):
    """Return a new content dict with the November 21 repositioning applied."""
    R = {}
    for lang, t in C.items():
        if lang in O:
            R[lang] = _deep(t, O[lang])
            R[lang]["ok_msg"] = OK_MSG[lang]
            continue
        x = L[lang]
        t = _deep(t, dict(
            meta=x["meta"], s5_p=x["s5_p"], form_h=x["form_h"], form_lead=x["form_lead"], btn_advice=x["btn_advice"],
            ui=dict(f=dict(disclosure=x["disclosure"], writeUs=x["writeUs"]),
                    err=dict(NOT_LIVE=x["NOT_LIVE"], NO_OFFERS=x["NO_OFFERS"], QUOTA_EXCEEDED=x["QUOTA"], generic=x["generic"]))))
        t["trust"] = [x["trust0"]] + list(t["trust"][1:])
        t["s4_list"] = list(t["s4_list"][:-1]) + [x["s4_last"]]
        faq = list(t["faq"])
        faq[0] = (faq[0][0], x["faq0_a"])
        faq[-1] = x["faq_last"]
        t["faq"] = faq
        t["ok_msg"] = OK_MSG[lang]
        R[lang] = t
    return R
