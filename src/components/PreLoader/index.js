import React from "react";
import { FiLoader } from "react-icons/fi";
import { TbLoader3 } from "react-icons/tb";

function PreLoader() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <TbLoader3 size={100} className="animate-spin text-blue-500" />
    </div>
  );
}

export default PreLoader;
