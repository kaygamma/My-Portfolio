"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-linear-to-r from-purple-500 via-pink-500 to-blue-500"
      style={{ scaleX }}
    />
  );
}
