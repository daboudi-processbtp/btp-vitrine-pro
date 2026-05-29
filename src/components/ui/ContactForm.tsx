import { useState, type FormEvent } from "react";
import { CtaButton } from "@/components/brand/CtaButton";

// TODO : remplacer par votre clé d'accès Web3Forms (https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = useState<Status>("idle");
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
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="Nouvelle demande de devis — PROCESSBTP" />
      <input type="hidden" name="from_name" value="Site PROCESSBTP" />
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
            Entreprise / organisme
          </label>
          <input
            id="cf-company"
            name="company"
            className={`w-full rounded-md border px-3 py-2.5 text-sm ${inputBase}`}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Email professionnel
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
          placeholder="Formation(s) ciblée(s), nombre de stagiaires, format, échéance…"
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
