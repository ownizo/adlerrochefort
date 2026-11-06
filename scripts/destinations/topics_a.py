# Topic pages: holiday homes PT / ES (rebuild value from EUR 500,000), health PT & ES
# (international first, domestic available), wellbeing professional liability PT & ES.
# P[(topic, lang)] = dict(slug, h1, title, desc, eyebrow, intro, h_diff, points, faq)
P = {}

# ============================== ENGLISH ==============================
P[('hol_pt','en')] = dict(slug='en/second-home-insurance-portugal', keep=True)
P[('hol_es','en')] = dict(
 slug='en/holiday-home-insurance-spain',
 h1='Holiday home insurance in Spain',
 title='Holiday Home Insurance in Spain · Rebuild Value from €500,000',
 desc='Holiday and second home insurance in Spain for houses with a rebuild value from €500,000 — wordings compared across specialist insurers, explained in English and in writing.',
 eyebrow='Private Clients · Spain',
 intro='For villas and second homes in Spain — Marbella and Sotogrande, Mallorca and Ibiza, the Costa Brava, Jávea and Moraira, or Madrid — with a rebuild value from €500,000, owned by families who live elsewhere for part or most of the year. Placed with specialist insurers and explained in writing before you commit.',
 h_diff='What we look at in a holiday home',
 points=[('From €500,000 of rebuild value','We work with holiday homes in Spain whose cost of rebuilding starts at €500,000. The figure is what it would cost to rebuild the house, not what it would sell for — the land and the location are not part of it.'),
         ('Holiday-home or main-residence wording','Some insurers write a specific policy for holiday homes owned from abroad; others insure a second home to the same standard as a main residence. Which one fits depends on the house, what is inside it and how it is used.'),
         ('The Consorcio','In Spain, extraordinary risks such as flood, storm surge and earthquake are paid by the Consorcio de Compensación de Seguros on the basis of the sums in your policy. Under-insurance therefore reduces those payments too.'),
         ('Tourist letting','Letting a villa to paying guests needs a licence in most Spanish regions and must be declared to the insurer before it starts. It changes the cover you need.'),
         ('Jewellery, watches and art','Holiday-home policies generally leave jewellery and watches out. They can be insured under a separate valuables policy, subject to the insurer's acceptance, and collections can be insured on their own terms.')],
 faq=[('Is there a minimum value?','Yes. We work with holiday homes in Spain with a rebuild value from €500,000. For smaller properties we are not the right adviser.'),
      ('Do I need to live in Spain?','No. Holiday-home policies for owners living abroad are common. You will be asked for your NIE, or your passport number if you do not have one yet.'),
      ('Is it the same adviser as for Portugal?','Yes. We handle Spain under the EU freedom to provide services, with the same adviser and the same written process as in Portugal.'),
      ('What do you need for a quote?','Full name, address of the property, NIE or passport number, type of property and gross construction area, year of construction, weeks of use per year and whether it is let, the sums for buildings, contents and valuables, and your current policy if there is one.')])
P[('hol_pt','en_patch')] = None

P[('health','en')] = dict(
 slug='en/health-insurance-portugal-spain',
 h1='Health insurance for international families in Portugal and Spain',
 title='Health Insurance in Portugal & Spain · International Plans First',
 desc='Health insurance for international families living in Portugal or Spain: Allianz Care, Cigna Global and APRIL International compared first, domestic plans when they fit better.',
 eyebrow='Health · Portugal & Spain',
 intro='If your family lives in Portugal or Spain but your life is not confined to one country, an international health plan is usually the right starting point: treatment where you choose, cover that travels with you and continues if you move again. We compare Allianz Care, Cigna Global and APRIL International side by side — and if a domestic plan suits you better, we arrange that too.',
 h_diff='How we approach health cover',
 points=[('International first','International plans let you be treated in Portugal, Spain, your home country or elsewhere, depending on the area of cover you choose. They are underwritten person by person, with medical history assessed at the start.'),
         ('Allianz Care, Cigna Global and APRIL International','We compare the three on area of cover, annual limits, deductibles, outpatient, dental and maternity options, and the quality of the claims service. US citizens are placed with Cigna Global.'),
         ('Domestic plans, when they fit','In Portugal we also place domestic plans with Médis, Allianz, ASISA and MGEN. They cost less, but they work within the national network, generally exclude pre-existing conditions and have entry-age limits.'),
         ('Pre-existing conditions','Portuguese domestic plans generally exclude them; MGEN accepts them after a 365-day waiting period. International plans assess them at underwriting and may accept, exclude or rate them.'),
         ('Timing','International underwriting usually takes more than a week. If you need cover from a fixed date — a move, a residence permit, the end of an employer plan — start early.')],
 faq=[('Can I take an international plan in the country of my nationality?','Generally no. International plans are designed for people living outside their country of nationality. We confirm eligibility before we quote.'),
      ('Do I need a Portuguese address for a domestic plan?','Yes. Domestic plans require a Portuguese tax number (NIF) and address for the policyholder and everyone insured. International plans do not need a Portuguese tax address.'),
      ('What if I am over 65?','Domestic plans in Portugal generally do not accept new members over 65; MGEN does, for households of two or more people. International plans have their own age rules, which we check case by case.'),
      ('What do you need to quote an international plan?','The full name, date of birth and nationality of each person, and the country where you will live — and the state, for US citizens.')])

P[('wellness','en')] = dict(
 slug='en/therapists-yoga-pilates-liability-insurance',
 h1='Liability insurance for therapists, massage, yoga and Pilates in Portugal and Spain',
 title='Therapists, Yoga & Pilates Liability Insurance · Portugal & Spain',
 desc='Professional liability for therapists, massage therapists and yoga, Pilates and tai chi teachers in Portugal or Spain — from €250,000, claims-made, quoted in writing in 48–72 working hours.',
 eyebrow='Professional liability · Portugal & Spain',
 intro='For therapists, massage therapists and yoga, Pilates and tai chi teachers who work in Portugal or Spain — in a studio, at a retreat, in clients\' homes or online. A client injured in a class or after a treatment can claim far more than the fee you charged; the right policy answers for the claim and pays for your defence.',
 h_diff='What we look at',
 points=[('The activities we insure','Massage, the non-conventional therapies recognised in Portugal — acupuncture, homeopathy, osteopathy, naturopathy, phytotherapy, chiropractic and traditional Chinese medicine — and yoga, Pilates, tai chi and other wellbeing practices.'),
         ('Portugal and Spain','Hiscox writes this cover in both Portugal and Spain, so a therapist or teacher who works on both sides of the border can have one adviser and a coherent programme.'),
         ('The declared activity','The policy covers what is described in it. A new technique, a retreat abroad, online classes or a move to another studio must be declared, or the cover may not respond.'),
         ('Limits and basis','We work from €250,000 per claim, on a claims-made basis: the policy answers for claims made while it is in force, so continuity from one policy to the next matters.')],
 faq=[('Is this insurance compulsory?','For some regulated professions it is required by law or by the professional body. For most wellbeing activities it is not, but studios, gyms, hotels and retreat organisers often ask for proof of cover.'),
      ('I teach at retreats in hotels. Am I covered?','Yes, if the activity and the places where you work are declared. Hotels and organisers often ask for a certificate naming the event, which we can arrange.'),
      ('What do you need for a quote?','Full name, full address, tax number (NIF in Portugal, NIE or NIF in Spain), the exact activity and annual turnover. We reply in writing within 48 to 72 working hours.')])

# ============================== PORTUGUÊS ==============================
P[('hol_pt','pt')] = dict(
 slug='seguros/casa-ferias-portugal',
 h1='Seguro de casa de férias em Portugal',
 title='Seguro de Casa de Férias em Portugal · Reconstrução desde 500.000 €',
 desc='Seguro para casas de férias e segundas habitações em Portugal com valor de reconstrução a partir de 500.000 €: comparação de redações entre seguradoras especializadas, com parecer por escrito.',
 eyebrow='Private Clients · Portugal',
 intro='Para moradias e segundas habitações em Portugal usadas parte do ano — em Lisboa e Cascais, na Comporta, no Algarve, no Douro ou na Madeira — com valor de reconstrução a partir de 500.000 €. Colocamos estas casas em seguradoras que as tratam como um risco próprio e explicamos cada condição por escrito antes de decidir.',
 h_diff='O que analisamos numa casa de férias',
 points=[('A partir de 500.000 € de valor de reconstrução','Trabalhamos casas de férias cujo custo de reconstrução — não o preço de compra — começa nos 500.000 €. Usamos o simulador SCRIM como referência e arredondamos para cima para incluir muros, piscinas e anexos.'),
         ('Uma casa que fica muitas vezes vazia','Há seguradoras com produtos próprios para casas de férias, distintos dos de residência permanente, e outras que não fazem essa distinção. O que importa é como cada apólice trata as semanas em que a casa está fechada — e mostramos-lhe isso por escrito.'),
         ('Visitas, chaves e segurança','Quem visita a casa, com que frequência e o que acontece à água e à eletricidade na sua ausência fazem parte do risco. Fica registado na proposta, para não ser discutido depois.'),
         ('Arrendamento, mesmo ocasional','Arrendar a casa a hóspedes, ainda que por poucas semanas, tem de ser declarado antes de acontecer. Muda a cobertura necessária e pode exigir responsabilidade civil própria.'),
         ('Objetos de valor na casa','Joias, relógios e arte deixados numa casa de férias são muitas vezes limitados ou excluídos. Quando contam, especificamo-los em valor acordado numa apólice que os cubra devidamente.')],
 faq=[('Há um valor mínimo?','Sim. Trabalhamos casas de férias em Portugal com valor de reconstrução a partir de 500.000 €. Para imóveis de valor inferior não somos o mediador indicado.'),
      ('Posso segurar uma casa de férias em Portugal se viver noutro país?','Sim. As seguradoras com que trabalhamos subscrevem casas de férias de não residentes; precisa de número de contribuinte português (NIF).'),
      ('Com que seguradoras trabalham?','Com seguradoras especializadas em clientes particulares, escolhidas pela redação de que cada casa precisa. Sempre sujeito à aceitação do risco pela seguradora.'),
      ('O que precisam para uma proposta?','Nome completo, morada do imóvel, NIF, área bruta de construção, ano de construção, semanas de utilização por ano e se é arrendada, capitais de edifício, recheio e objetos de valor, e a apólice atual, se existir.')])
P[('hol_es','pt')] = dict(
 slug='seguros/casa-ferias-espanha',
 h1='Seguro de casa de férias em Espanha',
 title='Seguro de Casa de Férias em Espanha · Reconstrução desde 500.000 €',
 desc='Seguro para casas de férias em Espanha com valor de reconstrução a partir de 500.000 €: comparação de redações entre seguradoras especializadas, com o mesmo mediador de Portugal.',
 eyebrow='Private Clients · Espanha',
 intro='Para moradias e segundas habitações em Espanha — Marbella e Sotogrande, Maiorca e Ibiza, a Costa Brava, Jávea e Moraira, ou Madrid — com valor de reconstrução a partir de 500.000 €, de famílias que vivem noutro lugar parte ou a maior parte do ano. Colocadas em seguradoras especializadas e explicadas por escrito.',
 h_diff='O que analisamos numa casa de férias',
 points=[('A partir de 500.000 € de valor de reconstrução','Trabalhamos casas de férias em Espanha cujo custo de reconstrução começa nos 500.000 €. É o custo de voltar a construir a casa, não o seu valor de venda — o terreno e a localização não contam.'),
         ('Apólice de casa de férias ou de residência principal','Há seguradoras com uma apólice própria para casas de férias de proprietários estrangeiros; outras seguram a segunda habitação ao mesmo nível da residência principal. A escolha depende da casa, do que está dentro dela e de como é usada.'),
         ('O Consorcio','Em Espanha, os riscos extraordinários — inundação, temporal marítimo, sismo — são pagos pelo Consorcio de Compensación de Seguros com base nos capitais da apólice. O subseguro reduz também essas indemnizações.'),
         ('Arrendamento turístico','Arrendar uma moradia a hóspedes exige licença na maioria das regiões espanholas e tem de ser declarado à seguradora antes de começar. Muda a cobertura necessária.'),
         ('Joias, relógios e arte','As apólices de casa de férias deixam em geral de fora joias e relógios. Podem ser seguros numa apólice própria de objetos de valor, sujeita à aceitação da seguradora, e as coleções podem ser seguradas à parte.')],
 faq=[('Há um valor mínimo?','Sim: valor de reconstrução a partir de 500.000 €. Para imóveis de valor inferior não somos o mediador indicado.'),
      ('Preciso de viver em Espanha?','Não. Há apólices de casa de férias pensadas para proprietários que vivem no estrangeiro. Ser-lhe-á pedido o NIE, ou o número de passaporte se ainda não o tiver.'),
      ('É o mesmo mediador que em Portugal?','Sim. Em Espanha trabalhamos ao abrigo da livre prestação de serviços na UE, com o mesmo interlocutor e o mesmo processo por escrito.'),
      ('O que precisam para uma proposta?','Nome completo, morada do imóvel, NIE ou passaporte, tipo de imóvel e área de construção, ano de construção, semanas de utilização e arrendamento, capitais pretendidos e apólice atual, se existir.')])
P[('health','pt')] = dict(
 slug='seguros/saude-portugal-espanha',
 h1='Seguro de saúde para famílias internacionais em Portugal e Espanha',
 title='Seguro de Saúde em Portugal e Espanha · Primeiro os Internacionais',
 desc='Seguro de saúde para famílias que vivem em Portugal ou Espanha: comparamos primeiro Allianz Care, Cigna Global e APRIL International; seguros domésticos quando fazem mais sentido.',
 eyebrow='Saúde · Portugal e Espanha',
 intro='Se a sua família vive em Portugal ou em Espanha, mas a sua vida não se fica por um país, um seguro de saúde internacional é normalmente o ponto de partida certo: tratamento onde escolher, cobertura que viaja consigo e continua se voltar a mudar de país. Comparamos lado a lado a Allianz Care, a Cigna Global e a APRIL International — e, se um seguro doméstico lhe servir melhor, também o colocamos.',
 h_diff='Como tratamos a saúde',
 points=[('Primeiro, o internacional','Os planos internacionais permitem tratamento em Portugal, em Espanha, no país de origem ou noutro, consoante a área de cobertura escolhida. São subscritos pessoa a pessoa, com análise do historial clínico no início.'),
         ('Allianz Care, Cigna Global e APRIL International','Comparamos as três por área de cobertura, limites anuais, franquias, ambulatório, estomatologia e maternidade, e pela qualidade da gestão de sinistros. Cidadãos norte-americanos são colocados na Cigna Global.'),
         ('Seguros domésticos, quando fazem sentido','Em Portugal colocamos também planos domésticos da Médis, Allianz, ASISA e MGEN. São mais económicos, mas funcionam na rede nacional, excluem em geral doenças pré-existentes e têm limites de idade na adesão.'),
         ('Doenças pré-existentes','Os seguros domésticos portugueses excluem-nas em regra; a MGEN aceita-as após 365 dias de carência. Os internacionais avaliam-nas na subscrição e podem aceitá-las, excluí-las ou agravá-las.'),
         ('Prazos','A subscrição internacional demora normalmente mais de uma semana. Se precisa de cobertura numa data certa — mudança, autorização de residência, fim de um seguro de empresa — comece cedo.')],
 faq=[('Posso ter um seguro internacional no país da minha nacionalidade?','Em geral não: os planos internacionais destinam-se a quem vive fora do país da sua nacionalidade. Confirmamos a elegibilidade antes de cotar.'),
      ('Preciso de morada em Portugal para um seguro doméstico?','Sim. Os planos domésticos exigem NIF e morada em Portugal para o tomador e para todas as pessoas seguras. Os internacionais não exigem morada fiscal portuguesa.'),
      ('E se tiver mais de 65 anos?','Os seguros domésticos em Portugal não aceitam, em regra, novas adesões acima dos 65; a MGEN aceita, para agregados de duas ou mais pessoas. Os internacionais têm regras próprias, que verificamos caso a caso.'),
      ('O que precisam para cotar um plano internacional?','Nome completo, data de nascimento e nacionalidade de cada pessoa, e o país onde vai viver — e o estado, no caso de cidadãos norte-americanos.')])
P[('wellness','pt')] = dict(slug='seguros/rc-yoga-pilates-bem-estar', keep=True)
P[('brazil','pt')] = dict(
 slug='seguros/brasileiros-em-portugal',
 h1='Seguros para famílias e investidores brasileiros em Portugal e Espanha',
 title='Seguros para Famílias Brasileiras com Património em Portugal e Espanha',
 desc='Para famílias e investidores brasileiros que vivem ou têm património em Portugal e Espanha: residências de elevado valor, saúde internacional, joias, arte e responsabilidade civil, com um só mediador.',
 eyebrow='Private Clients · Portugal e Espanha',
 intro='Para famílias brasileiras que se mudaram para Portugal ou Espanha, que ali investiram em imobiliário, ou que dividem o ano entre o Brasil e a Península Ibérica. Organizamos a proteção da casa, dos bens de valor, da saúde e da responsabilidade civil num só programa, explicado por escrito e em português.',
 h_diff='O que organizamos',
 points=[('Residências e investimento imobiliário','Casas de elevado valor em Lisboa, Cascais, Comporta, Algarve, Madrid ou Marbella, seguradas com base no custo de reconstrução, junto de seguradoras especializadas. Casas de férias a partir de 500.000 € de valor de reconstrução.'),
         ('Saúde internacional','Para quem continua a viajar entre o Brasil e a Europa, um plano internacional — Allianz Care, Cigna Global ou APRIL International — permite tratamento nos dois continentes, consoante a área escolhida. Se preferir um seguro doméstico português, também o colocamos.'),
         ('Joias, relógios e arte','Peças especificadas em valor acordado, em casa e em viagem — incluindo o que veio do Brasil e o que circula entre países.'),
         ('Responsabilidade civil e family office','Capitais à medida do património, para convidados, pessoal doméstico e todas as casas; para estruturas familiares, responsabilidade fiduciária, ciber e fraude.'),
         ('Portugal e Espanha com o mesmo mediador','Em Espanha trabalhamos ao abrigo da livre prestação de serviços na UE: o mesmo interlocutor e o mesmo processo por escrito nos dois países.')],
 faq=[('Preciso de NIF?','Para a maioria dos seguros em Portugal, sim — NIF e, em vários ramos, morada em Portugal. Para os planos de saúde internacionais não é necessária morada fiscal portuguesa.'),
      ('Posso segurar uma casa em Portugal enquanto ainda vivo no Brasil?','Sim, como casa secundária ou de férias, desde que declarada como tal. Trabalhamos casas de férias a partir de 500.000 € de valor de reconstrução.'),
      ('O seguro de saúde internacional cobre no Brasil?','Depende da área de cobertura escolhida: há planos que incluem a América Latina e outros que a excluem. Explicamos por escrito, antes de subscrever, onde está coberto.'),
      ('Em que língua trabalham?','Em português, por escrito: propostas, explicação das condições, correspondência e acompanhamento de sinistros.')])

# ============================== ESPAÑOL ==============================
P[('hol_pt','es')] = dict(
 slug='es/seguro-casa-vacaciones-portugal',
 h1='Seguro para su casa de vacaciones en Portugal',
 title='Seguro de Casa de Vacaciones en Portugal · Reconstrucción desde 500.000 €',
 desc='Seguro para casas de vacaciones y segundas residencias en Portugal con valor de reconstrucción desde 500.000 €: comparación de condicionados entre aseguradoras especializadas, en español y por escrito.',
 eyebrow='Private Clients · Portugal',
 intro='Para villas y segundas residencias en Portugal que usted utiliza parte del año — en Lisboa y Cascais, Comporta, el Algarve, el Duero o Madeira — con un valor de reconstrucción desde 500.000 €. Las colocamos en aseguradoras que tratan la casa de vacaciones como un riesgo propio y le explicamos cada condición por escrito antes de decidir.',
 h_diff='Lo que analizamos en una casa de vacaciones',
 points=[('Desde 500.000 € de valor de reconstrucción','Trabajamos casas de vacaciones cuyo coste de reconstrucción — no el precio de compra — empieza en 500.000 €. En Portugal usamos el simulador SCRIM como referencia y redondeamos al alza para muros, piscinas y anexos.'),
         ('Una casa que a menudo está vacía','Hay aseguradoras con productos propios para casas de vacaciones, distintos de los de vivienda habitual, y otras que no hacen esa distinción. Lo que importa es cómo trata cada póliza las semanas en que la casa está cerrada, y se lo mostramos por escrito.'),
         ('Visitas, llaves y seguridad','Quién visita la casa, con qué frecuencia y qué ocurre con el agua y la electricidad en su ausencia forman parte del riesgo. Queda reflejado en la propuesta.'),
         ('Alquiler, aunque sea ocasional','Alquilar la casa a huéspedes, aunque sea unas semanas, debe declararse antes de hacerlo. Cambia la cobertura y puede requerir responsabilidad civil propia.'),
         ('Objetos de valor en la casa','Joyas, relojes y arte en una casa de vacaciones suelen estar limitados o excluidos. Cuando importan, los especificamos a valor convenido en una póliza que los cubra.')],
 faq=[('¿Hay un valor mínimo?','Sí. Trabajamos casas de vacaciones en Portugal con valor de reconstrucción desde 500.000 €. Para inmuebles de menor valor no somos el mediador adecuado.'),
      ('¿Puedo asegurar una casa en Portugal si vivo en otro país?','Sí. Las aseguradoras con las que trabajamos suscriben casas de vacaciones de no residentes; necesitará un número fiscal portugués (NIF).'),
      ('¿Con qué aseguradoras trabajan?','Con aseguradoras especializadas en clientes particulares, elegidas por el condicionado que necesita cada casa. Siempre sujeto a la aceptación del riesgo.')])
P[('hol_es','es')] = dict(
 slug='es/seguro-casa-vacaciones-espana',
 h1='Seguro para su casa de vacaciones en España',
 title='Seguro de Casa de Vacaciones en España · Reconstrucción desde 500.000 €',
 desc='Seguro de casa de vacaciones en España para viviendas con valor de reconstrucción desde 500.000 €: comparación de condicionados entre aseguradoras especializadas, en español y por escrito.',
 eyebrow='Private Clients · España',
 intro='Para villas y segundas residencias en España — Marbella y Sotogrande, Mallorca e Ibiza, la Costa Brava, Jávea y Moraira, o Madrid — con un valor de reconstrucción desde 500.000 €, de familias que viven en otro lugar parte o la mayor parte del año, en Europa o en América Latina. Colocadas en aseguradoras especializadas y explicadas por escrito.',
 h_diff='Lo que analizamos en una casa de vacaciones',
 points=[('Desde 500.000 € de valor de reconstrucción','Trabajamos casas de vacaciones en España cuyo coste de reconstrucción empieza en 500.000 €. Es lo que costaría volver a construir la casa, no su valor de venta: el suelo y la ubicación no cuentan.'),
         ('Póliza de casa de vacaciones o de vivienda habitual','Hay aseguradoras con una póliza propia para casas de vacaciones de propietarios extranjeros; otras aseguran la segunda residencia al mismo nivel que la vivienda habitual. La elección depende de la casa, de lo que hay dentro y de cómo se usa.'),
         ('El Consorcio','En España los riesgos extraordinarios — inundación, embate de mar, terremoto — los paga el Consorcio de Compensación de Seguros según los capitales de su póliza. El infraseguro reduce también esas indemnizaciones.'),
         ('Alquiler turístico','Alquilar una villa a huéspedes exige licencia en la mayoría de las comunidades autónomas y debe declararse a la aseguradora antes de empezar. Cambia la cobertura.'),
         ('Joyas, relojes y arte','Las pólizas de casa de vacaciones suelen dejar fuera joyas y relojes. Pueden asegurarse en una póliza propia de objetos de valor, sujeta a la aceptación de la aseguradora, y las colecciones pueden asegurarse aparte.')],
 faq=[('¿Hay un valor mínimo?','Sí: valor de reconstrucción desde 500.000 €. Para inmuebles de menor valor no somos el mediador adecuado.'),
      ('¿Tengo que vivir en España?','No. Hay pólizas de casa de vacaciones pensadas para propietarios que viven en el extranjero. Se le pedirá el NIE, o el pasaporte si todavía no lo tiene.'),
      ('¿Qué necesitan para una propuesta?','Nombre completo, dirección del inmueble, NIE o pasaporte, tipo de vivienda y superficie construida, año de construcción, semanas de uso y si se alquila, capitales de continente, contenido y objetos de valor, y su póliza actual si la tiene.')])
P[('health','es')] = dict(
 slug='es/seguro-salud-espana-portugal',
 h1='Seguro de salud para familias internacionales en España y Portugal',
 title='Seguro de Salud en España y Portugal · Primero los Internacionales',
 desc='Seguro de salud para familias que viven en España o Portugal, también latinoamericanas: comparamos primero Allianz Care, Cigna Global y APRIL International; planes locales cuando convienen más.',
 eyebrow='Salud · España y Portugal',
 intro='Si su familia vive en España o en Portugal — llegada de América Latina o de otro país europeo — y su vida no se limita a un país, un seguro de salud internacional suele ser el punto de partida correcto: tratamiento donde usted elija, cobertura que viaja con usted y continúa si vuelve a mudarse. Comparamos Allianz Care, Cigna Global y APRIL International; si un plan local le conviene más, también lo colocamos.',
 h_diff='Cómo enfocamos la salud',
 points=[('Primero, el internacional','Los planes internacionales permiten tratarse en España, en Portugal, en su país de origen o en otro, según el área de cobertura. Se suscriben persona por persona, con evaluación del historial médico al inicio.'),
         ('Allianz Care, Cigna Global y APRIL International','Los comparamos por área de cobertura, límites anuales, franquicias, ambulatorio, dental y maternidad, y por la calidad de la gestión de siniestros. Los ciudadanos estadounidenses se colocan en Cigna Global.'),
         ('Planes locales, cuando convienen','En Portugal colocamos también planes nacionales de Médis, Allianz, ASISA y MGEN. Son más económicos, pero funcionan en la red nacional, suelen excluir enfermedades preexistentes y tienen límites de edad.'),
         ('Enfermedades preexistentes','Los planes nacionales portugueses suelen excluirlas; MGEN las acepta tras 365 días de carencia. Los internacionales las evalúan al suscribir y pueden aceptarlas, excluirlas o recargarlas.'),
         ('Plazos','La suscripción internacional suele tardar más de una semana. Si necesita cobertura en una fecha concreta — mudanza, residencia, fin de un seguro de empresa — empiece pronto.')],
 faq=[('¿Puedo contratar un plan internacional en el país de mi nacionalidad?','En general no: están pensados para quien vive fuera de su país de nacionalidad. Confirmamos la elegibilidad antes de cotizar.'),
      ('¿Necesito domicilio en Portugal para un plan nacional portugués?','Sí: NIF y domicilio en Portugal para el tomador y todos los asegurados. Los planes internacionales no lo exigen.'),
      ('¿Qué necesitan para cotizar un plan internacional?','Nombre completo, fecha de nacimiento y nacionalidad de cada persona, y el país donde va a vivir (y el estado, si es ciudadano estadounidense).')])
P[('wellness','es')] = dict(slug='es/seguro-responsabilidad-civil-terapeutas-yoga-pilates', keep=True)
