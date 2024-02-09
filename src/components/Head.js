import React, { useEffect, useState } from "react";
import youtube_logo from "../assets/youtube-logo.png";
import hamburger_icon from "../assets/hamburger-icon.jpeg";
import user_icon from "../assets/user-icon.png";
import search_icon from "../assets/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!searchText) {
      setSearchSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchText in searchCache) {
        setSearchSuggestions(searchCache[searchText]);
      } else {
        getSearchRecommendations(searchText);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  const getSearchRecommendations = async (searchText) => {
    if (!searchText) return;
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const jsonData = await data.json();
    console.log(jsonData[1], "search suggestions");
    setSearchSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchText]: jsonData[1],
      })
    );
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
        <div className="flex flex-col">
          <div className="flex justify-center align-center">
            <input
              type="text"
              className="w-1/2 border border-gray-400 p-2 rounded-l-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button className="border border-gray-400 bg-gray-100 px-3 pb-[14px] rounded-r-full">
              <img src={search_icon} alt="search-icon" className="w-5 pt-1.5" />
            </button>
          </div>
          {showSuggestions && (
            <ul className="w-[550px] bg-white card m-auto border border-grey-100 rounded-lg shadow-md absolute text-left right-[33%] top-[7.5%] cursor-pointer">
              {searchSuggestions?.map((suggestionText) => (
                <li className="hover:bg-gray-200 p-2 flex" key={suggestionText}>
                  <img
                    src={search_icon}
                    alt="search-icon"
                    className="w-5 pt-1.5"
                  />
                  <span className="pl-2 pt-1">{suggestionText}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img src={user_icon} alt="user-icon" className="h-10" />
      </div>
    </div>
  );
};

export default Head;
