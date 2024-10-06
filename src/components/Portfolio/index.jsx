import PortfolioGrid from "./grid";
import PortfolioOptions from "./options";
import ViewNavBar from "./viewNavbar";

const Portfolio = () => {
  return (
    <main className="pt-[calc(76px+50px)] flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-[1280px] w-full">
        <div className="w-full flex flex-wrap gap-6 items-center justify-between">
          <PortfolioOptions />
          <ViewNavBar />
        </div>
        <PortfolioGrid />
      </div>
    </main>
  );
};

export default Portfolio;
