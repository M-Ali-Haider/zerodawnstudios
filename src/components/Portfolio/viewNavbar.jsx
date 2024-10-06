"use client";
import { handleViewChange } from "@/store/Portfolio/view";
import { viewOptions } from "@/utils/viewOptions";
import { useDispatch } from "react-redux";

const ViewNavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 rounded-full bg-gray-700">
      {viewOptions.map((item, index) => (
        <div
          onClick={() => dispatch(handleViewChange(item))}
          className={`cursor-pointer text-sm sm:text-base px-5 sm:px-6 sm:py-3`}
          key={index}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default ViewNavBar;
