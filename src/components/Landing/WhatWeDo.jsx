const WhatWeDo = () => {
  return (
    <div
      className="h-screen min-w-[50vw] max-w-[50vw]
        flex flex-col items-center justify-center"
    >
      <div className="max-w-[544px] font-light">
        <div className="text-lg leading-[23.35px]">WHAT WE DO</div>
        <div className="text-5xl leading-[62.26px] mt-4">
          Zero Dawn Studios is a leading digital agency focused on branding,
          UI/UX design, mobile, and web development.
        </div>
        <button
          className="mt-9 font-normal text-2xl leading-[31.13px] 
            border border-black w-full rounded-full py-[74px]"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
