"""Français. Faits : scripts/cancer_cover/README.md. Langue de travail : anglais (UI lang_policy)."""
TABLE = (
    '<div class="ipmi-table cc-table"><table><thead><tr><th></th><th>MGEN</th><th>Médis</th><th>International (IPMI)</th></tr></thead><tbody>'
    "<tr><td>Pour qui</td><td>Clients avec antécédents et clients de plus de 65 ans</td><td>Clients en bonne santé de moins de 65 ans voulant un capital élevé</td><td>Clients voulant se soigner dans plusieurs pays</td></tr>"
    "<tr><td>Antécédents</td><td>Couverts après 365 jours</td><td>Exclus</td><td>Évalués par sélection médicale</td></tr>"
    "<tr><td>Capital pour le cancer</td><td>Dans les garanties du contrat</td><td>1 000 000 € maladies graves (formule la plus complète)</td><td>Cigna Global : traitement du cancer pris en charge intégralement dans les formules de base</td></tr>"
    "<tr><td>Lieu des soins</td><td>Portugal</td><td>Portugal</td><td>Partout dans la zone choisie</td></tr>"
    "<tr><td>Âge d’adhésion</td><td>Sans limite</td><td>Jusqu’à 65 ans</td><td>Selon l’assureur</td></tr>"
    "<tr><td>Questionnaire médical</td><td>Non</td><td>Oui</td><td>Oui</td></tr>"
    "<tr><td>Conditions</td><td>Deux personnes ou plus, NIF et adresse portugais</td><td>NIF et adresse portugais</td><td>Pas d’adresse portugaise requise</td></tr>"
    "</tbody></table></div>"
)

