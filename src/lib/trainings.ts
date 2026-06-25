import type { Training } from "@/components/ui/TrainingCard";

export type TrainingFamily = {
  id: string;
  name: string;
  trainings: Training[];
};

export const catalogue: TrainingFamily[] = [
  {
    id: "execution",
    name: "Exécution & terrain",
    trainings: [
      {
        slug: "lecture-de-plan-initiation",
        family: "Exécution & terrain",
        title: "Lecture de plan : initiation",
        duration: "2 jours (14 h)",
        modalities: ["presentiel"],
        audience: "Compagnon, ouvrier qualifié",
        summary:
          "Identifier les symboles d'un plan de coffrage et de ferraillage, situer un ouvrage dans l'espace, relever cotes et niveaux.",
      },
      {
        slug: "qualite-betons",
        family: "Exécution & terrain",
        title: "Qualité : les bétons",
        duration: "1 jour (7 h)",
        modalities: ["presentiel"],
        audience: "Compagnon, ouvrier qualifié",
        summary:
          "Distinguer les types de béton selon l'ouvrage, les mettre en œuvre dans les règles de l'art et repérer les non-conformités courantes.",
      },
      {
        slug: "lecture-de-plan-confirme",
        family: "Exécution & terrain",
        title: "Lecture de plan : confirmé",
        duration: "2 jours (14 h)",
        modalities: ["presentiel"],
        audience: "Chef d'équipe",
        summary:
          "Réaliser une implantation, exploiter un plan de coffrage complexe et décoder un plan de ferraillage pour anticiper les difficultés d'exécution.",
      },
      {
        slug: "premurs",
        family: "Exécution & terrain",
        title: "Prémurs",
        duration: "2 jours (14 h)",
        modalities: ["presentiel"],
        audience: "Chef d'équipe",
        summary:
          "Implanter, couler et traiter les joints de prémurs, y compris de grande hauteur, en contrôlant ferraillage et conformité de la mise en œuvre.",
      },
      {
        slug: "management-chef-equipe",
        family: "Exécution & terrain",
        title: "Management — chef d'équipe",
        duration: "1 jour (7 h)",
        modalities: ["presentiel"],
        audience: "Chef d'équipe",
        summary:
          "Conduire un briefing de poste, gérer un conflit d'équipe, suivre les rendements et faire appliquer le règlement intérieur.",
      },
    ],
  },
  {
    id: "encadrement",
    name: "Encadrement de chantier",
    trainings: [
      {
        slug: "management-qualite-dechets",
        family: "Encadrement de chantier",
        title: "Management qualité & gestion des déchets",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Assistant chef de chantier",
        summary:
          "Élaborer une fiche d'autocontrôle, repérer les malfaçons courantes et organiser le tri et la gestion des déchets de chantier.",
      },
      {
        slug: "management-heures-beton",
        family: "Encadrement de chantier",
        title: "Gestion des heures & consommation béton",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Assistant chef de chantier",
        summary:
          "Tenir les tableaux de suivi des heures, exploiter le BMO et suivre la consommation de béton pour alerter en cas de dérive.",
      },
      {
        slug: "methode-chantier",
        family: "Encadrement de chantier",
        title: "Méthode chantier",
        duration: "2 jours (14 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Assistant chef de chantier",
        summary:
          "Élaborer un planning d'exécution, rédiger un mode opératoire et construire un plan d'installation de chantier (PIC).",
      },
      {
        slug: "tp-chef-de-chantier",
        family: "Encadrement de chantier",
        title: "Accompagnement TP — Chef de chantier gros œuvre",
        duration: "224 h (parcours)",
        modalities: ["presentiel"],
        cpf: true,
        audience: "Assistant chef de chantier",
        summary:
          "Accompagnement à la certification RNCP38721 : organisation de chantier, encadrement des équipes, suivi qualité, sécurité et délais.",
      },
    ],
  },
  {
    id: "pilotage",
    name: "Pilotage & ingénierie",
    trainings: [
      {
        slug: "gestion-financiere",
        family: "Pilotage & ingénierie",
        title: "Gestion financière de chantier",
        duration: "4 jours (28 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Établir le point 0 financier, suivre les écarts, chiffrer les travaux supplémentaires (TS) et conduire la clôture financière (DGD).",
      },
      {
        slug: "droit-de-la-construction",
        family: "Pilotage & ingénierie",
        title: "Droit de la construction",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Analyser le cadre juridique d'un projet, mobiliser les garanties légales (parfait achèvement, biennale, décennale) et sécuriser un litige.",
      },
      {
        slug: "paq",
        family: "Pilotage & ingénierie",
        title: "Plan d'Assurance Qualité (PAQ)",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Élaborer un plan d'assurance qualité de chantier, organiser la gestion des finitions et prévenir les malfaçons.",
      },
      {
        slug: "planification",
        family: "Pilotage & ingénierie",
        title: "Planification de chantier",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Construire un planning de chantier, piloter démarches administratives, plans et commandes, et gérer les pénalités de retard.",
      },
      {
        slug: "gestion-sous-traitants",
        family: "Pilotage & ingénierie",
        title: "Gestion des sous-traitants",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Conduire la consultation, établir et sécuriser un contrat de sous-traitance, et assurer le suivi financier et de production.",
      },
      {
        slug: "tp-conducteur-de-travaux",
        family: "Pilotage & ingénierie",
        title: "Accompagnement TP — Conducteur de travaux",
        duration: "224 h (parcours)",
        modalities: ["presentiel"],
        cpf: true,
        audience: "Chef de chantier, conducteur de travaux junior",
        summary:
          "Accompagnement à la certification RNCP40217 : suivi technique, financier et contractuel des travaux, coordination des intervenants.",
      },
      {
        slug: "preparation-audit-iso-9001",
        family: "Pilotage & ingénierie",
        title: "Préparation à l'audit ISO 9001",
        duration: "1 jour (7 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Encadrants, responsables qualité",
        summary:
          "Identifier les exigences ISO 9001 mobilisées en audit, préparer les preuves attendues et corriger les écarts en amont.",
      },
    ],
  },
  {
    id: "gestion-developpement",
    name: "Gestion & développement (artisans)",
    trainings: [
      {
        slug: "excel-pour-debutant",
        family: "Gestion & développement (artisans)",
        title: "Excel pour débutant",
        duration: "2 jours (14 h)",
        modalities: ["presentiel", "distanciel"],
        audience: "Artisans, dirigeants TPE/PME du bâtiment",
        prixAffiche: true,
        prix: 800,
        summary:
          "Prendre en main Excel pour suivre devis, factures et heures : tableaux, formules de base et mise en forme adaptées au quotidien d'un artisan.",
      },
      {
        slug: "charge-d-affaires",
        family: "Gestion & développement (artisans)",
        title: "Chargé d'affaires",
        modalities: ["presentiel", "distanciel"],
        audience: "Artisans, dirigeants TPE/PME du bâtiment",
        stub: true,
        summary:
          "Parcours en cours de structuration : développement commercial, chiffrage et suivi d'affaires pour les TPE/PME du bâtiment. Contactez-nous pour en discuter.",
      },
      {
        slug: "manager-de-projets",
        family: "Gestion & développement (artisans)",
        title: "Manager de projets",
        modalities: ["presentiel", "distanciel"],
        audience: "Artisans, dirigeants TPE/PME du bâtiment",
        stub: true,
        summary:
          "Parcours en cours de structuration : pilotage transverse d'opérations multi-corps d'état pour artisans en développement. Contactez-nous pour en discuter.",
      },
    ],
  },
];

export function findTrainingBySlug(slug: string): { training: Training; family: TrainingFamily } | null {
  for (const family of catalogue) {
    const training = family.trainings.find((t) => t.slug === slug);
    if (training) return { training, family };
  }
  return null;
}

export function getAllTrainingTitles(): string[] {
  return catalogue.flatMap((f) => f.trainings.map((t) => t.title));
}