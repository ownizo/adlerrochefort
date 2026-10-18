"""Português (PT-PT): página principal de saúde internacional + Allianz Care + Cigna Global.

Estatuto nas páginas em português: "agente de seguros" (decisão do Hugo).
"""
UI = {
    "home": "Início",
    "hub": "Seguro de saúde internacional",
    "meta": "Agente de seguros registado na ASF n.º 425591790/3 · Lisboa · Lagos · Revisto a 18 de outubro de 2026",
    "author": "Escrito e revisto por <strong>Hugo Gonçalves</strong>, fundador e especialista em gestão de risco da Adler &amp; Rochefort. Licenciado em Gestão de Empresas (University of Hertfordshire) e em formação contínua no Chartered Insurance Institute (CII), Londres.",
    "lang_policy": None,
    "facts_h2": "Em resumo",
    "faq_h2": "Perguntas frequentes",
    "related_h2": "Páginas relacionadas",
    "cta": "Pedir proposta por escrito",
    "form": {
        "hp": "Não preencher:",
        "name": "Nome completo *", "name_ph": "Como consta no passaporte",
        "dob": "Data de nascimento *",
        "nat": "Nacionalidade *", "nat_ph": "Escolha a nacionalidade",
        "country": "País onde vai viver *", "country_ph": "Escolha o país",
        "state": "Estado dos EUA onde vive *", "state_ph": "Escolha o estado",
        "us_note": "Para cidadãos norte-americanos apresentamos a Cigna Global, que aceita americanos a viver fora dos Estados Unidos. O estado é necessário por razões fiscais.",
        "same_note": "Os planos internacionais destinam-se a quem vive fora do país da sua nacionalidade. Envie o pedido na mesma: se tiver outra nacionalidade ou houver outra solução, dizemos-lhe.",
        "email": "Email *", "email_ph": "Para onde enviamos as propostas",
        "phone": "WhatsApp", "phone_ph": "Opcional, com indicativo",
        "submit": "Pedir proposta",
        "small": "Os seus dados servem apenas para preparar a proposta, nos termos do RGPD. Consulte a nossa <a href=\"/politica-de-privacidade/\">política de privacidade</a>.",
        "success_h": "Obrigado",
        "success_p": "Respondemos por escrito no prazo de um dia útil.",
        "trust": ["Agente de seguros registado na ASF", "Parceiro da Allianz Care e da Cigna Global", "Aconselhamento por escrito", "Sem custos para si"],
    },
    "table_note": "Prémios indicativos, antes da análise clínica. O prémio final é fixado pela seguradora com os seus dados e confirmado por escrito antes de decidir.",
}

