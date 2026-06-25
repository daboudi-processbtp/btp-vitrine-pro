import type { Training, Modality, TrainingFamilyName } from "@/components/ui/TrainingCard";

export type TrainingFamily = {
  id: string;
  name: TrainingFamilyName;
  trainings: Training[];
};

function parseModalities(modalite?: string): Modality[] {
  if (!modalite) return ["presentiel"];
  const m = modalite.toLowerCase();
  const hasDist = m.includes("distanciel") || m.includes("classe virtuelle");
  const hasPres = m.includes("présentiel") || m.includes("presentiel");
  if (hasPres && hasDist) return ["presentiel", "distanciel"];
  if (hasDist) return ["distanciel"];
  return ["presentiel"];
}

// Short audience tag for cards (richer publicVise stays in the fiche)
const AUDIENCE_TAGS: Record<string, string> = {
  "lecture-de-plan-initiation": "Compagnon, ouvrier qualifié",
  "qualite-les-betons": "Compagnon, ouvrier qualifié",
  "lecture-de-plan-confirme": "Chef d'équipe",
  "premurs": "Chef d'équipe",
  "management-chef-equipe": "Chef d'équipe",
  "management-qualite-dechets": "Assistant chef de chantier",
  "management-heures-beton": "Assistant chef de chantier",
  "methode-chantier": "Assistant chef de chantier",
  "accompagnement-tp-chef-de-chantier": "Assistant chef de chantier",
  "gestion-financiere": "Chef de chantier, conducteur de travaux junior",
  "droit-de-la-construction": "Encadrant chantier",
  "paq": "Encadrant chantier",
  "planification": "Encadrant chantier",
  "gestion-sous-traitants": "Encadrant chantier",
  "accompagnement-tp-conducteur-de-travaux": "Chef de chantier, conducteur de travaux junior",
  "preparation-audit-iso-9001": "Encadrants, responsables qualité",
  "excel-pour-debutant": "Artisans, dirigeants TPE/PME",
  "reponse-appel-offres": "Artisans, dirigeants TPE/PME",
  "accompagnement-charge-affaires-btp": "Chargé d'affaires BTP",
  "accompagnement-manager-projets-btp": "Manager de projets BTP",
};

// Short summary for catalog cards (sentence trimmed from publicVise / objectifs)
const SUMMARIES: Record<string, string> = {
  "lecture-de-plan-initiation":
    "Identifier les symboles d'un plan de coffrage et de ferraillage, situer un ouvrage dans l'espace, relever cotes et niveaux.",
  "qualite-les-betons":
    "Distinguer les types de béton, les mettre en œuvre dans les règles de l'art et repérer les non-conformités courantes.",
  "lecture-de-plan-confirme":
    "Réaliser une implantation, exploiter un plan de coffrage complexe et décoder un plan de ferraillage pour anticiper les difficultés.",
  "premurs":
    "Implanter, couler et traiter les joints de prémurs, y compris de grande hauteur, en contrôlant ferraillage et conformité.",
  "management-chef-equipe":
    "Conduire un briefing de poste, gérer un conflit d'équipe, suivre les rendements et faire appliquer le règlement intérieur.",
  "management-qualite-dechets":
    "Élaborer une fiche d'autocontrôle, repérer les malfaçons courantes et organiser le tri et la gestion des déchets.",
  "management-heures-beton":
    "Tenir les tableaux de suivi des heures, exploiter le BMO et suivre la consommation de béton pour alerter en cas de dérive.",
  "methode-chantier":
    "Élaborer un planning d'exécution, rédiger un mode opératoire et construire un plan d'installation de chantier (PIC).",
  "accompagnement-tp-chef-de-chantier":
    "Accompagnement à la certification RNCP38721 : organisation de chantier, encadrement, suivi qualité, sécurité, délais.",
  "gestion-financiere":
    "Établir le point 0, suivre les écarts, chiffrer les travaux supplémentaires et conduire la clôture financière (DGD).",
  "droit-de-la-construction":
    "Analyser le cadre juridique d'un projet, mobiliser les garanties légales et sécuriser un litige client.",
  "paq":
    "Élaborer un plan d'assurance qualité de chantier, organiser la gestion des finitions et prévenir les malfaçons.",
  "planification":
    "Construire un planning de chantier, piloter démarches, plans et commandes, et gérer les pénalités de retard.",
  "gestion-sous-traitants":
    "Conduire la consultation, établir et sécuriser un contrat de sous-traitance, et assurer le suivi financier et de production.",
  "accompagnement-tp-conducteur-de-travaux":
    "Accompagnement à la certification RNCP40217 : suivi technique, financier et contractuel des travaux, coordination des intervenants.",
  "preparation-audit-iso-9001":
    "Identifier les exigences ISO 9001 mobilisées en audit, préparer les preuves attendues et corriger les écarts en amont.",
  "excel-pour-debutant":
    "Prendre en main Excel pour gérer devis, heures et dépenses : tableaux de suivi, formules de base et tableaux BTP prêts à l'emploi.",
  "reponse-appel-offres":
    "Accompagnement individuel sur dossier réel : DCE, go/no-go, mémoire technique, chiffrage DPGF, dépôt dématérialisé.",
  "accompagnement-charge-affaires-btp":
    "Parcours d'accompagnement à la certification Chargé d'affaires BTP (RNCP37856). Programme, durée et tarif sur demande.",
  "accompagnement-manager-projets-btp":
    "Parcours d'accompagnement à la certification Manager de projets BTP (RNCP38810). Programme, durée et tarif sur demande.",
};

