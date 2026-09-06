import { Award, ExternalLink, Target } from "lucide-react";
import { certsEarned, certsPlanned } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Earned, and what's next."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Earned</p>
          </Reveal>
          <div className="grid gap-4">
            {certsEarned.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                  <article className="glass glass-hover grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 p-5">
                  <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold tracking-tight">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                  {c.credentialUrl && (
                    
                      <a href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View credential for ${c.name}`}
                      className="glass glass-hover grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">In progress / roadmap</p>
          </Reveal>
          <div className="grid gap-4">
            {certsPlanned.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <article className="glass grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 border-dashed p-5 opacity-70">
                  <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-muted-foreground">
                    <Target className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold tracking-tight">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
