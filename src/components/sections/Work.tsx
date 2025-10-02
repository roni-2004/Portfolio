import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Server-Side Rendered Blog Application",
    description: "Developed a blogging platform using Node.js, Express, and EJS templating for server-side rendering and dynamic content generation.",
    tech: ["Node.js", "Express.js", "EJS"],
    link: "https://github.com/roni-2004/Blog-Website",
  },
  {
    title: "Next-Gen Hotel Management & Dashboard Platform",
    description: "Developing with Next.js (App Router), React Server Components, and Supabase to deliver a high-performance, full-stack hotel management solution.",
    tech: ["Next.js", "Supabase", "NextAUTH"],
    link: "",
  },
  {
    title: "Filmtopia",
    description: "Simple React app to search and explore films via OMDB API.",
    tech: ["JavaScript", "CSS", "API"],
    link: "https://github.com/roni-2004/Filmtopia",
  },
  {
    title: "Core Technical Member @CodeZilla",
    description: "Assisted in organizing hackathons and tech events, coordinating teams, and ensuring smooth execution of all technical activities.",
    tech: ["Leadership", "Teamwork", "Communication"],
    link: "https://codezilla.io",
  },
    {
    title: "Lead Website Developer @SRM Model United Nations",
    description: " Designed and deployed a responsive static webpage for 300+ participants, improving accessibility and reducing event queries by 20%",
    tech: ["Frontend", "CSS Frameworks", "SEO Optimization"],
    link: "https://srmrmun.in",
  },

];

const Work = () => {
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
      id="work"
      ref={sectionRef}
      className="relative py-32 px-8 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <h2
          className={`font-orbitron text-5xl md:text-7xl font-black mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            FEATURED WORK
          </span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-glow ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-orbitron text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-inter text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={()=>{
                    if(project.link){
                    window.open(project.link, "_blank");
                    } else {
                      alert("Project in-progress!");
                    }
                  }}
                >
                  Link
                  <ExternalLink className="ml-2" size={18} />
                </Button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