HUB = {
    "title": "Seguro de Saúde Internacional para Expatriados | Allianz Care e Cigna",
    "desc": "Seguro de saúde internacional (IPMI) para quem vive fora do seu país: Allianz Care e Cigna Global lado a lado, regras de elegibilidade e prémios reais de 2026.",
    "eyebrow": "Seguro de saúde internacional · em qualquer país",
    "crumb": None,
    "h1": "Seguro de saúde internacional para expatriados, em qualquer país",
    "lead": "Mudar-se do Brasil para Lisboa ou para Singapura, de Lisboa para o Dubai, de Israel ou dos Estados Unidos para a Europa? Um seguro de saúde internacional (IPMI) acompanha a pessoa, não a morada. Somos agente de seguros registado na ASF e parceiro da Allianz Care e da Cigna Global. Com quatro dados respondemos por escrito com os dois planos configurados para si.",
    "facts": [
        "Seguradoras: Allianz Care e Cigna Global, comparadas nas mesmas condições.",
        "Cidadãos norte-americanos: Cigna Global (a Allianz Care não os aceita).",
        "Elegibilidade: viver fora do país da sua nacionalidade; a apólice segue o país onde passa a maior parte do ano.",
        "Para cotar: nome completo, data de nascimento, nacionalidade e país onde vai viver (e o estado, para norte-americanos). Não é preciso morada fiscal em Portugal.",
        "Prémios reais de 2026: de 5.241 € por ano (64 anos, Europa, só hospitalização) a 39.634 € (família de cinco, mundo exceto EUA, nível máximo).",
        "Sem custos para si; resposta por escrito num dia útil.",
    ],
    "sections": [
        ("O que é um seguro de saúde internacional",
         "<p>É um seguro de saúde privado para quem vive fora do país da sua nacionalidade. Em vez de uma rede hospitalar nacional, escolhe uma área geográfica (Europa, mundo exceto Estados Unidos, ou mundo incluindo Estados Unidos) e pode ser tratado em hospitais e médicos reconhecidos dentro dessa área. Os tratamentos hospitalares programados são normalmente pré-autorizados e pagos diretamente pela seguradora, e a apólice continua consigo se voltar a mudar de país.</p>"
         "<p>Não é um seguro de viagem. O seguro de viagem cobre urgências durante uma viagem e termina quando regressa. Um plano internacional é o seu seguro de saúde principal: internamentos, cirurgias, tratamento oncológico, especialistas e, se os escolher, consultas, estomatologia, maternidade e evacuação médica.</p>"),
        ("Como se constrói um plano internacional",
         "<ol><li><strong>Área de cobertura.</strong> Europa, mundo exceto EUA, ou mundo incluindo EUA. Incluir os Estados Unidos é o que mais pesa no prémio.</li>"
         "<li><strong>Nível base.</strong> A parte hospitalar: internamento, ambulatório hospitalar, cirurgia, cuidados intensivos, oncologia e o limite anual aplicável.</li>"
         "<li><strong>Coberturas opcionais.</strong> Consultas e meios de diagnóstico, estomatologia e oftalmologia, evacuação médica e bem-estar, só se as for usar.</li>"
         "<li><strong>Franquia.</strong> O valor que paga antes de a seguradora pagar. Uma franquia mais alta baixa o prémio.</li>"
         "<li><strong>Análise clínica.</strong> Declara o seu historial e a seguradora fixa as condições: uma doença pré-existente pode ser coberta, excluída ou coberta com agravamento. Declarar tudo é o que protege um sinistro futuro.</li></ol>"),
        ("Allianz Care ou Cigna Global",
         "<p>Somos parceiros das duas seguradoras, por isso não temos de lhe vender uma delas. São construídas de forma diferente e a melhor escolha depende da família, da área de cobertura e do historial clínico.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th></th><th>Allianz Care</th><th>Cigna Global</th></tr></thead><tbody>"
         "<tr><td>Níveis</td><td>Base, Enhanced, Signature</td><td>Silver, Gold, Platinum</td></tr>"
         "<tr><td>Repatriação / evacuação</td><td>Incluída em todos os planos</td><td>Módulo opcional</td></tr>"
         "<tr><td>Consultas (ambulatório)</td><td>Opcional</td><td>Módulo opcional</td></tr>"
         "<tr><td>Maternidade</td><td>Enhanced e Signature, após 12 meses</td><td>Gold e Platinum, após 12 meses</td></tr>"
         "<tr><td>Área de cobertura</td><td>Opção só Europa, mais opções mundiais</td><td>Mundo exceto EUA, ou incluindo EUA</td></tr>"
         "<tr><td>Cidadãos norte-americanos</td><td>Não aceita</td><td>Aceita</td></tr>"
         "</tbody></table></div>"
         "<p>Em detalhe: <a href=\"{HUB}allianz-care/\">Allianz Care</a> · <a href=\"{HUB}cigna-global/\">Cigna Global</a>.</p>"),
        ("Posso ter cobertura internacional onde vou viver?",
         "<p>Na maioria dos países, sim. Há três regras que verificamos logo no primeiro dia:</p>"
         "<ol><li><strong>Viver fora do país da sua nacionalidade.</strong> Um cidadão português a viver em Portugal, por exemplo, normalmente não é elegível. Quem tem dupla nacionalidade deve indicar as duas.</li>"
         "<li><strong>Conta o país de residência principal</strong>, onde passa a maior parte do ano, e não onde está registado.</li>"
         "<li><strong>Alguns países exigem seguro local</strong>, de uma seguradora licenciada no país: por exemplo o Brasil, a Arábia Saudita, os Emirados Árabes Unidos e a China continental. Os residentes nos EUA precisam de um seguro conforme as regras americanas.</li></ol>"),
        ("Seguro internacional ou seguro português?",
         "<p>Para quem já vive em Portugal, um seguro de saúde português pode ser a resposta certa. Mas os seguros domésticos excluem, em regra, as doenças pré-existentes e não aceitam novas adesões acima dos 65 anos. Nesses casos, o seguro internacional é a alternativa, sujeita a análise clínica. Também é a escolha natural para quem passa o ano entre vários países ou quer ser tratado fora de Portugal.</p>"),
        ("Quanto custa: propostas reais",
         "<p>Propostas reais que obtivemos para clientes em setembro e outubro de 2026, anonimizadas, sem franquia.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th>Perfil</th><th>Área</th><th>Seguradora</th><th>Prémio anual, do nível de entrada ao máximo</th></tr></thead><tbody>"
         "<tr><td>Uma pessoa, 64 anos, a viver em Portugal</td><td>Europa</td><td>Allianz Care</td><td>5.241 € (Base, só hospitalização) a 14.027 € (Signature, com consultas)</td></tr>"
         "<tr><td>Uma pessoa, 43 anos, a viver em Portugal</td><td>Mundo</td><td>Allianz Care</td><td>8.818 € (Base) a 16.641 € (Signature), com consultas e estomatologia</td></tr>"
         "<tr><td>Casal, 55 e 59 anos, a viver em Portugal</td><td>Mundo exceto EUA</td><td>Cigna Global</td><td>15.951 € (Silver) a 31.904 € (Platinum), todos os módulos, pagamento mensal</td></tr>"
         "<tr><td>Família de cinco: dois adultos com cerca de 40 anos e três crianças com menos de 8</td><td>Mundo exceto EUA</td><td>Cigna Global</td><td>19.769 € (Silver) a 39.634 € (Platinum), todos os módulos</td></tr>"
         "<tr><td>Casal norte-americano, 67 e 68 anos, a mudar-se para Portugal</td><td>Mundo exceto EUA</td><td>Cigna Global</td><td>24.597 US$ (Silver) a 47.963 US$ (Platinum)</td></tr>"
         "</tbody></table></div>"),
        ("Como funciona",
         "<ol><li><strong>Envia quatro dados:</strong> nome, data de nascimento, nacionalidade e país onde vai viver.</li>"
         "<li><strong>Confirmamos a elegibilidade e pedimos as propostas</strong> à Allianz Care e à Cigna Global, nas mesmas condições.</li>"
         "<li><strong>Escolhe, com o nosso parecer por escrito.</strong> Explicamos as diferenças que contam para si.</li>"
         "<li><strong>Proposta clínica e apólice.</strong> Acompanhamos o preenchimento, a seguradora analisa e emite a apólice e o certificado. Sinistros, renovações e mudanças de país passam por nós.</li></ol>"),
    ],
    "faq": [
        ("Preciso de morada em Portugal para ter um seguro internacional?", "Não. Para cotar pedimos apenas nome completo, data de nascimento, nacionalidade e o país onde vai viver. A apólice é baseada no seu país de residência principal, onde quer que seja."),
        ("Sou brasileiro e vou viver na Europa. Posso ter um seguro internacional?", "Sim, se for viver fora do Brasil. O que não é possível é ter um plano internacional como residente no Brasil, porque o país exige seguro de uma seguradora local."),
        ("O seguro internacional cobre doenças pré-existentes?", "Depende da análise clínica. A seguradora pode cobrir, excluir ou cobrir com agravamento. Ao contrário dos seguros domésticos portugueses, que em regra as excluem, há margem para negociar."),
        ("Qual é a diferença para um seguro de viagem?", "O seguro de viagem cobre urgências durante uma viagem e termina quando regressa. O seguro internacional é o seu seguro de saúde principal durante todo o ano, incluindo tratamentos programados."),
        ("Quanto custa o vosso serviço?", "Nada. Somos remunerados pela seguradora. A proposta, a comparação, a adesão e o apoio nos sinistros não têm custos para si."),
    ],
    "form_h2": "Peça a sua proposta de seguro de saúde internacional",
    "form_lead": "Quatro dados chegam para começar. Respondemos por escrito num dia útil, com a Allianz Care e a Cigna Global configuradas para si.",
    "related": [("{HUB}allianz-care/", "Allianz Care: seguro de saúde internacional"), ("{HUB}cigna-global/", "Cigna Global: seguro de saúde internacional"),
                ("/blog/allianz-care-vs-cigna-global-seguro-saude-internacional/", "Allianz Care ou Cigna Global: comparação"),
                ("/seguros/saude/", "Seguro de saúde em Portugal"), ("/blog/plano-de-saude-portugal-brasileiros/", "Plano de saúde em Portugal para brasileiros"), ("/seguros/saude/cobertura-cancro/", "Cancro e seguro de saúde")],
}

