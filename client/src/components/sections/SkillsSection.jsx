import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-12">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Skills</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">What I work with day to day.</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(34,211,238,0.12)" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <span className="font-semibold text-cyan-300">{skill.level}%</span>
            </div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
