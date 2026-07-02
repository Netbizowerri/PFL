# taste-skill (Leonxlnx/taste-skill) — Applied Reference

> Committed to the codebase per TCO handoff pattern. This document records how the
> `taste-skill` design-quality rules were applied to the PFL Project build so future
> AI agent sessions maintain visual continuity.

## Purpose

`taste-skill` governs bespoke visual execution and prevents generic/templated AI output.
It enforces: distinct brand-derived palettes, editorial typography pairing, purposeful
motion choreography, and consistent iconography.

## Anti-Pattern Checklist (enforced in this build)

- ❌ No default Tailwind blues/grays as brand colors → ✅ logo-derived red/amber/green on warm cream (`--color-brand-*` tokens only; no raw hex in components).
  - Client-locked values (v1.1): primary red `#E04A3B`, accent green `#577F38` — set once in `src/index.css` `@theme`, never overridden in components.
- ❌ No flat hard-rectangle cards → ✅ every card uses the `.glass` recipe (backdrop-blur-xl, `bg-brand-surface/60`, hairline `border-white/40`, layered soft shadows, `rounded-2xl/3xl`).
- ❌ No single-font builds → ✅ Fraunces (display serif) + Plus Jakarta Sans (body) + Geist Mono (data callouts).
- ❌ No decorative motion for its own sake → ✅ Framer Motion used for: route transitions (AnimatePresence fade/slide 150–250ms), scroll-stagger reveals, spring nav tray (`type: spring, damping: 26`), success checkmark scale-in.
- ❌ No mixed icon sets → ✅ Lucide React exclusively.
- ❌ No motion that ignores accessibility → ✅ `prefers-reduced-motion` respected across particles, transitions and reveals.

## Brand-Specific Choreography Decisions

1. **Ambient particle field** — plastic-fragment/leaf particles rise slowly (30–60s cycles, 8–18% opacity), hero + CTA zones only, `pointer-events: none`, capped at ~16 mobile / ~36 desktop, frozen under reduced motion.
2. **Wave motif** — the logo's green/amber wave recurs as SVG section dividers (`WaveDivider`), reinforcing brand continuity.
3. **Logo context rule** — the logo mark always sits on a cream card container, never directly on dark/busy backgrounds.
4. **Stat typography** — tonnage figures and data callouts set in Geist Mono with amber accents.
