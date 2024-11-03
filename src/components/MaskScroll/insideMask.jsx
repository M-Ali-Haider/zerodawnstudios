import { maskCards } from "@/utils/maskCards";
import Card from "./card";

const classNames = [
  "left-40 top-[8.59%]",
  "left-12 bottom-[4.68%]",
  "right-10 top-[18.3%]",
  "right-24 bottom-[7.03%]",
];

const InsideMask = () => {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative">
      <div className="font-normal text-9xl leading-[166.02px] flex flex-col items-center justify-center">
        <div>Look</div>
        <div>what our clients</div>
        <div>have to say</div>
      </div>
      {maskCards.map((item, index) => (
        <Card key={index} item={item} className={classNames[index]} />
      ))}
    </div>
  );
};

export default InsideMask;
