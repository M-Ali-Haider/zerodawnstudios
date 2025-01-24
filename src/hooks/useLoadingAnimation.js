import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const useLoadingAnimation = (delayMs = 1000) => {
  const { progress } = useProgress();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setCanAnimate(true);
      }, delayMs);

      return () => clearTimeout(timer);
    }
  }, [progress, delayMs]);

  return {
    canAnimate,
    isLoading: progress < 100,
  };
};
