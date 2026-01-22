"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Markdown from "react-markdown";

export function About() {
  return (
    <section id="about" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header with accent line */}
        <div className="space-y-2">
          <p className="section-kicker">About</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Building thoughtful digital experiences
          </h2>
        </div>

        {/* Content with glassmorphic card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl p-6 md:p-8 surface-card"
        >
          {/* Subtle glow on hover */}
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          
          <div className="prose prose-neutral relative dark:prose-invert max-w-full text-pretty text-muted-foreground prose-p:leading-relaxed">
            <Markdown>{DATA.summary}</Markdown>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl transition-transform duration-500 group-hover:translate-x-12 group-hover:-translate-y-12"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
