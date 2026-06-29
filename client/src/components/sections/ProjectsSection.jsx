import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Projects</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Stuff I&apos;ve built</h2>
        <p className="mt-3 text-sm text-white/45">
          {projects.length} project{projects.length !== 1 ? "s" : ""} — add more in{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200/80">src/data/projects.js</code>
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {projects.map((project, idx) => (
            <ProjectCard key={`${project.title}-${idx}`} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
