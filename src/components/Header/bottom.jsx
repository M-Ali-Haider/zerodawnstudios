import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import LogoSVG from "@/assets/Header/logo";

const BottomHeader = ({ headerRef }) => {
  return (
    <header
      ref={headerRef}
      className={`scale-0 flex px-6 fixed bottom-7 left-0 right-0 text-black z-50 items-center justify-center`}
    >
      <div className="max-w-[448px] backdrop-blur-[20px] w-full flex justify-between items-center py-4 px-9 rounded-full">
        <div className="flex items-center gap-4">
          <LogoSVG className="w-9 h-9 xl:w-14 xl:h-14" />
          <span className="text-sm">Zero Dawn Studios</span>
        </div>
        <button>
          <BurgerMenuSVG />
        </button>
      </div>
    </header>
  );
};

export default BottomHeader;
