import clsx from "clsx";
import { Tooltip } from "../";

function CircleIcon({ id, title, Icon, className }) {
  return (
    <Tooltip title={title}>
      <div className={clsx("rounded-full p-3 bg-[#f0f2f5]", className)}>
        <Icon size={20} />
      </div>
    </Tooltip>
  );
}

export default CircleIcon;
