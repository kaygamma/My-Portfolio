import Link from "next/link";
import { ArrowDown, ArrowRight, Code2, Compass, GraduationCap } from "lucide-react";
import PageIntro from "../components/PageIntro";

const skills = [
  {
    title: "Web development",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Computer science",
    icon: GraduationCap,
    items: ["Algorithms", "Data structures", "Databases", "Computer architecture"],
  },
  {
    title: "Tools & exploring",
    icon: Compass,
    items: ["Git & GitHub", "Figma", "Backend development", "AI & intelligent systems"],
  },
];

const journey = [
  {
    title: "Building strong foundations",
    content:
      "I study Computer Science Engineering at Université Hassan 1er in Morocco. Programming in C, C++, and Python helped me understand problem solving, algorithms, data structures, databases, and computer architecture.",
  },
  {
    title: "Learning by making",
    content:
      "I moved into web development with HTML, CSS, and JavaScript, then started building interactive projects. My quiz app, weather app, and portfolio have helped me put APIs, application logic, and user experience into practice.",
  },
  {
    title: "What’s next",
    content:
      "I’m continuing to grow with TypeScript and modern development workflows while exploring backend development, software architecture, AI, and intelligent systems. I’m always looking for a worthwhile problem to build around.",
  },
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
      <PageIntro
        eyebrow="A little about me"
        title="Curious by nature. A builder by practice."
        description="I’m Eddie Kay, a Computer Science Engineering student and developer who learns best by turning ideas into useful, thoughtful digital experiences."
      />

      <section
        aria-labelledby="approach-heading"
        className="grid gap-8 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-9 md:grid-cols-[1fr_auto]"
      >
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">
            My approach
          </p>
          <h2
            id="approach-heading"
            className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl"
          >
            Learn by building, improve with every iteration.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            I enjoy working across the details that make a project feel
            complete: clear interfaces, useful interactions, maintainable code,
            and the problem-solving underneath it all. I don’t just want to
            learn how technology works — I want to build with it.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex min-h-12 items-center justify-center gap-2 self-end rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 dark:bg-white dark:text-slate-900 dark:hover:bg-purple-200"
        >
          Explore my work <ArrowRight size={16} />
        </Link>
      </section>

      <section aria-labelledby="skills-heading" className="py-16 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">
              The toolkit
            </p>
            <h2
              id="skills-heading"
              className="text-3xl font-bold text-slate-950 dark:text-white"
            >
              What I work with
            </h2>
          </div>
          <ArrowDown
            aria-hidden="true"
            className="mb-1 text-slate-400"
            size={20}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/70"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-700 dark:text-purple-300">
                <Icon size={20} />
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="journey-heading">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">
            Still in progress
          </p>
          <h2
            id="journey-heading"
            className="text-3xl font-bold text-slate-950 dark:text-white"
          >
            My journey
          </h2>
        </div>
        <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 px-5 dark:divide-white/10 dark:border-white/10 dark:bg-white/5 sm:px-7">
          {journey.map(({ title, content }, index) => (
            <details key={title} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-lg font-semibold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    0{index + 1}
                  </span>
                  {title}
                </span>
                <ArrowDown
                  size={18}
                  className="shrink-0 text-slate-500 transition-transform group-open:rotate-180 dark:text-slate-400"
                />
              </summary>
              <p className="max-w-3xl pt-4 pl-9 leading-relaxed text-slate-600 dark:text-slate-400">
                {content}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
