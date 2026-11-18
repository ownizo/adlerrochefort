# Content for scripts/build-spain-hnw-products.py (November 2026).
# Spain product pages: luxury cars (new), classic cars (rewritten), jewellery
# and watches (new EN page). Owner decisions applied: luxury cars from an agreed
# value of EUR 200,000, own damage only, compulsory third-party liability taken
# out separately; no fixed response times; no calls offered; no insurer wording
# claims beyond what the insurer's own product description says.

URLS = {  # full 12-language groups (the other languages are built by scripts/build-spain-i18n.py)
    "luxury": {"pt": "/seguros/carros-luxo-espanha/", "en": "/en/luxury-car-insurance-spain/", "de": "/de/luxusauto-versicherung-spanien/",
               "nl": "/nl/luxe-auto-verzekering-spanje/", "fr": "/fr/assurance-voiture-luxe-espagne/", "es": "/es/seguro-coche-lujo-espana/",
               "it": "/it/assicurazione-auto-lusso-spagna/", "pl": "/pl/ubezpieczenie-samochodu-luksusowego-hiszpania/",
               "se": "/se/lyxbilsforsakring-spanien/", "dk": "/dk/luksusbil-forsikring-spanien/", "zh": "/zh/luxury-car-insurance-spain/",
               "il": "/il/luxury-car-insurance-spain/"},
    "classic": {"pt": "/seguros/carros-classicos-espanha/", "en": "/en/classic-car-insurance-spain/", "de": "/de/oldtimerversicherung-spanien/",
                "nl": "/nl/klassieke-auto-verzekering-spanje/", "fr": "/fr/assurance-voitures-collection-espagne/", "es": "/es/seguro-vehiculos-clasicos-espana/",
                "it": "/it/assicurazione-auto-epoca-spagna/", "pl": "/pl/ubezpieczenie-samochodu-klasycznego-hiszpania/",
                "se": "/se/veteranbilsforsakring-spanien/", "dk": "/dk/veteranbilforsikring-spanien/", "zh": "/zh/classic-car-insurance-spain/",
                "il": "/il/classic-car-insurance-spain/"},
    "jewellery": {"pt": "/seguros/joias-relogios-espanha/", "en": "/en/jewellery-watch-insurance-spain/", "nl": "/nl/sieraden-horloges-verzekering-spanje/",
                  "fr": "/fr/assurance-bijoux-montres-espagne/", "es": "/es/seguro-joyas-relojes-espana/", "it": "/it/assicurazione-gioielli-orologi-spagna/",
                  "pl": "/pl/ubezpieczenie-bizuterii-zegarkow-hiszpania/", "se": "/se/smycken-klockor-forsakring-spanien/",
                  "dk": "/dk/smykker-ure-forsikring-spanien/", "zh": "/zh/jewellery-watch-insurance-spain/", "il": "/il/jewellery-watch-insurance-spain/"},
}


