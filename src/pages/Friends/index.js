import React from "react";
import Header from "../../components/Header";
import FriendsCard from "../../components/FriendsCard";
import AuthPage from "../AuthPage";
import { IoSettingsSharp } from "react-icons/io5";
import { BiUserPlus } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { AddFriendsCard } from "../../components";

const friendPageOption = [
  {
    id: "1",
    icon: <BiUserPlus />,
    title: "Home",
  },
  {
    id: "2",
    icon: <BiUserPlus />,
    title: "Friend Requests",
    icon2: <IoIosArrowForward />,
  },
  {
    id: "3",
    icon: <BiUserPlus />,
    title: "Suggestion",
    icon2: <IoIosArrowForward />,
  },
  {
    id: "4",
    icon: <BiUserPlus />,
    title: "All Friends",
    icon2: <IoIosArrowForward />,
  },
  {
    id: "5",
    icon: <BiUserPlus />,
    title: "Birthdays",
  },
  {
    id: "6",
    icon: <BiUserPlus />,
    title: "Custom Links",
    icon2: <IoIosArrowForward />,
  },
];

const Friends = () => {
  const heightAndScroll = "h-[calc(100vh-4rem)] overflow-y-scroll pb-2";
  return (
    <AuthPage>
      <div className="h-screen w-full bg-[#f0f2f5] overflow-hidden">
        <Header />
        <main
          className=" grid items-start h-[calc(100vh-4rem)] gap-x-2  lg:grid-cols-[360px_1fr]"
          // style={{ gridTemplateColumns: "300px auto 300px" }}
        >
          {/* Left col */}
          <div
            className={clsx(
              heightAndScroll,
              "bg-white shadow-md hidden lg:block"
            )}
          >
            <div className="h-full border-2 px-3">
              <div className="flex items-center justify-between p-2">
                <div>
                  <span className="text-2xl font-semibold ">Friends</span>
                </div>
                <div className="rounded-full p-2 text-xl  bg-zinc-200 hover:bg-gray-100 cursor-pointer ">
                  <IoSettingsSharp />
                </div>
              </div>
              <div>
                {friendPageOption.map((item) => {
                  return (
                    <div className="flex items-center justify-between p-2 hover:bg-zinc-200 rounded-md">
                      <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-zinc-300">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <div className="text-[17px] font-medium">
                          {item.title}
                        </div>
                      </div>
                      <div className="text-xl">{item?.icon2}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right col */}
          <div
            className={clsx(
              heightAndScroll,
              "hide-scrollbar px-4 py-3 grid gap-y-4"
            )}
          >
            {/* <!-- Content here --> */}
            <div className="">
              <p className=" text-xl font-bold">People You May Know</p>
            </div>
            <div className="grid gap-6 md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)] lg:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)_minmax(300px,_1fr)] xl:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)_minmax(300px,_1fr)_minmax(300px,_1fr)]">
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
              <AddFriendsCard />
            </div>
          </div>
          {/* <FriendsCard /> */}
        </main>
      </div>
    </AuthPage>
  );
};

export default Friends;
