import ProjectsSection from "../components/ProjectSection";
import PageIntro from "../components/PageIntro";

export default function Projects() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <PageIntro
          eyebrow="Projects & experiments"
          title="A few things I’ve been building."
          description="A collection of projects that reflect what I’m learning, the problems I enjoy solving, and the ideas I’ve brought to life."
        />
      </div>
      <ProjectsSection />
    </main>
  );
}
