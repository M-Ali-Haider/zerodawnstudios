"use client";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
        priority
        loading="eager"
      />
    </div>
  ),
});

const Landing = () => {
  const containerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const options = {
    ease: cubicBezier(0.61, 1, 0.88, 1),
  };

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"], options);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#fff", "#f1f1f1"],
    options
  );

  return (
    <>
      <motion.div
        className={`w-full xl:h-[200vh] relative`}
        ref={containerRef}
        style={{ backgroundColor: isLargeScreen ? bgColor : "#fff" }}
      >
        <div
          className={`w-full xl:sticky xl:top-0 xl:h-screen overflow-hidden xl:flex xl:items-center xl:justify-center`}
        >
          <motion.div
            style={{ x: isLargeScreen ? x : "0%" }}
            className={`w-full xl:flex`}
          >
            <LandingTitle />
            <Scene scrollYProgress={scrollYProgress} />
            <WhatWeDo />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Landing;
