"use client";

import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FooterHeading from "../Headings/footerHeading";
import Card from "./card";

const ServicesWeProvide = () => {
  const containerRef = useRef(null);
  const [range, setRange] = useState(["2.5vw", "-25vw"]);

  useEffect(() => {
    const updateRange = () => {
      if (window.innerWidth <= 320) {
        setRange(["2.5vw", "-200vw"]);
      } else if (window.innerWidth <= 375) {
        setRange(["2.5vw", "-197.5vw"]);
      } else if (window.innerWidth <= 550) {
        setRange(["2.5vw", "-195vw"]);
      } else if (window.innerWidth < 640) {
        setRange(["2.5vw", "-192.5vw"]);
      } else if (window.innerWidth < 1024) {
        setRange(["2.5vw", "-120vw"]);
      } else {
        setRange(["2.5vw", "-25vw"]);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const options = {
    ease: cubicBezier(0.61, 1, 0.88, 1),
  };
  const x = useTransform(scrollYProgress, [0, 1], range, options);
  return (
    <>
      <div className="h-[72px] rounded-t-[48px] bg-black" />
      <div
        ref={containerRef}
        className="relative bg-black h-[300vh] sm:h-[200vh]"
      >
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
