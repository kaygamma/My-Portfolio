"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    description: " ",
    tags: "React, Next.js, TypeScript, Tailwind",
    span: "col-span-2 row-span-2",
    color: "from-purple-600 to-indigo-600",
    icon: "⚡",
  },
  {
    title: "Programming Languages",
    description: " ",
    tags: "C/C++, Python, JavaScript, TypeScript, Java,",
    span: "col-span-1 row-span-1",
    color: "from-emerald-500 to-teal-600",
    icon: "🔧",
  },
  {
    title: "Computer Science",
    description: " ",
    tags: "Algorithms, Data Structure, Database System, Computer Architecture, SQL ",
    span: "col-span-1 row-span-1",
    color: "from-blue-500 to-cyan-600",
    icon: "🗄️",
  },
  {
    title: "DevOps",
    description: " ",
    tags: "Git, GitHub, VS Code, My SQL, Vercel",
    span: "col-span-1 row-span-1",
    color: "from-orange-500 to-red-500",
    icon: "🚀",
  },
  {
    title: "Design",
    description: " ",
    tags: "Figma, UI/UX, Prototyping",
    span: "col-span-1 row-span-1",
    color: "from-pink-500 to-rose-600",
    icon: "🎨",
  },
  {
    title: "Currently Exploring",
    description: " ",
    tags: "Backend Development,  AI/Machine Learning, Advance TypeScript, Software Architecture, Intelligent Systems ",
    span: "col-span-2 row-span-1",
    color: "from-gray-700 to-gray-900",
    icon: "📊",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-8 px-6  bg-slate-100/10 dark:bg-black/60">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          What I bring to the table.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`
                ${skill.span}
                relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10  hover:border-white/20 hover:shadow-xl p-8 flex flex-col justify-between transition-all duration-150
              `}
            >
              <div>
                <span className="text-4xl mb-4 block">{skill.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
