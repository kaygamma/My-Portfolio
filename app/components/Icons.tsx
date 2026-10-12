"use client";
import { stack } from "../utils/TecIcons";
import { motion } from "framer-motion";

export default function TechStackGrid() {
  return (
    <section className="bg-slate-100 px-6 py-16 transition-colors duration-150 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300"
        >
          Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:mb-10 sm:text-4xl"
        >
          The tools I work with.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 sm:gap-4"
        >
          {stack.map(({ name, Icon, color }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 transition-colors hover:border-purple-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/60 sm:flex-col sm:justify-center sm:gap-3 sm:p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10 sm:h-12 sm:w-12">
                <svg
                  className={`h-6 w-6 sm:h-7 sm:w-7 ${
                    name === "GitHub" ? "dark:invert" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ color, fill: "currentColor" }}
                >
                  <path d={Icon.path} />
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors group-hover:text-purple-800 dark:text-gray-300 dark:group-hover:text-purple-200 sm:text-xs">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
