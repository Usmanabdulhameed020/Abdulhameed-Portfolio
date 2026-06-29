import { motion, useScroll, useTransform } from "framer-motion";

const shapes = [
  { className: "left-[8%] top-[18%] h-16 w-16 border-cyan-400/40", rotate: 45, delay: 0 },
  { className: "right-[12%] top-[28%] h-12 w-12 rounded-full border-fuchsia-400/40", rotate: 0, delay: 0.5 },
  { className: "left-[15%] bottom-[22%] h-10 w-10 border-blue-400/40", rotate: 12, delay: 1 },
  { className: "right-[8%] bottom-[30%] h-20 w-20 rounded-full border-cyan-300/25", rotate: 0, delay: 1.2 },
  { className: "left-[45%] top-[12%] h-8 w-8 border-white/20", rotate: 30, delay: 0.8 },
];

export default function FloatingShapes() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" style={{ y }}>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute border-2 ${s.className}`}
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 12, -8, 0],
            rotate: [s.rotate, s.rotate + 20, s.rotate - 10, s.rotate],
            opacity: [0.3, 0.7, 0.4, 0.3],
          }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}
    </motion.div>
  );
}
