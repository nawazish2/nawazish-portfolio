"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { FiBook } from "react-icons/fi";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Education">Education</span>
          <h2 id="education-heading" className="section-title">Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <motion.div 
              className="p-3 rounded-xl bg-[var(--surface-2)] shrink-0 glow-on-hover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-hidden="true"
            >
              <FiBook className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">{education.university}</h3>
                  <p className="text-sm text-[var(--muted)]">{education.shortName}</p>
                </div>
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                  role="status"
                  aria-label={`Status: ${education.status}`}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  {education.status}
                </motion.span>
              </div>

              <p className="font-medium mb-1">{education.degree}</p>
              <p className="text-[var(--muted)] text-sm mb-3">{education.branch}</p>
              
              <p className="text-sm text-[var(--muted)]">{education.duration}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
