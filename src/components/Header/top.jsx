"use client";
import LogoSVG from "@/assets/Header/logo";
import GlassHeader from "./glass";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { slideUpLanding } from "@/utils/textAnim";
import { scaleAnimation } from "@/utils/scaleAnim";

const TopHeader = ({ headerRef }) => {
  const { progress } = useProgress();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setCanAnimate(true);
      }, 1000);
    }
  }, [progress]);

  return (
    <header
      ref={headerRef}
      className={`flex fixed top-7 left-0 right-0 z-50 items-center
        mix-blend-difference xs:mix-blend-normal 
        text-white xs:text-black
        px-4 xs:px-9
        justify-center xs:justify-normal
      `}
    >
      <GlassHeader top={true} />
      <div className="flex-1 hidden xs:flex items-center gap-4">
        <motion.div
          custom={3}
          variants={scaleAnimation}
          initial="initial"
          animate={canAnimate ? "open" : "closed"}
        >
          <LogoSVG />
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            custom={3}
            variants={slideUpLanding}
            initial="initial"
            animate={canAnimate ? "open" : "closed"}
            className="text-[17px] leading-[22.05px]"
          >
            Zero Dawn Studios
          </motion.div>
        </div>
      </div>
      <div className="flex-1 hidden xs:flex items-center justify-end">
        <motion.button
          custom={3}
          variants={scaleAnimation}
          initial="initial"
          animate={canAnimate ? "open" : "closed"}
          className="bg-black text-white px-8 py-4 rounded-full 
          text-base leading-[20.75px]"
        >
          Contact Us
        </motion.button>
      </div>
    </header>
  );
};

export default TopHeader;
