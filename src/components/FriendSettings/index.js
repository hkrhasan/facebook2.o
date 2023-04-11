import { IoSettingsSharp } from "react-icons/io5";
import { BiUserPlus } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

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

const FriendSettings = () => {
  return (
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
                  <spna className="text-3xl">{item.icon}</spna>
                </div>
                <div className="text-[17px] font-medium">{item.title}</div>
              </div>
              <div className="text-xl">{item?.icon2}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendSettings;
