"use client";
import {
  cubicBezier,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.css";
const MaskScroll = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0vw", "130vw"], {
    ease: cubicBezier(0, 0.55, 0.45, 1),
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
        <div className="w-full h-full bg-red-500 flex items-center justify-center">
          <div className="font-normal text-9xl leading-[166.02px] flex flex-col items-center justify-center">
            <div>Look</div>
            <div>what our clients</div>
            <div>have to say</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskScroll;
