import { ArrowDown, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { useLightMode } from "./theme";

export function Hero() {
  const lightMode = useLightMode(); // reduced-motion / low-power / small screens
  const imgRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState("rotateX(0deg) rotateY(0deg)");

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (lightMode) return; // skip tilt on reduced-motion / weak devices
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt(`rotateX(${y * -8}deg) rotateY(${x * 10}deg)`);
  }

  function handleLeave() {
    setTilt("rotateX(0deg) rotateY(0deg)");
  }

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8"
    >
      <Reveal>
        <div className="glass mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.78rem] text-muted-foreground">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute h-2 w-2 rounded-full bg-primary animate-pulse-ring" />
          </span>
          {profile.statusPill}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="mt-8 text-center text-4xl leading-[1.05] font-semibold tracking-tight uppercase text-balance sm:text-6xl md:text-7xl">
          {profile.role}.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-3 text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {profile.roleSince}
        </p>
      </Reveal>

            <div className="mt-14 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-14">
        {/* Name — left column */}
        <Reveal delay={220} className="text-center md:w-48 md:text-right">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {profile.name.split(" ")[0]}
          </p>
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.name.split(" ").slice(1).join(" ").toUpperCase()}
          </p>
        </Reveal>

        {/* Photo — center */}
        <Reveal delay={280} className="flex justify-center">
          <div
            ref={imgRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative h-72 w-56 sm:h-80 sm:w-64 shrink-0"
            style={{ perspective: "800px" }}
          >
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={profile.photo}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full translate-x-4 translate-y-4 rotate-3 scale-95 rounded-2xl object-cover opacity-40 blur-md grayscale"
            />
            <div className="glass absolute -inset-2 -z-10 rounded-2xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative h-full w-full rounded-2xl object-cover shadow-xl transition-transform duration-300 ease-out will-change-transform"
              style={{ transform: tilt, transformStyle: "preserve-3d" }}
            />
          </div>
        </Reveal>

        {/* About Me — right column */}
        <Reveal delay={340} className="max-w-[220px] text-center md:text-left">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
            About
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {profile.aboutMe}
          </p>
        </Reveal>
      </div>

      <Reveal delay={420}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
          
            <a href="#timeline"
            className="glass glass-hover inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            View My Journey <ArrowDown className="h-4 w-4" />
          </a>
          
            <a href="#contact"
            className="glass glass-hover inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 text-sm font-medium text-foreground"
          >
            Get in Touch <Mail className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}