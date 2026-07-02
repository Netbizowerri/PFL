# agent-skills (vercel-labs/agent-skills) — Applied Reference

> Committed to the codebase per TCO handoff pattern. This document records the project
> scaffolding and convention standards applied from `vercel-labs/agent-skills` so future
> AI agent sessions keep the codebase classic, maintainable, and handoff-ready.

## Project Structure Convention

```
src/
  components/    → shared UI (Navbar, Footer, ParticleField, WaveDivider, Reveal, ScrollToTop)
  pages/         → one file per route (Home, LagosAndPlastics, Partners, Contact)
  data/          → static content & image manifests (images.ts, partners in-page)
  utils/         → helpers (cn.ts — clsx + tailwind-merge)
  App.tsx        → router shell (BrowserRouter → layout → AnimatePresence routes)
  main.tsx       → entry
  index.css      → Tailwind v4 @theme token system + base styles
skills/          → committed skill reference docs (this folder)
public/          → static assets (logo.png)
```

## Standards Enforced

- **TypeScript strict** — all components typed; no `any`.
- **Design tokens only** — colors flow from `@theme` CSS variables (`brand-*`, `text-*`); components never hardcode hex.
- **Routing** — React Router v6+ with `ScrollToTop` on every route change; SPA rewrite documented for cPanel (`public/.htaccess`).
- **Forms** — React 19 `useActionState` for pending/success/error; Formspree endpoint + Privyr webhook dual-submit; webhook URL via `VITE_PRIVYR_WEBHOOK_URL` env placeholder.
- **Performance** — lazy-loaded images with explicit dimensions, capped particle counts, no heavy particle libraries.
- **Accessibility** — semantic landmarks (`nav/main/footer`), 44px+ touch targets, `focus-visible` rings in brand-primary, ≥4.5:1 body contrast on cream.

## Content Rule

All page copy is verbatim/near-verbatim from the client brief. No invented statistics,
quotes, partners, or claims. Any future content changes must come from the client.
