"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const accentMap = {
  purple: "from-purple-500/20 to-purple-500/0",
  blue: "from-blue-500/20 to-blue-500/0",
  emerald: "from-emerald-500/20 to-emerald-500/0",
  fuchsia: "from-fuchsia-500/20 to-fuchsia-500/0",
};

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  accent?: keyof typeof accentMap;
};

export default function ProjectCard({
  title,
  description,
  tags,
  accent = "purple",
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-md transition duration-300 hover:border-purple-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/60 sm:p-7"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${accentMap[accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{title}</h3>
        <p className="mb-6 flex-1 leading-relaxed text-slate-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
