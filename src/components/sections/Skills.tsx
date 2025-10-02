import { useEffect, useRef, useState } from "react";
import { Code, Palette, Zap, Shield } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, modern websites with clean and efficient code.",
    items: ["React", "JavaScript", "Node.js", "Express.js", "EJS"],
  },
  {
    icon: Palette,
    title: "Design",
    description: "Crafting visually appealing interfaces with attention to detail.",
    items: ["UI/UX", "Figma", "Adobe After Effects", "Adobe Photoshop"],
  },
  {
    icon: Zap,
    title: "Languages",
    description: "Writing efficient, maintainable, and scalable code.",
    items: ["C", "Python", "Java", "C++", "C#"],
  },
  {
    icon: Shield,
    title: "Database Management",
    description: "Managing and securing data with reliable database solutions.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-8 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <h2
          className={`font-orbitron text-5xl md:text-7xl font-black mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EXPERTISE
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-glow ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <skill.icon size={32} className="text-background" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="font-inter text-sm px-4 py-2 bg-muted/50 text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