// ---------------------------------------------------------------------------
// Canonical raw data (French field names, source of truth)
// ---------------------------------------------------------------------------

type RawTraining = Omit<Training, "title" | "family" | "summary" | "modalities" | "audience" | "duration"> & {
  titre: string;
  famille: "execution-terrain" | "encadrement-chantier" | "pilotage-ingenierie" | "gestion-developpement";
  duree?: string;
};

const FAMILLE_TO_DISPLAY: Record<RawTraining["famille"], TrainingFamilyName> = {
  "execution-terrain": "Exécution & terrain",
  "encadrement-chantier": "Encadrement de chantier",
  "pilotage-ingenierie": "Pilotage & ingénierie",
  "gestion-developpement": "Gestion & développement (artisans)",
};

const FAMILLE_TO_GROUP_ID: Record<RawTraining["famille"], string> = {
  "execution-terrain": "execution",
  "encadrement-chantier": "encadrement",
  "pilotage-ingenierie": "pilotage",
  "gestion-developpement": "gestion-developpement",
};

const trainings: RawTraining[] = [
  // ---------- FAMILLE 1 — Exécution & terrain ----------
  {
    slug: "lecture-de-plan-initiation",
    titre: "Lecture de plan : initiation",
    famille: "execution-terrain",
    duree: "2 jours — 14 h",
    effectifMax: 8,
    modalite: "Présentiel salle",
    publicVise:
      "Compagnons et ouvriers qualifiés du gros œuvre qui exécutent à partir de plans et veulent gagner en autonomie de lecture.",
    prerequis: ["Aucun prérequis théorique", "Première expérience de chantier gros œuvre recommandée"],
    objectifs: [
      "Identifier et interpréter les symboles et conventions d'un plan de coffrage",
      "Lire un plan de ferraillage et repérer les armatures (aciers, treillis, recouvrements)",
      "Situer un ouvrage dans l'espace à partir des vues en plan, coupes et élévations",
      "Relever les cotes et niveaux nécessaires à l'exécution",
    ],
    programme: [
      { titre: "Jour 1 — Comprendre et se repérer", items: [
        "Le langage du plan : échelles, cartouche, nomenclature, types de plans",
        "Symboles et conventions : trait, repère, axes, niveaux (NGF, niveau projet)",
        "Vues en plan, coupes et élévations : passer du 2D à l'ouvrage réel",
        "Atelier guidé : se repérer sur un jeu de plans réel",
      ]},
      { titre: "Jour 2 — Lire pour exécuter", items: [
        "Plan de coffrage : voiles, poteaux, poutres, dalles, réservations",
        "Plan de ferraillage : aciers, treillis, recouvrements, repérage",
        "Relevé de cotes et de niveaux ; détecter une incohérence",
        "Évaluation pratique : lecture commentée + relevé de cotes",
      ]},
    ],
    methodesPedagogiques: [
      "Apports courts puis pratique majoritaire sur plans réels",
      "Pédagogie active, correction collective",
    ],
    supportsPedagogiques: [
      "Jeux de plans réels (coffrage + ferraillage)",
      "Support de cours papier illustré",
      "Fiche mémo des symboles",
      "Exercices corrigés",
      "Quiz Kahoot",
    ],
    modalitesEvaluation:
      "Évaluation continue par exercices pratiques + exercice final de lecture/relevé.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "qualite-les-betons",
    titre: "Qualité : les bétons",
    famille: "execution-terrain",
    duree: "1 jour — 7 h",
    effectifMax: 8,
    modalite: "Présentiel salle",
    publicVise:
      "Compagnons qui coulent, vibrent et finissent le béton au quotidien et doivent garantir un ouvrage conforme.",
    prerequis: ["Expérience pratique du coulage en gros œuvre recommandée"],
    objectifs: [
      "Distinguer les types de béton et leurs usages (fondations, dalles, voiles, planchers)",
      "Mettre en œuvre un béton conforme aux exigences de l'ouvrage",
      "Réaliser un clavetage de préfabriqués dans les règles de l'art",
      "Repérer et signaler les non-conformités courantes liées au béton",
    ],
    programme: [
      { titre: "Matin", items: [
        "Le béton et ses usages : classes de résistance, classes d'exposition, affaissement, additifs ; lecture du bon de livraison",
        "Mise en œuvre conforme : approvisionnement, coulage, vibration, reprise de bétonnage, cure",
      ]},
      { titre: "Après-midi", items: [
        "Clavetage et préfabriqués : principes et règles de l'art, points de vigilance",
        "Non-conformités : nids de cailloux, ségrégation, fissuration, ressuage ; repérer, signaler, tracer",
        "Évaluation : étude de cas de non-conformités + QCM",
      ]},
    ],
    methodesPedagogiques: [
      "Apports illustrés par photos de chantier",
      "Analyse de cas réels",
      "Échanges de pratiques",
    ],
    supportsPedagogiques: [
      "Support de cours illustré",
      "Bons de livraison à décoder",
      "Banque photos de non-conformités",
      "Fiche mémo classes/expositions",
      "Quiz Kahoot",
    ],
    modalitesEvaluation: "QCM + étude de cas pratique, en évaluation continue.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "lecture-de-plan-confirme",
    titre: "Lecture de plan : confirmé",
    famille: "execution-terrain",
    duree: "2 jours — 14 h",
    effectifMax: 8,
    modalite: "Présentiel salle",
    publicVise:
      "Chefs d'équipe qui doivent implanter, exploiter des plans complexes et anticiper les difficultés d'exécution.",
    prerequis: ["Lecture de plan de base (niveau initiation) ou expérience équivalente"],
    objectifs: [
      "Réaliser une implantation à partir d'un plan",
      "Lire et exploiter un plan de coffrage complexe (formes particulières, réservations)",
      "Interpréter un plan de pose de préfabriqués",
      "Décoder un plan de ferraillage complexe et anticiper les difficultés d'exécution",
    ],
    programme: [
      { titre: "Jour 1 — De l'implantation au coffrage complexe", items: [
        "Implantation : repères, axes, report sur le terrain, contrôle d'équerrage et de niveau",
        "Coffrage complexe : formes particulières, trémies, réservations, joints de dilatation",
        "Atelier : exploiter un plan de coffrage complexe",
      ]},
      { titre: "Jour 2 — Préfabriqués et ferraillage complexe", items: [
        "Plan de pose de préfabriqués : ordre de pose, calepinage, tolérances",
        "Ferraillage complexe : recouvrements, nœuds, armatures spéciales",
        "Anticiper les difficultés d'exécution et alerter le bureau d'études",
        "Évaluation pratique sur plans complexes",
      ]},
    ],
    methodesPedagogiques: [
      "Pratique majoritaire sur plans réels complexes",
      "Mises en situation d'implantation",
      "Correction collective",
    ],
    supportsPedagogiques: [
      "Jeux de plans complexes réels",
      "Plans de pose de préfabriqués",
      "Support de cours",
      "Fiches d'anticipation des risques d'exécution",
    ],
    modalitesEvaluation:
      "Exercices d'exploitation de plan + exercice d'implantation, en évaluation continue.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "premurs",
    titre: "Prémurs",
    famille: "execution-terrain",
    duree: "2 jours — 14 h",
    effectifMax: 8,
    modalite: "Présentiel salle",
    publicVise:
      "Chefs d'équipe amenés à implanter, poser et contrôler des prémurs, y compris de grande hauteur.",
    prerequis: ["Expérience du gros œuvre", "Lecture de plan opérationnelle"],
    objectifs: [
      "Implanter et positionner des prémurs conformément au plan",
      "Réaliser le coulage et le traitement des joints d'un prémur",
      "Poser des prémurs de grande hauteur en sécurité",
      "Contrôler le ferraillage et la conformité de la mise en œuvre",
    ],
    programme: [
      { titre: "Jour 1 — Implantation et mise en œuvre", items: [
        "Le prémur : principe, composition, contraintes de pose",
        "Implantation et positionnement : calepinage, étaiement, réglages, tolérances",
        "Coulage et traitement des joints (verticaux/horizontaux)",
      ]},
      { titre: "Jour 2 — Grande hauteur, contrôle et sécurité", items: [
        "Pose de grande hauteur : stabilité provisoire, étaiement, levage, sécurité",
        "Contrôle du ferraillage et de la conformité ; fiche d'autocontrôle",
        "Non-conformités fréquentes et reprises",
        "Évaluation : étude de cas de pose + autocontrôle commenté",
      ]},
    ],
    methodesPedagogiques: [
      "Apports techniques",
      "Analyse de plans de pose",
      "Études de cas accident/non-conformité",
      "Focus sécurité",
    ],
    supportsPedagogiques: [
      "Plans de calepinage prémurs",
      "Support illustré",
      "Fiche d'autocontrôle",
      "Mémo sécurité levage/étaiement",
      "Quiz Kahoot",
    ],
    modalitesEvaluation: "Étude de cas + QCM sécurité, en évaluation continue.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "management-chef-equipe",
    titre: "Management chef d'équipe",
    famille: "execution-terrain",
    duree: "1 jour — 7 h",
    effectifMax: 8,
    modalite: "Présentiel salle uniquement (jeux de rôle avec déplacement)",
    publicVise:
      "Chefs d'équipe nouvellement nommés ou en poste qui doivent animer, cadrer et faire produire leur équipe.",
    prerequis: ["Encadrer ou être amené à encadrer une équipe de production"],
    objectifs: [
      "Conduire un briefing de poste efficace auprès de son équipe",
      "Gérer une situation de conflit au sein de l'équipe",
      "Suivre et analyser les rendements de production",
      "Rappeler et faire appliquer le règlement intérieur",
    ],
    programme: [
      { titre: "Matin", items: [
        "Le rôle du chef d'équipe : posture, autorité, exemplarité, relais hiérarchique",
        "Le briefing de poste : structurer, transmettre les consignes, sécurité, objectifs du jour",
        "Mise en situation : conduire un briefing",
      ]},
      { titre: "Après-midi", items: [
        "Gérer un conflit : repérer, désamorcer, recadrer — jeux de rôle (mise en situation physique)",
        "Rendement et règlement : lire un rendement, réagir à une dérive, faire appliquer le règlement intérieur",
        "Débrief collectif des mises en situation",
      ]},
    ],
    methodesPedagogiques: [
      "Pédagogie active : jeux de rôle débriefés, mises en situation avec déplacement",
      "Présentiel requis par le format (non transposable en distanciel)",
    ],
    supportsPedagogiques: [
      "Trame de briefing de poste",
      "Grille de lecture des rendements",
      "Fiches scénarios de jeux de rôle",
      "Mémo « gérer un conflit »",
    ],
    modalitesEvaluation:
      "Grille d'observation des mises en situation + auto-positionnement.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },

  // ---------- FAMILLE 2 — Encadrement de chantier ----------
  {
    slug: "management-qualite-dechets",
    titre: "Management qualité & gestion des déchets",
    famille: "encadrement-chantier",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Assistants chef de chantier responsables de la qualité d'exécution et de la gestion des déchets.",
    prerequis: ["Première expérience d'encadrement ou d'assistance à l'encadrement de chantier"],
    objectifs: [
      "Élaborer et renseigner une fiche d'autocontrôle",
      "Identifier les malfaçons courantes et leurs causes",
      "Gérer les finitions courantes dans le respect des exigences qualité",
      "Organiser le tri et la gestion des déchets de chantier",
    ],
    programme: [
      { titre: "Matin", items: [
        "L'autocontrôle : objectif, construction d'une fiche, points de contrôle, traçabilité",
        "Malfaçons courantes : typologie, causes racines, prévention",
      ]},
      { titre: "Après-midi", items: [
        "Gestion des finitions : exigences, séquencement, réception",
        "Tri et gestion des déchets : réglementation, bordereaux, organisation, valorisation",
        "Évaluation : construction d'une fiche d'autocontrôle",
      ]},
    ],
    methodesPedagogiques: [
      "Apports + études de cas réels",
      "Construction d'outils réutilisables sur chantier",
    ],
    supportsPedagogiques: [
      "Modèles de fiches d'autocontrôle",
      "Banque photos de malfaçons",
      "Mémo réglementation déchets",
      "Gabarit de plan de gestion des déchets",
    ],
    modalitesEvaluation: "Production d'une fiche d'autocontrôle + QCM.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "management-heures-beton",
    titre: "Management : gestion des heures et consommation béton",
    famille: "encadrement-chantier",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Assistants chef de chantier qui suivent la main-d'œuvre et les consommations matières et doivent alerter en cas de dérive.",
    prerequis: ["Notions de suivi de chantier", "Usage basique d'un tableur recommandé"],
    objectifs: [
      "Construire et tenir des tableaux de suivi des heures",
      "Comprendre et exploiter le BMO (budget de main-d'œuvre d'objectif)",
      "Suivre la consommation de béton et mesurer l'écart par rapport aux prévisions",
      "Alerter en cas de dérive des consommations",
    ],
    programme: [
      { titre: "Matin", items: [
        "Le suivi des heures : pointage, ventilation par tâche, tableau de suivi",
        "Le BMO : principe, construction, lecture, exploitation au quotidien",
      ]},
      { titre: "Après-midi", items: [
        "Suivi de la consommation béton : prévu/réalisé, calcul d'écart, causes de dérive",
        "L'alerte : seuils, qui prévenir, comment formaliser une alerte",
        "Évaluation : exercice de suivi heures + béton sur cas chiffré",
      ]},
    ],
    methodesPedagogiques: [
      "Apports + travail sur tableurs modèles",
      "Exercices chiffrés issus de chantiers réels",
    ],
    supportsPedagogiques: [
      "Classeurs Excel modèles (suivi heures, BMO, suivi béton)",
      "Support de cours",
      "Cas chiffrés corrigés",
    ],
    modalitesEvaluation: "Exercice chiffré de suivi et d'analyse d'écart.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "methode-chantier",
    titre: "Méthode chantier",
    famille: "encadrement-chantier",
    duree: "2 jours — 14 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Assistants chef de chantier qui préparent et organisent l'exécution : planning, modes opératoires, installation de chantier.",
    prerequis: ["Lecture de plan opérationnelle", "Expérience de chantier"],
    objectifs: [
      "Élaborer un planning d'exécution de chantier",
      "Rédiger un mode opératoire",
      "Construire un plan d'installation de chantier (PIC)",
      "Anticiper les contraintes d'exécution et de coactivité",
    ],
    programme: [
      { titre: "Jour 1 — Planning et modes opératoires", items: [
        "Le planning d'exécution : tâches, durées, enchaînements, chemin critique (initiation Gantt)",
        "Le mode opératoire : structure, contenu, validation, diffusion",
      ]},
      { titre: "Jour 2 — Installation et coactivité", items: [
        "Le plan d'installation de chantier (PIC) : zonage, flux, levage, base vie, réseaux",
        "Anticipation des contraintes et de la coactivité : interfaces corps d'état, sécurité",
        "Évaluation : élaboration d'un planning + ébauche de PIC",
      ]},
    ],
    methodesPedagogiques: ["Apports + ateliers de production sur cas de chantier réel"],
    supportsPedagogiques: [
      "Gabarits de planning et de mode opératoire",
      "Exemples de PIC",
      "Support de cours",
      "Cas de chantier réel",
    ],
    modalitesEvaluation: "Production d'un planning et d'un PIC simplifié.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "accompagnement-tp-chef-de-chantier",
    titre: "Accompagnement à la certification — Chef de chantier gros œuvre",
    famille: "encadrement-chantier",
    duree: "224 h — 1 vendredi/sem. sur 5 mois + 2 j/sem. sur 1 mois",
    effectifMax: 6,
    modalite: "Présentiel",
    publicVise:
      "Assistants chef de chantier visant la reconnaissance du Titre Professionnel Chef de chantier gros œuvre (RNCP38721).",
    prerequis: [
      "Expérience en gros œuvre et fonction d'encadrement (ou en cours d'accès)",
      "Positionnement individuel en entrée",
    ],
    objectifs: [
      "Préparer et organiser un chantier de gros œuvre",
      "Encadrer et animer les équipes de production",
      "Assurer le suivi de l'exécution (qualité, sécurité, délais)",
      "Se présenter aux épreuves du Titre Professionnel (RNCP38721)",
    ],
    programme: [
      { titre: "Bloc 1 — Préparer et organiser un chantier de gros œuvre", items: [
        "Analyse du dossier, méthodes, installation de chantier",
        "Planning, approvisionnements, sécurité",
      ]},
      { titre: "Bloc 2 — Conduire et encadrer l'exécution", items: [
        "Animation des équipes, suivi production/qualité/sécurité/délais",
        "Autocontrôle, relation hiérarchie et corps d'état",
      ]},
      { titre: "Transversal — Préparation à la certification", items: [
        "Constitution du dossier professionnel (DP)",
        "Entraînement à la mise en situation et à l'entretien jury, ¼ d'heure sécurité, examens blancs",
      ]},
    ],
    methodesPedagogiques: [
      "Alternance apports/ateliers/mises en situation",
      "Suivi individualisé, examens blancs",
      "Accompagnement à la constitution du dossier professionnel",
    ],
    supportsPedagogiques: [
      "Référentiel RNCP38721",
      "Supports par bloc",
      "Gabarits (planning, PIC, autocontrôle)",
      "Trame de dossier professionnel",
      "Sujets d'entraînement",
    ],
    modalitesEvaluation:
      "Évaluations formatives par bloc + examens blancs. La certification est délivrée par le Ministère du Travail à l'issue des épreuves officielles, hors PROCESSBTP.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "rncp",
    rncpCode: "RNCP38721",
    prixAffiche: false,
    prix: null,
  },

  // ---------- FAMILLE 3 — Pilotage & ingénierie ----------
  {
    slug: "gestion-financiere",
    titre: "Gestion financière",
    famille: "pilotage-ingenierie",
    duree: "4 jours — 28 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Encadrants de chantier (chef de chantier → conducteur de travaux junior) qui prennent la responsabilité du résultat financier.",
    prerequis: ["Expérience d'encadrement de chantier", "Aisance avec un tableur"],
    objectifs: [
      "Établir le point 0 financier d'un chantier",
      "Réaliser le suivi financier avec analyse des écarts",
      "Établir une situation de travaux et chiffrer des travaux supplémentaires (TS)",
      "Conduire la clôture financière d'un chantier (DGD)",
    ],
    programme: [
      { titre: "Jour 1 — Le point 0 financier", items: [
        "Du marché au budget d'objectif : déboursé sec, frais de chantier, marge ; construction du point 0",
      ]},
      { titre: "Jour 2 — Suivi financier et analyse des écarts", items: [
        "Prévu/engagé/réalisé, tableau de bord, calcul et analyse des écarts, actions correctives",
      ]},
      { titre: "Jour 3 — Situations et travaux supplémentaires", items: [
        "Établir une situation, attachements, chiffrage et formalisation des TS, défense des TS",
      ]},
      { titre: "Jour 4 — Clôture financière (DGD)", items: [
        "Décompte général définitif, mémoire en réclamation, bilan de chantier",
        "Évaluation : suivi financier complet + chiffrage d'un TS",
      ]},
    ],
    methodesPedagogiques: [
      "Apports + ateliers chiffrés sur tableurs",
      "Cas fil rouge de chantier réel sur les 4 jours",
    ],
    supportsPedagogiques: [
      "Classeurs Excel (point 0, tableau de bord, situation, DGD)",
      "Support de cours",
      "Cas fil rouge chiffré",
      "Modèles de courriers de TS",
    ],
    modalitesEvaluation: "Cas chiffré complet (point 0 → DGD).",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "droit-de-la-construction",
    titre: "Droit de la construction",
    famille: "pilotage-ingenierie",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise: "Encadrants qui veulent sécuriser juridiquement la conduite de leurs chantiers.",
    prerequis: ["Expérience de conduite ou d'encadrement de travaux"],
    objectifs: [
      "Analyser le cadre juridique et administratif d'un projet de construction",
      "Identifier et mobiliser les garanties légales (parfait achèvement, biennale, décennale)",
      "Gérer un litige avec un client dans un cadre sécurisé",
    ],
    programme: [
      { titre: "Matin", items: [
        "Cadre juridique et administratif : acteurs, marché public/privé, pièces contractuelles, responsabilités",
        "Les garanties légales : parfait achèvement, biennale, décennale ; déclenchement et portée",
      ]},
      { titre: "Après-midi", items: [
        "Le litige client : prévention, traçabilité, gestion sécurisée, recours",
        "Étude de cas : qualifier un désordre et la garantie applicable",
      ]},
    ],
    methodesPedagogiques: [
      "Apports juridiques rendus opérationnels",
      "Études de cas et jurisprudence vulgarisée",
    ],
    supportsPedagogiques: [
      "Support de cours",
      "Fiches synthèse des garanties",
      "Modèles de courriers",
      "Cas pratiques corrigés",
    ],
    modalitesEvaluation: "Étude de cas + QCM.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "paq",
    titre: "PAQ — Plan d'Assurance Qualité",
    famille: "pilotage-ingenierie",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise: "Encadrants chargés de formaliser et faire vivre la qualité sur leur chantier.",
    prerequis: ["Expérience d'encadrement de chantier"],
    objectifs: [
      "Élaborer un plan d'assurance qualité (PAQ) de chantier",
      "Organiser la gestion des finitions",
      "Anticiper et prévenir les malfaçons",
    ],
    programme: [
      { titre: "Matin", items: [
        "Le PAQ : objet, structure, exigences, articulation avec le marché",
        "Construire un PAQ : points d'arrêt, points critiques, contrôles, traçabilité",
      ]},
      { titre: "Après-midi", items: [
        "Gestion des finitions : organisation, réception, levée des réserves",
        "Prévention des malfaçons : causes racines, actions préventives",
        "Évaluation : construction d'un PAQ simplifié",
      ]},
    ],
    methodesPedagogiques: ["Apports + atelier de rédaction d'un PAQ sur cas réel"],
    supportsPedagogiques: [
      "Trame de PAQ",
      "Exemples de points d'arrêt/critiques",
      "Check-list finitions",
      "Support de cours",
    ],
    modalitesEvaluation: "Production d'un PAQ simplifié.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "planification",
    titre: "Planification",
    famille: "pilotage-ingenierie",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise: "Encadrants qui pilotent les délais, les plans et les commandes d'un chantier.",
    prerequis: ["Expérience d'encadrement de chantier"],
    objectifs: [
      "Élaborer un planning de chantier",
      "Identifier et conduire les démarches administratives",
      "Organiser le processus de réalisation des plans et des commandes",
      "Gérer les pénalités de retard",
    ],
    programme: [
      { titre: "Matin", items: [
        "Le planning de chantier : tâches, durées, liens, jalons, chemin critique",
        "Les démarches administratives : autorisations, déclarations, échéances",
      ]},
      { titre: "Après-midi", items: [
        "Processus plans et commandes : circuit de validation, anticipation des commandes, délais fournisseurs",
        "Pénalités de retard : mécanisme, prévention, gestion",
        "Évaluation : construction d'un planning",
      ]},
    ],
    methodesPedagogiques: ["Apports + atelier de planification sur cas réel"],
    supportsPedagogiques: [
      "Gabarit de planning (Gantt)",
      "Check-list démarches administratives",
      "Suivi plans/commandes",
      "Support de cours",
    ],
    modalitesEvaluation: "Production d'un planning de chantier.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "gestion-sous-traitants",
    titre: "Gestion des sous-traitants",
    famille: "pilotage-ingenierie",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise: "Encadrants qui consultent, contractualisent et pilotent des sous-traitants.",
    prerequis: ["Expérience de conduite ou d'encadrement de travaux"],
    objectifs: [
      "Conduire la consultation de sous-traitants",
      "Établir et sécuriser un contrat de sous-traitance",
      "Assurer le suivi financier et de production des sous-traitants",
    ],
    programme: [
      { titre: "Matin", items: [
        "La consultation : cahier des charges, comparaison d'offres, sélection",
        "Le contrat de sous-traitance : pièces, agrément, cautions, sécurisation juridique",
      ]},
      { titre: "Après-midi", items: [
        "Suivi de production : intégration au planning, coactivité, qualité",
        "Suivi financier : situations, retenues, paiement direct",
        "Évaluation : analyse d'un dossier de sous-traitance",
      ]},
    ],
    methodesPedagogiques: ["Apports + études de cas contractuels et de suivi"],
    supportsPedagogiques: [
      "Modèles de contrat et de consultation",
      "Check-list d'agrément",
      "Gabarit de suivi",
      "Support de cours",
    ],
    modalitesEvaluation: "Étude de cas + QCM.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "accompagnement-tp-conducteur-de-travaux",
    titre:
      "Accompagnement à la certification — Conducteur de travaux du bâtiment et du génie civil",
    famille: "pilotage-ingenierie",
    duree: "224 h — 1 lundi/sem. sur 5 mois + 2 j/sem. sur 1 mois",
    effectifMax: 6,
    modalite: "Présentiel",
    publicVise:
      "Chefs de chantier et conducteurs de travaux juniors visant la reconnaissance du Titre Professionnel Conducteur de travaux (RNCP40217).",
    prerequis: [
      "Expérience d'encadrement de chantier",
      "Niveau 4 ou expérience équivalente",
      "Positionnement individuel en entrée",
    ],
    objectifs: [
      "Préparer et organiser un chantier de bâtiment ou de génie civil",
      "Assurer le suivi technique, financier et contractuel des travaux",
      "Coordonner les intervenants et les sous-traitants",
      "Se présenter aux épreuves du Titre Professionnel (RNCP40217)",
    ],
    programme: [
      { titre: "Bloc RNCP40217BC01 — Préparer un chantier de bâtiment et de génie civil", items: [
        "Analyse du dossier, modes opératoires et moyens techniques",
        "Négociation des achats et marchés, budgets et marges prévisionnelles",
        "Documents de préparation, planification et organisation",
      ]},
      { titre: "Bloc RNCP40217BC02 — Conduire les travaux", items: [
        "Ordonnancement, pilotage et coordination des intervenants",
        "Management de l'encadrement et des équipes, animation de réunion de chantier",
        "Gestion financière/technique/administrative, contrôle de la parfaite exécution, clôture",
      ]},
      { titre: "Transversal — Préparation à la certification", items: [
        "Connaissances générales associées (culture bâtiment, BIM, écoconstruction)",
        "Constitution du dossier professionnel, mises en situation, entretien jury, examens blancs",
      ]},
    ],
    methodesPedagogiques: [
      "Alternance apports/ateliers/mises en situation",
      "Cas fil rouge",
      "Suivi individualisé, examens blancs",
    ],
    supportsPedagogiques: [
      "Référentiel RNCP40217",
      "Supports par bloc",
      "Gabarits (budget, planning, situation, DGD)",
      "Trame de dossier professionnel",
      "Sujets d'entraînement",
    ],
    modalitesEvaluation:
      "Évaluations formatives par bloc + examens blancs. Certification délivrée par le Ministère du Travail à l'issue des épreuves officielles, hors PROCESSBTP.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "rncp",
    rncpCode: "RNCP40217",
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "preparation-audit-iso-9001",
    titre: "Préparation à l'audit ISO 9001",
    famille: "pilotage-ingenierie",
    duree: "1 jour — 7 h",
    effectifMax: 6,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Encadrants et responsables qualité d'entreprises BTP qui préparent un audit de certification ou de suivi ISO 9001.",
    prerequis: [
      "Évoluer dans une organisation disposant (ou visant) un système de management de la qualité",
    ],
    objectifs: [
      "Identifier les exigences de la norme ISO 9001 mobilisées lors d'un audit",
      "Préparer les éléments et preuves attendus lors d'un audit qualité",
      "Adopter les bonnes pratiques pour réussir un audit ISO 9001",
      "Repérer et corriger les écarts en amont de l'audit",
    ],
    programme: [
      { titre: "Matin", items: [
        "L'essentiel d'ISO 9001 : approche processus, exigences clés mobilisées en audit",
        "Préparer ses preuves : documents, enregistrements, indicateurs attendus",
      ]},
      { titre: "Après-midi", items: [
        "Réussir l'audit : posture, déroulé, réponses aux questions de l'auditeur",
        "Détecter et corriger les écarts en amont (revue à blanc)",
        "Évaluation : revue à blanc commentée",
      ]},
    ],
    methodesPedagogiques: [
      "Apports + mise en situation d'audit à blanc",
      "Retours d'expérience d'auditeur",
    ],
    supportsPedagogiques: [
      "Check-list de préparation d'audit",
      "Grille d'exigences ISO 9001",
      "Exemples de preuves",
      "Support de cours",
    ],
    modalitesEvaluation: "Mise en situation d'audit à blanc + QCM.",
    financement: ["OPCO", "Plan de développement des compétences", "Fonds propres"],
    certificationType: "module",
    prixAffiche: false,
    prix: null,
  },

  // ---------- FAMILLE 4 — Gestion & développement (artisans) ----------
  {
    slug: "excel-pour-debutant",
    titre: "Excel pour débutant",
    famille: "gestion-developpement",
    duree: "1 jour — 7 h",
    effectifMax: 10,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise:
      "Artisans, dirigeants de TPE BTP, conjoints collaborateurs et assistants qui veulent gérer devis, heures et dépenses sur tableur.",
    prerequis: [
      "Savoir utiliser un ordinateur (souris, clavier, fichiers)",
      "Aucune connaissance d'Excel requise",
    ],
    objectifs: [
      "Se repérer dans l'interface d'Excel et organiser un classeur",
      "Saisir et mettre en forme des données",
      "Construire des formules de calcul simples (totaux, moyennes, pourcentages)",
      "Créer un tableau de suivi (devis, heures, dépenses) et un graphique simple",
      "Imprimer ou exporter un document propre (PDF)",
    ],
    programme: [
      { titre: "Matin — Les fondamentaux", items: [
        "Découvrir Excel : interface, ruban, classeur/feuilles, navigation, saisie",
        "Mettre en forme : formats (nombre, monétaire, date), bordures, couleurs",
        "Premières formules : SOMME, MOYENNE, pourcentage, recopie de formule",
      ]},
      { titre: "Après-midi — Application BTP", items: [
        "Construire un tableau de suivi : devis simple, suivi des heures, suivi des dépenses",
        "Trier, filtrer, présenter : tri/filtre, mise en forme conditionnelle simple",
        "Graphique simple + impression/export PDF",
        "Évaluation : réaliser un tableau de suivi de chantier de A à Z",
      ]},
    ],
    methodesPedagogiques: [
      "Pédagogie pas-à-pas, chaque notion appliquée immédiatement sur ordinateur",
      "Exemples 100 % BTP",
    ],
    supportsPedagogiques: [
      "Classeurs Excel modèles (devis BTP, suivi heures, suivi dépenses)",
      "Fiche mémo raccourcis et formules",
      "Exercices guidés corrigés",
    ],
    modalitesEvaluation:
      "Réalisation d'un tableau de suivi complet + auto-positionnement.",
    financement: ["Fonds propres", "OPCO", "Plan de développement des compétences"],
    certificationType: "attestation",
    prixAffiche: true,
    prix: 800,
  },
  {
    slug: "reponse-appel-offres",
    titre: "Réponse à un appel d'offres — accompagnement individuel",
    famille: "gestion-developpement",
    duree:
      "Accompagnement personnalisé, modulable (généralement 2 à 4 demi-journées selon le dossier)",
    effectifMax: 1,
    modalite: "Présentiel ou distanciel (classe virtuelle)",
    publicVise: "Artisans et dirigeants de TPE/PME BTP visant les marchés publics et privés.",
    prerequis: [
      "Être immatriculé et en capacité de réaliser les prestations visées",
      "Aucune connaissance préalable des marchés publics requise",
    ],
    objectifs: [
      "Comprendre la structure d'un dossier de consultation (RC, CCAP, CCTP, AE, DPGF/BPU)",
      "Analyser un appel d'offres et décider d'y répondre (go / no-go)",
      "Construire un mémoire technique différenciant",
      "Chiffrer et formaliser une offre (DPGF/BPU)",
      "Déposer une réponse dématérialisée (profil acheteur, signature électronique)",
    ],
    programme: [
      { titre: "Modules (ajustés au dossier réel du participant)", items: [
        "Décrypter l'appel d'offres et le DCE : où trouver les AO, lire le règlement de consultation, pièces et critères",
        "Décision go / no-go : faisabilité, capacité, rentabilité, allotissement",
        "Le mémoire technique : structure, moyens, méthodologie, ce qui fait gagner des points",
        "Chiffrage et pièces financières : construire un prix, renseigner DPGF/BPU",
        "Le dépôt dématérialisé : plateformes/profils acheteurs, signature électronique, échéances",
        "Après le dépôt : rapport d'analyse, demandes de précisions, négociation, retour d'expérience",
      ]},
      { titre: "Principe", items: [
        "L'accompagnement se fait sur un dossier réel : on répond ensemble à un vrai appel d'offres",
      ]},
    ],
    methodesPedagogiques: [
      "Accompagnement individuel sur cas réel",
      "Co-production des pièces",
      "Transfert d'outils réutilisables",
    ],
    supportsPedagogiques: [
      "Trame de mémoire technique",
      "Check-list des pièces d'une réponse",
      "Gabarit DPGF",
      "Guide du dépôt dématérialisé",
    ],
    modalitesEvaluation: "Production d'une réponse complète à un appel d'offres réel.",
    financement: ["Fonds propres", "OPCO", "Plan de développement des compétences"],
    certificationType: "attestation",
    prixAffiche: false,
    prix: null,
  },

  // ---------- Stubs « sur demande » (fiche minimale) ----------
  {
    slug: "accompagnement-charge-affaires-btp",
    titre: "Accompagnement à la certification — Chargé d'affaires BTP",
    famille: "pilotage-ingenierie",
    duree: "Sur demande",
    modalite: "Sur demande",
    publicVise: "Programme, durée et tarif définis sur demande.",
    certificationType: "rncp",
    rncpCode: "RNCP37856",
    surDemande: true,
    prixAffiche: false,
    prix: null,
  },
  {
    slug: "accompagnement-manager-projets-btp",
    titre: "Accompagnement à la certification — Manager de projets BTP",
    famille: "pilotage-ingenierie",
    duree: "Sur demande",
    modalite: "Sur demande",
    publicVise: "Programme, durée et tarif définis sur demande.",
    certificationType: "rncp",
    rncpCode: "RNCP38810",
    surDemande: true,
    prixAffiche: false,
    prix: null,
  },
];

// ---------------------------------------------------------------------------
// Map raw → Training (exposes English-named fields for legacy components)
// ---------------------------------------------------------------------------

function toTraining(r: RawTraining): Training {
  const family = FAMILLE_TO_DISPLAY[r.famille];
  const modalities = parseModalities(r.modalite);
  const audience = AUDIENCE_TAGS[r.slug] ?? undefined;
  const summary = SUMMARIES[r.slug] ?? r.publicVise ?? r.titre;
  return {
    slug: r.slug,
    title: r.titre,
    family,
    duration: r.duree,
    summary,
    modalities,
    audience,
    publicVise: r.publicVise,
    prerequis: r.prerequis,
    objectifs: r.objectifs,
    programme: r.programme,
    methodesPedagogiques: r.methodesPedagogiques,
    supportsPedagogiques: r.supportsPedagogiques,
    modalitesEvaluation: r.modalitesEvaluation,
    financement: r.financement,
    certificationType: r.certificationType,
    rncpCode: r.rncpCode,
    prixAffiche: r.prixAffiche,
    prix: r.prix,
    effectifMax: r.effectifMax,
    modalite: r.modalite,
    surDemande: r.surDemande,
  };
}

const GROUP_ORDER: RawTraining["famille"][] = [
  "execution-terrain",
  "encadrement-chantier",
  "pilotage-ingenierie",
  "gestion-developpement",
];

export const catalogue: TrainingFamily[] = GROUP_ORDER.map((fam) => ({
  id: FAMILLE_TO_GROUP_ID[fam],
  name: FAMILLE_TO_DISPLAY[fam],
  trainings: trainings.filter((t) => t.famille === fam).map(toTraining),
}));

export function findTrainingBySlug(
  slug: string,
): { training: Training; family: TrainingFamily } | null {
  for (const family of catalogue) {
    const training = family.trainings.find((t) => t.slug === slug);
    if (training) return { training, family };
  }
  return null;
}

export function getAllTrainingTitles(): string[] {
  return catalogue.flatMap((f) => f.trainings.map((t) => t.title));
}