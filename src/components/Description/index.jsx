"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
});

const Description = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-50vw"]);

  return (
    <div className={`w-full h-[150vh] relative`} ref={containerRef}>
      <div
        className={`sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center`}
      >
        <motion.div style={{ x }} className={`w-full flex`}>
          <div className="min-w-[50vw] max-w-[50vw] font-light text-9xl flex flex-col justify-center items-center">
            <div>
              <div>Zero</div>
              <div>Dawn</div>
              <div>Studios</div>
            </div>
          </div>
          <Scene />
          <div className="min-w-[50vw] max-w-[50vw] flex flex-col justify-center">
            <div className="font-light text-base md:text-2xl mb-4">
              WHAT WE DO
            </div>
            <div className="text-xl md:text-[64px] md:leading-[83.01px] font-light">
              Zero Dawn Studios is a leading digital agency focused on branding,
              UI/UX design, mobile, and web development.
            </div>
            <Link
              href={"/"}
              className="py-8 md:py-16 mt-10 w-full border border-black rounded-full font-normal text-base md:text-xl flex items-center justify-center max-w-[600px]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;

{
  /* <div className="flex-1 border border-black" />
        <Scene />
        <div className="flex-1 flex flex-col justify-center min-w-[300px]">
          <div className="font-light text-base md:text-2xl mb-4">
            WHAT WE DO
          </div>
          <div className="text-xl md:text-[64px] md:leading-[83.01px] font-light">
            Zero Dawn Studios is a leading digital agency focused on branding,
            UI/UX design, mobile, and web development.
          </div>
          <Link
            href={"/"}
            className="py-8 md:py-16 mt-10 w-full border border-black rounded-full font-normal text-base md:text-xl flex items-center justify-center max-w-[600px]"
          >
            Contact Us
          </Link>
        </div> */
}
