"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AuroraBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {/* Aurora gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-r from-[rgb(var(--gradient-from))] to-[rgb(var(--gradient-via))] opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-[rgb(var(--gradient-via))] to-[rgb(var(--gradient-to))] opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [-50, 50, -50],
            y: [0, -50, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.6 },
            x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 30, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-[rgb(var(--gradient-to))] to-[rgb(var(--gradient-from))] opacity-15 blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
