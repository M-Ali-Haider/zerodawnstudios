import { portfolioOptions } from "@/utils/portfolioOptions";

const PortfolioOptions = () => {
  return (
    <div className="hidden sm:flex items-center gap-4 rounded-full bg-gray-700">
      {portfolioOptions.map((item, index) => (
        <div key={index} className="cursor-pointer px-6 py-3">
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default PortfolioOptions;
