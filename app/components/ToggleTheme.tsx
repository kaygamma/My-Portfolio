"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";

export default function ToggleTheme() {
  const { setTheme } = useThemeContext();

  return (
    <div className="flex gap-3 sm:gap-6 rounded-2xl bg-slate-200 p-2 dark:bg-slate-800 border border-black/10 dark:border-white/30 transition-colors duration-150">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light theme"
      >
        <Sun className="h-4 w-4 text-slate-800 dark:text-slate-200" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark theme"
      >
        <Moon className="h-4 w-4 text-slate-800 dark:text-slate-200" />
      </button>
    </div>
  );
}
