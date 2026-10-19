"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const projects: Array<{
  title: string;
  description: string;
  tags: string[];
  accent: "purple" | "blue" | "emerald" | "fuchsia";
  repositoryUrl?: string;
  liveUrl?: string;
}> = [
  {
    title: "Gamma Quiz App",
    description:
      "An interactive coding quiz powered by a trivia API, with a code-editor-inspired interface. Built to practice centralized state management with useReducer and shared state with useContext.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    accent: "purple",
    repositoryUrl: "https://github.com/kaygamma/quiz-app",
    liveUrl: "https://gammaquizapp.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather lookup with hourly forecasts, built around a custom weather hook. The project explores a focused alternative to reducer-based state management.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "blue",
    repositoryUrl: "https://github.com/kaygamma/Gamma-Weather-App",
    liveUrl: "https://gamma-weather-app.vercel.app/",
  },
  {
    title: "My Portfolio",
    description:
      "A multi-page portfolio built with the Next.js App Router and TypeScript, featuring responsive layouts, light and dark themes, and interactive page elements.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "emerald",
    repositoryUrl: "https://github.com/kaygamma/My-Portfolio",
    liveUrl: "https://my-portfolio-kaygamma.vercel.app/",
  },
  {
    title: "Coopérative des Produits",
    description:
      "A cooperative products website developed through coursework, progressing from semantic HTML and CSS to JavaScript-powered create, read, update, and delete interactions.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    accent: "fuchsia",
  },
];

export default function ProjectsSection({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  return (
    <section className="bg-slate-100 px-6 py-20 transition-colors duration-150 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:mb-12 sm:text-5xl"
        >
          Projects I&apos;m proud of.
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              accent={project.accent}
              repositoryUrl={project.repositoryUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </motion.div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-center sm:p-6">
          <p className="text-slate-700 dark:text-slate-300">
            Have a project or idea you’d like to discuss?
          </p>
          <Link
            href={embedded ? "#contact" : "/contact"}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 dark:bg-white dark:text-slate-900 dark:hover:bg-purple-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
