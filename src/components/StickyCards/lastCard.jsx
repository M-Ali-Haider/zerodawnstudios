import { stickyCards } from "@/utils/stickyCards";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import MaskScroll from "../MaskScroll";
const LastCard = ({ progress }) => {
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
        className="h-[100vh] flex items-center justify-center font-bold text-3xl sticky top-14 max-w-[950px] w-full"
      >
        <motion.div
          className={`${
            3 % 2 === 0 ? "text-white" : " text-black"
          } flex p-6 md:p-16 items-center rounded-3xl justify-center w-full aspect-[9/16] md:aspect-[16/9.97] relative z-10`}
          style={{
            scale: cardScale,
            top: `calc(-10% + ${3 * 30}px)`,
            background: `#f0c807`,
          }}
        >
          {/* <MaskScroll /> */}
          <div className="w-full aspect-[9/16] md:aspect-[16/9] overflow-hidden">
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full relative"
            >
              <Image alt="sticky card image" src="/testImage.webp" fill />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LastCard;
