"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Model from "./model";
export default function Scene({ scrollYProgress }) {
  const rotationZ = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI / 4, -Math.PI / 4]
  );
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
        <Model rotationZ={rotationZ} rotateX={mouse.y} rotateY={mouse.x} />
      </Canvas>
    </div>
  );
}
