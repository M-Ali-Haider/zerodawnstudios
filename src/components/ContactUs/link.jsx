"use client";
import { useRef, useState } from "react";
import { slideUpFooterLink } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import ArrowSVG from "@/assets/StickyCard/arrow";
import FooterMarquee from "./marquee";

const FooterLink = ({ item, index }) => {
  const container = useRef(null);
  const isInView = useInView(container);
  const [canAnimate, setAnimate] = useState(false);

  return (
    <a
      href={item.href}
      target="_blank"
      ref={container}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      className="relative cursor-pointer"
    >
      <div
        className={`${index === 0 && "border-t"} 
        border-b border-red
        flex items-center justify-between py-9 px-4 xs:px-8`}
      >
        <div className="overflow-hidden">
          <motion.div
            variants={slideUpFooterLink}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className="text-[34px] leading-[44.1px] xs:text-5xl xs:leading-[62.26px] text-white font-light"
          >
            {item.title}
          </motion.div>
        </div>
        <ArrowSVG className="w-[26px] h-[26px] xs:w-9 xs:h-9" />
      </div>
      <FooterMarquee canAnimate={canAnimate} item={item} />
    </a>
  );
};

export default FooterLink;

// ${index !== 3 && "border-b border-white"}
