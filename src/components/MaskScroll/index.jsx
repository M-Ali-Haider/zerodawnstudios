"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import InsideMask from "./insideMask";
import styles from "./style.module.css";
const MaskScroll = () => {
  const container = useRef(null);
  const [maskSizeRange, setMaskSizeRange] = useState(["0vw", "200vw"]);

  useEffect(() => {
    const updateMaskSize = () => {
      if (window.innerWidth > 550) {
        setMaskSizeRange(["0vw", "200vw"]);
      } else {
        setMaskSizeRange(["0vw", "400vw"]);
      }
    };
    updateMaskSize();
    window.addEventListener("resize", updateMaskSize);
    return () => window.removeEventListener("resize", updateMaskSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "275vh"],
  });
  const maskSize = useTransform(scrollYProgress, [0, 1], maskSizeRange);
  return (
    <>
      <div
        ref={container}
        className={`h-[400vh] w-full sticky top-0 -mt-[90vh]`}
      >
        <div className="relative w-full h-full">
          <motion.div
            className={`h-screen flex items-center justify-center sticky top-0 overflow-hidden ${styles.stickyMask}`}
            style={{ WebkitMaskSize: maskSize }}
          >
            <InsideMask scrollYProgress={scrollYProgress} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MaskScroll;
