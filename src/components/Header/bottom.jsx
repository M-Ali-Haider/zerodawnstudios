import GlassHeader from "./glass";
const BottomHeader = ({ headerRef }) => {
  return (
    <header
      ref={headerRef}
      className={`bottom-7 scale-0 flex sm:hidden px-4 xs:px-6 fixed left-0 right-0 z-50 items-center justify-center 
      text-black`}
    >
      <GlassHeader />
    </header>
  );
};

export default BottomHeader;
