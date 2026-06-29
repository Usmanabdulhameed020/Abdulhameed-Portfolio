import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
      style={{ scaleX }}
    />
  );
}
