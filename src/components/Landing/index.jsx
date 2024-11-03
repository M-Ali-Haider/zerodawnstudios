"use client";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import LandingTitle from "./landingTitle";
import WhatWeDo from "./WhatWeDo";

const Scene = dynamic(() => import("@/components/scene/index"), {
  ssr: false,
  loading: () => (
    <div className="h-screen min-w-[50vw] max-w-[50vw] relative flex items-center justify-center">
      <Image
        src="/Scene/chips.png"
        alt="replacer image while actual 3d loading"
        width={500}
        height={500}
        className="w-[30vw]"
      />
    </div>
  ),
});

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
          {/* <div className="h-screen min-w-[50vw] max-w-[50vw] relative" /> */}
          <Scene scrollYProgress={scrollYProgress} />
          <WhatWeDo />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
