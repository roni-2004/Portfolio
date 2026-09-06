import { profile } from "@/lib/portfolio-data";

/**
 * Pure-CSS intro veil. No JS timers, so it always clears even if hydration
 * is slow — see .loader-veil in styles.css.
 */
export function Loader() {
  return (
    <div className="loader-veil fixed inset-0 z-100 grid place-items-center bg-background">
      <div className="relative grid h-28 w-28 place-items-center">
        {/* expanding pulse rings, staggered */}
        <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping [animation-duration:2.2s]" />
        <span className="absolute inset-2 rounded-full border border-primary/30 animate-ping [animation-duration:2.2s] [animation-delay:0.4s]" />
        <span className="absolute inset-4 rounded-full border border-primary/20 animate-ping [animation-duration:2.2s] [animation-delay:0.8s]" />

        {/* slow rotating gradient ring */}
        <span
          className="absolute inset-0 rounded-full animate-spin [animation-duration:3s]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, transparent 270deg, hsl(var(--primary)) 360deg)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
          }}
        />

        {/* center glass core */}
        <div className="glass relative grid h-14 w-14 place-items-center rounded-full">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
