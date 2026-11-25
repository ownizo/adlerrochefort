# -*- coding: utf-8 -*-
"""FR travel insurance landings — 25 Nov 2026 (residents in France / francophones).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"fr": dict(home_crumb="Assurance voyage", others="Comparer l'assurance voyage selon le voyage",
                 guides="Guides de l'assurance voyage", tool_h="Comparer les offres pour ce voyage",
                 tool_p="Tarifs en direct de plusieurs assureurs, classés d'abord par la couverture médicale. Modifiez les champs selon votre voyage.",
                 faq_h="Questions fréquentes", rel_h="À lire aussi", main_link="Tous les voyages : comparateur d'assurance voyage premium",
                 who_h="Qui fait quoi", cta="Comparer les offres premium")}
P = {"fr": {}}
F = P["fr"]
IPMI = "/fr/assurance-sante-internationale/"

F["usa"] = dict(
    slug="etats-unis", preset=dict(dest="US", intent="forTourism"),
    title="Assurance Voyage États-Unis — Comparer des Plafonds Médicaux Élevés | Adler & Rochefort",
    desc="Comparez les assurances voyage pour les États-Unis par frais médicaux, rapatriement et annulation. Offres premium de plusieurs assureurs, classées par protection. Souscription en ligne.",
    crumb="États-Unis", eyebrow="Assurance voyage États-Unis",
    h1="Assurance voyage pour les États-Unis : comparez d'abord les plafonds médicaux",
    lead="Les États-Unis ont les soins les plus chers du monde pour un visiteur. Comparez les offres de plusieurs assureurs classées par couverture médicale, destination déjà sélectionnée.",
    sections=[
        ("Pourquoi les États-Unis demandent une autre police", "<p>Aucun système public ne prend le relais : les hôpitaux facturent au tarif privé et une hospitalisation avec chirurgie peut dépasser plusieurs centaines de milliers d'euros. Beaucoup de contrats « monde » excluent les États-Unis et le Canada si cette zone n'est pas choisie. L'ESTA est obligatoire ; l'assurance ne l'est pas — d'où tant de voyageurs sous-assurés.</p>"),
        ("Ce qu'il faut comparer", "<ul><li><strong>Plafond de frais médicaux</strong> : élevé ou illimité.</li><li><strong>Paiement direct</strong> à l'hôpital par l'assisteur.</li><li><strong>Rapatriement aux frais réels</strong>, avion sanitaire compris.</li><li><strong>Responsabilité civile</strong> : les indemnités américaines sont élevées.</li><li><strong>Annulation</strong> à hauteur du coût non remboursable.</li></ul>"),
        ("Carte bancaire et Sécurité sociale", "<p>La Sécurité sociale rembourse les soins urgents à l'étranger sur la base des tarifs français, très loin des factures américaines. Les garanties des cartes premium dépendent souvent du paiement du voyage avec la carte et ont des plafonds inférieurs : comparez-les aux offres ici.</p>"),
    ],
    faq=[
        ("L'assurance voyage est-elle obligatoire pour les États-Unis ?", "Non. Il faut un ESTA, pas une assurance. Sans assurance, vous payez l'intégralité des soins."),
        ("Quel plafond médical choisir ?", "Le plus élevé raisonnablement possible, avec paiement direct à l'hôpital."),
        ("La carte européenne d'assurance maladie fonctionne-t-elle aux États-Unis ?", "Non. Elle n'est valable que dans l'UE, l'EEE, en Suisse et au Royaume-Uni."),
    ],
)

F["annual"] = dict(
    slug="annuelle-multivoyage", preset=dict(intent="annual"),
    title="Assurance Voyage Annuelle Multivoyage — Comparer les Offres Premium | Adler & Rochefort",
    desc="Comparez les assurances voyage annuelles multivoyage par frais médicaux, rapatriement et annulation. Une police premium pour tous les voyages de l'année, plusieurs assureurs.",
    crumb="Annuelle multivoyage", eyebrow="Assurance voyage annuelle",
    h1="Assurance voyage annuelle : une police premium pour tous les voyages de l'année",
    lead="Trois voyages ou plus par an — affaires, résidence secondaire, famille à l'étranger ou plaisir : un contrat annuel couvre chaque déplacement avec une seule police.",
    sections=[
        ("Quand l'annuel a du sens", "<ul><li><strong>Déplacements professionnels fréquents</strong>.</li><li><strong>Propriétaires d'une résidence secondaire</strong> au Portugal, en Espagne ou ailleurs.</li><li><strong>Familles</strong> qui combinent week-ends et un long-courrier par an.</li></ul>"),
        ("Ce qu'il faut vérifier", "<ul><li><strong>Durée maximale par voyage</strong>.</li><li><strong>Zone géographique</strong> du voyage le plus lointain.</li><li><strong>Annulation</strong> par voyage ou par an.</li><li><strong>Limites d'âge</strong>, souvent plus strictes.</li></ul>"),
        ("Assurance voyage annuelle ou santé internationale ?", "<p>Si vous vivez la majeure partie de l'année à l'étranger, voyez plutôt l'<a href=\"" + IPMI + "\">assurance santé internationale</a>.</p>"),
    ],
    faq=[
        ("Combien de voyages sont couverts ?", "Tous ceux des 12 mois, dans la limite de jours par voyage du contrat."),
        ("Est-ce moins cher que des contrats ponctuels ?", "Souvent dès trois voyages par an."),
        ("Les voyages en France sont-ils couverts ?", "En général sous conditions, par exemple une distance minimale du domicile."),
    ],
)

F["ski"] = dict(
    slug="ski", preset=dict(intent="forTourism", sports=True),
    title="Assurance Ski — Comparer Secours sur Piste et Frais Médicaux | Adler & Rochefort",
    desc="Comparez les assurances voyage ski et snowboard : secours sur piste, frais médicaux, rapatriement, responsabilité civile et matériel. Offres premium classées par protection.",
    crumb="Ski", eyebrow="Assurance voyage ski",
    h1="Assurance ski : comparez secours, frais médicaux et responsabilité civile",
    lead="Le ski est l'une des premières causes de sinistres en voyage et beaucoup de contrats standard l'excluent. Comparez les offres avec l'option sports d'hiver déjà cochée.",
    sections=[
        ("Ce qu'une assurance ski doit payer", "<ul><li><strong>Secours et évacuation</strong> en traîneau, motoneige ou hélicoptère — facturés par la commune ou la station.</li><li><strong>Frais médicaux</strong> en cabinet de montagne, souvent privé.</li><li><strong>Rapatriement</strong> après une fracture.</li><li><strong>Responsabilité civile</strong> en cas de collision.</li><li><strong>Matériel, forfait et cours</strong> selon l'offre.</li></ul>"),
        ("Hors-piste : l'exclusion qui compte", "<p>Beaucoup d'offres ne couvrent que les pistes balisées et ouvertes. Hors-piste, ski de randonnée et héliski peuvent être exclus ou exiger un guide.</p>"),
        ("Alpes, Pyrénées, Amérique du Nord et Japon", "<p>En Suisse, en Autriche ou en Andorre, le secours et les cliniques privées coûtent vite cher, même avec la CEAM. Aux États-Unis, au Canada et au Japon, le plafond médical doit être élevé.</p>"),
    ],
    faq=[
        ("Une assurance voyage classique couvre-t-elle le ski ?", "Souvent non, ou seulement avec l'option sports d'hiver, cochée ici."),
        ("Le secours en hélicoptère est-il couvert ?", "Dans de nombreuses offres avec option sports, dans la limite des frais de secours."),
        ("La CEAM couvre-t-elle le secours en montagne ?", "Non. Elle donne accès aux soins publics locaux, pas au secours ni aux cliniques privées."),
    ],
)

F["cruise"] = dict(
    slug="croisiere", preset=dict(intent="cruise"),
    title="Assurance Croisière — Comparer Évacuation et Médecin de Bord | Adler & Rochefort",
    desc="Comparez les assurances croisière : soins à bord, évacuation en mer, départ manqué et annulation. Offres premium de plusieurs assureurs, classées par protection.",
    crumb="Croisière", eyebrow="Assurance voyage croisière",
    h1="Assurance croisière : comparez l'évacuation et les soins à bord",
    lead="Une croisière semble le voyage le plus sûr, jusqu'à ce que quelqu'un tombe malade en mer. Le centre médical du navire facture au tarif privé et une évacuation peut coûter plus que le voyage.",
    sections=[
        ("Où les offres croisière diffèrent", "<ul><li><strong>Soins à bord</strong> : la CEAM n'est généralement pas acceptée en mer.</li><li><strong>Évacuation médicale</strong> par hélicoptère ou bateau.</li><li><strong>Départ manqué</strong> et rattrapage au port suivant.</li><li><strong>Annulation</strong> au prix de la croisière.</li></ul>"),
        ("Choisir la bonne zone", "<p>Une croisière en Méditerranée peut faire escale en Afrique du Nord ; une croisière aux Caraïbes au départ de Miami nécessite la zone États-Unis.</p>"),
        ("L'assurance de la compagnie", "<p>Pratique, mais comparez ses plafonds médicaux et de rapatriement avec les offres ici.</p>"),
    ],
    faq=[
        ("L'assurance paie-t-elle le médecin de bord ?", "Les offres croisière le font en général, dans la limite des frais médicaux."),
        ("L'évacuation depuis le navire est-elle couverte ?", "Dans la plupart des offres, au titre du rapatriement et du transport sanitaire."),
        ("Faut-il la zone États-Unis pour les Caraïbes ?", "Si la croisière part d'un port américain ou y fait escale avec débarquement, oui."),
    ],
)

F["nomad"] = dict(
    slug="nomades-digitaux", preset=dict(intent="digitalNomad"),
    title="Assurance Voyage Nomade Digital — Comparer les Offres | Adler & Rochefort",
    desc="Comparez les assurances voyage pour nomades digitaux et télétravailleurs : frais médicaux, rapatriement et responsabilité civile pendant des mois à l'étranger.",
    crumb="Nomades digitaux", eyebrow="Assurance voyage nomade digital",
    h1="Assurance voyage pour nomades digitaux : des mois à l'étranger, bien couverts",
    lead="Le printemps à Lisbonne, l'été à Bali, l'hiver à Mexico : c'est un mode de vie, pas des vacances. Comparez des offres nomades classées par frais médicaux et rapatriement.",
    sections=[
        ("Ce qu'une police nomade doit faire", "<ul><li><strong>Longues périodes</strong>, souvent renouvelables chaque mois.</li><li><strong>Plusieurs pays</strong>, États-Unis compris si besoin.</li><li><strong>Frais médicaux élevés et rapatriement</strong> aux frais réels.</li><li><strong>Responsabilité civile</strong> en location et en coworking.</li><li><strong>Matériel</strong> : plafonds bas par objet.</li></ul>"),
        ("Visas nomades", "<p>Le visa D8 portugais et le visa nomade espagnol exigent une couverture santé ; selon le consulat, une assurance voyage peut être acceptée pour la première période. Vérifiez le texte exact.</p>"),
        ("Quand passer à l'assurance santé", "<p>Une fois installé dans un pays, voyez l'<a href=\"" + IPMI + "\">assurance santé internationale</a>.</p>"),
    ],
    faq=[
        ("Puis-je souscrire une fois parti ?", "Certaines offres l'acceptent, souvent avec délai de carence ; d'autres seulement avant le départ."),
        ("Suis-je couvert en France ?", "En général seulement lors de courts retours, si c'est prévu."),
        ("Mon ordinateur est-il couvert ?", "Dans la garantie bagages, avec un plafond bas par objet."),
    ],
)

F["longstay"] = dict(
    slug="long-sejour", preset=dict(intent="expat"),
    title="Assurance Voyage Long Séjour — Hivernage et Année Sabbatique | Adler & Rochefort",
    desc="Comparez les assurances long séjour : hivernage au Portugal ou en Espagne, année sabbatique, mois avant un déménagement. Frais médicaux, rapatriement et responsabilité civile.",
    crumb="Long séjour", eyebrow="Assurance voyage long séjour",
    h1="Assurance long séjour : d'un hiver en Algarve aux mois avant un déménagement",
    lead="Une année sabbatique, un hiver en Algarve, une saison sur la Costa del Sol ou la transition avant une installation. Comparez des offres long séjour par les plafonds qui comptent.",
    sections=[
        ("Pour qui", "<ul><li><strong>Hivernants</strong> de trois à six mois au Portugal ou en Espagne.</li><li><strong>Années sabbatiques</strong> multi-pays.</li><li><strong>Nouveaux arrivants</strong> en attente du titre de séjour.</li></ul>"),
        ("Ce qu'il faut comparer", "<ul><li><strong>Durée maximale</strong> et prolongation depuis l'étranger.</li><li><strong>Frais médicaux</strong> et paiement direct.</li><li><strong>Rapatriement aux frais réels</strong>.</li><li><strong>Retours en France</strong> pendant la période.</li><li><strong>Antécédents médicaux</strong> : à déclarer.</li></ul>"),
        ("La limite de l'assurance voyage", "<p>Dès que le Portugal ou l'Espagne devient votre résidence, il vous faut une assurance santé sur place — voyez l'<a href=\"" + IPMI + "\">assurance santé internationale</a>.</p>"),
    ],
    faq=[
        ("Quelle durée maximale ?", "Plusieurs mois, parfois un an, selon l'offre."),
        ("Puis-je rentrer en France entre-temps ?", "Souvent pour de courts séjours ; vérifiez les conditions."),
        ("La CEAM suffit-elle pour un hiver en Espagne ?", "Elle donne accès aux soins publics locaux, sans clinique privée ni rapatriement."),
    ],
)

F["cancel"] = dict(
    slug="annulation", preset=dict(intent="cancellation"),
    title="Assurance Annulation pour Voyages Haut de Gamme — Comparer | Adler & Rochefort",
    desc="Comparez les assurances annulation pour safaris, villas, location de yacht et long-courriers : plafond, motifs couverts et interruption. Plusieurs assureurs, souscription en ligne.",
    crumb="Annulation", eyebrow="Assurance annulation voyage",
    h1="Assurance annulation pour les voyages que vous ne pouvez pas perdre",
    lead="Un lodge de safari, une villa pour la famille, une location de yacht ou un long-courrier réservé un an à l'avance : les acomptes non remboursables s'additionnent vite.",
    sections=[
        ("Adapter le plafond au voyage", "<p>Le plafond d'annulation doit couvrir le coût total non remboursable — vols, hébergement, charter, guides, billets — pour tous les voyageurs.</p>"),
        ("Ce qu'il faut comparer", "<ul><li><strong>Motifs couverts</strong> : liste fermée ou tout motif justifié.</li><li><strong>Interruption</strong> et retour anticipé.</li><li><strong>Date de souscription</strong> : dès le premier acompte.</li><li><strong>Franchise</strong>.</li><li><strong>Antécédents</strong> du voyageur et des proches.</li></ul>"),
        ("Annulation seule ou formule complète", "<p>Pour les États-Unis et les long-courriers, comparez les formules complètes : le plafond médical y compte plus que tout.</p>"),
    ],
    faq=[
        ("Quand souscrire l'assurance annulation ?", "Dès la réservation ou le premier acompte."),
        ("Couvre-t-elle un changement d'avis ?", "Non. Seulement les motifs prévus, ou tout motif justifié si l'offre le propose."),
        ("Les acomptes de villa ou de yacht sont-ils couverts ?", "S'ils sont des frais de voyage non remboursables, dans la limite du plafond."),
    ],
)

F["group"] = dict(
    slug="groupes", preset=dict(intent="groupTravel"),
    title="Assurance Voyage Groupe — Mariages, Golf et Séminaires | Adler & Rochefort",
    desc="Comparez les assurances voyage de groupe : mariages à destination, groupes de golf, réunions de famille et séminaires d'entreprise. Une seule recherche pour tout le groupe.",
    crumb="Groupes", eyebrow="Assurance voyage groupe",
    h1="Assurance voyage de groupe : une seule recherche pour tous",
    lead="Un mariage à Comporta, une semaine de golf en Algarve, une réunion de famille à Majorque ou un séminaire à Madrid. Comparez des offres de groupe avec tous les voyageurs dans un seul devis.",
    sections=[
        ("Voyages de groupe typiques", "<ul><li><strong>Mariages à destination</strong>.</li><li><strong>Groupes de golf</strong>.</li><li><strong>Voyages multigénérationnels</strong>.</li><li><strong>Séminaires et voyages incentive</strong>.</li></ul>"),
        ("Ce qu'il faut vérifier", "<ul><li><strong>Taille du groupe</strong> et pays de résidence commun.</li><li><strong>Âges</strong> : un voyageur plus âgé peut changer le tarif de tous.</li><li><strong>Annulation</strong> si un membre ne part pas.</li><li><strong>Responsabilité civile</strong> au golf, en bateau, en sport.</li></ul>"),
        ("Invités d'autres pays", "<p>L'assurance dépend du pays de résidence : chaque invité peut utiliser ce comparateur avec le sien.</p>"),
    ],
    faq=[
        ("Combien de personnes par devis ?", "Jusqu'à 12 voyageurs par recherche."),
        ("Tous doivent-ils avoir la même offre ?", "Dans un même devis, oui."),
        ("Les invités belges ou suisses peuvent-ils souscrire ?", "Oui, en indiquant leur propre pays de résidence."),
    ],
)

F["study"] = dict(
    slug="etudiants", preset=dict(intent="studyInternship"),
    title="Assurance Voyage Étudiant à l'Étranger — Comparer | Adler & Rochefort",
    desc="Comparez les assurances pour études, stage ou séjour au pair à l'étranger : frais médicaux, rapatriement et responsabilité civile pour toute l'année universitaire.",
    crumb="Étudiants", eyebrow="Assurance étudiant à l'étranger",
    h1="Assurance étudiant : une année à l'étranger, bien couverte",
    lead="Un semestre à Londres, un master aux États-Unis, un stage à Singapour. Les universités fixent des minimums ; les parents veulent souvent plus.",
    sections=[
        ("Ce que demande l'université — et ce que devraient vouloir les parents", "<ul><li><strong>Le minimum de l'université</strong> est un seuil, pas un objectif.</li><li><strong>Frais médicaux élevés</strong>, indispensables aux États-Unis et au Canada.</li><li><strong>Rapatriement</strong> et voyage d'un proche.</li><li><strong>Responsabilité civile</strong> en résidence.</li></ul>"),
        ("États-Unis et Royaume-Uni", "<p>Beaucoup d'universités américaines imposent leur propre contrat ou un formulaire de dispense avec des minimums : vérifiez-le avant de souscrire.</p>"),
        ("Stages et au pair", "<p>Le comparateur inclut études, stages et séjours au pair.</p>"),
    ],
    faq=[
        ("L'université acceptera-t-elle ce contrat ?", "Comparez ses plafonds avec les exigences écrites de l'université."),
        ("Les parents peuvent-ils souscrire ?", "Oui, avec les données de l'étudiant qui voyage."),
        ("Toute l'année est-elle couverte ?", "Les offres études couvrent de longues périodes ; la durée maximale figure dans chaque offre."),
    ],
)
