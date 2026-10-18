"""Español, escrito para clientes latinoamericanos que se mudan a Portugal o España (no es una traducción literal del EN). Datos: scripts/cancer_cover/README.md."""
TABLE = (
    '<div class="ipmi-table cc-table"><table><thead><tr><th></th><th>MGEN</th><th>Médis</th><th>Internacional (IPMI)</th></tr></thead><tbody>'
    "<tr><td>Ideal para</td><td>Familias con antecedentes médicos o mayores de 65 años</td><td>Personas sanas menores de 65 que quieren una suma alta</td><td>Quien quiere tratarse en más de un país, o vive en España</td></tr>"
    "<tr><td>Preexistencias</td><td>Cubiertas tras 365 días</td><td>Excluidas</td><td>Evaluadas por análisis médico</td></tr>"
    "<tr><td>Suma para cáncer</td><td>Dentro de las coberturas del plan</td><td>1.000.000 € en enfermedades graves (opción más completa)</td><td>Cigna Global: tratamiento oncológico pagado completo en los planes base</td></tr>"
    "<tr><td>Dónde se trata</td><td>Portugal</td><td>Portugal</td><td>En cualquier punto de la zona de cobertura elegida</td></tr>"
    "<tr><td>Edad de ingreso</td><td>Sin límite</td><td>Hasta 65 años</td><td>Según la aseguradora</td></tr>"
    "<tr><td>Cuestionario médico</td><td>No</td><td>Sí</td><td>Sí</td></tr>"
    "<tr><td>Requisitos</td><td>Dos o más personas, NIF y domicilio en Portugal</td><td>NIF y domicilio en Portugal</td><td>No exige domicilio en Portugal</td></tr>"
    "</tbody></table></div>"
)

