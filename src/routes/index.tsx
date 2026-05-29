import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TrainingFamilies } from "@/components/sections/TrainingFamilies";
import { FeaturedTrainings } from "@/components/sections/FeaturedTrainings";
import { WhyProcessBTP } from "@/components/sections/WhyProcessBTP";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { founderJsonLd } from "@/lib/seo";

const TITLE = "PROCESSBTP — Formations BTP certifiantes, éligibles CPF, Qualiopi";
const DESCRIPTION =
  "Organisme de formation BTP certifié Qualiopi : exécution, encadrement de chantier, pilotage. Éligible CPF, partout en France, en présentiel ou classe virtuelle.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(founderJsonLd()) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <TrainingFamilies />
      <FeaturedTrainings />
      <WhyProcessBTP />
      <SocialProof />
      <ProcessSteps />
      <FinalCTA />
    </main>
  );
}
