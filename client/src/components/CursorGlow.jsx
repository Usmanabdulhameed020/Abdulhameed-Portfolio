import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[45] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 md:block"
        style={{ left: springX, top: springY }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none fixed z-[44] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_cyan] md:block"
        style={{ left: x, top: y }}
      />
    </>
  );
}
