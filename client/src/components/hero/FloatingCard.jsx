import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function FloatingCard() {
  return (
    <motion.div
      className="relative w-full max-w-xl"
      initial={{ opacity: 0, scale: 0.85, rotateY: -25 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}
      style={{ transformPerspective: 1400 }}
    >
      <motion.div
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 via-transparent to-fuchsia-500/30 blur-2xl"
        animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-xl"
        animate={{ y: [0, -14, 0], rotateX: [0, 4, 0, -3, 0], rotateY: [0, -6, 0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
              <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
            ))}
          </div>
          <motion.span
            className="text-xs uppercase tracking-[0.3em] text-white/40"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            live preview
          </motion.span>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#0a1026] p-6">
          <p className="text-sm text-cyan-300">Hey — I&apos;m</p>
          <motion.h2
            className="mt-2 text-4xl font-black"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: "linear-gradient(90deg, #fff, #67e8f9, #e879f9, #fff)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </motion.h2>
          <p className="mt-3 text-white/70">{profile.tagline}. React, Node, the whole stack.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Fast", "No sluggish pages"],
              ["Bold", "Motion with purpose"],
              ["Clean", "Code you can read"],
              ["Open", "Taking new work"],
            ].map(([a, b], i) => (
              <motion.div
                key={b}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.4)" }}
              >
                <div className="text-xl font-black text-cyan-300">{a}</div>
                <div className="mt-1 text-sm text-white/60">{b}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
