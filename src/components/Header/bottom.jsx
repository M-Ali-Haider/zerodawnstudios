import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import LogoSVG from "@/assets/Header/logo";
import styles from "./style.module.css";
const BottomHeader = ({ headerRef }) => {
  return (
    <header
      ref={headerRef}
      className={`scale-0 flex px-6 fixed bottom-7 left-0 right-0 z-50 items-center justify-center text-white mix-blend-difference`}
    >
      <div className="bg-[#6D6D6D33] backdrop-blur-3xl max-w-[448px] w-full flex justify-between items-center py-4 px-9 rounded-full">
        <div className="flex items-center gap-4">
          <LogoSVG className="w-9 h-9 xl:w-14 xl:h-14" fill="white" />
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

// background: #6D6D6D33;
// backdrop-filter: blur(20px)
