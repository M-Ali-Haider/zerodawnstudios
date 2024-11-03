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
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0vw", "150vw"]);
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
