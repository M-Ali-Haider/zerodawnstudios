import HorizontalScroll from "../HorizontalScroll";
import StickyCards from "../StickyCards";

const Home = () => {
  return (
    <>
      <main className="pt-[calc(76px+50px)] flex flex-col items-center justify-center">
        <div className="w-full px-6 sm:px-10 flex flex-col items-center justify-center">
          <StickyCards />
        </div>
        <HorizontalScroll />
        <div className={"h-screen"} />
      </main>
    </>
  );
};

export default Home;
