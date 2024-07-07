import React from "react";
import { SearchIcon } from "./svgs/Search";

const SearchBar = () => {
  return (
    <div className="flex justify-between px-4 font-mono font-bold py-1 border bg-red-800 rounded-full">
      <input
        type="text"
        value="Michael Jackson"
        placeholder="Michael Jackson"
        className="bg-transparent text-white"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
