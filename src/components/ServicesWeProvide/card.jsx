import Image from "next/image";

const Card = ({ item, propRef }) => {
  return (
    <div
      ref={propRef}
      className="rounded-[32px] bg-white flex flex-col p-6
       aspect-[358/517] sm:aspect-[576/652]"
    >
      <div
        className="relative rounded-2xl 
        aspect-[310/314] sm:aspect-[528/398]"
      >
        <Image
          src="/Services/servicesbg.webp"
          alt="services bg image"
          fill
          className=""
          loading="eager"
          priority
        />
        <Image
          src={item.src}
          fill
          alt="card main image"
          style={{ scale: item.scale, top: item.top }}
          className={`object-contain`}
          loading="eager"
          priority
        />
      </div>
      <div className="mt-4">
        <div className="text-2xl 2xl:text-[32px] 2xl:leading-[41.5px] font-normal mb-4 2xl:mb-6">
          {item.title}
        </div>
        <div className="text-base 2xl:text-2xl 2xl:leading-[31.13px] font-light mb-4 2xl:mb-6">
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default Card;

// min-w-[94vw] max-w-[94vw] sm:min-w-[70vw] sm:max-w-[70vw] lg:min-w-[40vw] lg:max-w-[40vw]
