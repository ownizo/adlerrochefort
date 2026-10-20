"""Localised copy for scripts/add-home-insurers.py.

Sources: the insurers' wordings, schedules and proposals analysed for clients.
- Hiscox Holiday Homes (wording 35019 02/26, Hiscox's Portuguese branch):
  no limit on unoccupied days; water damage, vandalism and accidental damage
  exclusions apply only if the home is not furnished for normal use; rebuild
  cost with flexibility by agreement up to the sum insured, no proportional
  rule; liability EUR 7.5m; accidental damage extension; emergency travel and
  temporary accommodation; loss of rent; free lending to family and friends
  accepted; no deductible above EUR 10,000; earthquake deductible the greater
  of EUR 7,500 or 2.5% of buildings and contents; no EUR 150,000 contents
  minimum; jewellery and watches excluded; personal belongings outside the
  home only in the country and up to 90 days.
- Hiscox home insurance for residents: contents from EUR 150,000; all-risks;
  art/antiques and valuables/personal possessions sections; possessions
  worldwide; alternative accommodation up to two years; fees and demolition
  up to 15% on top of the sum insured; liability EUR 7.5m; no deductible above
  EUR 10,000 except earthquake; theft cover requires a monitored alarm (or
  keyholders) installed within 30 days and serviced yearly.
- Liberty Mutual via Innovarisk, Home Insurance (main residence outside
  Portugal, not let regularly) and Home Insurance Plus (main residence or
  permanent supervision, contents from EUR 150,000): all risks incl.
  accidental damage; proportional rule waived except the compulsory fire cover
  of a flat in a condominium; rebuild cost and, if rebuilding is not
  reasonable, an agreed amount up to the sum insured; liability EUR 7.5m; no
  deductible above EUR 10,000; alternative accommodation up to two years;
  fees and demolition up to 15% on top; emergency travel EUR 525 per ticket,
  EUR 2,250 a year; garden incl. storm; loss of rent up to EUR 37,500;
  three-year Long Term Agreement (first-year loss ratio below 50%, premiums
  paid; binds the insurer only); contents new for old; leak detection up to
  EUR 25,000 (Plus); Portuguese law; furnished-for-normal-living exclusion;
  paid letting declared, occasional, signed agreement; AL operation needs its
  own liability policy.
Chubb is deliberately not named on home pages.
"""

SECOND_HOME = {
    "pt": "/seguros/casa-desocupada/",
    "en": "/en/second-home-insurance-portugal/",
    "de": "/de/leerstand-ferienhaus-versicherung-portugal-spanien/",
    "es": "/es/vivienda-vacia-seguro-segunda-residencia/",
}
HIGH_VALUE = {
    "pt": "/seguros/habitacao/",
    "en": "/en/home-insurance-quote/",
    "de": "/de/hausversicherung-portugal/",
    "es": "/es/seguro-hogar-alto-valor/",
    "it": "/it/assicurazione-casa-alto-valore/",
    "nl": "/nl/woonverzekering-portugal/",
}