ALLIANZ = {
    "title": "Allianz Care: Seguro de Saúde Internacional | Adler & Rochefort",
    "desc": "Allianz Care para expatriados: planos Base, Enhanced e Signature, cobertura Europa ou mundo, prémios reais de 2026. Proposta através de um agente parceiro.",
    "eyebrow": "Seguro de saúde internacional · Allianz Care",
    "crumb": "Allianz Care",
    "h1": "Allianz Care: seguro de saúde internacional para expatriados",
    "lead": "A Allianz Care é a marca de saúde internacional da Allianz Partners. Somos agente de seguros registado na ASF e parceiro da Allianz Care: configuramos o plano para o país onde vive, acompanhamos a proposta clínica e estamos consigo quando houver um sinistro. Quatro dados chegam para começar.",
    "facts": [
        "Planos: Base, Enhanced e Signature, todos com internamento, quarto particular e repatriação médica incluídos.",
        "Para pessoas e famílias que vivem fora do país da sua nacionalidade, durante pelo menos doze meses.",
        "Área de cobertura: opção só Europa, mais opções mundiais.",
        "Não disponível para cidadãos norte-americanos nem para residentes no Brasil. Os americanos ficam na <a href=\"{HUB}cigna-global/\">Cigna Global</a>.",
        "Prémios reais de 2026: a partir de 5.241 € por ano (64 anos, Europa, só hospitalização).",
        "Para cotar: nome completo, data de nascimento, nacionalidade e país onde vai viver. Sem custos para si.",
    ],
    "sections": [
        ("A gama Allianz Care",
         "<p>Em novembro de 2025 a Allianz Care lançou uma nova gama para pessoas e famílias que vivem no estrangeiro há pelo menos doze meses. A base é completa e acrescenta-se o dia a dia conforme a forma como usa os cuidados de saúde.</p>"
         "<ul><li><strong>Três planos: Base, Enhanced e Signature.</strong> Todos incluem internamento, quarto particular e repatriação médica.</li>"
         "<li><strong>Maternidade</strong> no Enhanced e no Signature, após doze meses de carência.</li>"
         "<li><strong>Consultas e estomatologia</strong> como coberturas opcionais.</li>"
         "<li><strong>Rastreios oncológicos, check-ups e terapêutica hormonal de substituição</strong> em toda a gama; psiquiatria e psicoterapia em ambulatório sem período de carência.</li>"
         "<li><strong>Área só Europa</strong>, ao lado das opções mundiais, útil quando a sua vida é na Europa e não precisa de cobertura nos Estados Unidos.</li></ul>"
         "<p>Limites, carências e exclusões variam por nível e constam da tabela de benefícios da Allianz Care, que enviamos com cada proposta.</p>"),
        ("Para quem é a Allianz Care",
         "<p>É muitas vezes o plano certo para uma família cuja vida é sobretudo na Europa ou na Ásia, que quer internamento, quarto particular e repatriação incluídos desde o início e que valoriza uma gestão de sinistros consistente. Na nossa experiência, a Allianz Care destaca-se pela solidez da proteção, pelo apoio ao cliente e pela gestão de sinistros.</p>"
         "<p>Também é uma escolha natural para quem se muda dentro da Europa e quer uma só apólice que o acompanhe se voltar a mudar de país.</p>"),
        ("Quem não pode ter Allianz Care",
         "<ul><li><strong>Cidadãos norte-americanos.</strong> A Allianz Care não os aceita. Para americanos a viver fora dos EUA configuramos a <a href=\"{HUB}cigna-global/\">Cigna Global</a>.</li>"
         "<li><strong>Residentes no Brasil.</strong> O Brasil exige seguro de uma seguradora licenciada no país. Um brasileiro que vá viver fora do Brasil pode ter Allianz Care.</li>"
         "<li><strong>Quem vive no seu próprio país.</strong> Os planos internacionais destinam-se a expatriados.</li></ul>"),
        ("Quanto custa: propostas reais",
         "<p>Propostas reais que obtivemos para clientes em setembro e outubro de 2026, anonimizadas, sem franquia.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th>Perfil</th><th>Área</th><th>Prémio anual, do nível de entrada ao máximo</th></tr></thead><tbody>"
         "<tr><td>Uma pessoa, 64 anos, a viver em Portugal</td><td>Europa</td><td>5.241 € (Base, só hospitalização) a 14.027 € (Signature, com consultas)</td></tr>"
         "<tr><td>Uma pessoa, 43 anos, a viver em Portugal</td><td>Mundo</td><td>8.818 € (Base) a 16.641 € (Signature), com consultas e estomatologia</td></tr>"
         "</tbody></table></div>"
         "<p>O prémio depende do nível, da área e das coberturas opcionais. A área só Europa e a cobertura só hospitalar são o que mais o reduz.</p>"),
        ("Historial clínico e análise da seguradora",
         "<p>Declara o seu historial e a Allianz Care fixa as condições: uma doença pré-existente pode ser coberta, excluída ou coberta com agravamento. Ajudamos a preencher a proposta com clareza e explicamos a decisão antes de a aceitar. Se as condições não servirem, pedimos à <a href=\"{HUB}cigna-global/\">Cigna Global</a> as suas condições para o mesmo historial.</p>"),
        ("Porquê através da Adler &amp; Rochefort",
         "<ul><li><strong>Uma segunda opinião incluída.</strong> Somos também parceiros da Cigna Global e mostramos as duas nas mesmas condições.</li>"
         "<li><strong>Um só interlocutor</strong>, da proposta ao sinistro.</li>"
         "<li><strong>Regulados na UE.</strong> A Adler &amp; Rochefort é a marca da Ownizo, Unipessoal Lda., registada na ASF com o n.º 425591790/3.</li>"
         "<li><strong>Sem custos para si.</strong> Somos remunerados pela seguradora.</li></ul>"),
    ],
    "faq": [
        ("A Allianz Care é o mesmo que o seguro de saúde Allianz em Portugal?", "Não. A Allianz Care é a marca internacional da Allianz Partners, para quem vive fora do país da sua nacionalidade, com cobertura na Europa ou no mundo. O seguro de saúde Allianz em Portugal é um seguro doméstico, com rede hospitalar portuguesa."),
        ("Um cidadão norte-americano pode ter Allianz Care?", "Não. A Allianz Care não aceita cidadãos norte-americanos. Para estes clientes configuramos a Cigna Global."),
        ("A maternidade está coberta?", "No Enhanced e no Signature, após doze meses de cobertura. Se planeia um filho, escolha esse nível desde o início, porque a carência conta a partir do primeiro dia."),
        ("As doenças pré-existentes estão cobertas?", "Depende da análise clínica: a Allianz Care pode cobrir, excluir ou cobrir com agravamento. Explicamos a decisão antes de aceitar a apólice."),
        ("O que precisam para cotar?", "Nome completo, data de nascimento, nacionalidade e país onde vai viver. Respondemos por escrito num dia útil."),
    ],
    "form_h2": "Peça a sua proposta Allianz Care",
    "form_lead": "Quatro dados chegam para começar. Respondemos por escrito num dia útil, com a Allianz Care configurada para si e, quando ajudar, a Cigna Global nas mesmas condições.",
    "related": [("{HUB}", "Seguro de saúde internacional para expatriados"), ("{HUB}cigna-global/", "Cigna Global: seguro de saúde internacional"),
                ("/blog/allianz-care-vs-cigna-global-seguro-saude-internacional/", "Allianz Care ou Cigna Global: comparação"), ("/seguros/saude/", "Seguro de saúde em Portugal"), ("/seguros/saude/cobertura-cancro/", "Cancro e seguro de saúde")],
}

