"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FooterHeading from "../Headings/footerHeading";
import Card from "./card";

const ServicesWeProvide = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2.5vw", "-25vw"]);
  // const xWithOffset = useTransform(x, (value) => `calc(${value} + 32px)`);
  return (
    <>
      <div className="h-[72px] rounded-t-[48px] bg-black" />
      <div ref={containerRef} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-[100vh] flex flex-col pb-8">
          <FooterHeading
            className={`pl-8 mb-12`}
            title={"Services we provide"}
          />
          <div className={`w-full flex-1 overflow-hidden`}>
            <motion.div style={{ x }} className={`w-full h-full flex gap-6`}>
              <Card />
              <Card />
              <Card />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesWeProvide;
