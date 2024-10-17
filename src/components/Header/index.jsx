import LogoSVG from "@/assets/Header/logo";

const Header = () => {
  return (
    <header className="px-9 fixed top-7 left-0 right-0 flex text-black z-50 items-center">
      <div className="flex-1 flex items-center gap-4">
        <LogoSVG />
        <span className="text-[17px] leading-[22.05px]">Zero Dawn Studios</span>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <button
          className="bg-black text-white px-8 py-4 rounded-full 
          text-base leading-[20.75px]"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
