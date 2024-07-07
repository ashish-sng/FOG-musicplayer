import React from "react";
import Header from "./Header";
import Herobar from "./Herobar";
import Songs from "./Songs";
import useSongContext from "../hooks/useSongContext";

const Main = () => {
  const { songs, currentSong } = useSongContext();
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-red-500 to-gray-800 w-screen">
      <Header />
      <Herobar />
      <Songs />
    </div>
  );
};

export default Main;
