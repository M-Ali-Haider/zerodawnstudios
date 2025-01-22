"use client";
import { slideUp } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Heading = () => {
  const headingRef = useRef(null);
  // const heading = ["P", "r", "o", "j", "e", "c", "t", "s"];
  const heading = ["Featured", "Projects"];
  const isInView = useInView(headingRef, { once: true });
  return (
    <div
      ref={headingRef}
      className="sticky font-light top-0 flex flex-wrap
      text-7xl ml:text-[84px] xs:text-8xl md:text-9xl
      px-4 xs:pl-8"
    >
      {heading.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={slideUp}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            {item}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Heading;
