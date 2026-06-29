import { motion } from "framer-motion";
import { aboutStack } from "../../data/skills";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24">
      <motion.div
        className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">I care how things look and how they run.</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/72">
            Most of my work is React and Node — landing pages, dashboards, full apps. I spend time on animation because
            it&apos;s the difference between &quot;fine&quot; and &quot;wait, that&apos;s nice.&quot; I also keep things
            fast. Pretty means nothing if it loads like mud.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">Stack</div>
          <div className="mt-5 flex flex-wrap gap-3">
            {aboutStack.map((s, i) => (
              <motion.span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(34,211,238,0.12)" }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
