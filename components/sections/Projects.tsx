"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="space-y-2">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Selected work & experiments
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all surface-card"
            >
              {/* Gradient glow on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative space-y-4">
                {/* Project header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold">
                      {project.title}
                    </h3>
                    {project.active && (
                      <span className="chip inline-flex items-center gap-2 text-primary">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                        </span>
                        Active
                      </span>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {project.dates}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="chip text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.links.map((link) => (
                    <Link
                      key={link.type}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.type === "Source" ? (
                        <FaGithub className="h-4 w-4" />
                      ) : (
                        <FaExternalLinkAlt className="h-3 w-3" />
                      )}
                      {link.type}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}