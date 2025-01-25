"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const DennisButton = ({ children, isBurgerMenu = false, className }) => {
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
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
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
    <button
      className={`relative flex justify-center overflow-hidden rounded-full ${className}`}
      onMouseEnter={(e) => manageMouseEnter(e)}
      onMouseLeave={(e) => manageMouseLeave(e)}
    >
      {children}
      <div
        ref={circle}
        className={`absolute w-full h-[150%] top-full rounded-[50%] ${
          isBurgerMenu ? "bg-white" : "bg-black"
        }`}
      />
    </button>
  );
};

export default DennisButton;