PAGE = {
    "title": "Cancer et assurance santé au Portugal | Adler & Rochefort",
    "desc": "Comment les assurances santé portugaises et internationales prennent en charge le cancer : plafonds, délais de carence, antécédents et soins à l’étranger.",
    "eyebrow": "Assurance santé · Couverture du cancer",
    "crumb": "Cancer et assurance santé",
    "h1": "Cancer et assurance santé au Portugal : couverture locale et internationale",
    "lead": "La plupart des assurances santé couvrent le cancer. Les vraies différences portent sur le montant pris en charge, la date de début de la couverture et le lieu où vous pouvez être soigné. Ce guide explique comment les assurances portugaises et internationales traitent le cancer, et quelle solution convient à chaque situation.",
    "facts": [
        "Le traitement du cancer est couvert par les contrats locaux et internationaux, dans la limite des plafonds, délais de carence et exclusions de chacun.",
        "Les assureurs portugais excluent en règle générale les antécédents médicaux et n’acceptent pas de nouveaux assurés après 65 ans.",
        "MGEN fait exception : les antécédents sont couverts après 365 jours de carence, sans questionnaire médical ni limite d’âge.",
        "Médis prévoit, dans sa formule la plus complète, 1 000 000 € pour les maladies graves, cancer inclus, avec 180 jours de carence.",
        "Les formules internationales (Allianz Care, Cigna Global) couvrent les soins partout dans la zone choisie ; les antécédents sont évalués par sélection médicale.",
        "Pour une proposition : nom complet, date de naissance, nationalité et pays de résidence. Sans frais pour vous.",
    ],
    "sections": [
        ("Pourquoi la couverture du cancer est la première question",
         "<p>Un traitement contre le cancer est long et coûteux. Chirurgie, chimiothérapie, radiothérapie et thérapies ciblées peuvent durer des mois, voire des années. Un contrat généreux pour les soins courants peut atteindre son plafond en plein traitement.</p>"
         "<p>La bonne question n’est donc pas de savoir si le contrat couvre le cancer, mais combien il paie, à partir de quand, pour quels antécédents et dans quel pays.</p>"),
        ("Comment les assurances portugaises couvrent le cancer",
         "<p>Les contrats portugais prennent en charge le traitement du cancer jusqu’au plafond de chaque garantie, principalement au Portugal. Quatre points déterminent la qualité de votre protection :</p>"
         "<ul><li><strong>Plafond.</strong> L’hospitalisation et les soins ambulatoires ont des plafonds annuels. Certains contrats ajoutent un capital spécifique pour les maladies graves, décisif pour les traitements longs.</li>"
         "<li><strong>Délais de carence.</strong> La garantie maladies graves ne démarre souvent qu’après plusieurs mois. Un diagnostic pendant cette période n’est pas couvert.</li>"
         "<li><strong>Antécédents médicaux.</strong> Les assureurs portugais excluent en règle générale toute affection antérieure à la souscription. Un cancer passé, ou des symptômes déjà à l’étude, ne sont généralement pas couverts.</li>"
         "<li><strong>Âge et conditions.</strong> La plupart des assureurs n’acceptent de nouveaux assurés que jusqu’à 65 ans. Chaque assuré doit avoir une adresse et un numéro fiscal (NIF) portugais.</li></ul>"
         "<p>Deux assureurs avec lesquels nous travaillons abordent ces limites autrement : MGEN pour les antécédents, Médis pour le plafond.</p>"),
        ("MGEN : antécédents couverts après 365 jours",
         "<p>MGEN est l’exception sur le marché portugais. Elle n’exclut pas les antécédents médicaux : ils sont couverts après un délai de carence de 365 jours. C’est essentiel pour toute personne ayant des antécédents de cancer, ou une affection qui pourrait plus tard y être liée.</p>"
         "<ul><li><strong>Aucun questionnaire médical</strong> à l’adhésion.</li>"
         "<li><strong>Aucune limite d’âge</strong> à l’adhésion. MGEN est donc la principale option locale après 65 ans.</li>"
         "<li><strong>Au moins deux assurés</strong> du même foyer. MGEN n’est pas disponible pour une personne seule.</li>"
         "<li><strong>NIF et adresse portugais</strong> pour chaque assuré, avec justificatif de domicile.</li></ul>"
         "<p>Les 365 jours courent à partir du début du contrat. Souscrire tôt reste la meilleure protection.</p>"),
        ("Médis : des capitaux élevés pour les maladies graves",
         "<p>Médis est l’une des options locales les plus solides lorsque le plafond est la priorité. Sa formule la plus complète comprend une garantie Maladies graves (Doenças Graves) de 1 000 000 €, cancer inclus, en plus de l’hospitalisation et des soins ambulatoires.</p>"
         "<ul><li><strong>1 000 000 € pour les maladies graves</strong> dans la formule la plus complète.</li>"
         "<li><strong>Délai de carence de 180 jours</strong> pour cette garantie.</li>"
         "<li><strong>Accompagnement en oncologie</strong>, dont prothèses et orthèses, soutien psychologique et soins infirmiers à domicile.</li>"
         "<li><strong>Deuxième avis médical illimité.</strong></li>"
         "<li><strong>Antécédents exclus</strong>, comme chez la plupart des assureurs portugais.</li></ul>"
         "<p>Médis convient aux clients en bonne santé de moins de 65 ans qui souhaitent une réserve importante face à un diagnostic grave. Nous plaçons Médis via notre contrat d’agence avec Zurich.</p>"),
        ("Assurance santé internationale : se soigner là où vous êtes",
         "<p>Les formules internationales s’adressent à ceux qui vivent hors de leur pays de nationalité, changent de pays ou veulent pouvoir se faire soigner hors du Portugal. Un diagnostic n’a pas à changer votre lieu de vie ni le choix de votre oncologue.</p>"
         "<ul><li><strong><a href=\"/fr/assurance-sante-internationale/cigna-global/\">Cigna Global</a>.</strong> Le traitement du cancer fait partie de la couverture de base des formules Silver, Gold et Platinum et est pris en charge intégralement. Silver a un plafond annuel de 1 000 000 US$ ; Platinum, le plafond annuel le plus élevé, sans limite fixe.</li>"
         "<li><strong><a href=\"/fr/assurance-sante-internationale/allianz-care/\">Allianz Care</a>.</strong> L’hospitalisation est incluse dans chaque formule et le dépistage du cancer est couvert dans toute la gamme. Une zone de couverture Europe seule existe à côté des options mondiales.</li></ul>"
         "<p>Trois points diffèrent. Vous choisissez une <strong>zone de couverture</strong>, et les soins sont couverts partout dans cette zone. Les <strong>antécédents</strong> sont évalués par sélection médicale : l’assureur peut les couvrir, les exclure ou appliquer une surprime. Et <strong>aucune adresse portugaise n’est exigée</strong>.</p>"),
        ("Quelle solution vous convient", TABLE),
        ("Cinq questions à poser avant de souscrire",
         "<ol><li>Quel est le capital annuel pour le traitement du cancer, et existe-t-il un capital distinct pour les maladies graves ?</li>"
         "<li>Quel est le délai de carence avant que le cancer soit couvert ?</li>"
         "<li>Comment sont traités mes antécédents médicaux ?</li>"
         "<li>Puis-je être soigné hors du Portugal, et à quelles conditions ?</li>"
         "<li>Les médicaments oncologiques, examens de suivi et thérapies ambulatoires sont-ils couverts comme l’hospitalisation ?</li></ol>"
         "<p>Les réponses se trouvent dans les conditions du contrat, pas dans la prime. C’est là qu’un courtier fait la différence.</p>"),
        ("Comment Adler &amp; Rochefort vous accompagne",
         "<p>Nous sélectionnons les propositions selon les garanties, les capitaux et la gestion des sinistres, jamais selon la prime la plus basse. Face au cancer, ce choix détermine votre protection.</p>"
         "<p>Courtier réglementé dans l’UE et enregistré auprès du superviseur portugais (ASF), nous travaillons avec plusieurs assureurs locaux et internationaux. Nous comparons leurs conditions selon votre âge, vos antécédents et vos projets, et expliquons les différences par écrit.</p>"),
    ],
    "faq": [
        ("L’assurance santé au Portugal couvre-t-elle le cancer ?", "Oui. Les contrats locaux et internationaux couvrent le cancer, dans la limite de leurs plafonds, délais de carence et exclusions."),
        ("J’ai déjà eu un cancer. Puis-je être couvert ?", "Chez la plupart des assureurs portugais, un cancer antérieur est exclu. MGEN couvre les antécédents après 365 jours de carence. Les assureurs internationaux étudient chaque dossier."),
        ("J’ai plus de 65 ans. Quelles sont mes options ?", "La plupart des assureurs portugais n’acceptent pas de nouveaux assurés après 65 ans. MGEN n’a pas de limite d’âge si au moins deux personnes du même foyer adhèrent. Les formules internationales sont une autre voie, sous réserve de sélection médicale."),
        ("Puis-je me faire soigner en France si je vis au Portugal ?", "Avec une assurance santé internationale, oui, si la France est dans votre zone de couverture. Les contrats portugais sont surtout conçus pour des soins au Portugal."),
        ("Que se passe-t-il si le diagnostic survient pendant la carence ?", "Il n’est pas couvert. La date de début du contrat compte donc autant que le plafond."),
    ],
    "related": [
        ("/fr/assurance-sante-internationale/", "Assurance santé internationale pour expatriés"),
        ("/fr/assurance-sante-internationale/cigna-global/", "Cigna Global : assurance santé internationale"),
        ("/fr/assurance-sante-internationale/allianz-care/", "Allianz Care : assurance santé internationale"),
    ],
    "form_h2": "Demander une proposition écrite",
    "form_lead": "Dites-nous qui doit être assuré et où vous vivez. Nous comparons les options locales et internationales pour votre situation et vous répondons par écrit.",
    "sources_label": "Sources",
    "sources": [
        ("Médis : formulaire Seguro de Saúde (avril 2025)", "https://www.medis.pt/media/7572/proposta-individuais-pt_medis-editavel.pdf"),
        ("Cigna Global : assurances santé internationales", "https://www.cignaglobal.com/"),
        ("Allianz Partners : nouvelles formules Care (novembre 2025)", "https://allianzcare.com/en/about-us/news/allianz-international-health-insurance-plans-update.html"),
    ],
}
