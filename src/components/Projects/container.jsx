"use client";
import { stickyCards } from "@/utils/stickyCards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./card";
import MaskScroll from "../MaskScroll";

const CardsContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "300vh"],
  });

  return (
    <div ref={containerRef} className="relative">
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
      <MaskScroll />
    </div>
  );
};

export default CardsContainer;
