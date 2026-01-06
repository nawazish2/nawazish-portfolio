"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <div className="space-y-8 w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
              >
                <Link
                  href={project.href}
                  target="_blank"
                  className="block cursor-pointer"
                >
                  <div className="rounded-lg border bg-card text-card-foreground hover:shadow-md transition-all duration-300 ease-out h-full overflow-hidden">
                    {project.video && (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                      />
                    )}
                    {project.image && !project.video && (
                      <img
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                      />
                    )}
                    <div className="p-4">
                      <div className="space-y-1.5">
                        <div className="font-semibold tracking-tight">
                          {project.title}
                        </div>
                        <time className="font-sans text-xs">
                          {project.dates}
                        </time>
                        <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                          {project.description}
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}