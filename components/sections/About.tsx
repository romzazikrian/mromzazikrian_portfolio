"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  UserRound,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

import { profile } from "@/data/profile";
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

const highlightItem: Variants = {
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

export default function About() {
  const { language } = useLanguage();
  const isId = language === "id";
  const content = isId ? profile.about.id : profile.about.en;

  const highlights = isId
    ? [
        "Pengembangan website modern dan responsif",
        "Pengembangan aplikasi mobile",
        "IT Support dan troubleshooting",
        "Administrasi dan pengolahan data",
        "Dokumentasi dan laporan sistematis",
        "Kolaborasi serta komunikasi tim",
      ]
    : [
        "Modern and responsive website development",
        "Mobile application development",
        "IT Support and troubleshooting",
        "Administration and data processing",
        "Systematic documentation and reporting",
        "Team collaboration and communication",
      ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
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
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <UserRound size={16} />
            {content.subtitle}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
          >
            {content.title}
          </motion.h2>

          <motion.div
            variants={fadeScale}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =========================
              PROFILE CARD
          ========================== */}

          <motion.div
            variants={fadeScale}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}

            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-2xl"
            />

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20 sm:p-8"
            >
              {/* Decorative circles */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-indigo-500/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border border-blue-500/10"
              />

              {/* =========================
                  AVATAR
              ========================== */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 p-1 shadow-xl shadow-indigo-500/20 sm:h-56 sm:w-56"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 shadow-xl shadow-indigo-500/20" />

                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white dark:border-slate-900">
                    <Image
                      src="/images/foto/foto.jpg"
                      alt={profile.name}
                      fill
                      priority
                      sizes="(max-width: 640px) 176px, 208px"
                      className="object-cover object-[center_25%] transition duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* =========================
                  PROFILE NAME
              ========================== */}

              <motion.div
                variants={fadeUp}
                className="relative mt-7 text-center"
              >
                <h3 className="text-2xl font-bold">{profile.name}</h3>

                <p className="mt-2 text-sm font-medium text-indigo-500">
                  {profile.role}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {profile.secondaryRole}
                </p>
              </motion.div>

              {/* =========================
                  PROFILE DETAILS
              ========================== */}

              <motion.div
                variants={container}
                className="relative mt-7 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                {/* Education */}

                <motion.div
                  variants={highlightItem}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <GraduationCap size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {isId ? "Pendidikan" : "Education"}
                    </p>

                    <p className="font-medium">S1 Informatika</p>
                  </div>
                </motion.div>

                {/* Location */}

                <motion.div
                  variants={highlightItem}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {isId ? "Lokasi" : "Location"}
                    </p>

                    <p className="font-medium">{profile.location[language]}</p>
                  </div>
                </motion.div>

                {/* Experience */}

                <motion.div
                  variants={highlightItem}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {isId ? "Pengalaman" : "Experience"}
                    </p>

                    <p className="font-medium">
                      {isId
                        ? "Web, Mobile & IT Support"
                        : "Web, Mobile & IT Support"}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================
              ABOUT CONTENT
          ========================== */}

          <motion.div
            key={language}
            initial="hidden"
            animate="visible"
            variants={container}
            className="space-y-8"
          >
            {/* Paragraphs */}

            <motion.div
              variants={container}
              className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400"
            >
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${language}-paragraph-${index}`}
                  variants={fadeUp}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* =========================
                HIGHLIGHTS
            ========================== */}

            <motion.div
              key={`highlights-${language}`}
              initial="hidden"
              animate="visible"
              variants={container}
              className="grid gap-3 sm:grid-cols-2"
            >
              {highlights.map((highlight) => (
                <motion.div
                  key={`${language}-${highlight}`}
                  variants={highlightItem}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white/60 p-3 transition duration-300 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-indigo-500 transition duration-300 group-hover:scale-110"
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* =========================
                PERSONAL INFO
            ========================== */}

            <motion.div
              key={`info-${language}`}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 flex items-center gap-2"
              >
                <Code2 size={20} className="text-indigo-500" />

                <h3 className="font-bold">
                  {isId ? "Informasi Profil" : "Profile Information"}
                </h3>
              </motion.div>

              <motion.div
                variants={container}
                className="grid gap-4 sm:grid-cols-2"
              >
                {content.info.map((item) => (
                  <motion.div
                    key={`${language}-${item.label}`}
                    variants={highlightItem}
                    whileHover={{ x: 3 }}
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
