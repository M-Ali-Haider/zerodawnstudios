"use client";
import { handleViewChange } from "@/store/Portfolio/view";
import { viewOptions } from "@/utils/viewOptions";
import { useDispatch } from "react-redux";

const ViewNavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="hidden sm:flex items-center gap-4 rounded-full bg-gray-700">
      {viewOptions.map((item, index) => (
        <div
          onClick={() => dispatch(handleViewChange(item))}
          className={`cursor-pointer px-6 py-3`}
          key={index}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default ViewNavBar;
