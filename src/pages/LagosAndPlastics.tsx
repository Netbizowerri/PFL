import { Link } from "react-router-dom";
import {
  Ban,
  Recycle,
  ShieldCheck,
  Handshake,
  CalendarCheck,
  Lightbulb,
  ArrowRight,
  Scale,
} from "lucide-react";
import SEO from "../components/SEO";
import ParticleField from "../components/ParticleField";
import WaveDivider from "../components/WaveDivider";
import Reveal from "../components/Reveal";
import { useMediaQuery } from "../utils/useMediaQuery";
import { PAGES } from "../utils/seo";

const POLICIES = [
  {
    icon: Ban,
    accent: "text-brand-primary bg-brand-primary/10",
    title: "The Polystyrene Ban",
    body: "The distribution and use of styrofoam food packs and disposable polystyrene cups are strictly prohibited.",
  },
  {
    icon: Recycle,
    accent: "text-brand-secondary bg-brand-secondary/15",
    title: "Single-Use Plastics (SUPs) Phase-Out",
    body: "The ban targets items like plastic straws, PET water bottles (without proper recycling buy-back protocols), and thin non-biodegradable plastics.",
  },
  {
    icon: ShieldCheck,
    accent: "text-brand-tertiary bg-brand-tertiary/10",
    title: "Regulatory Enforcement",
    body: "Restaurants, markets, and food businesses are regularly monitored to ensure compliance, with non-compliant premises facing fines or temporary closure.",
  },
];

const INFRA = [
  {
    icon: Handshake,
    accent: "text-brand-tertiary bg-brand-tertiary/10",
    title: "LAWMA & FBRA Initiatives",
    body: "The Lagos Waste Management Authority (LAWMA) partners with the Food and Beverage Recycling Alliance (FBRA) to recover and recycle post-consumer packaging across the state.",
  },
  {
    icon: CalendarCheck,
    accent: "text-brand-primary bg-brand-primary/10",
    title: "Re-introduction of Monthly Sanitation",
    body: "Lagos has reinstated the monthly environmental sanitation exercise (held on Saturdays), mobilising residents to clear drainages and public spaces.",
  },
  {
    icon: Lightbulb,
    accent: "text-brand-secondary bg-brand-secondary/15",
    title: "Local Innovation Grants",
    body: "Private and community-led groups frequently award grants to local startups that turn waste into useful, eco-friendly products.",
  },
];

export default function LagosAndPlastics() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <SEO
        title={PAGES.lagosAndPlastics.title}
        description={PAGES.lagosAndPlastics.description}
        path={PAGES.lagosAndPlastics.path}
        ogTitle={PAGES.lagosAndPlastics.ogTitle}
        ogDescription={PAGES.lagosAndPlastics.ogDescription}
        keywords={PAGES.lagosAndPlastics.keywords}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 15% 15%, color-mix(in srgb, var(--color-brand-tertiary) 12%, transparent), transparent), radial-gradient(45% 45% at 90% 80%, color-mix(in srgb, var(--color-brand-secondary) 12%, transparent), transparent)",
          }}
        />
        <ParticleField count={isMobile ? 14 : 30} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 md:pt-44 lg:grid-cols-[1fr_0.9fr] lg:pb-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-muted bg-brand-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-tertiary backdrop-blur">
                <Scale className="h-3.5 w-3.5" /> Policy · Infrastructure · Data
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-base sm:text-5xl lg:text-6xl">
                Lagos <span className="text-brand-tertiary">and Plastics</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft">
                Lagos is making aggressive strides toward becoming a plastic-free
                city, tackling the 870,000 tonnes of plastic waste it generates
                annually through bold bans, circular-economy infrastructure, and
                community mobilisation.
              </p>
            </Reveal>

            {/* Stat callout */}
            <Reveal delay={0.24}>
              <div className="glass mt-8 inline-flex flex-col gap-1 rounded-3xl border-l-4 border-l-brand-secondary px-7 py-5">
                <span className="font-mono text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
                  870,000 <span className="text-lg text-text-soft">tonnes/year</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-text-soft">
                  Plastic waste generated in Lagos annually
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div aria-hidden="true" className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-brand-tertiary/15" />
              <img
                src="https://i.ibb.co/sd9vvLbv/PFL-4.jpg"
                alt="PFL Project — Plastic-pollution Free Lagos community action and environmental impact"
                width={1200}
                height={627}
                loading="eager"
                className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-brand-ink/20"
              />
              <div className="glass absolute -bottom-5 left-5 right-5 rounded-2xl px-5 py-3.5">
                <p className="text-sm font-semibold text-text-base">
                  Plastic waste clogs canals — canals cause floods.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <WaveDivider toneClass="text-brand-surfaceAlt" />
      </section>

      {/* ================= POLICIES & BANS ================= */}
      <section className="bg-brand-surfaceAlt py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
              Regulation
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-base sm:text-4xl">
              Key Anti-Plastic Policies &amp; Bans
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-soft">
              To stop waste from clogging canals and causing floods, the Lagos State
              Government enacted several critical regulations:
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {POLICIES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={0.08 * i}>
                  <div className="glass h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                    <span className={`inline-grid place-items-center rounded-2xl p-3.5 ${p.accent}`}>
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-text-base">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-soft">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Market context image */}
          <Reveal delay={0.1} className="mt-12">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://i.ibb.co/Jwnq4kQC/PFL-5.jpg"
                alt="PFL Project — Plastic-pollution Free Lagos community and environmental action"
                width={1200}
                height={627}
                loading="lazy"
                className="aspect-[21/9] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent"
              />
              <p className="absolute bottom-5 left-5 right-5 max-w-lg text-sm font-semibold leading-snug text-text-inverse sm:text-base">
                Markets, restaurants and food businesses across Lagos are at the heart
                of the polystyrene ban and SUP phase-out.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="bg-brand-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-tertiary">
              Circular Economy
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-base sm:text-4xl">
              Recycling &amp; Waste Management Infrastructure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-soft">
              The city operates a circular economy model driven by local partnerships
              and state agencies:
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INFRA.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={0.08 * i}>
                  <div className="glass h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                    <span className={`inline-grid place-items-center rounded-2xl p-3.5 ${c.accent}`}>
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-text-base">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-soft">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Supporting imagery */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: "https://i.ibb.co/qL2w9Q8P/PFL-6.jpg", alt: "PFL Project — community engagement in plastic waste collection and recycling initiatives" },
              { src: "https://i.ibb.co/Cp1J5dDH/PFL-7.jpg", alt: "PFL Project — grassroots plastic pollution reduction efforts in Lagos communities" },
              { src: "https://i.ibb.co/sd0PRXnw/PFL-8.jpg", alt: "PFL Project — environmental action and waste management infrastructure" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={0.06 * i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={627}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg shadow-brand-ink/10 transition-transform duration-500 hover:scale-[1.02]"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-14 text-center">
            <Link
              to="/partners"
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-brand-tertiary px-8 text-[15px] font-bold text-text-inverse shadow-xl shadow-brand-tertiary/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Meet the PFL Project Partners <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
