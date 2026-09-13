"use client";

import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

import { navigation } from "@/data/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-black/20">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20">
                <Code2 size={20} />
              </span>

              <span className="hidden text-sm font-bold tracking-tight text-slate-900 sm:block dark:text-white">
                Portfolio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                >
                  {language === "id" ? item.labelId : item.labelEn}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {isOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="mt-4 border-t border-slate-200 pt-3 dark:border-slate-800 lg:hidden">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                  >
                    {language === "id" ? item.labelId : item.labelEn}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
