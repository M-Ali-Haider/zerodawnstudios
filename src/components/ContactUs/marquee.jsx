import ArrowSVG from "@/assets/StickyCard/arrow";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { footerLinkAnim } from "@/utils/footerLinkAnim";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
const FooterMarquee = ({ canAnimate, item }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const xPercentRef = useRef(0);

  const animation = () => {
    if (xPercentRef.current <= -100) {
      xPercentRef.current = 0;
    }
    if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercentRef.current });
    gsap.set(secondText.current, { xPercent: xPercentRef.current });
    xPercentRef.current -= 0.1;
    animationRef.current = requestAnimationFrame(animation);
  };

  useEffect(() => {
    if (isHovered) {
      animationRef.current = requestAnimationFrame(animation);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <div
      className="absolute inset-0 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={footerLinkAnim}
        initial="initial"
        animate={canAnimate ? "open" : "initial"}
        className="flex w-full h-full items-center bg-white relative whitespace-nowrap overflow-hidden"
      >
        <div
          ref={firstText}
          className="w-full flex items-center justify-around"
        >
          <ContentInside title={item.title} />
        </div>
        <div
          ref={secondText}
          className="w-full flex items-center justify-around absolute left-full"
        >
          <ContentInside title={item.title} />
        </div>
      </motion.div>
    </div>
  );
};

export default FooterMarquee;

const ContentInside = ({ title }) => {
  const { width } = useWindowDimensions();
  const [length, setLength] = useState(8);
  const textSize =
    title === "LinkedIn"
      ? 134
      : title === "Gmail"
      ? 93
      : title === "Instagram"
      ? 160
      : 163;
  useEffect(() => {
    const value = Math.floor(width / (textSize + 72));
    const finalValue = value % 2 === 0 ? value : value - 1;
    setLength(finalValue);
  }, [width]);
  return (
    <>
      {[...Array(length)].map((_, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <div
              className="text-[34px] leading-[44.1px] xs:text-5xl xs:leading-[62.26px] text-black font-light 
              flex items-center justify-center"
            >
              {title}
            </div>
          ) : (
            <div className="w-[72px] flex items-center justify-center">
              <ArrowSVG
                className="w-[26px] h-[26px] xs:w-9 xs:h-9"
                stroke="black"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
