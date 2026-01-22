"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="space-y-2">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Places I've built with
          </h2>
        </div>

        {DATA.work.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl p-8 text-center surface-card"
          >
            <div className="space-y-2">
              <p className="font-medium text-muted-foreground">
                Currently seeking opportunities
              </p>
              <p className="text-sm text-muted-foreground/80">
                Open to internships and full-time positions
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {DATA.work.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <Link
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl p-5 transition-all surface-card">
                    {/* Accent line on left */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {work.logoUrl && (
                          <div className="mt-1 flex-shrink-0">
                            <Image
                              src={work.logoUrl}
                              alt={work.company}
                              width={40}
                              height={40}
                              className="size-10 rounded-lg border border-border/50"
                            />
                          </div>
                        )}
                        <div className="space-y-1">
                          <h3 className="font-heading text-lg font-semibold">
                            {work.company}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground">
                            {work.title}
                          </p>
                          {work.description && (
                            <p className="text-sm text-muted-foreground/80">
                              {work.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="chip text-muted-foreground">
                          {work.start} - {work.end}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}