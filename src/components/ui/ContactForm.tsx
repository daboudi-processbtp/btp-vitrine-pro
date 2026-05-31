import { useEffect, useState, type FormEvent } from "react";
import { CtaButton } from "@/components/brand/CtaButton";
import { getAllTrainingTitles } from "@/lib/trainings";

// TODO : remplacer par votre clé d'accès Web3Forms (https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY";

type Status = "idle" | "sending" | "ok" | "error";

const CUSTOM_OPTION = "Formation sur mesure";
const UNSURE_OPTION = "Je ne sais pas encore — conseillez-moi";

export function ContactForm({
  variant = "light",
  initialFormation,
}: {
  variant?: "light" | "dark";
  initialFormation?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [profile, setProfile] = useState<"entreprise" | "particulier">("entreprise");
  const trainingTitles = getAllTrainingTitles();

  // If the URL passes ?formation= that matches a known title, use it.
  // Otherwise, if it's a non-empty unknown string, fall back to "sur mesure".
  const matchedFormation = initialFormation
    ? trainingTitles.find((t) => t.toLowerCase() === initialFormation.toLowerCase())
    : undefined;
  const defaultFormation = matchedFormation ?? (initialFormation ? CUSTOM_OPTION : "");
  const [formation, setFormation] = useState<string>(defaultFormation);

  useEffect(() => {
    setFormation(defaultFormation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFormation]);

  const labelColor = variant === "dark" ? "text-white/90" : "text-foreground";
  const inputBase =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
      : "bg-card border-border text-foreground placeholder:text-muted-foreground";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { success: boolean };
      if (data.success) {
        setStatus("ok");
        form.reset();
        setFormation("");
        setProfile("entreprise");
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const isParticulier = profile === "particulier";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="Nouvelle demande de devis — PROCESSBTP" />
      <input type="hidden" name="from_name" value="Site PROCESSBTP" />
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <span className={`mb-1.5 block text-sm font-medium ${labelColor}`}>Vous êtes</span>
        <div className="flex flex-wrap gap-2">
          {(["entreprise", "particulier"] as const).map((p) => (
            <label
              key={p}
              className={`cursor-pointer rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                profile === p
                  ? variant === "dark"
                    ? "border-white bg-white/15 text-white"
                    : "border-primary bg-primary/10 text-primary"
                  : variant === "dark"
                    ? "border-white/20 text-white/80 hover:bg-white/5"
                    : "border-border text-foreground/80 hover:bg-accent/40"
              }`}
            >
              <input
                type="radio"
                name="profile"
                value={p}
                checked={profile === p}
                onChange={() => setProfile(p)}
                className="sr-only"
              />
              {p === "entreprise" ? "Je représente une organisation" : "Je suis un particulier"}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Nom et prénom
          </label>
          <input
            id="cf-name"
            name="name"
            required
            minLength={2}
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Organisation {isParticulier && <span className="text-xs font-normal opacity-70">(facultatif)</span>}
          </label>
          <input
            id="cf-company"
            name="company"
            required={!isParticulier}
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Téléphone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-formation" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Formation concernée
          </label>
          <select
            id="cf-formation"
            name="formation"
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
          >
            <option value="">— Sélectionnez —</option>
            {trainingTitles.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
            <option value={CUSTOM_OPTION}>{CUSTOM_OPTION}</option>
            <option value={UNSURE_OPTION}>{UNSURE_OPTION}</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-funding" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Financement envisagé
          </label>
          <select
            id="cf-funding"
            name="funding"
            defaultValue=""
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
          >
            <option value="">— À définir —</option>
            <option value="OPCO">OPCO</option>
            <option value="Plan de développement des compétences">Plan de développement des compétences</option>
            <option value="CPF">CPF</option>
            <option value="France Travail">France Travail</option>
            <option value="Fonds propres">Fonds propres</option>
            <option value="Autre / je ne sais pas">Autre / je ne sais pas</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-participants" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
          Nombre de participants {isParticulier && <span className="text-xs font-normal opacity-70">(facultatif)</span>}
        </label>
        <input
          id="cf-participants"
          name="participants"
          type="number"
          min={1}
          required={!isParticulier}
          className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase} sm:max-w-xs`}
        />
      </div>

      <div>
        <label htmlFor="cf-msg" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
          Votre besoin
        </label>
        <textarea
          id="cf-msg"
          name="message"
          required
          rows={4}
          className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
          placeholder="Contexte, objectifs, format souhaité, échéance…"
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <CtaButton type="submit" variant="amber" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Envoi…" : "Envoyer la demande"}
        </CtaButton>
        {status === "ok" && (
          <p className={`text-sm ${variant === "dark" ? "text-white" : "text-secondary"}`}>
            Merci, votre demande a bien été envoyée. Nous revenons vers vous sous 24 h ouvrées.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            Une erreur est survenue. Merci de réessayer ou de nous contacter par email.
          </p>
        )}
      </div>
    </form>
  );
}
