import { Link } from "react-router-dom";
import { ArrowRight, Frown } from "lucide-react";
import SEO from "../components/SEO";
import WaveDivider from "../components/WaveDivider";
import Reveal from "../components/Reveal";
import { PAGES } from "../utils/seo";

export default function NotFound() {
  return (
    <>
      <SEO
        title={PAGES.notFound.title}
        description={PAGES.notFound.description}
        path={PAGES.notFound.path}
        keywords={PAGES.notFound.keywords}
        noindex
      />
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 45% at 12% 20%, color-mix(in srgb, var(--color-brand-primary) 9%, transparent), transparent), radial-gradient(45% 40% at 88% 70%, color-mix(in srgb, var(--color-brand-tertiary) 11%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 text-center sm:px-6 md:pt-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-muted bg-brand-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-primary backdrop-blur">
              <Frown className="h-3.5 w-3.5" /> Page not found
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] tracking-tight text-text-base sm:text-7xl lg:text-8xl">
              404
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-text-soft">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              to="/"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-brand-primary px-7 text-[15px] font-bold text-text-inverse shadow-xl shadow-brand-primary/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Back to Home <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <WaveDivider toneClass="text-brand-surfaceAlt" />
      </section>
    </>
  );
}
