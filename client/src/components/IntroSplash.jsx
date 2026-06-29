import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState("enter");
  const doneRef = useRef(false);
  const timers = useRef([]);
  const hasImage = Boolean(profile.image?.trim());
  const nameParts = profile.name.split(" ");

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    timers.current.forEach(clearTimeout);
    document.body.style.overflow = "";
    onComplete();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    timers.current.push(setTimeout(() => setPhase("reveal"), 1200));
    timers.current.push(setTimeout(() => setPhase("exit"), 3200));
    timers.current.push(setTimeout(finish, 4200));

    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const skip = () => {
    setPhase("exit");
    timers.current.push(setTimeout(finish, 900));
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#03050f]"
      onClick={skip}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
      aria-label="Intro screen — click to enter"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{ scale: [0.8, 1.2, 1], opacity: [0.3, 0.6, 0.4] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-600/15 blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            className="absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20"
            style={{ width: 120 + ring * 80, height: 120 + ring * 80, marginLeft: -(60 + ring * 40), marginTop: -(60 + ring * 40) }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0.15] }}
            transition={{ duration: 1.2, delay: ring * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120, damping: 14 }}
        >
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 opacity-80 blur-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-1 rounded-full border-2 border-cyan-300/50"
            animate={{ rotate: -360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          />

          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white/20 bg-[#0a1026] sm:h-44 sm:w-44">
            <AnimatePresence mode="wait">
              {hasImage ? (
                <motion.img
                  key="photo"
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.4, filter: "blur(20px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              ) : (
                <motion.div
                  key="initials"
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/30 to-fuchsia-600/30 text-4xl font-black text-white sm:text-5xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {getInitials(profile.name)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-10 overflow-hidden">
          {nameParts.map((part, pi) => (
            <span key={part} className="block">
              {part.split("").map((char, ci) => (
                <motion.span
                  key={`${part}-${ci}`}
                  className="inline-block text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
                  initial={{ y: 80, opacity: 0, rotateX: 90 }}
                  animate={
                    phase === "enter"
                      ? { y: 80, opacity: 0, rotateX: 90 }
                      : { y: 0, opacity: 1, rotateX: 0 }
                  }
                  transition={{
                    delay: phase === "enter" ? 0 : 0.08 + pi * 0.12 + ci * 0.035,
                    duration: 0.55,
                    type: "spring",
                    stiffness: 220,
                  }}
                  style={{ transformPerspective: 600 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>

        <motion.p
          className="mt-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300/90 sm:text-base"
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={phase !== "enter" ? { opacity: 1, letterSpacing: "0.45em" } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-12 h-1 w-48 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 192 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            initial={{ width: "0%" }}
            animate={{ width: phase === "exit" ? "100%" : "70%" }}
            transition={{ duration: phase === "exit" ? 0.8 : 2.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-white/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {hasImage ? "Click anywhere to enter" : "Add your photo in public/profile/ → profile.js"}
        </motion.p>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[#03050f]"
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={phase === "exit" ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[#03050f]"
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={phase === "exit" ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />
    </motion.div>
  );
}
