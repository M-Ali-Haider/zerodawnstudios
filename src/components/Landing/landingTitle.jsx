"use client";
import { slideUp } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const LandingTitle = () => {
  const words = ["ZERO", "DAWN", "STUDIOS"];
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <div
      className="h-screen min-w-[50vw] max-w-[50vw] 
        flex flex-col items-center justify-center"
      ref={container}
    >
      <div className={`text-9xl leading-[166.02px] font-light`}>
        {words.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div
              custom={index}
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              key={index}
              className=""
            >
              {item}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingTitle;
