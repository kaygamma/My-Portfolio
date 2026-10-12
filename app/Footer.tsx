import React from "react";

function Footer() {
  return (
    <footer className="mt-auto px-1.5 pb-1.5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl border border-black/10 bg-white/60 p-5 text-center text-slate-800 shadow-sm backdrop-blur-sm transition-colors duration-150 dark:border-white/10 dark:bg-black/40 dark:text-slate-200 sm:flex-row sm:text-left sm:px-7">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} My Portfolio
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Built and designed by <span className="font-medium text-slate-900 dark:text-white">Edmund Yahaya</span>
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/kaygamma"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edmund-yahaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yahedmund00@gmail.com"
            className="transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
