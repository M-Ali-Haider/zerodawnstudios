"use client";
import LogoSVG from "@/assets/Header/logo";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation";
import { scaleAnimation } from "@/utils/scaleAnim";
import { slideUpLanding } from "@/utils/textAnim";
import MotionDiv from "../MotionDiv";
import BurgerMenu from "./burgerMenu";
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
      </header>
      <BurgerMenu canAnimate={canAnimate} lastButtonRef={lastButtonRef} />
    </>
  );
};

export default TopHeader;
