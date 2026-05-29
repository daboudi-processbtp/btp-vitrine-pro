// JSON-LD helpers for PROCESSBTP

export const ORG_NAME = "PROCESSBTP";
export const ORG_LEGAL =
  "Déclaration d'activité enregistrée sous le numéro 32591329759 auprès du préfet de région Hauts-de-France. Cet enregistrement ne vaut pas agrément de l'État.";
export const ORG_DECLARATION_NUMBER = "32591329759";
export const ORG_DESCRIPTION =
  "Organisme de formation certifié Qualiopi, spécialisé dans le bâtiment et le génie civil. Formations certifiantes et éligibles CPF, partout en France.";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    areaServed: "FR",
    address: { "@type": "PostalAddress", addressCountry: "FR", addressRegion: "Hauts-de-France" },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Qualiopi" },
      { "@type": "EducationalOccupationalCredential", name: "RPSH — Référent Handicap" },
    ],
    identifier: ORG_DECLARATION_NUMBER,
  };
}

export function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fondateur PROCESSBTP",
    jobTitle: "Formateur BTP — 23 ans d'expérience chantier",
    worksFor: { "@type": "EducationalOrganization", name: ORG_NAME },
    description:
      "Vétéran du bâtiment et du génie civil, double Master, devenu formateur pour transmettre l'expertise terrain.",
  };
}

export function courseJsonLd(opts: {
  name: string;
  description: string;
  cpfEligible?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    provider: { "@type": "EducationalOrganization", name: ORG_NAME, sameAs: "/" },
    inLanguage: "fr-FR",
    educationalCredentialAwarded: opts.cpfEligible ? "Éligible CPF" : undefined,
  };
}
