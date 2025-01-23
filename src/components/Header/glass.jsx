import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import LogoSVG from "@/assets/Header/logo";

const GlassHeader = ({ top = false }) => {
  return (
    <div
      className={`${
        top && "xs:hidden"
      } flex max-w-[448px] w-full justify-between items-center py-2 xs:py-4 px-3 xs:px-9 rounded-full
      backdrop-blur-[20px] bg-[#6D6D6D33]`}
    >
      <div className="flex items-center gap-[10px] xs:gap-4">
        <LogoSVG className="w-[34px] h-[34px] xl:w-14 xl:h-14" fill="black" />
        <span className="text-xs xs:text-sm font-light">Zero Dawn Studios</span>
      </div>
      <button>
        <BurgerMenuSVG className="w-8 h-8 xs:w-[44px] xs:h-[44px]" />
      </button>
    </div>
  );
};

export default GlassHeader;
