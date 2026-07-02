import { cn } from "../utils/cn";

/**
 * Wave motif divider — echoes the green/amber wave of the PFL logo mark.
 * `fill` should be the color of the section BELOW the wave (the wave "rises" into
 * the section above), rendered as a dual-tone amber+green sweep.
 */
export default function WaveDivider({
  className = "",
  flip = false,
  toneClass = "text-brand-surface",
}: {
  className?: string;
  flip?: boolean;
  toneClass?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 md:h-20"
      >
        {/* amber under-wave */}
        <path
          d="M0,55 C240,15 480,90 720,60 C960,30 1200,80 1440,45 L1440,90 L0,90 Z"
          fill="var(--color-brand-secondary)"
          opacity="0.35"
        />
        {/* green mid-wave */}
        <path
          d="M0,70 C260,35 520,95 760,68 C1000,42 1220,88 1440,60 L1440,90 L0,90 Z"
          fill="var(--color-brand-tertiary)"
          opacity="0.45"
        />
        {/* surface wave — matches next section background */}
        <path
          d="M0,80 C280,55 560,100 820,78 C1080,58 1260,92 1440,72 L1440,90 L0,90 Z"
          className={cn("fill-current", toneClass)}
        />
      </svg>
    </div>
  );
}
