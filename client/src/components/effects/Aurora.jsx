import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[100px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 40, 80, 0], scale: [1, 1.2, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -50, 40, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-blue-600/20 blur-[90px]"
        animate={{ x: [0, 50, -70, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
