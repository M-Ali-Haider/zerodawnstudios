"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import BottomHeader from "./bottom";
import TopHeader from "./top";

const Header = () => {
  const bottomHeader = useRef(null);
  const topHeader = useRef(null);
  const lastButtonRef = useRef(null);

  const [isContact, setIsContact] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        // end: `${window.innerHeight}px top`,
        end: `50px top`,
        onLeave: () => {
          setIsContact(false);
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
          gsap.to(lastButtonRef.current, {
            width: "57.6px",
            duration: 0.5,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          setIsContact(true);
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
          gsap.to(lastButtonRef.current, {
            width: "147.79px",
            duration: 0.3,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <>
      <TopHeader
        topHeader={topHeader}
        lastButtonRef={lastButtonRef}
        isContact={isContact}
      />
      <BottomHeader headerRef={bottomHeader} />
    </>
  );
};

export default Header;
