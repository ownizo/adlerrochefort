# -*- coding: utf-8 -*-
"""ES travel insurance landings and guides — 25 Nov 2026 (residents in Spain).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"es": dict(home_crumb="Seguro de viaje", others="Compare el seguro de viaje según el viaje",
                 guides="Guías de seguro de viaje", tool_h="Compare planes para este viaje",
                 tool_p="Precios en directo de varias aseguradoras, ordenados primero por cobertura médica. Ajuste cualquier campo a su viaje.",
                 faq_h="Preguntas frecuentes", rel_h="Relacionado", main_link="Todos los viajes: comparador de seguros de viaje premium",
                 who_h="Quién hace qué", cta="Comparar planes premium")}
P = {"es": {}}
S = P["es"]
IPMI = "/es/seguro-medico-internacional/"

S["usa"] = dict(
    slug="estados-unidos", preset=dict(dest="US", intent="forTourism"),
    title="Seguro de Viaje a Estados Unidos — Compare Límites Médicos Altos | Adler & Rochefort",
    desc="Compare seguros de viaje a Estados Unidos por gastos médicos, repatriación y cancelación. Planes premium de varias aseguradoras, ordenados por protección. Contrate online.",
    crumb="Estados Unidos", eyebrow="Seguro de viaje a Estados Unidos",
    h1="Seguro de viaje a Estados Unidos: compare primero los límites médicos",
    lead="Estados Unidos tiene la sanidad más cara del mundo para un visitante. Compare planes de varias aseguradoras ordenados por cobertura médica, con el destino ya seleccionado.",
    sections=[
        ("Por qué Estados Unidos exige otra póliza", "<p>No hay sistema público al que recurrir: los hospitales facturan a precios privados y un ingreso con cirugía puede superar los seis dígitos. Por eso muchas pólizas «mundiales» excluyen EE. UU. y Canadá si no se elige esa zona. El ESTA es obligatorio; el seguro no — y por eso tantos viajeros contratan demasiado poco.</p>"),
        ("Qué comparar", "<ul><li><strong>Gastos médicos</strong>: un límite alto o ilimitado es la opción sensata.</li><li><strong>Pago directo</strong> al hospital por la asistencia, sin adelantar la factura.</li><li><strong>Repatriación a coste real</strong>, incluido el avión medicalizado.</li><li><strong>Responsabilidad civil</strong>: las indemnizaciones en EE. UU. son elevadas.</li><li><strong>Cancelación</strong> ajustada al coste no reembolsable del viaje.</li></ul>"),
        ("Su seguro de salud privado no viaja con usted", "<p>Muchos seguros de salud contratados en España cubren la asistencia en el extranjero solo con límites bajos, o no la cubren. La tarjeta sanitaria europea no es válida en EE. UU. Para viajes largos y frecuentes, valore también un <a href=\"" + IPMI + "\">seguro médico internacional</a>.</p>"),
    ],
    faq=[
        ("¿Es obligatorio el seguro de viaje para EE. UU.?", "No. Se exige el ESTA, no un seguro. Sin seguro, usted paga el coste íntegro de cualquier tratamiento."),
        ("¿Cuánta cobertura médica necesito?", "La más alta razonablemente posible, con pago directo al hospital."),
        ("¿Sirve la tarjeta sanitaria europea en EE. UU.?", "No. Solo es válida en la UE, el EEE, Suiza y Reino Unido."),
    ],
)

S["annual"] = dict(
    slug="anual-multiviaje", preset=dict(intent="annual"),
    title="Seguro de Viaje Anual Multiviaje — Compare Planes Premium | Adler & Rochefort",
    desc="Compare seguros de viaje anuales multiviaje por gastos médicos, repatriación y cancelación. Una póliza premium para todos los viajes del año, de varias aseguradoras.",
    crumb="Anual multiviaje", eyebrow="Seguro de viaje anual multiviaje",
    h1="Seguro de viaje anual: una póliza premium para todos los viajes del año",
    lead="Si viaja tres o más veces al año — por trabajo, a una segunda residencia, a ver a la familia o por placer — un plan anual cubre todos los viajes con una sola póliza.",
    sections=[
        ("Cuándo compensa un plan anual", "<ul><li><strong>Viajes de negocios frecuentes</strong>, a menudo reservados con poca antelación.</li><li><strong>Propietarios de segundas residencias</strong> fuera de España.</li><li><strong>Familias</strong> que combinan escapadas con un viaje largo al año.</li></ul>"),
        ("Qué revisar en un plan anual", "<ul><li><strong>Días máximos por viaje</strong>: cada plan fija un límite por desplazamiento.</li><li><strong>Zona geográfica</strong>: elíjala por el viaje más lejano previsto.</li><li><strong>Cancelación</strong> por viaje o por año.</li><li><strong>Límites de edad</strong>, a menudo más estrictos que en planes de un solo viaje.</li></ul>"),
        ("¿Seguro anual de viaje o seguro médico internacional?", "<p>Si pasa la mayor parte del año fuera, un plan de viaje no es la herramienta adecuada: cubre viajes, no una vida en el extranjero. Vea el <a href=\"" + IPMI + "\">seguro médico internacional</a>.</p>"),
    ],
    faq=[
        ("¿Cuántos viajes cubre un plan anual?", "Todos los de los 12 meses, siempre que cada viaje respete los días máximos del plan."),
        ("¿Es más barato que varias pólizas sueltas?", "A menudo, a partir de unos tres viajes al año."),
        ("¿Cubre viajes dentro de España?", "Normalmente solo con condiciones, como una distancia mínima del domicilio. Lea la definición de viaje."),
    ],
)

S["ski"] = dict(
    slug="esqui", preset=dict(intent="forTourism", sports=True),
    title="Seguro de Esquí — Compare Rescate en Montaña y Gastos Médicos | Adler & Rochefort",
    desc="Compare seguros de viaje para esquí y snowboard: rescate en montaña, gastos médicos, repatriación, responsabilidad civil y material. Planes premium, ordenados por protección.",
    crumb="Esquí", eyebrow="Seguro de viaje para esquí",
    h1="Seguro de esquí: compare rescate, gastos médicos y responsabilidad civil",
    lead="El esquí y el snowboard están entre las causas más frecuentes de siniestros en viaje, y muchas pólizas estándar los excluyen. Compare planes con la opción de deportes de invierno ya marcada.",
    sections=[
        ("Lo que tiene que pagar una póliza de esquí", "<ul><li><strong>Rescate y evacuación</strong> en pista, en moto de nieve o en helicóptero.</li><li><strong>Gastos médicos</strong> en clínicas de montaña, a menudo privadas.</li><li><strong>Repatriación</strong> cuando una fractura impide volver como estaba previsto.</li><li><strong>Responsabilidad civil</strong> si choca con otro esquiador.</li><li><strong>Material, forfait y clases</strong>, según el plan.</li></ul>"),
        ("Fuera de pista: la exclusión que más importa", "<p>Muchos planes solo cubren el esquí en pistas balizadas y abiertas. El fuera de pista, la travesía y el heliesquí pueden quedar excluidos o exigir guía. Lea esa cláusula antes de pagar.</p>"),
        ("Pirineos, Alpes, Norteamérica y Japón", "<p>En Andorra, Francia, Suiza o Austria, el rescate y las clínicas privadas encarecen cualquier caída, incluso con la tarjeta sanitaria europea. En EE. UU., Canadá y Japón, el límite médico tiene que ser alto.</p>"),
    ],
    faq=[
        ("¿Un seguro de viaje normal cubre el esquí?", "A menudo no, o solo con la opción de deportes de invierno, ya marcada aquí."),
        ("¿Está cubierto el rescate en helicóptero?", "En muchos planes con opción deportiva, dentro del límite de rescate."),
        ("¿La tarjeta sanitaria europea cubre el rescate en montaña?", "No. Da acceso a la sanidad pública en condiciones locales; no paga rescate ni clínicas privadas."),
    ],
)

S["cruise"] = dict(
    slug="crucero", preset=dict(intent="cruise"),
    title="Seguro de Viaje para Cruceros — Compare Evacuación y Médico a Bordo | Adler & Rochefort",
    desc="Compare seguros para cruceros: asistencia médica a bordo, evacuación en el mar, pérdida de embarque y cancelación. Planes premium de varias aseguradoras.",
    crumb="Crucero", eyebrow="Seguro de viaje para cruceros",
    h1="Seguro para cruceros: compare evacuación y asistencia médica a bordo",
    lead="Un crucero parece el viaje más seguro hasta que alguien enferma en alta mar. El centro médico del barco factura como una clínica privada y una evacuación puede costar más que el propio viaje.",
    sections=[
        ("Dónde se diferencian las pólizas de crucero", "<ul><li><strong>Asistencia a bordo</strong>: la tarjeta sanitaria europea no suele aceptarse en el mar.</li><li><strong>Evacuación médica</strong> en helicóptero o barco.</li><li><strong>Pérdida de embarque</strong> y seguimiento hasta el siguiente puerto.</li><li><strong>Cancelación</strong> ajustada al precio del crucero.</li></ul>"),
        ("Elegir la zona correcta", "<p>Un crucero por el Mediterráneo puede hacer escala en el norte de África o Turquía; uno por el Caribe desde Miami necesita la zona de EE. UU.</p>"),
        ("El seguro de la naviera", "<p>Las navieras venden su propio seguro. Es cómodo, pero compare los límites médicos y de repatriación con las ofertas de aquí.</p>"),
    ],
    faq=[
        ("¿El seguro de viaje paga el médico del barco?", "Los planes de crucero suelen hacerlo, dentro del límite de gastos médicos."),
        ("¿Está cubierta la evacuación desde el barco?", "En la mayoría de planes, dentro de repatriación y transporte sanitario."),
        ("¿Necesito la zona EE. UU. para un crucero por el Caribe?", "Si sale de un puerto de EE. UU. o hace escala y desembarca allí, sí."),
    ],
)

S["nomad"] = dict(
    slug="nomadas-digitales", preset=dict(intent="digitalNomad"),
    title="Seguro de Viaje para Nómadas Digitales — Compare Planes | Adler & Rochefort",
    desc="Compare seguros de viaje para nómadas digitales y teletrabajadores: gastos médicos, repatriación y responsabilidad civil durante meses fuera. Varias aseguradoras.",
    crumb="Nómadas digitales", eyebrow="Seguro de viaje para nómadas digitales",
    h1="Seguro de viaje para nómadas digitales: meses fuera, bien cubiertos",
    lead="Primavera en Lisboa, verano en Bali, invierno en Ciudad de México: es un estilo de vida, no unas vacaciones. Compare planes para nómadas ordenados por cobertura médica y repatriación.",
    sections=[
        ("Qué tiene que hacer una póliza de nómada", "<ul><li><strong>Periodos largos</strong>, a menudo renovables mes a mes.</li><li><strong>Varios países</strong> en una póliza, incluido EE. UU. si pasa por allí.</li><li><strong>Gastos médicos altos y repatriación</strong> a coste real.</li><li><strong>Responsabilidad civil</strong> en pisos alquilados y coworkings.</li><li><strong>Equipos</strong>: portátiles y cámaras suelen tener límites bajos por objeto.</li></ul>"),
        ("Visados de nómada digital", "<p>El visado de nómada digital español y el D8 portugués exigen cobertura sanitaria. Según el consulado, puede aceptarse un seguro de viaje para el primer periodo o exigirse un seguro de salud anual. Compruebe el texto exacto antes de contratar.</p>"),
        ("Cuándo necesita un seguro de salud", "<p>Cuando se instala en un país la mayor parte del año, necesita un <a href=\"" + IPMI + "\">seguro médico internacional</a>.</p>"),
    ],
    faq=[
        ("¿Puedo contratarlo si ya he salido de España?", "Algunos planes lo permiten, a menudo con carencia; otros solo antes de salir."),
        ("¿Me cubre en España?", "Normalmente solo en visitas cortas, si acaso. Lea el ámbito territorial."),
        ("¿Está cubierto mi portátil?", "Dentro del límite de equipaje, con un límite bajo por objeto."),
    ],
)

S["longstay"] = dict(
    slug="estancias-largas", preset=dict(intent="expat"),
    title="Seguro de Viaje para Estancias Largas — Compare | Adler & Rochefort",
    desc="Compare seguros de viaje para estancias largas: años sabáticos, temporadas en el extranjero y los meses previos a una mudanza. Gastos médicos, repatriación y responsabilidad civil.",
    crumb="Estancias largas", eyebrow="Seguro de viaje para estancias largas",
    h1="Seguro para estancias largas: de un año sabático a los meses antes de mudarse",
    lead="Un año sabático, una temporada en otro país o los meses de transición antes de un traslado. Compare planes de larga estancia por los límites que importan cuando se está fuera durante meses.",
    sections=[
        ("Para quién es", "<ul><li><strong>Sabáticos y pausas profesionales</strong> con varios países.</li><li><strong>Familias</strong> con hijos escolarizados fuera un trimestre.</li><li><strong>Traslados</strong> antes de tener seguro de salud en el país de destino.</li></ul>"),
        ("Qué comparar", "<ul><li><strong>Duración máxima</strong> y prórroga desde el extranjero.</li><li><strong>Gastos médicos</strong> por persona y pago directo.</li><li><strong>Repatriación a coste real</strong>.</li><li><strong>Visitas a casa</strong> durante el periodo.</li><li><strong>Enfermedades preexistentes</strong>: declárelas.</li></ul>"),
        ("El límite de un seguro de viaje", "<p>Cuando otro país pasa a ser su residencia, necesita un seguro de salud allí — vea el <a href=\"" + IPMI + "\">seguro médico internacional</a>.</p>"),
    ],
    faq=[
        ("¿Cuánto puede durar?", "Según el plan, varios meses o hasta un año."),
        ("¿Puedo volver a casa durante la estancia?", "Muchos planes permiten visitas cortas; revise las condiciones."),
        ("¿Sirve para un visado de residencia?", "A veces, para el primer periodo. Compruebe los requisitos del consulado."),
    ],
)

S["cancel"] = dict(
    slug="cancelacion", preset=dict(intent="cancellation"),
    title="Seguro de Cancelación para Viajes de Alto Valor — Compare | Adler & Rochefort",
    desc="Compare seguros de cancelación para safaris, villas, chárter de yates y viajes de larga distancia: límite de cancelación, causas cubiertas e interrupción. Varias aseguradoras.",
    crumb="Cancelación", eyebrow="Seguro de cancelación de viaje",
    h1="Seguro de cancelación para viajes que no puede permitirse perder",
    lead="Un lodge de safari, una villa para la familia, un chárter de yate o un viaje reservado con un año de antelación: los anticipos no reembolsables suman rápido. Compare por lo que realmente pagan.",
    sections=[
        ("Ajuste la cobertura al viaje", "<p>El límite de cancelación debe cubrir el coste total no reembolsable — vuelos, alojamiento, chárter, guías, entradas — para todos los viajeros.</p>"),
        ("Qué comparar", "<ul><li><strong>Causas cubiertas</strong>: lista cerrada o cualquier causa justificada.</li><li><strong>Interrupción</strong> del viaje y regreso anticipado.</li><li><strong>Cuándo empieza la cobertura</strong>: contrate al pagar el primer anticipo.</li><li><strong>Franquicia</strong> por siniestro.</li><li><strong>Preexistentes</strong> del viajero y de familiares cercanos.</li></ul>"),
        ("Solo cancelación o cobertura completa", "<p>Para EE. UU. y largas distancias, compare planes completos: allí el límite médico es lo que más importa.</p>"),
    ],
    faq=[
        ("¿Cuándo contratar el seguro de cancelación?", "Al reservar o pagar el primer anticipo."),
        ("¿Cubre un cambio de opinión?", "No. Solo las causas de la póliza o, cuando se ofrece, cualquier causa justificada."),
        ("¿Cubre anticipos de villa o chárter?", "Si son costes del viaje no reembolsables dentro del límite."),
    ],
)

S["group"] = dict(
    slug="grupos", preset=dict(intent="groupTravel"),
    title="Seguro de Viaje para Grupos — Bodas, Golf y Viajes de Empresa | Adler & Rochefort",
    desc="Compare seguros de viaje para grupos: bodas de destino, grupos de golf, reuniones familiares y viajes de incentivo. Una sola búsqueda para todo el grupo.",
    crumb="Grupos", eyebrow="Seguro de viaje para grupos",
    h1="Seguro de viaje para grupos: una sola búsqueda para todos",
    lead="Una boda en Mallorca, una semana de golf en el Algarve, una reunión familiar o un viaje de incentivo de empresa. Compare planes de grupo con todos en un mismo presupuesto.",
    sections=[
        ("Viajes de grupo típicos", "<ul><li><strong>Bodas de destino</strong> con invitados de varios países.</li><li><strong>Grupos de golf</strong>.</li><li><strong>Viajes multigeneracionales</strong>, donde los límites de edad cuentan.</li><li><strong>Incentivos y retiros de empresa</strong>.</li></ul>"),
        ("Qué revisar", "<ul><li><strong>Tamaño del grupo</strong> y si todos deben residir en el mismo país.</li><li><strong>Edades</strong>: un viajero mayor puede cambiar el precio de todo el grupo.</li><li><strong>Cancelación</strong> si un miembro no puede viajar.</li><li><strong>Responsabilidad civil</strong> en golf, barcos y deportes.</li></ul>"),
        ("Invitados de otros países", "<p>El seguro se tarifica por país de residencia: cada invitado puede usar el mismo comparador con su propio país.</p>"),
    ],
    faq=[
        ("¿Cuántas personas por presupuesto?", "Hasta 12 viajeros por búsqueda; los grupos mayores pueden hacer varias."),
        ("¿Todos necesitan el mismo plan?", "En un mismo presupuesto, sí."),
        ("¿Pueden contratar invitados que viven fuera de España?", "Sí, indicando su propio país de residencia."),
    ],
)

S["study"] = dict(
    slug="estudiantes", preset=dict(intent="studyInternship"),
    title="Seguro de Viaje para Estudiantes en el Extranjero — Compare | Adler & Rochefort",
    desc="Compare seguros para estudiar, hacer prácticas o ser au pair en el extranjero: gastos médicos, repatriación y responsabilidad civil para todo el curso. Varias aseguradoras.",
    crumb="Estudiantes", eyebrow="Seguro para estudiantes en el extranjero",
    h1="Seguro para estudiantes: un curso fuera, bien cubierto",
    lead="Un semestre en Londres, un máster en Estados Unidos, unas prácticas en Singapur. Las universidades fijan mínimos; los padres suelen querer más.",
    sections=[
        ("Lo que exige la universidad y lo que deberían querer los padres", "<ul><li><strong>El mínimo de la universidad</strong> es un umbral, no un objetivo.</li><li><strong>Gastos médicos altos</strong>, imprescindibles en EE. UU. y Canadá.</li><li><strong>Repatriación</strong> y desplazamiento de un familiar.</li><li><strong>Responsabilidad civil</strong> en la residencia.</li></ul>"),
        ("Estados Unidos y Reino Unido", "<p>Muchas universidades de EE. UU. exigen su propio plan o un formulario de exención con límites mínimos: compruébelo antes de contratar.</p>"),
        ("Prácticas y au pair", "<p>El comparador incluye estudios, prácticas y au pair.</p>"),
    ],
    faq=[
        ("¿Lo aceptará la universidad?", "Compare los límites con los requisitos escritos de la universidad."),
        ("¿Pueden contratarlo los padres?", "Sí, con los datos del estudiante que viaja."),
        ("¿Cubre todo el curso?", "Los planes de estudios cubren periodos largos; la duración máxima figura en cada oferta."),
    ],
)

S["ees"] = dict(
    slug="ees-etias", kind="guide", preset=dict(intent="forTourism"),
    title="EES y ETIAS: Colas en Frontera, Vuelos Perdidos y Seguro de Viaje | Adler & Rochefort",
    desc="El Sistema de Entradas y Salidas de la UE ya funciona y ETIAS no tiene fecha. Qué significa para visitantes latinoamericanos, británicos y estadounidenses, y qué paga el seguro de viaje.",
    crumb="EES y ETIAS", eyebrow="EES y ETIAS: qué cambia en su viaje",
    h1="EES y ETIAS: colas en frontera, vuelos perdidos y qué paga el seguro de viaje",
    lead="Desde abril de 2026 todo viajero no europeo que entra en el espacio Schengen se registra con huellas y foto. Las colas han sido largas y ETIAS aún está por llegar. Lo que significa para familiares y visitantes de fuera de la UE.",
    sections=[
        ("Qué es el EES y qué será ETIAS", "<p>El Sistema de Entradas y Salidas (EES) sustituye el sello del pasaporte para ciudadanos de fuera de la UE en estancias cortas. Funciona plenamente en todas las fronteras exteriores de Schengen desde el 10 de abril de 2026. El primer registro tarda más.</p><p>ETIAS será una autorización previa al viaje, de pago, para visitantes exentos de visado. La UE no ha fijado fecha y anunciará el inicio con varios meses de antelación. Hasta entonces no hay nada que solicitar.</p>"),
        ("¿Paga el seguro si la cola le hace perder el vuelo?", "<p>Depende del texto de la póliza. Algunos planes incluyen <strong>pérdida de conexión</strong> o <strong>retraso</strong>, pero a menudo solo por causas definidas — huelgas, accidentes, fallos del transporte público, meteorología. Los retrasos por trámites fronterizos pueden quedar excluidos. Lea esa cláusula y llegue con tiempo.</p>"),
        ("Visitantes latinoamericanos y familiares", "<p>Para quienes visitan España desde América Latina, la cobertura médica sigue siendo lo esencial: sin tarjeta sanitaria europea, cualquier urgencia se paga a precio privado. El comparador permite elegir el país de residencia de cada viajero.</p>"),
    ],
    faq=[
        ("¿Necesito ETIAS ahora para viajar a España?", "No. ETIAS no está en funcionamiento y no tiene fecha. Desconfíe de webs que cobran por «solicitudes ETIAS»."),
        ("¿El EES afecta a ciudadanos con pasaporte español?", "No. Se aplica a ciudadanos de fuera de la UE en estancias cortas."),
        ("¿Está cubierto un vuelo perdido por la cola de frontera?", "Solo si la cláusula de pérdida de conexión o retraso cubre esa causa."),
    ],
)
