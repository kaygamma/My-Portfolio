import About from "./about/page";
import BentoGrid from "./components/BentoGrid";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import TextMarquee from "./components/TextMarquee";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TextMarquee />
      <ProjectsSection />
      <BentoGrid />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