CIGNA = {
    "title": "Cigna Global: Seguro de Saúde Internacional | Adler & Rochefort",
    "desc": "Cigna Global para expatriados e cidadãos norte-americanos fora dos EUA: Silver, Gold e Platinum, módulos, franquias, prémios reais de 2026.",
    "eyebrow": "Seguro de saúde internacional · Cigna Global",
    "crumb": "Cigna Global",
    "h1": "Cigna Global: seguro de saúde internacional para expatriados",
    "lead": "A Cigna Global é o plano internacional individual da Cigna Healthcare, construído módulo a módulo. É também o plano para cidadãos norte-americanos que vivem fora dos Estados Unidos. Somos agente de seguros registado na ASF e parceiro da Cigna Global: montamos o plano consigo, acompanhamos a proposta e estamos consigo nos sinistros.",
    "facts": [
        "Níveis: Silver, Gold e Platinum, com módulos opcionais acrescentados um a um.",
        "Área de cobertura: mundo exceto Estados Unidos, ou mundo incluindo Estados Unidos.",
        "Aceita cidadãos norte-americanos a viver fora dos EUA. A Allianz Care não aceita.",
        "Franquias hospitalares de 275 € a 7.400 €; 10% de desconto no pagamento anual.",
        "Prémios reais de 2026: casal de 55 e 59 anos, mundo exceto EUA, a partir de 15.951 € por ano.",
        "Para cotar: nome completo, data de nascimento, nacionalidade, país onde vai viver e, para norte-americanos, o estado. Sem custos para si.",
    ],
    "sections": [
        ("Como é construída a Cigna Global",
         "<ul><li><strong>Três níveis base: Silver, Gold e Platinum.</strong> A base cobre internamentos, tratamento de especialidade em meio hospitalar, oncologia e psiquiatria em internamento. O Platinum tem o limite anual mais elevado, sem teto fixo.</li>"
         "<li><strong>Quatro módulos opcionais:</strong> International Outpatient (consultas), International Medical Evacuation (evacuação médica), International Health and Wellbeing (bem-estar) e International Vision and Dental (oftalmologia e estomatologia).</li>"
         "<li><strong>Área de cobertura:</strong> mundo exceto EUA, ou mundo incluindo EUA.</li>"
         "<li><strong>Franquia e copagamento:</strong> escolhe a franquia e pode acrescentar uma percentagem de copagamento com um máximo anual a seu cargo.</li>"
         "<li><strong>Maternidade</strong> no Gold e no Platinum, após doze meses de cobertura da mãe.</li></ul>"
         "<p>A vantagem é a flexibilidade: um nível alto com franquia elevada para proteção contra as grandes despesas, ou um plano completo com consultas e estomatologia para o dia a dia.</p>"),
        ("Os Estados Unidos na cobertura",
         "<p>Incluir os Estados Unidos é o que mais pesa no prémio. Os planos que excluem os EUA incluem na mesma o tratamento hospitalar urgente lá, até 75.000 € no Silver e 200.000 € no Gold, e na totalidade no Platinum. Quando o país da sua nacionalidade está dentro da área de cobertura, as estadias temporárias lá estão cobertas até 180 dias por ano de apólice.</p>"),
        ("Cidadãos norte-americanos a viver fora dos EUA",
         "<p>A Cigna Global aceita cidadãos norte-americanos que vivem fora dos Estados Unidos, por isso é o plano que configuramos para famílias americanas que se mudam para Portugal, Espanha ou outro país. Pedimos o estado onde vive ou viveu por último porque a Cigna precisa dele por razões fiscais.</p>"),
        ("Quanto custa: propostas reais",
         "<p>Propostas reais que obtivemos para clientes em setembro e outubro de 2026, anonimizadas, sem franquia.</p>"
         "<div class=\"ipmi-table\"><table><thead><tr><th>Perfil</th><th>Área</th><th>Prémio anual, do Silver ao Platinum</th></tr></thead><tbody>"
         "<tr><td>Casal, 55 e 59 anos, a viver em Portugal</td><td>Mundo exceto EUA</td><td>15.951 € a 31.904 €, todos os módulos, pagamento mensal</td></tr>"
         "<tr><td>Família de cinco: dois adultos com cerca de 40 anos e três crianças com menos de 8</td><td>Mundo exceto EUA</td><td>19.769 € a 39.634 €, todos os módulos</td></tr>"
         "<tr><td>Casal norte-americano, 67 e 68 anos, a mudar-se para Portugal</td><td>Mundo exceto EUA</td><td>24.597 US$ (Silver), 35.738 US$ (Gold), 47.963 US$ (Platinum)</td></tr>"
         "</tbody></table></div>"),
        ("Como baixar o prémio",
         "<ul><li>Deixar os Estados Unidos fora da área de cobertura.</li>"
         "<li>Acrescentar franquia: franquias hospitalares de 275 € a 7.400 € e de consultas de 110 € a 1.100 €.</li>"
         "<li>Escolher só os módulos que vai usar.</li>"
         "<li>Pagar anualmente: a Cigna Global dá 10% de desconto face ao pagamento mensal.</li></ul>"
         "<p>Se o seguro for para um visto, veja primeiro a franquia: alguns consulados não aceitam copagamentos, por isso o plano tem de ser configurado a pensar no visto.</p>"),
        ("Historial clínico e análise da seguradora",
         "<p>A Cigna Global analisa um questionário clínico e pode cobrir, excluir ou agravar uma doença pré-existente. As condições para o mesmo historial podem ser diferentes das da <a href=\"{HUB}allianz-care/\">Allianz Care</a>, uma das razões para fazer a adesão através de quem trabalha com as duas.</p>"),
    ],
    "faq": [
        ("Um cidadão norte-americano pode ter Cigna Global?", "Sim, desde que viva fora dos Estados Unidos. É o plano internacional que configuramos para clientes americanos; a Allianz Care não os aceita."),
        ("Um plano sem cobertura nos EUA paga alguma coisa nos Estados Unidos?", "Sim, tratamento hospitalar urgente, até 75.000 € no Silver e 200.000 € no Gold, e na totalidade no Platinum."),
        ("Posso ser tratado no meu país de origem?", "Se o país da sua nacionalidade estiver dentro da área de cobertura, as estadias temporárias lá estão cobertas até 180 dias por ano de apólice. Os planos internacionais não se destinam a quem vive no próprio país."),
        ("Quanto se poupa com uma franquia?", "Depende da idade e do plano, mas a franquia é a principal alavanca do prémio. Cotamos com e sem franquia para ver a diferença."),
        ("O que precisam para cotar?", "Nome completo, data de nascimento, nacionalidade, país onde vai viver e, para norte-americanos, o estado. Respondemos por escrito num dia útil."),
    ],
    "form_h2": "Peça a sua proposta Cigna Global",
    "form_lead": "Quatro dados chegam para começar. Respondemos por escrito num dia útil, com a Cigna Global configurada para si e, se for elegível, a Allianz Care nas mesmas condições.",
    "related": [("{HUB}", "Seguro de saúde internacional para expatriados"), ("{HUB}allianz-care/", "Allianz Care: seguro de saúde internacional"),
                ("/blog/allianz-care-vs-cigna-global-seguro-saude-internacional/", "Allianz Care ou Cigna Global: comparação"), ("/blog/plano-de-saude-portugal-brasileiros/", "Plano de saúde em Portugal para brasileiros"), ("/seguros/saude/cobertura-cancro/", "Cancro e seguro de saúde")],
}
