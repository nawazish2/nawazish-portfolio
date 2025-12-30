"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiEdit3 } from "react-icons/fi";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface BlogPreviewProps {
  posts: BlogPost[];
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} aria-label={`Read blog post: ${post.title}`}>
      <motion.article
        whileHover={{ y: -4 }}
        className="card p-5 h-full hover-lift group glow-on-hover relative overflow-hidden"
        role="article"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          {post.category && (
            <span className="tag text-xs mb-3">{post.category}</span>
          )}
          <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--muted)] mb-3 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="card p-8 text-center">
      <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] flex items-center justify-center mx-auto mb-4">
        <FiEdit3 className="w-5 h-5 text-[var(--accent)]" />
      </div>
      <h3 className="font-semibold mb-2">Coming Soon</h3>
      <p className="text-sm text-[var(--muted)]">
        Blog posts about my learning journey will appear here.
      </p>
    </div>
  );
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const hasPosts = posts && posts.length > 0;

  return (
    <section id="blog" className="section" aria-labelledby="blog-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Blog">Blog</span>
          <h2 id="blog-heading" className="section-title">Latest Posts</h2>
        </motion.div>

        {hasPosts ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:gap-3 transition-all"
                aria-label="View all blog posts"
              >
                View all posts
                <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
