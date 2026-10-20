"""IPMI destination pages added on 2026-10-20: Panama, Colombia, Malaysia, Singapore, Vietnam (EN),
Panamá and Colombia (ES). Appended to ipmi_pages_content.PAGES by build-ipmi-destinations-2026-10.py.

Country facts were checked on 2026-10-20 against the sources linked in each section. Visa and
social-security rules change often, so every page tells the reader to confirm the checklist with
the consulate or authority.
"""

EN_HUB = "/en/international-health-insurance/"
ES_HUB = "/es/seguro-medico-internacional/"

EXT = 'rel="noopener" target="_blank"'

NEW_PAGES = [
    # ---------------------------------------------------------------- Panama (EN)
    {
        "lang": "en", "path": EN_HUB + "panama/", "group": "panama",
        "crumb": "Panama",
        "title": "International Health Insurance in Panama for Expats & Retirees",
        "desc": "Retiring or moving to Panama? International health insurance from Allianz Care and Cigna Global, for the Pensionado and remote-worker visas.",
        "h1": "International health insurance for expats and retirees in Panama",
        "lead": "Panama City, Boquete, Coronado and the Azuero coast attract retirees and remote workers from North America, Europe and Latin America. The country uses the US dollar, has modern private hospitals in the capital, and offers one of the best-known retirement visas in the world. What it does not offer most newcomers is a public system they can rely on, which is why an international plan is usually the first thing to arrange.",
        "card": ("Panama", "Pensionado retirees and remote workers moving to Panama."),
        "sections": [
            ("Why expats in Panama choose private international cover",
             "<p>Panama’s public system has two parts: the <em>Caja de Seguro Social</em> (CSS), funded by contributions and tied mainly to formal employment, and the Ministry of Health (MINSA) network. A retiree who has never worked in Panama has no automatic route into the CSS, and waiting times for non-urgent procedures can be long. Most insured expats are treated in the private sector, at hospitals such as Hospital Punta Pacífica and Hospital Nacional in Panama City, where English-speaking specialists are concentrated (<a href=\"https://www.expatfocus.com/panama/guide/panama-health-insurance\" " + EXT + ">Expat Focus</a>).</p><p>An international plan pays those hospitals directly for pre-authorised in-patient treatment, covers you outside Panama inside your area of cover, and includes evacuation when the right treatment is in another country.</p>"),
            ("Health insurance and Panamanian visas",
             "<ul class=\"lp-list\"><li><strong>Pensionado (retiree) visa.</strong> Granted on proof of a lifetime pension; it gives discounts on medical consultations and hospital bills, but it is not health insurance. Insurance is not a formal condition of the Pensionado visa itself, yet for a retiree without access to the CSS it is the only real protection against a large hospital bill.</li><li><strong>Short-stay remote worker visa.</strong> Applicants must show foreign income of at least US$36,000 a year and a <strong>copy of a health insurance policy with coverage in Panama</strong> for the length of the stay. The visa is valid for nine months and can be extended once (<a href=\"https://kraemerlaw.com/en/immigration/panama-digital-nomad-visa/\" " + EXT + ">Kraemer &amp; Kraemer</a>).</li></ul><p>Panamanian consulates may ask for the insurance documents to be issued recently and legalised. Confirm your checklist with the consulate or your lawyer; we issue the certificate of insurance in English or Spanish as soon as the policy is in force.</p>"),
            ("Choosing the area of cover",
             "<p>Most clients in Panama choose worldwide cover excluding the USA, which covers treatment in Panama, the rest of Latin America and Europe. Americans and Canadians who want the option of treatment in the US can include it, at a higher premium. With Cigna Global, plans that exclude the US still include emergency hospital treatment there up to €75,000 on Silver and €200,000 on Gold, and in full on Platinum. We price both so you can see the difference.</p>"),
            ("Retirees, age and medical history",
             "<p>International plans are individually underwritten: you declare your medical history, and the insurer may cover a condition as standard, exclude it or apply a loading. Entry-age rules differ between insurers, so give us every age in the household and we tell you straight away which plans are open to you. US citizens are placed with Cigna Global, because Allianz Care does not accept US citizens. Panamanian citizens living in Panama are normally not eligible for an international plan.</p>"),
        ],
        "faq": [
            ("Do I need health insurance for the Pensionado visa?", "Insurance is not a formal condition of the Pensionado visa, and the Pensionado discounts are not insurance. Because a retiree without a Panamanian work history has no automatic access to the CSS, private cover is what protects you against a large hospital bill."),
            ("Does an international plan meet the remote-worker visa requirement?", "The visa asks for a health insurance policy with coverage in Panama for your stay. An international plan whose area of cover includes Panama provides that, and we issue the certificate of insurance for your application. The consulate decides what it accepts, so confirm the checklist with them."),
            ("Allianz Care or Cigna Global for Panama?", "Both write cover for expats living in Panama. Allianz Care includes repatriation in every plan; Cigna Global is more modular and accepts US citizens. We quote both on the same terms."),
            ("Can I be treated in the United States?", "Yes, if you choose worldwide cover including the USA. Without it, Cigna Global still covers emergency hospital treatment in the US up to the limit of your plan."),
        ],
        "related": [(EN_HUB, "International health insurance"), (EN_HUB + "retirees-abroad/", "Retirees living abroad"), (EN_HUB + "us-citizens-abroad/", "US citizens abroad"), (ES_HUB + "panama/", "Seguro médico internacional en Panamá")],
    },
    # ---------------------------------------------------------------- Colombia (EN)
    {
        "lang": "en", "path": EN_HUB + "colombia/", "group": "colombia",
        "crumb": "Colombia",
        "title": "International Health Insurance in Colombia for Expats",
        "desc": "Living in Medellín, Bogotá or the coast? How international health insurance works alongside Colombia’s EPS system, from Allianz Care and Cigna Global.",
        "h1": "International health insurance for expats in Colombia",
        "lead": "Medellín, Bogotá, Cartagena and Santa Marta are among the most popular destinations for remote workers and retirees in Latin America. Colombia has good private hospitals in its main cities and a mandatory public system that foreign residents may have to join. Understanding how the two fit together is the first step to choosing the right cover.",
        "card": ("Colombia", "Remote workers, retirees and families in Medellín, Bogotá and the coast."),
        "sections": [
            ("How healthcare works for foreigners in Colombia",
             "<p>Colombia’s health system is mandatory social insurance. Residents are affiliated to an <em>EPS</em> (health promoting entity): employees contribute through payroll, and self-employed residents pay as independent contributors, based on declared income. A foreigner needs a <em>cédula de extranjería</em>, issued after the visa, to affiliate. Specialist referrals through an EPS can take months, quality varies by region, and several EPS are under state intervention (<a href=\"https://www.expatfocus.com/colombia/guide/colombia-health-insurance\" " + EXT + ">Expat Focus</a>).</p><p>That is why most expats add private cover. Colombians use <em>medicina prepagada</em> or complementary plans, which give faster access to private clinics, but many of them stop accepting new members in the early sixties and they are built for treatment in Colombia.</p>"),
            ("Where an international plan fits",
             "<p>An international plan does not replace an EPS affiliation if the law requires you to have one. It sits alongside it and covers what the local system and local plans do not: private hospitals without referrals, high annual limits, cancer care, evacuation to another country, and treatment back home or in the rest of your area of cover. It also continues if you move to another country, which matters for remote workers who spend a few years in Colombia and then move on.</p>"),
            ("Health insurance and Colombian visas",
             "<p>Most Colombian visa categories ask for proof of health insurance valid in Colombia for the duration of the stay, including the digital nomad visa. Retirees should note that M-Pensionado visa holders have been reported to be unable to affiliate to an EPS, which makes private cover their main protection. The Ministry of Foreign Affairs (<em>Cancillería</em>) publishes the checklist for each visa and changes it from time to time, so confirm it before you apply. We issue the certificate of insurance in English or Spanish.</p>"),
            ("Choosing the plan",
             "<p>Most clients in Colombia choose worldwide cover excluding the USA, with hospital cover, evacuation and, for families, out-patient care. A deductible lowers the premium if you mainly want protection against large bills. US citizens are placed with Cigna Global, because Allianz Care does not accept US citizens. Colombian citizens living in Colombia are normally not eligible; Colombians living abroad are, and we advise them in Spanish.</p>"),
        ],
        "faq": [
            ("Do I still need an EPS if I have international insurance?", "It depends on your visa and your income. Where Colombian law requires affiliation, an international plan does not exempt you from it. The plan then gives you private treatment, evacuation and cover outside Colombia on top of the EPS."),
            ("Does an international plan meet Colombian visa requirements?", "An international plan whose area of cover includes Colombia gives you a certificate of insurance for your stay. The Cancillería decides what it accepts for each visa, so check the current checklist."),
            ("I am over 60. Can I still get cover?", "Often yes. Local prepaid plans frequently close to new members in the early sixties, while international insurers have their own entry-age rules. Give us every age in the household and we tell you which plans are open to you."),
            ("Allianz Care or Cigna Global for Colombia?", "Both write cover for expats living in Colombia. We send both configured on the same terms with our recommendation in writing."),
        ],
        "related": [(EN_HUB, "International health insurance"), (EN_HUB + "digital-nomads/", "Digital nomads and remote workers"), (EN_HUB + "retirees-abroad/", "Retirees living abroad"), (ES_HUB + "colombia/", "Seguro médico internacional en Colombia")],
    },
    # ---------------------------------------------------------------- Malaysia (EN)
    {
        "lang": "en", "path": EN_HUB + "malaysia/", "group": "malaysia",
        "crumb": "Malaysia",
        "title": "International Health Insurance in Malaysia (MM2H)",
        "desc": "Moving to Malaysia on MM2H or for work? International health insurance from Allianz Care and Cigna Global, with evacuation and cover outside Malaysia.",
        "h1": "International health insurance for expats in Malaysia",
        "lead": "Kuala Lumpur, Penang and Johor combine a low cost of living with private hospitals that treat patients from across Asia. Retirees arrive on the Malaysia My Second Home (MM2H) programme, professionals on employment passes. An international plan gives both private treatment in Malaysia and a way to be treated elsewhere when it matters.",
        "card": ("Malaysia", "MM2H retirees and professionals in Kuala Lumpur, Penang and Johor."),
        "sections": [
            ("Malaysia My Second Home (MM2H) and health insurance",
             "<p>MM2H is a long-stay programme with tiers that require a fixed deposit in a Malaysian bank: <strong>Silver</strong> (US$150,000), <strong>Gold</strong> (US$500,000) and <strong>Platinum</strong> (US$1 million), plus a Special Economic Zone tier currently limited to Forest City in Johor. Applicants complete a medical check-up at an approved clinic, and proof of valid health insurance is part of the application and of each renewal (<a href=\"https://mishu.my/blog/visa/mm2h-requirements/\" " + EXT + ">MM2H requirements guide</a>).</p><p>The rules have changed several times since 2021 and are set by the Ministry of Tourism and the Immigration Department, so confirm the current list before you apply. We issue the certificate of insurance in English as soon as the policy is in force.</p>"),
            ("Why choose international cover in Malaysia",
             "<p>Malaysian private hospitals are good value by international standards, but a long admission, cancer treatment or cardiac surgery still adds up. Local Malaysian policies are designed for treatment in Malaysia and can limit entry age. An international plan pays pre-authorised in-patient treatment directly, covers you in the rest of your area of cover, including Singapore and Europe, and includes evacuation when the right treatment is in another country.</p>"),
            ("Choosing the area of cover",
             "<p>Most clients in Malaysia choose worldwide cover excluding the USA: it covers Malaysia, regional centres such as Singapore and Bangkok, and treatment back in Europe. Cigna Global also covers temporary stays in your country of nationality of up to 180 days per policy year when that country is inside your area. Add the US only if you expect to be treated there.</p>"),
            ("Age and medical history",
             "<p>Many MM2H participants are retirees. International plans are individually underwritten: you declare your medical history and the insurer may cover a condition as standard, exclude it or apply a loading. Give us every age in the household and we tell you straight away which plans are open to you. Malaysian citizens living in Malaysia are normally not eligible for an international plan.</p>"),
        ],
        "faq": [
            ("Does an international plan meet the MM2H insurance requirement?", "An international plan whose area of cover includes Malaysia gives you a certificate of insurance for the application and for renewals. The MM2H authorities decide what they accept, so check the current checklist."),
            ("Is Singapore covered if I live in Malaysia?", "Yes, with worldwide cover excluding the USA, or any area that includes Singapore. Many clients in Johor and Kuala Lumpur want that option."),
            ("Allianz Care or Cigna Global for Malaysia?", "Both write cover for expats living in Malaysia. Allianz Care includes repatriation in every plan; Cigna Global is more modular and accepts US citizens. We quote both on the same terms."),
            ("Can my spouse and children be on the same policy?", "Yes. One contract can cover the whole family, which also simplifies the paperwork for dependants on MM2H."),
        ],
        "related": [(EN_HUB, "International health insurance"), (EN_HUB + "retirees-abroad/", "Retirees living abroad"), (EN_HUB + "singapore/", "Expats in Singapore"), (EN_HUB + "thailand/", "Expats in Thailand")],
    },
    # ---------------------------------------------------------------- Singapore (EN)
    {
        "lang": "en", "path": EN_HUB + "singapore/", "group": "singapore",
        "crumb": "Singapore",
        "title": "International Health Insurance in Singapore for Expats",
        "desc": "Employment Pass or Dependant’s Pass in Singapore? Foreigners are outside MediShield Life. International health insurance from Allianz Care and Cigna Global.",
        "h1": "International health insurance for expats in Singapore",
        "lead": "Singapore has some of the best hospitals in Asia and some of the highest medical costs. Foreigners on work passes are outside the national MediShield Life scheme, and employer cover is often more limited than people expect, especially for spouses and children.",
        "card": ("Singapore", "Employment Pass holders and families: cover beyond the employer plan."),
        "sections": [
            ("Why foreigners in Singapore need their own cover",
             "<ul class=\"lp-list\"><li><strong>MediShield Life is for Singapore Citizens and Permanent Residents.</strong> Foreigners without PR status are generally not covered.</li><li><strong>Work Permit and S Pass.</strong> The employer must provide medical insurance with at least <strong>S$60,000</strong> of annual cover for in-patient care and day surgery.</li><li><strong>Employment Pass.</strong> The Ministry of Manpower does not require employers to insure Employment Pass holders. Many do, but the cover depends on the company policy.</li><li><strong>Dependant’s Pass.</strong> Spouses and children are not automatically on the employer plan.</li><li><strong>Public hospitals.</strong> Foreigners can use them but pay unsubsidised rates.</li></ul><p>Source: <a href=\"https://www.april-international.com/en/long-term-international-health-insurance/guide/do-expats-need-health-insurance-singapore\" " + EXT + ">APRIL International</a>, summarising Ministry of Manpower rules.</p>"),
            ("Topping up or replacing an employer plan",
             "<p>Group plans in Singapore often have annual or per-condition limits, cover only the employee, and end the day the job ends. An individual international plan is yours: it covers the whole family, continues between jobs, and moves with you if the next posting is in Hong Kong, Dubai or back in Europe. Some clients use it to replace the employer plan; others take a hospital-only plan with a deductible as a top-up.</p>"),
            ("Choosing the area of cover",
             "<p>Most clients in Singapore choose worldwide cover excluding the USA, which covers Singapore, the rest of Asia and treatment back home. Because medical costs in Singapore are high, we recommend high annual limits and direct settlement with the private hospitals. Add the US only if you expect to be treated there.</p>"),
            ("Eligibility",
             "<p>International plans are for people living outside their country of nationality, so Singaporeans living in Singapore are normally not eligible. US citizens are placed with Cigna Global, because Allianz Care does not accept US citizens. Individual plans are medically underwritten: you declare your history and the insurer may exclude a condition or apply a loading, unlike many group plans.</p>"),
        ],
        "faq": [
            ("Am I covered by MediShield Life as a foreigner?", "Generally no. MediShield Life covers Singapore Citizens and Permanent Residents. Foreigners on work passes rely on employer cover or their own insurance."),
            ("My employer insures me. Do I need anything else?", "Check three things: the annual limit, whether your spouse and children are covered, and what happens when you leave the company. An individual plan closes the gaps and stays with you."),
            ("Is maternity covered?", "With Allianz Care, maternity is included in the Enhanced and Signature plans after twelve months of cover; with Cigna Global, it is part of Gold and Platinum once the mother has been insured for twelve months. If a child is planned, choose the right level from the start, because the waiting period begins on day one."),
            ("Allianz Care or Cigna Global for Singapore?", "Both write cover for expats living in Singapore. We quote both on the same terms with our recommendation."),
        ],
        "related": [(EN_HUB, "International health insurance"), (EN_HUB + "malaysia/", "Expats in Malaysia"), (EN_HUB + "vietnam/", "Expats in Vietnam"), (EN_HUB + "us-citizens-abroad/", "US citizens abroad")],
    },
    # ---------------------------------------------------------------- Vietnam (EN)
    {
        "lang": "en", "path": EN_HUB + "vietnam/", "group": "vietnam",
        "crumb": "Vietnam",
        "title": "International Health Insurance in Vietnam for Expats",
        "desc": "Working or living in Ho Chi Minh City, Hanoi or Da Nang? International health insurance with evacuation, and how it fits with Vietnam’s compulsory insurance.",
        "h1": "International health insurance for expats in Vietnam",
        "lead": "Ho Chi Minh City, Hanoi and Da Nang have growing international communities of teachers, engineers, entrepreneurs and remote workers. Private international clinics serve them well for everyday care, but complex treatment often means a transfer to Bangkok, Singapore or home. Evacuation cover is the first thing to get right.",
        "card": ("Vietnam", "Professionals, teachers and families in Ho Chi Minh City, Hanoi and Da Nang."),
        "sections": [
            ("Vietnam’s compulsory insurance for foreign employees",
             "<p>Under the Law on Social Insurance No. 41/2024/QH15, in force since 1 July 2025, foreign employees with a labour contract of at least 12 months and a valid work permit must join Vietnam’s compulsory social insurance. Compulsory health insurance contributions are shared between employer and employee (<a href=\"https://www.ascentium.com/vietnam/insights/vietnam-social-insurance-shui\" " + EXT + ">Ascentium</a>). Your employer handles the registration.</p><p>National health insurance gives access to the registered public facilities. It is not designed for treatment in international private hospitals or abroad, so most expats add their own cover.</p>"),
            ("Why evacuation matters in Vietnam",
             "<p>International hospitals and clinics in Ho Chi Minh City and Hanoi handle most needs, but for some cancer treatment, complex surgery or trauma care the right hospital may be in another country. Allianz Care includes repatriation in every plan; with Cigna Global, International Medical Evacuation is an optional module that we recommend for Vietnam.</p>"),
            ("Choosing the plan",
             "<p>Most clients in Vietnam choose worldwide cover excluding the USA: it covers Vietnam, regional centres such as Bangkok and Singapore, and treatment back home. Families usually add out-patient care. A deductible lowers the premium if you mainly want protection against large bills.</p>"),
            ("Eligibility",
             "<p>International plans are for people living outside their country of nationality, so Vietnamese citizens living in Vietnam are normally not eligible. US citizens are placed with Cigna Global, because Allianz Care does not accept US citizens. We confirm with the insurer, before quoting, that residence in Vietnam is accepted for your nationality.</p>"),
        ],
        "faq": [
            ("I pay into Vietnam’s compulsory insurance. Do I need a private plan?", "The national scheme covers care at registered public facilities. A private international plan covers international hospitals, evacuation and treatment outside Vietnam, which the national scheme does not."),
            ("Is medical evacuation included?", "Allianz Care includes repatriation in every plan. With Cigna Global, evacuation is an optional module that we recommend for Vietnam."),
            ("I teach in Vietnam and my school provides insurance. Is it enough?", "Check the annual limit, whether evacuation is included and whether it covers you outside Vietnam. Many school and company plans are local and end with the contract."),
            ("Allianz Care or Cigna Global for Vietnam?", "Both write cover for expats living in Vietnam. We quote both on the same terms with our recommendation in writing."),
        ],
        "related": [(EN_HUB, "International health insurance"), (EN_HUB + "thailand/", "Expats in Thailand"), (EN_HUB + "singapore/", "Expats in Singapore"), (EN_HUB + "digital-nomads/", "Digital nomads and remote workers")],
    },
    # ---------------------------------------------------------------- Panamá (ES)
    {
        "lang": "es", "path": ES_HUB + "panama/", "group": "panama",
        "crumb": "Panamá",
        "title": "Seguro Médico Internacional en Panamá para Extranjeros y Jubilados",
        "desc": "¿Se jubila o se muda a Panamá? Seguro médico internacional de Allianz Care y Cigna Global, para la visa de Pensionado y la de trabajador remoto.",
        "h1": "Seguro médico internacional para extranjeros y jubilados en Panamá",
        "lead": "Ciudad de Panamá, Boquete, Coronado y Azuero reciben a jubilados y trabajadores remotos de Norteamérica, Europa y toda América Latina. El país usa el dólar, tiene hospitales privados modernos en la capital y una de las visas de jubilado más conocidas del mundo. Lo que no ofrece a la mayoría de los recién llegados es un sistema público con el que puedan contar.",
        "card": ("Panamá", "Jubilados con visa de Pensionado y trabajadores remotos."),
        "sections": [
            ("Por qué los extranjeros en Panamá eligen un seguro internacional",
             "<p>El sistema público panameño tiene dos partes: la <em>Caja de Seguro Social</em> (CSS), financiada con cotizaciones y ligada sobre todo al empleo formal, y la red del Ministerio de Salud (MINSA). Un jubilado que nunca ha trabajado en Panamá no tiene acceso automático a la CSS, y las esperas para procedimientos no urgentes pueden ser largas. La mayoría de los extranjeros asegurados se atiende en el sector privado, en hospitales como el Hospital Punta Pacífica y el Hospital Nacional (<a href=\"https://www.expatfocus.com/panama/guide/panama-health-insurance\" " + EXT + ">Expat Focus</a>).</p><p>Un plan internacional paga directamente al hospital los ingresos autorizados, le cubre fuera de Panamá dentro de su zona de cobertura e incluye evacuación cuando el tratamiento adecuado está en otro país.</p>"),
            ("El seguro y las visas panameñas",
             "<ul class=\"lp-list\"><li><strong>Visa de Pensionado.</strong> Se concede con prueba de una pensión vitalicia y da descuentos en consultas y facturas hospitalarias, pero no es un seguro. El seguro no es requisito formal de esta visa, pero para un jubilado sin acceso a la CSS es la única protección real frente a una factura hospitalaria elevada.</li><li><strong>Visa de trabajador remoto de corta estancia.</strong> Exige ingresos del exterior de al menos 36.000 dólares al año y una <strong>copia de una póliza de salud con cobertura en Panamá</strong> durante la estancia. Es válida nueve meses y se puede prorrogar una vez (<a href=\"https://kraemerlaw.com/en/immigration/panama-digital-nomad-visa/\" " + EXT + ">Kraemer &amp; Kraemer</a>).</li></ul><p>El consulado puede pedir que los documentos del seguro sean recientes y estén legalizados. Confirme la lista con el consulado o su abogado; emitimos el certificado de seguro en español o inglés en cuanto la póliza está en vigor.</p>"),
            ("Zona de cobertura",
             "<p>La mayoría de nuestros clientes en Panamá elige cobertura mundial excepto EE. UU., que cubre Panamá, el resto de América Latina y Europa. Quien quiera poder tratarse en Estados Unidos puede incluirlo, con una prima más alta. Con Cigna Global, los planes sin EE. UU. incluyen igualmente la hospitalización de urgencia allí hasta 75.000 € en Silver y 200.000 € en Gold, y sin ese límite en Platinum.</p>"),
            ("Edad e historial médico",
             "<p>Los planes internacionales se suscriben de forma individual: usted declara su historial y la aseguradora puede cubrir una condición en condiciones normales, excluirla o aplicar una sobreprima. Las edades de entrada varían entre aseguradoras; indíquenos la edad de cada persona y le decimos enseguida qué planes están abiertos. Los ciudadanos estadounidenses van con Cigna Global, porque Allianz Care no los acepta. Los ciudadanos panameños que viven en Panamá normalmente no son elegibles.</p>"),
        ],
        "faq": [
            ("¿Necesito seguro médico para la visa de Pensionado?", "No es un requisito formal de la visa, y los descuentos de Pensionado no son un seguro. Como un jubilado sin historial laboral en Panamá no tiene acceso automático a la CSS, el seguro privado es lo que le protege frente a una factura hospitalaria elevada."),
            ("¿Sirve un plan internacional para la visa de trabajador remoto?", "La visa pide una póliza de salud con cobertura en Panamá durante la estancia. Un plan internacional cuya zona incluya Panamá lo cumple y emitimos el certificado para su solicitud. Quien decide qué acepta es el consulado."),
            ("¿Allianz Care o Cigna Global para Panamá?", "Ambas aseguran a extranjeros residentes en Panamá. Le enviamos las dos configuradas en las mismas condiciones, con nuestra recomendación por escrito."),
            ("Soy venezolano o colombiano y me mudo a Panamá. ¿Puedo contratar?", "Sí. Al vivir fuera de su país de nacionalidad es elegible para un plan internacional. Confirmamos con la aseguradora su nacionalidad y residencia antes de cotizar."),
        ],
        "related": [(ES_HUB, "Seguro médico internacional"), (ES_HUB + "colombia/", "Seguro médico internacional en Colombia"), (ES_HUB + "nomadas-digitales/", "Nómadas digitales"), (EN_HUB + "panama/", "International health insurance in Panama")],
    },
    # ---------------------------------------------------------------- Colombia (ES)
    {
        "lang": "es", "path": ES_HUB + "colombia/", "group": "colombia",
        "crumb": "Colombia",
        "title": "Seguro Médico Internacional en Colombia para Extranjeros",
        "desc": "¿Vive en Medellín, Bogotá o la costa? Cómo encaja un seguro médico internacional con la EPS en Colombia. Allianz Care y Cigna Global comparadas.",
        "h1": "Seguro médico internacional para extranjeros en Colombia",
        "lead": "Medellín, Bogotá, Cartagena y Santa Marta están entre los destinos favoritos de trabajadores remotos y jubilados en América Latina. Colombia tiene buenas clínicas privadas en sus ciudades principales y un sistema público obligatorio al que los residentes extranjeros pueden tener que afiliarse. Entender cómo encajan los dos es el primer paso.",
        "card": ("Colombia", "Trabajadores remotos, jubilados y familias en Medellín, Bogotá y la costa."),
        "sections": [
            ("Cómo funciona la salud para extranjeros en Colombia",
             "<p>El sistema de salud colombiano es un seguro social obligatorio. Los residentes se afilian a una <em>EPS</em>: los empleados cotizan por nómina y los independientes cotizan sobre sus ingresos declarados. El extranjero necesita la <em>cédula de extranjería</em>, que se expide después de la visa, para afiliarse. Las remisiones a especialistas pueden tardar meses, la calidad varía por región y varias EPS están intervenidas por el Estado (<a href=\"https://www.expatfocus.com/colombia/guide/colombia-health-insurance\" " + EXT + ">Expat Focus</a>).</p><p>Por eso la mayoría de los extranjeros añade un seguro privado. La <em>medicina prepagada</em> da acceso más rápido a clínicas privadas, pero muchos planes dejan de aceptar nuevos afiliados a partir de los sesenta y pocos años y están pensados para tratarse en Colombia.</p>"),
            ("Dónde encaja un plan internacional",
             "<p>Un plan internacional no sustituye la afiliación a una EPS cuando la ley la exige. Se suma a ella y cubre lo que el sistema y los planes locales no cubren: clínicas privadas sin remisión, límites anuales altos, tratamiento oncológico, evacuación a otro país y tratamiento en su país de origen o en el resto de su zona de cobertura. Además continúa si se muda a otro país.</p>"),
            ("El seguro y las visas colombianas",
             "<p>La mayoría de las visas colombianas pide una póliza de salud válida en Colombia durante la estancia, incluida la visa de nómada digital. Para los jubilados con visa M de Pensionado se ha informado de que no pueden afiliarse a una EPS, lo que convierte el seguro privado en su principal protección. La Cancillería publica y actualiza la lista de requisitos de cada visa; confírmela antes de presentar la solicitud. Emitimos el certificado de seguro en español o inglés.</p>"),
            ("Elegir el plan",
             "<p>La mayoría de nuestros clientes en Colombia elige cobertura mundial excepto EE. UU., con hospitalización, evacuación y, para familias, consultas ambulatorias. Un deducible reduce la prima si busca sobre todo protección frente a facturas grandes. Los colombianos que viven en Colombia normalmente no son elegibles; los que viven en el extranjero sí, y les asesoramos en español.</p>"),
        ],
        "faq": [
            ("¿Necesito una EPS si tengo seguro internacional?", "Depende de su visa y de sus ingresos. Cuando la ley exige la afiliación, el plan internacional no le exime. Le da tratamiento privado, evacuación y cobertura fuera de Colombia además de la EPS."),
            ("¿Sirve un plan internacional para la visa colombiana?", "Un plan internacional cuya zona incluya Colombia le da un certificado de seguro para su estancia. La Cancillería decide qué acepta para cada visa, así que revise la lista vigente."),
            ("Tengo más de 60 años. ¿Puedo asegurarme?", "Con frecuencia, sí. Muchos planes de medicina prepagada cierran a nuevos afiliados a partir de los sesenta y pocos años, mientras que las aseguradoras internacionales tienen sus propias edades de entrada. Indíquenos la edad de cada persona y le decimos qué planes están abiertos."),
            ("Soy colombiano y vivo en España. ¿Puedo contratar?", "Sí. Al vivir fuera de Colombia es elegible para un plan internacional. Vea también nuestra guía para quien se muda a España."),
        ],
        "related": [(ES_HUB, "Seguro médico internacional"), (ES_HUB + "panama/", "Seguro médico internacional en Panamá"), (ES_HUB + "espana/", "Seguro médico internacional en España"), (EN_HUB + "colombia/", "International health insurance in Colombia")],
    },
]
