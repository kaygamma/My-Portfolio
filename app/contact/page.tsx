import ContactActions from "../components/ContactActions";
import PageIntro from "../components/PageIntro";

export default function Contact({ embedded = false }: { embedded?: boolean }) {
  const Container = embedded ? "div" : "main";

  return (
    <Container
      id={embedded ? "contact" : undefined}
      className={`mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 ${
        embedded ? "scroll-mt-24" : ""
      }`}
    >
      <PageIntro
        eyebrow="Let’s talk"
        title="Have an idea? Let’s make it happen."
        description="Whether you have a project in mind, want to talk about technology, or just want to say hello, I’d love to hear from you."
        headingLevel={embedded ? "h2" : "h1"}
      />
      <section
        aria-label="Ways to get in touch"
        className="max-w-5xl rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8"
      >
        <ContactActions />
      </section>
    </Container>
  );
}
