"use client";

import { motion } from "framer-motion";
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
}> = [
  {
    title: "Gamma Quiz App",
    description:
      "An interactive coding-knowledge quiz pulling live questions from a trivia API, styled with a code-editor-inspired UI. Built to learn useReducer for centralized state management and useContext to avoid prop drilling across routes. [GitHub link][Live demo link]",
    tags: ["React", "JavaScript", "Tailwind"],
    accent: "purple",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather lookup with a 24-hour-before/24-hour-after hourly forecast, built around a custom useWeather hook instead of a reducer    — a deliberate architecture choice to practice a different state-management pattern from the quiz app. [GitHub link] · [Live demo link]",
    tags: ["React", "JavaScript", "Tailwind", "Framer Motion", "Vercel"],
    accent: "blue",
  },
  {
    title: "My Portfolio",
    description:
      " My first project using the Next.js App Router and TypeScript — multi-page routing, a real working contact form via Resend, and a        deliberate Server/Client Component split for performance. [GitHub link] · [Live demo link]",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    accent: "emerald",
  },
  {
    title: "Coopérative des Produits",
    description:
      "A cooperative products website built across web development  coursework, progressing from semantic HTML/CSS through full JavaScript CRUD functionality. (Worth including if it's a genuinely presentable coursework project — good evidence of your progression from fundamentals to full-stack CRUD)",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "fuchsia",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-purple-400 mb-4"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          Projects I'm proud of.
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              accent={project.accent}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
