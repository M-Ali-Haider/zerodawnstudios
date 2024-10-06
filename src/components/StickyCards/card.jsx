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
      className={`h-screen items-center justify-center flex
        font-bold text-3xl sticky top-0`}
    >
      <motion.div
        className={`${
          index % 2 === 0 ? "text-white" : " text-black"
        } flex p-6 md:p-16 items-center rounded-3xl justify-center w-full 
        aspect-[9/16] md:aspect-[16/9] relative`}
        style={{
          scale: cardScale,
          top: `calc(-10% + ${index * 30}px)`,
          background: `${item.bg}`,
        }}
      >
        <div className="w-full aspect-[9/16] md:aspect-[16/9] overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            <Image alt="sticky card image" src="/cardTestImage.jpg" fill />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
