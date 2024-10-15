import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import Meshes from "./meshes";
const Model = ({ rotateX, rotateY }) => {
  const { viewport } = useThree();
  return (
    <motion.group
      rotation-y={rotateY}
      rotation-x={rotateX}
      scale={viewport.width / 8}
      dispose={null}
    >
      <group scale={0.01}>
        <spotLight
          intensity={1.877}
          angle={Math.PI / 6}
          decay={2}
          distance={7010}
          color="#c483f2"
          position={[940.784, 70.04, 389.408]}
          rotation={[1.393, 0, -1.532]}
        />

        <spotLight
          intensity={3}
          angle={Math.PI / 6}
          penumbra={0.2}
          decay={2}
          distance={8628}
          color="#f3e650"
          position={[751.69, -220.43, -298.17]}
          rotation={[1.393, 0, -1.802]}
        />

        <Meshes />
      </group>
    </motion.group>
  );
};

export default Model;
