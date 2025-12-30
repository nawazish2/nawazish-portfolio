"use client";

import { motion } from "framer-motion";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

// TODO: Replace with your actual projects
// Add: image, githubUrl, liveUrl, metrics, challenges, solutions
const projects = [
  {
    title: "Project One",
    description: "A full-stack web application showcasing modern development practices and clean architecture.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "coming-soon",
    // Add these fields when you have real projects:
    // image: "/projects/project1.png",
    // githubUrl: "https://github.com/...",
    // liveUrl: "https://project1.com",
    // metrics: "10k+ users",
    // challenges: "Scalability issues",
    // solutions: "Implemented caching layer"
  },
  {
    title: "Project Two", 
    description: "An innovative solution built with cutting-edge technologies and best practices.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "coming-soon"
  },
  {
    title: "Project Three",
    description: "A creative project demonstrating problem-solving skills and technical expertise.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    status: "coming-soon"
  }
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  metrics?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card p-6 sm:p-7 lg:p-8 hover-lift group relative overflow-hidden"
    >
      {/* Enhanced gradient overlay with shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/3 via-[var(--accent-light)]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none" />
      
      <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <motion.div 
          className="p-3 rounded-2xl glass group-hover:bg-[var(--accent)]/10 transition-all duration-300"
          whileHover={{ rotate: 3, scale: 1.05 }}
        >
          <FiFolder className="w-6 h-6 text-[var(--accent)]" />
        </motion.div>
        <div className="flex gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
          <a 
            href={project.githubUrl || "#"} 
            onClick={(e) => project.status === "coming-soon" && e.preventDefault()}
            aria-label={`View ${project.title} on GitHub`}
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a 
            href={project.liveUrl || "#"} 
            onClick={(e) => project.status === "coming-soon" && e.preventDefault()}
            aria-label={`View ${project.title} live demo`}
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors tracking-tight">
        {project.title}
      </h3>
      {project.metrics && (
        <p className="text-xs text-[var(--accent)] font-medium mb-2">{project.metrics}</p>
      )}
      
      <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed" style={{ lineHeight: '1.7' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2.5 mb-6">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.05 }}
            className="text-xs px-3 py-1.5 rounded-full glass text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {project.status === "coming-soon" && (
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
          aria-label="Project status: Coming soon"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden="true"
          />
          <span className="text-xs text-[var(--muted)] font-medium">Coming Soon</span>
        </motion.div>
      )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label" aria-label="Section label: Projects">Projects</span>
          <h2 id="projects-heading" className="section-title">What I&apos;m Building</h2>
          <p className="section-desc">
            Exciting projects in development. Stay tuned for updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6" role="list" aria-label="Project showcase">
          {projects.map((project, index) => (
            <div key={project.title} role="listitem">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
