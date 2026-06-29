import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovering(false);
  };

  const hasImage = Boolean(project.image?.trim());

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: 18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.5), type: "spring", stiffness: 70 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-70" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f24]/90 backdrop-blur-xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#070b1c]">
          {hasImage ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              animate={{ scale: hovering ? 1.08 : 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-cyan-400/35 bg-cyan-400/5 p-6 text-center">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ImageIcon className="h-12 w-12 text-cyan-300/70" strokeWidth={1.2} />
              </motion.div>
              <p className="text-sm font-medium text-cyan-200/80">Drop your image here</p>
              <p className="max-w-[220px] text-xs leading-5 text-white/45">
                Put the file in <span className="text-white/65">public/projects/</span> and set the path in{" "}
                <span className="text-white/65">src/data/projects.js</span>
              </p>
            </div>
          )}

          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent"
            animate={{ opacity: hovering ? 0.5 : 0.85 }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay"
            style={{
              background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
            }}
            animate={{ x: hovering ? ["-100%", "200%"] : "-100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold tracking-[0.35em] text-white/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            <motion.span
              className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
              animate={{ boxShadow: hovering ? "0 0 24px rgba(34,211,238,0.35)" : "0 0 0px transparent" }}
            >
              {project.title === "Project name here" ? "Your slot" : "Built by Abdulhameed"}
            </motion.span>
          </div>

          <h3 className="mt-4 text-2xl font-black tracking-tight">{project.title}</h3>
          <p className="mt-3 text-[15px] leading-7 text-white/72">{project.description}</p>

          {project.tech?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:scale-105"
              >
                Live site
              </a>
            ) : (
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/40">Live link — add in projects.js</span>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                GitHub
              </a>
            ) : (
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/40">GitHub — add in projects.js</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
