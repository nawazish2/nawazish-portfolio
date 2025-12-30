"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiTwitter, FiLinkedin, FiLink } from "react-icons/fi";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

interface PostContentProps {
  post: BlogPost;
  contentHtml: string;
}

export function PostContent({ post, contentHtml }: PostContentProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out "${post.title}" by Nawazish Khan`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  return (
    <article className="max-w-3xl mx-auto px-4">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 1, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-[var(--cyan)] transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        {/* Category */}
        {post.category && (
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-[var(--cyan)] mb-4">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 mb-6">
          <span className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-2">
            <FiClock className="w-4 h-4" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-500 mr-2">Share:</span>
          <button
            onClick={shareOnTwitter}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-[var(--cyan)] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Share on Twitter"
          >
            <FiTwitter className="w-4 h-4" />
          </button>
          <button
            onClick={shareOnLinkedIn}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-[var(--cyan)] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </button>
          <button
            onClick={copyLink}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-[var(--cyan)] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Copy link"
          >
            {copied ? (
              <span className="text-xs text-green-500">Copied!</span>
            ) : (
              <FiLink className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--cyan)] hover:underline"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <FiShare2 className="w-4 h-4" />
            Enjoyed this post? Share it!
          </div>
        </div>
      </motion.footer>
    </article>
  );
}

