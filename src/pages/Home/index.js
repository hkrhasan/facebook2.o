import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Avatar, Header, SidebarRow, TabBar, WhiteBox } from "../../components";
import avatar from "../../assets/profile.jpeg";
import { FaBookOpen } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import testImage from "../../assets/profile.jpeg";
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
      <main className="grid grid-cols-3 px-3 pt-4 gap-x-40">
        {/* Left col */}
        <div className="overflow-y-scroll">
          {leftSideBarMenus.map((menu) => (
            <SidebarRow key={`left-side-menu-${menu.id}`} {...menu} />
          ))}
        </div>
        {/* Mid col */}
        <div className="overflow-y-scroll  min-w-[680px]">
          <MidColHeader />
        </div>
        {/* Right col */}
        <div className="overflow-y-scroll "></div>
      </main>
    </div>
  );
}

export default HomePage;

function MidColHeader() {
  const tabs = [
    {
      id: "stories",
      title: "Stories",
      Icon: FaBookOpen,
    },
    {
      id: "reels",
      title: "Reels",
      Icon: SiYoutube,
    },
  ];

  const [tab, setTab] = useState(tabs[0]);
  return (
    <WhiteBox>
      <div className="px-4 pt-1 border-b-[1px] pb-2">
        <TabBar
          disableTooltip={true}
          displayTitle={true}
          tabs={tabs}
          selected={tab}
          onTabClick={(tab) => setTab(tab)}
        />
      </div>
      <div className="py-5">
        <div className="flex items-center gap-x-3 overflow-x-scroll w-full hide-scrollbar">
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
          <ImageCard img={testImage} />
        </div>
      </div>
    </WhiteBox>
  );
}

function ImageCard({ img }) {
  return (
    <div className="h-48 w-28 overflow-hidden rounded-xl relative group min-w-[112px]">
      <div className="transition duration-150 delay-300 hover:ease-in group-hover:scale-105">
        <AspectRatio.Root ratio={1 / 2}>
          <img className="h-full w-full object-cover" src={img} alt="story" />
        </AspectRatio.Root>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20" />
      <Avatar
        className="absolute top-4 left-4"
        src={img}
        enableBorder={true}
        width="35px"
      />
      <p className="absolute bottom-1 text-white text-center inset-x-0 font-medium text-sm">
        Hkr hasan
      </p>
    </div>
  );
}
