"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";

export default function ToggleTheme() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 p-1 shadow-sm transition-colors dark:border-white/15 dark:bg-white/5"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${
          theme === "light"
            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
            : "text-slate-600 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-white/10"
        }`}
      >
        <Sun aria-hidden="true" className="h-4 w-4" />
        <span>Light</span>
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${
          theme === "dark"
            ? "bg-slate-800 text-white shadow-sm dark:bg-slate-700"
            : "text-slate-600 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-white/10"
        }`}
      >
        <Moon aria-hidden="true" className="h-4 w-4" />
        <span>Dark</span>
      </button>
    </div>
  );
}
