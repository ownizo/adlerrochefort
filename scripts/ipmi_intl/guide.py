"""'Domestic or international?' guide — one page per language under each IPMI hub.

Every rule comes from facts already published on the site or stated by the owner
(see scripts/ipmi_intl/README.md and the EN hub/domestic health page):
  * international plans are for people living outside their country of nationality;
  * US citizens: Cigna Global (Allianz Care does not accept them);
  * Cigna Close Care: country of residence + country of nationality;
  * in Spain the firm places international plans only;
  * Portuguese domestic plans: NIF + residential address in Portugal; new members
    over 65 generally not accepted, except MGEN for households of two or more;
    pre-existing conditions generally excluded (MGEN: 365-day waiting period);
  * international plans assess pre-existing conditions in medical underwriting.

The guide asks NO health question (no clinical data on public pages, in any
language — see scripts/check-clinical-data-guard.mjs). Answers stay in the
browser: nothing is stored or sent.
"""

# slug under each language's IPMI hub
SLUG = {
    "pt": "seguro-domestico-ou-internacional/", "en": "domestic-or-international/",
    "de": "inlaendisch-oder-international/", "es": "domestico-o-internacional/",
    "nl": "binnenlands-of-internationaal/", "fr": "local-ou-international/",
    "it": "locale-o-internazionale/", "pl": "krajowe-czy-miedzynarodowe/",
    "se": "lokal-eller-internationell/", "dk": "lokal-eller-international/",
    "il": "domestic-or-international/", "zh": "domestic-or-international/",
}

# domestic health page per language (exists in public/)
DOMESTIC = {
    "pt": "/seguros/saude-portugal-espanha/", "en": "/en/health-insurance-portugal-spain/",
    "de": "/de/krankenversicherung-portugal-spanien/", "es": "/es/seguro-salud-espana-portugal/",
    "nl": "/nl/zorgverzekering-portugal-spanje/", "fr": "/fr/assurance-sante-portugal-espagne/",
    "it": "/it/assicurazione-sanitaria-portogallo-spagna/", "pl": "/pl/ubezpieczenie-zdrowotne-portugalia-hiszpania/",
    "se": "/se/sjukvardsforsakring-portugal-spanien/", "dk": "/dk/sundhedsforsikring-portugal-spanien/",
    "il": "/il/health-insurance-portugal-spain/", "zh": "/zh/health-insurance-portugal-spain/",
}

# live wording (no fixed response times anywhere on the site)
SUCCESS = {
    "pt": "Por se tratar de propostas específicas, que exigem uma análise detalhada do risco, os prazos de resposta podem variar.",
    "en": "We will come back to you in writing. As each proposal is specific and requires a detailed analysis of the risk, response times may vary.",
    "de": "Wir antworten Ihnen schriftlich. Da es sich um individuelle Angebote handelt, die eine eingehende Risikoanalyse erfordern, können die Antwortzeiten variieren.",
    "es": "Al tratarse de propuestas específicas, que requieren un análisis detallado del riesgo, los plazos de respuesta pueden variar.",
    "nl": "Wij antwoorden schriftelijk, in het Engels. Omdat het om specifieke voorstellen gaat, die een grondige analyse van het risico vereisen, kunnen de reactietijden variëren.",
    "fr": "Nous vous répondons par écrit, en anglais. S’agissant de propositions spécifiques, qui exigent une analyse détaillée du risque, les délais de réponse peuvent varier.",
    "it": "Le rispondiamo per iscritto, in inglese. Trattandosi di proposte specifiche, che richiedono un’analisi dettagliata del rischio, i tempi di risposta possono variare.",
    "pl": "Odpowiemy na piśmie, po angielsku. Ponieważ przygotowujemy indywidualne propozycje, wymagające szczegółowej analizy ryzyka, czas odpowiedzi może się różnić.",
    "se": "Vi svarar skriftligt, på engelska. Eftersom varje förslag är individuellt och kräver en noggrann analys av risken kan svarstiden variera.",
    "dk": "Vi svarer skriftligt, på engelsk. Da hvert forslag er individuelt og kræver en grundig analyse af risikoen, kan svartiden variere.",
    "il": "נשיב בכתב, באנגלית. מאחר שמדובר בהצעות ייעודיות, הדורשות ניתוח מפורט של הסיכון, זמני המענה עשויים להשתנות.",
    "zh": "我们将以英文书面回复。由于每份方案均为量身定制，需要对风险进行详细分析，答复时间可能有所不同。",
}

META = {
    "pt": "Mediador de seguros registado na ASF n.º 425591790/3 · Lisboa · Revisto a 19 de novembro de 2026",
    "en": "EU-regulated insurance broker · ASF no. 425591790/3 · Lisbon · Reviewed 19 November 2026",
    "de": "EU-regulierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Geprüft am 19. November 2026",
    "es": "Corredor de seguros regulado en la UE · ASF n.º 425591790/3 · Lisboa · Revisado el 19 de noviembre de 2026",
    "nl": "EU-gereguleerde verzekeringsmakelaar · ASF nr. 425591790/3 · Lissabon · Gecontroleerd op 19 november 2026",
    "fr": "Courtier en assurance réglementé dans l’UE · ASF n° 425591790/3 · Lisbonne · Revu le 19 novembre 2026",
    "it": "Broker assicurativo regolamentato nell’UE · ASF n. 425591790/3 · Lisbona · Rivisto il 19 novembre 2026",
    "pl": "Broker ubezpieczeniowy nadzorowany w UE · ASF nr 425591790/3 · Lizbona · Sprawdzono 19 listopada 2026",
    "se": "EU-reglerad försäkringsmäklare · ASF nr 425591790/3 · Lissabon · Granskad 19 november 2026",
    "dk": "EU-reguleret forsikringsmægler · ASF nr. 425591790/3 · Lissabon · Gennemgået 19. november 2026",
    "il": "ברוקר ביטוח בפיקוח האיחוד האירופי · ASF מס׳ 425591790/3 · ליסבון · נבדק ב־19 בנובמבר 2026",
    "zh": "受欧盟监管的保险经纪 · ASF 注册号 425591790/3 · 里斯本 · 审核日期 2026年11月19日",
}

# ---------------------------------------------------------------------------
# Tool strings. Keys:
#   q_* question labels, o_* options, r_* result texts.
# ---------------------------------------------------------------------------

TOOL = {}
PAGE = {}

TOOL["en"] = {
    "h2": "The one-minute guide",
    "intro": "Answer a few short questions. Nothing is stored or sent: the guide runs in your browser and never asks about your health.",
    "q_live": "Where will you live?", "o_pt": "Portugal", "o_es": "Spain", "o_other": "Another country",
    "q_nat": "Are you a national of that country?", "o_yes": "Yes", "o_no": "No",
    "q_us": "Is anyone to be insured a US citizen?",
    "q_age": "Age of the oldest person to be insured", "o_u65": "Under 65", "o_65": "65 or over",
    "q_people": "How many people?", "o_one": "One", "o_two": "Two or more",
    "q_care": "Where do you want to be treated?", "o_local": "Only where I live", "o_home": "Where I live and in my home country", "o_world": "Anywhere in the world",
    "q_papers": "Will you have a Portuguese tax number (NIF), an address in Portugal and a residence permit?", "o_notyet": "Not yet",
    "go": "See the result", "reset": "Start again", "missing": "Please answer every question.",
    "res_h": "Our reading",
    "r_intl": "An international health plan is the right starting point.",
    "r_dom": "A Portuguese domestic plan may be enough.",
    "r_mgen": "A Portuguese domestic plan is possible with MGEN.",
    "r_nat": "International plans are not designed for your situation.",
    "why": "Why:",
    "w_nat": "International plans are for people living outside their country of nationality. If you hold a second nationality, tell us.",
    "w_nat_pt": "Living in Portugal as a national, the route is a Portuguese domestic plan.",
    "w_es": "In Spain we place international plans only.",
    "w_other": "Outside Portugal and Spain, the plans we place are international.",
    "w_care": "You want cover outside Portugal; domestic plans cover treatment in Portugal.",
    "w_papers": "Portuguese domestic plans require a NIF and a residential address in Portugal; MGEN also requires a residence permit.",
    "w_age": "Portuguese domestic plans generally do not accept new members over 65; MGEN does, for households of two or more people.",
    "w_mgen": "MGEN accepts new members over 65 for households of two or more people, all on the same plan.",
    "w_dom": "You want cover in Portugal only and meet the domestic requirements. An international plan remains the choice if you want cover that follows you if you move.",
    "pre": "If anyone has a pre-existing condition: Portuguese domestic plans generally exclude them (MGEN after a 365-day waiting period); international plans assess them in medical underwriting.",
    "ins": "Insurers to compare:",
    "i_us": "Cigna Global — it accepts US citizens living outside the United States; Allianz Care does not.",
    "i_close": "Cigna Close Care — cover in your country of residence and your country of nationality — alongside the worldwide plans.",
    "i_all": "Allianz Care, Cigna Global and APRIL International.",
    "cta_intl": "Request an international quote", "cta_dom": "See domestic health insurance",
}

