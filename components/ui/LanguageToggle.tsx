"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      aria-label="Ganti bahasa"
      className="flex h-9 items-center gap-2 rounded-full border border-slate-300 px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      <Languages size={15} />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