PAGE = {
    "title": "Cáncer y Seguro Médico en Portugal y España | Adler & Rochefort",
    "desc": "Si se muda a Portugal o España, así cubren el cáncer los seguros locales e internacionales: sumas aseguradas, carencias, preexistencias y tratamiento donde usted elija.",
    "eyebrow": "Seguro médico · Cobertura de cáncer",
    "crumb": "Cáncer y seguro médico",
    "h1": "Cáncer y seguro médico al mudarse a Portugal o España: lo que debe saber",
    "lead": "Cuando se planea una mudanza a Europa, el seguro médico suele elegirse por la prima o porque lo exige el visado. Pocas personas preguntan qué pasaría con un diagnóstico de cáncer. Esta guía explica cómo responden los seguros locales portugueses y los seguros médicos internacionales.",
    "facts": [
        "Casi todos los seguros cubren el cáncer; cambian la suma asegurada, el momento en que empieza la cobertura y el lugar donde puede tratarse.",
        "Si en su país tenía un seguro de gastos médicos mayores, lo normal es que deje de cubrirle al cambiar de residencia.",
        "En Portugal, las aseguradoras locales excluyen por regla general las preexistencias y no aceptan nuevos asegurados mayores de 65 años.",
        "MGEN cubre preexistencias tras una carencia de 365 días, sin cuestionario médico ni edad máxima.",
        "Médis incluye, en su opción más completa, 1.000.000 € para enfermedades graves, cáncer incluido, con carencia de 180 días.",
        "Los seguros internacionales (Allianz Care, Cigna Global) cubren el tratamiento en toda la zona de cobertura elegida, que puede incluir su país de origen.",
    ],
    "sections": [
        ("Antes de mudarse: la pregunta que casi nadie hace",
         "<p>Un tratamiento oncológico puede durar meses o años: cirugía, quimioterapia, radioterapia y medicamentos dirigidos. Una póliza que parece amplia para consultas y urgencias puede agotar su suma asegurada a mitad del tratamiento.</p>"
         "<p>Por eso la pregunta útil no es si la póliza cubre el cáncer, sino cuánto paga, desde cuándo, con qué historial y en qué país. Y, para muchas familias latinoamericanas, si podrían tratarse cerca de los suyos.</p>"),
        ("Seguros locales en Portugal: cómo funcionan ante un cáncer",
         "<p>Los seguros portugueses pagan el tratamiento oncológico hasta la suma asegurada de cada cobertura, principalmente dentro de Portugal. Cuatro puntos deciden qué tan protegido está:</p>"
         "<ul><li><strong>Suma asegurada.</strong> Hospitalización y consultas tienen límites anuales. Algunos planes añaden una suma específica para enfermedades graves, clave en tratamientos largos.</li>"
         "<li><strong>Periodos de carencia.</strong> La cobertura de enfermedades graves suele empezar varios meses después del inicio de la póliza. Un diagnóstico dentro de ese plazo no está cubierto.</li>"
         "<li><strong>Enfermedades preexistentes.</strong> Las aseguradoras portuguesas excluyen, por regla general, cualquier condición anterior a la póliza. Un cáncer previo, o síntomas ya en estudio, normalmente quedan fuera.</li>"
         "<li><strong>Edad y requisitos.</strong> La mayoría acepta nuevos asegurados solo hasta los 65 años. Cada persona asegurada necesita domicilio en Portugal y número fiscal portugués (NIF).</li></ul>"),
        ("MGEN: preexistencias cubiertas después de 365 días",
         "<p>MGEN es la excepción en Portugal. No excluye las enfermedades preexistentes: aplica una carencia de 365 días y después quedan cubiertas. Es una opción muy relevante si usted o un familiar tiene antecedentes oncológicos, o si sus padres se mudan con usted después de los 65 años.</p>"
         "<ul><li><strong>Sin cuestionario médico</strong> al contratar.</li>"
         "<li><strong>Sin edad máxima</strong> de ingreso.</li>"
         "<li><strong>Mínimo dos personas aseguradas</strong> del mismo hogar. No está disponible para una sola persona.</li>"
         "<li><strong>NIF y domicilio en Portugal</strong> para cada asegurado, con comprobante de domicilio.</li></ul>"
         "<p>Los 365 días cuentan desde el inicio de la póliza. Contratar en cuanto llegue es la mejor protección.</p>"),
        ("Médis: sumas altas para enfermedades graves",
         "<p>Médis es una de las opciones locales más sólidas cuando la prioridad es la suma asegurada. Su opción más completa incluye una cobertura de Enfermedades Graves (Doenças Graves) de 1.000.000 €, que incluye el cáncer, además de hospitalización y consultas.</p>"
         "<ul><li><strong>1.000.000 € para enfermedades graves</strong> en la opción más completa.</li>"
         "<li><strong>Carencia de 180 días</strong> para esa cobertura.</li>"
         "<li><strong>Apoyo oncológico</strong>, incluidas prótesis y ortesis, apoyo psicológico y enfermería a domicilio.</li>"
         "<li><strong>Segunda opinión médica sin límite.</strong></li>"
         "<li><strong>Preexistencias excluidas</strong>, como en la mayoría de las aseguradoras portuguesas.</li></ul>"
         "<p>Médis es adecuada para personas sanas menores de 65 años que viven en Portugal y quieren una reserva alta para un posible diagnóstico grave.</p>"),
        ("Seguro médico internacional: tratarse donde usted decida",
         "<p>Para muchas familias latinoamericanas en Europa, la gran pregunta es dónde se tratarían. Algunas prefieren un centro de referencia en España, otras volver a su país para estar cerca de la familia. Un seguro médico internacional permite esa elección, y sirve también si vive en España.</p>"
         "<ul><li><strong><a href=\"/es/seguro-medico-internacional/cigna-global/\">Cigna Global</a>.</strong> El tratamiento del cáncer forma parte de la cobertura base en Silver, Gold y Platinum y se paga completo. Silver tiene un límite anual de 1.000.000 USD; Platinum, el límite anual más alto, sin tope fijo.</li>"
         "<li><strong><a href=\"/es/seguro-medico-internacional/allianz-care/\">Allianz Care</a>.</strong> La hospitalización está incluida en todos los planes y los chequeos de detección de cáncer están cubiertos en toda la gama. Existe una zona de cobertura solo Europa, además de las opciones mundiales. No acepta residentes en Brasil.</li></ul>"
         "<p>Tres diferencias frente a un seguro local. Usted elige una <strong>zona de cobertura</strong> y el tratamiento está cubierto en cualquier punto de ella. Las <strong>preexistencias</strong> se evalúan mediante análisis médico: la aseguradora puede cubrirlas, excluirlas o aplicar un recargo. Y <strong>no exige domicilio en Portugal</strong>.</p>"),
        ("¿Qué opción le conviene?", TABLE),
        ("Cinco preguntas antes de contratar",
         "<ol><li>¿Cuál es la suma anual para tratamiento oncológico, y hay una suma aparte para enfermedades graves?</li>"
         "<li>¿Cuánto dura la carencia antes de que el cáncer quede cubierto?</li>"
         "<li>¿Qué pasa con mis enfermedades actuales y mi historial médico?</li>"
         "<li>¿Puedo tratarme fuera de Portugal, incluso en mi país de origen?</li>"
         "<li>¿Los medicamentos oncológicos, estudios de control y terapias ambulatorias tienen la misma cobertura que la hospitalización?</li></ol>"
         "<p>Las respuestas están en las condiciones de la póliza, no en la prima. Ahí es donde un corredor marca la diferencia.</p>"),
        ("Cómo le ayuda Adler &amp; Rochefort",
         "<p>Seleccionamos propuestas por sus coberturas, sumas aseguradas y gestión de siniestros, nunca por la prima más baja. Ante un cáncer, esa elección define su protección.</p>"
         "<p>Somos un corredor de seguros regulado en la UE, registrado ante el supervisor portugués (ASF), con actividad también en España. Comparamos las condiciones de varias aseguradoras locales e internacionales según su edad, historial y planes, y le explicamos las diferencias por escrito, en español.</p>"),
    ],
    "faq": [
        ("¿Mi seguro de gastos médicos de mi país me cubre en Europa?", "Normalmente no, o solo en emergencias y por periodos cortos. Al cambiar de residencia necesita una póliza local o internacional."),
        ("Ya tuve cáncer. ¿Puedo asegurarme?", "En la mayoría de las aseguradoras portuguesas, un cáncer previo queda excluido. MGEN cubre preexistencias tras una carencia de 365 días. Las aseguradoras internacionales evalúan cada caso."),
        ("Mis padres tienen más de 65 años y vienen conmigo. ¿Qué opciones hay?", "La mayoría de las aseguradoras portuguesas no acepta nuevos asegurados mayores de 65. MGEN no tiene límite de edad si se aseguran al menos dos personas del mismo hogar. Los planes internacionales son otra vía, sujeta a análisis médico."),
        ("¿Puedo tratarme en mi país de origen si vivo en Portugal?", "Con un seguro médico internacional, sí, si ese país está dentro de su zona de cobertura. Los seguros locales portugueses están pensados sobre todo para tratamiento en Portugal."),
        ("¿Qué pasa si me diagnostican durante la carencia?", "El diagnóstico queda fuera de la cobertura. Por eso la fecha de inicio de la póliza importa tanto como la suma asegurada."),
    ],
    "related": [
        ("/es/seguro-medico-internacional/", "Seguro médico internacional para expatriados"),
        ("/es/seguro-salud-preexistencias-portugal/", "Preexistencias y seguro de salud en Portugal"),
        ("/es/seguro-medico-internacional/mexicanos-en-el-extranjero/", "Seguro médico para mexicanos en el extranjero"),
        ("/es/allianz-care-vs-cigna-global-seguro-salud-internacional/", "Allianz Care o Cigna Global"),
    ],
    "form_h2": "Pedir propuesta por escrito",
    "form_lead": "Cuéntenos quién necesita cobertura y dónde vivirá. Comparamos opciones locales e internacionales para su situación y le respondemos por escrito.",
    "sources_label": "Fuentes",
    "sources": [
        ("Médis: propuesta de Seguro de Saúde (abril de 2025)", "https://www.medis.pt/media/7572/proposta-individuais-pt_medis-editavel.pdf"),
        ("Cigna Global: planes de salud internacionales", "https://es.cignaglobal.com/international-health-plans"),
        ("Allianz Partners: nuevos planes Care (noviembre de 2025)", "https://allianzcare.com/en/about-us/news/allianz-international-health-insurance-plans-update.html"),
    ],
}
