import { useState } from "react";
import { CtaButton } from "@/components/brand/CtaButton";

// TODO: remplacer par votre vraie URL Cal.com
const CAL_URL = "https://cal.com/processbtp/decouverte";

/**
 * Réservation Cal.com — chargée uniquement au clic.
 * Aucun script tiers / aucun cookie tant que l'utilisateur n'a pas cliqué.
 */
export function CalBookingEmbed({
  label = "Réservez un appel découverte (20 min)",
  variant = "ghost-light",
}: {
  label?: string;
  variant?: "amber" | "outline-light" | "outline-dark" | "ghost-light";
}) {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <CtaButton
        type="button"
        variant={variant}
        onClick={() => setOpened(true)}
        aria-label="Ouvrir la prise de rendez-vous Cal.com"
      >
        {label}
      </CtaButton>
    );
  }

  // À l'ouverture, on charge l'iframe Cal.com directement (pas de cookie tiers
  // tant que l'utilisateur n'a pas interagi avec le widget).
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <iframe
        title="Prise de rendez-vous PROCESSBTP"
        src={CAL_URL}
        loading="lazy"
        className="h-[640px] w-full"
      />
      <p className="border-t border-border bg-muted/40 px-4 py-2 text-center text-xs text-muted-foreground">
        Powered by Cal.com — chargé à votre demande.
      </p>
    </div>
  );
}
