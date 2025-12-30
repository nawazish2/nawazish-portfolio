"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <span className="text-xl font-bold text-white">NK</span>
      </div>
    );
  }

  return (
    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[var(--border)] ring-offset-2 ring-offset-[var(--background)]" role="img" aria-label={`${personalInfo.name} profile picture`}>
      <Image
        src={personalInfo.avatar}
        alt={`${personalInfo.name} - ${personalInfo.role}`}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="80px"
        priority={false}
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: About">About</span>
          <h2 id="about-heading" className="section-title">Get to know me</h2>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Avatar />
            </motion.div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text-animated tracking-tight">{personalInfo.name}</h3>
              <p className="text-[var(--accent)] font-medium mb-3 text-lg">{personalInfo.role}</p>
              <motion.div
                className="flex items-center justify-center sm:justify-start gap-2.5 text-sm text-[var(--muted)] mb-6"
                whileHover={{ scale: 1.01 }}
                role="status"
                aria-live="polite"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  aria-hidden="true"
                />
                <span>Available for opportunities</span>
              </motion.div>
              <p className="text-[var(--muted)] leading-relaxed text-base sm:text-lg" style={{ lineHeight: '1.8' }}>
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
