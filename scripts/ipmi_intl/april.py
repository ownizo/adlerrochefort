"""APRIL International (MyHealth International) — insurer page in every language.

Source: APRIL International MyHealth International documents 2026-2027 supplied by
the owner on 29 October 2026 (brochure, benefits schedule, IPID, terms and
conditions, member guide). Only facts stated in those documents are used.
"""

LEVELS = ["Explore", "Essential", "Extensive", "Elite"]
SEP = {"en": ",", "il": ",", "zh": ",", "de": ".", "nl": ".", "it": ".", "es": ".", "pt": ".", "dk": ".",
       "fr": " ", "pl": " ", "se": " "}


def m(lang, n):
    v = "€/US$\u00a0" + f"{n:,}".replace(",", SEP[lang])
    return f'<bdi dir="ltr">{v}</bdi>' if lang == "il" else v


def table(lang, rows):
    head = "".join(f"<th>{x}</th>" for x in LEVELS)
    body = "".join("<tr><td>" + r[0] + "</td>" + "".join(f"<td>{c}</td>" for c in r[1:]) + "</tr>" for r in rows)
    return f"<div class='ipmi-table ipmi-benefits'><table><thead><tr><th></th>{head}</tr></thead><tbody>{body}</tbody></table></div>"


def rows(lang, t):
    """t: labels for this language."""
    return [
        [t["limit"], m(lang, 500000), m(lang, 1500000), t["unl"], t["unl"]],
        [t["room"], t["semi"], t["priv"], t["priv"], t["priv"]],
        [t["scan"], m(lang, 10000), m(lang, 15000), m(lang, 20000), t["full"]],
        [t["op"], m(lang, 3000), t["unl_sub"], t["unl_sub"], t["unl_sub"]],
        [t["mat"], t["na"], m(lang, 4000) + t["perpreg"], m(lang, 8000) + t["perpreg"], m(lang, 12000) + t["perpreg"]],
        [t["dent"], m(lang, 800), m(lang, 1000), m(lang, 2000) + t["then"] + m(lang, 3000) + t["y3"], m(lang, 4000) + t["then"] + m(lang, 5000) + t["y3"]],
        [t["psy"], t["nc"], t["nc"], m(lang, 8000) + t["d15"], t["d30"]],
    ]


T = {
 "en": dict(limit="Annual limit per person", unl="Unlimited", room="Hospital room", semi="Semi-private", priv="Standard private",
            scan="MRI, CT and PET scans", full="In full", op="Out-patient, annual limit (optional)", unl_sub="Unlimited, with limits per benefit",
            mat="Maternity (optional)", na="Not available", perpreg=" per pregnancy", dent="Dental, annual limit (optional)",
            then=", then ", y3=" from year 3", psy="Psychiatric hospital stay", nc="Not covered", d15=", up to 15 days", d30="Up to 30 days"),
 "pt": dict(limit="Limite anual por pessoa", unl="Ilimitado", room="Quarto de hospital", semi="Semiprivado", priv="Privado standard",
            scan="Ressonância, TAC e PET", full="Na totalidade", op="Ambulatório, limite anual (opcional)", unl_sub="Ilimitado, com limites por cobertura",
            mat="Maternidade (opcional)", na="Não disponível", perpreg=" por gravidez", dent="Estomatologia, limite anual (opcional)",
            then=", depois ", y3=" a partir do 3.º ano", psy="Internamento psiquiátrico", nc="Não coberto", d15=", até 15 dias", d30="Até 30 dias"),
 "de": dict(limit="Jahreshöchstsumme pro Person", unl="Unbegrenzt", room="Krankenhauszimmer", semi="Zweibettzimmer", priv="Einzelzimmer (Standard)",
            scan="MRT, CT und PET", full="Vollständig", op="Ambulant, Jahreshöchstsumme (optional)", unl_sub="Unbegrenzt, mit Grenzen je Leistung",
            mat="Mutterschaft (optional)", na="Nicht verfügbar", perpreg=" pro Schwangerschaft", dent="Zahn, Jahreshöchstsumme (optional)",
            then=", danach ", y3=" ab dem 3. Jahr", psy="Stationäre Psychiatrie", nc="Nicht gedeckt", d15=", bis 15 Tage", d30="Bis 30 Tage"),
 "es": dict(limit="Límite anual por persona", unl="Ilimitado", room="Habitación de hospital", semi="Semiprivada", priv="Individual estándar",
            scan="Resonancia, TAC y PET", full="Íntegramente", op="Ambulatorio, límite anual (opcional)", unl_sub="Ilimitado, con límites por prestación",
            mat="Maternidad (opcional)", na="No disponible", perpreg=" por embarazo", dent="Dental, límite anual (opcional)",
            then=", después ", y3=" desde el 3.er año", psy="Hospitalización psiquiátrica", nc="No cubierto", d15=", hasta 15 días", d30="Hasta 30 días"),
 "nl": dict(limit="Jaarlimiet per persoon", unl="Onbeperkt", room="Ziekenhuiskamer", semi="Tweepersoonskamer", priv="Eenpersoonskamer (standaard)",
            scan="MRI, CT en PET", full="Volledig", op="Poliklinisch, jaarlimiet (aanvullend)", unl_sub="Onbeperkt, met limieten per vergoeding",
            mat="Zwangerschap (aanvullend)", na="Niet beschikbaar", perpreg=" per zwangerschap", dent="Tandarts, jaarlimiet (aanvullend)",
            then=", daarna ", y3=" vanaf jaar 3", psy="Psychiatrische opname", nc="Niet gedekt", d15=", tot 15 dagen", d30="Tot 30 dagen"),
 "fr": dict(limit="Plafond annuel par personne", unl="Illimité", room="Chambre d’hôpital", semi="Semi-privée", priv="Particulière standard",
            scan="IRM, scanner et PET", full="Intégralement", op="Soins courants, plafond annuel (option)", unl_sub="Illimité, avec plafonds par garantie",
            mat="Maternité (option)", na="Non disponible", perpreg=" par grossesse", dent="Dentaire, plafond annuel (option)",
            then=", puis ", y3=" à partir de la 3e année", psy="Hospitalisation psychiatrique", nc="Non couvert", d15=", jusqu’à 15 jours", d30="Jusqu’à 30 jours"),
 "it": dict(limit="Massimale annuo per persona", unl="Illimitato", room="Camera d’ospedale", semi="Semiprivata", priv="Privata standard",
            scan="Risonanza, TAC e PET", full="Integralmente", op="Ambulatoriale, massimale annuo (facoltativo)", unl_sub="Illimitato, con limiti per prestazione",
            mat="Maternità (facoltativa)", na="Non disponibile", perpreg=" per gravidanza", dent="Dentale, massimale annuo (facoltativo)",
            then=", poi ", y3=" dal 3° anno", psy="Ricovero psichiatrico", nc="Non coperto", d15=", fino a 15 giorni", d30="Fino a 30 giorni"),
 "pl": dict(limit="Roczna suma na osobę", unl="Bez limitu", room="Sala szpitalna", semi="Dwuosobowa", priv="Jednoosobowa standardowa",
            scan="Rezonans, tomografia i PET", full="W całości", op="Ambulatoryjnie, limit roczny (opcja)", unl_sub="Bez limitu, z limitami na świadczenie",
            mat="Macierzyństwo (opcja)", na="Niedostępne", perpreg=" na ciążę", dent="Stomatologia, limit roczny (opcja)",
            then=", potem ", y3=" od 3. roku", psy="Hospitalizacja psychiatryczna", nc="Nie obejmuje", d15=", do 15 dni", d30="Do 30 dni"),
 "se": dict(limit="Årligt tak per person", unl="Obegränsat", room="Sjukhusrum", semi="Delat rum", priv="Enkelrum (standard)",
            scan="MR, DT och PET", full="Fullt ut", op="Öppenvård, årligt tak (tillval)", unl_sub="Obegränsat, med tak per ersättning",
            mat="Mödravård (tillval)", na="Inte tillgängligt", perpreg=" per graviditet", dent="Tandvård, årligt tak (tillval)",
            then=", sedan ", y3=" från år 3", psy="Psykiatrisk slutenvård", nc="Ingår inte", d15=", upp till 15 dagar", d30="Upp till 30 dagar"),
 "dk": dict(limit="Årligt maksimum pr. person", unl="Ubegrænset", room="Hospitalsstue", semi="Delt stue", priv="Enestue (standard)",
            scan="MR, CT og PET", full="Fuldt ud", op="Ambulant, årligt maksimum (tilvalg)", unl_sub="Ubegrænset, med maksimum pr. ydelse",
            mat="Graviditet (tilvalg)", na="Ikke muligt", perpreg=" pr. graviditet", dent="Tandpleje, årligt maksimum (tilvalg)",
            then=", derefter ", y3=" fra år 3", psy="Psykiatrisk indlæggelse", nc="Ikke dækket", d15=", op til 15 dage", d30="Op til 30 dage"),
 "il": dict(limit="תקרה שנתית לאדם", unl="ללא הגבלה", room="חדר בבית החולים", semi="חדר משותף", priv="חדר פרטי רגיל",
            scan="MRI‏, CT ו־PET", full="במלואו", op="אמבולטורי, תקרה שנתית (תוספת)", unl_sub="ללא הגבלה, עם תקרות לכל כיסוי",
            mat="לידה (תוספת)", na="לא זמין", perpreg=" להריון", dent="שיניים, תקרה שנתית (תוספת)",
            then=", ואחר כך ", y3=" מהשנה השלישית", psy="אשפוז פסיכיאטרי", nc="לא מכוסה", d15=", עד 15 ימים", d30="עד 30 ימים"),
 "zh": dict(limit="每人年度限额", unl="无上限", room="病房", semi="半私人病房", priv="标准私人病房",
            scan="核磁共振、CT 与 PET", full="全额", op="门诊年度限额（可选）", unl_sub="无上限，各项有分项限额",
            mat="生育（可选）", na="不适用", perpreg="／每次妊娠", dent="牙科年度限额（可选）",
            then="，之后 ", y3="（第 3 年起）", psy="精神科住院", nc="不承保", d15="，最长 15 天", d30="最长 30 天"),
}


def page(lang, c):
    tbl = table(lang, rows(lang, T[lang]))
    c["sections"][0] = (c["sections"][0][0], c["sections"][0][1].replace("[TABLE]", tbl))
    return c


APRIL = {}

APRIL["en"] = page("en", {
    "title": "APRIL International MyHealth International | Adler & Rochefort",
    "desc": "APRIL International MyHealth International for expats: Explore, Essential, Extensive and Elite, worldwide with or without the US, deductibles up to €5,000. Quote from an appointed broker.",
    "eyebrow": "International health insurance · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International health insurance for expats",
    "lead": "MyHealth International is the international health plan of APRIL International, built for people who live abroad for more than twelve months. We are an EU-regulated broker appointed by APRIL International: we configure the plan for where you actually live, handle the medical application and stay with you at claim time. Four details are enough to start.",
    "facts": [
        "Four plans: Explore, Essential, Extensive and Elite, each with hospital treatment, cancer treatment and medical evacuation and repatriation included.",
        "Annual limit per person: €/US$500,000 on Explore, €/US$1,500,000 on Essential, unlimited on Extensive and Elite.",
        "Area of cover: worldwide excluding the United States, or worldwide including the United States.",
        "For people living outside their country of nationality. Age at entry: 10 to 74 in most countries; 16 to 60 if you live in Brazil, Chile, China, Costa Rica, Hong Kong, Japan, Mexico, Singapore, Taiwan, Thailand, the UAE, the UK or the US.",
        "Deductible: none, or €/US$500, 1,000, 2,500 or 5,000; out-patient co-payment of 0%, 10%, 20% or 30%.",
        "Health cover insured by Groupama Gan Vie; assistance and personal liability by Chubb European Group SE. No fee to you.",
    ],
    "sections": [
        ("The four MyHealth International plans",
         "<p>You start with hospital cover and choose the level that matches healthcare costs where you live. Out-patient care, dental and optical, and maternity are added only if you want them.</p>[TABLE]"
         "<p>On Extensive and Elite the annual limit is capped at €/US$2,000,000 and €/US$4,000,000 respectively for treatment in China, Hong Kong, Japan, Singapore and the United States. Cancer treatment, chronic conditions and medical evacuation are covered on every plan; rehabilitation after a hospital stay runs from 20 days (Explore, Essential) to 30 days (Extensive) and 60 days (Elite). Full limits are in APRIL International&rsquo;s table of benefits, which we send with every proposal.</p>"),
        ("How the plan is built",
         "<ul><li><strong>Hospital only, or hospital and out-patient.</strong> Out-patient adds GP and specialist consultations, pharmacy, tests, physiotherapy and preventive care.</li>"
         "<li><strong>Options:</strong> dental and optical; maternity on Essential, Extensive and Elite.</li>"
         "<li><strong>Area of cover:</strong> worldwide including the United States, or worldwide excluding it. Without the US, emergencies there are still covered during temporary stays of up to 60 consecutive days. Accidents and emergencies outside your area of cover are covered for stays of up to 60 days.</li>"
         "<li><strong>Deductible or co-payment:</strong> an annual deductible of €/US$500 to 5,000, or a co-payment of 10%, 20% or 30% on out-patient care, lowers the premium.</li>"
         "<li><strong>Extras:</strong> comprehensive repatriation assistance with personal liability in private life, a crisis assistance programme and travel incident cover.</li>"
         "<li><strong>French nationals</strong> can take the plan as a top-up to the Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE) instead of from the first euro.</li></ul>"
         "<p>Premiums are payable in euro or US dollars: annually, half-yearly, quarterly or, in euro by SEPA direct debit, monthly.</p>"),
        ("Medical underwriting and waiting periods",
         "<p>You complete a health questionnaire, signed no more than three months before the start date. APRIL International may accept you on standard terms, accept you with specific conditions, or decline. Conditions excluded when you apply stay excluded, so declaring everything is what protects a future claim.</p>"
         "<ul><li>3 months for routine dental care.</li><li>6 months for major dental care and optical.</li><li>12 months for maternity, genetic testing and preventive cancer surgery.</li><li>24 months for medically assisted reproduction.</li></ul>"
         "<p>Except for maternity, waiting periods can be waived if you held equivalent cover that ended less than a month before. Planned treatment needs prior approval; without it, a 50% reduction applies even when the treatment is later accepted as necessary.</p>"),
        ("Using the plan day to day",
         "<ul><li><strong>Direct billing</strong> for hospital stays, with no upfront payment.</li>"
         "<li><strong>Easy Claim app</strong> for claims, hospital pre-approval and messages to your advisers; reimbursements by instant transfer in the SEPA area.</li>"
         "<li><strong>Easy Pay Card</strong>, a digital payment card issued on request for costly out-patient care such as scans, pharmacy or optical.</li>"
         "<li><strong>Telehealth with Teladoc Health</strong>, 24/7, free and unlimited, and a second medical opinion service.</li>"
         "<li><strong>More than 2 million healthcare professionals</strong> worldwide; the hospital network depends on your plan and country.</li></ul>"),
        ("APRIL International, Allianz Care or Cigna Global",
         "<p>We are appointed by all three and quote them on the same assumptions. APRIL International often fits when you want to choose a precise level of hospital cover and a deductible of up to €/US$5,000, when you are French and contribute to the CFE, or when you want direct billing and a payment card for costly out-patient care. Its entry ages are stricter in some countries, so we check them first. For US citizens we configure <a href='{HUB}cigna-global/'>Cigna Global</a>; for a Europe-only area of cover, <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Who insures APRIL International MyHealth International?", "The health cover is insured by Groupama Gan Vie, and the assistance and personal liability benefits by Chubb European Group SE. APRIL International Care France designs and manages the plan."),
        ("Are pre-existing conditions covered?", "Not automatically. You complete a health questionnaire and APRIL International sets your terms: standard acceptance, specific conditions or a decline. Conditions excluded when you apply stay excluded."),
        ("Is the United States covered?", "Only if you choose worldwide cover including the United States. With worldwide cover excluding the US, emergencies there are covered during temporary stays of up to 60 consecutive days."),
        ("Is maternity covered?", "As an option on Essential, Extensive and Elite, after a 12-month waiting period: €/US$4,000, 8,000 or 12,000 per pregnancy, with higher limits if there are complications at birth."),
        ("Up to what age can I join?", "Up to 74 in most countries, and up to 60 if you live in Brazil, Chile, China, Costa Rica, Hong Kong, Japan, Mexico, Singapore, Taiwan, Thailand, the UAE, the UK or the US. Children can join below the minimum age on a parent&rsquo;s policy."),
    ],
    "form_h2": "Request your APRIL International quote",
    "form_lead": "Four details are enough to start. We reply in writing within one working day, with APRIL International configured for you and, where it helps, Allianz Care and Cigna Global on the same terms.",
    "related": [("{HUB}", "International health insurance for expats"), ("{HUB}allianz-care/", "Allianz Care international health insurance"), ("{HUB}cigna-global/", "Cigna Global international health insurance")],
})

