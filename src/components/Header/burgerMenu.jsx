"use client";

import { handleOnChange } from "@/store/bottomSheet";
import { useDispatch } from "react-redux";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(handleOnChange())}
      className="h-8 w-8 flex flex-col justify-between cursor-pointer"
    >
      <div className="w-full h-1 bg-white" />
      <div className="w-full h-1 bg-white" />
      <div className="w-full h-1 bg-white" />
    </div>
  );
};

export default BurgerMenu;
