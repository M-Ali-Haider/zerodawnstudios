"use client";
import { slideUpFooter } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterHeading = ({ className, title }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const array = title.split(" ");
  return (
    <div
      ref={containerRef}
      className={`font-light text-[76px] leading-none ml:text-[84px] xs:text-8xl md:text-9xl text-white ${className} flex flex-wrap`}
    >
      {array.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={slideUpFooter}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className={index !== array.length - 1 && "mb-4"}
          >
            {item}&nbsp;
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FooterHeading;
