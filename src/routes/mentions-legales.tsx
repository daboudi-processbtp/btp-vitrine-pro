import { createFileRoute } from "@tanstack/react-router";
import { ORG_LEGAL, ORG_DECLARATION_NUMBER } from "@/lib/seo";

const TITLE = "Mentions légales — PROCESSBTP";
const DESCRIPTION =
  "Mentions légales de PROCESSBTP, organisme de formation BTP certifié Qualiopi.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/mentions-legales" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <main id="main">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Informations</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-foreground/90 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Éditeur du site</h2>
            <p className="mt-3 text-sm leading-relaxed">
              PROCESSBTP — Organisme de formation professionnelle dans le secteur du bâtiment et du
              génie civil.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Activité de formation</h2>
            <p className="mt-3 text-sm leading-relaxed">{ORG_LEGAL}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Numéro de déclaration d'activité : <strong>{ORG_DECLARATION_NUMBER}</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Hébergement</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Ce site est hébergé sur une infrastructure cloud. Les coordonnées de l'hébergeur sont
              disponibles sur demande.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Propriété intellectuelle</h2>
            <p className="mt-3 text-sm leading-relaxed">
              L'ensemble des contenus de ce site (textes, visuels, logos) est protégé par le droit
              d'auteur. Toute reproduction ou diffusion non autorisée est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Données personnelles</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Les données transmises via le formulaire de contact ne sont utilisées que pour répondre
              à votre demande. Vous disposez d'un droit d'accès, de rectification et de suppression
              conformément au RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Accessibilité &amp; handicap</h2>
            <p className="mt-3 text-sm leading-relaxed">
              PROCESSBTP s'engage à rendre ses formations accessibles. Pour toute situation de
              handicap, un référent dédié étudiera avec vous les adaptations nécessaires.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}