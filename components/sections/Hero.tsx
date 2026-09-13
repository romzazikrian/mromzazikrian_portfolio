"use client";

import {
  ArrowDownToLine,
  ArrowRight,
  Code2,
  Database,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
    scale: 0.85,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const floatingIcon: Variants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16"
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-blue-600/15 blur-3xl sm:h-96 sm:w-96"
        />

        {/* Violet Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
          className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-violet-600/15 blur-3xl"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* =========================
            TEXT CONTENT
        ========================== */}
        <div className="text-center lg:text-left">
          {/* Welcome Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-300"
          >
            <Sparkles size={16} className="animate-pulse" />

            {isId
              ? "Selamat datang di portfolio saya"
              : "Welcome to my portfolio"}
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            className="mb-3 text-base font-medium text-slate-500 dark:text-slate-400"
          >
            {isId ? "Halo, saya" : "Hello, I'm"}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-black leading-tight tracking-tight sm:text-4xl xl:text-6xl"
          >
            <span className="text-slate-900 dark:text-white">M. Romza </span>

            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Zikrian
            </span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-base font-semibold sm:text-lg lg:justify-start"
          >
            <span className="text-blue-500">
              Full Stack Web & Mobile Developer
            </span>

            <span className="hidden text-slate-400 sm:inline">|</span>

            <span className="text-violet-500">IT Support</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400"
          >
            {isId
              ? "Lulusan S1 Informatika Universitas Teknokrat Indonesia dengan pengalaman di bidang pengembangan website, aplikasi mobile, dan IT Support. Memiliki kemampuan dalam membangun solusi digital yang modern, responsif, dan sesuai dengan kebutuhan pengguna, serta didukung kemampuan administrasi, pengolahan data, dan pemecahan masalah teknis."
              : "An Informatics graduate from Universitas Teknokrat Indonesia with experience in web development, mobile application development, and IT Support. Skilled in building modern, responsive, and user-focused digital solutions, supported by strong capabilities in administration, data management, and technical problem-solving."}
          </motion.p>

          {/* =========================
              BUTTONS
          ========================== */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:shadow-indigo-500/40"
            >
              {isId ? "Lihat Proyek" : "View Projects"}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/cv/romza-cv.pdf"
              download
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ArrowDownToLine size={18} />

              {isId ? "Download CV" : "Download CV"}
            </motion.a>
          </motion.div>

          {/* =========================
              SOCIAL MEDIA
          ========================== */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            {/* Instagram */}
            <motion.a
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-pink-500 hover:text-pink-500 dark:border-slate-700 dark:text-slate-300"
            >
              <FaInstagram size={18} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            >
              <FaGithub size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* =========================
            PROFILE VISUAL
        ========================== */}
        <motion.div
          variants={fadeScale}
          className="relative mx-auto flex w-full max-w-lg items-center justify-center"
        >
          {/* Main Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96"
          />

          <div className="relative flex aspect-square w-full max-w-[460px] items-center justify-center">
            {/* =========================
                OUTER ROTATING RING
            ========================== */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-full border border-dashed border-indigo-500/40"
            />

            {/* =========================
                INNER ROTATING RING
            ========================== */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-10 rounded-full border border-blue-500/20"
            />

            {/* =========================
                3D DEVELOPER IMAGE
            ========================== */}
            <motion.div
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[92%]"
            >
              <motion.img
                src="/images/developer-3d.png"
                alt="3D Developer Workspace"
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="w-full object-contain drop-shadow-[0_25px_45px_rgba(79,70,229,0.35)]"
              />
            </motion.div>

            {/* =========================
                FLOATING CODE ICON
            ========================== */}
            <motion.div
              variants={floatingIcon}
              animate="animate"
              className="absolute left-0 top-[22%] flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-900/90 text-blue-400 shadow-xl shadow-blue-500/20"
            >
              <Code2 size={25} />
            </motion.div>

            {/* =========================
                FLOATING DATABASE ICON
            ========================== */}
            <motion.div
              animate={{
                y: [0, -16, 0],
                rotate: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-0 top-[18%] flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-slate-900/90 text-violet-400 shadow-xl shadow-violet-500/20"
            >
              <Database size={25} />
            </motion.div>

            {/* =========================
                FLOATING MOBILE ICON
            ========================== */}
            <motion.div
              animate={{
                y: [0, -13, 0],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-[18%] left-[3%] flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/90 text-cyan-400 shadow-xl shadow-cyan-500/20"
            >
              <Smartphone size={25} />
            </motion.div>

            {/* =========================
                SPARKLE ICON
            ========================== */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 8, 0, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute bottom-[10%] right-[6%] flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/20 text-indigo-300 shadow-lg shadow-indigo-500/20"
            >
              <Sparkles size={21} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
