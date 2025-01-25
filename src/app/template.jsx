"use client";

import LogoSVG from "@/assets/Header/logo";
import { animatePageIn } from "@/components/PageTransition";
import {
  logoLoading,
  opacityLoading,
  slideFromRightLoading,
  slideUpLoading,
  widthLoadingAnim,
} from "@/utils/loadingAnim";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const lockScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.maxHeight = "100vh";
    document.body.style.overflow = "hidden";
    document.body.style.maxHeight = "100vh";
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = "visible";
    document.documentElement.style.maxHeight = "none";
    document.body.style.overflow = "visible";
    document.body.style.maxHeight = "none";
  };

  useEffect(() => {
    if (!isLoaded) {
      lockScroll();
    }
    if (progress === 100 && !isLoaded) {
      setIsLoaded(true);
      setTimeout(() => {
        setOpacity(0);
        animatePageIn(window.innerWidth, window.innerHeight);
        setTimeout(() => {
          unlockScroll();
        }, 1500);
      }, 2250);
    }
  }, [progress, isLoaded]);

  return (
    <>
      <div
        style={{ opacity: opacity }}
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
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-[2px]">
            <div className="overflow-hidden">
              <motion.div
                variants={widthLoadingAnim}
                initial="initial"
                animate={isLoaded ? "open" : "closed"}
                className="text-5xl font-light"
              >
                <motion.div
                  variants={slideFromRightLoading}
                  custom={1}
                  initial="initial"
                  animate={isLoaded ? "open" : "closed"}
                >
                  ZER
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              variants={opacityLoading}
              initial="initial"
              animate={progress === 100 ? "open" : "closed"}
              className="text-2xl"
            >
              L
            </motion.div>
            <motion.div
              variants={logoLoading}
              initial="initial"
              animate={progress === 100 ? "open" : "closed"}
              className="-mt-[9px]"
            >
              <LogoSVG fill="white" className={"w-full h-full"} />
            </motion.div>
            <motion.div
              variants={opacityLoading}
              initial="initial"
              animate={progress === 100 ? "open" : "closed"}
              className="text-2xl flex gap-[1px] items-center"
            >
              <div>ading</div>
              <div className="h-[24px] flex items-end gap-[1px]">
                <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-1 w-1 bg-white rounded-full animate-bounce" />
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              custom={2}
              variants={slideUpLoading}
              initial="initial"
              animate={isLoaded ? "open" : "closed"}
              className="font-light tracking-[0.15em]"
            >
              DAWN Studios
            </motion.div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
