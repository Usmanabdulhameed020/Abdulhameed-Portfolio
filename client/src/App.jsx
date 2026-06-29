import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroSplash from "./components/IntroSplash";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introDone && <IntroSplash key="intro" onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && <Portfolio />}
    </>
  );
}
