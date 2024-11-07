"use client";
import { slideUp } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Heading = () => {
  const headingRef = useRef(null);
  const heading = ["P", "r", "o", "j", "e", "c", "t", "s"];
  const isInView = useInView(headingRef, { once: true });
  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);
  return (
    <div
      ref={headingRef}
      className="sticky text-9xl leading-[166.02px] font-light top-0 pl-8 flex"
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
