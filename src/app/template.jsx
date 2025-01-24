"use client";

import { animatePageIn } from "@/components/PageTransition";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100 && !isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
        animatePageIn(window.innerWidth, window.innerHeight);
      }, 500);
    }
  }, [progress, isLoaded]);

  return (
    <>
      <div
        style={{ opacity: isLoaded ? 0 : 1 }}
        className="fixed w-screen h-screen z-[89] pointer-events-none bg-black"
      />
      <svg
        id="banner-1"
        className="h-[calc(100vh+600px)] w-screen z-[90] fixed top-0 left-0 pointer-events-none"
      >
        <path id="banner-3" style={{ fill: "black" }}></path>
      </svg>
      <div
        id="banner-2"
        className="text-xl xs:text-6xl fixed left-[50%] top-[40%] -translate-x-[50%] text-white z-[100] pointer-events-none"
      >
        Opening Studio... {Math.round(progress)}%
      </div>
      {children}
    </>
  );
}
