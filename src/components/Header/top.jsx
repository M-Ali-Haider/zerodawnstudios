"use client";
import LogoSVG from "@/assets/Header/logo";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation";
import { scaleAnimation } from "@/utils/scaleAnim";
import { sectionsHeader } from "@/utils/sections";
import { slideUpHeaderOptions, slideUpLanding } from "@/utils/textAnim";
import MotionDiv from "../MotionDiv";
import GlassHeader from "./glass";
import { motion } from "framer-motion";
import TopBurgerMenuSVG from "@/assets/Header/topBurgerMenu";

const TopHeader = ({
  logoRef,
  optionsRef,
  lastButtonRef,
  topGlassHeaderRef,
  isContact,
}) => {
  const { canAnimate } = useLoadingAnimation(3250);
  return (
    <header
      className={`flex fixed top-6 left-0 right-0 z-50 items-center
        px-4 lg:px-9
        justify-center lg:justify-normal
        text-white
        mix-blend-difference
      `}
    >
      <GlassHeader top={true} topGlassHeaderRef={topGlassHeaderRef} />
      <div ref={logoRef} className="flex-1 hidden lg:flex items-center gap-4">
        <MotionDiv custom={3} variants={scaleAnimation} trigger={canAnimate}>
          <LogoSVG fill="white" />
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
      <div
        ref={optionsRef}
        className="flex-1 hidden lg:flex items-center justify-center"
      >
        <div className="flex items-center justify-between w-full max-w-[415px]">
          {sectionsHeader.map((item, index) => (
            <div
              className="text-sm leading-[18.16px] cursor-pointer overflow-hidden"
              key={index}
            >
              <MotionDiv
                variants={slideUpHeaderOptions}
                custom={index + 5}
                trigger={canAnimate}
              >
                {item.name}
              </MotionDiv>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 hidden lg:flex items-center justify-end">
        {/* <div
          ref={lastButtonRef}
          className="rounded-full"
        > */}
        <motion.div
          ref={lastButtonRef}
          custom={3}
          variants={scaleAnimation}
          initial="initial"
          animate={canAnimate ? "open" : "closed"}
          className="w-[147.79px] h-[57.6px] flex items-center justify-center
            text-base border border-white cursor-pointer rounded-full"
        >
          {isContact ? (
            "Contact Us"
          ) : (
            <TopBurgerMenuSVG className="w-[25.5px] h-[14.67px]" />
          )}
        </motion.div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default TopHeader;
