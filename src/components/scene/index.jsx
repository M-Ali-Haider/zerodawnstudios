"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Suspense, useEffect, useRef } from "react";
import Model from "./model";
export default function Scene({ scrollYProgress }) {
  const rotationZ = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI / 8, -Math.PI / 8]
  );
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const options = {
    damping: 15,
  };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { width, top, left, height } =
      containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = -0.5 + (clientX - left) / width;
    const y = -0.5 + (clientY - top) / height;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  const manageMouseLeave = () => {
    mouse.x.set(0);
    mouse.y.set(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", manageMouseMove);
    container.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      container.removeEventListener("mousemove", manageMouseMove);
      container.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen min-w-[50vw] max-w-[50vw] relative"
    >
      <Canvas
        dpr={useInView ? 0.9 : 0}
        frameLoop={isInView ? "always" : "never"}
      >
        <Environment preset="dawn" />
        <Suspense fallback={null}>
          <Model rotationZ={rotationZ} rotateX={mouse.y} rotateY={mouse.x} />
        </Suspense>
      </Canvas>
    </div>
  );
}
