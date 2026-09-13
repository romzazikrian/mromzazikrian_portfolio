"use client";

import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Wrench,
  Cloud,
  Lightbulb,
  Video,
} from "lucide-react";

import {
  SiLaravel,
  SiNextdotjs,
  SiBootstrap,
  SiAstro,
  SiReact,
  SiCodeigniter,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiFirebase,
  SiPrisma,
  SiSupabase,
  SiFlutter,
  SiKotlin,
  SiGithub,
  SiVercel,
  SiHostinger,
  SiNetlify,
  SiRender,
  SiFigma,
  SiCanvas,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  FaWindows,
  FaLinux,
  FaMicrosoft,
  FaScrewdriverWrench,
  FaLaptopCode,
  FaPeopleGroup,
  FaUserCheck,
  FaLightbulb,
  FaComments,
} from "react-icons/fa6";

import { motion, type Variants } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

/* =========================================================
   SLOW ENTRANCE ANIMATIONS
========================================================= */

const sectionAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const headingItem: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const skillContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
};

const skillAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const lineAnimation: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.35,
    },
  },
};

export default function Skills() {
  const { language } = useLanguage();
  const isId = language === "id";

  const skillGroups: SkillGroup[] = [
    // =====================================================
    // FULL STACK WEB DEVELOPER
    // =====================================================
    {
      title: "Full Stack Web Developer",
      icon: <Code2 size={24} />,
      skills: [
        { name: "Laravel", icon: SiLaravel },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Astro", icon: SiAstro },
        { name: "React", icon: SiReact },
        { name: "CodeIgniter", icon: SiCodeigniter },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },

    // =====================================================
    // PROGRAMMING LANGUAGES
    // =====================================================
    {
      title: isId ? "Bahasa Pemrograman" : "Programming Languages",
      icon: <Code2 size={24} />,
      skills: [
        { name: "PHP", icon: SiPhp },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: SiOpenjdk },
      ],
    },

    // =====================================================
    // DATABASE & ORM
    // =====================================================
    {
      title: "Database & ORM",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
        { name: "Prisma", icon: SiPrisma },
        { name: "Supabase", icon: SiSupabase },
      ],
    },

    // =====================================================
    // MOBILE DEVELOPER
    // =====================================================
    {
      title: "Mobile Developer",
      icon: <Smartphone size={24} />,
      skills: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Java", icon: SiOpenjdk },
        { name: "Kotlin", icon: SiKotlin },
      ],
    },

    // =====================================================
    // IT SUPPORT & TROUBLESHOOTING
    // =====================================================
    {
      title: "IT Support & Troubleshooting",
      icon: <Wrench size={24} />,
      skills: [
        {
          name: "Hardware Troubleshooting",
          icon: FaScrewdriverWrench,
        },
        {
          name: "Software Troubleshooting",
          icon: FaLaptopCode,
        },
        {
          name: "Computer Maintenance",
          icon: Wrench,
        },
        {
          name: "Technical Problem Solving",
          icon: Wrench,
        },
        {
          name: "IT Support",
          icon: FaLaptopCode,
        },
      ],
    },

    // =====================================================
    // CLOUD INFRASTRUCTURE
    // =====================================================
    {
      title: "Cloud Infrastructure, Development & Operations",
      icon: <Cloud size={24} />,
      skills: [
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Hostinger", icon: SiHostinger },
        { name: "Netlify", icon: SiNetlify },
        { name: "Render", icon: SiRender },
        { name: "Windows", icon: FaWindows },
        { name: "Linux", icon: FaLinux },
      ],
    },

    // =====================================================
    // SOFTWARE & DEVELOPMENT TOOLS
    // =====================================================
    {
      title: "Software & Development Tools",
      icon: <Palette size={24} />,
      skills: [
        { name: "Visual Studio Code", icon: VscVscode },
        { name: "GitHub", icon: SiGithub },
        { name: "Figma", icon: SiFigma },
        { name: "Canva", icon: SiCanvas },
        { name: "Photoshop", icon: Palette },
        { name: "Premiere Pro", icon: Video },
        { name: "Microsoft Office", icon: FaMicrosoft },
        { name: "SQLyog", icon: Database },
      ],
    },

    // =====================================================
    // SOFT SKILLS
    // =====================================================
    {
      title: "Soft Skills",
      icon: <Lightbulb size={24} />,
      skills: [
        { name: "Teamwork", icon: FaPeopleGroup },
        { name: "Responsible", icon: FaUserCheck },
        { name: "Adaptive", icon: FaLightbulb },
        { name: "Disciplined", icon: FaUserCheck },
        { name: "Creative", icon: FaLightbulb },
        { name: "Proactive", icon: FaLaptopCode },
        { name: "Detail Oriented", icon: FaUserCheck },
        { name: "Problem Solving", icon: Wrench },
        { name: "Independent", icon: FaUserCheck },
        { name: "Team Player", icon: FaComments },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          variants={headingContainer}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.span
            variants={headingItem}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <Code2 size={16} />

            {isId ? "Keahlian" : "Skills"}
          </motion.span>

          <motion.h2
            variants={headingItem}
            className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
          >
            {isId ? "Keahlian & Teknologi" : "Skills & Technologies"}
          </motion.h2>

          <motion.p
            variants={headingItem}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
          >
            {isId
              ? "Teknologi, tools, dan kemampuan yang saya gunakan dalam pengembangan proyek."
              : "Technologies, tools, and abilities I use in my projects."}
          </motion.p>

          <motion.div
            variants={lineAnimation}
            className="mx-auto mt-5 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* =====================================================
            SKILL GROUPS
        ====================================================== */}

        <motion.div
          variants={cardContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardAnimation}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-950/5 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 sm:p-7"
            >
              {/* Top Glow Line */}

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
              />

              {/* Category */}

              <motion.div className="flex items-center gap-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-all duration-500 group-hover:bg-indigo-500/20"
                >
                  {group.icon}
                </motion.div>

                <h3 className="font-bold sm:text-lg">{group.title}</h3>
              </motion.div>

              {/* =================================================
                  SKILLS
              ================================================== */}

              <motion.div
                variants={skillContainer}
                className="mt-6 flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillAnimation}
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      className="group/skill flex cursor-default items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                    >
                      <Icon
                        size={19}
                        className="shrink-0 transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-6"
                      />

                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
