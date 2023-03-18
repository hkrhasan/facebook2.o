import React from "react";
import clsx from "clsx";

function WhiteBox({ children, className }) {
  return (
    <div
      className={clsx("w-full h-full bg-white shadow-md rounded-lg", className)}
    >
      {children}
    </div>
  );
}

export default WhiteBox;
