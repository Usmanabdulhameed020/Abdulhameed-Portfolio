import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <motion.footer
      className="relative border-t border-white/10 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center">
        <motion.p
          className="text-3xl font-black sm:text-4xl"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            backgroundImage: "linear-gradient(90deg, #fff, #67e8f9, #e879f9, #fff)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </motion.p>
        <p className="text-sm text-white/40">Built by Abdulhameed🫰👌😒👌✌️.</p>
      </div>
    </motion.footer>
  );
}
