"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Laptop,
  MapPin,
  ShieldCheck,
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

const container: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  const { language } = useLanguage();
  const isId = language === "id";

  const experiences = [
    {
      id: 1,
      position: isId
        ? "Staf IT – Program Magang HUB Kemnaker Batch 3"
        : "IT Staff – Kemnaker HUB Internship Batch 3",
      company: "Perkumpulan Keluarga Berencana Indonesia (PKBI) Lampung",
      period: "Des 2025 – Jun 2026",
      location: "Bandar Lampung, Lampung",
      icon: Laptop,
      color: "blue",
    },

    {
      id: 2,
      position: isId
        ? "Petugas Pengawas Tempat Pemungutan Suara (PTPS)"
        : "Polling Station Supervisory Officer (PTPS)",
      company: isId
        ? "Bawaslu Kabupaten Pesawaran"
        : "Pesawaran Regency Election Supervisory Agency",
      period: "Mei 2025",
      location: "Pesawaran, Lampung",
      icon: ShieldCheck,
      color: "violet",
    },

    {
      id: 3,
      position: isId
        ? "Program Kampus Mengajar Angkatan 7 – MBKM"
        : "Kampus Mengajar Batch 7 – MBKM",
      company: isId
        ? "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi"
        : "Ministry of Education, Culture, Research, and Technology",
      period: "Feb 2024 – Jun 2024",
      location: "Indonesia",
      icon: GraduationCap,
      color: "cyan",
    },
  ];

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
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
            <BriefcaseBusiness size={16} />

            {isId ? "Pengalaman" : "Experience"}
          </motion.span>

          {/* Title */}

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
          >
            {isId ? "Pengalaman Kerja" : "Work Experience"}
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
          >
            {isId
              ? "Pengalaman profesional dan kegiatan yang membentuk kemampuan saya di bidang teknologi dan organisasi."
              : "Professional experiences and activities that have shaped my skills in technology and organizational work."}
          </motion.p>

          {/* Gradient line */}

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* =========================
            TIMELINE
        ========================== */}

        <motion.div variants={container} className="mx-auto max-w-5xl">
          <div className="relative">
            {/* =========================
                TIMELINE LINE
            ========================== */}

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
                duration: 1.3,
                ease: "easeOut",
              }}
              className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px origin-top bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 sm:block"
            />

            {/* =========================
                EXPERIENCE ITEMS
            ========================== */}

            <div className="space-y-8">
              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <motion.div
                    key={experience.id}
                    variants={cardAnimation}
                    className="group relative flex gap-6"
                  >
                    {/* =========================
                        TIMELINE ICON
                    ========================== */}

                    <motion.div
                      whileHover={{
                        scale: 1.12,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 sm:flex"
                    >
                      <Icon size={22} />

                      {/* Icon Glow */}

                      <div className="absolute -inset-2 -z-10 rounded-2xl bg-indigo-500/20 opacity-0 blur-lg transition duration-300 group-hover:opacity-100" />
                    </motion.div>

                    {/* =========================
                        EXPERIENCE CARD
                    ========================== */}

                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="relative flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-950/5 transition duration-300 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 sm:p-8"
                    >
                      {/* Card Background Glow */}

                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl transition duration-500 group-hover:bg-indigo-500/10" />

                      {/* =========================
                          MOBILE ICON
                      ========================== */}

                      <div className="mb-5 flex sm:hidden">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                          <Icon size={21} />
                        </div>
                      </div>

                      {/* =========================
                          HEADER
                      ========================== */}

                      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="max-w-2xl">
                          <h3 className="text-xl font-bold leading-tight sm:text-2xl">
                            {experience.position}
                          </h3>

                          <p className="mt-2 font-semibold text-indigo-500">
                            {experience.company}
                          </p>
                        </div>

                        {/* =========================
                            PERIOD
                        ========================== */}

                        <motion.div
                          whileHover={{
                            scale: 1.03,
                          }}
                          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300"
                        >
                          <CalendarDays size={16} />

                          {experience.period}
                        </motion.div>
                      </div>

                      {/* =========================
                          LOCATION
                      ========================== */}

                      <div className="relative mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={17} />

                        {experience.location}
                      </div>

                      {/* =========================
                          BOTTOM VISUAL
                      ========================== */}

                      <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                        <div className="h-1.5 w-8 rounded-full bg-indigo-500/50" />

                        <div className="h-1.5 w-16 rounded-full bg-violet-500/30" />

                        <span className="ml-2 text-xs font-medium text-slate-400">
                          {isId
                            ? "Pengalaman Profesional"
                            : "Professional Experience"}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
