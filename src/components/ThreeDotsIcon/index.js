import React from "react";
import { BsThreeDots } from "react-icons/bs";

const ThreeDotsIcon = ({ size }) => {
  return (
    <div className="rounded-full p-3 hover:bg-gray-200 cursor-pointer">
      <BsThreeDots size={size || 24} />
    </div>
  );
};

export default ThreeDotsIcon;
