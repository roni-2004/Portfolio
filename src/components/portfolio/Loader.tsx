import { profile } from "@/lib/portfolio-data";

/**
 * Pure-CSS intro veil. No JS timers, so it always clears even if hydration
 * is slow — see .loader-veil in styles.css.
 */
export function Loader() {
  return (
    <div className="loader-veil fixed inset-0 z-100 grid place-items-center bg-background">
      <div className="glass grid h-24 w-24 place-items-center rounded-full animate-pulse-ring">
        <span className="text-lg font-semibold tracking-[0.2em] text-foreground">
          {profile.initials}
        </span>
      </div>
    </div>
  );
}
