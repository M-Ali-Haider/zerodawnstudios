"use client";

import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within a LenisScrollProvider");
  }
  return context;
};

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(undefined);
  const rafHandleRef = useRef(null);
  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        syncTouch: true,
      });
      const raf = (time) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  const lockScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  const unlockScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  const scrollToSection = (id) => {
    unlockScroll();
    const element = document.querySelector(id);
    if (element) {
      lenisRef.current.scrollTo(element, {
        duration: 5,
        lock: false,
        offset: id === "#testimonials" ? window.innerHeight * 3 : 0,
      });
    }
  };

  const scrollToSectionMobile = (id) => {
    const element = document.querySelector(id);
    if (element) {
      lenisRef.current.scrollTo(element, {
        duration: 4,
        lock: false,
        offset: id === "#testimonials" ? window.innerHeight * 3 : 0,
      });
    }
  };

  return (
    <LenisContext.Provider
      value={{
        lockScroll,
        unlockScroll,
        scrollToSection,
        scrollToSectionMobile,
      }}
    >
      {children}
    </LenisContext.Provider>
  );
};

export default LenisScrollProvider;
