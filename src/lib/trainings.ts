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
        slug: "lecture-de-plan",
        family: "Exécution & terrain",
        title: "Lecture de plan",
        duration: "2 à 3 jours",
        summary:
          "Décoder plans d'architecte et plans d'exécution, repérer les côtes critiques, anticiper les incohérences.",
      },
      {
        slug: "securite-chantier",
        family: "Exécution & terrain",
        title: "Sécurité chantier — fondamentaux",
        duration: "1 jour",
        summary:
          "Identifier les risques majeurs en gros œuvre et adopter les bonnes pratiques au quotidien.",
      },
      {
        slug: "gestes-pro-go",
        family: "Exécution & terrain",
        title: "Gestes professionnels — gros œuvre",
        duration: "Sur mesure",
        summary:
          "Acquisition et perfectionnement des gestes techniques selon vos besoins opérationnels.",
      },
    ],
  },
  {
    id: "encadrement",
    name: "Encadrement de chantier",
    trainings: [
      {
        slug: "tp-chef-de-chantier",
        family: "Encadrement de chantier",
        title: "Accompagnement TP — Chef de chantier gros œuvre",
        duration: "Parcours sur mesure",
        cpf: true,
        summary:
          "Préparation au titre professionnel : organisation, sécurité, qualité, conduite d'équipe.",
      },
      {
        slug: "management-equipe",
        family: "Encadrement de chantier",
        title: "Management d'équipe chantier",
        duration: "2 jours",
        summary: "Posture managériale, communication, gestion des conflits sur le terrain.",
      },
      {
        slug: "qualite-chantier",
        family: "Encadrement de chantier",
        title: "Qualité & non-conformités",
        duration: "2 jours",
        summary: "Mettre en place un suivi qualité opérationnel inspiré des standards ISO 9001.",
      },
    ],
  },
  {
    id: "pilotage",
    name: "Pilotage & ingénierie",
    trainings: [
      {
        slug: "tp-conducteur-de-travaux",
        family: "Pilotage & ingénierie",
        title: "Accompagnement TP — Conducteur de travaux",
        duration: "Parcours sur mesure",
        cpf: true,
        summary:
          "Préparation au titre professionnel : pilotage technique, financier et contractuel d'opérations BTP.",
      },
      {
        slug: "planning-couts",
        family: "Pilotage & ingénierie",
        title: "Planning & maîtrise des coûts",
        duration: "3 jours",
        summary: "Construire un planning fiable, suivre les coûts, anticiper les dérives.",
      },
      {
        slug: "marches-publics-btp",
        family: "Pilotage & ingénierie",
        title: "Lecture de marchés publics BTP",
        duration: "2 jours",
        summary: "Décrypter CCAP, CCTP, BPU, DPGF et sécuriser l'exécution contractuelle.",
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