PAGE["en"] = {
    "title": "Domestic or international health insurance? One-minute guide | Adler & Rochefort",
    "desc": "Portugal, Spain or elsewhere: a short guide that tells you whether you need a domestic or an international health plan, and which insurers to compare. No health questions.",
    "eyebrow": "International health insurance",
    "crumb": "Domestic or international?",
    "h1": "Domestic or international health insurance?",
    "lead": "The answer depends on where you will live, your nationality, your age and where you want to be treated, not on price. This guide applies the same rules we use when we prepare a proposal.",
    "facts": [
        "International plans are for people living outside their country of nationality.",
        "US citizens: Cigna Global. Allianz Care does not accept them.",
        "In Spain we place international plans only.",
        "Portuguese domestic plans: NIF and address in Portugal; new members over 65 only with MGEN, for two or more people.",
    ],
    "form_h2": "Request an international health insurance quote",
    "form_lead": "Four details are enough to start: full name, date of birth, nationality and the country where you will live. We compare the insurers that fit your profile and send the proposals in writing.",
    "sections": [
        ("How the guide decides",
         "<ul><li><strong>Nationality and residence.</strong> International plans cover people living outside their country of nationality. A Portuguese national living in Portugal is a domestic-plan client.</li>"
         "<li><strong>Where you want to be treated.</strong> Domestic plans cover treatment in Portugal. If you want cover in your home country or worldwide, the plan is international.</li>"
         "<li><strong>Age.</strong> Portuguese domestic plans generally do not accept new members over 65. MGEN does, for households of two or more people.</li>"
         "<li><strong>Documents.</strong> Domestic plans require a Portuguese tax number (NIF) and a residential address in Portugal. International plans do not.</li>"
         "<li><strong>Spain.</strong> We place international plans only. For clients who mainly need cover in Spain and in their home country, Cigna Close Care is one option.</li></ul>"),
        ("Why the guide does not ask about your health",
         "<p>We never collect clinical information through the website. If anyone has a pre-existing condition, it is the insurer that assesses it, during medical underwriting, after you have seen the proposal. Portuguese domestic plans generally exclude pre-existing conditions; MGEN accepts them after a 365-day waiting period.</p>"),
    ],
    "faq": [
        ("Are my answers stored?", "No. The guide runs in your browser. Nothing is recorded or sent unless you choose to fill in the quote form."),
        ("Can a US citizen take out Allianz Care?", "No. For US citizens we quote Cigna Global, which accepts Americans living outside the United States."),
        ("I live in Portugal and I am Portuguese. Can I take out an international plan?", "International plans are designed for people living outside their country of nationality. If you hold a second nationality, tell us in the form."),
        ("Is a domestic plan enough if I am over 65?", "Generally, Portuguese domestic plans do not accept new members over 65. MGEN does, for households of two or more people. Otherwise, the alternative is an international plan, subject to medical underwriting."),
    ],
    "related": [
        ("{HUB}", "International health insurance for expats"),
        ("{HUB}allianz-care/", "Allianz Care international health insurance"),
        ("{HUB}cigna-global/", "Cigna Global international health insurance"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/en/blog/portuguese-vs-international-health-insurance/", "Portuguese vs international health insurance"),
        ("/en/health-insurance-portugal-spain/", "Health insurance in Portugal and Spain"),
    ],
}

TOOL["pt"] = {
    "h2": "O guia de um minuto",
    "intro": "Responda a algumas perguntas rápidas. Nada é guardado nem enviado: o guia funciona no seu navegador e nunca pergunta pela sua saúde.",
    "q_live": "Onde vai viver?", "o_pt": "Portugal", "o_es": "Espanha", "o_other": "Outro país",
    "q_nat": "Tem a nacionalidade desse país?", "o_yes": "Sim", "o_no": "Não",
    "q_us": "Alguma das pessoas a segurar é cidadã norte-americana?",
    "q_age": "Idade da pessoa mais velha a segurar", "o_u65": "Menos de 65", "o_65": "65 ou mais",
    "q_people": "Quantas pessoas?", "o_one": "Uma", "o_two": "Duas ou mais",
    "q_care": "Onde quer ser tratado?", "o_local": "Só onde vivo", "o_home": "Onde vivo e no meu país de origem", "o_world": "Em qualquer parte do mundo",
    "q_papers": "Vai ter NIF, morada em Portugal e título de residência?", "o_notyet": "Ainda não",
    "go": "Ver o resultado", "reset": "Recomeçar", "missing": "Responda a todas as perguntas, por favor.",
    "res_h": "A nossa leitura",
    "r_intl": "Um seguro de saúde internacional é o ponto de partida certo.",
    "r_dom": "Um seguro de saúde doméstico português pode ser suficiente.",
    "r_mgen": "Um seguro de saúde doméstico é possível com a MGEN.",
    "r_nat": "Os seguros internacionais não se destinam à sua situação.",
    "why": "Porquê:",
    "w_nat": "Os seguros internacionais destinam-se a quem vive fora do país da sua nacionalidade. Se tiver uma segunda nacionalidade, indique-a.",
    "w_nat_pt": "Vivendo em Portugal com nacionalidade portuguesa, a solução é um seguro de saúde doméstico.",
    "w_es": "Em Espanha trabalhamos apenas com seguros internacionais.",
    "w_other": "Fora de Portugal e de Espanha, as soluções que colocamos são internacionais.",
    "w_care": "Quer cobertura fora de Portugal; os seguros domésticos cobrem tratamentos em Portugal.",
    "w_papers": "Os seguros domésticos portugueses exigem NIF e morada de residência em Portugal; a MGEN exige também título de residência.",
    "w_age": "Os seguros domésticos portugueses, em regra, não aceitam novas adesões acima dos 65 anos; a MGEN aceita, para agregados de duas ou mais pessoas.",
    "w_mgen": "A MGEN aceita adesões acima dos 65 anos para agregados de duas ou mais pessoas, todas no mesmo plano.",
    "w_dom": "Quer cobertura apenas em Portugal e cumpre os requisitos dos seguros domésticos. Um seguro internacional continua a ser a escolha se quiser uma cobertura que o acompanhe caso mude de país.",
    "pre": "Se alguém tiver uma doença pré-existente: os seguros domésticos portugueses, em regra, excluem-nas (a MGEN aceita após uma carência de 365 dias); os seguros internacionais avaliam-nas na análise clínica (underwriting).",
    "ins": "Seguradoras a comparar:",
    "i_us": "Cigna Global — aceita cidadãos norte-americanos que vivem fora dos Estados Unidos; a Allianz Care não aceita.",
    "i_close": "Cigna Close Care — cobertura no país de residência e no país da nacionalidade — a par dos planos mundiais.",
    "i_all": "Allianz Care, Cigna Global e APRIL International.",
    "cta_intl": "Pedir proposta de seguro internacional", "cta_dom": "Ver seguros de saúde domésticos",
}

PAGE["pt"] = {
    "title": "Seguro de saúde doméstico ou internacional? Guia de um minuto | Adler & Rochefort",
    "desc": "Portugal, Espanha ou outro país: um guia rápido que indica se precisa de um seguro de saúde doméstico ou internacional, e que seguradoras comparar. Sem perguntas de saúde.",
    "eyebrow": "Seguro de saúde internacional",
    "crumb": "Doméstico ou internacional?",
    "h1": "Seguro de saúde doméstico ou internacional?",
    "lead": "A resposta depende de onde vai viver, da sua nacionalidade, da idade e de onde quer ser tratado, não do preço. Este guia aplica as mesmas regras que usamos ao preparar uma proposta.",
    "facts": [
        "Os seguros internacionais destinam-se a quem vive fora do país da sua nacionalidade.",
        "Cidadãos norte-americanos: Cigna Global. A Allianz Care não os aceita.",
        "Em Espanha trabalhamos apenas com seguros internacionais.",
        "Seguros domésticos portugueses: NIF e morada em Portugal; adesões acima dos 65 anos só com a MGEN, para duas ou mais pessoas.",
    ],
    "form_h2": "Pedir proposta de seguro de saúde internacional",
    "form_lead": "Bastam quatro dados para começar: nome completo, data de nascimento, nacionalidade e país onde vai viver. Comparamos as seguradoras adequadas ao seu perfil e enviamos as propostas por escrito.",
    "sections": [
        ("Como o guia decide",
         "<ul><li><strong>Nacionalidade e residência.</strong> Os seguros internacionais cobrem quem vive fora do país da sua nacionalidade. Um cidadão português a viver em Portugal é cliente de seguro doméstico.</li>"
         "<li><strong>Onde quer ser tratado.</strong> Os seguros domésticos cobrem tratamentos em Portugal. Se quer cobertura no seu país de origem ou em todo o mundo, o seguro é internacional.</li>"
         "<li><strong>Idade.</strong> Os seguros domésticos portugueses, em regra, não aceitam novas adesões acima dos 65 anos. A MGEN aceita, para agregados de duas ou mais pessoas.</li>"
         "<li><strong>Documentos.</strong> Os seguros domésticos exigem NIF e morada de residência em Portugal. Os seguros internacionais não.</li>"
         "<li><strong>Espanha.</strong> Trabalhamos apenas com seguros internacionais. Para quem precisa sobretudo de cobertura em Espanha e no país de origem, a Cigna Close Care é uma opção.</li></ul>"),
        ("Porque é que o guia não pergunta pela sua saúde",
         "<p>Nunca recolhemos informação clínica através do site. Se alguém tiver uma doença pré-existente, é a seguradora que a avalia, na análise clínica, depois de ver a proposta. Os seguros domésticos portugueses, em regra, excluem doenças pré-existentes; a MGEN aceita-as após uma carência de 365 dias.</p>"),
    ],
    "faq": [
        ("As minhas respostas ficam guardadas?", "Não. O guia funciona no seu navegador. Nada é registado nem enviado, a menos que decida preencher o formulário de pedido de proposta."),
        ("Um cidadão norte-americano pode subscrever a Allianz Care?", "Não. Para cidadãos norte-americanos apresentamos a Cigna Global, que aceita americanos a viver fora dos Estados Unidos."),
        ("Vivo em Portugal e sou português. Posso subscrever um seguro internacional?", "Os seguros internacionais destinam-se a quem vive fora do país da sua nacionalidade. Se tiver uma segunda nacionalidade, indique-a no formulário."),
        ("Um seguro doméstico chega se tiver mais de 65 anos?", "Em regra, os seguros domésticos portugueses não aceitam novas adesões acima dos 65 anos. A MGEN aceita, para agregados de duas ou mais pessoas. Caso contrário, a alternativa é um seguro internacional, sujeito a análise clínica."),
    ],
    "related": [
        ("{HUB}", "Seguro de saúde internacional"),
        ("{HUB}allianz-care/", "Allianz Care: seguro de saúde internacional"),
        ("{HUB}cigna-global/", "Cigna Global: seguro de saúde internacional"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/seguros/saude-portugal-espanha/", "Seguro de saúde em Portugal e Espanha"),
    ],
}

TOOL["de"] = {
    "h2": "Der Ein-Minuten-Leitfaden",
    "intro": "Beantworten Sie ein paar kurze Fragen. Nichts wird gespeichert oder gesendet: Der Leitfaden läuft in Ihrem Browser und fragt nie nach Ihrer Gesundheit.",
    "q_live": "Wo werden Sie leben?", "o_pt": "Portugal", "o_es": "Spanien", "o_other": "In einem anderen Land",
    "q_nat": "Besitzen Sie die Staatsangehörigkeit dieses Landes?", "o_yes": "Ja", "o_no": "Nein",
    "q_us": "Ist eine der zu versichernden Personen US-Bürger?",
    "q_age": "Alter der ältesten zu versichernden Person", "o_u65": "Unter 65", "o_65": "65 oder älter",
    "q_people": "Wie viele Personen?", "o_one": "Eine", "o_two": "Zwei oder mehr",
    "q_care": "Wo möchten Sie behandelt werden?", "o_local": "Nur dort, wo ich lebe", "o_home": "Dort, wo ich lebe, und in meinem Heimatland", "o_world": "Überall auf der Welt",
    "q_papers": "Werden Sie eine portugiesische Steuernummer (NIF), eine Adresse in Portugal und einen Aufenthaltstitel haben?", "o_notyet": "Noch nicht",
    "go": "Ergebnis anzeigen", "reset": "Neu beginnen", "missing": "Bitte beantworten Sie alle Fragen.",
    "res_h": "Unsere Einschätzung",
    "r_intl": "Eine internationale Krankenversicherung ist der richtige Ausgangspunkt.",
    "r_dom": "Eine portugiesische Inlandsversicherung kann ausreichen.",
    "r_mgen": "Eine portugiesische Inlandsversicherung ist mit der MGEN möglich.",
    "r_nat": "Internationale Tarife sind nicht für Ihre Situation gedacht.",
    "why": "Warum:",
    "w_nat": "Internationale Tarife richten sich an Menschen, die außerhalb ihres Staatsangehörigkeitslandes leben. Wenn Sie eine zweite Staatsangehörigkeit haben, teilen Sie es uns mit.",
    "w_nat_pt": "Als portugiesischer Staatsbürger in Portugal ist eine portugiesische Inlandsversicherung der Weg.",
    "w_es": "In Spanien vermitteln wir ausschließlich internationale Tarife.",
    "w_other": "Außerhalb Portugals und Spaniens vermitteln wir internationale Tarife.",
    "w_care": "Sie möchten Versicherungsschutz außerhalb Portugals; Inlandstarife decken Behandlungen in Portugal.",
    "w_papers": "Portugiesische Inlandstarife setzen eine NIF und eine Wohnadresse in Portugal voraus; die MGEN verlangt zusätzlich einen Aufenthaltstitel.",
    "w_age": "Portugiesische Inlandstarife nehmen neue Mitglieder über 65 in der Regel nicht auf; die MGEN schon, für Haushalte ab zwei Personen.",
    "w_mgen": "Die MGEN nimmt neue Mitglieder über 65 für Haushalte ab zwei Personen auf, alle im selben Tarif.",
    "w_dom": "Sie wünschen Schutz nur in Portugal und erfüllen die Voraussetzungen der Inlandstarife. Eine internationale Versicherung bleibt die Wahl, wenn der Schutz Sie bei einem Umzug begleiten soll.",
    "pre": "Bei Vorerkrankungen: Portugiesische Inlandstarife schließen sie in der Regel aus (MGEN nach 365 Tagen Wartezeit); internationale Tarife prüfen sie in der Gesundheitsprüfung.",
    "ins": "Zu vergleichende Versicherer:",
    "i_us": "Cigna Global — versichert US-Bürger, die außerhalb der USA leben; die Allianz Care nicht.",
    "i_close": "Cigna Close Care — Schutz im Wohnsitzland und im Land Ihrer Staatsangehörigkeit — neben den weltweiten Tarifen.",
    "i_all": "Allianz Care, Cigna Global und APRIL International.",
    "cta_intl": "Internationales Angebot anfordern", "cta_dom": "Inländische Krankenversicherung ansehen",
}

PAGE["de"] = {
    "title": "Inländische oder internationale Krankenversicherung? Ein-Minuten-Leitfaden | Adler & Rochefort",
    "desc": "Portugal, Spanien oder anderswo: Ein kurzer Leitfaden zeigt, ob Sie eine inländische oder eine internationale Krankenversicherung brauchen und welche Versicherer infrage kommen. Ohne Gesundheitsfragen.",
    "eyebrow": "Internationale Krankenversicherung",
    "crumb": "Inländisch oder international?",
    "h1": "Inländische oder internationale Krankenversicherung?",
    "lead": "Die Antwort hängt davon ab, wo Sie leben werden, von Ihrer Staatsangehörigkeit, Ihrem Alter und davon, wo Sie behandelt werden möchten, nicht vom Preis. Der Leitfaden wendet dieselben Regeln an, die wir bei jedem Angebot anwenden.",
    "facts": [
        "Internationale Tarife richten sich an Menschen, die außerhalb ihres Staatsangehörigkeitslandes leben.",
        "US-Bürger: Cigna Global. Die Allianz Care nimmt sie nicht auf.",
        "In Spanien vermitteln wir ausschließlich internationale Tarife.",
        "Portugiesische Inlandstarife: NIF und Adresse in Portugal; neue Mitglieder über 65 nur bei der MGEN, ab zwei Personen.",
    ],
    "form_h2": "Angebot für eine internationale Krankenversicherung anfordern",
    "form_lead": "Vier Angaben genügen für den Anfang: vollständiger Name, Geburtsdatum, Staatsangehörigkeit und das Land, in dem Sie leben werden. Wir vergleichen die passenden Versicherer und senden Ihnen die Angebote schriftlich.",
    "sections": [
        ("Wie der Leitfaden entscheidet",
         "<ul><li><strong>Staatsangehörigkeit und Wohnsitz.</strong> Internationale Tarife versichern Menschen, die außerhalb ihres Staatsangehörigkeitslandes leben. Ein portugiesischer Staatsbürger in Portugal ist ein Kunde für Inlandstarife.</li>"
         "<li><strong>Wo Sie behandelt werden möchten.</strong> Inlandstarife decken Behandlungen in Portugal. Wenn Sie Schutz im Heimatland oder weltweit wünschen, ist der Tarif international.</li>"
         "<li><strong>Alter.</strong> Portugiesische Inlandstarife nehmen neue Mitglieder über 65 in der Regel nicht auf. Die MGEN schon, für Haushalte ab zwei Personen.</li>"
         "<li><strong>Unterlagen.</strong> Inlandstarife setzen eine portugiesische Steuernummer (NIF) und eine Wohnadresse in Portugal voraus. Internationale Tarife nicht.</li>"
         "<li><strong>Spanien.</strong> Wir vermitteln ausschließlich internationale Tarife. Wer vor allem Schutz in Spanien und im Heimatland braucht, für den ist Cigna Close Care eine Option.</li></ul>"),
        ("Warum der Leitfaden nicht nach Ihrer Gesundheit fragt",
         "<p>Wir erheben über die Website nie Gesundheitsdaten. Eine Vorerkrankung prüft der Versicherer in der Gesundheitsprüfung, nachdem Sie das Angebot gesehen haben. Portugiesische Inlandstarife schließen Vorerkrankungen in der Regel aus; die MGEN nimmt sie nach einer Wartezeit von 365 Tagen auf.</p>"),
    ],
    "faq": [
        ("Werden meine Antworten gespeichert?", "Nein. Der Leitfaden läuft in Ihrem Browser. Nichts wird erfasst oder gesendet, es sei denn, Sie füllen das Angebotsformular aus."),
        ("Kann ein US-Bürger die Allianz Care abschließen?", "Nein. Für US-Bürger bieten wir die Cigna Global an, die Amerikaner versichert, die außerhalb der USA leben."),
        ("Ich bin Deutscher und lebe in Deutschland. Brauche ich eine internationale Krankenversicherung?", "Internationale Tarife richten sich an Menschen, die außerhalb ihres Staatsangehörigkeitslandes leben. Wenn Sie nach Portugal oder Spanien ziehen, ist der Leitfaden genau für diesen Schritt gedacht."),
        ("Reicht ein Inlandstarif, wenn ich über 65 bin?", "In der Regel nehmen portugiesische Inlandstarife keine neuen Mitglieder über 65 auf. Die MGEN schon, für Haushalte ab zwei Personen. Andernfalls ist die Alternative eine internationale Krankenversicherung mit Gesundheitsprüfung."),
    ],
    "related": [
        ("{HUB}", "Internationale Krankenversicherung"),
        ("{HUB}allianz-care/", "Allianz Care: internationale Krankenversicherung"),
        ("{HUB}cigna-global/", "Cigna Global: internationale Krankenversicherung"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/de/krankenversicherung-portugal-spanien/", "Krankenversicherung in Portugal und Spanien"),
    ],
}

TOOL["es"] = {
    "h2": "La guía de un minuto",
    "intro": "Responda a unas pocas preguntas. No se guarda ni se envía nada: la guía funciona en su navegador y nunca pregunta por su salud.",
    "q_live": "¿Dónde va a vivir?", "o_pt": "Portugal", "o_es": "España", "o_other": "Otro país",
    "q_nat": "¿Tiene la nacionalidad de ese país?", "o_yes": "Sí", "o_no": "No",
    "q_us": "¿Alguna de las personas a asegurar es ciudadana estadounidense?",
    "q_age": "Edad de la persona de más edad a asegurar", "o_u65": "Menos de 65", "o_65": "65 o más",
    "q_people": "¿Cuántas personas?", "o_one": "Una", "o_two": "Dos o más",
    "q_care": "¿Dónde quiere recibir tratamiento?", "o_local": "Solo donde vivo", "o_home": "Donde vivo y en mi país de origen", "o_world": "En cualquier parte del mundo",
    "q_papers": "¿Tendrá NIF portugués, domicilio en Portugal y permiso de residencia?", "o_notyet": "Todavía no",
    "go": "Ver el resultado", "reset": "Empezar de nuevo", "missing": "Responda a todas las preguntas, por favor.",
    "res_h": "Nuestra lectura",
    "r_intl": "Un seguro médico internacional es el punto de partida adecuado.",
    "r_dom": "Un seguro de salud portugués puede ser suficiente.",
    "r_mgen": "Un seguro de salud portugués es posible con MGEN.",
    "r_nat": "Los seguros internacionales no están pensados para su situación.",
    "why": "Por qué:",
    "w_nat": "Los seguros internacionales son para personas que viven fuera del país de su nacionalidad. Si tiene una segunda nacionalidad, indíquelo.",
    "w_nat_pt": "Si vive en Portugal con nacionalidad portuguesa, la solución es un seguro de salud portugués.",
    "w_es": "En España trabajamos solo con seguros internacionales.",
    "w_other": "Fuera de Portugal y España, las soluciones que colocamos son internacionales.",
    "w_care": "Quiere cobertura fuera de Portugal; los seguros portugueses cubren tratamientos en Portugal.",
    "w_papers": "Los seguros de salud portugueses exigen NIF y domicilio en Portugal; MGEN exige además permiso de residencia.",
    "w_age": "Por regla general, los seguros de salud portugueses no aceptan nuevas altas a partir de los 65 años; MGEN sí, para hogares de dos o más personas.",
    "w_mgen": "MGEN acepta nuevas altas a partir de los 65 años para hogares de dos o más personas, todas en el mismo plan.",
    "w_dom": "Quiere cobertura solo en Portugal y cumple los requisitos de los seguros portugueses. Un seguro internacional sigue siendo la opción si quiere una cobertura que le acompañe si cambia de país.",
    "pre": "Si alguien tiene una enfermedad preexistente: los seguros de salud portugueses, por regla general, las excluyen (MGEN tras una carencia de 365 días); los seguros internacionales las evalúan en la selección médica.",
    "ins": "Aseguradoras a comparar:",
    "i_us": "Cigna Global — acepta a ciudadanos estadounidenses que viven fuera de Estados Unidos; Allianz Care no.",
    "i_close": "Cigna Close Care — cobertura en su país de residencia y en el de su nacionalidad — junto a los planes mundiales.",
    "i_all": "Allianz Care, Cigna Global y APRIL International.",
    "cta_intl": "Solicitar propuesta internacional", "cta_dom": "Ver seguros de salud en Portugal y España",
}

PAGE["es"] = {
    "title": "¿Seguro de salud local o internacional? Guía de un minuto | Adler & Rochefort",
    "desc": "España, Portugal u otro país: una guía breve que indica si necesita un seguro de salud local o un seguro médico internacional, y qué aseguradoras comparar. Sin preguntas de salud.",
    "eyebrow": "Seguro médico internacional",
    "crumb": "¿Local o internacional?",
    "h1": "¿Seguro de salud local o internacional?",
    "lead": "La respuesta depende de dónde vaya a vivir, de su nacionalidad, de su edad y de dónde quiera recibir tratamiento, no del precio. Esta guía aplica las mismas reglas que usamos al preparar una propuesta.",
    "facts": [
        "Los seguros internacionales son para personas que viven fuera del país de su nacionalidad.",
        "Ciudadanos estadounidenses: Cigna Global. Allianz Care no los acepta.",
        "En España trabajamos solo con seguros internacionales.",
        "Seguros de salud portugueses: NIF y domicilio en Portugal; altas a partir de los 65 años solo con MGEN, para dos o más personas.",
    ],
    "form_h2": "Solicitar propuesta de seguro médico internacional",
    "form_lead": "Bastan cuatro datos para empezar: nombre completo, fecha de nacimiento, nacionalidad y país donde va a vivir. Comparamos las aseguradoras que encajan con su perfil y le enviamos las propuestas por escrito.",
    "sections": [
        ("Cómo decide la guía",
         "<ul><li><strong>Nacionalidad y residencia.</strong> Los seguros internacionales cubren a personas que viven fuera del país de su nacionalidad.</li>"
         "<li><strong>Dónde quiere recibir tratamiento.</strong> Los seguros portugueses cubren tratamientos en Portugal. Si quiere cobertura en su país de origen o en todo el mundo, el seguro es internacional.</li>"
         "<li><strong>Edad.</strong> Por regla general, los seguros de salud portugueses no aceptan nuevas altas a partir de los 65 años. MGEN sí, para hogares de dos o más personas.</li>"
         "<li><strong>Documentos.</strong> Los seguros portugueses exigen NIF y domicilio en Portugal. Los internacionales no.</li>"
         "<li><strong>España.</strong> Trabajamos solo con seguros internacionales. Para quien necesita sobre todo cobertura en España y en su país de origen, Cigna Close Care es una opción.</li></ul>"),
        ("Por qué la guía no pregunta por su salud",
         "<p>Nunca recogemos información clínica a través de la web. Si alguien tiene una enfermedad preexistente, es la aseguradora quien la evalúa, en la selección médica, después de que usted haya visto la propuesta. Los seguros de salud portugueses, por regla general, excluyen las enfermedades preexistentes; MGEN las acepta tras una carencia de 365 días.</p>"),
    ],
    "faq": [
        ("¿Se guardan mis respuestas?", "No. La guía funciona en su navegador. No se registra ni se envía nada, salvo que decida rellenar el formulario de propuesta."),
        ("¿Puede un ciudadano estadounidense contratar Allianz Care?", "No. Para ciudadanos estadounidenses presentamos Cigna Global, que acepta a estadounidenses que viven fuera de Estados Unidos."),
        ("Vivo en España y soy español. ¿Puedo contratar un seguro internacional?", "Los seguros internacionales están pensados para personas que viven fuera del país de su nacionalidad. Si tiene una segunda nacionalidad, indíquelo en el formulario."),
        ("¿Qué opciones hay en España?", "En España trabajamos solo con seguros médicos internacionales: Allianz Care, Cigna Global y APRIL International. Para quien necesita cobertura sobre todo en España y en su país de origen, Cigna Close Care es una opción."),
    ],
    "related": [
        ("{HUB}", "Seguro médico internacional"),
        ("{HUB}allianz-care/", "Allianz Care: seguro médico internacional"),
        ("{HUB}cigna-global/", "Cigna Global: seguro médico internacional"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/es/seguro-salud-espana-portugal/", "Seguro de salud en España y Portugal"),
    ],
}

TOOL["nl"] = {
    "h2": "De gids van één minuut",
    "intro": "Beantwoord een paar korte vragen. Er wordt niets opgeslagen of verzonden: de gids werkt in uw browser en vraagt nooit naar uw gezondheid.",
    "q_live": "Waar gaat u wonen?", "o_pt": "Portugal", "o_es": "Spanje", "o_other": "Een ander land",
    "q_nat": "Heeft u de nationaliteit van dat land?", "o_yes": "Ja", "o_no": "Nee",
    "q_us": "Is een van de te verzekeren personen Amerikaans staatsburger?",
    "q_age": "Leeftijd van de oudste te verzekeren persoon", "o_u65": "Jonger dan 65", "o_65": "65 of ouder",
    "q_people": "Hoeveel personen?", "o_one": "Eén", "o_two": "Twee of meer",
    "q_care": "Waar wilt u behandeld worden?", "o_local": "Alleen waar ik woon", "o_home": "Waar ik woon en in mijn land van herkomst", "o_world": "Overal ter wereld",
    "q_papers": "Krijgt u een Portugees fiscaal nummer (NIF), een adres in Portugal en een verblijfsvergunning?", "o_notyet": "Nog niet",
    "go": "Bekijk het resultaat", "reset": "Opnieuw beginnen", "missing": "Beantwoord alle vragen, alstublieft.",
    "res_h": "Onze lezing",
    "r_intl": "Een internationale zorgverzekering is het juiste vertrekpunt.",
    "r_dom": "Een Portugese binnenlandse verzekering kan volstaan.",
    "r_mgen": "Een Portugese binnenlandse verzekering is mogelijk bij MGEN.",
    "r_nat": "Internationale polissen zijn niet bedoeld voor uw situatie.",
    "why": "Waarom:",
    "w_nat": "Internationale polissen zijn bedoeld voor mensen die buiten het land van hun nationaliteit wonen. Heeft u een tweede nationaliteit, laat het ons weten.",
    "w_nat_pt": "Woont u als Portugees staatsburger in Portugal, dan is een Portugese binnenlandse verzekering de weg.",
    "w_es": "In Spanje plaatsen wij uitsluitend internationale polissen.",
    "w_other": "Buiten Portugal en Spanje zijn de polissen die wij plaatsen internationaal.",
    "w_care": "U wilt dekking buiten Portugal; binnenlandse polissen dekken behandelingen in Portugal.",
    "w_papers": "Portugese binnenlandse polissen vereisen een NIF en een woonadres in Portugal; MGEN vraagt daarnaast een verblijfsvergunning.",
    "w_age": "Portugese binnenlandse polissen nemen nieuwe leden boven 65 in de regel niet aan; MGEN wel, voor huishoudens van twee of meer personen.",
    "w_mgen": "MGEN neemt nieuwe leden boven 65 aan voor huishoudens van twee of meer personen, allen op hetzelfde plan.",
    "w_dom": "U wilt alleen dekking in Portugal en voldoet aan de binnenlandse voorwaarden. Een internationale polis blijft de keuze als u dekking wilt die meegaat wanneer u verhuist.",
    "pre": "Bij een bestaande aandoening: Portugese binnenlandse polissen sluiten die in de regel uit (MGEN na een wachttijd van 365 dagen); internationale polissen beoordelen ze bij de medische acceptatie.",
    "ins": "Te vergelijken verzekeraars:",
    "i_us": "Cigna Global — accepteert Amerikaanse staatsburgers die buiten de Verenigde Staten wonen; Allianz Care niet.",
    "i_close": "Cigna Close Care — dekking in uw woonland en in het land van uw nationaliteit — naast de wereldwijde polissen.",
    "i_all": "Allianz Care, Cigna Global en APRIL International.",
    "cta_intl": "Internationale offerte aanvragen", "cta_dom": "Binnenlandse zorgverzekering bekijken",
}

PAGE["nl"] = {
    "title": "Binnenlandse of internationale zorgverzekering? Gids van één minuut | Adler & Rochefort",
    "desc": "Portugal, Spanje of elders: een korte gids die aangeeft of u een binnenlandse of een internationale zorgverzekering nodig heeft, en welke verzekeraars u vergelijkt. Zonder gezondheidsvragen.",
    "eyebrow": "Internationale zorgverzekering",
    "crumb": "Binnenlands of internationaal?",
    "h1": "Binnenlandse of internationale zorgverzekering?",
    "lead": "Het antwoord hangt af van waar u gaat wonen, uw nationaliteit, uw leeftijd en waar u behandeld wilt worden, niet van de prijs. Deze gids past dezelfde regels toe die wij gebruiken bij elk voorstel.",
    "facts": [
        "Internationale polissen zijn bedoeld voor mensen die buiten het land van hun nationaliteit wonen.",
        "Amerikaanse staatsburgers: Cigna Global. Allianz Care accepteert hen niet.",
        "In Spanje plaatsen wij uitsluitend internationale polissen.",
        "Portugese binnenlandse polissen: NIF en adres in Portugal; nieuwe leden boven 65 alleen bij MGEN, vanaf twee personen.",
    ],
    "form_h2": "Offerte voor een internationale zorgverzekering aanvragen",
    "form_lead": "Vier gegevens zijn genoeg om te beginnen: volledige naam, geboortedatum, nationaliteit en het land waar u gaat wonen. Wij vergelijken de verzekeraars die bij uw profiel passen en sturen u de voorstellen schriftelijk.",
    "sections": [
        ("Hoe de gids beslist",
         "<ul><li><strong>Nationaliteit en woonland.</strong> Internationale polissen verzekeren mensen die buiten het land van hun nationaliteit wonen.</li>"
         "<li><strong>Waar u behandeld wilt worden.</strong> Binnenlandse polissen dekken behandelingen in Portugal. Wilt u dekking in uw land van herkomst of wereldwijd, dan is de polis internationaal.</li>"
         "<li><strong>Leeftijd.</strong> Portugese binnenlandse polissen nemen nieuwe leden boven 65 in de regel niet aan. MGEN wel, voor huishoudens van twee of meer personen.</li>"
         "<li><strong>Documenten.</strong> Binnenlandse polissen vereisen een NIF en een woonadres in Portugal. Internationale polissen niet.</li>"
         "<li><strong>Spanje.</strong> Wij plaatsen uitsluitend internationale polissen. Wie vooral dekking in Spanje en in het land van herkomst nodig heeft, kan kiezen voor Cigna Close Care.</li></ul>"),
        ("Waarom de gids niet naar uw gezondheid vraagt",
         "<p>Wij verzamelen via de website nooit medische gegevens. Een bestaande aandoening beoordeelt de verzekeraar bij de medische acceptatie, nadat u het voorstel heeft gezien. Portugese binnenlandse polissen sluiten bestaande aandoeningen in de regel uit; MGEN accepteert ze na een wachttijd van 365 dagen.</p>"),
    ],
    "faq": [
        ("Worden mijn antwoorden opgeslagen?", "Nee. De gids werkt in uw browser. Er wordt niets vastgelegd of verzonden, tenzij u het offerteformulier invult."),
        ("Kan een Amerikaans staatsburger Allianz Care afsluiten?", "Nee. Voor Amerikaanse staatsburgers bieden wij Cigna Global aan, die Amerikanen verzekert die buiten de Verenigde Staten wonen."),
        ("Ik verhuis van Nederland naar Portugal. Welke polis past?", "Vul de gids in: wilt u ook in Nederland of wereldwijd gedekt zijn, dan is de polis internationaal. Wilt u alleen dekking in Portugal en heeft u NIF en adres, dan kan een binnenlandse polis volstaan."),
        ("Volstaat een binnenlandse polis als ik ouder ben dan 65?", "In de regel nemen Portugese binnenlandse polissen geen nieuwe leden boven 65 aan. MGEN wel, voor huishoudens van twee of meer personen. Anders is het alternatief een internationale polis met medische acceptatie."),
    ],
    "related": [
        ("{HUB}", "Internationale zorgverzekering"),
        ("{HUB}allianz-care/", "Allianz Care: internationale zorgverzekering"),
        ("{HUB}cigna-global/", "Cigna Global: internationale zorgverzekering"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/nl/zorgverzekering-portugal-spanje/", "Zorgverzekering in Portugal en Spanje"),
    ],
}

TOOL["fr"] = {
    "h2": "Le guide en une minute",
    "intro": "Répondez à quelques questions. Rien n’est enregistré ni envoyé : le guide fonctionne dans votre navigateur et ne pose jamais de question sur votre santé.",
    "q_live": "Où allez-vous vivre ?", "o_pt": "Portugal", "o_es": "Espagne", "o_other": "Un autre pays",
    "q_nat": "Avez-vous la nationalité de ce pays ?", "o_yes": "Oui", "o_no": "Non",
    "q_us": "Une des personnes à assurer est-elle citoyenne américaine ?",
    "q_age": "Âge de la personne la plus âgée à assurer", "o_u65": "Moins de 65 ans", "o_65": "65 ans ou plus",
    "q_people": "Combien de personnes ?", "o_one": "Une", "o_two": "Deux ou plus",
    "q_care": "Où souhaitez-vous être soigné ?", "o_local": "Seulement là où je vis", "o_home": "Là où je vis et dans mon pays d’origine", "o_world": "Partout dans le monde",
    "q_papers": "Aurez-vous un numéro fiscal portugais (NIF), une adresse au Portugal et un titre de séjour ?", "o_notyet": "Pas encore",
    "go": "Voir le résultat", "reset": "Recommencer", "missing": "Merci de répondre à toutes les questions.",
    "res_h": "Notre lecture",
    "r_intl": "Une assurance santé internationale est le bon point de départ.",
    "r_dom": "Une assurance santé portugaise peut suffire.",
    "r_mgen": "Une assurance santé portugaise est possible avec la MGEN.",
    "r_nat": "Les contrats internationaux ne sont pas conçus pour votre situation.",
    "why": "Pourquoi :",
    "w_nat": "Les contrats internationaux s’adressent aux personnes qui vivent hors du pays de leur nationalité. Si vous avez une seconde nationalité, indiquez-le.",
    "w_nat_pt": "Si vous vivez au Portugal avec la nationalité portugaise, la solution est une assurance santé portugaise.",
    "w_es": "En Espagne, nous plaçons uniquement des contrats internationaux.",
    "w_other": "Hors du Portugal et de l’Espagne, les contrats que nous plaçons sont internationaux.",
    "w_care": "Vous souhaitez être couvert hors du Portugal ; les contrats portugais couvrent les soins au Portugal.",
    "w_papers": "Les contrats santé portugais exigent un NIF et une adresse de résidence au Portugal ; la MGEN exige aussi un titre de séjour.",
    "w_age": "En règle générale, les contrats santé portugais n’acceptent pas de nouvelles adhésions après 65 ans ; la MGEN oui, pour les foyers de deux personnes ou plus.",
    "w_mgen": "La MGEN accepte les adhésions après 65 ans pour les foyers de deux personnes ou plus, toutes sur la même formule.",
    "w_dom": "Vous souhaitez une couverture au Portugal uniquement et remplissez les conditions des contrats portugais. Un contrat international reste le choix si vous voulez une couverture qui vous suit en cas de déménagement.",
    "pre": "En cas d’affection préexistante : les contrats santé portugais les excluent en règle générale (la MGEN après un délai de carence de 365 jours) ; les contrats internationaux les évaluent lors de la sélection médicale.",
    "ins": "Assureurs à comparer :",
    "i_us": "Cigna Global — accepte les citoyens américains vivant hors des États-Unis ; Allianz Care non.",
    "i_close": "Cigna Close Care — couverture dans votre pays de résidence et dans celui de votre nationalité — à côté des formules mondiales.",
    "i_all": "Allianz Care, Cigna Global et APRIL International.",
    "cta_intl": "Demander une proposition internationale", "cta_dom": "Voir l’assurance santé au Portugal et en Espagne",
}

PAGE["fr"] = {
    "title": "Assurance santé locale ou internationale ? Guide en une minute | Adler & Rochefort",
    "desc": "Portugal, Espagne ou ailleurs : un guide rapide qui indique si vous avez besoin d’une assurance santé locale ou internationale, et quels assureurs comparer. Sans question de santé.",
    "eyebrow": "Assurance santé internationale",
    "crumb": "Local ou international ?",
    "h1": "Assurance santé locale ou internationale ?",
    "lead": "La réponse dépend du pays où vous allez vivre, de votre nationalité, de votre âge et de l’endroit où vous souhaitez être soigné, pas du prix. Ce guide applique les règles que nous utilisons pour préparer chaque proposition.",
    "facts": [
        "Les contrats internationaux s’adressent aux personnes qui vivent hors du pays de leur nationalité.",
        "Citoyens américains : Cigna Global. Allianz Care ne les accepte pas.",
        "En Espagne, nous plaçons uniquement des contrats internationaux.",
        "Contrats santé portugais : NIF et adresse au Portugal ; adhésions après 65 ans seulement avec la MGEN, à partir de deux personnes.",
    ],
    "form_h2": "Demander une proposition d’assurance santé internationale",
    "form_lead": "Quatre informations suffisent pour commencer : nom complet, date de naissance, nationalité et pays où vous allez vivre. Nous comparons les assureurs adaptés à votre profil et vous envoyons les propositions par écrit.",
    "sections": [
        ("Comment le guide décide",
         "<ul><li><strong>Nationalité et résidence.</strong> Les contrats internationaux couvrent les personnes qui vivent hors du pays de leur nationalité.</li>"
         "<li><strong>Où vous souhaitez être soigné.</strong> Les contrats portugais couvrent les soins au Portugal. Si vous voulez être couvert dans votre pays d’origine ou dans le monde entier, le contrat est international.</li>"
         "<li><strong>Âge.</strong> En règle générale, les contrats santé portugais n’acceptent pas de nouvelles adhésions après 65 ans. La MGEN oui, pour les foyers de deux personnes ou plus.</li>"
         "<li><strong>Documents.</strong> Les contrats portugais exigent un NIF et une adresse de résidence au Portugal. Les contrats internationaux non.</li>"
         "<li><strong>Espagne.</strong> Nous plaçons uniquement des contrats internationaux. Pour qui a surtout besoin d’une couverture en Espagne et dans son pays d’origine, Cigna Close Care est une option.</li></ul>"),
        ("Pourquoi le guide ne pose pas de question sur votre santé",
         "<p>Nous ne recueillons jamais d’informations médicales sur le site. Une affection préexistante est évaluée par l’assureur, lors de la sélection médicale, après que vous avez vu la proposition. Les contrats santé portugais excluent en règle générale les affections préexistantes ; la MGEN les accepte après un délai de carence de 365 jours.</p>"),
    ],
    "faq": [
        ("Mes réponses sont-elles enregistrées ?", "Non. Le guide fonctionne dans votre navigateur. Rien n’est enregistré ni envoyé, sauf si vous remplissez le formulaire de demande."),
        ("Un citoyen américain peut-il souscrire Allianz Care ?", "Non. Pour les citoyens américains, nous proposons Cigna Global, qui accepte les Américains vivant hors des États-Unis."),
        ("Je suis Français et je m’installe au Portugal. Quel contrat choisir ?", "Remplissez le guide : si vous voulez être couvert aussi en France ou dans le monde, le contrat est international. Si vous voulez une couverture au Portugal uniquement et avez NIF et adresse, un contrat portugais peut suffire."),
        ("Un contrat portugais suffit-il après 65 ans ?", "En règle générale, les contrats santé portugais n’acceptent pas de nouvelles adhésions après 65 ans. La MGEN oui, pour les foyers de deux personnes ou plus. Sinon, l’alternative est un contrat international, soumis à sélection médicale."),
    ],
    "related": [
        ("{HUB}", "Assurance santé internationale"),
        ("{HUB}allianz-care/", "Allianz Care : assurance santé internationale"),
        ("{HUB}cigna-global/", "Cigna Global : assurance santé internationale"),
        ("{HUB}april-international/", "APRIL International : MyHealth International"),
        ("/fr/assurance-sante-portugal-espagne/", "Assurance santé au Portugal et en Espagne"),
    ],
}

TOOL["it"] = {
    "h2": "La guida in un minuto",
    "intro": "Risponda a poche domande. Nulla viene salvato o inviato: la guida funziona nel suo browser e non chiede mai della sua salute.",
    "q_live": "Dove vivrà?", "o_pt": "Portogallo", "o_es": "Spagna", "o_other": "Un altro paese",
    "q_nat": "Ha la cittadinanza di quel paese?", "o_yes": "Sì", "o_no": "No",
    "q_us": "Una delle persone da assicurare è cittadina statunitense?",
    "q_age": "Età della persona più anziana da assicurare", "o_u65": "Meno di 65 anni", "o_65": "65 anni o più",
    "q_people": "Quante persone?", "o_one": "Una", "o_two": "Due o più",
    "q_care": "Dove vuole essere curato?", "o_local": "Solo dove vivo", "o_home": "Dove vivo e nel mio paese d’origine", "o_world": "In tutto il mondo",
    "q_papers": "Avrà un codice fiscale portoghese (NIF), un indirizzo in Portogallo e un permesso di soggiorno?", "o_notyet": "Non ancora",
    "go": "Vedi il risultato", "reset": "Ricomincia", "missing": "Risponda a tutte le domande, per favore.",
    "res_h": "La nostra lettura",
    "r_intl": "Un’assicurazione sanitaria internazionale è il punto di partenza giusto.",
    "r_dom": "Un’assicurazione sanitaria portoghese può bastare.",
    "r_mgen": "Un’assicurazione sanitaria portoghese è possibile con MGEN.",
    "r_nat": "Le polizze internazionali non sono pensate per la sua situazione.",
    "why": "Perché:",
    "w_nat": "Le polizze internazionali sono per chi vive fuori dal paese della propria cittadinanza. Se ha una seconda cittadinanza, ce lo indichi.",
    "w_nat_pt": "Se vive in Portogallo con cittadinanza portoghese, la soluzione è un’assicurazione sanitaria portoghese.",
    "w_es": "In Spagna collochiamo solo polizze internazionali.",
    "w_other": "Fuori da Portogallo e Spagna, le polizze che collochiamo sono internazionali.",
    "w_care": "Vuole copertura fuori dal Portogallo; le polizze portoghesi coprono le cure in Portogallo.",
    "w_papers": "Le polizze sanitarie portoghesi richiedono un NIF e un indirizzo di residenza in Portogallo; MGEN richiede anche il permesso di soggiorno.",
    "w_age": "Di norma le polizze sanitarie portoghesi non accettano nuove adesioni oltre i 65 anni; MGEN sì, per nuclei di due o più persone.",
    "w_mgen": "MGEN accetta adesioni oltre i 65 anni per nuclei di due o più persone, tutte sullo stesso piano.",
    "w_dom": "Vuole copertura solo in Portogallo e soddisfa i requisiti delle polizze portoghesi. Una polizza internazionale resta la scelta se vuole una copertura che la segua se cambia paese.",
    "pre": "In caso di patologie preesistenti: le polizze sanitarie portoghesi di norma le escludono (MGEN dopo una carenza di 365 giorni); le polizze internazionali le valutano in fase di assunzione medica.",
    "ins": "Compagnie da confrontare:",
    "i_us": "Cigna Global — accetta cittadini statunitensi che vivono fuori dagli Stati Uniti; Allianz Care no.",
    "i_close": "Cigna Close Care — copertura nel paese di residenza e in quello di cittadinanza — accanto ai piani mondiali.",
    "i_all": "Allianz Care, Cigna Global e APRIL International.",
    "cta_intl": "Richiedi una proposta internazionale", "cta_dom": "Vedi l’assicurazione sanitaria in Portogallo e Spagna",
}

PAGE["it"] = {
    "title": "Assicurazione sanitaria locale o internazionale? Guida in un minuto | Adler & Rochefort",
    "desc": "Portogallo, Spagna o altrove: una guida rapida che indica se le serve un’assicurazione sanitaria locale o internazionale e quali compagnie confrontare. Nessuna domanda sulla salute.",
    "eyebrow": "Assicurazione medica internazionale",
    "crumb": "Locale o internazionale?",
    "h1": "Assicurazione sanitaria locale o internazionale?",
    "lead": "La risposta dipende da dove vivrà, dalla cittadinanza, dall’età e da dove vuole essere curato, non dal prezzo. Questa guida applica le stesse regole che usiamo per ogni proposta.",
    "facts": [
        "Le polizze internazionali sono per chi vive fuori dal paese della propria cittadinanza.",
        "Cittadini statunitensi: Cigna Global. Allianz Care non li accetta.",
        "In Spagna collochiamo solo polizze internazionali.",
        "Polizze sanitarie portoghesi: NIF e indirizzo in Portogallo; adesioni oltre i 65 anni solo con MGEN, da due persone in su.",
    ],
    "form_h2": "Richiedi una proposta di assicurazione medica internazionale",
    "form_lead": "Bastano quattro dati per iniziare: nome completo, data di nascita, cittadinanza e paese in cui vivrà. Confrontiamo le compagnie adatte al suo profilo e le inviamo le proposte per iscritto.",
    "sections": [
        ("Come decide la guida",
         "<ul><li><strong>Cittadinanza e residenza.</strong> Le polizze internazionali coprono chi vive fuori dal paese della propria cittadinanza.</li>"
         "<li><strong>Dove vuole essere curato.</strong> Le polizze portoghesi coprono le cure in Portogallo. Se vuole copertura nel paese d’origine o in tutto il mondo, la polizza è internazionale.</li>"
         "<li><strong>Età.</strong> Di norma le polizze sanitarie portoghesi non accettano nuove adesioni oltre i 65 anni. MGEN sì, per nuclei di due o più persone.</li>"
         "<li><strong>Documenti.</strong> Le polizze portoghesi richiedono un NIF e un indirizzo di residenza in Portogallo. Quelle internazionali no.</li>"
         "<li><strong>Spagna.</strong> Collochiamo solo polizze internazionali. Per chi ha bisogno soprattutto di copertura in Spagna e nel paese d’origine, Cigna Close Care è un’opzione.</li></ul>"),
        ("Perché la guida non chiede della sua salute",
         "<p>Non raccogliamo mai informazioni cliniche tramite il sito. Una patologia preesistente la valuta la compagnia, in fase di assunzione medica, dopo che lei ha visto la proposta. Le polizze sanitarie portoghesi di norma escludono le patologie preesistenti; MGEN le accetta dopo una carenza di 365 giorni.</p>"),
    ],
    "faq": [
        ("Le mie risposte vengono salvate?", "No. La guida funziona nel suo browser. Nulla viene registrato o inviato, a meno che non compili il modulo di richiesta."),
        ("Un cittadino statunitense può sottoscrivere Allianz Care?", "No. Per i cittadini statunitensi proponiamo Cigna Global, che accetta americani che vivono fuori dagli Stati Uniti."),
        ("Mi trasferisco dall’Italia al Portogallo. Quale polizza scegliere?", "Compili la guida: se vuole copertura anche in Italia o nel mondo, la polizza è internazionale. Se vuole copertura solo in Portogallo e ha NIF e indirizzo, una polizza portoghese può bastare."),
        ("Una polizza portoghese basta oltre i 65 anni?", "Di norma le polizze sanitarie portoghesi non accettano nuove adesioni oltre i 65 anni. MGEN sì, per nuclei di due o più persone. Altrimenti, l’alternativa è una polizza internazionale, soggetta ad assunzione medica."),
    ],
    "related": [
        ("{HUB}", "Assicurazione medica internazionale"),
        ("{HUB}allianz-care/", "Allianz Care: assicurazione medica internazionale"),
        ("{HUB}cigna-global/", "Cigna Global: assicurazione medica internazionale"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/it/assicurazione-sanitaria-portogallo-spagna/", "Assicurazione sanitaria in Portogallo e Spagna"),
    ],
}

TOOL["pl"] = {
    "h2": "Przewodnik w minutę",
    "intro": "Odpowiedz na kilka krótkich pytań. Nic nie jest zapisywane ani wysyłane: przewodnik działa w Twojej przeglądarce i nigdy nie pyta o zdrowie.",
    "q_live": "Gdzie będziesz mieszkać?", "o_pt": "Portugalia", "o_es": "Hiszpania", "o_other": "Inny kraj",
    "q_nat": "Czy masz obywatelstwo tego kraju?", "o_yes": "Tak", "o_no": "Nie",
    "q_us": "Czy któraś z ubezpieczanych osób ma obywatelstwo USA?",
    "q_age": "Wiek najstarszej ubezpieczanej osoby", "o_u65": "Poniżej 65 lat", "o_65": "65 lat lub więcej",
    "q_people": "Ile osób?", "o_one": "Jedna", "o_two": "Dwie lub więcej",
    "q_care": "Gdzie chcesz się leczyć?", "o_local": "Tylko tam, gdzie mieszkam", "o_home": "Tam, gdzie mieszkam, i w kraju pochodzenia", "o_world": "Na całym świecie",
    "q_papers": "Czy będziesz mieć portugalski numer podatkowy (NIF), adres w Portugalii i zezwolenie na pobyt?", "o_notyet": "Jeszcze nie",
    "go": "Zobacz wynik", "reset": "Zacznij od nowa", "missing": "Odpowiedz, proszę, na wszystkie pytania.",
    "res_h": "Nasza ocena",
    "r_intl": "Właściwym punktem wyjścia jest międzynarodowe ubezpieczenie zdrowotne.",
    "r_dom": "Portugalskie ubezpieczenie krajowe może wystarczyć.",
    "r_mgen": "Portugalskie ubezpieczenie krajowe jest możliwe w MGEN.",
    "r_nat": "Polisy międzynarodowe nie są przeznaczone dla Twojej sytuacji.",
    "why": "Dlaczego:",
    "w_nat": "Polisy międzynarodowe są dla osób mieszkających poza krajem swojego obywatelstwa. Jeśli masz drugie obywatelstwo, poinformuj nas.",
    "w_nat_pt": "Jeśli mieszkasz w Portugalii jako obywatel Portugalii, rozwiązaniem jest portugalskie ubezpieczenie krajowe.",
    "w_es": "W Hiszpanii oferujemy wyłącznie polisy międzynarodowe.",
    "w_other": "Poza Portugalią i Hiszpanią oferujemy polisy międzynarodowe.",
    "w_care": "Chcesz ochrony poza Portugalią; polisy krajowe obejmują leczenie w Portugalii.",
    "w_papers": "Portugalskie polisy krajowe wymagają numeru NIF i adresu zamieszkania w Portugalii; MGEN wymaga też zezwolenia na pobyt.",
    "w_age": "Portugalskie polisy krajowe z reguły nie przyjmują nowych osób po 65. roku życia; MGEN tak, dla gospodarstw dwu- i więcej osobowych.",
    "w_mgen": "MGEN przyjmuje osoby po 65. roku życia w gospodarstwach dwu- i więcej osobowych, wszystkie w tym samym planie.",
    "w_dom": "Chcesz ochrony tylko w Portugalii i spełniasz wymagania polis krajowych. Polisa międzynarodowa pozostaje wyborem, jeśli chcesz ochrony, która pójdzie za Tobą przy przeprowadzce.",
    "pre": "Jeśli ktoś ma chorobę przewlekłą lub wcześniejszą: portugalskie polisy krajowe z reguły ją wyłączają (MGEN po 365 dniach karencji); polisy międzynarodowe oceniają ją w ocenie medycznej.",
    "ins": "Ubezpieczyciele do porównania:",
    "i_us": "Cigna Global — przyjmuje obywateli USA mieszkających poza Stanami Zjednoczonymi; Allianz Care nie.",
    "i_close": "Cigna Close Care — ochrona w kraju zamieszkania i w kraju obywatelstwa — obok planów światowych.",
    "i_all": "Allianz Care, Cigna Global i APRIL International.",
    "cta_intl": "Poproś o ofertę międzynarodową", "cta_dom": "Zobacz ubezpieczenia zdrowotne w Portugalii i Hiszpanii",
}

PAGE["pl"] = {
    "title": "Krajowe czy międzynarodowe ubezpieczenie zdrowotne? Przewodnik w minutę | Adler & Rochefort",
    "desc": "Portugalia, Hiszpania lub inny kraj: krótki przewodnik, który wskazuje, czy potrzebujesz krajowego czy międzynarodowego ubezpieczenia zdrowotnego, i których ubezpieczycieli porównać. Bez pytań o zdrowie.",
    "eyebrow": "Międzynarodowe ubezpieczenie zdrowotne",
    "crumb": "Krajowe czy międzynarodowe?",
    "h1": "Krajowe czy międzynarodowe ubezpieczenie zdrowotne?",
    "lead": "Odpowiedź zależy od tego, gdzie będziesz mieszkać, od obywatelstwa, wieku i tego, gdzie chcesz się leczyć, a nie od ceny. Przewodnik stosuje te same zasady, których używamy przy każdej ofercie.",
    "facts": [
        "Polisy międzynarodowe są dla osób mieszkających poza krajem swojego obywatelstwa.",
        "Obywatele USA: Cigna Global. Allianz Care ich nie przyjmuje.",
        "W Hiszpanii oferujemy wyłącznie polisy międzynarodowe.",
        "Portugalskie polisy krajowe: NIF i adres w Portugalii; osoby po 65. roku życia tylko w MGEN, od dwóch osób.",
    ],
    "form_h2": "Poproś o ofertę międzynarodowego ubezpieczenia zdrowotnego",
    "form_lead": "Na początek wystarczą cztery dane: imię i nazwisko, data urodzenia, obywatelstwo i kraj, w którym będziesz mieszkać. Porównujemy ubezpieczycieli pasujących do Twojego profilu i wysyłamy oferty na piśmie.",
    "sections": [
        ("Jak przewodnik decyduje",
         "<ul><li><strong>Obywatelstwo i miejsce zamieszkania.</strong> Polisy międzynarodowe obejmują osoby mieszkające poza krajem swojego obywatelstwa.</li>"
         "<li><strong>Gdzie chcesz się leczyć.</strong> Polisy portugalskie obejmują leczenie w Portugalii. Jeśli chcesz ochrony w kraju pochodzenia lub na całym świecie, polisa jest międzynarodowa.</li>"
         "<li><strong>Wiek.</strong> Portugalskie polisy krajowe z reguły nie przyjmują nowych osób po 65. roku życia. MGEN tak, dla gospodarstw dwu- i więcej osobowych.</li>"
         "<li><strong>Dokumenty.</strong> Polisy krajowe wymagają numeru NIF i adresu zamieszkania w Portugalii. Polisy międzynarodowe nie.</li>"
         "<li><strong>Hiszpania.</strong> Oferujemy wyłącznie polisy międzynarodowe. Dla osób potrzebujących ochrony głównie w Hiszpanii i w kraju pochodzenia opcją jest Cigna Close Care.</li></ul>"),
        ("Dlaczego przewodnik nie pyta o zdrowie",
         "<p>Nigdy nie zbieramy informacji medycznych przez stronę. Chorobę istniejącą wcześniej ocenia ubezpieczyciel w ocenie medycznej, po tym jak zobaczysz ofertę. Portugalskie polisy krajowe z reguły wyłączają choroby istniejące wcześniej; MGEN przyjmuje je po 365 dniach karencji.</p>"),
    ],
    "faq": [
        ("Czy moje odpowiedzi są zapisywane?", "Nie. Przewodnik działa w Twojej przeglądarce. Nic nie jest zapisywane ani wysyłane, chyba że wypełnisz formularz zapytania."),
        ("Czy obywatel USA może wykupić Allianz Care?", "Nie. Obywatelom USA proponujemy Cigna Global, która przyjmuje Amerykanów mieszkających poza Stanami Zjednoczonymi."),
        ("Przeprowadzam się z Polski do Portugalii. Jaka polisa?", "Wypełnij przewodnik: jeśli chcesz ochrony także w Polsce lub na świecie, polisa jest międzynarodowa. Jeśli tylko w Portugalii i masz NIF oraz adres, polisa krajowa może wystarczyć."),
        ("Czy polisa krajowa wystarczy po 65. roku życia?", "Z reguły portugalskie polisy krajowe nie przyjmują nowych osób po 65. roku życia. MGEN tak, dla gospodarstw dwu- i więcej osobowych. W przeciwnym razie alternatywą jest polisa międzynarodowa z oceną medyczną."),
    ],
    "related": [
        ("{HUB}", "Międzynarodowe ubezpieczenie zdrowotne"),
        ("{HUB}allianz-care/", "Allianz Care: międzynarodowe ubezpieczenie zdrowotne"),
        ("{HUB}cigna-global/", "Cigna Global: międzynarodowe ubezpieczenie zdrowotne"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/pl/ubezpieczenie-zdrowotne-portugalia-hiszpania/", "Ubezpieczenie zdrowotne w Portugalii i Hiszpanii"),
    ],
}

TOOL["se"] = {
    "h2": "Guiden på en minut",
    "intro": "Svara på några korta frågor. Inget sparas eller skickas: guiden körs i din webbläsare och frågar aldrig om din hälsa.",
    "q_live": "Var ska du bo?", "o_pt": "Portugal", "o_es": "Spanien", "o_other": "Ett annat land",
    "q_nat": "Är du medborgare i det landet?", "o_yes": "Ja", "o_no": "Nej",
    "q_us": "Är någon av de försäkrade amerikansk medborgare?",
    "q_age": "Ålder på den äldsta försäkrade personen", "o_u65": "Under 65", "o_65": "65 eller äldre",
    "q_people": "Hur många personer?", "o_one": "En", "o_two": "Två eller fler",
    "q_care": "Var vill du få vård?", "o_local": "Bara där jag bor", "o_home": "Där jag bor och i mitt hemland", "o_world": "Var som helst i världen",
    "q_papers": "Kommer du att ha ett portugisiskt skattenummer (NIF), en adress i Portugal och uppehållstillstånd?", "o_notyet": "Inte än",
    "go": "Visa resultatet", "reset": "Börja om", "missing": "Svara på alla frågor, tack.",
    "res_h": "Vår bedömning",
    "r_intl": "En internationell sjukvårdsförsäkring är rätt utgångspunkt.",
    "r_dom": "En portugisisk inhemsk försäkring kan räcka.",
    "r_mgen": "En portugisisk inhemsk försäkring är möjlig hos MGEN.",
    "r_nat": "Internationella försäkringar är inte avsedda för din situation.",
    "why": "Varför:",
    "w_nat": "Internationella försäkringar är till för personer som bor utanför sitt medborgarskapsland. Har du ett andra medborgarskap, berätta det.",
    "w_nat_pt": "Bor du i Portugal som portugisisk medborgare är en portugisisk inhemsk försäkring vägen.",
    "w_es": "I Spanien förmedlar vi endast internationella försäkringar.",
    "w_other": "Utanför Portugal och Spanien är försäkringarna vi förmedlar internationella.",
    "w_care": "Du vill ha skydd utanför Portugal; inhemska försäkringar täcker vård i Portugal.",
    "w_papers": "Portugisiska inhemska försäkringar kräver NIF och en bostadsadress i Portugal; MGEN kräver även uppehållstillstånd.",
    "w_age": "Portugisiska inhemska försäkringar tar i regel inte in nya medlemmar över 65; MGEN gör det, för hushåll med två eller fler personer.",
    "w_mgen": "MGEN tar in nya medlemmar över 65 för hushåll med två eller fler personer, alla på samma plan.",
    "w_dom": "Du vill ha skydd bara i Portugal och uppfyller kraven för inhemska försäkringar. En internationell försäkring är fortfarande valet om du vill ha ett skydd som följer med om du flyttar.",
    "pre": "Om någon har ett tidigare tillstånd: portugisiska inhemska försäkringar undantar dem i regel (MGEN efter 365 dagars karens); internationella försäkringar bedömer dem vid hälsoprövningen.",
    "ins": "Försäkringsbolag att jämföra:",
    "i_us": "Cigna Global — försäkrar amerikanska medborgare som bor utanför USA; Allianz Care gör det inte.",
    "i_close": "Cigna Close Care — skydd i bosättningslandet och i medborgarskapslandet — vid sidan av de globala planerna.",
    "i_all": "Allianz Care, Cigna Global och APRIL International.",
    "cta_intl": "Begär en internationell offert", "cta_dom": "Se sjukvårdsförsäkring i Portugal och Spanien",
}

PAGE["se"] = {
    "title": "Inhemsk eller internationell sjukvårdsförsäkring? Guide på en minut | Adler & Rochefort",
    "desc": "Portugal, Spanien eller någon annanstans: en kort guide som visar om du behöver en inhemsk eller en internationell sjukvårdsförsäkring och vilka bolag du ska jämföra. Inga hälsofrågor.",
    "eyebrow": "Internationell sjukvårdsförsäkring",
    "crumb": "Inhemsk eller internationell?",
    "h1": "Inhemsk eller internationell sjukvårdsförsäkring?",
    "lead": "Svaret beror på var du ska bo, ditt medborgarskap, din ålder och var du vill få vård, inte på priset. Guiden tillämpar samma regler som vi använder vid varje förslag.",
    "facts": [
        "Internationella försäkringar är till för personer som bor utanför sitt medborgarskapsland.",
        "Amerikanska medborgare: Cigna Global. Allianz Care tar inte in dem.",
        "I Spanien förmedlar vi endast internationella försäkringar.",
        "Portugisiska inhemska försäkringar: NIF och adress i Portugal; nya medlemmar över 65 endast hos MGEN, från två personer.",
    ],
    "form_h2": "Begär en offert på internationell sjukvårdsförsäkring",
    "form_lead": "Fyra uppgifter räcker för att börja: fullständigt namn, födelsedatum, medborgarskap och det land där du ska bo. Vi jämför de bolag som passar din profil och skickar förslagen skriftligt.",
    "sections": [
        ("Hur guiden avgör",
         "<ul><li><strong>Medborgarskap och bosättning.</strong> Internationella försäkringar täcker personer som bor utanför sitt medborgarskapsland.</li>"
         "<li><strong>Var du vill få vård.</strong> Portugisiska försäkringar täcker vård i Portugal. Vill du ha skydd i hemlandet eller i hela världen är försäkringen internationell.</li>"
         "<li><strong>Ålder.</strong> Portugisiska inhemska försäkringar tar i regel inte in nya medlemmar över 65. MGEN gör det, för hushåll med två eller fler personer.</li>"
         "<li><strong>Dokument.</strong> Inhemska försäkringar kräver NIF och en bostadsadress i Portugal. Internationella försäkringar gör det inte.</li>"
         "<li><strong>Spanien.</strong> Vi förmedlar endast internationella försäkringar. För den som främst behöver skydd i Spanien och i hemlandet är Cigna Close Care ett alternativ.</li></ul>"),
        ("Varför guiden inte frågar om din hälsa",
         "<p>Vi samlar aldrig in medicinsk information via webbplatsen. Ett tidigare tillstånd bedöms av försäkringsbolaget vid hälsoprövningen, efter att du har sett förslaget. Portugisiska inhemska försäkringar undantar i regel tidigare tillstånd; MGEN tar in dem efter 365 dagars karens.</p>"),
    ],
    "faq": [
        ("Sparas mina svar?", "Nej. Guiden körs i din webbläsare. Inget registreras eller skickas, om du inte fyller i offertformuläret."),
        ("Kan en amerikansk medborgare teckna Allianz Care?", "Nej. För amerikanska medborgare offererar vi Cigna Global, som försäkrar amerikaner som bor utanför USA."),
        ("Jag flyttar från Sverige till Portugal. Vilken försäkring passar?", "Fyll i guiden: vill du ha skydd även i Sverige eller i världen är försäkringen internationell. Vill du bara ha skydd i Portugal och har NIF och adress kan en inhemsk försäkring räcka."),
        ("Räcker en inhemsk försäkring om jag är över 65?", "I regel tar portugisiska inhemska försäkringar inte in nya medlemmar över 65. MGEN gör det, för hushåll med två eller fler personer. Annars är alternativet en internationell försäkring med hälsoprövning."),
    ],
    "related": [
        ("{HUB}", "Internationell sjukvårdsförsäkring"),
        ("{HUB}allianz-care/", "Allianz Care: internationell sjukvårdsförsäkring"),
        ("{HUB}cigna-global/", "Cigna Global: internationell sjukvårdsförsäkring"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/se/sjukvardsforsakring-portugal-spanien/", "Sjukvårdsförsäkring i Portugal och Spanien"),
    ],
}

TOOL["dk"] = {
    "h2": "Guiden på ét minut",
    "intro": "Besvar nogle få spørgsmål. Intet gemmes eller sendes: guiden kører i din browser og spørger aldrig om dit helbred.",
    "q_live": "Hvor skal du bo?", "o_pt": "Portugal", "o_es": "Spanien", "o_other": "Et andet land",
    "q_nat": "Er du statsborger i det land?", "o_yes": "Ja", "o_no": "Nej",
    "q_us": "Er nogen af de forsikrede amerikanske statsborgere?",
    "q_age": "Alder på den ældste forsikrede person", "o_u65": "Under 65", "o_65": "65 eller ældre",
    "q_people": "Hvor mange personer?", "o_one": "Én", "o_two": "To eller flere",
    "q_care": "Hvor vil du behandles?", "o_local": "Kun hvor jeg bor", "o_home": "Hvor jeg bor og i mit hjemland", "o_world": "Overalt i verden",
    "q_papers": "Får du et portugisisk skattenummer (NIF), en adresse i Portugal og opholdstilladelse?", "o_notyet": "Ikke endnu",
    "go": "Se resultatet", "reset": "Start forfra", "missing": "Besvar venligst alle spørgsmål.",
    "res_h": "Vores vurdering",
    "r_intl": "En international sundhedsforsikring er det rette udgangspunkt.",
    "r_dom": "En portugisisk national forsikring kan være nok.",
    "r_mgen": "En portugisisk national forsikring er mulig hos MGEN.",
    "r_nat": "Internationale forsikringer er ikke beregnet til din situation.",
    "why": "Hvorfor:",
    "w_nat": "Internationale forsikringer er for personer, der bor uden for deres statsborgerskabsland. Har du et andet statsborgerskab, så fortæl os det.",
    "w_nat_pt": "Bor du i Portugal som portugisisk statsborger, er en portugisisk national forsikring vejen.",
    "w_es": "I Spanien formidler vi kun internationale forsikringer.",
    "w_other": "Uden for Portugal og Spanien er de forsikringer, vi formidler, internationale.",
    "w_care": "Du ønsker dækning uden for Portugal; nationale forsikringer dækker behandling i Portugal.",
    "w_papers": "Portugisiske nationale forsikringer kræver NIF og en bopælsadresse i Portugal; MGEN kræver også opholdstilladelse.",
    "w_age": "Portugisiske nationale forsikringer optager som regel ikke nye medlemmer over 65; MGEN gør, for husstande med to eller flere personer.",
    "w_mgen": "MGEN optager nye medlemmer over 65 for husstande med to eller flere personer, alle på samme plan.",
    "w_dom": "Du ønsker kun dækning i Portugal og opfylder kravene til nationale forsikringer. En international forsikring er stadig valget, hvis du vil have en dækning, der følger dig, hvis du flytter.",
    "pre": "Hvis nogen har en eksisterende lidelse: portugisiske nationale forsikringer undtager dem som regel (MGEN efter 365 dages karens); internationale forsikringer vurderer dem ved helbredsvurderingen.",
    "ins": "Forsikringsselskaber at sammenligne:",
    "i_us": "Cigna Global — forsikrer amerikanske statsborgere, der bor uden for USA; Allianz Care gør ikke.",
    "i_close": "Cigna Close Care — dækning i bopælslandet og i statsborgerskabslandet — ved siden af de globale planer.",
    "i_all": "Allianz Care, Cigna Global og APRIL International.",
    "cta_intl": "Bed om et internationalt tilbud", "cta_dom": "Se sundhedsforsikring i Portugal og Spanien",
}

PAGE["dk"] = {
    "title": "National eller international sundhedsforsikring? Guide på ét minut | Adler & Rochefort",
    "desc": "Portugal, Spanien eller et andet sted: en kort guide, der viser, om du har brug for en national eller en international sundhedsforsikring, og hvilke selskaber du skal sammenligne. Ingen helbredsspørgsmål.",
    "eyebrow": "International sundhedsforsikring",
    "crumb": "National eller international?",
    "h1": "National eller international sundhedsforsikring?",
    "lead": "Svaret afhænger af, hvor du skal bo, dit statsborgerskab, din alder og hvor du vil behandles, ikke af prisen. Guiden anvender de samme regler, som vi bruger ved hvert forslag.",
    "facts": [
        "Internationale forsikringer er for personer, der bor uden for deres statsborgerskabsland.",
        "Amerikanske statsborgere: Cigna Global. Allianz Care optager dem ikke.",
        "I Spanien formidler vi kun internationale forsikringer.",
        "Portugisiske nationale forsikringer: NIF og adresse i Portugal; nye medlemmer over 65 kun hos MGEN, fra to personer.",
    ],
    "form_h2": "Bed om et tilbud på international sundhedsforsikring",
    "form_lead": "Fire oplysninger er nok til at begynde: fulde navn, fødselsdato, statsborgerskab og det land, hvor du skal bo. Vi sammenligner de selskaber, der passer til din profil, og sender forslagene skriftligt.",
    "sections": [
        ("Sådan afgør guiden",
         "<ul><li><strong>Statsborgerskab og bopæl.</strong> Internationale forsikringer dækker personer, der bor uden for deres statsborgerskabsland.</li>"
         "<li><strong>Hvor du vil behandles.</strong> Portugisiske forsikringer dækker behandling i Portugal. Ønsker du dækning i hjemlandet eller i hele verden, er forsikringen international.</li>"
         "<li><strong>Alder.</strong> Portugisiske nationale forsikringer optager som regel ikke nye medlemmer over 65. MGEN gør, for husstande med to eller flere personer.</li>"
         "<li><strong>Dokumenter.</strong> Nationale forsikringer kræver NIF og en bopælsadresse i Portugal. Internationale forsikringer gør ikke.</li>"
         "<li><strong>Spanien.</strong> Vi formidler kun internationale forsikringer. For den, der primært har brug for dækning i Spanien og i hjemlandet, er Cigna Close Care en mulighed.</li></ul>"),
        ("Hvorfor guiden ikke spørger om dit helbred",
         "<p>Vi indsamler aldrig medicinske oplysninger via hjemmesiden. En eksisterende lidelse vurderes af forsikringsselskabet ved helbredsvurderingen, efter at du har set forslaget. Portugisiske nationale forsikringer undtager som regel eksisterende lidelser; MGEN optager dem efter 365 dages karens.</p>"),
    ],
    "faq": [
        ("Gemmes mine svar?", "Nej. Guiden kører i din browser. Intet registreres eller sendes, medmindre du udfylder tilbudsformularen."),
        ("Kan en amerikansk statsborger tegne Allianz Care?", "Nej. For amerikanske statsborgere tilbyder vi Cigna Global, som forsikrer amerikanere, der bor uden for USA."),
        ("Jeg flytter fra Danmark til Portugal. Hvilken forsikring passer?", "Udfyld guiden: ønsker du dækning også i Danmark eller i verden, er forsikringen international. Ønsker du kun dækning i Portugal og har NIF og adresse, kan en national forsikring være nok."),
        ("Er en national forsikring nok, hvis jeg er over 65?", "Som regel optager portugisiske nationale forsikringer ikke nye medlemmer over 65. MGEN gør, for husstande med to eller flere personer. Ellers er alternativet en international forsikring med helbredsvurdering."),
    ],
    "related": [
        ("{HUB}", "International sundhedsforsikring"),
        ("{HUB}allianz-care/", "Allianz Care: international sundhedsforsikring"),
        ("{HUB}cigna-global/", "Cigna Global: international sundhedsforsikring"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/dk/sundhedsforsikring-portugal-spanien/", "Sundhedsforsikring i Portugal og Spanien"),
    ],
}

TOOL["il"] = {
    "h2": "המדריך של דקה אחת",
    "intro": "ענו על כמה שאלות קצרות. דבר אינו נשמר או נשלח: המדריך פועל בדפדפן שלכם ואינו שואל לעולם על מצבכם הבריאותי.",
    "q_live": "היכן תגורו?", "o_pt": "פורטוגל", "o_es": "ספרד", "o_other": "מדינה אחרת",
    "q_nat": "האם אתם אזרחי אותה מדינה?", "o_yes": "כן", "o_no": "לא",
    "q_us": "האם אחד המבוטחים הוא אזרח ארצות הברית?",
    "q_age": "גיל המבוטח המבוגר ביותר", "o_u65": "מתחת ל־65", "o_65": "65 ומעלה",
    "q_people": "כמה אנשים?", "o_one": "אחד", "o_two": "שניים או יותר",
    "q_care": "היכן תרצו לקבל טיפול?", "o_local": "רק היכן שאני גר", "o_home": "היכן שאני גר ובמדינת המוצא", "o_world": "בכל מקום בעולם",
    "q_papers": "האם יהיו לכם מספר מס פורטוגלי (NIF), כתובת בפורטוגל והיתר שהייה?", "o_notyet": "עדיין לא",
    "go": "הצגת התוצאה", "reset": "התחלה מחדש", "missing": "נא לענות על כל השאלות.",
    "res_h": "הקריאה שלנו",
    "r_intl": "ביטוח בריאות בינלאומי הוא נקודת הפתיחה הנכונה.",
    "r_dom": "ביטוח בריאות פורטוגלי מקומי עשוי להספיק.",
    "r_mgen": "ביטוח בריאות פורטוגלי מקומי אפשרי דרך MGEN.",
    "r_nat": "פוליסות בינלאומיות אינן מיועדות למצבכם.",
    "why": "מדוע:",
    "w_nat": "פוליסות בינלאומיות מיועדות למי שגר מחוץ למדינת אזרחותו. אם יש לכם אזרחות נוספת, ציינו זאת.",
    "w_nat_pt": "אם אתם גרים בפורטוגל כאזרחים פורטוגלים, הפתרון הוא ביטוח בריאות פורטוגלי מקומי.",
    "w_es": "בספרד אנו משווקים פוליסות בינלאומיות בלבד.",
    "w_other": "מחוץ לפורטוגל ולספרד, הפוליסות שאנו משווקים הן בינלאומיות.",
    "w_care": "אתם רוצים כיסוי מחוץ לפורטוגל; פוליסות מקומיות מכסות טיפול בפורטוגל.",
    "w_papers": "פוליסות בריאות פורטוגליות מקומיות דורשות NIF וכתובת מגורים בפורטוגל; MGEN דורשת גם היתר שהייה.",
    "w_age": "פוליסות בריאות פורטוגליות מקומיות בדרך כלל אינן מקבלות מצטרפים חדשים מעל גיל 65; MGEN כן, למשקי בית של שניים או יותר.",
    "w_mgen": "MGEN מקבלת מצטרפים מעל גיל 65 במשקי בית של שניים או יותר, כולם באותה תוכנית.",
    "w_dom": "אתם רוצים כיסוי בפורטוגל בלבד ועומדים בדרישות הפוליסות המקומיות. פוליסה בינלאומית נשארת הבחירה אם תרצו כיסוי שילווה אתכם במעבר מדינה.",
    "pre": "אם למישהו יש מצב רפואי קודם: פוליסות פורטוגליות מקומיות בדרך כלל מחריגות אותו (MGEN לאחר תקופת אכשרה של 365 יום); פוליסות בינלאומיות בוחנות אותו בחיתום הרפואי.",
    "ins": "חברות ביטוח להשוואה:",
    "i_us": "Cigna Global — מבטחת אזרחי ארה״ב הגרים מחוץ לארצות הברית; Allianz Care אינה מבטחת אותם.",
    "i_close": "Cigna Close Care — כיסוי במדינת המגורים ובמדינת האזרחות — לצד התוכניות העולמיות.",
    "i_all": "Allianz Care,‏ Cigna Global ו־APRIL International.",
    "cta_intl": "בקשת הצעה לביטוח בינלאומי", "cta_dom": "ביטוח בריאות בפורטוגל ובספרד",
}

PAGE["il"] = {
    "title": "ביטוח בריאות מקומי או בינלאומי? מדריך של דקה | Adler & Rochefort",
    "desc": "פורטוגל, ספרד או מדינה אחרת: מדריך קצר שמראה אם אתם צריכים ביטוח בריאות מקומי או בינלאומי, ואילו חברות להשוות. ללא שאלות על בריאות.",
    "eyebrow": "ביטוח בריאות בינלאומי",
    "crumb": "מקומי או בינלאומי?",
    "h1": "ביטוח בריאות מקומי או בינלאומי?",
    "lead": "התשובה תלויה בשאלה היכן תגורו, באזרחות, בגיל ובמקום שבו תרצו לקבל טיפול, לא במחיר. המדריך מיישם את אותם כללים שאנו מיישמים בכל הצעה.",
    "facts": [
        "פוליסות בינלאומיות מיועדות למי שגר מחוץ למדינת אזרחותו.",
        "אזרחי ארה״ב: Cigna Global. Allianz Care אינה מקבלת אותם.",
        "בספרד אנו משווקים פוליסות בינלאומיות בלבד.",
        "פוליסות פורטוגליות מקומיות: NIF וכתובת בפורטוגל; מצטרפים מעל 65 רק ב־MGEN, משני אנשים ומעלה.",
    ],
    "form_h2": "בקשת הצעה לביטוח בריאות בינלאומי",
    "form_lead": "ארבעה פרטים מספיקים כדי להתחיל: שם מלא, תאריך לידה, אזרחות והמדינה שבה תגורו. אנו משווים את חברות הביטוח המתאימות לפרופיל שלכם ושולחים את ההצעות בכתב.",
    "sections": [
        ("כיצד המדריך מחליט",
         "<ul><li><strong>אזרחות ומגורים.</strong> פוליסות בינלאומיות מכסות מי שגר מחוץ למדינת אזרחותו. מי שעובר מישראל לפורטוגל או לספרד מתאים לכך.</li>"
         "<li><strong>היכן תרצו לקבל טיפול.</strong> פוליסות פורטוגליות מקומיות מכסות טיפול בפורטוגל. אם תרצו כיסוי גם בישראל או בכל העולם, הפוליסה בינלאומית.</li>"
         "<li><strong>גיל.</strong> פוליסות פורטוגליות מקומיות בדרך כלל אינן מקבלות מצטרפים חדשים מעל גיל 65. MGEN כן, למשקי בית של שניים או יותר.</li>"
         "<li><strong>מסמכים.</strong> פוליסות מקומיות דורשות NIF וכתובת מגורים בפורטוגל. פוליסות בינלאומיות לא.</li>"
         "<li><strong>ספרד.</strong> אנו משווקים פוליסות בינלאומיות בלבד. למי שזקוק בעיקר לכיסוי בספרד ובמדינת המוצא, Cigna Close Care היא אפשרות.</li></ul>"),
        ("מדוע המדריך אינו שואל על בריאותכם",
         "<p>איננו אוספים לעולם מידע רפואי דרך האתר. מצב רפואי קודם נבחן על ידי חברת הביטוח בחיתום הרפואי, לאחר שראיתם את ההצעה. פוליסות פורטוגליות מקומיות בדרך כלל מחריגות מצבים קודמים; MGEN מקבלת אותם לאחר תקופת אכשרה של 365 יום.</p>"),
    ],
    "faq": [
        ("האם התשובות שלי נשמרות?", "לא. המדריך פועל בדפדפן שלכם. דבר אינו נרשם או נשלח, אלא אם תמלאו את טופס בקשת ההצעה."),
        ("האם אזרח ארה״ב יכול לרכוש את Allianz Care?", "לא. לאזרחי ארה״ב אנו מציעים את Cigna Global, המבטחת אמריקאים הגרים מחוץ לארצות הברית."),
        ("אני עובר מישראל לפורטוגל. איזו פוליסה מתאימה?", "מלאו את המדריך: אם תרצו כיסוי גם בישראל או בעולם, הפוליסה בינלאומית. אם רק בפורטוגל ויש לכם NIF וכתובת, פוליסה מקומית עשויה להספיק."),
        ("האם פוליסה מקומית מספיקה מעל גיל 65?", "בדרך כלל פוליסות פורטוגליות מקומיות אינן מקבלות מצטרפים חדשים מעל גיל 65. MGEN כן, למשקי בית של שניים או יותר. אחרת, החלופה היא פוליסה בינלאומית בכפוף לחיתום רפואי."),
    ],
    "related": [
        ("{HUB}", "ביטוח בריאות בינלאומי"),
        ("{HUB}allianz-care/", "Allianz Care: ביטוח בריאות בינלאומי"),
        ("{HUB}cigna-global/", "Cigna Global: ביטוח בריאות בינלאומי"),
        ("{HUB}april-international/", "APRIL International: MyHealth International"),
        ("/il/health-insurance-portugal-spain/", "ביטוח בריאות בפורטוגל ובספרד"),
    ],
}

TOOL["zh"] = {
    "h2": "一分钟指南",
    "intro": "回答几个简短的问题。不会保存或发送任何内容：指南在您的浏览器中运行，从不询问您的健康状况。",
    "q_live": "您将居住在哪里？", "o_pt": "葡萄牙", "o_es": "西班牙", "o_other": "其他国家",
    "q_nat": "您是否拥有该国国籍？", "o_yes": "是", "o_no": "否",
    "q_us": "被保险人中是否有美国公民？",
    "q_age": "年龄最大的被保险人", "o_u65": "65岁以下", "o_65": "65岁及以上",
    "q_people": "几位被保险人？", "o_one": "一位", "o_two": "两位或以上",
    "q_care": "您希望在哪里接受治疗？", "o_local": "仅在居住地", "o_home": "居住地及原籍国", "o_world": "全球任何地方",
    "q_papers": "您是否将拥有葡萄牙税号（NIF）、葡萄牙地址和居留许可？", "o_notyet": "尚未",
    "go": "查看结果", "reset": "重新开始", "missing": "请回答所有问题。",
    "res_h": "我们的判断",
    "r_intl": "国际医疗保险是合适的起点。",
    "r_dom": "葡萄牙本地医疗保险可能已足够。",
    "r_mgen": "可通过 MGEN 投保葡萄牙本地医疗保险。",
    "r_nat": "国际医疗保险并不适用于您的情况。",
    "why": "原因：",
    "w_nat": "国际医疗保险面向居住在国籍国以外的人士。如您拥有第二国籍，请告知我们。",
    "w_nat_pt": "葡萄牙公民居住在葡萄牙，应选择葡萄牙本地医疗保险。",
    "w_es": "在西班牙，我们只提供国际医疗保险。",
    "w_other": "在葡萄牙和西班牙以外，我们提供的是国际医疗保险。",
    "w_care": "您希望在葡萄牙以外也有保障；本地保险只承保在葡萄牙的治疗。",
    "w_papers": "葡萄牙本地医疗保险要求葡萄牙税号（NIF）和葡萄牙居住地址；MGEN 还要求居留许可。",
    "w_age": "葡萄牙本地医疗保险通常不接受65岁以上的新投保人；MGEN 接受，但须为两人或以上的家庭。",
    "w_mgen": "MGEN 接受65岁以上、两人或以上家庭的新投保人，所有成员须选择同一计划。",
    "w_dom": "您只需在葡萄牙的保障，并符合本地保险的要求。如果希望保障随您迁居而延续，国际医疗保险仍是选择。",
    "pre": "如有既往病症：葡萄牙本地医疗保险通常不予承保（MGEN 需经过365天等待期）；国际医疗保险会在医疗核保中进行评估。",
    "ins": "可比较的保险公司：",
    "i_us": "Cigna Global——承保居住在美国境外的美国公民；Allianz Care 不承保。",
    "i_close": "Cigna Close Care——在居住国和国籍国提供保障——以及全球计划。",
    "i_all": "Allianz Care、Cigna Global 和 APRIL International。",
    "cta_intl": "索取国际医疗保险报价", "cta_dom": "了解葡萄牙和西班牙医疗保险",
}

PAGE["zh"] = {
    "title": "本地还是国际医疗保险？一分钟指南 | Adler & Rochefort",
    "desc": "葡萄牙、西班牙或其他国家：简短指南，告诉您需要本地还是国际医疗保险，以及应比较哪些保险公司。不涉及任何健康问题。",
    "eyebrow": "国际医疗保险",
    "crumb": "本地还是国际？",
    "h1": "本地还是国际医疗保险？",
    "lead": "答案取决于您将居住在哪里、您的国籍、年龄以及希望在哪里接受治疗，而不是价格。本指南采用我们准备每份方案时使用的相同规则。",
    "facts": [
        "国际医疗保险面向居住在国籍国以外的人士。",
        "美国公民：Cigna Global。Allianz Care 不承保美国公民。",
        "在西班牙，我们只提供国际医疗保险。",
        "葡萄牙本地保险：需要 NIF 和葡萄牙地址；65岁以上新投保人仅 MGEN 接受，须两人或以上。",
    ],
    "form_h2": "索取国际医疗保险报价",
    "form_lead": "只需四项信息即可开始：全名、出生日期、国籍以及将要居住的国家。我们会比较适合您情况的保险公司，并以书面形式发送方案。",
    "sections": [
        ("指南如何判断",
         "<ul><li><strong>国籍与居住地。</strong>国际医疗保险承保居住在国籍国以外的人士。</li>"
         "<li><strong>希望在哪里接受治疗。</strong>葡萄牙本地保险承保在葡萄牙的治疗。如果希望在原籍国或全球获得保障，应选择国际保险。</li>"
         "<li><strong>年龄。</strong>葡萄牙本地医疗保险通常不接受65岁以上的新投保人。MGEN 接受，但须为两人或以上的家庭。</li>"
         "<li><strong>证件。</strong>本地保险要求葡萄牙税号（NIF）和葡萄牙居住地址，国际保险则不要求。</li>"
         "<li><strong>西班牙。</strong>我们只提供国际医疗保险。对主要需要在西班牙和原籍国获得保障的客户，Cigna Close Care 是一个选择。</li></ul>"),
        ("为什么指南不询问您的健康状况",
         "<p>我们从不通过网站收集医疗信息。既往病症由保险公司在您看过方案后的医疗核保中进行评估。葡萄牙本地医疗保险通常不承保既往病症；MGEN 在365天等待期后予以承保。</p>"),
    ],
    "faq": [
        ("我的回答会被保存吗？", "不会。指南在您的浏览器中运行。除非您填写报价表格，否则不会记录或发送任何内容。"),
        ("美国公民可以投保 Allianz Care 吗？", "不可以。对于美国公民，我们提供 Cigna Global 的报价，该公司承保居住在美国境外的美国人。"),
        ("我从中国移居葡萄牙，应选择哪种保险？", "请填写指南：如果希望在中国或全球也有保障，应选择国际保险。如果只需葡萄牙的保障，并拥有 NIF 和地址，本地保险可能已足够。"),
        ("65岁以上，本地保险是否足够？", "葡萄牙本地医疗保险通常不接受65岁以上的新投保人。MGEN 接受，但须为两人或以上的家庭。否则，可选择需经医疗核保的国际医疗保险。"),
    ],
    "related": [
        ("{HUB}", "国际医疗保险"),
        ("{HUB}allianz-care/", "Allianz Care 国际医疗保险"),
        ("{HUB}cigna-global/", "Cigna Global 国际医疗保险"),
        ("{HUB}april-international/", "APRIL International：MyHealth International"),
        ("/zh/health-insurance-portugal-spain/", "葡萄牙和西班牙医疗保险"),
    ],
}

# link shown on each IPMI hub, pointing at the guide
HUB_LINK = {
    "pt": ("Não sabe se precisa de um seguro doméstico ou internacional?", "Faça o guia de um minuto"),
    "en": ("Not sure whether you need a domestic or an international plan?", "Take the one-minute guide"),
    "de": ("Unsicher, ob Sie einen inländischen oder internationalen Tarif brauchen?", "Zum Ein-Minuten-Leitfaden"),
    "es": ("¿No sabe si necesita un seguro local o internacional?", "Haga la guía de un minuto"),
    "nl": ("Twijfelt u tussen een binnenlandse en een internationale polis?", "Doe de gids van één minuut"),
    "fr": ("Vous hésitez entre un contrat local et un contrat international ?", "Faites le guide en une minute"),
    "it": ("Non sa se le serve una polizza locale o internazionale?", "Faccia la guida in un minuto"),
    "pl": ("Nie wiesz, czy potrzebujesz polisy krajowej czy międzynarodowej?", "Skorzystaj z przewodnika w minutę"),
    "se": ("Osäker på om du behöver en inhemsk eller internationell försäkring?", "Gör guiden på en minut"),
    "dk": ("I tvivl om du har brug for en national eller international forsikring?", "Tag guiden på ét minut"),
    "il": ("לא בטוחים אם אתם צריכים ביטוח מקומי או בינלאומי?", "למדריך של דקה אחת"),
    "zh": ("不确定需要本地还是国际医疗保险？", "使用一分钟指南"),
}
