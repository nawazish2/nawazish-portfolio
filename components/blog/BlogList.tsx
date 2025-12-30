"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight, FiEdit3 } from "react-icons/fi";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface BlogListProps {
  posts: BlogPost[];
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-[var(--cyan)] dark:hover:border-[var(--cyan)] transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Category */}
        {post.category && (
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-[var(--cyan)] mb-4">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-[var(--cyan)] transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4" />
              {post.readingTime} min read
            </span>
          </div>

          <span className="flex items-center gap-1 text-[var(--cyan)] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Read more
            <FiArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 mb-6">
        <FiEdit3 className="w-10 h-10 text-[var(--cyan)]" />
      </div>
      <h2 className="text-2xl font-heading font-bold mb-3">No Posts Yet</h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
        I&apos;m working on some amazing content. Check back soon for articles
        about my learning journey, tutorials, and tech insights!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--cyan)] hover:underline"
      >
        ← Back to Home
      </Link>
    </motion.div>
  );
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 gap-6"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </motion.div>
  );
}

