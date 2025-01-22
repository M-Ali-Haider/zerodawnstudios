"use client";
import { slideUpLanding } from "@/utils/textAnim";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LandingTitle = () => {
  const words = ["DAWN", "STUDIOS"];
  const container = useRef(null);
  // const isInView = useInView(container, { once: true });
  const { progress } = useProgress();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setCanAnimate(true);
      }, 1000);
    }
  }, [progress]);

  return (
    <div
      className="flex flex-col  justify-center
       items-center xl:items-end
       w-full xl:w-auto xl:min-w-[50vw] xl:max-w-[50vw]
       xs:h-screen
       mt-40 xs:mt-0
       px-4 xs:px-0"
      ref={container}
    >
      <div
        className={`flex flex-col gap-5 font-light leading-none
         text-7xl ml:text-[84px] xs:text-8xl md:text-9xl`}
      >
        <div className="flex items-center">
          <div className="overflow-hidden">
            <motion.div
              custom={1}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className="flex items-center"
            >
              ZER
            </motion.div>
          </div>
          <div className="overflow-hidden flex items-center justify-center flex-1 max-w-[288px] aspect-[288/95]">
            <motion.div
              custom={2}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className="relative w-full h-full"
            >
              <Image src={"/zero.png"} fill alt="zero's o image" />
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
    </div>
  );
};

export default LandingTitle;
