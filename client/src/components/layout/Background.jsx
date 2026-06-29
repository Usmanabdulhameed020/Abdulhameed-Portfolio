import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "../ParticleField";
import FloatingShapes from "../FloatingShapes";
import ScrollProgress from "../ScrollProgress";
import CursorGlow from "../CursorGlow";
import Aurora from "../effects/Aurora";

export default function Background() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <ParticleField />
      <FloatingShapes />
      <Aurora />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(34,211,238,0.14), transparent 24%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-25" />
    </>
  );
}
