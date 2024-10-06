"use client";

import { useSelector } from "react-redux";

const PortfolioGrid = () => {
  const { view } = useSelector((state) => state.viewPortfolio);

  const className =
    view.title === "Laptop"
      ? "w-full sm:w-[calc(50%-16px)] aspect-[1920/1080]"
      : view.title === "Tablet"
      ? "w-[calc(50%-16px)] sm:w-[calc(33%-21.34px)] md:w-[calc(25%-24px)] aspect-[768/1024]"
      : "w-[calc(50%-16px)] xs:w-[calc(33%-21.34px)] sm:w-[calc(25%-24px)] lg:w-[calc(20%-25.6px)] aspect-[540/960]";

  return (
    <div className="mt-20">
      <div className={`w-full flex flex-wrap items-center gap-8`}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`border ${className} 
            rounded-lg flex items-center justify-center
            transition-all ease-olivier-ease duration-500`}
          >
            {view.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
