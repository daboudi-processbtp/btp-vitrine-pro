import { useEffect, useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CtaButton } from "@/components/brand/CtaButton";
import { getAllTrainingTitles } from "@/lib/trainings";

// TODO : remplacer par votre clé d'accès Web3Forms (https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY";

type Status = "idle" | "sending" | "ok" | "error";

const CUSTOM_OPTION = "Formation sur mesure";
const UNSURE_OPTION = "Je ne sais pas encore — conseillez-moi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SIRET_RE = /^[0-9\s]{14,17}$/;

type FieldName =
  | "name"
  | "company"
  | "siret"
  | "email"
  | "phone"
  | "participants"
  | "message";
type Errors = Partial<Record<FieldName, string>>;
type Touched = Partial<Record<FieldName, boolean>>;

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

  const matchedFormation = initialFormation
    ? trainingTitles.find((t) => t.toLowerCase() === initialFormation.toLowerCase())
    : undefined;
  const defaultFormation = matchedFormation ?? (initialFormation ? CUSTOM_OPTION : "");
  const [formation, setFormation] = useState<string>(defaultFormation);

  useEffect(() => {
    setFormation(defaultFormation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFormation]);

  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    company: "",
    siret: "",
    email: "",
    phone: "",
    participants: "",
    message: "",
  });
  const [touched, setTouched] = useState<Touched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isParticulier = profile === "particulier";

  const errors = useMemo<Errors>(() => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Indiquez votre nom et prénom.";
    if (!isParticulier && values.company.trim().length < 1)
      e.company = "Indiquez le nom de votre organisation.";
    if (!isParticulier && !SIRET_RE.test(values.siret.trim()))
      e.siret = "Saisissez un SIRET (14 chiffres).";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Adresse email invalide.";
    if (!isParticulier) {
      const n = Number(values.participants);
      if (!values.participants || Number.isNaN(n) || n < 1)
        e.participants = "Indiquez le nombre de participants.";
    }
    if (values.message.trim().length < 1) e.message = "Décrivez brièvement votre besoin.";
    return e;
  }, [values, isParticulier]);

  function setField(name: FieldName, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }
  function markTouched(name: FieldName) {
    setTouched((t) => ({ ...t, [name]: true }));
  }
  function showError(name: FieldName): string | undefined {
    if (!(touched[name] || submitAttempted)) return undefined;
    return errors[name];
  }
  function isValid(name: FieldName): boolean {
    return (
      (touched[name] || submitAttempted) &&
      !errors[name] &&
      values[name].trim().length > 0
    );
  }

  const labelColor = variant === "dark" ? "text-white/90" : "text-foreground";
  const inputBase =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
      : "bg-card border-border text-foreground placeholder:text-muted-foreground";

  function fieldClasses(name: FieldName, extra = "") {
    const err = showError(name);
    const ok = isValid(name);
    const stateBorder = err
      ? "border-destructive focus-visible:ring-destructive"
      : ok
        ? variant === "dark"
          ? "border-emerald-300/70"
          : "border-secondary/70"
        : "";
    return `w-full rounded-md border px-3 py-2.5 text-sm transition-colors ${inputBase} ${stateBorder} ${extra}`.trim();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        email: true,
        message: true,
        company: !isParticulier,
        siret: !isParticulier,
        participants: !isParticulier,
      });
      return;
    }
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
        setValues({
          name: "",
          company: "",
          siret: "",
          email: "",
          phone: "",
          participants: "",
          message: "",
        });
        setTouched({});
        setSubmitAttempted(false);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    const successSurface =
      variant === "dark"
        ? "border-white/20 bg-white/5 text-white"
        : "border-secondary/30 bg-secondary/5 text-foreground";
    return (
      <div
        role="status"
        aria-live="polite"
        className={`motion-safe:animate-[fade-slide-up_400ms_ease-out_both] rounded-lg border ${successSurface} p-6 sm:p-8`}
      >
        <div className="flex items-start gap-4">
          <CheckCircle2
            className={`h-8 w-8 shrink-0 ${variant === "dark" ? "text-emerald-300" : "text-secondary"}`}
            aria-hidden="true"
          />
          <div className="space-y-2">
            <p className="text-lg font-semibold">Merci, votre demande est bien reçue.</p>
            <p
              className={`text-sm leading-relaxed ${variant === "dark" ? "text-white/80" : "text-muted-foreground"}`}
            >
              Je vous réponds personnellement sous 48&nbsp;h ouvrées avec une première
              proposition de format, de calendrier et de financement.
            </p>
            <p className="text-sm font-medium">— Djemma Aboudi</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => markTouched("name")}
            aria-invalid={!!showError("name")}
            aria-describedby={showError("name") ? "cf-name-err" : undefined}
            className={fieldClasses("name")}
          />
          {showError("name") && (
            <p id="cf-name-err" className="mt-1 text-xs text-destructive">
              {showError("name")}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-company" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Organisation {isParticulier && <span className="text-xs font-normal opacity-70">(facultatif)</span>}
          </label>
          <input
            id="cf-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
            onBlur={() => markTouched("company")}
            aria-invalid={!!showError("company")}
            aria-describedby={showError("company") ? "cf-company-err" : undefined}
            className={fieldClasses("company")}
          />
          {showError("company") && (
            <p id="cf-company-err" className="mt-1 text-xs text-destructive">
              {showError("company")}
            </p>
          )}
        </div>
      </div>

      {!isParticulier && (
        <div>
          <label htmlFor="cf-siret" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            SIRET de l'entreprise
          </label>
          <input
            id="cf-siret"
            name="siret"
            inputMode="numeric"
            title="14 chiffres (espaces autorisés)"
            placeholder="14 chiffres"
            maxLength={17}
            value={values.siret}
            onChange={(e) => setField("siret", e.target.value)}
            onBlur={() => markTouched("siret")}
            aria-invalid={!!showError("siret")}
            aria-describedby={showError("siret") ? "cf-siret-err" : undefined}
            className={fieldClasses("siret", "sm:max-w-xs")}
          />
          {showError("siret") && (
            <p id="cf-siret-err" className="mt-1 text-xs text-destructive">
              {showError("siret")}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => markTouched("email")}
            aria-invalid={!!showError("email")}
            aria-describedby={showError("email") ? "cf-email-err" : undefined}
            className={fieldClasses("email")}
          />
          {showError("email") && (
            <p id="cf-email-err" className="mt-1 text-xs text-destructive">
              {showError("email")}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-phone" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            Téléphone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors ${inputBase}`}
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
          value={values.participants}
          onChange={(e) => setField("participants", e.target.value)}
          onBlur={() => markTouched("participants")}
          aria-invalid={!!showError("participants")}
          aria-describedby={showError("participants") ? "cf-participants-err" : undefined}
          className={fieldClasses("participants", "sm:max-w-xs")}
        />
        {showError("participants") && (
          <p id="cf-participants-err" className="mt-1 text-xs text-destructive">
            {showError("participants")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-msg" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
          Votre besoin
        </label>
        <textarea
          id="cf-msg"
          name="message"
          rows={4}
          placeholder="Contexte, objectifs, format souhaité, échéance…"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => markTouched("message")}
          aria-invalid={!!showError("message")}
          aria-describedby={showError("message") ? "cf-msg-err" : undefined}
          className={fieldClasses("message")}
        />
        {showError("message") && (
          <p id="cf-msg-err" className="mt-1 text-xs text-destructive">
            {showError("message")}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <CtaButton type="submit" variant="amber" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 motion-safe:animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer la demande"
          )}
        </CtaButton>
        {status === "error" && (
          <p role="alert" aria-live="polite" className="text-sm text-destructive">
            L'envoi a échoué. Merci de réessayer ou de me joindre directement par email
            ou téléphone (coordonnées ci-dessus).
          </p>
        )}
        {submitAttempted && Object.keys(errors).length > 0 && status !== "sending" && (
          <p role="alert" aria-live="polite" className="text-sm text-destructive">
            Merci de corriger les champs indiqués avant d'envoyer.
          </p>
        )}
      </div>
    </form>
  );
}