# ---------------------------------------------------------------------------
# LUXURY CARS
# ---------------------------------------------------------------------------
LUXURY = {
"en": dict(
    title="Luxury Car Insurance in Spain · Agreed Value from €200,000",
    desc="Own-damage insurance at agreed value for luxury and high-performance cars in Spain worth €200,000 or more. How the value is proven, what the insurer asks for, and how liability is arranged.",
    kw="luxury car insurance spain, high value car insurance spain, supercar insurance spain, agreed value car insurance spain, rolls royce insurance spain, ferrari insurance spain",
    crumb="Luxury cars", eyebrow="Spain · Luxury cars",
    h1="Luxury car insurance in Spain, at agreed value",
    sub="For Rolls-Royce, Bentley, Ferrari, Lamborghini, Porsche and other cars in Spain worth €200,000 or more. Own damage insured at a value agreed before the loss — not at a figure the insurer works out after it.",
    trust="<strong>ASF no. 425591790/3</strong> · DGSFP (LPS) · Insurer named in writing",
    wa="Hello, I would like a quote for luxury car insurance in Spain.",
    sections=[
        ("Why a standard motor policy does not fit",
         "<p>A Spanish motor policy is built around a car whose value can be looked up in a table. For a car worth €200,000 or more that breaks down in three places: the own-damage section has a ceiling, the settlement after a total loss is calculated from market tables and depreciation, and the repair goes wherever the insurer decides.</p>"
         "<p>An agreed-value policy works the other way round. The value of the car is fixed with the insurer at the start, on the evidence you provide, and that is the figure the policy is built on. That is the product we place for cars in Spain from €200,000.</p>"),
        ("Two policies, not one",
         "<p>Every vehicle used on Spanish roads must carry compulsory third-party liability (<em>seguro obligatorio</em>). In this product it is <strong>not included</strong>: the agreed-value policy covers damage to your own car, and liability is taken out separately — with your current insurer or one we propose. We set out in writing how the two fit together, so there is no gap between them and nothing is paid twice.</p>"),
        ("How the value is proven",
         "<p>The agreed value is the single most important figure in the proposal, and the insurer will ask you to justify it. Any one of these is normally accepted as a starting point:</p>"
         "<ul class=\"lp-covers\"><li><strong>The purchase invoice</strong>The most direct evidence, especially for a recent purchase.</li>"
         "<li><strong>A comparable car for sale</strong>A link to an advert or to a specialist dealer offering the same model with similar characteristics — above all a similar age and mileage.</li>"
         "<li><strong>An independent valuation</strong>Useful for limited editions, special specifications and cars whose market moves quickly.</li></ul>"),
        ("What the insurer asks for before issuing",
         "<ul class=\"lp-covers\"><li><strong>A recent photo report</strong>The car from every angle — front, rear, both sides and the interior — with one photo showing the current mileage.</li>"
         "<li><strong>Identity of the policyholder and driver</strong>DNI or NIE, or passport if you do not have one yet, and the driving licence of each driver.</li>"
         "<li><strong>How the car is used</strong>These policies are normally written for private use only and for the named driver or drivers.</li>"
         "<li><strong>Where it is kept</strong>The address and the garage. An excess per claim applies, and it is stated in the proposal.</li></ul>"),
        ("Owned through a company",
         "<p>Many cars of this value are owned by a holding or family company. Insurers can accept the company as policyholder with the person who actually drives the car named as the habitual driver — always subject to the insurer's acceptance, which we confirm in writing before you commit.</p>"),
        ("If you live outside Spain for part of the year",
         "<p>For owners who keep a car in Spain but live elsewhere — in the UK, the Gulf, Switzerland or the Americas — the insurer will ask where your habitual residence is, how long you stay in Spain each year, and when you last arrived. A licence issued outside the EU can be used in Spain while you are a visitor if it meets the recognition rules, usually together with an International Driving Permit; the DGT sets out the rules for each country. Tell us your situation at the start: it decides which insurers will look at the risk.</p>"),
    ],
    form_h2="Request a luxury car quote",
    form_sub="Tell us the car, its value and who drives it. We reply in writing.",
    note="We place this cover with specialist insurers that underwrite in Spain. Every proposal names the insurer and the conditions in writing.",
    ask=["Full name and Spanish NIE (or passport)", "Make, model, year and registration", "Current mileage", "Agreed value requested (from €200,000)",
         "Purchase invoice, or a comparable car for sale", "Photo report: all angles, interior and mileage", "Named driver(s) and their licences",
         "Policyholder: private person or company", "Where the car is kept", "Country of habitual residence"],
    faq=[
        ("Is there a minimum value?", "Yes. We place agreed-value cover for cars in Spain worth €200,000 or more. Classic and collector cars follow their own rules: see <a href=\"/en/classic-car-insurance-spain/\">classic car insurance in Spain</a>."),
        ("Is third-party liability included?", "No. Compulsory third-party liability is taken out separately, with your current insurer or one we propose. The agreed-value policy covers damage to your own car."),
        ("How do I prove the value of the car?", "With the purchase invoice, or a link to an advert or specialist dealer offering the same model with similar characteristics, age and mileage. An independent valuation also helps for limited editions."),
        ("Can a company be the policyholder?", "Insurers can accept a company as policyholder with the actual driver named as habitual driver, subject to their acceptance."),
        ("I do not live in Spain all year. Can I insure the car there?", "Often, yes. The insurer will ask about your habitual residence, your stays in Spain and your driving licence. Tell us at the start."),
    ],
    guides=[("/en/blog/luxury-car-insurance-portugal/", "Insuring a car that is worth more than the market says it is"),
            ("/en/blog/classic-high-value-car-insurance-spain/", "Classic and high-value car insurance in Spain")],
    related=[("/en/classic-car-insurance-spain/", "Classic car insurance in Spain"), ("/en/jewellery-watch-insurance-spain/", "Jewellery and watch insurance in Spain"),
             ("/en/home-insurance-spain/", "High-value home insurance in Spain"), ("/en/private-clients-spain/", "Private client insurance in Spain")],
    tipo="Luxury car (Spain)",
),
"de": dict(
    title="Luxusauto-Versicherung in Spanien · vereinbarter Wert ab 200.000 €",
    desc="Kaskoversicherung zum vereinbarten Wert für Luxus- und Sportwagen in Spanien ab 200.000 €. Wie der Wert nachgewiesen wird, was der Versicherer verlangt und wie die Haftpflicht geregelt ist.",
    kw="luxusauto versicherung spanien, sportwagen versicherung spanien, auto versichern spanien vereinbarter wert, porsche versicherung spanien, ferrari versicherung spanien",
    crumb="Luxusautos", eyebrow="Spanien · Luxusautos",
    h1="Luxusauto-Versicherung in Spanien, zum vereinbarten Wert",
    sub="Für Porsche, Mercedes-AMG, Bentley, Ferrari, Rolls-Royce und andere Fahrzeuge in Spanien ab 200.000 €. Der eigene Schaden ist zu einem Wert versichert, der vor dem Schaden vereinbart wird — nicht zu einer Zahl, die der Versicherer danach berechnet.",
    trust="<strong>ASF Nr. 425591790/3</strong> · DGSFP (LPS) · Versicherer schriftlich benannt",
    wa="Hallo, ich möchte ein Angebot für eine Luxusauto-Versicherung in Spanien.",
    sections=[
        ("Warum eine normale Kfz-Police nicht passt",
         "<p>Eine spanische Kfz-Police ist für ein Fahrzeug gemacht, dessen Wert sich in einer Tabelle nachschlagen lässt. Bei einem Auto ab 200.000 € stößt sie an drei Stellen an Grenzen: Die Kasko hat eine Obergrenze, die Entschädigung bei Totalschaden wird aus Markttabellen und Abschreibung berechnet, und die Reparatur erfolgt dort, wo der Versicherer entscheidet.</p>"
         "<p>Eine Police zum vereinbarten Wert funktioniert umgekehrt: Der Wert wird zu Beginn mit dem Versicherer festgelegt, auf Basis Ihrer Nachweise, und auf diesem Wert baut die Police auf. Dieses Produkt vermitteln wir für Fahrzeuge in Spanien ab 200.000 €.</p>"),
        ("Zwei Policen, nicht eine",
         "<p>Jedes Fahrzeug auf spanischen Straßen braucht die gesetzliche Haftpflicht (<em>seguro obligatorio</em>). In diesem Produkt ist sie <strong>nicht enthalten</strong>: Die Police zum vereinbarten Wert deckt Schäden am eigenen Fahrzeug, die Haftpflicht wird separat abgeschlossen — beim bisherigen Versicherer oder bei einem, den wir vorschlagen. Wir legen schriftlich dar, wie beide zusammenpassen, damit keine Lücke entsteht und nichts doppelt bezahlt wird.</p>"),
        ("Wie der Wert nachgewiesen wird",
         "<p>Der vereinbarte Wert ist die wichtigste Zahl im Angebot, und der Versicherer verlangt einen Nachweis. Als Grundlage gilt in der Regel eines davon:</p>"
         "<ul class=\"lp-covers\"><li><strong>Die Kaufrechnung</strong>Der direkteste Nachweis, vor allem bei einem kürzlichen Kauf.</li>"
         "<li><strong>Ein vergleichbares Fahrzeug im Verkauf</strong>Ein Link zu einer Anzeige oder einem Fachhändler mit demselben Modell und ähnlichen Merkmalen — vor allem ähnlichem Alter und Kilometerstand.</li>"
         "<li><strong>Ein unabhängiges Gutachten</strong>Sinnvoll bei limitierten Serien, Sonderausstattungen und Modellen, deren Markt sich schnell bewegt.</li></ul>"),
        ("Was der Versicherer vor Ausstellung verlangt",
         "<ul class=\"lp-covers\"><li><strong>Aktuelle Fotodokumentation</strong>Das Fahrzeug von allen Seiten — vorne, hinten, beide Seiten und der Innenraum — mit einem Foto des aktuellen Kilometerstands.</li>"
         "<li><strong>Identität von Versicherungsnehmer und Fahrer</strong>DNI oder NIE, ersatzweise Reisepass, und der Führerschein jedes Fahrers.</li>"
         "<li><strong>Nutzung</strong>Diese Policen gelten in der Regel nur für die private Nutzung und für die benannten Fahrer.</li>"
         "<li><strong>Standort</strong>Adresse und Garage. Je Schaden gilt ein Selbstbehalt, der im Angebot steht.</li></ul>"),
        ("Fahrzeug im Besitz einer Gesellschaft",
         "<p>Viele Fahrzeuge dieser Klasse gehören einer Holding oder Familiengesellschaft. Versicherer können die Gesellschaft als Versicherungsnehmer akzeptieren, mit der Person, die das Auto tatsächlich fährt, als Hauptfahrer — immer vorbehaltlich der Annahme durch den Versicherer, die wir vor dem Abschluss schriftlich bestätigen.</p>"),
        ("Wenn Sie nur einen Teil des Jahres in Spanien leben",
         "<p>Wer ein Fahrzeug in Spanien hält, aber den Hauptwohnsitz in Deutschland, Österreich, der Schweiz oder anderswo hat, wird nach dem gewöhnlichen Aufenthalt, der Dauer der Aufenthalte in Spanien und dem Datum der letzten Einreise gefragt. Ein EU-Führerschein gilt in Spanien; für Führerscheine aus Drittstaaten gelten eigene Anerkennungsregeln der DGT. Sagen Sie uns Ihre Situation zu Beginn: Sie entscheidet, welche Versicherer das Risiko prüfen.</p>"),
    ],
    form_h2="Luxusauto-Versicherung anfragen",
    form_sub="Nennen Sie uns Fahrzeug, Wert und Fahrer. Wir antworten schriftlich.",
    note="Wir platzieren diese Deckung bei spezialisierten Versicherern, die in Spanien zeichnen. Jedes Angebot nennt Versicherer und Bedingungen schriftlich.",
    ask=["Name und spanische NIE (oder Reisepass)", "Marke, Modell, Baujahr und Kennzeichen", "Aktueller Kilometerstand", "Gewünschter vereinbarter Wert (ab 200.000 €)",
         "Kaufrechnung oder vergleichbares Fahrzeug im Verkauf", "Fotodokumentation: alle Seiten, Innenraum, Kilometerstand", "Benannte Fahrer und Führerscheine",
         "Versicherungsnehmer: Privatperson oder Gesellschaft", "Standort des Fahrzeugs", "Land des gewöhnlichen Aufenthalts"],
    faq=[
        ("Gibt es einen Mindestwert?", "Ja. Wir vermitteln Deckung zum vereinbarten Wert für Fahrzeuge in Spanien ab 200.000 €. Oldtimer folgen eigenen Regeln: siehe <a href=\"/de/oldtimerversicherung-spanien/\">Oldtimerversicherung in Spanien</a>."),
        ("Ist die Haftpflicht enthalten?", "Nein. Die gesetzliche Haftpflicht wird separat abgeschlossen, beim bisherigen Versicherer oder bei einem, den wir vorschlagen. Die Police zum vereinbarten Wert deckt Schäden am eigenen Fahrzeug."),
        ("Wie weise ich den Wert nach?", "Mit der Kaufrechnung oder einem Link zu einer Anzeige oder einem Fachhändler mit demselben Modell, ähnlichen Merkmalen, Alter und Kilometerstand. Bei limitierten Serien hilft ein Gutachten."),
        ("Kann eine Gesellschaft Versicherungsnehmer sein?", "Versicherer können eine Gesellschaft als Versicherungsnehmer akzeptieren, mit dem tatsächlichen Fahrer als Hauptfahrer — vorbehaltlich ihrer Annahme."),
        ("Ich lebe nicht das ganze Jahr in Spanien. Geht das?", "Oft ja. Der Versicherer fragt nach dem gewöhnlichen Aufenthalt, den Aufenthalten in Spanien und dem Führerschein. Sagen Sie es uns zu Beginn."),
    ],
    guides=[("/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/", "Oldtimer und Luxusautos in Portugal und Spanien versichern")],
    related=[("/de/oldtimerversicherung-spanien/", "Oldtimerversicherung in Spanien"), ("/de/schmuck-uhren-versicherung-portugal-spanien/", "Schmuck und Uhren"),
             ("/de/hausversicherung-spanien/", "Hochwertige Immobilien in Spanien"), ("/de/private-clients-spanien/", "Private Clients in Spanien")],
    tipo="Luxusauto (Spanien)",
),
"es": dict(
    title="Seguro de coche de lujo en España · Valor acordado desde 200.000 €",
    desc="Seguro de daños propios a valor acordado para coches de lujo y deportivos en España desde 200.000 €. Cómo se justifica el valor, qué pide la aseguradora y cómo se contrata la responsabilidad civil.",
    kw="seguro coche de lujo españa, seguro coche alto valor españa, seguro valor acordado coche, seguro rolls royce españa, seguro ferrari españa, seguro superdeportivo",
    crumb="Coches de lujo", eyebrow="España · Coches de lujo",
    h1="Seguro de coche de lujo en España, a valor acordado",
    sub="Para Rolls-Royce, Bentley, Ferrari, Lamborghini, Porsche y otros coches en España desde 200.000 €. Los daños propios se aseguran por un valor pactado antes del siniestro — no por una cifra que la aseguradora calcula después.",
    meta="Mediador de seguros registrado · ASF n.º 425591790/3 · DGSFP (LPS) · Aseguradora indicada por escrito",
    sections=[
        ("Por qué una póliza de auto corriente no encaja",
         "<p>Una póliza de auto española está pensada para un coche cuyo valor se consulta en unas tablas. Para un coche de 200.000 € o más falla en tres puntos: los daños propios tienen un tope, la indemnización por siniestro total se calcula con tablas de mercado y depreciación, y la reparación se hace donde decide la aseguradora.</p>"
         "<p>Una póliza a valor acordado funciona al revés: el valor del coche se fija con la aseguradora al principio, con las pruebas que usted aporta, y la póliza se construye sobre esa cifra. Es el producto que colocamos para coches en España desde 200.000 €.</p>"),
        ("Dos pólizas, no una",
         "<p>Todo vehículo que circula en España debe tener el seguro obligatorio de responsabilidad civil. En este producto <strong>no está incluido</strong>: la póliza a valor acordado cubre los daños propios del coche, y la responsabilidad civil se contrata aparte — con su aseguradora actual o con la que le propongamos. Le explicamos por escrito cómo encajan las dos, para que no quede ningún hueco y no pague dos veces lo mismo.</p>"),
        ("Cómo se justifica el valor",
         "<p>El valor acordado es la cifra más importante de la propuesta, y la aseguradora pedirá que lo justifique. Normalmente basta con una de estas pruebas:</p>"
         "<ul><li><strong>La factura de compra.</strong> La prueba más directa, sobre todo si la compra es reciente.</li>"
         "<li><strong>Un coche comparable a la venta.</strong> El enlace a un anuncio o a un concesionario especializado con el mismo modelo y características similares — sobre todo antigüedad y kilometraje.</li>"
         "<li><strong>Una tasación independiente.</strong> Útil en series limitadas, especificaciones especiales y modelos cuyo mercado cambia deprisa.</li></ul>"),
        ("Lo que pide la aseguradora antes de emitir",
         "<ul><li><strong>Reportaje fotográfico reciente:</strong> el coche desde todos los ángulos — frontal, trasera, laterales e interior — con una foto del kilometraje actual.</li>"
         "<li><strong>Identidad del tomador y del conductor:</strong> DNI o NIE, o pasaporte si aún no lo tiene, y el permiso de conducir de cada conductor.</li>"
         "<li><strong>Uso:</strong> estas pólizas suelen ser solo para uso privado y para el conductor o conductores designados.</li>"
         "<li><strong>Dónde se guarda:</strong> la dirección y el garaje. Hay una franquicia por siniestro, que figura en la propuesta.</li></ul>"),
        ("Coche a nombre de una sociedad",
         "<p>Muchos coches de este valor pertenecen a una sociedad patrimonial o familiar. Las aseguradoras pueden aceptar a la sociedad como tomadora y a quien conduce el coche como conductor habitual — siempre sujeto a la aceptación de la aseguradora, que le confirmamos por escrito antes de contratar.</p>"),
        ("Si no vive en España todo el año",
         "<p>Para propietarios que tienen el coche en España pero residen en otro país — en México, Colombia, Venezuela, Estados Unidos o los Emiratos —, la aseguradora preguntará dónde está su residencia habitual, cuánto tiempo pasa en España cada año y cuándo fue su última entrada. Un permiso de conducir de fuera de la UE puede usarse en España como visitante si cumple las reglas de reconocimiento, normalmente junto con el Permiso Internacional de Conducción; la DGT publica las reglas de cada país. Díganos su situación desde el principio: decide qué aseguradoras estudiarán el riesgo.</p>"),
    ],
    faq=[
        ("¿Hay un valor mínimo?", "Sí. Colocamos seguros a valor acordado para coches en España desde 200.000 €. Los clásicos y de colección tienen sus propias reglas: vea <a href=\"/es/seguro-vehiculos-clasicos-espana/\">seguro de vehículos clásicos en España</a>."),
        ("¿Incluye la responsabilidad civil?", "No. El seguro obligatorio de responsabilidad civil se contrata aparte, con su aseguradora actual o con la que le propongamos. La póliza a valor acordado cubre los daños propios del coche."),
        ("¿Cómo justifico el valor del coche?", "Con la factura de compra o con el enlace a un anuncio o concesionario especializado con el mismo modelo, características, antigüedad y kilometraje similares. En series limitadas ayuda una tasación."),
        ("¿Puede ser tomadora una sociedad?", "Las aseguradoras pueden aceptar a una sociedad como tomadora, con el conductor real como conductor habitual, sujeto a su aceptación."),
        ("No vivo en España todo el año. ¿Puedo asegurar el coche allí?", "A menudo sí. La aseguradora preguntará por su residencia habitual, sus estancias en España y su permiso de conducir. Díganoslo desde el principio."),
    ],
    related=[("/es/seguro-vehiculos-clasicos-espana/", "Seguro de vehículos clásicos en España"), ("/es/seguro-joyas-relojes-espana/", "Seguro de joyas y relojes en España"),
             ("/es/seguro-hogar-alto-valor-espana/", "Seguro de hogar de alto valor en España")],
    form_intro="Díganos el coche, su valor y quién lo conduce. Le respondemos por escrito con una propuesta.",
    note="Colocamos esta cobertura con aseguradoras especializadas que suscriben riesgos en España. En la propuesta indicamos por escrito la aseguradora y las condiciones.",
    subject="Nueva solicitud (ES) — Seguro de coche de lujo en España",
    placeholder="Por ejemplo: Porsche 911 Turbo S de 2023, matrícula española, 8.000 km, garaje en Marbella, valor 230.000 €.",
),
}

