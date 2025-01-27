import LogoSVG from "@/assets/Header/logo";
import BottomSheet from "../BottomSheet";

const GlassHeader = ({ top = false, topGlassHeaderRef }) => {
  return (
    <div
      ref={topGlassHeaderRef}
      className={`${
        top && "lg:hidden"
      } flex max-w-[448px] w-full justify-between items-center py-2 xs:py-3 px-3 xs:px-8 rounded-full
      backdrop-blur-[20px] bg-[#6D6D6D33]`}
    >
      <div className="flex items-center gap-[10px] xs:gap-4">
        <LogoSVG className="w-[34px] h-[34px] xl:w-14 xl:h-14" fill="black" />
        <span className="text-xs xs:text-sm font-light">Zero Dawn Studios</span>
      </div>
      <BottomSheet />
    </div>
  );
};

export default GlassHeader;
