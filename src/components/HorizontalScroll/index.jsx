"use client";
import { horizontalCards } from "@/utils/horizontalCards";
import HorizontalCard from "./card";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const horizontalContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: horizontalContainer,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <div className={`w-full h-[500vh] relative`} ref={horizontalContainer}>
      <div className={`sticky top-0 w-full h-screen overflow-hidden`}>
        <motion.div style={{ x }} className={`w-full h-full flex`}>
          {horizontalCards.map((item, index) => {
            return <HorizontalCard key={index} item={item} index={index} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