# ---------------------------------------------------------------------------
# CLASSIC CARS (rewrite)
# ---------------------------------------------------------------------------
CLASSIC = {
"en": dict(
    title="Classic Car Insurance in Spain · One Car or a Collection",
    desc="Classic and collector car insurance in Spain with Hiscox Vehículos Clásicos: one car or a whole collection, at a value supported by evidence, explained in English and in writing.",
    kw="classic car insurance spain, collector car insurance spain, hiscox vehiculos clasicos, historic vehicle insurance spain, classic car collection insurance",
    crumb="Classic cars", eyebrow="Spain · Classic cars",
    h1="Classic car insurance in Spain",
    sub="Hiscox Vehículos Clásicos is written for owners of classic vehicles in Spain — one car or a whole collection — and for the private garages where they are kept. We arrange it in English and set out the conditions in writing before you commit.",
    trust="<strong>ASF no. 425591790/3</strong> · Placed with Hiscox in Spain · Written reply",
    wa="Hello, I would like a quote for classic car insurance in Spain.",
    sections=[
        ("A car that deserves to be treated like a work of art",
         "<p>Hiscox describes its classic vehicle product in exactly those terms: whether it is one car or a collection, both take dedication and both deserve, from an insurance point of view, the treatment a work of art would receive. In practice that means the car is insured for what it is actually worth, described individually, by an insurer that understands why an original interior or matching numbers matter.</p>"
         "<p>The product is designed for two kinds of owner: private owners of classic vehicles, and specialised garages that keep classic vehicles which are not for sale. For a collection we describe each vehicle on its own — make, model, year, condition and value — so the proposal reflects what is actually in the garage.</p>"),
        ("How the value is supported",
         "<p>The value of each car is the most important figure in the proposal, and it has to be supported. Any of the following is a good starting point, and for a valuable car we usually combine two:</p>"
         "<ul class=\"lp-covers\"><li><strong>Purchase invoice</strong>Especially for a car bought recently, at auction or from a specialist dealer.</li>"
         "<li><strong>Comparable cars on the market</strong>Adverts or specialist dealers offering the same model in a similar condition, year and mileage.</li>"
         "<li><strong>Valuation or auction results</strong>A recent independent valuation, or published results for the same model.</li>"
         "<li><strong>Restoration and history file</strong>Invoices, photographs of the work and the car's documented history.</li></ul>"
         "<p>A recent photo report — all angles, the interior, the engine bay and the odometer — completes the file.</p>"),
        ("What else shapes the cover",
         "<ul class=\"lp-covers\"><li><strong>How the car is used</strong>Weekend drives, club rallies or a car that rarely leaves the garage: use and annual mileage are part of the proposal.</li>"
         "<li><strong>Where it is kept</strong>The garage address, how it is secured and whether the cars share it with others.</li>"
         "<li><strong>Who drives</strong>The named drivers and their licences.</li>"
         "<li><strong>Compulsory liability</strong>Every vehicle used on the road in Spain must carry third-party liability. The proposal states in writing how it is arranged for each car.</li></ul>"),
        ("Historic registration in Spain",
         "<p>Spain's Regulation on Historic Vehicles (Real Decreto 892/2024) has applied since 1 October 2024. A vehicle can be classified as historic when it was manufactured or first registered at least 30 years ago, among other conditions. There is a shorter procedure for cars already registered in Spain with a valid ITV, and a longer one for cars that are not — including cars imported from abroad. Historic vehicles over 60 years old are exempt from periodic ITV.</p>"
         "<p>If your car is still on foreign plates, or is being imported, tell us: it changes the order in which things need to be done. For cars above €200,000 that are not classics, see <a href=\"/en/luxury-car-insurance-spain/\">luxury car insurance in Spain</a>.</p>"),
    ],
    form_h2="Request a classic car quote",
    form_sub="Tell us about the car or the collection, where it is kept and how it is used.",
    note="We place this policy with Hiscox, which underwrites in Spain. Every proposal names the insurer and the conditions in writing.",
    ask=["Full name and Spanish NIE (or passport)", "Address where the vehicles are kept", "For each vehicle: make, model, year and registration",
         "Value of each vehicle, with invoice, valuation or comparables", "Recent photos: all angles, interior and odometer", "How each vehicle is used and roughly how many km a year", "Named drivers"],
    faq=[
        ("Can I insure a whole collection on one policy?", "Hiscox Vehículos Clásicos is designed both for a single vehicle and for a collection. We describe each car individually in the proposal."),
        ("How do I support the value of my car?", "With the purchase invoice, a recent valuation, auction results or comparable cars on the market, plus a recent photo report. For a valuable car we usually combine two of these."),
        ("Does my car need to be registered as a historic vehicle?", "No, but tell us how it is registered today. Under Real Decreto 892/2024 a vehicle can be classified as historic from 30 years after manufacture or first registration, among other conditions."),
        ("Is third-party liability included?", "Third-party liability is compulsory for every vehicle used on the road in Spain. The proposal states in writing how it is arranged for each vehicle."),
        ("My car is on Portuguese plates. Can you help?", "Yes. For cars registered in Portugal we place classic and collector cover there; for cars registered in Spain, Hiscox Vehículos Clásicos. Tell us where the car is registered and kept."),
    ],
    guides=[("/en/blog/classic-high-value-car-insurance-spain/", "Classic and high-value car insurance in Spain"),
            ("/en/blog/luxury-car-insurance-portugal/", "Insuring a car that is worth more than the market says it is")],
    related=[("/en/luxury-car-insurance-spain/", "Luxury car insurance in Spain"), ("/en/jewellery-watch-insurance-spain/", "Jewellery and watch insurance in Spain"),
             ("/en/private-clients-spain/", "Private client insurance in Spain")],
    tipo="Classic car (Spain)",
),
"de": dict(
    title="Oldtimerversicherung in Spanien · Einzelfahrzeug oder Sammlung",
    desc="Oldtimer- und Sammlerfahrzeuge in Spanien mit Hiscox Vehículos Clásicos versichern: ein Auto oder eine ganze Sammlung, zu einem belegten Wert, schriftlich erklärt.",
    kw="oldtimerversicherung spanien, oldtimer versichern spanien, sammlerfahrzeuge versicherung spanien, hiscox vehiculos clasicos, historisches fahrzeug spanien",
    crumb="Oldtimer", eyebrow="Spanien · Oldtimer",
    h1="Oldtimerversicherung in Spanien",
    sub="Hiscox Vehículos Clásicos ist für Eigentümer klassischer Fahrzeuge in Spanien gemacht — ein Auto oder eine ganze Sammlung — und für die privaten Garagen, in denen sie stehen. Wir erklären die Bedingungen schriftlich, bevor Sie unterschreiben.",
    trust="<strong>ASF Nr. 425591790/3</strong> · Bei Hiscox in Spanien platziert · Schriftliche Antwort",
    wa="Hallo, ich möchte ein Angebot für eine Oldtimerversicherung in Spanien.",
    sections=[
        ("Ein Auto, das wie ein Kunstwerk behandelt werden sollte",
         "<p>Hiscox beschreibt sein Oldtimer-Produkt genau so: Ob ein Fahrzeug oder eine Sammlung — beide verlangen Hingabe und verdienen versicherungstechnisch die Behandlung eines Kunstwerks. Praktisch heißt das: Das Auto ist zu dem Wert versichert, den es tatsächlich hat, einzeln beschrieben, bei einem Versicherer, der versteht, warum ein Originalinterieur oder <em>matching numbers</em> zählen.</p>"
         "<p>Das Produkt ist für zwei Arten von Eigentümern gedacht: private Eigentümer klassischer Fahrzeuge und spezialisierte Garagen, in denen Oldtimer stehen, die nicht zum Verkauf bestimmt sind. Bei einer Sammlung beschreiben wir jedes Fahrzeug einzeln — Marke, Modell, Baujahr, Zustand und Wert.</p>"),
        ("Wie der Wert belegt wird",
         "<p>Der Wert jedes Fahrzeugs ist die wichtigste Zahl im Angebot und muss belegt werden. Jeder dieser Nachweise ist ein guter Ausgangspunkt; bei wertvollen Fahrzeugen kombinieren wir meist zwei:</p>"
         "<ul class=\"lp-covers\"><li><strong>Kaufrechnung</strong>Vor allem bei einem kürzlichen Kauf, auf einer Auktion oder beim Fachhändler.</li>"
         "<li><strong>Vergleichbare Fahrzeuge am Markt</strong>Anzeigen oder Fachhändler mit demselben Modell in ähnlichem Zustand, Baujahr und Kilometerstand.</li>"
         "<li><strong>Gutachten oder Auktionsergebnisse</strong>Ein aktuelles unabhängiges Gutachten oder veröffentlichte Ergebnisse für dasselbe Modell.</li>"
         "<li><strong>Restaurierungs- und Historienakte</strong>Rechnungen, Fotos der Arbeiten und die dokumentierte Geschichte des Fahrzeugs.</li></ul>"
         "<p>Eine aktuelle Fotodokumentation — alle Seiten, Innenraum, Motorraum und Kilometerstand — vervollständigt die Unterlagen.</p>"),
        ("Was die Deckung außerdem bestimmt",
         "<ul class=\"lp-covers\"><li><strong>Nutzung</strong>Wochenendausfahrten, Clubrallyes oder ein Auto, das kaum die Garage verlässt: Nutzung und Jahreskilometer gehören ins Angebot.</li>"
         "<li><strong>Standort</strong>Adresse der Garage, Sicherung und ob sie mit anderen geteilt wird.</li>"
         "<li><strong>Fahrer</strong>Die benannten Fahrer und ihre Führerscheine.</li>"
         "<li><strong>Gesetzliche Haftpflicht</strong>Jedes Fahrzeug auf spanischen Straßen braucht eine Haftpflicht. Das Angebot legt schriftlich dar, wie sie für jedes Fahrzeug geregelt ist.</li></ul>"),
        ("Historische Zulassung in Spanien",
         "<p>Seit dem 1. Oktober 2024 gilt in Spanien die Verordnung über historische Fahrzeuge (Real Decreto 892/2024). Ein Fahrzeug kann unter anderem dann als historisch eingestuft werden, wenn es vor mindestens 30 Jahren hergestellt oder erstmals zugelassen wurde. Für in Spanien zugelassene Fahrzeuge mit gültiger ITV gibt es ein verkürztes Verfahren, für alle anderen — auch importierte Fahrzeuge — ein längeres. Historische Fahrzeuge über 60 Jahre sind von der regelmäßigen ITV befreit.</p>"
         "<p>Fährt Ihr Auto noch mit deutschem oder anderem ausländischem Kennzeichen oder wird es gerade importiert, sagen Sie es uns: Das ändert die Reihenfolge der Schritte. Für Fahrzeuge ab 200.000 €, die keine Oldtimer sind: <a href=\"/de/luxusauto-versicherung-spanien/\">Luxusauto-Versicherung in Spanien</a>.</p>"),
    ],
    form_h2="Oldtimerversicherung anfragen",
    form_sub="Beschreiben Sie das Fahrzeug oder die Sammlung, den Standort und die Nutzung.",
    note="Wir platzieren diese Police bei Hiscox, die in Spanien zeichnet. Jedes Angebot nennt Versicherer und Bedingungen schriftlich.",
    ask=["Name und spanische NIE (oder Reisepass)", "Adresse, an der die Fahrzeuge stehen", "Je Fahrzeug: Marke, Modell, Baujahr und Kennzeichen",
         "Wert je Fahrzeug, mit Rechnung, Gutachten oder Vergleichsangeboten", "Aktuelle Fotos: alle Seiten, Innenraum, Kilometerstand", "Nutzung und ungefähre Jahreskilometer", "Benannte Fahrer"],
    faq=[
        ("Kann ich eine ganze Sammlung in einer Police versichern?", "Hiscox Vehículos Clásicos ist für ein einzelnes Fahrzeug ebenso gedacht wie für eine Sammlung. Im Angebot beschreiben wir jedes Fahrzeug einzeln."),
        ("Wie belege ich den Wert?", "Mit Kaufrechnung, aktuellem Gutachten, Auktionsergebnissen oder vergleichbaren Fahrzeugen am Markt, dazu einer aktuellen Fotodokumentation. Bei wertvollen Fahrzeugen kombinieren wir meist zwei Nachweise."),
        ("Muss mein Auto als historisches Fahrzeug zugelassen sein?", "Nein, aber sagen Sie uns, wie es heute zugelassen ist. Nach dem Real Decreto 892/2024 kann ein Fahrzeug unter anderem ab 30 Jahren nach Herstellung oder Erstzulassung als historisch eingestuft werden."),
        ("Ist die Haftpflicht enthalten?", "Die Haftpflicht ist für jedes Fahrzeug auf spanischen Straßen Pflicht. Das Angebot legt schriftlich dar, wie sie für jedes Fahrzeug geregelt ist."),
    ],
    guides=[("/de/blog/oldtimer-luxusauto-versicherung-portugal-spanien/", "Oldtimer und Luxusautos in Portugal und Spanien versichern")],
    related=[("/de/luxusauto-versicherung-spanien/", "Luxusauto-Versicherung in Spanien"), ("/de/schmuck-uhren-versicherung-portugal-spanien/", "Schmuck und Uhren"),
             ("/de/private-clients-spanien/", "Private Clients in Spanien")],
    tipo="Oldtimer (Spanien)",
),
"es": dict(
    title="Seguro de coches clásicos en España · Un coche o una colección",
    desc="Seguro de coches clásicos y de colección en España con Hiscox Vehículos Clásicos: un coche o toda una colección, por un valor justificado, explicado por escrito y en español.",
    kw="seguro coche clasico, seguro coches clasicos españa, seguro vehiculos clasicos, seguro coleccion de coches, hiscox vehiculos clasicos, seguro vehiculo historico",
    crumb="Vehículos clásicos", eyebrow="España · Vehículos clásicos",
    h1="Seguro de coches clásicos en España",
    sub="Hiscox Vehículos Clásicos está pensado para los propietarios de vehículos clásicos en España — un solo coche o toda una colección — y para los garajes particulares donde se guardan. Le explicamos las condiciones por escrito y en español antes de contratar.",
    meta="Mediador de seguros registrado · ASF n.º 425591790/3 · DGSFP (LPS) · Colocado con Hiscox en España",
    sections=[
        ("Un coche que merece el trato de una obra de arte",
         "<p>Así describe Hiscox su producto para vehículos clásicos: ya sea un solo coche o una colección, ambos casos requieren dedicación y merecen, desde el punto de vista asegurador, el mismo trato que una verdadera obra de arte. En la práctica, el coche se asegura por lo que vale de verdad, descrito uno a uno, con una aseguradora que entiende por qué importan un interior original o los <em>matching numbers</em>.</p>"
         "<p>El producto está pensado para dos tipos de propietario: particulares con vehículos clásicos y garajes especializados que albergan vehículos clásicos no destinados a la venta. En una colección describimos cada vehículo por separado — marca, modelo, año, estado y valor.</p>"),
        ("Cómo se justifica el valor",
         "<p>El valor de cada vehículo es la cifra más importante de la propuesta, y hay que justificarlo. Cualquiera de estas pruebas es un buen punto de partida; en un coche valioso solemos combinar dos:</p>"
         "<ul><li><strong>Factura de compra</strong>, sobre todo si la compra es reciente, en subasta o en un concesionario especializado.</li>"
         "<li><strong>Coches comparables en el mercado</strong>: anuncios o concesionarios especializados con el mismo modelo en estado, año y kilometraje similares.</li>"
         "<li><strong>Tasación o resultados de subasta</strong> recientes del mismo modelo.</li>"
         "<li><strong>Historial de restauración</strong>: facturas, fotografías de los trabajos y la historia documentada del coche.</li></ul>"
         "<p>Un reportaje fotográfico reciente — todos los ángulos, interior, motor y cuentakilómetros — completa el expediente.</p>"),
        ("Lo que también da forma a la cobertura",
         "<ul><li><strong>Cómo se usa.</strong> Salidas de fin de semana, concentraciones del club o un coche que casi no sale del garaje: el uso y los kilómetros anuales forman parte de la propuesta.</li>"
         "<li><strong>Dónde se guarda.</strong> La dirección del garaje, su seguridad y si se comparte con otros vehículos.</li>"
         "<li><strong>Quién conduce.</strong> Los conductores designados y sus permisos.</li>"
         "<li><strong>La responsabilidad civil obligatoria.</strong> Todo vehículo que circula en España debe tenerla. La propuesta indica por escrito cómo queda contratada para cada coche.</li></ul>"),
        ("Vehículo histórico: el reglamento de 2024",
         "<p>Desde el 1 de octubre de 2024 rige el Reglamento de Vehículos Históricos (Real Decreto 892/2024). Un vehículo puede clasificarse como histórico, entre otras condiciones, si se fabricó o se matriculó por primera vez hace al menos 30 años. Hay un procedimiento abreviado para coches ya matriculados en España con la ITV en vigor, y otro para los que no lo están — incluidos los importados. Los históricos de más de 60 años quedan exentos de la ITV periódica.</p>"
         "<p>Si su coche aún lleva placas extranjeras o lo está importando, díganoslo: cambia el orden de los trámites. Para coches de más de 200.000 € que no son clásicos, vea el <a href=\"/es/seguro-coche-lujo-espana/\">seguro de coche de lujo en España</a>.</p>"),
    ],
    faq=[
        ("¿Puedo asegurar toda una colección en una póliza?", "Hiscox Vehículos Clásicos está pensado tanto para un solo vehículo como para una colección. En la propuesta describimos cada coche por separado."),
        ("¿Cómo justifico el valor de mi coche?", "Con la factura de compra, una tasación reciente, resultados de subasta o coches comparables en el mercado, más un reportaje fotográfico reciente. En un coche valioso solemos combinar dos pruebas."),
        ("¿Mi coche tiene que estar catalogado como histórico?", "No, pero díganos cómo está matriculado hoy. Según el Real Decreto 892/2024, un vehículo puede clasificarse como histórico, entre otras condiciones, a partir de 30 años desde su fabricación o primera matriculación."),
        ("¿Incluye la responsabilidad civil?", "La responsabilidad civil es obligatoria para todo vehículo que circula en España. La propuesta indica por escrito cómo queda contratada para cada vehículo."),
    ],
    related=[("/es/seguro-coche-lujo-espana/", "Seguro de coche de lujo en España"), ("/es/seguro-coches-clasicos-alto-valor-portugal-espana/", "Coches clásicos y de alto valor en Portugal y España"),
             ("/es/seguro-joyas-relojes-espana/", "Seguro de joyas y relojes en España")],
    form_intro="Cuéntenos qué vehículos tiene, dónde los guarda y cómo los usa. Le respondemos por escrito con una propuesta.",
    note="Colocamos esta póliza con Hiscox, que suscribe riesgos en España. En la propuesta indicamos por escrito la aseguradora y las condiciones.",
    subject="Nueva solicitud (ES) — Seguro de vehículos clásicos en España",
    placeholder="Por ejemplo: dos coches de los años 60, matrícula española, garaje cerrado en Sotogrande, unos 1.500 km al año.",
),
}

