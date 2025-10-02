import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarDivider from "@/components/CarDivider";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <CarDivider direction="left" />
        <About />
        <CarDivider direction="right" />
        <Work />
        <CarDivider direction="left" />
        <Skills />
        <CarDivider direction="right" />
        <Contact />
      </main>

      <footer className="relative py-8 text-center border-t border-border/50">
        <p className="font-inter text-sm text-muted-foreground">
          © 2025 Roni Portfolio.
        </p>
      </footer>
    </div>
  );
};

export default Index;
