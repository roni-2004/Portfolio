import { Building2 } from "lucide-react";
import { timeline } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Work Timeline" title="The path so far.">
      <ol className="relative ml-1 grid gap-8 border-l border-border pl-7 sm:pl-10">
        {timeline.map((entry, i) => (
          <Reveal as="li" key={entry.title} delay={i * 100} className="relative">
            <span
              className={`absolute top-6 -left-[2.05rem] grid h-4 w-4 place-items-center rounded-full sm:-left-[2.8rem] ${
                entry.current ? "bg-primary animate-pulse-ring" : "bg-border"
              }`}
            />
            <article className="glass glass-hover p-6">
                            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <span className="glass grid h-12 w-12 shrink-0 place-items-center rounded-full text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="eyebrow">{entry.date}</p>
                        {entry.current && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-medium text-primary-foreground">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-base font-semibold tracking-tight sm:text-lg">{entry.title}</h3>
                      <p className="text-sm text-primary">{entry.company}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                    </div>

                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={entry.company}
                        className="hidden h-28 w-28 shrink-0 self-stretch rounded-xl object-cover shadow-md ring-1 ring-border sm:block"
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
