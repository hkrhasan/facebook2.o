import React, {
  Component,
  PureComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Header,
  SidebarRow,
  TabBar,
  WhiteBox,
  StoryController,
  PostController,
  SidebarHeadingRow,
} from "../../components";
import avatar from "../../assets/profile.jpeg";

import {
  Friends,
  Groups,
  MarketPlace,
  MostRecent,
  Watch,
} from "../../assets/facebookicons";

const leftSideBarMenus = [
  {
    id: "profile",
    title: "Talib Hasan",
    img: avatar,
    as: "profile",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
];

function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="h-screen w-full bg-[#f0f2f5]">
      <Header />
      <main
        className="px-3 pt-4 grid gap-x-24"
        style={{ gridTemplateColumns: "300px auto 300px" }}
      >
        {/* Left col */}
        <div className="overflow-y-scroll">
          {leftSideBarMenus.map((menu) => (
            <SidebarRow key={`left-side-menu-${menu.id}`} {...menu} />
          ))}
        </div>
        {/* Mid col */}
        <div className="grid justify-center">
          <div className="grid gap-y-5 w-[700px]">
            <StoryController />
            <PostController />
          </div>
        </div>
        {/* Right col */}
        <div className="overflow-y-scroll ">
          <SidebarHeadingRow title="Your Pages and profiles" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
