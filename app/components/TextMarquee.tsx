import type { CSSProperties } from "react";
import { stack } from "../utils/TecIcons";

export default function TextMarquee({ speed = 35 }: { speed?: number }) {
  const renderItems = (copy: "primary" | "duplicate") =>
    stack.map(({ name, Icon, color }) => (
      <span
        key={`${copy}-${name}`}
        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:gap-2.5 sm:px-4"
      >
        <svg
          className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${
            name === "GitHub" ? "dark:invert" : ""
          }`}
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color, fill: "currentColor" }}
        >
          <path d={Icon.path} />
        </svg>
        {name}
      </span>
    ));

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-100/80 py-3 dark:border-white/10 dark:bg-gray-950"
      aria-label="Technology stack"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-slate-100 to-transparent dark:from-gray-950 sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-slate-100 to-transparent dark:from-gray-950 sm:w-16" />
      <div
        className="tech-marquee-track flex w-max focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-purple-500"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
        role="group"
        tabIndex={0}
        aria-label="Scroll through technology stack"
      >
        <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
          {renderItems("primary")}
        </div>
        <div
          className="tech-marquee-copy flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
          aria-hidden="true"
        >
          {renderItems("duplicate")}
        </div>
      </div>
    </section>
  );
}
