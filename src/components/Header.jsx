import React from "react";
import SearchBar from "./SearchBar";
import { HEADERS } from "../assets/constant";

const Header = () => {
  return (
    <header className="pt-2 flex flex-row justify-center gap-10 items-center">
      <div className="flex flex-row justify-start gap-2">
        {HEADERS.map((header, index) => (
          <span
            key={index}
            className="text-white text-lg font-bold px-5 py-3 cursor-pointer font-poppins"
          >
            {header.title}
          </span>
        ))}
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
