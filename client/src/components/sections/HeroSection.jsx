import { motion, useScroll, useTransform } from "framer-motion";
import { stackTags } from "../../data/skills";
import MagneticLink from "../ui/MagneticLink";
import SplitHero from "../hero/SplitHero";
import OrbitalRings from "../hero/OrbitalRings";
import FloatingCard from "../hero/FloatingCard";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <motion.div
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-cyan-300"
              animate={{ scale: [1, 1.4, 1], boxShadow: ["0 0 0px cyan", "0 0 16px cyan", "0 0 0px cyan"] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Open for work
          </motion.div>

          <SplitHero />

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-white/72"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            I&apos;m Usman — I write React on the front, Node on the back. I like sites that feel alive without getting
            in the way. Good code, sharp design, no fluff.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <MagneticLink
              href="#projects"
              primary
              className="relative overflow-hidden rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950"
            >
              See my work
            </MagneticLink>
            <MagneticLink
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Get in touch
            </MagneticLink>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            {stackTags.map((item, i) => (
              <motion.span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.06 }}
                whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.5)", color: "rgba(255,255,255,0.9)" }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full items-center justify-center">
          <OrbitalRings />
          <FloatingCard />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
