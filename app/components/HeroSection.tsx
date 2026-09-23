"use client";

import { motion } from "framer-motion";
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
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* Subtle gradient mesh background */}
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
          Portfolio 2026
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight"
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
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed"
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
          <MagneticButton href="/work">View Projects</MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

// --- Magnetic Button Component ---

function MagneticButton({
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
      ? "bg-white text-gray-900 hover:bg-gray-100"
      : "bg-white/10 text-white border border-white/20 hover:bg-white/20";

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${base}
        inline-flex items-center px-8 py-4 rounded-full
        text-base font-semibold tracking-wide
        transition-colors duration-200
      `}
    >
      {children}
    </motion.a>
  );
}
