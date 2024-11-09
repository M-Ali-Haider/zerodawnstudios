"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Suspense, useCallback, useEffect, useMemo, useRef } from "react";
import Model from "./model";
export default function Scene({ scrollYProgress }) {
  const rotationZ = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI / 8, -Math.PI / 8]
  );
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20%" });

  const dpr = useMemo(() => {
    return isInView ? [0.95, 1] : [0, 0];
  }, [isInView]);

  const options = useMemo(
    () => ({
      damping: 15,
      stiffness: 100,
      mass: 1,
    }),
    []
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, options);
  const springY = useSpring(mouseY, options);

  const mouse = useMemo(
    () => ({
      x: springX,
      y: springY,
    }),
    [springX, springY]
  );

  const manageMouseMove = useCallback(
    (e) => {
      const container = containerRef.current;
      if (!containerRef) return;

      const rect = container.getBoundingClientRect();
      const x = -0.5 + (e.clientX - rect.left) / rect.width;
      const y = -0.5 + (e.clientY - rect.top) / rect.height;

      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const manageMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", manageMouseMove);
    container.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      container.removeEventListener("mousemove", manageMouseMove);
      container.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [manageMouseMove, manageMouseLeave]);

  return (
    <div
      ref={containerRef}
      className="h-screen min-w-[50vw] max-w-[50vw] relative"
    >
      <Canvas
        dpr={dpr}
        frameLoop={isInView ? "demand" : "never"}
        performance={{ min: 0.5 }}
      >
        <Environment preset="dawn" />
        <Suspense fallback={null}>
          <Model rotationZ={rotationZ} rotateX={mouse.y} rotateY={mouse.x} />
        </Suspense>
      </Canvas>
    </div>
  );
}
