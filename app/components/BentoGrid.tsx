"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    tags: "React, Next.js, TypeScript, Tailwind",
    color: "from-purple-600 to-indigo-600",
    icon: "⚡",
  },
  {
    title: "Programming Languages",
    tags: "C/C++, Python, JavaScript, TypeScript, Java",
    color: "from-emerald-500 to-teal-600",
    icon: "🔧",
  },
  {
    title: "Computer Science",
    tags: "Algorithms, Data Structures, Database Systems, Computer Architecture, SQL",
    color: "from-blue-500 to-cyan-600",
    icon: "🗄️",
  },
  {
    title: "DevOps",
    tags: "Git, GitHub, VS Code, MySQL, Vercel",
    color: "from-orange-500 to-red-500",
    icon: "🚀",
  },
  {
    title: "Design",
    tags: "Figma, UI/UX, Prototyping",
    color: "from-pink-500 to-rose-600",
    icon: "🎨",
  },
  {
    title: "Currently Exploring",
    tags: "Backend Development, AI/Machine Learning, Advanced TypeScript, Software Architecture, Intelligent Systems",
    color: "from-gray-700 to-gray-900",
    icon: "📊",
  },
];

export default function BentoGrid() {
  return (
    <section className="px-6 py-16 transition-colors duration-150 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:mb-10 sm:text-4xl"
        >
          What I bring to the table.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                relative flex min-h-52 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/60 sm:p-7
              `}
            >
              <div>
                <span className="text-4xl mb-4 block">{skill.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {skill.tags}
                </p>
              </div>
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl ${skill.color} opacity-10 blur-2xl`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
