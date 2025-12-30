"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMail } from "react-icons/fi";

export function Experience() {
  return (
    <section id="experience" className="section bg-[var(--surface)]" aria-labelledby="experience-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Experience">Experience</span>
          <h2 id="experience-heading" className="section-title">Professional Journey</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-[var(--surface-2)] flex items-center justify-center mx-auto mb-6 glow-on-hover"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-hidden="true"
          >
            <FiBriefcase className="w-7 h-7 text-[var(--accent)]" aria-hidden="true" />
          </motion.div>

          <h3 className="text-lg sm:text-xl font-semibold mb-3">Open to Opportunities</h3>
          
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            role="status"
            aria-live="polite"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
            <span>Available for Internships</span>
          </motion.div>

          <p className="text-[var(--muted)] mb-6 max-w-md mx-auto" style={{ lineHeight: '1.7' }}>
            I&apos;m actively looking for internship opportunities where I can contribute, 
            learn, and grow as a developer. Interested in full-stack, frontend, or backend roles.
          </p>

          <motion.a
            href="#contact"
            className="btn btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to contact section to get in touch"
          >
            <FiMail className="w-4 h-4" aria-hidden="true" />
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
