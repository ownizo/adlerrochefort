"""Content of the private-client (HNW) answer pages and DE/ES articles.

Sources for the legal points:
- Portugal: Regime Jurídico do Contrato de Seguro (DL 72/2008), art. 134 —
  underinsurance, insurer pays in proportion "salvo convenção em contrário".
- Spain: Ley 50/1980 de Contrato de Seguro, art. 30 — regla proporcional.
Market facts (single-article caps, valuables share of contents, unoccupancy
periods, security conditions, waiver of average) mirror the existing EN
articles of the site. Specialist minimum of EUR 150,000 contents and
valuables: Hiscox and Liberty terms for permanent residences.
No prices on private-client content; Chubb is not named.
"""

PAGES = []

# --------------------------------------------------------------------- EN Q&A
PAGES.append({
    "lang": "en", "path": "/en/private-client-insurance-questions/", "kind": "qa",
    "crumbs": [("Home", "/en/"), ("Private clients", "/en/private-clients/"), ("Questions answered", None)],
    "title": "Private Client Insurance in Portugal & Spain: Questions Answered",
    "desc": "Underinsurance, the proportional rule, watches and jewellery, empty second homes and art: straight answers for high-value homes in Portugal and Spain.",
    "h1": "Private client insurance in Portugal and Spain: the questions families ask",
    "lead": "Short, direct answers to the questions high-value households ask us most — about homes, collections, second homes and how specialist cover differs from a standard policy. Each answer links to the full guide.",
    "cta": ("Request a written review", "/en/private-clients/#ar-quote-form"),
    "cta2": ("Private clients in Portugal", "/en/private-clients/"),
    "qa": [
        ("What is private client insurance?", "Insurance for households whose homes, contents, collections or liability no longer fit a retail policy. Instead of a standard multi-risk product, the risk is underwritten individually by specialist insurers, with values and conditions agreed in writing before any claim. In Portugal and Spain we place it with Hiscox, Liberty, Zurich and Allianz.", ("/en/private-clients/", "Private client insurance in Portugal")),
        ("Who is specialist cover for?", "As a rule, homes with contents and valuables from €150,000 — the minimum our specialist insurers ask for a permanent residence. Below that, a well-built standard policy is usually the better answer, and we say so in writing.", None),
        ("Is my villa underinsured?", "If the buildings sum insured is below what it would cost to rebuild the house today, yes — and that matters on every claim, not just a total loss. In Portugal, article 134 of the insurance contract law lets the insurer pay only in proportion to the underinsurance unless the policy says otherwise; Spain applies the same regla proporcional under article 30 of its insurance contract law. Declare €700,000 on a house that costs €1,100,000 to rebuild and a €100,000 claim can be cut to about €64,000.", ("/en/rebuild-value-home-insurance-portugal/", "Setting the rebuild value")),
        ("What is a waiver of average?", "A clause that stops the proportional rule from cutting a claim. Some wordings only tolerate a margin, commonly 10 or 15 per cent; specialist high-value insurers usually waive the rule entirely once the sums recommended in their own on-site appraisal are accepted. The waiver is conditional: figures kept current and alterations notified.", ("/en/blog/waiver-of-average-portugal/", "Waiver of average explained")),
        ("Why isn’t my €60,000 watch insured for €60,000?", "Because a standard contents section caps what it pays for any single article — frequently between €1,500 and €5,000 — and often limits all valuables to 20 or 25 per cent of the contents sum. The only way above the cap is to schedule the item individually, with its own agreed value.", ("/en/blog/insuring-jewellery-watches-portugal/", "Insuring jewellery and watches")),
        ("Is losing a ring the same as having it stolen?", "No. Named-perils cover responds to theft, often only with forced entry; it does not respond to loss or accidental damage. Most jewellery claims that surprise owners are losses — a stone out of its setting, a watch left in a hotel. All-risks wording covers them; standard wording does not.", ("/en/blog/watches-jewellery-travelling-worldwide-all-risks/", "Worldwide all-risks for valuables")),
        ("My second home is empty for months. Am I covered?", "Check the unoccupancy clause. Many policies treat a home as unoccupied after 30, 60 or 90 consecutive days, and then suspend theft and restrict water damage — the two most likely claims. Declaring the real pattern of use, a key-holder and documented inspections keeps the cover working.", ("/en/blog/second-homes-empty-months-unoccupancy-clause-voids-cover/", "Empty second homes and the unoccupancy clause")),
        ("How should I set the buildings sum insured?", "On rebuild cost, not market value: what it costs to demolish, clear and rebuild the same house with the same finishes, plus walls, pools and outbuildings. For higher-value homes, specialist insurers carry out an on-site appraisal at no cost and, once their figure is accepted, guarantee the rebuild even if costs exceed the sum insured.", ("/en/rebuild-value-home-insurance-portugal/", "Rebuild value in Portugal")),
        ("Do I need a separate policy for art?", "Not necessarily — but art needs agreed values, cover in transit and on loan, and a clear rule for pairs and sets. Collections that move between London, Lisbon and Madrid need wording that follows them, and a valuation that is kept up to date.", ("/en/blog/insuring-art-portugal-spain/", "Insuring art in Portugal and Spain")),
        ("Can one policy cover my homes in Portugal and Spain?", "Where the insurer writes both countries — Hiscox does — yes: one adviser, one renewal, and conditions that read the same on both sides of the border. Where it does not, we coordinate two policies so limits and exclusions do not leave gaps between them.", ("/en/private-clients-spain/", "Private client insurance in Spain")),
        ("We are renovating. Who insures the works?", "Usually nobody fully, unless it is arranged. The contractor’s policy covers the contractor’s work, not your existing house, and many home policies restrict cover while works are under way. Construction all-risks, owner’s liability and a clean handover back to the home policy close the gap.", ("/en/luxury-home-construction-insurance/", "Insurance for luxury home construction")),
        ("What will the insurer ask of me?", "An on-site appraisal for higher-value homes, valuations or certificates for scheduled items, and security conditions — a rated safe, an alarm of a stated grade, sometimes monitored. They are conditions, not suggestions: if one is not met at the time of a loss, the claim can fail.", ("/en/blog/safes-alarms-underwriting-requirements-portugal/", "Safes, alarms and underwriting")),
        ("Do you need to know my net worth?", "No. We never ask for total net worth — only what each risk needs to be underwritten: the house, the items to schedule, the liability exposure.", None),
        ("How quickly do we get an answer?", "A written opinion in 24 to 72 working hours. Adler & Rochefort is an ASF-registered insurance broker, no. 425591790/3, not tied to any insurer, working in Portugal and Spain.", None),
    ],
})