HOLIDAY = {
"en": {
 "title": "Holiday homes: the two policies we place most, Hiscox and Liberty",
 "intro": "Most of the holiday homes we insure in Portugal sit with Hiscox or with Liberty Mutual. Both were written for owners who are not there all year, which is exactly where a standard Portuguese policy fails: the unoccupancy clause that suspends cover after 30, 60 or 90 days.",
 "a_t": "Hiscox Holiday Homes",
 "a_by": "For a second home in Portugal, issued by Hiscox's Portuguese branch.",
 "a": [
  "<strong>No limit on the days the house can stay empty.</strong> The water damage, vandalism and accidental damage exclusions only apply if the house is not furnished for normal use.",
  "Buildings settled on rebuild cost, with flexibility by agreement up to the sum insured, and no proportional reduction.",
  "Liability of €7,500,000, an accidental damage extension, and emergency travel to the house and temporary accommodation after a claim.",
  "Loss of rent cover; lending the house free of charge to family and friends is accepted.",
  "No deductible on claims above €10,000; earthquake deductible of €7,500 or 2.5% of buildings and contents, whichever is higher.",
  "Contents insured at the level the house really needs, with no €150,000 minimum.",
 ],
 "a_watch": "Jewellery and watches are not covered, and personal belongings are covered outside the house only in Portugal and for up to 90 days.",
 "b_t": "Liberty Mutual, through Innovarisk",
 "b_by": "Home Insurance for owners whose main residence is outside Portugal and who do not let the house regularly.",
 "b": [
  "All risks, including accidental damage, with the proportional rule waived (except for the compulsory fire cover of a flat in a condominium, where Portugal's standard fire wording still applies).",
  "Rebuild cost and, if rebuilding is not reasonable, an agreed amount up to the sum insured.",
  "Liability of €7,500,000, no deductible on claims above €10,000, and alternative accommodation for up to two years.",
  "Emergency travel to the house (€525 per ticket, €2,250 a year), garden cover including storm, and loss of rent up to €37,500.",
  "<strong>Three-year Long Term Agreement:</strong> Liberty renews on the same terms for three years if the first-year loss ratio stays below 50% and premiums are paid. It binds the insurer, not you.",
 ],
 "b_watch": "The house must be furnished for normal living. Paid letting has to be declared, be occasional and rest on a signed rental agreement; short-term tourist letting (Alojamento Local) needs its own liability policy.",
 "watch": "Watch",
 "need_t": "What we need to quote a holiday home",
 "need": [
  "Address, type of property, year of construction and gross area.",
  "Your country of residence and how many weeks a year the house is used.",
  "Whether the house is lent or let, to whom and how often.",
  "Rebuild value (we calculate it with the APS SCRIM simulator) and the contents to insure.",
  "Alarm, safe, and who checks the house while you are away.",
 ],
 "note": "Conditions summarised from each insurer's wording and the proposals we place; the policy issued and its schedule always prevail, and cover is subject to the insurer's acceptance.",
 "link": "Second home insurance in Portugal",
},
"pt": {
 "title": "Casas de férias: as duas apólices que mais colocamos, Hiscox e Liberty",
 "intro": "A maior parte das casas de férias que seguramos em Portugal está na Hiscox ou na Liberty Mutual. As duas foram pensadas para proprietários que não estão cá o ano inteiro, que é exatamente onde a apólice portuguesa corrente falha: a cláusula de desocupação que suspende coberturas ao fim de 30, 60 ou 90 dias.",
 "a_t": "Hiscox Holiday Homes",
 "a_by": "Para uma segunda habitação em Portugal, emitido pela sucursal portuguesa da Hiscox.",
 "a": [
  "<strong>Sem limite de dias de desocupação.</strong> As exclusões de danos por água, vandalismo e danos acidentais só se aplicam se a casa não estiver mobilada para uso normal.",
  "Edifício indemnizado pelo custo de reconstrução, com flexibilidade por acordo até ao capital seguro, e sem regra proporcional.",
  "Responsabilidade civil de 7.500.000 €, extensão de danos acidentais e viagem de emergência à casa e alojamento temporário depois de um sinistro.",
  "Cobertura de perda de rendas; a cedência gratuita da casa a familiares e amigos é aceite.",
  "Sem franquia em sinistros acima de 10.000 €; franquia de sismo de 7.500 € ou 2,5% do edifício e recheio, o que for maior.",
  "Recheio seguro pelo valor que a casa realmente precisa, sem mínimo de 150.000 €.",
 ],
 "a_watch": "Joias e relógios não estão cobertos, e os bens pessoais fora de casa só estão cobertos em Portugal e até 90 dias.",
 "b_t": "Liberty Mutual, através da Innovarisk",
 "b_by": "Home Insurance para proprietários com residência principal fora de Portugal que não arrendam a casa com regularidade.",
 "b": [
  "Todos os riscos, incluindo danos acidentais, com renúncia à regra proporcional (exceto na cobertura obrigatória de incêndio de uma fração em propriedade horizontal, onde continua a valer a Apólice Uniforme).",
  "Custo de reconstrução e, se reconstruir não for razoável, um valor acordado até ao capital seguro.",
  "Responsabilidade civil de 7.500.000 €, sem franquia em sinistros acima de 10.000 € e realojamento até dois anos.",
  "Viagem de emergência à casa (525 € por bilhete, 2.250 € por ano), jardim incluindo tempestade e perda de rendas até 37.500 €.",
  "<strong>Acordo de longo prazo de três anos:</strong> a Liberty renova nas mesmas condições durante três anos se a sinistralidade do primeiro ano ficar abaixo de 50% e os prémios estiverem pagos. Vincula a seguradora, não o cliente.",
 ],
 "b_watch": "A casa tem de estar mobilada para uso normal. O arrendamento pago tem de ser declarado, ocasional e com contrato assinado; o alojamento local precisa da sua própria apólice de responsabilidade civil.",
 "watch": "Atenção",
 "need_t": "O que precisamos para cotar uma casa de férias",
 "need": [
  "Morada, tipo de imóvel, ano de construção e área bruta.",
  "O país de residência e quantas semanas por ano a casa é usada.",
  "Se a casa é emprestada ou arrendada, a quem e com que frequência.",
  "Valor de reconstrução (calculamo-lo com o simulador SCRIM da APS) e o recheio a segurar.",
  "Alarme, cofre e quem verifica a casa durante a ausência.",
 ],
 "note": "Condições resumidas a partir das condições de cada seguradora e das propostas que colocamos; prevalecem sempre a apólice emitida e as condições particulares, e a cobertura está sujeita à aceitação da seguradora.",
 "link": "Seguro de casa desocupada e segunda habitação",
},
"de": {
 "title": "Ferienhäuser: die zwei Policen, die wir am häufigsten platzieren — Hiscox und Liberty",
 "intro": "Die meisten Ferienhäuser, die wir in Portugal versichern, liegen bei Hiscox oder Liberty Mutual. Beide sind für Eigentümer gemacht, die nicht das ganze Jahr vor Ort sind — genau dort versagt die portugiesische Standardpolice: mit der Leerstandsklausel, die den Schutz nach 30, 60 oder 90 Tagen aussetzt.",
 "a_t": "Hiscox Holiday Homes",
 "a_by": "Für einen Zweitwohnsitz in Portugal, ausgestellt von der portugiesischen Niederlassung von Hiscox.",
 "a": [
  "<strong>Keine Begrenzung der Leerstandstage.</strong> Die Ausschlüsse für Leitungswasser, Vandalismus und unbenannte Gefahren greifen nur, wenn das Haus nicht für die normale Nutzung möbliert ist.",
  "Gebäude zum Wiederaufbauwert, mit Spielraum nach Vereinbarung bis zur Versicherungssumme, ohne Unterversicherungskürzung.",
  "Haftpflicht von 7.500.000 €, Erweiterung auf unbenannte Gefahren sowie Notfallreise zum Haus und vorübergehende Unterkunft nach einem Schaden.",
  "Mietausfall versichert; die kostenlose Überlassung an Familie und Freunde ist akzeptiert.",
  "Kein Selbstbehalt bei Schäden über 10.000 €; Erdbeben-Selbstbehalt von 7.500 € oder 2,5 % von Gebäude und Hausrat, je nachdem, was höher ist.",
  "Hausrat in der Höhe versichert, die das Haus wirklich braucht, ohne Mindestsumme von 150.000 €.",
 ],
 "a_watch": "Schmuck und Uhren sind nicht versichert; persönliche Gegenstände außerhalb des Hauses nur in Portugal und bis zu 90 Tage.",
 "b_t": "Liberty Mutual über Innovarisk",
 "b_by": "Home Insurance für Eigentümer mit Hauptwohnsitz außerhalb Portugals, die das Haus nicht regelmäßig vermieten.",
 "b": [
  "Allgefahren einschließlich unbenannter Gefahren, mit Verzicht auf die Unterversicherungskürzung (außer bei der Pflicht-Feuerdeckung einer Eigentumswohnung, wo der portugiesische Einheitswortlaut gilt).",
  "Wiederaufbauwert und, wenn der Wiederaufbau nicht sinnvoll ist, ein vereinbarter Betrag bis zur Versicherungssumme.",
  "Haftpflicht von 7.500.000 €, kein Selbstbehalt bei Schäden über 10.000 € und Ersatzunterkunft bis zu zwei Jahre.",
  "Notfallreise zum Haus (525 € pro Ticket, 2.250 € pro Jahr), Garten einschließlich Sturm und Mietausfall bis 37.500 €.",
  "<strong>Dreijährige Long Term Agreement:</strong> Liberty verlängert drei Jahre zu gleichen Bedingungen, wenn die Schadenquote im ersten Jahr unter 50 % bleibt und die Beiträge bezahlt sind. Sie bindet den Versicherer, nicht Sie.",
 ],
 "b_watch": "Das Haus muss für die normale Nutzung möbliert sein. Bezahlte Vermietung muss gemeldet werden, gelegentlich sein und auf einem unterschriebenen Mietvertrag beruhen; Ferienvermietung (Alojamento Local) braucht eine eigene Haftpflichtpolice.",
 "watch": "Achtung",
 "need_t": "Was wir für ein Ferienhaus-Angebot brauchen",
 "need": [
  "Adresse, Art der Immobilie, Baujahr und Bruttofläche.",
  "Ihr Wohnsitzland und wie viele Wochen im Jahr das Haus genutzt wird.",
  "Ob das Haus überlassen oder vermietet wird, an wen und wie oft.",
  "Wiederaufbauwert (wir berechnen ihn mit dem SCRIM-Simulator der APS) und der zu versichernde Hausrat.",
  "Alarmanlage, Tresor und wer das Haus in Ihrer Abwesenheit kontrolliert.",
 ],
 "note": "Bedingungen aus den Unterlagen der Versicherer und den von uns platzierten Angeboten zusammengefasst; maßgeblich sind immer die ausgestellte Police und ihre Besonderen Bedingungen, und der Schutz hängt von der Annahme durch den Versicherer ab.",
 "link": "Ferienhaus in Portugal oder Spanien: die Leerstandsklausel",
},
"es": {
 "title": "Casas de vacaciones: las dos pólizas que más colocamos, Hiscox y Liberty",
 "intro": "La mayoría de las casas de vacaciones que aseguramos en Portugal están en Hiscox o en Liberty Mutual. Las dos están pensadas para propietarios que no están todo el año, que es justo donde falla la póliza portuguesa habitual: la cláusula de deshabitación que suspende coberturas a los 30, 60 o 90 días.",
 "a_t": "Hiscox Holiday Homes",
 "a_by": "Para una segunda residencia en Portugal, emitida por la sucursal portuguesa de Hiscox.",
 "a": [
  "<strong>Sin límite de días de deshabitación.</strong> Las exclusiones de daños por agua, vandalismo y daños accidentales solo se aplican si la casa no está amueblada para uso normal.",
  "Continente indemnizado por el coste de reconstrucción, con flexibilidad por acuerdo hasta la suma asegurada, y sin regla proporcional.",
  "Responsabilidad civil de 7.500.000 €, extensión de daños accidentales y viaje de emergencia a la casa y alojamiento temporal tras un siniestro.",
  "Cobertura de pérdida de alquileres; se acepta prestar la casa gratis a familiares y amigos.",
  "Sin franquicia en siniestros de más de 10.000 €; franquicia de terremoto de 7.500 € o el 2,5% de continente y contenido, lo que sea mayor.",
  "Contenido asegurado por lo que la casa realmente necesita, sin mínimo de 150.000 €.",
 ],
 "a_watch": "Las joyas y los relojes no están cubiertos, y los efectos personales fuera de casa solo en Portugal y hasta 90 días.",
 "b_t": "Liberty Mutual, a través de Innovarisk",
 "b_by": "Home Insurance para propietarios con residencia principal fuera de Portugal que no alquilan la casa con regularidad.",
 "b": [
  "Todo riesgo, incluidos daños accidentales, con renuncia a la regla proporcional (salvo en la cobertura obligatoria de incendio de un piso en régimen de propiedad horizontal, donde rige la póliza uniforme portuguesa).",
  "Coste de reconstrucción y, si reconstruir no es razonable, un importe acordado hasta la suma asegurada.",
  "Responsabilidad civil de 7.500.000 €, sin franquicia en siniestros de más de 10.000 € y alojamiento alternativo hasta dos años.",
  "Viaje de emergencia a la casa (525 € por billete, 2.250 € al año), jardín incluida tormenta y pérdida de alquileres hasta 37.500 €.",
  "<strong>Acuerdo a largo plazo de tres años:</strong> Liberty renueva en las mismas condiciones durante tres años si la siniestralidad del primer año queda por debajo del 50% y las primas están pagadas. Obliga a la aseguradora, no a usted.",
 ],
 "b_watch": "La casa debe estar amueblada para uso normal. El alquiler pagado debe declararse, ser ocasional y tener contrato firmado; el alquiler turístico (Alojamento Local) necesita su propia póliza de responsabilidad civil.",
 "watch": "Atención",
 "need_t": "Qué necesitamos para cotizar una casa de vacaciones",
 "need": [
  "Dirección, tipo de inmueble, año de construcción y superficie construida.",
  "Su país de residencia y cuántas semanas al año usa la casa.",
  "Si la casa se presta o se alquila, a quién y con qué frecuencia.",
  "Valor de reconstrucción (lo calculamos con el simulador SCRIM de la APS) y el contenido a asegurar.",
  "Alarma, caja fuerte y quién revisa la casa en su ausencia.",
 ],
 "note": "Condiciones resumidas a partir de los documentos de cada aseguradora y de las propuestas que colocamos; prevalecen siempre la póliza emitida y sus condiciones particulares, y la cobertura está sujeta a la aceptación de la aseguradora.",
 "link": "Segunda residencia vacía: la cláusula de deshabitación",
},
}

