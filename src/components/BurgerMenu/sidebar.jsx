import { sectionsHeader } from "@/utils/sections";
import { motion } from "framer-motion";
import SidebarLink from "./links";

const SidebarAnimation = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Sidebar({ setIsOpen }) {
  return (
    <motion.div
      variants={SidebarAnimation}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed hidden lg:block top-0 right-0 h-full w-2/5 z-40 bg-black"
    >
      <div className="relative overflow-visible h-full w-full flex flex-col justify-center gap-4">
        <div className="sm:pl-[41px]">
          <div className="flex flex-col gap-3">
            {sectionsHeader.map((item, index) => {
              return (
                <SidebarLink
                  key={index}
                  item={item}
                  index={index}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className="mt-[72px]">
            <div className="text-[#6D6D6D] leading-[20.75px] font-normal">
              Email us
            </div>
            <div className="font-light text-2xl leading-[31.13px] text-white">
              zerodawnstudios@gmail.com
            </div>
          </div>
        </div>
        <SidebarCurve />
      </div>
    </motion.div>
  );
}

function SidebarCurve() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className=" absolute h-full w-24 -left-24">
      <motion.path
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
