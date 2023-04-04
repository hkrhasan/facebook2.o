import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Avatar from "../Avatar";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, selectUser } from "../../store/reducers/user.reducer";
import CircleIcon from "../CircleIcon";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

export default function UserMenuAvatar() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Avatar src={user?.image} tooltipTitle="Account" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-80 px-3 py-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none grid gap-y-3">
            <Menu.Item>
              {({ active }) => (
                <Menu.Items className="shadow-md w-full p-1 flex flex-col gap-y-2">
                  <Menu.Item className="hover:bg-gray-100 py-2 px-2 rounded-md text-lg">
                    <div className="flex items-center gap-x-3">
                      <Avatar width="35px" src={user?.image} />
                      <span>{user?.displayName}</span>
                    </div>
                  </Menu.Item>
                  <hr />
                  <Menu.Item className="hover:bg-gray-100 py-2 px-2 rounded-md text-md">
                    <div className="text-blue-500">See all profiles</div>
                  </Menu.Item>
                </Menu.Items>
              )}
            </Menu.Item>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <MenuItemRow
                    icon={IoSettingsOutline}
                    title="Setting and privacy"
                    leftIcon
                  />
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuItemRow
                    icon={TbLogout}
                    title="Logout"
                    onClick={() => dispatch({ type: LOGOUT })}
                  />
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function MenuItemRow({ icon, title, leftIcon, onClick }) {
  return (
    <div
      className="hover:bg-gray-100 py-2 px-2 rounded-md text-lg flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-x-3">
        <CircleIcon Icon={icon} className="p-2" />
        <span>{title}</span>
      </div>
      {leftIcon && <AiOutlineRight size={28} />}
    </div>
  );
}
