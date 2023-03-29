import React from "react";
import DefaultAvatarSrc from "../../assets/default-avatar.png";
import clsx from "clsx";

function Avatar({ src, width, className, enableBorder }) {
  return (
    <div
      className={clsx(
        "rounded-full overflow-hidden",
        className,
        enableBorder && "border-[4px] border-blue-500"
      )}
    >
      <img src={src || DefaultAvatarSrc} width={width || "43px"} />
    </div>
  );
}

export default Avatar;
