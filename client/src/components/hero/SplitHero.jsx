import { motion } from "framer-motion";

const heroWords = ["websites", "that", "actually", "move."];

export default function SplitHero() {
  return (
    <h1 className="max-w-4xl text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
      <span className="block overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "110%", rotateX: 40 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          I build{" "}
        </motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ y: "110%", rotateX: 40 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          wild
        </motion.span>
      </span>
      <span className="mt-1 block">
        {heroWords.map((word, i) => (
          <motion.span
            key={word}
            className="mr-[0.28em] inline-block"
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
