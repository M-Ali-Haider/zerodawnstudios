import Image from "next/image";
import styles from "./style.module.css";
const Card = ({ className, item }) => {
  return (
    <div
      className={`${className} ${styles.levitate} 
      absolute max-w-[440px] w-full rounded-2xl
      p-8`}
    >
      <div className="flex gap-[14px] items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image
            src={item.src}
            alt="testimonial card image"
            width={48}
            height={48}
            priority
            loading="eager"
          />
        </div>
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
