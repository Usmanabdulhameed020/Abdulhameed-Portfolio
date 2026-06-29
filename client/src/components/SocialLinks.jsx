import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "../data/socialLinks";

const icons = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  github: FaGithub,
  twitter: FaXTwitter,
};

const colors = {
  facebook: "#1877F2",
  linkedin: "#0A66C2",
  instagram: "#E4405F",
  github: "#f0f6fc",
  twitter: "#1DA1F2",
};

function SocialIcon({ link, index, size = "md" }) {
  const Icon = icons[link.id];
  const hasUrl = Boolean(link.url?.trim());
  const dim = size === "lg" ? "h-14 w-14 text-xl" : size === "sm" ? "h-9 w-9 text-sm" : "h-11 w-11 text-lg";

  const inner = (
    <motion.span
      className={`relative flex ${dim} items-center justify-center rounded-2xl border backdrop-blur-md ${
        hasUrl
          ? "border-white/15 bg-white/8 text-white"
          : "border-white/8 bg-white/3 text-white/25 cursor-not-allowed"
      }`}
      initial={{ opacity: 0, y: 24, rotate: -12 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, type: "spring", stiffness: 200 }}
      whileHover={
        hasUrl
          ? {
              y: -8,
              scale: 1.12,
              rotate: [0, -6, 6, 0],
              borderColor: colors[link.id],
              boxShadow: `0 0 28px ${colors[link.id]}55`,
            }
          : { scale: 1.02 }
      }
      whileTap={hasUrl ? { scale: 0.92 } : undefined}
      title={hasUrl ? link.label : `Add ${link.label} URL in src/data/socialLinks.js`}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
        style={{ background: `radial-gradient(circle, ${colors[link.id]}44, transparent 70%)` }}
        whileHover={{ opacity: 1 }}
      />
      <Icon className="relative z-10" style={hasUrl ? { color: colors[link.id] } : undefined} />
      {!hasUrl && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400/90 text-[9px] font-black text-slate-950">
          ?
        </span>
      )}
    </motion.span>
  );

  if (!hasUrl) return <span className="inline-block">{inner}</span>;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-block"
      aria-label={link.label}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      {inner}
    </motion.a>
  );
}

export function SocialDock() {
  return (
    <motion.aside
      className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
    >
      <motion.div
        className="flex items-center gap-2 rounded-full border border-white/15 bg-[#0a0f24]/80 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl"
        animate={{ boxShadow: ["0 0 30px rgba(34,211,238,0.1)", "0 0 50px rgba(168,85,247,0.2)", "0 0 30px rgba(34,211,238,0.1)"] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="mr-1 hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 lg:inline">
          Social
        </span>
        {socialLinks.map((link, i) => (
          <SocialIcon key={link.id} link={link} index={i} size="sm" />
        ))}
      </motion.div>
    </motion.aside>
  );
}

export function SocialSidebar() {
  return (
    <motion.aside
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.9, type: "spring" }}
    >
      <motion.div
        className="mx-auto h-16 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
        animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {socialLinks.map((link, i) => (
        <SocialIcon key={link.id} link={link} index={i} size="sm" />
      ))}
      <motion.div
        className="mx-auto h-16 w-px bg-gradient-to-b from-transparent via-fuchsia-400/50 to-transparent"
        animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </motion.aside>
  );
}

export default function SocialLinks({ title = "Find me online", variant = "row", size = "md" }) {
  return (
    <div className={variant === "column" ? "flex flex-col gap-4" : ""}>
      {title && (
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
      )}
      <div className={variant === "grid" ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" : "flex flex-wrap gap-3"}>
        {socialLinks.map((link, i) => (
          <SocialIcon key={link.id} link={link} index={i} size={size} />
        ))}
      </div>
    </div>
  );
}
