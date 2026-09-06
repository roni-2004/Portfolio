import { toolkit } from "@/lib/portfolio-data";
import { Icon } from "./Icon";
import { Reveal, Section } from "./Reveal";

export function Toolkit() {
  return (
    <Section
      id="toolkit"
      eyebrow="Consulting Toolkit"
      title="The frameworks I work inside."
      intro="The methods that shape how I approach a process problem."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toolkit.map((card, i) => (
          <Reveal key={card.name} delay={i * 90}>
            <article
              className={`glass glass-hover h-full p-6 ${
                card.placeholder ? "border-dashed opacity-70" : ""
              }`}
            >
              <span className="glass grid h-11 w-11 place-items-center rounded-xl text-primary">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{card.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
