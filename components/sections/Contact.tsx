"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section bg-[var(--surface)]" aria-labelledby="contact-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Contact">Contact</span>
          <h2 id="contact-heading" className="section-title">Get in Touch</h2>
          <p className="section-desc">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="w-full max-w-3xl mx-auto">
          {/* Email direct link - Modern minimalist */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-10 group"
            aria-label={`Send email to ${personalInfo.email}`}
          >
            <motion.div 
              className="p-4 rounded-2xl glass group-hover:bg-[var(--accent)]/10 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 3 }}
              aria-hidden="true"
            >
              <FiMail className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
            </motion.div>
            <div className="text-center">
              <p className="text-xs text-[var(--muted)] mb-1 font-medium uppercase tracking-wider">Email</p>
              <p className="font-semibold text-lg group-hover:text-[var(--accent)] transition-colors">{personalInfo.email}</p>
            </div>
          </motion.a>

          {/* Form - Modern minimalist design */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Contact form"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2.5 text-[var(--foreground)]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-5 py-3.5 rounded-2xl glass border transition-all duration-300 placeholder:text-[var(--muted)]/60 ${
                    errors.name 
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                      : "border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                  }`}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-500 mt-1.5" role="alert">
                    {errors.name}
                  </p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2.5 text-[var(--foreground)]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-5 py-3.5 rounded-2xl glass border transition-all duration-300 placeholder:text-[var(--muted)]/60 ${
                    errors.email 
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                      : "border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                  }`}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-500 mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="contact-message" className="block text-sm font-semibold mb-2.5 text-[var(--foreground)]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                rows={5}
                className={`w-full px-5 py-3.5 rounded-2xl glass border transition-all duration-300 resize-none placeholder:text-[var(--muted)]/60 ${
                  errors.message 
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                    : "border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-500 mt-1.5" role="alert">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary w-full mt-6"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label={status === "loading" ? "Sending message..." : status === "success" ? "Message sent successfully" : "Send contact message"}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>Sending...</>
              ) : status === "success" ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <FiAlertCircle className="w-4 h-4" />
                  Try Again
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
