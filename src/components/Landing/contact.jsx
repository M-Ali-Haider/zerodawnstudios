"use client";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { scaleAnimationButton } from "@/utils/scaleAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LandingContactButton = () => {
  const { width } = useWindowDimensions();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: width > 1280 ? "-1%" : "0%",
    once: width > 1280 ? true : false,
  });
  return (
    <motion.div
      ref={containerRef}
      variants={scaleAnimationButton}
      initial="initial"
      custom={width > 1280 ? 1.25 : 0.75}
      animate={isInView ? "open" : "closed"}
      className="font-normal text-2xl leading-[31.13px] 
        border border-black w-full rounded-full py-[74px] text-center
        mt-9"
    >
      Contact Us
    </motion.div>
  );
};

export default LandingContactButton;
