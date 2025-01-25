"use client";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import InsideMask from "./insideMask";
import styles from "./style.module.css";
const MaskScroll = () => {
  const container = useRef(null);
  const [maskSizeRange, setMaskSizeRange] = useState(["0vw", "200vw"]);
  const updateMaskSize = useMemo(
    () => () => {
      setMaskSizeRange(
        window.innerWidth > 550 ? ["0vw", "200vw"] : ["0vw", "275vw"]
      );
    },
    []
  );
  useEffect(() => {
    updateMaskSize();
    window.addEventListener("resize", updateMaskSize);
    return () => window.removeEventListener("resize", updateMaskSize);
  }, [updateMaskSize]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "275vh"],
  });
  const maskSize = useTransform(scrollYProgress, [0, 1], maskSizeRange, {
    ease: easeInOut,
  });
  return (
    <>
      <div
        ref={container}
        className={`h-[600vh] sm:h-[400vh] w-full sticky top-0 -mt-[90vh]`}
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
