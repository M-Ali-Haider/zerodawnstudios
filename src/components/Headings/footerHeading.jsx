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
      className={`font-light text-[80px] leading-none xs:text-8xl md:text-9xl text-white ${className} flex flex-wrap`}
    >
      {array.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={slideUpFooter}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className={index !== array.length - 1 ? "mb-3" : ""}
          >
            {item}&nbsp;
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FooterHeading;
