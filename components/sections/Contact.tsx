"use client";

import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";

import { motion, type Variants } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";

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

const lineAnimation: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const iconAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <motion.section
      id="contact"
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

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
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
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          variants={headingContainer}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {/* Badge */}

          <motion.span
            variants={headingItem}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <Send size={16} />

            {isId ? "Kontak" : "Contact"}
          </motion.span>

          {/* Title */}

          <motion.h2
            variants={headingItem}
            className="mt-5 text-3xl font-black tracking-tight sm:text-5xl"
          >
            {isId ? "Hubungi Saya" : "Get In Touch"}
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={headingItem}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
          >
            {isId
              ? "Silakan hubungi saya untuk peluang kerja, kolaborasi, atau kebutuhan lainnya."
              : "Feel free to contact me for job opportunities, collaborations, or other inquiries."}
          </motion.p>

          {/* Gradient Line */}

          <motion.div
            variants={lineAnimation}
            className="mx-auto mt-5 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}

        <motion.div
          variants={cardsContainer}
          className="grid gap-5 sm:grid-cols-2"
        >
          {/* ===================================================
              LOCATION
          ==================================================== */}

          <motion.div
            variants={cardAnimation}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-950/5 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
          >
            {/* Top Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-500 to-blue-500"
            />

            <div className="flex items-center gap-4">
              <motion.div
                variants={iconAnimation}
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-colors duration-300 group-hover:bg-indigo-500/20"
              >
                <MapPin size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {isId ? "Lokasi" : "Location"}
                </p>

                <p className="mt-1 font-semibold">
                  Bandar Lampung, Lampung, Indonesia
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              PHONE
          ==================================================== */}

          <motion.div
            variants={cardAnimation}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-950/5 transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
          >
            {/* Top Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-blue-500 to-cyan-500"
            />

            <div className="flex items-center gap-4">
              <motion.div
                variants={iconAnimation}
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500/20"
              >
                <Phone size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {isId ? "Nomor HP" : "Phone"}
                </p>

                <a
                  href="tel:+6285835488425"
                  className="mt-1 block font-semibold transition hover:text-blue-500"
                >
                  +62 858-3548-8425
                </a>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              WHATSAPP
          ==================================================== */}

          <motion.div
            variants={cardAnimation}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-950/5 transition-all duration-500 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
          >
            {/* Top Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-green-500 to-emerald-500"
            />

            <div className="flex items-center gap-4">
              <motion.div
                variants={iconAnimation}
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500 transition-colors duration-300 group-hover:bg-green-500/20"
              >
                <MessageCircle size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/6288747607844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold transition hover:text-green-500"
                >
                  +62 887-4760-7844
                </a>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              EMAIL
          ==================================================== */}

          <motion.div
            variants={cardAnimation}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-950/5 transition-all duration-500 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
          >
            {/* Top Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />

            <div className="flex items-center gap-4">
              <motion.div
                variants={iconAnimation}
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 transition-colors duration-300 group-hover:bg-violet-500/20"
              >
                <Mail size={22} />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:romzazikrianmuhammad@gmail.com"
                  className="mt-1 block break-all font-semibold transition hover:text-violet-500"
                >
                  romzazikrianmuhammad@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
