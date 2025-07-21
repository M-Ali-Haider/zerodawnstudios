import ArrowSVG from "@/assets/StickyCard/arrow";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
      className={`h-screen items-start xs:items-center flex justify-center sticky top-0`}
    >
      <motion.div
        className="p-6 w-[94vw] h-auto aspect-[358/557] xs:w-[90vw] xs:h-[82vh] relative rounded-3xl 
        flex xs:flex-col flex-col-reverse xs:gap-10 gap-8 will-change-transform"
        style={{
          backgroundColor: item.bg,
          top: `calc(${index * 25}px)`,
          scale,
        }}
      >
        <UpperPart index={index} type={item.type} title={item.title} />
        <LowerPart scale={imageScale} src={item.src} />
      </motion.div>
    </div>
  );
};

export default Card;

const LowerPart = ({ scale, src }) => {
  return (
    <div className="w-full overflow-hidden flex-1 rounded-2xl">
      <motion.div style={{ scale }} className="w-full h-full relative">
        <Image
          alt="sticky card image"
          src={src || "/testImage.webp"}
          fill
          className="object-cover"
          priority
          sizes="70vw"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

const UpperPart = ({ index, type, title }) => {
  return (
    <div className="flex justify-between">
      <div
        className={`${index === 0 ? "text-white" : "text-black"} font-normal`}
      >
        <div className="text-xs leading-[15.56px] xs:text-sm xs:leading-[18.16px]">
          {type}
        </div>
        <div className="text-2xl leading-[31.13px] xs:text-5xl xs:leading-[62.26px]">
          {title}
        </div>
      </div>
      <ArrowSVG className="w-9 h-9" />
    </div>
  );
};
