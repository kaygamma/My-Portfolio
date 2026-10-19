"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { getTecIcon } from "../utils/TecIcons";

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
  repositoryUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  accent = "purple",
  repositoryUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-md transition duration-300 hover:border-purple-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/60 sm:p-7"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${accentMap[accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mb-6 flex-1 leading-relaxed text-slate-600 dark:text-gray-400">
          {description}
        </p>
        <div
          className="flex flex-wrap gap-2"
          aria-label={`${title} technologies`}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:gap-2.5 sm:px-4"
            >
              {tag
                ? getTecIcon(
                    tag,
                    `inline-block h-4 w-4 mr-1${tag === "Vercel" ? " dark:invert" : ""}`,
                    true,
                  )
                : getTecIcon("Htmx", "inline-block h-4 w-4 mr-1", true)}
              {tag}
            </span>
          ))}
        </div>
        <details className="group/links mt-auto pt-5">
          <summary className="ml-auto flex min-h-10 w-fit cursor-pointer list-none items-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-white/15 dark:text-slate-200 dark:hover:text-purple-200 [&::-webkit-details-marker]:hidden">
            Project links
            <ChevronDown
              aria-hidden="true"
              size={14}
              className="transition-transform group-open/links:rotate-180"
            />
          </summary>
          <div className="mt-2 flex flex-wrap justify-end gap-2">
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code`}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-white/15 dark:text-slate-200 dark:hover:text-purple-200"
              >
                {getTecIcon("GitHub", "h-3.5 w-3.5 dark:invert", true)}
                Code
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:bg-white dark:text-slate-900 dark:hover:bg-purple-200"
              >
                Live demo
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            )}
          </div>
        </details>
      </div>
    </motion.div>
  );
}
