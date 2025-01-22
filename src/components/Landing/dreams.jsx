import { slideUpLanding } from "@/utils/textAnim";
import { motion } from "framer-motion";

const DreamsLine = ({ canAnimate }) => {
  const sentence1 = ["WE", "WORK", "ON", "DREAMS"];
  const sentence2 = ["NOT", "JUST", "PROJECTS"];
  return (
    <div
      className="mt-12 xs:mt-8 font-swearDisplay font-normal italic text-base xs:text-[20px] leading-[26.54px] tracking-[0.24em]
        flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex">
        {sentence1.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div
              custom={index + 4}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className=""
            >
              {item}&nbsp;
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex">
        {sentence2.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div
              custom={index + 8}
              variants={slideUpLanding}
              initial="initial"
              animate={canAnimate ? "open" : "closed"}
              className=""
            >
              {item}&nbsp;
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamsLine;
