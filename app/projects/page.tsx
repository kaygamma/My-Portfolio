import ProjectsSection from "../components/ProjectSection";
import PageIntro from "../components/PageIntro";

export default function Projects({ embedded = false }: { embedded?: boolean }) {
  const Container = embedded ? "div" : "main";

  return (
    <Container
      id={embedded ? "projects" : undefined}
      className={embedded ? "scroll-mt-24" : undefined}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <PageIntro
          eyebrow="Projects & experiments"
          title="A few things I’ve been building."
          description="A collection of projects that reflect what I’m learning, the problems I enjoy solving, and the ideas I’ve brought to life."
          headingLevel={embedded ? "h2" : "h1"}
        />
      </div>
      <ProjectsSection embedded={embedded} />
    </Container>
  );
}
