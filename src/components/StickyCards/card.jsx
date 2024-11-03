import ArrowSVG from "@/assets/StickyCard/arrow";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const Card = ({ index, range, targetScale, progress, item }) => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={cardContainer}
      key={index}
      className={`h-screen items-center justify-center flex sticky top-10 max-w-[950px] w-full`}
    >
      <motion.div
        className={`p-6 rounded-3xl w-full aspect-[9/16] md:aspect-[16/9.97] relative`}
        style={{
          scale: cardScale,
          top: `calc(-10% + ${index * 20}px)`,
          background: `${item.bg}`,
        }}
      >
        <div className="flex justify-between mb-10">
          <div className="text-white font-normal">
            <div className="text-sm leading-[18.16px]">{item.type}</div>
            <div className="text-5xl leading-[62.26px]">{item.title}</div>
          </div>
          <ArrowSVG className="w-9 h-9" />
        </div>

        <div className="w-full aspect-[9/16] md:aspect-[16/7.91] overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            <Image
              alt="sticky card image"
              src="/testImage.webp"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
