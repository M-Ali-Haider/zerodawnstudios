import ArrowSVG from "@/assets/StickyCard/arrow";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({ item, index, range, targetScale, progress }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={containerRef}
      className={`h-screen items-center flex justify-center sticky top-0`}
    >
      <motion.div
        className="p-6 w-[90vw] h-[82vh] relative rounded-3xl flex flex-col"
        style={{
          backgroundColor: item.bg,
          top: `calc(${index * 25}px)`,
          scale,
        }}
      >
        <UpperPart type={item.type} title={item.title} />
        <LowerPart scale={imageScale} />
      </motion.div>
    </div>
  );
};

export default Card;

const LowerPart = ({ scale }) => {
  return (
    <div className="w-full overflow-hidden flex-1">
      <motion.div style={{ scale }} className="w-full h-full relative">
        <Image
          alt="sticky card image"
          src="/testImage.webp"
          fill
          className="object-cover"
          priority
          loading="eager"
          quality={50}
        />
      </motion.div>
    </div>
  );
};

const UpperPart = ({ type, title }) => {
  return (
    <div className="flex justify-between mb-10">
      <div className="text-white font-normal">
        <div className="text-sm leading-[18.16px]">{type}</div>
        <div className="text-5xl leading-[62.26px]">{title}</div>
      </div>
      <ArrowSVG className="w-9 h-9" />
    </div>
  );
};
