import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
});

export default function Homepage() {
  return (
    <>
      <div className="h-screen w-full flex">
        {/* <div className="flex-1"></div> */}
        <div className="flex-1 border relative">
          <Scene />
        </div>
      </div>
    </>
  );
}
