"use client";
import { slideUpDescription } from "@/utils/textAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatWeDo = () => {
  const container = useRef(null);
  const isInView = useInView(container, { margin: "-1%", once: true });
  const first = ["WHAT", "WE", "DO"];
  const second =
    "Zero Dawn Studios is a leading digital agency focused on branding, UI/UX design, mobile, and web development.";
  return (
    <div
      ref={container}
      className="h-screen min-w-[50vw] max-w-[50vw]
        flex flex-col justify-center"
    >
      <div className="max-w-[544px] font-light">
        <div className="text-lg leading-[23.35px] flex">
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
        <div className="text-5xl leading-[62.26px] mt-4 flex flex-wrap">
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
        <button
          className="mt-9 font-normal text-2xl leading-[31.13px] 
            border border-black w-full rounded-full py-[74px]"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
