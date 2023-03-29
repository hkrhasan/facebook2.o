import CircleIcon from "../CircleIcon";
import clsx from "clsx";
import avatar from "../../assets/profile.jpeg";
import { Tooltip, Avatar, UserMenuAvatar } from "..";

function RightMenu({ menus }) {
  return (
    <div className={clsx("flex items-center gap-x-2")}>
      {menus.map((menu) => (
        <CircleIcon key={`menu-${menu.id}`} {...menu} />
      ))}
      <Tooltip title="Account">
        <UserMenuAvatar />
      </Tooltip>
    </div>
  );
}

export default RightMenu;
