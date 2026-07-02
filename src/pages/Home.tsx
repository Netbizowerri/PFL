import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Droplets, Languages, Landmark } from "lucide-react";
import SEO from "../components/SEO";
import ParticleField from "../components/ParticleField";
import WaveDivider from "../components/WaveDivider";
import Reveal from "../components/Reveal";
import { IMAGES } from "../data/images";
import { useMediaQuery } from "../utils/useMediaQuery";
import { PAGES } from "../utils/seo";

const MECHANISM = [
  {
    image: IMAGES.mechanismTraining,
    step: "01",
    stepClass: "bg-brand-primary text-text-inverse",
    title: "Training",
    body: "Elected executives of Community Development Associations (CDAs) are trained on an online platform — in both Yoruba and English languages.",
    tag: Languages,
    tagLabel: "Yoruba · English",
  },
  {
    image: IMAGES.mechanismCurriculum,
    step: "02",
    stepClass: "bg-brand-secondary text-brand-ink",
    title: "Curriculum",
    body: "A focused programme titled “Plastic Waste Management and Additional CDA IGR” — equipping CDAs with new Internally Generated Revenue streams.",
    tag: Landmark,
    tagLabel: "CDA IGR",
  },
  {
    image: IMAGES.pflInfrastructure,
    step: "03",
    stepClass: "bg-brand-tertiary text-text-inverse",
    title: "Infrastructure",
    body: "The end goal: establishing a plastic shredder and a plastic waste bank in every CDA across Lagos State.",
    tag: Droplets,
    tagLabel: "Every CDA",
  },
];

