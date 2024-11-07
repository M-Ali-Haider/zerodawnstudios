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
import { useLoading } from "@/app/loading-context";
export default function Scene({ scrollYProgress }) {
  const rotationZ = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI / 8, -Math.PI / 8]
  );
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-10%" });

  const options = useMemo(() => {
    damping: 15;
  }, []);

  // const options = {
  //   damping: 15,
  // };
  // const mouse = {
  //   x: useSpring(useMotionValue(0), options),
  //   y: useSpring(useMotionValue(0), options),
  // };

  // const manageMouseMove = (e) => {
  //   const { width, top, left, height } =
  //     containerRef.current.getBoundingClientRect();
  //   const { clientX, clientY } = e;
  //   const x = -0.5 + (clientX - left) / width;
  //   const y = -0.5 + (clientY - top) / height;
  //   mouse.x.set(x);
  //   mouse.y.set(y);
  // };
  // const manageMouseLeave = () => {
  //   mouse.x.set(0);
  //   mouse.y.set(0);
  // };
  // useEffect(() => {
  //   const container = containerRef.current;
  //   container.addEventListener("mousemove", manageMouseMove);
  //   container.addEventListener("mouseleave", manageMouseLeave);
  //   return () => {
  //     container.removeEventListener("mousemove", manageMouseMove);
  //     container.removeEventListener("mouseleave", manageMouseLeave);
  //   };
  // }, []);

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
      if (!containerRef.current) return;
      const { width, top, left, height } =
        containerRef.current.getBoundingClientRect();
      const x = -0.5 + (e.clientX - left) / width;
      const y = -0.5 + (e.clientY - top) / height;
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
        // dpr={useInView ? 1 : 0}
        dpr={[1, 2]}
        frameLoop={isInView ? "always" : "never"}
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
