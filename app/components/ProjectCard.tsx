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

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  accent?: keyof typeof accentMap;
};

const accentMap = {
  purple: "from-purple-500/20 to-purple-500/0",
  blue: "from-blue-500/20 to-blue-500/0",
  emerald: "from-emerald-500/20 to-emerald-500/0",
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
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-white/20 transition-colors duration-300"
    >
      {/* Hover gradient glow */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${accentMap[accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
