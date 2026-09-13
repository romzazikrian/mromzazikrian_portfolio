"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

import {
  ExternalLink,
  Globe,
  Smartphone,
  Palette,
  Code2,
  X,
  Maximize2,
  Database,
  Map,
  Mountain,
  Utensils,
} from "lucide-react";

import { motion, AnimatePresence, type Variants } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";

// =========================================================
// TYPES
// =========================================================

type Category = "All" | "Android" | "Website" | "Design";

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  technologies: string[];
  database?: string;
  url?: string;
  github?: string;
};

// =========================================================
// ANIMATIONS
// =========================================================

const sectionAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const lineAnimation: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const filterContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const filterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
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

const projectContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const technologyContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const technologyAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// =========================================================
// PROJECT COMPONENT
// =========================================================

export default function Projects() {
  const { language } = useLanguage();
  const isId = language === "id";

  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // =======================================================
  // PROJECT DATA
  // =======================================================

  const projects: Project[] = [
    // -----------------------------------------------------
    // 1. VOLCANO ID
    // -----------------------------------------------------

    {
      id: 1,

      title: isId
        ? "VOLCANO ID - Monitoring Gunung Api"
        : "VOLCANO ID - Volcano Monitoring",

      category: "Website",

      description: isId
        ? "Platform monitoring gunung api berbasis Next.js dan Tailwind CSS yang menyajikan informasi status gunung api, aktivitas vulkanik, peta lokasi, serta data pemantauan dalam tampilan dashboard modern dan responsif."
        : "A volcano monitoring platform built with Next.js and Tailwind CSS that presents volcano statuses, volcanic activity, location maps, and monitoring data through a modern and responsive dashboard.",

      image: "/images/projects/monitoring-volcanic.png",

      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },

    {
      id: 2,

      title: isId
        ? "Perpustakaan Provinsi Lampung"
        : "Lampung Provincial Library",

      category: "Website",

      description: isId
        ? "Website perpustakaan berbasis Next.js dan Tailwind CSS yang dirancang untuk menampilkan koleksi buku, kategori bacaan, informasi ketersediaan buku, serta informasi perpustakaan Provinsi Lampung dalam antarmuka yang modern dan mudah digunakan."
        : "A library website built with Next.js and Tailwind CSS to present book collections, reading categories, book availability, and Lampung Provincial Library information through a modern and user-friendly interface.",

      image: "/images/projects/perpustakaan-lampung.png",

      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],

      database: "MongoDB",
    },

    {
      id: 3,

      title: isId
        ? "Sistem Administrasi SPPG MBG"
        : "SPPG MBG Administration System",

      category: "Website",

      description: isId
        ? "Sistem administrasi berbasis Next.js dan Tailwind CSS untuk membantu pengelolaan operasional SPPG MBG, meliputi data supplier, barang masuk, stok gudang, barang keluar, serta pencatatan inventaris melalui dashboard admin yang terstruktur."
        : "An administration system built with Next.js and Tailwind CSS to support SPPG MBG operations, including supplier data, incoming goods, warehouse stock, outgoing goods, and inventory records through a structured admin dashboard.",

      image: "/images/projects/admin-mbg.png",

      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],

      database: "PostgreSQL",
    },

    {
      id: 4,

      title: isId
        ? "Pesona Lampung - Website Pariwisata"
        : "Pesona Lampung - Tourism Website",

      category: "Website",

      description: isId
        ? "Website pariwisata Lampung berbasis Next.js, Tailwind CSS, dan Supabase yang dirancang untuk memperkenalkan destinasi wisata, pantai, gunung, air terjun, budaya, serta keindahan alam Lampung. Sistem ini mendukung pengelolaan data destinasi secara dinamis melalui Supabase."
        : "A tourism website for Lampung built with Next.js, Tailwind CSS, and Supabase to showcase tourist destinations, beaches, mountains, waterfalls, culture, and natural attractions. The system supports dynamic destination data management through Supabase.",

      image: "/images/projects/wisata-lampung.png",

      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
      ],

      database: "Supabase",
    },

    {
      id: 5,

      title: isId ? "Website GYM" : "GYM Management Website",

      category: "Website",

      description: isId
        ? "Website sistem manajemen GYM berbasis Laravel dan MySQL dengan fitur pengelolaan member, jadwal latihan, serta layanan kebugaran."
        : "A GYM management system built with Laravel and MySQL featuring member management, workout schedules, and fitness services.",

      image: "/images/projects/gym.png",

      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],

      database: "MySQL",
    },

    {
      id: 6,

      title: "Website PKBI Lampung",

      category: "Website",

      description: isId
        ? "Website organisasi PKBI Lampung berbasis Laravel dan MySQL untuk publikasi kegiatan, informasi layanan, dan pengelolaan konten digital."
        : "A Laravel and MySQL-based website for PKBI Lampung to publish activities, provide service information, and manage digital content.",

      image: "/images/projects/pkbi-lampung.png",

      technologies: ["Laravel", "PHP", "MySQL"],

      database: "MySQL",
    },

    {
      id: 7,

      title: isId
        ? "Aplikasi Sanggar Tapis Lampung"
        : "Sanggar Tapis Lampung App",

      category: "Android",

      description: isId
        ? "Aplikasi Android Sanggar Tapis Lampung yang dirancang untuk menampilkan dan memperkenalkan berbagai produk budaya khas Lampung seperti tapis, songket, souvenir, dan kerajinan."
        : "An Android application for Sanggar Tapis Lampung designed to showcase and introduce various traditional Lampung cultural products such as tapis, songket, souvenirs, and handicrafts.",

      image: "/images/projects/sanggar-tapis.png",

      technologies: ["Flutter", "Dart", "Android Studio", "Firebase"],

      database: "Firebase",
    },

    {
      id: 8,

      title: isId ? "Desain PPDB SDN 4 Way Laga" : "PPDB Design SDN 4 Way Laga",

      category: "Design",

      description: isId
        ? "Desain Canva untuk penerimaan peserta didik baru SDN 4 Way Laga dengan tampilan informatif, modern, dan mudah dipahami masyarakat."
        : "A Canva design for the new student admission process at SDN 4 Way Laga with an informative, modern, and easy-to-understand visual presentation.",

      image: "/images/projects/ppdb-sdn4-way-laga.png",

      technologies: ["Canva", "Graphic Design"],
    },
    {
      id: 9,

      title: isId
        ? "Website Resmi Desa Way Kepayang"
        : "Way Kepayang Official Village Website",

      category: "Website",

      description: isId
        ? "Website resmi Desa Way Kepayang, Pesawaran, Lampung yang dikembangkan menggunakan Next.js dan Tailwind CSS. Website ini dirancang untuk menyajikan informasi desa, profil pemerintahan, potensi lokal, layanan masyarakat, berita, galeri, agenda, serta informasi kontak secara modern, informatif, dan responsif."
        : "The official website of Way Kepayang Village, Pesawaran, Lampung, developed using Next.js and Tailwind CSS. The website presents village information, government profiles, local potential, public services, news, galleries, events, and contact information through a modern, informative, and responsive interface.",

      image: "/images/projects/way-kepayang.png",

      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ];

  const categories: {
    name: Category;
    label: string;
    icon: ReactNode;
  }[] = [
    {
      name: "All",
      label: isId ? "Semua" : "All",
      icon: <Code2 size={17} />,
    },
    {
      name: "Website",
      label: "Website",
      icon: <Globe size={17} />,
    },
    {
      name: "Android",
      label: "Android",
      icon: <Smartphone size={17} />,
    },
    {
      name: "Design",
      label: isId ? "Desain" : "Design",
      icon: <Palette size={17} />,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <>
      <motion.section
        id="projects"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      >
        {/* BACKGROUND DECORATION */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          {/* HEADING */}

          <motion.div
            variants={headingContainer}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <motion.span
              variants={headingItem}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
            >
              <Code2 size={16} />

              {isId ? "Proyek" : "Projects"}
            </motion.span>

            <motion.h2
              variants={headingItem}
              className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
            >
              {isId ? "Proyek yang Dikerjakan" : "Featured Projects"}
            </motion.h2>

            <motion.p
              variants={headingItem}
              className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
            >
              {isId
                ? "Kumpulan proyek website, aplikasi Android, dan desain yang telah saya kerjakan."
                : "A collection of websites, Android applications, and design projects I have worked on."}
            </motion.p>

            <motion.div
              variants={lineAnimation}
              className="mx-auto mt-5 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            />
          </motion.div>

          {/* CATEGORY FILTER */}

          <motion.div
            variants={filterContainer}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                variants={filterAnimation}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                  activeCategory === category.name
                    ? "border-indigo-500 bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
                }`}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* PROJECT GRID */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={projectContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={projectAnimation}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20"
                >
                  {/* TOP GRADIENT */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute left-0 right-0 top-0 z-20 h-1 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                  />

                  {/* PROJECT IMAGE */}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="relative block aspect-video w-full overflow-hidden bg-slate-100 text-left dark:bg-slate-800"
                    aria-label={
                      isId
                        ? `Lihat gambar ${project.title}`
                        : `View ${project.title} image`
                    }
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/35 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl backdrop-blur-md">
                        <Maximize2 size={20} />
                      </div>
                    </div>

                    {/* CATEGORY BADGE */}

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </button>

                  {/* CONTENT */}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}

                    <motion.div
                      variants={technologyContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          variants={technologyAnimation}
                          whileHover={{
                            y: -2,
                            scale: 1.04,
                          }}
                          className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-600 transition dark:text-indigo-300"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* DATABASE */}

                    {project.database && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Database size={14} />

                        <span>
                          <span className="font-semibold">Database:</span>{" "}
                          {project.database}
                        </span>
                      </div>
                    )}

                    {/* ACTIONS */}

                    <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
                      >
                        <Maximize2 size={16} />

                        {isId ? "Lihat Gambar" : "View Image"}
                      </button>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="py-16 text-center text-slate-500 dark:text-slate-400"
            >
              {isId
                ? "Belum ada proyek pada kategori ini."
                : "No projects available in this category."}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.88,
                y: 25,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
            >
              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-black/80"
                aria-label={isId ? "Tutup gambar" : "Close image"}
              >
                <X size={22} />
              </button>

              {/* IMAGE */}

              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* INFO */}

              <div className="border-t border-white/10 bg-slate-950 px-5 py-4 sm:px-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {selectedProject.category}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-indigo-500/15 px-2.5 py-1 text-xs font-medium text-indigo-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
