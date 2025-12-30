"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Open resume in new tab - browser will handle download/view
    window.open(personalInfo.resume, '_blank', 'noopener,noreferrer');
  };

  const handleClick = (href: string) => {
    setMobileOpen(false);
    
    // Special handling for resume - download instead of scroll
    if (href === "#resume") {
      handleDownloadResume();
      return;
    }
    
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Nav */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled ? "glass border-b border-[var(--border)]/50" : ""
        }`}
        role="banner"
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
              className="font-bold text-xl gradient-text-animated tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`${personalInfo.name} - Go to homepage`}
            >
              {personalInfo.name.split(" ")[0]}
            </motion.a>

            {/* Links - Responsive */}
            <ul className="flex items-center gap-1 lg:gap-2 list-none" role="list">
              {navLinks.slice(1).map((link) => (
                <li key={link.name} role="listitem">
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    className={`px-2 lg:px-4 xl:px-5 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-medium transition-all duration-300 relative min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                    aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    <span className="hidden xl:inline">{link.name}</span>
                    <span className="xl:hidden">{link.name.split(' ')[0]}</span>
                    {activeSection === link.href.replace("#", "") && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 glass rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Theme */}
            <ThemeToggle />
          </nav>
        </div>
      </motion.header>

      {/* Mobile Nav - Enhanced for touch */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled || mobileOpen ? "glass border-b border-[var(--border)]/50" : ""
        }`}
        role="banner"
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-5">
          <a 
            href="#home" 
            className="font-bold text-base sm:text-lg gradient-text-animated min-h-[44px] min-w-[44px] flex items-center"
            aria-label={`${personalInfo.name} - Go to homepage`}
          >
            {personalInfo.name.split(" ")[0]}
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-xl hover:bg-[var(--surface)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FiX className="w-6 h-6" aria-hidden="true" /> : <FiMenu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass pt-16 md:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8" aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-6 sm:gap-8 list-none" role="list">
                {navLinks.map((link) => (
                  <li key={link.name} role="listitem" className="w-full">
                    <motion.a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-xl sm:text-2xl font-medium transition-all duration-300 min-h-[48px] flex items-center justify-center w-full ${
                        activeSection === link.href.replace("#", "")
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                      aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                      aria-label={`Navigate to ${link.name} section`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
