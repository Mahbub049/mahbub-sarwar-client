import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Publications } from "@/components/publications";
import { Teaching } from "@/components/teaching";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Activities } from "@/components/activities";
import { Achievements } from "@/components/achievements";
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
      <Experience />
      <Education />
      <Publications />
      <Teaching />
      <Projects />
      <Skills />
      <Activities />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
