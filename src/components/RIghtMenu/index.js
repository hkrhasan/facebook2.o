import CircleIcon from "../CircleIcon";
import clsx from "clsx";
import avatar from "../../assets/profile.jpeg";
import { Tooltip, Avatar } from "..";

function RightMenu({ menus }) {
  return (
    <div className={clsx("flex items-center gap-x-2")}>
      {menus.map((menu) => (
        <CircleIcon key={`menu-${menu.id}`} {...menu} />
      ))}
      <Tooltip title="Account">
        <Avatar src={avatar} />
      </Tooltip>
    </div>
  );
}

export default RightMenu;
