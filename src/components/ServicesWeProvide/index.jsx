"use client";

import { services } from "@/utils/services";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FooterHeading from "../Headings/footerHeading";
import Card from "./card";

const ServicesWeProvide = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const boxRef = useRef(null);

  const [range, setRange] = useState(["32px", "320px"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // const options = {
  //   ease: cubicBezier(0.61, 1, 0.88, 1),
  // };
  const x = useTransform(scrollYProgress, [0, 1], range);

  useEffect(() => {
    const updateWidths = () => {
      if (cardRef.current && boxRef.current) {
        const cardWidth = cardRef.current.getBoundingClientRect().width;
        const boxWidth = boxRef.current.getBoundingClientRect().width;
        if (window.innerWidth < 640) {
          setRange(["10px", `${boxWidth - (82 + cardWidth * 4)}px`]);
        } else {
          setRange(["32px", `${boxWidth - (104 + cardWidth * 4)}px`]);
        }
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="h-[72px] rounded-t-[48px] bg-black" />
      </div>
      <FooterHeading
        className={`pl-8 flex services:hidden`}
        title={"Our Services"}
      />
      <div
        ref={containerRef}
        className="relative bg-black h-[300vh] sm:h-[250vh]"
      >
        <div className="sticky top-0 h-[90vh] services:h-[100vh] flex flex-col 2xl:pb-12">
          <FooterHeading
            className={`pl-8 my-6 hidden services:flex`}
            title={"Services we provide"}
          />
          <div className={`w-full flex-1 overflow-hidden flex items-center`}>
            <motion.div
              ref={boxRef}
              style={{ x }}
              className={`w-full max-h-[517px] 2xl:max-h-[652px] h-full flex gap-6`}
            >
              {services.map((item, index) => (
                <Card
                  propRef={index === 0 ? cardRef : null}
                  key={index}
                  item={item}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesWeProvide;
