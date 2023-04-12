import React from "react";
import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import {
  Header,
  PostController,
  TabBar,
  ThreeDotsIcon,
} from "../../components";
import AuthPage from "../AuthPage";
import { Link } from "react-router-dom";
const Profile = () => {
  const tabs = [
    {
      id: "post",
      title: "Posts",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "friends",
      title: "Friends",
    },
    {
      id: "photo",
      title: "Photos",
    },
    {
      id: "video",
      title: "Videos",
    },
    {
      id: "checkin",
      title: "Check-ins",
    },
    {
      id: "more",
      title: "More",
    },
  ];

  return (
    <AuthPage>
      <div className="">
        <div className="relative">
          <Header />
        </div>
        <div className="w-full flex flex-col items-center bg-[whitesmoke]">
          <div className="w-full h-[500px] shadow-lg flex flex-col items-center m-0 bg-gradient-to-b from-gray-700 via-black-80 to-white">
            <div className="w-[70%] h-3/4 relative">
              <img
                src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/10/Spooky-Moon-1.jpg?w=750"
                alt="coverphoto"
                className="w-full h-full object-cover cursor-pointer rounded-br-lg rounded-bl-lg"
              />
              <button className="h-[35px] w-[170px] flex items-center justify-center absolute rounded-[5px] bg-[gainsboro] border-[none] right-5 bottom-2.5 hover:cursor-pointer hover:bg-[#bbb6b6] active:opacity-70">
                <BsFillCameraFill size={20} />

                <b>&nbsp; Edit Cover Photo</b>
              </button>
            </div>
            <div className="w-2/5 h-2/5 relative">
              <div className="flex items-center absolute gap-2 md:left-[-180px] -top-10">
                <div className="h-40 w-40 relative rounded-[50%] border-4 border-solid border-[white]">
                  <img
                    src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="profiephoto"
                    className="rounded-full md:absolute border-2 border-white w-40 h-40"
                  />
                </div>
                <h4 className="text-3xl cursor-pointer m-0">
                  Utkarsh Arora
                  <p className="text-base m-0 opacity-90">661 friends</p>
                </h4>
              </div>
            </div>
            <div className="flex float-right">
              <div className="px-2 font-semibold">
                <button className="bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold flex items-center justify-center">
                  <IoAddSharp size={20} />
                  Add to Story
                </button>
              </div>
              <div className="px-2 font-semibold">
                <button className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold flex items-center justify-center">
                  {/* <i className="bx bx-edit-alt mr-2 text-xl"></i> */}
                  <MdEdit size={20} />
                  Edit Profile
                </button>
              </div>
            </div>
            <hr className="full flex self-center w-2/3 mt-2" />
            <div className=" flow-root ">
              <div className="float-right">
                {" "}
                <ThreeDotsIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%]  flex flex-col items-center bg-gray-100 ">
          <div className="">
            <div className="mt-4">
              <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                <h1 className="font-bold text-xl">Intro</h1>
              </div>
            </div>
            <div className="mr-12 mt-4">
              <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Photos</h1>
                  <a href="#" className="text-lg text-blue-700">
                    See All Photos
                  </a>
                </div>
              </div>
            </div>
            <div className="mr-12 mt-4">
              <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Friends</h1>
                  <Link
                    to=""
                    className="text-lg text-blue-700 hover:bg-blue-200"
                  >
                    See All Friends
                  </Link>
                </div>
                <div className="">
                  <p className="text-base text-gray-400">661 friends</p>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="bg-white p-0.5">
                      <img
                        src="./images/profile_photo_cat.jpg"
                        className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                      />
                      <Link to="" className="font-semibold text-sm">
                        Friend
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div><PostController/></div> */}
          </div>
        </div>
      </div>
    </AuthPage>
  );
};

export default Profile;
