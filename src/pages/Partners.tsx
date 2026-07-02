import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  Building2,
  Users,
  Award,
  Network,
  HomeIcon,
  ArrowRight,
  Handshake,
} from "lucide-react";
import SEO from "../components/SEO";
import WaveDivider from "../components/WaveDivider";
import Reveal from "../components/Reveal";
import { IMAGES } from "../data/images";
import { PAGES } from "../utils/seo";

const PARTNERS = [
  {
    icon: Landmark,
    accent: "text-brand-tertiary bg-brand-tertiary/10 ring-brand-tertiary/20",
    name: "Ministry of Environment and Water Resources, Lagos State",
    tier: "State Government",
  },
  {
    icon: Building2,
    accent: "text-brand-primary bg-brand-primary/10 ring-brand-primary/20",
    name: "Ministry of Local Government, Chieftaincy Affairs, and Rural Development, Lagos State",
    tier: "State Government",
  },
  {
    icon: Award,
    accent: "text-brand-secondary bg-brand-secondary/15 ring-brand-secondary/25",
    name: "Lagos State Community Development Advisory Council – LSCDAC",
    tier: "Advisory Council",
  },
  {
    icon: Network,
    accent: "text-brand-primary bg-brand-primary/10 ring-brand-primary/20",
    name: "Committee of 57 Council Chairmen in Lagos",
    tier: "Council Leadership",
  },
  {
    icon: Users,
    accent: "text-brand-tertiary bg-brand-tertiary/10 ring-brand-tertiary/20",
    name: "Community Development Committees in Lagos State",
    tier: "Community",
  },
  {
    icon: HomeIcon,
    accent: "text-brand-secondary bg-brand-secondary/15 ring-brand-secondary/25",
    name: "Community Development Associations – CDA in Lagos State",
    tier: "Community",
  },
];

export default function Partners() {
  const reduced = useReducedMotion();

  return (
    <>
      <SEO
        title={PAGES.partners.title}
        description={PAGES.partners.description}
        path={PAGES.partners.path}
        ogTitle={PAGES.partners.ogTitle}
        ogDescription={PAGES.partners.ogDescription}
        keywords={PAGES.partners.keywords}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 45% at 85% 15%, color-mix(in srgb, var(--color-brand-secondary) 13%, transparent), transparent), radial-gradient(45% 40% at 8% 75%, color-mix(in srgb, var(--color-brand-tertiary) 10%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-32 text-center sm:px-6 md:pt-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-muted bg-brand-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-tertiary backdrop-blur">
              <Handshake className="h-3.5 w-3.5" /> Institutional Collaboration
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-text-base sm:text-5xl lg:text-6xl">
              PFL Project <span className="text-brand-tertiary">Partners</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-soft">
              Below is a list of identified partners to PFL Project initiatives:
            </p>
          </Reveal>
        </div>
        <WaveDivider toneClass="text-brand-surfaceAlt" />
      </section>

      {/* ================= PARTNER GRID ================= */}
      <section className="bg-brand-surfaceAlt py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={reduced ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="glass group flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                    <span
                      className={`inline-grid h-14 w-14 place-items-center rounded-2xl ring-1 ${p.accent}`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-text-base">
                      {p.name}
                    </h3>
                    <span className="mt-auto pt-5">
                      <span className="inline-flex rounded-full bg-brand-surfaceAlt px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-soft">
                        {p.tier}
                      </span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust strip */}
          <Reveal delay={0.1} className="mt-14">
            <div className="glass overflow-hidden rounded-3xl md:grid md:grid-cols-2">
              <img
                src={IMAGES.lagosMarketCrowd.src}
                alt={IMAGES.lagosMarketCrowd.alt}
                width={1200}
                height={627}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-full"
              />
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-tertiary">
                  One Bridge, Three Levels
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-text-base sm:text-3xl">
                  Collaboration between government, council, and community
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-soft sm:text-base">
                  From Lagos State ministries through council chairmen to the CDAs
                  where residents live — the PFL Project partner network spans every
                  level needed to turn plastic-pollution policy into everyday practice.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-2xl bg-brand-primary px-7 text-[15px] font-bold text-text-inverse shadow-xl shadow-brand-primary/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Partner With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
