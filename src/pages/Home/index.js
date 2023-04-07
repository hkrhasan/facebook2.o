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
  PreLoader,
  ThreeDotsIcon,
} from "../../components";
import avatar from "../../assets/profile.jpeg";
import {
  SET_USER,
  LOGOUT,
  SET_LOADING,
  selectUser,
} from "../../store/reducers/user.reducer";

import {
  Friends,
  Groups,
  MarketPlace,
  MostRecent,
  Watch,
} from "../../assets/facebookicons";
import { useDispatch, useSelector } from "react-redux";
import AuthPage from "../AuthPage";
import clsx from "clsx";
import { GiEarthAmerica } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { TbShare3 } from "react-icons/tb";

const leftSideBarMenus = [
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
  const [sideBarMenus, setSideBarMenus] = useState(leftSideBarMenus);
  const navigate = useNavigate();
  const { user, isLoading } = useSelector(selectUser);

  useEffect(() => {
    const withoutProfileMenus = sideBarMenus.filter(
      (menu) => menu.id !== "profile"
    );

    if (user) {
      setSideBarMenus([
        {
          id: "profile",
          title: user?.displayName,
          img: user?.image,
          as: "profile",
        },
        ...withoutProfileMenus,
      ]);
    }
  }, [user]);

  // if (isLoading) return <PreLoader />;

  const heightAndScroll = "h-[calc(100vh-4rem)] overflow-y-scroll pb-2";

  return (
    <AuthPage>
      <div className="h-screen w-full bg-[#f0f2f5] overflow-hidden">
        <Header />
        <main
          className="px-3 py-4 grid gap-x-24 items-start h-[calc(100vh-4rem)]"
          style={{ gridTemplateColumns: "300px auto 300px" }}
        >
          {/* Left col */}
          <div className={clsx(heightAndScroll)}>
            {sideBarMenus.map((menu) => (
              <SidebarRow key={`left-side-menu-${menu.id}`} {...menu} />
            ))}
          </div>
          {/* Mid col */}
          <div
            className={clsx(
              "grid justify-center items-start",
              heightAndScroll,
              "hide-scrollbar"
            )}
          >
            <div className="grid gap-y-5 w-[700px]">
              <StoryController />
              <PostController />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          {/* Right col */}
          <div className={clsx(heightAndScroll)}>
            <SidebarHeadingRow title="Your Pages and profiles" />
          </div>
        </main>
      </div>
    </AuthPage>
  );
}

export default HomePage;

function PostCard() {
  return (
    <WhiteBox>
      <div>
        <div className="flex-i-center justify-between px-3 py-2">
          <div className="flex-i-center gap-x-2">
            <Avatar />
            <div>
              <p className="text-sm font-bold">Hkrhasan</p>
              <div className="flex-i-center gap-x-1 text-sm font-light text-gray-500">
                <p className="">1 h</p>
                <BsDot />
                <GiEarthAmerica />
              </div>
            </div>
          </div>
          <div>
            <ThreeDotsIcon />
          </div>
        </div>
        <div>
          <div className="px-3 py-2 text-lg">
            <p>this is body text</p>
          </div>
          <div>
            <img src={avatar} />
          </div>
        </div>
        <div className="flex-i-center justify-between py-3 px-3">
          <div className={clsx("flex-i-center gap-x-2")}>
            <div className="bg-blue-500 rounded-full p-1">
              <AiFillLike className="text-white" />
            </div>
            <p className="text-sm">46</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">2 Comments</p>
          </div>
        </div>
        <div className="flex-i-center mx-3 my-2 py-1 border-y-2">
          <PostActionButton Icon={AiOutlineLike} title="Like" />
          <PostActionButton Icon={GoComment} title="Comment" />
          <PostActionButton Icon={TbShare3} title="Share" />
        </div>
      </div>
    </WhiteBox>
  );
}

function PostActionButton({ Icon, title }) {
  return (
    <div className="hover:bg-[#efefef] w-full flex items-center justify-center py-1 rounded-lg gap-x-2 text-sm">
      <Icon size={20} />
      <p>{title}</p>
    </div>
  );
}
