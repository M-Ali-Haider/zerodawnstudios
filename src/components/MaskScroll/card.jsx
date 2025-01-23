import UpworkSVG from "@/assets/MaskCard/upwork";
import styles from "./style.module.css";
const Card = ({ className, item }) => {
  return (
    <div
      className={`w-[400px] p-8 ${className} ${styles.levitate} bg-white/50 backdrop-blur-2xl relative rounded-2xl border-2 overflow-hidden`}
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
    </div>
  );
};

export default Card;
