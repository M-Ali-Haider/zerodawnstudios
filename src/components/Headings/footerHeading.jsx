"use client";
import { slideUpFooter } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterHeading = ({ className, title }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const array = title.split(" ");
  return (
    <div
      ref={containerRef}
      className={`font-light text-9xl leading-[166.02px] text-white ${className} flex`}
    >
      {array.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={slideUpFooter}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            {item}&nbsp;
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FooterHeading;
