"use client";
import { useLoadingAnimation } from "@/hooks/useLoadingAnimation";
import { slideUpLanding } from "@/utils/textAnim";
import { zeroAnim } from "@/utils/zeroAnim";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import DreamsLine from "./dreams";

const LandingTitle = () => {
  const words = ["DAWN", "STUDIOS"];
  const container = useRef(null);
  const { canAnimate } = useLoadingAnimation(3250);
  return (
    <div
      className="flex flex-col  justify-center
       items-center xl:items-end
       w-full xl:w-auto xl:min-w-[50vw] xl:max-w-[50vw]
       xl:h-screen
       mt-40 xl:mt-0
       px-4 xs:px-0"
      ref={container}
    >
      <div
        className={`flex flex-col gap-5 font-light leading-none
         text-7xl ml:text-[84px] xs:text-8xl md:text-9xl`}
      >
        <div className="flex items-center">
          <div className="overflow-hidden w-full">
            <motion.div
              custom={1}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className="w-full flex items-center"
            >
              <div>ZER</div>
              <motion.div
                custom={2}
                variants={zeroAnim}
                initial="initial"
                animate={canAnimate ? "open" : "closed"}
                className="overflow-hidden 
                -mt-[6px] ml:-mt-2 xs:-mt-[10px] md:-mt-[14px]
                h-[54.52px] ml:h-[63.61px] xs:h-[72.7px] md:h-[95px]"
              >
                <div
                  className="relative h-full
                  w-[165.31px] 
                  ml:w-[192.86px] 
                  xs:w-[220.42px] 
                  md:w-[288px] 
                "
                >
                  <video
                    className="w-full h-full object-cover"
                    preload="auto"
                    autoPlay
                    playsInline
                    loop
                    muted
                  >
                    <source src="/zero.mp4" type="video/mp4" />
                    Your browser does not support video tag
                  </video>
                  {/* <Image
                    src={"/zero.webp"}
                    fill
                    sizes="33vw"
                    alt="zero's o image"
                    className=""
                  /> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {words.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div
              custom={index + 3}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className=""
            >
              {item}
            </motion.div>
          </div>
        ))}
      </div>
      <DreamsLine canAnimate={canAnimate} />
    </div>
  );
};

export default LandingTitle;
