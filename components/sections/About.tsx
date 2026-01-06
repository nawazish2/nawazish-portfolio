"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Markdown from "react-markdown";

export function About() {
  return (
    <section id="about" className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold">About</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-full text-pretty text-muted-foreground">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </motion.div>
    </section>
  );
}