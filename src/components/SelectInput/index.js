import React from "react";
import clsx from "clsx";

function SelectInput({ options, value, onChange, name }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={clsx(
        "w-full border-2 border-gray-200 rounded-md py-[6px] px-2"
      )}
    >
      {options?.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
    </select>
  );
}

export default SelectInput;
