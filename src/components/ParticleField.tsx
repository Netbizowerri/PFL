import { useMemo } from "react";

type Particle = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  kind: "bubble" | "leaf" | "fragment";
  color: string;
};

const COLORS = [
  "var(--color-brand-secondary)",
  "var(--color-brand-tertiary)",
  "var(--color-brand-primary)",
];

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Ambient particle field — plastic fragments transforming into leaves/bubbles
 * as they rise. Hero & CTA zones only. Non-interactive, reduced-motion aware
 * (handled in index.css via .pfl-particle).
 */
export default function ParticleField({
  count = 24,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const particles = useMemo<Particle[]>(() => {
    const rand = mulberry32(42);
    const kinds: Particle["kind"][] = ["bubble", "leaf", "fragment"];
    return Array.from({ length: count }, (_, i) => ({
      left: rand() * 100,
      size: 6 + rand() * 14,
      delay: -rand() * 60,
      duration: 30 + rand() * 30,
      opacity: 0.08 + rand() * 0.1,
      kind: kinds[i % 3],
      color: COLORS[Math.floor(rand() * COLORS.length)],
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="pfl-particle absolute bottom-[-5%] block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `pfl-rise ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform",
          }}
        >
          {p.kind === "bubble" ? (
            <span
              className="block h-full w-full rounded-full border-2"
              style={{ borderColor: p.color }}
            />
          ) : p.kind === "leaf" ? (
            <span
              className="block h-full w-full"
              style={{
                backgroundColor: p.color,
                borderRadius: "80% 0 80% 0",
              }}
            />
          ) : (
            <span
              className="block h-full w-full rounded-sm"
              style={{ backgroundColor: p.color, transform: "rotate(12deg)" }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
