import { motion } from "framer-motion";
const MotionDiv = ({ variants, trigger, children, className, custom = 0 }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={trigger ? "open" : "initial"}
      className={className}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
