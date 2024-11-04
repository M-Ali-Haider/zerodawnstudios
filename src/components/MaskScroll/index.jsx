"use client";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import InsideMask from "./insideMask";
import styles from "./style.module.css";
const MaskScroll = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0vw", "150vw"], {
    ease: cubicBezier(0.32, 0, 0.67, 0),
  });
  return (
    <>
      <div
        ref={container}
        className={`h-[300vh] w-full sticky top-0 -mt-[90vh]`}
      >
        <motion.div
          ref={stickyMask}
          className={styles.stickyMask}
          style={{ WebkitMaskSize: maskSize }}
        >
          <InsideMask scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>
    </>
  );
};

export default MaskScroll;
