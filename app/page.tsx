import BentoGrid from "./components/BentoGrid";
import HeroSection from "./components/HeroSection";
import TechStackGrid from "./components/Icons";
import ProjectsSection from "./components/ProjectSection";
import TextMarquee from "./components/TextMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <TextMarquee />
      <BentoGrid />
      <TechStackGrid />
    </main>
  );
}
