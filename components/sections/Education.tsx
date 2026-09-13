"use client";

import {
  Award,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";

/* =========================
   ANIMATION VARIANTS
========================== */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const container: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Education() {
  const { language } = useLanguage();
  const isId = language === "id";

  const highlights = isId
    ? [
        "Pengembangan Website",
        "Pemrograman",
        "Basis Data",
        "Teknologi Informasi",
      ]
    : ["Web Development", "Programming", "Database", "Information Technology"];

  const educationSkills = [
    {
      icon: Code2,
      label: isId ? "Pemrograman" : "Programming",
    },
    {
      icon: Database,
      label: isId ? "Basis Data" : "Database",
    },
    {
      icon: Globe2,
      label: isId ? "Teknologi Web" : "Web Technology",
    },
    {
      icon: Award,
      label: isId ? "Akademik" : "Academic",
    },
  ];

  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          variants={container}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {/* Badge */}

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <GraduationCap size={16} />

            {isId ? "Pendidikan" : "Education"}
          </motion.span>

          {/* Title */}

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
          >
            {isId ? "Riwayat Pendidikan" : "Education Background"}
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
          >
            {isId
              ? "Pendidikan dan pengalaman akademik yang telah saya tempuh."
              : "My academic background and educational journey."}
          </motion.p>

          {/* Gradient line */}

          <motion.div
            variants={fadeScale}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* =========================
            EDUCATION TIMELINE
        ========================== */}

        <motion.div variants={fadeScale} className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px origin-top bg-gradient-to-b from-indigo-500 via-blue-500 to-violet-500 sm:block"
            />

            {/* =========================
                MAIN EDUCATION CARD
            ========================== */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative flex gap-6 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-950/5 transition duration-300 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 sm:p-8"
            >
              {/* =========================
                  TIMELINE ICON
              ========================== */}

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 sm:flex"
              >
                <GraduationCap size={24} />
              </motion.div>

              {/* =========================
                  CONTENT
              ========================== */}

              <div className="flex-1">
                {/* Header */}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <motion.div variants={fadeUp}>
                    <h3 className="text-xl font-bold sm:text-2xl">
                      Universitas Teknokrat Indonesia
                    </h3>

                    <p className="mt-2 font-semibold text-indigo-500">
                      {isId ? "S1 Informatika" : "Bachelor of Informatics"}
                    </p>
                  </motion.div>

                  {/* Date */}

                  <motion.div
                    variants={fadeScale}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300"
                  >
                    <CalendarDays size={16} />
                    Sep 2021 – Des 2024
                  </motion.div>
                </div>

                {/* =========================
                    LOCATION
                ========================== */}

                <motion.div
                  variants={fadeUp}
                  className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                >
                  <MapPin size={17} />
                  Bandar Lampung, Indonesia
                </motion.div>

                {/* =========================
                    DESCRIPTION
                ========================== */}

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
                >
                  {isId
                    ? "Menyelesaikan pendidikan Sarjana Informatika dengan mempelajari pengembangan perangkat lunak, pemrograman, basis data, pengembangan website, serta teknologi informasi."
                    : "Completed a Bachelor's degree in Informatics, studying software development, programming, databases, web development, and information technology."}
                </motion.p>

                {/* =========================
                    HIGHLIGHTS
                ========================== */}

                <motion.div
                  variants={container}
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                >
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      variants={itemAnimation}
                      whileHover={{
                        x: 5,
                      }}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-indigo-500"
                      />

                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* =========================
                    EDUCATION SKILLS
                ========================== */}

                <motion.div
                  variants={container}
                  className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
                >
                  {educationSkills.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        variants={itemAnimation}
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="group/skill flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center transition duration-300 hover:border-indigo-400/50 hover:bg-indigo-50/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-indigo-500/10"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            rotate: 5,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500"
                        >
                          <Icon size={21} />
                        </motion.div>

                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
