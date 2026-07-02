import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import WaveDivider from "./WaveDivider";
import { SITE } from "../data/constants";

export default function Footer() {
  return (
    <footer className="relative bg-brand-ink text-text-inverse">
      <WaveDivider flip toneClass="text-brand-ink" className="absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)]" />
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 lg:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-surface p-1.5">
                <img src="/logo.png" alt="PFL Project logo" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-tight">PFL Project</p>
                <p className="text-xs text-text-inverse/60">An Initiative of Heritage Promotion</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-inverse/70">
              Plastic-pollution Free Lagos Project — a grassroots plastic pollution
              reduction innovation bridging government climate actions and community execution.
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/lagos-and-plastics", label: "Lagos and Plastics" },
                { to: "/partners", label: "PFL Project Partners" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-text-inverse/80 transition-colors hover:text-brand-secondary"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-text-inverse/80">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-tertiary" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-secondary"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand-tertiary" />
                  <span className="font-mono">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-secondary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-tertiary" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-text-inverse/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Heritage Promotion · Plastic-pollution Free Lagos Project</p>
          <p className="font-mono">Badagry · Lagos · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
