"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./model";
export default function Scene() {
  return (
    <Canvas>
      <Environment preset="dawn" />
      <Model />
    </Canvas>
  );
}
