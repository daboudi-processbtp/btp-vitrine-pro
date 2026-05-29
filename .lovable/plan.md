
# PROCESSBTP — Site vitrine B2B

Site en français, ton "vous", positionnement premium/institutionnel (CESI × OpenClassrooms). Pas de prix, pas d'e-commerce. Objectif : crédibilité → demande de devis.

## Pages à créer

1. **`/` Accueil** — les 8 sections du brief, dans l'ordre.
2. **`/formations` Catalogue** — liste de toutes les formations regroupées par les 3 familles (Exécution & terrain, Encadrement de chantier, Pilotage & ingénierie). Cartes réutilisables (composant `TrainingCard`).
3. **404** — déjà géré par `__root.tsx`, ajusté au branding.

Les fiches formation détaillées (`/formations/$slug`) ne sont **pas** créées dans cette itération (contenu fourni plus tard). Je prépare néanmoins :
- le composant `TrainingCard` (réutilisable accueil + catalogue),
- le composant `TrainingDetailTemplate` (template fiche prêt à recevoir contenu : objectifs, programme, public, prérequis, durée, modalités, accessibilité handicap, CPF, financement, JSON-LD `Course`).

Les CTA "Voir la formation" pointent pour l'instant vers `/formations` (ancres) — à recâbler vers `/formations/$slug` quand le contenu arrivera.

## Identité visuelle (tokens dans `src/styles.css`)

Tokens sémantiques en `oklch` (jamais de couleurs en dur dans les composants) :
- `--primary` cobalt #375CAA — hero, footer, bannières
- `--secondary` pétrole #3290B6 — liens, icônes
- `--accent` sky #90D7ED — fonds de section alternés
- `--cta` ambre #E2A43C — **uniquement** boutons d'action primaire
- `--foreground` encre #16243D, `--background` #F4F6FA, `--border` #D9E0E8
- Typo : Archivo (600/700/800) titres, Inter (400/500) corps — chargées via `<link>` Google Fonts dans `__root.tsx` avec `display=swap` et `preconnect`.
- Pas de gradients, pas d'ombres lourdes, espacements généreux, coins légèrement arrondis (radius 8px).

## Architecture composants

```text
src/
  components/
    layout/
      Header.tsx          // sticky, logo + nav (Accueil, Formations, À propos, Contact)
      Footer.tsx          // mention déclaration d'activité + badges + liens légaux
    sections/
      Hero.tsx
      TrustBar.tsx
      TrainingFamilies.tsx
      FeaturedTrainings.tsx
      WhyProcessBTP.tsx
      SocialProof.tsx
      ProcessSteps.tsx
      FinalCTA.tsx
    ui/
      TrainingCard.tsx           // réutilisable
      TrainingDetailTemplate.tsx // template fiche (non monté dans une route encore)
      Badge.tsx                  // Qualiopi/RPSH/CPF
      Button.tsx                 // variants: primary (ambre), outline, ghost
      CalBookingEmbed.tsx        // chargement on-click uniquement
      ContactForm.tsx            // Web3Forms, clé en placeholder
  lib/
    seo.ts                       // helpers JSON-LD Organization / Person / Course
  routes/
    __root.tsx                   // shell + fonts + Plausible + JSON-LD Organization
    index.tsx                    // homepage
    formations.tsx               // catalogue
```

`Header` et `Footer` sont montés dans `__root.tsx` autour de `<Outlet />`, avec un seul `<main>` par page (dans chaque route).

## Détails techniques clés

**SEO & meta** — par route via `head()` :
- titres/descriptions FR uniques, OG title/description, `og:type` website, canonical relative sur les leaves.
- `lang="fr"` sur `<html>` (modif `__root.tsx`).
- JSON-LD `Organization` (avec mention Qualiopi + numéro de déclaration) dans `__root.tsx`, `Person` (le fondateur) sur `/` et plus tard `/a-propos`, `Course` dans `TrainingDetailTemplate`.

**Plausible** — script ajouté dans `head()` du root (`data-domain` en placeholder, cookieless, defer).

**Cal.com** — composant `CalBookingEmbed` qui affiche un bouton "Réserver un appel découverte"; au clic, charge dynamiquement `@calcom/embed-react` (ou injection script `cal.com/embed/embed.js`) puis ouvre la modale. Aucun cookie tant que l'utilisateur n'a pas cliqué. URL en placeholder.

**Web3Forms** — `ContactForm` POST vers `https://api.web3forms.com/submit`, champ `access_key` en placeholder `YOUR_WEB3FORMS_KEY`, honeypot anti-spam, validation côté client, message de succès/erreur. Formulaire utilisé dans la section Final CTA + à terme dans `/contact`.

**Accessibilité (WCAG AA)** :
- contraste tokens vérifiés (ambre sur cobalt OK, blanc sur cobalt OK),
- focus-visible visible sur tous les interactifs,
- nav clavier complète, skip-link "Aller au contenu",
- alt explicites, hiérarchie h1 unique par page,
- icônes décoratives `aria-hidden`, boutons icon-only avec `aria-label`.

**Performance / Lighthouse** :
- pas d'image lourde dans le hero pour l'instant (placeholder léger réservant l'espace via `aspect-ratio` pour éviter CLS),
- `preconnect` Google Fonts, `display=swap`,
- composants simples, pas de libs lourdes côté client,
- Cal.com lazy au clic, Plausible defer.

**Mention légale obligatoire (footer, verbatim)** :
> Déclaration d'activité enregistrée sous le numéro 32591329759 auprès du préfet de région Hauts-de-France. Cet enregistrement ne vaut pas agrément de l'État.

## Contenu sections homepage (résumé)

- **Hero** (fond cobalt, texte blanc) : H1 + sous-titre du brief, CTA ambre "Demander un devis" (scroll vers form ou `/contact` plus tard), CTA outline "Voir les formations" (→ `/formations`). Cadre photo formateur en placeholder ratio 4/5 avec mention "Photo à venir".
- **TrustBar** (bandeau clair) : 4 badges (Qualiopi, RPSH, CPF, "Organisme de formation depuis 2020").
- **Familles** : 3 cartes cliquables → ancres `/formations#execution`, etc.
- **Featured** : 3 cartes `TrainingCard` (Chef de chantier [CPF], Conducteur de travaux [CPF], Lecture de plan).
- **Pourquoi** : 6 différenciateurs en grille icônes + texte.
- **Social proof** : 3 cartes témoignages (placeholders nominatifs FR explicites) + ligne "Ils nous font confiance" avec 4–6 noms d'écoles partenaires en placeholder.
- **Process 3 étapes** : timeline horizontale Devis → Cadrage → Formation.
- **Final CTA** (cobalt) : CTA ambre + lien "ou réservez un appel découverte" (déclenche CalBookingEmbed) + email/téléphone en placeholder.

## Hors scope (cette itération)

- Fiches formation détaillées (`/formations/$slug`) — template prêt, route ajoutée plus tard avec votre contenu.
- Pages `À propos` et `Contact` dédiées.
- Vraies coordonnées, vraie photo, vraie clé Web3Forms, vraie URL Cal.com, vrai domaine Plausible — tous en placeholders identifiables.
- Backend (Lovable Cloud non activé : Web3Forms suffit).
