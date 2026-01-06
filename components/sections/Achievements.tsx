"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { FiAward, FiTrendingUp, FiTarget, FiExternalLink, FiCheckCircle } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

const goals = [
  { text: "Complete DSA fundamentals", icon: "🎯" },
  { text: "Build 3+ full-stack projects", icon: "🚀" },
  { text: "Contribute to open source", icon: "💻" },
  { text: "Land a tech internship", icon: "🎉" },
];

export function Achievements() {
  return (
    <section id="achievements" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-20 right-20 w-72 h-72 orb orb-cyan opacity-30" />
      <div className="absolute bottom-20 left-20 w-80 h-80 orb orb-magenta opacity-30" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 1, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[var(--cyan)] text-sm font-mono mb-4"
          >
            // progress
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text-animated">Achievements</span> & Journey
          </h2>
          <p className="section-subtitle">Tracking my progress</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* DSA Journey Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl glass-card gradient-border card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-800/20 to-cyan/5 text-[var(--cyan)]"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <FiTarget className="w-6 h-6" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl">DSA Journey</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Currently learning Data Structures and Algorithms with C++ through
              structured courses and consistent practice.
            </p>
            <motion.a
              href={DATA.externalProfiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--cyan)] hover:gap-3 transition-all font-medium"
              whileHover={{ x: 4 }}
            >
              View TakeUForward Profile
              <FiExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Learning Progress Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl glass-card gradient-border card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-magenta/20 to-neutral-300 dark:to-neutral-700/5 text-[var(--cyan)]"
                whileHover={{ rotate: -15, scale: 1.1 }}
              >
                <FiTrendingUp className="w-6 h-6" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl">Learning Progress</h3>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">DSA Fundamentals</span>
                  <span className="text-[var(--cyan)] font-mono">40%</span>
                </div>
                <div className="h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-cyan-dark rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Web Development</span>
                  <span className="text-[var(--cyan)] font-mono">55%</span>
                </div>
                <div className="h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-magenta to-neutral-300 dark:to-neutral-700-dark rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl relative overflow-hidden card-hover md:col-span-2 lg:col-span-1"
            style={{
              background: "linear-gradient(135deg, rgba(0, 255, 245, 0.08) 0%, rgba(255, 0, 255, 0.08) 100%)",
            }}
          >
            {/* Decorative line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 via-neutral-300 dark:via-neutral-700 to-cyan" />

            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-white dark:bg-neutral-800 shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FiAward className="w-6 h-6 text-[var(--cyan)]" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl">Goals for 2025</h3>
            </div>
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <motion.li
                  key={goal.text}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
                  initial={{ opacity: 1, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{goal.icon}</span>
                  <span>{goal.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* More achievements loading */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-neutral-500">More achievements loading</span>
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-magenta rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
