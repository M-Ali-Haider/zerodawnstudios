"use client";

import LogoSVG from "@/assets/Header/logo";
import MotionDiv from "@/components/MotionDiv";
import { animatePageIn } from "@/components/PageTransition";
import {
  logoLoading,
  opacityLoading,
  slideFromRightLoading,
  slideUpLoading,
  widthLoadingAnim,
} from "@/utils/loadingAnim";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.maxHeight = "100vh";
  document.body.style.overflow = "hidden";
  document.body.style.maxHeight = "100vh";
};

export const unlockScroll = () => {
  document.documentElement.style.overflow = "visible";
  document.documentElement.style.maxHeight = "none";
  document.body.style.overflow = "visible";
  document.body.style.maxHeight = "none";
};

export default function Template({ children }) {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      lockScroll();
    }
    if (progress === 100 && !isLoaded) {
      setIsLoaded(true);
      setTimeout(() => {
        animatePageIn(window.innerWidth, window.innerHeight);
      }, 2250);
    }
  }, [progress, isLoaded]);

  return (
    <>
      <div
        id="banner-4"
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
        className="fixed left-[50%] top-[45%] -translate-x-[50%] text-white z-[100] pointer-events-none"
      >
        <div className="flex items-center">
          {/* ZER Animation */}
          <div className="overflow-hidden">
            <MotionDiv
              variants={widthLoadingAnim}
              trigger={isLoaded}
              className={"text-5xl font-light"}
            >
              <MotionDiv
                variants={slideFromRightLoading}
                custom={1}
                trigger={isLoaded}
                className={""}
              >
                ZER
              </MotionDiv>
            </MotionDiv>
          </div>

          {/* Loading Animation Part 1 */}
          <MotionDiv
            variants={opacityLoading}
            trigger={isLoaded}
            className={"text-2xl"}
          >
            L
          </MotionDiv>

          {/* LogoSVG Animation */}
          <MotionDiv variants={logoLoading} trigger={isLoaded}>
            <LogoSVG fill="white" className={"w-full h-full"} />
          </MotionDiv>

          {/* Loading Animation Part 2 */}
          <MotionDiv
            variants={opacityLoading}
            trigger={isLoaded}
            className={"text-2xl flex gap-1 items-center"}
          >
            <div>ading</div>
            <div className="h-[24px] flex items-end gap-[1.5px] -mt-[2px]">
              <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="h-1 w-1 bg-white rounded-full animate-bounce" />
            </div>
          </MotionDiv>
        </div>

        {/* Dawn Studios Animation */}
        <div className="overflow-hidden">
          <MotionDiv
            variants={slideUpLoading}
            custom={2}
            trigger={isLoaded}
            className={"font-light tracking-[0.19em]"}
          >
            Dawn Studios
          </MotionDiv>
        </div>
      </div>
      {children}
    </>
  );
}
