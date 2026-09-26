"use client";
import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siDocker,
  siFigma,
  siGit,
  siGithub,
} from "simple-icons";
import { motion } from "framer-motion";

const stack = [
  { name: "HTML5", Icon: siHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: siCss, color: "#1572B6" },
  {
    name: "JavaScript",
    Icon: siJavascript,
    color: "#F7DF1E",
    darkColor: "#323330",
  },
  { name: "React", Icon: siReact, color: "#61DAFB" },
  { name: "Next.js", Icon: siNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: siTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: siNodedotjs, color: "#339933" },
  { name: "Docker", Icon: siDocker, color: "#2496ED" },
  { name: "Figma", Icon: siFigma, color: "#F24E1E" },
  { name: "Git", Icon: siGit, color: "#F05032" },
  { name: "GitHub", Icon: siGithub, color: "#FFFFFF" },
];

export default function TechStackGrid() {
  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-purple-400 mb-4"
        >
          Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          The tools I work with.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
        >
          {stack.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-white/20 transition-colors">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label={name}
                  style={{ color, fill: "currentColor" }}
                >
                  <path d={Icon.path} />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