# --------------------------------------------------------------------- DE Q&A
PAGES.append({
    "lang": "de", "path": "/de/private-client-versicherung-fragen/", "kind": "qa",
    "crumbs": [("Startseite", "/de/"), ("Private Clients", "/de/private-clients/"), ("Fragen und Antworten", None)],
    "title": "Private-Client-Versicherung Portugal & Spanien: Antworten",
    "desc": "Unterversicherung, Uhren und Schmuck, leerstehende Ferienhäuser, Kunst: klare Antworten für Eigentümer hochwertiger Immobilien in Portugal und Spanien.",
    "h1": "Private-Client-Versicherung in Portugal und Spanien: die Fragen, die Familien stellen",
    "lead": "Kurze, direkte Antworten auf die Fragen, die uns Eigentümer hochwertiger Häuser am häufigsten stellen — zu Immobilien, Sammlungen, Zweitwohnsitzen und dem Unterschied zwischen Spezialschutz und Standardpolice.",
    "cta": ("Schriftliche Einschätzung anfragen", "/de/private-clients/#kontakt"),
    "cta2": ("Private Clients", "/de/private-clients/"),
    "qa": [
        ("Was ist eine Private-Client-Versicherung?", "Versicherungsschutz für Haushalte, deren Häuser, Hausrat, Sammlungen oder Haftung nicht mehr in eine Standardpolice passen. Das Risiko wird von Spezialversicherern individuell gezeichnet, mit schriftlich vereinbarten Werten und Bedingungen vor jedem Schaden. In Portugal und Spanien arbeiten wir dafür mit Hiscox, Liberty, Zurich und Allianz.", ("/de/private-clients/", "Private Clients")),
        ("Für wen ist der Spezialschutz gedacht?", "In der Regel für Häuser mit Hausrat und Wertsachen ab 150.000 € — das Minimum, das unsere Spezialversicherer für einen Hauptwohnsitz verlangen. Darunter ist eine gut gebaute Standardpolice meist die bessere Lösung.", None),
        ("Ist meine Villa unterversichert?", "Wenn die Gebäudeversicherungssumme unter den heutigen Wiederaufbaukosten liegt, ja — und das wirkt bei jedem Schaden, nicht nur beim Totalschaden. In Portugal erlaubt Artikel 134 des Versicherungsvertragsgesetzes dem Versicherer, nur im Verhältnis der Unterversicherung zu zahlen, sofern nichts anderes vereinbart ist; Spanien kennt dieselbe Proportionalregel in Artikel 30 seines Gesetzes. Bei 700.000 € Versicherungssumme und 1.100.000 € Wiederaufbaukosten werden aus einem Schaden von 100.000 € etwa 64.000 €.", ("/de/unterversicherung-hausversicherung-portugal-spanien/", "Unterversicherung und Proportionalregel")),
        ("Was ist ein Unterversicherungsverzicht?", "Eine Klausel, die die Proportionalregel außer Kraft setzt. Manche Bedingungen tolerieren nur eine Abweichung von meist 10 oder 15 Prozent; Spezialversicherer verzichten in der Regel ganz darauf, sobald die Summen aus ihrer eigenen Besichtigung angenommen sind — vorausgesetzt, die Werte werden aktuell gehalten.", ("/de/unterversicherung-hausversicherung-portugal-spanien/", "Unterversicherung und Verzicht")),
        ("Warum ist meine Uhr für 60.000 € nicht voll versichert?", "Weil die Standard-Hausratversicherung pro Einzelstück eine Höchstgrenze hat — häufig zwischen 1.500 € und 5.000 € — und Wertsachen insgesamt oft auf 20 oder 25 Prozent der Hausratsumme begrenzt. Über die Grenze kommt man nur, wenn das Stück einzeln mit vereinbartem Wert aufgeführt wird.", ("/de/schmuck-uhren-versicherung-portugal-spanien/", "Schmuck und Uhren versichern")),
        ("Ist ein verlorener Ring dasselbe wie ein gestohlener?", "Nein. Benannte Gefahren decken Diebstahl, oft nur mit Einbruch, aber nicht Verlust oder Beschädigung. Allgefahrendeckung leistet auch dann.", ("/de/schmuck-uhren-versicherung-portugal-spanien/", "Allgefahrendeckung für Wertsachen")),
        ("Mein Ferienhaus steht monatelang leer. Bin ich versichert?", "Prüfen Sie die Leerstandsklausel. Viele Policen gelten nach 30, 60 oder 90 aufeinanderfolgenden Tagen als leerstehend und setzen dann Diebstahl aus und schränken Leitungswasser ein — genau die wahrscheinlichsten Schäden. Eine korrekte Angabe der Nutzung, ein Schlüsselverwalter und dokumentierte Kontrollen halten den Schutz aufrecht.", ("/de/leerstand-ferienhaus-versicherung-portugal-spanien/", "Leerstand und Ferienhaus")),
        ("Wie lege ich die Gebäudeversicherungssumme fest?", "Nach den Wiederaufbaukosten, nicht nach dem Marktwert. Bei hochwertigen Häusern besichtigen Spezialversicherer kostenlos und garantieren nach Annahme ihrer Summe den Wiederaufbau, auch wenn die Kosten die Versicherungssumme übersteigen.", ("/de/wiederaufbauwert-hausversicherung-portugal/", "Wiederaufbauwert in Portugal")),
        ("Brauche ich für Kunst eine eigene Police?", "Nicht unbedingt, aber Kunst braucht vereinbarte Werte, Schutz auf dem Transport und bei Leihgaben sowie aktuelle Bewertungen — besonders, wenn Werke zwischen Deutschland, Portugal und Spanien wechseln.", ("/de/blog/kunstversicherung-portugal-spanien/", "Kunstversicherung Portugal und Spanien")),
        ("Kann eine Police meine Häuser in Portugal und Spanien abdecken?", "Wenn der Versicherer beide Länder zeichnet — Hiscox tut das —, ja: ein Berater, eine Verlängerung, gleiche Bedingungen auf beiden Seiten der Grenze.", ("/de/private-clients-spanien/", "Private Clients in Spanien")),
        ("Wir renovieren. Wer versichert die Bauarbeiten?", "Meist niemand vollständig, wenn es nicht organisiert wird. Die Police des Bauunternehmers deckt seine Arbeit, nicht Ihr bestehendes Haus, und viele Hausversicherungen schränken den Schutz während der Bauzeit ein.", ("/de/bauversicherung-luxusimmobilie/", "Bauversicherung für Luxusimmobilien")),
        ("Brauchen Sie mein Gesamtvermögen?", "Nein. Wir fragen nie nach dem Gesamtvermögen — nur nach dem, was jedes Risiko für die Zeichnung braucht.", None),
        ("Wie schnell bekommen wir eine Antwort?", "Eine schriftliche Einschätzung innerhalb von 24 bis 72 Arbeitsstunden, auf Deutsch. Adler & Rochefort ist bei der ASF unter Nr. 425591790/3 registriert und an keinen Versicherer gebunden.", None),
    ],
})

