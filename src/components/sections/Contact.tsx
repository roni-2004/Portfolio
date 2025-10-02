import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-8 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto">
        <h2
          className={`font-orbitron text-5xl md:text-7xl font-black mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            GET IN TOUCH
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-4">Let's Create Something Amazing</h3>
              <p className="font-inter text-muted-foreground">
                Have a project in mind? Let's discuss how we can bring your vision to life with cutting-edge design and technology.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-inter font-semibold text-lg">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-glow group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div>
              <Input
                placeholder="Your Name"
                className="bg-card/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-card/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-card/50 border-border/50 focus:border-primary transition-colors resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-strong transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