HIGHVALUE = {
"en": {
 "title": "High-value homes: Hiscox and Liberty",
 "intro": "For a main residence of real value, we place cover mainly with Hiscox and Liberty Mutual. Both settle on rebuild cost rather than a cadastral figure and both write liability of €7,500,000; they differ on alarms, on how they treat the proportional rule and on the law of the contract.",
 "a_t": "Hiscox — home insurance for residents",
 "a_by": "For residents of Portugal or Spain, with contents from €150,000.",
 "a": [
  "All-risks extension, with art and antiques and valuables and personal possessions in their own sections; personal possessions covered worldwide.",
  "Rebuild cost, with flexibility by agreement up to the sum insured; alternative accommodation for up to two years; architects' and engineers' fees and demolition up to 15% on top of the sum insured.",
  "Liability of €7,500,000; no deductible on claims above €10,000, except earthquake.",
 ],
 "a_watch": "Theft cover can require an alarm connected to a monitoring centre (or to keyholders), installed within 30 days and serviced every year.",
 "b_t": "Liberty Mutual Home Insurance Plus, through Innovarisk",
 "b_by": "For a main residence or a house under permanent supervision, with contents from €150,000.",
 "b": [
  "All risks, with the proportional rule expressly waived (except for the compulsory fire cover of a flat in a condominium).",
  "Rebuild cost and, if rebuilding is not reasonable, an agreed amount up to the sum insured; alternative accommodation for up to two years; fees and demolition up to 15% on top.",
  "Contents replaced new for old; leak detection and repair up to €25,000.",
  "Liability of €7,500,000; no deductible on claims above €10,000; a three-year Long Term Agreement on renewal terms; Portuguese law.",
 ],
 "b_watch": "Alarm and safe conditions can be set as subjectivities, depending on the contents and valuables declared.",
 "watch": "Watch",
 "need_t": "What we need to quote",
 "need": [
  "Address, year of construction and gross area.",
  "Rebuild value: we calculate it with the APS SCRIM simulator and round it up for walls, pools and outbuildings.",
  "Contents and valuables to insure, and how they are kept.",
  "Alarm and security, and any claims in the last five years.",
  "The mortgage lender, if it has to be named on the policy.",
 ],
 "note": "Conditions summarised from each insurer's wording and the proposals we place; the policy issued and its schedule always prevail, and cover is subject to the insurer's acceptance.",
 "link2": "For a second home, see our holiday-home cover",
},
"pt": {
 "title": "Casas de elevado valor: Hiscox e Liberty",
 "intro": "Para uma residência principal de valor, colocamos a cobertura sobretudo na Hiscox e na Liberty Mutual. As duas indemnizam pelo custo de reconstrução e não por um valor matricial, e as duas dão responsabilidade civil de 7.500.000 €; diferem no alarme, no tratamento da regra proporcional e na lei do contrato.",
 "a_t": "Hiscox — seguro de habitação para residentes",
 "a_by": "Para residentes em Portugal ou em Espanha, com recheio a partir de 150.000 €.",
 "a": [
  "Extensão «todos os riscos», com arte e antiguidades e objetos de valor e bens pessoais em secções próprias; bens pessoais cobertos em todo o mundo.",
  "Custo de reconstrução, com flexibilidade por acordo até ao capital seguro; realojamento até dois anos; honorários de arquitetos e engenheiros e demolição até 15% acima do capital seguro.",
  "Responsabilidade civil de 7.500.000 €; sem franquia em sinistros acima de 10.000 €, exceto sismo.",
 ],
 "a_watch": "A cobertura de furto pode exigir alarme ligado a central (ou a pessoas de contacto), instalado em 30 dias e revisto todos os anos.",
 "b_t": "Liberty Mutual Home Insurance Plus, através da Innovarisk",
 "b_by": "Para residência principal ou casa com vigilância permanente, com recheio a partir de 150.000 €.",
 "b": [
  "Todos os riscos, com renúncia expressa à regra proporcional (exceto na cobertura obrigatória de incêndio de uma fração em propriedade horizontal).",
  "Custo de reconstrução e, se reconstruir não for razoável, um valor acordado até ao capital seguro; realojamento até dois anos; honorários e demolição até 15% acima do capital.",
  "Recheio substituído em novo; pesquisa e reparação de fugas até 25.000 €.",
  "Responsabilidade civil de 7.500.000 €; sem franquia em sinistros acima de 10.000 €; acordo de renovação de três anos; lei portuguesa.",
 ],
 "b_watch": "Podem ser fixadas condições de alarme e cofre, consoante o recheio e os objetos de valor declarados.",
 "watch": "Atenção",
 "need_t": "O que precisamos para cotar",
 "need": [
  "Morada, ano de construção e área bruta.",
  "Valor de reconstrução: calculamo-lo com o simulador SCRIM da APS e arredondamos para cima por causa de muros, piscinas e anexos.",
  "Recheio e objetos de valor a segurar, e como são guardados.",
  "Alarme e segurança, e sinistros nos últimos cinco anos.",
  "O banco credor, se tiver de constar da apólice.",
 ],
 "note": "Condições resumidas a partir das condições de cada seguradora e das propostas que colocamos; prevalecem sempre a apólice emitida e as condições particulares, e a cobertura está sujeita à aceitação da seguradora.",
 "link2": "Para uma segunda habitação, veja o seguro de casa desocupada",
},
"de": {
 "title": "Hochwertige Häuser: Hiscox und Liberty",
 "intro": "Für einen hochwertigen Hauptwohnsitz platzieren wir den Schutz vor allem bei Hiscox und Liberty Mutual. Beide entschädigen zum Wiederaufbauwert statt zu einem Katasterwert, beide bieten 7.500.000 € Haftpflicht; sie unterscheiden sich bei der Alarmanlage, bei der Unterversicherungsregel und beim anwendbaren Recht.",
 "a_t": "Hiscox — Hausversicherung für Ansässige",
 "a_by": "Für Ansässige in Portugal oder Spanien, mit Hausrat ab 150.000 €.",
 "a": [
  "Allgefahren-Erweiterung, mit Kunst und Antiquitäten sowie Wertsachen und persönlichen Gegenständen in eigenen Abschnitten; persönliche Gegenstände weltweit versichert.",
  "Wiederaufbauwert, mit Spielraum nach Vereinbarung bis zur Versicherungssumme; Ersatzunterkunft bis zu zwei Jahre; Architekten-, Ingenieur- und Abrisskosten bis 15 % über der Versicherungssumme.",
  "Haftpflicht von 7.500.000 €; kein Selbstbehalt bei Schäden über 10.000 €, außer Erdbeben.",
 ],
 "a_watch": "Der Diebstahlschutz kann eine auf eine Notrufzentrale (oder Kontaktpersonen) aufgeschaltete Alarmanlage, installiert innerhalb von 30 Tagen und jährlich gewartet, verlangen.",
 "b_t": "Liberty Mutual Home Insurance Plus über Innovarisk",
 "b_by": "Für einen Hauptwohnsitz oder ein ständig beaufsichtigtes Haus, mit Hausrat ab 150.000 €.",
 "b": [
  "Allgefahren, mit ausdrücklichem Verzicht auf die Unterversicherungskürzung (außer bei der Pflicht-Feuerdeckung einer Eigentumswohnung).",
  "Wiederaufbauwert und, wenn der Wiederaufbau nicht sinnvoll ist, ein vereinbarter Betrag bis zur Versicherungssumme; Ersatzunterkunft bis zu zwei Jahre; Honorare und Abriss bis 15 % zusätzlich.",
  "Hausrat zum Neuwert; Leckortung und Reparatur bis 25.000 €.",
  "Haftpflicht von 7.500.000 €; kein Selbstbehalt bei Schäden über 10.000 €; dreijährige Verlängerungszusage; portugiesisches Recht.",
 ],
 "b_watch": "Je nach gemeldetem Hausrat und Wertsachen können Bedingungen zu Alarmanlage und Tresor festgelegt werden.",
 "watch": "Achtung",
 "need_t": "Was wir für ein Angebot brauchen",
 "need": [
  "Adresse, Baujahr und Bruttofläche.",
  "Wiederaufbauwert: Wir berechnen ihn mit dem SCRIM-Simulator der APS und runden für Mauern, Pools und Nebengebäude auf.",
  "Zu versichernder Hausrat und Wertsachen, und wie sie aufbewahrt werden.",
  "Alarmanlage und Sicherheit sowie Schäden der letzten fünf Jahre.",
  "Die finanzierende Bank, falls sie in der Police genannt werden muss.",
 ],
 "note": "Bedingungen aus den Unterlagen der Versicherer und den von uns platzierten Angeboten zusammengefasst; maßgeblich sind immer die ausgestellte Police und ihre Besonderen Bedingungen, und der Schutz hängt von der Annahme durch den Versicherer ab.",
 "link2": "Für einen Zweitwohnsitz: unser Ferienhaus-Schutz",
},
"es": {
 "title": "Viviendas de alto valor: Hiscox y Liberty",
 "intro": "Para una residencia principal de valor, colocamos la cobertura sobre todo en Hiscox y en Liberty Mutual. Las dos indemnizan por el coste de reconstrucción y no por un valor catastral, y las dos dan responsabilidad civil de 7.500.000 €; difieren en la alarma, en el trato de la regla proporcional y en la ley del contrato.",
 "a_t": "Hiscox — seguro de hogar para residentes",
 "a_by": "Para residentes en Portugal o en España, con contenido desde 150.000 €.",
 "a": [
  "Extensión a todo riesgo, con arte y antigüedades y objetos de valor y efectos personales en secciones propias; efectos personales cubiertos en todo el mundo.",
  "Coste de reconstrucción, con flexibilidad por acuerdo hasta la suma asegurada; alojamiento alternativo hasta dos años; honorarios de arquitectos e ingenieros y demolición hasta un 15% por encima de la suma asegurada.",
  "Responsabilidad civil de 7.500.000 €; sin franquicia en siniestros de más de 10.000 €, salvo terremoto.",
 ],
 "a_watch": "La cobertura de robo puede exigir una alarma conectada a central (o a personas de contacto), instalada en 30 días y revisada cada año.",
 "b_t": "Liberty Mutual Home Insurance Plus, a través de Innovarisk",
 "b_by": "Para residencia principal o vivienda con vigilancia permanente, con contenido desde 150.000 €.",
 "b": [
  "Todo riesgo, con renuncia expresa a la regla proporcional (salvo en la cobertura obligatoria de incendio de un piso en propiedad horizontal).",
  "Coste de reconstrucción y, si reconstruir no es razonable, un importe acordado hasta la suma asegurada; alojamiento alternativo hasta dos años; honorarios y demolición hasta un 15% adicional.",
  "Contenido a valor de nuevo; búsqueda y reparación de fugas hasta 25.000 €.",
  "Responsabilidad civil de 7.500.000 €; sin franquicia en siniestros de más de 10.000 €; acuerdo de renovación de tres años; ley portuguesa.",
 ],
 "b_watch": "Pueden fijarse condiciones de alarma y caja fuerte según el contenido y los objetos de valor declarados.",
 "watch": "Atención",
 "need_t": "Qué necesitamos para cotizar",
 "need": [
  "Dirección, año de construcción y superficie construida.",
  "Valor de reconstrucción: lo calculamos con el simulador SCRIM de la APS y lo redondeamos al alza por muros, piscinas y anexos.",
  "Contenido y objetos de valor a asegurar, y cómo se guardan.",
  "Alarma y seguridad, y siniestros en los últimos cinco años.",
  "El banco acreedor, si debe figurar en la póliza.",
 ],
 "note": "Condiciones resumidas a partir de los documentos de cada aseguradora y de las propuestas que colocamos; prevalecen siempre la póliza emitida y sus condiciones particulares, y la cobertura está sujeta a la aceptación de la aseguradora.",
 "link2": "Para una segunda residencia, vea nuestra cobertura para viviendas vacías",
},
"it": {
 "title": "Case di alto valore: Hiscox e Liberty",
 "intro": "Per un'abitazione principale di valore collochiamo la copertura soprattutto presso Hiscox e Liberty Mutual. Entrambe indennizzano al costo di ricostruzione e non a un valore catastale, ed entrambe danno una responsabilità civile di 7.500.000 €; differiscono su allarme, regola proporzionale e legge del contratto.",
 "a_t": "Hiscox — assicurazione casa per residenti",
 "a_by": "Per residenti in Portogallo o in Spagna, con contenuto a partire da 150.000 €.",
 "a": [
  "Estensione all risks, con arte e antiquariato e oggetti di valore ed effetti personali in sezioni proprie; effetti personali coperti in tutto il mondo.",
  "Costo di ricostruzione, con flessibilità per accordo fino alla somma assicurata; alloggio alternativo fino a due anni; onorari di architetti e ingegneri e demolizione fino al 15% oltre la somma assicurata.",
  "Responsabilità civile di 7.500.000 €; nessuna franchigia sui sinistri oltre 10.000 €, salvo terremoto.",
 ],
 "a_watch": "La copertura furto può richiedere un allarme collegato a una centrale (o a persone di riferimento), installato entro 30 giorni e revisionato ogni anno.",
 "b_t": "Liberty Mutual Home Insurance Plus, tramite Innovarisk",
 "b_by": "Per abitazione principale o casa con sorveglianza permanente, con contenuto a partire da 150.000 €.",
 "b": [
  "All risks, con rinuncia espressa alla regola proporzionale (salvo per la copertura incendio obbligatoria di un appartamento in condominio).",
  "Costo di ricostruzione e, se ricostruire non è ragionevole, un importo concordato fino alla somma assicurata; alloggio alternativo fino a due anni; onorari e demolizione fino al 15% in più.",
  "Contenuto a nuovo; ricerca e riparazione perdite fino a 25.000 €.",
  "Responsabilità civile di 7.500.000 €; nessuna franchigia oltre 10.000 €; accordo di rinnovo triennale; legge portoghese.",
 ],
 "b_watch": "Possono essere fissate condizioni su allarme e cassaforte, in base al contenuto e agli oggetti di valore dichiarati.",
 "watch": "Attenzione",
 "need_t": "Cosa ci serve per un preventivo",
 "need": [
  "Indirizzo, anno di costruzione e superficie lorda.",
  "Valore di ricostruzione: lo calcoliamo con il simulatore SCRIM dell'APS e lo arrotondiamo per muri, piscine e dipendenze.",
  "Contenuto e oggetti di valore da assicurare, e come sono custoditi.",
  "Allarme e sicurezza, e sinistri degli ultimi cinque anni.",
  "La banca creditrice, se deve comparire in polizza.",
 ],
 "note": "Condizioni riassunte dai documenti di ciascun assicuratore e dalle proposte che collochiamo; prevalgono sempre la polizza emessa e le condizioni particolari, e la copertura è soggetta all'accettazione dell'assicuratore.",
 "link2": "Per una seconda casa: la nostra copertura per case vacanza (in inglese)",
},
"nl": {
 "title": "Hoogwaardige woningen: Hiscox en Liberty",
 "intro": "Voor een waardevol hoofdverblijf plaatsen wij de dekking vooral bij Hiscox en Liberty Mutual. Beide keren uit op herbouwwaarde en niet op een kadastrale waarde, en beide bieden € 7.500.000 aansprakelijkheid; ze verschillen in alarmeisen, de onderverzekeringsregel en het toepasselijk recht.",
 "a_t": "Hiscox — woonhuisverzekering voor inwoners",
 "a_by": "Voor inwoners van Portugal of Spanje, met een inboedel vanaf € 150.000.",
 "a": [
  "All-risks-uitbreiding, met kunst en antiek en kostbaarheden en persoonlijke bezittingen in eigen secties; persoonlijke bezittingen wereldwijd verzekerd.",
  "Herbouwwaarde, met ruimte in overleg tot het verzekerd bedrag; vervangende woonruimte tot twee jaar; honoraria van architecten en ingenieurs en sloop tot 15% boven het verzekerd bedrag.",
  "Aansprakelijkheid van € 7.500.000; geen eigen risico bij schades boven € 10.000, behalve aardbeving.",
 ],
 "a_watch": "De dekking voor diefstal kan een alarm vereisen, aangesloten op een meldkamer (of contactpersonen), binnen 30 dagen geïnstalleerd en jaarlijks onderhouden.",
 "b_t": "Liberty Mutual Home Insurance Plus, via Innovarisk",
 "b_by": "Voor een hoofdverblijf of een woning onder permanent toezicht, met een inboedel vanaf € 150.000.",
 "b": [
  "All risks, met uitdrukkelijke afstand van de onderverzekeringsregel (behalve bij de verplichte brandverzekering van een appartement in een VvE).",
  "Herbouwwaarde en, als herbouw niet redelijk is, een overeengekomen bedrag tot het verzekerd bedrag; vervangende woonruimte tot twee jaar; honoraria en sloop tot 15% extra.",
  "Inboedel op nieuwwaarde; lekdetectie en herstel tot € 25.000.",
  "Aansprakelijkheid van € 7.500.000; geen eigen risico boven € 10.000; driejarige verlengingsafspraak; Portugees recht.",
 ],
 "b_watch": "Afhankelijk van de opgegeven inboedel en kostbaarheden kunnen alarm- en kluisvoorwaarden worden gesteld.",
 "watch": "Let op",
 "need_t": "Wat wij nodig hebben voor een offerte",
 "need": [
  "Adres, bouwjaar en bruto-oppervlakte.",
  "Herbouwwaarde: wij berekenen die met de SCRIM-simulator van de APS en ronden naar boven af voor muren, zwembaden en bijgebouwen.",
  "Te verzekeren inboedel en kostbaarheden, en hoe die bewaard worden.",
  "Alarm en beveiliging, en schades in de laatste vijf jaar.",
  "De hypotheekverstrekker, als die op de polis moet staan.",
 ],
 "note": "Voorwaarden samengevat uit de documenten van elke verzekeraar en de voorstellen die wij plaatsen; de afgegeven polis en de bijzondere voorwaarden gaan altijd voor, en de dekking hangt af van acceptatie door de verzekeraar.",
 "link2": "Voor een tweede woning: onze dekking voor vakantiewoningen (Engels)",
},
"he": {
 "title": "בתים בעלי ערך גבוה: Hiscox ו-Liberty",
 "intro": "למגורי קבע בעלי ערך אנו מבטחים בעיקר אצל Hiscox ו-Liberty Mutual. שתיהן מפצות לפי עלות בנייה מחדש ולא לפי שווי רשום, ושתיהן נותנות ביטוח חבות של 7,500,000 אירו; הן נבדלות בדרישות האזעקה, ביחס לכלל היחסי ובדין החל על החוזה.",
 "a_t": "Hiscox — ביטוח דירה לתושבים",
 "a_by": "לתושבי פורטוגל או ספרד, עם תכולה מ-150,000 אירו.",
 "a": [
  "הרחבת כל הסיכונים, עם אמנות ועתיקות וחפצי ערך וחפצים אישיים בפרקים נפרדים; חפצים אישיים מבוטחים בכל העולם.",
  "עלות בנייה מחדש, עם גמישות בהסכמה עד סכום הביטוח; דיור חלופי עד שנתיים; שכר אדריכלים ומהנדסים והריסה עד 15% מעל סכום הביטוח.",
  "ביטוח חבות של 7,500,000 אירו; ללא השתתפות עצמית בנזקים מעל 10,000 אירו, למעט רעידת אדמה.",
 ],
 "a_watch": "כיסוי גניבה עשוי לחייב אזעקה מחוברת למוקד (או לאנשי קשר), מותקנת בתוך 30 יום ונבדקת מדי שנה.",
 "b_t": "Liberty Mutual Home Insurance Plus, באמצעות Innovarisk",
 "b_by": "למגורי קבע או לבית בהשגחה קבועה, עם תכולה מ-150,000 אירו.",
 "b": [
  "כל הסיכונים, עם ויתור מפורש על הכלל היחסי (למעט כיסוי האש החובה של דירה בבית משותף).",
  "עלות בנייה מחדש, ואם בנייה מחדש אינה סבירה — סכום מוסכם עד סכום הביטוח; דיור חלופי עד שנתיים; שכר טרחה והריסה עד 15% נוספים.",
  "תכולה לפי ערך חדש; איתור ותיקון נזילות עד 25,000 אירו.",
  "ביטוח חבות של 7,500,000 אירו; ללא השתתפות עצמית מעל 10,000 אירו; הסכם חידוש לשלוש שנים; דין פורטוגלי.",
 ],
 "b_watch": "ייתכנו תנאים לגבי אזעקה וכספת, בהתאם לתכולה ולחפצי הערך שהוצהרו.",
 "watch": "שימו לב",
 "need_t": "מה אנו צריכים להצעת מחיר",
 "need": [
  "כתובת, שנת בנייה ושטח ברוטו.",
  "עלות בנייה מחדש: אנו מחשבים אותה בסימולטור SCRIM של APS ומעגלים כלפי מעלה עבור חומות, בריכות ומבני עזר.",
  "התכולה וחפצי הערך לביטוח, ואופן שמירתם.",
  "אזעקה ואבטחה, ותביעות בחמש השנים האחרונות.",
  "הבנק המממן, אם יש לציין אותו בפוליסה.",
 ],
 "note": "התנאים מסוכמים ממסמכי כל מבטח ומההצעות שאנו מבטחים; הפוליסה שהונפקה ותנאיה המיוחדים גוברים תמיד, והכיסוי כפוף לאישור המבטח.",
 "link2": "לבית שני: הכיסוי שלנו לבתי נופש (באנגלית)",
},
"zh": {
 "title": "高价值住宅：Hiscox 与 Liberty",
 "intro": "对于价值较高的主要住所，我们主要安排 Hiscox 和 Liberty Mutual 承保。两家都按重建成本而非登记价值赔付，第三者责任保额均为750万欧元；区别在于报警要求、比例赔偿原则的处理以及合同适用法律。",
 "a_t": "Hiscox — 常住居民家庭保险",
 "a_by": "适用于葡萄牙或西班牙居民，室内财产15万欧元起。",
 "a": [
  "附一切险扩展，艺术品与古董、贵重物品与个人物品分设独立部分；个人物品全球承保。",
  "按重建成本赔付，可协商至保额；临时住所最长两年；建筑师、工程师费用及拆除费用最高可在保额之上另加15%。",
  "第三者责任750万欧元；单次损失超过1万欧元免除免赔额，地震除外。",
 ],
 "a_watch": "盗窃保障可能要求安装连接监控中心（或联系人）的报警系统，30天内安装并每年保养。",
 "b_t": "Liberty Mutual Home Insurance Plus（通过 Innovarisk）",
 "b_by": "适用于主要住所或有长期看管的房屋，室内财产15万欧元起。",
 "b": [
  "一切险，明确放弃比例赔偿原则（共管公寓的法定火险除外）。",
  "按重建成本赔付；若重建不合理，按约定金额赔付，以保额为限；临时住所最长两年；专业费用及拆除费用另加最高15%。",
  "室内财产按新换旧赔付；漏水查找与修复最高2.5万欧元。",
  "第三者责任750万欧元；单次损失超过1万欧元免除免赔额；三年续保协议；适用葡萄牙法律。",
 ],
 "b_watch": "视申报的室内财产和贵重物品而定，可能附加报警和保险柜条件。",
 "watch": "注意",
 "need_t": "报价所需资料",
 "need": [
  "地址、建造年份和建筑面积。",
  "重建成本：我们用葡萄牙保险协会（APS）的 SCRIM 模拟器计算，并因围墙、泳池和附属建筑向上取整。",
  "需投保的室内财产和贵重物品，以及存放方式。",
  "报警与安保情况，以及近五年的理赔记录。",
  "如需在保单上列明，提供贷款银行信息。",
 ],
 "note": "条件根据各保险公司文件及我们安排的报价概括；以实际签发的保单及其特别条款为准，承保须经保险公司接受。",
 "link2": "第二住所：我们的度假屋保障（英文）",
},
}
