"use client";
import { useLenis } from "@/providers/LenisScroll";

const BottomSheetLink = ({ closeBottomSheet, item }) => {
  const { scrollToSectionMobile } = useLenis();
  return (
    <div
      onClick={() => {
        closeBottomSheet();
        scrollToSectionMobile(item.id);
      }}
      className="font-light text-4xl leading-[62.26px]"
    >
      {item.name}
    </div>
  );
};

export default BottomSheetLink;
