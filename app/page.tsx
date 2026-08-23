import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Teaching } from "@/components/teaching";
import { Activities } from "@/components/activities";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Publications } from "@/components/publications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackgroundMotion } from "@/components/background-motion";

export default function Home() {
  return (
    <main className="portfolio-canvas relative isolate overflow-hidden">
      <BackgroundMotion />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Teaching />
      <Activities />
      <Skills />
      <Publications />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
