import React from "react";
import clsx from "clsx";

function Input({ type, value, onChange, className, placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(
        "w-full border-2 border-gray-200 rounded-md py-[6px] px-2",
        className
      )}
      {...props}
    />
  );
}

export default Input;
