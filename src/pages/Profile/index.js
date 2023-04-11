import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import AuthPage from "../AuthPage";
const Profile = () => {
  return (
    <AuthPage>
      <div className="w-full flex flex-col items-center bg-[whitesmoke]">
        <div className="w-full h-[475px] shadow-lg flex flex-col items-center m-0 bg-gradient-to-b from-gray-700 via-black-80 to-white">
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
            <div className="flex items-center absolute gap-2 left-[-180px] -top-10">
              <div
                className="h-40 w-40 relative rounded-[50%] border-4 border-solid border-[white];
"
              >
                <img
                  src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="profiephoto"
                  className="w-40 h-40 object-cover cursor-pointer rounded-[50%]"
                />
              </div>
              <h4 className="text-3xl cursor-pointer m-0">
                Utkarsh Arora
                <p className="text-base m-0 opacity-90">661 friends</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </AuthPage>
  );
};

export default Profile;
