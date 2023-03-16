import React from "react";

import Avatar from "../Avatar";

function SidebarRow({ img, title, as }) {
  return (
    <div className="flex items-center w-full hover:bg-gray-200 py-2 rounded-md px-2 cursor-pointer gap-x-4">
      {as === "profile" ? (
        <Avatar src={img} width="40px" />
      ) : (
        <div>
          <img src={img} width="40px" />
        </div>
      )}
      <span>{title}</span>
    </div>
  );
}

export default SidebarRow;