APRIL["pt"] = page("pt", {
    "title": "APRIL International: Seguro de Saúde Internacional | Adler & Rochefort",
    "desc": "APRIL International MyHealth International para expatriados: Explore, Essential, Extensive e Elite, mundo com ou sem EUA, franquias até 5.000 €. Proposta através de um agente parceiro.",
    "eyebrow": "Seguro de saúde internacional · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: seguro de saúde internacional para expatriados",
    "lead": "O MyHealth International é o plano de saúde internacional da APRIL International, pensado para quem vive no estrangeiro mais de doze meses. Somos agente de seguros registado na ASF e parceiro da APRIL International: configuramos o plano para o país onde vive, acompanhamos a proposta clínica e estamos consigo quando houver um sinistro. Quatro dados chegam para começar.",
    "facts": [
        "Quatro planos: Explore, Essential, Extensive e Elite, todos com internamento, tratamento oncológico e evacuação e repatriação médica incluídos.",
        "Limite anual por pessoa: 500.000 €/US$ no Explore, 1.500.000 €/US$ no Essential, ilimitado no Extensive e no Elite.",
        "Área de cobertura: mundo exceto Estados Unidos, ou mundo incluindo Estados Unidos.",
        "Para quem vive fora do país da sua nacionalidade. Idade de adesão: dos 10 aos 74 anos na maioria dos países; dos 16 aos 60 se viver no Brasil, Chile, China, Costa Rica, Hong Kong, Japão, México, Singapura, Taiwan, Tailândia, Emirados Árabes Unidos, Reino Unido ou EUA.",
        "Franquia: nenhuma, ou 500, 1.000, 2.500 ou 5.000 €/US$; copagamento em ambulatório de 0%, 10%, 20% ou 30%.",
        "Saúde seguradora pela Groupama Gan Vie; assistência e responsabilidade civil pela Chubb European Group SE. Sem custos para si.",
    ],
    "sections": [
        ("Os quatro planos MyHealth International",
         "<p>Começa pela cobertura hospitalar e escolhe o nível adequado aos custos de saúde do país onde vive. Ambulatório, estomatologia e oftalmologia e maternidade acrescentam-se só se os quiser.</p>[TABLE]"
         "<p>No Extensive e no Elite o limite anual tem um teto de 2.000.000 e 4.000.000 €/US$, respetivamente, para tratamentos na China, Hong Kong, Japão, Singapura e Estados Unidos. Oncologia, doenças crónicas e evacuação médica estão cobertas em todos os planos; a reabilitação após internamento vai de 20 dias (Explore, Essential) a 30 dias (Extensive) e 60 dias (Elite). Os limites completos constam da tabela de benefícios da APRIL International, que enviamos com cada proposta.</p>"),
        ("Como se constrói o plano",
         "<ul><li><strong>Só hospitalização, ou hospitalização e ambulatório.</strong> O ambulatório acrescenta consultas de clínica geral e especialidade, farmácia, análises, fisioterapia e prevenção.</li>"
         "<li><strong>Opções:</strong> estomatologia e oftalmologia; maternidade no Essential, Extensive e Elite.</li>"
         "<li><strong>Área de cobertura:</strong> mundo incluindo ou excluindo os Estados Unidos. Sem os EUA, as urgências lá continuam cobertas em estadias temporárias até 60 dias seguidos. Acidentes e urgências fora da área de cobertura estão cobertos em estadias até 60 dias.</li>"
         "<li><strong>Franquia ou copagamento:</strong> uma franquia anual de 500 a 5.000 €/US$, ou um copagamento de 10%, 20% ou 30% no ambulatório, baixa o prémio.</li>"
         "<li><strong>Extras:</strong> assistência completa em repatriação com responsabilidade civil na vida privada, programa de assistência em situações de crise e cobertura de incidentes de viagem.</li>"
         "<li><strong>Cidadãos franceses</strong> podem contratar o plano como complemento da Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE), em vez de ao primeiro euro.</li></ul>"
         "<p>O prémio é pago em euros ou em dólares: anual, semestral, trimestral ou, em euros por débito direto SEPA, mensal.</p>"),
        ("Análise clínica e períodos de carência",
         "<p>Preenche um questionário de saúde, assinado no máximo três meses antes do início. A APRIL International pode aceitar nas condições normais, aceitar com condições específicas ou recusar. As doenças excluídas na adesão continuam excluídas, por isso declarar tudo é o que protege um sinistro futuro.</p>"
         "<ul><li>3 meses para estomatologia corrente.</li><li>6 meses para estomatologia maior e oftalmologia.</li><li>12 meses para maternidade, testes genéticos e cirurgia oncológica preventiva.</li><li>24 meses para procriação medicamente assistida.</li></ul>"
         "<p>Exceto na maternidade, as carências podem ser dispensadas se tinha uma cobertura equivalente terminada há menos de um mês. Os tratamentos programados precisam de autorização prévia; sem ela aplica-se uma redução de 50%, mesmo que o tratamento venha a ser aceite como necessário.</p>"),
        ("No dia a dia",
         "<ul><li><strong>Pagamento direto</strong> nos internamentos, sem adiantar dinheiro.</li>"
         "<li><strong>App Easy Claim</strong> para reembolsos, pré-autorizações e mensagens aos seus gestores; reembolsos por transferência imediata na zona SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, um cartão de pagamento digital emitido a pedido para despesas de ambulatório elevadas, como exames, farmácia ou óculos.</li>"
         "<li><strong>Teleconsulta com a Teladoc Health</strong>, 24 horas por dia, gratuita e ilimitada, e segunda opinião médica.</li>"
         "<li><strong>Mais de 2 milhões de profissionais de saúde</strong> no mundo; a rede hospitalar depende do plano e do país.</li></ul>"),
        ("APRIL International, Allianz Care ou Cigna Global",
         "<p>Somos parceiros das três e cotamos nas mesmas condições. A APRIL International encaixa muitas vezes quando quer escolher um nível preciso de cobertura hospitalar e uma franquia até 5.000 €/US$, quando é francês e desconta para a CFE, ou quando quer pagamento direto e um cartão para despesas de ambulatório elevadas. As idades de adesão são mais restritas em alguns países, por isso verificamo-las primeiro. Para cidadãos norte-americanos configuramos a <a href='{HUB}cigna-global/'>Cigna Global</a>; para uma área só Europa, a <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Quem é a seguradora do MyHealth International?", "A cobertura de saúde é segurada pela Groupama Gan Vie e a assistência e a responsabilidade civil pela Chubb European Group SE. A APRIL International Care France concebe e gere o plano."),
        ("As doenças pré-existentes estão cobertas?", "Não automaticamente. Preenche um questionário de saúde e a APRIL International fixa as condições: aceitação normal, condições específicas ou recusa. As doenças excluídas na adesão continuam excluídas."),
        ("Os Estados Unidos estão cobertos?", "Só se escolher a área mundo incluindo Estados Unidos. Com a área mundo exceto EUA, as urgências lá estão cobertas em estadias temporárias até 60 dias seguidos."),
        ("A maternidade está coberta?", "Como opção no Essential, Extensive e Elite, após 12 meses de carência: 4.000, 8.000 ou 12.000 €/US$ por gravidez, com limites mais altos se houver complicações no parto."),
        ("Até que idade posso aderir?", "Até aos 74 anos na maioria dos países e até aos 60 se viver no Brasil, Chile, China, Costa Rica, Hong Kong, Japão, México, Singapura, Taiwan, Tailândia, Emirados Árabes Unidos, Reino Unido ou EUA. Os filhos podem aderir abaixo da idade mínima na apólice de um dos pais."),
    ],
    "form_h2": "Peça a sua proposta APRIL International",
    "form_lead": "Quatro dados chegam para começar. Respondemos por escrito num dia útil, com a APRIL International configurada para si e, quando ajudar, a Allianz Care e a Cigna Global nas mesmas condições.",
    "related": [("{HUB}", "Seguro de saúde internacional para expatriados"), ("{HUB}allianz-care/", "Allianz Care: seguro de saúde internacional"), ("{HUB}cigna-global/", "Cigna Global: seguro de saúde internacional")],
})

APRIL["de"] = page("de", {
    "title": "APRIL International: Internationale Krankenversicherung | Adler & Rochefort",
    "desc": "APRIL International MyHealth International für Expats: Explore, Essential, Extensive und Elite, weltweit mit oder ohne USA, Selbstbehalt bis 5.000 €. Angebot über einen Partnermakler.",
    "eyebrow": "Internationale Krankenversicherung · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: internationale Krankenversicherung für Expats",
    "lead": "MyHealth International ist der internationale Gesundheitsplan von APRIL International, gedacht für Menschen, die länger als zwölf Monate im Ausland leben. Wir sind ein EU-regulierter Makler und Partner von APRIL International: Wir stellen den Plan für Ihr tatsächliches Wohnsitzland zusammen, begleiten den Gesundheitsantrag und sind im Leistungsfall für Sie da. Vier Angaben genügen.",
    "facts": [
        "Vier Pläne: Explore, Essential, Extensive und Elite, jeweils mit stationärer Behandlung, Krebsbehandlung sowie medizinischer Evakuierung und Rückführung.",
        "Jahreshöchstsumme pro Person: 500.000 €/US$ (Explore), 1.500.000 €/US$ (Essential), unbegrenzt in Extensive und Elite.",
        "Geltungsbereich: weltweit ohne USA oder weltweit mit USA.",
        "Für Menschen, die außerhalb ihres Staatsangehörigkeitslandes leben. Eintrittsalter: 10 bis 74 Jahre in den meisten Ländern; 16 bis 60 bei Wohnsitz in Brasilien, Chile, China, Costa Rica, Hongkong, Japan, Mexiko, Singapur, Taiwan, Thailand, den VAE, dem Vereinigten Königreich oder den USA.",
        "Selbstbehalt: keiner oder 500, 1.000, 2.500 bzw. 5.000 €/US$; Selbstbeteiligung ambulant 0 %, 10 %, 20 % oder 30 %.",
        "Krankenversicherer: Groupama Gan Vie; Assistance und Privathaftpflicht: Chubb European Group SE. Für Sie kostenlos.",
    ],
    "sections": [
        ("Die vier MyHealth-International-Pläne",
         "<p>Sie beginnen mit der stationären Deckung und wählen das Niveau, das zu den Gesundheitskosten in Ihrem Wohnsitzland passt. Ambulante Leistungen, Zahn und Sehhilfen sowie Mutterschaft kommen nur hinzu, wenn Sie sie möchten.</p>[TABLE]"
         "<p>In Extensive und Elite ist die Jahreshöchstsumme für Behandlungen in China, Hongkong, Japan, Singapur und den USA auf 2.000.000 bzw. 4.000.000 €/US$ begrenzt. Krebsbehandlung, chronische Erkrankungen und medizinische Evakuierung sind in jedem Plan gedeckt; die Reha nach einem Krankenhausaufenthalt reicht von 20 Tagen (Explore, Essential) über 30 Tage (Extensive) bis 60 Tage (Elite). Die vollständigen Grenzen stehen in der Leistungstabelle von APRIL International, die wir mit jedem Angebot senden.</p>"),
        ("So wird der Plan zusammengestellt",
         "<ul><li><strong>Nur stationär oder stationär und ambulant.</strong> Ambulant umfasst Haus- und Facharztbesuche, Arzneimittel, Untersuchungen, Physiotherapie und Vorsorge.</li>"
         "<li><strong>Optionen:</strong> Zahn und Sehhilfen; Mutterschaft in Essential, Extensive und Elite.</li>"
         "<li><strong>Geltungsbereich:</strong> weltweit mit oder ohne USA. Ohne USA sind Notfälle dort bei vorübergehenden Aufenthalten bis zu 60 Tagen am Stück gedeckt. Unfälle und Notfälle außerhalb des Geltungsbereichs sind bei Aufenthalten bis zu 60 Tagen gedeckt.</li>"
         "<li><strong>Selbstbehalt oder Selbstbeteiligung:</strong> ein jährlicher Selbstbehalt von 500 bis 5.000 €/US$ oder eine Selbstbeteiligung von 10, 20 oder 30 % ambulant senkt die Prämie.</li>"
         "<li><strong>Zusätze:</strong> umfassende Rückführungs-Assistance mit Privathaftpflicht, ein Krisen-Assistance-Programm und Reiseschutz bei Zwischenfällen.</li>"
         "<li><strong>Französische Staatsangehörige</strong> können den Plan als Ergänzung zur Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE) abschließen.</li></ul>"
         "<p>Die Prämie wird in Euro oder US-Dollar gezahlt: jährlich, halbjährlich, vierteljährlich oder, in Euro per SEPA-Lastschrift, monatlich.</p>"),
        ("Gesundheitsprüfung und Wartezeiten",
         "<p>Sie füllen einen Gesundheitsfragebogen aus, unterschrieben höchstens drei Monate vor Beginn. APRIL International kann zu Standardbedingungen annehmen, mit besonderen Bedingungen annehmen oder ablehnen. Bei Antragstellung ausgeschlossene Vorerkrankungen bleiben ausgeschlossen; vollständige Angaben schützen den späteren Leistungsfall.</p>"
         "<ul><li>3 Monate für Zahnbehandlung.</li><li>6 Monate für Zahnersatz und Sehhilfen.</li><li>12 Monate für Mutterschaft, Gentests und vorbeugende Krebschirurgie.</li><li>24 Monate für künstliche Befruchtung.</li></ul>"
         "<p>Außer bei Mutterschaft können Wartezeiten entfallen, wenn eine gleichwertige Vorversicherung vor weniger als einem Monat endete. Geplante Behandlungen brauchen eine Vorabgenehmigung; ohne sie gilt eine Kürzung um 50 %, auch wenn die Behandlung später als notwendig anerkannt wird.</p>"),
        ("Im Alltag",
         "<ul><li><strong>Direktabrechnung</strong> bei Krankenhausaufenthalten, ohne Vorauszahlung.</li>"
         "<li><strong>App Easy Claim</strong> für Erstattungen, Vorabgenehmigungen und Nachrichten an Ihre Betreuer; Erstattung per Echtzeitüberweisung im SEPA-Raum.</li>"
         "<li><strong>Easy Pay Card</strong>, eine digitale Zahlungskarte auf Anfrage für teure ambulante Behandlungen wie Bildgebung, Arzneimittel oder Brillen.</li>"
         "<li><strong>Telemedizin mit Teladoc Health</strong>, rund um die Uhr, kostenlos und unbegrenzt, dazu eine ärztliche Zweitmeinung.</li>"
         "<li><strong>Über 2 Millionen Gesundheitsdienstleister</strong> weltweit; das Krankenhausnetz hängt von Plan und Land ab.</li></ul>"),
        ("APRIL International, Allianz Care oder Cigna Global",
         "<p>Wir sind Partner aller drei und holen Angebote zu denselben Annahmen ein. APRIL International passt oft, wenn Sie ein genaues stationäres Niveau und einen Selbstbehalt bis 5.000 €/US$ wählen möchten, wenn Sie Franzose sind und in die CFE einzahlen, oder wenn Sie Direktabrechnung und eine Zahlungskarte für teure ambulante Behandlungen möchten. Die Eintrittsalter sind in einigen Ländern enger, deshalb prüfen wir sie zuerst. Für US-Bürger stellen wir <a href='{HUB}cigna-global/'>Cigna Global</a> zusammen; für einen reinen Europa-Geltungsbereich <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Wer ist Versicherer von MyHealth International?", "Die Krankenversicherung trägt Groupama Gan Vie, Assistance und Privathaftpflicht die Chubb European Group SE. APRIL International Care France konzipiert und verwaltet den Plan."),
        ("Sind Vorerkrankungen versichert?", "Nicht automatisch. Sie füllen einen Gesundheitsfragebogen aus, und APRIL International legt die Bedingungen fest: Annahme zu Standardbedingungen, besondere Bedingungen oder Ablehnung. Bei Antragstellung ausgeschlossene Erkrankungen bleiben ausgeschlossen."),
        ("Sind die USA versichert?", "Nur mit dem Geltungsbereich weltweit mit USA. Ohne USA sind Notfälle dort bei vorübergehenden Aufenthalten bis zu 60 Tagen am Stück gedeckt."),
        ("Ist Mutterschaft versichert?", "Als Option in Essential, Extensive und Elite, nach 12 Monaten Wartezeit: 4.000, 8.000 oder 12.000 €/US$ pro Schwangerschaft, mit höheren Grenzen bei Geburtskomplikationen."),
        ("Bis zu welchem Alter kann ich beitreten?", "Bis 74 in den meisten Ländern und bis 60 bei Wohnsitz in Brasilien, Chile, China, Costa Rica, Hongkong, Japan, Mexiko, Singapur, Taiwan, Thailand, den VAE, dem Vereinigten Königreich oder den USA. Kinder können unter dem Mindestalter in der Police eines Elternteils mitversichert werden."),
    ],
    "form_h2": "APRIL-International-Angebot anfragen",
    "form_lead": "Vier Angaben genügen. Wir antworten innerhalb eines Werktages schriftlich, mit APRIL International für Sie zusammengestellt und, wo es hilft, Allianz Care und Cigna Global zu gleichen Bedingungen.",
    "related": [("{HUB}", "Internationale Krankenversicherung für Expats"), ("{HUB}allianz-care/", "Allianz Care: internationale Krankenversicherung"), ("{HUB}cigna-global/", "Cigna Global: internationale Krankenversicherung")],
})

