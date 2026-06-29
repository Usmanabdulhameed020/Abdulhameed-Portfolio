import { motion } from "framer-motion";
import { SocialSidebar } from "./SocialLinks";
import MarqueeStrip from "./MarqueeStrip";
import Background from "./layout/Background";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden bg-[#050814] text-white selection:bg-cyan-400/30 selection:text-cyan-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Background />
      <SocialSidebar />
      <Header />

      <main className="relative z-10">
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <MarqueeStrip />
        <SkillsSection />
        <MarqueeStrip />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </motion.div>
  );
}
