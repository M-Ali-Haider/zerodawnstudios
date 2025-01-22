import LogoSVG from "@/assets/Header/logo";
import GlassHeader from "./glass";

const TopHeader = ({ headerRef }) => {
  return (
    <header
      ref={headerRef}
      className={`flex fixed top-7 left-0 right-0 z-50 items-center
        mix-blend-difference xs:mix-blend-normal 
        text-white xs:text-black
        px-4 xs:px-9
        justify-center xs:justify-normal
      `}
    >
      <GlassHeader top={true} />
      <div className="flex-1 hidden xs:flex items-center gap-4">
        <LogoSVG />
        <span className="text-[17px] leading-[22.05px]">Zero Dawn Studios</span>
      </div>
      <div className="flex-1 hidden xs:flex items-center justify-end">
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

export default TopHeader;
