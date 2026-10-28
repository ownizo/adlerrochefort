# -*- coding: utf-8 -*-
"""Content for the "English-speaking / German-speaking insurance broker in
Portugal and Spain" pages (October 2026).

Why: the AI-visibility test showed Gemini answering "Which English-speaking
insurance broker should I use in Portugal?" and "Welcher Versicherungsmakler
in Portugal ist auf deutsche Kunden spezialisiert?" with a competitor, and no
page on the site answered either question directly. Every statement here is
already made elsewhere on the site (ASF registration, LPS in Spain, written
service, 24-hour reply, insurer list, memberships, commission). Built by
scripts/build-broker-language-pages.py.
"""

PAGES = {
    "en": {
        "template": "en/why-use-an-insurance-broker",
        "path": "/en/english-speaking-insurance-broker-portugal-spain/",
        "title": "English-Speaking Insurance Broker in Portugal and Spain",
        "description": "ASF-registered insurance broker for expats and international families in Portugal and Spain: quotes, policy wording and claims explained in writing, in English.",
        "breadcrumb": "English-speaking insurance broker",
        "badge": "Portugal and Spain, in English",
        "h1": "English-speaking insurance broker in <em>Portugal and Spain</em>",
        "subtitle": "Policies in Portugal and Spain are issued in Portuguese or Spanish. We compare them, explain them and stay with you at the claim, in writing, in English.",
        "sections": [
            ("who", "Who we are", None,
             "<p class=\"lead\">Adler &amp; Rochefort is the trading name of Ownizo, Unipessoal Lda., an insurance intermediary registered with Portugal&rsquo;s insurance supervisor, the ASF, under no. 425591790/3. Our head office is in Lisbon, and we place Spanish risks under the EU freedom to provide services.</p>"
             "<ul><li><strong>Not tied to any insurer.</strong> We compare within the insurer relationships we hold and say plainly when something falls outside them.</li>"
             "<li><strong>Founder:</strong> Hugo Gon&ccedil;alves, with ongoing training at the Chartered Insurance Institute (CII), London.</li>"
             "<li><strong>Member of</strong> afpop, NCA Portugal and the British-Portuguese Chamber of Commerce (BPCC).</li></ul>"),
            ("how", "How we work", "In writing",
             "<ul><li>Quotes, the explanation of the conditions, correspondence and claims support are in English, in writing, so you can read back everything that was agreed.</li>"
             "<li>The policy itself is issued by the insurer in Portuguese or Spanish. Before you sign, we tell you in writing what the sums insured, conditions and exclusions mean for you.</li>"
             "<li>We reply within 24 working hours. No call or meeting is needed at any stage.</li>"
             "<li>A broker is normally paid by the insurer through commission built into the premium, not a separate fee charged to you. We confirm this for your case before anything is arranged.</li></ul>"),
            ("what", "What we insure", "Lines of cover",
             "<ul>"
             "<li><strong>International health insurance</strong> with Allianz Care and Cigna Global, for expats in Portugal, Spain or anywhere else: <a href=\"/en/international-health-insurance/\">international health insurance</a>.</li>"
             "<li><strong>Private health insurance</strong> in <a href=\"/en/health-insurance-quote/\">Portugal</a> and <a href=\"/en/health-insurance-spain/\">Spain</a>, including the cover needed for residence visas.</li>"
             "<li><strong>High-value homes</strong> in <a href=\"/en/home-insurance-quote/\">Portugal</a> and <a href=\"/en/home-insurance-spain/\">Spain</a>, with Chubb, Hiscox and Liberty, and <a href=\"/en/second-home-insurance-portugal/\">second homes</a> that stand empty part of the year.</li>"
             "<li><strong>Art, jewellery and watches</strong> on agreed value: <a href=\"/en/art-jewellery-watches-insurance/\">art, jewellery and watch insurance</a>.</li>"
             "<li><strong>Family liability</strong>, <strong>car</strong> and <strong>life and mortgage protection</strong>: <a href=\"/en/family-liability-insurance-spain/\">family liability in Spain</a>, <a href=\"/en/car-insurance-portugal/\">car insurance in Portugal</a>, <a href=\"/en/mortgage-protection-spain/\">mortgage protection in Spain</a>.</li>"
             "<li><strong>Landlords</strong> letting long-term or to holidaymakers: <a href=\"/en/landlord-insurance-portugal/\">Portugal</a>, <a href=\"/en/landlord-insurance-spain/\">Spain</a>.</li>"
             "</ul>"),
            ("both", "Portugal and Spain together", None,
             "<p>Many of our clients have a home, a family member or a business on both sides of the border. Chubb and Hiscox write both countries, so homes and valuables in Portugal and in Spain can often be insured with the same adviser and aligned conditions, instead of two unrelated policies in two languages.</p>"
             "<p>We work online and in writing, so it makes no difference where in Portugal or Spain you live: Lisbon, Cascais, the Algarve, the Costa del Sol, the Balearics, the Costa Blanca, Madrid or Barcelona.</p>"),
        ],
        "faq_title": "Frequently asked questions",
        "faq": [
            ("Is everything really in English?",
             "Quotes, the explanation of the conditions, correspondence and claims support are in English, in writing. The policy document itself is issued by the insurer in Portuguese or Spanish, and we explain it before you sign."),
            ("Are you registered to arrange insurance in Portugal and Spain?",
             "Yes. Adler & Rochefort (Ownizo, Unipessoal Lda.) is registered with Portugal's ASF under no. 425591790/3 and places Spanish risks under the EU freedom to provide services."),
            ("Are you tied to one insurer?",
             "No. We compare within the insurer relationships we hold, such as Allianz Care, Cigna Global, Chubb, Hiscox and Liberty, and say plainly when something falls outside them."),
            ("Does using a broker cost extra?",
             "A broker is normally paid by the insurer through commission built into the premium, not a separate fee charged to you. We confirm this for your case before anything is arranged."),
            ("Do I need to meet you or call you?",
             "No. We work in writing and reply within 24 working hours. If you prefer to talk, you can also write to us on WhatsApp."),
        ],
        "switch": {"de": "/de/deutschsprachiger-versicherungsmakler-portugal-spanien/"},
        "hreflang": "en-GB",
    },
    "de": {
        "template": "de/private-clients-portugal",
        "path": "/de/deutschsprachiger-versicherungsmakler-portugal-spanien/",
        "title": "Deutschsprachiger Versicherungsmakler in Portugal und Spanien",
        "description": "ASF-registrierter Versicherungsmakler für deutsche Kunden in Portugal und Spanien: Angebote, Bedingungen und Schadenbegleitung schriftlich auf Deutsch.",
        "breadcrumb": "Deutschsprachiger Versicherungsmakler",
        "eyebrow": "Portugal und Spanien, auf Deutsch",
        "h1": "Deutschsprachiger Versicherungsmakler in Portugal und Spanien",
        "subtitle": "Policen in Portugal und Spanien werden auf Portugiesisch oder Spanisch ausgestellt. Wir vergleichen sie, erklären sie und begleiten Sie im Schadenfall, schriftlich auf Deutsch.",
        "meta": "Registrierter Versicherungsvermittler · ASF Nr. 425591790/3 · Lissabon · Portugal und Spanien",
        "sections": [
            ("wer", "Wer wir sind", None,
             "<p>Adler &amp; Rochefort ist der Handelsname der Ownizo, Unipessoal Lda., eines bei der portugiesischen Versicherungsaufsicht ASF unter der Nr. 425591790/3 registrierten Versicherungsvermittlers. Unser Sitz ist in Lissabon; spanische Risiken vermitteln wir im Rahmen der EU-Dienstleistungsfreiheit.</p>"
             "<ul><li><strong>An keinen Versicherer gebunden.</strong> Wir vergleichen innerhalb der Versicherer, mit denen wir zusammenarbeiten, und sagen offen, wenn etwas außerhalb davon liegt.</li>"
             "<li><strong>Gründer:</strong> Hugo Gon&ccedil;alves, mit laufender Weiterbildung am Chartered Insurance Institute (CII), London.</li></ul>"),
            ("ablauf-de", "So arbeiten wir", "Schriftlich",
             "<ul><li>Angebote, Erläuterungen der Bedingungen, Korrespondenz und Schadenbegleitung erhalten Sie schriftlich auf Deutsch, damit Sie alles Vereinbarte nachlesen können.</li>"
             "<li>Die Police selbst stellt der Versicherer auf Portugiesisch bzw. Spanisch aus. Bevor Sie unterschreiben, erklären wir Ihnen schriftlich, was Summen, Bedingungen und Ausschlüsse für Sie bedeuten.</li>"
             "<li>Wir antworten innerhalb von 24 Arbeitsstunden. Ein Telefonat oder Termin ist zu keinem Zeitpunkt nötig.</li>"
             "<li>Ein Makler wird in der Regel vom Versicherer über eine in der Prämie enthaltene Provision bezahlt, nicht über ein gesondertes Honorar. Das bestätigen wir Ihnen für Ihren Fall, bevor etwas abgeschlossen wird.</li></ul>"),
            ("was", "Was wir versichern", "Sparten",
             "<ul>"
             "<li><strong>Internationale Krankenversicherung</strong> mit Allianz Care und Cigna Global: <a href=\"/de/internationale-krankenversicherung/\">internationale Krankenversicherung</a>; private Krankenversicherung in <a href=\"/de/krankenversicherung-portugal/\">Portugal</a> und <a href=\"/de/krankenversicherung-spanien/\">Spanien</a>.</li>"
             "<li><strong>Hochwertige Häuser</strong> in <a href=\"/de/hausversicherung-portugal/\">Portugal</a> und <a href=\"/de/hausversicherung-spanien/\">Spanien</a>, mit Chubb, Hiscox und Liberty.</li>"
             "<li><strong>Ferienimmobilien</strong>, die einen Teil des Jahres leer stehen: <a href=\"/de/leerstand-ferienhaus-versicherung-portugal-spanien/\">Ferienhaus in Portugal oder Spanien: die Leerstandsklausel</a>.</li>"
             "<li><strong>Schmuck, Uhren und Kunst</strong> zu einem vereinbarten Wert: <a href=\"/de/schmuck-uhren-versicherung-portugal-spanien/\">Schmuck und Uhren versichern</a>.</li>"
             "<li><strong>Privathaftpflicht</strong>, <strong>Auto</strong> sowie <strong>Leben und Hypothekenschutz</strong>: <a href=\"/de/privathaftpflicht-spanien/\">Privathaftpflicht in Spanien</a>, <a href=\"/de/autoversicherung-portugal/\">Autoversicherung in Portugal</a>, <a href=\"/de/hypothekenschutz-spanien/\">Hypothekenschutz in Spanien</a>.</li>"
             "<li><strong>Umzug aus Deutschland</strong>: <a href=\"/de/umzug-deutschland-portugal-versicherung/\">nach Portugal</a>, <a href=\"/de/umzug-deutschland-spanien-versicherung/\">nach Spanien</a>.</li>"
             "</ul>"),
            ("beide", "Portugal und Spanien zusammen", None,
             "<p>Viele unserer Kunden haben ein Haus, Familie oder ein Unternehmen auf beiden Seiten der Grenze. Chubb und Hiscox versichern in beiden Ländern, sodass Häuser und Wertsachen in Portugal und Spanien oft bei demselben Berater und mit abgestimmten Bedingungen versichert werden können, statt mit zwei unabhängigen Policen in zwei Sprachen.</p>"
             "<p>Wir arbeiten online und schriftlich; es spielt also keine Rolle, wo in Portugal oder Spanien Sie wohnen: Lissabon, Cascais, die Algarve, die Costa del Sol, Mallorca, die Costa Blanca oder die Kanaren.</p>"),
        ],
        "faq_title": "Häufige Fragen",
        "faq": [
            ("Läuft wirklich alles auf Deutsch?",
             "Angebote, Erläuterungen der Bedingungen, Korrespondenz und Schadenbegleitung erhalten Sie schriftlich auf Deutsch. Die Police selbst stellt der Versicherer auf Portugiesisch oder Spanisch aus; wir erklären sie Ihnen vor der Unterschrift."),
            ("Dürfen Sie in Portugal und Spanien vermitteln?",
             "Ja. Adler & Rochefort (Ownizo, Unipessoal Lda.) ist bei der portugiesischen ASF unter der Nr. 425591790/3 registriert und vermittelt spanische Risiken im Rahmen der EU-Dienstleistungsfreiheit."),
            ("Sind Sie an einen Versicherer gebunden?",
             "Nein. Wir vergleichen innerhalb der Versicherer, mit denen wir zusammenarbeiten, etwa Allianz Care, Cigna Global, Chubb, Hiscox und Liberty, und sagen offen, wenn etwas außerhalb davon liegt."),
            ("Kostet ein Makler extra?",
             "Ein Makler wird in der Regel vom Versicherer über eine in der Prämie enthaltene Provision bezahlt, nicht über ein gesondertes Honorar. Das bestätigen wir Ihnen für Ihren Fall, bevor etwas abgeschlossen wird."),
            ("Hilft Ihr Büro auch bei einer Ferienimmobilie?",
             "Ja. Bei Ferienhäusern kommt es vor allem auf die Leerstandsklausel, Wertsachen im Haus und die Vermietung an. Wir prüfen das schriftlich, bevor Sie sich entscheiden."),
        ],
        "switch": {"en": "/en/english-speaking-insurance-broker-portugal-spain/"},
        "hreflang": "de",
    },
}
