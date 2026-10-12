"use client";
import { motion, useReducedMotion } from "framer-motion";

const items = [
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Python",
  "C++",
  "SQL",
  "Git",
  "Figma",
];

export default function TextMarquee({ speed = 35 }: { speed?: number }) {
  const shouldReduceMotion = useReducedMotion();

  const renderItems = (copy: "primary" | "duplicate") =>
    items.map((item) => (
      <span
        key={`${copy}-${item}`}
        className="inline-flex shrink-0 items-center py-2 text-base font-semibold tracking-wide text-slate-700 dark:text-slate-200 sm:text-lg"
      >
        {item}
        <span
          aria-hidden="true"
          className="mx-5 text-purple-500/60 dark:text-purple-300/60"
        >
          ✦
        </span>
      </span>
    ));

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200/80 bg-white/50 py-2 dark:border-white/10 dark:bg-white/[0.03]"
      aria-label="Technologies and tools"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent dark:from-[#030712] sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent dark:from-[#030712] sm:w-20" />
      <motion.div
        className="flex w-max"
        animate={
          shouldReduceMotion === false ? { x: ["0%", "-50%"] } : undefined
        }
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0 items-center">
          {renderItems("primary")}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {renderItems("duplicate")}
        </div>
      </motion.div>
    </section>
  );
}
