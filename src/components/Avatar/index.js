import React from "react";
import DefaultAvatarSrc from "../../assets/default-avatar.png";
import clsx from "clsx";
import { Tooltip } from "..";

function Avatar({ src, width, className, enableBorder, tooltipTitle }) {
  const avatarContent = (
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

  if (tooltipTitle) {
    return <Tooltip title={tooltipTitle}>{avatarContent}</Tooltip>;
  }

  return avatarContent;
}

export default Avatar;
