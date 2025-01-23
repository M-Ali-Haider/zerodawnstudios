"use client";

import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FooterHeading from "../Headings/footerHeading";
import Card from "./card";
import { services } from "@/utils/services";

const ServicesWeProvide = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const boxRef = useRef(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const options = {
    ease: cubicBezier(0.61, 1, 0.88, 1),
  };
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["32px", `${boxWidth - (104 + cardWidth * 4)}px`],
    options
  );

  useEffect(() => {
    const updateWidths = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setCardWidth(width);
      }
      if (boxRef.current) {
        const width = boxRef.current.getBoundingClientRect().width;
        setBoxWidth(width);
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  return (
    <>
      <div className="h-[72px] rounded-t-[48px] bg-black" />
      <FooterHeading
        className={`pl-8 flex services:hidden bg-black`}
        title={"Our Services"}
      />
      <div
        ref={containerRef}
        className="relative bg-black h-[300vh] sm:h-[200vh]"
      >
        <div className="sticky top-0 h-[100vh] flex flex-col pb-12">
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
