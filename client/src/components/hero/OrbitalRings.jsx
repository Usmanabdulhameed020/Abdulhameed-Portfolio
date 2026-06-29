import { motion } from "framer-motion";

export default function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-cyan-400/20"
          style={{ width: 280 + ring * 90, height: 280 + ring * 90 }}
          animate={{ rotate: ring % 2 ? 360 : -360, scale: [1, 1.03, 1] }}
          transition={{
            rotate: { duration: 18 + ring * 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 4 + ring, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_20px_#e879f9]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 0px" }}
      />
    </div>
  );
}
