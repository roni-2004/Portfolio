import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      const el2 = ref.current;
      if (!el2) return;
      const r = el2.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) show();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) show();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);


  return (
    <As
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0",
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px]",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}>
      {(eyebrow || title) && (
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
