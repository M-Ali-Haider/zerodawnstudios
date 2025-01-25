"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import BottomHeader from "./bottom";
import TopHeader from "./top";

const Header = () => {
  const bottomHeader = useRef(null);
  const logoRef = useRef(null);
  const optionsRef = useRef(null);
  const lastButtonRef = useRef(null);
  const topGlassHeaderRef = useRef(null);

  const [isContact, setIsContact] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: `${window.innerHeight}px top`,
        onLeave: () => {
          setIsContact(false);
          gsap.to(logoRef.current, {
            y: "-82px",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(optionsRef.current, {
            y: "-82px",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(topGlassHeaderRef.current, {
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
            duration: 0.3,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          setIsContact(true);
          gsap.to(logoRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(optionsRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          });
          gsap.to(topGlassHeaderRef.current, {
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
        logoRef={logoRef}
        optionsRef={optionsRef}
        lastButtonRef={lastButtonRef}
        topGlassHeaderRef={topGlassHeaderRef}
        isContact={isContact}
      />
      <BottomHeader headerRef={bottomHeader} />
    </>
  );
};

export default Header;
