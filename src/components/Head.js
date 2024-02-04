import React from "react";
import youtube_logo from "../assets/youtube-logo.png";
import hamburger_icon from "../assets/hamburger-icon.jpeg";
import user_icon from "../assets/user-icon.png";
import search_icon from "../assets/search-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 my-2 shadow-md">
      <div className="flex col-span-1 h-14">
        <img
          src={hamburger_icon}
          alt="hamburger-icon"
          className="cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={youtube_logo} alt="youtube-logo mx-2" className="" />
      </div>
      <div className="col-span-10 text-center pr-20">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 bg-gray-100 px-3 pb-[14px] rounded-r-full">
          <img src={search_icon} alt="search-icon" className="w-5 pt-1.5" />
        </button>
      </div>
      <div className="col-span-1">
        <img src={user_icon} alt="user-icon" className="h-10" />
      </div>
    </div>
  );
};

export default Head;
