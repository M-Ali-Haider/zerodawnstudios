import { maskCards } from "@/utils/maskCards";
import Card from "./card";

const MobileTestimonials = () => {
  return (
    <div className="xl:hidden bg-white flex flex-col gap-4 items-center px-6 pb-12">
      {maskCards.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default MobileTestimonials;
