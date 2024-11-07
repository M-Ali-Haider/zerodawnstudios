// Meshes.js
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, memo } from "react";
import { motion } from "framer-motion-3d";

// Move helper functions here
const getPosition = (_, index) => {
  const positions = [
    [150, 0, 0],
    [147.589, 0, 26.784],
    [140.435, 0, 52.706],
    [128.767, 0, 76.935],
    [112.961, 0, 98.691],
    [93.523, 0, 117.275],
    [71.08, 0, 132.089],
    [46.353, 0, 142.658],
    [20.135, 0, 148.642],
    [-6.73, 0, 149.849],
    [-33.378, 0, 146.239],
    [-58.954, 0, 137.929],
    [-82.635, 0, 125.186],
    [-103.659, 0, 108.419],
    [-121.353, 0, 88.168],
    [-135.145, 0, 65.083],
    [-144.594, 0, 39.906],
    [-149.396, 0, 13.446],
    [-149.396, 0, -13.446],
    [-144.594, 0, -39.906],
    [-135.145, 0, -65.083],
    [-121.353, 0, -88.168],
    [-103.659, 0, -108.419],
    [-82.635, 0, -125.186],
    [-58.954, 0, -137.929],
    [-33.378, 0, -146.239],
    [-6.73, 0, -149.849],
    [20.135, 0, -148.642],
    [46.353, 0, -142.658],
    [71.08, 0, -132.089],
    [93.523, 0, -117.275],
    [112.961, 0, -98.691],
    [128.767, 0, -76.935],
    [140.435, 0, -52.706],
    [147.589, 0, -26.784],
  ];
  return positions[index];
};

const getRotation = (_, index) => {
  const rotations = [
    [0, 0.175, 0],
    [0, -0.005, 0],
    [0, -0.185, 0],
    [0, -0.364, 0],
    [0, -0.544, 0],
    [0, -0.723, 0],
    [0, -0.903, 0],
    [0, -1.082, 0],
    [0, -1.262, 0],
    [0, -1.441, 0],
    [Math.PI, -1.521, Math.PI],
    [Math.PI, -1.341, Math.PI],
    [Math.PI, -1.162, Math.PI],
    [-Math.PI, -0.982, -Math.PI],
    [-Math.PI, -0.803, -Math.PI],
    [-Math.PI, -0.623, -Math.PI],
    [-Math.PI, -0.444, -Math.PI],
    [-Math.PI, -0.264, -Math.PI],
    [-Math.PI, -0.085, -Math.PI],
    [-Math.PI, 0.095, -Math.PI],
    [-Math.PI, 0.274, -Math.PI],
    [-Math.PI, 0.454, -Math.PI],
    [-Math.PI, 0.633, -Math.PI],
    [-Math.PI, 0.813, -Math.PI],
    [-Math.PI, 0.992, -Math.PI],
    [-Math.PI, 1.172, -Math.PI],
    [-Math.PI, 1.351, -Math.PI],
    [-Math.PI, 1.531, -Math.PI],
    [0, 1.431, 0],
    [0, 1.252, 0],
    [0, 1.072, 0],
    [0, 0.893, 0],
    [0, 0.713, 0],
    [0, 0.534, 0],
    [0, 0.354, 0],
  ];
  return rotations[index];
};

const Meshes = memo(({ rotationZ }) => {
  const meshRefs = useRef([]);
  const { nodes } = useGLTF("/Scene/chips.gltf");

  // Move useMemo inside the component
  const POSITIONS = useMemo(() => Array.from({ length: 35 }, getPosition), []);
  const ROTATIONS = useMemo(() => Array.from({ length: 35 }, getRotation), []);

  // Optimize rotation animation
  useFrame((_, delta) => {
    meshRefs.current.forEach((mesh, index) => {
      if (mesh) {
        mesh.rotation.z += (0.01 + (index % 2 === 0 ? 0.01 : 0)) * delta * 60;
      }
    });
  });

  const meshes = useMemo(
    () =>
      Array.from({ length: 35 }, (_, index) => (
        <mesh
          key={index}
          ref={(el) => (meshRefs.current[index] = el)}
          castShadow
          receiveShadow
          geometry={nodes[`mesh_0_instance_${index}`].geometry}
          material={nodes[`mesh_0_instance_${index}`].material}
          position={POSITIONS[index]}
          rotation={ROTATIONS[index]}
        />
      )),
    [nodes, POSITIONS, ROTATIONS]
  );

  return (
    <motion.group
      rotation-x={Math.PI / 2}
      rotation-y={0}
      rotation-z={rotationZ}
    >
      {meshes}
    </motion.group>
  );
});

