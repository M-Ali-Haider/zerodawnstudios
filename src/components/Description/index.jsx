import dynamic from "next/dynamic";
import Link from "next/link";

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
});

const Description = () => {
  return (
    <div className="bg-[#F1F1F1] min-h-screen flex flex-wrap w-full">
      <Scene />
      <div className="flex-1 flex flex-col justify-center min-w-[300px]">
        <div className="font-light text-base md:text-2xl mb-4">WHAT WE DO</div>
        <div className="text-xl md:text-[64px] md:leading-[83.01px] font-light">
          Zero Dawn Studios is a leading digital agency focused on branding,
          UI/UX design, mobile, and web development.
        </div>
        <Link
          href={"/"}
          className="py-8 md:py-16 mt-10 w-full border border-black rounded-full font-normal text-base md:text-xl flex items-center justify-center max-w-[600px]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Description;
