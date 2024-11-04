import { maskCards } from "@/utils/maskCards";
import { motion, useTransform } from "framer-motion";
import Card from "./card";
const classNames = [
  "-left-[30%] -top-[30%]",
  "left-[30%] -top-[20%]",
  "-left-[35%] top-[30%]",
  "top-[28%] left-[25%]",
];

const InsideMask = ({ scrollYProgress }) => {
  const scaleCenter = useTransform(scrollYProgress, [0, 1], [4, 1]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [5, 1]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [6, 1]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [8, 1]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [9, 1]);

  const scaleMap = {
    0: scale5,
    1: scale6,
    2: scale8,
    3: scale9,
  };
  return (
    <div className="w-full h-full bg-white relative">
      <motion.div
        style={{ scale: scaleCenter }}
        className="w-full h-full absolute top-0 flex items-center justify-center"
      >
        <div className="font-normal text-9xl leading-[166.02px] flex flex-col items-center justify-center">
          <div>Look</div>
          <div>what our clients</div>
          <div>have to say</div>
        </div>
      </motion.div>

      {maskCards.map((item, index) => (
        <motion.div
          style={{ scale: scaleMap[index] }}
          key={index}
          className="w-full h-full absolute top-0 flex items-center justify-center"
        >
          <Card
            item={item}
            className={classNames[index]}
            scale={scaleMap[index]}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default InsideMask;
