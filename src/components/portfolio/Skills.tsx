import { skillCategories } from "@/lib/portfolio-data";
import { Icon } from "./Icon";
import { Reveal, Section } from "./Reveal";

const allTools = skillCategories.flatMap((cat) => cat.tools ?? []);
const allPractices = skillCategories.flatMap((cat) => cat.practices ?? []);

function SkillGrid({
  items,
  variant,
}: {
  items: { name: string; icon: string }[];
  variant: "tool" | "practice";
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={i * 40}>
          <div
            className={`glass flex h-full flex-col items-center justify-center gap-3 rounded-2xl p-5 text-center ${
              variant === "practice" ? "text-muted-foreground" : "text-foreground"
            }`}
          >
            <Icon
              name={item.icon}
              isBrand={variant === "tool"}
              className={`h-9 w-9 ${variant === "practice" ? "text-muted-foreground" : "text-primary"}`}
            />
            <span className="text-sm font-medium leading-tight">{item.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skillset"
      title="What I bring to a delivery team."
      intro="The technologies, methods, and practices I'm building my career around."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Tools & Languages</p>
          <SkillGrid items={allTools} variant="tool" />
        </div>
        <div>
          <p className="eyebrow mb-4">Processes & Practices</p>
          <SkillGrid items={allPractices} variant="practice" />
        </div>
      </div>
    </Section>
  );
}