"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks, rotatingTitles } from "@/lib/data";
import { FiArrowRight, FiMail, FiArrowDown } from "react-icons/fi";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Enhanced background gradient with parallax effect - Responsive */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[var(--accent)]/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-pulse animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-[var(--accent-light)]/5 rounded-full blur-[70px] sm:blur-[90px] lg:blur-[100px] animate-pulse animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
        {/* Additional gradient layer for depth - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-[var(--accent)]/3 via-transparent to-[var(--accent-light)]/3 rounded-full blur-[100px] lg:blur-[150px] animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Status - cleaner design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--border)] glass mb-8"
            role="status"
            aria-live="polite"
          >
            <motion.span
              className="status-dot"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
            <span className="text-sm text-[var(--muted)] font-medium">Available for opportunities</span>
          </motion.div>

          {/* Name with enhanced animation */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.75rem, 9vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
          >
            <motion.span 
              className="gradient-text-animated inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          {/* Role - Rotating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            aria-live="polite"
            aria-atomic="true"
          >
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[var(--muted)] font-medium"
              style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', letterSpacing: '-0.01em' }}
            >
              {rotatingTitles[titleIndex]}
            </motion.p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[var(--muted)] mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2.8vw, 1.25rem)', lineHeight: '1.7' }}
          >
            3rd-year Computer Science student passionate about building 
            <span className="text-[var(--foreground)]"> modern web applications</span> and 
            solving complex problems with clean code.
          </motion.p>

          {/* CTAs - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 w-full max-w-md sm:max-w-none mx-auto"
          >
            <a href="#projects" className="btn btn-primary w-full sm:w-auto" aria-label="Navigate to projects section">
              View Projects
              <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary w-full sm:w-auto" aria-label="Navigate to contact section">
              <FiMail className="w-4 h-4" aria-hidden="true" />
              Get in Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-5"
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-2xl text-[var(--muted)] hover:text-[var(--accent)] glass transition-all duration-300"
                aria-label={`Visit ${link.name} profile (opens in new tab)`}
              >
                <link.icon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </div>

      {/* Scroll indicator - minimalist */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--muted)] opacity-60"
        >
          <FiArrowDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
