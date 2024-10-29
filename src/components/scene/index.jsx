"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./model";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
export default function Scene() {
  const containerRef = useRef(null);
  const options = {
    damping: 20,
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

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", manageMouseMove);
    return () => container.removeEventListener("mousemove", manageMouseMove);
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-screen min-w-[50vw] max-w-[50vw] relative"
    >
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="dawn" />
        <Model rotateX={mouse.y} rotateY={mouse.x} />
      </Canvas>
    </div>
  );
}
