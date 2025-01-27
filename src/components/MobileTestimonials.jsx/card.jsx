import UpworkSVG from "@/assets/MaskCard/upwork";
import { mobTestimonialCardAnim } from "@/utils/mobiletestimonialAnim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Card = ({ item }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "50px", once: true });
  return (
    <motion.div
      ref={cardRef}
      variants={mobTestimonialCardAnim}
      initial="initial"
      animate={isInView ? "open" : "initial"}
      className={`w-full p-8 bg-white/50 relative rounded-2xl border-2 overflow-hidden`}
    >
      <div className="flex gap-[14px] items-center">
        <UpworkSVG className="w-12 h-12" />
        <div>
          <div className="font-normal text-base leading-[20.75px]">
            {item.name}
          </div>
          <div className="font-light leading-[18.16px] text-sm">
            {item.designation}
          </div>
        </div>
      </div>
      <div className="mt-[18px] font-light text-lg leading-[23.35px]">
        {item.desc}
      </div>
      <div className="mt-[18px] text-[12px] leading-[15.56px] font-normal">
        {item.date}
      </div>
    </motion.div>
  );
};

export default Card;
