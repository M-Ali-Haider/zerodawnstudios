"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const DennisMagnetButton = ({ children, range }) => {
  const magnetic = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * range);
      yTo(y * range);
    });

    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, [range]);

  return React.cloneElement(children, { ref: magnetic });
};

export default DennisMagnetButton;
