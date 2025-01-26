"use client";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { scaleAnimationButton } from "@/utils/scaleAnim";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const LandingContactButton = () => {
  const { width } = useWindowDimensions();
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const topRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: width > 1280 ? "-1%" : "0%",
    once: width > 1280 ? true : false,
  });

  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        topRef.current,
        { top: "-31.125px", duration: 0.35, ease: "power3.in" },
        "enter"
      )
      .to(
        topRef.current,
        { top: "-62.25px", duration: 0.3, ease: "power3.in" },
        "exit"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.4 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    const hoverTimeline = gsap.timeline();
    hoverTimeline
      .to(buttonRef.current, {
        width: "100%",
        fontSize: "25px",
        ease: "power1",
        duration: 0.35,
      })
      .to(
        buttonRef.current,
        {
          fontSize: "25px",
          ease: "elastic.in",
          duration: 0.35,
        },
        "<"
      )
      .to(buttonRef.current, {
        width: "96%",
        ease: "power1",
        duration: 0.35,
      })
      .to(
        buttonRef.current,
        {
          fontSize: "24px",
          ease: "elastic.out",
          duration: 0.35,
        },
        "<"
      );
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <motion.div
      ref={containerRef}
      variants={scaleAnimationButton}
      initial="initial"
      custom={width > 1280 ? 1.25 : 0.75}
      animate={isInView ? "open" : "closed"}
      className="max-w-[544px] mt-9 w-full flex items-center justify-center"
    >
      <button
        ref={buttonRef}
        className={`w-[96%] relative flex text-2xl justify-center rounded-full border border-black overflow-hidden mt-9`}
        onMouseEnter={() => manageMouseEnter()}
        onMouseLeave={() => manageMouseLeave()}
      >
        <div className="py-[74px] font-normal leading-[31.13px] w-full">
          <div className="h-[31.125px] overflow-hidden relative">
            <div ref={topRef} className="absolute w-full z-10">
              <div className="">Contact Us</div>
              <div className="text-white">Contact Us</div>
              <div className="">Contact Us</div>
            </div>
          </div>
        </div>
        <div
          ref={circle}
          className={`absolute w-full h-[150%] top-full rounded-[50%] bg-black`}
        />
      </button>
    </motion.div>
  );
};

export default LandingContactButton;
