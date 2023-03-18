import React from "react";
import { BsThreeDots } from "react-icons/bs";

function SidebarHeadingRow({ title }) {
  return (
    <div className="flex items-center justify-between">
      <h4>{title}</h4>
      <div className="rounded-full p-3 hover:bg-gray-200 ">
        <BsThreeDots size={24} />
      </div>
    </div>
  );
}

export default SidebarHeadingRow;
