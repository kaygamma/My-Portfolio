import About from "./about/page";
import BentoGrid from "./components/BentoGrid";
import HeroSection from "./components/HeroSection";
import TextMarquee from "./components/TextMarquee";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <div id="home" className="scroll-mt-24">
        <HeroSection />
      </div>
      <TextMarquee />
      <Projects embedded />
      <BentoGrid />
      <About embedded />
      <Contact embedded />
    </main>
  );
}
