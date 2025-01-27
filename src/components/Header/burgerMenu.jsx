"use client";
import TopBurgerMenuSVG from "@/assets/Header/topBurgerMenu";
import { scaleAnimation } from "@/utils/scaleAnim";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BurgerMenu = ({ canAnimate, lastButtonRef }) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  const buttonRef = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    const xTo = gsap.quickTo(buttonRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(buttonRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    buttonRef.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        buttonRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.5);
      yTo(y * 0.5);
    });

    buttonRef.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    const hoverTimeline = gsap.timeline();
    hoverTimeline
      .to(buttonRef.current, {
        scale: 1.1,
        ease: "power1",
        duration: 0.35,
      })
      .to(buttonRef.current, {
        scale: 1,
        ease: "power1",
        duration: 0.35,
      });
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 150);
  };
  return (
    <motion.div
      ref={lastButtonRef}
      custom={3}
      variants={scaleAnimation}
      initial="initial"
      animate={canAnimate ? "open" : "closed"}
      className="fixed top-6 z-[51] right-4 lg:right-9 mix-blend-difference hidden lg:flex items-center justify-center
        text-base text-white cursor-pointer"
    >
      <button
        ref={buttonRef}
        className="relative flex justify-center overflow-hidden rounded-full 
          border-[1.75px] border-white"
        onMouseEnter={() => manageMouseEnter()}
        onMouseLeave={() => manageMouseLeave()}
      >
        <div className="w-[57.6px] h-[57.6px] flex items-center justify-center">
          <TopBurgerMenuSVG className="w-[25.5px] h-[14.67px] absolute z-10 mix-blend-difference" />
        </div>
        <div
          ref={circle}
          className={`absolute w-full h-[150%] top-full rounded-[50%] bg-white`}
        />
      </button>
    </motion.div>
  );
};

export default BurgerMenu;