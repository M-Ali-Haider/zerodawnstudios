import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { memo } from "react";
import Meshes from "./meshes";

const Model = memo(({ rotationZ, rotateX, rotateY }) => {
  const { viewport } = useThree();
  const scale = viewport.width / 8;

  return (
    <motion.group
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
