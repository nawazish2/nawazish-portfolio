"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { FloatingCard } from "@/components/effects/FloatingCard";

export function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="space-y-2">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Tools I use to ship work
          </h2>
        </div>

        {/* Skills grid with floating cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {DATA.skills.map((skill, index) => (
            <FloatingCard key={skill} delay={index * 0.05} duration={6 + index * 0.3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-2xl p-4 text-center surface-card"
              >
                {/* Gradient overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                
                <span className="relative z-10 block text-sm font-semibold">
                  {skill}
                </span>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-primary to-primary/50"
                ></motion.div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}