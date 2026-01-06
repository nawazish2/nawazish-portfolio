"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { FiArrowUp } from "react-icons/fi";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = Object.values(DATA.contact.social);

  return (
    <>
      {/* Back to top button - minimalist with enhanced effects, responsive */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
          rotate: showBackToTop ? 0 : -180
        }}
        whileHover={{ scale: 1.1, y: -3, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed bottom-6 right-4 sm:bottom-10 sm:right-10 z-40 p-3 sm:p-3.5 rounded-2xl glass text-[var(--foreground)] transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Back to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <footer className="py-8 sm:py-10 border-t border-[var(--border)]/50 relative" role="contentinfo">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="font-semibold mb-2 gradient-text-animated text-lg">{DATA.name}</p>
              <p className="text-sm text-[var(--muted)]">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-xs text-[var(--muted)] mt-2">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </motion.div>

            {/* Socials */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-4"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="p-3 rounded-2xl text-[var(--muted)] hover:text-[var(--accent)] glass transition-all duration-300"
                  aria-label={`Visit ${link.name} profile (opens in new tab)`}
                >
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </div>
      </footer>
    </>
  );
}
