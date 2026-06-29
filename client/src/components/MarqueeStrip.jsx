import { motion } from "framer-motion";

const items = [
  "REACT",
  "NODE.JS",
  "MOTION",
  "BUILD",
  "SHIP",
  "DESIGN",
  "CODE",
  "CREATE",
  "USMAN",
  "PORTFOLIO",
];

export default function MarqueeStrip() {
  const row = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-5">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            <span className="text-2xl font-black uppercase tracking-[0.2em] text-white/20 sm:text-3xl">
              {word}
            </span>
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i % 5) * 0.2 }}
            />
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050814] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050814] to-transparent" />
    </div>
  );
}
