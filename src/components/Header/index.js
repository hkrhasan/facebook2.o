import React, { Component, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Input from "../Input";
import { HiOutlineSearch } from "react-icons/hi";
import clsx from "clsx";
import { RightMenu, TabBar } from "../";

import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoStorefrontOutline, IoNotificationsSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  {
    id: "home",
    title: "Home",
    Icon: AiFillHome,
    url: "/",
  },
  {
    id: "watch",
    title: "Watch",
    Icon: MdOutlineOndemandVideo,
  },
  {
    id: "marketplace",
    title: "Marketplace",
    Icon: IoStorefrontOutline,
  },
  {
    id: "friends",
    title: "Friends",
    Icon: HiUserGroup,
    url: "/friends",
  },
  {
    id: "gaming",
    title: "Gaming",
    Icon: CgGames,
  },
];

const rightMenu = [
  {
    id: "create",
    title: "Create",
    Icon: AiOutlinePlus,
    className: "md:hidden",
  },
  {
    id: "menu",
    title: "Menu",
    Icon: BsFillGrid3X3GapFill,
    className: "hidden md:block",
  },
  {
    id: "messenger",
    title: "Messenger",
    Icon: BsMessenger,
  },
  {
    id: "notification",
    title: "Notification",
    Icon: IoNotificationsSharp,
  },
];

const row = "flex items-center";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  let location = useLocation();

  useEffect(() => {
    const activeRoute = tabs.find((tab) => tab?.url === location.pathname);

    if (activeRoute) {
      setSelectedTab(activeRoute);
    }
  }, [location]);

  return (
    <div
      className={clsx(
        "h-16 shadow-md bg-white justify-between px-4 sticky top-0",
        row
      )}
    >
      {/* Left Column */}
      <div className={clsx("gap-x-3", row)}>
        <Link to="/">
          <img src={Logo} alt="logo image" width="44px" />
        </Link>
        <div
          className={clsx(
            "bg-[#f0f2f5] p-4 rounded-full h-12 lg:w-72 lg:px-2",
            row
          )}
        >
          <HiOutlineSearch size={20} />
          <Input
            className="hidden lg:block bg-transparent outline-none border-none py-0"
            placeholder="Search facebook"
          />
        </div>
      </div>
      {/* Mid Column */}
      <TabBar
        tabs={tabs}
        selected={selectedTab}
        onTabClick={(tab) => setSelectedTab(tab)}
        className="hidden md:flex md:min-w-[300px] lg:min-w-[680px]"
        controlFromNavigation={true}
      />
      {/* Right Column */}
      <RightMenu menus={rightMenu} />
    </div>
  );
}
