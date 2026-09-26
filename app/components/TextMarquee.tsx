"use client";
import { motion } from "framer-motion";

const items = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
  "Three.js",
  "AWS",
];

export default function TextMarquee({ speed = 25 }) {
  return (
    <div className="relative overflow-hidden  text-gray-900 py-6">
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-linear-to-r from-blue-600 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-linear-to-l from-purple-600 to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-200%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-4xl sm:text-5xl font-bold tracking-normal mx-4"
          >
            {item}
            <span className="mx-4 text-gray-300">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
