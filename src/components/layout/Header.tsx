import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { CtaLink } from "@/components/brand/CtaButton";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/formations", label: "Formations" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="PROCESSBTP — Accueil">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#a-propos" className="text-foreground/80 transition-colors hover:text-primary">
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-foreground/80 transition-colors hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <CtaLink href="#contact" variant="amber">
            Demander un devis
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Navigation mobile" className="mx-auto max-w-7xl px-4 py-4">
            <ul className="space-y-3 text-base font-medium">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} onClick={() => setOpen(false)} className="block py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><a href="#a-propos" onClick={() => setOpen(false)} className="block py-1">À propos</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)} className="block py-1">Contact</a></li>
              <li className="pt-2">
                <CtaLink href="#contact" variant="amber" className="w-full">
                  Demander un devis
                </CtaLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
