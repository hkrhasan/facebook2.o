import React from "react";
import clsx from "clsx";

function SignUpRadio({ title, selected, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-full border-2 border-gray-200 rounded-md py-[6px] px-2 cursor-pointer",
        "flex items-center justify-between"
      )}
    >
      <span>{title}</span>
      <input type="radio" name={name} checked={selected} />
    </div>
  );
}

export default SignUpRadio;