APRIL["es"] = page("es", {
    "title": "APRIL International: Seguro Médico Internacional | Adler & Rochefort",
    "desc": "APRIL International MyHealth International para expatriados: Explore, Essential, Extensive y Elite, mundo con o sin EE. UU., franquicias hasta 5.000 €. Propuesta a través de un mediador socio.",
    "eyebrow": "Seguro médico internacional · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: seguro médico internacional para expatriados",
    "lead": "MyHealth International es el plan de salud internacional de APRIL International, pensado para quien vive en el extranjero más de doce meses. Somos un mediador regulado en la UE y socio de APRIL International: configuramos el plan para el país donde vive, le acompañamos en la solicitud médica y estamos a su lado en cada siniestro. Con cuatro datos empezamos.",
    "facts": [
        "Cuatro planes: Explore, Essential, Extensive y Elite, todos con hospitalización, tratamiento oncológico y evacuación y repatriación médica incluidos.",
        "Límite anual por persona: 500.000 €/US$ en Explore, 1.500.000 €/US$ en Essential, ilimitado en Extensive y Elite.",
        "Zona de cobertura: mundo sin Estados Unidos, o mundo con Estados Unidos.",
        "Para quien vive fuera del país de su nacionalidad. Edad de entrada: de 10 a 74 años en la mayoría de los países; de 16 a 60 si vive en Brasil, Chile, China, Costa Rica, Hong Kong, Japón, México, Singapur, Taiwán, Tailandia, Emiratos Árabes Unidos, Reino Unido o EE. UU.",
        "Franquicia: ninguna, o 500, 1.000, 2.500 o 5.000 €/US$; copago ambulatorio del 0 %, 10 %, 20 % o 30 %.",
        "Salud asegurada por Groupama Gan Vie; asistencia y responsabilidad civil por Chubb European Group SE. Sin coste para usted.",
    ],
    "sections": [
        ("Los cuatro planes MyHealth International",
         "<p>Empieza por la cobertura hospitalaria y elige el nivel que corresponde a los costes sanitarios del país donde vive. El ambulatorio, el dental y la óptica y la maternidad se añaden solo si los quiere.</p>[TABLE]"
         "<p>En Extensive y Elite el límite anual tiene un tope de 2.000.000 y 4.000.000 €/US$, respectivamente, para tratamientos en China, Hong Kong, Japón, Singapur y Estados Unidos. El tratamiento oncológico, las enfermedades crónicas y la evacuación médica están cubiertos en todos los planes; la rehabilitación tras una hospitalización va de 20 días (Explore, Essential) a 30 días (Extensive) y 60 días (Elite). Los límites completos figuran en el cuadro de prestaciones de APRIL International, que enviamos con cada propuesta.</p>"),
        ("Cómo se construye el plan",
         "<ul><li><strong>Solo hospitalización, o hospitalización y ambulatorio.</strong> El ambulatorio añade consultas de medicina general y especialistas, farmacia, análisis, fisioterapia y prevención.</li>"
         "<li><strong>Opciones:</strong> dental y óptica; maternidad en Essential, Extensive y Elite.</li>"
         "<li><strong>Zona de cobertura:</strong> mundo con o sin Estados Unidos. Sin EE. UU., las urgencias allí siguen cubiertas en estancias temporales de hasta 60 días seguidos. Los accidentes y urgencias fuera de la zona de cobertura están cubiertos en estancias de hasta 60 días.</li>"
         "<li><strong>Franquicia o copago:</strong> una franquicia anual de 500 a 5.000 €/US$, o un copago del 10 %, 20 % o 30 % en ambulatorio, reduce la prima.</li>"
         "<li><strong>Extras:</strong> asistencia completa de repatriación con responsabilidad civil en la vida privada, un programa de asistencia en situaciones de crisis y cobertura de incidentes de viaje.</li>"
         "<li><strong>Los ciudadanos franceses</strong> pueden contratar el plan como complemento de la Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>La prima se paga en euros o en dólares: anual, semestral, trimestral o, en euros por domiciliación SEPA, mensual.</p>"),
        ("Valoración médica y periodos de carencia",
         "<p>Rellena un cuestionario de salud, firmado como máximo tres meses antes del inicio. APRIL International puede aceptarle en condiciones normales, aceptarle con condiciones específicas o rechazar la solicitud. Las enfermedades excluidas al contratar siguen excluidas; declararlo todo es lo que protege un siniestro futuro.</p>"
         "<ul><li>3 meses para el dental corriente.</li><li>6 meses para el dental mayor y la óptica.</li><li>12 meses para maternidad, pruebas genéticas y cirugía oncológica preventiva.</li><li>24 meses para reproducción asistida.</li></ul>"
         "<p>Salvo en maternidad, las carencias pueden suprimirse si tenía una cobertura equivalente que terminó hace menos de un mes. Los tratamientos programados necesitan autorización previa; sin ella se aplica una reducción del 50 %, aunque el tratamiento se acepte después como necesario.</p>"),
        ("En el día a día",
         "<ul><li><strong>Pago directo</strong> en las hospitalizaciones, sin adelantar dinero.</li>"
         "<li><strong>App Easy Claim</strong> para reembolsos, autorizaciones previas y mensajes a sus gestores; reembolsos por transferencia inmediata en la zona SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, una tarjeta de pago digital emitida a petición para gastos ambulatorios elevados, como pruebas de imagen, farmacia u óptica.</li>"
         "<li><strong>Telemedicina con Teladoc Health</strong>, 24 horas, gratuita e ilimitada, y segunda opinión médica.</li>"
         "<li><strong>Más de 2 millones de profesionales sanitarios</strong> en el mundo; la red hospitalaria depende del plan y del país.</li></ul>"),
        ("APRIL International, Allianz Care o Cigna Global",
         "<p>Somos socios de las tres y cotizamos con los mismos supuestos. APRIL International suele encajar cuando quiere elegir un nivel preciso de cobertura hospitalaria y una franquicia de hasta 5.000 €/US$, cuando es francés y cotiza a la CFE, o cuando quiere pago directo y una tarjeta para gastos ambulatorios elevados. Sus edades de entrada son más estrictas en algunos países, por eso las comprobamos primero. Para ciudadanos estadounidenses configuramos <a href='{HUB}cigna-global/'>Cigna Global</a>; para una zona solo Europa, <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("¿Quién es la aseguradora de MyHealth International?", "La cobertura de salud la asegura Groupama Gan Vie, y la asistencia y la responsabilidad civil, Chubb European Group SE. APRIL International Care France diseña y gestiona el plan."),
        ("¿Cubre enfermedades preexistentes?", "No de forma automática. Rellena un cuestionario de salud y APRIL International fija las condiciones: aceptación normal, condiciones específicas o rechazo. Las enfermedades excluidas al contratar siguen excluidas."),
        ("¿Cubre Estados Unidos?", "Solo si elige la zona mundo con Estados Unidos. Con la zona mundo sin EE. UU., las urgencias allí están cubiertas en estancias temporales de hasta 60 días seguidos."),
        ("¿Cubre la maternidad?", "Como opción en Essential, Extensive y Elite, tras 12 meses de carencia: 4.000, 8.000 o 12.000 €/US$ por embarazo, con límites más altos si hay complicaciones en el parto."),
        ("¿Hasta qué edad puedo contratar?", "Hasta los 74 años en la mayoría de los países y hasta los 60 si vive en Brasil, Chile, China, Costa Rica, Hong Kong, Japón, México, Singapur, Taiwán, Tailandia, Emiratos Árabes Unidos, Reino Unido o EE. UU. Los hijos pueden entrar por debajo de la edad mínima en la póliza de uno de los padres."),
    ],
    "form_h2": "Solicite su propuesta de APRIL International",
    "form_lead": "Con cuatro datos empezamos. Le respondemos por escrito en un día laborable, con APRIL International configurado para usted y, cuando ayude, Allianz Care y Cigna Global en las mismas condiciones.",
    "related": [("{HUB}", "Seguro médico internacional para expatriados"), ("{HUB}allianz-care/", "Allianz Care: seguro médico internacional"), ("{HUB}cigna-global/", "Cigna Global: seguro médico internacional")],
})

APRIL["nl"] = page("nl", {
    "title": "APRIL International: Internationale Zorgverzekering | Adler & Rochefort",
    "desc": "APRIL International MyHealth International voor expats: Explore, Essential, Extensive en Elite, wereldwijd met of zonder VS, eigen risico tot € 5.000. Offerte via een partner-makelaar.",
    "eyebrow": "Internationale zorgverzekering · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: internationale zorgverzekering voor expats",
    "lead": "MyHealth International is het internationale zorgplan van APRIL International, bedoeld voor wie langer dan twaalf maanden in het buitenland woont. Wij zijn een EU-gereguleerde makelaar en partner van APRIL International: wij stellen het plan samen voor het land waar u werkelijk woont, begeleiden de medische aanvraag en staan naast u bij een claim. Vier gegevens volstaan.",
    "facts": [
        "Vier plannen: Explore, Essential, Extensive en Elite, elk met ziekenhuisopname, kankerbehandeling en medische evacuatie en repatriëring inbegrepen.",
        "Jaarlimiet per persoon: €/US$ 500.000 (Explore), €/US$ 1.500.000 (Essential), onbeperkt in Extensive en Elite.",
        "Dekkingsgebied: wereldwijd zonder de Verenigde Staten, of wereldwijd met de Verenigde Staten.",
        "Voor wie buiten het land van zijn nationaliteit woont. Instapleeftijd: 10 tot 74 jaar in de meeste landen; 16 tot 60 als u woont in Brazilië, Chili, China, Costa Rica, Hongkong, Japan, Mexico, Singapore, Taiwan, Thailand, de VAE, het Verenigd Koninkrijk of de VS.",
        "Eigen risico: geen, of €/US$ 500, 1.000, 2.500 of 5.000; eigen bijdrage poliklinisch van 0%, 10%, 20% of 30%.",
        "Zorg verzekerd door Groupama Gan Vie; assistance en aansprakelijkheid door Chubb European Group SE. Voor u kosteloos.",
    ],
    "sections": [
        ("De vier MyHealth International-plannen",
         "<p>U begint met ziekenhuisdekking en kiest het niveau dat past bij de zorgkosten in uw woonland. Poliklinische zorg, tandarts en optiek en zwangerschap voegt u alleen toe als u ze wilt.</p>[TABLE]"
         "<p>In Extensive en Elite is de jaarlimiet voor behandeling in China, Hongkong, Japan, Singapore en de Verenigde Staten begrensd op respectievelijk €/US$ 2.000.000 en 4.000.000. Kankerbehandeling, chronische aandoeningen en medische evacuatie zijn in elk plan gedekt; revalidatie na opname loopt van 20 dagen (Explore, Essential) tot 30 dagen (Extensive) en 60 dagen (Elite). De volledige limieten staan in de vergoedingentabel van APRIL International, die wij bij elk voorstel meesturen.</p>"),
        ("Zo wordt het plan opgebouwd",
         "<ul><li><strong>Alleen ziekenhuis, of ziekenhuis en poliklinisch.</strong> Poliklinisch voegt huisarts en specialist, apotheek, onderzoek, fysiotherapie en preventie toe.</li>"
         "<li><strong>Opties:</strong> tandarts en optiek; zwangerschap in Essential, Extensive en Elite.</li>"
         "<li><strong>Dekkingsgebied:</strong> wereldwijd met of zonder de VS. Zonder de VS blijven spoedgevallen daar gedekt bij tijdelijk verblijf tot 60 aaneengesloten dagen. Ongevallen en spoed buiten uw dekkingsgebied zijn gedekt bij verblijf tot 60 dagen.</li>"
         "<li><strong>Eigen risico of eigen bijdrage:</strong> een jaarlijks eigen risico van €/US$ 500 tot 5.000, of een eigen bijdrage van 10, 20 of 30% poliklinisch, verlaagt de premie.</li>"
         "<li><strong>Extra:</strong> uitgebreide repatriëringsassistance met particuliere aansprakelijkheid, een crisisprogramma en dekking voor reisincidenten.</li>"
         "<li><strong>Franse staatsburgers</strong> kunnen het plan afsluiten als aanvulling op de Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>De premie wordt betaald in euro of dollar: per jaar, halfjaar, kwartaal of, in euro via SEPA-incasso, per maand.</p>"),
        ("Medische acceptatie en wachttijden",
         "<p>U vult een gezondheidsverklaring in, ondertekend uiterlijk drie maanden voor de ingangsdatum. APRIL International kan u op standaardvoorwaarden accepteren, met bijzondere voorwaarden accepteren of afwijzen. Aandoeningen die bij de aanvraag worden uitgesloten, blijven uitgesloten; alles melden beschermt een latere claim.</p>"
         "<ul><li>3 maanden voor gewone tandzorg.</li><li>6 maanden voor grote tandzorg en optiek.</li><li>12 maanden voor zwangerschap, genetisch onderzoek en preventieve kankerchirurgie.</li><li>24 maanden voor vruchtbaarheidsbehandeling.</li></ul>"
         "<p>Behalve bij zwangerschap kunnen wachttijden vervallen als u een gelijkwaardige verzekering had die minder dan een maand eerder eindigde. Geplande behandeling vraagt vooraf toestemming; zonder toestemming geldt een korting van 50%, ook als de behandeling achteraf nodig blijkt.</p>"),
        ("In het dagelijks gebruik",
         "<ul><li><strong>Directe betaling</strong> bij ziekenhuisopname, zonder voorschieten.</li>"
         "<li><strong>App Easy Claim</strong> voor declaraties, voorafgaande toestemming en berichten aan uw adviseurs; vergoeding per directe overboeking binnen SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, een digitale betaalkaart op aanvraag voor dure poliklinische zorg, zoals scans, medicijnen of brillen.</li>"
         "<li><strong>Teleconsult met Teladoc Health</strong>, 24/7, gratis en onbeperkt, plus een second opinion.</li>"
         "<li><strong>Ruim 2 miljoen zorgverleners</strong> wereldwijd; het ziekenhuisnetwerk hangt af van plan en land.</li></ul>"),
        ("APRIL International, Allianz Care of Cigna Global",
         "<p>Wij zijn partner van alle drie en vragen offertes op dezelfde uitgangspunten. APRIL International past vaak als u een precies niveau van ziekenhuisdekking en een eigen risico tot €/US$ 5.000 wilt kiezen, als u Fransman bent en bijdraagt aan de CFE, of als u directe betaling en een betaalkaart voor dure poliklinische zorg wilt. De instapleeftijden zijn in sommige landen strenger; die controleren wij eerst. Voor Amerikaanse staatsburgers stellen wij <a href='{HUB}cigna-global/'>Cigna Global</a> samen; voor alleen Europa <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Wie is de verzekeraar van MyHealth International?", "De zorgdekking is verzekerd bij Groupama Gan Vie, assistance en aansprakelijkheid bij Chubb European Group SE. APRIL International Care France ontwikkelt en beheert het plan."),
        ("Zijn bestaande aandoeningen gedekt?", "Niet automatisch. U vult een gezondheidsverklaring in en APRIL International bepaalt de voorwaarden: standaardacceptatie, bijzondere voorwaarden of afwijzing. Aandoeningen die bij de aanvraag worden uitgesloten, blijven uitgesloten."),
        ("Zijn de Verenigde Staten gedekt?", "Alleen met het gebied wereldwijd inclusief de VS. Zonder de VS zijn spoedgevallen daar gedekt bij tijdelijk verblijf tot 60 aaneengesloten dagen."),
        ("Is zwangerschap gedekt?", "Als optie in Essential, Extensive en Elite, na 12 maanden wachttijd: €/US$ 4.000, 8.000 of 12.000 per zwangerschap, met hogere limieten bij complicaties bij de bevalling."),
        ("Tot welke leeftijd kan ik instappen?", "Tot 74 in de meeste landen en tot 60 als u woont in Brazilië, Chili, China, Costa Rica, Hongkong, Japan, Mexico, Singapore, Taiwan, Thailand, de VAE, het Verenigd Koninkrijk of de VS. Kinderen kunnen onder de minimumleeftijd meeverzekerd worden op de polis van een ouder."),
    ],
    "form_h2": "Vraag uw APRIL International-offerte aan",
    "form_lead": "Vier gegevens volstaan. Wij antwoorden binnen één werkdag schriftelijk, met APRIL International voor u samengesteld en, waar het helpt, Allianz Care en Cigna Global op dezelfde voorwaarden.",
    "related": [("{HUB}", "Internationale zorgverzekering voor expats"), ("{HUB}allianz-care/", "Allianz Care: internationale zorgverzekering"), ("{HUB}cigna-global/", "Cigna Global: internationale zorgverzekering")],
})

APRIL["fr"] = page("fr", {
    "title": "APRIL International : Assurance Santé Internationale | Adler & Rochefort",
    "desc": "APRIL International MyHealth International pour expatriés : Explore, Essential, Extensive et Elite, monde avec ou sans États-Unis, franchises jusqu’à 5 000 €. Devis via un courtier partenaire.",
    "eyebrow": "Assurance santé internationale · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International : assurance santé internationale pour expatriés",
    "lead": "MyHealth International est le contrat santé international d’APRIL International, conçu pour les personnes qui vivent à l’étranger plus de douze mois. Nous sommes un courtier réglementé dans l’UE et partenaire d’APRIL International : nous configurons le contrat pour le pays où vous vivez, accompagnons la formalité médicale et restons à vos côtés en cas de sinistre. Quatre informations suffisent.",
    "facts": [
        "Quatre formules : Explore, Essential, Extensive et Elite, toutes avec hospitalisation, traitements du cancer et évacuation et rapatriement médical inclus.",
        "Plafond annuel par personne : 500 000 €/US$ (Explore), 1 500 000 €/US$ (Essential), illimité en Extensive et Elite.",
        "Zone de couverture : monde hors États-Unis, ou monde y compris États-Unis.",
        "Pour les personnes vivant hors de leur pays de nationalité. Âge d’adhésion : de 10 à 74 ans dans la plupart des pays ; de 16 à 60 ans si vous vivez au Brésil, au Chili, en Chine, au Costa Rica, à Hong Kong, au Japon, au Mexique, à Singapour, à Taïwan, en Thaïlande, aux Émirats arabes unis, au Royaume-Uni ou aux États-Unis.",
        "Franchise : aucune, ou 500, 1 000, 2 500 ou 5 000 €/US$ ; ticket modérateur sur les soins courants de 0 %, 10 %, 20 % ou 30 %.",
        "Santé assurée par Groupama Gan Vie ; assistance et responsabilité civile par Chubb European Group SE. Sans frais pour vous.",
    ],
    "sections": [
        ("Les quatre formules MyHealth International",
         "<p>Vous partez de la couverture hospitalière et choisissez le niveau adapté au coût des soins dans votre pays de résidence. Soins courants, dentaire et optique, et maternité s’ajoutent seulement si vous le souhaitez.</p>[TABLE]"
         "<p>En Extensive et Elite, le plafond annuel est limité à 2 000 000 et 4 000 000 €/US$ respectivement pour les soins en Chine, à Hong Kong, au Japon, à Singapour et aux États-Unis. Le cancer, les maladies chroniques et l’évacuation médicale sont couverts dans toutes les formules ; la rééducation après hospitalisation va de 20 jours (Explore, Essential) à 30 jours (Extensive) et 60 jours (Elite). Les plafonds complets figurent dans le tableau de garanties d’APRIL International, que nous joignons à chaque proposition.</p>"),
        ("Comment se construit le contrat",
         "<ul><li><strong>Hospitalisation seule, ou hospitalisation et soins courants.</strong> Les soins courants ajoutent généralistes et spécialistes, pharmacie, analyses, kinésithérapie et prévention.</li>"
         "<li><strong>Options :</strong> dentaire et optique ; maternité en Essential, Extensive et Elite.</li>"
         "<li><strong>Zone :</strong> monde avec ou sans les États-Unis. Sans les États-Unis, les urgences y restent couvertes lors de séjours temporaires de 60 jours consécutifs au plus. Les accidents et urgences hors zone sont couverts pour des séjours de 60 jours au plus.</li>"
         "<li><strong>Franchise ou ticket modérateur :</strong> une franchise annuelle de 500 à 5 000 €/US$, ou un ticket modérateur de 10, 20 ou 30 % sur les soins courants, réduit la cotisation.</li>"
         "<li><strong>Compléments :</strong> assistance rapatriement étendue avec responsabilité civile vie privée, programme d’assistance en situation de crise et garantie incidents de voyage.</li>"
         "<li><strong>Les Français</strong> peuvent souscrire en complément de la Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE) plutôt qu’au premier euro.</li></ul>"
         "<p>La cotisation se paie en euros ou en dollars : annuellement, semestriellement, trimestriellement ou, en euros par prélèvement SEPA, mensuellement.</p>"),
        ("Sélection médicale et délais de carence",
         "<p>Vous remplissez un questionnaire de santé, signé au plus tôt trois mois avant la date d’effet. APRIL International peut accepter aux conditions standard, accepter avec des conditions particulières ou refuser. Les affections exclues à l’adhésion restent exclues : tout déclarer protège un futur remboursement.</p>"
         "<ul><li>3 mois pour les soins dentaires courants.</li><li>6 mois pour les gros soins dentaires et l’optique.</li><li>12 mois pour la maternité, les tests génétiques et la chirurgie préventive du cancer.</li><li>24 mois pour la procréation médicalement assistée.</li></ul>"
         "<p>Sauf pour la maternité, les carences peuvent être levées si vous aviez une couverture équivalente terminée depuis moins d’un mois. Les soins programmés nécessitent un accord préalable ; sans lui, une réduction de 50 % s’applique même si le soin est ensuite reconnu nécessaire.</p>"),
        ("Au quotidien",
         "<ul><li><strong>Prise en charge directe</strong> des hospitalisations, sans avance de frais.</li>"
         "<li><strong>Application Easy Claim</strong> pour les remboursements, les accords préalables et les échanges avec vos conseillers ; virement instantané dans la zone SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, carte de paiement digitale délivrée sur demande pour les soins courants coûteux : imagerie, pharmacie, optique.</li>"
         "<li><strong>Téléconsultation avec Teladoc Health</strong>, 24 h/24, gratuite et illimitée, et second avis médical.</li>"
         "<li><strong>Plus de 2 millions de professionnels de santé</strong> dans le monde ; le réseau hospitalier dépend de la formule et du pays.</li></ul>"),
        ("APRIL International, Allianz Care ou Cigna Global",
         "<p>Nous sommes partenaires des trois et les interrogeons sur les mêmes hypothèses. APRIL International convient souvent quand vous voulez choisir un niveau précis d’hospitalisation et une franchise jusqu’à 5 000 €/US$, quand vous êtes Français et cotisez à la CFE, ou quand vous voulez la prise en charge directe et une carte de paiement pour les soins courants coûteux. Ses âges d’adhésion sont plus stricts dans certains pays : nous les vérifions d’abord. Pour les citoyens américains, nous configurons <a href='{HUB}cigna-global/'>Cigna Global</a> ; pour une zone Europe seule, <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Qui assure MyHealth International ?", "La santé est assurée par Groupama Gan Vie, l’assistance et la responsabilité civile par Chubb European Group SE. APRIL International Care France conçoit et gère le contrat."),
        ("Les maladies antérieures sont-elles couvertes ?", "Pas automatiquement. Vous remplissez un questionnaire de santé et APRIL International fixe les conditions : acceptation standard, conditions particulières ou refus. Les affections exclues à l’adhésion restent exclues."),
        ("Les États-Unis sont-ils couverts ?", "Seulement avec la zone monde y compris États-Unis. Avec la zone monde hors États-Unis, les urgences y sont couvertes lors de séjours temporaires de 60 jours consécutifs au plus."),
        ("La maternité est-elle couverte ?", "En option en Essential, Extensive et Elite, après 12 mois de carence : 4 000, 8 000 ou 12 000 €/US$ par grossesse, avec des plafonds plus élevés en cas de complications à l’accouchement."),
        ("Jusqu’à quel âge puis-je adhérer ?", "Jusqu’à 74 ans dans la plupart des pays, et jusqu’à 60 ans si vous vivez au Brésil, au Chili, en Chine, au Costa Rica, à Hong Kong, au Japon, au Mexique, à Singapour, à Taïwan, en Thaïlande, aux Émirats arabes unis, au Royaume-Uni ou aux États-Unis. Les enfants peuvent adhérer sous l’âge minimum sur le contrat d’un parent."),
    ],
    "form_h2": "Demandez votre devis APRIL International",
    "form_lead": "Quatre informations suffisent. Nous répondons par écrit sous un jour ouvré, avec APRIL International configuré pour vous et, si cela aide, Allianz Care et Cigna Global aux mêmes conditions.",
    "related": [("{HUB}", "Assurance santé internationale pour expatriés"), ("{HUB}allianz-care/", "Allianz Care : assurance santé internationale"), ("{HUB}cigna-global/", "Cigna Global : assurance santé internationale")],
})

APRIL["it"] = page("it", {
    "title": "APRIL International: Assicurazione Sanitaria Internazionale | Adler & Rochefort",
    "desc": "APRIL International MyHealth International per espatriati: Explore, Essential, Extensive ed Elite, mondo con o senza USA, franchigie fino a 5.000 €. Preventivo tramite un broker partner.",
    "eyebrow": "Assicurazione sanitaria internazionale · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: assicurazione sanitaria internazionale per espatriati",
    "lead": "MyHealth International è il piano sanitario internazionale di APRIL International, pensato per chi vive all’estero per più di dodici mesi. Siamo un broker regolamentato nell’UE e partner di APRIL International: configuriamo il piano per il paese in cui vive, la seguiamo nella domanda medica e siamo al suo fianco in caso di sinistro. Bastano quattro dati.",
    "facts": [
        "Quattro piani: Explore, Essential, Extensive ed Elite, tutti con ricovero, cure oncologiche ed evacuazione e rimpatrio sanitario inclusi.",
        "Massimale annuo per persona: 500.000 €/US$ (Explore), 1.500.000 €/US$ (Essential), illimitato in Extensive ed Elite.",
        "Area di copertura: mondo esclusi gli Stati Uniti, oppure mondo inclusi gli Stati Uniti.",
        "Per chi vive fuori dal paese della propria cittadinanza. Età di ingresso: da 10 a 74 anni nella maggior parte dei paesi; da 16 a 60 se vive in Brasile, Cile, Cina, Costa Rica, Hong Kong, Giappone, Messico, Singapore, Taiwan, Thailandia, Emirati Arabi Uniti, Regno Unito o USA.",
        "Franchigia: nessuna, oppure 500, 1.000, 2.500 o 5.000 €/US$; scoperto ambulatoriale dello 0%, 10%, 20% o 30%.",
        "Salute assicurata da Groupama Gan Vie; assistenza e responsabilità civile da Chubb European Group SE. Nessun costo per lei.",
    ],
    "sections": [
        ("I quattro piani MyHealth International",
         "<p>Si parte dalla copertura ospedaliera e si sceglie il livello adatto ai costi sanitari del paese in cui vive. Ambulatoriale, dentale e oculistica e maternità si aggiungono solo se le desidera.</p>[TABLE]"
         "<p>In Extensive ed Elite il massimale annuo è limitato a 2.000.000 e 4.000.000 €/US$ rispettivamente per le cure in Cina, Hong Kong, Giappone, Singapore e Stati Uniti. Cure oncologiche, malattie croniche ed evacuazione sanitaria sono coperte in tutti i piani; la riabilitazione dopo un ricovero va da 20 giorni (Explore, Essential) a 30 giorni (Extensive) e 60 giorni (Elite). I limiti completi sono nella tabella delle prestazioni di APRIL International, che inviamo con ogni proposta.</p>"),
        ("Come si costruisce il piano",
         "<ul><li><strong>Solo ricovero, oppure ricovero e ambulatoriale.</strong> L’ambulatoriale aggiunge medico di base e specialisti, farmacia, esami, fisioterapia e prevenzione.</li>"
         "<li><strong>Opzioni:</strong> dentale e oculistica; maternità in Essential, Extensive ed Elite.</li>"
         "<li><strong>Area di copertura:</strong> mondo con o senza Stati Uniti. Senza gli USA, le urgenze lì restano coperte durante soggiorni temporanei fino a 60 giorni consecutivi. Infortuni e urgenze fuori dall’area sono coperti per soggiorni fino a 60 giorni.</li>"
         "<li><strong>Franchigia o scoperto:</strong> una franchigia annua da 500 a 5.000 €/US$, oppure uno scoperto del 10, 20 o 30% sull’ambulatoriale, riduce il premio.</li>"
         "<li><strong>Extra:</strong> assistenza al rimpatrio completa con responsabilità civile nella vita privata, programma di assistenza in situazioni di crisi e copertura per imprevisti di viaggio.</li>"
         "<li><strong>I cittadini francesi</strong> possono sottoscrivere il piano a integrazione della Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>Il premio si paga in euro o in dollari: annuale, semestrale, trimestrale o, in euro con addebito SEPA, mensile.</p>"),
        ("Valutazione medica e periodi di carenza",
         "<p>Compila un questionario sanitario, firmato al massimo tre mesi prima della decorrenza. APRIL International può accettarla a condizioni standard, accettarla con condizioni specifiche o rifiutare. Le patologie escluse all’adesione restano escluse: dichiarare tutto è ciò che protegge un sinistro futuro.</p>"
         "<ul><li>3 mesi per le cure dentali ordinarie.</li><li>6 mesi per le cure dentali importanti e l’oculistica.</li><li>12 mesi per maternità, test genetici e chirurgia oncologica preventiva.</li><li>24 mesi per la procreazione medicalmente assistita.</li></ul>"
         "<p>Salvo per la maternità, le carenze possono essere annullate se aveva una copertura equivalente terminata da meno di un mese. Le cure programmate richiedono un’autorizzazione preventiva; senza, si applica una riduzione del 50%, anche se la cura viene poi riconosciuta necessaria.</p>"),
        ("Nella vita di tutti i giorni",
         "<ul><li><strong>Pagamento diretto</strong> dei ricoveri, senza anticipare spese.</li>"
         "<li><strong>App Easy Claim</strong> per rimborsi, autorizzazioni preventive e messaggi ai suoi consulenti; rimborsi con bonifico istantaneo in area SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, carta di pagamento digitale rilasciata su richiesta per cure ambulatoriali costose come diagnostica per immagini, farmacia od occhiali.</li>"
         "<li><strong>Telemedicina con Teladoc Health</strong>, 24 ore su 24, gratuita e illimitata, e secondo parere medico.</li>"
         "<li><strong>Oltre 2 milioni di professionisti sanitari</strong> nel mondo; la rete ospedaliera dipende dal piano e dal paese.</li></ul>"),
        ("APRIL International, Allianz Care o Cigna Global",
         "<p>Siamo partner di tutti e tre e chiediamo i preventivi sulle stesse ipotesi. APRIL International è spesso la scelta giusta quando vuole scegliere un livello preciso di copertura ospedaliera e una franchigia fino a 5.000 €/US$, quando è francese e versa alla CFE, o quando vuole il pagamento diretto e una carta per le cure ambulatoriali costose. Le età di ingresso sono più restrittive in alcuni paesi, perciò le verifichiamo per prime. Per i cittadini statunitensi configuriamo <a href='{HUB}cigna-global/'>Cigna Global</a>; per un’area solo Europa, <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Chi è l’assicuratore di MyHealth International?", "La copertura sanitaria è assicurata da Groupama Gan Vie, l’assistenza e la responsabilità civile da Chubb European Group SE. APRIL International Care France progetta e gestisce il piano."),
        ("Le patologie preesistenti sono coperte?", "Non automaticamente. Compila un questionario sanitario e APRIL International stabilisce le condizioni: accettazione standard, condizioni specifiche o rifiuto. Le patologie escluse all’adesione restano escluse."),
        ("Gli Stati Uniti sono coperti?", "Solo con l’area mondo inclusi gli Stati Uniti. Con l’area mondo esclusi gli USA, le urgenze lì sono coperte durante soggiorni temporanei fino a 60 giorni consecutivi."),
        ("La maternità è coperta?", "Come opzione in Essential, Extensive ed Elite, dopo 12 mesi di carenza: 4.000, 8.000 o 12.000 €/US$ per gravidanza, con limiti più alti in caso di complicazioni al parto."),
        ("Fino a che età posso aderire?", "Fino a 74 anni nella maggior parte dei paesi e fino a 60 se vive in Brasile, Cile, Cina, Costa Rica, Hong Kong, Giappone, Messico, Singapore, Taiwan, Thailandia, Emirati Arabi Uniti, Regno Unito o USA. I figli possono aderire sotto l’età minima nella polizza di un genitore."),
    ],
    "form_h2": "Richieda il suo preventivo APRIL International",
    "form_lead": "Bastano quattro dati. Rispondiamo per iscritto entro un giorno lavorativo, con APRIL International configurato per lei e, quando serve, Allianz Care e Cigna Global alle stesse condizioni.",
    "related": [("{HUB}", "Assicurazione sanitaria internazionale per espatriati"), ("{HUB}allianz-care/", "Allianz Care: assicurazione sanitaria internazionale"), ("{HUB}cigna-global/", "Cigna Global: assicurazione sanitaria internazionale")],
})

APRIL["pl"] = page("pl", {
    "title": "APRIL International: Międzynarodowe Ubezpieczenie Zdrowotne | Adler & Rochefort",
    "desc": "APRIL International MyHealth International dla ekspatów: Explore, Essential, Extensive i Elite, świat z USA lub bez, udział własny do 5000 €. Oferta przez brokera-partnera.",
    "eyebrow": "Międzynarodowe ubezpieczenie zdrowotne · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: międzynarodowe ubezpieczenie zdrowotne dla ekspatów",
    "lead": "MyHealth International to międzynarodowy plan zdrowotny APRIL International dla osób mieszkających za granicą dłużej niż dwanaście miesięcy. Jesteśmy brokerem nadzorowanym w UE i partnerem APRIL International: dobieramy plan do kraju, w którym faktycznie mieszkasz, prowadzimy wniosek medyczny i jesteśmy przy Tobie przy szkodzie. Wystarczą cztery dane.",
    "facts": [
        "Cztery plany: Explore, Essential, Extensive i Elite, każdy z leczeniem szpitalnym, leczeniem onkologicznym oraz ewakuacją i repatriacją medyczną.",
        "Roczna suma na osobę: 500 000 €/US$ (Explore), 1 500 000 €/US$ (Essential), bez limitu w Extensive i Elite.",
        "Obszar ochrony: świat bez Stanów Zjednoczonych albo świat z Stanami Zjednoczonymi.",
        "Dla osób mieszkających poza krajem obywatelstwa. Wiek przystąpienia: od 10 do 74 lat w większości krajów; od 16 do 60 lat przy zamieszkaniu w Brazylii, Chile, Chinach, Kostaryce, Hongkongu, Japonii, Meksyku, Singapurze, na Tajwanie, w Tajlandii, ZEA, Wielkiej Brytanii lub USA.",
        "Udział własny: brak albo 500, 1000, 2500 lub 5000 €/US$; współpłacenie ambulatoryjne 0%, 10%, 20% lub 30%.",
        "Ubezpieczyciel zdrowotny: Groupama Gan Vie; assistance i OC: Chubb European Group SE. Bez kosztów dla Ciebie.",
    ],
    "sections": [
        ("Cztery plany MyHealth International",
         "<p>Zaczynasz od ochrony szpitalnej i wybierasz poziom odpowiedni do kosztów leczenia w kraju zamieszkania. Leczenie ambulatoryjne, stomatologię i okulistykę oraz macierzyństwo dodajesz tylko wtedy, gdy chcesz.</p>[TABLE]"
         "<p>W Extensive i Elite roczna suma przy leczeniu w Chinach, Hongkongu, Japonii, Singapurze i USA jest ograniczona odpowiednio do 2 000 000 i 4 000 000 €/US$. Leczenie onkologiczne, choroby przewlekłe i ewakuacja medyczna są objęte w każdym planie; rehabilitacja po hospitalizacji trwa od 20 dni (Explore, Essential) do 30 dni (Extensive) i 60 dni (Elite). Pełne limity są w tabeli świadczeń APRIL International, którą wysyłamy z każdą propozycją.</p>"),
        ("Jak buduje się plan",
         "<ul><li><strong>Tylko szpital albo szpital i leczenie ambulatoryjne.</strong> Ambulatoryjnie: lekarz rodzinny i specjaliści, apteka, badania, fizjoterapia i profilaktyka.</li>"
         "<li><strong>Opcje:</strong> stomatologia i okulistyka; macierzyństwo w Essential, Extensive i Elite.</li>"
         "<li><strong>Obszar:</strong> świat z USA lub bez. Bez USA nagłe przypadki są tam objęte podczas pobytów tymczasowych do 60 kolejnych dni. Wypadki i nagłe przypadki poza obszarem są objęte przy pobytach do 60 dni.</li>"
         "<li><strong>Udział własny lub współpłacenie:</strong> roczny udział własny od 500 do 5000 €/US$ albo współpłacenie 10, 20 lub 30% ambulatoryjnie obniża składkę.</li>"
         "<li><strong>Dodatki:</strong> rozszerzona pomoc w repatriacji z OC w życiu prywatnym, program pomocy w sytuacjach kryzysowych i ochrona przy incydentach w podróży.</li>"
         "<li><strong>Obywatele Francji</strong> mogą wykupić plan jako uzupełnienie Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>Składka płatna w euro lub dolarach: rocznie, półrocznie, kwartalnie lub, w euro poleceniem zapłaty SEPA, miesięcznie.</p>"),
        ("Ocena medyczna i okresy karencji",
         "<p>Wypełniasz kwestionariusz zdrowotny, podpisany nie wcześniej niż trzy miesiące przed startem. APRIL International może przyjąć na standardowych warunkach, przyjąć z warunkami szczególnymi lub odmówić. Choroby wyłączone przy przystąpieniu pozostają wyłączone, dlatego pełne zgłoszenie chroni przyszłą szkodę.</p>"
         "<ul><li>3 miesiące na zwykłe leczenie stomatologiczne.</li><li>6 miesięcy na poważniejsze leczenie stomatologiczne i okulistykę.</li><li>12 miesięcy na macierzyństwo, badania genetyczne i profilaktyczną chirurgię onkologiczną.</li><li>24 miesiące na wspomagany rozród.</li></ul>"
         "<p>Poza macierzyństwem karencje można znieść, jeśli miałeś równoważną ochronę zakończoną mniej niż miesiąc wcześniej. Leczenie planowe wymaga uprzedniej zgody; bez niej stosuje się redukcję o 50%, nawet jeśli leczenie zostanie później uznane za konieczne.</p>"),
        ("Na co dzień",
         "<ul><li><strong>Rozliczenie bezgotówkowe</strong> hospitalizacji, bez płacenia z góry.</li>"
         "<li><strong>Aplikacja Easy Claim</strong> do zwrotów, uprzednich zgód i wiadomości do opiekunów; zwrot natychmiastowym przelewem w strefie SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, cyfrowa karta płatnicza wydawana na wniosek przy kosztownym leczeniu ambulatoryjnym, np. diagnostyce obrazowej, lekach czy okularach.</li>"
         "<li><strong>Telemedycyna z Teladoc Health</strong>, całodobowo, bezpłatnie i bez limitu, oraz druga opinia lekarska.</li>"
         "<li><strong>Ponad 2 miliony placówek i lekarzy</strong> na świecie; sieć szpitali zależy od planu i kraju.</li></ul>"),
        ("APRIL International, Allianz Care czy Cigna Global",
         "<p>Jesteśmy partnerem wszystkich trzech i pytamy o oferty na tych samych założeniach. APRIL International często pasuje, gdy chcesz wybrać dokładny poziom ochrony szpitalnej i udział własny do 5000 €/US$, gdy jesteś Francuzem i płacisz składki do CFE, albo gdy zależy Ci na rozliczeniu bezgotówkowym i karcie płatniczej przy drogim leczeniu ambulatoryjnym. W niektórych krajach limity wieku są ostrzejsze, więc sprawdzamy je najpierw. Dla obywateli USA dobieramy <a href='{HUB}cigna-global/'>Cigna Global</a>; dla obszaru tylko Europa – <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Kto jest ubezpieczycielem MyHealth International?", "Ochronę zdrowotną zapewnia Groupama Gan Vie, a assistance i OC – Chubb European Group SE. APRIL International Care France projektuje plan i nim zarządza."),
        ("Czy choroby istniejące wcześniej są objęte?", "Nie automatycznie. Wypełniasz kwestionariusz zdrowotny, a APRIL International ustala warunki: przyjęcie standardowe, warunki szczególne lub odmowa. Choroby wyłączone przy przystąpieniu pozostają wyłączone."),
        ("Czy Stany Zjednoczone są objęte?", "Tylko przy obszarze świat z USA. Przy obszarze świat bez USA nagłe przypadki są tam objęte podczas pobytów tymczasowych do 60 kolejnych dni."),
        ("Czy macierzyństwo jest objęte?", "Jako opcja w Essential, Extensive i Elite, po 12 miesiącach karencji: 4000, 8000 lub 12 000 €/US$ na ciążę, z wyższymi limitami przy powikłaniach porodowych."),
        ("Do jakiego wieku mogę przystąpić?", "Do 74 lat w większości krajów i do 60 lat przy zamieszkaniu w Brazylii, Chile, Chinach, Kostaryce, Hongkongu, Japonii, Meksyku, Singapurze, na Tajwanie, w Tajlandii, ZEA, Wielkiej Brytanii lub USA. Dzieci mogą przystąpić poniżej wieku minimalnego w polisie rodzica."),
    ],
    "form_h2": "Poproś o ofertę APRIL International",
    "form_lead": "Wystarczą cztery dane. Odpowiemy na piśmie w ciągu jednego dnia roboczego, z APRIL International dobranym dla Ciebie i, gdy to pomoże, Allianz Care oraz Cigna Global na tych samych warunkach.",
    "related": [("{HUB}", "Międzynarodowe ubezpieczenie zdrowotne dla ekspatów"), ("{HUB}allianz-care/", "Allianz Care: międzynarodowe ubezpieczenie zdrowotne"), ("{HUB}cigna-global/", "Cigna Global: międzynarodowe ubezpieczenie zdrowotne")],
})

APRIL["se"] = page("se", {
    "title": "APRIL International: Internationell Sjukvårdsförsäkring | Adler & Rochefort",
    "desc": "APRIL International MyHealth International för utlandsboende: Explore, Essential, Extensive och Elite, världen med eller utan USA, självrisk upp till 5 000 €. Offert via en partnermäklare.",
    "eyebrow": "Internationell sjukvårdsförsäkring · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: internationell sjukvårdsförsäkring för utlandsboende",
    "lead": "MyHealth International är APRIL Internationals internationella sjukvårdsplan, för dig som bor utomlands i mer än tolv månader. Vi är en EU-reglerad mäklare och partner till APRIL International: vi anpassar planen efter landet där du faktiskt bor, hjälper dig med hälsodeklarationen och finns vid din sida vid skada. Fyra uppgifter räcker.",
    "facts": [
        "Fyra planer: Explore, Essential, Extensive och Elite, alla med sjukhusvård, cancerbehandling samt medicinsk evakuering och hemtransport.",
        "Årligt tak per person: €/US$ 500 000 (Explore), €/US$ 1 500 000 (Essential), obegränsat i Extensive och Elite.",
        "Försäkringsområde: världen utom USA, eller världen inklusive USA.",
        "För dig som bor utanför landet där du är medborgare. Inträdesålder: 10 till 74 år i de flesta länder; 16 till 60 om du bor i Brasilien, Chile, Kina, Costa Rica, Hongkong, Japan, Mexiko, Singapore, Taiwan, Thailand, Förenade Arabemiraten, Storbritannien eller USA.",
        "Självrisk: ingen, eller €/US$ 500, 1 000, 2 500 eller 5 000; egenandel i öppenvård 0, 10, 20 eller 30 %.",
        "Sjukvården försäkras av Groupama Gan Vie; assistans och ansvar av Chubb European Group SE. Kostnadsfritt för dig.",
    ],
    "sections": [
        ("De fyra MyHealth International-planerna",
         "<p>Du börjar med sjukhusvård och väljer den nivå som passar vårdkostnaderna där du bor. Öppenvård, tandvård och optik samt mödravård lägger du bara till om du vill.</p>[TABLE]"
         "<p>I Extensive och Elite är det årliga taket för vård i Kina, Hongkong, Japan, Singapore och USA begränsat till €/US$ 2 000 000 respektive 4 000 000. Cancerbehandling, kroniska sjukdomar och medicinsk evakuering ingår i alla planer; rehabilitering efter sjukhusvistelse gäller från 20 dagar (Explore, Essential) till 30 dagar (Extensive) och 60 dagar (Elite). De fullständiga gränserna finns i APRIL Internationals förmånstabell, som vi skickar med varje förslag.</p>"),
        ("Så byggs planen",
         "<ul><li><strong>Bara sjukhus, eller sjukhus och öppenvård.</strong> Öppenvård lägger till läkarbesök hos allmänläkare och specialist, apotek, provtagning, sjukgymnastik och förebyggande vård.</li>"
         "<li><strong>Tillval:</strong> tandvård och optik; mödravård i Essential, Extensive och Elite.</li>"
         "<li><strong>Område:</strong> världen med eller utan USA. Utan USA täcks akuta fall där vid tillfälliga vistelser på högst 60 dagar i följd. Olycksfall och akuta fall utanför området täcks vid vistelser på högst 60 dagar.</li>"
         "<li><strong>Självrisk eller egenandel:</strong> en årlig självrisk på €/US$ 500 till 5 000, eller en egenandel på 10, 20 eller 30 % i öppenvård, sänker premien.</li>"
         "<li><strong>Tillägg:</strong> utökad hemtransportassistans med privatansvar, ett krisprogram och skydd vid reseincidenter.</li>"
         "<li><strong>Franska medborgare</strong> kan teckna planen som tillägg till Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>Premien betalas i euro eller dollar: årsvis, halvårsvis, kvartalsvis eller, i euro via SEPA-autogiro, månadsvis.</p>"),
        ("Hälsoprövning och karenstider",
         "<p>Du fyller i en hälsodeklaration, undertecknad högst tre månader före startdatum. APRIL International kan anta dig på standardvillkor, anta dig med särskilda villkor eller avslå. Sjukdomar som undantas vid ansökan förblir undantagna, så fullständiga uppgifter skyddar en framtida ersättning.</p>"
         "<ul><li>3 månader för vanlig tandvård.</li><li>6 månader för större tandvård och optik.</li><li>12 månader för mödravård, genetiska tester och förebyggande cancerkirurgi.</li><li>24 månader för assisterad befruktning.</li></ul>"
         "<p>Utom för mödravård kan karenstider slopas om du hade ett likvärdigt skydd som upphörde mindre än en månad tidigare. Planerad vård kräver förhandsgodkännande; utan det görs ett avdrag på 50 %, även om vården senare godtas som nödvändig.</p>"),
        ("I vardagen",
         "<ul><li><strong>Direktbetalning</strong> vid sjukhusvistelse, utan att du lägger ut pengar.</li>"
         "<li><strong>Appen Easy Claim</strong> för ersättningar, förhandsgodkännanden och meddelanden till dina handläggare; ersättning via omedelbar överföring inom SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, ett digitalt betalkort på begäran för dyr öppenvård som röntgen, läkemedel eller glasögon.</li>"
         "<li><strong>Digital vård med Teladoc Health</strong>, dygnet runt, kostnadsfritt och obegränsat, samt second opinion.</li>"
         "<li><strong>Över 2 miljoner vårdgivare</strong> i världen; sjukhusnätverket beror på plan och land.</li></ul>"),
        ("APRIL International, Allianz Care eller Cigna Global",
         "<p>Vi är partner till alla tre och hämtar offerter på samma antaganden. APRIL International passar ofta när du vill välja en exakt nivå av sjukhusvård och en självrisk på upp till €/US$ 5 000, när du är fransman och betalar till CFE, eller när du vill ha direktbetalning och ett betalkort för dyr öppenvård. Inträdesåldrarna är snävare i vissa länder, så vi kontrollerar dem först. För amerikanska medborgare väljer vi <a href='{HUB}cigna-global/'>Cigna Global</a>; för enbart Europa <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Vem försäkrar MyHealth International?", "Sjukvården försäkras av Groupama Gan Vie, assistans och ansvar av Chubb European Group SE. APRIL International Care France utformar och administrerar planen."),
        ("Täcks tidigare sjukdomar?", "Inte automatiskt. Du fyller i en hälsodeklaration och APRIL International bestämmer villkoren: standardvillkor, särskilda villkor eller avslag. Sjukdomar som undantas vid ansökan förblir undantagna."),
        ("Täcks USA?", "Bara med området världen inklusive USA. Utan USA täcks akuta fall där vid tillfälliga vistelser på högst 60 dagar i följd."),
        ("Ingår mödravård?", "Som tillval i Essential, Extensive och Elite, efter 12 månaders karens: €/US$ 4 000, 8 000 eller 12 000 per graviditet, med högre tak vid förlossningskomplikationer."),
        ("Upp till vilken ålder kan jag gå med?", "Upp till 74 år i de flesta länder och upp till 60 om du bor i Brasilien, Chile, Kina, Costa Rica, Hongkong, Japan, Mexiko, Singapore, Taiwan, Thailand, Förenade Arabemiraten, Storbritannien eller USA. Barn under minimiåldern kan ingå i en förälders försäkring."),
    ],
    "form_h2": "Begär din offert från APRIL International",
    "form_lead": "Fyra uppgifter räcker. Vi svarar skriftligt inom en arbetsdag, med APRIL International anpassad för dig och, när det hjälper, Allianz Care och Cigna Global på samma villkor.",
    "related": [("{HUB}", "Internationell sjukvårdsförsäkring för utlandsboende"), ("{HUB}allianz-care/", "Allianz Care: internationell sjukvårdsförsäkring"), ("{HUB}cigna-global/", "Cigna Global: internationell sjukvårdsförsäkring")],
})

APRIL["dk"] = page("dk", {
    "title": "APRIL International: International Sundhedsforsikring | Adler & Rochefort",
    "desc": "APRIL International MyHealth International for udlandsdanskere: Explore, Essential, Extensive og Elite, verden med eller uden USA, selvrisiko op til 5.000 €. Tilbud via en partnermægler.",
    "eyebrow": "International sundhedsforsikring · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: international sundhedsforsikring for udlandsdanskere",
    "lead": "MyHealth International er APRIL Internationals internationale sundhedsplan til dig, der bor i udlandet i mere end tolv måneder. Vi er en EU-reguleret mægler og partner af APRIL International: vi tilpasser planen til landet, hvor du faktisk bor, hjælper med helbredserklæringen og står ved din side ved skade. Fire oplysninger er nok.",
    "facts": [
        "Fire planer: Explore, Essential, Extensive og Elite, alle med hospitalsbehandling, kræftbehandling samt medicinsk evakuering og hjemtransport.",
        "Årligt maksimum pr. person: €/US$ 500.000 (Explore), €/US$ 1.500.000 (Essential), ubegrænset i Extensive og Elite.",
        "Dækningsområde: verden uden USA, eller verden med USA.",
        "Til dig, der bor uden for det land, du er statsborger i. Indtrædelsesalder: 10 til 74 år i de fleste lande; 16 til 60, hvis du bor i Brasilien, Chile, Kina, Costa Rica, Hongkong, Japan, Mexico, Singapore, Taiwan, Thailand, De Forenede Arabiske Emirater, Storbritannien eller USA.",
        "Selvrisiko: ingen, eller €/US$ 500, 1.000, 2.500 eller 5.000; egenbetaling ambulant 0, 10, 20 eller 30 %.",
        "Sundhed forsikret af Groupama Gan Vie; assistance og ansvar af Chubb European Group SE. Gratis for dig.",
    ],
    "sections": [
        ("De fire MyHealth International-planer",
         "<p>Du starter med hospitalsdækning og vælger det niveau, der passer til sundhedsudgifterne, hvor du bor. Ambulant behandling, tand og optik samt graviditet tilføjer du kun, hvis du vil.</p>[TABLE]"
         "<p>I Extensive og Elite er det årlige maksimum for behandling i Kina, Hongkong, Japan, Singapore og USA begrænset til henholdsvis €/US$ 2.000.000 og 4.000.000. Kræftbehandling, kroniske sygdomme og medicinsk evakuering er dækket i alle planer; genoptræning efter indlæggelse gælder fra 20 dage (Explore, Essential) til 30 dage (Extensive) og 60 dage (Elite). De fulde grænser står i APRIL Internationals ydelsestabel, som vi sender med hvert forslag.</p>"),
        ("Sådan bygges planen",
         "<ul><li><strong>Kun hospital, eller hospital og ambulant.</strong> Ambulant tilføjer praktiserende læge og speciallæge, apotek, prøver, fysioterapi og forebyggelse.</li>"
         "<li><strong>Tilvalg:</strong> tand og optik; graviditet i Essential, Extensive og Elite.</li>"
         "<li><strong>Område:</strong> verden med eller uden USA. Uden USA er akutte tilfælde dér dækket ved midlertidige ophold på højst 60 dage i træk. Ulykker og akutte tilfælde uden for området er dækket ved ophold på højst 60 dage.</li>"
         "<li><strong>Selvrisiko eller egenbetaling:</strong> en årlig selvrisiko på €/US$ 500 til 5.000, eller en egenbetaling på 10, 20 eller 30 % ambulant, sænker præmien.</li>"
         "<li><strong>Tillæg:</strong> udvidet hjemtransport-assistance med privatansvar, et kriseprogram og dækning ved rejsehændelser.</li>"
         "<li><strong>Franske statsborgere</strong> kan tegne planen som tillæg til Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger (CFE).</li></ul>"
         "<p>Præmien betales i euro eller dollar: årligt, halvårligt, kvartalsvis eller, i euro via SEPA-betalingsservice, månedligt.</p>"),
        ("Helbredsvurdering og karensperioder",
         "<p>Du udfylder en helbredserklæring, underskrevet højst tre måneder før start. APRIL International kan acceptere på standardvilkår, acceptere med særlige vilkår eller afvise. Sygdomme, der undtages ved ansøgningen, forbliver undtaget, så fulde oplysninger beskytter en fremtidig skade.</p>"
         "<ul><li>3 måneder for almindelig tandpleje.</li><li>6 måneder for større tandbehandling og optik.</li><li>12 måneder for graviditet, gentest og forebyggende kræftkirurgi.</li><li>24 måneder for fertilitetsbehandling.</li></ul>"
         "<p>Undtagen for graviditet kan karensperioder bortfalde, hvis du havde en tilsvarende dækning, der sluttede mindre end en måned før. Planlagt behandling kræver forhåndsgodkendelse; uden den gives et fradrag på 50 %, selv om behandlingen senere anerkendes som nødvendig.</p>"),
        ("I hverdagen",
         "<ul><li><strong>Direkte betaling</strong> ved indlæggelse, uden udlæg.</li>"
         "<li><strong>Appen Easy Claim</strong> til refusioner, forhåndsgodkendelser og beskeder til dine rådgivere; refusion via straksoverførsel i SEPA-området.</li>"
         "<li><strong>Easy Pay Card</strong>, et digitalt betalingskort på anmodning til dyr ambulant behandling som scanninger, medicin eller briller.</li>"
         "<li><strong>Telemedicin med Teladoc Health</strong>, døgnet rundt, gratis og ubegrænset, samt second opinion.</li>"
         "<li><strong>Over 2 millioner sundhedsydere</strong> i verden; hospitalsnetværket afhænger af plan og land.</li></ul>"),
        ("APRIL International, Allianz Care eller Cigna Global",
         "<p>Vi er partner af alle tre og indhenter tilbud på samme forudsætninger. APRIL International passer ofte, når du vil vælge et præcist niveau af hospitalsdækning og en selvrisiko på op til €/US$ 5.000, når du er franskmand og betaler til CFE, eller når du vil have direkte betaling og et betalingskort til dyr ambulant behandling. Indtrædelsesaldrene er strammere i nogle lande, så dem tjekker vi først. For amerikanske statsborgere vælger vi <a href='{HUB}cigna-global/'>Cigna Global</a>; for kun Europa <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("Hvem forsikrer MyHealth International?", "Sundhedsdækningen er forsikret af Groupama Gan Vie, assistance og ansvar af Chubb European Group SE. APRIL International Care France udformer og administrerer planen."),
        ("Er eksisterende sygdomme dækket?", "Ikke automatisk. Du udfylder en helbredserklæring, og APRIL International fastsætter vilkårene: standardvilkår, særlige vilkår eller afslag. Sygdomme, der undtages ved ansøgningen, forbliver undtaget."),
        ("Er USA dækket?", "Kun med området verden med USA. Uden USA er akutte tilfælde dér dækket ved midlertidige ophold på højst 60 dage i træk."),
        ("Er graviditet dækket?", "Som tilvalg i Essential, Extensive og Elite, efter 12 måneders karens: €/US$ 4.000, 8.000 eller 12.000 pr. graviditet, med højere grænser ved fødselskomplikationer."),
        ("Op til hvilken alder kan jeg tegne?", "Op til 74 år i de fleste lande og op til 60, hvis du bor i Brasilien, Chile, Kina, Costa Rica, Hongkong, Japan, Mexico, Singapore, Taiwan, Thailand, De Forenede Arabiske Emirater, Storbritannien eller USA. Børn under minimumsalderen kan være med på en forælders police."),
    ],
    "form_h2": "Bed om dit tilbud fra APRIL International",
    "form_lead": "Fire oplysninger er nok. Vi svarer skriftligt inden for én arbejdsdag, med APRIL International tilpasset dig og, når det hjælper, Allianz Care og Cigna Global på samme vilkår.",
    "related": [("{HUB}", "International sundhedsforsikring for udlandsdanskere"), ("{HUB}allianz-care/", "Allianz Care: international sundhedsforsikring"), ("{HUB}cigna-global/", "Cigna Global: international sundhedsforsikring")],
})

APRIL["il"] = page("il", {
    "title": "APRIL International: ביטוח בריאות בינלאומי | Adler & Rochefort",
    "desc": "APRIL International MyHealth International למי שגר בחו״ל: Explore, ‏Essential, ‏Extensive ו־Elite, כל העולם עם ארה״ב או בלעדיה, השתתפות עצמית עד 5,000 €. הצעה דרך ברוקר שותף.",
    "eyebrow": "ביטוח בריאות בינלאומי · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International: ביטוח בריאות בינלאומי למי שעובר לחו״ל",
    "lead": "MyHealth International היא תוכנית הבריאות הבינלאומית של APRIL International, למי שגר בחו״ל יותר משנים עשר חודשים. אנחנו ברוקר בפיקוח האיחוד האירופי ושותפים של APRIL International: מתאימים את התוכנית למדינה שבה אתם גרים בפועל, מלווים את ההצהרה הרפואית ונמצאים לצדכם בתביעה. ארבעה פרטים מספיקים.",
    "facts": [
        "ארבע תוכניות: Explore, ‏Essential, ‏Extensive ו־Elite, כולן עם אשפוז, טיפול אונקולוגי ופינוי והחזרה רפואיים.",
        "תקרה שנתית לאדם: ‎€/US$ 500,000 ב־Explore, ‏‎€/US$ 1,500,000 ב־Essential, ללא הגבלה ב־Extensive וב־Elite.",
        "אזור כיסוי: העולם ללא ארצות הברית, או העולם כולל ארצות הברית.",
        "למי שגר מחוץ למדינת אזרחותו. גיל הצטרפות: 10 עד 74 ברוב המדינות; 16 עד 60 למי שגר בברזיל, צ׳ילה, סין, קוסטה ריקה, הונג קונג, יפן, מקסיקו, סינגפור, טייוואן, תאילנד, איחוד האמירויות, בריטניה או ארה״ב.",
        "השתתפות עצמית: ללא, או ‎€/US$ 500, 1,000, 2,500 או 5,000; השתתפות באחוזים באמבולטורי: 0%, 10%, 20% או 30%.",
        "הבריאות מבוטחת ב־Groupama Gan Vie; סיוע ואחריות אישית ב־Chubb European Group SE. ללא עלות עבורכם.",
    ],
    "sections": [
        ("ארבע תוכניות MyHealth International",
         "<p>מתחילים בכיסוי אשפוז ובוחרים את הרמה שמתאימה לעלויות הבריאות במדינה שבה אתם גרים. אמבולטורי, שיניים ואופטיקה ולידה מוסיפים רק אם רוצים.</p>[TABLE]"
         "<p>ב־Extensive וב־Elite התקרה השנתית לטיפול בסין, בהונג קונג, ביפן, בסינגפור ובארה״ב מוגבלת ל־‎€/US$ 2,000,000 ו־4,000,000 בהתאמה. טיפול אונקולוגי, מחלות כרוניות ופינוי רפואי מכוסים בכל התוכניות; שיקום אחרי אשפוז נמשך מ־20 ימים (Explore, ‏Essential) עד 30 ימים (Extensive) ו־60 ימים (Elite). התקרות המלאות מופיעות בטבלת ההטבות של APRIL International, שאנחנו שולחים עם כל הצעה.</p>"),
        ("איך בונים את התוכנית",
         "<ul><li><strong>אשפוז בלבד, או אשפוז ואמבולטורי.</strong> אמבולטורי מוסיף רופא משפחה ומומחים, תרופות, בדיקות, פיזיותרפיה ורפואה מונעת.</li>"
         "<li><strong>תוספות:</strong> שיניים ואופטיקה; לידה ב־Essential, ‏Extensive ו־Elite.</li>"
         "<li><strong>אזור:</strong> העולם עם ארה״ב או בלעדיה. בלי ארה״ב, מקרי חירום שם מכוסים בשהייה זמנית של עד 60 ימים רצופים. תאונות ומקרי חירום מחוץ לאזור הכיסוי מכוסים בשהייה של עד 60 ימים.</li>"
         "<li><strong>השתתפות עצמית:</strong> השתתפות שנתית של ‎€/US$ 500 עד 5,000, או השתתפות של 10, 20 או 30% באמבולטורי, מורידה את הפרמיה.</li>"
         "<li><strong>תוספות נוספות:</strong> סיוע מורחב בהחזרה לארץ עם אחריות אישית בחיים הפרטיים, תוכנית סיוע במצבי משבר וכיסוי לתקלות בנסיעה.</li>"
         "<li><strong>אזרחי צרפת</strong> יכולים לרכוש את התוכנית כהשלמה ל־Caisse des Fran&ccedil;ais de l&rsquo;&Eacute;tranger ‏(CFE).</li></ul>"
         "<p>הפרמיה משולמת ביורו או בדולר: שנתית, חצי־שנתית, רבעונית או, ביורו בהוראת קבע SEPA, חודשית.</p>"),
        ("חיתום רפואי ותקופות המתנה",
         "<p>ממלאים שאלון בריאות, חתום לכל המוקדם שלושה חודשים לפני תחילת הביטוח. APRIL International יכולה לקבל בתנאים רגילים, לקבל בתנאים מיוחדים או לדחות. מצבים שהוחרגו בהצטרפות נשארים מוחרגים, ולכן הצהרה מלאה היא מה שמגן על תביעה עתידית.</p>"
         "<ul><li>3 חודשים לטיפולי שיניים שוטפים.</li><li>6 חודשים לטיפולי שיניים גדולים ולאופטיקה.</li><li>12 חודשים ללידה, לבדיקות גנטיות ולניתוח מונע לסרטן.</li><li>24 חודשים לטיפולי פוריות.</li></ul>"
         "<p>חוץ מלידה, אפשר לוותר על תקופות ההמתנה אם היה לכם כיסוי שווה ערך שהסתיים לפני פחות מחודש. טיפול מתוכנן דורש אישור מראש; בלעדיו מופעל ניכוי של 50%, גם אם הטיפול מוכר אחר כך כנחוץ.</p>"),
        ("בשימוש יומיומי",
         "<ul><li><strong>תשלום ישיר</strong> באשפוז, בלי להוציא כסף מראש.</li>"
         "<li><strong>אפליקציית Easy Claim</strong> לתביעות, לאישורים מראש ולהודעות ליועצים; החזר בהעברה מיידית באזור SEPA.</li>"
         "<li><strong>Easy Pay Card</strong>, כרטיס תשלום דיגיטלי שמונפק לפי בקשה להוצאות אמבולטוריות גבוהות כמו דימות, תרופות או משקפיים.</li>"
         "<li><strong>רפואה מרחוק עם Teladoc Health</strong>, 24/7, בחינם וללא הגבלה, וחוות דעת שנייה.</li>"
         "<li><strong>יותר מ־2 מיליון אנשי מקצוע בתחום הבריאות</strong> בעולם; רשת בתי החולים תלויה בתוכנית ובמדינה.</li></ul>"),
        ("APRIL International‏, Allianz Care או Cigna Global",
         "<p>אנחנו שותפים של שלושתן ומבקשים הצעות על אותן הנחות. APRIL International מתאימה לעתים קרובות כשרוצים לבחור רמת אשפוז מדויקת והשתתפות עצמית של עד ‎€/US$ 5,000, כשאתם אזרחי צרפת ומשלמים ל־CFE, או כשחשובים לכם תשלום ישיר וכרטיס תשלום להוצאות אמבולטוריות גבוהות. גילי ההצטרפות מחמירים יותר בחלק מהמדינות, ולכן אנחנו בודקים אותם קודם. לאזרחי ארה״ב אנחנו מתאימים את <a href='{HUB}cigna-global/'>Cigna Global</a>; לאזור אירופה בלבד, את <a href='{HUB}allianz-care/'>Allianz Care</a>.</p>"),
    ],
    "faq": [
        ("מי המבטחת של MyHealth International?", "כיסוי הבריאות מבוטח ב־Groupama Gan Vie, והסיוע והאחריות האישית ב־Chubb European Group SE. ‏APRIL International Care France מתכננת ומנהלת את התוכנית."),
        ("האם מצבים רפואיים קודמים מכוסים?", "לא אוטומטית. ממלאים שאלון בריאות ו־APRIL International קובעת את התנאים: קבלה רגילה, תנאים מיוחדים או דחייה. מצבים שהוחרגו בהצטרפות נשארים מוחרגים."),
        ("האם ארצות הברית מכוסה?", "רק עם אזור העולם כולל ארה״ב. בלי ארה״ב, מקרי חירום שם מכוסים בשהייה זמנית של עד 60 ימים רצופים."),
        ("האם לידה מכוסה?", "כתוספת ב־Essential, ‏Extensive ו־Elite, אחרי 12 חודשי המתנה: ‎€/US$ 4,000, 8,000 או 12,000 להריון, עם תקרות גבוהות יותר בסיבוכי לידה."),
        ("עד איזה גיל אפשר להצטרף?", "עד 74 ברוב המדינות, ועד 60 למי שגר בברזיל, צ׳ילה, סין, קוסטה ריקה, הונג קונג, יפן, מקסיקו, סינגפור, טייוואן, תאילנד, איחוד האמירויות, בריטניה או ארה״ב. ילדים מתחת לגיל המינימום יכולים להצטרף בפוליסה של הורה."),
    ],
    "form_h2": "בקשו הצעת מחיר מ־APRIL International",
    "form_lead": "ארבעה פרטים מספיקים. נשיב בכתב תוך יום עבודה אחד, עם APRIL International מותאמת לכם ובמידת הצורך גם Allianz Care ו־Cigna Global באותם תנאים.",
    "related": [("{HUB}", "ביטוח בריאות בינלאומי למי שעובר לחו״ל"), ("{HUB}allianz-care/", "Allianz Care: ביטוח בריאות בינלאומי"), ("{HUB}cigna-global/", "Cigna Global: ביטוח בריאות בינלאומי")],
})

APRIL["zh"] = page("zh", {
    "title": "APRIL International 国际医疗保险 | Adler & Rochefort",
    "desc": "APRIL International MyHealth International：Explore、Essential、Extensive 与 Elite 四档，全球含或不含美国，免赔额最高 5,000 欧元。通过合作经纪获取报价。",
    "eyebrow": "国际医疗保险 · APRIL International",
    "crumb": "APRIL International",
    "h1": "APRIL International：海外人士国际医疗保险",
    "lead": "MyHealth International 是 APRIL International 的国际医疗计划，适合在海外生活超过十二个月的人士。我们是受欧盟监管的保险经纪，也是 APRIL International 的合作伙伴：根据您实际居住的国家配置方案，协助完成健康告知，并在理赔时全程陪同。只需四项信息即可开始。",
    "facts": [
        "四档计划：Explore、Essential、Extensive 与 Elite，均包含住院治疗、癌症治疗以及医疗转运与遣返。",
        "每人年度限额：Explore 为 €/US$ 500,000，Essential 为 €/US$ 1,500,000，Extensive 与 Elite 无上限。",
        "保障区域：全球不含美国，或全球含美国。",
        "适用于居住在国籍国以外的人士。投保年龄：大多数国家为 10 至 74 岁；居住在巴西、智利、中国、哥斯达黎加、香港、日本、墨西哥、新加坡、台湾、泰国、阿联酋、英国或美国者为 16 至 60 岁。",
        "免赔额：无，或 €/US$ 500、1,000、2,500、5,000；门诊共付比例 0%、10%、20% 或 30%。",
        "医疗保障由 Groupama Gan Vie 承保；援助与个人责任由 Chubb European Group SE 承保。对您免费。",
    ],
    "sections": [
        ("MyHealth International 四档计划",
         "<p>先选择住院保障，再按居住国的医疗费用水平选择档次。门诊、牙科与眼科、生育保障仅在需要时添加。</p>[TABLE]"
         "<p>在中国、香港、日本、新加坡和美国就医时，Extensive 与 Elite 的年度限额分别为 €/US$ 2,000,000 和 4,000,000。癌症治疗、慢性病和医疗转运在所有档次均有保障；住院后康复从 20 天（Explore、Essential）到 30 天（Extensive）和 60 天（Elite）。完整限额见 APRIL International 的保障表，我们会随每份方案一并提供。</p>"),
        ("方案如何组合",
         "<ul><li><strong>仅住院，或住院加门诊。</strong>门诊包括全科与专科就诊、药品、检查、理疗和预防保健。</li>"
         "<li><strong>可选：</strong>牙科与眼科；Essential、Extensive 与 Elite 可选生育。</li>"
         "<li><strong>保障区域：</strong>全球含美国或不含美国。不含美国时，在美国临时停留不超过连续 60 天期间的急诊仍可获保。保障区域外的意外与急诊，停留不超过 60 天亦可获保。</li>"
         "<li><strong>免赔额或共付：</strong>选择 €/US$ 500 至 5,000 的年度免赔额，或门诊 10%、20%、30% 的共付比例，可降低保费。</li>"
         "<li><strong>附加保障：</strong>全面遣返援助及私人生活个人责任、危机援助计划和旅行意外保障。</li>"
         "<li><strong>法国公民</strong>可将本计划作为 Caisse des Français de l’Étranger（CFE）的补充保险投保。</li></ul>"
         "<p>保费以欧元或美元支付：按年、半年、季度，或以欧元通过 SEPA 自动扣款按月支付。</p>"),
        ("健康核保与等待期",
         "<p>需填写健康问卷，签署时间不得早于生效日前三个月。APRIL International 可按标准条件承保、附特别条件承保或拒保。投保时被除外的疾病将持续除外，因此如实完整告知才能保障日后的理赔。</p>"
         "<ul><li>常规牙科：3 个月。</li><li>大额牙科及眼科：6 个月。</li><li>生育、基因检测及预防性癌症手术：12 个月。</li><li>辅助生殖：24 个月。</li></ul>"
         "<p>除生育外，如此前有同等保障且终止不足一个月，等待期可获豁免。计划内治疗须事先批准；未经批准，即使事后被认定为必要，也将按 50% 扣减赔付。</p>"),
        ("日常使用",
         "<ul><li><strong>住院直付</strong>，无需垫付。</li>"
         "<li><strong>Easy Claim 应用</strong>：理赔、住院预授权及与顾问沟通；在 SEPA 区域即时转账报销。</li>"
         "<li><strong>Easy Pay Card</strong>：按需发放的数字支付卡，用于影像检查、药品或眼镜等高额门诊费用。</li>"
         "<li><strong>Teladoc Health 远程医疗</strong>：全天候、免费、不限次数，另有第二医疗意见服务。</li>"
         "<li><strong>全球超过 200 万名医疗专业人员</strong>；医院网络取决于计划和国家。</li></ul>"),
        ("APRIL International、Allianz Care 还是 Cigna Global",
         "<p>我们同时是三家公司的合作伙伴，并按相同条件询价。如果您希望精确选择住院保障档次和最高 €/US$ 5,000 的免赔额，或您是向 CFE 缴费的法国公民，或希望享有住院直付和用于高额门诊的支付卡，APRIL International 往往是合适的选择。部分国家的投保年龄更严格，我们会首先核实。美国公民我们配置 <a href='{HUB}cigna-global/'>Cigna Global</a>；仅需欧洲区域的，配置 <a href='{HUB}allianz-care/'>Allianz Care</a>。</p>"),
    ],
    "faq": [
        ("MyHealth International 由谁承保？", "医疗保障由 Groupama Gan Vie 承保，援助与个人责任由 Chubb European Group SE 承保。APRIL International Care France 负责设计与管理该计划。"),
        ("既往病症是否承保？", "不自动承保。您需填写健康问卷，由 APRIL International 确定条件：标准承保、附特别条件或拒保。投保时被除外的疾病将持续除外。"),
        ("美国是否在保障范围内？", "仅在选择全球含美国区域时承保。选择全球不含美国时，在美国临时停留不超过连续 60 天期间的急诊可获保障。"),
        ("是否保障生育？", "Essential、Extensive 与 Elite 可选，等待期 12 个月：每次妊娠 €/US$ 4,000、8,000 或 12,000，分娩并发症时限额更高。"),
        ("最高可在几岁投保？", "大多数国家最高 74 岁；居住在巴西、智利、中国、哥斯达黎加、香港、日本、墨西哥、新加坡、台湾、泰国、阿联酋、英国或美国者最高 60 岁。低于最低年龄的子女可随父母保单投保。"),
    ],
    "form_h2": "申请 APRIL International 报价",
    "form_lead": "只需四项信息。我们将在一个工作日内书面回复，提供为您配置的 APRIL International 方案，必要时同时提供相同条件下的 Allianz Care 与 Cigna Global 方案。",
    "related": [("{HUB}", "海外华人国际医疗保险"), ("{HUB}allianz-care/", "Allianz Care 国际医疗保险"), ("{HUB}cigna-global/", "Cigna Global 国际医疗保险")],
})


# ---------------------------------------------------------------------------
# Hub and UI patches: APRIL International added next to Allianz Care and Cigna
# Global in the existing hub content of every generated language.
# ---------------------------------------------------------------------------
APRIL_CELLS = {
    "en": ["Explore, Essential, Extensive, Elite", "Included in every plan", "Optional", "Essential, Extensive and Elite, after 12 months", "Worldwide excluding or including the US", "No nationality restriction in the terms"],
    "pt": ["Explore, Essential, Extensive, Elite", "Incluída em todos os planos", "Opcional", "Essential, Extensive e Elite, após 12 meses", "Mundo exceto EUA, ou incluindo EUA", "Sem restrição de nacionalidade nas condições"],
    "de": ["Explore, Essential, Extensive, Elite", "In jedem Plan enthalten", "Optional", "Essential, Extensive und Elite, nach 12 Monaten", "Weltweit ohne oder mit USA", "Keine Einschränkung nach Staatsangehörigkeit in den Bedingungen"],
    "es": ["Explore, Essential, Extensive, Elite", "Incluida en todos los planes", "Opcional", "Essential, Extensive y Elite, tras 12 meses", "Mundo sin EE. UU. o con EE. UU.", "Sin restricción de nacionalidad en las condiciones"],
    "nl": ["Explore, Essential, Extensive, Elite", "In elk plan inbegrepen", "Aanvullend", "Essential, Extensive en Elite, na 12 maanden", "Wereldwijd zonder of met VS", "Geen nationaliteitsbeperking in de voorwaarden"],
    "fr": ["Explore, Essential, Extensive, Elite", "Inclus dans chaque contrat", "En option", "Essential, Extensive et Elite, après 12 mois", "Monde hors ou y compris États-Unis", "Pas de restriction de nationalité dans les conditions"],
    "it": ["Explore, Essential, Extensive, Elite", "Incluso in ogni piano", "Facoltative", "Essential, Extensive ed Elite, dopo 12 mesi", "Mondo esclusi o inclusi USA", "Nessuna restrizione di nazionalità nelle condizioni"],
    "pl": ["Explore, Essential, Extensive, Elite", "W każdym planie", "Opcjonalnie", "Essential, Extensive i Elite, po 12 miesiącach", "Świat bez USA lub z USA", "Brak ograniczeń co do obywatelstwa w warunkach"],
    "se": ["Explore, Essential, Extensive, Elite", "Ingår i varje plan", "Tillval", "Essential, Extensive och Elite, efter 12 månader", "Världen utom eller inklusive USA", "Ingen begränsning efter medborgarskap i villkoren"],
    "dk": ["Explore, Essential, Extensive, Elite", "Indeholdt i alle planer", "Tilvalg", "Essential, Extensive og Elite, efter 12 måneder", "Verden uden eller med USA", "Ingen begrænsning efter statsborgerskab i betingelserne"],
    "il": ["Explore, Essential, Extensive, Elite", "כלול בכל תוכנית", "תוספת", "Essential‏, Extensive ו־Elite, אחרי 12 חודשים", "העולם ללא ארה״ב או כולל ארה״ב", "אין הגבלת אזרחות בתנאים"],
    "zh": ["Explore、Essential、Extensive、Elite", "每个计划均包含", "可选", "Essential、Extensive 与 Elite，12 个月后", "全球不含美国或含美国", "条款中无国籍限制"],
}

# (old, new) applied to every string of the hub page and the UI trust strip
HUB_REPL = {
    "pt": [("| Allianz Care e Cigna", "| Allianz Care, Cigna e APRIL"), ("Allianz Care e Cigna Global lado a lado", "Allianz Care, Cigna Global e APRIL International lado a lado"),
           ("parceiro da Allianz Care e da Cigna Global", "parceiro da Allianz Care, da Cigna Global e da APRIL International"), ("com os dois planos configurados para si", "com os planos configurados para si"),
           ("Seguradoras: Allianz Care e Cigna Global, comparadas", "Seguradoras: Allianz Care, Cigna Global e APRIL International, comparadas"),
           ("Somos parceiros das duas seguradoras, por isso não temos de lhe vender uma delas", "Somos parceiros das três seguradoras, por isso não temos de lhe vender nenhuma delas"),
           ("à Allianz Care e à Cigna Global, nas mesmas condições", "à Allianz Care, à Cigna Global e à APRIL International, nas mesmas condições"),
           ("com a Allianz Care e a Cigna Global configuradas para si", "com a Allianz Care, a Cigna Global e a APRIL International configuradas para si"),
           ("Parceiro da Allianz Care e da Cigna Global", "Parceiro da Allianz Care, Cigna Global e APRIL International")],
    "nl": [("| Allianz Care & Cigna", "| Allianz Care, Cigna & APRIL"), ("Allianz Care en Cigna Global naast elkaar", "Allianz Care, Cigna Global en APRIL International naast elkaar"),
           ("partner van Allianz Care en Cigna Global", "partner van Allianz Care, Cigna Global en APRIL International"), ("sturen wij u beide plannen", "sturen wij u de plannen"),
           ("Allianz Care en Cigna Global, op dezelfde voorwaarden vergeleken", "Allianz Care, Cigna Global en APRIL International, op dezelfde voorwaarden vergeleken"),
           ("Wij zijn partner van beide verzekeraars", "Wij zijn partner van alle drie de verzekeraars"),
           ("bij Allianz Care en Cigna Global, op dezelfde voorwaarden", "bij Allianz Care, Cigna Global en APRIL International, op dezelfde voorwaarden"),
           ("met Allianz Care en Cigna Global voor u samengesteld", "met Allianz Care, Cigna Global en APRIL International voor u samengesteld"),
           ("Partner van Allianz Care en Cigna Global", "Partner van Allianz Care, Cigna Global en APRIL International")],
    "fr": [("| Allianz Care & Cigna", "| Allianz Care, Cigna & APRIL"), ("Allianz Care et Cigna Global comparées", "Allianz Care, Cigna Global et APRIL International comparées"),
           ("partenaire d’Allianz Care et de Cigna Global", "partenaire d’Allianz Care, de Cigna Global et d’APRIL International"), ("avec les deux contrats configurés", "avec les contrats configurés"),
           ("Allianz Care et Cigna Global, comparés", "Allianz Care, Cigna Global et APRIL International, comparés"),
           ("Nous sommes partenaires des deux assureurs : nous n’avons pas à vous vendre l’un plutôt que l’autre", "Nous sommes partenaires des trois assureurs : nous n’avons pas à vous vendre l’un plutôt qu’un autre"),
           ("à Allianz Care et à Cigna Global, aux mêmes conditions", "à Allianz Care, à Cigna Global et à APRIL International, aux mêmes conditions"),
           ("avec Allianz Care et Cigna Global configurés pour vous", "avec Allianz Care, Cigna Global et APRIL International configurés pour vous"),
           ("Partenaire d’Allianz Care et de Cigna Global", "Partenaire d’Allianz Care, Cigna Global et APRIL International")],
    "it": [("| Allianz Care e Cigna", "| Allianz Care, Cigna e APRIL"), ("Allianz Care e Cigna Global a confronto", "Allianz Care, Cigna Global e APRIL International a confronto"),
           ("partner di Allianz Care e Cigna Global", "partner di Allianz Care, Cigna Global e APRIL International"), ("con entrambi i piani configurati", "con i piani configurati"),
           ("Allianz Care e Cigna Global, confrontati", "Allianz Care, Cigna Global e APRIL International, confrontati"),
           ("Siamo partner di entrambi gli assicuratori, quindi non dobbiamo venderle uno dei due", "Siamo partner di tutti e tre gli assicuratori, quindi non dobbiamo venderle uno in particolare"),
           ("ad Allianz Care e Cigna Global, alle stesse condizioni", "ad Allianz Care, Cigna Global e APRIL International, alle stesse condizioni"),
           ("con Allianz Care e Cigna Global configurati per lei", "con Allianz Care, Cigna Global e APRIL International configurati per lei"),
           ("Partner di Allianz Care e Cigna Global", "Partner di Allianz Care, Cigna Global e APRIL International")],
    "pl": [("| Allianz Care i Cigna", "| Allianz Care, Cigna i APRIL"), ("Allianz Care i Cigna Global obok siebie", "Allianz Care, Cigna Global i APRIL International obok siebie"),
           ("partnerem Allianz Care oraz Cigna Global", "partnerem Allianz Care, Cigna Global oraz APRIL International"), ("z oboma planami dobranymi", "z planami dobranymi"),
           ("Allianz Care i Cigna Global, porównani", "Allianz Care, Cigna Global i APRIL International, porównani"),
           ("Jesteśmy partnerem obu ubezpieczycieli, więc nie musimy sprzedawać Ci jednego z nich", "Jesteśmy partnerem wszystkich trzech ubezpieczycieli, więc nie musimy sprzedawać Ci żadnego z nich"),
           (" Allianz Care i Cigna Global, na tych samych warunkach", " Allianz Care, Cigna Global i APRIL International, na tych samych warunkach"),
           ("z Allianz Care i Cigna Global dobranymi", "z Allianz Care, Cigna Global i APRIL International dobranymi"),
           ("Partner Allianz Care i Cigna Global", "Partner Allianz Care, Cigna Global i APRIL International")],
    "se": [("| Allianz Care & Cigna", "| Allianz Care, Cigna & APRIL"), ("Allianz Care och Cigna Global sida vid sida", "Allianz Care, Cigna Global och APRIL International sida vid sida"),
           ("partner till Allianz Care och Cigna Global", "partner till Allianz Care, Cigna Global och APRIL International"), ("med båda planerna anpassade", "med planerna anpassade"),
           ("Allianz Care och Cigna Global, jämförda", "Allianz Care, Cigna Global och APRIL International, jämförda"),
           ("Vi är partner till båda försäkringsbolagen och behöver inte sälja det ena", "Vi är partner till alla tre försäkringsbolagen och behöver inte sälja något av dem"),
           ("från Allianz Care och Cigna Global på samma villkor", "från Allianz Care, Cigna Global och APRIL International på samma villkor"),
           ("med Allianz Care och Cigna Global anpassade", "med Allianz Care, Cigna Global och APRIL International anpassade"),
           ("Partner till Allianz Care och Cigna Global", "Partner till Allianz Care, Cigna Global och APRIL International")],
    "dk": [("| Allianz Care & Cigna", "| Allianz Care, Cigna & APRIL"), ("Allianz Care og Cigna Global side om side", "Allianz Care, Cigna Global og APRIL International side om side"),
           ("partner af Allianz Care og Cigna Global", "partner af Allianz Care, Cigna Global og APRIL International"), ("med begge planer tilpasset", "med planerne tilpasset"),
           ("Allianz Care og Cigna Global, sammenlignet", "Allianz Care, Cigna Global og APRIL International, sammenlignet"),
           ("Vi er partner af begge selskaber og behøver ikke sælge dig det ene", "Vi er partner af alle tre selskaber og behøver ikke sælge dig et bestemt"),
           ("fra Allianz Care og Cigna Global på samme vilkår", "fra Allianz Care, Cigna Global og APRIL International på samme vilkår"),
           ("med Allianz Care og Cigna Global tilpasset dig", "med Allianz Care, Cigna Global og APRIL International tilpasset dig"),
           ("Partner af Allianz Care og Cigna Global", "Partner af Allianz Care, Cigna Global og APRIL International")],
    "il": [("| Allianz Care ו־Cigna", "| Allianz Care‏, Cigna ו־APRIL"), ("Allianz Care ו־Cigna Global זו לצד זו", "Allianz Care‏, Cigna Global ו־APRIL International זו לצד זו"),
           ("ושותפים של Allianz Care ו־Cigna Global", "ושותפים של Allianz Care‏, Cigna Global ו־APRIL International"), ("עם שתי התוכניות מותאמות לכם", "עם התוכניות מותאמות לכם"),
           ("Allianz Care ו־Cigna Global, בהשוואה", "Allianz Care‏, Cigna Global ו־APRIL International, בהשוואה"),
           ("אנחנו שותפים של שתי החברות", "אנחנו שותפים של שלוש החברות"),
           (" מ־Allianz Care ומ־Cigna Global, באותם תנאים", " מ־Allianz Care‏, מ־Cigna Global ומ־APRIL International, באותם תנאים"),
           ("עם Allianz Care ו־Cigna Global מותאמות לכם", "עם Allianz Care‏, Cigna Global ו־APRIL International מותאמות לכם"),
           ("שותפים של Allianz Care ו־Cigna Global", "שותפים של Allianz Care‏, Cigna Global ו־APRIL International")],
    "zh": [("| Allianz Care 与 Cigna Global", "| Allianz Care、Cigna Global 与 APRIL"), ("Allianz Care 与 Cigna Global 并列比较", "Allianz Care、Cigna Global 与 APRIL International 并列比较"),
           ("也是 Allianz Care 与 Cigna Global 的合作伙伴", "也是 Allianz Care、Cigna Global 与 APRIL International 的合作伙伴"), ("为您提供两家公司的配置方案", "为您提供各家公司的配置方案"),
           ("Allianz Care 与 Cigna Global，按相同条件比较", "Allianz Care、Cigna Global 与 APRIL International，按相同条件比较"),
           ("我们同时是两家公司的合作伙伴，因此无需向您推销其中一家", "我们同时是三家公司的合作伙伴，因此无需向您推销其中任何一家"),
           ("向 Allianz Care 和 Cigna Global 按相同条件询价", "向 Allianz Care、Cigna Global 和 APRIL International 按相同条件询价"),
           ("提供为您配置的 Allianz Care 和 Cigna Global 方案", "提供为您配置的 Allianz Care、Cigna Global 和 APRIL International 方案"),
           ("Allianz Care 与 Cigna Global 合作伙伴", "Allianz Care、Cigna Global 与 APRIL International 合作伙伴")],
    "en": [("Appointed by Allianz Care and Cigna Global", "Appointed by Allianz Care, Cigna Global and APRIL International")],
    "de": [("Partner von Allianz Care und Cigna Global", "Partner von Allianz Care, Cigna Global und APRIL International")],
    "es": [("Socios de Allianz Care y Cigna Global", "Socios de Allianz Care, Cigna Global y APRIL International")],
}
HEADING = {"pt": ("Allianz Care ou Cigna Global", "Allianz Care, Cigna Global ou APRIL International"),
           "nl": ("Allianz Care of Cigna Global", "Allianz Care, Cigna Global of APRIL International"),
           "fr": ("Allianz Care ou Cigna Global", "Allianz Care, Cigna Global ou APRIL International"),
           "it": ("Allianz Care o Cigna Global", "Allianz Care, Cigna Global o APRIL International"),
           "pl": ("Allianz Care czy Cigna Global", "Allianz Care, Cigna Global czy APRIL International"),
           "se": ("Allianz Care eller Cigna Global", "Allianz Care, Cigna Global eller APRIL International"),
           "dk": ("Allianz Care eller Cigna Global", "Allianz Care, Cigna Global eller APRIL International"),
           "il": ("Allianz Care או Cigna Global", "Allianz Care‏, Cigna Global או APRIL International"),
           "zh": ("Allianz Care 还是 Cigna Global", "Allianz Care、Cigna Global 还是 APRIL International")}

import copy as _copy
import re as _re

_USED = {}


def _sub(lang, s):
    for a, b in HUB_REPL.get(lang, []):
        if a in s:
            _USED.setdefault(lang, set()).add(a)
            s = s.replace(a, b)
    return s


def _walk(lang, v):
    if isinstance(v, str):
        return _sub(lang, v)
    if isinstance(v, list):
        return [_walk(lang, x) for x in v]
    if isinstance(v, tuple):
        return tuple(_walk(lang, x) for x in v)
    if isinstance(v, dict):
        return {k: _walk(lang, x) for k, x in v.items()}
    return v


def _add_column(lang, body):
    cells = iter(APRIL_CELLS[lang])
    body = body.replace("<th>Cigna Global</th></tr>", "<th>Cigna Global</th><th>APRIL International</th></tr>", 1)

    def row(m):
        return m.group(1) + f"<td>{next(cells)}</td></tr>"
    body = _re.sub(r"(<tr><td>[^<]*</td><td>[^<]*</td><td>[^<]*</td>)</tr>", row, body)
    return _re.sub(r'(<a href="\{HUB\}cigna-global/">Cigna Global</a>)([.。])</p>',
                   r'\1 · <a href="{HUB}april-international/">APRIL International</a>\2</p>', body)


def _related_label(lang, related):
    for u, t in related:
        if u.endswith("allianz-care/"):
            return t.replace("Allianz Care", "APRIL International")
    return "APRIL International"


def patch_ui(lang, ui):
    ui = _copy.deepcopy(ui)
    ui["form"]["trust"] = [_sub(lang, t) for t in ui["form"]["trust"]]
    return ui


def patch_page(lang, kind, page, cigna_related):
    """Return a copy of an existing page dict with APRIL International added."""
    if page is None:
        return None
    page = _copy.deepcopy(page)
    lab = _related_label(lang, cigna_related)
    link = ("{HUB}april-international/", lab)
    if kind == "hub":
        page = _walk(lang, page)
        secs = []
        for h, b in page["sections"]:
            if lang in HEADING and h == HEADING[lang][0] and "<table" in b:
                h, b = HEADING[lang][1], _add_column(lang, b)
            secs.append((h, b))
        page["sections"] = secs
    rel = list(page["related"])
    if not any(u.endswith("april-international/") for u, _ in rel):
        idx = max([i for i, (u, _) in enumerate(rel) if u.endswith(("cigna-global/", "allianz-care/"))] + [len(rel) - 1]) + 1
        rel.insert(idx, link)
    page["related"] = rel
    return page