export default function Home() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <SEO
        title={PAGES.home.title}
        description={PAGES.home.description}
        path={PAGES.home.path}
        ogTitle={PAGES.home.ogTitle}
        ogDescription={PAGES.home.ogDescription}
        keywords={PAGES.home.keywords}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, color-mix(in srgb, var(--color-brand-secondary) 14%, transparent), transparent), radial-gradient(50% 45% at 10% 90%, color-mix(in srgb, var(--color-brand-tertiary) 12%, transparent), transparent)",
          }}
        />
        <ParticleField count={isMobile ? 16 : 36} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-muted bg-brand-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-tertiary backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                An Initiative of Heritage Promotion
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-base sm:text-5xl lg:text-6xl">
                Plastic{" "}
                <span className="text-brand-tertiary">- Pollution Free Lagos</span>{" "}
                Project
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft">
                Flooding in Lagos is less a natural climate problem — and more an
                indiscipline problem. PFL Project takes plastic-pollution action from
                government policy to grassroots execution, one CDA at a time.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-7 text-[15px] font-bold text-text-inverse shadow-xl shadow-brand-primary/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Get Involved <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/lagos-and-plastics"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-brand-tertiary/40 bg-brand-surface/60 px-7 text-[15px] font-bold text-brand-tertiary backdrop-blur transition-colors hover:border-brand-tertiary hover:bg-brand-tertiary/5"
                >
                  See the Lagos Plastic Problem
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Logo mark — glass mounted, always on cream context */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-brand-secondary/15 blur-2xl" />
            <div className="glass relative rounded-[2rem] p-8">
              <motion.img
                src="/logo.png"
                alt="PFL Project — bottle and wave logo mark"
                width={640}
                height={640}
                className="mx-auto w-full max-w-[280px] rounded-2xl object-contain"
                animate={reduced ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-surfaceAlt/80 px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-soft">
                  From plastic waste
                </span>
                <ArrowRight className="h-4 w-4 text-brand-secondary" />
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-tertiary">
                  to renewal
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        <WaveDivider toneClass="text-brand-surfaceAlt" />
      </section>

      {/* ================= THE PROBLEM ================= */}
      <section className="bg-brand-surfaceAlt py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div aria-hidden="true" className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-brand-primary/15" />
              <div aria-hidden="true" className="absolute -right-3 -bottom-3 h-20 w-20 rounded-3xl bg-brand-tertiary/15" />
              <div className="glass relative overflow-hidden rounded-3xl p-3 sm:p-4">
                <img
                  src="https://i.ibb.co/LzycshGW/Gemini-Generated-Image-kkyafckkyafckkya-1.png"
                  alt="Illustration of a Lagos canal blocked with plastic waste, causing flooding on adjacent streets"
                  loading="lazy"
                  className="block h-auto w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
              The Problem
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-base sm:text-4xl">
              Flooding is an indiscipline problem
            </h2>
            <div className="glass mt-6 rounded-3xl p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-text-base sm:text-base">
                The problem of flooding in Lagos State is less of a natural climate
                problem but a more of an indiscipline problem by many residents of
                Lagos State — indiscriminate dumping of refuse, dominated by plastics,
                into drainages and canals blocks the free flow of water and turns
                rainfall into flood.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= BRIDGING THE GAP ================= */}
      <section className="relative bg-brand-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-tertiary">
              Bridging the Gap
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-base sm:text-4xl">
              From state policy to street-level action
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5">
            <Reveal delay={0.05}>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-[15px] leading-relaxed text-text-base sm:text-base">
                  Governments and civil societies in Lagos State has done more than
                  enough on plastic-pollution climate actions — bans, regulations,
                  sanitation exercises and recycling partnerships. What has been
                  missing is a bridge that carries these actions down to the
                  grassroots, where the waste is actually generated.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="glass rounded-3xl border-l-4 border-l-brand-tertiary p-6 sm:p-8">
                <p className="text-[15px] leading-relaxed text-text-base sm:text-base">
                  Plastic-pollution Free Lagos Project (PFL Project) is a grassroots
                  plastic pollution reduction innovation of Heritage Promotion that
                  bridges the gap between Lagos State government plastic-pollution
                  climate actions and grassroots-level community execution — by
                  training elected executives of Community Development Associations
                  (CDAs), in Yoruba and English, on Plastic Waste Management and
                  Additional CDA IGR, towards establishing a plastic shredder and
                  plastic waste bank in every CDA in Lagos State.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mechanism cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {MECHANISM.map((m, i) => {
              const Tag = m.tag;
              return (
                <Reveal key={m.title} delay={0.08 * i}>
                  <div className="glass group flex h-full flex-col overflow-hidden rounded-3xl p-0 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={m.image.src}
                        alt={m.image.alt}
                        width={1200}
                        height={627}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-brand-ink/10 to-transparent"
                      />
                      <span
                        className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider ${m.stepClass}`}
                      >
                        STEP {m.step}
                      </span>
                      <h3 className="absolute bottom-4 left-4 right-4 font-display text-2xl font-bold leading-tight text-text-inverse drop-shadow-sm">
                        {m.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-sm leading-relaxed text-text-soft">
                        {m.body}
                      </p>
                      <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-surfaceAlt px-3 py-1.5 font-mono text-[11px] font-semibold text-text-soft">
                        <Tag className="h-3.5 w-3.5" /> {m.tagLabel}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Community imagery strip */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[IMAGES.volunteersCollecting, IMAGES.sortingRecyclables, IMAGES.lagosMarket].map(
              (img, i) => (
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
              )
            )}
          </div>

          {/* PFL imagery strip */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { src: "https://i.ibb.co/G4rGVx4M/PFL-3.jpg", alt: "PFL Project community engagement and plastic waste collection initiative" },
              { src: "https://i.ibb.co/S4mQxBKH/PFL-2.jpg", alt: "PFL Project team working with local communities on plastic pollution reduction" },
              { src: "https://i.ibb.co/Dg631Ssz/PFL-1.jpg", alt: "PFL Project grassroots plastic waste management and recycling efforts" },
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
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="relative overflow-hidden bg-brand-ink">
        <WaveDivider flip toneClass="text-brand-surface" className="relative z-10" />
        <ParticleField count={isMobile ? 12 : 24} />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-text-inverse sm:text-5xl">
              Join the movement to free Lagos{" "}
              <span className="text-brand-secondary">from plastic pollution.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-inverse/70">
              Whether you lead a CDA, represent a partner institution, or simply want
              a cleaner Lagos — the bridge starts with you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-9 inline-flex min-h-[52px] items-center gap-2 rounded-2xl bg-brand-primary px-9 py-4 text-base font-bold text-text-inverse shadow-2xl shadow-brand-primary/40 transition-transform hover:scale-[1.04] active:scale-[0.98]"
            >
              Contact PFL Project <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
