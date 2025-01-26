"use client";
import { slideUpDescription } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LandingContactButton from "./contact";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const WhatWeDo = () => {
  const { width } = useWindowDimensions();
  const container = useRef(null);
  const isInView = useInView(container, {
    margin: width > 1280 ? "-1%" : "0%",
    once: width > 1280 ? true : false,
  });
  const first = ["WHO", "WE", "ARE"];
  const second =
    "Zero Dawn Studios is a leading digital agency focused on branding, UI/UX design, mobile, and web development.";
  return (
    <div
      ref={container}
      className="flex flex-col  
       xs:h-screen pb-20 xs:pb-0
       items-center xl:items-start
       w-full xl:w-auto xl:min-w-[50vw] xl:max-w-[50vw]
       px-4 xs:px-0
       justify-center"
    >
      <div className="max-w-[544px] font-light">
        <div className="text-xs xs:text-lg xs:leading-[23.35px] flex">
          {first.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                custom={index}
                variants={slideUpDescription}
                initial="initial"
                animate={isInView ? "open" : "closed"}
              >
                {item}&nbsp;
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-4xl xs:text-5xl xs:leading-[62.26px] mt-4 flex flex-wrap">
          {second.split(" ").map((item, index) => (
            <div key={index} className="overflow-hidden mr-[11.5px]">
              <motion.div
                custom={index}
                variants={slideUpDescription}
                initial="initial"
                animate={isInView ? "open" : "closed"}
              >
                {item}
              </motion.div>
            </div>
          ))}
        </div>
        <LandingContactButton />
      </div>
    </div>
  );
};

export default WhatWeDo;
