"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Link from "next/link";
import { GlowingButton } from "@/components/ui/glowing-button";

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="space-y-2">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Let’s build something memorable
          </h2>
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl p-8 md:p-10 surface-card"
        >
          {/* Gradient glow */}
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <h3 className="section-title text-2xl md:text-3xl">
                Let&apos;s Work Together
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind or want to collaborate? I help teams ship delightful, performant web experiences.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="chip">Fast replies</span>
                <span className="chip">Remote-friendly</span>
                <span className="chip">Open to freelance</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <GlowingButton glowColor="#4666FF" asChild>
                <a href={`mailto:${DATA.contact.email}`}>
                  Send Email
                </a>
              </GlowingButton>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  Message on X
                </Link>
              </motion.div>

              <p className="text-xs text-muted-foreground">
                Prefer LinkedIn?{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:underline"
                >
                  Connect here
                </Link>
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-tl from-primary/20 to-transparent blur-3xl"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}