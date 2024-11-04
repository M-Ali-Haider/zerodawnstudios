"use client";
import LogoSVG from "@/assets/Header/logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TopHeader from "./top";
import BottomHeader from "./bottom";

const Header = () => {
  const topHeader = useRef(null);
  const bottomHeader = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: `${window.innerHeight}px top`,
        onLeave: () => {
          gsap.to(topHeader.current, {
            // scale: 0,
            y: "-82px",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(bottomHeader.current, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(topHeader.current, {
            // scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(bottomHeader.current, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <>
      <TopHeader headerRef={topHeader} />
      <BottomHeader headerRef={bottomHeader} />
    </>
  );
};

export default Header;
