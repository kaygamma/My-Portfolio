import BentoGrid from "./components/BentoGrid";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import TextMarquee from "./components/TextMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TextMarquee />
      <ProjectsSection />
      <BentoGrid />
    </main>
  );
}
