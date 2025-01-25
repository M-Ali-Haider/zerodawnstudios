import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { memo } from "react";
import Meshes from "./meshes";

const Model = memo(({ xPosition, rotationZ, rotateX, rotateY }) => {
  const { viewport } = useThree();
  const { width } = useWindowDimensions();

  const scale =
    width >= 1280
      ? viewport.width / 8
      : viewport.width < 7.197
      ? viewport.width / 5.5
      : viewport.width >= 7.198 && viewport.width <= 8.164
      ? viewport.width / 6
      : viewport.width >= 8.165 && viewport.width <= 13.085
      ? viewport.width / 10
      : viewport.width >= 13.086 && viewport.width <= 16.36
      ? viewport.width / 12
      : viewport.width / 8;
  return (
    <motion.group
      position={[xPosition, 0, 0]}
      rotation-y={rotateY}
      rotation-x={rotateX}
      scale={scale}
      dispose={null}
    >
      <group scale={0.01}>
        <Meshes rotationZ={rotationZ} />
      </group>
    </motion.group>
  );
});

Model.displayName = "Model";
export default Model;
