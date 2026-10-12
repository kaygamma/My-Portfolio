"use client";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

type ThemeContextType = {
  setTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const setTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useThemeContext must be used inside a <ThemeProvider>");
  }

  return context;
}
