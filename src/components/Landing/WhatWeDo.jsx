"use client";
import { scaleAnimationButton } from "@/utils/scaleAnim";
import { slideUpDescription } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DennisButton from "../Button/dennis";

const WhatWeDo = () => {
  const container = useRef(null);
  const isInView = useInView(container, { margin: "-1%", once: true });
  const first = ["WHAT", "WE", "DO"];
  const second =
    "Zero Dawn Studios is a leading digital agency focused on branding, UI/UX design, mobile, and web development.";
  return (
    <div
      ref={container}
      className="flex flex-col  
       xs:h-screen xs:pb-0 pb-20
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
        <motion.div
          variants={scaleAnimationButton}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="font-normal text-2xl leading-[31.13px] 
            border border-black w-full rounded-full py-[74px] text-center"
        >
          Contact Us
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
