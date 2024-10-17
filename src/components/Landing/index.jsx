"use client";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Scene from "../scene";
import LandingTitle from "./landingTitle";
import WhatWeDo from "./WhatWeDo";
const Landing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"], {
    ease: cubicBezier(0.61, 1, 0.88, 1),
  });
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#fff", "#f1f1f1"], {
    ease: cubicBezier(0.61, 1, 0.88, 1),
  });
  return (
    <motion.div
      className={`w-full h-[200vh] relative`}
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center`}
      >
        <motion.div style={{ x }} className={`w-full flex`}>
          <LandingTitle />
          <Scene />
          <WhatWeDo />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
