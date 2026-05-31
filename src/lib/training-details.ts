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
};

export const trainingDetails: Record<string, TrainingDetailContent> = {
  "tp-chef-de-chantier": {
    duration: "224 h — 1 vendredi/sem sur 5 mois + 2 j/sem sur 1 mois",
    groupSize: "6 stagiaires min (multi-entreprises)",
    modality: "Présentiel",
    outcomeKind:
      "Accompagnement à la certification RNCP38721 (niveau 5, Ministère du Travail) — éligible CPF",
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
      "CPF",
      "OPCO (selon votre branche)",
      "Plan de développement des compétences",
      "France Travail (selon situation)",
    ],
    outcome:
      "Accompagnement à la certification. Tant que l'habilitation DREETS n'est pas obtenue, l'intitulé reste « accompagnement à la certification », jamais « formation certifiante ».",
  },
  "tp-conducteur-de-travaux": {
    duration: "224 h — 1 lundi/sem sur 5 mois + 2 j/sem sur 1 mois",
    groupSize: "6 stagiaires min (multi-entreprises)",
    modality: "Présentiel",
    outcomeKind:
      "Accompagnement à la certification RNCP40217 (niveau 5, Ministère du Travail) — éligible CPF",
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
};

export function findTrainingDetail(slug: string): TrainingDetailContent | undefined {
  return trainingDetails[slug];
}