# --------------------------------------------------------------------- ES Q&A
PAGES.append({
    "lang": "es", "path": "/es/seguro-alto-patrimonio-preguntas/", "kind": "qa",
    "crumbs": [("Inicio", "/es/"), ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"), ("Preguntas y respuestas", None)],
    "title": "Seguros para patrimonios altos en España y Portugal: respuestas",
    "desc": "Infraseguro y regla proporcional, relojes y joyas, segundas residencias vacías, arte: respuestas claras para familias con patrimonio en España y Portugal.",
    "h1": "Seguros para patrimonios altos en España y Portugal: las preguntas que nos hacen las familias",
    "lead": "Respuestas cortas y directas a lo que más nos preguntan las familias latinoamericanas y europeas con vivienda de alto valor en Madrid, Marbella, Lisboa o el Algarve.",
    "cta": ("Solicitar un análisis por escrito", "/es/seguro-hogar-alto-valor/#solicitud"),
    "cta2": ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"),
    "qa": [
        ("¿Qué es un seguro private client?", "Un seguro para hogares cuya vivienda, contenido, colecciones o responsabilidad civil ya no caben en una póliza estándar. El riesgo lo suscriben individualmente aseguradoras especializadas, con valores y condiciones acordados por escrito antes de cualquier siniestro. En España y Portugal trabajamos con Hiscox, Liberty, Zurich y Allianz.", ("/es/seguro-hogar-alto-valor/", "Seguro de hogar de alto valor")),
        ("¿Para quién es la cobertura especializada?", "Por regla general, para viviendas con contenido y objetos de valor desde 150.000 €, el mínimo que piden nuestras aseguradoras especializadas para una residencia habitual. Por debajo, una buena póliza estándar suele ser la mejor respuesta.", None),
        ("¿Mi casa está infraasegurada?", "Si la suma asegurada del continente es inferior a lo que costaría reconstruirla hoy, sí, y eso afecta a cualquier siniestro, no solo a la pérdida total. En España, el artículo 30 de la Ley de Contrato de Seguro permite indemnizar en proporción al infraseguro (regla proporcional); Portugal aplica lo mismo en el artículo 134 de su ley, salvo pacto en contrario. Con 700.000 € asegurados sobre una casa que cuesta 1.100.000 € reconstruir, un siniestro de 100.000 € puede quedarse en unos 64.000 €.", ("/es/regla-proporcional-seguro-hogar-portugal-espana/", "La regla proporcional")),
        ("¿Qué es la renuncia a la regla proporcional?", "Una cláusula que impide que la regla recorte la indemnización. Algunas pólizas solo toleran un margen, habitualmente del 10 o 15 %; las aseguradoras especializadas suelen renunciar por completo una vez aceptadas las sumas de su propia tasación, siempre que se mantengan actualizadas.", ("/es/regla-proporcional-seguro-hogar-portugal-espana/", "Renuncia a la regla proporcional")),
        ("¿Por qué mi reloj de 60.000 € no está asegurado por 60.000 €?", "Porque la póliza de hogar estándar limita lo que paga por cada objeto, con frecuencia entre 1.500 € y 5.000 €, y suele limitar los objetos de valor al 20 o 25 % del contenido. La única forma de superar el límite es declarar la pieza individualmente, a valor convenido.", ("/es/seguro-joyas-relojes-limite-por-objeto/", "Joyas y relojes: el límite por objeto")),
        ("¿Perder un anillo es lo mismo que me lo roben?", "No. La cobertura por riesgos nombrados responde al robo, a menudo solo con violencia o fuerza, pero no a la pérdida ni a los daños accidentales. La cobertura a todo riesgo, sí.", ("/es/seguro-joyas-relojes-limite-por-objeto/", "Todo riesgo para joyas")),
        ("Mi segunda residencia pasa meses vacía. ¿Estoy cubierto?", "Revise la cláusula de deshabitación. Muchas pólizas consideran la vivienda deshabitada tras 30, 60 o 90 días consecutivos y entonces suspenden el robo y limitan los daños por agua, justo los siniestros más probables. Declarar el uso real, un custodio de llaves e inspecciones documentadas mantiene la cobertura.", ("/es/vivienda-vacia-seguro-segunda-residencia/", "Vivienda vacía y segunda residencia")),
        ("¿Cómo fijo la suma asegurada del continente?", "Por el coste de reconstrucción, no por el valor de mercado. En viviendas de alto valor, las aseguradoras especializadas tasan sin coste y, aceptada su cifra, garantizan la reconstrucción aunque supere la suma asegurada.", ("/es/valor-reconstruccion-seguro-hogar/", "Valor de reconstrucción")),
        ("¿Necesito una póliza aparte para el arte?", "No necesariamente, pero el arte necesita valor convenido, cobertura en tránsito y en préstamo y tasaciones actualizadas, sobre todo si las obras se mueven entre países.", ("/es/seguro-arte-joyas-mas-alla-valor-convenido/", "Arte y joyas más allá del valor convenido")),
        ("¿Una sola póliza puede cubrir mis casas en España y Portugal?", "Si la aseguradora suscribe ambos países — Hiscox lo hace —, sí: un asesor, una renovación y las mismas condiciones a ambos lados de la frontera.", None),
        ("Estamos reformando. ¿Quién asegura la obra?", "Normalmente nadie del todo, si no se organiza. La póliza del constructor cubre su trabajo, no su casa existente, y muchas pólizas de hogar limitan la cobertura durante las obras.", ("/es/seguro-obra-vivienda-lujo/", "Seguro de obra en vivienda de lujo")),
        ("¿Necesitan saber mi patrimonio total?", "No. Nunca pedimos el patrimonio total, solo lo que cada riesgo necesita para suscribirse.", None),
        ("¿Cuánto tardan en responder?", "Un análisis por escrito en 24 a 72 horas hábiles, en español. Adler & Rochefort es corredor inscrito en la ASF con el n.º 425591790/3, sin vínculo con ninguna aseguradora.", None),
    ],
})

# ----------------------------------------------------------------- DE articles
PAGES.append({
    "lang": "de", "path": "/de/unterversicherung-hausversicherung-portugal-spanien/", "kind": "article",
    "crumbs": [("Startseite", "/de/"), ("Private Clients", "/de/private-clients/"), ("Unterversicherung", None)],
    "title": "Unterversicherung bei Häusern in Portugal und Spanien",
    "desc": "Wie die Proportionalregel in Portugal (Art. 134) und Spanien (Art. 30) Schäden kürzt und was ein Unterversicherungsverzicht leistet.",
    "h1": "Unterversicherung: wie die Proportionalregel in Portugal und Spanien jeden Schaden kürzt",
    "lead": "Liegt die Versicherungssumme unter dem tatsächlichen Wert, zahlt der Versicherer in beiden Ländern nur anteilig — auch bei Teilschäden. Was die Regel bewirkt, wie ein Verzicht sie aufhebt und wie Sie die Summe richtig bestimmen.",
    "cta": ("Schriftliche Einschätzung anfragen", "/de/private-clients/#kontakt"),
    "cta2": ("Private Clients", "/de/private-clients/"),
    "sections": [
        ("Die Regel in beiden Ländern", "<p>In Portugal bestimmt Artikel 134 des Versicherungsvertragsgesetzes (Decreto-Lei 72/2008): Ist die Versicherungssumme niedriger als der Wert der versicherten Sache, haftet der Versicherer nur im entsprechenden Verhältnis — sofern nichts anderes vereinbart ist. Spanien kennt dieselbe <em>regla proporcional</em> in Artikel 30 des Gesetzes 50/1980.</p><p>Die Regel greift bei jedem Schaden, nicht nur beim Totalschaden. Wer 700.000 € versichert, obwohl der Wiederaufbau 1.100.000 € kosten würde, ist zu rund 64 % versichert. Ein Wasserschaden von 100.000 € wird dann mit etwa 64.000 € reguliert.</p>"),
        ("Wie Unterversicherung entsteht", "<ul class=\"lp-list\"><li>Die Summe wurde beim Kauf vom Kaufpreis oder Bankgutachten übernommen, nicht vom Wiederaufbauwert.</li><li>Baukosten sind seitdem gestiegen, die Summe nicht.</li><li>Pool, Mauern, Nebengebäude oder Renovierungen wurden nie nachgemeldet.</li><li>Hausrat und Wertsachen wurden geschätzt, nicht bewertet.</li></ul>"),
        ("Was ein Unterversicherungsverzicht leistet", "<p>Es gibt zwei Formen. Eine <strong>Toleranzgrenze</strong>: Die Regel greift erst, wenn die Abweichung eine vereinbarte Schwelle überschreitet — meist 10 oder 15 %; darüber gilt sie für die gesamte Lücke. Ein <strong>vollständiger Verzicht</strong>: Der Versicherer wendet die Regel gar nicht an, solange die Summe nach einer vereinbarten Methode berechnet und aktuell gehalten wird.</p><p>Spezialversicherer für hochwertige Häuser besichtigen in der Regel kostenlos, empfehlen die Summen und verzichten nach deren Annahme vollständig auf die Regel. Manche garantieren zusätzlich den Wiederaufbau nach einem Totalschaden, auch wenn die Kosten die Gebäudesumme übersteigen.</p>"),
        ("In Spanien zusätzlich: Erstrisiko und Consorcio", "<p>Hausrat oder einzelne Kategorien lassen sich in Spanien <em>a primer riesgo</em> versichern: ein fester Betrag ohne Proportionalkürzung darunter. Naturkatastrophen reguliert dort das Consorcio de Compensación de Seguros nach eigenen Regeln — ob ein mit dem Versicherer vereinbarter Verzicht auch dafür gilt, sollte geprüft werden.</p>"),
        ("Was Sie tun sollten", "<ol class=\"lp-steps\"><li><strong>Wiederaufbauwert ermitteln</strong>, nicht Marktwert — einschließlich Mauern, Pool und Nebengebäuden. Siehe <a href=\"/de/wiederaufbauwert-hausversicherung-portugal/\">Wiederaufbauwert in Portugal</a>.</li><li><strong>Verzichtsklausel prüfen</strong>: Toleranz oder vollständiger Verzicht, und unter welchen Bedingungen.</li><li><strong>Werte aktuell halten</strong>: Indexierung, Neubewertung, Meldung von Umbauten.</li></ol>"),
    ],
    "faq": [
        ("Gilt die Proportionalregel auch bei kleinen Schäden?", "Ja. Sie kürzt jeden Schaden im Verhältnis der Unterversicherung, nicht nur den Totalschaden — sofern die Police keinen Verzicht enthält."),
        ("Wie hoch ist die übliche Toleranzgrenze?", "Meist 10 oder 15 Prozent. Wird sie überschritten, gilt die Kürzung für die gesamte Lücke, nicht nur für den überschießenden Teil."),
        ("Verzichten alle Versicherer auf die Regel?", "Nein. Spezialversicherer für hochwertige Häuser tun es in der Regel nach einer eigenen Besichtigung; viele Standardpolicen nicht."),
    ],
    "related": [("/de/private-client-versicherung-fragen/", "Fragen und Antworten"), ("/de/hausversicherung-portugal/", "Hausversicherung Portugal"), ("/de/hausversicherung-spanien/", "Hausversicherung Spanien")],
})

PAGES.append({
    "lang": "de", "path": "/de/leerstand-ferienhaus-versicherung-portugal-spanien/", "kind": "article",
    "crumbs": [("Startseite", "/de/"), ("Private Clients", "/de/private-clients/"), ("Leerstand", None)],
    "title": "Ferienhaus in Portugal oder Spanien: die Leerstandsklausel",
    "desc": "Nach 30, 60 oder 90 Tagen Leerstand setzen viele Policen Diebstahl und Leitungswasser aus. Was die Klausel bedeutet und wie Ihr Ferienhaus versichert bleibt.",
    "h1": "Ferienhaus monatelang leer: wie die Leerstandsklausel Ihren Schutz aufhebt",
    "lead": "Ein Zweitwohnsitz in Portugal oder Spanien steht oft zwischen Ostern und Sommer oder den ganzen Winter leer. Genau dann greift eine Klausel, die viele Eigentümer erst im Schadenfall entdecken.",
    "cta": ("Police prüfen lassen", "/de/private-clients/#kontakt"),
    "cta2": ("Private Clients", "/de/private-clients/"),
    "sections": [
        ("Was die Klausel sagt", "<p>Die Formulierung unterscheidet sich je Versicherer, das Prinzip nicht: Ein Haus gilt nach einer bestimmten Zahl aufeinanderfolgender Tage ohne Bewohnung als leerstehend — meist 30, 60 oder 90 Tage. Danach wird typischerweise:</p><ul class=\"lp-list\"><li><strong>Diebstahl ausgesetzt</strong>, nicht nur gekürzt;</li><li><strong>Leitungswasser eingeschränkt oder ausgeschlossen</strong>;</li><li>Glasbruch und Vandalismus möglicherweise gestrichen;</li><li>Feuer und Haftpflicht laufen meist weiter.</li></ul><p>Die Police deckt also ausgerechnet die wahrscheinlichsten Schäden nicht mehr, wenn niemand da ist, der sie bemerkt.</p>"),
        ("Wen es trifft", "<ul class=\"lp-list\"><li>Eigentümer, die zu Ostern und im August kommen und das Haus von September bis März leer lassen.</li><li>Wer den Winter in Deutschland verbringt und das Haus in Portugal oder Spanien als Zweitwohnsitz nutzt.</li><li>Häuser im Verkauf oder während einer Renovierung.</li><li>Vermietete Häuser zwischen zwei Mietern.</li></ul>"),
        ("Ein Beispiel", "<p>Eine Wohnung in Tavira wurde zu Ostern und drei Wochen im August genutzt. Im Februar platzte der Zulauf der Waschmaschine; das Wasser lief rund eine Woche. Die Police setzte Leitungswasser nach 90 Tagen Leerstand aus — es waren 148 Tage. Der Schaden beim Nachbarn wurde bezahlt, der eigene Schaden von rund 14.000 € nicht.</p>"),
        ("Wie der Schutz erhalten bleibt", "<ol class=\"lp-steps\"><li><strong>Nutzung korrekt angeben</strong>, einschließlich Winterpausen.</li><li><strong>Schlüsselverwalter und dokumentierte Kontrollen</strong> vereinbaren — die Police kann Nachweise verlangen.</li><li><strong>Wasser abstellen</strong>, wenn die Police es verlangt.</li><li><strong>Policen für Zweitwohnsitze</strong> wählen: Spezialversicherer für hochwertige Häuser sind auf saisonale Nutzung ausgelegt.</li></ol>"),
    ],
    "faq": [
        ("Wie viele Tage Leerstand sind erlaubt?", "Das steht in den besonderen Bedingungen der Police, meist 30, 60 oder 90 aufeinanderfolgende Tage. Ein kurzer Besuch setzt die Zählung in der Regel zurück."),
        ("Ist Haftpflicht bei Leerstand weiter versichert?", "In der Regel ja; Schäden Dritter, etwa beim Nachbarn, bleiben meist gedeckt."),
        ("Hilft ein Nachbar, der nach dem Haus sieht?", "Nur, wenn die Police das als ausreichend anerkennt. Manche verlangen dokumentierte Kontrollen durch einen Schlüsselverwalter."),
    ],
    "related": [("/de/private-client-versicherung-fragen/", "Fragen und Antworten"), ("/de/hausversicherung-portugal/", "Hausversicherung Portugal"), ("/de/hausversicherung-spanien/", "Hausversicherung Spanien")],
})

PAGES.append({
    "lang": "de", "path": "/de/schmuck-uhren-versicherung-portugal-spanien/", "kind": "article",
    "crumbs": [("Startseite", "/de/"), ("Private Clients", "/de/private-clients/"), ("Schmuck und Uhren", None)],
    "title": "Schmuck und Uhren versichern in Portugal und Spanien",
    "desc": "Warum eine Uhr für 60.000 € in der Standard-Hausratversicherung nicht voll versichert ist: Einzelstückgrenze, Wertsachenlimit, Allgefahren.",
    "h1": "Schmuck und Uhren in Portugal und Spanien: warum die Hausratversicherung nicht reicht",
    "lead": "Eine Hausratpolice nennt eine Gesamtsumme — und begrenzt dann, was sie pro Einzelstück zahlt. Für Schmuck und Uhren entscheidet diese Zahl, nicht die Summe auf der ersten Seite.",
    "cta": ("Wertsachen prüfen lassen", "/de/private-clients/#kontakt"),
    "cta2": ("Private Clients", "/de/private-clients/"),
    "sections": [
        ("Zwei Grenzen, beide bindend", "<p>Die <strong>Einzelstückgrenze</strong> liegt in portugiesischen und spanischen Standardpolicen häufig zwischen 1.500 € und 5.000 €. Darüber ist ein Stück schlicht nicht versichert. Dazu kommt das <strong>Wertsachenlimit</strong>: oft 20 oder 25 % der Hausratsumme. Bei 200.000 € Hausrat sind das 40.000 bis 50.000 € für alle Wertsachen zusammen — und innerhalb davon gilt wieder die Einzelstückgrenze.</p>"),
        ("Einzeln aufführen, mit vereinbartem Wert", "<p>Über die Grenze kommt ein Stück nur, wenn es einzeln mit eigener Summe aufgeführt wird. Die Beschreibung muss genau sein: Hersteller, Modell, Referenz- oder Werknummer bei Uhren; Metall, Gewicht, Steine und Zertifikate bei Schmuck. Paare und Sets sollten als Set versichert werden. Neu gekaufte Stücke sind meist 30 bis 90 Tage automatisch mitversichert — nur wenn sie rechtzeitig gemeldet werden.</p>"),
        ("Verlust ist nicht Diebstahl", "<p>Benannte Gefahren decken Diebstahl, oft nur mit Einbruch oder Gewalt — nicht Verlust und nicht Beschädigung. Fast jeder Schmuckschaden, der Eigentümer überrascht, ist ein Verlust: ein Stein aus der Fassung, eine Uhr im Hotelzimmer. Allgefahrendeckung leistet dann; die Standardpolice nicht. Für einzeln aufgeführte Stücke ist weltweiter Allgefahrenschutz möglich, auch auf Reisen.</p>"),
        ("Tresor und Alarm sind Bedingungen", "<p>Ab einem bestimmten Wert werden Sicherungen zur Bedingung: ein Tresor mit bestimmter Klasse, verankert; Stücke über einem Betrag darin, wenn sie nicht getragen werden; eine Alarmanlage bestimmten Grades. Ist die Bedingung beim Schaden nicht erfüllt, kann die Leistung entfallen — auch bei vereinbartem Wert.</p>"),
    ],
    "faq": [
        ("Wie hoch ist die Einzelstückgrenze üblicherweise?", "In vielen Standardpolicen in Portugal und Spanien zwischen 1.500 € und 5.000 € pro Stück."),
        ("Sind Uhren auf Reisen versichert?", "Einzeln aufgeführte Stücke können weltweit mit Allgefahrenschutz versichert werden; meist müssen sie im Handgepäck reisen."),
        ("Brauche ich ein Gutachten?", "Für höhere Werte verlangen Versicherer in der Regel ein aktuelles Gutachten oder Zertifikat, das die Grundlage des vereinbarten Werts bildet."),
    ],
    "related": [("/de/private-client-versicherung-fragen/", "Fragen und Antworten"), ("/de/blog/kunst-schmuck-versicherung-ueber-vereinbarten-wert/", "Kunst und Schmuck über den vereinbarten Wert"), ("/de/private-clients/", "Private Clients")],
})

# ----------------------------------------------------------------- ES articles
PAGES.append({
    "lang": "es", "path": "/es/regla-proporcional-seguro-hogar-portugal-espana/", "kind": "article",
    "crumbs": [("Inicio", "/es/"), ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"), ("Regla proporcional", None)],
    "title": "Regla proporcional e infraseguro en España y Portugal",
    "desc": "Cómo la regla proporcional (art. 30 en España, art. 134 en Portugal) recorta cualquier siniestro, qué hace la renuncia y cómo fijar bien la suma asegurada.",
    "h1": "La regla proporcional: cómo el infraseguro recorta cualquier siniestro en España y Portugal",
    "lead": "Si la suma asegurada es inferior al valor real, la aseguradora paga solo en proporción, también en los siniestros parciales. Qué dice la ley en cada país, cómo se renuncia a la regla y cómo fijar la suma correcta.",
    "cta": ("Revisar mi póliza", "/es/seguro-hogar-alto-valor/#solicitud"),
    "cta2": ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"),
    "sections": [
        ("Lo que dice la ley", "<p>En España, el artículo 30 de la Ley 50/1980 de Contrato de Seguro establece la <em>regla proporcional</em>: si la suma asegurada es inferior al valor del interés asegurado, la aseguradora indemniza en esa proporción. Portugal aplica lo mismo en el artículo 134 de su Régimen Jurídico del Contrato de Seguro, salvo pacto en contrario.</p><p>Con 700.000 € asegurados sobre una casa cuya reconstrucción cuesta 1.100.000 €, la vivienda está asegurada en torno al 64 %. Un siniestro de agua de 100.000 € se indemnizaría con unos 64.000 €.</p>"),
        ("Cómo se llega al infraseguro", "<ul class=\"lp-list\"><li>La suma se tomó del precio de compra o de la tasación del banco, no del coste de reconstrucción.</li><li>Los costes de construcción subieron y la suma no.</li><li>La piscina, los muros, los anexos o la reforma nunca se declararon.</li><li>El contenido y los objetos de valor se estimaron, no se tasaron.</li></ul>"),
        ("Cómo se renuncia a la regla", "<p>Hay tres herramientas habituales: un <strong>margen de tolerancia</strong> (la regla solo actúa si el infraseguro supera, por ejemplo, el 10 o 15 %); la cobertura <strong>a primer riesgo</strong> para el contenido o categorías concretas, con un límite fijo sin reducción proporcional por debajo; y la <strong>renuncia completa</strong> de las aseguradoras especializadas, que tasan la vivienda sin coste y, aceptadas sus sumas, no aplican la regla y garantizan la reconstrucción tras una pérdida total aunque supere la suma asegurada.</p>"),
        ("El Consorcio en España", "<p>Los daños catastróficos los paga el Consorcio de Compensación de Seguros con sus propias reglas sobre las sumas de su póliza. Conviene confirmar si la renuncia pactada con la aseguradora se aplica también a una reclamación ante el Consorcio.</p>"),
        ("Qué hacer", "<ol class=\"lp-steps\"><li><strong>Calcular el coste de reconstrucción</strong>, no el valor de mercado. Vea <a href=\"/es/valor-reconstruccion-seguro-hogar/\">valor de reconstrucción</a>.</li><li><strong>Revisar la cláusula de renuncia</strong>: margen o renuncia total, y con qué condiciones.</li><li><strong>Mantener las sumas al día</strong> y comunicar las reformas.</li></ol>"),
    ],
    "faq": [
        ("¿La regla proporcional se aplica a siniestros pequeños?", "Sí. Reduce cualquier indemnización en proporción al infraseguro, no solo la pérdida total, salvo que la póliza la excluya."),
        ("¿Qué margen de tolerancia es habitual?", "Con frecuencia el 10 o el 15 %. Si se supera, la reducción se aplica a todo el infraseguro."),
        ("¿Todas las aseguradoras renuncian a la regla?", "No. Las especializadas en viviendas de alto valor suelen hacerlo tras su propia tasación; muchas pólizas estándar no."),
    ],
    "related": [("/es/seguro-alto-patrimonio-preguntas/", "Preguntas y respuestas"), ("/es/seguro-hogar-alto-valor-condiciones/", "Condiciones del hogar de alto valor"), ("/es/seguro-hogar-espana/", "Seguro de hogar en España")],
})

PAGES.append({
    "lang": "es", "path": "/es/vivienda-vacia-seguro-segunda-residencia/", "kind": "article",
    "crumbs": [("Inicio", "/es/"), ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"), ("Vivienda vacía", None)],
    "title": "Segunda residencia vacía: la cláusula de deshabitación",
    "desc": "Tras 30, 60 o 90 días sin habitar, muchas pólizas suspenden el robo y los daños por agua. Qué dice la cláusula y cómo mantener asegurada su segunda residencia.",
    "h1": "Segunda residencia vacía durante meses: cómo la cláusula de deshabitación anula su cobertura",
    "lead": "Una casa en Marbella, Lisboa o el Algarve suele pasar meses vacía entre visitas. Es justo entonces cuando actúa una cláusula que muchos propietarios descubren al reclamar.",
    "cta": ("Revisar mi póliza", "/es/seguro-hogar-alto-valor/#solicitud"),
    "cta2": ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"),
    "sections": [
        ("Lo que dice la cláusula", "<p>Cada aseguradora la redacta a su manera, pero la estructura es la misma: la vivienda se considera deshabitada tras un número de días consecutivos sin uso, habitualmente 30, 60 o 90. A partir de ahí, lo normal es que:</p><ul class=\"lp-list\"><li>el <strong>robo quede suspendido</strong>, no reducido;</li><li>los <strong>daños por agua se limiten o excluyan</strong>;</li><li>la rotura de cristales y los actos vandálicos puedan desaparecer;</li><li>el incendio y la responsabilidad civil sigan vigentes.</li></ul><p>La póliza deja de cubrir los siniestros más probables justo cuando nadie está allí para verlos.</p>"),
        ("A quién afecta", "<ul class=\"lp-list\"><li>Familias que vienen en Semana Santa y en verano y cierran la casa el resto del año.</li><li>Quien pasa el invierno en su país de origen.</li><li>Viviendas en venta o en obras.</li><li>Viviendas alquiladas entre un inquilino y otro.</li></ul>"),
        ("Un ejemplo", "<p>Un apartamento en Tavira se usaba en Semana Santa y tres semanas en agosto. En febrero falló la toma de la lavadora y el agua corrió casi una semana. La póliza suspendía los daños por agua tras 90 días deshabitada; habían pasado 148. Los daños del vecino se pagaron; los propios, unos 14.000 €, no.</p>"),
        ("Cómo mantener la cobertura", "<ol class=\"lp-steps\"><li><strong>Declarar el uso real</strong>, incluidos los cierres de invierno.</li><li><strong>Custodio de llaves e inspecciones documentadas</strong>: la póliza puede exigir pruebas.</li><li><strong>Cerrar el agua</strong> si la póliza lo pide.</li><li><strong>Elegir pólizas pensadas para segundas residencias</strong>: las aseguradoras especializadas en viviendas de alto valor contemplan el uso estacional.</li></ol>"),
    ],
    "faq": [
        ("¿Cuántos días puede estar vacía la vivienda?", "Lo fijan las condiciones particulares, habitualmente 30, 60 o 90 días consecutivos. Una visita corta suele reiniciar el cómputo."),
        ("¿La responsabilidad civil sigue cubierta?", "Normalmente sí: los daños a terceros, como al vecino, suelen seguir cubiertos."),
        ("¿Basta con que un vecino eche un vistazo?", "Solo si la póliza lo acepta. Algunas exigen inspecciones documentadas por un custodio de llaves."),
    ],
    "related": [("/es/seguro-alto-patrimonio-preguntas/", "Preguntas y respuestas"), ("/es/seguro-hogar-alto-valor/", "Hogar de alto valor"), ("/es/seguro-hogar-espana/", "Seguro de hogar en España")],
})

PAGES.append({
    "lang": "es", "path": "/es/seguro-joyas-relojes-limite-por-objeto/", "kind": "article",
    "crumbs": [("Inicio", "/es/"), ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"), ("Joyas y relojes", None)],
    "title": "Joyas y relojes: el límite por objeto del seguro de hogar",
    "desc": "Por qué un reloj de 60.000 € no está asegurado por 60.000 € en una póliza estándar: límite por objeto, objetos de valor y todo riesgo.",
    "h1": "Joyas y relojes en España y Portugal: por qué el seguro de hogar no basta",
    "lead": "La póliza de hogar fija una suma para el contenido y después limita lo que paga por cada objeto. Para joyas y relojes, es ese límite el que decide, no la suma de la primera página.",
    "cta": ("Revisar mis objetos de valor", "/es/seguro-hogar-alto-valor/#solicitud"),
    "cta2": ("Hogar de alto valor", "/es/seguro-hogar-alto-valor/"),
    "sections": [
        ("Dos límites, los dos obligatorios", "<p>El <strong>límite por objeto</strong> de las pólizas estándar en España y Portugal suele estar entre 1.500 € y 5.000 €. Por encima, la pieza simplemente no está asegurada. Además, el <strong>límite de objetos de valor</strong> suele ser el 20 o 25 % de la suma del contenido: con 200.000 € de contenido, entre 40.000 y 50.000 € para todas las joyas y relojes, y dentro de esa cifra vuelve a aplicarse el límite por objeto.</p>"),
        ("Declarar la pieza a valor convenido", "<p>La única forma de superar el límite es declarar la pieza individualmente, con su propia suma. La descripción debe ser exacta: marca, modelo y número de referencia en relojes; metal, peso, piedras y certificados en joyas. Los pares y juegos se aseguran como juego. Las piezas nuevas suelen quedar cubiertas automáticamente entre 30 y 90 días, siempre que se comuniquen a tiempo.</p>"),
        ("Perder no es lo mismo que robo", "<p>La cobertura por riesgos nombrados responde al robo, a menudo solo con fuerza o violencia, pero no a la pérdida ni a los daños. Casi todos los siniestros de joyas que sorprenden son pérdidas: una piedra que se sale del engaste, un reloj olvidado en un hotel. La cobertura a todo riesgo responde; la póliza estándar no. Las piezas declaradas pueden asegurarse a todo riesgo en todo el mundo, también de viaje.</p>"),
        ("Caja fuerte y alarma son condiciones", "<p>A partir de cierto valor, la seguridad pasa a ser condición: una caja fuerte de categoría determinada y anclada, las piezas de más valor dentro de ella cuando no se llevan, y una alarma de cierto grado. Si la condición no se cumple en el momento del siniestro, la indemnización puede perderse, aunque haya valor convenido.</p>"),
    ],
    "faq": [
        ("¿Cuál es el límite por objeto habitual?", "En muchas pólizas estándar de España y Portugal, entre 1.500 € y 5.000 € por pieza."),
        ("¿Mis relojes están cubiertos en los viajes?", "Las piezas declaradas pueden asegurarse a todo riesgo en todo el mundo; normalmente deben viajar en el equipaje de mano."),
        ("¿Necesito una tasación?", "Para valores altos, la aseguradora suele pedir una tasación o certificado reciente, que es la base del valor convenido."),
    ],
    "related": [("/es/seguro-alto-patrimonio-preguntas/", "Preguntas y respuestas"), ("/es/seguro-arte-joyas-mas-alla-valor-convenido/", "Arte y joyas más allá del valor convenido"), ("/es/seguro-hogar-alto-valor/", "Hogar de alto valor")],
})
