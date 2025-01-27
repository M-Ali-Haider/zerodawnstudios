import { motion } from "framer-motion";
import DennisMagnetButton from "../Button/dennisMagnet";
import { useLenis } from "@/providers/LenisScroll";

export default function SidebarLink({ item, index, setIsOpen }) {
  const { scrollToSection } = useLenis();
  return (
    <motion.div
      key={index}
      variants={SidebarLinksAnimation}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <DennisMagnetButton range={0.5}>
        <button
          className="font-light text-5xl leading-[62.26px] text-white"
          onClick={() => {
            setIsOpen(false);
            scrollToSection(item.id);
          }}
        >
          {item.name}
        </button>
      </DennisMagnetButton>
    </motion.div>
  );
}

const SidebarLinksAnimation = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
