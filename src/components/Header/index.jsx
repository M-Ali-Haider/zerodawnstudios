import LogoSVG from "../../../public/logo";
import BurgerMenu from "./burgerMenu";

const Header = () => {
  return (
    <>
      <div
        className={`fixed top-4 left-0 right-0 h-[76px] overflow-hidden flex items-center justify-center z-[80]`}
      >
        <div className="max-w-[1280px] w-full h-full flex bg-red-500 rounded-full py-2 px-7">
          <div className="flex-1 h-full">
            <LogoSVG />
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 flex items-center justify-end">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
