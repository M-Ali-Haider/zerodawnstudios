"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LenisScrollProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
      duration: 0.6,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default LenisScrollProvider;
