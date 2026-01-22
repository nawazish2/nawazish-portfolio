"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Image from "next/image";
import { GlowingButton } from "@/components/ui/glowing-button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
        >
          <span className="block text-muted-foreground">Hello, I'm</span>
          <span className="block">{DATA.name}</span>
          <span className="gradient-text block">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[620px] text-lg text-muted-foreground md:text-xl"
        >
          {DATA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
          <a
            href={DATA.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="chip">{DATA.location}</span>
          <span className="chip">React · Next.js</span>
          <span className="chip">Open to collaborations</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-3 pt-2"
        >
          {Object.values(DATA.contact.social).map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 transition-all hover:border-primary/60"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2.5rem] border border-border/50 bg-background/40 shadow-2xl" />
          <div className="absolute -inset-6 -rotate-2 rounded-[2.75rem] border border-border/30" />
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={640}
            height={800}
            className="relative aspect-[4/5] w-full rounded-[2.2rem] border border-border/60 object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
