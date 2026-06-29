import { motion } from "framer-motion";
import SocialLinks from "../SocialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Got a project? Say hi.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/72">
            Portfolio, shop, dashboard, whatever — tell me what you need and we&apos;ll figure out if I&apos;m the right
            fit. No pressure, no sales pitch.
          </p>

          <form className="mt-8 grid gap-4">
            <input
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400/50 placeholder:text-white/35"
              placeholder="Your name"
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400/50 placeholder:text-white/35"
              placeholder="Your email"
            />
            <textarea
              rows="5"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400/50 placeholder:text-white/35"
              placeholder="What's the project?"
            />
            <motion.button
              type="button"
              className="relative overflow-hidden rounded-2xl bg-cyan-400 px-5 py-4 font-bold text-slate-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">Why me</div>
          <ul className="mt-6 space-y-4 text-white/75">
            <li>— I reply. Sounds basic, but it matters.</li>
            <li>— Motion that serves the design, not noise for noise&apos;s sake.</li>
            <li>— React, Node, Mongo — I know the stack end to end.</li>
            <li>— I finish what I start.</li>
          </ul>

          <div className="mt-8 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/8 p-5">
            <div className="font-semibold text-cyan-300">Email</div>
            <div className="mt-1 text-white/85">usmanabdulhameed020@gmail.com</div>
            <div className="mt-4 font-semibold text-cyan-300">Based in</div>
            <div className="mt-1 text-white/85">Ilorin, Nigeria</div>
          </div>

          <div className="mt-8">
            <SocialLinks title="Social links" variant="grid" size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
