import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="h-screen w-full bg-[#f0f2f5] flex items-center justify-center">
      <div className="max-w-[400px] grid gap-y-9 md:grid-cols-2 md:max-w-[1024px] md:gap-x-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-blue-500 text-6xl font-bold">facebook 2.o</h1>
          <p className="text-2xl text-black">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="bg-white shadow-lg grid gap-y-6 rounded-md p-5">
          <form className="grid gap-y-6">
            <input
              type="text"
              className="w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500"
              placeholder="Email Address or phone number"
            />
            <input
              type="password"
              className="w-full border-2 border-gray-200 rounded-md p-4 focus-visible:outline-blue-500"
              placeholder="Password"
            />
            <input
              type="submit"
              value="Log in"
              className="bg-blue-500 p-3 rounded-md text-white font-bold text-xl cursor-pointer hover:bg-blue-600 transition delay-150 ease-in-out duration-300"
            />
          </form>
          <Link
            to="/forgot-password"
            className="text-center text-md text-blue-500"
          >
            Forgotten password
          </Link>

          <hr />

          <div className="flex items-center justify-center">
            <button className="bg-green-500 max-w-max text-white rounded-md py-3 px-4 font-bold">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
