"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { FiFileText, FiDownload } from "react-icons/fi";

export function Resume() {
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(DATA.resume, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = DATA.resume;
    link.download = `Nawazish_Khan_Resume.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">Resume</span>
          <h2 className="section-title">My Resume</h2>
          <p className="section-desc">Click to view or download my resume</p>
        </motion.div>

        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={handleResumeClick}
            className="card p-8 sm:p-12 cursor-pointer group hover-lift relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleResumeClick(e as any);
              }
            }}
            aria-label="Open resume"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                zIndex: 0,
              }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 mb-6 group-hover:bg-[var(--accent)]/20 transition-colors"
              >
                <FiFileText className="w-8 h-8 text-[var(--accent)]" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">View My Resume</h3>
              <p className="text-[var(--muted)] mb-6">
                Click here to open or download my resume PDF
              </p>

              <div className="flex items-center justify-center gap-4">
                <motion.button
                  onClick={handleResumeClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FiFileText className="w-4 h-4" />
                  Open Resume
                </motion.button>

                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <FiDownload className="w-4 h-4" />
                  Download
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

