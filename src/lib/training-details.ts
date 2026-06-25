export type TrainingDetailContent = {
  // En résumé
  duration: string;
  groupSize: string;
  modality: string;
  outcomeKind: string;
  audienceShort: string;
  // Sections
  targetProfiles: string[];
  prerequisites: string;
  objectives: string[];
  program: { title: string; items: string[] }[];
  funding: string[];
  outcome: string;
  // --- Extensions (all optional) -----------------------------------------
  methodesPedagogiques?: string[];
  supportsPedagogiques?: string[];
  modalitesEvaluation?: string;
  certificationType?: "attestation" | "rncp" | "module";
  rncpCode?: string;
};

export const trainingDetails: Record<string, TrainingDetailContent> = {
  "tp-chef-de-chantier": {
    duration: "224 h — 1 vendredi/sem sur 5 mois + 2 j/sem sur 1 mois",
    groupSize: "6 stagiaires min (multi-entreprises)",
    modality: "Présentiel",
    outcomeKind: "Accompagnement à la certification RNCP38721",
    certificationType: "rncp",
    rncpCode: "RNCP38721",
    audienceShort: "Assistant chef de chantier",
    targetProfiles: [
      "Assistants chefs de chantier visant le titre",
      "Chefs d'équipe expérimentés en évolution",
      "Professionnels du gros œuvre en reconversion encadrement",
    ],
    prerequisites:
      "Expérience du chantier gros œuvre. Projet professionnel d'évolution vers l'encadrement. Entretien de positionnement préalable.",
    objectives: [
      "Préparer et organiser un chantier de gros œuvre",
      "Encadrer et animer les équipes de production",
      "Assurer le suivi de l'exécution dans le respect de la qualité, de la sécurité et des délais",
      "Se présenter aux épreuves du Titre Professionnel (RNCP38721)",
    ],
    program: [
      {
        title: "Module 1 — Préparation et organisation de chantier",
        items: [
          "Analyse des pièces du marché (plans, CCTP, planning)",
          "Installation de chantier et plan d'organisation",
          "Approvisionnements, matériels et logistique",
          "Préparation des modes opératoires gros œuvre",
        ],
      },
      {
        title: "Module 2 — Encadrement et animation d'équipe",
        items: [
          "Posture et communication du chef de chantier",
          "Animation des briefings quotidiens et points équipe",
          "Répartition des tâches et gestion des compétences",
          "Gestion des conflits et accompagnement des compagnons",
        ],
      },
      {
        title: "Module 3 — Suivi qualité, sécurité et délais",
        items: [
          "Contrôles qualité en cours d'exécution",
          "Application du PPSPS et culture sécurité quotidienne",
          "Suivi d'avancement et tenue du planning",
          "Reporting au conducteur de travaux",
        ],
      },
      {
        title: "Module 4 — Préparation aux épreuves du Titre Professionnel",
        items: [
          "Structure des épreuves RNCP38721",
          "Constitution du Dossier Professionnel (DP)",
          "Mises en situation et entraînement à l'oral",
          "Préparation à l'entretien final avec le jury",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences",
      "France Travail (selon situation)",
    ],
    outcome: "Accompagnement à la certification RNCP38721.",
  },
  "tp-conducteur-de-travaux": {
    duration: "224 h — 1 lundi/sem sur 5 mois + 2 j/sem sur 1 mois",
    groupSize: "6 stagiaires min (multi-entreprises)",
    modality: "Présentiel",
    outcomeKind: "Accompagnement à la certification RNCP40217",
    certificationType: "rncp",
    rncpCode: "RNCP40217",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier visant la conduite de travaux",
      "Conducteurs de travaux juniors à consolider",
      "Professionnels BTP en évolution vers le pilotage",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Projet d'évolution vers la conduite de travaux. Entretien de positionnement préalable.",
    objectives: [
      "Préparer et organiser un chantier de bâtiment ou de génie civil",
      "Assurer le suivi technique, financier et contractuel des travaux",
      "Coordonner les intervenants et les sous-traitants",
      "Se présenter aux épreuves du Titre Professionnel (RNCP40217)",
    ],
    program: [
      {
        title: "Module 1 — Préparation et organisation de l'opération",
        items: [
          "Analyse du marché et des pièces contractuelles",
          "Études d'exécution et choix des méthodes",
          "Planification générale et planning travaux",
          "Budget prévisionnel et plan d'installation de chantier",
        ],
      },
      {
        title: "Module 2 — Suivi technique des travaux",
        items: [
          "Pilotage de l'exécution gros œuvre et second œuvre",
          "Contrôle qualité et gestion des non-conformités",
          "Sécurité, environnement et PPSPS",
          "Réception des ouvrages et levée des réserves",
        ],
      },
      {
        title: "Module 3 — Suivi financier et contractuel",
        items: [
          "Suivi budgétaire et écarts coûts/recettes",
          "Situations de travaux, avenants et travaux supplémentaires",
          "Gestion des marchés de sous-traitance",
          "Reporting financier à la direction",
        ],
      },
      {
        title: "Module 4 — Coordination des intervenants et sous-traitants",
        items: [
          "Animation des réunions de chantier",
          "Coordination MOE / MOA / bureaux de contrôle",
          "Pilotage et suivi des sous-traitants",
          "Gestion des interfaces et des co-activités",
        ],
      },
      {
        title: "Module 5 — Préparation aux épreuves du Titre Professionnel",
        items: [
          "Structure des épreuves RNCP40217",
          "Constitution du Dossier Professionnel (DP)",
          "Mises en situation et études de cas",
          "Préparation à l'entretien final avec le jury",
        ],
      },
    ],
    funding: [
      "CPF",
      "OPCO (selon votre branche)",
      "Plan de développement des compétences",
      "France Travail (selon situation)",
    ],
    outcome:
      "Accompagnement à la certification. Intitulé « accompagnement à la certification » tant que l'habilitation DREETS n'est pas obtenue.",
  },
  "lecture-de-plan-initiation": {
    duration: "2 jours (14 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Compagnon, ouvrier qualifié",
    targetProfiles: [
      "Compagnons gros œuvre amenés à exécuter à partir de plans",
      "Ouvriers qualifiés souhaitant fiabiliser leur lecture de plan",
      "Coffreurs-bancheurs et ferrailleurs débutants",
      "Personnes en reconversion vers les métiers du gros œuvre",
    ],
    prerequisites:
      "Savoir lire et écrire le français. Une première expérience chantier est un plus mais n'est pas obligatoire.",
    objectives: [
      "Identifier les symboles et conventions d'un plan de coffrage",
      "Lire un plan de ferraillage et repérer les armatures",
      "Situer un ouvrage dans l'espace (plans, coupes, élévations)",
      "Relever cotes et niveaux",
    ],
    program: [
      {
        title: "Module 1 — Conventions et symboles du plan de coffrage",
        items: [
          "Échelles, cartouches et nomenclatures",
          "Symboles normalisés du gros œuvre",
          "Cotation et conventions de représentation",
        ],
      },
      {
        title: "Module 2 — Plans de ferraillage",
        items: [
          "Lecture des nomenclatures aciers",
          "Repérage des armatures principales et secondaires",
          "Articulation coffrage / ferraillage",
        ],
      },
      {
        title: "Module 3 — Situer l'ouvrage dans l'espace",
        items: [
          "Lecture des plans, coupes et élévations",
          "Repères, axes et niveaux de référence",
          "Passage du 2D au 3D mental",
        ],
      },
      {
        title: "Module 4 — Relevé de cotes et niveaux",
        items: [
          "Méthodologie de relevé sur plan",
          "Contrôle des cotes critiques",
          "Mise en situation sur plans réels",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "qualite-betons": {
    duration: "1 jour (7 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Compagnon, ouvrier qualifié",
    targetProfiles: [
      "Compagnons gros œuvre intervenant sur les bétonnages",
      "Coffreurs-bancheurs et applicateurs",
      "Ouvriers qualifiés en charge de la mise en œuvre du béton",
      "Nouveaux arrivants sur chantier gros œuvre",
    ],
    prerequisites:
      "Expérience minimale du chantier gros œuvre. Savoir lire et écrire le français.",
    objectives: [
      "Distinguer les types de béton et leurs usages",
      "Mettre en œuvre un béton conforme",
      "Réaliser un clavetage de préfabriqués",
      "Repérer et signaler les non-conformités",
    ],
    program: [
      {
        title: "Module 1 — Connaissance des bétons",
        items: [
          "Familles de bétons et classes de résistance",
          "Usages selon l'ouvrage",
          "Lecture d'un bon de livraison BPE",
        ],
      },
      {
        title: "Module 2 — Mise en œuvre conforme",
        items: [
          "Conditions de coulage et vibration",
          "Cure et protection du béton frais",
          "Précautions par temps chaud / froid",
        ],
      },
      {
        title: "Module 3 — Clavetage de préfabriqués",
        items: [
          "Préparation des interfaces",
          "Mise en œuvre du clavetage",
          "Contrôles à réception",
        ],
      },
      {
        title: "Module 4 — Détection et signalement des non-conformités",
        items: [
          "Repérage des défauts courants (nids, ségrégation, fissures)",
          "Procédure de signalement à l'encadrement",
          "Traçabilité et fiches qualité",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "lecture-de-plan-confirme": {
    duration: "2 jours (14 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef d'équipe",
    targetProfiles: [
      "Chefs d'équipe gros œuvre expérimentés",
      "Compagnons confirmés en évolution vers l'encadrement",
      "Assistants chefs de chantier en consolidation",
      "Coffreurs-bancheurs et ferrailleurs confirmés",
    ],
    prerequisites:
      "Maîtrise de la lecture de plan en initiation. Expérience significative du chantier gros œuvre.",
    objectives: [
      "Réaliser une implantation à partir d'un plan",
      "Exploiter un plan de coffrage complexe",
      "Interpréter un plan de pose de préfabriqués",
      "Décoder un ferraillage complexe",
    ],
    program: [
      {
        title: "Module 1 — Implantation à partir du plan",
        items: [
          "Méthodologie d'implantation",
          "Reports de cotes et contrôles",
          "Outils et techniques sur le terrain",
        ],
      },
      {
        title: "Module 2 — Plans de coffrage complexes",
        items: [
          "Ouvrages courbes, en pente, à géométrie variable",
          "Repérage des réservations et inserts",
          "Articulation avec les plans de méthode",
        ],
      },
      {
        title: "Module 3 — Pose de préfabriqués",
        items: [
          "Lecture des plans de pose et de calepinage",
          "Phasage et ordre de pose",
          "Contrôles avant et après pose",
        ],
      },
      {
        title: "Module 4 — Ferraillage complexe",
        items: [
          "Décodage des plans BA détaillés",
          "Nœuds d'armatures et zones critiques",
          "Contrôle de conformité avant coulage",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "premurs": {
    duration: "2 jours (14 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef d'équipe",
    targetProfiles: [
      "Chefs d'équipe gros œuvre intervenant sur prémurs",
      "Coffreurs-bancheurs confirmés",
      "Assistants chefs de chantier en consolidation",
      "Compagnons expérimentés en évolution",
    ],
    prerequisites:
      "Expérience du gros œuvre et de la pose d'éléments préfabriqués. Habilitations chantier à jour.",
    objectives: [
      "Implanter et positionner des prémurs",
      "Réaliser coulage et traitement des joints",
      "Poser des prémurs de grande hauteur en sécurité",
      "Contrôler le ferraillage et la conformité",
    ],
    program: [
      {
        title: "Module 1 — Implantation et positionnement",
        items: [
          "Repérage et calepinage des prémurs",
          "Étaiement et stabilisation provisoire",
          "Contrôles d'aplomb et de niveau",
        ],
      },
      {
        title: "Module 2 — Coulage et traitement des joints",
        items: [
          "Préparation du coulage du noyau",
          "Mise en œuvre et vibration",
          "Traitement des joints verticaux et horizontaux",
        ],
      },
      {
        title: "Module 3 — Pose en grande hauteur et sécurité",
        items: [
          "Analyse des risques spécifiques",
          "Moyens de protection collective et individuelle",
          "Coordination avec le grutier et l'équipe au sol",
        ],
      },
      {
        title: "Module 4 — Contrôle ferraillage et conformité",
        items: [
          "Vérification du ferraillage avant coulage",
          "Points de contrôle qualité",
          "Traçabilité et fiches de suivi",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "management-chef-equipe": {
    duration: "1 jour (7 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel (jeux de rôle, mises en situation)",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef d'équipe",
    targetProfiles: [
      "Chefs d'équipe nouvellement nommés",
      "Chefs d'équipe expérimentés souhaitant consolider leur posture",
      "Compagnons confirmés en préparation à la prise de poste",
      "Assistants chefs de chantier",
    ],
    prerequisites:
      "Exercer ou être amené à exercer une fonction d'encadrement d'équipe sur chantier.",
    objectives: [
      "Conduire un briefing de poste",
      "Gérer une situation de conflit",
      "Suivre et analyser les rendements",
      "Faire appliquer le règlement intérieur",
    ],
    program: [
      {
        title: "Module 1 — Conduire un briefing de poste",
        items: [
          "Structure et points clés d'un briefing efficace",
          "Transmission des consignes sécurité et qualité",
          "Mise en situation et feedback",
        ],
      },
      {
        title: "Module 2 — Gestion des conflits",
        items: [
          "Identifier les sources de tension dans l'équipe",
          "Techniques de désamorçage et de médiation",
          "Jeux de rôle sur cas chantier",
        ],
      },
      {
        title: "Module 3 — Suivi et analyse des rendements",
        items: [
          "Indicateurs de rendement par tâche",
          "Lecture des écarts et plans d'action",
          "Restitution à l'encadrement",
        ],
      },
      {
        title: "Module 4 — Application du règlement intérieur",
        items: [
          "Rôle du chef d'équipe dans l'application des règles",
          "Recadrage : posture et limites",
          "Cas pratiques d'application",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "management-qualite-dechets": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Assistant chef de chantier",
    targetProfiles: [
      "Assistants chefs de chantier",
      "Chefs d'équipe en évolution vers l'encadrement",
      "Chefs de chantier juniors",
      "Responsables qualité chantier",
    ],
    prerequisites:
      "Exercer une fonction d'encadrement de chantier ou de support qualité. Expérience du gros œuvre.",
    objectives: [
      "Élaborer une fiche d'autocontrôle",
      "Identifier les malfaçons et leurs causes",
      "Gérer les finitions",
      "Organiser le tri et la gestion des déchets",
    ],
    program: [
      {
        title: "Module 1 — Fiches d'autocontrôle",
        items: [
          "Structure et contenu d'une fiche utile",
          "Points de contrôle clés par ouvrage",
          "Mise en œuvre dans l'équipe",
        ],
      },
      {
        title: "Module 2 — Malfaçons : détection et causes",
        items: [
          "Typologie des malfaçons courantes",
          "Analyse des causes racines",
          "Mesures correctives et préventives",
        ],
      },
      {
        title: "Module 3 — Gestion des finitions",
        items: [
          "Préparation des reprises et finitions",
          "Coordination avec les corps d'état",
          "Critères d'acceptation et levée de réserves",
        ],
      },
      {
        title: "Module 4 — Tri et gestion des déchets",
        items: [
          "Cadre réglementaire (REP Bâtiment)",
          "Organisation du tri sur chantier",
          "Traçabilité et bordereaux de suivi",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "management-heures-beton": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Assistant chef de chantier",
    targetProfiles: [
      "Assistants chefs de chantier",
      "Chefs de chantier juniors",
      "Chefs d'équipe en évolution vers l'encadrement",
      "Conducteurs de travaux juniors",
    ],
    prerequisites:
      "Exercer une fonction d'encadrement ou de suivi de chantier. Bases en lecture de planning et de budget chantier.",
    objectives: [
      "Construire et tenir des tableaux de suivi des heures",
      "Exploiter le BMO (budget de main-d'œuvre d'objectif)",
      "Suivre la consommation de béton et mesurer les écarts",
      "Alerter en cas de dérive",
    ],
    program: [
      {
        title: "Module 1 — Tableaux de suivi des heures",
        items: [
          "Structure d'un tableau de suivi efficace",
          "Saisie et fiabilité des données",
          "Restitution à l'encadrement",
        ],
      },
      {
        title: "Module 2 — Exploitation du BMO",
        items: [
          "Principe du budget de main-d'œuvre d'objectif",
          "Comparaison heures prévues / heures réalisées",
          "Plans d'action sur les écarts",
        ],
      },
      {
        title: "Module 3 — Suivi de la consommation de béton",
        items: [
          "Quantités théoriques vs livrées",
          "Calcul et analyse des écarts",
          "Causes courantes de surconsommation",
        ],
      },
      {
        title: "Module 4 — Alerte et reporting",
        items: [
          "Seuils d'alerte et indicateurs",
          "Format et rythme de reporting",
          "Cas pratiques de dérive et réaction",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "gestion-financiere": {
    duration: "4 jours (28 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier en évolution vers la conduite de travaux",
      "Conducteurs de travaux juniors",
      "Assistants conducteurs de travaux",
      "Encadrants en charge du suivi financier d'opération",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Bases en lecture de budget et de marché.",
    objectives: [
      "Établir le point 0 financier",
      "Réaliser le suivi avec analyse des écarts",
      "Établir une situation de travaux et chiffrer des TS",
      "Conduire la clôture financière (DGD)",
    ],
    program: [
      {
        title: "Module 1 — Le point 0 financier",
        items: [
          "Reprise du budget initial et structuration",
          "Identification des recettes et dépenses prévisionnelles",
          "Construction d'un point 0 fiable",
        ],
      },
      {
        title: "Module 2 — Suivi et analyse des écarts",
        items: [
          "Tableaux de bord coûts / recettes",
          "Détection et explication des écarts",
          "Plans d'action correctifs",
        ],
      },
      {
        title: "Module 3 — Situations de travaux et travaux supplémentaires",
        items: [
          "Établissement des situations mensuelles",
          "Chiffrage et présentation des TS",
          "Négociation et validation client",
        ],
      },
      {
        title: "Module 4 — Clôture financière et DGD",
        items: [
          "Préparation du décompte général définitif",
          "Levée des réserves et solde financier",
          "Retour d'expérience et bilan d'opération",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "droit-de-la-construction": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier en évolution vers la conduite de travaux",
      "Conducteurs de travaux juniors",
      "Assistants conducteurs de travaux",
      "Encadrants confrontés à des problématiques contractuelles",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Avoir déjà été exposé à un marché de travaux.",
    objectives: [
      "Analyser le cadre juridique d'un projet",
      "Mobiliser les garanties légales (parfait achèvement, biennale, décennale)",
      "Gérer un litige client dans un cadre sécurisé",
    ],
    program: [
      {
        title: "Module 1 — Cadre juridique du projet",
        items: [
          "Acteurs et responsabilités (MOA, MOE, entreprises)",
          "Pièces contractuelles du marché",
          "Obligations et risques juridiques courants",
        ],
      },
      {
        title: "Module 2 — Garanties légales",
        items: [
          "Garantie de parfait achèvement",
          "Garantie biennale (bon fonctionnement)",
          "Garantie décennale et assurances associées",
        ],
      },
      {
        title: "Module 3 — Gestion d'un litige client",
        items: [
          "Détection précoce et traçabilité",
          "Réponses écrites et posture",
          "Recours amiables et contentieux",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "paq": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier en évolution vers la conduite de travaux",
      "Conducteurs de travaux juniors",
      "Responsables qualité chantier",
      "Assistants conducteurs de travaux",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Connaissance des principaux ouvrages du gros œuvre.",
    objectives: [
      "Élaborer un plan d'assurance qualité de chantier",
      "Organiser la gestion des finitions",
      "Anticiper et prévenir les malfaçons",
    ],
    program: [
      {
        title: "Module 1 — Élaboration du PAQ",
        items: [
          "Structure et contenu d'un PAQ chantier",
          "Points d'arrêt et points de contrôle",
          "Diffusion et appropriation par les équipes",
        ],
      },
      {
        title: "Module 2 — Gestion des finitions",
        items: [
          "Organisation des reprises et finitions",
          "Coordination avec les corps d'état",
          "Critères d'acceptation et levée de réserves",
        ],
      },
      {
        title: "Module 3 — Prévention des malfaçons",
        items: [
          "Typologie des malfaçons courantes",
          "Mesures préventives à intégrer au PAQ",
          "Retour d'expérience et amélioration continue",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "planification": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier en évolution vers la conduite de travaux",
      "Conducteurs de travaux juniors",
      "Assistants conducteurs de travaux",
      "Encadrants en charge de la préparation d'opération",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Bases en lecture de planning.",
    objectives: [
      "Élaborer un planning de chantier",
      "Conduire les démarches administratives",
      "Organiser plans et commandes",
      "Gérer les pénalités de retard",
    ],
    program: [
      {
        title: "Module 1 — Élaboration du planning",
        items: [
          "Découpage des tâches et durées",
          "Enchaînements et chemins critiques",
          "Mise à jour et suivi du planning",
        ],
      },
      {
        title: "Module 2 — Démarches administratives",
        items: [
          "Déclarations et autorisations préalables",
          "Coordination avec les concessionnaires",
          "Gestion documentaire d'opération",
        ],
      },
      {
        title: "Module 3 — Plans et commandes",
        items: [
          "Pilotage de la diffusion des plans",
          "Programmation des commandes matériaux et matériels",
          "Coordination avec les sous-traitants",
        ],
      },
      {
        title: "Module 4 — Pénalités de retard",
        items: [
          "Lecture des clauses contractuelles",
          "Anticipation et justification des aléas",
          "Négociation et limitation des pénalités",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "gestion-sous-traitants": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Chef de chantier → conducteur de travaux junior",
    targetProfiles: [
      "Chefs de chantier en évolution vers la conduite de travaux",
      "Conducteurs de travaux juniors",
      "Assistants conducteurs de travaux",
      "Encadrants pilotant des marchés de sous-traitance",
    ],
    prerequisites:
      "Expérience de l'encadrement de chantier. Avoir déjà travaillé avec des sous-traitants.",
    objectives: [
      "Conduire la consultation de sous-traitants",
      "Établir et sécuriser un contrat de sous-traitance",
      "Assurer le suivi financier et de production",
    ],
    program: [
      {
        title: "Module 1 — Consultation des sous-traitants",
        items: [
          "Rédaction du DCE de sous-traitance",
          "Analyse comparée des offres",
          "Négociation et choix du sous-traitant",
        ],
      },
      {
        title: "Module 2 — Contractualisation et sécurisation",
        items: [
          "Clauses essentielles du contrat de sous-traitance",
          "Agrément et délégation de paiement",
          "Assurances et garanties exigibles",
        ],
      },
      {
        title: "Module 3 — Suivi financier et de production",
        items: [
          "Validation des situations sous-traitants",
          "Suivi de l'avancement et de la qualité",
          "Gestion des litiges et levée des réserves",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "preparation-audit-iso-9001": {
    duration: "1 jour (7 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Encadrants, responsables qualité",
    targetProfiles: [
      "Responsables qualité d'entreprise BTP",
      "Conducteurs de travaux et chefs de chantier impliqués dans la démarche qualité",
      "Encadrants intermédiaires sollicités en audit",
      "Référents qualité d'agence",
    ],
    prerequisites:
      "Connaissance générale du fonctionnement d'une entreprise BTP. Une première exposition à un audit qualité est un plus.",
    objectives: [
      "Identifier les exigences ISO 9001 mobilisées en audit",
      "Préparer les preuves attendues",
      "Adopter les bonnes pratiques",
      "Repérer et corriger les écarts en amont",
    ],
    program: [
      {
        title: "Module 1 — Exigences ISO 9001 mobilisées en audit",
        items: [
          "Logique et structure de la norme",
          "Chapitres clés sollicités en audit",
          "Application au contexte BTP",
        ],
      },
      {
        title: "Module 2 — Préparation des preuves",
        items: [
          "Documents et enregistrements attendus",
          "Organisation de la preuve par processus",
          "Mise en récit des actions menées",
        ],
      },
      {
        title: "Module 3 — Bonnes pratiques en audit",
        items: [
          "Posture et communication avec l'auditeur",
          "Réponses claires et factuelles",
          "Gestion du temps et des sollicitations",
        ],
      },
      {
        title: "Module 4 — Détection et correction des écarts",
        items: [
          "Auto-évaluation préalable",
          "Plans d'action correctifs",
          "Suivi et clôture des écarts",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
  "methode-chantier": {
    duration: "2 jours (14 h)",
    groupSize: "6 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Assistant chef de chantier",
    targetProfiles: [
      "Assistants chef de chantier",
      "Chefs d'équipe évoluant vers une fonction d'encadrement",
      "Chefs de chantier débutants",
      "Conducteurs de travaux juniors souhaitant consolider la préparation d'exécution",
    ],
    prerequisites:
      "Expérience de chantier en gros œuvre. Lecture de plan maîtrisée et connaissance des principales phases d'exécution.",
    objectives: [
      "Élaborer un planning d'exécution",
      "Rédiger un mode opératoire",
      "Construire un plan d'installation de chantier (PIC)",
      "Anticiper les contraintes d'exécution et de coactivité",
    ],
    program: [
      {
        title: "Module 1 — Planning d'exécution",
        items: [
          "Décomposition des tâches et chaînage des phases",
          "Estimation des durées et des moyens",
          "Construction et mise à jour du planning",
          "Identification du chemin critique",
        ],
      },
      {
        title: "Module 2 — Mode opératoire",
        items: [
          "Structure et niveau de détail attendu",
          "Description des séquences de travail",
          "Moyens humains, matériels et matériaux",
          "Points de vigilance sécurité et qualité",
        ],
      },
      {
        title: "Module 3 — Plan d'installation de chantier (PIC)",
        items: [
          "Implantation des zones de vie, stockage et circulation",
          "Positionnement des grues et engins de levage",
          "Réseaux provisoires et accès chantier",
          "Lecture et formalisation du PIC",
        ],
      },
      {
        title: "Module 4 — Contraintes d'exécution et coactivité",
        items: [
          "Identification des interfaces entre corps d'état",
          "Gestion des coactivités et phasage des interventions",
          "Anticipation des contraintes site et riverains",
          "Mesures de prévention associées",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée sur la base d'une évaluation continue.",
  },
};


export function findTrainingDetail(slug: string): TrainingDetailContent | undefined {
  return trainingDetails[slug];
}