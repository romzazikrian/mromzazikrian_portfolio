"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan light mode" : "Aktifkan dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:scale-105 hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
