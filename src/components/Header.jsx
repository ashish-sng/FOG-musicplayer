import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="mt-5 bg-gradient-to-b from-transparent to-gray-rgba opacity-60 flex flex-row justify-evenly items-center">
      <span>Music</span>
      <span>Podcast</span>
      <span>Live</span>
      <span>Radio</span>
      <SearchBar />
    </header>
  );
};

export default Header;
