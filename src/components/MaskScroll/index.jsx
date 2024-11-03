"use client";
import {
  cubicBezier,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.css";
import InsideMask from "./insideMask";
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
  useMotionValueEvent(maskSize, "change", (latest) => {
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize = latest;
      stickyMask.current.style.maskSize = latest;
    }
  });
  return (
    <div
      ref={container}
      className={`h-[300vh] relative w-full -mt-[calc(300vh)]`}
    >
      <div ref={stickyMask} className={styles.stickyMask}>
        <InsideMask />
      </div>
    </div>
  );
};

export default MaskScroll;
