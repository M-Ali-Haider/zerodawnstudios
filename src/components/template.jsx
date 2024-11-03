"use client";
import { animatePageIn } from "@/components/PageTransition/PageTransition";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { animations } from "@/Data/animations";

export default function Template({ children }) {
  const [width, setWidth] = useState(0);
  //   const pathName = usePathname();
  //   const animation = animations.find((animation) => animation.href === pathName);
  const animationName = "Loading...";

  useEffect(() => {
    setWidth(window.innerWidth);
    animatePageIn(window.innerWidth, window.innerHeight);
  }, []);
  return (
    <>
      <div
        style={{ opacity: width > 0 ? 0 : 1 }}
        className="fixed w-screen h-screen z-10 pointer-events-none bg-black"
      />
      <svg
        id="banner-1"
        className="h-[calc(100vh+600px)] w-screen z-[90] fixed top-0 left-0 pointer-events-none"
      >
        <path id="banner-3" style={{ fill: "black" }}></path>
      </svg>
      <div
        id="banner-2"
        className="text-6xl fixed left-[50%] top-[40%] -translate-x-[50%] text-white z-[100] pointer-events-none"
      >
        {animationName}
      </div>
      {children}
    </>
  );
}
