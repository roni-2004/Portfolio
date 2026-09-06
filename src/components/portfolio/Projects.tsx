import { FolderOpen } from "lucide-react";
import { caseStudies, projects } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Currently building — check back soon."
      intro="Deliberately empty for now. Write-ups land here as engagements and side builds mature."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass glass-hover h-full border-dashed p-6">
              <span className="glass grid h-11 w-11 place-items-center rounded-xl text-primary">
                <FolderOpen className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const FIELDS = [
  ["Situation", "situation"],
  ["Task", "task"],
  ["Action", "action"],
  ["Result", "result"],
] as const;

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Experience & Case Studies"
      title="Situation → Task → Action → Result."
      intro="Using the STAR framework to document learning and impact."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <Reveal key={i} delay={i * 110}>
            <article className="glass h-full border-dashed p-6 sm:p-8">
              <p className="eyebrow">{cs.label}</p>
              <dl className="mt-5 grid gap-4">
                {FIELDS.map(([label, key]) => (
                  <div key={key}>
                    <dt className="text-xs font-medium tracking-wide text-primary">{label}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{cs[key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
