import { perspectivesPOV } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function PointOfView() {
  return (
    <Section
      id="pov"
      eyebrow="GenAI × SAP"
      title="A point of view, written down."
      intro="Where I think generative AI actually earns its place inside enterprise processes."
    >
      <div className="max-w-3xl">
        {perspectivesPOV.map((p, i) => (
          <Reveal key={p.title} delay={i * 110}>
            <div className="py-8">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{p.body}</p>
            </div>
            {i < perspectivesPOV.length - 1 && (
              <div className="glass h-px w-full !rounded-none border-0 !shadow-none" />
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
