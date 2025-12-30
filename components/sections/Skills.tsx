"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = ["Languages", "Frontend", "Backend", "Tools"];

export function Skills() {
  return (
    <section id="skills" className="section bg-[var(--surface)]" aria-labelledby="skills-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Skills">Skills</span>
          <h2 id="skills-heading" className="section-title">What I Work With</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Technical skills by category">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                role="listitem"
              >
                <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-widest mb-6" id={`skills-${category.toLowerCase()}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3" role="list" aria-labelledby={`skills-${category.toLowerCase()}`}>
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="tag hover-lift cursor-default"
                      whileHover={{ scale: 1.08, y: -3, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      role="listitem"
                      aria-label={`${skill.name} skill`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        aria-hidden="true"
                      >
                        <skill.icon className="w-4 h-4" style={{ color: skill.color }} aria-hidden="true" />
                      </motion.div>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
