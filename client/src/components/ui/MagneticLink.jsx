import { useState } from "react";
import { motion } from "framer-motion";

export default function MagneticLink({ href, children, className, primary }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      className={className}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.2, y: (e.clientY - r.top - r.height / 2) * 0.2 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      whileTap={{ scale: 0.96 }}
    >
      {primary && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full bg-white/25"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
