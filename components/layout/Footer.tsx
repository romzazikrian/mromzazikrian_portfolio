"use client";

import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left lg:px-16">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <Code2 size={18} />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2026{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              Developer Portfolio by M. Romza Zikrian
            </span>
          </p>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-500">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
