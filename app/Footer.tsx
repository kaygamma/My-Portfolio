import { Mail } from "lucide-react";
import { getTecIcon } from "./utils/TecIcons";

function Footer() {
  return (
    <footer className="mt-auto px-1.5 pb-1.5">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 rounded-xl border border-black/10 bg-white/60 p-5 text-center text-slate-800 shadow-sm backdrop-blur-sm transition-colors duration-150 dark:border-white/10 dark:bg-black/40 dark:text-slate-200 sm:flex-row sm:text-left sm:px-7">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} My Portfolio
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Built and designed by{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Edmund Yahaya
          </span>
        </p>
        <nav
          aria-label="Social links"
          className="flex items-center gap-4 text-sm"
        >
          <a
            href="https://github.com/kaygamma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            {getTecIcon("GitHub", "h-4 w-4", true, "currentColor")}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edmund-yahaya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            {getTecIcon("LinkedIn", "h-4 w-4", true)}
            LinkedIn
          </a>
          <a
            href="mailto:yahedmund00@gmail.com"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg transition-colors hover:text-purple-700 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500 dark:hover:text-purple-300"
          >
            <Mail aria-hidden="true" size={16} />
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
