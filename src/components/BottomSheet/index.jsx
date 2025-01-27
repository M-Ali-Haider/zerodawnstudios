import { sectionsHeader } from "@/utils/sections";
import BottomSheetWrapper from "./wrapper";

const BottomSheet = () => {
  return (
    <BottomSheetWrapper>
      <div className="pl-5 sm:pl-[41px] pb-6 flex gap-16 flex-wrap items-end justify-between">
        <div className="flex flex-col gap-3">
          {sectionsHeader.map((item, index) => (
            <div className="font-light text-4xl leading-[62.26px]" key={index}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="">
          <div className="text-[#6D6D6D] text-sm xs:text-base xs:leading-[20.75px] font-normal">
            Email us
          </div>
          <div className="font-light text-lg xs:text-xl xs:leading-[31.13px]">
            zerodawnstudios@gmail.com
          </div>
        </div>
      </div>
    </BottomSheetWrapper>
  );
};

export default BottomSheet;
