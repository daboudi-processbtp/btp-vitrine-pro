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
  "lecture-de-plan": {
    duration: "2 jours (14 h)",
    groupSize: "8 stagiaires max",
    modality: "Présentiel ou classe virtuelle",
    outcomeKind: "Attestation de compétences",
    audienceShort: "Compagnons, chefs d'équipe, encadrement junior",
    targetProfiles: [
      "Compagnons gros œuvre amenés à exécuter à partir de plans",
      "Chefs d'équipe et chefs de chantier souhaitant fiabiliser la préparation",
      "Conducteurs de travaux juniors ou en reconversion BTP",
      "Personnels de bureau d'études débutants côté terrain",
    ],
    prerequisites:
      "Aucun prérequis technique. Savoir lire et écrire le français. Une première expérience chantier est un plus mais n'est pas obligatoire.",
    objectives: [
      "Identifier les différents types de plans (architecte, exécution, coffrage, ferraillage, réseaux)",
      "Décoder les conventions de représentation : échelles, cotes, niveaux, symboles, nomenclatures",
      "Lire et interpréter un plan d'exécution pour préparer une intervention chantier",
      "Repérer les côtes critiques et les points de vigilance avant démarrage",
      "Détecter les incohérences ou informations manquantes entre plans et CCTP",
      "Communiquer efficacement avec le bureau d'études à partir d'un plan annoté",
    ],
    program: [
      {
        title: "Module 1 — Typologies de plans et conventions de représentation",
        items: [
          "Plans d'architecte, plans d'exécution, plans de méthodes",
          "Échelles, orientations, cartouches et nomenclatures",
          "Conventions de cotation, niveaux, axes et repères",
          "Vues, coupes, élévations et perspectives",
        ],
      },
      {
        title: "Module 2 — Lecture des plans d'architecte",
        items: [
          "Repérage des espaces, circulations et ouvrages principaux",
          "Lecture des élévations et façades",
          "Identification des contraintes architecturales et techniques",
        ],
      },
      {
        title: "Module 3 — Plans d'exécution : coffrage et ferraillage",
        items: [
          "Décodage des plans de coffrage gros œuvre",
          "Lecture des plans de ferraillage et nomenclatures aciers",
          "Articulation entre plans d'exécution, CCTP et notes de calcul",
          "Côtes critiques, tolérances et points de contrôle",
        ],
      },
      {
        title: "Module 4 — Mises en situation et cas chantier",
        items: [
          "Exercices pratiques sur plans réels apportés par les stagiaires ou le formateur",
          "Détection d'incohérences entre plans, CCTP et réalité terrain",
          "Préparation d'une intervention à partir d'un dossier d'exécution",
          "Synthèse et plan d'action individuel",
        ],
      },
    ],
    funding: [
      "OPCO (selon votre branche)",
      "Plan de développement des compétences de l'entreprise",
      "Financement sur fonds propres",
    ],
    outcome:
      "Attestation de compétences PROCESSBTP délivrée à l'issue de la formation, sur la base de l'évaluation continue et d'un cas pratique final.",
  },
};

export function findTrainingDetail(slug: string): TrainingDetailContent | undefined {
  return trainingDetails[slug];
}