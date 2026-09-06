import { emergingPerspectives, quote } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Perspectives() {
  return (
    <Section
      id="perspectives"
      eyebrow="Emerging Perspectives"
      title="Thinking in progress."
      intro="Ideas, observations, and lessons that I'm likely to revisit as I gain more experience."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {emergingPerspectives.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass glass-hover h-full p-6">
              <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function LearningInPublic() {
  return (
    <section id="learning" className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <Reveal>
        <p className="text-3xl leading-snug font-medium tracking-tight text-balance sm:text-4xl">
          "{quote.text}"
        </p>
        {quote.attribution && (
          <p className="mt-5 text-sm text-muted-foreground">{quote.attribution}</p>
        )}
      </Reveal>
    </section>
  );
}
