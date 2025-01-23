const Card = ({ item }) => {
  return (
    <div
      className="rounded-[32px] h-full bg-white flex flex-col 
       min-w-[94vw] max-w-[94vw] sm:min-w-[70vw] sm:max-w-[70vw] lg:min-w-[40vw] lg:max-w-[40vw] p-6"
    >
      <div className="flex-1 bg-[#C4C4C4] rounded-2xl"></div>
      <div className="mt-4">
        <div className="text-2xl services:text-[32px] services:leading-[41.5px] font-normal mb-4 services:mb-6">
          {item.title}
        </div>
        <div className="text-base services:text-2xl services:leading-[31.13px] font-light mb-4 services:mb-6">
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
