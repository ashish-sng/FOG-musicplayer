import React from "react";
import { GENERAL, MENU } from "../assets/constant";
import { Logo } from "./svgs/Logo";

const Sidebar = () => {
  return (
    <div className="bg-black flex flex-col justify-between text-white w-100 p-10 h-screen">
      <div className="flex-col flex gap-10">
        <div className="flex flex-row items-center text-3xl gap-4">
          <Logo className="w-10 h-10" />
          <div className="font-bold hidden sm:block">
            <span className="text-red-600">Dream</span>Music
          </div>
        </div>
        <div className="p-2">
          <span>Menu</span>
          {MENU.map((item) => (
            <div
              key={item.title}
              className="text-white hover:cursor-pointer items-center flex flex-row py-2 gap-4"
            >
              {item.icon}
              <span className="text-white font-semibold hidden sm:block">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <span>General</span>
        {GENERAL.map((item) => (
          <div
            key={item.title}
            className="text-white hover:cursor-pointer items-center flex flex-row py-2 gap-10"
          >
            {item.icon}
            <span className="text-white font-semibold hidden sm:block">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
