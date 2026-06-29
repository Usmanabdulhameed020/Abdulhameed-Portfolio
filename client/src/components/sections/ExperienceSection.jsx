import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <motion.div
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Experience</p>
        <div className="mt-8 grid gap-5">
          {experience.map((item, i) => (
            <motion.div
              key={item.year}
              className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[120px_1fr]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: "rgba(34,211,238,0.35)" }}
            >
              <div className="text-2xl font-black text-cyan-300">{item.year}</div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/55">{item.company}</p>
                <p className="mt-2 text-white/72">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
