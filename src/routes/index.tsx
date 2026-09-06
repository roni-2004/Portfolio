import { createFileRoute } from "@tanstack/react-router";

import { Background } from "@/components/portfolio/Background";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, Guestbook } from "@/components/portfolio/Guestbook";
import { Hero } from "@/components/portfolio/Hero";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { LearningInPublic, Perspectives } from "@/components/portfolio/Perspectives";
import { PointOfView } from "@/components/portfolio/PointOfView";
import { CaseStudies, Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { ThemeProvider } from "@/components/portfolio/theme";
import { Timeline } from "@/components/portfolio/Timeline";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { profile, SHOW_PROJECTS, SHOW_CASE_STUDIES } from "@/lib/portfolio-data";

const title = `${profile.name} — Portfolio`;
const description =
  "SAP Associate Consultant at EY GDS working across enterprise business processes, SAP technologies and applied generative AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://roniaj.vercel.app/og-image.png" },
      { property: "og:url", content: "https://roniaj.vercel.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://roniaj.vercel.app/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <Background />
        <Loader />
        <Nav />
        <main>
          <Hero />
          <Toolkit />
          <Skills />
          <PointOfView />
          <Timeline />
          {SHOW_PROJECTS && <Projects />}
          {SHOW_CASE_STUDIES && <CaseStudies />}
          <Certifications />
          <Perspectives />
          <LearningInPublic />
          <Contact />
          <Guestbook />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
