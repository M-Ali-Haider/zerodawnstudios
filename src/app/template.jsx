"use client";

import LogoSVG from "@/assets/Header/logo";
import { animatePageIn } from "@/components/PageTransition";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideFromRightLoading } from "@/utils/loadingAnim";

export default function Template({ children }) {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  const lockScroll = () => {
    console.log("Scrolling banned");
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.maxHeight = "100vh";
    document.body.style.overflow = "hidden";
    document.body.style.maxHeight = "100vh";
  };

  const unlockScroll = () => {
    console.log("Scrolling allowed");
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
      setTimeout(() => {
        setIsLoaded(true);
        animatePageIn(window.innerWidth, window.innerHeight);
        setTimeout(() => {
          unlockScroll();
        }, 1500);
      }, 1000);
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
        className="fixed left-[50%] top-[40%] -translate-x-[50%] text-white z-[100] pointer-events-none"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="overflow-hidden text-5xl">
              <motion.div
                variants={slideFromRightLoading}
                initial="initial"
                animate={progress === 100 ? "open" : "closed"}
              >
                ZER
              </motion.div>
            </div>
            <LogoSVG fill="white" className={"w-12 h-12"} />
          </div>
          {progress !== 100 && <div className="">{Math.round(progress)}%</div>}
        </div>
      </div>
      {children}
    </>
  );
}
