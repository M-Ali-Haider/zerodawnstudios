"use client";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import InsideMask from "./insideMask";
import styles from "./style.module.css";
const MaskScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "275vh"],
  });
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0vw", "150vw"], {
    ease: cubicBezier(0.32, 0, 0.67, 0),
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) =>
      console.log(latest)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div
        ref={container}
        className={`h-[400vh] w-full sticky top-0 -mt-[90vh]`}
      >
        <div className="relative w-full h-full">
          <motion.div
            className={`h-screen flex items-center justify-center sticky top-0 overflow-hidden  ${styles.stickyMask}`}
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
