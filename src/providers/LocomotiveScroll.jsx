"use client";

import { useEffect } from "react";

const LocomotiveScroll = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return children;
};

export default LocomotiveScroll;
