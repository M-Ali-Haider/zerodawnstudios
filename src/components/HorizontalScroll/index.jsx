"use client";
import { horizontalCards } from "@/utils/horizontalCards";
import HorizontalCard from "./card";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HorizontalScroll = () => {
  const horizontalContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: horizontalContainer,
    offset: ["start start", "end end"],
  });

  const isXs = useMediaQuery({ query: "(min-width: 550px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  const xValue = isXl ? "-100vw" : isLg ? "-200vw" : "-500vw";

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", xValue]);

  return (
    <div className={`w-full h-[500vh] relative`} ref={horizontalContainer}>
      <div
        className={`sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center`}
      >
        <motion.div style={{ x }} className={`w-full flex ml-4 gap-4`}>
          {horizontalCards.map((item, index) => {
            return <HorizontalCard key={index} item={item} index={index} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
