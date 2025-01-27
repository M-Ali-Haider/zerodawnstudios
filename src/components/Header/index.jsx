"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import BottomHeader from "./bottom";
import TopHeader from "./top";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const Header = () => {
  const [end, setEnd] = useState("20px top");
  const { width } = useWindowDimensions();
  const bottomHeader = useRef(null);
  const topHeader = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.killAll();

    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: end,
        onLeave: () => {
          gsap.to(topHeader.current, {
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

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
    };
  }, [end]);

  useEffect(() => {
    if (width < 1024) {
      setEnd("20px top");
    } else {
      setEnd(`${window.innerHeight}px top`);
    }
  }, [width]);
  return (
    <>
      <TopHeader topHeader={topHeader} />
      <BottomHeader headerRef={bottomHeader} />
    </>
  );
};

export default Header;
