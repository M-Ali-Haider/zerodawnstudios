import ArrowSVG from "@/assets/StickyCard/arrow";
import { stickyCards } from "@/utils/stickyCards";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const LastCard = ({ progress, item }) => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const cardScale = useTransform(
    progress,
    [3 * (1 / stickyCards.length), 1],
    [1, 1 - (stickyCards.length - 3) * 0.025]
  );
  return (
    <div className={`h-[300vh] w-full flex flex-col items-center`}>
      <div
        ref={cardContainer}
        className="h-[100vh] flex items-center justify-center font-bold text-3xl sticky top-10 max-w-[950px] w-full"
      >
        <motion.div
          className={`p-6 rounded-3xl w-full aspect-[9/16] md:aspect-[16/9.97] relative z-10`}
          style={{
            scale: cardScale,
            top: `calc(-10% + ${3 * 20}px)`,
            background: `#f0c807`,
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
    </div>
  );
};

export default LastCard;
