import { motion } from "framer-motion";

const topLineVariants = {
  initial: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: 45,
    y: 7.5,
    x: 1,
  },
};

const bottomLineVariants = {
  initial: {
    rotate: 0,
    y: 0,
    d: "M2 22.5H14.75",
  },
  open: {
    rotate: -45,
    y: -3,
    x: 2,
    d: "M2 22.5H27.75",
  },
};

const TopBurgerMenuSVG = ({ isOpen, className, stroke = "white" }) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <motion.path
      variants={bottomLineVariants}
      initial="initial"
      animate={isOpen ? "open" : "initial"}
      d="M2 22.5H14.75"
      stroke={stroke}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <motion.path
      d="M2 7.5H27.5"
      variants={topLineVariants}
      initial="initial"
      animate={isOpen ? "open" : "initial"}
      stroke={stroke}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TopBurgerMenuSVG;
