import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { TrustBadge } from "@/components/brand/Badge";
import { ORG_LEGAL } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/80">
              Organisme de formation BTP, certifié Qualiopi. Du geste technique au pilotage de projet.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Qualiopi</span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">RPSH</span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">CPF</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><Link to="/" className="hover:text-white hover:underline">Accueil</Link></li>
              <li><Link to="/formations" className="hover:text-white hover:underline">Formations</Link></li>
              <li><a href="#a-propos" className="hover:text-white hover:underline">À propos</a></li>
              <li><a href="#contact" className="hover:text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Mentions légales</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href="#mentions" className="hover:text-white hover:underline">Mentions légales</a></li>
              <li><a href="#cgv" className="hover:text-white hover:underline">CGV</a></li>
              <li><a href="#confidentialite" className="hover:text-white hover:underline">Politique de confidentialité</a></li>
              <li><a href="#accessibilite" className="hover:text-white hover:underline">Accessibilité &amp; handicap</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-white/75">{ORG_LEGAL}</p>
          <p className="mt-3 text-xs text-white/60">
            © {new Date().getFullYear()} PROCESSBTP — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
