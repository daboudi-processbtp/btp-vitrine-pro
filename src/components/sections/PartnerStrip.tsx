import esct from "@/assets/partners/esct.png.asset.json";
import iae from "@/assets/partners/iae-lille.jpg.asset.json";
import iut from "@/assets/partners/iut-bethune.png.asset.json";
import polytech from "@/assets/partners/polytech-lille.png.asset.json";
import laSolive from "@/assets/partners/la-solive.png.asset.json";
import leMoniteur from "@/assets/partners/le-moniteur.png.asset.json";

type Logo = { name: string; src: string; alt: string };

export const schoolLogos: Logo[] = [
  { name: "ESCT", src: esct.url, alt: "ESCT — École Supérieure de Conduite de Travaux" },
  { name: "IAE Lille", src: iae.url, alt: "IAE Lille — University School of Management" },
  { name: "IUT de Béthune", src: iut.url, alt: "IUT de Béthune" },
  { name: "Polytech Lille", src: polytech.url, alt: "Polytech Lille" },
];

export const trustLogos: Logo[] = [
  { name: "La Solive", src: laSolive.url, alt: "La Solive — organisme de formation BTP" },
  { name: "Le Moniteur", src: leMoniteur.url, alt: "Le Moniteur des Travaux Publics et du Bâtiment" },
];

export function PartnerStrip({
  title,
  logos,
  className = "",
}: {
  title: string;
  logos: Logo[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {logos.map((logo) => (
          <li key={logo.name} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-12 w-auto max-w-[160px] object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}