# ---------------------------------------------------------------------------
# JEWELLERY & WATCHES — new EN page
# ---------------------------------------------------------------------------
JEWELLERY_EN = dict(
    title="Jewellery & Watch Insurance in Spain · Separate from Your Home Policy",
    desc="All-risks insurance for jewellery and watches in Spain, separate from your home policy: each piece listed with its value, for residents of Spain. What a home policy pays and what a dedicated policy changes.",
    kw="jewellery insurance spain, watch insurance spain, rolex insurance spain, valuables insurance spain, engagement ring insurance spain",
    crumb="Jewellery and watches", eyebrow="Spain · Jewellery and watches",
    h1="Jewellery and watch insurance in Spain",
    sub="A Spanish home policy pays a few thousand euros per piece. The watch, the engagement ring and the necklace that matter can be insured on their own policy, each piece listed with its value — without touching the insurance on your house.",
    trust="<strong>ASF no. 425591790/3</strong> · DGSFP (LPS) · Insurer named in writing",
    wa="Hello, I would like a quote for jewellery and watch insurance in Spain.",
    sections=[
        ("Why the home policy is not enough",
         "<p>A Spanish home policy sets a sum for contents and then limits what it pays for jewellery and valuables. The limit per item is commonly between €1,500 and €5,000, and there is often an overall cap for all valuables together, of around 20 to 25% of the contents sum. Both limits apply at once, and the lower one wins.</p>"
         "<p>Above that limit the piece is simply not insured, however high the contents sum. Standard policies also distinguish between <em>robo</em> — theft with force or violence — and <em>hurto</em>, theft without it: the watch that disappears from a bag or a hotel room. The first is paid; the second, above all away from home, is limited or excluded.</p>"),
        ("A policy of its own for what matters",
         "<ul class=\"lp-covers\"><li><strong>All risks</strong>The jewellery and watch policy we place in Spain is an all-risks policy for the jewellery and watches of private clients — beyond theft, it considers loss and accidental damage, on the terms of its wording.</li>"
         "<li><strong>Independent</strong>It does not depend on who insures your home. Your house policy stays where it is.</li>"
         "<li><strong>Each piece named</strong>The watch, the ring, the inherited necklace: listed one by one, with a description and a value.</li>"
         "<li><strong>For private clients</strong>It is written for individuals, not for jewellers or businesses.</li></ul>"),
        ("Who it is for: residence in Spain",
         "<p>The policy is designed for private clients, Spanish or foreign, whose <strong>habitual residence is in Spain</strong> and who own one or more pieces of jewellery or watches. For British, American, German or Latin American families who live in Madrid, Marbella, Mallorca or Barcelona, that is exactly the fit.</p>"
         "<p>If your habitual residence is elsewhere and the pieces only travel to a holiday home in Spain, tell us: the answer depends on where you live and where the pieces are kept, and we will say in writing which option applies.</p>"),
        ("What we need to prepare it",
         "<ul class=\"lp-covers\"><li><strong>A list of the pieces</strong>Description, maker, and for watches the reference and serial number.</li>"
         "<li><strong>Proof of value</strong>Purchase invoices, recent valuations or gemmological certificates.</li>"
         "<li><strong>Photographs</strong>Of each important piece.</li>"
         "<li><strong>Where they are kept</strong>Safe, alarm, and how often they travel with you.</li></ul>"
         "<p>Valuations age: a piece valued ten years ago is rarely worth the same today. If yours are old, we tell you which pieces to update first. For art and collections, see <a href=\"/en/art-jewellery-watches-insurance/\">art, jewellery and watch insurance</a>.</p>"),
    ],
    form_h2="Request a jewellery and watch quote",
    form_sub="Tell us roughly what you want to insure and where you live. We reply in writing.",
    note="In Spain we place this cover with a specialist insurer that underwrites there. Every proposal names the insurer and the conditions in writing.",
    ask=["Full name and Spanish NIE", "Address of habitual residence in Spain", "List of pieces: description and maker", "Watches: reference and serial number",
         "Value of each piece, with invoices or valuations", "Photographs of the main pieces", "Safe and alarm at home", "How often the pieces travel"],
    faq=[
        ("Do I have to change my home insurance?", "No. The jewellery and watch policy is independent of your home insurer."),
        ("I do not live in Spain. Can I insure my jewellery there?", "This policy is designed for clients with habitual residence in Spain. If you live elsewhere, tell us where you live and where the pieces are kept, and we will say in writing which option applies."),
        ("What about theft away from home?", "That is one of the main reasons to have a dedicated policy: a home policy usually limits or excludes theft without force away from home. What the dedicated policy pays is set by its wording, which we explain in writing before you commit."),
        ("My valuations are old. Is that a problem?", "It can be. We ask for recent invoices or valuations for the most important pieces, so the values on the policy match today's market."),
    ],
    guides=[("/en/art-jewellery-watches-insurance/", "Art, jewellery and watch insurance in Portugal and Spain")],
    related=[("/en/home-insurance-spain/", "High-value home insurance in Spain"), ("/en/luxury-car-insurance-spain/", "Luxury car insurance in Spain"),
             ("/en/classic-car-insurance-spain/", "Classic car insurance in Spain"), ("/en/private-clients-spain/", "Private client insurance in Spain")],
    tipo="Jewellery & watches (Spain)",
)
