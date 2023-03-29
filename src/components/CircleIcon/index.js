import clsx from "clsx";
import { Tooltip } from "../";

function CircleIcon({ id, title, Icon, className, iconSize }) {
  if (title) {
    return (
      <Tooltip title={title}>
        <div className={clsx("rounded-full p-3 bg-[#f0f2f5]", className)}>
          <Icon size={iconSize || 20} />
        </div>
      </Tooltip>
    );
  }

  return (
    <div className={clsx("rounded-full p-3 bg-[#bcbcbc]", className)}>
      <Icon size={iconSize || 20} />
    </div>
  );
}

export default CircleIcon;
