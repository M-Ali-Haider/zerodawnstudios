"use client";
import LogoSVG from "@/assets/Header/logo";
import TopBurgerMenuSVG from "@/assets/Header/topBurgerMenu";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation";
import { scaleAnimation } from "@/utils/scaleAnim";
import { sectionsHeader } from "@/utils/sections";
import { slideUpHeaderOptions, slideUpLanding } from "@/utils/textAnim";
import { motion } from "framer-motion";
import MotionDiv from "../MotionDiv";
import GlassHeader from "./glass";

const TopHeader = ({ topHeader, lastButtonRef }) => {
  const { canAnimate } = useLoadingAnimation(3250);
  return (
    <>
      <header
        ref={topHeader}
        className={`flex fixed top-7 left-0 right-0 z-50 items-center 
        px-4 lg:px-9
        justify-center lg:justify-normal
      `}
      >
        <GlassHeader top={true} />
        <div className="flex-1 hidden lg:flex items-center gap-4">
          <MotionDiv custom={3} variants={scaleAnimation} trigger={canAnimate}>
            <LogoSVG />
          </MotionDiv>

          <div className="overflow-hidden">
            <MotionDiv
              custom={3}
              variants={slideUpLanding}
              trigger={canAnimate}
              className="text-[17px] leading-[22.05px]"
            >
              Zero Dawn Studios
            </MotionDiv>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex" />
        <div className="flex-1 hidden lg:flex items-center justify-end"></div>
      </header>
      <div className="fixed top-6 z-[51] right-4 lg:right-9 mix-blend-difference">
        <motion.div
          ref={lastButtonRef}
          // custom={3}
          // variants={scaleAnimation}
          // initial="initial"
          // animate={canAnimate ? "open" : "closed"}
          className="scale-0 w-[57.6px] h-[57.6px] hidden lg:flex items-center justify-center
            text-base text-white border border-white cursor-pointer rounded-full"
        >
          <TopBurgerMenuSVG className="w-[25.5px] h-[14.67px]" />
        </motion.div>
      </div>
    </>
  );
};

export default TopHeader;
