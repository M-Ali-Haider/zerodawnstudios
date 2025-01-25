"use client";
import LogoSVG from "@/assets/Header/logo";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation";
import { scaleAnimation } from "@/utils/scaleAnim";
import { slideUpLanding } from "@/utils/textAnim";
import { motion } from "framer-motion";
import GlassHeader from "./glass";

const TopHeader = ({ headerRef }) => {
  const { canAnimate } = useLoadingAnimation(3250);
  return (
    <header
      ref={headerRef}
      className={`flex fixed top-7 left-0 right-0 z-50 items-center
        text-black
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
          className="px-8 py-4 rounded-full 
          text-base text-black border border-black"
        >
          Contact Us
        </motion.button>
      </div>
    </header>
  );
};

export default TopHeader;
