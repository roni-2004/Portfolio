import { useEffect, useState } from "react";
import { useLightMode } from "./theme";

const BOKEH = [
  { left: "12%", top: "18%", size: 120, delay: 0, dur: 46 },
  { left: "78%", top: "26%", size: 80, delay: 6, dur: 52 },
  { left: "62%", top: "68%", size: 160, delay: 3, dur: 60 },
  { left: "26%", top: "76%", size: 60, delay: 9, dur: 44 },
  { left: "48%", top: "40%", size: 100, delay: 12, dur: 58 },
  { left: "88%", top: "82%", size: 70, delay: 2, dur: 50 },
];

export function Background() {
  const lightDevice = useLightMode();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (lightDevice) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [lightDevice]);

  const bokeh = lightDevice ? BOKEH.slice(0, 2) : BOKEH;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 left-[-10%] h-[70vh] w-[70vh] rounded-full blur-[120px] animate-drift"
        style={{ background: "var(--glow-a)", transform: `translateY(${scrollY * -0.05}px)` }}
      />
      <div
        className="absolute top-[35%] right-[-15%] h-[65vh] w-[65vh] rounded-full blur-[130px] animate-drift"
        style={{
          background: "var(--glow-b)",
          animationDelay: "-12s",
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[55vh] w-[55vh] rounded-full blur-[140px] animate-drift"
        style={{
          background: "var(--glow-c)",
          animationDelay: "-24s",
          transform: `translateY(${scrollY * -0.03}px)`,
        }}
      />

      <div className="absolute inset-0 hidden dark:block" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
        {bokeh.map((b, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
              animationDelay: `-${b.delay}s`,
              animationDuration: `${b.dur}s`,
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(160,180,255,0.12) 55%, transparent 70%)",
              filter: "blur(14px)",
              opacity: 0.35,
            }}
          />
        ))}
      </div>

      <div className="grain-overlay absolute inset-0 mix-blend-overlay" />
    </div>
  );
}
