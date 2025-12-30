"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 2 ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </motion.div>
  );
}

