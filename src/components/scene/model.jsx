import { useThree } from "@react-three/fiber";
// import { motion } from "framer-motion-3d";
import Meshes from "./meshes";
const Model = ({
  rotationZ,
  // rotateX,
  // rotateY
}) => {
  const { viewport } = useThree();
  return (
    <group
      // rotation-y={rotateY}
      // rotation-x={rotateX}
      scale={viewport.width / 8}
      dispose={null}
    >
      <group scale={0.01}>
        <Meshes rotationZ={rotationZ} />
      </group>
    </group>
  );
};

export default Model;
