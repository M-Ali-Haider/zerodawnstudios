"use client";
import { useRef } from "react";
import { slideUpFooterLink } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import ArrowSVG from "@/assets/StickyCard/arrow";

const FooterLink = ({ item, index }) => {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <div
      ref={container}
      className={`${
        index === 0 && "border-t"
      } border-b border-white flex items-center justify-between py-9`}
    >
      <div className="overflow-hidden">
        <motion.div
          variants={slideUpFooterLink}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="text-5xl leading-[62.26px] text-white font-light"
        >
          {item.title}
        </motion.div>
      </div>
      <ArrowSVG className="w-9 h-9" />
    </div>
  );
};

export default FooterLink;
