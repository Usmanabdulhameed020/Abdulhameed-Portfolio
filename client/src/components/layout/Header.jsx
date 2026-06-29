import { useState } from "react";
import { motion } from "framer-motion";
import { nav } from "../../data/nav";
import { profile } from "../../data/profile";
import MagneticLink from "../ui/MagneticLink";

export default function Header() {
  const [active, setActive] = useState("home");

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <motion.div
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.15em] backdrop-blur-xl"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34,211,238,0.2)" }}
        >
          {profile.name}
        </motion.div>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl md:flex">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                active === id ? "text-slate-950" : "text-white/80 hover:text-white"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-cyan-400"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </nav>

        <MagneticLink
          href="#contact"
          className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-xl"
        >
          Hire me
        </MagneticLink>
      </div>
    </motion.header>
  );
}
