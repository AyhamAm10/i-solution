"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Code2 } from "lucide-react";
import { projects } from "@/app/data/courses";
import { useMirror } from "../store";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const UIFactory = () => {
  const selectedProject = useMirror("selectedProject");
  const setSelectedProject = useMirror("setSelectedProject");

  return (
    <div className="section-container">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          مشاريع الطلاب
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          هذه نماذج من المشاريع العملية التي ستبنيها خلال التدريب. كل مشروع مصمم لتطبيق ما تعلمته
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            className="card-premium group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Track & Level Badge */}
            <div className="mb-4 flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                project.track === "backend" 
                  ? "bg-accent/10 text-accent" 
                  : "bg-primary/10 text-primary"
              }`}>
                {project.track === "frontend" && "Frontend"}
                {project.track === "backend" && "Backend"}
                {project.track === "fullstack" && "Fullstack"}
              </span>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                المستوى {project.level}
              </span>
            </div>

            {/* Project Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <Code2 className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Title & Description */}
            <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Details Indicator */}
            <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
              <span>عرض التفاصيل</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Badge */}
              <div className="mb-4 flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                  selectedProject.track === "backend" 
                    ? "bg-accent/10 text-accent" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {selectedProject.track === "frontend" && "Frontend"}
                  {selectedProject.track === "backend" && "Backend"}
                  {selectedProject.track === "fullstack" && "Fullstack"}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
                  المستوى {selectedProject.level}
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-3 text-2xl font-bold">{selectedProject.name}</h2>

              {/* Description */}
              <p className="mb-4 text-muted-foreground">{selectedProject.description}</p>

              {/* Details */}
              <div className="mb-6 rounded-lg bg-secondary/50 p-4">
                <h3 className="mb-2 font-semibold">تفاصيل المشروع:</h3>
                <p className="text-sm text-muted-foreground">{selectedProject.details}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">التقنيات المستخدمة:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    معاينة حية
                  </a>
                )}
                {!selectedProject.githubUrl && !selectedProject.liveUrl && (
                  <p className="text-sm text-muted-foreground">
                    هذا المشروع سيتم بناؤه خلال التدريب
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { UIFactory };