Meshes.displayName = "Meshes";
export default Meshes;

// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { motion } from "framer-motion-3d";

// const Meshes = ({ rotationZ }) => {
//   const meshRefs = useRef([]);
//   const { nodes } = useGLTF("/Scene/chips.gltf");
//   useFrame(() => {
//     // groupRef.current.rotation.y += 0.0075;
//     meshRefs.current.forEach((mesh, index) => {
//       if (mesh) {
//         mesh.rotation.z += 0.01 + (index % 2 === 0 ? 0.01 : 0);
//       }
//     });
//   });
//   return (
//     <motion.group
//       rotation-x={Math.PI / 2}
//       rotation-y={0}
//       rotation-z={rotationZ}
//     >
//       {Array.from({ length: 35 }, (_, index) => (
//         <mesh
//           key={index}
//           ref={(el) => (meshRefs.current[index] = el)}
//           castShadow
//           receiveShadow
//           geometry={nodes[`mesh_0_instance_${index}`].geometry}
//           material={nodes[`mesh_0_instance_${index}`].material}
//           position={getPosition(index)}
//           rotation={getRotation(index)}
//         />
//       ))}
//     </motion.group>
//   );
// };

// export default Meshes;

// // Helper function to get the position based on index
// const getPosition = (index) => {
//   const positions = [
//     [150, 0, 0],
//     [147.589, 0, 26.784],
//     [140.435, 0, 52.706],
//     [128.767, 0, 76.935],
//     [112.961, 0, 98.691],
//     [93.523, 0, 117.275],
//     [71.08, 0, 132.089],
//     [46.353, 0, 142.658],
//     [20.135, 0, 148.642],
//     [-6.73, 0, 149.849],
//     [-33.378, 0, 146.239],
//     [-58.954, 0, 137.929],
//     [-82.635, 0, 125.186],
//     [-103.659, 0, 108.419],
//     [-121.353, 0, 88.168],
//     [-135.145, 0, 65.083],
//     [-144.594, 0, 39.906],
//     [-149.396, 0, 13.446],
//     [-149.396, 0, -13.446],
//     [-144.594, 0, -39.906],
//     [-135.145, 0, -65.083],
//     [-121.353, 0, -88.168],
//     [-103.659, 0, -108.419],
//     [-82.635, 0, -125.186],
//     [-58.954, 0, -137.929],
//     [-33.378, 0, -146.239],
//     [-6.73, 0, -149.849],
//     [20.135, 0, -148.642],
//     [46.353, 0, -142.658],
//     [71.08, 0, -132.089],
//     [93.523, 0, -117.275],
//     [112.961, 0, -98.691],
//     [128.767, 0, -76.935],
//     [140.435, 0, -52.706],
//     [147.589, 0, -26.784],
//   ];
//   return positions[index];
// };

// // Helper function to get the rotation based on index
// const getRotation = (index) => {
//   const rotations = [
//     [0, 0.175, 0],
//     [0, -0.005, 0],
//     [0, -0.185, 0],
//     [0, -0.364, 0],
//     [0, -0.544, 0],
//     [0, -0.723, 0],
//     [0, -0.903, 0],
//     [0, -1.082, 0],
//     [0, -1.262, 0],
//     [0, -1.441, 0],
//     [Math.PI, -1.521, Math.PI],
//     [Math.PI, -1.341, Math.PI],
//     [Math.PI, -1.162, Math.PI],
//     [-Math.PI, -0.982, -Math.PI],
//     [-Math.PI, -0.803, -Math.PI],
//     [-Math.PI, -0.623, -Math.PI],
//     [-Math.PI, -0.444, -Math.PI],
//     [-Math.PI, -0.264, -Math.PI],
//     [-Math.PI, -0.085, -Math.PI],
//     [-Math.PI, 0.095, -Math.PI],
//     [-Math.PI, 0.274, -Math.PI],
//     [-Math.PI, 0.454, -Math.PI],
//     [-Math.PI, 0.633, -Math.PI],
//     [-Math.PI, 0.813, -Math.PI],
//     [-Math.PI, 0.992, -Math.PI],
//     [-Math.PI, 1.172, -Math.PI],
//     [-Math.PI, 1.351, -Math.PI],
//     [-Math.PI, 1.531, -Math.PI],
//     [0, 1.431, 0],
//     [0, 1.252, 0],
//     [0, 1.072, 0],
//     [0, 0.893, 0],
//     [0, 0.713, 0],
//     [0, 0.534, 0],
//     [0, 0.354, 0],
//   ];
//   return rotations[index];
// };
