"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import Card from "./card";
import { stickyCards } from "@/utils/stickyCards";
const StickyCards = () => {
  const cardsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainer,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={cardsContainer} className="w-full mt-24 relative mb-[1000px]">
      {stickyCards.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          range={[index * (1 / stickyCards.length), 1]}
          targetScale={1 - (stickyCards.length - index) * 0.05}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default StickyCards;
