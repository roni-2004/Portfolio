import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      ref={sectionRef}
      className="relative py-32 px-8 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <h2
          className={`font-orbitron text-5xl md:text-7xl font-black mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ABOUT ME
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Full Stack Web Developer (MERN) with a strong foundation in Data Structures and Algorithms. I build efficient, scalable web applications and love solving real-world problems through code. With proven leadership qualities and two NPTEL Elite Certifications.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              I bring both technical expertise and a team-first mindset to every project. Passionate about learning, collaboration, and building impactful digital solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-primary">3+</div>
                <div className="font-inter text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-secondary">20+</div>
                <div className="font-inter text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-primary">200+</div>
                <div className="font-inter text-sm text-muted-foreground mt-1">DSA Solved</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            {/* <div className="relative aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-strong">
                    <span className="font-orbitron text-4xl font-black text-background">A</span>
                  </div>
                  <p className="font-inter text-muted-foreground">Roni</p>
                </div>
              </div>
            </div> */}
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-glow-strong">
              <img
                src="/roni.jpg"   // replace with your actual photo path
                alt="Roni AJ"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
