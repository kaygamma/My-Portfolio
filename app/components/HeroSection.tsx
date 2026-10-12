"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.25 } },
};

const MotionLink = motion.create(Link);

export default function HeroSection() {
  return (
    <section className="relative z-0 flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-150 dark:bg-gray-950 dark:text-white sm:py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-sm font-medium tracking-[0.3em] uppercase text-purple-400 mb-4"
        >
          Frontend developer · Portfolio
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
        >
          I build{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
            digital
          </span>
          <br />
          experiences.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Front-end developer specializing in performant, accessible, and
          visually compelling web applications.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CtaLink href="/projects">View Projects</CtaLink>
          <CtaLink href="/contact" variant="secondary">
            Get in Touch
          </CtaLink>
        </motion.div>
      </div>
    </section>
  );
}

function CtaLink({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    variant === "primary"
      ? "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      : "bg-white/70 text-gray-900 border border-gray-300 hover:bg-white dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20";

  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${base}
      inline-flex min-h-12 items-center justify-center px-8 py-3 rounded-full
        text-base font-semibold tracking-wide
      transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500
      `}
    >
      {children}
    </MotionLink>
  );
}
