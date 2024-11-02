"use client";
import { stickyCards } from "@/utils/stickyCards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./card";
import LastCard from "./lastCard";
const StickyCards = () => {
  const cardsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainer,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={cardsContainer}
      className="w-full relative flex flex-col items-center mt-40"
    >
      {stickyCards.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          range={[index * (1 / stickyCards.length), 1]}
          targetScale={1 - (stickyCards.length - index) * 0.025}
          progress={scrollYProgress}
        />
      ))}
      <LastCard progress={scrollYProgress} />
    </div>
  );
};

export default StickyCards;
