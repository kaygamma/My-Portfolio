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

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Real-time analytics dashboard for online retailers with data visualization and inventory management.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
    accent: "purple",
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-conversion marketing site with animated sections and A/B tested layouts.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    accent: "blue",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop and real-time updates.",
    tags: ["Next.js", "WebSocket", "Docker", "Redis"],
    accent: "emerald",
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
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
